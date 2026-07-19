import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_363 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['しっぽ','のび','安らぎ','染まっ','くっきり','出先','とろ','割る']
const B_T = ['責める','信憑','引き合い','駆け引き','特筆','計る','かねる','直近']
const C_T = ['撲滅','亡くなる','身柄','漢方','災い','収縮','密輸','無差別']
const D_T = ['オルガン','学童','祭壇','観覧','顕微鏡','プレビュー','ガーナ','売れ行き']

const data = [
  {id:'conv_07221',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、うちの愛犬、しっぽ、本気で、絶対、振って、嬉しそうだよ、本気で、絶対、可愛い、絶対、本気、絶対、本気で、絶対、絶対、本気で、絶対。',en:"Mom — our dog tail-wag glad-look, cute absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'うん。お洗濯物、本気で、絶対、のびのびと、絶対、干してあげましょうね、翔くん、ね、本気で、絶対、本気、絶対、本気で、絶対、絶対、本気、絶対、絶対。',en:"Yes. Laundry — relaxed-hung, Sho absolute serious really.",style:'Soft.'},
    {speaker:'sho_child',jp:'お祖父ちゃんの家、本気で、絶対、安らぎを、絶対、感じるんだ、ぼく、本気で、絶対、好きなんだ、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"Grandpa's — peace-feel, love absolute serious really.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'空、本気で、絶対、夕焼けで、絶対、赤く、染まっているわよね、翔くん、絶対、綺麗、本気、絶対、本気で、絶対、絶対、本気で、絶対、絶対、本気、絶対。',en:"Sky — sunset red-dyed, Sho pretty absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'お父さんの写真、本気で、絶対、くっきりと、絶対、写ってるよ、ママ、見て、本気で、絶対、本気、絶対、本気で、絶対、絶対、本気で、絶対、絶対、絶対、本気。',en:"Dad photo — clear-captured, Mom see, absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お父さん、本気で、絶対、出先から、絶対、お電話、絶対、くれたわよ、翔くん、安心、本気、絶対、本気で、絶対、絶対、本気で、絶対、絶対、本気、絶対、絶対。',en:"Dad — out-place phoned, Sho relax, absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'お祖母ちゃんの料理、本気で、絶対、とろっとして、絶対、美味しいんだよ、ママ、本気で、絶対、本気、絶対、本気で、絶対、絶対、本気で、絶対、絶対、本気、絶対。',en:"Granny food — soft-thick tasty, Mom absolute serious really.",style:'Praising.'},
    {speaker:'yumiko_mom',jp:'お皿、本気で、絶対、割ることが、絶対、ないように、絶対、注意してね、翔くん、本気で、絶対、約束、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"Plate — don't-break, Sho careful, promise absolute serious really.",style:'Direction close.'},
  ]},
  {id:'conv_07222',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、うちの愛犬、本気で、絶対、しっぽ、絶対、振って、絶対、メイちゃんを、絶対、待ってるよ、本気で、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気で。',en:"Aoi — our dog tail-wag, Mei-wait, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。お庭、本気で、絶対、のびのびと、絶対、植物、絶対、育ってるわよ、葵で、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Yeah. Garden — relaxed-plants growing, Aoi Mei admire absolute serious really.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'葵の店、本気で、絶対、安らぎ、絶対、感じる空間ね、メイちゃん、本気で、絶対、お気に入り、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-store — peace-feel space, Mei fave absolute serious really.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'お客様、本気で、絶対、葵の雰囲気に、絶対、染まってくださっているわよ、メイちゃん、本気で、絶対、本気、絶対、本気で、絶対、絶対、本気で、絶対、絶対、絶対。',en:"Cust — Aoi-air dyed-in, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'メニュー、本気で、絶対、写真、絶対、くっきり、絶対、撮れていて、葵、本気で、絶対、感心、本気、絶対、本気で、絶対、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Menu — photo clear-taken, Aoi admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'メイちゃん、本気で、絶対、お出先から、絶対、お電話、絶対、ありがとう、本気で、絶対、嬉しい、絶対、本気、本気で、絶対、本気で、絶対、絶対、本気、絶対、絶対。',en:"Mei — out-place phoned, thanks, glad absolute serious really.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'葵の新作スイーツ、本気で、絶対、とろっとして、絶対、絶品ね、メイちゃん、本気で、絶対、感激、絶対、本気、本気で、絶対、本気で、絶対、絶対、本気、絶対、絶対。',en:"Aoi new sweet — thick-perfect, Mei moved absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'スタッフ、本気で、絶対、お皿、絶対、割ることが、絶対、ないように、絶対、徹底してるよ、メイちゃん、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、絶対。',en:"Staff — plate don't-break thorough, Mei absolute serious really.",style:'Practical close.'},
  ]},
  {id:'conv_07223',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前の家の愛犬、本気で、絶対、しっぽ、絶対、よく、振ってくれるよね、私、本気で、絶対、可愛い、絶対、本気、本気で、絶対、本気で、絶対、絶対、本気で。',en:"Riku — your dog tail-wag often, cute absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。お前、本気で、絶対、最近、絶対、のびのびと、絶対、過ごしているように見えるぜ、桜、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Yeah. You — lately relaxed-look, Sakura admire absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'部活後、本気で、絶対、家、絶対、安らぎ、絶対、感じるよね、リク、本気で、絶対、共感、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Post-club — home peace-feel, Riku empathy absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'紅葉、本気で、絶対、街、絶対、染まって、絶対、綺麗だよな、桜、本気で、絶対、見に行こうな、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、絶対。',en:"Autumn-leaves — town dyed pretty, Sakura see-go, absolute serious really.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'写真の輪郭、本気で、絶対、くっきり、絶対、写ってるよ、リク、お前の写真、本気で、絶対、上手、絶対、本気、本気で、絶対、本気で、絶対、絶対、本気で、絶対。',en:"Photo-outline — clear, Riku photo good absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'お父さん、本気で、絶対、出先から、絶対、急いで、絶対、帰ってきたんだぜ、桜、本気で、絶対、本気、絶対、本気で、絶対、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Dad — out-place hurried-back, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'家庭科で、本気で、絶対、とろっとした、絶対、シチュー、絶対、作ったよ、リク、本気で、絶対、美味しい、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、絶対。',en:"Home-ec — thick stew made, Riku tasty absolute serious really.",style:'Cheerful.'},
    {speaker:'riku_teen',jp:'お皿、本気で、絶対、勢いよく、絶対、割ること、絶対、ないように、絶対、お互いに、注意しような、桜、本気で、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"Plate — strongly don't-break, Sakura mutual-careful absolute serious really.",style:'Direction close.'},
  ]},
  {id:'conv_07224',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、飼ってた犬、絶対、しっぽ、絶対、よく、振ってくれたわよな、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Youth — pet-dog tail-wag often, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、二人で、絶対、のびのびと、絶対、過ごしたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Yes. Youth — two relaxed-spent, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'庭で、本気で、絶対、お茶を飲む、絶対、安らぎの時間、絶対、本当に、絶対、大切ね、ばあさん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、本気。',en:"Garden — tea-time peace-time vital, gran absolute serious really.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'昔、本気で、絶対、桜、絶対、ピンクに、絶対、染まった、絶対、思い出、絶対、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Old — cherry pink-dyed memory, remember dear?, absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃の写真、本気で、絶対、くっきり、絶対、写ってるわよな、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Youth-photo — clear, gran remember?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'息子、本気で、絶対、お出先から、絶対、心配して、絶対、電話、絶対、くれたわよ、あなた、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気。',en:"Son — out-place worry-phoned, dear absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昔、本気で、絶対、とろっとした、絶対、お祖母ちゃんの煮物、絶対、美味しかったわよな、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Old — thick Granny-stew tasty, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'最近、お祖父ちゃん、本気で、絶対、お皿、絶対、割ること、絶対、増えてきたわよね、あなた、本気で、絶対、お互いに、注意しましょうね、絶対、本気、本気で、絶対。',en:"Lately — Grandpa plate-break increased, dear mutual-careful absolute serious really.",style:'Concerned close.'},
  ]},
  {id:'conv_07225',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さんの愛犬、本気で、絶対、しっぽ、絶対、振って、絶対、翔くんを、絶対、待ってたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Sho — Mei-sis dog tail-wag Sho-wait, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さんの家、本気で、絶対、のびのびと、絶対、過ごせるんだよ、ぼく、本気で、絶対、好き、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis home — relaxed-spend, love absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'メイ姉さんと、本気で、絶対、いる時、絶対、翔くん、絶対、安らぎ、絶対、感じてくれてるみたいで、本気で、絶対、嬉しい、絶対、本気、本気で、絶対、本気で。',en:"With Mei-sis — Sho peace-feel-like, glad absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'公園の葉っぱ、本気で、絶対、赤に、絶対、染まったね、メイ姉さん、本気で、絶対、綺麗、絶対、本気、本気で、絶対、本気で、絶対、絶対、本気、絶対、絶対、絶対。',en:"Park leaves — red-dyed, Mei-sis pretty absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'翔くんの写真、本気で、絶対、くっきり、絶対、撮れたわよ、メイ姉さん、本気で、絶対、上手、絶対、本気、本気で、絶対、本気で、絶対、絶対、本気で、絶対、絶対、絶対。',en:"Sho-photo — clear-taken, Mei-sis good absolute serious really.",style:'Praising.'},
    {speaker:'sho_child',jp:'メイ姉さんから、本気で、絶対、お出先で、絶対、メッセージ、絶対、もらえると、嬉しいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、絶対。',en:"From Mei-sis — out-place msg-get glad, absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、とろっとした、絶対、プリン、絶対、作ってあげるね、翔くん、本気で、絶対、楽しみ、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"Mei-sis — thick pudding make, Sho fun absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、メイ姉さんの大事な、絶対、お皿、絶対、割らないように、絶対、気をつけるね、本気で、絶対、約束、絶対、本気、本気で、絶対、本気で、絶対。',en:"Me — Mei-sis precious plate don't-break careful, promise absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07226',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'失敗、本気で、絶対、社員、絶対、責めることなく、絶対、改善、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Failure — staff without-blame improve advance, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。報告書、本気で、絶対、信憑性、絶対、徹底させております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Report — credibility thorough, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'過去の事例、本気で、絶対、引き合いに、絶対、出して、絶対、説得しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"Past cases — quote-cite persuade, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。商談、本気で、絶対、駆け引きが、絶対、必要ですね、本気で、絶対、慎重に、進めてまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Yes. Deal — strategy needed, careful-advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'若手の働き、本気で、絶対、特筆すべき、絶対、ものがあるな、本気で、頼んだぞ、絶対、評価していこう、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Youth-work — notable-exist, eval, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。生産量、本気で、絶対、毎月、絶対、計っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Prod-vol — monthly measure, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'お得意様の、本気で、絶対、ご要望、絶対、お断りしかねる、絶対、丁寧に、対応しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"VIP req — un-refusable, careful-resp, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。直近の業績、本気で、絶対、好調、絶対、社員、皆、頑張ってくれて、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Recent perf — strong, all-staff-tried, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07227',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'部下を、本気で、絶対、責めるばかりでは、絶対、ダメよね、本気で、絶対、励まそうね、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、本気で、絶対、絶対、本気。',en:"Subord — only-blame no-good, encourage absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。データの信憑性、本気で、絶対、徹底的に、絶対、確認しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Data credibility — thorough-verify, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'お客様の引き合い、本気で、絶対、増えてきていますね、本気で、絶対、嬉しい、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気で。',en:"Cust quotes — increasing, glad absolute serious really.",style:'Cheerful.'},
    {speaker:'kenji_office',jp:'はい。商談、本気で、絶対、駆け引きの場面、絶対、ありますが、絶対、誠実に、進めてまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Yes. Deal — strategy scenes exist but honest-advance, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'今月の業績、本気で、絶対、特筆すべき、絶対、内容ね、本気で、絶対、社員、皆、絶対、頑張ってくれて、本気で、絶対、感謝、本気、絶対、本気で、絶対、絶対、本気で、絶対。',en:"This-month perf — notable content, all-staff-tried, gratitude absolute serious really.",style:'Praising.'},
    {speaker:'kenji_office',jp:'はい。お客様の満足度、本気で、絶対、計っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Cust-satisf — measure, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'急な要請、本気で、絶対、お断りしかねる、絶対、状況、絶対、慎重に、対応しましょう、本気で、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、絶対、本気で。',en:"Sudden req — un-refusable situation careful-resp, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。直近のアンケート、本気で、絶対、お客様、絶対、ご好評、いただいております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Yes. Recent survey — cust favorable, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07228',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究で、本気で、絶対、自分を、絶対、責めずに、絶対、前向きに、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"Ren — research without-self-blame positive-advance, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。論文データの、本気で、絶対、信憑性、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Paper-data credibility — thorough, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'過去の研究、本気で、絶対、引き合いに、絶対、出して、絶対、論じろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Past research — quote-cite argue, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。指導教官との、本気で、絶対、駆け引き、絶対、慎重に、進めてまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Adviser-strategy — careful advance, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'君の論文、本気で、絶対、特筆すべき、絶対、点、絶対、多くあるぞ、本気で、頼んだぞ、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Your paper — notable points many-exist, ask absolute serious really.",style:'Praising.'},
    {speaker:'ren_uni',jp:'はい。実験データ、本気で、絶対、何度も、絶対、計っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Exp data — many-times measure, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'共同研究の依頼、本気で、絶対、お断りしかねる、絶対、状況、絶対、慎重に、判断しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Joint-research req — un-refusable, careful-decide, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。直近の論文、本気で、絶対、評価いただきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、本気で、絶対。',en:"Yes. Recent paper — eval-received, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07229',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'被害者、本気で、絶対、責めるつもりは、絶対、ありません、絶対、警察、絶対、寄り添ってまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Victim — blame intent none, police-snuggle, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。証言の信憑性、本気で、絶対、警察、絶対、慎重に、絶対、検証しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Yes. Testimony credibility — police careful-verify, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'類似事件を、本気で、絶対、引き合いに、絶対、出して、絶対、捜査、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Similar cases — quote-cite inv-advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、警察様、絶対、駆け引き、絶対、することなく、絶対、誠実に、対応してまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で。',en:"Yes. Our co — police no-strategy honest-resp, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、特筆すべき、絶対、捜査、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Case — notable inv advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。社員数、本気で、絶対、警察様の、絶対、要請に応じて、絶対、計っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Yes. Staff-count — police-req measure, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'証言、本気で、絶対、応じかねる、絶対、市民、絶対、いらっしゃるんですよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Testimony — un-respondable citizens exist, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。直近の防犯活動、本気で、絶対、効果、絶対、出ております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Recent crime-prev — effect out, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07230',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お父さん、絶対、社員、絶対、責めることなく、絶対、育ててきたぞ、お前にも、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で。',en:"Founding — Dad staff without-blame raised, you ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの言葉、本気で、絶対、信憑性、絶対、本気で、絶対、社員、絶対、信じております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Yes. Dad-words — credibility staff-believe, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'創業時、本気で、絶対、競合を、絶対、引き合いに、絶対、出してきたぞ、お父さん、お前にも、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Founding — rival quote-cite, Dad you ask absolute serious really.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、駆け引き、絶対、なく、絶対、誠実、絶対、貫いてまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Yes. Since Dad-era — without-strategy honest-pierce, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'創業期の業績、本気で、絶対、特筆すべき、絶対、ものだったぞ、お父さん、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Founding-perf — notable, Dad ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、業績、絶対、計ってきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Since Dad-era — perf-measured, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お断りしかねる、絶対、要請、絶対、お父さん、絶対、慎重に、対応したぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対。',en:"Founding — un-refusable Dad careful-resp, ask absolute serious really.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。直近、本気で、絶対、お父さん、絶対、お元気で、絶対、嬉しいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、本気で。',en:"Yes. Recent — Dad-healthy glad, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07231',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、犯罪撲滅、絶対、目指してまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police — crime-eradicate aim, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、被害者の方、絶対、亡くなる前に、絶対、警察に、絶対、通報されたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Case — victim before-dying police-reported, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。容疑者の身柄、本気で、絶対、確保いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Suspect-custody — secured, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害者、本気で、絶対、漢方医、絶対、利用していた、絶対、と、聞きました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Victim — kanpo-using heard, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。本件、本気で、絶対、災いを、絶対、繰り返さないよう、絶対、警察、絶対、頑張ります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Case — disaster repeat-avoid police-try, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'血管の収縮、本気で、絶対、被害者の死因、絶対、関係していたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Vessel-contract — victim death-cause related, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、本気で、絶対、密輸、絶対、関与、絶対、容疑、絶対、調べております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Yes. Suspect — smuggle-involve susp, inv, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'無差別、本気で、絶対、犯罪、絶対、本当に、絶対、許せない、本気で、絶対、警察、絶対、お疲れ様、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Indiscriminate crime — unforgivable, police-tired-thanks absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07232',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses historical research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、戦時、本気で、絶対、伝染病撲滅、絶対、目指した医師、絶対、論文で、扱っていましたね、本気で、立派、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Ren — wartime epidemic-eradicate doctors paper-handled, splendid absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。戦時、本気で、絶対、多くの方が、絶対、亡くなる、絶対、悲しい歴史、絶対、論文で、扱いました、本気で、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で。',en:"Yes. Wartime — many-died sad-hist paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、政治犯の身柄、絶対、扱い、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対。',en:"Wartime — pol-criminal-custody handling paper-handled, view broad splendid absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。戦時、本気で、絶対、漢方医療、絶対、重要な役割、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、本気、本気で、絶対、感謝、本当に、絶対、本気で。',en:"Yes. Wartime kanpo — vital role paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦争という、本気で、絶対、災い、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"War — disaster paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。戦時、本気で、絶対、経済の収縮、絶対、深刻でしたね、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対。',en:"Yes. Wartime — econ-contract severe paper-handled, deep research absolute gratitude.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、密輸、絶対、活発化した、絶対、歴史、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対。',en:"Wartime — smuggling activated hist paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。戦時、本気で、絶対、無差別、絶対、空襲、絶対、論文で、扱いました、本気で、本当に、辛い歴史、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Wartime — indiscriminate air-raid paper-handled, hard hist absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07233',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、感染症撲滅、本気で、絶対、医療界、絶対、目指してまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Ren — infect-eradicate med-world aim, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'患者さんが、本気で、絶対、亡くなる時、絶対、医師として、絶対、辛い瞬間ですよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Patient — dying-time as doctor hard, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。患者さんの身柄、本気で、絶対、医療として、絶対、慎重に、絶対、扱っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Yes. Patient-care — careful handle, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'漢方医学、本気で、絶対、現代医療と、絶対、融合、絶対、進んでますね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Kanpo — modern-med merge advancing, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。災いを、本気で、絶対、防ぐ医療、絶対、目指してまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Disaster prevent-med aim, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'血管の収縮、本気で、絶対、医療研究、絶対、進んでいますよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、本気。',en:"Vessel-contract — med-research advancing, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。違法薬物の密輸、本気で、絶対、医療界、絶対、警戒しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Illegal-drug smuggle — med alert, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'無差別、本気で、絶対、感染症、絶対、対策、絶対、進んでいますか?先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Indiscriminate infect-measures — advancing?, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07234',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp strategy',lines:[
    {speaker:'hiroshi_boss',jp:'業界の不正、本気で、絶対、撲滅、絶対、目指せ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Industry-fraud — eradicate aim, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。創業者、本気で、絶対、亡くなる前、絶対、社員に、絶対、伝えた言葉、絶対、引き継いでまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Yes. Founder — pre-dying staff-conveyed words inherit, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'機密の身柄、本気で、絶対、絶対、社外に、絶対、持ち出すな、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Conf-custody — outside don't-take, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。漢方系の新事業、本気で、絶対、検討中です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Kanpo new-biz — studying, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界の災い、本気で、絶対、避けるよう、絶対、慎重に、絶対、判断しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Industry-disaster — avoid careful-judge, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。市場の収縮、本気で、絶対、慎重に、絶対、対応、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Market-contract — careful resp advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'当社、本気で、絶対、密輸、絶対、無縁、絶対、コンプラ、絶対、徹底させろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Our co — smuggle un-related, compl thorough, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。無差別、本気で、絶対、お客様、絶対、対応、絶対、信頼関係、絶対、築いてまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Yes. Indiscriminate — cust-resp trust-build, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07235',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、戦時、本気で、絶対、伝染病撲滅、絶対、論文で、扱っていましたね、本気で、立派、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Sakura — wartime epidemic-eradicate paper-handled, splendid absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。戦時、本気で、絶対、市民、絶対、亡くなる、絶対、悲しい歴史、絶対、論文で、扱いました、本気で、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対。',en:"Yes. Wartime — citizen-died sad-hist paper-handled, deep research absolute gratitude.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'戦犯の身柄、本気で、絶対、戦後、絶対、扱い、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対。',en:"War-crim custody — post-war handling paper-handled, view broad splendid absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦時、本気で、絶対、漢方医療、絶対、人々を救った、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、本気、本気で、絶対、感謝、本当に、絶対、本気で。',en:"Yes. Wartime — kanpo saved-people paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦争という、本気で、絶対、災い、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"War — disaster paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。戦後、本気で、絶対、社会の収縮、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、本気、本気で、絶対、感謝、本当に、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Post-war soc-contract paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、密輸、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Wartime — smuggling paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦時、本気で、絶対、無差別、絶対、攻撃、絶対、論文で、扱いました、本気で、本当に、辛い歴史、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Yes. Wartime — indiscriminate attack paper-handled, hard hist absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07236',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、教会で、本気で、絶対、オルガン、絶対、聴いてきたわよ、メイちゃん、本気で、絶対、感動、絶対、本気、本気で、絶対、本気で、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — church organ listened, Mei moved absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。学童保育、本気で、絶対、子供たち、絶対、葵で、絶対、お茶、絶対、立ち寄ってくれるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yeah. Daycare — kids Aoi-tea stopped-by, Mei absolute serious really.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'結婚式、本気で、絶対、祭壇、絶対、本当に、絶対、立派だったわよ、メイちゃん、葵、本気で、絶対、感動、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Wedding — altar splendid, Mei Aoi moved absolute serious really.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、観覧車から、絶対、街、絶対、見たって、お客様、絶対、おっしゃってたよ、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Aoi — cust-Ferris-wheel-town-saw said, Mei admire absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、顕微鏡みたいに、絶対、細かい、絶対、お皿、絶対、選んでるのよ、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"Aoi — microscope-like detail-plate choose, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'新メニューの、本気で、絶対、プレビュー、絶対、お得意様、絶対、ご覧いただいているよ、メイちゃん、本気で、絶対、感謝、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"New menu preview — VIP-viewed, Mei gratitude absolute serious really.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、ガーナチョコレート、絶対、葵で、絶対、お客様、絶対、好評、なんだって、メイちゃん、本気で、絶対、嬉しい、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Aoi — Ghana-choco Aoi cust-favor, Mei glad absolute serious really.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、新作の売れ行き、絶対、好調、絶対、本当に、絶対、嬉しい、本気で、絶対、感謝、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Aoi — new-product sales strong, glad gratitude absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07237',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、学校の、本気で、絶対、オルガン、絶対、ぼく、絶対、弾けるようになったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — school organ play-able, absolute serious really.",style:'Proud child.'},
    {speaker:'yumiko_mom',jp:'うん。学童保育、本気で、絶対、翔くん、絶対、お友達、絶対、いっぱい、できているわよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Yes. Daycare — Sho friends many-made, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'お祖父ちゃんち、本気で、絶対、祭壇、絶対、立派だよね、ママ、本気で、絶対、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Grandpa's — altar splendid, Mom remember?, absolute serious really.",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'今度、本気で、絶対、観覧車、絶対、家族で、絶対、乗ろうね、翔くん、本気で、絶対、楽しみ、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Next — Ferris-wheel family-ride, Sho fun absolute serious really.",style:'Eager.'},
    {speaker:'sho_child',jp:'理科で、本気で、絶対、顕微鏡、絶対、覗いたんだ、ママ、本気で、絶対、面白かった、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sci — microscope peeked, Mom fun absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お父さん、本気で、絶対、映画のプレビュー、絶対、見てきたって、翔くん、絶対、楽しみね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Dad — film-preview saw, Sho fun absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ガーナのチョコレート、本気で、絶対、ぼく、絶対、好きなんだよ、ママ、本気で、絶対、買って、絶対、お願い、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Ghana-choco — love, Mom buy-please absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お父さんの新製品、本気で、絶対、売れ行き、絶対、好調だって、翔くん、家族で、絶対、お祝いしようね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Dad new-product — sales strong, Sho family-cele absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07238',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、音楽の授業で、本気で、絶対、オルガン、絶対、弾く課題、絶対、出たよね、お前、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Riku — music class organ-play assn, remember?, absolute serious really.",style:'Reflective teen.'},
    {speaker:'riku_teen',jp:'うん。お祖母ちゃん、本気で、絶対、学童保育、絶対、ボランティアで、絶対、頑張ってるんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Yeah. Granny — daycare-volunteer tries, Sakura absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'修学旅行で、本気で、絶対、お寺の祭壇、絶対、見てきたよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、本気で、絶対。',en:"School trip — temple-altar saw, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'夏休み、本気で、絶対、観覧車、絶対、お前と、絶対、乗ろうな、桜、本気で、絶対、約束、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Summer — Ferris-wheel you-ride, Sakura promise absolute serious really.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'生物部で、本気で、絶対、顕微鏡、絶対、よく、絶対、使ってるよ、リク、本気で、絶対、面白い、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Bio-club — microscope often-use, Riku fun absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'映画の、本気で、絶対、プレビュー、絶対、見たいよな、桜、お互いに、絶対、約束しような、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Film preview — see-want, Sakura mutual-promise absolute serious really.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'ガーナ産の、本気で、絶対、チョコ、絶対、お父さんのお土産で、絶対、もらったわよ、リク、本気で、絶対、嬉しかった、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Ghana choco — Dad-souv-received, Riku glad absolute serious really.",style:'Cheerful.'},
    {speaker:'riku_teen',jp:'文化祭、本気で、絶対、出店の売れ行き、絶対、好調らしいぜ、桜、お互いに、絶対、頑張ろうな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Cult-fest — stall-sales strong, Sakura mutual-try absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07239',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、教会の、絶対、オルガン、絶対、聴きに行ったわよな、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Youth — church-organ listened, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。昔、本気で、絶対、学童、絶対、まだ、絶対、なかった時代、絶対、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Old — daycare un-existed era, remember dear?, absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'昔の、本気で、絶対、神社の祭壇、絶対、立派だったわよな、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Old — shrine-altar splendid, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、観覧車、絶対、二人で、絶対、乗ったわよね、覚えてる、あなた?本気で、絶対、ロマンチック、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Youth — Ferris-wheel two-rode, remember dear?, romantic absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、顕微鏡、絶対、まだ、絶対、貴重な時代だったぞ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Youth — microscope still-precious era, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'最近、本気で、絶対、映画の、絶対、プレビュー、絶対、ネットで、絶対、見られるわよね、あなた、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Lately — film-preview net-see-able, dear absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ガーナ、絶対、世界地図で、絶対、見たわよな、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Ghana world-map saw, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'創業時、本気で、絶対、お父さんの、絶対、商品の売れ行き、絶対、心配したわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Founding — Dad's product-sales worry, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07240',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、店内に、本気で、絶対、オルガンの曲、絶対、流すと、絶対、雰囲気、絶対、お洒落になるで、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Aoi — interior organ-play air stylish, absolute serious really.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。学童保育の、本気で、絶対、お子様向け、絶対、葵で、絶対、特別メニュー、絶対、用意したいですね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Yes. Daycare-kid Aoi special-menu prep want, absolute serious really.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'結婚式向けに、本気で、絶対、祭壇風の、絶対、装飾、絶対、葵で、絶対、提供しよか、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Wedding — altar-style decor Aoi-provide?, absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。地域の、本気で、絶対、観覧車近く、絶対、新店舗、絶対、出してみたいですね、葵さん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Local Ferris-wheel-near new-store out-want, Aoi absolute serious really.",style:'Eager.'},
    {speaker:'daichi_kansai',jp:'食材の、本気で、絶対、顕微鏡レベルの、絶対、品質チェック、絶対、本気で、絶対、進めよか、葵さん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Ingred — microscope-level QC advance?, Aoi absolute serious really.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。新メニューの、本気で、絶対、プレビュー、絶対、お得意様に、絶対、先に、絶対、見ていただきましょう、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. New-menu preview — VIP-first see, absolute serious really.",style:'Reflective.'},
    {speaker:'daichi_kansai',jp:'ガーナ産チョコ、本気で、絶対、葵で、絶対、特別メニュー、絶対、開発しよか、葵さん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Ghana-choco — Aoi special-menu dev?, Aoi absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。葵の売れ行き、本気で、絶対、好調、絶対、続けていきたいですね、葵さん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Aoi-sales strong-continue want, Aoi absolute serious really.",style:'Warm close.'},
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

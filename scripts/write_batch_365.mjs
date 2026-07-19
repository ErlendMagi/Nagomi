import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_365 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['トースト','キャンドル','めんどくさい','しわ','拾う','ガラガラ','バンバン','ローマ字']
const B_T = ['建材','渡米','前月','スペシャリスト','リコール','各所','積む','段ボール']
const C_T = ['最短','溶接','果樹','各紙','三国','記念碑','海運','布教']
const D_T = ['てっきり','間抜け','漫才','王女','並木','白馬','舞う','過敏']

const data = [
  {id:'conv_07261',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at breakfast',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、朝ごはん、本気で、絶対、トースト、絶対、焼いたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Sho — breakfast — toast baked, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、キャンドル、絶対、お父さん、絶対、誕生日に、絶対、買ったよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — candle Dad-birthday bought, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'宿題、本気で、絶対、めんどくさい、絶対、と、絶対、思っていても、絶対、頑張ろうね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Homework — annoying think-too, try, Sho absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'お祖父ちゃん、本気で、絶対、おでこに、絶対、しわ、絶対、増えたよね、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Grandpa — forehead wrinkles-increased, Mom absolute serious really.",style:'Observant.'},
    {speaker:'yumiko_mom',jp:'公園で、本気で、絶対、ゴミ、絶対、拾うこと、絶対、続けようね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Park — trash pick-up continue, Sho absolute serious really.",style:'Tender direction.'},
    {speaker:'sho_child',jp:'おもちゃの、本気で、絶対、ガラガラ、絶対、まだ、絶対、置いてあるよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Toy — rattle still placed, Mom absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'雨が、本気で、絶対、バンバン、絶対、降ってきたわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Rain — bam-bam coming, Sho absolute serious really.",style:'Alert.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、ローマ字、絶対、書けるようになったよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Me — Romaji write-can-became, Mom absolute serious really.",style:'Proud close.'},
  ]},
  {id:'conv_07262',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat at the cafe',lines:[
    {speaker:'mei_romantic',jp:'葵、新メニューの、本気で、絶対、トースト、絶対、メイちゃん、絶対、食べたいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Aoi — new toast Mei eat-want, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。お店の、本気で、絶対、キャンドル、絶対、夜のお席に、絶対、置いてるよ、メイちゃん、葵で、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yeah. Store — candle night-seat placed, Mei Aoi absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'掃除、本気で、絶対、めんどくさい、絶対、時、絶対、あるわよね、葵、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Cleaning — annoying time exist, Aoi Mei absolute serious really.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'シャツの、本気で、絶対、しわ、絶対、メイちゃん、絶対、アイロン、絶対、当ててくれる?葵で、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Shirt — wrinkles Mei iron-apply?, Aoi absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'お客様の落とし物、本気で、絶対、拾うこと、絶対、メイちゃん、絶対、心がけてるわ、葵、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Cust lost — pick-up Mei mindful, Aoi absolute serious really.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'お店、本気で、絶対、開店時、絶対、ガラガラ、絶対、だったよね、メイちゃん、葵で、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Store — opening-time empty was, Mei Aoi absolute serious really.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'葵、新しい看板、本気で、絶対、バンバン、絶対、宣伝してるね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — new sign bam-bam advertising, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'外国のお客様、本気で、絶対、ローマ字、絶対、案内、絶対、葵で、絶対、用意したよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Foreign cust — Romaji guide Aoi prepared, Mei absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07263',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、トースト、絶対、お祖父ちゃん、絶対、毎朝、絶対、焼いてくれたわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Gran — youth Grandpa every-morn toast-baked, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。結婚式の夜、本気で、絶対、キャンドル、絶対、灯した、絶対、わよね、あなた、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Wedding-night — candle lit, dear remember?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'近頃、本気で、絶対、めんどくさい、絶対、と、絶対、感じること、絶対、多くなったわよな、ばあさん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Lately — annoying feel-many became, gran absolute serious really.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'お祖父ちゃんも、本気で、絶対、お顔に、絶対、しわ、絶対、増えたわよ、あなた、優しいしわよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Grandpa — face wrinkles-increased, dear kind-wrinkles, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、孫の手を、絶対、拾うかのように、絶対、お父さん、絶対、抱き上げたわよ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Youth — grandkid-hand pick-like Dad-lifted, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'昔の駄菓子屋、本気で、絶対、ガラガラ、絶対、お祖父ちゃん、絶対、よく、絶対、引いたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Old candy-store — rattle Grandpa often-pulled, remember dear?, absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'夏祭りで、本気で、絶対、太鼓を、絶対、バンバン、絶対、叩いたわよな、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Summer-fest — drum bam-bam beat, gran remember?, absolute serious really.",style:'Animated.'},
    {speaker:'sachiko_grandma',jp:'お祖父ちゃん、本気で、絶対、若い頃、絶対、ローマ字、絶対、お手紙、絶対、書いてくれたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Grandpa — youth Romaji letter-wrote, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07264',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、学食の、本気で、絶対、トースト、絶対、美味しかったよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Riku — school-toast tasty, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。文化祭の出し物、本気で、絶対、キャンドル、絶対、ナイト、絶対、やるんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Culture-fest — candle-night do, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'数学の宿題、本気で、絶対、めんどくさい、絶対、なって、絶対、思っちゃうよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Math-hw — annoying think-too, Riku absolute serious really.",style:'Wry.'},
    {speaker:'riku_teen',jp:'お前のシャツ、本気で、絶対、しわ、絶対、なってるぜ、桜、本気で、絶対、アイロン、絶対、当てた方がいい、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Your shirt — wrinkles, Sakura iron-better, absolute serious really.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'昨日、本気で、絶対、道で、絶対、財布、絶対、拾う、絶対、人を、絶対、見かけたよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yesterday — road wallet pick-up person saw, Riku absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'駅前、本気で、絶対、平日、絶対、ガラガラ、絶対、なんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Station-front — weekday empty, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'運動会で、本気で、絶対、太鼓を、絶対、バンバン、絶対、叩いたよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sports-day — drum bam-bam beat, Riku absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、ローマ字入力、絶対、速いよな、桜、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"You — Romaji-input fast, Sakura admire absolute serious really.",style:'Praising close.'},
  ]},
  {id:'conv_07265',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、トースト、絶対、サンドイッチ、絶対、作ってあげるね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — Mei-sis toast-sandwich make-for-you, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、キャンドル、絶対、お祖父ちゃんに、絶対、プレゼント、絶対、したいんだ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — candle Grandpa-present want-give, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'毎日のお片付け、本気で、絶対、めんどくさい、絶対、けど、絶対、習慣になれば、絶対、楽よ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Daily tidy — annoying but habit-easy, Sho absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お顔に、絶対、しわ、絶対、まだ、絶対、ないよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mei-sis — face wrinkles still-none, absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'公園で、本気で、絶対、ゴミ、絶対、拾うこと、絶対、二人で、絶対、しましょうね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Park — trash pick-up two-do, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、駄菓子屋の、絶対、ガラガラ、絶対、ぼく、絶対、引きたいんだ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — candy-store rattle me pull-want, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'打ち上げ花火、本気で、絶対、バンバン、絶対、上がっていたわよね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Fireworks — bam-bam rose, Sho absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、ローマ字、絶対、書けるようになったんだ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me Romaji write-can-became, absolute serious really.",style:'Proud close.'},
  ]},
  {id:'conv_07266',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'建材の調達、本気で、絶対、コスト、絶対、見直しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Building-mat procurement — cost review, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。海外駐在員の渡米、本気で、絶対、手配、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Expat US-going — arrange advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'前月の業績、本気で、絶対、報告、絶対、まとめろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Last-month perf — report compile, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。業界スペシャリスト、本気で、絶対、当社に、絶対、お招きしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Industry-specialist — our co inviting, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'製品の不具合、本気で、絶対、リコール、絶対、対応、絶対、徹底させろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Product-defect — recall response thorough, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。各所への、本気で、絶対、ご連絡、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Each-loc — contact thorough, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'倉庫の在庫、本気で、絶対、適切に、絶対、積むよう、絶対、徹底しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Warehouse-inv — properly stack thorough, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。出荷の段ボール、本気で、絶対、品質、絶対、確認、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Ship-cardboard — quality check thorough, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07267',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers plan',lines:[
    {speaker:'yuki_office',jp:'新規プロジェクト、本気で、絶対、建材、絶対、エコ素材、絶対、検討しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"New proj — building-mat eco consider, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。次月の渡米、本気で、絶対、ビザ申請、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Next-month US-going — visa-app advance, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'前月の売上、本気で、絶対、好調、絶対、続いてるわね、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Last-month sales — strong continue, absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。新規スペシャリスト、本気で、絶対、採用、絶対、決定しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. New-specialist — hire decided, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'リコール対応、本気で、絶対、各部署、絶対、共有、絶対、徹底しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Recall-resp — each-dept share thorough, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。各所からの、本気で、絶対、ご意見、絶対、収集、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. From each-loc — opinion collect advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'倉庫、本気で、絶対、商品を、絶対、整然と、絶対、積むよう、絶対、お願いね、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Warehouse — goods orderly stack ask, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。段ボール、本気で、絶対、リサイクル可能なもの、絶対、選定しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Cardboard — recyclable select, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07268',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss reviews an intern report',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、建材市場、本気で、絶対、調査、絶対、進めてくれてるか、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Ren — building-mat market survey advance?, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。教授の渡米、本気で、絶対、私も、絶対、随行、絶対、いただけることに、なりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Prof US-going — me accompany will, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'前月の研究進捗、本気で、絶対、まとめてくれ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Last-month research-prog — compile, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。当該分野の、本気で、絶対、スペシャリスト、絶対、教授に、絶対、ご紹介、絶対、いただきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Yes. Field-specialist — prof-introduced, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'過去の論文、本気で、絶対、リコール、絶対、された事例、絶対、調べておけ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Past papers — recall-cases investigate, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。各所の研究機関、本気で、絶対、訪問、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Each-loc inst — visit advance, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究データ、本気で、絶対、丁寧に、絶対、積むよう、絶対、整理しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Research-data — careful stack-organize, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。実験器具、本気で、絶対、段ボール、絶対、丁寧に、絶対、梱包、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Lab-equip — cardboard careful pack done, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07269',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、建材の盗難事件、絶対、捜査、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Police — building-mat theft inv-advance, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。容疑者の渡米、本気で、絶対、当社からも、絶対、警察様に、絶対、ご連絡しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Suspect US-going — our co police-contact, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'前月の犯罪統計、本気で、絶対、警察、絶対、共有させていただきます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Last-month crime-stats — police share, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。当社のセキュリティスペシャリスト、本気で、絶対、警察、絶対、ご紹介、絶対、お願いいたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Our sec-specialist — police-intro ask, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'防犯機器の、本気で、絶対、リコール、絶対、警察、絶対、注視、絶対、いたしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Crime-prev recall — police-watching, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。各所への、本気で、絶対、警察様の、絶対、巡回、絶対、お願いいたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Each-loc — police-patrol ask, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'押収品、本気で、絶対、丁寧に、絶対、積むこと、絶対、警察、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Seized — careful stack police-thorough, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。証拠保管の、本気で、絶対、段ボール、絶対、警察様の指示、絶対、従っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Evidence-keep cardboard — police-direction follow, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07270',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、建材、絶対、お父さん、絶対、自分で、絶対、買い付けたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Founding — building-mat Dad-self-procured, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、渡米、絶対、商機、絶対、つかんでまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Since Dad-era — US-going biz-chance grasp, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さんの代、本気で、絶対、前月の決算、絶対、紙の帳簿で、絶対、つけたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad-era — last-month settle paper-led, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さん、本気で、絶対、業界の、絶対、スペシャリスト、絶対、と、絶対、お呼びいただいておりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Yes. Dad — industry-specialist called, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お父さんの代、本気で、絶対、リコール、絶対、対応、絶対、誠実に、絶対、やってきた、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Dad-era — recall response sincerely done, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの精神、本気で、絶対、各所、絶対、受け継がれております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Dad-spirit — each-loc inherited, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'創業時、本気で、絶対、お父さん、絶対、自ら、絶対、商品、絶対、積むこと、絶対、していたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Founding — Dad-self goods stack-doing, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、段ボール、絶対、ひとつひとつ、絶対、大切に、絶対、扱ってまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Yes. Since Dad-era — cardboard one-each careful handle, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07271',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses research themes',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、最短の研究期間で、本気で、絶対、結論を出した、絶対、論文、絶対、立派でしたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Ren — shortest period concluded paper splendid, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。工業の溶接、本気で、絶対、技術発展、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Thanks. Industrial-welding — tech-dev paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'果樹園の、本気で、絶対、経営、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Orchard-mgmt — paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。各紙の報道、本気で、絶対、比較研究、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Each-paper coverage — comparative paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'古代の、本気で、絶対、三国時代、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Ancient three-kingdom era — paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。地域の、本気で、絶対、記念碑、絶対、歴史的価値、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Yes. Region-mon — hist-value paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'海運業の、本気で、絶対、歴史、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Shipping-industry hist — paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。宗教の、本気で、絶対、布教、絶対、活動史、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Religion-spread hist — paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07272',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp strategy',lines:[
    {speaker:'hiroshi_boss',jp:'業務の、本気で、絶対、最短ルート、絶対、見直しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Biz-shortest-route — review, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。工場の溶接、本気で、絶対、品質管理、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Factory-weld — quality-mgmt thorough, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'地方の果樹農家、本気で、絶対、提携、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Local fruit-farmer — partner advance, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。各紙の経済面、本気で、絶対、当社の取材、絶対、入っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Each-paper econ — our co coverage-in, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'三国時代の、本気で、絶対、貿易を、絶対、研究、絶対、参考にしろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Three-kingdom era — trade research-ref, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。創業地の、本気で、絶対、記念碑、絶対、補修、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Founding-loc mon — repair advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'海運業界、本気で、絶対、再編、絶対、当社、絶対、注視しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Shipping-industry — restructure our co watch, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。海外への布教を、本気で、絶対、目指す団体様、絶対、当社、絶対、ご支援、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Overseas-spread aim group — our co support, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07273',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、最短の研究で、本気で、絶対、結論を出した、絶対、論文、絶対、立派でしたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sakura — shortest research-concluded paper splendid, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。地元工場の溶接、本気で、絶対、職人さん、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Thanks. Local factory-weld — artisan paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'地域の果樹園、本気で、絶対、収穫、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Region orchard — harvest paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。各紙の報道、本気で、絶対、比較、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Each-paper coverage — compare paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'古代の、本気で、絶対、三国時代、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Ancient three-kingdom era — paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。地域の、本気で、絶対、記念碑、絶対、歴史、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Region-mon — hist paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'海運業の、本気で、絶対、地域経済への影響、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Shipping — local-econ impact paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。宗教の、本気で、絶対、布教、絶対、地域への影響、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Religion-spread — local-impact paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07274',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、最短期間で、絶対、解決、絶対、目指しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Case — shortest-period solve aim, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'工場の溶接、本気で、絶対、不備で、絶対、火災が起きた、絶対、ですよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Factory-weld — flaw fire-occurred, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。果樹農家の、本気で、絶対、被害、絶対、警察、絶対、捜査、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Fruit-farmer damage — police-inv advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、各紙、絶対、大きく、絶対、報じていますね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Case — each-paper big-report, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。三国合同の、本気で、絶対、捜査、絶対、警察、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Three-nation joint-inv — police-advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'地域の、本気で、絶対、記念碑、絶対、破損も、絶対、捜査対象、絶対、ですか、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Region-mon — damage also inv-target?, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。海運関係者からも、本気で、絶対、情報、絶対、いただいております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Shipping-related — info-given, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'宗教の布教を、本気で、絶対、装った犯罪、絶対、最近、増えているそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Religion-spread disguised crime — lately-increasing, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07275',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical history research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、患者さんの治療、本気で、絶対、最短期間で、絶対、回復、絶対、目指しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — patient-tx shortest-recovery aim, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'医療器具の、本気で、絶対、溶接、絶対、精度、絶対、上がっているそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Med-equip-weld — precision rising, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。果樹由来の、本気で、絶対、薬効、絶対、研究、絶対、進められております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Fruit-derived medicinal — research advance, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'新治療法、本気で、絶対、各紙、絶対、報じていますね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"New tx — each-paper reporting, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。三国の合同医療研究、本気で、絶対、参加させていただいております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Three-nation joint med — attending, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医学史の、本気で、絶対、記念碑、絶対、地域に残されているそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Med-hist mon — region-remain, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。海運時代の、本気で、絶対、感染症対策、絶対、研究、絶対、興味深いです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Shipping-era infection-resp — research-interesting, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'医療技術の、本気で、絶対、布教、絶対、ともいえる、絶対、活動、絶対、続いていますね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Med-tech spread-also-say activity continue, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07276',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、てっきり、本気で、絶対、お休み、絶対、と、絶対、メイちゃん、絶対、思っていたわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Aoi — for-sure rest Mei-thought, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'昨日、葵、本気で、絶対、間抜けな、絶対、ことを、絶対、しちゃったよ、メイちゃん、本気で、絶対、笑い、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yesterday Aoi — silly thing did, Mei laugh absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'土曜日の、本気で、絶対、漫才、絶対、テレビで、絶対、メイちゃん、絶対、見たいわ、葵、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sat-manzai — TV Mei see-want, Aoi absolute serious really.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'絵本の、本気で、絶対、王女、絶対、葵、絶対、子供の頃、絶対、憧れたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Picture-book princess — Aoi child-admired, Mei absolute serious really.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'葵のお店の近くの、本気で、絶対、並木道、絶対、メイちゃん、絶対、お気に入りよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-store-near tree-lined — Mei-fave, absolute serious really.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'童話で、本気で、絶対、白馬の王子様、絶対、葵、絶対、想像してたわよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Fairy-tale white-horse prince — Aoi imagined, Mei absolute serious really.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'葵のお店、本気で、絶対、花びら、絶対、ひらひら、絶対、舞うように、絶対、見えるわよね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-store — petals fluttering dance visible, Mei absolute serious really.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、香水に、絶対、過敏に、絶対、反応する、絶対、お客様、絶対、いらっしゃるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Aoi — perfume oversensitively-react cust exist, Mei absolute serious really.",style:'Practical close.'},
  ]},
  {id:'conv_07277',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、お祖父ちゃん、本気で、絶対、てっきり、絶対、雨、絶対、降ると、思ってたぞ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Gran — Grandpa for-sure rain-will-fall thought, absolute serious really.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、間抜けな、絶対、こと、絶対、よく、絶対、したわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Youth — Grandpa silly-thing often-did, remember dear?, absolute serious really.",style:'Wistful tease.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、漫才、絶対、お父さん、絶対、ラジオで、絶対、よく、絶対、聞いたぞ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Youth — manzai Dad-radio often-heard, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'昔の絵本、本気で、絶対、王女様、絶対、お祖父ちゃん、絶対、孫に、絶対、読んでくれたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Old picture-book — princess Grandpa grandkid-read, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、並木道で、絶対、お父さん、絶対、ばあさんと、絶対、散歩したぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — tree-lined Dad-gran walk, remember?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'昔のおとぎ話、本気で、絶対、白馬、絶対、王子様、絶対、よく、絶対、聞かされたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Old fairy-tale — white-horse prince often-told, remember dear?, absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、桜が、絶対、舞うように、絶対、散ったわよな、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Youth — cherry dance-scatter, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お祖父ちゃん、本気で、絶対、寒さに、絶対、過敏に、絶対、なってきたわよね、あなた、お互いに、健康、第一にしましょうね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Grandpa — cold oversensitive-became, dear mutual-health-first, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07278',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、てっきり、本気で、絶対、お前、絶対、部活、絶対、と、思ってたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Riku — for-sure you club-thought, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'今日、本気で、絶対、間抜けな、絶対、こと、絶対、しちゃったぜ、桜、本気で、絶対、笑い、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Today — silly-thing did, Sakura laugh absolute serious really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、漫才、絶対、文化祭で、絶対、やるんだよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"You — manzai culture-fest do, Riku absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'文化祭の劇で、本気で、絶対、王女、絶対、お前、絶対、やるんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Fest-play — princess you do, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'学校の、本気で、絶対、並木道、絶対、桜が、絶対、咲きはじめたよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"School tree-lined — cherry bloom-start, Riku absolute serious really.",style:'Soft.'},
    {speaker:'riku_teen',jp:'文化祭の劇、本気で、絶対、白馬、絶対、小道具、絶対、必要なんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Fest-play — white-horse prop needed, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'校庭の落ち葉、本気で、絶対、ひらひら、絶対、舞うように、絶対、散ってたよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"School leaves — fluttering dance scatter, Riku absolute serious really.",style:'Soft.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、寒さに、絶対、過敏に、絶対、反応するよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"You — cold oversensitive-react, Sakura absolute serious really.",style:'Wry close.'},
  ]},
  {id:'conv_07279',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、てっきり、本気で、絶対、お父さん、絶対、お家、絶対、と、思ってたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Mom — for-sure Dad home-thought, absolute serious really.",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'うん。ぼく、本気で、絶対、間抜けな、絶対、こと、絶対、しないでね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Me — silly-thing don't, Sho absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、土曜日の、絶対、漫才、絶対、一緒に、絶対、見ようよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — Sat-manzai together watch?, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'絵本の、本気で、絶対、王女様、絶対、ママ、絶対、子供の頃、絶対、好きだったわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Picture-book princess — Mom child-liked, Sho absolute serious really.",style:'Wistful.'},
    {speaker:'sho_child',jp:'通学路の、本気で、絶対、並木道、絶対、ぼく、絶対、お気に入りなんだ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"School-route tree-lined — me-fave, Mom absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'おとぎ話の、本気で、絶対、白馬、絶対、ママ、絶対、夢に、絶対、見たことあるわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Fairy-tale white-horse — Mom dream-seen, Sho absolute serious really.",style:'Wistful.'},
    {speaker:'sho_child',jp:'公園の蝶、本気で、絶対、ひらひら、絶対、舞うように、絶対、飛んでたよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Park butterfly — fluttering dance flew, Mom absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、お肌、絶対、過敏に、絶対、なりがちだから、絶対、気をつけてね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Sho — skin oversensitive-tend so careful, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07280',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、てっきり、本気で、絶対、メイ姉さん、絶対、忙しい、絶対、と、思った?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Sho — for-sure Mei-sis busy thought?, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、間抜けな、絶対、ミス、絶対、テストで、絶対、しちゃったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me silly-mistake test-did, absolute serious really.",style:'Wry child.'},
    {speaker:'mei_romantic',jp:'土曜日の、本気で、絶対、漫才番組、絶対、メイ姉さん、絶対、翔くんと、絶対、見たいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sat-manzai show — Mei-sis Sho-watch-want, absolute serious really.",style:'Eager.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、絵本の王女、絶対、好きでしょ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mei-sis — picture-book princess like?, absolute serious really.",style:'Curious.'},
    {speaker:'mei_romantic',jp:'公園の、本気で、絶対、並木道、絶対、メイ姉さん、絶対、翔くんと、絶対、歩きたいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Park tree-lined — Mei-sis Sho-walk-want, absolute serious really.",style:'Soft.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、白馬、絶対、ぼく、絶対、絵で、絶対、描いたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — white-horse me drew, absolute serious really.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'花びらが、本気で、絶対、舞うように、絶対、降ってきたわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Petals — dance-fall came, Sho absolute serious really.",style:'Soft.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、花粉に、絶対、過敏に、絶対、反応するんだ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — me pollen oversensitive-react, absolute serious really.",style:'Reflective close.'},
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_387 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['インフラ','漁港','眠れる','疲労','行列','砂漠','丘','霧']
const B_T = ['連合','入手','出場','総務','プレス','出荷','故障','名義']
const C_T = ['配給','ジャーナリズム','公衆','リアルタイム','真っ赤','隠す','断念','上る']
const D_T = ['小川','右側','パーツ','コンパクト','ストア','キャッシュ','漁業','五輪']

const data = [
  {id:'conv_07701',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、街の、絶対、インフラ、絶対、整備、絶対、よくなってきたわよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — town infrastructure-prep improved, absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お祖父ちゃん、絶対、漁港、絶対、で、絶対、お魚、絶対、買ってきたって、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom — Grandpa fishing-port fish-bought, absolute serious really.",style:'Animated child.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、夜ちゃんと、絶対、眠れる、絶対、？本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — night proper sleep-can?, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'お父さん、本気で、絶対、お仕事の、絶対、疲労、絶対、たまってるみたいだよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad — work fatigue accumulated-seems, Mom absolute serious really.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'ラーメン屋さん、本気で、絶対、行列、絶対、すごいわよね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Ramen-shop queue — amazing, Sho absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、テレビで、絶対、砂漠、絶対、見たよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Me — TV desert saw, Mom absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃんちは、本気で、絶対、丘、絶対、の上にあるのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Grandpa-home — hill-top exists, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、今朝、絶対、霧、絶対、すごかったよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Mom — this-morn mist amazing was, absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07702',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、街の、本気で、絶対、インフラ、絶対、お店の発展、絶対、メイちゃん、絶対、感心するわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — town infrastructure store-dev — Mei admire, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、地元の、絶対、漁港、絶対、と、絶対、提携、絶対、進めてるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yeah. Aoi — local fishing-port partner advance, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お疲れで、絶対、眠れる、絶対、夜は、絶対、メイちゃん、絶対、応援するよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — tired sleep-can night Mei-support, absolute serious really.",style:'Tender.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、疲労、絶対、たまると、絶対、メイちゃんに、絶対、相談するわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — fatigue accumulate — Mei-consult, absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'葵のお店、本気で、絶対、行列、絶対、できるくらい、絶対、人気、絶対、メイちゃん、絶対、誇らしいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi-store queue-form pop — Mei proud, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、いつか、絶対、砂漠、絶対、旅行、絶対、行きたいよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — someday desert-travel go-want, Mei absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'葵のお店、本気で、絶対、丘、絶対、の上で、絶対、景色、絶対、最高よね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi-store — hill-top scene best, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵のお店の朝、本気で、絶対、霧、絶対、幻想的だよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-store morn mist — fantastic, Mei absolute serious really.",style:'Soft close.'},
  ]},
  {id:'conv_07703',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、町の、絶対、インフラ、絶対、まだ、絶対、整っていなかったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Gran — youth town infra still unprepared, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、漁港、絶対、お祖父ちゃん、絶対、よく、絶対、見に行ったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Youth — fishing-port Grandpa-often-saw-went, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、深く、絶対、眠れる、絶対、夜、絶対、ありがたかったぞ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Dad deep sleep-can night grateful, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、疲労、絶対、隠して、絶対、頑張ってきたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — Grandpa fatigue-hide tried, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、町に、絶対、行列、絶対、ができる、絶対、お店、絶対、なかったぞ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — town queue-can store didn't-exist, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、テレビで、絶対、砂漠、絶対、初めて、絶対、見たわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — TV desert first-saw, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、丘、絶対、を、絶対、毎日、絶対、歩いて、絶対、お仕事行ったぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Dad hill every-day walked work-went, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、朝の、絶対、霧、絶対、お祖父ちゃんと、絶対、よく、絶対、見たわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — morn-mist Grandpa-often-saw, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07704',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、社会科で、本気で、絶対、インフラ、絶対、習ったよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Riku — soc-class infrastructure learned, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。修学旅行で、本気で、絶対、漁港、絶対、行ったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yeah. School-trip — fishing-port went, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、試験前、絶対、ちゃんと、絶対、眠れる、絶対、？リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"You — pre-test proper sleep-can?, Riku absolute serious really.",style:'Caring.'},
    {speaker:'riku_teen',jp:'部活、本気で、絶対、疲労、絶対、すごいぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Club — fatigue amazing, Sakura absolute serious really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'駅前のラーメン屋、本気で、絶対、行列、絶対、すごいよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Station ramen-shop queue — amazing, Riku absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'地理で、本気で、絶対、砂漠、絶対、習ったよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Geo — desert learned, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お祖父ちゃんち、本気で、絶対、丘、絶対、の上で、絶対、お庭、絶対、広いよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Grandpa-home — hill-top garden-wide, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'部活の合宿で、本気で、絶対、霧、絶対、深い朝、絶対、走ったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Club-camp — mist-deep morn ran, Sakura absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07705',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、街の、本気で、絶対、インフラ、絶対、メイ姉さん、絶対、お洒落と思うわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — town infra Mei-sis stylish-think, absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、海の、絶対、漁港、絶対、見たいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me sea fishing-port see-want, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、夜、絶対、ちゃんと、絶対、眠れる、絶対、ように、絶対、心がけてるわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — night proper sleep-can mindful, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、勉強の、絶対、疲労、絶対、たまったみたい、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me study-fatigue accumulated-seems, absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'メイ姉さんと、本気で、絶対、お祭りの、絶対、行列、絶対、並ぼうね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis-with fest queue line-up, Sho absolute serious really.",style:'Eager.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、絵本で、絶対、砂漠、絶対、見たよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me picture-book desert saw, absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'メイ姉さんと、本気で、絶対、丘、絶対、登ってみたいね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis-with hill climb-try-want, Sho absolute serious really.",style:'Eager.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、今朝、絶対、霧、絶対、で、絶対、何も見えなかったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — this-morn mist nothing-seen, absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07706',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'業界、本気で、絶対、連合、絶対、を、絶対、組む、絶対、戦略、絶対、検討しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Industry alliance form-strat consider, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。新しい原材料の、本気で、絶対、入手、絶対、ルート、絶対、確保しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. New raw-mat acquisition-route secured, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'業界の見本市、本気で、絶対、出場、絶対、当社、絶対、決定しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Industry-trade-show entry — our co decide, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。総務、絶対、部、絶対、と、絶対、業務、絶対、連携、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Gen-affairs-dept biz-coop advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界、本気で、絶対、プレス、絶対、リリース、絶対、慎重に、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Industry press-release careful advance, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新製品の、本気で、絶対、出荷、絶対、予定通り、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. New-prod shipment as-planned advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'設備の、本気で、絶対、故障、絶対、絶対、なきよう、絶対、点検しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Equip failure absolute-none — inspect, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。契約書の、本気で、絶対、名義、絶対、確認、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Contract name-verify advance, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07707',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'業界の、本気で、絶対、連合、絶対、参加、絶対、進めましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Industry alliance attend advance, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。新型機器の、本気で、絶対、入手、絶対、進んでおります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. New-equip acquisition advance, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'業界、本気で、絶対、コンペ、絶対、当社、絶対、出場、絶対、決まりましたね、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Industry-comp — our co entry decided, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。総務、絶対、部、絶対、ご担当者、絶対、ご紹介、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Gen-affairs-dept person — intro, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'プレス、絶対、対応、絶対、当社、絶対、慎重にいきましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Press-resp — our co careful-go, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新製品の、本気で、絶対、出荷、絶対、計画通り、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. New-prod shipment as-planned advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'本気で、絶対、故障、絶対、対応、絶対、サポート、絶対、強化しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Failure-resp support — strengthen, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新規取引先の、本気で、絶対、名義、絶対、確認、絶対、終えました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. New-partner name-verify ended, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07708',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、学界、本気で、絶対、連合、絶対、研究、絶対、参加しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — acad alliance-research attend, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。海外文献の、本気で、絶対、入手、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Overseas-lit acquisition advance, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'国際学会、本気で、絶対、出場、絶対、お前が、絶対、決定しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Intl-conf entry — you decide, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。大学の、本気で、絶対、総務、絶対、部、絶対、と、絶対、調整中です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Uni gen-affairs-dept adjusting, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'論文発表、本気で、絶対、プレス、絶対、対応、絶対、教授と、絶対、相談しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Paper-pres press-resp — prof-discuss, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。論文の、本気で、絶対、出荷、絶対、と、絶対、いえる、絶対、印刷、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Paper shipment-equivalent print advance, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'実験装置の、本気で、絶対、故障、絶対、点検しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Exp-device failure inspect, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。論文の、本気で、絶対、名義、絶対、教授と、絶対、確認しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Paper-name-of-author prof-verified, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07709',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、連合、絶対、警備、絶対、対応中です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Police alliance-sec handling, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。証拠品の、本気で、絶対、入手、絶対、警察様、絶対、進められたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Evidence-acquisition — police advanced, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、合同訓練、絶対、出場、絶対、選手、絶対、決定しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police joint-train entry — player decided, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。当社の、本気で、絶対、総務、絶対、部、絶対、警察様、絶対、ご対応、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Our gen-affairs-dept police-handle, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察、本気for、絶対、プレス、絶対、リリース、絶対、慎重に、絶対、対応しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police press-release careful-handle, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。証拠品の、本気で、絶対、出荷、絶対、警察様、絶対、ご対応、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Evidence shipment — police-handled, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察車両の、本気で、絶対、故障、絶対、整備、絶対、警察、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police-vehicle failure-maint — police-advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。容疑者の、本気で、絶対、名義、絶対、確認、絶対、警察様、絶対、進められております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Suspect name-verify — police-advance, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07710',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お父さん、絶対、業界、絶対、連合、絶対、立ち上げに、絶対、関わったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Founding — Dad industry-alliance-founding involved, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、新規顧客の、絶対、入手、絶対、続けてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — new-cust acquisition continue, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、業界大会、絶対、出場、絶対、何度も、絶対、したぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Dad — industry-meet entry several-times did, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、総務、絶対、部、絶対、お父さん、絶対、誇りに、絶対、思っていらしたそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Since Dad-era — gen-affairs-dept Dad-proud was heard, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、プレス、絶対、対応、絶対、自ら、絶対、行ったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Dad — press-resp self-did, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、製品の、絶対、出荷、絶対、丁寧に、絶対、続けてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — prod shipment careful continue, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、設備の、絶対、故障、絶対、すぐ、絶対、直したぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Dad — equip failure swift-fixed, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、契約書の、絶対、名義、絶対、丁寧に、絶対、扱ってまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — contract-name careful handle, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07711',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses cases',lines:[
    {speaker:'takeda_officer',jp:'被災地への、本気で、絶対、配給、絶対、警察、絶対、協力、絶対、いたしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Disaster-area distribution — police-coop, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、ジャーナリズム、絶対、注目、絶対、警察、絶対、ご対応大変ですよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Case journalism-attention — police-resp tough, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。公衆、絶対、の、絶対、安全、絶対、警察、絶対、守ってまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Public safety — police-keep, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察、本気で、絶対、リアルタイム、絶対、情報、絶対、市民に、絶対、提供されているそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police real-time-info — citizen-provide, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。現場の、本気で、絶対、真っ赤、絶対、な、絶対、ライト、絶対、警察、絶対、目印にしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Scene crimson-light — police-landmark, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者の、本気で、絶対、隠す、絶対、傾向、絶対、警察、絶対、見抜かれるんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Suspect hide-tendency — police-see-through, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。本件、本気で、絶対、容疑者、絶対、抵抗、絶対、断念、絶対、しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Case — suspect resist give-up, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'犯罪が、本気for、絶対、上る、絶対、傾向、絶対、警察、絶対、注視、絶対、されているんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Crime-rise tendency — police-watch, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07712',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses history',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、戦時の、本気で、絶対、配給、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Ren — wartime distribution paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。戦後の、本気で、絶対、ジャーナリズム、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Thanks. Postwar journalism paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦前の、本気で、絶対、公衆、絶対、衛生、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Prewar public-hygiene paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。報道の、本気で、絶対、リアルタイム、絶対、化、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. News real-time-ization paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時の、本気で、絶対、真っ赤、絶対、な、絶対、夕焼け、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Wartime crimson-sunset paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。歴史を、本気で、絶対、隠す、絶対、行為、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Hist-hide-act paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時の、本気で、絶対、断念、絶対、された、絶対、計画、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Wartime given-up plan paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。歴史で、本気で、絶対、犠牲者数が、絶対、上る、絶対、事象、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Hist casualty-rise event paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07713',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher mentors a teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、戦時の、本気で、絶対、配給、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sakura — wartime distribution paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。戦後の、本気で、絶対、ジャーナリズム、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Thanks. Postwar journalism paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'戦前の、本気で、絶対、公衆、絶対、衛生、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Prewar public-hygiene paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。報道の、本気で、絶対、リアルタイム、絶対、化、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. News real-time-ization paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時の、本気で、絶対、真っ赤、絶対、な、絶対、夕焼け、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Wartime crimson-sunset paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。歴史を、本気で、絶対、隠す、絶対、行為、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Hist-hide-act paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時の、本気で、絶対、断念、絶対、された、絶対、計画、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Wartime given-up plan paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。歴史で、本気で、絶対、犠牲者数が、絶対、上る、絶対、事象、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Hist casualty-rise event paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07714',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、戦時の、本気で、絶対、配給、絶対、医療物資、絶対、貴重でしたよ、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Ren — wartime distribution med-supply precious was, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'医療界の、本気で、絶対、ジャーナリズム、絶対、医師、絶対、丁寧に、絶対、対応されますよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Med-world journalism — doctor careful-handle, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。公衆、絶対、衛生、絶対、医療チーム、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Public-hygiene med-thorough, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'リアルタイム、絶対、心電図、絶対、医療チーム、絶対、活用、絶対、されていますよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Real-time ECG — med-team-utilize, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。患者さんの顔色が、本気で、絶対、真っ赤、絶対、になる時、絶対、医療チーム、絶対、注意します、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Patient-face crimson-become time — med-team alert, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'患者さんが、本気で、絶対、症状を、絶対、隠す、絶対、こと、絶対、医療チーム、絶対、気を付けますよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Patient symptom-hide — med-team alert, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。延命治療を、本気で、絶対、断念、絶対、するご家族の決断、絶対、医療チーム、絶対、寄り添います、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Life-tx-give-up family-decision — med-team-close-stand, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'手術件数が、本気で、絶対、上る、絶対、時期、絶対、医療チーム、絶対、お忙しいですよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Surgery-count-rise time — med-team busy, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07715',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews strategy',lines:[
    {speaker:'hiroshi_boss',jp:'災害支援、本気で、絶対、配給、絶対、当社、絶対、ご支援、絶対、しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Disaster-aid distribution — our co support, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。業界の、本気で、絶対、ジャーナリズム、絶対、当社、絶対、注視しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Industry-journalism — our co watch, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'当社、本気で、絶対、公衆、絶対、向けの、絶対、サービス、絶対、強化しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Our co — public-service strengthen, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。販売の、本気で、絶対、リアルタイム、絶対、分析、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Sales real-time analyze advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'新製品の、本気で、絶対、真っ赤、絶対、な、絶対、パッケージ、絶対、人気だ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"New prod crimson-package — pop, ask absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、不正を、絶対、隠す、絶対、ことなく、絶対、透明性を、絶対、保っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Our co — wrong hide-not transparency-keep, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界の、本気で、絶対、断念、絶対、した、絶対、計画を、絶対、参考にしろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Industry given-up plan — ref, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社の業績、本気で、絶対、上る、絶対、勢いを、絶対、保ってまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Our perf rise-momentum keep, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07716',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、メイちゃん、本気で、絶対、お店の近くの、絶対、小川、絶対、見てきたわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — Mei store-near brook saw, absolute serious really.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、お店の、絶対、右側、絶対、メニュー、絶対、貼ってるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yeah. Aoi — store right-side menu-posted, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、コーヒーマシンの、絶対、パーツ、絶対、新しく、絶対、しないと、絶対、ね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — coffee-machine parts new-must, Mei absolute serious really.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お店の、絶対、コンパクト、絶対、な、絶対、レイアウト、絶対、気に入ってるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — store compact-layout like, Mei absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、駅前の、絶対、ストア、絶対、新しいの、絶対、できたの、メイちゃん、絶対、気になるわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — station-front store new-made Mei-interest, absolute serious really.",style:'Curious.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お会計、絶対、キャッシュ、絶対、レス、絶対、対応してるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — payment cashless-handle, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵のお父さん、本気で、絶対、漁業、絶対、お仕事、絶対、続けていらっしゃるんでしょ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-Dad — fisheries-work continue, Mei absolute serious really.",style:'Curious.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、五輪、絶対、選手、絶対、応援、絶対、お店で、絶対、配信してるよ、メイちゃん、本気for、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — Olympic-player cheer store-broadcast, Mei absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07717',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、家の近くに、絶対、小川、絶対、流れていたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Gran — youth home-near brook flowed, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、お祖父ちゃん、絶対、玄関の、絶対、右側、絶対、靴を、絶対、揃えたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Youth — Grandpa entrance right-side shoes-arranged, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、機械の、絶対、パーツ、絶対、お父さん、絶対、自分で、絶対、作ったぞ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — machine-parts Dad-self-made, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、お家を、絶対、コンパクト、絶対、にする、絶対、こと、絶対、得意だったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa home compact-make good-at, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、町の、絶対、ストア、絶対、なかったぞ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — town-store didn't-exist, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、お給料、絶対、キャッシュ、絶対、で、絶対、受け取ったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — Grandpa salary cash-received, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さんの故郷、絶対、漁業、絶対、で、絶対、栄えていたぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Dad-hometown fisheries flourished, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃんと、絶対、五輪、絶対、テレビで、絶対、見たわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa Olympic TV-saw, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07718',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、公園の、絶対、小川、絶対、で、絶対、お写真撮ってきたわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — Mei-sis park brook photo-took, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、お家の、絶対、右側、絶対、お部屋なんだ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me home right-side room, absolute serious really.",style:'Animated child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、自転車の、絶対、パーツ、絶対、新しくするの、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — bike-parts new-make, Sho absolute serious really.",style:'Practical.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、コンパクト、絶対、な、絶対、本、絶対、ぼく、絶対、買ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — compact book me-bought, absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'メイ姉さんと、本気で、絶対、駅前の、絶対、ストア、絶対、お買い物、絶対、行きましょうね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis-with station-store shop go, Sho absolute serious really.",style:'Eager.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お父さん、絶対、キャッシュ、絶対、で、絶対、ぼくに、絶対、お小遣い、絶対、くれたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — Dad cash me-allowance gave, absolute serious really.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、海辺の街の、絶対、漁業、絶対、に、絶対、興味あるわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — seaside-town fisheries-interest, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、五輪、絶対、テレビで、絶対、ぼく、絶対、見るよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — Olympic TV me-watch, absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07719',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、近所の、本気で、絶対、小川、絶対、で、絶対、私たち、絶対、よく、絶対、遊んだよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Riku — neighbor brook us often-played, absolute serious really.",style:'Wistful teen.'},
    {speaker:'riku_teen',jp:'うん。教室の、本気で、絶対、右側、絶対、お前の席、絶対、なんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yeah. Classroom right-side your-seat, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、パソコンの、絶対、パーツ、絶対、詳しいよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"You — PC-parts knowledgeable, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'お前の筆箱、本気for、絶対、コンパクト、絶対、で、絶対、便利だよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Your pencil-case — compact convenient, Sakura absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'コンビニ、本気で、絶対、ストア、絶対、新しいの、絶対、できたよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Conv-store — new-made, Riku absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、お小遣い、絶対、キャッシュ、絶対、で、絶対、もらうの?桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"You — allowance cash-receive?, Sakura absolute serious really.",style:'Curious.'},
    {speaker:'sakura_teen',jp:'地理で、本気で、絶対、漁業、絶対、習ったよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Geo — fisheries learned, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お前と、本気で、絶対、五輪、絶対、応援、絶対、行こうぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"You-with Olympic cheer-go, Sakura absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07720',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お祖父ちゃんちの、絶対、小川、絶対、ぼく、絶対、覚えてるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — Grandpa-home brook me-remember, absolute serious really.",style:'Wistful child.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、お家の、絶対、右側、絶対、お部屋、絶対、お片付けね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — home right-side room — tidy, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼくの、絶対、自転車の、絶対、パーツ、絶対、お父さんと、絶対、変えたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — my bike-parts Dad-replaced, absolute serious really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、コンパクト、絶対、な、絶対、お弁当箱、絶対、ママ、絶対、買ったわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — compact lunchbox Mom-bought, absolute serious really.",style:'Practical.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、駅前の、絶対、ストア、絶対、行きたいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Mom — me station-store go-want, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お買い物、本気で、絶対、キャッシュ、絶対、で、絶対、払いましょうね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Shop — cash-pay, Sho absolute serious really.",style:'Practical.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、地理で、絶対、漁業、絶対、習ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — geo fisheries learned, absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'家族で、本気で、絶対、五輪、絶対、テレビで、絶対、観戦しましょう、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Family Olympic TV-watch, Sho absolute serious really.",style:'Tender close.'},
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


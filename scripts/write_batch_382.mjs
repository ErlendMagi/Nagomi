import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_382 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['念願','恐い','只今','ナイフ','マナー','水曜日','金持ち','ウソ']
const B_T = ['議長','座長','委任','定額','賃貸','図面','法制','県知事']
const C_T = ['賠償','失業','暴力団','ヒトラー','文部省','王朝','満州','殺す']
const D_T = ['オペラ','ラップ','スカウト','モバイル','プログラミング','思い切り','新車','停車']

const data = [
  {id:'conv_07601',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、お父さんの、絶対、念願、絶対、の、絶対、お家が、絶対、買えたわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — Dad-long-cherished home buy-could, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お化け屋敷、絶対、ぼく、絶対、恐い、絶対、よ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom — haunted-house me scary, absolute serious really.",style:'Wry child.'},
    {speaker:'yumiko_mom',jp:'お父さん、本気で、絶対、只今、絶対、と、絶対、帰ってきたわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Dad — I'm-home back-came, Sho absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お肉、絶対、切る時、絶対、ナイフ、絶対、気をつけてね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — meat-cut-time knife careful, absolute serious really.",style:'Caring.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、食事の、絶対、マナー、絶対、ちゃんと、絶対、守ろうね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — meal-manners proper-keep, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、水曜日、絶対、お祖母ちゃんちに、絶対、行くんだよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Me — Wednesday Granny-home go, Mom absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃんは、本気で、絶対、若い頃から、絶対、金持ち、絶対、ではなく、絶対、堅実だったのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Grandpa — since-youth rich-not solid was, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、ウソ、絶対、絶対、つかないよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Mom — me lie absolute don't-tell, absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07602',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、お祖父さまの、本気で、絶対、念願、絶対、の、絶対、お店、絶対、葵、絶対、頑張ってるね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — Grandpa long-cherished store Aoi-tried, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、夜道は、絶対、ちょっと、絶対、恐い、絶対、よ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Aoi — night-road slight scary, Mei absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、只今、絶対、ご注文承りますって、絶対、メイちゃん、絶対、丁寧な接客よね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — just-now order-take Mei polite serve, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵のお店の、本気で、絶対、ナイフ、絶対、切れ味、絶対、いいよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-store knife — cuts well, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵のお店、本気で、絶対、マナー、絶対、よい、絶対、お客様、絶対、多いわよね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-store — manners-good cust many, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、水曜日、絶対、定休日、絶対、にしてるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — Wednesday closed-day-set, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵のお店、本気で、絶対、金持ち、絶対、ではない、絶対、お客様も、絶対、暖かく、絶対、迎えてるよね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-store — rich-not cust-also warm-welcome, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お客様に、絶対、ウソ、絶対、つかない、絶対、商売、絶対、心がけてるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — cust lie don't-tell biz mindful, Mei absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07603',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、お父さんの、絶対、念願、絶対、家族旅行、絶対、叶ったわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Gran — youth Dad-long-cherished family-trip came-true, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、暗い夜道、絶対、ばあさん、絶対、恐い、絶対、と、絶対、感じたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Youth — dark-road gran scary felt, remember dear?, absolute serious really.",style:'Wry tense.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、玄関で、絶対、只今、絶対、と、絶対、よく、絶対、声を、絶対、かけたぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Dad entrance just-home often-voiced, remember gran?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、お料理の、絶対、ナイフ、絶対、丁寧に、絶対、扱ったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa cook knife careful-handled, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、お孫さんに、絶対、マナー、絶対、しっかり、絶対、教えたぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Dad grandkid manners solid-taught, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、毎週、絶対、水曜日、絶対、お祖父ちゃんと、絶対、お買い物、絶対、行ったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — every-week Wednesday Grandpa-shop-went, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、金持ち、絶対、ではないが、絶対、心は、絶対、豊かだったぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Dad rich-not but heart-rich, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、ウソ、絶対、を、絶対、絶対、つかない、絶対、人だったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa lie absolute don't-tell person was, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07604',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前の、本気で、絶対、念願、絶対、の、絶対、新しいバット、絶対、買えたんだね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Riku — your long-cherished new-bat bought, absolute serious really.",style:'Praising teen.'},
    {speaker:'riku_teen',jp:'うん。試験前、本気で、絶対、ちょっと、絶対、恐い、絶対、ぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yeah. Pre-test slight scary, Sakura absolute serious really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、家に、絶対、只今、絶対、って、絶対、ちゃんと、絶対、言ってるよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"You — home just-home proper-say, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'家庭科で、本気で、絶対、ナイフ、絶対、扱い、絶対、習ったよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Home-ec knife-handle learned, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お前、本気for、絶対、食事の、絶対、マナー、絶対、ちゃんとしてるよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"You — meal-manners proper, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'今度の、本気で、絶対、水曜日、絶対、テスト、絶対、頑張ろうぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Next Wednesday test — try, Sakura absolute serious really.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'お祖父ちゃん、本気で、絶対、金持ち、絶対、じゃないけど、絶対、心が、絶対、優しいよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Grandpa — rich-not but heart-kind, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、絶対、ウソ、絶対、つかない、絶対、性格だよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"You — absolute lie don't-tell nature, Sakura absolute serious really.",style:'Praising close.'},
  ]},
  {id:'conv_07605',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さんの、本気で、絶対、念願、絶対、の、絶対、お店、絶対、ついに、絶対、出来そうよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — Mei-sis long-cherished store finally can-make, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、お化け、絶対、恐い、絶対、よ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — me ghost scary, absolute serious really.",style:'Wry child.'},
    {speaker:'mei_romantic',jp:'メイ姉さんの、本気で、絶対、只今、絶対、の挨拶、絶対、家族に、絶対、欠かさないわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — just-home greeting family don't-miss, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、ナイフ、絶対、お手伝いで、絶対、使えるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — me knife help-use, absolute serious really.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'翔くんの、本気で、絶対、マナー、絶対、メイ姉さん、絶対、褒めてあげるわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho-manners — Mei-sis praise-give, absolute serious really.",style:'Praising.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、水曜日、絶対、ピアノの日、絶対、なんだ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me Wednesday piano-day, absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、金持ち、絶対、じゃないけど、絶対、幸せよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — rich-not but happy, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、ウソ、絶対、絶対、つかないよ、約束、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me lie absolute don't-tell, promise, absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07606',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'本日の会議、本気で、絶対、議長、絶対、お前が、絶対、務めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Today-mtg — chairperson you serve, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。学会の、本気で、絶対、座長、絶対、お引き受け、絶対、いただきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Conf chair — accept given, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'契約案件、本気で、絶対、委任、絶対、状、絶対、整えろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Contract — proxy-letter prepare, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新サービス、本気で、絶対、定額、絶対、料金制、絶対、導入しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. New-service flat-rate intro, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'倉庫の、本気で、絶対、賃貸、絶対、契約、絶対、見直せ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Warehouse rental-contract — review, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新工場の、本気で、絶対、図面、絶対、確認、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. New-factory blueprint verify advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界の、本気で、絶対、法制、絶対、改正、絶対、注視しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Industry legislation-reform watch, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。地元、本気で、絶対、県知事、絶対、と、絶対、当社、絶対、面談、絶対、予定です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Local prefectural-gov-our co mtg scheduled, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07607',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'役員会の、本気で、絶対、議長、絶対、選出、絶対、進めましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Board chairperson select advance, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。シンポジウムの、本気で、絶対、座長、絶対、依頼、絶対、進めております、本気for、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Symposium chair — request advance, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'代理人への、本気で、絶対、委任、絶対、状、絶対、ご準備、絶対、お願いします、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Proxy-agent proxy-letter — prep ask, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。サブスクの、本気で、絶対、定額、絶対、プラン、絶対、人気です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Subsc flat-rate plan — pop, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'オフィスの、本気で、絶対、賃貸、絶対、料、絶対、交渉、絶対、進めましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Office rental-fee — negotiate advance, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。設計士から、本気で、絶対、図面、絶対、受け取りました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. From architect blueprint received, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'業界、本気で、絶対、法制、絶対、対応、絶対、勉強会、絶対、企画しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Industry legislation-resp study-mtg plan, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。県知事、本気で、絶対、表敬訪問、絶対、ご日程、絶対、調整しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Pref-gov courtesy-visit — schedule done, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07608',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、学会の、本気で、絶対、議長、絶対、として、絶対、活躍しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — conf chairperson active, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。研究発表会、本気で、絶対、座長、絶対、教授、絶対、お引き受けくださいました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Research-pres chair — prof-accepted, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'研究室の、本気で、絶対、委任、絶対、状、絶対、お前が、絶対、整えろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Lab proxy-letter — you prep, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。学会、本気で、絶対、定額、絶対、参加費、絶対、で、絶対、お得です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Conf flat-rate fee — bargain, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究室の、本気で、絶対、賃貸、絶対、契約、絶対、確認しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Lab rental-contract verify, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。実験装置の、本気で、絶対、図面、絶対、教授と、絶対、確認しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Exp-device blueprint — prof-verified, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'研究の、本気for、絶対、法制、絶対、面、絶対、論文で、絶対、扱え、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Research legislation-aspect — paper-handle, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。県知事、本気で、絶対、表敬で、絶対、私も、絶対、随行いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Pref-gov courtesy — me-accompany, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07609',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'委員会の、本気で、絶対、議長、絶対、警察、絶対、ご報告、絶対、申し上げます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Comm chairperson — police report-give, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。座長、本気で、絶対、お引き受け、絶対、警察様、絶対、ありがとうございます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Chair-accept — police-gratitude, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、警察、絶対、委任、絶対、状、絶対、頂戴したいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Case — police proxy-letter receive-want, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察様の、本気で、絶対、定額、絶対、賠償、絶対、ご提案、絶対、確認いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Police flat-amount compensation-prop verified, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、賃貸、絶対、物件、絶対、関連の、絶対、通報、絶対、増えております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police rental-property related reports — increase, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。建物の、本気で、絶対、図面、絶対、警察様、絶対、ご提出、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Building blueprint — police-submitted, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、法制、絶対、改正、絶対、対応、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Police legislation-reform resp — advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。県知事、本気で、絶対、表敬訪問、絶対、警察様、絶対、護衛、絶対、お願いします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Pref-gov courtesy-visit — police-escort ask, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07610',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お父さん、絶対、議長、絶対、として、絶対、業界、絶対、率いていたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Founding — Dad chairperson industry-led, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、業界会議の、絶対、座長、絶対、引き継いでまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — industry-mtg chair inherited, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、信頼の、絶対、委任、絶対、状、絶対、いくつも、絶対、受けたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Dad — trust proxy-letter several-received, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、定額、絶対、サービス、絶対、提供、絶対、続けてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — flat-rate service offer continue, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、賃貸、絶対、契約、絶対、自分で、絶対、交渉したぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Dad — rental-contract self-negotiated, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代の、本気で、絶対、図面、絶対、ばあさんが、絶対、大切に、絶対、保管しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Dad-era blueprint — gran careful-keep, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、法制、絶対、改正、絶対、丁寧に、絶対、対応してきたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Dad — legislation-reform polite-handled, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気for、絶対、県知事、絶対、と、絶対、丁寧な、絶対、ご縁、絶対、続いております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — pref-gov polite-connection continue, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07611',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses cultural history',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、戦後の、本気で、絶対、賠償、絶対、政策、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Ren — postwar compensation-policy paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。世界恐慌期の、本気で、絶対、失業、絶対、問題、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Thanks. World-depression unemployment paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦後の、本気で、絶対、暴力団、絶対、対策、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Postwar yakuza-counter paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。第二次世界大戦の、本気で、絶対、ヒトラー、絶対、政権、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. WWII Hitler-regime paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦前の、本気で、絶対、文部省、絶対、教育政策、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Prewar Education-ministry policy paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。古代の、本気で、絶対、王朝、絶対、政治史、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Ancient dyn-polit-hist paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦前の、本気で、絶対、満州、絶対、開拓史、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Prewar Manchuria-pioneer-hist paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。歴史的に、本気で、絶対、王朝が、絶対、政敵を、絶対、殺す、絶対、事例、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Hist dyn polit-foe murder cases paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07612',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses cases',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、賠償、絶対、請求、絶対、警察、絶対、関連調査、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Case — compensation-claim police-related inv advance, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'急激な、本気で、絶対、失業、絶対、増加、絶対、警察、絶対、治安、絶対、注視されているそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sudden unemployment-rise — police-safety watch, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。本件、本気で、絶対、暴力団、絶対、関連の、絶対、容疑者、絶対、警察、絶対、捜査しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Case yakuza-related suspect — police-inv, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'歴史展で、本気で、絶対、ヒトラー、絶対、関連の、絶対、展示、絶対、警備、絶対、警察、絶対、ご担当ですか?本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Hist-expo Hitler-related exhibit sec — police-handle?, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。学校警備の、本気で、絶対、文部省、絶対、ガイドライン、絶対、警察、絶対、参考にしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. School-sec Education-ministry guidelines — police-ref, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'歴史的な、本気で、絶対、王朝、絶対、宝物の盗難、絶対、警察、絶対、捜査されているそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Hist dyn-treasure theft — police-inv, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。本件、本気で、絶対、満州、絶対、地域、絶対、所縁の、絶対、犯罪、絶対、警察、絶対、対応中です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Case Manchuria-region-connected crime — police-handling, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察、本気で、絶対、人を、絶対、殺す、絶対、ような、絶対、凶悪犯罪、絶対、対応、絶対、本当にご苦労ですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Police — people-murder-like serious-crime resp — hardship, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07613',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher mentors a teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、戦後の、本気で、絶対、賠償、絶対、政策、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sakura — postwar compensation paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。世界恐慌期の、本気で、絶対、失業、絶対、問題、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Thanks. World-depression unemployment paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'戦後の、本気で、絶対、暴力団、絶対、対策、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Postwar yakuza-counter paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。第二次世界大戦の、本気で、絶対、ヒトラー、絶対、政権、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. WWII Hitler-regime paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦前の、本気で、絶対、文部省、絶対、教育政策、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Prewar Education-ministry policy paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。古代の、本気で、絶対、王朝、絶対、政治史、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Ancient dyn-polit-hist paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦前の、本気で、絶対、満州、絶対、開拓史、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Prewar Manchuria-pioneer-hist paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。歴史的に、本気で、絶対、王朝が、絶対、政敵を、絶対、殺す、絶対、事例、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Hist dyn polit-foe murder cases paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07614',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、医療事故の、本気で、絶対、賠償、絶対、制度、絶対、医療界、絶対、改革中です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Ren — med-incident compensation system — med-reform, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'医療従事者の、本気で、絶対、失業、絶対、防止、絶対、医療界、絶対、進めていらっしゃるんですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Med-worker unemployment-prev — med-advance, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。患者さんの中に、本気で、絶対、暴力団、絶対、関係者、絶対、いらっしゃると、絶対、警戒、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Patient yakuza-related-exist alert, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'戦時の、本気で、絶対、ヒトラー、絶対、政権下の医療史、絶対、研究、絶対、続けていらっしゃるそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Wartime Hitler-regime med-hist research — continue, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。医学教育の、本気で、絶対、文部省、絶対、ガイドライン、絶対、参考に、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Med-edu Education-ministry guidelines — ref, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'古代の、本気で、絶対、王朝、絶対、医療制度、絶対、医療史で、絶対、興味深いですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Ancient dyn med-system — med-hist interesting, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。戦時の、本気で、絶対、満州、絶対、医療隊、絶対、記録、絶対、医療界、絶対、保管しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Wartime Manchuria med-team record — med-keep, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療では、本気で、絶対、人を、絶対、殺す、絶対、ことなく、絶対、命を、絶対、救う、絶対、ことが、絶対、使命ですよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Med — people-murder-not life-save mission, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07615',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corporate response',lines:[
    {speaker:'hiroshi_boss',jp:'損害、本気で、絶対、賠償、絶対、訴訟、絶対、当社、絶対、注視しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Damage compensation lawsuit — our co watch, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社員の、本気で、絶対、失業、絶対、防止、絶対、当社、絶対、対策、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Staff unemployment-prev — our co counter advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'業界の、本気で、絶対、暴力団、絶対、排除、絶対、当社、絶対、姿勢、絶対、明確にしろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Industry yakuza-exclude — our co stance clear, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。歴史展、本気で、絶対、ヒトラー、絶対、関連の、絶対、展示、絶対、当社、絶対、協賛、絶対、慎重に判断します、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Hist-expo Hitler-related — our co sponsor careful-judge, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界の、本気で、絶対、文部省、絶対、ガイドライン、絶対、遵守しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Industry Education-ministry guidelines — comply, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。海外展開、本気で、絶対、王朝、絶対、文化、絶対、所縁の地、絶対、検討しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Overseas expand — dyn-culture connected-loc consider, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'戦前の、本気で、絶対、満州、絶対、地域、絶対、所縁の、絶対、お客様、絶対、大切にしろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Prewar Manchuria-region connected cust — cherish, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、人を、絶対、殺す、絶対、ような、絶対、暴力的、絶対、行動、絶対、絶対、絶対、ないよう、絶対、教育しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Staff people-murder-like violence-act absolute-none — edu, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07616',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、ヨーロッパ旅行で、本気で、絶対、オペラ、絶対、メイちゃん、絶対、見たわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — Europe-trip opera Mei-saw, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、ラップ、絶対、ミュージック、絶対、最近、絶対、聴いてるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Aoi — rap-music lately-listen, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵のお店、本気で、絶対、スカウト、絶対、されそうな、絶対、人気店、絶対、メイちゃん、絶対、思うわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-store — scout-likely pop-store Mei-think, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、モバイル、絶対、注文、絶対、システム、絶対、入れたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — mobile-order sys installed, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お店の、絶対、プログラミング、絶対、お父さんに、絶対、お願いしたって、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — store programming Dad-ask, absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、思い切り、絶対、楽しんで、絶対、お店、絶対、運営、絶対、しているよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — wholeheartedly enjoy store-run-do, Mei absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'葵のお父さん、本気で、絶対、新車、絶対、買ったって、聞いたわよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi-Dad new-car bought heard, Mei absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'葵のお店の前、本気で、絶対、停車、絶対、禁止、絶対、看板、絶対、立てたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-store-front parking-forbid sign installed, Mei absolute serious really.",style:'Practical close.'},
  ]},
  {id:'conv_07617',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、お父さんと、絶対、オペラ、絶対、見に行ったわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Gran — youth Dad-with opera saw, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、お祖父ちゃん、絶対、ラジオで、絶対、ラップ、絶対、初めて、絶対、聞いた時、絶対、驚いたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Youth — Grandpa radio rap first-heard surprised, remember dear?, absolute serious really.",style:'Wry tease.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、野球で、絶対、スカウト、絶対、声、絶対、かけられたぞ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Dad baseball scout-voiced, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、モバイル、絶対、なんて、絶対、知らなかったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa mobile didn't-know, remember dear?, absolute serious really.",style:'Wry.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、プログラミング、絶対、と、絶対、いう、絶対、言葉、絶対、覚え始めたぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Dad programming word memorize-started, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、思い切り、絶対、お仕事、絶対、頑張ったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Grandpa wholeheartedly work-tried, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、新車、絶対、買えた時、絶対、誇らしかったぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Dad new-car bought-time proud, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、駅前、絶対、停車、絶対、して、絶対、ばあさんを、絶対、迎えに来てくれたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa station-front stop gran-pickup-came, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07618',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、オペラ、絶対、見に行きたいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Sho — Mei-sis opera see-go-want, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、ラップ、絶対、ちょっと、絶対、好きになったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me rap slight-like-became, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お友達が、絶対、モデル事務所に、絶対、スカウト、絶対、されたらしいの、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — friend model-agency scout-received-seems, Sho absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼくの、絶対、モバイル、絶対、ゲーム、絶対、楽しいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — my mobile-game fun, absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'お父さんが、本気で、絶対、プログラミング、絶対、お仕事、絶対、しているのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Dad — programming work-do, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、運動会で、絶対、思い切り、絶対、走ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me sports-day wholeheartedly ran, absolute serious really.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、新車、絶対、ローン、絶対、お父さんと、絶対、相談中なの、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — new-car loan Dad-discussing, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、バス、絶対、停車、絶対、する時、絶対、気をつけてね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — bus stop-time careful, absolute serious really.",style:'Caring close.'},
  ]},
  {id:'conv_07619',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お祖母ちゃんと、本気で、絶対、オペラ、絶対、見に行ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Riku — Granny opera saw-went, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。最近、本気で、絶対、ラップ、絶対、ハマってるぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yeah. Lately rap-hooked, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、野球部、絶対、スカウト、絶対、来そうだよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"You — baseball-club scout-come-likely, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、モバイル、絶対、ゲーム、絶対、得意だよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"You — mobile-game good-at, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お前の、本気で、絶対、プログラミング、絶対、課題、絶対、上手だったよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Your programming assignment — good, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'試験前、本気で、絶対、思い切り、絶対、勉強しようぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Pre-test — wholeheartedly study, Sakura absolute serious really.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'お父さん、本気で、絶対、新車、絶対、買ったらしいよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Dad — new-car bought-seems, Riku absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'コンビニ前、本気で、絶対、停車、絶対、禁止、絶対、だから、絶対、気をつけような、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Conv-store-front parking-forbid — careful, Sakura absolute serious really.",style:'Caring close.'},
  ]},
  {id:'conv_07620',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、オペラ、絶対、見たことないんだ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — me opera never-seen, absolute serious really.",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'お父さん、本気で、絶対、若い頃、絶対、ラップ、絶対、好きだったのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad — youth rap-liked, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、サッカーで、絶対、スカウト、絶対、されたいな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom — me soccer scout-want, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、モバイル、絶対、ゲーム、絶対、時間、絶対、決めようね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — mobile-game time decide, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お父さん、絶対、プログラミング、絶対、お仕事、絶対、しているんだよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — Dad programming work-do, absolute serious really.",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、運動会、絶対、思い切り、絶対、走って来てね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — sports-day wholeheartedly run-back, absolute serious really.",style:'Encouraging.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お父さん、絶対、新車、絶対、買ったの?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — Dad new-car bought?, absolute serious really.",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'バス停の、本気で、絶対、停車、絶対、位置、絶対、気をつけてね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Bus-stop position — careful, Sho absolute serious really.",style:'Direction close.'},
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

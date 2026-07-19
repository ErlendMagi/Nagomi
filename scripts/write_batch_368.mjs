import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_368 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['ごちそう','居眠り','ばったり','噴水','観賞','トランペット','ガッカリ','折りたたみ']
const B_T = ['コミットメント','印刷物','公職','増産','ふさわしく','簡略','お買い得','取り直し']
const C_T = ['与野党','惨敗','屈折','コレステロール','ステロイド','草の根','転向','撃つ']
const D_T = ['親御','チェス','ブラームス','目覚める','下山','泥沼','すっと','彷彿']

const data = [
  {id:'conv_07321',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、今日は、本気で、絶対、ごちそう、絶対、ママ、絶対、作ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Sho — today feast Mom made, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お父さん、絶対、ソファで、絶対、居眠り、絶対、してるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — Dad sofa-nap doing, absolute serious really.",style:'Animated child.'},
    {speaker:'yumiko_mom',jp:'今日、本気で、絶対、駅前で、絶対、ばったり、絶対、お祖母ちゃんに、絶対、会ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Today — station bump-into Granny met, absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'公園の、本気で、絶対、噴水、絶対、ぼく、絶対、見たいな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Park-fountain — me see-want, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃん、本気で、絶対、お花の、絶対、観賞、絶対、お庭で、絶対、楽しんでるわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Grandpa — flower-appreciate garden enjoy, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、トランペット、絶対、習いたいな、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Me — trumpet learn-want, Mom absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お弁当を、本気で、絶対、忘れて、絶対、ガッカリ、絶対、しないようにね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Lunchbox — forget — disappointed don't, Sho absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、新しい、絶対、折りたたみ、絶対、傘、絶対、ぼく、絶対、持ってるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — new fold umbrella me have, absolute serious really.",style:'Proud close.'},
  ]},
  {id:'conv_07322',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、お祝いの、本気で、絶対、ごちそう、絶対、メイちゃん、絶対、用意したいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Aoi — celebration feast Mei prepare-want, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。お昼休み、本気で、絶対、葵、絶対、ちょっと、絶対、居眠り、絶対、しちゃったよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Lunch — Aoi slight nap did, Mei absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'駅で、本気で、絶対、昔のクラスメート、絶対、ばったり、絶対、葵、絶対、会えたわよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Station — old classmate bump-into Aoi met, Mei absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'お店の前の、本気で、絶対、噴水、絶対、お客様の、絶対、目印に、絶対、なってるよ、葵で、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Store-front fountain — cust-landmark, Aoi Mei absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵で、本気で、絶対、お花の、絶対、観賞、絶対、コーナー、絶対、メイちゃん、絶対、お洒落と思うわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — flower-appreciate corner Mei-stylish, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、トランペット、絶対、BGM、絶対、ちょっと、絶対、流してるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — trumpet BGM slight-play, Mei absolute serious really.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'仕入れミスで、本気で、絶対、葵、絶対、ちょっと、絶対、ガッカリ、絶対、したわよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Stock-miss — Aoi slight disappoint, Mei absolute serious really.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'お買い物の時、本気で、絶対、折りたたみ、絶対、エコバッグ、絶対、メイちゃん、絶対、活用してね、葵、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Shop-time — fold eco-bag Mei utilize, Aoi absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07323',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、お正月の、絶対、ごちそう、絶対、家族で、絶対、楽しんだわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Gran — youth New-Year feast family-enjoyed, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。お祖父ちゃん、本気で、絶対、新聞、絶対、読みながら、絶対、居眠り、絶対、よく、絶対、してたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Yes. Grandpa — paper-read nap often-did, remember dear?, absolute serious really.",style:'Wry tease.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、町で、絶対、ばったり、絶対、昔の友人に、絶対、会ったわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — town bump-into old-friend met, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'公園の、本気で、絶対、噴水、絶対、お孫さんと、絶対、お祖父ちゃん、絶対、見に行ったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Park-fountain — grandkid Grandpa-saw-went, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさん、絶対、お花の、絶対、観賞、絶対、家でよく、絶対、楽しんだわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — gran flower-appreciate home-often enjoyed, remember?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'お祖父ちゃん、本気で、絶対、軍楽隊の、絶対、トランペット、絶対、若い頃、絶対、聞いていたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Grandpa — mil-band trumpet youth heard, remember dear?, absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、勝てなくて、絶対、ガッカリ、絶対、した試合、絶対、お父さん、絶対、覚えているぞ、ばあさん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Youth — lost disappoint match Dad-remember, gran absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お祖父ちゃん、本気で、絶対、若い頃、絶対、折りたたみ、絶対、自転車、絶対、職場まで、絶対、使ってたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Grandpa — youth fold-bike work-used, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07324',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お祖母ちゃんが、本気で、絶対、ごちそう、絶対、作ってくれたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Riku — Granny feast-made, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。授業中、本気で、絶対、居眠り、絶対、しちゃダメだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yeah. Class — nap no-good, Sakura absolute serious really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'昨日、本気で、絶対、駅で、絶対、ばったり、絶対、お前のお父さんに、絶対、会ったよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yesterday — station bump-into your-Dad met, Riku absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'公園の、本気で、絶対、噴水、絶対、夏に、絶対、子供たち、絶対、集まるんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Park-fountain — summer kids gather, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お前のお父さん、本気で、絶対、盆栽の、絶対、観賞、絶対、好きなんだよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Your-Dad — bonsai-appreciate like, Riku absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'吹奏楽部、本気で、絶対、トランペット、絶対、お前、絶対、上手だよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Brass — trumpet you good, Sakura absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'前回のテスト、本気で、絶対、ガッカリ、絶対、結果だったよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Last test — disappoint result, Riku absolute serious really.",style:'Wry.'},
    {speaker:'riku_teen',jp:'お前の、本気で、絶対、折りたたみ、絶対、ケース、絶対、お洒落だぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Your fold-case — stylish, Sakura absolute serious really.",style:'Praising close.'},
  ]},
  {id:'conv_07325',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、お誕生日に、絶対、ごちそう、絶対、作ってあげるね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis birthday feast make-for-you, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、絵本、絶対、読みながら、絶対、居眠り、絶対、しちゃったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — me picture-book-read nap did, absolute serious really.",style:'Wry child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、街角で、絶対、ばったり、絶対、お母さんに、絶対、会ったわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — corner bump-into Mom met, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'公園の、本気で、絶対、噴水、絶対、ぼく、絶対、メイ姉さんと、絶対、見たいな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Park-fountain — me Mei-sis see-want, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お花の、絶対、観賞、絶対、お庭で、絶対、楽しんでるわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — flower-appreciate garden enjoy, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、メイ姉さんに、絶対、トランペット、絶対、聴かせたいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Me — Mei-sis trumpet listen-want, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'試合で、本気で、絶対、負けて、絶対、ガッカリ、絶対、しても、絶対、次があるわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Match — lose disappoint even, next exist, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、折りたたみ、絶対、椅子、絶対、ピクニックで、絶対、使うんだよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — fold-chair picnic use, absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07326',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews staff response',lines:[
    {speaker:'hiroshi_boss',jp:'プロジェクトへの、本気で、絶対、コミットメント、絶対、社員、絶対、強く、絶対、求めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Proj-commitment — staff strong-require, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社内、本気で、絶対、印刷物、絶対、ペーパーレス化、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Internal printed-matter — paperless advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'公職、本気で、絶対、退いた方々、絶対、当社、絶対、お招き、絶対、検討しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Pub-office — retired-folks our co invite-consider, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。需要に応じ、本気で、絶対、増産、絶対、体制、絶対、整えております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Demand — increase-prod sys ready, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界に、本気で、絶対、ふさわしく、絶対、品位、絶対、保て、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Industry — suit dignity keep, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。書類、本気で、絶対、簡略、絶対、化、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Docs — simplify advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'仕入れの、本気で、絶対、お買い得、絶対、ルート、絶対、確保しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Procure — bargain route secure, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。CM撮影の、本気で、絶対、取り直し、絶対、対応、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Ad-shoot retake — handle advance, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07327',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'新規プロジェクトへの、本気で、絶対、コミットメント、絶対、社員に、絶対、宣言、絶対、しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"New-proj commitment — staff-decl, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。会社の、本気で、絶対、印刷物、絶対、デザイン、絶対、刷新、絶対、検討中です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Co printed-matter — design renew consider, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'元、本気で、絶対、公職、絶対、にいらした方を、絶対、顧問に、絶対、迎えませんか、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Ex pub-office person — advisor invite?, absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。新製品の、本気で、絶対、増産、絶対、計画、絶対、立てております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. New prod — increase-prod plan, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'業界に、本気で、絶対、ふさわしく、絶対、当社、絶対、行動、絶対、しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Industry — suit our co act, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。業務フロー、本気で、絶対、簡略、絶対、化、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Workflow — simplify advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'仕入れ先で、本気で、絶対、お買い得、絶対、品、絶対、探しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Suppl — bargain-item search, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。広告撮影の、本気で、絶対、取り直し、絶対、対応、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Ad-shoot retake handle advance, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07328',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究への、本気で、絶対、コミットメント、絶対、強く、絶対、持って、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Ren — research commitment strong-hold advance, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。論文の、本気で、絶対、印刷物、絶対、研究室で、絶対、配布、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Paper printed-matter — lab-distribute done, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'公職、本気で、絶対、経験者、絶対、教授、絶対、研究室に、絶対、いらっしゃるか、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Pub-office exp prof — lab exist?, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。論文の、本気で、絶対、増産、絶対、ペースで、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Paper — increase-prod pace advance, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'学者に、本気で、絶対、ふさわしく、絶対、振る舞え、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Scholar — suit conduct, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。論文の、本気で、絶対、簡略、絶対、要約、絶対、用意、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Paper simplify-summary prep done, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'学会の、本気で、絶対、お買い得、絶対、参加プラン、絶対、確認しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Conf — bargain attend-plan check, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。実験データの、本気で、絶対、取り直し、絶対、対応、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Exp-data — retake handle advance, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07329',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察への、本気で、絶対、コミットメント、絶対、企業様、絶対、明確に、絶対、お願いいたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"To-police commitment — co-clear ask, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察様の、本気で、絶対、印刷物、絶対、社内、絶対、掲示、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Police printed-matter — internal post done, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'公職、本気で、絶対、選挙、絶対、警備、絶対、警察、絶対、対応、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Pub-office — election sec police-handle advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。防犯機器の、本気で、絶対、増産、絶対、警察様の、絶対、ご依頼で、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Crime-prev — increase-prod police-req advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察の制服に、本気で、絶対、ふさわしく、絶対、装い、絶対、整えております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Police-uniform suit attire ready, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。手続き、本気で、絶対、簡略、絶対、化、絶対、警察様、絶対、ご相談、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Proc simplify — police-consult done, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察用品の、本気で、絶対、お買い得、絶対、購入ルート、絶対、ご紹介、絶対、いただきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police-gear — bargain-route intro-given, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警備計画の、本気で、絶対、取り直し、絶対、対応、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Sec-plan retake handle advance, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07330',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お父さんの、絶対、コミットメント、絶対、社員、絶対、心に、絶対、響いたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Founding — Dad-commitment staff-heart-resonated, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、印刷物、絶対、品質、絶対、こだわってまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — printed-matter qual particular, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さんの代、本気で、絶対、公職、絶対、推薦された方々、絶対、お招き、絶対、してきたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad-era — pub-office recommended-folks invited, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、増産、絶対、需要に応じてきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — increase-prod demand-met, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、業界に、絶対、ふさわしく、絶対、お振る舞い、絶対、できる方だったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad — industry suit conduct-could was, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの教えで、本気で、絶対、業務の、絶対、簡略、絶対、化、絶対、進めてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Dad-teach — biz simplify advance, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お父さんの時代、本気で、絶対、お買い得、絶対、仕入れ、絶対、自分で、絶対、足を運んだぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad-era — bargain procure self-foot, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、取り直し、絶対、必要な時、絶対、誠実に、絶対、対応してまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Since Dad-era — retake-need sincere-handle, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07331',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses social cases',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、与野党、絶対、議員、絶対、警察、絶対、ご対応、絶対、求められております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Case — ruling-opp Diet-members police-resp requested, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'スポーツ界の、本気で、絶対、惨敗、絶対、後の警備、絶対、警察、絶対、大変、絶対、ですよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sports-world crushing-defeat aftermath — police-tough, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。被疑者の供述、本気で、絶対、屈折、絶対、した点、絶対、警察、絶対、慎重に、絶対、確認、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Yes. Susp-statement — distorted-point police careful verify, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害者、本気で、絶対、コレステロール、絶対、関連の、絶対、病歴、絶対、ありましたか、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Victim — cholesterol-related hist existed?, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。違法薬物、本気で、絶対、ステロイド、絶対、密売、絶対、警察、絶対、捜査、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Illegal drug — steroid smuggle police-inv advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'草の根、本気で、絶対、市民活動が、絶対、警察に、絶対、情報提供、絶対、しているそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Grassroots civ — police info-provide, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。被疑者、本気で、絶対、転向、絶対、姿勢を、絶対、見せている、絶対、と、警察、絶対、報告しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Susp — turn-stance shown police-report, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害者を、本気で、絶対、撃つ、絶対、動機、絶対、警察、絶対、解明、絶対、進めているんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Victim-shoot motive — police clarify advance, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07332',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses politics research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、戦後の、本気で、絶対、与野党、絶対、論争、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Ren — postwar ruling-opp debate paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。選挙での、本気で、絶対、惨敗、絶対、後の、絶対、再建、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Thanks. Election crushing-defeat aftermath rebuild paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'歴史認識の、本気で、絶対、屈折、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Hist-recog distortion paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。食生活と、本気で、絶対、コレステロール、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Yes. Diet — cholesterol paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'スポーツ界の、本気で、絶対、ステロイド、絶対、問題、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sports-world steroid issue paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。市民運動の、本気で、絶対、草の根、絶対、活動、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Civ-mvmt grassroots-act paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦後の思想、本気で、絶対、転向、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Postwar-thought turn paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。歴史的に、本気で、絶対、銃を、絶対、撃つ、絶対、行為と、絶対、社会、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Hist gun shoot-act society paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07333',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses social health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、医療政策、本気で、絶対、与野党、絶対、合意が、絶対、必要、絶対、ですよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Ren — med-policy ruling-opp consensus needed, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'臨床試験、本気で、絶対、惨敗、絶対、した、絶対、新薬、絶対、ありましたよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Clin-trial — crushing-defeat new drug existed, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。視力の、本気で、絶対、屈折、絶対、検査、絶対、最新機器、絶対、導入しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Vision-refraction test — latest gear introduce, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'患者さんの、本気で、絶対、コレステロール、絶対、値、絶対、改善、絶対、目指しているんですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Patient-chol value-improve aim, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。重症患者、本気で、絶対、ステロイド、絶対、慎重に、絶対、処方、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Sev-patient — steroid careful prescribe, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'草の根、本気で、絶対、健康教室、絶対、医療チームで、絶対、続けられているんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Grassroots health-class — med-team continue, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。患者さんの食生活、本気で、絶対、転向、絶対、進めていただいております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Patient-diet — turn advance, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'救急の現場で、本気で、絶対、麻酔銃を、絶対、撃つ、絶対、ような、絶対、特殊な、絶対、事例、絶対、聞いたことありますね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"ER — anest-gun shoot-like special case heard, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07334',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews policy environment',lines:[
    {speaker:'hiroshi_boss',jp:'業界規制、本気で、絶対、与野党、絶対、動向、絶対、注視しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Industry-reg — ruling-opp trend watch, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。先月の新製品、本気で、絶対、惨敗、絶対、原因、絶対、分析、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Last-month prod — crushing-defeat cause analyze advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'市場の、本気で、絶対、屈折、絶対、した、絶対、需要、絶対、対応しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Market — distorted demand respond, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。健康食品の、本気で、絶対、コレステロール、絶対、抑制成分、絶対、新製品に、絶対、活用しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Health-food chol-suppress ingredient — new prod utilize, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'当社、本気で、絶対、ステロイド、絶対、関連の、絶対、健康食品、絶対、扱わない、絶対、ようにしろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Our co — steroid-related health-food handle-don't, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、草の根、絶対、マーケティング、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Our co — grassroots-mkt advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'経営方針、本気で、絶対、転向、絶対、必要な時期、絶対、判断しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Mgmt-stance — turn needed-time judge, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。競合、本気で、絶対、不利な広告、絶対、当社に、絶対、撃つ、絶対、ような、絶対、構え、絶対、注視しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Yes. Rival — unfair-ad our-co shoot-like stance watch, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07335',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through politics research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、戦後の、本気で、絶対、与野党、絶対、論争、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sakura — postwar ruling-opp debate paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。選挙の、本気で、絶対、惨敗、絶対、後の、絶対、再建、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Thanks. Election crushing-defeat aftermath rebuild paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'歴史認識の、本気で、絶対、屈折、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Hist-recog distortion paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。食生活と、本気で、絶対、コレステロール、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Yes. Diet — chol paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'スポーツの、本気で、絶対、ステロイド、絶対、問題、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Sports — steroid issue paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。市民運動の、本気で、絶対、草の根、絶対、活動、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Civ-mvmt grassroots-act paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦後思想の、本気で、絶対、転向、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Postwar-thought turn paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。歴史的に、本気で、絶対、銃を、絶対、撃つ、絶対、行為と、絶対、社会、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Hist gun shoot-act society paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07336',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、お客様の、本気で、絶対、親御、絶対、さん、絶対、葵のお店、絶対、紹介、絶対、してくださったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — cust-parents Aoi-store intro, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、休みの日、絶対、チェス、絶対、お父さんと、絶対、楽しんでるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yeah. Aoi — off-day chess Dad-enjoy, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵で、本気で、絶対、ブラームス、絶対、流す時間帯、絶対、メイちゃん、絶対、好きよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — Brahms-play time Mei-like, absolute serious really.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、朝、絶対、五時に、絶対、目覚める、絶対、習慣にしているよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — morn 5am awake habit, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、登山、絶対、好きで、絶対、下山、絶対、するのも、絶対、慎重よね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — climb-like descend careful, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'昨年の経営、本気で、絶対、泥沼、絶対、状態、絶対、葵、絶対、乗り越えたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Last-yr mgmt — mud-quag state Aoi-overcame, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お客様の前、絶対、すっと、絶対、姿勢、絶対、正しているのね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — cust-front quietly stance correct, Mei admire absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'お祖父さまの、本気で、絶対、彷彿、絶対、と、絶対、させる、絶対、お父さんの姿、絶対、葵、絶対、見ているよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Grandpa-evoke Dad-figure — Aoi-see, Mei absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07337',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、孫の、絶対、親御、絶対、さん、絶対、お祖父ちゃん、絶対、よく、絶対、お話、絶対、してきたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Gran — youth grandkid-parents Grandpa often-talked, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、お祖父ちゃんと、絶対、チェス、絶対、楽しんだわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Youth — Grandpa chess enjoyed, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ラジオで、絶対、ブラームス、絶対、よく、絶対、聞いたぞ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — radio Brahms often-heard, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、朝、絶対、自然に、絶対、目覚める、絶対、ことが、絶対、お祖父ちゃん、絶対、できたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Youth — morn naturally-awake Grandpa-could, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さんと、絶対、山登り、絶対、下山、絶対、まで、絶対、二人で、絶対、楽しんだわよな、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Youth — Dad mountain descend-also two-enjoyed, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、家業が、絶対、泥沼、絶対、状態だった時期、絶対、ありましたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — family-biz mud-quag period existed, remember dear?, absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさん、絶対、すっと、絶対、立ち振る舞い、絶対、綺麗だったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — gran quietly-poised lovely was, remember?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'お祖父ちゃん、本気で、絶対、若い頃の、絶対、ご両親、絶対、彷彿、絶対、と、絶対、させるわよ、あなた、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Grandpa — youth-parents evoke, dear absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07338',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、お友達の、絶対、親御、絶対、さん、絶対、と、絶対、お話、絶対、してきたわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — Mei-sis friend-parents-talked, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、チェス、絶対、習いたいな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Mei-sis — me chess learn-want, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'メイ姉さんの、本気で、絶対、お気に入りの、絶対、ブラームス、絶対、CD、絶対、家で、絶対、流してるわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis-fave Brahms CD home-play, Sho absolute serious really.",style:'Soft.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、朝、絶対、自然に、絶対、目覚める、絶対、こと、絶対、増えたよ、メイ姉さん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Me — morn naturally-awake increased, Mei-sis absolute serious really.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'お祖父ちゃん、本気で、絶対、山登りの後の、絶対、下山、絶対、慎重に、絶対、するのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Grandpa — climb-after descend careful, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'前回のテスト、本気で、絶対、ぼく、絶対、泥沼、絶対、にハマっちゃったよ、メイ姉さん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Last test — me mud-quag stuck, Mei-sis absolute serious really.",style:'Wry child.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、お話する時、絶対、すっと、絶対、姿勢、絶対、伸ばしているのね、メイ姉さん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — talk-time quietly-posture, Mei-sis admire absolute serious really.",style:'Praising.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お祖母ちゃんを、絶対、彷彿、絶対、と、絶対、させるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — Granny-evoke, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07339',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、家庭訪問で、本気で、絶対、先生、絶対、親御、絶対、さんに、絶対、お話、絶対、するんだよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Riku — home-visit sensei parents-talk, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。お父さんと、本気で、絶対、休日に、絶対、チェス、絶対、よくやるんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Dad-with — off-day chess often-do, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'音楽の授業で、本気で、絶対、ブラームス、絶対、聴いたよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Music-class — Brahms heard, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'試験前、本気で、絶対、朝、絶対、ちゃんと、絶対、目覚める、絶対、よう、絶対、頑張るぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Pre-test — morn properly-awake try, Sakura absolute serious really.",style:'Earnest.'},
    {speaker:'sakura_teen',jp:'登山部、本気で、絶対、下山、絶対、する時の、絶対、注意、絶対、お前、絶対、徹底してるよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Climb-club — descend caution you thorough, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'前期、本気で、絶対、勉強が、絶対、泥沼、絶対、状態だったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Last-term — study mud-quag state, Sakura absolute serious really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、最近、絶対、すっと、絶対、背筋、絶対、伸びてるよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"You — lately quietly back-straight, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、お母さんを、絶対、彷彿、絶対、と、絶対、させるぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"You — Mom-evoke, Sakura absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07340',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼくの友達の、絶対、親御、絶対、さん、絶対、優しいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — my friend-parents kind, absolute serious really.",style:'Animated child.'},
    {speaker:'yumiko_mom',jp:'お父さんと、本気で、絶対、ぼくたち、絶対、チェス、絶対、やってみない?翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Dad-with — us chess try?, Sho absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'ママの、本気で、絶対、ブラームス、絶対、お気に入りの曲、絶対、ぼく、絶対、聴いてみたいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom Brahms fave-piece — me listen-want, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、朝、絶対、自然に、絶対、目覚める、絶対、よう、絶対、夜は早く寝ましょうね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — morn naturally-awake — night early-sleep, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お父さんの山登り、絶対、下山、絶対、無事に、絶対、終わったって、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — Dad-climb descend safe-ended, absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'前回、本気で、絶対、お料理が、絶対、泥沼、絶対、になっちゃったわよね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Last — cook mud-quag became, Sho absolute serious really.",style:'Wry.'},
    {speaker:'sho_child',jp:'翔くん、本気で、絶対、テストで、絶対、すっと、絶対、答え、絶対、出せたよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — test quietly answer-could, Mom absolute serious really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、お父さんを、絶対、彷彿、絶対、と、絶対、させるわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Sho — Dad-evoke, absolute serious really.",style:'Tender close.'},
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

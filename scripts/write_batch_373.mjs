import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_373 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['用件','彼岸','食中毒','雑用','口元','鳴く','透け','車窓']
const B_T = ['引き継ぐ','ジュエリー','賜物','見積り','雄大','摘出','要所','国税庁']
const C_T = ['賑わい','背骨','減価','声高','子女','食い違い','異に','突っ込ま']
const D_T = ['現われる','送れる','盛り上げる','おのずと','歩き回っ','さらい','か所','ソクラテス']

const data = [
  {id:'conv_07421',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、お父さんから、本気で、絶対、用件、絶対、ママに、絶対、電話、絶対、あったわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — from Dad business-msg Mom-call existed, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、彼岸、絶対、お墓参り、絶対、行くんだよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Mom — equinox grave-visit going, absolute serious really.",style:'Earnest child.'},
    {speaker:'yumiko_mom',jp:'お弁当、本気で、絶対、食中毒、絶対、気をつけてね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Lunch — food-poison careful, Sho absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、ママの、絶対、雑用、絶対、手伝うよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Me — Mom-chore help, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、口元、絶対、お味噌、絶対、ついてるわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Sho — mouth-area miso stuck, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'お庭の鳥、本気で、絶対、鳴く、絶対、声、絶対、ぼく、絶対、好きだよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Garden-bird — chirp voice me-like, Mom absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お洗濯、本気で、絶対、シャツが、絶対、透けて、絶対、見えるから、絶対、気をつけてね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Laundry — shirt see-through visible careful, Sho absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'家族旅行の、本気で、絶対、車窓、絶対、ぼく、絶対、楽しみだよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Family-trip car-window — me fun, Mom absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07422',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、メイちゃん、本気で、絶対、用件、絶対、伝えたいことがあって、絶対、来たわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — Mei business-msg convey-want came, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、彼岸、絶対、お祖父さまのお墓参り、絶対、行ってきたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yeah. Aoi — equinox Grandpa-grave visit-came, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、夏場、絶対、食中毒、絶対、気をつけてね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — summer food-poison careful, Mei absolute serious really.",style:'Caring.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お店の、絶対、雑用、絶対、メイちゃんに、絶対、手伝ってもらえると嬉しいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — store-chore Mei-help glad, absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、口元、絶対、笑顔、絶対、メイちゃん、絶対、可愛いと思うわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — mouth-area smile Mei-cute think, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵のお店の、本気で、絶対、看板鳥、絶対、鳴く、絶対、声、絶対、お客様、絶対、癒されているよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi store-mascot-bird — chirp voice cust-heal, Mei absolute serious really.",style:'Tender.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、夏服、絶対、薄手で、絶対、透けて、絶対、見えそうな日、絶対、メイちゃん、絶対、心配よ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — summer-clothes thin see-through visible-day Mei-worry, absolute serious really.",style:'Caring.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、新幹線の、絶対、車窓、絶対、景色、絶対、出張で、絶対、楽しんだよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — shinkansen car-window scene biz-trip enjoyed, Mei absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07423',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、用件、絶対、お父さん、絶対、手紙で、絶対、伝えたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Gran — youth business-msg Dad letter-conveyed, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、彼岸、絶対、家族みんなで、絶対、お墓参り、絶対、行ったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Youth — equinox family-all grave-visit went, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさん、絶対、食中毒、絶対、ならぬよう、絶対、お料理、絶対、気をつけたわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — gran food-poison-prevent cook-careful, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、家の、絶対、雑用、絶対、引き受けてくれていたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa home-chore took, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさんの、絶対、口元、絶対、笑顔、絶対、お父さん、絶対、忘れないぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran mouth-area smile Dad-unforget, remember?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、家の庭、絶対、鳥が、絶対、鳴く、絶対、声、絶対、お祖父ちゃんと、絶対、聞いたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Youth — home garden bird-chirp voice Grandpa-heard, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、薄手の、絶対、夏服、絶対、ばあさん、絶対、透けて、絶対、心配したぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — thin summer-clothes gran see-through worried, remember?, absolute serious really.",style:'Wry tease.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、汽車の、絶対、車窓、絶対、お祖父ちゃんと、絶対、景色、絶対、見たわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — train car-window Grandpa-scene saw, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07424',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前に、本気で、絶対、用件、絶対、あって、絶対、電話したよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Riku — you business-msg called, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。お祖母ちゃん、本気で、絶対、彼岸、絶対、お墓参り、絶対、行くんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Granny — equinox grave-visit going, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お弁当、本気で、絶対、食中毒、絶対、気をつけてね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Lunch — food-poison careful, Riku absolute serious really.",style:'Caring.'},
    {speaker:'riku_teen',jp:'今日、本気で、絶対、部活の、絶対、雑用、絶対、俺が、絶対、引き受けたぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Today — club-chore me took, Sakura absolute serious really.",style:'Proud.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、口元、絶対、笑ってると、絶対、優しく、絶対、見えるよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"You — mouth-area laugh-when kind look, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'校庭の鳥、本気で、絶対、鳴く、絶対、声、絶対、朝、絶対、聞こえるよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"School-yard bird — chirp voice morn-heard, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お前のシャツ、本気で、絶対、薄くて、絶対、透けて、絶対、見えるよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Your shirt — thin see-through visible, Riku absolute serious really.",style:'Wry.'},
    {speaker:'riku_teen',jp:'修学旅行の、本気で、絶対、車窓、絶対、景色、絶対、お前と、絶対、見たいよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"School-trip car-window scene — you-with see-want, Sakura absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07425',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、用件、絶対、伝えに、絶対、来たわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Sho — Mei-sis business-msg convey-came, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼくたち、絶対、彼岸、絶対、お墓参り、絶対、行くよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — us equinox grave-visit going, absolute serious really.",style:'Reflective child.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、夏のお弁当、絶対、食中毒、絶対、気をつけてね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — summer-lunch food-poison careful, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、お家の、絶対、雑用、絶対、お手伝いできるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — me home-chore help-can, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'翔くんの、本気で、絶対、口元、絶対、いつも、絶対、笑顔、絶対、ね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho-mouth — always smile, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、公園で、絶対、鳥が、絶対、鳴く、絶対、声、絶対、聞こえるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — park bird-chirp voice heard, absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、レースのカーテン、絶対、透けて、絶対、お洒落でしょ?翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — lace curtain see-through stylish?, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さんと、本気で、絶対、新幹線の、絶対、車窓、絶対、景色、絶対、見たいな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis-with shinkansen car-window scene see-want, absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07426',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'退任する社員の業務、本気で、絶対、引き継ぐ、絶対、よう、絶対、徹底しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Retiring-staff biz — take-over thorough, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。当社の、本気で、絶対、ジュエリー、絶対、新作、絶対、好評です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Our jewelry new-work favorable, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'お父さんの代からの、本気で、絶対、賜物、絶対、当社の伝統、絶対、守れ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Since Dad-era gift — co-trad keep, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お客様の、本気で、絶対、見積り、絶対、迅速に、絶対、対応しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Cust-quote — swift handle, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'当社の、本気で、絶対、雄大、絶対、なビジョン、絶対、社員に、絶対、伝えろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Our grand vision — staff-convey, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。経営の問題点、本気で、絶対、摘出、絶対、対策、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Mgmt-prob — extract countermeasure advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'販売戦略の、本気で、絶対、要所、絶対、押さえろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sales-strat key-point — grasp, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。国税庁、本気で、絶対、より、絶対、ご指導、絶対、いただいております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. NTA from — guide given, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07427',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'退任予定の業務、本気で、絶対、引き継ぐ、絶対、計画、絶対、立てましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Retire-plan biz — take-over plan set, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。当社の、本気で、絶対、ジュエリー、絶対、ラインアップ、絶対、拡充、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Our jewelry-lineup — expand advance, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'長年のご支援の、本気で、絶対、賜物、絶対、お客様、絶対、感謝、絶対、伝えましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Long-yr support gift — cust gratitude convey, absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。新規案件の、本気で、絶対、見積り、絶対、来週まで、絶対、まとめます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. New-case quote — by-next-week compile, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'当社の、本気で、絶対、雄大、絶対、な構想、絶対、社外にも、絶対、発信しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Our grand vision — outside-also broadcast, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。問題点の、本気で、絶対、摘出、絶対、各部署、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Prob extract — each-dept advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'戦略の、本気で、絶対、要所、絶対、しっかり、絶対、検討しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Strat key-point — solid consider, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。国税庁、本気で、絶対、への、絶対、報告書、絶対、期限内に、絶対、提出いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. NTA-report — within-DDL submit, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07428',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、先輩の研究、本気で、絶対、引き継ぐ、絶対、よう、絶対、頼むぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Ren — senior-research take-over ask, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。研究室の、本気で、絶対、ジュエリー、絶対、と、絶対、いえる、絶対、貴重資料、絶対、大切に管理しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Lab jewelry-like precious-doc careful-mgmt, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'お前の研究、本気で、絶対、教授、絶対、賜物、絶対、と、絶対、評価されているぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Your research — prof gift eval, ask absolute serious really.",style:'Praising.'},
    {speaker:'ren_uni',jp:'はい。研究費の、本気で、絶対、見積り、絶対、まとめております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Research-fund quote — compile, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'お前の、本気で、絶対、雄大、絶対、な研究テーマ、絶対、頼もしいぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Your grand research-theme — reliable, ask absolute serious really.",style:'Praising.'},
    {speaker:'ren_uni',jp:'はい。論文の、本気で、絶対、課題、絶対、摘出、絶対、教授と、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Paper issue-extract prof-advance, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究の、本気で、絶対、要所、絶対、しっかり、絶対、押さえろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Research-key-point solid grasp, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究助成金、本気で、絶対、国税庁、絶対、関連の、絶対、書類、絶対、揃えております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Research-grant — NTA-related docs assemble, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07429',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察の、本気で、絶対、捜査、絶対、引き継ぐ、絶対、担当者、絶対、決まりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Police-inv take-over person — decided, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。盗難品の、本気で、絶対、ジュエリー、絶対、警察様、絶対、捜査、絶対、お願いいたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Stolen-jewelry — police-inv ask, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'市民の皆様のご協力の、本気で、絶対、賜物、絶対、警察、絶対、感謝、絶対、申し上げます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Citizen-coop gift — police gratitude-express, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。修理費の、本気で、絶対、見積り、絶対、警察様、絶対、お渡しいたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Repair-quote — police-provide, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察の、本気で、絶対、雄大、絶対、な治安維持計画、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police grand safety-plan — advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。社内の問題点、本気で、絶対、摘出、絶対、警察様、絶対、ご助言を、絶対、参考にしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Internal-prob extract — police-advice ref, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警備の、本気で、絶対、要所、絶対、警察、絶対、配置、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sec-key-point — police-place thorough, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。脱税案件、本気で、絶対、国税庁、絶対、と、絶対、警察、絶対、連携、絶対、いただいているそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Tax-evasion — NTA-police coop given, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07430',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お父さん、絶対、家業を、絶対、引き継ぐ、絶対、決意を、絶対、固めたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Founding — Dad family-biz take-over resolve set, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、ジュエリー、絶対、扱う、絶対、誇り、絶対、を、絶対、持ってまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Since Dad-era — jewelry-handle pride hold, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さんの努力の、本気で、絶対、賜物、絶対、今の当社、絶対、あるぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Dad-effort gift — now-co exist, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、見積り、絶対、誠実に、絶対、出してまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Since Dad-era — quote sincere submit, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、雄大、絶対、な夢、絶対、持っていたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad — grand-dream had, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんから、本気で、絶対、問題点、絶対、摘出、絶対、する、絶対、目、絶対、教えていただきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. From Dad — prob extract eye taught, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、商売の、絶対、要所、絶対、いつも、絶対、押さえていたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Dad — biz-key-point always grasp was, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、国税庁、絶対、と、絶対、誠実に、絶対、向き合ってまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — NTA sincere-face, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07431',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses cultural history',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、江戸時代の、本気で、絶対、賑わい、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Ren — Edo bustle paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。古代人の、本気で、絶対、背骨、絶対、研究、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Thanks. Ancient-people backbone research paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'資産の、本気で、絶対、減価、絶対、償却、絶対、歴史、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Asset depreciation hist paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。戦前の、本気で、絶対、声高、絶対、な議論、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Prewar vocal debate paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'貴族の、本気で、絶対、子女、絶対、教育、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Noble children-edu paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。記録の、本気で、絶対、食い違い、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Yes. Record-discrepancy paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'学派が、本気で、絶対、見解を、絶対、異に、絶対、する、絶対、過程、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Schools view differ process paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。市場が、本気で、絶対、突っ込ま、絶対、れた、絶対、状況、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Market plunged state paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07432',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses cases',lines:[
    {speaker:'takeda_officer',jp:'お祭りの、本気で、絶対、賑わい、絶対、警察、絶対、警備、絶対、対応、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Fest-bustle — police-sec handle done, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'被害者の、本気で、絶対、背骨、絶対、損傷、絶対、警察、絶対、医師と、絶対、確認、絶対、されたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Victim-backbone damage — police-doctor verified, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。会社財産の、本気で、絶対、減価、絶対、偽装事件、絶対、警察、絶対、捜査、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Co-asset depreciation fake-case — police-inv, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者の、本気で、絶対、声高、絶対、な主張、絶対、警察、絶対、慎重に、絶対、対応、絶対、されているそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Suspect vocal-claim — police careful handle, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。被害者のお、本気で、絶対、子女、絶対、警察、絶対、保護、絶対、いたしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Victim-children — police-protect, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'証言の、本気で、絶対、食い違い、絶対、警察、絶対、整理、絶対、進めていらっしゃるんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Testimony-discrepancy — police-organize advance, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。各部署が、本気で、絶対、意見を、絶対、異に、絶対、する、絶対、点、絶対、警察、絶対、調整いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Each-dept opinion differ-point police-adjust, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者、本気で、絶対、警察車両に、絶対、突っ込ま、絶対、れた、絶対、事件、絶対、警察、絶対、対応大変でしたよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Suspect — police-vehicle ran-into case — police-resp tough, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07433',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher mentors a teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、江戸時代の、本気で、絶対、賑わい、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sakura — Edo bustle paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。古代人の、本気で、絶対、背骨、絶対、研究、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Thanks. Ancient-people backbone research paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'資産の、本気で、絶対、減価、絶対、償却、絶対、歴史、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Asset-depreciation hist paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦前の、本気で、絶対、声高、絶対、な議論、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Prewar vocal debate paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'貴族の、本気で、絶対、子女、絶対、教育、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Noble children-edu paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。記録の、本気で、絶対、食い違い、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Yes. Record-discrepancy paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'学派が、本気で、絶対、見解を、絶対、異に、絶対、する、絶対、過程、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Schools view differ process paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。市場が、本気で、絶対、突っ込ま、絶対、れた、絶対、状況、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Market plunged state paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07434',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、地域の祭りの、本気で、絶対、賑わい、絶対、後の、絶対、医療対応、絶対、医療チームで、絶対、強化しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Ren — local fest-bustle aftermath med-resp — med-team strengthen, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'患者さんの、本気で、絶対、背骨、絶対、治療、絶対、貴院、絶対、専門ですよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Patient-backbone treat — your hosp spec, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。医療機器の、本気で、絶対、減価、絶対、償却、絶対、計画的に、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Med-equip depreciation planned advance, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医療政策、本気で、絶対、声高、絶対、な議論、絶対、続いていますね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Med-policy vocal-debate — continue, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。各家庭のご、本気で、絶対、子女、絶対、健康診断、絶対、医療チーム、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Each-family children-checkup med-team advance, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'症状の、本気で、絶対、食い違い、絶対、診療現場で、絶対、よくある、絶対、ですよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sympt-discrepancy — clin often-have, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。診断意見が、本気で、絶対、異に、絶対、する、絶対、際は、絶対、第二意見を、絶対、求めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Diag-opinion differ-time — second-opinion seek, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'救急に、本気で、絶対、突っ込ま、絶対、れた、絶対、事故、絶対、貴院、絶対、対応大変でしたよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"ER ran-into accident — your hosp resp tough, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07435',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corporate response',lines:[
    {speaker:'hiroshi_boss',jp:'商店街の、本気で、絶対、賑わい、絶対、当社、絶対、貢献しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Shop-area bustle — our co contribute, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。当社の事業の、本気で、絶対、背骨、絶対、製造業、絶対、強化しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Our biz-backbone — manuf strengthen, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'設備の、本気で、絶対、減価、絶対、償却、絶対、計画、絶対、見直せ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Equip depreciation plan — review, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、声高、絶対、な広告、絶対、避けて、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Our co — vocal-ad avoid advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'社員の、本気で、絶対、子女、絶対、教育支援、絶対、当社、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Staff-children edu-support — our co advance, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。部署間の、本気で、絶対、食い違い、絶対、解消、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Inter-dept discrepancy resolve advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'競合と、本気で、絶対、戦略を、絶対、異に、絶対、する、絶対、決断、絶対、必要だ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Rival — strat differ-decide needed, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新市場に、本気で、絶対、突っ込ま、絶対、ない、絶対、慎重路線、絶対、当社、絶対、堅持しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. New-market — don't-plunge careful-line our co maintain, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07436',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、星が、本気で、絶対、夜空に、絶対、現われる、絶対、瞬間、絶対、メイちゃん、絶対、好きよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — star night-sky appear moment Mei-like, absolute serious really.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、お土産、絶対、メイちゃんに、絶対、送れる、絶対、ように、絶対、準備したよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yeah. Aoi — souv Mei-send-can prep, absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お店の雰囲気を、絶対、盛り上げる、絶対、のが、絶対、上手よね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — store-atmos enliven good, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'メイちゃん、本気で、絶対、続けていれば、絶対、おのずと、絶対、結果は、絶対、ついてくるわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei — continue — naturally result follow, absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お店の周りを、絶対、歩き回って、絶対、お客様の声を、絶対、聞いてるよね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — store-around walked-around cust-voice listen, Mei absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、おさらい、絶対、しながら、絶対、新メニュー、絶対、覚えてるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — review while new-menu memorize, Mei absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、二か所、絶対、で、絶対、お店、絶対、開いてるんだね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — two-locations stores opening, Mei admire absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、ソクラテス、絶対、の哲学、絶対、本で、絶対、最近、絶対、読んでるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — Socrates philos book lately-read, Mei absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07437',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、お父さんの夢、絶対、現われる、絶対、瞬間、絶対、よくあったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Gran — youth Dad-dream appear moment often-had, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、お祖父ちゃん、絶対、ばあさんに、絶対、手紙を、絶対、送れる、絶対、機会、絶対、嬉しかったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Youth — Grandpa gran letter-send-can chance glad, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、宴会を、絶対、盛り上げる、絶対、のが、絶対、得意だったぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Dad party enliven good-at, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、努力を続けていれば、絶対、おのずと、絶対、道が、絶対、開けるって、絶対、お祖父ちゃん、絶対、言っていたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Youth — effort-continue naturally path-open Grandpa-said, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、町を、絶対、歩き回って、絶対、お父さん、絶対、商談、絶対、まとめてきたぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — town walked-around Dad-deal compiled, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、ばあさん、絶対、お料理の、絶対、おさらい、絶対、よくしたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — gran cook review often-did, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、家の、絶対、三か所、絶対、お父さん、絶対、修繕したぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — home three-locations Dad-repaired, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、ソクラテス、絶対、の本、絶対、お祖父ちゃん、絶対、読んでいたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — Socrates-book Grandpa-reading, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07438',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、夜空に、絶対、流れ星、絶対、現われる、絶対、瞬間、絶対、見たいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis night-sky shooting-star appear moment see-want, absolute serious really.",style:'Soft.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、メイ姉さんに、絶対、絵手紙、絶対、送れる、絶対、よ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — me Mei-sis picture-letter send-can, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、翔くんの誕生日、絶対、盛り上げる、絶対、ために、絶対、準備、絶対、するわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — Sho-birthday enliven prep do, absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、頑張れば、絶対、おのずと、絶対、結果は、絶対、ついてくるよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — me try naturally result-follow, absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、公園を、絶対、歩き回って、絶対、お花、絶対、観察したのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — park walked-around flower observed, Sho absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、お勉強、絶対、おさらい、絶対、毎日、絶対、してるよ、メイ姉さん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Me — study review every-day do, Mei-sis absolute serious really.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、近所の、絶対、二か所、絶対、お気に入りの、絶対、お店、絶対、あるのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — near two-locations fave-stores have, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、絵本で、絶対、ソクラテス、絶対、見たことあるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me picture-book Socrates seen, absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07439',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、運動会の日、本気で、絶対、虹が、絶対、現われる、絶対、瞬間、絶対、ありそうだよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Riku — sports-day rainbow appear moment seems-have, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。お前に、本気で、絶対、メッセージ、絶対、送れる、絶対、よう、絶対、新しいアプリ、絶対、入れたぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yeah. You — msg send-can new-app installed, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'文化祭、本気で、絶対、お前と、絶対、盛り上げる、絶対、ぞ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Fest — you-with enliven, Riku absolute serious really.",style:'Eager.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、頑張ってれば、絶対、おのずと、絶対、認められるさ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"You — try naturally acknowledged, Sakura absolute serious really.",style:'Tender.'},
    {speaker:'sakura_teen',jp:'昨日、本気で、絶対、駅前を、絶対、歩き回って、絶対、お買い物、絶対、してきたよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yesterday — station-front walked-around shopped, Riku absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'試験前、本気で、絶対、おさらい、絶対、しっかり、絶対、しようぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Pre-test — review solid do, Sakura absolute serious really.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、塾を、絶対、二か所、絶対、通ってるんだよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"You — cram-school two-locations attending, Riku absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'倫理の授業で、本気で、絶対、ソクラテス、絶対、習ったよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Ethics-class — Socrates learned, Sakura absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07440',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、本気で、絶対、夜空に、絶対、流れ星、絶対、現われる、絶対、瞬間、絶対、ぼく、絶対、見たいな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom — night-sky shooting-star appear moment me see-want, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'お祖母ちゃんに、本気で、絶対、お手紙、絶対、送れる、絶対、よう、絶対、ママが、絶対、用意したわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"To-Granny letter — send-can Mom-prep, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お父さんの誕生日、絶対、盛り上げる、絶対、ために、絶対、ぼく、絶対、お手伝いするよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom — Dad-birthday enliven me help, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、努力していれば、絶対、おのずと、絶対、結果は、絶対、ついてくるわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — effort-do naturally result-follow, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、公園を、絶対、歩き回って、絶対、お花、絶対、たくさん、絶対、見たよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — me park walked-around flower many-saw, absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、勉強の、絶対、おさらい、絶対、毎日、絶対、しっかりね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Sho — study review every-day solid, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼくの好きな本屋さん、絶対、近所に、絶対、二か所、絶対、あるんだ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — my fave-bookstore — near two-locations exist, absolute serious really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'お父さん、本気で、絶対、学生時代、絶対、ソクラテス、絶対、の研究、絶対、していたって、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad — student-era Socrates-research did, Sho absolute serious really.",style:'Reflective close.'},
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

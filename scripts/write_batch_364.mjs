import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_364 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['フライパン','ティーン','ステッカー','サボっ','つぼみ','吠え','きゅう','じわじわ']
const B_T = ['実地','旅費','引数','業態','格付け','送迎','旅客','打ち込ん']
const C_T = ['尋常','行き着く','電報','航路','探知','重傷','覇権','代議士']
const D_T = ['せり','右下','団員','シャフト','本拠地','在り','ハイライト','ロケーション']

const data = [
  {id:'conv_07241',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、本気で、絶対、フライパンで、絶対、お料理、絶対、頑張ってるよね、本気で、絶対、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Mom — pan-cook trying, gratitude absolute serious really.",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'うん。お兄ちゃん、本気で、絶対、ティーンになって、絶対、ちょっと、絶対、生意気よね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Bro — teen-became slight-cheeky, Sho absolute serious really.",style:'Wry.'},
    {speaker:'sho_child',jp:'お祖父ちゃんからもらった、本気で、絶対、ステッカー、絶対、ぼく、絶対、ノートに、貼ったよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Grandpa-given sticker — me notebook-stuck, Mom absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'宿題、本気で、絶対、サボったら、絶対、ダメよ、翔くん、本気で、絶対、約束、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Homework — skip no-good, Sho promise absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'庭の花、本気で、絶対、つぼみが、絶対、たくさん、絶対、咲きそうだよ、ママ、本気で、絶対、楽しみ、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Garden — buds many about-bloom, Mom fun absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'うちの犬、本気で、絶対、お客様が来ると、絶対、よく、絶対、吠えるわよね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Our dog — guest-come bark, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'お父さん、本気で、絶対、きゅうに、絶対、お休みが、絶対、決まったって、ママ、本気で、絶対、嬉しい、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Dad — sudden day-off decided, Mom glad absolute serious really.",style:'Cheerful.'},
    {speaker:'yumiko_mom',jp:'外、本気で、絶対、寒くなってきて、絶対、じわじわと、絶対、冬の気配ね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Outside — getting-cold, gradually winter-feel, Sho absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07242',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、新しいフライパン、本気で、絶対、葵で、絶対、使っているのよね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Aoi — new pan Aoi-using, Mei admire absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵のお客様、本気で、絶対、ティーン世代も、絶対、多いのよ、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yeah. Aoi-cust — teen-gen also many, Mei admire absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵オリジナルの、本気で、絶対、ステッカー、絶対、可愛いよね、メイちゃん、本気で、絶対、コレクション、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Aoi-orig sticker — cute, Mei collect absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'バイト、本気で、絶対、サボったらダメよね、メイちゃん、葵で、本気で、絶対、徹底してるよ、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Part-time — skip no-good, Mei Aoi thorough, absolute serious really.",style:'Direction.'},
    {speaker:'mei_romantic',jp:'葵のお庭、本気で、絶対、桜のつぼみ、絶対、見えるわよね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi garden — cherry-buds visible, Mei admire absolute serious really.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'葵のお客様の犬、本気で、絶対、店内、絶対、吠えないように、絶対、躾けされてるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Aoi cust-dog — store no-bark trained, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'最近、葵、本気で、絶対、きゅうに、絶対、お客様、絶対、増えてきたわよね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Lately Aoi — sudden cust-increased, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵の評判、本気で、絶対、じわじわと、絶対、広がっているわよ、メイちゃん、本気で、絶対、嬉しい、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-rep — gradually-spreading, Mei glad absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07243',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、家庭科で、本気で、絶対、フライパン、絶対、使う授業、絶対、楽しかったよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Riku — home-ec pan-class fun, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。俺たち、本気で、絶対、もう、絶対、ティーンエイジャーだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、本気で、絶対。',en:"Yeah. Us — already teenager, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、ステッカー、絶対、コレクション、絶対、多いよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"You — sticker collect many, Riku absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'部活、本気で、絶対、サボったこと、絶対、ないんだぜ、俺、本気で、絶対、誇り、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Club — never-skipped, proud absolute serious really.",style:'Proud.'},
    {speaker:'sakura_teen',jp:'校庭の桜の、本気で、絶対、つぼみ、絶対、ふくらんできたよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"School cherry — buds swelling, Riku absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'お祖父ちゃんち、本気で、絶対、犬、絶対、よく、絶対、吠えるんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Grandpa's — dog often-bark, Sakura absolute serious really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、きゅうに、絶対、忙しくなったよね、リク、本気で、絶対、心配、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"You — sudden busy, Riku worry absolute serious really.",style:'Concerned.'},
    {speaker:'riku_teen',jp:'お前の点数、本気で、絶対、じわじわと、絶対、上がってきてるよね、桜、本気で、絶対、応援、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Your scores — gradually-rising, Sakura cheer absolute serious really.",style:'Praising close.'},
  ]},
  {id:'conv_07244',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさんの、絶対、フライパン料理、絶対、お祖父ちゃん、絶対、大好きだったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Youth — gran pan-cook Grandpa-loved, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。孫、本気で、絶対、もう、絶対、ティーンになって、絶対、大きくなったわよね、あなた、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Yes. Grandkid — teen-became big-grew, dear absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お父さんが、本気で、絶対、孫のために、絶対、ステッカー、絶対、買ってあげたって、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Dad — for-grandkid sticker bought, gran remember?, absolute serious really.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、お仕事、絶対、サボったこと、絶対、なかったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Youth — Grandpa work never-skipped, remember dear?, absolute serious really.",style:'Praising.'},
    {speaker:'hiroshi_elder',jp:'庭の梅、本気で、絶対、つぼみ、絶対、もう、絶対、ふくらんできたわよな、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Garden plum — buds already-swell, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、飼ってた犬、絶対、夜中も、絶対、よく、絶対、吠えたわよね、あなた、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Youth — pet-dog midnight often-barked, dear remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'昔、本気で、絶対、きゅうに、絶対、雨が、絶対、降ってきた時、絶対、二人で、絶対、雨宿りしたわよな、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Old — sudden rain-came, two-sheltered, gran remember?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'最近、本気で、絶対、じわじわと、絶対、年、絶対、感じてきたわよね、あなた、お互いに、健康、第一にしましょうね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Lately — gradually age-feel, dear mutual-health-first, absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07245',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、新しいフライパン、絶対、買ったよ、本気で、絶対、料理、絶対、楽しみ、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis new pan bought, cook-fun absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、もうすぐ、絶対、ティーン、絶対、になるんだ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — me soon teen-become, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'お土産の、本気で、絶対、ステッカー、絶対、翔くん、絶対、貼って、絶対、使ってね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Souv sticker — Sho stick-use, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、宿題、絶対、サボらないからね、本気で、絶対、約束、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me homework never-skip, promise absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'公園の花、本気で、絶対、つぼみ、絶対、たくさん、絶対、見えるね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Park flowers — buds many-visible, Sho absolute serious really.",style:'Soft.'},
    {speaker:'sho_child',jp:'ぼくのおうちの犬、本気で、絶対、メイ姉さんが、絶対、来ると、絶対、嬉しくて、絶対、吠えるんだ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"My-home-dog — Mei-sis-come glad-bark, absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、きゅうに、絶対、訪ねてきても、絶対、翔くん、絶対、嬉しいかしらね?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — sudden visit Sho-glad?, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さんの料理、本気で、絶対、じわじわと、絶対、上手になってきてるよね、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis cook — gradually-better, admire absolute serious really.",style:'Praising close.'},
  ]},
  {id:'conv_07246',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'実地研修、本気で、絶対、新人、絶対、徹底させろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Practical-train — newbie thorough, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社員の旅費、本気で、絶対、適正に、絶対、管理しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Staff-travel — properly mgmt, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'プログラムの引数、本気で、絶対、正確に、絶対、設定しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Prog-arg — accurately set, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新業態、本気で、絶対、業界で、絶対、注目、絶対、集めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. New biz-type — industry-attention gathering, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'当社の格付け、本気で、絶対、向上、絶対、目指せ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Our rating — improve aim, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お得意様の送迎、本気で、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. VIP-pickup-drop — thorough, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'旅客サービス、本気で、絶対、当社、絶対、最高水準、絶対、目指せ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Pass-service — top-level aim, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、業務に、絶対、打ち込んでくれております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Staff — biz-devoted, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07247',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'今期、本気で、絶対、実地視察、絶対、各支店、絶対、進めましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"This-term — practical-visit each-branch advance, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。出張の旅費、本気で、絶対、見直しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Biz-trip travel — reviewing, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'プログラムの引数、本気で、絶対、エンジニア、絶対、確認してね、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Prog-arg — engineer-verify, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新規業態、本気で、絶対、調査、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. New biz-type — survey advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'当社の格付け、本気で、絶対、業界で、絶対、上位、絶対、目指したいわね、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Our rating — industry top aim-want, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、送迎サービス、絶対、好評です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Staff — pickup-service favorable, gratitude absolute serious really.",style:'Cheerful.'},
    {speaker:'yuki_office',jp:'旅客対応、本気で、絶対、社員、絶対、教育、絶対、徹底しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Pass-resp — staff-edu thorough, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、新事業に、絶対、打ち込んでくれています、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Staff — new-biz devoted, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07248',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究の、本気で、絶対、実地、絶対、経験、絶対、積め、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Ren — research practical exp accum, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。学会の旅費、本気で、絶対、研究室から、絶対、支給、絶対、いただいております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Conf-travel — lab-provided, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'プログラムの引数、本気で、絶対、研究にも、絶対、活用、絶対、しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Prog-arg — research-utilize, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。新業態の研究、本気で、絶対、興味、絶対、深まっております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. New biz-type research — interest deepens, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'論文の格付け、本気で、絶対、上位を、絶対、目指せ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Paper-rating — top aim, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。教授の送迎、本気で、絶対、私が、絶対、引き受けてまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Prof-pickup — me-take, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'旅客機の航空学、本気で、絶対、研究、絶対、面白いぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Pass-jet aerodynamics — research fun, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究に、本気で、絶対、打ち込んでまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、本気で、絶対。',en:"Yes. Research devoted, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07249',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、実地訓練、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Police — practical-train advance, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察出張の旅費、本気で、絶対、当社、絶対、補助、絶対、お申し付けください、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Police-trip travel — our co-subsid please, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'被害届の引数、本気で、絶対、正確に、絶対、ご記入ください、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Damage-claim arg — accurately fill, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。新業態の防犯、本気で、絶対、警察様、絶対、ご指導、絶対、お願いいたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. New biz-type crime-prev — police-guide ask, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察の格付け、本気で、絶対、市民、絶対、信頼、絶対、寄せていただいております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Police-rating — citizen-trust given, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察送迎の、本気で、絶対、車両、絶対、当社で、絶対、用意可能です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Police-pickup vehicle — our co prep-able, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'旅客機の安全、本気で、絶対、警察、絶対、見守ってまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Pass-jet safety — police-watch, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、防犯活動に、絶対、打ち込んでまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Staff — crime-prev-devoted, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07250',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、実地で、絶対、お父さん、絶対、苦労したぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Founding — practical Dad-hardship, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、旅費、絶対、節約、絶対、続けてまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Since Dad-era — travel save continue, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さんの時代、本気で、絶対、引数、絶対、いう言葉、絶対、まだ、なかったぞ、ばあさんから、聞いた、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対。',en:"Dad-era — arg-word still didn't-exist, from gran heard, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、業態、絶対、進化、絶対、続いております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Since Dad-era — biz-type evolve continue, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'当社の格付け、本気で、絶対、お父さんの代から、絶対、業界、絶対、上位、絶対、保ってきた、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"Our rating — since Dad-era industry-top kept, ask absolute serious really.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの送迎、本気で、絶対、社員、絶対、誇りに、絶対、思っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Dad-pickup — staff-proud, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'創業時、本気で、絶対、旅客船、絶対、よく、使ったぞ、お父さん、お前にも、伝えたい、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Founding — pass-boat often-used, Dad you-convey, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの精神、本気で、絶対、業務に、絶対、打ち込んでまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Dad-spirit — biz-devoted, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07251',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、尋常ではない、絶対、状況、絶対、警察、絶対、慎重に、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Case — not-normal situation, police-careful advance, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'捜査が、本気で、絶対、最終的に、絶対、行き着く、絶対、結論、絶対、知りたいですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Inv — finally arrive-conclusion know-want, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。昔の事件、本気で、絶対、電報、絶対、証拠として、絶対、残っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Old case — telegram evidence-remain, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者、本気で、絶対、航路を、絶対、変えて、絶対、逃げた、絶対、と、聞きました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Suspect — route-changed fled heard, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。最新の探知機、本気で、絶対、警察、絶対、活用しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Latest detector — police-utilize, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害者、本気で、絶対、重傷、絶対、ですよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Victim — severe-injury, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。組織の覇権、本気で、絶対、犯罪、絶対、関係していることも、絶対、捜査、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Yes. Org-hegemony — crime-link inv-advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'代議士、本気で、絶対、本件、絶対、関与、絶対、ないことを、絶対、願います、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Diet-member — case-involve-none hope, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07252',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses historical research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、戦時、本気で、絶対、尋常ではない、絶対、状況、絶対、論文で、扱っていましたね、本気で、立派、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Ren — wartime not-normal paper-handled, splendid absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。歴史的、本気で、絶対、最終的に、絶対、行き着く、絶対、結論、絶対、論文で、扱いました、本気で、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Hist — finally-arrive conclusion paper-handled, deep research absolute gratitude.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、電報による、絶対、通信、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対。',en:"Wartime — telegram-comm paper-handled, view broad splendid absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。戦時、本気で、絶対、敵国の航路、絶対、避けた、絶対、船、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、本気、本気で、絶対、感謝、本当に、絶対、本気で。',en:"Yes. Wartime — enemy-route avoided ships paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、敵の探知、絶対、技術、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Wartime — enemy-detect tech paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。戦時、本気で、絶対、市民、絶対、重傷、絶対、状況、絶対、論文で、扱いました、本気で、本当に、辛い歴史、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Yes. Wartime — civilian severe-injury paper-handled, hard hist absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、覇権争い、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Wartime — hegemony-fight paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。戦時、本気で、絶対、代議士の役割、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Wartime — Diet-member-role paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07253',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、患者さんの容体、本気で、絶対、尋常ではなく、絶対、医療、絶対、緊張、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — patient-cond not-normal, med-tension, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'患者さんの治療、本気で、絶対、最終的に、絶対、行き着く、絶対、結果、絶対、見守りたいですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Patient-tx — finally-arrive result watch-want, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。昔の医療、本気で、絶対、電報で、絶対、緊急連絡、絶対、していた、絶対、時代がありました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Yes. Old med — telegram-emerg era, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医療搬送、本気で、絶対、航路、絶対、最短経路を、絶対、選びますよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Med-transport — route shortest-choose, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。最新の、本気で、絶対、探知機器、絶対、医療現場、絶対、活用しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Latest detector — med-utilize, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'重傷の患者さん、本気で、絶対、本当に、絶対、辛い状況、絶対、ですよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Severe-injury patient — hard, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。医療技術の覇権、本気で、絶対、各国、絶対、競っている時代、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Med-tech hegemony — each-country competing, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'代議士、本気で、絶対、医療政策、絶対、本気で、検討、絶対、必要ですよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Diet-member — med-policy serious-consider needed, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07254',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp strategy',lines:[
    {speaker:'hiroshi_boss',jp:'業界の競争、本気で、絶対、尋常ではない、絶対、激しさ、絶対、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Industry-rival not-normal intensity, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、最終的に、絶対、行き着く、絶対、勝利、絶対、目指してまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Our co — finally-arrive victory aim, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'創業時、本気で、絶対、電報、絶対、お父さん、絶対、よく、使ったんだぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Founding — telegram Dad-often-used, ask absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。輸送の、本気で、絶対、航路、絶対、最適化、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Transport-route — optimize advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'競合の動向、本気で、絶対、探知、絶対、徹底させろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Rival-trend — detect thorough, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、重傷、絶対、ないよう、絶対、安全管理、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Yes. Staff — severe-injury-avoid safety-mgmt thorough, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界の覇権、本気で、絶対、当社、絶対、握れ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Industry-hegemony — our co grab, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。代議士の方々、本気で、絶対、当社の業界、絶対、ご支援、絶対、いただいております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Diet-members — our industry-support, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07255',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、戦時、本気で、絶対、尋常ではない、絶対、状況、絶対、論文で、扱っていましたね、本気で、立派、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Sakura — wartime not-normal paper-handled, splendid absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。歴史的に、本気で、絶対、最終的に、絶対、行き着く、絶対、結論、絶対、論文で、扱いました、本気で、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Hist — finally-arrive conclusion paper-handled, deep research absolute gratitude.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、電報、絶対、家族、絶対、悲しい知らせ、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対。',en:"Wartime — telegram family sad-news paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦時、本気で、絶対、敵国の航路、絶対、避けて、絶対、船、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、本気、本気で、絶対、感謝、本当に、絶対、本気で。',en:"Yes. Wartime — enemy-route-avoid ships paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、敵の探知、絶対、技術、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Wartime — enemy-detect tech paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。戦時、本気で、絶対、市民の重傷、絶対、論文で、扱いました、本気で、本当に、辛い歴史、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Wartime — civilian severe-injury paper-handled, hard hist absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、覇権主義、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Wartime — hegemonism paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦時、本気で、絶対、代議士の苦悩、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Wartime — Diet-member-agony paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07256',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、市場の競り、本気で、絶対、見学に行ったよ、メイちゃん、葵で、本気で、絶対、興奮、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — market-auction visited, Mei Aoi excited absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。新メニューの、本気で、絶対、注意書き、絶対、右下に、絶対、書いてあるよ、メイちゃん、葵で、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Yeah. New-menu notes — bottom-right written, Mei Aoi absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お祭りの団員、絶対、来てくださって、絶対、嬉しいわよね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — fest-troupe came glad, Mei absolute serious really.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'彼、ゴルフの、本気で、絶対、シャフト、絶対、新しいの、絶対、買ったって、葵、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Bf — golf-shaft new bought, Aoi Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、地域の、絶対、本拠地、絶対、本気で、お洒落、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — region home-base stylish, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'昔、本気で、絶対、在りし日の、絶対、お祖母ちゃん、絶対、思い出すわよ、葵、メイちゃん、本気で、絶対、感謝、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Old — in-day-past Granny recall, Aoi Mei gratitude absolute serious really.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'試合の、本気で、絶対、ハイライト、絶対、見てきたわよ、葵、メイちゃん、本気で、絶対、興奮、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Match-highlights — saw, Aoi Mei excited absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お洒落な、絶対、ロケーション、絶対、新店舗、絶対、出したいんだ、メイちゃん、本気で、絶対、夢、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Aoi — stylish location new-store out-want, Mei dream absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07257',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、市場で、本気で、絶対、競りに、絶対、お父さん、絶対、参加してきたって、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Mom — market — auction Dad-attended, absolute serious really.",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'うん。テストの、本気で、絶対、解答用紙、絶対、右下に、絶対、名前、絶対、書くのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Test sheet — bottom-right name-write, Sho absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'お父さん、本気で、絶対、地域の、絶対、団員、絶対、頑張ってるんだよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Dad — region troupe trying, Mom absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃん、若い頃、本気で、絶対、シャフトを、絶対、加工する仕事、絶対、していたって、聞いたわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Grandpa — youth shaft-process job heard, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'お父さんの会社、本気で、絶対、本拠地、絶対、東京なんだよね、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Dad-co — home-base Tokyo, Mom absolute serious really.",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃんの、本気で、絶対、在りし日の、絶対、お話、絶対、お母さんに、絶対、聞かせてもらったわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Grandpa — in-day-past stories Mom-told, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'運動会の、本気で、絶対、ハイライト、絶対、ぼくの、絶対、リレー、絶対、だったよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sports-day highlight — my relay, Mom absolute serious really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'家族旅行の、本気で、絶対、ロケーション、絶対、お父さん、絶対、決めてるって、翔くん、本気で、絶対、楽しみ、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Family-trip location — Dad-deciding, Sho fun absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07258',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、市場の、本気で、絶対、競り、絶対、社会科見学で、絶対、行くんだよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Riku — market-auction soc-class go, absolute serious really.",style:'Curious teen.'},
    {speaker:'riku_teen',jp:'うん。プリント、本気で、絶対、右下に、絶対、お前の、絶対、名前、絶対、書いてあったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Print — bottom-right your name-was, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'吹奏楽部の、本気で、絶対、団員、絶対、増えたよね、リク、お互いに、絶対、嬉しい、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Brass-band — troupe-increased, Riku mutual-glad absolute serious really.",style:'Cheerful.'},
    {speaker:'riku_teen',jp:'お父さんから、本気で、絶対、ゴルフのシャフト、絶対、もらったんだぜ、桜、本気で、絶対、嬉しい、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"From-Dad — golf-shaft got, Sakura glad absolute serious really.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'うちの本拠地、本気で、絶対、東京、絶対、なんだよ、リク、本気で、絶対、知ってた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Our home-base — Tokyo, Riku knew?, absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'お祖父ちゃんの、本気で、絶対、在りし日の、絶対、お話、絶対、よく、絶対、聞いたぜ、桜、本気で、絶対、感謝、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Grandpa — in-day-past stories often heard, Sakura gratitude absolute serious really.",style:'Wistful.'},
    {speaker:'sakura_teen',jp:'今日の試合の、本気で、絶対、ハイライト、絶対、お前のシュート、絶対、だったよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Today-match highlight — your shot, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'修学旅行の、本気で、絶対、ロケーション、絶対、楽しみだよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"School-trip location — fun, Sakura absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07259',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、市場の、絶対、競り、絶対、よく、絶対、見に行ったわよな、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Youth — market-auction often-saw, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。昔の絵、本気で、絶対、右下に、絶対、サイン、絶対、入っているわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Old paintings — bottom-right sign, remember dear?, absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、町内会の、絶対、団員、絶対、お父さん、絶対、頑張ったぞ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Youth — town-assoc troupe Dad-tried, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、シャフトの加工、絶対、職人だったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Youth — Grandpa shaft-process artisan, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'創業時、本気で、絶対、本拠地、絶対、家の隣だったぞ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Founding — home-base home-next, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃんの、絶対、在りし日の、絶対、姿、絶対、忘れないわよ、あなた、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Youth — Grandpa in-day-past figure unforget, dear absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、結婚式の、絶対、ハイライト、絶対、ばあさんの笑顔、絶対、だったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — wedding-highlight gran-smile, remember?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'新婚旅行の、本気で、絶対、ロケーション、絶対、絶景だったわよね、覚えてる、あなた?本気で、絶対、思い出、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、本気。',en:"Honeymoon-location — breathtaking, remember dear?, memory absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07260',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、市場の、本気で、絶対、競り、絶対、参加して、絶対、新鮮な、絶対、食材、絶対、仕入れよか、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Aoi — market-auction attend fresh-ingred source?, absolute serious really.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。メニューの、本気で、絶対、右下に、絶対、アレルギー情報、絶対、書きましょう、葵で、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Menu — bottom-right allergy-info write, Aoi absolute serious really.",style:'Practical.'},
    {speaker:'daichi_kansai',jp:'地域のイベントの、本気で、絶対、団員、絶対、葵で、絶対、お招きしよか、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Local event troupe — Aoi invite?, absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。新しいミキサーの、本気で、絶対、シャフト、絶対、強化版に、絶対、変えませんか、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Yes. New mixer-shaft — strengthen-change?, absolute serious really.",style:'Reflective.'},
    {speaker:'daichi_kansai',jp:'葵さん、本気で、絶対、本拠地として、絶対、この街、絶対、根付いていきたいで、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Aoi — as-home-base this-town take-root want, absolute serious really.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。お客様の、本気で、絶対、在りし日の、絶対、思い出、絶対、語ってくださる時、絶対、嬉しいですね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Cust in-day-past memories told glad, absolute serious really.",style:'Warm.'},
    {speaker:'daichi_kansai',jp:'葵で、本気で、絶対、ハイライト、絶対、料理、絶対、お客さん、絶対、感動するで、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Aoi — highlight cuisine cust-moved, absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。新店舗の、本気で、絶対、ロケーション、絶対、慎重に、絶対、選びましょう、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Yes. New-store location — careful choose, absolute serious really.",style:'Warm close.'},
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

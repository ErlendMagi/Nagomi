import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_370 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['宅急便','鼻水','一戸建て','仮眠','鉄板','年越し','着地','日向']
const B_T = ['バイヤー','打診','催促','充て','固める','アシスト','前文','一筋']
const C_T = ['冬季','転換期','引き揚げ','大出','炎上','踏み切っ','杏','撒き']
const D_T = ['アポロ','ライナー','ゼット','ナカ','シマ','鞭','ハンドブック','さらし']

const data = [
  {id:'conv_07361',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、宅急便、絶対、お祖母ちゃんから、絶対、届いたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — courier-parcel Granny-arrived, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、ちょっと、絶対、鼻水、絶対、出てるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — me slight nose-run, absolute serious really.",style:'Earnest child.'},
    {speaker:'yumiko_mom',jp:'いつか、本気で、絶対、一戸建て、絶対、引っ越したいわね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Someday — house move-want, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'お父さん、本気で、絶対、仮眠、絶対、ソファで、絶対、取ってるよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad — short-sleep sofa-taking, Mom absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'今晩は、本気で、絶対、鉄板、絶対、お好み焼き、絶対、しましょうね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Tonight — iron-plate okonomiyaki do, Sho absolute serious really.",style:'Eager.'},
    {speaker:'sho_child',jp:'年越し、本気で、絶対、家族みんなで、絶対、過ごしたいな、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"New-Year-eve — family-all-spend want, Mom absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'飛行機の、本気で、絶対、着地、絶対、いつ見ても、絶対、ドキドキするわよね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Plane-landing — anytime nerve, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'お庭の、本気で、絶対、日向、絶対、暖かくて、絶対、ぼく、絶対、好きだよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Garden-sunny-spot warm me-like, Mom absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07362',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、お豆の、本気で、絶対、宅急便、絶対、メイちゃん、絶対、葵のお店に、絶対、届けてもらったわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — bean-courier Mei Aoi-store delivered, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、最近、絶対、ちょっと、絶対、鼻水、絶対、出るわよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yeah. Aoi — lately slight nose-run, Mei absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、いつか、絶対、一戸建て、絶対、お店、絶対、開きたいよね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — someday house-store open-want, Mei admire absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'仕込みの合間、本気で、絶対、葵、絶対、ちょっと、絶対、仮眠、絶対、取ってるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Prep-gap — Aoi slight nap-take, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵の、本気で、絶対、鉄板、絶対、人気メニュー、絶対、メイちゃん、絶対、頼みたいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — staple-pop menu Mei order-want, absolute serious really.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、年越し、絶対、お店で、絶対、特別営業、絶対、するよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — New-Year-eve store-spec-open do, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵の新店舗の、本気で、絶対、着地、絶対、地点、絶対、もう、絶対、決まったの?メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi new-store landing-point — already decided?, Mei absolute serious really.",style:'Curious.'},
    {speaker:'aoi_barista',jp:'葵のお店の窓辺の、本気で、絶対、日向、絶対、メイちゃん、絶対、お気に入りよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-store window-sunny — Mei-fave, absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07363',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、今朝、本気で、絶対、宅急便、絶対、お父さん、絶対、孫から、絶対、届いたぞ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Gran — this-morn courier Dad-grandkid arrived, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。お祖父ちゃん、本気で、絶対、最近、絶対、鼻水、絶対、出るわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Grandpa — lately nose-run, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、一戸建て、絶対、お父さん、絶対、ばあさんと、絶対、建てたわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — house Dad gran-built, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お祖父ちゃん、本気で、絶対、最近、絶対、午後の、絶対、仮眠、絶対、お気に入りよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Grandpa — lately afternoon nap-fave, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさんの、絶対、鉄板、絶対、お料理、絶対、お父さん、絶対、大好きだったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — gran iron-plate cook Dad-loved, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、年越し、絶対、家族みんなで、絶対、お祖父ちゃん、絶対、過ごしたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — New-Year-eve family-all Grandpa-spent, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、飛行機の、絶対、着地、絶対、初めて、絶対、見て、絶対、お父さん、絶対、感動したぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Youth — plane-landing first-saw Dad-moved, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お祖父ちゃん、本気で、絶対、お庭の、絶対、日向、絶対、お気に入りの場所よね、あなた、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Grandpa — garden-sunny fave-spot, dear absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07364',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、家に、本気で、絶対、宅急便、絶対、届いてたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Riku — home courier-arrived, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。最近、本気で、絶対、花粉で、絶対、鼻水、絶対、止まらないんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Lately — pollen nose-run-no-stop, Sakura absolute serious really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'お前のお家、本気で、絶対、一戸建て、絶対、なんだよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Your-home — house, Riku absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'試験勉強の合間、本気で、絶対、仮眠、絶対、取った方がいいぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Test-study gap — nap-better, Sakura absolute serious really.",style:'Caring.'},
    {speaker:'sakura_teen',jp:'家庭科の、本気で、絶対、鉄板、絶対、焼きそば、絶対、楽しかったよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Home-ec — iron-plate yakisoba fun, Riku absolute serious really.",style:'Bright.'},
    {speaker:'riku_teen',jp:'お前と、本気で、絶対、年越し、絶対、初詣、絶対、行きたいな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"You-with — New-Year-eve shrine-visit go-want, Sakura absolute serious really.",style:'Earnest.'},
    {speaker:'sakura_teen',jp:'体操の、本気で、絶対、着地、絶対、お前、絶対、完璧だったよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Gym-landing — you perfect was, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'校庭の、本気で、絶対、日向、絶対、お弁当、絶対、食べると気持ちいいぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"School-yard sunny — lunch-eat nice, Sakura absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07365',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、宅急便、絶対、で、絶対、お菓子、絶対、送ってもらったわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis courier sweets-sent, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、ちょっと、絶対、鼻水、絶対、ぐずついてるんだ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — me slight nose-run sniffly, absolute serious really.",style:'Earnest child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、いつか、絶対、一戸建て、絶対、お庭付きの、絶対、家、絶対、住みたいわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — someday house garden-attached live-want, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、お昼に、絶対、仮眠、絶対、しちゃった、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me lunch nap did, absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'お祖母ちゃんの、本気で、絶対、鉄板、絶対、お料理、絶対、メイ姉さん、絶対、教わったわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Granny iron-plate cook — Mei-sis learned, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、年越し、絶対、ぼくたちのお家、絶対、来てよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Mei-sis — New-Year-eve our-home come, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'体操選手の、本気で、絶対、着地、絶対、メイ姉さん、絶対、いつも、絶対、ハラハラするわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Gymnast-landing — Mei-sis always nerve, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、公園の、絶対、日向、絶対、ぼくと、絶対、一緒に、絶対、お弁当、絶対、食べようよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — park-sunny me-together lunch-eat, absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07366',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'海外の、本気で、絶対、バイヤー、絶対、商談、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Overseas buyer negotiate advance, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。お得意様、本気で、絶対、新規案件、絶対、打診、絶対、いただきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. VIP new-case sounded-out, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'未払いの、本気で、絶対、催促、絶対、丁寧に、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Unpaid dunning — polite advance, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員の給与、本気で、絶対、来期、絶対、業績に、絶対、充てる、絶対、計画です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Staff-pay — next-term perf allocate plan, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'契約条件、本気で、絶対、固める、絶対、よう、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Contract-cond firm-up advance, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新人の業務、本気で、絶対、アシスト、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Newbie-biz — assist thorough, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'契約書の、本気で、絶対、前文、絶対、修正、絶対、確認しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Contract-preamble — revise verify, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、業務に、絶対、一筋に、絶対、取り組んでくれております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Staff — biz devoted-tackle, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07367',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'新規バイヤー、本気で、絶対、開拓、絶対、進めましょうか、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"New buyer — develop advance?, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。取引先より、本気で、絶対、共同開発、絶対、打診、絶対、いただきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Partner — joint-dev sounded-out, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'未納の、本気で、絶対、催促、絶対、丁寧な文面で、絶対、お願いします、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Unpaid-dunning — polite-tone ask, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。広告予算、本気で、絶対、新製品に、絶対、充てる、絶対、計画、絶対、立てました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Ad-budget — new prod allocate plan-set, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'戦略を、本気で、絶対、固める、絶対、ため、絶対、来週、絶対、会議、絶対、開きましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Strat firm-up — next-week meet, absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。新人研修、本気で、絶対、先輩社員が、絶対、アシスト、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Newbie-train senior-assist, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'規約の、本気で、絶対、前文、絶対、書き換え、絶対、進めましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Regs-preamble — rewrite advance, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、業務に、絶対、一筋に、絶対、向き合ってくれております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Staff biz-devoted-face, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07368',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、海外、本気で、絶対、バイヤー、絶対、と、絶対、研究、絶対、紹介、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Ren — overseas buyer research-intro advance, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。教授より、本気で、絶対、共同研究、絶対、打診、絶対、いただきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Prof — joint-research sounded-out, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'論文の締切、本気で、絶対、催促、絶対、しなくていいよう、絶対、頼むぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Paper-DDL — dunning-don't-need-want ask, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究費、本気で、絶対、機材購入に、絶対、充てる、絶対、予定です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Research-fund — equip-buy allocate plan, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究の仮説、本気で、絶対、固める、絶対、よう、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Research-hypoth firm-up advance, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。後輩の研究、本気で、絶対、アシスト、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Junior-research assist, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'論文の、本気で、絶対、前文、絶対、教授に、絶対、確認、絶対、いただけ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Paper-preamble — prof-verify, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。私、本気で、絶対、研究に、絶対、一筋に、絶対、取り組んでまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Me — research devoted-tackle, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07369',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察の、本気で、絶対、バイヤー、絶対、装ったおとり捜査、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Police buyer-disguise sting — advance, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察様より、本気で、絶対、合同訓練の、絶対、打診、絶対、いただきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Police — joint-train sounded-out, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'未払いの罰金、本気で、絶対、催促、絶対、警察、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Unpaid-fine dunning — police-advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。当社の予算、本気で、絶対、防犯機器に、絶対、充てる、絶対、計画です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Our budget — crime-prev-gear allocate plan, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'証拠を、本気で、絶対、固める、絶対、よう、絶対、警察、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Evidence firm-up — police-advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察様の捜査、本気で、絶対、当社も、絶対、アシスト、絶対、させていただきます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Police-inv — our co also assist, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察規則の、本気で、絶対、前文、絶対、改定、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police-regs preamble — revise advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、防犯意識、絶対、一筋に、絶対、高めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Staff — crime-prev-awareness devoted-raise, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07370',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お父さん、絶対、海外バイヤー、絶対、自分で、絶対、開拓したぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Founding — Dad overseas-buyer self-developed, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、お得意様の、絶対、打診、絶対、丁寧に、絶対、対応してまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Since Dad-era — VIP-sound-out polite respond, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、催促、絶対、しなくとも、絶対、お客様、絶対、信頼してくれたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Dad — dunning-not-needed cust-trusted, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、利益、絶対、社員に、絶対、充てる、絶対、こと、絶対、大切にしてきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Since Dad-era — profit staff-allocate cherish, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、信念を、絶対、固める、絶対、ことが、絶対、得意だったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Dad — belief firm-up good-at was, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、社員同士、絶対、アシスト、絶対、する、絶対、文化、絶対、続いております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Since Dad-era — staff-assist culture continue, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お父さんの、本気で、絶対、社訓の、絶対、前文、絶対、ばあさん、絶対、覚えていたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Dad-creed preamble — gran-remembered, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの精神、本気で、絶対、業務に、絶対、一筋に、絶対、受け継いでまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Dad-spirit — biz devoted-inherit, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07371',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses cultural history research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、北国の、本気で、絶対、冬季、絶対、生活、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Ren — north-country winter-season life paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。戦後の、本気で、絶対、転換期、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Thanks. Postwar transition paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦後の、本気で、絶対、引き揚げ、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Postwar repatriation paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。学園紛争の、本気で、絶対、大出来事、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Yes. Campus-conflict big-event paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'当時の、本気で、絶対、社会の炎上、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Era — society-flame-up paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。国が、本気で、絶対、戦後、絶対、独立に、絶対、踏み切った、絶対、過程、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Nation postwar — independence step-took process paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時の、本気で、絶対、杏、絶対、を含む、絶対、果樹園経済、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Wartime apricot-incl orchard-econ paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。戦後の、本気で、絶対、種撒き、絶対、活動、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Postwar seed-sow activity paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07372',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses cases',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、冬季、絶対、特有の、絶対、事件、絶対、警察、絶対、対応中です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Case — winter-season specific incident police-handle, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'業界の、本気で、絶対、転換期、絶対、警察の取り組みも、絶対、変わってきていますか、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Industry-transition — police-effort also changed?, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。証拠の、本気で、絶対、引き揚げ、絶対、慎重に、絶対、警察、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Evidence-recovery careful police-advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'昨年の、本気で、絶対、大出火、絶対、捜査、絶対、結果、絶対、出ましたか、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Last-yr big-fire inv-result out?, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。SNSの、本気で、絶対、炎上、絶対、絡みの、絶対、事件、絶対、警察、絶対、増えております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. SNS flame-up related incident — police-increase, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者、本気で、絶対、自首に、絶対、踏み切った、絶対、と聞きました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Suspect — surrender step-took heard, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。被害者の、本気で、絶対、杏、絶対、子さん、絶対、警察、絶対、聴取、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Victim-Anzu (Apricot)-child police-interview advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'種撒き、本気で、絶対、を装った、絶対、薬物密売、絶対、警察、絶対、注視されているそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Seed-sow disguised drug-deal — police-watching, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07373',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp strategy',lines:[
    {speaker:'hiroshi_boss',jp:'冬季、本気で、絶対、需要、絶対、当社、絶対、対応、絶対、徹底しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Winter-season demand — our resp thorough, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。業界の、本気で、絶対、転換期、絶対、当社の戦略、絶対、見直しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Industry-transition — our strat review, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'海外事業、本気で、絶対、引き揚げ、絶対、慎重に、絶対、判断しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Overseas-biz pullout — careful judge, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。前期、本気で、絶対、大出費、絶対、見直し、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Last-term big-expense review advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'SNSの、本気で、絶対、炎上、絶対、リスク、絶対、当社、絶対、注視しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"SNS-flame-up risk — our co watch, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新規事業に、本気で、絶対、踏み切った、絶対、結果、絶対、当社、絶対、業績、絶対、伸びております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. New biz step-took result — perf-rise, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'新商品、本気で、絶対、杏、絶対、フレーバー、絶対、展開しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"New prod apricot-flavor — expand, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。地方の、本気で、絶対、種撒き、絶対、農家、絶対、当社、絶対、提携、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Local seed-sow farmer — our co partner advance, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07374',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher mentors a teen on research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、北国の、本気で、絶対、冬季、絶対、生活、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sakura — north winter-season life paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。戦後の、本気で、絶対、転換期、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Thanks. Postwar transition paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'戦後の、本気で、絶対、引き揚げ、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Postwar repatriation paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦後の、本気で、絶対、大出来事、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Yes. Postwar big-event paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'当時の、本気で、絶対、社会の炎上、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Era — society-flame-up paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。国が、本気で、絶対、独立に、絶対、踏み切った、絶対、過程、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Yes. Nation independence-step-took process paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時の、本気で、絶対、杏、絶対、果樹園、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Wartime apricot-orchard paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦後の、本気で、絶対、種撒き、絶対、活動、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Postwar seed-sow paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07375',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical history',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、本気で、絶対、冬季、絶対、流行する、絶対、感染症、絶対、医療界、絶対、注視しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — winter-season epidemic — med-watch, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'医療の、本気で、絶対、転換期、絶対、研究、絶対、進めていらっしゃるんですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Med-transition research — advancing, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。海外医療チーム、本気で、絶対、引き揚げ、絶対、後の、絶対、現地支援、絶対、続けております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Overseas med-team — pullout aftermath local-support continue, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'救急現場の、本気で、絶対、大出血、絶対、対応、絶対、医療界、絶対、訓練、絶対、徹底されているんですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"ER big-bleed-handle — med-train thorough, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。患者さんの治療法、本気で、絶対、誤情報の炎上、絶対、医療界、絶対、対応に困っています、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Patient-tx-misinfo flame-up — med-respond hard, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'新治療に、本気で、絶対、踏み切った、絶対、決断、絶対、患者さんを救いますね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"New-tx step-took decision — patient-save, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。患者さんに、本気で、絶対、杏、絶対、由来の薬効、絶対、ご紹介、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Patient — apricot-derived medicinal intro, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'種撒き、本気で、絶対、活動を、絶対、健康促進、絶対、と、絶対、組み合わせる、絶対、取り組み、絶対、続いていますね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Seed-sow activity — health-promote combine effort continue, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07376',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、アポロ、絶対、計画の、絶対、ドキュメンタリー、絶対、メイちゃん、絶対、見たわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — Apollo plan doc Mei saw, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。野球の、本気で、絶対、ライナー、絶対、葵、絶対、お父さんと、絶対、よく、絶対、見るのよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yeah. Baseball-liner — Aoi Dad-often-watch, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、頭文字、絶対、ゼット、絶対、なんていう、絶対、デザインのロゴ、絶対、お洒落よね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — initial Z design-logo stylish, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お店の、絶対、ナカイ、絶対、さん、絶対、よく、絶対、来てくださるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — store Nakai-san often-come, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、シマウマ、絶対、柄の、絶対、エプロン、絶対、メイちゃん、絶対、可愛いと思うわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — zebra-pattern apron Mei-cute think, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'昔の、本気で、絶対、鞭、絶対、職人技、絶対、博物館で、絶対、葵、絶対、見たよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Old whip artisan — museum Aoi-saw, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お店の、絶対、ハンドブック、絶対、メイちゃん、絶対、お洒落と思うわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi store-handbook — Mei-stylish-think, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵のお店、本気で、絶対、暖簾の、絶対、さらし布、絶対、季節ごとに、絶対、替えているよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-store noren — bleached-cloth season-change, Mei absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07377',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、アポロ、絶対、月面着陸、絶対、お父さん、絶対、テレビで、絶対、見たぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Gran — youth Apollo moon-landing Dad TV-saw, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、野球の、絶対、ライナー、絶対、お祖父ちゃん、絶対、ラジオで、絶対、聞いたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Youth — baseball-liner Grandpa radio-heard, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ゼット、絶対、と、絶対、いう、絶対、戦闘機、絶対、お父さん、絶対、覚えているぞ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Youth — Z fighter Dad-remember, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、ナカイ、絶対、家の、絶対、おばさん、絶対、よくお手伝いに来てくれたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Nakai-family auntie often-help-came, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、動物園の、絶対、シマウマ、絶対、お祖父ちゃん、絶対、孫と、絶対、見たぞ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — zoo-zebra Grandpa grandkid-saw, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'昔、本気で、絶対、お祖父ちゃんの、絶対、鞭、絶対、馬を扱う時の、絶対、姿、絶対、忘れないわよ、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Old — Grandpa whip horse-handle-time figure unforget, remember dear?, absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さんの、絶対、商売の、絶対、ハンドブック、絶対、自分で、絶対、書いたぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Dad-biz handbook self-wrote, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'昔、本気で、絶対、暖簾の、絶対、さらし布、絶対、ばあさんが、絶対、洗濯したわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Old — noren bleached-cloth gran-washed, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07378',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、アポロ、絶対、月面着陸の本、絶対、読んだわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — Mei-sis Apollo moon-landing-book read, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、野球で、絶対、ライナー、絶対、打った人、絶対、テレビで、絶対、見たよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — baseball liner-hit person TV-saw, absolute serious really.",style:'Animated child.'},
    {speaker:'mei_romantic',jp:'メイ姉さんの自転車、本気で、絶対、ゼット、絶対、マークの、絶対、ハンドル、絶対、お洒落でしょ?翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis bike — Z-mark handle stylish?, Sho absolute serious really.",style:'Praising.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼくのクラスの、絶対、ナカイ、絶対、君、絶対、面白い人だよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — my class Nakai-kun fun person, absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'翔くんと、本気で、絶対、動物園で、絶対、シマウマ、絶対、見たいわね、メイ姉さん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Sho-with — zoo-zebra see-want, Mei-sis absolute serious really.",style:'Eager.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、博物館で、絶対、鞭、絶対、ぼく、絶対、見たことあるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — museum whip me seen, absolute serious really.",style:'Curious.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お店の、絶対、ハンドブック、絶対、翔くんに、絶対、見せてあげるね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — store-handbook Sho-show, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お祖母ちゃんち、絶対、暖簾の、絶対、さらし布、絶対、白くて、絶対、綺麗だよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — Granny noren bleached-cloth white-pretty, absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07379',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、理科の授業で、本気で、絶対、アポロ、絶対、計画、絶対、習ったよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Riku — sci-class Apollo plan learned, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。試合で、本気で、絶対、ライナー、絶対、ヒット、絶対、打ったんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Match — liner-hit hit, Sakura absolute serious really.",style:'Proud.'},
    {speaker:'sakura_teen',jp:'お前のチーム名、本気で、絶対、頭文字、絶対、ゼット、絶対、入ってるよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Your-team-name — initial Z in, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'ナカイ、本気で、絶対、先生、絶対、俺たちの、絶対、担任、絶対、なんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Nakai-sensei — our-homeroom, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'動物園で、本気で、絶対、シマウマ、絶対、ぼくたち、絶対、見たことあったよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Zoo — zebra us seen, Riku absolute serious really.",style:'Wistful.'},
    {speaker:'riku_teen',jp:'歴史の授業で、本気で、絶対、武士の、絶対、鞭、絶対、習ったよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Hist-class — samurai-whip learned, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'生徒会の、本気で、絶対、ハンドブック、絶対、お前、絶対、作ってくれたよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Stud-council handbook — you made, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'文化祭の、本気で、絶対、暖簾、絶対、さらし布、絶対、染めるんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Fest noren — bleached-cloth dye, Sakura absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07380',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、アポロ、絶対、計画の、絶対、本、絶対、読みたいな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — me Apollo plan book read-want, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'お父さん、本気で、絶対、若い頃、絶対、ライナー、絶対、打つのが、絶対、得意だったって、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Dad — youth liner-hit good-at was, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼくの帽子の、絶対、ゼット、絶対、マーク、絶対、お気に入りなんだ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — my cap Z-mark fave, absolute serious really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'お母さんのお友達、本気で、絶対、ナカイ、絶対、さんって、絶対、いう方なのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom-friend — Nakai-san person, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'動物園で、本気で、絶対、シマウマ、絶対、ぼく、絶対、近くで、絶対、見たいな、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Zoo — zebra me close-see-want, Mom absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃん、本気で、絶対、若い頃、絶対、馬の、絶対、鞭、絶対、上手に扱えたって、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Grandpa — youth horse-whip skill-handle, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼくの、絶対、観察ノートの、絶対、ハンドブック、絶対、見て、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — my observation-notebook handbook see, absolute serious really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃんち、本気で、絶対、暖簾の、絶対、さらし布、絶対、白くて、絶対、清々しいわよね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Grandpa noren — bleached-cloth white-fresh, Sho absolute serious really.",style:'Tender close.'},
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

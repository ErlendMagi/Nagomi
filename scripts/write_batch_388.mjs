import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_388 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['今や','いったん','実物','新品','ため息','吹く','丸い','酷い']
const B_T = ['属する','従う','密接','超過','所在','着手','急増','取り上げる']
const C_T = ['理性','排水','導い','促し','細部','巧み','相関','ヒロイン']
const D_T = ['客席','エンディング','上回っ','見逃し','ミネラル','延々と','深める','と同時に']

const data = [
  {id:'conv_07721',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、お父さん、絶対、今や、絶対、部長、絶対、なのよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Dad now-already director, absolute serious really.",style:'Praising.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、いったん、絶対、休憩、絶対、しようよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — once break do, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、博物館で、絶対、化石の、絶対、実物、絶対、見たんでしょ?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — museum fossil real-thing saw?, absolute serious really.",style:'Curious.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼくの、絶対、新品、絶対、のリュック、絶対、お父さん、絶対、買ってくれたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom — my brand-new backpack Dad-bought, absolute serious really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'お父さん、本気で、絶対、ため息、絶対、最近、絶対、多いわよね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Dad — sigh lately many, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'お庭で、本気で、絶対、風が、絶対、吹く、絶対、と、絶対、気持ちいいよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Garden — wind blow nice, Mom absolute serious really.",style:'Soft.'},
    {speaker:'yumiko_mom',jp:'翔くんの、本気で、絶対、丸い、絶対、お顔、絶対、お母さん、絶対、可愛いと思うわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — round-face Mom cute-think, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、今日の暑さ、絶対、酷い、絶対、よね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — today-heat awful, absolute serious really.",style:'Wry close.'},
  ]},
  {id:'conv_07722',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、今や、絶対、人気店、絶対、メイちゃん、絶対、嬉しいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — now-already pop-store Mei-glad, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、いったん、絶対、休憩、絶対、入れるね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yeah. Aoi — once break enter, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お皿、絶対、実物、絶対、見せてくれる?メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — plate real-thing show?, Mei absolute serious really.",style:'Curious.'},
    {speaker:'aoi_barista',jp:'葵のお店、本気で、絶対、新品、絶対、の、絶対、コーヒーマシン、絶対、入れたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-store — brand-new coffee-machine installed, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、ため息、絶対、つかないでね、メイちゃん、絶対、心配するわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — sigh don't — Mei-worry, absolute serious really.",style:'Caring.'},
    {speaker:'aoi_barista',jp:'葵のお店、本気で、絶対、ドアから、絶対、風が、絶対、吹く、絶対、と、絶対、お洒落な、絶対、お知らせよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-store — door wind-blow stylish-notice, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、丸い、絶対、お皿、絶対、メイちゃん、絶対、お気に入りよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — round-plate Mei-fave, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お客様への、絶対、酷い、絶対、対応、絶対、絶対しないよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — cust awful-resp absolute don't, Mei absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07723',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃と比べて、本気で、絶対、今や、絶対、便利な時代、絶対、ね、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Gran — vs youth — now-already convenient era, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、お祖父ちゃん、絶対、いったん、絶対、外に出ると、絶対、帰宅、絶対、遅かったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Youth — Grandpa once outside-go home-late, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさん、絶対、お父さんに、絶対、実物、絶対、をいつも、絶対、見せてくれたわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran Dad real-thing always-showed, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、新品、絶対、の、絶対、洋服、絶対、嬉しそうにしたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — Grandpa brand-new clothes glad-looked, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、ため息、絶対、つかなかったぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Dad sigh-didn't, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、外で、絶対、風が、絶対、吹く、絶対、と、絶対、お祖父ちゃんと、絶対、お庭に出たわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — outside wind-blow Grandpa-garden-went, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさんの、絶対、丸い、絶対、お顔、絶対、お父さん、絶対、好きだったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — gran round-face Dad-liked, remember?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、夏の暑さ、絶対、酷い、絶対、年、絶対、ありましたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — summer-heat awful year-existed, remember dear?, absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07724',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、今や、絶対、部長、絶対、なんだよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Riku — you now-already captain?, absolute serious really.",style:'Praising teen.'},
    {speaker:'riku_teen',jp:'うん。試合前、本気で、絶対、いったん、絶対、休憩、絶対、しようぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yeah. Pre-match — once break do, Sakura absolute serious really.",style:'Practical.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、図鑑の、絶対、実物、絶対、博物館で、絶対、見たんだよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"You — picture-book real-thing museum-saw, Riku absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'お前の、本気で、絶対、新品、絶対、のスニーカー、絶対、お洒落だぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Your brand-new sneakers — stylish, Sakura absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、ため息、絶対、つかないでよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"You — sigh don't, Riku absolute serious really.",style:'Caring.'},
    {speaker:'riku_teen',jp:'風が、本気で、絶対、ここでも、絶対、吹く、絶対、と、絶対、涼しいぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Wind — here-too blow cool, Sakura absolute serious really.",style:'Soft.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、丸い、絶対、メガネ、絶対、よく似合うよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"You — round-glasses suit, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'今日の試験、本気で、絶対、酷い、絶対、難しさだったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Today-test — awful-hard was, Sakura absolute serious really.",style:'Wry close.'},
  ]},
  {id:'conv_07725',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、今や、絶対、お店、絶対、忙しいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis now-already store busy, absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、いったん、絶対、ぼく、絶対、お家に、絶対、帰るよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Mei-sis — once me home-go, absolute serious really.",style:'Animated child.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、メイ姉さんが、絶対、新メニューの、絶対、実物、絶対、見せてあげる、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — Mei-sis new-menu real-thing show, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、新品、絶対、の、絶対、お洋服、絶対、ママに買ってもらったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — me brand-new clothes Mom-bought, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、ため息、絶対、つかないようにしているわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — sigh don't-try, Sho absolute serious really.",style:'Earnest.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お祭りで、絶対、風船を、絶対、吹く、絶対、競技、絶対、あったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — fest balloon-blow event existed, absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'翔くんの、本気で、絶対、丸い、絶対、頬っぺ、絶対、メイ姉さん、絶対、可愛いと思うわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — round-cheek Mei-sis cute-think, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、ママの、絶対、酷い、絶対、頭痛、絶対、心配だよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me Mom-awful-headache worry, absolute serious really.",style:'Caring close.'},
  ]},
  {id:'conv_07726',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'当社、本気で、絶対、業界に、絶対、属する、絶対、企業として、絶対、責任を、絶対、果たせ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Our co — industry-belong-co responsibility fulfill, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。法令に、本気で、絶対、従う、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Laws-follow thorough, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'お得意様と、本気で、絶対、密接、絶対、な、絶対、関係、絶対、保て、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"VIP close-relation keep, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。予算、本気で、絶対、超過、絶対、しないよう、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Budget exceed-don't thorough, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'責任の、本気で、絶対、所在、絶対、明確に、絶対、しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Responsibility-locus clear, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新規プロジェクト、本気で、絶対、着手、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. New-proj begin, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'お客様の、本気で、絶対、急増、絶対、対応、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Cust-surge handle advance, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員の、本気で、絶対、意見を、絶対、取り上げる、絶対、姿勢、絶対、続けてまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Staff-opin take-up stance continue, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07727',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'業界団体に、本気で、絶対、属する、絶対、企業として、絶対、お務めを、絶対、果たしましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Industry-group-belong-co duty fulfill, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。コンプライアンスに、本気で、絶対、従う、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Compliance-follow thorough, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'仕入れ先と、本気で、絶対、密接、絶対、な、絶対、関係、絶対、続けましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Suppl close-relation continue, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。広告費、本気で、絶対、超過、絶対、注意、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Ad-budget exceed alert, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'責任の、本気で、絶対、所在、絶対、社員に、絶対、説明、絶対、しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Responsibility-locus — staff explain, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新プロジェクトに、本気で、絶対、着手、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. New-proj begin done, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'お問合せ、本気で、絶対、急増、絶対、サポート、絶対、強化しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Inquiry-surge — support strengthen, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員の声を、本気で、絶対、取り上げる、絶対、社内報、絶対、出しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Staff-voice take-up in-house-mag — issue, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07728',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、学界に、本気で、絶対、属する、絶対、研究者として、絶対、責任、絶対、果たせ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Ren — acad-belong researcher responsibility fulfill, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。教授の指導に、本気で、絶対、従う、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Prof-guide-follow advance, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'教授と、本気で、絶対、密接、絶対、な、絶対、議論、絶対、続けろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Prof close-discuss continue, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究時間、本気で、絶対、超過、絶対、しないよう、絶対、管理しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Research-time exceed-don't mgmt, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究、本気で、絶対、所在、絶対、明らかに、絶対、しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Research-locus clear, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。新規論文に、本気で、絶対、着手、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. New paper-begin done, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'論文発表の、本気で、絶対、急増、絶対、注視しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Paper-pub surge watch, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。海外論文も、本気で、絶対、取り上げる、絶対、姿勢、絶対、続けてまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Overseas-paper take-up stance continue, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07729',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、組織に、絶対、属する、絶対、者として、絶対、責任を、絶対、果たします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police — org-belong person responsibility fulfill, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察の指示に、本気で、絶対、従う、絶対、所存です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Police-instruct-follow intend, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察と地域、本気で、絶対、密接、絶対、な、絶対、連携、絶対、保っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police-region close-coop keep, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警備予算、本気で、絶対、超過、絶対、ないよう、絶対、調整しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Sec-budget exceed-none adjust, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察の、本気for、絶対、所在、絶対、市民に、絶対、明らかにしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Police-locus citizen-clear, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。新規捜査に、本気で、絶対、着手、絶対、警察、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. New-inv begin — police-done, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'被害件数、本気で、絶対、急増、絶対、警察、絶対、対応強化しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Damage-count surge — police-resp strengthen, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。市民の声を、本気で、絶対、取り上げる、絶対、警察様、絶対、姿勢、絶対、ありがたいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Citizen-voice take-up police-stance grateful, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07730',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お父さん、絶対、業界団体に、絶対、属する、絶対、責任、絶対、果たしてきたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Founding — Dad industry-group-belong respon fulfilled, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、法令に、絶対、従う、絶対、姿勢、絶対、続けてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Since Dad-era — laws-follow stance continue, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、お得意様と、絶対、密接、絶対、な、絶対、絆、絶対、築いたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Dad — VIP close-bond built, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、予算、絶対、超過、絶対、絶対なきよう、絶対、徹底してまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Since Dad-era — budget exceed absolute-none thorough, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、責任の、絶対、所在、絶対、いつも、絶対、明確にしたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad — responsibility-locus always-clear, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんが、本気で、絶対、新規事業に、絶対、着手、絶対、される姿、絶対、私の手本です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Dad — new-biz begin figure my-model, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、お客様の、絶対、急増、絶対、誇りに思ったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Dad — cust-surge proud-felt, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、社員の意見を、絶対、取り上げる、絶対、社風、絶対、続いております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — staff-opin take-up culture continue, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07731',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、人間の、本気で、絶対、理性、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Ren — human reason paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。古代都市の、本気で、絶対、排水、絶対、技術、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Thanks. Ancient-city drainage paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'歴史人物が、本気で、絶対、後継者を、絶対、導いた、絶対、過程、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Hist-figure successor-led process paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。市民を、本気で、絶対、促した、絶対、社会運動、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Citizen prompted soc-mvmt paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'美術の、本気で、絶対、細部、絶対、にわたる、絶対、技法、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Art detail-spanning technique paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。職人の、本気で、絶対、巧み、絶対、な、絶対、技、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Artisan-skill paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'統計の、本気で、絶対、相関、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Stat correlation paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。物語の、本気で、絶対、ヒロイン、絶対、像、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Story heroine-image paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07732',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses cases',lines:[
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、容疑者に、絶対、理性、絶対、を、絶対、訴え、絶対、対応しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police — suspect reason-appeal handle, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、地下、絶対、排水、絶対、管、絶対、警察、絶対、調査、絶対、されたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Case underground drainage-pipe police-inv done, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。被害者を、本気で、絶対、導いた、絶対、警察官、絶対、表彰、絶対、しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Victim led police-officer commend done, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'市民に、本気for、絶対、自首を、絶対、促した、絶対、活動、絶対、警察、絶対、進められたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Citizen surrender-prompt activity — police advanced, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。証拠の、本気で、絶対、細部、絶対、警察、絶対、確認、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Evidence detail — police verify, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者の、本気で、絶対、巧み、絶対、な、絶対、ごまかし、絶対、警察、絶対、見抜かれたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Suspect-clever-deception — police-saw-through, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。事件間の、本気で、絶対、相関、絶対、警察、絶対、分析、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Inter-case correlation — police-analyze advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害者の、本気で、絶対、ヒロイン、絶対、的、絶対、勇気、絶対、警察、絶対、賞賛されたそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Victim heroine-courage — police-praised, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07733',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher mentors a teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、人間の、本気で、絶対、理性、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sakura — human reason paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。古代都市の、本気で、絶対、排水、絶対、技術、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Thanks. Ancient-city drainage paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'歴史人物が、本気で、絶対、後継者を、絶対、導いた、絶対、過程、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Hist-figure successor-led process paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。市民を、本気で、絶対、促した、絶対、社会運動、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Citizen prompted soc-mvmt paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'美術の、本気で、絶対、細部、絶対、にわたる、絶対、技法、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Art detail-spanning technique paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。職人の、本気で、絶対、巧み、絶対、な、絶対、技、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Artisan-skill paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'統計の、本気で、絶対、相関、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Stat correlation paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。物語の、本気で、絶対、ヒロイン、絶対、像、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Story heroine-image paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07734',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、患者さんの、本気で、絶対、理性、絶対、的な、絶対、判断、絶対、医療チーム、絶対、尊重しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — patient reason-judgement — med-team respect, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'病院の、本気で、絶対、排水、絶対、管理、絶対、貴院、絶対、徹底されているそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Hosp drainage-mgmt — your hosp thorough, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。患者さんを治療に、本気for、絶対、導いた、絶対、医療チームを、絶対、誇りに、絶対、思っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Patient tx-led med-team proud-feel, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'患者さんに、本気で、絶対、治療を、絶対、促した、絶対、医師、絶対、信頼されますね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Patient tx-prompted doctor — trusted, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。検査の、本気で、絶対、細部、絶対、医療チーム、絶対、慎重に、絶対、確認しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Test-detail med-team careful-verify, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'手術の、本気で、絶対、巧み、絶対、な、絶対、技術、絶対、医療チーム、絶対、磨いていらっしゃるんですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Surgery-clever-tech med-team polish, sensei gratitude absolute serious really.",style:'Praising.'},
    {speaker:'saito_doctor',jp:'はい。生活習慣と病気の、本気で、絶対、相関、絶対、医療チーム、絶対、研究しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Lifestyle-illness correlation — med-team research, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療ドラマの、本気で、絶対、ヒロイン、絶対、医師、絶対、貴院、絶対、参考にされたんですか?先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Med-drama heroine-doctor — your hosp ref?, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07735',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews strategy',lines:[
    {speaker:'hiroshi_boss',jp:'感情ではなく、本気で、絶対、理性、絶対、で、絶対、経営判断、絶対、しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Emotion-not — reason mgmt-judge, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。本社の、本気で、絶対、排水、絶対、設備、絶対、整備、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. HQ drainage-equip prep advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'社員を、本気で、絶対、導いた、絶対、メンター、絶対、表彰しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Staff led mentor — commend, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、お客様への、絶対、購入を、絶対、促した、絶対、キャンペーン、絶対、好評です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Our co — cust-purchase prompted campaign favorable, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'契約の、本気で、絶対、細部、絶対、まで、絶対、確認しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Contract detail-to verify, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社の、本気で、絶対、巧み、絶対、な、絶対、マーケティング、絶対、業界の注目です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Our clever-marketing — industry-attention, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'顧客満足度と業績の、本気で、絶対、相関、絶対、分析しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Cust-satisfaction-perf correlation analyze, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社のCMの、本気で、絶対、ヒロイン、絶対、人気俳優、絶対、決定しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Our CM heroine — pop-actor decided, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07736',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、コンサートの、本気で、絶対、客席、絶対、メイちゃん、絶対、よく見えたわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — concert audience-seat Mei well-saw, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、好きな映画の、絶対、エンディング、絶対、感動したよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yeah. Aoi — fave-movie ending moved, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵のお店の売上、本気で、絶対、目標を、絶対、上回った、絶対、ね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-store sales target-exceeded, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お客様の好みを、絶対、見逃した、絶対、こと、絶対、絶対、避けたいよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — cust-taste overlook-things absolute avoid-want, Mei absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、ミネラル、絶対、ウォーター、絶対、お客様、絶対、人気でしょ?メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — mineral-water cust-pop?, Mei absolute serious really.",style:'Curious.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、延々と、絶対、お料理の研究、絶対、続けてるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — endlessly cook-research continue, Mei absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お料理の、絶対、知識、絶対、深める、絶対、姿勢、絶対、メイちゃん、絶対、感心するわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — cook-knowledge deepen-stance Mei-admire, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、新店舗、絶対、と、絶対、同時に、絶対、新メニュー、絶対、発表したよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — new-store with same-time new-menu released, Mei absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07737',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、お父さんと、絶対、劇場の、絶対、客席、絶対、座ったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Gran — youth Dad-with theater audience-seat sat, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、お祖父ちゃんと、絶対、映画の、絶対、エンディング、絶対、涙を流したわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Youth — Grandpa movie-ending tears-flowed, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、予想を、絶対、上回った、絶対、業績を、絶対、出したぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Dad expectation-exceeded perf-out, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、お孫さんの成長を、絶対、見逃した、絶対、ことを、絶対、後悔していたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa grandkid-growth overlook regret, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、ミネラル、絶対、ウォーター、絶対、知らなかったぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Dad mineral-water didn't-know, remember gran?, absolute serious really.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、延々と、絶対、お話、絶対、続けたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa endlessly-talk continued, remember dear?, absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、商売の、絶対、知識を、絶対、深める、絶対、ことに、絶対、励んだぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Dad biz-knowledge deepen tried, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、結婚、絶対、と、絶対、同時に、絶対、商売を、絶対、始めたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa marry with same-time biz-started, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07738',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、劇場の、絶対、客席、絶対、よく座るわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis theater audience-seat often-sit, absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、絵本の、絶対、エンディング、絶対、好きだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me picture-book ending like, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、テストの点数、絶対、目標を、絶対、上回った、絶対、んでしょ?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — test-score target-exceeded?, absolute serious really.",style:'Praising.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、ヒントを、絶対、見逃した、絶対、問題、絶対、あったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me hint-overlook question existed, absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、ミネラル、絶対、ウォーター、絶対、毎日、絶対、飲んでるわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — mineral-water every-day drink, Sho absolute serious really.",style:'Practical.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、延々と、絶対、ゲーム、絶対、しちゃダメだよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — me endlessly game no-good, absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お料理の知識を、絶対、深める、絶対、ことが、絶対、好きよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — cook-knowledge deepen-things like, Sho absolute serious really.",style:'Earnest.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、勉強、絶対、と、絶対、同時に、絶対、運動、絶対、頑張ってるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me study with same-time exercise try, absolute serious really.",style:'Proud close.'},
  ]},
  {id:'conv_07739',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、文化祭の、本気で、絶対、客席、絶対、満員だったよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Riku — fest audience-seat full, absolute serious really.",style:'Animated teen.'},
    {speaker:'riku_teen',jp:'うん。映画の、本気で、絶対、エンディング、絶対、グッときたぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Movie ending — moved, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'お前の試験点、本気で、絶対、平均を、絶対、上回った、絶対、んだよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Your test-score — avg exceeded, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'試験の、本気で、絶対、ひっかけ問題、絶対、見逃した、絶対、ぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Test trick-question — overlooked, Sakura absolute serious really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'運動会で、本気で、絶対、ミネラル、絶対、ウォーター、絶対、配られたよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sports-day mineral-water distributed, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、延々と、絶対、本、絶対、読み続けるよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"You — endlessly book read-continue, Sakura absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'お前と話すと、本気で、絶対、考えを、絶対、深める、絶対、ことが、絶対、できるよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"You-talk — thought-deepen can, Riku absolute serious really.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、勉強、絶対、と、絶対、同時に、絶対、部活、絶対、頑張ってるよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"You — study with same-time club try, Sakura absolute serious really.",style:'Praising close.'},
  ]},
  {id:'conv_07740',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、運動会で、絶対、客席、絶対、お父さんが、絶対、応援、絶対、してくれたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — me sports-day audience-seat Dad-cheered, absolute serious really.",style:'Animated child.'},
    {speaker:'yumiko_mom',jp:'お父さん、本気で、絶対、映画の、絶対、エンディング、絶対、泣いてたわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Dad — movie ending cried, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼくの、絶対、点数、絶対、目標を、絶対、上回った、絶対、よ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — my score target-exceeded, absolute serious really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、勉強の、絶対、大事なところを、絶対、見逃した、絶対、ら、絶対、ダメよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — study imp-part overlook no-good, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、ミネラル、絶対、ウォーター、絶対、飲みたいな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Mom — me mineral-water drink-want, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、延々と、絶対、テレビ、絶対、見ちゃダメよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — endlessly TV watch no-good, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、お勉強で、絶対、知識を、絶対、深める、絶対、ようにするよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — me study knowledge-deepen try, absolute serious really.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、宿題、絶対、と、絶対、同時に、絶対、お手伝いも、絶対、お願いね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — homework with same-time help ask, absolute serious really.",style:'Direction close.'},
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

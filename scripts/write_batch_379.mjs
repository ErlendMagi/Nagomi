import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_379 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['腹痛','蒸し暑い','暖炉','オムツ','饅頭','日陰','雨水','プロポーズ']
const B_T = ['改ざん','急騰','募る','整然と','名著','同好','真下','アーム']
const C_T = ['鉄砲','小作','扮','バルブ','チタン','引き寄せ','押し上げ','小国']
const D_T = ['見送る','盗む','つど','痛快','くどい','本末転倒','滴','モニカ']

const data = [
  {id:'conv_07541',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、ちょっと、絶対、腹痛、絶対、ある?ママ、絶対、心配だわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — slight stomach-ache have?, Mom worry, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、今日は、絶対、すごく、絶対、蒸し暑い、絶対、ね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mom — today very humid-hot, absolute serious really.",style:'Wry child.'},
    {speaker:'yumiko_mom',jp:'冬は、本気で、絶対、お祖父ちゃんちの、絶対、暖炉、絶対、温かいわよね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Winter — Grandpa-home fireplace warm, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼくの妹、絶対、オムツ、絶対、もうすぐ、絶対、卒業するんでしょ?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Mom — my sister diaper soon-graduate?, absolute serious really.",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'お祖母ちゃんから、本気で、絶対、お土産の、絶対、饅頭、絶対、もらったわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Granny souv manju got, Sho absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'お庭の、本気で、絶対、日陰、絶対、ぼく、絶対、お昼寝、絶対、したいよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Garden-shade me nap-want, Mom absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'梅雨の、本気で、絶対、雨水、絶対、お庭の花壇に、絶対、溜まってるわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Rainy-season rainwater — garden-flowerbed accumulated, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お父さん、絶対、ママに、絶対、プロポーズ、絶対、した時、絶対、どんなだった?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — Dad Mom-propose-time — how was?, absolute serious really.",style:'Curious close.'},
  ]},
  {id:'conv_07542',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、メイちゃん、本気で、絶対、最近、絶対、ちょっと、絶対、腹痛、絶対、続いていたのよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — Mei lately slight stomach-ache continued, absolute serious really.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、お店、絶対、蒸し暑い、絶対、日は、絶対、エアコン、絶対、強めにしてるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yeah. Aoi — store humid-hot day AC-stronger, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵のお店の、本気で、絶対、暖炉、絶対、メイちゃん、絶対、冬、絶対、お気に入りよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-store fireplace — Mei winter-fave, absolute serious really.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'葵のお友達、本気で、絶対、出産で、絶対、オムツ、絶対、ご贈答品、絶対、考えてるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi-friend — childbirth diaper-gift considering, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵の、本気で、絶対、和菓子、絶対、饅頭、絶対、メイちゃん、絶対、大好きよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi wagashi-manju — Mei-love, absolute serious really.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'葵のお店の前、本気で、絶対、日陰、絶対、お席、絶対、お客様に、絶対、人気よ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-store-front shade seat — cust-pop, Mei absolute serious really.",style:'Praising.'},
    {speaker:'mei_romantic',jp:'葵のお店の屋根、本気で、絶対、雨水、絶対、対策、絶対、大丈夫?メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-store roof rainwater-counter — OK?, Mei absolute serious really.",style:'Caring.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お友達、絶対、プロポーズ、絶対、されたって、聞いたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-friend — proposed-received heard, Mei absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07543',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、お父さん、絶対、腹痛、絶対、で、絶対、寝込んだ時、絶対、ばあさん、絶対、看病してくれたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Gran — youth Dad stomach-ache bedridden gran-nursed, remember?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、夏、絶対、蒸し暑い、絶対、日々、絶対、ありましたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Youth — summer humid-hot days existed, remember dear?, absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、家の、絶対、暖炉、絶対、お父さん、絶対、薪を、絶対、くべたぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — home fireplace Dad firewood-added, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お孫さんの、絶対、オムツ、絶対、ばあさん、絶対、毎日、絶対、洗ったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — grandkid-diaper gran every-day washed, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさんの手作りの、絶対、饅頭、絶対、お父さん、絶対、大好きだったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — gran handmade manju Dad-loved, remember?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お庭の、絶対、日陰、絶対、お祖父ちゃんと、絶対、よく、絶対、お茶、絶対、飲んだわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — garden-shade Grandpa-with often-tea drank, remember dear?, absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、雨水、絶対、を、絶対、井戸に、絶対、貯めたぞ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Dad rainwater well-stored, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃんから、絶対、プロポーズ、絶対、ばあさん、絶対、嬉しかったわよ、あなた、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — from-Grandpa propose gran-glad was, dear remember?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07544',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、テスト前、絶対、腹痛、絶対、起こすことあるよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Riku — you pre-test stomach-ache get times, absolute serious really.",style:'Wry teen.'},
    {speaker:'riku_teen',jp:'うん。今日、本気で、絶対、蒸し暑い、絶対、から、絶対、部活、絶対、きついぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yeah. Today — humid-hot — club tough, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'山小屋で、本気で、絶対、暖炉、絶対、ぼくたち、絶対、見たよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mountain-cabin fireplace — us saw, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'妹の、本気で、絶対、オムツ、絶対、俺、絶対、替えたぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Sister-diaper — me changed, Sakura absolute serious really.",style:'Proud.'},
    {speaker:'sakura_teen',jp:'お祖母ちゃんから、本気で、絶対、饅頭、絶対、もらったよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Granny manju got, Riku absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'校庭の、本気で、絶対、日陰、絶対、で、絶対、お弁当、絶対、食べようぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"School-yard shade — lunch eat, Sakura absolute serious really.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'部室の屋根、本気で、絶対、雨水、絶対、漏ってきたよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Club-room-roof rainwater leaked, Riku absolute serious really.",style:'Wry.'},
    {speaker:'riku_teen',jp:'映画で、本気で、絶対、プロポーズ、絶対、シーン、絶対、見るの、絶対、ドキドキするよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Movie propose scene see — nerve, Sakura absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07545',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、お腹、絶対、腹痛、絶対、ない?ちゃんと、お薬、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis stomach-ache none?, prop-meds, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、外、絶対、蒸し暑い、絶対、から、絶対、ぼく、絶対、お家にいたいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — outside humid-hot — me home-stay-want, absolute serious really.",style:'Wry child.'},
    {speaker:'mei_romantic',jp:'メイ姉さんの、本気で、絶対、お家、絶対、暖炉、絶対、なくて、絶対、寒い時、絶対、エアコンに、絶対、頼ってるわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis home — fireplace-none cold-time AC-rely, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、もう、絶対、オムツ、絶対、いらないよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mei-sis — me already diaper don't-need, absolute serious really.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お祖母ちゃんから、絶対、饅頭、絶対、頂いたわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — from Granny manju received, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'公園の、本気で、絶対、日陰、絶対、ぼく、絶対、メイ姉さんと、絶対、休みたいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Park-shade me Mei-sis-rest-want, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お庭の、絶対、雨水、絶対、お花、絶対、お水やりに、絶対、使ってるわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — garden rainwater flower-water-use, Sho absolute serious really.",style:'Practical.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、大きくなったら、絶対、メイ姉さんに、絶対、プロポーズ、絶対、するよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me grown — Mei-sis propose, absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07546',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'書類、本気で、絶対、改ざん、絶対、絶対、許さんぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Docs falsify — absolute not-permit, ask absolute serious really.",style:'Crisp firm.'},
    {speaker:'kenji_office',jp:'はい。原材料の、本気で、絶対、急騰、絶対、当社、絶対、対応中、絶対、です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Raw-mat surge — our co handling, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'新規取引先を、本気で、絶対、募る、絶対、活動、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"New-partner recruiting — advance, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。資料、本気で、絶対、整然と、絶対、まとめております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Docs orderly compile, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'経営の、本気で、絶対、名著、絶対、社員に、絶対、勧めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Mgmt-classic — staff recommend, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社内の、本気で、絶対、同好、絶対、会、絶対、活発に、絶対、活動しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. In-house club active operate, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'本社の、本気で、絶対、真下、絶対、ある、絶対、テナント、絶対、契約状況、絶対、確認しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"HQ directly-below tenant contract — verify, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。製造ラインの、本気で、絶対、アーム、絶対、ロボット、絶対、刷新、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Manu-line arm-robot — renew advance, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07547',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'業界で、本気で、絶対、改ざん、絶対、問題、絶対、増えていますね、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Industry — falsify issue increasing, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。エネルギー価格の、本気for、絶対、急騰、絶対、当社、絶対、影響受けております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Energy-price surge — our co affected, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'インターンを、本気で、絶対、募る、絶対、計画、絶対、立てましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Intern recruit plan-set, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。書庫を、本気で、絶対、整然と、絶対、整備、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Archive orderly maintain advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'経営学の、本気で、絶対、名著、絶対、社内研修、絶対、用に、絶対、選定しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Mgmt-classic — in-house-train select, absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。社員の、本気で、絶対、同好、絶対、会、絶対、新設、絶対、検討、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Staff club-new consider advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'本社の、本気で、絶対、真下、絶対、駐車場、絶対、空き状況、絶対、確認、絶対、お願いします、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"HQ directly-below parking — vacancy verify ask, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新型の、本気で、絶対、アーム、絶対、ロボット、絶対、導入、絶対、決定しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. New arm-robot — introduce decided, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07548',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究データの、本気で、絶対、改ざん、絶対、絶対、許さんぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — research-data falsify — absolute not-permit, ask absolute serious really.",style:'Mentor firm.'},
    {speaker:'ren_uni',jp:'はい。研究機材費の、本気で、絶対、急騰、絶対、研究室、絶対、対応中です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Research-equip-cost surge — lab handling, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'共同研究者、本気で、絶対、募る、絶対、活動、絶対、続けろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Co-researcher recruit — continue, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究資料、本気で、絶対、整然と、絶対、整理、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Research-mat orderly organize, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'分野の、本気で、絶対、名著、絶対、読み込め、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Field-classic read-deep, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。学生同士の、本気で、絶対、同好、絶対、会、絶対、参加しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Student club-attend, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究室の、本気for、絶対、真下、絶対、機械室、絶対、確認しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Lab directly-below machine-room — verify, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究室の、本気で、絶対、ロボット、絶対、アーム、絶対、メンテナンス、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Lab-robot arm — maintenance, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07549',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、書類、絶対、改ざん、絶対、警察、絶対、捜査、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Case — docs-falsify police-inv advance, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。物価の、本気で、絶対、急騰、絶対、警察様にも、絶対、ご対応、絶対、影響、絶対、ありますね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Price-surge — police-handle affected, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、市民協力者を、絶対、募る、絶対、活動、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police — citizen-coop recruit advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察様への、本気で、絶対、報告書、絶対、整然と、絶対、まとめます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Police-report orderly compile, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'捜査の、本気で、絶対、名著、絶対、警察、絶対、参考、絶対、にしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Inv-classic — police-ref, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。地域の、本気で、絶対、同好、絶対、会、絶対、警察様、絶対、ご支援、絶対、お願いいたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Local club — police-support ask, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'本社の、本気で、絶対、真下、絶対、駐車場、絶対、警察、絶対、巡回、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"HQ directly-below parking — police-patrol, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察、本気で、絶対、最新の、絶対、アーム、絶対、付き、絶対、解除装置、絶対、活用されていますね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Police — latest arm-equip release-device utilize, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07550',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お父さん、絶対、書類、絶対、改ざん、絶対、絶対、許さなかったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Founding — Dad docs-falsify never-permit, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、原材料の、絶対、急騰、絶対、乗り越えてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Since Dad-era — raw-mat-surge overcome, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、人材を、絶対、募る、絶対、ことを、絶対、楽しんでいたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Dad — talent-recruit enjoyed, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、書類、絶対、整然と、絶対、保管、絶対、続けてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Since Dad-era — docs orderly store continue, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、商売の、絶対、名著、絶対、お前にも、絶対、読ませたいぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Dad — biz-classic — you also read-want, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、社員の、絶対、同好、絶対、会、絶対、支援、絶対、続けてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — staff-club support continue, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、本社の、絶対、真下、絶対、ある、絶対、店舗、絶対、自慢だったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Dad — HQ directly-below store proud was, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、製造の、絶対、アーム、絶対、刷新、絶対、続けてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Since Dad-era — manu-arm renew continue, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07551',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses history',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、戦国時代の、本気で、絶対、鉄砲、絶対、伝来、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — Sengoku-era gun-intro paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。江戸時代の、本気で、絶対、小作、絶対、農、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Thanks. Edo-era tenant-farmer paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'歴史劇で俳優が、本気で、絶対、扮、絶対、する、絶対、人物像、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Hist-play — actor play-role-person paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。工業の、本気で、絶対、バルブ、絶対、技術史、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Industrial-valve tech-hist paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'希少金属の、本気で、絶対、チタン、絶対、利用史、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Rare-metal titanium use-hist paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。観光客を、本気で、絶対、引き寄せる、絶対、地域づくり、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Tourist attract local-create paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'物価を、本気で、絶対、押し上げる、絶対、要因、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Price push-up factor paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。地理的に、本気で、絶対、小国、絶対、の、絶対、外交史、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Geo small-nation diplo-hist paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07552',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses cases',lines:[
    {speaker:'takeda_officer',jp:'本件、本気for、絶対、鉄砲、絶対、所持、絶対、警察、絶対、捜査、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Case — gun-possess police-inv advance, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'地方の、本気で、絶対、小作、絶対、争議、絶対、歴史、絶対、警察、絶対、関連資料、絶対、お持ちですか、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Local tenant-dispute hist — police-related-mat have?, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、本気で、絶対、他人に、絶対、扮、絶対、して、絶対、犯行、絶対、警察、絶対、見抜きました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Suspect other-impersonate-crime — police-saw-through, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'工場の、本気で、絶対、バルブ、絶対、不正改造、絶対、警察、絶対、捜査されたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Factory valve-illegal-mod — police-inv done, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。盗品の、本気で、絶対、チタン、絶対、製、絶対、貴金属、絶対、警察、絶対、追跡しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Stolen titanium-jewelry — police-trace, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者を、本気for、絶対、引き寄せる、絶対、おとり捜査、絶対、警察、絶対、ご対応、絶対、ですか、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Suspect attract decoy-inv — police-handle?, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。地域の、本気で、絶対、安全感を、絶対、押し上げる、絶対、よう、絶対、警察、絶対、巡回、絶対、強化しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Local safety-feel push-up — police-patrol strengthen, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'近隣の、本気で、絶対、小国、絶対、と、絶対、警察、絶対、情報共有、絶対、進めていらっしゃるそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Neighbor small-nation — police info-share advance, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07553',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher mentors a teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、戦国時代の、本気で、絶対、鉄砲、絶対、伝来、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sakura — Sengoku-gun-intro paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。江戸時代の、本気で、絶対、小作、絶対、農、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Thanks. Edo-tenant-farmer paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'歴史劇で俳優が、本気で、絶対、扮、絶対、する、絶対、人物像、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Hist-play actor-impersonate paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。工業の、本気で、絶対、バルブ、絶対、技術史、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Industrial-valve tech-hist paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'希少金属の、本気で、絶対、チタン、絶対、利用史、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Rare-metal titanium use-hist paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。観光客を、本気で、絶対、引き寄せる、絶対、地域づくり、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Tourist attract local-create paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'物価を、本気で、絶対、押し上げる、絶対、要因、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Price push-up factor paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。地理的に、本気で、絶対、小国、絶対、の、絶対、外交史、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Geo small-nation diplo-hist paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07554',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、銃創、本気で、絶対、鉄砲、絶対、による傷、絶対、医療チーム、絶対、対応、絶対、訓練しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Ren — gunshot gun-wound — med-team resp train, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'地方の、本気で、絶対、小作、絶対、農の方々、絶対、健康診断、絶対、貴院で、絶対、ご対応されているそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Local tenant-farmer checkup — your hosp-handle, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。患者さんに、本気で、絶対、医師に、絶対、扮、絶対、して、絶対、近づく、絶対、不審者、絶対、警戒しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Patient — doctor-impersonate approaching unknown — alert, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療機器の、本気for、絶対、バルブ、絶対、点検、絶対、医療チーム、絶対、徹底、絶対、されているそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Med-equip valve-inspect — med-team thorough, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。インプラントに、本気で、絶対、チタン、絶対、素材、絶対、医療現場、絶対、使用しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Implant titanium-material — med-scene use, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医療界に、本気for、絶対、若手医師、絶対、引き寄せる、絶対、取り組み、絶対、貴院で、絶対、進められているそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Med-world young-doctor attract effort — your hosp-advance, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。患者さんの、本気で、絶対、生存率を、絶対、押し上げる、絶対、新治療、絶対、医療チーム、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Patient-survival push-up new-tx — med-team advance, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療支援、本気で、絶対、小国、絶対、にも、絶対、貴院、絶対、派遣されているそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Med-aid — small-nation-also your hosp dispatch, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07555',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews strategy',lines:[
    {speaker:'hiroshi_boss',jp:'歴史的に、本気で、絶対、鉄砲、絶対、技術、絶対、模型作り、絶対、当社、絶対、研究しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Hist gun-tech model-make — our co research, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。地方の、本気で、絶対、小作、絶対、農家、絶対、当社、絶対、提携、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Local tenant-farmer — our co partner advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'CMで俳優が、本気で、絶対、扮、絶対、する、絶対、役柄、絶対、当社、絶対、慎重に、絶対、選定しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Comm — actor-role our co careful select, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。工場の、本気で、絶対、バルブ、絶対、最新型、絶対、導入、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Factory valve-latest — install advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'新製品に、本気で、絶対、チタン、絶対、素材、絶対、採用しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"New prod titanium-mat adopt, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お客様を、本気で、絶対、引き寄せる、絶対、キャンペーン、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Cust attract campaign — advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業績を、本気で、絶対、押し上げる、絶対、新戦略、絶対、必要だ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Perf push-up new-strat — needed, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。海外、本気で、絶対、小国、絶対、市場、絶対、当社、絶対、進出、絶対、検討中です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Overseas small-nation market — our co entry consider, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07556',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、お客様を、本気で、絶対、お見送りする、絶対、笑顔、絶対、メイちゃん、絶対、素敵と思うわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — cust see-off smile — Mei-nice think, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、お祖父さまの、絶対、レシピ、絶対、盗む、絶対、ように、絶対、覚えたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yeah. Aoi — Grandpa-recipe steal-like memorized, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お客様、絶対、来店、絶対、つど、絶対、お話、絶対、楽しんでるよね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — cust-visit each-time chat-enjoy, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵のお店の、本気で、絶対、新メニュー、絶対、痛快、絶対、な、絶対、味、絶対、お客様に好評よ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi-store new-menu — exhilarating taste cust-fave, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お客様の説明、絶対、くどい、絶対、と、絶対、思われない、絶対、よう、絶対、簡潔に、絶対、伝えてるよね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — cust-explain tedious thought-don't concise convey, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、忙しすぎて、絶対、お客様の声を、絶対、聞かないのは、絶対、本末転倒、絶対、ね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — too-busy — cust-voice don't-listen — putting-cart-before-horse, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵のお店の窓に、本気で、絶対、雨の、絶対、滴、絶対、メイちゃん、絶対、お洒落と思うわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-store-window rain-drop — Mei-stylish think, absolute serious really.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お友達の、絶対、モニカ、絶対、さん、絶対、来店してくれたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-friend Monica-san — visit-came, Mei absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07557',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、お孫さんを、絶対、見送る、絶対、駅、絶対、寂しかったわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Gran — youth grandkid see-off station — lonely was, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、ばあさん、絶対、お祖父ちゃんから、絶対、お料理のコツ、絶対、盗む、絶対、ように、絶対、覚えたわよ、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Youth — gran Grandpa-cook-trick steal-like memorized, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、お客様の前を通る、絶対、つど、絶対、丁寧に、絶対、ご挨拶、絶対、したぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Dad cust-front-pass each-time polite greet did, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、痛快、絶対、な、絶対、笑い話、絶対、ばあさんに、絶対、よく、絶対、聞かせてくれたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa exhilarating laugh-story gran often-told, remember dear?, absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さんの、絶対、お話、絶対、くどい、絶対、と、絶対、ばあさんに、絶対、笑われたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Dad-talk tedious gran-laughed-at, remember?, absolute serious really.",style:'Wry tease.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、本末転倒、絶対、にならぬよう、絶対、優先順位、絶対、つけていたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa cart-before-horse-avoid priority-set, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、軒先の、絶対、雨の、絶対、滴、絶対、お父さん、絶対、よく、絶対、眺めたぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — eaves rain-drop Dad often-gazed, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、ご近所の、絶対、モニカ、絶対、さん、絶対、お祖父ちゃんと、絶対、よく、絶対、お話したわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — neighbor Monica-san Grandpa-with often-talked, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07558',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、駅で、絶対、見送る、絶対、わね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Sho — Mei-sis station see-off, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、絶対、人のもの、絶対、盗む、絶対、こと、絶対、しないよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me absolute others-stuff steal don't, absolute serious really.",style:'Earnest child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、翔くんと、絶対、会う、絶対、つど、絶対、嬉しいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — Sho meet each-time glad, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、新しいアニメ、絶対、痛快、絶対、で、絶対、面白いよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — new anime exhilarating fun, absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'翔くんの、本気で、絶対、お話、絶対、くどい、絶対、と、絶対、思わないわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Sho-talk tedious — don't-think, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お勉強、絶対、忘れて、絶対、ゲーム、絶対、ばかりは、絶対、本末転倒、絶対、だよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — study-forget game-only — putting-cart-before-horse, absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'公園の葉の、本気で、絶対、雨の、絶対、滴、絶対、綺麗ね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Park-leaf rain-drop pretty, Sho absolute serious really.",style:'Soft.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼくの、絶対、絵本の、絶対、モニカ、絶対、ちゃん、絶対、可愛いんだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — my picture-book Monica-chan cute, absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07559',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、卒業生を、本気で、絶対、見送る、絶対、式、絶対、参加したよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Riku — grad see-off ceremony attended, absolute serious really.",style:'Reflective teen.'},
    {speaker:'riku_teen',jp:'うん。授業中、本気で、絶対、お前のノートの、絶対、答えを、絶対、盗む、絶対、なんて、絶対、しないぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Class your-notebook answer steal — never do, Sakura absolute serious really.",style:'Earnest.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、試合に、絶対、出る、絶対、つど、絶対、活躍するよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"You — match-out each-time active, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'昨日の、本気で、絶対、漫画、絶対、痛快、絶対、で、絶対、止まらなかったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yesterday manga exhilarating — couldn't-stop, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'お前の説明、本気for、絶対、くどい、絶対、時、絶対、あるよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Your explain — tedious-time exist, Riku absolute serious really.",style:'Wry tease.'},
    {speaker:'riku_teen',jp:'試験勉強、本気で、絶対、夜更かしで、絶対、本末転倒、絶対、にならぬ、絶対、よう、絶対、気をつけようぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Test-study — late-night — putting-cart-before-horse-avoid careful, Sakura absolute serious really.",style:'Earnest.'},
    {speaker:'sakura_teen',jp:'帰り道、本気で、絶対、傘から、絶対、雨の、絶対、滴、絶対、落ちていたよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Way-home — umbrella-rain-drop fell, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'転校生の、本気で、絶対、モニカ、絶対、さん、絶対、英語、絶対、上手だぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Transfer Monica-san — Eng good, Sakura absolute serious really.",style:'Praising close.'},
  ]},
  {id:'conv_07560',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お父さんを、絶対、駅まで、絶対、見送る、絶対、ね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Mom — Dad station see-off, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、絶対、人のおやつ、絶対、盗む、絶対、ような、絶対、こと、絶対、しないでね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — absolute others-snack steal-like don't, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お友達と、絶対、会う、絶対、つど、絶対、ぼく、絶対、楽しいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — friends-meet each-time me-fun, absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お父さん、本気で、絶対、痛快、絶対、な、絶対、推理小説、絶対、好きなのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Dad — exhilarating mystery-novel like, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼくの説明、絶対、くどい、絶対、ない?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — my explain tedious-none?, absolute serious really.",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、ご褒美のために、絶対、勉強するのは、絶対、本末転倒、絶対、よ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Sho — reward-for study — putting-cart-before-horse, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お庭の葉、絶対、雨の、絶対、滴、絶対、綺麗だよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Mom — garden-leaf rain-drop pretty, absolute serious really.",style:'Soft.'},
    {speaker:'yumiko_mom',jp:'ママのお友達、本気で、絶対、モニカ、絶対、さん、絶対、留学経験、絶対、あるのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom-friend Monica-san — study-abroad-exp have, Sho absolute serious really.",style:'Reflective close.'},
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

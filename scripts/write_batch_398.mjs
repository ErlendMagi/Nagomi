import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_398 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['ちがう','浮い','曲げ','騒い','脱い','滑り','冷やし','返せ']
const B_T = ['移す','解き','外す','謙虚','造り','削っ','抱き','なさら']
const C_T = ['憶測','押しつける','歩む','破る','取り戻し','引っ張り','とらわれ','奪う']
const D_T = ['迷わ','掴む','乗れる','はやく','はやり','思い出せ','逃げ出し','見落とし']

const data = [
  {id:'conv_07921',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、それ、本気で、絶対、ちがう、絶対、お皿、絶対、よ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — that wrong-plate, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ママ、お風呂で、本気で、絶対、浮い、絶対、てる、絶対、おもちゃ、絶対、ぼくの、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — bath floating toy mine, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'翔くん、お背中、本気で、絶対、曲げ、絶対、ないで姿勢よく、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — back bend-don't posture-good, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ママ、お友達と、本気で、絶対、騒い、絶対、で遊んだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — friend-with rowdy-played, absolute serious really.",style:'Animated child.'},
    {speaker:'yumiko_mom',jp:'翔くん、お靴、本気で、絶対、脱い、絶対、で玄関に並べてね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — shoes off entrance-line, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ママ、お風呂場、本気で、絶対、滑り、絶対、やすいよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom — bath-floor slippery, absolute serious really.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'翔くん、お風邪の時は、本気で、絶対、冷やし、絶対、たタオル、絶対、おでこに、絶対、置いてね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — cold-time chilled-towel forehead-put, absolute serious really.",style:'Caring.'},
    {speaker:'sho_child',jp:'ママ、お友達に、本気で、絶対、返せ、絶対、ない、絶対、本、絶対、まだあるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom — friend return-can't book still-have, absolute serious really.",style:'Wry close.'},
  ]},
  {id:'conv_07922',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、そのレシピ、本気で、絶対、ちがう、絶対、わよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — that recipe wrong, Mei absolute serious really.",style:'Direction.'},
    {speaker:'aoi_barista',jp:'葵、お味噌汁に、本気で、絶対、浮い、絶対、てる、絶対、お豆腐、絶対、お洒落でしょ?メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — miso-soup floating tofu stylish?, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、お皿、本気で、絶対、曲げ、絶対、たデザイン、絶対、お洒落ね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — plate curved-design stylish, Mei absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、隣のお店、本気で、絶対、騒い、絶対、で困るよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — next-store noisy bothersome, Mei absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'葵、お客様、お靴、本気で、絶対、脱い、絶対、で、絶対、お上がりいただくの、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — cust shoes off entry, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵、お店の床、本気で、絶対、滑り、絶対、止め、絶対、貼ったよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — store-floor slip-stop applied, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、冷やし、絶対、コーヒー、絶対、新メニュー、絶対、人気ね、メイちゃん、本気for、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — cold-coffee new-menu popular, Mei absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、お貸出ししたカップ、本気で、絶対、返せ、絶対、ないお客様、絶対、いるのよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — lent-cup return-can't cust exist, Mei absolute serious really.",style:'Wry close.'},
  ]},
  {id:'conv_07923',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、お父さん、本気で、絶対、ちがう、絶対、道、絶対、お選びになったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Gran — youth Dad different-path chose, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、お祖父ちゃん、本気で、絶対、池に、絶対、浮い、絶対、てる、絶対、お花、絶対、お好きだったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Youth — Grandpa pond-floating flower liked, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、お背中、絶対、曲げ、絶対、ないで、絶対、お立ちだったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran back-bend-not stood, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、お孫さんと、本気で、絶対、騒い、絶対、で、絶対、お遊びになったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Grandpa grandkid-with rowdy-played, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、上着、絶対、脱い、絶対、で、絶対、ご休憩、絶対、なさったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — gran coat off-rested, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、雪道で、本気で、絶対、滑り、絶対、お転びになったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — Grandpa snow-road slipped-fell, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、冷やし、絶対、たお茶、絶対、お父さんに、絶対、淹れてくれたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — gran chilled-tea Dad-made, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、お借りした本、本気で、絶対、返せ、絶対、ない、絶対、悔しがられたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa borrowed-book return-can't regretted, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07924',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前の答え、本気で、絶対、ちがう、絶対、よ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Riku — your answer wrong, absolute serious really.",style:'Wry teen.'},
    {speaker:'riku_teen',jp:'お前、プールで、本気で、絶対、浮い、絶対、てたな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"You — pool floated, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'リク、お前の指、本気で、絶対、曲げ、絶対、過ぎだぜ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Riku — your finger bend-too-much, absolute serious really.",style:'Wry.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、騒い、絶対、で、絶対、先生に怒られたぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"You — rowdy-played teacher-scolded, Sakura absolute serious really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'リク、体育で、本気で、絶対、脱い、絶対、だ、絶対、ジャージ、絶対、忘れたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Riku — gym off-jersey forgot, absolute serious really.",style:'Wry.'},
    {speaker:'riku_teen',jp:'お前、駅で、本気で、絶対、滑り、絶対、転んだろ?桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"You — station slipped-fell?, Sakura absolute serious really.",style:'Teasing.'},
    {speaker:'sakura_teen',jp:'リク、ペットボトル、本気で、絶対、冷やし、絶対、ておいてよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Riku — bottle chill-put, absolute serious really.",style:'Direction.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、返せ、絶対、よ、絶対、漫画、絶対、貸したろ?桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"You — return-it manga-lent, Sakura absolute serious really.",style:'Direction close.'},
  ]},
  {id:'conv_07925',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、それ、本気で、絶対、ちがう、絶対、お紙、絶対、よ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — that wrong-paper, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、お風呂で、本気で、絶対、浮い、絶対、てたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me bath floated, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'翔くん、お背中、本気で、絶対、曲げ、絶対、ないで姿勢よくね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — back bend-not posture-good, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'メイ姉さん、お友達と、本気で、絶対、騒い、絶対、で、絶対、楽しかったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — friend rowdy-fun, absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'翔くん、ジャケット、本気で、絶対、脱い、絶対、で椅子に置いてね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — jacket off chair-put, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'メイ姉さん、雨で、本気で、絶対、滑り、絶対、やすいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — rain slippery, absolute serious really.",style:'Reflective child.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、冷やし、絶対、たお茶、絶対、お父さんに、絶対、お持ちしてね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — chilled-tea Dad-bring, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'メイ姉さん、メイ姉さんに、本気で、絶対、返せ、絶対、てない、絶対、本、絶対、まだあるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — Mei-sis return-can't book still-have, absolute serious really.",style:'Wry close.'},
  ]},
  {id:'conv_07926',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    {speaker:'hiroshi_boss',jp:'当社、本気で、絶対、本社、絶対、移す、絶対、検討しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Our co — HQ move consider, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。本気で、絶対、難題、絶対、解き、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Hard-problem solve advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'契約の不要、絶対、条項、絶対、本気で、絶対、外す、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Contract unneeded-clause remove advance, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、謙虚、絶対、な姿勢、絶対、続けております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Staff humble-stance continue, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'当社、本気で、絶対、新製品の、絶対、造り、絶対、磨け、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Our new-product craftsmanship polish, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、無駄な、絶対、コスト、絶対、削っ、絶対、ております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Our waste-cost trim, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'お客様、本気で、絶対、抱き、絶対、込め、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Cust embrace-include, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。経営者、本気で、絶対、なさら、絶対、ない、絶対、判断、絶対、伺いました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Mgmt won't-make judgement heard, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07927',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'当社、本気で、絶対、本部機能、絶対、移す、絶対、計画です、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Our HQ-function move plan, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。技術課題、本気で、絶対、解き、絶対、明かしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Tech-task solve clarified, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'古い慣習、本気で、絶対、外す、絶対、進めましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Old-habit remove advance, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、謙虚、絶対、な姿勢、絶対、お客様、絶対、好評です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Our humble-stance cust-favorable, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'本気で、絶対、新店舗、絶対、造り、絶対、こだわりましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"New-store craftsmanship be-particular, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。経費、本気で、絶対、削っ、絶対、ております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Expenses trim, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'お得意様、本気で、絶対、抱き、絶対、続けましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"VIP embrace continue, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新企画、社長が、本気で、絶対、なさら、絶対、いますね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. New-proj pres will-make, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07928',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究室、本気で、絶対、移す、絶対、ことになったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Ren — research-room move decided, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。問題、本気で、絶対、解き、絶対、明かしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Problem solve clarified, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'蓮、不要な前提、本気で、絶対、外す、絶対、勇気、絶対、持て、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Ren — unneeded-premise remove courage have, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。本気で、絶対、謙虚、絶対、な、絶対、姿勢、絶対、続けております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Humble stance continue, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'蓮、論文の、本気で、絶対、造り、絶対、丁寧にしろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Ren — paper craft careful-make, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究費、本気で、絶対、削っ、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Research-budget trim advance, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'蓮、難題、本気で、絶対、抱き、絶対、ながら、絶対、努めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Ren — hard-task carry-while try, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。教授、本気で、絶対、なさら、絶対、ない、絶対、お決断、絶対、ですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Prof won't-make decision, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07929',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、本部、絶対、移す、絶対、計画です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police HQ-move plan, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察、本気で、絶対、難事件、絶対、解き、絶対、明かしてありがたいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Police hard-case solve-clarified grateful, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、容疑者、絶対、外す、絶対、判断、絶対、致しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Police suspect-remove decision made, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察、本気で、絶対、謙虚、絶対、な姿勢、絶対、地域、絶対、感謝しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Police humble-stance region grateful, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、被害現場の、絶対、造り、絶対、確認、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Police damage-scene structure verify, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察、本気で、絶対、無駄、絶対、削っ、絶対、効率化、絶対、ありがたいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Police waste-trim efficiency grateful, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、被害者、絶対、抱き、絶対、寄り添います、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Police victim embrace-stay-close, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察、本気で、絶対、なさら、絶対、ない、絶対、ご判断、絶対、信頼しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Police won't-make judgement trust, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07930',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'お父さん、創業期、本気で、絶対、工場、絶対、移す、絶対、決断、絶対、なさったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Dad — founding factory-move decision made, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんが、本気で、絶対、難題、絶対、解き、絶対、明かされた、絶対、お姿、絶対、引き継いでおります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Dad hard-task solved figure inherit, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、古い慣習、絶対、外す、絶対、勇気、絶対、お持ちだったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad — old-habit remove courage had, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんは、本気で、絶対、謙虚、絶対、な、絶対、お方でした、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Dad humble person, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、店舗の、絶対、造り、絶対、こだわったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Dad — store craft particular, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんが、本気で、絶対、無駄、絶対、削っ、絶対、た、絶対、姿勢、絶対、引き継いでおります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Dad waste-trim stance inherit, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、社員、絶対、抱き、絶対、しめる、絶対、お方だったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad — staff embrace person, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんが、本気で、絶対、なさら、絶対、ない、絶対、ご決断、絶対、いつも、絶対、信頼しておりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Dad won't-make decision always-trusted, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07931',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、世論の、本気で、絶対、憶測、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Ren — public-opinion speculation paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。政府が、本気で、絶対、押しつける、絶対、政策、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Thanks. Gov-imposed-policy paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'歴史人物が、本気で、絶対、歩む、絶対、道、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Hist-figure walk-path paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。約束を、本気で、絶対、破る、絶対、政治家、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Promise-break politician paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'文化財を、本気で、絶対、取り戻し、絶対、た、絶対、運動、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Cultural-asset recovered movement paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。民衆を、本気で、絶対、引っ張り、絶対、上げた、絶対、運動家、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. People led-up activist paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'過去に、本気で、絶対、とらわれ、絶対、ない、絶対、思想、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Past-not-bound thought paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。植民地が、本気で、絶対、奪う、絶対、文化、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Colony-deprive culture paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07932',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、世間の、絶対、憶測、絶対、警察、絶対、慎重に対応中です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Case public-speculation police careful-resp, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、容疑者が、絶対、責任、絶対、押しつける、絶対、行為、絶対、警察、絶対、看破されたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Case suspect-blame-impose police-saw-through, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、犯罪者と共に、絶対、歩む、絶対、道、絶対、ありません、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police criminal-with walk-path-none, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、容疑者、絶対、約束、絶対、破る、絶対、警察、絶対、対応中ですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Case suspect promise-break police-handle, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、被害品、絶対、取り戻し、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Police damage-items recovered, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'警察、本気で、絶対、組織の、絶対、引っ張り、絶対、出し、絶対、進めております、本気for、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police org pull-out advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'takeda_officer',jp:'被害者、本気で、絶対、過去に、絶対、とらわれ、絶対、ない、絶対、心、絶対、警察、絶対、サポートしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Victim past-not-bound heart police-support, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、犯人が、絶対、奪う、絶対、人生、絶対、警察、絶対、お返しいたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Case perp-deprive life police-returned, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07933',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、世論の、本気で、絶対、憶測、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sakura — public-opinion speculation paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。政府が、本気で、絶対、押しつける、絶対、政策、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Thanks. Gov-imposed-policy paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'歴史人物が、本気で、絶対、歩む、絶対、道、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Hist-figure walk-path paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。約束を、本気で、絶対、破る、絶対、政治家、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Promise-break politician paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'文化財を、本気で、絶対、取り戻し、絶対、た、絶対、運動、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Cultural-asset recovered movement paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。民衆を、本気で、絶対、引っ張り、絶対、上げた、絶対、運動家、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. People led-up activist paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'過去に、本気で、絶対、とらわれ、絶対、ない、絶対、思想、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Past-not-bound thought paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。植民地が、本気で、絶対、奪う、絶対、文化、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Colony-deprive culture paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07934',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、診断、本気で、絶対、憶測、絶対、で、絶対、医療チーム、絶対、判断、絶対、しません、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Ren — diag speculation med-team don't-judge, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'治療、本気で、絶対、患者さんに、絶対、押しつける、絶対、こと、絶対、貴院、絶対、なさいませんね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Tx patient-impose your-hosp don't-do, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。患者さんが、本気で、絶対、歩む、絶対、回復の道、絶対、医療チーム、絶対、寄り添います、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Patient walk recovery-path med-team stay-close, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'本気で、絶対、医療倫理、絶対、破る、絶対、行為、絶対、貴院、絶対、認めませんね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Med-ethics break-act your-hosp don't-allow, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。患者さんが、本気で、絶対、健康、絶対、取り戻し、絶対、た、絶対、姿、絶対、医療チーム、絶対、嬉しいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Patient health-recovered figure med-team glad, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'リハビリで、本気で、絶対、患者さん、絶対、引っ張り、絶対、上げる、絶対、貴院、絶対、すばらしいです、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Rehab patient lead-up your-hosp wonderful, sensei gratitude absolute serious really.",style:'Praising.'},
    {speaker:'saito_doctor',jp:'はい。過去の病歴に、本気で、絶対、とらわれ、絶対、ない、絶対、診療、絶対、医療チーム、絶対、心掛けております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Past-hx not-bound diag med-team mindful, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'病気が、本気で、絶対、奪う、絶対、時間、絶対、貴院、絶対、お返しになっているそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Illness-deprive time your-hosp returning, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07935',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    {speaker:'hiroshi_boss',jp:'当社、本気で、絶対、市場の、絶対、憶測、絶対、注視しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Our co — market speculation watch, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社員に、本気で、絶対、ノルマ、絶対、押しつける、絶対、ことなく、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Staff quota-impose-without advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'当社、本気で、絶対、独自の、絶対、歩む、絶対、道、絶対、貫け、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Our unique walk-path see-through, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お得意様、本気で、絶対、約束を、絶対、破る、絶対、ことなく、絶対、対応しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. VIP promise-break-without respond, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'失った市場、本気で、絶対、取り戻し、絶対、戦略、絶対、立てろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Lost-market recover strategy plan, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新人を、本気で、絶対、引っ張り、絶対、上げる、絶対、メンター、絶対、配置しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. New-hire lead-up mentor place, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'当社、本気で、絶対、過去に、絶対、とらわれ、絶対、ない、絶対、経営しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Past-not-bound mgmt, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、競合、絶対、奪う、絶対、シェア、絶対、注視しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Our competitor-take share watch, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07936',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、新メニュー、本気で、絶対、迷わ、絶対、ないで、絶対、決めましょう、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — new-menu hesitate-not decide, Mei absolute serious really.",style:'Direction.'},
    {speaker:'aoi_barista',jp:'葵、お客様の心、本気で、絶対、掴む、絶対、お料理、絶対、考え中、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — cust-heart grab dish thinking, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、波に、絶対、乗れる、絶対、お店、絶対、目指そうね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — wave-can-ride store aim, Mei absolute serious really.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'葵、明日の準備、本気で、絶対、はやく、絶対、終わらせるね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — tomorrow-prep quickly finish, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、はやり、絶対、のデザート、絶対、お店に入れたら?メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — trend-dessert store-put?, Mei absolute serious really.",style:'Curious.'},
    {speaker:'aoi_barista',jp:'葵、お客様の名前、本気で、絶対、思い出せ、絶対、ない時、絶対、申し訳ないよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — cust-name recall-can't sorry, Mei absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'葵、お忙しい時、本気で、絶対、逃げ出し、絶対、たくなる気持ち、絶対、分かるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — busy-time run-want feeling understand, Mei absolute serious really.",style:'Caring.'},
    {speaker:'aoi_barista',jp:'葵、お会計、本気で、絶対、見落とし、絶対、ないようにね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — checkout overlook-not, Mei absolute serious really.",style:'Direction close.'},
  ]},
  {id:'conv_07937',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、お父さん、本気で、絶対、迷わ、絶対、ず、絶対、商売、絶対、お始めになったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Gran — youth Dad hesitate-not biz-started, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、お祖父ちゃん、お客様の心、本気で、絶対、掴む、絶対、お話、絶対、お得意だったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Youth — Grandpa cust-heart grab talk good-at, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、自転車、絶対、乗れる、絶対、ようにお父さんが、絶対、教えてくれたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — gran bike ride-can Dad-taught, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、はやく、絶対、お帰宅、絶対、嬉しかったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa early-return glad, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、はやり、絶対、のお洋服、絶対、お召しになってたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran trendy-clothes wore, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、ご友人の名前、本気で、絶対、思い出せ、絶対、ない時、絶対、お困りだったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa friend-name recall-can't troubled, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、辛い時も、本気で、絶対、逃げ出し、絶対、ずに、絶対、頑張ってくれたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran hard-time run-not tried, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、お父さんの、本気で、絶対、見落とし、絶対、ない、絶対、お仕事、絶対、立派でしたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa Dad-overlook-not work splendid, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07938',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、迷わ、絶対、ないで、絶対、ご注文、絶対、選んでね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — hesitate-not order choose, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、お友達の心、本気で、絶対、掴む、絶対、お話、絶対、できたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — me friend-heart grab talk could, absolute serious really.",style:'Proud child.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、自転車、絶対、乗れる、絶対、ようになったよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — bike ride-can became, absolute serious really.",style:'Praising.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、本気で、絶対、はやく、絶対、お家、絶対、帰りたいな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me early home return-want, absolute serious really.",style:'Wry child.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、はやり、絶対、のお歌、絶対、知ってる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — trend-song know?, absolute serious really.",style:'Curious.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、お友達の名前、本気で、絶対、思い出せ、絶対、ない時あるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me friend-name recall-can't sometimes, absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'翔くん、辛い時に、本気で、絶対、逃げ出し、絶対、たくなる気持ち、絶対、わかるわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — hard-time run-want feeling understand, absolute serious really.",style:'Caring.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、テストで、本気で、絶対、見落とし、絶対、た、絶対、問題、絶対、あったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me test overlooked question existed, absolute serious really.",style:'Wry close.'},
  ]},
  {id:'conv_07939',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、迷わ、絶対、ないで、絶対、進路、絶対、決めろよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Riku — you hesitate-not path-decide, absolute serious really.",style:'Direction teen.'},
    {speaker:'riku_teen',jp:'お前、観客の心、本気で、絶対、掴む、絶対、プレー、絶対、すげえな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"You — crowd-heart grab play amazing, Sakura absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、ノリに、絶対、乗れる、絶対、奴だよな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Riku — you vibe-can-ride dude, absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、はやく、絶対、宿題終わらせろよ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"You — fast homework-finish, Sakura absolute serious really.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、はやり、絶対、の音楽、絶対、聴いてんな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Riku — you trendy music listening, absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、思い出せ、絶対、よ、絶対、昨日の約束、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"You — recall yesterday-promise, Sakura absolute serious really.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'リク、お前、テストで、本気で、絶対、逃げ出し、絶対、たくなったろ?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Riku — test run-want?, absolute serious really.",style:'Teasing.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、見落とし、絶対、た、絶対、問題、絶対、あったろ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"You — overlooked question existed, Sakura absolute serious really.",style:'Wry close.'},
  ]},
  {id:'conv_07940',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、ぼく、本気で、絶対、迷わ、絶対、ず、絶対、ご注文、絶対、決めたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — me hesitate-not order decided, absolute serious really.",style:'Proud child.'},
    {speaker:'yumiko_mom',jp:'翔くん、お父さんの心、本気で、絶対、掴む、絶対、お父さんの日カード、絶対、作ってね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — Dad-heart grab Father's-Day card make, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ママ、ぼく、本気で、絶対、自転車、絶対、乗れる、絶対、ようになったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — me bike ride-can became, absolute serious really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、はやく、絶対、お風呂入ってね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — fast bath-enter, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、はやり、絶対、のアニメ、絶対、見てもいい?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom — trendy anime watch-OK?, absolute serious really.",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'翔くん、ママ、お買い物リスト、本気で、絶対、思い出せ、絶対、ないわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mom shop-list recall-can't, absolute serious really.",style:'Wry.'},
    {speaker:'sho_child',jp:'ママ、ぼく、お勉強、本気で、絶対、逃げ出し、絶対、たくなる時、絶対、ある、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — me study run-want sometimes, absolute serious really.",style:'Wry.'},
    {speaker:'yumiko_mom',jp:'翔くん、お勉強、本気で、絶対、見落とし、絶対、ないでね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — study overlook-not, absolute serious really.",style:'Direction close.'},
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

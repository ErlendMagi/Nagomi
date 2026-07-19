import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_367 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['キュウリ','とうもろこし','にっこり','ガソリンスタンド','ホームセンター','クラスメート','うっすら','気さく']
const B_T = ['お手数','公費','机上','納める','コーポレート','コメンテーター','盛り込む','旅先']
const C_T = ['病状','横綱','法王','君臨','演目','直訳','装い','床下']
const D_T = ['途切れ','有り難い','延長線','掌','讃える','気がつけ','肴','本郷']

const data = [
  {id:'conv_07301',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、お庭の、絶対、キュウリ、絶対、今日、絶対、収穫したよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Sho — garden cucumber today harvested, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、とうもろこし、絶対、ぼく、絶対、今日、絶対、食べたいな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom — corn me today eat-want, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'お祖母ちゃん、本気で、絶対、にっこり、絶対、笑ってたわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Granny — sweet-smile, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'お父さん、本気で、絶対、ガソリンスタンド、絶対、寄って、絶対、来るって、絶対、言ってたよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad — gas-station stop come said, Mom absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'帰り道、本気で、絶対、ホームセンター、絶対、ママ、絶対、寄りたいわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Way-home — home-ctr Mom stop-want, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'クラスメート、本気で、絶対、お家、絶対、ぼくの、絶対、近所に、絶対、引っ越してきたよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Classmate-home — me near moved, Mom absolute serious really.",style:'Excited.'},
    {speaker:'yumiko_mom',jp:'外、本気で、絶対、雪が、絶対、うっすら、絶対、積もってきたわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Outside — snow lightly piled, Sho absolute serious really.",style:'Alert.'},
    {speaker:'sho_child',jp:'お祖父ちゃん、本気で、絶対、気さくな、絶対、人だよね、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Grandpa — friendly person, Mom absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07302',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、夏メニューの、本気で、絶対、キュウリ、絶対、サンドイッチ、絶対、メイちゃん、絶対、好きよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — summer cucumber-sandwich Mei-like, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。地元の、本気で、絶対、とうもろこし、絶対、葵、絶対、仕入れたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yeah. Local corn Aoi-sourced, Mei absolute serious really.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お客様、絶対、にっこり、絶対、迎えてあげてるよね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — cust sweet-smile greeting, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'メイちゃん、本気で、絶対、駅前の、絶対、ガソリンスタンド、絶対、新しくなったって、知ってる?葵で、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei — station gas-station new know?, Aoi absolute serious really.",style:'Curious.'},
    {speaker:'mei_romantic',jp:'葵のお店の備品、本気で、絶対、ホームセンター、絶対、メイちゃん、絶対、見に行こうかな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi-store gear — home-ctr Mei see-go?, absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'昔のクラスメート、本気で、絶対、葵のお店、絶対、来てくれたわよ、メイちゃん、本気で、絶対、嬉しい、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Old classmate — Aoi-store came, Mei glad absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵のお店、本気で、絶対、朝、絶対、うっすら、絶対、明るくなる時間、絶対、素敵よね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi-store — morn light-brighten time nice, Mei absolute serious really.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'葵のお客様の中に、本気で、絶対、気さくな、絶対、ご常連、絶対、いらっしゃるのよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi-cust — friendly regular exist, Mei absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07303',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさんの、絶対、キュウリ、絶対、漬物、絶対、お父さん、絶対、大好きだったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — gran cucumber-pickle Dad-loved, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。畑で、本気で、絶対、とうもろこし、絶対、お父さん、絶対、たくさん、絶対、育てたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Field — corn Dad many-grew, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'孫が、本気で、絶対、にっこり、絶対、お父さんに、絶対、笑ってくれたぞ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Grandkid — sweet-smile Dad-laughed, gran remember?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'昔、本気で、絶対、町に、絶対、ガソリンスタンド、絶対、できた時、絶対、賑わったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Old — town gas-station made-time crowded, remember dear?, absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ホームセンター、絶対、なかったから、絶対、何でも、絶対、自作したぞ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Youth — home-ctr none, anything self-made, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃の、本気で、絶対、お祖父ちゃんの、絶対、クラスメート、絶対、皆、絶対、お元気かしらね、あなた、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa classmate all-well?, dear absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'朝、本気で、絶対、うっすら、絶対、霜が、絶対、降りていたぞ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Morn — lightly frost-fell, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お祖父ちゃん、本気で、絶対、若い頃から、絶対、気さくな、絶対、性格だったわよ、あなた、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Grandpa — since-youth friendly nature, dear absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07304',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、給食で、本気で、絶対、キュウリ、絶対、サラダ、絶対、出たよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Riku — lunch cucumber-salad came, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。文化祭で、本気で、絶対、とうもろこし、絶対、焼くんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yeah. Fest — corn grill, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、にっこり、絶対、写真、絶対、撮ろうよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"You — sweet-smile photo take?, Riku absolute serious really.",style:'Eager.'},
    {speaker:'riku_teen',jp:'お父さん、本気で、絶対、ガソリンスタンド、絶対、自転車で、絶対、寄ったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Dad — gas-station bike-stopped, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'部活の備品、本気で、絶対、ホームセンター、絶対、お母さんと、絶対、買いに行ったよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Club-gear — home-ctr Mom-buy-went, Riku absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'新しい、本気で、絶対、クラスメート、絶対、優しいんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"New classmate — kind, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'試験前、本気で、絶対、うっすら、絶対、緊張、絶対、するよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Pre-test — lightly nervous, Riku absolute serious really.",style:'Wry.'},
    {speaker:'riku_teen',jp:'担任の先生、本気で、絶対、気さくで、絶対、相談、絶対、しやすいんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Homeroom-sensei — friendly consult-easy, Sakura absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07305',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、キュウリ、絶対、サンドイッチ、絶対、作ってあげるね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis cucumber-sandwich make-for-you, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、とうもろこし、絶対、ぼくの、絶対、お気に入りなんだ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — corn my-fave, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、にっこり、絶対、笑顔、絶対、可愛いわよ、メイ姉さん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — sweet-smile-face cute, Mei-sis absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ガソリンスタンド、絶対、車、絶対、洗えるところもあるよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — gas-station car-wash-also exist, absolute serious really.",style:'Curious.'},
    {speaker:'mei_romantic',jp:'メイ姉さんと、本気で、絶対、ホームセンター、絶対、行きたい?翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis-with — home-ctr go-want?, Sho absolute serious really.",style:'Eager.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼくの、絶対、クラスメート、絶対、紹介、絶対、したいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — my classmate intro want, absolute serious really.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'公園の桜、本気で、絶対、うっすら、絶対、色づいてきたわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Park-cherry — lightly tint, Sho absolute serious really.",style:'Soft.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、気さくで、絶対、お話、絶対、しやすいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — friendly chat-easy, absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07306',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'各部署に、本気で、絶対、お手数、絶対、おかけしているが、絶対、頼んだぞ、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Each-dept — trouble-give but ask, absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。研修の公費、本気で、絶対、申請、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Training-public-fund — file advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'机上、本気で、絶対、議論だけでは、絶対、駄目だ、絶対、現場へ、絶対、行け、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Desk-talk only no-good, scene go, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。税金、本気で、絶対、適正に、絶対、納める、絶対、よう、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Tax — proper pay thorough, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'当社の、本気で、絶対、コーポレート、絶対、ガバナンス、絶対、強化しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Our corp-gov — strengthen, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。業界の、本気で、絶対、コメンテーター、絶対、当社の取り組み、絶対、評価、絶対、いただいております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Industry-commentator — our effort eval-given, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'新製品に、本気で、絶対、社員の意見、絶対、盛り込む、絶対、よう、絶対、お願いするぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"New-prod — staff-opin include ask, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。出張、本気で、絶対、旅先での、絶対、安全、絶対、確保、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Biz-trip — trip-dest safety ensure thorough, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07307',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'お忙しいところ、本気で、絶対、お手数、絶対、お掛けしますが、絶対、ご協力、絶対、お願いします、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Busy-time — trouble-give but coop ask, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。研修費は、本気で、絶対、公費、絶対、申請、絶対、可能と、絶対、確認いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Train-fee public-fund file-poss verified, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'机上の、本気で、絶対、計算、絶対、現場とは、絶対、ずれること、絶対、ありますね、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Desk-calc — scene-misalign exist, absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、法人税、絶対、適正に、絶対、納める、絶対、よう、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Our corp-tax proper-pay thorough, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'コーポレート、本気で、絶対、ロゴ、絶対、刷新、絶対、検討、絶対、しましょうか、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Corp-logo — renew consider?, absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。テレビの、本気で、絶対、コメンテーター、絶対、当社の取材、絶対、来ていただきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. TV-commentator — our co coverage came, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'新規プロジェクト、本気で、絶対、各部署の意見、絶対、盛り込むこと、絶対、進めましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"New proj — each-dept opin include advance, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。海外出張、本気で、絶対、旅先、絶対、宿泊、絶対、手配、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Overseas — trip-dest stay arrange advance, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07308',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究室に、本気で、絶対、お手数、絶対、おかけするが、絶対、頼むぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Ren — lab trouble-give but ask, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。研究費の、本気で、絶対、公費、絶対、申請、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Research-fund public-fund file advance, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'机上の、本気で、絶対、理論、絶対、だけでなく、絶対、実地でも、絶対、検証しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Desk-theory — also-practical verify, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究室、本気で、絶対、奨学金、絶対、納める、絶対、よう、絶対、手続きしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Lab — scholar-fund pay proc done, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'大学の、本気で、絶対、コーポレート、絶対、研究、絶対、参考にしろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Uni corp-research ref, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。当該分野の、本気で、絶対、コメンテーター、絶対、教授に、絶対、お会いしてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Field commentator-prof met, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'論文に、本気で、絶対、最新の考え、絶対、盛り込む、絶対、よう、絶対、頼むぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Paper — latest-thought include ask, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。学会、本気で、絶対、旅先、絶対、教授と、絶対、議論、絶対、進めてまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Conf — trip-dest prof-discuss advance, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07309',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察より、本気で、絶対、お手数、絶対、お掛けしますが、絶対、ご協力、絶対、お願いいたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Police — trouble-give but coop ask, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察への、本気で、絶対、公費、絶対、協力、絶対、当社、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. To-police public-fund coop our co, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'机上、本気で、絶対、データ、絶対、警察、絶対、現場、絶対、合わせて、絶対、判断、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Desk-data — police-scene match judge, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。罰金、本気で、絶対、適正に、絶対、納める、絶対、よう、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Fine — proper pay thorough, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'各社の、本気で、絶対、コーポレート、絶対、コンプライアンス、絶対、警察、絶対、注視しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Each-co corp-comp — police-watching, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。テレビの、本気で、絶対、コメンテーター、絶対、警察、絶対、ご意見、絶対、伺っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. TV-commentator — police-opin heard, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察への、本気で、絶対、報告書、絶対、適切な情報、絶対、盛り込む、絶対、よう、絶対、お願いいたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Police-report — appropriate-info include ask, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察出張、本気で、絶対、旅先、絶対、宿泊先、絶対、当社、絶対、ご紹介、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Police-trip — trip-dest stay our co intro, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07310',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お父さん、絶対、お客様に、絶対、お手数、絶対、お掛けすること、絶対、心苦しかったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Founding — Dad cust trouble-give heart-pain was, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、公費、絶対、誠実に、絶対、運用、絶対、してまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Since Dad-era public-fund sincere-mgmt, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さんの代、本気で、絶対、机上、絶対、よりも、絶対、足で稼ぐこと、絶対、大切にしたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Dad-era — desk than-feet earn cherish-did, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、税金、絶対、適正に、絶対、納める、絶対、よう、絶対、努めてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Yes. Since Dad-era — tax-pay thorough strive, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さんの代、本気で、絶対、当社の、絶対、コーポレート、絶対、デザイン、絶対、こだわったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Dad-era — our corp-design particular, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。当社の、本気で、絶対、コメンテーター、絶対、お父さんの精神、絶対、伝えてくださっております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Our commentator — Dad-spirit conveying, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'創業時、本気で、絶対、お父さんの想い、絶対、お前の経営にも、絶対、盛り込む、絶対、よう、絶対、頼んだぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Founding — Dad-thought your-mgmt include ask, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの、本気で、絶対、旅先での、絶対、出会い、絶対、ばあさんから、絶対、伺っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Dad trip-dest encounters — gran-heard, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07311',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor briefs an intern',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、患者さんの、本気で、絶対、病状、絶対、ご家族に、絶対、ご説明、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — patient-cond family-explained, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'相撲の、本気で、絶対、横綱、絶対、健康診断、絶対、医療チームで、絶対、お引き受け、絶対、するそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sumo-yokozuna — checkup med-team take, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。海外の、本気で、絶対、法王、絶対、来日時の、絶対、医療体制、絶対、準備、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Overseas pope — JP-visit med-prep, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医療界に、本気で、絶対、君臨、絶対、される、絶対、教授、絶対、先生の、絶対、ご恩師ですよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Med-world reign prof — sensei-mentor, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。今月の、本気で、絶対、医学会の、絶対、演目、絶対、新治療法、絶対、ですよ、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. This-month med-conf prog — new tx, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'海外の論文、本気で、絶対、直訳、絶対、ですと、絶対、ニュアンス、絶対、伝わりにくい、絶対、ですよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Overseas-paper — literal-trans nuance-hard, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。医療現場の、本気で、絶対、装い、絶対、清潔感、絶対、大切ですよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Med-scene attire — clean cherish, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'昔の家屋、本気で、絶対、床下、絶対、感染症、絶対、原因、絶対、になっていた、絶対、こと、絶対、聞いたことありますね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Old house — under-floor infection-cause was heard, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07312',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses cultural research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、戦時、本気で、絶対、人の病状、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Ren — wartime person-cond paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。江戸時代の、本気で、絶対、横綱、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Thanks. Edo-yokozuna — paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'中世の、本気で、絶対、法王、絶対、政治、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Medieval pope-politics — paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。古代の、本気で、絶対、王朝が、絶対、君臨、絶対、した時代、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Yes. Ancient-dyn reign era paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'伝統芸能の、本気で、絶対、演目、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Trad-arts program — paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。古典の、本気で、絶対、直訳、絶対、と、絶対、意訳、絶対、比較、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Classic — literal-trans vs free-trans compare paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'当時の貴族の、本気で、絶対、装い、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Era noble-attire — paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。古民家の、本気で、絶対、床下、絶対、構造、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Old-house under-floor struct — paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07313',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses cultural-property cases',lines:[
    {speaker:'takeda_officer',jp:'被害者の、本気で、絶対、病状、絶対、警察、絶対、慎重に、絶対、確認、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Victim-cond — police careful verify, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'相撲の、本気で、絶対、横綱、絶対、関連の、絶対、警備、絶対、警察、絶対、ご担当、絶対、ですか、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sumo-yokozuna sec — police-in-charge?, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。海外の、本気で、絶対、法王、絶対、来日警備、絶対、警察、絶対、準備、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Overseas-pope JP-visit-sec — police-prep, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'地下組織、本気で、絶対、君臨、絶対、している、絶対、首領、絶対、警察、絶対、捜査対象ですか、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Underworld — reigning boss police-target?, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。劇場の、本気で、絶対、演目、絶対、警察、絶対、警備、絶対、ご相談、絶対、伺っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Theater-prog — police-sec consult heard, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'海外の容疑者、本気で、絶対、供述、絶対、直訳、絶対、で、絶対、解釈に、絶対、注意が必要ですよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Overseas-suspect — statement literal-trans interpret-careful, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。容疑者の、本気で、絶対、装い、絶対、警察、絶対、目撃情報、絶対、集めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Suspect-attire — police witness-info gather, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'古民家の、本気で、絶対、床下、絶対、隠し物、絶対、警察、絶対、捜索、絶対、対象、絶対、になることありますね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Old-house under-floor — hidden-thing police-search target sometimes, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07314',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corporate response',lines:[
    {speaker:'hiroshi_boss',jp:'社員の、本気で、絶対、病状、絶対、配慮、絶対、徹底しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Staff-cond — care thorough, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。相撲の、本気で、絶対、横綱、絶対、当社の、絶対、広告、絶対、ご出演、絶対、いただいております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Sumo-yokozuna — our ad-appearance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'海外の、本気で、絶対、法王、絶対、来日時、絶対、当社、絶対、敬意を表せ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Overseas-pope JP-visit — our co respect, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。業界に、本気で、絶対、君臨、絶対、する、絶対、競合、絶対、当社、絶対、注視しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Industry-reign rival — our watch, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'劇場貸切の、本気で、絶対、演目、絶対、社内行事で、絶対、検討しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Theater-rent prog — in-house event consider, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。海外契約書、本気で、絶対、直訳、絶対、ではなく、絶対、意訳、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Overseas-contract — not-literal but free-trans advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'社員の、本気で、絶対、装い、絶対、業務にふさわしく、絶対、整えろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Staff-attire — biz-suited adjust, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。倉庫の、本気で、絶対、床下、絶対、点検、絶対、定期、絶対、実施しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Warehouse-floor — inspect periodic done, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07315',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher mentors a teen on cultural research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、戦時、本気で、絶対、市民の病状、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sakura — wartime civ-cond paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。江戸時代の、本気で、絶対、横綱、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Thanks. Edo-yokozuna paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'中世の、本気で、絶対、法王、絶対、政治、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Medieval pope-politics paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。古代の、本気で、絶対、王朝が、絶対、君臨、絶対、した時代、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Yes. Ancient-dyn reign era paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'伝統芸能の、本気で、絶対、演目、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Trad-arts program paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。古典の、本気で、絶対、直訳、絶対、と、絶対、意訳、絶対、比較、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Classic — literal-trans vs free compare paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'当時の貴族の、本気で、絶対、装い、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Era noble-attire paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。古民家の、本気で、絶対、床下、絶対、構造、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Old-house under-floor-struct paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07316',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、お話が、本気で、絶対、途切れた、絶対、時、絶対、メイちゃん、絶対、もう一度、絶対、教えてほしいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Aoi — talk cut-off Mei again-tell-want, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。お客様の、本気で、絶対、有り難い、絶対、お言葉、絶対、葵、絶対、励みになっているよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Cust-grateful words Aoi-encouraged, Mei absolute serious really.",style:'Tender.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、駅の、絶対、延長線、絶対、上に、絶対、新しい、絶対、お店、絶対、出すって、聞いたわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — station-ext-line on new-store out heard, absolute serious really.",style:'Curious.'},
    {speaker:'aoi_barista',jp:'お客様の、本気で、絶対、掌、絶対、メイちゃん、絶対、葵、絶対、温かさを、絶対、感じるわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Cust-palm — Mei Aoi warmth-feel, absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お客様を、絶対、讃える、絶対、姿勢、絶対、素敵よ、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — cust-praise stance nice, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'気がつけば、本気で、絶対、葵、絶対、お店、絶対、五年、絶対、続けてるわ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Realize — Aoi store 5yr-continue, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お酒の肴、絶対、サイドメニュー、絶対、メイちゃん、絶対、頼みたいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — sake-snack side-menu Mei order-want, absolute serious really.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、本郷の、絶対、お祖父さまのお墓、絶対、お参り、絶対、行ってきたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — Hongo Grandpa-grave visit-came, Mei absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07317',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、お父さんと、絶対、お話が、絶対、途切れた、絶対、こと、絶対、気まずかったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Gran — youth Dad-talk cut-off awkward was, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。お孫さんからの、本気で、絶対、有り難い、絶対、お手紙、絶対、お祖父ちゃん、絶対、宝物よね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Grandkid-grateful letter — Grandpa-treasure, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、家業の、絶対、延長線、絶対、上に、絶対、お父さん、絶対、今を、絶対、考えていたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Youth — family-biz ext-line on Dad-now-thought, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お祖父ちゃんの、本気で、絶対、掌、絶対、しわが、絶対、増えたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Grandpa-palm — wrinkles-increased, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、職人さんを、絶対、讃える、絶対、お話、絶対、お父さん、絶対、よく、絶対、していたぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Youth — artisan praise story Dad-often-did, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'気がつけば、本気で、絶対、私たち、絶対、五十年、絶対、夫婦、絶対、続けてきたわよね、あなた、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Realize — us 50yr-couple continued, dear absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お酒の肴、絶対、ばあさんが、絶対、用意してくれたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — sake-snack gran-prepared, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お父さんと、本気で、絶対、本郷の、絶対、町、絶対、よく、絶対、歩いたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Dad-with — Hongo town often-walked, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07318',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、お話の、絶対、途切れた、絶対、ところから、絶対、もう一度、絶対、話そうね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — Mei-sis talk cut-off-from again-talk, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、有り難い、絶対、と、絶対、ぼく、絶対、思っているよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — grateful me thinking, absolute serious really.",style:'Earnest child.'},
    {speaker:'mei_romantic',jp:'メイ姉さんの夢、本気で、絶対、お店の、絶対、延長線、絶対、上に、絶対、見えてきたわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis dream — store-ext-line on visible, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、掌、絶対、温かいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — palm warm, absolute serious really.",style:'Tender.'},
    {speaker:'mei_romantic',jp:'翔くんの努力、本気で、絶対、メイ姉さん、絶対、讃える、絶対、よ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Sho-effort — Mei-sis praise, absolute serious really.",style:'Praising.'},
    {speaker:'sho_child',jp:'気がつけば、本気で、絶対、ぼく、絶対、もうすぐ、絶対、お兄ちゃん、絶対、なるんだよ、メイ姉さん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Realize — me soon big-bro become, Mei-sis absolute serious really.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お酒の肴、絶対、お料理、絶対、教わったよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — sake-snack cook learned, Sho absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼくたち、絶対、本郷の、絶対、博物館、絶対、行きたいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — us Hongo-museum go-want, absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07319',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、昨日、本気で、絶対、お話が、絶対、途切れた、絶対、ところから、絶対、続きを、絶対、聞きたいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Riku — yesterday talk cut-off-from continue hear-want, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。お前の応援、本気で、絶対、俺、絶対、有り難い、絶対、と、絶対、思ってるぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yeah. Your-cheer me grateful thinking, Sakura absolute serious really.",style:'Earnest.'},
    {speaker:'sakura_teen',jp:'今日の練習、本気で、絶対、いつもの、絶対、延長線、絶対、上だよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Today-prac — usual ext-line on, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お前の、本気で、絶対、掌、絶対、ペンだこ、絶対、あるよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Your palm — pen-callus exists, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お前の、本気で、絶対、努力、絶対、私、絶対、讃える、絶対、よ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Your effort — me praise, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'気がつけば、本気で、絶対、もう、絶対、卒業、絶対、近いんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Realize — already grad close, Sakura absolute serious really.",style:'Wistful.'},
    {speaker:'sakura_teen',jp:'お祖父ちゃん、本気で、絶対、お酒の肴、絶対、家で、絶対、用意してたよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Grandpa — sake-snack home-prepared, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'修学旅行、本気で、絶対、本郷の、絶対、東大、絶対、見学、絶対、入ってるぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"School-trip — Hongo Todai visit in, Sakura absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07320',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お話が、絶対、途切れた、絶対、ところから、絶対、続けてよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — talk cut-off-from continue, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃんからの、本気で、絶対、有り難い、絶対、お言葉、絶対、ママ、絶対、励みよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"From Grandpa — grateful words Mom-encouraged, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ぼくの夢、本気で、絶対、お父さんの仕事の、絶対、延長線、絶対、上にあるかも、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"My-dream — Dad-job ext-line on maybe, absolute serious really.",style:'Reflective child.'},
    {speaker:'yumiko_mom',jp:'翔くんの、本気で、絶対、掌、絶対、お父さんに、絶対、似てきたわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Sho-palm — Dad-resemble-became, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、ママの、絶対、お料理、絶対、讃える、絶対、よ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Me — Mom-cook praise, absolute serious really.",style:'Praising.'},
    {speaker:'yumiko_mom',jp:'気がつけば、本気で、絶対、翔くん、絶対、もう、絶対、大きくなったわよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Realize — Sho already big-became, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お酒の肴、絶対、お父さんに、絶対、作ってあげてね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — sake-snack Dad-make, absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'今度、本気で、絶対、本郷の、絶対、お祖母さまのお墓、絶対、お参り、絶対、行きましょうね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Next — Hongo Granny-grave visit go, Sho absolute serious really.",style:'Tender close.'},
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

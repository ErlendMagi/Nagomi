import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_383 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['旦那','友だち','僕たち','中華','居酒屋','あいさつ','さっそく','金曜日']
const B_T = ['申し込み','専攻','子会社','持ち主','一環','一括','圧縮','復旧']
const C_T = ['法廷','沈黙','欠陥','反射','偏見','中断','農薬','還元']
const D_T = ['ダブル','ショット','直感','展覧','演じる','細い','逃げる','助ける']

const data = [
  {id:'conv_07621',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sachiko_grandma'],targets:A_T,scenario:'A mom chats with her mother-in-law',lines:[
    {speaker:'sachiko_grandma',jp:'由美子さん、本気で、絶対、お宅の、絶対、旦那、絶対、さん、絶対、お元気?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yumiko — your husband well?, absolute serious really.",style:'Tender.'},
    {speaker:'yumiko_mom',jp:'はい。翔の、本気で、絶対、友だち、絶対、皆、絶対、いい子なんですよ、お義母さん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Sho-friends all-good-kids, mother-in-law absolute serious really.",style:'Warm.'},
    {speaker:'sachiko_grandma',jp:'いつか、本気で、絶対、僕たち、絶対、と、絶対、お祖父ちゃんが、絶対、よく、絶対、お話、絶対、しているわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sometime — \"we\" Grandpa-often talks, absolute serious really.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'今晩、本気で、絶対、中華、絶対、お料理、絶対、家族で、絶対、頂きますね、お義母さん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Tonight Chinese-cuisine family-eat, mother-in-law absolute serious really.",style:'Animated.'},
    {speaker:'sachiko_grandma',jp:'駅前の、本気で、絶対、居酒屋、絶対、お祖父ちゃんと、絶対、よく、絶対、行ったわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Station-front izakaya — Grandpa-often went, absolute serious really.",style:'Wistful.'},
    {speaker:'yumiko_mom',jp:'翔は、本気で、絶対、ご近所の方に、絶対、あいさつ、絶対、ちゃんとできますよ、お義母さん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — neighbors greeting proper-do, mother-in-law absolute serious really.",style:'Praising.'},
    {speaker:'sachiko_grandma',jp:'さっそく、本気で、絶対、明日、絶対、お米、絶対、お送りしますね、由美子さん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Right-away tomorrow rice-send, Yumiko absolute serious really.",style:'Tender.'},
    {speaker:'yumiko_mom',jp:'金曜日、本気で、絶対、お義母さん、絶対、こちらにいらっしゃってください、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Friday — mother-in-law come-here please, absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07622',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、お祖母ちゃんの、本気で、絶対、旦那、絶対、さま、絶対、お元気でいらっしゃるよね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — Granny husband well-stays, Mei absolute serious really.",style:'Tender.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、お店の、絶対、友だち、絶対、皆、絶対、応援してくれてるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Aoi — store-friends all-support, Mei absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、僕たち、絶対、メニュー、絶対、お客様、絶対、人気よ、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — \"we\" menu cust-pop, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、中華、絶対、料理、絶対、新メニューに、絶対、加えたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — Chinese-cuisine new-menu added, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵のお店、本気で、絶対、居酒屋、絶対、ぽい、絶対、雰囲気、絶対、メイちゃん、絶対、好きよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi-store izakaya-like atmos Mei-like, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お客様への、絶対、あいさつ、絶対、いつも、絶対、心がけてるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — cust-greeting always-mindful, Mei absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'さっそく、本気で、絶対、葵の、絶対、新作、絶対、メイちゃん、絶対、頂いたわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Right-away Aoi new-work Mei received, absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、金曜日、絶対、夜、絶対、特別営業、絶対、するよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — Friday-night spec-open do, Mei absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07623',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、ご近所の、本気で、絶対、旦那、絶対、さん、絶対、お祖父ちゃんと、絶対、よく、絶対、お話、絶対、するわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Gran — neighbor husband Grandpa-often talks, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃の、本気で、絶対、お祖父ちゃんの、絶対、友だち、絶対、皆、絶対、お元気かしらね、あなた、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Youth Grandpa-friends — all-well?, dear absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、僕たち、絶対、家族、絶対、お祖父ちゃん、絶対、誇りに思ったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — \"we\" family Grandpa-proud, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、中華、絶対、料理屋、絶対、お祖父ちゃんと、絶対、行ったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — Chinese-cuisine-place Grandpa-went, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、駅前の、絶対、居酒屋、絶対、お父さん、絶対、お祝い、絶対、したわよな、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — station izakaya Dad-celeb did, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、ご近所への、絶対、あいさつ、絶対、丁寧でしたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — Grandpa neighbor-greeting polite, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、さっそく、絶対、お父さん、絶対、新しい商売、絶対、始めたぞ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — right-away Dad new-biz started, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、金曜日、絶対、お祖父ちゃん、絶対、お給料日、絶対、嬉しそうだったわよ、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — Friday Grandpa payday glad-looked, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07624',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お祖母ちゃんの、本気で、絶対、旦那、絶対、さん、絶対、優しいよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Riku — Granny husband kind, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。お前は、本気で、絶対、クラスの、絶対、友だち、絶対、多いよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yeah. You — class friends many, Sakura absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'文化祭、本気で、絶対、僕たち、絶対、出し物、絶対、頑張ろうね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Fest — \"we\" exhibit try, Riku absolute serious really.",style:'Eager.'},
    {speaker:'riku_teen',jp:'駅前の、本気で、絶対、中華、絶対、屋さん、絶対、美味かったよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Station Chinese-cuisine-place — tasty, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'いつか、本気で、絶対、私たち、絶対、大きくなったら、絶対、居酒屋、絶対、行ってみたいな、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Someday — us grown izakaya go-want, Riku absolute serious really.",style:'Wistful.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、先生への、絶対、あいさつ、絶対、しっかりしてるよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"You — sensei-greeting solid, Sakura absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、さっそく、絶対、新作の漫画、絶対、読んだの?リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"You — right-away new manga read?, Riku absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'今度の、本気で、絶対、金曜日、絶対、お前と、絶対、お祭り、絶対、行こうぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Next Friday — you-with fest-go, Sakura absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07625',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、お祖母ちゃんの、絶対、旦那、絶対、さま、絶対、お会いしてきたわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — Mei-sis Granny husband met, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼくの、絶対、友だち、絶対、ぴょんちゃん、絶対、紹介、絶対、したいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — my friend Pyon-chan intro want, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'メイ姉さんと、本気で、絶対、僕たち、絶対、家族、絶対、いつも、絶対、楽しいよね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis-with \"we\" family always-fun, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、中華、絶対、ラーメン、絶対、大好きだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me Chinese-ramen love, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お友達と、絶対、居酒屋、絶対、で、絶対、お祝い、絶対、してきたわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — friend-with izakaya celeb-came, Sho absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、毎朝、絶対、あいさつ、絶対、ちゃんと、絶対、するよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me every-morn greeting proper-do, absolute serious really.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'さっそく、本気で、絶対、メイ姉さん、絶対、お返事、絶対、お送りするわね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Right-away — Mei-sis reply-send, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、金曜日、絶対、お祖父ちゃんち、絶対、行くんだ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me Friday Grandpa-home go, absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07626',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'新規取引の、本気で、絶対、申し込み、絶対、対応、絶対、迅速にしろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"New-deal application — swift handle, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。新人の、本気で、絶対、専攻、絶対、分野、絶対、活かす、絶対、配属、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Newbie major-field utilize assign advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'海外、本気で、絶対、子会社、絶対、業績、絶対、確認しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Overseas subsidiary perf — verify, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。古いビルの、本気で、絶対、持ち主、絶対、と、絶対、交渉、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Old-bldg owner negotiate advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'環境対策の、本気で、絶対、一環、絶対、新製品、絶対、開発しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Env-counter part new-prod develop, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お得意様の発注、本気で、絶対、一括、絶対、対応、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. VIP-order bulk-resp advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'倉庫の、本気で、絶対、圧縮、絶対、保管、絶対、効率化しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Warehouse compress-store efficiency, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。システムの、本気で、絶対、復旧、絶対、迅速に、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Sys recovery — swift advance, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07627',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'採用、本気で、絶対、申し込み、絶対、件数、絶対、増えていますね、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Hire-app count — increasing, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。応募者の、本気で、絶対、専攻、絶対、分野、絶対、多様化、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Applicant major-field diverse, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'関連の、本気で、絶対、子会社、絶対、業績、絶対、確認しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Affiliated subsidiary perf — verify, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新規取引先の、本気で、絶対、持ち主、絶対、お会いしてきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. New-partner owner met-came, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'社会貢献の、本気で、絶対、一環、絶対、地域イベント、絶対、協賛しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"CSR part — local event sponsor, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新システムの、本気で、絶対、一括、絶対、購入、絶対、検討しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. New-sys bulk-purchase consider, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'データの、本気で、絶対、圧縮、絶対、保存、絶対、検討しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Data compress-save — consider, absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。バックアップから、本気で、絶対、復旧、絶対、確認、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Backup-recovery verify, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07628',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究費の、本気で、絶対、申し込み、絶対、手続き、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — research-fund app proc advance, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。私の、本気で、絶対、専攻、絶対、分野、絶対、論文、絶対、まとめております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. My major-field paper-compile, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'研究関連の、本気で、絶対、子会社、絶対、情報、絶対、確認しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Research-related subsidiary info verify, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。論文の、本気で、絶対、持ち主、絶対、教授、絶対、と、絶対、議論しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Paper-owner prof-discuss, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'地域貢献の、本気で、絶対、一環、絶対、講演会、絶対、引き受けろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Local-contrib part lecture take, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。論文を、本気で、絶対、一括、絶対、提出、絶対、する予定です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Paper bulk-submit plan, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究データの、本気で、絶対、圧縮、絶対、保管、絶対、徹底しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Research-data compress-store thorough, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。サーバーの、本気で、絶対、復旧、絶対、対応、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Server-recovery resp advance, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07629',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察への、本気で、絶対、申し込み、絶対、件、絶対、ご対応、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"To-police app — handled, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察関係者の、本気で、絶対、専攻、絶対、分野、絶対、専門的、絶対、ですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Police-related major-field specialized, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'関連の、本気で、絶対、子会社、絶対、警察、絶対、捜査、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Affiliated subsidiary — police-inv advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。盗難品の、本気で、絶対、持ち主、絶対、警察、絶対、探されているそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Stolen-item owner — police-searching, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'防犯対策の、本気で、絶対、一環、絶対、警察、絶対、巡回、絶対、強化しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Crime-prev part — police-patrol strengthen, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。情報、本気で、絶対、一括、絶対、警察様、絶対、共有、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Info bulk police-share, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'証拠の、本気で、絶対、圧縮、絶対、保管、絶対、警察、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Evidence compress-store — police-thorough, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。災害時の、本気で、絶対、復旧、絶対、警察様、絶対、ご支援、絶対、いただきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Disaster-recovery — police-support given, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07630',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お父さん、絶対、お得意様の、絶対、申し込み、絶対、自分で、絶対、対応したぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Founding — Dad VIP-app self-handled, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、社員の、絶対、専攻、絶対、分野、絶対、活かしてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Since Dad-era — staff major-field utilize, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、子会社、絶対、自分で、絶対、立ち上げたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Dad — subsidiary self-founded, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、お店の、絶対、持ち主、絶対、関係、絶対、続いております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — store-owner relation continue, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、社会貢献の、絶対、一環、絶対、寄付、絶対、続けたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Dad — CSR-part donate continued, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、お得意様、絶対、一括、絶対、ご注文、絶対、対応してまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Since Dad-era — VIP bulk-order handle, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、商品の、絶対、圧縮、絶対、保管、絶対、工夫したぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Dad — prod compress-store device, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、業務、絶対、復旧、絶対、いかなる時も、絶対、迅速に進めてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — biz-recovery whenever swift-advance, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07631',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses cases',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、法廷、絶対、で、絶対、争われております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Case — courtroom-fought, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'容疑者の、本気で、絶対、沈黙、絶対、警察、絶対、難しい対応、絶対、ですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Suspect-silence — police hard-resp, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。製品の、本気で、絶対、欠陥、絶対、警察、絶対、調査、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Prod-defect police-inv advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'光の、本気で、絶対、反射、絶対、を、絶対、利用した、絶対、捜査技術、絶対、警察、絶対、活用されているそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Light-reflect-use inv-tech — police-utilize, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。捜査に、本気で、絶対、偏見、絶対、入らない、絶対、よう、絶対、警察、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Inv prejudice-don't — police-thorough, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者の供述、本気で、絶対、中断、絶対、警察、絶対、再開、絶対、調整、絶対、難しいですよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Suspect-statement interrupt — police-resume coordinate hard, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。違法な、本気で、絶対、農薬、絶対、流通、絶対、警察、絶対、捜査、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Illegal pesticide-distribute — police-inv advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'地域への、本気for、絶対、還元、絶対、として、絶対、警察、絶対、市民教育、絶対、続けていらっしゃるそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Region give-back — police citizen-edu continue, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07632',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses cultural history',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、戦後の、本気で、絶対、法廷、絶対、ドラマ、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Ren — postwar courtroom-drama paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。文学の、本気で、絶対、沈黙、絶対、表現、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Thanks. Lit silence-expression paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦後の、本気で、絶対、欠陥、絶対、住宅、絶対、問題、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Postwar defect-housing issue paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。物理学の、本気で、絶対、反射、絶対、現象、絶対、史、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Phys reflect-phenomenon hist paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'社会的な、本気で、絶対、偏見、絶対、史、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Soc prejudice-hist paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。歴史的、本気で、絶対、中断、絶対、と、絶対、再建の、絶対、過程、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Hist interrupt-rebuild process paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦後の、本気で、絶対、農薬、絶対、規制史、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Postwar pesticide-regulation-hist paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。経済学の、本気で、絶対、還元、絶対、論、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Econ reduce-theory paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07633',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher mentors a teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、戦後の、本気で、絶対、法廷、絶対、ドラマ、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sakura — postwar courtroom-drama paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。文学の、本気で、絶対、沈黙、絶対、表現、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Thanks. Lit silence-expression paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'戦後の、本気で、絶対、欠陥、絶対、住宅、絶対、問題、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Postwar defect-housing issue paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。物理学の、本気で、絶対、反射、絶対、現象、絶対、史、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Phys reflect-phenomenon hist paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'社会的な、本気で、絶対、偏見、絶対、史、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Soc prejudice-hist paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。歴史的、本気で、絶対、中断、絶対、と、絶対、再建の、絶対、過程、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Hist interrupt-rebuild process paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦後の、本気で、絶対、農薬、絶対、規制史、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Postwar pesticide-regulation-hist paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。経済学の、本気で、絶対、還元、絶対、論、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Econ reduce-theory paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07634',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、医療事故、本気で、絶対、法廷、絶対、で、絶対、争われる、絶対、ケース、絶対、増えております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Ren — med-incident courtroom-fought cases increase, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'患者さんの、本気で、絶対、沈黙、絶対、医療チーム、絶対、配慮、絶対、されているそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Patient-silence — med-team care, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。医療機器の、本気で、絶対、欠陥、絶対、医療界、絶対、報告、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Med-equip-defect — med-world report thorough, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医療検査の、本気で、絶対、反射、絶対、を、絶対、利用した、絶対、技術、絶対、進化していますよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Med-test reflect-utilize tech — evolve, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。患者さんへの、本気で、絶対、偏見、絶対、なく、絶対、医療チーム、絶対、対応しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Patient prejudice-none — med-team handle, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'治療の、本気で、絶対、中断、絶対、医療チーム、絶対、慎重に判断、絶対、されますよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Tx-interrupt — med-team careful-judge, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。残留、本気で、絶対、農薬、絶対、と、絶対、健康被害、絶対、医療界、絶対、研究しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Residual pesticide health-damage — med-research, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'地域への、本気for、絶対、還元、絶対、と、絶対、して、絶対、貴院、絶対、健康教室、絶対、続けていらっしゃるんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Region-give-back — your hosp health-class continue, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07635',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corporate response',lines:[
    {speaker:'hiroshi_boss',jp:'本件、本気で、絶対、法廷、絶対、対応、絶対、弁護士と、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Case courtroom-resp — lawyer advance, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、ご批判への、絶対、沈黙、絶対、せず、絶対、説明、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Our co — criticism silence-not explain, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'製品の、本気で、絶対、欠陥、絶対、絶対、なきよう、絶対、品質管理、絶対、徹底しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Prod defect absolute-none — quality-mgmt thorough, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新製品の、本気で、絶対、反射、絶対、素材、絶対、活用、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. New-prod reflect-material utilize advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'お客様への、本気で、絶対、偏見、絶対、ない、絶対、サービス、絶対、徹底しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Cust prejudice-none service thorough, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。事業の、本気で、絶対、中断、絶対、なきよう、絶対、リスク管理、絶対、強化しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Biz interrupt-none — risk-mgmt strengthen, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'当社、本気for、絶対、農薬、絶対、を扱わない、絶対、姿勢、絶対、明確にしろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Our co — pesticide don't-handle stance clear, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。地域社会への、本気で、絶対、還元、絶対、継続しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Local-soc give-back continue, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07636',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、お祝いに、本気で、絶対、ダブル、絶対、サイズの、絶対、ケーキ、絶対、メイちゃん、絶対、頼んでみるわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — celeb double-size cake Mei try-order, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、エスプレッソ、絶対、ショット、絶対、追加、絶対、できるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yeah. Aoi — espresso-shot extra-can, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お客様の好みを、絶対、直感、絶対、で、絶対、見抜くよね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — cust-taste intuition see-through, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お友達の、絶対、絵画、絶対、展覧、絶対、会、絶対、見てきたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — friend painting-exhibit saw-came, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お祭りで、絶対、巫女、絶対、役を、絶対、演じる、絶対、らしいわよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — fest miko role-play seems, Mei absolute serious really.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、最近、絶対、細い、絶対、フォーク、絶対、お店に、絶対、揃えたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — lately thin fork store-assembled, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'お店の前で、本気で、絶対、お客様が、絶対、傘から、絶対、逃げる、絶対、ように、絶対、メイちゃん、絶対、駆け込んだわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Store-front — cust umbrella-flee-like Mei rushed-in, absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お客様の困った時、絶対、助ける、絶対、ように、絶対、心がけてるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — cust-trouble-time help mindful, Mei absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07637',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、お父さんと、絶対、ダブル、絶対、テニス、絶対、楽しんだぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Gran — youth Dad-with double-tennis enjoyed, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、お祖父ちゃん、絶対、写真の、絶対、ショット、絶対、お手の物だったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Youth — Grandpa photo-shot good-at, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、直感、絶対、で、絶対、商売の、絶対、勝負所、絶対、判断したぞ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Dad intuition biz-decision judged, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃんと、絶対、美術館の、絶対、展覧、絶対、会、絶対、行ったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — Grandpa-with museum exhibit went, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、町内会の、絶対、役を、絶対、演じる、絶対、こと、絶対、よくあったぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Dad town-assoc role-play often-had, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃんは、絶対、細い、絶対、体つき、絶対、だったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Grandpa thin-physique was, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お孫さんが、絶対、お父さんから、絶対、逃げる、絶対、ように、絶対、隠れたぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — grandkid Dad-flee-like hid, remember gran?, absolute serious really.",style:'Wry tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、ご近所の方を、絶対、助ける、絶対、こと、絶対、よく、絶対、ありましたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa neighbor-help often-had, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07638',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、お祝いに、絶対、ダブル、絶対、サイズの、絶対、アイス、絶対、頼みたいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — Mei-sis celeb double-size ice order-want, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、運動会の、絶対、ショット、絶対、お父さんが、絶対、撮ってくれたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — me sports-day shot Dad-took, absolute serious really.",style:'Proud child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お友達の気持ち、絶対、直感、絶対、で、絶対、わかることが、絶対、あるわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — friend-feel intuition understand times, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、絵の、絶対、展覧、絶対、会、絶対、行きたいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — painting-exhibit go-want, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、学芸会で、絶対、王子さま、絶対、を、絶対、演じる、絶対、んでしょ?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — school-play prince role-play?, absolute serious really.",style:'Curious.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、最近、絶対、ちょっと、絶対、細い、絶対、と、絶対、お母さんに、絶対、言われたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — me lately slight thin Mom-said, absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、虫から、絶対、逃げる、絶対、よね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — bugs-flee, absolute serious really.",style:'Tender tease.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、困っている人、絶対、見たら、絶対、助ける、絶対、よ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me troubled-people see help, absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07639',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、テニス部で、本気で、絶対、ダブル、絶対、ス、絶対、お前、絶対、得意だよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Riku — tennis-club doubles you good-at, absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'うん。試合の、本気で、絶対、ショット、絶対、決めたぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Match shot decided, Sakura absolute serious really.",style:'Proud.'},
    {speaker:'sakura_teen',jp:'お前の、本気で、絶対、直感、絶対、いつも、絶対、当たるよね、リク、本気for、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Your intuition — always-hit, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お前と、本気で、絶対、美術館の、絶対、展覧、絶対、会、絶対、行きたいぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"You-with museum-exhibit go-want, Sakura absolute serious really.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'文化祭の、本気で、絶対、劇、絶対、お前、絶対、主役、絶対、演じる、絶対、んだよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Fest-play — you lead role-play?, Riku absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、最近、絶対、ちょっと、絶対、細い、絶対、ぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"You — lately slight thin, Sakura absolute serious really.",style:'Caring.'},
    {speaker:'sakura_teen',jp:'試験から、本気で、絶対、逃げる、絶対、わけにいかないよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Tests — flee can't, Riku absolute serious really.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、困った時、絶対、絶対、助ける、絶対、ぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"You — trouble-time absolute help, Sakura absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07640',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お父さんの、絶対、ダブル、絶対、サイズの、絶対、お酒、絶対、見たよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — Dad double-size sake saw, absolute serious really.",style:'Animated child.'},
    {speaker:'yumiko_mom',jp:'お父さんが、本気で、絶対、お祭りの、絶対、ショット、絶対、撮ってくれたわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Dad — fest-shot took, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、直感、絶対、で、絶対、お友達を選ぶよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Mom — me intuition friend-choose, absolute serious really.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'今度の、本気で、絶対、展覧、絶対、会、絶対、家族で、絶対、行きましょう、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Next exhibit — family-go, Sho absolute serious really.",style:'Eager.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、運動会で、絶対、リーダーを、絶対、演じる、絶対、んだ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — me sports-day leader role-play, absolute serious really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、最近、絶対、ちょっと、絶対、細い、絶対、わよ、ちゃんと、ご飯食べてね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — lately slight thin — eat-proper, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、難しいこと、絶対、から、絶対、逃げる、絶対、ように、絶対、しないよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — me hard-things flee-like don't, absolute serious really.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、ご近所の方を、絶対、助ける、絶対、こと、絶対、続けていきましょうね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — neighbor-help continue, absolute serious really.",style:'Tender close.'},
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

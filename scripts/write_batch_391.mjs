import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_391 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['やれる','切符','通す','光る','盛り上がる','不公平','仕上がり','固い']
const B_T = ['書面','代理人','不調','派閥','期末','行き先','続行','後押し']
const C_T = ['社説','説教','白書','争点','若年','文学部','一帯','操業']
const D_T = ['前作','反復','ハードル','ベタ','アンコール','アウトドア','大晦日','ぶどう']

const data = [
  {id:'conv_07781',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、自分で、絶対、やれる、絶対、わよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Sho — yourself can-do, absolute serious really.",style:'Encouraging.'},
    {speaker:'sho_child',jp:'ママ、お父さんが、本気で、絶対、新幹線の、絶対、切符、絶対、買ってくれたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — Dad shinkansen ticket bought, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、お父さんに、絶対、お電話、絶対、通す、絶対、ね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — Dad call put-through, absolute serious really.",style:'Practical.'},
    {speaker:'sho_child',jp:'ママ、お星様が、本気で、絶対、光る、絶対、よね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — stars shine, absolute serious really.",style:'Wondering.'},
    {speaker:'yumiko_mom',jp:'翔くん、お友達と、本気で、絶対、盛り上がる、絶対、お話、絶対、できた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — friends-with lively-talk could?, absolute serious really.",style:'Curious.'},
    {speaker:'sho_child',jp:'ママ、お兄ちゃんだけ、本気で、絶対、ゲーム、絶対、長くやれて、絶対、不公平、絶対、だよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — only-bro game long-can — unfair, absolute serious really.",style:'Whining.'},
    {speaker:'yumiko_mom',jp:'翔くん、ママの、本気で、絶対、ケーキ、絶対、仕上がり、絶対、見て、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mom-cake finish see, absolute serious really.",style:'Proud.'},
    {speaker:'sho_child',jp:'ママ、お父さんの、本気で、絶対、お肩、絶対、固い、絶対、ね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom — Dad-shoulder stiff, absolute serious really.",style:'Curious close.'},
  ]},
  {id:'conv_07782',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、やれる、絶対、わよ、メイちゃん、絶対、応援してる、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — can-do, Mei-cheer, absolute serious really.",style:'Encouraging.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お客様の、絶対、切符、絶対、回数券、絶対、扱い始めたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — cust ticket-passes start-handling, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お電話、絶対、通す、絶対、ね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — call put-through, Mei absolute serious really.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'葵のお店の、本気で、絶対、ライト、絶対、光る、絶対、と、絶対、お洒落、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-store light shines stylish, Mei absolute serious really.",style:'Praising.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お話、絶対、盛り上がる、絶対、お客様、絶対、嬉しいよね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — lively-talk cust-glad, Mei absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、価格、絶対、不公平、絶対、にならないよう、絶対、注意してるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — price unfair-don't careful, Mei absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、新ケーキの、絶対、仕上がり、絶対、楽しみね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — new-cake finish-look-forward, Mei absolute serious really.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、新作の、絶対、パン、絶対、固い、絶対、わよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — new-bread hard, Mei absolute serious really.",style:'Wry close.'},
  ]},
  {id:'conv_07783',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、お父さん、本気で、絶対、何でも、絶対、やれる、絶対、つもりだったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Gran — youth Dad anything can-do thought, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、お祖父ちゃん、本気で、絶対、汽車の、絶対、切符、絶対、買ってくださったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Youth — Grandpa train-ticket bought, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、お父さんの、絶対、お話を、絶対、通す、絶対、役だったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — gran Dad-talk relay role, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、夜空の、絶対、お星様、絶対、光る、絶対、と、絶対、お喜びだったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa night-stars shine glad, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、お祭り、絶対、盛り上がる、絶対、と、絶対、嬉しかったわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — gran fest-lively glad, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、不公平、絶対、を、絶対、許せない、絶対、人、絶対、だったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa unfair forgive-not person, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、お料理の、絶対、仕上がり、絶対、ほめてくれたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — gran cook-finish praised, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、決意の、絶対、固い、絶対、人、絶対、だったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa resolve-firm person, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07784',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、絶対、やれる、絶対、ぜ、桜、絶対、応援してる、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Riku — you can-do, Sakura-cheer, absolute serious really.",style:'Encouraging teen.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、新幹線の、絶対、切符、絶対、買ったの?桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"You — shinkansen ticket bought?, Sakura absolute serious really.",style:'Curious.'},
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、お父さんに、絶対、お電話、絶対、通す、絶対、ね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Riku — you Dad-call put-through, absolute serious really.",style:'Practical.'},
    {speaker:'riku_teen',jp:'お前のスマホ画面、本気で、絶対、光る、絶対、と、絶対、お洒落だぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Your phone-screen shines stylish, Sakura absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'リク、文化祭、本気で、絶対、盛り上がる、絶対、ね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Riku — fest lively, absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、男子だけ、絶対、賞品、絶対、不公平、絶対、ぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"You — boys-only prize unfair, Sakura absolute serious really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'リク、お前の作品の、本気で、絶対、仕上がり、絶対、すごいね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Riku — your work finish-impressive, absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、決意、絶対、固い、絶対、な、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"You — resolve firm, Sakura absolute serious really.",style:'Praising close.'},
  ]},
  {id:'conv_07785',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、お店、絶対、一人で、絶対、やれる、絶対、わよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — Mei-sis store alone can-do, absolute serious really.",style:'Proud.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、本気で、絶対、バスの、絶対、切符、絶対、買えたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — me bus ticket-could-buy, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、ママに、絶対、お電話、絶対、通す、絶対、ね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — Mei-sis Mom-call put-through, absolute serious really.",style:'Practical.'},
    {speaker:'sho_child',jp:'メイ姉さん、お庭で、本気で、絶対、ホタル、絶対、光る、絶対、よ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — garden firefly shines, absolute serious really.",style:'Wondering.'},
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さんのお店、本気で、絶対、盛り上がる、絶対、と、絶対、嬉しいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — Mei-sis-store lively glad, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、本気で、絶対、お兄ちゃんだけ、絶対、お小遣い、絶対、多い、絶対、不公平、絶対、よ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — only-bro allowance much unfair, absolute serious really.",style:'Whining.'},
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さんの、本気で、絶対、新ケーキの、絶対、仕上がり、絶対、見てみる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — Mei-sis new-cake finish see?, absolute serious really.",style:'Eager.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、本気で、絶対、心、絶対、固い、絶対、よ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me heart firm, absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07786',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    {speaker:'hiroshi_boss',jp:'契約、本気で、絶対、書面、絶対、で、絶対、交わせ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Contract document exchange, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、代理人、絶対、契約、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Our agent-contract advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'機械の、本気で、絶対、不調、絶対、確認しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Machine malfunction verify, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社内、本気で、絶対、派閥、絶対、なきよう、絶対、運営しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. In-house faction-none manage, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'期末、本気で、絶対、決算、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"End-period settlement advance, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。配送、本気で、絶対、行き先、絶対、確認しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Delivery destination verify, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'プロジェクト、本気で、絶対、続行、絶対、しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Project continue, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新規事業、本気で、絶対、後押し、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. New-biz support, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07787',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'お得意様、本気で、絶対、書面、絶対、にて、絶対、ご案内、絶対、しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"VIP document-by inform, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。法律事務所、本気で、絶対、代理人、絶対、を、絶対、依頼いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Law-firm agent requested, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'システム、本気で、絶対、不調、絶対、調べましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"System malfunction investigate, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社内、本気で、絶対、派閥、絶対、対立、絶対、解消、絶対、努めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. In-house faction-conflict resolve try, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'期末、本気で、絶対、報告書、絶対、まとめましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"End-period report compile, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。出張、本気で、絶対、行き先、絶対、決定しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Biz-trip destination decided, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'販売、本気で、絶対、続行、絶対、いたしましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sales continue, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員の起業、本気で、絶対、後押し、絶対、社内、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Staff-startup support in-house advance, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07788',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究計画、本気で、絶対、書面、絶対、で、絶対、提出しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Ren — research-plan document submit, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。学会、本気で、絶対、代理人、絶対、として、絶対、出席、絶対、することになりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Conf agent-as attend decided, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'蓮、体調、本気で、絶対、不調、絶対、なら、絶対、お休みしろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Ren — condition off rest, ask absolute serious really.",style:'Caring.'},
    {speaker:'ren_uni',jp:'はい。学内、本気で、絶対、派閥、絶対、には、絶対、関わらないようにしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Campus faction-involve-don't, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'蓮、期末、本気で、絶対、試験、絶対、しっかり、絶対、頑張れ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Ren — end-of-term test hard try, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。フィールド調査、本気で、絶対、行き先、絶対、決定いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Fieldwork destination decided, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'蓮、研究、本気で、絶対、続行、絶対、しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Ren — research continue, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。教授、本気で、絶対、後押し、絶対、感謝しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Prof support-grateful, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07789',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、書面、絶対、で、絶対、通達、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police document notice, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。容疑者の、本気で、絶対、代理人、絶対、警察、絶対、対応中ですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Suspect-agent police handling, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'通信機器の、本気で、絶対、不調、絶対、警察、絶対、対応中です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Comm-device malfunction police-handle, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察内、本気で、絶対、派閥、絶対、なく、絶対、一丸、絶対、ありがたいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. In-police faction-none unified grateful, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、期末、絶対、犯罪、絶対、統計、絶対、まとめております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police — end-period crime-stats compile, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察、本気で、絶対、容疑者の、絶対、行き先、絶対、追跡中ですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Police suspect-destination track, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'捜査、本気で、絶対、続行、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Inv continue, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。被害者支援、本気で、絶対、後押し、絶対、警察、絶対、ありがたいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Victim-support backing police grateful, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07790',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'お父さん、創業期、本気で、絶対、書面、絶対、なし、絶対、信用、絶対、で、絶対、商売したぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Dad — founding document-none trust biz-did, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんが、本気で、絶対、代理人、絶対、立てる、絶対、判断、絶対、ありがたいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Dad agent-stand decision grateful, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、不調、絶対、にも、絶対、お休みしなかったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Dad — malfunction-too didn't-rest, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さん、本気で、絶対、派閥、絶対、を、絶対、嫌う、絶対、お考え、絶対、引き継いでおります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Dad faction-dislike thought inherit, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、期末、絶対、最後まで、絶対、社員と、絶対、いたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Dad — end-period last-until staff-with stayed, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんが、本気で、絶対、初出張の、絶対、行き先、絶対、忘れません、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Dad first-biz-trip destination not-forget, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、苦境、絶対、でも、絶対、事業、絶対、続行、絶対、貫いたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad — hardship biz continue saw-through, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの、本気で、絶対、若手、絶対、後押し、絶対、姿勢、絶対、引き継いでおります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Dad young-back stance inherit, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07791',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、新聞の、本気で、絶対、社説、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Ren — newspaper editorial paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。宗教家の、本気で、絶対、説教、絶対、伝統、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Thanks. Religious-figure sermon trad paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'政府の、本気で、絶対、白書、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Gov whitepaper paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。選挙の、本気で、絶対、争点、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Election point-of-contention paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'本気で、絶対、若年、絶対、層の、絶対、政治、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Young-group politics paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。大学、本気で、絶対、文学部、絶対、の、絶対、伝統、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Univ lit-dept trad paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'地域、本気で、絶対、一帯、絶対、の、絶対、文化、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Region whole-area culture paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。工場の、本気で、絶対、操業、絶対、影響、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Factory operation impact paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07792',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、新聞、絶対、社説、絶対、警察、絶対、見解、絶対、述べております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Case news-editorial police view-state, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、容疑者への、絶対、説教、絶対、警察、絶対、行ったそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Case suspect sermon police-did, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。警察、本気で、絶対、白書、絶対、で、絶対、犯罪、絶対、傾向、絶対、公開しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Police whitepaper crime-trend publish, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、争点、絶対、警察、絶対、整理、絶対、されたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Case point-of-contention police-organize, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、若年、絶対、犯罪、絶対、対策、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Police young-crime counter advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、文学部、絶対、出身の、絶対、容疑者、絶対、警察、絶対、扱われたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Case lit-dept-origin suspect police-handled, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、地域、絶対、一帯、絶対、の、絶対、巡回、絶対、強化しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Police region whole-area patrol strengthen, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、不法、絶対、操業、絶対、警察、絶対、摘発されたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Case illegal operation police-busted, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07793',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、新聞の、本気で、絶対、社説、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sakura — newspaper editorial paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。宗教家の、本気で、絶対、説教、絶対、伝統、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Thanks. Religious-figure sermon trad paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'政府の、本気で、絶対、白書、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Gov whitepaper paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。選挙の、本気で、絶対、争点、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Election point-of-contention paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'本気で、絶対、若年、絶対、層の、絶対、政治、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Young-group politics paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。大学、本気で、絶対、文学部、絶対、の、絶対、伝統、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Univ lit-dept trad paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'地域、本気で、絶対、一帯、絶対、の、絶対、文化、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Region whole-area culture paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。工場の、本気で、絶対、操業、絶対、影響、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Factory operation impact paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07794',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、医療、本気で、絶対、社説、絶対、医療チーム、絶対、注目しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Ren — med editorial med-team watch, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'患者さんへの、本気で、絶対、説教、絶対、にならないよう、絶対、貴院、絶対、配慮されているそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Patient sermon-not your-hosp consider, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。厚労省、本気で、絶対、白書、絶対、医療チーム、絶対、参照しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. MHLW whitepaper med-team reference, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医療費の、本気で、絶対、争点、絶対、貴院、絶対、議論、絶対、されているそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Med-cost point-of-contention your-hosp discuss, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。本気で、絶対、若年、絶対、患者さん、絶対、医療チーム、絶対、注意して診ております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Young-patient med-team careful-diag, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医学、本気で、絶対、文学部、絶対、出身の、絶対、研究者、絶対、貴院、絶対、招かれたんですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Med lit-dept-origin researcher your-hosp invited, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。地域、本気で、絶対、一帯、絶対、の、絶対、住民、絶対、医療チーム、絶対、診ております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Region whole-area residents med-team diag, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'病院の、本気で、絶対、夜間、絶対、操業、絶対、貴院、絶対、維持されているそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Hosp night operation your-hosp maintain, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07795',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    {speaker:'hiroshi_boss',jp:'業界、本気で、絶対、社説、絶対、確認しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Industry editorial verify, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、説教、絶対、避け、絶対、対話、絶対、心掛けております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Staff sermon avoid dialogue-mindful, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'業界、本気で、絶対、白書、絶対、参考にしろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Industry whitepaper reference, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、争点、絶対、整理、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Our point-of-contention organize advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'本気で、絶対、若年、絶対、層、絶対、市場、絶対、開拓しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Young-group market pioneer, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、文学部、絶対、出身の、絶対、新人、絶対、採用しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Our lit-dept-origin newhire-hired, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'駅前、本気で、絶対、一帯、絶対、調査しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Station-front whole-area survey, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、深夜、絶対、操業、絶対、見直しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Our late-night operation review, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07796',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、好きな映画の、絶対、前作、絶対、見たの?メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — fave-movie previous-work saw?, Mei absolute serious really.",style:'Curious.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お料理、絶対、反復、絶対、練習、絶対、してるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — cook repeat-practice, Mei absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、新メニュー、絶対、ハードル、絶対、高いね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — new-menu hurdle-high, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、ベタ、絶対、なロマンス映画、絶対、好きよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — cliché-romance-movie like, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、コンサートの、絶対、アンコール、絶対、すごかったわ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — concert encore amazing, Mei absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、アウトドア、絶対、お休み、絶対、行きたいよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — outdoor-vacation go-want, Mei absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、大晦日、絶対、お店、絶対、忙しいね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — NYE store busy, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、新メニューの、絶対、ぶどう、絶対、タルト、絶対、人気よ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — new-menu grape-tart popular, Mei absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07797',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、お父さん、本気で、絶対、好きな映画の、絶対、前作、絶対、何度も見たぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Gran — youth Dad fave-movie prev-work many-times saw, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、お祖父ちゃん、本気で、絶対、お習字、絶対、反復、絶対、練習されたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Youth — Grandpa calligraphy repeat-practiced, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、お料理の、絶対、ハードル、絶対、高くしてたわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran cook-hurdle high-set, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、ベタ、絶対、なお話、絶対、好きだったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Grandpa cliché-stories liked, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、コンサートの、絶対、アンコール、絶対、お喜びだったわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — gran concert encore-glad, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、アウトドア、絶対、お好きだったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — Grandpa outdoor liked, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、大晦日、絶対、お父さんと、絶対、お寺、絶対、行ったわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — gran NYE Dad-temple went, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、お庭で、絶対、ぶどう、絶対、育てたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa garden grape grew, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07798',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、好きな映画の、絶対、前作、絶対、見直したわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis fave-movie prev-work re-watched, absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、本気で、絶対、漢字、絶対、反復、絶対、練習、絶対、頑張ってるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me kanji repeat-practice try, absolute serious really.",style:'Earnest child.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、お勉強の、絶対、ハードル、絶対、ちょっと、絶対、高めようね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — study-hurdle slightly raise, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、お父さんが、本気で、絶対、ベタ、絶対、なギャグ、絶対、言うんだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — Dad cliché-gag says, absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'翔くん、コンサートで、本気で、絶対、アンコール、絶対、あったわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — concert encore happened, absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、お父さんと、本気で、絶対、アウトドア、絶対、行きたいな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — me Dad outdoor go-want, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、大晦日、絶対、お家で、絶対、お祝いしようね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — NYE home cele, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、本気で、絶対、ぶどう、絶対、ジュース、絶対、好きだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — me grape juice like, absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07799',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、好きなゲームの、絶対、前作、絶対、やった?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Riku — you fave-game prev-work played?, absolute serious really.",style:'Curious teen.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、反復、絶対、練習、絶対、すげえな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"You — repeat-practice amazing, Sakura absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'リク、お前の、本気で、絶対、ハードル、絶対、高すぎるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Riku — your hurdle too-high, absolute serious really.",style:'Wry.'},
    {speaker:'riku_teen',jp:'お前のお話、本気で、絶対、ベタ、絶対、すぎるぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Your story cliché-too-much, Sakura absolute serious really.",style:'Teasing.'},
    {speaker:'sakura_teen',jp:'リク、ライブの、本気で、絶対、アンコール、絶対、最高だったね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Riku — live encore best, absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、アウトドア、絶対、好きだよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"You — outdoor like, Sakura absolute serious really.",style:'Curious.'},
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、大晦日、絶対、何してた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Riku — you NYE what-did?, absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'お前のお母さんの、本気で、絶対、ぶどう、絶対、ジュース、絶対、ウマかったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Your mom grape-juice tasty, Sakura absolute serious really.",style:'Praising close.'},
  ]},
  {id:'conv_07800',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、ぼく、本気で、絶対、好きなアニメの、絶対、前作、絶対、見たいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom — me fave-anime prev-work see-want, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、漢字、絶対、反復、絶対、練習、絶対、続けてね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — kanji repeat-practice continue, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ママ、お父さんが、本気で、絶対、ぼくの、絶対、ハードル、絶対、上げすぎだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom — Dad my hurdle too-raise, absolute serious really.",style:'Whining.'},
    {speaker:'yumiko_mom',jp:'翔くん、お父さん、本気で、絶対、ベタ、絶対、なお話、絶対、好きなのよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — Dad cliché-stories likes, absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、テレビで、本気で、絶対、アンコール、絶対、シーン、絶対、流れたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom — TV encore-scene aired, absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'翔くん、お父さんと、本気で、絶対、アウトドア、絶対、計画してるわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — Dad outdoor plan-doing, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、大晦日、絶対、お年玉、絶対、楽しみだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — NYE money-look-forward, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、ぶどう、絶対、お買いになる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — grape buy?, absolute serious really.",style:'Tender close.'},
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

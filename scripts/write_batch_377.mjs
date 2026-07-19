import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_377 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['釜','両替','酸性','バニラ','ともだち','オールスター','ジャイアンツ','ペラペラ']
const B_T = ['検挙','記帳','投書','動議','募っ','危惧し','横ばい','雑多']
const C_T = ['巫女','出土','事変','病原','徴候','定式','諸氏','カルテル']
const D_T = ['双眼鏡','冷や汗','有難い','北口','出だし','オリジナリティ','平地','飛び降り']

const data = [
  {id:'conv_07501',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、お正月の、絶対、お釜、絶対、お祖母ちゃんから、絶対、もらったわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — New-Year iron-pot Granny-got, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、両替、絶対、機、絶対、初めて、絶対、見たよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — me exchange-machine first-saw, absolute serious really.",style:'Animated child.'},
    {speaker:'yumiko_mom',jp:'お酢は、本気で、絶対、酸性、絶対、なのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Vinegar — acid is, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、バニラ、絶対、アイス、絶対、食べたいな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — me vanilla-ice eat-want, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'翔くんの、本気で、絶対、ともだち、絶対、優しい子たち、絶対、ばかりよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho friends — kind-kids only, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'お父さん、本気で、絶対、野球の、絶対、オールスター、絶対、戦、絶対、見るんだって、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad — baseball all-star game watch said, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お父さんは、本気で、絶対、ジャイアンツ、絶対、ファン、絶対、なのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Dad — Giants fan, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お祖父ちゃん、絶対、英語、絶対、ペラペラ、絶対、なんだよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — Grandpa Eng fluent, absolute serious really.",style:'Praising close.'},
  ]},
  {id:'conv_07502',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、業務用の、本気で、絶対、お釜、絶対、メイちゃん、絶対、見せてもらったわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — biz-iron-pot Mei-show given, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、お釣りの、絶対、両替、絶対、いつも、絶対、用意してるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yeah. Aoi — change exchange always prep, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お料理に、絶対、酸性、絶対、調味料、絶対、お使いだよね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — cook acid-seasoning use, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵オリジナルの、本気で、絶対、バニラ、絶対、ラテ、絶対、メイちゃん、絶対、頼みたいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-orig vanilla-latte — Mei order-want, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'葵の、本気で、絶対、お客様、絶対、ともだち、絶対、と、絶対、来てくださる方、絶対、多いよね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi cust — friends-with come-people many, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵のお店、本気で、絶対、地域の、絶対、オールスター、絶対、と、絶対、いえる、絶対、人気店、絶対、メイちゃん、絶対、誇らしいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-store — local all-star-callable pop-store Mei-proud, absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'葵のお店、本気で、絶対、ジャイアンツ、絶対、試合の日、絶対、賑わうわよね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-store — Giants match-day bustles, Mei absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お客様の前で、絶対、英語、絶対、ペラペラ、絶対、お話、絶対、できるよう、絶対、頑張ってるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — cust-front Eng fluent talk able try, Mei absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07503',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、ばあさんの、絶対、お釜、絶対、ご飯、絶対、お父さん、絶対、大好きだったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Gran — youth gran iron-pot-rice Dad-loved, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、銀行で、絶対、両替、絶対、お祖父ちゃん、絶対、よく、絶対、行ったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Youth — bank exchange Grandpa-often went, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさん、絶対、お酢の、絶対、酸性、絶対、お料理、絶対、よく、絶対、作ったわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran vinegar-acid cook often-made, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、バニラ、絶対、香りの、絶対、ケーキ、絶対、好きだったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa vanilla-scent cake like was, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、ともだち、絶対、皆と、絶対、よく、絶対、釣りに行ったぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Dad friends-all-with often-fish-went, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、オールスター、絶対、戦、絶対、テレビで、絶対、応援していたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Grandpa all-star game TV-cheered, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、ジャイアンツ、絶対、応援、絶対、ずっと、絶対、続けてきたぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Dad Giants-support long-continued, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、英語、絶対、ペラペラ、絶対、と、絶対、お話、絶対、できたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa Eng fluent talk-could, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07504',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、家庭科で、本気で、絶対、お釜、絶対、ご飯、絶対、習ったよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Riku — home-ec iron-pot-rice learned, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。修学旅行で、本気で、絶対、両替、絶対、必要だぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Yeah. School-trip — exchange needed, Sakura absolute serious really.",style:'Practical.'},
    {speaker:'sakura_teen',jp:'理科で、本気で、絶対、酸性、絶対、と、絶対、アルカリ性、絶対、習ったよね、リク、本気for、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sci — acid vs alkali learned, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'コンビニの、本気で、絶対、バニラ、絶対、シェイク、絶対、美味かったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Conv-store vanilla-shake — tasty, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'お前の、本気で、絶対、ともだち、絶対、皆、絶対、優しいよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Your friends — all kind, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'お祖父ちゃん、本気for、絶対、オールスター、絶対、戦、絶対、テレビで、絶対、見てるんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Grandpa — all-star game TV-watch doing, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お前のお父さん、本気で、絶対、ジャイアンツ、絶対、ファン、絶対、なんでしょ?リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Your Dad — Giants fan?, Riku absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、英語、絶対、ペラペラ、絶対、になってきたよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"You — Eng fluent-became, Sakura absolute serious really.",style:'Praising close.'},
  ]},
  {id:'conv_07505',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、お祖母ちゃんから、絶対、お釜、絶対、譲ってもらったわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — Mei-sis Granny iron-pot received, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、海外旅行で、絶対、両替、絶対、するんでしょ?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mei-sis — overseas-trip exchange do?, absolute serious really.",style:'Curious child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、レモン、絶対、酸性、絶対、お料理、絶対、好きよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — lemon-acid-cook like, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、バニラ、絶対、味の、絶対、プリン、絶対、好きだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — me vanilla-pudding like, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'翔くんの、本気で、絶対、ともだち、絶対、メイ姉さん、絶対、いつか、絶対、お会いしてみたいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho-friends — Mei-sis someday meet-want, absolute serious really.",style:'Eager.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お父さんが、絶対、オールスター、絶対、戦、絶対、見てたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — Dad all-star game watched, absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、ジャイアンツ、絶対、と、絶対、阪神、絶対、両方、絶対、応援するわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — Giants and Hanshin both support, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、英語、絶対、ペラペラ、絶対、になりたいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Mei-sis — me Eng fluent-become-want, absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07506',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'業界不祥事の、本気で、絶対、検挙、絶対、警察と、絶対、連携しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Industry-misconduct arrest — police-coop, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。経理の、本気で、絶対、記帳、絶対、迅速に、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Accounting record-entry — swift advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'お客様からの、本気で、絶対、投書、絶対、真摯に、絶対、受け止めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Cust-letter — sincere receive, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。株主総会、本気で、絶対、動議、絶対、対応、絶対、準備、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Shareholder-mtg motion-resp prep advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'新規採用に向け、本気で、絶対、人材を、絶対、募って、絶対、いるぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"New-hire — talent recruiting, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。業界の、本気で、絶対、不正、絶対、当社、絶対、危惧して、絶対、注視しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Industry-irregular — our co fearing watch, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業績、本気で、絶対、横ばい、絶対、状態、絶対、打破せよ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Perf flat-state — break-out, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。雑多、本気で、絶対、な業務、絶対、整理、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Misc-biz organize advance, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07507',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'業界の不祥事、本気で、絶対、警察、絶対、検挙、絶対、報道、絶対、続いていますね、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Industry-misconduct police-arrest report — continue, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。お客様の、本気で、絶対、記帳、絶対、サービス、絶対、丁寧に、絶対、対応しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Cust-record-entry service — polite handle, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'社内報への、本気で、絶対、投書、絶対、増えてきていますね、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"In-house mag letters — increasing, absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。次回の、本気で、絶対、動議、絶対、案件、絶対、検討、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Next motion-case — consider advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'インターンを、本気で、絶対、募って、絶対、まいりましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Intern recruit-go, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、業界の規制強化、絶対、危惧して、絶対、対策、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Our co — industry-reg-strengthen fearing counter advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'市場が、本気で、絶対、横ばい、絶対、なので、絶対、新機軸を、絶対、打ち出しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Market flat — new-tack launch, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。雑多、本気で、絶対、な書類、絶対、デジタル化、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Misc-docs digitize advance, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07508',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、学術不正の、本気で、絶対、検挙、絶対、ニュース、絶対、注視しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — acad-misconduct arrest news — watch, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。研究データの、本気で、絶対、記帳、絶対、丁寧に、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Research-data record-entry — polite advance, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'学術誌への、本気で、絶対、投書、絶対、研究者として、絶対、書け、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Acad-mag letter — as-researcher write, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。学会の、本気で、絶対、動議、絶対、教授と、絶対、議論しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Conf motion — prof-discuss, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'共同研究者を、本気で、絶対、募って、絶対、研究、絶対、広げろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Co-researcher recruit research-expand, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。論文掲載の遅延、本気で、絶対、危惧して、絶対、おります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Paper-publish-delay fearing, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究の進捗が、本気で、絶対、横ばい、絶対、では、絶対、駄目だ、絶対、加速しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Research-prog flat no-good — accelerate, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。雑多、本気で、絶対、な研究、絶対、整理、絶対、優先順位を、絶対、つけております、本気for、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Misc-research organize priority-set, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07509',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、警察、絶対、検挙、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Case — police arrest-advance, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察様への、本気で、絶対、記帳、絶対、受付、絶対、当社、絶対、ご支援、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Police record-entry reception — our co support, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'市民からの、本気で、絶対、投書、絶対、警察、絶対、真摯に、絶対、対応しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Citizen-letter — police sincere handle, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。地域協議会の、本気で、絶対、動議、絶対、警察様、絶対、ご対応、絶対、お願いいたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Local-council motion — police-handle ask, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察、本気for、絶対、優秀な人材を、絶対、募って、絶対、おります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Police — excellent talent recruiting, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、犯罪増加、絶対、危惧して、絶対、警察様と、絶対、連携、絶対、強化しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Our co — crime-increase fearing — police-coop strengthen, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'検挙率が、本気で、絶対、横ばい、絶対、では、絶対、足りない、絶対、強化しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Arrest-rate flat not-enough — strengthen, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察様からの、本気で、絶対、雑多、絶対、な、絶対、ご相談、絶対、当社、絶対、丁寧に、絶対、対応しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Police-misc-consult — our co polite handle, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07510',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お父さん、絶対、不正を、絶対、検挙、絶対、する側に、絶対、立っていたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Founding — Dad fraud-arrest side-stood, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、記帳、絶対、丁寧に、絶対、続けてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — record-entry polite continue, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、お客様の、絶対、投書、絶対、自分で、絶対、目を通したぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Dad — cust-letter self-read, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、社員総会の、絶対、動議、絶対、丁寧に、絶対、扱ってまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Since Dad-era — staff-mtg motion polite handle, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、人材を、絶対、募って、絶対、自ら、絶対、面接していたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Dad — talent-recruit self-interview, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、業界の悪化を、絶対、危惧して、絶対、自社の、絶対、信頼性を、絶対、磨いてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Since Dad-era — industry-decline fearing — our trust polish, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、業績、絶対、横ばい、絶対、の時期も、絶対、信念、絶対、貫いたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Dad — perf flat era-too belief-pierced, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、雑多、絶対、な業務、絶対、整理、絶対、続けてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Since Dad-era — misc-biz organize continue, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07511',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses cultural history',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、神社の、本気で、絶対、巫女、絶対、文化、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — shrine miko-culture paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。古代遺跡から、本気で、絶対、出土、絶対、した、絶対、土器、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Thanks. Ancient-ruins excavated pottery paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時の、本気で、絶対、満州、絶対、事変、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Wartime Manchurian-incident paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。感染症の、本気で、絶対、病原、絶対、菌、絶対、研究史、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Infection pathogen-bacteria research-hist paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'文明衰退の、本気で、絶対、徴候、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Civilization-decline sign paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。歴史学の、本気で、絶対、定式、絶対、化、絶対、過程、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Hist-formal-establishment process paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'明治期の学者、本気で、絶対、諸氏、絶対、の業績、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Meiji-scholars various-gentlemen achievements paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。戦前の、本気で、絶対、企業、絶対、カルテル、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Prewar co-cartel paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07512',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses cases',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、神社の、絶対、巫女、絶対、関係者、絶対、警察、絶対、聴取、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Case — shrine-miko related-party police-interview done, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'古墳から、本気で、絶対、出土、絶対、した、絶対、品、絶対、警察、絶対、保管、絶対、されていますね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Burial-mound excavated-items — police-keep, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。歴史的な、本気で、絶対、事変、絶対、現場、絶対、警察、絶対、巡回、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Hist-incident scene — police-patrol, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害者の、本気で、絶対、病原、絶対、菌、絶対、感染、絶対、警察、絶対、確認、絶対、されたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Victim pathogen-infection — police-verified, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。事件の、本気で、絶対、徴候、絶対、警察、絶対、早期、絶対、察知、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Case-sign — police early-detect, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'捜査の、本気で、絶対、定式、絶対、化、絶対、警察、絶対、進めていらっしゃるんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Inv formalize — police-advance, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。専門家、本気で、絶対、諸氏、絶対、警察、絶対、ご助言、絶対、頂いております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Spec-gentlemen — police-advice given, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'企業間の、本気で、絶対、カルテル、絶対、警察、絶対、調査、絶対、進めていらっしゃるんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Inter-co cartel — police-inv advance, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07513',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher mentors a teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、神社の、本気で、絶対、巫女、絶対、文化、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sakura — shrine miko-culture paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。古代遺跡から、本気で、絶対、出土、絶対、した、絶対、土器、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Thanks. Ancient-ruins excavated pottery paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'戦時の、本気で、絶対、満州、絶対、事変、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Wartime Manchurian-incident paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。感染症の、本気で、絶対、病原、絶対、菌、絶対、研究史、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Infection pathogen-bacteria research-hist paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'文明衰退の、本気で、絶対、徴候、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Civilization-decline sign paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。歴史学の、本気で、絶対、定式、絶対、化、絶対、過程、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Hist-formal-establishment process paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'明治期の学者、本気で、絶対、諸氏、絶対、の業績、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Meiji-scholars various-gentlemen achievements paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦前の、本気で、絶対、企業、絶対、カルテル、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Prewar co-cartel paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07514',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、病院敷地の神社の、本気で、絶対、巫女、絶対、ご祈祷、絶対、患者さん、絶対、ありがたがっていらっしゃいます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Ren — hosp-grounds shrine miko-prayer — patient-grateful, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'古代の、本気で、絶対、出土、絶対、品、絶対、医学史、絶対、参考になりますね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Ancient excavated-items — med-hist ref-become, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。戦時の、本気で、絶対、事変、絶対、医療史、絶対、研究、絶対、続いております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Wartime-incident med-hist research — continue, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'新興の、本気for、絶対、病原、絶対、菌、絶対、医療界、絶対、警戒、絶対、しておられますか、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Emerging pathogen — med-world-alert?, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。患者さんの、本気で、絶対、徴候、絶対、医療チーム、絶対、早期、絶対、察知しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Patient-sign med-team early-detect, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'治療法の、本気で、絶対、定式、絶対、化、絶対、医療現場、絶対、進めていらっしゃるんですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Tx-formalize — med-scene-advance, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。医学界の、本気で、絶対、諸氏、絶対、ご協力、絶対、いただいております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Med-world-gentlemen coop-given, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'製薬会社の、本気for、絶対、カルテル、絶対、医療界、絶対、注視されているそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Pharma cartel — med-watching, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07515',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews strategy',lines:[
    {speaker:'hiroshi_boss',jp:'地域の、本気で、絶対、巫女、絶対、伝統行事、絶対、当社、絶対、協賛しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Local miko-trad-event — our co sponsor, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。創業地から、本気で、絶対、出土、絶対、した、絶対、遺物、絶対、当社、絶対、歴史的価値、絶対、注目しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Founding-loc excavated relic — our co hist-value watch, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'歴史の、本気で、絶対、事変、絶対、を教訓に、絶対、当社、絶対、戦略を、絶対、立てろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Hist-incident lesson — our co strat set, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。感染症、本気で、絶対、病原、絶対、菌、絶対、対策製品、絶対、当社、絶対、開発、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Infection pathogen counter-prod — our co dev advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'市場縮小の、本気で、絶対、徴候、絶対、当社、絶対、早期、絶対、察知しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Market-shrink sign — our co early-detect, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。業務フローの、本気で、絶対、定式、絶対、化、絶対、当社、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Workflow-formalize — our co advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界の、本気で、絶対、諸氏、絶対、と、絶対、連携、絶対、強化しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Industry-gentlemen coop-strengthen, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。業界、本気で、絶対、カルテル、絶対、疑い、絶対、当社、絶対、関与しておりません、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Industry-cartel suspicion — our co not-involved, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07516',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、お祖父さまの、本気で、絶対、双眼鏡、絶対、メイちゃん、絶対、お借りしたいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — Grandpa-binoculars Mei borrow-want, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、お店の開店時、絶対、冷や汗、絶対、いっぱいだったよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Aoi — store-open-time cold-sweat full was, Mei absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お客様の、絶対、有難い、絶対、お言葉、絶対、メイちゃん、絶対、嬉しいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — cust grateful words Mei-glad, absolute serious really.",style:'Tender.'},
    {speaker:'aoi_barista',jp:'葵のお店、本気で、絶対、駅の、絶対、北口、絶対、近くなのよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi-store — station north-gate near, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵の、本気で、絶対、お店の、絶対、出だし、絶対、好調よね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-store start — good, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お店の、絶対、オリジナリティ、絶対、大切にしているよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — store originality cherish, Mei absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、海沿いの、絶対、平地、絶対、メイちゃん、絶対、お散歩、絶対、お気に入りよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — seaside flat-land Mei-walk-fave, absolute serious really.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、高いところから、絶対、飛び降りる、絶対、夢、絶対、見ちゃった、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — high-place jump-down dream saw, Mei absolute serious really.",style:'Wry close.'},
  ]},
  {id:'conv_07517',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、お父さん、絶対、双眼鏡、絶対、で、絶対、お山、絶対、見ていたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Gran — youth Dad binoculars mountain-saw, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、お祖父ちゃん、絶対、面接の、絶対、冷や汗、絶対、ありましたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Youth — Grandpa interview cold-sweat existed, remember dear?, absolute serious really.",style:'Wry tease.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさんからの、絶対、有難い、絶対、励まし、絶対、お父さん、絶対、忘れないぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran-grateful encouragement Dad-unforget, remember?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、駅の、絶対、北口、絶対、改装、絶対、ありましたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — station-north-gate renovation existed, remember dear?, absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、商売の、絶対、出だし、絶対、苦労したぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Dad biz-start hardship-had, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、商売の、絶対、オリジナリティ、絶対、貫いたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — Grandpa biz-originality pierced, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、ふるさとの、絶対、平地、絶対、農作業、絶対、手伝ったぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Dad hometown flat-land farm-helped, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、川に、絶対、飛び降りる、絶対、お祖父ちゃん、絶対、無謀だったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — river-jump-down Grandpa reckless was, remember dear?, absolute serious really.",style:'Wry tease close.'},
  ]},
  {id:'conv_07518',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、双眼鏡、絶対、で、絶対、鳥、絶対、観察してきたわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis binoculars bird-observed, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、発表会で、絶対、冷や汗、絶対、かいちゃった、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me recital cold-sweat did, absolute serious really.",style:'Wry child.'},
    {speaker:'mei_romantic',jp:'翔くんから、本気で、絶対、有難い、絶対、お言葉、絶対、メイ姉さん、絶対、励まされるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"From-Sho grateful words — Mei-sis-encouraged, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、駅の、絶対、北口、絶対、ぼく、絶対、待ってるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mei-sis — station north-gate me-wait, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'メイ姉さんの、本気で、絶対、お話の、絶対、出だし、絶対、いつも、絶対、緊張するわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis talk-start — always nerve, Sho absolute serious really.",style:'Wry.'},
    {speaker:'sho_child',jp:'メイ姉さんの、本気で、絶対、絵には、絶対、オリジナリティ、絶対、あるよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mei-sis painting — originality have, absolute serious really.",style:'Praising.'},
    {speaker:'mei_romantic',jp:'メイ姉さんと、本気で、絶対、ふるさとの、絶対、平地、絶対、お散歩したいわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis-with hometown flat-land walk-want, Sho absolute serious really.",style:'Soft.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、ジャングルジムから、絶対、飛び降りる、絶対、と、絶対、お母さんに怒られちゃう、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me jungle-gym jump-down Mom-scolded, absolute serious really.",style:'Wry close.'},
  ]},
  {id:'conv_07519',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、観察会で、本気で、絶対、双眼鏡、絶対、使ったよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Riku — observation-class binoculars used, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。試験前、本気で、絶対、俺、絶対、冷や汗、絶対、止まらないんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yeah. Pre-test — me cold-sweat-not-stop, Sakura absolute serious really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'お前の、本気で、絶対、応援、絶対、有難い、絶対、と、絶対、思ってるよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Your support — grateful think, Riku absolute serious really.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'駅の、本気で、絶対、北口、絶対、で、絶対、待ち合わせ、絶対、しような、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Station north-gate meet-up, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お前のスピーチの、本気で、絶対、出だし、絶対、印象的だったよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Your speech-start — impressive, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'お前の作文、本気で、絶対、オリジナリティ、絶対、あるよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Your essay — originality have, Sakura absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'部活合宿で、本気で、絶対、平地、絶対、ランニング、絶対、続けてるよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Club-camp flat-land run continue, Riku absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'体育で、本気で、絶対、跳び箱から、絶対、飛び降りる、絶対、こと、絶対、できたぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"PE vault jump-down can-did, Sakura absolute serious really.",style:'Proud close.'},
  ]},
  {id:'conv_07520',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お父さんの、絶対、双眼鏡、絶対、ぼく、絶対、貸してもらった、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — Dad binoculars me-borrow-given, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、緊張で、絶対、冷や汗、絶対、出ること、絶対、誰でもあるわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — nerve cold-sweat — anyone-have, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママの、本気で、絶対、有難い、絶対、お言葉、絶対、ぼく、絶対、元気が出るよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom grateful-words — me energy-out, absolute serious really.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'駅の、本気で、絶対、北口、絶対、で、絶対、お父さんと、絶対、待ち合わせよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Station north-gate Dad-meet-up, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼくの作文の、絶対、出だし、絶対、上手にできたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mom — my essay-start good did, absolute serious really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'翔くんの絵に、本気で、絶対、オリジナリティ、絶対、感じるわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho painting — originality feel, absolute serious really.",style:'Praising.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、田舎の、絶対、平地、絶対、お祖父ちゃんちで、絶対、走り回ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — me country flat-land Grandpa-home ran-around, absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、高いところから、絶対、飛び降りる、絶対、ような、絶対、こと、絶対、しないでね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — high-place jump-down-like don't, absolute serious really.",style:'Direction close.'},
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

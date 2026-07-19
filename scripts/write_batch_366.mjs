import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_366 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['カーペット','バイブル','粥','開封','迷路','曲がる','下校','高血圧']
const B_T = ['ディベート','主体性','スパン','税額','キャスティング','特技','創意','突出']
const C_T = ['嘆く','本性','有様','人道的','勇敢','執念','スクープ','高学年']
const D_T = ['織り','格子','三輪','面影','根強い','坊さん','悔い','実体験']

const data = [
  {id:'conv_07281',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、新しい、本気で、絶対、カーペット、絶対、リビングに、絶対、敷いたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Sho — new carpet living-room laid, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お父さん、絶対、バイブル、絶対、と、絶対、呼んでた本、絶対、見せてくれた、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — Dad bible-called book showed, absolute serious really.",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'風邪気味の時、本気で、絶対、粥、絶対、ママ、絶対、作るからね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Cold-feeling time — porridge Mom make, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'お祖母ちゃんから、本気で、絶対、届いた荷物、絶対、ぼく、絶対、開封、絶対、していい?ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"From Granny — package me open?, Mom absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'公園に、本気で、絶対、新しい、絶対、迷路、絶対、できたって、聞いたわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Park — new maze made-heard, Sho absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'コンビニまで、本気で、絶対、角を、絶対、曲がるところ、絶対、ぼく、絶対、覚えたよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"To conv-store — corner turn me memorized, Mom absolute serious really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'下校時、本気で、絶対、お友達と、絶対、寄り道、絶対、しないでね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"After-school — friends detour don't, Sho absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'お祖父ちゃん、本気で、絶対、高血圧、絶対、最近、絶対、心配だよね、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Grandpa — hypertension lately worry, Mom absolute serious really.",style:'Concerned close.'},
  ]},
  {id:'conv_07282',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat at the cafe',lines:[
    {speaker:'mei_romantic',jp:'葵、お店の、本気で、絶対、カーペット、絶対、新しくしたわよね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — store carpet new-did, Mei admire absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。お祖父さまの教えを、本気で、絶対、バイブル、絶対、と、絶対、葵、絶対、考えているわ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yeah. Granpa-teaching bible Aoi-consider, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵の、本気で、絶対、お粥、絶対、メニュー、絶対、メイちゃん、絶対、頼みたいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Aoi — porridge menu Mei order-want, absolute serious really.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'業務用の、本気で、絶対、コーヒー、絶対、葵、絶対、慎重に、絶対、開封、絶対、しているの、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Biz coffee — Aoi careful open, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'駅近くの、本気で、絶対、地下街、絶対、迷路、絶対、みたいよね、葵、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Station-near underground — maze-like, Aoi Mei absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵のお店、本気で、絶対、駅から、絶対、二回、絶対、曲がるの、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-store — station twice turn, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'下校途中の、本気で、絶対、学生さん、絶対、葵によく来てくれるわよね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"After-school students — Aoi often-come, Mei admire absolute serious really.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'葵のお客様の中に、本気で、絶対、高血圧、絶対、気にされる方、絶対、いらっしゃるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi cust — hypertension mind exist, Mei absolute serious really.",style:'Practical close.'},
  ]},
  {id:'conv_07283',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、和室の、絶対、カーペット、絶対、ばあさんが、絶対、敷いてくれたわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — wa-room carpet gran-laid, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。商家の家訓、本気で、絶対、バイブル、絶対、お祖父ちゃん、絶対、大切に、絶対、していたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Yes. Family-creed — bible Grandpa-cherished, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさんが、絶対、粥、絶対、作ってくれたわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Youth — gran porridge-made, remember?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'お祝いの品、本気で、絶対、開封、絶対、お祖父ちゃん、絶対、大切に、絶対、していたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Celeb-gift — open Grandpa-careful, remember dear?, absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、京都の小路、絶対、迷路、絶対、みたいだったわよな、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Kyoto-alley maze-like, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'昔、本気で、絶対、お祖父ちゃん、絶対、家の角を、絶対、曲がるとき、絶対、いつも、絶対、お土産持ってきてくれたわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Old — Grandpa corner-turn always souv-brought, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'孫の下校時、本気で、絶対、お父さん、絶対、迎えに行ってあげたいぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Grandkid after-school — Dad-pickup want, ask absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'お祖父ちゃん、本気で、絶対、最近、絶対、高血圧、絶対、気をつけましょうね、あなた、お互いに、健康、第一に、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Grandpa — lately hypertension careful, dear mutual-health-first, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07284',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、学校の、本気で、絶対、カーペット、絶対、新しくなったよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Riku — school-carpet new-became, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。先生の教科書、本気で、絶対、バイブル、絶対、扱いされてるんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yeah. Sensei-textbook — bible-treated, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、風邪気味の時、絶対、粥、絶対、食べた方がいいよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"You — cold-time porridge eat-better, Riku absolute serious really.",style:'Caring.'},
    {speaker:'riku_teen',jp:'お前から、本気で、絶対、もらった手紙、絶対、開封、絶対、するの、絶対、ドキドキしたぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"From-you letter — open nerve, Sakura absolute serious really.",style:'Earnest.'},
    {speaker:'sakura_teen',jp:'校舎の中、本気で、絶対、新一年生、絶対、迷路、絶対、みたいって、絶対、言ってたよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"School-bldg — new 1yr maze-like said, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'駅前で、本気で、絶対、右に、絶対、曲がるとお店、絶対、あるんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Station — right-turn store exists, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'下校時、本気で、絶対、二人で、絶対、寄り道、絶対、しちゃおうよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"After-school — two-detour, Riku absolute serious really.",style:'Eager.'},
    {speaker:'riku_teen',jp:'お祖父ちゃん、本気で、絶対、高血圧で、絶対、最近、絶対、塩分、絶対、控えているんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Grandpa — hypertension salt-restrict, Sakura absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07285',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、新しい、絶対、カーペット、絶対、買ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis new carpet bought, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼくの絵本、絶対、ぼくの、絶対、バイブル、絶対、なんだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — my picture-book my bible, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お粥、絶対、翔くんに、絶対、作ってあげる、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — porridge Sho-make-for-you, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼくの手紙、絶対、開封、絶対、してくれた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Mei-sis — my letter open did?, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'公園の、本気で、絶対、迷路、絶対、翔くんと、絶対、一緒に、絶対、入りたいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Park-maze — Sho-together enter-want, absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、自転車、絶対、左に、絶対、曲がるの、絶対、上手だよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — bike left-turn good, absolute serious really.",style:'Praising.'},
    {speaker:'mei_romantic',jp:'下校途中の、本気で、絶対、翔くん、絶対、メイ姉さんの、絶対、お店に、絶対、寄って、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"After-school Sho — Mei-sis-store stop-by, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'お祖父ちゃん、本気で、絶対、高血圧、絶対、なんだ、絶対、心配だよね、メイ姉さん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Grandpa — hypertension worry, Mei-sis absolute serious really.",style:'Concerned close.'},
  ]},
  {id:'conv_07286',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews staff training',lines:[
    {speaker:'hiroshi_boss',jp:'社員研修、本気で、絶対、ディベート、絶対、形式を、絶対、取り入れろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Staff-train — debate form intro, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。新人の主体性、本気で、絶対、引き出すよう、絶対、努めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Newbie-init — draw-out striving, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'長期スパン、本気で、絶対、見据えて、絶対、計画を、絶対、立てろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Long-span — foresee plan-set, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。前期の税額、本気で、絶対、申告、絶対、適切に、絶対、進めました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Last-term tax-amt — file proper done, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'広告の、本気で、絶対、キャスティング、絶対、慎重に、絶対、選定しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ad-casting — careful select, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員の特技、本気で、絶対、業務に、絶対、活かす、絶対、取り組み、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Staff-special-skill — biz-utilize effort advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'各部署、本気で、絶対、創意工夫を、絶対、競わせろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Each-dept — creativity-compete, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社の業績、本気で、絶対、業界で、絶対、突出、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Our perf — industry-stand-out, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07287',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'採用面接、本気で、絶対、ディベート、絶対、課題を、絶対、入れてみましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Hiring-int — debate task add, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。候補者の主体性、本気で、絶対、見極めたいですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Yes. Cand-init — discern-want, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'プロジェクトのスパン、本気で、絶対、半年で、絶対、設定しましょうか、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Proj-span — half-year set?, absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。当社の税額、本気で、絶対、本年、絶対、増加、絶対、見込みです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Our tax-amt — this-yr increase-prospect, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'CMの、本気で、絶対、キャスティング、絶対、若手に、絶対、お願いしましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Comm-casting — young ask, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、特技、絶対、活かせる場、絶対、設けております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Staff-skill — utilize-place set, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'新事業、本気で、絶対、創意あふれる、絶対、提案、絶対、集めましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"New biz — creative-prop gather, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、業界で、絶対、突出した、絶対、地位、絶対、保ってまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Our co — industry stood-out position keep, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07288',cluster:'B',ambient:'office_quiet_low',cast:['asuka_teacher','sakura_teen'],targets:B_T,scenario:'A teacher mentors a teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、授業で、本気で、絶対、ディベート、絶対、取り入れてみましょうか、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sakura — class debate try?, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。私の主体性、本気で、絶対、もっと、絶対、引き出していただきたいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. My-init — more draw-out want, gratitude absolute serious really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'進路の検討、本気で、絶対、長いスパン、絶対、見据えましょうね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Career-think — long-span foresee, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。家業の税額、本気で、絶対、お父さんが、絶対、申告、絶対、しているそうです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Yes. Family-tax-amt — Dad-file, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'文化祭の劇、本気で、絶対、キャスティング、絶対、楽しみですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Fest-play casting — fun, gratitude absolute serious really.",style:'Cheerful.'},
    {speaker:'sakura_teen',jp:'はい。私の特技、本気で、絶対、絵を描くこと、絶対、なんです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. My-skill — drawing, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'論文に、本気で、絶対、創意、絶対、感じられました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Paper — creativity felt, gratitude absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'はい。クラスで、本気で、絶対、突出した、絶対、成績、絶対、目指したいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Class — stand-out grade aim-want, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07289',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、学会で、本気で、絶対、ディベート、絶対、参加してきたか、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Ren — conf debate attended?, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。研究に、本気で、絶対、主体性、絶対、もって、絶対、取り組んでおります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Research-init-tackle, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'論文の、本気で、絶対、スパン、絶対、計画を、絶対、立てておけ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Paper-span — plan-set, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究費の税額、本気で、絶対、控除、絶対、確認、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Research-fund tax-amt — deduct verify, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'プロモビデオの、本気で、絶対、キャスティング、絶対、研究室、絶対、議論しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Promo-vid casting — lab-discuss, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。私の特技、本気で、絶対、データ分析、絶対、なんです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Yes. My-skill — data analysis, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'論文に、本気で、絶対、創意、絶対、込めて、絶対、書け、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Paper — creativity put-in write, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。学会で、本気で、絶対、突出した、絶対、評価、絶対、目指してまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Conf — stand-out eval aim, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07290',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お父さん、絶対、お得意様と、絶対、ディベート、絶対、まがいの議論、絶対、よくしたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"Founding — Dad VIP-debate-like often-did, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、社員の主体性、絶対、重んじてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Since Dad-era — staff-init prized, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さんの代、本気で、絶対、長いスパン、絶対、見据えた、絶対、経営、絶対、続けてきたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Dad-era — long-span foresee mgmt continued, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、税額、絶対、適正に、絶対、申告、絶対、してまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Since Dad-era — tax-amt proper file, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'創業時、本気で、絶対、お父さん、絶対、CMの、絶対、キャスティング、絶対、自分で、絶対、選んだぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Founding — Dad commercial-casting self-chose, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの特技、本気で、絶対、人を見抜く、絶対、ことでした、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Dad-skill — person-discern was, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お父さんの代、本気で、絶対、創意、絶対、もって、絶対、商売、絶対、してきたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad-era — creativity biz-done, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの精神、本気で、絶対、業界で、絶対、突出した、絶対、形で、絶対、受け継がれております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Yes. Dad-spirit — industry stood-out form inherited, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07291',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses war history research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、戦時、本気で、絶対、民の暮らしを、絶対、嘆く、絶対、声、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Ren — wartime — civilian-lament voices paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。戦時に、本気で、絶対、人の本性、絶対、現れる、絶対、こと、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Thanks. Wartime — person-true-nature reveal paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、町の有様、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Wartime — town-state paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。戦時、本気で、絶対、人道的支援、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Wartime — humanitarian-aid paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、勇敢な、絶対、市民、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Wartime — brave-citizen paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。戦時、本気で、絶対、抵抗者の執念、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Wartime — resist-tenacity paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'当時の新聞のスクープ、本気で、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Era news-scoops — paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。戦時の高学年児童、本気で、絶対、教育、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Wartime upper-grade child — edu paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07292',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、市民が、絶対、現状を、絶対、嘆く、絶対、声、絶対、警察、絶対、届いております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Case — citizen-lament voices police-reached, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'容疑者、本気で、絶対、本性、絶対、捜査で、絶対、明らかに、なってきたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Suspect — true-nature inv-revealed, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。事件現場の、本気で、絶対、有様、絶対、警察、絶対、慎重に、絶対、記録、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Scene-state — police-careful record, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害者支援、本気で、絶対、人道的、絶対、観点から、絶対、進められているそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Victim-aid — humanitarian view advance, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。市民の中に、本気で、絶対、勇敢な、絶対、目撃者、絶対、いらっしゃいました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Citizen — brave-witness existed, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察、本気で、絶対、執念を持って、絶対、捜査、絶対、続けて、絶対、こられたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police — tenacity-hold inv-continue, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。本件、本気で、絶対、各紙の、絶対、スクープ、絶対、警察、絶対、対応、絶対、必要となります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Case — each-paper scoop police-resp needed, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'地域の高学年児童、本気で、絶対、防犯教室、絶対、警察、絶対、お願いしたいですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Region upper-grade — crime-prev-class police-ask, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07293',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher discusses war research with a teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、戦時、本気で、絶対、市民が、絶対、暮らしを、絶対、嘆く、絶対、声、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Sakura — wartime civ-lament voices paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。戦時に、本気で、絶対、人の本性、絶対、現れる、絶対、こと、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対。',en:"Thanks. Wartime — person-true-nature reveal paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、町の有様、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Wartime — town-state paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦時の、本気で、絶対、人道的支援、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Wartime humanitarian-aid — paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、勇敢な、絶対、市民、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Wartime — brave-citizen paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。戦時、本気で、絶対、抵抗者の執念、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Wartime resist-tenacity — paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'当時の、本気で、絶対、各紙のスクープ、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Era news-scoops — paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦時の高学年児童、本気で、絶対、教育、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Wartime upper-grade-child edu — paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07294',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical ethics',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、患者さんが、本気で、絶対、病状を、絶対、嘆く、絶対、姿、絶対、医療現場でよく見ます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Ren — patient-illness lament figure med-often-see, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'極限状態で、本気で、絶対、人の本性、絶対、現れる、絶対、と、絶対、聞きます、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Extreme state — person-true-nature reveal heard, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。救急の現場の、本気で、絶対、有様、絶対、想像、絶対、を超えるものがあります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. ER-state — beyond imagination, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医療従事者の、本気で、絶対、人道的、絶対、姿勢、絶対、尊敬しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Med-worker — humanitarian stance respect, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。患者さんの中に、本気で、絶対、勇敢に、絶対、病と戦う方、絶対、いらっしゃいます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Patient — bravely-fight-illness exist, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'治療への、本気で、絶対、執念、絶対、患者さんと、絶対、医療者で、絶対、共有されているんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Tx-tenacity — patient med-shared, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。新治療法、本気で、絶対、各紙の、絶対、スクープ、絶対、医療界、絶対、注目しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. New tx — each-paper scoop med-watch, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'地域の高学年児童、本気で、絶対、健康教室、絶対、続けられているんですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Region upper-grade — health-class continue, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07295',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews social response',lines:[
    {speaker:'hiroshi_boss',jp:'業界の不正、本気で、絶対、市民が、絶対、嘆く、絶対、声、絶対、当社、絶対、真摯に、絶対、受け止めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Industry-misconduct — citizen-lament voices serious receive, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。組織の本性、本気で、絶対、社員、絶対、誇れる、絶対、ものに、絶対、してまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Org-nature — staff-proud-thing make, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'業界の有様、本気で、絶対、当社、絶対、変えていくぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Industry-state — our co change, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社の、本気で、絶対、人道的、絶対、取り組み、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Our humanitarian-effort advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'勇敢な、本気で、絶対、決断、絶対、当社、絶対、続けてきた、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Brave decision — our co continued, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員の執念、本気で、絶対、業績向上、絶対、つながっております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Staff-tenacity — perf-up tied, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'当社の新事業、本気で、絶対、各紙の、絶対、スクープ、絶対、扱い、絶対、対応せよ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Our new biz — each-paper scoop handle, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。地域の高学年児童、本気で、絶対、当社、絶対、教育支援、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Region upper-grade — our co edu-support, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07296',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about crafts',lines:[
    {speaker:'mei_romantic',jp:'葵、伝統の、本気で、絶対、織りもの、絶対、メイちゃん、絶対、興味あるわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Aoi — trad weaving Mei-interest, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵のお店の窓、本気で、絶対、格子柄に、絶対、リフォーム、絶対、考えてるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yeah. Aoi-store window — lattice-reform considering, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、三輪車、絶対、子供の頃、絶対、乗ったわよね、メイちゃん、本気で、絶対、懐かしい、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — tricycle child rode, Mei nostalgic absolute serious really.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'お祖父さまの、本気で、絶対、面影、絶対、葵、絶対、お父さんに、絶対、感じるわ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Grandpa-trace — Aoi Dad-feel, Mei absolute serious really.",style:'Tender.'},
    {speaker:'mei_romantic',jp:'葵の手作りの、本気で、絶対、根強い、絶対、ファン、絶対、いるよね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-handmade — devoted fans, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'お寺の、本気で、絶対、坊さん、絶対、葵のお店、絶対、寄ってくださるのよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Temple-monk — Aoi-store stop-by, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お祖父さまの、絶対、悔いが、絶対、残るって、絶対、お話、絶対、してたわよね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Aoi — Grandpa-regret-remain story told, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、実体験、絶対、もとに、絶対、お客様に、絶対、お話ししているわ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — real-exp based cust-tell, Mei absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07297',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、家で、絶対、織り、絶対、お母さん、絶対、していたわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Gran — youth Mom weaving-doing, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。実家の窓、本気で、絶対、格子、絶対、なってたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Birth-home window — lattice was, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、三輪、絶対、自転車、絶対、お父さん、絶対、孫に、絶対、買ってあげたわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — tricycle Dad grandkid-bought, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お父さんに、本気で、絶対、若い頃の、絶対、面影、絶対、まだ、絶対、残っているわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad — youth-trace still remain, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、家業の、絶対、根強い、絶対、お客様、絶対、たくさん、絶対、いてくださったわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Youth — family-biz devoted cust-many, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お寺の、本気で、絶対、坊さん、絶対、お祖父ちゃん、絶対、よく、絶対、お話、絶対、していたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Temple-monk — Grandpa often-talked, remember dear?, absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さんが、絶対、ばあさんに、絶対、もっと、絶対、言葉を、絶対、かけられなかった、絶対、悔い、絶対、残っているぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対。',en:"Youth — Dad gran more-words couldn't-give regret remain, ask absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お祖父ちゃんの、本気で、絶対、実体験、絶対、孫に、絶対、お話、絶対、しましょうね、あなた、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Grandpa-real-exp — grandkid-tell, dear absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07298',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、織りものの、絶対、教室、絶対、通おうかな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis weaving-class attend?, absolute serious really.",style:'Bright.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お家の窓、絶対、格子柄、絶対、お洒落だね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — home window lattice stylish, absolute serious really.",style:'Animated child.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、三輪車、絶対、まだ、絶対、覚えてる?メイ姉さん、本気で、絶対、懐かしい、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — tricycle still remember?, Mei-sis nostalgic absolute serious really.",style:'Wistful.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お母さんに、絶対、面影、絶対、似てるって、絶対、お祖父ちゃん、絶対、言ってたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — Mom-trace resemble Grandpa-said, absolute serious really.",style:'Tender.'},
    {speaker:'mei_romantic',jp:'メイ姉さんのお店の、本気で、絶対、根強い、絶対、ファン、絶対、いてくださるのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis-store — devoted-fans exist, Sho absolute serious really.",style:'Praising.'},
    {speaker:'sho_child',jp:'近所のお寺に、本気で、絶対、坊さん、絶対、優しい、絶対、人が、絶対、いるよ、メイ姉さん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Near temple — monk kind person exist, Mei-sis absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、学生時代、絶対、もっと、絶対、勉強、絶対、しておけば、絶対、よかったって、絶対、悔い、絶対、残ってるわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Mei-sis — student-time more-study-shoulda regret remain, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さんの、本気で、絶対、実体験、絶対、ぼく、絶対、聞きたいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Mei-sis real-exp — me hear-want, absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07299',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、家庭科で、本気で、絶対、織り、絶対、習ったよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Riku — home-ec — weaving learned, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。学校の窓、本気で、絶対、格子、絶対、リフォームしたんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. School-window — lattice-reformed, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'幼稚園の時、本気で、絶対、三輪車、絶対、お前と、絶対、レース、絶対、したよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Kindergarten — tricycle you race did, Riku absolute serious really.",style:'Wistful.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、小さい頃の、絶対、面影、絶対、まだ、絶対、残ってるぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"You — child-trace still remain, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'この街の、本気で、絶対、根強い、絶対、お祭り、絶対、続いてるよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"This-town — devoted festival continue, Riku absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'近所のお寺の、本気で、絶対、坊さん、絶対、お話、絶対、面白いんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Near temple-monk — story fun, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'前回のテスト、本気で、絶対、もっと、絶対、勉強、絶対、しておけば、絶対、よかったって、絶対、悔い、絶対、残ってるよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Last test — more-study-shoulda regret remain, Riku absolute serious really.",style:'Wry.'},
    {speaker:'riku_teen',jp:'お前の、本気で、絶対、実体験、絶対、俺、絶対、参考にするぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Your real-exp — me reference, Sakura absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07300',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、織り、絶対、家庭科で、絶対、習ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — me weaving home-ec learned, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃんち、本気で、絶対、窓、絶対、格子、絶対、伝統的でしょ?翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Grandpa-home — window lattice trad, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、三輪、絶対、自転車、絶対、もう、絶対、卒業したよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom — me tricycle already-graduated, absolute serious really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃんに、本気で、絶対、お父さんの、絶対、面影、絶対、感じるわよね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Grandpa — Dad-trace feel, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ぼくの好きなアニメ、本気で、絶対、根強い、絶対、人気だよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"My fave anime — devoted pop, Mom absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'近所のお寺の、本気で、絶対、坊さん、絶対、優しい、絶対、方なのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Near temple-monk — kind person, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、もっと、絶対、お祖父ちゃんと、絶対、お話、絶対、しておけば、絶対、よかったって、絶対、悔い、絶対、残ってるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Mom — me more-Grandpa-talk-shoulda regret remain, absolute serious really.",style:'Reflective child.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃんの、本気で、絶対、実体験、絶対、翔くん、絶対、これから、絶対、ゆっくり、絶対、聞きましょうね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Grandpa-real-exp — Sho henceforth slowly hear, absolute serious really.",style:'Tender close.'},
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

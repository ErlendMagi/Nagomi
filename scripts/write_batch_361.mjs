import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_361 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['花屋','満腹','ひく','きのこ','けんか','人参','レタス','貰える']
const B_T = ['連勝','指紋','まっとう','集う','体裁','課し','フランチャイズ','振込み']
const C_T = ['凌','善悪','風刺','訳す','散乱','内需','砦','ノミネート']
const D_T = ['伊達','沸い','問答','贈ら','リスナー','河原','ペダル','バク']

const data = [
  {id:'conv_07181',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、駅前の花屋、本気で、絶対、新しいバラ、絶対、たくさん、本気で、入ってたよ、本気で、絶対、本気、絶対。',en:"Mom — station-front florist, new roses many-in, serious absolute really.",style:'Animated child.'},
    {speaker:'yumiko_mom',jp:'うん。お祖母ちゃんの料理、本気で、絶対、満腹に、絶対、なっちゃうわよね、翔くん、ね、本気で、絶対、本気、絶対、本気で。',en:"Yes. Granny cooking — full-belly, Sho serious absolute really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、風邪、絶対、ひかないように、絶対、手洗い、徹底してるよ、ママ、本気で、絶対、本気、本気で、絶対。',en:"Me — cold absolute don't-catch, hand-wash thorough, Mom serious absolute really.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃんち、本気で、絶対、きのこ、絶対、たくさん、本気で、絶対、採れたって、聞いたわよ、翔くん、本気で、絶対、本気、絶対。',en:"Grandpa's — mushrooms many-harvested heard, Sho serious absolute really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'お友達と、本気で、絶対、けんか、絶対、しないからね、ママ、約束、本気で、絶対、本気、本気で、絶対、本気で、絶対、本気。',en:"Friend — fight absolute-don't, Mom promise absolute serious really.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'ぼくの好きな人参、本気で、絶対、夕食に、絶対、入れたわよ、翔くん、本気で、絶対、楽しみね、本気で、絶対、本気、絶対、絶対。',en:"Sho-fave carrot — dinner-in, Sho fun absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'サラダに、本気で、絶対、レタス、絶対、ふんだんに、本気で、入っていて、嬉しいよ、ママ、絶対、本気で、本気、本気で、絶対、絶対。',en:"Salad — lettuce abundantly-in, glad, Mom absolute serious really.",style:'Cheerful.'},
    {speaker:'yumiko_mom',jp:'お祖母ちゃんから、本気で、絶対、お土産、絶対、貰えるって、翔くん、楽しみね、本気で、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Granny — souv get-able, Sho fun absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07182',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、新しい花屋、本気で、絶対、葵で、特集してもいいかも、メイちゃん、本気で、感心、絶対、本気、本気で、絶対、絶対。',en:"Aoi — new florist Aoi-feature OK?, Mei admire absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。新作のパフェ、本気で、絶対、満腹に、絶対、なっちゃう、メイちゃん、葵で、絶対、味わってみて、本気で、絶対、本気、絶対。',en:"Yeah. New parfait — full-belly, Mei Aoi taste-try absolute serious really.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'最近、本気で、絶対、風邪、絶対、ひかないよう、絶対、葵、手洗い、徹底してるわよね、メイちゃん、感心、本気、絶対、本気で、絶対。',en:"Lately — cold avoid hand-wash thorough Aoi, Mei admire absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'お料理に、本気で、絶対、きのこ、絶対、ふんだんに、絶対、使うことに、メイちゃん、本気で、本気、絶対、葵で、絶対、感謝、本気、絶対。',en:"Cook — mushrooms abundant-use, Mei Aoi gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'最近、本気で、絶対、彼と、絶対、けんか、絶対、してないのよ、葵、メイちゃん、本気で、絶対、平和、本気、絶対、本気で、絶対、絶対。',en:"Lately — with bf no-fight, Aoi Mei peaceful absolute serious really.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'葵のサラダに、本気で、絶対、人参、絶対、新鮮なもの、絶対、使ってるよ、メイちゃん、本気で、絶対、本気、本気で、絶対、本気で。',en:"Aoi-salad — carrot fresh-use, Mei serious absolute really.",style:'Praising.'},
    {speaker:'mei_romantic',jp:'葵で、本気で、絶対、シーザーサラダ、絶対、レタス、絶対、たっぷり、本気で、入っていて、嬉しいわよ、メイちゃん、本気で、絶対、絶対。',en:"Aoi — Caesar-salad lettuce-plenty, glad, Mei serious absolute really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'メイちゃん、本気で、絶対、お土産、絶対、貰える、本気で、絶対、葵で、嬉しい、本気で、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Mei — souv get-able, glad, Aoi serious absolute really.",style:'Warm close.'},
  ]},
  {id:'conv_07183',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、駅前の花屋、本気で、絶対、お母さんが、絶対、よく、本気で、行ってるよ、お前、知ってる?本気で、絶対、本気、絶対、絶対。',en:"Riku — station-florist Mom-often-go, knew?, serious absolute really.",style:'Curious teen.'},
    {speaker:'riku_teen',jp:'うん。給食、本気で、絶対、満腹に、絶対、なって、本気で、絶対、午後、絶対、眠くなるよな、桜、本気で、絶対、共感、本気で、絶対。',en:"Yeah. Lunch — full-belly afternoon-sleepy, Sakura empathy serious absolute really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'最近、本気で、絶対、風邪、絶対、ひかないよう、絶対、お互いに、本気で、気をつけようね、リク、本気で、絶対、約束、本気、絶対。',en:"Lately — cold avoid mutual-careful, Riku promise serious absolute really.",style:'Direction.'},
    {speaker:'riku_teen',jp:'家庭科で、本気で、絶対、きのこ料理、絶対、作ったぞ、桜、お前にも、本気で、絶対、食べてみてほしい、本気で、絶対、本気、絶対、絶対。',en:"Home-ec — mushroom-dish made, Sakura you-eat-try want serious absolute really.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'弟、本気で、絶対、けんか、絶対、しないように、絶対、私、お姉ちゃんとして、本気で、見守ってるよ、リク、本気で、絶対、本気、絶対、絶対。',en:"Bro — fight-avoid as sis-watch, Riku serious absolute really.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'お弁当、本気で、絶対、人参、絶対、好きなんだぜ、桜、お前、知ってる?本気で、絶対、健康、本気、絶対、本気で、絶対、絶対、本気で、絶対。',en:"Lunch — carrot love, Sakura knew?, health absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'文化祭で、本気で、絶対、レタスのサラダ、絶対、出店、絶対、するクラス、リク、お前、行く?本気で、絶対、本気、絶対、本気で、絶対、絶対。',en:"Cult-fest — lettuce-salad stall, Riku go?, serious absolute really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'お父さんから、本気で、絶対、お小遣い、絶対、貰える時、絶対、嬉しいよな、桜、本気で、絶対、本気、絶対、本気で、絶対、絶対、本気で、絶対。',en:"Dad — allowance get-able-time glad, Sakura serious absolute really.",style:'Eager close.'},
  ]},
  {id:'conv_07184',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさん、絶対、お祭りで、絶対、花屋さん、絶対、よく、本気で、行ったよな、覚えてる?本気で、絶対、本気、絶対。',en:"Youth — gran fest-florist often-went, remember?, serious absolute really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。お祖母ちゃんの料理、本気で、絶対、家族、絶対、満腹に、絶対、なったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気で、絶対。',en:"Yes. Granny cooking — family full-belly, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'最近、本気で、絶対、風邪、絶対、ひかないように、絶対、お互いに、本気で、気をつけような、ばあさん、本気で、絶対、約束、本気、絶対、絶対。',en:"Lately — cold avoid mutual-careful, gran promise absolute serious really.",style:'Concerned.'},
    {speaker:'sachiko_grandma',jp:'昔、本気で、絶対、きのこ狩り、絶対、二人で、絶対、よく、本気で、行ったわよね、覚えてる、あなた?本気で、絶対、思い出、本気、絶対、本気で。',en:"Old — mushroom-hunt two often-went, remember dear?, memory absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、私たち、絶対、けんか、絶対、よく、本気で、したよな、ばあさん、覚えてる?今、思うと、本気で、絶対、笑える、本気、絶対。',en:"Youth — us fight often, gran remember?, now-think laughs absolute serious really.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、人参、絶対、苦手だった子供たち、絶対、いたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気で、絶対、絶対、本気。',en:"Youth — carrot-disliking kids, remember dear?, absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、レタス、絶対、まだ、絶対、珍しかった時代、覚えてる?ばあさん、本気で、絶対、本気、絶対、本気で、絶対、絶対、本気で。',en:"Youth — lettuce rare era, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'息子から、本気で、絶対、お土産、絶対、貰える時、絶対、嬉しいわよね、あなた、覚えてる?本気で、絶対、感謝、本気、絶対、本気で、絶対、絶対。',en:"Son — souv get-able-time glad, dear remember?, gratitude absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07185',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、花屋さん、絶対、行ってきたわよ、お土産、絶対、持ってきたからね、本気で、絶対、本気、本気で、絶対。',en:"Sho — Mei-sis florist went, souv brought absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、お腹、絶対、満腹だよ、本当に、絶対、本気、本気で、絶対、感謝、本気で、絶対、絶対、絶対。',en:"Mei-sis — me belly full-belly really absolute gratitude serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'最近、本気で、絶対、風邪、絶対、ひかないように、絶対、翔くん、本気で、絶対、注意してね、約束、本気で、絶対、本気、絶対、絶対、本気で。',en:"Lately — cold avoid Sho careful, promise absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、本気で、絶対、きのこ、絶対、最近、本気で、絶対、好きになったんだ、本気で、絶対、本気、本気で、絶対、絶対、本気、絶対。',en:"Mei-sis — me mushroom lately-like, serious absolute really.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'お友達と、本気で、絶対、けんか、絶対、しないようにね、翔くん、メイ姉さん、絶対、心配してるからね、本気で、絶対、約束、本気、絶対、絶対。',en:"Friend — fight-avoid, Sho Mei-sis worry, promise absolute serious really.",style:'Soft.'},
    {speaker:'sho_child',jp:'メイ姉さんの作る、本気で、絶対、人参のサラダ、絶対、ぼく、絶対、大好きなんだよ、本気で、絶対、本気、本気で、絶対、絶対、本気、絶対、本気で。',en:"Mei-sis-made — carrot-salad love, serious absolute really.",style:'Praising.'},
    {speaker:'mei_romantic',jp:'夕食、本気で、絶対、レタス、絶対、ふんだんに、絶対、入れたわよ、翔くん、メイ姉さん、本気で、絶対、楽しみよ、本気で、絶対、本気、本気で、絶対。',en:"Dinner — lettuce abundant-in, Sho Mei-sis fun absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さんから、本気で、絶対、お土産、絶対、貰える、本気で、絶対、嬉しい、本気で、絶対、感謝、本気、絶対、本気で、絶対、絶対、本気で、絶対。',en:"Mei-sis — souv get-able, glad gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07186',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'業界、本気で、絶対、連勝、絶対、続けていけ、社員、皆、本気で、絶対、頑張れ、絶対、頼んだぞ、本気で、本気、絶対、本気で、絶対。',en:"Industry — win-streak continue, all-staff try, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、指紋認証、絶対、新たに、絶対、導入いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Yes. Our co — fingerprint-auth newly intro, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'まっとうな、本気で、絶対、経営、絶対、当社、貫いていく、本気で、頼んだぞ、絶対、社員、皆、本気で、絶対、本気、絶対、本気で、絶対。',en:"Honest mgmt — our co pierce, ask all-staff serious absolute really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、集う場、絶対、月に、絶対、一回、設けてまいります、本気で、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Yes. Staff — gather-place monthly-set, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'お得意様への、本気で、絶対、体裁、絶対、整えろ、本気で、頼んだぞ、絶対、社員、皆、本気で、絶対、本気、絶対、本気で、絶対、本気、絶対。',en:"VIP — appearance maintain, ask all-staff absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員に、本気で、絶対、目標、絶対、課しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、本気、本気で。',en:"Yes. Staff — goal imposed, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'フランチャイズ展開、本気で、絶対、検討、絶対、進めろ、本気で、頼んだぞ、絶対、本気で、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"Franchise — study advance, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お得意様、本気で、絶対、振込み、絶対、確認いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気。',en:"Yes. VIP — wire-transfer verified, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07187',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'当社、本気で、絶対、連勝、絶対、続けるためにも、社員、皆、本気で、絶対、頑張ろうね、絶対、本気、本気で、絶対、本気で、絶対、本気で、絶対。',en:"Our co — win-streak continue all-staff try, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。指紋認証の導入、本気で、絶対、社員、絶対、安心しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Fingerprint intro — staff relieved, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'まっとうな、本気で、絶対、ビジネス、絶対、心がけていきましょうね、本気で、絶対、社員、皆、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Honest biz — mindful, all-staff absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員集う場、本気で、絶対、社員食堂、絶対、改装、進めてまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Yes. Gather-place — staff-caf refurb advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'お客様への、本気で、絶対、体裁、絶対、保ちましょうね、本気で、絶対、社員、皆、絶対、心がけて、本気、絶対、本気で、絶対、絶対、本気で。',en:"Cust — appearance keep, all-staff mindful absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新人に、本気で、絶対、ミッション、絶対、課しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気。',en:"Yes. Newbie — mission imposed, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'フランチャイズの拡大、本気で、絶対、検討中ですよね、絶対、楽しみよ、本気、本気で、絶対、本気で、絶対、絶対、本気、本気で、絶対、絶対。',en:"Franchise expand — studying, fun absolute serious really.",style:'Eager.'},
    {speaker:'kenji_office',jp:'はい。月末の振込み、本気で、絶対、ミスなく、絶対、確認、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Yes. Month-end transfer — no-error verify thorough, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07188',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究、本気で、絶対、連勝の勢いで、絶対、進めろ、本気で、頼んだぞ、絶対、本気で、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Ren — research win-streak momentum advance, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。実験室の指紋認証、本気で、絶対、便利、絶対、感じております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Lab fingerprint convenient feel, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'まっとうな、本気で、絶対、研究、絶対、貫いていけ、本気で、頼んだぞ、絶対、本気で、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、本気。',en:"Honest research — pierce, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究者、本気で、絶対、集う場、絶対、学会、絶対、参加してまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Yes. Researchers — gather-place conf-attend, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'論文の体裁、本気で、絶対、しっかり、絶対、整えろ、本気で、頼んだぞ、絶対、本気で、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、本気。',en:"Paper appearance — properly maintain, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。先生から、本気で、絶対、課題、絶対、課していただきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気。',en:"Yes. From-prof — task imposed permit, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'研究、本気で、絶対、フランチャイズ展開、絶対、応用研究、絶対、可能性、考えろ、本気で、頼んだぞ、絶対、本気で、絶対、本気、絶対、絶対。',en:"Research — franchise applied possibility consider, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究費の振込み、本気で、絶対、確認、絶対、徹底してまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気。',en:"Yes. Research-fund transfer — verify thorough, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07189',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、連勝の勢いで、絶対、犯罪、絶対、解決、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Police — win-streak crime-resolve advance, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。現場、本気で、絶対、指紋、絶対、採取、絶対、進めて、警察、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気。',en:"Yes. Site — fingerprint-collect advance, police-gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'まっとうな、本気で、絶対、市民、絶対、警察、絶対、応援してくださっております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Honest citizens — police-cheer, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。地域、本気で、絶対、住民、絶対、集う場、絶対、警察、絶対、見守ってくださってますね、本気で、感謝、絶対、本気、絶対、本気、絶対、絶対。',en:"Yes. Region — resident-gather-place police-watch, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、市民の体裁、絶対、保てるよう、絶対、慎重に、本気で、対応、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、絶対。',en:"Police — citizen-appearance keep careful-resp advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、警察、絶対、要請、絶対、課された業務、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Yes. Our co — police-req imposed-biz advance, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、フランチャイズ防犯、絶対、店舗、絶対、見守ってまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Police — franchise crime-prev stores-watch, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察に、本気で、絶対、寄付、絶対、振込み、絶対、進めてまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Police — donation transfer advance, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07190',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、当社、絶対、連勝の勢いで、絶対、業界、絶対、上り詰めたぞ、お父さん、本気で、頼んだぞ、絶対、本気、絶対、絶対、本気。',en:"Founding — our co win-streak industry-rose, Dad ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、指紋、絶対、管理、絶対、こだわってきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Yes. Since Dad-era — fingerprint-mgmt insist, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'まっとうな、本気で、絶対、経営、絶対、お父さんの代から、絶対、貫いてきたぞ、お前にも、本気で、頼んだぞ、絶対、本気、絶対、本気で、絶対、絶対。',en:"Honest mgmt — since Dad-era pierced, you ask absolute serious really.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。創業者の、本気で、絶対、集う場、絶対、社員、絶対、大事にしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Founder gather-place — staff-treasure, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'創業時、本気で、絶対、お得意様への、絶対、体裁、絶対、お父さん、本気で、こだわったぞ、お前にも、本気で、頼んだぞ、絶対、本気、絶対、絶対。',en:"Founding — VIP appearance Dad insisted, you ask absolute serious really.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんから、本気で、絶対、私、絶対、使命、絶対、課されておりますよ、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. From-Dad — me mission imposed, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、フランチャイズ、絶対、構想、絶対、お父さん、温めていたぞ、お前にも、本気で、頼んだぞ、絶対、本気、絶対、本気で、絶対、絶対。',en:"Founding — franchise concept Dad-nurtured, you ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんへの、本気で、絶対、感謝、絶対、振込みでは、絶対、表せない、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. To-Dad gratitude — transfer can't-express, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07191',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、警察、本気で、絶対、競合組織を、絶対、凌駕する、絶対、捜査力、本気で、進めております、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Case — police rival-org-surpass inv-power advance, absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'善悪の判断、本気で、絶対、警察、絶対、慎重に、絶対、見極めていらっしゃいますよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Good-evil judgment — police careful discern, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、本気で、絶対、社会風刺、絶対、漫画家でした、本気で、複雑な、絶対、背景、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Yes. Suspect — soc-satire cartoonist was, complex bg gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察、本気で、絶対、海外の、絶対、文献、絶対、訳す、絶対、能力、必要ですよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Police — overseas-doc translate ability needed, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。証拠品、本気で、絶対、散乱、絶対、状態で、絶対、発見されました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Evidence — scattered-state discovered, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'内需と犯罪、本気で、絶対、関連、絶対、ありますよね、警察、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対。',en:"Domestic-demand crime-link exists, police-gratitude absolute serious really.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'地域防犯の砦、本気で、絶対、警察、絶対、市民、絶対、守ってまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Local crime-prev fortress — police citizen-guard, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者、本気で、絶対、過去、絶対、芸術賞、絶対、ノミネートされた人物、本気で、複雑な、絶対、背景、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Suspect — past art-award nominated, complex bg gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07192',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses historical research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、戦時、本気で、絶対、敵を、絶対、凌駕する、絶対、技術、論文で、扱っていましたね、本気で、立派、絶対、本気、絶対、本気、絶対、本気で。',en:"Ren — wartime enemy-surpass tech paper-handled, splendid absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。戦時、本気で、絶対、善悪の判断、絶対、複雑な、絶対、時代、論文で、扱いました、本気で、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で。',en:"Yes. Wartime — good-evil judgment complex era, paper-handled, deep research absolute gratitude.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、政府を、絶対、風刺、絶対、芸術家、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、感心、絶対、本気で。',en:"Wartime — gov-satire artists paper-handled, view broad splendid admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。戦時、本気で、絶対、海外の文献、絶対、訳す、絶対、活動、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対。',en:"Yes. Wartime — overseas-doc translate-activity paper-handled, deep research absolute gratitude.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、街、絶対、散乱した、絶対、人々の生活、論文で、扱っていましたね、本気で、本当に、辛い歴史、絶対、立派、絶対、感心、絶対、絶対。',en:"Wartime — town scattered-life paper-handled, hard hist splendid admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。戦時、本気で、絶対、内需、絶対、低下、論文で、扱いました、本気で、本当に、社会問題、絶対、本気、感謝、絶対、本気、絶対、本気で、絶対、絶対。',en:"Yes. Wartime — domestic-demand decline paper-handled, soc-issue absolute gratitude serious really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、地域、絶対、砦、絶対、なった集落、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気。',en:"Wartime — region-fortress villages paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。戦時、本気で、絶対、平和賞、絶対、ノミネート、絶対、文豪、論文で、扱いました、本気で、本当に、感心、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Yes. Wartime — peace-prize-nominated lit-giant paper-handled, admire absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07193',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、新薬、本気で、絶対、既存薬を、絶対、凌駕する、絶対、効果、本気で、進歩、しております、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Ren — new drug existing-surpass effect progress, absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'医療の善悪、本気で、絶対、現代、絶対、難しい、絶対、議論、ですよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Med good-evil — modern hard discussion, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。医療を、本気で、絶対、風刺、絶対、する作品、絶対、最近、増えてますね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Med — satire works lately-increase, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'海外の医療文献、本気で、絶対、訳す、絶対、作業、医療界、絶対、進めていらっしゃいますね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Overseas med-lit — translate work med-world advancing, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。医療現場、本気で、絶対、書類、絶対、散乱する状況、絶対、整理、必要ですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Yes. Med-site — docs scattered-state organize needed, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'医療と内需、本気で、絶対、関係、絶対、深いですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、本気、絶対、本気で、絶対。',en:"Med-domestic-demand — rel deep, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。地域医療の砦、本気で、絶対、私たち、絶対、守ってまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Yes. Local-med fortress — we guard, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療研究、本気で、絶対、国際賞、絶対、ノミネート、絶対、可能性、ですよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Med-research — int-prize nomination possible, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07194',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp strategy',lines:[
    {speaker:'hiroshi_boss',jp:'業界の競合、本気で、絶対、凌駕する、絶対、製品、絶対、目指せ、本気で、頼んだぞ、絶対、本気で、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"Industry rival — surpass product aim, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、善悪、絶対、判断、絶対、徹底させております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気。',en:"Yes. Staff — good-evil judgment thorough, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'業界を、本気で、絶対、風刺する、絶対、報道、絶対、当社、絶対、対応していけ、本気で、頼んだぞ、絶対、本気で、絶対、本気、絶対、本気で、絶対、絶対。',en:"Industry-satire reports — our co-resp, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。海外の契約書、本気で、絶対、訳す、絶対、社員、絶対、配置しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Overseas-contract translate — staff placed, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'倉庫、本気で、絶対、商品、絶対、散乱、絶対、しないよう、整理、徹底させろ、本気で、頼んだぞ、絶対、本気で、絶対、本気、本気で、絶対、絶対、絶対。',en:"Warehouse — product-scatter avoid organize, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。内需の動向、本気で、絶対、当社、絶対、注視しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、本気、絶対、絶対。',en:"Yes. Domestic-demand trend — our co watching, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界の砦、本気で、絶対、当社、絶対、目指せ、本気で、頼んだぞ、絶対、本気で、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、本気で、絶対。',en:"Industry fortress — our co aim, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新製品、本気で、絶対、業界賞、絶対、ノミネート、絶対、目指してまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. New product — industry-award-nominate aim, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07195',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、戦時、本気で、絶対、敵を、絶対、凌駕する、絶対、戦略、論文で、扱っていましたね、本気で、立派、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Sakura — wartime enemy-surpass strat paper-handled, splendid absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。戦時、本気で、絶対、善悪の境、絶対、曖昧、絶対、になっていく時代、論文で、扱いました、本気で、深い、研究、絶対、感謝、本気、絶対、本気、絶対。',en:"Yes. Wartime — good-evil-line blur era, paper-handled, deep research absolute gratitude.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、政府を、絶対、風刺、絶対、ジャーナリスト、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、感心、絶対。',en:"Wartime — gov-satire journalists paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦時、本気で、絶対、敵国の文献、絶対、訳す、絶対、活動、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で。',en:"Yes. Wartime — enemy-doc translate paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、家、絶対、散乱した、絶対、街、論文で、扱っていましたね、本気で、本当に、辛い歴史、絶対、立派、絶対、感心、絶対、本気で、絶対、絶対。',en:"Wartime — house-scattered town paper-handled, hard hist splendid admire absolute really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。戦時、本気で、絶対、内需、絶対、激減、論文で、扱いました、本気で、本当に、社会問題、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、本気。',en:"Yes. Wartime — domestic-demand crash paper-handled, soc-issue absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、最後の砦、絶対、なった、絶対、地域、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対。',en:"Wartime — last-fortress regions paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦時、本気で、絶対、平和賞、絶対、ノミネート、絶対、活動家、論文で、扱いました、本気で、本当に、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Yes. Wartime — peace-prize-nominated activists paper-handled, admire absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07196',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、伊達メガネ、絶対、お洒落、絶対、流行ってるよね、メイちゃん、本気で、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Aoi — fake-glasses stylish-trend, Mei admire serious absolute really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵のお客様、本気で、絶対、新作で、絶対、沸いてるよ、メイちゃん、葵で、本気で、絶対、嬉しい、本気で、本気、絶対、本気で、絶対、絶対。',en:"Yeah. Aoi-cust — new-product boiling, Mei Aoi glad serious absolute really.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、問答、絶対、無用で、彼、絶対、優しいのよ、メイちゃん、本気で、絶対、感謝、本気、絶対、本気で、絶対、絶対、本気で、絶対。',en:"Aoi — without-question bf kind, Mei gratitude absolute serious really.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'お客様から、本気で、絶対、お花、絶対、贈られたのよ、葵で、メイちゃん、本気で、絶対、感激、絶対、本気、絶対、本気で、絶対、絶対、本気で、絶対。',en:"Cust — flowers received, Aoi Mei moved absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、ラジオのリスナー、絶対、増えてるって、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、本気で、絶対。',en:"Aoi — radio-listeners increasing, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'河原で、本気で、絶対、ピクニック、絶対、彼と、絶対、行ったって、葵、メイちゃん、本気で、絶対、ロマンチック、本気、絶対、本気で、絶対、絶対、本気で。',en:"Riverside — picnic with-bf went, Aoi Mei romantic absolute serious really.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'彼、本気で、絶対、自転車のペダル、絶対、漕ぐの、絶対、得意なのよ、葵、メイちゃん、本気で、絶対、感心、絶対、本気、絶対、本気で、絶対、絶対、本気で。',en:"Bf — bike-pedal good, Aoi Mei admire absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'動物園で、本気で、絶対、バク、絶対、見たわよ、メイちゃん、葵で、本気で、絶対、可愛い、絶対、本気、本気で、絶対、本気で、絶対、絶対、本気で、絶対。',en:"Zoo — tapir saw, Mei Aoi cute absolute serious really.",style:'Cheerful close.'},
  ]},
  {id:'conv_07197',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お父さん、本気で、絶対、伊達メガネ、絶対、買ってきたよ、本気で、絶対、お洒落、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"Mom — Dad fake-glasses bought, stylish absolute serious really.",style:'Animated child.'},
    {speaker:'yumiko_mom',jp:'うん。お湯、本気で、絶対、ヤカンで、絶対、沸いたわよ、翔くん、お茶、絶対、入れましょうね、本気で、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Yes. Water — kettle-boiled, Sho tea-make, serious absolute really.",style:'Soft.'},
    {speaker:'sho_child',jp:'お父さん、本気で、絶対、問答、絶対、無用で、ぼくに、絶対、優しいんだよ、ママ、本気で、絶対、感謝、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Dad — without-question me kind, Mom gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'お祖母ちゃんから、本気で、絶対、お土産、絶対、贈られたわよ、翔くん、本気で、絶対、感謝、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、本気。',en:"Granny — souv received, Sho gratitude absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'お父さん、本気で、絶対、ラジオの、絶対、リスナー、絶対、なんだよね、ママ、本気で、絶対、本気、絶対、本気で、絶対、絶対、本気で、絶対、絶対、本気。',en:"Dad — radio-listener, Mom absolute serious really.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'公園の河原、本気で、絶対、家族で、絶対、ピクニック、絶対、行きましょうね、翔くん、本気で、絶対、楽しみ、本気、絶対、本気で、絶対、絶対、本気で、絶対。',en:"Park-riverside — family picnic-go, Sho fun absolute serious really.",style:'Bright.'},
    {speaker:'sho_child',jp:'自転車のペダル、本気で、絶対、ぼく、絶対、もっと、絶対、上手に、漕ぎたいよ、ママ、本気で、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、本気。',en:"Bike-pedal — me more pedal-want, Mom absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'動物園、本気で、絶対、バク、絶対、家族で、絶対、見に行きたいわね、翔くん、本気で、絶対、楽しみ、本気、絶対、本気で、絶対、絶対、本気で、絶対、絶対。',en:"Zoo — tapir family-see-go, Sho fun absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07198',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、本気で、絶対、伊達メガネ、絶対、似合うよね、お前、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、本気で、絶対、絶対。',en:"Riku — fake-glasses suit, admire absolute serious really.",style:'Praising teen.'},
    {speaker:'riku_teen',jp:'うん。試合、本気で、絶対、ファンが、絶対、沸いた、絶対、瞬間、桜、お前にも、絶対、見てほしかった、本気で、絶対、本気、絶対、本気で、絶対、絶対。',en:"Yeah. Match — fans-boiled moment, Sakura you-see-want, serious absolute really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'お父さん、本気で、絶対、問答、絶対、無用で、絶対、家族、絶対、守ってくれる、本気で、絶対、感謝、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"Dad — without-question family-guard, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お祖父ちゃんから、本気で、絶対、お小遣い、絶対、贈られた、絶対、嬉しいよ、桜、お互いに、本気で、絶対、感謝、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Grandpa — allowance received, glad, Sakura mutual-gratitude absolute serious really.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、ラジオの、絶対、リスナー、絶対、なんだよね、リク、私、本気で、絶対、興味、本気、本気で、絶対、本気で、絶対、絶対、本気で、絶対。',en:"You — radio-listener, Riku me interest serious absolute really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'河原で、本気で、絶対、お互いに、絶対、語り合う、絶対、時間、桜、本気で、絶対、好きだぜ、本気、本気で、絶対、本気で、絶対、絶対、本気で、絶対、絶対。',en:"Riverside — mutual-talk time, Sakura love absolute serious really.",style:'Soft.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、自転車のペダル、絶対、漕ぐの、絶対、本当に、絶対、速いよね、リク、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対。',en:"You — bike-pedal fast, Riku admire absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'動物園で、本気で、絶対、バク、絶対、初めて、絶対、見た時、感動したぜ、桜、お前と、絶対、本気、本気で、絶対、本気で、絶対、絶対、本気で、絶対、絶対。',en:"Zoo — tapir first-saw moved, Sakura with-you absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07199',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、伊達メガネ、絶対、流行ったわよな、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、本気で、絶対。',en:"Youth — fake-glasses trended, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、お祭りで、絶対、観客、絶対、沸いた、絶対、思い出、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Yes. Youth — fest, audience boiled-memory, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、問答、絶対、無用、絶対、お父さん、絶対、男気あったよな、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で。',en:"Youth — without-question Dad-masculine, gran remember?, absolute serious really.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃんから、絶対、結婚指輪、絶対、贈られた、絶対、嬉しい、絶対、思い出、覚えてる、あなた?本気で、絶対、本気、絶対、本気で。',en:"Youth — Grandpa wed-ring received glad memory, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お祖母ちゃん、本気で、絶対、ラジオの、絶対、リスナー、絶対、ね、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、本気で。',en:"Granny — radio-listener, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、河原で、絶対、二人で、絶対、デート、絶対、したわよね、覚えてる、あなた?本気で、絶対、思い出、本気、絶対、本気、絶対、本気で、絶対。',en:"Youth — riverside two-dated, remember dear?, memory absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、私、絶対、自転車のペダル、絶対、よく、漕いだわよな、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Youth — me bike-pedal often-pedaled, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、家族で、絶対、動物園、絶対、バクを、絶対、見た、覚えてる、あなた?本気で、絶対、思い出、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Youth — family zoo tapir-saw, remember dear?, memory absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07200',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、お客さん、本気で、絶対、伊達メガネ、絶対、結構、本気で、絶対、かけてはるな、本気で、絶対、本気、絶対、本気で、絶対、絶対、本気で、絶対。',en:"Aoi — cust fake-glasses quite-wearing, absolute serious really.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。新メニューで、本気で、絶対、お客様、絶対、沸いてくださいそう、葵で、本気で、絶対、絶対、楽しみ、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"Yes. New menu — cust boil-likely, Aoi fun absolute serious really.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'葵さん、お客さんが、本気で、絶対、問答、絶対、無用で、絶対、葵を、絶対、愛してくれてはるって、本気で、絶対、感謝、絶対、本気、絶対、本気、絶対、絶対。',en:"Aoi — cust without-question Aoi-love, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。お客様から、本気で、絶対、お花、絶対、贈られた、絶対、嬉しい瞬間、葵で、本気で、絶対、感謝、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Cust — flowers received glad-moment, Aoi gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'daichi_kansai',jp:'葵さん、本気で、絶対、ラジオのリスナー、絶対、お客様、絶対、増やしていく、絶対、企画、本気で、絶対、進めよか、本気、絶対、本気で、絶対、絶対、絶対、本気。',en:"Aoi — radio-listener cust increase plan advance, absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。河原で、本気で、絶対、ピクニック、絶対、お客様、絶対、企画、絶対、葵で、お招きできたら、嬉しいですね、本気、絶対、本気で、絶対、絶対、本気で、絶対。',en:"Yes. Riverside — picnic cust plan Aoi-invite glad, absolute serious really.",style:'Eager.'},
    {speaker:'daichi_kansai',jp:'葵さん、本気で、絶対、自転車のペダル、絶対、漕いで、配達、絶対、本気で、絶対、続けてまいります、本気、絶対、本気で、絶対、絶対、本気で、絶対、絶対、本気。',en:"Aoi — bike-pedal pedal delivery continue, absolute serious really.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'はい。動物園、本気で、絶対、バクの絵を、絶対、お子様向け、メニュー、本気で、絶対、デザイン、絶対、加えませんか、本気、本気で、絶対、本気で、絶対、絶対。',en:"Yes. Zoo — tapir-art kid-menu design add?, absolute serious really.",style:'Warm close.'},
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

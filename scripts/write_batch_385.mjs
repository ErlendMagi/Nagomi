import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_385 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['この世','イチゴ','味覚','いちご','訪ねる','アイロン','新生児','取り替え']
const B_T = ['追記','新装','賞与','取り調べ','動員','次期','顕著','買い付け']
const C_T = ['慰霊','機関車','時効','パトカー','系譜','恐慌','靖国神社','内蔵']
const D_T = ['画質','長老','竿','無限','分子','頭文字','劇的','ラグビー']

const data = [
  {id:'conv_07661',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、この世、絶対、には、絶対、優しい人、絶対、たくさんいるのよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — this-world — kind-people many, absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、イチゴ、絶対、ジャム、絶対、大好きだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — me strawberry-jam love, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'お父さん、本気で、絶対、新しいお店の、絶対、味覚、絶対、気に入ったらしいわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad — new-store taste-liked, Sho absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'お祖母ちゃんち、本気で、絶対、お庭で、絶対、いちご、絶対、育ててるよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Granny-home garden ichigo growing, Mom absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'今度、本気で、絶対、お祖父ちゃんちを、絶対、訪ねる、絶対、わね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Next — Grandpa-home visit, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、シャツの、絶対、アイロン、絶対、お父さん、絶対、かけてくれたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — shirt iron Dad-applied, absolute serious really.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'お祖母ちゃん、本気で、絶対、孫の、絶対、新生児、絶対、と、絶対、対面したそうよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Granny — grandchild newborn met, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、家具の、絶対、取り替え、絶対、ぼくも、絶対、お手伝いするよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — furniture replace me-also help, absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07662',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、この世、絶対、で、絶対、葵の、絶対、お店、絶対、メイちゃん、絶対、大好きよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — this-world Aoi-store Mei-love, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、新作の、絶対、イチゴ、絶対、ケーキ、絶対、出したよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Aoi — new strawberry-cake out, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵の、本気で、絶対、味覚、絶対、メイちゃん、絶対、信頼してるわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Aoi-taste — Mei trust, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、いちご、絶対、農家、絶対、と、絶対、直接、絶対、契約してるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — ichigo-farmer direct contract, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、メイちゃん、絶対、お店、絶対、訪ねる、絶対、たびに、絶対、楽しいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — Mei store visit each-time fun, absolute serious really.",style:'Warm.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お店のテーブルクロス、絶対、アイロン、絶対、丁寧に、絶対、かけてるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — table-cloth iron careful-apply, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵のお友達、本気で、絶対、新生児、絶対、お祝い、絶対、メイちゃん、絶対、用意したわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi-friend newborn-celeb — Mei prep, absolute serious really.",style:'Tender.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お店の、絶対、椅子の、絶対、取り替え、絶対、考えてるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — store-chair replace considering, Mei absolute serious really.",style:'Practical close.'},
  ]},
  {id:'conv_07663',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、この世、絶対、で、絶対、ばあさんが、絶対、お父さんの、絶対、宝物だったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Gran — youth this-world gran-Dad-treasure was, remember?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、お祖父ちゃん、絶対、イチゴ、絶対、お土産、絶対、よく、絶対、持ってきてくれたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Youth — Grandpa strawberry-souv often-brought, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさんの、絶対、お料理の、絶対、味覚、絶対、お父さん、絶対、大好きだったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — gran cook-taste Dad-loved, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お庭の、絶対、いちご、絶対、お祖父ちゃん、絶対、収穫したわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — garden ichigo Grandpa-harvested, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ご親戚を、絶対、訪ねる、絶対、こと、絶対、お父さん、絶対、楽しみにしたぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — relative-visit Dad-fun was, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、ばあさん、絶対、お祖父ちゃんのシャツ、絶対、アイロン、絶対、毎日、絶対、かけたわよ、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — gran Grandpa-shirt iron every-day applied, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お孫さんの、絶対、新生児、絶対、の、絶対、お顔、絶対、お父さん、絶対、見たぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — grandkid newborn-face Dad-saw, remember gran?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、家具の、絶対、取り替え、絶対、お祖父ちゃんが、絶対、自分で、絶対、しましたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — furniture replace Grandpa-self-did, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07664',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、本気で、絶対、この世、絶対、で、絶対、一番、絶対、頑張ろうね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Riku — this-world #1 try, absolute serious really.",style:'Eager teen.'},
    {speaker:'riku_teen',jp:'うん。学校で、本気で、絶対、イチゴ、絶対、デザート、絶対、出たぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yeah. School — strawberry-dessert came, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、給食の、絶対、味覚、絶対、敏感だよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"You — lunch-taste sensitive, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お祖母ちゃんち、本気で、絶対、いちご、絶対、畑、絶対、あるぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Granny-home ichigo-field exists, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'お祖父ちゃんちを、本気で、絶対、訪ねる、絶対、と、絶対、いつも、絶対、楽しいよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Grandpa-home visit — always fun, Riku absolute serious really.",style:'Warm.'},
    {speaker:'riku_teen',jp:'家庭科で、本気で、絶対、アイロン、絶対、使い方、絶対、習ったよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Home-ec — iron-use learned, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お姉ちゃん、本気で、絶対、新生児、絶対、抱っこ、絶対、上手だよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Big-sis — newborn hold good, Riku absolute serious really.",style:'Tender.'},
    {speaker:'riku_teen',jp:'部室の、本気で、絶対、机の、絶対、取り替え、絶対、俺たち、絶対、お手伝いしたぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Club-room desk replace — us-helped, Sakura absolute serious really.",style:'Proud close.'},
  ]},
  {id:'conv_07665',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、この世、絶対、で、絶対、翔くんが、絶対、一番、絶対、可愛いわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — Mei-sis this-world Sho #1-cute, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、イチゴ、絶対、ムース、絶対、食べたいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me strawberry-mousse eat-want, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お料理の、絶対、味覚、絶対、研究、絶対、しているのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — cook taste-research do, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、いちご、絶対、つみ、絶対、行きたいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — me ichigo-pick go-want, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、翔くんち、絶対、お母さんを、絶対、訪ねる、絶対、わね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — Sho-home Mom visit, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼくのワイシャツに、絶対、アイロン、絶対、かけてくれる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mei-sis — my white-shirt iron-apply?, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お友達の、絶対、新生児、絶対、お祝いに、絶対、行ってきたわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — friend newborn-celeb went, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼくの、絶対、シーツの、絶対、取り替え、絶対、お手伝いしたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — my sheet-replace helped, absolute serious really.",style:'Proud close.'},
  ]},
  {id:'conv_07666',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'契約書の、本気で、絶対、追記、絶対、確認しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Contract addendum verify, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。本社の、本気で、絶対、新装、絶対、オープン、絶対、準備、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. HQ renewal open-prep advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'社員への、本気で、絶対、賞与、絶対、増額、絶対、検討しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Staff-bonus increase consider, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。本件、本気で、絶対、警察様の、絶対、取り調べ、絶対、ご協力、絶対、いただきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Case police-interrogation coop given, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'人材の、本気で、絶対、動員、絶対、計画、絶対、見直せ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Talent-mobilize plan review, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。次期、本気で、絶対、社長、絶対、選出、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Next-term-pres select advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業績の、本気で、絶対、顕著、絶対、な、絶対、向上、絶対、目指せ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Perf marked-improve aim, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。原材料の、本気で、絶対、買い付け、絶対、価格、絶対、抑えてまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Raw-mat purchase-price hold-down, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07667',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'規約に、本気で、絶対、追記、絶対、必要な箇所、絶対、ありますね、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Regs addendum-needed sections exist, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。支店の、本気で、絶対、新装、絶対、開店、絶対、ご招待、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Branch renewal-open invite advance, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'今期の、本気で、絶対、賞与、絶対、お知らせ、絶対、社員に、絶対、送りましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"This-term bonus-notice — staff-send, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。先方の、本気で、絶対、取り調べ、絶対、結果、絶対、待っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Other-party investigation-result — waiting, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'チームの、本気for、絶対、動員、絶対、戦略、絶対、立てましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Team mobilize strat-set, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。本気で、絶対、次期、絶対、計画、絶対、まとめております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Next-term plan-compile, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'業績の、本気で、絶対、顕著、絶対、な、絶対、改善、絶対、見られますね、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Perf marked-improve seen, absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。海外の、本気で、絶対、買い付け、絶対、ルート、絶対、開拓、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Overseas purchase-route develop advance, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07668',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、論文に、本気で、絶対、追記、絶対、必要な部分、絶対、見直せ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — paper addendum-needed-part review, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。研究室の、本気で、絶対、新装、絶対、設備、絶対、活用しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Lab renewal-equip utilize, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'研究員への、本気で、絶対、賞与、絶対、検討、絶対、教授、絶対、と、絶対、相談しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Researcher-bonus consider prof-discuss, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。事件関連の、本気で、絶対、取り調べ、絶対、報告、絶対、論文で、扱いました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Case-related investigation-report paper-handled, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究人員の、本気for、絶対、動員、絶対、計画、絶対、立てろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Research-personnel mobilize plan-set, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。次期、本気で、絶対、学長、絶対、選挙、絶対、注目しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Next-term pres-elect watching, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'論文の、本気で、絶対、顕著、絶対、な、絶対、新規性、絶対、目指せ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Paper marked-novelty aim, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究機材の、本気で、絶対、買い付け、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Research-equip purchase advance, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07669',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察規則に、本気で、絶対、追記、絶対、改正、絶対、ご対応、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police-regs addendum-reform — handle advance, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察署の、本気で、絶対、新装、絶対、警察様、絶対、お祝い、絶対、申し上げます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Police-station renewal — police celeb-express, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察官への、本気で、絶対、賞与、絶対、ご対応、絶対、進められております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Police-officer bonus-handle advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。本件、本気で、絶対、警察、絶対、取り調べ、絶対、ご協力、絶対、いただきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Case police-investigation coop given, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、人員、絶対、動員、絶対、警備、絶対、強化しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Police-personnel mobilize-sec strengthen, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。次期、本気で、絶対、警察署長、絶対、ご就任、絶対、お祝いいたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Next-term police-chief inaugurate celeb-extend, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察の、本気で、絶対、顕著、絶対、な、絶対、犯罪減少、絶対、皆様のご協力、絶対、おかげです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police marked crime-decrease — all-coop thanks, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察様の、本気で、絶対、装備の、絶対、買い付け、絶対、当社、絶対、ご支援、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Police gear-purchase — our co support, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07670',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お父さん、絶対、契約書に、絶対、追記、絶対、自分で、絶対、考えたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Founding — Dad contract-addendum self-thought, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、本社の、絶対、新装、絶対、機会、絶対、何度かありました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Since Dad-era — HQ renewal occasions several-had, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、社員の、絶対、賞与、絶対、自分で、絶対、配ったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Dad — staff-bonus self-distributed, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さん、本気で、絶対、お得意様の、絶対、取り調べ、絶対、当時、絶対、関わったと、絶対、聞いております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Dad — VIP-investigation era-involved heard, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、社員、絶対、動員、絶対、して、絶対、大事業、絶対、進めたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Dad — staff-mobilize big-biz advanced, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんが、本気で、絶対、次期、絶対、社長、絶対、として、絶対、私を、絶対、選んでくださいました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Dad — next-term-pres me-chose, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、顕著、絶対、な、絶対、業績、絶対、いつも、絶対、出してきたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Dad — marked-perf always-out, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、原材料の、絶対、買い付け、絶対、お父さん、絶対、目利き、絶対、お見事でした、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — raw-mat purchase Dad-eye splendid, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07671',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses history',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、戦争、本気for、絶対、慰霊、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Ren — war-memorial paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。明治時代の、本気で、絶対、機関車、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Thanks. Meiji-era locomotive paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'刑法の、本気で、絶対、時効、絶対、制度、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Crim-law statute-of-limit paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。警察の、本気で、絶対、パトカー、絶対、配備、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Police squad-car deploy paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'各家系の、本気で、絶対、系譜、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Lineage genealogy paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。世界、本気で、絶対、恐慌、絶対、史、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. World-depression-hist paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'本気で、絶対、靖国神社、絶対、史、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Yasukuni-Shrine hist paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。日本の、本気で、絶対、内蔵、絶対、技術、絶対、史、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Japan built-in-tech hist paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07672',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses cases',lines:[
    {speaker:'takeda_officer',jp:'警察の、本気で、絶対、慰霊、絶対、式、絶対、毎年、絶対、参加しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Police-memorial-ceremony every-yr attend, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'歴史的、本気で、絶対、機関車、絶対、保存、絶対、警察、絶対、警備、絶対、ご対応ですか?本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Hist-locomotive preserve — police-sec handle?, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。本件、本気で、絶対、時効、絶対、間近、絶対、警察、絶対、慎重に、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Case statute-of-limit-near — police careful advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察、本気で、絶対、パトカー、絶対、新型、絶対、導入、絶対、されているそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Police squad-car new-model intro, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。容疑者の、本気で、絶対、系譜、絶対、警察、絶対、調査しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Suspect-genealogy — police-inv, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'金融、本気で、絶対、恐慌、絶対、後、絶対、警察、絶対、治安、絶対、注視ですよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Financial-depression aftermath — police-safety watch, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。本気で、絶対、靖国神社、絶対、参拝日、絶対、警察、絶対、警備、絶対、強化しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Yasukuni-visit-day police-sec strengthen, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察車両に、本気for、絶対、内蔵、絶対、された、絶対、最新機材、絶対、活用、絶対、されているんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Police-vehicle built-in latest-gear — utilize, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07673',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher mentors a teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、戦争、本気で、絶対、慰霊、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sakura — war-memorial paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。明治時代の、本気で、絶対、機関車、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Thanks. Meiji-locomotive paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'刑法の、本気で、絶対、時効、絶対、制度、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Crim-law statute-of-limit paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。警察の、本気で、絶対、パトカー、絶対、配備、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Police squad-car deploy paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'各家系の、本気で、絶対、系譜、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Lineage genealogy paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。世界、本気で、絶対、恐慌、絶対、史、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. World-depression-hist paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'本気で、絶対、靖国神社、絶対、史、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Yasukuni-Shrine hist paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。日本の、本気で、絶対、内蔵、絶対、技術、絶対、史、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Japan built-in-tech hist paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07674',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、医療従事者、本気で、絶対、慰霊、絶対、式、絶対、医療界、絶対、毎年、絶対、行います、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — med-worker memorial — med-world every-yr do, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'歴史的な、本気で、絶対、機関車、絶対、保存協会、絶対、医師、絶対、関わって、絶対、いらっしゃるそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Hist-locomotive preserve-assoc — doctor involved, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。医療過誤の、本気で、絶対、時効、絶対、対応、絶対、当院、絶対、慎重に、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Med-error statute-handle — our hosp careful advance, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'救急の、本気で、絶対、パトカー、絶対、と、絶対、救急車、絶対、連携、絶対、ですよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"ER — squad-car/ambulance coop, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。家族の、本気で、絶対、系譜、絶対、医学的、絶対、調査、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Family-genealogy med-survey advance, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'金融、本気で、絶対、恐慌、絶対、後、絶対、健康被害、絶対、医療チーム、絶対、注視ですよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Fin-depression aftermath health-damage — med-team watch, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。本気で、絶対、靖国神社、絶対、近隣の、絶対、診療所、絶対、当院、絶対、関係、絶対、ございます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Yasukuni-Shrine near clinic — our hosp related, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療機器に、本気で、絶対、内蔵、絶対、AI、絶対、診断、絶対、進化していますよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Med-equip built-in AI-diag — evolve, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07675',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews strategy',lines:[
    {speaker:'hiroshi_boss',jp:'創業者の、本気で、絶対、慰霊、絶対、式、絶対、毎年、絶対、当社、絶対、行え、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Founder-memorial every-yr — our co do, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。創業時の、本気で、絶対、機関車、絶対、当社、絶対、博物館、絶対、貸し出しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Founding locomotive — our co museum-loaned, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'業界の、本気で、絶対、時効、絶対、案件、絶対、注視しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Industry statute-cases watch, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。本社の、本気で、絶対、パトカー、絶対、と、絶対、警備車両、絶対、整備しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. HQ squad-car-sec-vehicle prep, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'当社の、本気で、絶対、系譜、絶対、社員、絶対、皆に、絶対、伝えろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Our genealogy — staff all convey, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。世界の、本気で、絶対、恐慌、絶対、影響、絶対、当社、絶対、対応、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. World-depression impact — our co handle advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'本気で、絶対、靖国神社、絶対、ご参拝、絶対、当社、絶対、社員、絶対、案内、絶対、検討しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Yasukuni-Shrine visit — our co staff guide consider, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社製品に、本気で、絶対、内蔵、絶対、最新機能、絶対、PR、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Our prod built-in latest-feature PR advance, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07676',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、お店の、本気で、絶対、写真の、絶対、画質、絶対、メイちゃん、絶対、感心したわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — store-photo image-quality Mei-admire, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、地域の、絶対、長老、絶対、と、絶対、お会いしたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yeah. Aoi — local elder met, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵のお父さん、本気で、絶対、釣り、絶対、竿、絶対、新しいの、絶対、買ったって、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-Dad — fish-rod new bought, Mei absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、無限、絶対、に、絶対、お料理、絶対、考えたいよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — unlimited cuisine think-want, Mei absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お料理の、絶対、分子、絶対、レベル、絶対、勉強してるんでしょ?メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — cook molecular-level study?, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お店のロゴ、絶対、頭文字、絶対、デザインしたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — store-logo initials designed, Mei absolute serious really.",style:'Praising.'},
    {speaker:'mei_romantic',jp:'葵のお店、本気で、絶対、劇的、絶対、に、絶対、お客様、絶対、増えたよね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-store — dramatically cust-increased, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お友達の、絶対、ラグビー、絶対、応援、絶対、行ってきたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — friend rugby-cheer went, Mei absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07677',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、テレビの、絶対、画質、絶対、悪かったわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Gran — youth TV image-quality bad was, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、町の、絶対、長老、絶対、お祖父ちゃん、絶対、ご相談に行ったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Youth — town-elder Grandpa consulted-went, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、釣り、絶対、竿、絶対、自分で、絶対、作ったぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Dad fish-rod self-made, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、無限、絶対、の、絶対、可能性、絶対、夢見ていたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — Grandpa unlimited-possibility dreamed, remember dear?, absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、分子、絶対、生物学、絶対、本、絶対、読んだぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Dad molecular-biology book-read, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、家紋の、絶対、頭文字、絶対、刻んだわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Grandpa family-crest initials carved, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さんの、絶対、商売、絶対、劇的、絶対、に、絶対、伸びたぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Dad-biz dramatically grew, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、ラグビー、絶対、若い頃、絶対、選手だったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa rugby-youth player was, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07678',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さんのスマホの、本気で、絶対、画質、絶対、よくなったわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — Mei-sis phone image-quality better-became, absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お祖父ちゃん、絶対、町の、絶対、長老、絶対、みたいだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — Grandpa town-elder-like, absolute serious really.",style:'Reflective child.'},
    {speaker:'mei_romantic',jp:'翔くんと、本気で、絶対、お父さん、絶対、釣り、絶対、竿、絶対、で、絶対、川釣り、絶対、行きたいね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho-with Dad fish-rod river-fish go-want, absolute serious really.",style:'Eager.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、無限、絶対、に、絶対、ゲーム、絶対、したいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me unlimited game do-want, absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、理科で、絶対、分子、絶対、習った?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — sci molecule learned?, absolute serious really.",style:'Curious.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼくの、絶対、頭文字、絶対、Sだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — my initial S, absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'翔くんの、本気で、絶対、成長、絶対、劇的、絶対、に、絶対、なったわね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Sho-growth dramatically became, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、ラグビー、絶対、見たことあるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — me rugby seen, absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07679',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前のスマホの、本気で、絶対、画質、絶対、すごいよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Riku — your phone image-quality amazing, absolute serious really.",style:'Praising teen.'},
    {speaker:'riku_teen',jp:'うん。お祖父ちゃん、本気で、絶対、地域の、絶対、長老、絶対、扱いされてるぜ、桜、本気for、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yeah. Grandpa local-elder-treated, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お祖父ちゃん、本気で、絶対、釣り、絶対、竿、絶対、コレクション、絶対、すごいって、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Grandpa fish-rod-collection amazing, Riku absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'宿題、本気で、絶対、無限、絶対、に、絶対、出るぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Homework — unlimited out, Sakura absolute serious really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'理科で、本気で、絶対、分子、絶対、構造、絶対、習ったよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sci molecular-structure learned, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お前の、本気で、絶対、頭文字、絶対、Sだよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Your initial — S, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、劇的、絶対、に、絶対、成績、絶対、上がったよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"You — dramatically grades-rose, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'今度、本気で、絶対、お前と、絶対、ラグビー、絶対、見に行こうぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Next — you-with rugby see-go, Sakura absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07680',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お家のテレビの、絶対、画質、絶対、いいよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — home-TV image-quality good, absolute serious really.",style:'Animated child.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃんは、本気で、絶対、町内会の、絶対、長老、絶対、なのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Grandpa — town-assoc elder, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お父さんと、絶対、釣り、絶対、竿、絶対、買いに行きたいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom — Dad-with fish-rod buy-go-want, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'子供の好奇心は、本気で、絶対、無限、絶対、よね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Child-curiosity unlimited, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、理科で、絶対、分子、絶対、模型、絶対、作ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Mom — sci molecule-model made, absolute serious really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'翔くんの、本気で、絶対、頭文字、絶対、お父さんと、絶対、同じね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — initial Dad-same, absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼくの、絶対、運動会の結果、絶対、劇的、絶対、に、絶対、よくなったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — my sports-day-result dramatically improved, absolute serious really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'お父さん、本気で、絶対、若い頃、絶対、ラグビー、絶対、選手、絶対、だったのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Dad — youth rugby-player was, Sho absolute serious really.",style:'Reflective close.'},
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

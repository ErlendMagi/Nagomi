import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_376 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['かもめ','持ち歩く','炊飯','日替わり','湿っ','ミニチュア','玉子','アテ']
const B_T = ['引き取り','製法','未納','受け皿','賭ける','画策','押し付ける','強いる']
const C_T = ['悪党','対局','貧血','中性','土砂','憂い','ぞっと','手遅れ']
const D_T = ['ルピー','一室','座敷','刺す','ザル','ローテーション','そりゃあ','ちまう']

const data = [
  {id:'conv_07481',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、海に行ったとき、絶対、かもめ、絶対、たくさん、絶対、いたわね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — sea-went seagulls many were, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、お弁当箱、絶対、持ち歩く、絶対、ようにしてるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — me lunchbox carry-around doing, absolute serious really.",style:'Proud child.'},
    {speaker:'yumiko_mom',jp:'今晩の、本気で、絶対、炊飯、絶対、ママ、絶対、もう少しで、絶対、終わるからね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Tonight rice-cook — Mom soon-finish, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、給食、絶対、日替わり、絶対、メニュー、絶対、楽しみだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — lunch daily-menu fun, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'梅雨で、本気で、絶対、お布団が、絶対、湿って、絶対、しまうわね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Rainy-season — futon damp-end, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、お祖父ちゃんから、絶対、ミニチュア、絶対、の車、絶対、もらったよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Me — Grandpa miniature-car got, Mom absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'明日の朝食、本気で、絶対、玉子、絶対、焼きにしようね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Tomorrow-breakfast — egg-yaki do, Sho absolute serious really.",style:'Eager.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お酒の、絶対、アテ、絶対、お父さんに、絶対、何を作るの?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — sake-snack Dad-what-make?, absolute serious really.",style:'Curious close.'},
  ]},
  {id:'conv_07482',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、海沿いの、本気で、絶対、お店で、絶対、かもめ、絶対、メイちゃん、絶対、見てきたわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — seaside store seagulls Mei-saw, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、業務用の、絶対、ノート、絶対、持ち歩く、絶対、よ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yeah. Aoi — biz notebook carry-around, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵のお店の、本気で、絶対、炊飯、絶対、設備、絶対、業務用で、絶対、立派よね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi-store rice-cook equip — biz-class splendid, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵の、本気で、絶対、日替わり、絶対、ランチ、絶対、メイちゃん、絶対、毎日、絶対、楽しみよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi daily lunch — Mei every-day fun, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お店、絶対、湿った、絶対、空気、絶対、対策、絶対、頑張ってるよね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — store damp air-measure-tried, Mei admire absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、ミニチュア、絶対、ハウス、絶対、お店に、絶対、飾ってるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — miniature-house store decorate, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵の、本気で、絶対、玉子、絶対、サンドイッチ、絶対、メイちゃん、絶対、大好きよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi egg-sandwich — Mei-love, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、夜の、絶対、お酒の、絶対、アテ、絶対、メニュー、絶対、増やしたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — night sake-snack menu added, Mei absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07483',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、お父さんと、絶対、海で、絶対、かもめ、絶対、見たわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Gran — youth Dad-sea seagulls saw, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、お祖父ちゃん、絶対、ポケット帳、絶対、いつも、絶対、持ち歩いて、絶対、いたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Youth — Grandpa pocket-notebook always carry-around, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさんの、絶対、炊飯、絶対、釜、絶対、お父さん、絶対、大切に、絶対、磨いたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran rice-cook pot Dad-careful polished, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、近所の食堂、絶対、日替わり、絶対、お祖父ちゃん、絶対、よく、絶対、行ったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — neighbor-diner daily Grandpa often-went, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、湿った、絶対、お布団、絶対、お父さん、絶対、お庭で、絶対、干したぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — damp futon Dad garden-dried, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、孫に、絶対、ミニチュア、絶対、の電車、絶対、買ってあげたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa grandkid miniature-train bought, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさんの、絶対、玉子、絶対、焼き、絶対、お父さん、絶対、大好きだったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran egg-yaki Dad-loved, remember?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃんの、絶対、お酒の、絶対、アテ、絶対、ばあさん、絶対、用意したわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Grandpa sake-snack gran-prep, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07484',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、修学旅行の海で、本気で、絶対、かもめ、絶対、見たよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Riku — school-trip sea seagulls saw, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。俺、本気で、絶対、英語の辞書、絶対、持ち歩いて、絶対、勉強してるぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Me — Eng-dict carry-around study, Sakura absolute serious really.",style:'Proud.'},
    {speaker:'sakura_teen',jp:'家庭科で、本気で、絶対、炊飯、絶対、実習、絶対、楽しかったよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Home-ec rice-cook prac — fun, Riku absolute serious really.",style:'Cheerful.'},
    {speaker:'riku_teen',jp:'学食の、本気で、絶対、日替わり、絶対、ランチ、絶対、お得だよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"School-cafe daily lunch — bargain, Sakura absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'お前のシャツ、本気で、絶対、雨で、絶対、湿って、絶対、ない?リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Your shirt — rain damp not?, Riku absolute serious really.",style:'Caring.'},
    {speaker:'riku_teen',jp:'俺、本気で、絶対、ミニチュア、絶対、の戦車、絶対、コレクション、絶対、してるんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Me — miniature-tank collect doing, Sakura absolute serious really.",style:'Proud.'},
    {speaker:'sakura_teen',jp:'お弁当に、本気で、絶対、玉子、絶対、焼き、絶対、入れてもらったよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Lunchbox — egg-yaki-put-in-had, Riku absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'お祖父ちゃんが、本気で、絶対、お酒の、絶対、アテ、絶対、自分で、絶対、作るんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Grandpa — sake-snack self-make, Sakura absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07485',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、海辺で、絶対、かもめ、絶対、撮影してきたわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — Mei-sis seaside seagull-shoot-came, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、お気に入りの、絶対、お守り、絶対、持ち歩いて、絶対、いるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me fave amulet carry-around, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、新しい、絶対、炊飯、絶対、器、絶対、買ったのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — new rice-cooker bought, Sho absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さんの、本気で、絶対、お店、絶対、日替わり、絶対、メニュー、絶対、ぼく、絶対、楽しみだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis-store daily-menu — me-fun, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'メイ姉さんの、本気で、絶対、洗濯物、絶対、雨で、絶対、湿って、絶対、しまったわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis laundry — rain damp-end, Sho absolute serious really.",style:'Wry.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、ミニチュア、絶対、の家、絶対、お父さんと、絶対、作ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — me miniature-house Dad-made, absolute serious really.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'メイ姉さんの、本気で、絶対、玉子、絶対、料理、絶対、翔くんに、絶対、教えてあげるね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis egg-cook — Sho teach, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お父さんの、絶対、お酒の、絶対、アテ、絶対、おつまみ、絶対、上手だよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — Dad sake-snack appetizer good, absolute serious really.",style:'Praising close.'},
  ]},
  {id:'conv_07486',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'退職社員の業務、本気で、絶対、引き取り、絶対、徹底しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Retiree-biz take-over thorough, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。当社独自の、本気で、絶対、製法、絶対、社外秘、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Our unique production-method — confidential thorough, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'お客様の、本気で、絶対、未納、絶対、督促、絶対、丁寧に、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Cust-unpaid dunning — polite advance, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お客様の声、本気で、絶対、受け皿、絶対、当社、絶対、整えております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Cust-voice receptacle — our co prepare, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'勝負所に、本気で、絶対、賭ける、絶対、覚悟を、絶対、持て、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Key-moment bet-on resolve hold, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。競合の、本気で、絶対、画策、絶対、当社、絶対、注視しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Rival-scheming — our co watch, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'責任を、本気で、絶対、人に、絶対、押し付ける、絶対、ような社員、絶対、許さんぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Responsibility — others push-onto staff — not-permit, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員に無理を、本気で、絶対、強いる、絶対、ことなく、絶対、適切な、絶対、業務量、絶対、保っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Staff — unreasonable-force-not appropriate-workload keep, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07487',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'前任者の案件、本気で、絶対、引き取り、絶対、ご対応、絶対、お願いします、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Predecessor case take-over — handle ask, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。当社製品の、本気で、絶対、製法、絶対、改良、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Our prod production-method — improve advance, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'お得意様の、本気で、絶対、未納、絶対、状況、絶対、確認、絶対、お願いします、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"VIP-unpaid status — verify ask, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お客様意見の、本気で、絶対、受け皿、絶対、ホットライン、絶対、開設しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Cust-opinion receptacle — hotline opened, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'新規事業、本気for、絶対、賭ける、絶対、価値、絶対、ありますね、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"New-biz bet-value — exist, absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。販売戦略の、本気で、絶対、画策、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Sales-strat scheming — advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'社員に責任を、本気で、絶対、押し付ける、絶対、ような、絶対、管理、絶対、避けましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Staff — push-responsibility-onto-like mgmt — avoid, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。無理を、本気で、絶対、強いる、絶対、ない、絶対、業務体制、絶対、整えております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Unreasonable-force-none biz-sys — prepare, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07488',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、前任研究員の業務、本気で、絶対、引き取り、絶対、お願いするぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Ren — predecessor-researcher biz take-over ask, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。研究室独自の、本気で、絶対、製法、絶対、論文で、扱っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Lab-unique production-method paper-handle, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'研究費の、本気で、絶対、未納、絶対、報告、絶対、確認しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Research-fund unpaid-report verify, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究の、本気で、絶対、受け皿、絶対、企業様、絶対、お声がけ、絶対、いただいております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Research receptacle co — outreach given, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究の成果、本気で、絶対、賭ける、絶対、価値、絶対、ある、絶対、テーマだ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Research-result bet-value exist theme, ask absolute serious really.",style:'Encouraging.'},
    {speaker:'ren_uni',jp:'はい。論文発表の、本気で、絶対、画策、絶対、教授と、絶対、進めております、本気for、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Paper-presentation scheming — prof-advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'責任を後輩に、本気で、絶対、押し付ける、絶対、ことなく、絶対、自分で、絶対、引き受けろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Responsibility junior-push-onto-none — self take, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。後輩に無理を、本気で、絶対、強いる、絶対、ない、絶対、よう、絶対、配慮しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Junior unreasonable-force-none — care, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07489',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、警察、絶対、引き取り、絶対、捜査、絶対、進めます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Case — police take-over inv advance, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。違法薬物の、本気で、絶対、製法、絶対、警察、絶対、特定中、絶対、ですよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Illegal-drug production-method — police identifying, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'罰金の、本気で、絶対、未納、絶対、件、絶対、警察、絶対、督促、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Fine-unpaid case — police dunning advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。市民相談の、本気で、絶対、受け皿、絶対、警察、絶対、整備、絶対、されているそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Citizen-consult receptacle — police-developing, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'容疑者、本気で、絶対、逃亡に、絶対、賭ける、絶対、ような、絶対、行動、絶対、警察、絶対、阻止しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Suspect — flee-bet-on-like act police-stopped, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。組織犯罪の、本気で、絶対、画策、絶対、警察、絶対、解明、絶対、進めていらっしゃるんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Org-crime scheming — police clarify advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、責任を、絶対、他者に、絶対、押し付ける、絶対、容疑者、絶対、警察、絶対、聴取、絶対、いたしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Case — responsibility others push-onto suspect — police-interview, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。市民に過剰負担を、本気で、絶対、強いる、絶対、ない、絶対、よう、絶対、警察様、絶対、ご配慮、絶対、お願いいたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Citizen excess-burden force-none — police-care ask, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07490',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お父さん、絶対、お得意様の案件、絶対、引き取り、絶対、誠実に対応したぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Founding — Dad VIP-case take-over sincere-handled, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、独自の、絶対、製法、絶対、守ってまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — unique production-method kept, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さんの代、本気で、絶対、未納、絶対、お客様にも、絶対、丁寧に、絶対、接したぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Dad-era — unpaid-cust polite-handled, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、お客様意見の、絶対、受け皿、絶対、整えてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Since Dad-era — cust-opin receptacle prepare, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、勝負所に、絶対、賭ける、絶対、勇気、絶対、持っていたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Dad — key-moment bet-on courage held, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、悪い、絶対、画策、絶対、せず、絶対、誠実な、絶対、商売、絶対、続けてまいりました、本気for、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — bad-scheming-none sincere biz continue, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、責任を、絶対、他人に、絶対、押し付ける、絶対、ことなく、絶対、自分で、絶対、引き受けたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad — responsibility others push-onto-none self-took, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、社員に無理を、絶対、強いる、絶対、ことなく、絶対、家族的な経営、絶対、続けてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Since Dad-era — staff force-none family-like mgmt continue, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07491',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses cases',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、組織的な、絶対、悪党、絶対、警察、絶対、検挙、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Case — org villain — police arrest advance, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'容疑者間の、本気で、絶対、対局、絶対、状態、絶対、警察、絶対、見極めて、絶対、いらっしゃるんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Inter-suspect opposing state — police-discern, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。被害者の、本気で、絶対、貧血、絶対、症状、絶対、医療チームと、絶対、確認しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Victim-anemia symptom — med-team verify, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'現場の、本気で、絶対、中性、絶対、洗剤、絶対、警察、絶対、証拠として、絶対、収集されたそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Scene neutral-detergent — police evidence collected, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。豪雨の、本気で、絶対、土砂、絶対、災害現場、絶対、警察、絶対、出動、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Heavy-rain landslide scene — police-dispatched, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害者家族の、本気for、絶対、憂い、絶対、警察、絶対、配慮されているんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Victim-family sorrow — police-care, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。事件現場で、本気で、絶対、ぞっと、絶対、する、絶対、証拠、絶対、警察、絶対、確認しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Scene shiver evidence — police-verified, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害が、本気で、絶対、手遅れ、絶対、にならぬよう、絶対、警察、絶対、迅速対応、絶対、いただいているそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Damage too-late don't-become — police swift-resp given, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07492',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses cultural research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、時代劇の、本気で、絶対、悪党、絶対、像、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — period-drama villain image paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。冷戦時代の、本気で、絶対、対局、絶対、構造、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Thanks. Cold-war era opposing structure paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時の、本気で、絶対、貧血、絶対、栄養失調、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Wartime anemia-malnutrition paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。社会の、本気で、絶対、中性、絶対、的立場、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Soc neutral-stance paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'地理学の、本気で、絶対、土砂、絶対、災害史、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Geo landslide-disaster-hist paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。古代詩人の、本気で、絶対、憂い、絶対、文学、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Ancient-poet sorrow lit paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'怪奇文学の、本気で、絶対、ぞっと、絶対、する、絶対、表現、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Horror-lit shiver expression paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。歴史的に、本気で、絶対、手遅れ、絶対、になった、絶対、政策、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Hist too-late-became policy paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07493',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher mentors a teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、時代劇の、本気で、絶対、悪党、絶対、像、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sakura — period-drama villain image paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。冷戦時代の、本気で、絶対、対局、絶対、構造、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Thanks. Cold-war era opposing structure paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'戦時の、本気で、絶対、貧血、絶対、栄養失調、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Wartime anemia-malnutrition paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。社会の、本気で、絶対、中性、絶対、的立場、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Soc neutral-stance paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'地理学の、本気で、絶対、土砂、絶対、災害史、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Geo landslide-disaster-hist paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。古代詩人の、本気で、絶対、憂い、絶対、文学、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Ancient-poet sorrow lit paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'怪奇文学の、本気で、絶対、ぞっと、絶対、する、絶対、表現、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Horror-lit shiver expression paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。歴史的に、本気で、絶対、手遅れ、絶対、になった、絶対、政策、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Hist too-late-became policy paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07494',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、医療現場では、本気で、絶対、悪党、絶対、と、絶対、呼べる、絶対、ような、絶対、振る舞いの患者さん、絶対、本当に、絶対、稀ですよ、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — med-scene villain-callable-behavior patients — truly rare, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'医療界での、本気で、絶対、対局、絶対、的な、絶対、治療法、絶対、議論、絶対、続いていますか、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Med-world opposing-tx debate — continue, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。患者さんの、本気で、絶対、貧血、絶対、改善、絶対、医療チーム、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Patient-anemia improve — med-advance, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'消毒液の、本気で、絶対、中性、絶対、と、絶対、酸性、絶対、使い分け、絶対、医療現場、絶対、徹底されているんですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Disinfectant — neutral vs acid use-distinguish — med-scene thorough, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。豪雨の、本気で、絶対、土砂、絶対、災害、絶対、医療チーム、絶対、ご支援、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Heavy-rain landslide-disaster — med-support given, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'患者さんのご家族の、本気で、絶対、憂い、絶対、医療チーム、絶対、寄り添って、絶対、いらっしゃるんですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Patient-family sorrow — med-team close-stand, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。患者さんの、本気で、絶対、急変、絶対、ぞっと、絶対、する場面、絶対、医療チーム、絶対、対応、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Patient-sudden-change shiver scene — med-resp thorough, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'治療が、本気で、絶対、手遅れ、絶対、にならぬよう、絶対、医療チームの、絶対、迅速対応、絶対、本当にありがたいですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Tx too-late don't-become — med-team swift-resp grateful, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07495',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corporate response',lines:[
    {speaker:'hiroshi_boss',jp:'業界の、本気で、絶対、悪党、絶対、まがいの、絶対、競合、絶対、当社、絶対、注視しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Industry villain-like rival — our co watch, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。市場の、本気で、絶対、対局、絶対、的な、絶対、二極化、絶対、当社、絶対、対応しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Market opposing dualization — our co handle, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'社員の、本気で、絶対、貧血、絶対、対策、絶対、健康管理、絶対、強化しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Staff-anemia measure — health-mgmt strengthen, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。商品の、本気で、絶対、中性、絶対、洗剤、絶対、ライン、絶対、好評です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Prod neutral-detergent line — favorable, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'地域の、本気で、絶対、土砂、絶対、災害、絶対、当社、絶対、支援を、絶対、惜しむな、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Local landslide — our co support — don't-spare, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員の、本気で、絶対、憂い、絶対、寄り添える、絶対、職場づくり、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Staff-sorrow close-stand workplace-build — advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界の、本気で、絶対、ぞっと、絶対、する、絶対、不祥事、絶対、当社、絶対、注視しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Industry shiver-scandal — our co watch, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。対応が、本気で、絶対、手遅れ、絶対、にならぬよう、絶対、リスク管理、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Resp too-late don't-become — risk-mgmt thorough, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07496',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、インドの、本気で、絶対、ルピー、絶対、メイちゃん、絶対、興味あるわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — India rupee Mei-interest, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、お店の、絶対、一室、絶対、お祖父さまの、絶対、思い出の品、絶対、置いてあるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yeah. Aoi — store one-room Grandpa-memento placed, Mei absolute serious really.",style:'Tender.'},
    {speaker:'mei_romantic',jp:'葵のお店の、本気で、絶対、座敷、絶対、メイちゃん、絶対、お気に入りよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi-store tatami-room — Mei-fave, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お裁縫で、絶対、針が、絶対、指を、絶対、刺す、絶対、こと、絶対、あるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — sewing — needle finger-stab times exist, Mei absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'葵のお店の、本気で、絶対、ザル、絶対、お蕎麦、絶対、メイちゃん、絶対、大好きよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi-store zaru-soba — Mei-love, absolute serious really.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、スタッフの、絶対、ローテーション、絶対、組んでるよ、メイちゃん、本気for、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — staff rotation set, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'そりゃあ、本気で、絶対、葵、絶対、毎日、絶対、頑張ってるもの、絶対、メイちゃん、絶対、応援したいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Of-course — Aoi every-day try Mei-support-want, absolute serious really.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、今日の限定スイーツ、絶対、食べちまう、絶対、よ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — today-limited-sweets eat-up, Mei absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07497',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、お父さん、絶対、海外旅行で、絶対、ルピー、絶対、両替したぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Gran — youth Dad overseas-trip rupee exchanged, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、家の、絶対、一室、絶対、お祖父ちゃんの、絶対、書斎、絶対、だったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Youth — home one-room Grandpa-study was, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お客様、絶対、座敷、絶対、お父さん、絶対、お通ししたぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — guest tatami-room Dad-showed-in, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お裁縫の針で、絶対、ばあさん、絶対、指を、絶対、刺す、絶対、こと、絶対、ありましたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — sewing-needle gran finger-stab times existed, remember dear?, absolute serious really.",style:'Wry tease.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさんの、絶対、ザル、絶対、お蕎麦、絶対、お父さん、絶対、大好きだったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran zaru-soba Dad-loved, remember?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、お仕事の、絶対、ローテーション、絶対、しっかり、絶対、組んでいたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa work-rotation solid-set, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'そりゃあ、本気で、絶対、若い頃、絶対、お父さん、絶対、ばあさんに、絶対、感謝、絶対、していたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Of-course — youth Dad gran-gratitude did, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、お味噌汁、絶対、飲んじまう、絶対、こと、絶対、ありましたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa miso-soup drink-up-times existed, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07498',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、世界のお金、絶対、ルピー、絶対、図鑑で見たわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis world-money rupee book-saw, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼくの家の、絶対、一室、絶対、ぼくの、絶対、お部屋なんだ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — my-home one-room my-room, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お祖父ちゃんちの、絶対、座敷、絶対、お気に入りよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — Grandpa-home tatami-room fave, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、お裁縫で、絶対、指を、絶対、刺す、絶対、ことが、絶対、あるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me sewing finger-stab times exist, absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'メイ姉さんの、本気で、絶対、ザル、絶対、お蕎麦、絶対、翔くんに、絶対、作ってあげるね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis zaru-soba — Sho make, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お父さんの、絶対、勤務、絶対、ローテーション、絶対、聞いたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — Dad work-rotation heard, absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'そりゃあ、本気で、絶対、翔くん、絶対、毎日、絶対、頑張ってるから、絶対、メイ姉さん、絶対、応援するわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Of-course — Sho every-day try Mei-sis support, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、おやつ、絶対、食べちまう、絶対、よ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mei-sis — me snack eat-up, absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07499',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、社会科で、本気で、絶対、ルピー、絶対、習ったよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Riku — soc-class rupee learned, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。お祖父ちゃんち、本気で、絶対、一室、絶対、俺の、絶対、勉強部屋、絶対、なんだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. Grandpa-home one-room — me study-room, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お正月、本気で、絶対、座敷、絶対、家族で、絶対、集まったよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"New-Year tatami-room family-gathered, Riku absolute serious really.",style:'Tender.'},
    {speaker:'riku_teen',jp:'家庭科で、本気で、絶対、指を、絶対、刺す、絶対、ことなく、絶対、お裁縫、絶対、できたぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Home-ec — finger-stab-none sewing did, Sakura absolute serious really.",style:'Proud.'},
    {speaker:'sakura_teen',jp:'夏休みに、本気で、絶対、ザル、絶対、お蕎麦、絶対、家族で、絶対、食べたよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Summer-vac zaru-soba — family-ate, Riku absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'部活の、本気で、絶対、ローテーション、絶対、しっかり、絶対、組んでるぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Club-rotation — solid-set, Sakura absolute serious really.",style:'Practical.'},
    {speaker:'sakura_teen',jp:'そりゃあ、本気で、絶対、お前、絶対、頑張ってるもの、絶対、私、絶対、応援するよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Of-course — you try me-support, Riku absolute serious really.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'部活帰り、本気で、絶対、コンビニで、絶対、おにぎり、絶対、食べちまう、絶対、ぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Club-return — conv-store onigiri eat-up, Sakura absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07500',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、世界のお金の、絶対、ルピー、絶対、図鑑で見たよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — me world-money rupee book-saw, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'お家の、本気で、絶対、一室、絶対、お父さんの、絶対、書斎、絶対、なのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Home one-room — Dad-study, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お祖父ちゃんちの、絶対、座敷、絶対、ぼく、絶対、好きなんだ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mom — Grandpa-home tatami-room me-like, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、お裁縫で、絶対、指を、絶対、刺す、絶対、ように、絶対、気をつけてね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — sewing — finger-stab careful, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お昼ご飯、絶対、ザル、絶対、お蕎麦、絶対、いいな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Mom — lunch zaru-soba nice, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お父さんの、本気で、絶対、勤務、絶対、ローテーション、絶対、今月、絶対、忙しいのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Dad-work rotation this-month busy, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'そりゃあ、本気で、絶対、ぼくも、絶対、お父さんの応援、絶対、するよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Of-course — me-also Dad-support, Mom absolute serious really.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、おやつ、絶対、全部、絶対、食べちまう、絶対、と、絶対、お夕飯に、絶対、響くわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — snack all eat-up — dinner-affect, absolute serious really.",style:'Tender close.'},
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

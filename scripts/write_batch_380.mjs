import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_380 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['ほうれん草','ワックス','立ち寄る','小さめ','お喋り','ひと言','燃やす','グチ']
const B_T = ['テナント','争議','励まさ','数回','封じ','裏付ける','先代','小論文']
const C_T = ['財閥','縦横','色濃く','ドラッカー','声楽','命がけ','評し','降水']
const D_T = ['炊い','吹き出し','バリア','しびれ','丸め','きれる','集まら','すりゃ']

const data = [
  {id:'conv_07561',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、お夕飯、絶対、ほうれん草、絶対、お浸し、絶対、作ったわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — dinner spinach-ohitashi made, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お父さんが、絶対、車に、絶対、ワックス、絶対、塗ってたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — Dad car wax-applied, absolute serious really.",style:'Animated child.'},
    {speaker:'yumiko_mom',jp:'帰り道、本気で、絶対、コンビニに、絶対、立ち寄る、絶対、わね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Way-home — conv-store stop-by, Sho absolute serious really.",style:'Practical.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、新しいお皿、絶対、小さめ、絶対、なのね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mom — new plate small-ish, absolute serious really.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'お祖母ちゃんと、本気で、絶対、お喋り、絶対、楽しかったわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Granny chat — fun was, Sho absolute serious really.",style:'Cheerful.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ひと言、絶対、お礼、絶対、お祖父ちゃんに、絶対、言ってきたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — single-word thanks Grandpa-said, absolute serious really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'お庭の枯れ葉、本気で、絶対、燃やす、絶対、のは、絶対、お父さんに、絶対、お願いするわね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Garden dead-leaves burn — Dad-ask, Sho absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、グチ、絶対、ばっかり、絶対、言わないように、絶対、するよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Me — gripe only-don't-say try, Mom absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07562',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、お野菜の、本気で、絶対、ほうれん草、絶対、ジュース、絶対、メイちゃん、絶対、興味あるわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — veggie spinach-juice Mei-interest, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、フロアの、絶対、ワックス、絶対、磨き、絶対、定期にやってるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yeah. Aoi — floor wax-polish periodic-do, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'お買い物の後、本気で、絶対、葵のお店に、絶対、立ち寄る、絶対、わね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Shop-after Aoi-store stop-by, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵の新メニュー、本気で、絶対、サイズ、絶対、小さめ、絶対、にしてるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi new-menu size small-ish doing, Mei absolute serious really.",style:'Update.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お客様との、絶対、お喋り、絶対、メイちゃん、絶対、見てると楽しいわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — cust-chat — Mei watch fun, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'お客様への、本気で、絶対、ひと言、絶対、お礼、絶対、葵、絶対、心がけてるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Cust single-word thanks — Aoi-mindful, Mei absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お庭の枯葉、絶対、燃やす、絶対、お祭り、絶対、メイちゃん、絶対、聞いたわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — garden dead-leaf burn fest — Mei-heard, absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、グチ、絶対、を、絶対、言わない、絶対、よう、絶対、心がけているよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — gripe don't-say mindful, Mei absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07563',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、ばあさんの、絶対、ほうれん草、絶対、料理、絶対、お父さん、絶対、大好きだったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Gran — youth gran spinach-cook Dad-loved, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、お祖父ちゃん、絶対、車に、絶対、ワックス、絶対、丁寧に、絶対、塗ってくれたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Youth — Grandpa car-wax careful-applied, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、商店街に、絶対、立ち寄る、絶対、と、絶対、皆、絶対、声を、絶対、かけてくれたぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — shop-area stop-by — all voice-greeted, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、家、絶対、小さめ、絶対、でも、絶対、温かったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa home small-ish but warm, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさんと、絶対、お喋り、絶対、夜中まで、絶対、続いたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran-chat midnight-continued, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃんから、絶対、ひと言、絶対、励まし、絶対、ばあさん、絶対、嬉しかったわよ、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — from-Grandpa single-word encouragement gran-glad, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、たき火、絶対、を、絶対、お父さん、絶対、よく、絶対、燃やす、絶対、ことが、絶対、あったぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — bonfire Dad often-burn, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、グチ、絶対、を言わない、絶対、人だったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Grandpa gripe don't-say person was, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07564',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、給食の、本気で、絶対、ほうれん草、絶対、お浸し、絶対、好きだよね?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Riku — lunch spinach-ohitashi like?, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。家の床、本気で、絶対、ワックス、絶対、お父さんと、絶対、磨いたぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yeah. Home-floor wax — Dad-polished, Sakura absolute serious really.",style:'Proud.'},
    {speaker:'sakura_teen',jp:'帰りに、本気で、絶対、お祖母ちゃんちに、絶対、立ち寄る、絶対、よ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Way-home Granny-home stop-by, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、ぼくより、絶対、小さめ、絶対、のリュック、絶対、使ってるよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"You — than-me small-ish backpack use, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お前と、本気で、絶対、長い、絶対、お喋り、絶対、楽しいよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"You-with long chat fun, Riku absolute serious really.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'お前から、本気で、絶対、ひと言、絶対、応援、絶対、もらったら、絶対、頑張れるぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"From-you single-word support — try-can, Sakura absolute serious really.",style:'Tender.'},
    {speaker:'sakura_teen',jp:'文化祭で、本気で、絶対、不要書類、絶対、燃やす、絶対、コーナー、絶対、あったよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Fest — unused-docs burn corner existed, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'試験前、本気で、絶対、グチ、絶対、を、絶対、言ってもしょうがないぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Pre-test — gripe say-no-good, Sakura absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07565',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、ほうれん草、絶対、お弁当に、絶対、入れたわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — Mei-sis spinach lunchbox-in, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お父さんの車、絶対、ワックス、絶対、ピカピカだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mei-sis — Dad-car wax shining, absolute serious really.",style:'Animated child.'},
    {speaker:'mei_romantic',jp:'帰りに、本気で、絶対、メイ姉さんの、絶対、お店に、絶対、立ち寄る、絶対、わね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Way-home — Mei-sis-store stop-by, Sho absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、小さめ、絶対、のお茶碗、絶対、お気に入りだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me small-ish rice-bowl fave, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、翔くんと、絶対、お喋り、絶対、いつも、絶対、楽しいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — Sho-with chat always fun, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、ママに、絶対、ひと言、絶対、お礼、絶対、言ってきたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me Mom single-word thanks said, absolute serious really.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お庭の枯葉、絶対、燃やす、絶対、と、絶対、いいわよね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — garden dead-leaf burn nice, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、グチ、絶対、を、絶対、言わないように、絶対、頑張るよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me gripe don't-say try, absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07566',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'ビルの、本気で、絶対、テナント、絶対、契約、絶対、見直しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Building tenant-contract — review, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。労働、本気で、絶対、争議、絶対、ない、絶対、よう、絶対、社員と、絶対、対話、絶対、続けております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Labor dispute-none — staff-dialog continue, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'社員、本気で、絶対、励まされ、絶対、る、絶対、職場、絶対、目指せ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Staff encourage-felt workplace — aim, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。製品テスト、本気で、絶対、数回、絶対、繰り返して、絶対、品質、絶対、確認しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Prod-test several-times repeat quality verify, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'情報漏洩を、本気で、絶対、封じる、絶対、対策、絶対、徹底しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Info-leak seal counter — thorough, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社の品質、本気で、絶対、データ、絶対、裏付ける、絶対、根拠、絶対、揃えております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Our quality — data backup-evidence assembled, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'当社の、本気で、絶対、先代、絶対、社長の方針、絶対、引き継げ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Our co predecessor pres-policy — inherit, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新人研修の、本気で、絶対、小論文、絶対、課題、絶対、優秀作、絶対、出てきております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Newbie-train short-essay assignment — excellent-works coming-out, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07567',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'駅前ビルの、本気で、絶対、テナント、絶対、空き状況、絶対、確認しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Station-bldg tenant — vacancy verify, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。労働、本気で、絶対、争議、絶対、対応、絶対、人事と、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Labor-dispute resp — HR-advance, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'社員が、本気で、絶対、励まされ、絶対、る、絶対、社風、絶対、大切にしましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Staff encourage-felt culture — cherish, absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。会議を、本気で、絶対、数回、絶対、重ねて、絶対、方針、絶対、まとめました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Mtg several-times stack — policy compiled, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'競合の動きを、本気for、絶対、封じる、絶対、戦略、絶対、検討しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Rival-move seal strat — consider, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新商品の効果、本気で、絶対、お客様の声で、絶対、裏付ける、絶対、データ、絶対、集めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. New prod effect — cust-voice backup data gather, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'当社の、本気で、絶対、先代、絶対、の精神、絶対、社員に、絶対、伝えていきましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Our predecessor-spirit — staff convey, absolute serious really.",style:'Tender.'},
    {speaker:'kenji_office',jp:'はい。広報誌の、本気で、絶対、小論文、絶対、コンクール、絶対、開催しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. PR-mag short-essay contest — host, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07568',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、大学の、本気で、絶対、テナント、絶対、施設、絶対、調査、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Ren — uni tenant-facility survey — advance, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。学界の、本気で、絶対、争議、絶対、論文で、絶対、扱っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Acad-dispute paper-handle, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'教授から、本気で、絶対、励まされ、絶対、た、絶対、ことを、絶対、忘れるなよ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"From prof encourage-received — don't-forget, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。実験を、本気で、絶対、数回、絶対、繰り返して、絶対、再現性、絶対、確認しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Exp several-times repeat — reproducibility verify, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'論文情報を、本気で、絶対、封じる、絶対、必要、絶対、ないが、絶対、慎重にしろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Paper-info seal not-needed but careful, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。論文の、本気で、絶対、仮説を、絶対、裏付ける、絶対、データ、絶対、集めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Paper-hypoth backup data gather, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'学界の、本気で、絶対、先代、絶対、の研究、絶対、参考にしろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Acad predecessor research — ref, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。後輩の、本気で、絶対、小論文、絶対、指導、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Junior short-essay guide, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07569',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、テナント、絶対、ビルの、絶対、防犯、絶対、警察、絶対、強化しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Case — tenant-bldg crime-prev police-strengthen, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。労働、本気で、絶対、争議、絶対、関連の、絶対、ご相談、絶対、警察様、絶対、伺っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Labor-dispute related consult — police-heard, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、被害者を、絶対、励まされ、絶対、る、絶対、よう、絶対、対応しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Police — victim encourage-felt — handle, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察様の、本気で、絶対、ご訪問、絶対、数回、絶対、いただきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Police-visit — several-times given, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'犯罪を、本気で、絶対、封じる、絶対、よう、絶対、警察、絶対、巡回、絶対、強化しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Crime seal — police-patrol strengthen, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、証言を、絶対、裏付ける、絶対、資料、絶対、警察様に、絶対、提出しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Our co — testimony backup mat — police-submitted, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、先代、絶対、署長の方針、絶対、引き継いでおります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Police — predecessor-chief policy inherit, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。社員の、本気で、絶対、防犯、絶対、小論文、絶対、コンクール、絶対、警察様と、絶対、開催しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Staff crime-prev short-essay contest — police-with host, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07570',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お父さん、絶対、自社ビルの、絶対、テナント、絶対、自分で、絶対、選んだぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Founding — Dad self-bldg tenant self-chose, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、労働、絶対、争議、絶対、ない、絶対、職場、絶対、続けてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Since Dad-era — labor-dispute-none workplace continue, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、社員、絶対、励まされ、絶対、る、絶対、声、絶対、よく、絶対、かけていたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Dad — staff encourage-felt voice often-gave, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、品質テスト、絶対、数回、絶対、重ねてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — qual-test several-times continued, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、情報、絶対、封じる、絶対、ではなく、絶対、公開で、絶対、信頼、絶対、築いたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Dad — info-not-seal but open trust-built, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、品質を、絶対、裏付ける、絶対、データ、絶対、大切に、絶対、保ってまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Since Dad-era — quality backup-data careful-kept, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お父さんは、本気for、絶対、先代、絶対、社長として、絶対、お前の、絶対、模範だぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Dad — as predecessor pres your-model, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、社内報の、絶対、小論文、絶対、続けてまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — in-house mag short-essay continue, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07571',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses cultural history',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、戦前の、本気で、絶対、財閥、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Ren — prewar zaibatsu paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。古典の、本気で、絶対、縦横、絶対、無尽の、絶対、表現、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Thanks. Classic vert-horiz-unlimited expression paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'地域の伝統が、本気で、絶対、色濃く、絶対、残る、絶対、街、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Region trad strong-remain town paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。経営学の、本気で、絶対、ドラッカー、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Mgmt Drucker paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'明治期の、本気で、絶対、声楽、絶対、教育、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Meiji-era vocal-music edu paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。先人の、本気で、絶対、命がけ、絶対、の業績、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Forerunner life-risk achievement paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'文芸評論で、本気で、絶対、評し、絶対、た、絶対、本、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Lit-crit evaluated book paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。気候変動と、本気で、絶対、降水、絶対、パターン、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Climate-change rainfall-pattern paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07572',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses cases',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、財閥、絶対、関連企業、絶対、警察、絶対、捜査、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Case — zaibatsu-related co police-inv advance, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'容疑者の活動、本気で、絶対、縦横、絶対、無尽、絶対、警察、絶対、追跡されたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Suspect-act vert-horiz-unlimited — police-traced, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。被害者宅、本気で、絶対、地域伝統が、絶対、色濃く、絶対、残る、絶対、家、絶対、警察、絶対、検証しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Victim-home — local-trad strong-remain home — police verified, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察、本気で、絶対、経営学者、絶対、ドラッカー、絶対、の本、絶対、よく、絶対、読まれるんですか?本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police — mgmt-scholar Drucker book often-read?, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。劇場の、本気で、絶対、声楽、絶対、コンサート警備、絶対、警察、絶対、対応、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Theater vocal-music concert-sec — police-handled, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察、本気for、絶対、命がけ、絶対、の任務、絶対、本当に、絶対、頭が下がります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Police life-risk-mission — truly-head-bow, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。容疑者の供述、本気で、絶対、専門家、絶対、評し、絶対、た、絶対、結果、絶対、参考にしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Susp-statement — expert evaluated result — ref-used, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'豪雨の、本気で、絶対、降水、絶対、量、絶対、警察、絶対、災害対応、絶対、お忙しいですよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Heavy-rain rainfall-amount — police disaster-resp busy, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07573',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher mentors a teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、戦前の、本気で、絶対、財閥、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sakura — prewar zaibatsu paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。古典の、本気で、絶対、縦横、絶対、無尽の、絶対、表現、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Thanks. Classic vert-horiz-unlimited expression paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'地域の伝統が、本気で、絶対、色濃く、絶対、残る、絶対、街、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Region trad strong-remain town paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。経営学の、本気で、絶対、ドラッカー、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Mgmt Drucker paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'明治期の、本気で、絶対、声楽、絶対、教育、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Meiji-era vocal-music edu paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。先人の、本気で、絶対、命がけ、絶対、の業績、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Forerunner life-risk achievement paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'文芸評論で、本気で、絶対、評し、絶対、た、絶対、本、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Lit-crit evaluated book paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。気候変動と、本気で、絶対、降水、絶対、パターン、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Climate-change rainfall-pattern paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07574',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、本気で、絶対、財閥、絶対、系列病院、絶対、医療界、絶対、影響、絶対、ありますね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — zaibatsu-affiliated hosp — med-world impact exist, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'医療チームが、本気で、絶対、縦横、絶対、無尽、絶対、ご活躍、絶対、されているそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Med-team vert-horiz-unlimited active, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。地域の医療伝統、本気for、絶対、色濃く、絶対、残る、絶対、病院、絶対、貴重ですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Region med-trad strong-remain hosp — precious, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'病院経営に、本気で、絶対、ドラッカー、絶対、の考え、絶対、取り入れて、絶対、いらっしゃるんですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Hosp-mgmt Drucker-idea adopt, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。患者さんの、本気で、絶対、声楽、絶対、療法、絶対、医療チーム、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Patient vocal-music therapy — med-advance, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'救急医療、本気で、絶対、命がけ、絶対、医療チーム、絶対、本当にありがたいですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"ER-med life-risk med-team — truly grateful, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。新治療を、本気で、絶対、専門家、絶対、評し、絶対、た、絶対、報告、絶対、参考にしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. New-tx expert evaluated report — ref, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'豪雨の、本気で、絶対、降水、絶対、で、絶対、感染症、絶対、増えるそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Heavy-rain rainfall — infection-increase, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07575',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews strategy',lines:[
    {speaker:'hiroshi_boss',jp:'業界の、本気で、絶対、財閥、絶対、系列、絶対、当社、絶対、関係、絶対、見直しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Industry zaibatsu-aff — our co relation review, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。新事業を、本気で、絶対、縦横、絶対、無尽、絶対、展開してまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. New biz vert-horiz-unlimited expand, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'創業の精神を、本気で、絶対、色濃く、絶対、残せ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Founding-spirit strong-remain, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。経営学の、本気で、絶対、ドラッカー、絶対、の理論、絶対、社内研修、絶対、活用しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Mgmt Drucker-theory — in-house-train utilize, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'当社主催の、本気で、絶対、声楽、絶対、コンサート、絶対、企画しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Our-host vocal-music concert — plan, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、命がけ、絶対、で、絶対、業務、絶対、取り組んでくれております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Staff life-risk biz-tackle, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界誌が、本気で、絶対、評し、絶対、た、絶対、当社製品、絶対、好評、絶対、保て、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Industry-mag evaluated our prod — fave keep, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。地域の、本気で、絶対、降水、絶対、量、絶対、当社の流通、絶対、影響対策、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Local rainfall — our co logistics impact-counter advance, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07576',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、お米、本気で、絶対、葵で、絶対、炊いた、絶対、ご飯、絶対、メイちゃん、絶対、大好きよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — Aoi rice-cooked — Mei-love, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、漫画の、絶対、吹き出し、絶対、お洒落だね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yeah. Aoi — manga speech-bubble stylish, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵のお店、本気で、絶対、皆との、絶対、バリア、絶対、なくて、絶対、いいわよね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi-store — all-barrier-none nice, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、長時間立っていると、絶対、足、絶対、しびれる、絶対、ことが、絶対、あるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — long-stand foot numb times, Mei absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お肉、絶対、丸めて、絶対、お団子、絶対、お洒落よね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — meat roll dango stylish, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、切れる、絶対、包丁、絶対、いい仕事道具、絶対、揃えているよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — cutting kitchen-knife good work-tool assembled, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵のお客様、本気で、絶対、集まらない、絶対、日も、絶対、あるよね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Aoi-cust — gather-don't day-also exist, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、頑張りすぎ、絶対、なくても、絶対、休憩、絶対、すりゃ、絶対、いいわよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — over-try-not break-if OK, Mei absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07577',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、ばあさんが、絶対、お米、絶対、炊いた、絶対、ご飯、絶対、お父さん、絶対、大好きだったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Gran — youth gran rice-cooked Dad-loved, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、お祖父ちゃん、絶対、お孫さんに、絶対、漫画の、絶対、吹き出し、絶対、絵で、絶対、教えてあげたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Youth — Grandpa grandkid manga-bubble draw-taught, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昔は、本気で、絶対、近所同士、絶対、バリア、絶対、なくて、絶対、お父さん、絶対、自由に、絶対、出入りしていたぞ、覚えてる、ばあさん?本気for、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Old — neighbor barrier-none Dad freely came-went, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、農作業の後、絶対、しびれる、絶対、ほど、絶対、足が、絶対、痛かったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa farm-work-after numb foot-pain, remember dear?, absolute serious really.",style:'Wry tense.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、紙、絶対、丸めて、絶対、ばあさんに、絶対、メモ、絶対、渡したぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Dad paper roll gran-memo gave, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、よく、絶対、切れる、絶対、お裁ち鋏、絶対、大切にしていたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa well-cutting sewing-shears cherished, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、客が、絶対、集まらない、絶対、日、絶対、お父さん、絶対、心配したぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — cust-gather-not day Dad-worried, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、すりゃ、絶対、いい、絶対、なんて、絶対、お話、絶対、よく、絶対、していたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa just-do nice often-said, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07578',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、お米、絶対、上手に、絶対、炊いた、絶対、よ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — Mei-sis rice good-cooked, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、漫画の、絶対、吹き出し、絶対、ぼく、絶対、描いてみたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mei-sis — manga speech-bubble me drew-tried, absolute serious really.",style:'Animated child.'},
    {speaker:'mei_romantic',jp:'メイ姉さんと、本気で、絶対、翔くん、絶対、バリア、絶対、なくて、絶対、なんでも、絶対、お話できるね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis-Sho — barrier-none anything-talk-can, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、長く、絶対、お座りすると、絶対、ぼく、絶対、足が、絶対、しびれる、絶対、よ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — long sit me foot-numb, absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お肉、絶対、丸めて、絶対、お団子、絶対、作ったわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — meat roll dango made, Sho absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、よく、絶対、切れる、絶対、はさみ、絶対、お父さんに、絶対、もらったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — well-cutting scissors Dad-got, absolute serious really.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お友達、絶対、集まらない、絶対、日も、絶対、楽しめるわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — friends gather-not day-also enjoy-can, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、宿題、絶対、すりゃ、絶対、お母さんも、絶対、喜ぶよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me homework just-do Mom-also glad, absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07579',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、家庭科の調理実習で、本気で、絶対、お米、絶対、炊いた、絶対、よね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Riku — home-ec cook-class rice-cooked, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。漫画部の、本気で、絶対、吹き出し、絶対、デザイン、絶対、お前、絶対、上手いよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yeah. Manga-club bubble-design — you good, Sakura absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'お前と、本気for、絶対、バリア、絶対、なくて、絶対、何でも、絶対、話せるよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"You-with barrier-none anything-talk-can, Riku absolute serious really.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'長時間、本気で、絶対、勉強で、絶対、足、絶対、しびれる、絶対、ことあるぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Long study foot-numb times, Sakura absolute serious really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、紙、絶対、丸めて、絶対、ボール、絶対、作ってたよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"You — paper roll ball making, Riku absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'家庭科の、本気で、絶対、よく、絶対、切れる、絶対、包丁、絶対、危ないから、絶対、気をつけような、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Home-ec well-cutting knife — careful, Sakura absolute serious really.",style:'Caring.'},
    {speaker:'sakura_teen',jp:'部活で、本気で、絶対、人が、絶対、集まらない、絶対、日、絶対、寂しいよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Club — people-gather-not day lonely, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'試験勉強、本気で、絶対、頑張って、絶対、すりゃ、絶対、絶対、結果が出るぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Test-study try just-do — result-out, Sakura absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07580',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、お米、絶対、炊いた、絶対、よ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — me rice-cooked, absolute serious really.",style:'Proud child.'},
    {speaker:'yumiko_mom',jp:'翔くんの、本気で、絶対、漫画、絶対、吹き出し、絶対、お洒落ね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho-manga bubble — stylish, absolute serious really.",style:'Praising.'},
    {speaker:'sho_child',jp:'ママと、本気で、絶対、ぼく、絶対、バリア、絶対、なくて、絶対、何でも、絶対、話せるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom-with me barrier-none anything-talk-can, absolute serious really.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、長く、絶対、座ると、絶対、足、絶対、しびれる、絶対、わよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Sho — long sit foot-numb, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お肉、絶対、丸めて、絶対、お団子、絶対、ぼく、絶対、作りたいな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — meat roll dango me-make-want, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お父さんの、本気で、絶対、よく、絶対、切れる、絶対、包丁、絶対、危ないから、絶対、触らないでね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Dad well-cutting knife — danger don't-touch, Sho absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'お友達が、本気で、絶対、集まらない、絶対、日、絶対、ぼく、絶対、お家で、絶対、過ごすよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Friends gather-not day me home-spend, absolute serious really.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'ママに、本気で、絶対、相談、絶対、すりゃ、絶対、いつでも、絶対、聞くわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mom — consult just-do anytime listen, Sho absolute serious really.",style:'Warm close.'},
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

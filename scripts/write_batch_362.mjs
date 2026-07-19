import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_362 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['山積み','二日酔い','きもの','スライス','話しかける','掴み','じゃー','鍵盤']
const B_T = ['乗り込む','やって来る','得よ','上質','ニュースレター','上乗せ','不可避','初旬']
const C_T = ['断面','壁面','踊ら','西暦','果たさ','救命','抵触','徴兵']
const D_T = ['フロイト','語りかけ','サーカス','サイレン','培っ','エディタ','必殺','イースター']

const data = [
  {id:'conv_07201',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、宿題、山積みなんだよ、本気で、絶対、頑張らないと、絶対、本気で、約束、絶対、本気、本気で、絶対、本気で、絶対。',en:"Mom — homework piled, serious-must-try, promise absolute serious really.",style:'Earnest child.'},
    {speaker:'yumiko_mom',jp:'うん。お父さん、本気で、絶対、二日酔いで、絶対、ちょっと、絶対、辛そうよね、翔くん、絶対、優しくしてあげようね、本気で、絶対、本気、本気で。',en:"Yes. Dad — hangover slight-hard-look, Sho gentle-please, absolute serious really.",style:'Soft.'},
    {speaker:'sho_child',jp:'お祖母ちゃん、本気で、絶対、きもの、絶対、お正月に、絶対、着せてくれるって、絶対、楽しみ、本気で、絶対、本気、本気で、絶対、絶対、絶対。',en:"Granny — kimono NY-help-wear, fun absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'パン、本気で、絶対、スライス、絶対、薄めに、絶対、切ってあげるね、翔くん、本気で、絶対、本気、本気で、絶対、本気で、絶対、絶対、本気。',en:"Bread — slice thin-cut, Sho absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'お友達、本気で、絶対、最近、絶対、話しかけるの、絶対、楽しいんだ、本気で、絶対、本気、本気で、絶対、本気で、絶対、絶対、本気、絶対。',en:"Friend — lately talk-to fun, absolute serious really.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'人生、本気で、絶対、いいチャンスを、絶対、掴みなさいね、翔くん、本気で、絶対、約束、本気で、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Life — good chance grab, Sho promise absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'じゃーね、ママ、本気で、絶対、行ってきます、絶対、本気で、絶対、本気、本気で、絶対、本気で、絶対、絶対、本気、絶対、本気で、絶対、絶対。',en:"Bye Mom — going, absolute serious really.",style:'Cheerful.'},
    {speaker:'yumiko_mom',jp:'お父さん、本気で、絶対、若い頃、絶対、ピアノの鍵盤、絶対、よく、本気で、弾いてたって、聞いたわよ、本気で、絶対、本気、絶対、本気で、絶対。',en:"Dad — youth piano-keys often-played heard, absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07202',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、お皿、本気で、絶対、山積みで、絶対、忙しそうね、本気で、絶対、お疲れ様、メイちゃん、本気で、絶対、応援、本気、絶対、本気で、絶対。',en:"Aoi — dishes piled busy, tired-thanks, Mei cheer absolute serious really.",style:'Concerned.'},
    {speaker:'aoi_barista',jp:'うん。彼、本気で、絶対、昨夜の二日酔いで、絶対、店に、絶対、来なかったのよ、葵、メイちゃん、本気で、絶対、心配、本気、絶対、本気で、絶対。',en:"Yeah. Bf — last-night hangover store-not-came, Aoi Mei worry absolute serious really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、きもの、絶対、お正月、絶対、着てみたいわよね、メイちゃん、本気で、絶対、夢、絶対、本気、本気で、絶対、本気で、絶対。',en:"Aoi — kimono NY wear-want, Mei dream absolute serious really.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'葵の新作、本気で、絶対、スライスケーキ、絶対、人気よ、メイちゃん、本気で、絶対、味わってみて、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"Aoi new — slice-cake popular, Mei taste-try absolute serious really.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'お客様、本気で、絶対、自分から、絶対、話しかけるよう、絶対、葵、心がけてるよね、メイちゃん、本気で、感心、本気、絶対、本気で、絶対、絶対。',en:"Cust — self talk-to mindful Aoi, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'お客様の、本気で、絶対、心、絶対、掴みたいよね、メイちゃん、葵で、絶対、頑張ってるわよ、本気、本気で、絶対、本気で、絶対、絶対、絶対、本気。',en:"Cust-heart grab-want, Mei Aoi trying absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'じゃー、本気で、絶対、また、絶対、葵で、絶対、会いましょうね、メイちゃん、本気で、絶対、約束、本気、絶対、本気で、絶対、絶対、本気で、絶対。',en:"Bye — again Aoi-meet, Mei promise absolute serious really.",style:'Warm.'},
    {speaker:'aoi_barista',jp:'お客様、本気で、絶対、ピアノの鍵盤、絶対、弾けるの、葵で、知ってたわよ、メイちゃん、本気で、絶対、感心、絶対、本気で、絶対、絶対、絶対、本気。',en:"Cust — piano-keys play-able, Aoi knew, Mei admire absolute serious really.",style:'Curious close.'},
  ]},
  {id:'conv_07203',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前、宿題、本気で、絶対、山積みって、聞いたぜ、本気で、絶対、頑張ってね、桜、本気で、絶対、応援、本気、絶対、本気で、絶対、絶対、本気で。',en:"Riku — homework piled heard, try, Sakura cheer absolute serious really.",style:'Praising teen.'},
    {speaker:'riku_teen',jp:'うん。お父さん、本気で、絶対、二日酔いで、絶対、休んでる、絶対、けっこう、絶対、しんどそうだぜ、桜、本気で、絶対、本気、絶対、本気で、絶対。',en:"Yeah. Dad — hangover resting quite hard-look, Sakura absolute serious really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'お祖母ちゃん、本気で、絶対、きもの、絶対、お正月に、絶対、着るって、絶対、お母さん、絶対、言ってたよ、リク、絶対、本気、本気で、絶対、本気で。',en:"Granny — kimono NY wear, Mom said, Riku absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'家庭科で、本気で、絶対、パン、絶対、スライス、絶対、上手にできたぞ、桜、お前にも、絶対、見せたい、本気で、絶対、本気、絶対、本気で、絶対、絶対。',en:"Home-ec — bread slice good-done, Sakura you-show want, absolute serious really.",style:'Proud.'},
    {speaker:'sakura_teen',jp:'最近、本気で、絶対、新しいクラスメイト、絶対、話しかけるよう、絶対、頑張ってるよ、リク、絶対、本気、絶対、本気で、絶対、絶対、本気で、絶対、本気。',en:"Lately — new classmate talk-to trying, Riku absolute serious really.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'試合で、本気で、絶対、勝利を、絶対、掴みたいよな、桜、お互いに、絶対、頑張ろう、本気で、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"Match — victory grab-want, Sakura mutual-try, absolute serious really.",style:'Determined.'},
    {speaker:'sakura_teen',jp:'じゃー、リク、本気で、絶対、また、絶対、明日、絶対、学校で、絶対、会おうね、本気で、絶対、本気、絶対、本気で、絶対、絶対、本気で、絶対、絶対。',en:"Bye Riku — again tomorrow school-meet, absolute serious really.",style:'Bright.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、ピアノの鍵盤、絶対、上手に、絶対、弾けるんだぜ、桜、本気で、絶対、感心、絶対、本気、絶対、本気で、絶対、絶対、本気で、絶対。',en:"You — piano-keys good-play, Sakura admire absolute serious really.",style:'Praising close.'},
  ]},
  {id:'conv_07204',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'最近、本気で、絶対、新聞、絶対、山積みに、絶対、なってきたな、ばあさん、絶対、整理、しないとな、本気で、絶対、本気、本気で、絶対、絶対。',en:"Lately — newspaper piled, gran organize-must, absolute serious really.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。お祖父ちゃん、本気で、絶対、若い頃、絶対、二日酔いで、絶対、休日、絶対、寝てたわよね、覚えてる?本気で、絶対、本気、絶対、本気で、絶対。',en:"Yes. Grandpa — youth hangover holiday-slept, remember?, absolute serious really.",style:'Wry.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ばあさん、絶対、きもの、絶対、お祭りで、絶対、着ていたわよな、本気で、絶対、本気、絶対、本気で、絶対、絶対、本気で、絶対。',en:"Youth — gran kimono fest-wore, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'最近、本気で、絶対、お肉、絶対、スライス、絶対、簡単に、絶対、買えるようになったわよね、あなた、本気で、絶対、本気、絶対、本気で、絶対、絶対。',en:"Lately — meat slice easy-buy-able, dear absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'近所の人、本気で、絶対、話しかけることが、絶対、減ってきたわよね、ばあさん、本気で、絶対、寂しいよな、絶対、本気、本気で、絶対、本気で、絶対。',en:"Neighbor — talk-to reduced, gran lonely absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、私の心、絶対、掴みに来てくれたわよね、覚えてる?本気で、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Youth — Grandpa my-heart grab-came, remember?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'じゃー、ばあさん、本気で、絶対、また、絶対、夕食で、絶対、お話しよう、本気で、絶対、本気、本気で、絶対、本気で、絶対、絶対、本気で、絶対。',en:"Bye gran — again dinner-talk, absolute serious really.",style:'Warm.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、オルガンの鍵盤、絶対、よく、本気で、弾いていたわよね、覚えてる?本気で、絶対、本気、絶対、本気で、絶対。',en:"Youth — Grandpa organ-keys often-played, remember?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07205',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、宿題、本気で、絶対、山積みって、絶対、お母さんから、聞いたよ、メイ姉さん、本気で、絶対、応援、絶対、本気、本気で、絶対、本気で、絶対。',en:"Sho — homework piled Mom-heard, Mei-sis cheer absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、お父さん、本気で、絶対、二日酔いで、絶対、辛そうなんだ、絶対、メイ姉さん、本気で、絶対、心配、本気、絶対、本気で、絶対、絶対、本気。',en:"Mei-sis — Dad hangover hard-look, Mei-sis worry absolute serious really.",style:'Concerned child.'},
    {speaker:'mei_romantic',jp:'お正月、本気で、絶対、メイ姉さん、絶対、きもの、絶対、着てくるからね、翔くん、絶対、楽しみにしててね、本気で、絶対、本気、本気で、絶対、本気で。',en:"NY — Mei-sis kimono wear, Sho fun-await, absolute serious really.",style:'Eager.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お弁当、絶対、スライス、絶対、お肉、絶対、入っていて、絶対、嬉しいよ、メイ姉さん、絶対、感謝、本気、絶対、本気で、絶対。',en:"Mei-sis — lunch slice-meat in, glad, gratitude absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、お友達に、絶対、話しかけるの、絶対、得意よね、メイ姉さん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Sho — friend talk-to good, Mei-sis admire absolute serious really.",style:'Praising.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、運動会で、絶対、優勝を、絶対、掴みたいよ、本気で、絶対、頑張る、本気、本気で、絶対、本気で、絶対、絶対、本気で、絶対。',en:"Mei-sis — sports-day victory grab-want, try absolute serious really.",style:'Determined.'},
    {speaker:'mei_romantic',jp:'じゃー、翔くん、本気で、絶対、また、絶対、メイ姉さんち、絶対、遊びに来てね、本気で、絶対、約束、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Bye Sho — again Mei-sis-home visit, promise absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、ピアノの鍵盤、絶対、メイ姉さんと、絶対、一緒に、絶対、弾いてみたいよ、本気で、絶対、約束、本気、絶対、本気で、絶対、絶対。',en:"Me — piano-keys with Mei-sis play-want, promise absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07206',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'業界、本気で、絶対、当社、絶対、新市場に、絶対、乗り込む覚悟、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Industry — our co new-market dive-in resolve, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。お客様、本気で、絶対、当社に、絶対、やって来る、絶対、流れ、絶対、増えております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Yes. Cust — our-come flow increase, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'最大限の、本気で、絶対、利益を、絶対、得ようと、絶対、努めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"Max — profit get-try, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社の、本気で、絶対、上質な、絶対、サービス、絶対、お客様、絶対、感謝、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Yes. Our co — high-quality service cust-gratitude, absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'お得意様への、本気で、絶対、ニュースレター、絶対、毎月、絶対、発行しろ、本気で、頼んだぞ、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、本気。',en:"VIP — newsletter monthly issue, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。価格、本気で、絶対、上乗せ、絶対、慎重に、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気。',en:"Yes. Price — markup careful advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界の変化、本気で、絶対、不可避、絶対、当社、適応していけ、本気で、頼んだぞ、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気で。',en:"Industry change — unavoidable, our co adapt, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。来月初旬、本気で、絶対、新製品、絶対、発表予定、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Next-month start — new product announce-plan, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07207',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'当社、本気で、絶対、新会議室に、絶対、乗り込んで、絶対、新企画、進めましょうね、本気で、絶対、本気、本気で、絶対、本気で、絶対、絶対、本気で、絶対。',en:"Our co — new meet-room dive-in new-plan, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。お客様、本気で、絶対、定期的に、絶対、やって来る、絶対、お得意様、絶対、感謝、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で。',en:"Yes. Cust — regular-come VIP gratitude, absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'利益を、本気で、絶対、得ようとしながらも、絶対、お客様、第一を、絶対、心がけましょうね、本気で、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"Profit get-try-while, cust-first mindful, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。上質な、本気で、絶対、商品、絶対、お客様、絶対、ご好評、いただいております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Yes. High-quality goods — cust favorable, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'社内、本気で、絶対、ニュースレター、絶対、定期発行を、絶対、進めましょうね、本気で、絶対、本気、本気で、絶対、本気で、絶対、絶対、本気で、絶対、絶対。',en:"Internal — newsletter regular-issue advance, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。価格に、本気で、絶対、上乗せ、絶対、慎重に、絶対、検討しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Yes. Price — markup careful-study, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'時代の変化、本気で、絶対、不可避、絶対、ですから、絶対、柔軟に、絶対、対応しましょう、本気で、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"Era-change unavoidable, flex-resp, absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。新年度初旬、本気で、絶対、新人研修を、絶対、実施、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気。',en:"Yes. New-fy start — newbie-train conduct, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07208',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究、本気で、絶対、新分野に、絶対、乗り込む覚悟、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、本気。',en:"Ren — research new-field dive-in, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。新しい指導教官、本気で、絶対、研究室に、絶対、やって来る予定です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Yes. New adviser — lab-come plan, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究、本気で、絶対、最大の成果を、絶対、得ようと、絶対、努めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"Research — max-results get-try, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。上質な、本気で、絶対、論文を、絶対、目指してまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. High-quality paper aim, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究室の、本気で、絶対、ニュースレター、絶対、若手に、絶対、書かせろ、本気で、頼んだぞ、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、本気で。',en:"Lab newsletter — youth-write, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。査読、本気で、絶対、上乗せ、絶対、修正、絶対、進めてまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Yes. Review — markup-revise advance, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'時代の流れ、本気で、絶対、不可避、絶対、君も、研究方法、絶対、刷新しろ、本気で、頼んだぞ、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Era-flow unavoidable, also research-method renew, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。来月初旬、本気で、絶対、学会発表、絶対、予定、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、本気で。',en:"Yes. Next-month start — conf-pres plan, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07209',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、現場に、絶対、急行、乗り込んでまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Police — site rush dive-in, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察様、本気で、絶対、当社に、絶対、やって来る時、絶対、ご案内、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Yes. Police — our co-come-time guide thorough, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'証言を、本気で、絶対、得ようと、絶対、市民、絶対、ご協力、感謝、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Testimony get-try — citizen-coop gratitude, absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。当社の、本気で、絶対、上質な、絶対、商品、絶対、警察様にも、絶対、ご評価、いただいております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で。',en:"Yes. Our high-quality goods — police-eval, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、ニュースレター、絶対、市民、絶対、発行しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Police — newsletter citizen-issue, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。価格に、本気で、絶対、防犯費用、絶対、上乗せ、絶対、お客様にも、絶対、ご理解、いただいております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で。',en:"Yes. Price — crime-prev markup cust-understand, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'犯罪、本気で、絶対、撲滅、絶対、不可避、絶対、警察、絶対、頑張ってまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Crime — eradicate unavoidable, police-try, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。月の初旬、本気で、絶対、警察、絶対、巡回、絶対、強化、絶対、ありがたいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Month-start — police patrol-strengthen grateful, absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07210',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お父さん、絶対、新市場に、絶対、乗り込んだぞ、お父さんの覚悟、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で。',en:"Founding — Dad new-market dove-in, Dad-resolve ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、お得意様、絶対、やって来る、絶対、流れ、絶対、続いております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で。',en:"Yes. Since Dad-era — VIP-come flow continue, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、利益を、絶対、得ようと、絶対、必死だったぞ、お父さん、お前にも、絶対、伝えたい、本気で、頼んだぞ、絶対、本気、絶対、本気で、絶対。',en:"Founding — profit get-try desperate, Dad you-convey want, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、上質な、絶対、製品、絶対、引き継いでまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Since Dad-era — high-quality product inherit, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、ニュースレター、絶対、お父さん、絶対、手書きで、絶対、書いたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対。',en:"Founding — newsletter Dad-handwritten, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、価格に、絶対、上乗せ、絶対、慎重だった、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — price markup careful, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_elder',jp:'創業の変化、本気で、絶対、不可避、絶対、お父さんの代でも、絶対、何度もあったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Founding-change — unavoidable, Dad-era too many times, ask absolute serious really.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。月の初旬、本気で、絶対、お父さんの墓参り、絶対、毎月、絶対、行ってまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Month-start — Dad-grave-visit monthly-go, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07211',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses historical research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、論文、本気で、絶対、歴史の断面、絶対、丁寧に、扱っていましたね、本気で、立派、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、本気で、絶対。',en:"Ren — paper, hist-cross-section careful handled, splendid absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。当時の建築、本気で、絶対、壁面、絶対、独特な、装飾、論文で、扱いました、本気で、絶対、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対。',en:"Yes. Era architecture — wall-surface unique-decor paper-handled, deep research absolute gratitude.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、人々、絶対、踊らされた、絶対、宣伝、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で。',en:"Wartime — people manipulated propaganda paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。西暦の年代、本気で、絶対、正確に、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、本気、本気で、絶対、感謝、本当に、絶対、本気で、絶対。',en:"Yes. Western-cal dates — accurately paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'当時、本気で、絶対、役割を、絶対、果たさず、絶対、苦しんだ、絶対、政治家、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で。',en:"Era — duty unfulfilled suffering pols paper-handled, view broad splendid absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。戦時、本気で、絶対、救命活動、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、本気、本気で、絶対、感謝、本当に、絶対、本気で、絶対、絶対、本気。',en:"Yes. Wartime — life-save-activity paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、法に抵触、絶対、する活動、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対。',en:"Wartime — law-conflict activities paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。当時、本気で、絶対、徴兵、絶対、制度、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Era — draft-system paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07212',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、現場の断面、絶対、分析、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Case — site-cross-section analyze advance, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'容疑者の家、本気で、絶対、壁面に、絶対、痕跡、絶対、警察、絶対、発見されたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Suspect-home — wall-surface trace police-found, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、本気で、絶対、世論に、絶対、踊らされた、絶対、可能性、捜査、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Yes. Suspect — public-opinion manipulated possibility inv-advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'西暦、本気で、絶対、事件の発生、絶対、警察、絶対、明らかに、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Western-cal — incident-occur police clarify, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。任務を、本気で、絶対、果たさずに、絶対、警察、絶対、責任、絶対、感じております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Duty without-fulfill, police resp-feel, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察、本気で、絶対、救命活動、絶対、本当に、立派ですね、絶対、感謝、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気。',en:"Police — life-save splendid, gratitude really absolute serious.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、本気で、絶対、複数の法に、絶対、抵触、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Suspect — multi-laws conflict, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'戦時の徴兵、本気で、絶対、警察、絶対、過去の事件、絶対、参考、絶対、にしていますか?本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Wartime-draft — police past-cases ref?, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07213',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、組織の断面、本気で、絶対、医療研究、絶対、新発見、絶対、ありますね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Ren — tissue-cross-section med-research new-finds, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'病室の壁面、本気で、絶対、温かみのある、絶対、デザイン、絶対、患者さんに、絶対、ストレスを、減らしますね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対。',en:"Hosp-wall — warm design patient-stress reduce, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。医療情報に、本気で、絶対、踊らされず、絶対、自分で、絶対、調べる姿勢、本気で、絶対、大切ですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Yes. Med-info — unmanipulated self-research stance vital, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'西暦、本気で、絶対、医療史、絶対、整理、絶対、進めていますね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Western-cal — med-hist organize advancing, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。医師として、本気で、絶対、役割を、絶対、果たさなければ、絶対、ならない時期、絶対、本気で、感じております、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Yes. As doctor — duty must-fulfill era feel, absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'救命医療、本気で、絶対、最前線、絶対、先生、絶対、頑張っていらっしゃいますよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Life-save med — front-line sensei trying, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。医療倫理に、本気で、絶対、抵触、絶対、しない研究、絶対、心がけております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Yes. Med-ethics — un-conflict research mindful, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'戦時、本気で、絶対、徴兵、絶対、医師、絶対、苦労した歴史、絶対、論文で、扱っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Wartime — draft doctor-hardship-hist paper-handle, gratitude absolute serious really.",style:'Curious close.'},
  ]},
  {id:'conv_07214',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp strategy',lines:[
    {speaker:'hiroshi_boss',jp:'業界の断面、本気で、絶対、社員、絶対、よく、絶対、見て、絶対、戦略、絶対、立てろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対。',en:"Industry-cross-section — staff well-see strat build, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社屋の壁面、本気で、絶対、改装、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Bldg-wall — refurb advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'業界の流れ、本気で、絶対、社員、絶対、踊らされないよう、絶対、心がけろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"Industry-flow — staff un-manipulate mindful, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。創業の西暦、本気で、絶対、社員、絶対、知っていて、絶対、当たり前、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Yes. Founding Western-cal — staff-know obvious, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_boss',jp:'創業者の遺志、本気で、絶対、果たさずに、絶対、退くわけにはいかない、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Founder-will — un-fulfill can't-retreat, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員の救命、本気で、絶対、健康管理、絶対、最優先、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Yes. Staff life-save — health-mgmt top-priority advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'当社、本気で、絶対、法に、絶対、抵触、絶対、しないコンプラ体制、絶対、徹底させろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Our co — law un-conflict compl thorough, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。戦時、本気で、絶対、創業者、絶対、徴兵経験者、絶対、当社の財産、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Yes. Wartime — founder draft-exper our asset, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07215',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、論文、本気で、絶対、時代の断面、絶対、丁寧に、扱っていましたね、本気で、立派、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気。',en:"Sakura — paper, era-cross-section careful handled, splendid absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。お寺の壁面、本気で、絶対、貴重な、絶対、絵画、絶対、論文で、扱いました、本気で、絶対、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Yes. Temple-wall — precious painting paper-handled, deep research absolute gratitude.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、人々、絶対、政府に、絶対、踊らされた、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対。',en:"Wartime — people gov-manipulated paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。西暦と元号、本気で、絶対、対比、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、本気、本気で、絶対、感謝、本当に、絶対、本気で、絶対、絶対。',en:"Yes. Western-cal vs era-name — compare paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'歴史的役割を、本気で、絶対、果たさず、絶対、終わった、絶対、人物、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、絶対。',en:"Hist-role unfulfilled-ended figures paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。戦時、本気で、絶対、救命艇、絶対、活動、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、本気、本気で、絶対、感謝、本当に、絶対、本気で、絶対。',en:"Yes. Wartime — life-boat-activity paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、法に抵触、絶対、する報道、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Wartime — law-conflict reporting paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦時、本気で、絶対、徴兵制度の歴史、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気。',en:"Yes. Wartime — draft-hist paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07216',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、心理学のフロイト、本気で、絶対、彼、絶対、勉強してるって、本気で、絶対、感心、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、本気で、絶対、絶対。',en:"Aoi — Freud bf-studying, admire absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'うん。葵で、本気で、絶対、お客様、絶対、心に、絶対、語りかけるような、絶対、音楽、絶対、流してるよ、本気、本気で、絶対、本気で、絶対、絶対、絶対、本気。',en:"Yeah. Aoi — cust-heart speak-to-like music playing, absolute serious really.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'最近、本気で、絶対、サーカス、絶対、街、絶対、やって来たわよね、葵、メイちゃん、本気で、絶対、見に行きたい、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Lately — circus town-came, Aoi Mei see-go-want absolute serious really.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'夜中、本気で、絶対、消防車のサイレン、絶対、聞こえたわよ、葵で、メイちゃん、本気で、絶対、心配、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、本気。',en:"Midnight — fire-truck-siren heard, Aoi Mei worry absolute serious really.",style:'Concerned.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、経験を、絶対、培ってきた、絶対、お店、絶対、本当に、絶対、立派、絶対、本気で、感心、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — exp-cultivated store splendid, admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、テキストエディタ、絶対、最新のを、絶対、買ったわよ、メイちゃん、本気で、絶対、便利、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、本気。',en:"Aoi — text-editor latest bought, Mei convenient absolute serious really.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'お店、本気で、絶対、必殺の新作、絶対、出してね、葵、メイちゃん、本気で、絶対、楽しみ、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、本気。',en:"Store — killer-new out, Aoi Mei fun absolute serious really.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'イースター、本気で、絶対、葵で、絶対、特別メニュー、絶対、出すわよ、メイちゃん、本気で、絶対、楽しみよね、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対。',en:"Easter — Aoi special-menu out, Mei fun absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07217',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お父さん、本気で、絶対、フロイトの本、絶対、最近、絶対、読んでるんだよ、本気で、絶対、すごい、本気、絶対、本気で、絶対、絶対、本気で、絶対、絶対。',en:"Mom — Dad Freud-book lately-reading, amazing absolute serious really.",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'うん。お祖母ちゃん、本気で、絶対、優しく、絶対、孫に、絶対、語りかけてくれるわよね、翔くん、本気で、絶対、感謝、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Yes. Granny — gently grandkid-speak-to, Sho gratitude absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'夏休み、本気で、絶対、家族で、絶対、サーカス、絶対、見に行きたいよ、ママ、本気で、絶対、お願い、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、本気。',en:"Summer — family circus see-go-want, Mom please absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'救急車の、本気で、絶対、サイレン、絶対、最近、絶対、よく、絶対、聞こえるわよね、翔くん、絶対、心配、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、本気。',en:"Ambulance — siren lately often-heard, Sho worry absolute serious really.",style:'Concerned.'},
    {speaker:'sho_child',jp:'お祖父ちゃん、本気で、絶対、長年、絶対、技術、絶対、培ってきた、絶対、職人さん、絶対、誇り、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、本気、絶対。',en:"Grandpa — long-yrs skill-cultivated artisan, proud absolute serious really.",style:'Praising.'},
    {speaker:'yumiko_mom',jp:'お父さん、本気で、絶対、新しいエディタ、絶対、買ってきたわよ、翔くん、本気で、絶対、本気、絶対、本気で、絶対、絶対、本気で、絶対、絶対、本気、絶対、絶対、本気。',en:"Dad — new editor bought, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'お父さん、本気で、絶対、必殺技、絶対、ぼくに、絶対、教えてくれるって、絶対、約束したんだ、本気で、絶対、楽しみ、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Dad — killer-technique me-teach promise, fun absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'今年、本気で、絶対、イースター、絶対、家族で、絶対、楽しもうね、翔くん、本気で、絶対、卵、絶対、いっぱい、絶対、用意するわよ、本気、本気で、絶対、絶対、本気で。',en:"This-yr Easter — family enjoy, Sho eggs many-prep, absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07218',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、心理学の授業で、本気で、絶対、フロイト、絶対、出てきたよ、お前、覚えてる?本気で、絶対、本気、絶対、本気で、絶対、絶対、本気で、絶対、絶対、本気。',en:"Riku — psych class Freud out, remember?, absolute serious really.",style:'Curious teen.'},
    {speaker:'riku_teen',jp:'うん。お祖母ちゃん、本気で、絶対、語りかけるように、絶対、お話、絶対、してくれるよ、桜、本気で、絶対、感謝、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Yeah. Granny — speak-to-like talks, Sakura gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'夏休み、本気で、絶対、サーカス、絶対、お父さんが、絶対、連れていってくれるって、リク、本気で、絶対、嬉しい、絶対、本気、本気で、絶対、本気で、絶対、絶対、本気。',en:"Summer — circus Dad-take, Riku glad absolute serious really.",style:'Eager.'},
    {speaker:'riku_teen',jp:'夜、本気で、絶対、パトカーのサイレン、絶対、聞こえたぜ、桜、お互いに、絶対、気をつけような、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、本気。',en:"Night — police-siren heard, Sakura mutual-careful absolute serious really.",style:'Concerned.'},
    {speaker:'sakura_teen',jp:'お父さん、本気で、絶対、培ってきた、絶対、信頼関係、絶対、すごいって、絶対、思うよ、リク、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、本気、絶対。',en:"Dad — cultivated trust amazing think, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'プログラミングの、本気で、絶対、エディタ、絶対、最新のを、絶対、買ったぜ、桜、お前、見たい?本気で、絶対、本気、絶対、本気で、絶対、絶対、本気で、絶対、絶対、本気。',en:"Prog — editor latest bought, Sakura see-want?, absolute serious really.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'試合で、本気で、絶対、必殺技、絶対、決めたいよね、リク、お互いに、絶対、頑張ろう、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、本気、絶対、本気、絶対。',en:"Match — killer-decide want, Riku mutual-try absolute serious really.",style:'Determined.'},
    {speaker:'riku_teen',jp:'イースター、本気で、絶対、家族で、絶対、お祝いするって、絶対、決めてるんだ、桜、お前、興味、ある?絶対、本気、本気で、絶対、本気で、絶対、絶対、本気、絶対、絶対。',en:"Easter — family-cele decided, Sakura interest?, absolute serious really.",style:'Curious close.'},
  ]},
  {id:'conv_07219',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、フロイトの本、絶対、読んだわよな、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Youth — Freud-book read, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、お祖父ちゃん、絶対、優しく、絶対、語りかけてくれた、絶対、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Yes. Youth — Grandpa gently-spoke, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、家族で、絶対、サーカス、絶対、見に行ったわよな、ばあさん、覚えてる?本気で、絶対、思い出、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Youth — family circus saw, gran remember?, memory absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'昔、本気で、絶対、消防車のサイレン、絶対、少なかった時代、絶対、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対。',en:"Old — fire-siren few era, remember dear?, absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'長年、本気で、絶対、培ってきた、絶対、私たちの関係、絶対、宝物だな、ばあさん、本気で、絶対、感謝、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、本気、絶対。',en:"Long-yrs — cultivated our-rel treasure, gran gratitude absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、エディタを、絶対、使う仕事、絶対、なかった時代、絶対、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Youth — editor-use job none era, remember dear?, absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、必殺仕事人の、絶対、ドラマ、絶対、よく、本気で、見たわよな、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Youth — Hissatsu-shigotonin drama often-watched, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、イースター、絶対、外国人の友達と、絶対、楽しんだ、絶対、覚えてる、あなた?本気で、絶対、思い出、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Youth — Easter foreign-friends-enjoyed, remember dear?, memory absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07220',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、店内、本気で、絶対、フロイトの本、絶対、お洒落に、絶対、置いてみよか、葵さん、本気で、絶対、雰囲気、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対。',en:"Aoi — interior Freud-book stylish-place?, Aoi air absolute serious really.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。お客様、本気で、絶対、心に、絶対、語りかけるような、絶対、サービス、絶対、目指しましょう、本気で、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Cust — heart speak-to-like service aim, absolute serious really.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'地域に、本気で、絶対、サーカス、絶対、やって来る時、絶対、葵で、絶対、コラボ企画、本気で、絶対、考えよか、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対。',en:"Region — circus-come time Aoi collab-plan?, absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。緊急時、本気で、絶対、サイレン、絶対、避難経路、絶対、社員、絶対、把握しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Emerg — siren evac-route staff-grasp, gratitude absolute serious really.",style:'Practical.'},
    {speaker:'daichi_kansai',jp:'長年、本気で、絶対、培ってきた、絶対、技術、絶対、葵で、絶対、お客様に、絶対、提供したいんや、本気、絶対、本気で、絶対、絶対、本気で、絶対、絶対、本気、絶対。',en:"Long — cultivated tech Aoi cust-provide want, absolute serious really.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。メニューの、本気で、絶対、エディタ、絶対、最新のを、絶対、導入したいですね、葵で、本気で、絶対、便利、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Menu-editor — latest intro, Aoi convenient absolute serious really.",style:'Reflective.'},
    {speaker:'daichi_kansai',jp:'葵さん、本気で、絶対、必殺の、絶対、新作スイーツ、絶対、出してみよか、本気で、お客さん、絶対、感激、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、本気。',en:"Aoi — killer new sweet out?, cust-moved absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。イースター、本気で、絶対、葵で、絶対、特別装飾、絶対、進めましょう、本気で、絶対、お客様、絶対、楽しんでくださいそう、本気、本気で、絶対、本気で、絶対、絶対。',en:"Yes. Easter — Aoi special-decor advance, cust-enjoy absolute serious really.",style:'Warm close.'},
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

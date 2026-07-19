import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_356 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['神経質','奪い','無駄遣い','辛口','刃物','利い','ろくに','使い道']
const B_T = ['完備','部局','蓄え','出向い','改築','仮設','通さ','まずまず']
const C_T = ['射程','救世主','宮廷','攻防','急落','惹き','激動','無念']
const D_T = ['健二','シェル','獣医','さようなら','ドック','アルプス','土俵','囲碁']

const data = [
  {id:'conv_07081',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お父さん、神経質だよね、本当に、いつも、心配してくれて、感謝してる、絶対。',en:"Mom — Dad nervous, always-worry, gratitude absolute.",style:'Reflective child.'},
    {speaker:'yumiko_mom',jp:'うん。お友達、玩具を、奪い取らないでね、翔くん、優しく、貸してあげようね、約束ね、絶対。',en:"Yes. Friend — toy don't-snatch, gently lend, promise absolute.",style:'Direction.'},
    {speaker:'sho_child',jp:'お小遣い、無駄遣いしないって、ぼく、ママに、約束したよね、ちゃんと、貯金してるよ、本当に。',en:"Allowance — no-waste promised, properly saving really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'お父さん、辛口カレー、本気で、好きなのよね、翔くんは、まだ、甘口ね、約束ね、絶対。',en:"Dad — spicy curry serious-love, Sho still-mild, promise absolute.",style:'Soft.'},
    {speaker:'sho_child',jp:'ママ、刃物、ぼく、絶対、触らないからね、約束、本当に、安心して、絶対、ね。',en:"Mom — blade absolute don't-touch, promise really, relax absolute.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃんの、ぴりっと利いた、ジョーク、家族で、笑ったわね、翔くん、覚えてる?',en:"Grandpa pithy-effective joke — family laughed, remember?",style:'Tender.'},
    {speaker:'sho_child',jp:'ぼく、ろくに、勉強しないと、ダメだよね、ママ、本気で、頑張るからね、絶対、約束、本当に。',en:"Me — without proper-study no-good, Mom serious-try absolute promise really.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'お年玉、何に、使い道、決めた?翔くん、ママ、本当に、楽しみよ、絶対、聞かせてね、絶対。',en:"Otoshidama — what-use decided?, Mom fun absolute, tell absolute.",style:'Curious close.'},
  ]},
  {id:'conv_07082',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、彼、ちょっと、神経質なところ、あるのよね、でも、優しいから、許せちゃう、本気で、絶対。',en:"Aoi — bf bit-nervous, but-kind allow, serious absolute.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん。お客様の、心、奪い取るような、サービス、本気で、目指していきたいわね、葵、メイちゃん、絶対。',en:"Yeah. Cust-heart snatch-like service — serious-aim, Aoi Mei absolute.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'最近、無駄遣い、本気で、減らしたいの、葵で、節約モード、入ってる、メイちゃん、本気で、絶対。',en:"Lately waste serious-reduce-want, Aoi savings-mode in, serious absolute.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'メイちゃん、辛口の意見、本気で、聞かせてね、葵で、お店、改善に、活かしたいの、絶対、感謝、本気。',en:"Mei — spicy-opinion serious-tell, Aoi store-improve utilize, gratitude absolute serious.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'葵、お祝いに、お料理、刃物、いっぱい、使うわよね、メイちゃん、本気で、感心、絶対、本当に。',en:"Aoi — cele-cook blades many-use, Mei serious-admire absolute really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵の店、エアコン、本気で、利いてるから、夏でも、お客様、快適よ、メイちゃん、絶対、来てね、本気で。',en:"Aoi — AC serious-effective, summer cust-comfortable, Mei absolute-come serious.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'最近、ろくに、葵と、お会いできてないわよね、メイちゃん、本気で、寂しい、絶対、また、会おうね、約束。',en:"Lately — without-proper Aoi-meet, Mei serious-lonely absolute, again-meet promise.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'葵で、お客様、お年玉の使い道、本当に、いろいろ、教えてくれるのよね、メイちゃん、面白いわよ、絶対、本気で。',en:"Aoi — cust otoshidama-use various-tell, Mei fun absolute serious.",style:'Animated close.'},
  ]},
  {id:'conv_07083',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お父さん、結構、神経質な人なんでしょ?お前のお家、本気で、整ってるって、聞いたよ、絶対。',en:"Riku — Dad quite-nervous?, your home serious-tidy heard absolute.",style:'Curious teen.'},
    {speaker:'riku_teen',jp:'うん。お前、本気で、人気者なんだぜ、桜、皆の心、奪い取るような、魅力、あるからな、絶対、本気で。',en:"Yeah. You serious-popular, Sakura all-heart-snatch charm, absolute serious.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'最近、無駄遣い、減らそうって、本気で、思ってるんだ、リク、お互いに、貯金、頑張ろうね、絶対、本当に。',en:"Lately — waste-reduce serious-think, Riku mutual-save try absolute really.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'お前、辛口の批判、結構、本気で、するよな、桜、お互いに、刺激し合えていいよな、本気で、絶対。',en:"You — spicy-critique serious quite-do, Sakura mutual-stimulate good serious absolute.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'家庭科で、刃物、本気で、使うとき、注意、必要よね、リク、お互いに、気をつけような、絶対。',en:"Home-ec — blade-use, careful needed, Riku mutual-careful absolute.",style:'Direction.'},
    {speaker:'riku_teen',jp:'お前のジョーク、本気で、利いてたよな、教室で、皆、笑ってたぞ、桜、本気で、すごい、絶対。',en:"Your joke serious-effective, class all-laughed, Sakura serious-amazing absolute.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'最近、ろくに、休めてないんだよ、リク、お互いに、休みも、大事だよね、絶対、本気で、注意しよう、ね。',en:"Lately — without-proper-rest, Riku mutual-rest vital absolute serious-care.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お年玉の使い道、お前、何にした、桜?本気で、教えて、お願い、絶対、興味あるんだ、本気で、本当に。',en:"Otoshidama-use — what?, Sakura serious-tell please absolute interest, really serious.",style:'Curious close.'},
  ]},
  {id:'conv_07084',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、私、神経質なところ、結構、あったんだぞ、ばあさん、覚えてる?本当に、お前に、迷惑かけた、絶対。',en:"Youth — me nervous quite-existed, gran remember?, you-troubled absolute really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、二人の時間、奪い合う仕事、忙しかったわよね、あなた、覚えてる?本当に、頑張ったわよね、本気で。',en:"Yes. Youth — two-time snatch-work busy, dear remember?, hard-tried serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'無駄遣い、若い頃、私たち、本気で、しないように、頑張ってきたよな、ばあさん、本当に、賢明、絶対。',en:"Waste — youth us serious-avoided tried, gran wise absolute really.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'昔のお祖父ちゃん、辛口の評論家でしたわよね、覚えてる、あなた?本気で、厳しい人だった、絶対、本気。',en:"Old Grandpa — spicy-critic, dear remember?, serious-strict absolute serious.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'昔、刃物、本気で、研ぐ、お祖母ちゃん、上手だったよな、ばあさん、覚えてる?本当に、職人技、絶対。',en:"Old — blade serious-sharpen Granny good, gran remember?, artisan-skill absolute really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'お祖父ちゃんの、ピリッと利いた、説教、本気で、家族、覚えてるわよね、あなた、本当に、感謝、絶対、本気。',en:"Grandpa pithy-effective lecture — family-remember, dear gratitude absolute serious.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'最近、ろくに、外出、できなくなってきたわよな、ばあさん、お互いに、家で、ゆっくり、過ごそうね、絶対、本気。',en:"Lately — without-proper-outing, gran mutual-home-slow-spend absolute serious.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'年金の使い道、本気で、考えて、計画的に、使いましょうね、あなた、絶対、本当に、感謝、しないとね、本気。',en:"Pension-use — serious-think, planned-use, dear absolute gratitude must serious.",style:'Tender close.'},
  ]},
  {id:'conv_07085',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、神経質に、ならないでね、メイ姉さん、いつでも、相談、乗ってあげるからね、約束、絶対、本気で。',en:"Sho — don't-be-nervous, Mei-sis anytime-consult, promise absolute serious.",style:'Soft.'},
    {speaker:'sho_child',jp:'お友達、玩具、奪い、しないでね、メイ姉さん、約束したから、ぼく、絶対、優しくするね、本当に。',en:"Friend toy — don't-snatch, Mei-sis promised, gentle absolute really.",style:'Earnest child.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、無駄遣い、ちょっと、しちゃう癖、あるのよ、本気で、直したいんだ、本当に、絶対、頑張る、ね。',en:"Mei-sis — waste-bit habit-exist, serious-fix want, absolute try really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'お父さん、辛口の食事、本気で、好きなんだよね、メイ姉さん、ぼくも、いつか、食べられるかな、本気で。',en:"Dad — spicy serious-love, Mei-sis, me-also sometime-eat-able?, serious.",style:'Curious.'},
    {speaker:'mei_romantic',jp:'お料理の時、刃物、本気で、注意して、使ってね、翔くん、メイ姉さん、心配だからね、絶対、本気で。',en:"Cook-time — blade serious-careful-use, Sho, Mei-sis worry absolute serious.",style:'Direction.'},
    {speaker:'sho_child',jp:'メイ姉さんが、本気で、利いた言葉、ぼく、絶対、覚えてるよ、心に、響いたんだ、本当に、感謝、絶対。',en:"Mei-sis serious-effective-words — me absolute remember, heart-resonated really gratitude.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'最近、ろくに、翔くんと、会えてなかったわよね、メイ姉さん、本気で、寂しかったよ、また、絶対、会おうね、約束。',en:"Lately — without-proper Sho-meet, Mei-sis serious-lonely, again absolute-meet promise.",style:'Wistful.'},
    {speaker:'sho_child',jp:'お年玉の使い道、メイ姉さん、ぼく、本気で、相談したいよ、お願い、絶対、聞いてくれる?本当に、ありがとう。',en:"Otoshidama-use — Mei-sis serious-consult-want, please absolute hear?, thanks really.",style:'Eager close.'},
  ]},
  {id:'conv_07086',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'新社屋、設備、完備、徹底させろ、絶対、お客様、絶対、満足、いただける、本気で、絶対、頼んだ。',en:"New bldg — equip-complete thorough, cust-satisfy absolute serious ask absolute.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。各部局、新人配属、本気で、進めてまいります、絶対、人材活用、頑張ります、本気で、本当に、感謝。',en:"Yes. Each-dept newbie-assign serious-advance, talent-utilize absolute serious gratitude.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'当社の蓄え、本気で、新事業に、絶対、活かせ、絶対、頼んだぞ、本気で、本当に、これは、絶対だ。',en:"Our reserves — new-biz serious utilize absolute ask, serious really absolute.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お得意様、出向いた、私の同僚、本気で、頑張ってくれました、絶対、感謝、しております、本当に、本気。',en:"Yes. VIP — visited colleague serious-tried, gratitude absolute really serious.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'本社の改築、本気で、進めろ、絶対、社員、皆、誇りに、思える社屋に、絶対、頼んだぞ、本気で、本当に、絶対。',en:"HQ refresh — serious-advance absolute, staff proud bldg absolute serious ask.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。仮設の事務所、本気で、急ぎ、対応してまいります、絶対、社員、本当に、お疲れ様、本気で、感謝、絶対。',en:"Yes. Temp-office — serious-hurry resp, staff tired-thanks absolute serious gratitude.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'関係者に、絶対、お客様、通さないようにしろ、本気で、徹底だ、絶対、頼んだぞ、本気で、本当に、これは。',en:"Related — cust absolute don't-pass, thorough serious absolute ask serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新事業、まずまずの、滑り出し、本気で、感謝、しております、絶対、社長、本気で、頑張ってまいります、絶対。',en:"Yes. New biz — moderately-good start serious gratitude absolute, pres-serious try absolute.",style:'Cheerful close.'},
  ]},
  {id:'conv_07087',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'新店舗、設備、本気で、完備、絶対、お客様、満足、いただけますわよね、本気で、楽しみよ、絶対、本当に。',en:"New store — equip serious-complete, cust-satisfy absolute serious fun absolute really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。本社の各部局、本気で、連携、強化しております、絶対、本当に、社員、頑張ってくれて、感謝、本気、絶対。',en:"Yes. HQ each-dept link serious-strengthen, staff-try gratitude absolute serious.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'災害時の備蓄、本気で、当社、蓄え、社員、皆、本気で、感謝、しております、絶対、本当に、安心ですね、本気で。',en:"Disaster stockpile — our co reserves serious, staff-gratitude, peaceful absolute serious.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。お客様のお宅、私、出向いた時、本気で、丁寧に、対応、心がけてまいりました、絶対、本気で、本当に、絶対。',en:"Yes. Cust-home — I-visited, careful-resp mindful absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'社屋の改築、本気で、来年から、進めましょうね、絶対、本気で、社員、皆、楽しみに、しております、本気で、絶対。',en:"Bldg-refresh — next-yr serious-advance absolute, staff fun-await serious absolute.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。仮設の作業場、本気で、災害復興、活用できますね、絶対、本気で、感謝、しております、本当に、皆、本気で。',en:"Yes. Temp-workplace — disaster-recov utilize serious, gratitude absolute really serious.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'お客様、本気で、横道に、通さないように、しっかり、ご案内しましょうね、絶対、本気で、お願い、絶対、本当に。',en:"Cust — side-don't-pass, properly guide, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。今期、まずまずの、成績、本気で、感謝、しております、絶対、社員、皆、頑張ってくれて、本当に、本気、絶対。',en:"Yes. This-term moderately-good record gratitude absolute, all-staff-try really serious absolute.",style:'Close.'},
  ]},
  {id:'conv_07088',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究室、設備、本気で、完備、徹底させて、絶対、君の研究、進むからな、本気で、頼んだぞ、絶対。',en:"Ren — lab equip serious-complete thorough, your research-advance absolute serious ask.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。大学の各部局、私、本気で、回って、ご挨拶、してまいりました、絶対、本気で、感謝、しております、本当に、本気。',en:"Yes. Uni each-dept — I serious-round greet, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究費の蓄え、本気で、計画的に、使え、絶対、君の研究、長く、続けるためにも、本気で、頼んだぞ、絶対、本当に。',en:"Research-reserve — serious-planned-use, long-continue absolute serious ask really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。海外の研究室、本気で、出向いた経験、本当に、勉強に、なりました、絶対、本気で、感謝、しております、本気。',en:"Yes. Overseas-lab serious-visited exp, learning absolute serious gratitude.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究室の改築、本気で、提案しろ、絶対、君の意見、聞きたいぞ、本気で、絶対、頼んだぞ、本当に、これは、絶対だ。',en:"Lab-refresh — serious-propose, your opinion-want serious absolute ask really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。仮設の実験室、本気で、活用、進めてまいります、絶対、研究、効率、絶対、上げていきます、本気で、本当に、絶対。',en:"Yes. Temp-lab serious-utilize advance, research-eff raise absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'論文に、不正なデータ、絶対、通さないようにしろ、絶対、研究者の信頼、本気で、絶対、守れ、本気で、頼んだぞ、絶対。',en:"Paper — illegal-data absolute don't-pass, researcher-trust serious-guard absolute serious ask.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究、まずまずの、成果、本気で、感謝、しております、絶対、本気で、頑張ってまいります、本当に、絶対、本気で。',en:"Yes. Research — moderately-good results, gratitude absolute serious try really absolute.",style:'Earnest close.'},
  ]},
  {id:'conv_07089',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察、新庁舎、本気で、設備、完備、進めております、絶対、市民の安全、第一に、本気で、頑張ってまいります、本気。',en:"Police — new HQ equip serious-complete advance, citizen-safety first serious try.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。当社、警察関連の、各部局、本気で、連携、強化しております、絶対、感謝、しております、本当に、本気で、絶対。',en:"Yes. Our co — police-related each-dept link serious-strengthen, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察、防犯資金の蓄え、本気で、必要、感じております、絶対、市民の皆様、ご協力、お願いいたします、本気で、本当に。',en:"Police — crime-prev fund-reserve serious-need feel absolute, citizens-coop ask really serious.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察様、当社に、出向いた、本日、本気で、感謝、しております、絶対、お話、聞かせていただきます、本当に、本気で。',en:"Yes. Police — visited today serious gratitude absolute, talk-permit really serious.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察署の改築、本気で、進めております、絶対、市民の皆様、しばらく、ご迷惑、お掛けします、本気で、感謝、本当に、絶対。',en:"Station-refresh — serious-advance absolute, citizens-inconvenience-cause, gratitude really serious absolute.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。仮設の警察活動、本気で、応援、続けてまいります、絶対、本気で、地域、皆、感謝、しております、本当に、絶対。',en:"Yes. Temp police-activity serious-cheer continue, region-all gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'容疑者、警戒線を、本気で、通さなかった、警察の活躍、絶対、市民、感謝、いただきたいです、本気で、本当に、本気。',en:"Suspect — alert-line serious don't-pass, police-active, citizen-gratitude want absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。今期、警察、まずまずの、結果、本気で、感謝、しております、絶対、引き続き、ご活躍、お願いいたします、本気で、絶対。',en:"Yes. This-term police — moderately-good results, gratitude continue activity-ask absolute serious.",style:'Close.'},
  ]},
  {id:'conv_07090',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業時、本気で、設備、完備、苦労したぞ、ばあさんの代から、お前にも、絶対、伝えたい、本気で、頼んだぞ、本当に。',en:"Founding — equip serious-complete hardship, since Mom-era you-convey absolute serious ask really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、各部局、本気で、頑張ってくれて、社員、絶対、感謝、しております、本気で、本当に、絶対、本気。',en:"Yes. Since Dad-era — each-dept serious-tried, staff-gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'創業期、蓄え、本気で、なかった時代、覚えてる、お父さん?苦労したぞ、お前にも、絶対、伝えていきたい、本気で、絶対、本当に。',en:"Founding — reserves serious-none era, remember Dad?, hardship, you-convey absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さん、お得意様に、本気で、何度も、出向いた話、私、本気で、感謝、しております、本当に、絶対、お父さん、絶対。',en:"Yes. Dad — VIP serious many-times-visited story, gratitude really absolute serious Dad absolute.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'本社の改築、お父さんの代から、本気で、続けてきたぞ、絶対、お前にも、引き継いで欲しい、本気で、頼んだぞ、絶対、本気。',en:"HQ-refresh — since Dad-era serious-continued, you inherit-want absolute serious ask absolute.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。創業期、仮設の社屋、お父さん、本気で、苦労したんですよね、本当に、絶対、感謝、しております、本気で、お父さん、絶対。',en:"Yes. Founding — temp-bldg Dad serious-hardship, gratitude really absolute serious Dad absolute.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お得意様、絶対、相手に、通さない厳しさ、本気で、お父さん、貫いてきたぞ、お前にも、絶対、教えたい、本気で、絶対、本気で。',en:"VIP — absolute don't-pass strictness, Dad serious-pierced, you teach-want absolute serious.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。今期、まずまずの、成績、本気で、お父さんに、ご報告できる、絶対、嬉しいです、本気で、感謝、しております、絶対、お父さん、本当に。',en:"Yes. This-term — moderately-good record, Dad-report-able absolute glad serious gratitude Dad really.",style:'Wise close.'},
  ]},
  {id:'conv_07091',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses historical research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、論文、ミサイルの射程に関する、安全保障の議論、本気で、論じていましたね、本当に、印象的でした、絶対、立派、本気。',en:"Ren — paper missile-range security-discussion serious-argued, striking absolute splendid serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。歴史上、救世主のような、指導者の役割、論文で、本気で、扱いました、絶対、本気で、深い、研究、できました、本当に。',en:"Yes. Hist — savior-like leader-role, paper serious-handled, deep research absolute serious really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'平安時代の宮廷、本気で、印象的な、文化が、栄えていましたね、論文で、扱っていました、絶対、本気で、立派、本当に、感心。',en:"Heian-era court — striking culture-flourished, paper-handled, splendid absolute serious really admire.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。当時の権力の攻防、本気で、複雑でしたよね、論文で、丁寧に、扱いました、絶対、深い、研究、できました、本気で、本当に。',en:"Yes. Era power-defense complex serious, paper carefully handled, deep research absolute serious really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'江戸時代、社会的地位の急落、武家でも、ありましたね、論文で、扱っていました、絶対、本気で、視野、広い、本当に、立派、絶対。',en:"Edo — soc-status sudden-fall samurai-also, paper-handled, view broad absolute serious really splendid.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。物語の魅力、人々を惹きつける力、本気で、扱いました、絶対、本気で、深い、考察、できました、本当に、感謝、しております、本気。',en:"Yes. Story-charm — attract-power serious-handled, deep consideration absolute serious gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'明治の激動の時代、本気で、論文の核心、テーマでしたね、絶対、桜さん、本気で、立派、本当に、感心しました、絶対、本気で。',en:"Meiji upheaval-era — paper-core theme, splendid Sakura serious admire absolute really serious.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。志半ばで、無念に、亡くなった人物、論文で、扱いました、絶対、本気で、心が、痛む、内容でした、本当に、本気で、感謝、絶対。',en:"Yes. Mid-aim — regretful-died figures, paper-handled, heart-pain content serious gratitude really absolute.",style:'Earnest close.'},
  ]},
  {id:'conv_07092',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、容疑者、本気で、警察の射程に、捉えました、絶対、市民の安全、守ってまいります、本気で、本当に、本気で、絶対。',en:"Case — suspect serious-police-range captured, citizen-safety guard absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'被害者ご家族にとって、警察の方々、本気で、救世主のような、存在ですよね、本当に、感謝、しております、絶対、本気で、絶対。',en:"Victim-family — police, serious-savior-like, gratitude really absolute serious.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、過去、宮廷文化の研究者だった、と、聞きました、本当に、複雑な背景、本気で、感じます、絶対、本気で、本当に。',en:"Yes. Suspect — past court-cult researcher heard, complex bg serious-feel absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察と犯罪組織との攻防、本気で、市民、深刻に、感じておりますよね、絶対、本気で、応援、しております、本当に、感謝、絶対。',en:"Police-org defense serious — citizens-feel-serious absolute, cheer really gratitude absolute.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。容疑者の評判、本気で、急落しました、絶対、市民の信頼、警察、本気で、守ってまいります、本当に、絶対、本気で、絶対。',en:"Yes. Suspect-rep serious-sudden-fell, citizen-trust police serious-guard absolute really serious.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察のSNS発信、本気で、市民の関心、惹きつけていますね、絶対、新時代の、警察活動、本当に、感心、しております、本気で、絶対。',en:"Police-SNS — citizen-interest attract, new-era police-activity admire really serious absolute.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。社会の激動の中で、警察、本気で、市民の安全、守ってまいります、絶対、本気で、頑張ってまいります、本当に、絶対、本気で、絶対。',en:"Yes. Soc upheaval-amid, police serious citizen-safety guard absolute serious try really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害者の方、無念な、気持ち、本気で、想像、つかないですね、警察、本気で、ご家族のケア、本当に、感謝、絶対、本気で、本当に、絶対。',en:"Victim regretful-feel imagine-untappable serious, police family-care gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07093',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、新薬、本気で、医療の射程、絶対、広げていきます、絶対、患者さんの未来、本気で、守ってまいります、本当に、絶対、本気で。',en:"Ren — new drug serious med-range absolute widen, patient-future serious-guard really absolute serious.",style:'Calm.'},
    {speaker:'ren_uni',jp:'先生は、患者さんにとって、本気で、救世主のような、存在ですね、本当に、頭が下がる、思いです、絶対、本気で、感謝、本当に、絶対。',en:"Sensei — patient savior-like serious, humbled-feel absolute serious gratitude really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。古代宮廷の医療文化、本気で、研究して、面白いですよね、絶対、本気で、現代に、活かせる、知恵、ありますよね、本気、本当に。',en:"Yes. Ancient court-med culture — serious-research fun, modern utilize-wisdom exists serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医療と病気との、本気で、攻防、絶対、深刻ですね、先生、本気で、現場の方々、感謝、しております、絶対、本気で、本当に、頭が下がる。',en:"Med-disease defense serious — severe, sensei site-people gratitude absolute serious humbled really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。患者さんの容体、本気で、急落することも、絶対、ございます、医療現場、本当に、緊張感、保ってまいります、本気で、本当に、絶対。',en:"Yes. Patient-cond serious-sudden-fall-occurs absolute, med-site tension-keep serious really absolute.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療研究、本気で、患者さんの希望、惹きつける、力、ありますよね、先生、本気で、絶対、応援、しております、本当に、感謝、絶対。',en:"Med-research — patient-hope attract power exists, sensei serious cheer absolute gratitude really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。医療界、本気で、激動の時代、先生方、本気で、頑張っております、絶対、感謝、いただきたいです、本当に、本気で、本気で、絶対。',en:"Yes. Med-world serious-upheaval era, senseis serious-try, gratitude-want absolute really serious.",style:'Patient.'},
    {speaker:'ren_uni',jp:'病に、本気で、無念に、亡くなった方々、本当に、心が、痛みますね、先生、本気で、医療、頑張ってまいりたいです、絶対、本気で、感謝、絶対。',en:"Disease — regretful-died, heart-pain, sensei med serious-try want absolute, gratitude absolute.",style:'Reflective close.'},
  ]},
  {id:'conv_07094',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp strategy',lines:[
    {speaker:'hiroshi_boss',jp:'業界、本気で、当社の射程に、絶対、いる、攻め続けろ、社員、本気で、頼んだぞ、絶対、頑張れ、本気で、絶対、本当に、本気。',en:"Industry — our range absolute-in, keep-attack, staff serious ask absolute try serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。お客様にとって、本気で、当社が、絶対、救世主のような存在に、なりたい、社長、本気で、頑張ってまいります、本当に、絶対、本気。',en:"Yes. For-cust — our co serious savior-like absolute-become want, pres serious-try really absolute.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'創業者は、宮廷文化への憧れ、強かった、と、お母さんから、聞いている、本気で、絶対、深いお話、本当に、絶対、本気で、感謝。',en:"Founder — court-cult admiration strong heard from-Mom, serious deep-talk absolute really serious gratitude.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。市場の攻防、本気で、当社、絶対、勝ち抜いていきます、社員、皆、本気で、頑張ります、絶対、本気で、本当に、頑張ります、絶対。',en:"Yes. Market-defense — our co absolute-survive, all-staff serious-try absolute really.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'株価、本気で、急落しないよう、絶対、社員、皆、業務、頑張れ、絶対、頼んだぞ、本気で、本当に、これは、絶対だ、本気で、絶対。',en:"Stock — serious don't-sudden-fall absolute, all-staff biz-try absolute ask serious really absolute.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お客様の心、本気で、絶対、惹きつける製品、開発してまいります、絶対、社員、皆、頑張ります、本当に、本気で、絶対、本気。',en:"Yes. Cust-heart serious-attract product dev, all-staff-try absolute really serious.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界、本気で、激動の時代、当社、絶対、リーダーシップ、見せていけ、絶対、本気で、頼んだぞ、本当に、これは、絶対、本気で、絶対。',en:"Industry — serious-upheaval era, our co absolute-leadership show, serious ask really absolute serious.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、創業以来、無念な、敗北、本気で、絶対、避けてまいります、絶対、お父さんの代から、引き継いで、本気で、本当に、絶対、頑張ります。',en:"Yes. Our co — since founding, regretful-defeat serious-avoid absolute, since Dad-era inherit serious try absolute.",style:'Close.'},
  ]},
  {id:'conv_07095',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、論文、歴史上の射程、本気で、扱っていましたね、絶対、本気で、立派、本当に、感心しました、絶対、本気で、本当に。',en:"Sakura — paper hist-range serious-handled, splendid serious admire absolute really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。当時、人々が、救世主のような、存在を、本気で、求めた歴史、論文で、論じました、絶対、本気で、深い、研究、できました、本当に、感謝。',en:"Yes. Era — savior-like serious-sought hist, paper-argued, deep research absolute serious gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'平安時代の宮廷文化、本気で、論文で、扱っていましたね、絶対、桜さん、本気で、視野、広い、本当に、立派、本気で、絶対、感心。',en:"Heian court — paper-handled, Sakura serious view broad splendid absolute really admire.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。歴史上、権力の攻防、本気で、複雑、扱いました、絶対、論文で、深い、研究、できました、本当に、感謝、しております、本気で、絶対。',en:"Yes. Hist — power-defense complex serious-handled, paper deep research, gratitude really serious absolute.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'江戸末期、本気で、社会的地位の急落、論文で、扱っていましたね、絶対、本気で、現代にも、繋がる、本当に、立派、本気で、絶対、本気。',en:"Late-Edo — soc-status sudden-fall paper-handled, modern-link splendid absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。歴史人物の魅力、本気で、人々を惹きつける、力、論文で、扱いました、絶対、本気で、深い、研究、できました、本当に、感謝、本気で。',en:"Yes. Hist-figure charm — attract-power paper-handled, deep research absolute serious gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'明治の激動の時代、本気で、論文の重要な、テーマでしたね、絶対、桜さん、本気で、立派、本当に、感心しました、絶対、本気で、本当に、絶対。',en:"Meiji upheaval — paper-key theme, Sakura splendid serious admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。志半ば、無念に、亡くなった人物、論文で、扱いました、絶対、本気で、心、痛む、内容でした、本当に、絶対、本気で、感謝、本気、絶対、本当に。',en:"Yes. Mid-aim regretful-died — paper-handled, heart-pain content, gratitude really absolute serious.",style:'Earnest close.'},
  ]},
  {id:'conv_07096',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、新しい社員の健二さん、本気で、頼もしい人ね、メイちゃん、葵で、感心、しちゃう、本気で、絶対、本当に、嬉しい、感謝。',en:"Aoi — new staff Kenji reliable serious, Mei Aoi admire serious absolute really glad gratitude.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。シェル型の、お洒落な、お皿、葵で、本気で、揃えたわよ、お客様、本気で、好評、メイちゃん、絶対、本当に、嬉しい。',en:"Yeah. Shell-stylish plates — Aoi serious-stocked, cust serious-favor, Mei absolute really glad.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'うちの愛犬、最近、獣医さんに、本気で、診てもらってるのよ、葵、心配なの、本気で、絶対、メイちゃん、応援してね、絶対。',en:"Our dog — lately vet serious-check, Aoi worry serious absolute, Mei cheer absolute.",style:'Concerned.'},
    {speaker:'aoi_barista',jp:'お客様、さようなら、と、お見送りする時、本気で、心、込めてるわよ、葵で、メイちゃん、絶対、感じてくれてる、本気で、嬉しい。',en:"Cust — goodbye-see-off time, heart-include serious, Mei absolute-feel serious glad.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'船のドック、行ったの、彼と、本気で、面白かったわよ、葵で、写真、見せたいわよね、絶対、メイちゃん、楽しみ、本当に、本気で。',en:"Boat-dock — went with-bf serious-fun, Aoi photo-show want absolute Mei fun really serious.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'アルプスの旅行、本気で、行ってみたいわよね、メイちゃん、葵で、いつか、一緒に、行こうね、絶対、本気で、夢、ね、絶対、本当に。',en:"Alps trip — serious-go-want, Mei Aoi sometime together-go absolute serious dream absolute really.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'相撲の土俵、本気で、彼、見たいって、言ってたの、葵、私たちも、行ってみない?絶対、本気で、楽しいよ、本気、本当に、絶対。',en:"Sumo dohyo — bf serious-see-want said, Aoi also-go?, fun absolute serious really.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'囲碁、最近、本気で、ハマってるのよ、葵、メイちゃん、興味、ある?一緒に、対戦、してみない?本気で、絶対、楽しい、本当に。',en:"Go — lately serious-hooked, Aoi Mei interest?, together-match try?, fun absolute serious really.",style:'Curious close.'},
  ]},
  {id:'conv_07097',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お父さんの幼馴染、健二さんって、本気で、優しい人だよね、ぼく、本当に、好きなんだ、絶対、また、会いたい。',en:"Mom — Dad-childhood-pal Kenji serious-kind, love really absolute, again-meet want.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'うん。海で、シェル、本気で、たくさん、拾ってきたわね、翔くん、お土産、本気で、嬉しいね、絶対、ありがとう、本気で、本当に。',en:"Yes. Sea — shells serious-many picked, Sho, souv serious-glad absolute thanks really serious.",style:'Tender.'},
    {speaker:'sho_child',jp:'うちのワンちゃん、本気で、獣医さんに、診てもらいたいよ、ママ、心配なんだ、絶対、本気で、お願い、本当に、絶対。',en:"Our doggy — vet serious-check want, Mom worry absolute serious please really absolute.",style:'Concerned.'},
    {speaker:'yumiko_mom',jp:'お友達、さようならの時、本気で、寂しそうだったわね、翔くん、また、絶対、会えるからね、本気で、約束、絶対、本気で、本当に。',en:"Friend — goodbye-time, lonely-look serious, Sho again-meet absolute serious promise really.",style:'Soft.'},
    {speaker:'sho_child',jp:'お父さん、船のドック、本気で、見学に、行ってきたんだよ、ママ、面白かったって、本気で、絶対、嬉しそうだった、本気で、本当に。',en:"Dad — boat-dock serious-visited went, Mom fun-said serious absolute glad-look really serious.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お父さん、若い頃、アルプス、本気で、登ったって、知ってた?翔くん、本気で、すごい人ね、お父さん、絶対、本気で、誇り。',en:"Dad — youth Alps serious-climbed knew?, Sho Dad amazing absolute serious proud.",style:'Wistful.'},
    {speaker:'sho_child',jp:'お祖父ちゃん、本気で、相撲の土俵、見たことあるんだって、ぼく、絶対、いつか、見たいよ、ママ、お願い、本気で、本当に、絶対。',en:"Grandpa — sumo dohyo serious-seen, Sho absolute-sometime see-want, Mom please serious really absolute.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃん、囲碁、本気で、上手なのよ、翔くん、習ってみる?本気で、絶対、楽しいわよ、お祖父ちゃんに、教えてもらってね、絶対、本気。',en:"Grandpa — go serious-good, Sho learn-try?, fun absolute Grandpa-teach absolute serious.",style:'Warm close.'},
  ]},
  {id:'conv_07098',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、隣のクラスの健二、本気で、優秀な奴だぜ、お前、知り合い?桜、紹介、してくれる?お願い、絶対、本気で。',en:"Riku — next-class Kenji serious-excellent, you know?, Sakura intro?, please absolute serious.",style:'Curious teen.'},
    {speaker:'riku_teen',jp:'うん。理科の授業で、シェルのおもちゃ、本気で、扱ったぞ、桜、面白かったよな、本気で、覚えてる?絶対、ね。',en:"Yeah. Sci-class — shell-toy serious-handled, Sakura fun, remember?, serious absolute.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'うちの犬、本気で、獣医さんに、最近、よく、連れて行ってるんだよ、リク、心配なんだ、本気で、絶対、お互いに、応援してね、ね。',en:"Our dog — vet lately-often-take serious, Riku worry absolute serious mutual-cheer.",style:'Concerned.'},
    {speaker:'riku_teen',jp:'卒業式、本気で、皆、さようならって、お互い、寂しくなるよな、桜、お互いに、頑張ろうな、絶対、本気で、本当に、絶対。',en:"Grad-cere — all goodbye serious, mutual-lonely, Sakura mutual-try absolute serious really.",style:'Wistful.'},
    {speaker:'sakura_teen',jp:'修学旅行、本気で、船のドック、見学する予定らしいよ、リク、お前、楽しみだろ?絶対、本気で、嬉しい、ね、本気で、絶対。',en:"School trip — boat-dock visit-plan, Riku fun?, absolute serious-glad, serious absolute.",style:'Eager.'},
    {speaker:'riku_teen',jp:'地理の授業で、アルプス、本気で、興味、出てきたぞ、桜、お前も、興味、ある?いつか、本気で、行ってみたい、絶対。',en:"Geo-class — Alps serious-interest, Sakura interest?, sometime serious-go-want absolute.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'相撲の土俵、本気で、見たことある、リク?お父さん、お祖父ちゃんと、よく、行ってたって、本気で、面白そうだよね、絶対、本気で。',en:"Sumo dohyo — seen?, Riku, Dad-Grandpa often-went, fun-look absolute serious.",style:'Curious.'},
    {speaker:'riku_teen',jp:'囲碁、最近、お父さん、本気で、教えてくれるんだ、桜、お前、興味、ある?対戦してみない?本気で、絶対、楽しい、本当に、絶対。',en:"Go — lately Dad serious-teaching, Sakura interest?, match-try?, fun absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07099',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃の同僚、健二さん、本気で、頼もしい人だったよな、ばあさん、覚えてる?本当に、絶対、本気で、思い出すよ、いつも、本気。',en:"Youth-colleague Kenji — reliable serious, gran remember?, recall absolute serious always really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。新婚旅行、海で、シェル、二人で、本気で、たくさん、拾ったわよね、覚えてる、あなた?本当に、ロマンチック、絶対、本気で、絶対。',en:"Yes. Honeymoon sea — shells two serious-picked, remember, dear?, romantic absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'昔、飼ってた犬、獣医さんに、本気で、お世話になったわよな、ばあさん、覚えてる?家族、皆、感謝、絶対、本気で、本当に。',en:"Old dog — vet serious-cared, gran remember?, family all-gratitude absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃の友達、さようならの時、本気で、寂しかったわよね、覚えてる、あなた?本当に、絶対、また、会いたいわね、絶対、本気で、本当に。',en:"Youth-friends — goodbye-time serious-lonely, remember, dear?, again-meet want absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'お祖父ちゃん、若い頃、船のドック、本気で、働いていたんだって、ばあさん、覚えてる?本当に、苦労、絶対、本気で、感謝、絶対。',en:"Grandpa — youth boat-dock serious-worked, gran remember?, hardship absolute serious gratitude really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、新婚旅行、本気で、アルプス、行きたかったわよね、覚えてる、あなた?結局、別の場所だったけれども、絶対、本気で、思い出。',en:"Youth — honeymoon Alps serious-want-go, remember dear?, ended-elsewhere, memory absolute serious.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'お祖父ちゃん、相撲の土俵、本気で、若い頃、見に行ったことあるって、ばあさん、覚えてる?本気で、絶対、面白い、お話、本気。',en:"Grandpa — sumo dohyo serious-youth-saw, gran remember?, fun serious absolute talk really.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'若い頃、二人で、囲碁、本気で、対戦したわよね、覚えてる、あなた?私、本気で、負けたわよね、悔しかった、本気で、絶対、本当に。',en:"Youth — two go serious-matched, remember dear?, me serious-lost frustrating absolute really serious.",style:'Tender close.'},
  ]},
  {id:'conv_07100',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、新スタッフの健二さん、本気で、頼もしい人やな、葵で、絶対、力に、なってくれそうやで、本気で、本当に、絶対、本気。',en:"Aoi — new staff Kenji reliable serious, in Aoi absolute-help-likely serious really absolute.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。シェル型の食器、本気で、新作メニューに、絶対、合わせていきたいですね、葵で、お客様、絶対、喜んでくださいそう、本気で、本当に、絶対。',en:"Yes. Shell-tableware — new-menu match-want, Aoi cust-glad absolute serious really.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'店内で、ペット可エリア、本気で、検討中や、葵さん、獣医さんに、相談しようかと思てる、絶対、本気で、嬉しい計画。',en:"In-store pet-OK area — serious-study, Aoi vet-consult plan, absolute serious-glad plan.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。お客様、さようならの時、本気で、心、込めて、お見送りしましょう、葵で、絶対、おもてなしの心、伝わるはず、本気で、本当に。',en:"Yes. Cust — goodbye-time serious heart-include see-off, Aoi omotenashi-convey absolute serious really.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'港の近く、船のドックを、本気で、見渡せる店、絶対、出してみたいんや、葵さん、ロマンあるで、本当に、絶対、本気で、絶対。',en:"Near-port — boat-dock-see-able store absolute-out want, Aoi romance, really absolute serious.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。アルプス風の、本気で、洋食メニュー、葵で、絶対、出してみたいですね、本気で、本当に、お客様、絶対、喜んでくださいそう、本気で、本当に、本気。',en:"Yes. Alps-style Western-menu — Aoi absolute-out want, cust-glad absolute serious really.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'相撲の土俵みたいな、本気で、円形の、お皿、葵で、絶対、出してみよか、ユニークやで、お客さん、絶対、本気で、興味、持つで、本気で、本当に。',en:"Sumo dohyo-like circular plate — Aoi absolute-out?, unique cust-interest absolute serious really.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。囲碁愛好家のお客様、本気で、葵で、おもてなしできる、特別な、コーナー、絶対、設けたいです、本気で、本当に、絶対、感謝、絶対。',en:"Yes. Go-cust serious — Aoi-omotenashi-able special corner absolute-set want serious really absolute.",style:'Warm close.'},
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

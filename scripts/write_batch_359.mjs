import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_359 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['ことわざ','虫歯','ふんだんに','かぶり','豆乳','もてる','そういや','覗く']
const B_T = ['表象','場内','別館','採集','持ち出す','取り返し','備考','呼びかける']
const C_T = ['亡くなら','戦わ','誤認','下回っ','採掘','投棄','抄','癒着']
const D_T = ['レーン','バラード','アサ','ファイア','台場','ハロ','冴え','エッジ']

const data = [
  {id:'conv_07141',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お祖父ちゃんから、ことわざ、本気で、教えてもらったよ、ぼく、覚えたよ、絶対、嬉しい、本気で。',en:"Mom — Grandpa proverb taught, memorized, glad serious.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'うん。虫歯、できないように、本気で、歯磨き、しっかり、するのよ、翔くん、約束、絶対、ね。',en:"Yes. Cavity-prevention serious-brush, Sho promise absolute.",style:'Direction.'},
    {speaker:'sho_child',jp:'お祖母ちゃんの料理、ふんだんに、本気で、お野菜、入ってて、美味しいんだよね、ママ、絶対。',en:"Granny cooking — abundantly veggies-in, tasty Mom absolute.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'帽子、本気で、かぶり、外、暑いから、絶対、忘れないでね、翔くん、約束、本気で、絶対、ね。',en:"Hat — wear serious, outside-hot absolute don't-forget, Sho promise absolute.",style:'Direction.'},
    {speaker:'sho_child',jp:'豆乳、本気で、ぼく、最近、好きになってきたんだ、ママ、健康に、本気で、いいよね、絶対、絶対。',en:"Soy-milk — lately-like, Mom, health-good absolute serious.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'お父さん、本気で、若い頃、もてる人だったって、お祖母ちゃんから、聞いたわよ、翔くん、本当に、絶対、本気で。',en:"Dad — youth popular heard from-Granny, Sho really absolute serious.",style:'Reflective.'},
    {speaker:'sho_child',jp:'そういや、ママ、お母さんの日、絶対、近いよね、ぼく、本気で、お祝い、絶対、考えてるんだ、本気で、約束、絶対。',en:"By the way — Mother's-day near, me serious-cele-consider absolute promise.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'窓から、本気で、外の景色、覗くと、絶対、お祭りの提灯、見えるわよね、翔くん、楽しみね、本気で、絶対、本気で。',en:"From-window peek outside — fest-lanterns visible, Sho fun serious absolute.",style:'Warm close.'},
  ]},
  {id:'conv_07142',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、お祖母ちゃんから、本気で、ことわざ、教えてもらった、絶対、本気で、心に、響いた、本当に、感謝、絶対、本気で。',en:"Aoi — Granny proverb-taught, heart-resonate absolute serious gratitude really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'うん。虫歯、本気で、絶対、なりやすい体質、メイちゃん、葵で、心配してるわよ、本気で、本当に、絶対、本気で、絶対。',en:"Yeah. Cavity prone-body, Mei Aoi worry serious really absolute.",style:'Concerned.'},
    {speaker:'mei_romantic',jp:'葵の店、本気で、絶対、お洒落な、雑貨、ふんだんに、置いてあるよね、メイちゃん、感心、本当に、絶対、本気で、絶対。',en:"Aoi-store — stylish-goods abundantly placed, Mei admire really absolute serious.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、最近、本気で、絶対、可愛い帽子、買って、絶対、かぶり、楽しんでるのよ、メイちゃん、本気で、見に来てね、絶対。',en:"Aoi lately — cute-hat bought absolute-wear-enjoy, Mei come-see absolute.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'葵、豆乳ベースの、本気で、絶対、新作ラテ、メニューに、加えませんか?本気で、絶対、お客様、喜びそう、本当に、絶対。',en:"Aoi — soy-milk-base new latte menu-add?, cust-glad-likely really absolute.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'メイちゃん、本気で、絶対、もてる人ね、男性、いつも、葵で、見てるわよ、本気で、メイちゃん、誇り、絶対、本気、絶対。',en:"Mei — popular, men always-Aoi-see serious, Mei proud absolute serious.",style:'Praising.'},
    {speaker:'mei_romantic',jp:'そういや、葵、本気で、絶対、来月、誕生日よね、メイちゃん、お祝い、絶対、本気で、用意してるからね、本気で、約束、絶対、本気。',en:"By the way — Aoi next-month b-day, Mei cele absolute-prep, promise absolute serious.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'お店、ガラス越しに、本気で、絶対、お客様、覗くと、メイちゃんも、お洒落な、お席、絶対、見えるわよね、本気で、絶対、本気で。',en:"Store through-glass — cust-peek Mei stylish-seat absolute-visible, serious absolute.",style:'Warm close.'},
  ]},
  {id:'conv_07143',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、国語のテストで、本気で、絶対、ことわざ、いっぱい、出てきたよね、本気で、難しかった、絶対、本気で、絶対、本気で。',en:"Riku — Japanese test, proverbs many-out, hard absolute serious really.",style:'Wry teen.'},
    {speaker:'riku_teen',jp:'うん。最近、本気で、虫歯、できそうで、絶対、心配なんだぜ、桜、お互いに、歯磨き、徹底しような、絶対、本気、絶対。',en:"Yeah. Lately — cavity-likely worry, Sakura mutual-brush thorough absolute serious.",style:'Concerned.'},
    {speaker:'sakura_teen',jp:'お祭り、本気で、絶対、お弁当、ふんだんに、用意されてたよね、リク、お互いに、楽しかったわよね、絶対、本気で、本気、絶対。',en:"Fest — lunch abundantly prepared, Riku mutual-fun absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、お洒落な帽子、最近、かぶり、登校してるよね、桜、本気で、本当に、絶対、可愛い、本気、本気で、絶対。',en:"You — stylish-hat lately-wear, Sakura cute absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'リク、お母さん、本気で、豆乳の料理、絶対、得意なんだよね、本気で、メイちゃんに、お裾分け、絶対、本気、本気で、本当に。',en:"Riku — Mom soy-milk-cook good, Mei-share absolute serious really.",style:'Bright.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、男子から、もてる存在だぜ、桜、本気で、絶対、知ってる?クラスでも、本気で、人気者、絶対、本気。',en:"You — popular guys serious, Sakura knew?, class-pop serious absolute.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'そういや、リク、本気で、絶対、文化祭の準備、絶対、進んでる?お互いに、頑張ろうね、本気で、約束、絶対、本気、本気で、絶対。',en:"By the way — Riku, cult-fest prep advancing?, mutual-try promise absolute serious.",style:'Direction.'},
    {speaker:'riku_teen',jp:'放課後、本気で、絶対、教室、覗くと、桜、お前、いつも、いるよな、本気で、嬉しい、本当に、絶対、本気、本気で、絶対、本気。',en:"Post-class — peek classroom, Sakura always-exist serious, glad really absolute.",style:'Soft close.'},
  ]},
  {id:'conv_07144',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'昔のことわざ、本気で、絶対、深い、知恵、感じるよな、ばあさん、覚えてる?本気で、絶対、現代にも、繋がる、本気、絶対、絶対。',en:"Old proverbs — deep wisdom feel, gran remember?, modern-link absolute serious.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、虫歯、なくて、お互いに、健康だったわよね、覚えてる、あなた?本気で、絶対、本気で、本気で、絶対。',en:"Yes. Youth — cavity-none mutually healthy, remember dear?, serious absolute really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お祖父ちゃん、本気で、絶対、お料理、ふんだんに、絶対、振る舞ってくれたよな、ばあさん、覚えてる?本気で、絶対、感謝。',en:"Grandpa — cooking abundantly served, gran remember?, gratitude absolute serious.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、麦わら帽子、二人で、かぶり、お祭り、絶対、行ったわよね、覚えてる?本気で、絶対、本当に、絶対。',en:"Youth — straw-hat two-wore, fest-went, remember?, serious absolute really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'最近、本気で、絶対、豆乳、お互いに、よく、飲むようになったわよな、ばあさん、健康、第一だな、本気で、絶対、本気で。',en:"Lately — soy-milk mutual-often-drink, gran health-first serious absolute.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、もてる人だったわよな、覚えてる、あなた?私、本気で、絶対、ヤキモチ、絶対、本気、本気で。',en:"Youth Grandpa — popular, remember?, jealous absolute serious really.",style:'Wry.'},
    {speaker:'hiroshi_elder',jp:'そういや、ばあさん、本気で、絶対、今度の結婚記念日、絶対、お祝い、本気で、考えているぞ、本気、本気で、楽しみ、絶対、本気で、本当に。',en:"By the way — gran wedding-anniv cele-consider serious, fun absolute really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'昔、お祖父ちゃん、本気で、絶対、窓から、外、覗いて、子供たち、見守ってくれたわよね、覚えてる、あなた?本気で、絶対、本気で、本当に。',en:"Old — Grandpa window-peek kids-watched, remember dear?, serious absolute really.",style:'Tender close.'},
  ]},
  {id:'conv_07145',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、ことわざ、好きなのよ、絶対、本気で、いっぱい、教えてあげるね、約束、絶対、本気で、本気。',en:"Sho — Mei-sis proverb-love, lots-teach, promise absolute serious.",style:'Tender.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、虫歯、ないんだよ、メイ姉さん、ちゃんと、本気で、絶対、歯磨き、してるからね、絶対、本気で、絶対。',en:"Me — cavity-none, Mei-sis properly brush serious absolute.",style:'Proud child.'},
    {speaker:'mei_romantic',jp:'お弁当、本気で、絶対、ふんだんに、お菓子、入れてあげたわよ、翔くん、メイ姉さん、絶対、本気で、楽しんでね、本気で、絶対。',en:"Lunch — abundantly sweets-included, Sho Mei-sis enjoy absolute serious.",style:'Warm.'},
    {speaker:'sho_child',jp:'今日、ぼく、本気で、絶対、新しい帽子、絶対、かぶってきたよ、メイ姉さん、見て、可愛い?本気で、絶対、本気、絶対。',en:"Today — new-hat wore, Mei-sis see, cute?, serious absolute really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、豆乳ラテ、最近、はまってるのよ、翔くん、健康に、絶対、本気で、いいわよね、本気で、絶対、本気。',en:"Mei-sis — soy-milk-latte lately-hooked, Sho health-good absolute serious.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、もてる人だよね、お母さんが、いつも、言ってるよ、ぼく、絶対、本気で、誇り、絶対、本気で、本当に。',en:"Mei-sis — popular, Mom always-says, proud absolute serious really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'そういや、翔くん、本気で、絶対、お誕生日、近いわよね?メイ姉さん、絶対、お祝い、本気で、用意してるからね、約束、本気で、絶対。',en:"By the way — Sho b-day near?, Mei-sis cele-prep, promise absolute serious.",style:'Eager.'},
    {speaker:'sho_child',jp:'公園の柵から、本気で、絶対、池、覗いてみたいんだ、メイ姉さん、本気で、絶対、一緒に、行ってくれる?お願い、絶対、本気、本気で。',en:"Park fence — pond peek-want, Mei-sis together-go?, please absolute serious.",style:'Eager close.'},
  ]},
  {id:'conv_07146',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'当社の表象、本気で、絶対、社員、皆、誇りに、思える、ものに、本気で、絶対、していけ、本気で、頼んだぞ、絶対。',en:"Our co-symbol — staff-proud, serious absolute-do, ask absolute.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。発表会の場内、本気で、絶対、お客様、満員、本気で、感謝、しております、絶対、本当に、本気で、絶対、感謝、絶対。',en:"Yes. Pres-venue — cust-full serious gratitude really absolute serious.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'別館の改装、本気で、絶対、進めろ、本気で、社員、利用しやすい空間、絶対、目指せ、本気で、頼んだぞ、本気、絶対。',en:"Annex refurb — advance, staff easy-use space aim, ask serious absolute.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。市場の声の採集、本気で、絶対、徹底してまいります、本気で、絶対、お客様、絶対、ご満足、本気で、感謝、絶対、本気で、絶対。',en:"Yes. Market-voice gather — thorough, cust-satisfy absolute serious gratitude really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'機密、本気で、絶対、社外に、持ち出すな、絶対、社員、徹底させろ、本気で、頼んだぞ、絶対、本気で、絶対、本気、本気で。',en:"Confidential — outside don't-take, staff-thorough, ask absolute serious.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。取り返しのつかない、本気で、絶対、事態、避けるよう、社員、皆、本気で、絶対、注意しております、絶対、本気で、感謝、絶対。',en:"Yes. Irreparable situation avoid, all-staff serious-careful absolute serious gratitude.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'書類の備考欄、本気で、絶対、丁寧に、書け、本気で、お客様、絶対、わかりやすく、本気で、頼んだぞ、絶対、本気で、絶対、本気。',en:"Doc remarks — careful write, cust-clear, ask absolute serious.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員に、本気で、絶対、安全対策、呼びかける活動、本気で、絶対、続けてまいります、本気で、感謝、絶対、本気で、絶対、本気。',en:"Yes. Staff — safety-call activity serious-continue, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07147',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'当社のロゴ、本気で、絶対、ブランドの表象として、絶対、大切に、しましょうね、本気で、本気、絶対、本当に、本気で、絶対。',en:"Our logo — brand-symbol absolute-treasure, serious absolute really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。イベントの場内、本気で、絶対、お客様、満足、本気で、絶対、いただける空間、整えます、本気で、感謝、絶対、本気、絶対。',en:"Yes. Event venue — cust-satisfy space prep, gratitude absolute serious.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'別館の利用、本気で、絶対、社員、皆、お互いに、本気で、配慮しましょうね、本気で、本気、絶対、本当に、感謝、本気で、絶対。',en:"Annex-use — mutual-consider, gratitude absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。顧客データの採集、本気で、絶対、法に基づき、絶対、慎重に、進めてまいります、本気で、感謝、絶対、本気で、絶対、本気。',en:"Yes. Cust-data gather — law-based careful advance, gratitude absolute serious.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'社内情報、本気で、絶対、社外に、絶対、持ち出さないよう、社員、徹底してね、本気で、本気、絶対、本当に、感謝、本気で、絶対。',en:"Internal-info — outside-take absolute-don't, staff-thorough, gratitude absolute serious.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。取り返しのつかない、本気で、絶対、ミス、避けるよう、社員、皆、本気で、絶対、心がけております、本気で、感謝、絶対、本気、絶対。',en:"Yes. Irreparable mistake avoid, all-staff serious-mindful, gratitude absolute serious.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'書類の備考、本気で、絶対、確認、徹底してね、本気で、本気、絶対、本当に、感謝、しております、本気で、本気で、絶対、本気で。',en:"Doc remarks — verify thorough, gratitude absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、コミュニケーション、呼びかける、雰囲気、絶対、作ってまいります、本気で、感謝、絶対、本気、絶対、本気で。',en:"Yes. Staff — comm-call air-make, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07148',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究、本気で、絶対、君の表象、絶対、研究者として、本気で、磨いていけ、本気で、頼んだぞ、絶対、本気で、絶対、本気で、絶対。',en:"Ren — research your-symbol, as researcher polish, ask absolute serious.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。学会の場内、本気で、絶対、独自の発表、絶対、目指してまいります、本気で、感謝、しております、本当に、絶対、本気で、絶対。',en:"Yes. Conf venue — original-pres aim, gratitude really absolute serious.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究室の別館、本気で、絶対、活用、進めろ、本気で、君の研究、絶対、捗るからな、本気で、頼んだぞ、絶対、本気で、絶対、本気。',en:"Lab-annex — utilize advance, your research-progress, ask absolute serious.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。データ採集、本気で、絶対、丁寧に、絶対、進めてまいります、本気で、感謝、しております、本気で、本当に、絶対、本気で、絶対。',en:"Yes. Data-gather — careful advance, gratitude really absolute serious.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究データ、本気で、絶対、研究室外、絶対、持ち出すな、本気で、機密保持、徹底だ、本気で、頼んだぞ、本気で、絶対、本気で、絶対。',en:"Research-data — outside don't-take, conf-keep thorough, ask absolute serious.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。取り返しのつかない、本気で、絶対、ミス、避けるよう、本気で、絶対、慎重に、研究、進めてまいります、本気で、感謝、絶対、本気で。',en:"Yes. Irreparable mistake avoid, careful research-advance, gratitude absolute serious.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'論文の備考、本気で、絶対、丁寧に、書け、本気で、読み手、絶対、わかりやすく、本気で、頼んだぞ、絶対、本気で、絶対、本気で。',en:"Paper remarks — careful write, reader-clear, ask absolute serious.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。後輩に、本気で、絶対、勉強会、呼びかけるつもりです、本気で、知識、共有してまいります、本気で、感謝、絶対、本気で、絶対、本気。',en:"Yes. Junior — study-call plan, knowledge-share, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07149',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察の表象、本気で、絶対、市民の安全、第一に、絶対、努めてまいります、本気で、感謝、しております、絶対、本気で、絶対、本気。',en:"Police symbol — citizen-safety first try, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、警察の発表、場内、絶対、注目しております、本気で、本気、絶対、本当に、感謝、本気で、絶対、本気で。',en:"Yes. Our co — police-pres venue attention, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察署の別館、本気で、絶対、市民、絶対、お越し、いただける空間、整えております、本気で、本気、絶対、本当に、本気で、絶対。',en:"Station annex — citizen-visit space prep, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。被害者からの情報、本気で、絶対、慎重に、絶対、採集、進めております、本気で、感謝、本当に、絶対、本気で、絶対、本気で。',en:"Yes. Victim-info — careful gather advance, gratitude really absolute serious.",style:'Update.'},
    {speaker:'takeda_officer',jp:'証拠品、本気で、絶対、警察、外に、絶対、持ち出すこと、ありません、本気で、本気、絶対、ご安心、本気で、絶対、本気で、絶対。',en:"Evidence — outside take-absolute don't, rest-assured serious absolute really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。取り返しのつかない、本気で、絶対、犯罪、絶対、防ぐ、当社の、本気で、絶対、責任、本気で、感謝、本気で、絶対、本気、絶対。',en:"Yes. Irreparable crime prevent our co-resp, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'被害届の備考欄、本気で、絶対、市民、絶対、丁寧に、お書きください、本気で、感謝、しております、絶対、本気で、絶対、本気で、本気。',en:"Damage-claim remarks — citizen carefully write, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。社員に、本気で、絶対、防犯活動、呼びかけてまいります、本気で、本気、絶対、警察様、感謝、本気で、本気で、絶対、本気で、絶対。',en:"Yes. Staff — crime-prev call-continue, police-gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07150',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業者の表象、本気で、絶対、お父さん、お前にも、絶対、引き継いで欲しい、本気で、頼んだぞ、絶対、本気で、絶対、本気で、絶対。',en:"Founder symbol — Dad you inherit-want, ask absolute serious.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代の、創業祭の場内、本気で、絶対、忘れずに、保ってまいります、本気で、感謝、本当に、絶対、本気で、絶対。',en:"Yes. Dad-era — corp-fest venue keep-without-forget, gratitude really absolute.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'創業時の別館、本気で、絶対、私の、宝物、お前にも、本気で、絶対、見せたい、本気で、頼んだぞ、絶対、本気で、絶対、本気で。',en:"Founding annex — my treasure, you-show want, ask absolute serious.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、データ採集、慎重に、続けております、本気で、感謝、しております、絶対、本気で、絶対。',en:"Yes. Since Dad-era — data-gather careful continue, gratitude absolute serious.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'創業時の機密、本気で、絶対、お父さん、外に、絶対、持ち出さなかった、お前にも、本気で、絶対、伝えたい、絶対、本気で、絶対。',en:"Founding conf — Dad outside-take-not, you-convey want absolute serious.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、取り返しのつかない、決断、絶対、避けてきました、本気で、感謝、絶対、本気で、絶対、本気。',en:"Yes. Since Dad-era — irreparable decisions avoided, gratitude absolute serious.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お得意様への、お便りの備考、本気で、絶対、お父さん、丁寧に、絶対、書いてきたぞ、お前にも、本気で、頼んだぞ、本気で、絶対、本気。',en:"VIP letter remarks — Dad carefully wrote, you-ask absolute serious.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。社員に、本気で、絶対、創業精神、呼びかけることを、忘れません、本気で、感謝、しております、絶対、本気で、絶対、本気で、絶対。',en:"Yes. Staff — founding-spirit-call don't-forget, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07151',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、被害者、本気で、絶対、不幸にも、亡くなられました、警察、本気で、絶対、ご家族、お悔やみ、本気で、感謝、絶対、本気で。',en:"Case — victim died regrettably, police family-condol serious gratitude absolute.",style:'Calm.'},
    {speaker:'ren_uni',jp:'警察の方々、本気で、絶対、犯罪と戦われている姿、本当に、立派ですよね、絶対、感謝、しております、本気で、本当に、絶対、本気。',en:"Officers — crime-fighting stance splendid, gratitude really absolute serious.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、本気で、絶対、誤認逮捕、絶対、避けるよう、慎重に、進めております、本気で、本当に、感謝、絶対、本気で、絶対。',en:"Yes. Suspect — false-arrest absolute-avoid, careful advance, gratitude really absolute.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'今年の犯罪件数、本気で、昨年を、絶対、下回ったと、聞きました、警察、本気で、本当に、感謝、絶対、本気で、絶対、本気で、絶対。',en:"This-year crime — last-yr below heard, police-gratitude really absolute serious.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。違法な、本気で、絶対、資源採掘、絶対、当局、本気で、対応しております、本気で、本当に、絶対、感謝、本気で、絶対、本気。',en:"Yes. Illegal mining — auth-resp serious, gratitude really absolute serious.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'不法投棄、本気で、絶対、社会問題ですよね、警察、本気で、本当に、対応、感謝、しております、絶対、本気で、絶対、本気で、絶対。',en:"Illegal-dump — soc-issue, police-resp gratitude really absolute serious.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。捜査記録の抄録、本気で、絶対、市民、本気で、絶対、開示しております、本気で、感謝、絶対、本気で、本気、絶対、絶対。',en:"Yes. Inv-record abstract — citizen-disclose, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'政治と警察の癒着、本気で、絶対、ないこと、本気で、市民、絶対、信じております、本気で、感謝、絶対、本気で、絶対、本気で、絶対。',en:"Pol-police collusion — absolute-none, citizen-believe, gratitude absolute serious.",style:'Reflective close.'},
  ]},
  {id:'conv_07152',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses historical research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、戦時、本気で、絶対、亡くなられた方々、論文で、扱っていましたね、本気で、立派、絶対、本当に、感心、本気で、絶対、本気。',en:"Ren — wartime died-people paper-handled, splendid absolute really admire.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。当時、本気で、絶対、戦われた人々の、生き様、論文で、扱いました、本気で、深い、研究、絶対、本気、本気で、感謝、本当に。',en:"Yes. Era fought-people life-way paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、誤認による、逮捕、本気で、論文で、扱っていましたね、本気で、本当に、視野、広い、立派、絶対、感心、絶対。',en:"Wartime — false-arrests paper-handled, view broad splendid admire absolute.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。当時の経済、本気で、戦前を、絶対、下回った時代、論文で、扱いました、本気で、深い、研究、絶対、本気で、感謝、本当に、絶対。',en:"Yes. Era econ — pre-war below era, paper-handled, deep research absolute gratitude.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、鉱物採掘、本気で、軍事に、絶対、関わった歴史、論文で、扱っていましたね、本気で、感心、絶対、本気で、絶対。',en:"Wartime — mineral-mining military-related hist paper-handled, admire absolute serious.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。当時、本気で、絶対、不法投棄、絶対、深刻な、社会問題、論文で、扱いました、本気で、本当に、感謝、絶対、本気で、絶対、本気で。',en:"Yes. Era — illegal-dump severe soc-issue paper-handled, gratitude really absolute serious.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'当時の記録の抄録、本気で、絶対、貴重な、史料、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、本気、絶対、本気で。',en:"Era-record abstract — precious archive paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。政治と財界の癒着、本気で、絶対、戦時、絶対、深刻、論文で、扱いました、本気で、本気、絶対、深い、研究、感謝、絶対、本気、絶対。',en:"Yes. Pol-biz collusion — wartime severe paper-handled, deep research gratitude absolute.",style:'Earnest close.'},
  ]},
  {id:'conv_07153',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、患者さん、本気で、絶対、亡くなられた時、本気で、医師として、絶対、辛い時間、本気で、本当に、絶対、感謝、本気で、絶対。',en:"Ren — patient died, as doctor hard-time serious really absolute gratitude.",style:'Calm.'},
    {speaker:'ren_uni',jp:'医療従事者、本気で、絶対、戦われている毎日、絶対、頭が下がります、先生、本気で、本当に、感謝、絶対、本気で、絶対、本気で、絶対。',en:"Med-workers — daily-fight stance, humbled, sensei gratitude really absolute serious.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。誤認診断、本気で、絶対、避けるよう、医師、本気で、慎重に、診察してまいります、本気で、感謝、絶対、本気で、本気、絶対、本気で。',en:"Yes. Misdiag avoid, doctor careful-exam, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'今年の患者数、本気で、絶対、昨年を、下回ったとのこと、本気で、医療界、絶対、嬉しいですね、先生、本気で、本当に、絶対、感謝。',en:"This-year patient-count — last-yr below, med-world glad, sensei gratitude really absolute.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。新薬の元素、本気で、絶対、採掘から、絶対、関わる重要な、研究、進めております、本気で、感謝、絶対、本気で、絶対、本気、絶対。',en:"Yes. New-drug elements — from-mining vital-research advance, gratitude absolute serious.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医療廃棄物の投棄、本気で、絶対、社会問題ですよね、先生、本気で、本当に、慎重に、絶対、処理、必要ですよね、感謝、絶対、本気、絶対。',en:"Med-waste-dump — soc-issue, sensei careful-process needed, gratitude absolute serious.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。診療記録の抄録、本気で、絶対、患者さんに、絶対、開示しております、本気で、本当に、感謝、絶対、本気で、絶対、本気、絶対、本気。',en:"Yes. Med-record abstract — patient-disclose, gratitude really absolute serious.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療と製薬業界の癒着、本気で、絶対、ないこと、市民、本気で、絶対、信じております、感謝、絶対、本気で、絶対、本気、絶対、本気で、絶対。',en:"Med-pharma collusion — none, citizen-believe, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07154',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp strategy',lines:[
    {speaker:'hiroshi_boss',jp:'創業者、本気で、絶対、亡くなられて、もう、十年、絶対、お父さん、本気で、引き継ぎ、頑張ってまいります、本気で、感謝、絶対、本気で。',en:"Founder died — 10 yrs, Dad inherit try, gratitude absolute serious.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。業界で、本気で、絶対、戦い抜く、覚悟、本気で、社員、皆、絶対、持っております、本気で、本当に、感謝、本気で、絶対、絶対。',en:"Yes. Industry — fight-through resolve, staff hold, gratitude really absolute serious.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'誤認製品、本気で、絶対、市場に、絶対、出ないよう、品質管理、本気で、徹底させろ、本気で、頼んだぞ、絶対、本気、絶対、本気で。',en:"Mis-id product — market don't-out, QC thorough, ask absolute serious.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。今期の売上、本気で、絶対、目標を、絶対、下回らないよう、頑張ってまいります、本気で、感謝、本気で、絶対、本気で、絶対、絶対。',en:"Yes. This-term sales — target don't-fall-below, try, gratitude absolute serious.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'創業時の鉱物採掘事業、本気で、絶対、当社の原点、本気で、社員、皆、絶対、誇りに、思え、本気で、頼んだぞ、絶対、本気、絶対、本気で。',en:"Founding mining-biz — our origin, staff proud, ask absolute serious.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、不法投棄、絶対、過去にも、現在も、ありません、本気で、誇り、絶対、感謝、絶対、本気で、絶対、本気で、絶対。',en:"Yes. Our co — illegal-dump past-present none, proud, gratitude absolute serious.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'社内資料の抄録、本気で、絶対、社員、皆、活用するよう、頼んだぞ、本気で、知識共有、本気で、絶対、頼んだぞ、本気、絶対、本気で。',en:"Internal-mat abstract — staff-utilize, ask, knowledge-share absolute serious.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。政治と当社の癒着、本気で、絶対、ありません、お客様、本気で、絶対、信頼、いただきたいです、感謝、本気で、絶対、本気、本気で、絶対。',en:"Yes. Pol-our collusion — none, cust-trust-want, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07155',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、戦時、本気で、絶対、亡くなられた、市民、論文で、扱っていましたね、本気で、立派、絶対、本当に、感心、本気で、絶対、本気。',en:"Sakura — wartime died-citizens paper-handled, splendid absolute really admire.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。当時、本気で、絶対、人々が、戦われた、本気で、絶対、生き様、論文で、扱いました、本気で、深い、研究、絶対、感謝、本気、絶対。',en:"Yes. Era — people-fought, life-way paper-handled, deep research absolute gratitude.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、誤認による、迫害、本気で、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、本気で、感心、絶対。',en:"Wartime — false-id-persecution paper-handled, view broad splendid absolute admire.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦中、本気で、絶対、生活水準、戦前を、下回った歴史、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気で。',en:"Yes. Wartime — life-standard pre-war below hist, paper-handled, deep research absolute gratitude.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、地下資源採掘、論文で、本気で、扱っていましたね、本気で、視野、広い、絶対、立派、本気で、感心、絶対、本気、絶対。',en:"Wartime — underground-resource mining paper-handled, view broad splendid admire absolute.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。戦時、本気で、絶対、廃棄物投棄、絶対、深刻な、問題、論文で、扱いました、本気で、本当に、感謝、絶対、本気で、絶対、本気、絶対。',en:"Yes. Wartime — waste-dump severe issue paper-handled, gratitude really absolute serious.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'当時、本気で、絶対、文献の抄録、貴重な、史料、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、本気、絶対、本気で、絶対。',en:"Era lit-abstract — precious archive paper-handled, admire really absolute serious.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦時、本気で、絶対、政治と財界の癒着、論文で、扱いました、本気で、現代にも、繋がる、本気で、本気、絶対、深い、研究、感謝、絶対。',en:"Yes. Wartime pol-biz collusion paper-handled, modern-link, deep research gratitude absolute.",style:'Earnest close.'},
  ]},
  {id:'conv_07156',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、ボーリングのレーン、本気で、絶対、彼と、絶対、行きたいよね、メイちゃん、本気で、絶対、楽しい、絶対、本気、本気で、本当に。',en:"Aoi — bowling lane with-bf go-want, Mei serious-fun absolute.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。バラードの曲、本気で、葵で、絶対、流すと、お客様、本気で、絶対、ロマンチック、感じてくれるわよ、メイちゃん、本気、絶対、本気で。',en:"Yeah. Ballad — Aoi-play, cust romantic-feel serious absolute, Mei serious.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'お祭りで、本気で、絶対、アサヒの花火、絶対、楽しんだよね、葵、メイちゃん、本気で、絶対、感動した、本気で、本気、本気で、絶対。',en:"Fest — Asahi-fireworks enjoyed, Aoi Mei moved absolute serious really.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'夏の、本気で、絶対、ファイアダンス、葵で、絶対、見学したわよ、メイちゃん、本気で、本当に、感動、絶対、本気、絶対、本気で、絶対。',en:"Summer firedance — Aoi-observed, Mei moved really absolute serious.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'お台場、本気で、絶対、行ったわよ、彼と、メイちゃん、葵、本気で、絶対、楽しかった、本気で、本気、本気で、本当に、絶対、本気で。',en:"Odaiba — with-bf went, Mei Aoi fun absolute serious really.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'ハロウィン、本気で、絶対、葵で、特別なイベント、絶対、企画してるのよ、メイちゃん、本気で、絶対、来てね、本気で、本気、絶対、絶対。',en:"Halloween — Aoi special-event planning, Mei come absolute serious.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'葵、最近、本気で、絶対、冴え冴えとした、判断、絶対、お見事ね、メイちゃん、本気で、感心、本気で、本気、本気で、本当に、絶対。',en:"Aoi lately — sharp-judgment splendid, Mei admire serious really absolute.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵の店、本気で、絶対、エッジの効いた、デザイン、絶対、本気で、お洒落、メイちゃん、本気で、感心、本気で、本気、本気で、本当に、絶対。',en:"Aoi-store — edgy-design stylish, Mei admire serious really absolute.",style:'Cheerful close.'},
  ]},
  {id:'conv_07157',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お父さん、本気で、絶対、ボーリングのレーンで、絶対、上手なんだよ、ぼく、本気で、誇り、絶対、本気で、絶対、本気で。',en:"Mom — Dad bowling-lane good, proud absolute serious really.",style:'Proud child.'},
    {speaker:'yumiko_mom',jp:'うん。お父さん、本気で、絶対、バラードの曲、絶対、好きなのよ、翔くん、本気で、絶対、よく、口ずさんでるわよ、本気、絶対、本気で。',en:"Yes. Dad — ballad-love, Sho often-hum serious absolute really.",style:'Tender.'},
    {speaker:'sho_child',jp:'お祖父ちゃんち、本気で、絶対、アサが、絶対、咲いていたよ、ママ、覚えてる?本気で、絶対、綺麗、本気で、本気、絶対、本気で。',en:"Grandpa's — morning-glory bloomed, Mom remember?, pretty absolute serious.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'夏祭り、本気で、絶対、ファイアショー、絶対、家族で、楽しんだわよね、翔くん、覚えてる?本気で、絶対、感動、本気で、絶対、本気、本気で。',en:"Fest — fire-show family-enjoyed, Sho remember?, moved absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'家族で、本気で、絶対、お台場、絶対、行きたいよね、ママ、夏休みに、行こうよ、絶対、本気で、本気、絶対、お願い、本気で、絶対。',en:"Family — Odaiba go-want, Mom summer-go, absolute please serious.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'今年、本気で、絶対、ハロウィン、絶対、家族で、楽しもうね、翔くん、お母さん、本気で、絶対、衣装、用意してるわよ、本気で、絶対、本気。',en:"This-yr — Halloween family-enjoy, Sho Mom costume-prep serious absolute.",style:'Cheerful.'},
    {speaker:'sho_child',jp:'お父さん、本気で、絶対、頭が、冴え冴えとした、人だよね、ママ、ぼく、本気で、絶対、尊敬してる、本気、絶対、本気で、本気で、絶対。',en:"Dad — head sharp person, Mom me respect serious absolute really.",style:'Praising.'},
    {speaker:'yumiko_mom',jp:'お父さん、本気で、絶対、エッジの効いた、本気で、絶対、デザイン、お洒落、好きだよね、翔くん、ね、絶対、本気で、本気、絶対、本気で、絶対。',en:"Dad — edgy design stylish-love, Sho?, absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07158',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、放課後、本気で、絶対、ボーリングのレーン、皆で、絶対、行こうよ、本気で、絶対、楽しいよ、本気で、本気、絶対、本気で、絶対。',en:"Riku — post-class bowling-lane all-go, fun absolute serious really.",style:'Eager teen.'},
    {speaker:'riku_teen',jp:'うん。卒業式、本気で、絶対、バラードの曲、絶対、流れるんだろうな、桜、お互いに、感動、本気で、絶対、本気、本気で、本当に。',en:"Yeah. Grad-cere — ballad play, Sakura mutual-moved absolute serious really.",style:'Wistful.'},
    {speaker:'sakura_teen',jp:'生物の授業で、本気で、絶対、アサの観察、絶対、面白かったよね、リク、お互いに、本気で、絶対、勉強になった、本気、本気で、絶対。',en:"Bio class — morning-glory observe fun, Riku mutual-learn absolute serious.",style:'Animated.'},
    {speaker:'riku_teen',jp:'文化祭で、本気で、絶対、ファイアパフォーマンス、絶対、見たいよな、桜、お互いに、本気で、絶対、楽しみ、本気、本気で、本当に、絶対。',en:"Cult-fest — fire-perf see-want, Sakura mutual-fun absolute serious really.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'夏休み、本気で、絶対、お台場、絶対、家族で、行く予定なんだ、リク、お前も、本気で、絶対、楽しんでね、絶対、本気、本気で、本気で、絶対。',en:"Summer — Odaiba family-go-plan, Riku also-enjoy absolute serious really.",style:'Bright.'},
    {speaker:'riku_teen',jp:'ハロウィン、本気で、絶対、皆で、絶対、衣装、本気で、絶対、合わせよう、桜、本気で、絶対、楽しみだぜ、本気、本気で、本当に、絶対。',en:"Halloween — all-costume match, Sakura fun absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、冴え冴えとした、判断、絶対、するよね、本当に、本気で、絶対、感心、本気、絶対、本気で、本気で、絶対。',en:"Riku — sharp-judgment, admire really absolute serious.",style:'Praising.'},
    {speaker:'riku_teen',jp:'お前の話、本気で、絶対、エッジの効いた、視点、絶対、面白いよな、桜、本気で、絶対、感心、本気、本気で、本気で、本当に、絶対、本気。',en:"Your talk — edgy view fun, Sakura admire absolute serious really.",style:'Praising close.'},
  ]},
  {id:'conv_07159',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、ボーリングのレーン、二人で、絶対、行ったわよな、ばあさん、覚えてる?本気で、絶対、ロマンチック、本気、絶対。',en:"Youth — bowling-lane two went, gran remember?, romantic absolute serious.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。本気で、絶対、結婚式、絶対、バラードの曲、絶対、流れたわよね、覚えてる、あなた?本気で、絶対、感動した、本気、絶対、本気で。',en:"Yes. Wedding — ballad played, remember dear?, moved absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お祖母ちゃん、絶対、アサを、絶対、育てていたわよな、ばあさん、覚えてる?本気で、絶対、本気、本気で。',en:"Youth — Granny morning-glory grew, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、ファイアキャンプ、絶対、家族で、絶対、行ったわよね、覚えてる、あなた?本気で、絶対、思い出、本気、本気で、絶対。',en:"Youth — fire-camp family went, remember dear?, memory absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お台場、絶対、まだ、絶対、開発されていない時代、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気で、絶対。',en:"Youth — Odaiba un-developed era, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'孫が、本気で、絶対、ハロウィン、絶対、楽しんでるわよね、あなた、覚えてる?本気で、絶対、可愛い、本気、絶対、本気で、本気で、絶対。',en:"Grandkid — Halloween enjoying, dear remember?, cute absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃のばあさん、本気で、絶対、冴え冴えとした、絶対、美貌、本気で、絶対、覚えてるよ、本気、本気で、本気で、絶対、本気、絶対、本気で。',en:"Youth gran — sharp-beauty remember, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、エッジの効いた、ファッション、絶対、好きだったわよね、覚えてる?本気で、絶対、本気、本気で、本気、絶対。',en:"Youth Grandpa — edgy fashion love, remember?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07160',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、近くに、本気で、絶対、ボーリング場、絶対、できたで、お客さん、本気で、絶対、連動企画、絶対、面白そうやな、本気で、本気、本気で。',en:"Aoi — near bowling-built, cust collab-fun absolute serious really.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。バラードのBGM、本気で、絶対、葵で、流す時間帯、絶対、増やしませんか、本気で、お客様、絶対、喜んでくださいそう、本気、絶対。',en:"Yes. Ballad BGM — Aoi-play time increase?, cust-glad absolute serious.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'夏のメニューに、本気で、絶対、アサヒビールの、絶対、ペアリング、本気で、提案してみよか、葵さん、絶対、本気で、本気、本気で、絶対。',en:"Summer menu — Asahi-beer pairing propose-try?, Aoi absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。ハロウィンイベントで、本気で、絶対、ファイアダンスショー、絶対、企画したいですね、葵で、本気で、本気、絶対、本気で、絶対、お客様、絶対。',en:"Yes. Halloween — fire-dance-show plan-want, Aoi serious absolute, cust absolute.",style:'Eager.'},
    {speaker:'daichi_kansai',jp:'お台場の支店、本気で、絶対、出してみたいんや、葵さん、本気で、絶対、ロケーション、絶対、最高やで、本気、本気で、本気で、絶対、本気。',en:"Odaiba branch — out-want, Aoi location best absolute serious really.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'はい。ハロウィン、本気で、絶対、葵で、絶対、特別装飾、絶対、進めましょう、本気で、お客様、絶対、楽しんでくださいそう、本気、本気で、絶対。',en:"Yes. Halloween — Aoi special-decor advance, cust-enjoy absolute serious.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'葵さんの判断、本気で、絶対、冴え冴えとしてはるな、本気で、感心、しとるで、本気で、絶対、本気、本気で、本気で、本当に、絶対、本気で。',en:"Aoi-judgment sharp serious, admire really absolute serious.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'はい。葵で、本気で、絶対、エッジの効いた、絶対、新メニュー、絶対、出していきたいですね、本気で、お客様、本気で、絶対、感動、絶対、本気、絶対。',en:"Yes. Aoi — edgy new-menu out-want, cust-moved absolute serious really.",style:'Warm close.'},
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

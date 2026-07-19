import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_360 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['アキ','垂れ','行儀','ドーナツ','スナック','埃','味わえる','うんと']
const B_T = ['付着','印鑑','コンペ','足場','自粛','増減','連覇','鉄人']
const C_T = ['潜ん','見送っ','史観','極秘','潜入','バイアス','毒性','頻発']
const D_T = ['ヒール','ハザード','聖職','刺繍','中心地','辿っ','オートバイ','マンゴー']

const data = [
  {id:'conv_07161',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お友達のアキちゃん、本気で、優しい子なんだよ、ぼく、絶対、好きなんだ、本気で、本当に、絶対。',en:"Mom — friend Aki kind, love absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'うん。お味噌、ポタポタ、垂れちゃってるわよ、翔くん、絶対、気をつけてね、ふきんで、絶対、拭こうね。',en:"Yes. Miso — drip-drip falling, Sho careful absolute, towel-wipe absolute.",style:'Direction.'},
    {speaker:'sho_child',jp:'ぼく、食事の行儀、絶対、よくするからね、ママ、約束、本気で、絶対、本当に、本気で、絶対。',en:"Me — meal-manners absolute-good, Mom promise serious absolute really.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'おやつに、本気で、絶対、ドーナツ、買ってきたわよ、翔くん、本気で、楽しみよね、絶対、本気で、絶対、本気、絶対。',en:"Snack — donut bought, Sho fun absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'お友達と、本気で、絶対、スナック、シェアしながら、絶対、楽しい時間、過ごしてるよ、ママ、本気で、絶対、本気、絶対。',en:"Friend — snack-share, fun-time spend, Mom serious absolute really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お部屋、本気で、絶対、埃、絶対、たまっているわよ、翔くん、お母さんと、絶対、お掃除、しましょうね、本気で、絶対、本気。',en:"Room — dust absolute-collected, Sho Mom-together clean absolute serious.",style:'Direction.'},
    {speaker:'sho_child',jp:'お祖母ちゃんの料理、本気で、絶対、深い味、絶対、味わえるんだよ、ママ、本気で、本当に、感謝、絶対、本気、絶対、本気で。',en:"Granny cooking — deep-taste absolute-feel, Mom gratitude really absolute serious.",style:'Praising.'},
    {speaker:'yumiko_mom',jp:'夏休み、本気で、絶対、うんと、楽しい時間、絶対、過ごしましょうね、翔くん、約束、本気で、絶対、本気、本気で、本当に、絶対。',en:"Summer — much fun-time spend, Sho promise absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07162',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、新スタッフのアキちゃん、本気で、絶対、優しい人ね、メイちゃん、本気で、感心、本気で、本気、絶対、本気で、絶対、本気で、絶対。',en:"Aoi — new staff Aki kind, Mei admire serious absolute really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。ソース、本気で、絶対、垂れないように、メイちゃん、葵で、お皿、絶対、設計、こだわってるのよ、本気で、絶対、本気で、絶対。',en:"Yeah. Sauce — don't-drip, Mei Aoi-plate insist design, serious absolute really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵のお客様、本気で、絶対、行儀、絶対、いい方ばかりよね、メイちゃん、葵で、本気で、感心、本気で、本気、絶対、本気で、絶対。',en:"Aoi-cust — manners-good-only, Mei Aoi admire serious absolute really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'新メニューに、本気で、絶対、ドーナツ、絶対、加えたわよ、メイちゃん、葵で、本気で、絶対、味わってみて、本気で、絶対、本気、絶対。',en:"New menu — donut added, Mei Aoi taste-try, serious absolute really.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'葵、お客様、本気で、絶対、スナック、絶対、お子様向けに、絶対、出してるのよね、メイちゃん、本気で、感心、本気で、絶対、絶対。',en:"Aoi — cust kid-snack out, Mei admire serious absolute really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'葵で、本気で、絶対、埃、絶対、たまらないように、絶対、毎日、絶対、お掃除、徹底してるよ、メイちゃん、本気で、絶対、本気、絶対。',en:"Aoi — dust don't-collect, daily-clean thorough, Mei serious absolute really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵のコーヒー、本気で、絶対、深い味、味わえるよね、メイちゃん、葵で、本気で、絶対、本気、本気、絶対、本気で、本気で、絶対、感謝。',en:"Aoi coffee — deep-taste taste-able, Mei Aoi serious absolute really gratitude.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'お客様、本気で、絶対、うんと、絶対、お洒落な、葵で、本気で、絶対、過ごしていただきたい、本気で、絶対、本気、本気で、絶対。',en:"Cust — much stylish Aoi-spend want, serious absolute really.",style:'Warm close.'},
  ]},
  {id:'conv_07163',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、本気で、絶対、アキちゃんって、絶対、お前、隣のクラスの子だっけ?本気で、絶対、可愛い子だよね、本気で、絶対、本気で、絶対。',en:"Riku — Aki, next-class kid?, cute, serious absolute really.",style:'Curious teen.'},
    {speaker:'riku_teen',jp:'うん。お弁当、本気で、絶対、汁、垂れちゃって、絶対、ちょっと、悲しかったぜ、桜、お前、本気で、笑える?',en:"Yeah. Lunch soup-spilled sad, Sakura you laugh?",style:'Wry.'},
    {speaker:'sakura_teen',jp:'お前、本気で、絶対、行儀、よく、絶対、食べてるよね、リク、本気で、絶対、感心、本気で、本気、絶対、本気で、絶対、本気。',en:"You — manners well-eat, Riku admire serious absolute really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'放課後、本気で、絶対、ドーナツ、絶対、お前と、買って、絶対、食べたいよな、桜、本気で、絶対、本気、本気で、絶対、楽しみ。',en:"Post-class — donut you-buy-eat-want, Sakura fun absolute serious really.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'試験前、本気で、絶対、スナック、絶対、お互いに、シェアしようね、リク、本気で、絶対、約束、本気で、絶対、本気、本気で、絶対。',en:"Pre-test — snack mutual-share, Riku promise serious absolute really.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'部室、本気で、絶対、埃、絶対、たまってるからな、桜、お互いに、絶対、お掃除、しような、本気で、絶対、本気、本気で、絶対、絶対。',en:"Club-room — dust collected, Sakura mutual-clean, serious absolute really.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'お祖母ちゃんち、本気で、絶対、田舎の味、絶対、味わえるんだよ、リク、お前、一緒に、絶対、行きたい?本気で、絶対、本気、絶対。',en:"Granny's — country-taste taste-able, Riku together-go-want?, serious absolute really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'夏休み、本気で、絶対、うんと、絶対、お互いに、楽しもうな、桜、本気で、絶対、約束、本気で、絶対、本気、本気で、絶対、本気で、絶対。',en:"Summer — much mutual-enjoy, Sakura promise serious absolute really.",style:'Eager close.'},
  ]},
  {id:'conv_07164',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさんの妹さん、本気で、絶対、アキさんって、絶対、優しい人だったよな、覚えてる?本気で、本気、絶対、本気で、絶対。',en:"Youth — gran-sis Aki kind, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。最近、お祖父ちゃん、本気で、絶対、お口、絶対、垂れちゃうこと、増えたわよね、あなた、本気で、絶対、お互いに、年だしね。',en:"Yes. Lately Grandpa — mouth-drip increased, dear mutual-aged absolute.",style:'Concerned.'},
    {speaker:'hiroshi_elder',jp:'若い頃の私たち、本気で、絶対、行儀、絶対、しっかり、絶対、しつけられたよな、ばあさん、覚えてる?本気で、絶対、本気、本気で、絶対。',en:"Youth us — manners properly-instilled, gran remember?, absolute serious really.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'昔、本気で、絶対、ドーナツ、絶対、初めて、絶対、食べた日のこと、覚えてる、あなた?本気で、絶対、感動した、本気で、絶対、本気、絶対。',en:"Old — donut first-eaten day, remember dear?, moved absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、スナック、絶対、二人で、絶対、よく、絶対、シェアしたわよな、ばあさん、覚えてる?本気で、絶対、本気、本気で、絶対。',en:"Youth — snack two often-shared, gran remember?, absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'家、本気で、絶対、埃、絶対、たまりやすくなってきたわよね、あなた、本気で、絶対、お互いに、絶対、お掃除、頑張らないとね、本気で、絶対。',en:"Home — dust collect-easy, dear mutual-clean try-must absolute serious.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、田舎の味、絶対、味わえた、絶対、時代、ばあさん、覚えてる?本気で、絶対、思い出深い、本気、絶対、本気で、絶対。',en:"Youth — country-taste taste-able era, gran remember?, deep-memory absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃の私たち、本気で、絶対、うんと、絶対、楽しい時間、絶対、過ごしたわよね、あなた、本気で、絶対、本気、本気で、絶対、本気で。',en:"Youth us — much fun-time spent, dear absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07165',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さんの友達のアキさん、本気で、絶対、優しい人なのよ、翔くん、本気で、絶対、紹介、絶対、するからね、約束。',en:"Sho — Mei-sis friend Aki kind, intro absolute promise.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お味噌、絶対、垂れちゃったよ、ぼく、絶対、ふきんで、絶対、拭くね、本気で、絶対、本気、本気で、絶対。',en:"Mei-sis — miso spilled, towel-wipe, serious absolute really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、行儀、絶対、よくしてるね、メイ姉さん、本気で、絶対、感心しちゃう、本気で、絶対、本気、本気で、絶対、本気で。',en:"Sho — manners well-doing, Mei-sis admire absolute serious really.",style:'Praising.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ドーナツ、絶対、買ってきたよ、お土産、本気で、絶対、嬉しい?本気で、絶対、本気、本気で、絶対、絶対、絶対。',en:"Mei-sis — donut souv bought, glad?, serious absolute really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'公園で、本気で、絶対、スナック、絶対、シェアして、絶対、食べようね、翔くん、約束、本気で、絶対、本気、本気で、絶対、本気で、絶対。',en:"Park — snack share-eat, Sho promise absolute serious really.",style:'Bright.'},
    {speaker:'sho_child',jp:'メイ姉さんの家、本気で、絶対、埃、絶対、ないよね、メイ姉さん、本気で、絶対、お掃除、絶対、上手、本気で、絶対、本気、本気で、絶対。',en:"Mei-sis home — dust-none, Mei-sis clean good absolute serious really.",style:'Praising.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お祖母ちゃんの味、絶対、味わえる料理、翔くんに、絶対、作ってあげるね、本気で、絶対、約束、本気、絶対、本気で。',en:"Mei-sis — Granny-taste-able food Sho-make, promise absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さんと、本気で、絶対、うんと、絶対、楽しい時間、絶対、過ごしたいよ、お願い、本気で、絶対、約束、本気で、絶対、本気、本気で、絶対。',en:"With-Mei-sis — much fun-time spend-want, please promise absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07166',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'製品に、本気で、絶対、ゴミ、絶対、付着しないよう、品質管理、絶対、徹底させろ、本気で、頼んだぞ、絶対、本気で。',en:"Product — dust absolute-no-attach, QC thorough, ask absolute serious.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。重要書類、本気で、絶対、印鑑、絶対、徹底しております、本気で、感謝、本気、絶対、本気で、絶対、本気、絶対。',en:"Yes. Vital docs — seal thorough, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'業界のコンペ、本気で、絶対、当社、絶対、勝ちにいけ、本気で、頼んだぞ、絶対、社員、皆、本気で、頑張れ、絶対、本気、絶対。',en:"Industry compete — our co win, ask absolute serious all-staff try.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新工場の足場、本気で、絶対、安全管理、絶対、徹底しております、本気で、感謝、本気、絶対、本気で、絶対、本気、絶対。',en:"Yes. New factory scaffold — safety-mgmt thorough, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界で、本気で、絶対、自粛、絶対、必要な、時期、絶対、社員、絶対、お互いに、本気で、絶対、配慮しろ、本気で、頼んだぞ、絶対。',en:"Industry — self-restraint needed, staff mutual-consider, ask absolute serious.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。売上の増減、本気で、絶対、毎月、絶対、報告いたします、本気で、感謝、本気、絶対、本気で、絶対、本気、絶対、本気で。',en:"Yes. Sales fluc — monthly report, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界で、本気で、絶対、連覇、絶対、目指せ、絶対、当社の、本気で、絶対、誇り、本気で、頼んだぞ、絶対、本気で、絶対、本気、絶対。',en:"Industry — multi-win aim, our pride, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、鉄人レース、絶対、参加、絶対、応援、しております、本気で、感謝、本気、絶対、本気で、絶対、本気、絶対。',en:"Yes. Staff — ironman-race attend cheer, gratitude absolute serious really.",style:'Cheerful close.'},
  ]},
  {id:'conv_07167',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'書類に、本気で、絶対、汚れ、絶対、付着しないよう、絶対、丁寧に、扱いましょうね、本気で、本気、絶対、本気で、絶対、本気、絶対。',en:"Docs — stain don't-attach, careful-handle, serious absolute really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。書類、本気で、絶対、印鑑、絶対、確認してから、絶対、提出しております、本気で、感謝、本気、絶対、本気で、絶対、本気。',en:"Yes. Docs — seal verify-then submit, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'業界コンペ、本気で、絶対、お客様、絶対、楽しんでくださる、企画、絶対、進めましょうね、本気で、本気、絶対、本気で、絶対、本気、絶対。',en:"Industry compete — cust-enjoy plan advance, serious absolute really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。建設現場の足場、本気で、絶対、安全管理、絶対、確認、徹底しております、本気で、感謝、本気、絶対、本気で、絶対、本気、絶対。',en:"Yes. Constr-site scaffold — safety-mgmt thorough verify, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'業界、本気で、絶対、自粛ムード、絶対、続いていますね、本気で、絶対、当社、絶対、対応、絶対、進めましょう、本気で、本気、絶対、絶対。',en:"Industry — self-restraint mood continuing, our co-resp advance, serious absolute really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。利益の増減、本気で、絶対、毎週、絶対、報告いたしてまいります、本気で、感謝、本気、絶対、本気で、絶対、本気、絶対、絶対。',en:"Yes. Profit fluc — weekly report, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'業界連覇、本気で、絶対、目指して、絶対、頑張りましょうね、本気で、絶対、社員、皆、本気で、絶対、頑張ろう、本気で、絶対、本気、絶対。',en:"Industry multi-win — aim try, all-staff try absolute serious really.",style:'Encouraging.'},
    {speaker:'kenji_office',jp:'はい。社員に、本気で、絶対、鉄人並みの、絶対、努力、絶対、お願いしておりますよ、本気で、感謝、本気、絶対、本気で、絶対、本気、絶対。',en:"Yes. Staff — ironman-like effort ask, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07168',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、実験装置に、本気で、絶対、ゴミ、絶対、付着しないよう、絶対、慎重に、扱え、本気で、頼んだぞ、絶対、本気、絶対。',en:"Ren — lab-equip dust don't-attach, careful-handle, ask absolute serious.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。書類、本気で、絶対、印鑑、絶対、忘れずに、絶対、押しております、本気で、感謝、しております、絶対、本気、絶対、本気、本気で。',en:"Yes. Docs — seal don't-forget press, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'学会コンペ、本気で、絶対、君も、絶対、挑戦してみろ、本気で、頼んだぞ、絶対、本気で、絶対、本気、本気で、絶対、本気で、絶対、本気。',en:"Conf compete — also-challenge try, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究の足場、本気で、絶対、固めてから、絶対、応用研究に、絶対、進みたいです、本気で、感謝、絶対、本気、絶対、本気、絶対。',en:"Yes. Research-foundation — fix-then, applied-research advance want, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究、本気で、絶対、自粛、絶対、必要な、時期、絶対、慎重に、進めろ、本気で、頼んだぞ、絶対、本気で、絶対、本気、本気で、絶対。',en:"Research — self-restraint needed era, careful-advance, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。実験結果の増減、本気で、絶対、毎週、絶対、報告いたします、本気で、感謝、本気、絶対、本気で、絶対、本気、絶対、本気で、絶対。',en:"Yes. Exp-result fluc — weekly report, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'学会で、本気で、絶対、連覇、絶対、目指せ、本気で、頼んだぞ、絶対、君なら、絶対、できるぞ、本気で、絶対、本気、本気で、絶対、絶対。',en:"Conf — multi-win aim, ask absolute, you-can-do, serious absolute really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究、本気で、絶対、鉄人並みの、絶対、努力、絶対、続けてまいります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Yes. Research — ironman effort continue, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07169',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'証拠品に、本気で、絶対、犯人の指紋、絶対、付着しておりました、本気で、捜査、進めております、本気で、感謝、絶対、本気、絶対。',en:"Evidence — perp prints attached serious, inv-advance, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、印鑑管理、絶対、徹底しております、本気で、感謝、本気、絶対、本気で、絶対、本気、絶対、本気、絶対、本気で。',en:"Yes. Our co — seal-mgmt thorough, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、地域防犯コンペ、絶対、進めております、本気で、市民の安全、第一、本気で、感謝、絶対、本気、絶対、本気、絶対。',en:"Police — local crime-prev compete advance, citizen-safety first, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。当社の警備の足場、本気で、絶対、しっかり、固めております、本気で、感謝、本気、絶対、本気で、絶対、本気、絶対、本気、絶対。',en:"Yes. Our security-foundation properly-fix, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、自粛要請、絶対、市民、絶対、ご協力、感謝、しております、本気で、本気、絶対、本気で、絶対、本気、絶対、本当に。',en:"Police — self-restraint req, citizen-coop gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。犯罪の増減、本気で、絶対、毎月、絶対、警察、報告、感謝、しております、本気で、絶対、本気、絶対、本気で、絶対、本気、絶対、絶対。',en:"Yes. Crime fluc — monthly police-report, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'防犯コンクール、本気で、絶対、連覇、絶対、目指して、本気で、警察、絶対、頑張ってまいります、本気で、感謝、絶対、本気、絶対、本気、絶対。',en:"Crime-prev contest — multi-win aim, police-try, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察官、本気で、絶対、鉄人並みの、絶対、お仕事、絶対、敬意、感謝、本気で、絶対、本気、絶対、本気で、絶対、本気、絶対、本気。',en:"Yes. Officers — ironman work, respect-gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07170',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業時、本気で、絶対、製品に、絶対、ゴミ、付着、絶対、避けるよう、絶対、徹底したぞ、お父さん、本気で、頼んだぞ、絶対、本気、本気で、絶対。',en:"Founding — product-dust attach avoid thorough, Dad ask absolute serious.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、印鑑、絶対、こだわって、絶対、守ってまいります、本気で、感謝、絶対、本気、絶対、本気、絶対。',en:"Yes. Since Dad-era — seal insist keep, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、業界コンペ、絶対、連戦連勝、お父さん、本気で、頑張ったぞ、お前にも、本気で、頼んだぞ、絶対、本気、絶対、本気で。',en:"Founding — industry-compete win-streak, Dad tried, you-ask absolute serious.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、当社の足場、絶対、しっかり、固められてきました、本気で、感謝、絶対、本気、絶対、本気、絶対、絶対。',en:"Yes. Since Dad-era — our foundation properly-fixed, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、社員の自粛、絶対、お父さん、徹底させたぞ、お前にも、本気で、絶対、引き継いで欲しい、絶対、本気、本気で、絶対。',en:"Founding — staff self-restraint thorough, Dad-thoroughed, you inherit absolute serious.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代の、業績の増減、本気で、絶対、私、絶対、勉強してきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Yes. Dad-era perf-fluc — me studied, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_elder',jp:'業界、本気で、絶対、連覇、絶対、お父さんの代、何度も、絶対、達成したぞ、お前にも、本気で、頼んだぞ、絶対、本気、本気で、絶対、本気。',en:"Industry — multi-win Dad-era many-achieved, you ask absolute serious.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さん、本気で、絶対、鉄人並みの、絶対、経営者でしたよね、本気で、感謝、しております、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Yes. Dad — ironman-like exec, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07171',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、容疑者、本気で、絶対、地下に、絶対、潜んでいた、本気で、絶対、警察、絶対、発見しました、本気で、感謝、絶対、本気、絶対、本気で。',en:"Case — suspect underground hiding, police-found, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'警察、本気で、絶対、被害者、絶対、見送った、本気で、ご家族、絶対、感謝、しているそうですね、本当に、絶対、本気で、絶対、本気、絶対。',en:"Police — victim-see-off serious family-gratitude really absolute serious.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。捜査の史観、本気で、絶対、過去の事例、絶対、参考に、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気で、絶対。',en:"Yes. Inv-view — past-ref advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、極秘、絶対、捜査、進んでいたんですね、警察、本気で、本当に、感謝、絶対、本気で、絶対、本気、絶対、本気、絶対。',en:"Case — top-secret inv-advanced, police-gratitude really absolute serious.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。捜査官、本気で、絶対、潜入、絶対、続けておりました、本気で、本当に、危険な、任務、感謝、絶対、本気、絶対、本気、絶対、本気、絶対。',en:"Yes. Officer — infiltration continued, dangerous-mission gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'本気で、絶対、捜査、絶対、バイアスを、絶対、避ける姿勢、本当に、立派ですね、警察、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で。',en:"Inv — bias-avoid stance splendid, police-gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。証拠品の毒性、本気で、絶対、科学的に、絶対、分析、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気、絶対、絶対。',en:"Yes. Evidence-toxicity — sci-analyze advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'地域で、本気で、絶対、犯罪、絶対、頻発する状況、本気で、絶対、警察、絶対、対応、感謝、絶対、本気で、絶対、本気、絶対、本気、絶対、絶対。',en:"Region — crime frequent state, police-resp gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07172',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses historical research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、戦時、本気で、絶対、地下に、絶対、潜んでいた知識人、論文で、扱っていましたね、本気で、立派、絶対、本気、絶対、感心、絶対。',en:"Ren — wartime — underground-hiding intellectuals paper-handled, splendid absolute serious admire.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。戦時、本気で、絶対、見送った、絶対、若者の歴史、論文で、扱いました、本気で、深い、研究、絶対、本気、本気で、感謝、本当に、絶対。',en:"Yes. Wartime — saw-off youth-hist paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦後の史観、本気で、絶対、論文で、絶対、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、感心、絶対、本気、絶対、本気で。',en:"Post-war view — paper-handled, view broad absolute splendid admire serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。戦時、本気で、絶対、極秘の作戦、絶対、論文で、扱いました、本気で、深い、研究、絶対、本気、本気で、感謝、本当に、絶対、本気で、絶対。',en:"Yes. Wartime — top-secret ops paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、潜入記者、論文で、絶対、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対。',en:"Wartime — infiltration-reporter paper-handled, view broad splendid admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。当時の報道、本気で、絶対、バイアス、絶対、強かった歴史、論文で、扱いました、本気で、深い、研究、絶対、本気、本気で、感謝、絶対、本気で。',en:"Yes. Era reporting — bias-strong hist paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、毒性ガス、絶対、被害、論文で、扱っていましたね、本気で、本当に、辛い歴史、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対。',en:"Wartime — toxic-gas damage paper-handled, hard hist splendid admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。戦時、本気で、絶対、空襲、絶対、頻発した時代、論文で、扱いました、本気で、深い、研究、絶対、本気、本気で、感謝、本当に、絶対、本気で、絶対。',en:"Yes. Wartime — air-raids frequent era paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07173',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、ウイルス、本気で、絶対、体内に、絶対、潜んでいる場合、絶対、検査、徹底、必要ですね、本気で、絶対、本気、絶対、本気、絶対、本気で。',en:"Ren — virus body-hide cases, exam thorough needed, absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'患者さんを、本気で、絶対、見送った時、医師として、絶対、本当に、辛い時間ですよね、先生、本気で、感謝、本気、絶対、本気、絶対、本気で、絶対。',en:"Patient — see-off time, as doctor hard, sensei gratitude really absolute serious.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。医療の史観、本気で、絶対、変わってきていますね、本気で、絶対、患者中心、絶対、になってきました、本気で、感謝、絶対、本気、絶対、本気で、絶対。',en:"Yes. Med-view changing, patient-centered becoming, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'極秘の新薬開発、本気で、絶対、医療界、本当に、絶対、楽しみですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対。',en:"Top-secret new-drug dev — med-world fun, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。新薬の臨床試験、本気で、絶対、患者さんの体内に、絶対、潜入する、技術、進歩しております、本気で、感謝、絶対、本気、本気で、絶対、本気で、絶対。',en:"Yes. New-drug clinical — patient-body infiltrate tech advancing, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医療の判断、本気で、絶対、バイアス、絶対、避ける姿勢、本当に、立派ですよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対。',en:"Med-judgment — bias-avoid stance splendid, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。新薬の毒性、本気で、絶対、徹底、絶対、検査しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、本気、絶対。',en:"Yes. New-drug toxicity — thorough-test, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'新型感染症、本気で、絶対、頻発する時代、本気で、絶対、医療、頑張っていらっしゃいますよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で。',en:"New-infect — frequent era, med-trying, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07174',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp strategy',lines:[
    {speaker:'hiroshi_boss',jp:'業界に、本気で、絶対、潜んでいるリスク、絶対、見極めろ、本気で、頼んだぞ、絶対、社員、皆、本気で、頑張れ、絶対、本気、絶対、本気で、絶対。',en:"Industry — hidden-risk discern, ask all-staff try absolute serious.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。退職する先輩、本気で、絶対、見送ったばかり、本気で、本気、絶対、社員、皆、絶対、寂しい気持ち、感謝、絶対、本気、絶対、本気、絶対。',en:"Yes. Retiring senior — saw-off recent, all-staff lonely-gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_boss',jp:'創業者の経営史観、本気で、絶対、若手、絶対、引き継いでいけ、本気で、頼んだぞ、絶対、本気、本気で、絶対、本気、絶対、本気で、絶対、本気。',en:"Founder mgmt-view — youth-inherit, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新商品開発、本気で、絶対、極秘で、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、本気、絶対。',en:"Yes. New-product — top-secret advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'競合市場、本気で、絶対、潜入調査、絶対、必要だ、本気で、頼んだぞ、絶対、本気、本気で、絶対、本気、絶対、本気で、絶対、本気、絶対。',en:"Rival market — infiltrate-survey needed, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お客様アンケート、本気で、絶対、バイアス、絶対、避けるよう、設計、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対。',en:"Yes. Cust-survey — bias-avoid design advance, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'hiroshi_boss',jp:'当社製品、本気で、絶対、毒性、絶対、ゼロを、絶対、目指せ、本気で、頼んだぞ、絶対、本気、本気で、絶対、本気、絶対、本気で、絶対、本気。',en:"Our product — toxicity zero aim, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お客様クレーム、本気で、絶対、頻発、絶対、しないよう、対応、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気、絶対。',en:"Yes. Cust-complaint — frequent avoid resp thorough, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07175',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、戦時、本気で、絶対、社会の闇に、絶対、潜んでいた問題、論文で、扱っていましたね、本気で、立派、絶対、感心、本気、絶対、本気で、絶対。',en:"Sakura — wartime soc-dark hidden-issues paper-handled, splendid admire absolute.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。戦時、本気で、絶対、若者を、絶対、見送った、絶対、家族の心情、論文で、扱いました、本気で、深い、研究、絶対、感謝、本気で、絶対、本気で、絶対。',en:"Yes. Wartime — saw-off youth family-feeling paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'戦後の歴史史観、本気で、絶対、論文で、絶対、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、感心、本気で、本気、絶対、本気で。',en:"Post-war hist-view paper-handled, view broad splendid admire serious absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦時、本気で、絶対、極秘文書、絶対、論文で、扱いました、本気で、本当に、貴重な、研究、絶対、感謝、本気、本気で、絶対、本気で、絶対、絶対。',en:"Yes. Wartime — top-secret docs paper-handled, precious research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、敵地に、絶対、潜入した、絶対、スパイの記録、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対。',en:"Wartime — enemy-infiltrate spy records paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。歴史的、本気で、絶対、バイアス、絶対、避けて、絶対、書きました、本気で、本当に、難しかったです、絶対、感謝、本気、絶対、本気、絶対、本気で。',en:"Yes. Hist-bias avoid wrote, hard really absolute gratitude serious really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、本気で、絶対、毒性化学兵器、絶対、論文で、扱っていましたね、本気で、本当に、辛い歴史、絶対、立派、絶対、感心、本気、絶対、本気で、絶対、絶対。',en:"Wartime — toxic-chem-weapons paper-handled, hard hist splendid admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。当時、本気で、絶対、空襲、絶対、頻発した、絶対、地域、論文で、扱いました、本気で、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気、絶対。',en:"Yes. Era — air-raid frequent region paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07176',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、ハイヒール、絶対、新作、買ったわよ、メイちゃん、葵で、本気で、絶対、見てね、本気で、絶対、本気、本気で、絶対、絶対。',en:"Aoi — high-heels new bought, Mei Aoi see, serious absolute really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。彼の車、本気で、絶対、ハザードランプ、絶対、点けてた時、メイちゃん、葵、絶対、感謝したよ、本気で、本気、絶対、本気で、絶対、本気で、絶対。',en:"Yeah. Bf-car hazard-lights on, Mei Aoi gratitude, serious absolute really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'お祖父ちゃん、本気で、絶対、聖職者、絶対、お友達、いるんだって、葵、メイちゃん、本気で、絶対、感心、本気で、本気、絶対、本気で、絶対、本気。',en:"Grandpa — clergy-friend exists, Aoi Mei admire serious absolute really.",style:'Curious.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、刺繍の入った、絶対、ブラウス、お洒落でしょ?メイちゃん、葵で、本気で、絶対、お客様にも、本気で、絶対、好評、絶対、感謝、本気。',en:"Aoi — embroidered blouse stylish, Mei Aoi cust-favorable gratitude serious absolute really.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'お台場、本気で、絶対、東京の中心地に、絶対、近いよね、葵、メイちゃん、本気で、絶対、彼と、絶対、デート、行きたいわよね、絶対、本気、絶対。',en:"Odaiba — Tokyo-center near, Aoi Mei with-bf-date-go-want absolute serious really.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'お父さんの足跡、本気で、絶対、辿った旅、絶対、メイちゃん、本気で、感動したのよ、葵、本気で、絶対、本気、本気で、絶対、本気で、絶対、本気。',en:"Dad's footsteps — followed-trip moved, Mei Aoi serious absolute really.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'彼、本気で、絶対、オートバイ、新しいの、絶対、買ったって、葵、メイちゃん、本気で、絶対、楽しみよね、絶対、本気、本気で、本気で、絶対、絶対、本気。',en:"Bf — motorbike new bought, Aoi Mei fun absolute serious really.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'夏のメニューに、本気で、絶対、マンゴー、絶対、加えたわよ、メイちゃん、葵で、本気で、絶対、味わってみて、本気で、絶対、本気、本気で、絶対、絶対。',en:"Summer menu — mango added, Mei Aoi taste-try, serious absolute really.",style:'Warm close.'},
  ]},
  {id:'conv_07177',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、ママ、本気で、絶対、新しいハイヒール、絶対、お洒落だよね、ぼく、本気で、絶対、感心、本気で、絶対、本気、本気で、絶対、本気で、絶対。',en:"Mom — new heels stylish, me admire serious absolute really.",style:'Praising child.'},
    {speaker:'yumiko_mom',jp:'うん。お父さん、本気で、絶対、車の、ハザードランプ、点けて、絶対、安全運転、心がけてるわよね、本気で、絶対、誇り、本気で、本気、絶対、本気で。',en:"Yes. Dad — car hazard-lights on safe-drive mindful, proud serious absolute really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'お祖父ちゃんち、本気で、絶対、近くに、聖職者の方、絶対、いらっしゃるんだよ、ママ、知ってる?本気で、絶対、本気、絶対、本気で、絶対、本気で、絶対。',en:"Grandpa's — nearby clergy-exists, Mom knew?, serious absolute really.",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'お母さんの作った、本気で、絶対、刺繍の作品、絶対、お祖母ちゃんに、絶対、プレゼントしたわよ、本気で、絶対、感謝、本気、絶対、本気で、絶対、絶対。',en:"Mom-made embroidery work — Granny-gifted, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'夏休み、本気で、絶対、家族で、東京の中心地、絶対、行きたいよね、ママ、本気で、絶対、楽しみ、本気で、絶対、本気、本気で、絶対、絶対、本気。',en:"Summer — family Tokyo-center go-want, Mom fun absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お父さん、本気で、絶対、若い頃の道を、絶対、辿った、絶対、旅、お祖母ちゃんから、本気で、絶対、聞いたわよ、翔くん、絶対、本気、本気で、絶対。',en:"Dad — youth-path followed trip, Granny-heard, Sho absolute serious really.",style:'Wistful.'},
    {speaker:'sho_child',jp:'お父さん、本気で、絶対、オートバイ、絶対、若い頃、絶対、乗っていたって、ママ、知ってた?本気で、絶対、すごい、本気で、絶対、本気、本気で、絶対。',en:"Dad — motorbike youth-rode, Mom knew?, amazing absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'夕食、本気で、絶対、マンゴー、絶対、デザートに、絶対、出すわよ、翔くん、本気で、絶対、楽しみね、本気で、絶対、本気、本気で、絶対、絶対、本気。',en:"Dinner — mango dessert-out, Sho fun absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07178',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、本気で、絶対、ハイヒールで、絶対、お洒落な、絶対、お姉さん、街で、絶対、見たよ、本気で、絶対、本気、本気で、絶対、本気で、絶対、本気。',en:"Riku — heels stylish-lady street-saw, serious absolute really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。本気で、絶対、ハザードランプ、絶対、お父さん、絶対、停車中、点けてるよな、桜、お互いに、本気で、絶対、安全、本気、絶対、本気で、絶対。',en:"Yeah. Hazard-lights — Dad parking-on, Sakura mutual-safe absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'修学旅行で、本気で、絶対、聖職者、絶対、お話を、絶対、聞く機会、絶対、あるんだって、リク、お前、楽しみだろ?本気で、絶対、本気、絶対、本気で。',en:"School trip — clergy talk-listen chance exists, Riku fun?, serious absolute really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'お母さん、本気で、絶対、刺繍、絶対、得意なんだぜ、桜、お前にも、絶対、見せたい、本気で、絶対、本気、本気で、絶対、本気で、絶対、本気、絶対。',en:"Mom — embroidery good, Sakura you-show want, serious absolute really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'修学旅行、本気で、絶対、東京の中心地に、絶対、行く予定、絶対、らしいよ、リク、お前、本気で、絶対、楽しみだろ?本気で、絶対、本気、本気で、絶対。',en:"School trip — Tokyo-center go-plan, Riku fun?, serious absolute really.",style:'Eager.'},
    {speaker:'riku_teen',jp:'お祖父ちゃんの戦時、本気で、絶対、辿った道、絶対、お父さん、絶対、調べてるみたいだぜ、桜、本気で、絶対、家族の歴史、本気、本気で、絶対。',en:"Grandpa wartime followed-path — Dad researching, Sakura family-hist serious absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、オートバイ、絶対、大きくなったら、絶対、乗りたいって、言ってたよね?本気で、絶対、楽しみ、本気で、絶対、本気、絶対。',en:"Riku — motorbike big-grown ride-want said, fun absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'夏休み、本気で、絶対、家族で、マンゴーパフェ、絶対、食べに行きたいんだ、桜、お前、付き合ってくれる?本気で、絶対、本気、本気で、絶対、絶対。',en:"Summer — family mango-parfait go-eat-want, Sakura accompany?, serious absolute really.",style:'Eager close.'},
  ]},
  {id:'conv_07179',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お祖母ちゃん、絶対、ハイヒール、絶対、履いてたわよな、ばあさん、覚えてる?本気で、絶対、本気、本気で、絶対、本気で、絶対。',en:"Youth — Granny heels wore, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。昔の車、本気で、絶対、ハザードランプ、絶対、なかった時代、覚えてる、あなた?本気で、絶対、本気、本気で、絶対、本気、絶対、本気で、絶対。',en:"Yes. Old car — hazard-lights-none era, remember dear?, absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、教会の聖職者、絶対、結婚式を、絶対、執り行ってくださったわよな、ばあさん、覚えてる?本気で、絶対、感謝、本気、絶対、本気で。',en:"Youth — church-clergy wedding-officiated, gran remember?, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、私、絶対、刺繍、絶対、得意だったわよね、覚えてる、あなた?本気で、絶対、思い出、本気、本気で、絶対、本気で、絶対、本気。',en:"Youth — me embroidery good, remember dear?, memory absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、東京の中心地に、絶対、二人で、絶対、よく、絶対、行ったわよな、ばあさん、覚えてる?本気で、絶対、思い出、本気、本気で、絶対。',en:"Youth — Tokyo-center two often-went, gran remember?, memory absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お父さん、絶対、戦争の道、絶対、辿った旅、絶対、語ってくれたわよね、覚えてる、あなた?本気で、絶対、本気、本気で、絶対。',en:"Youth — Dad war-path-followed trip told, remember dear?, absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、私、絶対、オートバイ、絶対、よく、絶対、乗ったわよな、ばあさん、覚えてる?本気で、絶対、ロマンチック、絶対、本気、本気で、絶対。',en:"Youth — me motorbike often-rode, gran remember?, romantic absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、マンゴー、絶対、初めて、絶対、食べた日、覚えてる、あなた?本気で、絶対、感動した、本気、本気で、絶対、本気で、絶対、本気、絶対。',en:"Youth — mango first-eaten day, remember dear?, moved absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07180',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、お客様、本気で、絶対、ハイヒール、絶対、履いて、絶対、来られる方、増えてるな、葵で、本気で、絶対、本気、本気で、絶対、本気で、絶対。',en:"Aoi — cust heels-wearing-coming increasing, Aoi serious absolute really.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。お客様の車、本気で、絶対、ハザードランプ、絶対、付けて、絶対、停車されている時、葵で、絶対、お声、本気で、絶対、かけております、本気、絶対。',en:"Yes. Cust-car hazard-lights on parking, Aoi voice-given, serious absolute really.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'本気で、絶対、聖職者の方、絶対、お客様として、絶対、葵に、絶対、来てくださってるんやで、葵さん、本気で、感謝、本気、絶対、本気で、絶対、本気で。',en:"Clergy — as cust Aoi-come, Aoi gratitude serious absolute really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'はい。新メニューの皿、本気で、絶対、刺繍風の、絶対、デザイン、葵で、絶対、お洒落になりますね、本気で、本気、絶対、本気で、絶対、本気、絶対、絶対。',en:"Yes. New menu plate — embroidery-style design, Aoi stylish, serious absolute really.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'葵さん、本気で、絶対、街の中心地に、絶対、二号店、絶対、出す野心、絶対、捨てへんで、本気で、絶対、頑張ろうな、本気、本気で、絶対、絶対、本気で。',en:"Aoi — town-center 2nd-store ambition don't-discard, try absolute serious really.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。創業からの、本気で、絶対、葵で、絶対、お客様、絶対、辿ってきた道、絶対、本気で、感謝、しております、本気、本気で、絶対、本気で、絶対、絶対、絶対。',en:"Yes. Since founding — Aoi cust-followed-path gratitude really absolute serious.",style:'Reflective.'},
    {speaker:'daichi_kansai',jp:'お客さん、本気で、絶対、オートバイで、絶対、来られる方、絶対、葵で、駐輪スペース、本気で、絶対、用意したいで、葵さん、絶対、本気、本気で、絶対、本気で、絶対。',en:"Cust — motorbike-coming, Aoi parking-prep want, Aoi absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。夏のスイーツに、本気で、絶対、マンゴー、絶対、ふんだんに、絶対、使いたいですね、葵で、本気で、絶対、本気、本気で、絶対、本気で、絶対、絶対。',en:"Yes. Summer sweets — mango abundant-use want, Aoi serious absolute really.",style:'Warm close.'},
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

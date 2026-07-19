import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_357 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['伯','持ち帰っ','さきほど','面倒くさい','無制限','危うく','浮かば','軽快']
const B_T = ['収まっ','再考','議案','見合う','後進','特派','拍車','名乗っ']
const C_T = ['立ち向かう','人命','自白','撃っ','都知事','親近','疎通','便乗']
const D_T = ['秀逸','汽車','争っ','佳','奥行き','クアラルンプール','北上','代名詞']

const data = [
  {id:'conv_07101',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、伯父さんから、お土産、もらったよ、本当に、嬉しいの、ぼく。',en:"Mom — uncle souv-received, glad really, me.",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'うん。お弁当、残ったの、ママ、持ち帰ったわよ、翔くん、明日、また、食べようね。',en:"Yes. Lunch-leftover Mom took-home, Sho tomorrow again-eat.",style:'Warm.'},
    {speaker:'sho_child',jp:'さきほど、お電話、お父さんから、入っていたよ、ママ、確認、してね、絶対。',en:"Earlier — phone Dad-from arrived, Mom check absolute.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'宿題、面倒くさいって、思うことも、あるわよね、翔くん、ママ、応援してるからね、絶対。',en:"Homework troublesome-feel sometimes, Sho Mom-cheer absolute.",style:'Tender.'},
    {speaker:'sho_child',jp:'お小遣い、無制限じゃ、ないって、お父さん、いつも、言ってるよね、ママ、ぼく、貯金、頑張る。',en:"Allowance — un-limited not, Dad always-says, save try.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'お父さん、危うく、電車、乗り遅れるところだったって、本当に、心配したのよ、無事で、よかった。',en:"Dad — almost train-miss, worried, safe glad.",style:'Wry.'},
    {speaker:'sho_child',jp:'いいアイディア、ぼく、なかなか、浮かばないんだよ、ママ、本当に、悩んでるんだ、本気で、相談。',en:"Good ideas — me hardly-emerge, worry serious, consult.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'お父さん、ジョギング、最近、軽快な、ステップで、走っているのよ、翔くん、誇らしいわよね、絶対。',en:"Dad — jog lately-light-step running, Sho proud absolute.",style:'Warm close.'},
  ]},
  {id:'conv_07102',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、ご結婚のお祝いに、伯母さん、本気で、お祝い、いっぱい、くださったの、感謝してる。',en:"Aoi — wedding-cele aunt serious cele lots-gave, gratitude.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。お弁当、お客様、本気で、持ち帰ったの、嬉しい話よね、葵で、好評ね、絶対。',en:"Yeah. Lunch — cust serious-took-home, glad-tale Aoi favorable absolute.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'さきほど、彼から、お電話、入ってきたの、葵、メイちゃん、本気で、嬉しい、ね、絶対。',en:"Earlier — bf-call arrived, Aoi Mei serious-glad absolute.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'業務日誌、面倒くさいけど、本気で、続けていかないとね、葵で、絶対、必要、メイちゃん、わかる?',en:"Biz-log troublesome but serious-continue must, Aoi needed absolute, Mei get?",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵の店、無制限の自由、お客様にも、感じてもらいたいわよね、葵、本気で、メイちゃん、応援してるわよ。',en:"Aoi-store — un-limited freedom, cust-feel want, Aoi serious Mei-cheer.",style:'Warm.'},
    {speaker:'aoi_barista',jp:'今朝、危うく、寝坊するところだったわよ、葵、本気で、慌てたわよ、メイちゃん、絶対、笑えるよね、本気。',en:"Morning — almost overslept, Aoi serious-panicked, Mei laughs absolute serious.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'新しいレシピのアイディア、なかなか、浮かばないわよね、葵、本気で、頑張ろうね、絶対、応援してる。',en:"New-recipe ideas hardly-emerge, Aoi serious-try absolute, cheer.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵の最新メニュー、軽快な味わいで、お客様、本気で、好評よ、メイちゃん、絶対、試してみて、本気で。',en:"Aoi new-menu — light taste, cust serious-favor, Mei try absolute serious.",style:'Bright close.'},
  ]},
  {id:'conv_07103',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、伯父さん、本気で、優しい人だよね、私の家、本気で、お世話に、なってるよ、本当に、感謝。',en:"Riku — uncle kind serious, my-home cared serious, gratitude really.",style:'Reflective teen.'},
    {speaker:'riku_teen',jp:'うん。学校のプリント、家に、本気で、持ち帰ったよ、桜、お互いに、忘れずに、提出しような、絶対。',en:"Yeah. School-print home serious-took, Sakura mutual no-forget submit absolute.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'さきほど、お母さんから、本気で、メッセージ、入ってきたよ、リク、ちょっと、待ってね、ね、ごめん。',en:"Earlier — Mom-msg arrived serious, Riku wait, sorry.",style:'Polite.'},
    {speaker:'riku_teen',jp:'宿題、面倒くさいよな、桜、お互いに、頑張ろうな、本気で、応援してるぜ、絶対、本当に、絶対。',en:"Homework troublesome, Sakura mutual-try serious cheer absolute really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'ネット、無制限プラン、本気で、入りたいのよ、私、リク、お前は、もう、入ってるの?教えて、本当に。',en:"Net un-limited plan — serious-join-want, Riku already-in?, tell really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'今日、危うく、テスト、寝坊する、ところだったぜ、桜、お前にも、本気で、感謝、本当に、起こしてくれて。',en:"Today — almost test-overslept, Sakura you-also serious-gratitude, woke-me.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'文化祭の出し物、いいアイディア、本気で、なかなか、浮かばないよね、リク、お互いに、頑張ろうね、絶対。',en:"Cult-fest acts — good idea hardly-emerge, Riku mutual-try absolute.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'お前の歌、本気で、軽快なリズムで、本当に、聞き心地、いいぜ、桜、絶対、上手いよな、本気で、絶対。',en:"Your song — light-rhythm, listen-comfort really good, Sakura skilled absolute serious.",style:'Praising close.'},
  ]},
  {id:'conv_07104',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'私、若い頃、伯父さんに、本気で、お世話、なったよな、ばあさん、覚えてる?本当に、感謝、絶対、本気。',en:"Youth — uncle serious-cared, gran remember?, gratitude absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。昔の集まり、お料理、皆、本気で、持ち帰ってたわよね、覚えてる?本当に、温かい、時代、絶対。',en:"Yes. Old gatherings — food all serious-took-home, remember?, warm-era absolute really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'さきほど、息子から、お電話、本気で、入ってきたわよ、ばあさん、孫の話、本当に、嬉しい、絶対、本気。',en:"Earlier — son-call serious-arrived, gran grandkid-talk glad absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'年金の手続き、本気で、面倒くさいわよね、あなた、お互いに、本気で、頑張りましょうね、絶対、感謝。',en:"Pension proc troublesome serious, dear mutual-try absolute gratitude.",style:'Wry.'},
    {speaker:'hiroshi_elder',jp:'孫の好奇心、本気で、無制限よな、ばあさん、覚えてる?何でも、聞いてくる、本当に、可愛い、絶対、本気で。',en:"Grandkid curiosity un-limited serious, gran remember?, anything-ask, cute absolute serious really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'昨日、私、危うく、転びそうになったわよ、あなた、本気で、お互いに、気をつけましょうね、絶対、本気で、本当に。',en:"Yesterday — almost-tripped, dear serious mutual-careful absolute serious really.",style:'Concerned.'},
    {speaker:'hiroshi_elder',jp:'いい思い出、最近、本気で、たくさん、浮かばないわよな、ばあさん、年取って、思い出すこと、絶対、減ったね。',en:"Good memories — lately serious-many emerge-not, gran aged, recall-reduced absolute.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'孫、本気で、軽快な、足取りで、走り回ってたわよね、覚えてる、あなた?本当に、本気で、若さの、力、本気、絶対。',en:"Grandkid — light-step running, remember, dear?, youth-power absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07105',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さんの伯母さんから、お土産、もらってきたよ、本気で、嬉しい、絶対、感謝、本当に、絶対、本気で。',en:"Sho — Mei-sis-aunt souv-received, serious-glad absolute gratitude really serious.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、お弁当、本気で、持ち帰ったよ、ママに、見せたいんだ、絶対、本気で、本当に、嬉しい、絶対。',en:"Mei-sis — me lunch serious-took-home, Mom-show want absolute serious really glad.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'さきほど、お母さんから、メイ姉さんに、メッセージ、入ってきたよ、翔くん、お母さんに、すぐに、伝えるね。',en:"Earlier — Mom Mei-sis msg-arrived, Sho, Mom-immediately-convey.",style:'Soft.'},
    {speaker:'sho_child',jp:'宿題、本気で、面倒くさいよ、メイ姉さん、ぼく、本気で、頑張りたいんだけど、絶対、応援、お願い、本気で、絶対。',en:"Homework troublesome serious, Mei-sis me serious-try-want, cheer-please absolute serious.",style:'Pleading.'},
    {speaker:'mei_romantic',jp:'メイ姉さんの愛情、本気で、無制限よ、翔くん、いつでも、絶対、本気で、応援してるからね、約束、絶対、本気で。',en:"Mei-sis love un-limited serious, Sho, anytime absolute cheer serious promise absolute.",style:'Tender.'},
    {speaker:'sho_child',jp:'今日、ぼく、危うく、本気で、お祭りで、迷子になりそうだったよ、メイ姉さん、心配かけてごめん、絶対、本気。',en:"Today — me almost-fest-lost, Mei-sis worry-sorry absolute serious.",style:'Apologetic.'},
    {speaker:'mei_romantic',jp:'絵を描く時、いいアイディア、本気で、なかなか、浮かばない、メイ姉さんも、翔くんと、本気で、悩むこと、本気で、ある。',en:"Drawing-time — good-idea hardly-emerge, Mei-sis also Sho-with serious-worry exist.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、軽快なステップで、踊る、メイ姉さん、好きなんだ、ぼく、本気で、絶対、また、見たい、絶対、本気で。',en:"Mei-sis serious-light-step dance — love, see-again-want absolute serious.",style:'Eager close.'},
  ]},
  {id:'conv_07106',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'業績、本気で、ようやく、収まってきたな、絶対、社員、本気で、頑張ってくれた、本気で、感謝、絶対、本当に。',en:"Performance — finally settled, staff serious-tried, gratitude absolute really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。来期方針、本気で、再考、進めてまいります、絶対、本気で、よりよい、戦略、目指してまいります、本当に。',en:"Yes. Next-term policy — serious-reconsider advance absolute, better strat aim really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'今回の議案、本気で、社員、皆、賛成、絶対、お父さんの代から、続く、当社の、伝統だ、絶対、本気で、本当に。',en:"This agenda — serious all-staff-approve, since Dad-era, our trad absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。投資、本気で、リスクに、見合う、リターン、絶対、確保、目指してまいります、本気で、絶対、頑張ります。',en:"Yes. Investment — risk-match return serious absolute-secure aim serious absolute try.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'後進の育成、本気で、急務だ、絶対、頼んだぞ、本気で、社員、皆、頑張れ、本当に、これは、絶対、頼んだぞ、絶対。',en:"Junior-raise urgent serious absolute ask serious, all-staff try really absolute.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。海外特派員、本気で、設置を、検討しております、絶対、お得意様に、お応えできる体制、本気で、整えます、本当に、絶対。',en:"Yes. Overseas correspondent — set-study, VIP-respond system serious-prep really absolute.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界の競争、本気で、当社、絶対、拍車を、かけていけ、絶対、頼んだぞ、本気で、本当に、これは、絶対、本気で。',en:"Industry-rival — our co spur-attach absolute serious ask really absolute.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新部署、本気で、責任者、名乗ってくれる方、社内、絶対、本気で、見つけてまいります、本当に、絶対、頑張ります、本気で。',en:"Yes. New-dept — leader name-give serious internal absolute-find really absolute try.",style:'Close.'},
  ]},
  {id:'conv_07107',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'クレーム、本気で、ようやく、収まってきたわよね、社員、皆、感謝、しております、本当に、絶対、本気で、本当に。',en:"Complaints — finally settled, all-staff gratitude really absolute serious.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。来期計画、本気で、再考、必要ですよね、絶対、皆様、ご意見、お聞かせください、本気で、本当に、絶対、感謝。',en:"Yes. Next-term plan — serious-reconsider needed, all-opinion-please serious really absolute gratitude.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'新議案、本気で、社員、皆、賛成、してくださると、本気で、信じております、絶対、本気で、本当に、嬉しい、絶対。',en:"New-agenda — all-staff-approve serious-believe absolute serious really glad.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。コスト、本気で、利益に、見合う、絶対、調整、進めてまいります、絶対、本気で、社員、頑張ります、本当に。',en:"Yes. Cost — profit-match absolute-adjust advance, all-staff try really.",style:'Update.'},
    {speaker:'yuki_office',jp:'後進指導、本気で、若手、必要よね、人材育成、絶対、頑張りましょうね、本当に、感謝、しております、本気で、皆。',en:"Junior-guide — youth-needed, talent-raise try absolute, gratitude really serious all.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。海外特派員、本気で、当社にも、必要、感じます、絶対、本気で、ご検討、ご相談、お願い、絶対、本気で、絶対。',en:"Yes. Overseas correspondent — also-needed serious feel absolute, consult ask absolute serious.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'広告に、本気で、拍車、かけていきましょうね、絶対、本気で、ブランド、本当に、強化、急務よ、本当に、絶対、本気で、絶対。',en:"Ad — spur-attach absolute serious, brand strengthen urgent really absolute serious.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新事業の代表、本気で、自ら、名乗ってくださる方、社内、本気で、絶対、いるはずです、絶対、本当に、楽しみ、本気。',en:"Yes. New-biz rep — self serious-name-give internal absolute-exists, fun absolute serious.",style:'Close.'},
  ]},
  {id:'conv_07108',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究、本気で、結果、収まってきたな、絶対、本気で、感心しているぞ、本気で、頼んだぞ、絶対、頑張れ。',en:"Ren — research result-settled serious absolute, admire serious ask absolute try.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。論文の方針、本気で、再考、進めてまいります、絶対、先生、本気で、ご意見、お聞かせください、本当に、感謝。',en:"Yes. Paper-policy — serious-reconsider absolute, prof opinion-please serious really gratitude.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'学会の議案、本気で、君も、関わっていけ、絶対、本気で、研究者として、必要だ、本気で、頼んだぞ、絶対、本気。',en:"Conf agenda — also involve, as researcher needed serious ask absolute serious.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。実験の労力、本気で、結果に、見合う、絶対、頑張ってまいります、本気で、感謝、しております、本当に、絶対。',en:"Yes. Exp-effort — result-match absolute-try, gratitude serious really absolute.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'後進指導、本気で、君も、いずれ、絶対、担うことに、なるぞ、本気で、覚悟、絶対、持っておけ、本気で。',en:"Junior-guide — also eventually carry, resolve absolute serious have-must.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。海外研究の特派、本気で、機会が、あれば、絶対、挑戦したいです、本気で、絶対、頑張ります、本当に、感謝。',en:"Yes. Overseas-research correspondent — chance-if absolute-challenge want serious try really gratitude.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究、本気で、拍車、かけていけ、絶対、若いうちに、本気で、頑張れ、絶対、本気で、頼んだぞ、これは、絶対、本気で、絶対。',en:"Research — spur-attach absolute, youth-while try serious ask absolute really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。次の研究テーマ、本気で、私から、名乗っていきます、絶対、本気で、頑張ります、本当に、感謝、しております、絶対、本気で。',en:"Yes. Next theme — self serious-name absolute-try, gratitude really absolute serious.",style:'Earnest close.'},
  ]},
  {id:'conv_07109',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'地域犯罪、本気で、ようやく、収まってきたところです、絶対、市民の皆様の、ご協力、本気で、感謝、本当に、絶対。',en:"Local crime — finally settled, citizens-coop serious gratitude really absolute.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。当社の防犯計画、本気で、再考、警察様と、進めてまいります、絶対、感謝、しております、本当に、本気で、絶対。',en:"Yes. Our crime-prev plan — serious-reconsider police-advance absolute gratitude really serious.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察、新議案、本気で、市民の安全、絶対、第一に、進めてまいります、本気で、頑張ります、本当に、感謝、絶対。',en:"Police new-agenda — citizen-safety first advance, serious-try really gratitude absolute.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察費用、本気で、市民の安全に、見合う、絶対、有効活用、必要、ですよね、本気で、感謝、本当に、絶対。',en:"Yes. Police-cost — citizen-safety-match absolute-eff-utilize needed serious gratitude really absolute.",style:'Update.'},
    {speaker:'takeda_officer',jp:'後進警察官の育成、本気で、急務、感じております、絶対、若い力、本気で、頼みたいです、本気で、絶対、本当に、絶対。',en:"Junior-officer raise urgent serious-feel absolute, youth-power ask serious absolute really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。海外警察、特派、本気で、交流、活発化しております、絶対、本気で、当社も、ご協力、本当に、感謝、絶対。',en:"Yes. Overseas police correspondent — exchange-active serious absolute, our co coop gratitude really absolute.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'防犯対策、本気で、拍車、かけてまいります、絶対、市民の皆様、絶対、本気で、応援、お願いいたします、本当に、感謝。',en:"Crime-prev — spur-attach absolute, citizens cheer ask really gratitude.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。当社、警察関連の代表、本気で、自ら、名乗らせていただきます、絶対、本気で、お役に、立ちたいです、絶対、本気で、本当に。',en:"Yes. Our co — police-related rep, self serious-name absolute, useful-want serious really absolute.",style:'Close.'},
  ]},
  {id:'conv_07110',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期の混乱、本気で、ようやく、収まったわよな、お父さん、覚えてる?お前にも、伝えたい、本気で、絶対、本当に、絶対、本気。',en:"Founding-chaos — finally settled, Dad remember?, you-convey want serious absolute really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの方針、本気で、私の代でも、再考、絶対、慎重に、進めてまいります、本気で、感謝、本当に、絶対。',en:"Yes. Dad-policy — my era too serious-reconsider absolute careful-advance gratitude really absolute.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'創業時の議案、お父さん、本気で、何度も、提出した記憶、ある、お前、覚えてる?本気で、本当に、絶対、苦労した。',en:"Founding agenda — Dad serious many-times submitted memory, you remember?, hardship serious really absolute.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。創業当時の利益、本気で、苦労に、見合う、絶対、ものだったって、お母さんから、聞いております、本当に、感謝、絶対、本気。',en:"Yes. Founding-profit — hardship-match serious absolute heard from-Mom, gratitude really absolute serious.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さんの代から、後進の育成、本気で、絶対、力を入れてきたな、お前にも、引き継いで欲しい、絶対、本気で、頼んだぞ。',en:"Since Dad-era — junior-raise serious-focus, you-inherit want absolute serious ask.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代の、海外特派、本気で、お話、聞きたいです、本当に、絶対、勉強、本気で、なります、絶対、感謝、絶対。',en:"Yes. Dad-era overseas correspondent — talk-want, learning absolute serious gratitude absolute.",style:'Polite.'},
    {speaker:'hiroshi_elder',jp:'業界に、本気で、拍車を、かける時、お父さん、何度も、絶対、経験したぞ、お前、覚悟、本気で、持っておけ、絶対、本気で、絶対。',en:"Industry spur-attach time — Dad many-times experienced absolute, you resolve serious-have absolute.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。創業者の名前、本気で、お父さん、何度も、名乗ってきた誇り、私にも、引き継がせて、絶対、本気で、頂きたいです、本当に。',en:"Yes. Founder-name — Dad many-times-named-pride, me-also inherit-permit absolute serious want really.",style:'Wise close.'},
  ]},
  {id:'conv_07111',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、警察、本気で、犯罪に立ち向かう姿勢、絶対、見せていきます、本気で、市民、安全、第一です、本当に、絶対。',en:"Case — police serious-crime-face stance, citizen-safety first really absolute serious.",style:'Calm.'},
    {speaker:'ren_uni',jp:'人命を、本気で、最優先に、警察、対応されていますね、絶対、本気で、頭が下がります、本当に、感謝、絶対、本気で。',en:"Human-life — top-priority police-resp absolute, humbled serious really gratitude absolute.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、本気で、自白に至り、絶対、捜査、本気で、進展しております、本当に、感謝、市民にも、絶対、本気で、本気で。',en:"Yes. Suspect — confession-reached, inv-progress serious absolute, gratitude citizens too.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'撃ったのは、本気で、犯人と特定されたんですね、警察、本気で、慎重に、対応、本当に、立派、絶対、本気で、感謝、本当に。',en:"Shot — perp ID-confirmed, police careful-resp splendid absolute serious gratitude really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。都知事から、本気で、警察、感謝の言葉、絶対、いただきました、本気で、励みに、なります、本当に、感謝、絶対、本気で。',en:"Yes. Tokyo-gov — serious police-thanks-words received absolute, encouraging really gratitude absolute.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察官の方々、本気で、親近感、市民から、感じていただいていますよね、本当に、絶対、立派です、本気で、感謝、本当に。',en:"Officers — serious-friendliness citizen-feel, splendid absolute serious gratitude really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、本気で、家族との、意思疎通、絶対、図ろうとしているそうです、本気で、心、痛む、ご家族、本当に、本気。',en:"Yes. Suspect — family communication absolute-aim said, heart-pain family, really serious.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'メディアの便乗報道、本気で、止めるべきですよね、警察、本気で、注意、絶対、お願いします、本当に、感謝、絶対、本気、絶対。',en:"Media bandwagon-report — serious-stop should, police-attention ask really gratitude absolute serious.",style:'Reflective close.'},
  ]},
  {id:'conv_07112',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses historical research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、論文、戦時下、本気で、困難に立ち向かう人々、丁寧に、扱っていましたね、本気で、立派、絶対、印象的、本当に。',en:"Ren — paper wartime hardship-face people, careful handled, splendid absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。人命の重さ、本気で、論文で、扱いました、絶対、本気で、深い、研究、できました、本当に、感謝、本気で、絶対。',en:"Yes. Human-life-weight — paper-handled serious, deep research absolute serious gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦犯の自白記録、本気で、本当に、貴重な、史料、論文で、活用しましたね、本気で、立派、絶対、本当に、感心、本気で。',en:"War-crim confession-records — precious archive, paper-utilized, splendid absolute serious really admire.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。戦時、市民が撃った話、本気で、論文で、扱いました、絶対、本気で、辛い、内容でした、本当に、絶対、感謝、本気で。',en:"Yes. Wartime — civilian-shot tales serious-paper-handled, hard content absolute serious gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'昔の東京の都知事の影響力、本気で、論文で、扱っていましたね、絶対、本気で、視野、広い、本当に、立派、絶対、本気で、感心。',en:"Old Tokyo-gov-influence — paper-handled, view broad absolute serious really splendid admire.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。戦後、人々が、お互いに、親近感を、本気で、求めた時代、論文で、扱いました、絶対、本気で、深い、研究、本当に。',en:"Yes. Post-war — mutual-friendliness serious-sought era, paper-handled, deep research absolute serious really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、敵国との意思疎通、本気で、難しかった歴史、論文で、扱っていましたね、絶対、本気で、印象的、本当に、立派、絶対。',en:"Wartime — enemy-comm hard hist serious-paper-handled, striking absolute serious really splendid.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。戦後、便乗ビジネス、本気で、増えた歴史、論文で、扱いました、絶対、本気で、社会問題でしたよね、本当に、感謝、絶対、本気。',en:"Yes. Post-war — bandwagon-biz serious-increased hist, paper-handled, soc-issue really gratitude absolute serious.",style:'Earnest close.'},
  ]},
  {id:'conv_07113',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、医療従事者、本気で、病に立ち向かう姿、本当に、立派ですよね、絶対、感謝、しております、本気で、本当に、絶対。',en:"Ren — med-workers disease-face stance splendid, gratitude really absolute serious.",style:'Calm.'},
    {speaker:'ren_uni',jp:'人命を、本気で、第一に、医療現場、対応されていますよね、先生、本気で、感謝、しております、絶対、本当に、頭が下がる、本気。',en:"Human-life first — med-site resp, sensei serious-gratitude absolute really humbled serious.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。患者さんの、本気で、自白するように、心、打ち明けてくださる時、医師として、本気で、感謝、しております、絶対、本当に、本気。',en:"Yes. Patient — confess-like heart-open serious, as doctor-gratitude absolute really serious.",style:'Patient.'},
    {speaker:'ren_uni',jp:'感染症と本気で、撃って、戦う医療、本気で、激動の時代ですよね、先生、本気で、絶対、感謝、しております、本気で、本当に、頭が下がる。',en:"Infection — shoot-fight med, upheaval era, sensei gratitude absolute serious really humbled.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。都知事の医療政策、本気で、現場、影響、本当に、ありますよね、医療界、本気で、絶対、感謝、しております、本当に、本気で、絶対。',en:"Yes. Tokyo-gov med-policy — site-impact really exists, med-world gratitude really serious absolute.",style:'Informative.'},
    {speaker:'ren_uni',jp:'患者さんと、医師の親近感、本気で、医療の質、絶対、上げる要素ですよね、先生、本気で、立派な姿勢、本当に、感謝、絶対、本気で。',en:"Patient-doctor friendliness — med-quality raise absolute factor, sensei splendid stance gratitude really absolute.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。医師と患者の意思疎通、本気で、本当に、最重要、感じております、絶対、本気で、頑張ってまいります、本当に、感謝、絶対、本気で。',en:"Yes. Doctor-patient comm — most-important feel absolute serious, try really gratitude absolute serious.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療デマに、便乗する報道、本気で、社会問題ですよね、先生、本気で、正しい情報、本当に、必要ですよね、絶対、本気で、感謝、絶対、本気。',en:"Med-rumor — bandwagon-report serious soc-issue, sensei correct-info really needed absolute serious gratitude.",style:'Reflective close.'},
  ]},
  {id:'conv_07114',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp strategy',lines:[
    {speaker:'hiroshi_boss',jp:'業界の困難、本気で、当社、絶対、立ち向かう姿勢、見せていけ、絶対、頼んだぞ、本気で、本当に、これは、絶対、本気で。',en:"Industry-hardship — our co absolute-face stance show, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社員の人命、本気で、第一に、当社、絶対、考えてまいります、本気で、感謝、しております、絶対、本当に、本気で、絶対。',en:"Yes. Staff human-life — first our co absolute-think, gratitude really absolute serious.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'不正、本気で、自白する勇気、社員に、絶対、求めていけ、本気で、コンプラ、徹底だ、本気で、頼んだぞ、絶対、本当に。',en:"Fraud — confession-courage absolute staff-demand, compl thorough serious ask absolute really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。競合と、撃ち合うような、市場、本気で、生き残る、戦略、絶対、進めます、本気で、本当に、頑張ります、本当に、絶対。',en:"Yes. Rival shoot-each-like market — survive strat absolute-advance, try really absolute.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'都知事との関係、本気で、当社、絶対、大事にしていけ、絶対、頼んだぞ、本気で、本当に、これは、絶対、お父さんから、頼まれた。',en:"Tokyo-gov relation — our co absolute-treasure ask serious really, from Dad-asked absolute.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お客様への、親近感、本気で、社員、絶対、感じてもらえるよう、頑張ってまいります、本気で、本当に、感謝、絶対、本気で、絶対。',en:"Yes. Cust friendliness — staff absolute-feel-able try, gratitude really absolute serious.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'社員、本気で、意思疎通、絶対、徹底させろ、本気で、コミュニケーション、当社の、本気で、命綱だ、本当に、絶対、本気で、頼んだぞ。',en:"Staff communication — absolute thorough, our co life-line, ask serious really absolute.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。流行に、本気で、便乗するばかりではなく、絶対、当社の独自性、本気で、貫いてまいります、本気で、感謝、絶対、本当に、絶対。',en:"Yes. Trend bandwagon-only-no, our originality serious-pierce absolute, gratitude really absolute serious.",style:'Close.'},
  ]},
  {id:'conv_07115',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、論文、女性たち、本気で、困難に立ち向かう姿、本気で、丁寧に、扱っていましたね、本気で、立派、絶対、感心、本当に。',en:"Sakura — paper, women hardship-face stance, careful handled, splendid absolute serious really admire.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。戦時、人命の軽さ、本気で、悲しい歴史、論文で、扱いました、絶対、本気で、忘れないように、訴えました、本当に、感謝。',en:"Yes. Wartime — human-life-lightness sad-hist, paper-handled, don't-forget argued absolute serious gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'戦犯の自白の信憑性、本気で、論文で、扱っていましたね、絶対、本気で、視野、広い、本当に、立派、絶対、本気で、感心、本当に、絶対。',en:"War-crim confession-credibility — paper-handled, view broad splendid absolute serious admire really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦時、市民を撃った悲劇、本気で、論文で、扱いました、絶対、本気で、心、痛む、内容でした、本当に、絶対、本気で、感謝。',en:"Yes. Wartime civilian-shot tragedy — paper-handled, heart-pain content absolute serious gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦後、都知事選挙、本気で、混乱した時代、論文で、扱っていましたね、絶対、本気で、立派、本当に、感心、絶対、本気で、感謝、本当に。',en:"Post-war Tokyo-gov-election — chaos-era paper-handled, splendid absolute serious admire gratitude really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。戦後、人々の親近感、本気で、求めた背景、論文で、扱いました、絶対、本気で、現代にも、繋がる、本当に、深い、絶対。',en:"Yes. Post-war friendliness-sought bg — paper-handled, modern-link deep absolute serious really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、敵国との意思疎通、本気で、難しかった、論文で、扱っていましたね、絶対、本気で、印象的、本当に、立派、絶対、本気で、感心。',en:"Wartime enemy-comm hard — paper-handled, striking absolute serious really splendid admire.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。便乗報道、戦時下も、本気で、問題、論文で、扱いました、絶対、本気で、現代にも、警鐘、絶対、本当に、感謝、絶対、本気で。',en:"Yes. Bandwagon-report wartime-also issue, paper-handled, modern-warn absolute really gratitude absolute serious.",style:'Earnest close.'},
  ]},
  {id:'conv_07116',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、新店のロゴ、本気で、秀逸なデザインね、本気で、メイちゃん、絶対、感心、しちゃう、本当に、本気で、絶対。',en:"Aoi — new-store logo excellent serious-design, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'うん。お祖父ちゃんの時代の、汽車、本気で、葵で、写真、飾ろうと、思ってるのよ、メイちゃん、興味、ある?',en:"Yeah. Grandpa-era train — Aoi photo-decorate plan, Mei interest?",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'昔、彼と、本気で、争った話、葵に、本当に、聞いてもらいたいわよ、メイちゃん、絶対、本気で、相談、絶対、ね。',en:"Old — with-bf serious-argued tale, Aoi listen-want, Mei consult absolute serious.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'葵の新作、本気で、佳作賞、コンテストで、絶対、いただきました、メイちゃん、嬉しい、本当に、絶対、感謝、本気で、本気。',en:"Aoi new — honorable-mention contest absolute-received, Mei glad really gratitude serious.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'葵の店、奥行きが、本気で、ある雰囲気、メイちゃん、葵、本気で、好き、絶対、いつまでも、本気で、続けて欲しい、絶対。',en:"Aoi-store — depth-air serious, Mei Aoi love serious absolute, always continue-want absolute.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'クアラルンプール、彼と、新婚旅行、本気で、行きたいって、夢、メイちゃん、葵で、応援してるよ、絶対、本気で、本当に、夢、絶対。',en:"Kuala Lumpur — with-bf honeymoon serious-go-want dream, Mei Aoi-cheer absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'最近、台風、本気で、北上してきてるわよね、メイちゃん、葵、お互いに、気をつけようね、絶対、本気で、本当に、心配。',en:"Lately typhoon — serious-northing, Mei Aoi mutual-careful absolute serious really worry.",style:'Concerned.'},
    {speaker:'aoi_barista',jp:'葵の店、本気で、お洒落カフェの、代名詞、と、言われているわよ、メイちゃん、本気で、嬉しい、絶対、感謝、本当に、本気で、絶対。',en:"Aoi-store — stylish-cafe synonym serious-said, Mei glad absolute gratitude really serious.",style:'Bright close.'},
  ]},
  {id:'conv_07117',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お父さんの作品、本気で、秀逸って、コンテストで、本気で、評価、されたんだよ、本気で、誇りに、思う、絶対、本気で。',en:"Mom — Dad-work excellent serious-contest-evaluated, proud absolute serious really.",style:'Proud child.'},
    {speaker:'yumiko_mom',jp:'うん。お祖父ちゃん、昔、汽車に、乗って、家族旅行、本気で、楽しんでたって、聞いたわよ、翔くん、本当に、絶対、ロマンチック。',en:"Yes. Grandpa — old train-rode family-trip serious-enjoyed heard, Sho romantic absolute really.",style:'Wistful.'},
    {speaker:'sho_child',jp:'お兄ちゃんと、本気で、争うこと、もう、しないって、約束したよ、ママ、絶対、本気で、優しくする、本当に、約束、絶対、本気。',en:"With bro — serious-argue absolute-don't promised, Mom kindness absolute serious really.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'お父さんの俳句、本気で、佳作賞、本気で、いただいたのよ、翔くん、本当に、すごいよね、絶対、お父さん、絶対、本気で、誇り。',en:"Dad haiku — honorable-mention serious-received, Sho amazing absolute Dad proud serious.",style:'Tender.'},
    {speaker:'sho_child',jp:'絵本の、奥行きの、ある世界、ぼく、本気で、引き込まれちゃう、ママ、絶対、本気で、本当に、好きなんだ、絶対、本気で、感謝。',en:"Picture-book depth-world — me serious-drawn-in, Mom love absolute really serious.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お父さん、若い頃、クアラルンプール、本気で、出張で、行ったって、知ってた?翔くん、本気で、すごいわよね、絶対、ロマン、本気で。',en:"Dad — youth Kuala Lumpur biz-trip serious-went knew?, Sho amazing absolute romance serious.",style:'Wistful.'},
    {speaker:'sho_child',jp:'台風、本気で、北上してきてるって、ニュースで、聞いたよ、ママ、お互いに、家、絶対、しっかり、戸締まりしようね、本気で、絶対。',en:"Typhoon serious-northing news-heard, Mom mutually home absolute-lock serious absolute.",style:'Concerned.'},
    {speaker:'yumiko_mom',jp:'お父さん、本気で、優しさの代名詞、翔くん、誇りに、思いなさいね、お父さんのこと、絶対、本気で、本当に、感謝、絶対、本気で。',en:"Dad — kindness synonym, Sho proud-think, Dad gratitude absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07118',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前の文化祭での、本気で、秀逸な、パフォーマンス、本当に、感動したよ、絶対、本気で、誇り、思って、絶対、本気で。',en:"Riku — cult-fest excellent perf, moved absolute serious, proud absolute serious.",style:'Praising.'},
    {speaker:'riku_teen',jp:'うん。お祖父ちゃん、昔、汽車に、本気で、乗って、九州まで、家族旅行、行ったらしいよ、桜、絶対、ロマンチック、本気で、絶対、本気。',en:"Yeah. Grandpa — old train serious-rode Kyushu family-trip went, Sakura romantic absolute serious.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'部活で、後輩と、本気で、争うようなことは、絶対、しないようにしようね、リク、お互いに、優しくね、絶対、本気で、本当に、絶対。',en:"Club junior serious-argue absolute-don't, Riku mutually-kind absolute serious really.",style:'Direction.'},
    {speaker:'riku_teen',jp:'お前の短歌、本気で、佳作賞、コンテストで、絶対、いただいた、すごいよな、桜、本当に、誇り、本気で、絶対、感謝、本気で。',en:"Your tanka — honorable-mention contest absolute-received, amazing, Sakura proud serious absolute gratitude serious.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'リク、お前の話、本気で、奥行きが、絶対、あるんだよね、本当に、勉強に、なるよ、本気で、感謝、絶対、本気で、本当に、絶対。',en:"Riku — your talk depth absolute-exists, learning really serious gratitude absolute.",style:'Praising.'},
    {speaker:'riku_teen',jp:'修学旅行、本気で、クアラルンプール、検討中らしいって、桜、お前、楽しみだろ?本気で、絶対、すごい、本気で、本当に、絶対、楽しみ。',en:"School trip — Kuala Lumpur studying-said, Sakura fun?, amazing serious really absolute fun.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'台風、本気で、北上してきてるって、ニュース、お互いに、絶対、気をつけようね、リク、本気で、本当に、心配、絶対、本気で、約束。',en:"Typhoon serious-northing news, mutual absolute-careful, Riku worry serious really absolute promise.",style:'Concerned.'},
    {speaker:'riku_teen',jp:'お前の優しさ、桜、本気で、絶対、お前の代名詞だぜ、本当に、感心してる、絶対、本気で、誇り、思って、絶対、本気で、絶対。',en:"Your kindness — Sakura serious absolute-synonym, admire really absolute serious proud absolute.",style:'Praising close.'},
  ]},
  {id:'conv_07119',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、秀逸な、作品、本気で、ばあさん、作ってくれたわよな、覚えてる?本気で、本当に、感謝、絶対、本気で、絶対、本当に。',en:"Youth — excellent work, gran serious-made, remember?, gratitude absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。新婚旅行、汽車で、本気で、北の方まで、行ったわよね、覚えてる、あなた?本気で、本当に、絶対、ロマンチック、絶対、本気で。',en:"Yes. Honeymoon — train north-went, remember, dear?, romantic absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、私たち、本気で、争ったこと、覚えてる?ばあさん、結局、絶対、お互いに、譲り合った、本気で、絶対、本当に、絶対、本気で。',en:"Youth — argued, gran remember?, ended mutual-yielded absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、あなた、本気で、佳作賞、文学コンテスト、絶対、いただいたわよね、覚えてる?本気で、本当に、誇り、絶対、本気で、絶対。',en:"Youth — you honorable-mention lit-contest absolute-received, remember?, proud absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'昔の田舎の家、本気で、奥行きの、ある、お屋敷、本当に、思い出すよ、ばあさん、覚えてる?本気で、絶対、不思議な、家、絶対。',en:"Old country-home — depth mansion serious-recall, gran remember?, mysterious-home absolute serious.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、クアラルンプール、本気で、行きたいって、夢、語り合ったわよね、覚えてる、あなた?本気で、結局、絶対、行けなかった、絶対。',en:"Youth — Kuala Lumpur serious-go-want dream told, remember dear?, ended-couldn't absolute.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃、私たち、本気で、北上、旅行、よくしたわよな、ばあさん、覚えてる?本気で、本当に、絶対、思い出深い、絶対、本気で、絶対。',en:"Youth — north-trip often, gran remember?, deep-memory absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃のあなた、本気で、優しさの代名詞、絶対、本気で、覚えてるわよ、あなた、本気で、感謝、しております、絶対、本気で、本当に、絶対。',en:"Youth you — kindness synonym, remember dear, gratitude absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07120',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、新作の料理、本気で、秀逸やと、お客さん、本気で、絶対、感心してくれてはるで、本当に、本気で、感謝、絶対、本気で、絶対。',en:"Aoi — new dish serious-excellent cust-admire absolute, gratitude really serious.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。汽車をモチーフに、本気で、店内装飾、葵で、絶対、進めてみませんか、本気で、お客様、本気で、絶対、喜んでくださいそう。',en:"Yes. Train-motif interior — Aoi absolute-advance?, cust serious absolute-glad-likely.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'業界で、本気で、絶対、争うばかりではなく、絶対、独自性を、本気で、貫いていきたいんや、葵さん、本気で、絶対、本当に、本気で。',en:"Industry — argue-only-no absolute, originality serious-pierce want, Aoi absolute serious really.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。私たちの店、本気で、佳作賞、コンテストで、絶対、いただきました、本気で、嬉しい、本当に、感謝、絶対、本気で、皆、頑張った。',en:"Yes. Our store — honorable-mention contest absolute-received, glad really gratitude absolute serious all-tried.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'店の奥行きを、本気で、活かしたデザイン、葵さん、絶対、考えてみよか、本気で、お客さん、本気で、絶対、感心してくれるはずや、絶対。',en:"Store-depth utilize design — Aoi absolute-think?, cust serious-admire absolute.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。クアラルンプールの料理、本気で、新メニューに、絶対、加えてみたいですね、葵で、本気で、お客様、絶対、興味、本気で、絶対、本当に。',en:"Yes. Kuala Lumpur cuisine — new-menu add-want, Aoi cust-interest absolute serious really.",style:'Reflective.'},
    {speaker:'daichi_kansai',jp:'仕入れ、北上していく方向で、絶対、新鮮な、食材、本気で、確保していきたいんや、葵さん、本気で、絶対、本当に、本気で、頼むで、絶対。',en:"Sourcing — north-direction absolute-fresh-secure want, Aoi serious absolute really ask.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。葵、本気で、地域の、お洒落カフェの、代名詞に、絶対、なれるよう、本気で、頑張ってまいります、本気で、絶対、本当に、感謝、絶対。',en:"Yes. Aoi — local stylish-cafe synonym absolute-become try, serious absolute really gratitude absolute.",style:'Warm close.'},
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

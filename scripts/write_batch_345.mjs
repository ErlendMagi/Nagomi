import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_345 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['親しく','ノック','バレンタイン','小児科','丸ごと','ひととき','救っ','かなわ']
const B_T = ['盛り込ん','伺う','留保','派生','量産','保留','激減','差し上げ']
const C_T = ['プラント','穀物','浪費','感銘','共著','人文','宣告','未成年']
const D_T = ['ハブ','シューズ','マックス','サバ','鷹','樹脂','メダル','必修']

const data = [
  // A
  {id:'conv_06861',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お友達と、親しくなれたよ、転校先で、ぼく、嬉しいんだ。',en:"Mom — friend, close-became, new-school, glad, me.",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'うん。お父さんが、ノックの音、してくれたわよ、もうすぐ、帰宅ね。',en:"Yes. Dad — knock-sound made, soon-home.",style:'Warm.'},
    {speaker:'sho_child',jp:'今年のバレンタイン、ぼく、誰にあげようかな、迷ってるよ、ママ。',en:"This-year Valentine — me, who-give?, hesitating, Mom.",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'熱、出てきたかな、翔くん、明日、小児科、行きましょうね。',en:"Fever rising?, Sho, tomorrow pediatrics-go.",style:'Concerned.'},
    {speaker:'sho_child',jp:'お祖父ちゃんの梅干し、丸ごと、食べちゃったよ、ぼく、すっぱかった!',en:"Grandpa's umeboshi — whole ate, sour!",style:'Wry.'},
    {speaker:'yumiko_mom',jp:'家族でゆっくり、ひととき、過ごす時間、本当に、大切ね、翔くん。',en:"Family slowly, brief-moment spent — really vital, Sho.",style:'Tender.'},
    {speaker:'sho_child',jp:'子犬を、救ったお話、絵本で、読んだよ、感動したんだ、ぼく、本当に。',en:"Puppy-saved tale, picture-book read, moved, me, really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お母さんに、かなわないって、お父さん、言ってたわよ、料理、上手だって。',en:"To-Mom, can't-match, Dad said, cooking-good.",style:'Reflective close.'},
  ]},
  {id:'conv_06862',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、彼の弟と、親しく、話せるようになってきたの、最近、私。',en:"Aoi — his bro, close-talk-able, lately, me.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。お客様、ドアをノックして、入ってこられる方が、多いわよね、丁寧な方。',en:"Yeah. Cust — knock-enter, many, polite.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'今年のバレンタイン、彼に、手作りチョコ、渡そうかな、葵、どう思う?',en:"This-year Valentine — bf, hand-choco, give?, Aoi, think?",style:'Probe.'},
    {speaker:'aoi_barista',jp:'妹さん、看護師として、小児科で、働いていらっしゃるんですよね。',en:"Sis — as nurse, pediatrics-work.",style:'Curious.'},
    {speaker:'mei_romantic',jp:'お土産のチーズケーキ、丸ごと、私、食べちゃったわ、葵、ごめん。',en:"Souv cheesecake — whole me ate, Aoi sorry.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'カフェで、ゆっくりと、ひととき、過ごす時間、お客様の、贅沢ね、本当に。',en:"Cafe — slow brief-moment spent — cust luxury, really.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'命を救った医師、ニュースで、見たわよ、葵、感動しちゃったよ、私。',en:"Life-saved doctor — news-saw, Aoi, moved, me.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'メイちゃんの優しさには、私も、かなわないって、思うわよね、葵としても。',en:"To Mei-kindness — me too can't-match, think, as Aoi.",style:'Warm close.'},
  ]},
  {id:'conv_06863',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、最近、お前と、親しくなれて、嬉しいよ、私、本当に。',en:"Riku — lately, close-become, glad, me really.",style:'Soft teen.'},
    {speaker:'riku_teen',jp:'うん。職員室のドア、ノックして、入るのって、緊張するよな、いつも。',en:"Yeah. Staff-room door — knock-enter, nervous, always.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'今年のバレンタイン、リク、誰かに、貰ったって、聞いたよ、本当?',en:"This Valentine — Riku, someone gave, heard, true?",style:'Probe teen.'},
    {speaker:'riku_teen',jp:'弟、最近、熱出してさ、小児科、連れていく、お母さん、大変だぜ。',en:"Bro — lately fever, pediatrics-take, Mom hard.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お弁当のおにぎり、丸ごと、ぼく、食べちゃった、リク、ごめん、お腹空いて。',en:"Lunch onigiri — whole I ate, Riku, sorry, hungry.",style:'Wry teen.'},
    {speaker:'riku_teen',jp:'部活前、皆で、ひととき、休憩するの、結構、好きだぜ、俺。',en:"Pre-club — all-rest brief-moment, like, me.",style:'Cheerful.'},
    {speaker:'sakura_teen',jp:'お前、犬を、救ったことあるって、本当?優しいんだね、リク、知らなかった。',en:"You — dog-saved truth?, kind, Riku, didn't-know.",style:'Animated.'},
    {speaker:'riku_teen',jp:'お前のスポーツの実力には、俺、かなわないよ、桜、本当に、すごいぜ。',en:"Your sport-skill — I can't-match, Sakura, amazing, really.",style:'Praising close.'},
  ]},
  {id:'conv_06864',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ご近所さん、親しくしてくださって、本当に、ありがたいな、ばあさん。',en:"Neighbors — close-treat, really grateful, gran.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'うん。玄関の、ノックの音、最近、よく聞こえるようになったわね、年だわ。',en:"Yes. Entrance knock-sound — lately well-heard, aged.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'バレンタインの日、若い頃、ばあさん、チョコ、くれたな、覚えてる、私?',en:"Valentine — youth, gran, choco gave, remember, me?",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'孫、最近、熱、よく出すから、小児科、頻繁に、行ってるみたいね、息子、大変。',en:"Grandkid — lately fever often, peds often-go, son hard.",style:'Concerned.'},
    {speaker:'hiroshi_elder',jp:'お祖父ちゃん、若い頃、スイカ、丸ごと、食べたな、夏は、よく、楽しかった。',en:"Grandpa — youth, watermelon whole ate, summer often, fun.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'庭で、ひととき、お茶を飲む時間、二人の、贅沢な時間ね、いつも。',en:"Garden brief-moment tea-time — our luxury time, always.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'戦時中、命を救ってくれた医師、今でも、感謝しているよ、私、ばあさん。',en:"Wartime — life-saved doctor, still grateful, gran.",style:'Sage.'},
    {speaker:'sachiko_grandma',jp:'あなたの料理の腕、最近、私には、もう、かなわないわよ、上達したわね。',en:"Your cooking-skill — lately, I can't-match, improved.",style:'Praising close.'},
  ]},
  {id:'conv_06865',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さんと、もっと、親しくなろうね、いつも、仲良しよ。',en:"Sho — Mei-sis, more close-be, always friends.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さんの家のドア、ぼく、ノックして、入ったよ、ちゃんと、できたよ。',en:"Mei-sis's door — me, knocked-entered, properly done.",style:'Proud child.'},
    {speaker:'mei_romantic',jp:'バレンタインの日、メイ姉さん、翔くんに、プレゼント、用意してるからね。',en:"Valentine — Mei-sis, gift-prep, for Sho.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さんの妹、看護師で、小児科で、働いているって、聞いたよ。',en:"Mei-sis's sis — nurse, peds-work, heard.",style:'Curious child.'},
    {speaker:'mei_romantic',jp:'お祭りの夜、たこ焼き、丸ごと、ぱくっと、食べた、翔くん、楽しかったね。',en:"Fest-night — takoyaki whole gobbled, Sho fun.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さんと、ひととき、お絵描き、する時間、ぼく、大好きなんだ。',en:"Mei-sis brief-moment drawing — love.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'絵本のヒーロー、皆を救ったお話、感動的だね、翔くん、覚えてる?',en:"Picture-book hero — all-saved tale, moving, Sho, remember?",style:'Soft.'},
    {speaker:'sho_child',jp:'メイ姉さんのお絵描きには、ぼく、かなわないよ、上手すぎるんだもん、本当に。',en:"Mei-sis drawing — me can't-match, too-good, really.",style:'Awe close.'},
  ]},

  // B
  {id:'conv_06866',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'新企画、若手の提案を、盛り込んで、進めろ。',en:"New plan — youth-proposal embed advance.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。来週、社長に、進捗を、伺う予定です、私から、ご報告します。',en:"Yes. Next week — pres-progress visit-ask plan, report.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'今回の投資判断、しばらく、留保する方向だ、慎重に。',en:"This-invest decision — temp-reserve direction, careful.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新製品から、派生した、関連商品、開発、進めております。',en:"Yes. New product — derived related-goods, dev advancing.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'量産体制、整え次第、市場、本格投入する。',en:"Mass-prod system — once-ready, market-full launch.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。検討事項、二件、しばらく、保留にさせていただいております。',en:"Yes. Issues — 2, currently held.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'競合の売上、激減だと、ニュースで、見たな、当社、攻めろ。',en:"Rival sales — drastic-drop, news-saw, our co attack.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お得意様に、お中元、差し上げる予定です、年に、二回ね。',en:"Yes. VIP-cust — chugen-gift plan, twice-yearly.",style:'Close.'},
  ]},
  {id:'conv_06867',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'今回の社員向け施策、皆の声を、盛り込んだ内容に、しましょうね。',en:"This staff-policy — all-voices embedded content.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。お客様の声を、お伺いする機会、増やしてまいります、来期も。',en:"Yes. Cust-voice ask-chances, increase, next-term too.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'新規プロジェクト、しばらく、判断、留保しましょう、市場の動向、見つつ。',en:"New project — decision temp-reserve, watch market.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。本流から派生した、別事業、独立採算で、進めています。',en:"Yes. From-main derived biz — indep-acc, advancing.",style:'Update.'},
    {speaker:'yuki_office',jp:'量産前のテスト、しっかり、行いましょうね、品質、命だから。',en:"Pre-mass-prod test — properly do, quality life.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。会議の議題、一件、保留にしておきます、もう少し、情報、必要です。',en:"Yes. Meet agenda — 1 holding, more info needed.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'本日の売上、激減してるね、雨の影響かしらね、店舗、心配だわ。',en:"Today sales — drastic-drop, rain-effect?, store worry.",style:'Concerned.'},
    {speaker:'kenji_office',jp:'はい。お祝いの花、お得意様に、差し上げました、創業記念日に、合わせて。',en:"Yes. Cele flowers — VIP-cust gave, founding-anniv aligned.",style:'Close.'},
  ]},
  {id:'conv_06868',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、論文に、新しい視点を、盛り込んで、書け、独自性、出せ。',en:"Ren — paper, new view embed write, originality out.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。来週、研究室を、お伺うことになっています、新教官に、ご挨拶します。',en:"Yes. Next week — lab visit-ask, new-prof greet.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究テーマ、しばらく、留保して、慎重に、選び直せ。',en:"Research theme — temp-reserve, careful re-choose.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。基礎研究から、派生して、応用研究に、進めたいです。',en:"Yes. From-basic-derived, applied-want.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'量産可能な技術、社会的意義、君も、考えろ。',en:"Mass-prod-able tech — soc-meaning, also think.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。発表予定、しばらく、保留にしていただきました、まだ、修正中です。',en:"Yes. Pres plan — temp-held, still revising.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究分野、若手の参入、激減しているって、聞くな、君は、頑張れ。',en:"Research field — youth-entry, drastic-drop heard, you keep-going.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。先生に、お祝いの言葉、論文発表後、差し上げたいです。',en:"Yes. Prof — cele-words, post-pres, want-give.",style:'Earnest close.'},
  ]},
  {id:'conv_06869',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'防犯計画、住民の声を、盛り込んで、立てております、最新版です。',en:"Crime-prev plan — resident-voice embed built, latest.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察様、当社に、お伺いいただける日、決まりましたら、教えてください。',en:"Yes. Police visit-ask day — decide-then, tell.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'今回の捜査、一部、留保している情報、開示できる時期、近づいております。',en:"This inv — partly reserved info, disclose-time near.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。事件から派生した、関連事件、御社で、続出しております。',en:"Yes. From-case-derived related — your-side, continuous.",style:'Update.'},
    {speaker:'takeda_officer',jp:'防犯機器、量産化が進み、家庭にも、普及しております、近年。',en:"Crime-prev — mass-prod advanced, home-spread, recent.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。被害届、一部、保留にされている案件、ございますね、複雑な背景で。',en:"Yes. Damage-claims — partly held cases exist, complex background.",style:'Update.'},
    {speaker:'takeda_officer',jp:'地域犯罪、激減傾向にあります、皆様のご協力、賜っております、感謝です。',en:"Local crime — drastic-drop trend, your coop, grateful.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察への感謝状、社長から、差し上げる予定です、来月。',en:"Yes. Police-thanks letter — pres-give, next month.",style:'Close.'},
  ]},
  {id:'conv_06870',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'お父さんの代から、創業精神を、盛り込んだ社是、今も、生きているな。',en:"Since Dad-era — founding-spirit embedded motto, still alive.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。来月、創業者の墓所を、お伺うつもりです、社員代表として。',en:"Yes. Next month — founder grave visit-ask plan, staff-rep.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'創業期、私も、しばらく、判断を、留保したこと、何度もあった。',en:"Founding — also, temp-reserved judgment, many-times.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。創業時の事業から、派生した、新事業、私の代でも、進めております。',en:"Yes. Founding biz-derived, new biz, my era too, advancing.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'量産体制の確立、創業期の私たちの、夢だったな、本当に、頑張った。',en:"Mass-prod estab — founding-our dream, really hard-worked.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんが、保留されていた案件、今、進められそうです、ようやく。',en:"Yes. Dad-held items — now advance-able, finally.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'創業期の業績、激減した時期、乗り越えた経験、今に、活きている。',en:"Founding-era — drastic-drop overcame exp, now-alive.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。創業者として、お父さんに、感謝状、差し上げる予定です、創業祭で。',en:"Yes. As founder Dad — thanks-letter plan, corp-fest.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06871',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses environmental research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、論文、火力プラントの環境影響、深く、論じていますね、立派です。',en:"Ren — paper, thermal-plant env-impact, deeply argued, splendid.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。穀物の生産、気候変動、深く、影響している地域、取り上げました。',en:"Yes. Grain prod — climate, deeply-affected region, raised.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'環境資源の浪費、現代社会、深刻ですね、世界中で、課題です。',en:"Env-resource waste — modern, severe, worldwide issue.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。研究者の生き様に、私、深く、感銘を受けました、論文を書きながら。',en:"Yes. Researcher-life, deeply moved, while writing.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'共著論文、来年度、目指していますね、海外の研究者と、よい関係です。',en:"Co-auth paper — next-fy aim, overseas-researcher, good rel.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。人文系の視点、環境問題に、新たな光を、当てる可能性、あると思います。',en:"Yes. Humanities view — env-issue, new-light shine possible, think.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'環境問題、人類の存続を、宣告するような、警鐘ですね、論文の終章。',en:"Env-issue — humanity existence, declare-like, warning, ending.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。未成年への教育、環境意識、若い世代から、変えていく必要性、論じました。',en:"Yes. Minor-edu — env-conscience, from-youth-change need, argued.",style:'Earnest close.'},
  ]},
  {id:'conv_06872',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'容疑者、化学プラント、勤務歴、ありました、捜査の手がかりに、なります。',en:"Suspect — chem-plant work-history existed, inv-clue.",style:'Calm.'},
    {speaker:'ren_uni',jp:'被害者、穀物倉庫の経営者だったんですね、現場、私、訪ねたんです。',en:"Victim — grain-warehouse manager, site visited, me.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、税金浪費の疑惑も、あります、別件で、調査中です。',en:"Yes. Suspect — tax-waste susp also, sep-case, investigating.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害者ご家族の方々の証言、警察官の方々、感銘を、受けられたそうですね。',en:"Victim-family testimonies — officers moved, said.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。研究者と警察、共著で、防犯論文、出した例も、ございます、過去に。',en:"Yes. Researcher-police co-auth crime-prev paper, past-existed.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'人文系の視点も、犯罪心理学、活かされていますね、最新の捜査では、特に。',en:"Humanities view — crim-psych utilized, latest inv esp.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、有罪宣告を、受ける可能性が、高いとされております、現在のところ。',en:"Yes. Suspect — guilty-decl receive prob high, currently.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'未成年の被害者、ケアの体制、社会的に、整備、急務ですね、本当に。',en:"Minor victims — care system, social-prep, urgent, really.",style:'Reflective close.'},
  ]},
  {id:'conv_06873',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、化学プラント周辺の住民、健康被害、続報、来ております、最近。',en:"Ren — chem-plant area residents — health-damage update, lately.",style:'Calm.'},
    {speaker:'ren_uni',jp:'穀物アレルギーの患者、最近、増えていますね、社会問題、なっていますよね。',en:"Grain-allergy patients — lately increase, soc-issue.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。医療資源の浪費、慎重に、避けたいですね、私たち、心がけています。',en:"Yes. Med-resource waste — carefully avoid want, mindful.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医師の方の、奉仕の姿に、深く、感銘を、受けました、調査の中で。',en:"Doctor's service-stance, deep-moved, in survey.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。先生方と、共著で、医療論文、書いている、若手も、多いですよ、最近。',en:"Yes. With sensei — co-auth med-paper, young many, lately.",style:'Informative.'},
    {speaker:'ren_uni',jp:'人文と医療の融合、新しい研究の流れ、感じていますね、先生も。',en:"Humanities-med merge — new research-flow, feel, sensei?",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。患者さんに、難病の宣告、医師として、重い責任を、感じます、いつも。',en:"Yes. Patient — incurable decl, as doctor, heavy resp, always.",style:'Patient.'},
    {speaker:'ren_uni',jp:'未成年の患者さん、医療体制、整備が必要ですよね、社会全体で、本当に。',en:"Minor patients — med-system prep needed, socially, really.",style:'Reflective close.'},
  ]},
  {id:'conv_06874',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp ethics',lines:[
    {speaker:'hiroshi_boss',jp:'当社の新プラント、環境基準、最高水準で、設計させろ。',en:"Our new plant — env-standard, top-level design.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。穀物加工の食品事業、新規参入、検討中です、来期から。',en:"Yes. Grain-processing food biz — new-entry studying, next term.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'資源浪費、社内、絶対に、許さない方針だ、徹底させろ。',en:"Resource-waste — internally, absolutely-no policy, thorough.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。創業者のスピーチ、新人、感銘を、受けたって、伝えてきました。',en:"Yes. Founder speech — newbie moved, told.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界誌で、大学教授と、共著、新人にも、機会、与えろ。',en:"Industry mag — uni-prof co-auth — newbie chance, give.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。人文系出身の社員も、活躍の場、広がっております。',en:"Yes. Humanities-grad staff — active-stage, spreading.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'破産宣告を、受けた競合の事例、研究して、反面教師に、しろ。',en:"Bankrupt-decl received rivals — study, neg-example.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。未成年向け、製品安全基準、見直しております、最高基準で。',en:"Yes. Minor-aimed product-safety — reviewing, top-level.",style:'Close.'},
  ]},
  {id:'conv_06875',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through cultural studies',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、論文、工業プラントの歴史、よく、整理されていますね、戦後の発展、深く。',en:"Sakura — paper, industrial-plant hist, well-organized, post-war dev deep.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。戦後、穀物自給、苦労した時代、丁寧に、扱いました、論文の中で。',en:"Yes. Post-war — grain self-suff, hardship-era, careful-handled, paper.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'戦争による国富の浪費、深く、論じていますね、教科書では、扱いきれない深さで。',en:"War nation-wealth waste — deep argued, beyond-textbook-depth.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦時の文学作品に、深く、感銘を、受けました、当時の作家の覚悟に。',en:"Yes. Wartime lit — deeply moved, era-author-resolve.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'歴史家との共著、機会があれば、桜さんも、挑戦すべきですね、将来。',en:"Historian-co-auth — chance-exist, also Sakura try should, future.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。人文学、社会学との、融合、新しい研究の道、開けますよね、これから。',en:"Yes. Humanities-soc-sci merge — new research-path opens, hence.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦争の終焉、敗戦宣告、人々の心に、深い影、落としましたね、長く。',en:"War-end defeat-decl — people-heart, deep-shadow, long.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。当時の未成年、戦災孤児として、社会に、放り出された、辛い歴史、論じました。',en:"Yes. Era minors — war-orphans, soc-thrown, hard-hist, argued.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06876',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、最近の駅、ハブステーション化してて、便利になったわよね、本当に。',en:"Aoi — recent stns, hub-station, convenient, really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。新しいランニングシューズ、買ったの、私、走るの、楽しくなってきたよ、最近。',en:"Yeah. New running-shoes bought, run-fun lately.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'スポーツジム、マックス、頑張ってるよ、彼、結構、本気で、トレーニング、毎日。',en:"Gym — max effort, bf, serious, daily training.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'夜ご飯、サバの味噌煮、作ったよ、家で、美味しかったんだ、本当に。',en:"Dinner — saba-miso made, home, tasty really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'動物園で、鷹のショー、見たよ、迫力、すごかった、葵、行ってみてね。',en:"Zoo — hawk show saw, intense, Aoi go-try.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'新作の樹脂アクセサリー、可愛いよ、メイちゃん、見て、お土産にしてもいいかな。',en:"New resin-accessory — cute, Mei look, souv-OK?",style:'Soft.'},
    {speaker:'mei_romantic',jp:'金メダル、オリンピック、応援したよね、本当に、感動的だったね、テレビで。',en:"Gold medal — Olympic cheered, moving, TV.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'大学で、必修だった科目、結構、苦労したな、私、覚えてる、メイちゃんも?',en:"Uni — required-subj, quite-hard, remember, Mei too?",style:'Reflective close.'},
  ]},
  {id:'conv_06877',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、新しい鉛筆、ハブのキャラが、ついてるの、可愛いよ、見て!',en:"Mom — new pencil, hub-char, cute, see!",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'うん。新しいシューズ、運動会用、買ってあげるわね、翔くん、楽しみね。',en:"Yes. New shoes — sports-day, buy, Sho, fun.",style:'Warm.'},
    {speaker:'sho_child',jp:'お父さん、声、マックスで、応援してくれたよ、ぼくの試合、嬉しかったよ。',en:"Dad — voice max, cheered, my match, glad.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'今日の夜ご飯、サバの塩焼きよ、お父さん、好きなのよね、楽しみだわね。',en:"Dinner — saba-salt-grill, Dad-fave, fun.",style:'Tender.'},
    {speaker:'sho_child',jp:'絵本の鷹さん、ぼく、強くて、かっこいいなって、思ったんだ、ママ、見て。',en:"Picture-book hawk — strong-cool, thought, Mom see.",style:'Awe.'},
    {speaker:'yumiko_mom',jp:'お父さんがくれた、樹脂の置物、リビングに、飾ってあるのよ、知ってた、翔くん?',en:"Dad-gift resin-figure — living-decorated, knew, Sho?",style:'Reflective.'},
    {speaker:'sho_child',jp:'運動会で、銅メダル、ぼく、もらったんだよ、ママ、誇らしいんだ!',en:"Sports — bronze medal me received, Mom, proud!",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'お母さんの大学時代、英語、必修科目で、苦労したのよ、翔くんも、頑張ってね。',en:"Mom uni-era — English req-subj, hard, also Sho try.",style:'Warm close.'},
  ]},
  {id:'conv_06878',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お父さんの仕事、空港のハブ整備って、聞いたよ、すごいよね、本当に。',en:"Riku — Dad-work, airport hub-maint heard, amazing, really.",style:'Curious teen.'},
    {speaker:'riku_teen',jp:'うん。陸上競技用のシューズ、新しいの、買ってもらったぜ、桜、見せようか。',en:"Yeah. Track shoes new, got, Sakura, show?",style:'Eager.'},
    {speaker:'sakura_teen',jp:'部活の練習、マックスで、頑張ってるよね、リク、いつも、本当に、感心するよ。',en:"Club practice — max effort, Riku, always, admire really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'家庭科で、サバの味噌煮、作ったぞ、結構、美味しかった、自分でも、驚いた。',en:"Home-ec — saba-miso made, tasty, self-surprised.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'地学のテスト、鷹の生態、出てきたよ、リク、勉強したから、できたよ。',en:"Geo test — hawk-eco came, Riku, studied so did.",style:'Bright.'},
    {speaker:'riku_teen',jp:'美術部、樹脂を使った作品、文化祭、出すんだろ、桜、楽しみだぜ。',en:"Art-club — resin-work, cult-fest, you out, Sakura, fun.",style:'Curious.'},
    {speaker:'sakura_teen',jp:'お前、運動会で、金メダル、また、取ったんだろ、すごいよね、リク、本当に。',en:"You — sports-day, gold again, amazing, Riku really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'高校の必修、数学、結構、ハードだぜ、お前、ついていけてる、桜?',en:"HS req-subj math — quite hard, you, keeping-up, Sakura?",style:'Wry close.'},
  ]},
  {id:'conv_06879',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃の駅、今は、立派なハブ駅になっているな、覚えてる、ばあさん?',en:"Youth station — now splendid hub-stn, remember, gran?",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。あなたの革のシューズ、お祖父ちゃんが、長年、使っていたわよね、覚えてる?',en:"Yes. Your leather shoes — Grandpa long-used, remember?",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃の私、声、マックスで、応援していたな、息子の試合、本当に。',en:"Youth me — voice-max cheered, son's match, really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'昔の食卓、サバ料理、よく出していたわよね、お父さんが、好きだったから。',en:"Old table — saba dishes often out, Dad-fave.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'お祖父ちゃん、若い頃、鷹狩りの本、よく、読んでいたな、私、覚えてるよ。',en:"Grandpa — youth, falconry-book often read, remember.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'昔の樹脂の食器、軽くて、使いやすかったわよね、子育ての時、便利だったわ。',en:"Old resin-tableware — light, easy-use, child-rearing convenient.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'息子が、若い頃、メダル、たくさん、取ってきたな、本当に、嬉しかった、私たち。',en:"Son — youth, medals many, won, glad, us.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'お父さんの代、大学の必修科目、結構、厳しかったって、よく、話してくれたわよね。',en:"Dad-era — uni req-subj, quite strict, often-told.",style:'Reflective close.'},
  ]},
  {id:'conv_06880',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、新店、駅前のハブエリアに、出店しよか、人通り、多いで。',en:"Aoi — new store, station-hub area, open?, foot-traffic many.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。スタッフ用、新しいシューズ、揃えましょうか、店、滑りやすいので。',en:"Yes. Staff — new shoes set?, store slippery.",style:'Practical.'},
    {speaker:'daichi_kansai',jp:'仕入れ、量、マックスで、できるルート、確保したで、葵さん。',en:"Sourcing — vol-max-able route, secured, Aoi.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。秋メニュー、サバの新作、開発しております、お楽しみに。',en:"Yes. Autumn menu — saba new dev, look-forward.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'お客様向けに、鷹の絵を使ったランチョンマット、お洒落で、ええんちゃうか、葵さん。',en:"Cust — hawk-art placemat, stylish, good?, Aoi.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。樹脂製の食器、軽くて、業務用、おすすめですね、葵で使いたいです。',en:"Yes. Resin tableware — light, biz-use rec, Aoi want-use.",style:'Reflective.'},
    {speaker:'daichi_kansai',jp:'コンクールで金メダル取った、若い料理人、スカウトしよか、葵さん、新人として。',en:"Contest gold-won, young cook, scout?, Aoi, as newbie.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。料理人の必修知識、新人研修に、ぜひ、盛り込みたいですね、葵で。',en:"Yes. Cook req-knowledge — newbie-train, def embed want, Aoi.",style:'Warm close.'},
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

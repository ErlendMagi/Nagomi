import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_311 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['手がかり','恐れる','惜しま','誇っ','心地よく','震える','諦める','寄席']
const B_T = ['炭素','載る','初年度','下見','即決','補っ','ルポ','用例']
const C_T = ['野鳥','密室','完走','称さ','代々','比し','戦中','脅かさ']
const D_T = ['イルミネーション','ろうそく','洋食','新緑','売れ筋','ロース','ファンクラブ','家族連れ']

const data = [
  // A
  {id:'conv_06181',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends discuss life',lines:[
    {speaker:'mei_romantic',jp:'夢を叶える手がかり、見つけたの。',en:"Found a clue to fulfilling my dream.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'失敗を恐れる気持ち、誰にでもあるよ。',en:"Fear of failure — everyone has it.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'努力を惜しまずに、続けたい。',en:"Without sparing effort — keep going.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'あなたを誇っているの、私。',en:"I'm proud of you.",style:'Tender.'},
    {speaker:'mei_romantic',jp:'今夜、心地よく眠れそう。',en:"Tonight — should sleep comfortably.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'昨日、急に震える手、自分で驚いた。',en:"Yesterday — trembling hands surprised me.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'諦めるのは、まだ早いよ。',en:"Too soon to give up.",style:'Direction.'},
    {speaker:'aoi_barista',jp:'今度、寄席にも一緒に行きたい。',en:"Wanna go to yose together too.",style:'Warm close.'},
  ]},
  {id:'conv_06182',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk',lines:[
    {speaker:'sakura_teen',jp:'試験の手がかり、過去問にあると思う。',en:"Test clues — likely in past exams.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。失敗を恐れる前に、挑戦しよう。',en:"Yeah. Try before fearing failure.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'休み時間を惜しまずに、勉強してる。',en:"Without sparing breaks — studying.",style:'Animated.'},
    {speaker:'riku_teen',jp:'担任、お前の頑張りを、誇ってる感じだったぞ。',en:"Homeroom — seemed proud of your effort.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'授業前、心地よく深呼吸したい。',en:"Before class — comfortable deep breathing.",style:'Soft.'},
    {speaker:'riku_teen',jp:'発表で、声、震える時あるよな。',en:"In speeches — voice trembles sometimes.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'夢、諦めないでね。',en:"Don't give up your dream.",style:'Direction.'},
    {speaker:'riku_teen',jp:'今度、寄席、家族で行こうって父さんが。',en:"Dad says — family yose visit next time.",style:'Warm close.'},
  ]},
  {id:'conv_06183',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃の手がかり写真、整理しよう。',en:"Youth-clue photos — organize.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。地震を恐れる時代、お互い乗り越えたわね。',en:"Yes. Quake-fearing era, overcame together.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'時間を惜しまずに、子育てしたな。',en:"Without sparing time — raised kids.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'孫を誇っている、いい子に育って。',en:"Proud of grandkid — grew up well.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'庭の風、心地よく感じるな。',en:"Garden breeze — comforting.",style:'Soft.'},
    {speaker:'sachiko_grandma',jp:'手、最近、ちょっと震える時があるの。',en:"Hands — sometimes tremble lately.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'まだまだ、諦めるのは早いぞ。',en:"Still too soon to give up.",style:'Direction.'},
    {speaker:'sachiko_grandma',jp:'寄席、若い頃よく行ったわね、二人で。',en:"Yose — we went often in youth.",style:'Warm close.'},
  ]},
  {id:'conv_06184',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、宝探しの手がかり、絵本に書いてあった。',en:"Mom — treasure-hunt clue, in the picture book.",style:'Excited child.'},
    {speaker:'yumiko_mom',jp:'うん。お化けを恐れるけど、大丈夫よ。',en:"Yes. Scared of ghosts, but it's okay.",style:'Tender.'},
    {speaker:'sho_child',jp:'走り回るの、惜しまずに、頑張った。',en:"Without sparing running — gave my best.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'あなたを誇っているわ、本当に。',en:"Truly proud of you.",style:'Warm.'},
    {speaker:'sho_child',jp:'お風呂のお湯、心地よく温かい。',en:"Bath water — comfortably warm.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'寒い夜、手が震える時、布団で温めようね。',en:"Cold nights with shivering hands — warm in futon.",style:'Soft.'},
    {speaker:'sho_child',jp:'おもちゃ、まだ諦めるなって、お父さんが言った。',en:"Toy — Dad said don't give up.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'今度、寄席、お父さんと一緒に観に行きましょう。',en:"Next time — yose with Dad.",style:'Warm close.'},
  ]},
  {id:'conv_06185',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai chats with a teen',lines:[
    {speaker:'ren_uni',jp:'桜、研究の手がかり、図書館で見つかった?',en:"Sakura — research clue found at the library?",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。失敗を恐れる気持ち、減ってきました。',en:"Yes. Failure fear — decreasing.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'時間を惜しまずに、調べる姿勢、いいぞ。',en:"Without sparing time — good attitude.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'先輩、私を誇っていただけて嬉しいです。',en:"Senpai — glad you're proud.",style:'Warm.'},
    {speaker:'ren_uni',jp:'公園の風、心地よく吹いてるな。',en:"Park breeze — blowing comfortably.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'発表前、緊張で、声、震えるかも。',en:"Pre-speech — voice may tremble.",style:'Vulnerable.'},
    {speaker:'ren_uni',jp:'諦めるな、最後まで。',en:"Don't give up till the end.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'打ち上げで、寄席に連れて行ってください。',en:"After-party — take me to yose.",style:'Warm close.'},
  ]},

  // B
  {id:'conv_06186',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews CSR/operations',lines:[
    {speaker:'hiroshi_boss',jp:'炭素排出、削減目標、達成しろ。',en:"Carbon emissions — hit reduction target.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。新聞、各紙に載る予定です。',en:"Yes. Various papers will carry it.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'初年度の決算、見通しはどうだ。',en:"First-year earnings — outlook?",style:'Direction.'},
    {speaker:'kenji_office',jp:'担当が下見に出ています。即決の案件、増えました。',en:"Lead is doing site-checks. Snap-decision items increased.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'欠員、人員、補ってくれ。',en:"Vacancies — fill staffing.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社内報、ルポ記事も用意します。',en:"Yes. Internal — reportage piece prepared.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'契約書、用例、参考にしろ。',en:"Contract — reference example phrasings.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい、承知しました。',en:"Yes, understood.",style:'Close.'},
  ]},
  {id:'conv_06187',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss publishing',lines:[
    {speaker:'yuki_office',jp:'炭素中和の取り組み、SDGs報告に載るね。',en:"Carbon-neutral effort — in SDGs report.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。雑誌、初年度の成果、特集します。',en:"Yes. Magazine — first-year results, feature.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'写真撮影、現地下見、来週いこう。',en:"Photo-shoot site-check — next week.",style:'Direction.'},
    {speaker:'kenji_office',jp:'即決で出版社、依頼しました。',en:"Snap-decided — booked publisher.",style:'Update.'},
    {speaker:'yuki_office',jp:'記者、二人補ってもらえるって。',en:"Two extra reporters added.",style:'Bright.'},
    {speaker:'kenji_office',jp:'はい。ルポ風の構成、編集の方針です。',en:"Yes. Reportage-style composition — editing policy.",style:'Update.'},
    {speaker:'yuki_office',jp:'契約の用例、過去の事例、参考に。',en:"Contract examples — reference past.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。',en:"Yes.",style:'Close.'},
  ]},
  {id:'conv_06188',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、炭素管理、企業の社会的責任の核だ。',en:"Ren — carbon mgmt is CSR core.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。記事が新聞に載ると、業界の注目度、上がりますね。',en:"Yes. Press coverage raises industry attention.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'初年度のレポート、若手が書くと、新鮮な視点が出る。',en:"First-year reports by youth — fresh viewpoints.",style:'Direction.'},
    {speaker:'ren_uni',jp:'現場下見、私も同行できますか。',en:"Site-check — may I accompany?",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'うん。即決の習慣、現場で学べ。',en:"Yes. Snap-decision habit — learn on site.",style:'Direction.'},
    {speaker:'ren_uni',jp:'チームに欠員あれば、補ってもらえるんでしょうか。',en:"Vacancies — fillable for the team?",style:'Curious.'},
    {speaker:'hiroshi_boss',jp:'ルポ記事の用例、教材として渡すぞ。',en:"Reportage examples — pass as study material.",style:'Direction.'},
    {speaker:'ren_uni',jp:'ありがとうございます。',en:"Thank you.",style:'Earnest close.'},
  ]},
  {id:'conv_06189',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on coordination',lines:[
    {speaker:'takeda_officer',jp:'炭素関連の不正、近年、注視しています。',en:"Carbon-related fraud — watched recently.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。当社、警察と協力の旨、社報に載る予定です。',en:"Yes. Our police-cooperation, in the newsletter.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'初年度の合同訓練、効果ありましたね。',en:"First-year joint drills — effective.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。下見済みの避難ルート、再確認します。',en:"Yes. Site-checked evac routes — re-confirm.",style:'Update.'},
    {speaker:'takeda_officer',jp:'即決で動ける体制、整えてください。',en:"Snap-decision structure — prepare.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。隊員、必要なら補っていただけますか。',en:"Yes. Officers — if needed, can supplement?",style:'Polite.'},
    {speaker:'takeda_officer',jp:'はい。警察庁の方針、ルポ風に資料化しています。',en:"Yes. NPA policy — reportage-style materials.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'用例、参考にさせていただきます。',en:"Examples — will reference.",style:'Close.'},
  ]},
  {id:'conv_06190',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'炭素中和、若い頃には聞かない言葉だった。',en:"Carbon-neutral — unheard in youth.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。記事に載るたび、業界の認知、広がります。',en:"Yes. Each coverage — industry awareness spreads.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'初年度の数字、自信を持って公表しろ。',en:"First-year figures — publish confidently.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'下見は、若手にも経験させます。',en:"Site-checks — let youth experience too.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'即決の文化、若い頃から大事にしてきた。',en:"Snap-decision culture — valued since youth.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'欠員、即座に補っていく方針です。',en:"Vacancies — immediate fill policy.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'歴史を語るルポ、企業の財産になる。',en:"Historical reportage — corporate treasure.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'用例、後輩にも継承させます。',en:"Examples — pass on to juniors too.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06191',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher and student discuss a paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、野鳥の調査、丁寧でしたね。',en:"Paper — bird survey, careful.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。密室観察用ブラインドの章、書きました。',en:"Yes. Closed-room blind chapter — written.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'完走、見事でしたね、研究マラソン。',en:"Research-marathon — completion, admirable.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。第一人者と称される先生にも、助言頂きました。',en:"Yes. Pioneer-acknowledged sensei advised too.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'地域、代々受け継がれた知恵、活かしましたね。',en:"Region — generations-passed wisdom utilized.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'過去の事例に比して、独自の視点、出せたと思います。',en:"Compared to past — original viewpoint emerged.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦中の写真も、章末で扱いましたね。',en:"Wartime photos — chapter-end coverage too.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'生息地が脅かされる現状、まとめました。',en:"Habitats under threat — summarized.",style:'Curious close.'},
  ]},
  {id:'conv_06192',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs about a case',lines:[
    {speaker:'takeda_officer',jp:'本件、目撃情報の少ない、野鳥観察小屋付近です。',en:"Case site — bird-watch hut, few witnesses.",style:'Calm.'},
    {speaker:'ren_uni',jp:'密室内での発生、捜査、難しいですね。',en:"Closed-room occurrence — investigation hard.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。捜査、完走目指して、丁寧に進めます。',en:"Yes. Completion-aimed, careful progress.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'地元では、名警察と称される警官、いらっしゃいますね。',en:"Locally — police known as elite.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。代々、地域に根ざした活動、続けています。',en:"Yes. Generations of regional-rooted activity.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'過去事例に比し、初動の迅速さ、改善されてますね。',en:"Vs. past cases — initial speed improved.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'戦中の混乱期からの教訓も、活かしています。',en:"Wartime lessons utilized too.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'住民の安全、脅かされない地域を、引き続き目指しますね。',en:"Resident safety — continue unthreatened.",style:'Curious close.'},
  ]},
  {id:'conv_06193',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、野鳥観察、自由研究、よくできましたね。',en:"Sakura — bird-watch project, well done.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。密室から観察できる工夫、章にしました。',en:"Yes. Closed-room observation ingenuity — chapter.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'昨年の完走、自信、ついたでしょう。',en:"Last year's completion — confidence gained.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。研究者の祖父、地元で名人と称されています。',en:"Yes. Researcher-grandpa — known locally as master.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'代々の研究記録、いい遺産ですね。',en:"Generations of records — fine legacy.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'昔のフィールドノートに比し、デジタル化、進めました。',en:"Vs. old field notes — digitized.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'戦中の野鳥観察、貴重な記録ですね。',en:"Wartime bird observation — precious records.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'生態系が脅かされる時代、警鐘の章で書きました。',en:"Ecosystem-threatened era — alarm chapter written.",style:'Earnest close.'},
  ]},
  {id:'conv_06194',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews environmental CSR',lines:[
    {speaker:'hiroshi_boss',jp:'敷地内の野鳥、保護活動、組み込め。',en:"Site birds — incorporate protection.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。試験密室を活用した、製品検証、進めます。',en:"Yes. Closed-test rooms — product verification.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'マラソン大会、社員、完走できるよう、訓練を支援しろ。',en:"Marathon — support staff training for completion.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。業界で先進企業と称されるよう、努力します。',en:"Yes. Strive to be called industry pioneer.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'代々の家訓、企業理念にも反映させたい。',en:"Generational house rules — reflect in corporate creed.",style:'Direction.'},
    {speaker:'kenji_office',jp:'他社に比し、独自性を出します。',en:"Vs. others — bring originality.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'戦中の歴史、社史としても残せ。',en:"Wartime history — keep in company history.",style:'Direction.'},
    {speaker:'kenji_office',jp:'企業ブランド、脅かさない運用、徹底します。',en:"Brand-protecting ops — strict.",style:'Close.'},
  ]},
  {id:'conv_06195',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses environment-health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、野鳥との感染症関連、調査、続けています。',en:"Ren — bird-infection link, continued survey.",style:'Calm.'},
    {speaker:'ren_uni',jp:'密室での隔離、感染拡大防止に重要ですね。',en:"Closed-room isolation — vital for prevention.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。回復までの完走、患者と医師の二人三脚です。',en:"Yes. Recovery's completion — doctor-patient three-legged.",style:'Patient.'},
    {speaker:'ren_uni',jp:'地域の名医と称される先生、丁寧に対応されてますね。',en:"Locally-acclaimed sensei — careful response.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。代々、地域医療を担ってきました。',en:"Yes. Generations served regional medicine.",style:'Informative.'},
    {speaker:'ren_uni',jp:'過去のパンデミックに比し、対応、進化していますね。',en:"Vs. past pandemics — response evolved.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'戦中医療史、参考にすべき教訓、多いです。',en:"Wartime medical history — many lessons.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'安全が脅かされない医療体制、守っていきたいですね。',en:"Untreatened healthcare — to be kept.",style:'Reflective close.'},
  ]},

  // D
  {id:'conv_06196',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends plan a holiday',lines:[
    {speaker:'mei_romantic',jp:'冬の街、イルミネーション、綺麗だよね。',en:"Winter streets — illumination, lovely.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。クリスマス、ろうそく点けて、家でゆっくり過ごそう。',en:"Yes. Christmas — candles lit, relax at home.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'夕食、駅前の洋食店、行こうよ。',en:"Dinner — station-front Western restaurant.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'春になったら、新緑の山、ハイキングしたい。',en:"Come spring — fresh-green mountain hike.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'コスメの売れ筋、季節で変わるよね。',en:"Cosmetic best-sellers shift seasonally.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'ロース肉のソテー、特にお気に入り。',en:"Loin sauté — my favorite.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'好きなバンドのファンクラブ、特典、届くんだ。',en:"Fave band's fan club — perks coming.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'家族連れも来やすい店、いいね。',en:"Family-friendly shops — nice.",style:'Warm close.'},
  ]},
  {id:'conv_06197',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat about a season',lines:[
    {speaker:'sho_child',jp:'ママ、街のイルミネーション、見に行こう!',en:"Mom — go see the city's illumination!",style:'Excited child.'},
    {speaker:'yumiko_mom',jp:'うん。お部屋でも、ろうそく灯して、夜の雰囲気、楽しもうね。',en:"Yes. At home — candles too; enjoy the night vibe.",style:'Warm.'},
    {speaker:'sho_child',jp:'今夜の夕飯、洋食のお店、行きたいなあ。',en:"Tonight — Western restaurant?",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'春になったら、新緑の中、ピクニックね。',en:"Come spring — picnic in fresh greenery.",style:'Soft.'},
    {speaker:'sho_child',jp:'お店、売れ筋のおもちゃ、見に行きたい。',en:"Shops — wanna see best-seller toys.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'お父さんの好物、ロースカツ、作ろうか。',en:"Dad's fave — loin katsu, make?",style:'Tender.'},
    {speaker:'sho_child',jp:'アイドルのファンクラブに、お姉ちゃん、入ってるよ。',en:"Sis is in an idol fan club.",style:'Casual.'},
    {speaker:'yumiko_mom',jp:'明日、家族連れで、動物園、行きましょう。',en:"Tomorrow — family zoo trip.",style:'Warm close.'},
  ]},
  {id:'conv_06198',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens walk in winter',lines:[
    {speaker:'sakura_teen',jp:'街のイルミネーション、デート向きだね。',en:"City illumination — date-worthy.",style:'Soft teen.'},
    {speaker:'riku_teen',jp:'うん。家族会、ろうそくのケーキ、出るって。',en:"Yeah. Family gathering — candle cake coming.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'最近、洋食、よく食べに行ってるよね。',en:"Lately — Western often.",style:'Casual.'},
    {speaker:'riku_teen',jp:'春の新緑、撮影旅行で行きたい。',en:"Spring greenery — wanna travel-shoot.",style:'Wistful.'},
    {speaker:'sakura_teen',jp:'文房具屋、売れ筋ノート、新作出てた。',en:"Stationery — best-seller notebooks, new.",style:'Bright.'},
    {speaker:'riku_teen',jp:'部活で、ロース焼きを焼肉でリクエストした。',en:"At club — loin grill at yakiniku requested.",style:'Cheerful.'},
    {speaker:'sakura_teen',jp:'好きなアーティストのファンクラブ、私も入ってる。',en:"Fave artist's fan club — I'm in too.",style:'Animated.'},
    {speaker:'riku_teen',jp:'駅、家族連れが多い時間帯、避けよう。',en:"Station — avoid family-rush hours.",style:'Practical close.'},
  ]},
  {id:'conv_06199',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、初めて見たイルミネーション、印象的だった。',en:"In youth — first illumination, striking.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。子供たちの誕生日、ろうそく灯して、毎年祝ったわね。',en:"Yes. Kids' birthdays — candle-lit each year.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'デートでよく行った洋食店、まだあるかな。',en:"Date-time Western shop — still there?",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'新緑の季節、二人で散歩、好きだったわ。',en:"Fresh-green season — loved our walks.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'昔の売れ筋お菓子、今、手に入らないんだよな。',en:"Old best-seller sweets — unavailable now.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'ロース肉の煮込み、お孫さんの好物よ。',en:"Loin stew — our grandkid's fave.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'昔の歌手のファンクラブ、今も会報、届いている。',en:"Old singer's fan club — newsletter still arrives.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'駅前の家族連れ、見ると、子育ての日々、思い出すわ。',en:"Station-area families — recall our childrearing days.",style:'Warm close.'},
  ]},
  {id:'conv_06200',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan a winter event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、冬フェア、イルミネーションで店、飾ろか。',en:"Aoi-san — winter fair, illuminate the shop?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。卓上にろうそく、雰囲気作りに置きます。',en:"Yes. Table candles — atmosphere.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'洋食メニュー、限定で出そ。',en:"Western menu — limited release.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'春が来たら、新緑モチーフの飲み物、企画します。',en:"Come spring — fresh-green-motif drinks planned.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'人気の売れ筋、季節限定で更新しよ。',en:"Best-sellers — update seasonally.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'ロースステーキ、メインに据えましょう。',en:"Loin steak — main dish.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'地元バンドのファンクラブ、客層、広げてくれそうやな。',en:"Local-band fan club — likely widens clientele.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'家族連れ向けに、子供メニューも充実させます。',en:"For families — kids' menu enhanced.",style:'Warm close.'},
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

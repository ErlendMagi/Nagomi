import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_343 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['オシャレ','かまい','壊す','重宝','裕福','ばらばら','図鑑','妖怪']
const B_T = ['月別','予備校','破損','労災','ストレージ','辞職','役に立っ','明言']
const C_T = ['暁','攻勢','駆動','気質','旋律','文化庁','回帰','押しつけ']
const D_T = ['魅了','足らず','斜面','淡路','崖','持ち上げ','高温','ひき']

const data = [
  // A
  {id:'conv_06821',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、今日のメイク、本当にオシャレだね、爽やかで、似合うわよ。',en:"Aoi — today's makeup, stylish, fresh, suits.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。お話、長くなっても、私は、かまいませんよ、メイちゃん、ゆっくり。',en:"Yeah. Long-talk, I-don't-mind, Mei, slowly.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'昨日、お皿、壊すところだったよ、危なかった、気をつけよう。',en:"Yesterday — plate, almost broke, careful.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'新しいエスプレッソマシン、本当に重宝してるよ、店で、毎日。',en:"New espresso — really useful, store-daily.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'彼の家、結構、裕福らしいよ、聞いたんだ、ご両親、医者って。',en:"His home — quite wealthy, heard, parents doctors.",style:'Curious.'},
    {speaker:'aoi_barista',jp:'昨日、観葉植物、葉が、ばらばらに、落ちてしまったの、悲しい。',en:"Yesterday — foliage leaves, scattered fell, sad.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'子供の頃の、動物図鑑、まだ、実家に、置いてあるのよ、私の宝物。',en:"Childhood animal-encyclopedia — still home, my treasure.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'妖怪話、好きなお客様、結構、いらっしゃるのよ、夏の夜なんかに。',en:"Yokai-tales — fan-cust, quite-exist, summer-night.",style:'Animated close.'},
  ]},
  {id:'conv_06822',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、新しい服、すごくオシャレで、似合ってるよ、ぼく、ママ大好き。',en:"Mom — new clothes, super-stylish, suits, love.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'うん。汚れても、かまいませんから、外で、思い切り、遊んでね、翔くん。',en:"Yes. Dirt-OK, no-mind, outside fully-play, Sho.",style:'Direction.'},
    {speaker:'sho_child',jp:'玩具を、壊すと、悲しくなるよね、ぼく、大事に、するからね。',en:"Toy-broken, sad, treasure, me.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'おじいちゃんのアイデア、すごく重宝してるのよ、ママ、毎日。',en:"Grandpa idea — very useful, Mom-daily.",style:'Reflective.'},
    {speaker:'sho_child',jp:'裕福な家のお友達、ぼくに、優しくしてくれるよ、嬉しい!',en:"Wealthy friend — kind to me, glad!",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お部屋、ばらばらに、おもちゃが、散らかってるわよ、片付けようね。',en:"Room — scattered toys, tidy.",style:'Direction.'},
    {speaker:'sho_child',jp:'昆虫図鑑、明日、学校に、持って行きたいんだ、ママ、いい?',en:"Bug encyclo — tomorrow school-bring, Mom OK?",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'妖怪の絵本、お祖父ちゃんが、読んでくれるって、楽しみね、翔くん。',en:"Yokai picture-book — Grandpa-read, fun, Sho.",style:'Warm close.'},
  ]},
  {id:'conv_06823',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前、今日、オシャレな格好だね、新しい服?',en:"Riku — today, stylish look, new clothes?",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。お前が、ちょっと遅れても、俺は、かまいませんよ、桜、待ってる。',en:"Yeah. Even if-you-late, I-don't-mind, Sakura, wait.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'部室のドア、壊すなって、先輩、注意してたよね、皆。',en:"Club-room door — don't-break, senpai warned, all.",style:'Wry.'},
    {speaker:'riku_teen',jp:'お父さんの工具、結構、重宝してるんだぜ、俺、DIYで。',en:"Dad's tools — quite useful, me, DIY.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'クラスの中で、裕福な家庭の子、結構いるよね、よく考えると。',en:"In class — wealthy families, quite-exist, considering.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'試験、終わったら、ばらばらに、遊びに行くの、皆と、楽しいよな。',en:"Test-end — scattered play-go, with all, fun.",style:'Cheerful.'},
    {speaker:'sakura_teen',jp:'子供の頃の図鑑、まだ、実家に、置いてあるよ、私、大事にしてる。',en:"Childhood encyclo — still home, treasure, me.",style:'Wistful.'},
    {speaker:'riku_teen',jp:'妖怪映画、最近、流行ってるよな、お前、見た、桜?',en:"Yokai film — lately trendy, you saw, Sakura?",style:'Curious close.'},
  ]},
  {id:'conv_06824',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃の写真、オシャレだったよな、当時の流行りで。',en:"Gran — youth photo, stylish, era trends.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。年寄りに、付き合ってくれるなら、私、かまいませんよ、孫よ。',en:"Yes. If-elder-accompany, I-don't-mind, grandkid.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'子供のおもちゃ、孫が、壊すこと、しょっちゅう、あるよな、最近。',en:"Kid toy — grandkid breaks, often, lately.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'昔のお祖母ちゃんのレシピ、本当に、重宝しているわよ、今でも。',en:"Old Granny recipe — really useful, still.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'近所の家、最近、結構、裕福になったみたいだな、車が、二台ある。',en:"Neighbor — lately quite wealthy, 2 cars.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'家族写真、年々、ばらばらの場所で、撮るようになったわね、孫たち。',en:"Family photo — yearly, scattered-place taken, grandkids.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'昔の植物図鑑、書斎に、置いてあるよ、ばあさん、知ってる?',en:"Old plant-encyclo — study placed, gran, knew?",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'孫、妖怪の話、本当に、好きみたいね、最近、毎晩、せがむのよ。',en:"Grandkid — yokai-tales loved, lately every night begs.",style:'Warm close.'},
  ]},
  {id:'conv_06825',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','mei_romantic'],targets:A_T,scenario:'A uni student and friend chat',lines:[
    {speaker:'mei_romantic',jp:'蓮さん、今日の研究室の格好、すごくオシャレですね、似合いますよ。',en:"Ren — today lab-look, stylish, suits.",style:'Soft.'},
    {speaker:'ren_uni',jp:'うん。長く、お話、続いても、僕は、かまいませんよ、メイちゃん、楽しい。',en:"Yes. Long-talk continue, I-don't-mind, Mei, fun.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'実験器具、壊すと、研究室、大変ですよね、修理代も。',en:"Lab-equip — break, lab hard, repair-cost too.",style:'Curious.'},
    {speaker:'ren_uni',jp:'うん。古い実験ノート、今でも、本当に、重宝しているんだよ、参照に。',en:"Yes. Old lab-notes — still really useful, ref.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'蓮さんの研究、裕福な企業から、支援を、受けているそうですね。',en:"Ren-research — wealthy-corp-supported, said.",style:'Curious.'},
    {speaker:'ren_uni',jp:'うん。データが、ばらばらだと、論文、書きづらいんだ、整理が大事。',en:"Yes. Data-scattered, paper hard-write, organize vital.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'蓮さん、子供の頃、科学図鑑、よく読まれていたんですか?',en:"Ren — childhood, sci-encyclo, often-read?",style:'Curious.'},
    {speaker:'ren_uni',jp:'うん。民俗学の妖怪研究、面白いんだよ、メイちゃん、今度、紹介する。',en:"Yes. Ethno yokai-research, fun, Mei, next intro.",style:'Animated close.'},
  ]},

  // B
  {id:'conv_06826',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews business',lines:[
    {speaker:'hiroshi_boss',jp:'売上、月別の動向、毎月、私に、報告しろ。',en:"Sales — monthly trend, each-month report.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社員、予備校の学費支援、新人事制度として、検討中です。',en:"Yes. Staff — cram-school subsidy, new HR-system studying.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'納品時の破損、調査、徹底させろ。',en:"Delivery damage — survey thorough.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。労災申請の手続き、社員にも、丁寧に、説明しております。',en:"Yes. Labor-comp procedure — staff carefully explained.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'社内データのストレージ、容量、見直す時期だ。',en:"Internal-data storage — capacity, review-time.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。部長の辞職、後任、慎重に、選んでまいります。',en:"Yes. Dept-head resign — successor careful select.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'この提案、本当に、役に立った経験、報告書に、書け。',en:"This proposal — really useful experience, report write.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。経営方針、社員に、明言する場、来週、設けます。',en:"Yes. Mgmt policy — staff, declare-place, next-week set.",style:'Close.'},
  ]},
  {id:'conv_06827',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'広報、月別レポート、来月から、フォーマット、変えましょう。',en:"PR — monthly report, next month, format change.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。子育て社員向け、予備校通いの補助、検討しています。',en:"Yes. Childrearing staff — cram-attend subsidy, study.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'設備の破損、報告は、すぐ、上に、上げてね。',en:"Equip damage — report, immediately upward.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。労災予防、社内安全週間、来月、開催します。',en:"Yes. Labor-comp prev — safety-week, next-month hold.",style:'Update.'},
    {speaker:'yuki_office',jp:'クラウドストレージ、契約、更新時期、近いわよ。',en:"Cloud storage — contract, refresh-time near.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。役員の辞職、社員にも、丁寧に、説明、必要です。',en:"Yes. Exec-resign — staff carefully-explain needed.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'前回の研修、本当に、役に立ったわよ、私、評価したい。',en:"Last training — really useful, me, want-praise.",style:'Soft.'},
    {speaker:'kenji_office',jp:'はい。来期方針、社長から、明言される予定です、社員総会で。',en:"Yes. Next-term policy — pres-declare plan, all-staff meet.",style:'Close.'},
  ]},
  {id:'conv_06828',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究進捗、月別の振り返り、習慣化しろ。',en:"Ren — research progress, monthly review, habit.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。学部時代の予備校通い、研究にも、役立っております。',en:"Yes. Undergrad cram-attend, research-helpful.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'実験装置の破損、絶対、防げ、慎重に、扱え。',en:"Lab-equip damage — absolutely prevent, careful handle.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究室での労災、過去、ありませんが、注意します。',en:"Yes. Lab-labor-comp — past-none, careful.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究データのストレージ、バックアップ、徹底しろ。',en:"Research data storage — backup thorough.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。先生の辞職に伴う、研究室の引っ越し、準備中です。',en:"Yes. Prof-resign accompanied — lab-move, prep.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'若手の研究、社会に、本当に、役に立った例、報告会で、紹介しろ。',en:"Youth research — soc really-useful examples, report-meet intro.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究テーマ、明言できるよう、今、整理しています。',en:"Yes. Research theme — declare-able, now organizing.",style:'Earnest close.'},
  ]},
  {id:'conv_06829',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察、月別の犯罪件数、報告いたします、毎月。',en:"Police — monthly crime-count, report monthly.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。社員、予備校受験指導員、警察出身者にも、ご相談しています。',en:"Yes. Staff — cram-instr, also ex-police consult.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'公共施設の破損、警察、巡回時、確認しております。',en:"Public facility damage — police patrol verify.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。労災発生時、警察への通報、社内手順、定めております。',en:"Yes. Labor-comp occurs — police-report, internal-procedure set.",style:'Update.'},
    {speaker:'takeda_officer',jp:'証拠データのストレージ、警察、専用システム、運用中です。',en:"Evidence-data storage — police, dedicated-sys running.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。容疑者、辞職後の動向、警察、追跡されていますか。',en:"Yes. Suspect — post-resign trail, police-tracking?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。前回の協力、本当に、役に立った、と、署内、申しております。',en:"Yes. Last-coop — really useful, station-saying.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察への協力姿勢、社長が、明言する予定です、来月。',en:"Yes. Police-coop stance — pres declare plan, next month.",style:'Close.'},
  ]},
  {id:'conv_06830',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業時から、月別の数字、しっかり、把握してきたな、私。',en:"Founding — monthly numbers, properly grasped, me.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。社員、予備校時代から、当社を、目指してきた人材、増えています。',en:"Yes. Staff — cram-era, our co aimed, increased.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'創業時の機械の破損、皆で、手作業で、修理したな、思い出だ。',en:"Founding-equip damage — together, hand-repair, memory.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。労災ゼロ、創業以来の、誇りです、当社の。',en:"Yes. Labor-comp zero — since founding pride.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'今は、ストレージって、便利な時代になったよな、私の頃には、なかった。',en:"Now — storage, convenient era, my-time, none.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。創業者の辞職時、社員一同、感動した日でした、お父さん。',en:"Yes. Founder-resign — staff-moved day, Dad.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'創業期の苦労、本当に、役に立った経験、後輩に、伝えろ。',en:"Founding hardship — really useful experience, junior-convey.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。創業精神、私の代でも、明言してまいります。',en:"Yes. Founding spirit — my era too, declare.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06831',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses cultural history',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、論文、暁の音楽史、時代の転換点を、よく捉えていますね。',en:"Ren — paper, dawn music-hist, era-turn well-captured.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。当時、新音楽の攻勢、伝統音楽界、激しく揺さぶりました。',en:"Yes. Era — new-music offensive, trad-music world, intense-shook.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'機械の駆動方式、音楽産業、変えていきましたね、二十世紀。',en:"Mechanical drive — music-industry changed, 20th-c.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。音楽家の気質、創作に、深く、影響していますね。',en:"Yes. Musician temperament — creation deep-effect.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'独自の旋律、当時の作曲家、追求していましたね、論文の中で。',en:"Original melody — era composers pursued, in paper.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。文化庁の助成、音楽保存に、活用された事例、扱いました。',en:"Yes. Cult-agency subsidy — music-preserv utilized, handled.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'原点回帰の動き、二十一世紀の音楽、印象的ですね。',en:"Origin-return trend — 21st-c music, striking.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。商業主義を押しつける時代、芸術家、抗っていますね、現代も。',en:"Yes. Comm-pushing era — artists resisting, modern too.",style:'Earnest close.'},
  ]},
  {id:'conv_06832',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、解決の暁には、地域住民、安心されるでしょう。',en:"Case — at-dawn-resolved, residents reassured.",style:'Calm.'},
    {speaker:'ren_uni',jp:'容疑者組織、最近、攻勢を強めていますよね、各地で。',en:"Suspect-org — lately offensive-strengthen, multi-areas.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。容疑者車両、特殊な駆動装置、搭載されていました。',en:"Yes. Suspect vehicle — special drive-device loaded.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者の気質、過去の事件、共通点、ありますか?',en:"Suspect temperament — past cases, commonalities exist?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。捜査中、ある旋律が、容疑者から、流れてくる、と、報告ありました。',en:"Yes. During-inv, certain melody from-suspect played, reported.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'文化庁、文化財盗難、警察と、連携、強化していますね、最近。',en:"Cult-agency — cult-prop theft, police-link strengthening, lately.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。犯罪手口、過去への回帰、見られます、最近の傾向。',en:"Yes. Crime methods — past-return seen, recent trend.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害者に責任を押しつける論調、メディア、ありましたよね、当初。',en:"Victim-responsibility-pushing tone — media, existed, initial.",style:'Reflective close.'},
  ]},
  {id:'conv_06833',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、新治療法、確立の暁には、患者さんの選択肢、増えますね。',en:"Ren — new-tx, at-dawn-established, patient-choices increase.",style:'Calm.'},
    {speaker:'ren_uni',jp:'感染症、ウイルス、攻勢を強めている時期ですよね、毎年、冬は。',en:"Infect — virus, offensive-strengthen period, every winter.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。新医療機器、AI駆動の診断装置、導入しました、最新型。',en:"Yes. New med-equip — AI-drive diag, intro, latest.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医師の気質、患者対応に、影響しますね、個性、出ますよね。',en:"Doctor temperament — patient-handle effect, character-out.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。手術中、心電図の旋律のような波形、注視しています。',en:"Yes. Mid-surg — ECG melody-like waveform, watching.",style:'Patient.'},
    {speaker:'ren_uni',jp:'文化庁、医療文化に、最近、関心を、向けているそうですね。',en:"Cult-agency — med-cult, lately interest-direct, said.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。古典医学への回帰、現代医療と、融合しています、最近。',en:"Yes. Classical-med return — modern-med merging, lately.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'医療者に責任を押しつける風潮、議論、必要ですよね、社会的に。',en:"Med-resp-pushing trend — discussion needed, socially.",style:'Reflective close.'},
  ]},
  {id:'conv_06834',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp strategy',lines:[
    {speaker:'hiroshi_boss',jp:'新事業、成功の暁には、社員に、賞与、出す予定だ。',en:"New biz — at-dawn-success, staff bonus plan.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。競合の攻勢、当社、戦略で、応戦しています。',en:"Yes. Rival-offensive — our-strat, counter.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'新製品、電気駆動方式、業界の主流に、なりつつある。',en:"New product — electric drive, industry-mainstream becoming.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員の気質に合わせた、配属、人事課が、進めています。',en:"Yes. Staff-temperament-matched assignment — HR-advancing.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'CM音楽の旋律、印象に残るよう、新作、こだわって、作れ。',en:"CM-music melody — memorable, new, insist make.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。文化庁の助成事業、企業として、参加検討しています。',en:"Yes. Cult-agency subsidy — as co, attend studying.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'創業精神への回帰、来期方針として、明確化しろ。',en:"Founding-return — next-term policy, clarify.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。責任を、社員に、押しつけない経営、心がけてまいります。',en:"Yes. Resp — staff non-push mgmt, mindful.",style:'Close.'},
  ]},
  {id:'conv_06835',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through social research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、論文、社会の暁、新時代の幕開け、よく描かれていますね。',en:"Sakura — paper, soc-dawn, new-era curtain-rise, well-depicted.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。当時の言論、政府への攻勢、激しかったですね、よく調べました。',en:"Yes. Era discourse — gov-offensive, intense, well-checked.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'蒸気駆動の機関車、近代化の象徴でしたね、論文の中でも。',en:"Steam-drive engine — modernize symbol, in paper.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。各時代の国民性、気質の変化、論じました、章ごとに。',en:"Yes. Each-era nation-character, temperament change, argued, per-ch.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'国歌の旋律、時代を超えて、人々に、影響、与えていますね。',en:"Anthem melody — trans-era, people-affect.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。文化庁の設立背景、戦後復興期に、よく合致しました。',en:"Yes. Cult-agency founding — post-war recov, well-matched.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'伝統への回帰、現代社会の、新しい流れですね、注目しています。',en:"Trad-return — modern-soc new-flow, watching.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。歴史責任の押しつけ、戦後外交、課題でしたね、扱いました。',en:"Yes. Hist-resp-pushing — post-war diplo issue, handled.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06836',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies and travel',lines:[
    {speaker:'mei_romantic',jp:'葵、最近、彼の優しさに、本当に、魅了されてるんだ、私。',en:"Aoi — lately, his kindness, really enchanted, me.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん。睡眠時間、足らずに、もう、ヘトヘトよ、私、最近、本当に。',en:"Yeah. Sleep — insufficient, exhausted, lately really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'スキー旅行、行ったとき、急な斜面、ちょっと、怖かったわよ。',en:"Ski trip — went, steep slope, slightly scary.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'夏休み、淡路島、旅行、計画してるんだ、玉ねぎ、美味しいよ。',en:"Summer — Awaji-isle trip planning, onion tasty.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'江ノ島、崖から、海の眺め、絶景だったよね、葵、覚えてる?',en:"Enoshima — cliff sea-view, breathtaking, Aoi, remember?",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'お重い荷物、持ち上げる時、腰、本当に、注意して、メイちゃん。',en:"Heavy luggage — lifting, back, really careful, Mei.",style:'Concerned.'},
    {speaker:'mei_romantic',jp:'最近、高温多湿で、湿気、すごいね、洗濯物、乾きにくいよね。',en:"Lately — hot-humid, moisture intense, laundry hard-dry.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'お肉、ひき肉に、変えた料理、結構、ヘルシーで、いいよね、最近、はまってる。',en:"Meat — ground-meat dishes, healthy, lately hooked.",style:'Cheerful close.'},
  ]},
  {id:'conv_06837',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat about a trip',lines:[
    {speaker:'sho_child',jp:'ママ、お絵本の魚、ぼく、本当に、魅了されちゃった、綺麗だね!',en:"Mom — picture-book fish, me, really enchanted, pretty!",style:'Awe child.'},
    {speaker:'yumiko_mom',jp:'うん。お小遣い、足らずに、ぼく、おもちゃ、買えなかったって、ママ、気づいたわよ。',en:"Yes. Allowance — insufficient, you, toy not-buy, Mom noticed.",style:'Soft.'},
    {speaker:'sho_child',jp:'公園の斜面、ぼく、自転車で、走るの、楽しいよ、ママ、見て!',en:"Park slope — bike-ride fun, Mom see!",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'夏休み、淡路島の海、家族で、行こうって、お父さん、言ってたよ。',en:"Summer — Awaji sea, family-go, Dad said.",style:'Bright.'},
    {speaker:'sho_child',jp:'絵本に出てくる崖、すごく高くて、怖かったよ、ぼく、ドキドキした。',en:"Picture-book cliff — super-high, scary, heart-pounding.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お父さんが、重たい荷物、持ち上げて、引っ越し、手伝ってくれたわね、先週。',en:"Dad — heavy lift, move-helped, last week.",style:'Warm.'},
    {speaker:'sho_child',jp:'高温の日、外、走らない方がいいって、ママ、いつも言うね、暑いから。',en:"Hot day — outside no-run, Mom always says, hot.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'今夜のハンバーグ、ひき肉、ママが、こねたわよ、楽しみにしてね、翔くん。',en:"Tonight burger — ground-meat, Mom-kneaded, look-forward, Sho.",style:'Tender close.'},
  ]},
  {id:'conv_06838',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前の演奏、本当に、皆、魅了されたよね、文化祭で、すごかった。',en:"Riku — your perf, really, all enchanted, cult-fest, amazing.",style:'Praising.'},
    {speaker:'riku_teen',jp:'うん。練習時間、足らずに、悔しい思いも、あったぜ、桜。',en:"Yeah. Practice time — insufficient, regret-feel too, Sakura.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'スキー教室、急な斜面、怖かったよね、私、何度も、転んだもん。',en:"Ski class — steep slope, scary, fell many-times.",style:'Wry.'},
    {speaker:'riku_teen',jp:'夏休み、家族で、淡路島、行くんだ、楽しみだよ、俺、玉ねぎ、楽しみ。',en:"Summer — family Awaji, fun, me, onion forward.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'夏の合宿、崖の上の宿、絶景だったよね、覚えてる、リク?',en:"Summer camp — cliff-top inn, scenic, remember, Riku?",style:'Wistful.'},
    {speaker:'riku_teen',jp:'お前、重いリュック、自分で、持ち上げてたな、すごいよ、桜。',en:"You — heavy pack, self-lifted, amazing, Sakura.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'高温警報の日、外、出ないようにって、先生も、注意してたよ、最近。',en:"Hot-warn day — outside no-out, teacher cautioned, lately.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お弁当、ひき肉の包み焼き、お母さん、作ってくれたんだ、美味かった。',en:"Lunch — ground-meat wrap-bake, Mom-made, tasty.",style:'Eager close.'},
  ]},
  {id:'conv_06839',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、君のピアノに、本当に、魅了されたんだよ、ばあさん、覚えてる?',en:"Youth — your piano, really enchanted, gran, remember?",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'うん。お金、足らずに、私たち、苦労した時代、あったわよね、若い頃。',en:"Yes. Money — insufficient, we hardship-era, youth.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'昔、田舎の斜面、子供たち、駆け回ったな、私、覚えてるよ。',en:"Old — country slope, kids ran-around, remember.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'淡路島、新婚旅行で、行ったわね、二人で、覚えてる、あなた?',en:"Awaji — honeymoon-went, two, remember, dear?",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'海辺の崖、若い頃、二人で、よく、眺めたな、ばあさん。',en:"Sea cliff — youth, two, often-viewed, gran.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'重い米袋、お父さん、若い頃、軽々と、持ち上げていたわよね。',en:"Heavy rice-bag — Dad, youth, easily-lifted.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'最近の夏、高温の日が、本当に多いな、ばあさん、お互いに、気をつけよう。',en:"Recent summer — hot-days really many, gran, mutually careful.",style:'Concerned.'},
    {speaker:'sachiko_grandma',jp:'お祖母ちゃんの、ひき肉料理、孫が、大好きなのよね、覚えてもらいたいわ。',en:"Granny's ground-meat dishes — grandkid-loves, want-remember.",style:'Warm close.'},
  ]},
  {id:'conv_06840',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、新しい料理、お客様、魅了するもの、作ろか、本気で。',en:"Aoi — new dish, cust-enchanting, make, seriously.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。仕入れ量、足らずに、お客様、お待たせしてしまったこと、ありますね、先月。',en:"Yes. Stock-amount — insufficient, cust-waited, last month.",style:'Reflective.'},
    {speaker:'daichi_kansai',jp:'新店舗、斜面に建ってる物件、内装、こだわらなあかんわ。',en:"New store — slope-bldg property, interior must-insist.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。淡路島の食材、玉ねぎ、新メニューに、活かしましょう。',en:"Yes. Awaji ingred — onion, new-menu utilize.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'瀬戸内の崖の上に、見晴らしのいい店、出してみたいんや、葵さん。',en:"Setonai cliff-top — view-good store, want-out, Aoi.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。重たい食材、スタッフ、持ち上げる時、フォーム、教えますね。',en:"Yes. Heavy ingred — staff lifting, form teach.",style:'Practical.'},
    {speaker:'daichi_kansai',jp:'高温の厨房、エアコン、強化しよか、夏、近いし、葵さん。',en:"Hot kitchen — AC strengthen?, summer-near, Aoi.",style:'Direction.'},
    {speaker:'aoi_barista',jp:'はい。新作の、ひき肉の創作料理、メニューに、入れたいですね。',en:"Yes. New ground-meat creative dish — menu-include want.",style:'Warm close.'},
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

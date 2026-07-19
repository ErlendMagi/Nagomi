import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_310 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['構内','帰路','支度','坂道','久しい','差し入れ','ぼちぼち','口癖']
const B_T = ['貸し出し','同種','同業','各県','各党','引き継が','積み立て','役立て']
const C_T = ['鳴き声','獲物','一手','一等','部材','校庭','自販機','大河']
const D_T = ['子猫','じゃがいも','コケ','煮物','献立','阪神タイガース','作画','生放送']

const data = [
  // A
  {id:'conv_06161',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk home',lines:[
    {speaker:'sakura_teen',jp:'学校構内、桜が満開だね。',en:"School premises — cherries in full bloom.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。帰路は遠回りしようか。',en:"Yeah. Take the long way home?",style:'Casual.'},
    {speaker:'sakura_teen',jp:'明日の支度、まだしてない。',en:"Tomorrow's prep — not yet done.",style:'Wry.'},
    {speaker:'riku_teen',jp:'坂道、自転車で登るの、大変だよな。',en:"Slope — biking up is tough.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'もう久しい同級生に、偶然会えるかも。',en:"Old classmate — might bump into.",style:'Wistful.'},
    {speaker:'riku_teen',jp:'差し入れに、コンビニで何か買おう。',en:"For a treat — grab something at conbini.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'最近、勉強、ぼちぼち頑張ってる。',en:"Studies — going so-so.",style:'Soft.'},
    {speaker:'riku_teen',jp:'お父さんの「ぼちぼちやな」って口癖、移ったな。',en:"Dad's catchphrase \"bochi-bochi\" — caught on.",style:'Wry close.'},
  ]},
  {id:'conv_06162',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends meet after work',lines:[
    {speaker:'mei_romantic',jp:'駅構内、人多くて、疲れた。',en:"Station premises — crowded, tired.",style:'Subdued.'},
    {speaker:'aoi_barista',jp:'帰路、カフェで一息ついて。',en:"On the way back — pause at the cafe.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'夕飯の支度、今日はサボる。',en:"Dinner prep — skipping today.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'駅前の坂道、自転車止めるの、ちょっと怖い。',en:"Station slope — bike-parking is a bit scary.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'久しい友達とも、会いたいな。',en:"Long-not-seen friends — want to meet.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'スイーツ、差し入れに、持っていくね。',en:"Sweets — bring as a treat.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'最近、自分のペース、ぼちぼちで保ってる。',en:"Self-pace — keeping so-so.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'「気にしない」が、私の口癖になってる。',en:"\"Don't worry\" — became my catchphrase.",style:'Warm close.'},
  ]},
  {id:'conv_06163',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、駅の構内に、新しいパン屋できたよ。',en:"Mom — new bakery in the station premises.",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'帰路、寄って買って帰ろうね。',en:"On the way back — stop and buy.",style:'Warm.'},
    {speaker:'sho_child',jp:'明日の遠足、支度、もう済ませた。',en:"Tomorrow's excursion — prep done.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'坂道、急だから、走らないでね。',en:"Slope — steep; don't run.",style:'Tender.'},
    {speaker:'sho_child',jp:'おじいちゃんに、久しいから、電話する。',en:"Long-not-seen Grandpa — gonna call.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'差し入れに、おばあちゃんに、お菓子も渡そうね。',en:"For Grandma — sweets as a treat too.",style:'Soft.'},
    {speaker:'sho_child',jp:'最近、勉強、ぼちぼちやってる。',en:"Lately — studies, so-so.",style:'Casual.'},
    {speaker:'yumiko_mom',jp:'「がんばれ」が、お父さんの口癖だね。',en:"\"Ganbare\" — Dad's catchphrase.",style:'Warm close.'},
  ]},
  {id:'conv_06164',cluster:'A',ambient:'park_distant_birds',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple walks',lines:[
    {speaker:'hiroshi_elder',jp:'駅構内の喫茶店、新しくなったな。',en:"Station-premises cafe — renovated.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'帰路、ベンチで休んでもいいわね。',en:"On the way back — bench rest is fine.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'夕飯の支度、今日はあなたに任せる。',en:"Dinner prep — leave to you today.",style:'Soft.'},
    {speaker:'sachiko_grandma',jp:'坂道、ゆっくり歩きましょうね。',en:"Slope — walk slowly.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'久しい同窓会、来月行こう。',en:"Long-awaited reunion — go next month.",style:'Calm.'},
    {speaker:'sachiko_grandma',jp:'お友達に、差し入れの和菓子、買って行きましょう。',en:"Friends — buy traditional sweets as treats.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'人生、ぼちぼちで、いいさ。',en:"Life — so-so is fine.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'「無理しないで」が、私の口癖よ。',en:"\"Don't overdo\" — my catchphrase.",style:'Warm close.'},
  ]},
  {id:'conv_06165',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai and a teen chat',lines:[
    {speaker:'ren_uni',jp:'桜、大学構内、案内するよ。',en:"Sakura — tour the campus.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。帰路、駅まで、また話しながら歩きたいです。',en:"Yes. On the way back — walk talking again.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'試験の支度、しっかりするんだぞ。',en:"Test prep — do it firmly.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'はい。校門の坂道、急ですよね。',en:"Yes. The school-gate slope is steep.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'もう久しい先輩に、紹介する機会、作るぞ。',en:"Long-time-no-see senpai — I'll make an intro.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'クッキー、差し入れに、お持ちしました。',en:"Cookies — brought as a treat.",style:'Polite.'},
    {speaker:'ren_uni',jp:'最近、研究、ぼちぼち順調だ。',en:"Lately — research, so-so smooth.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'「やればできる」が、母の口癖です。',en:"\"You can if you try\" — Mom's catchphrase.",style:'Warm close.'},
  ]},

  // B
  {id:'conv_06166',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'機材の貸し出し、規定を整えろ。',en:"Equipment loan — set rules.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。同種の業務、各部署で共通化します。',en:"Yes. Similar-task — unify across sections.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'同業他社、動向、注視しろ。',en:"Same-industry — watch trends.",style:'Direction.'},
    {speaker:'kenji_office',jp:'各県の支店、決算、確認しました。',en:"Each-prefecture branches — earnings verified.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'各党の動き、政策に影響する。',en:"Each-party moves — affect policy.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'引き継がれた案件、整理中です。',en:"Inherited cases — organizing.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'退職金の積み立て、各員に説明しろ。',en:"Severance reserves — explain to each.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。情報を役立てる体制、整えます。',en:"Yes. Info-utilization structure — prepared.",style:'Close.'},
  ]},
  {id:'conv_06167',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss operations',lines:[
    {speaker:'yuki_office',jp:'店舗から機材の貸し出し、依頼が増えてる。',en:"Store equipment-loan — requests up.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。同種の事案、まとめて対応します。',en:"Yes. Similar cases — batch-respond.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'同業者の動き、目立つよね。',en:"Same-industry moves — conspicuous.",style:'Direction.'},
    {speaker:'kenji_office',jp:'各県の代理店、業績、共有しました。',en:"Each-prefecture agents — perf shared.",style:'Update.'},
    {speaker:'yuki_office',jp:'各党の政策動向、調査チームが纏める。',en:"Each-party policy trends — research team summarizes.",style:'Direction.'},
    {speaker:'kenji_office',jp:'担当が引き継がれて、混乱もありません。',en:"Lead handover — no confusion.",style:'Commitment.'},
    {speaker:'yuki_office',jp:'積み立て年金、見直しを考えよう。',en:"Reserve pensions — consider review.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。経験を役立てて、新案、出します。',en:"Yes. Leverage experience — new ideas.",style:'Close.'},
  ]},
  {id:'conv_06168',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、機材貸し出しの管理、IT部門の基本だ。',en:"Ren — equipment-loan mgmt, IT-section basic.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。同種ソフトウェアの導入、共通化の利点、勉強します。',en:"Yes. Same-class software intro — unification merits learned.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'同業他社の動向、業界紙で追える。',en:"Same-industry trends — followable via trade press.",style:'Direction.'},
    {speaker:'ren_uni',jp:'各県の支社の事例、勉強したいです。',en:"Each-prefecture branch cases — want to learn.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'各党の政策、企業活動への影響、把握しろ。',en:"Each-party policies — grasp impact on biz.",style:'Direction.'},
    {speaker:'ren_uni',jp:'業務が引き継がれる際の文書化、重要ですね。',en:"Handover documentation matters.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'若いうちから、積み立て、始めるんだ。',en:"From young — start reserves.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。インターンの経験、社会で役立てます。',en:"Yes. Intern experience — utilize in society.",style:'Earnest close.'},
  ]},
  {id:'conv_06169',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on coordination',lines:[
    {speaker:'takeda_officer',jp:'警察備品の貸し出し、御社にも認可しました。',en:"Police-equipment loan — your firm authorized.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。同種の協定、他社とも結びました。',en:"Yes. Similar agreements — also with other firms.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'同業者間で情報共有、防犯に役立てて。',en:"Inter-industry info-sharing — for crime prevention.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。各県警と連携を強化します。',en:"Yes. Each-prefecture police — strengthen.",style:'Update.'},
    {speaker:'takeda_officer',jp:'各党の予算審議、警察関連、注目しています。',en:"Each-party budget debate — police-related, watched.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。担当が引き継がれた後も、連絡密にします。',en:"Yes. Post-handover — keep contact close.",style:'Commitment.'},
    {speaker:'takeda_officer',jp:'積み立て型の協力基金、検討中ですね。',en:"Reserve-style cooperation fund — under review.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。実績を役立てます。',en:"Yes. Use track record.",style:'Close.'},
  ]},
  {id:'conv_06170',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'機材貸し出し制度、若い頃に整備したな。',en:"Equipment-loan system — set up in youth.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。同種の業務、効率化を進めています。',en:"Yes. Similar tasks — efficiency-pushing.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'同業の動向、地に足を付けて見ろ。',en:"Same-industry trends — feet on ground.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'各県の支店長、年に一度、東京で集めています。',en:"Each-prefecture chiefs — annual Tokyo gathering.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'各党の政策、業界に大きく影響する。',en:"Each-party policy — major industry impact.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。経営、引き継がれてから、勉強の毎日です。',en:"Yes. Since management was handed to me — daily study.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'積み立て型の信託、長期で大切だ。',en:"Reserve-style trusts — vital long-term.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。先輩の知恵、役立てさせてください。',en:"Yes. Let me utilize your wisdom.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06171',cluster:'C',ambient:'park_distant_birds',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher and student discuss research',lines:[
    {speaker:'asuka_teacher',jp:'論文、野鳥の鳴き声、丁寧に分析しましたね。',en:"Paper — bird-call analysis, careful.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。捕食者の獲物選別、別章にしました。',en:"Yes. Predator-prey selection — separate chapter.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'生態系の保全、一手の判断、難しいですね。',en:"Ecosystem preservation — single-move judgment, hard.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'地元一等地の自然保護区、フィールド調査しました。',en:"Local prime-spot reserves — fieldworked.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'観察小屋の部材、地元材を使っていましたね。',en:"Observation-hut materials — local-sourced.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'校庭の生物観察、子供向け教材、添えました。',en:"School-yard observation — kids' material attached.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'自販機の脱炭素化、別章で論じましたか。',en:"Vending-machine decarbonization — separate chapter?",style:'Curious.'},
    {speaker:'ren_uni',jp:'はい。大河ドラマで描かれた歴史と、自然観の変遷、扱いました。',en:"Yes. Taiga-drama-depicted history & nature-view shifts — covered.",style:'Reflective close.'},
  ]},
  {id:'conv_06172',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs about a search operation',lines:[
    {speaker:'takeda_officer',jp:'山中で行方不明者、犬の鳴き声が手がかりです。',en:"Mountain missing person — dog-bark clue.",style:'Calm.'},
    {speaker:'ren_uni',jp:'動物が獲物を持っていた現場、印象的でした。',en:"Animal-with-prey site — striking.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。一手の捜査ミス、致命的になります。',en:"Yes. Single missed move — can be fatal.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'一等地の山小屋、捜索拠点でしたよね。',en:"Prime-spot mountain hut — search base.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'資材の部材、山岳救助隊が運搬しました。',en:"Equipment materials — mountain rescue transported.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'校庭ヘリポートも、緊急時に活用されますね。',en:"School-yard heliport — used in emergencies too.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。地域の自販機、警察と連携で防犯機能、追加中です。',en:"Yes. Local vending machines — adding crime-prev with police linkage.",style:'Update.'},
    {speaker:'ren_uni',jp:'大河ドラマの撮影地、警備、特別配慮ですね。',en:"Taiga-drama shoot location — special security.",style:'Curious close.'},
  ]},
  {id:'conv_06173',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a nature project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、自然観察、鳴き声から始まる章、よくできましたね。',en:"Sakura — observation, bird-call opening chapter, well done.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。獲物となる小動物との関係、整理しました。',en:"Yes. Prey-small-animal relations — organized.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'保護区の管理、一手の手順、丁寧に書きましたね。',en:"Reserve mgmt — single-step procedures, carefully written.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'地元の一等賞、研究、頂きました。',en:"Local first prize — research received.",style:'Bright.'},
    {speaker:'asuka_teacher',jp:'部材の選定、環境負荷の章にしましたね。',en:"Material selection — env-load chapter.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'校庭の蜂の巣、観察、許可されました。',en:"School-yard hive — observation, allowed.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'自販機の飲料選択と環境意識、対比しましたね。',en:"Vending choice vs. eco-mind — contrast.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。大河の流域生態系、章末で総括しました。',en:"Yes. Great-river basin ecosystem — summarized at the end.",style:'Earnest close.'},
  ]},
  {id:'conv_06174',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews regional operations',lines:[
    {speaker:'hiroshi_boss',jp:'警報機の鳴き声、誤作動報告、調べろ。',en:"Alarm-call false-alert reports — investigate.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。獲物となるリスク、社員教育で減らします。',en:"Yes. Prey-risk — reduce via staff ed.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'今期の一手、市場拡大、決めるぞ。',en:"This term's move — market expansion, decide.",style:'Direction.'},
    {speaker:'kenji_office',jp:'一等地の物件、賃借更新、交渉中です。',en:"Prime-spot property — lease-renewal, negotiating.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'施設の部材、調達、コスト、見直せ。',en:"Facility materials — procurement & cost, revise.",style:'Direction.'},
    {speaker:'kenji_office',jp:'校庭近接の事業所、地域連携、深めます。',en:"School-yard-adjacent sites — deepen community ties.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'社内自販機、地域貢献の取り組みに、活用しろ。',en:"Internal vending — leverage in community efforts.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。大河ドラマとのタイアップ、企画進めます。',en:"Yes. Taiga-drama tie-up — moving.",style:'Close.'},
  ]},
  {id:'conv_06175',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses regional health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、患者の咳の鳴き声、診断の参考になります。',en:"Ren — patient cough-sound, helps diagnosis.",style:'Calm.'},
    {speaker:'ren_uni',jp:'感染源を獲物のように追跡、興味深いです。',en:"Tracking infection sources like prey — intriguing.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。治療の一手目、迅速に。',en:"Yes. First-move treatment — swift.",style:'Patient.'},
    {speaker:'ren_uni',jp:'一等地の医院、地域密着型ですね。',en:"Prime-spot clinic — community-rooted.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'医療機器の部材、品質管理、徹底しています。',en:"Medical-device materials — strict quality.",style:'Informative.'},
    {speaker:'ren_uni',jp:'校庭周辺の小児医療、需要、ありますか。',en:"School-yard-area pediatric demand?",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。自販機の飲料、子供への糖分問題、注意喚起しています。',en:"Yes. Vending drinks — child-sugar issue, alerted.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'大河の流域、水質医療連携、別章で扱いますね。',en:"Great-river basin water-health linkage — separate chapter.",style:'Reflective close.'},
  ]},

  // D
  {id:'conv_06176',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son enjoy a day',lines:[
    {speaker:'sho_child',jp:'ママ、子猫、近所で見つけたよ!',en:"Mom — found a kitten in the neighborhood!",style:'Excited child.'},
    {speaker:'yumiko_mom',jp:'可愛いね。今夜は、じゃがいもの煮物にしようか。',en:"Cute. Tonight — potato stew?",style:'Tender.'},
    {speaker:'sho_child',jp:'お庭、コケが緑色できれい。',en:"Garden — moss, lovely green.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'明日の献立、もう、考えてあるわ。',en:"Tomorrow's menu — already planned.",style:'Warm.'},
    {speaker:'sho_child',jp:'お父さん、阪神タイガースの試合、観てる。',en:"Dad's watching Hanshin Tigers.",style:'Casual.'},
    {speaker:'yumiko_mom',jp:'お兄ちゃん、漫画の作画、進めてるって。',en:"Your bro — progressing manga artwork.",style:'Reflective.'},
    {speaker:'sho_child',jp:'夜、生放送の音楽番組、観たい。',en:"At night — live music show, wanna watch.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'寝る前に、お風呂、忘れないでね。',en:"Before bed — don't forget bath.",style:'Warm close.'},
  ]},
  {id:'conv_06177',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'子猫カフェ、新しくオープンしたって。',en:"Kitten cafe — newly opened.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん。じゃがいもの新作スープ、店で出してる。',en:"Yeah. New potato soup — store-served.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'カフェの窓辺、コケ盆栽、可愛い。',en:"Cafe window — moss bonsai, cute.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'今夜の献立、シチューにしようかな。',en:"Tonight's menu — stew?",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'阪神タイガースの応援グッズ、街でよく見るよね。',en:"Tigers cheer goods — often seen.",style:'Casual.'},
    {speaker:'aoi_barista',jp:'好きな漫画家、作画担当、変わるって聞いた。',en:"Fave artist — illustrator changing, I heard.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'今夜、生放送のクッキング番組、観るよ。',en:"Tonight's live cooking show — watching.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'いいね、後で感想、聞かせて。',en:"Nice — tell me later.",style:'Warm close.'},
  ]},
  {id:'conv_06178',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:D_T,scenario:'A teacher discusses regional culture',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、地域文化、子猫を題材にした絵本、紹介していますね。',en:"Sakura — kitten-themed picture book, introduced.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。じゃがいもを使う郷土料理も、章にしました。',en:"Yes. Potato-based local dishes — chapter.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'コケや苔の文化、日本庭園との関連、丁寧ですね。',en:"Moss culture vs. Japanese-garden — careful.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'郷土の献立、地域ごとに違いがあって、面白いです。',en:"Local menus — varied, fun.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'プロ野球、阪神タイガースのファン文化、別章でしたね。',en:"Pro baseball — Tigers fan culture, separate chapter.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'漫画作画の歴史、流派ごとの違い、調べました。',en:"Manga-art history — by school, researched.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'地上波と生放送、文化メディアの章、興味深いですね。',en:"Terrestrial vs. live — culture-media chapter, intriguing.",style:'Reflective close.'},
  ]},
  {id:'conv_06179',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens walk home',lines:[
    {speaker:'sakura_teen',jp:'近所の子猫、また会えた。',en:"Met the local kitten again.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。じゃがいもの収穫、家庭菜園でできたよ。',en:"Yeah. Potato harvest — from home garden.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'裏庭、コケが綺麗。',en:"Backyard — moss is pretty.",style:'Wistful.'},
    {speaker:'riku_teen',jp:'今夜の献立、お母さんがカレーって。',en:"Tonight's menu — Mom says curry.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'お父さん、阪神タイガースの試合、行きたいって。',en:"Dad wants to attend Tigers game.",style:'Bright.'},
    {speaker:'riku_teen',jp:'漫画家志望、作画、毎日練習してる?',en:"Aspiring manga artist — practicing daily?",style:'Curious.'},
    {speaker:'sakura_teen',jp:'夜の生放送、見逃せない歌番組がある。',en:"Night live show — can't-miss music program.",style:'Animated.'},
    {speaker:'riku_teen',jp:'録画も忘れずに。',en:"Don't forget recording.",style:'Wry close.'},
  ]},
  {id:'conv_06180',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan an event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、店のマスコット、子猫ベースのキャラ、ええなあ。',en:"Aoi-san — shop mascot, kitten-based, nice.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。じゃがいもの限定スープ、メニューに入れましょう。',en:"Yes. Limited potato soup — add to menu.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'コケ盆栽、各テーブルに置こか。',en:"Moss bonsai — place on each table?",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'季節の献立、月替りで提案しましょう。',en:"Seasonal menu — monthly refresh.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'阪神タイガース応援デー、店内BGMで応援曲を流そ。',en:"Tigers cheer day — play support songs.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'壁面の作画、地元アーティストにお願いします。',en:"Wall art — ask a local artist.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'生放送番組のロケ、ええきっかけになりそう。',en:"Live-show shoot — good opportunity.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'閉店前、SNSで生配信、企画してみます。',en:"Pre-close — live-stream on SNS, plan to try.",style:'Warm close.'},
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

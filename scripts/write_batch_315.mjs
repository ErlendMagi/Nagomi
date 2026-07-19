import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_315 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['経ち','冷房','断然','少量','丸く','傾い','羽目','延ばし']
const B_T = ['可視','リテラシー','言葉遣い','学ぼ','決行','見立て','置き換える','近接']
const C_T = ['難病','治ら','力不足','カオス','始まら','危うい','宛先','叶わ']
const D_T = ['特製','作風','家系','ごっこ','島国','走り出し','七つ','遠回り']

const data = [
  // A
  {id:'conv_06261',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'夏が経ち、もう秋の気配ね。',en:"Summer passing — autumn already in air.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'うん。冷房、控えめにしてる。',en:"Yeah. AC — restrained.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'カフェのケーキ、断然、こちらの店が美味しい。',en:"Cafe cakes — this shop is decidedly tastier.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'砂糖、少量で、健康にいい。',en:"Sugar — small dose, healthier.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'丸く焼き上がったクッキー、可愛い。',en:"Round-baked cookies — cute.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'店の看板、台風で傾いた。',en:"Shop sign — tilted in typhoon.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'長居しすぎて、夕飯遅くなる羽目に。',en:"Stayed too long — dinner late, ended up.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'今夜の予定、また延ばしになりそう。',en:"Tonight's plan — postpone again likely.",style:'Wry close.'},
  ]},
  {id:'conv_06262',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、夏休み、もう半分経ったね。',en:"Mom — summer break, half passed.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'うん。冷房、上手に使おうね。',en:"Yes. AC — use well.",style:'Tender.'},
    {speaker:'sho_child',jp:'お菓子、断然、ママの手作りが好き。',en:"Sweets — decidedly love Mom's handmade.",style:'Sweet.'},
    {speaker:'yumiko_mom',jp:'お塩、少量にしてあるよ、煮物も。',en:"Salt — small dose, stew too.",style:'Soft.'},
    {speaker:'sho_child',jp:'お餅、丸くなって、上手だね、お父さん。',en:"Mochi — round, well done, Dad.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お屋根、台風で傾いた、と聞いた。',en:"Roof — tilted in typhoon, heard.",style:'Reflective.'},
    {speaker:'sho_child',jp:'宿題、後回しにする羽目になっちゃった。',en:"Homework — postponed, ended up.",style:'Wry.'},
    {speaker:'yumiko_mom',jp:'明日の塾、延ばしてもいい?',en:"Tomorrow's cram — postpone?",style:'Warm close.'},
  ]},
  {id:'conv_06263',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'梅雨も明けて、夏休みが、経ち始めたね。',en:"Rainy season over — summer break started passing.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。教室の冷房、強すぎて寒い。',en:"Yeah. Class AC — too strong, cold.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'断然、この味のジュース、好き。',en:"Decidedly love this juice flavor.",style:'Animated.'},
    {speaker:'riku_teen',jp:'昼の弁当、おかず、少量で済ませた。',en:"Lunch — sides, small amount sufficed.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'クラスのみんなと、輪になって、丸く座る。',en:"Class — circle-sit, round.",style:'Soft.'},
    {speaker:'riku_teen',jp:'机、誰か蹴って、傾いた状態だった。',en:"Desk — someone kicked, tilted.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'部活、サボる羽目になっちゃう。',en:"Club — ended up skipping.",style:'Subdued.'},
    {speaker:'riku_teen',jp:'試合、来週まで延ばしになった。',en:"Match — postponed till next week.",style:'Reflective close.'},
  ]},
  {id:'conv_06264',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'結婚から、もう50年が経った。',en:"50 years since marriage have passed.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。冷房、ちょうどいい温度ね。',en:"Yes. AC — right temperature.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'家のお茶、断然、お前の淹れ方が好きだ。',en:"Home tea — decidedly love your brew.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'夕食、年だから、少量で十分よ。',en:"Dinner — aged, small portion enough.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'お前の手、いつも丸く優しいな。',en:"Your hands — always round and gentle.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'庭の梅の木、年々傾いてきたわね。',en:"Garden plum — yearly tilting.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'孫の結婚式、待つ羽目になりそうだな。',en:"Grandkid's wedding — ended up waiting.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'長生きの予定、しっかり延ばしましょう。',en:"Longevity plans — firmly extend.",style:'Warm close.'},
  ]},
  {id:'conv_06265',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai and a teen chat',lines:[
    {speaker:'ren_uni',jp:'桜、入学から、もう一年経ったな。',en:"Sakura — year since entrance passed.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。教室の冷房、効きすぎて、苦手です。',en:"Yes. Class AC — too cold, dislike.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'学食、断然、ラーメンが美味しい。',en:"Cafeteria — decidedly ramen is best.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'お米、少量で抑えて、ダイエット中です。',en:"Rice — small, dieting.",style:'Wry.'},
    {speaker:'ren_uni',jp:'丸く編んだ髪、似合うな。',en:"Round-braided hair — suits.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'夜、ベンチに座ったら、傾いていて、笑いました。',en:"Night — sat on tilted bench, laughed.",style:'Animated.'},
    {speaker:'ren_uni',jp:'勉強、徹夜する羽目になるなよ。',en:"Don't end up all-nighting.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'はい。試験、延ばしてもらえそうにありません。',en:"Yes. Exam — can't seem postponed.",style:'Subdued close.'},
  ]},

  // B
  {id:'conv_06266',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'業務、可視化、進めろ。',en:"Operations — visualize, progress.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社員のITリテラシー、研修で底上げします。',en:"Yes. Staff IT literacy — boost via training.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'若手の言葉遣い、丁寧に指導しろ。',en:"Young-staff phrasing — careful guidance.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。私たちも、まだ学ぼうという姿勢、持ち続けます。',en:"Yes. We also keep the willing-to-learn stance.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'明日のイベント、雨でも決行で。',en:"Tomorrow's event — go ahead even in rain.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。市場の見立て、専門家にも、確認しました。',en:"Yes. Market view — verified with experts.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'旧式部品、新型に置き換えるんだ。',en:"Old parts — replace with new.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。事業所、近接に集約します。',en:"Yes. Sites — consolidate close.",style:'Close.'},
  ]},
  {id:'conv_06267',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss training',lines:[
    {speaker:'yuki_office',jp:'業務工程、可視化、急ごう。',en:"Workflow — visualize, rush.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。新人のリテラシー、定期チェックします。',en:"Yes. New-hire literacy — periodic checks.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'電話での言葉遣い、徹底させよう。',en:"Phone-language — enforce.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。皆で学ぼう、を合言葉に。',en:"Yes. \"Let's all learn\" — slogan.",style:'Commitment.'},
    {speaker:'yuki_office',jp:'発表会、決行する?',en:"Launch — execute?",style:'Curious.'},
    {speaker:'kenji_office',jp:'はい。マーケットの見立て、強気でいきます。',en:"Yes. Market view — bullish.",style:'Bright.'},
    {speaker:'yuki_office',jp:'古い社内システム、新規に置き換えるよ。',en:"Old internal system — replace new.",style:'Direction.'},
    {speaker:'kenji_office',jp:'倉庫、本社近接に移します。',en:"Warehouse — relocate near HQ.",style:'Close.'},
  ]},
  {id:'conv_06268',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、業務、可視化することで、改善のヒント、見えてくる。',en:"Ren — visualizing reveals improvement clues.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。ITリテラシー、若手にも、磨きたいです。',en:"Yes. IT literacy — wanna sharpen.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'敬語、言葉遣い、社会人の必須だ。',en:"Honorifics, phrasing — pro must-haves.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。先輩から学ぼうと、毎日心がけています。',en:"Yes. Daily learn-from-senpai mindset.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'プロジェクト、たとえ雨でも決行する覚悟だ。',en:"Project — even in rain, go-ahead resolve.",style:'Direction.'},
    {speaker:'ren_uni',jp:'業界の見立て、御社のアプローチ、参考になります。',en:"Industry view — your firm's approach, instructive.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'古い慣習、新技術に置き換える時代だ。',en:"Old customs — replace-with-new-tech era.",style:'Direction.'},
    {speaker:'ren_uni',jp:'本社と近接のサテライト、勉強になります。',en:"HQ-near satellite — instructive.",style:'Earnest close.'},
  ]},
  {id:'conv_06269',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on coordination',lines:[
    {speaker:'takeda_officer',jp:'防犯活動、可視化、皆で取り組みましょう。',en:"Crime-prev — visualize, work together.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。社員のリテラシー教育、警察と連動させます。',en:"Yes. Staff literacy — police-linked.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'住民への言葉遣い、丁寧に。',en:"Resident-phrasing — careful.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察からも、学ぼうと、研修参加しています。',en:"Yes. From police — willing-to-learn, training attended.",style:'Commitment.'},
    {speaker:'takeda_officer',jp:'合同訓練、来週、決行します。',en:"Joint drill — execute next week.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。地域の見立て、両社で共有します。',en:"Yes. Local view — shared across firms.",style:'Update.'},
    {speaker:'takeda_officer',jp:'古い通信機器、警察と協調、置き換える予定です。',en:"Old comms — replace via police coordination.",style:'Direction.'},
    {speaker:'kenji_office',jp:'駅近接の交番、連絡密にします。',en:"Station-near koban — close contact.",style:'Close.'},
  ]},
  {id:'conv_06270',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'業務の可視化、若い頃には無かった手法だ。',en:"Operation visualization — unknown in my youth.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。リテラシー、世代を超えて磨きたいです。',en:"Yes. Literacy — sharpen across generations.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'言葉遣い、企業の品格そのものだ。',en:"Phrasing — corporate dignity itself.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。私も、引き続き学ぼうと努力します。',en:"Yes. I keep willing-to-learn effort.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'決行する勇気、大事だ。',en:"Courage to execute — vital.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。市場の見立て、皆で議論します。',en:"Yes. Market view — discuss together.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'古いものを置き換える時、人を切るな。',en:"Replacing old — don't cut people.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。近接拠点、引き続き活用します。',en:"Yes. Nearby bases — continue use.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06271',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses rare diseases',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、難病に取り組む医師、増えています。',en:"Ren — rare-disease doctors increasing.",style:'Calm.'},
    {speaker:'ren_uni',jp:'治らない症状、心理的負担、大きいですね。',en:"Untreatable symptoms — heavy psychological burden.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。地方医療、力不足な現場、多いです。',en:"Yes. Regional medicine — power-short fronts, many.",style:'Patient.'},
    {speaker:'ren_uni',jp:'感染症が拡大すると、街が、カオスになりますね。',en:"Infection spread — city becomes chaos.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。治験、まだ始まらないものもあります。',en:"Yes. Trials — some not yet started.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医療体制が危うい地域、報道で見ました。',en:"Endangered-system regions — seen in news.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。手紙の宛先、患者会へ、よく送ります。',en:"Yes. Letter recipients — patient societies, often.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'夢が叶わぬまま、命を落とす方々、ありますね。',en:"Dream-unfulfilled, losing-life folks — exist.",style:'Wistful close.'},
  ]},
  {id:'conv_06272',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs about social-issues',lines:[
    {speaker:'takeda_officer',jp:'難病を抱える家族支援、警察も関与する場面、あります。',en:"Rare-disease family support — police involved sometimes.",style:'Calm.'},
    {speaker:'ren_uni',jp:'治らない問題に直面する家族、行政も限界ですね。',en:"Untreatable-issue families — admin also has limits.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。警察力不足、感じる地域も。',en:"Yes. Police-power-short areas exist.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'事件のカオス、初動で抑えるのが鍵ですね。',en:"Case chaos — initial control is key.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。捜査、まだ始まらないケースもあります。',en:"Yes. Investigation — some not yet started.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'証拠の取り扱い、危うい時もあるんですね。',en:"Evidence handling — sometimes precarious.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。被害者の宛先、追跡で確認します。',en:"Yes. Victim addresses — tracking verifies.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'再発防止、なかなか叶わない現実、つらいですね。',en:"Recurrence-prevention — hard to fulfill, painful.",style:'Reflective close.'},
  ]},
  {id:'conv_06273',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses research',lines:[
    {speaker:'asuka_teacher',jp:'論文、難病研究の倫理、丁寧でしたね。',en:"Paper — rare-disease ethics, careful.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。治らないケースへの心理ケア、章を割きました。',en:"Yes. Untreatable cases — chapter on psych care.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'力不足を感じる研究者、多いとか。',en:"Power-short feeling researchers — many.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。学術界全体がカオスに陥る瞬間も、扱いました。',en:"Yes. Academia-chaos moments — covered too.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'治験開始がまだ始まらない案件、批判の対象ですね。',en:"Not-yet-started trials — criticism target.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'倫理委員会、危うい判断、避けるべきです。',en:"Ethics committees — must avoid precarious calls.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'論文の宛先、医療誌、適切に選びましたね。',en:"Paper destination — medical journals well chosen.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'治療法、まだ叶わぬ夢ですが、進んでいきます。',en:"Cures — unfulfilled dream, but advancing.",style:'Earnest close.'},
  ]},
  {id:'conv_06274',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss discusses corporate CSR',lines:[
    {speaker:'hiroshi_boss',jp:'CSR、難病団体への寄付、増額しろ。',en:"CSR — donation to rare-disease bodies, increase.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社員の家族、治らない病、抱えている方も。',en:"Yes. Staff families — untreatable disease too.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'人事、力不足な点、見直せ。',en:"HR — power-short points, review.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。業界全体がカオスに陥らないよう、努めます。',en:"Yes. Avoid industry-chaos.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'新プロジェクト、まだ始まらないが、準備、急げ。',en:"New project — not yet started; rush prep.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。資金、危うい時期もありましたが、安定しました。',en:"Yes. Funds had precarious times; stabilized.",style:'Reflective.'},
    {speaker:'hiroshi_boss',jp:'送付物、宛先、二重チェックを。',en:"Mail destinations — double-check.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員の夢、少しでも叶わせる、配慮します。',en:"Yes. Staff dreams — fulfill even slightly, care.",style:'Close.'},
  ]},
  {id:'conv_06275',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、難病の社会的影響、テーマにしましたね。',en:"Sakura — rare-disease social impact, theme.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。治らない病気を抱える子供、扱いました。',en:"Yes. Untreatable-child cases — covered.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'地域医療、力不足の現状、章にしましたね。',en:"Regional medicine — power-short, chapter.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'感染症発生時のカオス、過去の事例で論じました。',en:"Infection chaos — discussed via past cases.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'政策がまだ始まらない地域、報告、印象的でしたね。',en:"Not-yet-started-policy regions — striking report.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'医療の継続が危うい時、社会も揺れますね。',en:"Endangered medical continuity — society shakes too.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'手紙の宛先、行政、丁寧に選びましょう。',en:"Letter destinations — admin, choose carefully.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'夢が叶わぬまま、人は何度も挑戦します。',en:"Unfulfilled dreams — humans keep trying.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06276',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'店の特製パスタ、評判だよね。',en:"Shop's special pasta — well-regarded.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。シェフの作風、独創的でね。',en:"Yeah. Chef's style — original.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'実は、料理人の家系なんだって。',en:"Actually — chef-lineage family.",style:'Curious.'},
    {speaker:'aoi_barista',jp:'お店ごっこ、子供の頃、よくやったね。',en:"Shop-play — childhood often.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'日本、島国だから、新鮮な魚、自慢だよね。',en:"Japan — island nation; fresh fish, proud.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'夕食の準備、走り出した、もう急がなきゃ。',en:"Dinner prep — started rushing.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'兄弟、七つも年上、頼もしいよね。',en:"Bro — seven years older, reliable.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'帰り、遠回りして、夜景、見てきた。',en:"On the way back — detour, saw night view.",style:'Wistful close.'},
  ]},
  {id:'conv_06277',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、ママ特製のカレー、世界一!',en:"Mom — Mom's special curry, world-best!",style:'Excited child.'},
    {speaker:'yumiko_mom',jp:'ふふ。お祖父ちゃんの作風、引き継いだの。',en:"Hehe. Inherited Grandpa's style.",style:'Warm.'},
    {speaker:'sho_child',jp:'うちの家系、料理上手なのかな。',en:"Our lineage — cooking-skilled?",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'お料理ごっこ、楽しいよね。',en:"Cooking-play — fun.",style:'Tender.'},
    {speaker:'sho_child',jp:'日本は、島国だから、ご飯と魚が、定番だね。',en:"Japan — island; rice+fish, staple.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'宿題、走り出した?',en:"Homework — started rushing?",style:'Soft.'},
    {speaker:'sho_child',jp:'うん。あと七つ、問題、残ってる。',en:"Yes. Seven problems left.",style:'Wry.'},
    {speaker:'yumiko_mom',jp:'帰り道、遠回りして、お友達の家、寄ろうね。',en:"Way back — detour, friend's home.",style:'Warm close.'},
  ]},
  {id:'conv_06278',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'部活、特製のジャージ、今度、配られる。',en:"Club — special jersey distributed soon.",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'うん。先輩の作風、皆、真似してる。',en:"Yeah. Senpai's style — everyone mimics.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'スポーツ選手の家系、お父さんから受け継いだのかな。',en:"Athlete lineage — inherited from dad?",style:'Curious.'},
    {speaker:'riku_teen',jp:'昔のごっこ遊び、覚えてる?',en:"Old play-pretend — remember?",style:'Wistful.'},
    {speaker:'sakura_teen',jp:'日本は島国、海外との接点、限定的だよね。',en:"Japan — island; foreign contact limited.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'試合、もう走り出してるよ。',en:"Match — already running.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'七つの大会で、入賞目指してる。',en:"Seven tournaments — aim to place.",style:'Bright.'},
    {speaker:'riku_teen',jp:'遠回りでも、商店街、抜けて帰ろう。',en:"Even detour — through shopping street home.",style:'Cheerful close.'},
  ]},
  {id:'conv_06279',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher discusses culture research',lines:[
    {speaker:'asuka_teacher',jp:'論文、特製レシピと地域文化、興味深いですね。',en:"Paper — special recipes vs. regional culture, interesting.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。作風の継承、世代を跨いで論じました。',en:"Yes. Style succession — cross-generational.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'家系図と料理伝承、独自の章ですね。',en:"Family tree & culinary tradition — unique chapter.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'子供の頃のごっこ遊び、文化心理学の視点で扱いました。',en:"Childhood play — cultural-psychology lens.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'島国としての日本の食、ユニークですね。',en:"Island-nation Japan's food — unique.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'若手研究者、走り出した運動、章末に紹介します。',en:"Young researchers' running movement — chapter end.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'参考文献、七つの古典、入れましたね。',en:"References — seven classics, included.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'結論、遠回りせず、直球で書きました。',en:"Conclusion — no detour, direct.",style:'Earnest close.'},
  ]},
  {id:'conv_06280',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan an event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、夏フェア、特製スイーツ、新作出そ。',en:"Aoi-san — summer fair, special sweets, new release.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。シェフの作風、店全体に反映させましょう。',en:"Yes. Reflect chef's style throughout.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'お客さん、料理家家系の方も、いらっしゃるな。',en:"Customers — culinary-lineage too.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'お子様連れのお客様向けに、ごっこ体験、用意しましょう。',en:"For kid-families — play-experience prep.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'島国らしさ、地元魚で出そ。',en:"Island-nation feel — use local fish.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'スタッフ、走り出すような勢いで、活気出します。',en:"Staff — running-momentum vibe, energetic.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'七つの目玉メニュー、出してみよか。',en:"Seven flagship menus — try.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'動線、遠回りせず、スムーズに案内します。',en:"Flow — no detour, smooth guidance.",style:'Warm close.'},
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

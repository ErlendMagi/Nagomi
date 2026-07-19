import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_303 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['まったり','でかけ','ご機嫌','困ら','頑固','恨み','不器用','留守番']
const B_T = ['時給','慣行','例会','結束','切り替える','同然','スキーム','富裕']
const C_T = ['親善','発祥','庁舎','受動','刑罰','緊迫','牽引','症例']
const D_T = ['風力','天文','観劇','醍醐味','大自然','骨董','アトラクション','カトリック教']

const data = [
  // A
  {id:'conv_06021',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends decompress',lines:[
    {speaker:'mei_romantic',jp:'土曜、まったりした時間が欲しいの。',en:"Saturday — want chill time.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん、どこかにでかけてもいいよね。',en:"Yeah, going out is fine too.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'最近、夫がご機嫌で、家、明るいの。',en:"Lately my husband's in good spirits — home's bright.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'よかった!困らせない夫、いいね。',en:"Glad! A husband who doesn't trouble you — nice.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'前は頑固で、私の頼みも聞かなかった。',en:"Used to be stubborn — wouldn't hear my requests.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'恨みって、引きずる必要ないよ。',en:"Grudges — no need to drag along.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'私、感情表現が不器用なの。',en:"I'm clumsy at expressing emotions.",style:'Vulnerable.'},
    {speaker:'aoi_barista',jp:'子供が留守番できる年齢になって、楽でしょ。',en:"Kid's old enough to home-sit alone — easier?",style:'Warm close.'},
  ]},
  {id:'conv_06022',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'今日は、家でまったりしたい気分だ。',en:"Today — feel like chilling at home.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。スーパー、私だけでかけてくるわ。',en:"Yes. I'll head to the supermarket alone.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'庭の犬、ご機嫌で尻尾振ってる。',en:"Garden dog — happy, tail wagging.",style:'Bright.'},
    {speaker:'sachiko_grandma',jp:'孫が来ても、困らせないよう、おやつ準備したわ。',en:"For grandkids — won't trouble them; snacks ready.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'若い頃は、私、頑固でね。',en:"In youth — I was stubborn.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'恨み言、お互い、もう忘れたわよ。',en:"Grudge-talk — both forgotten now.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'感情表現は、若い頃も不器用だった。',en:"Emotion expression — clumsy young too.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'お留守番、犬と一緒なら寂しくないわね。',en:"Home-sitting — with the dog, not lonely.",style:'Warm close.'},
  ]},
  {id:'conv_06023',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat after school',lines:[
    {speaker:'sakura_teen',jp:'週末、図書館でまったり過ごしたい。',en:"Weekend — wanna chill at the library.",style:'Wistful teen.'},
    {speaker:'riku_teen',jp:'うん。たまにはでかけずに、休もう。',en:"Yeah. Skip going out, rest.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'担任が、今日ご機嫌だった。',en:"Homeroom was in good spirits today.",style:'Bright.'},
    {speaker:'riku_teen',jp:'試験範囲で困らせるなって伝えた?',en:"Asked them not to trouble us with exam scope?",style:'Wry.'},
    {speaker:'sakura_teen',jp:'うん。先生、頑固だから、ダメだった。',en:"Yes. Teacher's stubborn — no luck.",style:'Subdued.'},
    {speaker:'riku_teen',jp:'恨み持つほどじゃないけど、しんどいな。',en:"Not enough for grudge, but tough.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'説明、不器用な先生だよね。',en:"Teacher's clumsy at explaining.",style:'Wry.'},
    {speaker:'riku_teen',jp:'今夜、妹が留守番で、家で勉強できる。',en:"Tonight — sis home-sits; can study at home.",style:'Warm close.'},
  ]},
  {id:'conv_06024',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son spend a quiet day',lines:[
    {speaker:'sho_child',jp:'ママ、今日は、家でまったりしたいな。',en:"Mom, today — wanna chill at home.",style:'Soft child.'},
    {speaker:'yumiko_mom',jp:'うん。お父さん、でかけてるから、二人でね。',en:"Yes. Dad's out — just us.",style:'Warm.'},
    {speaker:'sho_child',jp:'犬、ご機嫌で走り回ってる。',en:"Dog's chasing around happy.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'お友達を困らせないこと、できた?',en:"Did you avoid troubling friends?",style:'Soft.'},
    {speaker:'sho_child',jp:'うん。でも、ある子、頑固で、譲ってくれなかった。',en:"Yes. But one kid was stubborn — wouldn't yield.",style:'Subdued.'},
    {speaker:'yumiko_mom',jp:'相手を恨みじゃなくて、優しく言葉で伝えてね。',en:"Not grudge — kindly say in words.",style:'Tender.'},
    {speaker:'sho_child',jp:'僕、ちょっと不器用で、すぐ言えなくて。',en:"I'm clumsy — can't say quickly.",style:'Vulnerable.'},
    {speaker:'yumiko_mom',jp:'今度、留守番できたら、ご褒美ね。',en:"Next time you home-sit well — a treat.",style:'Warm close.'},
  ]},
  {id:'conv_06025',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai supports a teen',lines:[
    {speaker:'ren_uni',jp:'桜、休日、まったりするのも才能だよ。',en:"Sakura, chilling on holidays is also a talent.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。先輩、今日、でかけずに公園散歩、ありがとうございます。',en:"Yes. Senpai — skipping outings for park walk, thanks.",style:'Earnest teen.'},
    {speaker:'ren_uni',jp:'ご機嫌で歩く犬、見るだけで癒されるよな。',en:"Watching happy dogs is healing.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'家族を困らせない子供、私、なれてないかも。',en:"A child not troubling family — maybe I'm not yet.",style:'Vulnerable.'},
    {speaker:'ren_uni',jp:'頑固な自分も、認めていい。',en:"Stubborn self — accept it.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'恨みを抱える日もあって、辛いです。',en:"Days I hold grudges — painful.",style:'Soft.'},
    {speaker:'ren_uni',jp:'感情表現、不器用でもいい。',en:"Emotion expression — clumsy is fine.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'明日、母が留守番で、家で勉強します。',en:"Tomorrow — mom home-sits; I study at home.",style:'Warm close.'},
  ]},

  // B
  {id:'conv_06026',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews labor and strategy',lines:[
    {speaker:'hiroshi_boss',jp:'時給制の現場社員、待遇、見直そう。',en:"Hourly-wage front-line — review treatment.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。業界慣行に沿って、改定します。',en:"Yes. Aligning with industry custom — revise.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'例会で、組織の結束を強める提案、しろ。',en:"At regular meetings — propose to strengthen unity.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。古い体制を新規に切り替える時期です。',en:"Yes. Time to switch old systems to new.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'競合は、ほとんど我々と同然のスキームに移行中だ。',en:"Competitors — nearly same scheme as ours.",style:'Direction.'},
    {speaker:'kenji_office',jp:'富裕層向けの新サービス、戦略の柱です。',en:"High-net-worth services — strategic pillar.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'よし、進めよう。',en:"Good — proceed.",style:'Close.'},
  ]},
  {id:'conv_06027',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss labor',lines:[
    {speaker:'yuki_office',jp:'パートさんの時給、地域平均と比べてどう?',en:"Part-timers' hourly — vs. regional avg?",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。業界慣行、参考にしました。',en:"Yes. Industry custom — referenced.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'例会で、店舗の結束、訴えよう。',en:"At regular meetings — appeal for store unity.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。シフト管理、新システムに切り替える予定です。',en:"Yes. Shift mgmt — switching to new system.",style:'Update.'},
    {speaker:'yuki_office',jp:'競合と同然の待遇、保ちたい。',en:"Want same treatment as competitors.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'富裕層客向けの新スキーム、来期から導入します。',en:"High-net-worth scheme — next term intro.",style:'Bright close.'},
  ]},
  {id:'conv_06028',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern on workforce',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、時給制の社員、戦力として大切だ。',en:"Ren, hourly-wage staff are vital workforce.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'業界慣行、企業ごとに違うんですね。',en:"Industry custom — differs by firm.",style:'Curious.'},
    {speaker:'hiroshi_boss',jp:'例会、組織の結束には、欠かせない。',en:"Regular meetings — vital for org unity.",style:'Direction.'},
    {speaker:'ren_uni',jp:'スキーム切り替えるタイミング、難しいですね。',en:"Scheme-switch timing — hard.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'同然の規模の競合、把握しろ。富裕層市場、伸びる分野だ。',en:"Same-scale competitors — watch. HNW market — growing.",style:'Reflective close.'},
  ]},
  {id:'conv_06029',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on labor compliance',lines:[
    {speaker:'takeda_officer',jp:'御社の時給規定、適正です。',en:"Your firm's hourly rules are proper.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。業界慣行に沿いつつ、独自運用も検討。',en:"Yes. While industry-conformant, own ops considered.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'例会の出席、社員結束に貢献していますね。',en:"Regular-meeting attendance contributes to unity.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。古いやり方、新しいスキームに切り替える予定です。',en:"Yes. Switching old methods to new scheme.",style:'Update.'},
    {speaker:'takeda_officer',jp:'闇労働同然の業者、注意してください。',en:"Watch firms running near-illegal labor.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'富裕層案件でも、コンプライアンス、徹底しています。',en:"Even HNW deals — strict compliance.",style:'Close.'},
  ]},
  {id:'conv_06030',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'時給制、若い頃から私も使ってきた。',en:"Hourly — I've used since youth.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。慣行を守りつつ、進化させたいです。',en:"Yes. Maintain custom while evolving.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'例会では、結束、形だけにするな。',en:"At meetings — don't make unity superficial.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'切り替える時、人を大切に。',en:"When switching — value people.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'同然の規模の競合、油断するな。富裕層、信頼で勝負だ。',en:"Same-scale rivals — don't slack. HNW — win by trust.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06031',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher and student discuss a diplomatic-history paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、親善大使の歴史、丁寧でしたね。',en:"Paper — goodwill-ambassador history, careful.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。発祥は19世紀末、と位置づけました。',en:"Yes. Origin placed late-19th century.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'庁舎での儀礼、丁寧に描かれていますね。',en:"Government-office rites — carefully depicted.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'当時、受動的な外交が主流でした。',en:"Then, passive diplomacy was mainstream.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'刑罰の国際比較、緊迫した時代背景、伝わります。',en:"International punishment comparisons — tense era comes through.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'文明発展を牽引する役割、近代国家が担いました。',en:"Modern nations carried civilizational-pull roles.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'比較症例として、医学史と並べる試み、面白いですね。',en:"As comparison cases — pairing medical history is intriguing.",style:'Reflective close.'},
  ]},
  {id:'conv_06032',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor and reporter discuss epidemiology',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、国際親善のプロジェクト、医療界でも盛んです。',en:"Ren, international-goodwill projects flourish in medicine too.",style:'Calm.'},
    {speaker:'ren_uni',jp:'発祥地での先進治療、研究進んでますね。',en:"Source-region advanced treatments — research advancing.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。県庁舎での会議、現場と直結します。',en:"Yes. Prefectural-office meetings — directly tied to the field.",style:'Patient.'},
    {speaker:'ren_uni',jp:'受動的な治療から、能動的予防に切り替えていますね。',en:"From passive treatment to active prevention.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。医療刑罰の国際比較、倫理面でも論じられます。',en:"International medical-punishment comparisons — ethically discussed.",style:'Informative.'},
    {speaker:'ren_uni',jp:'緊迫した感染症対応、医療界が牽引するんですね。',en:"Tense infectious-disease response — medicine leads.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。難症例にも、地道に取り組みます。',en:"Yes. Even hard cases — steady work.",style:'Reflective close.'},
  ]},
  {id:'conv_06033',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs on international cooperation',lines:[
    {speaker:'takeda_officer',jp:'国際親善のフォーラム、警察庁も参加します。',en:"International-goodwill forum — NPA participates.",style:'Calm.'},
    {speaker:'ren_uni',jp:'警察制度の発祥、各国で異なりますね。',en:"Police-system origins differ by country.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。庁舎前で記念撮影、予定しています。',en:"Yes. Photo at the office front, scheduled.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'受動的な国際対応、変えるべきとの議論もありますね。',en:"Passive international response — debate to change.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。刑罰の比較研究、緊迫した時代に重要です。',en:"Yes. Punishment comparisons matter in tense times.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察庁が牽引する役割、注目されていますね。',en:"NPA's leading role — drawing notice.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。特殊な症例、各国で共有しています。',en:"Yes. Special cases — shared across nations.",style:'Firm close.'},
  ]},
  {id:'conv_06034',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews CSR international policy',lines:[
    {speaker:'hiroshi_boss',jp:'親善行事、地元自治体と連携、丁寧に。',en:"Goodwill events — careful local-gov coordination.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。日本発祥の技術、海外でも評価されています。',en:"Yes. JP-origin tech — praised overseas.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'庁舎見学、スタッフに参加させろ。',en:"Office tour — have staff join.",style:'Direction.'},
    {speaker:'kenji_office',jp:'受動的な姿勢、改めます。',en:"Passive stance — correcting.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'業界刑罰、過度に恐れるな。緊迫した時こそ、冷静に。',en:"Don't overfear industry penalties. Calm in tense times.",style:'Direction.'},
    {speaker:'kenji_office',jp:'業界全体を牽引する企業、目指します。',en:"Industry-pulling firm — aim.",style:'Bright.'},
    {speaker:'hiroshi_boss',jp:'症例の積み上げ、長期視点で。',en:"Case accumulation — long-term view.",style:'Close.'},
  ]},
  {id:'conv_06035',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、国際親善のテーマ、世界史と地理、両面から扱いますね。',en:"Sakura, international-goodwill theme — world history and geography both.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。発祥の地、世界中に散らばっています。',en:"Yes. Origin sites scattered worldwide.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'各国庁舎の建築、見比べてみるのもいいですね。',en:"Compare government-office architecture too.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'受動的な観光から、能動的な交流に変える章、入れました。',en:"Switched from passive tourism to active exchange — chapter.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'刑罰史の比較、難しいですが、勉強になりますね。',en:"Punishment-history comparison — hard but instructive.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'国際情勢が緊迫した時期、牽引役の国々、整理しました。',en:"In tense periods — leading nations, organized.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'感染症の症例、世界的視点で論じる視座、興味深いですね。',en:"Infectious-disease cases from a global view — intriguing perspective.",style:'Reflective close.'},
  ]},

  // D
  {id:'conv_06036',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends plan a vacation',lines:[
    {speaker:'mei_romantic',jp:'夏休み、風力発電所のある海岸、見に行きたい。',en:"Summer — wanna see the wind-power coast.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'うん。天文台にも、寄ろうか。',en:"Yes. Stop at the observatory too?",style:'Soft.'},
    {speaker:'mei_romantic',jp:'観劇も、ついで予定に入れたい。',en:"Add a theater visit too.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'旅の醍醐味、計画段階から楽しめるよね。',en:"Travel's joy — fun from planning.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'山奥の大自然、心が洗われる。',en:"Deep-mountain wild — soul cleansed.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'町の骨董市、覗いてみたい。',en:"Town antique market — wanna peek.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'近くにアトラクションのテーマパーク、あるんだ。',en:"Theme park with attractions nearby.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'カトリック教の古い教会も、寄ってみよう。',en:"Stop at the old Catholic church too.",style:'Warm close.'},
  ]},
  {id:'conv_06037',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher and student discuss a geography research',lines:[
    {speaker:'asuka_teacher',jp:'論文、風力発電と地域文化の関係、興味深いですね。',en:"Paper — wind-power and regional culture — intriguing.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。天文学的な観点も、自然崇拝と結びつけて論じました。',en:"Yes. Astronomical viewpoints tied to nature-worship.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'観劇による地域活性化、章として丁寧ですね。',en:"Theater-driven revival — careful chapter.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'地方の醍醐味、丁寧に取材しました。',en:"Local charms — carefully covered.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'大自然の写真、巻末に掲載されていますね。',en:"Wild-nature photos — at the end.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'地域の骨董文化、衰退と保護、議論しました。',en:"Local antique culture — decline & protection discussed.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'観光アトラクションとの共存、最終章ですね。',en:"Coexistence with tourist attractions — final chapter.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'カトリック教の地域教会、参考資料に。',en:"Local Catholic churches — referenced.",style:'Curious close.'},
  ]},
  {id:'conv_06038',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens plan a culture trip',lines:[
    {speaker:'sakura_teen',jp:'修学旅行、風力発電施設、見学コースあるって。',en:"School trip — wind-power facility tour included.",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'うん。天文台、夜空観察もあるらしい。',en:"Yeah. Observatory — night-sky viewing too.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'歌舞伎座での観劇、楽しみだね。',en:"Kabuki-za theater visit — exciting.",style:'Animated.'},
    {speaker:'riku_teen',jp:'食事の醍醐味、地元名物、満喫したい。',en:"Food charms — relish local specialties.",style:'Bright.'},
    {speaker:'sakura_teen',jp:'大自然のハイキングコースも、入ってるよ。',en:"Wild-nature hiking course included.",style:'Cheerful.'},
    {speaker:'riku_teen',jp:'骨董店、お土産探しに寄ろう。',en:"Antique shop — souvenir hunt.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'テーマパークでアトラクションも、夜入れる予定。',en:"Theme park — attractions at night planned.",style:'Animated.'},
    {speaker:'riku_teen',jp:'カトリック教の教会も、見学に入ってる。',en:"Catholic church visit also in the plan.",style:'Reflective close.'},
  ]},
  {id:'conv_06039',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces about a trip',lines:[
    {speaker:'hiroshi_elder',jp:'昔の旅、風力発電が珍しかった時代、覚えてる?',en:"Old trips — wind-power was rare back then, recall?",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。天文台で星空、感動したわね。',en:"Yes. Observatory — moved by the starry sky.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'歌舞伎観劇、ハネムーンの思い出だ。',en:"Kabuki play — honeymoon memory.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'旅の醍醐味、二人で味わったわ。',en:"Travel charms — savored together.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'大自然の中、川辺でキャンプもしたな。',en:"Wild-nature — riverside camping too.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'骨董市で買った皿、今も使ってるわ。',en:"Plate from the antique market — still use.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'アトラクションは、若い頃、たくさん回ったね。',en:"Attractions — many in youth.",style:'Warm.'},
    {speaker:'sachiko_grandma',jp:'欧州旅行で、カトリック教の大聖堂、忘れられない。',en:"European trip — Catholic cathedral, unforgettable.",style:'Reflective close.'},
  ]},
  {id:'conv_06040',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan an outdoor-themed event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、屋外イベント、風力発電の見学ツアー、組まんか。',en:"Aoi-san, outdoor event — wind-power tour included?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。天文台観測ナイト、企画しましょう。',en:"Yes. Observatory night — planning.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'観劇とコラボのコース料理、ええなあ。',en:"Theater-collab course menu — nice.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'地元食材の醍醐味、お客様に伝えます。',en:"Local-ingredient charm — convey to guests.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'大自然系のドリンク、ハーブで作ろ。',en:"Wild-nature drinks — herb-based.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'店の小物、骨董の市で仕入れます。',en:"Shop trinkets — sourced at antique fair.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'アトラクション付きのカフェ夜営業、ええで。',en:"Cafe night with attractions — yes.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'カトリック教徒の常連様にも、配慮した別メニュー、用意します。',en:"For Catholic regulars — special menu prepared.",style:'Warm close.'},
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

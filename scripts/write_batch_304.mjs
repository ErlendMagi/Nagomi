import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_304 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['鳴る','さっと','一段と','行き来','ハンカチ','飴','尻尾','足首']
const B_T = ['ポートフォリオ','プリンター','返金','レジュメ','数式','パートナーシップ','概算','アフター']
const C_T = ['儀礼','貫く','浮き彫り','造船','応じる','騙し','辞退','モニタリング']
const D_T = ['メロン','別荘','入賞','賞品','ホームラン','天ぷら','珈琲','トランプ']

const data = [
  // A
  {id:'conv_06041',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat in the evening',lines:[
    {speaker:'sho_child',jp:'ママ、玄関のチャイム、鳴ってるよ。',en:"Mom, doorbell's ringing.",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'はい、さっと出てくるね。',en:"Yes, popping out quickly.",style:'Warm.'},
    {speaker:'sho_child',jp:'外、今日、一段と寒いよ。',en:"Outside — much colder today.",style:'Casual.'},
    {speaker:'yumiko_mom',jp:'お隣との行き来、最近、減ったわね。',en:"Coming and going with neighbors has dropped lately.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ハンカチ、明日のために用意した?',en:"Handkerchief prepped for tomorrow?",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'うん。飴、ポケットに入れておくね。',en:"Yes. Candy in your pocket.",style:'Tender.'},
    {speaker:'sho_child',jp:'犬の尻尾、ぶんぶん振ってる!',en:"Dog's tail wagging wildly!",style:'Excited.'},
    {speaker:'yumiko_mom',jp:'お風呂で、足首、ほぐしてね。',en:"In the bath — loosen your ankles.",style:'Warm close.'},
  ]},
  {id:'conv_06042',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk home',lines:[
    {speaker:'sakura_teen',jp:'駅のチャイム、ホームで鳴る瞬間、好き。',en:"Station chime ringing on the platform — I like it.",style:'Soft teen.'},
    {speaker:'riku_teen',jp:'うん。さっと電車に乗り込もう。',en:"Yeah. Hop in quickly.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'今日の試験、一段と難しかったね。',en:"Today's test — way harder.",style:'Wry.'},
    {speaker:'riku_teen',jp:'駅前の店、行き来が減って、寂しい雰囲気だ。',en:"Station-front shop — fewer customers, lonely.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お母さんがハンカチに名前縫ってくれたの。',en:"Mom sewed my name on the handkerchief.",style:'Bright.'},
    {speaker:'riku_teen',jp:'飴、いる?ポケットに余ってる。',en:"Candy — want one? Extra in my pocket.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'犬の尻尾、振り方で気分わかるよね。',en:"Dog's tail — wagging shows their mood.",style:'Animated.'},
    {speaker:'riku_teen',jp:'長く立ったから、足首、痛い。',en:"Stood long — ankles sore.",style:'Wry close.'},
  ]},
  {id:'conv_06043',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends share a quiet afternoon',lines:[
    {speaker:'mei_romantic',jp:'店のベル、すぐ鳴る時間帯ね。',en:"Shop bell — peak ringing time.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'うん。さっとお茶、淹れるね。',en:"Yes. I'll quickly steep tea.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'今日、空気が一段と冷たいね。',en:"Air's much colder today.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'お客様の行き来、午後、増えてきた。',en:"Customer flow — picking up afternoons.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'店員さん用のハンカチ、新調するの?',en:"Staff handkerchief — replace?",style:'Curious.'},
    {speaker:'aoi_barista',jp:'うん。試食用の飴、配ってる。',en:"Yes. Handing out sample candies.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'店長の犬、尻尾振って、可愛い。',en:"Manager's dog — tail wagging, cute.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'立ち仕事だから、足首、よく回してる。',en:"Standing job — I rotate ankles often.",style:'Warm close.'},
  ]},
  {id:'conv_06044',cluster:'A',ambient:'park_distant_birds',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple walks in the park',lines:[
    {speaker:'hiroshi_elder',jp:'公園の鐘、夕方に鳴るな。',en:"Park bell rings at dusk.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。さっと帰り支度しましょ。',en:"Yes. Pack up quickly.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'冷え込み、一段と厳しいな。',en:"Cold — much sharper.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'若い夫婦の行き来、公園で増えたわね。',en:"Young couples — more in the park.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'ハンカチ、ベンチに忘れずに。',en:"Handkerchief — don't leave on the bench.",style:'Calm.'},
    {speaker:'sachiko_grandma',jp:'孫に、飴、買って帰りましょう。',en:"Buy candy for the grandkids.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'隣の犬、尻尾振って、こっち来た。',en:"Neighbor's dog — tail-wagging, coming our way.",style:'Bright.'},
    {speaker:'sachiko_grandma',jp:'帰ったら、足首、温めましょう。',en:"Back home — warm the ankles.",style:'Warm close.'},
  ]},
  {id:'conv_06045',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai and a teen meet after school',lines:[
    {speaker:'ren_uni',jp:'桜、店の音楽、鳴ってないね。',en:"Sakura — store music isn't on.",style:'Easy senpai.'},
    {speaker:'sakura_teen',jp:'はい。さっと注文を済ませて、席に着きましょう。',en:"Yes. Order quickly, take seats.",style:'Earnest teen.'},
    {speaker:'ren_uni',jp:'今日、一段と忙しい店内だな。',en:"Way busier today.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'駅周辺の行き来、増えました。',en:"Station-area flow — up.",style:'Bright.'},
    {speaker:'ren_uni',jp:'ハンカチ、貸そうか。',en:"Hankie — lend you?",style:'Warm.'},
    {speaker:'sakura_teen',jp:'飴、お返しに、どうぞ。',en:"Candy — for you in return.",style:'Cheerful.'},
    {speaker:'ren_uni',jp:'店の犬、尻尾、嬉しそう。',en:"Shop dog — tail looks happy.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'帰り、急いで歩いたら、足首、痛みます。',en:"Walked fast home — ankle hurts.",style:'Wry close.'},
  ]},

  // B
  {id:'conv_06046',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews business operations',lines:[
    {speaker:'hiroshi_boss',jp:'投資のポートフォリオ、見直す時期だ。',en:"Investment portfolio — time to review.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。プリンター更新も、予算に含めます。',en:"Yes. Printer replacement — in the budget.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'返金対応、迅速にしろ。',en:"Refund response — swift.",style:'Direction.'},
    {speaker:'kenji_office',jp:'新入社員のレジュメ、集約しました。',en:"New-hire resumes — aggregated.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'分析の数式、共有しろ。パートナーシップ拡大、進めろ。',en:"Analysis formulas — share. Expand partnership.",style:'Direction.'},
    {speaker:'kenji_office',jp:'概算予算、来週役員会で報告。',en:"Rough budget — report at next-week board.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'アフターサービス、顧客満足の核心だ。',en:"Aftercare — heart of customer satisfaction.",style:'Decisive close.'},
  ]},
  {id:'conv_06047',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss a vendor change',lines:[
    {speaker:'yuki_office',jp:'資産のポートフォリオ、来期の重点だ。',en:"Asset portfolio — next term's focus.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。古いプリンター、リースから買い切りに切替予定です。',en:"Yes. Old printers — lease to buyout.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'返金請求、増えてるね。',en:"Refund claims — rising.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。応募者のレジュメ、選別しました。',en:"Yes. Applicant resumes — screened.",style:'Update.'},
    {speaker:'yuki_office',jp:'KPIの数式、改訂を。パートナーシップ案件、優先しよう。',en:"KPI formulas — revise. Prioritize partnership deals.",style:'Direction.'},
    {speaker:'kenji_office',jp:'概算、明日提示します。アフター対応、強化中。',en:"Rough — submit tomorrow. Aftercare — strengthening.",style:'Close.'},
  ]},
  {id:'conv_06048',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern on finance',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、企業のポートフォリオ、長期と短期、バランスだ。',en:"Ren, corporate portfolios — long & short balance.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。プリンターの保守費用、見えにくいコストですね。',en:"Yes. Printer-maintenance costs are hidden.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'返金処理、ブランド毀損を防ぐ重要業務だ。',en:"Refund handling protects brand damage.",style:'Direction.'},
    {speaker:'ren_uni',jp:'就活、レジュメに何を書くか、悩みます。',en:"Job hunt — what to put on resume, troubled.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'数式や定量データ、具体例で示せ。',en:"Show formulas and quantitative data — with examples.",style:'Direction.'},
    {speaker:'ren_uni',jp:'パートナーシップの構築、若手にも参加機会、ありますか。',en:"Partnership-building — youth participation possible?",style:'Curious.'},
    {speaker:'hiroshi_boss',jp:'うん。概算プランも、君に作ってもらう。アフターケアの精神、忘れるな。',en:"Yes. You'll draft rough plans. Don't forget aftercare spirit.",style:'Close.'},
  ]},
  {id:'conv_06049',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on financial compliance',lines:[
    {speaker:'takeda_officer',jp:'御社のポートフォリオ、健全です。',en:"Your portfolio — sound.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。プリンター記録、監査用に保存しています。',en:"Yes. Printer logs — kept for audit.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'返金詐欺、報告が増えています。',en:"Refund fraud — reports rising.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。応募レジュメの照合、慎重に行います。',en:"Yes. Resume verification — careful.",style:'Update.'},
    {speaker:'takeda_officer',jp:'評価数式、不正にならないよう、外部監査も。',en:"Assessment formulas — external audit too.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'警察との情報パートナーシップ、強化します。',en:"Police info partnership — strengthen.",style:'Commitment.'},
    {speaker:'takeda_officer',jp:'概算情報、社内アフターケアにも反映を。',en:"Rough data — reflect in internal aftercare.",style:'Close.'},
  ]},
  {id:'conv_06050',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec advises on long-term strategy',lines:[
    {speaker:'hiroshi_elder',jp:'ポートフォリオ理論、若い頃に学んだな。',en:"Portfolio theory — learned in youth.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。今はプリンター一台でも、複合機能を求める時代です。',en:"Yes. Today, one printer demands multi-function.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'返金対応、信頼の土台だ。',en:"Refund response — trust's foundation.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'若手のレジュメ、目を通して才能を見抜きたい。',en:"Skim youth resumes — discern talent.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'評価数式、人を測りすぎるな。パートナーシップ、長く保て。',en:"Formulas — don't over-measure people. Sustain partnership.",style:'Wise.'},
    {speaker:'hiroshi_boss',jp:'概算予算、確定前に二度確認します。',en:"Rough budget — double-check before final.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'アフターサービス、企業の魂だ。',en:"Aftercare — the firm's soul.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06051',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs about a fraud case',lines:[
    {speaker:'takeda_officer',jp:'本件、被害者への儀礼的な挨拶も、慎重に扱います。',en:"This case — ceremonial victim greetings also handled carefully.",style:'Calm.'},
    {speaker:'ren_uni',jp:'捜査方針を貫く姿勢、印象的ですね。',en:"Resolve to follow through — striking.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。組織内部の構造、浮き彫りになりました。',en:"Yes. Internal structure — surfaced.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'造船業界での詐欺、共通点があるんですか。',en:"Shipbuilding-industry fraud — commonalities?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。被害者の要求に応じる迅速対応、警察の使命です。',en:"Yes. Swift response to victims' requests — police mission.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'騙し手口、業界全体で監視必要ですね。',en:"Deception methods — industry-wide monitoring needed.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。出頭辞退の容疑者、モニタリング下にあります。',en:"Yes. Suspects refusing appearance — under monitoring.",style:'Firm close.'},
  ]},
  {id:'conv_06052',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher and student discuss a paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、儀礼研究、丁寧でしたね。',en:"Paper — ceremonial research, careful.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。基本姿勢を貫く編集、難しかったです。',en:"Yes. Maintaining baseline stance — tough.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'地域社会の課題が浮き彫りになる章、優れていますね。',en:"Chapter surfacing community issues — excellent.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'造船業の衰退、地域経済との接続、論じました。',en:"Shipbuilding decline & local-economy link — discussed.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'証言に応じる被害者、本心を引き出せましたか。',en:"Responding witnesses — got their true feelings?",style:'Reflective.'},
    {speaker:'ren_uni',jp:'過去の騙し事例、参考文献に多数加えました。',en:"Past deception cases — many in references.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'登壇を辞退した識者、別途モニタリング論文、紹介できますよ。',en:"Refusing experts — separate monitoring paper, I can intro.",style:'Reflective close.'},
  ]},
  {id:'conv_06053',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor briefs a reporter about ethics',lines:[
    {speaker:'saito_doctor',jp:'医療現場の儀礼、患者との信頼に直結します。',en:"Medical-field rites tie directly to patient trust.",style:'Calm.'},
    {speaker:'ren_uni',jp:'公平な治療を貫く姿勢、医師の使命ですね。',en:"Fair-treatment commitment — doctor's mission.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。誤診の構造、過去の事例で浮き彫りになりました。',en:"Yes. Misdiagnosis structure — surfaced in past cases.",style:'Patient.'},
    {speaker:'ren_uni',jp:'造船業健康診断のように、特殊な専門医も必要ですか。',en:"Like shipbuilding-industry checkups — specialists needed?",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。患者の希望に応じる柔軟な体制も大切です。',en:"Yes. Flexible response to patient wishes matters.",style:'Patient.'},
    {speaker:'ren_uni',jp:'騙し型の自費診療、規制はありますか。',en:"Deceptive private treatment — regulated?",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。承諾を辞退した患者、丁寧にモニタリングします。',en:"Yes. Patients refusing consent — carefully monitored.",style:'Reflective close.'},
  ]},
  {id:'conv_06054',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews ethics policy',lines:[
    {speaker:'hiroshi_boss',jp:'対外儀礼、欠かすな。',en:"External ceremonies — never skip.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。理念を貫く姿勢、社内で徹底します。',en:"Yes. Adherence to principles — strict.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'業界の課題、浮き彫りにせよ。',en:"Industry issues — surface.",style:'Direction.'},
    {speaker:'kenji_office',jp:'造船関連の取引、再点検します。',en:"Shipbuilding-related dealings — re-check.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'監査に応じる体制、整えろ。',en:"Audit-responsive structure — set.",style:'Direction.'},
    {speaker:'kenji_office',jp:'騙し被害、再発防止策、共有しました。',en:"Deception-victim recurrence prevention — shared.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'役員辞退者、モニタリングを継続。',en:"Refusing executives — continue monitoring.",style:'Decisive close.'},
  ]},
  {id:'conv_06055',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、地域研究、儀礼の歴史、興味深いですね。',en:"Sakura — local rites history, intriguing.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。地元の伝統を貫く保存会、取材しました。',en:"Yes. Tradition-preservation society — interviewed.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'高齢化の課題、浮き彫りになりましたね。',en:"Aging issues — surfaced.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'造船関係の元職人さんの話、貴重でした。',en:"Shipbuilding-veteran stories — precious.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'要望に応じるインタビュー、難しい場面もありました。',en:"Responding to interview requests — some hard.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'昔の騙し被害、口を閉ざす方も。',en:"Past deception victims — some silent.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'参加を辞退する方、モニタリング、慎重にね。',en:"Refusing participants — careful monitoring.",style:'Reflective close.'},
  ]},

  // D
  {id:'conv_06056',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends plan a weekend',lines:[
    {speaker:'mei_romantic',jp:'お中元、メロンを贈ろうかな。',en:"Mid-year gift — melon?",style:'Soft.'},
    {speaker:'aoi_barista',jp:'いいね。先輩の別荘、招待されてるんでしょ?',en:"Lovely. Senpai's villa — invited?",style:'Bright.'},
    {speaker:'mei_romantic',jp:'うん。昨日のコンクール、ピアノ部、入賞したの。',en:"Yes. Yesterday's competition — piano section placed.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'賞品、何だった?',en:"Prize — what was it?",style:'Curious.'},
    {speaker:'mei_romantic',jp:'野球で言うホームランみたいに、大物の賞だったわ。',en:"Like a baseball homer — major prize.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'お祝いに、天ぷら食べに行こう。',en:"Celebrate — let's get tempura.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'食後、珈琲もね。',en:"Coffee after.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'夜は、家でトランプで遊ぼうか。',en:"At night — play cards at home?",style:'Warm close.'},
  ]},
  {id:'conv_06057',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son spend a summer day',lines:[
    {speaker:'yumiko_mom',jp:'翔、夏のメロン、甘くて美味しいよ。',en:"Sho, summer melon — sweet, tasty.",style:'Warm.'},
    {speaker:'sho_child',jp:'うん!おじいちゃんの別荘、今度連れて行ってもらう?',en:"Yes! Take me to Grandpa's villa next time?",style:'Excited child.'},
    {speaker:'yumiko_mom',jp:'夏休みのコンクール、入賞できたら、嬉しいわね。',en:"Summer contest — if you place, glad.",style:'Soft.'},
    {speaker:'sho_child',jp:'賞品、ぬいぐるみだったら嬉しい!',en:"Prize — if it's a plushie, happy!",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'お兄ちゃん、野球でホームラン打った写真、見せようね。',en:"Show pictures of bro's homer.",style:'Tender.'},
    {speaker:'sho_child',jp:'夕飯、天ぷら作って!',en:"Tempura for dinner!",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お父さんは食後、珈琲飲むかな。',en:"Dad probably wants coffee after.",style:'Reflective.'},
    {speaker:'sho_child',jp:'夜、家族でトランプ大会!',en:"Family card-game tourney tonight!",style:'Animated close.'},
  ]},
  {id:'conv_06058',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens plan a summer activity',lines:[
    {speaker:'sakura_teen',jp:'メロン狩り、ツアーで行きたい。',en:"Melon-picking — wanna go on tour.",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'うん。先輩の別荘、夏休み、招かれてるんだろ?',en:"Yeah. Invited to senpai's villa over summer?",style:'Casual.'},
    {speaker:'sakura_teen',jp:'文化祭、入賞目指して、頑張ってる。',en:"Festival — aiming to place.",style:'Animated.'},
    {speaker:'riku_teen',jp:'賞品、貴重なお菓子セットらしい。',en:"Prize — rare sweets set, I hear.",style:'Bright.'},
    {speaker:'sakura_teen',jp:'野球部、初回でホームラン打ったって!',en:"Baseball — homer in the first!",style:'Excited.'},
    {speaker:'riku_teen',jp:'お祝いに、天ぷら屋、奢ろうか。',en:"Celebrate — treat at the tempura place?",style:'Cheerful.'},
    {speaker:'sakura_teen',jp:'食後、駅前の珈琲店、寄りたい。',en:"After — coffee shop by station.",style:'Wistful.'},
    {speaker:'riku_teen',jp:'夜、家でトランプ、誘ってもいい?',en:"At night — cards at home, can I invite?",style:'Warm close.'},
  ]},
  {id:'conv_06059',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher discusses a documentary',lines:[
    {speaker:'asuka_teacher',jp:'昨夜のドキュメンタリー、メロン農家の取り組み、よかったですね。',en:"Last night's doc — melon farmer's efforts, fine.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。別荘地での観光振興、章として深かった。',en:"Yes. Villa-area tourism revival — deep chapter.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'地域の入賞作品、紹介する場面、印象的でした。',en:"Local prize works featured — striking.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'賞品の協賛、地元企業がよく出していますね。',en:"Prize sponsorship — local firms often.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'野球場でのホームランシーン、地元少年が主役でしたね。',en:"Stadium homer scene — local boy as star.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'伝統の天ぷら店、若手後継者の話も入っていました。',en:"Traditional tempura shop — young successor story too.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'閉幕の珈琲店、海外向けの章で、紹介されていました。',en:"Closing coffee shop — featured in the overseas chapter.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'トランプ大会、地域コミュニティ活動の象徴でした。',en:"Card tourney — symbol of community.",style:'Curious close.'},
  ]},
  {id:'conv_06060',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan a summer fair',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、夏フェア、メロン特集どうや。',en:"Aoi-san, summer fair — melon feature?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'いいですね。郊外の別荘地ロケでの撮影も入れたいです。',en:"Lovely. Add suburb-villa-area shoot.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'入賞メニュー、コンテストで決めよか。',en:"Prize menu — pick via contest?",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'賞品は、限定の珍味、いかがでしょう。',en:"Prize — limited delicacy?",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'宣伝動画、ホームランみたいに派手にやろ。',en:"Promo video — homer-flashy.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'天ぷらのコラボメニュー、別店舗と組んでみます。',en:"Tempura collab menu — pair with sister branch.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'珈琲も、夏ブレンド、出すで。',en:"Coffee — summer blend launch.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'店頭に、トランプ占いコーナー、面白そう。',en:"Card-divination corner at the storefront — fun.",style:'Warm close.'},
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_299 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['見本','北側','理不尽','歩ん','裏切ら','尽くす','宅配','治る']
const B_T = ['功績','加わり','根幹','取り入れる','利回り','多岐','補充','一大']
const C_T = ['酵素','混同','判る','落ち着か','投下','党員','政界','接待']
const D_T = ['杖','灰','紐','玩具','錠','過疎','緩やか','ペンギン']

const data = [
  // A
  {id:'conv_05941',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat after illness',lines:[
    {speaker:'sho_child',jp:'ママ、宅配のお薬、もう届いた?',en:"Mom, did the delivery meds arrive?",style:'Soft child.'},
    {speaker:'yumiko_mom',jp:'うん。明日には熱、治るといいわね。',en:"Yes. Hope the fever heals by tomorrow.",style:'Tender.'},
    {speaker:'sho_child',jp:'クラスの見本帳、北側の机に置いてきちゃった。',en:"Class sample-book — left on the north-side desk.",style:'Wistful.'},
    {speaker:'yumiko_mom',jp:'担任の先生にも、伝えてあるわ。',en:"I've told the homeroom.",style:'Warm.'},
    {speaker:'sho_child',jp:'体育で、ずるくて理不尽なルール、悲しかった。',en:"In PE, an unfair rule — sad.",style:'Subdued.'},
    {speaker:'yumiko_mom',jp:'みんなで歩んできた一年、もう少しよ。',en:"The year we walked together — almost done.",style:'Soft.'},
    {speaker:'sho_child',jp:'友達が裏切らない、と信じてる。',en:"Believe friends won't betray.",style:'Vulnerable.'},
    {speaker:'yumiko_mom',jp:'家族は、いつでもあなたに尽くすよ。',en:"Family devotes to you anytime.",style:'Warm close.'},
  ]},
  {id:'conv_05942',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat over coffee',lines:[
    {speaker:'mei_romantic',jp:'最近、宅配サービス、よく使うようになった。',en:"Lately, using delivery more.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。体調が治るまで、無理しないでね。',en:"Yes. Until you fully heal, don't push.",style:'Gentle.'},
    {speaker:'mei_romantic',jp:'近所の見本市、北側通路がメイン会場だって。',en:"Local sample-show — main area is north-side aisle.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'人混み、理不尽なクレームに遭わないでね。',en:"Crowds — avoid unreasonable complaints.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'歩んできた友情、貴重だよね。',en:"The friendship we walked is precious.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'信じた相手に裏切られたら、辛いけど。',en:"If betrayed by a trusted one, painful, but —",style:'Soft.'},
    {speaker:'mei_romantic',jp:'家族は、本当に尽くす存在ね。',en:"Family truly devotes.",style:'Tender close.'},
  ]},
  {id:'conv_05943',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk home',lines:[
    {speaker:'sakura_teen',jp:'美術部の見本作品、明日提出なのに、まだ未完成。',en:"Art-club sample piece due tomorrow — still unfinished.",style:'Anxious teen.'},
    {speaker:'riku_teen',jp:'教室北側の窓辺、明るくて作業しやすいよな。',en:"Classroom north-side window — bright, easy to work.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'担任の理不尽な締め切り、参るよね。',en:"Homeroom's unfair deadline — brutal.",style:'Subdued.'},
    {speaker:'riku_teen',jp:'一緒に歩んできた仲間、応援してくれるよ。',en:"Friends we walked with cheer.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'親友に裏切られた話、ドラマで観て泣いた。',en:"Drama with friend-betrayal — cried.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'親身に尽くす親友、お前、いるじゃん。',en:"You've got a devoted friend.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'帰りに、宅配ピザ頼もうか。風邪、治るかも。',en:"On the way, delivery pizza? Cold might heal too.",style:'Bright close.'},
  ]},
  {id:'conv_05944',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple reflects',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃の見本写真、北側の棚にあるよ。',en:"Youth-sample photos — on the north-side shelf.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。理不尽な仕打ち、互いに乗り越えたわね。',en:"Yes. Unreasonable treatment — we overcame together.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'長い人生、二人で歩んできた。',en:"Long life — walked together.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'親戚に裏切られた時もあったけど、あなたが支えてくれた。',en:"Relatives betrayed at times, but you supported me.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'家族のために、お前は尽くすほうだったね。',en:"You're the one who devoted to family.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'昨日、宅配でお寿司、頼んだの。',en:"Yesterday — delivery sushi.",style:'Bright.'},
    {speaker:'hiroshi_elder',jp:'風邪、治るまで、ゆっくり食べよう。',en:"Until cold heals, eat slowly.",style:'Warm close.'},
  ]},
  {id:'conv_05945',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai walks with a teen friend',lines:[
    {speaker:'ren_uni',jp:'桜、研究室の見本資料、北側に新しく並んでるよ。',en:"Sakura, new sample materials lined on the north side.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。先輩、理不尽な発表会の制度、相談していいですか。',en:"Yes. Senpai, may I consult on the unfair presentation system?",style:'Earnest teen.'},
    {speaker:'ren_uni',jp:'うん。共に歩んできた後輩のため、力になる。',en:"Yes. For juniors I've walked with, I'll help.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'同期に裏切られた友達もいて、辛そうです。',en:"A friend betrayed by classmate — looks pained.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'信頼に尽くす姿勢、最後は伝わる。',en:"Trust-devoting attitude eventually shows.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'今度、皆で宅配で集まろうって、誘いました。',en:"I invited everyone — gather with delivery food.",style:'Cheerful.'},
    {speaker:'ren_uni',jp:'いいね。心の傷、治るきっかけになる。',en:"Nice. A trigger for healing wounds.",style:'Warm close.'},
  ]},

  // B
  {id:'conv_05946',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews quarterly direction',lines:[
    {speaker:'hiroshi_boss',jp:'今期の功績、まとめろ。',en:"Summarize this term's achievements.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。新規顧客が多く加わり、好調です。',en:"Yes. Many new clients added — solid.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'根幹事業、改革を取り入れるタイミングだ。',en:"Core business — time to take in reforms.",style:'Direction.'},
    {speaker:'kenji_office',jp:'運用面では、利回り重視を多岐にわたって検討中です。',en:"Operationally, yield-priority across many areas under review.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'人員、必要なら補充しろ。一大プロジェクトを成功させる。',en:"Add staff if needed. Make the major project succeed.",style:'Decisive close.'},
  ]},
  {id:'conv_05947',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers review hiring',lines:[
    {speaker:'yuki_office',jp:'人事評価、功績ある社員を昇格に加わりたい。',en:"Performance review — promote those with achievement.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。根幹部署に、最新の評価指標を取り入れる方針です。',en:"Yes. Core sections — adopting new evaluation metrics.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'年金の利回りも、多岐にわたって説明する必要があるね。',en:"Pension yields — must explain across many angles.",style:'Direction.'},
    {speaker:'kenji_office',jp:'補充人員、一大プロジェクトの規模で見積もります。',en:"Replacement staffing — sized for the major project.",style:'Commitment.'},
    {speaker:'yuki_office',jp:'引き続き頼む。',en:"Keep at it.",style:'Close.'},
  ]},
  {id:'conv_05948',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、企業の歴史、創業者の功績から学べ。',en:"Ren, study from the founder's achievements.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。新メンバーが加わり、若返りも進んでいるんですね。',en:"Yes. New members added — rejuvenation progressing.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'根幹を守りつつ、新案を取り入れる柔軟さが鍵だ。',en:"Protecting the core while taking in new ideas — key flexibility.",style:'Direction.'},
    {speaker:'ren_uni',jp:'財務では、利回り、多岐にわたる戦略が必要ですか。',en:"In finance, yield — multi-angle strategy needed?",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'うん。補充人員、市場に応じて、一大プロジェクトに投入する。',en:"Yes. Replacements — by market, deploy into major projects.",style:'Close.'},
  ]},
  {id:'conv_05949',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on a corporate fraud risk',lines:[
    {speaker:'takeda_officer',jp:'御社、過去の功績は申し分ない。',en:"Your firm's past achievements — impeccable.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。新規プロジェクトに、警察と監査人も加わりました。',en:"Yes. Police and auditors joined the new project too.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'根幹システム、外部評価を取り入れることをお勧めします。',en:"Core system — recommend external evaluation.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。利回り偽装の事例、多岐にわたって警察庁から共有頂きました。',en:"Yes. Yield-falsification cases — shared by NPA broadly.",style:'Update.'},
    {speaker:'takeda_officer',jp:'人員補充、一大改革のタイミングですね。',en:"Replacement-hiring — a major-reform moment.",style:'Procedural close.'},
  ]},
  {id:'conv_05950',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'功績は、人が見ている。',en:"Achievements — people see them.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。社内に若手が加わり、活気があります。',en:"Yes. Young hires added — vigor.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'根幹を守れ。流行を取り入れるのは、その後だ。',en:"Protect the core. Adopt trends after.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'資産運用、利回り重視で、多岐にわたって検討中です。',en:"Asset mgmt — yield-focused, multi-angle review.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'補充は急ぐな。一大事業、慎重に進めろ。',en:"Don't rush hiring. Major business — careful.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_05951',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor explains digestive enzymes to a reporter',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、消化酵素の働き、市民にも分かりやすく伝えたいですね。',en:"Ren, digestive enzymes' role — want plain explanation for citizens.",style:'Calm.'},
    {speaker:'ren_uni',jp:'添加物との混同、誤情報が多いです。',en:"Confused with additives — lots of misinfo.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。正しい仕組み、判るように、図解を加えました。',en:"Yes. Diagrams added so readers understand.",style:'Patient.'},
    {speaker:'ren_uni',jp:'落ち着かない患者の不安、減らせると思います。',en:"Restless patients' anxiety — should drop.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'医療界に投下する啓発資料、続けて作成します。',en:"Educational materials drop into the medical world — keep producing.",style:'Informative.'},
    {speaker:'ren_uni',jp:'党員候補や政界も、関心を寄せていますね。',en:"Party-member candidates and politics — also interested.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'接待絡みではない、地道な政策が要ります。',en:"Not entertainment-driven — patient policy needed.",style:'Reflective close.'},
  ]},
  {id:'conv_05952',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs on a healthcare-fraud case',lines:[
    {speaker:'takeda_officer',jp:'健康食品関連、酵素詐欺が増えています。',en:"Health-food sector — enzyme fraud rising.",style:'Calm.'},
    {speaker:'ren_uni',jp:'医薬品との混同、消費者の判断が難しいんですね。',en:"Confused with meds — hard for consumers.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。正しい知識が判るよう、警察も啓発活動を進めます。',en:"Yes. So correct knowledge spreads, police push education too.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'落ち着かない高齢者を狙う詐欺、報告が多いですね。',en:"Targeting restless elderly — many reports.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。情報を全国に投下するキャンペーン、計画中です。',en:"Yes. Nationwide info-drop campaign planned.",style:'Informative.'},
    {speaker:'ren_uni',jp:'党員系団体や政界からも、支援を頂きますか。',en:"Party-affiliated groups and politicians — support?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'接待ではなく、政策レベルで連携します。',en:"Not entertainment — policy-level cooperation.",style:'Firm close.'},
  ]},
  {id:'conv_05953',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher and a student review a policy paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、酵素産業の規制、興味深いですね。',en:"Paper — enzyme-industry regulation, intriguing.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。食品との混同、対策をどう判るように示すか、課題です。',en:"Yes. Confusion with food — how to make it clearly known is a challenge.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'業界が落ち着かない時期、政策投下のタイミング、論じていますね。',en:"During restless industry periods — policy-drop timing discussed.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'党員の代表が、業界との接点、政界での発言力を高めています。',en:"Party reps strengthening industry ties and political voice.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'過剰接待への対応、別章で扱っていますね。',en:"Excessive-entertainment response — separate chapter.",style:'Reflective close.'},
  ]},
  {id:'conv_05954',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews a CSR/policy strategy',lines:[
    {speaker:'hiroshi_boss',jp:'当社の酵素事業、政界の動向も注視しろ。',en:"Our enzyme biz — watch political trends too.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。市民の混同、判るような広告を打っています。',en:"Yes. Citizen confusion — running clarifying ads.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'落ち着かない世論、地道なPRを投下しろ。',en:"Restless public opinion — drop patient PR.",style:'Direction.'},
    {speaker:'kenji_office',jp:'党員候補へのレクチャー、別途設定しました。',en:"Party-candidate lectures — separately scheduled.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'接待は厳禁だ。',en:"Entertainment — strictly forbidden.",style:'Firm close.'},
  ]},
  {id:'conv_05955',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher and a teen review a project on consumer issues',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、酵素を巡る誤解、自由研究のテーマね。',en:"Sakura, enzyme misconceptions — your study theme.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。サプリと混同しないよう、判るような図を作りました。',en:"Yes. To avoid supplement confusion, made clarifying diagrams.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'落ち着かない消費者層への教育、章として大切ですね。',en:"Educating restless consumers — vital as a chapter.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'情報投下の頻度、行政に依存している点、課題です。',en:"Info-drop frequency — dependence on government is a challenge.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'党員候補や政界の関心、接待が絡まないよう、健全に。',en:"Party candidates and politicians — keep clean of entertainment.",style:'Reflective close.'},
  ]},

  // D
  {id:'conv_05956',cluster:'D',ambient:'park_distant_birds',cast:['hiroshi_elder','sho_child'],targets:D_T,scenario:'A grandfather walks his grandson at the zoo',lines:[
    {speaker:'hiroshi_elder',jp:'翔、爺ちゃんの杖、しっかり持ってるよ。',en:"Sho, holding my cane firm.",style:'Reflective.'},
    {speaker:'sho_child',jp:'おじいちゃん、暖炉の灰、家に残ってるの?',en:"Grandpa — fireplace ash still at home?",style:'Curious child.'},
    {speaker:'hiroshi_elder',jp:'うん。お祖母ちゃんが、ちゃんと掃除した。',en:"Yes. Grandma cleaned it.",style:'Calm.'},
    {speaker:'sho_child',jp:'お土産の紐付きの玩具、ありがとう!',en:"Souvenir string-tied toy — thanks!",style:'Excited.'},
    {speaker:'hiroshi_elder',jp:'金庫の錠、明日見せてあげるよ。',en:"Safe lock — show you tomorrow.",style:'Warm.'},
    {speaker:'sho_child',jp:'動物園、過疎の地域から来た動物もいる?',en:"Zoo — animals from depopulated areas too?",style:'Probe.'},
    {speaker:'hiroshi_elder',jp:'うん。緩やかなペースで、見ていこう。',en:"Yes. Easy pace, let's tour.",style:'Tender.'},
    {speaker:'sho_child',jp:'ペンギンの赤ちゃん、見たい!',en:"Want to see baby penguins!",style:'Eager close.'},
  ]},
  {id:'conv_05957',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son tidy up at home',lines:[
    {speaker:'yumiko_mom',jp:'翔、おじいちゃんの杖、玄関に立てかけといてね。',en:"Sho, lean Grandpa's cane at the entrance.",style:'Warm.'},
    {speaker:'sho_child',jp:'うん。焚き火の灰、ベランダにこぼれてた。',en:"Yes. Bonfire ash spilled on the balcony.",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'凧の紐、長すぎないかしら。',en:"Kite string — not too long?",style:'Soft.'},
    {speaker:'sho_child',jp:'おもちゃ箱、玩具がいっぱい。',en:"Toy box — full of toys.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'おじいちゃんの金庫、錠を直しに来てもらうわ。',en:"Grandpa's safe — having a tech fix the lock.",style:'Practical.'},
    {speaker:'sho_child',jp:'隣の村は過疎で、家もまばらだね。',en:"Next village's depopulated — houses sparse.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'緩やかな坂を歩くと、気持ちいいね。',en:"Walking the gentle slope feels good.",style:'Warm.'},
    {speaker:'sho_child',jp:'絵本のペンギン、見せて!',en:"Show me the penguin picture book!",style:'Eager close.'},
  ]},
  {id:'conv_05958',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends visit a museum',lines:[
    {speaker:'mei_romantic',jp:'昨日の博物館、職人が使ってた古い杖、興味深かった。',en:"Yesterday's museum — old artisan canes, intriguing.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'火山の灰の展示も、迫力あったよね。',en:"Volcanic-ash display had impact.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'伝統的な紐結びコーナー、写真撮った。',en:"Traditional knotting corner — took photos.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'昭和の玩具展、子供時代を思い出す。',en:"Showa-toy show — recalls childhood.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'蔵に使われた錠、頑丈そうだった。',en:"Storehouse locks looked sturdy.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'過疎の村落から寄贈された資料も、多かったね。',en:"Many materials donated from depopulated villages.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'緩やかな照明、雰囲気あったね。',en:"Soft lighting was atmospheric.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'最後の展示室、ペンギン剥製、子供たちに大人気。',en:"Final room — penguin specimens, hit with kids.",style:'Warm close.'},
  ]},
  {id:'conv_05959',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat after watching a documentary',lines:[
    {speaker:'sakura_teen',jp:'昨夜のドキュメンタリー、伝統工芸の杖職人、すごかった。',en:"Last night's doc — traditional cane-artisan was amazing.",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'うん。火事で残った灰の中から、品物を救う場面、印象的。',en:"Yeah. Saving items from fire-ash scenes were striking.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'紐結びの技、繊細で、心、奪われた。',en:"Knotting craft — delicate, captivating.",style:'Animated.'},
    {speaker:'riku_teen',jp:'伝統玩具、博物館で見たくなった。',en:"Traditional toys — wanna see at the museum.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'蔵の錠、職人手作りなんだって。',en:"Storehouse locks — handmade by artisans.",style:'Probe.'},
    {speaker:'riku_teen',jp:'過疎の村、後継ぎがいなくて、心配。',en:"Depopulated villages — no successors, worrying.",style:'Subdued.'},
    {speaker:'sakura_teen',jp:'川沿いの緩やかな流れが、印象的だった。',en:"Riverside's gentle flow was striking.",style:'Wistful.'},
    {speaker:'riku_teen',jp:'最後にペンギン、出てきたの、なぜか笑った。',en:"Penguins at the end — somehow made me laugh.",style:'Wry close.'},
  ]},
  {id:'conv_05960',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan a craft-themed menu',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、地方クラフトフェア、杖デザインのカトラリーを試そか。',en:"Aoi-san, regional craft fair — try cane-design cutlery.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'いいですね。窯の灰を釉薬に使った器、限定で。',en:"Lovely. Ash-glazed dishes, limited.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'店内、紐使ったオブジェ、こだわって配置しよか。',en:"In-store — knotted decor, careful placement.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'伝統玩具コーナー、お子様向けに、用意します。',en:"Traditional-toy corner for kids — I'll prep.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'金庫の錠みたいな丈夫な瓶、輸入できる?',en:"Lock-strong jars — importable?",style:'Practical.'},
    {speaker:'aoi_barista',jp:'過疎地の協同組合と連携、できるか調べます。',en:"Linking with depopulated-area co-ops — I'll check.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'店BGMは、緩やかなジャズで決まりや。',en:"BGM — settle on slow jazz.",style:'Warm.'},
    {speaker:'aoi_barista',jp:'マスコットに、ペンギンを起用するのも、いかがでしょう。',en:"Mascot — penguin would be lovely too.",style:'Bright close.'},
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

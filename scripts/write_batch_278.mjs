import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_278 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['無意味','驚異','絶妙','暗黙','たまり','お祈り','お天気','引け']
const B_T = ['通路','通話','品種','実体','原点','ネーム','努める','写し']
const C_T = ['肥料','農産物','発動','保安','勤労','教徒','陳述','軍人']
const D_T = ['上野','成田','格安','ライス','蓋','マック','オーラ','ダーク']

const data = [
  {id:'conv_05521',cluster:'A',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:A_T,scenario:'Two cafe friends share a quiet moment',lines:[
    {speaker:'mei_romantic',jp:'今日のお天気、絶妙な秋晴れだね。',en:"Today's weather is splendid autumn clarity.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん。お店の窓辺、たまり場として常連さんが集う場所。',en:"Yeah. The window seat is a gathering spot for regulars.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'お客さん同士の暗黙のルールも、面白いよね。',en:"The unspoken rules among customers are interesting too.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'うん。常連さんが急に話しかけてくる驚異の心地よさ。',en:"Regulars suddenly chatting — a marvelous comfort.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'明日の試験、お祈りしておくね。',en:"I'll pray for tomorrow's exam.",style:'Caring.'},
    {speaker:'aoi_barista',jp:'ありがとう。気が引けたら来てくれていいよ。',en:"Thanks. If you feel shy come over anyway.",style:'Warm close.'},
  ]},
  {id:'conv_05522',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk home discussing exam stress',lines:[
    {speaker:'sakura_teen',jp:'今日のお天気は最高なのに、テスト勉強がたまりすぎてヘン。',en:"Weather's perfect, but study has piled up too much.",style:'Animated teen.'},
    {speaker:'riku_teen',jp:'頑張れって暗黙のプレッシャー、家族から感じる。',en:"I feel unspoken pressure from family to push through.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'頑張りすぎても無意味って気もするけど…。',en:"Overdoing feels meaningless too…",style:'Reflective.'},
    {speaker:'riku_teen',jp:'絶妙なバランスが必要だな。',en:"A delicate balance is needed.",style:'Knowing.'},
    {speaker:'sakura_teen',jp:'神社でお祈りしてから帰る予定。気が引ける時こそ、外で深呼吸する。',en:"Heading home after shrine prayers. When I feel shy, deep-breathing outside helps.",style:'Soft.'},
    {speaker:'riku_teen',jp:'うん、驚異の集中力出して、いい結果出そう。',en:"Yes — let's pull out astonishing focus and get good results.",style:'Warm close.'},
  ]},
  {id:'conv_05523',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom calms her young son before a school event',lines:[
    {speaker:'sho_child',jp:'ママ、明日のお天気、心配だよ。',en:"Mom, tomorrow's weather worries me.",style:'Anxious child.'},
    {speaker:'yumiko_mom',jp:'予報は絶妙な晴れ間って言ってたから大丈夫よ。',en:"The forecast says a perfect clear spell, so it'll be fine.",style:'Reassuring.'},
    {speaker:'sho_child',jp:'発表で頭真っ白になるの、無意味な不安かな…。',en:"Going blank during my presentation — is that pointless worry?",style:'Soft.'},
    {speaker:'yumiko_mom',jp:'暗黙の不安は、お母さんがお祈りしてあげるから。',en:"Mom will pray over those quiet worries.",style:'Warm.'},
    {speaker:'sho_child',jp:'失敗で気が引けても、笑顔で済ませばいい?',en:"If I mess up and feel shy, just smile through it?",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'うん。驚異の精神力で、笑顔キープ!',en:"Yes — with marvelous willpower, keep that smile!",style:'Cheerful close.'},
  ]},
  {id:'conv_05524',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple talks at breakfast',lines:[
    {speaker:'hiroshi_elder',jp:'今朝のお天気、絶妙な秋晴れだ。',en:"This morning's weather is fine autumn clarity.",style:'Soft elder.'},
    {speaker:'sachiko_grandma',jp:'庭の落ち葉、たまりすぎて、後で掃除しないと。',en:"Garden leaves piled too high — I'll need to sweep later.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'家事の手伝い、暗黙のうちに私の役目になってきたなあ。',en:"Household help has tacitly become my job.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'ふふ、驚異の進歩ね。お祈りも一緒にしましょう。',en:"Hehe — astonishing progress. Let's pray together too.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'最近、気が引ける場面はあまり無くなったよ。',en:"Lately, moments of shyness have grown rare.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'無意味な気遣いをやめて、自分らしく過ごせばいい。',en:"Drop meaningless concerns and live like yourself.",style:'Wise close.'},
  ]},
  {id:'conv_05525',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A uni student listens to a teen friend\'s anxiety',lines:[
    {speaker:'sakura_teen',jp:'先輩、最近、無意味な不安がたまり続けるんです。',en:"Senpai, lately meaningless anxiety keeps piling.",style:'Vulnerable.'},
    {speaker:'ren_uni',jp:'お天気でも変わるから、絶妙な切り替えタイミング、見つけよう。',en:"Mood shifts even with weather — find a delicate switch moment.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'親しい友達の前でも、気が引けて話せなくて。',en:"Even with close friends I feel shy and can't talk.",style:'Soft.'},
    {speaker:'ren_uni',jp:'暗黙の理解、家族の支えが効くこともあるよ。',en:"Unspoken understanding and family support can help.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'今日帰る前に、お祈りに寄っていきます。',en:"Before heading home today, I'll stop by to pray.",style:'Resolved.'},
    {speaker:'ren_uni',jp:'いい習慣だ。驚異の回復力、内側に持ってるから大丈夫。',en:"Good habit. You hold marvelous resilience inside — you'll be fine.",style:'Warm close.'},
  ]},

  {id:'conv_05526',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews a product-naming proposal',lines:[
    {speaker:'hiroshi_boss',jp:'新商品のネーム、原点に立ち返って決めたか?',en:"For the new product name, did you decide returning to the origin?",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社内通話で実体ある声を集め、最終案を絞りました。',en:"Yes. Via in-house calls, real voices were gathered to narrow the final.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'品種別の通路展示、改善に努めてくれ。',en:"Per product-variant aisle displays, work on improvements.",style:'Direction.'},
    {speaker:'kenji_office',jp:'承知しました。提案書の写しも、本日中に共有します。',en:"Understood. I'll share the proposal copies by today.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'頼む。',en:"Please.",style:'Close.'},
  ]},
  {id:'conv_05527',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers prep a store-layout review',lines:[
    {speaker:'yuki_office',jp:'店内の通路、品種ごとの動線、見直したい。',en:"Store aisles — review flow lines per product variant.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい、実体調査のデータ、原点となる現場で取りました。',en:"Yes — field study data was taken at the site that's the origin.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'広告のネーム、シンプルに努めよう。',en:"Ad naming — strive for simplicity.",style:'Strategic.'},
    {speaker:'kenji_office',jp:'通話確認の議事録、写しを部内へ回します。',en:"For confirmation calls, I'll circulate minute copies internally.",style:'Update.'},
    {speaker:'yuki_office',jp:'よろしく。',en:"Thanks.",style:'Close.'},
  ]},
  {id:'conv_05528',cluster:'B',ambient:'office_quiet_low',cast:['ren_uni','yuki_office'],targets:B_T,scenario:'A uni intern interviews a manager about retail design',lines:[
    {speaker:'ren_uni',jp:'店舗の通路設計、何を基準にしてますか。',en:"Store-aisle design — what are the criteria?",style:'Polite.'},
    {speaker:'yuki_office',jp:'品種別の売れ筋を、実体ある購買データから読み取って。',en:"We read variant best-sellers from real purchase data.",style:'Helpful.'},
    {speaker:'ren_uni',jp:'販促ネームの決定、社内通話で議論するんですか。',en:"Promo naming decisions are debated by internal call?",style:'Probe.'},
    {speaker:'yuki_office',jp:'はい。改善に努めるためのプロセスです。',en:"Yes. A process aiming at improvement.",style:'Informative.'},
    {speaker:'ren_uni',jp:'資料の写し、いただけますか。',en:"Could I get a copy of the materials?",style:'Polite.'},
    {speaker:'yuki_office',jp:'はい。原点に立ち戻った報告書、共有します。',en:"Yes. The back-to-origin report — I'll share.",style:'Close.'},
  ]},
  {id:'conv_05529',cluster:'B',ambient:'cafe_quiet_chatter',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors a younger boss on product strategy',lines:[
    {speaker:'hiroshi_elder',jp:'商品ネーム、原点を忘れるな。',en:"Product names — don't forget the origin.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。品種ごとの実体を、毎週通話で確認しています。',en:"Yes. Each variant's reality is confirmed weekly by call.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'改善に努めるのは結構だが、通路の利便性も忘れずに。',en:"Striving to improve is fine, but don't forget aisle usability.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'承知しております。指摘の写しを、社内に展開します。',en:"Understood. A copy of your guidance will be circulated.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'よし。',en:"Good.",style:'Wise close.'},
  ]},
  {id:'conv_05530',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:B_T,scenario:'A police officer briefs a uni reporter about a retail-safety case',lines:[
    {speaker:'takeda_officer',jp:'商業施設の通路、保安上の議論、よく話題に上ります。',en:"Mall aisles — security debates often surface.",style:'Calm.'},
    {speaker:'ren_uni',jp:'品種別の通話確認、行うこともあるんですか。',en:"Are there variant-specific confirmation calls too?",style:'Polite probe.'},
    {speaker:'takeda_officer',jp:'はい。実体ある現場検証も、原点に立つ仕事です。',en:"Yes. Real on-site verification is back-to-origin work.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'通報ネーム、警察側で記録されてるんでしょうか。',en:"Reporter names — are they kept on the police side?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'匿名で記録に努めますが、写しの管理は厳重です。',en:"We strive to keep records anonymous; copy management is strict.",style:'Informative.'},
    {speaker:'ren_uni',jp:'ありがとうございます。',en:"Thank you.",style:'Close.'},
  ]},

  {id:'conv_05531',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher walks a uni student through an agriculture policy paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、肥料政策と農産物の流通を扱うんですね。',en:"Your paper covers fertilizer policy and agri-product distribution.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。緊急時の発動条件、保安基準も論じます。',en:"Yes. Emergency-trigger conditions and safety standards too.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'勤労意欲の低下が農村部で目立ちますね。',en:"Decline in work motivation is noticeable in rural areas.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'宗教教徒の互助システムが、歴史的に支えになった例もあります。',en:"Mutual-aid systems among religious adherents historically supported it too.",style:'Plan.'},
    {speaker:'asuka_teacher',jp:'証人の陳述、丁寧に引用してください。',en:"Carefully quote witness testimony.",style:'Suggestion.'},
    {speaker:'ren_uni',jp:'退役軍人のインタビューも、補足資料に入れます。',en:"Retired-soldier interviews go in supplements too.",style:'Close.'},
  ]},
  {id:'conv_05532',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss and his manager discuss a food-industry article',lines:[
    {speaker:'hiroshi_boss',jp:'この記事、肥料コストの高騰と農産物価格、両面から扱ってるな。',en:"This piece covers fertilizer-cost surge and agri prices.",style:'Boss.'},
    {speaker:'kenji_office',jp:'はい。安全保安基準の発動も、業界で議論になっています。',en:"Yes. Safety-regulation triggers are an industry topic.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'勤労人口が減ってる地域、どう支えるか。',en:"Areas with shrinking workforce — how to support?",style:'Analytical.'},
    {speaker:'kenji_office',jp:'教徒コミュニティが運営する協同組合、注目です。',en:"Co-ops run by religious communities are noteworthy.",style:'Insightful.'},
    {speaker:'hiroshi_boss',jp:'国会の陳述記録、参考になる。退役軍人の体験記も興味深い。',en:"Diet testimony records are useful. Retired-soldier memoirs are interesting too.",style:'Decisive.'},
    {speaker:'kenji_office',jp:'承知しました。',en:"Understood.",style:'Brief close.'},
  ]},
  {id:'conv_05533',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a uni reporter about rural security',lines:[
    {speaker:'takeda_officer',jp:'最近、肥料倉庫の保安、強化してます。',en:"Recently, fertilizer-warehouse security has been strengthened.",style:'Calm.'},
    {speaker:'ren_uni',jp:'農産物盗難、発動した警備計画があるんですか。',en:"Was a deployed security plan triggered for agri-product theft?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。勤労従事者からの陳述も参考にしました。',en:"Yes. Statements from work crews were also referenced.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'教徒団体や、退役軍人会の協力もあったとか。',en:"There was cooperation from religious bodies and retired-soldier associations too?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。地域全体の取り組みです。',en:"Yes — a whole-community initiative.",style:'Informative.'},
    {speaker:'ren_uni',jp:'ありがとうございます。',en:"Thank you.",style:'Close.'},
  ]},
  {id:'conv_05534',cluster:'C',ambient:'living_room_quiet',cast:['hiroshi_elder','ren_uni'],targets:C_T,scenario:'A uni student interviews a retired farmer',lines:[
    {speaker:'ren_uni',jp:'長年、農業に携わってこられたんですよね。',en:"You've long worked in agriculture.",style:'Polite.'},
    {speaker:'hiroshi_elder',jp:'うん。肥料の質と農産物の出来、密接につながっている。',en:"Yes. Fertilizer quality and product yield are closely tied.",style:'Veteran.'},
    {speaker:'ren_uni',jp:'保安基準の発動、現場では大変でしたか。',en:"Was triggering safety standards rough in the field?",style:'Probe.'},
    {speaker:'hiroshi_elder',jp:'勤労意欲の高い若者ほど、丁寧に取り組んでくれた。',en:"Younger ones with strong work motivation took it carefully.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'地域の教徒の方々との関わり、強かったんですか。',en:"Were ties with local religious adherents strong?",style:'Curious.'},
    {speaker:'hiroshi_elder',jp:'うん。退役軍人会の支援も受け、陳述書を集めた経験もある。',en:"Yes. With retired-soldier support, I once gathered statements.",style:'Wise close.'},
  ]},
  {id:'conv_05535',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','sakura_teen'],targets:C_T,scenario:'A doctor explains agricultural health to a teen',lines:[
    {speaker:'saito_doctor',jp:'桜さん、肥料と農薬の関係、健康面で重要なんですよ。',en:"Sakura, fertilizer-pesticide ties matter for health.",style:'Friendly.'},
    {speaker:'sakura_teen',jp:'農産物の安全基準、誰が発動するんですか。',en:"Who triggers agri-product safety standards?",style:'Curious teen.'},
    {speaker:'saito_doctor',jp:'保安部局です。勤労環境の保護も含めて。',en:"The safety bureau, including protection of work environments.",style:'Patient.'},
    {speaker:'sakura_teen',jp:'教徒団体が地域支援している例もあるんですよね。',en:"Some religious groups support communities too, right?",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。証人の陳述、医学的にも重みがあります。',en:"Yes. Witness statements carry medical weight too.",style:'Informative.'},
    {speaker:'sakura_teen',jp:'退役軍人の方の健康調査、どう進めるんですか。',en:"How are health surveys of retired soldiers conducted?",style:'Engaged.'},
    {speaker:'saito_doctor',jp:'定期的なフォローアップで、長期データを蓄積します。',en:"Through regular follow-ups, accumulating long-term data.",style:'Close.'},
  ]},

  {id:'conv_05536',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens plan a Tokyo day trip',lines:[
    {speaker:'sakura_teen',jp:'土曜、上野動物園と成田空港の見学ツアー、両方行きたい!',en:"Saturday I want both Ueno Zoo and the Narita Airport tour!",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'いいね。格安のフリーパス使えるって。',en:"Sure. We can use the cheap free-pass apparently.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'お昼は空港のフードコートでライス系の定食。',en:"Lunch — rice-set meals at the airport food court.",style:'Plan.'},
    {speaker:'riku_teen',jp:'マックも候補に入れていい?',en:"Can we include McDonald's too?",style:'Suggestion.'},
    {speaker:'sakura_teen',jp:'うん。容器の蓋、ちゃんと閉めて持ち帰り。',en:"Yeah — close container lids properly for takeaway.",style:'Practical.'},
    {speaker:'riku_teen',jp:'夜の上野駅、ダークなオーラと賑わいが、最高だよな。',en:"Ueno Station at night — dark aura with bustle, the best.",style:'Warm close.'},
  ]},
  {id:'conv_05537',cluster:'D',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:D_T,scenario:'Two cafe friends compare weekend trip plans',lines:[
    {speaker:'aoi_barista',jp:'今度の連休、成田の方の温泉に泊まる予定。',en:"Next break, I'm planning to stay at a hot spring near Narita.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'素敵!上野経由で寄り道もできるね。',en:"Lovely! Can detour via Ueno too.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'格安のプランで、ライスと和食メイン。',en:"Cheap plan, with rice and Japanese fare as main.",style:'Plan.'},
    {speaker:'mei_romantic',jp:'温泉宿の蓋付き湯のみ、和な雰囲気あるよね。',en:"The lidded teacups at hot-spring inns have a nice traditional vibe.",style:'Warm.'},
    {speaker:'aoi_barista',jp:'マック寄って軽くお茶、それからチェックインだね。',en:"Stop by Mac for a light tea, then check in.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'夜は、ダークなムードのバーで、特別オーラ漂う時間に。',en:"At night, in a dark-mood bar — a time charged with special aura.",style:'Dreamy close.'},
  ]},
  {id:'conv_05538',cluster:'D',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:D_T,scenario:'A uni student helps a teen friend plan an airport tour',lines:[
    {speaker:'sakura_teen',jp:'先輩、成田空港の見学、行きたいんです。',en:"Senpai, I want to tour Narita Airport.",style:'Eager.'},
    {speaker:'ren_uni',jp:'いいね。上野からスカイライナーで一直線。',en:"Nice. From Ueno, Skyliner straight there.",style:'Helpful.'},
    {speaker:'sakura_teen',jp:'格安のチケットなら、もっと節約できるかも。',en:"With a cheap ticket, can save more.",style:'Plan.'},
    {speaker:'ren_uni',jp:'機内食のサンプルが見られるって。日本のライスもおすすめ。',en:"They show in-flight meal samples. Japanese rice is recommended.",style:'Informative.'},
    {speaker:'sakura_teen',jp:'マックも空港内にあったかな。',en:"Was there a McDonald's inside the airport?",style:'Curious.'},
    {speaker:'ren_uni',jp:'うん。蓋付きのカップに入れて、観望デッキで景色見ながら食べよ。',en:"Yes. Pour into a lidded cup and eat at the observation deck.",style:'Warm close.'},
  ]},
  {id:'conv_05539',cluster:'D',ambient:'living_room_quiet',cast:['ryosuke_dad','yumiko_mom'],targets:D_T,scenario:'A married couple plans a getaway',lines:[
    {speaker:'yumiko_mom',jp:'週末、上野の美術館に家族で行こうよ。',en:"Weekend, let's do the Ueno museum as a family.",style:'Warm.'},
    {speaker:'ryosuke_dad',jp:'いいね。帰りに成田空港の展望デッキも寄ろうか。',en:"Sure. On the way back, swing by Narita's observation deck.",style:'Easy dad.'},
    {speaker:'yumiko_mom',jp:'お昼は格安のライス定食、フードコートで子供が好む。',en:"Lunch — cheap rice sets at the food court, kids like it.",style:'Cheerful.'},
    {speaker:'ryosuke_dad',jp:'マックも子供のお気に入りだから、おやつでいいかな。',en:"Mac is the kids' favorite — could do for snack.",style:'Plan.'},
    {speaker:'yumiko_mom',jp:'お土産は、蓋付きの和菓子箱がいいわね。',en:"Souvenirs — a lidded sweets box would be nice.",style:'Soft.'},
    {speaker:'ryosuke_dad',jp:'夜、ダーク系のレストランで、家族のオーラ満点で締めよう。',en:"At night, a dark-themed restaurant — wrap with family aura at full.",style:'Warm close.'},
  ]},
  {id:'conv_05540',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A Kansai chef and a barista swap travel tips',lines:[
    {speaker:'daichi_kansai',jp:'アオイさん、成田からの便、格安のあるん?',en:"Aoi-san, are there cheap flights from Narita?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい、季節限定でライス付き機内食のプランもあります。',en:"Yes — seasonal plans with rice in-flight meals too.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'うちの店、上野駅前に支店出すか検討中や。',en:"We're considering a branch in front of Ueno Station.",style:'Casual Kansai.'},
    {speaker:'aoi_barista',jp:'素敵!マックの近くだと立地もいいですね。',en:"Lovely! Near McDonald's, location's great too.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'蓋付きの和食容器、新作で出すで。',en:"We're rolling out new lidded Japanese-food containers.",style:'Proud Kansai.'},
    {speaker:'aoi_barista',jp:'ダーク系の演出も入れたら、オーラ違うはず。',en:"Adding dark-themed staging would create a different aura.",style:'Warm close.'},
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

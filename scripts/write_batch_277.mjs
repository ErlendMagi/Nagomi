import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_277 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['いままで','スッキリ','ヒマ','居心地','悲しく','全開','鳴らし','立ち上がり']
const B_T = ['原案','本業','都度','縛ら','検事','集客','文言','網羅']
const C_T = ['交通省','官邸','直線','遠隔','無関心','団地','下降','上流']
const D_T = ['バイオリン','ディーラー','コーチング','おろし','殻','路地','車椅子','リマ']

const data = [
  {id:'conv_05501',cluster:'A',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:A_T,scenario:'Two cafe friends recap a recent week',lines:[
    {speaker:'aoi_barista',jp:'今週、いままでで一番ヒマな日もあれば、レジを全開で鳴らした日もあった。',en:"This week, some days were the slowest ever and other days the register rang nonstop.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'居心地のいい店だから、お客さん増えてるんだね。',en:"It's a comfortable shop — that's why customers grow.",style:'Warm.'},
    {speaker:'aoi_barista',jp:'夕方、立ち上がりの席で、おじいさんが少し悲しくしていて、心配だった。',en:"In the evening, at the first-up seat, an old man was a bit sad and it worried me.",style:'Concerned.'},
    {speaker:'mei_romantic',jp:'声かけられたの?',en:"Did you say something to him?",style:'Curious.'},
    {speaker:'aoi_barista',jp:'うん、温かいお茶出したら、スッキリした顔で帰って行ったよ。',en:"Yes — after I brought warm tea, he left with a clear face.",style:'Tender close.'},
  ]},
  {id:'conv_05502',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens recap the school week',lines:[
    {speaker:'sakura_teen',jp:'今週、いままで体験した中で一番忙しかった。',en:"This week was the busiest I've ever had.",style:'Tired teen.'},
    {speaker:'riku_teen',jp:'授業全開で、ヒマな時間ゼロだよな。',en:"Classes at full throttle, zero free time.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'部活の鳴らしものパート、立ち上がり練習がきつかった。',en:"In the percussion section, the warm-up drills were brutal.",style:'Animated.'},
    {speaker:'riku_teen',jp:'居心地はよかったよな、皆で頑張った感じで。',en:"The vibe was nice though — everyone pushing together.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'試験結果、ちょっと悲しくなったけど、深呼吸でスッキリした。',en:"Test results made me a bit sad, but a deep breath cleared it up.",style:'Reflective close.'},
  ]},
  {id:'conv_05503',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom hears about her young son\'s day',lines:[
    {speaker:'sho_child',jp:'ママ、今日いままででいちばん楽しかったよ!',en:"Mom, today was the most fun ever!",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'よかったね。スッキリした顔してる。',en:"That's lovely. You look refreshed.",style:'Warm.'},
    {speaker:'sho_child',jp:'お昼休み、ヒマな時間に皆で笛鳴らし合いっこした!',en:"At lunch break, we had a flute-toot session in the free time!",style:'Animated child.'},
    {speaker:'yumiko_mom',jp:'居心地のいいクラスね。誰か悲しくしてた子はいなかった?',en:"What a cozy class. Was anyone sad?",style:'Caring.'},
    {speaker:'sho_child',jp:'ううん、皆全開で笑ってたよ。',en:"Nope, everyone laughed full-out.",style:'Cheerful.'},
    {speaker:'yumiko_mom',jp:'明日も、立ち上がりから元気に行こうね。',en:"Tomorrow too, start the day strong.",style:'Warm close.'},
  ]},
  {id:'conv_05504',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple reflects on the day',lines:[
    {speaker:'hiroshi_elder',jp:'今日は、ヒマで居心地のいい一日だったな。',en:"Today was a leisurely, cozy day.",style:'Soft elder.'},
    {speaker:'sachiko_grandma',jp:'ええ。庭の鳥が鳴らし続けて、心がスッキリしたわ。',en:"Yes. The garden birds kept chirping and my heart cleared.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'いままでの忙しさを忘れて、ゆっくり過ごせた。',en:"Forgetting past busyness, I could spend it slowly.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'時々、昔の写真見て少し悲しくなるけど、それも大切な時間。',en:"Sometimes old photos make me a bit sad, but that too is precious.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'明日は朝の立ち上がりから散歩しよう。',en:"Tomorrow, from the morning's first steps, let's walk.",style:'Cheerful.'},
    {speaker:'sachiko_grandma',jp:'全開で元気に行きましょう。',en:"Let's go at full energy.",style:'Tender close.'},
  ]},
  {id:'conv_05505',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A uni student gently listens to a teen friend',lines:[
    {speaker:'sakura_teen',jp:'先輩、最近いままでで一番、心が悲しく沈むんです。',en:"Senpai, lately my heart sinks the saddest it ever has.",style:'Vulnerable teen.'},
    {speaker:'ren_uni',jp:'居心地のいい場所、ちゃんと確保できてる?',en:"Are you keeping a cozy space for yourself?",style:'Calm.'},
    {speaker:'sakura_teen',jp:'カフェの隅で、ヒマな時間にぼんやりするくらい。',en:"Just spacing out at a cafe corner during free time.",style:'Quiet.'},
    {speaker:'ren_uni',jp:'いいね。徐々にスッキリしていくよ。',en:"Good. It'll clear up gradually.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'朝の立ち上がりが特に重い。',en:"The morning start is especially heavy.",style:'Soft.'},
    {speaker:'ren_uni',jp:'目覚まし全開で鳴らして、その勢いで起きてみよ。',en:"Set your alarm full blast and ride that to get up.",style:'Encouraging close.'},
  ]},

  {id:'conv_05506',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews a marketing campaign plan',lines:[
    {speaker:'hiroshi_boss',jp:'集客の原案、本業との整合性、確認したか?',en:"The customer-draw draft — checked alignment with the core business?",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。文言、毎回都度見直しています。',en:"Yes. Wording is reviewed each iteration.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'契約に縛られず、柔軟に動けるか?',en:"Can we move flexibly without being tied to contracts?",style:'Probe.'},
    {speaker:'kenji_office',jp:'はい。法務担当の元検事の助言も網羅しています。',en:"Yes. The legal section's ex-prosecutor advice is incorporated.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'頼む。',en:"Please.",style:'Close.'},
  ]},
  {id:'conv_05507',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers prep an annual report',lines:[
    {speaker:'yuki_office',jp:'本業以外の収益、原案にどう書く?',en:"Non-core revenue — how to write it in the draft?",style:'Brisk.'},
    {speaker:'kenji_office',jp:'文言は前回踏襲で、都度更新する形にします。',en:"Wording follows last time, updated each round.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'集客指標、四半期ごとに網羅したい。',en:"Customer-draw metrics — want full coverage quarterly.",style:'Strategic.'},
    {speaker:'kenji_office',jp:'承知しました。元検事のチェックも入れます。',en:"Understood. I'll bring in the ex-prosecutor check too.",style:'Commitment.'},
    {speaker:'yuki_office',jp:'規制に縛られないよう、自由度確保で。',en:"Keep flexibility so we aren't bound by regulation.",style:'Direction close.'},
  ]},
  {id:'conv_05508',cluster:'B',ambient:'office_quiet_low',cast:['ren_uni','yuki_office'],targets:B_T,scenario:'A uni intern interviews a manager about strategy',lines:[
    {speaker:'ren_uni',jp:'集客戦略、本業との関係、どうバランスしてますか。',en:"How do you balance customer-draw with the core business?",style:'Polite.'},
    {speaker:'yuki_office',jp:'原案レベルから網羅的に分析しています。',en:"Analyzed comprehensively from the draft level.",style:'Helpful.'},
    {speaker:'ren_uni',jp:'文言の更新、都度行われるんですか。',en:"Wording updates each round?",style:'Probe.'},
    {speaker:'yuki_office',jp:'はい。法務、元検事の助言を反映し、契約に縛られない形を作ります。',en:"Yes. Reflecting legal and ex-prosecutor advice, we shape it free of binding contracts.",style:'Informative.'},
    {speaker:'ren_uni',jp:'参考になりました、ありがとうございます。',en:"Helpful. Thank you.",style:'Close.'},
  ]},
  {id:'conv_05509',cluster:'B',ambient:'cafe_quiet_chatter',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors a younger boss on strategy',lines:[
    {speaker:'hiroshi_elder',jp:'戦略は、本業との接続点を網羅しておけ。',en:"Strategy — cover all intersections with the core business.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'承知しております。原案を毎回都度精査しています。',en:"Understood. The draft is examined each iteration.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'文言一つで集客は揺れる。元検事の助言、活用しろ。',en:"A single phrase shifts customer-draw. Use the ex-prosecutor's advice.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。固定観念に縛られず、柔軟性も持ちます。',en:"Yes. Without being bound by fixed views, with flexibility too.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'よし、続けろ。',en:"Good — keep at it.",style:'Wise close.'},
  ]},
  {id:'conv_05510',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:B_T,scenario:'A police officer briefs a uni reporter about administrative reform',lines:[
    {speaker:'takeda_officer',jp:'本業の警備に加え、集客イベントの安全管理も担当しています。',en:"Besides core security, we also handle safety for customer-draw events.",style:'Calm.'},
    {speaker:'ren_uni',jp:'原案づくり、検事と協議されるんですか。',en:"In drafting, do you confer with prosecutors?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい、都度確認しています。文言の網羅性が重要です。',en:"Yes — checked each time. Comprehensive wording matters.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'過去の事案に縛られず、柔軟に対応していらっしゃるんですね。',en:"Without being bound by past cases, you respond flexibly.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。それが安全につながります。',en:"Yes. That ties to safety.",style:'Close.'},
  ]},

  {id:'conv_05511',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher walks a uni student through a public-affairs paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、交通省と官邸の意思決定プロセスを扱うんですね。',en:"Your paper covers decision-making between MLIT and the cabinet office.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。地方団地の住民が無関心になりがちな話、改めて検証します。',en:"Yes. I'll revisit how local apartment-complex residents tend to become uninterested.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'直線道路の整備計画、上流側と下流側、両面から見ると深まります。',en:"For straight-road plans, viewing from both upstream and downstream deepens it.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'遠隔地への影響、データで補強します。',en:"Impacts on remote areas backed by data.",style:'Plan.'},
    {speaker:'asuka_teacher',jp:'住民の参加意欲が下降してる地域、要因分析が要ですね。',en:"Where resident engagement is declining, factor analysis is needed.",style:'Suggestion.'},
    {speaker:'ren_uni',jp:'承知しました。',en:"Understood.",style:'Close.'},
  ]},
  {id:'conv_05512',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss and his manager discuss a transport-policy article',lines:[
    {speaker:'hiroshi_boss',jp:'この記事、交通省の方針が官邸主導で変わった話だな。',en:"This piece — MLIT policy shifted under cabinet leadership.",style:'Boss.'},
    {speaker:'kenji_office',jp:'はい。新直線高速の予算、上流の供給網にも波及しています。',en:"Yes. The new highway budget ripples into upstream supply chains too.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'地方団地の住民、無関心傾向が顕著だな。',en:"Local-complex residents — apathy is pronounced.",style:'Analytical.'},
    {speaker:'kenji_office',jp:'遠隔会議で住民説明を進める案も出ています。',en:"Plans for remote town-hall sessions are also out.",style:'Detail.'},
    {speaker:'hiroshi_boss',jp:'参加率が下降してるからな、対策必須だ。',en:"Participation is declining, countermeasures are essential.",style:'Decisive.'},
    {speaker:'kenji_office',jp:'承知しました。',en:"Understood.",style:'Close.'},
  ]},
  {id:'conv_05513',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a uni reporter about traffic regulation',lines:[
    {speaker:'takeda_officer',jp:'交通省と連携した安全策、新直線道路で試行中です。',en:"Safety measures in coordination with MLIT are being trialed on the new highway.",style:'Calm.'},
    {speaker:'ren_uni',jp:'官邸主導の重点政策ですか。',en:"A cabinet-led priority policy?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。地方団地の住民は無関心になりがちで、説明会も遠隔形式に。',en:"Yes. Complex residents tend to be apathetic, so town-halls go remote.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'参加率の下降は、上流の自治体でも見られますか。',en:"Is declining participation also seen in upstream municipalities?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい、共通課題です。',en:"Yes — a shared challenge.",style:'Close.'},
  ]},
  {id:'conv_05514',cluster:'C',ambient:'living_room_quiet',cast:['hiroshi_elder','ren_uni'],targets:C_T,scenario:'A uni student interviews a retired civil engineer',lines:[
    {speaker:'ren_uni',jp:'長年、土木と交通省の橋渡しをされていたんですよね。',en:"You long bridged civil-eng and the transport ministry.",style:'Polite.'},
    {speaker:'hiroshi_elder',jp:'うん。官邸とも何度も交渉した。',en:"Yes. I negotiated with the cabinet office many times.",style:'Veteran.'},
    {speaker:'ren_uni',jp:'直線道路と団地開発の調整、住民の無関心、課題でしたか。',en:"Straight-road and complex-development coordination — was resident apathy the challenge?",style:'Probe.'},
    {speaker:'hiroshi_elder',jp:'うん。遠隔地ほど、住民の声が下降していった。',en:"Yes. The more remote, the more resident voices declined.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'上流の自治体の対応、変わってきましたか。',en:"Have responses from upstream municipalities changed?",style:'Curious.'},
    {speaker:'hiroshi_elder',jp:'近年は、改善しているよ。',en:"In recent years, improving.",style:'Wise close.'},
  ]},
  {id:'conv_05515',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','sakura_teen'],targets:C_T,scenario:'A doctor explains environmental health to a teen',lines:[
    {speaker:'saito_doctor',jp:'桜さん、交通省が出してる大気汚染データ、見たことある?',en:"Sakura, ever seen MLIT's air-pollution data?",style:'Friendly.'},
    {speaker:'sakura_teen',jp:'いえ、官邸のサイトに集まってるんですか。',en:"No — is it gathered on the cabinet office's site?",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。直線道路沿いの団地は影響を受けやすいです。',en:"Yes. Complexes along straight highways are easily affected.",style:'Patient.'},
    {speaker:'sakura_teen',jp:'住民が無関心だと、改善が下降していくんですよね。',en:"Without resident interest, improvement declines, right?",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。遠隔診療でも、生活環境のヒアリングを重視しています。',en:"Yes. Even in telemedicine, we emphasize hearing about living conditions.",style:'Informative.'},
    {speaker:'sakura_teen',jp:'上流の風向きまで考えるんですね。',en:"You factor in upstream wind direction too.",style:'Engaged.'},
    {speaker:'saito_doctor',jp:'そうです。',en:"That's right.",style:'Close.'},
  ]},

  {id:'conv_05516',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens plan a music & travel weekend',lines:[
    {speaker:'sakura_teen',jp:'バイオリンの先生のリサイタル、土曜にあるって。',en:"My violin teacher's recital is Saturday.",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'いいね。会場、車椅子のお客さんも入れる路地裏の小ホールだろ?',en:"Sweet. The venue's the back-alley small hall accessible for wheelchair users, right?",style:'Casual.'},
    {speaker:'sakura_teen',jp:'うん。コーチング系のYouTuberもゲストで来るって。',en:"Yes. A coaching YouTuber will be a guest.",style:'Animated.'},
    {speaker:'riku_teen',jp:'帰りに大根おろし定食食べに行こうぜ。',en:"On the way back, let's grab a grated-radish set meal.",style:'Cheerful.'},
    {speaker:'sakura_teen',jp:'いいね。あと、リマのジュエラーが来てるカフェも見たい。',en:"Nice. Also want to see the cafe where a Lima jeweler's visiting.",style:'Excited.'},
    {speaker:'riku_teen',jp:'いつかは殻を破って海外行きたいな。',en:"Someday I want to break my shell and go abroad.",style:'Dreamy close.'},
  ]},
  {id:'conv_05517',cluster:'D',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:D_T,scenario:'Two cafe friends discuss creative collaborations',lines:[
    {speaker:'aoi_barista',jp:'バイオリンのライブ、お店でやらない?',en:"How about a violin live at the shop?",style:'Soft.'},
    {speaker:'mei_romantic',jp:'素敵!車椅子のお客様も入りやすいよう、路地側の入口を整えよう。',en:"Lovely! Set up the alley-side entrance to be wheelchair-friendly.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'コーチング系の方をモデレーターに迎えるのもいいね。',en:"Inviting a coaching specialist as moderator sounds nice.",style:'Plan.'},
    {speaker:'mei_romantic',jp:'メニューは、大根おろしを使った特別な小皿で。',en:"Menu — a special small plate with grated radish.",style:'Idea.'},
    {speaker:'aoi_barista',jp:'リマ出身のディーラーが来店予定で、世界が広がりそう。',en:"A Lima-origin dealer plans to visit — the world opens up.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'殻を破る素敵な夜になりそう。',en:"Sounds like a shell-breaking lovely evening.",style:'Warm close.'},
  ]},
  {id:'conv_05518',cluster:'D',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:D_T,scenario:'A uni student helps a teen friend prep a music event',lines:[
    {speaker:'sakura_teen',jp:'先輩、バイオリンの発表会、車椅子の祖母を招きたいんです。',en:"Senpai, I want to invite my wheelchair-using grandma to the violin recital.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'いいね。会場の路地、段差ないか確認しよう。',en:"Nice. Let's check the alley for steps.",style:'Helpful.'},
    {speaker:'sakura_teen',jp:'コーチングの先輩に、本番前にアドバイスもらいたい。',en:"I want pre-show advice from my coaching senior.",style:'Plan.'},
    {speaker:'ren_uni',jp:'打ち上げは、近所の和食屋でおろしポン酢の刺身。',en:"Afterparty — sashimi with grated-radish ponzu at the nearby Japanese eatery.",style:'Cheerful.'},
    {speaker:'sakura_teen',jp:'リマ出身のディーラーが審査員で来るって聞きました。',en:"A Lima-origin dealer is coming as a judge, I heard.",style:'Excited.'},
    {speaker:'ren_uni',jp:'殻を破る一夜になりそうだな。',en:"Sounds like a shell-breaking night.",style:'Warm close.'},
  ]},
  {id:'conv_05519',cluster:'D',ambient:'living_room_quiet',cast:['ryosuke_dad','yumiko_mom'],targets:D_T,scenario:'A married couple plans a family concert outing',lines:[
    {speaker:'yumiko_mom',jp:'娘のバイオリン発表会、おじいちゃんも招きたいの。車椅子で入れるか確認した?',en:"For our daughter's violin recital, I want to invite Grandpa. Did you check wheelchair access?",style:'Caring.'},
    {speaker:'ryosuke_dad',jp:'うん、路地から入れる経路、確認済みだ。',en:"Yes, alley-entry route confirmed.",style:'Easy.'},
    {speaker:'yumiko_mom',jp:'帰りは、おろしを使った和定食食べさせたい。',en:"On the way back, I want him to have a grated-radish set meal.",style:'Warm.'},
    {speaker:'ryosuke_dad',jp:'夜は、コーチング系の友人とも合流するか?',en:"At night, meet up with our coaching-side friend too?",style:'Suggestion.'},
    {speaker:'yumiko_mom',jp:'リマから来てるディーラーのお話、聞ける機会だしね。',en:"A chance to hear the Lima-visiting dealer's story.",style:'Cheerful.'},
    {speaker:'ryosuke_dad',jp:'いつもの殻を破って、家族で挑戦しよう。',en:"Break our usual shell — let's challenge together as family.",style:'Warm close.'},
  ]},
  {id:'conv_05520',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A Kansai chef and a barista swap weekend ideas',lines:[
    {speaker:'daichi_kansai',jp:'アオイさん、来週、店でバイオリンの生演奏入れるんやて?',en:"Aoi-san, putting live violin in the shop next week?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい、車椅子のお客様も入りやすいよう、路地側を整えました。',en:"Yes — I prepped the alley side for wheelchair access.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'コーチング系のお話、入れたら面白いで。',en:"Including coaching-style talks would be fun.",style:'Idea Kansai.'},
    {speaker:'aoi_barista',jp:'いいですね。メニューは、おろしのあっさり系を一品追加します。',en:"Nice. I'll add one light grated-radish dish to the menu.",style:'Plan.'},
    {speaker:'daichi_kansai',jp:'リマ出身のディーラー、うちの常連や、紹介するで。',en:"A Lima-origin dealer is one of our regulars — I'll intro.",style:'Generous Kansai.'},
    {speaker:'aoi_barista',jp:'殻を破る出会いになりそうです、楽しみです。',en:"Sounds like a shell-breaking encounter — looking forward to it.",style:'Warm close.'},
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

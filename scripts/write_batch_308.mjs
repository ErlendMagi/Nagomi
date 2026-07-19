import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_308 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['片道','肘','釘','売り物','割安','夏場','治す','肩こり']
const B_T = ['被疑','面会','先送り','白紙','水質','非公式','たたき台','商事']
const C_T = ['北陸','音波','雑草','食用','耐性','重心','史実','過熱']
const D_T = ['鎧','ネックレス','文房具','売場','選曲','見どころ','ピアス','葉書']

const data = [
  // A
  {id:'conv_06121',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat about plans',lines:[
    {speaker:'sho_child',jp:'ママ、おばあちゃんち、片道2時間だっけ?',en:"Mom, Grandma's is two hours one-way?",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'うん。バスで肘、痛めないように気をつけてね。',en:"Yes. On the bus — careful with your elbows.",style:'Tender.'},
    {speaker:'sho_child',jp:'お父さん、壁に釘、打つって言ってた。',en:"Dad said he's hammering nails into the wall.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'うん。新しい棚、売り物じゃなくて、お父さんの自作よ。',en:"Yes. New shelf — not for sale; Dad's DIY.",style:'Warm.'},
    {speaker:'sho_child',jp:'今日のお店、割安なお肉、買えた?',en:"Today's shop — cheap meat available?",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'うん。夏場、肉はすぐ傷むから、注意ね。',en:"Yes. Summer — meat spoils fast; careful.",style:'Soft.'},
    {speaker:'sho_child',jp:'ママ、風邪、早く治すの、何食べる?',en:"Mom, healing a cold fast — what to eat?",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'お父さんの肩こり、お風呂で温めてあげようね。',en:"Dad's shoulder stiffness — warm in the bath.",style:'Warm close.'},
  ]},
  {id:'conv_06122',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat about a trip',lines:[
    {speaker:'mei_romantic',jp:'温泉、片道5時間の旅、しんどそう。',en:"Onsen — five hours one-way feels rough.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'うん。長時間運転、肘がだるくなる。',en:"Yeah. Long drives — elbows ache.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'宿の床、釘が出てないか、気になる。',en:"Inn floor — wondering if nails stick out.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'お土産屋さん、売り物の品揃え、楽しみだね。',en:"Souvenir shop — selection's exciting.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'宿、割安なプラン、見つけたの。',en:"Inn — found a cheap plan.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'夏場の混雑、避けて、秋に行きたい。',en:"Summer crowds — avoid; go in autumn.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'疲れを治す温泉、楽しみだね。',en:"Fatigue-healing onsen — exciting.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'肩こり、デスクワーク続きで、辛い。',en:"Shoulder stiffness — desk work, painful.",style:'Wry close.'},
  ]},
  {id:'conv_06123',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk home',lines:[
    {speaker:'sakura_teen',jp:'修学旅行、片道で電車かバスか、迷うね。',en:"School trip — one-way by train or bus, debating.",style:'Casual teen.'},
    {speaker:'riku_teen',jp:'重い荷物、肘、当たって痛い。',en:"Heavy bag — elbow hits, hurts.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'教室の机、釘、ちょっと飛び出てて、注意。',en:"Classroom desk — nail sticks out, careful.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'文房具屋、新しい売り物、見たい。',en:"Stationery shop — new wares, wanna see.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'コンビニのおにぎり、割安パック、お得だよね。',en:"Conbini rice balls — cheap pack is a steal.",style:'Bright.'},
    {speaker:'riku_teen',jp:'夏場、塩分補給、忘れずに。',en:"Summer — replenish salt.",style:'Practical.'},
    {speaker:'sakura_teen',jp:'昨夜、薬で熱、治すことできた。',en:"Last night — meds healed fever.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'肩こり、すごい、最近。',en:"Shoulder stiffness — heavy lately.",style:'Wry close.'},
  ]},
  {id:'conv_06124',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple discusses errands',lines:[
    {speaker:'hiroshi_elder',jp:'病院、片道、タクシーで行こうか。',en:"Hospital — one-way by taxi?",style:'Calm.'},
    {speaker:'sachiko_grandma',jp:'うん。最近、肘の関節、調子悪いの。',en:"Yes. Elbow joints — bad lately.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'壁の釘、打ち直したよ、絵を掛けるために。',en:"Re-hammered wall nails — for hanging a painting.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'昔の着物、もう売り物にはならないわね。',en:"Old kimono — no longer salable.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'スーパーの割安デー、明日らしい。',en:"Supermarket discount day — tomorrow.",style:'Casual.'},
    {speaker:'sachiko_grandma',jp:'夏場の体調管理、年取ると、本当に大事ね。',en:"Summer body care — at our age, really vital.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お互いの腰痛、治すために、運動続けよう。',en:"Heal back pain together — keep exercising.",style:'Direction.'},
    {speaker:'sachiko_grandma',jp:'肩こりも、お風呂で和らげましょう。',en:"Shoulder stiffness — ease in the bath.",style:'Warm close.'},
  ]},
  {id:'conv_06125',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai chats with a teen',lines:[
    {speaker:'ren_uni',jp:'桜、京都、片道で観光する?',en:"Sakura — Kyoto, sightsee one-way?",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。先輩、肘、まだ痛みますか?',en:"Yes. Senpai — elbow still hurts?",style:'Earnest teen.'},
    {speaker:'ren_uni',jp:'うん、少し。寮の壁に釘、勝手に打てなくて。',en:"Yes, slightly. Can't freely nail dorm walls.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'土産物店の売り物、お土産選び、迷います。',en:"Souvenir shops — choosing, torn.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'観光地、割安シーズンに行くといいぞ。',en:"Tourist spots — go in cheap-season.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'夏場、人混み、避けたいですね。',en:"Summer crowds — wanna avoid.",style:'Soft.'},
    {speaker:'ren_uni',jp:'疲労を治す時間、旅で取れたら、最高だな。',en:"Trip with fatigue-healing time — best.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'長時間移動、肩こり、気をつけます。',en:"Long transit — shoulder care.",style:'Practical close.'},
  ]},

  // B
  {id:'conv_06126',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs a manager about a court case',lines:[
    {speaker:'takeda_officer',jp:'御社の被疑事案、現在、捜査中です。',en:"Your firm's suspect case — under investigation.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。担当者との面会、調整しました。',en:"Yes. Liaison meeting — arranged.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'判決の先送りは、好ましくありません。',en:"Verdict postponement — undesirable.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。白紙撤回せず、慎重に対応します。',en:"Yes. Won't blank-cancel; careful response.",style:'Update.'},
    {speaker:'takeda_officer',jp:'工場の水質、再検査もご検討ください。',en:"Plant water quality — also reconsider retest.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'非公式な確認も、進めています。',en:"Unofficial verification — proceeding too.",style:'Commitment.'},
    {speaker:'takeda_officer',jp:'たたき台、来週共有します。',en:"Draft proposal — share next week.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'親会社の三井商事、巻き込んで対応します。',en:"Parent Mitsui Shoji — included in response.",style:'Close.'},
  ]},
  {id:'conv_06127',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews legal risk',lines:[
    {speaker:'hiroshi_boss',jp:'被疑が及ぶ可能性、内部監査で確認しろ。',en:"Suspect-extension risk — internal audit.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。警察との面会、今週中に。',en:"Yes. Police meeting — this week.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'発表、先送りせず、迅速に。',en:"Announcement — no postponement; swift.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。広報、白紙からの再構築です。',en:"Yes. PR — rebuild from blank.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'河川水質、調査、自治体と組め。',en:"River water quality — survey, partner with city.",style:'Direction.'},
    {speaker:'kenji_office',jp:'非公式チャネルでも、情報、収集中です。',en:"Unofficial channels — also info gathering.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'対策のたたき台、明日朝、見せろ。',en:"Countermeasure draft — show tomorrow AM.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。商事会社と歩調を合わせ、進めます。',en:"Yes. Sync with the trading firm.",style:'Close.'},
  ]},
  {id:'conv_06128',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss legal/PR',lines:[
    {speaker:'yuki_office',jp:'被疑情報、漏れていないか、確認した?',en:"Suspect info — leak-checked?",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。担当弁護士との面会、終わりました。',en:"Yes. Counsel meeting — done.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'交渉の先送り、得策じゃないね。',en:"Postponing negotiations — not wise.",style:'Direction.'},
    {speaker:'kenji_office',jp:'白紙の状態からも、案を出します。',en:"From blank state too — propose.",style:'Update.'},
    {speaker:'yuki_office',jp:'近隣の水質、社内モニタリング体制、再確認。',en:"Nearby water quality — re-verify internal monitoring.",style:'Direction.'},
    {speaker:'kenji_office',jp:'非公式に、業界仲間とも話し合いました。',en:"Unofficially — discussed with industry peers.",style:'Commitment.'},
    {speaker:'yuki_office',jp:'役員向けのたたき台、夕方までに。',en:"Exec draft — by evening.",style:'Direction.'},
    {speaker:'kenji_office',jp:'商事大手との連携、急ぎます。',en:"Trading-firm linkage — rushing.",style:'Close.'},
  ]},
  {id:'conv_06129',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、被疑となる前の対応、企業の運命を左右する。',en:"Ren — handling before suspicion shapes the firm's fate.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'弁護士との面会、若手も同席することがあるんですね。',en:"Counsel meetings — juniors sometimes attend.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'判断、先送りせず、即決を心がけろ。',en:"Decisions — no postponement; decide.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。白紙のページ、自分で埋める覚悟、必要ですね。',en:"Yes. Filling blank pages — need resolve.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'水質や環境調査、外部委託も活用しろ。',en:"Water-quality and env surveys — outsource too.",style:'Direction.'},
    {speaker:'ren_uni',jp:'非公式な交流、人脈作りに、役立つんですね。',en:"Unofficial ties — help build networks.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'たたき台、毎日、自分で書いてみろ。',en:"Drafts — try writing yourself daily.",style:'Direction.'},
    {speaker:'ren_uni',jp:'商事系の業務、勉強したいです。',en:"Trading-firm work — want to learn.",style:'Earnest close.'},
  ]},
  {id:'conv_06130',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'被疑のかかる経営者、若い頃に見たことがある。',en:"Suspect-targeted exec — saw one in youth.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。弁護士との面会、初動が肝心です。',en:"Yes. Counsel meeting — initial response is key.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'先送りは、組織の信頼を失う。',en:"Postponement — loses org trust.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'広報、白紙覚悟で挑みます。',en:"PR — facing blank state, will tackle.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'水質、環境、現代の企業の必須課題だ。',en:"Water and environment — modern firms' must.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'非公式な情報ルート、信頼関係で築きます。',en:"Unofficial info routes — build via trust.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'たたき台、自分でも書いていた、現役の頃は。',en:"Drafts — I wrote in active days.",style:'Reflective.'},
    {speaker:'hiroshi_boss',jp:'商事業界、長期視点で取り組みます。',en:"Trading industry — long-term focus.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06131',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses a research paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、北陸地方の水産業、丁寧でしたね。',en:"Paper — Hokuriku fisheries, careful.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。海洋音波の調査も、章として入れました。',en:"Yes. Marine-sonar surveys — chapter.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'湿地帯の雑草の生態、生物多様性に資する研究ですね。',en:"Wetland-weed ecology — biodiversity-helping research.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'食用と非食用、品種ごとに整理しました。',en:"Food and non-food — by species, organized.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'環境変化への耐性、品種ごとに差がありますね。',en:"Climate resilience — varies by species.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'重心となる仮説、論文の核です。',en:"Core hypothesis — paper's heart.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'史実との対比、近世史で扱われた章もありますね。',en:"Contrast with historical record — early-modern chapter too.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'議論の過熱を避けつつ、慎重に進めました。',en:"Avoiding heated debate, careful progress.",style:'Reflective close.'},
  ]},
  {id:'conv_06132',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a uni reporter about a regional case',lines:[
    {speaker:'takeda_officer',jp:'北陸地方の事件、捜査、段階的に進めています。',en:"Hokuriku case — investigation phased.",style:'Calm.'},
    {speaker:'ren_uni',jp:'音波探知の活用、事件発覚の決め手でしたね。',en:"Sonar use — decisive for detection.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。河川敷の雑草、現場保全のため、整備が必要でした。',en:"Yes. Riverbed weeds — site preservation needed grooming.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'食用品の流通、警察も追跡していますか。',en:"Food-distribution — police tracking?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。違法薬物に耐性を持つ品種、注意しています。',en:"Yes. Drug-resistant species — vigilant.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者の重心の不安定さ、目撃者証言にもありましたね。',en:"Suspect's unstable balance — in witness accounts too.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。史実に基づく地理情報、活用しました。',en:"Yes. Historical-record-based geo — utilized.",style:'Informative.'},
    {speaker:'ren_uni',jp:'メディアの過熱報道、避けてもらえますか。',en:"Media-heated reporting — please avoid.",style:'Polite close.'},
  ]},
  {id:'conv_06133',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public-health research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、北陸地方の慢性疾患、調査続けています。',en:"Ren — Hokuriku chronic-disease surveys continue.",style:'Calm.'},
    {speaker:'ren_uni',jp:'超音波での診断、子供への配慮、ありますね。',en:"Ultrasound dx — care for children.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。庭の雑草と、アレルギーの関連、検討中。',en:"Yes. Garden-weed and allergy link — under review.",style:'Patient.'},
    {speaker:'ren_uni',jp:'食用植物の中で、有害なものも、特定していますか。',en:"Among edibles — toxic ones identified?",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。抗生物質耐性菌、深刻な課題です。',en:"Yes. Antibiotic-resistant strains — grave challenge.",style:'Informative.'},
    {speaker:'ren_uni',jp:'高齢者の重心バランス、転倒予防に直結しますね。',en:"Elderly balance — directly tied to fall-prevention.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。地域医療史、史実に基づき記録しています。',en:"Yes. Regional med-history — recorded per record.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'感染症報道の過熱、医療現場にも影響ありますね。',en:"Heated-infection reporting impacts the field too.",style:'Reflective close.'},
  ]},
  {id:'conv_06134',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews a regional incident',lines:[
    {speaker:'hiroshi_boss',jp:'北陸支店の水質トラブル、対応急げ。',en:"Hokuriku-branch water trouble — rush.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。超音波検査機器、追加導入予定です。',en:"Yes. Ultrasound — additional intro planned.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'敷地の雑草、計画的に管理しろ。',en:"Site weeds — manage planfully.",style:'Direction.'},
    {speaker:'kenji_office',jp:'食用油の取り扱い、安全基準も再確認します。',en:"Edible-oil handling — re-confirm safety.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'機械の耐性、テストで検証しろ。',en:"Machine resilience — test-verify.",style:'Direction.'},
    {speaker:'kenji_office',jp:'業界の重心、若手企業に移りつつあります。',en:"Industry's center of gravity — shifting to young firms.",style:'Reflective.'},
    {speaker:'hiroshi_boss',jp:'過去の史実、教訓に。',en:"Past records — as lessons.",style:'Direction.'},
    {speaker:'kenji_office',jp:'メディア過熱、広報、慎重対応します。',en:"Heated media — careful PR.",style:'Close.'},
  ]},
  {id:'conv_06135',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a research project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、自由研究、北陸の伝統工芸、楽しみですね。',en:"Sakura — Hokuriku traditional crafts, exciting.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。音波加工の技術、最新情報、入れました。',en:"Yes. Sonic-processing tech — latest info added.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'山の雑草を使う染色、独自の文化ですね。',en:"Mountain-weed dyeing — unique culture.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'食用染料との違い、丁寧に説明しました。',en:"Vs. edible-dye difference — carefully explained.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'伝統的に耐性ある染色技術、興味深いですね。',en:"Traditionally resilient dye tech — intriguing.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'歴史的重心は、職人の技に置かれています。',en:"Historical center — placed on artisan craft.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'史実に基づき、章を構成しましたね。',en:"Built chapters on historical record.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'過熱した観光化、地域への影響、別章で論じます。',en:"Over-tourism's regional impact — separate chapter.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06136',cluster:'D',ambient:'museum_quiet_distant',cast:['asuka_teacher','sakura_teen'],targets:D_T,scenario:'A teacher and a teen visit a museum',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、戦国時代の鎧、保存状態が良いですね。',en:"Sakura — Sengoku-armor, well preserved.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。装飾のネックレス、当時の貴族も着けていたとか。',en:"Yes. Decor necklaces — also worn by nobility, they say.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'文房具コーナー、複製品、購入できます。',en:"Stationery corner — replicas purchasable.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'子供向け売場、図録、立ち読みしました。',en:"Kids' section — flipped through guides.",style:'Bright.'},
    {speaker:'asuka_teacher',jp:'当時の音楽、選曲、丁寧でしたね、BGMで。',en:"Period BGM selection — careful.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'見どころが多くて、時間、足りない。',en:"Many highlights — time short.",style:'Animated.'},
    {speaker:'asuka_teacher',jp:'特別展のピアス展示、現代まで続く美意識を感じますね。',en:"Special earring show — modern-continuous aesthetic sense.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'お土産に、当時の風景の葉書、買って帰ります。',en:"Souvenir — period-scene postcards.",style:'Cheerful close.'},
  ]},
  {id:'conv_06137',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends plan a culture day',lines:[
    {speaker:'mei_romantic',jp:'今週末、博物館で鎧の特別展、行こう。',en:"This weekend — special armor show at the museum.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'うん。ロビーに、可愛いネックレスのギフトショップあるって。',en:"Yes. Lobby — cute-necklace gift shop, I hear.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'文房具屋もついでに寄りたい。',en:"Stationery shop — also wanna stop.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'デパ地下の売場、新メニュー出てた。',en:"Depachika section — new menu.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'カフェの選曲、いつも素敵だよね。',en:"Cafe music selection — always lovely.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'今夜の演劇、見どころ満載って書いてあった。',en:"Tonight's play — highlights galore, it said.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'金属アレルギーだから、ピアス、慎重に選ぶの。',en:"Metal allergy — careful piercing choice.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'お祖母さんに葉書、書いて出しましょう。',en:"Write Grandma a postcard.",style:'Warm close.'},
  ]},
  {id:'conv_06138',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat about hobbies',lines:[
    {speaker:'sakura_teen',jp:'修学旅行、博物館で鎧、見れるかな。',en:"School trip — armor visible at the museum?",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'うん。お土産屋に、ネックレス、お土産で売ってる。',en:"Yeah. Souvenir shops — necklaces.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'学校の文房具屋、新作、人気だね。',en:"School stationery — new releases popular.",style:'Animated.'},
    {speaker:'riku_teen',jp:'駅ビルの売場、最近、改装されたよね。',en:"Station-mall sections — recently renovated.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'文化祭の選曲、DJ係の責任、重い。',en:"Festival DJ — selection responsibility heavy.",style:'Subdued.'},
    {speaker:'riku_teen',jp:'見どころの多い映画、明日観に行こう。',en:"Movie with many highlights — tomorrow.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'初めてピアスの穴、開けたいけど、怖い。',en:"First piercing — scared though.",style:'Vulnerable.'},
    {speaker:'riku_teen',jp:'家族に旅行の葉書、書いて送ろう。',en:"Send family a travel postcard.",style:'Warm close.'},
  ]},
  {id:'conv_06139',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'祖父の鎧、まだ蔵にあるよ。',en:"Grandfather's armor — still in the storehouse.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。結婚の時にもらったネックレス、宝物よ。',en:"Yes. Wedding necklace — treasure.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昔の文房具、万年筆、今も愛用してる。',en:"Old stationery — fountain pen, still favorite.",style:'Soft.'},
    {speaker:'sachiko_grandma',jp:'デパートの売場、二人で歩いた日、懐かしいわ。',en:"Department-section days, fond memory.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'ラジオの選曲、お気に入りの曲、流れたな。',en:"Radio — favorites played.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'映画の見どころ、二人で話し合ったね。',en:"Film highlights — we discussed.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'若い頃のお前、ピアスを着けてた写真、あるよ。',en:"Young-you piercing-wearing photo — exists.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お友達からの葉書、整理しなきゃね。',en:"Friend's postcards — must organize.",style:'Warm close.'},
  ]},
  {id:'conv_06140',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan a themed event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、戦国フェア、鎧のレプリカ、展示しよか。',en:"Aoi-san, Sengoku fair — armor replicas displayed.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。グッズコーナー、ネックレスも揃えましょう。',en:"Yes. Goods corner — necklaces too.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'子供向けに、和柄の文房具を用意しよ。',en:"For kids — wa-pattern stationery prepared.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'店内売場、什器、新調しました。',en:"In-store section — fixtures refreshed.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'BGM選曲、和風アレンジで、ええなあ。',en:"BGM selection — wa-style arrangements, nice.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'メニューの見どころ、お客様に分かりやすく説明します。',en:"Menu highlights — explain clearly to guests.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'店員のピアス、和の雰囲気にあわせて、シンプルに。',en:"Staff piercings — wa-style, simple.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'お持ち帰り用の葉書、ご来店記念として配ります。',en:"Take-home postcards — visit-memento, distributed.",style:'Warm close.'},
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

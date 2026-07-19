import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_298 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['冷め','笑み','こたえ','ピンチ','留守','ケンカ','居場所','確かめる']
const B_T = ['出費','税関','駆けつけ','散々','利息','定時','月間','多忙']
const C_T = ['陣営','隠蔽','介助','接点','取り扱う','内臓','賛否','取り締まり']
const D_T = ['テラス','童話','歌舞伎','戦国','神道','ステーキ','ボーカル','名所']

const data = [
  // A
  {id:'conv_05921',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom comforts her son after a bad day',lines:[
    {speaker:'sho_child',jp:'ママ、夕飯、冷めちゃったね。',en:"Mom, dinner went cold.",style:'Subdued child.'},
    {speaker:'yumiko_mom',jp:'温め直すから、笑みで待っててね。',en:"I'll reheat — wait with a smile.",style:'Tender.'},
    {speaker:'sho_child',jp:'今日、こたえる質問、答えられなかった。',en:"Today, couldn't answer a hard question.",style:'Vulnerable.'},
    {speaker:'yumiko_mom',jp:'ピンチも、経験のうちよ。',en:"Pinches are experience too.",style:'Warm.'},
    {speaker:'sho_child',jp:'お父さん、また留守?',en:"Dad away again?",style:'Soft.'},
    {speaker:'yumiko_mom',jp:'うん、出張中。クラスでケンカしたの?',en:"Yes, on a trip. Fight in class?",style:'Soft.'},
    {speaker:'sho_child',jp:'ううん。でも、自分の居場所が分からない時がある。',en:"No. But sometimes I can't find my place.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'ママに、いつでも確かめるんだよ、ここがあなたの居場所だって。',en:"Confirm with me anytime — here's your place.",style:'Tender close.'},
  ]},
  {id:'conv_05922',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends decompress',lines:[
    {speaker:'mei_romantic',jp:'コーヒー、冷めない内に話したいことがあるの。',en:"Want to talk before the coffee cools.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん。笑みで聞くから、話して。',en:"Yes. I'll listen with a smile.",style:'Gentle.'},
    {speaker:'mei_romantic',jp:'最近、こたえる相談ばかりで、疲れた。',en:"Lately, only hard consultations — tired.",style:'Vulnerable.'},
    {speaker:'aoi_barista',jp:'ピンチに陥る人、増えてるからね。',en:"More folks falling into pinches.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'親が留守の日、心細くなる。',en:"Days my parents are out — feel lonely.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'家族とのケンカ、長引いてるの?',en:"Family fights — dragging on?",style:'Probe.'},
    {speaker:'mei_romantic',jp:'今、自分の居場所、どこか分からなくて。',en:"Right now, can't tell where my place is.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'一緒に確かめる、それでいい。',en:"Confirm together. That's enough.",style:'Warm close.'},
  ]},
  {id:'conv_05923',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat after school',lines:[
    {speaker:'sakura_teen',jp:'お弁当、もう冷めてた。',en:"My bento was already cold.",style:'Wry teen.'},
    {speaker:'riku_teen',jp:'うん。先生の笑み、たまに怖く見えるよな。',en:"Yeah. Teacher's smile sometimes looks scary.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'今日のテスト、こたえる問題が多かった。',en:"Today's test had many hard questions.",style:'Subdued.'},
    {speaker:'riku_teen',jp:'勉強会、来週ピンチを助け合おう。',en:"Study group — help each other through next-week pinches.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'明日、家、留守なの。',en:"Tomorrow my house is empty.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'兄貴とケンカした?',en:"Fight with your bro?",style:'Probe.'},
    {speaker:'sakura_teen',jp:'ううん。でも、家での居場所、ちょっと変わるかも。',en:"No. But my place at home might shift a bit.",style:'Soft.'},
    {speaker:'riku_teen',jp:'落ち着いて、自分の気持ち確かめる時間、持ちな。',en:"Calm down — make time to verify your feelings.",style:'Warm close.'},
  ]},
  {id:'conv_05924',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats at night',lines:[
    {speaker:'hiroshi_elder',jp:'お茶、冷めない内に。',en:"Tea — before it cools.",style:'Calm.'},
    {speaker:'sachiko_grandma',jp:'はい。あなたの笑み、若い頃と変わらないわ。',en:"Yes. Your smile — unchanged from youth.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'年取ると、こたえる質問、増えるな。',en:"With age, hard questions multiply.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'人生のピンチ、二人で乗り越えてきた。',en:"Life's pinches — we crossed together.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'子供たち、留守がちでも、元気でいてくれて、ありがたい。',en:"Kids — often away, but healthy. Grateful.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'昔は、ご近所とのケンカも、笑い話になってる。',en:"Old neighborhood spats — laugh-fodder now.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'お互いに、居場所が居場所であると、確かめる時間、大事だ。',en:"Confirming that each other's place is the place — precious time.",style:'Warm close.'},
  ]},
  {id:'conv_05925',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai supports a teen',lines:[
    {speaker:'sakura_teen',jp:'先輩、テスト、冷めかけたパンで朝食食べて受けてきました。',en:"Senpai, ate cooling bread for breakfast before the test.",style:'Wry teen.'},
    {speaker:'ren_uni',jp:'お疲れ。緊張の笑み、よくやった。',en:"Good work. Tense smile — well done.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'こたえる長文、最後まで読み切れませんでした。',en:"Hard long-passage — couldn't finish.",style:'Subdued.'},
    {speaker:'ren_uni',jp:'ピンチの状況、次に活かせ。',en:"Use the pinch for next time.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'家、両親が留守で、夜は一人なんです。',en:"Home — parents away; alone tonight.",style:'Vulnerable.'},
    {speaker:'ren_uni',jp:'弟妹とのケンカ、避けながら過ごせ。',en:"Avoid fights with siblings while you're at it.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'家庭が居場所として、機能していると確かめる作業、必要ですね。',en:"Confirming home functions as my place is necessary.",style:'Reflective close.'},
  ]},

  // B
  {id:'conv_05926',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews international project ops',lines:[
    {speaker:'hiroshi_boss',jp:'海外案件、出費が想定を超えている。',en:"Overseas project — spend overshooting.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。税関手続きで散々な遅延、発生しました。',en:"Yes. Customs caused brutal delays.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'現場、誰が駆けつけたんだ。',en:"Who rushed to the site?",style:'Direction.'},
    {speaker:'kenji_office',jp:'多忙な中、二人が出張対応してくれました。',en:"Amid busy schedules, two handled the trip.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'銀行融資の利息、月間ベースで増減を確認しろ。',en:"Bank-loan interest — confirm monthly fluctuations.",style:'Direction.'},
    {speaker:'kenji_office',jp:'定時で帰れる体制、見直しています。',en:"On-time-leave system — under review.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'人を大事に。',en:"Value people.",style:'Close.'},
  ]},
  {id:'conv_05927',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss month-end',lines:[
    {speaker:'yuki_office',jp:'月間の経費、出費が増えてるね。',en:"Monthly expenses — outlay rising.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。税関での追加コスト、散々な月でした。',en:"Yes. Customs surcharges — a brutal month.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'現場へ駆けつけた担当、評価しないと。',en:"On-site responders — should be recognized.",style:'Direction.'},
    {speaker:'kenji_office',jp:'多忙な中、感謝です。',en:"Grateful amid heavy load.",style:'Soft.'},
    {speaker:'yuki_office',jp:'融資利息、来月から軽くしたい。',en:"Loan interest — want it lighter next month.",style:'Direction.'},
    {speaker:'kenji_office',jp:'定時退社、徹底させていきます。',en:"On-time leave — enforce strictly.",style:'Update close.'},
  ]},
  {id:'conv_05928',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、企業経営、出費と収入のバランスが命だ。',en:"Ren, biz mgmt — the spend/income balance is life.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'税関対応、複雑なんですね。',en:"Customs handling — complex.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'現場に駆けつける機動性、組織にとって重要だ。',en:"Field-rush agility is critical for the org.",style:'Direction.'},
    {speaker:'ren_uni',jp:'散々な状況、過去にもあったんですか。',en:"Brutal situations in the past too?",style:'Curious.'},
    {speaker:'hiroshi_boss',jp:'うん。利息負担、月間で数億円規模だった時期もある。',en:"Yes. Interest burdens hit hundreds of millions monthly at times.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'多忙な毎日、定時で帰る難しさ、現場で学びます。',en:"On busy days, leaving on time is hard — I'll learn at the front.",style:'Earnest close.'},
  ]},
  {id:'conv_05929',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on financial-crime risks',lines:[
    {speaker:'takeda_officer',jp:'御社の海外出費、税関連動の異常、警察で監視中です。',en:"Your overseas spending — customs-linked anomalies under police watch.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。先月、警察が駆けつけた事案、ありました。',en:"Yes. Last month, a police response to one incident.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'散々な広報対応、改善できますか。',en:"Brutal PR — fixable?",style:'Procedural.'},
    {speaker:'kenji_office',jp:'利息の流れ、月間で集計しています。',en:"Interest flow — aggregated monthly.",style:'Update.'},
    {speaker:'takeda_officer',jp:'担当者、多忙な中、定時で済ませる体制を。',en:"Staff — even amid load, structure on-time exits.",style:'Procedural close.'},
  ]},
  {id:'conv_05930',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'出費の管理、若い頃は苦労した。',en:"Spend management — struggled in youth.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。税関手続きも、当時は紙ベースで散々でしたね。',en:"Yes. Customs — paper-based and brutal back then.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'駆けつける部下、信頼関係で動いていた。',en:"Subordinates rushed in by trust.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'利息と月間予算、管理を厳しくしています。',en:"Interest and monthly budget — tightly managed.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'多忙でも、定時で帰せ。それが長期の利益だ。',en:"Even busy, send them home on time. That's long-term profit.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_05931',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a reporter about a complex case',lines:[
    {speaker:'takeda_officer',jp:'本件、二つの陣営の対立、長引いています。',en:"This case — two-camp conflict drags on.",style:'Calm.'},
    {speaker:'ren_uni',jp:'隠蔽工作も、疑われていますね。',en:"Cover-ups also suspected.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。介助を装った接点、被害者と容疑者の間にありました。',en:"Yes. A care-disguised contact between victim and suspect.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'証拠品の取り扱う段階、丁寧ですね。',en:"Evidence-handling stage is careful.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'内臓に関する法医学情報、報道は配慮を要します。',en:"Forensic info on organs — press needs care.",style:'Firm.'},
    {speaker:'ren_uni',jp:'判決を巡る賛否、世論にも届きますね。',en:"Verdict-related pros/cons reach public opinion.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。取り締まり強化、警察庁の方針です。',en:"Yes. Crackdown reinforcement — NPA policy.",style:'Procedural close.'},
  ]},
  {id:'conv_05932',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher and student discuss a political-history paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、戦時期の二陣営の対比、緻密ですね。',en:"Paper — wartime two-camp contrast, intricate.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。情報隠蔽の手口、史料に基づき扱いました。',en:"Yes. Info-suppression methods — handled with sources.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦傷者の介助制度、当時の社会との接点もありますね。',en:"Wounded-care systems — touchpoints with period society.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'当時、解剖学的に内臓障害を扱う研究、限定的でした。',en:"Then, anatomical organ-disorder research was limited.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'政治家の賛否、戦後の取り締まりにも影響しました。',en:"Politicians' divided views shaped postwar crackdowns too.",style:'Reflective close.'},
  ]},
  {id:'conv_05933',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor explains medical-ethics issues',lines:[
    {speaker:'saito_doctor',jp:'医療現場、二陣営に分かれる議論、たまにあります。',en:"In medicine, two-camp debates sometimes arise.",style:'Calm.'},
    {speaker:'ren_uni',jp:'過去の隠蔽事件、業界の信頼を傷つけましたね。',en:"Past cover-ups hurt industry trust.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。介助保険、患者との接点を増やす制度です。',en:"Yes. Care insurance — system increasing patient touchpoints.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療データを取り扱う基準、内臓関連、特に厳しいですね。',en:"Medical-data standards — organ-related especially strict.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'治療法への賛否、議論する場が必要です。',en:"Pros/cons of treatments need debate forums.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'違法な臨床実験、取り締まりは厳格化されましたか。',en:"Illegal trials — crackdowns tightened?",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。世界的にも、です。',en:"Yes — globally too.",style:'Firm close.'},
  ]},
  {id:'conv_05934',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews a corporate-ethics situation',lines:[
    {speaker:'hiroshi_boss',jp:'業界、二陣営に分かれて、ロビー活動が活発だ。',en:"Industry — split into two camps, active lobbying.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。過去の隠蔽疑惑、再燃しないよう警戒しています。',en:"Yes. Past suppression doubts — vigilant against revival.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'CSRで、介助関係の事業、接点を強化したい。',en:"In CSR — strengthen care-related touchpoints.",style:'Direction.'},
    {speaker:'kenji_office',jp:'食品の内臓系部位の取り扱う規定、見直しています。',en:"Food-organ-segment handling regulations — under review.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界の賛否、無視するな。当局の取り締まり、強まる可能性。',en:"Don't dismiss split views. Crackdowns may strengthen.",style:'Decisive close.'},
  ]},
  {id:'conv_05935',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a current-events project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、地域社会、二陣営の対立、現代的なテーマね。',en:"Sakura, regional society — two-camp conflict, modern theme.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。情報隠蔽が疑われた事案、章として扱いました。',en:"Yes. Suppression-suspected cases handled as a chapter.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'介助の現場、地域との接点が深まっていますね。',en:"Care-front lines — community touchpoints deepening.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'感染症の内臓への影響、医療従事者の取り扱う領域です。',en:"Infectious diseases' organ impact — handled by medics.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'政策の賛否、地域での取り締まり議論、入念に。',en:"Policy pros/cons, community-crackdown debates — carefully.",style:'Reflective close.'},
  ]},

  // D
  {id:'conv_05936',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends plan a cultural weekend',lines:[
    {speaker:'mei_romantic',jp:'今週末、テラス席のカフェで、童話の朗読会あるの。',en:"This weekend — terrace cafe hosts a fairy-tale reading.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'素敵!夜は歌舞伎座、戦国モノを観に行こう。',en:"Lovely! Night — Kabuki-za for a Sengoku-period piece.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'うん。神道の儀式と、舞台演出の関係、解説本買ったの。',en:"Yes. Shinto rites and stagecraft — I got an explainer book.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'帰り、ステーキ食べて、夜更かしね。',en:"Late return — steak and a late night.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'バンドのボーカルが、今晩、ライブ配信もするって。',en:"The band's vocalist livestreams tonight too.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'地元の名所、ガイドブックで再確認しよう。',en:"Local landmarks — re-check the guide.",style:'Practical close.'},
  ]},
  {id:'conv_05937',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher and student discuss a culture course',lines:[
    {speaker:'asuka_teacher',jp:'論文、テラス劇場と童話の演出史、面白い切り口ですね。',en:"Paper — outdoor-terrace theater and fairy-tale staging history, fresh angle.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。歌舞伎の伝統、戦国時代の演目との接続も扱いました。',en:"Yes. Kabuki tradition — links to Sengoku-era plays too.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'神道の儀式が舞台に与えた影響、章として丁寧ですね。',en:"Shinto-rites stage influence — careful as a chapter.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'国際的には、ステーキ文化の興隆と娯楽史の対比も論じました。',en:"Globally — steak-culture rise vs. entertainment history.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'現代のボーカル文化、名所ツアーとの連携も興味深いですね。',en:"Modern vocal culture, landmark-tour links — also intriguing.",style:'Reflective close.'},
  ]},
  {id:'conv_05938',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens plan a culture event',lines:[
    {speaker:'sakura_teen',jp:'テラス席のレストラン、近所にできたって。',en:"Terrace-seat restaurant — new in the area.",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'童話展、隣の市立図書館でやってる。',en:"Fairy-tale show — at the next-city library.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'歌舞伎のワークショップも、夏休みに開かれるって。',en:"Kabuki workshop runs in summer too.",style:'Animated.'},
    {speaker:'riku_teen',jp:'戦国時代の鎧、博物館で展示されてるよ。',en:"Sengoku armor on display at the museum.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'神道の祭礼、地元神社で来月。',en:"Shinto festival — local shrine next month.",style:'Bright.'},
    {speaker:'riku_teen',jp:'ご褒美に、ステーキ食べに行こうよ。',en:"Reward — let's go for steak.",style:'Cheerful.'},
    {speaker:'sakura_teen',jp:'軽音部のボーカル、文化祭で歌うって。',en:"Light-music vocalist sings at the fest.",style:'Animated.'},
    {speaker:'riku_teen',jp:'近場の名所も、巡ろう。',en:"Local landmarks — tour too.",style:'Warm close.'},
  ]},
  {id:'conv_05939',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces about cultural outings',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、テラスのある喫茶店、よく通ったな。',en:"In youth, often visited a terrace cafe.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。子供たちに童話を読み聞かせたわね。',en:"Yes. We read fairy tales to the kids.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'結婚記念日に、歌舞伎座、二人で観劇したっけ。',en:"Anniversary — we saw a play at Kabuki-za.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'戦国大河、家族で見るの楽しみだったわね。',en:"Sengoku taiga — family viewing was a delight.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'神道のお祭り、近所で毎年行ってた。',en:"Shinto fest — neighborhood, every year.",style:'Soft.'},
    {speaker:'sachiko_grandma',jp:'記念日にステーキを食べに行くの、続けたいわ。',en:"Anniversary-steak — let's keep it up.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'子の声楽発表、ボーカル教室の名物だったな。',en:"Our child's vocal recital — a vocal-class staple.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'国内の名所、まだ巡りきれてないわよ。',en:"Domestic landmarks — yet to fully tour.",style:'Warm close.'},
  ]},
  {id:'conv_05940',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan a culture-themed menu',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、夏のテラス営業、特別企画やらんか。',en:"Aoi-san, summer terrace — special?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。童話モチーフのスイーツ、出したいです。',en:"Yes. Fairy-tale-motif sweets — want to release.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'歌舞伎風のラベル、限定ボトルにええで。',en:"Kabuki-style labels for limited bottles.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'戦国大河のロケ地マップも、店内に貼ろうかな。',en:"Sengoku-taiga shooting-location map — post in-store too.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'神道系の盛り塩、入口にしよか。',en:"Shinto-style salt-pile at the entrance.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'夜営業、ステーキセットも、人気出そう。',en:"Night ops — steak set should be popular.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'ボーカル系のライブも、月一でええな。',en:"Vocal lives — monthly fits.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'地元の名所、観光客に案内できるカードを置きましょう。',en:"Local-landmark cards for tourists — place them.",style:'Warm close.'},
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

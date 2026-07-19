import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_323 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['水中','乾い','細く','硬い','吸い','触る','弾け','滑っ']
const B_T = ['創り','分別','持ち込ま','金庫','定量','届け出','書式','配管']
const C_T = ['探っ','効か','呪い','治っ','振ら','古今','身元','速攻']
const D_T = ['洗剤','ひとまず','ナイス','プチ','デカ','ポチ','ダッシュ','バッチリ']

const data = [
  // A
  {id:'conv_06421',cluster:'A',ambient:'park_distant_birds',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son spend time at the pool',lines:[
    {speaker:'sho_child',jp:'ママ、水中で、息、止められる時間、長くなった!',en:"Mom — underwater breath-hold, longer!",style:'Excited child.'},
    {speaker:'yumiko_mom',jp:'うん。洗濯物、乾いたら、畳んでね。',en:"Yes. Laundry — after drying, fold.",style:'Tender.'},
    {speaker:'sho_child',jp:'パスタ、細くて、食べやすい。',en:"Pasta — slim, easy to eat.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'お餅、硬いと、お母さん、食べづらいわ。',en:"Mochi — hard, hard for Mom to eat.",style:'Wry.'},
    {speaker:'sho_child',jp:'ジュース、ストローで吸いきっちゃった。',en:"Juice — sucked dry with straw.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'熱い鍋、触らないでね、危ないから。',en:"Hot pot — don't touch; dangerous.",style:'Direction.'},
    {speaker:'sho_child',jp:'シャボン玉、弾けたら、笑顔になる。',en:"Bubbles — popping, smile-making.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'石、滑って、転ばないでね。',en:"Stones — don't slip and fall.",style:'Warm close.'},
  ]},
  {id:'conv_06422',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、水中で泳ぐの、大好きだった。',en:"In youth — loved swimming underwater.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。庭の洗濯物、太陽で、よく乾いたわね。',en:"Yes. Garden laundry — sunshine-dried well.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'お前の手、年月で、細くなったな。',en:"Your hands — slimmer with years.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'最近、お餅、硬いの、苦手になったわ。',en:"Lately — hard mochi, dislike.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'コーヒー、ストローで吸い続けたら、変な顔されたな。',en:"Coffee — kept sucking with straw, weird face.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'お互いの手、触ると、いつも安心するね。',en:"Mutual hands — touching, always reassuring.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'花火、最後の一発、見事に弾けた。',en:"Fireworks — last shot, spectacularly burst.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'濡れた廊下、滑って転んじゃダメよ。',en:"Wet hall — don't slip and fall.",style:'Warm close.'},
  ]},
  {id:'conv_06423',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'最近、ジムのプール、水中エアロビ、始めた。',en:"Recently — gym pool, water-aerobics started.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。タオル、すぐに乾いた、いい天気。',en:"Yeah. Towel — quickly dried, good weather.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'デザイナーが、細くて繊細な線、描いてた。',en:"Designer — drew slim, delicate lines.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'お煎餅、硬いタイプ、男性に人気。',en:"Rice crackers — hard, popular with men.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'タピオカ、吸いやすいストロー、新登場。',en:"Tapioca — easy-suck straw, new.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'子供、ピアノに触る時、優しくね、と教えてる。',en:"Kid — touching piano, gentle, teaching.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'シャンパン、コルク、勢いよく弾けた。',en:"Champagne — cork forcefully popped.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'雪道、滑って怪我しないよう、注意ね。',en:"Snowy road — don't slip-injure, careful.",style:'Warm close.'},
  ]},
  {id:'conv_06424',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'プール授業、水中、目、開けるの怖い。',en:"Pool class — underwater eye-open, scary.",style:'Reflective teen.'},
    {speaker:'riku_teen',jp:'うん。塗料が乾いたら、絵、完成。',en:"Yeah. Paint dried — picture done.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'髪の毛、細く伸びるの、最近気にしてる。',en:"Hair — slim-growing, mind lately.",style:'Wry.'},
    {speaker:'riku_teen',jp:'今日の英語のテスト、文法、硬い表現多かった。',en:"Today's English test — many hard grammatical expressions.",style:'Subdued.'},
    {speaker:'sakura_teen',jp:'授業中、エネルギーを吸い取られた、疲れた。',en:"During class — energy sucked, tired.",style:'Animated.'},
    {speaker:'riku_teen',jp:'楽器、優しく触るんだぞ、新しいから。',en:"Instrument — gently touch, new.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'シャープペン、芯、弾け飛んだ、ショック。',en:"Mechanical pencil — lead burst out, shock.",style:'Wry.'},
    {speaker:'riku_teen',jp:'雨で滑った道、気を付けて帰ろう。',en:"Rain-slipped path — careful go home.",style:'Warm close.'},
  ]},
  {id:'conv_06425',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai and a teen chat',lines:[
    {speaker:'ren_uni',jp:'桜、水中の生物、研究、興味あるか。',en:"Sakura — underwater organisms, interested in research?",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'はい。雨で濡れたノート、乾いたら、また使えます。',en:"Yes. Wet notebook — once dried, usable.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'髪、細くて、軽やかな感じ、似合うな。',en:"Hair — slim, light-feel, suits.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'パン、硬いタイプ、苦手だけど、栄養価、高いです。',en:"Bread — hard, dislike, but nutritious.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'スポンジ、水、吸い込ませて、実験中。',en:"Sponge — soaking, experimenting.",style:'Curious.'},
    {speaker:'sakura_teen',jp:'実験器具、優しく触るよう、注意してます。',en:"Lab gear — gentle-touch, mindful.",style:'Polite.'},
    {speaker:'ren_uni',jp:'試験管、シャッターが弾けた音、ちょっと驚いた。',en:"Test tube — shutter pop-sound, slightly startled.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'廊下が、雨で滑る時期、気をつけます。',en:"Hallways — slip-rain season, careful.",style:'Polite close.'},
  ]},

  // B
  {id:'conv_06426',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'新工程、当社で創り上げた技術だ。',en:"New process — built up at our firm.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。ゴミ、分別徹底、進めています。',en:"Yes. Trash — sorting-strict advance.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'機密、外部に持ち込ませないように。',en:"Confidential — don't allow external take.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。金庫、新型に交換しました。',en:"Yes. Safe — new model swap.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'生産、定量で安定させろ。',en:"Production — stabilize fixed-quantity.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。届け出書類、関係官庁に提出済みです。',en:"Yes. Filings — submitted to authorities.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'書式、統一しろ。',en:"Form — unify.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。工場の配管、保守、定期実施しています。',en:"Yes. Plant piping — maintenance regular.",style:'Close.'},
  ]},
  {id:'conv_06427',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss',lines:[
    {speaker:'yuki_office',jp:'新ブランド、独自で創り上げよう。',en:"New brand — uniquely build.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。リサイクル、分別ルール、社員に共有します。',en:"Yes. Recycling — sort-rules shared.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'資料、家に持ち込ませない方針、徹底。',en:"Materials — no home-take, strict.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。金庫、暗証番号、月一で更新。',en:"Yes. Safe — code monthly-updated.",style:'Update.'},
    {speaker:'yuki_office',jp:'発注、定量で予測しよう。',en:"Orders — fixed-quantity forecast.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。各種届け出、期限内に。',en:"Yes. Various filings — by deadline.",style:'Update.'},
    {speaker:'yuki_office',jp:'契約書式、来週、改訂版に。',en:"Contract form — revised next week.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。建物の配管、点検、明日実施します。',en:"Yes. Building piping — inspect tomorrow.",style:'Close.'},
  ]},
  {id:'conv_06428',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、新規事業、ゼロから創り上げる経験、貴重だ。',en:"Ren — new biz, zero-to-build, valuable.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。エコ意識、ゴミ分別、心がけます。',en:"Yes. Eco-mind — trash-sort, mindful.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'機密、社外に持ち込ませる、絶対許可しないぞ。',en:"Confidential — outside-take, never.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。金庫の扱い、社員にも教育されていますね。',en:"Yes. Safe-handling — staff-educated.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'発注、定量管理、若手にも任せたい。',en:"Orders — fixed-quantity mgmt, also delegate to youth.",style:'Direction.'},
    {speaker:'ren_uni',jp:'各種届け出書類、見させてください。',en:"Various filings — let me see.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'業界書式、覚えておけ。',en:"Industry forms — memorize.",style:'Direction.'},
    {speaker:'ren_uni',jp:'配管工事、施設見学で、勉強になります。',en:"Piping work — facility-tour, instructive.",style:'Earnest close.'},
  ]},
  {id:'conv_06429',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on coordination',lines:[
    {speaker:'takeda_officer',jp:'警察組織、若手と共に、新しい体制を創り上げます。',en:"Police org — with youth, build new structure.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。社内、ゴミ分別、警察の啓発活動とも連動。',en:"Yes. In-house trash-sort — police-awareness linked.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'証拠品、外部に持ち込ませることはありません。',en:"Evidence — never external-take.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。重要文書、金庫保管、徹底中です。',en:"Yes. Key docs — safe-store, strict.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警備、定量配備、地域全域で実施しています。',en:"Patrols — fixed-quantity deployment, region-wide.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。事件届け出、迅速対応します。',en:"Yes. Incident filings — swift response.",style:'Commitment.'},
    {speaker:'takeda_officer',jp:'警察書式、共通化、進めています。',en:"Police forms — unification, advance.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。社屋の配管、警察と合同点検、可能ですか。',en:"Yes. HQ piping — joint inspection?",style:'Polite close.'},
  ]},
  {id:'conv_06430',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、何もないところから事業を創り上げた。',en:"In youth — built biz from nothing.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。社員、分別意識、定着しています。',en:"Yes. Staff sort-awareness, settled.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'機密、家に持ち込ませる文化、当時から、避けてきた。',en:"Confidential home-take — long avoided.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。金庫、創業時のもの、まだ使っています。',en:"Yes. Founding-era safe — still in use.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'定量供給、信頼の基本だ。',en:"Fixed-quantity supply — trust basic.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。各種届け出、若手に経験させています。',en:"Yes. Various filings — youth-experienced.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'業界書式、若い頃から、自分で書いた。',en:"Industry forms — self-written since youth.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。配管も、長期投資、忘れません。',en:"Yes. Piping — long-investment, not forgotten.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06431',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs about a case',lines:[
    {speaker:'takeda_officer',jp:'容疑者の心理、地道に探っています。',en:"Suspect psych — patiently probing.",style:'Calm.'},
    {speaker:'ren_uni',jp:'説得が効かない時、対応、難しいですね。',en:"Persuasion-ineffective — response hard.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。地域の呪いと言われる伝承、関連あると噂されています。',en:"Yes. Region's so-called curse legend — rumored related.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害者の傷、治った後の心のケア、必要ですね。',en:"Victim wounds — post-heal psych care needed.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。世論に振らされず、捜査、続けます。',en:"Yes. Not opinion-swayed — investigation continues.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'古今東西の事件、参考事例、多いですね。',en:"Ancient-modern cases — many references.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。容疑者の身元、特定しました。',en:"Yes. Suspect ID — confirmed.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'速攻で逮捕、判断、見事でしたね。',en:"Swift arrest — splendid call.",style:'Curious close.'},
  ]},
  {id:'conv_06432',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses research',lines:[
    {speaker:'asuka_teacher',jp:'論文、隠された動機、探ってますね。',en:"Paper — probing hidden motives.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。対策が効かない地域、章にしました。',en:"Yes. Measures-ineffective regions — chapter.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'伝統的な呪いの研究、独創的な視点ですね。',en:"Traditional curse research — original.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'歴史的トラウマが治った例、章末で扱いました。',en:"Healed historical traumas — chapter end.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'メディアに振らされない研究姿勢、評価できます。',en:"Non-media-swayed stance — praised.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'古今の事例を組み合わせて、説得力、出ました。',en:"Ancient-modern combo — persuasiveness emerged.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'被害者の身元、匿名化、丁寧でしたね。',en:"Victim IDs — anonymized carefully.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'速攻での発表、評価された場面でした。',en:"Swift release — praised moment.",style:'Earnest close.'},
  ]},
  {id:'conv_06433',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、新薬の効果、地道に探っています。',en:"Ren — new-drug effect, patiently probing.",style:'Calm.'},
    {speaker:'ren_uni',jp:'治療が効かない症例、報告書に、必ず含めますね。',en:"Treatment-ineffective cases — always in reports.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。古い民間療法の呪い、医学的検証中です。',en:"Yes. Old folk-remedy curses — medically verifying.",style:'Patient.'},
    {speaker:'ren_uni',jp:'病が治った後の、心理ケア、長期的に必要ですね。',en:"Post-cure psych care — long-term needed.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。風評に振らされず、診療続けます。',en:"Yes. Not rumor-swayed — care continues.",style:'Informative.'},
    {speaker:'ren_uni',jp:'古今東西、医学の進歩、勉強になりますね。',en:"Ancient-modern medical advance — instructive.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。患者の身元、しっかり確認します。',en:"Yes. Patient ID — firm-confirmed.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'救急、速攻での対応、医師の腕、見ます。',en:"ER — swift response shows skill.",style:'Curious close.'},
  ]},
  {id:'conv_06434',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews a case',lines:[
    {speaker:'hiroshi_boss',jp:'競合の動向、地道に探っているか。',en:"Rival trends — patiently probing?",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。広告、効かないチャネルもあります。',en:"Yes. Ads — also ineffective-channels.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'業界の呪いみたいな伝統、変えていこう。',en:"Industry curse-like tradition — let's change.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。クレーム、対応で治った事例、社内共有します。',en:"Yes. Resolved-complaint cases — internal share.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'市場、振らされない戦略を持て。',en:"Market — non-swayed strategy.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。古今の競争事例、参考にします。',en:"Yes. Ancient-modern competition examples — referenced.",style:'Bright.'},
    {speaker:'hiroshi_boss',jp:'新人の身元、しっかり確認しろ。',en:"New-hire IDs — firm-verify.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。問題、速攻で対応する体制、整えます。',en:"Yes. Issues — swift-response structure set.",style:'Close.'},
  ]},
  {id:'conv_06435',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、地域の謎、地道に探ったんですね。',en:"Sakura — region mystery, patiently probed.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。広報が効かない地域、章にしました。',en:"Yes. PR-ineffective regions — chapter.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'古い呪いの伝説、文化人類学的に扱いましたね。',en:"Old curse legend — cultural-anthropology.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。歴史の傷が治った地域、復活の例、書きました。',en:"Yes. History-wound-healed regions — revival cases.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'観光宣伝に振らされない地域、貴重ですね。',en:"Non-tourism-swayed regions — precious.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'古今の地域研究、比較しました。',en:"Ancient-modern regional research — compared.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'資料の身元、出典、明示しましたね。',en:"Source IDs — origins clarified.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'速攻での結論、慎重に書きました。',en:"Swift conclusion — careful writing.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06436',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'家の洗剤、新しいの試したいの。',en:"Home detergent — wanna try new.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。今日、ひとまず、コーヒー、一杯どうぞ。',en:"Yeah. Today — for now, a coffee.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'昨日のプレゼン、ナイスな反応、貰った。',en:"Yesterday's pres — nice reactions.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'プチギフト、お客様に配ろうかな。',en:"Petite gifts — distribute to guests?",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'駅前のショッピングモール、デカい新店舗、できた。',en:"Station mall — big new store opened.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'うちの犬、ポチ、近所で人気者。',en:"Our dog Pochi — popular locally.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'駅へダッシュで向かったら、間に合った。',en:"Dashed to station — made it.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'発表、バッチリ決まって、よかったね。',en:"Pres — settled perfectly, glad.",style:'Warm close.'},
  ]},
  {id:'conv_06437',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、洗濯洗剤、いい香り、するね。',en:"Mom — laundry detergent, nice scent.",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'うん。今日は、ひとまず、宿題、終わらせようね。',en:"Yes. Today — for now, finish homework.",style:'Tender.'},
    {speaker:'sho_child',jp:'お友達、運動会で、ナイスなプレー、見せた!',en:"Friend — sports day, nice play shown!",style:'Excited.'},
    {speaker:'yumiko_mom',jp:'プチカップケーキ、おやつにしようね。',en:"Petite cupcakes — for snack.",style:'Warm.'},
    {speaker:'sho_child',jp:'公園のジャングルジム、デカい!',en:"Park jungle-gym — big!",style:'Awe.'},
    {speaker:'yumiko_mom',jp:'うちのワンちゃん、ポチって、皆呼んでくれる。',en:"Our doggy Pochi — everyone calls.",style:'Soft.'},
    {speaker:'sho_child',jp:'授業終わってからダッシュで、塾、走る!',en:"After class — dash to cram-run!",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'準備、バッチリにしておこうね。',en:"Prep — settle perfectly.",style:'Warm close.'},
  ]},
  {id:'conv_06438',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'実験室で、洗剤を使った後、ちゃんと拭いた。',en:"Lab — after detergent use, wiped properly.",style:'Casual teen.'},
    {speaker:'riku_teen',jp:'うん。お腹空いた、ひとまず、コンビニ寄ろう。',en:"Yeah. Hungry — for now, hit conbini.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'バスケ部、後輩がナイスなシュート、決めた。',en:"Basketball — junior nice-shot, settled.",style:'Animated.'},
    {speaker:'riku_teen',jp:'プチパンケーキ、新作、買ったよ。',en:"Petite pancake — new release bought.",style:'Bright.'},
    {speaker:'sakura_teen',jp:'駅前のスーパー、デカいセールやってる。',en:"Station supermarket — big sale.",style:'Excited.'},
    {speaker:'riku_teen',jp:'おばあちゃんちのポチ、最近、元気みたい。',en:"Granny's Pochi — lately energetic.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'始業ベル、聞こえた、ダッシュで戻ろう。',en:"Start bell — heard, dash back.",style:'Animated.'},
    {speaker:'riku_teen',jp:'テスト勉強、バッチリ、終わらせたい。',en:"Test study — wrap perfectly.",style:'Reflective close.'},
  ]},
  {id:'conv_06439',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'昔の洗剤、香り、強かったな。',en:"Old detergent — strong scent.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。今日は、ひとまず、お茶でも飲みましょう。',en:"Yes. Today — for now, tea?",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃の野球、ナイスなホームラン、覚えてる?',en:"Youth baseball — nice homer, remember?",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'孫の手土産、プチケーキ、可愛かったわ。',en:"Grandkid's souvenir — petite cake, cute.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'昔のスーパー、駅前、デカい建物だった。',en:"Old supermarket — station-front big building.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'近所のポチ、毎朝、散歩で会うね。',en:"Local Pochi — every-morning walk-meet.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'若い頃、運動会で、ダッシュ、得意だった。',en:"In youth — sports day, dash, was good.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'夕食の準備、もう、バッチリ整ったわよ。',en:"Dinner prep — already perfectly set.",style:'Warm close.'},
  ]},
  {id:'conv_06440',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan an event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、店の洗剤、エコ系に変えよか。',en:"Aoi-san — shop detergent, switch to eco?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。ひとまず、サンプル、取り寄せます。',en:"Yes. For now — samples ordered.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'評論で、ナイスなレビュー、もらえたな。',en:"Review — nice praise, received.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'プチデザートセット、新メニューに加えます。',en:"Petite-dessert set — add new menu.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'業務用冷蔵庫、デカい新型、入れよか。',en:"Pro-fridge — big new model in?",style:'Practical.'},
    {speaker:'aoi_barista',jp:'看板猫、ポチ風の名前、皆気に入ってます。',en:"Mascot cat — Pochi-style name, all love.",style:'Warm.'},
    {speaker:'daichi_kansai',jp:'忙しい時、スタッフはダッシュで動く。',en:"Busy times — staff dash.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'閉店前、後片付け、バッチリ済ませましょう。',en:"Pre-close — cleanup perfectly done.",style:'Warm close.'},
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

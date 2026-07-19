import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_324 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['些細','年中','最期','人前','一夜','ほしく','濃く','くさい']
const B_T = ['文体','電動','見送り','例文','厚み','大きめ','学費','利上げ']
const C_T = ['農協','アポ','故に','計り','交差','つかめ','生後','下流']
const D_T = ['こんなふうに','げん','ツン','むけ','掴ん','やけに','よろしゅう','甘味']

const data = [
  // A
  {id:'conv_06441',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'最近、些細なことで、夫と口論しちゃう。',en:"Lately — trivial spats with husband.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'うん。年中、忙しい時期、続いてるよね。',en:"Yeah. Year-round busy times continue.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'祖父の最期に立ち会えなかったのが、悔やまれる。',en:"Couldn't be there for grandfather's last — regretful.",style:'Vulnerable.'},
    {speaker:'aoi_barista',jp:'人前で泣くの、なんか恥ずかしいよね。',en:"Crying in public — somewhat embarrassing.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'昨夜、一夜で考え直して、ようやく落ち着いた。',en:"Last night — one-night reconsidered, finally calm.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'お菓子、ほしくなる時、よくあるね。',en:"Sweets — wanted times, often.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'コーヒー、濃く淹れて。',en:"Coffee — brew strong.",style:'Direction.'},
    {speaker:'aoi_barista',jp:'昨日、店の空気、くさい感じだった、換気しなきゃ。',en:"Yesterday's shop air — stuffy; ventilate.",style:'Wry close.'},
  ]},
  {id:'conv_06442',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'些細なことが、年取ると、気になる。',en:"Trivial things — with age, bother.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。庭の手入れ、年中、続けないとね。',en:"Yes. Garden care — year-round continue.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'お互いの最期、どう迎えるか、話す時期かもな。',en:"Each-other's last — time to discuss.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'人前で甘い言葉、苦手だったわね、若い頃から。',en:"In public — sweet words, dislike since youth.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'一夜で結論、出せる問題じゃないさ。',en:"One-night conclusions — not for such issues.",style:'Direction.'},
    {speaker:'sachiko_grandma',jp:'孫が、おもちゃをほしくなって、せがむわよ。',en:"Grandkid — toys wanted, begs.",style:'Wry.'},
    {speaker:'hiroshi_elder',jp:'お茶、濃く淹れすぎたな。',en:"Tea — too strongly brewed.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'布団、干さないと、くさい感じになるから、明日出すわ。',en:"Futon — undried, becomes stale; tomorrow out.",style:'Warm close.'},
  ]},
  {id:'conv_06443',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk',lines:[
    {speaker:'sakura_teen',jp:'クラスメイト、些細なことで、揉めてた。',en:"Classmates — trivial dispute.",style:'Reflective teen.'},
    {speaker:'riku_teen',jp:'うん。年中、課題、出されまくり。',en:"Yeah. Year-round task overload.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'物語の主人公、最期のシーン、感動した。',en:"Story hero's last scene — moving.",style:'Animated.'},
    {speaker:'riku_teen',jp:'部活、人前でフリースタイル、恥ずかしいよな。',en:"Club — freestyle in public, embarrassing.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'一夜で覚えるテスト勉強、限界ある。',en:"One-night cram — has limits.",style:'Subdued.'},
    {speaker:'riku_teen',jp:'新作ゲーム、買ってほしくなった。',en:"New game — wanted.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'抹茶、濃く点てるの、難しい。',en:"Matcha — strong-whisking hard.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'体育館、汗のにおいで、ちょっとくさいかも。',en:"Gym — sweat smell, slightly stale.",style:'Wry close.'},
  ]},
  {id:'conv_06444',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、些細なことで、お友達、泣いちゃった。',en:"Mom — trivial thing, friend cried.",style:'Worried child.'},
    {speaker:'yumiko_mom',jp:'うん。家でも、年中、笑い声、絶えないように。',en:"Yes. At home — year-round, laugh-non-stop.",style:'Tender.'},
    {speaker:'sho_child',jp:'昔のヒーロー、最期に勝った、お話、好き。',en:"Old hero — last-won, love.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'人前で大声、出さないでね、可愛い我が子。',en:"Public — don't shout, dear child.",style:'Soft.'},
    {speaker:'sho_child',jp:'一夜で、急に背、伸びたら、面白いね。',en:"One-night — sudden height-grow, fun.",style:'Wistful.'},
    {speaker:'yumiko_mom',jp:'お友達のおもちゃ、ほしくなっちゃうのね。',en:"Friend's toy — wanted.",style:'Reflective.'},
    {speaker:'sho_child',jp:'コーラ、濃くて、ちょっと驚いた。',en:"Cola — strong, slightly surprised.",style:'Wry.'},
    {speaker:'yumiko_mom',jp:'冷蔵庫、ちょっとくさい感じね、お掃除しようね。',en:"Fridge — slightly stale; clean.",style:'Warm close.'},
  ]},
  {id:'conv_06445',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai and a teen chat',lines:[
    {speaker:'ren_uni',jp:'桜、些細な悩み、相談していいぞ。',en:"Sakura — trivial worries, consult.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'はい。先輩、年中、頼りになります。',en:"Yes. Senpai — year-round, reliable.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'卒業発表の最期、自分の言葉、入れたい。',en:"Grad-pres ending — own words wanted.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'人前で話す経験、増やしたいです。',en:"Public-speak experience — want more.",style:'Polite.'},
    {speaker:'ren_uni',jp:'一夜で書き上げた論文、後で見直そう。',en:"One-night-written paper — later revise.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'先輩のメモ、欲しくなって、参考にしました。',en:"Senpai memo — became wanted, referenced.",style:'Bright.'},
    {speaker:'ren_uni',jp:'コーヒー、濃く頼んだ、徹夜用に。',en:"Coffee — strong-ordered, for all-nighter.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'研究室、たまにくさい時、ありますよね、薬品の匂い。',en:"Lab — sometimes smelly, chem-odor.",style:'Reflective close.'},
  ]},

  // B
  {id:'conv_06446',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'広報文の文体、統一感、出せ。',en:"PR style — unify.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。電動工具、新型に交換しました。',en:"Yes. Power tools — new-model swapped.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'今期、案件、見送りの判断、慎重に。',en:"This term — pass-up calls, careful.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。例文、新人向け資料に組み込みました。',en:"Yes. Examples — new-hire materials integrated.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'パンフ、紙の厚み、贅沢にしろ。',en:"Brochure — paper thickness, luxe.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。サイズは、大きめで、目立つように。',en:"Yes. Size — bigger, conspicuous.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'学費支援、社員制度に組み込め。',en:"Tuition support — embed in staff system.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。利上げ局面、財務、慎重に運用します。',en:"Yes. Rate-rise phase — careful finance ops.",style:'Close.'},
  ]},
  {id:'conv_06447',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss',lines:[
    {speaker:'yuki_office',jp:'マニュアル、文体、固すぎ。やわらかくしよう。',en:"Manual — style too stiff. Soften.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。事務所の電動シャッター、点検、依頼しました。',en:"Yes. Office power shutter — inspection requested.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'外部講師、見送りの判断、急がねば。',en:"External lecturer — pass-up call, rush.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。FAQの例文、追加しました。',en:"Yes. FAQ examples added.",style:'Update.'},
    {speaker:'yuki_office',jp:'カタログ、厚み出して、高級感を。',en:"Catalog — thickness, premium feel.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。試作品、大きめのサイズで作りました。',en:"Yes. Prototype — bigger size made.",style:'Update.'},
    {speaker:'yuki_office',jp:'社員子弟の学費補助、評判いいね。',en:"Staff-child tuition aid — well-reviewed.",style:'Bright.'},
    {speaker:'kenji_office',jp:'はい。日銀の利上げ、影響、注視しています。',en:"Yes. BoJ rate-rise — impact watched.",style:'Close.'},
  ]},
  {id:'conv_06448',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、ビジネス文体、教科書通りでは、堅すぎる。',en:"Ren — biz style, textbook is too stiff.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。電動アシスト自転車、通勤、楽です。',en:"Yes. E-bike — commute easy.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'判断、見送りも、戦略のうちだ。',en:"Decision-passing — also strategy.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。営業の例文、覚えていきます。',en:"Yes. Sales examples — memorize.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'プレゼン資料、厚みが出る形で。',en:"Pres materials — thicker form.",style:'Direction.'},
    {speaker:'ren_uni',jp:'スーツ、大きめサイズが、後輩、楽みたいです。',en:"Suits — bigger size, juniors find easier.",style:'Curious.'},
    {speaker:'hiroshi_boss',jp:'就活、学費支援制度、各社で違うから、調べろ。',en:"Job-hunt — tuition aid varies by firm; research.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。利上げ動向、業界に与える影響、学びます。',en:"Yes. Rate-rise impact — learn.",style:'Earnest close.'},
  ]},
  {id:'conv_06449',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on compliance',lines:[
    {speaker:'takeda_officer',jp:'公的文書の文体、統一、お願いします。',en:"Public docs style — unify, please.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察車両、電動化が進んでいると伺いました。',en:"Yes. Police vehicles — electrification advancing.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'共同訓練、見送りも、検討中です。',en:"Joint drills — pass-up under review.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。マニュアルの例文、警察庁にも提供します。',en:"Yes. Manual examples — also provide to NPA.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察庁の冊子、厚み出して、配布しています。',en:"NPA booklets — thicker, distributing.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察車両、大きめサイズで、訓練しました。',en:"Yes. Police vehicles — bigger size, trained.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察学校の学費、無料化されています。',en:"Police-academy tuition — free.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。経済政策、利上げの影響、共有します。',en:"Yes. Econ policy — rate-rise impact shared.",style:'Close.'},
  ]},
  {id:'conv_06450',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'昔の文書、文体、堅かった。',en:"Old docs — style stiff.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。電動化、業界全体で進んでいます。',en:"Yes. Electrification industry-wide.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'重要な見送り、若い頃にも経験した。',en:"Important pass-ups — experienced in youth too.",style:'Reflective.'},
    {speaker:'hiroshi_boss',jp:'はい。例文集、若手の教科書として残しています。',en:"Yes. Example collection — left as youth textbook.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'契約書、厚みが出る案件、扱い、慎重に。',en:"Thicker-document deals — careful handling.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。社員一律、大きめの福利、提供してます。',en:"Yes. Across staff — bigger welfare offered.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'学費支援、若い頃の私も、頂いた。',en:"Tuition aid — I also received in youth.",style:'Reflective.'},
    {speaker:'hiroshi_boss',jp:'はい。利上げ局面、長期戦略で乗り切ります。',en:"Yes. Rate-rise — long-strat through.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06451',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs about a case',lines:[
    {speaker:'takeda_officer',jp:'本件、地元農協と協力して、調査しています。',en:"Case — with local farm co-op, investigating.",style:'Calm.'},
    {speaker:'ren_uni',jp:'関係者、警察にアポ、取って訪問されたんですね。',en:"Parties — police appointment, visited.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。被害者は無事故に走ってきたドライバー、故に動機、見えにくい。',en:"Yes. Victim — clean-record driver, hence motive obscure.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害金額、計りに掛けるのは、なかなか難しいですね。',en:"Damage amount — weigh, hard.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。交差点での衝突、現場検証、再度行います。',en:"Yes. Intersection crash — re-verify site.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'手がかり、つかめないままですか。',en:"Clue — still unattainable?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。生後二歳の被害者、家族のケア、最優先です。',en:"Yes. Birth-two-year-old victim — family care priority.",style:'Informative.'},
    {speaker:'ren_uni',jp:'川の下流、捜索の範囲、広げますか。',en:"River downstream — search-area extend?",style:'Curious close.'},
  ]},
  {id:'conv_06452',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses research',lines:[
    {speaker:'asuka_teacher',jp:'論文、地方農協の協同組合史、丁寧でしたね。',en:"Paper — regional farm-coop co-op history, careful.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。アポ取りに、時間が掛かりました。',en:"Yes. Appointment-taking — time-consumed.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'資料、未公開故に、貴重ですね。',en:"Materials — unpublished hence precious.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。データ、計りに掛けるのは、難航しました。',en:"Yes. Data-weighing — struggled.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'分野の交差点、独自の視点ですね。',en:"Field-intersection — original viewpoint.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。論文の核心、つかめない時期もありました。',en:"Yes. Paper core — uncatchable periods.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦後生後直後の社会、丁寧に扱いましたね。',en:"Postwar-just-born society — careful.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'下流の地域、変化、章末で論じました。',en:"Downstream region — change discussed at end.",style:'Earnest close.'},
  ]},
  {id:'conv_06453',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、地域農協と連携、健康診断、進めています。',en:"Ren — with farm co-op, checkups advance.",style:'Calm.'},
    {speaker:'ren_uni',jp:'患者、アポ取らずに来院する方も、多いんですね。',en:"Patients — appointmentless visits, many.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。慢性疾患、故に長期対応、必要です。',en:"Yes. Chronic, hence long-care needed.",style:'Patient.'},
    {speaker:'ren_uni',jp:'症状、計りに掛けるの、医師の腕の見せ所ですね。',en:"Symptom-weighing — doctor-skill showcase.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。多科の交差点で診療する総合医、貴重です。',en:"Yes. Multi-spec-intersection general practitioner, precious.",style:'Informative.'},
    {speaker:'ren_uni',jp:'病気の本質、つかめない時、研究、続けますね。',en:"Disease essence-uncatchable — research continues.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。生後の発達障害、早期発見が肝心です。',en:"Yes. Birth-onset developmental disorders — early detection vital.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'地域医療の下流、過疎地への対応、課題ですね。',en:"Regional medical downstream — depopulated-area response, challenge.",style:'Reflective close.'},
  ]},
  {id:'conv_06454',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss discusses corporate dealings',lines:[
    {speaker:'hiroshi_boss',jp:'地元農協との取引、強化しろ。',en:"Local farm-coop dealings — strengthen.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。役員アポ、来週、取りました。',en:"Yes. Exec appointments — booked next week.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'長年の信頼、故に契約、続けてくれている。',en:"Years of trust — hence contract continues.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。コスト、計りに掛けて、絞り込みます。',en:"Yes. Costs — weighed, narrowed.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'交差点での広告、効果、上がってきた。',en:"Intersection ads — effect rising.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。新規市場、つかめない時期、過ぎました。',en:"Yes. New-market unreachable period — past.",style:'Bright.'},
    {speaker:'hiroshi_boss',jp:'創業生後、すぐに広がった伝説、皆に伝えろ。',en:"Founding-just-born quick-spread legend — tell all.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。流通の下流、整備、急ぎます。',en:"Yes. Distribution downstream — order rush.",style:'Close.'},
  ]},
  {id:'conv_06455',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、地方研究、農協の協同組合、テーマですね。',en:"Sakura — regional research, farm-coop, theme.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。インタビュー、アポ取りに、何度も電話しました。',en:"Yes. Interview appointments — many calls.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'地域過疎、故に新たな取り組み、必要ですね。',en:"Region-depopulation, hence new efforts needed.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。経済効果、計りに掛けるのは、難しいです。',en:"Yes. Economic-effect-weighing, hard.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'産業と暮らしの交差点、興味深い章でしたね。',en:"Industry-life intersection — intriguing chapter.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'核心、つかめないまま終わった章、修正します。',en:"Core-uncatchable end-chapter — revise.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'生後すぐの幼児教育、別章で扱いましたね。',en:"Just-born early-childhood ed — separate chapter.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'下流地域の住民の声、最終章で総括しました。',en:"Downstream-residents' voices — final-chapter summarize.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06456',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'こんなふうに、ゆっくり過ごす時間、好き。',en:"Like this — slow time, like.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん。試験前、げんを担いで、カツ丼食べた?',en:"Yeah. Pre-exam — luck-charm, katsu-don eaten?",style:'Curious.'},
    {speaker:'mei_romantic',jp:'彼、最初はツンとした態度だったね。',en:"He — first, cold attitude.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'子供むけのワークショップ、人気だよ。',en:"Kid-oriented workshop — popular.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'帰りに、お土産、しっかり掴んで帰った。',en:"On return — souvenir firmly grasped home.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'今日のお客様、やけに丁寧で、印象的だった。',en:"Today's guest — oddly polite, striking.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'関西では、よろしゅう、よく聞くね。',en:"In Kansai — \"yoroshu\" often heard.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'夕食後の甘味、楽しみ。',en:"Post-dinner sweets — fun.",style:'Warm close.'},
  ]},
  {id:'conv_06457',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、こんなふうにブロック積めた!',en:"Mom — stacked blocks like this!",style:'Excited child.'},
    {speaker:'yumiko_mom',jp:'うん。お祭り、げんを担いで、団子買ったね。',en:"Yes. Festival — luck-charm, bought dango.",style:'Tender.'},
    {speaker:'sho_child',jp:'クラスの子、最初はツンとしてたけど、今は仲良し。',en:"Class kid — first cold; now friend.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'子供むけの番組、テレビで観てね。',en:"Kid-oriented program — TV-watch.",style:'Soft.'},
    {speaker:'sho_child',jp:'ボール、しっかり掴んで投げる練習、毎日してる。',en:"Ball — firmly grasp, throw practice daily.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'今日、やけにお行儀よくしてくれて、嬉しい。',en:"Today — oddly polite, glad.",style:'Warm.'},
    {speaker:'sho_child',jp:'おばあちゃんが、よろしゅうって、よく言うね。',en:"Granny — often says \"yoroshu\".",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'おやつ、甘味、控えめにしようね。',en:"Snacks — sweets, restrain.",style:'Warm close.'},
  ]},
  {id:'conv_06458',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'こんなふうに、雨の日に喋るの、好き。',en:"Like this — rainy-day talks, like.",style:'Soft teen.'},
    {speaker:'riku_teen',jp:'うん。試合前、げんを担いで、お守り、持ってきた。',en:"Yeah. Pre-match — luck-charm, brought amulet.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'隣のクラスの子、ツンとしてるけど、本当はいい子。',en:"Next-class kid — cold but truly nice.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'高校生むけのイベント、駅前であるって。',en:"HS-oriented event — station-front.",style:'Bright.'},
    {speaker:'sakura_teen',jp:'ペン、つい強く掴んでしまう癖、ある。',en:"Pen — gripping-hard habit.",style:'Wry.'},
    {speaker:'riku_teen',jp:'担任、やけに優しかった、何かあったかも。',en:"Homeroom — oddly kind, maybe something.",style:'Curious.'},
    {speaker:'sakura_teen',jp:'関西出身の友達、よろしゅうって、自然に言うよね。',en:"Kansai-origin friend — \"yoroshu\" natural.",style:'Animated.'},
    {speaker:'riku_teen',jp:'放課後、甘味、コンビニで買おう。',en:"After school — sweets, conbini-buy.",style:'Eager close.'},
  ]},
  {id:'conv_06459',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、こんなふうに二人で旅、よく行ったな。',en:"In youth — like this, often two-trips.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。試験前、げんを担いで、息子にカツ煮、作ったわね。',en:"Yes. Pre-exam — luck-charm, son katsu-stew made.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'孫娘、最初、私にツンとしてたけど、今は懐いてる。',en:"Granddaughter — first cold; now affectionate.",style:'Soft.'},
    {speaker:'sachiko_grandma',jp:'子供むけの絵本、何冊もしまってあるわよ。',en:"Kid-oriented picture books — many stored.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'本、しっかり掴んで読むの、お互いの習慣だね。',en:"Books — firmly-grasp reading, mutual habit.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'今夜、やけに静かね、外が。',en:"Tonight — oddly quiet outside.",style:'Calm.'},
    {speaker:'hiroshi_elder',jp:'関西から来たお客さん、よろしゅうって挨拶してた。',en:"Kansai guest — \"yoroshu\" greeted.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お茶請けの甘味、用意できてるわよ。',en:"Tea-side sweets — prepared.",style:'Warm close.'},
  ]},
  {id:'conv_06460',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan an event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、こんなふうに、お店、変えていこか。',en:"Aoi-san — like this, change shop?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。新メニュー、げんを担いで、お祝いに、出します。',en:"Yes. New menu — luck-charm, celebrate-release.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'最初はツンとしたお客さんも、馴染んでくれるんやな。',en:"First-cold customers — settle in too.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'子供むけのキッズメニュー、種類、増やしましょう。',en:"Kid-oriented kids menu — types, expand.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'機会を掴んで、地元商工会と連携しよ。',en:"Grasp opportunity — collab local chamber.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'やけに繁忙な日、スタッフを増員します。',en:"Oddly busy days — staff-augment.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'関西では、よろしゅうの挨拶、店でも使お。',en:"In Kansai — \"yoroshu\" greeting, use in shop.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'食後の甘味、コース料理に組み込みます。',en:"Post-meal sweets — embed in course.",style:'Warm close.'},
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

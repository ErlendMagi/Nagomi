import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_288 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['苗','家屋','つない','下ろし','映る','はめ','お宅','森田']
const B_T = ['山下','バグ','フィルター','耐久','清掃','日数','リットル','アナログ']
const C_T = ['原文','カウンセラー','麻薬','和解','不倫','復讐','無罪','麻生']
const D_T = ['ドキュメント','ゴム','サム','回想','カタカナ','方言','弓','虎']

const data = [
  // A
  {id:'conv_05721',cluster:'A',ambient:'park_distant_birds',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son tend a garden in spring',lines:[
    {speaker:'yumiko_mom',jp:'翔、トマトの苗、ここに植えようね。',en:"Sho, plant the tomato seedling here.",style:'Warm.'},
    {speaker:'sho_child',jp:'うん!隣の家屋の塀まで届くかな。',en:"Yes! Will it reach the neighbor's wall?",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'紐でつないで、支柱を作ろう。',en:"Tie with twine, make a stake.",style:'Patient.'},
    {speaker:'sho_child',jp:'物干し竿、下ろしておくね。',en:"I'll lower the laundry pole.",style:'Helpful.'},
    {speaker:'yumiko_mom',jp:'窓に空が映る景色、きれいね。',en:"The sky reflected in the window is pretty.",style:'Soft.'},
    {speaker:'sho_child',jp:'軍手、指がうまくはまらないよ。',en:"Glove fingers don't fit right.",style:'Wry.'},
    {speaker:'yumiko_mom',jp:'お宅の畑、いつも見事ね、お隣さん。',en:"Neighbor — your patch is always splendid.",style:'Warm.'},
    {speaker:'sho_child',jp:'森田さんちの犬、こっち見てる。',en:"The Morita household's dog is watching us.",style:'Bright close.'},
  ]},
  {id:'conv_05722',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple tends to their garden',lines:[
    {speaker:'hiroshi_elder',jp:'今年も、苗を植える時期だな。',en:"Seedling-planting time again this year.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん、家屋の裏の畑、孫と一緒にやりましょう。',en:"Yes — the patch behind the house, with our grandkid.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'物置の鍵、つないだままにしてあるね。',en:"Storage-shed key is still chained.",style:'Calm.'},
    {speaker:'sachiko_grandma',jp:'重い荷物、下ろしておいたわ。',en:"I lowered the heavy load already.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'池に夕日が映る、いつ見ても良いな。',en:"Sunset reflected in the pond is always lovely.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'網戸、ちゃんとはめておいてね。',en:"Set the screen door properly.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'お宅の梅干し、また分けてもらおうか、森田さんに。',en:"Maybe ask Morita-san for more pickled plums.",style:'Soft close.'},
  ]},
  {id:'conv_05723',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat on a neighborhood walk',lines:[
    {speaker:'sakura_teen',jp:'帰り、近所の苗売り場に寄っていい?',en:"On the way back, can we hit the seedling stand?",style:'Casual teen.'},
    {speaker:'riku_teen',jp:'いいよ。あの古い家屋、雰囲気あるね。',en:"Sure. That old house has atmosphere.",style:'Easy.'},
    {speaker:'sakura_teen',jp:'駅前と公園、橋でつないだルートで戻ろう。',en:"Take the station-park bridge-linked route home.",style:'Practical.'},
    {speaker:'riku_teen',jp:'リュック重いから、本、下ろしておくよ。',en:"Bag's heavy — I'll set the books down.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'川に空が映る場所、写真撮ろう。',en:"Where the sky reflects on the river, take a photo.",style:'Animated.'},
    {speaker:'riku_teen',jp:'靴ひも、ちゃんとはめてから歩け。',en:"Lace your shoes properly first.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'帰りにお宅寄って、宿題やってもいい?',en:"Stop by your place to do homework?",style:'Probe.'},
    {speaker:'riku_teen',jp:'森田が来るかもしれない。三人で。',en:"Morita might come — three of us.",style:'Bright close.'},
  ]},
  {id:'conv_05724',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends discuss home renovation',lines:[
    {speaker:'mei_romantic',jp:'実家の家屋、リフォームしようか悩んでて。',en:"Wondering whether to renovate the family home.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'庭の苗、お母さんが大事に育ててたよね。',en:"Your mom carefully grew the garden seedlings.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'うん。庭と縁側、つないだ造りが好き。',en:"Yes. I love the garden-engawa linked design.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'重い物、業者が下ろしてくれるよね、当日。',en:"Movers'll lower heavy things on the day.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'リビングの窓に、桜が映る景色、残したい。',en:"Want to keep the cherry-reflected window view.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'網戸、季節ごとに、ちゃんとはめ替えてる?',en:"You change screens seasonally?",style:'Probe.'},
    {speaker:'mei_romantic',jp:'うん。お宅のお父様、建築のお仕事だったよね。',en:"Yes. Your dad was in construction, right?",style:'Curious.'},
    {speaker:'aoi_barista',jp:'いや、森田工務店さんに頼んだことならあるよ。',en:"No, but we used Morita Construction once.",style:'Warm close.'},
  ]},
  {id:'conv_05725',cluster:'A',ambient:'living_room_quiet',cast:['ryosuke_dad','yumiko_mom'],targets:A_T,scenario:'A couple plans home maintenance',lines:[
    {speaker:'ryosuke_dad',jp:'今日、ホームセンターで苗、たくさん買ってきた。',en:"Today I bought lots of seedlings at the home center.",style:'Easy.'},
    {speaker:'yumiko_mom',jp:'家屋の塗装、来月の話、進めてもいい?',en:"House paint — fine to proceed next month?",style:'Soft.'},
    {speaker:'ryosuke_dad',jp:'うん。電気の配線、ベランダまでつないだ業者、信頼できる。',en:"Yes. The electrician who ran wiring to the balcony is trustworthy.",style:'Practical.'},
    {speaker:'yumiko_mom',jp:'屋根裏の荷物、業者に下ろしてもらおう。',en:"Have the movers lower the attic stuff.",style:'Calm.'},
    {speaker:'ryosuke_dad',jp:'窓ガラスに新しい雨樋、映るの楽しみ。',en:"Looking forward to the new gutter reflected in the window.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'断熱材、しっかり壁にはめてもらってね。',en:"Have them fit the insulation snugly in the walls.",style:'Practical.'},
    {speaker:'ryosuke_dad',jp:'お宅の隣の森田さんも、リフォーム検討中だって。',en:"Our neighbor Morita is also considering a remodel.",style:'Reflective close.'},
  ]},

  // B
  {id:'conv_05726',cluster:'B',ambient:'office_quiet_low',cast:['kenji_office','yuki_office'],targets:B_T,scenario:'Two managers discuss a tech project',lines:[
    {speaker:'kenji_office',jp:'山下さんから、アナログのバックアップ、依頼ありました。',en:"Yamashita asked for an analog backup.",style:'Methodical.'},
    {speaker:'yuki_office',jp:'バグの再現、難しいケース?',en:"Bug repro — tough case?",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。フィルター層の処理で発生していて、原因切り分け中。',en:"Yes. Filter-layer processing — isolating the cause.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'耐久試験、清掃工程後にも実施しよう。',en:"Endurance test, run also after the cleaning step.",style:'Direction.'},
    {speaker:'kenji_office',jp:'残り日数、5日です。リットル単位での負荷、計測続けます。',en:"Five days left. Continue load measurement by liter.",style:'Update.'},
    {speaker:'yuki_office',jp:'頼む。',en:"Please.",style:'Close.'},
  ]},
  {id:'conv_05727',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews factory operations',lines:[
    {speaker:'hiroshi_boss',jp:'山下工場の耐久試験、結果報告は?',en:"Yamashita plant's endurance test — report?",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。バグはアナログ計器のフィルター誤差でした。',en:"Yes. Bug was filter error in analog gauges.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'残り日数、再試験できるか。',en:"Days left — can we retest?",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。清掃工程後、再度リットル単位で計測します。',en:"Yes. After cleaning, remeasure by liter.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'頼む。',en:"Please.",style:'Close.'},
  ]},
  {id:'conv_05728',cluster:'B',ambient:'office_quiet_low',cast:['ren_uni','kenji_office'],targets:B_T,scenario:'A uni intern shadowing in a factory',lines:[
    {speaker:'ren_uni',jp:'山下さん、現場の耐久試験、初めて見学します。',en:"Yamashita-san, first time observing field endurance tests.",style:'Polite intern.'},
    {speaker:'kenji_office',jp:'こちらこそ。フィルターの清掃、毎日の作業です。',en:"Likewise. Filter cleaning is a daily task.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'アナログ計器の読み、リットル単位ですね。',en:"Analog gauges read in liters.",style:'Earnest.'},
    {speaker:'kenji_office',jp:'はい。バグらしい挙動、日数かけて切り分けます。',en:"Yes. Bug-like behavior, isolate over days.",style:'Informative.'},
    {speaker:'ren_uni',jp:'勉強になります。',en:"Most instructive.",style:'Close.'},
  ]},
  {id:'conv_05729',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs a manager about industrial safety',lines:[
    {speaker:'takeda_officer',jp:'御社の山下工場、耐久基準の見直しを推奨します。',en:"Recommend reviewing endurance criteria at your Yamashita plant.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。アナログ系の老朽化、バグの温床です。',en:"Yes. Aging analog systems harbor bugs.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'清掃と点検、リットル単位の漏洩管理が必要です。',en:"Cleaning and inspection — liter-level leak control needed.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'フィルター系の見直し、残り日数で対応します。',en:"Filter-system review, handled in remaining days.",style:'Update.'},
    {speaker:'takeda_officer',jp:'頼みます。',en:"Please.",style:'Close.'},
  ]},
  {id:'conv_05730',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss explains plant operations to a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、山下工場、耐久試験で名高い。',en:"Ren, the Yamashita plant is famed for endurance tests.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'バグの早期発見、フィルター層が肝ですか。',en:"Early bug detection — filter layer is key?",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'そう。アナログ計器とデジタル、両方使う。',en:"Yes. Use both analog and digital gauges.",style:'Informative.'},
    {speaker:'ren_uni',jp:'清掃の作業、日数で換算するんですね。',en:"Cleaning ops measured in days.",style:'Curious.'},
    {speaker:'hiroshi_boss',jp:'微小なリットル変動も見逃すな、と教えてる。',en:"Don't miss tiny liter shifts — that's what I teach.",style:'Direction close.'},
  ]},

  // C
  {id:'conv_05731',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a uni reporter about a crime trial',lines:[
    {speaker:'takeda_officer',jp:'今回の事件、麻薬絡みではないと判明しました。',en:"This case turned out not to involve drugs.",style:'Calm.'},
    {speaker:'ren_uni',jp:'被害者と容疑者、和解の可能性はありますか。',en:"Any chance of victim-suspect reconciliation?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'家庭内の不倫を背景に、復讐の動機がささやかれています。',en:"With domestic infidelity in the background, revenge motives are whispered.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被告は無罪を主張していますね。',en:"The defendant claims innocence.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。被害者側にカウンセラーを配置しています。',en:"Yes. A counselor is assigned to the victim side.",style:'Informative.'},
    {speaker:'ren_uni',jp:'供述の原文、後ほど拝見できますか。',en:"Can I see the original statement later?",style:'Polite.'},
    {speaker:'takeda_officer',jp:'弁護士、麻生先生経由で対応します。',en:"Through attorney Aso, we'll respond.",style:'Procedural close.'},
  ]},
  {id:'conv_05732',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher and student discuss a documentary on social issues',lines:[
    {speaker:'asuka_teacher',jp:'昨夜のドキュメンタリー、麻薬依存者のカウンセラーが主役でしたね。',en:"Last night's doc featured a drug-dependence counselor.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。家庭の不倫や復讐の連鎖、丁寧に描写されていました。',en:"Yes. Cycles of family infidelity and revenge were depicted carefully.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'被告人が無罪を勝ち取った後の和解、難しさが伝わります。',en:"Reconciliation after an acquittal — its difficulty came through.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'証言の原文を、章末に掲載するそうです。',en:"Original testimony will be in the chapter's end, they say.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'監督の麻生さん、社会派として知られていますね。',en:"Director Aso is known for social-issue work.",style:'Reflective close.'},
  ]},
  {id:'conv_05733',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor explains addiction treatment to a reporter',lines:[
    {speaker:'saito_doctor',jp:'麻薬依存の治療、カウンセラーとの連携が鍵です。',en:"Drug-addiction treatment hinges on counselor cooperation.",style:'Calm.'},
    {speaker:'ren_uni',jp:'家族間の不倫や、復讐感情の蓄積もあるんでしょうね。',en:"Family infidelity, revenge feelings — those accumulate too.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。和解までの過程、長期にわたります。',en:"Yes. The reconciliation process is long.",style:'Patient.'},
    {speaker:'ren_uni',jp:'裁判で無罪となった患者、その後の追跡もありますか。',en:"Follow-up for patients acquitted in trial?",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。原文の医療記録は、麻生弁護士経由で扱います。',en:"Yes. Original records handled via attorney Aso.",style:'Informative close.'},
  ]},
  {id:'conv_05734',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss discusses a corporate ethics case',lines:[
    {speaker:'hiroshi_boss',jp:'役員の不倫問題、内々の和解で済ませようとしてる。',en:"An exec's infidelity — being smoothed over internally.",style:'Concerned.'},
    {speaker:'kenji_office',jp:'はい。家族側に、カウンセラーを紹介しています。',en:"Yes. We're referring the family to a counselor.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'復讐じみた告発も、報道に出る可能性がある。',en:"Revenge-tinged accusations might hit the press.",style:'Direction.'},
    {speaker:'kenji_office',jp:'刑事は無罪の見通し、麻薬関与もありません。',en:"Criminally likely innocent, no drug ties.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'広報原文、麻生顧問弁護士に確認させろ。',en:"PR drafts — verify with attorney Aso.",style:'Decisive close.'},
  ]},
  {id:'conv_05735',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a literature project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、19世紀小説、不倫と復讐がテーマの作品、多いですね。',en:"Sakura, 19th-c novels often theme on infidelity and revenge.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。原文で読むの難しいですが、訳本で挑戦してます。',en:"Yes. Hard in the original, but I'm trying translations.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'登場人物が和解せず、悲劇が深まる構造、印象的ですね。',en:"Characters not reconciling — tragedy deepens. Striking.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'裁判場面で、無罪の判決、当時の社会観が映りますね。',en:"Trial scenes reflect period social views in not-guilty verdicts.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'当時、麻薬や精神的依存も題材になっていました。',en:"Drugs and emotional dependence were themes back then too.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'評論家、麻生先生の解説、参考にします。',en:"Critic Aso's commentary — I'll consult.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'カウンセラー的な著者の語り口も、興味深いですね。',en:"Counselor-like authorial voice is interesting too.",style:'Reflective close.'},
  ]},

  // D
  {id:'conv_05736',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher and student discuss a documentary on language',lines:[
    {speaker:'asuka_teacher',jp:'昨夜のドキュメント、地方の方言、丁寧に取材されていました。',en:"Last night's documentary covered local dialects carefully.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。カタカナ表記の課題、方言研究では重要ですね。',en:"Yes. Katakana transcription is key in dialect work.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'劇中、ゴム長靴を履いた研究者の回想シーン、印象的でした。',en:"The rubber-boot researcher's recollection was striking.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'弓道部のサム先輩も、地元の方言を熱心に学んでます。',en:"Sam-senpai of the kyudo club is also keen on local dialects.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'地元では虎をモチーフにした祭りもあるとか。',en:"Locally, there's even a tiger-motif festival.",style:'Reflective close.'},
  ]},
  {id:'conv_05737',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends plan a cultural day',lines:[
    {speaker:'mei_romantic',jp:'今度の週末、地方文化のドキュメント上映会に行く。',en:"This weekend, attending a regional-culture documentary screening.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'素敵。ゴム製の伝統人形の話、含まれる?',en:"Lovely. Does it include rubber-craft traditional dolls?",style:'Soft.'},
    {speaker:'mei_romantic',jp:'うん。海外コーディネーターのサムさんも来日するの。',en:"Yes. Foreign coordinator Sam visits too.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'監督の回想インタビュー、楽しみだね。',en:"Director's reminiscence interview, exciting.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'地方名のカタカナ表記、案内でも工夫されてる。',en:"Place-name katakana spellings — even the guides put thought in.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'方言の挨拶、覚えていこうか。',en:"Want to memorize a dialect greeting?",style:'Warm.'},
    {speaker:'mei_romantic',jp:'弓道のデモも見られるって。',en:"Kyudo demo too, they say.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'白虎のロゴ、ポスターでよく見るよね。',en:"The white-tiger logo — often on posters.",style:'Curious close.'},
  ]},
  {id:'conv_05738',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens plan club activities',lines:[
    {speaker:'sakura_teen',jp:'文芸部、ドキュメント映像コンクール、応募するんだ。',en:"Lit club's entering a documentary-video contest.",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'いいね。撮影用のゴムバンド、機材で要るんでしょ。',en:"Nice. Rubber bands for the gear, right?",style:'Casual.'},
    {speaker:'sakura_teen',jp:'担当の留学生サム、編集ソフト得意なの。',en:"Exchange student Sam handles editing well.",style:'Animated.'},
    {speaker:'riku_teen',jp:'去年の回想シーン、面白かったよな。',en:"Last year's recollection scene was fun.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'字幕、カタカナ用語も多くて、丁寧にしたい。',en:"Subtitles — lots of katakana terms; want care.",style:'Probe.'},
    {speaker:'riku_teen',jp:'方言の話者にインタビュー、地元で出来そうだな。',en:"Dialect-speaker interview — feasible locally.",style:'Practical.'},
    {speaker:'sakura_teen',jp:'弓道部の道場も、撮影候補。',en:"Kyudo dojo — a filming candidate too.",style:'Cheerful.'},
    {speaker:'riku_teen',jp:'タイガースのファン、虎の旗も出してる店、面白い。',en:"Tigers-fan shops fly tiger flags — fun.",style:'Wry close.'},
  ]},
  {id:'conv_05739',cluster:'D',ambient:'living_room_quiet',cast:['ryosuke_dad','sho_child'],targets:D_T,scenario:'A dad introduces hobbies to his son',lines:[
    {speaker:'ryosuke_dad',jp:'翔、テレビでドキュメント番組やってるぞ。',en:"Sho, documentary show on TV.",style:'Easy dad.'},
    {speaker:'sho_child',jp:'ゴム鉄砲のおもちゃ作る話?',en:"The rubber-band gun toy episode?",style:'Excited child.'},
    {speaker:'ryosuke_dad',jp:'いや、職人のサムさんの回想だ。',en:"No, craftsman Sam-san's recollection.",style:'Calm.'},
    {speaker:'sho_child',jp:'おもしろい!カタカナ多いから、よくわからない時もあるけど。',en:"Fun! Lots of katakana, sometimes hard.",style:'Bright.'},
    {speaker:'ryosuke_dad',jp:'お父さんの故郷の方言、出てこないかな。',en:"My hometown's dialect — might come up?",style:'Wistful.'},
    {speaker:'sho_child',jp:'弓道、習いたいなあ。',en:"Want to learn kyudo!",style:'Eager.'},
    {speaker:'ryosuke_dad',jp:'動物園で、虎、見たいって言ってたな。',en:"You wanted to see the tiger at the zoo.",style:'Warm close.'},
  ]},
  {id:'conv_05740',cluster:'D',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:D_T,scenario:'A uni student profiles a craft documentary for a teen',lines:[
    {speaker:'ren_uni',jp:'桜、新しいドキュメント、地方工芸品の制作工程を追ってる。',en:"Sakura, the new doc follows local craft-production.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'ゴム素材の使い方、現代的に解説されてるんですか。',en:"Rubber-material use — explained in a modern way?",style:'Earnest.'},
    {speaker:'ren_uni',jp:'うん。海外の研究者サム氏が、回想を交えて解説してる。',en:"Yes. Foreign researcher Sam mixes in reminiscences.",style:'Casual senpai.'},
    {speaker:'sakura_teen',jp:'地名のカタカナ表記、字幕で工夫されてるんですよね。',en:"Place-name katakana — subtitles are clever, right?",style:'Curious.'},
    {speaker:'ren_uni',jp:'はい。方言の解説テロップも、丁寧だ。',en:"Yes. Dialect captions are careful too.",style:'Informative.'},
    {speaker:'sakura_teen',jp:'弓道や、虎モチーフの装飾、文化背景の章も気になります。',en:"Kyudo, tiger-motif decor — the culture chapter intrigues me.",style:'Probe close.'},
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_337 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['漂っ','見当たら','神さま','ひまわり','ペットボトル','なぞ','吸う','はじまっ']
const B_T = ['追い込ま','役に立た','内定','対価','昇格','年数','クオリティ','安値']
const C_T = ['名付け','生体','養護','反乱','母国','生き残っ','操縦','発酵']
const D_T = ['マグロ','柳','果実','香川','羽田','園芸','琴','フットボール']

const data = [
  // A
  {id:'conv_06701',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、キッチンから、いい香りが、漂ってるね。',en:"Mom — kitchen, nice-scent drifting.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'うん。玩具の鍵、どこにも見当たらないわね、翔くん、知らない?',en:"Yes. Toy key — anywhere can't-find, Sho, know?",style:'Concerned.'},
    {speaker:'sho_child',jp:'神さまに、お願いしたよ、テスト、頑張れますように。',en:"To god — prayed, test go-well.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'お庭の、ひまわり、今年も、咲いたわね、立派に。',en:"Garden — sunflower, this year too bloomed, splendid.",style:'Soft.'},
    {speaker:'sho_child',jp:'お水、ペットボトル、ぼく、リサイクルに出すよ。',en:"Water — bottle, me, recycle-out.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'なぞなぞ、お父さんに、出してみたら、面白がるわよ。',en:"Riddle — to Dad, try, he-amused.",style:'Cheerful.'},
    {speaker:'sho_child',jp:'お外で、新鮮な空気、吸うと、気持ちいいね、ママ。',en:"Outside — fresh air-breathe, gratifying, Mom.",style:'Cheerful.'},
    {speaker:'yumiko_mom',jp:'夏休み、もうはじまったわね、楽しみがいっぱいね、翔くん。',en:"Summer — already started, lots-fun, Sho.",style:'Warm close.'},
  ]},
  {id:'conv_06702',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、店内、コーヒーの香り、いつも漂ってて、最高だね。',en:"Aoi — interior, coffee-scent always-drifting, best.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。注文票、見当たらなくて、慌てちゃったよ、さっき。',en:"Yeah. Order-slip can't-find, panicked earlier.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'結婚のこと、神さまに、お願いしてるの、最近、私。',en:"Marriage — to god praying lately, me.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'店先に、ひまわり、植えるの、お洒落でいいね。',en:"Storefront — sunflower-plant, stylish.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'最近、ペットボトルじゃなくて、マイボトル、持ち歩いてるの、私。',en:"Lately — not-bottle, my-bottle carrying.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'彼の気持ち、なぞが多いんだよね、メイちゃん、本当に。',en:"His feel — many-mysteries, Mei, really.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'喫煙、もう、吸うの、やめたって、彼、言ってたよ。',en:"Smoking — already-quit, he said.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'梅雨、もうはじまった感じだよね、洗濯物、困るわ。',en:"Rainy season — already-started feel, laundry-trouble.",style:'Wry close.'},
  ]},
  {id:'conv_06703',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、教室、新しい先生の香水、漂ってたよ、ちょっと、強かった。',en:"Riku — classroom, new-teacher perfume drifting, slightly strong.",style:'Wry teen.'},
    {speaker:'riku_teen',jp:'うん。俺の体育の靴、ロッカーに見当たらないんだ、誰か知らない?',en:"Yeah. My PE shoes — locker can't-find, anyone know?",style:'Worried.'},
    {speaker:'sakura_teen',jp:'テスト前、神さまに、お祈りしちゃうよね、ついね。',en:"Pre-test — god-pray, accidentally.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'文化祭、ひまわりの飾り、めっちゃ良くなったよ、お前のおかげで。',en:"Cult-fest — sunflower decor, super-better, thanks-to-you.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'部活、ペットボトル、リサイクルしてるんだよ、ちゃんと。',en:"Club — bottle recycling, properly.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'歴史のテスト、なぞが多くてさ、難しかったぜ。',en:"Hist test — many-mysteries, hard.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'部活後、外で、深呼吸、吸うの、爽快だよね。',en:"Post-club — outside deep-breath, refreshing.",style:'Cheerful.'},
    {speaker:'riku_teen',jp:'夏休み、明日からはじまったら、皆で、海行こうな。',en:"Summer — from tomorrow if-starts, all sea-go.",style:'Bright close.'},
  ]},
  {id:'conv_06704',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'庭の方から、お線香の香り、漂ってきたな、お盆の季節だ。',en:"Garden-direction — incense scent drifting, Obon season.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。古い写真アルバム、最近、見当たらないのよね、どこにしまったかしら。',en:"Yes. Old photo album — lately can't-find, where stored?",style:'Concerned.'},
    {speaker:'hiroshi_elder',jp:'神さまに、家族の幸せを、いつも願ってきたな、私たち。',en:"To god — family happiness, always wished, us.",style:'Sage.'},
    {speaker:'sachiko_grandma',jp:'庭のひまわり、孫が植えてくれたのよ、嬉しかったわ。',en:"Garden sunflower — grandkid-planted, glad.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'最近、ペットボトルの水、毎日、買っているな、外出時。',en:"Lately — bottle water, daily-buying, outings.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'人生、まだまだ、なぞが多いわね、考えれば。',en:"Life — still many-mysteries, considering.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'禁煙してから、もう、タバコ、吸うこと、ないな、私。',en:"Since quitting — already, no-smoking, me.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'人生、振り返れば、結婚生活、ここからはじまったのよね、あなた。',en:"Life-look-back — marriage from-here-started, dear.",style:'Warm close.'},
  ]},
  {id:'conv_06705',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat in the park',lines:[
    {speaker:'mei_romantic',jp:'翔くん、お花の香り、公園に、漂ってるね、爽やか。',en:"Sho — flower-scent, park-drifting, fresh.",style:'Soft.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼくのボール、見当たらないんだ、一緒に探して?',en:"Mei-sis — my ball, can't-find, search-together?",style:'Earnest child.'},
    {speaker:'mei_romantic',jp:'七夕、神さまにお願い、書いた?翔くんの願いごと。',en:"Tanabata — god-prayer, wrote?, your wish.",style:'Curious.'},
    {speaker:'sho_child',jp:'ひまわり、お庭で育ててるんだ、ぼく、毎日、お水あげてるよ。',en:"Sunflower — garden-growing, me, daily-water.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'ペットボトル、ちゃんと、ゴミ箱に、入れようね。',en:"Bottle — properly, trash-can in.",style:'Direction.'},
    {speaker:'sho_child',jp:'お友達の質問、ぼくにとって、なぞだらけだったよ。',en:"Friend's q — for-me, mystery-filled.",style:'Wry child.'},
    {speaker:'mei_romantic',jp:'外で、深呼吸、吸うと、頭がスッキリするね、翔くん。',en:"Outside — deep-breath, head-clear, Sho.",style:'Tender.'},
    {speaker:'sho_child',jp:'夏休みのお出かけ、今日から、はじまったよ、メイ姉さん!',en:"Summer outing — from today, started, Mei-sis!",style:'Excited close.'},
  ]},

  // B
  {id:'conv_06706',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews business strategy',lines:[
    {speaker:'hiroshi_boss',jp:'競合に、追い込まれる前に、攻める姿勢、見せろ。',en:"Rival — before cornered, aggressive stance show.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。古いマニュアル、もう役に立たないので、改訂中です。',en:"Yes. Old manual — no-longer-useful, revising.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'今年の新卒、内定者、何名、決まったか。',en:"This year newbies — accepted, how many?",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。仕事の対価として、報酬、適正に、支払っています。',en:"Yes. Work compensation — properly paid.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'実績ある社員には、昇格の機会、与えろ。',en:"Track-record staff — promotion chance, give.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。サービス提供年数で、会員ランク、区別しています。',en:"Yes. Service-years — member-rank distinguished.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'製品クオリティ、絶対に、落とすな。',en:"Product quality — absolutely don't-drop.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。安値競争、避けるため、ブランド戦略を見直します。',en:"Yes. Cheap-rivalry — avoid, brand strat review.",style:'Close.'},
  ]},
  {id:'conv_06707',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'プロジェクト、追い込まれている時こそ、冷静でいきましょう。',en:"Project — when cornered, stay calm.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。古いシステム、もう役に立たないので、刷新します。',en:"Yes. Old system — useless, refresh.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'新卒、内定式、来月、設定したいわね。',en:"Newbies — accept-cere, next month set?",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。労働の対価として、福利厚生も、充実させています。',en:"Yes. Labor-comp — benefits also enriched.",style:'Update.'},
    {speaker:'yuki_office',jp:'部下の昇格、私からも、推薦しておきます。',en:"Subordinate promo — also recommend.",style:'Soft direction.'},
    {speaker:'kenji_office',jp:'はい。勤続年数によって、表彰制度、ありますよ、当社。',en:"Yes. Service-years — award-system, here.",style:'Update.'},
    {speaker:'yuki_office',jp:'広告クオリティ、競合より、絶対に、上を目指して。',en:"Ad quality — over rival, absolutely aim-higher.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。価格、安値圏で、推移中です、業界。',en:"Yes. Price — cheap-zone, drifting, industry.",style:'Close.'},
  ]},
  {id:'conv_06708',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究、追い込まれる前に、計画的に進めろ。',en:"Ren — research, before-cornered, planned.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。役に立たない参考文献、削除します、論文から。',en:"Yes. Useless refs — delete, from paper.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'卒業後の進路、君も、内定、決まったか。',en:"Post-grad — also, accepted, decided?",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究の対価として、奨学金、いただいています。',en:"Yes. Research comp — scholarship received.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'インターンから正社員への昇格、君にも、可能性があるぞ。',en:"Intern-to-regular promotion — also possible.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究年数、博士課程まで、続けたいです。',en:"Yes. Research years — to PhD, want-continue.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'論文クオリティ、海外査読を、目指せ。',en:"Paper quality — overseas review, aim.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。安値で論文を売る学術誌、避けたいです。',en:"Yes. Cheap-paper-selling journals — avoid want.",style:'Earnest close.'},
  ]},
  {id:'conv_06709',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'容疑者、追い込まれた結果、自首してまいりました。',en:"Suspect — cornered, surrendered.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。古い防犯機器、もう役に立たないので、更新します。',en:"Yes. Old crime-prev — useless, update.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'新人警察官、内定者として、来月、配属されます。',en:"Newbie officers — accepted, next month assign.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。地域の安全への対価として、税金、有意義に使われていますね。',en:"Yes. Local-safety comp — tax meaningful used.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察官の昇格、実績に基づき、公正に行われています。',en:"Officer promo — track-record-based, fairly done.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。協力年数によって、警察の信頼関係、深まっています。',en:"Yes. Coop years — police trust-deepening.",style:'Update.'},
    {speaker:'takeda_officer',jp:'証拠品のクオリティ、保管状態、徹底しております。',en:"Evidence quality — storage, thorough.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。中古品、安値で出回る場合、警察に、報告しております。',en:"Yes. Used items — cheap-circulating, police-report.",style:'Close.'},
  ]},
  {id:'conv_06710',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'追い込まれた時こそ、経営者の真価が、問われる。',en:"When-cornered — exec's real-worth questioned.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。役に立たない過去の慣習、見直しております。',en:"Yes. Useless past-customs — reviewing.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'創業時から、内定者の研修、私が立ち会った。',en:"Founding — accept-train, also attended.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。社員の汗の対価として、待遇、充実させます。',en:"Yes. Staff-sweat comp — benefits enrich.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'若手の昇格、思い切って、進めることだ。',en:"Youth promo — boldly advance.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。創業からの年数、社員と、共に重ねております。',en:"Yes. Founding-years — with staff, accumulating.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'創業時のクオリティへのこだわり、忘れるな。',en:"Founding-quality insistence — don't forget.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。安値路線、当社の、選択肢ではありません。',en:"Yes. Cheap route — not our option.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06711',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses biology research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、論文、新種の生物に、名付けられた経緯、興味深いですね。',en:"Ren — paper, new-species-naming background, interesting.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。生体内のメカニズム、最新の技術で、解明しました。',en:"Yes. In-body mechanism — latest tech, clarified.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'養護施設での生物実習、社会的意義、論じていますね。',en:"Care-facility bio-practicum — soc-meaning argued.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。研究者間の反乱、学界の歴史でも、いくつかありました。',en:"Yes. Researcher revolts — acad-hist, several existed.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'母国での研究と、海外の研究、比較されていますね。',en:"Home-country research vs overseas — compared.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。絶滅危機の中で、生き残ってきた種、論文の中心です。',en:"Yes. Surviving species amid extinction — paper-center.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'実験装置の操縦、慎重に、扱われていますね、研究室で。',en:"Equip-operation — carefully handled, lab.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。微生物の発酵プロセス、新発見、報告いたしました。',en:"Yes. Microbe fermentation — new findings, reported.",style:'Earnest close.'},
  ]},
  {id:'conv_06712',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、被害者が、複数の名で名付けられていた人物でした。',en:"Case — victim, multi-naming person.",style:'Calm.'},
    {speaker:'ren_uni',jp:'科学捜査、生体反応、重要な手がかりですね。',en:"Forensic — bio-reaction, key clue.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、養護施設、出身者でした。',en:"Yes. Suspect — care-facility from.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察組織内の反乱、過去に、ありましたか。',en:"Internal police-rev — past existed?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、母国に逃亡しようとしておりました。',en:"Yes. Suspect — home-country flee-attempted.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'目撃証人、危険を生き残った貴重な存在ですね。',en:"Witness — danger-survived precious person.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。船の操縦履歴、容疑者と一致いたしました。',en:"Yes. Boat-operation log — suspect-matched.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'発酵食品関連の不正、警察が、捜査に入ったんですね。',en:"Fermented-food fraud — police entered inv.",style:'Curious close.'},
  ]},
  {id:'conv_06713',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、新薬、開発者の名で、名付けられました。',en:"Ren — new drug, dev-named.",style:'Calm.'},
    {speaker:'ren_uni',jp:'生体サンプルの保管、医療現場で、進んでいますね。',en:"Bio-sample storage — med-site advancing.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。養護学校との連携、医療として、強化中です。',en:"Yes. Care-school link — as med, strengthening.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療従事者の反乱、過去のパンデミックで、ありましたよね。',en:"Med-worker revolt — past pandemic existed.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。海外医師、母国に戻る選択、悩ましいケースもあります。',en:"Yes. Foreign-doctors — home-return choice, dilemma cases too.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'重い病から生き残った患者、生きる力、勇気をくれますね。',en:"Heavy-illness survived patients — life-strength, encourage.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。最新医療機器、操縦に、研修が必要です。',en:"Yes. Latest med-equip — operation, training needed.",style:'Informative.'},
    {speaker:'ren_uni',jp:'腸内発酵バランス、健康への影響、大きいんですね。',en:"Gut-fermentation balance — health-impact large.",style:'Curious close.'},
  ]},
  {id:'conv_06714',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp expansion',lines:[
    {speaker:'hiroshi_boss',jp:'新製品、社内公募で、名付けられた、いいネーミングだ。',en:"New product — internal-named, good naming.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。生体認証システム、社員向けに、導入予定です。',en:"Yes. Bio-auth system — for staff, intro plan.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'地域貢献として、養護施設、長年、支援している。',en:"Local contrib — care-facility, long-support.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。組合の反乱、対話を通じて、回避しております。',en:"Yes. Union revolt — through dialogue, avoid.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'母国市場、海外展開と、両方を見据えろ。',en:"Home market — overseas expansion both, foresee.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。リーマンショックを生き残った企業、当社の誇りです。',en:"Yes. Lehman-survived — co pride.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'経営の操縦、慎重に、行うこと、忘れるな。',en:"Mgmt-operation — careful, don't forget.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。発酵食品の新事業、市場調査、進めております。',en:"Yes. Fermented-food new biz — market-research advancing.",style:'Close.'},
  ]},
  {id:'conv_06715',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through historical research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、研究、地名に名付けられた歴史、深く論じていますね。',en:"Sakura — research, place-naming hist, deep argued.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。生体への被害、戦争時、深刻でした。',en:"Yes. Bio-damage, wartime, severe.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'当時の養護院、戦災孤児を、受け入れていましたね。',en:"Era care-homes — war-orphans, accepted.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。民衆の反乱、歴史の節目に、何度かありました。',en:"Yes. Populace revolts — hist-milestones, several.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦後、母国に帰れなかった人々、忘れてはなりませんね。',en:"Post-war — home-unreturnable people, must not forget.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦災を生き残った市民、その声、論文で拾いました。',en:"Yes. War-survived citizens — voice, paper-picked.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'政治の操縦、誰の手にあったか、論じていますね。',en:"Pol-operation — whose hand, argued.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。発酵食文化、戦時下でも、人々を支えました。',en:"Yes. Fermented-food culture — wartime, supported.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06716',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about food and hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、新しい寿司屋、マグロ、美味しいよ、絶対行こうよ。',en:"Aoi — new sushi, tuna delish, definitely go.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。お店の裏庭、柳の木、風情があるね、結構いい。',en:"Yeah. Backyard — willow, atmospheric, quite good.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'季節の果実、ケーキに、いつも使ってくれてる、葵。',en:"Season fruit — on cakes, always-using, Aoi.",style:'Warm.'},
    {speaker:'aoi_barista',jp:'夏休み、香川に、うどん食べに行きたいなって思ってるよ、私。',en:"Summer — Kagawa, udon-eat want-go, me.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'明日の朝、羽田から、出発するの、彼と。',en:"Tomorrow morn — Haneda depart, with him.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'休日、園芸、私の、新しい趣味になったわよ、最近。',en:"Holiday — gardening, my-new-hobby, lately.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'お正月、琴の音色、ラジオで聴くと、ホッとするわよね。',en:"NY — koto-tone, radio-listen, calming.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'お客さんの息子さん、フットボール、頑張ってるみたいよ。',en:"Cust's son — football, hard-working.",style:'Warm close.'},
  ]},
  {id:'conv_06717',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat about a family trip',lines:[
    {speaker:'sho_child',jp:'ママ、お寿司、マグロ、ぼくの大好物だよ!',en:"Mom — sushi, tuna, my fave!",style:'Excited child.'},
    {speaker:'yumiko_mom',jp:'うん。公園の柳、夏は、涼しげでいいわね、見て。',en:"Yes. Park willow — summer, cool-looking, look.",style:'Soft.'},
    {speaker:'sho_child',jp:'庭の木に、果実、いっぱい、なってるよ、ママ!',en:"Garden tree — fruits lots, growing, Mom!",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'夏休み、香川のお祖父ちゃん家、遊びに行きましょうね。',en:"Summer — Kagawa Grandpa's, visit.",style:'Bright.'},
    {speaker:'sho_child',jp:'飛行機、羽田から、出るんだよね?楽しみ!',en:"Plane — Haneda depart, right?, fun!",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お祖母ちゃんと、夏休みに、園芸、ぜひ、やってみてね。',en:"Granny — summer, gardening, please-try.",style:'Direction.'},
    {speaker:'sho_child',jp:'琴の音、お祖母ちゃんが、教えてくれるんだよ、習いたいよ。',en:"Koto — Granny teaches, want-learn.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お父さん、若い頃、フットボール、やってたって、知ってた?',en:"Dad — youth, football played, knew?",style:'Warm close.'},
  ]},
  {id:'conv_06718',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat about plans',lines:[
    {speaker:'sakura_teen',jp:'リク、寿司、マグロが一番好きって、覚えてるよ、お前。',en:"Riku — sushi, tuna best, remember, you.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。学校の前の柳の木、いい風景だよな、季節を感じる。',en:"Yeah. School-front willow — nice view, season-feel.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お祖母ちゃん家、果実園、夏休み、お手伝いに行くんだ。',en:"Granny's — fruit-farm, summer help-go.",style:'Animated.'},
    {speaker:'riku_teen',jp:'修学旅行、香川か、長野か、まだ決まってないんだよな。',en:"School trip — Kagawa or Nagano, still undecided.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'夏期講習、東京に行くの、羽田で、待ち合わせしようよ。',en:"Summer school — Tokyo go, Haneda meet?",style:'Eager.'},
    {speaker:'riku_teen',jp:'生物部で、園芸も、やってるって、お前、知ってた?',en:"Bio club — gardening too, knew?",style:'Curious.'},
    {speaker:'sakura_teen',jp:'文化祭で、琴の演奏、見たいよね、いつも素敵だよね。',en:"Cult-fest — koto, want-see, always lovely.",style:'Bright.'},
    {speaker:'riku_teen',jp:'部活、フットボール部、強くなってきてさ、楽しいぜ。',en:"Club — football team, getting-strong, fun.",style:'Animated close.'},
  ]},
  {id:'conv_06719',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'結婚記念日、マグロのお寿司、奮発しようかな、今年は。',en:"Wedding anniv — tuna sushi, splurge?, this year.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。庭の柳、私が、若い頃に、植えた木よ、覚えてる?',en:"Yes. Garden willow — my youth-planted, remember?",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'冬の果実、コタツで食べるのが、楽しみだったな、昔。',en:"Winter fruit — kotatsu-eat, fun, old days.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'香川出身のあなた、うどんを愛しているわよね、昔から。',en:"Kagawa-from-you — udon loved, since old.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'最近、羽田空港、変わったよな、ニュースで見たぞ。',en:"Lately — Haneda changed, news-saw.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'園芸クラブ、地域で、続けようかしらね、私。',en:"Garden club — local-continue?, me.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'若い頃、琴を習いたかったな、お祖母ちゃん、教えてくれてたよな。',en:"Youth — koto learn-wanted, Granny taught me.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'息子、若い頃、フットボール選手、目指したのよね、覚えてる?',en:"Son — youth, football-player aimed, remember?",style:'Wistful close.'},
  ]},
  {id:'conv_06720',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan a menu',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、新メニューに、マグロのカルパッチョ、出そかな。',en:"Aoi — new menu, tuna-carpaccio, out?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。店内、柳のディスプレイ、和の雰囲気、出ますね。',en:"Yes. Interior — willow-display, wa-feel out.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'季節の果実、毎月、変えて、デザートに、使おか。',en:"Seasonal fruit — monthly-change, dessert use?",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。香川の讃岐うどん、月一の限定メニュー、いいですね。',en:"Yes. Kagawa Sanuki — monthly-limited, good.",style:'Reflective.'},
    {speaker:'daichi_kansai',jp:'仕入れ、羽田から、新鮮な魚、空輸できんかな。',en:"Sourcing — Haneda fresh-fish, air-ship?",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。店内の園芸、お客様にも、好評です、緑が増えて。',en:"Yes. In-store gardening — cust-popular, green-more.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'夜の演奏、琴奏者、お呼びするのは、どうやろか。',en:"Night-music — koto-player, invite?",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。日米交流イベントで、フットボール選手、お招きしませんか。',en:"Yes. US-Japan event — football-player, invite?",style:'Bright close.'},
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_346 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['カバン','五つ','浴びる','ジャガイモ','年下','指先','注意深く','かすか']
const B_T = ['結びつく','オーディション','去り','今季','真意','一読','一概に','トレーナー']
const C_T = ['終焉','連立','決戦','火力','耕','媒介','シリア','精進']
const D_T = ['ブラインド','逃避','有志','無人','調味','繁盛','ドリル','箱根']

const data = [
  // A
  {id:'conv_06881',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、ぼくの新しいカバン、可愛いよね、皆に、褒められたんだよ、今日。',en:"Mom — my new bag, cute, all-praised, today.",style:'Proud child.'},
    {speaker:'yumiko_mom',jp:'うん。お菓子、五つに、分けて、お友達と、シェアしようね、翔くん。',en:"Yes. Sweets — into-5, split, share, Sho.",style:'Soft.'},
    {speaker:'sho_child',jp:'お外で、走って、汗、たくさんかいた、シャワー、浴びるよ、ぼく、今から。',en:"Outside — ran, sweat lots, shower-take, me now.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'今夜のおかず、ジャガイモの煮物、お父さん、大好きなのよ、楽しみね。',en:"Tonight — potato-stew, Dad-loves, fun.",style:'Warm.'},
    {speaker:'sho_child',jp:'お友達、年下の子に、ぼく、優しく、教えてあげたんだよ、宿題。',en:"Friend younger — me kindly taught, homework.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'お絵描き、指先で、丁寧に、塗ろうね、翔くん、ゆっくりで、いいよ。',en:"Drawing — fingertips, carefully paint, Sho, slow OK.",style:'Tender.'},
    {speaker:'sho_child',jp:'お父さん、注意深く、車、運転してたよ、雪の日、ぼく、覚えてる。',en:"Dad — carefully drove, snow day, remember.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'夜中、かすかに、雨の音、聞こえたわよね、翔くん、寝てた?',en:"Midnight — faintly rain-sound heard, Sho asleep?",style:'Soft close.'},
  ]},
  {id:'conv_06882',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、新しいカバン、お洒落だね、彼に、買ってもらったの?',en:"Aoi — new bag stylish, bf-bought?",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。今日、お客様が、五つも、ケーキ、注文されたわよ、嬉しいよ、本当に。',en:"Yeah. Today — cust 5 cakes ordered, glad really.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'最近、暑くて、家に帰ったら、すぐ、シャワー、浴びるのよね、私。',en:"Lately — hot, home-returning, immediately shower-take, me.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'新メニュー、ジャガイモのスープ、お客様、好評ですよ、ホクホクで、美味しい。',en:"New menu — potato-soup, cust favorable, fluffy tasty.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'彼、私より、ちょっと、年下なの、結構、頼りになる人なのよ、本当に。',en:"He — slightly younger, quite reliable person, really.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'コーヒー入れる時、指先の感覚、本当に、大事なのよ、葵で、覚えたよ。',en:"Coffee-pour — fingertip-sense really vital, Aoi-learned.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'彼との話、注意深く、聞かないと、誤解、すぐ、生まれちゃうのよ。',en:"With-bf talk — carefully listen, misunderstanding soon-rises.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'店内、かすかに、ジャズの音、流れてて、いい雰囲気よね、いつも、葵。',en:"Interior — faintly jazz playing, nice air, always Aoi.",style:'Warm close.'},
  ]},
  {id:'conv_06883',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前のカバン、結構、年季入ってるよな、長く、使ってるんだよね。',en:"Riku — your bag quite-worn, long-used.",style:'Wry teen.'},
    {speaker:'riku_teen',jp:'うん。文化祭の出し物、五つくらい、候補、出てたぜ、絞るの、難しかった。',en:"Yeah. Cult-fest acts — 5 candidates, narrowing hard.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'体育の後、シャワー、浴びるの、最高に気持ちいいよね、運動後、本当に。',en:"Post-PE — shower-take, best feel, post-exercise really.",style:'Bright.'},
    {speaker:'riku_teen',jp:'お母さんの料理、ジャガイモのコロッケ、めっちゃ、美味いんだぜ、家庭の味、最強だ。',en:"Mom-cook — potato-koroke, super tasty, home-taste, best.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'部活、年下の後輩に、優しく、接しないとね、リク、私たち、お手本ね。',en:"Club — junior kindly-treat, Riku, role-model.",style:'Direction.'},
    {speaker:'riku_teen',jp:'お前の指先、繊細だな、絵を描く時、本当に、芸術的だぜ、桜。',en:"Your fingertips — delicate, drawing-time, artistic, Sakura.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'先生の話、注意深く、聞いてないと、テスト、できないよ、リク、わかる?',en:"Teacher-talk — carefully listen, test-fail, Riku, get?",style:'Wry.'},
    {speaker:'riku_teen',jp:'夜、廊下、かすかに、足音、聞こえてさ、ちょっと、怖かったぜ、桜。',en:"Night — hallway, faintly footsteps, slightly scary, Sakura.",style:'Reflective close.'},
  ]},
  {id:'conv_06884',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃のカバン、革製で、本当に、長く、使ったな、ばあさん、覚えてる?',en:"Youth bag — leather, really long-used, gran, remember?",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。孫が、お正月に、五つも、お年玉、もらったって、嬉しそうだったわね。',en:"Yes. Grandkid — NY, 5 otoshidama received, happy-looked.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'温泉に、ゆっくり、浴びるのが、年寄りの楽しみだな、ばあさん、本当に。',en:"Onsen — slowly take, elder-joy, gran really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お祖母ちゃんの作る、ジャガイモのお味噌汁、本当に、美味しかったわよね、覚えてる?',en:"Granny-made potato miso-soup — really tasty, remember?",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'息子の嫁、ちょっと、年下で、優しい人だな、本当に、ありがたいよ。',en:"Son's wife — slightly younger, kind, grateful really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'昔の私の指先、本当に、器用だったわよね、お祖母ちゃん、覚えてるかしらね。',en:"Old my fingertips — really dexterous, Granny remember?",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'最近、足元、注意深く、歩かないと、転んじゃうよな、ばあさん、お互いに。',en:"Lately — feet carefully walked, fall, gran mutual.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'夜中、かすかに、寒さを、感じるようになってきたわね、布団、もう一枚、出しましょうか。',en:"Midnight — faintly cold-feel, futon, another out?",style:'Soft close.'},
  ]},
  {id:'conv_06885',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さんのカバンに、お土産、入ってるよ、見てごらん、何かな?',en:"Sho — Mei-sis's bag, souv inside, look, what?",style:'Warm.'},
    {speaker:'sho_child',jp:'ぼく、メダル、五つも、運動会で、もらったんだよ、メイ姉さん、すごいでしょ?',en:"Me — medals 5, sports-day received, Mei-sis amazing right?",style:'Proud child.'},
    {speaker:'mei_romantic',jp:'夏は、毎日、水浴び、浴びるのが、楽しい季節ね、翔くん、海、行こうね。',en:"Summer — daily water-take, fun-season, sea-go.",style:'Bright.'},
    {speaker:'sho_child',jp:'メイ姉さんの作るジャガイモ料理、ぼく、大好きなんだよ、また、作ってね、お願い。',en:"Mei-sis's potato-cook — love, again-make please.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、翔くんより、年下の従妹、いるのよ、知ってた?今度、紹介するね。',en:"Mei-sis — Sho-younger cousin exists, knew?, next intro.",style:'Soft.'},
    {speaker:'sho_child',jp:'指先で、お絵描き、もっと、上手になりたいよ、メイ姉さん、教えてくれる?',en:"Fingertip-drawing — better-want, Mei-sis teach?",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'公園で、注意深く、転ばないように、走ろうね、翔くん、約束ね。',en:"Park — carefully, lest-fall, run, Sho promise.",style:'Direction.'},
    {speaker:'sho_child',jp:'メイ姉さん、夜、かすかに、星、見えるよ、空、すごく綺麗、見て、ね、本当に!',en:"Mei-sis — night, faintly stars-visible, sky pretty, look really!",style:'Awe close.'},
  ]},

  // B
  {id:'conv_06886',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'新規事業、当社の強みと、結びつく形で、進めろ。',en:"New biz — our strength tie-form, advance.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社内コンテスト、来週、オーディション、実施します、若手の登竜門です。',en:"Yes. Internal contest — next week audition, youth-gateway.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'去り行く、ベテラン社員の知恵、後輩に、引き継がせろ。',en:"Departing veteran-staff — wisdom, junior-inherit.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。今季の業績、好調に、推移しております、株主様、喜ばれそうです。',en:"Yes. This-season perf — strong, shareholders likely-glad.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'お客様の真意、現場で、よく、聞いて、対応しろ。',en:"Cust true-intent — at-site, well-hear, handle.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。重要書類、社長、一読、いただけませんか、ご確認のため。',en:"Yes. Vital docs — pres, single-read possible?, verify.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'一概に、業界の景気、悪いとは言えない、当社、機会あり。',en:"One-and-all, industry biz not-bad, our co opportunity.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社内のトレーナー、外部、招聘いたしました、研修強化のため。',en:"Yes. Internal trainer — external invited, train-strength.",style:'Close.'},
  ]},
  {id:'conv_06887',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'マーケティングと製造、しっかり、結びつくよう、調整、お願いね。',en:"Marketing — manufacturing, properly tie, coord please.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。新人広報、オーディション形式で、選考いたしました、最終候補、絞れました。',en:"Yes. PR newbie — audition-form selected, final-narrowed.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'同期の山田さん、会社を、去り、独立されるそうよ、寂しいわね。',en:"Cohort Yamada — left-co, indep going, lonely.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。今季の販促キャンペーン、効果、出ております、皆様のおかげで。',en:"Yes. This-season promo — effect out, thanks to all.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'お客様の真意、メールだけじゃ、伝わらないわよね、対面で、聞きましょう。',en:"Cust true-intent — email-only, no-convey, face-to-face.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。配布資料、皆様、一読、お願いいたします、本日の会議前に。',en:"Yes. Distrib mat — all, single-read please, pre-meeting.",style:'Polite.'},
    {speaker:'yuki_office',jp:'業界状況、一概には、評価できないわよね、各社、強み、違うから。',en:"Industry status — one-and-all, can't-eval, each co strengths differ.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。社員向け、トレーナー、定期的に、お招きしております、新人研修で。',en:"Yes. Staff-aimed trainer — periodic invited, newbie-train.",style:'Close.'},
  ]},
  {id:'conv_06888',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究と社会のニーズ、結びつくテーマ、選べ、社会貢献、視点を、持て。',en:"Ren — research-soc-need tie theme, choose, soc-contrib view.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。学会で、若手のオーディションのような選考が、ありますよね。',en:"Yes. Conf — youth audition-like selection exists.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'指導教官が、去り行かれた後の、研究室、君が、支える立場だぞ。',en:"Adviser-departed lab — you, support-role.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。今季の研究、データの分析、深く、進められそうです、成果、出ます。',en:"Yes. This-season research — data-analysis deep-advance, results out.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'論文の真意、査読者に、しっかり、伝わるよう、書け、独創性、出せ。',en:"Paper true-intent — reviewer-convey, write, originality.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。先輩の論文、一読、させていただきました、参考になりました、本当に。',en:"Yes. Senpai paper — single-read permit, referenced really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'研究、一概に、こうあるべき、と、決まったものは、ないぞ、自由に発想しろ。',en:"Research — one-and-all, should-form, none, free-think.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究室の、新しいトレーナー役、僕も、果たしていきたいです。',en:"Yes. Lab new trainer-role — me also fulfill want.",style:'Earnest close.'},
  ]},
  {id:'conv_06889',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'地域防犯と、企業の取り組み、結びつくこと、効果的です、皆様の協力、感謝です。',en:"Local crime-prev — corp-effort, tie, effective, your coop grateful.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察、新人警察官、オーディションのような、厳しい選考、あるんですか?',en:"Yes. Police — newbie officers, audition-like strict selection?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'容疑者、現場を、去り、別の地域に、移動した形跡、ございます、捜査、続けています。',en:"Suspect — site-left, other-area moved trace, inv continues.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。今季の犯罪件数、警察の発表、楽しみに、しております、減少傾向、期待です。',en:"Yes. This-season crime — police announce, look-forward, decrease-expect.",style:'Update.'},
    {speaker:'takeda_officer',jp:'容疑者の真意、取り調べで、見抜く力、警察、求められております。',en:"Suspect true-intent — interrog, see-through power, police demanded.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察報告書、社内、一読、徹底するよう、社員に、伝えております。',en:"Yes. Police-report — internal single-read thorough, staff-told.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'一概に、防犯対策、画一化、難しいです、地域ごとの特性、考慮、必要です。',en:"One-and-all — crime-prev unify hard, local-character consider needed.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察出身のトレーナー、社内、お招きしております、定期的に。',en:"Yes. Ex-police trainer — internal-invited, periodic.",style:'Close.'},
  ]},
  {id:'conv_06890',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業精神と、現代の経営、結びつく形で、進めろ、お父さんから、よく言ってる。',en:"Founding-spirit — modern mgmt, tie-form advance, from-Dad often-say.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。社員、若手の社内オーディション、毎年、実施しております。',en:"Yes. Staff — youth internal-audition, yearly conducted.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'創業期の同志、何人も、世を去り、寂しい思い、することが、増えたよ。',en:"Founding-pals — many, world-left, lonely-feel increased.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。今季も、創業時の精神を、社員に、伝えてまいります、お父さん。',en:"Yes. This season also — founding-spirit, staff-convey, Dad.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さんが、創業時に、込めた真意、若手にも、しっかり、伝えていけ。',en:"Dad founding-time embedded true-intent — youth, properly convey.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。創業者の言葉、社内資料に、一読、価値が、ある内容です、本当に。',en:"Yes. Founder-words — internal-mat, single-read value, really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'経営の道、一概には、語れない、複雑で、しかも、奥深いものだ、覚えておけ。',en:"Mgmt path — one-and-all, untellable, complex deep, remember.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さん、人生のトレーナーとして、私を、ここまで、育ててくださいました、感謝です。',en:"Yes. Dad — life-trainer, raised me here, grateful.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06891',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses world history',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、論文、ローマ帝国の終焉、よく、まとめましたね、視点が、独創的でした。',en:"Ren — paper, Rome empire-end, well-grouped, original view.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。戦後、連立政権の歴史、各国比較で、論じました。',en:"Yes. Post-war — coalition-gov hist, multi-country compared.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'冷戦の決戦地、各国に、影響を、与えていますね、今も、痕跡が、残ります。',en:"Cold War decisive-locations — multi-country effect, still trace.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。火力発電が、近代産業を、支えた基盤、論じました、第二章で。',en:"Yes. Thermal-power — modern-industry support base, ch2 argued.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時の食糧難、田を耕す人々の絆、深く、論じていますね、感動的でした。',en:"Wartime food-shortage — rice-till people-bond, deep argued, moving.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。病気の媒介、衛生概念の変遷、戦後の医療、変えました。',en:"Yes. Disease vector — hyg-concept change, post-war med-changed.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'シリアの古代文明、文化交流の交差点でしたね、論文の中でも、触れていますね。',en:"Syria ancient civ — cult-exchange crossroads, in-paper too touched.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。日々の精進、研究者として、心がけてまいります、ありがとうございました。',en:"Yes. Daily devotion — as researcher, mindful, thank you.",style:'Earnest close.'},
  ]},
  {id:'conv_06892',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、容疑者集団の終焉、近いと、見られております、捜査、最終段階です。',en:"Case — suspect-group end near, seen, inv-final-stage.",style:'Calm.'},
    {speaker:'ren_uni',jp:'警察と地元自治体の連立、捜査、強化されているんですね、最近、特に。',en:"Police-local-gov coalition — inv strengthening, lately esp.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。本件、捜査の決戦の地、確定いたしました、容疑者、特定間近です。',en:"Yes. Case inv-decisive-place, confirmed, suspect ID-near.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者、火力発電所の敷地内に、潜伏していたんですね、警察、発見したと。',en:"Suspect — thermal-plant site hiding, police-found.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、地元の畑を耕す住民に、扮していた疑い、あります、本件。',en:"Yes. Suspect — local-field-till resident-disguised, susp, this case.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'犯罪の媒介、SNSが、果たした役割、本件でも、大きかったですか?',en:"Crime medium — SNS-role played, also-big this case?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。シリアからの国際情報、捜査に、活用させていただいております、外交ルートで。',en:"Yes. Syria-int info — inv utilized, diplo route.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察の日々の精進、市民の安全に、深く、繋がっていますね、感謝、しなければ。',en:"Police daily-devotion — citizen-safety deep-tied, must-thank.",style:'Reflective close.'},
  ]},
  {id:'conv_06893',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、患者さんの闘病、終焉が、近いと、ご家族に、お伝えしました、辛かったです。',en:"Ren — patient illness-fight, end near, family-told, hard.",style:'Calm.'},
    {speaker:'ren_uni',jp:'医療と福祉の連立、地域包括ケア、進んでいますね、最近、特に、活発化してます。',en:"Med-welfare coalition — local-care progressing, lately esp-active.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。難病との決戦のような気持ちで、医師、毎日、向き合っております。',en:"Yes. Incurable-decisive feel, doctor daily face.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療機関、火力発電所のような、エネルギー消費の見直し、進めていますか?',en:"Med-org — thermal-power-like energy-use review advancing?",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。研究者として、地道に、土を耕すような研究、続けてまいります。',en:"Yes. As researcher — steadily, ground-till-like research continue.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'蚊が媒介する感染症、最近、増えていますよね、地球温暖化の影響でしょうか。',en:"Mosquito-vec disease — lately increase, global-warm effect?",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。シリアからの難民の方々、医療支援、必要としていらっしゃいます、現在も。',en:"Yes. Syria-refugees — med-support need, currently.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医師の日々の精進、患者さんに、希望を、与えていますね、本当に、頭が下がります。',en:"Doctor daily-devotion — patient-hope give, really humbled.",style:'Reflective close.'},
  ]},
  {id:'conv_06894',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp strategy',lines:[
    {speaker:'hiroshi_boss',jp:'業界、競争の終焉は、まだまだ、遠い、攻めていけ、社員、士気、高く保て。',en:"Industry rivalry-end — far, attack, staff morale-high.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。業界団体との連立、当社も、リーダーシップを、発揮しております、最近、特に。',en:"Yes. Industry-assoc coalition — our co leadership exerted, lately.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'年末商戦、決戦の時期だ、社員一丸となって、頑張れ、私も、現場に出る。',en:"Year-end battle — decisive period, staff-united, also-front.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。火力発電依存の旧設備、再エネに、置き換え、進めております。',en:"Yes. Thermal-power-dep old equip — renew-replace, advancing.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'創業時、私自身も、田を耕すような気持ちで、ゼロから、事業を、育てた。',en:"Founding — me too, rice-till-feel, from-zero biz-raised.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。情報伝達、社内SNSが、媒介となって、迅速化、しております、最近。',en:"Yes. Info-relay — internal-SNS medium-became, swift, lately.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'シリアでの人道支援事業、当社、参画、検討しろ、社会貢献として。',en:"Syria humanitarian biz — our co attend, study, soc-contrib.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員の日々の精進、本当に、当社の財産です、感謝、しなければなりません。',en:"Yes. Staff daily-devotion — really our asset, must-thank.",style:'Close.'},
  ]},
  {id:'conv_06895',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through cultural studies',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、論文、江戸時代の終焉、明治への移行、丁寧に、描いていますね、歴史好きの方、評価されます。',en:"Sakura — paper, Edo-end, Meiji-transition, careful depict, hist-fan eval.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。明治期の藩閥、連立政権のような体制、論じました、複雑な背景、ありました。',en:"Yes. Meiji clan-cliques — coalition-like system, argued, complex bg existed.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'戊辰戦争、最後の決戦、歴史的に、重要なテーマでしたね、論文の中でも、深く扱っていますね。',en:"Boshin War — last decisive, hist vital theme, in-paper deep.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。火力発電が、産業革命を、支えた歴史、文化的影響も、論じました。',en:"Yes. Thermal-power industry-rev support hist — cult-impact argued.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'江戸時代、農民が田を耕す姿、文学にも、よく、登場していますね、印象的です。',en:"Edo — peasants rice-till, lit also-appears, striking.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。情報の媒介として、瓦版が果たした、社会的役割、論文で、扱いました。',en:"Yes. Info-medium — kawaraban played soc-role, paper-handled.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'シリアと日本の古代交流、研究の余地、まだまだ、ありますね、興味深いテーマです。',en:"Syria-Japan ancient exch — research-room remains, intriguing.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。研究者の精進、私も、見習いたいと、本気で、思っています、将来。',en:"Yes. Researcher-devotion — also emulate-want, seriously, future.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06896',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、窓のブラインド、新しく、変えたんだ、私の部屋、お洒落になったよ、見て。',en:"Aoi — window blind newly changed, my room stylish, see.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。最近、仕事から、現実逃避したくなる時、あるよね、メイちゃん、わかる?',en:"Yeah. Lately, work-reality-escape want-time, exists, Mei get?",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'子供食堂、有志で、運営しているの、知ってた、葵?素敵な活動よね、本当に。',en:"Kid-cafeteria — vol-run, knew, Aoi?, lovely activity really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'駅、最近、無人化、進んでるよね、改札、機械ばかりで、ちょっと、寂しい。',en:"Stns — lately un-staffed advancing, gates machines, lonely.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'新しい調味料、レシピに、加えたら、料理の幅、広がったの、私、はまってる、最近。',en:"New season-added — recipe-add, cook-range widened, hooked lately.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'駅前の蕎麦屋、最近、繁盛してるよ、行列、毎日、できてるみたいよ、お昼時。',en:"Stn-front soba — lately popular, line daily, lunch-time.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'DIYのドリル、お父さんに、借りたわよ、棚、作ってみるんだ、楽しみ、最近の趣味。',en:"DIY drill — Dad-borrowed, shelf-make, fun, recent hobby.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'今度の休み、箱根温泉、行こうって、決めたよ、葵と二人で、楽しみだね、本当に。',en:"Next holiday — Hakone-onsen, decided, with Aoi, fun really.",style:'Cheerful close.'},
  ]},
  {id:'conv_06897',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat about activities',lines:[
    {speaker:'sho_child',jp:'ママ、お部屋のブラインド、降ろしてくれる?日差し、強すぎるよ、ちょっと、まぶしい。',en:"Mom — room blind-lower?, sun-strong, bit-glare.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'うん。宿題、逃避しないで、ちゃんと、やろうね、翔くん、ママと一緒に、見守るからね。',en:"Yes. Homework — don't-escape, properly do, Sho, with Mom watch.",style:'Direction.'},
    {speaker:'sho_child',jp:'学校の有志のお手伝い、ぼく、頑張ったよ、ママ、皆に、ありがとうって、言われたよ。',en:"School volunteer help — me hard-worked, all-thanked.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'夏休み、無人駅のローカル線、家族で、乗ってみたいわね、お父さん、好きそうよね。',en:"Summer — unstaffed local-line, family-board want, Dad-like.",style:'Wistful.'},
    {speaker:'sho_child',jp:'お父さんが、新しい調味料、買ってきたよ、ぼく、ハンバーグに、つけるの、楽しみ!',en:"Dad — new season bought, me burger-put fun!",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃんの八百屋、繁盛しているらしいわよ、最近、ニュースで、見たって、お父さん。',en:"Grandpa veg-store — popular, lately news-saw, Dad.",style:'Reflective.'},
    {speaker:'sho_child',jp:'お父さん、DIYで、ドリル、使ってたよ、ぼく、すごいなって、見てたんだ、本当に。',en:"Dad — DIY, drill used, amazing-watched, really.",style:'Awe.'},
    {speaker:'yumiko_mom',jp:'秋に、箱根、家族旅行、計画してるのよ、ママ、お父さんと、相談中ね、楽しみよ。',en:"Autumn — Hakone family trip planning, Mom-Dad consult, fun.",style:'Tender close.'},
  ]},
  {id:'conv_06898',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、教室のブラインド、午後、降ろしてもらえると、勉強しやすいんだよね、本当に。',en:"Riku — class blind, afternoon lowered, study-easy, really.",style:'Reflective teen.'},
    {speaker:'riku_teen',jp:'うん。テスト前、つい、ゲームで、逃避したくなるんだぜ、俺、お前は、どう?',en:"Yeah. Pre-test — accidentally game-escape want, me, you how?",style:'Wry.'},
    {speaker:'sakura_teen',jp:'文化祭の出店、有志のメンバー、増えてきたよね、リク、結構、嬉しいね、皆。',en:"Cult-fest stand — vol-members increased, Riku, glad.",style:'Animated.'},
    {speaker:'riku_teen',jp:'夏休み、無人島、サバイバル、行ってみたいよな、桜、テレビで、見たこと、ある?',en:"Summer — uninhab-island survival, want-go, Sakura, TV-seen?",style:'Eager.'},
    {speaker:'sakura_teen',jp:'家庭科で、新しい調味料、レシピに、使ったよ、結構、上手にできたんだ、本当に。',en:"Home-ec — new season recipe-used, quite well-done, really.",style:'Proud.'},
    {speaker:'riku_teen',jp:'駅前のラーメン屋、最近、繁盛してるよな、お前と、行こうぜ、桜、お昼に。',en:"Stn ramen — lately popular, you-go, Sakura, lunch.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'木工部、電動ドリル、使うこと、覚えたよ、リク、結構、本格的なんだよ。',en:"Wood-club — drill use-learned, Riku, serious.",style:'Bright.'},
    {speaker:'riku_teen',jp:'修学旅行、箱根、計画されてるって、聞いたぜ、桜、お前、楽しみだろ?',en:"School trip — Hakone planned, heard, Sakura, fun right?",style:'Eager close.'},
  ]},
  {id:'conv_06899',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、ブラインドのカーテン、家の窓に、はじめて、つけたなと、覚えてる、ばあさん。',en:"Youth — blind curtain, home-window first-attached, remember, gran.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。あなた、若い頃、たまに、現実逃避したい時、あったわよね、覚えてる?',en:"Yes. You — youth, sometimes reality-escape-want time existed, remember?",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'地域の有志のメンバーとして、まだまだ、頑張りたいな、ばあさん、町内会のお祭り、運営、楽しい。',en:"Local-vol member — still hard-work want, gran, town-fest fun.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'昔の田舎の無人駅、夫婦で、利用したわね、覚えてる、新婚旅行の帰り道。',en:"Old country un-staffed stn — couple-used, remember, honeymoon-return.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃、調味料、自分で、調合してたな、ばあさんも、覚えてるよな、料理、上手だった。',en:"Youth — season self-blended, also-remember, cook-good.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'近所のおせんべい屋、最近、本当に、繁盛してるみたいよ、お祖父ちゃんが、教えてくれたわ。',en:"Local senbei — lately really popular, Grandpa-told.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'昔の私、農作業で、ドリルみたいな道具、よく、使ったな、ばあさん、覚えてる?',en:"Old me — farm-work, drill-like tools often-used, remember?",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'結婚記念日、箱根温泉、また、行きたいわね、二人で、ゆっくり、本当に、楽しいわね。',en:"Wedding-anniv — Hakone-onsen again want, two slow, fun, really.",style:'Tender close.'},
  ]},
  {id:'conv_06900',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、店の窓、ブラインドで、明るさ、調整しよか、お客様、まぶしくないように。',en:"Aoi — store-window, blind brightness adjust, cust non-glare.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。最近、お客様、日常から、逃避したくて、いらっしゃる方、増えていますね、葵に。',en:"Yes. Lately cust — daily-escape want, coming, Aoi.",style:'Reflective.'},
    {speaker:'daichi_kansai',jp:'地域の有志、お祭り、葵さんも、参加しはるんかい?面白そうやな、葵で。',en:"Local-vol — fest, Aoi attend?, fun-look, Aoi.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。無人運営のサテライト店舗、業界で、検討する流れ、出ています、最近、特に。',en:"Yes. Un-staffed satellite — industry studying trend lately esp.",style:'Probe.'},
    {speaker:'daichi_kansai',jp:'新しい調味料、和洋折衷で、開発しよか、葵さん、お客様、喜んでくれるかも。',en:"New season — Japan-West blend, develop?, Aoi, cust may-like.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。創業以来、お客様のおかげで、繁盛させていただいております、本当に、感謝しています。',en:"Yes. Since founding — thanks-cust, popular, really grateful.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'店内の工具、新しいドリル、買い足したで、修繕、業者に頼まんで、自前で。',en:"In-store tools — new drill bought-add, repair, vendor-no, in-house.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'はい。社員旅行で、箱根、計画したいですね、年に一度の、リフレッシュ、必要ですね。',en:"Yes. Staff-trip — Hakone plan want, yearly refresh needed.",style:'Warm close.'},
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_336 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['ヘタ','産ま','大雨','足ら','だらし','漂う','ふるさと','悪夢']
const B_T = ['後援','図表','台数','ターミナル','コーディネーター','歴代','三井','近況']
const C_T = ['ダイオキシン','隔離','葬式','解読','闘う','争う','変遷','盗ま']
const D_T = ['蛍光','ボーイ','ソナタ','ネズミ','愛好','コメディ','明快','大作']

const data = [
  // A
  {id:'conv_06681',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、トマトのヘタ、取らないと、食べにくいよ。',en:"Mom — tomato stem, remove-or, hard-to-eat.",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'うん。お祖母ちゃん、田舎で、産まれ育ったのよ。',en:"Yes. Granny — countryside born-raised.",style:'Warm.'},
    {speaker:'sho_child',jp:'明日、大雨って、ニュース、言ってたね、ママ。',en:"Tomorrow — heavy rain, news said, Mom.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お小遣い、足らないの?お手伝いしてくれたら、増やすわよ。',en:"Allowance — insufficient?, help-given, increase.",style:'Soft.'},
    {speaker:'sho_child',jp:'お部屋、だらしないと、ママに怒られちゃう。',en:"Room — sloppy, Mom-scolded.",style:'Wry.'},
    {speaker:'yumiko_mom',jp:'お焼き魚の香り、台所から、漂うね、いい匂い。',en:"Grilled-fish scent — kitchen-drifts, nice smell.",style:'Tender.'},
    {speaker:'sho_child',jp:'お祖父ちゃんのふるさと、夏休み、行きたいな!',en:"Grandpa's hometown — summer, want-go!",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'昨日、悪夢、見ちゃった、翔くん、寝言、いっぱい言ってたよ。',en:"Yesterday — nightmare, saw, Sho, sleep-talk lots.",style:'Soft close.'},
  ]},
  {id:'conv_06682',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、ピーマンのヘタ、取らないで料理する人、いるよね。',en:"Aoi — pepper stem-no-remove cooks, exist.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'うん。妹、子供が産まれて、毎日忙しいって、聞いた。',en:"Yeah. Sis — kid born, daily busy, heard.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'今日、大雨予報だったから、傘、持ってきたわよ。',en:"Today — heavy-rain forecast, brought umbrella.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'貯金、足らない時、つい、ATMに行っちゃうのよね。',en:"Savings — insufficient, accidentally ATM-go.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'彼の部屋、だらしないところ、ちょっと気になるの、私。',en:"His room — sloppy parts, slightly bother, me.",style:'Vulnerable.'},
    {speaker:'aoi_barista',jp:'店内、コーヒーの香り、漂う朝、最高の気分よ。',en:"Inside — coffee-scent drifting morning, best mood.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'実家のふるさと、年に一度、必ず帰っているの、私。',en:"Hometown — yearly once, definitely return, me.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'最近、悪夢、見るって、メイちゃん、大丈夫?',en:"Lately — nightmare seeing, Mei, okay?",style:'Concerned close.'},
  ]},
  {id:'conv_06683',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、イチゴのヘタ、取らずに食べる人、いるんだって。',en:"Riku — strawberry stem-no-remove eaters exist.",style:'Curious teen.'},
    {speaker:'riku_teen',jp:'うん。俺、ここで産まれて、ここで育った、こだわってる。',en:"Yeah. Me — here-born, here-raised, particular.",style:'Earnest.'},
    {speaker:'sakura_teen',jp:'大雨の中、自転車で、頑張ったよね、私たち、運動会前日。',en:"Heavy rain — bike-hard, us, pre-sports-day.",style:'Wry.'},
    {speaker:'riku_teen',jp:'時間、足らないんだよ、テスト勉強。',en:"Time — insufficient, test-study.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'部屋、だらしないって、ママに、また怒られたよ。',en:"Room — sloppy, Mom-again-scolded.",style:'Wry.'},
    {speaker:'riku_teen',jp:'グラウンドに、お祭りの香り、漂う放課後、好きだな。',en:"Field — fest-scent drifting post-school, like.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お盆、ふるさとに、皆で帰るの、楽しみだよ。',en:"Obon — hometown all-return, fun.",style:'Bright.'},
    {speaker:'riku_teen',jp:'昨日、テストの悪夢、見ちまったよ、もう、ホント。',en:"Yesterday — test-nightmare saw, really.",style:'Wry close.'},
  ]},
  {id:'conv_06684',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'柿のヘタ、お祖父ちゃん、よく取ってくれたな、子供の頃。',en:"Persimmon stem — Grandpa often-removed, childhood.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。私たち、戦時中に産まれた世代だものね、苦労したわ。',en:"Yes. Us — wartime-born gen, hardship.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'明日、大雨って、外出、控えようかな。',en:"Tomorrow — heavy-rain, outing, refrain?",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'体力、最近、足らないわね、お互いに、年だから。',en:"Stamina — lately insufficient, each-other, aged.",style:'Wry.'},
    {speaker:'hiroshi_elder',jp:'若い頃、私、だらしない格好、許してもらえなかったな、母に。',en:"Youth — me, sloppy-style, never-allowed, Mom.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'庭から、桜の香り、漂う季節になったわね、あなた。',en:"Garden — cherry-scent drifting season, dear.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'ふるさと、若い頃に出てきて、もう半世紀以上だな、私。',en:"Hometown — youth-left, half-century-plus, me.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'最近、悪夢を見ること、減ったわ、おかげで、ぐっすり眠れる。',en:"Lately — nightmare-seeing reduced, thanks, soundly-sleep.",style:'Warm close.'},
  ]},
  {id:'conv_06685',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、ナスのヘタ、お母さん、取ってくれたんだね、お弁当。',en:"Sho — eggplant stem, Mom removed, lunch.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、いつ、産まれたの?知ってる?',en:"Mei-sis — me, when born, know?",style:'Curious child.'},
    {speaker:'mei_romantic',jp:'大雨の日は、無理せず、家でゆっくり、過ごしましょう。',en:"Heavy-rain day — without-forcing, home-relax.",style:'Soft direction.'},
    {speaker:'sho_child',jp:'お小遣い、ぼく、ちょっと足らないんだ、玩具、買えない。',en:"Allowance — me, slightly insufficient, toy not-buy.",style:'Pouty.'},
    {speaker:'mei_romantic',jp:'お部屋、ちょっとだけ、だらしないかな、翔くん、片付けようね。',en:"Room — bit, sloppy, Sho, tidy.",style:'Direction.'},
    {speaker:'sho_child',jp:'公園に、お花の香り、漂うね、メイ姉さん。',en:"Park — flower-scent drifting, Mei-sis.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'メイ姉さんのふるさと、今度、翔くんも、連れて行ってあげる。',en:"Mei-sis's hometown — next time, Sho-take.",style:'Tender.'},
    {speaker:'sho_child',jp:'昨日、悪夢、見ちゃってさ、メイ姉さん、怖かったよ。',en:"Yesterday — nightmare, saw, Mei-sis, scary.",style:'Vulnerable close.'},
  ]},

  // B
  {id:'conv_06686',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews business planning',lines:[
    {speaker:'hiroshi_boss',jp:'今回のスポーツイベント、後援企業、複数決まったか。',en:"This sports event — sponsor cos, multi-decided?",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。事業計画の図表、明日、共有いたします。',en:"Yes. Biz-plan chart — tomorrow share.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'社用車、台数、適正か、見直しろ。',en:"Co-car — count, optimal?, review.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。ターミナル設備、空港との交渉、進めております。',en:"Yes. Terminal facility — airport-negot advancing.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'イベントコーディネーター、専門家、紹介してもらえ。',en:"Event coordinator — expert, get introduced.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。歴代の社長スピーチ、データベース化、進めます。',en:"Yes. Past pres speeches — DB-make, advancing.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'三井系の企業、提携、検討中だ。',en:"Mitsui-affil cos — partnership, studying.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。海外支社の近況、来週、報告いたします。',en:"Yes. Overseas-branch update — next-week report.",style:'Close.'},
  ]},
  {id:'conv_06687',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'地域マラソン、後援、続けるべきかしら、来期。',en:"Local marathon — sponsor, continue next term?",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。年次報告の図表、見やすく整理します。',en:"Yes. Annual report chart — readable organize.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'駐車場、車の台数、増やせるか、確認して。',en:"Parking — car count, increasable?, verify.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。空港ターミナルの広告、出稿、検討中です。',en:"Yes. Airport-terminal ad — placement, studying.",style:'Update.'},
    {speaker:'yuki_office',jp:'広告のコーディネーター、来週、面接しましょう。',en:"Ad coordinator — next-week interview.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。歴代社員の表彰式、感動的でしたね、昨日。',en:"Yes. Past-staff awards — moving yesterday.",style:'Reflective.'},
    {speaker:'yuki_office',jp:'三井不動産との打ち合わせ、来週、火曜よ。',en:"Mitsui-realty meet — Tue, next-week.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社内、各部署の近況、まとめております。',en:"Yes. Internal — dept-update, compiling.",style:'Close.'},
  ]},
  {id:'conv_06688',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、地域イベント、後援する企業、調べておけ。',en:"Ren — local event, sponsor cos, research.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。論文の図表、できる限り、視覚的に作ります。',en:"Yes. Paper chart — visually-much, make.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'参考文献の台数、十分か、確認しろ。',en:"Reference count — sufficient?, verify.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。空港ターミナルで、研究調査、実施しました。',en:"Yes. Airport terminal — research-conducted.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'学会のコーディネーターと、関係、築け。',en:"Conf coordinator — relation build.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。歴代の博士論文、図書館で、確認しました。',en:"Yes. Past PhD theses — library-verified.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'三井財閥の歴史、論文に、参考になるぞ。',en:"Mitsui-zaibatsu history — paper-referenceable.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。先輩方の近況、ゼミで共有していただいています。',en:"Yes. Senpai updates — seminar-shared.",style:'Earnest close.'},
  ]},
  {id:'conv_06689',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'防犯キャンペーン、地元企業の後援、ありがたく存じます。',en:"Crime-prev campaign — local-co sponsor, grateful.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。被害状況の図表、警察様に共有しています。',en:"Yes. Damage chart — police-shared.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'巡回パトカーの台数、増強しております、当面。',en:"Patrol car count — strengthened, for-now.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。ターミナル駅周辺、警察と連携、強化中です。',en:"Yes. Terminal-station vicinity — police-coord strengthening.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'防犯コーディネーター、自治体に、配置されました。',en:"Crime-prev coordinator — municipality-placed.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。歴代の警察署長、御社にも、ご縁がありました。',en:"Yes. Past chiefs — your co tie-existed.",style:'Update.'},
    {speaker:'takeda_officer',jp:'三井系企業、警察への協力、長年、いただいております。',en:"Mitsui-affil — police-coop, years-given.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。地域防犯活動の近況、市民にも、お伝えします。',en:"Yes. Local crime-prev update — citizen-share.",style:'Close.'},
  ]},
  {id:'conv_06690',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業時、文化事業の後援、私が、力を入れていた。',en:"Founding — cult-event sponsorship, my-focus.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。社史の図表、創業者のお写真も、入れます。',en:"Yes. Corp-hist chart — founder photo also include.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'創業時の車の台数、当時、たった一台だったぞ。',en:"Founding car count — back-then, only one.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。ターミナル拠点、創業者の知恵、活かしています。',en:"Yes. Terminal base — founder-wisdom utilizing.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'国際コーディネーター、私の代から、起用していた。',en:"Int coordinator — since my era, used.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。歴代社員の名簿、社史館に、保管しております。',en:"Yes. Past-staff roster — corp-museum-stored.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'三井系のお歴々と、私も、付き合いがあった、若い頃。',en:"Mitsui-affil — also, friendship existed, youth.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。OB会で、皆様の近況、お伝えしてまいります。',en:"Yes. OB-club — everyone's update, convey.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06691',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses environmental research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、研究、ダイオキシン汚染の歴史、深く論じていますね。',en:"Ren — research, dioxin pollution history, deeply argued.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。汚染地域、住民の隔離措置、対応の遅れ、指摘しました。',en:"Yes. Polluted area — resident isolation, response-delay, pointed.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'被害者の葬式、地域コミュニティに、深い影を落としましたね。',en:"Victim funeral — local-community, dark shadow.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。当時の暗号文書、解読にも、挑戦しました。',en:"Yes. Era ciphered docs — decryption also tried.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'住民が、企業と闘う姿、史料で印象的に描かれていますね。',en:"Residents fighting corp — archive-strikingly depicted.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。地域、企業、政府が、互いに争う構造、解明しました。',en:"Yes. Region/corp/gov mutually-disputing structure — clarified.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'環境意識の変遷、時代別に、整理されていますね。',en:"Env-conscience transition — era-wise organized.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。被害者のデータが盗まれた事件、第二章で扱いました。',en:"Yes. Victim-data theft incident — ch2 handled.",style:'Earnest close.'},
  ]},
  {id:'conv_06692',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a complex case',lines:[
    {speaker:'takeda_officer',jp:'本件、廃棄物からダイオキシン、検出されました。',en:"Case — waste, dioxin detected.",style:'Calm.'},
    {speaker:'ren_uni',jp:'現場、住民の隔離、進められたんですね。',en:"Site — resident isolation, advanced.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。亡くなった方の葬式、警察官として、出席いたしました。',en:"Yes. Deceased funeral — as officer, attended.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者の暗号メモ、解読、進んでいますか。',en:"Suspect's ciphered memo — decryption advancing?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。組織犯罪と闘う、警察の使命です。',en:"Yes. Org-crime fighting — police mission.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'複数の組織が、利権を争う構図、見えてきましたね。',en:"Multi-orgs — interest-disputing structure, visible.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。捜査手法の変遷、警察内で、共有しております。',en:"Yes. Inv-method transition — internally shared.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害者から盗まれた書類、回収、できそうですか。',en:"From-victim stolen docs — recoverable?",style:'Curious close.'},
  ]},
  {id:'conv_06693',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、ダイオキシンによる健康被害、まだ研究が進行中です。',en:"Ren — dioxin health-impact, still research ongoing.",style:'Calm.'},
    {speaker:'ren_uni',jp:'感染症の患者、隔離措置、医療現場、大変でしたね。',en:"Infectious patients — iso measures, med-site hard.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。患者さんの葬式、立ち会わせていただいたこと、忘れません。',en:"Yes. Patient funeral — attended-permit, unforgotten.",style:'Patient.'},
    {speaker:'ren_uni',jp:'カルテの暗号、解読が、医療AIで進んでいるそうですね。',en:"Chart-cipher — decryption, med-AI-advancing.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。病気と闘う患者さん、家族の支え、欠かせません。',en:"Yes. Disease-fighting patients — family-support, vital.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'医療界、新薬の特許で、争う場面も、あるそうですね。',en:"Med world — new-drug patents, disputes, exist.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。医療技術の変遷、目覚ましいものがあります。',en:"Yes. Med-tech transition — remarkable.",style:'Informative.'},
    {speaker:'ren_uni',jp:'患者データが盗まれた事件、医療界、警戒、強めましたよね。',en:"Patient-data theft — med-world alert-strengthened.",style:'Reflective close.'},
  ]},
  {id:'conv_06694',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp environmental policy',lines:[
    {speaker:'hiroshi_boss',jp:'環境対策、ダイオキシン排出、ゼロを、目指せ。',en:"Env measures — dioxin emit, zero aim.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。隔離保管の廃棄物、適正処理、徹底しております。',en:"Yes. Iso-stored waste — proper-process, thorough.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'前社長の葬式、社内、深く哀悼してくれた。',en:"Prev pres funeral — internal, deeply mourned.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。古い社内資料の暗号、解読、進めています。',en:"Yes. Old internal cipher — decryption advancing.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界の競争、誠実に闘う姿勢、社員に、示せ。',en:"Industry rivalry — honestly-fighting stance, staff-show.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。シェアを争う場面、増えております、最近。',en:"Yes. Share-disputing scenes — increase lately.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界の変遷、新人研修で、教えろ。',en:"Industry transition — newbie-train, teach.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社内データ、盗まれないよう、警備、徹底しております。',en:"Yes. Internal data — un-stolen, security thorough.",style:'Close.'},
  ]},
  {id:'conv_06695',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through environmental studies',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、研究、ダイオキシン問題の歴史、丁寧に追っていますね。',en:"Sakura — research, dioxin-issue hist, carefully traced.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。汚染地域、住民の隔離、社会問題、書きました。',en:"Yes. Polluted area — resident iso, soc-issue, wrote.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'被害者の葬式、地域社会に、強い影響を与えたんですね。',en:"Victim funeral — local-soc strong impact.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。古い行政文書、解読しながら、読みました。',en:"Yes. Old admin docs — decryption-while, read.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'市民が大企業と闘う姿、印象的に描かれていますね。',en:"Citizens fighting big-corp — striking depicted.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。利害が争う複雑な構造、図解で示しました。',en:"Yes. Interests-disputing complex structure — diagrammed.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'環境政策の変遷、年表で、よくまとまっていますね。',en:"Env-policy transition — timeline well-grouped.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。被害者の資料が盗まれた件、警鐘として、論じました。',en:"Yes. Victim-data theft — as warning, argued.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06696',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies and entertainment',lines:[
    {speaker:'mei_romantic',jp:'葵、新作の蛍光ペンセット、可愛いんだよ、見て。',en:"Aoi — new fluor-pen-set, cute, look.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。新店舗のボーイさん、礼儀正しい人ばかりよ、最近。',en:"Yeah. New store's bellboys — polite, lately.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'最近、ベートーベンのソナタ、よく聴くの、私。',en:"Lately — Beethoven sonata often-listen.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'店の裏で、ネズミ、たまに見るのよね、気持ち悪い。',en:"Store-back — mouse occasionally see, gross.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'バードウォッチング愛好家、最近、よく公園にいるよね。',en:"Birdwatching enthusiasts — lately park-many.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'昨日のコメディ番組、めっちゃ笑ったよ、私。',en:"Yesterday's comedy — super-laughed.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'今日のお話、明快で、すっきりしたわよ、葵。',en:"Today's talk — clear, refreshed, Aoi.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'新作映画、大作って評判だよ、見に行こうよ、メイちゃん。',en:"New film — masterpiece reputation, go-see, Mei!",style:'Eager close.'},
  ]},
  {id:'conv_06697',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'sho_child',jp:'ママ、新しい蛍光のシール、絵に貼ろうかな。',en:"Mom — new fluor-stickers, on-drawing stick?",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'うん。ホテルのボーイさん、丁寧に、案内してくれたわね、旅行で。',en:"Yes. Hotel bellboy — politely guided, on trip.",style:'Warm.'},
    {speaker:'sho_child',jp:'ピアノで、簡単なソナタ、弾けるようになったよ、ぼく。',en:"Piano — simple sonata, playable, me.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'絵本のネズミ、可愛いキャラね、翔くん、好きでしょ?',en:"Picture-book mouse — cute char, Sho, like?",style:'Warm.'},
    {speaker:'sho_child',jp:'昆虫愛好家のおじさん、お話、面白かったよ!',en:"Insect-enthusiast uncle — talk, fun!",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'コメディ番組、お父さんと、よく見てるね、夜。',en:"Comedy show — Dad-often-watching, night.",style:'Soft.'},
    {speaker:'sho_child',jp:'先生の説明、明快で、ぼく、よくわかったよ。',en:"Teacher explainer — clear, me well-understood.",style:'Cheerful.'},
    {speaker:'yumiko_mom',jp:'絵本作家の大作、書店で、見に行こうね、今度。',en:"Picture-book author's masterpiece — bookstore-go, next.",style:'Warm close.'},
  ]},
  {id:'conv_06698',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、ノート、蛍光ペンで、色分けしてるの、お洒落でいいよね。',en:"Riku — notebook, fluor-pen color-coded, stylish.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。ホテルのバイト、ボーイ役で、結構、楽しいぞ。',en:"Yeah. Hotel part-time — bellboy, quite fun.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'音楽の授業で、ソナタの聞き分け、難しかったよ、私。',en:"Music class — sonata-distinguish, hard, me.",style:'Wry.'},
    {speaker:'riku_teen',jp:'実験室、ネズミがいるって、噂、本当かな?',en:"Lab — mouse there, rumor, true?",style:'Curious.'},
    {speaker:'sakura_teen',jp:'天文愛好家の友達、星の名前、めっちゃ詳しいよ。',en:"Astron-enthusiast pal — star-names, super-detailed.",style:'Animated.'},
    {speaker:'riku_teen',jp:'昨日見たコメディ、お前と一緒に、見たかったぜ、桜。',en:"Yesterday comedy — wanted-watch-together, Sakura.",style:'Soft.'},
    {speaker:'sakura_teen',jp:'先生の説明、明快だったから、テスト、できそう。',en:"Teacher explainer — clear, test, do-able.",style:'Cheerful.'},
    {speaker:'riku_teen',jp:'夏休みに、大作小説、読破するの、目標だ。',en:"Summer — masterpiece novel, finish-read goal.",style:'Earnest close.'},
  ]},
  {id:'conv_06699',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、寝るとき、蛍光時計、よく見たな、楽しかった。',en:"Youth — sleep, fluor-clock often-saw, fun.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。新婚旅行のボーイさん、優しかったわね、覚えてる?',en:"Yes. Honeymoon bellboy — kind, remember?",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'モーツァルトのソナタ、好きだったな、お祖父ちゃん、聴いてた。',en:"Mozart sonata — liked, Grandpa-listened.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'昔の田舎の家、ネズミ、よく出てきたわね、夜。',en:"Old country home — mouse often-appeared, night.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃、私、書道愛好家として、活動していたよ。',en:"Youth — me, calligraphy-enthusiast active.",style:'Sage.'},
    {speaker:'sachiko_grandma',jp:'お正月のコメディ番組、笑ったわね、二人で。',en:"NY comedy show — laughed together.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'昔の本、明快な文体で、読みやすかったな、明治の。',en:"Old books — clear style, easy-read, Meiji.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'晩年の作家、大作を残した方、多いわね、文学界に。',en:"Late-era writers — masterpieces-leaving many, lit-world.",style:'Wistful close.'},
  ]},
  {id:'conv_06700',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan events',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、店内、蛍光灯、暖色系に変えへんか。',en:"Aoi — interior, fluor-light, warm-tone change?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。ホテルのボーイさんを、研修見学に、お招きしましょう。',en:"Yes. Hotel bellboy — training visit, invite.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'夜は、ソナタ流して、上品な雰囲気、出そかな。',en:"Night — sonata-play, refined air, out?",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。ネズミ対策、店の裏側、徹底します、衛生第一。',en:"Yes. Mouse-prev, store-back, thorough — hygiene first.",style:'Practical.'},
    {speaker:'daichi_kansai',jp:'コーヒー愛好家向けの会員制度、新設、検討してるんやけど。',en:"Coffee-enthusiast member-system — new, studying.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。週末イベント、コメディアン、お呼びするのは、どうですか。',en:"Yes. Weekend event — comedian, invite, how?",style:'Probe.'},
    {speaker:'daichi_kansai',jp:'メニューの説明、明快に、書き直そか、葵さん。',en:"Menu explainer — clearly, rewrite, Aoi?",style:'Direction.'},
    {speaker:'aoi_barista',jp:'はい。シェフの大作、季節限定で、提供しましょう。',en:"Yes. Chef's masterpiece — seasonal-limited, offer.",style:'Warm close.'},
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

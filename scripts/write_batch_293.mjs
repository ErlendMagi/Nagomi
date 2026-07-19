import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_293 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['小沢','三郎','弘','宏','斉藤','安藤','藤井','次郎']
const B_T = ['長谷川','戸田','松下','原田','小島','大野','吉川','柴田']
const C_T = ['河野','反戦','飲酒','尋問','ハッカー','出世','失点','致命']
const D_T = ['ミラノ','アラビア','薔薇','カジノ','リッチ','紀行','馬券','キューバ']

const data = [
  // A
  {id:'conv_05821',cluster:'A',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:A_T,scenario:'A boss reviews his project team roster',lines:[
    {speaker:'hiroshi_boss',jp:'今期の主軸、小沢部長、三郎課長で。',en:"This term's core — Director Ozawa, Section-Chief Saburo.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。弘前出張は弘さん、宏志くんが同行します。',en:"Yes. Hirosaki trip — Hiroshi-san; Hiroshi (Kō)-kun accompanies.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'斉藤さん、安藤さんは、営業の重鎮として外回り。',en:"Saito-san, Ando-san — senior sales, outside calls.",style:'Direction.'},
    {speaker:'kenji_office',jp:'藤井さんは技術担当、次郎さんが新人教育を受け持ちます。',en:"Fujii-san — technical; Jiro-san — onboarding.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'よし、来月から本格稼働だ。',en:"Good — full launch next month.",style:'Close.'},
  ]},
  {id:'conv_05822',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple talks about old classmates',lines:[
    {speaker:'hiroshi_elder',jp:'同窓会名簿、小沢くん、三郎くん、今も元気だそうだ。',en:"Reunion list — Ozawa, Saburo — both still well.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'弘さんは弘前で農業、宏志さんは大学で講師なのよ。',en:"Hiroshi-san farms in Hirosaki; Hiroshi (Kō)-san lectures.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'斉藤くんは寺の住職を継いだ。安藤くんは渡米した。',en:"Saito took over as temple priest; Ando went to America.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'藤井さんは、地元の文化財保護員。',en:"Fujii-san — local cultural-property warden.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'次郎は、私の兄の名前と同じだったな。',en:"Jiro — same name as my elder brother.",style:'Wistful close.'},
  ]},
  {id:'conv_05823',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat about classmates',lines:[
    {speaker:'sakura_teen',jp:'委員長、小沢さんに決まった。副委員長は三郎くん。',en:"Class rep — Ozawa-san. Vice — Saburo-kun.",style:'Animated teen.'},
    {speaker:'riku_teen',jp:'文化祭、弘前ゆかりの劇を弘くんが書くって。',en:"Festival — Hirosaki-themed play by Hiroshi.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'演出は宏くん。舞台美術は斉藤さんが担当。',en:"Direction — Hiroshi (Kō). Stage design — Saito-san.",style:'Bright.'},
    {speaker:'riku_teen',jp:'安藤さんは、音響でいつも光ってるよな。',en:"Ando shines in sound design every time.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'藤井さん、次郎くんも、当日スタッフで参加してくれる。',en:"Fujii-san, Jiro-kun — day staff too.",style:'Cheerful close.'},
  ]},
  {id:'conv_05824',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat about a school reunion',lines:[
    {speaker:'mei_romantic',jp:'同窓会、来週なの。小沢さん、三郎くん、皆来るって。',en:"Reunion next week — Ozawa, Saburo — all coming.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'弘くんは弘前から、宏くんは京都から、はるばるね。',en:"Hiroshi from Hirosaki, Hiroshi (Kō) from Kyoto — far travel.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'斉藤さんが、幹事を引き受けてくれた。',en:"Saito agreed to chair.",style:'Warm.'},
    {speaker:'aoi_barista',jp:'安藤さんは、写真係。当日が楽しみ。',en:"Ando — photographer. Looking forward.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'藤井さんと次郎くんも、二次会まで参加するって。',en:"Fujii and Jiro stay till the after-party.",style:'Warm close.'},
  ]},
  {id:'conv_05825',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son look at a family album',lines:[
    {speaker:'yumiko_mom',jp:'この写真、おばあちゃんの兄、小沢おじちゃん。',en:"This photo — Grandma's brother, Uncle Ozawa.",style:'Warm.'},
    {speaker:'sho_child',jp:'隣の人は誰?',en:"Who's next to him?",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'三郎おじいちゃん。弘前で果樹園してた弘さんと、宏おじさんが、撮影してくれたの。',en:"Grandpa Saburo. Hiroshi-san who ran orchards in Hirosaki, and Uncle Hiroshi (Kō), shot it.",style:'Reflective.'},
    {speaker:'sho_child',jp:'斉藤先生も、写ってる?',en:"Sensei Saito too?",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'うん。安藤先生と並んで。藤井さんは、後ろの方ね。',en:"Yes. Beside Sensei Ando. Fujii-san — at the back.",style:'Warm.'},
    {speaker:'sho_child',jp:'次郎ひいおじいちゃん、優しい目してるね。',en:"Great-grandpa Jiro has kind eyes.",style:'Soft close.'},
  ]},

  // B
  {id:'conv_05826',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews a manufacturing-team roster',lines:[
    {speaker:'hiroshi_boss',jp:'製造部、長谷川部長と戸田課長で、引き続き。',en:"Manufacturing — Hasegawa and Toda, continuing.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。松下さん、原田さん、現場主任のままです。',en:"Yes. Matsushita, Harada — continue as line foremen.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'小島さんと大野さんは、海外生産拠点へ転勤。',en:"Kojima and Ono — transferred to overseas plants.",style:'Direction.'},
    {speaker:'kenji_office',jp:'吉川さんが品質管理、柴田さんが調達担当です。',en:"Yoshikawa — QC. Shibata — procurement.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'よし、各員に通達を。',en:"Good — notify each.",style:'Close.'},
  ]},
  {id:'conv_05827',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss a launch event',lines:[
    {speaker:'yuki_office',jp:'新商品発表、長谷川さんと戸田さんがプレゼン。',en:"Product launch — Hasegawa and Toda present.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。松下さんが司会、原田さんがQ&A補助です。',en:"Yes. Matsushita MC; Harada — Q&A support.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'小島さんはメディア対応、大野さんが場内案内。',en:"Kojima — media; Ono — hall guidance.",style:'Direction.'},
    {speaker:'kenji_office',jp:'吉川さんが資料配布、柴田さんが映像担当です。',en:"Yoshikawa — handouts; Shibata — visuals.",style:'Update.'},
    {speaker:'yuki_office',jp:'準備万端で。',en:"All set.",style:'Close.'},
  ]},
  {id:'conv_05828',cluster:'B',ambient:'office_quiet_low',cast:['ren_uni','hiroshi_boss'],targets:B_T,scenario:'A uni intern is introduced to a corporate team',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、こちらが長谷川部長、隣が戸田課長。',en:"Ren — Director Hasegawa; next, Chief Toda.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'よろしくお願いします。松下さん、原田さんも、お世話になります。',en:"Pleased to work with you. Matsushita-san, Harada-san too.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'小島さんは出張で不在、大野さんが代行する。',en:"Kojima away on travel; Ono substitutes.",style:'Direction.'},
    {speaker:'ren_uni',jp:'吉川さん、柴田さんからも、現場のお話伺いたいです。',en:"Want to hear field insights from Yoshikawa and Shibata too.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'うん、来週、現場視察に連れて行く。',en:"Yes — next week, site tour.",style:'Close.'},
  ]},
  {id:'conv_05829',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs an exec team about plant security',lines:[
    {speaker:'takeda_officer',jp:'御社の長谷川部長、戸田課長、ご紹介ありがとうございました。',en:"Director Hasegawa, Chief Toda — thanks for the intro.",style:'Calm.'},
    {speaker:'kenji_office',jp:'こちらこそ。松下さん、原田さんも現場を案内します。',en:"Likewise. Matsushita, Harada will guide on site.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'小島さん、大野さんが、夜勤管理者ですか。',en:"Kojima and Ono manage night shifts?",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。吉川さんが警備計画、柴田さんが入退場管理です。',en:"Yes. Yoshikawa — security plan; Shibata — entry control.",style:'Update.'},
    {speaker:'takeda_officer',jp:'引き続き連携を。',en:"Continued cooperation.",style:'Close.'},
  ]},
  {id:'conv_05830',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec advises on team development',lines:[
    {speaker:'hiroshi_elder',jp:'長谷川くん、戸田くん、若い頃から器を見抜いていた。',en:"Hasegawa, Toda — I saw their caliber young.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。松下さん、原田さんも、忠実に育ってくれました。',en:"Yes. Matsushita, Harada — grew loyally.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'小島と大野は、海外で経験積めば、化ける。',en:"Kojima and Ono — overseas experience will transform them.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'吉川さん、柴田さんは、地に着いた仕事ぶりで頼もしいです。',en:"Yoshikawa, Shibata — grounded work, reliable.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'人を見続ける目、忘れるな。',en:"Don't lose the eye for watching people.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_05831',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a uni reporter about a hacking case',lines:[
    {speaker:'takeda_officer',jp:'河野容疑者、ハッカー集団の中核と判明しました。',en:"Suspect Kono identified as core of a hacker group.",style:'Calm.'},
    {speaker:'ren_uni',jp:'当日、飲酒運転で別件逮捕されたんですよね。',en:"He was nabbed on a DUI offense same day, right?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。長時間の尋問で、出世欲が動機の核と判明。',en:"Yes. Long questioning — career-advance ambition as core motive.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'反戦系のメッセージで偽装した手口、致命的でしたね。',en:"Anti-war-message-disguised method was fatal.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'被害企業、失点を最小化すべく、迅速に動きました。',en:"Affected firms moved fast to minimize fallout.",style:'Informative close.'},
  ]},
  {id:'conv_05832',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher and student discuss a documentary about activism',lines:[
    {speaker:'asuka_teacher',jp:'昨夜の番組、河野氏の評伝、興味深かったですね。',en:"Last night's show — Kono biography, intriguing.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。反戦運動の青年期、飲酒で議論を重ねた当時の様子、丁寧でした。',en:"Yes. His youthful anti-war days — careful coverage of drink-fueled debates.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'警察に尋問された当時の記録、ハッカー文化との接点もありました。',en:"Police-interrogation records back then — touched on hacker culture too.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'政治家としての出世過程、失点も含めて、率直に描かれていました。',en:"Political-career rise, including missteps, candidly portrayed.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'致命的な判断ミス、振り返る章、印象的でしたね。',en:"Fatal misjudgment retrospection chapter — striking.",style:'Reflective close.'},
  ]},
  {id:'conv_05833',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor explains alcohol-related illness to a reporter',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、飲酒由来の疾患、増加傾向です。',en:"Ren, alcohol-related illness is rising.",style:'Calm.'},
    {speaker:'ren_uni',jp:'河野医師、長年研究されてきたんですよね。',en:"Dr. Kono has researched this for years, right?",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。最新研究は、致命的な肝障害の予兆を扱っています。',en:"Yes. Latest work — fatal liver-damage precursors.",style:'Patient.'},
    {speaker:'ren_uni',jp:'反戦集会で配布された冊子に、医療情報も載っていたとか。',en:"Anti-war-rally pamphlets included medical info, I heard.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'尋問対応の患者にも、医師が同席する制度があります。',en:"For interrogation, patient-attendance by doctors is a system too.",style:'Informative.'},
    {speaker:'ren_uni',jp:'ハッカー被害に遭った患者データ、保護体制は厳重ですか。',en:"Hacked patient data — strict protection?",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。失点を許さない運用です。',en:"Yes. No-misstep policy.",style:'Firm close.'},
  ]},
  {id:'conv_05834',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews a security breach',lines:[
    {speaker:'hiroshi_boss',jp:'ハッカー被害、河野顧問にも相談済みか。',en:"Hacker breach — Advisor Kono consulted?",style:'Concerned.'},
    {speaker:'kenji_office',jp:'はい。社内では、飲酒を伴う接待の機会、自粛しています。',en:"Yes. Internally, drink-involved entertainment is on hold.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'警察の尋問対応、法務と連携しろ。',en:"Police-questioning response — sync with legal.",style:'Direction.'},
    {speaker:'kenji_office',jp:'反戦広告で偽装したフィッシング、出世コースの社員にも届きました。',en:"Anti-war-ad-disguised phishing reached even fast-track staff.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'致命的な失点にならぬよう、急ぐ。',en:"Move fast to avoid fatal setback.",style:'Decisive close.'},
  ]},
  {id:'conv_05835',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher and a teen discuss a debate-club topic',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、討論会の論題、河野議員の反戦演説、難しいですね。',en:"Sakura, debate topic — MP Kono's anti-war speech is hard.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。当時、飲酒運転事故、政界の失点として報じられました。',en:"Yes. Back then, a DUI was reported as a political misstep.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'警察に尋問された経緯、後に著書で振り返っています。',en:"Police-interrogation context — later revisited in his book.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'ハッカー攻撃を受けた経歴も、出世の途上で深刻でした。',en:"A hacker-attack history, serious in his rise.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'致命的な判断、避けるための学びになりますね。',en:"A learning to avoid fatal calls.",style:'Reflective close.'},
  ]},

  // D
  {id:'conv_05836',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends plan a luxury European trip',lines:[
    {speaker:'mei_romantic',jp:'今度の連休、ミラノへ旅行する予定なの。',en:"This holiday — planning a Milan trip.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'いいね!アラビア料理の店も、新規開拓するんでしょ?',en:"Lovely! Trying new Arabian restaurants too?",style:'Soft.'},
    {speaker:'mei_romantic',jp:'うん。庭園の薔薇、見頃みたい。',en:"Yes. Garden roses are in bloom.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'カジノもあるの?ちょっと興味あるな。',en:"Casinos too? Slightly curious.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'リッチな雰囲気のホテル、予約済み。',en:"Luxe-vibe hotel — booked.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'紀行文、読ませてね。',en:"Let me read the travelogue.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'帰国前に、馬券買って競馬も体験する予定なの。',en:"Before flying back — bet a ticket, try horse racing.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'帰路にキューバ経由もアリだね、いつかね。',en:"Routing via Cuba someday could work too.",style:'Wistful close.'},
  ]},
  {id:'conv_05837',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher and student discuss a travel-writing project',lines:[
    {speaker:'asuka_teacher',jp:'紀行文の課題、ミラノとアラビア半島の対比、面白い切り口ですね。',en:"Travelogue task — Milan vs. Arabian Peninsula, fresh angle.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。庭園の薔薇文化、両地域で違いがあります。',en:"Yes. Garden-rose cultures differ between regions.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'夜の街、カジノやリッチなレストランの描写、節度をもって。',en:"Night cities, casinos, luxe restaurants — depict with moderation.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'馬券や賭博文化、社会的影響まで触れる予定です。',en:"Betting tickets and gambling culture — including societal impact.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'比較対象に、キューバの街並みも、章として入りますか。',en:"As a comparison, will Cuba's streets get a chapter too?",style:'Reflective close.'},
  ]},
  {id:'conv_05838',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens plan a movie night',lines:[
    {speaker:'sakura_teen',jp:'今夜の映画、ミラノが舞台のラブストーリー、観たい。',en:"Tonight's film — a Milan-set love story; wanna watch.",style:'Excited.'},
    {speaker:'riku_teen',jp:'いいね。アラビア風の装飾、雰囲気あるって聞いた。',en:"Nice. Arabian-style decor's atmospheric, I heard.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'劇中の薔薇園、ロケが本格的。',en:"In-film rose garden — serious location.",style:'Animated.'},
    {speaker:'riku_teen',jp:'カジノのシーン、緊張感あるよな。',en:"Casino scenes are tense.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'主人公、最初はリッチな暮らしから始まる紀行映画なの。',en:"The lead starts wealthy; a travel-film progression.",style:'Probe.'},
    {speaker:'riku_teen',jp:'馬券で大勝ちする場面、ちょっと痛快。',en:"Big-win betting scene — slightly cathartic.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'終盤、キューバへ移動する展開、ドラマチック。',en:"Late-act move to Cuba — dramatic.",style:'Bright close.'},
  ]},
  {id:'conv_05839',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan an international menu',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、国際メニュー、ミラノのリゾット入れよか。',en:"Aoi-san, intl menu — add Milan risotto?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'いいですね。アラビア珈琲も、メニューに加えたいです。',en:"Lovely. Add Arabian coffee too.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'薔薇シロップの紅茶、季節限定でええな。',en:"Rose-syrup tea, seasonal.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'夜営業で、カジノ風のテーブルも、雰囲気だけ。',en:"Night ops — casino-vibe tables, aesthetic only.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'リッチなお客さん向けに、コース料理も提案しよか。',en:"For luxe clients, propose course meals.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'紀行スタイルの店内装飾、お客様に喜ばれそう。',en:"Travelogue-style decor — guests should love.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'競馬の日、馬券特典付きランチ、企画しよか。',en:"Race days — betting-ticket-perk lunches?",style:'Wry.'},
    {speaker:'aoi_barista',jp:'キューバの音楽もBGMで流して、夜長を楽しんでもらいましょう。',en:"BGM Cuban music — let guests enjoy long nights.",style:'Warm close.'},
  ]},
  {id:'conv_05840',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces about past travels',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、ミラノに出張で行ったな。',en:"In youth, business trip to Milan.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。帰りにアラビアにも寄って、香辛料の市場、覚えてる。',en:"Yes. Stopped in Arabia too — spice markets, I remember.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'お前にプレゼントした薔薇の香水、まだ覚えてる?',en:"The rose perfume I gifted you — still remember?",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'カジノには行かなかったけど、リッチなホテルのお茶、優雅だったわ。',en:"No casino, but the luxe-hotel tea was elegant.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お土産の紀行雑誌、書斎に今もあるよ。',en:"Travelogue magazine — still in the study.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'競馬場、二人で馬券買って、はずれて笑ったわね。',en:"At the track — bought a ticket, lost, laughed together.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'いつかキューバの海も、見てみたいな。',en:"Someday, Cuba's sea too — want to see.",style:'Soft close.'},
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

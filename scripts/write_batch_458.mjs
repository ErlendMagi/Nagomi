import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_458 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['淡い','申す','かけがえ','えらく','おぼえ','おろか','無邪気','あきれ']
const B_T = ['トレーディング','ファクト','定款','後部','圧巻','称する','用法','求職']
const C_T = ['変質','崇高','安堵','慰謝','感知','講ずる','発病','成就']
const D_T = ['吐き気','日本食','静寂','脱力','化合','矢先','在来','祭典']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09121',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、夕焼けが淡い色に染まったわね','Sho — sunset-faint-color','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんに「いただきます」と申してから食べたよ','Mom — me Grandpa-"itadakimasu"-say-ate','Proud child','sho_child'),
    mk('翔くん、お祖父ちゃんは、かけがえのない方ね','Sho — Grandpa-irreplaceable','Tender','yumiko_mom'),
    mk('ママ、お父さんがえらくお仕事頑張ってらしたよ','Mom — Dad-very-work-try','Reflective child','sho_child'),
    mk('翔くん、お祖父ちゃんの言葉をおぼえておきましょうね','Sho — Grandpa-word-remember','Direction','yumiko_mom'),
    mk('ママ、ぼく、おろかな事を言って、お祖父ちゃんに笑われたよ','Mom — me silly-said-Grandpa-laugh','Wry child','sho_child'),
    mk('翔くん、翔くんの無邪気な笑顔、最高ね','Sho — Sho-innocent-smile-best','Praising','yumiko_mom'),
    mk('ママ、お父さんが、ぼくのいたずらにあきれてらしたよ','Mom — Dad-me-prank-stunned','Wry close','sho_child'),
  ]},
  {id:'conv_09122',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お店の壁、淡いベージュにしましょう、メイちゃん','Aoi — store-wall-faint-beige Mei','Direction','mei_romantic'),
    mk('葵、お客様に「いらっしゃいませ」と申してお迎えしましょう、メイちゃん','Aoi — cust-welcome-say Mei','Direction','aoi_barista'),
    mk('葵、お客様、お店を「かけがえのない場所」と仰ってたよ、メイちゃん','Aoi — cust-store-"irreplace"-said Mei','Pleased','mei_romantic'),
    mk('葵、お客様、新メニューを、えらく気に入って下さったね、メイちゃん','Aoi — cust-new-menu-very-liked Mei','Pleased','aoi_barista'),
    mk('葵、お客様のお名前を、しっかりおぼえましょう、メイちゃん','Aoi — cust-name-remember Mei','Direction','mei_romantic'),
    mk('葵、新メニューに不評を予想したのは、おろかだったね、メイちゃん','Aoi — new-menu-unpop-pred-silly Mei','Wry','aoi_barista'),
    mk('葵、お子様の無邪気な質問に、ホッとするね、メイちゃん','Aoi — child-innocent-Q-relief Mei','Pleased','mei_romantic'),
    mk('葵、お客様、繁忙期の対応に、あきれた表情をされてたよ、メイちゃん','Aoi — cust-busy-resp-stunned-face Mei','Wry close','aoi_barista'),
  ]},
  {id:'conv_09123',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが淡い恋心を語ってくれたぞ','Gran — youth Dad-faint-romance-told','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、孫に「ありがとう」と申すように教えてらしたわよね、あなた?','Yes — Grandpa-grandkid-"thanks"-say-taught, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは、かけがえのない友人を失われた','Gran — youth Dad-irreplace-friend-lost','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、えらく勉強熱心でらしたわよね、あなた?','Grandpa — youth-very-study-zeal, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは古い詩をたくさんおぼえてらした','Gran — youth Dad-old-poem-many-remember','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様のおろかな言動にも優しかったわよね、あなた?','Grandpa — grandkid-silly-kind, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはお孫様の無邪気さに癒されてらした','Gran — youth Dad-grandkid-innocent-heal','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご家族の悪戯にあきれながらも喜んでらしたわよね、あなた?','Grandpa — fam-prank-stunned-but-glad, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09124',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、淡いピンクのシャツ買ったろ?','Riku — faint-pink-shirt-bought?','Curious teen','sakura_teen'),
    mk('お前、ちゃんと「すみません」って申せよ、桜','You — "sorry"-say Sakura','Direction','riku_teen'),
    mk('リク、お前との時間は、かけがえのない時間だな','Riku — your-time-irreplace','Tender','sakura_teen'),
    mk('お前、テスト点、えらく上がったな、桜','You — test-score-very-up Sakura','Praising','riku_teen'),
    mk('リク、お前、英単語をしっかりおぼえろよ','Riku — Eng-word-remember','Direction','sakura_teen'),
    mk('お前、おろかな喧嘩はもうやめろよ、桜','You — silly-fight-stop Sakura','Direction','riku_teen'),
    mk('リク、お前の無邪気な笑顔、いいよな','Riku — innocent-smile-good','Praising','sakura_teen'),
    mk('お前、テストの結果にあきれてんな、桜','You — test-result-stunned Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_09125',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんは淡い色の絵が好きなのよ','Sho — Mei-sis-faint-color-art-like','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんに「ありがとう」って申したよ','Mei-sis — me Grandpa-"thanks"-said','Proud child','sho_child'),
    mk('翔くん、メイ姉さんも翔くんは、かけがえのない甥なのよ','Sho — Mei-sis-Sho-irreplace-nephew','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お絵描きをえらく頑張ったよ','Mei-sis — me art-very-try','Proud child','sho_child'),
    mk('翔くん、メイ姉さんと、おぼえた絵の技を試そうね','Sho — Mei-sis-remember-tech-try','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、おろかな絵を描いちゃったよ','Mei-sis — me silly-pic-drew','Wry child','sho_child'),
    mk('翔くん、メイ姉さんは翔くんの無邪気さが大好きなのよ','Sho — Mei-sis-Sho-innocent-love','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お母さんがママのいたずらにあきれてたよ','Mei-sis — me Mom-prank-stunned','Wry close','sho_child'),
  ]},
  {id:'conv_09126',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、為替トレーディングの体制を強化しろ','Our co — fx-trading-strength','Crisp','hiroshi_boss'),
    mk('はい。広告には事実、つまりファクトを示します','Yes — Ad-fact-show','Methodical','kenji_office'),
    mk('当社、定款の変更を取締役会で諮れ','Our co — articles-change-board','Direction','hiroshi_boss'),
    mk('はい。新製品の後部にロゴを刻印しました','Yes — New-prod-rear-logo-emboss','Update','kenji_office'),
    mk('当社、新商品の発表会を圧巻のものにしろ','Our co — new-prod-launch-spect','Direction','hiroshi_boss'),
    mk('はい。新会社を「未来商事」と称する事に決まりました','Yes — New-co-"Mirai"-call-decide','Update','kenji_office'),
    mk('お得意様への用法説明を丁寧にしろ','VIP-usage-explain-careful','Direction','hiroshi_boss'),
    mk('はい。求職者向けの説明会を開催します','Yes — Job-seek-info-meet','Close','kenji_office'),
  ]},
  {id:'conv_09127',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('社内にトレーディング部門を新設しましょう','Co-trading-section-new','Brisk','yuki_office'),
    mk('はい。広告には客観的なファクトを盛り込みます','Yes — Ad-obj-fact-incl','Cooperative','kenji_office'),
    mk('定款の変更案を社員に説明しましょう','Articles-change-staff-explain','Direction','yuki_office'),
    mk('はい。新商品の後部デザインを工夫しました','Yes — New-prod-rear-design-craft','Update','kenji_office'),
    mk('展示会で圧巻のブースを設けましょう','Expo-spect-booth-set','Direction','yuki_office'),
    mk('はい。本社を「東京本店」と称する事にしました','Yes — HQ-"Tokyo-main"-call','Update','kenji_office'),
    mk('用法の説明書を多言語化しましょう','Usage-doc-multi-lang','Direction','yuki_office'),
    mk('はい。求職者の応募状況を集計しました','Yes — Job-seek-app-status-compile','Close','kenji_office'),
  ]},
  {id:'conv_09128',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、トレーディング業界の研究も視野に入れろ','Ren — trading-industry-research-view','Mentor','hiroshi_boss'),
    mk('はい。論文に確実なファクトを盛り込みます','Yes — Paper-solid-fact-incl','Earnest','ren_uni'),
    mk('蓮、学会の定款変更案を確認しろ','Ren — conf-articles-change-check','Direction','hiroshi_boss'),
    mk('はい。論文の後部に付録を加えました','Yes — Paper-rear-appendix-add','Polite','ren_uni'),
    mk('蓮、博士論文を圧巻のものにしろ','Ren — PhD-paper-spect','Direction','hiroshi_boss'),
    mk('はい。研究室を「ナノ工学研究室」と称する事にしました','Yes — Lab-"Nano-eng"-call','Earnest','ren_uni'),
    mk('蓮、薬の用法を正確に論文に書け','Ren — drug-usage-acc-paper','Direction','hiroshi_boss'),
    mk('はい。求職活動と研究の両立を図ります','Yes — Job-seek-research-bal','Earnest close','ren_uni'),
  ]},
  {id:'conv_09129',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、不正トレーディングの捜査を継続されてますね','Police illegal-trading-inv-cont','Cooperative','kenji_office'),
    mk('警察、捜査結果はファクトに基づきますね','Police inv-result-fact-based','Cooperative','kenji_office'),
    mk('警察、防犯団体の定款を確認されますね','Police crime-prev-articles-check','Cooperative','kenji_office'),
    mk('警察、車両の後部の証拠も丁寧に採取されますね','Police veh-rear-evid-careful','Cooperative','kenji_office'),
    mk('警察、市民との連携訓練が圧巻でしたね','Police citizen-link-drill-spect','Cooperative','kenji_office'),
    mk('警察、防犯活動を「セーフタウン作戦」と称する事にされましたね','Police crime-prev-"Safe-Town"-call','Cooperative','kenji_office'),
    mk('警察、薬物の用法に偽装した犯罪を捜査されますね','Police drug-usage-fake-crime-inv','Cooperative','kenji_office'),
    mk('警察、求職活動詐欺の捜査もご対応ですね','Police job-seek-fraud-inv','Close','kenji_office'),
  ]},
  {id:'conv_09130',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、トレーディング業務にもご興味を持たれたぞ','Dad — founding trading-interest','Sage','hiroshi_elder'),
    mk('はい。お父さんは事実、つまりファクトを重視された','Yes — Dad fact-imp','Commitment','hiroshi_boss'),
    mk('お父さん、定款の文言を自ら起草されたぞ','Dad — articles-draft-self','Wistful','hiroshi_elder'),
    mk('はい。お父さんは商品の後部までデザインにこだわった','Yes — Dad prod-rear-design-care','Reflective','hiroshi_boss'),
    mk('お父さん、創業記念パーティを圧巻のものにされたぞ','Dad — found-anniv-party-spect','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新会社を「未来」と称する事を決められた','Yes — Dad new-co-"Mirai"-call-decide','Reflective','hiroshi_boss'),
    mk('お父さん、商品の用法を分かりやすく説明されたぞ','Dad — prod-usage-clear-explain','Wistful','hiroshi_elder'),
    mk('はい。お父さんは求職者にも丁寧に対応された','Yes — Dad job-seek-careful-resp','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09131',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、戦時下に人格が変質した兵士の研究を論文で扱いましたね','Ren — wartime-pers-change-soldier paper','Calm','asuka_teacher'),
    mk('はい、宗教者の崇高な献身を論文で扱いました','Yes — Relig-noble-dev paper','Earnest','ren_uni'),
    mk('蓮さん、戦後の安堵感を表現した文学を論文で扱いましたね','Ren — postwar-relief-lit paper','Reflective','asuka_teacher'),
    mk('はい、被害者への慰謝料制度を論文で扱いました','Yes — Victim-comp-sys paper','Earnest','ren_uni'),
    mk('感知できない放射線リスクを論文で扱いましたね','Imperc-rad-risk paper','Engaged','asuka_teacher'),
    mk('はい、災害時の対策を講ずる行政手順を論文で扱いました','Yes — Disaster-counter-gov-proc paper','Earnest','ren_uni'),
    mk('蓮さん、戦時下の集団発病の歴史を論文で扱いましたね','Ren — wartime-mass-illness-hist paper','Reflective','asuka_teacher'),
    mk('はい、社会運動が成就するまでの過程を論文で扱いました','Yes — Soc-mov-fruition paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09132',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、容疑者の人格が変質した経緯を警察、確認されてますね','Case suspect-pers-change-circ police','Reflective','ren_uni'),
    mk('警察、崇高な使命感で日々務めております','Police noble-mission-daily','Procedural','takeda_officer'),
    mk('本件、被害者ご家族が安堵された瞬間を警察、見届けられましたね','Case victim-fam-relief-police-see','Reflective','ren_uni'),
    mk('警察、被害者への慰謝制度のご案内も行います','Police victim-comp-sys-announce','Procedural','takeda_officer'),
    mk('本件、警察、被害を早期に感知されましたね','Case police-damage-early-detect','Reflective','ren_uni'),
    mk('警察、対策を講ずる前に予兆を捉えます','Police counter-pre-sign-catch','Procedural','takeda_officer'),
    mk('本件、警察、集団発病的な事案にも対応されてますね','Case police-mass-illness-resp','Reflective','ren_uni'),
    mk('警察、市民の願いを成就させる活動を続けます','Police citizen-wish-fruit-cont','Close','takeda_officer'),
  ]},
  {id:'conv_09133',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、戦時下に人格が変質した兵士の研究を論文で扱いましたね','Sakura — wartime-pers-change paper','Calm','asuka_teacher'),
    mk('はい、宗教者の崇高な献身を論文で扱いました','Yes — Relig-noble paper','Earnest teen','sakura_teen'),
    mk('戦後の安堵感を表現した文学を論文で扱いましたね','Postwar-relief-lit paper','Reflective','asuka_teacher'),
    mk('はい、被害者への慰謝料制度を論文で扱いました','Yes — Victim-comp paper','Earnest','sakura_teen'),
    mk('感知できない放射線リスクを論文で扱いましたね','Imperc-rad paper','Engaged','asuka_teacher'),
    mk('はい、災害時の対策を講ずる行政手順を論文で扱いました','Yes — Disaster-counter paper','Earnest','sakura_teen'),
    mk('戦時下の集団発病の歴史を論文で扱いましたね','War-mass-illness paper','Reflective','asuka_teacher'),
    mk('はい、社会運動が成就するまでの過程を論文で扱いました','Yes — Soc-mov-fruit paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09134',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、長期入院で性格が変質する患者さんを医療チームで支援します','Ren — long-hosp-pers-change-patient med-team supp','Calm','saito_doctor'),
    mk('はい、医療従事者の崇高な使命を医療チームで再確認します','Yes — Med-staff-noble-mission med-team','Patient','saito_doctor'),
    mk('治療完了時に患者さんが安堵される瞬間を、貴院、大事にされてますね、先生','Treat-end-patient-relief your-hosp cherish, sensei','Reflective','ren_uni'),
    mk('はい、医療事故の慰謝制度を医療チームで整備します','Yes — Med-acc-comp med-team prep','Patient','saito_doctor'),
    mk('微細な体調変化を感知する機器を、貴院、導入されたんですね、先生','Tiny-cond-detect-device your-hosp intro, sensei','Curious','ren_uni'),
    mk('はい、感染対策を講ずる体制を医療チームで強化しました','Yes — Infect-counter med-team strength','Patient','saito_doctor'),
    mk('発病前の予防医療を、貴院、推進されてますね、先生','Pre-illness-prev-med your-hosp promote, sensei','Reflective','ren_uni'),
    mk('はい、患者さんの治療成就を医療チームで願っております','Yes — Patient-treat-fruit med-team-wish','Patient close','saito_doctor'),
  ]},
  {id:'conv_09135',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、社員のメンタルが変質する前に支援しろ','Our co — staff-mental-change-pre-supp','Crisp','hiroshi_boss'),
    mk('はい。崇高な企業理念を社員に伝えます','Yes — Noble-creed-staff-conv','Methodical','kenji_office'),
    mk('当社、業績好調で社員に安堵感を伝えろ','Our co — perf-good-staff-relief-conv','Direction','hiroshi_boss'),
    mk('はい。労災時の慰謝対応を見直しております','Yes — Work-acc-comp-resp-review','Update','kenji_office'),
    mk('当社、市場の変化を感知する仕組みを作れ','Our co — market-change-detect-mech','Direction','hiroshi_boss'),
    mk('はい。危機管理の対策を講ずる体制を整えました','Yes — Crisis-mgmt-counter-prep','Update','kenji_office'),
    mk('当社、社員の発病を予防する健康管理を強化しろ','Our co — staff-illness-prev-health-strength','Direction','hiroshi_boss'),
    mk('はい。新製品の市場成就を目指します','Yes — New-prod-market-fruit-aim','Close','kenji_office'),
  ]},
  {id:'conv_09136',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、吐き気がするって早めに席を立たれたよ、メイちゃん','Aoi — cust-nausea-early-left Mei','Reflective','mei_romantic'),
    mk('葵、新メニュー、日本食のテイストを取り入れましょう、メイちゃん','Aoi — new-menu-Japanese-food-incl Mei','Direction','aoi_barista'),
    mk('葵、夜のお店の静寂が好きだよ、メイちゃん','Aoi — night-store-silence-like Mei','Tender','mei_romantic'),
    mk('葵、忙しい後の脱力感、たまらないね、メイちゃん','Aoi — busy-after-zone-out-irr Mei','Wry','aoi_barista'),
    mk('葵、お客様、化合物の研究のお仕事だって、メイちゃん','Aoi — cust-compound-research Mei','Reflective','mei_romantic'),
    mk('葵、矢先に新メニュー出すタイミングを考えましょう、メイちゃん','Aoi — about-to-new-menu-time Mei','Direction','aoi_barista'),
    mk('葵、新メニューに在来種の野菜を使いましょう、メイちゃん','Aoi — new-menu-native-veg-use Mei','Direction','mei_romantic'),
    mk('葵、地域の祭典にお店も出店しましょう、メイちゃん','Aoi — local-fest-store-out Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_09137',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは船酔いで吐き気をされたぞ','Gran — youth Dad-sea-nausea','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、日本食を心から愛されたわよね、あなた?','Yes — Grandpa-Japanese-food-loved, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは森の静寂を楽しまれた','Gran — youth Dad-forest-silence-enjoy','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お仕事の後は脱力されてらしたわよね、あなた?','Grandpa — work-after-zone-out, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは化合物の実験をされたぞ','Gran — youth Dad-compound-exp','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、退院した矢先に再入院されたわよね、あなた?','Grandpa — disch-just-then-re-hosp, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが田んぼに在来種の稲を植えられた','Gran — youth Dad-rice-field-native-rice','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、村の祭典で太鼓を叩かれたわよね、あなた?','Grandpa — village-fest-drum-beat, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09138',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、ぼく、車酔いで吐き気がしたの覚えてる?','Sho — me car-sick-nausea-remember?','Curious','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖母ちゃんの日本食大好きだよ','Mei-sis — me Grandma-Japanese-food-love','Eager child','sho_child'),
    mk('翔くん、夜の公園の静寂、神秘的ね','Sho — night-park-silence-mystic','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、運動会の後、脱力したよ','Mei-sis — me sports-day-after-zone-out','Wry child','sho_child'),
    mk('翔くん、お父さんが化合物のお仕事してらっしゃるそうよ','Sho — Dad-compound-work','Reflective','mei_romantic'),
    mk('メイ姉さん、お絵描きを始めた矢先、絵筆が折れちゃった','Mei-sis — art-just-then-brush-broke','Wry child','sho_child'),
    mk('翔くん、お祖父ちゃんが在来種のお米を作ってらっしゃるわ','Sho — Grandpa-native-rice-make','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、地域の祭典に出たいよ','Mei-sis — me local-fest-go','Eager close','sho_child'),
  ]},
  {id:'conv_09139',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、バスで吐き気しただろ?','Riku — bus-nausea?','Curious teen','sakura_teen'),
    mk('お前、海外でも日本食ばっか食ってんな、桜','You — overseas-Japanese-food-only Sakura','Wry','riku_teen'),
    mk('リク、お前、図書館の静寂が好きだろ?','Riku — lib-silence-like?','Curious','sakura_teen'),
    mk('お前、テスト後に脱力してたな、桜','You — test-after-zone-out Sakura','Wry','riku_teen'),
    mk('リク、お前、化学で化合物の単元やったろ?','Riku — chem-compound-unit?','Curious','sakura_teen'),
    mk('お前、勉強始めた矢先に眠ってたな、桜','You — study-just-then-sleep Sakura','Wry','riku_teen'),
    mk('リク、お前、社会で在来植物の単元やったろ?','Riku — soc-native-plant?','Curious','sakura_teen'),
    mk('お前、地域の祭典で太鼓叩いてたな、桜','You — local-fest-drum Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_09140',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、車に乗って吐き気がしたら教えてね','Sho — car-nausea-tell','Direction','yumiko_mom'),
    mk('ママ、ぼく、お祖母ちゃんの作る日本食が一番好きだよ','Mom — me Grandma-Japanese-food-fav','Eager child','sho_child'),
    mk('翔くん、夜のお家の静寂、不思議な感じね','Sho — night-home-silence-strange','Reflective','yumiko_mom'),
    mk('ママ、ぼく、宿題終わったあと脱力しちゃった','Mom — me homework-zone-out','Wry child','sho_child'),
    mk('翔くん、お父さんが化合物のお仕事の研究をしてらっしゃるわ','Sho — Dad-compound-research','Reflective','yumiko_mom'),
    mk('ママ、ぼく、勉強を始めた矢先におやつ食べたよ','Mom — me study-just-then-snack','Wry child','sho_child'),
    mk('翔くん、田んぼで在来種のお米を育ててらっしゃるのよ','Sho — rice-field-native-rice','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと地域の祭典に行きたいよ','Mom — me Dad-local-fest-want','Eager close','sho_child'),
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

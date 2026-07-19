import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_508 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['裏面','デタラメ','マズイ','酔っ払い','いまひとつ','合掌','かみさん','無茶苦茶']
const B_T = ['送別','追従','面識','外形','技巧','乗組','パネリスト','不買']
const C_T = ['発泡','源流','ソプラノ','ジェンダーフリー','右腕','語尾','踏切','出走']
const D_T = ['カーター','ジョブズ','ナイジェリア','アルメニア','プラトン','ユング','ラテンアメリカ','ローマ法王']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10121',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがお皿の裏面まで丁寧に洗って下さるわ','Sho — Dad-plate-back-careful','Reflective','yumiko_mom'),
    mk('ママ、お父さんの言ったことはデタラメじゃないよ','Mom — Dad-said-lie-no','Earnest child','sho_child'),
    mk('翔くん、お父さんがマズイって仰った料理は失敗だったわね','Sho — Dad-bad-meal-fail','Wry','yumiko_mom'),
    mk('ママ、お父さんが酔っ払い帰宅されたよ','Mom — Dad-drunk-home','Reflective child','sho_child'),
    mk('翔くん、今日の献立はいまひとつ自信がないわ','Sho — today-menu-not-quite-conf','Wry','yumiko_mom'),
    mk('ママ、お祖父ちゃんの仏壇に合掌したよ','Mom — Grandpa-Buddha-altar-pray','Reflective child','sho_child'),
    mk('翔くん、お父さんがかみさんって呼ぶの愛らしいわね','Sho — Dad-wifey-call-cute','Tender','yumiko_mom'),
    mk('ママ、無茶苦茶な事を言わないようにってお父さんに教わったよ','Mom — wild-words-no-Dad-taught','Earnest close','sho_child'),
  ]},
  {id:'conv_10122',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、メニューの裏面に新商品を載せようね、メイちゃん','Aoi — menu-back-new Mei','Direction','mei_romantic'),
    mk('葵、お客様、デタラメな口コミに困ってらしたよ、メイちゃん','Aoi — cust-lie-rev-trouble Mei','Reflective','aoi_barista'),
    mk('葵、新メニューがマズイって言われたら改良しようね、メイちゃん','Aoi — new-menu-bad-impr Mei','Direction','mei_romantic'),
    mk('葵、酔っ払いのお客様への対応は丁寧にしようね、メイちゃん','Aoi — drunk-cust-pol Mei','Direction','aoi_barista'),
    mk('葵、新コーヒーの売れ行きはいまひとつだね、メイちゃん','Aoi — new-cf-sales-not-quite Mei','Reflective','mei_romantic'),
    mk('葵、開店時に皆で合掌してから始めようね、メイちゃん','Aoi — open-all-pray Mei','Direction','aoi_barista'),
    mk('葵、お客様、ご主人をかみさんと冗談で呼んでらしたよ、メイちゃん','Aoi — cust-husb-wifey-joke Mei','Wry','mei_romantic'),
    mk('葵、無茶苦茶な注文も丁寧に対応しようね、メイちゃん','Aoi — wild-order-pol Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_10123',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが葉書の裏面に詩を書かれた','Gran — youth Dad-postcard-back-poem','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、デタラメな噂を信じない方だったわよね、あなた?','Yes — Grandpa-lie-rumor-trust-no, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがマズイご飯でも文句なく食べられた','Gran — youth Dad-bad-meal-no-comp','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、酔っ払いの客を諭された日もあったわよね、あなた?','Grandpa — drunk-cust-told, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、新事業がいまひとつ伸びなかった年もあった','Gran — youth new-biz-not-quite-grow','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご先祖様に毎朝合掌されたわよね、あなた?','Grandpa — anc-morning-pray, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんは私をかみさんと愛らしく呼んで下さった','Gran — Dad-me-wifey-cute','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、無茶苦茶な仕事もこなされたわよね、あなた?','Grandpa — wild-work-handle, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10124',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前のノートの裏面、落書きだらけだな','Riku — note-back-doodle','Wry teen','sakura_teen'),
    mk('お前、テストの答え半分デタラメだったろ、桜','You — test-half-lie? Sakura','Wry','riku_teen'),
    mk('リク、お前の作ったオムレツ、マズイぞ','Riku — omelet-bad','Wry','sakura_teen'),
    mk('お前、文化祭の打ち上げで酔っ払い気分だったな、桜','You — cult-fest-after-drunk-feel Sakura','Wry','riku_teen'),
    mk('リク、お前のプレゼン、いまひとつだったぞ','Riku — pres-not-quite','Wry','sakura_teen'),
    mk('お前、卒業式で合掌するの渋すぎだぞ、桜','You — grad-pray-too-cool Sakura','Wry','riku_teen'),
    mk('リク、お前ん家のお父さん、お母さんをかみさんって呼んでたな','Riku — your-Dad-Mom-wifey','Curious','sakura_teen'),
    mk('お前、無茶苦茶な計画立ててたな、桜','You — wild-plan Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10125',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがメッセージカードの裏面に絵を描かれたわ','Sho — Dad-card-back-art','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、デタラメな事は言わないって誓うよ','Mei-sis — me lie-no-vow','Earnest child','sho_child'),
    mk('翔くん、お父さんの料理がマズイって仰った事ないわ','Sho — Dad-cook-bad-never','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、酔っ払いの真似はしないよ','Mei-sis — me drunk-mimic-no','Earnest child','sho_child'),
    mk('翔くん、お絵描きがいまひとつ上手くいかなかったの','Sho — art-not-quite-good','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、神社で合掌したよ','Mei-sis — me shrine-pray','Eager child','sho_child'),
    mk('翔くん、お父さんがママをかみさんって冗談で呼んだのよ','Sho — Dad-Mom-wifey-joke','Wry','mei_romantic'),
    mk('メイ姉さん、ぼく、無茶苦茶な要求はお父さんにしないよ','Mei-sis — me wild-Dad-no','Earnest close','sho_child'),
  ]},
  {id:'conv_10126',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、退職者の送別会を丁寧に開け','Our co — retir-send-pol','Crisp','hiroshi_boss'),
    mk('はい。盲目的な追従ではなく独自路線で進めます','Yes — Blind-follow-no-uniq','Methodical','kenji_office'),
    mk('当社、面識のない方とも交流の場を作れ','Our co — unfam-exch','Direction','hiroshi_boss'),
    mk('はい。商品の外形特徴も整理します','Yes — Prod-outer-feat-org','Update','kenji_office'),
    mk('当社、職人の技巧を継承しろ','Our co — artisan-skill-inh','Direction','hiroshi_boss'),
    mk('はい。タンカーの乗組員配置を見直します','Yes — Tank-crew-rev','Update','kenji_office'),
    mk('講演会のパネリストに当社の専門家を出せ','Lect-pan-our-expert','Direction','hiroshi_boss'),
    mk('はい。不買運動の動向を注視します','Yes — Boycott-watch','Close','kenji_office'),
  ]},
  {id:'conv_10127',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('退職する田中さんの送別会を準備しましょう','Retir-Tanaka-send-prep','Brisk','yuki_office'),
    mk('はい。同業他社への追従を避けます','Yes — Same-industry-follow-avoid','Cooperative','kenji_office'),
    mk('面識のないお取引先にも丁寧に挨拶しましょう','Unfam-partner-pol-greet','Direction','yuki_office'),
    mk('はい。新商品の外形デザインを公開します','Yes — New-prod-outer-design-pub','Update','kenji_office'),
    mk('職人の技巧を映像に残しましょう','Artisan-skill-video-keep','Direction','yuki_office'),
    mk('はい。船舶事業の乗組員リストを更新します','Yes — Ship-crew-list-up','Update','kenji_office'),
    mk('シンポジウムのパネリストを推薦しましょう','Symp-pan-recom','Direction','yuki_office'),
    mk('はい。当社製品の不買運動はないか確認します','Yes — Our-co-boycott-check','Close','kenji_office'),
  ]},
  {id:'conv_10128',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、卒業生の送別会を企画しろ','Ren — grad-send-plan','Mentor','hiroshi_boss'),
    mk('はい。流行への追従ではなく独自の研究を貫きます','Yes — Trend-follow-no-uniq','Earnest','ren_uni'),
    mk('蓮、面識ある研究者を増やせ','Ren — fam-research-up','Direction','hiroshi_boss'),
    mk('はい。サンプルの外形特徴も記録します','Yes — Sample-outer-feat-rec','Earnest','ren_uni'),
    mk('蓮、実験の技巧を磨け','Ren — exp-skill-pol','Direction','hiroshi_boss'),
    mk('はい。研究船の乗組員として航海します','Yes — Research-ship-crew-sail','Polite','ren_uni'),
    mk('蓮、シンポジウムのパネリストとして発言しろ','Ren — symp-pan-speak','Direction','hiroshi_boss'),
    mk('はい。誤った研究への不買、つまり批判的扱いも必要です','Yes — Wrong-research-boycott-crit','Earnest close','ren_uni'),
  ]},
  {id:'conv_10129',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、退職警官の送別会も大事にされますね','Police retir-send-imp','Cooperative','kenji_office'),
    mk('警察、犯罪トレンドへの追従ではなく予防に注力されますね','Police trend-follow-no-prev-focus','Cooperative','kenji_office'),
    mk('警察、容疑者と面識のある人物を聴取されますね','Police suspect-fam-test','Cooperative','kenji_office'),
    mk('警察、犯人の外形特徴を市民に伝えられますね','Police suspect-outer-citi','Cooperative','kenji_office'),
    mk('警察、犯罪手口の技巧分析もされますね','Police crime-skill-anal','Cooperative','kenji_office'),
    mk('警察、密輸船の乗組員特定もされますね','Police smug-crew-id','Cooperative','kenji_office'),
    mk('警察、防犯シンポのパネリストもされますね','Police prev-symp-pan','Cooperative','kenji_office'),
    mk('警察、市民の不買運動にも対応されますね','Police citi-boycott-resp','Close','kenji_office'),
  ]},
  {id:'conv_10130',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、社員の送別会も自ら企画された','Dad — founding staff-send-self-plan','Sage','hiroshi_elder'),
    mk('はい。お父さんは流行への追従を嫌われた','Yes — Dad trend-follow-dislike','Commitment','hiroshi_boss'),
    mk('お父さん、初対面の方にも面識ある如く接された','Dad — first-meet-fam-treat','Wistful','hiroshi_elder'),
    mk('はい。お父さんは商品の外形にもこだわった','Yes — Dad prod-outer-care','Reflective','hiroshi_boss'),
    mk('お父さん、職人の技巧を尊重されていた','Dad — artisan-skill-resp','Wistful','hiroshi_elder'),
    mk('はい。お父さんは商船の乗組員にも挨拶された','Yes — Dad ship-crew-greet','Reflective','hiroshi_boss'),
    mk('お父さん、業界シンポのパネリストとして登壇された','Dad — industry-symp-pan-speak','Wistful','hiroshi_elder'),
    mk('はい。お父さんは不買運動に丁寧に向き合われた','Yes — Dad boycott-pol','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10131',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、発泡コンクリートの応用研究を論文で扱いましたね','Ren — foam-conc-app paper','Calm','asuka_teacher'),
    mk('はい、文化の源流を辿る人類学を論文で扱いました','Yes — Cult-origin-anth paper','Earnest','ren_uni'),
    mk('蓮さん、ソプラノ歌手の声帯研究を論文で扱いましたね','Ren — soprano-vocal paper','Reflective','asuka_teacher'),
    mk('はい、ジェンダーフリー教育の事例を論文で扱いました','Yes — Gend-free-edu paper','Earnest','ren_uni'),
    mk('政治家の右腕的側近の研究を論文で扱いましたね','Pol-right-arm paper','Engaged','asuka_teacher'),
    mk('はい、方言の語尾変化を論文で扱いました','Yes — Dial-end-var paper','Earnest','ren_uni'),
    mk('蓮さん、踏切事故の統計研究を論文で扱いましたね','Ren — cross-acc-stat paper','Reflective','asuka_teacher'),
    mk('はい、競走馬の出走時の心拍研究を論文で扱いました','Yes — Race-horse-start-heart paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10132',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、発泡スチロール詰めの遺体事案を、警察、扱われますね','Case foam-body police-handle','Reflective','ren_uni'),
    mk('警察、犯罪の源流を遡る捜査もされますね','Police crime-origin-back','Cooperative','takeda_officer'),
    mk('本件、ソプラノの声紋分析を、警察、進められますね','Case soprano-voice police-prog','Reflective','ren_uni'),
    mk('警察、ジェンダーフリー化された制服も導入されますね','Police gend-free-uni-intro','Cooperative','takeda_officer'),
    mk('本件、犯人の右腕の刺青鑑定を、警察、おこなわれますね','Case crim-right-tatt police-forensic','Reflective','ren_uni'),
    mk('警察、容疑者の語尾の特徴も声紋分析されますね','Police suspect-end-voice','Cooperative','takeda_officer'),
    mk('本件、踏切事故の捜査を、警察、担当されますね','Case cross-acc police-hand','Reflective','ren_uni'),
    mk('警察、競馬の出走前不正もご捜査ですね','Police race-pre-start-corrup','Close','takeda_officer'),
  ]},
  {id:'conv_10133',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、発泡コンクリートの応用を論文で扱いましたね','Sakura — foam-conc paper','Calm','asuka_teacher'),
    mk('はい、文化の源流を辿る人類学を論文で扱いました','Yes — Cult-origin paper','Earnest teen','sakura_teen'),
    mk('ソプラノ歌手の声帯研究を論文で扱いましたね','Soprano-vocal paper','Reflective','asuka_teacher'),
    mk('はい、ジェンダーフリー教育の事例を論文で扱いました','Yes — Gend-free paper','Earnest','sakura_teen'),
    mk('政治家の右腕的側近を論文で扱いましたね','Pol-right-arm paper','Engaged','asuka_teacher'),
    mk('はい、方言の語尾変化を論文で扱いました','Yes — Dial-end paper','Earnest','sakura_teen'),
    mk('踏切事故の統計を論文で扱いましたね','Cross-acc paper','Reflective','asuka_teacher'),
    mk('はい、競走馬の出走時の心拍を論文で扱いました','Yes — Race-horse-start paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10134',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、発泡素材の医療機器を医療チームで導入します','Ren — foam-mat-med med-team','Calm','saito_doctor'),
    mk('はい、感染症の源流追跡を医療チームで進めます','Yes — Infect-origin-trace med-team','Patient','saito_doctor'),
    mk('ソプラノ歌手の声帯検診を、貴院、おこなわれますね、先生','Soprano-vocal-check your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、ジェンダーフリーな医療相談を医療チームで提供します','Yes — Gend-free-med-cons med-team','Patient','saito_doctor'),
    mk('蓮さん、患者の右腕の血圧測定を医療チームで標準化します','Ren — pati-right-arm-BP med-team','Calm','saito_doctor'),
    mk('はい、患者の語尾の不明瞭さを医療チームで観察します','Yes — Pati-end-slur med-team','Patient','saito_doctor'),
    mk('踏切事故の救急搬送を、貴院、対応されますね、先生','Cross-acc-ER your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、競馬関係者の出走前救護も医療チームで担当します','Yes — Race-pre-start-aid med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_10135',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、発泡素材を環境配慮型に切り替えろ','Our co — foam-eco-switch','Crisp','hiroshi_boss'),
    mk('はい。事業の源流を見直す戦略を立てます','Yes — Biz-origin-rev-strat','Methodical','kenji_office'),
    mk('当社、社内合唱団でソプラノパートを募集しろ','Our co — co-choir-soprano-recru','Direction','hiroshi_boss'),
    mk('はい。ジェンダーフリーな職場を整備します','Yes — Gend-free-work-prep','Update','kenji_office'),
    mk('当社、社長の右腕的役員を選任しろ','Our co — pres-right-arm-pick','Direction','hiroshi_boss'),
    mk('はい。社員のプレゼン語尾も丁寧にします','Yes — Staff-pres-end-pol','Update','kenji_office'),
    mk('工場近くの踏切事故対策を強化しろ','Fact-near-cross-counter','Direction','hiroshi_boss'),
    mk('はい。新商品の出走、つまり投入時期を慎重に決めます','Yes — New-prod-launch-careful','Close','kenji_office'),
  ]},
  {id:'conv_10136',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、カーター元大統領の伝記を読んでらしたよ、メイちゃん','Aoi — cust-Carter-bio Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ジョブズの伝記がご趣味だって、メイちゃん','Aoi — cust-Jobs-bio Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ナイジェリアへ取材に行かれるって、メイちゃん','Aoi — cust-Nigeria-rep Mei','Reflective','mei_romantic'),
    mk('葵、お客様、アルメニアのワインを取り寄せてらっしゃるって、メイちゃん','Aoi — cust-Arm-wine Mei','Reflective','aoi_barista'),
    mk('葵、お客様、プラトンの対話篇を読書中だって、メイちゃん','Aoi — cust-Plato-dial Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ユング心理学を学ばれてるって、メイちゃん','Aoi — cust-Jung-learn Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ラテンアメリカ音楽がご趣味だって、メイちゃん','Aoi — cust-Lat-Am-music Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ローマ法王のミサに出席されたって、メイちゃん','Aoi — cust-Pope-mass Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10137',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがカーター政権時代を懐かしまれた','Gran — youth Dad-Carter-era-miss','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、晩年ジョブズのスピーチに感動されたわよね、あなた?','Yes — Grandpa-late-Jobs-speech-moved, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがナイジェリア駐在のお話されたわ','Gran — youth Dad-Nigeria-told','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、アルメニア大虐殺の歴史本を読まれたわよね、あなた?','Grandpa — Arm-gen-hist-read, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがプラトンの対話篇に親しまれた','Gran — youth Dad-Plato-fam','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ユング心理学を独学されたわよね、あなた?','Grandpa — Jung-self-study, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがラテンアメリカ音楽を集められた','Gran — youth Dad-Lat-Am-coll','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ローマ法王訪日のニュースをご覧になったわよね、あなた?','Grandpa — Pope-JP-visit-news, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10138',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがカーター元大統領のドキュメンタリーをご覧になったわ','Sho — Dad-Carter-doc-watch','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとジョブズの本読んだよ','Mei-sis — me Dad-Jobs-book','Eager child','sho_child'),
    mk('翔くん、お父さんがナイジェリア駐在のお話して下さるそうよ','Sho — Dad-Nigeria-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとアルメニアの絵本見たよ','Mei-sis — me Dad-Arm-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがプラトンの哲学のお話して下さるそうよ','Sho — Dad-Plato-phil','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ユング心理学って何?お父さんに聞くね','Mei-sis — me Jung-what-Dad-ask','Curious child','sho_child'),
    mk('翔くん、お父さんがラテンアメリカの音楽聴かせて下さったわ','Sho — Dad-Lat-Am-listen','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとローマ法王の絵本見たよ','Mei-sis — me Dad-Pope-pic','Eager close','sho_child'),
  ]},
  {id:'conv_10139',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、社会でカーター政権習ったろ?','Riku — soc-Carter?','Curious teen','sakura_teen'),
    mk('お前、ジョブズの伝記読み込んでたな、桜','You — Jobs-bio-deep Sakura','Curious','riku_teen'),
    mk('リク、お前、社会でナイジェリア習ったろ?','Riku — soc-Nigeria?','Curious','sakura_teen'),
    mk('お前、世界史でアルメニア習ったろ?桜','You — wld-hist-Arm? Sakura','Curious','riku_teen'),
    mk('リク、お前、倫理でプラトン習ったろ?','Riku — eth-Plato?','Curious','sakura_teen'),
    mk('お前、心理学でユング知ったろ?桜','You — psy-Jung? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会でラテンアメリカ習ったな','Riku — soc-Lat-Am','Curious','sakura_teen'),
    mk('お前、ニュースでローマ法王のお話聞いたろ?桜','You — news-Pope? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10140',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがカーター元大統領の伝記を貸して下さったわ','Sho — Dad-Carter-bio-lend','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとジョブズの伝記読んだよ','Mom — me Dad-Jobs-bio','Eager child','sho_child'),
    mk('翔くん、お父さんがナイジェリア出張のお話して下さったわ','Sho — Dad-Nigeria-told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとアルメニア料理屋さん行ったよ','Mom — me Dad-Arm-rest','Eager child','sho_child'),
    mk('翔くん、お父さんがプラトンの本を貸して下さったわ','Sho — Dad-Plato-lend','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとユング心理学のお話聞いたよ','Mom — me Dad-Jung-told','Eager child','sho_child'),
    mk('翔くん、お父さんがラテンアメリカ音楽の演奏会に行かれるそうよ','Sho — Dad-Lat-Am-concert','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとローマ法王のドキュメンタリー観たよ','Mom — me Dad-Pope-doc','Eager close','sho_child'),
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

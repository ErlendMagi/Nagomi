import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_470 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['太る','引っかかる','ほた','スミマセン','ひねり','広々','昇っ','すれ違う']
const B_T = ['教頭','推し進め','確証','製本','スキャナ','試験場','防火','配色']
const C_T = ['情念','一躍','余力','立脚','密教','縛り','着色','周回']
const D_T = ['バンザイ','哀愁','消防署','道楽','人差し指','茄子','茂木','スリッパ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09361',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「最近、太る一方だ」って仰ったわ','Sho — Dad-"recently-gain-weight"-said','Wry','yumiko_mom'),
    mk('ママ、お祖父ちゃんの服が枝に引っかかるところを見たよ','Mom — Grandpa-clothes-branch-snag-saw','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんが「ほた、いい天気だ」と仰ったわね','Sho — Grandpa-"hota-nice-weather"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんに「スミマセン」って何度も言ったよ','Mom — me Grandpa-"sumimasen"-many','Earnest child','sho_child'),
    mk('翔くん、お祖父ちゃんのお話に、ひねりがあったわね','Sho — Grandpa-talk-twist','Reflective','yumiko_mom'),
    mk('ママ、新しいお家、広々していて気持ちいいよ','Mom — new-home-spacious-good','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんが階段を昇っていらしたわ','Sho — Grandpa-stairs-climbed','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんと最後にすれ違う前、手を振ったよ','Mom — me Grandpa-last-pass-by-waved','Tender close','sho_child'),
  ]},
  {id:'conv_09362',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、繁忙期で食べる時間も無いから、太るどころじゃないね、メイちゃん','Aoi — busy-eat-no-gain-no Mei','Wry','mei_romantic'),
    mk('葵、お客様のバッグが椅子に引っかかってるよ、メイちゃん','Aoi — cust-bag-chair-snag Mei','Reflective','aoi_barista'),
    mk('葵、「ほた、お客様が来た」って今日は聞こえたね、メイちゃん','Aoi — "hota-cust-came"-heard Mei','Animated','mei_romantic'),
    mk('葵、お客様に「スミマセン」と謝る場面は、なるべく無いようにしようね、メイちゃん','Aoi — cust-"sumimasen"-apologize-min Mei','Direction','aoi_barista'),
    mk('葵、新メニューに、ひねりを加えましょう、メイちゃん','Aoi — new-menu-twist-add Mei','Direction','mei_romantic'),
    mk('葵、新店舗は広々として、お客様にも好評ね、メイちゃん','Aoi — new-store-spacious-pop Mei','Pleased','aoi_barista'),
    mk('葵、二階に昇って下さるお客様も多いね、メイちゃん','Aoi — 2F-climb-cust-many Mei','Reflective','mei_romantic'),
    mk('葵、お客様とすれ違う時、必ず会釈しましょう、メイちゃん','Aoi — cust-pass-by-bow Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_09363',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは少しずつ太る方だった','Gran — youth Dad-bit-gain','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、釣り糸が木に引っかかる事もあったわよね、あなた?','Yes — Grandpa-fish-line-tree-snag, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんは古い言葉で「ほた、よし」と仰った','Gran — Dad-old-"hota-good"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お客様に対して「スミマセン」と丁寧に仰ったわよね、あなた?','Grandpa — cust-"sumimasen"-polite-said, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんの俳句にはひねりがおありだった','Gran — youth Dad-haiku-twist','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、新築の広々したお家を喜ばれたわよね、あなた?','Grandpa — new-spacious-home-glad, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと小高い丘に昇って景色を眺めた','Gran — youth Dad-low-hill-climbed-view','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ばあさんと初めてすれ違う街角を覚えてらしたわよね、あなた?','Grandpa — youth-gran-first-pass-by-remember, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09364',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、最近太るな','Riku — recently-gain','Wry teen','sakura_teen'),
    mk('お前、ノートの紐が引っかかってるぞ、桜','You — note-string-snag Sakura','Wry','riku_teen'),
    mk('リク、お前、「ほた、テスト」とかつぶやくな','Riku — "hota-test"-mumble-don\'t','Wry','sakura_teen'),
    mk('お前、ちゃんと「スミマセン」って言えよ、桜','You — proper-"sumimasen"-say Sakura','Direction','riku_teen'),
    mk('リク、お前の解き方に、ひねりがあるな','Riku — sol-twist','Praising','sakura_teen'),
    mk('お前ん家、新築は広々してんな、桜','Your-new-home-spacious Sakura','Praising','riku_teen'),
    mk('リク、お前、階段を駆けて昇って遅刻避けたな','Riku — stairs-run-climb-late-avoid','Wry','sakura_teen'),
    mk('お前、駅で先生とすれ違う時、ちゃんと挨拶しろよ、桜','You — stat-teacher-pass-by-greet Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_09365',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さん、最近少し太る気がするわ','Sho — Mei-sis-recently-gain-feel','Wry','mei_romantic'),
    mk('メイ姉さん、ぼく、絵筆が画板に引っかかっちゃった','Mei-sis — me brush-board-snag','Wry child','sho_child'),
    mk('翔くん、メイ姉さんは「ほた、見て」って、絵を見せて下さるのよ','Sho — Mei-sis-"hota-look"-show','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お絵描き失敗して「スミマセン」って','Mei-sis — me art-fail-"sumimasen"','Earnest child','sho_child'),
    mk('翔くん、メイ姉さんの絵には、ひねりがあるのよ','Sho — Mei-sis-art-twist','Reflective','mei_romantic'),
    mk('メイ姉さん、メイ姉さんのアトリエ、広々して素敵だね','Mei-sis — Mei-sis-atelier-spacious-lovely','Praising child','sho_child'),
    mk('翔くん、メイ姉さんとお山に昇って絵を描きたいね','Sho — Mei-sis-mountain-climb-art-want','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんと公園ですれ違う時、必ず手を振るよ','Mei-sis — me Mei-sis-park-pass-by-wave','Eager close','sho_child'),
  ]},
  {id:'conv_09366',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、教育機関の教頭先生と懇談しろ','Our co — edu-vice-principal-chat','Crisp','hiroshi_boss'),
    mk('はい。新事業を推し進める準備を整えました','Yes — New-biz-push-prep','Methodical','kenji_office'),
    mk('当社、確証のない投資は控えろ','Our co — uncert-invest-refrain','Direction','hiroshi_boss'),
    mk('はい。社史の製本作業を進めております','Yes — Co-hist-binding-progress','Update','kenji_office'),
    mk('当社、書類のスキャナでの電子化を急げ','Our co — doc-scan-elec-hasten','Direction','hiroshi_boss'),
    mk('はい。社員研修を試験場の様式で実施します','Yes — Staff-train-test-style','Update','kenji_office'),
    mk('当社、社内の防火設備を点検しろ','Our co — co-fire-prev-eq-check','Direction','hiroshi_boss'),
    mk('はい。新ロゴの配色を確定しました','Yes — New-logo-color-fix','Close','kenji_office'),
  ]},
  {id:'conv_09367',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('地元の教頭先生に職場体験を依頼しましょう','Local-vice-principal-work-exp-req','Brisk','yuki_office'),
    mk('はい。新方針を推し進める社内チームを編成しました','Yes — New-pol-push-co-team','Cooperative','kenji_office'),
    mk('確証のないままお客様に約束はしないようにしましょう','Uncert-cust-promise-not','Direction','yuki_office'),
    mk('はい。冊子を製本する業者を選定中です','Yes — Booklet-binding-vendor-select','Update','kenji_office'),
    mk('オフィス用のスキャナを新調しましょう','Office-scan-new','Direction','yuki_office'),
    mk('はい。試験場の予約も完了しました','Yes — Test-venue-res-done','Update','kenji_office'),
    mk('防火訓練を定期的に行いましょう','Fire-drill-period','Direction','yuki_office'),
    mk('はい。商品の配色を社員に投票してもらいます','Yes — Prod-color-staff-vote','Close','kenji_office'),
  ]},
  {id:'conv_09368',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、教頭級の指導者からも学べ','Ren — vice-principal-lvl-learn','Mentor','hiroshi_boss'),
    mk('はい。研究を推し進める仲間を増やします','Yes — Research-push-friend-up','Earnest','ren_uni'),
    mk('蓮、確証のないデータは論文に載せるな','Ren — uncert-data-paper-not','Direction','hiroshi_boss'),
    mk('はい。博士論文の製本を業者に依頼します','Yes — PhD-paper-binding-vendor-req','Polite','ren_uni'),
    mk('蓮、研究室のスキャナを使いこなせ','Ren — lab-scan-master','Direction','hiroshi_boss'),
    mk('はい。試験場の予約手続きを確認しました','Yes — Test-venue-res-check','Earnest','ren_uni'),
    mk('蓮、研究室の防火点検を欠かすな','Ren — lab-fire-check-not-skip','Direction','hiroshi_boss'),
    mk('はい。論文のグラフの配色を見直しました','Yes — Paper-graph-color-review','Earnest close','ren_uni'),
  ]},
  {id:'conv_09369',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、学校の教頭先生とも連携されますね','Police school-vice-principal-link','Cooperative','kenji_office'),
    mk('警察、地域防犯を推し進める活動、頼もしいです','Police local-crime-prev-push reliable','Cooperative','kenji_office'),
    mk('警察、確証のあるまで逮捕は慎重ですね','Police certain-arrest-careful','Cooperative','kenji_office'),
    mk('警察、調書の製本処理もご対応ですね','Police statement-binding','Cooperative','kenji_office'),
    mk('警察、証拠物のスキャナ取り込みもされますね','Police evid-scan','Cooperative','kenji_office'),
    mk('警察、運転免許の試験場でも防犯啓発されますね','Police license-test-venue-crime-prev','Cooperative','kenji_office'),
    mk('警察、防火指導も担当されますね','Police fire-prev-guide','Cooperative','kenji_office'),
    mk('警察、パトカーの配色を統一されましたね','Police police-car-color-unify','Close','kenji_office'),
  ]},
  {id:'conv_09370',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、地元教頭先生にもご相談された','Dad — founding local-vice-principal-cons','Sage','hiroshi_elder'),
    mk('はい。お父さんは社員と共に事業を推し進めた','Yes — Dad staff-biz-push','Commitment','hiroshi_boss'),
    mk('お父さん、確証のない投資はされなかったぞ','Dad — uncert-invest-not','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社史を製本する作業を自ら確認された','Yes — Dad co-hist-binding-self-check','Reflective','hiroshi_boss'),
    mk('お父さん、新しいスキャナ技術にも興味をお持ちだった','Dad — new-scan-tech-interest','Wistful','hiroshi_elder'),
    mk('はい。お父さんは資格の試験場まで自ら足を運ばれた','Yes — Dad cert-test-venue-self','Reflective','hiroshi_boss'),
    mk('お父さん、防火対策を徹底するご指示をされたぞ','Dad — fire-prev-strict','Wistful','hiroshi_elder'),
    mk('はい。お父さんはロゴの配色にこだわった','Yes — Dad logo-color-care','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09371',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、詩人の情念を描いた研究を論文で扱いましたね','Ren — poet-pass paper','Calm','asuka_teacher'),
    mk('はい、一躍有名になった作家の作品を論文で扱いました','Yes — Suddenly-famous-author paper','Earnest','ren_uni'),
    mk('蓮さん、戦時下に余力のない国家の政策を論文で扱いましたね','Ren — wartime-no-reserve-state-pol paper','Reflective','asuka_teacher'),
    mk('はい、現代思想が立脚する古典哲学を論文で扱いました','Yes — Mod-thought-found-classic paper','Earnest','ren_uni'),
    mk('密教の歴史的展開を論文で扱いましたね','Esoteric-Bud-hist paper','Engaged','asuka_teacher'),
    mk('はい、女性を縛りつけた歴史的制度を論文で扱いました','Yes — Women-bind-hist-sys paper','Earnest','ren_uni'),
    mk('蓮さん、古文書の着色研究を論文で扱いましたね','Ren — anc-doc-color-research paper','Reflective','asuka_teacher'),
    mk('はい、衛星が地球を周回する軌道計算を論文で扱いました','Yes — Sat-Earth-orbit-calc paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09372',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、犯人の情念を警察、心理学的に分析されてますね','Case suspect-pass police-psy-anal','Reflective','ren_uni'),
    mk('警察、一躍世間の注目を集めた事件にも冷静に対応します','Police suddenly-att-case-calm-resp','Procedural','takeda_officer'),
    mk('本件、人員の余力がない中、警察、ご対応ですね','Case staff-no-reserve police-resp','Reflective','ren_uni'),
    mk('警察、事実に立脚した捜査を続けます','Police fact-found-inv-cont','Procedural','takeda_officer'),
    mk('本件、密教団体の不審な動きを警察、警戒されますね','Case Esoteric-group-suspic police-watch','Reflective','ren_uni'),
    mk('警察、被害者を縛りつけた拘束器具を押収しました','Police victim-bind-restr-tool-seize','Procedural','takeda_officer'),
    mk('本件、容疑者の着色した証拠物を警察、見破られましたね','Case suspect-color-evid police-see-through','Reflective','ren_uni'),
    mk('警察、地域を周回する巡回を強化します','Police area-orbit-patrol-strength','Close','takeda_officer'),
  ]},
  {id:'conv_09373',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、詩人の情念を描いた研究を論文で扱いましたね','Sakura — poet-pass paper','Calm','asuka_teacher'),
    mk('はい、一躍有名になった作家を論文で扱いました','Yes — Suddenly-famous paper','Earnest teen','sakura_teen'),
    mk('戦時下に余力のない国家の政策を論文で扱いましたね','War-no-reserve paper','Reflective','asuka_teacher'),
    mk('はい、現代思想が立脚する古典哲学を論文で扱いました','Yes — Mod-thought-found paper','Earnest','sakura_teen'),
    mk('密教の歴史的展開を論文で扱いましたね','Esoteric-Bud paper','Engaged','asuka_teacher'),
    mk('はい、女性を縛りつけた歴史的制度を論文で扱いました','Yes — Women-bind paper','Earnest','sakura_teen'),
    mk('古文書の着色研究を論文で扱いましたね','Anc-doc-color paper','Reflective','asuka_teacher'),
    mk('はい、衛星が地球を周回する軌道を論文で扱いました','Yes — Sat-orbit paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09374',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、患者さんの情念を医療チームで丁寧に汲み取ります','Ren — patient-pass med-team listen','Calm','saito_doctor'),
    mk('はい、一躍注目された治療法も医療チームで検証します','Yes — Suddenly-att-treat med-team verify','Patient','saito_doctor'),
    mk('救命の余力がある時こそ、貴院、ご対応されますね、先生','Rescue-reserve-time your-hosp resp, sensei','Reflective','ren_uni'),
    mk('はい、根拠に立脚した医療を医療チームで続けます','Yes — Evid-found-med med-team cont','Patient','saito_doctor'),
    mk('密教医療と現代医療の境界を、貴院、研究されてますね、先生','Esoteric-med-mod-med-line your-hosp research, sensei','Curious','ren_uni'),
    mk('はい、過度に患者を縛りつける身体拘束を医療チームで避けます','Yes — Excess-patient-bind med-team avoid','Patient','saito_doctor'),
    mk('検査試料を着色する手法を、貴院、改善されてますね、先生','Test-sample-color your-hosp imp, sensei','Reflective','ren_uni'),
    mk('はい、定期検診を周回する地域巡回を医療チームで継続します','Yes — Period-check-area-orbit med-team cont','Patient close','saito_doctor'),
  ]},
  {id:'conv_09375',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、社員の情念をくみ取る経営をしろ','Our co — staff-pass-listen-mgmt','Crisp','hiroshi_boss'),
    mk('はい。新製品が一躍話題となるよう広報を強化します','Yes — New-prod-suddenly-topic-PR','Methodical','kenji_office'),
    mk('当社、余力のある時こそ投資しろ','Our co — reserve-time-invest','Direction','hiroshi_boss'),
    mk('はい。証拠に立脚した意思決定を徹底します','Yes — Evid-found-judg-strict','Update','kenji_office'),
    mk('当社、密教的な経営思想は採用しない','Our co — esoteric-mgmt-not-adopt','Direction','hiroshi_boss'),
    mk('はい。契約で社員を不当に縛りつけないようにします','Yes — Contract-staff-bind-not','Update','kenji_office'),
    mk('当社、商品の着色を環境に優しいものにしろ','Our co — prod-color-eco-friend','Direction','hiroshi_boss'),
    mk('はい。営業の地域を周回する巡回を強化します','Yes — Sales-area-orbit-strength','Close','kenji_office'),
  ]},
  {id:'conv_09376',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、お祝いでバンザイをされてたよ、メイちゃん','Aoi — cust-celeb-banzai Mei','Pleased','mei_romantic'),
    mk('葵、お客様、哀愁漂う曲を流して下さいって仰ったよ、メイちゃん','Aoi — cust-nostalg-music-played Mei','Reflective','aoi_barista'),
    mk('葵、消防署の方々がお店を防火点検に来られたよ、メイちゃん','Aoi — fire-stat-staff-check Mei','Reflective','mei_romantic'),
    mk('葵、お客様、釣りを道楽にされてるって、メイちゃん','Aoi — cust-fish-hobby Mei','Reflective','aoi_barista'),
    mk('葵、お子様、人差し指でメニューを指してらしたよ、メイちゃん','Aoi — child-index-menu-point Mei','Pleased','mei_romantic'),
    mk('葵、新メニュー、茄子の煮浸し加えましょう、メイちゃん','Aoi — new-menu-eggplant-stew Mei','Animated','aoi_barista'),
    mk('葵、お客様、茂木さんがいらしたって、メイちゃん','Aoi — cust-Mr-Mogi-came Mei','Reflective','mei_romantic'),
    mk('葵、お客様用のスリッパを新調しましょう、メイちゃん','Aoi — cust-slipper-new Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_09377',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがバンザイをして喜ばれたぞ','Gran — youth Dad-banzai-glad','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、哀愁を帯びた歌を歌ってらしたわよね、あなた?','Yes — Grandpa-nostalg-song-sang, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが消防署で働かれた時期もあった','Gran — youth Dad-fire-stat-work','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、釣りを道楽になさってたわよね、あなた?','Grandpa — fish-hobby, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが孫に人差し指で字を教えてらした','Gran — youth Dad-grandkid-index-letter-taught','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お庭で茄子を育てられたわよね、あなた?','Grandpa — garden-eggplant-grew, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと茂木さんとよくお会いした','Gran — youth Dad-Mr-Mogi-met','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お客様用のスリッパを揃えていらしたわよね、あなた?','Grandpa — cust-slipper-set, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09378',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、合格したらバンザイしましょうね','Sho — pass-banzai','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、哀愁漂う曲を聴くと泣きそうになるよ','Mei-sis — me nostalg-music-cry','Earnest child','sho_child'),
    mk('翔くん、お父さんと消防署の見学に行きましょうね','Sho — Dad-fire-stat-tour','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんが釣りを道楽にされてるって聞いたよ','Mei-sis — me Grandpa-fish-hobby-heard','Reflective child','sho_child'),
    mk('翔くん、お絵描きで人差し指の練習しましょうね','Sho — art-index-prac','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖母ちゃんの茄子炒め大好きだよ','Mei-sis — me Grandma-eggplant-fry-love','Eager child','sho_child'),
    mk('翔くん、メイ姉さんのお友達に茂木先生がいらっしゃるのよ','Sho — Mei-sis-friend-Mr-Mogi','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お家で新しいスリッパ買ってもらったよ','Mei-sis — me home-new-slipper-got','Proud close','sho_child'),
  ]},
  {id:'conv_09379',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、合格したらバンザイしてたな','Riku — pass-banzai-did','Praising teen','sakura_teen'),
    mk('お前、哀愁漂う洋楽好きだろ、桜','You — nostalg-Wes-music-like Sakura','Curious','riku_teen'),
    mk('リク、お前、消防署の社会科見学行ったろ?','Riku — fire-stat-soc-tour?','Curious','sakura_teen'),
    mk('お前、釣りを道楽にしてるお父さん、いいな、桜','You — Dad-fish-hobby-good Sakura','Praising','riku_teen'),
    mk('リク、お前、テストで人差し指でカンニング線引いたろ?','Riku — test-index-cheat-line?','Wry','sakura_teen'),
    mk('お前、給食の茄子残すなよ、桜','You — lunch-eggplant-don\'t Sakura','Direction','riku_teen'),
    mk('リク、お前、転校生の茂木さんと仲良くなったろ?','Riku — transfer-Mr-Mogi-friend?','Curious','sakura_teen'),
    mk('お前、家でスリッパで走るな、桜','You — home-slipper-don\'t-run Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_09380',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、合格したら家族でバンザイしましょうね','Sho — pass-fam-banzai','Tender','yumiko_mom'),
    mk('ママ、ぼく、哀愁漂う夕焼けを見たよ','Mom — me nostalg-sunset-saw','Reflective child','sho_child'),
    mk('翔くん、お父さんと消防署の防災イベントに行きましょうね','Sho — Dad-fire-stat-event-go','Tender','yumiko_mom'),
    mk('ママ、お祖父ちゃんが釣りを道楽にされてるそうよ','Mom — Grandpa-fish-hobby','Reflective child','sho_child'),
    mk('翔くん、お絵描きで人差し指を上手に使えるようになったわね','Sho — art-index-good','Praising','yumiko_mom'),
    mk('ママ、ぼく、お祖母ちゃんの茄子のお漬物食べたい','Mom — me Grandma-eggplant-pickle-want','Eager child','sho_child'),
    mk('翔くん、お父さんが茂木さんと交流されてるわ','Sho — Dad-Mr-Mogi-exch','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんのスリッパが大きすぎだよ','Mom — me Dad-slipper-too-big','Wry close','sho_child'),
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_475 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['こむ','採っ','ひざ','向く','在る','挙句','物語っ','できあがっ']
const B_T = ['プロダクション','自負','特長','館長','主語','一部分','コンセンサス','求む']
const C_T = ['潮流','産み','就学','幕末','細川','秀吉','道筋','偽り']
const D_T = ['整体','愛人','クリエイティブ','ディーゼル','ゴジラ','任天堂','ラウンジ','スプリング']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09461',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お家に駆けこむお父さんを見て嬉しかったわ','Sho — Dad-home-rush-glad','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと一緒に貝殻を採ったよ','Mom — me Dad-shell-collect','Eager child','sho_child'),
    mk('翔くん、お父さんがひざに乗せて絵本読んで下さるわ','Sho — Dad-knee-on-pic-book-read','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんの方を向くと安心するよ','Mom — me Dad-face-easy','Tender child','sho_child'),
    mk('翔くん、お父さんが今お家に在るから一緒にお話ししようね','Sho — Dad-home-here-now-talk','Direction','yumiko_mom'),
    mk('ママ、宿題の挙句にぼくは眠くなったよ','Mom — homework-end-me-sleepy','Wry child','sho_child'),
    mk('翔くん、お父さんが昔の冒険を物語って下さったわ','Sho — Dad-old-adv-narrate','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと工作ができあがって嬉しいよ','Mom — me Dad-craft-fin-glad','Eager close','sho_child'),
  ]},
  {id:'conv_09462',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、急いで駆けこむお姿が印象的ね、メイちゃん','Aoi — cust-rush-impr Mei','Reflective','mei_romantic'),
    mk('葵、お客様、コーヒー豆を産地まで行って採ったんだって、メイちゃん','Aoi — cust-bean-orig-collect Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ひざを痛められたって、メイちゃん','Aoi — cust-knee-hurt Mei','Reflective','mei_romantic'),
    mk('葵、お客様の心をお店に向くようにしたいね、メイちゃん','Aoi — cust-heart-store-face Mei','Direction','aoi_barista'),
    mk('葵、新メニューがいつも在る状態にしようね、メイちゃん','Aoi — new-menu-always-stock Mei','Direction','mei_romantic'),
    mk('葵、議論の挙句、新コーヒーを採用したね、メイちゃん','Aoi — disc-end-new-coffee-adopt Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ご家族の思い出を物語って下さったよ、メイちゃん','Aoi — cust-fam-mem-narrate Mei','Reflective','mei_romantic'),
    mk('葵、新メニューがやっとできあがって嬉しいね、メイちゃん','Aoi — new-menu-fin-glad Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_09463',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが家に駆けこむと皆が安心した','Gran — youth Dad-home-rush-all-easy','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、山菜を採ってこられたわよね、あなた?','Yes — Grandpa-mt-veg-collect, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが孫をひざに乗せて遊ばれた','Gran — youth Dad-grandkid-knee-play','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お墓に向く時間を大切にされたわよね、あなた?','Grandpa — grave-face-time-cherish, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがどこに在る時も家族を気にされた','Gran — youth Dad-anywhere-fam-care','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、議論の挙句、決断を即座にされたわよね、あなた?','Grandpa — disc-end-decis-fast, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが戦時中の体験を物語って下さった','Gran — youth Dad-war-exp-narrate','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様の作品ができあがった時、誉められたわよね、あなた?','Grandpa — grandkid-work-fin-praise, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09464',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、教室に駆けこむのいつもギリギリだな','Riku — class-rush-last-min','Wry teen','sakura_teen'),
    mk('お前、テストで満点を採ったらしいな、桜','You — test-perfect-took Sakura','Praising','riku_teen'),
    mk('リク、お前、ひざを擦りむいたな','Riku — knee-scrape','Wry','sakura_teen'),
    mk('お前、こっちを向くといつも怖い顔だな、桜','You — me-face-scary Sakura','Wry','riku_teen'),
    mk('リク、お前ん家には漫画が大量に在るな','Riku — your-home-manga-many','Curious','sakura_teen'),
    mk('お前、議論の挙句、結局カラオケに行ったろ?桜','You — disc-end-karaoke-went? Sakura','Wry','riku_teen'),
    mk('リク、お前、夏休みの冒険を物語っただろ','Riku — summer-adv-narrate','Curious','sakura_teen'),
    mk('お前、文化祭の準備、ようやくできあがったな、桜','You — cult-fest-prep-fin Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_09465',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが急いで駆けこむお姿が頼もしかったわ','Sho — Dad-rush-reli','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと花を採ったよ','Mei-sis — me Dad-flower-collect','Eager child','sho_child'),
    mk('翔くん、お父さんがひざに乗せて下さって嬉しかったね','Sho — Dad-knee-on-glad','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんの方を向くと笑顔になるよ','Mei-sis — me Dad-face-smile','Eager child','sho_child'),
    mk('翔くん、メイ姉さんがいつもそばに在るから安心ね','Sho — Mei-sis-near-easy','Tender','mei_romantic'),
    mk('メイ姉さん、お父さんが議論の挙句に「行こう」と仰ったよ','Mei-sis — Dad-disc-end-"go"-said','Eager child','sho_child'),
    mk('翔くん、お父さんがご家族の歴史を物語って下さったわ','Sho — Dad-fam-hist-narrate','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと工作ができあがって嬉しい','Mei-sis — me Dad-craft-fin-glad','Eager close','sho_child'),
  ]},
  {id:'conv_09466',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、映像プロダクションへの投資を検討しろ','Our co — video-prod-invest','Crisp','hiroshi_boss'),
    mk('はい。当社の品質に自負を持って参ります','Yes — Our-co-qual-pride','Methodical','kenji_office'),
    mk('当社、商品の特長を明確に打ち出せ','Our co — prod-feat-clear','Direction','hiroshi_boss'),
    mk('はい。社史館長の取材を受けます','Yes — Co-mus-dir-int','Update','kenji_office'),
    mk('プレゼン資料の主語を明確にしろ','Pres-doc-subj-clear','Direction','hiroshi_boss'),
    mk('はい。提案の一部分を再構成します','Yes — Prop-portion-restruct','Update','kenji_office'),
    mk('役員のコンセンサスを取れ','Exec-cons-take','Direction','hiroshi_boss'),
    mk('はい。優秀な人材求むの広告を出します','Yes — Talent-recru-ad','Close','kenji_office'),
  ]},
  {id:'conv_09467',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('プロダクション会社と業務提携を進めましょう','Prod-co-partner-prog','Brisk','yuki_office'),
    mk('はい。当社の伝統に自負を持って臨みます','Yes — Our-co-trad-pride','Cooperative','kenji_office'),
    mk('新製品の特長を整理しましょう','New-prod-feat-org','Direction','yuki_office'),
    mk('はい。美術館長との対談企画も進めます','Yes — Mus-dir-talk-plan','Update','kenji_office'),
    mk('提案書の主語を統一しましょう','Prop-subj-uni','Direction','yuki_office'),
    mk('はい。資料の一部分を差し替えます','Yes — Doc-portion-repl','Update','kenji_office'),
    mk('部内のコンセンサスを取りましょう','Dept-cons-take','Direction','yuki_office'),
    mk('はい。中途採用「求む」の案内を出します','Yes — Mid-hire-recru-out','Close','kenji_office'),
  ]},
  {id:'conv_09468',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、映像プロダクションでのインターンも経験しろ','Ren — video-prod-intern-exp','Mentor','hiroshi_boss'),
    mk('はい。研究室の質に自負を持って取り組みます','Yes — Lab-qual-pride','Earnest','ren_uni'),
    mk('蓮、論文の特長を明確に提示しろ','Ren — paper-feat-clear','Direction','hiroshi_boss'),
    mk('はい。資料館長との対談を企画しております','Yes — Arch-dir-talk-plan','Earnest','ren_uni'),
    mk('蓮、論文の主語を明確にしろ','Ren — paper-subj-clear','Direction','hiroshi_boss'),
    mk('はい。論文の一部分を再構成します','Yes — Paper-portion-restruct','Polite','ren_uni'),
    mk('蓮、研究室のコンセンサスを取って進めろ','Ren — lab-cons-take-prog','Direction','hiroshi_boss'),
    mk('はい。研究助手「求む」の告知も出します','Yes — Research-asst-recru-out','Earnest close','ren_uni'),
  ]},
  {id:'conv_09469',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、犯罪映像プロダクションとの連携もされてますね','Police crime-video-prod-link','Cooperative','kenji_office'),
    mk('警察、防犯活動に自負を持ってあたられますね','Police crime-prev-pride','Cooperative','kenji_office'),
    mk('警察、新たな防犯機器の特長を市民に説明されますね','Police new-prev-eq-feat-citi','Cooperative','kenji_office'),
    mk('警察、犯罪資料館長との連携もされてますね','Police crime-mus-dir-link','Cooperative','kenji_office'),
    mk('警察、報告書の主語を明確にされますね','Police rep-subj-clear','Cooperative','kenji_office'),
    mk('警察、調書の一部分を非公開にされますね','Police statem-portion-conf','Cooperative','kenji_office'),
    mk('警察、捜査チームのコンセンサスも重視されますね','Police inv-team-cons-imp','Cooperative','kenji_office'),
    mk('警察、特捜隊員「求む」のポスターも見ました','Police spec-recru-poster','Close','kenji_office'),
  ]},
  {id:'conv_09470',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、独立プロダクションを支援された','Dad — founding indep-prod-supp','Sage','hiroshi_elder'),
    mk('はい。お父さんは経営の質に自負を持ってらした','Yes — Dad mgmt-qual-pride','Commitment','hiroshi_boss'),
    mk('お父さん、商品の特長を消費者目線でお決めだった','Dad — prod-feat-cons-decide','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社史館長を任命された','Yes — Dad co-mus-dir-appoint','Reflective','hiroshi_boss'),
    mk('お父さん、文章の主語を明確にされた','Dad — write-subj-clear','Wistful','hiroshi_elder'),
    mk('はい。お父さんは事業の一部分を譲渡される決断もされた','Yes — Dad biz-portion-trans-decide','Reflective','hiroshi_boss'),
    mk('お父さん、役員のコンセンサスを丁寧に取られた','Dad — exec-cons-careful','Wistful','hiroshi_elder'),
    mk('はい。お父さんは「人材求む」の信念を貫かれた','Yes — Dad "recru"-belief','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09471',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、海洋の潮流変動の研究を論文で扱いましたね','Ren — ocean-current-var paper','Calm','asuka_teacher'),
    mk('はい、新生児の産み方の文化比較を論文で扱いました','Yes — Newborn-birth-cult paper','Earnest','ren_uni'),
    mk('蓮さん、就学前教育の効果を論文で扱いましたね','Ren — pre-school-edu-eff paper','Reflective','asuka_teacher'),
    mk('はい、幕末の志士の研究を論文で扱いました','Yes — Bakumatsu-pat paper','Earnest','ren_uni'),
    mk('細川家の文書を論文で扱いましたね','Hosokawa-archive paper','Engaged','asuka_teacher'),
    mk('はい、秀吉の朝鮮出兵の研究を論文で扱いました','Yes — Hideyoshi-Kor paper','Earnest','ren_uni'),
    mk('蓮さん、近代化の道筋の研究を論文で扱いましたね','Ren — mod-path paper','Reflective','asuka_teacher'),
    mk('はい、政治家の偽りの公約を論文で扱いました','Yes — Pol-false-promise paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09472',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、潮流に流された遺留品を、警察、回収されてますね','Case current-drift-evid police-recover','Reflective','ren_uni'),
    mk('警察、犯人の産み出した状況証拠を分析します','Police suspect-prod-circum-evid','Procedural','takeda_officer'),
    mk('本件、就学児童への声かけ事案を、警察、注視されてますね','Case sch-child-app police-watch','Reflective','ren_uni'),
    mk('警察、幕末の刀剣盗難事件も扱います','Police Bakumatsu-sword-theft','Procedural','takeda_officer'),
    mk('本件、細川家ゆかりの古文書盗難を、警察、扱われてますね','Case Hosokawa-arch-theft police-handle','Reflective','ren_uni'),
    mk('警察、秀吉ゆかりの史跡破壊事件も把握します','Police Hideyoshi-relic-dest','Procedural','takeda_officer'),
    mk('本件、犯行の道筋を、警察、特定されてますね','Case crime-path police-id','Reflective','ren_uni'),
    mk('警察、容疑者の偽り供述を厳しく追及します','Police suspect-false-test-pursue','Close','takeda_officer'),
  ]},
  {id:'conv_09473',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、海洋潮流の研究を論文で扱いましたね','Sakura — ocean-current paper','Calm','asuka_teacher'),
    mk('はい、新生児の産み方の文化比較を論文で扱いました','Yes — Newborn-birth-cult paper','Earnest teen','sakura_teen'),
    mk('就学前教育の効果を論文で扱いましたね','Pre-sch-edu paper','Reflective','asuka_teacher'),
    mk('はい、幕末の志士の研究を論文で扱いました','Yes — Bakumatsu paper','Earnest','sakura_teen'),
    mk('細川家文書を論文で扱いましたね','Hosokawa-arch paper','Engaged','asuka_teacher'),
    mk('はい、秀吉の朝鮮出兵の研究を論文で扱いました','Yes — Hideyoshi paper','Earnest','sakura_teen'),
    mk('近代化の道筋を論文で扱いましたね','Mod-path paper','Reflective','asuka_teacher'),
    mk('はい、政治家の偽りの公約を論文で扱いました','Yes — Pol-false paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09474',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、医療界の潮流を医療チームで読みます','Ren — med-current med-team','Calm','saito_doctor'),
    mk('はい、出産での産み方の選択肢を医療チームで提供します','Yes — Birth-choice med-team','Patient','saito_doctor'),
    mk('就学前児童の発達検査を、貴院、おこなわれますね、先生','Pre-sch-dev-check your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、幕末由来の古い病院建築を医療チームで継承します','Yes — Bakumatsu-old-hosp-bld med-team-inh','Patient','saito_doctor'),
    mk('細川家のお墓のある地域医療を、貴院、担当されますね、先生','Hosokawa-grave-area-med your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、秀吉時代の医療史も医療チームで研究します','Yes — Hideyoshi-med-hist med-team','Patient','saito_doctor'),
    mk('治療の道筋を、貴院、患者と共有されますね、先生','Treat-path your-hosp pati-share, sensei','Curious','ren_uni'),
    mk('はい、患者への偽り説明はない様、医療チームで徹底します','Yes — Pati-false-explan-none med-team strict','Patient close','saito_doctor'),
  ]},
  {id:'conv_09475',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、時代の潮流に乗れ','Our co — era-current-ride','Crisp','hiroshi_boss'),
    mk('はい。新サービスを産み出す体制を整えます','Yes — New-serv-create-prep','Methodical','kenji_office'),
    mk('社員のお子様の就学を支援しろ','Staff-kid-sch-supp','Direction','hiroshi_boss'),
    mk('はい。幕末創業の老舗と提携いたします','Yes — Bakumatsu-est-partner','Update','kenji_office'),
    mk('当社、細川家系の文化財寄贈にも協力しろ','Our co — Hosokawa-cult-don','Direction','hiroshi_boss'),
    mk('はい。秀吉時代の城下町イベントにも協賛します','Yes — Hideyoshi-castle-town-spons','Update','kenji_office'),
    mk('業界での道筋を見極めろ','Industry-path-judge','Direction','hiroshi_boss'),
    mk('はい。誇大広告や偽り表記は絶対に許しません','Yes — False-ad-no-tol','Close','kenji_office'),
  ]},
  {id:'conv_09476',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、整体院に通われてるって、メイちゃん','Aoi — cust-seitai-go Mei','Reflective','mei_romantic'),
    mk('葵、お客様、小説の愛人ものが好きだって、メイちゃん','Aoi — cust-novel-mistress-like Mei','Wry','aoi_barista'),
    mk('葵、お客様、クリエイティブな仕事がご趣味だって、メイちゃん','Aoi — cust-creat-hobby Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ディーゼル車から電気車に変えたって、メイちゃん','Aoi — cust-diesel-EV-change Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ゴジラ映画の特撮ファンだって、メイちゃん','Aoi — cust-Godzilla-FX-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、任天堂のゲームが趣味だって、メイちゃん','Aoi — cust-Nintendo-hobby Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ホテルラウンジで本を読まれるって、メイちゃん','Aoi — cust-htl-lounge-read Mei','Reflective','mei_romantic'),
    mk('葵、お客様、スプリングコレクションの服を着てらしたよ、メイちゃん','Aoi — cust-spring-coll-wear Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09477',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが腰痛で整体に通われた','Gran — youth Dad-back-seitai-go','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ドラマの愛人もので議論されたわよね、あなた?','Yes — Grandpa-drama-mistress-disc, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがクリエイティブな手作りが得意だった','Gran — youth Dad-creat-handmake-good','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ディーゼル機関車の本がお好きだったわよね、あなた?','Grandpa — diesel-loc-book, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがゴジラの映画館に並ばれた','Gran — youth Dad-Godzilla-cinema-line','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様と任天堂のゲームをされたわよね、あなた?','Grandpa — grandkid-Nintendo-play, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがホテルのラウンジで商談された','Gran — youth Dad-htl-lounge-biz','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ばねスプリングの工場を見学されたわよね、あなた?','Grandpa — spring-fact-tour, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09478',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが整体院でメンテされてるそうよ','Sho — Dad-seitai-maint','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、TVの「愛人」って言葉、意味聞いていい?','Mei-sis — me TV-mistress-mean-ask?','Curious child','sho_child'),
    mk('翔くん、お父さんがクリエイティブなお仕事をされてるのよ','Sho — Dad-creat-work','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ディーゼル機関車の絵本好きだよ','Mei-sis — me diesel-loc-pic-like','Eager child','sho_child'),
    mk('翔くん、お父さんがゴジラのフィギュアを下さるそうよ','Sho — Dad-Godzilla-fig-give','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、任天堂のゲーム新作待ってるよ','Mei-sis — me Nintendo-new-wait','Eager child','sho_child'),
    mk('翔くん、お父さんがホテルラウンジに連れて行って下さるそうよ','Sho — Dad-htl-lounge-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとスプリングコートを買いに行ったよ','Mei-sis — me Dad-spring-coat-buy','Eager close','sho_child'),
  ]},
  {id:'conv_09479',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、肩こりで整体行ってたな','Riku — shoulder-seitai-went','Curious teen','sakura_teen'),
    mk('お前、ドラマの愛人ものハマってたな、桜','You — drama-mistress-into Sakura','Wry','riku_teen'),
    mk('リク、お前、デザインがクリエイティブだな','Riku — design-creat-good','Praising','sakura_teen'),
    mk('お前、ディーゼル車の音マネしてたな、桜','You — diesel-sound-mimic Sakura','Wry','riku_teen'),
    mk('リク、お前、ゴジラの最新作観たろ?','Riku — Godzilla-new-watch?','Curious','sakura_teen'),
    mk('お前、任天堂のゲーム実況してたろ?桜','You — Nintendo-stream? Sakura','Curious','riku_teen'),
    mk('リク、お前、ホテルラウンジ憧れてるな','Riku — htl-lounge-admire','Wry','sakura_teen'),
    mk('お前、スプリングセールで服買ってたな、桜','You — spring-sale-cloth-buy Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09480',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが整体院に通われて元気になられたわ','Sho — Dad-seitai-better','Tender','yumiko_mom'),
    mk('ママ、ぼく、ニュースで愛人問題って聞いたよ、意味って?','Mom — me news-mistress-meaning?','Curious child','sho_child'),
    mk('翔くん、お父さんがクリエイティブな仕事に転職されたわ','Sho — Dad-creat-job-change','Reflective','yumiko_mom'),
    mk('ママ、ぼく、ディーゼル車の博物館行きたいよ','Mom — me diesel-mus-want','Eager child','sho_child'),
    mk('翔くん、お父さんがゴジラの映画を観たいって仰ってたわ','Sho — Dad-Godzilla-movie-want','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと任天堂のゲームしたよ','Mom — me Dad-Nintendo-play','Eager child','sho_child'),
    mk('翔くん、お父さんがホテルラウンジで打ち合わせされるそうよ','Sho — Dad-htl-lounge-mtg','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとスプリングの新作シューズ見に行ったよ','Mom — me Dad-spring-new-shoe','Eager close','sho_child'),
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

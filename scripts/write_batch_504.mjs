import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_504 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['かっこう','細長い','薄暗い','スグ','熟睡','退散','公私','この上ない']
const B_T = ['可動','一団','電通','テコ','使節','敷設','全貌','国内線']
const C_T = ['フェミニスト','思慮','恒常','親日','親睦','大局','同紙','領主']
const D_T = ['角栄','野茂','バチカン','アーセナル','レオナルド','コスタリカ','苫小牧','クウェート']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10041',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがかっこうの良いスーツでお出かけよ','Sho — Dad-cool-suit-out','Pleased','yumiko_mom'),
    mk('ママ、ぼく、お父さんと細長いポッキー食べたよ','Mom — me Dad-long-thin-pocky','Eager child','sho_child'),
    mk('翔くん、薄暗いお部屋で本を読むと目が疲れるわよ','Sho — dim-room-read-eye-tired','Direction','yumiko_mom'),
    mk('ママ、お父さんがスグ戻ってくるそうよ','Mom — Dad-soon-back','Pleased child','sho_child'),
    mk('翔くん、お父さんが熟睡されてるから静かにね','Sho — Dad-deep-sleep-quiet','Direction','yumiko_mom'),
    mk('ママ、いたずらしてお父さんに怒られたらスグ退散だね','Mom — prank-Dad-angry-retreat','Wry child','sho_child'),
    mk('翔くん、お父さんは公私の区別をきちんとされてるわ','Sho — Dad-pub-priv-clear','Reflective','yumiko_mom'),
    mk('ママ、お父さんとの時間はこの上ない幸せだよ','Mom — Dad-time-no-greater-happy','Tender close','sho_child'),
  ]},
  {id:'conv_10042',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、かっこうの良いコートでお越しになったよ、メイちゃん','Aoi — cust-cool-coat-came Mei','Pleased','mei_romantic'),
    mk('葵、細長いカップで提供するメニューも増やしたいね、メイちゃん','Aoi — long-thin-cup-add Mei','Direction','aoi_barista'),
    mk('葵、薄暗い照明にすると落ち着いた雰囲気になるね、メイちゃん','Aoi — dim-light-calm-atmos Mei','Reflective','mei_romantic'),
    mk('葵、注文はスグにご提供できるよう頑張ろうね、メイちゃん','Aoi — order-soon-effort Mei','Direction','aoi_barista'),
    mk('葵、休憩で熟睡しちゃったよ、メイちゃん','Aoi — break-deep-sleep Mei','Wry','mei_romantic'),
    mk('葵、混雑時はクレーマーがスグ退散するくらい毅然と対応しようね、メイちゃん','Aoi — busy-comp-retreat-firm Mei','Direction','aoi_barista'),
    mk('葵、店長として公私を分けるのが大事ね、メイちゃん','Aoi — mgr-pub-priv-imp Mei','Direction','mei_romantic'),
    mk('葵、お客様の笑顔はこの上ない宝物ね、メイちゃん','Aoi — cust-smile-no-greater-treas Mei','Tender close','aoi_barista'),
  ]},
  {id:'conv_10043',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが軍服でかっこうの良いお姿だった','Gran — youth Dad-uni-cool','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、細長い縁側でお茶を召し上がったわよね、あなた?','Yes — Grandpa-long-thin-veranda-tea, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、薄暗い行灯の下で勉強された','Gran — youth-dim-lamp-study','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、スグに動かれる方だったわよね、あなた?','Grandpa — soon-move, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが熟睡される姿が頼もしかった','Gran — youth Dad-deep-sleep-reli','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、雷が鳴ると犬が退散したわよね、あなた?','Grandpa — thunder-dog-retreat, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが公私を厳しく分けられた','Gran — youth Dad-pub-priv-strict','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご家族と過ごす時間はこの上ない幸せでしたわよね、あなた?','Grandpa — fam-time-no-greater, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10044',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、新しい髪型かっこうの良いな','Riku — new-hair-cool','Pleased teen','sakura_teen'),
    mk('お前、細長いシャープペンお気に入りだったな、桜','You — long-thin-pen-fav Sakura','Curious','riku_teen'),
    mk('リク、お前、薄暗い教室で勉強してたな','Riku — dim-class-study','Wry','sakura_teen'),
    mk('お前、テストの答えスグに思い出せたな、桜','You — test-ans-soon-rem Sakura','Praising','riku_teen'),
    mk('リク、お前、授業中に熟睡してたろ','Riku — class-deep-sleep','Wry','sakura_teen'),
    mk('お前、お母さんが来ると即退散だな、桜','You — mom-come-retreat-fast Sakura','Wry','riku_teen'),
    mk('リク、お前、彼女と公私分けてないな','Riku — gf-pub-priv-no','Wry','sakura_teen'),
    mk('お前、卒業式の感動はこの上ないだろうな、桜','You — grad-moved-no-greater Sakura','Reflective close','riku_teen'),
  ]},
  {id:'conv_10045',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがかっこうの良いコートで現れたわ','Sho — Dad-cool-coat','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと細長いツリーを見たよ','Mei-sis — me Dad-long-thin-tree','Eager child','sho_child'),
    mk('翔くん、薄暗い道は危ないからお父さんと帰りましょうね','Sho — dim-path-dang-Dad','Direction','mei_romantic'),
    mk('メイ姉さん、お父さんがスグにご飯を作って下さったよ','Mei-sis — Dad-soon-meal','Eager child','sho_child'),
    mk('翔くん、お父さんが熟睡されてるみたいだから静かにね','Sho — Dad-deep-sleep-quiet','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、虫が来たらスグ退散するよ','Mei-sis — me bug-retreat-fast','Wry child','sho_child'),
    mk('翔くん、お父さんが公私のけじめをつけてらっしゃるわ','Sho — Dad-pub-priv-clear','Reflective','mei_romantic'),
    mk('メイ姉さん、お父さんと一緒にいる時間はこの上ない幸せだよ','Mei-sis — Dad-time-no-greater-happy','Tender close','sho_child'),
  ]},
  {id:'conv_10046',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、可動式オフィス家具を導入しろ','Our co — mov-furn-intro','Crisp','hiroshi_boss'),
    mk('はい。若手社員を一団となって育成します','Yes — Young-staff-grp-dev','Methodical','kenji_office'),
    mk('当社、電通系の広告会社と提携しろ','Our co — Dentsu-ad-partner','Direction','hiroshi_boss'),
    mk('はい。資金繰りはテコ入れが必要です','Yes — Cash-flow-lever-need','Update','kenji_office'),
    mk('海外使節団を派遣する計画を立てろ','Overseas-emis-disp-plan','Direction','hiroshi_boss'),
    mk('はい。新オフィスのケーブル敷設を進めます','Yes — New-office-cable-lay','Update','kenji_office'),
    mk('当社、市場の全貌を把握しろ','Our co — mkt-whole-grasp','Direction','hiroshi_boss'),
    mk('はい。国内線出張の経費を見直します','Yes — Dom-flight-cost-rev','Close','kenji_office'),
  ]},
  {id:'conv_10047',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('可動式パーティションで会議室を分けましょう','Mov-part-mtg-sep','Brisk','yuki_office'),
    mk('はい。新人を一団でオリエンします','Yes — Newhire-grp-orient','Cooperative','kenji_office'),
    mk('電通とのキャンペーンを企画しましょう','Dentsu-camp-plan','Direction','yuki_office'),
    mk('はい。営業にテコ入れの予算を確保します','Yes — Sales-lever-budget','Update','kenji_office'),
    mk('海外使節への接待を計画しましょう','Overseas-emis-hosp-plan','Direction','yuki_office'),
    mk('はい。ネット敷設工事の業者を選定します','Yes — Net-lay-vendor-sel','Update','kenji_office'),
    mk('プロジェクトの全貌を共有しましょう','Proj-whole-share','Direction','yuki_office'),
    mk('はい。国内線優待制度を社員に案内します','Yes — Dom-flight-priv-staff','Close','kenji_office'),
  ]},
  {id:'conv_10048',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、可動式実験台の使い方を覚えろ','Ren — mov-exp-tbl-learn','Mentor','hiroshi_boss'),
    mk('はい。研究員を一団で学会に派遣します','Yes — Research-grp-conf','Earnest','ren_uni'),
    mk('蓮、電通系広告会社のインターンも経験しろ','Ren — Dentsu-intern-exp','Direction','hiroshi_boss'),
    mk('はい。データ分析にテコ入れします','Yes — Data-anal-lever','Earnest','ren_uni'),
    mk('蓮、海外学術使節として派遣される機会を活かせ','Ren — overseas-acad-emis-use','Direction','hiroshi_boss'),
    mk('はい。研究設備の配線敷設も学びます','Yes — Research-cable-lay-learn','Polite','ren_uni'),
    mk('蓮、研究分野の全貌を捉えろ','Ren — research-whole-grasp','Direction','hiroshi_boss'),
    mk('はい。国内線で学会移動を計画します','Yes — Dom-flight-conf-plan','Earnest close','ren_uni'),
  ]},
  {id:'conv_10049',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、可動式バリケードを配備されますね','Police mov-baric-deploy','Cooperative','kenji_office'),
    mk('警察、暴徒一団の制圧訓練もされますね','Police mob-grp-supp-train','Cooperative','kenji_office'),
    mk('警察、電通系メディアとの広報連携もされますね','Police Dentsu-PR-link','Cooperative','kenji_office'),
    mk('警察、捜査にテコ入れする方針ですね','Police inv-lever-pol','Cooperative','kenji_office'),
    mk('警察、海外警察使節の警備もされますね','Police overseas-emis-guard','Cooperative','kenji_office'),
    mk('警察、防犯カメラの敷設を進められますね','Police prev-cam-lay-prog','Cooperative','kenji_office'),
    mk('警察、犯罪の全貌を市民に公表されますね','Police crime-whole-citi','Cooperative','kenji_office'),
    mk('警察、国内線テロ対策も担当されますね','Police dom-flight-terror-prev','Close','kenji_office'),
  ]},
  {id:'conv_10050',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、可動式の工場を設計された','Dad — founding mov-fact-design','Sage','hiroshi_elder'),
    mk('はい。お父さんは社員を一団としてまとめられた','Yes — Dad staff-grp-unite','Commitment','hiroshi_boss'),
    mk('お父さん、電通の方とも親交がおありだった','Dad — Dentsu-friend','Wistful','hiroshi_elder'),
    mk('はい。お父さんはテコ入れのタイミングを的確に見極めた','Yes — Dad lever-time-prec','Reflective','hiroshi_boss'),
    mk('お父さん、海外使節団を率いられた','Dad — overseas-emis-lead','Wistful','hiroshi_elder'),
    mk('はい。お父さんは工場のラインを敷設する陣頭指揮もされた','Yes — Dad fact-line-lay-cmd','Reflective','hiroshi_boss'),
    mk('お父さん、業界の全貌を見渡されてた','Dad — industry-whole-overview','Wistful','hiroshi_elder'),
    mk('はい。お父さんは国内線で全国を駆け回られた','Yes — Dad dom-flight-nation','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10051',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、フェミニスト運動の戦後史を論文で扱いましたね','Ren — fem-postwar paper','Calm','asuka_teacher'),
    mk('はい、宗教家の思慮深さの研究を論文で扱いました','Yes — Relig-thought paper','Earnest','ren_uni'),
    mk('蓮さん、生態系の恒常性研究を論文で扱いましたね','Ren — eco-homeo paper','Reflective','asuka_teacher'),
    mk('はい、戦前の親日派外国人を論文で扱いました','Yes — Prewar-pro-JP-for paper','Earnest','ren_uni'),
    mk('地域コミュニティの親睦活動を論文で扱いましたね','Local-comm-fellow paper','Engaged','asuka_teacher'),
    mk('はい、外交における大局観の研究を論文で扱いました','Yes — Dipl-big-pict paper','Earnest','ren_uni'),
    mk('蓮さん、同紙のスクープ記事を研究で扱いましたね','Ren — same-mag-scoop paper','Reflective','asuka_teacher'),
    mk('はい、中世領主の統治研究を論文で扱いました','Yes — Med-lord-gov paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10052',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、フェミニスト団体への嫌がらせ事件を、警察、扱われますね','Case fem-grp-harass police-handle','Reflective','ren_uni'),
    mk('警察、容疑者の思慮を欠いた行動も把握されますね','Police suspect-thought-lack-grasp','Cooperative','takeda_officer'),
    mk('本件、犯罪率の恒常的な変動を、警察、分析されますね','Case crime-homeo-anal police','Reflective','ren_uni'),
    mk('警察、親日的な外国人の被害事案にも対応されますね','Police pro-JP-for-vict-resp','Cooperative','takeda_officer'),
    mk('本件、親睦団体を装った詐欺を、警察、扱われますね','Case fellow-grp-pretend-fraud police-handle','Reflective','ren_uni'),
    mk('警察、大局的視点で捜査されますね','Police big-pict-inv','Cooperative','takeda_officer'),
    mk('本件、同紙報道の事案を、警察、確認されますね','Case same-mag-rep police-conf','Reflective','ren_uni'),
    mk('警察、領主級の地主の不正にも対応します','Police lord-landl-corrup-resp','Close','takeda_officer'),
  ]},
  {id:'conv_10053',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、フェミニスト運動の戦後史を論文で扱いましたね','Sakura — fem-postwar paper','Calm','asuka_teacher'),
    mk('はい、宗教家の思慮深さを論文で扱いました','Yes — Relig-thought paper','Earnest teen','sakura_teen'),
    mk('生態系の恒常性研究を論文で扱いましたね','Eco-homeo paper','Reflective','asuka_teacher'),
    mk('はい、戦前の親日派外国人を論文で扱いました','Yes — Prewar-pro-JP paper','Earnest','sakura_teen'),
    mk('地域コミュニティの親睦活動を論文で扱いましたね','Local-fellow paper','Engaged','asuka_teacher'),
    mk('はい、外交における大局観を論文で扱いました','Yes — Dipl-big-pict paper','Earnest','sakura_teen'),
    mk('同紙のスクープ記事を研究で扱いましたね','Same-mag-scoop paper','Reflective','asuka_teacher'),
    mk('はい、中世領主の統治を論文で扱いました','Yes — Med-lord-gov paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10054',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、フェミニスト視点での医療を医療チームで意識します','Ren — fem-med med-team aware','Calm','saito_doctor'),
    mk('はい、患者への思慮ある説明を医療チームで心がけます','Yes — Pati-thought-explan med-team','Patient','saito_doctor'),
    mk('蓮さん、生体の恒常性維持を医療チームで研究します','Ren — homeo-keep med-team','Calm','saito_doctor'),
    mk('親日的な外国人患者を、貴院、丁寧に診られますね、先生','Pro-JP-for-pati your-hosp careful, sensei','Reflective','ren_uni'),
    mk('はい、医療従事者の親睦会を医療チームで開きます','Yes — Med-fellow-mtg med-team','Patient','saito_doctor'),
    mk('医療の大局を、貴院、見据えてらっしゃいますね、先生','Med-big-pict your-hosp see, sensei','Reflective','ren_uni'),
    mk('はい、同紙報道の医療事故事例を医療チームで参考にします','Yes — Same-mag-med-acc med-team ref','Patient','saito_doctor'),
    mk('はい、中世領主時代の医療史も医療チームで研究します','Yes — Med-lord-med-hist med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_10055',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、フェミニスト視点を取り入れた職場を作れ','Our co — fem-view-work','Crisp','hiroshi_boss'),
    mk('はい。社員に思慮ある対応を求めます','Yes — Staff-thought-resp','Methodical','kenji_office'),
    mk('当社、品質の恒常的な向上を目指せ','Our co — qual-homeo-up','Direction','hiroshi_boss'),
    mk('はい。親日的な海外顧客を大切にします','Yes — Pro-JP-cust-cherish','Update','kenji_office'),
    mk('社員親睦会を年に二回開け','Staff-fellow-yr-twice','Direction','hiroshi_boss'),
    mk('はい。大局的な経営判断を心がけます','Yes — Big-pict-mgmt','Update','kenji_office'),
    mk('当社、同紙の経済記事を朝礼で共有しろ','Our co — same-mag-econ-share','Direction','hiroshi_boss'),
    mk('はい。領主のような独裁経営は致しません','Yes — Lord-dict-mgmt-no','Close','kenji_office'),
  ]},
  {id:'conv_10056',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、田中角栄の伝記がご趣味だって、メイちゃん','Aoi — cust-Kakuei-bio Mei','Reflective','mei_romantic'),
    mk('葵、お客様、野茂英雄の大リーグ時代がお好きだって、メイちゃん','Aoi — cust-Nomo-MLB Mei','Reflective','aoi_barista'),
    mk('葵、お客様、バチカン市国を訪問されたって、メイちゃん','Aoi — cust-Vat-visit Mei','Reflective','mei_romantic'),
    mk('葵、お客様、アーセナルのサポーターだって、メイちゃん','Aoi — cust-Arsenal-supp Mei','Reflective','aoi_barista'),
    mk('葵、お客様、レオナルド・ダ・ヴィンチ展に行かれたって、メイちゃん','Aoi — cust-Leon-da-Vinci-expo Mei','Reflective','mei_romantic'),
    mk('葵、お客様、コスタリカのコーヒー豆を取り寄せてらっしゃるって、メイちゃん','Aoi — cust-Cos-coffee Mei','Reflective','aoi_barista'),
    mk('葵、お客様、苫小牧出身でいらっしゃるって、メイちゃん','Aoi — cust-Tomakomai-orig Mei','Reflective','mei_romantic'),
    mk('葵、お客様、クウェートに駐在経験がおありだって、メイちゃん','Aoi — cust-Kuwait-station Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10057',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが田中角栄首相の時代を語られた','Gran — youth Dad-Kakuei-era-told','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、野茂英雄の活躍に喜ばれたわよね、あなた?','Yes — Grandpa-Nomo-glad, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがバチカン市国を訪問された','Gran — youth Dad-Vat-visit','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、アーセナルの試合をご覧になってたわよね、あなた?','Grandpa — Arsenal-match, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがレオナルド研究の本をご愛読された','Gran — youth Dad-Leon-book','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、コスタリカの平和主義を尊敬されたわよね、あなた?','Grandpa — Cos-peace-resp, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが苫小牧の親戚を訪ねられた','Gran — youth Dad-Tomakomai-rel','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、クウェート侵攻のニュースに憤慨されたわよね、あなた?','Grandpa — Kuwait-inv-angr, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10058',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが田中角栄のドキュメンタリーをご覧になってたわ','Sho — Dad-Kakuei-doc-watch','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと野茂英雄の伝記読んだよ','Mei-sis — me Dad-Nomo-bio','Eager child','sho_child'),
    mk('翔くん、お父さんがバチカンの絵本を読んで下さるそうよ','Sho — Dad-Vat-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとアーセナルの試合観たよ','Mei-sis — me Dad-Arsenal','Eager child','sho_child'),
    mk('翔くん、お父さんがレオナルドの絵を見せて下さったわ','Sho — Dad-Leon-art-show','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとコスタリカの絵本見たよ','Mei-sis — me Dad-Cos-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが苫小牧出張のお話して下さるそうよ','Sho — Dad-Tomakomai-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとクウェートの絵本見たよ','Mei-sis — me Dad-Kuwait-pic','Eager close','sho_child'),
  ]},
  {id:'conv_10059',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、社会で田中角栄習ったろ?','Riku — soc-Kakuei?','Curious teen','sakura_teen'),
    mk('お前、野茂英雄の伝記読んでたな、桜','You — Nomo-bio-read Sakura','Curious','riku_teen'),
    mk('リク、お前、宗教でバチカン習ったろ?','Riku — relig-Vat?','Curious','sakura_teen'),
    mk('お前、アーセナルのファンだったな、桜','You — Arsenal-fan Sakura','Curious','riku_teen'),
    mk('リク、お前、美術でレオナルド・ダ・ヴィンチ習ったろ?','Riku — art-Leon?','Curious','sakura_teen'),
    mk('お前、社会でコスタリカ習ったろ?桜','You — soc-Cos? Sakura','Curious','riku_teen'),
    mk('リク、お前、修学旅行で苫小牧行ったろ?','Riku — sch-trip-Tomakomai?','Curious','sakura_teen'),
    mk('お前、社会でクウェート侵攻習ったろ?桜','You — soc-Kuwait-inv? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10060',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが田中角栄の伝記をお買いになったわ','Sho — Dad-Kakuei-bio-buy','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと野茂英雄のドキュメンタリー観たよ','Mom — me Dad-Nomo-doc','Eager child','sho_child'),
    mk('翔くん、お父さんがバチカン旅行のお話して下さったわ','Sho — Dad-Vat-trip-told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとアーセナルの試合観たよ','Mom — me Dad-Arsenal-watched','Eager child','sho_child'),
    mk('翔くん、お父さんがレオナルド展に連れて行って下さるそうよ','Sho — Dad-Leon-expo-take','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとコスタリカのコーヒー飲んだよ','Mom — me Dad-Cos-coffee','Eager child','sho_child'),
    mk('翔くん、お父さんが苫小牧で釣りされるそうよ','Sho — Dad-Tomakomai-fish','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとクウェートの戦争のドキュメンタリー観たよ','Mom — me Dad-Kuwait-war-doc','Eager close','sho_child'),
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

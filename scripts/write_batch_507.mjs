import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_507 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['蛇足','悪し','男前','わが子','惨め','見分ける','読み取る','老若男女']
const B_T = ['逆襲','脱落','総統','総督','ゆだね','波乱','バイパス','リバウンド']
const C_T = ['カーボン','絶頂','アカデミック','水域','右折','前兆','全裸','盲目']
const D_T = ['カフカ','スマトラ','フィレンツェ','朝鮮日報','ヤコブ','パシフィック','トリビア','バッジ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10101',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんに余計な蛇足を言うのは控えようね','Sho — Dad-extra-snake-no','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんが「これは悪し方じゃない」と仰ったよ','Mom — me Dad-"not-bad"-said','Reflective child','sho_child'),
    mk('翔くん、お父さんは本当に男前ね','Sho — Dad-handsome','Tender','yumiko_mom'),
    mk('ママ、お父さんがわが子のために頑張ってらっしゃるよ','Mom — Dad-own-kid-effort','Tender child','sho_child'),
    mk('翔くん、ふざけて惨めな思いをさせないようにね','Sho — prank-mis-not','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんの本気と冗談を見分けるの上手だよ','Mom — me Dad-serious-joke-tell-good','Eager child','sho_child'),
    mk('翔くん、お父さんの心を読み取るのは大事よ','Sho — Dad-heart-read-imp','Direction','yumiko_mom'),
    mk('ママ、ぼく、お祭りで老若男女が楽しんでたよ','Mom — me fest-all-ages-enjoy','Eager close','sho_child'),
  ]},
  {id:'conv_10102',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、説明に蛇足はいらないって仰ってたよ、メイちゃん','Aoi — cust-explan-snake-no-said Mei','Reflective','mei_romantic'),
    mk('葵、悪しき習慣は早めに改めようね、メイちゃん','Aoi — bad-hab-early-fix Mei','Direction','aoi_barista'),
    mk('葵、お客様、男前のジャズ歌手だって、メイちゃん','Aoi — cust-handsome-jazz Mei','Pleased','mei_romantic'),
    mk('葵、お客様、わが子のためにポイント貯めてるって、メイちゃん','Aoi — cust-own-kid-points Mei','Tender','aoi_barista'),
    mk('葵、ミスでお客様を惨めな気持ちにさせないようにしよう、メイちゃん','Aoi — mistake-cust-mis-not Mei','Direction','mei_romantic'),
    mk('葵、本物のコーヒー豆と粉を見分ける目が大事ね、メイちゃん','Aoi — real-bean-pow-tell-eye Mei','Direction','aoi_barista'),
    mk('葵、お客様の表情を読み取る力をつけようね、メイちゃん','Aoi — cust-face-read-skill Mei','Direction','mei_romantic'),
    mk('葵、老若男女のお客様に愛されるお店にしよう、メイちゃん','Aoi — all-ages-cust-loved Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_10103',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは蛇足な事を言わない方だった','Gran — youth Dad-snake-no','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、悪しき慣習を改めようとされたわよね、あなた?','Yes — Grandpa-bad-hab-fix, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは「男前」と評判だった','Gran — youth Dad-handsome-fame','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、わが子のために生涯尽くされたわよね、あなた?','Grandpa — own-kid-life, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが惨めな思いをした日もあった','Gran — youth Dad-mis-days','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様の表情を見分けるのが上手だったわよね、あなた?','Grandpa — grandkid-face-tell-good, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが手紙の行間を読み取る方だった','Gran — youth Dad-letter-read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、村祭りでは老若男女と分け隔てなく接したわよね、あなた?','Grandpa — vil-fest-all-ages-equal, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10104',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前の発言、蛇足が多すぎだぞ','Riku — speak-snake-too','Wry teen','sakura_teen'),
    mk('お前、悪しき癖直せよ、桜','You — bad-hab-fix Sakura','Direction','riku_teen'),
    mk('リク、お前、男前だなって彼女に言われてたな','Riku — handsome-gf-said','Pleased','sakura_teen'),
    mk('お前、わが子に対するお母さんみたいに弟可愛がるな、桜','You — own-kid-like-mom-bro-love Sakura','Wry','riku_teen'),
    mk('リク、お前、テストで惨めな点取ってたな','Riku — test-mis-score','Wry','sakura_teen'),
    mk('お前、本物と偽物を見分ける目あるな、桜','You — real-fake-tell-eye Sakura','Praising','riku_teen'),
    mk('リク、お前、先生の機嫌を読み取るのが上手いな','Riku — tch-mood-read-good','Praising','sakura_teen'),
    mk('お前、文化祭で老若男女に大人気だったな、桜','You — cult-fest-all-ages-pop Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_10105',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんの説明に蛇足はないわね','Sho — Dad-explan-snake-no','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、悪しき言葉を使わないように気を付けるよ','Mei-sis — me bad-words-avoid','Earnest child','sho_child'),
    mk('翔くん、お父さんは本当に男前で誇らしいわ','Sho — Dad-handsome-proud','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんがわが子のように接して下さるよ','Mei-sis — me Dad-own-kid-treat','Tender child','sho_child'),
    mk('翔くん、惨めな気持ちにならないようにメイ姉さんがいるわ','Sho — mis-not-Mei-sis-here','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんの言葉の真意を見分ける練習してるよ','Mei-sis — me Dad-words-true-tell-prac','Earnest child','sho_child'),
    mk('翔くん、お父さんの心を読み取れる優しい子になってね','Sho — Dad-heart-read-kind-kid','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、公園で老若男女が遊んでるのを見たよ','Mei-sis — me park-all-ages-play','Eager close','sho_child'),
  ]},
  {id:'conv_10106',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、市場での逆襲を狙え','Our co — mkt-counter-aim','Crisp','hiroshi_boss'),
    mk('はい。新人の脱落を防ぐ研修を強化します','Yes — Newhire-drop-prev-train','Methodical','kenji_office'),
    mk('当社、海外取引先の総統就任にも対応しろ','Our co — overseas-pres-resp','Direction','hiroshi_boss'),
    mk('はい。新総督の任命式に出席します','Yes — New-gov-cere-att','Update','kenji_office'),
    mk('当社、新規事業を若手にゆだねろ','Our co — new-biz-young-trust','Direction','hiroshi_boss'),
    mk('はい。波乱含みの市場でも対応します','Yes — Turb-mkt-resp','Update','kenji_office'),
    mk('物流のバイパスルートを確保しろ','Log-bypass-sec','Direction','hiroshi_boss'),
    mk('はい。シェアのリバウンドを狙います','Yes — Share-reb-aim','Close','kenji_office'),
  ]},
  {id:'conv_10107',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('シェア逆襲のキャンペーンを準備しましょう','Share-counter-camp-prep','Brisk','yuki_office'),
    mk('はい。研修で脱落者を出さないよう工夫します','Yes — Train-drop-not-impr','Cooperative','kenji_office'),
    mk('総統選挙の動向を共有しましょう','Pres-elect-share','Direction','yuki_office'),
    mk('はい。植民地時代の総督史も社員向け雑学に追加します','Yes — Col-gov-trivia-add','Update','kenji_office'),
    mk('新人にも責任をゆだねていきましょう','Newhire-trust-prog','Direction','yuki_office'),
    mk('はい。波乱含みの一年でしたが乗り切ります','Yes — Turb-yr-overcome','Update','kenji_office'),
    mk('物流のバイパス経路を地図化しましょう','Log-bypass-map','Direction','yuki_office'),
    mk('はい。下落後のリバウンドを期待しています','Yes — Decl-reb-exp','Close','kenji_office'),
  ]},
  {id:'conv_10108',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、批判への逆襲は論文で示せ','Ren — crit-counter-paper','Mentor','hiroshi_boss'),
    mk('はい。同期生の脱落を防ぐ仲間意識を育てます','Yes — Peer-drop-supp','Earnest','ren_uni'),
    mk('蓮、研究所トップを総統に例えるな','Ren — research-top-pres-no-compare','Direction','hiroshi_boss'),
    mk('はい。植民地時代の総督研究もテーマです','Yes — Col-gov-res-theme','Earnest','ren_uni'),
    mk('蓮、後輩に研究の一部をゆだねろ','Ren — junior-research-trust','Direction','hiroshi_boss'),
    mk('はい。実験結果に波乱もありますが続けます','Yes — Exp-turb-cont','Polite','ren_uni'),
    mk('蓮、論文のバイパス的読み方も習得しろ','Ren — paper-bypass-learn','Direction','hiroshi_boss'),
    mk('はい。仮説のリバウンド検証もおこないます','Yes — Hyp-reb-verify','Earnest close','ren_uni'),
  ]},
  {id:'conv_10109',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、犯罪組織への逆襲捜査もされますね','Police crime-counter-inv','Cooperative','kenji_office'),
    mk('警察、訓練生の脱落者支援もされますね','Police trainee-drop-supp','Cooperative','kenji_office'),
    mk('警察、新総統就任時の警備もされますね','Police new-pres-guard','Cooperative','kenji_office'),
    mk('警察、植民地時代の総督記録も整理されますね','Police col-gov-rec-org','Cooperative','kenji_office'),
    mk('警察、現場対応を若手にゆだねる事もありますね','Police scene-young-trust','Cooperative','kenji_office'),
    mk('警察、市内の波乱含みの抗議活動を警備されますね','Police city-turb-prot-guard','Cooperative','kenji_office'),
    mk('警察、緊急車両のバイパス通行訓練もされますね','Police emerg-bypass-train','Cooperative','kenji_office'),
    mk('警察、再犯のリバウンドを抑制されますね','Police reoff-reb-suppr','Close','kenji_office'),
  ]},
  {id:'conv_10110',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、業界に逆襲を仕掛けられた','Dad — founding industry-counter','Sage','hiroshi_elder'),
    mk('はい。お父さんは社員の脱落を防がれた','Yes — Dad staff-drop-prev','Commitment','hiroshi_boss'),
    mk('お父さん、独裁的な総統経営はされなかった','Dad — dict-pres-mgmt-no','Wistful','hiroshi_elder'),
    mk('はい。お父さんは旧総督府関係の縁を大事にされた','Yes — Dad old-gov-rel-cherish','Reflective','hiroshi_boss'),
    mk('お父さん、若手に責任をゆだねる勇気をお持ちだった','Dad — young-trust-brave','Wistful','hiroshi_elder'),
    mk('はい。お父さんは波乱の時代を乗り切られた','Yes — Dad turb-era-overcome','Reflective','hiroshi_boss'),
    mk('お父さん、物流のバイパス網を整備された','Dad — log-bypass-prep','Wistful','hiroshi_elder'),
    mk('はい。お父さんは不況のリバウンドを的確に捉えられた','Yes — Dad recess-reb-prec','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10111',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、カーボンナノチューブの応用研究を論文で扱いましたね','Ren — carbon-nano-app paper','Calm','asuka_teacher'),
    mk('はい、音楽家の絶頂期の研究を論文で扱いました','Yes — Music-peak paper','Earnest','ren_uni'),
    mk('蓮さん、アカデミックな評価基準を論文で扱いましたね','Ren — acad-std paper','Reflective','asuka_teacher'),
    mk('はい、領海水域の国際法を論文で扱いました','Yes — Terr-wat-intl-law paper','Earnest','ren_uni'),
    mk('交差点の右折事故統計を論文で扱いましたね','Intersection-right-acc paper','Engaged','asuka_teacher'),
    mk('はい、地震の前兆現象研究を論文で扱いました','Yes — Quake-pre-paper','Earnest','ren_uni'),
    mk('蓮さん、全裸彫刻の美術史を論文で扱いましたね','Ren — nude-sculpt paper','Reflective','asuka_teacher'),
    mk('はい、盲目の音楽家の研究を論文で扱いました','Yes — Blind-music paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10112',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、カーボン製の凶器を、警察、鑑識されますね','Case carbon-weapon police-forensic','Reflective','ren_uni'),
    mk('警察、絶頂期の芸能人を狙う詐欺も担当されますね','Police peak-celeb-fraud','Cooperative','takeda_officer'),
    mk('本件、アカデミックな専門家のご鑑定を、警察、依頼されますね','Case acad-expert-forensic police-req','Reflective','ren_uni'),
    mk('警察、領海水域での密漁を取り締まりますね','Police terr-wat-poach-strict','Procedural','takeda_officer'),
    mk('本件、交差点での右折事故、警察、対応されますね','Case intersect-right-acc police-resp','Reflective','ren_uni'),
    mk('警察、犯行の前兆を見逃さず捜査されますね','Police crime-pre-notice','Cooperative','takeda_officer'),
    mk('本件、全裸での走行など迷惑行為を、警察、扱われますね','Case nude-street-trouble police-handle','Reflective','ren_uni'),
    mk('警察、盲目の被害者のサポートにも当たられますね','Police blind-vict-supp','Close','takeda_officer'),
  ]},
  {id:'conv_10113',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、カーボンナノチューブの応用を論文で扱いましたね','Sakura — carbon-nano paper','Calm','asuka_teacher'),
    mk('はい、音楽家の絶頂期の研究を論文で扱いました','Yes — Music-peak paper','Earnest teen','sakura_teen'),
    mk('アカデミックな評価基準を論文で扱いましたね','Acad-std paper','Reflective','asuka_teacher'),
    mk('はい、領海水域の国際法を論文で扱いました','Yes — Terr-wat paper','Earnest','sakura_teen'),
    mk('交差点の右折事故統計を論文で扱いましたね','Intersect-right paper','Engaged','asuka_teacher'),
    mk('はい、地震の前兆現象研究を論文で扱いました','Yes — Quake-pre paper','Earnest','sakura_teen'),
    mk('全裸彫刻の美術史を論文で扱いましたね','Nude-sculpt paper','Reflective','asuka_teacher'),
    mk('はい、盲目の音楽家の研究を論文で扱いました','Yes — Blind-music paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10114',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、カーボンファイバー医療器具を医療チームで採用します','Ren — carbon-fib-med med-team','Calm','saito_doctor'),
    mk('はい、患者が絶頂期に病を発見する事例も医療チームで扱います','Yes — Pati-peak-dis med-team','Patient','saito_doctor'),
    mk('蓮さん、アカデミックな診断基準を医療チームで遵守します','Ren — acad-diag-std med-team','Calm','saito_doctor'),
    mk('はい、海水浴水域での溺水救急を医療チームで対応します','Yes — Wat-area-drown med-team','Patient','saito_doctor'),
    mk('右折車との衝突事故患者を、貴院、救急で受けられますね、先生','Right-veh-acc-ER your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、心臓発作の前兆症状を医療チームで丁寧に問診します','Yes — Heart-pre-asses med-team','Patient','saito_doctor'),
    mk('全裸での徘徊患者を、貴院、保護されますね、先生','Nude-wander-pati your-hosp prot, sensei','Reflective','ren_uni'),
    mk('はい、盲目患者のリハビリを医療チームで担当します','Yes — Blind-rehab med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_10115',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、カーボンニュートラル経営を目指せ','Our co — carbon-neutral-aim','Crisp','hiroshi_boss'),
    mk('はい。業績絶頂期にも気を緩めません','Yes — Perf-peak-no-relax','Methodical','kenji_office'),
    mk('当社、アカデミックな研究機関と提携しろ','Our co — acad-inst-partner','Direction','hiroshi_boss'),
    mk('はい。事業展開の水域を慎重に見極めます','Yes — Biz-wat-careful-judg','Update','kenji_office'),
    mk('当社、利益率の右折、つまり方向転換を検討しろ','Our co — prof-right-pivot-cons','Direction','hiroshi_boss'),
    mk('はい。市場崩壊の前兆を察知します','Yes — Mkt-coll-pre-sense','Update','kenji_office'),
    mk('当社、全裸の真実をデータで示せ','Our co — nude-truth-data','Direction','hiroshi_boss'),
    mk('はい。市場の盲目的追随は致しません','Yes — Mkt-blind-follow-no','Close','kenji_office'),
  ]},
  {id:'conv_10116',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、カフカの小説がご趣味だって、メイちゃん','Aoi — cust-Kafka-novel Mei','Reflective','mei_romantic'),
    mk('葵、お客様、スマトラ島のコーヒー豆を取り寄せてらっしゃるって、メイちゃん','Aoi — cust-Sumatra-bean Mei','Reflective','aoi_barista'),
    mk('葵、お客様、フィレンツェの美術館巡りがご趣味だって、メイちゃん','Aoi — cust-Florence-mus Mei','Reflective','mei_romantic'),
    mk('葵、お客様、朝鮮日報を毎日読まれてるって、メイちゃん','Aoi — cust-Chosun-daily Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ヤコブの梯子という雲を撮りに行かれるって、メイちゃん','Aoi — cust-Jacob-ladder Mei','Reflective','mei_romantic'),
    mk('葵、お客様、パシフィックリーグのファンだって、メイちゃん','Aoi — cust-Pac-Lg Mei','Reflective','aoi_barista'),
    mk('葵、お客様、トリビアの泉がお好きだって、メイちゃん','Aoi — cust-trivia-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お子様がバッジを集めてらっしゃるって、メイちゃん','Aoi — cust-kid-badge Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_10117',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがカフカの変身を愛読された','Gran — youth Dad-Kafka-Metam','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、スマトラ島出張のお話されたわよね、あなた?','Yes — Grandpa-Sumatra-trip-told, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがフィレンツェへの新婚旅行を望まれた','Gran — youth Dad-Florence-honey-wish','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、朝鮮日報の社説を読まれたわよね、あなた?','Grandpa — Chosun-ed-read, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがヤコブの梯子の話を聖書から教えて下さった','Gran — youth Dad-Jacob-ladder-Bible','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、パシフィックリーグの試合を楽しまれたわよね、あなた?','Grandpa — Pac-Lg-fun, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがトリビア知識を披露された','Gran — youth Dad-trivia-show','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様のバッジを大切に保管されたわよね、あなた?','Grandpa — grandkid-badge-keep, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10118',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがカフカの絵本を読んで下さるそうよ','Sho — Dad-Kafka-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとスマトラの絵本見たよ','Mei-sis — me Dad-Sumatra-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがフィレンツェの絵葉書を下さったわ','Sho — Dad-Florence-postcard','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと朝鮮日報の記事見たよ','Mei-sis — me Dad-Chosun-art','Eager child','sho_child'),
    mk('翔くん、お父さんがヤコブの梯子の絵本読んで下さるそうよ','Sho — Dad-Jacob-ladder-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとパシフィックリーグ観たよ','Mei-sis — me Dad-Pac-Lg','Eager child','sho_child'),
    mk('翔くん、お父さんがトリビアな話して下さるそうよ','Sho — Dad-trivia-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんがピンバッジを下さったよ','Mei-sis — me Dad-pin-badge','Eager close','sho_child'),
  ]},
  {id:'conv_10119',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、国語でカフカ読まされたな','Riku — JP-Kafka','Curious teen','sakura_teen'),
    mk('お前、社会でスマトラ島地震習ったろ?桜','You — soc-Sumatra-quake? Sakura','Curious','riku_teen'),
    mk('リク、お前、フィレンツェのレオナルド展行ったろ','Riku — Florence-Leon-expo?','Curious','sakura_teen'),
    mk('お前、朝鮮日報の英訳ニュース読んでたな、桜','You — Chosun-Eng-read Sakura','Curious','riku_teen'),
    mk('リク、お前、聖書でヤコブの梯子習ったろ?','Riku — Bible-Jacob?','Curious','sakura_teen'),
    mk('お前、パシフィックリーグのファンだったな、桜','You — Pac-Lg-fan Sakura','Curious','riku_teen'),
    mk('リク、お前、トリビアクイズ得意だったな','Riku — trivia-quiz-good','Praising','sakura_teen'),
    mk('お前、ピンバッジ集めてたな、桜','You — pin-badge-coll Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10120',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがカフカの本を貸して下さったわ','Sho — Dad-Kafka-book-lend','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとスマトラの絵本見たよ','Mom — me Dad-Sumatra-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがフィレンツェ旅行のお話して下さったわ','Sho — Dad-Florence-trip-told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと朝鮮日報の翻訳記事見たよ','Mom — me Dad-Chosun-trans','Eager child','sho_child'),
    mk('翔くん、お父さんがヤコブの梯子の伝記を貸して下さったわ','Sho — Dad-Jacob-ladder-bio-lend','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとパシフィックリーグ観たよ','Mom — me Dad-Pac-Lg','Eager child','sho_child'),
    mk('翔くん、お父さんがトリビアな雑学を披露されたわ','Sho — Dad-trivia-show','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと記念バッジ買ったよ','Mom — me Dad-mem-badge','Eager close','sho_child'),
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

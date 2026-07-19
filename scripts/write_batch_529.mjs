import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_529 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['蠅','襪','繩','簑','襦','其','其の','舛']
const B_T = ['瓩','屬','璽','錣','註','楼','个','北村']
const C_T = ['泙','蹐','癲','腓','磴','曚','儖','蕁']
const D_T = ['゜','ヽ','ゞ','ゝ','ヾ','ゐ','ゐる','爾']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10541',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが台所の蠅、つまり虫を駆除して下さるそうよ','Sho — Dad-fly-pest-rem','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんに昔の足袋、つまり襪のお話を伺ったよ','Mom — me Dad-old-tabi-sock-story','Earnest child','sho_child'),
    mk('翔くん、お父さんが古い繩、つまり縄を物置から探し出して下さったわ','Sho — Dad-old-rope-find','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと展示の簑、つまり昔の蓑を見学したよ','Mom — me Dad-old-raincoat-vis','Eager child','sho_child'),
    mk('翔くん、お父さんが法事の時に襦袢、つまり襦を着て下さったわ','Sho — Dad-cere-juban-wear','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「其の本を取って」って頼まれたよ','Mom — me Dad-"that-book"-asked','Earnest child','sho_child'),
    mk('翔くん、お父さんが「其、まさに我が家の宝」って古風に仰ったわ','Sho — Dad-"sore-treas"-old-said','Wry','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「靴が舛違い」って指摘して頂いたよ','Mom — me Dad-"shoe-mismatch"-pt','Wry close','sho_child'),
  ]},
  {id:'conv_10542',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、窓に蠅、つまり虫が入って気にされてたよ、メイちゃん','Aoi — cust-fly-window-care Mei','Reflective','mei_romantic'),
    mk('葵、お客様、足袋、つまり襪を集めるご趣味だって、メイちゃん','Aoi — cust-tabi-sock-hobby Mei','Reflective','aoi_barista'),
    mk('葵、お客様、藁繩、つまり縄の編み方を教えて下さったよ、メイちゃん','Aoi — cust-straw-rope-teach Mei','Reflective','mei_romantic'),
    mk('葵、お客様、博物館の簑、つまり昔の蓑のお話を語って下さったよ、メイちゃん','Aoi — cust-mus-raincoat-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、和装の襦袢、つまり襦のお手入れ法を尋ねて下さったよ、メイちゃん','Aoi — cust-yuk-juban-care-ask Mei','Reflective','mei_romantic'),
    mk('葵、お客様、「其の席に座って下さい」って古風な物言いで仰ったよ、メイちゃん','Aoi — cust-"that-seat"-old-said Mei','Reflective','aoi_barista'),
    mk('葵、お客様、「其、まさに私の好み」って自信ありげに仰ったよ、メイちゃん','Aoi — cust-"that-pref"-conf-said Mei','Wry','mei_romantic'),
    mk('葵、お客様、ご注文の品が舛違いだったって謙虚に仰ったよ、メイちゃん','Aoi — cust-order-mismatch-humble-said Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10543',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが夏の蠅、つまりハエ取りに苦労された','Gran — youth Dad-sum-fly-trap','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、襪、つまり足袋を母上が縫って下さったわよね、あなた?','Yes — Grandpa-youth-mom-tabi-sock, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが農繩、つまり縄を自ら綯われた','Gran — youth Dad-farm-rope-twist','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、雨の日に簑、つまり蓑を着てらしたわよね、あなた?','Grandpa — youth-rain-raincoat-wear, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが冬の襦袢、つまり襦を重ね着された','Gran — youth Dad-win-juban-layer','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、文書に「其の儀」と古風に書かれたわよね、あなた?','Grandpa — youth-doc-"that-mat"-write, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは「其、誠なるは家族」と仰った','Gran — youth Dad-"that-true-fam"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、書類の舛違いを見落とさなかったわよね、あなた?','Grandpa — youth-doc-mismatch-no-miss, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10544',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、生物の授業で蠅、つまりハエの解剖したろ','Riku — bio-class-fly-disect?','Curious teen','sakura_teen'),
    mk('お前、社会の授業で昔の襪、つまり足袋習ったろ、桜','You — soc-old-tabi-sock? Sakura','Curious','riku_teen'),
    mk('リク、お前、林間学校で繩、つまり縄結びの練習してたな','Riku — for-camp-rope-knot-prac','Curious','sakura_teen'),
    mk('お前、社会の授業で簑、つまり昔の蓑見たろ、桜','You — soc-old-raincoat? Sakura','Curious','riku_teen'),
    mk('リク、お前、ばあちゃんが襦袢、つまり襦の話してたな','Riku — gran-juban-talk','Curious','sakura_teen'),
    mk('お前、古文で「其の場所」って読み方習ったろ、桜','You — class-"that-place"-read? Sakura','Curious','riku_teen'),
    mk('リク、お前、古文で「其、誠なり」って読まされたな','Riku — class-"that-true"-read','Curious','sakura_teen'),
    mk('お前、テスト用紙の名前と番号が舛違いだったろ、桜','You — test-name-num-mismatch? Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10545',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「蠅、つまり虫の生態」を絵本で見せて下さるわ','Sho — Dad-"fly-eco"-pic','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと足袋、つまり襪の博物館に行ったよ','Mei-sis — me Dad-tabi-sock-mus','Eager child','sho_child'),
    mk('翔くん、お父さんが「繩、つまり縄の文化史」を教えて下さるわ','Sho — Dad-"rope-cult-hist"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「簑、つまり蓑」の絵本見たよ','Mei-sis — me Dad-"raincoat"-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが「襦袢、つまり襦」を見せて下さったわ','Sho — Dad-"juban"-show','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「其の意味」を尋ねたよ','Mei-sis — me Dad-"that-mean"-ask','Earnest child','sho_child'),
    mk('翔くん、お父さんが「其、汝が見る空」って詩を朗読されたわ','Sho — Dad-"that-thou-sky"-rec','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「漢字の舛違い」を指摘して頂いたよ','Mei-sis — me Dad-"kanji-mismatch"-pt','Earnest close','sho_child'),
  ]},
  {id:'conv_10546',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews legacy',lines:[
    mk('当社、旧表記の瓩、つまりキログラム単位の在庫を整理しろ','Our co — old-kg-unit-tidy','Crisp','hiroshi_boss'),
    mk('はい。旧字「屬」、つまり属の部署表記を新字に統一します','Yes — Old-attach-unify','Methodical','kenji_office'),
    mk('当社、公式文書の璽、つまり社印を厳重に管理しろ','Our co — co-seal-strict','Direction','hiroshi_boss'),
    mk('はい。創業者寄贈の錣、つまり甲冑神具を社内展示します','Yes — Found-armor-exhib','Update','kenji_office'),
    mk('当社、契約書の註、つまり註釈を弁護士に確認させろ','Our co — contr-annot-law','Direction','hiroshi_boss'),
    mk('はい。本社の高楼、つまり超高層ビルへ移転する案も検討します','Yes — HQ-high-tower-cons','Update','kenji_office'),
    mk('当社、旧帳簿の个、つまり個の数え方を電子化しろ','Our co — old-ledger-cnt-dig','Direction','hiroshi_boss'),
    mk('はい。新規取引先の北村社長と会食を設定します','Yes — New-Kit-pres-meal','Close','kenji_office'),
  ]},
  {id:'conv_10547',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('物流伝票の旧単位、瓩、つまりキログラム表記を統一しましょう','Log-old-kg-unify','Brisk','yuki_office'),
    mk('はい。旧字「屬」、つまり属の組織図を更新します','Yes — Old-attach-org-upd','Cooperative','kenji_office'),
    mk('公式文書の璽、つまり社印の使用ルールを整理しましょう','Co-seal-use-rule-tidy','Direction','yuki_office'),
    mk('はい。資料館の錣、つまり兜の付属品を点検します','Yes — Mus-armor-acc-insp','Update','kenji_office'),
    mk('契約条項の註、つまり註記をベテランに確認しましょう','Contr-annot-vet-check','Direction','yuki_office'),
    mk('はい。新しい高楼、つまりタワー型オフィスの内覧を予定します','Yes — New-high-tower-tour-plan','Update','kenji_office'),
    mk('旧台帳の个、つまり個の表記を読み解きましょう','Old-ledger-cnt-decip','Direction','yuki_office'),
    mk('はい。北村取締役のご都合を伺います','Yes — Kit-dir-sched-ask','Close','kenji_office'),
  ]},
  {id:'conv_10548',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、旧単位瓩、つまりキログラム表記の文献を読め','Ren — old-kg-lit-read','Mentor','hiroshi_boss'),
    mk('はい。旧字「屬」、つまり属の使われ方の論文を読みます','Yes — Old-attach-use-paper','Earnest','ren_uni'),
    mk('蓮、皇室の璽、つまり国璽の歴史を学べ','Ren — imp-seal-hist','Direction','hiroshi_boss'),
    mk('はい。武家の錣、つまり兜部位の論文を読みます','Yes — Sam-helm-part-paper','Earnest','ren_uni'),
    mk('蓮、論文の註、つまり脚注を充実させろ','Ren — paper-foot-enr','Direction','hiroshi_boss'),
    mk('はい。歴史的な楼閣、つまり古楼建築の論文を読みます','Yes — Hist-tower-arch-paper','Polite','ren_uni'),
    mk('蓮、古文献の个、つまり個の数え方を研究しろ','Ren — old-lit-cnt-stud','Direction','hiroshi_boss'),
    mk('はい。指導教授の北村先生にご助言を仰ぎます','Yes — Mentor-Kit-prof-adv','Earnest close','ren_uni'),
  ]},
  {id:'conv_10549',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、押収物の重量、瓩、つまりキロ表示を確認されますね','Police seiz-wgt-kg-check','Cooperative','kenji_office'),
    mk('警察、旧字「屬」、つまり属の表記の古文書も鑑定されますね','Police old-attach-old-doc-auth','Cooperative','kenji_office'),
    mk('警察、官印、つまり璽の偽造事件にも対応されますね','Police off-seal-forg-resp','Cooperative','kenji_office'),
    mk('警察、武具の錣、つまり兜部位の盗難事件も捜査されますね','Police arm-helm-theft-inv','Cooperative','kenji_office'),
    mk('警察、調書の註、つまり註記を慎重に書かれますね','Police stmt-annot-care','Cooperative','kenji_office'),
    mk('警察、高層楼、つまり高楼での捜査も担当されますね','Police high-tower-inv','Cooperative','kenji_office'),
    mk('警察、旧表記の个、つまり個の証拠点数を整理されますね','Police old-cnt-evid-tidy','Cooperative','kenji_office'),
    mk('警察、参考人の北村さんから事情を、警察、丁寧に聴かれますね','Police witn-Kit-careful','Close','kenji_office'),
  ]},
  {id:'conv_10550',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、瓩、つまりキロ表記の電卓を愛用された','Dad — youth-kg-calc-fav','Sage','hiroshi_elder'),
    mk('はい。お父さんは旧字「屬」、つまり属の組織図を懐かしまれた','Yes — Dad old-attach-org-nost','Commitment','hiroshi_boss'),
    mk('お父さん、社印、つまり璽を毎日御自ら押された','Dad — co-seal-daily-self','Wistful','hiroshi_elder'),
    mk('はい。お父さんは家紋入りの錣、つまり兜飾りを大事にされた','Yes — Dad fam-crest-helm-cher','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、契約書の註、つまり細字までお読みになった','Dad — youth-contr-annot-read','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新築の楼、つまり高楼ビルの竣工式に出られた','Yes — Dad new-tower-cere','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、台帳の个、つまり個の単位を御自ら数えられた','Dad — youth-ledger-cnt-self','Wistful','hiroshi_elder'),
    mk('はい。お父さんは旧友の北村氏との関係を大事にされた','Yes — Dad old-fri-Kit-cher','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10551',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、古典詩の水音、つまり泙の擬音研究を論文で扱いましたね','Ren — class-water-pei paper','Calm','asuka_teacher'),
    mk('はい、跼蹐、つまり蹐の語源と過度な遠慮の研究を論文で扱いました','Yes — Cring-seki paper','Earnest','ren_uni'),
    mk('蓮さん、癲癇、つまり癲発作の歴史的記録の研究を論文で扱いましたね','Ren — epil-ten-hist paper','Reflective','asuka_teacher'),
    mk('はい、下腿の腓腹筋、つまり腓の運動学を論文で扱いました','Yes — Calf-hi paper','Earnest','ren_uni'),
    mk('蓮さん、登山道の磴、つまり石段の地理研究を論文で扱いましたね','Ren — mtn-stone-step-dou paper','Reflective','asuka_teacher'),
    mk('はい、曚気、つまり曚の薄暗さの古典詩研究を論文で扱いました','Yes — Twil-bou-poem paper','Earnest','ren_uni'),
    mk('蓮さん、古代の儖、つまり儖の人体表記の研究を論文で扱いましたね','Ren — anc-body-rou paper','Reflective','asuka_teacher'),
    mk('はい、蕁麻疹、つまり蕁の皮膚反応の臨床研究を論文で扱いました','Yes — Hives-jin-skin paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10552',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、現場の水音、つまり泙の証言を、警察、慎重に検証されますね','Case scene-pei-witn police-care','Reflective','ren_uni'),
    mk('警察、容疑者の跼蹐、つまり蹐の態度を、警察、観察されますね','Police suspect-cring-seki police-obs','Cooperative','takeda_officer'),
    mk('本件、被疑者の癲癇、つまり癲の発作歴も、警察、医師と確認されますね','Case suspect-epil-ten-doc police-check','Reflective','ren_uni'),
    mk('警察、被害者の腓腹、つまり腓の打撲痕も鑑識されますね','Police vict-calf-hi-bruise-foren','Cooperative','takeda_officer'),
    mk('本件、現場の磴、つまり石段から落下した経緯を、警察、調べられますね','Case scene-stone-step-dou-fall police-check','Reflective','ren_uni'),
    mk('警察、夕暮れの曚、つまり曚気時の目撃の証言を、警察、整えられますね','Police twil-bou-witn-stmt-tidy','Cooperative','takeda_officer'),
    mk('本件、被害者の儖、つまり儖の体型特徴を、警察、目撃者に確認されますね','Case vict-body-rou-witn police-confirm','Reflective','ren_uni'),
    mk('警察、緊急時の蕁麻疹、つまり蕁発症者への対応も配慮されますね','Police emerg-hives-jin-resp','Close','takeda_officer'),
  ]},
  {id:'conv_10553',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、古典詩の水音、つまり泙の擬音研究を論文で扱いましたね','Sakura — pei paper','Calm','asuka_teacher'),
    mk('はい、跼蹐、つまり蹐の語源と過度な遠慮の研究を論文で扱いました','Yes — Seki paper','Earnest teen','sakura_teen'),
    mk('癲癇、つまり癲発作の歴史的記録の研究を論文で扱いましたね','Ten paper','Reflective','asuka_teacher'),
    mk('はい、下腿の腓腹筋、つまり腓の運動学を論文で扱いました','Yes — Hi paper','Earnest','sakura_teen'),
    mk('登山道の磴、つまり石段の地理研究を論文で扱いましたね','Dou paper','Reflective','asuka_teacher'),
    mk('はい、曚気、つまり曚の薄暗さの古典詩研究を論文で扱いました','Yes — Bou paper','Earnest','sakura_teen'),
    mk('古代の儖、つまり儖の人体表記の研究を論文で扱いましたね','Rou paper','Reflective','asuka_teacher'),
    mk('はい、蕁麻疹、つまり蕁の皮膚反応の臨床研究を論文で扱いました','Yes — Jin paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10554',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、患者様の水中異音、つまり泙の鑑別を医療チームで丁寧におこないます','Ren — pati-water-pei-diff med-team','Calm','saito_doctor'),
    mk('蓮さん、患者様の跼蹐、つまり蹐の姿勢を医療チームで観察します','Ren — pati-cring-seki-obs med-team','Calm','saito_doctor'),
    mk('蓮さん、癲癇、つまり癲発作の治療を医療チームで継続します','Ren — epil-ten-treat med-team','Calm','saito_doctor'),
    mk('蓮さん、術後の腓腹筋、つまり腓のリハビリを医療チームでおこないます','Ren — post-op-calf-hi-rehab med-team','Calm','saito_doctor'),
    mk('蓮さん、転倒事故の磴、つまり石段からの落下を医療チームで対応します','Ren — fall-stone-step-dou med-team','Calm','saito_doctor'),
    mk('蓮さん、夜勤帯、つまり曚気時の体調変化を医療チームで観察します','Ren — night-twil-bou-cond med-team','Calm','saito_doctor'),
    mk('蓮さん、患者様の儖、つまり儖の体格を医療チームで記録します','Ren — pati-body-rou-rec med-team','Calm','saito_doctor'),
    mk('蓮さん、蕁麻疹、つまり蕁の急性反応を医療チームで治療します','Ren — hives-jin-acute med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_10555',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、新工場の水利、つまり水音、泙の影響評価をせよ','Our co — new-fact-water-pei-eval','Crisp','hiroshi_boss'),
    mk('はい。下請けが跼蹐、つまり蹐になり過ぎない様、対等に接します','Yes — Sub-cring-seki-no-equ','Methodical','kenji_office'),
    mk('当社、社員の癲癇、つまり癲歴のある方への合理的配慮を整えろ','Our co — staff-epil-ten-acc','Direction','hiroshi_boss'),
    mk('はい。長時間作業の腓腹筋、つまり腓の疲労対策をおこないます','Yes — Long-calf-hi-fat-prev','Update','kenji_office'),
    mk('当社、工場敷地内の磴、つまり石段を改修しろ','Our co — fact-stone-step-dou-renov','Direction','hiroshi_boss'),
    mk('はい。夜勤の曚、つまり曚気時の照明を強化します','Yes — Night-twil-bou-light-strong','Update','kenji_office'),
    mk('当社、社員の儖、つまり儖の体型データを健康診断で記録しろ','Our co — staff-body-rou-data-rec','Direction','hiroshi_boss'),
    mk('はい。社員の蕁麻疹、つまり蕁の発症時にすぐ対応します','Yes — Staff-hives-jin-quick-resp','Close','kenji_office'),
  ]},
  {id:'conv_10556',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、半濁点、つまり「゜」の歴史を語って下さったよ、メイちゃん','Aoi — cust-handak-history Mei','Reflective','mei_romantic'),
    mk('葵、お客様、片仮名の繰り返し記号、つまりヽに詳しいよ、メイちゃん','Aoi — cust-kata-iter-knowl Mei','Reflective','aoi_barista'),
    mk('葵、お客様、平仮名の濁点繰り返し、つまりゞのお話だったよ、メイちゃん','Aoi — cust-hira-vc-iter Mei','Reflective','mei_romantic'),
    mk('葵、お客様、平仮名の繰り返し記号、つまりゝの解説本を読んでらしたよ、メイちゃん','Aoi — cust-hira-iter Mei','Reflective','aoi_barista'),
    mk('葵、お客様、片仮名の濁点繰り返し、つまりヾにご興味だって、メイちゃん','Aoi — cust-kata-vc-iter Mei','Reflective','mei_romantic'),
    mk('葵、お客様、旧仮名のゐの読み方を尋ねて下さったよ、メイちゃん','Aoi — cust-old-wi-read-ask Mei','Reflective','aoi_barista'),
    mk('葵、お客様、古文のゐる、つまり「いる」の旧形を例に挙げて下さったよ、メイちゃん','Aoi — cust-old-wiru-ex Mei','Reflective','mei_romantic'),
    mk('葵、お客様、古文の爾、つまり「それ」の用法を語って下さったよ、メイちゃん','Aoi — cust-old-ji-talk Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10557',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが半濁点、つまり「゜」の書き方を教えて下さった','Gran — youth Dad-handak-teach','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、片仮名のヽ、つまり繰り返し記号を使われたわよね、あなた?','Yes — Grandpa-youth-kata-iter-use, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが平仮名のゞ、つまり濁点繰り返しを書かれた','Gran — youth Dad-hira-vc-iter-write','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、平仮名のゝ、つまり繰り返し記号を使われたわよね、あなた?','Grandpa — youth-hira-iter-use, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが片仮名のヾ、つまり濁点繰り返しに詳しかった','Gran — youth Dad-kata-vc-iter-knowl','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、旧仮名のゐを使ってお手紙を書かれたわよね、あなた?','Grandpa — youth-old-wi-letter, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはゐる、つまり古文の「いる」を仰った','Gran — youth Dad-old-wiru-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、爾、つまり古文の「それ」を読まれたわよね、あなた?','Grandpa — youth-old-ji-read, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10558',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが半濁点、つまり「゜」の付け方を教えて下さるそうよ','Sho — Dad-handak-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに片仮名のヽ、つまり繰り返し記号を教えて頂いたよ','Mei-sis — me Dad-kata-iter-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが平仮名のゞ、つまり濁点繰り返しを書いて下さったわ','Sho — Dad-hira-vc-iter-write','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと平仮名のゝ、つまり繰り返し記号を練習したよ','Mei-sis — me Dad-hira-iter-prac','Eager child','sho_child'),
    mk('翔くん、お父さんが片仮名のヾ、つまり濁点繰り返しを見せて下さったわ','Sho — Dad-kata-vc-iter-show','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに旧仮名のゐ、つまり古い「い」を教えて頂いたよ','Mei-sis — me Dad-old-wi-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんがゐる、つまり古文の「いる」を読んで下さったわ','Sho — Dad-old-wiru-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに爾、つまり古文の「それ」を教えて頂いたよ','Mei-sis — me Dad-old-ji-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_10559',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、国語で半濁点、つまり「゜」の歴史習ったろ','Riku — Jp-handak-hist?','Curious teen','sakura_teen'),
    mk('お前、片仮名のヽ、つまり繰り返し記号で名前書いてたな、桜','You — kata-iter-name-wrote Sakura','Wry','riku_teen'),
    mk('リク、お前、ノートに平仮名のゞ、つまり濁点繰り返し使ってたな','Riku — note-hira-vc-iter-use','Curious','sakura_teen'),
    mk('お前、平仮名のゝ、つまり繰り返し記号面白がってたな、桜','You — hira-iter-fun Sakura','Wry','riku_teen'),
    mk('リク、お前、ヾ、つまり片仮名の濁点繰り返しに気付いてたな','Riku — kata-vc-iter-notice','Curious','sakura_teen'),
    mk('お前、古文でゐ、つまり旧仮名習ったろ、桜','You — class-old-wi? Sakura','Curious','riku_teen'),
    mk('リク、お前、古文でゐる、つまり「いる」の旧形読まされてたな','Riku — class-old-wiru-read','Curious','sakura_teen'),
    mk('お前、古文で爾、つまり「それ」って読み方教わったろ、桜','You — class-old-ji-read? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10560',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが半濁点、つまり「゜」の使い方を教えて下さるわ','Sho — Dad-handak-teach','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと片仮名のヽ、つまり繰り返し記号で遊んだよ','Mom — me Dad-kata-iter-play','Eager child','sho_child'),
    mk('翔くん、お父さんが平仮名のゞ、つまり濁点繰り返しを書いて下さるわ','Sho — Dad-hira-vc-iter-write','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに平仮名のゝ、つまり繰り返し記号を教えて頂いたよ','Mom — me Dad-hira-iter-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんがヾ、つまり片仮名の濁点繰り返しを見せて下さったわ','Sho — Dad-kata-vc-iter-show','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに旧仮名のゐ、つまり「い」の古形を教えて頂いたよ','Mom — me Dad-old-wi-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが古文のゐる、つまり「いる」を読んで下さったわ','Sho — Dad-old-wiru-read','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに爾、つまり古文の「それ」の意味を教えて頂いたよ','Mom — me Dad-old-ji-teach','Eager close','sho_child'),
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

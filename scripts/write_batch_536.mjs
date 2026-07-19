import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_536 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['じゅん','素子','すぅ','稔','ヤマト','松子','春日','立花']
const B_T = ['一色','小池','岩田','坂口','大山','山内','浜田','平井']
const C_T = ['東日本','東亜','堺','生き残り','脳裏','紡','転生','テクスト']
const D_T = ['フィート','エアー','クロック','エリザベス','ミスター','ハワード','ルビー','パット']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10681',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがお友達のじゅんさんを夕食に招待されたわ','Sho — Dad-fri-Jun-din','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと素子おばさんの家に行ったよ','Mom — me Dad-Motoko-aunt-vis','Pleased child','sho_child'),
    mk('翔くん、お父さんが眠そうに「すぅ」と寝息を立ててらしたわ','Sho — Dad-sleep-"suu"-breath','Wry','yumiko_mom'),
    mk('ママ、ぼく、お父さんのお友達の稔おじさんに会ったよ','Mom — me Dad-fri-Minoru-met','Eager child','sho_child'),
    mk('翔くん、お父さんがヤマト運輸の集荷を待ってらっしゃるわ','Sho — Dad-Yamato-pickup','Reflective','yumiko_mom'),
    mk('ママ、お父さんが「松子さんのおはぎは絶品」って仰ってたよ','Mom — Dad-"Matsuko-oh-best"-said','Eager child','sho_child'),
    mk('翔くん、お父さんと春日大社にお参りに行かれるそうよ','Sho — Dad-Kasuga-shr-pray','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと立花の生け花展に行ったよ','Mom — me Dad-Tachibana-ike-exhib','Eager close','sho_child'),
  ]},
  {id:'conv_10682',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ご友人のじゅんさんとご来店だったよ、メイちゃん','Aoi — cust-fri-Jun-vis Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お姉様の素子さんと電話されてたよ、メイちゃん','Aoi — cust-sis-Motoko-call Mei','Reflective','aoi_barista'),
    mk('葵、お客様、温かい飲み物に「すぅ」と息を吐かれたよ、メイちゃん','Aoi — cust-hot-drink-"suu"-sigh Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご友人の稔さんとお茶されてたよ、メイちゃん','Aoi — cust-fri-Minoru-tea Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ヤマト宅急便の集荷を依頼されてたよ、メイちゃん','Aoi — cust-Yamato-pickup-req Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お母様のお名前が松子さんだって、メイちゃん','Aoi — cust-mom-Matsuko Mei','Reflective','aoi_barista'),
    mk('葵、お客様、春日大社のお守りを下さったよ、メイちゃん','Aoi — cust-Kasuga-amul-gift Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お店のお花、立花の生け方をお褒め下さったよ、メイちゃん','Aoi — cust-shop-Tachibana-ike-praise Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10683',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがお友達のじゅんさんと釣りに行かれた','Gran — youth Dad-fri-Jun-fish','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、お姉様の素子さんとよく話されたわよね、あなた?','Yes — Grandpa-youth-sis-Motoko-talk, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが寝るとき「すぅ」と寝息を立てられた','Gran — youth Dad-sleep-"suu"','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ご親戚の稔さんと将棋を指されたわよね、あなた?','Grandpa — youth-rel-Minoru-shog, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがヤマト運輸の創業期の方々と親しかった','Gran — youth Dad-Yamato-found-close','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、奥様の妹の松子さんを可愛がられたわよね、あなた?','Grandpa — youth-sis-Matsuko-love, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが春日大社のお神札を毎年お受けされた','Gran — youth Dad-Kasuga-amul-yr','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、立花流の生け花を習われたわよね、あなた?','Grandpa — youth-Tachibana-ike, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10684',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、隣のクラスのじゅんと仲良いな','Riku — next-cl-Jun-close','Curious teen','sakura_teen'),
    mk('お前のお姉さん、素子さんって名前だったよな、桜','You — sis-Motoko-yeah Sakura','Curious','riku_teen'),
    mk('リク、お前、寝る時に「すぅ」って言ってたな','Riku — sleep-"suu"','Wry','sakura_teen'),
    mk('お前、隣の稔おじさんと挨拶してたな、桜','You — next-Minoru-uncle-greet Sakura','Curious','riku_teen'),
    mk('リク、お前、ヤマト運輸のバイト気になってたな','Riku — Yamato-job-int','Curious','sakura_teen'),
    mk('お前、隣のクラスの松子と話してたな、桜','You — next-cl-Matsuko-talk Sakura','Curious','riku_teen'),
    mk('リク、お前、家族で春日大社行ったろ','Riku — fam-Kasuga?','Curious','sakura_teen'),
    mk('お前、立花先生のお花の授業楽しんでたな、桜','You — Tachibana-flo-class-fun Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10685',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがお友達のじゅんさんと公園で会われたわ','Sho — Dad-fri-Jun-park','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと素子おばさんに会ったよ','Mei-sis — me Dad-Motoko-aunt-met','Eager child','sho_child'),
    mk('翔くん、お父さんが「すぅっと深呼吸する練習」を教えて下さるわ','Sho — Dad-"suu-breath"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに稔おじさんの絵を見せて頂いたよ','Mei-sis — me Dad-Minoru-pic-show','Earnest child','sho_child'),
    mk('翔くん、お父さんがヤマト便のドライバーさんに丁寧に挨拶されたわ','Sho — Dad-Yamato-driver-greet','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと松子おばさんのお祝いに行ったよ','Mei-sis — me Dad-Matsuko-aunt-cel','Eager child','sho_child'),
    mk('翔くん、お父さんが春日大社のしか、つまり鹿を見せて下さるわ','Sho — Dad-Kasuga-deer-show','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと立花生け花の体験会に行ったよ','Mei-sis — me Dad-Tachibana-ike-try','Eager close','sho_child'),
  ]},
  {id:'conv_10686',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新任の一色部長を歓迎しろ','Our co — new-Iss-dept-wel','Crisp','hiroshi_boss'),
    mk('はい。営業の小池課長の出張日程を整えます','Yes — Sales-Koike-mgr-trip','Methodical','kenji_office'),
    mk('当社、技術担当の岩田主任にプロジェクトを任せろ','Our co — tech-Iwata-lead-proj','Direction','hiroshi_boss'),
    mk('はい。広報の坂口様の戦略を採用します','Yes — PR-Sakag-strat-adopt','Update','kenji_office'),
    mk('当社、顧問の大山様にご助言を仰げ','Our co — adv-Oyama-cons','Direction','hiroshi_boss'),
    mk('はい。経理の山内様に決算を依頼します','Yes — Acct-Yam-clos-req','Update','kenji_office'),
    mk('当社、人事の浜田様に新人研修を任せろ','Our co — HR-Ham-newhire-entr','Direction','hiroshi_boss'),
    mk('はい。法務の平井様に契約書確認を依頼します','Yes — Leg-Hir-contr-req','Close','kenji_office'),
  ]},
  {id:'conv_10687',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('一色部長の歓迎会を準備しましょう','Iss-dept-wel-prep','Brisk','yuki_office'),
    mk('はい。小池課長の引き継ぎ書を確認します','Yes — Koike-mgr-handov-check','Cooperative','kenji_office'),
    mk('岩田技術主任のプロジェクト進捗を共有しましょう','Iwata-tech-lead-proj-share','Direction','yuki_office'),
    mk('はい。坂口広報の月次企画書を確認します','Yes — Sakag-PR-mo-plan','Update','kenji_office'),
    mk('大山顧問との面談を予定しましょう','Oyama-adv-meet-plan','Direction','yuki_office'),
    mk('はい。山内経理の決算スケジュールを整えます','Yes — Yam-acct-clos-sched','Update','kenji_office'),
    mk('浜田人事に新人研修プランを依頼しましょう','Ham-HR-newhire-plan-req','Direction','yuki_office'),
    mk('はい。平井法務に新規契約のレビューを依頼します','Yes — Hir-leg-new-contr-rev','Close','kenji_office'),
  ]},
  {id:'conv_10688',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、指導教授の一色先生のご研究を継承しろ','Ren — mentor-Iss-res-inherit','Mentor','hiroshi_boss'),
    mk('はい。小池教授の論文を読み込みます','Yes — Koike-prof-paper-read','Earnest','ren_uni'),
    mk('蓮、共同研究の岩田先生に研究照会しろ','Ren — joint-Iwata-inq','Direction','hiroshi_boss'),
    mk('はい。学会で坂口助教のご発表を聴きます','Yes — Conf-Sakag-asst-pres','Earnest','ren_uni'),
    mk('蓮、文献の大山先生のご論文を読み込め','Ren — lit-Oyama-paper-read','Direction','hiroshi_boss'),
    mk('はい。研究室の山内技官と連携します','Yes — Lab-Yam-tech-link','Polite','ren_uni'),
    mk('蓮、海外連携の浜田教授とも打ち合わせしろ','Ren — overs-Ham-prof-meet','Direction','hiroshi_boss'),
    mk('はい。研究費の窓口、平井事務官に申請します','Yes — Res-fund-Hir-apply','Earnest close','ren_uni'),
  ]},
  {id:'conv_10689',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、一色刑事の現場対応も評価されますね','Police Iss-det-scene-eval','Cooperative','kenji_office'),
    mk('警察、参考人小池氏から、警察、事情を伺われますね','Police witn-Koike-careful','Cooperative','kenji_office'),
    mk('警察、被害者岩田氏のご家族にも、警察、配慮されますね','Police vict-Iwata-fam-care','Cooperative','kenji_office'),
    mk('警察、目撃者坂口氏の供述を、警察、整えられますね','Police witn-Sakag-stmt','Cooperative','kenji_office'),
    mk('警察、容疑者大山の前科を、警察、確認されますね','Police suspect-Oyama-prior-check','Cooperative','kenji_office'),
    mk('警察、署内の鑑識山内主任と現場検証されますね','Police stat-foren-Yam-lead-scene','Cooperative','kenji_office'),
    mk('警察、心理士浜田様にご助言を仰がれますね','Police psy-Ham-adv','Cooperative','kenji_office'),
    mk('警察、検事の平井様と公判前協議もされますね','Police pros-Hir-pre-trial','Close','kenji_office'),
  ]},
  {id:'conv_10690',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、一色氏と共同事業を立ち上げられた','Dad — youth-Iss-JV','Sage','hiroshi_elder'),
    mk('はい。お父さんは小池氏を初代主任として任命された','Yes — Dad Koike-1st-lead-app','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、岩田氏と工場運営を整えられた','Dad — youth-Iwata-fact-run','Wistful','hiroshi_elder'),
    mk('はい。お父さんは坂口氏を広報の柱に据えられた','Yes — Dad Sakag-PR-pillar','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、大山氏と海外進出を企画された','Dad — youth-Oyama-overs','Wistful','hiroshi_elder'),
    mk('はい。お父さんは山内氏に経理全般を任された','Yes — Dad Yam-acct-entr','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、浜田氏と海外法人を立ち上げられた','Dad — youth-Ham-overs-co','Wistful','hiroshi_elder'),
    mk('はい。お父さんは平井氏に法務全般を委ねられた','Yes — Dad Hir-leg-entr','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10691',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、東日本大震災の社会学研究を論文で扱いましたね','Ren — E-Jp-disas paper','Calm','asuka_teacher'),
    mk('はい、戦前の東亜経済圏構想の歴史研究を論文で扱いました','Yes — Prewar-E-Asia-econ paper','Earnest','ren_uni'),
    mk('蓮さん、堺市の戦国時代の自治史を論文で扱いましたね','Ren — Sakai-Seng-auto paper','Reflective','asuka_teacher'),
    mk('はい、戦時下の生き残りの民俗誌を論文で扱いました','Yes — War-surv-folk paper','Earnest','ren_uni'),
    mk('蓮さん、戦争体験の脳裏に焼き付く記憶の研究を論文で扱いましたね','Ren — war-exp-mem paper','Reflective','asuka_teacher'),
    mk('はい、絹を紡ぐ、つまり紡糸の伝統技法を論文で扱いました','Yes — Silk-spin-trad paper','Earnest','ren_uni'),
    mk('蓮さん、輪廻転生の哲学的研究を論文で扱いましたね','Ren — reincar-phil paper','Reflective','asuka_teacher'),
    mk('はい、文学テクスト、つまり原典の解釈論を論文で扱いました','Yes — Lit-text-interp paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10692',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、東日本大震災時の不明者再捜査を、警察、進められますね','Case E-Jp-disas-miss police-prog','Reflective','ren_uni'),
    mk('警察、東亜地域の国際捜査連携もされますね','Police E-Asia-int-link','Cooperative','takeda_officer'),
    mk('本件、堺市の事案を、警察、地元署と連携されますね','Case Sakai-case police-local-link','Reflective','ren_uni'),
    mk('警察、被害者ご家族の生き残りの方々の保護を、警察、慎重におこなわれますね','Police vict-surv-prot-care','Cooperative','takeda_officer'),
    mk('本件、目撃者の脳裏に残る情景を、警察、丁寧に聴かれますね','Case witn-mem-careful police-hear','Reflective','ren_uni'),
    mk('警察、捜査の糸を紡ぐ、つまり紡ぐような地道な捜査をされますね','Police clue-spin-steady-inv','Cooperative','takeda_officer'),
    mk('本件、宗教団体の転生信仰関連の捜査を、警察、慎重におこなわれますね','Case rel-reincar-case police-care','Reflective','ren_uni'),
    mk('警察、押収物のテクスト、つまり文書の解読を、警察、専門家に依頼されますね','Police seiz-text-decod-expert','Close','takeda_officer'),
  ]},
  {id:'conv_10693',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、東日本大震災の社会学研究を論文で扱いましたね','Sakura — E-Jp-disas paper','Calm','asuka_teacher'),
    mk('はい、戦前の東亜経済圏構想の歴史研究を論文で扱いました','Yes — E-Asia-econ paper','Earnest teen','sakura_teen'),
    mk('堺市の戦国時代の自治史を論文で扱いましたね','Sakai-Seng paper','Reflective','asuka_teacher'),
    mk('はい、戦時下の生き残りの民俗誌を論文で扱いました','Yes — War-surv paper','Earnest','sakura_teen'),
    mk('戦争体験の脳裏に焼き付く記憶の研究を論文で扱いましたね','War-mem paper','Reflective','asuka_teacher'),
    mk('はい、絹を紡ぐ、つまり紡糸の伝統技法を論文で扱いました','Yes — Silk-spin paper','Earnest','sakura_teen'),
    mk('輪廻転生の哲学的研究を論文で扱いましたね','Reincar-phil paper','Reflective','asuka_teacher'),
    mk('はい、文学テクスト、つまり原典の解釈論を論文で扱いました','Yes — Text-interp paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10694',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、東日本大震災後の心的ケアを医療チームで継続しております','Ren — E-Jp-disas-ment-care med-team','Calm','saito_doctor'),
    mk('蓮さん、東亜地域の医療連携を医療チームで進めます','Ren — E-Asia-med-link med-team','Calm','saito_doctor'),
    mk('蓮さん、堺市の地域医療と医療チームで連携します','Ren — Sakai-local-med med-team-link','Calm','saito_doctor'),
    mk('蓮さん、災害の生き残りの方々の長期ケアを医療チームでおこないます','Ren — disas-surv-long-care med-team','Calm','saito_doctor'),
    mk('蓮さん、患者様の脳裏に残るトラウマを医療チームで丁寧に支援します','Ren — pati-mem-trauma med-team','Calm','saito_doctor'),
    mk('蓮さん、医療チームで時間を紡ぐ、つまり地道な診療を続けます','Ren — med-team-time-spin-steady','Calm','saito_doctor'),
    mk('蓮さん、終末期医療と転生観の関係を医療チームで尊重します','Ren — term-med-reincar med-team-resp','Calm','saito_doctor'),
    mk('蓮さん、診療テクスト、つまり医療文書の標準化を医療チームで進めます','Ren — med-text-stand med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_10695',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、東日本地域への支援事業を継続しろ','Our co — E-Jp-supp-cont','Crisp','hiroshi_boss'),
    mk('はい。東亜地域への市場展開を進めます','Yes — E-Asia-mkt-prog','Methodical','kenji_office'),
    mk('当社、堺の工場の生産能力を上げろ','Our co — Sakai-fact-cap-up','Direction','hiroshi_boss'),
    mk('はい。倒産危機からの生き残り戦略を共有します','Yes — Bankr-surv-strat-share','Update','kenji_office'),
    mk('当社、社員の脳裏に残るブランドイメージを大事にしろ','Our co — staff-mem-brand-cher','Direction','hiroshi_boss'),
    mk('はい。創業の理念を絶やさず紡いで行きます','Yes — Found-vis-no-die-spin','Update','kenji_office'),
    mk('当社、創業者の精神を後世に転生、つまり継承させろ','Our co — found-spir-next-gen','Direction','hiroshi_boss'),
    mk('はい。社内文書のテクスト、つまり原文の管理を徹底します','Yes — Int-doc-text-thor','Close','kenji_office'),
  ]},
  {id:'conv_10696',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、米国のフィート単位の身長表記のお話を語って下さったよ、メイちゃん','Aoi — cust-US-feet-height-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、エアー、つまりエアフォースのスニーカーを愛用されてるって、メイちゃん','Aoi — cust-Air-sneak-fav Mei','Reflective','aoi_barista'),
    mk('葵、お客様、クロックレディオの音色がお好きだって、メイちゃん','Aoi — cust-clock-radio-like Mei','Reflective','mei_romantic'),
    mk('葵、お客様、英国エリザベス女王の戴冠式のお話を語って下さったよ、メイちゃん','Aoi — cust-UK-Eliz-coron-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ミスター・ビーンのコメディがお好きだって、メイちゃん','Aoi — cust-Mr-Bean-com Mei','Reflective','mei_romantic'),
    mk('葵、お客様、英米作家ハワードのSF小説を愛されてるよ、メイちゃん','Aoi — cust-Howard-SF-love Mei','Reflective','aoi_barista'),
    mk('葵、お客様、宝石のルビーをお好みだって、メイちゃん','Aoi — cust-jewel-Ruby-like Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ゴルフのパット練習のお話を語って下さったよ、メイちゃん','Aoi — cust-golf-putt-prac Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10697',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが米国フィート単位の地図に苦戦された','Gran — youth Dad-US-feet-map','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、エアー、つまりエアフォースの靴を初購入されたわよね、あなた?','Yes — Grandpa-youth-Air-shoe-1st, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがアンティーククロックを蒐集された','Gran — youth Dad-ant-clock-coll','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、エリザベス女王の即位ニュースを観られたわよね、あなた?','Grandpa — youth-Eliz-Q-news, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがミスター・ロジャースのテレビを愛された','Gran — youth Dad-Mr-Rog-TV','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、SF作家ハワードのご本を読まれたわよね、あなた?','Grandpa — youth-Howard-SF-read, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが私にルビーの指輪を贈られた','Gran — youth Dad-me-Ruby-ring','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ゴルフでパット練習を毎週されたわよね、あなた?','Grandpa — youth-golf-putt-wk, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10698',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「身長を米国式のフィートで言うと面白い」って仰ってたわ','Sho — Dad-"height-feet-fun"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとエアー、つまりエアフォースのスニーカー買ったよ','Mei-sis — me Dad-Air-sneak','Eager child','sho_child'),
    mk('翔くん、お父さんが古いクロック、つまり時計を直して下さるわ','Sho — Dad-old-clock-fix','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとエリザベス女王のドキュメンタリー観たよ','Mei-sis — me Dad-Eliz-Q-doc','Eager child','sho_child'),
    mk('翔くん、お父さんが「ミスター・ビーンの映画を一緒に観よう」って仰ってたわ','Sho — Dad-"Mr-Bean-film"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとSF作家ハワードの絵本見たよ','Mei-sis — me Dad-Howard-SF-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがママの誕生日にルビーの指輪を準備されたわ','Sho — Dad-Mom-bday-Ruby-prep','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとゴルフのパット練習に行ったよ','Mei-sis — me Dad-golf-putt-prac','Eager close','sho_child'),
  ]},
  {id:'conv_10699',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、米国フィート単位の換算苦手だったろ','Riku — US-feet-conv-bad?','Wry teen','sakura_teen'),
    mk('お前、エアー、つまりエアジョーダン履いてたな、桜','You — Air-Jordan-wear Sakura','Curious','riku_teen'),
    mk('リク、お前、古いクロックの修理してたな','Riku — old-clock-fix','Curious','sakura_teen'),
    mk('お前、社会の授業でエリザベス女王習ったろ、桜','You — soc-Eliz-Q? Sakura','Curious','riku_teen'),
    mk('リク、お前、ミスター・チルドレンのファンだったな','Riku — Mr-Children-fan','Curious','sakura_teen'),
    mk('お前、英語の教科書でハワードの物語読んでたろ、桜','You — Eng-Howard-story-read? Sakura','Curious','riku_teen'),
    mk('リク、お前、宝石のルビーの色当てクイズしてたな','Riku — Ruby-color-quiz','Wry','sakura_teen'),
    mk('お前、ゴルフ部でパット練習頑張ってたな、桜','You — golf-club-putt-prac Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_10700',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが米国の地図でフィート単位を解説して下さるわ','Sho — Dad-US-map-feet-narr','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとエアー、つまりエアフォースのスニーカー磨いたよ','Mom — me Dad-Air-sneak-polish','Eager child','sho_child'),
    mk('翔くん、お父さんがアンティーククロックの音色を聴かせて下さるわ','Sho — Dad-ant-clock-listen','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとエリザベス女王の伝記映画観たよ','Mom — me Dad-Eliz-Q-biog','Eager child','sho_child'),
    mk('翔くん、お父さんがミスター・ベーカーのギタリスト動画を観てらっしゃるわ','Sho — Dad-Mr-Bak-gtr-vid','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとハワード・ヒューズの伝記映画観たよ','Mom — me Dad-Howard-Hugh-biog','Eager child','sho_child'),
    mk('翔くん、お父さんが私の誕生日にルビーのペンダントを下さったわ','Sho — Dad-my-bday-Ruby-pend','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとゴルフ場でパット練習したよ','Mom — me Dad-golf-putt-prac','Eager close','sho_child'),
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

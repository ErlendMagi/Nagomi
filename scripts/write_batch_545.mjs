import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_545 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['慎太郎','康夫','優美','和也','正彦','すず','恭子','足下']
const B_T = ['森下','片岡','水谷','丹羽','高岡','今村','津田','岡村']
const C_T = ['倭','弌','丙','鉉','辺野古','住専','フジサンケイビジネスアイ','日本経済新聞社']
const D_T = ['サタン','羽生','オスカー','クレア','フォックス','魔物','プリーズ','乞食']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10861',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「石原慎太郎元都知事の本を読んでる」って仰ってたわ','Sho — Dad-"Ishi-Shin-book"-said','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんのお友達の康夫おじさんに会ったよ','Mom — me Dad-fri-Yasuo-uncle-met','Pleased child','sho_child'),
    mk('翔くん、お父さんが「ご親戚の優美さんが結婚されたわ」って語って下さったわ','Sho — Dad-"Yumi-marr"-talk','Reflective','yumiko_mom'),
    mk('ママ、お父さんが「和也くんは将来有望」って褒めてらしたよ','Mom — Dad-"Kaz-promis"-said','Earnest child','sho_child'),
    mk('翔くん、お父さんが「正彦伯父様にもお元気でいらしてほしい」って仰ってたわ','Sho — Dad-"Masa-uncle-health"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとペットのすずちゃんを撫でたよ','Mom — me Dad-pet-Suzu-pat','Pleased child','sho_child'),
    mk('翔くん、お父さんとお友達の恭子さんとお茶会されてたわ','Sho — Dad-fri-Kyoko-tea','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「足下に注意して歩け」って教えて頂いたよ','Mom — me Dad-"foot-care-walk"-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_10862',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、石原慎太郎元都知事の小説を語って下さったよ、メイちゃん','Aoi — cust-Ishi-Shin-novel-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご友人の康夫さんとお茶されてたよ、メイちゃん','Aoi — cust-fri-Yasuo-tea Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ご友人の優美さんとよく来店されるよ、メイちゃん','Aoi — cust-fri-Yumi-reg Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お孫様の和也くんを連れていらしたよ、メイちゃん','Aoi — cust-grdkid-Kaz-vis Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ご友人の正彦さんと打ち合わせされてたよ、メイちゃん','Aoi — cust-fri-Masa-meet Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ペットの名前をすずちゃんって付けたって、メイちゃん','Aoi — cust-pet-Suzu-named Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お姉様のお名前が恭子さんだって、メイちゃん','Aoi — cust-sis-Kyoko Mei','Reflective','mei_romantic'),
    mk('葵、お客様、「足下を見られない様気を付けたい」って仰ってたよ、メイちゃん','Aoi — cust-"foot-watched-care"-said Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10863',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが石原慎太郎氏の小説を蔵書された','Gran — youth Dad-Shin-novel-coll','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、ご友人の康夫さんと釣りに行かれたわよね、あなた?','Yes — Grandpa-youth-Yasuo-fish, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが姪の優美さんを可愛がられた','Gran — youth Dad-niece-Yumi-love','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ご友人の和也さんと将棋を指されたわよね、あなた?','Grandpa — youth-Kaz-shog, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがお兄様の正彦さんと文通された','Gran — youth Dad-bro-Masa-letter','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ご縁あったすずさんと俳句を詠まれたわよね、あなた?','Grandpa — youth-Suzu-haik, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが従妹の恭子さんを慈しまれた','Gran — youth Dad-cous-Kyoko-love','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、「足下の踏ん張り」が大事と仰ったわよね、あなた?','Grandpa — youth-"foot-firm"-said, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10864',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、社会で石原慎太郎元都知事の名前覚えたな','Riku — soc-Shin-name','Curious teen','sakura_teen'),
    mk('お前、隣の康夫おじさんと挨拶してたな、桜','You — next-Yasuo-greet Sakura','Curious','riku_teen'),
    mk('リク、お前、隣のクラスの優美と話してたな','Riku — next-cl-Yumi-talk','Curious','sakura_teen'),
    mk('お前、隣のクラスの和也と仲良いな、桜','You — next-cl-Kaz-close Sakura','Curious','riku_teen'),
    mk('リク、お前のお父様、正彦さんって名前だったよな','Riku — your-fa-Masa','Curious','sakura_teen'),
    mk('お前、ペットの名前すずって付けたな、桜','You — pet-Suzu-named Sakura','Curious','riku_teen'),
    mk('リク、お前、隣のクラスの恭子と話してたな','Riku — next-cl-Kyoko-talk','Curious','sakura_teen'),
    mk('お前、体育で「足下が滑りやすい」って先生注意してたな、桜','You — PE-"foot-slip"-tch-warn Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10865',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「石原慎太郎元都知事の本を読もう」って仰ってたわ','Sho — Dad-"Shin-book-read"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと康夫おじさんの家に行ったよ','Mei-sis — me Dad-Yasuo-uncle-vis','Eager child','sho_child'),
    mk('翔くん、お父さんが「優美さんは芸術家肌」って仰ってたわ','Sho — Dad-"Yumi-artist"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと和也いとこと水族館に行ったよ','Mei-sis — me Dad-Kaz-cous-aqua','Eager child','sho_child'),
    mk('翔くん、お父さんが「正彦おじいちゃんに会いに行こう」って仰ってたわ','Sho — Dad-"Masa-grdpa-vis"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとペットのすずちゃんと遊んだよ','Mei-sis — me Dad-Suzu-play','Eager child','sho_child'),
    mk('翔くん、お父さんが「恭子おばさんの和菓子は絶品」って仰ってたわ','Sho — Dad-"Kyoko-aunt-sweet-best"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「足下を見て歩く事も大事」って教えて頂いたよ','Mei-sis — me Dad-"foot-walk-imp"-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_10866',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新任の森下部長を歓迎しろ','Our co — new-Mori-dept-wel','Crisp','hiroshi_boss'),
    mk('はい。営業の片岡課長の出張日程を整えます','Yes — Sales-Kat-mgr-trip','Methodical','kenji_office'),
    mk('当社、技術担当の水谷主任にプロジェクトを任せろ','Our co — tech-Mizu-lead-proj','Direction','hiroshi_boss'),
    mk('はい。広報の丹羽様の戦略を採用します','Yes — PR-Niwa-strat-adopt','Update','kenji_office'),
    mk('当社、顧問の高岡様にご助言を仰げ','Our co — adv-Tak-cons','Direction','hiroshi_boss'),
    mk('はい。経理の今村様の決算スケジュールを整えます','Yes — Acct-Ima-clos-sched','Update','kenji_office'),
    mk('当社、人事の津田様に新人研修を任せろ','Our co — HR-Tsuda-newhire-entr','Direction','hiroshi_boss'),
    mk('はい。法務の岡村様に契約書確認を依頼します','Yes — Leg-Oka-contr-req','Close','kenji_office'),
  ]},
  {id:'conv_10867',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('森下部長の歓迎会を準備しましょう','Mori-dept-wel-prep','Brisk','yuki_office'),
    mk('はい。片岡課長の引き継ぎ書を確認します','Yes — Kat-mgr-handov','Cooperative','kenji_office'),
    mk('水谷技術主任のプロジェクト進捗を共有しましょう','Mizu-tech-lead-share','Direction','yuki_office'),
    mk('はい。丹羽広報の月次企画書を確認します','Yes — Niwa-PR-mo-plan','Update','kenji_office'),
    mk('高岡顧問との面談を予定しましょう','Tak-adv-meet-plan','Direction','yuki_office'),
    mk('はい。今村経理の決算予定を整えます','Yes — Ima-acct-clos','Update','kenji_office'),
    mk('津田人事に新人研修プランを依頼しましょう','Tsuda-HR-newhire-req','Direction','yuki_office'),
    mk('はい。岡村法務に新契約レビューを依頼します','Yes — Oka-leg-new-contr','Close','kenji_office'),
  ]},
  {id:'conv_10868',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、指導教授の森下先生のご研究を継承しろ','Ren — mentor-Mori-res','Mentor','hiroshi_boss'),
    mk('はい。片岡教授の論文を読み込みます','Yes — Kat-prof-paper','Earnest','ren_uni'),
    mk('蓮、共同研究の水谷先生に研究照会しろ','Ren — joint-Mizu-inq','Direction','hiroshi_boss'),
    mk('はい。学会で丹羽助教のご発表を聴きます','Yes — Conf-Niwa-asst-pres','Earnest','ren_uni'),
    mk('蓮、文献の高岡先生のご論文も参考にしろ','Ren — lit-Tak-paper-ref','Direction','hiroshi_boss'),
    mk('はい。研究室の今村先輩からご指導を仰ぎます','Yes — Lab-Ima-sen-guide','Polite','ren_uni'),
    mk('蓮、海外連携の津田教授と打ち合わせしろ','Ren — overs-Tsuda-prof-meet','Direction','hiroshi_boss'),
    mk('はい。研究費の窓口、岡村事務官に申請します','Yes — Res-fund-Oka-apply','Earnest close','ren_uni'),
  ]},
  {id:'conv_10869',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、森下刑事の現場対応も評価されますね','Police Mori-det-eval','Cooperative','kenji_office'),
    mk('警察、参考人片岡氏から、警察、事情を伺われますね','Police witn-Kat-careful','Cooperative','kenji_office'),
    mk('警察、被害者水谷氏のご家族にも、警察、配慮されますね','Police vict-Mizu-fam-care','Cooperative','kenji_office'),
    mk('警察、目撃者丹羽氏の供述を、警察、整えられますね','Police witn-Niwa-stmt','Cooperative','kenji_office'),
    mk('警察、容疑者高岡の前科を、警察、確認されますね','Police suspect-Tak-prior','Cooperative','kenji_office'),
    mk('警察、署内の鑑識今村主任と現場検証されますね','Police stat-foren-Ima-scene','Cooperative','kenji_office'),
    mk('警察、心理士津田様にご助言を仰がれますね','Police psy-Tsuda-adv','Cooperative','kenji_office'),
    mk('警察、検事の岡村様と公判前協議もされますね','Police pros-Oka-pre-trial','Close','kenji_office'),
  ]},
  {id:'conv_10870',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、森下氏と共同事業を立ち上げられた','Dad — youth-Mori-JV','Sage','hiroshi_elder'),
    mk('はい。お父さんは片岡先輩のご薫陶を受けられた','Yes — Dad Kat-sen-mentor','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、水谷氏と海外進出を企画された','Dad — youth-Mizu-overs','Wistful','hiroshi_elder'),
    mk('はい。お父さんは丹羽氏を広報の柱に据えられた','Yes — Dad Niwa-PR-pillar','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、高岡氏と経理体制を整えられた','Dad — youth-Tak-acct','Wistful','hiroshi_elder'),
    mk('はい。お父さんは今村氏を主任として育てられた','Yes — Dad Ima-lead-grow','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、津田氏と海外法人を立ち上げられた','Dad — youth-Tsuda-overs-co','Wistful','hiroshi_elder'),
    mk('はい。お父さんは岡村氏に法務全般を委ねられた','Yes — Dad Oka-leg-entr','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10871',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、古代の倭、つまり倭国の歴史研究を論文で扱いましたね','Ren — anc-Wa paper','Calm','asuka_teacher'),
    mk('はい、旧字「弌」、つまり一の用法研究を論文で扱いました','Yes — Old-ichi paper','Earnest','ren_uni'),
    mk('蓮さん、武家の丙、つまり丙等級の制度研究を論文で扱いましたね','Ren — sam-3rd-grade paper','Reflective','asuka_teacher'),
    mk('はい、漢字の鉉、つまり鉉の鼎の取っ手の研究を論文で扱いました','Yes — Tripod-han paper','Earnest','ren_uni'),
    mk('蓮さん、辺野古の基地問題の社会学研究を論文で扱いましたね','Ren — Hen-base-soc paper','Reflective','asuka_teacher'),
    mk('はい、住専、つまり住宅専門金融の研究を論文で扱いました','Yes — Jusen-housing paper','Earnest','ren_uni'),
    mk('蓮さん、フジサンケイビジネスアイのアーカイブ研究を論文で扱いましたね','Ren — Fuji-San-bus-i-arch paper','Reflective','asuka_teacher'),
    mk('はい、日本経済新聞社のデータベース活用研究を論文で扱いました','Yes — Nikkei-data paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10872',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、古代倭、つまり倭国時代の遺物盗難を、警察、捜査されますね','Case anc-Wa-art-theft police-inv','Reflective','ren_uni'),
    mk('警察、旧字「弌」、つまり一の刻まれた古印鑑も鑑定されますね','Police old-ichi-seal-auth','Cooperative','takeda_officer'),
    mk('本件、丙、つまり丙号書類の機密管理を、警察、確認されますね','Case 3rd-grade-conf police-check','Reflective','ren_uni'),
    mk('警察、骨董の鉉、つまり鉉の鼎の盗難捜査もされますね','Police ant-tripod-theft','Cooperative','takeda_officer'),
    mk('本件、辺野古地域の事案を、警察、地元署と連携されますね','Case Hen-area police-local-link','Reflective','ren_uni'),
    mk('警察、住専、つまり住宅金融の詐欺事案も対応されますね','Police Jusen-fraud-case','Cooperative','takeda_officer'),
    mk('本件、フジサンケイビジネスアイの取材対応を、警察、される事ありますね','Case Fuji-San-bus-i-cov police','Reflective','ren_uni'),
    mk('警察、日本経済新聞社からの照会にも、警察、丁寧に対応されますね','Police Nikkei-inq-careful','Close','takeda_officer'),
  ]},
  {id:'conv_10873',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、古代の倭、つまり倭国の歴史研究を論文で扱いましたね','Sakura — Wa paper','Calm','asuka_teacher'),
    mk('はい、旧字「弌」、つまり一の用法研究を論文で扱いました','Yes — Old-ichi paper','Earnest teen','sakura_teen'),
    mk('武家の丙、つまり丙等級の制度研究を論文で扱いましたね','Sam-3rd paper','Reflective','asuka_teacher'),
    mk('はい、漢字の鉉、つまり鉉の鼎の取っ手の研究を論文で扱いました','Yes — Tripod paper','Earnest','sakura_teen'),
    mk('辺野古の基地問題の社会学研究を論文で扱いましたね','Hen-base paper','Reflective','asuka_teacher'),
    mk('はい、住専、つまり住宅専門金融の研究を論文で扱いました','Yes — Jusen paper','Earnest','sakura_teen'),
    mk('フジサンケイビジネスアイのアーカイブ研究を論文で扱いましたね','Fuji-San-bus-i paper','Reflective','asuka_teacher'),
    mk('はい、日本経済新聞社のデータベース活用研究を論文で扱いました','Yes — Nikkei paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10874',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、倭国時代の医療史を医療チームで研究します','Ren — Wa-med-hist med-team','Calm','saito_doctor'),
    mk('蓮さん、旧字「弌」、つまり一を含む医薬古書を医療チームで保管します','Ren — old-ichi-med med-team','Calm','saito_doctor'),
    mk('蓮さん、医療文書の丙、つまり丙号級の管理を医療チームで徹底します','Ren — med-3rd-grade-mgmt med-team','Calm','saito_doctor'),
    mk('蓮さん、鉉、つまり鉉の鼎の薬学的記録を医療チームで研究します','Ren — tripod-pharm-rec med-team','Calm','saito_doctor'),
    mk('蓮さん、辺野古地区の医療提供を医療チームで継続します','Ren — Hen-med-cont med-team','Calm','saito_doctor'),
    mk('蓮さん、住専、つまり住宅金融問題の社会医学的影響を医療チームで研究します','Ren — Jusen-soc-med med-team','Calm','saito_doctor'),
    mk('蓮さん、フジサンケイビジネスアイの医療記事を医療チームで参照します','Ren — Fuji-San-bus-i-med med-team-ref','Calm','saito_doctor'),
    mk('蓮さん、日本経済新聞社の医療経済記事を医療チームで参照します','Ren — Nikkei-med-econ med-team-ref','Calm close','saito_doctor'),
  ]},
  {id:'conv_10875',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、創業者の倭風、つまり倭時代の精神を社員に伝えろ','Our co — found-Wa-spir-staff','Crisp','hiroshi_boss'),
    mk('はい。旧字「弌」、つまり一を社印デザインに残します','Yes — Old-ichi-seal-keep','Methodical','kenji_office'),
    mk('当社、機密書類は丙、つまり丙号級まで厳重に管理しろ','Our co — conf-3rd-grade-strict','Direction','hiroshi_boss'),
    mk('はい。古美術の鉉、つまり鉉の鼎を会議室に飾ります','Yes — Ant-tripod-meet-decor','Update','kenji_office'),
    mk('当社、辺野古周辺の事業に慎重に対応しろ','Our co — Hen-biz-careful','Direction','hiroshi_boss'),
    mk('はい。住専、つまり住宅金融の動向を経営に反映します','Yes — Jusen-trend-mgmt','Update','kenji_office'),
    mk('当社、フジサンケイビジネスアイに新製品の広告を出せ','Our co — Fuji-San-bus-i-ad','Direction','hiroshi_boss'),
    mk('はい。日本経済新聞社にプレスリリースを送ります','Yes — Nikkei-press-release','Close','kenji_office'),
  ]},
  {id:'conv_10876',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、聖書のサタン、つまり堕天使のお話を語って下さったよ、メイちゃん','Aoi — cust-Bib-Satan-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、フィギュアスケートの羽生結弦選手のファンだって、メイちゃん','Aoi — cust-Hanyu-Yuz-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、米アカデミー賞のオスカー像のお話を語って下さったよ、メイちゃん','Aoi — cust-Oscar-stat-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、女優のクレア・デインズがお好きだって、メイちゃん','Aoi — cust-Claire-Dan-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、20世紀フォックス映画のクラシックがお好きだって、メイちゃん','Aoi — cust-Fox-film-class Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ゲームの魔物退治がお好きだって、メイちゃん','Aoi — cust-game-mons-defeat Mei','Reflective','aoi_barista'),
    mk('葵、お客様、英語で「プリーズ」を頻繁に使うって笑ってらしたよ、メイちゃん','Aoi — cust-Eng-"please"-laugh Mei','Wry','mei_romantic'),
    mk('葵、お客様、歴史小説で「乞食」、つまり物乞いの民俗誌を読んでらしたよ、メイちゃん','Aoi — cust-hist-beggar-folk Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10877',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがオペラ「ファウスト」のサタンの場面に感動された','Gran — youth Dad-Faust-Satan-imp','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、羽生善治名人の将棋を観られたわよね、あなた?','Yes — Grandpa-Hab-Yo-shog, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがアカデミー賞のオスカーの中継を観られた','Gran — youth Dad-Osc-broad','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、女優のクレア・ブルームを愛されたわよね、あなた?','Grandpa — youth-Claire-Bloom-love, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが20世紀フォックスの映画を毎週観られた','Gran — youth Dad-Fox-film-wk','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ホラー小説で魔物退治の物語を愛読されたわよね、あなた?','Grandpa — youth-mons-novel, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが英会話で「プリーズ」を丁寧に使われた','Gran — youth Dad-Eng-"please"-pol','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、江戸時代の乞食、つまり物乞いの研究をされてたわよね、あなた?','Grandpa — youth-Edo-beggar-stud, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10878',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「サタンの絵本は怖いから子供は早い」って仰ってたわ','Sho — Dad-"Satan-scary-kid"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとフィギュアの羽生選手の演技観たよ','Mei-sis — me Dad-Hanyu-fig-perf','Eager child','sho_child'),
    mk('翔くん、お父さんがアカデミー賞のオスカー授賞式を観てらっしゃるわ','Sho — Dad-Osc-cere','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「クレアの物語」の絵本を読んだよ','Mei-sis — me Dad-"Claire-tale"-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが「20世紀フォックスの映画は懐かしい」って仰ってたわ','Sho — Dad-"Fox-film-nost"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「魔物退治の絵本」読んだよ','Mei-sis — me Dad-"mons-defeat"-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが「英語で『プリーズ』を丁寧に使うね」って教えて下さるわ','Sho — Dad-"Eng-please-pol"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「『乞食』は古い言葉で配慮が要る」って教えて頂いたよ','Mei-sis — me Dad-"beggar-care"-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_10879',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、ハロウィンでサタンのコスプレしてたな','Riku — Hallow-Satan-cos','Wry teen','sakura_teen'),
    mk('お前、フィギュアの羽生結弦選手応援してたろ、桜','You — Hanyu-fig-cheer? Sakura','Curious','riku_teen'),
    mk('リク、お前、映画のオスカー予想で盛り上がってたな','Riku — Osc-pred-fun','Curious','sakura_teen'),
    mk('お前、英語の教科書でクレアって名前出てたな、桜','You — Eng-Claire Sakura','Curious','riku_teen'),
    mk('リク、お前、20世紀フォックスの映画好きだったな','Riku — Fox-film-fan','Curious','sakura_teen'),
    mk('お前、ゲームで魔物退治してたろ、桜','You — game-mons-defeat? Sakura','Wry','riku_teen'),
    mk('リク、お前、英会話で「プリーズ」連発してたな','Riku — Eng-"please"-overuse','Wry','sakura_teen'),
    mk('お前、社会で江戸の乞食、つまり物乞い文化習ったろ、桜','You — soc-Edo-beggar-cult? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10880',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが聖書の解説で「サタンの誘惑」を語って下さるわ','Sho — Dad-Bib-Satan-talk','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと羽生結弦選手の演技動画観たよ','Mom — me Dad-Hanyu-Yuz-vid','Eager child','sho_child'),
    mk('翔くん、お父さんがアカデミー賞のオスカー特集を観てらっしゃるわ','Sho — Dad-Osc-fea','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとクレア・デインズ主演のドラマ観たよ','Mom — me Dad-Claire-Dan-dr','Eager child','sho_child'),
    mk('翔くん、お父さんが20世紀フォックスの古い映画を観てらっしゃるわ','Sho — Dad-Fox-old-film','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと「魔物退治」のRPGプレイしたよ','Mom — me Dad-"mons"-RPG','Eager child','sho_child'),
    mk('翔くん、お父さんが「英語の『プリーズ』は丁寧な依頼」って教えて下さるわ','Sho — Dad-"please-req"-teach','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「『乞食』は配慮深く扱う言葉」って教えて頂いたよ','Mom — me Dad-"beggar-care"-teach','Earnest close','sho_child'),
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

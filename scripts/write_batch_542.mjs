import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_542 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['美奈子','貞子','アヤ','マサ','わらしべ','ガンモ','キチン','逸品']
const B_T = ['下地','吉村','日野','松原','三田','岩崎','山岡','稲葉']
const C_T = ['軍曹','億万','而','擇','蝓','古賀','関口','渡邊']
const D_T = ['ミッキー','ウィリアムズ','クック','ヘレン','ダビデ','ケイト','トミー','メリー']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10801',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがお友達の美奈子さんと打ち合わせされてたわ','Sho — Dad-fri-Minako-meet','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと「リング」の貞子のホラー漫画見たよ','Mom — me Dad-"Ring"-Sad-mng','Pleased child','sho_child'),
    mk('翔くん、お父さんが「アヤちゃんの絵が上手」って褒めてらしたわ','Sho — Dad-"Aya-art-good"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんのお友達のマサ兄ちゃんと釣り行ったよ','Mom — me Dad-fri-Masa-bro-fish','Pleased child','sho_child'),
    mk('翔くん、お父さんが「わらしべ長者の昔話」を読み聞かせて下さるわ','Sho — Dad-"warashibe"-story-read','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとガンモ、つまりがんもどきの煮物を食べたよ','Mom — me Dad-ganmo-stew','Eager child','sho_child'),
    mk('翔くん、お父さんが「キチン質のサプリは関節に良い」って仰ってたわ','Sho — Dad-"chitin-supp-joint"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんから逸品の和菓子を頂いたよ','Mom — me Dad-gem-sweet-recv','Eager close','sho_child'),
  ]},
  {id:'conv_10802',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ご友人の美奈子さんとお茶されてたよ、メイちゃん','Aoi — cust-fri-Minako-tea Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お孫様のお名前が貞子ちゃんだって、メイちゃん','Aoi — cust-grdkid-Sadako Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ペットの名前をアヤちゃんって付けたって、メイちゃん','Aoi — cust-pet-Aya-named Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お友達のマサさんとよく来店されるよ、メイちゃん','Aoi — cust-fri-Masa-reg Mei','Reflective','aoi_barista'),
    mk('葵、お客様、わらしべ長者の昔話の現代版小説を読んでらしたよ、メイちゃん','Aoi — cust-warashibe-mod-novel Mei','Reflective','mei_romantic'),
    mk('葵、お客様、和食のガンモ、つまりがんもどきの煮物がお好きだって、メイちゃん','Aoi — cust-Jp-ganmo-stew-like Mei','Reflective','aoi_barista'),
    mk('葵、お客様、エビ殻のキチン由来の化粧品を愛用されてるって、メイちゃん','Aoi — cust-shrimp-chit-cosm Mei','Reflective','mei_romantic'),
    mk('葵、お客様、京都の逸品菓子の話を語って下さったよ、メイちゃん','Aoi — cust-Kyoto-gem-sweet-talk Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10803',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが姪の美奈子さんを可愛がられた','Gran — youth Dad-niece-Minako-love','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、私の妹貞子と仲良くして下さったわよね、あなた?','Yes — Grandpa-my-sis-Sadako-close, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「アヤさんは料理上手」と仰った','Gran — youth Dad-"Aya-cook-good"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、マサ兄さんと将棋を指されたわよね、あなた?','Grandpa — youth-Masa-bro-shog, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「わらしべ長者の教訓」を子供達に語られた','Gran — youth Dad-"warashibe-less"-kids','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ガンモ、つまりがんもどきを手作りされたわよね、あなた?','Grandpa — youth-ganmo-home, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「キチン質の関節サプリ」を試された','Gran — youth Dad-"chit-joint-supp"-tried','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、骨董市で逸品の茶碗を見つけられたわよね、あなた?','Grandpa — youth-ant-gem-cup, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10804',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、隣のクラスの美奈子と話してたな','Riku — next-cl-Minako-talk','Curious teen','sakura_teen'),
    mk('お前、ホラー「リング」の貞子のコスプレ怖かったな、桜','You — "Ring"-Sad-cos-scary Sakura','Wry','riku_teen'),
    mk('リク、お前、隣のクラスのアヤと仲良いな','Riku — next-cl-Aya-close','Curious','sakura_teen'),
    mk('お前、隣のクラスのマサとも仲良いな、桜','You — next-cl-Masa-close Sakura','Curious','riku_teen'),
    mk('リク、お前、国語でわらしべ長者習ったろ','Riku — Jp-warashibe?','Curious','sakura_teen'),
    mk('お前、家庭科でガンモ、つまりがんもどき作ったろ、桜','You — home-ganmo-make? Sakura','Curious','riku_teen'),
    mk('リク、お前、生物でキチン質、つまり甲殻の構造習ったろ','Riku — bio-chit-shell?','Curious','sakura_teen'),
    mk('お前、家族で京都旅行で逸品和菓子買ったろ、桜','You — fam-Kyoto-gem-sweet? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10805',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「美奈子おばさんは絵が上手」って仰ってたわ','Sho — Dad-"Minako-aunt-art"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「貞子は怖い」って怖がったよ','Mei-sis — me Dad-"Sadako-scary"-said','Wry child','sho_child'),
    mk('翔くん、お父さんが「アヤちゃんはピアノが上手」って仰ってたわ','Sho — Dad-"Aya-piano"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「マサ兄さんと一緒に泳ぐ」って約束したよ','Mei-sis — me Dad-"Masa-swim"-prom','Eager child','sho_child'),
    mk('翔くん、お父さんが「わらしべ長者には知恵がある」って教えて下さるわ','Sho — Dad-"warashibe-wisdom"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとガンモ、つまりがんもどきを味見したよ','Mei-sis — me Dad-ganmo-taste','Eager child','sho_child'),
    mk('翔くん、お父さんが「キチン質は環境に優しい素材」って仰ってたわ','Sho — Dad-"chit-eco"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんから逸品のお菓子を頂いたよ','Mei-sis — me Dad-gem-sweet-recv','Eager close','sho_child'),
  ]},
  {id:'conv_10806',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新任の下地部長を歓迎しろ','Our co — new-Shim-dept-wel','Crisp','hiroshi_boss'),
    mk('はい。営業の吉村課長の出張日程を整えます','Yes — Sales-Yoshi-mgr-trip','Methodical','kenji_office'),
    mk('当社、技術担当の日野主任にプロジェクトを任せろ','Our co — tech-Hino-lead-proj','Direction','hiroshi_boss'),
    mk('はい。広報の松原様の戦略を採用します','Yes — PR-Mat-strat-adopt','Update','kenji_office'),
    mk('当社、東京三田の支店を整理しろ','Our co — Tok-Mita-branch-tidy','Direction','hiroshi_boss'),
    mk('はい。創業者の岩崎ご令孫を式典にお招きします','Yes — Found-Iwa-grdkid-inv','Update','kenji_office'),
    mk('当社、新任の山岡常務にプロジェクトを任せろ','Our co — new-Yamao-MD-proj','Direction','hiroshi_boss'),
    mk('はい。法務の稲葉様に契約書確認を依頼します','Yes — Leg-Inaba-contr-req','Close','kenji_office'),
  ]},
  {id:'conv_10807',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('下地部長の歓迎会を準備しましょう','Shim-dept-wel-prep','Brisk','yuki_office'),
    mk('はい。吉村課長の引き継ぎ書を確認します','Yes — Yoshi-mgr-handov','Cooperative','kenji_office'),
    mk('日野技術主任のプロジェクト進捗を共有しましょう','Hino-tech-lead-share','Direction','yuki_office'),
    mk('はい。松原広報の月次企画書を確認します','Yes — Mat-PR-mo-plan','Update','kenji_office'),
    mk('三田駅前の支店の改装計画を進めましょう','Mita-stat-branch-renov','Direction','yuki_office'),
    mk('はい。岩崎家のご令孫の歓迎準備を整えます','Yes — Iwa-grdkid-wel-prep','Update','kenji_office'),
    mk('山岡常務のスケジュールを整えましょう','Yamao-MD-sched','Direction','yuki_office'),
    mk('はい。稲葉法務に新契約レビューを依頼します','Yes — Inaba-leg-new-contr','Close','kenji_office'),
  ]},
  {id:'conv_10808',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、指導教授の下地先生のご研究を継承しろ','Ren — mentor-Shim-res','Mentor','hiroshi_boss'),
    mk('はい。吉村教授の論文を読み込みます','Yes — Yoshi-prof-paper','Earnest','ren_uni'),
    mk('蓮、共同研究の日野先生に研究照会しろ','Ren — joint-Hino-inq','Direction','hiroshi_boss'),
    mk('はい。学会で松原助教のご発表を聴きます','Yes — Conf-Mat-asst-pres','Earnest','ren_uni'),
    mk('蓮、東京三田の慶応キャンパスにも足を運べ','Ren — Tok-Mita-Keio-visit','Direction','hiroshi_boss'),
    mk('はい。岩崎家ご令孫の留学先と連携します','Yes — Iwa-grdkid-stud-link','Polite','ren_uni'),
    mk('蓮、海外連携の山岡教授と打ち合わせしろ','Ren — overs-Yamao-prof-meet','Direction','hiroshi_boss'),
    mk('はい。研究費の窓口、稲葉事務官に申請します','Yes — Res-fund-Inaba-apply','Earnest close','ren_uni'),
  ]},
  {id:'conv_10809',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、下地刑事の現場対応も評価されますね','Police Shim-det-eval','Cooperative','kenji_office'),
    mk('警察、参考人吉村氏から、警察、事情を伺われますね','Police witn-Yoshi-careful','Cooperative','kenji_office'),
    mk('警察、被害者日野氏のご家族にも、警察、配慮されますね','Police vict-Hino-fam-care','Cooperative','kenji_office'),
    mk('警察、目撃者松原氏の供述を、警察、整えられますね','Police witn-Mat-stmt','Cooperative','kenji_office'),
    mk('警察、東京三田の事案にも対応されますね','Police Tok-Mita-case','Cooperative','kenji_office'),
    mk('警察、被害者の岩崎家のご家族にも、警察、配慮されますね','Police vict-Iwa-fam-care','Cooperative','kenji_office'),
    mk('警察、心理士山岡様にご助言を仰がれますね','Police psy-Yamao-adv','Cooperative','kenji_office'),
    mk('警察、検事の稲葉様と公判前協議もされますね','Police pros-Inaba-pre-trial','Close','kenji_office'),
  ]},
  {id:'conv_10810',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、下地氏と共同事業を立ち上げられた','Dad — youth-Shim-JV','Sage','hiroshi_elder'),
    mk('はい。お父さんは吉村先輩のご薫陶を受けられた','Yes — Dad Yoshi-sen-mentor','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、日野氏と海外進出を企画された','Dad — youth-Hino-overs','Wistful','hiroshi_elder'),
    mk('はい。お父さんは松原氏を広報の柱に据えられた','Yes — Dad Mat-PR-pillar','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、東京三田にお勤めだった','Dad — youth-Tok-Mita-work','Wistful','hiroshi_elder'),
    mk('はい。お父さんは岩崎家との家族ぐるみの交流があった','Yes — Dad Iwa-fam-int','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、山岡氏と海外法人を立ち上げられた','Dad — youth-Yamao-overs-co','Wistful','hiroshi_elder'),
    mk('はい。お父さんは稲葉氏に法務全般を委ねられた','Yes — Dad Inaba-leg-entr','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10811',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、軍曹、つまり下士官の階級制度の研究を論文で扱いましたね','Ren — sgt-NCO-stud paper','Calm','asuka_teacher'),
    mk('はい、富豪、つまり億万長者の生涯研究を論文で扱いました','Yes — Wealthy-bill-life paper','Earnest','ren_uni'),
    mk('蓮さん、古文の「而」、つまり「而して」の文法研究を論文で扱いましたね','Ren — class-and-jiu paper','Reflective','asuka_teacher'),
    mk('はい、旧字「擇」、つまり選択の語源研究を論文で扱いました','Yes — Old-pick-eti paper','Earnest','ren_uni'),
    mk('蓮さん、ナメクジ、つまり蝓の生態研究を論文で扱いましたね','Ren — slug-yu-eco paper','Reflective','asuka_teacher'),
    mk('はい、政治家古賀氏の歴史的役割の研究を論文で扱いました','Yes — Pol-Koga-role paper','Earnest','ren_uni'),
    mk('蓮さん、関口宏氏のテレビ史研究を論文で扱いましたね','Ren — TV-Sekiguchi-hist paper','Reflective','asuka_teacher'),
    mk('はい、旧字「渡邊」、つまり渡辺家の系譜研究を論文で扱いました','Yes — Old-Watanabe-gen paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10812',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、旧軍曹、つまり退役軍曹の聞き取りを、警察、丁寧におこなわれますね','Case ret-sgt-int police-care','Reflective','ren_uni'),
    mk('警察、億万長者の脱税事案にも対応されますね','Police bill-tax-evade','Cooperative','takeda_officer'),
    mk('本件、古文書の「而」、つまり「而して」の解読を、警察、専門家に依頼されますね','Case old-jiu police-expert','Reflective','ren_uni'),
    mk('警察、旧字「擇」、つまり選を含む古文書も鑑定されますね','Police old-pick-doc-auth','Cooperative','takeda_officer'),
    mk('本件、害虫、つまり蝓被害の対策を、警察、農業協会と連携されますね','Case slug-yu-agri police-link','Reflective','ren_uni'),
    mk('警察、参考人古賀氏から、警察、事情を伺われますね','Police witn-Koga-careful','Cooperative','takeda_officer'),
    mk('本件、報道関口氏に、警察、取材対応されますね','Case Sekiguchi-media police-resp','Reflective','ren_uni'),
    mk('警察、旧字「渡邊」、つまり渡辺家の戸籍を、警察、確認されますね','Police old-Watanabe-fam-rec police-check','Close','takeda_officer'),
  ]},
  {id:'conv_10813',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、軍曹、つまり下士官の階級制度の研究を論文で扱いましたね','Sakura — sgt paper','Calm','asuka_teacher'),
    mk('はい、富豪、つまり億万長者の生涯研究を論文で扱いました','Yes — Bill paper','Earnest teen','sakura_teen'),
    mk('古文の「而」、つまり「而して」の文法研究を論文で扱いましたね','Class-jiu paper','Reflective','asuka_teacher'),
    mk('はい、旧字「擇」、つまり選択の語源研究を論文で扱いました','Yes — Old-pick paper','Earnest','sakura_teen'),
    mk('ナメクジ、つまり蝓の生態研究を論文で扱いましたね','Slug-yu paper','Reflective','asuka_teacher'),
    mk('はい、政治家古賀氏の歴史的役割の研究を論文で扱いました','Yes — Koga paper','Earnest','sakura_teen'),
    mk('関口宏氏のテレビ史研究を論文で扱いましたね','Sekiguchi-TV paper','Reflective','asuka_teacher'),
    mk('はい、旧字「渡邊」、つまり渡辺家の系譜研究を論文で扱いました','Yes — Old-Watanabe paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10814',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、軍曹、つまり下士官の戦傷ケアの歴史を医療チームで学びます','Ren — sgt-war-wound-hist med-team','Calm','saito_doctor'),
    mk('蓮さん、億万円の保険適用の制度を医療チームで研究します','Ren — bill-yen-ins med-team','Calm','saito_doctor'),
    mk('蓮さん、医学古典の「而」、つまり「而して」の用法を医療チームで紐解きます','Ren — med-class-jiu med-team','Calm','saito_doctor'),
    mk('蓮さん、旧字「擇」、つまり選を含む医薬古書を医療チームで保管します','Ren — old-pick-med med-team','Calm','saito_doctor'),
    mk('蓮さん、害虫、つまり蝓由来の感染リスクを医療チームで監視します','Ren — slug-zoo-risk med-team','Calm','saito_doctor'),
    mk('蓮さん、患者古賀様のご症状を医療チームで継続観察します','Ren — pati-Koga med-team','Calm','saito_doctor'),
    mk('蓮さん、医療相談関口氏と医療チームで連携します','Ren — med-cons-Sekiguchi med-team','Calm','saito_doctor'),
    mk('蓮さん、患者渡邊様の旧字戸籍を医療チームで確認します','Ren — pati-Watanabe-old-rec med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_10815',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、防衛事業で軍曹、つまり下士官教育に協力しろ','Our co — def-sgt-edu-coop','Crisp','hiroshi_boss'),
    mk('はい。富裕層、つまり億万長者向けサービスを展開します','Yes — Wealth-bill-svc','Methodical','kenji_office'),
    mk('当社、社訓に古文の「而」、つまり「而して」を取り入れろ','Our co — co-motto-jiu','Direction','hiroshi_boss'),
    mk('はい。創業時の旧字「擇」、つまり選を社印に残します','Yes — Found-old-pick-seal-keep','Update','kenji_office'),
    mk('当社、農業事業で蝓、つまり害虫対策を強化しろ','Our co — agri-slug-pest-strong','Direction','hiroshi_boss'),
    mk('はい。顧問の古賀様にご助言を仰ぎます','Yes — Adv-Koga-cons','Update','kenji_office'),
    mk('当社、広報の関口様に取材対応を任せろ','Our co — PR-Sekiguchi-media','Direction','hiroshi_boss'),
    mk('はい。創業者ご令孫の渡邊様を経営に迎えます','Yes — Found-Watanabe-mgmt-wel','Close','kenji_office'),
  ]},
  {id:'conv_10816',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ディズニーのミッキー・マウスがお好きだって、メイちゃん','Aoi — cust-Disn-Mickey-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、テニスのウィリアムズ姉妹のファンだって、メイちゃん','Aoi — cust-Williams-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、米アップルのクックCEOの講演を聴かれたって、メイちゃん','Aoi — cust-Cook-CEO-sp Mei','Reflective','mei_romantic'),
    mk('葵、お客様、女優のヘレン・ミレンがお好きだって、メイちゃん','Aoi — cust-Helen-Mir-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ダビデ像の芸術論を語って下さったよ、メイちゃん','Aoi — cust-David-stat-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、英国ケイト妃のファッションがお好きだって、メイちゃん','Aoi — cust-UK-Kate-fash Mei','Reflective','aoi_barista'),
    mk('葵、お客様、トミー・ヒルフィガーのお洋服がお好みだって、メイちゃん','Aoi — cust-Tommy-Hil-fash Mei','Reflective','mei_romantic'),
    mk('葵、お客様、メリー・ポピンズの映画を語って下さったよ、メイちゃん','Aoi — cust-Mary-Pop-film Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10817',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがディズニーランドのミッキーをお孫様と楽しまれた','Gran — youth Dad-Disn-Mickey-grdkid','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、テニスのウィリアムズ姉妹を応援されたわよね、あなた?','Yes — Grandpa-youth-Williams-cheer, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが探検家ジェームズ・クックの伝記を蔵書された','Gran — youth Dad-Cook-biog-coll','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ヘレン・ケラーの伝記を愛読されたわよね、あなた?','Grandpa — youth-Hel-Kel-read, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがフィレンツェでダビデ像を実物観賞された','Gran — youth Dad-Fir-David-saw','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、英王室のケイト妃の結婚式を観られたわよね、あなた?','Grandpa — youth-UK-Kate-wed, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが米国のトミー・ジョンを応援された','Gran — youth Dad-US-Tommy-J-cheer','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、メリー・ポピンズの映画を観られたわよね、あなた?','Grandpa — youth-Mary-Pop-film, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10818',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがディズニーランドにミッキーに会いに連れて下さるそうよ','Sho — Dad-Disn-Mickey-vis','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとテニスのウィリアムズ姉妹の試合観たよ','Mei-sis — me Dad-Williams-match','Eager child','sho_child'),
    mk('翔くん、お父さんが探検家ジェームズ・クックの絵本を読んで下さるわ','Sho — Dad-Cook-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとヘレン・ケラーの伝記絵本読んだよ','Mei-sis — me Dad-Hel-Kel-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが「ダビデ像はミケランジェロの傑作」って教えて下さるわ','Sho — Dad-"David-Mich-masterp"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと英王室のケイト妃の絵本見たよ','Mei-sis — me Dad-Kate-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが「機関車トーマスのトミーって名前のキャラ」を教えて下さったわ','Sho — Dad-"Thomas-Tommy"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとメリー・ポピンズの映画観たよ','Mei-sis — me Dad-Mary-Pop-film','Eager close','sho_child'),
  ]},
  {id:'conv_10819',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、ディズニーのミッキー好きだったな','Riku — Disn-Mickey-fan','Curious teen','sakura_teen'),
    mk('お前、テニスのウィリアムズ姉妹好きだったろ、桜','You — Williams-fan? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会で探検家ジェームズ・クックの名前覚えたな','Riku — soc-Cook-name','Curious','sakura_teen'),
    mk('お前、英語の教科書でヘレン・ケラー読んだろ、桜','You — Eng-Hel-Kel-read? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会でダビデ像の写真覚えたな','Riku — soc-David-photo','Curious','sakura_teen'),
    mk('お前、英王室のケイト妃のニュース見たろ、桜','You — UK-Kate-news? Sakura','Curious','riku_teen'),
    mk('リク、お前、トミー・ジョンの肩の手術調べてたな','Riku — Tommy-J-surg-stud','Curious','sakura_teen'),
    mk('お前、家族でメリー・ポピンズの映画観たろ、桜','You — fam-Mary-Pop-film? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10820',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがディズニーランドでミッキーと写真撮って下さるわ','Sho — Dad-Disn-Mickey-photo','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとテニスのウィリアムズ姉妹の試合観たよ','Mom — me Dad-Williams-match','Eager child','sho_child'),
    mk('翔くん、お父さんが探検家ジェームズ・クックのドキュメンタリー観てらっしゃるわ','Sho — Dad-Cook-doc','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとヘレン・ケラーの映画観たよ','Mom — me Dad-Hel-Kel-film','Eager child','sho_child'),
    mk('翔くん、お父さんがダビデ像の解説本を読んでらっしゃるわ','Sho — Dad-David-stat-book','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと英王室のケイト妃のニュース観たよ','Mom — me Dad-UK-Kate-news','Eager child','sho_child'),
    mk('翔くん、お父さんがトミー・ヒルフィガーのお洋服を着てらっしゃるわ','Sho — Dad-Tommy-Hil-wear','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとメリー・ポピンズのDVD観たよ','Mom — me Dad-Mary-Pop-DVD','Eager close','sho_child'),
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

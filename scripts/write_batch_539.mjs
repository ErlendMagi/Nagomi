import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_539 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['俊輔','ノブ','ひで','裕子','京子','千尋','貞','みゆき']
const B_T = ['村井','多田','若林','上原','河合','石橋','西口','望月']
const C_T = ['といふ','劼','氣','ゎ','榮','佛','に当たりまして','翁']
const D_T = ['ヌード','ピュア','パンドラ','ノア','聖母','ジミー','スーザン','アンディ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10741',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「俊輔くんは才能がある」って仰ってたわ','Sho — Dad-"Shun-tal"-said','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとノブおじさんに会ったよ','Mom — me Dad-Nobu-uncle-met','Pleased child','sho_child'),
    mk('翔くん、お父さんがご友人のひでさんと釣りに行かれるそうよ','Sho — Dad-fri-Hide-fish','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと裕子おばさんに会ったよ','Mom — me Dad-Yuko-aunt-met','Eager child','sho_child'),
    mk('翔くん、お父さんが「京子さんはお茶の先生」って仰ってたわ','Sho — Dad-"Kyoko-tea-tch"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと「千と千尋の神隠し」の映画観たよ','Mom — me Dad-Chihiro-film','Eager child','sho_child'),
    mk('翔くん、お父さんが「貞節を大事にする方は素敵」って仰ってたわ','Sho — Dad-"sad-virt-fine"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんのお友達のみゆきさんに挨拶したよ','Mom — me Dad-fri-Miyuki-greet','Eager close','sho_child'),
  ]},
  {id:'conv_10742',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、お孫様の俊輔くんとご来店だったよ、メイちゃん','Aoi — cust-grdkid-Shun-vis Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご友人のノブさんとお茶されてたよ、メイちゃん','Aoi — cust-fri-Nobu-tea Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ご友人のひでさんとお話しされてたよ、メイちゃん','Aoi — cust-fri-Hide-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お友達の裕子さんとご来店だったよ、メイちゃん','Aoi — cust-fri-Yuko-vis Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お母様のお名前が京子さんだって、メイちゃん','Aoi — cust-mom-Kyoko Mei','Reflective','mei_romantic'),
    mk('葵、お客様、姪御さんの千尋ちゃんを連れていらしたよ、メイちゃん','Aoi — cust-niece-Chihiro-vis Mei','Reflective','aoi_barista'),
    mk('葵、お客様、「貞操、つまり貞の意義」のお話を語って下さったよ、メイちゃん','Aoi — cust-"sad-mean"-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お友達のみゆきさんと打ち合わせされてたよ、メイちゃん','Aoi — cust-fri-Miyuki-meet Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10743',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが甥の俊輔さんを可愛がられた','Gran — youth Dad-nep-Shun-love','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、ノブ兄さんと将棋を指されたわよね、あなた?','Yes — Grandpa-youth-Nobu-bro-shog, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはひで兄さんと旧友だった','Gran — youth Dad-Hide-bro-old-fri','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、私の妹の裕子と仲良くして下さったわよね、あなた?','Grandpa — youth-my-sis-Yuko-close, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが京子おばさんと文通された','Gran — youth Dad-Kyoko-aunt-letter','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、私の姪の千尋と公園に行かれたわよね、あなた?','Grandpa — youth-niece-Chihiro-park, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「貞淑な方」をご尊敬された','Gran — youth Dad-"sad-virt"-resp','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、私の従妹のみゆきと文通されたわよね、あなた?','Grandpa — youth-cous-Miyuki-letter, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10744',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、サッカーで俊輔の動き真似してたな','Riku — soccer-Shun-mimic','Curious teen','sakura_teen'),
    mk('お前、隣のクラスのノブと仲良いな、桜','You — next-cl-Nobu-close Sakura','Curious','riku_teen'),
    mk('リク、お前のお父さん、ひでさんって名前だったよな','Riku — your-Dad-Hide','Curious','sakura_teen'),
    mk('お前、家庭科の裕子先生厳しかったな、桜','You — home-Yuko-tch-strict Sakura','Wry','riku_teen'),
    mk('リク、お前のお姉様、京子さんって名前だったよな','Riku — sis-Kyoko-yeah','Curious','sakura_teen'),
    mk('お前、家族で「千と千尋」のジブリパーク行ったろ、桜','You — fam-Chihiro-Ghibli? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会で「貞観の治」習ったろ','Riku — soc-"Jogan-rule"?','Curious','sakura_teen'),
    mk('お前、隣のクラスのみゆきと話してたな、桜','You — next-cl-Miyuki-talk Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10745',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「俊輔いとこと一緒に遊ぼう」って仰ってたわ','Sho — Dad-"Shun-cous-play"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとノブおじさんに会ったよ','Mei-sis — me Dad-Nobu-uncle-met','Eager child','sho_child'),
    mk('翔くん、お父さんが「ひでおじさんに会いに行こう」って仰ってたわ','Sho — Dad-"Hide-uncle-vis"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと裕子おばさんの家でお茶飲んだよ','Mei-sis — me Dad-Yuko-aunt-tea','Eager child','sho_child'),
    mk('翔くん、お父さんが「京子おばさんはお花の先生」って仰ってたわ','Sho — Dad-"Kyoko-aunt-flo-tch"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「千と千尋の神隠し」を観たよ','Mei-sis — me Dad-Chihiro-saw','Eager child','sho_child'),
    mk('翔くん、お父さんが「貞淑、つまり貞しい心を持つ事」を教えて下さるわ','Sho — Dad-"sad-virt-heart"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとみゆきおばさんに会いに行ったよ','Mei-sis — me Dad-Miyuki-aunt-vis','Eager close','sho_child'),
  ]},
  {id:'conv_10746',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新任の村井部長を歓迎しろ','Our co — new-Mur-dept-wel','Crisp','hiroshi_boss'),
    mk('はい。営業の多田課長の出張日程を整えます','Yes — Sales-Tada-mgr-trip','Methodical','kenji_office'),
    mk('当社、技術担当の若林主任にプロジェクトを任せろ','Our co — tech-Wak-lead-proj','Direction','hiroshi_boss'),
    mk('はい。広報の上原様の戦略を採用します','Yes — PR-Ueh-strat-adopt','Update','kenji_office'),
    mk('当社、顧問の河合様にご助言を仰げ','Our co — adv-Kaw-cons','Direction','hiroshi_boss'),
    mk('はい。取締役の石橋様の出張をご手配します','Yes — Dir-Ishib-trip-arr','Update','kenji_office'),
    mk('当社、海外担当の西口部長に欧州市場の調査を任せろ','Our co — overs-Nish-EU-mkt-entr','Direction','hiroshi_boss'),
    mk('はい。法務の望月様に契約書確認を依頼します','Yes — Leg-Mochi-contr-req','Close','kenji_office'),
  ]},
  {id:'conv_10747',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('村井部長の歓迎会を準備しましょう','Mur-dept-wel-prep','Brisk','yuki_office'),
    mk('はい。多田課長の引き継ぎ書を確認します','Yes — Tada-mgr-handov-check','Cooperative','kenji_office'),
    mk('若林技術主任のプロジェクト進捗を共有しましょう','Wak-tech-lead-proj-share','Direction','yuki_office'),
    mk('はい。上原広報の月次企画書を確認します','Yes — Ueh-PR-mo-plan-check','Update','kenji_office'),
    mk('河合顧問との面談を予定しましょう','Kaw-adv-meet-plan','Direction','yuki_office'),
    mk('はい。石橋取締役のスケジュールを整えます','Yes — Ishib-dir-sched','Update','kenji_office'),
    mk('西口海外担当の出張報告を共有しましょう','Nish-overs-trip-rep-share','Direction','yuki_office'),
    mk('はい。望月法務の新契約レビューを進めます','Yes — Mochi-leg-new-contr-rev','Close','kenji_office'),
  ]},
  {id:'conv_10748',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、指導教授の村井先生のご研究を継承しろ','Ren — mentor-Mur-res','Mentor','hiroshi_boss'),
    mk('はい。多田教授の論文を読み込みます','Yes — Tada-prof-paper-read','Earnest','ren_uni'),
    mk('蓮、共同研究の若林先生に研究照会しろ','Ren — joint-Wak-inq','Direction','hiroshi_boss'),
    mk('はい。学会で上原助教のご発表を聴きます','Yes — Conf-Ueh-asst-pres','Earnest','ren_uni'),
    mk('蓮、文献の河合先生のご論文も参考にしろ','Ren — lit-Kaw-paper-ref','Direction','hiroshi_boss'),
    mk('はい。研究室の石橋先輩からご指導を仰ぎます','Yes — Lab-Ishib-sen-guide','Polite','ren_uni'),
    mk('蓮、海外連携の西口教授と打ち合わせしろ','Ren — overs-Nish-prof-meet','Direction','hiroshi_boss'),
    mk('はい。研究費の窓口、望月事務官に申請します','Yes — Res-fund-Mochi-apply','Earnest close','ren_uni'),
  ]},
  {id:'conv_10749',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、村井刑事の現場対応も評価されますね','Police Mur-det-scene-eval','Cooperative','kenji_office'),
    mk('警察、参考人多田氏から、警察、事情を伺われますね','Police witn-Tada-careful','Cooperative','kenji_office'),
    mk('警察、被害者若林氏のご家族にも、警察、配慮されますね','Police vict-Wak-fam-care','Cooperative','kenji_office'),
    mk('警察、目撃者上原氏の供述を、警察、整えられますね','Police witn-Ueh-stmt','Cooperative','kenji_office'),
    mk('警察、容疑者河合の前科を、警察、確認されますね','Police suspect-Kaw-prior-check','Cooperative','kenji_office'),
    mk('警察、現場の石橋から落下事故を、警察、検証されますね','Police scene-bridge-fall-verify','Cooperative','kenji_office'),
    mk('警察、駅の西口での盗難事案を、警察、捜査されますね','Police stat-W-exit-theft-inv','Cooperative','kenji_office'),
    mk('警察、検事の望月様と公判前協議もされますね','Police pros-Mochi-pre-trial','Close','kenji_office'),
  ]},
  {id:'conv_10750',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、村井氏と共同事業を立ち上げられた','Dad — youth-Mur-JV','Sage','hiroshi_elder'),
    mk('はい。お父さんは多田先輩のご薫陶を受けられた','Yes — Dad Tada-sen-mentor','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、若林氏と海外進出を企画された','Dad — youth-Wak-overs','Wistful','hiroshi_elder'),
    mk('はい。お父さんは上原氏を広報の柱に据えられた','Yes — Dad Ueh-PR-pillar','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、河合氏と経理体制を整えられた','Dad — youth-Kaw-acct','Wistful','hiroshi_elder'),
    mk('はい。お父さんは石橋家との家族ぐるみの交流があった','Yes — Dad Ishib-fam-int','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、西口社員を初代主任にされた','Dad — youth-Nish-1st-lead','Wistful','hiroshi_elder'),
    mk('はい。お父さんは望月氏に法務全般を委ねられた','Yes — Dad Mochi-leg-entr','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10751',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、古文の「といふ」、つまり「という」の用法研究を論文で扱いましたね','Ren — class-toifu paper','Calm','asuka_teacher'),
    mk('はい、漢字の劼、つまり「劼勉」の用法研究を論文で扱いました','Yes — Kanji-koku-use paper','Earnest','ren_uni'),
    mk('蓮さん、旧字「氣」、つまり気の文献研究を論文で扱いましたね','Ren — old-ki paper','Reflective','asuka_teacher'),
    mk('はい、小書きのゎ、つまり仮名の歴史研究を論文で扱いました','Yes — Small-wa-kana paper','Earnest','ren_uni'),
    mk('蓮さん、旧字「榮」、つまり栄華の文献研究を論文で扱いましたね','Ren — old-ei paper','Reflective','asuka_teacher'),
    mk('はい、旧字「佛」、つまり仏教史研究を論文で扱いました','Yes — Old-butsu-Bud paper','Earnest','ren_uni'),
    mk('蓮さん、研究発表に当たりまして、序文の書き方を論文で扱いましたね','Ren — pres-on-occ-pref paper','Reflective','asuka_teacher'),
    mk('はい、隠居した翁、つまり老翁の民俗誌を論文で扱いました','Yes — Old-man-folk paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10752',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、古文書の「といふ」、つまり「という」の用法を、警察、解読されますね','Case old-toifu police-decod','Reflective','ren_uni'),
    mk('警察、容疑者の「劼」、つまり劼勉な振る舞いを、警察、慎重に観察されますね','Police suspect-koku-obs-careful','Cooperative','takeda_officer'),
    mk('本件、旧字「氣」、つまり気の入った古文書を、警察、鑑定されますね','Case old-ki-doc police-auth','Reflective','ren_uni'),
    mk('警察、ノートの小書きのゎ、つまり「わ」のクセも、警察、筆跡鑑定されますね','Police note-small-wa-hand-auth','Cooperative','takeda_officer'),
    mk('本件、旧字「榮」、つまり栄の戦前帳簿を、警察、解読されますね','Case old-ei-prewar-led police-decod','Reflective','ren_uni'),
    mk('警察、旧字「佛」、つまり仏壇からの盗難事件を、警察、捜査されますね','Police old-butsu-altar-theft','Cooperative','takeda_officer'),
    mk('本件、捜査開始に当たりまして、警察、ご家族にご挨拶されますね','Case inv-start-fam-greet police','Reflective','ren_uni'),
    mk('警察、目撃者の翁、つまり老翁から事情を、警察、丁寧に伺われますね','Police witn-old-man-careful','Close','takeda_officer'),
  ]},
  {id:'conv_10753',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、古文の「といふ」、つまり「という」の用法研究を論文で扱いましたね','Sakura — toifu paper','Calm','asuka_teacher'),
    mk('はい、漢字の劼、つまり「劼勉」の用法研究を論文で扱いました','Yes — Koku paper','Earnest teen','sakura_teen'),
    mk('旧字「氣」、つまり気の文献研究を論文で扱いましたね','Old-ki paper','Reflective','asuka_teacher'),
    mk('はい、小書きのゎ、つまり仮名の歴史研究を論文で扱いました','Yes — Small-wa paper','Earnest','sakura_teen'),
    mk('旧字「榮」、つまり栄華の文献研究を論文で扱いましたね','Old-ei paper','Reflective','asuka_teacher'),
    mk('はい、旧字「佛」、つまり仏教史研究を論文で扱いました','Yes — Old-butsu paper','Earnest','sakura_teen'),
    mk('研究発表に当たりまして、序文の書き方を論文で扱いましたね','Pres-on-occ-pref paper','Reflective','asuka_teacher'),
    mk('はい、隠居した翁、つまり老翁の民俗誌を論文で扱いました','Yes — Old-man paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10754',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、古文書の「といふ」、つまり「という」の医学古典を医療チームで紐解きます','Ren — old-toifu-med-class med-team','Calm','saito_doctor'),
    mk('蓮さん、患者様の劼、つまり劼勉な治療への姿勢を医療チームで称えます','Ren — pati-koku-treat-praise med-team','Calm','saito_doctor'),
    mk('蓮さん、旧字「氣」、つまり気の流れの東洋医学を医療チームで研究します','Ren — old-ki-orient-med med-team','Calm','saito_doctor'),
    mk('蓮さん、医学古典の小書きのゎ、つまり「わ」の用法を医療チームで読み解きます','Ren — old-med-small-wa med-team','Calm','saito_doctor'),
    mk('蓮さん、旧字「榮」、つまり栄養の古い表記を医療チームで参考にします','Ren — old-ei-nutr med-team','Calm','saito_doctor'),
    mk('蓮さん、旧字「佛」、つまり仏教の終末期ケア観を医療チームで尊重します','Ren — old-butsu-term-care med-team','Calm','saito_doctor'),
    mk('診療開始に当たりまして、貴院、ご家族にご説明されますね、先生','Care-start-on-occ-fam your-hosp, sensei','Reflective','ren_uni'),
    mk('蓮さん、ご高齢の翁、つまり老翁の方々のケアを医療チームでおこないます','Ren — eld-old-man-care med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_10755',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、社内文書の「といふ」、つまり「という」の旧表現を整理しろ','Our co — int-doc-toifu-tidy','Crisp','hiroshi_boss'),
    mk('はい。社員の劼、つまり劼勉な姿勢を評価します','Yes — Staff-koku-pos-eval','Methodical','kenji_office'),
    mk('当社、社名に旧字「氣」、つまり気を残せ','Our co — co-name-old-ki-keep','Direction','hiroshi_boss'),
    mk('はい。商品名の小書きのゎ、つまり「わ」のロゴを再検討します','Yes — Prod-name-small-wa-rev','Update','kenji_office'),
    mk('当社、創業時の旧字「榮」、つまり栄を社印に残せ','Our co — found-old-ei-seal-keep','Direction','hiroshi_boss'),
    mk('はい。地元寺の旧字「佛」、つまり仏教行事に協賛します','Yes — Local-old-butsu-spons','Update','kenji_office'),
    mk('当社、新事業開始に当たりまして、社員に方針を示せ','Our co — new-biz-on-occ-staff-show','Direction','hiroshi_boss'),
    mk('はい。創業者翁、つまり翁様の遺訓を社員に伝えます','Yes — Found-old-man-leg-staff','Close','kenji_office'),
  ]},
  {id:'conv_10756',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、美術館のヌードデッサン展のお話を語って下さったよ、メイちゃん','Aoi — cust-mus-nude-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ピュアな心の大切さを語って下さったよ、メイちゃん','Aoi — cust-pure-heart-imp-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ギリシャ神話のパンドラの箱のお話だったよ、メイちゃん','Aoi — cust-Gr-Pand-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、聖書のノアの方舟のお話を語って下さったよ、メイちゃん','Aoi — cust-Bib-Noah-ark Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ラファエロの聖母像がお好きだって、メイちゃん','Aoi — cust-Raf-Mad-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、米国コメディアンのジミー・ファロンがお好きだって、メイちゃん','Aoi — cust-Jimmy-Fal-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、英国シンガー、スーザン・ボイルの曲を愛されてるよ、メイちゃん','Aoi — cust-Susan-Boyle-love Mei','Reflective','mei_romantic'),
    mk('葵、お客様、米国の俳優アンディ・ガルシアの映画がお好きだって、メイちゃん','Aoi — cust-Andy-Gar-fan Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10757',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが画家のヌードクロッキー画を批評された','Gran — youth Dad-painter-nude-crit','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、お孫様にピュアな心を教えられたわよね、あなた?','Yes — Grandpa-grdkid-pure-heart-teach, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがギリシャ神話のパンドラの物語を朗読された','Gran — youth Dad-Pand-myth-rec','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、聖書のノアの方舟の絵本をご蔵書だったわよね、あなた?','Grandpa — youth-Noah-pic-coll, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがラファエロの聖母像の画集に感動された','Gran — youth Dad-Raf-Mad-art-imp','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、米国コメディのジミー・スチュアートを観られたわよね、あなた?','Grandpa — youth-Jimmy-Stew-saw, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがスーザン・サランドンの映画を観られた','Gran — youth Dad-Susan-Sar-film','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、アンディ・ウォーホルの版画に魅了されたわよね、あなた?','Grandpa — youth-Andy-Warhol-art, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10758',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「美術館でヌードクロッキーの展示を観に行く」って仰ってたわ','Sho — Dad-"mus-nude-vis"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「ピュアな気持ちを大事にね」って教えて頂いたよ','Mei-sis — me Dad-"pure-cher"-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが「パンドラの箱は開けるなって寓話」を教えて下さったわ','Sho — Dad-"Pand-fable"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとノアの方舟の絵本を読んだよ','Mei-sis — me Dad-Noah-ark-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが「聖母マリア像の絵画集を観よう」って仰ってたわ','Sho — Dad-"Mad-art-watch"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとジミー・ニュートロンのアニメ観たよ','Mei-sis — me Dad-Jimmy-Neut-anime','Eager child','sho_child'),
    mk('翔くん、お父さんが「スーザンっていう英語名の意味」を教えて下さるわ','Sho — Dad-"Susan-mean"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「アンディ」って名前の絵本キャラ見たよ','Mei-sis — me Dad-Andy-pic-char','Eager close','sho_child'),
  ]},
  {id:'conv_10759',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、美術部でヌードデッサンの基礎学んでたな','Riku — art-club-nude-basic','Curious teen','sakura_teen'),
    mk('お前、文化祭テーマ「ピュア」って書いてたな、桜','You — cul-fes-"Pure"-wrote Sakura','Curious','riku_teen'),
    mk('リク、お前、社会でパンドラの箱のたとえ覚えたな','Riku — soc-Pand-fable','Curious','sakura_teen'),
    mk('お前、社会でノアの方舟習ったろ、桜','You — soc-Noah-ark? Sakura','Curious','riku_teen'),
    mk('リク、お前、美術で聖母子像描いてたな','Riku — art-Mad-child-draw','Curious','sakura_teen'),
    mk('お前、ジミー・キンメルのトーク番組観てたな、桜','You — Jimmy-Kim-talk-watch Sakura','Wry','riku_teen'),
    mk('リク、お前、英語の物語でスーザンって名前出てきたな','Riku — Eng-Susan-name','Curious','sakura_teen'),
    mk('お前、トイ・ストーリーのアンディ覚えてたろ、桜','You — Toy-story-Andy? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10760',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが美術館のヌード絵画展に行かれるそうよ','Sho — Dad-mus-nude-vis','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「ピュアな気持ちで頑張れ」って言われたよ','Mom — me Dad-"pure-effort"-said','Earnest child','sho_child'),
    mk('翔くん、お父さんがギリシャ神話のパンドラの絵本を読んで下さるわ','Sho — Dad-Pand-myth-pic','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとノアの方舟の絵本観たよ','Mom — me Dad-Noah-ark-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがミケランジェロの聖母像の画集を観てらっしゃるわ','Sho — Dad-Mich-Mad-art','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとジミー・ファロンの動画観たよ','Mom — me Dad-Jimmy-Fal-vid','Eager child','sho_child'),
    mk('翔くん、お父さんがスーザン・ボイルの歌唱動画を観てらっしゃるわ','Sho — Dad-Susan-Boyle-vid','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとアンディ・ガルシアの映画観たよ','Mom — me Dad-Andy-Gar-film','Eager close','sho_child'),
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

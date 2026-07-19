import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_553 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['杉山','土井','松尾','大石','杉浦','小坂','田原','赤松']
const B_T = ['島田','町田','森山','前原','足立','平山','椎名','村田']
const C_T = ['南西','貧弱','粘着','一滴','日照','辺境','罪人','首尾']
const D_T = ['有馬','松浦','コウ','シイ','コリア','ダスト','クローバー','チェア']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_11021',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「杉山おじさんは古い友達」って仰ってたわ','Sho — Dad-"Sugi-old-fri"-said','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと土井先生の料理番組観たよ','Mom — me Dad-Doi-cook-prog','Pleased child','sho_child'),
    mk('翔くん、お父さんが「松尾芭蕉の俳句を一緒に読もう」って仰ってたわ','Sho — Dad-"Matsuo-Bash-haik"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと大石内蔵助の歴史番組観たよ','Mom — me Dad-Oishi-hist','Pleased child','sho_child'),
    mk('翔くん、お父さんが「杉浦おじさんは絵が上手」って仰ってたわ','Sho — Dad-"Sugiura-art"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと小坂明子さんの懐メロ聴いたよ','Mom — me Dad-Kos-Akiko-nost','Pleased child','sho_child'),
    mk('翔くん、お父さんが田原俊彦のアイドル時代を語って下さったわ','Sho — Dad-Tah-Toshi-talk','Reflective','yumiko_mom'),
    mk('ママ、お父さんが「赤松おじさんに敬意を持って」って仰ってたよ','Mom — Dad-"Akamatsu-resp"-said','Earnest close','sho_child'),
  ]},
  {id:'conv_11022',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ご友人の杉山さんとお茶されてたよ、メイちゃん','Aoi — cust-fri-Sugi-tea Mei','Reflective','mei_romantic'),
    mk('葵、お客様、土井家のお茶会に出られるって、メイちゃん','Aoi — cust-Doi-tea-cere Mei','Reflective','aoi_barista'),
    mk('葵、お客様、松尾芭蕉の旧居を訪ねられたって、メイちゃん','Aoi — cust-Matsuo-Bash-vis Mei','Reflective','mei_romantic'),
    mk('葵、お客様、忠臣蔵の大石内蔵助のファンだって、メイちゃん','Aoi — cust-Chush-Oishi-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ご友人の杉浦さんとよく来店されるよ、メイちゃん','Aoi — cust-fri-Sugiura-reg Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お母様のお名前が小坂さんだって、メイちゃん','Aoi — cust-mom-Kosaka Mei','Reflective','aoi_barista'),
    mk('葵、お客様、田原俊彦の歌をカラオケで歌ってらしたよ、メイちゃん','Aoi — cust-Tah-Toshi-kara Mei','Reflective','mei_romantic'),
    mk('葵、お客様、赤松林を散策してから来店されたって、メイちゃん','Aoi — cust-Akamatsu-for-walk Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_11023',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが杉山さんと釣りに行かれた','Gran — youth Dad-Sugi-fish','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、土井氏と料理研究をされたわよね、あなた?','Yes — Grandpa-Doi-cook-res, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが松尾芭蕉の俳句を蔵書された','Gran — youth Dad-Matsuo-Bash-coll','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、忠臣蔵の大石内蔵助のお話に熱中されたわよね、あなた?','Grandpa — youth-Oishi-Chush, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが画家の杉浦氏と親しかった','Gran — youth Dad-Sugiura-paint','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、小坂明子の歌を口ずさまれたわよね、あなた?','Grandpa — youth-Kos-Akiko-hum, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが田原俊彦のドラマを観られた','Gran — youth Dad-Tah-Toshi-dr','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、赤松山の登山をされたわよね、あなた?','Grandpa — youth-Akamatsu-mtn-climb, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_11024',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、隣のクラスの杉山と話してたな','Riku — next-cl-Sugi-talk','Curious teen','sakura_teen'),
    mk('お前、家庭科で土井善晴先生のレシピ使ってたな、桜','You — home-Doi-recipe Sakura','Curious','riku_teen'),
    mk('リク、お前、国語で松尾芭蕉の俳句覚えたろ','Riku — Jp-Matsuo-Bash?','Curious','sakura_teen'),
    mk('お前、社会で大石内蔵助の話聞いたろ、桜','You — soc-Oishi-heard? Sakura','Curious','riku_teen'),
    mk('リク、お前、漫画の杉浦日向子のエッセイ読んでたな','Riku — Sugiura-Hin-essay-read','Wry','sakura_teen'),
    mk('お前、合唱コンクールで小坂明子の曲歌ったろ、桜','You — chor-Kos-Akiko-sing? Sakura','Curious','riku_teen'),
    mk('リク、お前、田原俊彦のドラマ再放送見てたな','Riku — Tah-Toshi-rerun','Wry','sakura_teen'),
    mk('お前、林間学校で赤松林歩いたろ、桜','You — for-camp-Akamatsu-walk? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_11025',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「杉山おじさんは絵が上手」って仰ってたわ','Sho — Dad-"Sugi-art"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと土井先生の料理本のレシピ作ったよ','Mei-sis — me Dad-Doi-recipe-make','Eager child','sho_child'),
    mk('翔くん、お父さんが「松尾芭蕉の旅をたどってみたい」って仰ってたわ','Sho — Dad-"Matsuo-Bash-trav"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと忠臣蔵の大石内蔵助の絵本を読んだよ','Mei-sis — me Dad-Oishi-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが「杉浦日向子のエッセイは素敵」って仰ってたわ','Sho — Dad-"Sugiura-Hin-fine"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと小坂家の七五三のお写真見たよ','Mei-sis — me Dad-Kosaka-753-photo','Eager child','sho_child'),
    mk('翔くん、お父さんが「田原俊彦の歌は時代を映す」って仰ってたわ','Sho — Dad-"Tah-Toshi-era"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと赤松林を散歩したよ','Mei-sis — me Dad-Akamatsu-walk','Eager close','sho_child'),
  ]},
  {id:'conv_11026',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新任の島田部長を歓迎しろ','Our co — new-Shim-dept-wel','Crisp','hiroshi_boss'),
    mk('はい。営業の町田課長の出張日程を整えます','Yes — Sales-Mach-mgr-trip','Methodical','kenji_office'),
    mk('当社、技術担当の森山主任にプロジェクトを任せろ','Our co — tech-Mori-lead-proj','Direction','hiroshi_boss'),
    mk('はい。広報の前原様の戦略を採用します','Yes — PR-Mae-strat-adopt','Update','kenji_office'),
    mk('当社、顧問の足立様にご助言を仰げ','Our co — adv-Adachi-cons','Direction','hiroshi_boss'),
    mk('はい。経理の平山様の決算スケジュールを整えます','Yes — Acct-Hira-clos-sched','Update','kenji_office'),
    mk('当社、人事の椎名様に新人研修を任せろ','Our co — HR-Shi-newhire-entr','Direction','hiroshi_boss'),
    mk('はい。法務の村田様に契約書確認を依頼します','Yes — Leg-Mur-contr-req','Close','kenji_office'),
  ]},
  {id:'conv_11027',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('島田部長の歓迎会を準備しましょう','Shim-dept-wel-prep','Brisk','yuki_office'),
    mk('はい。町田課長の引き継ぎ書を確認します','Yes — Mach-mgr-handov','Cooperative','kenji_office'),
    mk('森山技術主任のプロジェクト進捗を共有しましょう','Mori-tech-lead-share','Direction','yuki_office'),
    mk('はい。前原広報の月次企画書を確認します','Yes — Mae-PR-mo-plan','Update','kenji_office'),
    mk('足立顧問との面談を予定しましょう','Adachi-adv-meet-plan','Direction','yuki_office'),
    mk('はい。平山経理の決算予定を整えます','Yes — Hira-acct-clos','Update','kenji_office'),
    mk('椎名人事に新人研修プランを依頼しましょう','Shi-HR-newhire','Direction','yuki_office'),
    mk('はい。村田法務に新契約レビューを依頼します','Yes — Mur-leg-new-contr','Close','kenji_office'),
  ]},
  {id:'conv_11028',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、指導教授の島田先生のご研究を継承しろ','Ren — mentor-Shim-res','Mentor','hiroshi_boss'),
    mk('はい。町田教授の論文を読み込みます','Yes — Mach-prof-paper','Earnest','ren_uni'),
    mk('蓮、共同研究の森山先生に研究照会しろ','Ren — joint-Mori-inq','Direction','hiroshi_boss'),
    mk('はい。学会で前原助教のご発表を聴きます','Yes — Conf-Mae-asst-pres','Earnest','ren_uni'),
    mk('蓮、文献の足立先生のご論文も参考にしろ','Ren — lit-Adachi-paper-ref','Direction','hiroshi_boss'),
    mk('はい。研究室の平山先輩からご指導を仰ぎます','Yes — Lab-Hira-sen-guide','Polite','ren_uni'),
    mk('蓮、海外連携の椎名教授と打ち合わせしろ','Ren — overs-Shi-prof-meet','Direction','hiroshi_boss'),
    mk('はい。研究費の窓口、村田事務官に申請します','Yes — Res-fund-Mur-apply','Earnest close','ren_uni'),
  ]},
  {id:'conv_11029',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、島田刑事の現場対応も評価されますね','Police Shim-det-eval','Cooperative','kenji_office'),
    mk('警察、参考人町田氏から、警察、事情を伺われますね','Police witn-Mach-careful','Cooperative','kenji_office'),
    mk('警察、被害者森山氏のご家族にも、警察、配慮されますね','Police vict-Mori-fam-care','Cooperative','kenji_office'),
    mk('警察、目撃者前原氏の供述を、警察、整えられますね','Police witn-Mae-stmt','Cooperative','kenji_office'),
    mk('警察、容疑者足立の前科を、警察、確認されますね','Police suspect-Adachi-prior','Cooperative','kenji_office'),
    mk('警察、署内の鑑識平山主任と現場検証されますね','Police stat-foren-Hira-scene','Cooperative','kenji_office'),
    mk('警察、心理士椎名様にご助言を仰がれますね','Police psy-Shi-adv','Cooperative','kenji_office'),
    mk('警察、検事の村田様と公判前協議もされますね','Police pros-Mur-pre-trial','Close','kenji_office'),
  ]},
  {id:'conv_11030',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、島田氏と共同事業を立ち上げられた','Dad — youth-Shim-JV','Sage','hiroshi_elder'),
    mk('はい。お父さんは町田先輩のご薫陶を受けられた','Yes — Dad Mach-sen-mentor','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、森山氏と海外進出を企画された','Dad — youth-Mori-overs','Wistful','hiroshi_elder'),
    mk('はい。お父さんは前原氏を広報の柱に据えられた','Yes — Dad Mae-PR-pillar','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、足立氏と経理体制を整えられた','Dad — youth-Adachi-acct','Wistful','hiroshi_elder'),
    mk('はい。お父さんは平山氏を主任として育てられた','Yes — Dad Hira-lead-grow','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、椎名氏と海外法人を立ち上げられた','Dad — youth-Shi-overs-co','Wistful','hiroshi_elder'),
    mk('はい。お父さんは村田氏に法務全般を委ねられた','Yes — Dad Mur-leg-entr','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_11031',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、南西諸島、つまり南西の島嶼研究を論文で扱いましたね','Ren — SW-isl paper','Calm','asuka_teacher'),
    mk('はい、栄養不足が貧弱な発育を招く医学研究を論文で扱いました','Yes — Nutr-feeble paper','Earnest','ren_uni'),
    mk('蓮さん、粘着剤の高分子化学研究を論文で扱いましたね','Ren — adhes-poly paper','Reflective','asuka_teacher'),
    mk('はい、雨の一滴の科学的解析研究を論文で扱いました','Yes — Rain-drop-sci paper','Earnest','ren_uni'),
    mk('蓮さん、日照時間と農作物の収穫量の関係研究を論文で扱いましたね','Ren — sun-crop paper','Reflective','asuka_teacher'),
    mk('はい、辺境地域の社会人類学研究を論文で扱いました','Yes — Front-anthro paper','Earnest','ren_uni'),
    mk('蓮さん、罪人の更生プログラムの研究を論文で扱いましたね','Ren — crim-rehab paper','Reflective','asuka_teacher'),
    mk('はい、研究計画の首尾、つまり首尾一貫性の研究を論文で扱いました','Yes — Res-coh paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_11032',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、南西諸島周辺の密漁事案を、警察、対応されますね','Case SW-isl-poach police-resp','Reflective','ren_uni'),
    mk('警察、被害者の貧弱な体格を踏まえた捜査も慎重にされますね','Police vict-feeble-careful','Cooperative','takeda_officer'),
    mk('本件、現場の粘着テープ、つまり粘着痕の鑑識を、警察、おこなわれますね','Case scene-adhes-foren police','Reflective','ren_uni'),
    mk('警察、毒物の一滴でも検出される鑑定もされますね','Police pois-drop-det','Cooperative','takeda_officer'),
    mk('本件、犯行時の日照状態を、警察、検証されますね','Case crime-sun-verify police','Reflective','ren_uni'),
    mk('警察、辺境地域の警備強化もされますね','Police front-guard-strong','Cooperative','takeda_officer'),
    mk('本件、罪人の更生支援を、警察、保護観察と連携されますね','Case crim-rehab police-prob-link','Reflective','ren_uni'),
    mk('警察、捜査の首尾、つまり首尾一貫性を、警察、保たれますね','Police inv-coh-keep','Close','takeda_officer'),
  ]},
  {id:'conv_11033',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、南西諸島、つまり南西の島嶼研究を論文で扱いましたね','Sakura — SW-isl paper','Calm','asuka_teacher'),
    mk('はい、栄養不足が貧弱な発育を招く医学研究を論文で扱いました','Yes — Feeble paper','Earnest teen','sakura_teen'),
    mk('粘着剤の高分子化学研究を論文で扱いましたね','Adhes paper','Reflective','asuka_teacher'),
    mk('はい、雨の一滴の科学的解析研究を論文で扱いました','Yes — Drop paper','Earnest','sakura_teen'),
    mk('日照時間と農作物の収穫量の関係研究を論文で扱いましたね','Sun-crop paper','Reflective','asuka_teacher'),
    mk('はい、辺境地域の社会人類学研究を論文で扱いました','Yes — Front paper','Earnest','sakura_teen'),
    mk('罪人の更生プログラムの研究を論文で扱いましたね','Crim-rehab paper','Reflective','asuka_teacher'),
    mk('はい、研究計画の首尾、つまり首尾一貫性の研究を論文で扱いました','Yes — Coh paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_11034',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、南西諸島の地域医療を医療チームで担当します','Ren — SW-isl-med med-team','Calm','saito_doctor'),
    mk('蓮さん、貧弱な栄養状態の患者様を医療チームで支援します','Ren — feeble-pati med-team','Calm','saito_doctor'),
    mk('蓮さん、術後の粘着包帯の交換を医療チームで管理します','Ren — post-op-adhes med-team','Calm','saito_doctor'),
    mk('蓮さん、点滴の一滴ごとの管理を医療チームで徹底します','Ren — drip-drop med-team','Calm','saito_doctor'),
    mk('蓮さん、日照不足のビタミンD欠乏症を医療チームで対応します','Ren — sun-vitD-def med-team','Calm','saito_doctor'),
    mk('蓮さん、辺境地区の往診を医療チームでおこないます','Ren — front-visit med-team','Calm','saito_doctor'),
    mk('蓮さん、罪人の方々への医療提供を医療チームで配慮します','Ren — crim-med-care med-team','Calm','saito_doctor'),
    mk('蓮さん、診療記録の首尾、つまり首尾一貫性を医療チームで保ちます','Ren — med-rec-coh med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_11035',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、南西諸島の物流ルートを開拓しろ','Our co — SW-isl-log','Crisp','hiroshi_boss'),
    mk('はい。在庫が貧弱、つまり貧弱な品揃えにならない様、補充します','Yes — Stock-feeble-prev','Methodical','kenji_office'),
    mk('当社、製品の粘着テストを強化しろ','Our co — prod-adhes-test-strong','Direction','hiroshi_boss'),
    mk('はい。漏れの一滴、つまり一滴も無い品質を目指します','Yes — Leak-drop-zero','Update','kenji_office'),
    mk('当社、日照条件を考慮した工場屋根を設計しろ','Our co — sun-fact-roof-design','Direction','hiroshi_boss'),
    mk('はい。辺境地域への営業ルートを開拓します','Yes — Front-sales','Update','kenji_office'),
    mk('当社、罪人の社会復帰支援に協力しろ','Our co — crim-soc-rein-coop','Direction','hiroshi_boss'),
    mk('はい。経営方針の首尾、つまり首尾一貫性を社員に示します','Yes — Mgmt-coh-staff','Close','kenji_office'),
  ]},
  {id:'conv_11036',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、神戸の有馬温泉に行かれたって、メイちゃん','Aoi — cust-Kob-Arima-onsen Mei','Reflective','mei_romantic'),
    mk('葵、お客様、長崎の松浦市のご出身だって、メイちゃん','Aoi — cust-Nag-Matsuura-home Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ご友人のコウさんとお茶されてたよ、メイちゃん','Aoi — cust-fri-Kou-tea Mei','Reflective','mei_romantic'),
    mk('葵、お客様、椎茸、つまりシイたけのレシピを語って下さったよ、メイちゃん','Aoi — cust-shii-recipe Mei','Reflective','aoi_barista'),
    mk('葵、お客様、コリア、つまり韓国旅行のお話を語って下さったよ、メイちゃん','Aoi — cust-Korea-trip-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ダストボックスのデザインに拘ってらっしゃるって、メイちゃん','Aoi — cust-dust-design-stick Mei','Reflective','aoi_barista'),
    mk('葵、お客様、四つ葉のクローバーを集めるご趣味だって、メイちゃん','Aoi — cust-clover-coll Mei','Reflective','mei_romantic'),
    mk('葵、お客様、当店の革張りチェアをお褒め下さったよ、メイちゃん','Aoi — cust-leather-chair-praise Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_11037',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんと有馬温泉に新婚旅行に行った','Gran — youth Dad-Arima-honey','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、長崎県松浦市にお勤めだったわよね、あなた?','Yes — Grandpa-Matsuura-work, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがコウさんと囲碁を打たれた','Gran — youth Dad-Kou-go','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、シイたけ栽培を試されたわよね、あなた?','Grandpa — youth-shii-farm, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがコリア、つまり韓国へ出張された','Gran — youth Dad-Korea-trip','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ダストシュートのある集合住宅に住まれたわよね、あなた?','Grandpa — youth-dust-chute, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが四つ葉のクローバーを見つけられた','Gran — youth Dad-clover-found','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、リクライニングチェアを愛用されたわよね、あなた?','Grandpa — youth-recl-chair, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_11038',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「有馬温泉に旅行しよう」って仰ってたわ','Sho — Dad-"Arima-trip"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと長崎県松浦市の海岸行ったよ','Mei-sis — me Dad-Matsuura-coast','Eager child','sho_child'),
    mk('翔くん、お父さんが「コウくんと仲良くね」って仰ってたわ','Sho — Dad-"Kou-fri"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとシイたけ狩りに行ったよ','Mei-sis — me Dad-shii-pick','Eager child','sho_child'),
    mk('翔くん、お父さんが「コリア、つまり韓国の文化は奥が深い」って仰ってたわ','Sho — Dad-"Korea-deep"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「ダストの少ない部屋」掃除したよ','Mei-sis — me Dad-"dust-clean"-room','Eager child','sho_child'),
    mk('翔くん、お父さんが「四つ葉のクローバーは幸運の象徴」って教えて下さったわ','Sho — Dad-"clover-luck"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと公園のチェアでお茶飲んだよ','Mei-sis — me Dad-park-chair-tea','Eager close','sho_child'),
  ]},
  {id:'conv_11039',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、家族で有馬温泉行ったろ','Riku — fam-Arima?','Curious teen','sakura_teen'),
    mk('お前、松浦さんって名前のクラスメート居たな、桜','You — Matsuura-classm-yeah Sakura','Curious','riku_teen'),
    mk('リク、お前、隣のクラスのコウと話してたな','Riku — next-cl-Kou-talk','Curious','sakura_teen'),
    mk('お前、家庭科でシイたけソテー作ったろ、桜','You — home-shii-soup? Sakura','Curious','riku_teen'),
    mk('リク、お前、コリア、つまり韓国アイドル好きだったな','Riku — Korea-idol-fan','Wry','sakura_teen'),
    mk('お前、教室掃除でダストペーパー使ったろ、桜','You — class-dust-paper? Sakura','Curious','riku_teen'),
    mk('リク、お前、文化祭で四つ葉のクローバー探してたな','Riku — cul-fes-clover-search','Wry','sakura_teen'),
    mk('お前、自室にゲーミングチェア買ったろ、桜','You — room-gaming-chair? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_11040',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが有馬温泉のお土産を下さるわ','Sho — Dad-Arima-souv','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと長崎県松浦の歴史本読んだよ','Mom — me Dad-Matsuura-hist','Eager child','sho_child'),
    mk('翔くん、お父さんがコウさんとお茶会されてるわ','Sho — Dad-Kou-tea','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとシイたけ栽培キット買ったよ','Mom — me Dad-shii-kit','Eager child','sho_child'),
    mk('翔くん、お父さんがコリア、つまり韓国料理を作って下さるわ','Sho — Dad-Korea-cook','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとダストフリーの空気清浄機買ったよ','Mom — me Dad-dust-free-purif','Eager child','sho_child'),
    mk('翔くん、お父さんが四つ葉のクローバーを押し花にして下さってるわ','Sho — Dad-clover-press','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと折りたたみチェアで公園ピクニックしたよ','Mom — me Dad-fold-chair-picnic','Eager close','sho_child'),
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

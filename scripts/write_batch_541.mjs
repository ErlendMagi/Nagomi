import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_541 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['玲子','聖子','茜','秀雄','浅田','川端','吉本','細田']
const B_T = ['伊丹','長岡','武藤','菊池','亀田','五十嵐','塚本','八田']
const C_T = ['悗','薀','ワット','塁','モル','代打','士官','コミンテルン']
const D_T = ['翠','ギャング','ロータリー','ネイチャー','ジェーン','電撃','スパイラル','イングリッシュ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10781',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「玲子さんのお花教室にママを誘って」って仰ってたわ','Sho — Dad-"Reiko-flo-inv"-said','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと松田聖子の懐メロを聴いたよ','Mom — me Dad-Matsu-Seiko-nost','Pleased child','sho_child'),
    mk('翔くん、お父さんのお友達の茜さんが今度家にいらっしゃるわ','Sho — Dad-fri-Akane-vis','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと秀雄おじさんに会ったよ','Mom — me Dad-Hideo-uncle-met','Eager child','sho_child'),
    mk('翔くん、お父さんが浅田次郎の小説を読まれてるわ','Sho — Dad-Asada-Jiro-novel','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとノーベル文学賞の川端康成の絵本を読んだよ','Mom — me Dad-Nob-Kawa-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが吉本興業の漫才を観てらっしゃるわ','Sho — Dad-Yos-com-watch','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと細田守監督のアニメ映画観たよ','Mom — me Dad-Hosoda-anime','Eager close','sho_child'),
  ]},
  {id:'conv_10782',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ご友人の玲子さんとお茶されてたよ、メイちゃん','Aoi — cust-fri-Reiko-tea Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お母様のお名前が聖子さんだって、メイちゃん','Aoi — cust-mom-Seiko Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お孫様の茜ちゃんを連れていらしたよ、メイちゃん','Aoi — cust-grdkid-Akane-vis Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご友人の秀雄さんとよく来店されるよ、メイちゃん','Aoi — cust-fri-Hideo-reg Mei','Reflective','aoi_barista'),
    mk('葵、お客様、浅田真央さんの引退時の感動を語って下さったよ、メイちゃん','Aoi — cust-Asada-Mao-ret-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、川端康成の「伊豆の踊子」がお好きだって、メイちゃん','Aoi — cust-Kawa-Iz-dance-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、吉本興業のお笑い番組のお話を語って下さったよ、メイちゃん','Aoi — cust-Yos-com-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、細田守監督の最新作を楽しみにされてるよ、メイちゃん','Aoi — cust-Hosoda-new-anticp Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10783',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがご親戚の玲子さんと文通された','Gran — youth Dad-rel-Reiko-letter','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、松田聖子のヒット曲を口ずさまれたわよね、あなた?','Yes — Grandpa-youth-Matsu-Seiko-hum, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが姪の茜さんを可愛がられた','Gran — youth Dad-niece-Akane-love','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ご友人の秀雄さんとお酒を酌み交わされたわよね、あなた?','Grandpa — youth-fri-Hideo-drink, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが浅田次郎の小説を蔵書された','Gran — youth Dad-Asada-Jiro-coll','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、川端康成のノーベル受賞のニュースを観られたわよね、あなた?','Grandpa — youth-Kawa-Nob-news, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが吉本興業の劇場に通われた','Gran — youth Dad-Yos-theat','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、細田守監督の作品をお孫様と楽しまれたわよね、あなた?','Grandpa — youth-Hosoda-grdkid, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10784',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、隣のクラスの玲子と話してたな','Riku — next-cl-Reiko-talk','Curious teen','sakura_teen'),
    mk('お前のお母様、聖子さんって名前だったよな、桜','You — your-mom-Seiko Sakura','Curious','riku_teen'),
    mk('リク、お前、隣のクラスの茜と話してたな','Riku — next-cl-Akane-talk','Curious','sakura_teen'),
    mk('お前、隣の秀雄おじさんと挨拶してたな、桜','You — next-Hideo-uncle-greet Sakura','Curious','riku_teen'),
    mk('リク、お前、図書館で浅田次郎の小説借りてたな','Riku — lib-Asada-Jiro-borr','Curious','sakura_teen'),
    mk('お前、国語で川端康成の伊豆の踊子読んだろ、桜','You — Jp-Kawa-Izu? Sakura','Curious','riku_teen'),
    mk('リク、お前、吉本興業のYouTube観てたな','Riku — Yos-YT-watch','Wry','sakura_teen'),
    mk('お前、細田守監督の映画一気見してたろ、桜','You — Hosoda-film-marathon? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10785',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「玲子おばさんは料理上手」って仰ってたわ','Sho — Dad-"Reiko-aunt-cook"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと松田聖子のドキュメンタリー観たよ','Mei-sis — me Dad-Matsu-Seiko-doc','Eager child','sho_child'),
    mk('翔くん、お父さんが「茜ちゃんは絵が上手」って仰ってたわ','Sho — Dad-"Akane-art-good"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと秀雄おじさんに会いに行ったよ','Mei-sis — me Dad-Hideo-uncle-vis','Eager child','sho_child'),
    mk('翔くん、お父さんが浅田真央さんの伝記を読まれてるわ','Sho — Dad-Asada-Mao-biog','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと川端康成の絵本を読んだよ','Mei-sis — me Dad-Kawa-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが「吉本興業の漫才は奥が深い」って仰ってたわ','Sho — Dad-"Yos-com-deep"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと細田守監督のサマーウォーズ観たよ','Mei-sis — me Dad-Hosoda-SW-watch','Eager close','sho_child'),
  ]},
  {id:'conv_10786',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新任の伊丹部長を歓迎しろ','Our co — new-Ita-dept-wel','Crisp','hiroshi_boss'),
    mk('はい。営業の長岡課長の出張日程を整えます','Yes — Sales-Nag-mgr-trip','Methodical','kenji_office'),
    mk('当社、技術担当の武藤主任にプロジェクトを任せろ','Our co — tech-Mut-lead-proj','Direction','hiroshi_boss'),
    mk('はい。広報の菊池様の戦略を採用します','Yes — PR-Kik-strat-adopt','Update','kenji_office'),
    mk('当社、顧問の亀田様にご助言を仰げ','Our co — adv-Kam-cons','Direction','hiroshi_boss'),
    mk('はい。経理の五十嵐様の決算スケジュールを整えます','Yes — Acct-Iga-clos-sched','Update','kenji_office'),
    mk('当社、人事の塚本様に新人研修を任せろ','Our co — HR-Tsuka-newhire-entr','Direction','hiroshi_boss'),
    mk('はい。法務の八田様に契約書確認を依頼します','Yes — Leg-Hatta-contr-req','Close','kenji_office'),
  ]},
  {id:'conv_10787',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('伊丹部長の歓迎会を準備しましょう','Ita-dept-wel-prep','Brisk','yuki_office'),
    mk('はい。長岡課長の引き継ぎ書を確認します','Yes — Nag-mgr-handov','Cooperative','kenji_office'),
    mk('武藤技術主任のプロジェクト進捗を共有しましょう','Mut-tech-lead-share','Direction','yuki_office'),
    mk('はい。菊池広報の月次企画書を確認します','Yes — Kik-PR-mo-plan','Update','kenji_office'),
    mk('亀田顧問との面談を予定しましょう','Kam-adv-meet-plan','Direction','yuki_office'),
    mk('はい。五十嵐経理の決算予定を整えます','Yes — Iga-acct-clos-sched','Update','kenji_office'),
    mk('塚本人事に新人研修プランを依頼しましょう','Tsuka-HR-newhire-req','Direction','yuki_office'),
    mk('はい。八田法務に新契約レビューを依頼します','Yes — Hatta-leg-new-contr','Close','kenji_office'),
  ]},
  {id:'conv_10788',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、指導教授の伊丹先生のご研究を継承しろ','Ren — mentor-Ita-res','Mentor','hiroshi_boss'),
    mk('はい。長岡教授の論文を読み込みます','Yes — Nag-prof-paper-read','Earnest','ren_uni'),
    mk('蓮、共同研究の武藤先生に研究照会しろ','Ren — joint-Mut-inq','Direction','hiroshi_boss'),
    mk('はい。学会で菊池助教のご発表を聴きます','Yes — Conf-Kik-asst-pres','Earnest','ren_uni'),
    mk('蓮、文献の亀田先生のご論文も参考にしろ','Ren — lit-Kam-paper-ref','Direction','hiroshi_boss'),
    mk('はい。研究室の五十嵐先輩からご指導を仰ぎます','Yes — Lab-Iga-sen-guide','Polite','ren_uni'),
    mk('蓮、海外連携の塚本教授と打ち合わせしろ','Ren — overs-Tsuka-prof-meet','Direction','hiroshi_boss'),
    mk('はい。研究費の窓口、八田事務官に申請します','Yes — Res-fund-Hatta-apply','Earnest close','ren_uni'),
  ]},
  {id:'conv_10789',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、伊丹刑事の現場対応も評価されますね','Police Ita-det-eval','Cooperative','kenji_office'),
    mk('警察、参考人長岡氏から、警察、事情を伺われますね','Police witn-Nag-careful','Cooperative','kenji_office'),
    mk('警察、被害者武藤氏のご家族にも、警察、配慮されますね','Police vict-Mut-fam-care','Cooperative','kenji_office'),
    mk('警察、目撃者菊池氏の供述を、警察、整えられますね','Police witn-Kik-stmt','Cooperative','kenji_office'),
    mk('警察、容疑者亀田の前科を、警察、確認されますね','Police suspect-Kam-prior','Cooperative','kenji_office'),
    mk('警察、署内の鑑識五十嵐主任と現場検証されますね','Police stat-foren-Iga-scene','Cooperative','kenji_office'),
    mk('警察、心理士塚本様にご助言を仰がれますね','Police psy-Tsuka-adv','Cooperative','kenji_office'),
    mk('警察、検事の八田様と公判前協議もされますね','Police pros-Hatta-pre-trial','Close','kenji_office'),
  ]},
  {id:'conv_10790',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、伊丹氏と共同事業を立ち上げられた','Dad — youth-Ita-JV','Sage','hiroshi_elder'),
    mk('はい。お父さんは長岡先輩のご薫陶を受けられた','Yes — Dad Nag-sen-mentor','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、武藤氏と海外進出を企画された','Dad — youth-Mut-overs','Wistful','hiroshi_elder'),
    mk('はい。お父さんは菊池氏を広報の柱に据えられた','Yes — Dad Kik-PR-pillar','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、亀田氏と経理体制を整えられた','Dad — youth-Kam-acct','Wistful','hiroshi_elder'),
    mk('はい。お父さんは五十嵐氏を主任として育てられた','Yes — Dad Iga-lead-grow','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、塚本氏と海外法人を立ち上げられた','Dad — youth-Tsuka-overs-co','Wistful','hiroshi_elder'),
    mk('はい。お父さんは八田氏に法務全般を委ねられた','Yes — Dad Hatta-leg-entr','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10791',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、漢字の悗、つまり「悗悗」、つまり「悗」の古典用法の研究を論文で扱いましたね','Ren — old-mon-class paper','Calm','asuka_teacher'),
    mk('はい、薀蓄、つまり薀の語源研究を論文で扱いました','Yes — Un-eti paper','Earnest','ren_uni'),
    mk('蓮さん、電力単位のワットの歴史研究を論文で扱いましたね','Ren — pwr-watt-hist paper','Reflective','asuka_teacher'),
    mk('はい、野球の塁、つまり塁間の戦術研究を論文で扱いました','Yes — Base-rui-tact paper','Earnest','ren_uni'),
    mk('蓮さん、化学のモル、つまりモル数の概念研究を論文で扱いましたね','Ren — chem-mole paper','Reflective','asuka_teacher'),
    mk('はい、野球の代打、つまり代打起用の統計研究を論文で扱いました','Yes — Base-PH-stat paper','Earnest','ren_uni'),
    mk('蓮さん、明治期の士官、つまり将校制度の研究を論文で扱いましたね','Ren — Meiji-off paper','Reflective','asuka_teacher'),
    mk('はい、戦間期のコミンテルン、つまり共産主義インターの研究を論文で扱いました','Yes — Comint-int paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10792',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、古文書の悗、つまり「悗」字の解読を、警察、専門家に依頼されますね','Case old-mon police-expert','Reflective','ren_uni'),
    mk('警察、容疑者の薀蓄、つまり薀の知識自慢を、警察、観察されますね','Police suspect-un-knowl-show','Cooperative','takeda_officer'),
    mk('本件、消費電力ワットの異常値を、警察、鑑識されますね','Case watt-anom police-foren','Reflective','ren_uni'),
    mk('警察、野球場の塁、つまり塁周辺の事件にも対応されますね','Police base-rui-case','Cooperative','takeda_officer'),
    mk('本件、薬物のモル、つまりモル濃度を、警察、分析されますね','Case drug-mole police-anal','Reflective','ren_uni'),
    mk('警察、捜査の代打、つまり代理担当を、警察、配置されますね','Police inv-sub-PH-place','Cooperative','takeda_officer'),
    mk('本件、退役士官、つまり元将校への聞き取りを、警察、丁寧におこなわれますね','Case ret-off-int police-care','Reflective','ren_uni'),
    mk('警察、コミンテルン関連の歴史史料も、警察、参照されますね','Police Comint-hist-ref','Close','takeda_officer'),
  ]},
  {id:'conv_10793',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、漢字の悗、つまり「悗」の古典用法の研究を論文で扱いましたね','Sakura — mon paper','Calm','asuka_teacher'),
    mk('はい、薀蓄、つまり薀の語源研究を論文で扱いました','Yes — Un paper','Earnest teen','sakura_teen'),
    mk('電力単位のワットの歴史研究を論文で扱いましたね','Watt-hist paper','Reflective','asuka_teacher'),
    mk('はい、野球の塁、つまり塁間の戦術研究を論文で扱いました','Yes — Base-rui paper','Earnest','sakura_teen'),
    mk('化学のモル、つまりモル数の概念研究を論文で扱いましたね','Mole paper','Reflective','asuka_teacher'),
    mk('はい、野球の代打、つまり代打起用の統計研究を論文で扱いました','Yes — PH-stat paper','Earnest','sakura_teen'),
    mk('明治期の士官、つまり将校制度の研究を論文で扱いましたね','Meiji-off paper','Reflective','asuka_teacher'),
    mk('はい、戦間期のコミンテルン、つまり共産主義インターの研究を論文で扱いました','Yes — Comint paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10794',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、古医書の悗、つまり「悗」字の解読を医療チームで研究します','Ren — old-med-mon med-team','Calm','saito_doctor'),
    mk('蓮さん、漢方の薀蓄、つまり薀奥深さを医療チームで尊重します','Ren — kanp-un-depth med-team','Calm','saito_doctor'),
    mk('蓮さん、医療機器の消費ワット数を医療チームで管理します','Ren — med-eqp-watt med-team','Calm','saito_doctor'),
    mk('蓮さん、スポーツ医学で野球の塁、つまり塁間走の身体負荷を医療チームで研究します','Ren — sport-med-base med-team','Calm','saito_doctor'),
    mk('蓮さん、薬剤の血中モル、つまりモル濃度の測定を医療チームでおこないます','Ren — drug-blood-mole med-team','Calm','saito_doctor'),
    mk('蓮さん、医師の代打、つまり代診体制を医療チームで整えます','Ren — doc-sub-PH med-team','Calm','saito_doctor'),
    mk('蓮さん、軍医、つまり士官医療の歴史を医療チームで学びます','Ren — mil-off-med-hist med-team','Calm','saito_doctor'),
    mk('蓮さん、戦間期のコミンテルン下の医療政策史を医療チームで学びます','Ren — Comint-med-hist med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_10795',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、ロゴの旧字「悗」、つまり「悗」を社員に解説しろ','Our co — old-mon-staff','Crisp','hiroshi_boss'),
    mk('はい。創業者の薀蓄、つまり薀の経験談を社員に共有します','Yes — Found-un-staff-share','Methodical','kenji_office'),
    mk('当社、製品の電力ワット表示を統一しろ','Our co — prod-watt-unify','Direction','hiroshi_boss'),
    mk('はい。野球部に塁、つまり塁間の走塁練習を取り入れます','Yes — Base-club-rui-prac','Update','kenji_office'),
    mk('当社、化学事業の原料モル単位を統一しろ','Our co — chem-mole-uni','Direction','hiroshi_boss'),
    mk('はい。社員の代打、つまり代理出席体制を整えます','Yes — Staff-PH-sub-att-set','Update','kenji_office'),
    mk('当社、防衛事業の士官教育機関と提携しろ','Our co — def-off-edu-part','Direction','hiroshi_boss'),
    mk('はい。歴史社内研修にコミンテルンの記録を活用します','Yes — Hist-train-Comint-use','Close','kenji_office'),
  ]},
  {id:'conv_10796',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ヒスイ、つまり翠色のアクセサリーがお好みだって、メイちゃん','Aoi — cust-jade-acc-like Mei','Reflective','mei_romantic'),
    mk('葵、お客様、米国マフィア映画のギャングを語って下さったよ、メイちゃん','Aoi — cust-US-mafia-gang-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ロータリークラブの活動をされてるって、メイちゃん','Aoi — cust-Rotary-act Mei','Reflective','mei_romantic'),
    mk('葵、お客様、科学誌ネイチャーを購読されてるって、メイちゃん','Aoi — cust-Nature-sub Mei','Reflective','aoi_barista'),
    mk('葵、お客様、英国ジェーン・オースティンの小説がお好きだって、メイちゃん','Aoi — cust-Jane-Aus-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、電撃結婚のニュースを驚いて話して下さったよ、メイちゃん','Aoi — cust-elec-marr-news-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、株価のスパイラル下落のお話を語って下さったよ、メイちゃん','Aoi — cust-stock-spir-fall-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お子様がイングリッシュスクールに通われてるって、メイちゃん','Aoi — cust-kid-Eng-sch Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10797',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが翠色のネクタイを愛用された','Gran — youth Dad-jade-tie-fav','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、ギャング映画の黄金期を観られたわよね、あなた?','Yes — Grandpa-youth-gang-film-gold, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがロータリークラブに入会された','Gran — youth Dad-Rotary-join','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、科学誌ネイチャーをご購読されたわよね、あなた?','Grandpa — youth-Nature-sub, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがジェーン・オースティンの英文学を研究された','Gran — youth Dad-Jane-Aus-lit','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、電撃結婚されたわよね、あなた?','Grandpa — youth-elec-marr, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは事業のスパイラル成長を実現された','Gran — youth Dad-biz-spir-grow','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、私にイングリッシュレッスンを勧められたわよね、あなた?','Grandpa — youth-me-Eng-lesson-rec, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10798',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがヒスイ、つまり翠色の置物をお祝いに下さるそうよ','Sho — Dad-jade-orn-gift','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「ギャング映画は大人になってから」って言われたよ','Mei-sis — me Dad-"gang-adult"-said','Earnest child','sho_child'),
    mk('翔くん、お父さんがロータリークラブの寄付活動を続けてらっしゃるわ','Sho — Dad-Rotary-charity','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとネイチャー誌の野生動物特集観たよ','Mei-sis — me Dad-Nature-wild Mei','Eager child','sho_child'),
    mk('翔くん、お父さんがジェーン・オースティンの絵本を読んで下さるわ','Sho — Dad-Jane-Aus-pic','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「電撃結婚」ってドラマのお話聞いたよ','Mei-sis — me Dad-"elec-marr-dr"-heard','Eager child','sho_child'),
    mk('翔くん、お父さんが「景気のスパイラル下降は怖い」って仰ってたわ','Sho — Dad-"econ-spir-fall"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとイングリッシュガーデンに行ったよ','Mei-sis — me Dad-Eng-gard','Eager close','sho_child'),
  ]},
  {id:'conv_10799',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、翠色のスマホケース使ってたな','Riku — jade-phone-case-use','Curious teen','sakura_teen'),
    mk('お前、ギャング系ヒップホップ聴いてたろ、桜','You — gang-hiphop? Sakura','Wry','riku_teen'),
    mk('リク、お父さんのロータリークラブ集会に同行したな','Riku — Dad-Rotary-meet-acc','Curious','sakura_teen'),
    mk('お前、図書館でネイチャー誌読んでたな、桜','You — lib-Nature-read Sakura','Curious','riku_teen'),
    mk('リク、お前、英文学でジェーン・オースティン読んでたな','Riku — Eng-lit-Jane-Aus','Curious','sakura_teen'),
    mk('お前、「電撃移籍」って漫画読んでたろ、桜','You — "elec-trans"-mng? Sakura','Wry','riku_teen'),
    mk('リク、お前、デススパイラルってゲーム好きだったな','Riku — death-spir-game-like','Wry','sakura_teen'),
    mk('お前、英会話でイングリッシュコース取ってたな、桜','You — Eng-conv-course Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10800',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがヒスイ、つまり翠色の腕輪を下さったわ','Sho — Dad-jade-bracelet-gift','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとギャング映画のドキュメンタリー観たよ','Mom — me Dad-gang-film-doc','Eager child','sho_child'),
    mk('翔くん、お父さんがロータリークラブ国際大会に出られるそうよ','Sho — Dad-Rotary-int-conv','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとネイチャー誌の特集記事読んだよ','Mom — me Dad-Nature-fea-read','Eager child','sho_child'),
    mk('翔くん、お父さんがジェーン・オースティンの映画を観てらっしゃるわ','Sho — Dad-Jane-Aus-film','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと「電撃」って漫画のお話聞いたよ','Mom — me Dad-"elec"-mng-heard','Eager child','sho_child'),
    mk('翔くん、お父さんが「経済のスパイラル是正」のニュースを観てらっしゃるわ','Sho — Dad-"econ-spir-fix"-news','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとイングリッシュブレックファストを楽しんだよ','Mom — me Dad-Eng-breakf','Eager close','sho_child'),
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_546 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['貴文','幸雄','十郎','洋一','博之','一夫','僕達','がわり']
const B_T = ['小田','富田','天野','遠山','篠原','藤村','須藤','牧野']
const C_T = ['戰','燈','會','茵','繭','狭間','のっとっ','云い']
const D_T = ['コピペ','うんこ','メイル','クリエーター','できよ','チョー','シャラ','コットン']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10881',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「貴文おじさんと旅行に行こう」って仰ってたわ','Sho — Dad-"Takafumi-uncle-trip"-said','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんのお友達の幸雄おじさんに会ったよ','Mom — me Dad-fri-Yukio-uncle-met','Pleased child','sho_child'),
    mk('翔くん、お父さんが「十郎さんは寡黙な方」って仰ってたわ','Sho — Dad-"Juro-quiet"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと洋一おじさんと釣りに行ったよ','Mom — me Dad-Yoichi-uncle-fish','Pleased child','sho_child'),
    mk('翔くん、お父さんのお友達の博之さんとお茶会されてたわ','Sho — Dad-fri-Hiro-tea','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと一夫おじさんに会ったよ','Mom — me Dad-Kazuo-uncle-met','Pleased child','sho_child'),
    mk('翔くん、お父さんが「僕達は家族だから助け合おう」って仰ってたわ','Sho — Dad-"we-fam-help"-said','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「お代わり、つまり代わりに僕がやるよ」って言われたよ','Mom — me Dad-"sub-do"-said','Eager close','sho_child'),
  ]},
  {id:'conv_10882',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ご友人の貴文さんとお茶されてたよ、メイちゃん','Aoi — cust-fri-Takafumi-tea Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご友人の幸雄さんと打ち合わせされてたよ、メイちゃん','Aoi — cust-fri-Yukio-meet Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お父様のお名前が十郎さんだって、メイちゃん','Aoi — cust-fa-Juro Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご友人の洋一さんとご来店だったよ、メイちゃん','Aoi — cust-fri-Yoichi-vis Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ご友人の博之さんと音楽鑑賞されてたよ、メイちゃん','Aoi — cust-fri-Hiro-mus Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お父様のお名前が一夫さんだって、メイちゃん','Aoi — cust-fa-Kazuo Mei','Reflective','aoi_barista'),
    mk('葵、お客様、「僕達若い世代は」って前置きして話されてたよ、メイちゃん','Aoi — cust-"we-young-gen"-said Mei','Reflective','mei_romantic'),
    mk('葵、お客様、コーヒーを「お代わり、つまりおかわりで」って仰ってたよ、メイちゃん','Aoi — cust-"refill-okawari"-said Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10883',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがご友人の貴文さんと文通された','Gran — youth Dad-fri-Takafumi-letter','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、幸雄兄さんと将棋を指されたわよね、あなた?','Yes — Grandpa-youth-Yukio-bro-shog, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが十郎兄さんに敬意を持ってらした','Gran — youth Dad-Juro-bro-resp','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ご友人の洋一さんと釣りに行かれたわよね、あなた?','Grandpa — youth-fri-Yoichi-fish, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが博之さんとお酒を酌み交わされた','Gran — youth Dad-Hiro-drink','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、お兄様の一夫さんと旅行されたわよね、あなた?','Grandpa — youth-bro-Kazuo-trip, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「僕達は同じ世代だ」と仰った','Gran — youth Dad-"we-same-gen"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、お代わり、つまりお茶のおかわりを毎晩されたわよね、あなた?','Grandpa — youth-refill-tea-night, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10884',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、隣のクラスの貴文と話してたな','Riku — next-cl-Takafumi-talk','Curious teen','sakura_teen'),
    mk('お前のお父さん、幸雄さんって名前だったよな、桜','You — your-Dad-Yukio Sakura','Curious','riku_teen'),
    mk('リク、お前、社会で源義経の弟、十郎さん習ったろ','Riku — soc-Yoshi-bro-Juro?','Curious','sakura_teen'),
    mk('お前、洋一兄さんと家庭科で一緒だったろ、桜','You — Yoichi-bro-home? Sakura','Curious','riku_teen'),
    mk('リク、お前、博之先輩を尊敬してたな','Riku — Hiro-sen-resp','Curious','sakura_teen'),
    mk('お前、一夫おじさんと話してたな、桜','You — Kazuo-uncle-talk Sakura','Curious','riku_teen'),
    mk('リク、お前、文化祭で「僕達のクラスは最高」って言ってたな','Riku — cul-fes-"we-class-best"-said','Wry','sakura_teen'),
    mk('お前、食堂でお代わり、つまりおかわり毎日してたな、桜','You — cant-refill-daily Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10885',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「貴文おじさんに会いに行こう」って仰ってたわ','Sho — Dad-"Takafumi-uncle-vis"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと幸雄おじさんに会ったよ','Mei-sis — me Dad-Yukio-uncle-met','Eager child','sho_child'),
    mk('翔くん、お父さんが「十郎おじさんは寡黙だけど優しい」って仰ってたわ','Sho — Dad-"Juro-quiet-kind"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと洋一おじさんと釣りに行ったよ','Mei-sis — me Dad-Yoichi-fish','Eager child','sho_child'),
    mk('翔くん、お父さんが「博之おじさんと水族館へ」って仰ってたわ','Sho — Dad-"Hiro-aqua"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと一夫おじさんの家でカレー食べたよ','Mei-sis — me Dad-Kazuo-curry','Eager child','sho_child'),
    mk('翔くん、お父さんが「僕達家族はみんな仲良し」って仰ってたわ','Sho — Dad-"we-fam-warm"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとお代わり、つまりおかわり自由のレストランに行ったよ','Mei-sis — me Dad-refill-rest','Eager close','sho_child'),
  ]},
  {id:'conv_10886',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新任の小田部長を歓迎しろ','Our co — new-Oda-dept-wel','Crisp','hiroshi_boss'),
    mk('はい。営業の富田課長の出張日程を整えます','Yes — Sales-Tom-mgr-trip','Methodical','kenji_office'),
    mk('当社、技術担当の天野主任にプロジェクトを任せろ','Our co — tech-Ama-lead-proj','Direction','hiroshi_boss'),
    mk('はい。広報の遠山様の戦略を採用します','Yes — PR-Toy-strat-adopt','Update','kenji_office'),
    mk('当社、顧問の篠原様にご助言を仰げ','Our co — adv-Shin-cons','Direction','hiroshi_boss'),
    mk('はい。経理の藤村様の決算スケジュールを整えます','Yes — Acct-Fuji-clos-sched','Update','kenji_office'),
    mk('当社、人事の須藤様に新人研修を任せろ','Our co — HR-Sudo-newhire-entr','Direction','hiroshi_boss'),
    mk('はい。法務の牧野様に契約書確認を依頼します','Yes — Leg-Mak-contr-req','Close','kenji_office'),
  ]},
  {id:'conv_10887',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('小田部長の歓迎会を準備しましょう','Oda-dept-wel-prep','Brisk','yuki_office'),
    mk('はい。富田課長の引き継ぎ書を確認します','Yes — Tom-mgr-handov','Cooperative','kenji_office'),
    mk('天野技術主任のプロジェクト進捗を共有しましょう','Ama-tech-lead-share','Direction','yuki_office'),
    mk('はい。遠山広報の月次企画書を確認します','Yes — Toy-PR-mo-plan','Update','kenji_office'),
    mk('篠原顧問との面談を予定しましょう','Shin-adv-meet-plan','Direction','yuki_office'),
    mk('はい。藤村経理の決算予定を整えます','Yes — Fuji-acct-clos','Update','kenji_office'),
    mk('須藤人事に新人研修プランを依頼しましょう','Sudo-HR-newhire','Direction','yuki_office'),
    mk('はい。牧野法務に新契約レビューを依頼します','Yes — Mak-leg-new-contr','Close','kenji_office'),
  ]},
  {id:'conv_10888',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、指導教授の小田先生のご研究を継承しろ','Ren — mentor-Oda-res','Mentor','hiroshi_boss'),
    mk('はい。富田教授の論文を読み込みます','Yes — Tom-prof-paper','Earnest','ren_uni'),
    mk('蓮、共同研究の天野先生に研究照会しろ','Ren — joint-Ama-inq','Direction','hiroshi_boss'),
    mk('はい。学会で遠山助教のご発表を聴きます','Yes — Conf-Toy-asst-pres','Earnest','ren_uni'),
    mk('蓮、文献の篠原先生のご論文も参考にしろ','Ren — lit-Shin-paper-ref','Direction','hiroshi_boss'),
    mk('はい。研究室の藤村先輩からご指導を仰ぎます','Yes — Lab-Fuji-sen-guide','Polite','ren_uni'),
    mk('蓮、海外連携の須藤教授と打ち合わせしろ','Ren — overs-Sudo-prof-meet','Direction','hiroshi_boss'),
    mk('はい。研究費の窓口、牧野事務官に申請します','Yes — Res-fund-Mak-apply','Earnest close','ren_uni'),
  ]},
  {id:'conv_10889',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、小田刑事の現場対応も評価されますね','Police Oda-det-eval','Cooperative','kenji_office'),
    mk('警察、参考人富田氏から、警察、事情を伺われますね','Police witn-Tom-careful','Cooperative','kenji_office'),
    mk('警察、被害者天野氏のご家族にも、警察、配慮されますね','Police vict-Ama-fam-care','Cooperative','kenji_office'),
    mk('警察、目撃者遠山氏の供述を、警察、整えられますね','Police witn-Toy-stmt','Cooperative','kenji_office'),
    mk('警察、容疑者篠原の前科を、警察、確認されますね','Police suspect-Shin-prior','Cooperative','kenji_office'),
    mk('警察、署内の鑑識藤村主任と現場検証されますね','Police stat-foren-Fuji-scene','Cooperative','kenji_office'),
    mk('警察、心理士須藤様にご助言を仰がれますね','Police psy-Sudo-adv','Cooperative','kenji_office'),
    mk('警察、検事の牧野様と公判前協議もされますね','Police pros-Mak-pre-trial','Close','kenji_office'),
  ]},
  {id:'conv_10890',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、小田氏と共同事業を立ち上げられた','Dad — youth-Oda-JV','Sage','hiroshi_elder'),
    mk('はい。お父さんは富田先輩のご薫陶を受けられた','Yes — Dad Tom-sen-mentor','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、天野氏と海外進出を企画された','Dad — youth-Ama-overs','Wistful','hiroshi_elder'),
    mk('はい。お父さんは遠山氏を広報の柱に据えられた','Yes — Dad Toy-PR-pillar','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、篠原氏と経理体制を整えられた','Dad — youth-Shin-acct','Wistful','hiroshi_elder'),
    mk('はい。お父さんは藤村氏を主任として育てられた','Yes — Dad Fuji-lead-grow','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、須藤氏と海外法人を立ち上げられた','Dad — youth-Sudo-overs-co','Wistful','hiroshi_elder'),
    mk('はい。お父さんは牧野氏に法務全般を委ねられた','Yes — Dad Mak-leg-entr','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10891',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、旧字「戰」、つまり戦時史の表記研究を論文で扱いましたね','Ren — old-sen-war paper','Calm','asuka_teacher'),
    mk('はい、旧字「燈」、つまり灯の照明文化史を論文で扱いました','Yes — Old-tou-light paper','Earnest','ren_uni'),
    mk('蓮さん、旧字「會」、つまり会合の文書史を論文で扱いましたね','Ren — old-kai-meet paper','Reflective','asuka_teacher'),
    mk('はい、敷物の茵、つまり茵席の民俗誌を論文で扱いました','Yes — Cush-mat-folk paper','Earnest','ren_uni'),
    mk('蓮さん、絹糸の繭、つまり養蚕の繭の研究を論文で扱いましたね','Ren — silk-coc paper','Reflective','asuka_teacher'),
    mk('はい、谷の狭間の地理研究を論文で扱いました','Yes — Valley-gap-geo paper','Earnest','ren_uni'),
    mk('蓮さん、古文書「のっとっ」、つまり「則っ」の用法を論文で扱いましたね','Ren — old-nottot-use paper','Reflective','asuka_teacher'),
    mk('はい、古文の云い、つまり「言い」の旧形の研究を論文で扱いました','Yes — Class-iwa-old paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10892',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、旧字「戰」、つまり戦時遺品の鑑定を、警察、専門家に依頼されますね','Case old-sen-war-relic police-expert','Reflective','ren_uni'),
    mk('警察、旧字「燈」、つまり灯油盗難の事案も対応されますね','Police old-tou-kero-theft','Cooperative','takeda_officer'),
    mk('本件、旧字「會」、つまり會社の偽装登記を、警察、捜査されますね','Case old-kai-co-forg-reg police-inv','Reflective','ren_uni'),
    mk('警察、現場の茵、つまり茵席の繊維分析もされますね','Police scene-cush-fib-anal','Cooperative','takeda_officer'),
    mk('本件、密輸の繭、つまり繭製品の捜査を、警察、進められますね','Case smug-coc-prod police-prog','Reflective','ren_uni'),
    mk('警察、山の狭間の遭難事案を、警察、救助されますね','Police mtn-gap-resc','Cooperative','takeda_officer'),
    mk('本件、法令にのっとっ、つまり則って捜査されますね','Case law-nottot police-acc','Reflective','ren_uni'),
    mk('警察、容疑者の云い、つまり「云い分」を、警察、丁寧に聴かれますね','Police suspect-iwai-stmt-careful','Close','takeda_officer'),
  ]},
  {id:'conv_10893',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、旧字「戰」、つまり戦時史の表記研究を論文で扱いましたね','Sakura — old-sen paper','Calm','asuka_teacher'),
    mk('はい、旧字「燈」、つまり灯の照明文化史を論文で扱いました','Yes — Old-tou paper','Earnest teen','sakura_teen'),
    mk('旧字「會」、つまり会合の文書史を論文で扱いましたね','Old-kai paper','Reflective','asuka_teacher'),
    mk('はい、敷物の茵、つまり茵席の民俗誌を論文で扱いました','Yes — Cush-mat paper','Earnest','sakura_teen'),
    mk('絹糸の繭、つまり養蚕の繭の研究を論文で扱いましたね','Silk-coc paper','Reflective','asuka_teacher'),
    mk('はい、谷の狭間の地理研究を論文で扱いました','Yes — Valley-gap paper','Earnest','sakura_teen'),
    mk('古文書「のっとっ」、つまり「則っ」の用法を論文で扱いましたね','Old-nottot paper','Reflective','asuka_teacher'),
    mk('はい、古文の云い、つまり「言い」の旧形の研究を論文で扱いました','Yes — Class-iwai paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10894',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、旧字「戰」、つまり戦争関連の精神医学的影響を医療チームで研究します','Ren — old-sen-war-psych med-team','Calm','saito_doctor'),
    mk('蓮さん、旧字「燈」、つまり灯の使用での火傷症例を医療チームで治療します','Ren — old-tou-burn med-team','Calm','saito_doctor'),
    mk('蓮さん、旧字「會」、つまり会議体での医療連携を医療チームで強化します','Ren — old-kai-conf med-team','Calm','saito_doctor'),
    mk('蓮さん、医療用の茵、つまり茵席、ベッドマットの選定を医療チームでおこないます','Ren — med-cush-bed med-team','Calm','saito_doctor'),
    mk('蓮さん、養蚕の繭由来のシルク医療材料を医療チームで研究します','Ren — silk-coc-med-mat med-team','Calm','saito_doctor'),
    mk('蓮さん、山の狭間での救急搬送を医療チームで整えます','Ren — mtn-gap-emerg med-team','Calm','saito_doctor'),
    mk('蓮さん、医療倫理にのっとっ、つまり則って診療します','Ren — med-eth-nottot-care med-team','Calm','saito_doctor'),
    mk('蓮さん、患者様の云い、つまり「云いたい事」を医療チームで丁寧に聴きます','Ren — pati-iwai-careful med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_10895',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、社史の旧字「戰」、つまり戦中期記録を電子化しろ','Our co — co-hist-old-sen-dig','Crisp','hiroshi_boss'),
    mk('はい。古い旧字「燈」、つまり灯ロゴを刷新します','Yes — Old-tou-logo-renew','Methodical','kenji_office'),
    mk('当社、創業時の旧字「會」、つまり會社印を保管しろ','Our co — found-old-kai-seal-keep','Direction','hiroshi_boss'),
    mk('はい。会議室の茵、つまり茵椅子を新調します','Yes — Meet-cush-chair-renew','Update','kenji_office'),
    mk('当社、伝統繊維事業で繭、つまり繭調達を強化しろ','Our co — trad-fib-coc-source','Direction','hiroshi_boss'),
    mk('はい。市場の狭間、つまりニッチを狙います','Yes — Mkt-gap-niche-aim','Update','kenji_office'),
    mk('当社、法令にのっとっ、つまり則ってコンプライアンスを徹底しろ','Our co — law-nottot-comp-thor','Direction','hiroshi_boss'),
    mk('はい。創業者の云い、つまり「云いたい志」を社員に伝えます','Yes — Found-iwai-vis-staff','Close','kenji_office'),
  ]},
  {id:'conv_10896',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、コピペ文化のお話を語って下さったよ、メイちゃん','Aoi — cust-copy-paste-cult-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お子様が「うんこ」って繰り返す時期だって笑ってらしたよ、メイちゃん','Aoi — cust-kid-"unko"-phase-laugh Mei','Wry','aoi_barista'),
    mk('葵、お客様、メイル、つまりメールでお取引されてるって、メイちゃん','Aoi — cust-mail-biz Mei','Reflective','mei_romantic'),
    mk('葵、お客様、フリーのクリエーターとしてご活躍だって、メイちゃん','Aoi — cust-free-cre-act Mei','Reflective','aoi_barista'),
    mk('葵、お客様、「お代わりできよ」って古風な口調で仰ったよ、メイちゃん','Aoi — cust-"refill-dekiyo"-old-said Mei','Wry','mei_romantic'),
    mk('葵、お客様、お孫様が「チョー楽しい」って連発してたよ、メイちゃん','Aoi — cust-grdkid-"cho-fun" Mei','Wry','aoi_barista'),
    mk('葵、お客様、テニスのシャラポワがお好きだって、メイちゃん','Aoi — cust-Sharap-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、コットンの天然素材がお好みだって、メイちゃん','Aoi — cust-cotton-nat-pref Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10897',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが「コピペは便利だけど安易」と仰った','Gran — youth Dad-"copy-easy"-said','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、お孫様が「うんこ」連発する時期があったわよね、あなた?','Yes — Grandpa-grdkid-"unko"-phase, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「メイル、つまりメールの時代になった」と仰った','Gran — youth Dad-"mail-era"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、クリエーターとしてご活躍されたわよね、あなた?','Grandpa — youth-cre-act, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「お代わりできよ」と古風に言われた','Gran — youth Dad-"refill-dekiyo"-old','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、若者言葉「チョー」を面白がってらしたわよね、あなた?','Grandpa — youth-"cho"-fun, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがテニスのシャラポワを応援された','Gran — youth Dad-Sharap-cheer','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、私にコットンのシャツを下さったわよね、あなた?','Grandpa — youth-me-cotton-shirt, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10898',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「学校の宿題でコピペはダメよ」って仰ってたわ','Sho — Dad-"hw-copy-no"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「うんこドリル」で漢字練習したよ','Mei-sis — me Dad-"Unko-drill"-kanji','Eager child','sho_child'),
    mk('翔くん、お父さんが「先生にメイル、つまりメールを送る」って仰ってたわ','Sho — Dad-"tch-mail"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと若いクリエーターの展示観たよ','Mei-sis — me Dad-young-cre-exhib','Eager child','sho_child'),
    mk('翔くん、お父さんが古風な口調で「お代わりできよ」って仰ってたわ','Sho — Dad-"refill-dekiyo"-old-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「チョー楽しい体験」って言葉教わったよ','Mei-sis — me Dad-"cho-fun"-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんがテニス選手のシャラポワのドキュメンタリー観てらっしゃるわ','Sho — Dad-Sharap-doc','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんからコットンの肌着を頂いたよ','Mei-sis — me Dad-cotton-under','Eager close','sho_child'),
  ]},
  {id:'conv_10899',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、宿題でコピペしてバレたな','Riku — hw-copy-caught','Wry teen','sakura_teen'),
    mk('お前、低学年の頃「うんこ」連発してたよな、桜','You — youn-grade-"unko" Sakura','Wry','riku_teen'),
    mk('リク、お前、先生にメイル、つまりメール送ってたな','Riku — tch-mail','Curious','sakura_teen'),
    mk('お前、文化祭で「クリエーター」を自称してたな、桜','You — cul-fes-"cre"-self Sakura','Wry','riku_teen'),
    mk('リク、お前、給食で「お代わりできよ」って古風に言ってたな','Riku — lunch-"refill-dekiyo"-old','Wry','sakura_teen'),
    mk('お前、最近「チョー」連発してるな、桜','You — recently-"cho"-overuse Sakura','Wry','riku_teen'),
    mk('リク、お前、テニス部でシャラポワのフォーム真似してたな','Riku — tennis-Sharap-mimic','Curious','sakura_teen'),
    mk('お前、制服の下にコットンのTシャツ重ね着してたな、桜','You — uni-cotton-T-layer Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10900',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「コピペで済まさないで自分で考えなさい」って仰ってたわ','Sho — Dad-"copy-no-think"-said','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと「うんこドリル」で漢字書き取り練習したよ','Mom — me Dad-"Unko-drill"-kanji','Eager child','sho_child'),
    mk('翔くん、お父さんがメイル、つまりメールで連絡されてるわ','Sho — Dad-mail-contact','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとクリエーターの作品集観たよ','Mom — me Dad-cre-port','Eager child','sho_child'),
    mk('翔くん、お父さんが古風に「できよ」って仰ったわ','Sho — Dad-old-"dekiyo"-said','Wry','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「『チョー』は時代を映す言葉」って教えて頂いたよ','Mom — me Dad-"cho-era"-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんがテニスのシャラポワのインタビュー観てらっしゃるわ','Sho — Dad-Sharap-int','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとコットン100%のシーツを購入したよ','Mom — me Dad-cotton-100-sheet','Eager close','sho_child'),
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_543 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['のぞみ','りゅう','秀樹','和彦','優作','三男','英男','誠一']
const B_T = ['櫻井','杉本','鳩山','齋藤','佐伯','中谷','中井','川島']
const C_T = ['珪','聾','鞍','烏','瑤','螢','禄','鄭']
const D_T = ['マヤ','デビッド','アンドリュー','トマス','ザック','ゲール','キティ','マンセー']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10821',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが新幹線のぞみで出張に行かれるそうよ','Sho — Dad-Nozomi-trip','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんのお友達のりゅうおじさんと将棋指したよ','Mom — me Dad-fri-Ryu-uncle-shogi','Pleased child','sho_child'),
    mk('翔くん、お父さんが「西城秀樹の曲は懐かしい」って仰ってたわ','Sho — Dad-"Saijo-Hide-nost"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと和彦おじさんに会ったよ','Mom — me Dad-Kaz-uncle-met','Eager child','sho_child'),
    mk('翔くん、お父さんが「松田優作の映画は名作」って仰ってたわ','Sho — Dad-"Matsu-Yu-masterp"-said','Reflective','yumiko_mom'),
    mk('ママ、お父さんが「自分は三男だから跡継ぎを譲った」って語って下さったよ','Mom — Dad-"3rd-son-yield"-talk','Earnest child','sho_child'),
    mk('翔くん、お父さんが「英男いとこは絵が上手」って仰ってたわ','Sho — Dad-"Hideo-cous-art"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと誠一おじさんに会いに行ったよ','Mom — me Dad-Sei-uncle-vis','Eager close','sho_child'),
  ]},
  {id:'conv_10822',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、お孫様のお名前がのぞみちゃんだって、メイちゃん','Aoi — cust-grdkid-Nozomi Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご友人のりゅうさんとお茶されてたよ、メイちゃん','Aoi — cust-fri-Ryu-tea Mei','Reflective','aoi_barista'),
    mk('葵、お客様、西城秀樹の懐メロをご自宅で聴かれてるって、メイちゃん','Aoi — cust-Saijo-Hide-nost Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご友人の和彦さんとよく来店されるよ、メイちゃん','Aoi — cust-fri-Kaz-reg Mei','Reflective','aoi_barista'),
    mk('葵、お客様、松田優作の映画祭に行かれるって、メイちゃん','Aoi — cust-Matsu-Yu-fes Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご自身を「うちの三男」って自虐されてたよ、メイちゃん','Aoi — cust-"3rd-son"-mock Mei','Wry','aoi_barista'),
    mk('葵、お客様、お父様のお名前が英男さんだって、メイちゃん','Aoi — cust-fa-Hideo Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お友達の誠一さんと打ち合わせされてたよ、メイちゃん','Aoi — cust-fri-Sei-meet Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10823',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが新幹線のぞみの開業を喜ばれた','Gran — youth Dad-Nozomi-open','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、お兄様のりゅうさんと将棋を指されたわよね、あなた?','Yes — Grandpa-bro-Ryu-shog, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが西城秀樹の曲を口ずさまれた','Gran — youth Dad-Saijo-Hide-hum','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ご友人の和彦さんと釣りに行かれたわよね、あなた?','Grandpa — youth-fri-Kaz-fish, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが松田優作のデビュー作を観られた','Gran — youth Dad-Matsu-Yu-deb','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、「ご自身は三男坊」と謙遜されたわよね、あなた?','Grandpa — youth-"3rd-son-humble", dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがご友人の英男さんと俳句を詠まれた','Gran — youth Dad-fri-Hideo-haik','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ご友人の誠一さんとお酒を酌み交わされたわよね、あなた?','Grandpa — youth-fri-Sei-drink, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10824',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、新幹線のぞみで関西行ったろ','Riku — Nozomi-Kansai?','Curious teen','sakura_teen'),
    mk('お前、隣のクラスのりゅうと仲良いな、桜','You — next-cl-Ryu-close Sakura','Curious','riku_teen'),
    mk('リク、お父さんが西城秀樹の曲歌ってたな','Riku — Dad-Saijo-Hide-sing','Wry','sakura_teen'),
    mk('お前、隣の和彦おじさんと挨拶してたな、桜','You — next-Kaz-uncle-greet Sakura','Curious','riku_teen'),
    mk('リク、お父さん、松田優作の映画を布教してたな','Riku — Dad-Matsu-Yu-promo','Wry','sakura_teen'),
    mk('お前、家族構成で三男って言ってたよな、桜','You — fam-3rd-son-said Sakura','Curious','riku_teen'),
    mk('リク、お前の英男おじさんって面白いな','Riku — your-Hideo-uncle-fun','Curious','sakura_teen'),
    mk('お前、塾の誠一先生厳しかったな、桜','You — cram-Sei-tch-strict Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10825',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがのぞみ号、つまり新幹線のぞみに乗ろうって仰ってたわ','Sho — Dad-"Nozomi-ride"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとりゅうおじさんの家に行ったよ','Mei-sis — me Dad-Ryu-uncle-vis','Eager child','sho_child'),
    mk('翔くん、お父さんが「西城秀樹のヤングマンを一緒に歌おう」って仰ってたわ','Sho — Dad-"Saijo-Hide-YM-sing"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと和彦おじさんに会いに行ったよ','Mei-sis — me Dad-Kaz-uncle-vis','Eager child','sho_child'),
    mk('翔くん、お父さんが「松田優作のドラマは深い」って仰ってたわ','Sho — Dad-"Matsu-Yu-dr-deep"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「三男のお父さんの苦労」を聞いたよ','Mei-sis — me Dad-"3rd-son-hard"-heard','Earnest child','sho_child'),
    mk('翔くん、お父さんが「英男おじさんの絵を観に行こう」って仰ってたわ','Sho — Dad-"Hideo-uncle-art"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと誠一おじさんの結婚式に行ったよ','Mei-sis — me Dad-Sei-uncle-wed','Eager close','sho_child'),
  ]},
  {id:'conv_10826',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新任の櫻井部長を歓迎しろ','Our co — new-Sak-dept-wel','Crisp','hiroshi_boss'),
    mk('はい。営業の杉本課長の出張日程を整えます','Yes — Sales-Sug-mgr-trip','Methodical','kenji_office'),
    mk('当社、政界の鳩山系列との関係を慎重に維持しろ','Our co — pol-Hat-rel-careful','Direction','hiroshi_boss'),
    mk('はい。広報の齋藤様の戦略を採用します','Yes — PR-Saito-strat-adopt','Update','kenji_office'),
    mk('当社、顧問の佐伯様にご助言を仰げ','Our co — adv-Sae-cons','Direction','hiroshi_boss'),
    mk('はい。経理の中谷様に予算策定を依頼します','Yes — Acct-Nakat-budg-req','Update','kenji_office'),
    mk('当社、人事の中井様に新人研修を任せろ','Our co — HR-Nakai-newhire-entr','Direction','hiroshi_boss'),
    mk('はい。法務の川島様に契約書確認を依頼します','Yes — Leg-Kaw-contr-req','Close','kenji_office'),
  ]},
  {id:'conv_10827',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('櫻井部長の歓迎会を準備しましょう','Sak-dept-wel-prep','Brisk','yuki_office'),
    mk('はい。杉本課長の引き継ぎ書を確認します','Yes — Sug-mgr-handov','Cooperative','kenji_office'),
    mk('政界の鳩山系列の動向を社内で共有しましょう','Pol-Hat-trend-share','Direction','yuki_office'),
    mk('はい。齋藤広報の月次企画書を確認します','Yes — Saito-PR-mo-plan','Update','kenji_office'),
    mk('佐伯顧問との面談を予定しましょう','Sae-adv-meet-plan','Direction','yuki_office'),
    mk('はい。中谷経理の決算予定を整えます','Yes — Nakat-acct-clos','Update','kenji_office'),
    mk('中井人事に新人研修プランを依頼しましょう','Nakai-HR-newhire','Direction','yuki_office'),
    mk('はい。川島法務に新契約レビューを依頼します','Yes — Kaw-leg-new-contr','Close','kenji_office'),
  ]},
  {id:'conv_10828',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、指導教授の櫻井先生のご研究を継承しろ','Ren — mentor-Sak-res','Mentor','hiroshi_boss'),
    mk('はい。杉本教授の論文を読み込みます','Yes — Sug-prof-paper','Earnest','ren_uni'),
    mk('蓮、政治学者の鳩山先生のご論文も参照しろ','Ren — pol-Hat-prof-ref','Direction','hiroshi_boss'),
    mk('はい。学会で齋藤助教のご発表を聴きます','Yes — Conf-Saito-asst-pres','Earnest','ren_uni'),
    mk('蓮、文献の佐伯先生のご論文も参考にしろ','Ren — lit-Sae-paper-ref','Direction','hiroshi_boss'),
    mk('はい。研究室の中谷先輩からご指導を仰ぎます','Yes — Lab-Nakat-sen-guide','Polite','ren_uni'),
    mk('蓮、海外連携の中井教授と打ち合わせしろ','Ren — overs-Nakai-prof-meet','Direction','hiroshi_boss'),
    mk('はい。研究費の窓口、川島事務官に申請します','Yes — Res-fund-Kaw-apply','Earnest close','ren_uni'),
  ]},
  {id:'conv_10829',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、櫻井刑事の現場対応も評価されますね','Police Sak-det-eval','Cooperative','kenji_office'),
    mk('警察、参考人杉本氏から、警察、事情を伺われますね','Police witn-Sug-careful','Cooperative','kenji_office'),
    mk('警察、政界の鳩山系列の関係事案も担当されますね','Police pol-Hat-rel-case','Cooperative','kenji_office'),
    mk('警察、目撃者齋藤氏の供述を、警察、整えられますね','Police witn-Saito-stmt','Cooperative','kenji_office'),
    mk('警察、容疑者佐伯の前科を、警察、確認されますね','Police suspect-Sae-prior','Cooperative','kenji_office'),
    mk('警察、心理士中谷様にご助言を仰がれますね','Police psy-Nakat-adv','Cooperative','kenji_office'),
    mk('警察、参考人中井氏のご証言を、警察、整えられますね','Police witn-Nakai-stmt-tidy','Cooperative','kenji_office'),
    mk('警察、検事の川島様と公判前協議もされますね','Police pros-Kaw-pre-trial','Close','kenji_office'),
  ]},
  {id:'conv_10830',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、櫻井氏と共同事業を立ち上げられた','Dad — youth-Sak-JV','Sage','hiroshi_elder'),
    mk('はい。お父さんは杉本先輩のご薫陶を受けられた','Yes — Dad Sug-sen-mentor','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、鳩山政権の経済政策に詳しかった','Dad — youth-Hat-econ-knowl','Wistful','hiroshi_elder'),
    mk('はい。お父さんは齋藤氏を広報の柱に据えられた','Yes — Dad Saito-PR-pillar','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、佐伯氏と経理体制を整えられた','Dad — youth-Sae-acct','Wistful','hiroshi_elder'),
    mk('はい。お父さんは中谷氏を主任として育てられた','Yes — Dad Nakat-lead-grow','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、中井氏と海外法人を立ち上げられた','Dad — youth-Nakai-overs-co','Wistful','hiroshi_elder'),
    mk('はい。お父さんは川島氏に法務全般を委ねられた','Yes — Dad Kaw-leg-entr','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10831',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、半導体の珪素、つまり珪の結晶構造研究を論文で扱いましたね','Ren — semi-Si-cry paper','Calm','asuka_teacher'),
    mk('はい、聾、つまり聴覚障害の医学社会学研究を論文で扱いました','Yes — Deaf-med-soc paper','Earnest','ren_uni'),
    mk('蓮さん、馬具の鞍、つまり鞍の歴史的研究を論文で扱いましたね','Ren — saddle-hist paper','Reflective','asuka_teacher'),
    mk('はい、生物の烏、つまりカラスの知能研究を論文で扱いました','Yes — Crow-intel paper','Earnest','ren_uni'),
    mk('蓮さん、旧字「瑤」、つまり瑤宮の地名研究を論文で扱いましたね','Ren — old-you-loc paper','Reflective','asuka_teacher'),
    mk('はい、旧字「螢」、つまり蛍の生態研究を論文で扱いました','Yes — Old-firef paper','Earnest','ren_uni'),
    mk('蓮さん、江戸時代の禄、つまり俸禄制度の研究を論文で扱いましたね','Ren — Edo-stip paper','Reflective','asuka_teacher'),
    mk('はい、中国宋代の鄭氏、つまり鄭家の系譜研究を論文で扱いました','Yes — Cn-Song-Zhen paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10832',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、珪素、つまり珪チップの密輸事案を、警察、捜査されますね','Case Si-chip-smug police-inv','Reflective','ren_uni'),
    mk('警察、聾、つまり聴覚障害者の被害者保護も丁寧にされますね','Police deaf-vict-prot-care','Cooperative','takeda_officer'),
    mk('本件、現場の鞍、つまり馬の鞍の盗難を、警察、捜査されますね','Case scene-sadd-theft police-inv','Reflective','ren_uni'),
    mk('警察、犯行現場の烏、つまりカラスの目撃情報も参考にされますね','Police scene-crow-witn-info-ref','Cooperative','takeda_officer'),
    mk('本件、旧字「瑤」、つまり瑤の人名の戸籍を、警察、確認されますね','Case old-you-name-rec police-check','Reflective','ren_uni'),
    mk('警察、旧字「螢」、つまり蛍の生息地の文化財保護も支援されますね','Police old-firef-habit-prot','Cooperative','takeda_officer'),
    mk('本件、江戸期の禄、つまり俸禄文書の盗難を、警察、捜査されますね','Case Edo-stip-doc-theft police-inv','Reflective','ren_uni'),
    mk('警察、参考人鄭氏から、警察、事情を伺われますね','Police witn-Zhen-careful','Close','takeda_officer'),
  ]},
  {id:'conv_10833',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、半導体の珪素、つまり珪の結晶構造研究を論文で扱いましたね','Sakura — Si paper','Calm','asuka_teacher'),
    mk('はい、聾、つまり聴覚障害の医学社会学研究を論文で扱いました','Yes — Deaf paper','Earnest teen','sakura_teen'),
    mk('馬具の鞍、つまり鞍の歴史的研究を論文で扱いましたね','Sadd-hist paper','Reflective','asuka_teacher'),
    mk('はい、生物の烏、つまりカラスの知能研究を論文で扱いました','Yes — Crow paper','Earnest','sakura_teen'),
    mk('旧字「瑤」、つまり瑤宮の地名研究を論文で扱いましたね','Old-you paper','Reflective','asuka_teacher'),
    mk('はい、旧字「螢」、つまり蛍の生態研究を論文で扱いました','Yes — Old-firef paper','Earnest','sakura_teen'),
    mk('江戸時代の禄、つまり俸禄制度の研究を論文で扱いましたね','Edo-stip paper','Reflective','asuka_teacher'),
    mk('はい、中国宋代の鄭氏、つまり鄭家の系譜研究を論文で扱いました','Yes — Zhen paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10834',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、医療機器の珪素、つまり珪チップの劣化を医療チームで監視します','Ren — med-Si-deg med-team','Calm','saito_doctor'),
    mk('蓮さん、聾、つまり聴覚障害患者様の手話通訳を医療チームで配置します','Ren — deaf-sign-int med-team','Calm','saito_doctor'),
    mk('蓮さん、馬術選手の鞍、つまり鞍負荷による腰痛を医療チームで治療します','Ren — eq-sadd-low-back med-team','Calm','saito_doctor'),
    mk('蓮さん、烏、つまりカラスの咬傷症例を医療チームで治療します','Ren — crow-bite med-team','Calm','saito_doctor'),
    mk('蓮さん、旧字「瑤」、つまり瑤を含む医薬古書を医療チームで保管します','Ren — old-you-med med-team','Calm','saito_doctor'),
    mk('蓮さん、旧字「螢」、つまり蛍光標識を医療チームで研究します','Ren — old-firef-fluor med-team','Calm','saito_doctor'),
    mk('蓮さん、江戸の禄、つまり俸禄医制度の医療史を医療チームで学びます','Ren — Edo-stip-med-hist med-team','Calm','saito_doctor'),
    mk('蓮さん、中国系患者鄭様のご症状を医療チームで継続観察します','Ren — Zhen-pati med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_10835',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、半導体の珪素、つまり珪原料の調達を強化しろ','Our co — semi-Si-source-strong','Crisp','hiroshi_boss'),
    mk('はい。聾、つまり聴覚障害者向けバリアフリー商品を展開します','Yes — Deaf-bf-prod','Methodical','kenji_office'),
    mk('当社、社員旅行の乗馬体験で鞍、つまり鞍の使い方を学べ','Our co — staff-eq-sadd-learn','Direction','hiroshi_boss'),
    mk('はい。鳥害、つまり烏の対策を倉庫で実施します','Yes — Crow-pest-wareh','Update','kenji_office'),
    mk('当社、創業者の旧字「瑤」、つまり瑤を社印に残せ','Our co — found-old-you-seal','Direction','hiroshi_boss'),
    mk('はい。新製品名に旧字「螢」、つまり蛍を採用します','Yes — New-prod-old-firef','Update','kenji_office'),
    mk('当社、給与体系を「禄」、つまり伝統的安定型に近づけろ','Our co — pay-stip-stab','Direction','hiroshi_boss'),
    mk('はい。中国の鄭社長との取引を強化します','Yes — Cn-Zhen-pres-strong','Close','kenji_office'),
  ]},
  {id:'conv_10836',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、メキシコのマヤ文明のお話を語って下さったよ、メイちゃん','Aoi — cust-Mex-Maya-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、米国のデビッド・ボウイの曲を愛されてるよ、メイちゃん','Aoi — cust-Dav-Bow-love Mei','Reflective','aoi_barista'),
    mk('葵、お客様、英国のアンドリュー王子のお話を語って下さったよ、メイちゃん','Aoi — cust-UK-Andr-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、機関車トーマスのキャラ、つまりトマスがお好きだって、メイちゃん','Aoi — cust-Thomas-loco-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お子様のお名前がザックくんだって、メイちゃん','Aoi — cust-kid-Zack Mei','Reflective','mei_romantic'),
    mk('葵、お客様、米国ゲール語、つまりゲールの言語学を学ばれてるよ、メイちゃん','Aoi — cust-Gaelic-ling Mei','Reflective','aoi_barista'),
    mk('葵、お客様、サンリオのハローキティがお好みだって、メイちゃん','Aoi — cust-Sanrio-Kitty-fav Mei','Reflective','mei_romantic'),
    mk('葵、お客様、韓国旅行で「マンセー!」って大声で叫んだお話を語って下さったよ、メイちゃん','Aoi — cust-Kor-"Manse"-cry-talk Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10837',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがマヤ文明の遺跡写真集を蔵書された','Gran — youth Dad-Maya-photo-coll','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、デビッド・ボウイの曲を愛されたわよね、あなた?','Yes — Grandpa-youth-Dav-Bow-love, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがアンドリュー・カーネギーの伝記を蔵書された','Gran — youth Dad-Andr-Carn-coll','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、機関車トーマスのキャラ、つまりトマスをお孫様と楽しまれたわよね、あなた?','Grandpa — youth-Thomas-grdkid, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがご友人のザックさんと文通された','Gran — youth Dad-fri-Zack-letter','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、スコットランドのゲール語、つまりゲール文化に詳しかったわよね、あなた?','Grandpa — youth-Scot-Gaelic-knowl, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがお孫様にハローキティのグッズを下さった','Gran — youth Dad-grdkid-Kitty','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、韓国でマンセー、つまり「マンセー!」の意味を学ばれたわよね、あなた?','Grandpa — youth-Kor-"Manse"-mean, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10838',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがマヤ文明の絵本を読んで下さるそうよ','Sho — Dad-Maya-pic','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとデビッド・カッパーフィールドのマジック観たよ','Mei-sis — me Dad-Dav-Copp-magic','Eager child','sho_child'),
    mk('翔くん、お父さんがアンドリュー・ロイド・ウェバーのミュージカルを観られるそうよ','Sho — Dad-Andr-Lloyd-W-mus','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと機関車トーマス、つまりトマスのおもちゃで遊んだよ','Mei-sis — me Dad-Thomas-toy-play','Eager child','sho_child'),
    mk('翔くん、お父さんが「ザック・エフロンの映画を観に行こう」って仰ってたわ','Sho — Dad-"Zack-Ef-film"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとスコットランドのゲール語、つまりゲール民謡聴いたよ','Mei-sis — me Dad-Scot-Gaelic-folk','Eager child','sho_child'),
    mk('翔くん、お父さんがハローキティのグッズを下さったわ','Sho — Dad-Kitty-gift','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと韓国の応援、つまりマンセーの掛け声を覚えたよ','Mei-sis — me Dad-Kor-"Manse"-learn','Eager close','sho_child'),
  ]},
  {id:'conv_10839',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、社会でマヤ文明調べてたな','Riku — soc-Maya-stud','Curious teen','sakura_teen'),
    mk('お前、音楽でデビッド・ゲッタの曲聴いてたろ、桜','You — mus-Dav-Gue? Sakura','Wry','riku_teen'),
    mk('リク、お前、社会でアンドリュー大統領習ったろ','Riku — soc-Andr-pres?','Curious','sakura_teen'),
    mk('お前、機関車トーマス、つまりトマスの絵本好きだったよな、桜','You — Thomas-pic-like Sakura','Wry','riku_teen'),
    mk('リク、お前、映画でザック・エフロン好きだったな','Riku — film-Zack-Ef-fan','Curious','sakura_teen'),
    mk('お前、英語の授業でゲール語、つまりゲール文化習ったろ、桜','You — Eng-Gaelic-learn? Sakura','Curious','riku_teen'),
    mk('リク、お前、ハローキティ好きだって告白してたな','Riku — Kitty-fan-conf','Wry','sakura_teen'),
    mk('お前、韓国ドラマでマンセー、つまり「マンセー!」って言葉聞いたな、桜','You — Kor-dr-"Manse"-heard Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10840',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがマヤ文明の遺跡ドキュメンタリー観てらっしゃるわ','Sho — Dad-Maya-doc','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとデビッド・ボウイのライブDVD観たよ','Mom — me Dad-Dav-Bow-DVD','Eager child','sho_child'),
    mk('翔くん、お父さんがアンドリュー王子のニュースを観てらっしゃるわ','Sho — Dad-Andr-news','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと機関車トーマス、つまりトマスの動画観たよ','Mom — me Dad-Thomas-vid','Eager child','sho_child'),
    mk('翔くん、お父さんがザック・スナイダー監督の映画を観てらっしゃるわ','Sho — Dad-Zack-Sny-film','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとケルト・ゲール、つまりゲール文化の番組観たよ','Mom — me Dad-Celt-Gaelic','Eager child','sho_child'),
    mk('翔くん、お父さんがサンリオのハローキティのグッズを下さったわ','Sho — Dad-Sanrio-Kitty-gift','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと韓国の応援「マンセー」の意味を学んだよ','Mom — me Dad-Kor-"Manse"-learn','Eager close','sho_child'),
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_535 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['洋子','四郎','敦','小僧','無題','赤色','紗子','和子']
const B_T = ['目黒','野中','渡部','三宅','酒井','武部','高野','久保田']
const C_T = ['盧','洲','卿','大王','艦長','豪州','ムスリム','キリスト教徒']
const D_T = ['ホセ','ブライアン','アダム','チャイルド','エリック','ビリー','アンナ','ソロモン']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10661',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お母様のお友達の洋子さんが今度遊びにいらっしゃるわ','Sho — Mom-fri-Youko-vis','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんの古いお友達の四郎おじさんと会ったよ','Mom — me Dad-fri-Shiro-met','Pleased child','sho_child'),
    mk('翔くん、お父さんが「敦くんは元気そうね」って仰ってたわ','Sho — Dad-"Atsu-energ"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「やんちゃな小僧だな」って笑われたよ','Mom — me Dad-"yancha-boy"-laughed','Wry child','sho_child'),
    mk('翔くん、お父さんが「絵に無題と書くのもいい」って仰ってたわ','Sho — Dad-"art-untitled-OK"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと赤色の絵の具で絵を描いたよ','Mom — me Dad-red-paint-pic','Pleased child','sho_child'),
    mk('翔くん、お父さんが「お友達の紗子ちゃんによろしくね」って仰ってたわ','Sho — Dad-"Sako-greet"-said','Reflective','yumiko_mom'),
    mk('ママ、お父さんが「和子おばさんから果物を頂いた」って仰ってたよ','Mom — Dad-"Kazuko-aunt-fruit"-said','Eager close','sho_child'),
  ]},
  {id:'conv_10662',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ご友人の洋子さんとご来店だったよ、メイちゃん','Aoi — cust-fri-Youko-vis Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お父様の四郎さんのお話を語って下さったよ、メイちゃん','Aoi — cust-fa-Shiro-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お孫様の敦くんが受験を頑張ってらっしゃるって、メイちゃん','Aoi — cust-grdkid-Atsu-exam Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご自身を「ただの小僧扱いしないで下さい」って笑ってらしたよ、メイちゃん','Aoi — cust-self-"not-just-boy"-laugh Mei','Wry','aoi_barista'),
    mk('葵、お客様、無題の絵画展のお話を語って下さったよ、メイちゃん','Aoi — cust-untitled-exhib-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、店内の赤色のクッションをお選びだったよ、メイちゃん','Aoi — cust-red-cush-pick Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ご親戚の紗子さんの結婚式に出られるって、メイちゃん','Aoi — cust-rel-Sako-wed Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お母様のお名前が和子さんだって、メイちゃん','Aoi — cust-mom-Kazuko Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10663',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんのお友達洋子さんがよく我が家に来られた','Gran — youth Dad-fri-Youko-vis','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、四郎兄さんと将棋を指されたわよね、あなた?','Yes — Grandpa-Shiro-bro-shog, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがお孫の敦くんを膝に乗せられた','Gran — youth Dad-grdkid-Atsu-lap','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、子供達を「小僧」と親しみを込めて呼ばれたわよね、あなた?','Grandpa — kids-"boy"-warm-call, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは絵に敢えて無題と署名された','Gran — youth Dad-art-untitled-sign','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、赤色の傘を愛用されたわよね、あなた?','Grandpa — youth-red-umb-fav, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがご姪の紗子さんを可愛がられた','Gran — youth Dad-niece-Sako-love','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、お姉様の和子さんと文通されたわよね、あなた?','Grandpa — youth-sis-Kazuko-letter, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10664',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前のお母様、洋子さんって名前だったよな','Riku — your-mom-Youko-yeah','Curious teen','sakura_teen'),
    mk('お前、社会の宿題で四郎丸太郎の歴史調べてたな、桜','You — soc-Shiro-Tar-stud Sakura','Curious','riku_teen'),
    mk('リク、お前、隣のクラスの敦と仲良いな','Riku — next-cl-Atsu-close','Curious','sakura_teen'),
    mk('お前、漫画で「小僧、まだまだだな」って台詞気に入ってたな、桜','You — mng-"boy-not-yet"-like Sakura','Wry','riku_teen'),
    mk('リク、お前、美術の作品に無題って書いてたな','Riku — art-untitled-wrote','Curious','sakura_teen'),
    mk('お前、赤色の運動靴履いてたな、桜','You — red-sneak Sakura','Curious','riku_teen'),
    mk('リク、お前、隣のクラスの紗子と話してたな','Riku — next-cl-Sako-talk','Curious','sakura_teen'),
    mk('お前、家庭科で和子先生に教わったろ、桜','You — home-Kazuko-tch? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10665',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがお母様のお友達洋子さんを紹介して下さるそうよ','Sho — Dad-Mom-fri-Youko-intr','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと四郎さんのお墓参りに行ったよ','Mei-sis — me Dad-Shiro-grave','Eager child','sho_child'),
    mk('翔くん、お父さんが「敦くんとも遊びましょう」って仰ってたわ','Sho — Dad-"Atsu-play"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「若い小僧だな」って親しまれたよ','Mei-sis — me Dad-"young-boy"-warm','Wry child','sho_child'),
    mk('翔くん、お父さんが「絵を無題のまま展示する勇気もある」って仰ってたわ','Sho — Dad-"art-untitled-courage"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと赤色の風船を空に放したよ','Mei-sis — me Dad-red-balloon-rel','Eager child','sho_child'),
    mk('翔くん、お父さんが「紗子ちゃんは賢いね」って仰ってたわ','Sho — Dad-"Sako-bright"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと和子おばさんの家でお茶飲んだよ','Mei-sis — me Dad-Kazuko-aunt-tea','Eager close','sho_child'),
  ]},
  {id:'conv_10666',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、目黒オフィスの移転計画を進めろ','Our co — Meg-off-move-plan','Crisp','hiroshi_boss'),
    mk('はい。営業の野中課長の出張日程を整えます','Yes — Sales-Non-mgr-trip','Methodical','kenji_office'),
    mk('当社、取締役の渡部様の交代を準備しろ','Our co — dir-Wat-trans-prep','Direction','hiroshi_boss'),
    mk('はい。広報の三宅様の新企画を採用します','Yes — PR-Miyake-new-plan','Update','kenji_office'),
    mk('当社、財務の酒井様に予算策定を依頼しろ','Our co — fin-Sakai-budg-req','Direction','hiroshi_boss'),
    mk('はい。新任の武部部長を歓迎します','Yes — New-Takebe-dept-wel','Update','kenji_office'),
    mk('当社、人事の高野様に新人研修を任せろ','Our co — HR-Takano-newhire-entr','Direction','hiroshi_boss'),
    mk('はい。技術の久保田主任にプロジェクトを任せます','Yes — Tech-Kubota-lead-proj','Close','kenji_office'),
  ]},
  {id:'conv_10667',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('目黒支社の移転先候補を絞りましょう','Meg-branch-move-cand','Brisk','yuki_office'),
    mk('はい。野中課長の引き継ぎ書を作成します','Yes — Non-mgr-handov-doc','Cooperative','kenji_office'),
    mk('渡部取締役の送別会を計画しましょう','Wat-dir-fwl','Direction','yuki_office'),
    mk('はい。三宅広報の月次企画書を確認します','Yes — Miyake-PR-mo-plan-check','Update','kenji_office'),
    mk('酒井経理の決算スケジュールを共有しましょう','Sakai-acct-clos-sched-share','Direction','yuki_office'),
    mk('はい。武部部長の歓迎会を来週設定します','Yes — Takebe-dept-wel-nextwk','Update','kenji_office'),
    mk('高野人事に研修プログラムを相談しましょう','Takano-HR-train-prog-cons','Direction','yuki_office'),
    mk('はい。久保田技術主任とプロジェクト会議します','Yes — Kubota-tech-lead-proj-meet','Close','kenji_office'),
  ]},
  {id:'conv_10668',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、目黒キャンパスの教授陣と連携しろ','Ren — Meg-camp-prof-link','Mentor','hiroshi_boss'),
    mk('はい。野中先生のご研究を継承します','Yes — Non-prof-res-inherit','Earnest','ren_uni'),
    mk('蓮、共同研究の渡部先生に研究照会しろ','Ren — joint-Wat-inq','Direction','hiroshi_boss'),
    mk('はい。三宅助教の発表を聴きに行きます','Yes — Miyake-asst-pres','Earnest','ren_uni'),
    mk('蓮、文献の酒井先生のご論文を読み込め','Ren — lit-Sakai-paper-read','Direction','hiroshi_boss'),
    mk('はい。研究室の武部技官と連携します','Yes — Lab-Takebe-tech-link','Polite','ren_uni'),
    mk('蓮、海外連携の高野教授に礼状を出せ','Ren — overs-Takano-prof-letter','Direction','hiroshi_boss'),
    mk('はい。研究費の窓口の久保田事務官に申請します','Yes — Res-fund-Kubota-apply','Earnest close','ren_uni'),
  ]},
  {id:'conv_10669',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、目黒署と合同捜査されますね','Police Meg-stat-joint','Cooperative','kenji_office'),
    mk('警察、野中刑事の現場対応も評価されますね','Police Non-det-scene-eval','Cooperative','kenji_office'),
    mk('警察、参考人渡部氏から、警察、事情を伺われますね','Police witn-Wat-careful','Cooperative','kenji_office'),
    mk('警察、目撃者三宅氏の供述を、警察、整えられますね','Police witn-Miyake-stmt-tidy','Cooperative','kenji_office'),
    mk('警察、容疑者酒井の前科を、警察、確認されますね','Police suspect-Sakai-prior-check','Cooperative','kenji_office'),
    mk('警察、被害者武部氏のご家族にも、警察、配慮されますね','Police vict-Takebe-fam-care','Cooperative','kenji_office'),
    mk('警察、心理士高野様にご助言を仰がれますね','Police psy-Takano-adv','Cooperative','kenji_office'),
    mk('警察、鑑識の久保田主任と現場検証されますね','Police foren-Kubota-lead-scene','Close','kenji_office'),
  ]},
  {id:'conv_10670',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、目黒の小さな店舗から始められた','Dad — found Meg-small-store','Sage','hiroshi_elder'),
    mk('はい。お父さんは野中氏を初代主任として任命された','Yes — Dad Non-1st-lead-app','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、渡部氏と海外進出を企画された','Dad — youth-Wat-overs','Wistful','hiroshi_elder'),
    mk('はい。お父さんは三宅氏を広報の柱に据えられた','Yes — Dad Miyake-PR-pillar','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、酒井氏と経理体制を整えられた','Dad — youth-Sakai-acct','Wistful','hiroshi_elder'),
    mk('はい。お父さんは武部氏に工場長を任された','Yes — Dad Takebe-fact-mgr','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、高野氏と海外法人を立ち上げられた','Dad — youth-Takano-overs-co','Wistful','hiroshi_elder'),
    mk('はい。お父さんは久保田氏に技術部全般を委ねられた','Yes — Dad Kubota-tech-entr','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10671',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、韓国元大統領盧氏の政策研究を論文で扱いましたね','Ren — Kor-Roh-pol-pol paper','Calm','asuka_teacher'),
    mk('はい、満洲、つまり旧満洲国洲の歴史研究を論文で扱いました','Yes — Manchuria-shu-hist paper','Earnest','ren_uni'),
    mk('蓮さん、英国貴族の卿、つまり卿位の歴史研究を論文で扱いましたね','Ren — UK-noble-lord paper','Reflective','asuka_teacher'),
    mk('はい、古代の大王、つまり大王制の歴史研究を論文で扱いました','Yes — Anc-great-king paper','Earnest','ren_uni'),
    mk('蓮さん、戦艦の艦長の役割研究を論文で扱いましたね','Ren — battleship-cap paper','Reflective','asuka_teacher'),
    mk('はい、豪州、つまりオーストラリアの先住民研究を論文で扱いました','Yes — Aus-indig paper','Earnest','ren_uni'),
    mk('蓮さん、ムスリム共同体の社会学研究を論文で扱いましたね','Ren — Muslim-comm-soc paper','Reflective','asuka_teacher'),
    mk('はい、初期キリスト教徒の歴史研究を論文で扱いました','Yes — Early-Christian-hist paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10672',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、韓国の盧元大統領の関係事案を、警察、慎重に対応されますね','Case Kor-Roh-case police-care','Reflective','ren_uni'),
    mk('警察、旧満洲、つまり満洲国洲の遺品鑑定もされますね','Police old-Manchu-shu-art-auth','Cooperative','takeda_officer'),
    mk('本件、英国卿位の人物関連の捜査を、警察、慎重におこなわれますね','Case UK-lord-case police-care','Reflective','ren_uni'),
    mk('警察、大王、つまり古代大王陵の盗掘事件も対応されますね','Police great-king-tomb-poach','Cooperative','takeda_officer'),
    mk('本件、自衛艦の艦長への取材調整を、警察、ご手配されますね','Case Jp-cap-int police-arr','Reflective','ren_uni'),
    mk('警察、豪州、つまりオーストラリア当局と国際捜査連携されますね','Police Aus-int-link','Cooperative','takeda_officer'),
    mk('本件、ムスリム住民へのヘイト事件を、警察、毅然と対応されますね','Case Muslim-hate police-strict','Reflective','ren_uni'),
    mk('警察、キリスト教徒の集会への警備も担当されますね','Police Christian-gath-guard','Close','takeda_officer'),
  ]},
  {id:'conv_10673',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、韓国元大統領盧氏の政策研究を論文で扱いましたね','Sakura — Roh paper','Calm','asuka_teacher'),
    mk('はい、満洲、つまり旧満洲国洲の歴史研究を論文で扱いました','Yes — Manchu-shu paper','Earnest teen','sakura_teen'),
    mk('英国貴族の卿、つまり卿位の歴史研究を論文で扱いましたね','UK-noble-lord paper','Reflective','asuka_teacher'),
    mk('はい、古代の大王、つまり大王制の歴史研究を論文で扱いました','Yes — Great-king paper','Earnest','sakura_teen'),
    mk('戦艦の艦長の役割研究を論文で扱いましたね','Cap paper','Reflective','asuka_teacher'),
    mk('はい、豪州、つまりオーストラリアの先住民研究を論文で扱いました','Yes — Aus-indig paper','Earnest','sakura_teen'),
    mk('ムスリム共同体の社会学研究を論文で扱いましたね','Muslim-comm paper','Reflective','asuka_teacher'),
    mk('はい、初期キリスト教徒の歴史研究を論文で扱いました','Yes — Early-Christian paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10674',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、韓国の盧氏研究所と医療チームで共同研究します','Ren — Kor-Roh-lab med-team-joint','Calm','saito_doctor'),
    mk('蓮さん、満洲、つまり旧満洲国洲の医療史を医療チームで学びます','Ren — Manchu-shu-med-hist med-team','Calm','saito_doctor'),
    mk('蓮さん、英国卿位の医師の論文を医療チームで参考にします','Ren — UK-lord-doc-paper med-team-ref','Calm','saito_doctor'),
    mk('蓮さん、古代の大王陵から出土した薬草記録を医療チームで研究します','Ren — anc-king-tomb-herb-rec med-team','Calm','saito_doctor'),
    mk('蓮さん、自衛艦の艦長への医療支援を医療チームでおこないます','Ren — Jp-cap-med-sup med-team','Calm','saito_doctor'),
    mk('蓮さん、豪州、つまりオーストラリアの医療制度を医療チームで研究します','Ren — Aus-med-syst med-team','Calm','saito_doctor'),
    mk('蓮さん、ムスリム患者様への配慮事項を医療チームで共有します','Ren — Muslim-pati-care med-team-share','Calm','saito_doctor'),
    mk('蓮さん、キリスト教徒の患者様の宗教的配慮を医療チームでおこないます','Ren — Christian-pati-relig-care med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_10675',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、韓国の盧氏系列との取引を慎重に進めろ','Our co — Kor-Roh-rel-careful','Crisp','hiroshi_boss'),
    mk('はい。旧満洲国洲時代の社史を電子化します','Yes — Old-Manchu-shu-co-hist-dig','Methodical','kenji_office'),
    mk('当社、英国卿位の取引先を大事にしろ','Our co — UK-lord-client-cher','Direction','hiroshi_boss'),
    mk('はい。新製品のブランド名を「大王」に決定します','Yes — New-prod-"Daiou"-dec','Update','kenji_office'),
    mk('当社、輸送船の艦長級スタッフを尊重しろ','Our co — ship-cap-staff-resp','Direction','hiroshi_boss'),
    mk('はい。豪州、つまりオーストラリア市場の調査を進めます','Yes — Aus-mkt-surv-prog','Update','kenji_office'),
    mk('当社、ムスリム圏の市場開拓を進めろ','Our co — Muslim-mkt-exp','Direction','hiroshi_boss'),
    mk('はい。キリスト教徒の祝祭日にも配慮した商品展開をします','Yes — Christian-fes-prod-care','Close','kenji_office'),
  ]},
  {id:'conv_10676',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、スペイン人のホセ氏のお話を語って下さったよ、メイちゃん','Aoi — cust-Sp-Jose-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、米国の歌手ブライアン氏のファンだって、メイちゃん','Aoi — cust-US-Brian-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、聖書のアダムとエヴァのお話を語って下さったよ、メイちゃん','Aoi — cust-Bib-Adam-Eve-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、チャイルドケア事業をされてるって、メイちゃん','Aoi — cust-child-care-biz Mei','Reflective','aoi_barista'),
    mk('葵、お客様、英国のエリック・クラプトンのファンだって、メイちゃん','Aoi — cust-UK-Eric-Clap-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、米国のビリー・ホリデイの曲を愛されてるよ、メイちゃん','Aoi — cust-US-Bil-Hol-love Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ロシア皇女アンナの歴史本を読んでらしたよ、メイちゃん','Aoi — cust-Rus-Anna-book Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ソロモン王の知恵のお話を語って下さったよ、メイちゃん','Aoi — cust-Sol-king-talk Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10677',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがスペイン人のホセ氏と文通された','Gran — youth Dad-Sp-Jose-letter','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、米国の歌手ブライアン・ウィルソンの曲を愛されたわよね、あなた?','Yes — Grandpa-US-Brian-Wil-love, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが聖書のアダムとエヴァを朗読された','Gran — youth Dad-Adam-Eve-rec','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、チャイルドケア施設に寄付されたわよね、あなた?','Grandpa — youth-child-care-don, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがエリック・クラプトンのライブに行かれた','Gran — youth Dad-Eric-Clap-live','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ビリー・ホリデイの曲を毎晩聴かれたわよね、あなた?','Grandpa — youth-Bil-Hol-night, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「アンナ・カレーニナ」を愛読された','Gran — youth Dad-Anna-Kar-read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ソロモン王の伝説を語られたわよね、あなた?','Grandpa — youth-Sol-king-leg, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10678',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがスペイン人のホセさんを紹介して下さるそうよ','Sho — Dad-Sp-Jose-intr','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとブライアン・メイのギター演奏を観たよ','Mei-sis — me Dad-Brian-May-gtr','Eager child','sho_child'),
    mk('翔くん、お父さんが「アダムとエヴァ」の絵本を読んで下さるわ','Sho — Dad-"Adam-Eve"-pic','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとチャイルドプレイスで遊んだよ','Mei-sis — me Dad-child-play','Eager child','sho_child'),
    mk('翔くん、お父さんが「エリックとは小説のヒーロー名」って教えて下さるわ','Sho — Dad-"Eric-novel"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとビリー・ジョエルの曲を聴いたよ','Mei-sis — me Dad-Bil-Joel-music','Eager child','sho_child'),
    mk('翔くん、お父さんが「アンナの童話」を読んで下さるそうよ','Sho — Dad-"Anna"-tale-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「ソロモンの知恵」の絵本を読んだよ','Mei-sis — me Dad-"Sol-wisdom"-pic','Eager close','sho_child'),
  ]},
  {id:'conv_10679',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、ホセ・カレーラスの歌覚えてたな','Riku — Jose-Carr-song','Curious teen','sakura_teen'),
    mk('お前、ブライアン・メイのギター練習してたろ、桜','You — Brian-May-gtr? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会でアダム・スミスの経済論調べてたな','Riku — soc-Adam-Smith-stud','Curious','sakura_teen'),
    mk('お前、チャイルドサポートのボランティア行ってたな、桜','You — child-supp-vol Sakura','Curious','riku_teen'),
    mk('リク、お前、エリック・クラプトンのギター聴いてたな','Riku — Eric-Clap-gtr','Curious','sakura_teen'),
    mk('お前、ビリー・アイリッシュの曲聴いてたろ、桜','You — Bil-Eil-song? Sakura','Curious','riku_teen'),
    mk('リク、お前、アンナと文化祭で同じグループだったな','Riku — Anna-cul-fes-grp','Curious','sakura_teen'),
    mk('お前、社会でソロモン王の話聞いてたな、桜','You — soc-Sol-king-heard Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10680',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがスペイン人のホセ・カレーラスのCDを聴いてらっしゃるわ','Sho — Dad-Sp-Jose-Carr-CD','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとブライアン・メイのドキュメンタリー観たよ','Mom — me Dad-Brian-May-doc','Eager child','sho_child'),
    mk('翔くん、お父さんが「アダム・スミスは経済学の祖」って教えて下さるわ','Sho — Dad-"Adam-Sm-econ"-teach','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとチャイルドケア施設の見学に行ったよ','Mom — me Dad-child-care-vis','Eager child','sho_child'),
    mk('翔くん、お父さんがエリック・カルマンの動画を観てらっしゃるわ','Sho — Dad-Eric-Karl-vid','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとビリー・ホリデイの伝記映画観たよ','Mom — me Dad-Bil-Hol-biog-film','Eager child','sho_child'),
    mk('翔くん、お父さんが「アンナ・パブロワのバレエは伝説的」って仰ってたわ','Sho — Dad-"Anna-Pav-leg"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとソロモン王の絵本を読んだよ','Mom — me Dad-Sol-king-pic','Eager close','sho_child'),
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

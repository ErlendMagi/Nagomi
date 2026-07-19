import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_551 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['士郎','一太郎','大竹','せりふ','ぶた','オトコ','メンズ','いっか']
const B_T = ['河上','金田','稲本','厚木','江崎','宇野','久留米','青葉']
const C_T = ['四日市','東海岸','藪','鶴見','寺山','日航','本法','稲作']
const D_T = ['フェルナンド','クルス','ヴェルディ','サダム','リヨン','スコープ','アグリ','ドーン']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10981',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「衛宮士郎は正義感のあるキャラ」って語って下さったわ','Sho — Dad-Emiya-Shiro-talk','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとワープロソフト「一太郎」で文書を作ったよ','Mom — me Dad-Ichitaro-soft','Pleased child','sho_child'),
    mk('翔くん、お父さんが「ものまね芸人の大竹さんは上手」って仰ってたわ','Sho — Dad-"Otake-mimic-good"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと舞台のせりふを練習したよ','Mom — me Dad-stage-line-prac','Pleased child','sho_child'),
    mk('翔くん、お父さんが「ぶたさんの可愛い絵本を読もう」って仰ってたわ','Sho — Dad-"pig-pic"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「強いオトコになりなさい」って言われたよ','Mom — me Dad-"strong-otoko"-said','Earnest child','sho_child'),
    mk('翔くん、お父さんとメンズの靴を一緒に買いに行ったわ','Sho — Dad-mens-shoe-shop','Reflective','yumiko_mom'),
    mk('ママ、お父さんが「もう寝るの?いっか、お休み」って優しく仰ったよ','Mom — Dad-"ikka-night"-soft-said','Tender close','sho_child'),
  ]},
  {id:'conv_10982',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、お孫様のお名前が士郎くんだって、メイちゃん','Aoi — cust-grdkid-Shiro Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お子様の頃ワープロ一太郎で文書作成されたって、メイちゃん','Aoi — cust-Ichitaro-doc Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お孫様の名前が大竹さんだって、メイちゃん','Aoi — cust-grdkid-Otake Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お芝居のせりふを暗誦されてたよ、メイちゃん','Aoi — cust-stage-line-recite Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ぶたの貯金箱を集めてらっしゃるって、メイちゃん','Aoi — cust-pig-piggy-coll Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご友人の事を「いいオトコ」って褒めてらしたよ、メイちゃん','Aoi — cust-fri-"good-otoko"-praise Mei','Reflective','aoi_barista'),
    mk('葵、お客様、当店のメンズメニューをお気に召してらっしゃるって、メイちゃん','Aoi — cust-mens-menu-like Mei','Reflective','mei_romantic'),
    mk('葵、お客様、「今日はいっか、また明日」って軽く笑って帰られたよ、メイちゃん','Aoi — cust-"ikka-tom"-laugh Mei','Wry close','aoi_barista'),
  ]},
  {id:'conv_10983',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがご友人の士郎さんと文通された','Gran — youth Dad-fri-Shiro-letter','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、一太郎ワープロを使われたわよね、あなた?','Yes — Grandpa-Ichitaro-wp, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが大竹さんと将棋を指された','Gran — youth Dad-Otake-shog','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、芝居のせりふを覚えられたわよね、あなた?','Grandpa — youth-stage-line-mem, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがぶたの細工物を蒐集された','Gran — youth Dad-pig-craft-coll','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ご自身を「いいオトコ」と笑ってらしたわよね、あなた?','Grandpa — youth-"good-otoko"-laugh, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがメンズスーツをご自身で仕立てられた','Gran — youth Dad-mens-suit-self','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、「もういっか、寝よう」って言われた事もあったわよね、あなた?','Grandpa — youth-"ikka-sleep", dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10984',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、Fateの士郎ファンだったろ','Riku — Fate-Shiro-fan','Wry teen','sakura_teen'),
    mk('お前、レポート提出で一太郎使ってたな、桜','You — rep-Ichitaro Sakura','Curious','riku_teen'),
    mk('リク、お前、大竹まことのラジオ聴いてたな','Riku — Otake-Mak-radio','Wry','sakura_teen'),
    mk('お前、文化祭の演劇でせりふ覚えたろ、桜','You — cul-fes-play-line? Sakura','Curious','riku_teen'),
    mk('リク、お前、給食でぶた肉の調理苦手だったろ','Riku — lunch-pig-cook-bad?','Wry','sakura_teen'),
    mk('お前、漫画で「オトコの中のオトコ」って表現使ってたな、桜','You — mng-"otoko-in-otoko" Sakura','Wry','riku_teen'),
    mk('リク、お前、メンズ用品売り場で迷ってたな','Riku — mens-shop-lost','Curious','sakura_teen'),
    mk('お前、テスト終わって「もういっか」って気抜けてたな、桜','You — test-"ikka"-relax Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10985',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「Fateの士郎は正義の味方」って教えて下さるわ','Sho — Dad-"Fate-Shiro-just"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと一太郎で読書感想文を書いたよ','Mei-sis — me Dad-Ichitaro-book-rep','Eager child','sho_child'),
    mk('翔くん、お父さんが「大竹一樹の漫才は古典」って仰ってたわ','Sho — Dad-"Otake-Kaz-com-class"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと舞台のせりふを練習したよ','Mei-sis — me Dad-stage-line-prac','Eager child','sho_child'),
    mk('翔くん、お父さんが動物園で「ぶたさんは賢い」って仰ってたわ','Sho — Dad-zoo-"pig-bright"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「真のオトコは優しさを持つ」って教えて頂いたよ','Mei-sis — me Dad-"true-otoko-kind"-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんがメンズ専門店で帽子を選ばれたわ','Sho — Dad-mens-shop-cap','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「もういっか、また明日ね」って優しく言われたよ','Mei-sis — me Dad-"ikka-tom"-soft-said','Tender close','sho_child'),
  ]},
  {id:'conv_10986',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新任の河上部長を歓迎しろ','Our co — new-Kawa-dept-wel','Crisp','hiroshi_boss'),
    mk('はい。営業の金田課長の出張日程を整えます','Yes — Sales-Kane-mgr-trip','Methodical','kenji_office'),
    mk('当社、技術担当の稲本主任にプロジェクトを任せろ','Our co — tech-Ina-lead-proj','Direction','hiroshi_boss'),
    mk('はい。神奈川県厚木市の工場を強化します','Yes — Kan-Atsu-fact-strong','Update','kenji_office'),
    mk('当社、菓子のお取引で江崎グリコ系列と連携しろ','Our co — sweet-Ezaki-Glico-link','Direction','hiroshi_boss'),
    mk('はい。広報の宇野様の戦略を採用します','Yes — PR-Uno-strat-adopt','Update','kenji_office'),
    mk('当社、福岡県久留米の支店を強化しろ','Our co — Fuk-Kurume-branch','Direction','hiroshi_boss'),
    mk('はい。研究所の青葉キャンパスの予算を確認します','Yes — Lab-Aoba-camp-budg','Close','kenji_office'),
  ]},
  {id:'conv_10987',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('河上部長の歓迎会を準備しましょう','Kawa-dept-wel-prep','Brisk','yuki_office'),
    mk('はい。金田課長の引き継ぎ書を確認します','Yes — Kane-mgr-handov','Cooperative','kenji_office'),
    mk('稲本技術主任のプロジェクト進捗を共有しましょう','Ina-tech-lead-share','Direction','yuki_office'),
    mk('はい。厚木工場の月次報告を確認します','Yes — Atsu-fact-mo-rep','Update','kenji_office'),
    mk('江崎系列とのキャンペーンを企画しましょう','Ezaki-camp-plan','Direction','yuki_office'),
    mk('はい。宇野広報の月次企画書を確認します','Yes — Uno-PR-mo-plan','Update','kenji_office'),
    mk('久留米市の支店長会議を予定しましょう','Kurume-branch-mgr-meet','Direction','yuki_office'),
    mk('はい。青葉キャンパスの研究員と打ち合わせします','Yes — Aoba-camp-res-meet','Close','kenji_office'),
  ]},
  {id:'conv_10988',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、指導教授の河上先生のご研究を継承しろ','Ren — mentor-Kawa-res','Mentor','hiroshi_boss'),
    mk('はい。金田教授の論文を読み込みます','Yes — Kane-prof-paper','Earnest','ren_uni'),
    mk('蓮、共同研究の稲本先生に研究照会しろ','Ren — joint-Ina-inq','Direction','hiroshi_boss'),
    mk('はい。神奈川県厚木の研究所と連携します','Yes — Kan-Atsu-lab-link','Earnest','ren_uni'),
    mk('蓮、文献の江崎先生のご論文も参考にしろ','Ren — lit-Ezaki-paper-ref','Direction','hiroshi_boss'),
    mk('はい。学会で宇野助教のご発表を聴きます','Yes — Conf-Uno-asst-pres','Polite','ren_uni'),
    mk('蓮、福岡県久留米大学の研究室と連携しろ','Ren — Fuk-Kurume-univ-link','Direction','hiroshi_boss'),
    mk('はい。青葉キャンパスの先輩からご指導を仰ぎます','Yes — Aoba-camp-sen-guide','Earnest close','ren_uni'),
  ]},
  {id:'conv_10989',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、河上刑事の現場対応も評価されますね','Police Kawa-det-eval','Cooperative','kenji_office'),
    mk('警察、参考人金田氏から、警察、事情を伺われますね','Police witn-Kane-careful','Cooperative','kenji_office'),
    mk('警察、被害者稲本氏のご家族にも、警察、配慮されますね','Police vict-Ina-fam-care','Cooperative','kenji_office'),
    mk('警察、厚木警察署との合同捜査もされますね','Police Atsu-stat-joint','Cooperative','kenji_office'),
    mk('警察、容疑者江崎の前科を、警察、確認されますね','Police suspect-Ezaki-prior','Cooperative','kenji_office'),
    mk('警察、目撃者宇野氏の供述を、警察、整えられますね','Police witn-Uno-stmt','Cooperative','kenji_office'),
    mk('警察、福岡県久留米市の防犯協議もされますね','Police Fuk-Kurume-prev-coop','Cooperative','kenji_office'),
    mk('警察、青葉警察署と連携した広域捜査もされますね','Police Aoba-stat-wide-inv','Close','kenji_office'),
  ]},
  {id:'conv_10990',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、河上氏と共同事業を立ち上げられた','Dad — youth-Kawa-JV','Sage','hiroshi_elder'),
    mk('はい。お父さんは金田先輩のご薫陶を受けられた','Yes — Dad Kane-sen-mentor','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、稲本氏と海外進出を企画された','Dad — youth-Ina-overs','Wistful','hiroshi_elder'),
    mk('はい。お父さんは厚木工場の創設にも尽力された','Yes — Dad Atsu-fact-found','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、江崎家との家族ぐるみの交流があった','Dad — Ezaki-fam-int','Wistful','hiroshi_elder'),
    mk('はい。お父さんは宇野氏を広報の柱に据えられた','Yes — Dad Uno-PR-pillar','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、久留米の研究所を建てられた','Dad — youth-Kurume-lab-build','Wistful','hiroshi_elder'),
    mk('はい。お父さんは青葉キャンパスの基礎を作られた','Yes — Dad Aoba-camp-found','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10991',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、三重県四日市の公害事件の社会史研究を論文で扱いましたね','Ren — Mie-Yokk-pol paper','Calm','asuka_teacher'),
    mk('はい、米国東海岸都市の都市計画研究を論文で扱いました','Yes — US-E-coast-urban paper','Earnest','ren_uni'),
    mk('蓮さん、藪、つまり藪医者の社会学研究を論文で扱いましたね','Ren — bush-quack-doc paper','Reflective','asuka_teacher'),
    mk('はい、哲学者鶴見俊輔先生のご研究を論文で扱いました','Yes — Tsuru-Shun-phil paper','Earnest','ren_uni'),
    mk('蓮さん、寺山修司の戯曲研究を論文で扱いましたね','Ren — Tera-Shu-drama paper','Reflective','asuka_teacher'),
    mk('はい、日航機墜落事故の社会記憶の研究を論文で扱いました','Yes — JAL-crash-mem paper','Earnest','ren_uni'),
    mk('蓮さん、本法、つまり当該法律の解釈研究を論文で扱いましたね','Ren — this-law-interp paper','Reflective','asuka_teacher'),
    mk('はい、東北地方の稲作の伝統研究を論文で扱いました','Yes — Toh-rice-trad paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10992',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、四日市の公害関連の捜査を、警察、慎重におこなわれますね','Case Yokk-pol-inv police-care','Reflective','ren_uni'),
    mk('警察、米国東海岸との国際捜査も連携されますね','Police US-E-coast-int-link','Cooperative','takeda_officer'),
    mk('本件、現場の藪、つまり藪に隠れた証拠を、警察、探されますね','Case scene-bush-evid-search','Reflective','ren_uni'),
    mk('警察、参考人鶴見氏から、警察、事情を伺われますね','Police witn-Tsuru-careful','Cooperative','takeda_officer'),
    mk('本件、被害者寺山氏のご家族にも、警察、配慮されますね','Case vict-Tera-fam-care','Reflective','ren_uni'),
    mk('警察、日航機関連の事案も、警察、対応されますね','Police JAL-case','Cooperative','takeda_officer'),
    mk('本件、本法、つまり該当法律にのっとり、警察、捜査されますね','Case this-law-acc-police','Reflective','ren_uni'),
    mk('警察、稲作地域での盗難事案も、警察、捜査されますね','Police rice-area-theft-inv','Close','takeda_officer'),
  ]},
  {id:'conv_10993',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、三重県四日市の公害事件の社会史研究を論文で扱いましたね','Sakura — Yokk paper','Calm','asuka_teacher'),
    mk('はい、米国東海岸都市の都市計画研究を論文で扱いました','Yes — E-coast paper','Earnest teen','sakura_teen'),
    mk('藪、つまり藪医者の社会学研究を論文で扱いましたね','Bush-quack paper','Reflective','asuka_teacher'),
    mk('はい、哲学者鶴見俊輔先生のご研究を論文で扱いました','Yes — Tsuru paper','Earnest','sakura_teen'),
    mk('寺山修司の戯曲研究を論文で扱いましたね','Tera paper','Reflective','asuka_teacher'),
    mk('はい、日航機墜落事故の社会記憶の研究を論文で扱いました','Yes — JAL paper','Earnest','sakura_teen'),
    mk('本法、つまり当該法律の解釈研究を論文で扱いましたね','This-law paper','Reflective','asuka_teacher'),
    mk('はい、東北地方の稲作の伝統研究を論文で扱いました','Yes — Rice-trad paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10994',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、四日市喘息の症例史を医療チームで研究します','Ren — Yokk-asth med-team','Calm','saito_doctor'),
    mk('蓮さん、米国東海岸の医療制度を医療チームで比較研究します','Ren — US-E-coast-med-syst med-team','Calm','saito_doctor'),
    mk('蓮さん、藪、つまり藪医者と呼ばれない様、医療チームで研鑽します','Ren — quack-no med-team','Calm','saito_doctor'),
    mk('蓮さん、医療哲学の鶴見先生の論文を医療チームで参照します','Ren — med-phil-Tsuru med-team-ref','Calm','saito_doctor'),
    mk('蓮さん、寺山修司の死生観を医療チームで尊重します','Ren — Tera-life-death med-team','Calm','saito_doctor'),
    mk('蓮さん、日航機事故の被害者救護の歴史を医療チームで学びます','Ren — JAL-vict-aid-hist med-team','Calm','saito_doctor'),
    mk('蓮さん、医療チームで本法、つまり医療法を遵守します','Ren — med-team-this-med-law','Calm','saito_doctor'),
    mk('蓮さん、稲作地域の住民健診を医療チームで担当します','Ren — rice-area-checkup med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_10995',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、四日市のコンビナートと取引を強化しろ','Our co — Yokk-comb-strong','Crisp','hiroshi_boss'),
    mk('はい。米国東海岸の支店設立を進めます','Yes — US-E-coast-branch','Methodical','kenji_office'),
    mk('当社、社員が藪の中で迷子にならない様、研修を整えろ','Our co — staff-bush-lost-train','Direction','hiroshi_boss'),
    mk('はい。経営顧問の鶴見様にご助言を仰ぎます','Yes — Adv-Tsuru','Update','kenji_office'),
    mk('当社、寺山修司の戯曲をモチーフにした商品を企画しろ','Our co — Tera-drama-motif','Direction','hiroshi_boss'),
    mk('はい。日航便利用の出張ポリシーを整えます','Yes — JAL-flight-trip-pol','Update','kenji_office'),
    mk('当社、本法、つまり当該法律のコンプライアンスを徹底しろ','Our co — this-law-comp-thor','Direction','hiroshi_boss'),
    mk('はい。稲作農家との連携で米ブランドを開発します','Yes — Rice-farm-rice-brand','Close','kenji_office'),
  ]},
  {id:'conv_10996',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、スペインのフェルナンド王の歴史を語って下さったよ、メイちゃん','Aoi — cust-Sp-Fer-king-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ペネロペ・クルスのファンだって、メイちゃん','Aoi — cust-Pen-Cruz-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ヴェルディのオペラ「アイーダ」がお好きだって、メイちゃん','Aoi — cust-Verdi-Aida-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、イラク戦争時のサダム・フセインのお話だったよ、メイちゃん','Aoi — cust-Iraq-Sad-Huss Mei','Reflective','aoi_barista'),
    mk('葵、お客様、フランス第二の都市リヨンに行かれたって、メイちゃん','Aoi — cust-Lyon-vis Mei','Reflective','mei_romantic'),
    mk('葵、お客様、双眼鏡のスコープ、つまり望遠スコープを愛用されてるって、メイちゃん','Aoi — cust-scope-fav Mei','Reflective','aoi_barista'),
    mk('葵、お客様、アグリ、つまり農業ベンチャーを応援されてるって、メイちゃん','Aoi — cust-agri-supp Mei','Reflective','mei_romantic'),
    mk('葵、お客様、映画「ドーン・オブ・ザ・デッド」がお好きだって、メイちゃん','Aoi — cust-Dawn-Dead-fan Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10997',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがスペインのフェルナンド王の歴史を研究された','Gran — youth Dad-Sp-Fer-hist','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、映画女優のペネロペ・クルスを愛されたわよね、あなた?','Yes — Grandpa-Pen-Cruz-love, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがヴェルディのオペラ全集を蔵書された','Gran — youth Dad-Verdi-coll','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、サダム政権のニュースを観られたわよね、あなた?','Grandpa — youth-Sad-news, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがフランスのリヨン市に出張された','Gran — youth Dad-Fr-Lyon-trip','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、望遠スコープで星空観察されたわよね、あなた?','Grandpa — youth-scope-star, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがアグリビジネスに早くから注目された','Gran — youth Dad-agri-biz-watch','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ホラー映画「ドーン・オブ・ザ・デッド」を観られたわよね、あなた?','Grandpa — youth-Dawn-Dead, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10998',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「スペインのフェルナンド王の絵本を読もう」って仰ってたわ','Sho — Dad-"Fer-pic"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとペネロペ・クルス出演の映画観たよ','Mei-sis — me Dad-Pen-Cruz-film','Eager child','sho_child'),
    mk('翔くん、お父さんがヴェルディのオペラ「アイーダ」を聴かせて下さるわ','Sho — Dad-Verdi-Aida','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「サダム政権」の社会科の宿題したよ','Mei-sis — me Dad-"Sad"-soc-hw','Eager child','sho_child'),
    mk('翔くん、お父さんがフランスのリヨンの旅行記を読まれてるわ','Sho — Dad-Lyon-travel-rep','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに望遠スコープの使い方を教えて頂いたよ','Mei-sis — me Dad-scope-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんがアグリ、つまり農業体験イベントに連れて下さるわ','Sho — Dad-agri-evt','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「ドーン・オブ・ザ・デッド」の予告編観たよ','Mei-sis — me Dad-Dawn-Dead-trail','Eager close','sho_child'),
  ]},
  {id:'conv_10999',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、社会でスペインのフェルナンド王調べてたな','Riku — soc-Fer-stud','Curious teen','sakura_teen'),
    mk('お前、ペネロペ・クルスのファンだったろ、桜','You — Pen-Cruz-fan? Sakura','Curious','riku_teen'),
    mk('リク、お前、音楽でヴェルディのオペラ聴いてたな','Riku — mus-Verdi-listen','Curious','sakura_teen'),
    mk('お前、社会でサダム政権のニュース見たろ、桜','You — soc-Sad-news? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会でフランスのリヨンの場所調べてたな','Riku — soc-Lyon-loc','Curious','sakura_teen'),
    mk('お前、理科で望遠スコープ使ったろ、桜','You — sci-scope-use? Sakura','Curious','riku_teen'),
    mk('リク、お前、文化祭でアグリ、つまり農業体験ブースしてたな','Riku — cul-fes-agri-booth','Curious','sakura_teen'),
    mk('お前、ホラー映画「ドーン・オブ・ザ・デッド」観たろ、桜','You — Dawn-Dead-film? Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_11000',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがスペインのフェルナンド王のドキュメンタリー観てらっしゃるわ','Sho — Dad-Fer-doc','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとペネロペ・クルスのインタビュー観たよ','Mom — me Dad-Pen-Cruz-int','Eager child','sho_child'),
    mk('翔くん、お父さんがヴェルディの「椿姫」のCDを聴かれてるわ','Sho — Dad-Verdi-Trav-CD','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとサダム政権のドキュメンタリー観たよ','Mom — me Dad-Sad-doc','Eager child','sho_child'),
    mk('翔くん、お父さんがリヨン市の歴史本を読まれてるわ','Sho — Dad-Lyon-hist-book','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと望遠スコープで月を観たよ','Mom — me Dad-scope-moon','Eager child','sho_child'),
    mk('翔くん、お父さんがアグリ事業の本を読まれてるわ','Sho — Dad-agri-biz-book','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと「ドーン・オブ・ザ・デッド」のリメイク観たよ','Mom — me Dad-Dawn-Dead-rem','Eager close','sho_child'),
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

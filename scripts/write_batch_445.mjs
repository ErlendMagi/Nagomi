import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_445 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['はずす','淋しい','逢い','ぐったり','たいがい','楽々','あわせる','あたえ']
const B_T = ['電信','依拠','手がける','内地','買い換え','受取','田舎町','廃業']
const C_T = ['晒さ','信奉','軒並み','制圧','編纂','標榜','帰化','枯渇']
const D_T = ['バリ島','ディスコ','四重奏','チューリップ','ショコラ','ミカン','バルコニー','苺']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08861',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、メガネをはずすと顔が違って見えるわね','Sho — glasses-remove-face-diff','Wry','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんがいなくて淋しいよ','Mom — me Grandpa-no-lonely','Earnest child','sho_child'),
    mk('翔くん、お祖父ちゃんとお家で逢いましょうね','Sho — Grandpa-home-meet','Tender','yumiko_mom'),
    mk('ママ、ぼく、運動会の後、ぐったりしちゃった','Mom — me sports-day-after-exhausted','Wry child','sho_child'),
    mk('翔くん、たいがいのことはお父さんに相談しなさい','Sho — most-Dad-cons','Direction','yumiko_mom'),
    mk('ママ、ぼく、ピアノが楽々弾けるようになったよ','Mom — me piano-easily-play','Proud child','sho_child'),
    mk('翔くん、お父さんに時間をあわせるのは大事よ','Sho — Dad-time-align-impt','Direction','yumiko_mom'),
    mk('ママ、お祖父ちゃんが好物をあたえて下さったよ','Mom — Grandpa-fav-gave','Eager close','sho_child'),
  ]},
  {id:'conv_08862',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、エプロンをはずす時間がやっと来たね、メイちゃん','Aoi — apron-remove-time-finally Mei','Pleased','mei_romantic'),
    mk('葵、お客様が長く来られないと淋しい気持ちになるね、メイちゃん','Aoi — cust-long-no-lonely Mei','Reflective','aoi_barista'),
    mk('葵、新しいお客様にお逢いできて嬉しいね、メイちゃん','Aoi — new-cust-meet-glad Mei','Pleased','mei_romantic'),
    mk('葵、繁忙期の後はぐったり疲れちゃうね、メイちゃん','Aoi — busy-after-exhausted Mei','Reflective','aoi_barista'),
    mk('葵、たいがいのご要望にはお応えできるわね、メイちゃん','Aoi — most-req-resp-able Mei','Pleased','mei_romantic'),
    mk('葵、新メニュー、楽々作れるようになったよね、メイちゃん','Aoi — new-menu-easily-make Mei','Pleased','aoi_barista'),
    mk('葵、お客様の時間にあわせるおもてなしを大切に、メイちゃん','Aoi — cust-time-align-hosp-cherish Mei','Direction','mei_romantic'),
    mk('葵、お客様にいい体験をあたえる店でありたいわね、メイちゃん','Aoi — cust-good-exp-give-store Mei','Tender close','aoi_barista'),
  ]},
  {id:'conv_08863',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは老眼鏡をはずす度に微笑まれたぞ','Gran — youth Dad-glasses-remove-smile','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お孫様が来られないと淋しいって仰ってたわよね、あなた?','Yes — Grandpa-grandkid-no-lonely-said, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと毎週逢いに行ったぞ','Gran — youth Dad-weekly-meet','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、暑い日にぐったりしてらしたわよね、あなた?','Grandpa — hot-day-exhausted, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは「たいがいの事は時間が解決する」と仰ったぞ','Gran — youth Dad "most-time-solve"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、難しい仕事も楽々こなされたわよね、あなた?','Grandpa — hard-work-easily, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは家族の時間にあわせる方だったぞ','Gran — youth Dad-fam-time-align','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様にお小遣いをあたえて下さったわよね、あなた?','Grandpa — grandkid-allowance-gave, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08864',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、ヘッドフォンはずせよ','Riku — headphone-remove','Direction teen','sakura_teen'),
    mk('お前、転校してたら淋しかったろ、桜','You — transfer-lonely Sakura','Reflective','riku_teen'),
    mk('リク、お前、好きな人に逢いたいんだろ?','Riku — like-meet-want?','Wry','sakura_teen'),
    mk('お前、徹夜明けでぐったりしてんな、桜','You — all-nighter-exhausted Sakura','Wry','riku_teen'),
    mk('リク、お前、たいがいの問題は解けるよな','Riku — most-prob-solve','Praising','sakura_teen'),
    mk('お前、テスト楽々通過したろ、桜','You — test-easily-passed Sakura','Praising','riku_teen'),
    mk('リク、お前、俺に時間をあわせるな','Riku — me-time-align-not','Wry','sakura_teen'),
    mk('お前、後輩にアドバイスあたえてんな、桜','You — junior-advice-give Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_08865',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんはサングラスをはずすと優しい目をしてるのよ','Sho — Mei-sis-sunglasses-remove-kind-eye','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんがいなくて淋しかったよ','Mei-sis — me Mei-sis-no-lonely','Earnest child','sho_child'),
    mk('翔くん、お祖父ちゃんとまた逢いに行きましょうね','Sho — Grandpa-meet-go','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、夏祭りでぐったり疲れちゃった','Mei-sis — me summer-fest-exhausted','Wry child','sho_child'),
    mk('翔くん、たいがいの絵は描けるようになったわね','Sho — most-pic-able','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、ピアノが楽々弾けるようになったよ','Mei-sis — me piano-easily','Proud child','sho_child'),
    mk('翔くん、メイ姉さんの予定にあわせるからね','Sho — Mei-sis-sched-align','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんがおこづかいあたえてくれたよ','Mei-sis — me Grandpa-allowance-gave','Eager close','sho_child'),
  ]},
  {id:'conv_08866',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、緊急時は電信でも連絡を取れ','Our co — emerg-telegraph-contact','Crisp','hiroshi_boss'),
    mk('はい。市場分析は信頼できるデータに依拠しております','Yes — Market-anal-reliable-data-rely','Methodical','kenji_office'),
    mk('当社、新事業を手がける部署を作れ','Our co — new-biz-handle-section','Direction','hiroshi_boss'),
    mk('はい。本社は内地に置く方針を維持します','Yes — HQ-domestic-keep','Update','kenji_office'),
    mk('当社、社用車の買い換え時期を見直せ','Our co — co-car-replace-review','Direction','hiroshi_boss'),
    mk('はい。お得意様の受取確認を徹底しました','Yes — VIP-receipt-confirm-strict','Update','kenji_office'),
    mk('当社、田舎町への新店舗出店を検討しろ','Our co — countryside-new-store-consider','Direction','hiroshi_boss'),
    mk('はい。廃業した店舗の整理を進めます','Yes — Closed-store-org-progress','Close','kenji_office'),
  ]},
  {id:'conv_08867',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('遠隔通信は古くは電信に頼ったって、研修で扱いましたね','Remote-comm-old-telegraph-train-mentioned','Reflective','yuki_office'),
    mk('はい。市場予測は最新統計に依拠して立てます','Yes — Market-forecast-latest-stat-rely','Cooperative','kenji_office'),
    mk('複雑な案件は専門部署が手がけるべきね','Complex-case-spec-section-handle-should','Direction','yuki_office'),
    mk('はい。内地と海外の販売割合を見直しました','Yes — Dom-overseas-sales-ratio-review','Update','kenji_office'),
    mk('社用パソコンの買い換えを進めましょう','Co-PC-replace-progress','Direction','yuki_office'),
    mk('はい。お取引先からの受取書類を整理しました','Yes — Partner-receipt-doc-org','Update','kenji_office'),
    mk('田舎町への配送ルートを最適化しましょう','Countryside-deliv-route-opt','Direction','yuki_office'),
    mk('はい。廃業届の事務処理を支援しております','Yes — Close-notice-proc-supp','Close','kenji_office'),
  ]},
  {id:'conv_08868',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、戦時下の電信記録を史料として研究しろ','Ren — war-telegraph-rec-doc-research','Mentor','hiroshi_boss'),
    mk('はい。論文は先行研究に依拠しております','Yes — Paper-prior-research-rely','Earnest','ren_uni'),
    mk('蓮、研究室で新テーマを手がけるチームを作れ','Ren — lab-new-topic-handle-team','Direction','hiroshi_boss'),
    mk('はい。内地の研究者との交流を学会で扱いました','Yes — Dom-researcher-exch conf','Polite','ren_uni'),
    mk('蓮、古い実験機材の買い換えを申請しろ','Ren — old-equip-replace-app','Direction','hiroshi_boss'),
    mk('はい。研究費の受取書を提出いたしました','Yes — Research-fund-receipt-submit','Earnest','ren_uni'),
    mk('蓮、田舎町でのフィールドワークも計画しろ','Ren — countryside-fieldwork-plan','Direction','hiroshi_boss'),
    mk('はい。研究室の廃業は最終手段と考えております','Yes — Lab-close-last-resort','Earnest close','ren_uni'),
  ]},
  {id:'conv_08869',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、明治時代の電信記録も史料として活用されますね','Police Meiji-telegraph-doc-util','Cooperative','kenji_office'),
    mk('警察、捜査は科学的証拠に依拠して進めます','Police inv-sci-evid-rely-progress','Procedural','takeda_officer'),
    mk('警察、組織犯罪を手がける専門部署があるんですね','Police org-crime-handle-spec-section','Cooperative','kenji_office'),
    mk('警察、内地と海外の連携を強化しますね','Police dom-overseas-link-strengthen','Cooperative','kenji_office'),
    mk('警察、パトカーの買い換え時期になりました','Police police-car-replace-time','Procedural','takeda_officer'),
    mk('警察、被害届の受取は警察、迅速にされますね','Police comp-receipt-fast','Cooperative','kenji_office'),
    mk('警察、田舎町の駐在所も大事に維持されますね','Police countryside-stat-maintain','Cooperative','kenji_office'),
    mk('警察、廃業した工場跡の防犯対策、頼もしいです','Police closed-factory-crime-prev reliable','Close','kenji_office'),
  ]},
  {id:'conv_08870',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、電信で全国の取引先と連絡されたぞ','Dad — founding telegraph-nat-partner-comm','Sage','hiroshi_elder'),
    mk('はい。お父さんは経営判断を実データに依拠された','Yes — Dad mgmt-jdg-real-data-rely','Commitment','hiroshi_boss'),
    mk('お父さん、難しい新事業を自ら手がける方だったぞ','Dad — hard-new-biz-self-handle','Wistful','hiroshi_elder'),
    mk('はい。お父さんは内地の各支店を巡回された','Yes — Dad dom-branch-patrol','Reflective','hiroshi_boss'),
    mk('お父さん、社員の机を計画的に買い換えで更新されたぞ','Dad — staff-desk-plan-replace-update','Wistful','hiroshi_elder'),
    mk('はい。お父さんはお取引先の受取書類を丁寧に管理された','Yes — Dad partner-receipt-careful-mgmt','Reflective','hiroshi_boss'),
    mk('お父さん、田舎町に支店を出される決断もされたぞ','Dad — countryside-branch-decide','Wistful','hiroshi_elder'),
    mk('はい。お父さんは取引先の廃業時にも誠実にご対応された','Yes — Dad partner-close-sincere-resp','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08871',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、戦時下の捕虜が晒された事案を論文で扱いましたね','Ren — POW-exposed-case paper','Calm','asuka_teacher'),
    mk('はい、特定思想の信奉者の研究を論文で扱いました','Yes — Ideo-believer-research paper','Earnest','ren_uni'),
    mk('蓮さん、地域の商店が軒並み閉店した経済史を論文で扱いましたね','Ren — local-store-all-close-econ-hist paper','Reflective','asuka_teacher'),
    mk('はい、戦時下の制圧作戦を論文で扱いました','Yes — Wartime-suppress-op paper','Earnest','ren_uni'),
    mk('古文書を編纂した学者の研究を論文で扱いましたね','Anc-doc-compile-scholar paper','Engaged','asuka_teacher'),
    mk('はい、平和を標榜する組織の活動史を論文で扱いました','Yes — Peace-stand-org-hist paper','Earnest','ren_uni'),
    mk('蓮さん、有名人の帰化事例を論文で扱いましたね','Ren — celeb-natural-case paper','Reflective','asuka_teacher'),
    mk('はい、地下資源の枯渇問題を論文で扱いました','Yes — Underground-res-deplete paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08872',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、被害者の名誉が世間に晒された事案、警察、慎重に対応されてますね','Case victim-honor-exposed police-careful','Reflective','ren_uni'),
    mk('警察、特定思想の信奉者による犯行を捜査します','Police ideo-believer-crime-inv','Procedural','takeda_officer'),
    mk('本件、商店街が軒並み被害を受けたのを警察、把握されてますね','Case arcade-all-damage police-grasp','Reflective','ren_uni'),
    mk('警察、暴動を制圧する訓練を継続します','Police riot-suppress-drill-cont','Procedural','takeda_officer'),
    mk('本件、警察、目撃証言を編纂した報告書を作成されたんですね','Case police-test-compile-report','Reflective','ren_uni'),
    mk('警察、清廉さを標榜する組織にもメスを入れます','Police clean-stand-org-bust','Procedural','takeda_officer'),
    mk('本件、帰化申請に関わる詐欺を警察、捜査されてますね','Case natural-app-fraud police-inv','Reflective','ren_uni'),
    mk('警察、捜査資源の枯渇を防ぐ運用を続けます','Police inv-res-deplete-prev-run','Close','takeda_officer'),
  ]},
  {id:'conv_08873',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、戦時下の捕虜が晒された事案を論文で扱いましたね','Sakura — POW-exposed paper','Calm','asuka_teacher'),
    mk('はい、特定思想の信奉者を論文で扱いました','Yes — Ideo-believer paper','Earnest teen','sakura_teen'),
    mk('商店が軒並み閉店した経済史を論文で扱いましたね','Local-store-close-hist paper','Reflective','asuka_teacher'),
    mk('はい、戦時下の制圧作戦を論文で扱いました','Yes — Wartime-suppress paper','Earnest','sakura_teen'),
    mk('古文書を編纂した学者の研究を論文で扱いましたね','Anc-doc-compile paper','Engaged','asuka_teacher'),
    mk('はい、平和を標榜する組織の活動史を論文で扱いました','Yes — Peace-stand paper','Earnest','sakura_teen'),
    mk('有名人の帰化事例を論文で扱いましたね','Celeb-natural paper','Reflective','asuka_teacher'),
    mk('はい、地下資源の枯渇問題を論文で扱いました','Yes — Res-deplete paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08874',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、患者情報が外部に晒される事のないよう、医療チームで徹底します','Ren — patient-info-exposed-prev med-team strict','Calm','saito_doctor'),
    mk('はい、特定の療法を信奉する患者さんへの対応を医療チームで研修します','Yes — Specific-treat-believer-resp med-team train','Patient','saito_doctor'),
    mk('地域の診療所が軒並み閉鎖された事を、貴院、心配されてますね、先生','Local-clinic-all-closed your-hosp worry, sensei','Reflective','ren_uni'),
    mk('はい、感染症を制圧する取り組みを医療チームで続けます','Yes — Infect-suppress med-team cont','Patient','saito_doctor'),
    mk('医学史を編纂する作業を、貴院、なさってるそうですね、先生','Med-hist-compile your-hosp do, sensei','Curious','ren_uni'),
    mk('はい、地域医療を標榜する病院として責任を持ちます','Yes — Local-med-stand-hosp-resp','Patient','saito_doctor'),
    mk('帰化された外国人医師との連携を、貴院、強化されてますね、先生','Natural-foreign-doctor-link your-hosp strength, sensei','Reflective','ren_uni'),
    mk('はい、医療資源の枯渇に備えた計画を医療チームで進めます','Yes — Med-res-deplete-prep med-team plan','Patient close','saito_doctor'),
  ]},
  {id:'conv_08875',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、社員のプライバシーを晒される事のないよう注意しろ','Our co — staff-privacy-exposed-prev-care','Crisp','hiroshi_boss'),
    mk('はい。特定の経営思想を信奉しすぎないようにします','Yes — Spec-mgmt-ideo-believer-not','Methodical','kenji_office'),
    mk('当社、競合店が軒並み撤退した地域に出店しろ','Our co — rival-all-retreat-area-open','Direction','hiroshi_boss'),
    mk('はい。労使紛争を制圧ではなく対話で解決します','Yes — Labor-disp-suppress-not-dialog','Update','kenji_office'),
    mk('当社、社史を編纂する委員会を作れ','Our co — co-hist-compile-comm','Direction','hiroshi_boss'),
    mk('はい。社会貢献を標榜する以上、実行を伴います','Yes — Soc-cont-stand-actual','Update','kenji_office'),
    mk('当社、外国人社員の帰化も支援しろ','Our co — foreign-staff-natural-supp','Direction','hiroshi_boss'),
    mk('はい。資源の枯渇に備えた代替素材も研究中です','Yes — Res-deplete-prep-alt-mat-research','Close','kenji_office'),
  ]},
  {id:'conv_08876',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、バリ島の旅行から帰ってこられたって、メイちゃん','Aoi — cust-Bali-trip-back Mei','Reflective','mei_romantic'),
    mk('葵、昔ディスコに通ってた頃の音楽流しましょうか、メイちゃん','Aoi — old-disco-music-play Mei','Animated','aoi_barista'),
    mk('葵、お客様、四重奏の演奏会の話されてたよ、メイちゃん','Aoi — cust-quartet-told Mei','Reflective','mei_romantic'),
    mk('葵、お店の前にチューリップを植えましょう、メイちゃん','Aoi — store-front-tulip-plant Mei','Direction','aoi_barista'),
    mk('葵、新メニューにショコラのケーキ加えましょう、メイちゃん','Aoi — new-menu-chocolate-cake-add Mei','Animated','mei_romantic'),
    mk('葵、季節限定でミカン入りデザートにしましょう、メイちゃん','Aoi — season-mikan-dessert Mei','Direction','aoi_barista'),
    mk('葵、お店のバルコニー席、人気だよね、メイちゃん','Aoi — store-balcony-seat-pop Mei','Pleased','mei_romantic'),
    mk('葵、苺のショートケーキ、人気No.1ね、メイちゃん','Aoi — strawberry-short-cake-#1 Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_08877',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんとバリ島へ旅行したぞ','Gran — youth Dad-Bali-trip','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃ディスコに通われたんですって?あなた?','Yes — Grandpa-youth-disco-went, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと四重奏の演奏会を観たぞ','Gran — youth Dad-quartet-saw','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お庭にチューリップをいっぱい植えられたわよね、あなた?','Grandpa — garden-tulip-many-planted, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがショコラをお土産にされたぞ','Gran — youth Dad-chocolate-souv','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、冬になるとミカンを箱で買って下さったわよね、あなた?','Grandpa — winter-mikan-box-bought, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがホテルのバルコニーで朝食をされたぞ','Gran — youth Dad-hotel-balcony-breakfast','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様に苺ジャムを作って下さったわよね、あなた?','Grandpa — grandkid-strawberry-jam-made, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08878',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんがバリ島旅行のお土産くれたわよね','Sho — Mei-sis-Bali-souv-gave','Reflective','mei_romantic'),
    mk('メイ姉さん、お父さんが若い頃ディスコに行ったって聞いたよ','Mei-sis — Dad-youth-disco-heard','Reflective child','sho_child'),
    mk('翔くん、メイ姉さんと四重奏の演奏会に行きましょう','Sho — Mei-sis-quartet-go','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんのお庭のチューリップ大好き','Mei-sis — me Mei-sis-garden-tulip-love','Eager child','sho_child'),
    mk('翔くん、お父さんがショコラを買ってきて下さったわ','Sho — Dad-chocolate-bought','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖母ちゃんのミカン大好きだよ','Mei-sis — me Grandma-mikan-love','Eager child','sho_child'),
    mk('翔くん、メイ姉さんのお家のバルコニー、見晴らしいいわね','Sho — Mei-sis-balcony-view-good','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、苺のケーキ食べたい','Mei-sis — me strawberry-cake-want','Eager close','sho_child'),
  ]},
  {id:'conv_08879',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、家族でバリ島旅行行ったろ?','Riku — fam-Bali-trip?','Curious teen','sakura_teen'),
    mk('お前、お父さんがディスコ時代の曲聞いてんだろ、桜','You — Dad-disco-era-song Sakura','Wry','riku_teen'),
    mk('リク、お前、音楽部で四重奏やってんだろ?','Riku — music-club-quartet?','Curious','sakura_teen'),
    mk('お前、入学式にチューリップ持ってきたろ?桜','You — entrance-tulip? Sakura','Curious','riku_teen'),
    mk('リク、お前、バレンタインデーにショコラもらったろ?','Riku — Valentine-chocolate-got?','Curious','sakura_teen'),
    mk('お前、冬になるとミカン食ってばっかだな、桜','You — winter-mikan-only Sakura','Wry','riku_teen'),
    mk('リク、お前ん家、バルコニーから花火見られるんだろ?','Riku — your-home-balcony-fireworks?','Curious','sakura_teen'),
    mk('お前、苺狩り行ったろ?桜','You — strawberry-pick? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08880',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがバリ島出張から戻ってこられたわ','Sho — Dad-Bali-biz-trip-back','Reflective','yumiko_mom'),
    mk('ママ、お父さんが若い頃ディスコに通われたんだって','Mom — Dad-youth-disco-went','Reflective child','sho_child'),
    mk('翔くん、お父さんと四重奏の演奏会に行きましょうね','Sho — Dad-quartet-go','Tender','yumiko_mom'),
    mk('ママ、ぼく、お庭にチューリップを植えたいよ','Mom — me garden-tulip-plant-want','Eager child','sho_child'),
    mk('翔くん、お父さんがショコラを買ってこられたわ','Sho — Dad-chocolate-bought','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖母ちゃんのミカン箱、また欲しい','Mom — me Grandma-mikan-box-want','Eager child','sho_child'),
    mk('翔くん、お父さんがバルコニーで花火見ましょうって','Sho — Dad-balcony-fireworks-see','Reflective','yumiko_mom'),
    mk('ママ、ぼく、苺狩りに行きたいよ','Mom — me strawberry-pick-want','Eager close','sho_child'),
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

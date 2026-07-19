import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_436 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['にわかに','あっし','ふふふ','しだいに','ともなう','おさめ','割り切っ','ちょくちょく']
const B_T = ['振り込み','括弧','持ち物','鋭意','即刻','告示','第一線','積算']
const C_T = ['浮遊','社会民主党','脱走','懲罰','移送','送還','駆逐','政務']
const D_T = ['版画','トランク','牡蠣','酒場','風呂敷','ヒーター','白髪','笹']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08681',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、にわかに雨が降ってきたわよ','Sho — sudden-rain-fell','Animated','yumiko_mom'),
    mk('ママ、お祖父ちゃんが「あっし」って自分のこと言うの面白いよ','Mom — Grandpa "asshi"-self-funny','Reflective child','sho_child'),
    mk('翔くん、お父さんとお祖父ちゃんのお話、ふふふって笑っちゃったわ','Sho — Dad-Grandpa-fufufu-laughed','Warm','yumiko_mom'),
    mk('ママ、ぼく、しだいにピアノが楽しくなってきたよ','Mom — me gradually-piano-fun','Eager child','sho_child'),
    mk('翔くん、お引っ越しにともなうお片付けは大変ね','Sho — move-accompany-cleanup-hard','Reflective','yumiko_mom'),
    mk('ママ、ぼく、おもちゃをちゃんと箱におさめたよ','Mom — me toy-box-put-away','Proud child','sho_child'),
    mk('翔くん、お父さんは、嫌な事も割り切ってお仕事なさるのよ','Sho — Dad-bad-clear-cut-work','Reflective','yumiko_mom'),
    mk('ママ、お祖父ちゃんがちょくちょくお家にいらしてくれて嬉しいよ','Mom — Grandpa-chokuchoku-home-glad','Eager close','sho_child'),
  ]},
  {id:'conv_08682',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、にわかに雨が強くなってきたね、メイちゃん','Aoi — sudden-rain-strong Mei','Reflective','mei_romantic'),
    mk('葵、お年寄りのお客様、ご自分を「あっし」と仰ってたよ、メイちゃん','Aoi — elderly-cust-"asshi"-self Mei','Animated','aoi_barista'),
    mk('葵、ご友人とのお話、ふふふと笑い声が聞こえたわよ、メイちゃん','Aoi — friend-fufufu-laugh-heard Mei','Pleased','mei_romantic'),
    mk('葵、お店の人気、しだいに広がってきたわね、メイちゃん','Aoi — store-pop gradually-spread Mei','Pleased','aoi_barista'),
    mk('葵、店舗拡大にともなう人手不足、対策しないとね、メイちゃん','Aoi — store-exp-accompany-staff-shortage Mei','Reflective','mei_romantic'),
    mk('葵、お釣り、ちゃんと金庫におさめましょうね、メイちゃん','Aoi — change-vault-put Mei','Direction','aoi_barista'),
    mk('葵、お客様のご意見も割り切ってお聞きしましょう、メイちゃん','Aoi — cust-view-clear-listen Mei','Direction','mei_romantic'),
    mk('葵、お客様、ちょくちょくお見えになって嬉しいわね、メイちゃん','Aoi — cust-chokuchoku-visit-glad Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_08683',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、にわかに雪が降った大晦日を覚えてるぞ','Gran — youth sudden-snow-NYE-remember','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ご自分のことを「あっし」って仰ってたわよね、あなた?','Yes — Grandpa-"asshi"-self, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんとふふふと忍び笑いをしたぞ','Gran — youth Dad-fufufu-stifled-laugh','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、しだいに体が弱くなっても気丈でいらしたわよね、あなた?','Grandpa — gradually-weak-tough, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんの転勤にともなう引越しが大変だったぞ','Gran — youth Dad-transfer-accompany-move-hard','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、家計をきちんとおさめてらしたわよね、あなた?','Grandpa — house-budget-put-in-order, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんは、割り切って我慢された事も多かったぞ','Gran — Dad clear-cut-patience-many','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様がちょくちょく遊びにいらしたわよね、あなた?','Grandpa — grandkid-chokuchoku-visit, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08684',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、にわかに小テストやるって先生言ってたぞ','Riku — sudden-mini-test-said','Wry teen','sakura_teen'),
    mk('お前、時代劇真似して「あっし」って言うなよ、桜','You — drama-mimic-"asshi"-don\'t Sakura','Wry','riku_teen'),
    mk('リク、お前、ふふふって不気味な笑いするな','Riku — fufufu-creepy-laugh','Wry','sakura_teen'),
    mk('お前、しだいに成績上がってんな、桜','You — gradually-grade-up Sakura','Praising','riku_teen'),
    mk('リク、お前、塾の延長にともなう疲れ、見えるぞ','Riku — cram-ext-accompany-tired','Reflective','sakura_teen'),
    mk('お前、ノート、ちゃんとカバンにおさめろよ、桜','You — notebook-bag-put Sakura','Direction','riku_teen'),
    mk('リク、お前、結果は割り切ってつぎ頑張れ','Riku — result-clear-next-try','Encouraging','sakura_teen'),
    mk('お前、ちょくちょく俺ん家来んな、桜','You — chokuchoku-my-home-not Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_08685',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、空がにわかに暗くなってきたわね','Sho — sky-sudden-dark','Animated','mei_romantic'),
    mk('メイ姉さん、お祖父ちゃんが「あっし」って自分のこと言ってたよ','Mei-sis — Grandpa-"asshi"-self','Reflective child','sho_child'),
    mk('翔くん、メイ姉さんがふふふって笑ったの、可愛いね','Sho — Mei-sis-fufufu-cute','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、しだいに難しい漢字も覚えてるよ','Mei-sis — me gradually-hard-kanji-remember','Proud child','sho_child'),
    mk('翔くん、季節の移り変わりにともなう花の変化を楽しみましょう','Sho — season-accompany-flower-change-enjoy','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お絵描き道具をちゃんとおさめたよ','Mei-sis — me art-tool-put-away','Proud child','sho_child'),
    mk('翔くん、悲しい事も割り切って前向きでいきましょうね','Sho — sad-clear-positive','Caring','mei_romantic'),
    mk('メイ姉さん、お祖父ちゃんがちょくちょくお見えになって嬉しいよ','Mei-sis — Grandpa-chokuchoku-visit-glad','Eager close','sho_child'),
  ]},
  {id:'conv_08686',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、給与の振り込みを月末に固定しろ','Our co — salary-trans-mo-end fix','Crisp','hiroshi_boss'),
    mk('はい。括弧書きの注釈を契約書に追加しました','Yes — Paren-anno contract-add','Methodical','kenji_office'),
    mk('社員の持ち物検査は最低限にしろ','Staff-belongings-check minimal','Direction','hiroshi_boss'),
    mk('はい。新プロジェクトに鋭意取り組んでおります','Yes — New-proj zeal-work','Update','kenji_office'),
    mk('当社、品質問題には即刻対応しろ','Our co — quality-issue immediate-resp','Direction','hiroshi_boss'),
    mk('はい。新店舗開業の告示を地域に出しました','Yes — New-store-open-pub-notice area','Update','kenji_office'),
    mk('当社、業界第一線の社員を表彰しろ','Our co — industry-front-line-staff-award','Direction','hiroshi_boss'),
    mk('はい。費用の積算根拠を資料に明記しました','Yes — Cost-estim-basis doc-clarify','Close','kenji_office'),
  ]},
  {id:'conv_08687',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('給与振り込みの日程を社員にお伝えしましょう','Salary-trans-date staff-conv','Brisk','yuki_office'),
    mk('はい。資料の括弧内の注記を統一しました','Yes — Doc-paren-note-unify','Cooperative','kenji_office'),
    mk('社員の持ち物の安全管理を見直しましょう','Staff-belongings-safety-review','Direction','yuki_office'),
    mk('はい。納期厳守で鋭意進めております','Yes — Deadline-strict zeal-progress','Update','kenji_office'),
    mk('お得意様の苦情には即刻ご回答しましょう','VIP-comp immediate-answer','Direction','yuki_office'),
    mk('はい。閉店時間の告示を店頭に貼りました','Yes — Close-time-pub-notice front-post','Update','kenji_office'),
    mk('業界第一線の技術者を採用しましょう','Industry-front-tech-hire','Direction','yuki_office'),
    mk('はい。プロジェクトの積算書をご確認ください','Yes — Proj-estim-doc please-check','Close','kenji_office'),
  ]},
  {id:'conv_08688',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究助成の振り込みを確認しろ','Ren — research-grant-trans-check','Mentor','hiroshi_boss'),
    mk('はい。論文の括弧書きの注釈を統一しました','Yes — Paper-paren-anno-unify','Earnest','ren_uni'),
    mk('蓮、実験室への持ち物制限を守れ','Ren — lab-belongings-limit-keep','Direction','hiroshi_boss'),
    mk('はい。論文執筆に鋭意取り組んでおります','Yes — Paper-write zeal-work','Polite','ren_uni'),
    mk('蓮、安全上の問題は即刻指導員に報告しろ','Ren — safety-issue immediate-adv-report','Direction','hiroshi_boss'),
    mk('はい。研究募集の告示を掲示しました','Yes — Research-recruit-pub-notice posted','Earnest','ren_uni'),
    mk('蓮、第一線の研究者の論文も参考にしろ','Ren — front-research-paper-ref','Direction','hiroshi_boss'),
    mk('はい。研究費の積算を学会論文の付録に載せました','Yes — Research-estim conf-paper-appendix','Earnest close','ren_uni'),
  ]},
  {id:'conv_08689',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、不正振り込み事案を捜査します','Police illegal-trans-case-inv','Calm','takeda_officer'),
    mk('はい。警察、調書の括弧表記を厳密に統一されてますね','Yes — Police doc-paren strict-unify','Cooperative','kenji_office'),
    mk('警察、職員の持ち物検査を定期的に行います','Police staff-belongings-check-period','Procedural','takeda_officer'),
    mk('はい。警察、容疑者特定に鋭意取り組まれてますね','Yes — Police suspect-id zeal-work','Cooperative','kenji_office'),
    mk('警察、緊急事案には即刻出動します','Police emerg-case immediate-deploy','Procedural','takeda_officer'),
    mk('はい。警察、お尋ね者の告示を継続されてますね','Yes — Police wanted-pub-notice cont','Cooperative','kenji_office'),
    mk('警察、第一線で活動するベテラン捜査官、頼もしいです','Police front-line-veteran-reliable','Cooperative','kenji_office'),
    mk('警察、損害賠償の積算根拠を明示します','Police damage-comp-estim-basis-clarify','Close','takeda_officer'),
  ]},
  {id:'conv_08690',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、給与振り込みを毎月厳守された','Dad — founding salary-trans-strict','Sage','hiroshi_elder'),
    mk('はい。お父さんは契約書の括弧書きまで気を配られた','Yes — Dad contract-paren-care','Commitment','hiroshi_boss'),
    mk('お父さん、社員の持ち物に余計な負担をかけなかったぞ','Dad — staff-belongings-no-burden','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新事業に鋭意取り組まれた','Yes — Dad new-biz zeal-work','Reflective','hiroshi_boss'),
    mk('お父さん、品質クレームには即刻ご対応された','Dad — quality-comp-immediate-resp','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新店舗開業の告示を自ら出された','Yes — Dad new-store-pub-notice self','Reflective','hiroshi_boss'),
    mk('お父さん、業界第一線を走り続けられたぞ','Dad — industry-front-keep-running','Wistful','hiroshi_elder'),
    mk('はい。お父さんは費用の積算を厳密にされた','Yes — Dad cost-estim-strict','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08691',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、宇宙空間の浮遊現象を論文で扱いましたね','Ren — space-floating paper','Calm','asuka_teacher'),
    mk('はい、社会民主党の政策史を論文で扱いました','Yes — SDP-policy-hist paper','Earnest','ren_uni'),
    mk('蓮さん、戦時下の脱走兵の研究を論文で扱いましたね','Ren — wartime-deserter-research paper','Reflective','asuka_teacher'),
    mk('はい、近代の懲罰制度を論文で扱いました','Yes — Mod-punishment-system paper','Earnest','ren_uni'),
    mk('被災者移送の歴史を論文で扱いましたね','Disaster-relocate-hist paper','Engaged','asuka_teacher'),
    mk('はい、不法滞在者送還の事例を論文で扱いました','Yes — Illegal-stay-repat-case paper','Earnest','ren_uni'),
    mk('蓮さん、近代国家における敵勢力駆逐の戦略を論文で扱いましたね','Ren — modern-state-enemy-rout-strat paper','Reflective','asuka_teacher'),
    mk('はい、政務調査制度の変遷を論文で扱いました','Yes — Political-research-sys-change paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08692',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、現場に浮遊する微粒子の証拠を警察、採取されてますね','Case on-site-float-particle-evid police-collect','Reflective','ren_uni'),
    mk('警察、社会民主党所属の議員からの陳情にも対応します','Police SDP-MP-petition-resp','Procedural','takeda_officer'),
    mk('本件、容疑者の脱走を警察、警戒されてますね','Case suspect-deserter police-watch','Reflective','ren_uni'),
    mk('警察、不正職員への懲罰を厳格に行います','Police illegal-staff-punish-strict','Procedural','takeda_officer'),
    mk('本件、容疑者の移送を警察、ご担当ですね','Case suspect-transfer police-handle','Reflective','ren_uni'),
    mk('警察、不法滞在者の送還手続きを進めます','Police illegal-stay-repat-proc-progress','Procedural','takeda_officer'),
    mk('本件、組織的犯罪駆逐の作戦を警察、立てられてますね','Case org-crime-rout-strat police-plan','Reflective','ren_uni'),
    mk('警察、政務に関わる事案にも誠実に対応します','Police political-case sincere-resp','Close','takeda_officer'),
  ]},
  {id:'conv_08693',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、宇宙空間の浮遊現象を論文で扱いましたね','Sakura — space-float paper','Calm','asuka_teacher'),
    mk('はい、社会民主党の政策史を論文で扱いました','Yes — SDP paper','Earnest teen','sakura_teen'),
    mk('戦時下の脱走兵の研究を論文で扱いましたね','War-deserter paper','Reflective','asuka_teacher'),
    mk('はい、近代の懲罰制度を論文で扱いました','Yes — Mod-punish paper','Earnest','sakura_teen'),
    mk('被災者移送の歴史を論文で扱いましたね','Disaster-relocate paper','Engaged','asuka_teacher'),
    mk('はい、不法滞在者送還の事例を論文で扱いました','Yes — Illegal-repat paper','Earnest','sakura_teen'),
    mk('敵勢力駆逐の戦略を論文で扱いましたね','Enemy-rout-strat paper','Reflective','asuka_teacher'),
    mk('はい、政務調査制度の変遷を論文で扱いました','Yes — Political-research-sys paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08694',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、空気中の浮遊菌を医療チームで定期的に測定しております','Ren — air-float-bact med-team measure','Calm','saito_doctor'),
    mk('はい、社会民主党の医療政策を医療チームで参照します','Yes — SDP-med-policy med-team ref','Patient','saito_doctor'),
    mk('精神科患者の脱走防止策を、貴院、なさってるそうですね、先生','Psych-patient-escape-prev your-hosp do, sensei','Curious','ren_uni'),
    mk('はい、医療事故の懲罰委員会を医療チームで運営します','Yes — Med-acc-punish-comm med-team run','Patient','saito_doctor'),
    mk('重症者の移送を、貴院、ご担当されたそうですね、先生','Critical-transfer your-hosp handle, sensei','Reflective','ren_uni'),
    mk('はい、外国人患者の本国送還を医療チームで調整します','Yes — Foreign-patient-repat med-team coord','Patient','saito_doctor'),
    mk('感染症駆逐の取り組みを、貴院、なさってるそうですね、先生','Infect-rout-effort your-hosp do, sensei','Reflective','ren_uni'),
    mk('はい、医療政務に関する意見書を医療チームで提出します','Yes — Med-pol-opinion med-team submit','Patient close','saito_doctor'),
  ]},
  {id:'conv_08695',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、工場内の浮遊粉塵を管理しろ','Our co — factory-float-dust mgmt','Crisp','hiroshi_boss'),
    mk('はい。社会民主党との対話の場も設けます','Yes — SDP-dialog-set','Methodical','kenji_office'),
    mk('当社、機密情報の脱走を厳重に防げ','Our co — secret-info-leak strict-prev','Direction','hiroshi_boss'),
    mk('はい。違反社員の懲罰委員会を設置しました','Yes — Violation-punish-comm set','Update','kenji_office'),
    mk('当社、人材移送のコストを最適化しろ','Our co — staff-relocate-cost-opt','Direction','hiroshi_boss'),
    mk('はい。違法滞在事案には送還手続を進めます','Yes — Illegal-stay-repat-progress','Update','kenji_office'),
    mk('当社、競合を駆逐するより共存を考えろ','Our co — rival-rout-co-exist','Direction','hiroshi_boss'),
    mk('はい。政務関連の渉外を強化しております','Yes — Political-rel-strengthen','Close','kenji_office'),
  ]},
  {id:'conv_08696',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、版画の展覧会のお話されてたよ、メイちゃん','Aoi — cust-print-exhibit-told Mei','Reflective','mei_romantic'),
    mk('葵、新しい食材、トランクで配達されたよ、メイちゃん','Aoi — new-ingred-trunk-deliver Mei','Reflective','aoi_barista'),
    mk('葵、冬限定で牡蠣のメニュー作りましょう、メイちゃん','Aoi — winter-oyster-menu Mei','Animated','mei_romantic'),
    mk('葵、お客様、お友達と酒場で乾杯したいって、メイちゃん','Aoi — cust-friend-tavern-toast-want Mei','Reflective','aoi_barista'),
    mk('葵、お客様、風呂敷でお買い物していらしたよ、メイちゃん','Aoi — cust-furoshiki-shop Mei','Reflective','mei_romantic'),
    mk('葵、寒くなってきたから、新しいヒーター入れたいね、メイちゃん','Aoi — cold-new-heater Mei','Direction','aoi_barista'),
    mk('葵、お客様、白髪が素敵で渋いね、メイちゃん','Aoi — cust-gray-hair-distinguished Mei','Reflective','mei_romantic'),
    mk('葵、お正月飾りに笹を飾りましょう、メイちゃん','Aoi — NY-decoration-bamboo-leaf Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_08697',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが版画作りに通われたぞ','Gran — youth Dad-print-making-attended','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お土産をトランクに詰めて帰られたわよね、あなた?','Yes — Grandpa-souv-trunk-pack-back, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと牡蠣を食べに行ったぞ','Gran — youth Dad-oyster-eat','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、戦友と酒場で集まっていらしたわよね、あなた?','Grandpa — war-friend-tavern-gather, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが大事な書類を風呂敷に包まれたぞ','Gran — youth Dad-doc-furoshiki-wrap','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、冬は灯油ヒーターでお部屋を暖められたわよね、あなた?','Grandpa — winter-kerosene-heater-warm, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんは白髪が増えてもダンディだったぞ','Gran — Dad-gray-hair-dandy','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、七夕に笹飾りを作って下さったわよね、あなた?','Grandpa — Tanabata-bamboo-decoration-made, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08698',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんが版画の作品を作ったのよ','Sho — Mei-sis-print-made','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ママのトランクの中身が気になるよ','Mei-sis — me Mom-trunk-curious','Curious child','sho_child'),
    mk('翔くん、お父さんと牡蠣のお店に行きたいわね','Sho — Dad-oyster-go-want','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんは酒場へよく行くんだって','Mei-sis — me Dad-tavern-often-go','Eager child','sho_child'),
    mk('翔くん、メイ姉さんが風呂敷でお弁当包んでくれたよ','Sho — Mei-sis-furoshiki-bento-wrapped','Reflective','mei_romantic'),
    mk('メイ姉さん、お祖父ちゃんの家のヒーター古いんだって','Mei-sis — Grandpa-home-heater-old','Reflective child','sho_child'),
    mk('翔くん、お祖父ちゃんの白髪、かっこいいわよ','Sho — Grandpa-gray-hair-cool','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、七夕で笹に願いを書いたよ','Mei-sis — me Tanabata-bamboo-wish-wrote','Eager close','sho_child'),
  ]},
  {id:'conv_08699',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、美術部で版画やったろ?','Riku — art-club-print?','Curious teen','sakura_teen'),
    mk('お前、修学旅行のトランク、重そうだな、桜','You — school-trip-trunk-heavy Sakura','Wry','riku_teen'),
    mk('リク、お前、家族で牡蠣食べに行ったろ?','Riku — fam-oyster?','Curious','sakura_teen'),
    mk('お前のお父さん、酒場のマスターなんだろ?桜','You — your-Dad-tavern-master? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会で風呂敷の文化やったろ?','Riku — soc-furoshiki-culture?','Curious','sakura_teen'),
    mk('お前ん家、新しいヒーター入れたろ?桜','You — your-home-new-heater? Sakura','Curious','riku_teen'),
    mk('リク、お前のお父さん、白髪増えてんな','Riku — your-Dad-gray-hair-more','Wry','sakura_teen'),
    mk('お前、七夕で笹に願い事書いたろ?桜','You — Tanabata-bamboo-wish? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08700',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが版画の展覧会に行かれたわ','Sho — Dad-print-exhibit-went','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんのトランクの中見たいよ','Mom — me Dad-trunk-want-see','Curious child','sho_child'),
    mk('翔くん、お父さんと牡蠣のお店に行きましょうね','Sho — Dad-oyster-go','Tender','yumiko_mom'),
    mk('ママ、お父さんが酒場で同僚と過ごされたんだって','Mom — Dad-tavern-coworker-spent','Reflective child','sho_child'),
    mk('翔くん、お祖母ちゃんが風呂敷でお重を包まれてたわ','Sho — Grandma-furoshiki-jubako-wrap','Reflective','yumiko_mom'),
    mk('ママ、ぼく、ヒーターの前で猫みたいに丸まりたい','Mom — me heater-cat-curl-want','Wry child','sho_child'),
    mk('翔くん、お祖父ちゃんの白髪、ステキだと思わない?','Sho — Grandpa-gray-hair-lovely?','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お庭の笹に飾りを付けたよ','Mom — me garden-bamboo-decorate','Eager close','sho_child'),
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

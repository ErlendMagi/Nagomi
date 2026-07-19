import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_450 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['つけ加え','まるまる','たんに','思いのほか','ガタガタ','やっとこ','おのずから','じっさい']
const B_T = ['差益','守秘','ターボ','コストダウン','返上','行革','株券','引渡し']
const C_T = ['念仏','党派','連隊','中退','白血病','リンパ','邁進','衰弱']
const D_T = ['硫黄','料亭','銅像','寒天','紋章','紫色','食肉','露店']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08961',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「楽しんで」と一言つけ加えて出かけられたわ','Sho — Dad-"enjoy"-add-out','Tender','yumiko_mom'),
    mk('ママ、ぼく、お休みをまるまる絵に使ったよ','Mom — me holiday-whole-art-used','Proud child','sho_child'),
    mk('翔くん、たんにお父さんが疲れていらしただけよ','Sho — just-Dad-tired','Reflective','yumiko_mom'),
    mk('ママ、お祖父ちゃんに会えて思いのほか嬉しかったよ','Mom — Grandpa-meet-unexpect-glad','Eager child','sho_child'),
    mk('翔くん、お家の窓がガタガタ鳴ってるわ','Sho — home-window-rattle','Reflective','yumiko_mom'),
    mk('ママ、ぼく、やっとこ宿題終わったよ','Mom — me finally-homework-end','Proud child','sho_child'),
    mk('翔くん、おのずから道が開けることもあるのよ','Sho — naturally-path-open','Reflective','yumiko_mom'),
    mk('ママ、ぼく、じっさいお祖父ちゃんに会いたいよ','Mom — me actually-Grandpa-meet','Earnest close','sho_child'),
  ]},
  {id:'conv_08962',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、新メニューに「季節限定」とつけ加えましょう、メイちゃん','Aoi — new-menu-"season-ltd"-add Mei','Direction','mei_romantic'),
    mk('葵、本日はまるまる仕込みの日だったね、メイちゃん','Aoi — today-whole-prep-day Mei','Reflective','aoi_barista'),
    mk('葵、お客様はたんに静かにお茶を楽しまれてただけよ、メイちゃん','Aoi — cust-just-quiet-tea Mei','Reflective','mei_romantic'),
    mk('葵、新メニュー、思いのほか好評ね、メイちゃん','Aoi — new-menu-unexpect-pop Mei','Pleased','aoi_barista'),
    mk('葵、古い棚がガタガタしてきたわ、メイちゃん','Aoi — old-shelf-rattle Mei','Reflective','mei_romantic'),
    mk('葵、やっとこ新看板出来たね、メイちゃん','Aoi — finally-new-sign-done Mei','Pleased','aoi_barista'),
    mk('葵、お客様の数は、おのずから増えていくはずよ、メイちゃん','Aoi — cust-num-naturally-grow Mei','Reflective','mei_romantic'),
    mk('葵、じっさいお店の運営は楽じゃないわね、メイちゃん','Aoi — actually-store-not-easy Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08963',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは手紙に一筆つけ加えて下さったぞ','Gran — youth Dad-letter-add','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、休みをまるまるお庭で過ごされたわよね、あなた?','Yes — Grandpa-rest-whole-garden, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはたんに照れ屋なだけでらしたぞ','Gran — youth Dad-just-shy','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様の成績が思いのほか良くて喜ばれたわよね、あなた?','Grandpa — grandkid-grade-unexpect-good, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはガタガタの古い椅子を直されたぞ','Gran — youth Dad-rattle-old-chair-fix','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、晩年、やっとこ趣味の時間を持たれたわよね、あなた?','Grandpa — late-finally-hobby-time, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは「おのずから人は集まる」と仰ったぞ','Gran — youth Dad "naturally-people-gather"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、じっさい人徳でらしたわよね、あなた?','Grandpa — actually-virtue, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08964',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、文末に絵文字つけ加えるなよ','Riku — end-emoji-add-don\'t','Wry teen','sakura_teen'),
    mk('お前、休みをまるまるゲームに使ったろ、桜','You — break-whole-game Sakura','Wry','riku_teen'),
    mk('リク、お前、たんに眠いだけだろ?','Riku — just-sleepy?','Wry','sakura_teen'),
    mk('お前のテスト、思いのほか良かったな、桜','Your-test-unexpect-good Sakura','Praising','riku_teen'),
    mk('リク、お前、緊張で足ガタガタしてんな','Riku — nervous-leg-rattle','Wry','sakura_teen'),
    mk('お前、やっとこ宿題終わったか、桜','You — finally-homework-end? Sakura','Wry','riku_teen'),
    mk('リク、お前、おのずから結果がついてくるよ','Riku — naturally-result-follow','Encouraging','sakura_teen'),
    mk('お前、じっさい頑張ったよな、桜','You — actually-tried Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_08965',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんが絵に星を一つつけ加えてあげる','Sho — Mei-sis-pic-star-add','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、絵をまるまる新しいページに描いたよ','Mei-sis — me pic-whole-new-page-drew','Proud child','sho_child'),
    mk('翔くん、メイ姉さんもたんに緊張してただけよ','Sho — Mei-sis-just-nervous','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ピアノ発表会、思いのほか上手くいったよ','Mei-sis — me piano-recital-unexpect-good','Proud child','sho_child'),
    mk('翔くん、ベンチがガタガタしてるから気を付けてね','Sho — bench-rattle-care','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、やっとこ自転車に乗れるようになったよ','Mei-sis — me finally-bike-able','Proud child','sho_child'),
    mk('翔くん、メイ姉さんは「おのずから絵は上達する」って','Sho — Mei-sis "naturally-art-imp"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、じっさいメイ姉さんと過ごす時間が好き','Mei-sis — me actually-Mei-sis-time-like','Tender close','sho_child'),
  ]},
  {id:'conv_08966',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、為替差益の計上を確認しろ','Our co — fx-gain-acct-check','Crisp','hiroshi_boss'),
    mk('はい。社員に守秘義務を改めて徹底します','Yes — Staff-confid-strict','Methodical','kenji_office'),
    mk('当社、業務をターボのように加速しろ','Our co — biz-turbo-accel','Direction','hiroshi_boss'),
    mk('はい。新規取引のコストダウン案を準備しました','Yes — New-deal-cost-down-plan-prep','Update','kenji_office'),
    mk('当社、お得意様の信頼回復のため汚名を返上しろ','Our co — VIP-trust-recov-stigma-return','Direction','hiroshi_boss'),
    mk('はい。社内行革を断行する所存です','Yes — Co-admin-reform-resolve','Update','kenji_office'),
    mk('当社、株券電子化の対応を進めろ','Our co — share-cert-elec-progress','Direction','hiroshi_boss'),
    mk('はい。お得意様への商品引渡し日を確定しました','Yes — VIP-prod-handover-date-fix','Close','kenji_office'),
  ]},
  {id:'conv_08967',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('為替差益の活用方法を経営陣に提案しましょう','Fx-gain-util-mgmt-prop','Brisk','yuki_office'),
    mk('はい。守秘契約の更新を進めております','Yes — Confid-contract-renew','Cooperative','kenji_office'),
    mk('新プロジェクトをターボのように進めましょう','New-proj-turbo-progress','Direction','yuki_office'),
    mk('はい。コストダウン目標を全社で共有しました','Yes — Cost-down-goal-co-share','Update','kenji_office'),
    mk('業界協会の役職を返上する方針を伝えましょう','Industry-org-pos-return-policy','Direction','yuki_office'),
    mk('はい。行革に向けた組織改編を準備しております','Yes — Admin-reform-org-restruct-prep','Update','kenji_office'),
    mk('株券を電子化する手続きを進めましょう','Share-cert-elec-progress','Direction','yuki_office'),
    mk('はい。お客様への引渡し場所を確認しました','Yes — Cust-handover-loc-check','Close','kenji_office'),
  ]},
  {id:'conv_08968',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究費の為替差益も予算に組み込め','Ren — research-fund-fx-gain-budget','Mentor','hiroshi_boss'),
    mk('はい。共同研究の守秘契約を確認しました','Yes — Joint-research-confid-check','Earnest','ren_uni'),
    mk('蓮、論文執筆のペースをターボに上げろ','Ren — paper-pace-turbo-up','Direction','hiroshi_boss'),
    mk('はい。実験のコストダウン案を提出しました','Yes — Exp-cost-down-plan-submit','Polite','ren_uni'),
    mk('蓮、不採用ポストを丁寧に返上しろ','Ren — rejected-pos-polite-return','Direction','hiroshi_boss'),
    mk('はい。学会の行革にも貢献したいと考えております','Yes — Conf-admin-reform-contrib','Earnest','ren_uni'),
    mk('蓮、研究室の株券のような寄付権を活用しろ','Ren — lab-share-cert-donate-right-util','Direction','hiroshi_boss'),
    mk('はい。試料の引渡し時期を学会と調整しました','Yes — Sample-handover-conf-coord','Earnest close','ren_uni'),
  ]},
  {id:'conv_08969',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、為替差益詐欺の捜査も進めてらっしゃるんですね','Police fx-gain-fraud-inv','Cooperative','kenji_office'),
    mk('警察、内部情報の守秘を厳格にされてますね','Police internal-info-confid-strict','Cooperative','kenji_office'),
    mk('警察、緊急車両のターボ性能を活かされますね','Police emerg-veh-turbo-util','Cooperative','kenji_office'),
    mk('警察、捜査資源のコストダウンも工夫されてますね','Police inv-res-cost-down','Cooperative','kenji_office'),
    mk('警察、汚職警官の階級返上を進められましたね','Police corrupt-officer-rank-return','Cooperative','kenji_office'),
    mk('警察、署内の行革にも取り組まれてますね','Police station-admin-reform','Cooperative','kenji_office'),
    mk('警察、株券偽造の捜査もご担当ですね','Police share-cert-forge-inv','Cooperative','kenji_office'),
    mk('警察、犯罪収益の引渡しを連邦に進められますね','Police crime-profit-handover-fed','Close','kenji_office'),
  ]},
  {id:'conv_08970',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、為替差益で苦労されたぞ','Dad — founding fx-gain-struggle','Sage','hiroshi_elder'),
    mk('はい。お父さんは社員に守秘の徹底を求められた','Yes — Dad staff-confid-strict','Commitment','hiroshi_boss'),
    mk('お父さん、新事業をターボで進められたぞ','Dad — new-biz-turbo-progress','Wistful','hiroshi_elder'),
    mk('はい。お父さんはコストダウン案を自ら考えられた','Yes — Dad cost-down-self-think','Reflective','hiroshi_boss'),
    mk('お父さん、不要な役職を自ら返上されたぞ','Dad — unnec-pos-self-return','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社内行革を断行された','Yes — Dad co-admin-reform','Reflective','hiroshi_boss'),
    mk('お父さん、株券を社員に配ろうとされたぞ','Dad — share-cert-staff-distrib','Wistful','hiroshi_elder'),
    mk('はい。お父さんは商品引渡し時に必ず立ち会われた','Yes — Dad prod-handover-attend','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08971',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、念仏宗の歴史を論文で扱いましたね','Ren — nembutsu-sect-hist paper','Calm','asuka_teacher'),
    mk('はい、戦前の党派対立の歴史を論文で扱いました','Yes — Prewar-faction-confl paper','Earnest','ren_uni'),
    mk('蓮さん、近代軍の連隊編制を論文で扱いましたね','Ren — mod-mil-regi paper','Reflective','asuka_teacher'),
    mk('はい、高校中退者の社会復帰研究を論文で扱いました','Yes — HS-dropout-reint paper','Earnest','ren_uni'),
    mk('白血病治療の歴史を論文で扱いましたね','Leuk-treat-hist paper','Engaged','asuka_teacher'),
    mk('はい、リンパ系免疫の研究を論文で扱いました','Yes — Lymph-imm paper','Earnest','ren_uni'),
    mk('蓮さん、教育者が邁進した道のりを論文で扱いましたね','Ren — edu-strive-path paper','Reflective','asuka_teacher'),
    mk('はい、長期療養者の衰弱の研究を論文で扱いました','Yes — Long-recov-weak paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08972',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、容疑者が念仏を唱えていたことを警察、確認されましたね','Case suspect-nembutsu police-confirm','Reflective','ren_uni'),
    mk('警察、特定の党派に偏らず捜査します','Police neutral-faction-inv','Procedural','takeda_officer'),
    mk('本件、警察、機動連隊との連携を強化されてますね','Case mobile-regi-link police-strength','Reflective','ren_uni'),
    mk('警察、中退者の社会復帰を支援する活動も続けます','Police dropout-reint-supp-cont','Procedural','takeda_officer'),
    mk('本件、被害者が白血病を患った経緯を警察、把握されてますね','Case victim-leuk-circ police-grasp','Reflective','ren_uni'),
    mk('警察、被害者のリンパ節の医学的検査を依頼します','Police victim-lymph-med-test-req','Procedural','takeda_officer'),
    mk('本件、警察、市民の信頼回復に邁進されてますね','Case police-citizen-trust-strive','Reflective','ren_uni'),
    mk('警察、衰弱した被害者の救護を最優先します','Police weak-victim-rescue-first','Close','takeda_officer'),
  ]},
  {id:'conv_08973',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、念仏宗の歴史を論文で扱いましたね','Sakura — nembutsu paper','Calm','asuka_teacher'),
    mk('はい、戦前の党派対立を論文で扱いました','Yes — Prewar-faction paper','Earnest teen','sakura_teen'),
    mk('近代軍の連隊編制を論文で扱いましたね','Mod-mil-regi paper','Reflective','asuka_teacher'),
    mk('はい、高校中退者の社会復帰を論文で扱いました','Yes — HS-dropout-reint paper','Earnest','sakura_teen'),
    mk('白血病治療の歴史を論文で扱いましたね','Leuk-treat paper','Engaged','asuka_teacher'),
    mk('はい、リンパ系免疫の研究を論文で扱いました','Yes — Lymph-imm paper','Earnest','sakura_teen'),
    mk('教育者が邁進した道のりを論文で扱いましたね','Edu-strive paper','Reflective','asuka_teacher'),
    mk('はい、長期療養者の衰弱を論文で扱いました','Yes — Long-recov-weak paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08974',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、終末期の患者さんの念仏を医療チームで尊重します','Ren — end-stage-patient-nembutsu med-team-respect','Calm','saito_doctor'),
    mk('はい、特定の党派への偏りなく医療チームで治療を提供します','Yes — Faction-neutral med-team-treat','Patient','saito_doctor'),
    mk('医師団は連隊のように動く必要があると、貴院、お考えなんですね、先生','Med-team-regi-act your-hosp-think, sensei','Curious','ren_uni'),
    mk('はい、医学部中退者の再受験を医療チームで応援します','Yes — Med-dropout-retry med-team-supp','Patient','saito_doctor'),
    mk('白血病外来の運営を、貴院、強化されてますね、先生','Leuk-out-pat your-hosp strength, sensei','Reflective','ren_uni'),
    mk('はい、リンパ浮腫の治療を医療チームで担当します','Yes — Lymph-edema-treat med-team','Patient','saito_doctor'),
    mk('医療の質向上に邁進する姿勢、頼もしいです、先生','Med-qual-imp-strive reliable, sensei','Praising','ren_uni'),
    mk('はい、衰弱した患者さんの栄養管理を医療チームで重視します','Yes — Weak-patient-nutri med-team-imp','Patient close','saito_doctor'),
  ]},
  {id:'conv_08975',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、念仏のような企業理念を社員に唱えさせるな','Our co — nembutsu-creed-staff-recite-not','Crisp','hiroshi_boss'),
    mk('はい。特定の党派と組まないようにします','Yes — Faction-not-join','Methodical','kenji_office'),
    mk('当社、新事業部隊を連隊のように組織しろ','Our co — new-biz-unit-regi-org','Direction','hiroshi_boss'),
    mk('はい。中退社員の復職プログラムを準備します','Yes — Dropout-staff-reint-prog-prep','Update','kenji_office'),
    mk('当社、白血病社員の支援制度を整備しろ','Our co — leuk-staff-supp-prep','Direction','hiroshi_boss'),
    mk('はい。リンパ浮腫の労災事例を社員に周知します','Yes — Lymph-work-acc-staff-info','Update','kenji_office'),
    mk('当社、業界トップに邁進しろ','Our co — industry-top-strive','Direction','hiroshi_boss'),
    mk('はい。衰弱した取引先には支援的対応をします','Yes — Weak-partner-supp-resp','Close','kenji_office'),
  ]},
  {id:'conv_08976',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、硫黄泉の温泉旅行をされたんだって、メイちゃん','Aoi — cust-sulfur-onsen-trip Mei','Reflective','mei_romantic'),
    mk('葵、お客様、料亭の若女将のお仕事だって、メイちゃん','Aoi — cust-ryotei-junior-okami-work Mei','Reflective','aoi_barista'),
    mk('葵、お客様、銅像の修復のお仕事なんだって、メイちゃん','Aoi — cust-bronze-statue-restore-work Mei','Reflective','mei_romantic'),
    mk('葵、新メニュー、寒天デザート加えましょう、メイちゃん','Aoi — new-menu-agar-dessert-add Mei','Animated','aoi_barista'),
    mk('葵、お客様、家紋の紋章を見せてくださったよ、メイちゃん','Aoi — cust-family-crest-emblem-show Mei','Reflective','mei_romantic'),
    mk('葵、お客様、紫色のスカーフが素敵だね、メイちゃん','Aoi — cust-purple-scarf-lovely Mei','Praising','aoi_barista'),
    mk('葵、新メニュー、食肉を控えた野菜中心にしましょう、メイちゃん','Aoi — new-menu-meat-reduce-veg Mei','Direction','mei_romantic'),
    mk('葵、お祭りで露店も出店したいわね、メイちゃん','Aoi — fest-stall-out Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08977',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんと硫黄温泉に泊まったぞ','Gran — youth Dad-sulfur-onsen-stay','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お祝いに料亭にお連れ下さったわよね、あなた?','Yes — Grandpa-celeb-ryotei-took, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは公園の銅像をご紹介下さったぞ','Gran — youth Dad-park-bronze-statue-intro','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、夏に寒天ゼリーを作ってらしたわよね、あなた?','Grandpa — summer-agar-jelly-made, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが我が家の紋章を教えて下さったぞ','Gran — youth Dad-our-emblem-taught','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、紫色の着物がお好きだったわよね、あなた?','Grandpa — purple-kimono-liked, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは食肉を控える運動に賛同された','Gran — youth Dad-meat-reduce-mov-agree','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お祭りの露店でりんご飴買って下さったわよね、あなた?','Grandpa — fest-stall-apple-candy-bought, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08978',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんと硫黄温泉に行きたいね','Sho — Dad-sulfur-onsen-want','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと料亭でお祝いしてもらったよ','Mei-sis — me Dad-ryotei-celeb','Eager child','sho_child'),
    mk('翔くん、公園の銅像、誰のかな?','Sho — park-bronze-statue-who?','Curious','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖母ちゃんの寒天大好きだよ','Mei-sis — me Grandma-agar-love','Eager child','sho_child'),
    mk('翔くん、ぼくの家の紋章、お祖父ちゃんが見せてくれたよ','Sho — me-home-emblem-Grandpa-show','Proud child','mei_romantic'),
    mk('メイ姉さん、ぼく、紫色のクレヨンが好きだよ','Mei-sis — me purple-crayon-like','Eager child','sho_child'),
    mk('翔くん、食肉だけじゃなくお野菜も食べましょうね','Sho — meat-only-veg-eat','Direction','mei_romantic'),
    mk('メイ姉さん、お祭りで露店のたこ焼き食べたい','Mei-sis — fest-stall-takoyaki-want','Eager close','sho_child'),
  ]},
  {id:'conv_08979',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、家族で硫黄温泉行ったろ?','Riku — fam-sulfur-onsen?','Curious teen','sakura_teen'),
    mk('お前、お祝いで料亭行ったろ?桜','You — celeb-ryotei? Sakura','Curious','riku_teen'),
    mk('リク、お前、公園の銅像に登るなよ','Riku — park-bronze-statue-climb-don\'t','Direction','sakura_teen'),
    mk('お前、夏は寒天ゼリーばっか食ってんな、桜','You — summer-agar-only Sakura','Wry','riku_teen'),
    mk('リク、お前ん家の紋章、かっこいいな','Riku — your-home-emblem-cool','Praising','sakura_teen'),
    mk('お前、紫色のリュック新しく買ったろ?桜','You — purple-backpack-new? Sakura','Curious','riku_teen'),
    mk('リク、お前、食肉減らすのは無理だろ?','Riku — meat-reduce-no?','Wry','sakura_teen'),
    mk('お前、夏祭りの露店巡り好きだろ?桜','You — summer-fest-stall-rounds-like? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08980',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんと硫黄温泉に行きましょうね','Sho — Dad-sulfur-onsen-go','Tender','yumiko_mom'),
    mk('ママ、お父さんが料亭に予約してくれたんだって','Mom — Dad-ryotei-book','Eager child','sho_child'),
    mk('翔くん、お父さんと公園の銅像を見に行きましょう','Sho — Dad-park-bronze-statue-go','Tender','yumiko_mom'),
    mk('ママ、ぼく、お祖母ちゃんの寒天デザート楽しみ','Mom — me Grandma-agar-dessert-fun','Eager child','sho_child'),
    mk('翔くん、お家の紋章を教えてあげるわね','Sho — home-emblem-teach','Tender','yumiko_mom'),
    mk('ママ、ぼく、紫色の靴下欲しい','Mom — me purple-sock-want','Eager child','sho_child'),
    mk('翔くん、お肉だけでなく野菜も食べましょうね、食肉に偏らないでね','Sho — meat-only-veg-not-bias-meat','Direction','yumiko_mom'),
    mk('ママ、ぼく、お祭りの露店で綿菓子買ってもらったよ','Mom — me fest-stall-cotton-candy-bought','Eager close','sho_child'),
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

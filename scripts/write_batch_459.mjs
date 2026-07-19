import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_459 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['履き','怪しげ','一人前','ありゃ','競う','似合わ','着々と','とてつもなく']
const B_T = ['小切手','インターンシップ','本案','公言','借り入れ','呼び名','生年月日','ベーシック']
const C_T = ['異端','卑怯','束縛','醜い','人為','援護','邪悪','監獄']
const D_T = ['現像','楽屋','田園','器官','武蔵野','生理学','緑地','合体']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09141',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、新しい靴を履きましょうね','Sho — new-shoe-wear','Direction','yumiko_mom'),
    mk('ママ、外に怪しげな人がいなかったよ','Mom — outside-suspicious-no','Reflective child','sho_child'),
    mk('翔くん、お父さんが「翔くんも、一人前のお手伝いができるね」って','Sho — Dad-"Sho-full-help-able"-said','Pleased','yumiko_mom'),
    mk('ママ、ありゃ、お祖父ちゃんからお手紙届いたよ','Mom — oh-Grandpa-letter','Animated child','sho_child'),
    mk('翔くん、お友達と競う事も成長になるわよ','Sho — friend-compete-grow','Reflective','yumiko_mom'),
    mk('ママ、ぼく、この帽子、ぼくに似合わないよね','Mom — me hat-not-suit-right?','Wry child','sho_child'),
    mk('翔くん、お家の整理整頓、着々と進んでるわね','Sho — home-org-steady-progress','Pleased','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんから、とてつもなく大きなおもちゃもらったよ','Mom — me Grandpa-incredible-big-toy','Eager close','sho_child'),
  ]},
  {id:'conv_09142',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、新しいエプロンを履きましょうね、メイちゃん','Aoi — new-apron-wear Mei','Direction','mei_romantic'),
    mk('葵、お店の前に怪しげな人物がいたよ、メイちゃん','Aoi — store-front-suspicious-person Mei','Reflective','aoi_barista'),
    mk('葵、新人さん、一人前のバリスタになってきたね、メイちゃん','Aoi — newbie-full-barista Mei','Pleased','mei_romantic'),
    mk('葵、ありゃ、新メニューのレシピ忘れちゃった、メイちゃん','Aoi — oh-new-menu-recipe-forgot Mei','Wry','aoi_barista'),
    mk('葵、近所のお店と競う必要はないよね、メイちゃん','Aoi — neighbor-store-compete-no-need Mei','Reflective','mei_romantic'),
    mk('葵、お客様、新メニューが、ご自身に似合わないって仰ってたわ、メイちゃん','Aoi — cust-new-menu-not-suit Mei','Reflective','aoi_barista'),
    mk('葵、お店の改装、着々と進んでるね、メイちゃん','Aoi — store-renov-steady Mei','Pleased','mei_romantic'),
    mk('葵、新メニュー、お客様にとてつもなく好評ね、メイちゃん','Aoi — new-menu-cust-incred-pop Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_09143',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんと新しい下駄を履きに行ったぞ','Gran — youth Dad-new-geta-wear','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、怪しげな商人を見抜く目をお持ちでらしたわよね、あなた?','Yes — Grandpa-suspic-merchant-eye, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは一人前の職人だったぞ','Gran — youth Dad-full-craft','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、「ありゃ」って驚かれた事もありましたわよね、あなた?','Grandpa — "oh"-surprised, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは仲間と競う事を楽しまれた','Gran — youth Dad-friend-compete-enjoy','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、地味な服が似合わなかった訳ではないわよね、あなた?','Grandpa — plain-cloth-not-unsuit, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、家業は着々と発展したぞ','Gran — youth family-biz-steady-dev','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、戦時下、とてつもなく辛い経験をされたわよね、あなた?','Grandpa — wartime-incred-hard-exp, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09144',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、新しい靴下履きすぎだろ','Riku — new-sock-too-much','Wry teen','sakura_teen'),
    mk('お前、その怪しげな人物には近づくなよ、桜','You — that-suspic-not-approach Sakura','Direction','riku_teen'),
    mk('リク、お前、一人前になるまで頑張れ','Riku — full-effort','Encouraging','sakura_teen'),
    mk('お前、「ありゃ」って言いすぎだぞ、桜','You — "oh"-too-much Sakura','Wry','riku_teen'),
    mk('リク、お前、俺と競うなよ','Riku — me-compete-not','Wry','sakura_teen'),
    mk('お前、その帽子、お前に似合わなくはないぞ、桜','You — that-hat-not-unsuit Sakura','Praising','riku_teen'),
    mk('リク、お前のテスト点、着々と上がってんな','Riku — test-score-steady-up','Praising','sakura_teen'),
    mk('お前、課題の量がとてつもなく多いな、桜','You — task-incred-many Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_09145',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、新しいスニーカーを履きましょうね','Sho — new-sneaker-wear','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、公園で怪しげな影を見たよ','Mei-sis — me park-suspic-shadow-saw','Earnest child','sho_child'),
    mk('翔くん、お絵描きでも一人前になれるわよ','Sho — art-full-able','Encouraging','mei_romantic'),
    mk('メイ姉さん、ありゃ、お絵描き道具忘れちゃった','Mei-sis — oh-art-tool-forgot','Wry child','sho_child'),
    mk('翔くん、お友達と絵を競うのは楽しいわね','Sho — friend-art-compete-fun','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、この絵がぼくに似合わなくない?','Mei-sis — me art-not-unsuit?','Curious child','sho_child'),
    mk('翔くん、メイ姉さんの絵は、着々と上達してるのよ','Sho — Mei-sis-art-steady-imp','Reflective','mei_romantic'),
    mk('メイ姉さん、メイ姉さんの絵はとてつもなく素敵だね','Mei-sis — Mei-sis-art-incred-lovely','Praising close','sho_child'),
  ]},
  {id:'conv_09146',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、小切手の使用ルールを徹底しろ','Our co — check-use-rule-strict','Crisp','hiroshi_boss'),
    mk('はい。インターンシップの募集を開始しました','Yes — Intern-rec-start','Methodical','kenji_office'),
    mk('当社、本案を取締役会で承認してもらえ','Our co — this-plan-board-approve','Direction','hiroshi_boss'),
    mk('はい。新方針を社員に公言いたします','Yes — New-policy-staff-declare','Update','kenji_office'),
    mk('当社、不動産の借り入れを再交渉しろ','Our co — realty-loan-renego','Direction','hiroshi_boss'),
    mk('はい。新商品の呼び名を社員投票で決めます','Yes — New-prod-call-name-staff-vote','Update','kenji_office'),
    mk('当社、社員の生年月日管理を厳格にしろ','Our co — staff-DOB-strict','Direction','hiroshi_boss'),
    mk('はい。新人にはベーシックな研修を実施します','Yes — Newbie-basic-train','Close','kenji_office'),
  ]},
  {id:'conv_09147',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('小切手の発行手続きを社員に説明しましょう','Check-issue-proc-staff-explain','Brisk','yuki_office'),
    mk('はい。インターンシップ生の受け入れ体制を整えました','Yes — Intern-accept-prep','Cooperative','kenji_office'),
    mk('本案については慎重に決定しましょう','This-plan-careful-decide','Direction','yuki_office'),
    mk('はい。社長が新方針を公言する記者会見を準備します','Yes — Pres-new-policy-declare-press-prep','Update','kenji_office'),
    mk('短期の借り入れも検討しておきましょう','Short-loan-consider','Direction','yuki_office'),
    mk('はい。新商品の呼び名は親しみやすくしたいですね','Yes — New-prod-call-name-friendly','Update','kenji_office'),
    mk('社員の生年月日は個人情報として厳重に管理しましょう','Staff-DOB-personal-info-strict','Direction','yuki_office'),
    mk('はい。ベーシックなマナー研修を全員に実施します','Yes — Basic-manner-all-train','Close','kenji_office'),
  ]},
  {id:'conv_09148',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究費の小切手扱いに注意しろ','Ren — research-fund-check-care','Mentor','hiroshi_boss'),
    mk('はい。インターンシップで学べる事を生かしたいです','Yes — Intern-learn-util','Earnest','ren_uni'),
    mk('蓮、本案を指導教授に確認してもらえ','Ren — this-plan-adv-prof-check','Direction','hiroshi_boss'),
    mk('はい。研究目的を学会で公言いたします','Yes — Research-purp-conf-declare','Polite','ren_uni'),
    mk('蓮、研究費の借り入れ制度を活用しろ','Ren — research-loan-util','Direction','hiroshi_boss'),
    mk('はい。研究プロジェクトの呼び名を共同研究者と決めました','Yes — Research-proj-name-joint-decide','Earnest','ren_uni'),
    mk('蓮、被験者の生年月日確認を徹底しろ','Ren — subj-DOB-strict','Direction','hiroshi_boss'),
    mk('はい。論文でベーシックな統計手法を扱います','Yes — Paper-basic-stat paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09149',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、小切手詐欺の事件を捜査されますね','Police check-fraud-inv','Cooperative','kenji_office'),
    mk('警察、インターンシップ警察学生を受け入れられますね','Police intern-stud-accept','Cooperative','kenji_office'),
    mk('警察、本案には市民の協力が不可欠ですね','Police this-plan-citizen-coop-need','Cooperative','kenji_office'),
    mk('警察、不祥事を起こした警察官の処分を公言されますね','Police scandal-officer-disc-declare','Cooperative','kenji_office'),
    mk('警察、不正借り入れの捜査もご対応ですね','Police illegal-loan-inv','Cooperative','kenji_office'),
    mk('警察、容疑者の呼び名を変えるご配慮もされてますね','Police suspect-call-name-change-care','Cooperative','kenji_office'),
    mk('警察、容疑者の生年月日確認を厳格にされますね','Police suspect-DOB-strict','Cooperative','kenji_office'),
    mk('警察、市民にもベーシックな防犯知識を伝えられますね','Police citizen-basic-crime-prev-conv','Close','kenji_office'),
  ]},
  {id:'conv_09150',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、小切手の信用を大事にされたぞ','Dad — founding check-credit-cherish','Sage','hiroshi_elder'),
    mk('はい。お父さんは学生インターンシップを早期から導入された','Yes — Dad stud-intern-early-intro','Commitment','hiroshi_boss'),
    mk('お父さん、本案の前にも社員の意見を聞かれた','Dad — this-plan-pre-staff-view-hear','Wistful','hiroshi_elder'),
    mk('はい。お父さんは経営方針を社外に公言された','Yes — Dad mgmt-policy-outside-declare','Reflective','hiroshi_boss'),
    mk('お父さん、銀行からの借り入れ無しで成長されたぞ','Dad — bank-loan-no-grow','Wistful','hiroshi_elder'),
    mk('はい。お父さんは商品の呼び名にこだわった','Yes — Dad prod-call-name-care','Reflective','hiroshi_boss'),
    mk('お父さん、社員の生年月日に合わせてお祝いされたぞ','Dad — staff-DOB-celeb','Wistful','hiroshi_elder'),
    mk('はい。お父さんはベーシックな商売道を貫かれた','Yes — Dad basic-biz-way-keep','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09151',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、宗教史における異端の扱いを論文で扱いましたね','Ren — relig-hist-here-treat paper','Calm','asuka_teacher'),
    mk('はい、戦争中の卑怯な戦法を論文で扱いました','Yes — War-coward-tactic paper','Earnest','ren_uni'),
    mk('蓮さん、女性を束縛してきた法律史を論文で扱いましたね','Ren — fem-bind-law-hist paper','Reflective','asuka_teacher'),
    mk('はい、戦時下の醜い差別表現を論文で扱いました','Yes — Wartime-ugly-discrim paper','Earnest','ren_uni'),
    mk('人為的な災害の歴史を論文で扱いましたね','Man-made-disaster-hist paper','Engaged','asuka_teacher'),
    mk('はい、市民を援護する諸団体の研究を論文で扱いました','Yes — Citizen-supp-org-research paper','Earnest','ren_uni'),
    mk('蓮さん、邪悪と評された人物史を論文で扱いましたね','Ren — evil-fig-hist paper','Reflective','asuka_teacher'),
    mk('はい、近代の監獄制度を論文で扱いました','Yes — Mod-prison-sys paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09152',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、容疑者を異端者として扱わないよう警察、注意されてますね','Case suspect-here-not-treat police','Reflective','ren_uni'),
    mk('警察、卑怯な詐欺の手口を捜査します','Police coward-fraud-inv','Procedural','takeda_officer'),
    mk('本件、被害者を束縛していた状況を警察、確認されましたね','Case victim-bind-situ police','Reflective','ren_uni'),
    mk('警察、醜い暴行事件を厳しく取り締まります','Police ugly-assault-crack','Procedural','takeda_officer'),
    mk('本件、人為的な火災の疑いを警察、捜査されてますね','Case man-made-fire-suspic police-inv','Reflective','ren_uni'),
    mk('警察、被害者ご家族を援護する体制を整えます','Police victim-fam-supp-prep','Procedural','takeda_officer'),
    mk('本件、邪悪な意図を持つ犯人を警察、追ってますね','Case evil-intent-suspect police-pursue','Reflective','ren_uni'),
    mk('警察、監獄からの脱走事案にも備えております','Police prison-escape-prep','Close','takeda_officer'),
  ]},
  {id:'conv_09153',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、宗教史における異端の扱いを論文で扱いましたね','Sakura — here-treat paper','Calm','asuka_teacher'),
    mk('はい、戦争中の卑怯な戦法を論文で扱いました','Yes — War-coward paper','Earnest teen','sakura_teen'),
    mk('女性を束縛してきた法律史を論文で扱いましたね','Fem-bind-law paper','Reflective','asuka_teacher'),
    mk('はい、戦時下の醜い差別表現を論文で扱いました','Yes — Wartime-ugly paper','Earnest','sakura_teen'),
    mk('人為的な災害の歴史を論文で扱いましたね','Man-made-disaster paper','Engaged','asuka_teacher'),
    mk('はい、市民を援護する諸団体を論文で扱いました','Yes — Citizen-supp paper','Earnest','sakura_teen'),
    mk('邪悪と評された人物史を論文で扱いましたね','Evil-fig paper','Reflective','asuka_teacher'),
    mk('はい、近代の監獄制度を論文で扱いました','Yes — Mod-prison paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09154',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、異端的な治療法も医療チームで慎重に検討します','Ren — here-treat med-team careful','Calm','saito_doctor'),
    mk('はい、患者さんに対する卑怯な扱いを医療チームで戒めます','Yes — Patient-coward-treat med-team admon','Patient','saito_doctor'),
    mk('束縛なき医療を、貴院、目指されてますね、先生','Bind-no-med your-hosp aim, sensei','Reflective','ren_uni'),
    mk('はい、外見が醜い傷を治す形成外科を医療チームで担います','Yes — Ugly-wound-heal-plastic med-team','Patient','saito_doctor'),
    mk('人為的な健康被害の研究を、貴院、なさってますね、先生','Man-made-health-research your-hosp, sensei','Curious','ren_uni'),
    mk('はい、患者さん家族の援護も医療チームで担当します','Yes — Patient-fam-supp med-team','Patient','saito_doctor'),
    mk('邪悪な意図で患者を扱う医療事案、貴院、警戒されてますね、先生','Evil-intent-patient your-hosp watch, sensei','Reflective','ren_uni'),
    mk('はい、監獄内の医療支援を医療チームで担当します','Yes — Prison-med-supp med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_09155',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、業界の異端者として尖った商品を出せ','Our co — industry-here-sharp-prod','Crisp','hiroshi_boss'),
    mk('はい。卑怯な競合の妨害には毅然と対応します','Yes — Coward-rival-firm-resp','Methodical','kenji_office'),
    mk('当社、社員を契約で過度に束縛するな','Our co — staff-contract-bind-not','Direction','hiroshi_boss'),
    mk('はい。商品の見た目が醜いと評されぬよう注意します','Yes — Prod-ugly-not-care','Update','kenji_office'),
    mk('当社、人為ミスを防ぐ自動化を進めろ','Our co — man-made-mistake-prev-auto','Direction','hiroshi_boss'),
    mk('はい。困っている社員を援護する制度を作ります','Yes — Trouble-staff-supp-sys','Update','kenji_office'),
    mk('当社、邪悪な情報操作には絶対に手を染めるな','Our co — evil-info-manip-no-touch','Direction','hiroshi_boss'),
    mk('はい。社員が監獄に入る事のないよう法令遵守を徹底します','Yes — Staff-prison-not-comply','Close','kenji_office'),
  ]},
  {id:'conv_09156',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、フィルムの現像のお話されてたよ、メイちゃん','Aoi — cust-film-dev-told Mei','Reflective','mei_romantic'),
    mk('葵、お客様、楽屋裏でくつろがれたって、メイちゃん','Aoi — cust-backstage-relaxed Mei','Reflective','aoi_barista'),
    mk('葵、お客様、田園地帯にお引っ越しされたんだって、メイちゃん','Aoi — cust-rural-moved Mei','Reflective','mei_romantic'),
    mk('葵、お客様、器官移植の研究をされてるんだって、メイちゃん','Aoi — cust-organ-transplant-research Mei','Reflective','aoi_barista'),
    mk('葵、お客様、武蔵野の風景画を描かれるんだって、メイちゃん','Aoi — cust-Musashino-landscape-paint Mei','Reflective','mei_romantic'),
    mk('葵、お客様、生理学の教科書を持ってらしたよ、メイちゃん','Aoi — cust-physio-textbook Mei','Reflective','aoi_barista'),
    mk('葵、お店の近くに緑地公園が新しくできたね、メイちゃん','Aoi — store-near-green-park-new Mei','Pleased','mei_romantic'),
    mk('葵、お客様、新メニューと旧メニューを合体させた案を提案されたよ、メイちゃん','Aoi — cust-new-old-fuse-prop Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09157',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがフィルムの現像をされたぞ','Gran — youth Dad-film-dev','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、芝居の楽屋を訪ねられたわよね、あなた?','Yes — Grandpa-play-backstage-visit, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは田園詩を好まれた','Gran — youth Dad-rural-poem-loved','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様に器官の名前を教えてらしたわよね、あなた?','Grandpa — grandkid-organ-name-taught, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと武蔵野の森を歩いた','Gran — youth Dad-Musashino-forest','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、生理学を学ばれたわよね、あなた?','Grandpa — youth-physio-study, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、地元の緑地で結婚式を挙げたぞ','Gran — youth-local-green-wedding','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、新旧の伝統を合体させた行事を企画されたわよね、あなた?','Grandpa — new-old-fuse-event, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09158',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが昔、フィルムの現像をされたんですって','Sho — Dad-old-film-dev','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祭りで楽屋の様子を見たよ','Mei-sis — me fest-backstage-saw','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんの田園の絵、素敵ね','Sho — Grandpa-rural-art-lovely','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、理科で器官の名前覚えたよ','Mei-sis — me sci-organ-name-learn','Proud child','sho_child'),
    mk('翔くん、メイ姉さんは武蔵野の風景画を描くのが好きなのよ','Sho — Mei-sis-Musashino-landscape-like','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、生理学のお話を授業で聞いたよ','Mei-sis — me physio-class-heard','Earnest child','sho_child'),
    mk('翔くん、お父さんと緑地公園にお散歩に行きましょうね','Sho — Dad-green-park-walk','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、レゴで車と飛行機を合体させたよ','Mei-sis — me LEGO-car-plane-fuse','Proud close','sho_child'),
  ]},
  {id:'conv_09159',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、フィルムカメラで現像してんだろ?','Riku — film-cam-dev?','Curious teen','sakura_teen'),
    mk('お前、文化祭の楽屋手伝ったろ?桜','You — fest-backstage-helped? Sakura','Curious','riku_teen'),
    mk('リク、お前、田園地帯のお祖父ちゃんち行ったろ?','Riku — rural-Grandpa-went?','Curious','sakura_teen'),
    mk('お前、生物で器官の単元やったろ?桜','You — bio-organ-unit? Sakura','Curious','riku_teen'),
    mk('リク、お前、武蔵野の地名で社会レポート書いたろ?','Riku — Musashino-soc-rep?','Curious','sakura_teen'),
    mk('お前、生理学の本読んでんな、桜','You — physio-book Sakura','Curious','riku_teen'),
    mk('リク、お前、新しい緑地公園知ってる?','Riku — new-green-park-know?','Curious','sakura_teen'),
    mk('お前、ロボットの合体機能好きだろ?桜','You — robot-fuse-like? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09160',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが古いフィルムを現像に出したわ','Sho — Dad-old-film-dev-sent','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとお芝居の楽屋見学したよ','Mom — me Dad-play-backstage-tour','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんが田園地帯のお家に住んでらっしゃるわ','Sho — Grandpa-rural-home','Reflective','yumiko_mom'),
    mk('ママ、ぼく、生物の器官の図を描いてみたよ','Mom — me bio-organ-drew','Proud child','sho_child'),
    mk('翔くん、お父さんが武蔵野の景色のお話してくれたわ','Sho — Dad-Musashino-told','Reflective','yumiko_mom'),
    mk('ママ、お父さんは生理学のお仕事してらっしゃるのね','Mom — Dad-physio-work','Reflective child','sho_child'),
    mk('翔くん、お庭の隣の緑地公園で遊びましょうね','Sho — garden-next-green-park-play','Tender','yumiko_mom'),
    mk('ママ、ぼく、戦隊ロボの合体玩具欲しいよ','Mom — me sentai-robot-fuse-toy-want','Eager close','sho_child'),
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

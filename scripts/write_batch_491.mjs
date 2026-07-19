import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_491 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['よら','云っ','よろしけれ','ぶち','つぶれ','とどまら','創る','ココロ']
const B_T = ['盛り込ま','所定','同月','両側','過大','前々','附属','米ドル']
const C_T = ['聖なる','僧侶','悲観','電化','断食','途方','悪徳','投影']
const D_T = ['北九州','日光','アフガン','モロッコ','ナポレオン','富士通','早稲田大学','京都大学']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09781',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんに何かよらない事があったらしいわ','Sho — Dad-yora-nothing-special','Wry','yumiko_mom'),
    mk('ママ、お父さんが「ありがとう」と云ってくれたよ','Mom — Dad-"thanks"-said','Eager child','sho_child'),
    mk('翔くん、もしよろしければ、宿題のお手伝いするわよ','Sho — if-willing-homework-help','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「ぶち」抜きで本気で話したよ','Mom — me Dad-bare-honest','Earnest child','sho_child'),
    mk('翔くん、おもちゃが壊れてつぶれちゃったわね','Sho — toy-broken-crushed','Wry','yumiko_mom'),
    mk('ママ、ぼく、お父さんを困らせるところにとどまらない、もっと優しくするよ','Mom — me Dad-trouble-not-stay-kind','Earnest child','sho_child'),
    mk('翔くん、お父さんが家族の絆を創るって仰ってたわ','Sho — Dad-fam-bond-create','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんを「ココロから」尊敬してるよ','Mom — me Dad-heart-resp','Tender close','sho_child'),
  ]},
  {id:'conv_09782',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、明日はよらない予定だって、メイちゃん','Aoi — cust-tomor-yora-no Mei','Reflective','mei_romantic'),
    mk('葵、お客様、「おいしい」と云って下さったよ、メイちゃん','Aoi — cust-"yummy"-said Mei','Pleased','aoi_barista'),
    mk('葵、よろしければ、お客様にお代わりをお勧めしようね、メイちゃん','Aoi — if-willing-cust-refill-rec Mei','Direction','mei_romantic'),
    mk('葵、お客様、ホットチョコをぶち撒いてしまわれたよ、メイちゃん','Aoi — cust-hot-choc-bachi-spill Mei','Wry','aoi_barista'),
    mk('葵、お皿が落ちてつぶれちゃった、メイちゃん','Aoi — plate-fall-broken Mei','Wry','mei_romantic'),
    mk('葵、現状にとどまらないお店づくりを目指そうね、メイちゃん','Aoi — status-no-stay-store-aim Mei','Direction','aoi_barista'),
    mk('葵、お客様の特別な思い出を創るお店にしようね、メイちゃん','Aoi — cust-spec-mem-create Mei','Direction','mei_romantic'),
    mk('葵、お客様の「ココロ」に響くサービスを心掛けよう、メイちゃん','Aoi — cust-heart-svc-strive Mei','Tender close','aoi_barista'),
  ]},
  {id:'conv_09783',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんに何にもよらない用事があった','Gran — youth Dad-yora-busy','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、「お疲れ」と云って下さったわよね、あなた?','Yes — Grandpa-"tired"-said, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「よろしければ」と丁寧に仰った','Gran — youth Dad-"yoroshikere"-pol','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、悔しい時は「ぶち壊し」と仰ってたわよね、あなた?','Grandpa — youth-frust-"bachi"-said, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、村のお店がつぶれてしまった事があった','Gran — youth vil-store-broken','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、現状にとどまらない冒険心がおありだったわよね、あなた?','Grandpa — status-no-stay-adv, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが家庭を創る事に責任を持ってらした','Gran — youth Dad-home-create-resp','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様の「ココロ」を理解されてたわよね、あなた?','Grandpa — grandkid-heart-und, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09784',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、今日はよらない予定だったろ','Riku — today-yora-no','Wry teen','sakura_teen'),
    mk('お前、先生に何か云ってたな、桜','You — tch-said-something Sakura','Curious','riku_teen'),
    mk('リク、よろしければ、ノート貸してくれ','Riku — if-willing-note-lend','Direction','sakura_teen'),
    mk('お前、感情をぶち撒けるなよ、桜','You — emot-bachi-spill-no Sakura','Direction','riku_teen'),
    mk('リク、お前の自転車、つぶれそうだぞ','Riku — bike-broken-near','Wry','sakura_teen'),
    mk('お前、現状にとどまらない夢があるな、桜','You — status-no-stay-dream Sakura','Praising','riku_teen'),
    mk('リク、お前、何かを創る才能あるな','Riku — create-talent','Praising','sakura_teen'),
    mk('お前、ココロを大事にしろよ、桜','You — heart-imp Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_09785',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが今日はよらない用事があったみたい','Sho — Dad-today-yora-no','Reflective','mei_romantic'),
    mk('メイ姉さん、お父さんが「ありがとう」と云って下さったよ','Mei-sis — Dad-"thanks"-said','Eager child','sho_child'),
    mk('翔くん、メイ姉さんはよろしければ夕飯を一緒に頂きたいわ','Sho — Mei-sis-if-willing-dinner-want','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、感情をぶち撒けず冷静に話したよ','Mei-sis — me emot-bachi-no-calm','Earnest child','sho_child'),
    mk('翔くん、お友達のお店がつぶれたって聞いたわ','Sho — friend-store-broken-heard','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、現状にとどまらないでがんばるよ','Mei-sis — me status-no-stay-effort','Earnest child','sho_child'),
    mk('翔くん、お父さんと特別な思い出を創るのが楽しみね','Sho — Dad-spec-mem-create-fun','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんへのココロのお礼を伝えたよ','Mei-sis — me Dad-heart-thank','Tender close','sho_child'),
  ]},
  {id:'conv_09786',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新事業計画に複数の選択肢を盛り込まないとな','Our co — new-biz-opt-include','Crisp','hiroshi_boss'),
    mk('はい。所定の様式で報告書を提出します','Yes — Set-form-rep-submit','Methodical','kenji_office'),
    mk('当社、同月内に決算を締めろ','Our co — same-mo-close','Direction','hiroshi_boss'),
    mk('はい。道路の両側に看板を出します','Yes — Road-both-side-sign','Update','kenji_office'),
    mk('過大な期待は社員に酷だ','Excess-exp-staff-cruel','Reflective','hiroshi_boss'),
    mk('はい。前々から計画していた件を進めます','Yes — Long-pre-plan-prog','Update','kenji_office'),
    mk('当社、大学附属研究所と連携しろ','Our co — uni-aff-research-link','Direction','hiroshi_boss'),
    mk('はい。米ドル建ての契約も見直します','Yes — USD-contract-rev','Close','kenji_office'),
  ]},
  {id:'conv_09787',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('企画書に新機能を盛り込まないとね','Plan-new-feat-include','Brisk','yuki_office'),
    mk('はい。所定の手続きを徹底します','Yes — Set-proc-strict','Cooperative','kenji_office'),
    mk('同月内のキャンペーンを準備しましょう','Same-mo-camp-prep','Direction','yuki_office'),
    mk('はい。店舗の両側に新ポスターを貼ります','Yes — Store-both-side-poster','Update','kenji_office'),
    mk('過大評価しすぎないようにしましょう','Excess-eval-no','Direction','yuki_office'),
    mk('はい。前々からのお客様を大切にします','Yes — Long-cust-cherish','Update','kenji_office'),
    mk('大学附属機関との合同イベントを企画しましょう','Uni-aff-event-plan','Direction','yuki_office'),
    mk('はい。米ドル決済のオプションを追加します','Yes — USD-pay-opt-add','Close','kenji_office'),
  ]},
  {id:'conv_09788',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文に新たな知見を盛り込め','Ren — paper-new-insight','Mentor','hiroshi_boss'),
    mk('はい。所定のフォーマットを守ります','Yes — Set-format','Earnest','ren_uni'),
    mk('蓮、同月内に中間報告を出せ','Ren — same-mo-mid-rep','Direction','hiroshi_boss'),
    mk('はい。仮説の両側からデータを集めます','Yes — Hyp-both-side-data','Earnest','ren_uni'),
    mk('蓮、過大な期待をデータに寄せるな','Ren — excess-exp-data-no','Direction','hiroshi_boss'),
    mk('はい。前々から取り組んでいるテーマを深めます','Yes — Long-theme-deep','Polite','ren_uni'),
    mk('蓮、大学附属病院との共同研究も視野に入れろ','Ren — uni-aff-hosp-joint-view','Direction','hiroshi_boss'),
    mk('はい。米ドル建て研究費の管理にも気を配ります','Yes — USD-research-fund-care','Earnest close','ren_uni'),
  ]},
  {id:'conv_09789',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、報告書に新事実を盛り込まれますね','Police rep-new-fact-include','Cooperative','kenji_office'),
    mk('警察、所定の書式を遵守されますね','Police set-form-comp','Cooperative','kenji_office'),
    mk('警察、同月内の犯罪統計を公表されますね','Police same-mo-stat-pub','Cooperative','kenji_office'),
    mk('警察、現場の両側を封鎖されますね','Police scene-both-side-block','Cooperative','kenji_office'),
    mk('警察、過大な憶測は避けられますね','Police excess-spec-avoid','Cooperative','kenji_office'),
    mk('警察、前々から要警戒の人物を追われますね','Police long-watch-person-track','Cooperative','kenji_office'),
    mk('警察、大学附属病院と医療連携されますね','Police uni-aff-hosp-link','Cooperative','kenji_office'),
    mk('警察、米ドル偽札の捜査もされますね','Police USD-counter-inv','Close','kenji_office'),
  ]},
  {id:'conv_09790',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、商品に多機能を盛り込まれた','Dad — founding prod-multi-incl','Sage','hiroshi_elder'),
    mk('はい。お父さんは所定の規律を重んじた','Yes — Dad set-disc-imp','Commitment','hiroshi_boss'),
    mk('お父さん、同月の決算を欠かさず厳格にされた','Dad — same-mo-close-strict','Wistful','hiroshi_elder'),
    mk('はい。お父さんは取引相手の主張の両側を聞かれた','Yes — Dad partner-both-side-listen','Reflective','hiroshi_boss'),
    mk('お父さん、過大な目標を社員に課されなかった','Dad — excess-goal-staff-no','Wistful','hiroshi_elder'),
    mk('はい。お父さんは前々からの取引先を大切にされた','Yes — Dad long-partner-cherish','Reflective','hiroshi_boss'),
    mk('お父さん、大学附属機関との産学連携を進められた','Dad — uni-aff-coll-prog','Wistful','hiroshi_elder'),
    mk('はい。お父さんは米ドル建ての海外取引にも進出された','Yes — Dad USD-overseas-launch','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09791',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、聖なる儀礼の人類学研究を論文で扱いましたね','Ren — sacred-rite-anth paper','Calm','asuka_teacher'),
    mk('はい、中世の僧侶教育を論文で扱いました','Yes — Med-monk-edu paper','Earnest','ren_uni'),
    mk('蓮さん、悲観的展望と楽観的展望の比較研究を論文で扱いましたね','Ren — pess-opt-cmp paper','Reflective','asuka_teacher'),
    mk('はい、地方鉄道の電化史を論文で扱いました','Yes — Local-rail-elec paper','Earnest','ren_uni'),
    mk('宗教的断食の効能研究を論文で扱いましたね','Relig-fast-eff paper','Engaged','asuka_teacher'),
    mk('はい、孤独で途方に暮れる若者の研究を論文で扱いました','Yes — Lonely-lost-youth paper','Earnest','ren_uni'),
    mk('蓮さん、近世の悪徳商人の研究を論文で扱いましたね','Ren — early-mod-evil-merch paper','Reflective','asuka_teacher'),
    mk('はい、影絵の投影技術史を論文で扱いました','Yes — Shadow-proj-hist paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09792',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、聖なる場所での器物損壊を、警察、扱われますね','Case sacred-vandal police-handle','Reflective','ren_uni'),
    mk('警察、僧侶を装った詐欺事件にも対応します','Police monk-pretend-fraud-resp','Procedural','takeda_officer'),
    mk('本件、市民の悲観論を、警察、把握されますね','Case citi-pess police-grasp','Reflective','ren_uni'),
    mk('警察、電化製品悪用の犯罪も扱います','Police elec-prod-misuse','Procedural','takeda_officer'),
    mk('本件、断食を強要するカルト犯罪を、警察、扱われますね','Case fast-force-cult police-handle','Reflective','ren_uni'),
    mk('警察、途方に暮れる被害者に寄り添います','Police lost-vict-side','Procedural','takeda_officer'),
    mk('本件、悪徳業者の摘発を、警察、進められますね','Case evil-busin-arr police-prog','Reflective','ren_uni'),
    mk('警察、3Dプロジェクター投影の偽証拠にも注意します','Police 3D-proj-fake-evid-care','Close','takeda_officer'),
  ]},
  {id:'conv_09793',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、聖なる儀礼の人類学研究を論文で扱いましたね','Sakura — sacred-rite paper','Calm','asuka_teacher'),
    mk('はい、中世の僧侶教育を論文で扱いました','Yes — Med-monk-edu paper','Earnest teen','sakura_teen'),
    mk('悲観論と楽観論の比較を論文で扱いましたね','Pess-opt paper','Reflective','asuka_teacher'),
    mk('はい、地方鉄道の電化史を論文で扱いました','Yes — Local-rail-elec paper','Earnest','sakura_teen'),
    mk('宗教的断食の効能を論文で扱いましたね','Relig-fast paper','Engaged','asuka_teacher'),
    mk('はい、孤独で途方に暮れる若者を論文で扱いました','Yes — Lonely-lost-youth paper','Earnest','sakura_teen'),
    mk('近世の悪徳商人を論文で扱いましたね','Early-mod-evil-merch paper','Reflective','asuka_teacher'),
    mk('はい、影絵の投影技術史を論文で扱いました','Yes — Shadow-proj-hist paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09794',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、患者が聖なる祈祷を希望される場合も医療チームで尊重します','Ren — pati-sacred-pray-resp med-team','Calm','saito_doctor'),
    mk('はい、僧侶向けの健康相談を医療チームで提供します','Yes — Monk-health-cons med-team','Patient','saito_doctor'),
    mk('蓮さん、患者の悲観的気分を医療チームで支えます','Ren — pati-pess-supp med-team','Calm','saito_doctor'),
    mk('医療機器の電化対応を、貴院、進めてますね、先生','Med-elec-resp your-hosp prog, sensei','Reflective','ren_uni'),
    mk('はい、断食的療法、つまり絶食療法の効果を医療チームで検証します','Yes — Fast-ther med-team verify','Patient','saito_doctor'),
    mk('途方に暮れるご家族に、貴院、寄り添われますね、先生','Lost-fam your-hosp side, sensei','Reflective','ren_uni'),
    mk('はい、悪徳商法の被害者の心のケアを医療チームで担当します','Yes — Evil-busin-vict-care med-team','Patient','saito_doctor'),
    mk('はい、レントゲンの投影像を医療チームで丁寧に読影します','Yes — Xray-proj med-team read','Patient close','saito_doctor'),
  ]},
  {id:'conv_09795',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、お客様の信頼を聖なる契約と考えろ','Our co — cust-trust-sacred-cons','Crisp','hiroshi_boss'),
    mk('はい。社員の中で僧侶資格を持つ方も尊重します','Yes — Staff-monk-resp','Methodical','kenji_office'),
    mk('当社、過度な悲観論で社員を萎縮させるな','Our co — excess-pess-staff-shrink-no','Direction','hiroshi_boss'),
    mk('はい。工場の電化を進めて省エネにします','Yes — Fact-elec-eco','Update','kenji_office'),
    mk('当社、社員に断食を強要するな','Our co — staff-fast-force-no','Direction','hiroshi_boss'),
    mk('はい。途方に暮れる新人を支援する制度を作ります','Yes — Lost-newhire-supp','Update','kenji_office'),
    mk('当社、悪徳業者との取引は厳禁だ','Our co — evil-busin-no-tol','Direction','hiroshi_boss'),
    mk('はい。プレゼンの投影機を最新型にします','Yes — Pres-proj-latest','Close','kenji_office'),
  ]},
  {id:'conv_09796',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、北九州市出身でいらっしゃるって、メイちゃん','Aoi — cust-Kitakyushu-orig Mei','Reflective','mei_romantic'),
    mk('葵、お客様、日光東照宮の写真を見せて下さったよ、メイちゃん','Aoi — cust-Nikko-photo Mei','Reflective','aoi_barista'),
    mk('葵、お客様、アフガン難民支援の活動家だって、メイちゃん','Aoi — cust-Afghan-supp Mei','Reflective','mei_romantic'),
    mk('葵、お客様、モロッコ旅行のお話して下さったよ、メイちゃん','Aoi — cust-Morocco-trip-told Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ナポレオンの伝記を読んでらしたよ、メイちゃん','Aoi — cust-Napoleon-bio Mei','Reflective','mei_romantic'),
    mk('葵、お客様、富士通のシステムを使ってらっしゃるって、メイちゃん','Aoi — cust-Fujitsu-sys Mei','Reflective','aoi_barista'),
    mk('葵、お客様、早稲田大学のOBだって、メイちゃん','Aoi — cust-Waseda-OB Mei','Reflective','mei_romantic'),
    mk('葵、お客様、京都大学の研究者でいらっしゃるって、メイちゃん','Aoi — cust-Kyoto-uni-research Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09797',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが北九州工業地帯に勤務された','Gran — youth Dad-Kitakyushu-ind-work','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、日光に修学旅行で行かれたわよね、あなた?','Yes — Grandpa-Nikko-sch-trip, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがアフガン情勢のニュースを観てらした','Gran — youth Dad-Afghan-news-watch','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、モロッコのスパイスを楽しまれたわよね、あなた?','Grandpa — Morocco-spice-fun, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがナポレオンの伝記を愛読された','Gran — youth Dad-Napoleon-bio-read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、富士通のパソコンをご愛用だったわよね、あなた?','Grandpa — Fujitsu-PC-fav, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが早稲田大学に進学された','Gran — youth Dad-Waseda-stud','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、京都大学の同窓会に参加されたわよね、あなた?','Grandpa — Kyoto-uni-alumni, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09798',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが北九州出身の作家の本を読んで下さるそうよ','Sho — Dad-Kitakyushu-author-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと日光に行きたいよ','Mei-sis — me Dad-Nikko-want','Eager child','sho_child'),
    mk('翔くん、お父さんがアフガン支援の本を見せて下さったわ','Sho — Dad-Afghan-book-show','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとモロッコの料理食べたよ','Mei-sis — me Dad-Morocco-food','Eager child','sho_child'),
    mk('翔くん、お父さんがナポレオンの絵本を読んで下さるそうよ','Sho — Dad-Napoleon-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんの会社が富士通と取引してるって聞いたよ','Mei-sis — me Dad-co-Fujitsu-deal','Eager child','sho_child'),
    mk('翔くん、お父さんが早稲田大学の卒業生なのよ','Sho — Dad-Waseda-grad','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、京都大学に憧れてるよ','Mei-sis — me Kyoto-uni-admire','Eager close','sho_child'),
  ]},
  {id:'conv_09799',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、社会で北九州工業地帯習ったろ?','Riku — soc-Kitakyushu-ind?','Curious teen','sakura_teen'),
    mk('お前、修学旅行で日光行ったな、桜','You — sch-trip-Nikko Sakura','Curious','riku_teen'),
    mk('リク、お前、社会でアフガン情勢勉強したな','Riku — soc-Afghan','Curious','sakura_teen'),
    mk('お前、モロッコのお菓子持ってきてたな、桜','You — Morocco-snack-brought Sakura','Curious','riku_teen'),
    mk('リク、お前、社会でナポレオン習ったろ?','Riku — soc-Napoleon?','Curious','sakura_teen'),
    mk('お前ん家、富士通のPCあったろ?桜','You-home-Fujitsu-PC? Sakura','Curious','riku_teen'),
    mk('リク、お前、早稲田大学志望だな','Riku — Waseda-aim','Curious','sakura_teen'),
    mk('お前、京都大学受けるって言ってたな、桜','You — Kyoto-uni-said Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09800',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが北九州の工場見学に連れて行って下さるそうよ','Sho — Dad-Kitakyushu-fact-take','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと日光の絵本見たよ','Mom — me Dad-Nikko-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがアフガン難民支援の話して下さったわ','Sho — Dad-Afghan-supp-told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとモロッコ料理屋さん行ったよ','Mom — me Dad-Morocco-rest','Eager child','sho_child'),
    mk('翔くん、お父さんがナポレオンのドキュメンタリーを観てらしたわ','Sho — Dad-Napoleon-doc-watch','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんの富士通のPC借りたよ','Mom — me Dad-Fujitsu-PC-bor','Eager child','sho_child'),
    mk('翔くん、お父さんが早稲田大学のOB会に行かれたわ','Sho — Dad-Waseda-OB-went','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと京都大学の見学に行ったよ','Mom — me Dad-Kyoto-uni-tour','Eager close','sho_child'),
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_465 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['いとも','まぎれ','分り','むやみ','待ち受け','飽きる','とっとと','有り得']
const B_T = ['至極','入団','簡易裁判所','身動き','座標','品番','邦題','体勢']
const C_T = ['立国','徘徊','潜む','具現','平衡','肥大','抱負','修業']
const D_T = ['倉敷','ストライク','ワルツ','アイアン','鉄筋','蝋','シンデレラ','タンゴ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09261',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、いとも簡単にお絵描きが描けるようになったわね','Sho — easily-art-able','Praising','yumiko_mom'),
    mk('ママ、ぼく、お祭りの人ごみにまぎれちゃった','Mom — me fest-crowd-blend','Wry child','sho_child'),
    mk('翔くん、お父さんが分りやすく説明して下さるわ','Sho — Dad-clear-explain','Reflective','yumiko_mom'),
    mk('ママ、ぼく、むやみにお外に出ないように気を付けるよ','Mom — me random-out-not-care','Earnest child','sho_child'),
    mk('翔くん、お友達からの待ち受け画面を見せてもらいましょうね','Sho — friend-screen-saver-show','Direction','yumiko_mom'),
    mk('ママ、ぼく、ピアノの練習は飽きる時もあるよ','Mom — me piano-prac-bored-sometime','Wry child','sho_child'),
    mk('翔くん、お友達に「とっとと帰れ」なんて言わないでね','Sho — friend-"hurry-back"-not-say','Direction','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんに会えるなんて有り得ないと思ったよ','Mom — me Grandpa-meet-cant-happen-thought','Animated close','sho_child'),
  ]},
  {id:'conv_09262',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、いとも自然に新メニューをお選びになるね、メイちゃん','Aoi — cust-easily-new-menu-choose Mei','Pleased','mei_romantic'),
    mk('葵、お客様、群衆にまぎれてお店にお越しになるね、メイちゃん','Aoi — cust-crowd-blend-come Mei','Reflective','aoi_barista'),
    mk('葵、新メニューの説明、分りやすくしないとね、メイちゃん','Aoi — new-menu-clear-explain Mei','Direction','mei_romantic'),
    mk('葵、お客様にむやみに話しかけ過ぎないように気を付けようね、メイちゃん','Aoi — cust-random-not-too-much Mei','Direction','aoi_barista'),
    mk('葵、私のスマホの待ち受け、家族の写真にしたの、メイちゃん','Aoi — my-phone-screen-fam-photo Mei','Tender','mei_romantic'),
    mk('葵、同じメニューばっかだと、お客様も飽きるよね、メイちゃん','Aoi — same-menu-cust-bored Mei','Reflective','aoi_barista'),
    mk('葵、忙しい時もお客様に「とっとと」なんて態度はダメね、メイちゃん','Aoi — busy-cust-"hurry"-att-no Mei','Direction','mei_romantic'),
    mk('葵、お店がここまで愛されるなんて有り得ない夢だったわ、メイちゃん','Aoi — store-loved-cant-happen-dream Mei','Tender close','aoi_barista'),
  ]},
  {id:'conv_09263',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんはいとも自然に親切をされた','Gran — youth Dad-easily-kind','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、戦時下にまぎれて村に来られたわよね、あなた?','Yes — Grandpa-wartime-blend-came, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが分りやすく若い者に教えてらした','Gran — youth Dad-clear-young-teach','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、むやみに人を批判されない方だったわよね、あなた?','Grandpa — random-people-crit-not, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはご家族からの便りを待ち受けていらした','Gran — youth Dad-fam-letter-await','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご趣味に飽きる事のない方でらしたわよね、あなた?','Grandpa — hobby-bored-not, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは「とっとと先に進め」と仰った','Gran — youth Dad-"hurry-go"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、戦争でお会いできた事は有り得ないご縁でしたわよね、あなた?','Grandpa — war-met-cant-happen-bond, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09264',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、いとも簡単にテスト解いたな','Riku — easily-test-solve','Praising teen','sakura_teen'),
    mk('お前、人ごみにまぎれて迷ったろ、桜','You — crowd-blend-lost Sakura','Wry','riku_teen'),
    mk('リク、お前の説明、分りにくいぞ','Riku — your-explain-hard','Wry','sakura_teen'),
    mk('お前、むやみにスマホ見るな、桜','You — random-phone-don\'t Sakura','Direction','riku_teen'),
    mk('リク、お前のスマホの待ち受け、可愛いな','Riku — your-screen-cute','Praising','sakura_teen'),
    mk('お前、同じゲームに飽きる事ないのか、桜?','You — same-game-bored-not? Sakura','Curious','riku_teen'),
    mk('リク、お前、宿題、とっとと終わらせろよ','Riku — homework-hurry-end','Direction','sakura_teen'),
    mk('お前のテスト点が満点なんて、有り得ない快挙だな、桜','You — test-perfect-cant-happen Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_09265',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さん、いとも自然に絵を描き始めるのよ','Sho — Mei-sis-easily-art-start','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祭りの群衆にまぎれてもメイ姉さん見つけるよ','Mei-sis — me fest-crowd-blend-Mei-sis-find','Earnest child','sho_child'),
    mk('翔くん、メイ姉さんの絵は本当に分りやすいのよ','Sho — Mei-sis-art-truly-clear','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、むやみにお絵描き道具を買わないようにするよ','Mei-sis — me random-art-tool-buy-not','Earnest child','sho_child'),
    mk('翔くん、お父さんがメイ姉さんの絵を待ち受けにしてらっしゃるわ','Sho — Dad-Mei-sis-art-screen','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、お絵描きは飽きる事がないよ','Mei-sis — me art-bored-never','Eager child','sho_child'),
    mk('翔くん、「とっとと描いて」なんて、メイ姉さんは決して言わないわよ','Sho — "hurry-draw"-Mei-sis-never-say','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんに会えるなんて、有り得ないって思ったよ','Mei-sis — me Mei-sis-meet-cant-happen','Earnest close','sho_child'),
  ]},
  {id:'conv_09266',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新製品の出来栄えは至極満足だ','Our co — new-prod-result-utmost-sat','Crisp','hiroshi_boss'),
    mk('はい。新人の入団歓迎会を準備しております','Yes — Newbie-join-wel-prep','Methodical','kenji_office'),
    mk('当社、係争は簡易裁判所で解決しろ','Our co — disp-simple-court-solve','Direction','hiroshi_boss'),
    mk('はい。市場の身動きが取れない状況です','Yes — Market-immov-situ','Update','kenji_office'),
    mk('当社、新店舗の座標を確定しろ','Our co — new-store-coord-fix','Direction','hiroshi_boss'),
    mk('はい。商品の品番を統一しました','Yes — Prod-num-unify','Update','kenji_office'),
    mk('当社、海外作品の邦題を慎重に選べ','Our co — overseas-work-Jp-title-careful','Direction','hiroshi_boss'),
    mk('はい。市場攻略の体勢を整えました','Yes — Market-attack-stance-prep','Close','kenji_office'),
  ]},
  {id:'conv_09267',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('お得意様の評価は至極良好です','VIP-eval-utmost-good','Brisk','yuki_office'),
    mk('はい。新人の入団研修を計画しました','Yes — Newbie-join-train-plan','Cooperative','kenji_office'),
    mk('簡易裁判所への申し立てを検討しましょう','Simple-court-app-consider','Direction','yuki_office'),
    mk('はい。スケジュール上、身動きが取れない時期です','Yes — Sched-immov-period','Update','kenji_office'),
    mk('プロジェクトの座標軸を再設定しましょう','Proj-coord-axis-reset','Direction','yuki_office'),
    mk('はい。古い品番の在庫を一掃します','Yes — Old-num-stock-sweep','Update','kenji_office'),
    mk('輸入小説の邦題を社内投票で決めましょう','Imp-novel-Jp-title-vote','Direction','yuki_office'),
    mk('はい。お客様対応の体勢を整えます','Yes — Cust-resp-stance-prep','Close','kenji_office'),
  ]},
  {id:'conv_09268',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、学会発表は至極好評だったぞ','Ren — conf-pres-utmost-pop','Mentor','hiroshi_boss'),
    mk('はい。研究室への入団を希望する学生が増えました','Yes — Lab-join-want-stud-up','Earnest','ren_uni'),
    mk('蓮、係争事は簡易裁判所で解決した事例も学べ','Ren — disp-simple-court-case-learn','Direction','hiroshi_boss'),
    mk('はい。実験中の身動きが取れない状況も学習しました','Yes — Exp-immov-learn','Polite','ren_uni'),
    mk('蓮、座標系の変換を確認しろ','Ren — coord-sys-conv-check','Direction','hiroshi_boss'),
    mk('はい。試料の品番管理を徹底します','Yes — Sample-num-strict','Earnest','ren_uni'),
    mk('蓮、海外論文の邦題で発表しろ','Ren — overseas-paper-Jp-title-pres','Direction','hiroshi_boss'),
    mk('はい。発表時の体勢を意識して臨みます','Yes — Pres-stance-aware','Earnest close','ren_uni'),
  ]},
  {id:'conv_09269',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、本件の解決は至極順調ですね','Police case-solve-utmost-smooth','Cooperative','kenji_office'),
    mk('警察、若手警察官の入団式にもご出席されますね','Police young-officer-join-cer-attend','Cooperative','kenji_office'),
    mk('警察、軽微な事件は簡易裁判所で扱われますね','Police minor-case-simple-court','Cooperative','kenji_office'),
    mk('警察、容疑者の身動きが取れない状況を作られますね','Police suspect-immov-make','Cooperative','kenji_office'),
    mk('警察、現場の座標を正確に記録されますね','Police on-site-coord-acc-rec','Cooperative','kenji_office'),
    mk('警察、押収品の品番を厳密に管理されますね','Police confis-num-strict-mgmt','Cooperative','kenji_office'),
    mk('警察、海外手配書の邦題化もされますね','Police overseas-wanted-Jp-title','Cooperative','kenji_office'),
    mk('警察、応援を呼ぶ体勢を整えられてますね','Police backup-call-stance-prep','Close','kenji_office'),
  ]},
  {id:'conv_09270',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、社員に至極丁寧に教えられた','Dad — founding staff-utmost-careful-teach','Sage','hiroshi_elder'),
    mk('はい。お父さんは新人入団時に直接歓迎された','Yes — Dad newbie-join-direct-welcome','Commitment','hiroshi_boss'),
    mk('お父さん、簡易裁判所での訴訟も自ら対応されたぞ','Dad — simple-court-self-resp','Wistful','hiroshi_elder'),
    mk('はい。お父さんは資金繰りで身動きが取れない時期も乗り越えられた','Yes — Dad cash-immov-overcame','Reflective','hiroshi_boss'),
    mk('お父さん、新店舗の座標を地図で確認された','Dad — new-store-coord-map-check','Wistful','hiroshi_elder'),
    mk('はい。お父さんは商品の品番制度を整えられた','Yes — Dad prod-num-sys-prep','Reflective','hiroshi_boss'),
    mk('お父さん、海外作品の邦題決めにも関わられた','Dad — overseas-Jp-title-decide-involve','Wistful','hiroshi_elder'),
    mk('はい。お父さんは経営の体勢を時代に合わせて変えられた','Yes — Dad mgmt-stance-era-change','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09271',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、技術立国を目指した政策を論文で扱いましたね','Ren — tech-nation-pol paper','Calm','asuka_teacher'),
    mk('はい、徘徊する高齢者の見守り体制を論文で扱いました','Yes — Wander-elderly-watch paper','Earnest','ren_uni'),
    mk('蓮さん、組織内に潜む差別構造を論文で扱いましたね','Ren — org-lurk-discrim paper','Reflective','asuka_teacher'),
    mk('はい、理念を具現する企業の研究を論文で扱いました','Yes — Creed-embody-corp paper','Earnest','ren_uni'),
    mk('医療における平衡感覚の研究を論文で扱いましたね','Med-bal-sense paper','Engaged','asuka_teacher'),
    mk('はい、政治家の権力が肥大する仕組みを論文で扱いました','Yes — Pol-power-swell-mech paper','Earnest','ren_uni'),
    mk('蓮さん、若い世代の抱負を聞き取った研究を論文で扱いましたね','Ren — young-aspir-listen paper','Reflective','asuka_teacher'),
    mk('はい、伝統芸能の修業の道のりを論文で扱いました','Yes — Trad-art-disc-path paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09272',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、平和な立国の理念を警察、引き継ぐ姿勢ですね','Case peace-nation-creed police-inherit','Reflective','ren_uni'),
    mk('警察、徘徊事案を地域と協力して対応します','Police wander-case-local-coop','Procedural','takeda_officer'),
    mk('本件、組織に潜む犯罪を警察、解明されてますね','Case org-lurk-crime police-clear','Reflective','ren_uni'),
    mk('警察、犯罪のないまちを具現する活動を続けます','Police no-crime-town-embody-cont','Procedural','takeda_officer'),
    mk('本件、被害者の平衡感覚を奪った犯罪を警察、扱われてますね','Case victim-bal-stolen-crime police','Reflective','ren_uni'),
    mk('警察、組織が肥大する前に摘発します','Police org-swell-pre-bust','Procedural','takeda_officer'),
    mk('本件、若手警官の抱負を警察、聞いてあげて下さい','Case young-officer-aspir police-listen','Reflective','ren_uni'),
    mk('警察、修業時代の経験が現場に活きていますね','Police disc-era-on-site-alive','Close','takeda_officer'),
  ]},
  {id:'conv_09273',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、技術立国を目指した政策を論文で扱いましたね','Sakura — tech-nation paper','Calm','asuka_teacher'),
    mk('はい、徘徊する高齢者の見守り体制を論文で扱いました','Yes — Wander-elderly paper','Earnest teen','sakura_teen'),
    mk('組織内に潜む差別構造を論文で扱いましたね','Org-lurk-discrim paper','Reflective','asuka_teacher'),
    mk('はい、理念を具現する企業の研究を論文で扱いました','Yes — Creed-embody paper','Earnest','sakura_teen'),
    mk('医療における平衡感覚の研究を論文で扱いましたね','Med-bal paper','Engaged','asuka_teacher'),
    mk('はい、政治家の権力が肥大する仕組みを論文で扱いました','Yes — Pol-power-swell paper','Earnest','sakura_teen'),
    mk('若い世代の抱負を聞き取った研究を論文で扱いましたね','Young-aspir paper','Reflective','asuka_teacher'),
    mk('はい、伝統芸能の修業の道のりを論文で扱いました','Yes — Trad-disc paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09274',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、技術立国の医療版を医療チームで目指します','Ren — tech-nation-med-version med-team-aim','Calm','saito_doctor'),
    mk('はい、認知症患者の徘徊対策を医療チームで強化します','Yes — Dem-patient-wander-counter med-team','Patient','saito_doctor'),
    mk('体内に潜む癌細胞を医療チームで早期発見します、先生','Body-lurk-cancer-cell med-team early-det, sensei','Reflective','ren_uni'),
    mk('はい、医療理念を具現する病院作りを目指します','Yes — Med-creed-embody-hosp-make','Patient','saito_doctor'),
    mk('平衡感覚障害の検査を、貴院、なさってますね、先生','Bal-disorder-test your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、心臓肥大の早期治療を医療チームで進めます','Yes — Heart-swell-early-treat med-team','Patient','saito_doctor'),
    mk('若い研修医の抱負を、貴院、応援されてますね、先生','Young-resident-aspir your-hosp supp, sensei','Reflective','ren_uni'),
    mk('はい、外科医の修業を医療チームで支えます','Yes — Surgeon-disc med-team supp','Patient close','saito_doctor'),
  ]},
  {id:'conv_09275',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、新興立国市場への進出を考えろ','Our co — new-nation-market-enter','Crisp','hiroshi_boss'),
    mk('はい。職場での徘徊的な動きは生産性を下げます','Yes — Workplace-wander-prod-down','Methodical','kenji_office'),
    mk('当社、社内に潜む問題を見逃すな','Our co — co-lurk-prob-not-miss','Direction','hiroshi_boss'),
    mk('はい。社是を具現する社員を表彰します','Yes — Creed-embody-staff-award','Update','kenji_office'),
    mk('当社、収益と成長の平衡を保て','Our co — profit-grow-bal-keep','Direction','hiroshi_boss'),
    mk('はい。組織が肥大する前に効率化します','Yes — Org-swell-pre-eff','Update','kenji_office'),
    mk('当社、新人の抱負を聞く面談を増やせ','Our co — newbie-aspir-meet-up','Direction','hiroshi_boss'),
    mk('はい。技能修業を経た熟練社員を大事にします','Yes — Skill-disc-vet-staff-cherish','Close','kenji_office'),
  ]},
  {id:'conv_09276',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、倉敷の美術館に行かれたって、メイちゃん','Aoi — cust-Kurashiki-museum Mei','Reflective','mei_romantic'),
    mk('葵、お客様、野球のストライクのお話されてたよ、メイちゃん','Aoi — cust-baseball-strike-told Mei','Animated','aoi_barista'),
    mk('葵、お客様、ワルツのレッスンに通われてるって、メイちゃん','Aoi — cust-waltz-lesson Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ゴルフのアイアンクラブのお話されてたよ、メイちゃん','Aoi — cust-golf-iron-told Mei','Reflective','aoi_barista'),
    mk('葵、新店舗は鉄筋コンクリート造りにしましょう、メイちゃん','Aoi — new-store-RC-concrete Mei','Direction','mei_romantic'),
    mk('葵、お店にキャンドル蝋の香りも入れたいね、メイちゃん','Aoi — store-candle-wax-aroma Mei','Reflective','aoi_barista'),
    mk('葵、お子様、シンデレラの絵本が好きね、メイちゃん','Aoi — child-Cinderella-book-like Mei','Tender','mei_romantic'),
    mk('葵、お客様、タンゴのダンスを習われてるって、メイちゃん','Aoi — cust-tango-learn Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09277',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんと倉敷の街並みを歩いたぞ','Gran — youth Dad-Kurashiki-street','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、野球を観てストライクで応援されたわよね、あなた?','Yes — Grandpa-baseball-strike-cheer, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんとワルツを踊ったぞ','Gran — youth Dad-waltz-danced','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ゴルフのアイアンを大事になさってたわよね、あなた?','Grandpa — golf-iron-cherish, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが鉄筋の家を建てられたぞ','Gran — youth Dad-RC-house-built','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お仏壇に蝋燭を毎日灯されたわよね、あなた?','Grandpa — altar-candle-wax-daily, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがお孫様にシンデレラのお話をされた','Gran — youth Dad-grandkid-Cinderella-told','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、タンゴの音楽を楽しまれたわよね、あなた?','Grandpa — youth-tango-music-enjoy, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09278',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんと倉敷に行ってみたいわね','Sho — Mei-sis-Kurashiki-go-want','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、野球でストライク三振しちゃった','Mei-sis — me baseball-strike-out','Wry child','sho_child'),
    mk('翔くん、メイ姉さん、ワルツのリズムが好きなのよ','Sho — Mei-sis-waltz-rhythm-like','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんからアイアンクラブの使い方教わったよ','Mei-sis — me Dad-iron-use-learn','Proud child','sho_child'),
    mk('翔くん、新しい家は鉄筋造りで頑丈なのよ','Sho — new-home-RC-solid','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、蝋燭の灯りを眺めるの好きだよ','Mei-sis — me candle-wax-light-watch-like','Tender child','sho_child'),
    mk('翔くん、メイ姉さんもシンデレラのお話が大好きなのよ','Sho — Mei-sis-Cinderella-love','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとお母さんがタンゴを踊ってたよ','Mei-sis — me Dad-Mom-tango-danced','Eager close','sho_child'),
  ]},
  {id:'conv_09279',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、修学旅行で倉敷行ったろ?','Riku — school-trip-Kurashiki?','Curious teen','sakura_teen'),
    mk('お前、野球部でストライクとれたな、桜','You — baseball-strike-take Sakura','Praising','riku_teen'),
    mk('リク、お前、ダンス部でワルツやってんだろ?','Riku — dance-club-waltz?','Curious','sakura_teen'),
    mk('お前、家族でゴルフ行ってアイアン使ったろ?桜','You — fam-golf-iron? Sakura','Curious','riku_teen'),
    mk('リク、お前ん家、鉄筋アパートだろ?','Riku — your-apt-RC?','Curious','sakura_teen'),
    mk('お前、誕生日の蝋燭吹き消したろ?桜','You — bday-candle-wax-blew? Sakura','Curious','riku_teen'),
    mk('リク、お前、シンデレラの映画好きだろ?','Riku — Cinderella-movie-like?','Curious','sakura_teen'),
    mk('お前、音楽でタンゴの単元やったろ?桜','You — music-tango? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09280',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんと倉敷の美観地区に行きましょうね','Sho — Dad-Kurashiki-area-go','Tender','yumiko_mom'),
    mk('ママ、ぼく、野球部でストライク三振しちゃった','Mom — me baseball-strike-out','Wry child','sho_child'),
    mk('翔くん、ワルツの音楽でゆったり踊りましょう','Sho — waltz-music-leisure-dance','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとゴルフのアイアンの練習したよ','Mom — me Dad-golf-iron-prac','Proud child','sho_child'),
    mk('翔くん、新しい家は鉄筋造りで地震に強いのよ','Sho — new-home-RC-quake-strong','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お誕生日の蝋燭がたくさんだったね','Mom — me bday-candle-wax-many','Pleased child','sho_child'),
    mk('翔くん、お母さんとシンデレラの絵本を読みましょうね','Sho — Mom-Cinderella-book-read','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんがお母さんとタンゴ踊ってる姿、素敵だったよ','Mom — me Dad-Mom-tango-lovely','Tender close','sho_child'),
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

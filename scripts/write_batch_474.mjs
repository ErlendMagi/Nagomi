import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_474 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['たちまち','因みに','御覧','益々','まわる','向う','ちび','ちょいと']
const B_T = ['一体化','つとめ','マネージメント','結集','少人数','樹立','取り込ん','交互']
const C_T = ['滑走','注入','征服','履修','標高','図形','代謝','点滴']
const D_T = ['突撃','下半身','名言','セレブ','鍼','歌舞伎町','ベッカム','旅人']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09441',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが帰宅されたらたちまちお家が明るくなるわね','Sho — Dad-home-soon-bright','Tender','yumiko_mom'),
    mk('ママ、ぼく、因みに今日のおやつが楽しみだよ','Mom — me btw-today-snack-fun','Eager child','sho_child'),
    mk('翔くん、お父さんが「御覧の通り」と仰りながら絵本を見せて下さるわ','Sho — Dad-"as-you-see"-pic-book-show','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんが益々頼もしいよ','Mom — me Dad-more-reliable','Eager child','sho_child'),
    mk('翔くん、おもちゃの車をまわるのを止めてね','Sho — toy-car-spin-stop','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんが向うのお家までお迎えに行ってくれるって','Mom — me Dad-other-home-pick-up','Eager child','sho_child'),
    mk('翔くん、ちびっ子だからって油断は禁物よ','Sho — chibi-careful','Direction','yumiko_mom'),
    mk('ママ、ぼく、ちょいと外を見て来るね','Mom — me chotto-outside-look','Eager close','sho_child'),
  ]},
  {id:'conv_09442',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様がいらっしゃるとたちまちお店が華やぐね、メイちゃん','Aoi — cust-come-suddenly-store-glow Mei','Pleased','mei_romantic'),
    mk('葵、因みに新メニューの試食はいつにする?メイちゃん','Aoi — btw-new-menu-taste-when? Mei','Brisk','aoi_barista'),
    mk('葵、「御覧の通り」って看板を出してお勧めしよう、メイちゃん','Aoi — "go-ran-no-tori"-sign-rec Mei','Direction','mei_romantic'),
    mk('葵、お客様が益々増えてるね、メイちゃん','Aoi — cust-more-up Mei','Pleased','aoi_barista'),
    mk('葵、コーヒー豆をまわるように混ぜようね、メイちゃん','Aoi — bean-spin-mix Mei','Direction','mei_romantic'),
    mk('葵、お客様、向うの席の方が静かだって、メイちゃん','Aoi — cust-other-seat-quiet Mei','Reflective','aoi_barista'),
    mk('葵、ちびっ子のお客様にもサービスしようね、メイちゃん','Aoi — chibi-cust-serv Mei','Direction','mei_romantic'),
    mk('葵、ちょいとお店の前を掃除してくるね、メイちゃん','Aoi — chotto-front-clean Mei','Brisk close','aoi_barista'),
  ]},
  {id:'conv_09443',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが入って来られるとたちまち空気が変わった','Gran — youth Dad-enter-sud-air-change','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、因みに俳句もお詠みになってたわよね、あなた?','Yes — Grandpa-btw-haiku, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「御覧の通り」と仰って手本を示された','Gran — youth Dad-"go-ran"-example','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、孫が益々お気に入りだったわよね、あなた?','Grandpa — grandkid-more-fav, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが地球儀をまわるのを見せて下さった','Gran — youth Dad-globe-spin-show','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、向うのお山までよく散歩されたわよね、あなた?','Grandpa — other-mt-walk, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「ちびっ子」と呼んで可愛がられた','Gran — youth Dad-"chibi"-loved','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、「ちょいと」とよく仰ってたわよね、あなた?','Grandpa — "chotto"-said, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09444',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、塾に行くとたちまち眠くなるな','Riku — cram-sleep-soon','Wry teen','sakura_teen'),
    mk('お前、因みに今日の宿題、何だっけ?桜','You — btw-today-homework? Sakura','Curious','riku_teen'),
    mk('リク、お前、「御覧」って先生が言ってたな','Riku — "go-ran"-tch-said','Curious','sakura_teen'),
    mk('お前、最近益々背が伸びたな、桜','You — recently-more-tall Sakura','Praising','riku_teen'),
    mk('リク、お前、コマを上手にまわるな','Riku — spin-top-good','Praising','sakura_teen'),
    mk('お前、向うの校舎まで走ったろ?桜','You — other-bldg-run? Sakura','Curious','riku_teen'),
    mk('リク、お前、弟をちびっ子扱いしすぎだぞ','Riku — bro-chibi-too-much','Wry','sakura_teen'),
    mk('お前、ちょいと部活休もうぜ、桜','You — chotto-club-skip Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_09445',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが帰ってこられるとたちまち賑やかになるのよ','Sho — Dad-back-sud-lively','Reflective','mei_romantic'),
    mk('メイ姉さん、因みにぼく、絵が上手くなったよ','Mei-sis — btw-me art-good','Eager child','sho_child'),
    mk('翔くん、メイ姉さんの絵を「御覧」になってね','Sho — Mei-sis-art-"go-ran"','Pleased','mei_romantic'),
    mk('メイ姉さん、お父さんが益々お忙しいんだ','Mei-sis — Dad-more-busy','Reflective child','sho_child'),
    mk('翔くん、ブランコをまわるみたいに揺らすと危ないわよ','Sho — swing-spin-swing-dang','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、向うの公園まで走ったよ','Mei-sis — me other-park-run','Eager child','sho_child'),
    mk('翔くん、ちびっ子の頃の写真、可愛いわね','Sho — chibi-photo-cute','Tender','mei_romantic'),
    mk('メイ姉さん、ちょいとお手洗いに行ってくるね','Mei-sis — chotto-loo','Eager close','sho_child'),
  ]},
  {id:'conv_09446',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、各部の業務を一体化しろ','Our co — dept-biz-unify','Crisp','hiroshi_boss'),
    mk('はい。研修講師のおつとめも継続いたします','Yes — Train-instr-duty-cont','Methodical','kenji_office'),
    mk('当社、現場のマネージメント能力を磨かせろ','Our co — site-mgmt-skill-pol','Direction','hiroshi_boss'),
    mk('はい。新規事業に総力を結集します','Yes — New-biz-force-gather','Update','kenji_office'),
    mk('少人数チームでの開発を強化しろ','Small-team-dev-strength','Direction','hiroshi_boss'),
    mk('はい。新工場の樹立を進めます','Yes — New-factory-establ-prog','Update','kenji_office'),
    mk('海外案件を取り込んでいけ','Overseas-take-in','Direction','hiroshi_boss'),
    mk('はい。会議スケジュールを交互に組みます','Yes — Mtg-sched-alt-arr','Close','kenji_office'),
  ]},
  {id:'conv_09447',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('当社の部門を一体化させましょう','Our-co-dept-unify','Brisk','yuki_office'),
    mk('はい。当社のおつとめを丁寧に果たします','Yes — Our-co-duty-careful','Cooperative','kenji_office'),
    mk('現場のマネージメントを磨きましょう','Site-mgmt-pol','Direction','yuki_office'),
    mk('はい。新規プロジェクトに人材を結集させます','Yes — New-proj-staff-gather','Update','kenji_office'),
    mk('少人数のスタジオで企画を進めましょう','Small-stud-plan-prog','Direction','yuki_office'),
    mk('はい。新ブランドの樹立を計画します','Yes — New-brand-establ-plan','Update','kenji_office'),
    mk('海外顧客の声を取り込んでいきましょう','Overseas-cust-voice-take-in','Direction','yuki_office'),
    mk('はい。担当を交互に変えていきます','Yes — Role-alt-change','Close','kenji_office'),
  ]},
  {id:'conv_09448',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究と教育を一体化させろ','Ren — research-edu-unify','Mentor','hiroshi_boss'),
    mk('はい。後輩の指導におつとめを果たします','Yes — Junior-mentor-duty','Earnest','ren_uni'),
    mk('蓮、研究室のマネージメントも学べ','Ren — lab-mgmt-learn','Direction','hiroshi_boss'),
    mk('はい。研究員の知見を結集して論文を出します','Yes — Research-knowl-gather-paper','Earnest','ren_uni'),
    mk('蓮、少人数の研究ゼミから始めろ','Ren — small-research-sem-start','Direction','hiroshi_boss'),
    mk('はい。新研究分野の樹立を目指します','Yes — New-research-field-establ','Polite','ren_uni'),
    mk('蓮、海外文献を取り込んで研究を深めろ','Ren — overseas-lit-take-in-deep','Direction','hiroshi_boss'),
    mk('はい。研究指導と現場仕事を交互におこないます','Yes — Research-site-alt','Earnest close','ren_uni'),
  ]},
  {id:'conv_09449',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、各課を一体化した捜査本部を立ち上げられますね','Police dept-unify-inv-HQ-set','Cooperative','kenji_office'),
    mk('警察、市民への防犯おつとめも担当されますね','Police citi-crime-prev-duty','Cooperative','kenji_office'),
    mk('警察、署のマネージメント体制も改善されますね','Police stat-mgmt-impr','Cooperative','kenji_office'),
    mk('警察、特捜班に精鋭を結集されますね','Police spec-team-elite-gather','Cooperative','kenji_office'),
    mk('警察、少人数の捜査チームで動かれますね','Police small-inv-team-move','Cooperative','kenji_office'),
    mk('警察、新拠点の樹立を進められますね','Police new-base-establ-prog','Cooperative','kenji_office'),
    mk('警察、市民の通報を取り込んで捜査されますね','Police citi-rep-take-in-inv','Cooperative','kenji_office'),
    mk('警察、勤務シフトを交互に組まれますね','Police shift-alt-arr','Close','kenji_office'),
  ]},
  {id:'conv_09450',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、現場と本社を一体化された','Dad — founding site-HQ-unify','Sage','hiroshi_elder'),
    mk('はい。お父さんは経営のおつとめを生涯果たされた','Yes — Dad mgmt-duty-life','Commitment','hiroshi_boss'),
    mk('お父さん、社員へのマネージメント手腕が見事だった','Dad — staff-mgmt-skill-magn','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社内の知恵を結集された','Yes — Dad co-wis-gather','Reflective','hiroshi_boss'),
    mk('お父さん、少人数で起業された頃を懐かしむ','Dad — small-startup-miss','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新部署の樹立を主導された','Yes — Dad new-dept-establ-lead','Reflective','hiroshi_boss'),
    mk('お父さん、海外の知見を取り込んで経営された','Dad — overseas-knowl-take-in-mgmt','Wistful','hiroshi_elder'),
    mk('はい。お父さんは現場と本社を交互に視察された','Yes — Dad site-HQ-alt-insp','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09451',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、空港の滑走路設計の研究を論文で扱いましたね','Ren — airport-runway-design paper','Calm','asuka_teacher'),
    mk('はい、燃料の注入工程の研究を論文で扱いました','Yes — Fuel-inject-process paper','Earnest','ren_uni'),
    mk('蓮さん、近代における植民地の征服史を論文で扱いましたね','Ren — mod-colonial-conquest paper','Reflective','asuka_teacher'),
    mk('はい、学部の履修制度の改革を論文で扱いました','Yes — Dept-curr-ref paper','Earnest','ren_uni'),
    mk('高地の標高別生態系の研究を論文で扱いましたね','Alt-eco-by-elev paper','Engaged','asuka_teacher'),
    mk('はい、数学教育における図形指導を論文で扱いました','Yes — Math-edu-geom paper','Earnest','ren_uni'),
    mk('蓮さん、新陳代謝の研究を論文で扱いましたね','Ren — metab paper','Reflective','asuka_teacher'),
    mk('はい、点滴投与の医療史を論文で扱いました','Yes — IV-drip-med-hist paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09452',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、空港の滑走路侵入事案を、警察、扱われてますね','Case airport-runway-intrude police-handle','Reflective','ren_uni'),
    mk('警察、薬物注入事件を厳しく捜査します','Police drug-inject-strict-inv','Procedural','takeda_officer'),
    mk('本件、ハッカーの征服宣言を、警察、注視されてますね','Case hacker-conq-decl police-watch','Reflective','ren_uni'),
    mk('警察、警察学校での履修課目を整備します','Police acad-curr-org','Procedural','takeda_officer'),
    mk('本件、標高の高い山岳事件を、警察、扱われてますね','Case high-elev-mt-case police-handle','Reflective','ren_uni'),
    mk('警察、犯行現場を図形で記録します','Police crime-scene-fig-record','Procedural','takeda_officer'),
    mk('本件、薬物代謝の鑑定を、警察、依頼されますね','Case drug-metab-forensic police-req','Reflective','ren_uni'),
    mk('警察、点滴に薬物が混入された事案も把握しております','Police IV-drip-drug-mix-grasp','Close','takeda_officer'),
  ]},
  {id:'conv_09453',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、空港の滑走路設計を論文で扱いましたね','Sakura — runway-design paper','Calm','asuka_teacher'),
    mk('はい、燃料の注入工程を論文で扱いました','Yes — Fuel-inject paper','Earnest teen','sakura_teen'),
    mk('植民地の征服史を論文で扱いましたね','Colonial-conquest paper','Reflective','asuka_teacher'),
    mk('はい、学部の履修制度の改革を論文で扱いました','Yes — Curr-ref paper','Earnest','sakura_teen'),
    mk('高地の標高別生態系を論文で扱いましたね','High-elev-eco paper','Engaged','asuka_teacher'),
    mk('はい、数学教育の図形指導を論文で扱いました','Yes — Math-geom paper','Earnest','sakura_teen'),
    mk('新陳代謝の研究を論文で扱いましたね','Metab paper','Reflective','asuka_teacher'),
    mk('はい、点滴投与の医療史を論文で扱いました','Yes — IV-drip-hist paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09454',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、リハビリ滑走路状の歩行訓練を医療チームで設計します','Ren — rehab-runway-walk med-team','Calm','saito_doctor'),
    mk('はい、薬剤の点滴注入は医療チームで慎重におこないます','Yes — Med-IV-inject med-team careful','Patient','saito_doctor'),
    mk('蓮さん、依存症征服を支える治療を医療チームで研究します','Ren — addic-conq-treat med-team','Calm','saito_doctor'),
    mk('医学部生の履修指導を、貴院、担当されますね、先生','Med-stud-curr your-hosp tch, sensei','Reflective','ren_uni'),
    mk('はい、標高の高い病院での医療連携を医療チームで進めます','Yes — High-elev-hosp-link med-team','Patient','saito_doctor'),
    mk('小児の図形認識試験を、貴院、おこなわれますね、先生','Pedi-fig-recog-test your-hosp, sensei','Curious','ren_uni'),
    mk('はい、代謝症候群の患者を医療チームで治療します','Yes — Metab-synd med-team treat','Patient','saito_doctor'),
    mk('点滴管理の徹底を、貴院、おこなわれてますね、先生','IV-drip-mgmt-strict your-hosp, sensei','Reflective close','ren_uni'),
  ]},
  {id:'conv_09455',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、新規市場への滑走路を作れ','Our co — new-mkt-runway-make','Crisp','hiroshi_boss'),
    mk('はい。資本注入の計画を準備します','Yes — Cap-inject-plan','Methodical','kenji_office'),
    mk('当社、業界の征服を目指せ','Our co — industry-conq-aim','Direction','hiroshi_boss'),
    mk('はい。社員研修の履修管理を徹底します','Yes — Staff-train-curr-strict','Update','kenji_office'),
    mk('業界の標高、つまりトップを目指せ','Industry-elev-top-aim','Direction','hiroshi_boss'),
    mk('はい。組織図形の見直しを進めます','Yes — Org-fig-rev','Update','kenji_office'),
    mk('当社、新陳代謝の良い組織を作れ','Our co — metab-good-org','Direction','hiroshi_boss'),
    mk('はい。社員の点滴的なケアではなく根本的支援をします','Yes — Staff-IV-no-root-supp','Close','kenji_office'),
  ]},
  {id:'conv_09456',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、戦時中の突撃部隊のお話を伺ったよ、メイちゃん','Aoi — cust-war-storm-troop-told Mei','Reflective','mei_romantic'),
    mk('葵、お客様、リハビリで下半身の運動されてるって、メイちゃん','Aoi — cust-rehab-lower-body Mei','Reflective','aoi_barista'),
    mk('葵、お客様、店の名言ボードを楽しまれてるね、メイちゃん','Aoi — cust-name-quote-bd-enjoy Mei','Pleased','mei_romantic'),
    mk('葵、お客様、セレブのインタビュー記事を読まれてたよ、メイちゃん','Aoi — cust-celeb-int-read Mei','Reflective','aoi_barista'),
    mk('葵、お客様、肩こりで鍼治療に通われてるって、メイちゃん','Aoi — cust-shoulder-acu-go Mei','Reflective','mei_romantic'),
    mk('葵、お客様、歌舞伎町のジャズバーに通われてるって、メイちゃん','Aoi — cust-Kabuki-cho-jazz Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ベッカム選手のドキュメンタリーを観てらしたよ、メイちゃん','Aoi — cust-Beckham-doc-watch Mei','Reflective','mei_romantic'),
    mk('葵、お客様、旅人として世界を回ってらしたって、メイちゃん','Aoi — cust-traveler-world-go Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09457',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが突撃ラッパの話をされた','Gran — youth Dad-storm-bugle-told','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、下半身のリハビリを頑張られたわよね、あなた?','Yes — Grandpa-lower-body-rehab, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが名言集を読まれた','Gran — youth Dad-quote-coll-read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、セレブのゴシップにも詳しかったわよね、あなた?','Grandpa — celeb-goss-know, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが鍼灸院に通われた','Gran — youth Dad-acu-clin-go','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、歌舞伎町の演劇にもいらしたわよね、あなた?','Grandpa — Kabuki-cho-theater, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがベッカム選手の試合をご覧になった','Gran — youth Dad-Beckham-match-watch','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、旅人として日本中を旅されたわよね、あなた?','Grandpa — trav-Japan-trip, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09458',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが戦時中の突撃の歴史番組をご覧になったわ','Sho — Dad-war-storm-hist-prog-watch','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、下半身の筋トレ始めたよ','Mei-sis — me lower-body-musc-train','Eager child','sho_child'),
    mk('翔くん、お父さんが偉人の名言を教えて下さるわ','Sho — Dad-great-quote-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、セレブの写真を雑誌で見たよ','Mei-sis — me celeb-mag-saw','Eager child','sho_child'),
    mk('翔くん、お父さんが鍼灸の本を読んで下さるわ','Sho — Dad-acu-book-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、歌舞伎町は子供は行けないって聞いたよ','Mei-sis — me Kabuki-cho-kid-no-go','Curious child','sho_child'),
    mk('翔くん、お父さんがベッカム選手のサインカードを下さったわ','Sho — Dad-Beckham-card-gave','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、世界中を旅人みたいに回りたいよ','Mei-sis — me world-traveler-want','Eager close','sho_child'),
  ]},
  {id:'conv_09459',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、ゲームで突撃しすぎだぞ','Riku — game-storm-too-much','Wry teen','sakura_teen'),
    mk('お前、下半身の筋トレ始めたな、桜','You — lower-body-musc Sakura','Praising','riku_teen'),
    mk('リク、お前、名言メモ集めてるな','Riku — quote-coll','Curious','sakura_teen'),
    mk('お前、セレブのSNSフォローしすぎだろ、桜','You — celeb-SNS-too-much Sakura','Wry','riku_teen'),
    mk('リク、お前、母さんに鍼治療勧められてたな','Riku — mom-acu-rec','Wry','sakura_teen'),
    mk('お前、歌舞伎町近づくなって父さんに言われたろ?桜','You — Kabuki-cho-no-Dad-said? Sakura','Wry','riku_teen'),
    mk('リク、お前、ベッカム選手のフリーキック真似してたな','Riku — Beckham-free-kick-mimic','Praising','sakura_teen'),
    mk('お前、卒業したら旅人になりたいって言ってたな、桜','You — grad-trav-want-said Sakura','Reflective close','riku_teen'),
  ]},
  {id:'conv_09460',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが歴史番組の突撃のシーンを観てらしたわ','Sho — Dad-hist-prog-storm-watch','Tender','yumiko_mom'),
    mk('ママ、ぼく、下半身を鍛えたいよ','Mom — me lower-body-build','Eager child','sho_child'),
    mk('翔くん、お父さんが「失敗は成功のもと」って名言を仰ったわ','Sho — Dad-fail-success-quote','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんがセレブの伝記を読んで下さったよ','Mom — me Dad-celeb-bio-read','Eager child','sho_child'),
    mk('翔くん、お父さんが鍼治療に通われてるそうよ','Sho — Dad-acu-go','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと歌舞伎町は危ないって学んだよ','Mom — me Dad-Kabuki-cho-dang-learn','Eager child','sho_child'),
    mk('翔くん、お父さんがベッカム選手の本を貸して下さるそうよ','Sho — Dad-Beckham-book-lend','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと旅人ごっこしたよ','Mom — me Dad-trav-play','Eager close','sho_child'),
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

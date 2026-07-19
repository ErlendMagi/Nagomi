import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_478 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['伴わ','望め','不運','奨め','ドンドン','浮かび上がっ','不機嫌','塗る']
const B_T = ['打ち切り','有価','作り上げる','使い捨て','版元','レスポンス','率先','囲む']
const C_T = ['口語','前衛','性欲','優勢','伯爵','健常','皇位','綱領']
const D_T = ['挙式','原宿','マフィア','マドリード','ハローワーク','フェラーリ','軽井沢','種子']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09521',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが伴わずにお出かけは禁止よ','Sho — Dad-tomonau-not-out-no','Direction','yumiko_mom'),
    mk('ママ、ぼく、テストで百点を望めるよう頑張るね','Mom — me test-perf-wish-effort','Eager child','sho_child'),
    mk('翔くん、お友達の不運な出来事に寄り添ってあげましょうね','Sho — friend-bad-luck-side','Direction','yumiko_mom'),
    mk('ママ、お父さんが新しいゲームを奨めて下さったよ','Mom — Dad-new-game-rec','Eager child','sho_child'),
    mk('翔くん、ドンドン階段を昇るのは危ないわよ','Sho — dondon-stair-up-dang','Direction','yumiko_mom'),
    mk('ママ、ぼく、お風呂で気持ちが浮かび上がってきたよ','Mom — me bath-feel-float-up','Eager child','sho_child'),
    mk('翔くん、お父さんが今日は不機嫌そうだから静かにしようね','Sho — Dad-today-bad-mood-quiet','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんと一緒に絵に色を塗るのが好きだよ','Mom — me Dad-art-color-paint-like','Eager close','sho_child'),
  ]},
  {id:'conv_09522',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、お子様を伴わずにいらしてたよ、メイちゃん','Aoi — cust-kid-tomonau-not-came Mei','Reflective','mei_romantic'),
    mk('葵、お客様、当店の新メニューに望めるものがあるって、メイちゃん','Aoi — cust-new-menu-wish Mei','Reflective','aoi_barista'),
    mk('葵、お客様、不運な日常を癒しに来て下さるって、メイちゃん','Aoi — cust-bad-luck-life-heal Mei','Tender','mei_romantic'),
    mk('葵、お客様にお気に入りの本を奨めてみたよ、メイちゃん','Aoi — cust-fav-book-rec Mei','Reflective','aoi_barista'),
    mk('葵、お店、ドンドンお客様が増えてるね、メイちゃん','Aoi — store-dondon-cust-up Mei','Pleased','mei_romantic'),
    mk('葵、お客様の表情が浮かび上がってくる照明にしようね、メイちゃん','Aoi — cust-face-float-up-light Mei','Direction','aoi_barista'),
    mk('葵、お客様、お疲れで不機嫌そうな時もあるね、メイちゃん','Aoi — cust-tired-mood-bad-times Mei','Reflective','mei_romantic'),
    mk('葵、店内の壁を綺麗に塗る計画よね、メイちゃん','Aoi — wall-clean-paint-plan Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_09523',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが家族を伴わずに出張された','Gran — youth Dad-fam-tomonau-not-trip','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お孫様にいい暮らしを望めるよう尽くされたわよね、あなた?','Yes — Grandpa-grandkid-good-life-wish-effort, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは不運な時代を耐えられた','Gran — youth Dad-bad-luck-era-endure','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様に古い詩集を奨められたわよね、あなた?','Grandpa — grandkid-old-poem-rec, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが太鼓をドンドン叩かれた','Gran — youth Dad-drum-dondon','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、記憶が今でも浮かび上がってくるわよね、あなた?','Grandpa — mem-still-float-up, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは不機嫌な顔をされなかった','Gran — youth Dad-mood-bad-face-not','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様と一緒に絵に色を塗られたわよね、あなた?','Grandpa — grandkid-art-color-paint, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09524',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、弟を伴わずに遊びに行くな','Riku — bro-tomonau-not-play-no','Direction','sakura_teen'),
    mk('お前、テストで合格を望めるか、桜?','You — test-pass-wish? Sakura','Curious','riku_teen'),
    mk('リク、お前、不運続きだな','Riku — bad-luck-cont','Wry','sakura_teen'),
    mk('お前、新作ゲーム奨めてくれよ、桜','You — new-game-rec Sakura','Curious','riku_teen'),
    mk('リク、お前、ドンドン強くなってるな','Riku — dondon-strong','Praising','sakura_teen'),
    mk('お前、テストの答えが頭に浮かび上がっただろ?桜','You — test-ans-head-float? Sakura','Wry','riku_teen'),
    mk('リク、お前、最近不機嫌だな','Riku — recently-mood-bad','Curious','sakura_teen'),
    mk('お前、ペンキで看板を塗る手伝いしたな、桜','You — paint-sign-help Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_09525',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お母さんを伴わずに遠くへ行ってはダメよ','Sho — Mom-tomonau-not-far-no','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、将来は宇宙飛行士を望めるかな','Mei-sis — me future-astro-wish?','Eager child','sho_child'),
    mk('翔くん、不運な日でも明日は晴れるよ','Sho — bad-luck-day-tomor-clear','Tender','mei_romantic'),
    mk('メイ姉さん、お父さんがメイ姉さんの絵本を奨めて下さったよ','Mei-sis — Dad-Mei-sis-pic-book-rec','Eager child','sho_child'),
    mk('翔くん、ドンドン強くなるのは嬉しいけど怪我に注意ね','Sho — dondon-strong-glad-injure-care','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、夢が浮かび上がってきたよ','Mei-sis — me dream-float-up','Eager child','sho_child'),
    mk('翔くん、お父さんが不機嫌な時はそっとしておきましょうね','Sho — Dad-mood-bad-leave','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと自転車を塗るお手伝いしたよ','Mei-sis — me Dad-bike-paint-help','Eager close','sho_child'),
  ]},
  {id:'conv_09526',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、赤字事業の打ち切りも視野に入れろ','Our co — red-biz-cut-view','Crisp','hiroshi_boss'),
    mk('はい。有価証券の運用方針を見直します','Yes — Securit-mgmt-rev','Methodical','kenji_office'),
    mk('当社、社員と共にブランドを作り上げる','Our co — staff-brand-make','Direction','hiroshi_boss'),
    mk('はい。使い捨てプラスチックの削減も進めます','Yes — Disp-plastic-redu','Update','kenji_office'),
    mk('書籍の版元と交渉しろ','Book-pub-negot','Direction','hiroshi_boss'),
    mk('はい。顧客レスポンスを高めます','Yes — Cust-resp-raise','Update','kenji_office'),
    mk('当社、社員が率先して改革を進めろ','Our co — staff-lead-ref-prog','Direction','hiroshi_boss'),
    mk('はい。役員会議室を新装備で囲む計画です','Yes — Exec-mtg-rm-eq-surround-plan','Close','kenji_office'),
  ]},
  {id:'conv_09527',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('赤字商品の打ち切りを進めましょう','Red-prod-cut-prog','Brisk','yuki_office'),
    mk('はい。有価証券報告書を準備します','Yes — Securit-rep-prep','Cooperative','kenji_office'),
    mk('チームで新しい企画を作り上げる時期ですね','Team-new-plan-make-time','Direction','yuki_office'),
    mk('はい。社内の使い捨て備品を減らします','Yes — Co-disp-equip-redu','Update','kenji_office'),
    mk('版元との打ち合わせを設定しましょう','Pub-mtg-set','Direction','yuki_office'),
    mk('はい。顧客アンケートのレスポンスを集計します','Yes — Cust-quest-resp-tally','Update','kenji_office'),
    mk('率先して新システム導入を進めましょう','Lead-new-sys-prog','Direction','yuki_office'),
    mk('はい。会議室をパーティションで囲む案を出します','Yes — Mtg-rm-part-surround-prop','Close','kenji_office'),
  ]},
  {id:'conv_09528',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、芽の出ない研究の打ち切りも勇気だ','Ren — no-result-cut-brave','Mentor','hiroshi_boss'),
    mk('はい。研究費を有価証券で運用する案も考えます','Yes — Research-securit-mgmt-cons','Earnest','ren_uni'),
    mk('蓮、研究室で新理論を作り上げろ','Ren — lab-new-theory-make','Direction','hiroshi_boss'),
    mk('はい。実験器具の使い捨てを減らします','Yes — Exp-equip-disp-redu','Earnest','ren_uni'),
    mk('蓮、論文の版元と直接交渉しろ','Ren — paper-pub-direct-negot','Direction','hiroshi_boss'),
    mk('はい。被験者のレスポンスを丁寧に集めます','Yes — Subj-resp-careful','Polite','ren_uni'),
    mk('蓮、率先して研究を引っ張れ','Ren — lead-research-pull','Direction','hiroshi_boss'),
    mk('はい。研究テーブルを参考書で囲む環境を作ります','Yes — Research-tbl-ref-book-surround','Earnest close','ren_uni'),
  ]},
  {id:'conv_09529',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、長期捜査の打ち切りも検討されますね','Police long-inv-cut-cons','Cooperative','kenji_office'),
    mk('警察、有価証券詐欺事件にも対応されてますね','Police securit-fraud-resp','Cooperative','kenji_office'),
    mk('警察、犯人像を捜査本部で作り上げるんですね','Police suspect-prof-HQ-make','Cooperative','kenji_office'),
    mk('警察、使い捨ての手袋を犯行に用いた例も把握されてますね','Police disp-glove-crime-grasp','Cooperative','kenji_office'),
    mk('警察、出版物の版元との連携もされてますね','Police pub-link','Cooperative','kenji_office'),
    mk('警察、市民通報のレスポンスを早めておられますね','Police citi-rep-resp-fast','Cooperative','kenji_office'),
    mk('警察、市民が率先して防犯活動に協力されますね','Police citi-lead-prev-coop','Cooperative','kenji_office'),
    mk('警察、犯行現場をテープで囲む手順を徹底されますね','Police scene-tape-surround-strict','Close','kenji_office'),
  ]},
  {id:'conv_09530',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、不採算事業の打ち切りを断行された','Dad — founding unprof-cut-bold','Sage','hiroshi_elder'),
    mk('はい。お父さんは有価証券を活用された','Yes — Dad securit-use','Commitment','hiroshi_boss'),
    mk('お父さん、ブランドを社員と作り上げる事を信条にされた','Dad — brand-staff-make-creed','Wistful','hiroshi_elder'),
    mk('はい。お父さんは使い捨て文化を批判された','Yes — Dad disp-cult-criticism','Reflective','hiroshi_boss'),
    mk('お父さん、書籍版元との関係を大切にされた','Dad — book-pub-rel-cherish','Wistful','hiroshi_elder'),
    mk('はい。お父さんは顧客レスポンスを最重視された','Yes — Dad cust-resp-top-imp','Reflective','hiroshi_boss'),
    mk('お父さん、社員が率先する組織を理想とされた','Dad — staff-lead-ideal','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員を信頼で囲む経営をされた','Yes — Dad staff-trust-surround-mgmt','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09531',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、日本語の口語表現の歴史を論文で扱いましたね','Ren — JP-spoken-hist paper','Calm','asuka_teacher'),
    mk('はい、前衛芸術の評価史を論文で扱いました','Yes — Avant-art-eval paper','Earnest','ren_uni'),
    mk('蓮さん、青年期の性欲と社会化の研究を論文で扱いましたね','Ren — adol-libido-soc paper','Reflective','asuka_teacher'),
    mk('はい、選挙で優勢に立った候補者の戦略を論文で扱いました','Yes — Elect-leader-strat paper','Earnest','ren_uni'),
    mk('英国貴族の伯爵家の研究を論文で扱いましたね','UK-noble-earl paper','Engaged','asuka_teacher'),
    mk('はい、健常児童と発達障害の比較研究を論文で扱いました','Yes — Healthy-child-dis-cmp paper','Earnest','ren_uni'),
    mk('蓮さん、皇位継承の歴史比較を論文で扱いましたね','Ren — succ-hist paper','Reflective','asuka_teacher'),
    mk('はい、政党綱領の比較研究を論文で扱いました','Yes — Party-plat-cmp paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09532',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、容疑者の口語表現を、警察、分析されてますね','Case suspect-spoken police-anal','Reflective','ren_uni'),
    mk('警察、前衛的な犯罪手口にも対応します','Police avant-crime-resp','Procedural','takeda_officer'),
    mk('本件、性欲犯罪の心理プロファイルを、警察、作成されますね','Case sex-crime-psych police-prof','Reflective','ren_uni'),
    mk('警察、優勢な犯罪組織の動向を監視します','Police leader-org-monit','Procedural','takeda_officer'),
    mk('本件、伯爵家ゆかりの古美術盗難を、警察、扱われてますね','Case earl-fam-art-theft police-handle','Reflective','ren_uni'),
    mk('警察、健常者と要支援者の境界事案にも対応します','Police healthy-supp-bound-resp','Procedural','takeda_officer'),
    mk('本件、皇位継承時の警備計画、警察、立てられますね','Case succ-guard-plan police-arr','Reflective','ren_uni'),
    mk('警察、政党綱領違反の事案にも厳しく対応します','Police party-plat-viol-strict','Close','takeda_officer'),
  ]},
  {id:'conv_09533',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、日本語の口語表現の歴史を論文で扱いましたね','Sakura — JP-spoken paper','Calm','asuka_teacher'),
    mk('はい、前衛芸術の評価史を論文で扱いました','Yes — Avant-art paper','Earnest teen','sakura_teen'),
    mk('青年期の性欲と社会化を論文で扱いましたね','Adol-libido paper','Reflective','asuka_teacher'),
    mk('はい、選挙で優勢の候補者の戦略を論文で扱いました','Yes — Elect-leader paper','Earnest','sakura_teen'),
    mk('英国貴族の伯爵家を論文で扱いましたね','UK-earl paper','Engaged','asuka_teacher'),
    mk('はい、健常児童と発達障害の比較を論文で扱いました','Yes — Healthy-child paper','Earnest','sakura_teen'),
    mk('皇位継承の歴史比較を論文で扱いましたね','Succ-hist paper','Reflective','asuka_teacher'),
    mk('はい、政党綱領の比較を論文で扱いました','Yes — Party-plat paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09534',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、患者の口語表現を医療チームで丁寧に聞きます','Ren — pati-spoken med-team listen','Calm','saito_doctor'),
    mk('はい、医療現場の前衛的治療法を医療チームで検証します','Yes — Med-avant-treat med-team verify','Patient','saito_doctor'),
    mk('蓮さん、性欲減退の相談も医療チームで受けます','Ren — libido-low-cons med-team','Calm','saito_doctor'),
    mk('診療科の優勢を、貴院、意識されてますね、先生','Dept-leader your-hosp aware, sensei','Reflective','ren_uni'),
    mk('はい、伯爵家ゆかりの病院記録を医療チームで保管します','Yes — Earl-fam-hosp-rec med-team','Patient','saito_doctor'),
    mk('健常児童の発達相談も、貴院、おこなわれますね、先生','Healthy-child-dev-cons your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、皇位継承式での医療待機を医療チームで担当します','Yes — Succ-cere-med-stand med-team','Patient','saito_doctor'),
    mk('医療倫理綱領の遵守を、貴院、徹底されてますね、先生','Med-eth-plat-comp your-hosp strict, sensei','Curious close','ren_uni'),
  ]},
  {id:'conv_09535',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、社員の口語コミュニケーションを尊重しろ','Our co — staff-spoken-comm-resp','Crisp','hiroshi_boss'),
    mk('はい。前衛的なデザインの新商品を企画します','Yes — Avant-design-new-plan','Methodical','kenji_office'),
    mk('社員の性欲偏見はハラスメントだと教育しろ','Staff-libido-bias-haras-edu','Direction','hiroshi_boss'),
    mk('はい。当社、市場で優勢な位置を確保します','Yes — Our co-mkt-leader-pos-sec','Update','kenji_office'),
    mk('当社、創業家伯爵家の伝統を尊重しろ','Our co — found-earl-trad-resp','Direction','hiroshi_boss'),
    mk('はい。社員の健常な就労環境を整備します','Yes — Staff-healthy-work-env','Update','kenji_office'),
    mk('当社、皇位継承式典のスポンサーも検討しろ','Our co — succ-cere-spons-cons','Direction','hiroshi_boss'),
    mk('はい。経営綱領を社員に再周知します','Yes — Mgmt-plat-staff-renot','Close','kenji_office'),
  ]},
  {id:'conv_09536',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、教会で挙式されたんだって、メイちゃん','Aoi — cust-church-wed Mei','Reflective','mei_romantic'),
    mk('葵、お客様、原宿でショッピングがご趣味だって、メイちゃん','Aoi — cust-Harajuku-shop Mei','Reflective','aoi_barista'),
    mk('葵、お客様、海外マフィア映画にお詳しいって、メイちゃん','Aoi — cust-mafia-movie-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、新婚旅行でマドリードに行かれたって、メイちゃん','Aoi — cust-honey-Madrid Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ハローワーク経由で転職されたって、メイちゃん','Aoi — cust-Hellowork-job Mei','Reflective','mei_romantic'),
    mk('葵、お客様、フェラーリを見に行かれるって、メイちゃん','Aoi — cust-Ferrari-see Mei','Reflective','aoi_barista'),
    mk('葵、お客様、軽井沢の別荘へ夏に行かれるって、メイちゃん','Aoi — cust-Karuizawa-vill Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お庭で野菜の種子を蒔かれるって、メイちゃん','Aoi — cust-garden-seed Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09537',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんとの挙式は思い出深い','Gran — youth Dad-wed-mem','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、原宿の竹下通りを歩かれたわよね、あなた?','Yes — Grandpa-youth-Harajuku-Takeshita, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがマフィア映画にお詳しかった','Gran — youth Dad-mafia-movie','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、新婚旅行でマドリードに行ったわよね、あなた?','Grandpa — honey-Madrid, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがハローワークに通われた','Gran — youth Dad-Hellowork-go','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、フェラーリの雑誌をお買いになってたわよね、あなた?','Grandpa — Ferrari-mag-buy, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが軽井沢で休養された','Gran — youth Dad-Karuizawa-rest','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お庭で野菜の種子をご自分で蒔かれたわよね、あなた?','Grandpa — garden-seed-self, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09538',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんとお母さんの挙式の写真、見せて頂いたわ','Sho — Dad-Mom-wed-photo','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと原宿に行きたいよ','Mei-sis — me Dad-Harajuku-want','Eager child','sho_child'),
    mk('翔くん、お父さんがマフィア映画を観てらしたわ','Sho — Dad-mafia-movie-watch','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、マドリードの絵本見たよ','Mei-sis — me Madrid-pic-saw','Eager child','sho_child'),
    mk('翔くん、お父さんがハローワークのお仕事のお話して下さったわ','Sho — Dad-Hellowork-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、フェラーリの模型作ったよ','Mei-sis — me Ferrari-model','Eager child','sho_child'),
    mk('翔くん、お父さんが軽井沢に連れて行って下さるそうよ','Sho — Dad-Karuizawa-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとお花の種子を蒔いたよ','Mei-sis — me Dad-flower-seed-sow','Eager close','sho_child'),
  ]},
  {id:'conv_09539',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、姉さんの挙式行ったろ?','Riku — sis-wed-went?','Curious teen','sakura_teen'),
    mk('お前、原宿でクレープ食ってたな、桜','You — Harajuku-crepe Sakura','Wry','riku_teen'),
    mk('リク、お前、マフィア映画ばっか観てるな','Riku — mafia-movie-only','Wry','sakura_teen'),
    mk('お前、社会でマドリード習ったろ?桜','You — soc-Madrid? Sakura','Curious','riku_teen'),
    mk('リク、お前、ハローワーク見学行ったろ?','Riku — Hellowork-tour?','Curious','sakura_teen'),
    mk('お前、フェラーリのプラモ作ってたな、桜','You — Ferrari-plamodel Sakura','Praising','riku_teen'),
    mk('リク、お前、軽井沢の別荘羨ましがってたな','Riku — Karuizawa-vill-jealous','Wry','sakura_teen'),
    mk('お前、理科で植物の種子習ったろ?桜','You — sci-plant-seed? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09540',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんとの挙式の写真を見せてあげようね','Sho — Dad-wed-photo-show','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと原宿に行きたいよ','Mom — me Dad-Harajuku-want','Eager child','sho_child'),
    mk('翔くん、お父さんがマフィア映画は子供は観られないって','Sho — Dad-mafia-kid-no','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんとマドリードの絵本読んだよ','Mom — me Dad-Madrid-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがハローワーク経由で転職されたのよ','Sho — Dad-Hellowork-job','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとフェラーリの模型を組み立てたよ','Mom — me Dad-Ferrari-model','Eager child','sho_child'),
    mk('翔くん、お父さんが軽井沢のお別荘を借りて下さるそうよ','Sho — Dad-Karuizawa-vill-rent','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとお庭で野菜の種子を蒔いたよ','Mom — me Dad-garden-seed-sow','Eager close','sho_child'),
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

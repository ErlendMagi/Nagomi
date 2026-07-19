import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_517 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['八つ','裁き','如実','無敵','メリハリ','如き','へそ','爺さん']
const B_T = ['フリーズ','プロトタイプ','ゲラ','内野','地場','からくり','ペンネーム','中高生']
const C_T = ['デルタ','ウーマン','典範','陸自','朝鮮総連','全曲','平凡社','魅惑']
const D_T = ['サンバ','ボビー','パトリック','クリストファー','リンダ','アーク','アナン','サドル']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10301',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが八つのおにぎりを作って下さったよ','Sho — Dad-8-onigiri','Pleased','yumiko_mom'),
    mk('ママ、ぼく、悪い事をしたら裁きを受けるって学んだよ','Mom — me bad-judg-learn','Earnest child','sho_child'),
    mk('翔くん、お父さんの愛情が如実に伝わるわね','Sho — Dad-love-vivid-tell','Tender','yumiko_mom'),
    mk('ママ、お父さんは無敵って思うよ','Mom — Dad-invinc','Tender child','sho_child'),
    mk('翔くん、お父さんの教えはメリハリがあるわね','Sho — Dad-teach-snap','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんの如き立派な大人になりたいよ','Mom — me Dad-like-fine-adult','Earnest child','sho_child'),
    mk('翔くん、温泉でお父さんがへそを出してらしたわよ','Sho — onsen-Dad-belly-show','Wry','yumiko_mom'),
    mk('ママ、お祖父さんも爺さんって呼ばれて笑ってらしたよ','Mom — Grandpa-old-man-laugh','Wry close','sho_child'),
  ]},
  {id:'conv_10302',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、八つのお団子をお頼みになったよ、メイちゃん','Aoi — cust-8-dango Mei','Pleased','mei_romantic'),
    mk('葵、お客様、人の裁きを気にされてご相談されたよ、メイちゃん','Aoi — cust-judg-worry-cons Mei','Reflective','aoi_barista'),
    mk('葵、お客様の満足度が如実に売上に表れるね、メイちゃん','Aoi — cust-sat-vivid-sales Mei','Reflective','mei_romantic'),
    mk('葵、お客様、コーヒーは無敵の組み合わせのスイーツだって、メイちゃん','Aoi — cust-cf-invinc-sweet Mei','Pleased','aoi_barista'),
    mk('葵、シフトはメリハリつけて休もうね、メイちゃん','Aoi — shift-snap-rest Mei','Direction','mei_romantic'),
    mk('葵、お客様、職人の如き丁寧さで珈琲を作るって褒めて下さったよ、メイちゃん','Aoi — cust-craft-careful-praise Mei','Pleased','aoi_barista'),
    mk('葵、お客様、夏に「へそが見える」ファッションでいらしたよ、メイちゃん','Aoi — cust-summer-belly-fash Mei','Wry','mei_romantic'),
    mk('葵、お客様、爺さんと呼ばれる事に慣れてらしたよ、メイちゃん','Aoi — cust-old-man-used Mei','Tender close','aoi_barista'),
  ]},
  {id:'conv_10303',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが八つの子を抱えて働かれた','Gran — youth Dad-8-kid-work','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、村の裁きを公平にされたわよね、あなた?','Yes — Grandpa-vil-judg-fair, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんの強さが如実に分かった','Gran — youth Dad-strength-vivid-und','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、戦場では無敵の働きをされたわよね、あなた?','Grandpa — battle-invinc, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは仕事と家庭のメリハリを保たれた','Gran — youth Dad-work-fam-snap','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、賢者の如き判断をされたわよね、あなた?','Grandpa — sage-like-judg, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんのへそが見える格好で寝てらした','Gran — youth Dad-belly-sleep','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、爺さんと孫に呼ばれて喜んでらしたわよね、あなた?','Grandpa — old-man-grandkid-glad, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10304',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、八つ当たりするなよ','Riku — 8-fight-no','Direction','sakura_teen'),
    mk('お前、テストで裁きを受けたな、桜','You — test-judg Sakura','Wry','riku_teen'),
    mk('リク、お前の悔しさが如実に顔に出てたな','Riku — frust-vivid-face','Reflective','sakura_teen'),
    mk('お前、ゲームで無敵モード使ってたな、桜','You — game-invinc-mode Sakura','Wry','riku_teen'),
    mk('リク、勉強と遊びにメリハリつけろ','Riku — study-play-snap','Direction','sakura_teen'),
    mk('お前、彼女の如き優しさを持ってるな、桜','You — gf-like-kind Sakura','Praising','riku_teen'),
    mk('リク、お前、夏祭りでへそ出しの服着てたな','Riku — fest-belly-cloth','Wry','sakura_teen'),
    mk('お前のお爺さん、可愛らしい爺さんだったな、桜','You-Grandpa-cute-old-man Sakura','Tender close','riku_teen'),
  ]},
  {id:'conv_10305',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが八つの紙風船を作って下さったわ','Sho — Dad-8-paper-bal','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、悪い行いには裁きがあるって学んだよ','Mei-sis — me bad-judg-learn','Earnest child','sho_child'),
    mk('翔くん、お父さんの優しさが如実に伝わるわ','Sho — Dad-kind-vivid','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんは無敵だって思うよ','Mei-sis — me Dad-invinc','Tender child','sho_child'),
    mk('翔くん、お父さんはお仕事とお休みのメリハリがあるわ','Sho — Dad-work-rest-snap','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんの如き紳士になりたいよ','Mei-sis — me Dad-like-gent','Earnest child','sho_child'),
    mk('翔くん、温泉でお父さんがへそ出しの浴衣でくつろいでらしたわ','Sho — onsen-Dad-belly-relax','Wry','mei_romantic'),
    mk('メイ姉さん、お祖父ちゃんを「爺さん」って呼んだら怒られちゃったよ','Mei-sis — Grandpa-old-man-call-angry','Wry close','sho_child'),
  ]},
  {id:'conv_10306',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、画面のフリーズ対策を強化しろ','Our co — screen-freeze-counter','Crisp','hiroshi_boss'),
    mk('はい。新商品のプロトタイプを準備します','Yes — New-prod-proto-prep','Methodical','kenji_office'),
    mk('当社、出版物のゲラを丁寧に校正しろ','Our co — pub-galley-pol','Direction','hiroshi_boss'),
    mk('はい。内野守備のような正確さで業務を進めます','Yes — Infield-prec-work','Update','kenji_office'),
    mk('当社、地場産業との連携を強化しろ','Our co — local-industry-strength','Direction','hiroshi_boss'),
    mk('はい。からくり装置のような細工は避けます','Yes — Mech-trick-avoid','Update','kenji_office'),
    mk('当社、社員のペンネームを尊重しろ','Our co — staff-pen-name-resp','Direction','hiroshi_boss'),
    mk('はい。中高生向け教育市場も検討します','Yes — Jr-sr-edu-mkt-cons','Close','kenji_office'),
  ]},
  {id:'conv_10307',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('画面フリーズが続くPCを交換しましょう','Screen-freeze-PC-rep','Brisk','yuki_office'),
    mk('はい。プロトタイプの検証会議を設定します','Yes — Proto-rev-mtg','Cooperative','kenji_office'),
    mk('社内報のゲラを来週までに仕上げましょう','Co-news-galley-finish','Direction','yuki_office'),
    mk('はい。新人を内野守備、つまり総務に配属します','Yes — Newhire-infield-GA','Update','kenji_office'),
    mk('地場の伝統工芸とコラボしましょう','Local-craft-collab','Direction','yuki_office'),
    mk('はい。複雑なからくりは避けたシンプル設計にします','Yes — Mech-avoid-simple','Update','kenji_office'),
    mk('作家のペンネームでも署名できる契約を整えましょう','Author-pen-sign-contract','Direction','yuki_office'),
    mk('はい。中高生向けプロモを企画します','Yes — Jr-sr-promo-plan','Close','kenji_office'),
  ]},
  {id:'conv_10308',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、実験装置のフリーズに備えろ','Ren — exp-eq-freeze-prep','Mentor','hiroshi_boss'),
    mk('はい。研究プロトタイプを早期に作ります','Yes — Research-proto-early','Earnest','ren_uni'),
    mk('蓮、論文のゲラチェックを徹底しろ','Ren — paper-galley-strict','Direction','hiroshi_boss'),
    mk('はい。実験室の内野的役割も果たします','Yes — Lab-infield-role','Earnest','ren_uni'),
    mk('蓮、地場の研究機関とも交流しろ','Ren — local-research-exch','Direction','hiroshi_boss'),
    mk('はい。論文のからくりが見破られないよう正直に書きます','Yes — Paper-trick-no-honest','Polite','ren_uni'),
    mk('蓮、論文ペンネームを使うのは慎重にしろ','Ren — paper-pen-careful','Direction','hiroshi_boss'),
    mk('はい。中高生向けの科学講座にも貢献します','Yes — Jr-sr-sci-cont','Earnest close','ren_uni'),
  ]},
  {id:'conv_10309',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、システムフリーズ時の手動対応もされますね','Police sys-freeze-manual','Cooperative','kenji_office'),
    mk('警察、犯罪手口のプロトタイプ分析もされますね','Police crime-proto-anal','Cooperative','kenji_office'),
    mk('警察、捜査資料のゲラ校正をされますね','Police inv-galley-proof','Cooperative','kenji_office'),
    mk('警察、内野犯罪、つまり内部不正の捜査もされますね','Police inner-corrup-inv','Cooperative','kenji_office'),
    mk('警察、地場の不良グループにも目を配られますね','Police local-gang-attent','Cooperative','kenji_office'),
    mk('警察、犯人のからくりを暴かれますね','Police crim-trick-uncover','Cooperative','kenji_office'),
    mk('警察、容疑者のペンネーム使用も把握されますね','Police suspect-pen-grasp','Cooperative','kenji_office'),
    mk('警察、中高生の防犯講演もされますね','Police jr-sr-prev-lect','Close','kenji_office'),
  ]},
  {id:'conv_10310',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、コンピューターのフリーズに苦労された','Dad — founding PC-freeze-struggle','Sage','hiroshi_elder'),
    mk('はい。お父さんは商品プロトタイプを自ら試作された','Yes — Dad prod-proto-self','Commitment','hiroshi_boss'),
    mk('お父さん、ゲラの誤字を見抜く目をお持ちだった','Dad — galley-typo-see','Wistful','hiroshi_elder'),
    mk('はい。お父さんは内野的な裏方仕事も大事にされた','Yes — Dad infield-back-imp','Reflective','hiroshi_boss'),
    mk('お父さん、地場の取引先を生涯大切にされた','Dad — local-partner-life','Wistful','hiroshi_elder'),
    mk('はい。お父さんは経営にからくりを使われなかった','Yes — Dad mgmt-trick-no','Reflective','hiroshi_boss'),
    mk('お父さん、社内誌でペンネームを使われた事もあった','Dad — co-news-pen-times','Wistful','hiroshi_elder'),
    mk('はい。お父さんは中高生向け奨学金を設けられた','Yes — Dad jr-sr-grant-set','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10311',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、デルタ地帯の生態学研究を論文で扱いましたね','Ren — delta-eco paper','Calm','asuka_teacher'),
    mk('はい、女性映画ウーマンの社会学を論文で扱いました','Yes — Wom-film-soc paper','Earnest','ren_uni'),
    mk('蓮さん、皇室典範の改正論を論文で扱いましたね','Ren — imp-house-law paper','Reflective','asuka_teacher'),
    mk('はい、陸自の災害派遣史を論文で扱いました','Yes — JGSDF-disas paper','Earnest','ren_uni'),
    mk('朝鮮総連と日本社会の関係史を論文で扱いましたね','Chongryon-JP paper','Engaged','asuka_teacher'),
    mk('はい、ベートーヴェン交響曲全曲分析を論文で扱いました','Yes — Beet-sym-all paper','Earnest','ren_uni'),
    mk('蓮さん、平凡社の事典編纂史を論文で扱いましたね','Ren — Heibon-ency paper','Reflective','asuka_teacher'),
    mk('はい、香水の魅惑成分研究を論文で扱いました','Yes — Perf-allure paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10312',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、デルタ地帯での密漁を、警察、扱われますね','Case delta-poach police-handle','Reflective','ren_uni'),
    mk('警察、ワンダーウーマン的女性活動家への支援もされますね','Police wonder-wom-supp','Cooperative','takeda_officer'),
    mk('本件、皇室典範違反絡みの事案を、警察、慎重に扱われますね','Case imp-law-viol police-careful','Reflective','ren_uni'),
    mk('警察、陸自と災害時連携もされますね','Police JGSDF-disas-link','Cooperative','takeda_officer'),
    mk('本件、朝鮮総連系の関連事案を、警察、扱われますね','Case Chongryon-rel police-handle','Reflective','ren_uni'),
    mk('警察、容疑者の声のヴォーカル全曲一致解析もされますね','Police suspect-vocal-all-match','Cooperative','takeda_officer'),
    mk('本件、平凡社の出版物に絡む盗作を、警察、扱われますね','Case Heibon-plag police-handle','Reflective','ren_uni'),
    mk('警察、魅惑香水での誘惑詐欺事案も担当されますね','Police allure-perf-fraud','Close','takeda_officer'),
  ]},
  {id:'conv_10313',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、デルタ地帯の生態学研究を論文で扱いましたね','Sakura — delta-eco paper','Calm','asuka_teacher'),
    mk('はい、女性映画ウーマンの社会学を論文で扱いました','Yes — Wom-film paper','Earnest teen','sakura_teen'),
    mk('皇室典範の改正論を論文で扱いましたね','Imp-house-law paper','Reflective','asuka_teacher'),
    mk('はい、陸自の災害派遣史を論文で扱いました','Yes — JGSDF paper','Earnest','sakura_teen'),
    mk('朝鮮総連と日本社会の関係史を論文で扱いましたね','Chongryon paper','Engaged','asuka_teacher'),
    mk('はい、ベートーヴェン交響曲全曲分析を論文で扱いました','Yes — Beet-all paper','Earnest','sakura_teen'),
    mk('平凡社の事典編纂史を論文で扱いましたね','Heibon paper','Reflective','asuka_teacher'),
    mk('はい、香水の魅惑成分研究を論文で扱いました','Yes — Perf-allure paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10314',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、デルタ波の睡眠脳波を医療チームで研究します','Ren — delta-sleep-EEG med-team','Calm','saito_doctor'),
    mk('はい、女性ウーマン医療相談を医療チームで提供します','Yes — Wom-med-cons med-team','Patient','saito_doctor'),
    mk('蓮さん、典範に従う医療倫理を医療チームで遵守します','Ren — law-eth med-team comp','Calm','saito_doctor'),
    mk('陸自との災害時連携を、貴院、おこなわれてますね、先生','JGSDF-disas-link your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、朝鮮総連からの医療相談にも医療チームで対応します','Yes — Chongryon-med-cons med-team','Patient','saito_doctor'),
    mk('はい、患者のヘッドホン全曲チェックを医療チームでおこないません','Yes — Pati-all-song-check-no','Wry','saito_doctor'),
    mk('平凡社の医学辞典を、貴院、参考にされてますね、先生','Heibon-med-dict your-hosp ref, sensei','Curious','ren_uni'),
    mk('はい、魅惑的香りの効能を医療チームで研究します','Yes — Allure-aroma-eff med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_10315',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、デルタ地帯への進出を検討しろ','Our co — delta-launch-cons','Crisp','hiroshi_boss'),
    mk('はい。ウーマン向け商品ラインを強化します','Yes — Wom-prod-strength','Methodical','kenji_office'),
    mk('当社、社内典範を整備しろ','Our co — co-law-prep','Direction','hiroshi_boss'),
    mk('はい。陸自との災害物資契約を結びます','Yes — JGSDF-disas-contract','Update','kenji_office'),
    mk('当社、朝鮮総連系団体との取引は慎重にしろ','Our co — Chongryon-deal-careful','Direction','hiroshi_boss'),
    mk('はい。社員向けに全曲音楽配信サービスを契約します','Yes — Staff-all-music-stream','Update','kenji_office'),
    mk('当社、平凡社と共同辞典を企画しろ','Our co — Heibon-dict-plan','Direction','hiroshi_boss'),
    mk('はい。魅惑的なブランドイメージを構築します','Yes — Allure-brand-build','Close','kenji_office'),
  ]},
  {id:'conv_10316',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、サンバのリズムが大好きだって、メイちゃん','Aoi — cust-samba-love Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ボビー・ブラウンのファンだって、メイちゃん','Aoi — cust-Bobby-Brown-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、パトリック・スウェイジの映画にハマってるって、メイちゃん','Aoi — cust-Patrick-S-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、クリストファー・ノーランの映画を観てこられたって、メイちゃん','Aoi — cust-C-Nolan-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、リンダ・カーター主演のドラマがお好きだって、メイちゃん','Aoi — cust-Linda-drama Mei','Reflective','mei_romantic'),
    mk('葵、お客様、フランスのアーク・ド・トリオンフを見に行かれたって、メイちゃん','Aoi — cust-Arc-de-Triomphe Mei','Reflective','aoi_barista'),
    mk('葵、お客様、コフィー・アナン氏の伝記を読んでらしたよ、メイちゃん','Aoi — cust-Annan-bio Mei','Reflective','mei_romantic'),
    mk('葵、お客様、自転車のサドルを買い替えられたって、メイちゃん','Aoi — cust-bike-saddle-rep Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10317',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがサンバ・カーニバルを観られた','Gran — youth Dad-samba-carn','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ボビー・ヴィントンのレコードがお好きだったわよね、あなた?','Yes — Grandpa-Bobby-Vinton-rec, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがパトリック先生の英語教室に通われた','Gran — youth Dad-Patrick-Eng-class','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、クリストファー・コロンブスの伝記を孫に読まれたわよね、あなた?','Grandpa — Columb-bio-grandkid, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがリンダ・ロンシュタットのアルバムを集められた','Gran — youth Dad-Linda-R-album','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、アーク橋の写真集をお持ちだったわよね、あなた?','Grandpa — arch-bridge-photo, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがアナン事務総長の演説を聴かれた','Gran — youth Dad-Annan-speech','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、自転車のサドルをご自分で交換されたわよね、あなた?','Grandpa — bike-saddle-self-rep, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10318',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがサンバの音楽を聴かせて下さるそうよ','Sho — Dad-samba-listen','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとボビーの絵本見たよ','Mei-sis — me Dad-Bobby-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがパトリックの映画を観せて下さるそうよ','Sho — Dad-Patrick-show','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとクリストファーの絵本見たよ','Mei-sis — me Dad-Christopher-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがリンダの曲を聴かせて下さるわ','Sho — Dad-Linda-song','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとアーク門の絵本見たよ','Mei-sis — me Dad-arch-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがアナン事務総長のドキュメンタリーをご覧になったわ','Sho — Dad-Annan-doc','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと自転車のサドル交換したよ','Mei-sis — me Dad-bike-saddle','Eager close','sho_child'),
  ]},
  {id:'conv_10319',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、サンバ部の発表会出てたな','Riku — samba-club-pres','Curious teen','sakura_teen'),
    mk('お前、ボビー・オロゴンのドラマ観てたな、桜','You — Bobby-O-drama Sakura','Wry','riku_teen'),
    mk('リク、お前、英語の先生がパトリックさんだったな','Riku — Eng-tch-Patrick','Curious','sakura_teen'),
    mk('お前、クリストファー・コロンブスの本読んでたな、桜','You — Columb-book Sakura','Curious','riku_teen'),
    mk('リク、お前、リンダ・カーター主演のワンダーウーマン観てたな','Riku — Linda-W-W','Wry','sakura_teen'),
    mk('お前、社会でアーク・ド・トリオンフ習ったろ?桜','You — soc-Arc? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会でアナン事務総長習ったろ?','Riku — soc-Annan?','Curious','sakura_teen'),
    mk('お前、自転車のサドル高くしてたな、桜','You — bike-saddle-high Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10320',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがサンバの音楽教室に通われてるそうよ','Sho — Dad-samba-class','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとボビー・チャールトンの伝記読んだよ','Mom — me Dad-Bobby-Charlton-bio','Eager child','sho_child'),
    mk('翔くん、お父さんがパトリック先生の本を貸して下さったわ','Sho — Dad-Patrick-book','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとクリストファーの絵本見たよ','Mom — me Dad-Christopher-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがリンダ・ロンシュタットのCD買って下さったわ','Sho — Dad-Linda-CD','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとアーク橋見たよ','Mom — me Dad-arch-bridge','Eager child','sho_child'),
    mk('翔くん、お父さんがアナン氏の伝記をお買いになったわ','Sho — Dad-Annan-bio','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと自転車のサドル買い替えに行ったよ','Mom — me Dad-bike-saddle-rep','Eager close','sho_child'),
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_513 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['その道','エゴ','やう','正午','未明','ナンセンス','アンタ','初歩']
const B_T = ['プログラマー','ユーティリティ','短大','本学','南側','伝送','陳列','懲戒']
const C_T = ['プロテスタント','永住','聖人','女系','震度','上半身','巨匠','社団']
const D_T = ['オリックス','テレビ朝日','スズキ','男優','ソビエト','ケニア','司馬','ブルジョアジー']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10221',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんはその道の専門家でいらっしゃるのよ','Sho — Dad-field-expert','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんがエゴを抑えてご家族を優先される姿が尊敬だよ','Mom — me Dad-ego-suppress-fam-resp','Tender child','sho_child'),
    mk('翔くん、お父さんが「やう」って古風な表現を使われたわ','Sho — Dad-"yau"-classical','Reflective','yumiko_mom'),
    mk('ママ、正午にお父さんが帰宅されるそうよ','Mom — noon-Dad-home','Eager child','sho_child'),
    mk('翔くん、未明に雷が鳴ってお父さんが起きてらしたわ','Sho — pre-dawn-thunder-Dad-up','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに無理難題を言うのはナンセンスだよ','Mom — me Dad-unreason-non','Earnest child','sho_child'),
    mk('翔くん、「アンタ」って呼ぶのは下品よ','Sho — "anta"-call-rude','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんに料理の初歩を習ったよ','Mom — me Dad-cook-basic-learn','Eager close','sho_child'),
  ]},
  {id:'conv_10222',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、コーヒーのその道の専門家でいらしたよ、メイちゃん','Aoi — cust-cf-field-expert Mei','Reflective','mei_romantic'),
    mk('葵、お客様のエゴが強すぎる時もご対応丁寧にしようね、メイちゃん','Aoi — cust-ego-pol Mei','Direction','aoi_barista'),
    mk('葵、お客様、メニューを「やう」って読まれてたよ、古文好きなのね、メイちゃん','Aoi — cust-menu-"yau"-class-like Mei','Wry','mei_romantic'),
    mk('葵、正午のランチタイムは忙しいね、メイちゃん','Aoi — noon-lunch-busy Mei','Direction','aoi_barista'),
    mk('葵、未明から仕込みを始めようね、メイちゃん','Aoi — pre-dawn-prep-start Mei','Direction','mei_romantic'),
    mk('葵、お店をディスるレビューはナンセンスだね、メイちゃん','Aoi — store-bad-rev-non Mei','Wry','aoi_barista'),
    mk('葵、お客様に「アンタ」呼ばわりは絶対しないようにね、メイちゃん','Aoi — cust-"anta"-never Mei','Direction','mei_romantic'),
    mk('葵、新人スタッフに初歩から教えていこうね、メイちゃん','Aoi — newhire-basic-teach Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_10223',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがその道の達人と仰がれた','Gran — youth Dad-field-master-revered','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、エゴを捨てて家族に尽くされたわよね、あなた?','Yes — Grandpa-ego-discard-fam, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「やう」と古文を諳んじられた','Gran — youth Dad-"yau"-class-recite','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、正午のラジオ体操を続けられたわよね、あなた?','Grandpa — noon-radio-exer-cont, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが未明から田畑に出られた','Gran — youth Dad-pre-dawn-field','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、戦時の理屈をナンセンスと仰ったわよね、あなた?','Grandpa — war-logic-non-said, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは「アンタ」って言葉を使われなかった','Gran — youth Dad-"anta"-no','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様に初歩から色々と教えられたわよね、あなた?','Grandpa — grandkid-basic-many-teach, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10224',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、ゲームでその道のプロだな','Riku — game-field-pro','Praising teen','sakura_teen'),
    mk('お前、エゴを抑えてチームプレーしてたな、桜','You — ego-suppress-team Sakura','Praising','riku_teen'),
    mk('リク、お前、ふざけて「やう」って書き込んでたな','Riku — joke-"yau"-write','Wry','sakura_teen'),
    mk('お前、正午に必ずおにぎり食ってたな、桜','You — noon-onigiri-eat Sakura','Curious','riku_teen'),
    mk('リク、お前、未明までゲームしてたな','Riku — pre-dawn-game','Wry','sakura_teen'),
    mk('お前、テスト勉強しないでナンセンスな話ばっかしてたな、桜','You — no-study-non-only Sakura','Wry','riku_teen'),
    mk('リク、お前、後輩を「アンタ」呼ばわりするなよ','Riku — junior-"anta"-no','Direction','sakura_teen'),
    mk('お前、漢字を初歩から覚え直してたな、桜','You — kanji-basic-relearn Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_10225',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんはその道の達人でいらっしゃるのよ','Sho — Dad-field-master','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、エゴを抑えて妹に譲ったよ','Mei-sis — me ego-suppress-sis-yield','Earnest child','sho_child'),
    mk('翔くん、お父さんが「やう」って絵本で教えて下さったわ','Sho — Dad-"yau"-pic-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、正午にお弁当食べたよ','Mei-sis — me noon-bento','Eager child','sho_child'),
    mk('翔くん、未明にお父さんがゴミ出しされてたわ','Sho — pre-dawn-Dad-trash','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんを困らせるのはナンセンスだって学んだよ','Mei-sis — me Dad-trouble-non-learn','Earnest child','sho_child'),
    mk('翔くん、「アンタ」って呼ぶのは失礼よ','Sho — "anta"-call-rude','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに初歩から英語を習ってるよ','Mei-sis — me Dad-Eng-basic-learn','Eager close','sho_child'),
  ]},
  {id:'conv_10226',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、プログラマーの採用を強化しろ','Our co — prog-hire-strength','Crisp','hiroshi_boss'),
    mk('はい。サーバーのユーティリティ機能を整備します','Yes — Server-util-prep','Methodical','kenji_office'),
    mk('当社、短大卒の人材も積極的に採用しろ','Our co — sho-uni-grad-active','Direction','hiroshi_boss'),
    mk('はい。本学卒の役員も増やしたいですね','Yes — Our-uni-exec-up','Update','kenji_office'),
    mk('当社、社屋の南側に新しい入口を設けろ','Our co — bld-south-entry','Direction','hiroshi_boss'),
    mk('はい。データ伝送経路を冗長化します','Yes — Data-trans-redund','Update','kenji_office'),
    mk('陳列棚のレイアウトを変えろ','Disp-shelf-layout-change','Direction','hiroshi_boss'),
    mk('はい。社員規程の懲戒事項を明確にします','Yes — Staff-rule-disc-clear','Close','kenji_office'),
  ]},
  {id:'conv_10227',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('プログラマー職の求人広告を出しましょう','Prog-job-ad','Brisk','yuki_office'),
    mk('はい。ユーティリティ部品の在庫を確認します','Yes — Util-part-stock-check','Cooperative','kenji_office'),
    mk('短大卒の社員のキャリアパスも整備しましょう','Sho-uni-grad-career-prep','Direction','yuki_office'),
    mk('はい。本学関係の同窓会で広報します','Yes — Our-uni-alum-PR','Update','kenji_office'),
    mk('南側エントランスの装飾を変えましょう','South-entry-decor-change','Direction','yuki_office'),
    mk('はい。映像の伝送品質を改善します','Yes — Vid-trans-qual-impr','Update','kenji_office'),
    mk('店舗の陳列を季節商品に変えましょう','Store-disp-season-change','Direction','yuki_office'),
    mk('はい。懲戒委員会の手続きを共有します','Yes — Disc-comm-proc-share','Close','kenji_office'),
  ]},
  {id:'conv_10228',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、プログラマーの仕事も経験しろ','Ren — prog-job-exp','Mentor','hiroshi_boss'),
    mk('はい。研究室のユーティリティを使いこなします','Yes — Lab-util-master','Earnest','ren_uni'),
    mk('蓮、短大教員の研究にも興味を持て','Ren — sho-uni-fac-int','Direction','hiroshi_boss'),
    mk('はい。本学の研究伝統を尊重します','Yes — Our-uni-trad-resp','Earnest','ren_uni'),
    mk('蓮、研究棟の南側に立て看板を出せ','Ren — research-bld-south-sign','Direction','hiroshi_boss'),
    mk('はい。論文データの伝送を暗号化します','Yes — Paper-data-trans-encr','Earnest','ren_uni'),
    mk('蓮、研究成果の陳列方法も工夫しろ','Ren — research-disp-impr','Direction','hiroshi_boss'),
    mk('はい。研究不正には懲戒もあると認識します','Yes — Research-fraud-disc-aware','Earnest close','ren_uni'),
  ]},
  {id:'conv_10229',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、容疑者にプログラマー出身者が増えてますね','Police suspect-prog-up','Cooperative','kenji_office'),
    mk('警察、現場のユーティリティナイフ携帯にも注意されますね','Police scene-util-knife-care','Cooperative','kenji_office'),
    mk('警察、短大での防犯講演もされますね','Police sho-uni-prev-lect','Cooperative','kenji_office'),
    mk('警察、本学関連の研究者連携もされますね','Police our-uni-research-link','Cooperative','kenji_office'),
    mk('警察、犯行現場の南側からの侵入経路も調べられますね','Police scene-south-entry-anal','Cooperative','kenji_office'),
    mk('警察、無線伝送の傍受技術もお持ちですね','Police wire-trans-intercept','Cooperative','kenji_office'),
    mk('警察、押収品の陳列管理を徹底されますね','Police seiz-disp-strict','Cooperative','kenji_office'),
    mk('警察、警官の懲戒処分も厳格におこなわれますね','Police officer-disc-strict','Close','kenji_office'),
  ]},
  {id:'conv_10230',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、プログラマーを早期に採用された','Dad — founding prog-early-hire','Sage','hiroshi_elder'),
    mk('はい。お父さんはユーティリティ家具に投資された','Yes — Dad util-furn-invest','Commitment','hiroshi_boss'),
    mk('お父さん、短大卒社員にも幹部の道を用意された','Dad — sho-uni-grad-exec-path','Wistful','hiroshi_elder'),
    mk('はい。お父さんは本学への寄付も続けられた','Yes — Dad our-uni-don-cont','Reflective','hiroshi_boss'),
    mk('お父さん、本社の南側に庭を作られた','Dad — HQ-south-garden','Wistful','hiroshi_elder'),
    mk('はい。お父さんは早期にデータ伝送網を整備された','Yes — Dad data-trans-net-prep','Reflective','hiroshi_boss'),
    mk('お父さん、商品陳列にこだわった','Dad — prod-disp-care','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員の懲戒よりも教育を選ばれた','Yes — Dad staff-disc-no-edu','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10231',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、プロテスタント宗教改革史を論文で扱いましたね','Ren — Prot-ref paper','Calm','asuka_teacher'),
    mk('はい、永住権制度の比較研究を論文で扱いました','Yes — Perm-res-cmp paper','Earnest','ren_uni'),
    mk('蓮さん、聖人崇拝の文化人類学を論文で扱いましたね','Ren — saint-cult-anth paper','Reflective','asuka_teacher'),
    mk('はい、女系継承の世界史比較を論文で扱いました','Yes — Fem-succ-wld paper','Earnest','ren_uni'),
    mk('震度別の建物被害研究を論文で扱いましたね','Mag-bld-dmg paper','Engaged','asuka_teacher'),
    mk('はい、ボディビル選手の上半身トレーニングを論文で扱いました','Yes — Bodybuild-upper-train paper','Earnest','ren_uni'),
    mk('蓮さん、映画界の巨匠の演出論を論文で扱いましたね','Ren — film-master-dir paper','Reflective','asuka_teacher'),
    mk('はい、公益社団法人の運営研究を論文で扱いました','Yes — Pub-int-corp-op paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10232',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、プロテスタント系団体への嫌がらせを、警察、扱われますね','Case Prot-grp-harass police-handle','Reflective','ren_uni'),
    mk('警察、永住権詐欺事案にも対応されますね','Police perm-res-fraud-resp','Cooperative','takeda_officer'),
    mk('本件、聖人を装った詐欺事件を、警察、捜査されますね','Case saint-pretend-fraud police-inv','Reflective','ren_uni'),
    mk('警察、家系図の女系改ざんも扱われますね','Police fam-tree-fem-falsif','Cooperative','takeda_officer'),
    mk('本件、地震の震度別被害を、警察、把握されますね','Case quake-mag-dmg police-grasp','Reflective','ren_uni'),
    mk('警察、被害者の上半身打撲を鑑識されますね','Police vict-upper-bruise-forensic','Cooperative','takeda_officer'),
    mk('本件、映画巨匠ゆかりの作品盗難を、警察、扱われますね','Case film-master-theft police-handle','Reflective','ren_uni'),
    mk('警察、公益社団法人の不正にも対応されますね','Police pub-int-corp-corrup','Close','takeda_officer'),
  ]},
  {id:'conv_10233',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、プロテスタント宗教改革史を論文で扱いましたね','Sakura — Prot-ref paper','Calm','asuka_teacher'),
    mk('はい、永住権制度の比較研究を論文で扱いました','Yes — Perm-res paper','Earnest teen','sakura_teen'),
    mk('聖人崇拝の文化人類学を論文で扱いましたね','Saint-cult paper','Reflective','asuka_teacher'),
    mk('はい、女系継承の世界史比較を論文で扱いました','Yes — Fem-succ paper','Earnest','sakura_teen'),
    mk('震度別の建物被害研究を論文で扱いましたね','Mag-bld paper','Engaged','asuka_teacher'),
    mk('はい、ボディビル選手の上半身トレーニングを論文で扱いました','Yes — Upper-train paper','Earnest','sakura_teen'),
    mk('映画界の巨匠の演出論を論文で扱いましたね','Film-master paper','Reflective','asuka_teacher'),
    mk('はい、公益社団法人の運営研究を論文で扱いました','Yes — Pub-int-corp paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10234',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、プロテスタント系患者の医療配慮を医療チームで意識します','Ren — Prot-pati med-team','Calm','saito_doctor'),
    mk('はい、永住外国人の医療通訳を医療チームで手配します','Yes — Perm-for-interp med-team','Patient','saito_doctor'),
    mk('蓮さん、聖人を信じる患者を医療チームで尊重します','Ren — saint-belief-pati med-team','Calm','saito_doctor'),
    mk('女系遺伝病の家系図を、貴院、分析されますね、先生','Fem-genet-fam-tree your-hosp anal, sensei','Reflective','ren_uni'),
    mk('はい、震度別の医療体制を医療チームで訓練します','Yes — Mag-med med-team train','Patient','saito_doctor'),
    mk('はい、上半身のリハビリを医療チームで指導します','Yes — Upper-rehab med-team','Patient','saito_doctor'),
    mk('医学界の巨匠を、貴院、お招きされてますね、先生','Med-master your-hosp invite, sensei','Reflective','ren_uni'),
    mk('はい、医療系社団法人と医療チームで連携します','Yes — Med-corp med-team link','Patient close','saito_doctor'),
  ]},
  {id:'conv_10235',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、プロテスタント圏向け商品を強化しろ','Our co — Prot-area-prod-strength','Crisp','hiroshi_boss'),
    mk('はい。永住権を持つ社員のサポートを整えます','Yes — Perm-res-staff-supp','Methodical','kenji_office'),
    mk('社員を聖人扱いせず公平に評価しろ','Staff-saint-no-fair-eval','Direction','hiroshi_boss'),
    mk('はい。創業家の女系継承も検討します','Yes — Found-fem-succ-cons','Update','kenji_office'),
    mk('当社、震度別の事業継続計画を整えろ','Our co — mag-BCP-prep','Direction','hiroshi_boss'),
    mk('はい。社員の上半身ストレッチ研修も追加します','Yes — Staff-upper-stretch-add','Update','kenji_office'),
    mk('当社、業界巨匠の助言を活かせ','Our co — industry-master-advice-use','Direction','hiroshi_boss'),
    mk('はい。社団法人と提携を進めます','Yes — Corp-partner-prog','Close','kenji_office'),
  ]},
  {id:'conv_10236',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、オリックスのファンクラブだって、メイちゃん','Aoi — cust-Orix-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、テレビ朝日の番組制作をされてるって、メイちゃん','Aoi — cust-EX-prod Mei','Reflective','aoi_barista'),
    mk('葵、お客様、スズキの軽自動車に乗ってお越しになったよ、メイちゃん','Aoi — cust-Suzuki-light Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご主人が男優として活躍されてるって、メイちゃん','Aoi — cust-husb-actor Mei','Reflective','aoi_barista'),
    mk('葵、お客様、旧ソビエト連邦の研究をされてるって、メイちゃん','Aoi — cust-Soviet-research Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ケニアでマラソンの合宿されたって、メイちゃん','Aoi — cust-Kenya-mar-camp Mei','Reflective','aoi_barista'),
    mk('葵、お客様、司馬遼太郎の小説を全巻お持ちだって、メイちゃん','Aoi — cust-Shiba-Ryotaro-all Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ブルジョアジー研究の経済学者だって、メイちゃん','Aoi — cust-bourgeoisie-econ Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10237',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがオリックスの試合をご覧になった','Gran — youth Dad-Orix-match','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、テレビ朝日のニュースを毎晩観てらしたわよね、あなた?','Yes — Grandpa-EX-night, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがスズキの自転車に乗ってらした','Gran — youth Dad-Suzuki-bike','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃の男優映画をご覧になってたわよね、あなた?','Grandpa — youth-male-actor-watch, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがソビエト崩壊のニュースに驚かれた','Gran — youth Dad-Soviet-coll-surp','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ケニアコーヒーを取り寄せられたわよね、あなた?','Grandpa — Kenya-cf-order, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが司馬遼太郎の大河ドラマを楽しまれた','Gran — youth Dad-Shiba-drama','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ブルジョアジー批判の本を読まれたわよね、あなた?','Grandpa — bourg-crit-book, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10238',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがオリックスの試合を観せて下さるそうよ','Sho — Dad-Orix-show','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとテレビ朝日のアニメ観たよ','Mei-sis — me Dad-EX-anime','Eager child','sho_child'),
    mk('翔くん、お父さんがスズキの新車をお買いになったわ','Sho — Dad-Suzuki-new-buy','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと男優のドラマ観たいよ','Mei-sis — me Dad-actor-drama-want','Eager child','sho_child'),
    mk('翔くん、お父さんがソビエトの絵本を読んで下さるそうよ','Sho — Dad-Soviet-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとケニアの絵本見たよ','Mei-sis — me Dad-Kenya-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが司馬遼太郎の小説を貸して下さったわ','Sho — Dad-Shiba-novel-lend','Reflective','mei_romantic'),
    mk('メイ姉さん、ブルジョアジーって何?お父さんに聞くね','Mei-sis — bourg-what-Dad-ask','Curious close','sho_child'),
  ]},
  {id:'conv_10239',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、オリックスのファンだったな','Riku — Orix-fan','Curious teen','sakura_teen'),
    mk('お前、テレビ朝日の音楽番組観てたな、桜','You — EX-music-watch Sakura','Curious','riku_teen'),
    mk('リク、お前ん家、スズキの軽自動車だったな','Riku — your-home-Suzuki-light','Curious','sakura_teen'),
    mk('お前、男優志望って言ってたな、桜','You — actor-aim-said Sakura','Curious','riku_teen'),
    mk('リク、お前、世界史でソビエト連邦習ったろ?','Riku — wld-hist-Soviet?','Curious','sakura_teen'),
    mk('お前、ケニアのマラソン選手憧れてたな、桜','You — Kenya-mar-admire Sakura','Curious','riku_teen'),
    mk('リク、お前、司馬遼太郎の坂の上の雲読んでたな','Riku — Shiba-Saka-no-Ue read','Curious','sakura_teen'),
    mk('お前、社会でブルジョアジー習ったろ?桜','You — soc-bourg? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10240',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがオリックスのジャージを下さったわ','Sho — Dad-Orix-jersey','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとテレビ朝日のニュース観たよ','Mom — me Dad-EX-news','Eager child','sho_child'),
    mk('翔くん、お父さんがスズキ自動車工場を見学された','Sho — Dad-Suzuki-fact-tour','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと男優のドキュメンタリー観たよ','Mom — me Dad-actor-doc','Eager child','sho_child'),
    mk('翔くん、お父さんが旧ソビエトの歴史を教えて下さったわ','Sho — Dad-old-Soviet-hist-teach','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとケニアの絵本見たよ','Mom — me Dad-Kenya-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが司馬遼太郎の本を貸して下さったわ','Sho — Dad-Shiba-book-lend','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとブルジョアジーのお話聞いたよ','Mom — me Dad-bourg-told','Eager close','sho_child'),
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

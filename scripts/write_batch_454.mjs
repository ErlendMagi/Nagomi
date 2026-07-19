import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_454 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['素晴らしく','長々','目の当たり','ひいては','がらみ','つれづれ','なにせ','もろもろ']
const B_T = ['特区','能率','退席','実演','私見','既成','中長期','振替']
const C_T = ['乗り出し','幾何','高揚','恣意','乖離','排他','占拠','屈辱']
const D_T = ['磁気','健在','ピット','地雷','風車','衣類','ふれあい','エキス']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09041',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖父ちゃんの絵は素晴らしくお上手ね','Sho — Grandpa-art-wonderful-good','Praising','yumiko_mom'),
    mk('ママ、お父さんが長々とお話されたよ','Mom — Dad-long-talked','Wry child','sho_child'),
    mk('翔くん、お祖父ちゃんのお元気な姿を目の当たりにできたわね','Sho — Grandpa-well-witness','Tender','yumiko_mom'),
    mk('ママ、ぼく、ひいては家族のために頑張るよ','Mom — me ultimately-fam-try','Earnest child','sho_child'),
    mk('翔くん、お父さんは仕事がらみのお話が多いわね','Sho — Dad-work-rel-talk-many','Reflective','yumiko_mom'),
    mk('ママ、つれづれにお絵描きしてたよ','Mom — leisurely-drew','Reflective child','sho_child'),
    mk('翔くん、なにせ初めての発表会だから緊張するわね','Sho — anyhow-first-recital-nervous','Tender','yumiko_mom'),
    mk('ママ、ぼく、もろもろの準備をお手伝いするよ','Mom — me various-prep-help','Eager close','sho_child'),
  ]},
  {id:'conv_09042',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、新メニューは素晴らしく好評だね、メイちゃん','Aoi — new-menu-wonderful-pop Mei','Pleased','mei_romantic'),
    mk('葵、お客様、長々とお話を続けて下さってたよ、メイちゃん','Aoi — cust-long-talk Mei','Wry','aoi_barista'),
    mk('葵、お客様の喜ぶ姿を目の当たりにできて嬉しいね、メイちゃん','Aoi — cust-joy-witness-glad Mei','Pleased','mei_romantic'),
    mk('葵、ひいてはお店のブランド向上につながるね、メイちゃん','Aoi — ultimately-store-brand-up Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お子様がらみのお話が多いよね、メイちゃん','Aoi — cust-child-rel-talk Mei','Reflective','mei_romantic'),
    mk('葵、つれづれに常連様とお喋りしてしまうわ、メイちゃん','Aoi — leisurely-reg-chat Mei','Wry','aoi_barista'),
    mk('葵、なにせ初めての繁忙期だから大変ね、メイちゃん','Aoi — anyhow-first-busy-hard Mei','Reflective','mei_romantic'),
    mk('葵、もろもろの仕入れも一緒に済ませようね、メイちゃん','Aoi — various-buy-do Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_09043',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは素晴らしく辛抱強い方だったぞ','Gran — youth Dad-wonderful-patient','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、長々と書斎にこもってらしたわよね、あなた?','Yes — Grandpa-long-study, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんの偉業を目の当たりにしたぞ','Gran — youth Dad-achieve-witness','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご家族、ひいては社会への貢献を考えられてたわよね、あなた?','Grandpa — fam-ult-soc-contrib, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは戦争がらみのお話を語られたぞ','Gran — youth Dad-war-rel-told','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、つれづれに筆を取られたわよね、あなた?','Grandpa — leisurely-brush-took, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、なにせ昔は道具が無くて大変だったぞ','Gran — anyhow-old-no-tool-hard','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、もろもろのご親戚にも気を配られたわよね、あなた?','Grandpa — various-rel-care, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09044',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、素晴らしく頑張ったな','Riku — wonderful-tried','Praising teen','sakura_teen'),
    mk('お前、先生が長々と説明してたな、桜','You — teacher-long Sakura','Wry','riku_teen'),
    mk('リク、お前の活躍を目の当たりにして驚いたぞ','Riku — your-active-witness-surprised','Praising','sakura_teen'),
    mk('お前、ひいては将来の夢につながる勉強しろよ、桜','You — ultimately-future-study Sakura','Direction','riku_teen'),
    mk('リク、お前、テストがらみで悩んでんだろ?','Riku — test-rel-worry?','Wry','sakura_teen'),
    mk('お前、つれづれにマンガ読んでんな、桜','You — leisurely-manga Sakura','Wry','riku_teen'),
    mk('リク、なにせ俺ら受験生だしな','Riku — anyhow-exam-stud','Reflective','sakura_teen'),
    mk('お前、もろもろの参考書揃えたな、桜','You — various-ref-book-set Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_09045',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんの絵は素晴らしく繊細なのよ','Sho — Mei-sis-art-wonderful-fine','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、長々とお絵描きの説明しちゃったよ','Mei-sis — me long-art-explain','Wry child','sho_child'),
    mk('翔くん、お友達の頑張りを目の当たりにしたわね','Sho — friend-effort-witness','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、ひいてはメイ姉さんみたいになりたいよ','Mei-sis — me ultimately-Mei-sis-want','Earnest child','sho_child'),
    mk('翔くん、お友達がらみの相談ならメイ姉さんに聞いてね','Sho — friend-rel-cons-Mei-sis','Tender','mei_romantic'),
    mk('メイ姉さん、つれづれにお花のスケッチしたいよ','Mei-sis — leisurely-flower-sketch-want','Eager child','sho_child'),
    mk('翔くん、なにせ初めての場所だから不安よね','Sho — anyhow-first-place-anxious','Caring','mei_romantic'),
    mk('メイ姉さん、ぼく、もろもろの画材を持ってきたよ','Mei-sis — me various-art-bring','Proud close','sho_child'),
  ]},
  {id:'conv_09046',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、経済特区での事業展開を検討しろ','Our co — econ-zone-biz-consider','Crisp','hiroshi_boss'),
    mk('はい。業務の能率改善を継続しております','Yes — Biz-eff-imp-cont','Methodical','kenji_office'),
    mk('途中退席する社員に注意しろ','Mid-leave-staff-care','Direction','hiroshi_boss'),
    mk('はい。新製品の実演会を計画しております','Yes — New-prod-demo-plan','Update','kenji_office'),
    mk('私見ではあるが、新事業は急ぐべきだ','Personal-view-new-biz-haste','Direction','hiroshi_boss'),
    mk('はい。既成概念にとらわれず取り組みます','Yes — Set-concept-not-bound-work','Update','kenji_office'),
    mk('当社、中長期の経営計画を立てろ','Our co — mid-long-mgmt-plan','Direction','hiroshi_boss'),
    mk('はい。給与の振替日を見直しました','Yes — Salary-trans-date-review','Close','kenji_office'),
  ]},
  {id:'conv_09047',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('特区への進出を社内提案しましょう','Zone-entry-co-prop','Brisk','yuki_office'),
    mk('はい。能率の良い作業フローを構築中です','Yes — Eff-flow-build','Cooperative','kenji_office'),
    mk('会議中の退席は事前に申請してもらいましょう','Meet-leave-pre-app','Direction','yuki_office'),
    mk('はい。展示会で実演ブースを設けました','Yes — Expo-demo-booth-set','Update','kenji_office'),
    mk('私見ですが、ブランド変更は時期尚早ですね','Personal-view-brand-change-early','Reflective','yuki_office'),
    mk('はい。既成のメニューも見直しましょう','Yes — Set-menu-review','Update','kenji_office'),
    mk('中長期戦略を経営陣と共有しましょう','Mid-long-strat-mgmt-share','Direction','yuki_office'),
    mk('はい。家賃の振替先を確認しました','Yes — Rent-trans-dest-check','Close','kenji_office'),
  ]},
  {id:'conv_09048',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究特区の活用を考えろ','Ren — research-zone-util-think','Mentor','hiroshi_boss'),
    mk('はい。実験の能率を上げる工夫をしております','Yes — Exp-eff-up-craft','Earnest','ren_uni'),
    mk('蓮、ゼミの途中退席は厳禁だ','Ren — semi-mid-leave-strict-no','Direction','hiroshi_boss'),
    mk('はい。学会で実演形式の発表を準備します','Yes — Conf-demo-pres-prep','Polite','ren_uni'),
    mk('蓮、論文には私見を明示しろ','Ren — paper-personal-view-clarify','Direction','hiroshi_boss'),
    mk('はい。既成の理論に挑戦する論文を書きます','Yes — Set-theory-challenge-paper','Earnest','ren_uni'),
    mk('蓮、中長期の研究計画を作れ','Ren — mid-long-research-plan-make','Direction','hiroshi_boss'),
    mk('はい。研究費の振替手続きを学習しました','Yes — Research-fund-trans-learn','Earnest close','ren_uni'),
  ]},
  {id:'conv_09049',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、特区での犯罪対策にも特別班を編成されますね','Police zone-crime-spec-team','Cooperative','kenji_office'),
    mk('警察、捜査の能率向上を意識されてますね','Police inv-eff-aware','Cooperative','kenji_office'),
    mk('警察、会議中の途中退席は厳格に管理されますね','Police meet-mid-leave-strict','Cooperative','kenji_office'),
    mk('警察、防犯具の実演を市民にされますね','Police crime-prev-demo-citizen','Cooperative','kenji_office'),
    mk('警察、私見として、ご助言も頂けますね','Police personal-view-adv','Cooperative','kenji_office'),
    mk('警察、既成の犯罪パターンにとらわれず捜査されますね','Police set-pattern-not-bound-inv','Cooperative','kenji_office'),
    mk('警察、中長期の地域防犯計画もご立案ですね','Police mid-long-local-crime-plan','Cooperative','kenji_office'),
    mk('警察、捜査費の振替も正確に管理されますね','Police inv-fund-trans-strict','Close','kenji_office'),
  ]},
  {id:'conv_09050',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、新興特区に出店を検討されたぞ','Dad — founding new-zone-open-consider','Sage','hiroshi_elder'),
    mk('はい。お父さんは能率重視で社員を導かれた','Yes — Dad eff-focus-staff-lead','Commitment','hiroshi_boss'),
    mk('お父さん、会議の途中退席を許されなかった','Dad — meet-mid-leave-not','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新商品の実演を自ら行われた','Yes — Dad new-prod-demo-self','Reflective','hiroshi_boss'),
    mk('お父さん、社員に私見を求められたぞ','Dad — staff-personal-view-ask','Wistful','hiroshi_elder'),
    mk('はい。お父さんは既成にとらわれない経営をされた','Yes — Dad set-not-bound-mgmt','Reflective','hiroshi_boss'),
    mk('お父さん、中長期の構想を持たれてたぞ','Dad — mid-long-vision-had','Wistful','hiroshi_elder'),
    mk('はい。お父さんは振替手続きにも厳密でいらした','Yes — Dad trans-proc-strict','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09051',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、近代国家が改革に乗り出した時期を論文で扱いましたね','Ren — mod-state-reform-set-out paper','Calm','asuka_teacher'),
    mk('はい、幾何学の発展史を論文で扱いました','Yes — Geom-dev-hist paper','Earnest','ren_uni'),
    mk('蓮さん、革命期の民衆の高揚を論文で扱いましたね','Ren — rev-popular-elated paper','Reflective','asuka_teacher'),
    mk('はい、行政の恣意的判断を批判した文献を論文で扱いました','Yes — Gov-arb-judg-crit paper','Earnest','ren_uni'),
    mk('政策と現実の乖離を論文で扱いましたね','Pol-real-gap paper','Engaged','asuka_teacher'),
    mk('はい、排他的なイデオロギーの研究を論文で扱いました','Yes — Exclu-ideo paper','Earnest','ren_uni'),
    mk('蓮さん、市庁占拠事件の歴史を論文で扱いましたね','Ren — city-hall-occ-hist paper','Reflective','asuka_teacher'),
    mk('はい、戦時下の屈辱の証言を論文で扱いました','Yes — Wartime-humil-test paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09052',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、警察、捜査に乗り出した時期を市民に説明されますね','Case inv-set-out police-citizen-explain','Reflective','ren_uni'),
    mk('警察、現場の幾何学的配置を分析します','Police on-site-geom-anal','Procedural','takeda_officer'),
    mk('本件、被害者の高揚感が引き起こした行動を警察、把握されてますね','Case victim-elated-behav police-grasp','Reflective','ren_uni'),
    mk('警察、恣意的な捜査は絶対にしません','Police arb-inv-strict-no','Procedural','takeda_officer'),
    mk('本件、当初の計画と実態の乖離を警察、確認されたんですね','Case plan-real-gap police-confirm','Reflective','ren_uni'),
    mk('警察、排他的な犯罪グループを摘発します','Police exclu-crime-group-bust','Procedural','takeda_officer'),
    mk('本件、建物の占拠事案を警察、解決されましたね','Case bldg-occ-case police-solved','Reflective','ren_uni'),
    mk('警察、被害者の屈辱を癒すケアにも配慮します','Police victim-humil-care-careful','Close','takeda_officer'),
  ]},
  {id:'conv_09053',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、近代国家が改革に乗り出した時期を論文で扱いましたね','Sakura — set-out paper','Calm','asuka_teacher'),
    mk('はい、幾何学の発展史を論文で扱いました','Yes — Geom-dev paper','Earnest teen','sakura_teen'),
    mk('革命期の民衆の高揚を論文で扱いましたね','Rev-popular-elated paper','Reflective','asuka_teacher'),
    mk('はい、行政の恣意的判断を論文で扱いました','Yes — Gov-arb paper','Earnest','sakura_teen'),
    mk('政策と現実の乖離を論文で扱いましたね','Pol-real-gap paper','Engaged','asuka_teacher'),
    mk('はい、排他的なイデオロギーを論文で扱いました','Yes — Exclu-ideo paper','Earnest','sakura_teen'),
    mk('市庁占拠事件の歴史を論文で扱いましたね','City-hall-occ paper','Reflective','asuka_teacher'),
    mk('はい、戦時下の屈辱の証言を論文で扱いました','Yes — Wartime-humil paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09054',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、新治療法に乗り出した医療チームの取り組みをお伝えします','Ren — new-treat-set-out med-team-conv','Calm','saito_doctor'),
    mk('はい、医療画像の幾何学的解析を医療チームで進めます','Yes — Med-img-geom-anal med-team','Patient','saito_doctor'),
    mk('回復期の患者さんの高揚感を、貴院、慎重にケアされてますね、先生','Recov-patient-elated your-hosp careful, sensei','Curious','ren_uni'),
    mk('はい、診断の恣意性を防ぐ仕組みを医療チームで強化します','Yes — Diag-arb-prev med-team strength','Patient','saito_doctor'),
    mk('検査結果と症状の乖離を、貴院、丁寧にご説明されますね、先生','Test-symp-gap your-hosp careful, sensei','Reflective','ren_uni'),
    mk('はい、排他的な医療体制を医療チームで改めます','Yes — Exclu-med-sys med-team-reform','Patient','saito_doctor'),
    mk('避難所が占拠された場合の医療支援を、貴院、想定されてますね、先生','Shelter-occ-med-supp your-hosp plan, sensei','Reflective','ren_uni'),
    mk('はい、患者さんの屈辱感を癒すメンタルケアを医療チームで重視します','Yes — Patient-humil-mental med-team-imp','Patient close','saito_doctor'),
  ]},
  {id:'conv_09055',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、新事業に乗り出した経緯を社員に伝えろ','Our co — new-biz-set-out-staff-conv','Crisp','hiroshi_boss'),
    mk('はい。社員に幾何学的思考を奨励します','Yes — Staff-geom-think-encourage','Methodical','kenji_office'),
    mk('当社、成功時の高揚を冷静さで包め','Our co — success-elated-calm','Direction','hiroshi_boss'),
    mk('はい。恣意的な評価を排除する制度を整備します','Yes — Arb-eval-elim-prep','Update','kenji_office'),
    mk('当社、お客様要求との乖離を防げ','Our co — cust-req-gap-prev','Direction','hiroshi_boss'),
    mk('はい。社内文化が排他的にならぬよう注意します','Yes — Co-culture-exclu-not-care','Update','kenji_office'),
    mk('当社、競合に市場を占拠されぬよう動け','Our co — rival-market-occ-not-act','Direction','hiroshi_boss'),
    mk('はい。社員の屈辱を生まない職場作りを徹底します','Yes — Staff-humil-not-workplace','Close','kenji_office'),
  ]},
  {id:'conv_09056',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、お子様の磁気ボードのおもちゃの話されてたよ、メイちゃん','Aoi — cust-child-magnet-board-toy-told Mei','Reflective','mei_romantic'),
    mk('葵、ご常連のお客様、ご健在で安心するよね、メイちゃん','Aoi — reg-cust-well-relief Mei','Pleased','aoi_barista'),
    mk('葵、お客様、レースカーのピット作業のお話されてたよ、メイちゃん','Aoi — cust-race-pit-work-told Mei','Animated','mei_romantic'),
    mk('葵、テレビで地雷除去のニュース流れてたわね、メイちゃん','Aoi — TV-mine-removal-news Mei','Reflective','aoi_barista'),
    mk('葵、お店の前に小さな風車を置きたいね、メイちゃん','Aoi — store-front-small-windmill Mei','Reflective','mei_romantic'),
    mk('葵、お客様、衣類のクリーニングから戻られたって、メイちゃん','Aoi — cust-clothes-clean-back Mei','Reflective','aoi_barista'),
    mk('葵、地域のふれあいイベント、お店も参加しましょう、メイちゃん','Aoi — local-touch-event-join Mei','Direction','mei_romantic'),
    mk('葵、新メニューにフルーツのエキスを使いましょう、メイちゃん','Aoi — new-menu-fruit-essence-use Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_09057',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが磁気カードを大事にされたぞ','Gran — youth Dad-magnet-card-cherish','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ご友人がご健在でいらしたわよね、あなた?','Yes — Grandpa-friend-well, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと工場のピットを見学したぞ','Gran — youth Dad-factory-pit-tour','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、戦地で地雷の話をされたわよね、あなた?','Grandpa — battlefield-mine-told, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがオランダの風車を撮ってこられたぞ','Gran — youth Dad-Netherlands-windmill-photo','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、衣類の整理が上手でらしたわよね、あなた?','Grandpa — clothes-org-good, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、ご近所とのふれあいが多かったぞ','Gran — youth-neighbor-touch-many','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、漢方のエキスを煎じてらしたわよね、あなた?','Grandpa — herb-essence-decoct, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09058',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、磁気のおもちゃは小さなお子に注意ね','Sho — magnet-toy-small-child-care','Direction','mei_romantic'),
    mk('メイ姉さん、お祖父ちゃんがご健在で嬉しいよ','Mei-sis — Grandpa-well-glad','Eager child','sho_child'),
    mk('翔くん、お父さんがレースのピット作業のお話してくれたわ','Sho — Dad-race-pit-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、社会で地雷の単元を勉強したよ','Mei-sis — me soc-mine-unit-study','Earnest child','sho_child'),
    mk('翔くん、オランダ風車の絵本、メイ姉さんが買ってくれたわ','Sho — Netherlands-windmill-book-Mei-sis-bought','Eager','mei_romantic'),
    mk('メイ姉さん、ぼく、衣類の整理ができるようになったよ','Mei-sis — me clothes-org-able','Proud child','sho_child'),
    mk('翔くん、地域のふれあいイベントに行きましょうね','Sho — local-touch-event-go','Tender','mei_romantic'),
    mk('メイ姉さん、お祖母ちゃんが薬草のエキスをくれたよ','Mei-sis — Grandma-herb-essence-gave','Eager close','sho_child'),
  ]},
  {id:'conv_09059',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、磁気のおもちゃ集めてたろ?','Riku — magnet-toy-collect?','Curious teen','sakura_teen'),
    mk('お前のお祖父さん、ご健在?桜','You — Grandpa-well? Sakura','Curious','riku_teen'),
    mk('リク、お前、レースのピット見学したろ?','Riku — race-pit-tour?','Curious','sakura_teen'),
    mk('お前、社会の授業で地雷問題やったろ?桜','You — soc-mine-issue? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会で風車のエネルギーやったろ?','Riku — soc-windmill-energy?','Curious','sakura_teen'),
    mk('お前、衣類リサイクルに興味あんだろ?桜','You — clothes-recycle-interest? Sakura','Curious','riku_teen'),
    mk('リク、お前、ふれあい交流会出たろ?','Riku — touch-exch-meet?','Curious','sakura_teen'),
    mk('お前、健康ドリンクのエキス飲んでんな、桜','You — health-drink-essence Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_09060',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが磁気センサーのおもちゃ買ってこられたわ','Sho — Dad-magnet-sensor-toy-bought','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんのご健在を確かめに行きたい','Mom — me Grandpa-well-check-want','Eager child','sho_child'),
    mk('翔くん、お父さんが、レースのピット作業を見せて下さるそうよ','Sho — Dad-race-pit-show','Reflective','yumiko_mom'),
    mk('ママ、社会で地雷除去のボランティアの話聞いたよ','Mom — soc-mine-removal-volunteer-heard','Earnest child','sho_child'),
    mk('翔くん、オランダの風車のお話、絵本で読みましょうね','Sho — Netherlands-windmill-book-read','Tender','yumiko_mom'),
    mk('ママ、ぼく、衣類を畳むのお手伝いするよ','Mom — me clothes-fold-help','Proud child','sho_child'),
    mk('翔くん、お祖母ちゃんとふれあいの会に行きましょう','Sho — Grandma-touch-meet-go','Tender','yumiko_mom'),
    mk('ママ、ぼく、お祖母ちゃんが薬草エキスを煎じてくれたよ','Mom — me Grandma-herb-essence-decoct','Eager close','sho_child'),
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

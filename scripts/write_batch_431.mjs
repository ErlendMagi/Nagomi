import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_431 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['しだい','顔つき','過ぎ去っ','おねがい','ちがっ','あらわし','気が付く','どきどき']
const B_T = ['月収','出来高','同上','組合せ','既定','特約','あっせん','引き渡し']
const C_T = ['養育','全滅','大佐','私学','プロパガンダ','痴漢','偽善','処方箋']
const D_T = ['重厚','緑茶','木星','レンガ','交響楽','ブドウ','焼き鳥','安楽']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08581',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんから連絡しだい、お知らせするわね','Sho — Dad-contact-as-soon notify','Caring','yumiko_mom'),
    mk('ママ、お父さんの顔つきが、ちょっと疲れて見えるよ','Mom — Dad-look-bit-tired','Reflective child','sho_child'),
    mk('翔くん、お祖父ちゃんの時代も、過ぎ去ってしまったわね','Sho — Grandpa-era-passed','Wistful','yumiko_mom'),
    mk('ママ、ぼく、お父さんにおねがいがあるよ','Mom — me Dad-request','Earnest child','sho_child'),
    mk('翔くん、お父さんとぼくの予定がちがっていたわよ','Sho — Dad-me-plan-differed','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お絵描きで気持ちをあらわしたよ','Mom — me drawing-feeling-expressed','Proud child','sho_child'),
    mk('翔くん、お母さんがおやつを冷蔵庫に入れたの、気が付くかしらね','Sho — Mom-snack-fridge-put notice','Curious','yumiko_mom'),
    mk('ママ、ぼく、運動会の発表でどきどきしてるよ','Mom — me sports-pres-thumping','Earnest close','sho_child'),
  ]},
  {id:'conv_08582',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、新メニューの素材が届きしだい、試作を始めましょう、メイちゃん','Aoi — new-menu-mat-arrive-as-soon trial Mei','Brisk','mei_romantic'),
    mk('葵、お客様、今日は明るい顔つきでお見えになったわよ、メイちゃん','Aoi — cust-today-bright-look Mei','Pleased','aoi_barista'),
    mk('葵、お店の創業時代は、過ぎ去ったとは言えない思い出ね、メイちゃん','Aoi — store-found-era passed-not-mem Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お会計、おねがいって仰ってたよ、メイちゃん','Aoi — cust-pay-please-said Mei','Reflective','aoi_barista'),
    mk('葵、お客様のご注文が、ちがってお伝えしてしまったわ、メイちゃん','Aoi — cust-order-mistaken-conv Mei','Wry','mei_romantic'),
    mk('葵、お客様、感想を素直にあらわしてくださってありがたいわ、メイちゃん','Aoi — cust-feeling-honestly-expressed grateful Mei','Pleased','aoi_barista'),
    mk('葵、お客様、新メニューの香りに気が付くと、嬉しそうね、メイちゃん','Aoi — cust-new-menu-aroma-notice happy Mei','Pleased','mei_romantic'),
    mk('葵、新メニュー発表前は、どきどきするわね、メイちゃん','Aoi — new-menu-pre-launch thumping Mei','Animated close','aoi_barista'),
  ]},
  {id:'conv_08583',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは「お便り届きしだい」と仰ってたぞ','Gran — youth Dad "letter-arrive-as-soon"-said','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃんの顔つきは、いつも穏やかでいらしたわよね、あなた?','Yes — Grandpa-look always-calm, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと若い時代は過ぎ去ってしまったぞ','Gran — youth Dad young-era passed','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、孫から「おねがい」とお願いされてらしたわよね、あなた?','Grandpa — grandkid-"please"-asked, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんのお考えとちがって、私は反対したぞ','Gran — youth Dad-view-differ-opposed','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご自分のお気持ちを書道であらわしていらしたわよね、あなた?','Grandpa — self-feeling-calligraphy-expressed, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんは細かい事にも気が付く方だったぞ','Gran — Dad detail-notice-person','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様にお会いになる時、どきどきされたわよね、あなた?','Grandpa — grandkid-meet-thumping, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08584',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、テスト結果届きしだい教えろよ','Riku — test-result-arrive-as-soon tell','Direction teen','sakura_teen'),
    mk('お前、今日、顔つき暗いぞ、桜','You — today-look-dark Sakura','Curious','riku_teen'),
    mk('リク、お前との中学時代、過ぎ去って早いな','Riku — your-mid-school passed-fast','Wistful','sakura_teen'),
    mk('お前、ノート貸してって、おねがいだろ?桜','You — notebook-lend-please? Sakura','Wry','riku_teen'),
    mk('リク、お前の答え、俺とちがってるぞ','Riku — your-answer-mine-differ','Wry','sakura_teen'),
    mk('お前、絵で感情あらわしてんな、桜','You — drawing-emo-express Sakura','Praising','riku_teen'),
    mk('リク、お前、忘れ物に気が付くの遅すぎだろ','Riku — forget-notice-too-late','Wry','sakura_teen'),
    mk('お前、発表前、どきどきしてんだろ?桜','You — pre-pres thumping? Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_08585',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんは仕事が決まりしだい、お知らせするね','Sho — Mei-sis work-decide-as-soon notify','Tender','mei_romantic'),
    mk('メイ姉さん、お祖父ちゃんの顔つき、優しいよね','Mei-sis — Grandpa-look-kind','Reflective child','sho_child'),
    mk('翔くん、メイ姉さんも子供時代が過ぎ去ったのよ','Sho — Mei-sis-childhood-passed','Wistful','mei_romantic'),
    mk('メイ姉さん、メイ姉さんに大事なおねがいがあるよ','Mei-sis — important-please','Earnest child','sho_child'),
    mk('翔くん、お絵描きの色がぼくの想像とちがっていたわね','Sho — drawing-color-imag-differ','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お絵描きで気持ちをあらわしたよ','Mei-sis — drawing-feeling-expressed','Proud child','sho_child'),
    mk('翔くん、ぼくが置いた本に気が付くかしら、お母さん','Sho — me-placed-book-notice, Mom?','Curious','mei_romantic'),
    mk('メイ姉さん、ぼく、発表前にどきどきするよ','Mei-sis — me-pre-pres-thumping','Earnest close','sho_child'),
  ]},
  {id:'conv_08586',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、社員の月収アップを目指せ','Our co — staff-monthly-income-up aim','Crisp','hiroshi_boss'),
    mk('はい。営業の出来高制度を改定します','Yes — Sales-result-pay-rev','Methodical','kenji_office'),
    mk('資料の各項目は、同上で対応しろ','Doc-each-item ditto-handle','Direction','hiroshi_boss'),
    mk('はい。新メニューの組合せ案を準備しました','Yes — New-menu-combo-plan prep','Update','kenji_office'),
    mk('既定の方針通り進めろ','As-set-policy progress','Direction','hiroshi_boss'),
    mk('はい。お得意様への特約条項を更新しました','Yes — VIP-special-clause-update','Update','kenji_office'),
    mk('業者間のあっせん料を見直せ','Vendor-broker-fee review','Direction','hiroshi_boss'),
    mk('はい。お取引先との引き渡し日を確定しました','Yes — Partner-handover-date fixed','Close','kenji_office'),
  ]},
  {id:'conv_08587',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('社員の月収を業界平均と比較しましょう','Staff-monthly-income industry-avg-compare','Brisk','yuki_office'),
    mk('はい。出来高給の社員制度を見直しました','Yes — Result-pay-staff-system reviewed','Cooperative','kenji_office'),
    mk('別表の数値は同上で省略しましょう','Sub-table-num ditto-omit','Direction','yuki_office'),
    mk('はい。ご注文の組合せパターンを集計しました','Yes — Order-combo-pattern compiled','Update','kenji_office'),
    mk('既定の手順を新人にも教えましょう','As-set-proc newbie-teach','Direction','yuki_office'),
    mk('はい。お取引先との特約条項を一覧化しました','Yes — Partner-special-clause-list','Update','kenji_office'),
    mk('人材あっせん会社との契約を更新しましょう','Recruit-broker-co-contract-renew','Direction','yuki_office'),
    mk('はい。商品の引き渡し場所を再確認します','Yes — Prod-handover-loc-recheck','Close','kenji_office'),
  ]},
  {id:'conv_08588',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究員の月収相場を確認しろ','Ren — researcher-monthly-income-rate check','Mentor','hiroshi_boss'),
    mk('はい。論文出来高に応じた賞与制度を学習しました','Yes — Paper-result-bonus-system learned','Earnest','ren_uni'),
    mk('蓮、論文の参考文献に同上を多用するな','Ren — paper-ref ditto-overuse-no','Direction','hiroshi_boss'),
    mk('はい。実験条件の組合せ表を準備しました','Yes — Exp-cond-combo-table prep','Polite','ren_uni'),
    mk('蓮、既定の実験手順を守れ','Ren — as-set-exp-proc keep','Direction','hiroshi_boss'),
    mk('はい。学会との特約契約を確認しました','Yes — Conf-special-contract-check','Earnest','ren_uni'),
    mk('蓮、留学先のあっせんを大学に依頼しろ','Ren — study-abroad-broker univ-req','Direction','hiroshi_boss'),
    mk('はい。試料の引き渡し手続を覚えます','Yes — Sample-handover-proc learn','Earnest close','ren_uni'),
  ]},
  {id:'conv_08589',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、若手警察官の月収改善が話題ですね','Police young-officer-monthly-income-topic','Calm','takeda_officer'),
    mk('はい。警察、出来高ノルマで現場が疲弊しないようご配慮、ありがたいです','Yes — Police result-quota on-site-tire-care grateful','Cooperative','kenji_office'),
    mk('警察、報告書の項目は同上で省略しないように指導します','Police report-item ditto-omit-no guide','Procedural','takeda_officer'),
    mk('はい。警察、犯罪パターンの組合せ分析、進められてますね','Yes — Police crime-pattern-combo-anal','Cooperative','kenji_office'),
    mk('警察、既定の捜査手順に従います','Police as-set-inv-proc-follow','Procedural','takeda_officer'),
    mk('はい。警察、保険特約詐欺の事件を捜査されてますね','Yes — Police ins-special-fraud-inv','Cooperative','kenji_office'),
    mk('警察、違法あっせん業者を摘発します','Police illegal-broker-bust','Procedural','takeda_officer'),
    mk('はい。警察、容疑者の引き渡し手続が完了されましたね','Yes — Police suspect-handover-proc done','Close','kenji_office'),
  ]},
  {id:'conv_08590',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、社員の月収を引き上げる決断をされたぞ','Dad — founding staff-monthly-income-raise-decide','Sage','hiroshi_elder'),
    mk('はい。お父さんは出来高制の透明性を重んじられました','Yes — Dad result-pay-transp-cherish','Commitment','hiroshi_boss'),
    mk('お父さん、書類で同上を安易に使わないと仰ってたぞ','Dad — doc-ditto easy-use-no-said','Wistful','hiroshi_elder'),
    mk('はい。お父さんは商品の組合せ提案を社員に求められた','Yes — Dad prod-combo-prop-staff-ask','Reflective','hiroshi_boss'),
    mk('お父さん、既定の枠を超えた新事業に挑まれたぞ','Dad — as-set-frame-beyond-new-biz','Wistful','hiroshi_elder'),
    mk('はい。お父さんはお取引先との特約契約を大切にされた','Yes — Dad partner-special-contract-cherish','Reflective','hiroshi_boss'),
    mk('お父さん、人材あっせん会社との関係も築かれたぞ','Dad — recruit-broker-co-rel-built','Wistful','hiroshi_elder'),
    mk('はい。お父さんは商品引き渡し時、ご自身で確認された','Yes — Dad prod-handover-time self-check','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08591',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、子供の養育環境に関する研究を論文で扱いましたね','Ren — child-rearing-env-research paper','Calm','asuka_teacher'),
    mk('はい、全滅した部隊の記録を論文で扱いました','Yes — Annihilated-unit-record paper','Earnest','ren_uni'),
    mk('蓮さん、ある大佐の戦時記録を論文で扱いましたね','Ren — colonel-war-record paper','Reflective','asuka_teacher'),
    mk('はい、私学教育の歴史を論文で扱いました','Yes — Private-edu-hist paper','Earnest','ren_uni'),
    mk('戦時下のプロパガンダ映像分析を論文で扱いましたね','War-prop-video-anal paper','Engaged','asuka_teacher'),
    mk('はい、痴漢事件の社会要因を論文で扱いました','Yes — Molest-soc-factor paper','Earnest','ren_uni'),
    mk('蓮さん、慈善活動と偽善の境界を論文で扱いましたね','Ren — charity-hypocrisy-line paper','Reflective','asuka_teacher'),
    mk('はい、処方箋の電子化に関する研究を論文で扱いました','Yes — E-prescript-research paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08592',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、養育放棄事案を警察、慎重に扱われてますね','Case rear-neglect police-careful','Reflective','ren_uni'),
    mk('警察、捜査チームが全滅しないよう体制を整えております','Police inv-team-annihilation-prev system','Procedural','takeda_officer'),
    mk('本件、軍OBの大佐との連携を警察、なさってますね','Case mil-OB-colonel-link police','Reflective','ren_uni'),
    mk('警察、私学への防犯指導も担当します','Police private-school-crime-prev handle','Procedural','takeda_officer'),
    mk('本件、プロパガンダ的書き込みを警察、捜査されてますね','Case prop-post police-inv','Reflective','ren_uni'),
    mk('警察、痴漢事件は厳しく対応します','Police molest strict-resp','Procedural','takeda_officer'),
    mk('本件、偽善的な寄付詐欺を警察、捜査されてますね','Case hypo-donation-fraud police-inv','Reflective','ren_uni'),
    mk('警察、不正な処方箋発行事件にも対応します','Police illegal-prescript-case resp','Close','takeda_officer'),
  ]},
  {id:'conv_08593',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、子供の養育環境を論文で扱いましたね','Sakura — child-rear-env paper','Calm','asuka_teacher'),
    mk('はい、全滅した部隊の記録を論文で扱いました','Yes — Anni-unit-rec paper','Earnest teen','sakura_teen'),
    mk('ある大佐の戦時記録を論文で扱いましたね','Colonel-war-rec paper','Reflective','asuka_teacher'),
    mk('はい、私学教育の歴史を論文で扱いました','Yes — Private-edu paper','Earnest','sakura_teen'),
    mk('戦時下のプロパガンダ映像を論文で扱いましたね','War-prop-video paper','Engaged','asuka_teacher'),
    mk('はい、痴漢事件の社会要因を論文で扱いました','Yes — Molest-soc paper','Earnest','sakura_teen'),
    mk('慈善と偽善の境界を論文で扱いましたね','Charity-hypo paper','Reflective','asuka_teacher'),
    mk('はい、処方箋の電子化を論文で扱いました','Yes — E-prescript paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08594',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、養育不全による発達障害の研究を医療チームで参照しております','Ren — rear-fail-dev-disorder med-team ref','Calm','saito_doctor'),
    mk('はい、感染で病棟が全滅状態になる事態を医療チームで防ぎます','Yes — Infect-ward-annih med-team prev','Patient','saito_doctor'),
    mk('退役大佐の医療相談を、貴院、ご担当されたんですね、先生','Retired-colonel-cons your-hosp handle, sensei','Curious','ren_uni'),
    mk('はい、私学病院との連携を医療チームで強化しております','Yes — Private-hosp-link med-team strengthen','Patient','saito_doctor'),
    mk('医療プロパガンダに惑わされぬよう、貴院、患者にご指導されてますね、先生','Med-prop-mis-led-prev your-hosp guide, sensei','Reflective','ren_uni'),
    mk('はい、痴漢被害者の心のケアを医療チームで担当します','Yes — Molest-victim-care med-team handle','Patient','saito_doctor'),
    mk('医療慈善と偽善の線引きを、貴院、なさっておられますね、先生','Med-charity-hypo-line your-hosp do, sensei','Reflective','ren_uni'),
    mk('はい、処方箋の電子化を医療チームで導入いたしました','Yes — E-prescript med-team intro','Patient close','saito_doctor'),
  ]},
  {id:'conv_08595',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、女性社員の養育支援を充実させろ','Our co — fem-staff-rear-supp enrich','Crisp','hiroshi_boss'),
    mk('はい。競合に全滅させられぬよう市場戦略を強化します','Yes — Rival-annih-prev market-strat-strengthen','Methodical','kenji_office'),
    mk('当社、退役大佐の経験者を顧問に迎えろ','Our co — ret-colonel-exp-adv','Direction','hiroshi_boss'),
    mk('はい。私学への寄付活動も継続しております','Yes — Private-edu-donate-cont','Update','kenji_office'),
    mk('当社、誤ったプロパガンダに踊らされるな','Our co — wrong-prop-not-fool','Direction','hiroshi_boss'),
    mk('はい。社員による痴漢行為は厳罰で対処します','Yes — Staff-molest strict-punish','Update','kenji_office'),
    mk('当社、偽善的なCSRには見えぬよう注意しろ','Our co — hypo-CSR-look-not care','Direction','hiroshi_boss'),
    mk('はい。社員食堂で薬の処方箋管理も支援します','Yes — Staff-cafe-prescript-mgmt-supp','Close','kenji_office'),
  ]},
  {id:'conv_08596',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、お店の重厚な内装が好きだって、メイちゃん','Aoi — cust-store-heavy-decor-like Mei','Pleased','mei_romantic'),
    mk('葵、新メニューに緑茶のラテ加えましょう、メイちゃん','Aoi — new-menu green-tea-latte-add Mei','Animated','aoi_barista'),
    mk('葵、お客様、木星のお話されてたよ、メイちゃん','Aoi — cust-Jupiter-told Mei','Reflective','mei_romantic'),
    mk('葵、お店の壁、レンガ調にしましょうね、メイちゃん','Aoi — store-wall brick-style Mei','Direction','aoi_barista'),
    mk('葵、BGMに交響楽の名曲を流したいわね、メイちゃん','Aoi — BGM-orchestra-classic-play Mei','Reflective','mei_romantic'),
    mk('葵、新メニュー、ブドウのタルト作りましょう、メイちゃん','Aoi — new-menu grape-tart-make Mei','Animated','aoi_barista'),
    mk('葵、お客様、夜は焼き鳥屋に行くって、メイちゃん','Aoi — cust-night-yakitori-go Mei','Reflective','mei_romantic'),
    mk('葵、お客様、安楽椅子で寛いでらしたよ、メイちゃん','Aoi — cust-easy-chair-relax Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08597',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが重厚な書斎の家具を選ばれたぞ','Gran — youth Dad heavy-study-furn-chose','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、毎朝緑茶を入れてらしたわよね、あなた?','Yes — Grandpa-every-morn-green-tea, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが木星の観測会に行かれたぞ','Gran — youth Dad Jupiter-obs-went','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、レンガ造りのお家にも住まれたわよね、あなた?','Grandpa — brick-house-lived, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが交響楽の演奏会に通われたぞ','Gran — youth Dad orchestra-concert-went','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、秋はブドウ狩りに連れて行ってくださったわよね、あなた?','Grandpa — autumn-grape-pick-took, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと焼き鳥屋で乾杯したぞ','Gran — youth Dad-yakitori-toast','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お庭で安楽椅子に座られてたわよね、あなた?','Grandpa — garden-easy-chair-sat, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08598',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんの家具は重厚なテーブルがあるのよ','Sho — Mei-sis-furn heavy-table','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ママと緑茶アイス食べたよ','Mei-sis — me Mom-green-tea-ice-ate','Eager child','sho_child'),
    mk('翔くん、お父さんと木星を観測しに行きましょうね','Sho — Dad-Jupiter-obs-go','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、ママとレンガ造りのお家見たよ','Mei-sis — me Mom-brick-house-saw','Eager child','sho_child'),
    mk('翔くん、メイ姉さんと交響楽団の演奏会に行きましょう','Sho — Mei-sis-orch-concert-go','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、ブドウの皮、上手にむけたよ','Mei-sis — me grape-peel-good','Proud child','sho_child'),
    mk('翔くん、お父さんと焼き鳥屋に行きましょうね','Sho — Dad-yakitori-go','Tender','mei_romantic'),
    mk('メイ姉さん、お祖父ちゃんが安楽椅子に座ってるよ','Mei-sis — Grandpa-easy-chair-sit','Eager close','sho_child'),
  ]},
  {id:'conv_08599',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前ん家、重厚な雰囲気だな','Riku — your-home-heavy-vibe','Reflective teen','sakura_teen'),
    mk('お前、ペットボトルの緑茶ばっか飲んでんな、桜','You — bottle-green-tea-only Sakura','Wry','riku_teen'),
    mk('リク、お前、理科で木星の単元やったろ?','Riku — sci-Jupiter-unit?','Curious','sakura_teen'),
    mk('お前、図工でレンガっぽい工作したろ?桜','You — craft-brick-like? Sakura','Curious','riku_teen'),
    mk('リク、お前、吹奏楽部だろ?交響楽もやんの?','Riku — band-club-orch-do?','Curious','sakura_teen'),
    mk('お前、家族でブドウ狩り行ったろ?桜','You — fam-grape-pick-went? Sakura','Curious','riku_teen'),
    mk('リク、お前、焼き鳥好きだろ?','Riku — yakitori-like?','Curious','sakura_teen'),
    mk('お前、安楽な生活すんなよ、桜','You — easy-life-don\'t Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_08600',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが重厚な書斎机を買ってらしたわ','Sho — Dad heavy-study-desk-bought','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖母ちゃんの緑茶大好きだよ','Mom — me Grandma-green-tea-love','Eager child','sho_child'),
    mk('翔くん、お父さんが木星のご本を読んでらっしゃるわ','Sho — Dad-Jupiter-book-read','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お庭にレンガを並べてお家ごっこしたよ','Mom — me garden-brick-arrange-played','Proud child','sho_child'),
    mk('翔くん、お父さんと交響楽の演奏を聴きに行きましょうね','Sho — Dad-orch-concert-go','Tender','yumiko_mom'),
    mk('ママ、お祖母ちゃんがブドウ狩りに連れてってくれたよ','Mom — Grandma-grape-pick-took','Eager child','sho_child'),
    mk('翔くん、お父さんと焼き鳥屋へ行きましょうね','Sho — Dad-yakitori-go','Tender','yumiko_mom'),
    mk('ママ、お祖父ちゃんが安楽椅子で休んでらしたよ','Mom — Grandpa-easy-chair-rest','Eager close','sho_child'),
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

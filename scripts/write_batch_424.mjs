import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_424 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['存分','思いつか','おそらくは','久し振り','こんばんわ','すっごい','言い聞かせ','戸惑い']
const B_T = ['めど','取組み','先着','借入金','略称','一級','推察','親密']
const C_T = ['逐次','紀元前','派兵','軽蔑','露呈','否決','法務大臣','会計検査院']
const D_T = ['温室','鶏肉','ダイニング','ガレージ','ライブラリー','エレクトロニクス','モノクロ','矢印']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08441',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お休みの日は存分に遊んでいいのよ','Sho — holiday fully-play OK','Caring','yumiko_mom'),
    mk('ママ、ぼく、おやつ何を食べるか思いつかないよ','Mom — me snack-what-eat can\'t think','Wry child','sho_child'),
    mk('翔くん、お父さんはおそらくは7時に帰ってくるわね','Sho — Dad probably-7-return','Reflective','yumiko_mom'),
    mk('ママ、お祖父ちゃんに久し振りに会えたよ','Mom — Grandpa long-time-meet','Eager child','sho_child'),
    mk('翔くん、お祖母ちゃんに「こんばんわ」って挨拶してね','Sho — Grandma "good-evening" greet','Direction','yumiko_mom'),
    mk('ママ、お庭のお花、すっごい綺麗だったよ','Mom — garden-flower really-pretty','Eager child','sho_child'),
    mk('翔くん、ママは「優しくね」って言い聞かせるわよ','Sho — Mom "be-kind" tell-firmly','Caring','yumiko_mom'),
    mk('ママ、ぼく、新しい学校で戸惑いがあったよ','Mom — me new-school confusion-had','Earnest child','sho_child'),
  ]},
  {id:'conv_08442',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お休みは存分に休んでね、メイちゃん','Aoi — break fully-rest Mei','Caring','mei_romantic'),
    mk('葵、新メニュー、何を出すか思いつかないよ、メイちゃん','Aoi — new-menu-what can\'t think Mei','Wry','aoi_barista'),
    mk('葵、お客様はおそらくは常連さんね、メイちゃん','Aoi — cust probably-regular Mei','Reflective','mei_romantic'),
    mk('葵、お客様、久し振りにお見えになったわよ、メイちゃん','Aoi — cust long-time-visited Mei','Pleased','aoi_barista'),
    mk('葵、お客様に「こんばんわ」って迎えようね、メイちゃん','Aoi — cust "good-evening" welcome Mei','Direction','mei_romantic'),
    mk('葵、お客様の感想、すっごい嬉しかったよ、メイちゃん','Aoi — cust-comment really-glad Mei','Pleased','aoi_barista'),
    mk('葵、自分に「丁寧にね」と言い聞かせるわよ、メイちゃん','Aoi — self "polite" tell-firmly Mei','Reflective','mei_romantic'),
    mk('葵、新人さんに戸惑いがあったかもね、メイちゃん','Aoi — newbie confusion-maybe Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08443',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが存分に旅行を楽しまれたぞ','Gran — youth Dad fully-trip-enjoy','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、新しいお店を思いつかないって悩まれたわよね、あなた?','Yes — Grandpa new-store can\'t-think troubled, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんはおそらくは天国でお元気だぞ','Gran — Dad probably-heaven-well','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご親戚と久し振りにお会いになって喜ばれたわよね、あなた?','Grandpa — relatives long-time-met happy, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「こんばんわ」と毎晩仰ったぞ','Gran — youth Dad "good-evening" nightly-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、孫のお祝いをすっごい喜んでくださったわよね、あなた?','Grandpa — grandkid-celeb really-pleased, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが孫に「正直に」と言い聞かせるお姿、覚えてるぞ','Gran — youth Dad-grandkid "honestly" tell-firmly remember','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、新しい技術には戸惑いが多くおありだったわよね、あなた?','Grandpa — new-tech confusion-many, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08444',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、休みは存分に遊んだろ?','Riku — break fully-played?','Curious teen','sakura_teen'),
    mk('お前、宿題のテーマ思いつかないんだろ?桜','You — homework-theme can\'t-think? Sakura','Curious','riku_teen'),
    mk('リク、お前、おそらくは志望校受かるよ','Riku — probably-target-school pass','Reassuring','sakura_teen'),
    mk('お前、久し振りに塾来たな、桜','You — long-time-cram-came Sakura','Curious','riku_teen'),
    mk('リク、お前、先生に「こんばんわ」って挨拶しろよ','Riku — teacher "good-evening" greet','Direction','sakura_teen'),
    mk('お前のテスト、すっごい点数だったぞ、桜','Your-test really-score Sakura','Praising','riku_teen'),
    mk('リク、自分に「集中」と言い聞かせて勉強しろよ','Riku — self "concentrate" tell-firmly study','Direction','sakura_teen'),
    mk('お前、初日は戸惑いがあったろ?桜','You — first-day confusion? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08445',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんと存分にお話しましょうね','Sho — Mei-sis fully-talk','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、絵のテーマ思いつかないよ','Mei-sis — me drawing-theme can\'t-think','Wry child','sho_child'),
    mk('翔くん、お父さんはおそらくはお迎えに来てくださるわよ','Sho — Dad probably-pick-up come','Reflective','mei_romantic'),
    mk('メイ姉さん、お祖母ちゃんに久し振りに会えたよ','Mei-sis — Grandma long-time-met','Eager child','sho_child'),
    mk('翔くん、皆さんに「こんばんわ」って挨拶しましょうね','Sho — everyone "good-evening" greet','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お絵描き、すっごい楽しかったよ','Mei-sis — me drawing really-fun','Eager child','sho_child'),
    mk('翔くん、自分に「優しく」って言い聞かせるのよ','Sho — self "be-kind" tell-firmly','Tender','mei_romantic'),
    mk('メイ姉さん、新しい習い事には戸惑いがあるんだ','Mei-sis — new-lesson confusion-have','Earnest close','sho_child'),
  ]},
  {id:'conv_08446',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、今月内にめどをつけろ','Our co — this-month-prospect set','Crisp','hiroshi_boss'),
    mk('はい。新事業の取組みを開始しました','Yes — New-biz-effort started','Methodical','kenji_office'),
    mk('お得意様、先着順でご招待しろ','VIP first-come-order invite','Direction','hiroshi_boss'),
    mk('はい。借入金の返済計画を提出いたします','Yes — Loan-repay plan submit','Update','kenji_office'),
    mk('当社の略称、商標登録を確認しろ','Our co-abbrev trademark-check','Direction','hiroshi_boss'),
    mk('はい。一級建築士の採用を進めております','Yes — 1st-class-architect hire-progress','Update','kenji_office'),
    mk('お客様のお気持ちを推察しろ','Cust-feeling deduce','Direction','hiroshi_boss'),
    mk('はい。お得意様との親密な関係を保ちます','Yes — VIP-intimate-rel maintain','Close','kenji_office'),
  ]},
  {id:'conv_08447',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('新製品の発売、年内にめどをつけましょう','New-prod-launch year-end-prospect set','Brisk','yuki_office'),
    mk('はい。社内取組みのまとめ資料を作成中です','Yes — Co-effort-summary-doc making','Cooperative','kenji_office'),
    mk('セミナーは先着順でご案内しましょう','Seminar first-come-order announce','Direction','yuki_office'),
    mk('はい。借入金審査の書類が届きました','Yes — Loan-review-doc arrived','Update','kenji_office'),
    mk('社名の略称、SNSで統一しましょう','Co-name-abbrev SNS-unify','Direction','yuki_office'),
    mk('はい。一級資格者を増員する予定です','Yes — 1st-class-cert-holder add plan','Update','kenji_office'),
    mk('お客様のご要望を推察してご提案しましょう','Cust-request deduce propose','Direction','yuki_office'),
    mk('はい。お得意様との親密な関係を大切にしております','Yes — VIP-intimate-rel cherish','Close','kenji_office'),
  ]},
  {id:'conv_08448',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文完成のめどはいつだ?','Ren — paper-completion-prospect when?','Mentor','hiroshi_boss'),
    mk('はい。研究取組みの中間報告を準備しております','Yes — Research-effort interim-report prep','Earnest','ren_uni'),
    mk('蓮、研究セミナーは先着順だ','Ren — research-seminar first-come-order','Direction','hiroshi_boss'),
    mk('はい。研究費の借入金返済も計画しております','Yes — Research-fund-loan-repay also-plan','Polite','ren_uni'),
    mk('蓮、論文の略称を統一しろ','Ren — paper-abbrev unify','Direction','hiroshi_boss'),
    mk('はい。一級資格取得を目指しております','Yes — 1st-class-cert-acq aim','Earnest','ren_uni'),
    mk('蓮、審査員のお気持ちを推察しろ','Ren — judge-feeling deduce','Direction','hiroshi_boss'),
    mk('はい。研究室との親密な協力関係を築きます','Yes — Lab-intimate-coop-rel build','Earnest close','ren_uni'),
  ]},
  {id:'conv_08449',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、事件解決のめどがついた','Police case-solve-prospect set','Calm','takeda_officer'),
    mk('はい。警察、地域取組みを発表されたんですね','Yes — Police community-effort-announced','Cooperative','kenji_office'),
    mk('警察、防犯セミナーは先着順で実施しております','Police crime-sem first-come-order do','Procedural','takeda_officer'),
    mk('はい。警察、借入金詐欺の事件をご捜査されてますね','Yes — Police loan-fraud-case inv','Cooperative','kenji_office'),
    mk('警察、署の略称をご記憶ください','Police station-abbrev please-remember','Procedural','takeda_officer'),
    mk('はい。警察、一級資格を持つ捜査官、頼もしいです','Yes — Police 1st-class-cert-officer reliable','Cooperative','kenji_office'),
    mk('警察、容疑者の心理を推察しております','Police suspect-psych deduce','Procedural','takeda_officer'),
    mk('はい。警察と地域の親密な連携、大事ですね','Yes — Police-community-intimate-link important','Close','kenji_office'),
  ]},
  {id:'conv_08450',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、半年でめどをつけられた','Dad — founding half-year-prospect set','Sage','hiroshi_elder'),
    mk('はい。お父さんは現場の取組みを大切にされた','Yes — Dad on-site-effort cherished','Commitment','hiroshi_boss'),
    mk('お父さん、お客様、先着で表彰されたぞ','Dad — cust first-come-awarded','Wistful','hiroshi_elder'),
    mk('はい。お父さんは借入金を計画的に返されました','Yes — Dad loan-systematic-repaid','Reflective','hiroshi_boss'),
    mk('お父さん、社名の略称を考案されたぞ','Dad — co-name-abbrev devised','Wistful','hiroshi_elder'),
    mk('はい。お父さんは一級技能者を育成されました','Yes — Dad 1st-class-skilled-trained','Reflective','hiroshi_boss'),
    mk('お父さん、取引先のお気持ちを的確に推察されたぞ','Dad — partner-feeling accurate-deduced','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員と親密な絆を築かれました','Yes — Dad staff-intimate-bond built','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08451',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、史料を逐次解読する手法を論文で扱いましたね','Ren — doc sequential-decode method paper','Calm','asuka_teacher'),
    mk('はい、紀元前文明の研究を論文で扱いました','Yes — BC-civ paper','Earnest','ren_uni'),
    mk('蓮さん、近代国家の派兵史を論文で扱いましたね','Ren — modern-state troop-deploy history paper','Reflective','asuka_teacher'),
    mk('はい、差別と軽蔑の歴史を論文で扱いました','Yes — discrimination-contempt history paper','Earnest','ren_uni'),
    mk('組織の問題が露呈した事例を論文で扱いましたね','Org-problem-exposed-case paper','Engaged','asuka_teacher'),
    mk('はい、国会で法案が否決された事例を論文で扱いました','Yes — Diet bill-rejected-case paper','Earnest','ren_uni'),
    mk('蓮さん、法務大臣の役割を論文で扱いましたね','Ren — Justice-minister-role paper','Reflective','asuka_teacher'),
    mk('はい、会計検査院の機能を論文で扱いました','Yes — Audit-board-function paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08452',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、警察、証拠を逐次集めております','Case police-evidence sequentially-gather','Procedural','takeda_officer'),
    mk('警察、紀元前の遺物の盗難を捜査中ですね','Police BC-relic-theft inv','Reflective','ren_uni'),
    mk('警察、国外派兵時の警備事案にも対応します','Police overseas-deploy-guard-case resp','Procedural','takeda_officer'),
    mk('本件、被害者への軽蔑発言を警察、調査されましたね','Case victim-contempt-speech police-inv','Reflective','ren_uni'),
    mk('警察、組織内不正の露呈を厳格に対応します','Police internal-fraud-exposed strict-resp','Procedural','takeda_officer'),
    mk('本件、議会で否決された法案について警察、所感がおありですね','Case Diet-rejected-bill police-view','Reflective','ren_uni'),
    mk('警察、法務大臣のご指示を仰ぎます','Police Justice-min-direction request','Procedural','takeda_officer'),
    mk('本件、会計検査院との連携、警察、強化されましたね','Case Audit-board-link police-strengthen','Close','ren_uni'),
  ]},
  {id:'conv_08453',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、年表を逐次確認する手法を論文で扱いましたね','Sakura — chronology sequential-confirm method paper','Calm','asuka_teacher'),
    mk('はい、紀元前文明の謎を論文で扱いました','Yes — BC-civ-mystery paper','Earnest teen','sakura_teen'),
    mk('近代国家の派兵史を論文で扱いましたね','Modern-state deploy history paper','Reflective','asuka_teacher'),
    mk('はい、社会の中の軽蔑構造を論文で扱いました','Yes — society-contempt-structure paper','Earnest','sakura_teen'),
    mk('組織問題が露呈した事例を論文で扱いましたね','Org-problem-exposed-case paper','Engaged','asuka_teacher'),
    mk('はい、議会で否決された法案を論文で扱いました','Yes — Diet-rejected-bill paper','Earnest','sakura_teen'),
    mk('法務大臣の権限を論文で扱いましたね','Justice-min-power paper','Reflective','asuka_teacher'),
    mk('はい、会計検査院の役割を論文で扱いました','Yes — Audit-board-role paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08454',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、医療チームで症例を逐次記録しております','Ren — med-team case sequential-record','Calm','saito_doctor'),
    mk('はい、紀元前の薬草研究を医療チームで参照しております','Yes — BC-herb-research med-team ref','Patient','saito_doctor'),
    mk('海外派兵時の医療体制を、貴院、研究されてるそうですね、先生','Overseas-deploy-med-system your-hosp research, sensei','Curious','ren_uni'),
    mk('はい、患者さんへの軽蔑的態度は医療チームで厳禁としております','Yes — Patient-contempt-attitude med-team strict-no','Patient','saito_doctor'),
    mk('医療体制の不備が露呈した事例を、貴院、検証されたんですね、先生','Med-system-flaw-exposed-case your-hosp verify, sensei','Reflective','ren_uni'),
    mk('はい、医療予算の否決対応も医療チームで備えております','Yes — Med-budget-rejected-resp med-team prep','Patient','saito_doctor'),
    mk('法務大臣との会合を貴院、なさったそうですね、先生','Justice-min-meet your-hosp do, sensei','Reflective','ren_uni'),
    mk('はい、会計検査院との対応も医療チームで行います','Yes — Audit-board-resp med-team do','Patient close','saito_doctor'),
  ]},
  {id:'conv_08455',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、契約書を逐次確認しろ','Our co — contract sequential-check','Crisp','hiroshi_boss'),
    mk('はい。紀元前のロゴ歴史を社史に記載します','Yes — BC-logo-history co-history-record','Methodical','kenji_office'),
    mk('社員の海外派兵に近い長期出張も支援しろ','Staff-overseas-deploy-near long-trip support','Direction','hiroshi_boss'),
    mk('はい。お客様への軽蔑的対応は厳禁としております','Yes — Cust-contempt-resp strict-no','Update','kenji_office'),
    mk('業界の問題が露呈する前に手を打て','Industry-problem-exposed before-act','Direction','hiroshi_boss'),
    mk('はい。取締役会で否決された案件を再検討します','Yes — Board-rejected-item re-consider','Update','kenji_office'),
    mk('当社、法務大臣と意見交換の機会を作れ','Our co — Justice-min view-exch opp-create','Direction','hiroshi_boss'),
    mk('はい。会計検査院の指摘事項に対応しております','Yes — Audit-board-issue resp','Close','kenji_office'),
  ]},
  {id:'conv_08456',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、温室で花を育ててらっしゃるんだって、メイちゃん','Aoi — cust greenhouse-grow Mei','Reflective','mei_romantic'),
    mk('葵、新メニュー、鶏肉のサンドイッチ作りましょう、メイちゃん','Aoi — new-menu chicken-sand make Mei','Brisk','aoi_barista'),
    mk('葵、お店のダイニングスペースを広げたいわね、メイちゃん','Aoi — store dining-space widen Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ガレージを改装されたそうよ、メイちゃん','Aoi — cust garage-renovate Mei','Reflective','aoi_barista'),
    mk('葵、地域のライブラリーで読書会したいわね、メイちゃん','Aoi — local-library-book-club Mei','Animated','mei_romantic'),
    mk('葵、お客様、エレクトロニクス関連のお仕事だって、メイちゃん','Aoi — cust electronics-work Mei','Reflective','aoi_barista'),
    mk('葵、お店、モノクロ写真を飾ろうかしら、メイちゃん','Aoi — store mono-photo display Mei','Reflective','mei_romantic'),
    mk('葵、お店の入り口に矢印の案内、付けようね、メイちゃん','Aoi — store entry-arrow-sign attach Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_08457',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが温室でトマトを育てられたぞ','Gran — youth Dad greenhouse-tomato-grew','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、鶏肉のお料理が得意だったわよね、あなた?','Yes — Grandpa chicken-cooking-good, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが家のダイニングを改装されたぞ','Gran — youth Dad home-dining-renovated','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ガレージで車を整備されたわよね、あなた?','Grandpa — garage-car-maintained, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、ばあさんが地域ライブラリーを設立されたぞ','Gran — youth gran community-library-found','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、エレクトロニクスのお仕事を長くされてたわよね、あなた?','Grandpa — electronics-work long-did, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんとモノクロ写真館で撮ったぞ','Gran — youth Dad-mono-photo-studio-took','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、矢印標識のない時代を懐かしまれたわよね、あなた?','Grandpa — arrow-sign-no era nostalgic, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08458',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんのお家、温室があるのよ','Sho — Mei-sis-home-greenhouse','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お母さんと鶏肉のおかず作ったよ','Mei-sis — me Mom-chicken-dish-made','Eager child','sho_child'),
    mk('翔くん、新しいお家のダイニング、広いわね','Sho — new-home-dining-wide','Reflective','mei_romantic'),
    mk('メイ姉さん、お祖父ちゃんがガレージで自転車直してくれたよ','Mei-sis — Grandpa-garage-bike-fixed','Eager child','sho_child'),
    mk('翔くん、地域のライブラリーで本を借りましょうね','Sho — local-library-book-borrow','Direction','mei_romantic'),
    mk('メイ姉さん、お父さんのお仕事はエレクトロニクスだよ','Mei-sis — Dad-work-electronics','Proud child','sho_child'),
    mk('翔くん、おばあちゃんの古いモノクロ写真、素敵ね','Sho — Grandma-old-mono-photo-lovely','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、絵に矢印を描いて道案内を作ったよ','Mei-sis — me drawing-arrow road-guide-made','Eager close','sho_child'),
  ]},
  {id:'conv_08459',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前ん家、温室あんだろ?','Riku — your-home-greenhouse?','Curious teen','sakura_teen'),
    mk('お前、給食の鶏肉好きだろ?桜','You — lunch-chicken-like? Sakura','Curious','riku_teen'),
    mk('リク、お前ん家のダイニング、新しくしたろ?','Riku — your-dining-new?','Curious','sakura_teen'),
    mk('お前、ガレージでギター練習してんだろ?桜','You — garage-guitar-practice? Sakura','Curious','riku_teen'),
    mk('リク、お前、ライブラリーで勉強しろよ','Riku — library-study','Direction','sakura_teen'),
    mk('お前、エレクトロニクス部入りたいんだろ?桜','You — electronics-club-join? Sakura','Curious','riku_teen'),
    mk('リク、お前、モノクロ写真の表現好きだろ?','Riku — mono-photo-expression-like?','Curious','sakura_teen'),
    mk('お前、矢印キーゲーム下手だな、桜','You — arrow-key-game-bad Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_08460',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが温室で野菜を育ててらっしゃるわ','Sho — Dad greenhouse-veg-grow','Reflective','yumiko_mom'),
    mk('ママ、ぼく、鶏肉のから揚げ大好きだよ','Mom — me chicken-fried-love','Eager child','sho_child'),
    mk('翔くん、ダイニングテーブルでお勉強しなさい','Sho — dining-table-study','Direction','yumiko_mom'),
    mk('ママ、お父さんがガレージで日曜大工してたよ','Mom — Dad-garage-DIY-doing','Eager child','sho_child'),
    mk('翔くん、お父さんと近所のライブラリーへ行きましょうね','Sho — Dad-neighbor-library-go','Tender','yumiko_mom'),
    mk('ママ、お父さんのお仕事は、エレクトロニクスのお仕事だね','Mom — Dad-work-electronics-work','Proud child','sho_child'),
    mk('翔くん、お祖母ちゃんの古いモノクロ写真、見せてあげるね','Sho — Grandma-old-mono-photo-show','Tender','yumiko_mom'),
    mk('ママ、ぼく、地図に矢印描いて宝探し作ったよ','Mom — me map-arrow-treasure-hunt-made','Eager close','sho_child'),
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_494 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['恐ろしく','耐える','説い','ただちに','従わ','免れ','我ら','ですけれど']
const B_T = ['変貌','賛美','洞察','バリュー','感度','時速','不必要','インタフェース']
const C_T = ['地方裁判所','光学','良識','米価','併合','異質','筆記','伝授']
const D_T = ['青色','千代田','吉野','鹿島','ミシェル','帯広','朝日新聞社','小学館']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09841',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが恐ろしく真剣にお仕事されてるわ','Sho — Dad-frightfully-serious-work','Reflective','yumiko_mom'),
    mk('ママ、ぼく、寒さに耐える練習してるよ','Mom — me cold-endure-prac','Earnest child','sho_child'),
    mk('翔くん、お父さんが人生の大切さを説いて下さったわ','Sho — Dad-life-imp-explain','Reflective','yumiko_mom'),
    mk('ママ、お父さんがただちに帰宅されたよ','Mom — Dad-imm-home','Eager child','sho_child'),
    mk('翔くん、お父さんの言葉に従わないとね','Sho — Dad-words-obey','Direction','yumiko_mom'),
    mk('ママ、ぼく、宿題を免れたいなんて思っちゃダメだよね','Mom — me homework-escape-no','Earnest child','sho_child'),
    mk('翔くん、我ら家族の絆は強いわね','Sho — we-fam-bond-strong','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんに会いたいですけれど、お仕事中ですよね','Mom — me Dad-want-but-work','Reflective close','sho_child'),
  ]},
  {id:'conv_09842',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、店内が恐ろしく混雑してるね、メイちゃん','Aoi — store-frightfully-crowd Mei','Wry','mei_romantic'),
    mk('葵、忙しさに耐える日々ね、メイちゃん','Aoi — busy-endure-days Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お店の魅力を説いて下さったよ、メイちゃん','Aoi — cust-store-charm-explain Mei','Pleased','mei_romantic'),
    mk('葵、ただちにテーブルを片付けようね、メイちゃん','Aoi — imm-tbl-clean Mei','Direction','aoi_barista'),
    mk('葵、保健所の指示に従わないとね、メイちゃん','Aoi — health-inst-obey Mei','Direction','mei_romantic'),
    mk('葵、清掃の手間を免れないけど頑張ろうね、メイちゃん','Aoi — clean-task-escape-no-effort Mei','Direction','aoi_barista'),
    mk('葵、我ら店員はチームだね、メイちゃん','Aoi — we-staff-team Mei','Tender','mei_romantic'),
    mk('葵、お客様、お忙しいですけれど少しゆっくりされてくださいね、メイちゃん','Aoi — cust-busy-but-relax Mei','Tender close','aoi_barista'),
  ]},
  {id:'conv_09843',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが恐ろしく頑固な時もあった','Gran — youth Dad-frightfully-stubborn-times','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、苦難に耐える強さをお持ちだったわよね、あなた?','Yes — Grandpa-suff-endure-strong, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが孫に人の道を説いて下さった','Gran — youth Dad-grandkid-path-explain','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、緊急時にはただちに動かれたわよね、あなた?','Grandpa — emerg-imm-move, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが理に従わない方を諭された','Gran — youth Dad-unreason-told','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、戦地で死を免れた英雄だったわよね、あなた?','Grandpa — battle-death-escape-hero, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、「我らは一族」とお父さんが仰った','Gran — youth-"we-clan"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、寡黙ですけれど深い愛情の方だったわよね、あなた?','Grandpa — quiet-but-deep-love, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09844',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、恐ろしく真面目だな','Riku — frightfully-serious','Wry teen','sakura_teen'),
    mk('お前、辛い練習に耐えるな、桜','You — hard-prac-endure Sakura','Praising','riku_teen'),
    mk('リク、お前、後輩に説いてやれよ','Riku — junior-explain','Direction','sakura_teen'),
    mk('お前、ただちに教室に戻れよ、桜','You — imm-class-back Sakura','Direction','riku_teen'),
    mk('リク、ルールに従わないと罰せられるぞ','Riku — rule-obey-no-punish','Direction','sakura_teen'),
    mk('お前、宿題を免れる方法考えてるな、桜','You — homework-escape-think Sakura','Wry','riku_teen'),
    mk('リク、我ら部活仲間だな','Riku — we-club-mate','Tender','sakura_teen'),
    mk('お前、寝坊ですけれど、教室間に合ったな、桜','You — overslept-but-class Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_09845',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、雷が恐ろしく鳴ってるけど、お父さんがいらっしゃるから大丈夫','Sho — thunder-frightfully-loud-Dad-here','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、寒さに耐える練習してるよ','Mei-sis — me cold-endure-prac','Eager child','sho_child'),
    mk('翔くん、お父さんが翔くんに人の大切さを説いて下さるわね','Sho — Dad-Sho-people-imp-explain','Reflective','mei_romantic'),
    mk('メイ姉さん、お父さんが「ただちに来てね」って仰ったよ','Mei-sis — Dad-"imm-come"-said','Eager child','sho_child'),
    mk('翔くん、お父さんに従わないと迷子になっちゃうわよ','Sho — Dad-obey-not-lost','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、テストを免れたいなんて思わないよ','Mei-sis — me test-escape-no','Earnest child','sho_child'),
    mk('翔くん、我ら家族は強い絆で結ばれてるわ','Sho — we-fam-strong-bond','Tender','mei_romantic'),
    mk('メイ姉さん、お父さん、お疲れですけれど、お話しできて嬉しい','Mei-sis — Dad-tired-but-talk-glad','Reflective close','sho_child'),
  ]},
  {id:'conv_09846',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、業界の変貌を予測しろ','Our co — industry-trans-est','Crisp','hiroshi_boss'),
    mk('はい。社員の貢献を賛美する文化を作ります','Yes — Staff-cont-praise-cult','Methodical','kenji_office'),
    mk('当社、顧客の心理を洞察しろ','Our co — cust-psych-insight','Direction','hiroshi_boss'),
    mk('はい。バリューチェーンを再構築します','Yes — Value-chain-restruct','Update','kenji_office'),
    mk('当社、市場の感度を高めろ','Our co — mkt-sens-up','Direction','hiroshi_boss'),
    mk('はい。配送時速を上げる工夫をします','Yes — Deliv-speed-up-impr','Update','kenji_office'),
    mk('当社、不必要な経費を削れ','Our co — unnec-cost-cut','Direction','hiroshi_boss'),
    mk('はい。お客様向けインタフェースを刷新します','Yes — Cust-iface-renew','Close','kenji_office'),
  ]},
  {id:'conv_09847',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('業界の変貌に対応しましょう','Industry-trans-resp','Brisk','yuki_office'),
    mk('はい。優秀社員を賛美する表彰会を企画します','Yes — Excel-staff-praise-cere','Cooperative','kenji_office'),
    mk('競合の戦略を洞察しましょう','Comp-strat-insight','Direction','yuki_office'),
    mk('はい。バリュー設定を見直します','Yes — Value-set-rev','Update','kenji_office'),
    mk('SNSの感度を活かしましょう','SNS-sens-use','Direction','yuki_office'),
    mk('はい。配送ドライバーの時速管理を徹底します','Yes — Deliv-speed-mgmt-strict','Update','kenji_office'),
    mk('不必要な会議を減らしましょう','Unnec-mtg-redu','Direction','yuki_office'),
    mk('はい。社内インタフェースを改善します','Yes — Co-iface-impr','Close','kenji_office'),
  ]},
  {id:'conv_09848',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究室の変貌に対応しろ','Ren — lab-trans-resp','Mentor','hiroshi_boss'),
    mk('はい。指導教員を賛美する気持ちで取り組みます','Yes — Supv-praise-mind','Earnest','ren_uni'),
    mk('蓮、データへの洞察を深めろ','Ren — data-insight-deep','Direction','hiroshi_boss'),
    mk('はい。研究のバリューを社会に示します','Yes — Research-value-soc','Earnest','ren_uni'),
    mk('蓮、実験装置の感度を確認しろ','Ren — exp-eq-sens-check','Direction','hiroshi_boss'),
    mk('はい。発表ペースは時速感覚で進めます','Yes — Pres-pace-speed-prog','Earnest','ren_uni'),
    mk('蓮、不必要なデータは捨てろ','Ren — unnec-data-discard','Direction','hiroshi_boss'),
    mk('はい。実験装置のインタフェースを整理します','Yes — Exp-iface-org','Earnest close','ren_uni'),
  ]},
  {id:'conv_09849',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、犯罪手口の変貌を捕捉されますね','Police crime-trans-track','Cooperative','kenji_office'),
    mk('警察、市民の善行を賛美されますね','Police citi-good-praise','Cooperative','kenji_office'),
    mk('警察、容疑者の心理洞察に長けておられますね','Police suspect-psych-insight','Cooperative','kenji_office'),
    mk('警察、犯行のバリュー、つまり動機の価値判断もされますね','Police crime-value-motive','Cooperative','kenji_office'),
    mk('警察、防犯カメラの感度を上げられますね','Police prev-cam-sens-up','Cooperative','kenji_office'),
    mk('警察、緊急車両は時速制限を超える事もありますね','Police emerg-speed-over','Cooperative','kenji_office'),
    mk('警察、不必要な拘束は避けられますね','Police unnec-arr-avoid','Cooperative','kenji_office'),
    mk('警察、市民通報インタフェースを整備されますね','Police citi-rep-iface-prep','Close','kenji_office'),
  ]},
  {id:'conv_09850',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、業界の変貌に的確に対応された','Dad — founding industry-trans-prec','Sage','hiroshi_elder'),
    mk('はい。お父さんは社員を賛美する経営をされた','Yes — Dad staff-praise-mgmt','Commitment','hiroshi_boss'),
    mk('お父さん、人を洞察する力に長けてらした','Dad — people-insight-skill','Wistful','hiroshi_elder'),
    mk('はい。お父さんは商品のバリューを大事にされた','Yes — Dad prod-value-cherish','Reflective','hiroshi_boss'),
    mk('お父さん、市場の感度を持って商品を開発された','Dad — mkt-sens-prod-dev','Wistful','hiroshi_elder'),
    mk('はい。お父さんは時速の経営判断をされた','Yes — Dad speed-mgmt-judg','Reflective','hiroshi_boss'),
    mk('お父さん、不必要な投資を控えられた','Dad — unnec-invest-mod','Wistful','hiroshi_elder'),
    mk('はい。お父さんは顧客インタフェースを大切にされた','Yes — Dad cust-iface-cherish','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09851',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、地方裁判所の判例研究を論文で扱いましたね','Ren — local-court-prec paper','Calm','asuka_teacher'),
    mk('はい、光学顕微鏡の解像度研究を論文で扱いました','Yes — Opt-micro-res paper','Earnest','ren_uni'),
    mk('蓮さん、市民の良識形成の研究を論文で扱いましたね','Ren — citi-sense-form paper','Reflective','asuka_teacher'),
    mk('はい、米価の長期変動研究を論文で扱いました','Yes — Rice-price-long paper','Earnest','ren_uni'),
    mk('近世の国家併合史を論文で扱いましたね','Early-mod-state-merge paper','Engaged','asuka_teacher'),
    mk('はい、異質な文化の共生研究を論文で扱いました','Yes — Het-cult-coex paper','Earnest','ren_uni'),
    mk('蓮さん、筆記試験形式の妥当性を論文で扱いましたね','Ren — written-test-valid paper','Reflective','asuka_teacher'),
    mk('はい、伝統工芸の伝授制度研究を論文で扱いました','Yes — Trad-craft-pass paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09852',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、地方裁判所での審理を、警察、立ち会われますね','Case local-court-hearing police-att','Reflective','ren_uni'),
    mk('警察、光学機器の不正持ち出しを扱います','Police opt-eq-illeg-handle','Procedural','takeda_officer'),
    mk('本件、市民の良識に訴える防犯活動を、警察、進められますね','Case citi-sense-prev police-prog','Reflective','ren_uni'),
    mk('警察、米価操作の不正もご捜査ですね','Police rice-price-manip-inv','Cooperative','takeda_officer'),
    mk('本件、組織の併合を悪用した詐欺を、警察、扱われますね','Case merge-fraud police-handle','Reflective','ren_uni'),
    mk('警察、異質な事案にも柔軟に対応します','Police het-case-flex','Procedural','takeda_officer'),
    mk('本件、容疑者の筆記習慣を、警察、分析されますね','Case suspect-write-hab police-anal','Reflective','ren_uni'),
    mk('警察、捜査技術の伝授も若手におこなわれますね','Police inv-tech-pass-young','Close','kenji_office'),
  ]},
  {id:'conv_09853',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、地方裁判所の判例研究を論文で扱いましたね','Sakura — local-court-prec paper','Calm','asuka_teacher'),
    mk('はい、光学顕微鏡の解像度を論文で扱いました','Yes — Opt-micro paper','Earnest teen','sakura_teen'),
    mk('市民の良識形成を論文で扱いましたね','Citi-sense paper','Reflective','asuka_teacher'),
    mk('はい、米価の長期変動を論文で扱いました','Yes — Rice-price paper','Earnest','sakura_teen'),
    mk('近世の国家併合史を論文で扱いましたね','Early-mod-merge paper','Engaged','asuka_teacher'),
    mk('はい、異質な文化の共生を論文で扱いました','Yes — Het-cult paper','Earnest','sakura_teen'),
    mk('筆記試験形式の妥当性を論文で扱いましたね','Written-test-valid paper','Reflective','asuka_teacher'),
    mk('はい、伝統工芸の伝授制度を論文で扱いました','Yes — Trad-craft paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09854',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、医療過誤の地方裁判所判例を医療チームで学びます','Ren — med-error-local-court med-team','Calm','saito_doctor'),
    mk('はい、光学機器を用いた診断を医療チームで活用します','Yes — Opt-eq-diag med-team','Patient','saito_doctor'),
    mk('蓮さん、患者の良識に訴える治療同意を医療チームで重視します','Ren — pati-sense-cons med-team imp','Calm','saito_doctor'),
    mk('米価高騰時の病院食改善を、貴院、進められてますね、先生','Rice-price-high-meal your-hosp prog, sensei','Reflective','ren_uni'),
    mk('はい、病院併合の医療連携を医療チームで担当します','Yes — Hosp-merge med-team','Patient','saito_doctor'),
    mk('異質な症例を、貴院、学会発表されてますね、先生','Het-case your-hosp conf-pres, sensei','Curious','ren_uni'),
    mk('はい、患者の筆記式問診を医療チームで活用します','Yes — Pati-written-asses med-team','Patient','saito_doctor'),
    mk('はい、医療技術の伝授を医療チームで継承します','Yes — Med-tech-pass med-team-inh','Patient close','saito_doctor'),
  ]},
  {id:'conv_09855',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、地方裁判所案件を法務部で管理しろ','Our co — local-court-leg-mgmt','Crisp','hiroshi_boss'),
    mk('はい。光学機器分野への投資を増やします','Yes — Opt-eq-invest-up','Methodical','kenji_office'),
    mk('当社、社員の良識を信じた経営をしろ','Our co — staff-sense-trust-mgmt','Direction','hiroshi_boss'),
    mk('はい。米価動向と外食事業の関連を分析します','Yes — Rice-price-restaur-anal','Update','kenji_office'),
    mk('子会社の併合を視野に入れろ','Sub-merge-view','Direction','hiroshi_boss'),
    mk('はい。異質な人材を積極採用します','Yes — Het-talent-hire','Update','kenji_office'),
    mk('当社、社員の筆記能力育成も大事だ','Our co — staff-write-dev-imp','Direction','hiroshi_boss'),
    mk('はい。ノウハウの社内伝授制度を整えます','Yes — Knowhow-co-pass-prep','Close','kenji_office'),
  ]},
  {id:'conv_09856',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、青色の制服でお越しになったよ、メイちゃん','Aoi — cust-blue-uni-came Mei','Reflective','mei_romantic'),
    mk('葵、お客様、千代田区にお勤めだって、メイちゃん','Aoi — cust-Chiyoda-work Mei','Reflective','aoi_barista'),
    mk('葵、お客様、奈良の吉野山に行かれたって、メイちゃん','Aoi — cust-Yoshino-mt Mei','Reflective','mei_romantic'),
    mk('葵、お客様、鹿島サッカースタジアムに行かれたって、メイちゃん','Aoi — cust-Kashima-soccer Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ミシェルさんという海外作家の本を読んでらしたよ、メイちゃん','Aoi — cust-Michel-overseas Mei','Reflective','mei_romantic'),
    mk('葵、お客様、帯広の牧場のお話して下さったよ、メイちゃん','Aoi — cust-Obihiro-ranch Mei','Reflective','aoi_barista'),
    mk('葵、お客様、朝日新聞社のジャーナリストだって、メイちゃん','Aoi — cust-Asahi-journ Mei','Reflective','mei_romantic'),
    mk('葵、お客様、小学館の編集者でいらっしゃるって、メイちゃん','Aoi — cust-Shogakukan-editor Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09857',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが青色の作業着で働かれた','Gran — youth Dad-blue-uni-work','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、千代田区の本社に通われたわよね、あなた?','Yes — Grandpa-Chiyoda-HQ, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが吉野山の桜を見に行かれた','Gran — youth Dad-Yoshino-sakura','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、鹿島神宮を参拝されたわよね、あなた?','Grandpa — Kashima-shrine, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがミシェル先生の論文を翻訳された','Gran — youth Dad-Michel-trans','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、帯広の親戚を訪ねられたわよね、あなた?','Grandpa — Obihiro-rel, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが朝日新聞社にお勤めだった','Gran — youth Dad-Asahi-work','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、小学館の児童誌を孫に買って下さったわよね、あなた?','Grandpa — Shogakukan-kid-buy, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09858',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが青色のシャツを着てらしたわ','Sho — Dad-blue-shirt','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと千代田区のお散歩したよ','Mei-sis — me Dad-Chiyoda-walk','Eager child','sho_child'),
    mk('翔くん、お父さんが吉野山の桜に連れて行って下さるそうよ','Sho — Dad-Yoshino-sakura-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと鹿島サッカー観戦したよ','Mei-sis — me Dad-Kashima-watched','Eager child','sho_child'),
    mk('翔くん、お父さんがミシェルさんという哲学者のお話して下さるそうよ','Sho — Dad-Michel-phil-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと帯広のお菓子食べたよ','Mei-sis — me Dad-Obihiro-snack','Eager child','sho_child'),
    mk('翔くん、お父さんが朝日新聞社の見学に連れて行って下さるそうよ','Sho — Dad-Asahi-tour-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、小学館の絵本好きだよ','Mei-sis — me Shogakukan-pic-like','Eager close','sho_child'),
  ]},
  {id:'conv_09859',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、青色のジャージ着てたな','Riku — blue-jersey','Curious teen','sakura_teen'),
    mk('お前、修学旅行で千代田区行ったろ?桜','You — sch-trip-Chiyoda? Sakura','Curious','riku_teen'),
    mk('リク、お前、家族で吉野山行ったろ','Riku — fam-Yoshino?','Curious','sakura_teen'),
    mk('お前、鹿島サポーターだったな、桜','You — Kashima-supp Sakura','Curious','riku_teen'),
    mk('リク、お前、倫理でミシェル・フーコー習ったろ?','Riku — eth-Michel-Foucault?','Curious','sakura_teen'),
    mk('お前、修学旅行で帯広行ったろ?桜','You — sch-trip-Obihiro? Sakura','Curious','riku_teen'),
    mk('リク、お前、朝日新聞社のインターン行ったな','Riku — Asahi-intern','Curious','sakura_teen'),
    mk('お前、小学館の漫画雑誌読んでたな、桜','You — Shogakukan-mag Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09860',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが青色のスーツを着てお出張なさるわ','Sho — Dad-blue-suit-trip','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと千代田区の博物館行ったよ','Mom — me Dad-Chiyoda-mus','Eager child','sho_child'),
    mk('翔くん、お父さんが吉野山の絵本を読んで下さるそうよ','Sho — Dad-Yoshino-pic-read','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと鹿島の試合観たよ','Mom — me Dad-Kashima-watched','Eager child','sho_child'),
    mk('翔くん、お父さんがミシェル先生の翻訳本を読んでらしたわ','Sho — Dad-Michel-trans-read','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと帯広の牧場行ったよ','Mom — me Dad-Obihiro-ranch','Eager child','sho_child'),
    mk('翔くん、お父さんが朝日新聞社の記事をご覧になってたわ','Sho — Dad-Asahi-art-read','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと小学館の図鑑見たよ','Mom — me Dad-Shogakukan-pic','Eager close','sho_child'),
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

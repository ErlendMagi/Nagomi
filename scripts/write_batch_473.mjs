import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_473 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['率いる','解っ','おこなっ','御座い','ことごとく','いたす','こんなにも','みつけ']
const B_T = ['取りまとめ','ファックス','激励','主査','次官','母体','個室','衣服']
const C_T = ['原始','平面','増進','傷害','放火','脅し','蔓延','肝臓']
const D_T = ['宿舎','華麗','赤外線','右脳','速記','接着','解像度','諸島']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09421',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが少年団を率いる立場になられたわ','Sho — Dad-boys-club-lead','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんの言ってる事が解ってきたよ','Mom — me Dad-said-understand','Eager child','sho_child'),
    mk('翔くん、お父さんが地域の防災訓練をおこなって下さるわ','Sho — Dad-local-disas-train-do','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんが「御座います」って丁寧な言葉教えて下さったよ','Mom — me Dad-gozaimasu-pol-teach','Eager child','sho_child'),
    mk('翔くん、お父さんが宿題をことごとく確認して下さったわ','Sho — Dad-homework-all-check','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「お願いいたす」って言ってみたよ','Mom — me Dad-onegai-itasu-said','Eager child','sho_child'),
    mk('翔くん、こんなにもお家を綺麗にして下さってありがたいわね','Sho — so-much-house-clean-thank','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんが大事にしてた写真をみつけたよ','Mom — me Dad-impt-photo-found','Eager close','sho_child'),
  ]},
  {id:'conv_09422',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、チームを率いる役職に就かれたんだって、メイちゃん','Aoi — cust-team-lead-pos Mei','Reflective','mei_romantic'),
    mk('葵、お客様の好みが解ってきたね、メイちゃん','Aoi — cust-pref-understand Mei','Pleased','aoi_barista'),
    mk('葵、お店で新メニュー試食会をおこなってみたいね、メイちゃん','Aoi — store-new-menu-tasting-do Mei','Pleased','mei_romantic'),
    mk('葵、お客様には「ありがとう御座います」を丁寧に申しましょうね、メイちゃん','Aoi — cust-arigato-gozaimasu-pol Mei','Direction','aoi_barista'),
    mk('葵、お客様のご要望をことごとく覚えておきたいね、メイちゃん','Aoi — cust-req-all-remember Mei','Direction','mei_romantic'),
    mk('葵、「お持ち帰りいたします」と仰るお客様、増えたね、メイちゃん','Aoi — "mochikaeri-itashimasu"-cust-up Mei','Reflective','aoi_barista'),
    mk('葵、こんなにも素敵なお客様が増えて幸せね、メイちゃん','Aoi — so-many-nice-cust-up-happy Mei','Tender','mei_romantic'),
    mk('葵、棚の奥に新しい器をみつけたよ、メイちゃん','Aoi — shelf-back-new-ware-found Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_09423',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが村の青年団を率いる立場におられた','Gran — youth Dad-vil-youth-lead','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、人の心の機微を解ってらしたわよね、あなた?','Yes — Grandpa-people-feeling-understand, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが地域の祭事をおこなっておられた','Gran — youth Dad-local-rite-do','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、「ありがとう御座います」を丁寧に仰ってたわよね、あなた?','Grandpa — "arigato-gozaimasu"-pol, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが田畑をことごとく見回られた','Gran — youth Dad-fields-all-tour','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、「お願いいたす」と丁寧に仰ってたわよね、あなた?','Grandpa — "onegai-itasu"-pol, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんがこんなにも長生きされた事に感謝しとる','Gran — Dad-so-long-thanks','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご先祖の墓所をみつけて下さったわよね、あなた?','Grandpa — anc-grave-found, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09424',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、部活で部員率いる役だな','Riku — club-lead-role','Curious teen','sakura_teen'),
    mk('お前、数学の問題、解ってきたな、桜','You — math-prob-understand Sakura','Praising','riku_teen'),
    mk('リク、お前、文化祭の出し物おこなっただろ','Riku — cult-fest-act-do','Curious','sakura_teen'),
    mk('お前、「ありがとう御座います」って先生に丁寧だな、桜','You — "arigato-gozaimasu"-tch-pol Sakura','Praising','riku_teen'),
    mk('リク、お前、宿題をことごとく終わらせたな','Riku — homework-all-done','Praising','sakura_teen'),
    mk('お前、「お願いいたす」って改まったな、桜','You — "onegai-itasu"-formal Sakura','Wry','riku_teen'),
    mk('リク、こんなにも勉強したのに、テスト難しかった','Riku — so-much-study-test-hard','Wry','sakura_teen'),
    mk('お前、机の引き出しに古い写真みつけてたな、桜','You — desk-draw-old-photo-found Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09425',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが少年団を率いる先生役なのよ','Sho — Dad-boys-lead-tch-role','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんの話が解ってきたよ','Mei-sis — me Dad-talk-understand','Eager child','sho_child'),
    mk('翔くん、お父さんが運動会をおこなって下さるそうよ','Sho — Dad-sports-day-do','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「ありがとう御座います」って言ったよ','Mei-sis — me Dad-"arigato-gozaimasu"','Eager child','sho_child'),
    mk('翔くん、お父さんが絵本をことごとく読んで下さったわ','Sho — Dad-pic-book-all-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「お願いいたす」って言えたよ','Mei-sis — me Dad-"onegai-itasu"-said','Proud child','sho_child'),
    mk('翔くん、こんなにもお父さんが頑張って下さってるのよ','Sho — so-much-Dad-effort','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと貝殻をみつけたよ','Mei-sis — me Dad-shell-found','Eager close','sho_child'),
  ]},
  {id:'conv_09426',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、各部の意見の取りまとめを健二に任せる','Our co — dept-opin-summary-Kenji','Crisp','hiroshi_boss'),
    mk('はい。ファックスでの取引先連絡も継続します','Yes — Fax-partner-cont','Methodical','kenji_office'),
    mk('当社、若手社員への激励の言葉を忘れるな','Our co — young-staff-encourage','Direction','hiroshi_boss'),
    mk('はい。主査クラスの会議を毎週おこないます','Yes — Sub-chief-mtg-weekly','Update','kenji_office'),
    mk('業界の元次官との会食も検討しろ','Industry-ex-vice-min-dinner','Direction','hiroshi_boss'),
    mk('はい。当社母体の財務状況を再確認します','Yes — Our co-parent-fin-recheck','Update','kenji_office'),
    mk('役員会議室の個室管理も徹底しろ','Exec-mtg-priv-rm-strict','Direction','hiroshi_boss'),
    mk('はい。社員制服の衣服デザインも刷新します','Yes — Staff-uniform-cloth-design-renew','Close','kenji_office'),
  ]},
  {id:'conv_09427',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('プロジェクトの意見の取りまとめを今日中にお願いね','Proj-opin-summary-today','Brisk','yuki_office'),
    mk('はい。地方支社にはファックスでも報告致します','Yes — Local-branch-fax-rep','Cooperative','kenji_office'),
    mk('新人への激励のメッセージを書きましょう','Newhire-encourage-msg-write','Direction','yuki_office'),
    mk('はい。主査クラスの定例会を準備します','Yes — Sub-chief-reg-mtg-prep','Update','kenji_office'),
    mk('元次官の講演会の招待状を発送しましょう','Ex-vice-min-lec-invite-send','Direction','yuki_office'),
    mk('はい。会社母体の組織図を更新します','Yes — Co-parent-org-update','Update','kenji_office'),
    mk('役員用の個室を予約しましょう','Exec-priv-rm-reserve','Direction','yuki_office'),
    mk('はい。社員衣服のクリーニング契約を結びます','Yes — Staff-cloth-cleaning-contract','Close','kenji_office'),
  ]},
  {id:'conv_09428',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究室のデータの取りまとめを任せる','Ren — lab-data-summary-trust','Mentor','hiroshi_boss'),
    mk('はい。古い文献のファックス資料も整理します','Yes — Old-lit-fax-doc-org','Earnest','ren_uni'),
    mk('蓮、後輩への激励の言葉も大事にしろ','Ren — junior-encourage-impt','Direction','hiroshi_boss'),
    mk('はい。研究室の主査と相談しております','Yes — Lab-sub-chief-consult','Earnest','ren_uni'),
    mk('蓮、業界の元次官の話を聞く機会も活かせ','Ren — industry-ex-vice-min-talk-use','Direction','hiroshi_boss'),
    mk('はい。研究機関の母体組織を分析します','Yes — Research-parent-org-anal','Polite','ren_uni'),
    mk('蓮、面談用の個室を確保しろ','Ren — interv-priv-rm-secure','Direction','hiroshi_boss'),
    mk('はい。発表の際は衣服にも気を配ります','Yes — Pres-cloth-care','Earnest close','ren_uni'),
  ]},
  {id:'conv_09429',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、捜査情報の取りまとめを進めておられますね','Police inv-info-summary-prog','Cooperative','kenji_office'),
    mk('警察、地方署とのファックスでの連絡もされてますね','Police local-stat-fax-cont','Cooperative','kenji_office'),
    mk('警察、新人警官への激励をされてますね','Police newcomer-encourage','Cooperative','kenji_office'),
    mk('警察、捜査本部の主査も会議に出られますね','Police inv-HQ-sub-chief-mtg','Cooperative','kenji_office'),
    mk('警察、元次官の不正にも厳しく対応されますね','Police ex-vice-min-corrup-strict','Cooperative','kenji_office'),
    mk('警察、捜査の母体組織を市民に説明されますね','Police inv-parent-org-citizen','Cooperative','kenji_office'),
    mk('警察、取調べ用の個室を整備されてますね','Police interr-priv-rm-prep','Cooperative','kenji_office'),
    mk('警察、被害者の衣服を証拠物として保管されますね','Police victim-cloth-evid-keep','Close','kenji_office'),
  ]},
  {id:'conv_09430',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、社員意見の取りまとめを大事にされた','Dad — founding staff-opin-summary-imp','Sage','hiroshi_elder'),
    mk('はい。お父さんはファックスでも丁寧に連絡された','Yes — Dad fax-pol-cont','Commitment','hiroshi_boss'),
    mk('お父さん、社員への激励の手紙も書かれた','Dad — staff-encourage-letter','Wistful','hiroshi_elder'),
    mk('はい。お父さんは主査クラスの育成に注力された','Yes — Dad sub-chief-dev-focus','Reflective','hiroshi_boss'),
    mk('お父さん、業界の元次官とも親交があられた','Dad — industry-ex-vice-min-friend','Wistful','hiroshi_elder'),
    mk('はい。お父さんは会社の母体価値を高められた','Yes — Dad co-parent-val-raise','Reflective','hiroshi_boss'),
    mk('お父さん、商談用の個室も自ら設計された','Dad — biz-priv-rm-design','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員衣服にもこだわられた','Yes — Dad staff-cloth-care','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09431',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、原始時代の生活様式の研究を論文で扱いましたね','Ren — primit-era-life paper','Calm','asuka_teacher'),
    mk('はい、画家の平面構成理論を論文で扱いました','Yes — Painter-plane-comp paper','Earnest','ren_uni'),
    mk('蓮さん、健康増進プログラムの効果を論文で扱いましたね','Ren — health-promo-eff paper','Reflective','asuka_teacher'),
    mk('はい、傷害事件の心理学的分析を論文で扱いました','Yes — Assault-psych-anal paper','Earnest','ren_uni'),
    mk('連続放火事件の捜査史を論文で扱いましたね','Serial-arson-inv-hist paper','Engaged','asuka_teacher'),
    mk('はい、組織犯罪の脅し構造を論文で扱いました','Yes — Org-crime-threat paper','Earnest','ren_uni'),
    mk('蓮さん、感染症の蔓延要因を論文で扱いましたね','Ren — infect-spread-factor paper','Reflective','asuka_teacher'),
    mk('はい、肝臓病の予防医学を論文で扱いました','Yes — Liver-dis-prev paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09432',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、原始的な暴力事件を、警察、扱われてますね','Case primit-viol police-handle','Reflective','ren_uni'),
    mk('警察、犯行現場を平面図で記録します','Police crime-scene-plane-map','Procedural','takeda_officer'),
    mk('本件、地域の防犯増進活動を、警察、推進されてますね','Case local-crime-prev-promo police-push','Reflective','ren_uni'),
    mk('警察、傷害事件は厳格に捜査します','Police assault-strict-inv','Procedural','takeda_officer'),
    mk('本件、連続放火事件を、警察、追っておられますね','Case serial-arson police-pursue','Reflective','ren_uni'),
    mk('警察、組織犯罪の脅しには断固対処します','Police org-crime-threat-firm','Procedural','takeda_officer'),
    mk('本件、薬物蔓延への対策を、警察、進めておられますね','Case drug-spread-counter police-prog','Reflective','ren_uni'),
    mk('警察、被害者の肝臓損傷の鑑定も進めます','Police victim-liver-dmg-forensic','Close','takeda_officer'),
  ]},
  {id:'conv_09433',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、原始時代の生活の研究を論文で扱いましたね','Sakura — primit-life paper','Calm','asuka_teacher'),
    mk('はい、画家の平面構成の研究を論文で扱いました','Yes — Painter-plane-comp paper','Earnest teen','sakura_teen'),
    mk('健康増進プログラムを論文で扱いましたね','Health-promo paper','Reflective','asuka_teacher'),
    mk('はい、傷害事件の心理学を論文で扱いました','Yes — Assault-psych paper','Earnest','sakura_teen'),
    mk('連続放火事件の捜査史を論文で扱いましたね','Serial-arson-hist paper','Engaged','asuka_teacher'),
    mk('はい、組織犯罪の脅し構造を論文で扱いました','Yes — Org-crime-threat paper','Earnest','sakura_teen'),
    mk('感染症の蔓延要因を論文で扱いましたね','Infect-spread paper','Reflective','asuka_teacher'),
    mk('はい、肝臓病の予防医学を論文で扱いました','Yes — Liver-prev paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09434',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、原始反射と乳児の発達を医療チームで研究します','Ren — primit-reflex-infant med-team','Calm','saito_doctor'),
    mk('はい、CT画像の平面解析を医療チームで学びます','Yes — CT-plane-anal med-team','Patient','saito_doctor'),
    mk('地域の健康増進事業を、貴院、推進されてますね、先生','Local-health-promo your-hosp push, sensei','Reflective','ren_uni'),
    mk('はい、傷害患者の救急対応を医療チームで担当します','Yes — Assault-patient-ER med-team','Patient','saito_doctor'),
    mk('放火被害者の火傷治療を、貴院、進められてますね、先生','Arson-vict-burn your-hosp treat, sensei','Reflective','ren_uni'),
    mk('はい、患者への脅し的説明は医療チームで避けます','Yes — Patient-threat-explan med-team-avoid','Patient','saito_doctor'),
    mk('感染症の院内蔓延防止を、貴院、徹底されてますね、先生','Infect-hosp-spread-prev your-hosp strict, sensei','Curious','ren_uni'),
    mk('はい、肝臓移植のプログラムを医療チームで進めます','Yes — Liver-transplant med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_09435',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、原始的な勘ではなくデータで判断しろ','Our co — primit-gut-no-data','Crisp','hiroshi_boss'),
    mk('はい。提案書は平面図も添付します','Yes — Prop-plane-map-att','Methodical','kenji_office'),
    mk('当社、社員の健康増進を経営課題と捉えろ','Our co — staff-health-promo-mgmt','Direction','hiroshi_boss'),
    mk('はい。職場の傷害事故を未然防止します','Yes — Workplace-injury-prev','Update','kenji_office'),
    mk('社用車の放火対策も検討しろ','Co-car-arson-counter','Direction','hiroshi_boss'),
    mk('はい。社員への脅しまがいの言動を禁じます','Yes — Staff-threat-words-ban','Update','kenji_office'),
    mk('当社、感染症の社内蔓延を未然防止しろ','Our co — infect-spread-prev','Direction','hiroshi_boss'),
    mk('はい。社員の肝臓検診の補助も検討します','Yes — Staff-liver-check-sub','Close','kenji_office'),
  ]},
  {id:'conv_09436',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、学生時代に寮の宿舎にお住まいだったって、メイちゃん','Aoi — cust-student-dorm-shukusha Mei','Reflective','mei_romantic'),
    mk('葵、お客様、華麗な舞台衣装の写真を見せて下さったよ、メイちゃん','Aoi — cust-glam-stage-costume Mei','Reflective','aoi_barista'),
    mk('葵、お客様、赤外線リモコンの修理が趣味だって、メイちゃん','Aoi — cust-infrared-rem-rep Mei','Reflective','mei_romantic'),
    mk('葵、お客様、右脳トレーニング法を研究されてるって、メイちゃん','Aoi — cust-right-brain-train Mei','Reflective','aoi_barista'),
    mk('葵、お客様、速記者として活躍されてたんだって、メイちゃん','Aoi — cust-stenog-active Mei','Reflective','mei_romantic'),
    mk('葵、お店のポスター、接着が剥がれてるね、メイちゃん','Aoi — store-poster-glue-peel Mei','Wry','aoi_barista'),
    mk('葵、お客様、高解像度のカメラがご趣味だって、メイちゃん','Aoi — cust-hi-res-cam-hobby Mei','Reflective','mei_romantic'),
    mk('葵、お客様、伊豆諸島の旅がご趣味だって、メイちゃん','Aoi — cust-Izu-isles-trip Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09437',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが軍の宿舎で生活された','Gran — youth Dad-mil-shukusha-live','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、華麗な舞踏会のお写真お持ちだったわよね、あなた?','Yes — Grandpa-glam-ball-photo, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが赤外線ストーブを愛用された','Gran — youth Dad-infrared-stove-fav','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、右脳教育の本を読まれてたわよね、あなた?','Grandpa — right-brain-edu-book, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが速記者の妹さんを誇りにされた','Gran — youth Dad-stenog-sis-proud','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご自分で家具の接着修理をされたわよね、あなた?','Grandpa — furn-glue-rep, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが高解像度の双眼鏡をお持ちだった','Gran — youth Dad-hi-res-binoc','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、伊豆諸島の旅をご家族で楽しまれたわよね、あなた?','Grandpa — Izu-isles-fam-trip, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09438',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが学生時代、宿舎にお住まいだったのよ','Sho — Dad-student-shukusha-live','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祭りの華麗な衣装を見たよ','Mei-sis — me fest-glam-costume','Eager child','sho_child'),
    mk('翔くん、お父さんがTVの赤外線リモコンを直して下さったわ','Sho — Dad-TV-infrared-rem-fix','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと右脳のパズルやったよ','Mei-sis — me Dad-right-brain-puzz','Eager child','sho_child'),
    mk('翔くん、お父さんが速記の見本を見せて下さったわ','Sho — Dad-stenog-sample-show','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと接着剤で工作したよ','Mei-sis — me Dad-glue-craft','Eager child','sho_child'),
    mk('翔くん、お父さんが高解像度のカメラを持ってらしたわ','Sho — Dad-hi-res-cam-have','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと諸島の地図を見たよ','Mei-sis — me Dad-isles-map','Eager close','sho_child'),
  ]},
  {id:'conv_09439',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、部活合宿で宿舎泊まったろ?','Riku — club-camp-shukusha-stay?','Curious teen','sakura_teen'),
    mk('お前、ダンス部の華麗な衣装似合ってたぞ、桜','You — dance-glam-costume-suit Sakura','Praising','riku_teen'),
    mk('リク、お前、赤外線サーモグラフィー使った実験やったろ?','Riku — infrared-thermo-exp?','Curious','sakura_teen'),
    mk('お前、右脳タイプの試験得意だったな、桜','You — right-brain-test-good Sakura','Wry','riku_teen'),
    mk('リク、お前、速記みたいに早くノート取るな','Riku — stenog-like-fast-note','Praising','sakura_teen'),
    mk('お前、接着剤の工作得意だな、桜','You — glue-craft-good Sakura','Wry','riku_teen'),
    mk('リク、お前のスマホ、解像度すごいな','Riku — phone-resolution-high','Curious','sakura_teen'),
    mk('お前、社会で諸島の地理勉強したろ?桜','You — soc-isles-geo? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09440',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが学生時代の宿舎の思い出を語って下さるわ','Sho — Dad-stud-shukusha-mem','Tender','yumiko_mom'),
    mk('ママ、ぼく、お祭りで華麗な踊りを見たよ','Mom — me fest-glam-dance','Eager child','sho_child'),
    mk('翔くん、お父さんが赤外線リモコンの仕組みを教えて下さるわ','Sho — Dad-infrared-rem-mechan-teach','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと右脳の絵あてゲームしたよ','Mom — me Dad-right-brain-guess-game','Eager child','sho_child'),
    mk('翔くん、お父さんが速記の見本を見せて下さるそうよ','Sho — Dad-stenog-sample-show','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと接着剤で工作したよ','Mom — me Dad-glue-craft','Eager child','sho_child'),
    mk('翔くん、お父さんが高解像度の写真をプリントして下さるわ','Sho — Dad-hi-res-photo-print','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと諸島の地図を見たよ','Mom — me Dad-isles-map','Eager close','sho_child'),
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

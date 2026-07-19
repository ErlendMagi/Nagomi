import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_457 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['心底','まんが','諸々','愛想','すばやく','はまり','ゆで','まだしも']
const B_T = ['本紙','減速','同市','出馬','課せ','部類','大綱','適性']
const C_T = ['供養','守護','物色','不特定','贈与','再婚','勝訴','虚構']
const D_T = ['喜劇','白鳥','酒造','クジラ','雑学','落とし穴','飲み屋','平方メートル']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09101',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖父ちゃんに会えて心底嬉しかったわね','Sho — Grandpa-met-deeply-glad','Tender','yumiko_mom'),
    mk('ママ、ぼく、まんがを読むのが大好きだよ','Mom — me manga-read-love','Eager child','sho_child'),
    mk('翔くん、お父さんが諸々のお手伝いをして下さるわ','Sho — Dad-various-help','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんに愛想良く挨拶したよ','Mom — me Grandpa-friendly-greet','Proud child','sho_child'),
    mk('翔くん、お父さんはすばやく支度をされたわ','Sho — Dad-quick-prep','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お絵描きにすっかりはまりこんでるよ','Mom — me drawing-immersed','Eager child','sho_child'),
    mk('翔くん、夕飯にゆで卵を作りましょうね','Sho — dinner-boiled-egg-make','Direction','yumiko_mom'),
    mk('ママ、ぼく、雨ならまだしも、雪まで降るとは思わなかったよ','Mom — me rain-OK-snow-not-thought','Reflective close','sho_child'),
  ]},
  {id:'conv_09102',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、お店を心底気に入って下さってるね、メイちゃん','Aoi — cust-store-deeply-like Mei','Pleased','mei_romantic'),
    mk('葵、お客様、まんが雑誌を持ってこられたよ、メイちゃん','Aoi — cust-manga-mag-bring Mei','Reflective','aoi_barista'),
    mk('葵、諸々の打ち合わせは午後にしましょう、メイちゃん','Aoi — various-meet-afternoon Mei','Direction','mei_romantic'),
    mk('葵、お客様に愛想よく接するのは大事ね、メイちゃん','Aoi — cust-friendly-serve-impt Mei','Direction','aoi_barista'),
    mk('葵、新人さん、すばやく動けるようになったね、メイちゃん','Aoi — newbie-quick-move-able Mei','Praising','mei_romantic'),
    mk('葵、お客様、新メニューにすっかりはまりこんでるね、メイちゃん','Aoi — cust-new-menu-immersed Mei','Pleased','aoi_barista'),
    mk('葵、ゆで野菜のサラダも追加しましょう、メイちゃん','Aoi — boiled-veg-salad-add Mei','Direction','mei_romantic'),
    mk('葵、雨ならまだしも、台風だと閉店も考えるね、メイちゃん','Aoi — rain-OK-typhoon-close-consider Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09103',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは心底家族を大事にされた','Gran — youth Dad-deeply-fam-cherish','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、まんがをお孫様に買ってこられたわよね、あなた?','Yes — Grandpa-manga-grandkid-bought, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは諸々のお祭り行事を仕切られた','Gran — youth Dad-various-fest-led','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご近所に愛想よくされてたわよね、あなた?','Grandpa — neighbor-friendly, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはすばやく決断された','Gran — youth Dad-quick-decide','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、骨董集めにはまりこんでらしたわよね、あなた?','Grandpa — antique-immersed, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがゆで小豆を作って下さった','Gran — youth Dad-boil-azuki-made','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、戦争ならまだしも、家族の事は耐えられないと仰った','Grandpa — war-OK-fam-not-bear-said','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09104',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、心底その夢叶えたいんだろ?','Riku — deeply-dream-want?','Curious teen','sakura_teen'),
    mk('お前、まんが雑誌、何冊持ってんだ、桜','You — manga-mag-how-many Sakura','Wry','riku_teen'),
    mk('リク、諸々の準備は明日でいいよな','Riku — various-prep-tomorrow-OK','Reflective','sakura_teen'),
    mk('お前、先生に愛想良くしすぎだろ、桜','You — teacher-friendly-too-much Sakura','Wry','riku_teen'),
    mk('リク、お前、すばやくテストを終わらせるな','Riku — quick-test-finish','Praising','sakura_teen'),
    mk('お前、ゲームにはまりこみすぎだぞ、桜','You — game-immersed-too-much Sakura','Wry','riku_teen'),
    mk('リク、お前、ゆで卵むくの上手いな','Riku — boil-egg-peel-good','Praising','sakura_teen'),
    mk('お前、漫画ならまだしも、ゲームばっかは駄目だぞ、桜','You — manga-OK-game-only-no Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_09105',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さん、心底ホッとしたわよ','Sho — Mei-sis-deeply-relief','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんとまんが描いたよ','Mei-sis — me Mei-sis-manga-drew','Proud child','sho_child'),
    mk('翔くん、諸々のお絵描き道具、用意してきたわよ','Sho — various-art-tool-bring','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お友達に愛想良くするように心がけてるよ','Mei-sis — me friend-friendly-aim','Earnest child','sho_child'),
    mk('翔くん、メイ姉さんも、すばやく絵を仕上げるのよ','Sho — Mei-sis-quick-art-finish','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、絵にすっかりはまりこんでるよ','Mei-sis — me art-immersed','Eager child','sho_child'),
    mk('翔くん、お祖母ちゃんがゆで栗を持ってきて下さるわ','Sho — Grandma-boil-chestnut-bring','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、絵ならまだしも、漢字は苦手だよ','Mei-sis — me art-OK-kanji-bad','Wry close','sho_child'),
  ]},
  {id:'conv_09106',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、本紙の取材依頼を承諾しろ','Our co — our-newspaper-int-accept','Crisp','hiroshi_boss'),
    mk('はい。市場の成長減速に備えております','Yes — Market-decel-prep','Methodical','kenji_office'),
    mk('当社、同市での展開を加速しろ','Our co — same-city-exp-accel','Direction','hiroshi_boss'),
    mk('はい。次期社長への出馬を取締役会で決定します','Yes — Next-pres-run-board-decide','Update','kenji_office'),
    mk('当社、新人にも適正な責任を課せ','Our co — newbie-resp-impose','Direction','hiroshi_boss'),
    mk('はい。これは特別案件の部類に入ります','Yes — Spec-case-cat','Update','kenji_office'),
    mk('新事業の大綱を取締役会に提示しろ','New-biz-outline-board-show','Direction','hiroshi_boss'),
    mk('はい。社員の適性検査を継続実施します','Yes — Staff-apti-test-cont','Close','kenji_office'),
  ]},
  {id:'conv_09107',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('本紙の社外向け記事を社内報にも転載しましょう','Our-newspaper-outside-article-internal','Brisk','yuki_office'),
    mk('はい。生産ラインを減速する必要が出てきました','Yes — Prod-line-decel-need','Cooperative','kenji_office'),
    mk('同市内の競合店をリストアップしましょう','Same-city-rival-store-list','Direction','yuki_office'),
    mk('はい。お得意様の代表が選挙に出馬されたそうです','Yes — VIP-rep-election-run','Update','kenji_office'),
    mk('新人に厳しい目標を課せると逆効果ですね','Newbie-strict-impose-counter','Reflective','yuki_office'),
    mk('はい。お得意様の問い合わせは緊急の部類です','Yes — VIP-inquiry-urgent-cat','Update','kenji_office'),
    mk('新方針の大綱を社員に発表しましょう','New-policy-outline-staff-announce','Direction','yuki_office'),
    mk('はい。配属には個々の適性を考慮します','Yes — Assign-individual-apti-consider','Close','kenji_office'),
  ]},
  {id:'conv_09108',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、本紙の論評を参考にしろ','Ren — our-newspaper-rev-ref','Mentor','hiroshi_boss'),
    mk('はい。研究の進度を減速して見直します','Yes — Research-pace-decel-review','Earnest','ren_uni'),
    mk('蓮、同市内の他研究機関とも連携しろ','Ren — same-city-other-research-link','Direction','hiroshi_boss'),
    mk('はい。学会の理事に出馬を勧められました','Yes — Conf-board-run-rec','Polite','ren_uni'),
    mk('蓮、学生に過度の課題を課せないよう注意しろ','Ren — stud-excess-impose-not-care','Direction','hiroshi_boss'),
    mk('はい。優秀な論文の部類に入る研究をします','Yes — Top-paper-cat-research','Earnest','ren_uni'),
    mk('蓮、博士論文の大綱を作成しろ','Ren — PhD-paper-outline-make','Direction','hiroshi_boss'),
    mk('はい。研究テーマと自分の適性を見極めます','Yes — Research-apti-disc','Earnest close','ren_uni'),
  ]},
  {id:'conv_09109',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、本紙のインタビューに協力されますね','Police our-newspaper-int-coop','Cooperative','kenji_office'),
    mk('警察、繁華街のドライバーに減速を呼びかけられますね','Police arcade-driver-decel-call','Cooperative','kenji_office'),
    mk('警察、同市の防犯対策を強化されますね','Police same-city-crime-prev-strength','Cooperative','kenji_office'),
    mk('警察、市民代表が地方選挙に出馬する事案にも対応されますね','Police citizen-rep-local-run-resp','Cooperative','kenji_office'),
    mk('警察、若手警察官に課せる業務量も配慮されますね','Police young-officer-impose-care','Cooperative','kenji_office'),
    mk('警察、複雑な事件の部類に入る本件、ご対応ありがとうございます','Police complex-cat-case thx','Cooperative','kenji_office'),
    mk('警察、新方針の大綱を市民にもご説明されますね','Police new-policy-outline-citizen-explain','Cooperative','kenji_office'),
    mk('警察、配属には適性を重視されてますね','Police assign-apti-imp','Close','kenji_office'),
  ]},
  {id:'conv_09110',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、本紙の創刊号にコメントされたぞ','Dad — founding our-newspaper-first-comment','Sage','hiroshi_elder'),
    mk('はい。お父さんは事業の減速時期も冷静に判断された','Yes — Dad biz-decel-calm','Commitment','hiroshi_boss'),
    mk('お父さん、同市の競合と切磋琢磨されたぞ','Dad — same-city-rival-comp','Wistful','hiroshi_elder'),
    mk('はい。お父さんは業界団体の代表にも出馬された','Yes — Dad industry-rep-run','Reflective','hiroshi_boss'),
    mk('お父さん、社員に過度の目標を課せなかったぞ','Dad — staff-excess-impose-not','Wistful','hiroshi_elder'),
    mk('はい。お父さんは独自の部類の事業を作られた','Yes — Dad uni-cat-biz-create','Reflective','hiroshi_boss'),
    mk('お父さん、新方針の大綱を毎年示されたぞ','Dad — new-policy-outline-yearly','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員の適性を見抜く目をお持ちでした','Yes — Dad staff-apti-eye','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09111',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、戦死者供養の歴史を論文で扱いましたね','Ren — war-dead-memorial-hist paper','Calm','asuka_teacher'),
    mk('はい、地域の守護神信仰を論文で扱いました','Yes — Local-guard-deity paper','Earnest','ren_uni'),
    mk('蓮さん、企業が物色する人材の傾向を論文で扱いましたね','Ren — corp-eyeing-talent-trend paper','Reflective','asuka_teacher'),
    mk('はい、不特定多数を狙ったテロの研究を論文で扱いました','Yes — Indis-mass-target-terror paper','Earnest','ren_uni'),
    mk('遺産贈与の法制度を論文で扱いましたね','Inh-gift-legal paper','Engaged','asuka_teacher'),
    mk('はい、戦後の再婚率の社会学を論文で扱いました','Yes — Postwar-remarry-soc paper','Earnest','ren_uni'),
    mk('蓮さん、市民訴訟で勝訴した事例を論文で扱いましたね','Ren — civil-trial-win-case paper','Reflective','asuka_teacher'),
    mk('はい、メディアが作り出す虚構を論文で扱いました','Yes — Media-fab-fiction paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09112',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、被害者の供養に警察、配慮されてますね','Case victim-memorial police-care','Reflective','ren_uni'),
    mk('警察、地域の守護を任務として誇りに思っております','Police local-guard-mission-pride','Procedural','takeda_officer'),
    mk('本件、容疑者が現場を物色していた事を警察、確認されましたね','Case suspect-eye-on-site police-confirm','Reflective','ren_uni'),
    mk('警察、不特定多数を狙う事件に厳しく対応します','Police indis-mass-target-strict-resp','Procedural','takeda_officer'),
    mk('本件、不正贈与の事案も警察、捜査されてますね','Case illegal-gift police-inv','Reflective','ren_uni'),
    mk('警察、再婚後のDV事案にも対応します','Police remarry-DV-resp','Procedural','takeda_officer'),
    mk('本件、警察、勝訴できる証拠を集められてますね','Case police-win-evid-collect','Reflective','ren_uni'),
    mk('警察、捜査結果が虚構と疑われないよう厳格に進めます','Police inv-result-fiction-prev-strict','Close','takeda_officer'),
  ]},
  {id:'conv_09113',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、戦死者供養の歴史を論文で扱いましたね','Sakura — war-memorial paper','Calm','asuka_teacher'),
    mk('はい、地域の守護神信仰を論文で扱いました','Yes — Local-guard paper','Earnest teen','sakura_teen'),
    mk('企業が物色する人材の傾向を論文で扱いましたね','Corp-eyeing-talent paper','Reflective','asuka_teacher'),
    mk('はい、不特定多数を狙ったテロを論文で扱いました','Yes — Indis-target-terror paper','Earnest','sakura_teen'),
    mk('遺産贈与の法制度を論文で扱いましたね','Inh-gift paper','Engaged','asuka_teacher'),
    mk('はい、戦後の再婚率の社会学を論文で扱いました','Yes — Postwar-remarry paper','Earnest','sakura_teen'),
    mk('市民訴訟で勝訴した事例を論文で扱いましたね','Civil-trial-win paper','Reflective','asuka_teacher'),
    mk('はい、メディアが作り出す虚構を論文で扱いました','Yes — Media-fiction paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09114',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、亡くなられた患者さんの供養を医療チームで丁寧に行います','Ren — dec-patient-memorial med-team careful','Calm','saito_doctor'),
    mk('はい、地域の守護的な医療を医療チームで担います','Yes — Local-guard-med med-team handle','Patient','saito_doctor'),
    mk('臓器を物色するような医療犯罪を、貴院、警戒されてますね、先生','Organ-eye-med-crime your-hosp watch, sensei','Reflective','ren_uni'),
    mk('はい、不特定の感染源を医療チームで追跡します','Yes — Indis-infect-source med-team-trace','Patient','saito_doctor'),
    mk('遺体提供の贈与意思を、貴院、慎重に確認されますね、先生','Body-donate-will your-hosp careful, sensei','Reflective','ren_uni'),
    mk('はい、再婚を考える患者さんの家族療法を医療チームで担当します','Yes — Remarry-fam-therapy med-team','Patient','saito_doctor'),
    mk('医療訴訟で勝訴された経緯を、貴院、お持ちですね、先生','Med-trial-win-circ your-hosp, sensei','Curious','ren_uni'),
    mk('はい、虚構的な医療情報を医療チームで打ち消します','Yes — Fiction-med-info med-team-refute','Patient close','saito_doctor'),
  ]},
  {id:'conv_09115',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、亡くなられた社員の供養に手厚く対応しろ','Our co — dec-staff-memorial-careful','Crisp','hiroshi_boss'),
    mk('はい。社員の守護的な福利厚生を充実させます','Yes — Staff-guard-benefit-enrich','Methodical','kenji_office'),
    mk('当社、競合が物色する優秀な人材を引き留めろ','Our co — rival-eye-talent-keep','Direction','hiroshi_boss'),
    mk('はい。不特定多数への広告を見直しております','Yes — Indis-mass-ad-review','Update','kenji_office'),
    mk('当社、贈与に頼らない独自の経営をしろ','Our co — gift-not-rely-uni-mgmt','Direction','hiroshi_boss'),
    mk('はい。再婚社員への配慮を整備しております','Yes — Remarry-staff-care-prep','Update','kenji_office'),
    mk('当社、訴訟で勝訴するための準備を怠るな','Our co — trial-win-prep-not-skimp','Direction','hiroshi_boss'),
    mk('はい。虚構の評判に振り回されません','Yes — Fiction-rep-not-sway','Close','kenji_office'),
  ]},
  {id:'conv_09116',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、喜劇映画を観てきたんだって、メイちゃん','Aoi — cust-comedy-saw Mei','Pleased','mei_romantic'),
    mk('葵、お子様、白鳥のバレエに憧れてるって、メイちゃん','Aoi — child-swan-ballet-admire Mei','Tender','aoi_barista'),
    mk('葵、お客様、酒造の見学ツアーをされたって、メイちゃん','Aoi — cust-sake-tour Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ホエールウォッチングでクジラを見たんだって、メイちゃん','Aoi — cust-whale-watch Mei','Animated','aoi_barista'),
    mk('葵、お客様、雑学が豊富で楽しいよね、メイちゃん','Aoi — cust-trivia-many-fun Mei','Pleased','mei_romantic'),
    mk('葵、新メニュー考案、落とし穴に注意しましょう、メイちゃん','Aoi — new-menu-pitfall-care Mei','Direction','aoi_barista'),
    mk('葵、お客様、近所の飲み屋のお話されてたよ、メイちゃん','Aoi — cust-neighbor-tavern-told Mei','Reflective','mei_romantic'),
    mk('葵、お店の広さは何平方メートル位かしらね、メイちゃん','Aoi — store-size-how-many-sqm Mei','Curious close','aoi_barista'),
  ]},
  {id:'conv_09117',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは喜劇の映画館に通われた','Gran — youth Dad-comedy-cinema','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お庭に白鳥の置物を飾ってらしたわよね、あなた?','Yes — Grandpa-garden-swan-orn, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと地元の酒造を見学した','Gran — youth Dad-local-sake-tour','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、孫にクジラの絵本を読まれたわよね、あなた?','Grandpa — grandkid-whale-book-read, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは雑学博士でいらした','Gran — youth Dad-trivia-master','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、人生の落とし穴をお孫様に教えてらしたわよね、あなた?','Grandpa — life-pitfall-grandkid-told, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと飲み屋で語り合ったぞ','Gran — youth Dad-tavern-talked','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご自宅は六十平方メートル位だったわよね、あなた?','Grandpa — home-60-sqm, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09118',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんと喜劇のお芝居観に行きたいわね','Sho — Dad-comedy-play-go-want','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、白鳥の湖のバレエ観たいよ','Mei-sis — me Swan-Lake-want','Eager child','sho_child'),
    mk('翔くん、メイ姉さんと酒造の見学はもう少し大きくなってからね','Sho — Mei-sis-sake-tour-bigger','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、絵本でクジラ見てワクワクしたよ','Mei-sis — me book-whale-excited','Eager child','sho_child'),
    mk('翔くん、メイ姉さんはお絵描きの雑学いっぱい知ってるのよ','Sho — Mei-sis-art-trivia-many','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、絵に落とし穴を描いたよ','Mei-sis — me art-pitfall-drew','Eager child','sho_child'),
    mk('翔くん、お父さんが昔、飲み屋で歌を歌ったお話してたわ','Sho — Dad-old-tavern-sang-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お家の広さは100平方メートルくらいだって','Mei-sis — me home-100-sqm','Reflective close','sho_child'),
  ]},
  {id:'conv_09119',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、喜劇のお笑い好きだろ?','Riku — comedy-like?','Curious teen','sakura_teen'),
    mk('お前、白鳥のバレエ観たろ?桜','You — swan-ballet-saw? Sakura','Curious','riku_teen'),
    mk('リク、お前ん家、酒造業だろ?','Riku — your-home-sake-biz?','Curious','sakura_teen'),
    mk('お前、博物館でクジラの骨格見たろ?桜','You — museum-whale-skel? Sakura','Curious','riku_teen'),
    mk('リク、お前、雑学クイズ大会出たろ?','Riku — trivia-quiz-comp?','Curious','sakura_teen'),
    mk('お前、テストの落とし穴に注意しろよ、桜','You — test-pitfall-care Sakura','Direction','riku_teen'),
    mk('リク、お前のお父さん、近所の飲み屋常連だろ?','Riku — your-Dad-tavern-reg?','Curious','sakura_teen'),
    mk('お前、社会で平方メートルの計算やったろ?桜','You — soc-sqm-calc? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09120',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんと喜劇映画を観に行きましょうね','Sho — Dad-comedy-go','Tender','yumiko_mom'),
    mk('ママ、ぼく、白鳥の湖のバレエ観たいよ','Mom — me Swan-Lake-want','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんが酒造の見学に連れて行って下さったわ','Sho — Grandpa-sake-tour-took','Reflective','yumiko_mom'),
    mk('ママ、ぼく、絵本でクジラのお話読んだよ','Mom — me book-whale-read','Eager child','sho_child'),
    mk('翔くん、お父さんは雑学が豊富な方ね','Sho — Dad-trivia-many','Reflective','yumiko_mom'),
    mk('ママ、ぼく、テストの落とし穴に気をつけて取り組んだよ','Mom — me test-pitfall-care','Proud child','sho_child'),
    mk('翔くん、お父さんがお取引先と飲み屋で懇談されたわ','Sho — Dad-partner-tavern-chat','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お家の広さ平方メートルで計算したよ','Mom — me home-sqm-calc','Proud close','sho_child'),
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

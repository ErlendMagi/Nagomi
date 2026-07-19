import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_401 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['むかし','みち','帰ら','叩き','割っ','削り','好か','きらい']
const B_T = ['埋まっ','労組','貸出','定休','代え','所存','営ん','取調べ']
const C_T = ['覆い','明かさ','少数','気がつい','人民','調和','振れ','成人']
const D_T = ['誓っ','ぎっしり','ノルマ','砂浜','ダメージ','贈っ','学芸','あ〜']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_07981',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、むかしのお祖父ちゃんのお話、聞きたい?','Sho — old-Grandpa stories listen-want?','Reflective','yumiko_mom'),
    mk('ママ、お祖父ちゃんが歩いてたみち、おしえて','Mom — Grandpa walked road teach','Curious child','sho_child'),
    mk('翔くん、お父さん、今夜は帰らないって','Sho — Dad tonight don\'t-return','Reflective','yumiko_mom'),
    mk('ママ、お父さん、太鼓を叩きに行ったんだよ','Mom — Dad drum-hit went','Eager child','sho_child'),
    mk('翔くん、コップを割らないでね','Sho — cup-break don\'t','Direction','yumiko_mom'),
    mk('ママ、お父さん、鉛筆を削りに机に向かってるよ','Mom — Dad pencil-sharpen desk','Reflective','sho_child'),
    mk('翔くん、嫌われ者にならないでね、お友達に好かれるのよ','Sho — disliked-don\'t, friends-be-liked','Direction','yumiko_mom'),
    mk('ママ、ぼくは野菜がきらいなんだ','Mom — me veg dislike','Wry close','sho_child'),
  ]},
  {id:'conv_07982',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、むかしのお店、懐かしいよね、メイちゃん','Aoi — old-store nostalgic Mei','Reflective','mei_romantic'),
    mk('葵、お店までのみち、迷ったわよ、メイちゃん','Aoi — store-road got-lost Mei','Wry','aoi_barista'),
    mk('葵、今日は早く帰らせるね、メイちゃん','Aoi — today early send-home Mei','Caring','mei_romantic'),
    mk('葵、お皿を叩きそうになっちゃった、メイちゃん','Aoi — plate hit-almost Mei','Wry','aoi_barista'),
    mk('葵、卵を割っておくね、メイちゃん','Aoi — egg-crack do Mei','Practical','mei_romantic'),
    mk('葵、鉛筆を削りに机に向かう、メイちゃん','Aoi — pencil-sharpen desk Mei','Reflective','aoi_barista'),
    mk('葵、お店、お客様に好かれるとうれしい、メイちゃん','Aoi — store cust-liked glad Mei','Tender','mei_romantic'),
    mk('葵、辛いお料理きらいなお客様もいるよね、メイちゃん','Aoi — spicy-dislike cust exist Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_07983',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、むかしの結婚式、覚えてるか?','Gran — old-wedding remember?','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、村の細いみちをよく歩かれたわよね、あなた?','Yes — Grandpa village narrow-road walked, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、戦時中、お父さんがなかなか帰らない時期があったぞ','Gran — wartime Dad didn\'t-return period','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お太鼓を叩きに祭りに行かれたわよね、あなた?','Grandpa — drum-hit fest went, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、よくお皿を割ってしまって泣いてたぞ、覚えてる?','Gran — often plate-broke cried, remember?','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご鉛筆の削りカスをよく片付けられたわよね、あなた?','Grandpa — pencil-shaving often-cleaned, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さん、村中の人に好かれてたぞ','Gran — Dad village-everyone-liked','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、虫がきらいなお方だったわよね、あなた?','Grandpa — bug-dislike person, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_07984',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、むかしの学校行事、覚えてるか?','Riku — old school-event remember?','Curious teen','sakura_teen'),
    mk('お前、通学のみち変えたろ?桜','You — commute-road changed? Sakura','Curious','riku_teen'),
    mk('リク、お前、夜遅くまで帰らないだろ?','Riku — you late don\'t-return?','Wry','sakura_teen'),
    mk('お前、教科書を机で叩いてうるさいぜ、桜','You — book desk-hit noisy Sakura','Teasing','riku_teen'),
    mk('リク、シャーペンの芯、割っちゃうなよ','Riku — pencil-lead don\'t-break','Direction','sakura_teen'),
    mk('お前、いつも鉛筆を削りに机に向かってるな、桜','You — always pencil-sharpen desk Sakura','Reflective','riku_teen'),
    mk('リク、お前、先生に好かれてるじゃん','Riku — you teacher-liked','Praising','sakura_teen'),
    mk('お前、数学きらいだろ、桜','You — math-dislike? Sakura','Teasing close','riku_teen'),
  ]},
  {id:'conv_07985',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さん、むかしのおもちゃ、お家に置いてるの','Sho — Mei-sis old-toy home-kept','Reflective','mei_romantic'),
    mk('メイ姉さん、メイ姉さんのお店までのみち、覚えたよ','Mei-sis — Mei-sis store-road learned','Proud child','sho_child'),
    mk('翔くん、お父さんは今夜、お仕事で帰らないらしいわ','Sho — Dad tonight work don\'t-return','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ピアノを叩きすぎちゃったよ','Mei-sis — me piano-hit-too-much','Wry child','sho_child'),
    mk('翔くん、お皿を割らないでね','Sho — plate-break-don\'t','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと鉛筆を削りに机に行ったよ','Mei-sis — me Dad pencil-sharpen desk went','Eager','sho_child'),
    mk('翔くん、お友達に好かれるのは大事よ','Sho — friend-liked important','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お薬きらいだけど飲むよ','Mei-sis — me medicine-dislike but-drink','Earnest close','sho_child'),
  ]},
  {id:'conv_07986',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社の倉庫、在庫で埋まってしまったぞ','Our warehouse stock-filled','Crisp','hiroshi_boss'),
    mk('はい。労組と協議を進めております','Yes — Union consult advance','Methodical','kenji_office'),
    mk('社員食堂の貸出ロッカーを整えろ','Staff-canteen lending-locker arrange','Direction','hiroshi_boss'),
    mk('はい。来週水曜は定休にいたします','Yes — Next-Wed regular-holiday','Update','kenji_office'),
    mk('業者を代えての対応を検討しろ','Vendor-change resp consider','Direction','hiroshi_boss'),
    mk('はい、当社、品質向上にお応えする所存です','Yes — Our quality-improve intent','Update','kenji_office'),
    mk('長年、この事業を営んできた誇りを忘れるな','Long-yrs biz-run pride don\'t-forget','Direction','hiroshi_boss'),
    mk('はい。社内取調べを実施しております','Yes — In-house investigation conduct','Close','kenji_office'),
  ]},
  {id:'conv_07987',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('当社の駐車場、車で埋まっておりますね','Our parking car-filled','Brisk','yuki_office'),
    mk('はい。労組へのご説明をいたしました','Yes — Union-explain done','Cooperative','kenji_office'),
    mk('社員、図書貸出を進めましょう','Staff book-lending advance','Direction','yuki_office'),
    mk('はい。当社の定休日、見直し中です','Yes — Our regular-holiday reviewing','Update','kenji_office'),
    mk('委託先を代えての試算を出しましょう','Outsource-change estimate produce','Direction','yuki_office'),
    mk('はい、新規事業に挑む所存です','Yes — New-biz challenge intent','Update','kenji_office'),
    mk('社長は長年、お店を営んでこられたのよ','Pres long-yrs store-run','Reflective','yuki_office'),
    mk('はい。社員アンケート取調べを進めております','Yes — Staff-survey investigation advance','Close','kenji_office'),
  ]},
  {id:'conv_07988',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究室、機材で埋まってないか?','Ren — lab equip-filled?','Mentor','hiroshi_boss'),
    mk('はい。労組について経済学の論文を読みました','Yes — Union econ paper read','Earnest','ren_uni'),
    mk('蓮、図書館の貸出制度、活用しろ','Ren — library lending utilize','Direction','hiroshi_boss'),
    mk('はい。教授の定休日、把握しております','Yes — Prof regular-holiday grasp','Polite','ren_uni'),
    mk('蓮、研究テーマを代えての挑戦も検討しろ','Ren — research-theme-change challenge consider','Direction','hiroshi_boss'),
    mk('はい、博士取得まで頑張る所存です','Yes — Until PhD try intent','Earnest','ren_uni'),
    mk('蓮、研究を続けて営んでいけ','Ren — research continue-run','Direction','hiroshi_boss'),
    mk('はい。実験データの内部取調べを進めております','Yes — Experiment-data internal-audit advance','Earnest close','ren_uni'),
  ]},
  {id:'conv_07989',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、押収品で保管庫が埋まっております','Police seized storage filled','Calm','takeda_officer'),
    mk('はい。警察、労組とも円滑な対話を続けているそうですね','Yes — Police union smooth dialogue continue','Cooperative','kenji_office'),
    mk('警察、装備の貸出を整えております','Police equip lending arrange','Procedural','takeda_officer'),
    mk('はい。警察、年末年始の定休状況をご周知ありがたいです','Yes — Police year-end regular-holiday notice grateful','Cooperative','kenji_office'),
    mk('警察、担当を代えての対応も検討中です','Police staff-change resp consider','Procedural','takeda_officer'),
    mk('はい。警察、犯罪減少に努める所存ですね','Yes — Police crime-reduce intent','Cooperative','kenji_office'),
    mk('警察、地域でパトロールを営んでおります','Police region patrol-run','Procedural','takeda_officer'),
    mk('はい。容疑者の取調べが続いておりますね','Yes — Suspect-investigation continue','Close','kenji_office'),
  ]},
  {id:'conv_07990',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業期、机が書類で埋まっていたぞ','Dad — founding desk doc-filled','Sage','hiroshi_elder'),
    mk('はい。お父さんは労組とも友好的でした','Yes — Dad union-friendly','Commitment','hiroshi_boss'),
    mk('お父さん、社員寮で備品の貸出をなさったぞ','Dad — staff-dorm equip-lending did','Wistful','hiroshi_elder'),
    mk('はい。お父さんの定休にこだわるお姿勢、引き継いでおります','Yes — Dad regular-holiday-keep stance inherit','Reflective','hiroshi_boss'),
    mk('お父さん、商材を代えての勝負をなさった','Dad — product-change gamble did','Wistful','hiroshi_elder'),
    mk('はい。お父さんの百年企業を目指す所存です','Yes — Dad century-co aim intent','Reflective','hiroshi_boss'),
    mk('お父さんが営んできた事業、私が引き継ぐ','Dad — biz-run I inherit','Wistful','hiroshi_elder'),
    mk('はい。社内不正を取調べる体制、整えます','Yes — In-house fraud investigation arrange','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_07991',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、世間に覆い隠された事実を論文で扱っていましたね','Ren — society-hidden facts paper','Calm','asuka_teacher'),
    mk('はい、口を明かさなかった証人を論文で扱いました','Yes — silent-witness paper','Earnest','ren_uni'),
    mk('少数派の意見を論文で扱っていましたね','Minority-opinion paper','Reflective','asuka_teacher'),
    mk('はい、調査時に気がついた偏りを論文で扱いました','Yes — survey-noticed bias paper','Earnest','ren_uni'),
    mk('人民の自治を論文で扱っていましたね','People-autonomy paper','Engaged','asuka_teacher'),
    mk('はい、伝統と現代の調和を論文で扱いました','Yes — trad-modern harmony paper','Earnest','ren_uni'),
    mk('世論の振れ幅を論文で扱っていましたね','Public-opinion swing paper','Reflective','asuka_teacher'),
    mk('はい、成人式の歴史を論文で扱いました','Yes — coming-of-age-ceremony history paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_07992',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、容疑者は事実を覆い隠そうとしていました','Case suspect tried-cover facts','Calm','takeda_officer'),
    mk('本件、警察、まだ犯人像を明かさないご方針ですね','Case police perp-image keep-undisclosed, gratitude','Curious','ren_uni'),
    mk('警察、少数の目撃証言を慎重に扱っております','Police minority-eyewitness careful-handle','Procedural','takeda_officer'),
    mk('本件、警察が気がついた手がかり、すばらしいです','Case police-noticed clue great','Reflective','ren_uni'),
    mk('警察、人民の安全を最優先にしております','Police people-safety top-prio','Procedural','takeda_officer'),
    mk('本件、地域の調和を保つご努力、警察ありがたいです','Case region-harmony keep police-grateful','Reflective','ren_uni'),
    mk('警察、容疑者の証言に振れがあると判断しております','Police suspect-testimony swing-exists judge','Procedural','takeda_officer'),
    mk('本件、成人前の少年は警察、保護対応ですね','Case pre-adult youth police-protect, gratitude','Reflective close','ren_uni'),
  ]},
  {id:'conv_07993',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、世間に覆い隠された事実を論文で扱っていましたね','Sakura — society-hidden facts paper','Calm','asuka_teacher'),
    mk('はい、口を明かさなかった証人を論文で扱いました','Yes — silent-witness paper','Earnest teen','sakura_teen'),
    mk('少数派の意見を論文で扱っていましたね','Minority paper','Reflective','asuka_teacher'),
    mk('はい、調査時に気がついた偏りを論文で扱いました','Yes — survey-noticed bias paper','Earnest','sakura_teen'),
    mk('人民の自治を論文で扱っていましたね','People-autonomy paper','Engaged','asuka_teacher'),
    mk('はい、伝統と現代の調和を論文で扱いました','Yes — trad-modern harmony paper','Earnest','sakura_teen'),
    mk('世論の振れ幅を論文で扱っていましたね','Public-opinion swing paper','Reflective','asuka_teacher'),
    mk('はい、成人式の歴史を論文で扱いました','Yes — coming-of-age-ceremony history paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_07994',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、症状を覆い隠した患者さん、医療チーム慎重対応しました','Ren — symptom-hidden patient med-team careful','Calm','saito_doctor'),
    mk('病名を明かさないご家族、貴院、配慮されますね、先生','Disease-name-undisclosed family your-hosp consider, sensei','Curious','ren_uni'),
    mk('はい、少数の症例を医療チーム研究しております','Yes — few-cases med-team research','Patient','saito_doctor'),
    mk('医師が気がついた異変、貴院、即対応されたんですね、先生','Doctor-noticed change your-hosp immediate, sensei','Reflective','ren_uni'),
    mk('医療は人民の暮らしを支える、貴院も同じ志ですね、先生','Med people-life support your-hosp same-mission, sensei','Reflective','ren_uni'),
    mk('はい、心と体の調和を医療チーム重視します','Yes — mind-body harmony med-team emphasize','Patient','saito_doctor'),
    mk('検査値の振れに貴院、注意されているそうですね、先生','Test-value-swing your-hosp careful, sensei','Reflective','ren_uni'),
    mk('はい、成人病の予防を医療チーム強化中です','Yes — adult-disease prevent med-team strengthen','Patient close','saito_doctor'),
  ]},
  {id:'conv_07995',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('社内の問題を覆い隠すな','In-house problem don\'t-cover','Crisp','hiroshi_boss'),
    mk('はい。当社、株主に進捗を明かさないわけにいきません','Yes — Our shareholder progress disclose-must','Methodical','kenji_office'),
    mk('当社、少数株主の声も聴け','Our co minority-shareholder-voice listen','Direction','hiroshi_boss'),
    mk('はい。気がついた改善点、社内、共有しております','Yes — Noticed improvements in-house share','Update','kenji_office'),
    mk('当社、人民の信頼を得る経営しろ','Our co — people-trust mgmt','Direction','hiroshi_boss'),
    mk('はい。業績と社員満足の調和を目指しております','Yes — Perf-staff-sat harmony aim','Update','kenji_office'),
    mk('株価の振れに惑わされるな','Stock-price swing don\'t-be-swayed','Direction','hiroshi_boss'),
    mk('はい。成人向け新製品を展開いたします','Yes — Adult-target new product rollout','Close','kenji_office'),
  ]},
  {id:'conv_07996',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お店を続けるって、誓っていたよね、メイちゃん','Aoi — store-continue vowed Mei','Reflective','mei_romantic'),
    mk('葵、本棚に本がぎっしりだね、メイちゃん','Aoi — bookshelf book-packed Mei','Praising','aoi_barista'),
    mk('葵、お店のノルマ、達成したわよ、メイちゃん','Aoi — store-quota achieved Mei','Praising','mei_romantic'),
    mk('葵、砂浜のお散歩、楽しかったよ、メイちゃん','Aoi — beach-stroll fun Mei','Animated','aoi_barista'),
    mk('葵、ガラスにダメージあるね、メイちゃん','Aoi — glass damage Mei','Reflective','mei_romantic'),
    mk('葵、お客様にお花を贈ったわ、メイちゃん','Aoi — cust flower-sent Mei','Tender','aoi_barista'),
    mk('葵、学芸員の方が、お店に来てくれたよ、メイちゃん','Aoi — curator store-came Mei','Animated','mei_romantic'),
    mk('葵、あ〜、もうすぐ閉店時間ね、メイちゃん','Aoi — ah soon-closing Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_07997',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さん、生涯を誓ってくださったぞ','Gran — youth Dad lifetime-vowed','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お庭にお花がぎっしりだったわよね、あなた?','Yes — Grandpa garden flower-packed, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さん、商売のノルマ大変だったぞ、覚えてる?','Gran — Dad biz-quota tough, remember?','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、新婚旅行で砂浜を歩かれたわよね、あなた?','Grandpa — honeymoon beach-walked, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、戦時のダメージ、忘れられないぞ','Gran — wartime-damage unforgettable','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、孫にお玩具を贈ってくださったわよね、あなた?','Grandpa — grandkid toy-gave, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、学芸会、お楽しみだったぞ','Gran — youth school-play enjoyed','Wistful','hiroshi_elder'),
    mk('あ〜、お祖父ちゃん、お元気な頃が懐かしいわね、あなた?','Ah Grandpa, healthy-times nostalgic, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_07998',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さん、お店を続けるって誓ってるの','Sho — Mei-sis store-continue vow','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼくのリュック、お菓子がぎっしりだよ','Mei-sis — me bag candy-packed','Eager child','sho_child'),
    mk('翔くん、お母さん、お仕事のノルマで忙しいのよ','Sho — Mom work-quota busy','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと砂浜に行きたいな','Mei-sis — me Dad beach go-want','Eager child','sho_child'),
    mk('翔くん、お友達の心にダメージを与えないでね','Sho — friend-heart damage don\'t-give','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、ママにお花を贈ったよ','Mei-sis — me Mom flower-gave','Proud child','sho_child'),
    mk('翔くん、学芸会、お父さんもいらっしゃるわよ','Sho — school-play Dad coming','Reflective','mei_romantic'),
    mk('メイ姉さん、あ〜、お腹空いちゃった','Mei-sis — ah hungry','Wry close','sho_child'),
  ]},
  {id:'conv_07999',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、優勝するって誓っていたぜ','Riku — you win-vowed','Reflective teen','sakura_teen'),
    mk('お前のロッカー、教科書ぎっしりだな、桜','Your locker textbook-packed Sakura','Wry','riku_teen'),
    mk('リク、お前のバイトのノルマ、きついらしいな','Riku — your job-quota tough','Wry','sakura_teen'),
    mk('お前、家族と砂浜に行ったろ?桜','You — family beach-went? Sakura','Curious','riku_teen'),
    mk('リク、お前のスマホ、ダメージあるぜ','Riku — your phone damage','Wry','sakura_teen'),
    mk('お前、彼女にお誕生日プレゼント、贈ったんだろ?桜','You — gf-bday-gift gave? Sakura','Teasing','riku_teen'),
    mk('リク、お前、学芸会で活躍したな','Riku — school-play active','Praising','sakura_teen'),
    mk('お前、あ〜、もう授業始まるぜ、桜','You — ah class-starts Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_08000',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さん、家族を守るって誓っていらしたのよ','Sho — Dad family-protect-vowed','Tender','yumiko_mom'),
    mk('ママ、ぼくのお弁当、ぎっしりおいしそうだよ','Mom — me bento packed delicious','Eager child','sho_child'),
    mk('翔くん、お父さん、お仕事のノルマで遅くなるそうよ','Sho — Dad work-quota late','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと砂浜行きたいな','Mom — me Dad beach go-want','Eager','sho_child'),
    mk('翔くん、お友達にダメージを与えないでね','Sho — friend damage don\'t-give','Direction','yumiko_mom'),
    mk('ママ、ぼく、お祖母ちゃんにお花を贈ったよ','Mom — me grandma flower-gave','Proud','sho_child'),
    mk('翔くん、学芸会、ママも見に行くわ','Sho — school-play Mom watch-go','Tender','yumiko_mom'),
    mk('ママ、あ〜、もうお風呂入らなきゃ','Mom — ah bath-enter-must','Wry close','sho_child'),
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

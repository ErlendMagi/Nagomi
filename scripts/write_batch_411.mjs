import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_411 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['真っ暗','滅多に','遥か','真夏','呆れ','入り込ん','通り過ぎ','つづき']
const B_T = ['尺度','原題','考案','多種','年版','義務づけ','失格','事業主']
const C_T = ['糾弾','処刑','違憲','静止','議定','挑発','飢え','騎手']
const D_T = ['アテネ','アーキテクチャ','メーリングリスト','ファイナンス','エステ','ゲリラ','アイヌ','名乗る']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08181',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、停電でお家の中、真っ暗になっちゃったわね','Sho — blackout home pitch-dark','Reflective','yumiko_mom'),
    mk('ママ、お祖父ちゃんは滅多に怒らないお方ね','Mom — Grandpa rarely-angry person','Reflective child','sho_child'),
    mk('翔くん、お祖母ちゃんちは遥か遠くにあるわよ','Sho — Grandma-home far-distant','Reflective','yumiko_mom'),
    mk('ママ、真夏の暑さ、すごいよね','Mom — midsummer-heat amazing','Reflective child','sho_child'),
    mk('翔くん、お父さん、ぼくの成績に呆れてないよね?','Sho — Dad my-grades not-amazed-disgust?','Wry child','sho_child'),
    mk('ママ、お友達がお家に入り込んで遊んでくれたよ','Mom — friend home-came-in played','Eager child','sho_child'),
    mk('翔くん、家の前を犬が通り過ぎたわよ','Sho — house-front dog-passed','Animated','yumiko_mom'),
    mk('ママ、絵本のつづき、読んで','Mom — picture-book continuation read','Eager close','sho_child'),
  ]},
  {id:'conv_08182',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、停電でお店、真っ暗になったよ、メイちゃん','Aoi — blackout store pitch-dark Mei','Reflective','mei_romantic'),
    mk('葵、お客様、滅多にいらっしゃらない方が来てくれたよ、メイちゃん','Aoi — cust rarely-coming person-came Mei','Animated','aoi_barista'),
    mk('葵、遥か遠くから来てくれたお客様、嬉しいね、メイちゃん','Aoi — far-distant cust glad Mei','Tender','mei_romantic'),
    mk('葵、真夏のかき氷、人気よね、メイちゃん','Aoi — midsummer-shaved-ice popular Mei','Reflective','aoi_barista'),
    mk('葵、私のミスに呆れないでね、メイちゃん','Aoi — me-mistake don\'t-amazed-disgust Mei','Wry','mei_romantic'),
    mk('葵、お店に虫が入り込んで困ったよ、メイちゃん','Aoi — store-bug came-in troubled Mei','Wry','aoi_barista'),
    mk('葵、お店の前を、お客様がたくさん通り過ぎてくね、メイちゃん','Aoi — store-front many cust-pass Mei','Reflective','mei_romantic'),
    mk('葵、明日のお仕事のつづき、よろしくね、メイちゃん','Aoi — tomorrow-work continuation thanks Mei','Practical close','aoi_barista'),
  ]},
  {id:'conv_08183',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが部屋を真っ暗にして昔話をしてくださったぞ','Gran — youth Dad room-pitch-dark old-tale','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃんは滅多に泣かないお方でしたわよね、あなた?','Yes — Grandpa rarely-cry person, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お祖父ちゃんと遥か遠くの山に登ったぞ','Gran — youth Grandpa-with far-distant mountain-climbed','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、真夏でも畑仕事を続けられたわよね、あなた?','Grandpa — midsummer-even field-work continued, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、息子の失敗に呆れたお祖父ちゃんを覚えてるぞ','Gran — youth son-fail-amazed-disgust Grandpa remember','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、よそ者がお家に入り込んだ時、追い返されたわよね、あなた?','Grandpa — outsider home-came-in chased-back, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが家の前を通り過ぎる人に挨拶をされたぞ','Gran — youth Dad house-front pass-people greeted','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お話のつづきを聞かせてくださったわよね、あなた?','Grandpa — story-continuation told, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08184',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、教室、真っ暗にして怖がらせたろ?','Riku — classroom pitch-dark scared?','Curious teen','sakura_teen'),
    mk('お前、滅多に怒らないけど、今日は怒ってたな、桜','You — rarely-angry but-today-angry Sakura','Curious','riku_teen'),
    mk('リク、お前の家、遥か学校から離れてるよな','Riku — your-home far-distant from-school','Reflective','sakura_teen'),
    mk('お前、真夏に部活、すげえ頑張ったな、桜','You — midsummer-club super-tried Sakura','Praising','riku_teen'),
    mk('リク、お前、ぼくの忘れ物に呆れただろ?','Riku — me-forget amazed-disgust?','Wry','sakura_teen'),
    mk('お前、図書室に入り込んで漫画読んだろ?桜','You — library came-in manga-read? Sakura','Teasing','riku_teen'),
    mk('リク、お前、ぼくが通り過ぎたのに気づかなかったろ','Riku — me-passed didn\'t-notice','Wry','sakura_teen'),
    mk('お前、宿題のつづき、明日やれよ、桜','You — homework-continuation tomorrow-do Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_08185',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんのお店、停電で真っ暗になったの','Sho — Mei-sis-store blackout pitch-dark','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、滅多に泣かないんだよ','Mei-sis — me rarely-cry','Proud child','sho_child'),
    mk('翔くん、遥か昔のおとぎ話、聞きたい?','Sho — far-old fairytale listen-want?','Curious','mei_romantic'),
    mk('メイ姉さん、ぼく、真夏のプール、楽しみだよ','Mei-sis — me midsummer-pool look-forward','Eager child','sho_child'),
    mk('翔くん、ぼくのいたずらに、メイ姉さんも呆れるかな','Sho — me-prank Mei-sis-amazed-disgust?','Wry child','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんちに入り込んで遊んでたよ','Mei-sis — me Grandpa-home came-in played','Eager child','sho_child'),
    mk('翔くん、お父さんが家の前を通り過ぎる時、手を振ってね','Sho — Dad house-front-pass time wave','Direction','mei_romantic'),
    mk('メイ姉さん、絵本のつづき、お祖母ちゃんに聞きたい','Mei-sis — picture-book-continuation Grandma-ask','Eager close','sho_child'),
  ]},
  {id:'conv_08186',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、評価尺度を明確にしろ','Our co — eval-scale clarify','Crisp','hiroshi_boss'),
    mk('はい。新製品の原題を変更します','Yes — New-product original-name change','Methodical','kenji_office'),
    mk('当社、若手社員が考案した企画を採用しろ','Our co — young-staff devised plan adopt','Direction','hiroshi_boss'),
    mk('はい。多種の業務を効率化しております','Yes — Diverse-biz efficient','Update','kenji_office'),
    mk('当社、年版の報告書をしっかり作成しろ','Our co — annual-report carefully-make','Direction','hiroshi_boss'),
    mk('はい。社員に研修参加を義務づける方針です','Yes — Staff training-attend mandate policy','Update','kenji_office'),
    mk('当社、コンプライアンス違反は失格事由だ','Our co — compliance-violation disqual-reason','Direction','hiroshi_boss'),
    mk('はい。新規事業主との契約を進めております','Yes — New-biz-owner contract advance','Close','kenji_office'),
  ]},
  {id:'conv_08187',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('お客様満足度の尺度を見直しましょう','Cust-satisfaction-scale review','Brisk','yuki_office'),
    mk('はい。新製品の原題決定は今月中ですね','Yes — New-product original-name within-month','Cooperative','kenji_office'),
    mk('社員のアイデアを考案ベースに反映しましょう','Staff-idea devise-based reflect','Direction','yuki_office'),
    mk('はい。多種多様な分野へ進出します','Yes — Various-diverse-fields expand','Update','kenji_office'),
    mk('業界年版の最新情報を取り寄せましょう','Industry-annual latest-info acquire','Direction','yuki_office'),
    mk('はい。研修参加の義務づけを検討中です','Yes — Training-attend mandate consider','Update','kenji_office'),
    mk('応募者の書類不備は失格対象ですね','Applicant-doc-defect disqual-target','Direction','yuki_office'),
    mk('はい。事業主との直接交渉を進めます','Yes — Biz-owner direct-negotiate','Close','kenji_office'),
  ]},
  {id:'conv_08188',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究の評価尺度を明示しろ','Ren — research eval-scale specify','Mentor','hiroshi_boss'),
    mk('はい。論文の原題を見直しております','Yes — Paper original-title review','Earnest','ren_uni'),
    mk('蓮、新手法を考案するには時間がかかるぞ','Ren — new-method devise takes-time','Direction','hiroshi_boss'),
    mk('はい。多種の文献を読破しました','Yes — Diverse-lit read-through','Polite','ren_uni'),
    mk('蓮、最新年版の論文集も参照しろ','Ren — latest-annual paper-collection reference','Direction','hiroshi_boss'),
    mk('はい。教授からゼミ参加を義務づけられました','Yes — Prof seminar-attend mandated','Earnest','ren_uni'),
    mk('蓮、データ改ざんは失格事項だ','Ren — data-falsify disqual-item','Direction','hiroshi_boss'),
    mk('はい。共同研究の事業主とお打合せです','Yes — Joint-research biz-owner meeting','Earnest close','ren_uni'),
  ]},
  {id:'conv_08189',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、犯罪の評価尺度を統一しております','Police crime-eval-scale unify','Calm','takeda_officer'),
    mk('はい。警察、事件原題の整理、ありがたいです','Yes — Police case-original-title organize grateful','Cooperative','kenji_office'),
    mk('警察、新しい捜査法を考案いたしました','Police new-inv-method devised','Procedural','takeda_officer'),
    mk('はい。警察は多種の専門官を抱えておられますね','Yes — Police diverse-specialist have','Cooperative','kenji_office'),
    mk('警察、年版の白書を発行いたしております','Police annual whitepaper issue','Procedural','takeda_officer'),
    mk('はい。市民の通報義務づけ、警察、徹底ですね','Yes — Citizen-report mandate police-thorough','Cooperative','kenji_office'),
    mk('警察、不適格者を失格対象としております','Police unqualified disqual-target','Procedural','takeda_officer'),
    mk('はい。被害事業主の支援、警察、ありがたいです','Yes — Damaged-biz-owner support police-grateful','Close','kenji_office'),
  ]},
  {id:'conv_08190',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業期、自分の尺度で人を見られたぞ','Dad — founding self-scale people-saw','Sage','hiroshi_elder'),
    mk('はい。お父さんは商品の原題決定にこだわられた','Yes — Dad product-original-name particular','Commitment','hiroshi_boss'),
    mk('お父さん、独自の販売法を考案されたぞ','Dad — unique-sales-method devised','Wistful','hiroshi_elder'),
    mk('はい。お父さんは多種の業界に通じておられた','Yes — Dad diverse-industries familiar','Reflective','hiroshi_boss'),
    mk('お父さん、年版の社員手帳をご準備された','Dad — annual staff-handbook prepared','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員研修を義務づける制度を作られた','Yes — Dad staff-training mandate-system created','Reflective','hiroshi_boss'),
    mk('お父さん、不正は即失格と厳しかった','Dad — fraud immediate-disqual strict','Wistful','hiroshi_elder'),
    mk('はい。お父さんは事業主としての覚悟をお持ちでした','Yes — Dad biz-owner resolve had','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08191',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、民衆による糾弾運動を論文で扱っていましたね','Ren — populace-denounce-movement paper','Calm','asuka_teacher'),
    mk('はい、古代の処刑制度を論文で扱いました','Yes — ancient-execution-system paper','Earnest','ren_uni'),
    mk('蓮さん、違憲訴訟の歴史を論文で扱っていましたね','Ren — unconstitutional-lawsuit history paper','Reflective','asuka_teacher'),
    mk('はい、静止画と動画の知覚差を論文で扱いました','Yes — still-moving perception-diff paper','Earnest','ren_uni'),
    mk('国際議定書の効力を論文で扱っていましたね','Intl-protocol-effect paper','Engaged','asuka_teacher'),
    mk('はい、軍事的挑発行為を論文で扱いました','Yes — military-provocation paper','Earnest','ren_uni'),
    mk('蓮さん、貧困と飢えの関係を論文で扱っていましたね','Ren — poverty-hunger relation paper','Reflective','asuka_teacher'),
    mk('はい、競馬の騎手の歴史を論文で扱いました','Yes — horse-race jockey history paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08192',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、SNSでの糾弾投稿を警察、調査中です','Case SNS-denounce-post police-inv','Calm','takeda_officer'),
    mk('警察、古い処刑場跡の保存にも関与されているそうですね','Police old-exec-site preserve involved','Curious','ren_uni'),
    mk('本件、警察、違憲性も含めて検討されているとのこと','Case police unconstitutional also-consider','Procedural','takeda_officer'),
    mk('警察、カメラが静止する瞬間を捉えました','Police camera-still-moment captured','Reflective','ren_uni'),
    mk('本件、国際議定に基づく対応を警察、進めております','Case intl-protocol based police-advance','Procedural','takeda_officer'),
    mk('警察、容疑者の挑発に冷静に対応されたんですね','Police suspect-provocation cool-respond','Reflective','ren_uni'),
    mk('本件、被害者の飢え状態を警察、確認されたんですね','Case victim-hunger police-verify','Reflective','ren_uni'),
    mk('警察、競馬騎手による不正を摘発いたしました','Police jockey-fraud bust','Close','takeda_officer'),
  ]},
  {id:'conv_08193',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、民衆による糾弾運動を論文で扱っていましたね','Sakura — populace-denounce paper','Calm','asuka_teacher'),
    mk('はい、古代の処刑制度を論文で扱いました','Yes — ancient-exec paper','Earnest teen','sakura_teen'),
    mk('違憲訴訟の歴史を論文で扱っていましたね','Unconstitutional paper','Reflective','asuka_teacher'),
    mk('はい、静止画と動画の知覚差を論文で扱いました','Yes — still-motion paper','Earnest','sakura_teen'),
    mk('国際議定書の効力を論文で扱っていましたね','Intl-protocol paper','Engaged','asuka_teacher'),
    mk('はい、軍事的挑発行為を論文で扱いました','Yes — military-provocation paper','Earnest','sakura_teen'),
    mk('貧困と飢えの関係を論文で扱っていましたね','Poverty-hunger paper','Reflective','asuka_teacher'),
    mk('はい、競馬の騎手の歴史を論文で扱いました','Yes — jockey-history paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08194',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、医療ミスへの糾弾と医療チームの対応を考察しております','Ren — med-error-denounce med-team-resp consider','Calm','saito_doctor'),
    mk('歴史的な処刑記録の医学的観察、貴院、研究なさったんですね、先生','Hist exec-record med-observation your-hosp research, sensei','Curious','ren_uni'),
    mk('医療制度の違憲性も、貴院、議論されておられますね、先生','Med-sys unconstitutional your-hosp discuss, sensei','Reflective','ren_uni'),
    mk('はい、患者さんが静止できる検査時間を医療チームで確保します','Yes — Patient-still test-time med-team secure','Patient','saito_doctor'),
    mk('医療議定の遵守を、貴院、徹底されておられますね、先生','Med-protocol comply your-hosp thorough, sensei','Reflective','ren_uni'),
    mk('はい、患者さんへの挑発的な発言は医療チームで絶対許しません','Yes — Patient-provoke speech med-team absolutely-don\'t-allow','Patient','saito_doctor'),
    mk('飢えに苦しむ患者さんの栄養指導、貴院、なさるんですね、先生','Hunger-suffer patient nutrition-guide your-hosp do, sensei','Reflective','ren_uni'),
    mk('騎手の負傷時の救急医療も、貴院、ご対応されたんですね、先生','Jockey-injury ER your-hosp resp, sensei','Reflective close','ren_uni'),
  ]},
  {id:'conv_08195',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、SNSでの糾弾に冷静対応しろ','Our co — SNS-denounce cool-respond','Crisp','hiroshi_boss'),
    mk('はい。違法商品は処刑対象でなく、即回収します','Yes — Illegal-product not-exec immediate-recall','Methodical','kenji_office'),
    mk('当社、違憲性の疑いある契約は破棄しろ','Our co — unconstitutional contract abrogate','Direction','hiroshi_boss'),
    mk('はい。シャッターが静止するまで防犯カメラ点検します','Yes — Shutter-still-until camera-inspect','Update','kenji_office'),
    mk('業界議定にも参加しろ','Industry-protocol also-attend','Direction','hiroshi_boss'),
    mk('はい。競合の挑発的広告に動じません','Yes — Competitor-provoke ad steady','Update','kenji_office'),
    mk('途上国での飢え対策にも CSR で取り組め','Dev-country hunger-counter CSR address','Direction','hiroshi_boss'),
    mk('はい。CMに騎手をモデルにする案、検討中です','Yes — CM jockey-model consider','Close','kenji_office'),
  ]},
  {id:'conv_08196',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、アテネのカフェ文化、研究したいよね、メイちゃん','Aoi — Athens-cafe-culture research-want Mei','Eager','mei_romantic'),
    mk('葵、お店のアーキテクチャ、洗練されてるね、メイちゃん','Aoi — store-architecture refined Mei','Praising','aoi_barista'),
    mk('葵、メーリングリストでお客様にお知らせ送ってる?メイちゃん','Aoi — mailing-list cust-notify send? Mei','Curious','mei_romantic'),
    mk('葵、お店のファイナンス、健全よね、メイちゃん','Aoi — store-finance healthy Mei','Reflective','aoi_barista'),
    mk('葵、お客様、エステに通っていらっしゃるのよ、メイちゃん','Aoi — cust esthetic-attend Mei','Animated','mei_romantic'),
    mk('葵、お祭りで急にゲリラ雨だったね、メイちゃん','Aoi — fest sudden-guerrilla-rain Mei','Wry','aoi_barista'),
    mk('葵、アイヌ文化のイベント、興味あるよね、メイちゃん','Aoi — Ainu-culture event interest Mei','Eager','mei_romantic'),
    mk('葵、お客様、本名を名乗ることはあまりされないね、メイちゃん','Aoi — cust real-name don\'t-name-much Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08197',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがアテネの遺跡の本を読んでらしたぞ','Gran — youth Dad Athens-ruins-book read','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、家のアーキテクチャにこだわられたわよね、あなた?','Yes — Grandpa home-architecture particular, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、メーリングリストって新しい言葉、お父さんも興味を持たれたぞ','Gran — mailing-list new-word Dad interested','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お家のファイナンスをきちんと管理されたわよね、あなた?','Grandpa — home-finance properly-manage, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、ばあさんがエステに通っていたぞ','Gran — youth gran esthetic-attended','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ゲリラ雨でずぶ濡れになったお話されたわよね、あなた?','Grandpa — guerrilla-rain soaked told, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがアイヌ文化の本を読まれたぞ','Gran — youth Dad Ainu-culture-book read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご自身の名前を名乗るときも丁寧でしたわよね、あなた?','Grandpa — self-name-utter polite, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08198',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さん、アテネ風カフェにしたいの','Sho — Mei-sis Athens-style-cafe want','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、家のアーキテクチャって難しいって聞いたよ','Mei-sis — me home-architecture heard-difficult','Curious child','sho_child'),
    mk('翔くん、お父さんがメーリングリストでお仕事の連絡してたよ','Sho — Dad mailing-list work-contact','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんからお家のファイナンスを習ったよ','Mei-sis — me Grandpa home-finance-learned','Proud child','sho_child'),
    mk('翔くん、お母さんがエステに通っているそうよ','Sho — Mom esthetic-attend','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ゲリラ雨でずぶ濡れになっちゃった','Mei-sis — me guerrilla-rain soaked','Wry child','sho_child'),
    mk('翔くん、お父さんがアイヌ語のお話、教えてくれたわよ','Sho — Dad Ainu-language told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに名前を名乗ってご挨拶したよ','Mei-sis — me Dad name-utter greeted','Proud close','sho_child'),
  ]},
  {id:'conv_08199',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、アテネに修学旅行行きたいんだろ?','Riku — Athens-trip want?','Curious teen','sakura_teen'),
    mk('お前、コンピュータのアーキテクチャの本、読んでたな、桜','You — computer-architecture-book read Sakura','Praising','riku_teen'),
    mk('リク、お前、部活のメーリングリストに入ってるか?','Riku — club mailing-list joined?','Curious','sakura_teen'),
    mk('お前、ファイナンスの授業、興味あるって言ってたな、桜','You — finance-class interested said Sakura','Reflective','riku_teen'),
    mk('リク、お前のお母さん、エステ通ってんだろ?','Riku — your Mom esthetic-attend?','Curious','sakura_teen'),
    mk('お前、ゲリラ豪雨に巻き込まれたろ?桜','You — guerrilla-downpour caught? Sakura','Curious','riku_teen'),
    mk('リク、社会の時間にアイヌの単元、覚えてるか?','Riku — soc-class Ainu-unit remember?','Curious','sakura_teen'),
    mk('お前、初対面の人にちゃんと名乗るよな、桜','You — first-meet properly name-utter Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_08200',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがアテネの遺跡の写真集、見せてくれたわ','Sho — Dad Athens-ruins-photo showed','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お家のアーキテクチャって、何のこと?','Mom — me home-architecture what?','Curious child','sho_child'),
    mk('翔くん、ママはお仕事のメーリングリストを管理しているのよ','Sho — Mom work-mailing-list manage','Reflective','yumiko_mom'),
    mk('ママ、お祖父ちゃんが、お家のファイナンス、教えてくれるんだって','Mom — Grandpa home-finance teach','Eager child','sho_child'),
    mk('翔くん、お父さんがエステに行くって言ってたわよ','Sho — Dad esthetic-go said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、ゲリラ豪雨で、傘なくしちゃった','Mom — me guerrilla-downpour umbrella-lost','Wry child','sho_child'),
    mk('翔くん、お父さんが、アイヌの伝統工芸品を集めてらっしゃるそうよ','Sho — Dad Ainu-trad-craft collect','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お友達のお家でちゃんと名乗ったよ','Mom — me friend-home properly name-uttered','Proud close','sho_child'),
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

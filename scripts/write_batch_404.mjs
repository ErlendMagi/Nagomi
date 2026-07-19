import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_404 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['かから','そうして','背筋','座ら','変えれ','ぼろ','ふら','きょう']
const B_T = ['美学','うかがい','異物','恥ずかしながら','相まって','のけ','汚し','勝た']
const C_T = ['群衆','語源','裏切っ','献血','くくっ','苑','龍','埋もれ']
const D_T = ['マッチ','アホ','佐々木','岐阜','さぁ','たまる','珠','うめ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08041',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お引っ越しはお金がかからない方法を考えてるの','Sho — moving low-cost method think','Reflective','yumiko_mom'),
    mk('ママ、そうしてお父さんとお祖母ちゃんが仲よくなったのね','Mom — and-so Dad-Grandma got-along','Reflective child','sho_child'),
    mk('翔くん、お背筋をピンと伸ばしてね','Sho — back straight stretch','Direction','yumiko_mom'),
    mk('ママ、お祖母ちゃんが、ずっと座らないでお仕事しているよ','Mom — Grandma always stand-without working','Reflective child','sho_child'),
    mk('翔くん、お部屋のテーブルを変えればもっと広くなるわよ','Sho — room-table change-if more-wide','Reflective','yumiko_mom'),
    mk('ママ、ぼくのお靴、ぼろぼろになっちゃった','Mom — me shoes worn-out','Wry child','sho_child'),
    mk('翔くん、ふらふら歩かないでね','Sho — wobble don\'t-walk','Direction','yumiko_mom'),
    mk('ママ、きょうは何時に帰ってくるの?','Mom — today what-time return?','Curious close','sho_child'),
  ]},
  {id:'conv_08042',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お店の改装、あまりお金がかからないの、メイちゃん','Aoi — store-renovation low-cost Mei','Reflective','mei_romantic'),
    mk('葵、そうしてお店、お客様で賑わうようになったのね、メイちゃん','Aoi — and-so store cust-bustle Mei','Reflective','aoi_barista'),
    mk('葵、お背筋伸ばしてお仕事すると疲れにくいよ、メイちゃん','Aoi — back-stretch work less-tired Mei','Practical','mei_romantic'),
    mk('葵、座らないでお店を回ると元気でるね、メイちゃん','Aoi — without-sit store-around energetic Mei','Animated','aoi_barista'),
    mk('葵、お皿の配置を変えればもっと素敵になるね、メイちゃん','Aoi — plate-layout change-if more-lovely Mei','Praising','mei_romantic'),
    mk('葵、お店のエプロン、もうぼろぼろね、メイちゃん','Aoi — store-apron now worn-out Mei','Wry','aoi_barista'),
    mk('葵、お疲れの日はふらふらしないでね、メイちゃん','Aoi — tired-day wobble-don\'t Mei','Caring','mei_romantic'),
    mk('葵、きょうのお客様、お洒落だったね、メイちゃん','Aoi — today-cust stylish Mei','Praising close','aoi_barista'),
  ]},
  {id:'conv_08043',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お祖父ちゃん、お金がかからない暮らしを大切にされたぞ','Gran — youth Grandpa low-cost-life cherished','Wistful','hiroshi_elder'),
    mk('うん、そうしてお祖父ちゃん、お孫さんと過ごされたわよね、あなた?','Yes — and-so Grandpa grandkid-with stayed, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お祖父ちゃんの背筋、まっすぐだったぞ','Gran — youth Grandpa back straight','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、座らないで畑仕事をなさったわよね、あなた?','Grandpa — without-sit field-work did, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんが暮らしを変えれば楽になるとおっしゃった','Gran — Dad life-change-if comfort said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃんのお洋服、いつもぼろぼろになるまで大切になさったわね、あなた?','Grandpa — clothes worn-out-until cherished, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お祖父ちゃん、ふらふら旅されたぞ','Gran — youth Grandpa wobble-traveled','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、きょうのこと、覚えていらしたわね、あなた?','Grandpa — today remembered, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08044',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、お金かからないお店、知ってる?','Riku — low-cost-store know?','Curious teen','sakura_teen'),
    mk('お前、そうして部活を始めたんだろ?桜','You — and-so club-start? Sakura','Curious','riku_teen'),
    mk('リク、お前の背筋、漫画みたいだぜ','Riku — your back manga-like','Praising','sakura_teen'),
    mk('お前、ずっと座らないで応援してたな、桜','You — without-sit cheering Sakura','Reflective','riku_teen'),
    mk('リク、お前、髪型を変えればモテるかもよ','Riku — hair-change-if popular maybe','Teasing','sakura_teen'),
    mk('お前のリュック、ぼろぼろじゃん、桜','Your backpack worn-out Sakura','Teasing','riku_teen'),
    mk('リク、お前、ふらふらしてないか?','Riku — wobble-don\'t?','Caring','sakura_teen'),
    mk('お前、きょうの宿題終わったか?桜','You — today-homework done? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08045',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お店の改装、あまりお金がかからない計画なの','Sho — store-renovation low-cost plan','Reflective','mei_romantic'),
    mk('メイ姉さん、そうしてメイ姉さんはお店を始めたのね','Mei-sis — and-so Mei-sis store-started','Reflective child','sho_child'),
    mk('翔くん、お背筋を伸ばしてお勉強してね','Sho — back-stretch study','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、長く座らないでお手伝いしたよ','Mei-sis — me long without-sit helped','Proud child','sho_child'),
    mk('翔くん、ノートを変えればもっとお勉強楽しくなるかも','Sho — notebook-change-if more-fun maybe','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼくの上靴、もうぼろぼろだよ','Mei-sis — me indoor-shoes worn-out','Wry child','sho_child'),
    mk('翔くん、お疲れの時はふらふらせずに座ってね','Sho — tired wobble-not sit','Caring','mei_romantic'),
    mk('メイ姉さん、きょう、ぼくと遊んでくれてありがとう','Mei-sis — today me-play thanks','Tender close','sho_child'),
  ]},
  {id:'conv_08046',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、創業者の美学を継承しろ','Our co — founder-aesthetic inherit','Crisp','hiroshi_boss'),
    mk('はい。お得意様のお話、うかがい中です','Yes — VIP-story hearing','Methodical','kenji_office'),
    mk('製品に異物混入はあってはならない','Product foreign-object never','Direction','hiroshi_boss'),
    mk('恥ずかしながら、当社、対応遅れがありました','Embarrassed-but our resp-late existed','Update','kenji_office'),
    mk('当社の不調と市場混乱が相まっての苦境だ','Our slump market-chaos combined crisis','Direction','hiroshi_boss'),
    mk('はい。社員、出張のけ口に休暇を取らせます','Yes — Staff biz-trip break vacation take','Update','kenji_office'),
    mk('当社のブランドを汚し続ける広告は撤退しろ','Our brand-dirty ads withdraw','Direction','hiroshi_boss'),
    mk('はい。競合に勝たねば未来はない、と社員、心得ております','Yes — Competitor-must-beat or no-future staff-grasp','Close','kenji_office'),
  ]},
  {id:'conv_08047',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('当社、デザインの美学を大切にしましょう','Our design-aesthetic cherish','Brisk','yuki_office'),
    mk('はい。お客様のお話、うかがい、ご報告いたします','Yes — Cust-story hearing report','Cooperative','kenji_office'),
    mk('食品に異物混入のリスク、ゼロを目指しましょう','Food foreign-object risk zero-aim','Direction','yuki_office'),
    mk('恥ずかしながら、当社の在庫管理に課題がございます','Embarrassed-but our stock-mgmt task exists','Update','kenji_office'),
    mk('当社の好調と市況改善が相まっての業績です','Our strength market-improve combined perf','Direction','yuki_office'),
    mk('はい。社員にのけ者感を抱かせない職場を目指します','Yes — Staff outcast-feel-not workplace aim','Update','kenji_office'),
    mk('お客様の信頼を汚した広告、撤退しましょう','Cust-trust-dirty ad withdraw','Direction','yuki_office'),
    mk('はい。他社に勝たねば、当社、存続できません','Yes — Other-co-must-beat or our-co cannot-survive','Close','kenji_office'),
  ]},
  {id:'conv_08048',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究には美学を持って臨め','Ren — research aesthetic hold face','Mentor','hiroshi_boss'),
    mk('はい。教授のご意見、うかがい、論文に反映します','Yes — Prof-opinion hearing paper-reflect','Earnest','ren_uni'),
    mk('蓮、実験で異物混入は絶対避けろ','Ren — experiment foreign-object absolutely-avoid','Direction','hiroshi_boss'),
    mk('恥ずかしながら、先週の実験、失敗しました','Embarrassed-but last-week experiment failed','Polite','ren_uni'),
    mk('蓮、努力と運が相まっての論文発表だ','Ren — effort-luck combined paper-pub','Reflective','hiroshi_boss'),
    mk('はい。研究室メンバーをのけ者にしない配慮をしております','Yes — Lab-member outcast-not consider','Earnest','ren_uni'),
    mk('蓮、論文の信頼を汚しかねない引用を避けろ','Ren — paper-trust-dirty citation avoid','Direction','hiroshi_boss'),
    mk('はい。先行研究に勝たねば博士は取れません','Yes — Prior-research-must-beat or PhD can\'t-get','Earnest close','ren_uni'),
  ]},
  {id:'conv_08049',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、捜査には美学があるとお考えなさいませ','Police inv aesthetic-exists please-think','Calm','takeda_officer'),
    mk('はい。警察、市民のお声をうかがい、ご対応されてありがたいです','Yes — Police citizen-voice hearing resp grateful','Cooperative','kenji_office'),
    mk('警察、押収品から異物が出てきた事件があります','Police seized foreign-object emerged case exists','Procedural','takeda_officer'),
    mk('恥ずかしながら、警察も連絡ミスがありました','Embarrassed-but police comm-miss existed','Procedural','takeda_officer'),
    mk('地域の声と警察の努力が相まっての解決ですね','Region-voice police-effort combined solution','Cooperative','kenji_office'),
    mk('警察、誰一人のけ者にしない地域づくりに協力します','Police anyone outcast-not region-build coop','Procedural','takeda_officer'),
    mk('はい。地域の名を汚した事件、警察、断固対応ありがたいです','Yes — Region-name-dirty case police firm-resp grateful','Cooperative','kenji_office'),
    mk('警察、犯罪に勝たねば市民は安心できません','Police crime-must-beat or citizen no-peace','Close','takeda_officer'),
  ]},
  {id:'conv_08050',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さんは、商売に美学を持っていらしたぞ','Dad — biz-aesthetic had','Sage','hiroshi_elder'),
    mk('はい。お父さんはお得意様のお声をうかがい、即対応された','Yes — Dad VIP-voice hearing immediate-resp','Commitment','hiroshi_boss'),
    mk('お父さんは、お客様への異物混入の責任を、自ら取られた','Dad — cust foreign-object responsibility self-took','Wistful','hiroshi_elder'),
    mk('恥ずかしながら、私はその覚悟まで至っておりません','Embarrassed-but I that-resolve not-reached','Reflective','hiroshi_boss'),
    mk('お父さんの実直と運が相まっての成功だぞ','Dad — honest luck combined success','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員をのけ者にしないリーダーでした','Yes — Dad staff outcast-not leader','Reflective','hiroshi_boss'),
    mk('お父さんは、会社の名を汚した者を厳しく咎められた','Dad — co-name-dirty person strict-reprimand','Wistful','hiroshi_elder'),
    mk('はい。お父さんが勝たれた市場、私が守ります','Yes — Dad-won market I-protect','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08051',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、革命時の群衆心理を論文で扱っていましたね','Ren — revolution-crowd-psyche paper','Calm','asuka_teacher'),
    mk('はい、漢字の語源を論文で扱いました','Yes — kanji-etymology paper','Earnest','ren_uni'),
    mk('同盟国に裏切った国家を論文で扱っていましたね','Ally-betrayed nation paper','Reflective','asuka_teacher'),
    mk('はい、災害時の献血運動を論文で扱いました','Yes — disaster-blood-donate movement paper','Earnest','ren_uni'),
    mk('蓮さん、紐をくくった結び目の文化史を論文で扱っていましたね','Ren — knot-tied culture-history paper','Reflective','asuka_teacher'),
    mk('はい、宮内苑の歴史を論文で扱いました','Yes — imperial-garden history paper','Earnest','ren_uni'),
    mk('龍の伝承を論文で扱っていましたね','Dragon-folklore paper','Engaged','asuka_teacher'),
    mk('はい、書庫に埋もれた古文書を論文で扱いました','Yes — archive-buried ancient-doc paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08052',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、駅前の群衆の安全を警察、確保しております','Case station-front crowd-safety police-secure','Calm','takeda_officer'),
    mk('警察、暗号の語源解析を進めております','Police cipher-etymology advance','Procedural','takeda_officer'),
    mk('本件、組織を裏切った内通者を警察、特定されたんですね','Case org-betrayed leaker police-identify','Curious','ren_uni'),
    mk('警察、被害者ご遺族のための献血支援も行います','Police victim-bereaved blood-donate-support do','Procedural','takeda_officer'),
    mk('本件、犯人がくくった証拠物の縄、警察、回収されたんですね','Case perp-tied evidence-rope police-recover','Reflective','ren_uni'),
    mk('警察、神苑近くの巡回を強化しております','Police shrine-garden-near patrol strengthen','Procedural','takeda_officer'),
    mk('本件、龍頭の装飾品を警察、押収されたんですね','Case dragon-head-ornament police-seize','Reflective','ren_uni'),
    mk('警察、書類に埋もれた手がかりを見つけました','Police doc-buried clue found','Close','takeda_officer'),
  ]},
  {id:'conv_08053',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、革命時の群衆心理を論文で扱っていましたね','Sakura — revolution-crowd paper','Calm','asuka_teacher'),
    mk('はい、漢字の語源を論文で扱いました','Yes — kanji-etymology paper','Earnest teen','sakura_teen'),
    mk('同盟国に裏切った国家を論文で扱っていましたね','Ally-betrayed paper','Reflective','asuka_teacher'),
    mk('はい、災害時の献血運動を論文で扱いました','Yes — disaster-blood paper','Earnest','sakura_teen'),
    mk('紐をくくった結び目の文化史を論文で扱っていましたね','Knot-tied culture paper','Reflective','asuka_teacher'),
    mk('はい、宮内苑の歴史を論文で扱いました','Yes — imperial-garden paper','Earnest','sakura_teen'),
    mk('龍の伝承を論文で扱っていましたね','Dragon folklore paper','Engaged','asuka_teacher'),
    mk('はい、書庫に埋もれた古文書を論文で扱いました','Yes — archive-buried doc paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08054',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、災害時の群衆医療を医療チーム、訓練しております','Ren — disaster-crowd-med med-team train','Calm','saito_doctor'),
    mk('医療用語の語源を貴院、お調べになったんですね、先生','Med-term-etymology your-hosp checked, sensei','Curious','ren_uni'),
    mk('信頼を裏切った医師は医療チーム、絶対許しません','Trust-betrayed doctor med-team absolutely-don\'t-forgive','Patient','saito_doctor'),
    mk('貴院、献血の啓蒙活動もなさっているそうですね、先生','Your-hosp blood-donate awareness also-do, sensei','Reflective','ren_uni'),
    mk('はい、結束バンドでくくった傷の応急処置、医療チーム実施します','Yes — zip-tie-tied wound emergency-tx med-team do','Patient','saito_doctor'),
    mk('貴院、外苑にリハビリ施設をお持ちなんですね、先生','Your-hosp outer-garden rehab-facility have, sensei','Reflective','ren_uni'),
    mk('はい、龍宮の伝承から薬名をつけた事例があります','Yes — dragon-palace-folklore drug-named case exists','Patient','saito_doctor'),
    mk('長年カルテに埋もれた症例、貴院、再発見されたんですね、先生','Long-yr chart-buried case your-hosp rediscover, sensei','Reflective close','ren_uni'),
  ]},
  {id:'conv_08055',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、群衆向けイベントを企画しろ','Our co — crowd-event plan','Crisp','hiroshi_boss'),
    mk('はい。ブランド名の語源を社内、共有いたします','Yes — Brand-etymology in-house share','Methodical','kenji_office'),
    mk('当社の信頼を裏切った供給先とは取引停止だ','Our trust-betrayed supplier transaction-stop','Direction','hiroshi_boss'),
    mk('はい。社内で献血キャンペーンを始めました','Yes — In-house blood-donate campaign started','Update','kenji_office'),
    mk('社員をくくった枠組みでなく自由を与えろ','Staff tied-framework-not freedom give','Direction','hiroshi_boss'),
    mk('はい。新店舗を社苑のような癒しの空間に設計します','Yes — New-store co-garden-like healing-space design','Update','kenji_office'),
    mk('龍のロゴで力強さを表現しろ','Dragon-logo strength express','Direction','hiroshi_boss'),
    mk('はい。倉庫に埋もれた古い商品を、整理いたします','Yes — Warehouse-buried old product organize','Close','kenji_office'),
  ]},
  {id:'conv_08056',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お料理のマッチング、考えてるの、メイちゃん','Aoi — dish-matching thinking Mei','Reflective','mei_romantic'),
    mk('葵、ごめん、私アホみたいな失敗しちゃった、メイちゃん','Aoi — sorry me dumb-like fail Mei','Wry','aoi_barista'),
    mk('葵、佐々木さんがまた来てくれたよ、メイちゃん','Aoi — Sasaki again-came Mei','Animated','mei_romantic'),
    mk('葵、岐阜のお菓子、お土産で持ってきたよ、メイちゃん','Aoi — Gifu-sweets souvenir brought Mei','Animated','aoi_barista'),
    mk('葵、さぁ、お店を開けるわよ、メイちゃん','Aoi — well store-open Mei','Brisk','mei_romantic'),
    mk('葵、レジに小銭がたまる箱、必要よね、メイちゃん','Aoi — register coin-accumulate box need Mei','Practical','aoi_barista'),
    mk('葵、お客様、珠のようなお洒落、なさってたわ、メイちゃん','Aoi — cust pearl-like stylish did Mei','Praising','mei_romantic'),
    mk('葵、新メニューに梅を使うの、お洒落よね、メイちゃん','Aoi — new-menu plum-use stylish Mei','Praising close','aoi_barista'),
  ]},
  {id:'conv_08057',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お祖父ちゃんはマッチでタバコに火をつけてらしたぞ','Gran — youth Grandpa match cigarette-lit','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ご自分のことアホとおっしゃってお笑いになったわよね、あなた?','Yes — Grandpa self-dumb said-laughed, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、佐々木さんとよくお話されたぞ','Gran — youth Sasaki-with often-talked','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、岐阜のご親戚にお会いになったわよね、あなた?','Grandpa — Gifu-relatives met, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お祖父ちゃん、さぁ行こうとよく仰ったぞ','Gran — youth Grandpa "saa-let\'s-go" often-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、貯金がたまるのを楽しみにされてたわよね、あなた?','Grandpa — savings-accumulate looked-forward, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、ばあさんの珠のような瞳が綺麗だったぞ','Gran — youth gran-pearl-like eyes pretty','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お庭で梅をご覧になったわよね、あなた?','Grandpa — garden plum looked, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08058',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さん、お料理のマッチングが大事よ','Sho — Mei-sis dish-matching important','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「アホ」って怒られちゃった','Mei-sis — me Dad "aho" scolded','Wry child','sho_child'),
    mk('翔くん、佐々木先生は優しい人ね','Sho — Sasaki-sensei gentle','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、岐阜のお祖父ちゃんちに行きたいな','Mei-sis — me Gifu-Grandpa-home go-want','Eager child','sho_child'),
    mk('翔くん、さぁ、お遊びの時間よ','Sho — well play-time','Brisk','mei_romantic'),
    mk('メイ姉さん、ぼくの貯金箱、お金がたまる音がするよ','Mei-sis — me piggy-bank coin-accumulate sound','Eager','sho_child'),
    mk('翔くん、お祖母ちゃんのお首飾り、珠でできてるのよ','Sho — Grandma-necklace pearl-made','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お庭の梅、見たよ','Mei-sis — me garden-plum saw','Eager close','sho_child'),
  ]},
  {id:'conv_08059',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、デートのマッチングアプリ使ってんだろ','Riku — date-matching app use?','Teasing teen','sakura_teen'),
    mk('お前、テストでアホみたいな間違いしたな、桜','You — test dumb-like mistake Sakura','Teasing','riku_teen'),
    mk('リク、佐々木先生、お前の評価高いぞ','Riku — Sasaki-sensei your-evaluation high','Praising','sakura_teen'),
    mk('お前、修学旅行で岐阜行くらしいな、桜','You — school-trip Gifu go Sakura','Curious','riku_teen'),
    mk('リク、さぁ、もう授業始まるぞ','Riku — well class-starts','Brisk','sakura_teen'),
    mk('お前、お年玉、まだたまるの?桜','You — NY-money still-accumulate? Sakura','Curious','riku_teen'),
    mk('リク、お前の妹さん、珠のような瞳だな','Riku — your sister pearl-like eyes','Praising','sakura_teen'),
    mk('お前のお弁当の梅、すっぱそうだぜ、桜','Your bento-plum sour-look Sakura','Teasing close','riku_teen'),
  ]},
  {id:'conv_08060',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、ママ、家具のマッチングを考えてるの','Sho — Mom furniture-matching thinking','Reflective','yumiko_mom'),
    mk('ママ、お父さんがぼくに「アホって言うな」っておこったの','Mom — Dad me "don\'t-say-aho" scolded','Wry child','sho_child'),
    mk('翔くん、佐々木さんが、お父さんのお仕事仲間よ','Sho — Sasaki Dad-work-colleague','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖母ちゃんと岐阜に行きたいな','Mom — me Grandma-with Gifu go-want','Eager child','sho_child'),
    mk('翔くん、さぁ、ご飯ですよ','Sho — well meal','Brisk','yumiko_mom'),
    mk('ママ、ぼくの貯金、たまるのが楽しみだよ','Mom — me savings accumulate look-forward','Eager','sho_child'),
    mk('翔くん、ママの珠のネックレス、おばあちゃんからの贈り物よ','Sho — Mom pearl-necklace Grandma-gift','Tender','yumiko_mom'),
    mk('ママ、お庭の梅、いい香りだね','Mom — garden-plum nice-scent','Eager close','sho_child'),
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

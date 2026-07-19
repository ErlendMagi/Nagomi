import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_418 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['真夜中','どっと','あげく','大金','居間','つぶやい','しつこい','うろうろ']
const B_T = ['鉄鋼','請負','車体','減量','オペレーション','戸籍','養子','打開']
const C_T = ['祖先','生前','独断','戦死','胎児','判別','二酸化炭素','裁定']
const D_T = ['洋楽','紅白','表参道','ビーズ','格言','コンテナ','ワゴン','エサ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08321',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、真夜中にお水飲みたくなったら、ママ呼んでね','Sho — midnight water-want call-Mom','Tender','yumiko_mom'),
    mk('ママ、お祭りでお客様がどっと来たって、お父さんが言ってたよ','Mom — fest cust-flooded Dad-said','Reflective child','sho_child'),
    mk('翔くん、走り回ったあげく、お疲れになったわね','Sho — ran-around-result tired','Wry','yumiko_mom'),
    mk('ママ、お祖父ちゃんが大金を寄付なさったってお話聞いたよ','Mom — Grandpa large-sum-donated heard','Reflective child','sho_child'),
    mk('翔くん、居間でお絵かきしようね','Sho — living-room draw-let\'s','Direction','yumiko_mom'),
    mk('ママ、お父さんが何かつぶやいてたよ','Mom — Dad something-muttered','Reflective child','sho_child'),
    mk('翔くん、お友達が、しつこい誘い方しないか心配','Sho — friend-persistent-invite worried','Caring','yumiko_mom'),
    mk('ママ、ぼく、お家の中をうろうろしてたよ','Mom — me home-wandered','Wry close','sho_child'),
  ]},
  {id:'conv_08322',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、真夜中の閉店作業、お疲れさま、メイちゃん','Aoi — midnight closing thanks Mei','Caring','mei_romantic'),
    mk('葵、開店後にお客様がどっと押し寄せたわね、メイちゃん','Aoi — post-open cust-flooded Mei','Animated','aoi_barista'),
    mk('葵、忙しかったあげく、最後はゆっくりできたよ、メイちゃん','Aoi — busy-result-finally-relaxed Mei','Wry','mei_romantic'),
    mk('葵、お客様が大金を落としていかれて困ったよ、メイちゃん','Aoi — cust large-cash-dropped troubled Mei','Wry','aoi_barista'),
    mk('葵、お店の居間風スペース、お客様お気に入りよ、メイちゃん','Aoi — store living-room-space cust-fave Mei','Praising','mei_romantic'),
    mk('葵、お客様が「おいしい」とつぶやいてくれたわ、メイちゃん','Aoi — cust "tasty" muttered Mei','Tender','aoi_barista'),
    mk('葵、しつこい営業電話に困ってるよ、メイちゃん','Aoi — persistent-sales-call troubled Mei','Wry','mei_romantic'),
    mk('葵、新人さんがお店をうろうろしてたよ、メイちゃん','Aoi — newcomer store-wandered Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08323',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが真夜中に帰宅されたぞ','Gran — youth Dad midnight-return','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、台風で雨がどっと降ったお話されたわよね、あなた?','Yes — Grandpa typhoon rain-flooded told, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは苦労されたあげく、家を建てられたぞ','Gran — youth Dad hardship-result house-built','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、大金を扱うお仕事をされたわよね、あなた?','Grandpa — youth large-sum work did, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんの居間が家族の集いの場だったぞ','Gran — youth Dad-living-room family-gathering-place','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お祈りをよくつぶやかれていたわよね、あなた?','Grandpa — prayer-often-muttered, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、商売の誘いがしつこい時もあったぞ','Gran — youth biz-invite persistent sometimes','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫さんが、うろうろされてた時の写真、覚えてる?あなた','Grandpa — grandkid-wandered-time photo remember? dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08324',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、真夜中までゲームしてんだろ?','Riku — midnight game?','Curious teen','sakura_teen'),
    mk('お前、終業のチャイムでどっと教室出たな、桜','You — chime classroom-flooded-out Sakura','Wry','riku_teen'),
    mk('リク、お前、宿題やったあげく、忘れて来たろ?','Riku — homework-did-result forgot-bring?','Teasing','sakura_teen'),
    mk('お前、お年玉で大金もらったろ?桜','You — NY-money large-sum got? Sakura','Curious','riku_teen'),
    mk('リク、お前の家の居間、テレビでかいよな','Riku — your-home living-room TV-big','Praising','sakura_teen'),
    mk('お前、テスト中つぶやいてたな、桜','You — test-muttered Sakura','Teasing','riku_teen'),
    mk('リク、お前、しつこいギャグはやめろよ','Riku — persistent-gag stop','Direction','sakura_teen'),
    mk('お前、駅前うろうろしてたな、桜','You — station-wandered Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08325',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、真夜中はお家にいなきゃダメよ','Sho — midnight home-must','Direction','mei_romantic'),
    mk('メイ姉さん、運動会で観客がどっと来たよ','Mei-sis — sports-day crowd-flooded','Eager child','sho_child'),
    mk('翔くん、お友達と遊んだあげく、ケンカしちゃダメよ','Sho — friend-played-result-fight no','Direction','mei_romantic'),
    mk('メイ姉さん、お祖父ちゃんが、ぼくに大金くれたって、嘘よ','Mei-sis — Grandpa me large-sum gave-no-true','Wry child','sho_child'),
    mk('翔くん、メイ姉さんの居間で一緒に絵本読もうね','Sho — Mei-sis-living-room together-picture-book-read','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、ありがとうって、お祖母ちゃんにつぶやいたよ','Mei-sis — me thanks Grandma-muttered','Proud child','sho_child'),
    mk('翔くん、しつこい質問をしないでね','Sho — persistent-question don\'t','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、公園でうろうろしてたら、お父さんに見つかった','Mei-sis — me park-wandered Dad-found','Wry close','sho_child'),
  ]},
  {id:'conv_08326',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、鉄鋼業界の動向を把握しろ','Our co — steel-industry trend grasp','Crisp','hiroshi_boss'),
    mk('はい。新規請負契約を進めております','Yes — New commissioned-contract advance','Methodical','kenji_office'),
    mk('当社、車体製造ラインを見直せ','Our co — body-prod-line review','Direction','hiroshi_boss'),
    mk('はい。在庫減量の方針で進めております','Yes — Stock-reduce policy advance','Update','kenji_office'),
    mk('当社、海外オペレーションを強化しろ','Our co — overseas-op strengthen','Direction','hiroshi_boss'),
    mk('はい。社員の戸籍関連手続きをサポートしております','Yes — Staff koseki-procedure support','Update','kenji_office'),
    mk('社員家族の養子縁組のお手伝いも検討しろ','Staff-family adoption help consider','Direction','hiroshi_boss'),
    mk('はい。現状打開のため新プロジェクトを企画しております','Yes — Status-break new-project plan','Close','kenji_office'),
  ]},
  {id:'conv_08327',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('鉄鋼会社との提携を進めましょう','Steel-co partner advance','Brisk','yuki_office'),
    mk('はい。建設請負の見積もりを取り寄せました','Yes — Construction-commission estimate acquired','Cooperative','kenji_office'),
    mk('車体デザインのテストを実施しましょう','Body-design-test conduct','Direction','yuki_office'),
    mk('はい。社員の減量プログラムを企画中です','Yes — Staff-reduce program plan','Update','kenji_office'),
    mk('社内オペレーションを効率化しましょう','In-house op-efficiency','Direction','yuki_office'),
    mk('はい。新規社員の戸籍確認を済ませました','Yes — New-staff koseki-verify done','Update','kenji_office'),
    mk('養子縁組をされた社員にも配慮しましょう','Adopted staff-consider','Direction','yuki_office'),
    mk('はい。閉塞状態の打開策を提案いたします','Yes — Stagnation-break-policy propose','Close','kenji_office'),
  ]},
  {id:'conv_08328',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、鉄鋼業を研究テーマにしてみろ','Ren — steel-industry research-theme try','Mentor','hiroshi_boss'),
    mk('はい。共同研究は請負契約で進めます','Yes — Joint-research commissioned-contract advance','Earnest','ren_uni'),
    mk('蓮、実験装置の車体構造も分析しろ','Ren — exp-equip body-structure analyze','Direction','hiroshi_boss'),
    mk('はい。実験ロットの減量を検討しております','Yes — Experiment-lot reduce consider','Polite','ren_uni'),
    mk('蓮、実験オペレーションを誰でもできるようにしろ','Ren — exp-op anyone-can-do','Direction','hiroshi_boss'),
    mk('はい。協力者の戸籍関連書類をいただいております','Yes — Coop person koseki-docs received','Earnest','ren_uni'),
    mk('蓮、養子の医療研究にも興味を持て','Ren — adoption med-research interest','Direction','hiroshi_boss'),
    mk('はい。研究の壁を打開するアイデアを考えております','Yes — Research-wall-break idea think','Earnest close','ren_uni'),
  ]},
  {id:'conv_08329',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、鉄鋼関連の盗難事件を捜査しております','Police steel-related-theft inv','Calm','takeda_officer'),
    mk('はい。警察、請負調査の依頼を受けられたとのこと','Yes — Police commissioned-inv-request received','Cooperative','kenji_office'),
    mk('警察、容疑車両の車体番号を確認しました','Police suspect-vehicle body-num verified','Procedural','takeda_officer'),
    mk('はい。警察、書類の減量を進めておられますね','Yes — Police doc-reduce advance','Cooperative','kenji_office'),
    mk('警察、複数班によるオペレーションを実施しました','Police multi-team op did','Procedural','takeda_officer'),
    mk('はい。警察、戸籍偽造事件を摘発されたんですね','Yes — Police koseki-forge case busted','Cooperative','kenji_office'),
    mk('警察、養子縁組詐欺を捜査中です','Police adoption-fraud inv','Procedural','takeda_officer'),
    mk('はい。事件の打開、警察、頼もしいです','Yes — Case-break police-reliable','Close','kenji_office'),
  ]},
  {id:'conv_08330',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、鉄鋼業から事業を始められたぞ','Dad — steel-industry biz-started','Sage','hiroshi_elder'),
    mk('はい。お父さんは請負仕事を一つ一つ丁寧に進められた','Yes — Dad commissioned-work one-by-one polite','Commitment','hiroshi_boss'),
    mk('お父さん、車体設計にもこだわられたぞ','Dad — body-design particular','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員のために減量無理は強いられなかった','Yes — Dad staff reduce don\'t-force','Reflective','hiroshi_boss'),
    mk('お父さん、お店のオペレーションを自ら点検された','Dad — store-op self-inspect','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員の戸籍にも理解があった','Yes — Dad staff-koseki understanding','Reflective','hiroshi_boss'),
    mk('お父さん、養子縁組のご縁を結ばれた話、聞いたぞ','Dad — adoption-bond made heard','Wistful','hiroshi_elder'),
    mk('はい。お父さんは苦境を打開する策を多く持っておられた','Yes — Dad crisis-break-policy many had','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08331',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、われわれの祖先の遺伝子研究を論文で扱っていましたね','Ren — our-ancestor gene-research paper','Calm','asuka_teacher'),
    mk('はい、生前の意思を尊重する制度を論文で扱いました','Yes — pre-death-will-respect system paper','Earnest','ren_uni'),
    mk('蓮さん、独断的な指導者を論文で扱っていましたね','Ren — autocratic-leader paper','Reflective','asuka_teacher'),
    mk('はい、戦死者を悼む制度を論文で扱いました','Yes — war-dead mourn-system paper','Earnest','ren_uni'),
    mk('胎児の発達研究を論文で扱っていましたね','Fetus-development paper','Engaged','asuka_teacher'),
    mk('はい、AIによる音声判別技術を論文で扱いました','Yes — AI voice-distinguish-tech paper','Earnest','ren_uni'),
    mk('蓮さん、二酸化炭素削減の研究を論文で扱っていましたね','Ren — CO2-reduce research paper','Reflective','asuka_teacher'),
    mk('はい、国際法廷の裁定について論文で扱いました','Yes — intl-court ruling paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08332',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、容疑者の祖先関連を警察、確認されたんですね','Case suspect-ancestor verify','Calm','takeda_officer'),
    mk('被害者の生前の関係を、警察、調査中ですね','Victim pre-death-relation police-inv','Curious','ren_uni'),
    mk('警察、独断的な決定はしません','Police autocratic-decision don\'t','Procedural','takeda_officer'),
    mk('本件、戦死者の遺族支援、警察、関与されているそうですね','Case war-dead bereaved-support police-involve','Reflective','ren_uni'),
    mk('警察、胎児にも危険のあった事件を慎重に扱います','Police fetus-danger-case careful-handle','Procedural','takeda_officer'),
    mk('本件、警察、指紋判別を成功されたんですね','Case police fingerprint-distinguish succeeded','Reflective','ren_uni'),
    mk('警察、二酸化炭素濃度の異常を現場で確認しました','Police CO2-density anomaly scene-verified','Procedural','takeda_officer'),
    mk('本件、裁判所の裁定を待っております','Case court-ruling await','Close','takeda_officer'),
  ]},
  {id:'conv_08333',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、われわれの祖先の遺伝子研究を論文で扱っていましたね','Sakura — ancestor gene paper','Calm','asuka_teacher'),
    mk('はい、生前の意思を尊重する制度を論文で扱いました','Yes — pre-death-will paper','Earnest teen','sakura_teen'),
    mk('独断的な指導者を論文で扱っていましたね','Autocratic-leader paper','Reflective','asuka_teacher'),
    mk('はい、戦死者を悼む制度を論文で扱いました','Yes — war-dead mourn paper','Earnest','sakura_teen'),
    mk('胎児の発達研究を論文で扱っていましたね','Fetus paper','Engaged','asuka_teacher'),
    mk('はい、AIによる音声判別技術を論文で扱いました','Yes — AI voice-distinguish paper','Earnest','sakura_teen'),
    mk('二酸化炭素削減の研究を論文で扱っていましたね','CO2-reduce paper','Reflective','asuka_teacher'),
    mk('はい、国際法廷の裁定について論文で扱いました','Yes — intl-ruling paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08334',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、祖先の病歴を医療チームで参照しております','Ren — ancestor-med-hist med-team reference','Calm','saito_doctor'),
    mk('生前の医療意思を、貴院、尊重されておられますね、先生','Pre-death-med-will your-hosp respect, sensei','Curious','ren_uni'),
    mk('はい、患者さんへの独断的な判断は医療チームでも控えます','Yes — Patient-autocratic-judg med-team refrain','Patient','saito_doctor'),
    mk('戦死者のご遺族のケアを、貴院、なさってこられましたね、先生','War-dead-bereaved-care your-hosp continued, sensei','Reflective','ren_uni'),
    mk('はい、胎児の超音波検査を医療チームで丁寧に行います','Yes — Fetus-ultrasound med-team polite','Patient','saito_doctor'),
    mk('検査値の判別を、貴院、丁寧にされておられますね、先生','Test-value-distinguish your-hosp polite, sensei','Reflective','ren_uni'),
    mk('はい、二酸化炭素濃度を病室で監視しております','Yes — CO2-density ward-monitor','Patient','saito_doctor'),
    mk('医療裁定が下る前から、貴院、ケアを続けておられますね、先生','Med-ruling before your-hosp care-continue, sensei','Reflective close','ren_uni'),
  ]},
  {id:'conv_08335',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、祖先からの教えを大切にしろ','Our co — ancestor-teaching cherish','Crisp','hiroshi_boss'),
    mk('はい。創業者の生前の理念を新人にも伝えます','Yes — Founder pre-death-ideal newcomer-tell','Methodical','kenji_office'),
    mk('独断的な経営判断は避けろ','Autocratic mgmt-judg avoid','Direction','hiroshi_boss'),
    mk('はい。先代戦死者の慰霊祭にも参加いたします','Yes — Past-war-dead memorial attend','Update','kenji_office'),
    mk('当社、胎児向け商品の安全性を最優先しろ','Our co — fetus-target safety top','Direction','hiroshi_boss'),
    mk('はい。色の判別がしやすい商品設計を進めております','Yes — Color-distinguish-easy product-design advance','Update','kenji_office'),
    mk('当社、二酸化炭素削減の取り組みを進めろ','Our co — CO2-reduce initiative advance','Direction','hiroshi_boss'),
    mk('はい。裁定機関への対応も準備しております','Yes — Ruling-org-resp prep','Close','kenji_office'),
  ]},
  {id:'conv_08336',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お店で洋楽流すと雰囲気いいよね、メイちゃん','Aoi — store Western-music nice-vibe Mei','Praising','mei_romantic'),
    mk('葵、年末は紅白歌合戦の話題で盛り上がるね、メイちゃん','Aoi — year-end Kohaku-talk lively Mei','Animated','aoi_barista'),
    mk('葵、表参道の新しいカフェ、見学行きたいね、メイちゃん','Aoi — Omotesando new-cafe visit-want Mei','Eager','mei_romantic'),
    mk('葵、お客様、ビーズアクセサリーを身につけてらしたよ、メイちゃん','Aoi — cust bead-accessory worn Mei','Reflective','aoi_barista'),
    mk('葵、お店の看板に格言を載せようね、メイちゃん','Aoi — store-sign quote-display Mei','Eager','mei_romantic'),
    mk('葵、コンテナ風のお店、流行ってるそうよ、メイちゃん','Aoi — container-style store trend Mei','Reflective','aoi_barista'),
    mk('葵、お客様向けにワゴンで移動販売したいね、メイちゃん','Aoi — cust-target wagon mobile-sell-want Mei','Eager','mei_romantic'),
    mk('葵、お客様、お魚のエサを買って帰られたよ、メイちゃん','Aoi — cust fish-feed bought-home Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08337',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが洋楽レコードを集められたぞ','Gran — youth Dad Western-music-record collected','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、紅白歌合戦を毎年楽しみにされてたわよね、あなた?','Yes — Grandpa Kohaku annual look-forward, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが表参道を歩かれたぞ','Gran — youth Dad Omotesando-walked','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ばあさんにビーズの首飾りを贈ってくださったわよね、あなた?','Grandpa — gran bead-necklace gave, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは格言をよく口にされてたぞ','Gran — youth Dad-quote-often uttered','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、貨物コンテナを使う仕事をされたわよね、あなた?','Grandpa — cargo-container-work did, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、屋台のワゴンでうどんを食べたぞ','Gran — youth stall-wagon udon ate','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、鳥にエサをあげるのお好きだったわよね、あなた?','Grandpa — bird-feed give liked, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08338',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんのお店、洋楽流してるのよ','Sho — Mei-sis-store Western-music-air','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、紅白歌合戦見たいよ','Mei-sis — me Kohaku-want','Eager child','sho_child'),
    mk('翔くん、お父さんと表参道に行ったの?','Sho — Dad Omotesando went?','Curious','mei_romantic'),
    mk('メイ姉さん、ぼく、ビーズで作ったブレスレット、見せたいよ','Mei-sis — me bead-bracelet show-want','Proud child','sho_child'),
    mk('翔くん、お祖父ちゃんの格言、覚えてる?','Sho — Grandpa-quote remember?','Curious','mei_romantic'),
    mk('メイ姉さん、ぼく、コンテナでお家ごっこしたよ','Mei-sis — me container-playhouse','Eager child','sho_child'),
    mk('翔くん、お祭りのワゴン屋さん、好きでしょ?','Sho — fest-wagon-stall like?','Curious','mei_romantic'),
    mk('メイ姉さん、ぼく、お庭の鳥にエサあげたよ','Mei-sis — me garden-bird-feed gave','Eager close','sho_child'),
  ]},
  {id:'conv_08339',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、洋楽好きだろ?','Riku — Western-music like?','Curious teen','sakura_teen'),
    mk('お前、紅白歌合戦、誰が出るか気になるな、桜','You — Kohaku who-out curious Sakura','Curious','riku_teen'),
    mk('リク、お前、表参道で買い物したろ?','Riku — Omotesando shopping?','Curious','sakura_teen'),
    mk('お前、文化祭でビーズ細工作ったろ?桜','You — fest bead-craft made? Sakura','Curious','riku_teen'),
    mk('リク、お前の好きな格言、教えてくれよ','Riku — your-fave-quote tell','Curious','sakura_teen'),
    mk('お前、コンテナハウス、興味あるんだろ?桜','You — container-house interest? Sakura','Curious','riku_teen'),
    mk('リク、お前、屋台のワゴンで何食べたんだ?','Riku — stall-wagon what-ate?','Curious','sakura_teen'),
    mk('お前のペットにエサあげてんだろ?桜','You — pet-feed-give? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08340',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが洋楽好きで、よく流していらっしゃるわ','Sho — Dad Western-music like often-air','Reflective','yumiko_mom'),
    mk('ママ、ぼく、紅白歌合戦見たいな','Mom — me Kohaku-want','Eager child','sho_child'),
    mk('翔くん、お父さんが表参道のカフェに連れて行ってくださるって','Sho — Dad Omotesando-cafe take','Reflective','yumiko_mom'),
    mk('ママ、お祖母ちゃんからビーズのアクセサリー、いただいたわ','Mom — Grandma-bead-accessory received','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんの格言、家訓にしようね','Sho — Grandpa-quote family-motto','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとコンテナ船を見たよ','Mom — me Dad container-ship saw','Eager child','sho_child'),
    mk('翔くん、お祭りのワゴンで、焼きそば食べましょう','Sho — fest-wagon-yakisoba eat','Tender','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんちでメダカにエサあげたよ','Mom — me Grandpa-home medaka-feed gave','Proud close','sho_child'),
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

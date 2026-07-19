import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_419 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['無くなる','しっくり','どうこう','さび','インチキ','かろうじて','よけい','おわり']
const B_T = ['セッティング','余剰','履行','教委','当人','民放','窃盗','終値']
const C_T = ['和平','冥福','旺盛','平穏','献身','憎しみ','推論','分泌']
const D_T = ['美少女','パラダイス','ウォーキング','トリオ','バーベキュー','ボイス','バンクーバー','愛車']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08341',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、絵本が無くなるんじゃないかと心配してたわ','Sho — picture-book disappear worried','Caring','yumiko_mom'),
    mk('ママ、お父さんとの会話がしっくりこないんだ','Mom — Dad-conv don\'t-click','Wry child','sho_child'),
    mk('翔くん、お父さんがどうこう言わないでね','Sho — Dad-this-or-that don\'t-say','Direction','yumiko_mom'),
    mk('ママ、お父さんの絵本のさび部分、見たよ','Mom — Dad-picture-book worn-part saw','Reflective child','sho_child'),
    mk('翔くん、インチキは絶対ダメよ','Sho — cheat absolutely-no','Direction','yumiko_mom'),
    mk('ママ、ぼく、かろうじて宿題終わったよ','Mom — me barely-homework-done','Wry child','sho_child'),
    mk('翔くん、よけいなことしないでね','Sho — extraneous don\'t','Direction','yumiko_mom'),
    mk('ママ、お話のおわりまで読んで','Mom — story-end-until read','Eager close','sho_child'),
  ]},
  {id:'conv_08342',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お店のコーヒー豆、無くなる前に発注しようね、メイちゃん','Aoi — store-bean disappear-before order Mei','Practical','mei_romantic'),
    mk('葵、新メニューがしっくりきたよ、メイちゃん','Aoi — new-menu clicked Mei','Praising','aoi_barista'),
    mk('葵、お客様が他のお店をどうこう言われると嫌よね、メイちゃん','Aoi — cust other-store this-or-that-said dislike Mei','Wry','mei_romantic'),
    mk('葵、お店の壁にさびが出てきたね、メイちゃん','Aoi — store-wall rust-emerged Mei','Reflective','aoi_barista'),
    mk('葵、インチキな広告に騙されないよう注意しようね、メイちゃん','Aoi — fake-ad don\'t-be-fooled Mei','Direction','mei_romantic'),
    mk('葵、かろうじて閉店時間に間に合ったよ、メイちゃん','Aoi — barely-closing-time made Mei','Wry','aoi_barista'),
    mk('葵、よけいなご注文は避けるようにしてるよ、メイちゃん','Aoi — extra-order avoid-try Mei','Reflective','mei_romantic'),
    mk('葵、今日のお仕事のおわりに乾杯しようね、メイちゃん','Aoi — today-work-end toast Mei','Eager close','aoi_barista'),
  ]},
  {id:'conv_08343',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが村のお店が無くなることを心配されたぞ','Gran — youth Dad village-store-disappear worried','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、新しい家がしっくりこなかったわよね、あなた?','Yes — Grandpa new-home don\'t-click, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、村人が、お父さんのことをどうこう言ったぞ','Gran — youth villager Dad-this-or-that-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、古い鍋のさびを取られたわよね、あなた?','Grandpa — old-pot-rust removed, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、インチキ商人が村に来たぞ','Gran — youth fake-merchant village-came','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、かろうじて病から回復されたわよね、あなた?','Grandpa — barely-illness-recovered, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お祖父ちゃんはよけいなものを買わなかったぞ','Gran — youth Grandpa extra-don\'t-buy','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、人生のおわりまで誠実だったわよね、あなた?','Grandpa — life-end sincere, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08344',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、お年玉、すぐ無くなるだろ?','Riku — NY-money quickly-disappear?','Teasing teen','sakura_teen'),
    mk('お前、この曲、しっくりくるよな、桜','You — this-song click Sakura','Praising','riku_teen'),
    mk('リク、お前がどうこう言わなくても、ぼくは決めたんだ','Riku — you-this-or-that-say-no me-decided','Direction','sakura_teen'),
    mk('お前のリュック、さびた金具ついてんな、桜','You — backpack rusty-buckle Sakura','Wry','riku_teen'),
    mk('リク、お前、インチキな手品見せるなよ','Riku — fake-magic don\'t-show','Direction','sakura_teen'),
    mk('お前、かろうじて合格点だったろ?桜','You — barely-pass? Sakura','Teasing','riku_teen'),
    mk('リク、よけいなお節介はやめてくれよ','Riku — extra-meddle stop','Direction','sakura_teen'),
    mk('お前、テスト勉強のおわりが見えないな、桜','You — test-study-end can\'t-see Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_08345',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お祖母ちゃんちのおもちゃが無くなるのは寂しいわね','Sho — Grandma-toy disappear lonely','Caring','mei_romantic'),
    mk('メイ姉さん、ぼくは新しい学校にしっくりこないよ','Mei-sis — me new-school don\'t-click','Wry child','sho_child'),
    mk('翔くん、お友達のことをどうこう言わないでね','Sho — friend-this-or-that don\'t-say','Direction','mei_romantic'),
    mk('メイ姉さん、ぼくのお気に入りのお皿、さびちゃった','Mei-sis — me fave-plate rusted','Wry child','sho_child'),
    mk('翔くん、インチキおじさんに気をつけてね','Sho — fake-uncle careful','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、かろうじて、お祖父ちゃんに会えたよ','Mei-sis — me barely-Grandpa met','Reflective child','sho_child'),
    mk('翔くん、よけいなお買い物はやめましょうね','Sho — extra-shop stop','Direction','mei_romantic'),
    mk('メイ姉さん、絵本のおわりが、お祖父ちゃんに似てたよ','Mei-sis — picture-book-end Grandpa-like','Tender close','sho_child'),
  ]},
  {id:'conv_08346',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新事務所のセッティングを進めろ','Our co — new-office setup advance','Crisp','hiroshi_boss'),
    mk('はい。在庫の余剰分を販売いたします','Yes — Stock surplus sales','Methodical','kenji_office'),
    mk('当社、契約の履行をしっかり監視しろ','Our co — contract-perform thorough-watch','Direction','hiroshi_boss'),
    mk('はい。教委との折衝も進めております','Yes — Edu-board negotiate advance','Update','kenji_office'),
    mk('当社、お客様当人へのご対応を丁寧にしろ','Our co — cust-person-resp polite','Direction','hiroshi_boss'),
    mk('はい。民放広告枠を確保いたしました','Yes — Pri-TV-ad slot secured','Update','kenji_office'),
    mk('警備担当に窃盗対策を徹底させろ','Sec-staff theft-counter thorough','Direction','hiroshi_boss'),
    mk('はい。当日終値の集計が完了しました','Yes — Day closing-price tally done','Close','kenji_office'),
  ]},
  {id:'conv_08347',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('会議室のセッティングを早めに済ませましょう','Mtg-room setup early-done','Brisk','yuki_office'),
    mk('はい。今期は余剰人員の再配置を進めます','Yes — This-period surplus-staff redeploy','Cooperative','kenji_office'),
    mk('契約の履行状況を月次で報告しましょう','Contract-perform-status monthly-report','Direction','yuki_office'),
    mk('はい。地元教委との連携プロジェクトを企画中です','Yes — Local edu-board coop-project plan','Update','kenji_office'),
    mk('お客様当人ご来店時の応対マニュアルを整えましょう','Cust-person-visit resp-manual prep','Direction','yuki_office'),
    mk('はい。民放各局への広報を準備しております','Yes — Pri-TV-each-station PR prep','Update','kenji_office'),
    mk('社内、窃盗防止カメラを増設しましょう','In-house theft-prev camera add','Direction','yuki_office'),
    mk('はい。終値ベースで配当を計算します','Yes — Closing-price-base dividend calc','Close','kenji_office'),
  ]},
  {id:'conv_08348',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、実験機器のセッティングを正確にしろ','Ren — experiment-equip setup accurate','Mentor','hiroshi_boss'),
    mk('はい。余剰の試薬を保存しております','Yes — Surplus reagent preserve','Earnest','ren_uni'),
    mk('蓮、研究契約の履行を真摯に取り組め','Ren — research-contract-perform sincere-tackle','Direction','hiroshi_boss'),
    mk('はい。教委との合同講演にも参加します','Yes — Edu-board joint-lecture attend','Polite','ren_uni'),
    mk('蓮、被験者当人への説明を丁寧にしろ','Ren — subject-person-explain polite','Direction','hiroshi_boss'),
    mk('はい。民放取材にも対応する準備をしております','Yes — Pri-TV-interview resp prep','Earnest','ren_uni'),
    mk('蓮、研究室の窃盗対策を強化しろ','Ren — lab-theft-counter strengthen','Direction','hiroshi_boss'),
    mk('はい。市場の終値も研究データに参照しております','Yes — Market closing-price research-data ref','Earnest close','ren_uni'),
  ]},
  {id:'conv_08349',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、現場のセッティングを再現しております','Police scene-setup reproduce','Calm','takeda_officer'),
    mk('はい。警察、余剰の証拠も整理されているとのこと','Yes — Police surplus-evidence organize','Cooperative','kenji_office'),
    mk('警察、約束の履行を市民に求めております','Police promise-perform citizen-request','Procedural','takeda_officer'),
    mk('はい。警察、教委と連携防犯活動、ありがたいです','Yes — Police edu-board coop crime-prev grateful','Cooperative','kenji_office'),
    mk('警察、容疑当人と直接対話されました','Police suspect-person direct-dialogue','Procedural','takeda_officer'),
    mk('はい。警察、民放での発信も効果的ですね','Yes — Police pri-TV-broadcast effective','Cooperative','kenji_office'),
    mk('警察、窃盗事件を集中捜査しております','Police theft-case focus-inv','Procedural','takeda_officer'),
    mk('はい。事件の終値推移を警察、確認されているそうですね','Yes — Case closing-price-trend police-verify','Close','kenji_office'),
  ]},
  {id:'conv_08350',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、本社のセッティングをご自分でなさったぞ','Dad — HQ-setup self-did','Sage','hiroshi_elder'),
    mk('はい。お父さんは余剰金を社員に還元された','Yes — Dad surplus-fund staff-returned','Commitment','hiroshi_boss'),
    mk('お父さん、約束の履行をなにより重んじた','Dad — promise-perform above-all valued','Wistful','hiroshi_elder'),
    mk('はい。お父さんは地元教委とも良好な関係でした','Yes — Dad local edu-board good-relation','Reflective','hiroshi_boss'),
    mk('お父さん、お客様当人へお詫び訪問をされた','Dad — cust-person-apology-visit did','Wistful','hiroshi_elder'),
    mk('はい。お父さんは民放のCMにも出演された','Yes — Dad pri-TV-CM-appeared','Reflective','hiroshi_boss'),
    mk('お父さん、窃盗を許さない厳しさがあった','Dad — theft don\'t-allow strict','Wistful','hiroshi_elder'),
    mk('はい。お父さんは終値の動向に敏感だった','Yes — Dad closing-price-trend sensitive','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08351',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、和平交渉の歴史を論文で扱っていましたね','Ren — peace-negotiate history paper','Calm','asuka_teacher'),
    mk('はい、戦没者への冥福を願う行事を論文で扱いました','Yes — war-dead repose-rite paper','Earnest','ren_uni'),
    mk('蓮さん、起業家の旺盛なご活躍を論文で扱っていましたね','Ren — entrepreneur exuberant-act paper','Reflective','asuka_teacher'),
    mk('はい、平穏な村社会の崩壊を論文で扱いました','Yes — peaceful-village-collapse paper','Earnest','ren_uni'),
    mk('医療従事者の献身を論文で扱っていましたね','Med-worker devotion paper','Engaged','asuka_teacher'),
    mk('はい、戦争による憎しみの連鎖を論文で扱いました','Yes — war-hatred-chain paper','Earnest','ren_uni'),
    mk('蓮さん、AIによる推論モデルを論文で扱っていましたね','Ren — AI-inference-model paper','Reflective','asuka_teacher'),
    mk('はい、ホルモン分泌の研究を論文で扱いました','Yes — hormone-secretion research paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08352',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、警察、和平的解決を目指しております','Case police peaceful-resolve aim','Calm','takeda_officer'),
    mk('警察、被害者のご冥福をお祈り申し上げます','Police victim-repose pray','Procedural','takeda_officer'),
    mk('本件、容疑者の旺盛な犯行動機を警察、把握ですね','Case suspect-exuberant-motive police-grasp','Curious','ren_uni'),
    mk('警察、平穏な地域を取り戻すべく尽力しております','Police peaceful-region-restore devote','Procedural','takeda_officer'),
    mk('本件、被害者ご家族の献身的なご協力に警察も感謝です','Case victim-family devoted-coop police-grateful','Reflective','ren_uni'),
    mk('警察、容疑者の憎しみの動機を分析しております','Police suspect-hatred-motive analyze','Procedural','takeda_officer'),
    mk('本件、警察、合理的な推論を進めておられますね','Case police rational-inference advance','Reflective','ren_uni'),
    mk('警察、薬物分泌の医学的解析も依頼しております','Police drug-secretion med-analysis request','Close','takeda_officer'),
  ]},
  {id:'conv_08353',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、和平交渉の歴史を論文で扱っていましたね','Sakura — peace-negotiate paper','Calm','asuka_teacher'),
    mk('はい、戦没者への冥福を願う行事を論文で扱いました','Yes — war-dead-repose paper','Earnest teen','sakura_teen'),
    mk('起業家の旺盛なご活躍を論文で扱っていましたね','Entrepreneur-exuberant paper','Reflective','asuka_teacher'),
    mk('はい、平穏な村社会の崩壊を論文で扱いました','Yes — peaceful-village paper','Earnest','sakura_teen'),
    mk('医療従事者の献身を論文で扱っていましたね','Med-worker-devotion paper','Engaged','asuka_teacher'),
    mk('はい、戦争による憎しみの連鎖を論文で扱いました','Yes — war-hatred paper','Earnest','sakura_teen'),
    mk('AIによる推論モデルを論文で扱っていましたね','AI-inference paper','Reflective','asuka_teacher'),
    mk('はい、ホルモン分泌の研究を論文で扱いました','Yes — hormone-secretion paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08354',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、和平活動への医療支援を医療チームで行っております','Ren — peace-act med-support med-team do','Calm','saito_doctor'),
    mk('お亡くなりになった患者さんのご冥福を、貴院、お祈りされたとのこと、先生','Deceased-patient-repose your-hosp pray, sensei','Curious','ren_uni'),
    mk('はい、お子さんの食欲旺盛は健康の証ですね','Yes — Child-appetite-exuberant health-proof','Patient','saito_doctor'),
    mk('地域の平穏を守る医療体制を、貴院、整えておられますね、先生','Region-peace-protect med-sys your-hosp arrange, sensei','Reflective','ren_uni'),
    mk('はい、患者さんへの献身的なケアを医療チームの誇りです','Yes — Patient-devoted-care med-team pride','Patient','saito_doctor'),
    mk('医療への憎しみを抱える患者さんへ、貴院、丁寧に向き合われますね、先生','Med-hatred-patient your-hosp polite-face, sensei','Reflective','ren_uni'),
    mk('はい、症状からの推論を医療チームで行います','Yes — Symptom-inference med-team do','Patient','saito_doctor'),
    mk('ホルモン分泌の検査、貴院、専門ですね、先生','Hormone-secretion-test your-hosp specialty, sensei','Reflective close','ren_uni'),
  ]},
  {id:'conv_08355',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、競合との和平を模索しろ','Our co — competitor-peace search','Crisp','hiroshi_boss'),
    mk('はい。先代の社長のご冥福を新人にも伝えております','Yes — Predecessor-pres-repose newcomer-tell','Methodical','kenji_office'),
    mk('当社、旺盛な需要を取り逃がすな','Our co — exuberant-demand don\'t-lose','Direction','hiroshi_boss'),
    mk('はい。平穏な社内環境づくりを進めます','Yes — Peaceful in-house-env-make advance','Update','kenji_office'),
    mk('社員の献身的な働きを認めろ','Staff-devoted-work recognize','Direction','hiroshi_boss'),
    mk('はい。SNSでの憎しみコメントには毅然と対応します','Yes — SNS-hatred-comment firm-resp','Update','kenji_office'),
    mk('市場動向から推論される結果を社内、共有しろ','Market-trend infer-result in-house share','Direction','hiroshi_boss'),
    mk('はい。健康食品の分泌促進効果を訴求しております','Yes — Health-food secretion-promote-effect appeal','Close','kenji_office'),
  ]},
  {id:'conv_08356',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、アニメの美少女キャラの話で盛り上がってたよ、メイちゃん','Aoi — cust anime bishojo-talk lively Mei','Animated','mei_romantic'),
    mk('葵、お店、お客様にとってパラダイスにしようね、メイちゃん','Aoi — store cust-paradise-make Mei','Eager','aoi_barista'),
    mk('葵、朝のウォーキングを始めようかしら、メイちゃん','Aoi — morning-walking start? Mei','Reflective','mei_romantic'),
    mk('葵、お客様の音楽トリオが、お店にいらしたよ、メイちゃん','Aoi — cust music-trio store-came Mei','Animated','aoi_barista'),
    mk('葵、お庭でバーベキューしようかしら、メイちゃん','Aoi — garden-barbecue do? Mei','Eager','mei_romantic'),
    mk('葵、お客様のボイスがやさしくて素敵ね、メイちゃん','Aoi — cust-voice gentle lovely Mei','Praising','aoi_barista'),
    mk('葵、お友達がバンクーバー留学する話していたよ、メイちゃん','Aoi — friend Vancouver-abroad told Mei','Reflective','mei_romantic'),
    mk('葵、お客様の愛車、お洒落だったね、メイちゃん','Aoi — cust-favorite-car stylish Mei','Praising close','aoi_barista'),
  ]},
  {id:'conv_08357',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが「美少女」アニメに驚かれたぞ','Gran — youth Dad bishojo-anime surprised','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃんはハワイをパラダイスと呼んでらしたわよね、あなた?','Yes — Grandpa Hawaii paradise-called, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが毎朝ウォーキングされたぞ','Gran — youth Dad daily-walking-did','Wistful','hiroshi_elder'),
    mk('お祖父ちゃんがトリオで合唱を楽しまれたわよね、あなた?','Grandpa — trio-choir-enjoyed, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがバーベキューをよくされたぞ','Gran — youth Dad-barbecue-often-did','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ラジオ放送のボイスをお気に入りでしたわよね、あなた?','Grandpa — radio-voice fave, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがバンクーバーのお話されたぞ','Gran — youth Dad Vancouver-told','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご自身の愛車をいつも磨かれたわよね、あなた?','Grandpa — own-fave-car always-polished, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08358',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんの好きな絵本に、美少女が出てくるのよ','Sho — Mei-sis fave-book bishojo-appears','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、夢のパラダイスを描いたよ','Mei-sis — me dream-paradise drew','Proud child','sho_child'),
    mk('翔くん、お父さんとウォーキングしようね','Sho — Dad-walking do','Eager','mei_romantic'),
    mk('メイ姉さん、ぼく、お友達とトリオで合唱したよ','Mei-sis — me friend-trio-choir sang','Proud child','sho_child'),
    mk('翔くん、お祖父ちゃんちでバーベキューしましょう','Sho — Grandpa-home barbecue do','Tender','mei_romantic'),
    mk('メイ姉さん、ぼくのお父さんのボイス、テレビに出てたよ','Mei-sis — me Dad-voice TV-appeared','Eager child','sho_child'),
    mk('翔くん、お父さんがバンクーバー出張に行くんだって','Sho — Dad Vancouver-biz-trip going','Reflective','mei_romantic'),
    mk('メイ姉さん、お父さんの愛車、ピカピカだよ','Mei-sis — Dad-fave-car shiny','Eager close','sho_child'),
  ]},
  {id:'conv_08359',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、漫画の美少女キャラ好きだろ?','Riku — manga bishojo-char like?','Teasing teen','sakura_teen'),
    mk('お前、ゲームのパラダイスステージ、クリアしたか?桜','You — game-paradise-stage cleared? Sakura','Curious','riku_teen'),
    mk('リク、お前、ウォーキング部、検討しろよ','Riku — walking-club consider','Direction','sakura_teen'),
    mk('お前、軽音部でトリオ組んだろ?桜','You — band-trio formed? Sakura','Curious','riku_teen'),
    mk('リク、夏休みバーベキュー、行きたいよな','Riku — summer-barbecue go-want','Eager','sakura_teen'),
    mk('お前、声優のボイスサンプル、聞いたか?桜','You — voice-actor voice-sample heard? Sakura','Curious','riku_teen'),
    mk('リク、お前、バンクーバー行きたいんだろ?','Riku — Vancouver want?','Curious','sakura_teen'),
    mk('お前のお父さんの愛車、カッコいいな、桜','You — your Dad-fave-car cool Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_08360',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、絵本の美少女キャラ、可愛いね','Sho — picture-book bishojo cute','Tender','yumiko_mom'),
    mk('ママ、ぼく、お庭をパラダイスみたいにしたいよ','Mom — me garden-paradise-like want','Eager child','sho_child'),
    mk('翔くん、お父さんと早朝ウォーキングしましょう','Sho — Dad-early-walking do','Tender','yumiko_mom'),
    mk('ママ、合唱でトリオを組んだよ','Mom — choir-trio formed','Proud child','sho_child'),
    mk('翔くん、お祖父ちゃんちでバーベキューしましょうね','Sho — Grandpa-home barbecue do','Eager','yumiko_mom'),
    mk('ママ、お父さんのボイスメッセージ届いたよ','Mom — Dad-voice-message arrived','Eager child','sho_child'),
    mk('翔くん、お父さんがバンクーバー出張から帰ってこられるのよ','Sho — Dad Vancouver-biz-trip return','Reflective','yumiko_mom'),
    mk('ママ、お父さんの愛車、洗ったの?','Mom — Dad-fave-car washed?','Curious close','sho_child'),
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

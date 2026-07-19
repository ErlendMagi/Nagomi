import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_318 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['負わ','乗ら','みせる','欠い','破れ','つっ','貼ら','吐く']
const B_T = ['代物','承っ','施さ','組み立てる','忘れ物','目指せ','習う','参観']
const C_T = ['問いかけ','たどっ','潰れ','壊さ','敷い','歪ん','聞き取れ','消さ']
const D_T = ['スタンプ','コロッケ','たこ焼き','シロ','タケ','カブ','みそ','ルータ']

const data = [
  // A
  {id:'conv_06321',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、転んで膝、傷を負わされた、と感じた。',en:"Mom — fell, felt knee got hurt.",style:'Subdued child.'},
    {speaker:'yumiko_mom',jp:'自転車に乗らないでね、しばらく。',en:"Don't ride bike for a while.",style:'Tender.'},
    {speaker:'sho_child',jp:'お友達、新しい靴をみせる、と言ってた。',en:"Friend — wanted to show new shoes.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'お弁当、おかず、欠いた状態で持って行ったの?',en:"Bento — without sides, brought?",style:'Curious.'},
    {speaker:'sho_child',jp:'うん。靴、底が破れてしまった。',en:"Yes. Shoes — sole broke.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'壁につっかい棒、しないでね。',en:"Don't lean a stick against the wall.",style:'Direction.'},
    {speaker:'sho_child',jp:'シール、まだ貼らないでね、表紙に。',en:"Don't stick a sticker on the cover yet.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'体調悪い時、無理に食事吐く前に、相談してね。',en:"When sick, before vomit-meals, consult.",style:'Warm close.'},
  ]},
  {id:'conv_06322',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'プロジェクト、責任を負わない方が、楽。',en:"Projects — not carrying responsibility, easier.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'うん。バスに乗らないで、歩いて帰った。',en:"Yeah. Didn't ride bus, walked home.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'カフェ、新メニュー、お客様にみせる準備、できた?',en:"Cafe — new menu, ready to show?",style:'Curious.'},
    {speaker:'aoi_barista',jp:'うん。スパイス、ちょっと欠いた状態だけどね。',en:"Yeah. Spices slightly short though.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'雨で、ジーンズ、ちょっと破れた。',en:"Rain — jeans slightly torn.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'ドアにつっかい棒、地震対策ね。',en:"Doorstop stick — quake-prep.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'メニュー、ポスター、まだ貼らないで、配置検討中。',en:"Menu poster — don't post yet, layout review.",style:'Direction.'},
    {speaker:'aoi_barista',jp:'感情、吐く場、必要ね、たまには。',en:"Emotions — venting place needed sometimes.",style:'Warm close.'},
  ]},
  {id:'conv_06323',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk',lines:[
    {speaker:'sakura_teen',jp:'部活、負担を負わせちゃってる、後輩に。',en:"Club — burdening juniors.",style:'Subdued teen.'},
    {speaker:'riku_teen',jp:'うん。電車、乗らないで、自転車で。',en:"Yeah. Skip train, by bike.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'文化祭、作品、みせる時、緊張する。',en:"Festival — showing works, nervous.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'部費、少し欠いた状況、相談しよう。',en:"Club budget — slightly short, consult.",style:'Practical.'},
    {speaker:'sakura_teen',jp:'制服、ボタンが破れたの、繕わなきゃ。',en:"Uniform — button broken, must mend.",style:'Wry.'},
    {speaker:'riku_teen',jp:'机につっかい棒、入れて、安定させた。',en:"Desk — stick inserted, stabilized.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'ステッカー、まだ貼らない、貼り直したいから。',en:"Sticker — not yet, want re-stick.",style:'Soft.'},
    {speaker:'riku_teen',jp:'疲れた時、本音を吐く時間、大事だよ。',en:"Tired — vent-time matters.",style:'Warm close.'},
  ]},
  {id:'conv_06324',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、家計を負わされた、男の役割だった。',en:"In youth — finance-bearing was a man's role.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。私はバスに乗らない時代、自転車だった。',en:"Yes. Skip-bus era — bicycle for me.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'お前の優しさ、孫にみせる時、温かいな。',en:"Your kindness shown to grandkid — warm.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'昔の家具、欠いた部分も、味があったわよ。',en:"Old furniture — chipped parts had charm.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'庭の網戸、破れたから、張り替えよう。',en:"Garden screen — torn; re-stretch.",style:'Direction.'},
    {speaker:'sachiko_grandma',jp:'戸につっかい棒、念のため、入れて寝るのよ。',en:"Door-stick — just in case, before bed.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'写真、まだアルバムに貼らない方が、見返しやすいな。',en:"Photos — not yet glued; easier to review.",style:'Calm.'},
    {speaker:'sachiko_grandma',jp:'お孫さん、お腹空いて、吐く時もあるって、心配ね。',en:"Grandkid — hungry, sometimes vomits, worry.",style:'Warm close.'},
  ]},
  {id:'conv_06325',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai and a teen chat',lines:[
    {speaker:'ren_uni',jp:'桜、研究、責任を負わずに動く時期、終わったぞ。',en:"Sakura — no-responsibility-moving period ends.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'はい。電車に乗らないで、自転車通学、続けてます。',en:"Yes. Skip-train, biking, continuing.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'発表前、原稿、教授にみせるのが、大事だ。',en:"Pre-pres — show prof, vital.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'はい。データ、欠いた箇所、補強しています。',en:"Yes. Data — short-spots reinforced.",style:'Polite.'},
    {speaker:'ren_uni',jp:'メモ用紙、破れた箇所、テープで修理。',en:"Memo — torn spot, tape-repair.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'本棚に、つっかい棒、置いてあります。',en:"Bookshelf — stick installed.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'論文、要旨を、まだ貼らないで、修正後に。',en:"Paper — abstract not posted yet; post-revision.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'体調管理、急に吐く症状、避けたいです。',en:"Health — sudden vomiting symptoms, avoid.",style:'Polite close.'},
  ]},

  // B
  {id:'conv_06326',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'新製品、なかなかの代物だな。',en:"New product — quite the item.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。発注、承っております。',en:"Yes. Order received.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'手厚いケアを施した顧客、リピート率、高い。',en:"Care-given customers — repeat rate high.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。プロジェクトを組み立てる過程、丁寧に進めます。',en:"Yes. Project-assembly process — careful.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'契約書、忘れ物のないように。',en:"Contracts — no forgotten items.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。上場、目指せる業績、出ています。',en:"Yes. Listing — aimable results emerging.",style:'Bright.'},
    {speaker:'hiroshi_boss',jp:'若手、現場で習う姿勢、評価する。',en:"Youth — field-learn stance, praise.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。役員、現場参観、来週、設定します。',en:"Yes. Execs — site-observation, next week.",style:'Close.'},
  ]},
  {id:'conv_06327',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss a launch',lines:[
    {speaker:'yuki_office',jp:'新商品、ちょっと普通じゃない代物だね。',en:"New product — not ordinary item.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。先週、注文、多数承っています。',en:"Yes. Last week — many orders received.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'特別な処理を施した部品、品質、向上した。',en:"Specially-treated parts — quality up.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。部品を組み立てる作業、効率化中です。',en:"Yes. Part-assembly work — efficiency-up.",style:'Update.'},
    {speaker:'yuki_office',jp:'発送時、忘れ物がないか、確認しよう。',en:"At shipping — verify no forgotten items.",style:'Direction.'},
    {speaker:'kenji_office',jp:'目指せ業界トップ、社員に共有しました。',en:"Aim industry-top — shared with staff.",style:'Bright.'},
    {speaker:'yuki_office',jp:'新人、職人技を習う制度、強化しよう。',en:"New-hires — craft-learning system, strengthen.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。海外バイヤー、参観の予約、入りました。',en:"Yes. Overseas buyers — observation booked.",style:'Close.'},
  ]},
  {id:'conv_06328',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、業界の代物、見極める目、養え。',en:"Ren — discerning industry items, train eye.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。注文、承る対応、丁寧に学びたいです。',en:"Yes. Order-receiving — careful learn.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'特殊な工程を施した製品、付加価値、高い。',en:"Special-process products — high added value.",style:'Direction.'},
    {speaker:'ren_uni',jp:'プロジェクトを組み立てる手法、勉強します。',en:"Project-assembly methods — learn.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'打合せ、忘れ物のないように。',en:"Meetings — no forgots.",style:'Direction.'},
    {speaker:'ren_uni',jp:'目指せる先輩、見つけました。',en:"Aim-worthy senpai — found.",style:'Bright.'},
    {speaker:'hiroshi_boss',jp:'業界の慣習、習う姿勢、忘れるな。',en:"Industry custom-learning — don't forget.",style:'Direction.'},
    {speaker:'ren_uni',jp:'今度、生産ライン、参観、楽しみです。',en:"Production-line observation — exciting.",style:'Earnest close.'},
  ]},
  {id:'conv_06329',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on operations',lines:[
    {speaker:'takeda_officer',jp:'御社の代物、警察視点でも興味深いです。',en:"Your items — police-view also intriguing.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。協定の依頼、承っています。',en:"Yes. Agreement-request received.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'追跡装置を施した試作品、警察と共有可能ですか。',en:"Tracker-equipped prototypes — sharable?",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。試作品を組み立てる工程、見学頂けます。',en:"Yes. Prototype-assembly process — observable.",style:'Update.'},
    {speaker:'takeda_officer',jp:'機密書類、忘れ物のない管理、お願いします。',en:"Confidential docs — no-forgotten mgmt.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。業界の安全、目指せる連携、進めます。',en:"Yes. Industry-safety aim — partnership advances.",style:'Commitment.'},
    {speaker:'takeda_officer',jp:'警察学校で、習う場、提供できます。',en:"Police academy — learn-place offerable.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。施設参観、社員に呼びかけます。',en:"Yes. Facility observation — call to staff.",style:'Close.'},
  ]},
  {id:'conv_06330',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'時代の代物、見抜く目、若い頃から養った。',en:"Era's items — discerning eye since youth.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。注文、丁寧に承っています。',en:"Yes. Orders — carefully received.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'手厚いケアを施した取引先、関係、長く続く。',en:"Care-given partners — long relations.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'プロジェクトを組み立てる若手、伸びてきました。',en:"Project-assembling youth — growing.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'重要案件、忘れ物、絶対に避けろ。',en:"Critical cases — strictly avoid forgots.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。目指せる目標、明確にしています。',en:"Yes. Aim-worthy goals — clarified.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'人から習う姿勢、リーダーにも必要だ。',en:"Learn-from-people stance — also for leaders.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。後輩の参観も、毎月企画します。',en:"Yes. Junior observation — monthly planned.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06331',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses a paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、自らへの問いかけ、深く書きましたね。',en:"Paper — self-questioning, deeply written.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。先行研究をたどった上で、新規性、出しました。',en:"Yes. Tracking prior work — emerged novelty.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'実験で潰れたサンプル、考察も、丁寧でしたね。',en:"Experiment-crushed samples — careful discussion.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'環境を壊さずに、研究を進める姿勢、章にしました。',en:"Without env-destruction — research stance, chapter.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'敷いた前提、適切でしたね。',en:"Laid premises — apt.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'データが歪んでない、確認、徹底しました。',en:"Data — not-warped, verified strict.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'専門用語、聞き取れない学生にも、配慮ありますね。',en:"Jargon — un-hearable students, considered.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'引用を消さず、明示する姿勢、貫きました。',en:"Without erasing citations — explicit stance, kept.",style:'Earnest close.'},
  ]},
  {id:'conv_06332',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs about an investigation',lines:[
    {speaker:'takeda_officer',jp:'本件、住民への問いかけ、続けています。',en:"Case — resident-questioning continues.",style:'Calm.'},
    {speaker:'ren_uni',jp:'容疑者をたどった捜査、地道ですね。',en:"Suspect-tracking investigation — plodding.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。証拠が潰れた事案、再構築、慎重に。',en:"Yes. Crushed-evidence cases — careful rebuild.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'現場の遺留品、壊さずに保全しますね。',en:"Site evidence — preserved without destruction.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。立ち入り禁止のテープ、敷いた直後に、報道入りました。',en:"Yes. After laying off-limits tape — press came.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'証言、歪んだ内容、見抜く目、警察の力量ですね。',en:"Testimony — warped content, discernment, police skill.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。雑音で聞き取れない部分、機材で補強します。',en:"Yes. Noise-un-hearable parts — gear-supplement.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'記録、消さずに保存、ですね。',en:"Records — preserved without erasure.",style:'Reflective close.'},
  ]},
  {id:'conv_06333',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、患者への問いかけ、診断の核です。',en:"Ren — patient-questioning, dx core.",style:'Calm.'},
    {speaker:'ren_uni',jp:'症状をたどった経過、診療録に残ります。',en:"Symptom-tracking — in chart records.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。腫瘍が潰れた症例、研究進んでいます。',en:"Yes. Crushed-tumor cases — research advancing.",style:'Patient.'},
    {speaker:'ren_uni',jp:'臓器を壊さずに摘出する技術、進化していますね。',en:"Organ-non-destructive extraction — evolving.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。手術台に敷いた清潔布、必ず確認します。',en:"Yes. OR sterile drape — always check.",style:'Informative.'},
    {speaker:'ren_uni',jp:'画像、歪んだ場合、再撮影しますか。',en:"Imaging — if warped, reshoot?",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。心音、聞き取れない場合、機材を変えます。',en:"Yes. Heart sounds — if un-hearable, change gear.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'カルテ、誤情報、消さずに修正履歴を残しますね。',en:"Charts — errors not erased; revision history kept.",style:'Curious close.'},
  ]},
  {id:'conv_06334',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews a corporate issue',lines:[
    {speaker:'hiroshi_boss',jp:'社員への問いかけ、月一で実施しろ。',en:"Staff-questioning — monthly.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。創業の道をたどった社史、丁寧に編集します。',en:"Yes. Founding-path-tracking history — careful edit.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'倉庫の屋根、潰れた箇所、修理を急げ。',en:"Warehouse roof — crushed spots, rush repair.",style:'Direction.'},
    {speaker:'kenji_office',jp:'設備を壊さずに、改修、進めます。',en:"Without breaking gear — refurb progress.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'カーペット、新しく敷いたフロア、来客に好評だ。',en:"Newly-laid carpet floor — guest-praised.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。報告書、歪んだ数値、修正しました。',en:"Yes. Reports — warped figures, corrected.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'役員会、聞き取れない部分、議事録、補強しろ。',en:"Board — un-hearable parts, supplement minutes.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。痕跡、消さずに、改善履歴、残します。',en:"Yes. Traces unedited — improvement history kept.",style:'Close.'},
  ]},
  {id:'conv_06335',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、地域への問いかけ、丁寧にしましたね。',en:"Sakura — community-questioning, careful.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。資料をたどった過程、明示しました。',en:"Yes. Source-tracking process — clarified.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'伝統が潰れた地域、章として扱いましたね。',en:"Tradition-crushed regions — chapter.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'文化を壊さずに、保護する活動、論じました。',en:"Without breaking culture — protection discussed.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'地元の祭りで、ござを敷いた場面、写真、いいですね。',en:"Local fest — laying-mat scene, photo good.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。歴史記述、歪んでない確認、何度もしました。',en:"Yes. History — non-warped checks, repeated.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'方言、聞き取れない読者にも、注釈、入れましょう。',en:"Dialect — for un-hearable readers, notes added.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'過去のデータ、消さずに、参考資料に。',en:"Past data — unerased, as reference.",style:'Curious close.'},
  ]},

  // D
  {id:'conv_06336',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about food',lines:[
    {speaker:'mei_romantic',jp:'店で、スタンプカード、集めてるの。',en:"Shop — collecting stamp cards.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。コロッケ、揚げ立てが美味しいよね。',en:"Yeah. Croquette — freshly fried, tasty.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'夜店で、たこ焼き、必ず買う。',en:"Festival — always buy takoyaki.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'お祖母ちゃんの愛犬、シロ、覚えてる?',en:"Grandma's dog Shiro — remember?",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'庭のタケ、春に芽が出る、楽しみ。',en:"Garden bamboo — spring buds, exciting.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'カブの煮物、お母さん、得意なの。',en:"Turnip stew — Mom's good at.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'みそ汁、毎朝、欠かさない。',en:"Miso soup — every morning, no skip.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'家のルータ、新しくしたいけど、まだ。',en:"Home router — wanna replace, not yet.",style:'Reflective close.'},
  ]},
  {id:'conv_06337',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、スタンプ、いっぱい集めたよ!',en:"Mom — lots of stamps collected!",style:'Excited child.'},
    {speaker:'yumiko_mom',jp:'うん。夕飯、コロッケ、揚げるね。',en:"Yes. Dinner — frying croquettes.",style:'Tender.'},
    {speaker:'sho_child',jp:'お祭りで、たこ焼き、食べたい!',en:"Fest — wanna eat takoyaki!",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お友達の犬、シロちゃん、可愛いよね。',en:"Friend's dog Shiro-chan — cute.",style:'Warm.'},
    {speaker:'sho_child',jp:'公園のタケ、高くて、面白い。',en:"Park bamboo — tall, fun.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'今夜、カブのスープ、作るね。',en:"Tonight — turnip soup.",style:'Soft.'},
    {speaker:'sho_child',jp:'みそ味のお弁当、好物!',en:"Miso-flavored bento — fave!",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'お父さん、ルータ、修理してくれた。',en:"Dad — router fixed.",style:'Reflective close.'},
  ]},
  {id:'conv_06338',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens walk',lines:[
    {speaker:'sakura_teen',jp:'カフェのスタンプ、ご褒美、楽しみ。',en:"Cafe stamps — reward, fun.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。コンビニのコロッケ、安くて美味しい。',en:"Yeah. Conbini croquette — cheap, tasty.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'文化祭、たこ焼き屋、出店するんだって。',en:"Festival — takoyaki stall, exhibiting.",style:'Animated.'},
    {speaker:'riku_teen',jp:'うちの犬、シロは、もう13歳。',en:"Our dog Shiro — already 13.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'裏山のタケ、伸びてる、すごい速さで。',en:"Hill bamboo — growing fast.",style:'Wistful.'},
    {speaker:'riku_teen',jp:'冬は、カブの煮物、家でよく出る。',en:"Winter — turnip stew at home.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'みそ汁、出汁から、こだわるよね、お母さん。',en:"Miso soup — broth, Mom is picky.",style:'Bright.'},
    {speaker:'riku_teen',jp:'家のルータ、最近、不安定。',en:"Home router — recently unstable.",style:'Wry close.'},
  ]},
  {id:'conv_06339',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、駅のスタンプラリー、流行っていた。',en:"In youth — station stamp-rally popular.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。お肉屋さん、コロッケ、毎週買ったわね。',en:"Yes. Butcher — croquette every week.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'夜店のたこ焼き、お祭りの思い出だ。',en:"Festival takoyaki — fond memory.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'裏庭にいたシロ、いい犬だったわね。',en:"Backyard Shiro — fine dog.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'家の庭、タケが、自由に育ってる。',en:"Garden bamboo — freely growing.",style:'Calm.'},
    {speaker:'sachiko_grandma',jp:'お母さんの教えで、カブの漬物、覚えたわ。',en:"Mom's teaching — turnip pickles learned.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'家のみそ、毎年仕込んだなあ。',en:"Home miso — yearly made.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'孫が、ルータ、設定し直してくれた。',en:"Grandkid — router re-configured.",style:'Warm close.'},
  ]},
  {id:'conv_06340',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan an event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、スタンプキャンペーン、店でやろか。',en:"Aoi-san — stamp campaign at store?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。コロッケのアレンジメニュー、出しましょう。',en:"Yes. Croquette-arrangement menu — release.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'夏フェアでは、たこ焼きコラボもええなあ。',en:"Summer fair — takoyaki collab too.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'マスコットに、シロのキャラ、可愛いですよね。',en:"Mascot — Shiro character, cute.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'店内の装飾に、タケのオブジェ、置こか。',en:"Inside — bamboo object as decor.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'冬メニューには、カブのスープ、定番にしましょう。',en:"Winter menu — turnip soup staple.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'地元みそ蔵と、コラボしよか。',en:"Local miso brewery — collab?",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'Wi-Fi、ルータ、性能のいいのに更新します。',en:"Wi-Fi router — upgrade performance.",style:'Practical close.'},
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

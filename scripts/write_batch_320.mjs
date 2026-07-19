import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_320 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['目立た','増額','相応','ホルダー','すじ','ぼっ','婆','爺']
const B_T = ['役職','折衝','統括','取り寄せ','開演','切り上げ','一段落','振り回さ']
const C_T = ['漏洩','細菌','噴火','波及','苦戦','スキャンダル','万一','同調']
const D_T = ['イルカ','浴衣','包丁','ディズニーランド','玄米','披露宴','お好み焼き','田植え']

const data = [
  // A
  {id:'conv_06361',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'最近、髪型、目立たないように整えた。',en:"Lately — hair, low-key styled.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん。お小遣い、増額のお願い、両親にしたの。',en:"Yeah. Allowance increase — asked parents.",style:'Curious.'},
    {speaker:'mei_romantic',jp:'年齢相応のメイク、心がけてる。',en:"Age-appropriate makeup — mindful.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'キーホルダー、新しいの買った。',en:"Keychain — bought new.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'お肉、すじが多い部位、煮込み用。',en:"Meat — sinewy parts, for stew.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'ぼっちゃんの初めての一人旅、応援してるよ。',en:"Young master's first solo trip — cheering.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'近所のお婆ちゃん、いつもニコニコしてる。',en:"Local Granny — always smiling.",style:'Tender.'},
    {speaker:'aoi_barista',jp:'公園のお爺ちゃん、犬と散歩、毎日見るね。',en:"Park Grandpa — daily dog-walk seen.",style:'Warm close.'},
  ]},
  {id:'conv_06362',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、今日のシャツ、目立たないけど、好き。',en:"Mom — today's shirt, low-key, like.",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'うん。お年玉、増額してくれたって、お祖父ちゃん。',en:"Yes. New-year money — increased, Grandpa.",style:'Warm.'},
    {speaker:'sho_child',jp:'年齢相応のおもちゃ、買ってもいいよね。',en:"Age-appropriate toys — fine?",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'おうちの鍵、キーホルダーつけといて。',en:"Home keys — attach keychain.",style:'Practical.'},
    {speaker:'sho_child',jp:'お豆腐、すじ取らないで、いいんでしょ?',en:"Tofu — no need to de-sinew?",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'ふふ、お豆腐にすじはないね、ぼっちゃん。',en:"Hehe — tofu has no sinew, young one.",style:'Soft.'},
    {speaker:'sho_child',jp:'お婆ちゃんちで、お餅つきしたい。',en:"Granny's — wanna mochi-pound.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お爺ちゃんも、楽しみにしてるって。',en:"Grandpa — looking forward too.",style:'Warm close.'},
  ]},
  {id:'conv_06363',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk',lines:[
    {speaker:'sakura_teen',jp:'制服、目立たない地味な色、好き。',en:"Uniform — non-conspicuous plain, like.",style:'Casual teen.'},
    {speaker:'riku_teen',jp:'うん。お小遣い、増額交渉、成功した。',en:"Yeah. Allowance-increase nego — succeeded.",style:'Bright.'},
    {speaker:'sakura_teen',jp:'年齢相応のSNS使い方、最近、気を付けてる。',en:"Age-appropriate SNS use — mindful lately.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'カードホルダー、買い替えた。',en:"Card holder — replaced.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'お肉のすじ、お弁当に入っててびっくり。',en:"Meat sinew — surprised it's in bento.",style:'Wry.'},
    {speaker:'riku_teen',jp:'お前、ぼっち気分、たまにあるんだろ。',en:"You — solo-feel, sometimes?",style:'Probe.'},
    {speaker:'sakura_teen',jp:'隣の家のお婆ちゃん、今度、声かけてあげよう。',en:"Next-door Granny — let's call out.",style:'Warm.'},
    {speaker:'riku_teen',jp:'お爺ちゃんに、和菓子、お土産にする。',en:"Grandpa — wagashi as souvenir.",style:'Warm close.'},
  ]},
  {id:'conv_06364',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'最近、目立たない服、好きになった。',en:"Lately — non-conspicuous clothes, prefer.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。年金、増額してほしいわね。',en:"Yes. Pension — wish for increase.",style:'Wry.'},
    {speaker:'hiroshi_elder',jp:'年齢相応の運動、続けないと。',en:"Age-appropriate exercise — must continue.",style:'Direction.'},
    {speaker:'sachiko_grandma',jp:'カードのホルダー、お祖父ちゃんが、整理してくれたわ。',en:"Card holder — Grandpa organized.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昔は、すじが多い肉、よく食べたな。',en:"Past — often ate sinewy meat.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'孫が、家で、ぼっちにしないで、と言ってくれる。',en:"Grandkid — says don't be alone, kindly.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'近所の婆さん仲間、増えた。',en:"Local Granny friends — increased.",style:'Warm.'},
    {speaker:'sachiko_grandma',jp:'あなたも、爺ちゃんとして頼られる存在ね。',en:"You — relied on as Grandpa.",style:'Warm close.'},
  ]},
  {id:'conv_06365',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai and a teen chat',lines:[
    {speaker:'ren_uni',jp:'桜、目立たない研究、地道に積み上げるんだ。',en:"Sakura — non-conspicuous research, steady build.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'はい。奨学金、増額された方、いるんですか。',en:"Yes. Scholarship-increased, anyone?",style:'Curious.'},
    {speaker:'ren_uni',jp:'年齢相応の生活、貫けばいい。',en:"Age-appropriate life — uphold.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'はい。書類ホルダー、整理しました。',en:"Yes. Doc-holder organized.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'論文のすじ、ぶれないように。',en:"Paper-thread — don't waver.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'はい。研究室、ぼっち気分、避けたいです。',en:"Yes. Lab — avoid solo-feel.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'隣の婆ちゃん、毎朝、教授に挨拶してくれる。',en:"Next-door Granny — daily greets the prof.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'守衛の爺ちゃん、優しいですよね。',en:"Security Grandpa — kind.",style:'Bright close.'},
  ]},

  // B
  {id:'conv_06366',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'役職、見直しの時期だ。',en:"Officer ranks — review time.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。海外との折衝、慎重に進めています。',en:"Yes. Overseas negotiations — careful progress.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'統括部長、引き続き任せる。',en:"Group manager — continued entrust.",style:'Direction.'},
    {speaker:'kenji_office',jp:'部品、海外から取り寄せ済みです。',en:"Parts — overseas-procured.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'発表会、開演時間、急ぎ案内しろ。',en:"Launch — rush opening time.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。会議、夕方、切り上げます。',en:"Yes. Meeting — wrap by evening.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'プロジェクト、一段落するのは、来月か。',en:"Project — phase-pause next month?",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。客先に振り回されない、しっかりした計画、出します。',en:"Yes. Client-uncontrolled, solid plan, submit.",style:'Close.'},
  ]},
  {id:'conv_06367',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss',lines:[
    {speaker:'yuki_office',jp:'新役職、若手にも、機会、与えよう。',en:"New roles — also offer to youth.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。仕入先と折衝、定期的に行います。',en:"Yes. Vendor-nego — periodic.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'統括チーム、規模、拡大するね。',en:"Group team — scale up.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。特注品、取り寄せ依頼、しました。',en:"Yes. Custom items — order placed.",style:'Update.'},
    {speaker:'yuki_office',jp:'イベント、開演直前、準備、整える。',en:"Event — pre-opening, prep set.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。会議、早めに切り上げますね。',en:"Yes. Meeting — wrap early.",style:'Update.'},
    {speaker:'yuki_office',jp:'プロジェクト、一段落、皆で打ち上げ。',en:"Project pause — after-party all.",style:'Bright.'},
    {speaker:'kenji_office',jp:'はい。スケジュール、振り回されないように、調整します。',en:"Yes. Schedule — uncontrolled, adjust.",style:'Close.'},
  ]},
  {id:'conv_06368',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、役職、肩書きより実力、磨け。',en:"Ren — role, skill over title; sharpen.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。先輩、折衝の場、見学させてください。',en:"Yes. Senpai — nego-place, let observe.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'統括職、責任、重い役だ。',en:"Group role — heavy responsibility.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。書籍、取り寄せていただけますか。',en:"Yes. Books — procurable?",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'発表会の開演、緊張する瞬間だ。',en:"Launch opening — tense moment.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'今日は、夕方で切り上げさせていただきます。',en:"Today — wrap by evening, please.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'仕事、一段落したら、外食、行こう。',en:"After pause — eat out together.",style:'Warm.'},
    {speaker:'ren_uni',jp:'はい。締め切りに振り回されないように、計画的に。',en:"Yes. Not deadline-controlled — planful.",style:'Earnest close.'},
  ]},
  {id:'conv_06369',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on coordination',lines:[
    {speaker:'takeda_officer',jp:'警察の役職、変更がありました。',en:"Police roles — changed.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。次回の折衝、新体制で行います。',en:"Yes. Next nego — new structure.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'統括部署、現場との連携、強化中です。',en:"Group section — field-link strengthening.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。資料、警察から取り寄せました。',en:"Yes. Materials — procured from police.",style:'Update.'},
    {speaker:'takeda_officer',jp:'合同会議、開演時間、お知らせします。',en:"Joint meeting opening — informed.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。打ち合わせ、早めに切り上げる予定です。',en:"Yes. Meeting — early-wrap planned.",style:'Update.'},
    {speaker:'takeda_officer',jp:'防犯活動、一段落、評価会、開きます。',en:"Crime-prev pause — review meeting held.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。市民の声に振り回されない冷静さ、保ちます。',en:"Yes. Citizen-voice-uncontrolled calm — kept.",style:'Close.'},
  ]},
  {id:'conv_06370',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'役職に頼らず、信頼で仕事しろ。',en:"Don't rely on title — work by trust.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。重要な折衝、若手にも経験させます。',en:"Yes. Key nego — junior-experience too.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'統括役、若い頃から、責任を負った。',en:"Group role — burden-borne since youth.",style:'Reflective.'},
    {speaker:'hiroshi_boss',jp:'はい。希少資料、取り寄せて、保管しています。',en:"Yes. Rare materials — procured, stored.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'記念式典、開演前、礼を尽くせ。',en:"Anniversary — pre-opening, pay courtesy.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。長会議、適切に切り上げる、心がけます。',en:"Yes. Long meetings — timely-wrap, mindful.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'一段落するごとに、振り返る時間、大事だ。',en:"Each pause — reflection time, vital.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。日々の業務に振り回されない、長期視点で。',en:"Yes. Not daily-task-controlled; long view.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06371',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs about a case',lines:[
    {speaker:'takeda_officer',jp:'情報漏洩、警察庁、本格的に調査開始しました。',en:"Info leakage — NPA full investigation started.",style:'Calm.'},
    {speaker:'ren_uni',jp:'病院では、細菌感染も、注意点ですね。',en:"Hospitals — bacterial infection, watchpoint.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。今月、噴火警報、別件で出ています。',en:"Yes. This month — eruption alert, separate.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'金融への波及、業界全体で警戒、必要ですね。',en:"Financial ripple — industry-wide caution needed.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。捜査、苦戦している地域もあります。',en:"Yes. Investigation — some areas struggling.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'政治のスキャンダル、メディアが大々的に報じてますね。',en:"Political scandal — media heavy coverage.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'万一に備え、警備、強化しています。',en:"In case of emergency — security strengthened.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'業界、警察の声に同調する動き、ありますか。',en:"Industry — aligning with police, any moves?",style:'Curious close.'},
  ]},
  {id:'conv_06372',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses research',lines:[
    {speaker:'asuka_teacher',jp:'論文、情報漏洩のリスク管理、丁寧でしたね。',en:"Paper — info-leak risk mgmt, careful.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。細菌の感染拡大シミュレーション、章にしました。',en:"Yes. Bacterial-spread simulation — chapter.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'火山噴火と感染症、社会への波及、別章でしたね。',en:"Eruption + infection — society-ripple, separate chapter.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。研究中、苦戦したのは、データ収集です。',en:"Yes. Struggle — data gathering.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'スキャンダル絡みの倫理問題、論じましたか。',en:"Scandal-tied ethics — discussed?",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。万一に備える、危機管理の章、独立させました。',en:"Yes. Emergency-prep crisis mgmt — independent chapter.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'学界が同調する流れ、批判的に扱いましたね。',en:"Academic-aligning trend — critically.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'最終章、提言、丁寧に書きました。',en:"Final chapter — proposals, careful.",style:'Earnest close.'},
  ]},
  {id:'conv_06373',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、患者情報の漏洩、最大の懸念です。',en:"Ren — patient-info leak, biggest concern.",style:'Calm.'},
    {speaker:'ren_uni',jp:'院内感染、細菌耐性、深刻ですね。',en:"Hospital infection, bacterial resistance — grave.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。先日の火山噴火、避難所での医療、難航しました。',en:"Yes. Recent eruption — shelter medicine, struggled.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療体制への波及、長期的に懸念されますね。',en:"Long-term ripple to medical system — concern.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。新薬開発、現場では苦戦が続きます。',en:"Yes. New-drug dev — field struggle continues.",style:'Informative.'},
    {speaker:'ren_uni',jp:'業界のスキャンダル、患者離れに繋がりますね。',en:"Industry scandal — patient-defection link.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'万一の災害、医療リソース、確保が肝心です。',en:"Emergency disasters — medical-resource securing vital.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'医師同士、見解、同調する場面、見られますね。',en:"Doctor-mutual views — aligning seen.",style:'Reflective close.'},
  ]},
  {id:'conv_06374',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss discusses a corporate crisis',lines:[
    {speaker:'hiroshi_boss',jp:'情報漏洩、再発防止、即対応しろ。',en:"Info leak — recurrence-prevent, immediate.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。工場、細菌の検査、再実施します。',en:"Yes. Plant — bacterial test redo.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'災害噴火想定、BCP、見直せ。',en:"Eruption-assumed BCP — revise.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。市場への波及、評価、進めます。',en:"Yes. Market ripple — evaluate.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'競合、苦戦してる隙に、シェア拡大、狙え。',en:"Rivals struggle — aim share-expansion.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。スキャンダルを避ける広報、徹底します。',en:"Yes. Scandal-avoid PR — strict.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'万一の場合、責任、組織で取れ。',en:"In case — responsibility, org-take.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。業界の動きに同調せず、独自路線で。',en:"Yes. Without industry-aligning — own path.",style:'Close.'},
  ]},
  {id:'conv_06375',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、情報漏洩問題、現代社会の課題ですね。',en:"Sakura — info leak, modern issue.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。細菌絡みの食中毒、別章で扱いました。',en:"Yes. Bacterial food-poison — separate chapter.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'噴火災害の歴史、調査、丁寧でしたね。',en:"Eruption-disaster history — careful.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'地域経済への波及、データで示しました。',en:"Local-economy ripple — data-shown.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'被災者が苦戦している現状、章末で扱いましたね。',en:"Disaster-victim struggles — chapter end.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'スキャンダル報道との比較、興味深い視点です。',en:"Scandal-coverage comparison — fresh.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'万一の備え、地域でどう連携するか、論じましたか。',en:"Emergency-prep regional coordination — discussed?",style:'Direction.'},
    {speaker:'sakura_teen',jp:'はい。世論に同調しがちな政治、批判的に扱いました。',en:"Yes. Opinion-aligning politics — critically.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06376',cluster:'D',ambient:'park_distant_birds',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son spend a summer day',lines:[
    {speaker:'sho_child',jp:'ママ、水族館のイルカショー、観たい!',en:"Mom — aquarium dolphin show, want to see!",style:'Excited child.'},
    {speaker:'yumiko_mom',jp:'うん。お祭り、浴衣、着ていこうね。',en:"Yes. Festival — yukata wear.",style:'Tender.'},
    {speaker:'sho_child',jp:'家庭科で、包丁の使い方、習った。',en:"Home-ec — kitchen-knife use, learned.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'夏休み、ディズニーランド、行きたいよね。',en:"Summer break — wanna go Disneyland.",style:'Bright.'},
    {speaker:'sho_child',jp:'朝食、玄米ご飯、健康にいいって聞いた。',en:"Breakfast — brown rice, heard healthy.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'おばちゃんの披露宴、来月、招待されたの。',en:"Auntie's reception — invited next month.",style:'Warm.'},
    {speaker:'sho_child',jp:'夕飯、お好み焼き、作って!',en:"Dinner — okonomiyaki, make!",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'おじいちゃんの田植え、手伝いに行こうね。',en:"Grandpa's rice-planting — help.",style:'Warm close.'},
  ]},
  {id:'conv_06377',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'動物園で、イルカに会いに行きたい。',en:"Zoo — wanna see dolphins.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。夏祭り、浴衣で参加するの。',en:"Yeah. Summer fest — yukata-attend.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'カフェの包丁、新調したよ。',en:"Cafe knives — replaced.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'子供連れで、ディズニーランド、行きたいなあ。',en:"With kids — wanna go Disneyland.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'最近、玄米食、ハマってる。',en:"Lately — brown-rice diet, into.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'友達の披露宴、来週、行く。',en:"Friend's reception — next week, attending.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'今夜、お好み焼き、家族で作るの。',en:"Tonight — family-okonomiyaki.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'郷里の田植え、毎年見に行ってる。',en:"Hometown rice-planting — visit yearly.",style:'Wistful close.'},
  ]},
  {id:'conv_06378',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'家族で、イルカを見に水族館、行ってきた。',en:"Family — aquarium dolphins.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。文化祭、浴衣で出店する係になった。',en:"Yeah. Festival — yukata-stall duty.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'家庭科で、包丁、研いだの。',en:"Home-ec — knife sharpened.",style:'Animated.'},
    {speaker:'riku_teen',jp:'修学旅行、ディズニーランド、皆、楽しみ。',en:"School trip Disneyland — all excited.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お弁当、玄米にしたら、お腹、しっかり持つ。',en:"Bento brown rice — keeps tummy full.",style:'Bright.'},
    {speaker:'riku_teen',jp:'いとこの披露宴、欠席せず、参加することにした。',en:"Cousin's reception — not skip, attend.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'放課後、お好み焼き、皆で食べに行こう。',en:"After school — okonomiyaki together.",style:'Animated.'},
    {speaker:'riku_teen',jp:'おばあちゃんの田植え、ボランティアで行く予定。',en:"Granny's rice-planting — volunteer.",style:'Warm close.'},
  ]},
  {id:'conv_06379',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、子供たちと、水族館でイルカを観た。',en:"In youth — aquarium dolphins with kids.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。結婚式の翌日、浴衣で散歩したわね。',en:"Yes. Post-wedding — yukata walk.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'長年使った包丁、研ぎに出さないとな。',en:"Long-used knives — must sharpen.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'孫が、ディズニーランド、行きたいって。',en:"Grandkid — wanna go Disneyland.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'昔から、玄米食、健康のため、続けている。',en:"Long-since — brown rice, health-continued.",style:'Calm.'},
    {speaker:'sachiko_grandma',jp:'長男の披露宴、忘れられない一日ね。',en:"Elder son's reception — unforgettable.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'お好み焼き、関西の親戚から教わったレシピ、引き継いだ。',en:"Okonomiyaki — Kansai-relative recipe, inherited.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'田植えの季節、子供たちと、田んぼで遊んだわね。',en:"Planting season — kids played in fields.",style:'Warm close.'},
  ]},
  {id:'conv_06380',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan a summer event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、夏フェア、イルカモチーフのスイーツ、出そか。',en:"Aoi-san — summer fair, dolphin-motif sweets?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。スタッフ、浴衣で接客、特別感、出します。',en:"Yes. Staff yukata — special feel.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'特製包丁、業務用、新調しよか。',en:"Special knives — replace pro-grade?",style:'Practical.'},
    {speaker:'aoi_barista',jp:'子供連れのお客様、ディズニーランド帰りの方、よく来店します。',en:"With-kids customers — Disney-return guests, often.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'玄米使ったメニュー、健康志向の方に、ええなあ。',en:"Brown-rice menu — for health-conscious, nice.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'貸切披露宴、店で対応、可能ですか。',en:"Private reception — handleable at shop?",style:'Curious.'},
    {speaker:'daichi_kansai',jp:'関西名物のお好み焼き、限定で出そ。',en:"Kansai-spec okonomiyaki — limited release.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'田植え農家との直接取引、来年、企画します。',en:"Rice-planting farms — direct deal, plan next year.",style:'Warm close.'},
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

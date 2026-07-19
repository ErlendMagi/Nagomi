import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_321 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['日差し','柔らかく','一度に','親しい','半日','体温','倒れる','別れる']
const B_T = ['配線','一周','進め方','納入','現職','心構え','立ち上がる','取り組ま']
const C_T = ['反撃','核心','燃える','揺れる','譲歩','一因','炎症','引き金']
const D_T = ['芋','熱帯','草原','銭湯','子犬','離島','自伝','自家製']

const data = [
  // A
  {id:'conv_06381',cluster:'A',ambient:'park_distant_birds',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat in the park',lines:[
    {speaker:'sho_child',jp:'ママ、日差しがまぶしいね。',en:"Mom — sunlight bright.",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'うん。お肉、柔らかく煮込んだ、夕飯。',en:"Yes. Meat — softly stewed, dinner.",style:'Warm.'},
    {speaker:'sho_child',jp:'おやつ、一度に食べないで、半分にする。',en:"Snack — not at once; half.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'クラスの親しい友達、たくさんいるね。',en:"Class — many close friends.",style:'Tender.'},
    {speaker:'sho_child',jp:'半日、外で遊んだから、疲れた。',en:"Half-day outside — tired.",style:'Subdued.'},
    {speaker:'yumiko_mom',jp:'体温、ちょっと上がってるみたい、休んでね。',en:"Temp — slightly up; rest.",style:'Soft.'},
    {speaker:'sho_child',jp:'おじいちゃん、最近、よく倒れるって、心配。',en:"Grandpa — recently falls often, worried.",style:'Vulnerable.'},
    {speaker:'yumiko_mom',jp:'今度、お友達と別れる時、しっかり挨拶してね。',en:"Next farewell with friends — proper greet.",style:'Warm close.'},
  ]},
  {id:'conv_06382',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'今日の日差し、強いね。',en:"Today's sunlight — strong.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん。パンの生地、柔らかく仕上げたよ。',en:"Yeah. Bread dough — softly finished.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'一度に二件、用事入っちゃった。',en:"At once two errands — booked.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'親しいお客さん、今日も来てくれた。',en:"Close customer — came today.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'昨日、半日、家でゴロゴロした。',en:"Yesterday — half-day, lazy at home.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'体温、平熱に戻った?',en:"Temp — back to normal?",style:'Curious.'},
    {speaker:'mei_romantic',jp:'うん。先輩、過労で倒れる寸前だった。',en:"Yes. Senpai — near-overwork collapse.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'夕方、駅で別れる時、また連絡しよう。',en:"Evening — at station-farewell, contact again.",style:'Warm close.'},
  ]},
  {id:'conv_06383',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'庭の日差し、午後はちょうどいいね。',en:"Garden sunlight — afternoon, just right.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。お豆腐、柔らかく煮るのが好きね、あなた。',en:"Yes. Tofu — softly simmered, you like.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'年取って、一度に食べる量、減ったな。',en:"Aged — at-once eat-quantity, reduced.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お互い、親しい友達、減ってきたわね。',en:"Mutually — close friends decreasing.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'今日、半日、散歩で疲れた。',en:"Today — half-day walk, tired.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'体温、正常で、安心ね。',en:"Temp — normal, relief.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'夏は、暑さで倒れる人、増えるな。',en:"Summer — heat-collapsing people increase.",style:'Direction.'},
    {speaker:'sachiko_grandma',jp:'長年連れ添って、別れる予定、ないわよ。',en:"Years together — no farewell plan.",style:'Warm close.'},
  ]},
  {id:'conv_06384',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk',lines:[
    {speaker:'sakura_teen',jp:'夏の日差し、肌に響くね。',en:"Summer sunlight — skin-impactful.",style:'Casual teen.'},
    {speaker:'riku_teen',jp:'うん。柔らかくマシュマロ、お弁当に入ってた。',en:"Yeah. Soft marshmallow — in bento.",style:'Bright.'},
    {speaker:'sakura_teen',jp:'課題、一度にやろうとすると、しんどい。',en:"Tasks — at once, tough.",style:'Wry.'},
    {speaker:'riku_teen',jp:'親しい友達、減ったり増えたり、変わるよな。',en:"Close friends — wax-wane, changing.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'半日、塾、しんどかった。',en:"Half-day cram — rough.",style:'Subdued.'},
    {speaker:'riku_teen',jp:'体温、夏でも微妙に上下する。',en:"Temp — summer too, fluctuates.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'部活で、後輩が、倒れる寸前で、心配だった。',en:"Club — junior, near-collapse, worried.",style:'Vulnerable.'},
    {speaker:'riku_teen',jp:'駅で別れる前に、コンビニ寄ろう。',en:"Pre-station-farewell — conbini.",style:'Warm close.'},
  ]},
  {id:'conv_06385',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai and a teen chat',lines:[
    {speaker:'ren_uni',jp:'桜、研究室の日差し、夏は強いんだ。',en:"Sakura — lab sunlight, strong in summer.",style:'Casual senpai.'},
    {speaker:'sakura_teen',jp:'はい。先輩、優しい言葉、柔らかく届きます。',en:"Yes. Senpai's kind words — softly land.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'発表資料、一度に確認、頼む。',en:"Pres materials — at-once check, please.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'はい。先輩は、親しい後輩、たくさんいますね。',en:"Yes. Senpai — many close juniors.",style:'Polite.'},
    {speaker:'ren_uni',jp:'今日、半日、ゼミだった。',en:"Today — half-day seminar.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'微熱、体温、計ってみました。',en:"Slight fever — temp measured.",style:'Soft.'},
    {speaker:'ren_uni',jp:'徹夜で倒れるな、気を付けて。',en:"Don't all-nighter-collapse, careful.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'はい。卒業で先輩と別れる日、寂しいです。',en:"Yes. Grad-day farewell, lonely.",style:'Vulnerable close.'},
  ]},

  // B
  {id:'conv_06386',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'工場の配線、最新化、急げ。',en:"Plant wiring — modernize, rush.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社員、敷地を一周する朝礼、定着しました。',en:"Yes. Staff — site-one-lap morning, settled.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'プロジェクトの進め方、若手にも教えろ。',en:"Project flow — teach youth.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。納入予定、来月、調整します。',en:"Yes. Delivery — next-month adjusted.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'現職員の声、聞き続けるんだ。',en:"Current-staff voices — keep listening.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新入社員、心構え、研修で教えます。',en:"Yes. New-hires — mindset, training.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'新事業、すぐ立ち上がるよう、準備。',en:"New biz — immediately launch-ready.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。地域社会に取り組ませる、姿勢、貫きます。',en:"Yes. Community engagement stance — uphold.",style:'Close.'},
  ]},
  {id:'conv_06387',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss strategy',lines:[
    {speaker:'yuki_office',jp:'オフィス、配線、整理しよう。',en:"Office wiring — organize.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。年に一周する点検、欠かさず実施しています。',en:"Yes. Yearly-one-round inspection — not skipped.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'業務の進め方、改善、急ぐね。',en:"Workflow — improvement, rush.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。部品、納入先、追加しました。',en:"Yes. Parts — delivery-vendor added.",style:'Update.'},
    {speaker:'yuki_office',jp:'現職員、増員、検討中だ。',en:"Current-staff — increase under review.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。心構えを養う研修、来月実施します。',en:"Yes. Mindset-cultivating training — next-month.",style:'Bright.'},
    {speaker:'yuki_office',jp:'新部署、立ち上がるタイミング、年明けかな。',en:"New section — start-up timing, year-open?",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。複数案件、同時に取り組ませる、避けます。',en:"Yes. Multi-cases simultaneously — avoid.",style:'Close.'},
  ]},
  {id:'conv_06388',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、配線図、読める社員、貴重だ。',en:"Ren — wiring-reading staff, valuable.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。社内を一周する見学、勉強になりました。',en:"Yes. In-house one-round tour, instructive.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'プロジェクトの進め方、自分でも考えろ。',en:"Project flow — also think yourself.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。部品の納入経路、興味深いです。',en:"Yes. Part-delivery routes — intriguing.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'現職員の意見、若いうちから聞け。',en:"Current-staff opinions — listen young.",style:'Direction.'},
    {speaker:'ren_uni',jp:'就活前、心構え、教えていただきたいです。',en:"Pre-job-hunt — teach me mindset.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'起業を立ち上がる、若手、出てきている。',en:"Startup-launching youth — emerging.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。複数案件に取り組ませる経験、ありがたいです。',en:"Yes. Multi-case-handling experience — grateful.",style:'Earnest close.'},
  ]},
  {id:'conv_06389',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on security',lines:[
    {speaker:'takeda_officer',jp:'御社の配線、防犯面でも、再点検をお願いします。',en:"Your wiring — also crime-prev re-check.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察車両、敷地を一周する巡回、お願いしています。',en:"Yes. Police-car site-round patrols — asked.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'手続きの進め方、警察庁ガイドライン、共有します。',en:"Procedure flow — NPA guidelines shared.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。協定書、警察に納入しました。',en:"Yes. Agreement — delivered to police.",style:'Update.'},
    {speaker:'takeda_officer',jp:'現職員のうち、警察出身者、いますか。',en:"Current-staff — ex-police anyone?",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。社員、心構え研修、警察と共催です。',en:"Yes. Mindset training — police-co-hosted.",style:'Commitment.'},
    {speaker:'takeda_officer',jp:'共同プロジェクト、立ち上がるのは、来年です。',en:"Joint project — launches next year.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。難案件にも取り組ませる方針です。',en:"Yes. Hard-case-handling stance.",style:'Close.'},
  ]},
  {id:'conv_06390',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'昔の配線、すべて手作業だった。',en:"Old wiring — all by hand.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。社員、社屋を一周する朝礼、続けています。',en:"Yes. Staff — building-round morning, continued.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'進め方、若い頃に習った、根気が要る。',en:"Flow — learned young, needs patience.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。先輩から、納入の流儀、引き継いでいます。',en:"Yes. From senpai — delivery-style inherited.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'現職員、伝統を、伝えていけ。',en:"Current-staff — convey tradition.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。新人に心構え、丁寧に伝えます。',en:"Yes. To new-hires — mindset, careful.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'事業を立ち上がる勢い、若い頃と同じく、持ち続けろ。',en:"Biz-launching momentum — keep as in youth.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。挑戦に取り組ませる組織、目指します。',en:"Yes. Aim challenge-tackling org.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06391',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses a paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、批判への反撃、章末で扱いましたね。',en:"Paper — critique-counter, chapter end.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。仮説の核心、明確に書きました。',en:"Yes. Hypothesis core — clearly written.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'議論が燃える論点、注釈で明示しましたね。',en:"Burning-debate points — annotation-clarified.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。データが揺れる時の対処、別章にしました。',en:"Yes. Wavering-data handling — chapter.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'相手側に譲歩する姿勢、論じましたか。',en:"Opponent-yielding stance — discussed?",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。失敗の一因、データ偏向と書きました。',en:"Yes. Failure cause — data-bias, written.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'医学的に、炎症と関連付ける論考、独創的ですね。',en:"Medically — inflammation-linking thesis, original.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'引き金となる要因、最終章で総括します。',en:"Trigger factors — final-chapter summarized.",style:'Earnest close.'},
  ]},
  {id:'conv_06392',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs about a case',lines:[
    {speaker:'takeda_officer',jp:'容疑者の反撃、想定していなかったです。',en:"Suspect counterattack — unexpected.",style:'Calm.'},
    {speaker:'ren_uni',jp:'事件の核心、いつ明らかになりますか。',en:"Case core — when clarified?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。世論、燃える状態が続いています。',en:"Yes. Public opinion — burning state continues.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'証拠が揺れる時、警察の対応、難しいですね。',en:"Wavering-evidence — police-response, hard.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。協力者へ譲歩する形で、捜査を進めます。',en:"Yes. Cooperator-yielding form — advance.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'事件の一因、SNSの拡散と分析されていますね。',en:"Case-cause — SNS-spread, analyzed.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。被害者、炎症性の傷、長引いています。',en:"Yes. Victim — inflammation-wounds, dragging.",style:'Informative.'},
    {speaker:'ren_uni',jp:'引き金となる要因、警察視点で論じましたね。',en:"Trigger factor — police-view discussed.",style:'Curious close.'},
  ]},
  {id:'conv_06393',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、感染症への反撃、免疫システムが鍵です。',en:"Ren — infection counter, immune-key.",style:'Calm.'},
    {speaker:'ren_uni',jp:'治療の核心、医師の判断力ですね。',en:"Treatment core — doctor judgment.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。患者の燃えるような発熱、研究対象です。',en:"Yes. Patient burning-fever — research target.",style:'Patient.'},
    {speaker:'ren_uni',jp:'治療方針が揺れる時、患者、不安ですね。',en:"Wavering treatment — patient anxiety.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。家族との関係で、譲歩する場面、あります。',en:"Yes. With family — yielding moments.",style:'Informative.'},
    {speaker:'ren_uni',jp:'病気の一因、生活習慣、よく言われますね。',en:"Disease cause — lifestyle, often said.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。慢性炎症、長期治療、対応します。',en:"Yes. Chronic inflammation — long-term treat.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'発症の引き金、特定が、重要な仕事ですね。',en:"Onset-trigger — identification, vital work.",style:'Reflective close.'},
  ]},
  {id:'conv_06394',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss discusses crisis management',lines:[
    {speaker:'hiroshi_boss',jp:'競合の反撃、強くなってきている。',en:"Rival counter — strengthening.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。市場戦略の核心、ブランド力です。',en:"Yes. Market-strategy core — brand power.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'業界、燃える話題、続いてるな。',en:"Industry — burning topics continue.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。株価、揺れる時期、慎重に運用します。',en:"Yes. Stock-wavering — careful ops.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'取引先に譲歩する姿勢、長期で得策だ。',en:"Vendor-yielding stance — long-term wise.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。業績悪化の一因、海外要因、と分析しています。',en:"Yes. Perf-down cause — overseas factor.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'労使対立、炎症みたいに、長引かせるな。',en:"Labor-mgmt — like inflammation, don't drag.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。トラブルの引き金、初動で抑えます。',en:"Yes. Trouble-trigger — initial-control.",style:'Close.'},
  ]},
  {id:'conv_06395',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、社会問題への反撃、市民の力ですね。',en:"Sakura — counter to social issues, citizen-power.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。問題の核心、データで示しました。',en:"Yes. Issue core — data-shown.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'世論が燃える時、メディアの責任、重いですね。',en:"Burning opinion — media-responsibility heavy.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。揺れる議論、丁寧に整理しました。',en:"Yes. Wavering debate — carefully organized.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'対立する側に譲歩する論点、章末で扱いましたね。',en:"Opponent-yielding points — chapter end.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'貧困の一因、教育格差、論じました。',en:"Poverty cause — education-gap, discussed.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'社会の炎症みたいな緊張、章として扱いましたね。',en:"Society's inflammation-like tension — chapter.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'政策変更の引き金、丁寧に分析しました。',en:"Policy-change trigger — careful analysis.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06396',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about food and travel',lines:[
    {speaker:'mei_romantic',jp:'秋、芋ほり、楽しいよね。',en:"Autumn — yam-digging fun.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。熱帯植物展、見に行きたい。',en:"Yeah. Tropical-plant show — wanna see.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'広い草原で、ピクニックしたいね。',en:"Vast grassland — picnic.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'近所の銭湯、湯加減、ちょうどいい。',en:"Local sento — temp just right.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'隣の家、子犬、新しく迎えたって。',en:"Next door — new puppy welcomed.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'夏休み、離島旅行、いいね。',en:"Summer break — remote-island trip, nice.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'有名人の自伝、読み始めた。',en:"Celebrity autobio — started.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'今夜、自家製パン、焼くね。',en:"Tonight — homemade bread bake.",style:'Warm close.'},
  ]},
  {id:'conv_06397',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お芋掘り、楽しかった!',en:"Mom — yam-digging fun!",style:'Excited child.'},
    {speaker:'yumiko_mom',jp:'うん。次は、熱帯の動物、動物園で見ようね。',en:"Yes. Next — tropical animals at the zoo.",style:'Tender.'},
    {speaker:'sho_child',jp:'広い草原のある公園、行きたい。',en:"Vast-grassland park — wanna go.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'銭湯、お父さんと、たまには行く?',en:"Sento — sometimes go with Dad?",style:'Soft.'},
    {speaker:'sho_child',jp:'お友達の子犬、抱っこした、可愛かった!',en:"Friend's puppy — held, cute!",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'夏休み、離島キャンプ、計画あるよ。',en:"Summer — remote-island camp, planned.",style:'Animated.'},
    {speaker:'sho_child',jp:'絵本の自伝、英雄の話、好き。',en:"Autobiog picture book — hero, like.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'自家製のおやつ、明日、作ろうね。',en:"Homemade snacks — tomorrow make.",style:'Warm close.'},
  ]},
  {id:'conv_06398',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens walk',lines:[
    {speaker:'sakura_teen',jp:'家庭科で、芋を使ったメニュー、覚えた。',en:"Home-ec — yam-menu, learned.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。地理で、熱帯気候、習った。',en:"Yeah. Geography — tropical climate learned.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'修学旅行、広い草原、楽しみだ。',en:"School trip — vast grassland, exciting.",style:'Animated.'},
    {speaker:'riku_teen',jp:'部活帰り、銭湯、寄ろうか。',en:"Post-club — stop sento?",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お隣、子犬が、生まれたんだって。',en:"Neighbor — puppy born.",style:'Bright.'},
    {speaker:'riku_teen',jp:'地理で、離島の経済、面白かった。',en:"Geography — island econ, fun.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'図書館で、スポーツ選手の自伝、借りた。',en:"Library — athlete autobio borrowed.",style:'Animated.'},
    {speaker:'riku_teen',jp:'家庭科、自家製ジャム、初めて作った。',en:"Home-ec — homemade jam, first-made.",style:'Bright close.'},
  ]},
  {id:'conv_06399',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、田舎で芋掘り、毎年やった。',en:"In youth — yam-digging yearly in countryside.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。新婚旅行で、熱帯の島、行ったわね。',en:"Yes. Honeymoon — tropical island.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'草原を歩いた日、写真、残してる。',en:"Grassland-walking days — photos kept.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'昔は、銭湯、毎日のように行ってたわね。',en:"Past — sento daily.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'孫が、子犬を欲しがってる、可愛いね。',en:"Grandkid — wants a puppy, cute.",style:'Warm.'},
    {speaker:'sachiko_grandma',jp:'離島で、二人で過ごした夏、忘れない。',en:"Remote island — summer together, unforgotten.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'最近、自伝を、書こうか、と思ってる。',en:"Lately — considering writing autobiography.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'自家製の梅干、毎年仕込んだわね。',en:"Homemade plum-pickles — yearly made.",style:'Warm close.'},
  ]},
  {id:'conv_06400',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan a menu',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、秋のフェア、芋づくしメニュー、出そか。',en:"Aoi-san — autumn fair, yam-themed menu?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。熱帯フルーツのデザートも、出します。',en:"Yes. Tropical-fruit dessert — release.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'草原をイメージした店内装飾、考えよか。',en:"Grassland-imaged in-store decor — consider?",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'近所の銭湯と、コラボ企画、いいですね。',en:"Local sento collab — nice.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'子犬カフェのお客様、よく来てくれるな。',en:"Puppy-cafe customers — often come.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'離島産の食材、限定で、入荷します。',en:"Remote-island ingredients — limited stock.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'地元シェフの自伝、本棚に置こか。',en:"Local-chef autobio — on the shelf?",style:'Practical.'},
    {speaker:'aoi_barista',jp:'自家製ジャム、お土産販売、人気でますよね。',en:"Homemade jam — souvenir-sale, popular.",style:'Warm close.'},
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_325 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['払え','堅い','出れ','きつく','貸す','休ま','おかあさん','かわいく']
const B_T = ['増員','測る','オーブン','カルテ','当番','仕上げる','仕切り','引き換え']
const C_T = ['人的','地上波','成り立ち','林業','沼','沿線','練っ','質感']
const D_T = ['はがき','盛大','綱','分厚い','先人','新郎','新婦','狐']

const data = [
  // A
  {id:'conv_06461',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お小遣い、ちゃんと払えるかな、自分で。',en:"Mom — can I pay allowance myself?",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'うん、堅い決意があるならね。',en:"Yes — if firm resolve.",style:'Tender.'},
    {speaker:'sho_child',jp:'朝、玄関、すんなり出れるようになった。',en:"Morning — smoothly leave the entrance.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'お友達、きつく言わないでね。',en:"Friends — don't speak harshly.",style:'Soft.'},
    {speaker:'sho_child',jp:'お絵描き、ペン、貸すから、皆と楽しく。',en:"Drawing — pens lendable, fun with all.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お父さん、まだ休まないみたい、心配ね。',en:"Dad — not resting yet, worried.",style:'Reflective.'},
    {speaker:'sho_child',jp:'おかあさん、いつもお弁当、ありがとう。',en:"Mom — always lunch, thanks.",style:'Warm.'},
    {speaker:'yumiko_mom',jp:'お友達の絵、かわいく描けてるね。',en:"Friend's pic — cutely drawn.",style:'Warm close.'},
  ]},
  {id:'conv_06462',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'今月、家賃、しっかり払えるか、心配。',en:"This month — rent payable, worry.",style:'Vulnerable.'},
    {speaker:'aoi_barista',jp:'うん。気持ちは堅いから、大丈夫だよ。',en:"Yeah. Firm heart — okay.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'家から出れない日も、たまにある。',en:"Days can't leave home — sometimes.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'体調、きつく感じる時、無理しないでね。',en:"When body feels tight — don't push.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'本、何冊か貸すよ、気晴らしに。',en:"Books — lend a few for distraction.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'土日、しっかり休まないと、続かない。',en:"Weekend rest — must, else can't continue.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'うちのおかあさん、いつも電話、心配してくれる。',en:"Mom — always worried calls.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'店のロゴ、かわいく刷新されたよね。',en:"Shop logo — cutely refreshed.",style:'Warm close.'},
  ]},
  {id:'conv_06463',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'修学旅行、自分で払えるお小遣い、貯めてる。',en:"School trip — self-payable allowance saving.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。試験、堅い問題、多くて、辛い。',en:"Yeah. Exam — many tough questions, brutal.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'朝、布団から出れない時、ある。',en:"Morning — can't leave futon, sometimes.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'部活、きつくて、毎日へとへと。',en:"Club — tight, daily exhausted.",style:'Subdued.'},
    {speaker:'sakura_teen',jp:'ノート、貸すから、参考にして。',en:"Notebook — lend; reference.",style:'Warm.'},
    {speaker:'riku_teen',jp:'今日、半日、休まない、頑張る。',en:"Today — half-day no-rest, push.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'おかあさんが、明日、運動会観に来てくれる。',en:"Mom — tomorrow, sports-day watch.",style:'Animated.'},
    {speaker:'riku_teen',jp:'入場アナウンス、かわいく聞こえるね。',en:"Entrance announce — cute-sounds.",style:'Bright close.'},
  ]},
  {id:'conv_06464',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、家賃、ぎりぎり払えてたな。',en:"In youth — rent barely payable.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。お互い、堅い性格で、苦労したわね。',en:"Yes. Mutually firm, struggled.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昔の家、雨で、外に出れない日、多かった。',en:"Old house — rain non-out days, many.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'仕事、きつく感じる時、お互い支え合ったわね。',en:"Work — tight times, mutually supported.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'本棚から、若い人に、本貸すのも、最近の楽しみ。',en:"Bookshelf — lending books to young is fun lately.",style:'Bright.'},
    {speaker:'sachiko_grandma',jp:'年取って、休まないと、体に響くわね。',en:"Aged — non-rest body-impacts.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'孫が、おかあさんと、お祭り行くって。',en:"Grandkid — with Mom, festival-go.",style:'Warm.'},
    {speaker:'sachiko_grandma',jp:'昔の写真、お前、かわいく写ってるわよ。',en:"Old photos — you cutely shown.",style:'Warm close.'},
  ]},
  {id:'conv_06465',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai and a teen chat',lines:[
    {speaker:'ren_uni',jp:'桜、留学費、しっかり払える計画、立てよう。',en:"Sakura — study-abroad payable plan, draft.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'はい。先輩、いつも堅い助言、ありがとうございます。',en:"Yes. Senpai — always firm advice, thanks.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'研究室から出れない日、続いてるな。',en:"Lab non-out days — continuing.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。締切、きつく感じてます。',en:"Yes. Deadlines — tight-feel.",style:'Subdued.'},
    {speaker:'ren_uni',jp:'論文、書式テンプレ、貸すよ。',en:"Paper — template lendable.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'はい。週末、ちゃんと休まないと、と思います。',en:"Yes. Weekend non-rest — must avoid.",style:'Polite.'},
    {speaker:'ren_uni',jp:'桜のおかあさん、僕にもいつも、よくしてくれる。',en:"Sakura's mom — always nice to me too.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'卒業アルバム、皆、かわいく写ってますよね。',en:"Grad album — all cutely shown.",style:'Bright close.'},
  ]},

  // B
  {id:'conv_06466',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'人員、若手、増員を進めろ。',en:"Personnel — increase youth.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。製品の寸法、再度、測る予定です。',en:"Yes. Product dimensions — remeasure.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'社食、オーブン、新型導入したか。',en:"Cafeteria oven — new model intro?",style:'Curious.'},
    {speaker:'kenji_office',jp:'はい。社内のカルテ、デジタル化を進めます。',en:"Yes. In-house records — digitization.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'今週、警備当番、誰だ。',en:"This week — security duty, who?",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新製品、仕上げる段階に入りました。',en:"Yes. New product — finishing phase entered.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'仕切り役、ベテランで固めろ。',en:"Lead role — veteran-anchor.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。割引、引き換え券、配布済みです。',en:"Yes. Discount-redemption vouchers — distributed.",style:'Close.'},
  ]},
  {id:'conv_06467',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss',lines:[
    {speaker:'yuki_office',jp:'店舗、増員、急務。',en:"Stores — increase, urgent.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。お客様の声、データで測る試み、進めます。',en:"Yes. Voice-of-customer — data-measuring trial.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'業務用オーブン、メンテナンス、出してね。',en:"Pro oven — maintenance, send.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。顧客カルテ、CRMに統合中です。',en:"Yes. Customer records — CRM-integrating.",style:'Update.'},
    {speaker:'yuki_office',jp:'清掃の当番表、新月で更新を。',en:"Cleaning duty — new-month update.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。看板を仕上げる時期、近いです。',en:"Yes. Signboard-finishing time near.",style:'Bright.'},
    {speaker:'yuki_office',jp:'業務の仕切り、後輩に任せてみよう。',en:"Workflow lead — entrust juniors.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。引き換えポイント、顧客に説明します。',en:"Yes. Redemption points — customer-explained.",style:'Close.'},
  ]},
  {id:'conv_06468',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、組織、増員する時の難しさ、勉強になるぞ。',en:"Ren — increase-time difficulty, instructive.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。データ、客観的に測る目、養いたいです。',en:"Yes. Objective data-measuring eye, cultivate.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'工房、オーブン技術、現場で見てみろ。',en:"Workshop oven-tech — see on site.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。顧客カルテ、個人情報、慎重に扱われていますね。',en:"Yes. Customer records — privacy carefully handled.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'若手、当番制で、責任感、養え。',en:"Youth duty-system — responsibility cultivated.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。論文、仕上げる段階に、入りました。',en:"Yes. Paper-finishing phase entered.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'場の仕切り、若手にも経験させたい。',en:"Venue-lead — let youth experience.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。サービス、引き換え券、商品設計の勉強にもなります。',en:"Yes. Service-redemption vouchers — product-design study too.",style:'Earnest close.'},
  ]},
  {id:'conv_06469',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on coordination',lines:[
    {speaker:'takeda_officer',jp:'警察、繁忙期、増員を進めています。',en:"Police — busy-time, increase advancing.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。御社、警備人員、防犯効果、測る指標、共有頂けますか。',en:"Yes. Patrol personnel — crime-prev effect-measuring indicators, sharable?",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'地域の食堂、オーブン火災、注意喚起しています。',en:"Local cafeterias — oven-fire, alerted.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。事件カルテ、警察データベース、参考にしています。',en:"Yes. Incident records — police DB referenced.",style:'Update.'},
    {speaker:'takeda_officer',jp:'交番の当番制、市民にも、周知しています。',en:"Koban duty-system — citizens informed.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。共同案件、仕上げる段階で、警察に最終確認、求めます。',en:"Yes. Joint cases — finishing-phase police-final-check.",style:'Polite.'},
    {speaker:'takeda_officer',jp:'場面の仕切り、警察主導で進める方針です。',en:"Scene-lead — police-led policy.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。協定、引き換えに、警察情報、提供頂きます。',en:"Yes. Agreement-redemption — receive police info.",style:'Close.'},
  ]},
  {id:'conv_06470',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'増員、若い頃も、慎重に進めた。',en:"Increase — youth also careful.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。業績、定量的に測る基準、設けています。',en:"Yes. Performance — quantitative-measure standards.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'若い頃、業務用オーブン、扱いに苦労した。',en:"In youth — pro-oven handling, struggled.",style:'Reflective.'},
    {speaker:'hiroshi_boss',jp:'はい。顧客カルテ、歴史、社史にも残しています。',en:"Yes. Customer records — history in firm-history kept.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'役員当番、若い頃から、回り持ちでやった。',en:"Exec duty — youth-rotation done.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。事業を仕上げる責任、感じています。',en:"Yes. Biz-finishing responsibility — feel.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'仕切りの上手な人、組織の柱だ。',en:"Good lead — org pillar.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。長年の信頼、引き換えに、顧客から、信用、頂いています。',en:"Yes. Years of trust — redemption-gained customer trust.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06471',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses research',lines:[
    {speaker:'asuka_teacher',jp:'論文、人的資源論、丁寧に書きましたね。',en:"Paper — HR theory, carefully written.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。地上波放送局の戦略、章にしました。',en:"Yes. Terrestrial-broadcasters strategy — chapter.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'業界の成り立ち、歴史を踏まえて、論じましたね。',en:"Industry-origin — history-grounded, discussed.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。林業の衰退、別章で扱いました。',en:"Yes. Forestry-decline — separate chapter.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'地方の沼、生態系、興味深い切り口でしたね。',en:"Regional marsh — ecosystem, fresh angle.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'沿線開発と、地域経済、連動論じました。',en:"Line-side dev & local econ — linked discussed.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'仮説を練った過程、章末で添えていますね。',en:"Hypothesis-kneading process — appended at end.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'文化財の質感、写真資料で示しました。',en:"Heritage texture — photo-shown.",style:'Earnest close.'},
  ]},
  {id:'conv_06472',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs about a case',lines:[
    {speaker:'takeda_officer',jp:'今回の事件、人的被害は最小限でした。',en:"This case — human damage minimal.",style:'Calm.'},
    {speaker:'ren_uni',jp:'地上波で広く報じられましたよね。',en:"Terrestrial-widely reported.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。事件の成り立ち、初動で見抜けました。',en:"Yes. Case-origin — initial-discerned.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'山間部の林業地帯、捜索、難航したそうですね。',en:"Mountain forestry area — search struggled.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。捜索中、沼に近づいた箇所、危険でした。',en:"Yes. Mid-search marsh-near spots — dangerous.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者、沿線駅で防犯カメラに映っていましたね。',en:"Suspect — line-station camera-shown.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。捜査計画、慎重に練った上で、動きます。',en:"Yes. Search-plan kneaded carefully, then move.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'凶器の質感、専門家、分析中ですか。',en:"Weapon texture — specialists analyzing?",style:'Curious close.'},
  ]},
  {id:'conv_06473',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、病院の人的体制、地方では脆弱です。',en:"Ren — hospital HR, fragile in regions.",style:'Calm.'},
    {speaker:'ren_uni',jp:'地上波の医療ドラマ、誤情報、流れることもありますね。',en:"Terrestrial medical dramas — misinfo too.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。地域医療の成り立ち、歴史と地理が支えてきました。',en:"Yes. Regional-medicine origin — history-geography supported.",style:'Patient.'},
    {speaker:'ren_uni',jp:'林業従事者の健康問題、報告書、ありますか。',en:"Forestry-worker health — reports?",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。沼地での蚊媒介感染症、注意しています。',en:"Yes. Marshland mosquito-borne — careful.",style:'Informative.'},
    {speaker:'ren_uni',jp:'沿線病院、地域連携、進んでますね。',en:"Line-side hospitals — coordinated.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。治療法を練った経験、若手に伝えます。',en:"Yes. Kneaded-treatment experience — pass to youth.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'医療現場の質感、ドキュメンタリーで伝わりますね。',en:"Medical-field texture — docs convey.",style:'Reflective close.'},
  ]},
  {id:'conv_06474',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews a corporate issue',lines:[
    {speaker:'hiroshi_boss',jp:'人的資源、戦略の核だ。',en:"HR — strategic core.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。広報、地上波枠、確保しました。',en:"Yes. PR — terrestrial slot secured.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'業界の成り立ち、若手にも、伝えろ。',en:"Industry-origin — convey to youth.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。林業との共同事業、検討しています。',en:"Yes. Forestry joint biz — under review.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'沼地の土地、開発、慎重に。',en:"Marsh-land — dev careful.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。沿線広告、効果測定、進めています。',en:"Yes. Line-side ads — effect-measuring.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'戦略を練ったうえで、来期、ローンチだ。',en:"Strategy kneaded — next term, launch.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。製品の質感、最終確認、こだわります。',en:"Yes. Product texture — final-check, fastidious.",style:'Close.'},
  ]},
  {id:'conv_06475',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、地域研究、人的ネットワーク、テーマにしましたね。',en:"Sakura — regional research, human network, theme.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。地上波番組、地元の話題、参考にしました。',en:"Yes. Terrestrial-programs — local topics referenced.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'地域の成り立ち、丁寧に追いましたね。',en:"Region-origin — carefully tracked.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'林業の現状、第一次産業の章で扱いました。',en:"Forestry status — primary-industry chapter.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'沼地の保全活動、章にしましたね。',en:"Marsh-preservation activities — chapter.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'沿線の住民の声、丁寧に取材しました。',en:"Line-side residents — carefully interviewed.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'論を練った跡が、しっかり見えます。',en:"Argument-kneading traces — visible.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'伝統工芸品の質感、写真で記録しました。',en:"Traditional-craft texture — photo-recorded.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06476',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about a wedding',lines:[
    {speaker:'mei_romantic',jp:'結婚式の招待、はがきで届いたよ。',en:"Wedding invite — postcard arrived.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。盛大な式、楽しみだね。',en:"Yeah. Grand ceremony — exciting.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'綱引き、披露宴の余興で、定番だよね。',en:"Tug-of-war — reception staple.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'引き出物のアルバム、分厚いタイプもあるね。',en:"Return-gift album — thick types too.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'先人の知恵、結婚式の慣例で、活かされている。',en:"Ancestral wisdom — utilized in wedding customs.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'新郎、緊張してたよね、入場の時。',en:"Groom — nervous at entrance.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'新婦のドレス、本当に綺麗だった。',en:"Bride dress — truly lovely.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'裏庭、夜に狐が来るって、噂よ。',en:"Backyard — fox night-visit, rumor.",style:'Warm close.'},
  ]},
  {id:'conv_06477',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、おばあちゃんに、はがき、書きたい。',en:"Mom — wanna postcard Granny.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'うん。お誕生日、盛大に祝おうね。',en:"Yes. Birthday — grandly celebrate.",style:'Tender.'},
    {speaker:'sho_child',jp:'運動会、綱引き、頑張る!',en:"Sports day — tug-of-war, try!",style:'Excited.'},
    {speaker:'yumiko_mom',jp:'お父さんの本、分厚いから、棚に置こうね。',en:"Dad's book — thick; on shelf.",style:'Soft.'},
    {speaker:'sho_child',jp:'お絵描き、先人の絵、参考にする。',en:"Drawing — reference ancestors.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'おばさんの結婚式、新郎、優しそうな人だったね。',en:"Auntie wedding — groom, kind-looking.",style:'Reflective.'},
    {speaker:'sho_child',jp:'新婦、ドレス、お姫様みたい!',en:"Bride dress — princess-like!",style:'Awe.'},
    {speaker:'yumiko_mom',jp:'絵本の狐、可愛いね、おかあさんも好き。',en:"Book fox — cute, Mom likes.",style:'Warm close.'},
  ]},
  {id:'conv_06478',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'いとこから、絵はがき、届いた!',en:"Cousin — picture postcard arrived!",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。文化祭、盛大に開催されるよね。',en:"Yeah. Festival — grandly held.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'運動会、綱引き、毎年、楽しいんだよ。',en:"Sports day — tug-of-war yearly fun.",style:'Excited.'},
    {speaker:'riku_teen',jp:'参考書、分厚いから、リュック重い。',en:"Study books — thick; backpack heavy.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'歴史で、先人の業績、習った。',en:"History — ancestral achievements learned.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'いとこの兄、もうすぐ新郎になる。',en:"Cousin's bro — soon groom.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'新婦は、地元の小学校の先生らしい。',en:"Bride — local elementary teacher.",style:'Animated.'},
    {speaker:'riku_teen',jp:'神社で、狐の像、いっぱい飾られてた。',en:"Shrine — fox statues decorated.",style:'Curious close.'},
  ]},
  {id:'conv_06479',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces about weddings',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、結婚式の招待、はがきが定番だった。',en:"In youth — wedding invites, postcards standard.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。私たちの結婚式、盛大に祝ってもらったわね。',en:"Yes. Our wedding — grandly celebrated.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'披露宴、綱引き、面白い余興だった。',en:"Reception tug-of-war — fun amusement.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'当時の招待状、分厚い紙で、上質だったわ。',en:"Then-invites — thick paper, premium.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'先人の流儀、守ってきたな、二人で。',en:"Ancestral way — kept, two of us.",style:'Soft.'},
    {speaker:'sachiko_grandma',jp:'新郎、緊張してた、覚えてる?',en:"Groom — nervous, remember?",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'新婦、お前、お嫁さん姿、忘れない。',en:"Bride — you, bride-look, unforgotten.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃の写真、狐のお面、被ってたわね。',en:"Youth photo — fox mask worn.",style:'Warm close.'},
  ]},
  {id:'conv_06480',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan an event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、はがきDM、新規客に出そか。',en:"Aoi-san — postcard DM to new customers?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。創業記念、盛大に祝う、企画ですね。',en:"Yes. Founding anniversary — grand celebration plan.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'体験イベントで、綱引き大会も、面白いな。',en:"Experience event — tug-of-war fun.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'メニュー帳、分厚い記念版、出しましょう。',en:"Menu — thick memorial edition release.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'先人のレシピ、店で復活、ええなあ。',en:"Ancestral recipes — shop-revival, nice.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'結婚式コラボ、新郎向けのコース、開発します。',en:"Wedding collab — groom-course developed.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'新婦向けには、エレガントなスイーツ、用意しよ。',en:"For brides — elegant sweets prepared.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'お稲荷さん由来、狐モチーフのグッズ、店頭で販売します。',en:"Inari-derived fox-motif goods — storefront sale.",style:'Warm close.'},
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

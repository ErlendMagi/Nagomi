import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_302 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['義理','絶好','いたずら','惚れ','忘年会','着せ','クビ','真っ先']
const B_T = ['来訪','実業','セットアップ','省エネ','一線','下位','浮かび','帳簿']
const C_T = ['模擬','移入','膨張','大久保','重点的','流域','妨げる','動力']
const D_T = ['炭酸','聖地','祝う','種目','花束','バラエティ','拍子','ベートーヴェン']

const data = [
  // A
  {id:'conv_06001',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat about life and love',lines:[
    {speaker:'mei_romantic',jp:'昨日、義理の母と、しっかり話せたの。',en:"Yesterday — talked properly with my mother-in-law.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'絶好の機会、活かしたね。',en:"Best chance — seized it.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'娘が、いたずらしちゃったみたい、保育園で。',en:"My daughter pranked at daycare, it seems.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'子供あるあるよ。私、若い頃、先輩に惚れたことあった。',en:"Kid-classic. I once fell for a senior in youth.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'今度の忘年会、夫と参加するか迷ってる。',en:"This year-end party — wondering if I go with my husband.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'娘に新しいワンピース着せて、一緒に行こうよ。',en:"Dress your daughter in a new dress, go together.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'夫、もしクビになったら、と考えると不安。',en:"If my husband got laid off, I'd worry.",style:'Vulnerable.'},
    {speaker:'aoi_barista',jp:'いざという時、真っ先に頼って。',en:"In a crunch, lean on me first.",style:'Warm close.'},
  ]},
  {id:'conv_06002',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple reflects',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、義理の父にも、礼を尽くしたな。',en:"In youth — paid respects to my father-in-law too.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。あなたとの結婚、絶好の選択だったわ。',en:"Yes. Marrying you — the best choice.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'孫のいたずらで、毎日笑ってる。',en:"Grandkid's pranks — laughing daily.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'若かりし頃、あなたに惚れた瞬間、覚えてるわ。',en:"In youth — moment I fell for you, remembered.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'忘年会、近所の仲間と毎年やっていた。',en:"Year-end parties with neighbors annually.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'子供たちに、いつも晴れ着、着せた。',en:"Dressed the kids in formal attire every time.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'バブル崩壊で、私もクビ寸前だったな。',en:"Bubble collapse — I almost got laid off too.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'真っ先にあなたを支えると決めていたわ。',en:"Decided to support you first of all.",style:'Warm close.'},
  ]},
  {id:'conv_06003',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat about social life',lines:[
    {speaker:'sakura_teen',jp:'うちの親、義理を重んじる人だから、礼儀作法、厳しい。',en:"My parents are duty-minded — strict on manners.",style:'Wry teen.'},
    {speaker:'riku_teen',jp:'運動会、絶好の天気だったよな。',en:"Sports day — perfect weather.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'隣のクラス、いたずらが過ぎて、先生に叱られた。',en:"Next class — overdid pranks, scolded.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お前、あの先輩に惚れてないか?',en:"You — falling for that senpai, no?",style:'Wry probe.'},
    {speaker:'sakura_teen',jp:'違うわよ!部活の忘年会、誘われたけど。',en:"Not at all! Club's year-end party — invited though.",style:'Animated.'},
    {speaker:'riku_teen',jp:'妹に、新しいセーター着せてあげるって、母さん言ってた。',en:"Mom said she'll dress my sis in a new sweater.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'バイト先、店長交代でクビかも、と先輩が言ってた。',en:"Part-time — store-manager change; senpai said might be cut.",style:'Subdued.'},
    {speaker:'riku_teen',jp:'真っ先に、新しい仕事、紹介してあげる。',en:"I'll intro a new job first thing.",style:'Warm close.'},
  ]},
  {id:'conv_06004',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、義理のおじちゃん、お正月、来るんだよね?',en:"Mom, our duty-uncle comes for New Year?",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'うん。寒くないけど、絶好のお正月日和ね。',en:"Yes. Not cold — perfect New Year weather.",style:'Warm.'},
    {speaker:'sho_child',jp:'お友達のいたずらで、教室、汚れちゃった。',en:"Friend's prank dirtied the classroom.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'年下の子に惚れちゃう絵本、また借りてきたの?',en:"Borrowed the picture book where they fall for the younger again?",style:'Bright.'},
    {speaker:'sho_child',jp:'幼稚園で、簡単な忘年会みたいなパーティーするって。',en:"Kindergarten — simple year-end-style party.",style:'Excited.'},
    {speaker:'yumiko_mom',jp:'七五三みたいに、着物を着せてあげようか。',en:"Like Shichigosan — let me dress you in kimono?",style:'Tender.'},
    {speaker:'sho_child',jp:'お父さんがクビになったら、心配だな。',en:"If Dad were fired — worried.",style:'Soft.'},
    {speaker:'yumiko_mom',jp:'真っ先に、家族みんなで、お父さん支えるよ。',en:"First of all, family supports Dad together.",style:'Warm close.'},
  ]},
  {id:'conv_06005',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai chats with a teen',lines:[
    {speaker:'ren_uni',jp:'桜、義理を重んじる家、最近少ないよな。',en:"Sakura, duty-minded households are rarer now.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。先輩、今日、絶好の散歩日和ですね。',en:"Yes. Senpai, perfect walking weather today.",style:'Bright.'},
    {speaker:'ren_uni',jp:'公園の池、子供がいたずらしてたな。',en:"Park pond — kids were pranking.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'絵本のキャラに惚れてた幼少期、思い出します。',en:"Childhood — fell for picture-book characters.",style:'Wistful.'},
    {speaker:'ren_uni',jp:'今度のサークル忘年会、参加するんだろ?',en:"Coming year-end club party?",style:'Casual.'},
    {speaker:'sakura_teen',jp:'はい。ドレスコード、母が着せてくれるみたい。',en:"Yes. Dress code — mom'll help dress me.",style:'Soft.'},
    {speaker:'ren_uni',jp:'バイト先、急にクビ宣告される時代じゃないが、注意して。',en:"Era of sudden firings is gone, but be careful.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'真っ先に、先輩に相談します。',en:"First of all — I'll consult you, senpai.",style:'Warm close.'},
  ]},

  // B
  {id:'conv_06006',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews preparations for a VIP visit',lines:[
    {speaker:'hiroshi_boss',jp:'海外来訪者、来週着く予定だ。',en:"Overseas visitor arrives next week.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。実業界の重鎮ですから、対応万全にします。',en:"Yes. Business-world heavyweight — full prep.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'会議室のセットアップ、急げ。省エネ仕様の照明、確認しろ。',en:"Meeting-room setup — rush. Check energy-saving lights.",style:'Direction.'},
    {speaker:'kenji_office',jp:'各部門、一線級の人材を集めました。',en:"Each section — frontline talent gathered.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'下位部署の意見も浮かび上がらせろ。',en:"Surface lower-section voices too.",style:'Direction.'},
    {speaker:'kenji_office',jp:'帳簿、最新の数字、用意しています。',en:"Ledgers — latest figures ready.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'よし、進めよう。',en:"Good — proceed.",style:'Close.'},
  ]},
  {id:'conv_06007',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers prepare a vendor visit',lines:[
    {speaker:'yuki_office',jp:'取引先来訪、明日午前ね。',en:"Vendor visit — tomorrow AM.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。実業出身の社長、礼節重視です。',en:"Yes. Industry-veteran president — values courtesy.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'プロジェクター、セットアップ済み?',en:"Projector — set up?",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。省エネモードで運用しています。',en:"Yes. Energy-saving mode.",style:'Update.'},
    {speaker:'yuki_office',jp:'予算、一線越えないよう、下位項目も精査して。',en:"Budget — don't cross the line; scrutinize lower items too.",style:'Direction.'},
    {speaker:'kenji_office',jp:'新案、浮かび上がらせて、提案できそうです。',en:"New ideas — can surface and propose.",style:'Bright.'},
    {speaker:'yuki_office',jp:'帳簿の数字、ダブルチェックを。',en:"Ledger figures — double-check.",style:'Close.'},
  ]},
  {id:'conv_06008',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、企業の来訪対応、礼節と機能性、両立だ。',en:"Ren, visitor handling — courtesy and function, both.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'実業界の慣行、勉強します。',en:"Industry customs — I'll learn.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'会議室のセットアップ、省エネを忘れるな。',en:"Meeting-room setup — don't forget energy-saving.",style:'Direction.'},
    {speaker:'ren_uni',jp:'一線級の人材と、下位部署の連携、どう取りますか。',en:"Frontline talent and lower sections — how do you link?",style:'Curious.'},
    {speaker:'hiroshi_boss',jp:'浮かび上がる課題、その都度処理する。帳簿管理、地味だが重要だ。',en:"Surfacing issues — handle each time. Ledger mgmt — quietly vital.",style:'Reflective close.'},
  ]},
  {id:'conv_06009',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs an exec on VIP security',lines:[
    {speaker:'takeda_officer',jp:'海外来訪者、警察庁でも認知しています。',en:"Overseas visitor — NPA-aware.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。実業界の重鎮で、安全配慮、最優先です。',en:"Yes. Industry heavyweight — safety paramount.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警備のセットアップ、省エネ系の機器も使用しますか。',en:"Security setup — using energy-saving gear too?",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。一線級の警備員、下位スタッフへの指示、共有しています。',en:"Yes. Frontline guards — instructions shared with lower staff too.",style:'Update.'},
    {speaker:'takeda_officer',jp:'帳簿、不審な動きが浮かび上がらないか、確認します。',en:"Ledgers — check for suspicious surfacing.",style:'Procedural close.'},
  ]},
  {id:'conv_06010',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors a current boss',lines:[
    {speaker:'hiroshi_elder',jp:'来訪者対応、若い頃から鍛えた。',en:"Visitor handling — trained since youth.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。実業界の重鎮には、特別な配慮、必要ですね。',en:"Yes. Industry heavyweights need special care.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'会議のセットアップ、省エネに気を配ったな、当時から。',en:"Meeting setup — minded energy-saving back then too.",style:'Reflective.'},
    {speaker:'hiroshi_boss',jp:'一線級の人材、若手も下位から育てています。',en:"Frontline talent — bringing up youth from lower ranks too.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'問題が浮かび上がる前に、帳簿管理を徹底しろ。',en:"Before issues surface — strict ledger mgmt.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06011',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher and student discuss a paper on infrastructure',lines:[
    {speaker:'asuka_teacher',jp:'論文、模擬実験、丁寧でしたね。',en:"Paper — simulations were careful.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。外来種の移入が、生態系に及ぼす影響、論じました。',en:"Yes. Discussed alien-species transfer's ecosystem impact.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'人口の膨張も、地域差が出ていますね。',en:"Population expansion — regional differences too.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'大久保地区の事例、重点的に取り上げました。',en:"Okubo-district cases — focused on.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'河川流域の調査、川の生物多様性を妨げる要因、扱っていますね。',en:"River-basin survey — factors hindering biodiversity, covered.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'動力源の選択、政策に与えた影響、別章で論じます。',en:"Energy-source choices' policy impact — separate chapter.",style:'Curious close.'},
  ]},
  {id:'conv_06012',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a reporter about a regional issue',lines:[
    {speaker:'takeda_officer',jp:'地域防災、模擬訓練を定期実施しています。',en:"Local disaster prep — drills regular.",style:'Calm.'},
    {speaker:'ren_uni',jp:'外国人の移入、住民との接点、増えていますね。',en:"Foreign-resident transfer — community touchpoints rising.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。観光膨張、対応が必要です。',en:"Yes. Tourism expansion — response needed.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'大久保署、重点的に巡回されていますか。',en:"Okubo precinct — focused patrols?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。河川流域の犯罪、地域協議会と協力します。',en:"Yes. River-basin crime — partner with local councils.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'地域経済を妨げる要素、警察も把握していますか。',en:"Local-economy-hindering factors — police aware?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。動力としての地域力、引き続き支えます。',en:"Yes. Community as engine — continue support.",style:'Firm close.'},
  ]},
  {id:'conv_06013',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher discusses a project with a teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、自由研究、模擬国連、興味深いテーマね。',en:"Sakura, mock-UN — intriguing theme.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。移入文化と日本社会、対話を扱いました。',en:"Yes. Imported cultures vs. Japanese society — dialogue.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'都市の膨張、大久保地区の多文化、章として整理されていますね。',en:"City expansion — Okubo's multiculturalism organized as a chapter.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'重点的に取り上げた流域開発、課題が多くて。',en:"Focused basin-development — many challenges.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'発展を妨げる要素、丁寧に分析していますね。',en:"Hindering factors — carefully analyzed.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'動力源の議論、最終章にまとめます。',en:"Energy-source debate — final chapter.",style:'Earnest close.'},
  ]},
  {id:'conv_06014',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews a regional expansion plan',lines:[
    {speaker:'hiroshi_boss',jp:'新工場、模擬運用、結果は?',en:"New plant — mock-ops results?",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。資材の移入ルート、最適化済みです。',en:"Yes. Material-transfer routes optimized.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'生産膨張、需要見極めて、慎重に。',en:"Production expansion — careful, by demand.",style:'Direction.'},
    {speaker:'kenji_office',jp:'大久保物流センター、重点的に強化します。',en:"Okubo logistics center — focused reinforcement.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'河川流域の規制、操業を妨げる要素になり得る。',en:"River-basin regulation can hinder ops.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'動力源も、再生可能エネルギーで検討中です。',en:"Energy — renewable under review.",style:'Update close.'},
  ]},
  {id:'conv_06015',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public-health planning',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、感染症の模擬シミュレーション、現場で実施しています。',en:"Ren, infectious-disease simulations run in the field.",style:'Calm.'},
    {speaker:'ren_uni',jp:'外国からの移入症例、増加傾向ですか。',en:"Imported cases from abroad — rising trend?",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。地域膨張、医療負担も増えています。',en:"Yes. Regional expansion — medical load up.",style:'Patient.'},
    {speaker:'ren_uni',jp:'大久保エリア、重点的に対応されていますか。',en:"Okubo area — focused response?",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。河川流域の患者、迅速対応します。',en:"Yes. Basin-area patients — swift response.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医療提供を妨げる要素、解消できますか。',en:"Factors hindering medical provision — resolvable?",style:'Curious.'},
    {speaker:'saito_doctor',jp:'地域の動力と協働して、進めます。',en:"Working with the community as engine.",style:'Firm close.'},
  ]},

  // D
  {id:'conv_06016',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends plan a cultural day',lines:[
    {speaker:'mei_romantic',jp:'今日のお茶、炭酸入りにしようかな。',en:"Today — carbonated tea?",style:'Bright.'},
    {speaker:'aoi_barista',jp:'夏の聖地巡礼、計画立ててるんでしょ?',en:"Summer-sacred pilgrimage — planning?",style:'Soft.'},
    {speaker:'mei_romantic',jp:'うん。誕生日を祝う計画、ついで。',en:"Yes. Adding a birthday celebration.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'競技の種目、何参加するの?',en:"What events are you in?",style:'Curious.'},
    {speaker:'mei_romantic',jp:'去年、優勝の花束、写真に撮ってもらったの。',en:"Last year — got photo with winning bouquet.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'夜は、バラエティ番組観ながら、まったり。',en:"At night — variety show, chill.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'BGM、心地よい拍子のジャズで。',en:"BGM — gentle-beat jazz.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'ベートーヴェンの交響曲、たまには聴きたいね。',en:"Beethoven symphony — sometimes want to listen.",style:'Warm close.'},
  ]},
  {id:'conv_06017',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher and student discuss music',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、論文、音楽心理学、面白い切り口ですね。',en:"Ren, paper — music-psychology, fresh angle.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。炭酸飲料を飲みながらリラックスする心理効果、扱いました。',en:"Yes. Carbonation while relaxing — psychological effect.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'聖地巡礼との関連、現代の音楽ファンの行動原理ですね。',en:"Sacred-pilgrimage link — modern-music-fan behavior.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'記念日を祝う場面で、音楽が果たす役割、章にしました。',en:"Music's role in celebration scenes — chapterized.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'演奏会の種目、多様化していますね。',en:"Concert events — diversifying.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'観客が花束を贈る慣習、海外との比較もしました。',en:"Audience-bouquet customs — compared overseas too.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'バラエティ番組の音楽コーナーや、拍子の安定性、現代研究ですね。',en:"TV-variety music corners, rhythm stability — modern research.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'ベートーヴェンの初演からの伝統、章末で論じます。',en:"Beethoven-premiere traditions — close chapter.",style:'Earnest close.'},
  ]},
  {id:'conv_06018',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat about hobbies',lines:[
    {speaker:'sakura_teen',jp:'炭酸飲料、最近、レモン味にハマってる。',en:"Carbonated drinks — into lemon flavor lately.",style:'Bright.'},
    {speaker:'riku_teen',jp:'アニメの聖地巡礼、夏休みに行こう。',en:"Anime sacred-pilgrimage — summer.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'今度の合格、祝うパーティーするって、家族が。',en:"Family wants to throw a pass-the-test celebration.",style:'Animated.'},
    {speaker:'riku_teen',jp:'運動会、種目、どれエントリーした?',en:"Sports-day events — which did you enter?",style:'Probe.'},
    {speaker:'sakura_teen',jp:'優勝者に花束贈る役、引き受けたの。',en:"Took the winner-bouquet role.",style:'Bright.'},
    {speaker:'riku_teen',jp:'帰宅したら、バラエティ番組、観るのが楽しみ。',en:"Home — looking forward to variety shows.",style:'Cheerful.'},
    {speaker:'sakura_teen',jp:'ダンスの拍子、上手く取れない曲もあるよね。',en:"Some songs — hard to catch the beat.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'音楽の宿題、ベートーヴェン特集だ。',en:"Music homework — Beethoven feature.",style:'Wry close.'},
  ]},
  {id:'conv_06019',cluster:'D',ambient:'living_room_quiet',cast:['ryosuke_dad','sho_child'],targets:D_T,scenario:'A dad and son spend time together',lines:[
    {speaker:'ryosuke_dad',jp:'翔、お父さん、晩酌に炭酸水入れる派なんだ。',en:"Sho, Dad mixes carbonated water in evening drinks.",style:'Easy.'},
    {speaker:'sho_child',jp:'うん!今度、アニメ聖地に連れて行ってくれる?',en:"Yes! Take me to an anime sacred place?",style:'Eager child.'},
    {speaker:'ryosuke_dad',jp:'うん。夏休みに、誕生日も祝うかね。',en:"Yes. Summer — celebrate birthday too?",style:'Warm.'},
    {speaker:'sho_child',jp:'運動会、走り種目で頑張る!',en:"Sports day — give my best in running events!",style:'Bright.'},
    {speaker:'ryosuke_dad',jp:'お母さん、優勝者用に花束、用意してくれた。',en:"Mom prepped the winner's bouquet.",style:'Cheerful.'},
    {speaker:'sho_child',jp:'夜、バラエティ番組、一緒に観ようね。',en:"Watch variety shows at night together.",style:'Animated.'},
    {speaker:'ryosuke_dad',jp:'うん。拍子が速い曲、踊ってみせて。',en:"Yes. Fast-beat songs — show me your dance.",style:'Wry.'},
    {speaker:'sho_child',jp:'お母さん、ベートーヴェンのピアノ、得意なんだよね。',en:"Mom's good at Beethoven on piano.",style:'Reflective close.'},
  ]},
  {id:'conv_06020',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan an anniversary event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、創業記念日に、炭酸シャンパンで乾杯しよか。',en:"Aoi-san, anniversary — sparkling-champagne toast?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。アニメ聖地ファンの常連さんも、祝う側で招きましょう。',en:"Yes. Anime-pilgrimage regulars — invite as celebrants.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'コンテスト、種目別に景品を変えよう。',en:"Contest — vary prizes by event.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'優勝者には花束、サブも華やかに。',en:"Winner — bouquet; runners-up — flashy too.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'BGMは、バラエティ感のある選曲で行こ。',en:"BGM — variety-tinged picks.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'踊りやすい拍子の曲、メインに。',en:"Easy-beat songs — main rotation.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'閉店前、ベートーヴェンで締めるんも、ええなあ。',en:"Close — wrap with Beethoven; nice.",style:'Reflective close.'},
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_291 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['山崎','藤原','松井','青山','坂本','近藤','石井','中島']
const B_T = ['イチロー','ホンダ','野村','三浦','岡本','宮本','上田','松田']
const C_T = ['暗殺','強盗','誘拐','人質','テロリスト','右翼','左翼','慶']
const D_T = ['中山','日系','白人','ロバート','リチャード','ルイス','フランク','アブ']

const data = [
  // A
  {id:'conv_05781',cluster:'A',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:A_T,scenario:'A boss reviews his team',lines:[
    {speaker:'hiroshi_boss',jp:'プロジェクトの主担当、山崎さんと藤原さんに決めた。',en:"Project leads — decided: Yamazaki-san and Fujiwara-san.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。サポートに松井さん、青山さん。',en:"Yes. Supporting: Matsui-san, Aoyama-san.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'坂本さん、近藤さんは、地域営業に回す。',en:"Sakamoto-san, Kondo-san — regional sales.",style:'Direction.'},
    {speaker:'kenji_office',jp:'石井さん、中島さんは、本社で経理を担当します。',en:"Ishii-san, Nakajima-san — HQ accounting.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'よし、進めよう。',en:"Good, proceed.",style:'Close.'},
  ]},
  {id:'conv_05782',cluster:'A',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:A_T,scenario:'Two managers discuss a school PTA event',lines:[
    {speaker:'yuki_office',jp:'子供のクラス、PTAの連絡網、山崎さんと藤原さんが幹事。',en:"My kid's class — PTA contact group; Yamazaki-san and Fujiwara-san chair.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'うちは松井さんと青山さん。皆さん熱心ですよね。',en:"Ours is Matsui-san and Aoyama-san. Everyone's keen.",style:'Soft.'},
    {speaker:'yuki_office',jp:'運動会、坂本さんが司会、近藤さんが進行担当。',en:"Sports day — Sakamoto-san MC, Kondo-san on flow.",style:'Casual.'},
    {speaker:'kenji_office',jp:'石井さんが、応援団指導も兼ねてくれてる。',en:"Ishii-san also coaches cheering.",style:'Reflective.'},
    {speaker:'yuki_office',jp:'中島さん、写真係でいつもお世話になります。',en:"Nakajima-san always handles photography.",style:'Warm close.'},
  ]},
  {id:'conv_05783',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends discuss a wedding guest list',lines:[
    {speaker:'mei_romantic',jp:'結婚式の招待状、まず山崎さんと藤原さんに送る。',en:"Wedding invites — first to Yamazaki and Fujiwara.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'松井さんも、青山さんも、楽しみにしてたよね。',en:"Matsui and Aoyama both look forward.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'うん。坂本さんは、スピーチもお願いしようか。',en:"Yes. Maybe ask Sakamoto for a speech.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'近藤さんは、受付を引き受けるって。',en:"Kondo-san agreed to handle reception.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'石井さんと中島さんも、テーブル隣同士にしようね。',en:"Seat Ishii-san and Nakajima-san next to each other.",style:'Warm close.'},
  ]},
  {id:'conv_05784',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple plans a class reunion',lines:[
    {speaker:'hiroshi_elder',jp:'同窓会、山崎、藤原、来てくれるって連絡あった。',en:"Reunion — Yamazaki and Fujiwara confirmed.",style:'Bright.'},
    {speaker:'sachiko_grandma',jp:'松井さんと青山さんも、奥様連れで来るって。',en:"Matsui and Aoyama with their wives too.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'坂本くん、最近、声をかけてなかったから、嬉しいよ。',en:"Sakamoto — hadn't called in a while, glad to hear.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'近藤さんは、体調どうかしら。',en:"Wonder how Kondo-san's feeling.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'石井くん、車椅子になったって聞いた。',en:"Heard Ishii is now in a wheelchair.",style:'Subdued.'},
    {speaker:'sachiko_grandma',jp:'中島さんに、迎えを頼みましょうね。',en:"Let's ask Nakajima-san for pickup.",style:'Warm close.'},
  ]},
  {id:'conv_05785',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat about classmates',lines:[
    {speaker:'sakura_teen',jp:'クラスのメンバー、山崎さんは委員長、藤原さんは副委員長。',en:"Class — Yamazaki is class rep, Fujiwara vice.",style:'Animated teen.'},
    {speaker:'riku_teen',jp:'松井、青山、二人とも体育会系で頼れる。',en:"Matsui and Aoyama — both sporty, reliable.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'坂本さんが文化祭の主役。近藤さんが舞台美術。',en:"Sakamoto's the lead at the festival. Kondo on stagecraft.",style:'Bright.'},
    {speaker:'riku_teen',jp:'石井先生、新しく担任になったよな。',en:"Ishii-sensei is the new homeroom.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'中島さんは、放送部の編集が得意らしい。',en:"Nakajima-san is great at broadcast-club editing.",style:'Curious close.'},
  ]},

  // B
  {id:'conv_05786',cluster:'B',ambient:'cafe_quiet_chatter',cast:['ryosuke_dad','sho_child'],targets:B_T,scenario:'A dad and son watch sports highlights',lines:[
    {speaker:'sho_child',jp:'お父さん、イチローのプレー、伝説だね。',en:"Dad, Ichiro's plays are legendary.",style:'Awe child.'},
    {speaker:'ryosuke_dad',jp:'ホンダ自動車のCM、息子のヒーローだったな。',en:"Honda Motor's ad — was your hero, son.",style:'Warm dad.'},
    {speaker:'sho_child',jp:'野村監督の戦術、本にも書いてあったよ。',en:"Coach Nomura's tactics — in books too.",style:'Animated.'},
    {speaker:'ryosuke_dad',jp:'三浦選手、若手のホープだ。',en:"Miura — young hope.",style:'Casual.'},
    {speaker:'sho_child',jp:'岡本のホームラン、すごかった!',en:"Okamoto's homer was amazing!",style:'Excited.'},
    {speaker:'ryosuke_dad',jp:'宮本のキャプテンシーも光ってたな。',en:"Miyamoto's captaincy shone too.",style:'Reflective.'},
    {speaker:'sho_child',jp:'コーチの上田さん、優しい指導で有名だよね。',en:"Coach Ueda is famed for kind coaching.",style:'Bright.'},
    {speaker:'ryosuke_dad',jp:'松田の守備、地味だが、勝利を支えてた。',en:"Matsuda's quiet defense supported wins.",style:'Warm close.'},
  ]},
  {id:'conv_05787',cluster:'B',ambient:'cafe_quiet_chatter',cast:['riku_teen','sakura_teen'],targets:B_T,scenario:'Two teens chat about pro sports',lines:[
    {speaker:'riku_teen',jp:'イチローのドキュメント、また観たい。',en:"Wanna rewatch Ichiro's documentary.",style:'Casual teen.'},
    {speaker:'sakura_teen',jp:'うん。ホンダの自伝、貸してあげるよ。',en:"Yeah. Lending you Honda's autobio.",style:'Bright.'},
    {speaker:'riku_teen',jp:'野村さんの解説、いつも鋭いよな。',en:"Nomura-san's commentary is always sharp.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'三浦投手の球速、最近どう?',en:"Pitcher Miura's velocity lately?",style:'Curious.'},
    {speaker:'riku_teen',jp:'岡本のフォーム、見惚れる。',en:"Okamoto's form — mesmerizing.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'宮本のキャッチング、解説席で皆褒めてた。',en:"Miyamoto's catching — everyone in commentary booth praised.",style:'Animated.'},
    {speaker:'riku_teen',jp:'上田の戦略、相手チームに研究されまくりだね。',en:"Ueda's strategy gets studied like crazy.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'松田、ベテランの安定感あるよね。',en:"Matsuda — veteran calm.",style:'Cheerful close.'},
  ]},
  {id:'conv_05788',cluster:'B',ambient:'cafe_quiet_chatter',cast:['ren_uni','mei_romantic'],targets:B_T,scenario:'A uni student and a friend discuss a sports column',lines:[
    {speaker:'ren_uni',jp:'最新の記事、イチローと、ホンダ創業者の対比、面白い視点だ。',en:"Latest piece — Ichiro vs. Honda's founder, fresh angle.",style:'Engaged.'},
    {speaker:'mei_romantic',jp:'野村さんの引退表明、ネットでも話題だね。',en:"Nomura-san's retirement is buzzing online.",style:'Soft.'},
    {speaker:'ren_uni',jp:'三浦選手のインタビュー、誌面の柱だな。',en:"Miura's interview is the issue's spine.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'岡本選手、SNSでファン層が広い。',en:"Okamoto's SNS fan base is broad.",style:'Bright.'},
    {speaker:'ren_uni',jp:'宮本キャプテンの言葉、後輩への影響力すごい。',en:"Captain Miyamoto's words have huge influence on juniors.",style:'Probe.'},
    {speaker:'mei_romantic',jp:'上田監督の交代論、議論を呼んでる。',en:"Coach Ueda's replacement debate is loud.",style:'Animated.'},
    {speaker:'ren_uni',jp:'松田の守備統計、地味だが優秀だ。',en:"Matsuda's defensive stats — quietly stellar.",style:'Reflective close.'},
  ]},
  {id:'conv_05789',cluster:'B',ambient:'stadium_distant_crowd',cast:['daichi_kansai','ryosuke_dad'],targets:B_T,scenario:'Two dads at a baseball game',lines:[
    {speaker:'daichi_kansai',jp:'今日のスタメン、若手の三浦、岡本、入っとるな。',en:"Today's lineup has rookies Miura and Okamoto.",style:'Friendly Kansai.'},
    {speaker:'ryosuke_dad',jp:'はい。野村さんの起用方針、若手に厚いですよね。',en:"Yes. Nomura-san leans into youth.",style:'Easy.'},
    {speaker:'daichi_kansai',jp:'宮本がベンチで指示出してる。さすが、キャプテンや。',en:"Miyamoto giving signs from the bench — true captain.",style:'Warm Kansai.'},
    {speaker:'ryosuke_dad',jp:'上田コーチも、サインを送ってますね。',en:"Coach Ueda sending signals too.",style:'Calm.'},
    {speaker:'daichi_kansai',jp:'松田、ベテラン魂で、ええ仕事しとる。',en:"Matsuda — veteran spirit, great work.",style:'Animated.'},
    {speaker:'ryosuke_dad',jp:'いつかイチローみたいな選手が、ホンダ系列のチームから出るんでしょうね。',en:"Someday an Ichiro will come from a Honda-affiliated team.",style:'Reflective close.'},
  ]},
  {id:'conv_05790',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern on sportswriting',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、スポーツ取材、イチロー級は別格として、地道に取材力を鍛えろ。',en:"Ren, in sports — Ichiro-class is rare; train your craft steadily.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。ホンダ系のレーシングチーム、来週インタビュー予定です。',en:"Yes. Honda-affiliated racing — interview next week.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'野村元監督、御縁あるから紹介できる。',en:"Ex-coach Nomura — I have ties; can introduce.",style:'Direction.'},
    {speaker:'ren_uni',jp:'三浦投手、岡本選手も、若手特集で取り上げたいです。',en:"Pitchers Miura and Okamoto for the youth feature.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'宮本キャプテン、上田コーチ、松田ベテラン、それぞれの視点を取れ。',en:"Captain Miyamoto, Coach Ueda, Vet Matsuda — get each perspective.",style:'Close.'},
  ]},

  // C
  {id:'conv_05791',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a uni reporter about a complex case',lines:[
    {speaker:'takeda_officer',jp:'本件、暗殺未遂と当初報じられましたが、強盗事件と判明しました。',en:"This case — initially reported as assassination attempt; confirmed robbery.",style:'Calm.'},
    {speaker:'ren_uni',jp:'誘拐疑いも一時持たれた、と聞きました。',en:"Heard kidnapping was suspected briefly.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。一時、人質を取った可能性が議論されていました。',en:"Yes. Hostage-taking was discussed.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'当時の極右、右翼系の集会との関連も噂されてましたよね。',en:"Far-right rallies were rumored linked.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'警察は、テロリストの関与を否定しています。',en:"Police deny terrorist involvement.",style:'Firm.'},
    {speaker:'ren_uni',jp:'左翼系団体への調査も、進められましたか。',en:"Left-wing groups also under inquiry?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'並行して、慶應大の研究者からも、社会学的所見を頂きました。',en:"In parallel, sociologists from Keio offered observations.",style:'Informative close.'},
  ]},
  {id:'conv_05792',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses a political-history documentary',lines:[
    {speaker:'asuka_teacher',jp:'昨夜のドキュメンタリー、戦前の暗殺事件、丁寧に扱っていましたね。',en:"Last night's doc handled prewar assassinations carefully.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。強盗団とテロリストの境目、歴史学的に難しい論点ですね。',en:"Yes. Robbery-bands vs. terrorists — a hard historiographic line.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'当時の右翼、左翼、両方からの暴力、研究されています。',en:"Violence from both right and left then is studied.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'人質を取る誘拐型の事件も、社会派文学に影響を与えました。',en:"Hostage-kidnap-type cases influenced social-issue literature too.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'慶應の図書館に、当時の貴重資料があります。',en:"Keio's library has rare period materials.",style:'Reflective close.'},
  ]},
  {id:'conv_05793',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss discusses a corporate security review',lines:[
    {speaker:'hiroshi_boss',jp:'警備会社報告で、暗殺予告は無いが、強盗対策、強化と。',en:"Security firm — no assassination threats but boost robbery prep.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。誘拐想定の訓練、社員に対し、人質シミュレーションも実施します。',en:"Yes. Kidnap-drill, hostage simulation for staff too.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'テロリスト想定、海外赴任予定者は特に重点的に。',en:"Terrorist scenarios — heavy focus on overseas-bound staff.",style:'Direction.'},
    {speaker:'kenji_office',jp:'国内では、右翼や左翼の街宣車対応も、マニュアル化中。',en:"Domestic — right- and left-wing van responses being manualized.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'慶應大の危機管理研究室にも、助言を仰ごう。',en:"Consult Keio's crisis-management lab too.",style:'Close.'},
  ]},
  {id:'conv_05794',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:C_T,scenario:'A police officer briefs a corporate manager about regional risk',lines:[
    {speaker:'takeda_officer',jp:'本地域、過去に暗殺未遂や強盗の事例ありますが、最近は誘拐がゼロです。',en:"Region — past attempts and robberies, but zero kidnaps lately.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。人質を取る犯罪、強く警戒したい現実です。',en:"Yes. Hostage crimes — we want strong vigilance.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'テロリストではないが、右翼街宣車の活動、増えています。',en:"Not terrorists, but right-wing van activity is up.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'左翼系団体との関係、警察として把握してますか。',en:"Police know left-wing group ties?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。慶應大の専門家とも、共同で分析しています。',en:"Yes. Joint analysis with Keio specialists.",style:'Informative close.'},
  ]},
  {id:'conv_05795',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher and a teen review a high-school history textbook chapter',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、戦中期の暗殺事件、教科書では数行ですが、研究は厚いですよ。',en:"Sakura, wartime assassinations get only a few lines in textbooks, but research is thick.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。強盗的な事件と、誘拐型の脅迫、混在していたんですね。',en:"Yes. Robbery-style and kidnap-threat types coexisted.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'人質を取る団体、テロリストとも呼ばれた時期がありました。',en:"Hostage-taking groups — sometimes called terrorists then.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'右翼、左翼の対立、戦後にも形を変えて続きました。',en:"Right-left tensions continued post-war in shifted form.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'慶應大の歴史学者の論文、参考にしてみては。',en:"Try Keio historians' papers as a reference.",style:'Reflective close.'},
  ]},

  // D
  {id:'conv_05796',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher and student discuss an international film',lines:[
    {speaker:'asuka_teacher',jp:'昨日の映画、主演のロバートさん、好演でしたね。',en:"Yesterday's film — leading Robert was excellent.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。脇役のリチャードとルイス、舞台俳優出身で味があります。',en:"Yes. Supports Richard and Lewis — stage actors, flavorful.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'フランクの撮影監督、白人だけでなく、日系の出演者も主役級に扱う構成、印象的でした。',en:"DOP Frank framed not just white but Japanese-descent actors as leads — striking.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'中山さんの撮影助手も、舞台裏で評価が高いと聞きました。',en:"Camera-assist Nakayama-san is reportedly praised behind the scenes.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'撮影地の野外、アブが多くて大変だったそうですよ。',en:"Outdoor shoots — many horseflies, hard going.",style:'Reflective close.'},
  ]},
  {id:'conv_05797',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends discuss a multicultural festival',lines:[
    {speaker:'mei_romantic',jp:'国際フェス、来日するロバートさん、楽しみ。',en:"International fest — Robert's visit, exciting.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'リチャードさん、ルイスさんも来るんでしょ?',en:"Richard and Lewis coming too?",style:'Soft.'},
    {speaker:'mei_romantic',jp:'うん。仏人のフランクさんは、毎年常連。',en:"Yes. French Frank is a regular each year.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'白人ゲストだけでなく、日系出店者の枠もあるんだ。',en:"Not just white guests — Japanese-descent vendors too.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'中山さんのフード屋台、今年も人気だって。',en:"Nakayama-san's food stall is popular again.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'屋外なので、アブ対策スプレー、配ってるって。',en:"Outdoors — horsefly-repellent spray is handed out.",style:'Practical close.'},
  ]},
  {id:'conv_05798',cluster:'D',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:D_T,scenario:'A uni senpai and a teen plan an outdoor program',lines:[
    {speaker:'ren_uni',jp:'夏のキャンプ、ロバート教授が引率してくれる。',en:"Summer camp — Professor Robert leads.",style:'Engaged senpai.'},
    {speaker:'sakura_teen',jp:'リチャードさん、ルイスさんも、共同で講師ですか。',en:"Richard and Lewis also co-instructors?",style:'Earnest teen.'},
    {speaker:'ren_uni',jp:'うん。仏人のフランクさんは、写真ワークショップだ。',en:"Yes. French Frank runs a photo workshop.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'白人講師ばかりじゃ、と思ってましたが、日系の中山さんも来てくれます。',en:"Was worried only white instructors, but Japanese-descent Nakayama joins too.",style:'Bright.'},
    {speaker:'ren_uni',jp:'森のアブ、虫除け必須だぞ。',en:"Forest horseflies — bug spray mandatory.",style:'Practical close.'},
  ]},
  {id:'conv_05799',cluster:'D',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:D_T,scenario:'A boss reviews an international delegation',lines:[
    {speaker:'hiroshi_boss',jp:'来週の海外視察、ロバート社長と打ち合わせを設定済みだ。',en:"Next week's overseas inspection — Pres. Robert meeting set.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。リチャードさんと、ルイス顧問も同席です。',en:"Yes. Richard-san and Advisor Lewis also attend.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'通訳、フランクさんに頼んでくれ。白人専門の社交辞令も心得てる。',en:"Interpreter — Frank-san; knows white-collar etiquette.",style:'Direction.'},
    {speaker:'kenji_office',jp:'日系顧客のフォロー、中山さんが現地で対応します。',en:"Japanese-descent clients — Nakayama-san handles on site.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'視察地、農場周辺、アブの注意も周知だ。',en:"Inspection — farms, horsefly warning circulated.",style:'Practical close.'},
  ]},
  {id:'conv_05800',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan an international tasting event',lines:[
    {speaker:'daichi_kansai',jp:'試食会、外国人講師、ロバートさんに頼まへんか。',en:"Tasting — invite foreign chef Robert-san?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'いいですね。リチャードさん、ルイスさん、白人系のシェフ仲間も、来てくれるかな。',en:"Lovely. Richard, Lewis — white chef friends might come.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'仏人のフランクさんも、香り担当でええな。',en:"French Frank can lead aromatics.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'日系のお客様向け、中山シェフも、和テイストで参加。',en:"For Japanese-descent guests, Chef Nakayama joins with washoku notes.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'屋外席、アブの季節やから、虫除けスプレー、用意せなあかんで。',en:"Outdoor seats in horsefly season — must prep spray.",style:'Practical close.'},
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

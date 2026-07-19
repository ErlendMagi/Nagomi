import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_301 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['良き','無論','何しろ','冷たく','とっくに','力強い','唐突','明かり']
const B_T = ['人脈','吟味','分岐','社交','やり直し','斬新','持ち帰り','ごまかし']
const C_T = ['唱える','全域','山頂','代償','盛況','訳者','塗料','無謀']
const D_T = ['太陽光','リモコン','ヘア','サマー','水着','コーラス','熱中','ナチュラル']

const data = [
  // A
  {id:'conv_05981',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats in the evening',lines:[
    {speaker:'hiroshi_elder',jp:'長い人生、良き伴侶に恵まれた。',en:"Long life — blessed with a good partner.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'無論、私もよ。',en:"Of course, me too.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'何しろ、若い頃は喧嘩も多かったな。',en:"After all, in youth, lots of fights.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'あなたが冷たく接した日々もあったわね。',en:"Days you treated me coldly too.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'もう、とっくに過去のことだ。',en:"Long since past.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'今は、力強い握手で、毎日始まる。',en:"Now — a firm handshake to start each day.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'唐突に思い出すんだ、若い頃のお前を。',en:"Suddenly I remember your young self.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'明かりを少し落として、ゆっくりお茶飲みましょう。',en:"Dim the light, sip tea slowly.",style:'Warm close.'},
  ]},
  {id:'conv_05982',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends share life updates',lines:[
    {speaker:'mei_romantic',jp:'最近、良き出会いがあったの。',en:"Lately, a good encounter.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'無論、聞きたい!',en:"Of course I want to hear!",style:'Excited.'},
    {speaker:'mei_romantic',jp:'何しろ、彼、優しいの。',en:"For real, he's kind.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'冷たくされて傷ついた過去、もう癒えた?',en:"Past cold treatment — healed?",style:'Probe.'},
    {speaker:'mei_romantic',jp:'うん。とっくに前を向いてる。',en:"Yes. Long since looking forward.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'力強い言葉、聞かせてくれる人?',en:"Someone who speaks powerful words?",style:'Curious.'},
    {speaker:'mei_romantic',jp:'うん。唐突に告白されて、びっくりした。',en:"Yes. Sudden confession — surprised.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'今晩、お祝いに、明かりを暖かくして乾杯しよう。',en:"Tonight — warm light and toast.",style:'Warm close.'},
  ]},
  {id:'conv_05983',cluster:'A',ambient:'park_distant_birds',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk in the evening',lines:[
    {speaker:'sakura_teen',jp:'今日、文化祭、良き思い出になった。',en:"Today's fest — fine memory.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'無論、また来年も頑張ろう。',en:"Of course we go again next year.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'何しろ、最後の演奏、感動した。',en:"After all, the closing performance moved me.",style:'Animated.'},
    {speaker:'riku_teen',jp:'担任、ちょっと冷たく見える時あるよな。',en:"Homeroom seems cold sometimes.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'部活、とっくに引退気分だけどね。',en:"Club — already feeling retirement mode.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お前、力強い演奏だったよ。',en:"Your performance was powerful.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'唐突に、舞台、暗転したのには驚いた。',en:"Sudden stage blackout — startled.",style:'Animated.'},
    {speaker:'riku_teen',jp:'帰り、街の明かりを見ながら歩こう。',en:"Walking back amid city lights.",style:'Warm close.'},
  ]},
  {id:'conv_05984',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom chats with her child at bedtime',lines:[
    {speaker:'sho_child',jp:'ママ、今日、良き一日だった。',en:"Mom, today was a fine day.",style:'Soft child.'},
    {speaker:'yumiko_mom',jp:'無論、嬉しいわ。',en:"Of course, glad.",style:'Warm.'},
    {speaker:'sho_child',jp:'何しろ、運動会、楽しかった。',en:"After all, sports day was fun.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'冷たく拭く湿布、足、つけておくね。',en:"Cold compress on your leg.",style:'Tender.'},
    {speaker:'sho_child',jp:'夕飯、とっくに食べちゃった。',en:"Dinner long since eaten.",style:'Wry.'},
    {speaker:'yumiko_mom',jp:'今日のあなた、力強い走りだったよ。',en:"Today — your run was powerful.",style:'Praise.'},
    {speaker:'sho_child',jp:'唐突に、お友達、ゴールでハグしてきた。',en:"Suddenly, friend hugged me at the goal.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'寝る前、間接照明の明かりにしておくね。',en:"Before bed, dim the indirect light.",style:'Warm close.'},
  ]},
  {id:'conv_05985',cluster:'A',ambient:'street_quiet_distant',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai and a teen walk after a study session',lines:[
    {speaker:'ren_uni',jp:'桜、勉強会、良き同志に出会えたな。',en:"Sakura, study group — good comrades met.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。無論、続けたいです。',en:"Yes. Of course, want to continue.",style:'Earnest teen.'},
    {speaker:'ren_uni',jp:'何しろ、合宿、楽しみだ。',en:"After all, camp is exciting.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'夜は冷たくなる頃なので、上着、持参します。',en:"Nights get cold — bringing a jacket.",style:'Practical.'},
    {speaker:'ren_uni',jp:'夏休み、とっくに終わってる気分だな。',en:"Summer already feels over.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'最後の挨拶、力強い励まし、嬉しかったです。',en:"Last greeting — powerful encouragement felt good.",style:'Bright.'},
    {speaker:'ren_uni',jp:'唐突な変更、こちらでも対応するよ。',en:"Sudden changes — I'll handle this side.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'駅前の明かり、ロマンチックですね。',en:"Station-front light is romantic.",style:'Wistful close.'},
  ]},

  // B
  {id:'conv_05986',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews business development',lines:[
    {speaker:'hiroshi_boss',jp:'今期、人脈を活かす案件を増やせ。',en:"This term — leverage networks for more deals.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。各提案、慎重に吟味します。',en:"Yes. Carefully scrutinize each proposal.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'戦略の分岐点、見極めろ。',en:"Strategic forks — discern.",style:'Direction.'},
    {speaker:'kenji_office',jp:'役員の社交シーンでも、関係構築を進めます。',en:"At exec social events — also relationship-building.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'失敗案件、やり直し検討。斬新な企画、優先しろ。',en:"Failed deals — consider redo. Prioritize fresh proposals.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。資料、社外への持ち帰り厳禁です。',en:"Yes. No external takeaway of materials.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'ごまかしの利かない時代だ。',en:"It's an era no longer tolerant of deception.",style:'Decisive close.'},
  ]},
  {id:'conv_05987',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss client work',lines:[
    {speaker:'yuki_office',jp:'クライアント開拓、人脈、活用しよう。',en:"Client outreach — leverage networks.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。提案書、文言を丁寧に吟味します。',en:"Yes. Carefully scrutinize proposal wording.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'プロジェクトの分岐、月内に決めよう。',en:"Project forks — decide within the month.",style:'Direction.'},
    {speaker:'kenji_office',jp:'社交イベントの企画も、進めます。',en:"Social-event planning — proceeding.",style:'Update.'},
    {speaker:'yuki_office',jp:'昨年の失敗、やり直し版で挽回したいね。',en:"Last year's miss — recover via redo.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'斬新なアイデア、社内コンペでも集まっています。',en:"Fresh ideas — gathering at internal competitions.",style:'Bright.'},
    {speaker:'yuki_office',jp:'資料の持ち帰り厳禁、徹底を。',en:"No-takeaway — strict.",style:'Direction.'},
    {speaker:'kenji_office',jp:'ごまかしの言葉、絶対避けます。',en:"Deceptive language — strictly avoid.",style:'Close.'},
  ]},
  {id:'conv_05988',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、人脈、ビジネスの財産だ。',en:"Ren, networks are business wealth.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。提案を吟味する時間、大切ですね。',en:"Yes. Time to scrutinize proposals matters.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'判断の分岐、間違うな。',en:"Decision forks — don't err.",style:'Direction.'},
    {speaker:'ren_uni',jp:'社交スキル、社会人として身につけたいです。',en:"Social skills — want to acquire as a pro.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'失敗のやり直し、若いうちに経験しろ。',en:"Redo failures while young.",style:'Direction.'},
    {speaker:'ren_uni',jp:'斬新な発想、若手の特権ですか。',en:"Fresh thinking — young-talent privilege?",style:'Curious.'},
    {speaker:'hiroshi_boss',jp:'資料持ち帰り厳禁、ごまかしも、業界では命取りだ。',en:"No-takeaway and no-deception — fatal in this industry.",style:'Firm close.'},
  ]},
  {id:'conv_05989',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on corporate ethics',lines:[
    {speaker:'takeda_officer',jp:'御社の人脈、業界全体で評価されています。',en:"Your network is well regarded across the industry.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。情報の吟味、社内体制も整えています。',en:"Yes. Info scrutiny, internal structure prepared.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'業界の分岐点、警察庁の指導、共有します。',en:"Industry forks — NPA guidance, shared.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'社交の場でも、コンプライアンス、徹底中です。',en:"At social events too — compliance strict.",style:'Update.'},
    {speaker:'takeda_officer',jp:'過去の失敗、やり直し可能なら、是非。',en:"Past failures — redo if possible.",style:'Direction.'},
    {speaker:'kenji_office',jp:'斬新な施策、警察と組んで進めます。',en:"Fresh measures — with police.",style:'Commitment.'},
    {speaker:'takeda_officer',jp:'資料の持ち帰り、ごまかしは厳禁。',en:"Material-takeaway and deception — forbidden.",style:'Firm close.'},
  ]},
  {id:'conv_05990',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors a current boss',lines:[
    {speaker:'hiroshi_elder',jp:'人脈は、年月で培うものだ。',en:"Networks are built over years.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。一件一件、吟味しています。',en:"Yes. Scrutinizing case by case.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'分岐点では、長期視点を持て。',en:"At forks, hold long-term view.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'社交シーン、義理を欠かさず。',en:"Social events — never neglect courtesy.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'昔の失敗、やり直しで、組織は強くなる。',en:"Past failures — redo strengthens orgs.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'斬新な発想、若手から学んでいます。',en:"Fresh ideas — learning from youth.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'資料の持ち帰り、ごまかし、絶対許すな。',en:"No takeaway, no deception — never allow.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_05991',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher and student discuss an environmental research paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、SDGsを唱える章、丁寧ですね。',en:"Paper — chapter advocating SDGs, careful.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。被害は地域全域に及び、深刻でした。',en:"Yes. Damage spread across the entire region — grave.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'山頂部の植生変化、写真資料も豊富ですね。',en:"Mountaintop vegetation changes — rich photo records too.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'対策の代償、別章で論じています。',en:"Cost of countermeasures — separate chapter.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'関連シンポジウム、盛況でしたね。',en:"Related symposium — thriving turnout.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。翻訳の訳者にも、丁寧に解説してもらいました。',en:"Yes. Translation translators also offered careful exposition.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'塗料原料の研究、特定企業の無謀な開発も、議論に上りました。',en:"Paint-material research — reckless dev by certain firms also discussed.",style:'Reflective close.'},
  ]},
  {id:'conv_05992',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a reporter about a regional incident',lines:[
    {speaker:'takeda_officer',jp:'被害者団体が安全を唱える集会、平和的に進みました。',en:"Victim group's safety-advocacy assembly — peaceful.",style:'Calm.'},
    {speaker:'ren_uni',jp:'集会、市内全域に告知されたんですね。',en:"Assembly — announced city-wide.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。会場は山頂近くの公園、警備に注力しました。',en:"Yes. Venue near a mountaintop park — focused security.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'地元経済への代償も、議題になりましたか。',en:"Local-economy costs — also on agenda?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。出店も盛況、登壇の訳者の解説もありました。',en:"Yes. Stalls thrived; translator-speaker explanations too.",style:'Informative.'},
    {speaker:'ren_uni',jp:'過去の事故、塗料関連の調査結果、参照されましたね。',en:"Past accidents — paint-related results referenced.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'無謀な開発、再発させない決意です。',en:"Reckless development — determined not to repeat.",style:'Firm close.'},
  ]},
  {id:'conv_05993',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher and a teen review a project on the environment',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、環境保全を唱える校外活動、参加したのね。',en:"Sakura, you joined eco-protection extracurricular.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。地域全域で清掃した経験、まとめました。',en:"Yes. Region-wide cleanup experience — summarized.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'山頂からの撮影写真、迫力ありますね。',en:"Mountaintop photos — striking.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'環境保全の代償、行政側の負担も触れました。',en:"Cost of preservation — gov burden also touched.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'地元発表、盛況で、保護者も来てくださいました。',en:"Local presentation thrived; parents came too.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'外国語版、訳者の協力で完成できました。',en:"Foreign-language version — completed with translator's help.",style:'Bright.'},
    {speaker:'asuka_teacher',jp:'塗料原料の研究、無謀でない範囲で扱いましたね。',en:"Paint-material research — handled within non-reckless scope.",style:'Reflective close.'},
  ]},
  {id:'conv_05994',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews a CSR brief',lines:[
    {speaker:'hiroshi_boss',jp:'CSR報告、平和を唱える章、丁寧に書いてくれ。',en:"CSR — peace-advocacy chapter, write carefully.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。活動は工場全域に及びます。',en:"Yes. Activities span plant-wide.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'山頂のレストラン、社員研修先として使えるか。',en:"Mountaintop restaurant — usable as training venue?",style:'Direction.'},
    {speaker:'kenji_office',jp:'代償としてのコスト、検討中です。',en:"Cost as trade-off — under review.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'記念式典、盛況に。海外向けは、訳者を起用しろ。',en:"Anniversary — make it thrive. Foreign — hire translators.",style:'Direction.'},
    {speaker:'kenji_office',jp:'塗料の原材料も、無謀な調達は避けます。',en:"Paint materials — avoid reckless procurement.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'長期視点で。',en:"Long-term view.",style:'Close.'},
  ]},
  {id:'conv_05995',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses an art-restoration paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、文化財保護を唱える運動、よくまとめましたね。',en:"Paper — heritage-protection movement, well summarized.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。指定対象は全域に広がりつつあります。',en:"Yes. Designations spreading region-wide.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'山頂の社寺、修復、丁寧に取材されましたね。',en:"Mountaintop shrines — careful restoration coverage.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'保護の代償、経済的側面も論じました。',en:"Cost of protection — economic angles too.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'発表会、盛況でしたね。外国人来訪者、訳者通訳でフォローされていました。',en:"Presentation thrived. Foreigners followed via translator-interpreters.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'修復用の塗料、無謀な薬剤使用、禁止されているそうですね。',en:"Restoration paints — reckless chemical use is banned.",style:'Curious close.'},
    {speaker:'asuka_teacher',jp:'はい、慎重に。',en:"Yes, carefully.",style:'Close.'},
  ]},

  // D
  {id:'conv_05996',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends plan a summer day',lines:[
    {speaker:'mei_romantic',jp:'今度の週末、太陽光発電の見学ツアー、行こうか。',en:"This weekend — solar-power tour?",style:'Excited.'},
    {speaker:'aoi_barista',jp:'いいね。家のリモコン、新しくしたばかりだから、留守も安心。',en:"Sure. Just got a new home remote — leaving is fine.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'夏前に、ヘアカット予約済み。',en:"Pre-summer haircut booked.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'サマーセール、洋服屋でもやってる。',en:"Summer sale at clothing shops too.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'水着、新しいの欲しいな。',en:"Want a new swimsuit.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'コーラスサークル、夏休み合宿あるよ。',en:"Chorus club — summer camp.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'熱中症に気をつけながら、活動しようね。',en:"Watch out for heatstroke while active.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'メイクもナチュラル系で、軽やかに。',en:"Makeup — natural-style, light.",style:'Warm close.'},
  ]},
  {id:'conv_05997',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son prepare for summer',lines:[
    {speaker:'yumiko_mom',jp:'翔、屋根の太陽光パネル、業者が今日来るよ。',en:"Sho, roof solar panel — installer comes today.",style:'Warm.'},
    {speaker:'sho_child',jp:'うん。エアコンのリモコン、どこ?',en:"Yes. AC remote — where?",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'リビングのテーブルね。ヘアカット、来週行く?',en:"Living-room table. Haircut next week?",style:'Soft.'},
    {speaker:'sho_child',jp:'サマースクールも、申し込んでくれた?',en:"Did you sign me up for summer school?",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'うん。水着、サイズ確認しよう。',en:"Yes. Check swimsuit size.",style:'Practical.'},
    {speaker:'sho_child',jp:'学校のコーラス発表、お父さんも来てくれる?',en:"School chorus — Dad's coming too?",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'うん。熱中症対策、お茶持って行こう。',en:"Yes. Heatstroke prep — bring tea.",style:'Warm.'},
    {speaker:'sho_child',jp:'お友達のママ、ナチュラル系ファッションで素敵だよね。',en:"Friend's mom — natural-style outfit, lovely.",style:'Bright close.'},
  ]},
  {id:'conv_05998',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat about summer plans',lines:[
    {speaker:'sakura_teen',jp:'夏休み、太陽光発電施設の見学、行きたい。',en:"Summer — wanna visit solar facility.",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'うちのエアコン、リモコン古くて、効きが微妙。',en:"Our AC's remote is old — effect spotty.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'ヘアスタイル、夏向けに変えようかな。',en:"Hairstyle — summer-style change?",style:'Animated.'},
    {speaker:'riku_teen',jp:'サマーキャンプ、近所であるって。',en:"Summer camp — nearby.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'プール用の水着、買い替えたよ。',en:"Pool swimsuit — replaced.",style:'Bright.'},
    {speaker:'riku_teen',jp:'吹奏楽部のコーラス練習、長引いてる。',en:"Band's chorus practice runs long.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'夏は熱中症、本当に気をつけて。',en:"Heatstroke in summer — really watch out.",style:'Soft.'},
    {speaker:'riku_teen',jp:'ナチュラルな日焼け止め、肌に優しいよね。',en:"Natural sunscreen — gentle on skin.",style:'Practical close.'},
  ]},
  {id:'conv_05999',cluster:'D',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:D_T,scenario:'A senpai chats with a teen about summer activities',lines:[
    {speaker:'ren_uni',jp:'桜、今年の夏、太陽光発電のボランティア、興味ある?',en:"Sakura, summer solar-power volunteering interest?",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。家ではリモコン操作ばかりなので、外に出たいです。',en:"Yes. Just remote-controlling at home — want outdoors.",style:'Earnest teen.'},
    {speaker:'ren_uni',jp:'夏前にヘアカット、僕も予約した。',en:"Pre-summer haircut — booked too.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'サマーキャンプ、合宿で生活、楽しみです。',en:"Summer camp — group life, exciting.",style:'Animated.'},
    {speaker:'ren_uni',jp:'水着の準備も忘れずに。',en:"Don't forget swimsuit prep.",style:'Practical.'},
    {speaker:'sakura_teen',jp:'はい。サークルではコーラスもやってます。',en:"Yes. Club — also chorus.",style:'Bright.'},
    {speaker:'ren_uni',jp:'熱中症対策、研究室でも徹底だ。',en:"Heatstroke prep — strict at the lab too.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'ナチュラルなメイクで、撮影会、参加します。',en:"Natural makeup — joining a photo session.",style:'Cheerful close.'},
  ]},
  {id:'conv_06000',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan a summer menu',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、夏フェア、太陽光発電と連動した節電メニュー、考えよか。',en:"Aoi-san, summer fair — solar-linked energy-saving menu?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。冷房リモコン、設定温度、調整します。',en:"Yes. AC remote — adjust set temp.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'店内のヘアサロン棟、合同企画、ええなあ。',en:"In-store hair-salon wing — joint plans, nice.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'サマーコレクションのカップ、限定で出しましょう。',en:"Summer-collection cups — limited release.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'水着姿のお客様向けに、屋外席、用意しよ。',en:"For swimsuit guests — outdoor seats.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'コーラス系のBGM、爽やかですよね。',en:"Chorus-style BGM — refreshing.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'熱中症予防に、おしぼり配ろか。',en:"Heatstroke prep — hand out cool towels.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'ナチュラル素材の食器、エコ的にも訴求できます。',en:"Natural-material dishware — eco-appeal.",style:'Warm close.'},
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

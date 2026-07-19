import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_287 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['倒し','止まり','乱暴','目線','暴れ','なくす','婚約','ズレ']
const B_T = ['エリート','特権','指向','リターン','置き換え','手がけ','財務省','おおむね']
const C_T = ['無償','基調','結ば','保っ','欠ける','とらえる','所見','判っ']
const D_T = ['岩手','賢治','ベルギー','夕刊','ノイズ','ゴールデン','キャプテン','ハナ']

const data = [
  // A
  {id:'conv_05701',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends share emotional news',lines:[
    {speaker:'mei_romantic',jp:'婚約、解消するかもしれないの。',en:"My engagement might be off.",style:'Vulnerable.'},
    {speaker:'aoi_barista',jp:'え、何があったの。',en:"Eh, what happened?",style:'Gentle.'},
    {speaker:'mei_romantic',jp:'価値観のズレが、思った以上に深くて。',en:"Value gaps were deeper than expected.",style:'Subdued.'},
    {speaker:'aoi_barista',jp:'相手が乱暴な言い方した?',en:"Did he speak roughly?",style:'Concerned.'},
    {speaker:'mei_romantic',jp:'いえ、目線が低い人だけど、感情を暴れさせちゃって。',en:"No, he's gentle-eyed, but I let my emotions run wild.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'冷静さをなくすと、誰でも傷つくよね。',en:"Lose composure and anyone gets hurt.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'今は時間が止まり、何も決められない。',en:"Time's stopped now; can't decide anything.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'急がないで。指輪を倒して泣いた時もあったよね、昔。',en:"Don't rush. Long ago, you cried after knocking a ring over too.",style:'Warm close.'},
  ]},
  {id:'conv_05702',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom calms her son after a playground fight',lines:[
    {speaker:'sho_child',jp:'ママ、公園で年上の子が乱暴で、僕、暴れちゃった。',en:"Mom, an older kid was rough — I lashed out.",style:'Tearful child.'},
    {speaker:'yumiko_mom',jp:'落ち着いて。冷静さをなくす前に、お母さん呼んでね。',en:"Calm down. Before losing your cool, call me.",style:'Tender.'},
    {speaker:'sho_child',jp:'走って、その子が転んで倒したの、わざとじゃない。',en:"He fell — I didn't knock him on purpose.",style:'Defensive.'},
    {speaker:'yumiko_mom',jp:'目線を合わせて、ちゃんと謝ろうね。',en:"Meet eyes and apologize properly.",style:'Patient.'},
    {speaker:'sho_child',jp:'うん。心の中の感情、止まり方が分からなくて。',en:"I don't know how to stop these feelings.",style:'Subdued.'},
    {speaker:'yumiko_mom',jp:'タイミングのズレ、誰にもあるよ。',en:"Timing gaps happen to everyone.",style:'Warm.'},
    {speaker:'sho_child',jp:'ママの婚約写真、今度見せて。',en:"Show me the engagement photo sometime.",style:'Curious close.'},
  ]},
  {id:'conv_05703',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens process a school incident',lines:[
    {speaker:'sakura_teen',jp:'部活で、先輩が乱暴な口調で叱ってきた。',en:"At club, senpai scolded with a rough tone.",style:'Subdued teen.'},
    {speaker:'riku_teen',jp:'お前、冷静さをなくす前に、距離取れよ。',en:"Don't lose your cool — back off.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'感情が暴れて、目線も合わせられなかった。',en:"Emotions raged, couldn't even meet eyes.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'倒した椅子、自分で立てた?',en:"You stood up the knocked chair?",style:'Probe.'},
    {speaker:'sakura_teen',jp:'うん。気持ちが止まり、また動き出すのに時間かかった。',en:"Yeah. Feelings paused, took time to restart.",style:'Soft.'},
    {speaker:'riku_teen',jp:'年上の兄貴の婚約、最近どう?',en:"Your bro's engagement — how's it going?",style:'Easy.'},
    {speaker:'sakura_teen',jp:'順調。ズレが、彼らにはあまりないみたい。',en:"Smooth. No real gaps for them, it seems.",style:'Bright close.'},
  ]},
  {id:'conv_05704',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple discusses family news',lines:[
    {speaker:'hiroshi_elder',jp:'孫の婚約、決まったらしいな。',en:"Our grandkid's engagement is settled, it seems.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'ええ、若い頃の私たちと、ズレない巡り合わせよ。',en:"Yes, no gap from our youth — fitting timing.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'乱暴な世間でも、二人なら倒し倒され、支え合えるさ。',en:"In a rough world, the two can lean and support.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'時間が止まりそうな幸せ、忘れないでね。',en:"Time-stopping joy — don't forget.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'目線が低くて優しい子だから、安心だ。',en:"He's a gentle-eyed kind boy; reassuring.",style:'Calm.'},
    {speaker:'sachiko_grandma',jp:'感情が暴れた若い頃、私たちも、ね。',en:"Wild-emotion youth — us too, eh.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'勢いをなくすことなく、彼らも歩めばいい。',en:"Without losing momentum, may they walk on.",style:'Warm close.'},
  ]},
  {id:'conv_05705',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A uni student gently advises a teen on emotions',lines:[
    {speaker:'sakura_teen',jp:'先輩、最近、心が暴れる時が多くて。',en:"Senpai, my heart races wild often lately.",style:'Worried teen.'},
    {speaker:'ren_uni',jp:'体調も?睡眠時間、ズレが大きくないか。',en:"Body too? Sleep — big gaps?",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'時計が止まり、夜が短く感じる。',en:"Time stops, nights feel short.",style:'Soft.'},
    {speaker:'ren_uni',jp:'乱暴な指導者、近くにいる?',en:"Any rough authority figures nearby?",style:'Probe.'},
    {speaker:'sakura_teen',jp:'目線を下げて、距離取るようにしてます。',en:"I drop my gaze and keep distance.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'冷静さをなくすな。自分のペースで。',en:"Don't lose your cool. Your own pace.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'はい。婚約とか、まだ先の話ですけど、頼れる相手、いつか出会えるかな。',en:"Yes. Engagement's far off, but hope I meet someone reliable.",style:'Wistful.'},
    {speaker:'ren_uni',jp:'倒したくなる時こそ、ゆっくり呼吸を。',en:"When you want to topple, breathe slow.",style:'Warm close.'},
  ]},

  // B
  {id:'conv_05706',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss and his manager review investments',lines:[
    {speaker:'hiroshi_boss',jp:'今期のリターン、おおむね予想通りだな。',en:"This term's return is mostly as forecast.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。財務省のガイドラインに沿った運用です。',en:"Yes. In line with finance-ministry guidance.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'エリート部隊の指向、品質重視で置き換えはせず。',en:"The elite team's bent — quality-focused, no swap-outs.",style:'Direction.'},
    {speaker:'kenji_office',jp:'特権的な権限、最小限に手がけている部署もあります。',en:"Some sections handle privileged permissions minimally too.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'バランス、保ってくれ。',en:"Keep balance.",style:'Decisive close.'},
  ]},
  {id:'conv_05707',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers review staffing',lines:[
    {speaker:'yuki_office',jp:'エリート出身者の指向、データ分析寄りだね。',en:"Elite-track folks lean toward data analysis.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。古い手法を、おおむね新ツールに置き換えています。',en:"Yes. Old methods are mostly being swapped to new tools.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'特権アカウントの管理、財務省監査でも問われた。',en:"Privileged-account control — finance-ministry audit asked too.",style:'Direction.'},
    {speaker:'kenji_office',jp:'手がけた改善で、リターンが見えています。',en:"Our improvements show returns.",style:'Update.'},
    {speaker:'yuki_office',jp:'引き続き頼む。',en:"Keep at it.",style:'Close.'},
  ]},
  {id:'conv_05708',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern on policy',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、財務省の意向、業界の指向と、おおむね整合している。',en:"Ren, the ministry's intent largely aligns with industry leanings.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'特権を持つ組織、リターンへの責任が重いですね。',en:"Privileged orgs bear heavier return responsibility.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'エリート意識を、地に着けて置き換えるんだ。',en:"Anchor elite mindset to the ground; swap it out.",style:'Direction.'},
    {speaker:'ren_uni',jp:'御社が手がけた制度設計、興味深いです。',en:"Your firm's institutional designs are interesting.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'視察、来週連れて行く。',en:"Site visit — next week.",style:'Close.'},
  ]},
  {id:'conv_05709',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs a manager about industrial regulation',lines:[
    {speaker:'takeda_officer',jp:'財務省と警察、合同の調査でおおむね合意しています。',en:"Ministry and police mostly agree on joint surveys.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。特権的な取引、置き換えに時間が掛かりました。',en:"Yes. Privileged dealings took time to replace.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'エリート層の指向、リターンへの偏りが目立ちます。',en:"Elite layers bend toward returns conspicuously.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'我が社が手がけた是正策、共有させてください。',en:"Our remediation we've handled — let me share.",style:'Update.'},
    {speaker:'takeda_officer',jp:'お願いします。',en:"Please do.",style:'Close.'},
  ]},
  {id:'conv_05710',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors a boss',lines:[
    {speaker:'hiroshi_elder',jp:'特権意識を持つ組織は、いずれ倒れる。',en:"Privilege-conscious orgs eventually fall.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'おおむね、私もそう感じます。',en:"Mostly, I feel the same.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'財務省出身のエリート、指向は様々だ。',en:"Ministry-track elites — leanings vary.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'我が社、長期リターンを手がけてきました。',en:"Our firm has tended long-term returns.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'制度の置き換え、急ぐな。',en:"Don't rush institutional swaps.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_05711',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher and student discuss a research paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、無償ボランティアの実態、よくとらえる構成ですね。',en:"The paper grasps unpaid volunteers' reality well.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。基調となる仮説、データで結ばれた結論を保っています。',en:"Yes. The baseline hypothesis links data-backed conclusions.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'欠ける論点も、丁寧に補足されていますね。',en:"Missing points are carefully supplemented too.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'査読者の所見、おおむね前向きでした。',en:"Reviewer remarks were largely positive.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'本旨が判った瞬間、私も納得しました。',en:"When the thesis clicked, I was convinced too.",style:'Reflective close.'},
  ]},
  {id:'conv_05712',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor explains medical research to a reporter',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、当院の無償検診、地域貢献を基調にしています。',en:"Ren, our free screenings are based on community contribution.",style:'Calm.'},
    {speaker:'ren_uni',jp:'医療データ、患者の同意で結ばれた使用です。',en:"Medical data — used by patient consent.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。一定の品質を保ち、研究側の所見も尊重します。',en:"Yes. Maintaining quality, respecting researcher remarks.",style:'Patient.'},
    {speaker:'ren_uni',jp:'人手が欠ける時期、現場の実態をとらえる難しさがありますね。',en:"In staff-short times, grasping field reality is hard.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'判った点を、地道に共有しています。',en:"Understood points, plainly shared.",style:'Reflective close.'},
  ]},
  {id:'conv_05713',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews a CSR report',lines:[
    {speaker:'hiroshi_boss',jp:'CSR報告、無償活動の章、基調を保って書けているか。',en:"CSR report — unpaid chapter, base tone preserved?",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。実態を捉える例も結ばれ、説得力があります。',en:"Yes. Reality-capturing examples linked, persuasive.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'欠ける数値、補強しろ。所見欄も、簡潔に。',en:"Beef up missing figures. Remarks — concise.",style:'Direction.'},
    {speaker:'kenji_office',jp:'監査側、内容を判って好評を頂きました。',en:"Auditors understood and praised.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'よし、年次報告に向けて。',en:"Good, toward the annual report.",style:'Close.'},
  ]},
  {id:'conv_05714',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher and a teen discuss a documentary about social programs',lines:[
    {speaker:'asuka_teacher',jp:'昨夜のドキュメンタリー、無償食堂の取材、丁寧でしたね。',en:"Last night's doc on free cafeterias was careful.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。地域の声を基調にして、人と人が結ばれた瞬間を描いていました。',en:"Yes. With community-voice base, depicted people-to-people bonding moments.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'運営側の所見、保っている熱量に感心しました。',en:"Operators' remarks — the kept passion impressed.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'人手が欠ける週、地域全体でとらえる必要があると判ったそうです。',en:"In staff-short weeks, community-wide grasp is needed, they realized.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'地に足の着いた取材でした。',en:"Grounded reporting.",style:'Reflective close.'},
  ]},
  {id:'conv_05715',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a reporter on community programs',lines:[
    {speaker:'takeda_officer',jp:'無償の防犯講習、基調はわかりやすさです。',en:"Free crime-prevention lessons — clarity is the base.",style:'Calm.'},
    {speaker:'ren_uni',jp:'住民と警察が結ばれた事例、印象的です。',en:"Resident-police bond cases are striking.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。一定の質を保ち、欠ける部分は丁寧に補強します。',en:"Yes. Quality preserved; gaps reinforced carefully.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害実態をとらえる視点、深まっています。',en:"Grasping victim reality — depth has grown.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'所見が判った段階で、行動に移します。',en:"Once remarks are understood, we act.",style:'Firm close.'},
  ]},

  // D
  {id:'conv_05716',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:D_T,scenario:'A teacher and student discuss Miyazawa Kenji literature',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、岩手出身の作家、宮沢賢治の童話、読んでみた?',en:"Sakura, did you read Iwate-born writer Miyazawa Kenji's tales?",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。隣のベルギー人留学生も、興味を持ってました。',en:"Yes. The Belgian exchange student next door was interested too.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'地元の夕刊に、作品論の特集が載っていましたね。',en:"The local evening paper had a feature on his works.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'読み聞かせの録音、ノイズもあるけど味があります。',en:"The reading recordings have noise, but charm.",style:'Animated.'},
    {speaker:'asuka_teacher',jp:'ゴールデンウィークに、岩手へ文学散策、面白そうですね。',en:"Golden Week — a literary walk in Iwate, sounds fun.",style:'Bright.'},
    {speaker:'sakura_teen',jp:'文芸サークルのキャプテン、引率を考えてくれてます。',en:"Our lit-club captain is considering leading us.",style:'Cheerful.'},
    {speaker:'asuka_teacher',jp:'うちの猫ハナも、絵本の挿絵を眺める癖あるんですよ。',en:"Our cat Hana even gazes at picture-book illustrations.",style:'Warm close.'},
  ]},
  {id:'conv_05717',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends plan a literary trip',lines:[
    {speaker:'mei_romantic',jp:'ゴールデンウィーク、岩手に旅行する計画なの。',en:"Golden Week — Iwate trip plan.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'宮沢賢治の記念館、行くの?',en:"Visiting Miyazawa Kenji's museum?",style:'Soft.'},
    {speaker:'mei_romantic',jp:'うん。ベルギー人の友達も誘って、文学散策。',en:"Yes, inviting a Belgian friend for a literary walk.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'夕刊紙の旅特集、参考になるよ。',en:"The evening-paper travel feature helps.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'録音雑誌のノイズみたいに、田舎の音、楽しみたい。',en:"Like recording-mag noise, wanna enjoy countryside sounds.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'文学好きグループのキャプテン、案内するんでしょ?',en:"The lit-group captain will guide, right?",style:'Probe.'},
    {speaker:'mei_romantic',jp:'うん。猫のハナは留守番、お父さんに頼む。',en:"Yes. The cat Hana stays — Dad watches.",style:'Warm close.'},
  ]},
  {id:'conv_05718',cluster:'D',ambient:'living_room_quiet',cast:['ryosuke_dad','sho_child'],targets:D_T,scenario:'A dad reads a children\'s book with his son',lines:[
    {speaker:'ryosuke_dad',jp:'翔、この絵本、宮沢賢治の話を、簡単にしたものだ。',en:"Sho, this picture book retells Miyazawa Kenji simply.",style:'Warm dad.'},
    {speaker:'sho_child',jp:'岩手の風景、きれいだね、お父さん。',en:"Iwate scenery is pretty, Dad.",style:'Awe child.'},
    {speaker:'ryosuke_dad',jp:'ベルギーの童話とも、雰囲気が違うだろ。',en:"Different mood from Belgian tales, right?",style:'Calm.'},
    {speaker:'sho_child',jp:'うん。夕刊に紹介された本だっけ。',en:"Yeah. Was this the one in the evening paper?",style:'Curious.'},
    {speaker:'ryosuke_dad',jp:'そう。後で録音音源も聞こう、ノイズあるけど。',en:"Yes. Later, listen to the recording — has noise though.",style:'Easy.'},
    {speaker:'sho_child',jp:'ゴールデンウィークに、博物館行こうよ。',en:"Golden Week — let's go to the museum.",style:'Eager.'},
    {speaker:'ryosuke_dad',jp:'うん。サッカー部のキャプテンの子も、誘っていいぞ。',en:"Sure. Invite the soccer-club captain kid too.",style:'Warm.'},
    {speaker:'sho_child',jp:'うちのハナも、絵本の絵、舐めようとしてた。',en:"Our Hana even tries to lick the illustrations.",style:'Bright close.'},
  ]},
  {id:'conv_05719',cluster:'D',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:D_T,scenario:'A uni student profiles a literary club for a teen',lines:[
    {speaker:'ren_uni',jp:'桜、文芸サークル、岩手出身の宮沢賢治を特集する号、出すんだ。',en:"Sakura, our lit-club is doing a Miyazawa Kenji issue.",style:'Engaged senpai.'},
    {speaker:'sakura_teen',jp:'すごい!ベルギー留学生も寄稿するんですか。',en:"Wow! Will the Belgian exchange student contribute too?",style:'Earnest teen.'},
    {speaker:'ren_uni',jp:'うん。夕刊の文化欄でも、紹介してもらう予定だ。',en:"Yes. The paper's evening culture column'll feature it too.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'録音の朗読も付録に?ノイズは編集で抑える?',en:"Recordings as supplement? Noise — edited down?",style:'Curious.'},
    {speaker:'ren_uni',jp:'はい、丁寧に。ゴールデンウィーク前に出すぞ。',en:"Yes, carefully. Release before Golden Week.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'運営のキャプテンも、忙しそうですね。',en:"The ops captain looks busy.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'桜のクラスメイトの猫、ハナだっけ、表紙に登場予定。',en:"Sakura's classmate's cat — Hana — will appear on the cover.",style:'Warm close.'},
  ]},
  {id:'conv_05720',cluster:'D',ambient:'office_quiet_low',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher discusses an international literature event',lines:[
    {speaker:'asuka_teacher',jp:'国際文学祭、ベルギーから著名作家が来日するそうです。',en:"At the international lit fest, a famous Belgian author visits.",style:'Calm.'},
    {speaker:'ren_uni',jp:'岩手会場でも、宮沢賢治の朗読セッションがあるんですよね。',en:"Iwate venue has a Miyazawa Kenji reading session too.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'地方紙の夕刊で、全国向けに告知が出ています。',en:"Local paper's evening edition announces nationwide.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'同時通訳、回線ノイズが課題と聞きました。',en:"Simul-translation — line noise is a challenge, I heard.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'ゴールデンウィーク後の閉会式、運営側のキャプテンが調整中とか。',en:"Closing after Golden Week — the ops captain is coordinating.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'通訳ブースに、保護猫団体のハナちゃんも招待客に名前あったりして。',en:"Maybe the rescue-cat group's Hana is even on the guest list — kidding.",style:'Wry close.'},
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

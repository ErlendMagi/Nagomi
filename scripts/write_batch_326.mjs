import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_326 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['ひも','かみ','召','満席','離し','後々','本心','願い事']
const B_T = ['書き手','読み上げ','意気込み','組み合わせる','梱包','別紙','試料','春休み']
const C_T = ['名声','攻める','前身','模試','近世','廃案','本州','鎖国']
const D_T = ['黒板','ペイント','バレーボール','紫陽花','銀色','鯉','ライブハウス','アスリート']

const data = [
  // A
  {id:'conv_06481',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at bedtime',lines:[
    {speaker:'sho_child',jp:'ママ、靴のひも、結べるようになった!',en:"Mom — shoelaces, can tie now!",style:'Excited child.'},
    {speaker:'yumiko_mom',jp:'すごいわね。お風呂で、かみを洗ってあげるね。',en:"Wow. In bath — wash your hair.",style:'Warm.'},
    {speaker:'sho_child',jp:'ご飯、もう召し上がる?',en:"Meal — eat already?",style:'Polite child.'},
    {speaker:'yumiko_mom',jp:'お祭り、満席で、入れなかったわね。',en:"Festival — full, couldn't enter.",style:'Wry.'},
    {speaker:'sho_child',jp:'お友達の手、離した時、寂しくなった。',en:"Friend hand-released — felt lonely.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'後々、いい思い出になるのよ。',en:"Later — becomes good memory.",style:'Soft.'},
    {speaker:'sho_child',jp:'本心、まだ、ちゃんと言えないけど、頑張る。',en:"True feeling — can't say properly yet, but try.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'願い事、たくさん書いて、七夕にね。',en:"Wishes — many, for Tanabata.",style:'Warm close.'},
  ]},
  {id:'conv_06482',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'プレゼント、ひもで、ちょこっと結んだ。',en:"Gift — slightly string-tied.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。新作シャンプー、かみが、ふんわりするって。',en:"Yeah. New shampoo — hair fluffy.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'お料理、お先に召し上がってください。',en:"Meal — please eat first.",style:'Polite.'},
    {speaker:'aoi_barista',jp:'予約、満席で、人気店、混んでるね。',en:"Reservation — full; popular shop crowded.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'過去のこと、ようやく離した気持ち。',en:"Past — finally released-feel.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'後々、振り返って、笑える話になる。',en:"Later — laugh-tellable.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'最近、本心を、伝えるのが難しいの。',en:"Lately — conveying true feelings, hard.",style:'Vulnerable.'},
    {speaker:'aoi_barista',jp:'願い事、初詣で、お互い、書こうね。',en:"Wishes — at hatsumode, mutually write.",style:'Warm close.'},
  ]},
  {id:'conv_06483',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'制服のひも、ちゃんと結んだ?',en:"Uniform string — properly tied?",style:'Casual teen.'},
    {speaker:'riku_teen',jp:'うん。サッカー部、かみ、伸びてきた。',en:"Yeah. Soccer club — hair growing.",style:'Bright.'},
    {speaker:'sakura_teen',jp:'今日の給食、もう、皆、召し上がったよ。',en:"Today's lunch — everyone ate already.",style:'Animated.'},
    {speaker:'riku_teen',jp:'映画館、満席で、入れなかった、残念。',en:"Cinema — full, couldn't enter, regret.",style:'Subdued.'},
    {speaker:'sakura_teen',jp:'試合後、ボール、手から離した瞬間、達成感あった。',en:"Post-match — ball-released, achievement-feel.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'後々、いい経験だったって、思う。',en:"Later — will be good experience.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'本心では、もっと友達と話したい。',en:"True feeling — wanna talk friends more.",style:'Soft.'},
    {speaker:'riku_teen',jp:'絵馬に願い事、書きに行こう。',en:"Ema wishes — write at shrine.",style:'Bright close.'},
  ]},
  {id:'conv_06484',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、家のひも靴、流行ったな。',en:"In youth — string-shoes popular.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。お祭りのかみ飾り、お母さんが作ってくれたわね。',en:"Yes. Festival hair-decor — Mom made.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お料理、どうぞ、召し上がれ。',en:"Meal — please, eat up.",style:'Warm.'},
    {speaker:'sachiko_grandma',jp:'結婚式当日、教会、満席で、感動したわね。',en:"Wedding — church full, moving.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'お互いの手、離さずに、年取ってきたな。',en:"Mutual hands — un-released, aged together.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'後々、孫に、この話、伝えましょう。',en:"Later — to grandkids, tell this.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'お前の本心、いつも、伝わってくる。',en:"Your true heart — always reaches me.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'今年の願い事、長生き、と書いたわ。',en:"This year's wish — long life, written.",style:'Warm close.'},
  ]},
  {id:'conv_06485',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai and a teen chat',lines:[
    {speaker:'ren_uni',jp:'桜、リュックのひも、ちゃんと締めとけ。',en:"Sakura — backpack strap, secure.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'はい。先輩、かみの色、新しく変えたんですね。',en:"Yes. Senpai — hair color, newly changed.",style:'Curious.'},
    {speaker:'ren_uni',jp:'試食、先に召し上がってもらおう、君から。',en:"Tasting — eat first, you.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'はい。研究室、満席に近かったですよ、今日。',en:"Yes. Lab — nearly full today.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'論文の主題、離した時、頭、すっきりした。',en:"Paper-theme released — head clearer.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'後々、論文集に、収録されるといいですね。',en:"Later — wish anthology-included.",style:'Bright.'},
    {speaker:'ren_uni',jp:'桜の本心、もっと、聞かせてくれ。',en:"Sakura's true heart — let me hear more.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'はい。願い事、絵馬に書いてきます。',en:"Yes. Wishes — ema-write going.",style:'Polite close.'},
  ]},

  // B
  {id:'conv_06486',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'記事の書き手、若手から、育てろ。',en:"Article writers — from youth, raise.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。役員会の冒頭、社訓、読み上げ予定です。',en:"Yes. Exec-meeting opening — creed read.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'新人の意気込み、感じるよ。',en:"New-hire spirit — felt.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。異業種の知見、組み合わせる試み、進めます。',en:"Yes. Cross-industry insights combination — advancing.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'発送、梱包、丁寧にしろ。',en:"Shipping — careful packing.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。詳細は、別紙、ご参照ください。',en:"Yes. Details — see addendum.",style:'Procedural.'},
    {speaker:'hiroshi_boss',jp:'品質試料、研究所に送ったか。',en:"Quality samples — sent to lab?",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。春休み明け、結果が出ます。',en:"Yes. Post-spring-break, results out.",style:'Close.'},
  ]},
  {id:'conv_06487',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss publishing',lines:[
    {speaker:'yuki_office',jp:'若手の書き手、社内報、活用しよう。',en:"Junior writers — leverage internal.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。式典で、創業者の言葉、読み上げます。',en:"Yes. Ceremony — founder-words read.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'新企画への意気込み、感じる発表だったね。',en:"New-plan spirit — felt pres.",style:'Bright.'},
    {speaker:'kenji_office',jp:'はい。グッズ、複数アイテム、組み合わせる戦略、検討中です。',en:"Yes. Multi-item combination — strategy under review.",style:'Update.'},
    {speaker:'yuki_office',jp:'発送、梱包資材、エコ仕様にしよう。',en:"Shipping packs — eco-spec.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。提案書、付録は別紙添付です。',en:"Yes. Proposal — addenda attached.",style:'Update.'},
    {speaker:'yuki_office',jp:'試料、品質保証部に、送付済み?',en:"Samples — sent to QA?",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。春休み中も、対応可能な体制です。',en:"Yes. Even during spring break, responsive.",style:'Close.'},
  ]},
  {id:'conv_06488',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、文章の書き手として、自分の声、出せ。',en:"Ren — as writer, voice your own.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。プレゼン、原稿、読み上げ練習しています。',en:"Yes. Pres — script read-practice.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'就活、意気込み、伝わるか、面接、肝心だ。',en:"Job-hunt — spirit-conveyance, interview vital.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。複数のスキル、組み合わせる経験、積みたいです。',en:"Yes. Multi-skill combo — gain experience.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'発送、梱包担当も、現場で、見ていけ。',en:"Shipping-packs — also see on site.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。報告書の別紙、書き方、勉強します。',en:"Yes. Addendum format — learn.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'研究施設、試料、扱う経験、若いうちに。',en:"Lab — sample-handling, young.",style:'Direction.'},
    {speaker:'ren_uni',jp:'春休みの研修、参加させていただきます。',en:"Spring-break training — let me join.",style:'Earnest close.'},
  ]},
  {id:'conv_06489',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on coordination',lines:[
    {speaker:'takeda_officer',jp:'記事の書き手、警察庁の広報、強化中です。',en:"Article writers — NPA PR strengthening.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。共同会見、声明文、読み上げで、進めます。',en:"Yes. Joint press — statement read.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'若手警官の意気込み、感じます。',en:"Young-officer spirit — felt.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察と民間、組み合わせる訓練、企画中。',en:"Yes. Police-civilian combo — planning training.",style:'Update.'},
    {speaker:'takeda_officer',jp:'押収品、梱包、慎重に。',en:"Seized goods — careful packing.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。証拠リスト、別紙に整理しました。',en:"Yes. Evidence list — addendum-organized.",style:'Update.'},
    {speaker:'takeda_officer',jp:'試料、警察科捜研、連携で扱います。',en:"Samples — police-forensics, linkage-handled.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。春休み中も、警察と連携、可能です。',en:"Yes. Spring-break too — police-cooperation possible.",style:'Close.'},
  ]},
  {id:'conv_06490',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'昔の書き手、皆、手書きだった。',en:"Old writers — all hand-written.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。式典の社訓読み上げ、伝統で続けてます。',en:"Yes. Ceremony creed-reading — tradition-continued.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'創業時の意気込み、忘れるな。',en:"Founding spirit — don't forget.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。若手と熟練、組み合わせる体制、強化しました。',en:"Yes. Youth-veteran combo structure — strengthened.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'梱包の質、ブランドの一部だ。',en:"Pack quality — brand part.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。資料、別紙でも、確認頂けます。',en:"Yes. Materials — also addendum-verifiable.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'試料に勝る経験はない。',en:"No experience surpasses samples.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。春休みは、新人と過ごす時間、設けます。',en:"Yes. Spring break — new-hire-time set.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06491',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses research',lines:[
    {speaker:'asuka_teacher',jp:'論文、文豪の名声、章にしましたね。',en:"Paper — literary-master fame, chapter.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。攻める姿勢、章末で論じました。',en:"Yes. Aggressive stance — end-discussed.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'当社の前身、明治期の出版社ですね。',en:"Firm-predecessor — Meiji-era publisher.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。受験生、模試の結果に振り回されないように、論じました。',en:"Yes. Test-takers — mock-result-uncontrolled, discussed.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'近世の文学史、別章で扱いましたね。',en:"Early-modern lit history — separate chapter.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'廃案になった政策、史料、参考にしました。',en:"Scrapped policies — sources referenced.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'本州全域の文化、丁寧にまとめましたね。',en:"Honshu-wide culture — well summarized.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'鎖国期の影響、最終章で総括します。',en:"Sakoku-impact — final-chapter summarize.",style:'Earnest close.'},
  ]},
  {id:'conv_06492',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs about a case',lines:[
    {speaker:'takeda_officer',jp:'被害者は、名声ある実業家です。',en:"Victim — well-named industrialist.",style:'Calm.'},
    {speaker:'ren_uni',jp:'容疑者、犯行で、攻める意図、あったんですね。',en:"Suspect — crime-aggressive intent, had.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。前身の組織、過去にも事件、起こしています。',en:"Yes. Predecessor org — past-incidents too.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察の模試訓練、防犯演習で実施されているそうですね。',en:"Police mock training — crime-prev drills, conducted.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。近世の事件記録、参考に、過去事案、比較しています。',en:"Yes. Early-modern records — referenced, past cases compared.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'立法、廃案になった例、警察の運用に影響しますね。',en:"Legislation-scrapped — affects police ops.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。本州各地、連携、強化しています。',en:"Yes. Honshu-wide — coordination strengthened.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'鎖国時代の情報遮断、現代に教訓があるんですね。',en:"Sakoku info-blockade — modern lesson.",style:'Curious close.'},
  ]},
  {id:'conv_06493',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、名声ある専門医、近年、地方にも増えました。',en:"Ren — well-named specialists, lately also in regions.",style:'Calm.'},
    {speaker:'ren_uni',jp:'治療、攻める方針と、保守的方針、両論あるんですね。',en:"Treatment — aggressive and conservative, both views.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。当院の前身、明治の診療所です。',en:"Yes. Our predecessor — Meiji-era clinic.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医学生、模試で、実力測りますか。',en:"Med students — mock-measure ability?",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。近世の医療史、教養として大切です。',en:"Yes. Early-modern medical history — vital.",style:'Informative.'},
    {speaker:'ren_uni',jp:'承認、廃案になった薬、ありましたね。',en:"Approval-scrapped drugs — existed.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。本州医療連携、強化中です。',en:"Yes. Honshu medical-link — strengthening.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'鎖国期の医療制限、現代との対比、研究、興味深いですね。',en:"Sakoku medical-limits — modern-contrast research, intriguing.",style:'Reflective close.'},
  ]},
  {id:'conv_06494',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews a business strategy',lines:[
    {speaker:'hiroshi_boss',jp:'業界の名声、長年で築いてきた。',en:"Industry fame — long-built.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。海外市場、攻める方針で進めます。',en:"Yes. Overseas market — aggressive stance.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'当社の前身、商社時代の精神、忘れるな。',en:"Predecessor — trading-era spirit, don't forget.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社内模試、人事評価に組み込んでいます。',en:"Yes. Internal mock — HR-evaluation-integrated.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'近世商人の信用、現代でも通用する。',en:"Early-modern merchant trust — still works modern.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。承認、廃案にならないよう、慎重に進めます。',en:"Yes. Approval — non-scrapped, careful.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'本州内のチェーン、強化しろ。',en:"Honshu-chain — strengthen.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。グローバル化と鎖国的閉鎖性、バランスが鍵です。',en:"Yes. Globalization-vs-sakoku-closedness — balance key.",style:'Close.'},
  ]},
  {id:'conv_06495',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a history project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、歴史研究、文豪の名声、テーマですね。',en:"Sakura — history, literary fame, theme.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。改革を攻める政治家、章にしました。',en:"Yes. Reform-aggressive politicians — chapter.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'地域の前身、藩政時代、面白いですね。',en:"Region-predecessor — han era, fun.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。受験準備で、模試、繰り返し受けます。',en:"Yes. Exam-prep — mocks repeated.",style:'Reflective.'},
    {speaker:'asuka_teacher',jp:'近世の出来事、現代に繋がる流れですね。',en:"Early-modern events — modern-flow.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'廃案になった藩政改革、史料、深い。',en:"Scrapped han-reforms — sources, deep.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'本州各地、丁寧にまとめましたね。',en:"Honshu-wide — well summarized.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'鎖国時代の生活、章末で論じます。',en:"Sakoku-era life — end-discussed.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06496',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'教室の黒板、新しく塗装されたよ。',en:"Class blackboard — newly painted.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。校舎、ペイント工事、夏休み中だったね。',en:"Yeah. School-building paint-work — during summer.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'バレーボール部、来週、試合だって。',en:"Volleyball — next-week match.",style:'Animated.'},
    {speaker:'riku_teen',jp:'庭の紫陽花、もう、咲き始めた。',en:"Garden hydrangeas — bloom-starting.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'結婚式のドレス、銀色、綺麗だった。',en:"Wedding dress silver — lovely.",style:'Wistful.'},
    {speaker:'riku_teen',jp:'公園の池、鯉、泳いでた。',en:"Park pond — carp swam.",style:'Wistful.'},
    {speaker:'sakura_teen',jp:'駅前のライブハウス、新作公演あるって。',en:"Station-front live-house — new show.",style:'Excited.'},
    {speaker:'riku_teen',jp:'兄ちゃん、アスリートの体型、目指してる。',en:"Brother — aiming athlete-physique.",style:'Animated close.'},
  ]},
  {id:'conv_06497',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、教室の黒板、絵、描かせてくれた。',en:"Mom — blackboard, let me draw.",style:'Excited child.'},
    {speaker:'yumiko_mom',jp:'うん。お父さん、玄関のペイント、塗り直してくれたわ。',en:"Yes. Dad — entrance paint, re-painted.",style:'Tender.'},
    {speaker:'sho_child',jp:'体育で、バレーボール、上手にできた!',en:"PE — volleyball, did well!",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'庭の紫陽花、お母さんも、楽しみよ。',en:"Garden hydrangea — Mom too excited.",style:'Soft.'},
    {speaker:'sho_child',jp:'昔のスプーン、銀色で、ぴかぴか。',en:"Old spoon — silver, shiny.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'子供の日、鯉のぼり、お父さんと飾ろうね。',en:"Children's Day — carp-streamers with Dad.",style:'Warm.'},
    {speaker:'sho_child',jp:'お兄ちゃん、ライブハウス、楽しみにしてた。',en:"Brother — live-house excited.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'アスリート、お父さんの夢、覚えてる?',en:"Athlete — Dad's dream, remember?",style:'Warm close.'},
  ]},
  {id:'conv_06498',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'カフェの黒板メニュー、毎日、可愛く描いてくれてる。',en:"Cafe blackboard menu — daily cute-drawn.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。壁のペイント、来月、塗り替えるの。',en:"Yeah. Wall paint — next-month repaint.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'公園で、バレーボール、楽しんでる若者、見たわ。',en:"Park volleyball — saw enjoyers.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'梅雨入り、紫陽花、お店に飾ったよ。',en:"Tsuyu-start — hydrangea in shop.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'銀色のアクセサリー、お祝いに買った。',en:"Silver accessory — celebrate-bought.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'錦鯉、池で、優雅に泳いでる。',en:"Nishikigoi — elegant in pond.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'ライブハウスのコンサート、行こうよ。',en:"Live-house concert — let's go.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'アスリート向け、プロテインドリンク、出してる。',en:"Athlete-oriented — protein drinks released.",style:'Warm close.'},
  ]},
  {id:'conv_06499',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher and student discuss culture',lines:[
    {speaker:'asuka_teacher',jp:'論文、教室の黒板の歴史、興味深いですね。',en:"Paper — blackboard history, intriguing.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。建築のペイント技術、章として扱いました。',en:"Yes. Building-paint tech — chapter.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'バレーボールの国際大会、日本選手の活躍、章末でしたね。',en:"Volleyball intl — JP-athlete activity, end.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。紫陽花の文化的意味、別章で扱いました。',en:"Yes. Hydrangea cultural meaning — separate chapter.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'銀色の貨幣の歴史、近世日本、面白いですね。',en:"Silver-currency history — early-modern Japan, intriguing.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'鯉養殖の地域経済、産業章でまとめました。',en:"Carp-farming local-econ — industry-chapter.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'ライブハウスの文化、現代都市、独特ですね。',en:"Live-house culture — modern-urban, unique.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'アスリートのキャリア論、最終章にしました。',en:"Athlete career-theory — final-chapter.",style:'Earnest close.'},
  ]},
  {id:'conv_06500',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan an event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、店の黒板アート、新人に依頼しよか。',en:"Aoi-san — blackboard art, ask new-hire?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。外壁ペイント、リフレッシュしましょう。',en:"Yes. Exterior paint — refresh.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'地元バレーボールクラブと、コラボ、ええなあ。',en:"Local volleyball-club collab — nice.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'梅雨期、紫陽花のドリンク、限定で出します。',en:"Tsuyu — hydrangea drink, limited release.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'銀色の食器、特別感、出るな。',en:"Silver dishware — special-feel emerges.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'こいのぼり飾り、子供の日、店頭に。',en:"Carp-streamer decor — Children's Day, storefront.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'近所のライブハウスと、提携プラン、出そ。',en:"Local live-house — partner plan release.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'アスリート、お客様向け、健康メニュー、強化します。',en:"Athlete-customers — health-menu strengthened.",style:'Warm close.'},
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

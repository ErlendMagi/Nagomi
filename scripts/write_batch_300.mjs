import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_300 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['うんざり','ひさし','正反対','太い','手首','片隅','愛着','立ち止まっ']
const B_T = ['工務','自給','話し合う','書き換え','増設','換気','量販','退社']
const C_T = ['薬剤','警報','逃亡','県庁','各省','一国','迫害','消毒']
const D_T = ['柔道','忍者','空手','ご馳走','吹奏楽','剣道','スケッチ','リフレッシュ']

const data = [
  // A
  {id:'conv_05961',cluster:'A',ambient:'living_room_quiet',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends commiserate over the week',lines:[
    {speaker:'mei_romantic',jp:'今週、もう、うんざりしてる。',en:"This week — I'm done with it.",style:'Worn.'},
    {speaker:'aoi_barista',jp:'ひさしぶりに、ゆっくり話そう。',en:"Long time since we talked at length.",style:'Gentle.'},
    {speaker:'mei_romantic',jp:'夫と正反対の意見ばっかりで、疲れた。',en:"Husband's always the opposite view — tiring.",style:'Vulnerable.'},
    {speaker:'aoi_barista',jp:'たまには、太い味噌汁、家で作ってあげようか。',en:"Sometimes — hearty miso soup at home, want me to make some?",style:'Warm.'},
    {speaker:'mei_romantic',jp:'手首、最近痛むの。家事で酷使してる。',en:"My wrist hurts lately — household overuse.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'部屋の片隅で、お気に入りの椅子、座って休んでね。',en:"Corner of the room — favorite chair, rest there.",style:'Tender.'},
    {speaker:'mei_romantic',jp:'家への愛着、変わらないけど。',en:"My attachment to home — unchanged though.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'立ち止まって、深呼吸してね。',en:"Pause, take a deep breath.",style:'Warm close.'},
  ]},
  {id:'conv_05962',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk home',lines:[
    {speaker:'sakura_teen',jp:'今週の宿題、量、もう、うんざり。',en:"This week's homework load — I'm sick of it.",style:'Worn teen.'},
    {speaker:'riku_teen',jp:'ひさしぶりに公園で休もう。',en:"Long while since we rested at the park.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'弟と正反対の趣味で、家でいつも対立してる。',en:"Opposite hobby to my bro — always clashing at home.",style:'Wry.'},
    {speaker:'riku_teen',jp:'今日の昼の太いうどん、美味かったな。',en:"Today's thick udon at lunch was good.",style:'Bright.'},
    {speaker:'sakura_teen',jp:'手首、書きすぎて、痛い。',en:"Wrote too much — wrist sore.",style:'Subdued.'},
    {speaker:'riku_teen',jp:'公園の片隅のベンチ、座ろう。',en:"Bench in the park corner — sit.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'制服、愛着あるね。',en:"Uniform — attached to it.",style:'Wistful.'},
    {speaker:'riku_teen',jp:'信号で立ち止まって、空、見上げよう。',en:"At the light, pause; look up.",style:'Reflective close.'},
  ]},
  {id:'conv_05963',cluster:'A',ambient:'park_distant_birds',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple walks slowly',lines:[
    {speaker:'hiroshi_elder',jp:'最近、ニュースには、うんざりだな。',en:"Lately, news — sick of it.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'ひさしぶりに、二人でゆっくり散歩できて、嬉しいわ。',en:"Long since we strolled together — glad.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'若い頃の私と、お前は正反対だった。',en:"In youth, you and I were opposites.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'年取って、お腹も太いって言われがち。',en:"Got older — being called thick around the middle.",style:'Wry.'},
    {speaker:'hiroshi_elder',jp:'お前の手首、今日も冷たいね。',en:"Your wrist's cold today again.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'庭の片隅に、まだスミレが咲いてる。',en:"Garden corner — violet's still blooming.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'家への愛着、二人とも強いね。',en:"Attachment to home — both strong.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'信号で立ち止まって、ゆっくり渡りましょうね。',en:"At the light, pause and cross slowly.",style:'Warm close.'},
  ]},
  {id:'conv_05964',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom comforts her child',lines:[
    {speaker:'sho_child',jp:'ママ、宿題が多くて、うんざり。',en:"Mom, lots of homework — sick of it.",style:'Tired child.'},
    {speaker:'yumiko_mom',jp:'ひさしぶりに、夕飯ハンバーグにする?',en:"Long while — hamburger for dinner?",style:'Bright.'},
    {speaker:'sho_child',jp:'兄ちゃん、僕と正反対のキャラなんだ。',en:"My bro — opposite character to me.",style:'Casual.'},
    {speaker:'yumiko_mom',jp:'太い眉が、似てるって言われるけどね。',en:"Thick brows — people say you resemble each other.",style:'Wry.'},
    {speaker:'sho_child',jp:'手首にバンドエイド、貼ってもらえる?',en:"Bandage on my wrist?",style:'Sweet.'},
    {speaker:'yumiko_mom',jp:'いいよ。リビングの片隅に、お気に入りの絵本、出しておくね。',en:"Sure. Favorite picture book in the corner.",style:'Tender.'},
    {speaker:'sho_child',jp:'うん。あの絵本、愛着あるんだ。',en:"Yes. That book — attached to it.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'読み終わったら、立ち止まって、休憩しようね。',en:"After reading, pause and rest.",style:'Warm close.'},
  ]},
  {id:'conv_05965',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai chats with a teen',lines:[
    {speaker:'ren_uni',jp:'桜、最近、レポートが多くて、うんざりだろ。',en:"Sakura, lots of reports — sick of it?",style:'Casual senpai.'},
    {speaker:'sakura_teen',jp:'はい。先輩とは、ひさしぶりにお話しできて、嬉しいです。',en:"Yes. Long since I last talked with you — glad.",style:'Earnest teen.'},
    {speaker:'ren_uni',jp:'同期の意見、正反対で、まとまらないんだ。',en:"Classmates' views are opposite — won't gel.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'相談相手、太い人脈、先輩持ってるんですね。',en:"You've a thick network of consultants.",style:'Animated.'},
    {speaker:'ren_uni',jp:'うん。今、手首痛めてて、PCも辛い。',en:"Yeah. Wrist hurts; even PC is rough.",style:'Subdued.'},
    {speaker:'sakura_teen',jp:'カフェの片隅、静かで、いい席です。',en:"Cafe corner — quiet, good seat.",style:'Soft.'},
    {speaker:'ren_uni',jp:'この店、愛着あって、いつも来てる。',en:"This shop — attached, regular.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'時々、立ち止まって、振り返るの、大事ですね。',en:"Sometimes pausing to look back is vital.",style:'Reflective close.'},
  ]},

  // B
  {id:'conv_05966',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews facility upgrades',lines:[
    {speaker:'hiroshi_boss',jp:'本社改装、工務店との契約、進めろ。',en:"HQ remodel — proceed with the contractor.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。自給自足の食堂、計画段階で話し合う必要があります。',en:"Yes. In-house self-sufficient cafeteria — need to discuss in planning.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'契約書、書き換え対応の条項、入れろ。',en:"Contract — add rewrite clauses.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。会議室、増設します。換気設備も更新。',en:"Yes. Add meeting rooms. Update ventilation too.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'量販店との取引、契約見直しを。退社時間、社員に配慮しろ。',en:"Volume-retail dealings — review contracts. Mind staff exit times.",style:'Decisive close.'},
  ]},
  {id:'conv_05967',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss store ops',lines:[
    {speaker:'yuki_office',jp:'地元工務店、引き続き発注しよう。',en:"Local contractor — keep ordering.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。自給率の高い食材、話し合う場を持ちました。',en:"Yes. High-self-sufficiency ingredients — held a discussion.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'看板の書き換え、年内に。展示棚も増設しよう。',en:"Sign rewrite — by year-end. Add display shelves.",style:'Direction.'},
    {speaker:'kenji_office',jp:'換気の点検、量販店仕様で、月一回。',en:"Ventilation checks — volume-retail spec, monthly.",style:'Update.'},
    {speaker:'yuki_office',jp:'退社時刻の管理、徹底させていこう。',en:"Exit-time control — enforce.",style:'Close.'},
  ]},
  {id:'conv_05968',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、工務店との連携、企業活動の基盤だ。',en:"Ren, contractor relations are foundational.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。自給型の社員食堂、興味があります。',en:"Yes. Self-sufficient staff cafeterias interest me.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'地元と話し合う姿勢、忘れるな。',en:"Don't forget the local-talk stance.",style:'Direction.'},
    {speaker:'ren_uni',jp:'設備の書き換えや増設、計画段階から学べますか。',en:"Spec rewrites and expansion — learnable from planning?",style:'Curious.'},
    {speaker:'hiroshi_boss',jp:'うん。換気は地味だが、量販店並みの規模で重要だ。',en:"Yes. Ventilation seems mundane but vital at volume scale.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'退社時刻の管理、現場でも勉強します。',en:"Exit-time mgmt — I'll learn at the front.",style:'Earnest close.'},
  ]},
  {id:'conv_05969',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on workplace safety',lines:[
    {speaker:'takeda_officer',jp:'御社の工務関係、安全基準、再確認をお願いします。',en:"Your contractor work — recheck safety standards.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。自給型の食材保管、衛生面で話し合う必要があります。',en:"Yes. Self-sufficient ingredient storage — need to discuss hygiene.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'契約書の書き換え時、警察への届出が必要な場合も。',en:"At contract rewrites, sometimes police filing needed.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'カメラ増設、換気の改善、近日中に着手します。',en:"Add cams, improve ventilation — starting soon.",style:'Update.'},
    {speaker:'takeda_officer',jp:'量販店並みの規模なので、退社時刻の戸締り、厳重に。',en:"Volume-retail-grade scale — strict closing.",style:'Procedural close.'},
  ]},
  {id:'conv_05970',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'昔の工務店、皆顔なじみだった。',en:"Old contractors — all familiar faces.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。自給自足の食堂、伝統復活させたい。',en:"Yes. Self-sufficient cafeteria — want to revive.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'地元と話し合う姿勢、続けろ。書き換え時の文面、慎重に。',en:"Keep the local-talk stance. Be careful with rewrites.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'倉庫を増設し、換気も最新型に更新中です。',en:"Adding warehouses, updating ventilation to modern.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'量販店化、急ぐな。社員の退社時間、守れ。',en:"Don't rush volume-retail expansion. Respect exit times.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_05971',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor briefs a reporter about health policy',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、薬剤師不足、地域医療で課題です。',en:"Ren, pharmacist shortage challenges regional medicine.",style:'Calm.'},
    {speaker:'ren_uni',jp:'感染症の警報、頻度が増えていますね。',en:"Infectious-disease alerts — rising in frequency.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。逃亡を試みる感染者の事案、ニュースにもなりました。',en:"Yes. Attempts to evade isolation — also news.",style:'Patient.'},
    {speaker:'ren_uni',jp:'県庁が音頭を取って、各省と連携しているそうですね。',en:"The prefectural office leads, coordinating with ministries.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。一国の問題ではなく、世界的です。',en:"Yes. Not a one-nation issue — global.",style:'Informative.'},
    {speaker:'ren_uni',jp:'被害者が迫害されないよう、配慮、必要ですね。',en:"Ensure victims aren't persecuted — care needed.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'消毒運用も、徹底します。',en:"Disinfection ops — also strict.",style:'Firm close.'},
  ]},
  {id:'conv_05972',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs about a health-related case',lines:[
    {speaker:'takeda_officer',jp:'薬剤の違法流通、警察庁で集中対応中です。',en:"Illegal pharmaceutical trade — NPA focused.",style:'Calm.'},
    {speaker:'ren_uni',jp:'地域に警報を出した事例、ありますね。',en:"Cases where regional alerts issued, right?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。容疑者の逃亡、県庁との連携で対応しました。',en:"Yes. Suspect flight — handled with prefectural-office help.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'各省庁の取り組み、一国規模のキャンペーンになっていますね。',en:"Ministerial efforts — a nationwide-scale campaign.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'被害者が二次的に迫害されないよう、警察も配慮します。',en:"Police mind secondary persecution of victims.",style:'Firm.'},
    {speaker:'ren_uni',jp:'現場では、消毒手順の周知も、進められていますか。',en:"In the field, are disinfection procedures spread too?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい、徹底しています。',en:"Yes, strictly.",style:'Close.'},
  ]},
  {id:'conv_05973',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher and student discuss a public-health paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、薬剤政策の歴史、丁寧ですね。',en:"Paper — pharmaceutical-policy history is thorough.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。警報運用と逃亡事例の章、慎重に書きました。',en:"Yes. Alert-ops and flight-case chapters — carefully written.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'県庁、各省の協調、一国レベルでの取り組み、印象的です。',en:"Prefectural-ministerial coordination — nation-scale, striking.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'被害者が迫害される構造、章末で論じています。',en:"Persecuted-victim structures — discussed at chapter end.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'歴史的に消毒法の発展、別章ですね。',en:"Historically, disinfection development — separate chapter.",style:'Reflective close.'},
  ]},
  {id:'conv_05974',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews a corporate risk',lines:[
    {speaker:'hiroshi_boss',jp:'業界の薬剤管理、警報レベルで動いている。',en:"Industry-wide pharmacy mgmt — alert-level moves.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。容疑者の逃亡騒ぎ、メディア対応中です。',en:"Yes. Suspect-flight buzz — media handled.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'県庁、各省と歩調を合わせろ。',en:"Sync with prefectural office and ministries.",style:'Direction.'},
    {speaker:'kenji_office',jp:'一国規模のリコール、初動を急ぎます。',en:"Nationwide-scale recall — rushing initial moves.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'関係者が迫害される構図、避けろ。消毒の周知も。',en:"Avoid persecuting parties. Spread disinfection too.",style:'Decisive close.'},
  ]},
  {id:'conv_05975',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a regional study',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、医療政策、薬剤師の役割、関心を持っていますね。',en:"Sakura, you care about medical policy and pharmacists' roles.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。地域に警報出される時、住民の動き、興味があります。',en:"Yes. When alerts go out, resident behavior interests me.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'逃亡や迫害といった、社会不安の側面も大切な論点ですね。',en:"Flight, persecution — social-anxiety angles also matter.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'県庁が各省と連携、一国レベルで取り組む様子、整理しました。',en:"Prefectural-ministerial coordination at nation scale — organized.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'家庭での消毒、最終章で扱いたいですね。',en:"Home disinfection — discuss in the final chapter.",style:'Reflective close.'},
  ]},

  // D
  {id:'conv_05976',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat about club activities',lines:[
    {speaker:'sakura_teen',jp:'柔道部、また昇段試験あるんだって。',en:"Judo club — promotion test again.",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'忍者みたいに、素早く動く練習、面白いよな。',en:"Ninja-like agility drills — fun.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'空手部の友達も、見学に来てくれる。',en:"Karate-club friends come watch.",style:'Animated.'},
    {speaker:'riku_teen',jp:'試合後、ご馳走になることもあるよ。',en:"After matches, sometimes treated to a feast.",style:'Bright.'},
    {speaker:'sakura_teen',jp:'吹奏楽部、終演後の打ち上げ、賑やかだって。',en:"Band club — after-show parties are lively, I hear.",style:'Cheerful.'},
    {speaker:'riku_teen',jp:'剣道部、礼儀正しいよな。',en:"Kendo club is polite.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'文化祭で、皆でスケッチ展示しよう。',en:"Cultural fest — exhibit sketches together.",style:'Bright.'},
    {speaker:'riku_teen',jp:'長期休暇に、温泉でリフレッシュしたい。',en:"On long break — hot-spring refresh.",style:'Wistful close.'},
  ]},
  {id:'conv_05977',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends plan a culture weekend',lines:[
    {speaker:'mei_romantic',jp:'週末、近所の道場で柔道体験、行く?',en:"Weekend — try judo at the local dojo?",style:'Excited.'},
    {speaker:'aoi_barista',jp:'いいね。忍者村のテーマパーク、ついでに寄ろう。',en:"Sure. Stop by the ninja-village theme park too.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'空手の試合、近くで開催されてる。',en:"Karate match — nearby.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'お昼は、ご馳走を奮発しようか。',en:"Lunch — splurge on a feast.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'夕方、吹奏楽の演奏会、駅前で。',en:"Evening — band concert by the station.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'剣道の演武も、神社で見られるって。',en:"Kendo demo — at the shrine, too.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'休憩中、川辺でスケッチもしたい。',en:"During breaks — riverside sketching too.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'温泉でリフレッシュして締めくくろう。',en:"Wrap with onsen refresh.",style:'Warm close.'},
  ]},
  {id:'conv_05978',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher discusses traditional-arts research',lines:[
    {speaker:'asuka_teacher',jp:'論文、武道史、柔道と空手の比較、興味深いですね。',en:"Paper — martial-arts history, judo vs. karate, intriguing.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。忍者の文化的記述、別章で扱いました。',en:"Yes. Ninja cultural records — separate chapter.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'伝統行事のご馳走、地域文化の象徴ですね。',en:"Festival feasts — symbols of regional culture.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'吹奏楽や剣道、現代の青少年教育に絡めて論じました。',en:"Band and kendo — discussed re: youth education.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'スケッチによる現地調査、丁寧ですね。',en:"On-site sketching surveys — careful.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'最終章は、武道家のリフレッシュ法、まとめました。',en:"Final chapter — martial-artists' refresh methods, summarized.",style:'Earnest close.'},
  ]},
  {id:'conv_05979',cluster:'D',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:D_T,scenario:'A senpai talks club life with a teen',lines:[
    {speaker:'ren_uni',jp:'桜、柔道、ちょっと興味あるって言ってたね。',en:"Sakura, you said you're interested in judo.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。忍者をテーマにしたゲーム、影響受けて。',en:"Yes. Ninja-themed game influenced me.",style:'Earnest teen.'},
    {speaker:'ren_uni',jp:'空手の道場も、見学できるよ、紹介する。',en:"Karate dojo — observable; I'll intro.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'うちの母、お祝いの時、ご馳走作ってくれます。',en:"Mom cooks feasts at celebrations.",style:'Bright.'},
    {speaker:'ren_uni',jp:'文化祭で、吹奏楽部の生演奏も観られる。',en:"Cultural fest — band live performance too.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'剣道の演武、礼儀正しくて、感動しました。',en:"Kendo demos — polite, moving.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'放課後、お絵描き部でスケッチ、いいよ。',en:"After school — art club for sketching, good.",style:'Bright.'},
    {speaker:'sakura_teen',jp:'試験後、リフレッシュに、皆で温泉行きましょう。',en:"After exams — onsen refresh for all.",style:'Warm close.'},
  ]},
  {id:'conv_05980',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan a martial-arts-themed event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、武道フェア、店でやらんか。',en:"Aoi-san, martial-arts fair at the shop?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。柔道家とのトークセッション、組みましょう。',en:"Yes. Schedule a judo-talk session.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'忍者風の衣装でスタッフ、雰囲気でるな。',en:"Staff in ninja-style outfit — sets the vibe.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'空手家による型の披露も、人気でそう。',en:"Karate kata demo — likely popular.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'武道家にご馳走、夕食を提供しよ。',en:"Treat martial artists to feast dinner.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'吹奏楽部の応援演奏も、入口で。',en:"Band-club cheer performance at the entrance.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'剣道家のスケッチ展、二階で開催しよ。',en:"Kendo-artist sketch show — upstairs.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'終演後、お客様にリフレッシュドリンクを配ります。',en:"Post-event — refresh-drink handout to guests.",style:'Warm close.'},
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_330 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['年来','腫れ','固まり','がんばろ','いただこ','叫び声','過ごさ','細やか']
const B_T = ['顔ぶれ','時限','入れれ','次号','迂回','臨み','思い浮かべる','長め']
const C_T = ['伏線','転機','崇','施す','骨太','通り抜け','ろくな','根付い']
const D_T = ['遊べる','ビリ','チャリ','脇役','最上','名残','グマ','少なめ']

const data = [
  // A
  {id:'conv_06561',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お父さん、ぼくの十年来の友達みたい。',en:"Mom — Dad, like my decade-long friend.",style:'Sweet child.'},
    {speaker:'yumiko_mom',jp:'うん。お顔、虫刺されで、腫れちゃったね。',en:"Yes. Face — bug-bite, swollen.",style:'Tender.'},
    {speaker:'sho_child',jp:'プリン、冷蔵庫で、ちゃんと固まりました!',en:"Pudding — fridge, properly set!",style:'Excited.'},
    {speaker:'yumiko_mom',jp:'明日のテスト、一緒にがんばろうね。',en:"Tomorrow's test — together try-hard.",style:'Warm.'},
    {speaker:'sho_child',jp:'ご飯、おかわりいただこうかな。',en:"Rice — second helping, take maybe.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'うん。外で、叫び声、すごかったね、さっき。',en:"Yes. Outside — scream, intense, earlier.",style:'Reflective.'},
    {speaker:'sho_child',jp:'夏休み、家でゆっくり過ごさないと、もったいないね。',en:"Summer — relax-not-spent, waste.",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'翔くんの優しさ、細やかで、嬉しいよ。',en:"Sho's kindness — delicate, happy.",style:'Warm close.'},
  ]},
  {id:'conv_06562',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends catch up',lines:[
    {speaker:'mei_romantic',jp:'葵、十年来の友達って、ありがたいよね。',en:"Aoi — decade-long friend, grateful.",style:'Warm.'},
    {speaker:'aoi_barista',jp:'うん。指、腫れてるよ、メイちゃん、大丈夫?',en:"Yeah. Finger swollen, Mei — okay?",style:'Concerned.'},
    {speaker:'mei_romantic',jp:'昨日のゼリー、ちゃんと固まりに、なってたの、安心。',en:"Yesterday's jelly — properly set, relieved.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'明日のプレゼン、一緒にがんばろうね。',en:"Tomorrow's pres — together try-hard.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'コーヒー、もう一杯、いただこうかな。',en:"Coffee — another, take maybe.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'昨夜、近所で叫び声、聞こえたわよ、怖かった。',en:"Last night — neighbor scream heard, scary.",style:'Concerned.'},
    {speaker:'mei_romantic',jp:'休日、ひとりで過ごさないように、誘ってね。',en:"Holidays — alone-not-spent, invite.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'メイちゃん、細やかな気遣い、いつもありがとう。',en:"Mei — delicate care, always thanks.",style:'Warm close.'},
  ]},
  {id:'conv_06563',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat after school',lines:[
    {speaker:'sakura_teen',jp:'リク、お前、二年来の親友だよね、私の。',en:"Riku — you, my two-year-long bestie.",style:'Warm teen.'},
    {speaker:'riku_teen',jp:'うん。あれ、目、腫れてんじゃん、桜。',en:"Yeah. Hey — eyes swollen, Sakura.",style:'Concerned.'},
    {speaker:'sakura_teen',jp:'うん。粘土の作品、ちゃんと固まりに、なるかな、心配。',en:"Yeah. Clay work — properly set?, worried.",style:'Wry.'},
    {speaker:'riku_teen',jp:'試合、明日、一緒にがんばろうな。',en:"Match tomorrow — together try-hard.",style:'Earnest.'},
    {speaker:'sakura_teen',jp:'お弁当、ちょっといただこうかな、リク。',en:"Lunch — bit-take, Riku?",style:'Eager.'},
    {speaker:'riku_teen',jp:'うん。校内で、誰かの叫び声、聞こえなかった?',en:"Yeah. Indoors — someone's scream, heard?",style:'Curious.'},
    {speaker:'sakura_teen',jp:'休み、家にこもって過ごさない方が、いいよね。',en:"Break — non-shut-in-spent better.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'桜の気遣い、結構細やかなんだよな、いつも。',en:"Sakura's care — quite delicate, always.",style:'Soft close.'},
  ]},
  {id:'conv_06564',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'五十年来、共に過ごした人生、感謝しているよ。',en:"Fifty-year-long together life — grateful.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'あなた、足、また腫れて、心配だわ。',en:"Dear — leg, swollen again, worried.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'年寄りの体、なかなか固まりが取れないな、最近。',en:"Old body — stiffness hard-to-remove lately.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'リハビリ、一緒にがんばろうね、あなた。',en:"Rehab — together try-hard, dear.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'お茶、もう一杯、いただこうか。',en:"Tea — another, take?",style:'Calm.'},
    {speaker:'sachiko_grandma',jp:'隣の家、夜に叫び声、聞こえたわね、昨日。',en:"Neighbor's house — night scream, heard yesterday.",style:'Concerned.'},
    {speaker:'hiroshi_elder',jp:'残りの時、何もせずに過ごさないようにしたいな。',en:"Remaining time — not-do-nothing-spent, want.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'あなたの細やかな心、好きでしたよ、ずっと。',en:"Your delicate heart — loved, always.",style:'Warm close.'},
  ]},
  {id:'conv_06565',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、ママの五年来の友達よ。',en:"Sho — Mei-sis, Mom's five-year-long friend.",style:'Warm.'},
    {speaker:'sho_child',jp:'うん。手、ちょっと腫れてるよ、メイ姉さん。',en:"Yeah. Hand — slightly swollen, Mei-sis.",style:'Honest child.'},
    {speaker:'mei_romantic',jp:'公園の池、氷の固まりが、浮いていたわね。',en:"Park pond — ice-clumps floating.",style:'Reflective.'},
    {speaker:'sho_child',jp:'宿題、一緒にがんばろう、メイ姉さん!',en:"Homework — together try-hard, Mei-sis!",style:'Eager.'},
    {speaker:'mei_romantic',jp:'お土産のクッキー、いただこうかな。',en:"Souvenir cookies — take maybe.",style:'Soft.'},
    {speaker:'sho_child',jp:'昨日、公園で、子供の叫び声、聞こえたよ。',en:"Yesterday — park, kid's scream heard.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'休日、ぼーっとして過ごさないようにしているの。',en:"Holidays — zone-out-not-spent, conscious.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さんの編み物、細やかで、すごい!',en:"Mei-sis's knitting — delicate, awesome!",style:'Awe close.'},
  ]},

  // B
  {id:'conv_06566',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews a project meeting',lines:[
    {speaker:'hiroshi_boss',jp:'今回の会議、顔ぶれが、いつもと違うな。',en:"This meeting — faces, unusual.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。時限プロジェクトとして、進めています。',en:"Yes. Time-limited project — advancing.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'予算、もう少し入れれば、結果、出るかな。',en:"Budget — if-more-put, results emerge?",style:'Probe.'},
    {speaker:'kenji_office',jp:'はい。次号の社内報、特集を組みます。',en:"Yes. Next-issue corp-zine — feature.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'工事中、迂回ルートで、通勤してくれ。',en:"Construction — detour route, commute.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。来週の交渉に臨み、しっかり準備します。',en:"Yes. Next-week negotiation — face, prep firmly.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'過去の失敗、ふと思い浮かべることもある。',en:"Past failures — suddenly think-of, sometimes.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。発表時間、長めに、確保しております。',en:"Yes. Presentation time — longish, secured.",style:'Close.'},
  ]},
  {id:'conv_06567',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat about a launch',lines:[
    {speaker:'yuki_office',jp:'今回の発表、顔ぶれ、各部から集めましたね。',en:"This presentation — faces, multi-dept gathered.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。時限的なキャンペーン、効果絶大です。',en:"Yes. Time-limited campaign — huge effect.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'予算、もう少し入れれば、宣伝、強化できる。',en:"Budget — if-more-put, ad-strengthen-able.",style:'Probe.'},
    {speaker:'kenji_office',jp:'はい。次号の業界誌、取材依頼、入っています。',en:"Yes. Next-issue trade-mag — interview-req received.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'通勤、工事区間、迂回しているの、続いてる?',en:"Commute — construction detour continues?",style:'Curious.'},
    {speaker:'kenji_office',jp:'はい。新企画に臨み、若手も意欲的です。',en:"Yes. New-plan face — youth motivated.",style:'Cheerful.'},
    {speaker:'yuki_office',jp:'昔の上司の言葉、ふと思い浮かべて、励みになります。',en:"Old boss's words — suddenly think-of, encouraging.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。プレゼン枠、長めに、調整済みです。',en:"Yes. Pres slot — longish, adjusted.",style:'Close.'},
  ]},
  {id:'conv_06568',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、君も、研究室の顔ぶれの一人だな、今や。',en:"Ren — also lab-face, now.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。時限式の業務、優先しています。',en:"Yes. Time-limited tasks prioritized.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'熱意、もう少し入れれば、もっと成果が出るぞ。',en:"Passion — more-put, more results.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。次号の学会誌に、共著で出します。',en:"Yes. Next-issue journal — co-author publish.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'失敗を迂回しようとせず、正面から学べ。',en:"Don't detour failure — frontally learn.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。社会人として、人生に臨み、覚悟しております。',en:"Yes. As adult, life-face, resolved.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'若い頃の夢、たまには思い浮かべることだ。',en:"Youth dreams — occasionally think-of.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。準備、長めに見ていただき、感謝です。',en:"Yes. Prep — longish-allow, grateful.",style:'Earnest close.'},
  ]},
  {id:'conv_06569',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察官の顔ぶれ、本日、ご紹介します。',en:"Officer faces — today, introduce.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。時限装置のような事案、注意必要です。',en:"Yes. Time-bomb-like cases — caution needed.",style:'Update.'},
    {speaker:'takeda_officer',jp:'防犯資金、少しでも入れれば、街、変わります。',en:"Crime-prev funds — even-bit-put, town changes.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。次号の地域広報、警察情報、掲載します。',en:"Yes. Next-issue local-PR — police-info publish.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'工事区間、警察車両も、迂回しております。',en:"Construction — police vehicles also detouring.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。来期、警察協力に臨み、社内体制、整えます。',en:"Yes. Next-term police-coop face — internal-ready.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'被害者の顔、ふと思い浮かべる、職務の苦悩です。',en:"Victims' faces — suddenly think-of — duty agony.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。協議時間、長めに、設定しております。',en:"Yes. Discussion time — longish set.",style:'Close.'},
  ]},
  {id:'conv_06570',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期の顔ぶれ、今でも忘れない。',en:"Founding-era faces — still unforgotten.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。時限的な危機を乗り越えてきました。',en:"Yes. Time-limited crises overcome.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'手間と時間、もう少し入れれば、より良くなる。',en:"Effort and time — more-put, better.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。次号の業界誌、創業者として、寄稿予定です。',en:"Yes. Next-issue trade-mag — as founder, contribute.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'問題を迂回せず、正面から取り組め。',en:"Don't detour issues — frontally tackle.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。新時代に臨み、覚悟、新たにします。',en:"Yes. New-era face — resolve renew.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'創業の喜び、ふと思い浮かべる時間、大切にしろ。',en:"Founding-joy — suddenly think-of-time, treasure.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。寿命を長めに、頑張ってください、お父さん。',en:"Yes. Lifespan longish — keep at it, Dad.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06571',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses literature studies',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、論文、伏線の構造、見事に分析してありますね。',en:"Ren — paper, foreshadow structure, brilliantly analyzed.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。主人公の転機、章ごとに区切りました。',en:"Yes. Hero's turning point — chapter-divided.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'神への崇拝が、物語に深みを与えていますね。',en:"God-worship — gives depth to story.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。作家が施す手法、独特で面白いです。',en:"Yes. Author-applied technique — unique, fun.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'骨太なテーマを扱っていますね、卒論の中で。',en:"Robust themes treated — within thesis.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。読者が時代を通り抜けて、感じ取る作品です。',en:"Yes. Reader era-pass-through, feels — work.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'ろくな解釈がない論文、世間に多いですが、これは別物ですね。',en:"Lousy interpretation papers — many out there — this is different.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。古典が現代に根付いていく過程、論じました。',en:"Yes. Classic taking-root in modernity — argued.",style:'Earnest close.'},
  ]},
  {id:'conv_06572',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a cold case',lines:[
    {speaker:'takeda_officer',jp:'本件、過去の伏線が、ようやく回収されました。',en:"Case — past foreshadow finally recovered.",style:'Calm.'},
    {speaker:'ren_uni',jp:'なるほど、容疑者にとっても、転機の事件でしたか。',en:"I see — suspect too, turning-point case?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。被害者は、地域で崇拝される人物でした。',en:"Yes. Victim — locally worshipped figure.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察が新たな手法を施す事件、増えていますね。',en:"Police new-method-apply cases — increasing.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。骨太の捜査方針、変わりません。',en:"Yes. Robust-investigation policy — unchanged.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者、検問を通り抜けようとしたんですね。',en:"Suspect — checkpoint pass-through attempted.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。ろくな足取りも残さず、長く逃走しました。',en:"Yes. Leaving lousy trail — long fled.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'地域に防犯意識が根付いていく時間、必要ですね。',en:"Crime-prev conscience taking-root in region — time needed.",style:'Curious close.'},
  ]},
  {id:'conv_06573',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、疫学に、伏線のような兆候、あります。',en:"Ren — in epidemiology, foreshadow-like signs exist.",style:'Calm.'},
    {speaker:'ren_uni',jp:'パンデミック、医療の転機でしたよね。',en:"Pandemic — medical turning-point.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。医療現場、医師を崇拝する声、増えました。',en:"Yes. Field — doctor-worship voices increased.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'新薬を施す前の検証、長くなりますね。',en:"Pre-applying new-drug verification — lengthens.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。骨太の医療体制、構築中です。',en:"Yes. Robust med-system — under construction.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医療従事者、危機を通り抜けて、強くなりますね。',en:"Workers — crisis pass-through, grow strong.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。ろくな休みもなく、現場、頑張っております。',en:"Yes. Without lousy rest — site, persisting.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'予防意識が、社会に根付いていく道のり、見守りますね。',en:"Prev-conscience taking-root in society — journey, watch.",style:'Reflective close.'},
  ]},
  {id:'conv_06574',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews business history',lines:[
    {speaker:'hiroshi_boss',jp:'創業時の伏線、今、結果として現れているな。',en:"Founding foreshadow — now, as result, emerging.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。会社の転機、創業者がよく語っていました。',en:"Yes. Co turning-point — founder often spoke.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'創業者を崇拝する社員も、いるな、未だに。',en:"Founder-worship staff — exist, still.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。新人研修に新手法を施す予定です。',en:"Yes. Newbie-training — new-method apply plan.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'骨太の経営方針、社是として残せ。',en:"Robust-mgmt policy — as motto, leave.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。困難な時期を通り抜けて、強くなりました。',en:"Yes. Difficult period pass-through, strengthened.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'ろくな結果が出ない期間、こちらの体力次第だ。',en:"Lousy-result periods — our endurance-dependent.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。企業文化が根付いていく過程、大事にします。',en:"Yes. Co culture taking-root process — treasure.",style:'Close.'},
  ]},
  {id:'conv_06575',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through cultural studies',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、伏線回収の手法、よく研究しましたね。',en:"Sakura — foreshadow-recovery technique, well-researched.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。日本文化、戦後、大きな転機を迎えました。',en:"Yes. Japan-culture — post-war, major turning.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'昔は、お上を崇拝する文化、強かったのですね。',en:"Old times — emperor-worship culture, strong.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。伝統工芸に手間を施す技、貴重ですね。',en:"Yes. Trad-crafts effort-applied skill — precious.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'骨太の伝統が、現代に残っていますね。',en:"Robust tradition — modern-remaining.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。海外の影響を通り抜けて、独自性、保ちました。',en:"Yes. Foreign-influence pass-through, originality kept.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'ろくな調査もせず、表面だけ論じる学者、多いですね。',en:"Without lousy survey — surface-only scholars, many.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。伝統が次世代に根付いていく時代、応援したいです。',en:"Yes. Tradition taking-root in next-gen — support.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06576',cluster:'D',ambient:'park_distant_birds',cast:['sho_child','yumiko_mom'],targets:D_T,scenario:'A mom and son chat about play',lines:[
    {speaker:'sho_child',jp:'ママ、公園、遊べる場所、たくさんあるよ!',en:"Mom — park, playable spots, lots!",style:'Excited.'},
    {speaker:'yumiko_mom',jp:'うん。かけっこ、翔くん、ビリだったね、昨日。',en:"Yes. Race — Sho, last, yesterday.",style:'Warm.'},
    {speaker:'sho_child',jp:'お友達、チャリで来たって、言ってたよ。',en:"Friend — came by bike, said.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'劇、翔くん、脇役、頑張ってたわね。',en:"Play — Sho, side-role, hardworking.",style:'Praising.'},
    {speaker:'sho_child',jp:'ホテル、最上階、すごく綺麗だったね、旅行で。',en:"Hotel — top floor, gorgeous, on trip.",style:'Awe.'},
    {speaker:'yumiko_mom',jp:'夏休みの名残、まだ、感じる季節ね。',en:"Summer's lingering — still season-feel.",style:'Reflective.'},
    {speaker:'sho_child',jp:'動物園、アライグマ、可愛かった!',en:"Zoo — raccoon, cute!",style:'Cheerful.'},
    {speaker:'yumiko_mom',jp:'ご飯、少なめにしようね、翔くん、今日は。',en:"Rice — less today, Sho.",style:'Soft close.'},
  ]},
  {id:'conv_06577',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、休みの日、ゆっくり遊べる場所、ある?',en:"Aoi — day-off, slow-playable spot?",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。マラソン、ビリだったの、私、去年。',en:"Yeah. Marathon — last, me, last year.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'チャリで、川沿い、走るの、気持ちいいよね。',en:"Bike — riverside ride, gratifying.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'最近のドラマ、脇役、主役より、印象的だったり。',en:"Recent dramas — side-role more striking than lead, sometimes.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'高層ホテル、最上階のスイート、いつか泊まりたい。',en:"High-rise hotel — top-floor suite, someday-stay.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'夏祭りの名残、街に、まだ残ってるね。',en:"Fest's lingering — town still-remains.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'目の下のクマ、ひどいよね、最近、葵。',en:"Eye-bags — bad lately, Aoi.",style:'Concerned.'},
    {speaker:'aoi_barista',jp:'ご飯、少なめに食べる週、続けてるの。',en:"Rice — less-week, continuing.",style:'Reflective close.'},
  ]},
  {id:'conv_06578',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat after school',lines:[
    {speaker:'sakura_teen',jp:'リク、放課後、皆と遊べる時間、減ったね。',en:"Riku — after-school, playable-time, reduced.",style:'Wistful.'},
    {speaker:'riku_teen',jp:'うん。徒競走、俺、ビリ、結構あったよ。',en:"Yeah. Race — me, last, quite often.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'チャリ、新しいの、買ってもらった!',en:"Bike — new one, got!",style:'Excited.'},
    {speaker:'riku_teen',jp:'劇、お前、いつも脇役、上手いよな。',en:"Play — you, always side-role, good.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'修学旅行、最上階の部屋、皆で集まったね。',en:"School trip — top-floor room, all gathered.",style:'Bright.'},
    {speaker:'riku_teen',jp:'青春の名残、感じる時、あるよな、最近。',en:"Youth lingering — feel-time, sometimes lately.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'動物のドキュメンタリー、アライグマ、可愛かった!',en:"Animal doc — raccoon, cute!",style:'Cheerful.'},
    {speaker:'riku_teen',jp:'お弁当、少なめに、頼んでみたよ、今日は。',en:"Lunch — less, requested today.",style:'Casual close.'},
  ]},
  {id:'conv_06579',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sho_child'],targets:D_T,scenario:'A grandpa and grandkid chat',lines:[
    {speaker:'sho_child',jp:'おじいちゃん、昔、川で遊べる時、楽しかった?',en:"Grandpa — old days, river-playable, fun?",style:'Curious child.'},
    {speaker:'hiroshi_elder',jp:'うん。マラソン、ビリで、皆に笑われたな、私、若い頃。',en:"Yes. Marathon — last, all laughed, in youth.",style:'Wistful.'},
    {speaker:'sho_child',jp:'お父さんも、チャリ、得意だって。',en:"Dad too — bike, good-at.",style:'Animated.'},
    {speaker:'hiroshi_elder',jp:'お祖父ちゃん、芝居でも、脇役、好きだったよ。',en:"Grandpa — even theater, side-role, liked.",style:'Reflective.'},
    {speaker:'sho_child',jp:'マンション、最上階、空が見えてすごい!',en:"Apartment — top floor, sky-visible, amazing!",style:'Awe.'},
    {speaker:'hiroshi_elder',jp:'戦後の名残、私の世代、まだ覚えている。',en:"Post-war lingering — my gen, still remembers.",style:'Sage.'},
    {speaker:'sho_child',jp:'おじいちゃんが、若い頃、アライグマ、見たことある?',en:"Grandpa — youth, raccoon, seen?",style:'Eager.'},
    {speaker:'hiroshi_elder',jp:'夜のご飯、少なめにしてるよ、最近の私は。',en:"Dinner — less lately, me.",style:'Warm close.'},
  ]},
  {id:'conv_06580',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan a kids event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、子供らが遊べるスペース、作ろか、店内に。',en:"Aoi — kid-playable space, in-store?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。料理コンテストでビリだった経験、笑い話にできますね。',en:"Yes. Cooking-contest-last experience, funny-story-able.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'親御さんがチャリで来やすい立地、便利やな。',en:"Parents' bike-friendly location — convenient.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。イベントで、脇役の役者さんも招くといいですね。',en:"Yes. Event — side-role actors also invite.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'ビルの最上階で、屋上テラス、活かせるで。',en:"Building top — roof terrace, usable.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'夏の名残、感じる季節、テラス、人気出そうです。',en:"Summer's lingering — season-feel, terrace popular.",style:'Reflective.'},
    {speaker:'daichi_kansai',jp:'子供向けに、アライグマのキャラクター、描こか、メニューに。',en:"Kids — raccoon character, draw on menu?",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'はい。お子様用、ご飯少なめのセット、用意します。',en:"Yes. Kids — less-rice set, prepare.",style:'Warm close.'},
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

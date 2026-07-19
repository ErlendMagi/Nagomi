import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_331 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['この方','にくかっ','歩か','外さ','謝る','ムカ','トシ','探り']
const B_T = ['寄稿','半角','尺','収まる','見逃せ','絞る','手すり','低め']
const C_T = ['どり','いふ','叶え','生きよ','暮らせる','堪え','年表','きたり']
const D_T = ['とおし','うける','ぐち','たいそう','囲い','甘かっ','質素','ガバ']

const data = [
  // A
  {id:'conv_06581',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、この方、誰のお客さんなの?',en:"Mom — this person, whose guest?",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'うん。新しい玩具、遊びにくかったみたいね、翔くん。',en:"Yes. New toy — was hard to play, Sho.",style:'Soft.'},
    {speaker:'yumiko_mom',jp:'雨だから、今日は、お外を歩かない方がいいね。',en:"Rain — today, better-not-walked outdoors.",style:'Direction.'},
    {speaker:'sho_child',jp:'うん。マスク、はずさないようにしてる、ちゃんと。',en:"Yeah. Mask — non-removed, properly.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'お友達に、ちゃんと謝るのよ、明日。',en:"Friend — properly apologize tomorrow.",style:'Direction.'},
    {speaker:'sho_child',jp:'ぼく、お兄ちゃんに、いつもムカついちゃう。',en:"Me — big-bro, always get-pissed.",style:'Pouty.'},
    {speaker:'yumiko_mom',jp:'トシくんは、優しいお友達ね、翔くんの。',en:"Toshi-kun — kind friend of Sho's.",style:'Warm.'},
    {speaker:'sho_child',jp:'おもちゃ箱、奥まで、探り探り、見たよ。',en:"Toy-box — deep, feel-around, looked.",style:'Animated close.'},
  ]},
  {id:'conv_06582',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、この方、紹介させてね、彼の同僚なの。',en:"Aoi — let me intro this person, his colleague.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。新しいパン、ちょっと食べにくかったかな、固くて。',en:"Yeah. New bread — bit hard-to-eat, firm.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'今日、ヒールで、長く歩かない方がいいよ、足、痛くなるよ。',en:"Today — heels, better-not-walked-long, foot ache.",style:'Direction.'},
    {speaker:'aoi_barista',jp:'指輪、なんで外さないの、メイちゃん。',en:"Ring — why non-removed, Mei?",style:'Curious.'},
    {speaker:'mei_romantic',jp:'今朝、彼に、ちゃんと謝るつもりなの。',en:"This morning — properly-apologize him, intend.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'仕事のお客さん、たまにムカつく時、あるよね。',en:"Work customer — sometimes get-pissed time exists.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'幼馴染のトシちゃん、結婚するんだって。',en:"Childhood pal Toshi-chan — marrying.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'彼の本音、ずっと探りに、入れずにいるの。',en:"His true-feel — long, feeling-out, unable.",style:'Reflective close.'},
  ]},
  {id:'conv_06583',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk to school',lines:[
    {speaker:'sakura_teen',jp:'リク、この方が、新しい担任、おねえ先生だって。',en:"Riku — this person, new teacher, lady-teacher.",style:'Animated.'},
    {speaker:'riku_teen',jp:'うん。教科書、新しいの、めっちゃ読みにくかったよな。',en:"Yeah. Textbook — new, super hard-to-read.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'雨、土砂降りだから、傘なし、歩かないでね。',en:"Rain pouring — without umbrella non-walked.",style:'Direction.'},
    {speaker:'riku_teen',jp:'マスク、体育の時、外さないんだよな、最近。',en:"Mask — PE time, non-removed lately.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'昨日のこと、ちゃんと謝るね、ごめんね。',en:"Yesterday — properly apologize, sorry.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'お前の弟、たまにムカつく時、あるって、言ってたな。',en:"Your brother — sometimes get-pissed time, said.",style:'Probe.'},
    {speaker:'sakura_teen',jp:'クラスのトシくん、優しい人だね、リク、知ってる?',en:"Classmate Toshi-kun — kind, Riku, know?",style:'Curious.'},
    {speaker:'riku_teen',jp:'うん。先生の質問、探りを入れる感じだったな、さっき。',en:"Yeah. Teacher's q — feel-out feel, earlier.",style:'Wry close.'},
  ]},
  {id:'conv_06584',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'昨日、訪ねてきたこの方、近所の方かな。',en:"Yesterday visitor — local maybe.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。新しいお菓子、固くて、食べにくかったわね、私。',en:"Yes. New sweets — firm, hard-to-eat, me.",style:'Wry.'},
    {speaker:'hiroshi_elder',jp:'寒い日、無理に歩かないようにな、お互い。',en:"Cold day — without-forcing-walked, each other.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'眼鏡、外さないで寝ちゃったわ、昨日。',en:"Glasses — non-removed-slept, yesterday.",style:'Wry.'},
    {speaker:'hiroshi_elder',jp:'息子に、勘違い、ちゃんと謝るよ、私。',en:"Son — misunder, properly apologize, me.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'最近のニュース、たまにムカつくものが、多いわね。',en:"Recent news — sometimes get-pissed-things, many.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'孫のトシちゃん、来週、遊びに来るらしいぞ。',en:"Grandkid Toshi-chan — visit next week.",style:'Bright.'},
    {speaker:'sachiko_grandma',jp:'昔の写真、引き出しを探り、見つけたわよ。',en:"Old photos — drawer feel-out, found.",style:'Wistful close.'},
  ]},
  {id:'conv_06585',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','mei_romantic'],targets:A_T,scenario:'A uni student and friend chat',lines:[
    {speaker:'mei_romantic',jp:'蓮さん、この方、ゼミの先生?',en:"Ren — this person, seminar prof?",style:'Curious.'},
    {speaker:'ren_uni',jp:'うん。難しい論文、初めは、読みにくかったよ。',en:"Yes. Hard paper — first, hard-to-read.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'徹夜明け、無理に歩かない方がいいですよ。',en:"All-nighter — better-not-walked-forced.",style:'Concerned.'},
    {speaker:'ren_uni',jp:'うん。眼鏡、外さないで、論文書き続けたんだ。',en:"Yes. Glasses — non-removed, writing continued.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'指導教官に、遅刻、ちゃんと謝るんですよね。',en:"Adviser — late, properly apologize, right?",style:'Probe.'},
    {speaker:'ren_uni',jp:'査読のコメント、たまにムカつくのもあるんだよ。',en:"Review comments — sometimes get-pissed, exist.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'同期のトシさん、海外留学、決まったって。',en:"Cohort Toshi-san — overseas study, decided.",style:'Bright.'},
    {speaker:'ren_uni',jp:'資料の探りを入れる作業、地味だけど大事だよ。',en:"Source feeling-out work — plain but vital.",style:'Reflective close.'},
  ]},

  // B
  {id:'conv_06586',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews publication and ops',lines:[
    {speaker:'hiroshi_boss',jp:'業界誌、寄稿、進めろ。',en:"Industry mag — contribute, advance.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。フォーム入力、半角指定、社内徹底します。',en:"Yes. Form-input — half-width specified, internally thorough.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'広告映像、尺が短すぎないか、確認しろ。',en:"Ad-video — runtime not-too-short, verify.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。プロジェクト、予算内に収まる見込みです。',en:"Yes. Project — within-budget fit expected.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'今回のミス、見逃せない、再発防止策、出せ。',en:"This mistake — uno-verlookable, recurrence-prev measures, submit.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。経費、もっと絞る方針、徹底します。',en:"Yes. Expenses — more-squeeze policy, thorough.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'階段、手すりが、緩んでいたな、注意しろ。',en:"Stairs — handrail loosened, be careful.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。来期、目標、低めに設定し、確実に達成します。',en:"Yes. Next term — goal, lower-set, surely-achieve.",style:'Close.'},
  ]},
  {id:'conv_06587',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'専門誌、寄稿、私もチャンスください。',en:"Spec-mag — contribute, also give me chance.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。エクセル、半角の入力ルール、改めて周知します。',en:"Yes. Excel — half-width input-rule, re-notify.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'動画、尺、十五秒バージョンも、欲しいわね。',en:"Video — runtime, 15-sec version wanted.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。多忙が、ようやく収まる兆しです。',en:"Yes. Busyness — finally settle, signs.",style:'Update.'},
    {speaker:'yuki_office',jp:'今回のクレーム、見逃せない、しっかり対応してね。',en:"This complaint — un-overlookable, properly handle.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。候補を絞る作業、明日、完了します。',en:"Yes. Candidate-squeeze work — tomorrow, complete.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'休憩室の手すり、修理、依頼済みです。',en:"Break-room handrail — repair, requested.",style:'Update.'},
    {speaker:'kenji_office',jp:'はい。価格、競合より低めで、出します。',en:"Yes. Price — lower-than-rival, set.",style:'Close.'},
  ]},
  {id:'conv_06588',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、学会誌、寄稿、君も挑戦してみろ。',en:"Ren — journal contribute, you also try.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。半角と全角、論文書式、気をつけます。',en:"Yes. Half/full-width — paper format, mindful.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'発表、尺、十分間に収めろ。',en:"Pres — runtime, 10-min within-fit.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。発表時間、十分以内に収まるよう、練習します。',en:"Yes. Pres time — within 10-min fit, practice.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'参考文献の重複、見逃せないぞ、丁寧に確認しろ。',en:"Ref duplication — un-overlookable, careful verify.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。テーマを絞る作業、来週までに行います。',en:"Yes. Theme-squeeze — by next week, do.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'実験室の手すり、安全のため、点検しろ。',en:"Lab handrail — safety, inspect.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。仮説、最初は低めに置きました、慎重に。',en:"Yes. Hypothesis — initially low-set, cautious.",style:'Earnest close.'},
  ]},
  {id:'conv_06589',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察広報誌、寄稿、企業様にもお願いしております。',en:"Police PR-mag — contribute, corp also asked.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。被害届の書式、半角入力指定、確認しました。',en:"Yes. Damage-report form — half-width input, verified.",style:'Update.'},
    {speaker:'takeda_officer',jp:'防犯動画、尺は、三分程度が最適です。',en:"Crime-prev video — runtime, ~3 min optimal.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。犯罪統計、来年、収まる傾向、期待しています。',en:"Yes. Crime stats — next year settle-trend, expected.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'些細な兆候も、見逃せない、捜査の鉄則です。',en:"Tiny signs also — un-overlookable, inv-rule.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。容疑者を絞る情報、社内、積極的に提供します。',en:"Yes. Suspect-narrowing info — internally, actively provide.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'階段の手すり、警察署内も、改修しました。',en:"Stair handrail — police-station, renovated.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。来月の予算、低めに見積もって、対応します。',en:"Yes. Next-month budget — low-estimated, handle.",style:'Close.'},
  ]},
  {id:'conv_06590',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業者として、雑誌に寄稿していた日々、懐かしい。',en:"As founder — mag-contributed days, nostalgic.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。デジタル化で、半角入力、若手にはお手の物です。',en:"Yes. Digitization — half-width input, youth specialty.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'演説、尺を見極めるのも、経営者の技だ。',en:"Speech — runtime-judge, exec's skill.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。混乱が、徐々に収まる時期、見えてきました。',en:"Yes. Confusion — gradually settle-period, visible.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'創業時の苦労、見逃せない教訓だぞ。',en:"Founding hardship — un-overlookable lesson.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。事業範囲を絞る選択、来期、検討します。',en:"Yes. Biz-scope squeeze — next term, study.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'階段の手すり、私の頃から、社員の安全、第一だった。',en:"Stair-handrail — since my time, staff safety first.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。利益目標、低めに、堅実な経営、続けます。',en:"Yes. Profit goal — low, steady mgmt, continue.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06591',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses historical studies',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、研究、室町時代の段どり、よく整理してありますね。',en:"Ren — research, Muromachi sequence, well-organized.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。古文書、「いふ」が頻出する文体、興味深いです。',en:"Yes. Old text — frequent classical 'iu', interesting.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'武士たちが、夢を叶える物語、歴史書で残っていますね。',en:"Samurai — wish-grant tales, history-records.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。当時の人々が、生きようとした姿勢、痛切です。',en:"Yes. Era folk — trying-to-live stance, poignant.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'庶民が暮らせる時代、いつ訪れたのか、論じられますね。',en:"Commoner-livable era — when arrived, discussed.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。戦乱に堪える民衆、史料に多く描かれています。',en:"Yes. War-enduring populace — much-depicted in archives.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'卒論の年表、整理が、見事ですね、桜さん。',en:"Thesis timeline — organization superb, Sakura.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。地方のしきたり、地域研究で、扱いました。',en:"Yes. Local customs — area-research handled.",style:'Earnest close.'},
  ]},
  {id:'conv_06592',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses community case patterns',lines:[
    {speaker:'takeda_officer',jp:'本件、犯行の段どり、計画的でした。',en:"Case — crime sequence, planned.",style:'Calm.'},
    {speaker:'ren_uni',jp:'容疑者の供述、古い言い回し、いふ、と書いていますね。',en:"Suspect statement — old phrasing 'iu' written.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。被害者は、夢を叶えようと懸命だった人物でした。',en:"Yes. Victim — wish-grant trying, devoted person.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'家族が、これからも生きようとする力、支えたいですね。',en:"Family — try-to-live strength, support wanted.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。穏やかに暮らせる社会、警察の使命です。',en:"Yes. Peaceful-livable society — police mission.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'長期間、堪える捜査、頭が下がります。',en:"Long-period enduring inv — humbled.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。事件年表、署内で、共有しております。',en:"Yes. Case timeline — internally shared.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'地域のしきたり、捜査でも、考慮されているんですね。',en:"Local customs — inv-considered.",style:'Curious close.'},
  ]},
  {id:'conv_06593',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses chronic care',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、慢性疾患の治療、段どり、複雑です。',en:"Ren — chronic-disease tx — sequence, complex.",style:'Calm.'},
    {speaker:'ren_uni',jp:'古い医学書、いふ、で記載されている処方も、目にしました。',en:"Old med-books — 'iu' described prescriptions, also seen.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。患者さんの望み、できる限り叶えてあげたいです。',en:"Yes. Patients' wishes — as much as possible, fulfill.",style:'Patient.'},
    {speaker:'ren_uni',jp:'病と共に、生きようとする方々、勇気もらいますね。',en:"Try-to-live with illness people — courage-given.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。自宅で暮らせる支援、地域医療、強化中です。',en:"Yes. Home-livable support — local-med strengthening.",style:'Informative.'},
    {speaker:'ren_uni',jp:'長期治療に堪える患者さん、家族の支え、大事ですね。',en:"LT-tx enduring patients — family support vital.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。治療年表、患者さんと共有しています。',en:"Yes. Tx timeline — patient-shared.",style:'Patient.'},
    {speaker:'ren_uni',jp:'昔のしきたりに合わせた医療、過渡期ですね。',en:"Old-custom-matching med — transition era.",style:'Reflective close.'},
  ]},
  {id:'conv_06594',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corporate heritage',lines:[
    {speaker:'hiroshi_boss',jp:'創業時の段どり、社史で振り返ろう。',en:"Founding sequence — corp-hist, reflect.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。古い社内資料、いふ、と書く文書、まだ残っています。',en:"Yes. Old internal — 'iu' documents, still remain.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'創業者の夢を叶えるために、社員一同、努める。',en:"Founder's wish-fulfill — staff together, strive.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員が、長く生きようと支え合う風土、続いています。',en:"Yes. Staff — try-to-live mutually-supporting culture, continues.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'社員が安心して暮らせる待遇、企業の責任だ。',en:"Staff secure-livable benefits — co duty.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。困難に堪える企業文化、強みです。',en:"Yes. Hardship-enduring culture — strength.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'創業以来の年表、新人研修で、共有しろ。',en:"Founding timeline — newbie-train, share.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。昔のしきたり、現代風にアレンジ、進めます。',en:"Yes. Old customs — modern-arrange, advance.",style:'Close.'},
  ]},
  {id:'conv_06595',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through cultural studies',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、研究の段どり、論理的にまとまりましたね。',en:"Sakura — research sequence, logically grouped.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。古典で、「いふ」が頻出する文体、読みました。',en:"Yes. Classics — frequent 'iu', read.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'物語の中で、登場人物が夢を叶える展開、印象的でしたね。',en:"In story — chars wish-fulfill, striking.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。現代に生きようとする若者の姿、重なります。',en:"Yes. Try-to-live modern-youth — overlaps.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'人々が安心して暮らせる時代、いつ実現するでしょうね。',en:"Secure-livable era — when realize?",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。長い不安に堪える人々の生き様、論じました。',en:"Yes. Long-anxiety enduring lives — argued.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'年表、視覚的に分かりやすかったですね、レポート。',en:"Timeline — visually clear, report.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。地域のしきたり、フィールドワークで取材しました。',en:"Yes. Local customs — fieldwork interviewed.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06596',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、最近、徹夜とおしで、仕事してたって、本当?',en:"Aoi — lately, all-night-straight working, true?",style:'Concerned.'},
    {speaker:'aoi_barista',jp:'うん。彼の冗談、最近、うけるね。',en:"Yeah. His jokes — lately funny.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'仕事のぐち、言いたい時、私に話してね。',en:"Work-gripe — want-tell, tell me.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'昨日のディナー、たいそうな量、食べちゃったよ。',en:"Last-night dinner — quite-quantity, ate.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'庭の囲い、新しく塗り替えたの、彼が。',en:"Garden fence — newly repainted, by him.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'デザートのケーキ、甘かったよね、すごく。',en:"Dessert cake — sweet, very.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'休日、質素な暮らし、続けてるよ、私たち。',en:"Holidays — simple living, we continue.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'朝、目覚ましで、ガバッと起きたよ、今日。',en:"Morning alarm — bolted-up, today.",style:'Animated close.'},
  ]},
  {id:'conv_06597',cluster:'D',ambient:'park_distant_birds',cast:['sho_child','yumiko_mom'],targets:D_T,scenario:'A mom and son chat about an outdoor day',lines:[
    {speaker:'sho_child',jp:'ママ、運動会、ぶっとおしで、走るのかな、僕。',en:"Mom — sports-day, all-through-running, me?",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'うん。ピエロさんの芸、子供たちにうけてるね。',en:"Yes. Clown's act — kids-funny.",style:'Warm.'},
    {speaker:'sho_child',jp:'お兄ちゃんが、いつもぐち言ってるよ、宿題のこと。',en:"Bro — always gripe, homework.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お祭りの飾り、たいそう立派ね、今年は。',en:"Fest decor — quite-grand, this year.",style:'Bright.'},
    {speaker:'sho_child',jp:'公園の囲い、いつ、新しくしたんだろう?',en:"Park fence — when, new-made?",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'お祭りの飴、すごく甘かったね、翔くん。',en:"Fest candy — very-sweet, Sho.",style:'Warm.'},
    {speaker:'sho_child',jp:'お祖母ちゃんの部屋、質素で、いつも綺麗だね。',en:"Granny's room — simple, always-clean.",style:'Tender.'},
    {speaker:'yumiko_mom',jp:'寝坊して、ガバッと布団から、飛び起きたわね、翔くん。',en:"Slept-in — bolted-up from futon, Sho.",style:'Wry close.'},
  ]},
  {id:'conv_06598',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、文化祭、準備、ぶっとおしで、やってたよね、皆。',en:"Riku — fest prep, all-through done, all.",style:'Wry.'},
    {speaker:'riku_teen',jp:'うん。お前の漫才、後輩にうけてたな、桜。',en:"Yeah. Your comedy — underclassmen-funny, Sakura.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'クラスメイト、たまにぐち、言うよね、テストのこと。',en:"Classmates — sometimes gripe, tests.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'昨日の試合、たいそう疲れたわ、本当。',en:"Yesterday match — quite-tired, really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'校庭の囲い、新しく塗ったって、聞いたよ。',en:"Schoolyard fence — newly painted, heard.",style:'Animated.'},
    {speaker:'riku_teen',jp:'お弁当のおかず、甘かったね、今日は。',en:"Lunch sides — sweet today.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'うちの家計、質素な感じだから、無理しないでね、リク。',en:"My household — simple-feel, don't overdo, Riku.",style:'Soft.'},
    {speaker:'riku_teen',jp:'試験前、ガバッと布団から、飛び起きたよ、俺。',en:"Pre-test — bolted-up from futon, me.",style:'Wry close.'},
  ]},
  {id:'conv_06599',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、田植え、ぶっとおしで、やったな、私。',en:"Youth — rice-plant, all-through done, me.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。あなたの落語、ご近所さんにうけてたわね。',en:"Yes. Your rakugo — neighbors funny.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'最近、私もぐちが多くなったかな、悪い癖だ。',en:"Lately — gripes increased, bad habit.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'お祝いの席、たいそう賑やかだったわね、孫の誕生日。',en:"Cele venue — quite-lively, grandkid's b-day.",style:'Bright.'},
    {speaker:'hiroshi_elder',jp:'庭の囲い、若い頃、自分で直したな。',en:"Garden fence — youth, self-repaired.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'懐かしい菓子、甘かったわね、昔ながらの味。',en:"Nostalgic sweets — sweet, old-time taste.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'昔の暮らし、質素だったが、心は豊かだった。',en:"Old living — simple, heart rich.",style:'Sage.'},
    {speaker:'sachiko_grandma',jp:'地震で、私、ガバッと起きてしまったわ、夜中に。',en:"Quake — me, bolted-up, midnight.",style:'Soft close.'},
  ]},
  {id:'conv_06600',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan an event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、店、ぶっとおしで開けるのは、無理やな、しんどいで。',en:"Aoi — store all-through open — impossible, tiring.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。新メニューの説明、お客さん、うけてくれます。',en:"Yes. New-menu explainer — customers funny-receive.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'スタッフがぐちを言える場、大事やな、リーダーとして。',en:"Staff-gripe-able space — vital, as leader.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。昨日のお客様、たいそう機嫌がよかったです。',en:"Yes. Yesterday's guest — quite-good-mood.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'店の囲い、もう少し、温かい色に変えへんか、葵さん。',en:"Store enclosure — slightly warmer-color change, Aoi?",style:'Animated.'},
    {speaker:'aoi_barista',jp:'新作スイーツ、甘かったので、糖度、下げますね。',en:"New sweet — sweet, sugar reduce.",style:'Reflective.'},
    {speaker:'daichi_kansai',jp:'店の内装、質素な感じで、落ち着くと、ええで。',en:"Interior — simple, calming, would be good.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'はい。朝、ガバッと起きて、仕込みを進めてます。',en:"Yes. Morning — bolted-up, prep advancing.",style:'Bright close.'},
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

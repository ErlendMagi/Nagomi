import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_316 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['おかず','歪み','ぶつかる','硬く','防ぎ','意地悪','ほどほど','足取り']
const B_T = ['こみ','削る','利く','扱える','照らさ','考え直し','挙がっ','緩め']
const C_T = ['勝敗','最下位','制し','打者','飛ばさ','下級','背負う','威厳']
const D_T = ['しっとり','金色','蒸し','きらきら','ジャージ','ピート','凍っ','膳']

const data = [
  // A
  {id:'conv_06281',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at dinner',lines:[
    {speaker:'sho_child',jp:'ママ、今夜のおかず、何?',en:"Mom — tonight's side dish, what?",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'ハンバーグよ。お皿、歪みがあるから、丁寧に扱ってね。',en:"Hamburger. Plate has a warp; handle carefully.",style:'Tender.'},
    {speaker:'sho_child',jp:'走り回って、机にぶつかること、多いから、気を付ける。',en:"Running around — often bump desks; careful.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'肩、硬くなってない?',en:"Shoulders — stiffening?",style:'Warm.'},
    {speaker:'sho_child',jp:'うん、ストレッチで防ぎたい。',en:"Yes — wanna prevent with stretches.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'お友達に意地悪、しないでね。',en:"Don't be mean to friends.",style:'Direction.'},
    {speaker:'sho_child',jp:'うん、ほどほどに、ふざける。',en:"Yeah — fool around moderately.",style:'Wry.'},
    {speaker:'yumiko_mom',jp:'お父さんの足取り、玄関で聞こえてきたわ。',en:"Dad's footsteps — heard at entrance.",style:'Warm close.'},
  ]},
  {id:'conv_06282',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'今夜、おかずに困ってる。',en:"Tonight — stumped for sides.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'うん。買い物袋、歪みかけてた。',en:"Yeah. Shopping bag — about to warp.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'駅のホームで、急ぐ人とぶつかること、ある。',en:"Station platform — bumping rushers, sometimes.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'腰、最近、硬くなってる気がする。',en:"Lower back — feels stiff lately.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'怪我を防ぎたいから、ストレッチ始めようかな。',en:"To prevent injury — gonna start stretches.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'隣の意地悪なお客さん、気にしすぎないでね。',en:"Mean neighbor-customer — don't fixate.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'ほどほどに頑張る、そういう日もあっていいよね。',en:"Moderate-effort days — fine too.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'明日の足取り、軽やかでありますように。',en:"Tomorrow's footsteps — light, may they be.",style:'Warm close.'},
  ]},
  {id:'conv_06283',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk',lines:[
    {speaker:'sakura_teen',jp:'お弁当のおかず、いつも何入ってる?',en:"Bento sides — always what?",style:'Casual teen.'},
    {speaker:'riku_teen',jp:'うん。最近、机の歪みが気になる。',en:"Yeah. Lately, desk warp bothering me.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'廊下で先輩とぶつかる、ヒヤッとした。',en:"Hallway — bumping senpai, startled.",style:'Animated.'},
    {speaker:'riku_teen',jp:'冬場、空気で唇、硬くなるよね。',en:"Wintertime — lips stiffen in air.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'風邪を防ぎたいから、マスク忘れずに。',en:"To prevent colds — don't forget mask.",style:'Practical.'},
    {speaker:'riku_teen',jp:'クラスの意地悪な発言、もう、流そう。',en:"Class's mean comment — let it pass.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'勉強、ほどほどにしないと、燃え尽きる。',en:"Study moderate — else burnout.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'部活帰りの足取り、軽くて、嬉しい。',en:"Post-club footsteps — light, glad.",style:'Bright close.'},
  ]},
  {id:'conv_06284',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'夕飯のおかず、二人分、十分だな。',en:"Dinner sides — two portions, enough.",style:'Calm.'},
    {speaker:'sachiko_grandma',jp:'うん。お椀、長く使って、歪みかけてる。',en:"Yes. Bowl — long-used, warping.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'昔、街角で、よくぶつかること、あったな。',en:"Past — often bumping at corners.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'手、硬くなったわね、年取って。',en:"Hands — stiffened with age.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'転倒を防ぎたいから、手すり、つけたいな。',en:"To prevent falls — wanna add handrails.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'近所の人、意地悪言わない、ありがたいわ。',en:"Neighbors — no meanness, grateful.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'ほどほどに過ごすのが、長生きの秘訣だな。',en:"Moderate living — longevity's secret.",style:'Sage.'},
    {speaker:'sachiko_grandma',jp:'孫の足取り、玄関から、賑やかに聞こえるわ。',en:"Grandkid's footsteps — lively at entrance.",style:'Warm close.'},
  ]},
  {id:'conv_06285',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai and a teen chat',lines:[
    {speaker:'ren_uni',jp:'桜、学食のおかず、種類が多いよね。',en:"Sakura — cafeteria sides, many kinds.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。トレー、運ぶ時、ちょっと歪み気味で、気を付けます。',en:"Yes. Tray — when carrying, slight warp, careful.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'混雑時、他人とぶつかる時、申し訳ないよな。',en:"Crowds — bumping others, sorry.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'冬、手が硬くなるので、お湯で温めてます。',en:"Winter — hands stiffen; warm in water.",style:'Soft.'},
    {speaker:'ren_uni',jp:'怪我を防ぎたいから、運動前、ストレッチを。',en:"To prevent injury — pre-exercise stretches.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'クラスメイトの意地悪な言葉、気にしないようにしてます。',en:"Classmate meanness — striving not to mind.",style:'Vulnerable.'},
    {speaker:'ren_uni',jp:'勉強、ほどほどにな、燃え尽きないように。',en:"Study moderate — don't burnout.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'はい。今日の足取り、いつもより軽いんです。',en:"Yes. Today's footsteps — lighter than usual.",style:'Bright close.'},
  ]},

  // B
  {id:'conv_06286',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'駅のラッシュ、人ごみ、避けて移動しろ。',en:"Station rush — avoid crowds.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。経費、無駄な項目、削るよう、見直しました。',en:"Yes. Expenses — wasteful items, trim, reviewed.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'彼の交渉力、よく利くな。',en:"His negotiation — well works.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。多言語が扱える社員、貴重です。',en:"Yes. Multi-lingual staff — valuable.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'資料、ライトで照らさないと、読めないな。',en:"Materials — unlit, unreadable.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。決定、もう一度、考え直しましょうか。',en:"Yes. Decision — reconsider once more?",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'問題、また挙がってきたか?',en:"Issues — come up again?",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。締め切り、緩めに設定し直します。',en:"Yes. Deadlines — reset loose.",style:'Close.'},
  ]},
  {id:'conv_06287',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers prep a project',lines:[
    {speaker:'yuki_office',jp:'通勤ラッシュ、人こみが激しい時間、避けたい。',en:"Commute rush — avoid intense crowd hours.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。コスト、削る方向で進めます。',en:"Yes. Costs — trim direction.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'部下の判断、利く社員、頼もしいね。',en:"Junior staff with judgment — reliable.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。複雑な案件も、扱える者が、育ってきました。',en:"Yes. Complex-case handlers — emerged.",style:'Bright.'},
    {speaker:'yuki_office',jp:'プレゼン、舞台、ライトで照らされて、よく見えた。',en:"Presentation — stage lit, well visible.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。改めて考え直したい案件、まとめます。',en:"Yes. Items to reconsider — gathering.",style:'Commitment.'},
    {speaker:'yuki_office',jp:'反対意見、複数挙がってきたよね。',en:"Counter-opinions — multiple raised.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。スケジュール、緩めに調整します。',en:"Yes. Schedule — loose-adjust.",style:'Close.'},
  ]},
  {id:'conv_06288',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、人混みの中で交渉する経験、するんだ。',en:"Ren — negotiate amid crowds, experience.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。経費、無駄を削る、社会人の基本ですね。',en:"Yes. Trimming waste — pro basic.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'機転が利く社員、育てたい。',en:"Quick-witted staff — wanna raise.",style:'Direction.'},
    {speaker:'ren_uni',jp:'多様な案件を扱える人材、目指します。',en:"Multi-case handler — aim.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'スポットライトに照らされる存在、ではなく、地道な人になれ。',en:"Not spotlight-lit; be steady.",style:'Direction.'},
    {speaker:'ren_uni',jp:'進路、もう一度、考え直しています。',en:"Path — reconsidering once more.",style:'Reflective.'},
    {speaker:'hiroshi_boss',jp:'課題、挙がってきたら、すぐ相談しろ。',en:"Issues arise — consult immediately.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。先輩、締め切り、少し緩めにしてもらえますか。',en:"Yes. Senpai — deadline loose?",style:'Polite close.'},
  ]},
  {id:'conv_06289',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on operations',lines:[
    {speaker:'takeda_officer',jp:'防犯活動、人ごみの場所、特に強化しています。',en:"Crime-prev — crowded spots, especially strengthened.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警備費、無駄を削る方向、共有しています。',en:"Yes. Security costs — trim direction shared.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察の連絡網、よく利く体制です。',en:"Police network — well-working structure.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'警察と共通言語、扱える社員、増やしたいです。',en:"Police-language-handling staff — increase.",style:'Polite.'},
    {speaker:'takeda_officer',jp:'夜間、駅前、ライトで照らさないと、危険です。',en:"Nights — station-front unlit, dangerous.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。設計、もう一度、考え直したいです。',en:"Yes. Design — reconsider.",style:'Polite.'},
    {speaker:'takeda_officer',jp:'住民の声、挙がってきたら、共有します。',en:"Resident voices arise — shared.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'巡回ルート、緩めに、調整可能でしょうか。',en:"Patrol routes — loose-adjustable?",style:'Polite close.'},
  ]},
  {id:'conv_06290',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、人ごみの中、商談に出向いていた。',en:"In youth — into crowds for deals.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。無駄を削る経営、長く続けています。',en:"Yes. Waste-trim mgmt — long continued.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'勘が利く部下、大事にしろ。',en:"Intuitive juniors — treasure.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'国際案件を扱える社員、揃ってきました。',en:"International-case-handling staff — gathered.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'光に照らされた成功、皆で共有しろ。',en:"Light-lit success — share all.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。引き継ぎ、再度、考え直しています。',en:"Yes. Handover — reconsidering.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'課題、挙がってきた時、即決しろ。',en:"Issues arising — snap-decide.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。スケジュール、緩めに、柔軟に。',en:"Yes. Schedules — loose, flexible.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06291',cluster:'C',ambient:'stadium_distant_crowd',cast:['ryosuke_dad','sho_child'],targets:C_T,scenario:'A dad and son watch sports',lines:[
    {speaker:'ryosuke_dad',jp:'翔、勝敗にこだわらず、楽しむのが大事。',en:"Sho — not just win/loss; enjoy.",style:'Easy dad.'},
    {speaker:'sho_child',jp:'うん。今の試合、最下位の球団、頑張ってるね。',en:"Yeah. Current match — last-place team trying.",style:'Animated child.'},
    {speaker:'ryosuke_dad',jp:'地元チーム、相手を制した瞬間、最高だった。',en:"Local team — moment they overcame, peak.",style:'Bright.'},
    {speaker:'sho_child',jp:'打者の構え、かっこいいね。',en:"Batter's stance — cool.",style:'Awe.'},
    {speaker:'ryosuke_dad',jp:'バット、ボールを飛ばさないと、得点入らない。',en:"Bat — without flying, no points.",style:'Direction.'},
    {speaker:'sho_child',jp:'下級リーグの選手も、頑張ってるんだよね。',en:"Lower-league players try too.",style:'Reflective.'},
    {speaker:'ryosuke_dad',jp:'試合の結果、背負うチーム、応援しよう。',en:"Game results — burden-bearing team, support.",style:'Warm.'},
    {speaker:'sho_child',jp:'監督の威厳、見てるとカッコいい。',en:"Coach's dignity — looks cool.",style:'Animated close.'},
  ]},
  {id:'conv_06292',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses sport-research',lines:[
    {speaker:'asuka_teacher',jp:'論文、勝敗のメンタル研究、興味深いですね。',en:"Paper — win/loss mental, intriguing.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。最下位チームの心理、特に章を割きました。',en:"Yes. Last-place team mind — chapter.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'逆境を制した選手の事例、印象的でしたね。',en:"Adversity-overcoming athletes — striking.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'打者のフォーム分析、新しい視点で扱いました。',en:"Batter-form analysis — fresh angle.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'ホームランを飛ばさない練習、データで示しましたね。',en:"No-homer practice — data-shown.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'下級リーグの研究、限定的な先行研究、引用しました。',en:"Lower-league research — limited prior works, cited.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'責任を背負う立場の心情、共感を呼びますね。',en:"Burden-bearing-position emotions — empathy.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'監督の威厳、競技ごとに、違いますね。',en:"Coach's dignity — differs by sport.",style:'Curious close.'},
  ]},
  {id:'conv_06293',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs on sports-event security',lines:[
    {speaker:'takeda_officer',jp:'試合の勝敗、地域感情に響きます。',en:"Game outcome — affects regional mood.",style:'Calm.'},
    {speaker:'ren_uni',jp:'最下位の試合でも、観客、熱気ありますね。',en:"Even last-place games — fans heated.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。混乱を制した警備、評価されました。',en:"Yes. Chaos-overcoming security — praised.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'打者交代の合間、警備、強化されますか。',en:"Batter-change breaks — security strengthened?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。物を飛ばさないよう、観客指導、徹底します。',en:"Yes. Don't fly objects — strict fan guidance.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'下級審判への警備、配慮ありますか。',en:"Lower-rank ump security — care?",style:'Polite.'},
    {speaker:'takeda_officer',jp:'はい。責任を背負う、警察の役割です。',en:"Yes. Burden-bearing police role.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察官の威厳、現場で感じます。',en:"Officer dignity — felt on site.",style:'Reflective close.'},
  ]},
  {id:'conv_06294',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss discusses corporate-sports sponsorship',lines:[
    {speaker:'hiroshi_boss',jp:'地元チームの勝敗、社員のモチベーションに影響する。',en:"Local-team outcome — affects staff morale.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。最下位でも、応援、続けます。',en:"Yes. Even last-place — keep cheering.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'逆境を制した選手、社内講演、招待しろ。',en:"Adversity-overcoming athletes — internal speak invite.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。打者の代表選手、コラボ企画、進めます。',en:"Yes. Top-batter rep — collab plans.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'宣伝、変な噂を飛ばさないよう、慎重に。',en:"PR — don't fly weird rumors, careful.",style:'Direction.'},
    {speaker:'kenji_office',jp:'下級リーグ支援、CSRに組み込みます。',en:"Lower-league support — embed in CSR.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'若手の責任、背負う場面、丁寧に教えろ。',en:"Youth burden-bearing — teach carefully.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。経営の威厳、地に着けて、保ちます。',en:"Yes. Mgmt dignity — grounded, maintained.",style:'Close.'},
  ]},
  {id:'conv_06295',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through current events',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、スポーツ報道、勝敗以外の視点、必要ですね。',en:"Sakura — sports coverage, beyond-result view needed.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。最下位の球団の取材、丁寧にしたいです。',en:"Yes. Last-place team reporting — careful.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'試合を制した瞬間、心境、深掘りしてみては。',en:"Game-overcoming moment — feeling, dig deeper.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'打者の心理描写、章として大切ですね。',en:"Batter psych portrait — chapter-vital.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'ボールを飛ばさない試合運び、戦略として扱いましたね。',en:"No-fly play strategy — covered.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'下級リーグの選手、夢を持ち続けています。',en:"Lower-league players — hold dreams.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'家族の期待を背負う若者、共感呼びますね。',en:"Family-expectations-bearing youth — empathy.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'監督の威厳、教育観の章でも触れます。',en:"Coach dignity — education-view chapter too.",style:'Curious close.'},
  ]},

  // D
  {id:'conv_06296',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about food and fashion',lines:[
    {speaker:'mei_romantic',jp:'今日のチーズケーキ、しっとり食感、最高。',en:"Today's cheesecake — moist, best.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。金色の包装紙、贈り物に良さそう。',en:"Yeah. Gold wrap — gift-suitable.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'蒸し料理、健康にいいのよね。',en:"Steamed dishes — healthy.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'夜の街、ネオンがきらきらしてる。',en:"Night streets — neon glittering.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'スポーツジムのジャージ、新調したの。',en:"Gym jersey — replaced.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'最近、英国のピート系ウィスキー、ハマってる。',en:"Lately — UK peat whiskey, into.",style:'Curious.'},
    {speaker:'mei_romantic',jp:'地面、まだ凍ってる箇所、危ないね。',en:"Ground — still-frozen spots, dangerous.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'お膳の上、料理、綺麗に並んでた。',en:"Tray — dishes prettily arranged.",style:'Warm close.'},
  ]},
  {id:'conv_06297',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat about a holiday',lines:[
    {speaker:'sho_child',jp:'ママ、お餅、しっとり食べたい。',en:"Mom — mochi, moist please.",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'うん。金色の折り紙、お正月飾りに使うね。',en:"Yes. Gold origami — New Year decor.",style:'Tender.'},
    {speaker:'sho_child',jp:'冬は、蒸し饅頭、おやつにしよう!',en:"Winter — steamed buns for snacks!",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'雪、きらきら光って、綺麗ね。',en:"Snow — glittering, lovely.",style:'Warm.'},
    {speaker:'sho_child',jp:'体育で着るジャージ、新しいの欲しい。',en:"PE jersey — want new.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お父さん、お土産にピートの香りのお茶、買ってきた。',en:"Dad — peat-scented tea souvenir.",style:'Reflective.'},
    {speaker:'sho_child',jp:'池、凍ってるとこ、滑って遊んだ。',en:"Pond — frozen spot, slid for play.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'お膳、食器、丁寧に並べてね。',en:"Tray — dishes, neat please.",style:'Warm close.'},
  ]},
  {id:'conv_06298',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens walk',lines:[
    {speaker:'sakura_teen',jp:'駅前のチョコ、しっとり食感、有名だよね。',en:"Station chocolate — moist, famous.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。金色の限定パッケージ、欲しい。',en:"Yeah. Gold limited package — want.",style:'Curious.'},
    {speaker:'sakura_teen',jp:'温泉、蒸しタオル、気持ちいい。',en:"Onsen steamed towel — feels good.",style:'Animated.'},
    {speaker:'riku_teen',jp:'夜のイルミ、きらきら、すごかった。',en:"Night illumi — glittering, intense.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'部活のジャージ、洗濯間に合わなかった。',en:"Club jersey — wash didn't make it.",style:'Wry.'},
    {speaker:'riku_teen',jp:'コーヒーのピート系の香り、店で感じた。',en:"Coffee peat scent — felt at the shop.",style:'Curious.'},
    {speaker:'sakura_teen',jp:'水たまり、凍って、危なかった。',en:"Puddle — frozen, dangerous.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お膳料理の写真、家族に送った。',en:"Tray-meal photo — sent family.",style:'Bright close.'},
  ]},
  {id:'conv_06299',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃のお菓子、しっとりした和菓子が懐かしい。',en:"Youth's sweets — moist wagashi, missed.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。結婚式の金色の屏風、覚えてる?',en:"Yes. Wedding gold byobu — remember?",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'蒸し風呂、温泉宿で何度も行ったな。',en:"Steam baths — onsen inns, often.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'若い頃の眼、きらきらしてたわね、お互い。',en:"Youth eyes — glittering, mutually.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'孫のジャージ、洗濯してあげようかな。',en:"Grandkid's jersey — wash?",style:'Warm.'},
    {speaker:'sachiko_grandma',jp:'お土産のピート風味のお酒、お父さん、お気に入りだった。',en:"Peat-flavored souvenir liquor — Dad's fave.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'川の水、冬は凍って、子供の頃、滑ったな。',en:"River — winter frozen, kid-time, slid.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'お膳、おもてなしに、よく出したわね。',en:"Tray — often for hospitality.",style:'Warm close.'},
  ]},
  {id:'conv_06300',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan a winter menu',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、冬メニュー、しっとり系スイーツ、入れよか。',en:"Aoi-san — winter, moist sweets, include?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。クリスマス、金色のラッピング、特別感、出します。',en:"Yes. Christmas — gold wrap, special feel.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'寒い日には、蒸し料理、需要、あるな。',en:"Cold days — steamed dishes in demand.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'店内、きらきらしたデコレーション、増やしました。',en:"In-store — glittering decor, increased.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'スタッフのジャージ、ロゴ、新調しよか。',en:"Staff jersey — new logo?",style:'Practical.'},
    {speaker:'aoi_barista',jp:'ピート系のコーヒー、限定で入荷します。',en:"Peat-style coffee — limited stock.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'氷柱が凍って下がっとる景色、写真に撮ろ。',en:"Icicle-frozen scene — photo it.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'懐石風の小膳、ランチで出しましょう。',en:"Kaiseki-style small tray — lunch serve.",style:'Warm close.'},
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

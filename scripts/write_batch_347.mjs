import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_347 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['眉','ポテト','茹で','間取り','スイカ','ありのまま','体型','嫌う']
const B_T = ['差額','草案','均一','雇っ','宛て','簿記','終身','巻き込ん']
const C_T = ['人道','倒す','信徒','激化','国税','紙幣','財界','原動力']
const D_T = ['カクテル','斗','前夜','土佐','団長','賞味','極限','サムライ']

const data = [
  // A
  {id:'conv_06901',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、最近、眉、サロンで、整えてもらってるの、私、本当に、印象、変わるよね。',en:"Aoi — lately, brow salon-styled, impression really-changes.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。新作の、ポテトフライ、お客様に、好評よ、葵で、ぜひ、食べてって。',en:"Yeah. New potato-fry — cust favorable, Aoi-eat-try.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'最近、夕食、卵を、茹でるだけの簡単メニューよ、私、忙しくて。',en:"Lately — dinner, egg-boil-only easy menu, busy.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'新居の間取り、私、考えるの、結構、楽しんでるよ、家、決まったらね。',en:"New-home layout — me, considering, quite-enjoying, when home-decide.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'夏のスイカ、葵の店でも、出す予定、ある?ジュースとか、流行るかも。',en:"Summer watermelon — Aoi's, out-plan?, juice trend maybe.",style:'Probe.'},
    {speaker:'aoi_barista',jp:'メイちゃん、彼に、ありのままの自分、見せられて、すごくいい関係よね、葵としても、嬉しい。',en:"Mei — bf, true-self showable, great rel, as Aoi glad.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'最近、体型、ちょっと、気になってきたの、私、ジム、行ってみようかしらね、葵。',en:"Lately — body shape slightly bothering, gym-try?, Aoi.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'お客様、嫌う方が、いらっしゃるサービス、なくしたいわよね、葵で、いつも、意識してる。',en:"Cust — disliking-service, remove want, Aoi always-mindful.",style:'Reflective close.'},
  ]},
  {id:'conv_06902',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、ぼくの眉、お父さんに、似てるって、お祖父ちゃんに、言われたよ。',en:"Mom — my brow Dad-resemble, Grandpa-said.",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'うん。お弁当の、ポテトサラダ、お友達にも、シェアしてあげようね、翔くん。',en:"Yes. Lunch potato-salad — friend-share, Sho.",style:'Soft.'},
    {speaker:'sho_child',jp:'ぼく、卵、上手に、茹でられるよ、ママ、見て、できたよ、嬉しい!',en:"Me — egg well boil-able, Mom see, done, glad!",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'新しいお家、間取り、考えてるのよ、ママ、お父さんと、一緒に、計画中なの。',en:"New home — layout-considering, Mom, with-Dad plan.",style:'Reflective.'},
    {speaker:'sho_child',jp:'夏のスイカ、お祖父ちゃんち、畑で、できるんだよ、ぼく、楽しみだなあ、本当に。',en:"Summer watermelon — Grandpa's, farm-grows, fun really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'翔くんの、ありのままの姿、ママ、本当に、大好きよ、いつまでも、応援してるからね。',en:"Sho true-self — Mom really love, always cheer.",style:'Tender.'},
    {speaker:'sho_child',jp:'お父さんの体型、ちょっと、丸くなってきたって、お母さん、言ってたね、ダイエット?',en:"Dad body — bit round, Mom said, diet?",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'お野菜、嫌う子供、多いって、聞くけど、翔くん、よく、食べてくれて、嬉しいわ。',en:"Veggies — disliking kids many heard, Sho often-eat, glad.",style:'Warm close.'},
  ]},
  {id:'conv_06903',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前、眉、結構、整えてるよね、最近、印象、変わったよ、本当に。',en:"Riku — brow quite-trimmed, lately impression changed, really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。学食の、ポテト、めっちゃ、好きなんだぜ、俺、毎日、食べてるよ、結構。',en:"Yeah. Caf potato super-like, me, daily eat, quite.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'家庭科で、パスタを、茹でるって、難しいよね、リク、ちょっと、苦戦したよ。',en:"Home-ec — pasta-boil hard, Riku, struggled.",style:'Wry.'},
    {speaker:'riku_teen',jp:'お前の家の間取り、結構、広いって、聞いたぜ、桜、いつか、遊びに行ってもいい?',en:"Your home layout — quite wide, heard, Sakura, sometime visit-OK?",style:'Curious.'},
    {speaker:'sakura_teen',jp:'夏祭り、皆で、スイカ割り、しようよ、リク、楽しい思い出に、絶対なるよ。',en:"Fest — all watermelon-split, Riku, def fun-memory.",style:'Eager.'},
    {speaker:'riku_teen',jp:'お前は、ありのままの自分で、十分、素敵だぜ、桜、無理しないでいいよ、いつも。',en:"You — true-self enough lovely, Sakura, don't-overdo always.",style:'Soft.'},
    {speaker:'sakura_teen',jp:'体型、気にしてる女子、結構、多いんだよ、リク、わかる?クラスでも、話題なんだ。',en:"Body — minding-girls quite many, Riku, get?, class-topic.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'宿題、本当に、嫌う気持ち、あるけど、頑張らないとな、桜、お互いに、頑張ろう。',en:"Homework — dislike-feel exists, but try-must, Sakura, mutual try.",style:'Wry close.'},
  ]},
  {id:'conv_06904',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、私の眉、結構、太かったよな、ばあさん、写真で、見ると、笑っちゃうよ。',en:"Youth — my brow quite thick, gran, photo-see, laughs.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。お祖母ちゃんの作る、ポテトサラダ、孫が、好きだったわよね、覚えてる?',en:"Yes. Granny potato-salad — grandkid-liked, remember?",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'夕飯、お野菜、茹でておくか、ばあさん、簡単に、できるからね、お互い、年だしね。',en:"Dinner — veggies boil-ahead?, gran, easy-done, age each-other.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'若い頃の家、間取り、狭かったわよね、子育て、大変だったわ、覚えてる、あなた?',en:"Youth home — layout narrow, childrearing hard, remember, dear?",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'子供の頃、近所の畑で、スイカ、よく、頂いたな、ばあさん、覚えてるかな。',en:"Childhood — neighbor-farm, watermelon often received, remember?",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'ありのままの自分で、生きてきてよかったって、思うわよね、あなた、お互いに、本当に。',en:"True-self lived — glad think, dear, mutually really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'最近、私の体型、ばあさんから、見ると、どう?変わった?',en:"Lately — my body, from-gran, how?, changed?",style:'Curious.'},
    {speaker:'sachiko_grandma',jp:'お祖父ちゃんは、苦いお薬を、嫌うのよね、いつも、私が、なだめてるわよね、知ってる、あなた?',en:"Grandpa — bitter-med disliking, always me-soothing, knew?",style:'Wry close.'},
  ]},
  {id:'conv_06905',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、眉、上手に、お絵描き、してるね、写実的で、本当に、上手だよ、すごい。',en:"Sho — brow, well-drawn, realistic, well-done, amazing.",style:'Praising.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、ポテトフライ、大好きなんだ、ファストフード、行きたいよ、また。',en:"Mei-sis — me, potato-fry love, fast-food go-want, again.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'夏休み、メイ姉さんの家で、枝豆を、茹でて、食べようね、翔くん、約束ね。',en:"Summer — Mei-sis home, edamame boil-eat, Sho promise.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さんの家の間取り、ぼく、好きだよ、明るくて、広くて、本当に、いい感じ。',en:"Mei-sis home layout — like, bright, wide, good-feel really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'夏祭りで、スイカ、丸ごと、買おうね、翔くん、お祖父ちゃんと、一緒に、食べようね。',en:"Fest — watermelon whole-buy, Sho, with Grandpa eat.",style:'Cheerful.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼくの、ありのままの姿、優しく、見守ってくれるね、本当に、嬉しいよ。',en:"Mei-sis — my true-self gently-watch, glad really.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'子供の体型、すぐ、変わるのよ、翔くん、健康に、育ってね、メイ姉さん、応援してる。',en:"Kid body — quick-change, Sho, healthy-grow, Mei-sis cheers.",style:'Tender.'},
    {speaker:'sho_child',jp:'ぼく、虫を、嫌う子も、いるって、知ってるよ、メイ姉さん、ぼく、平気だけどね、虫さん。',en:"Me — bug-disliking kids exist, knew, Mei-sis, me-fine bugs.",style:'Bright close.'},
  ]},

  // B
  {id:'conv_06906',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'前回との売上の差額、原因を、突き止めろ、対策、必要だ。',en:"Vs-last sales difference — find cause, measures needed.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。新方針の草案、明日まで、ご提出いたします、検討材料として。',en:"Yes. New-policy draft — by tomorrow submit, review-mat.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'価格、市場で、均一に、保てるよう、競合の動向、見ろ。',en:"Price — market-uniform, kept, rival-trend watch.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新人を、十名、雇って、新部署、立ち上げました、業績、寄与しております。',en:"Yes. Newbie 10 hired, new-dept launched, perf contributing.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'重要書類、社長宛て、確認するから、すぐ、持ってこい。',en:"Vital docs — pres-addressed, verify, bring-immediately.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。経理の簿記、デジタル化、進めております、効率化、図っております。',en:"Yes. Acct bookkeeping — digital-advancing, efficient aimed.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'終身雇用、当社、続けていく方針だ、社員に、安心、与えろ。',en:"Lifetime employ — our co continue policy, staff reassure.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。他部署を、巻き込んで、新事業、推進しております、横断的に、進めています。',en:"Yes. Other-depts involve, new biz pushing, cross-cutting.",style:'Close.'},
  ]},
  {id:'conv_06907',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'競合との価格の差額、お客様、敏感ですから、注意しましょう、必ず。',en:"Vs-rival price-diff — cust sensitive, careful def.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。新企画の草案、社員、意見、続々と、寄せてくれています、熱意、感じます。',en:"Yes. New-plan draft — staff opinions, continuous, passion-feel.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'各支店、サービス、均一に、提供できる体制、整えていきましょう、お客様向けに。',en:"Each branch — service uniform-provide system, prep, cust-aim.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。専門スタッフ、追加で、雇って、現場、強化いたしました、若手も、頼もしいです。',en:"Yes. Spec staff — additional-hired, site strengthened, youth reassuring.",style:'Update.'},
    {speaker:'yuki_office',jp:'お客様、宛て名の確認、二重で、する習慣、社内、徹底してね、間違い防止に。',en:"Cust — addr-name verify twice habit, internal thorough, error-prev.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新人、簿記の研修、来週から、開始予定です、外部講師、お招きいたします。',en:"Yes. Newbie — bookkeeping train, next-week start, ext-lect invite.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'終身的に、信頼される企業、目指していきましょうね、お客様にも、社員にも、両方。',en:"Lifetime trusted co — aim, cust-staff both.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。トラブルに、社員を、巻き込まないよう、社内体制、見直しております、最新版で。',en:"Yes. Trouble — staff-no-involve, internal-review, latest.",style:'Close.'},
  ]},
  {id:'conv_06908',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、予算と実績の差額、しっかり、把握する習慣、つけろ、研究にも、活きるぞ。',en:"Ren — budget vs actual diff, properly-grasp habit, research-utilize.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。論文の草案、先生に、レビュー、お願いしてまいります、来週中に。',en:"Yes. Paper draft — prof, review-asked, by next-week.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'実験条件、均一に、保つこと、研究の基本だ、忘れずに、丁寧に、扱え。',en:"Exp conditions — uniform-kept, research basic, don't forget, careful.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究助手、二名、雇って、データ収集、進めております、効率化、図れています。',en:"Yes. Asst 2 hired, data-collect advancing, eff-aimed.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'論文の宛て先、ジャーナル、慎重に、選ぶこと、評価に、直結する、覚えておけ。',en:"Paper-addr — journal carefully choose, eval directly, remember.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究費の簿記、私自身、勉強しております、研究者として、必要な知識ですから。',en:"Yes. Research-fund bookkeeping — me, studying, as researcher needed.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'終身の研究テーマ、若いうちに、見つけられると、いいな、君も、慎重に、選べ。',en:"Lifetime research-theme — youth-find good, you carefully choose.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。共同研究者を、巻き込んで、新しい視点、取り入れたいです、これから、特に。',en:"Yes. Co-researchers involve — new view take, hence esp.",style:'Earnest close.'},
  ]},
  {id:'conv_06909',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'被害額と返金の差額、警察と、ご相談、必要な段階、入っております、本件。',en:"Damage vs refund diff — police-consult, stage, this case.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。社内対応の草案、警察様に、ご一読、いただきたいのですが、明日、伺います。',en:"Yes. Internal-resp draft — police single-read want, tomorrow visit.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'地域防犯、均一に、行き渡るよう、警察、努めております、感謝、申し上げます、ご協力。',en:"Local crime-prev uniform-reach, police-effort, gratitude, coop.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。元警察官の方を、雇って、当社、防犯顧問として、活用させていただいております。',en:"Yes. Ex-officer hired — as our crime-prev adv, utilized.",style:'Update.'},
    {speaker:'takeda_officer',jp:'被害者宛ての通知、慎重に、お送りしております、警察、配慮、徹底中です。',en:"Victim-addressed notif — carefully sent, police consider thorough.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。会計の簿記、当社、警察、要請に応じて、お見せできる準備、整えております。',en:"Yes. Acct bookkeeping — police-req, show-able prep ready.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'地域住民、終身的に、安心できる体制、警察、目指しております、全力で。',en:"Residents — lifetime reassure system, police aim, full-effort.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。事件に、社員を、巻き込まないよう、社内、警戒、強めております、最大限。',en:"Yes. Incident — staff-no-involve, internal alert strengthen, max.",style:'Close.'},
  ]},
  {id:'conv_06910',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業時、予算と実績の差額、何度も、頭を悩ませたよ、覚えてる、お父さんの代から。',en:"Founding — budget-actual diff, many-times worried, remember, since Dad-era.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。今期方針の草案、お父さんにも、ご意見、伺いたいのですが、お時間、ありますか?',en:"Yes. This term draft — Dad-opinion also want, time-have?",style:'Polite.'},
    {speaker:'hiroshi_elder',jp:'創業時、製品の品質、均一に、保つこと、本当に、苦労したんだぞ、お父さんの代は。',en:"Founding — product-quality uniform-keep, really hardship, Dad-era.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。社員、長く、雇って、家族のように、過ごしていきたいです、お父さんの代から、変わらず。',en:"Yes. Staff — long-hired, family-like, want-spend, since Dad-era unchanged.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お得意様宛ての年賀状、創業時から、私、必ず、手書きで、書いていたぞ、覚えてる?',en:"VIP-cust NY-card — since founding, always handwritten, remember?",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。経理の簿記、創業時、お父さんが、毎日、つけていたって、聞きました、本当に、すごいです。',en:"Yes. Acct bookkeeping — founding, Dad daily-kept, heard, amazing really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'終身、社業に、捧げる覚悟、私、創業時に、決めたんだ、息子としても、覚えておいて欲しい。',en:"Lifetime — biz-devotion, resolve, founding-decided, as son remember-want.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。創業者の言葉、社員を、よい意味で、巻き込んでまいります、お父さんの志、引き継ぎます。',en:"Yes. Founder-words — staff good-meaning involve, Dad-aim inherit.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06911',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses social history',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、論文、戦後の人道支援、よく、論じていますね、研究、深いです、本当に。',en:"Ren — paper, post-war humanitarian, well-argued, research deep, really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。歴史上、独裁政権を、倒す動き、複数の地域で、扱いました、論文の中で。',en:"Yes. Hist — dictat-topple movements, multi-region handled, in paper.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'新興宗教の信徒、戦後の社会で、果たした役割、興味深いですね、論文でも、扱いましたね。',en:"New-rel followers — post-war soc-role, intriguing, paper-handled.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。経済競争の激化、戦後の日本、特に、急激でしたね、文献から、読み取れます。',en:"Yes. Econ-rivalry intense — post-war Japan, rapid, lit-readable.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦後の国税制度、改革の歴史、論文の重要な部分ですね、よく、扱われていますね。',en:"Post-war nat-tax — reform hist, paper-key part, well-handled.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。当時の紙幣制度、戦後、何度も、変わりましたね、混乱を、招いたとも、書きました。',en:"Yes. Era currency — post-war, many-changes, chaos-invited, wrote.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦後復興、財界の役割、再評価する視点、新鮮ですね、桜さん、新しい論点です、本当に。',en:"Post-war recov — biz-leader role, re-eval view fresh, new argument, really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。市民の意志こそ、戦後復興の原動力でしたね、論文の結論として、書きました。',en:"Yes. Citizen-will — post-war recov driving-force, as conclusion wrote.",style:'Earnest close.'},
  ]},
  {id:'conv_06912',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、人道的見地から、警察、慎重に、対応しております、社会的影響、大きい案件です。',en:"Case — humanit-view, police careful handle, soc-impact big case.",style:'Calm.'},
    {speaker:'ren_uni',jp:'容疑者、過去、複数の店舗を、倒すような、被害を、与えていたんですよね。',en:"Suspect — past, multi-store topple-like damage given.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、新興宗教の信徒、装っていた疑い、ございます、捜査中です、本件。',en:"Yes. Suspect — new-rel-believer disguise susp, investigating, this case.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害が、激化しているように、感じます、警察、急いでいらっしゃいますよね、現在。',en:"Damage — intensifying-feel, police-hurry, current.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。国税の関与、見られる事案、別件で、捜査、進めております、複雑な背景、ございます。',en:"Yes. Nat-tax involvement-seen case, sep-investigating, complex bg.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者、偽の紙幣も、使った疑い、ありますか?最近の手口、巧妙化していますよね。',en:"Suspect — fake-currency use susp?, recent methods sophist.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。財界の方、被害に、遭われた事例、過去にも、ございました、警察、深く、関わってきました。',en:"Yes. Biz-leaders — victim cases past existed, police deeply-involved.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察活動の原動力、市民の信頼ですよね、本当に、感謝です、私たち、市民として、本当に。',en:"Police-activity drive — citizen-trust, really grateful, as citizen really.",style:'Reflective close.'},
  ]},
  {id:'conv_06913',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、人道医療の現場、海外でも、活動されている医師、いらっしゃいますね、立派です。',en:"Ren — humanit-med site — overseas-active doctors exist, splendid.",style:'Calm.'},
    {speaker:'ren_uni',jp:'病気を、倒す研究、最新の医療技術で、進んでいますね、希望、見えてきました。',en:"Disease-topple research — latest med-tech advancing, hope visible.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。信徒の方々、宗教的理由で、輸血、拒否される事例、医療現場、苦慮しております。',en:"Yes. Believers — relig-reason transfusion-refuse cases, med-site distressed.",style:'Patient.'},
    {speaker:'ren_uni',jp:'最近、新型感染症の脅威、激化していますよね、医療現場、緊張、続いていますか?',en:"Lately new-infect threat intense, med-site tension continuing?",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。国税による、医療補助制度、患者さんの、命綱となっております、本当に。',en:"Yes. Nat-tax med-aid system — patient-life-line, really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医療費を、現金紙幣で、支払う方、最近、減ってきていますね、電子化、進んで。',en:"Med-fee currency-pay — lately decreasing, e-payment advancing.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。財界からの医療への寄付、最近、増えております、本当に、感謝、しております。',en:"Yes. Biz-leader med-donation — lately increase, gratitude really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'医師の使命感、医療の原動力ですね、本当に、頭が下がります、いつも、心から、感謝しています。',en:"Doctor mission — med-driver, humbled really, from-heart gratitude always.",style:'Reflective close.'},
  ]},
  {id:'conv_06914',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp strategy',lines:[
    {speaker:'hiroshi_boss',jp:'当社、人道支援、寄付を通じて、続けていけ、企業の責任として、社員にも、伝えろ。',en:"Our co — humanit-aid, via-donation continue, as corp-resp, staff convey.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。競合を、市場で、倒す力、当社、養ってまいります、製品力、強化中です。',en:"Yes. Rival market-topple power, foster, product-strength strengthening.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'創業者は、宗教の信徒でも、なかったが、信念は、確かに、持っていた人物だった。',en:"Founder — religious-believer not, but belief surely-held person.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。グローバル競争、激化しております、海外展開、加速、必要です、来期から、特に。',en:"Yes. Global rivalry intense, overseas-expansion accel needed, next term esp.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'国税の対応、社内、いつも、最優先で、行え、コンプラ、徹底だ、絶対に。',en:"Nat-tax handle — internal, always top-priority, compl thorough, absolute.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新紙幣対応、社内システム、来月、完了予定です、お客様、ご安心ください。',en:"Yes. New-currency, internal sys, next-month complete, cust rest-assured.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界、財界の重鎮として、私も、責任ある発言、心がけてまいります、社員に、模範を、示す。',en:"Industry biz-leader heavyweight, me, resp-speech mindful, staff role-model.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員のやる気こそ、当社の、最大の原動力です、社員、大切にしてまいります、本当に。',en:"Yes. Staff-morale — our biggest drive, staff-treasure, really.",style:'Close.'},
  ]},
  {id:'conv_06915',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through social research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、論文、人道主義の歴史、丁寧に、扱っていますね、研究の質、本当に、高いです。',en:"Sakura — paper, humanism hist, careful handle, research-quality high really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。歴史上、暴政を、倒す市民運動、複数、取り上げました、論文の中で。',en:"Yes. Hist — tyranny-topple civic-movements multi-raised, in paper.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'各宗教の信徒、社会に、果たした役割、論文で、丁寧に、扱われていますね、印象的でした。',en:"Each-rel believers — soc-role played, paper carefully-handled, striking.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。冷戦の激化、世界中の市民生活、深く、影響を、与えましたね、第三章で、論じました。',en:"Yes. Cold War intense — worldwide citizens deep-affect, ch3 argued.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'国税制度の歴史、各国の社会構造、反映していますね、論文でも、扱いましたよね。',en:"Nat-tax hist — countries soc-structure reflect, paper-handled.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。紙幣のデザイン、文化的象徴として、各国、こだわっていますね、興味深い研究テーマです。',en:"Yes. Currency design — cult-symbol, countries-insist, intriguing.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦後、財界の影響力、政治にも、及んできましたね、論文の終盤で、扱われていますね。',en:"Post-war — biz-leader influence, polit-also reached, paper-late handled.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。市民の声こそ、民主主義の、最大の原動力ですね、論文の結論として、書きました、本当に。',en:"Yes. Citizen-voice — democ biggest drive, as conclusion wrote, really.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06916',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、新作カクテル、私、試飲したいわよ、お祝いの日に、葵と、二人で、絶対。',en:"Aoi — new cocktail, taste-want, cele-day, with Aoi two def.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。新スタッフの翔斗くん、若くて、本当に、優秀な子よ、覚えてくれてる、メイちゃん?',en:"Yeah. New staff Shoto — young, excellent, remember, Mei?",style:'Animated.'},
    {speaker:'mei_romantic',jp:'コンサート前夜、ドキドキして、眠れなかったよ、私、明日のチケット、楽しみすぎて。',en:"Concert-eve — heart-pounding, sleepless, tomorrow tix, too-fun.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'土佐料理のお店、新しく、できたわよ、葵で、メイちゃんも、興味、あるよね、行ってみる?',en:"Tosa cuisine — newly opened, Mei also interest, go-try?",style:'Probe.'},
    {speaker:'mei_romantic',jp:'文化祭の団長、私、引き受けてみようかなって、悩んでるの、責任、重いよね、葵、どう思う?',en:"Cult-fest leader — accept maybe, considering, heavy resp, Aoi think?",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'冷蔵庫の食材、賞味期限、ちゃんと、確認しないとね、葵、葵で、私、徹底してるよ。',en:"Fridge — best-by, properly verify, in Aoi, thorough, me.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'最近、仕事、極限まで、頑張ってるの、私、本当に、葵、心配しないでね、大丈夫。',en:"Lately work — limit-effort, Aoi don't worry, OK.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'時代劇のサムライ、メイちゃんの彼、結構、好きだって、聞いたわよ、似てるよね、雰囲気が。',en:"Period-drama samurai — Mei-bf, quite-like, heard, resembles air.",style:'Animated close.'},
  ]},
  {id:'conv_06917',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お父さんが、お祝いに、ノンアルコールカクテル、作ってくれたよ、美味しかったの!',en:"Mom — Dad cele non-alc cocktail made, tasty!",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'うん。お友達の名前、翔斗くんって、いうのよね、優しい子ね、知ってる、翔くん?',en:"Yes. Friend-name — Shoto, kind, knew, Sho?",style:'Soft.'},
    {speaker:'sho_child',jp:'運動会の前夜、ぼく、ドキドキして、眠れなかったんだよ、ママ、覚えてる、ちゃんと寝てって、言ったよね?',en:"Sports-day eve — heart-pound sleepless, Mom, remember, sleep-said?",style:'Reflective child.'},
    {speaker:'yumiko_mom',jp:'お父さんの実家、土佐の田舎よ、夏休み、家族で、行きましょうね、翔くん、楽しみね。',en:"Dad-home — Tosa country, summer-family go, Sho fun.",style:'Warm.'},
    {speaker:'sho_child',jp:'運動会で、ぼく、チームの団長に、選ばれたんだよ、ママ、本当に、嬉しいんだ、自信、ついた。',en:"Sports — me, team-leader chosen, Mom glad really, conf-gained.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'お菓子、賞味期限、しっかり、確認してね、翔くん、お腹、壊さないように、ね、約束。',en:"Sweets — best-by properly verify, Sho, lest-stomach-upset, promise.",style:'Direction.'},
    {speaker:'sho_child',jp:'おもちゃで、極限まで、戦うって、お父さん、いつも、言うんだよ、ぼく、笑っちゃうよ。',en:"Toy — limit-fight, Dad always-says, me laughs.",style:'Wry.'},
    {speaker:'yumiko_mom',jp:'お父さん、若い頃、サムライドラマ、大好きだったって、聞いてる、お祖母ちゃんから、知ってた?',en:"Dad — youth, samurai-drama loved, heard from-Granny, knew?",style:'Reflective close.'},
  ]},
  {id:'conv_06918',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、文化祭で、ノンアルコールカクテルバー、出店するクラス、あるって、聞いた、面白そうだよね?',en:"Riku — cult-fest, non-alc cocktail bar, class-store, heard, fun?",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。学年の翔斗、最近、お前と、よく、話してるみたいだな、桜、結構、仲、いいよね?',en:"Yeah. Grade-Shoto — lately, you often-talk, Sakura, quite friend?",style:'Probe.'},
    {speaker:'sakura_teen',jp:'試験前夜、私、緊張で、眠れなかったんだ、本当に、リク、覚えてる、結果、よかったよね。',en:"Pre-test eve — nervous-sleepless, Riku remember, results good.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'修学旅行、土佐の高知、見学する予定らしいぜ、桜、お前、楽しみだろ、絶対?',en:"School trip — Tosa Kochi, visit planned, Sakura, fun def?",style:'Eager.'},
    {speaker:'sakura_teen',jp:'部活の団長、後輩の指導、結構、難しいよね、リク、わかる?私、悩んでる、最近。',en:"Club leader — junior-instr, quite hard, Riku get?, lately worry.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お弁当、賞味期限、夏は、特に、気をつけないとな、お互い、お腹、壊しちゃうぜ、お互い。',en:"Lunch — best-by, summer esp careful, lest stomach-upset, each.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'部活、極限まで、頑張る、お前、本当に、すごいよ、リク、本当に、尊敬してる、私も。',en:"Club — limit-effort, you, amazing, Riku, respect, me too.",style:'Praising.'},
    {speaker:'riku_teen',jp:'歴史の授業で、サムライの精神、勉強したよ、桜、お前も、興味、出てきた?最近の。',en:"Hist class — samurai-spirit studied, Sakura, you interest-came lately?",style:'Curious close.'},
  ]},
  {id:'conv_06919',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、新婚旅行の夜、ホテルで、カクテル、飲んだよな、ばあさん、覚えてる?',en:"Youth — honeymoon-night, hotel cocktail drank, gran remember?",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。息子、翔斗って、名前、つけたかったわよね、結局、別の名前になったけど、覚えてる?',en:"Yes. Son — Shoto name wanted, ended-other, remember?",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'結婚式の前夜、本当に、緊張したな、ばあさん、私、よく、覚えてるよ、心臓、ドキドキした。',en:"Wedding-eve — really nervous, gran, well-remember, heart-pound.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'土佐の親戚、もう、何十年も、訪ねていないわね、夏に、行ってみましょうか、あなた、二人で。',en:"Tosa relatives — decades-no-visit, summer go-try?, dear two.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'町内会の団長、私、何度も、務めたな、若い頃、本当に、大変だったわよね、ばあさん、覚えてる?',en:"Town-assoc leader — many-served, youth, hard really, remember?",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'お醤油の賞味期限、最近、ちゃんと、確認するようになったわよね、年取って、慎重に、なるわね。',en:"Soy-sauce best-by — lately verify, aged, careful become.",style:'Wry.'},
    {speaker:'hiroshi_elder',jp:'若い頃、極限まで、働いた経験、今、考えると、本当に、貴重だったな、人生の宝物よな。',en:"Youth — limit-worked exp, now-think, precious, life-treasure.",style:'Sage.'},
    {speaker:'sachiko_grandma',jp:'お祖父ちゃん、サムライドラマ、若い頃から、大好きだったわよね、覚えてる、私も、観たわよ、一緒に。',en:"Grandpa — samurai-drama, since-youth loved, remember, also-watched together.",style:'Tender close.'},
  ]},
  {id:'conv_06920',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan a menu',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、新店、カクテル類、メニューに、増やしていこか、夜の客層、開拓したいんや。',en:"Aoi — new store, cocktails menu-increase, night-cust pioneer want.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。バイトの翔斗くん、料理の才能、ありそうですよね、葵で、伸ばしていきたいです。',en:"Yes. Part-time Shoto — cooking-talent, in Aoi grow-want.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'新メニュー、出す前夜、めっちゃ、ワクワクするわ、葵さん、毎回、楽しみやで、本当に。',en:"New menu — out-eve, super-excited, Aoi, every-time fun really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。土佐の鰹、新鮮なものを、仕入れたいですね、漁師さん、ご紹介、お願いできますか?',en:"Yes. Tosa katsuo — fresh-source want, fishermen intro-please?",style:'Eager.'},
    {speaker:'daichi_kansai',jp:'地域祭りの団長、今年も、僕、やらしてもらうことになってん、葵さん、応援、よろしく頼むわ。',en:"Local-fest leader — this year, me, accepted, Aoi cheer please.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。賞味期限管理、当店、最も、徹底している部分です、お客様の安全、第一ですから、葵で。',en:"Yes. Best-by mgmt — store most thorough, cust-safety first, in Aoi.",style:'Practical.'},
    {speaker:'daichi_kansai',jp:'料理人は、極限まで、味、追求せなあかんねん、葵さん、それが、僕の信念やで、本当に。',en:"Cooks — limit-taste pursue must, Aoi, my belief, really.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。サムライ精神のような、職人魂、当店、貫いてまいりたいです、葵で、ずっと。',en:"Yes. Samurai-like artisan-spirit — store pierce want, in Aoi, always.",style:'Warm close.'},
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

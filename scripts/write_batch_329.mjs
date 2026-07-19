import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_329 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['左利き','つまん','シャイ','へー','かくして','戸惑っ','うっとり','噛む']
const B_T = ['年度末','社債','付け加える','構える','済ませる','終日','折っ','心がける']
const C_T = ['実写','か国','捧げる','煽り','引っ張ら','鵜呑み','広める','築か']
const D_T = ['成田空港','読み手','ドラム缶','ローラ','滑る','解ける','歌え','見入っ']

const data = [
  // A
  {id:'conv_06541',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、ぼく、左利きかなあ?',en:"Mom — am I left-handed?",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'うん、つまんないとか言わずに、お絵描き、続けてね。',en:"Yes — without saying 'boring,' keep drawing.",style:'Soft.'},
    {speaker:'sho_child',jp:'お父さん、シャイで、声、小さいよね。',en:"Dad — shy, small voice.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'へー、よく観察してるのね。',en:"Oh — well-observing.",style:'Warm.'},
    {speaker:'sho_child',jp:'お友達、引っ越して、かくして寂しくなったよ。',en:"Friend moved — thus lonely.",style:'Wistful child.'},
    {speaker:'yumiko_mom',jp:'うん、初めての場所では、戸惑ったね、最初。',en:"Yes — new places, you were confused at first.",style:'Tender.'},
    {speaker:'sho_child',jp:'夜空の星、うっとりするね、ママ。',en:"Night-sky stars — enchanted, Mom.",style:'Awe.'},
    {speaker:'yumiko_mom',jp:'よく噛む子は、頭、よくなるんだって。',en:"Well-chewing kids — head improves, they say.",style:'Warm close.'},
  ]},
  {id:'conv_06542',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat about a date',lines:[
    {speaker:'mei_romantic',jp:'昨日のデート、彼、左利きだったの、気付いた。',en:"Yesterday's date — he's left-handed, noticed.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'へー、つまんない時間じゃなかった?',en:"Oh — wasn't dull-time?",style:'Curious.'},
    {speaker:'mei_romantic',jp:'うん。彼、最初、シャイで、寡黙だった。',en:"Yes. He — initially shy, taciturn.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'へー、徐々に打ち解けたのね。',en:"Oh — gradually opened up.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'告白されて、かくして、お付き合い、始まったの。',en:"Confessed — thus, dating started.",style:'Shy.'},
    {speaker:'aoi_barista',jp:'最初は、戸惑ったでしょ、急展開で。',en:"First — bewildered, sudden development.",style:'Probe.'},
    {speaker:'mei_romantic',jp:'うん。手を握られて、うっとりしちゃった。',en:"Yes. Hand-held — got enchanted.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'幸せ噛みしめてるね、メイちゃん。',en:"Mei — savoring happiness.",style:'Warm close.'},
  ]},
  {id:'conv_06543',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk',lines:[
    {speaker:'sakura_teen',jp:'リク、お前、左利きだっけ?',en:"Riku — you left-handed?",style:'Curious teen.'},
    {speaker:'riku_teen',jp:'いや。授業、つまんない時、あるよな。',en:"No. Classes — sometimes dull.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'シャイな後輩、声、かけにくいんだよね。',en:"Shy underclassman — hard to call.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'へー、桜、結構気にしてるんだな。',en:"Oh — Sakura, you care quite a bit.",style:'Probe.'},
    {speaker:'sakura_teen',jp:'うん。先輩が引退して、かくして部、変わった。',en:"Yes. Senpais retired — thus club changed.",style:'Wistful.'},
    {speaker:'riku_teen',jp:'最初、戸惑ったよな、新体制に。',en:"First — bewildered by new setup.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'夜桜、うっとりするくらい綺麗だった、昨日。',en:"Night-cherry — enchanting beauty yesterday.",style:'Soft.'},
    {speaker:'riku_teen',jp:'お菓子、よく噛むと、もっと甘い。',en:"Sweets — well-chewing, sweeter.",style:'Animated close.'},
  ]},
  {id:'conv_06544',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、私、左利きを矯正されたな。',en:"In youth — left-handedness corrected.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。最近の番組、つまんないものが多いね。',en:"Yes. Recent shows — many dull.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'孫、最初はシャイで、なかなか話してくれなかった。',en:"Grandkid — initially shy, didn't speak.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'へー、最近は、慣れてきたわね。',en:"Oh — lately, gotten used.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'長い人生、いろいろあって、かくして、今がある。',en:"Long life — various — thus, now exists.",style:'Sage.'},
    {speaker:'sachiko_grandma',jp:'最初の海外旅行、戸惑ったわね、二人で。',en:"First overseas trip — bewildered together.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'庭の紫陽花、うっとりするくらい綺麗だな、今年も。',en:"Garden hydrangea — enchanting beauty this year too.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'入れ歯でも、よく噛むこと、医者に言われた。',en:"Even with dentures — well-chew, doctor said.",style:'Warm close.'},
  ]},
  {id:'conv_06545',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','mei_romantic'],targets:A_T,scenario:'A uni student and friend chat',lines:[
    {speaker:'mei_romantic',jp:'蓮さん、左利きでしたよね、確か。',en:"Ren — left-handed, right?",style:'Casual.'},
    {speaker:'ren_uni',jp:'うん。研究室、つまんない日も、たまにあるよ。',en:"Yes. Lab — occasionally dull day.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'院生、シャイな人、多い印象です。',en:"Grad students — shy, many impression.",style:'Curious.'},
    {speaker:'ren_uni',jp:'へー、確かに、引きこもり気味の人、多いかも。',en:"Oh — indeed, hermitic types many maybe.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'論文、提出して、かくして、無事卒業ですよね。',en:"Paper-submit — thus, safely graduate.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'うん。最初、テーマ選びで戸惑ったな、僕も。',en:"Yes. First — theme-choosing bewildered, me too.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'大学院の図書館、本の量、うっとりします。',en:"Grad library — book volume, enchants.",style:'Soft.'},
    {speaker:'ren_uni',jp:'読書、噛むように、味わうのが大事だ。',en:"Reading — chew-like, savor matters.",style:'Reflective close.'},
  ]},

  // B
  {id:'conv_06546',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews finances',lines:[
    {speaker:'hiroshi_boss',jp:'年度末、決算、しっかり締めろ。',en:"Year-end — close accounts firmly.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社債、発行計画、進めています。',en:"Yes. Corporate bonds — issuance plan, advancing.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'資料に、注釈、もう少し付け加える必要がある。',en:"Material — annotations, more append needed.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新事業、しっかり構えるつもりです。',en:"Yes. New business — firmly position-intend.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'残務、今日中に、済ませるよう。',en:"Remaining work — today complete.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。終日、会議室を使用しています。',en:"Yes. All-day — meeting room in use.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'書類、折って、ファイルに収めろ。',en:"Documents — fold, file-collect.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。安全、心がけるよう、社員に伝えています。',en:"Yes. Safety — mind-keep, told staff.",style:'Close.'},
  ]},
  {id:'conv_06547',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss',lines:[
    {speaker:'yuki_office',jp:'年度末、ご苦労様、皆さん、お疲れでしょう。',en:"Year-end — kudos, everyone tired.",style:'Warm.'},
    {speaker:'kenji_office',jp:'はい。社債格付け、安定維持してます。',en:"Yes. Corp bond rating — stable.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'報告書に、市場分析を付け加える方向で。',en:"Report — market analysis append direction.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。来期は、しっかり構える体制で。',en:"Yes. Next term — firm-position structure.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'急ぎの案件、今日中に、済ませるよう。',en:"Urgent matters — complete today.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。経理は、終日、対応可能です。',en:"Yes. Accounting — all-day available.",style:'Update.'},
    {speaker:'yuki_office',jp:'紙、折って、封筒にしまうよう、お願い。',en:"Paper — fold, envelope-store, please.",style:'Polite.'},
    {speaker:'kenji_office',jp:'はい。コスト削減、心がけるよう、徹底しています。',en:"Yes. Cost-cut — mind-keep, thorough.",style:'Close.'},
  ]},
  {id:'conv_06548',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、年度末は、経営者にとって、節目だ。',en:"Ren — year-end, milestone for execs.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。社債について、勉強しました。',en:"Yes. Corp bonds — studied.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'発表に、自分の見解を付け加える勇気、持て。',en:"Presentation — courage to append own view, have.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。長期視点で構えるつもりです、キャリアを。',en:"Yes. Long-view position-intend, career.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'インターン業務、今週、済ませるように。',en:"Intern work — this week complete.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。終日、学ばせていただきます。',en:"Yes. All-day learn permit.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'契約書、ここを折って、サイン欄を出せ。',en:"Contract — fold here, signature-line out.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。礼儀、心がけるよう、徹底します。',en:"Yes. Manners — mind-keep, thorough.",style:'Earnest close.'},
  ]},
  {id:'conv_06549',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs a corp manager',lines:[
    {speaker:'takeda_officer',jp:'年度末、防犯活動、強化期間です。',en:"Year-end — crime-prev, strengthening period.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。社債詐欺の手口、参考になりました。',en:"Yes. Corp-bond fraud methods — referenced.",style:'Update.'},
    {speaker:'takeda_officer',jp:'注意喚起、防犯ポスターに、新事例を付け加える予定です。',en:"Awareness — poster, new cases append plan.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。社内、警戒態勢を構える方針です。',en:"Yes. Internal — alert posture position policy.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'現場調査、本日中に、済ませるよう、隊員に指示します。',en:"Site survey — today complete, instruct.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。終日、警察への協力体制、整えております。',en:"Yes. All-day police-cooperation, ready.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'書類、ここを折って、調書として保管します。',en:"Documents — fold here, store as record.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。市民の安全、心がけるよう、社員にも周知します。',en:"Yes. Citizen safety — mind-keep, inform staff.",style:'Close.'},
  ]},
  {id:'conv_06550',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'年度末の感慨、私もよく覚えている。',en:"Year-end sentiment — well-remember.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。社債に頼らない財務、目指しています。',en:"Yes. Bond-unreliant finance, aim.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'説明に、過去の教訓を付け加える視点、忘れるな。',en:"Explanation — past-lessons append view, don't forget.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。長期視点で構える経営、続けます。',en:"Yes. Long-view position mgmt — continue.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'やるべきこと、計画通りに済ませるのが、責務だ。',en:"Should-dos — plan-complete is duty.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。終日、現場主義、貫いてまいります。',en:"Yes. All-day on-site, persisted.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'書類、ここを折って、印を押す、昔の流儀だ。',en:"Documents — fold here, seal-press, old way.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。社員第一、心がけるよう、徹底します。',en:"Yes. Staff-first — mind-keep, thorough.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06551',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses media studies',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、漫画の実写化、研究テーマですね。',en:"Ren — manga-to-live-action, research theme.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。世界の四十か国で公開された事例、調査しました。',en:"Yes. 40-country releases — investigated.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'監督が、作品に人生を捧げる例、印象的でしたね。',en:"Director devoting life to work — striking.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。SNSの煽り、興行に影響していました。',en:"Yes. SNS provocation — affected box-office.",style:'Reflective.'},
    {speaker:'asuka_teacher',jp:'業界全体に引っ張られない視点、論文の強みですね。',en:"Industry-unswayed view — paper's strength.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。批評を鵜呑みにせず、自分で観るよう、推奨しています。',en:"Yes. Don't gulp-swallow critic, watch self, recommend.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'良い作品を広める意義、結論に書きましたね。',en:"Good-work spreading meaning — written in conclusion.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。新たなジャンルとして築かれる可能性、論じました。',en:"Yes. New genre as built-possibility — argued.",style:'Earnest close.'},
  ]},
  {id:'conv_06552',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs about a case',lines:[
    {speaker:'takeda_officer',jp:'本件、実写映像、防犯カメラで複数取れました。',en:"Case — actual footage, multi-cam captured.",style:'Calm.'},
    {speaker:'ren_uni',jp:'容疑者、複数か国を経由して入国していたんですね。',en:"Suspect — multi-country transited entry.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。家族への思いを捧げる手紙、現場で発見されました。',en:"Yes. Family-devotion letter — site-discovered.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'マスコミの煽り、捜査に影響しませんでしたか。',en:"Media provocation — investigation-affected?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。世論に引っ張られない捜査、心掛けています。',en:"Yes. Public-unswayed investigation — mindful.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察情報を鵜呑みにする報道、問題ですよね。',en:"Police-info gulp-swallow reporting — issue.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。正確な情報を広める必要、感じています。',en:"Yes. Accurate-info spread necessity — feel.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'信頼が築かれるには、時間が必要ですね、市民との。',en:"Trust to be built — time needed, citizen-wise.",style:'Curious close.'},
  ]},
  {id:'conv_06553',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses pandemic research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、感染症ドキュメンタリーの実写、ご覧になりましたか。',en:"Ren — infectious doc live-shoot, watched?",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。三十か国以上の医療現場、撮影されていましたね。',en:"Yes. 30+ countries' medical sites filmed.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'医師が患者に命を捧げる姿、感銘を受けました。',en:"Doctors devoting life to patients — touched.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'メディアの煽り、医療現場の負担、増やしましたよね。',en:"Media provocation — medical burden increased.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。風評に引っ張られない判断、求められました。',en:"Yes. Rumor-unswayed judgment — required.",style:'Informative.'},
    {speaker:'ren_uni',jp:'専門家の意見を鵜呑みにせず、自分で判断する姿勢、大事ですね。',en:"Don't gulp-swallow experts, judge self — vital.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。正しい知識を広める責任、医師にもあります。',en:"Yes. Spread-correct-knowledge — doctor's duty too.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療への信頼、いかに築かれるか、課題ですね。',en:"Medical trust — how built, issue.",style:'Reflective close.'},
  ]},
  {id:'conv_06554',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews global strategy',lines:[
    {speaker:'hiroshi_boss',jp:'広告、実写を増やす方針、検討中だ。',en:"Ads — live-shoot increase, under review.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。十か国で同時展開、可能です。',en:"Yes. 10-country simultaneous-rollout, possible.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'創業者は、事業に人生を捧げる姿勢を残した。',en:"Founder — life-devoted to business, left example.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。競合の煽り、過剰反応しないよう、対応します。',en:"Yes. Rival provocation — non-overreact, handle.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'短期の市場に引っ張られないよう、長期視点を持て。',en:"Don't get pulled by short-market — long-view.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。報道を鵜呑みにせず、独自分析、続けます。',en:"Yes. Don't gulp-news, indep-analysis continue.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'ブランドを広める努力、絶やすな。',en:"Brand-spread effort — don't dwindle.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新市場でのブランド、地道に築かれていきます。',en:"Yes. New-market brand — steadily built.",style:'Close.'},
  ]},
  {id:'conv_06555',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher discusses environmental studies',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、自然ドキュメンタリーの実写、調査資料に良いですね。',en:"Sakura — nature doc live-shoot, research-mat good.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。二十か国の環境問題、紹介されていました。',en:"Yes. 20-country env issues introduced.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'環境保護に人生を捧げる科学者、印象的ですね。',en:"Devoting life to conservation — striking.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。一部メディアの煽り、誤解を生んでいます。',en:"Yes. Some media provocation — misunderstanding.",style:'Reflective.'},
    {speaker:'asuka_teacher',jp:'流行に引っ張られない研究姿勢、見習いたいですね。',en:"Trend-unswayed research stance — admirable.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。研究を鵜呑みにせず、再現実験、大事ですね。',en:"Yes. Don't gulp-research, reproduce-experiment vital.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'環境意識を広める活動、若者の役割ですね。',en:"Env-conscience-spread activity — youth's role.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。新たな研究分野が築かれる時代、感じます。',en:"Yes. New research-field being built — feel.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06556',cluster:'D',ambient:'street_quiet_distant',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends head to the airport',lines:[
    {speaker:'mei_romantic',jp:'明日、成田空港、五時に集合ね。',en:"Tomorrow — Narita 5am gather.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。旅のブログ、読み手を意識して書いてるよ。',en:"Yeah. Travel blog — reader-conscious-written.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'空港の手荷物、ドラム缶みたいに大きな荷物、見かけたよ。',en:"Airport baggage — drum-sized luggage, seen.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'スーツケース、ローラーの音、けっこう響くよね。',en:"Suitcase — roller sound, quite echoes.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'空港の床、つるつるで、ちょっと滑るから気をつけて。',en:"Airport floor — slippery, slightly slides, careful.",style:'Direction.'},
    {speaker:'aoi_barista',jp:'問題は、待ち時間でしか解けるなと感じてる。',en:"Issue — only wait-time can solve, feel.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'機内で、皆で歌えると、いいね、こっそり。',en:"In-flight — singing-able together, nice, secretly.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'窓から景色、見入ってしまう時間、楽しみ。',en:"Window view — getting absorbed time, looking forward.",style:'Warm close.'},
  ]},
  {id:'conv_06557',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat about a trip',lines:[
    {speaker:'sho_child',jp:'ママ、成田空港、初めてだよね、ぼく。',en:"Mom — Narita, first time, me.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'うん。絵本の読み手、上手ね、翔くん。',en:"Yes. Picture-book reader — well-done, Sho.",style:'Soft.'},
    {speaker:'sho_child',jp:'公園のドラム缶、夏は熱かった!',en:"Park drum — summer hot!",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'ローラースケート、まだ、苦手?',en:"Roller-skates — still not-good?",style:'Probe.'},
    {speaker:'sho_child',jp:'うん。坂で、すぐ滑るから、怖い。',en:"Yes. Slope — quickly slides, scary.",style:'Honest.'},
    {speaker:'yumiko_mom',jp:'宿題、自分で解ける問題、増えたね。',en:"Homework — self-solvable problems, increased.",style:'Praising.'},
    {speaker:'sho_child',jp:'運動会、お友達と一緒に歌えるの、楽しみ!',en:"Sports day — friend-together singable, fun!",style:'Cheerful.'},
    {speaker:'yumiko_mom',jp:'絵本、最後まで見入ってたね、可愛かった。',en:"Picture-book — to-end absorbed, cute.",style:'Warm close.'},
  ]},
  {id:'conv_06558',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan a trip',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、成田空港、深夜便、安いんやで。',en:"Aoi — Narita night-flight, cheap.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。旅雑誌の読み手、増やす狙いで、寄稿します。',en:"Yes. Travel-zine reader-increase aim — contribute.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'屋台のドラム缶、テーブル代わりに使うんや、現地で。',en:"Stall drum — table-replacement, locally.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'空港の床、スーツケースのローラー、音、響きますね。',en:"Airport floor — suitcase rollers, sound echoes.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'冬の道、滑る所、気つけて行こか。',en:"Winter road — slip-spots, careful go.",style:'Warm direction.'},
    {speaker:'aoi_barista',jp:'文化の違い、徐々に解ける旅、楽しみです。',en:"Cultural diff — gradually solved trip, looking forward.",style:'Reflective.'},
    {speaker:'daichi_kansai',jp:'現地で、屋台で、歌える勇気、持って行こか。',en:"On-site stall — singable courage, take.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'夜景、見入ってしまう瞬間、写真撮りたいです。',en:"Nightscape — absorbed-moment, want photo.",style:'Warm close.'},
  ]},
  {id:'conv_06559',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat about a trip',lines:[
    {speaker:'sakura_teen',jp:'リク、修学旅行、成田空港、集合場所だよね。',en:"Riku — school trip, Narita meeting-spot.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。先生の説明、読み手として、わかりやすかった、しおり。',en:"Yeah. Teacher's explainer — as reader, clear, guide.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'空港、ドラム缶並みのスーツケース、たくさん見たね。',en:"Airport — drum-sized suitcases, many seen.",style:'Animated.'},
    {speaker:'riku_teen',jp:'うん。空港の床、ローラーで滑らせて遊ぶの、楽しい。',en:"Yeah. Floor-rollers, slide-play, fun.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'歩道、雨で滑るから、注意して、リク。',en:"Sidewalk — rain-slips, careful, Riku.",style:'Direction.'},
    {speaker:'riku_teen',jp:'うん。心の悩みも、旅で解けるといいな。',en:"Yeah. Heart-worry — trip-solvable, hopeful.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'夜のホテル、こっそり歌える時間、楽しみ。',en:"Hotel night — secretly singable time, fun.",style:'Cheerful.'},
    {speaker:'riku_teen',jp:'富士山、窓から見入ってしまうな、絶対。',en:"Mt. Fuji — window-absorbed, definitely.",style:'Animated close.'},
  ]},
  {id:'conv_06560',cluster:'D',ambient:'park_distant_birds',cast:['hiroshi_elder','sho_child'],targets:D_T,scenario:'A grandpa and grandkid spend a day',lines:[
    {speaker:'sho_child',jp:'おじいちゃん、成田空港、行ったこと、ある?',en:"Grandpa — Narita, been?",style:'Curious child.'},
    {speaker:'hiroshi_elder',jp:'うん。物語の読み手、子供の頃から、好きだったよ。',en:"Yes. Story-reader — since child, liked.",style:'Wistful.'},
    {speaker:'sho_child',jp:'昔の遊び場、ドラム缶、置いてあったね、写真で。',en:"Old playground — drum, placed, in photo.",style:'Animated.'},
    {speaker:'hiroshi_elder',jp:'お父さんも、ローラースケート、得意だったな、若い頃。',en:"Dad too — roller-skates, good-at, young.",style:'Reflective.'},
    {speaker:'sho_child',jp:'冬の坂、滑るから、おじいちゃん、気をつけてね。',en:"Winter slope — slips, careful, Grandpa.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'うん。難しい問題も、ゆっくり解ける子だったよ、お父さん。',en:"Yes. Hard problems — slowly solvable, Dad was.",style:'Wistful.'},
    {speaker:'sho_child',jp:'お祖父ちゃん、昔の歌、一緒に歌える?',en:"Grandpa — old song, singable together?",style:'Eager.'},
    {speaker:'hiroshi_elder',jp:'庭の桜、毎年、見入ってしまうんだよ、私は。',en:"Garden cherry — yearly absorbed, me.",style:'Warm close.'},
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

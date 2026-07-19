import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_280 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['そしたら','おまけに','ことし','おっしゃい','モテ','たいした','何かと','鮮やか']
const B_T = ['上級','入試','リサーチ','ミッション','やり取り','持参','拡充','リストラ']
const C_T = ['脱出','救う','弱者','敗戦','火山','半導体','探検','戦力']
const D_T = ['紅茶','パスタ','蕎麦','洋服','スカート','ハッピー','ドーム','切手']

const data = [
  {id:'conv_05561',cluster:'A',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:A_T,scenario:'Two cafe friends recap a lucky day',lines:[
    {speaker:'mei_romantic',jp:'ことし、おまけにラッキーなこと続きで、何かと忙しいの。',en:"This year I've had luck after luck, busy in many ways.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'いいね。たいしたことじゃなくても、嬉しい出来事は積み重ねたいよね。',en:"Nice. Even small things — happy moments stack.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'昨日、職場の人が「鮮やかなネイル!」っておっしゃいになって、嬉しかった。',en:"Yesterday a coworker said 'vivid nails!' I was happy.",style:'Soft excited.'},
    {speaker:'aoi_barista',jp:'おお、モテそうな雰囲気出てるんだろうな。',en:"Wow, sounds like you're putting out an attractive vibe.",style:'Tease.'},
    {speaker:'mei_romantic',jp:'そしたら、別の方からもお花いただいて、もう嬉しすぎ。',en:"Then someone else gave me flowers — I was thrilled.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'素敵な一日だったね。',en:"A wonderful day.",style:'Warm close.'},
  ]},
  {id:'conv_05562',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens compare classmates\' impressions',lines:[
    {speaker:'sakura_teen',jp:'ことしの新入生、何かと話題になってるよね。',en:"This year's first-years are buzzing in many ways.",style:'Animated teen.'},
    {speaker:'riku_teen',jp:'モテそうな子、多いって聞いた。',en:"I heard many would be popular.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'たいしたことないけど、ヒナさんの鮮やかな髪色、注目されてる。',en:"Not a big deal, but Hina's vivid hair color stands out.",style:'Knowing.'},
    {speaker:'riku_teen',jp:'おまけに、先生まで「綺麗な髪ね」っておっしゃい出してたぞ。',en:"On top of that, even the teacher said 'pretty hair.'",style:'Amused.'},
    {speaker:'sakura_teen',jp:'そしたら、ハル先輩が彼女に絡みに行ってさ、爆笑だったよ。',en:"Then Senpai Haru went to chat her up, total laugh.",style:'Cheerful.'},
    {speaker:'riku_teen',jp:'お騒がせだな、相変わらず。',en:"What a stirrer, as always.",style:'Warm close.'},
  ]},
  {id:'conv_05563',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom hears her young son recap school',lines:[
    {speaker:'sho_child',jp:'ママ、ことし、僕、たいした失敗もなく、いい感じ!',en:"Mom, this year I haven't had any big mistakes, feeling good!",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'立派ね。何かとお手伝いもしてくれて、ママ嬉しいよ。',en:"Splendid. You help me in many ways too — Mom is glad.",style:'Warm.'},
    {speaker:'sho_child',jp:'ケンくん、ナナちゃんに「鮮やかな絵だね」っておっしゃい出してた。',en:"Ken said 'vivid drawing' to Nana.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'ふふ、彼、誰にでもモテそうな空気あるわね。',en:"Hehe, he gives off the popular vibe.",style:'Knowing.'},
    {speaker:'sho_child',jp:'そしたらね、ナナちゃんもニコッて笑ってた!',en:"Then Nana smiled brightly!",style:'Excited.'},
    {speaker:'yumiko_mom',jp:'おまけに、お友達のつながり、もっと深まるね。',en:"On top of that, friendships deepen.",style:'Tender close.'},
  ]},
  {id:'conv_05564',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple recaps a wedding they attended',lines:[
    {speaker:'hiroshi_elder',jp:'ことしも、孫の結婚式があってな。',en:"This year too, the grandkid's wedding happened.",style:'Reflective elder.'},
    {speaker:'sachiko_grandma',jp:'鮮やかな新郎新婦の衣装、お似合いだったわね。',en:"The vivid bride-and-groom attire suited them.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'親戚一同、何かと忙しかったが、たいした騒ぎもなく終わった。',en:"Relatives were busy in many ways, but it ended without much fuss.",style:'Soft.'},
    {speaker:'sachiko_grandma',jp:'モテていた頃のあなた、今でも面影あるわよ。',en:"You from your popular days — still see traces today.",style:'Affectionate.'},
    {speaker:'hiroshi_elder',jp:'おっしゃい過ぎだ、ふふ。',en:"You overstate it, hehe.",style:'Soft chuckle.'},
    {speaker:'sachiko_grandma',jp:'そしたら、また来年も二人で結婚式に行きましょう。おまけに記念写真も。',en:"Then let's attend a wedding again next year — plus memory photos.",style:'Warm close.'},
  ]},
  {id:'conv_05565',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A uni student gives a teen friend perspective on a small worry',lines:[
    {speaker:'sakura_teen',jp:'先輩、ことし、何かと不安になることが多くて。',en:"Senpai, this year I'm anxious in many ways.",style:'Quiet teen.'},
    {speaker:'ren_uni',jp:'たいしたことじゃない、ってよく言うけど、本人にはたいしたことだよな。',en:"'Not a big deal,' people say, but for the person it is.",style:'Empathetic.'},
    {speaker:'sakura_teen',jp:'先生にもおっしゃい返さなきゃいけない場面、苦手で…。',en:"Situations where I have to talk back to the teacher are tough.",style:'Soft.'},
    {speaker:'ren_uni',jp:'モテる人ほど、本当はシャイってこと多い。鮮やかなだけが正解じゃない。',en:"The popular often are secretly shy. Vivid isn't the only right answer.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'そしたら、地味でも自分らしくいていいんですね。',en:"Then it's okay to be plain but myself.",style:'Brightening.'},
    {speaker:'ren_uni',jp:'うん。おまけに、サクラには応援団がたくさんいる。',en:"Yes. Plus, Sakura has lots of supporters.",style:'Warm close.'},
  ]},

  {id:'conv_05566',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews a research mission plan',lines:[
    {speaker:'hiroshi_boss',jp:'今期のミッション、上級ターゲット層へのリサーチが要だな。',en:"This term's mission — research targeting upper-tier customers is essential.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。入試シーズン後の親世代も、対象拡充の候補です。',en:"Yes. Parents post-entrance-exam season are candidates for expansion.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'関係部署とのやり取り、円滑にしてくれ。',en:"Smooth dealings with related sections.",style:'Direction.'},
    {speaker:'kenji_office',jp:'承知しました。前回提案書の持参版、明日お見せします。',en:"Understood. The hand-carried previous proposal — I'll show tomorrow.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'リストラの噂、社内で増えてる。早めに方針示そう。',en:"Layoff rumors are spreading internally. Show direction early.",style:'Decisive close.'},
  ]},
  {id:'conv_05567',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers prep an annual research kickoff',lines:[
    {speaker:'yuki_office',jp:'リサーチの上級モジュール、今期から導入したい。',en:"The advanced research module — want it from this term.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。入試マーケットへの応用も含めて、ミッションを定めます。',en:"Yes. Including app to the entrance-exam market — we'll define the mission.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'顧客とのやり取り、形式も拡充しよう。',en:"Customer interactions — broaden formats too.",style:'Strategic.'},
    {speaker:'kenji_office',jp:'提案書、持参形式で訪問先にも回ります。',en:"Proposals — I'll bring them hand-carried on visits.",style:'Update.'},
    {speaker:'yuki_office',jp:'リストラ騒動が落ち着く前に、計画を確定させたい。',en:"Want the plan locked before the layoff fuss calms.",style:'Direction close.'},
  ]},
  {id:'conv_05568',cluster:'B',ambient:'office_quiet_low',cast:['ren_uni','yuki_office'],targets:B_T,scenario:'A uni intern interviews a manager about research operations',lines:[
    {speaker:'ren_uni',jp:'リサーチ部門のミッション、教えていただけますか。',en:"Could you tell me your research dept's mission?",style:'Polite.'},
    {speaker:'yuki_office',jp:'上級顧客層への深掘り、入試家庭への新サービス展開です。',en:"Deep-dive on upper-tier customers; new services for exam-household.",style:'Helpful.'},
    {speaker:'ren_uni',jp:'やり取りの密度、上げていくんですか。',en:"Increasing interaction density?",style:'Probe.'},
    {speaker:'yuki_office',jp:'はい。営業の持参資料も、年々拡充しています。',en:"Yes. Sales hand-carry materials are expanded each year.",style:'Informative.'},
    {speaker:'ren_uni',jp:'リストラの心配、現場では声、上がりますか。',en:"Layoff concerns — voices rise from the field?",style:'Curious.'},
    {speaker:'yuki_office',jp:'近年は、配置転換中心で、丁寧に進めています。',en:"Recently — reassignment-centered, handled carefully.",style:'Close.'},
  ]},
  {id:'conv_05569',cluster:'B',ambient:'cafe_quiet_chatter',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors a younger boss on people management',lines:[
    {speaker:'hiroshi_elder',jp:'上級職を相手にしたリサーチは、君のミッションだ。',en:"Researching upper-tier roles is your mission.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'承知しております。入試世代の親も視野に入れています。',en:"Understood. Exam-generation parents are also in view.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'やり取りは丁寧に。持参資料も、最後まで責任を持て。',en:"Handle interactions carefully. Hand-carry materials — own them through.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。組織の拡充は、人材確保とセットで考えます。',en:"Yes. Org expansion is paired with talent acquisition.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'リストラに頼らない経営、目指してくれ。',en:"Aim for management not reliant on layoffs.",style:'Stern advice.'},
    {speaker:'hiroshi_boss',jp:'胸に刻みます。',en:"Engraved in my heart.",style:'Close.'},
  ]},
  {id:'conv_05570',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:B_T,scenario:'A police officer briefs a uni reporter about department reform',lines:[
    {speaker:'takeda_officer',jp:'最近のリサーチ、上級職員の業務時間も対象にしました。',en:"Recent research also covered upper-rank staff work hours.",style:'Calm.'},
    {speaker:'ren_uni',jp:'入試の警備計画にも反映されるんですか。',en:"Reflected in entrance-exam security plans too?",style:'Polite.'},
    {speaker:'takeda_officer',jp:'はい。組織拡充の議論、ミッション再定義として進めています。',en:"Yes. Org-expansion debate proceeds as mission re-definition.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'住民とのやり取り、持参資料、改善されてますか。',en:"Resident interactions and hand-carry materials — improving?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。リストラの噂は否定しています。',en:"Yes. Layoff rumors are denied.",style:'Procedural close.'},
  ]},

  {id:'conv_05571',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher walks a uni student through a disaster-history paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、火山噴火からの脱出と地域救助を扱うんですね。',en:"Your paper covers escape from volcanic eruption and local rescue.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。災害弱者を救う仕組み、敗戦後の整備史も書きます。',en:"Yes. The system to rescue disaster-vulnerable, and post-defeat development history.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'半導体産業の戦力分散、地震対策とも関係深いですね。',en:"Semiconductor industry's force dispersion ties closely to quake response.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'山岳地帯の探検記録、補足資料に入れます。',en:"Mountain exploration records — included in supplements.",style:'Plan.'},
    {speaker:'asuka_teacher',jp:'引用は丁寧に。',en:"Cite carefully.",style:'Suggestion.'},
    {speaker:'ren_uni',jp:'承知しました。',en:"Understood.",style:'Close.'},
  ]},
  {id:'conv_05572',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss and his manager discuss a supply-chain article',lines:[
    {speaker:'hiroshi_boss',jp:'この記事、半導体不足から脱出する各国の戦力を比較してるな。',en:"This piece compares national efforts to escape semiconductor shortage.",style:'Boss.'},
    {speaker:'kenji_office',jp:'はい。火山地帯の鉱物資源、新たな焦点に。',en:"Yes. Mineral resources in volcanic zones are new focal points.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'敗戦の歴史を持つ国は、救う側になることもある。',en:"Nations with post-defeat history sometimes become rescuers.",style:'Analytical.'},
    {speaker:'kenji_office',jp:'弱者救済を国際協調で進める動き、興味深いです。',en:"Cross-border efforts to aid the vulnerable are interesting.",style:'Insightful.'},
    {speaker:'hiroshi_boss',jp:'未知の地域への探検記事、来月の特集に組み込もう。',en:"Articles exploring unknown regions — include in next month's feature.",style:'Decisive.'},
    {speaker:'kenji_office',jp:'承知しました。',en:"Understood.",style:'Brief close.'},
  ]},
  {id:'conv_05573',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a uni reporter about disaster response',lines:[
    {speaker:'takeda_officer',jp:'火山近隣の住民避難、脱出経路を毎年更新しています。',en:"Volcano-adjacent residents — escape routes updated yearly.",style:'Calm.'},
    {speaker:'ren_uni',jp:'弱者を救う体制、地域防災で重視されてますね。',en:"Systems to rescue the vulnerable are emphasized in local defense.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。半導体工場の従業員も、対象に含まれます。',en:"Yes. Semiconductor-plant employees are included.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'敗戦時の教訓、引き継がれているんですか。',en:"Lessons from defeat are being carried over?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。戦力分散の考え方、現在の防災計画にも影響しています。',en:"Yes. The dispersed-force mindset influences current defense plans.",style:'Informative.'},
    {speaker:'ren_uni',jp:'山岳探検チームも、災害時に活躍されますか。',en:"Do mountain-exploration teams also operate in disasters?",style:'Engaged.'},
    {speaker:'takeda_officer',jp:'はい。',en:"Yes.",style:'Close.'},
  ]},
  {id:'conv_05574',cluster:'C',ambient:'living_room_quiet',cast:['hiroshi_elder','ren_uni'],targets:C_T,scenario:'A uni student interviews a retired explorer',lines:[
    {speaker:'ren_uni',jp:'長年、火山地域の探検を続けてこられたんですよね。',en:"You've long explored volcanic regions.",style:'Polite.'},
    {speaker:'hiroshi_elder',jp:'うん。脱出経路の確認、地元住民を救うためでもあった。',en:"Yes. Route checks were also to save locals.",style:'Veteran.'},
    {speaker:'ren_uni',jp:'弱者の方々への配慮、戦時中の経験も影響していますか。',en:"Considering the vulnerable — does wartime experience influence?",style:'Probe.'},
    {speaker:'hiroshi_elder',jp:'うん。敗戦の混乱を見たから、今は丁寧に動きたい。',en:"Yes. Having seen post-defeat chaos, I want to move carefully now.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'最近の半導体産業の動向、災害対策にも関わっているんですか。',en:"Recent semiconductor trends tie to disaster prep too?",style:'Curious.'},
    {speaker:'hiroshi_elder',jp:'うん。戦力配置の発想、産業界にも生きている。',en:"Yes. Force-deployment thinking lives in industry too.",style:'Wise close.'},
  ]},
  {id:'conv_05575',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','sakura_teen'],targets:C_T,scenario:'A doctor explains emergency medicine to a teen',lines:[
    {speaker:'saito_doctor',jp:'桜さん、火山近隣の救急医療、災害弱者支援が要なんですよ。',en:"Sakura, in volcanic-area emergency care, supporting the vulnerable is key.",style:'Friendly.'},
    {speaker:'sakura_teen',jp:'噴火時の脱出、医療チームが救うのは具体的にどう?',en:"During eruption escapes, how exactly do medical teams rescue?",style:'Curious teen.'},
    {speaker:'saito_doctor',jp:'戦力分散して、地区ごとに担当を決めます。',en:"Forces are dispersed; each district has its handler.",style:'Patient.'},
    {speaker:'sakura_teen',jp:'敗戦時の医療体制と似てるんですか。',en:"Similar to post-defeat medical systems?",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。歴史から学んだ知恵が、現代に活きています。',en:"Yes. Wisdom from history lives in the present.",style:'Informative.'},
    {speaker:'sakura_teen',jp:'半導体センサーが、被災者の状態を把握する未知の探検みたいですね。',en:"Semiconductor sensors gauging survivors' state — like exploring the unknown.",style:'Engaged.'},
    {speaker:'saito_doctor',jp:'いい例えです。',en:"Nice analogy.",style:'Close.'},
  ]},

  {id:'conv_05576',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens plan a tea-and-pasta cafe weekend',lines:[
    {speaker:'sakura_teen',jp:'週末、紅茶専門店でパスタランチ食べに行かない?',en:"Weekend — pasta lunch at the tea specialty shop?",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'いいね。蕎麦アレルギーの友達も誘っていい?',en:"Sure. Can I invite the soba-allergic friend?",style:'Casual.'},
    {speaker:'sakura_teen',jp:'もちろん。新しい洋服とスカート、着てくつもり。',en:"Of course. I'll wear my new outfit and skirt.",style:'Bright.'},
    {speaker:'riku_teen',jp:'ハッピーな気分で行こうな。',en:"Let's go in a happy mood.",style:'Cheerful.'},
    {speaker:'sakura_teen',jp:'帰りに東京ドームでイベントあるって。',en:"On the way back, an event at Tokyo Dome apparently.",style:'Animated.'},
    {speaker:'riku_teen',jp:'切手好きの祖母にお土産買おう。',en:"Buy a souvenir for my stamp-loving grandma.",style:'Warm close.'},
  ]},
  {id:'conv_05577',cluster:'D',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:D_T,scenario:'Two cafe friends plan a Sunday outing',lines:[
    {speaker:'aoi_barista',jp:'日曜、新しい紅茶店で蕎麦アフタヌーンってメニュー試したい。',en:"Sunday, want to try a new tea shop's soba-afternoon menu.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'素敵!洋服、フェミニンなスカート合わせて行こう。',en:"Lovely! Wear feminine skirt outfits.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'お腹が空いたら、パスタもいいわね。',en:"If hungry, pasta is good too.",style:'Plan.'},
    {speaker:'mei_romantic',jp:'ハッピーな気分で過ごせそう。',en:"Sounds like a happy time.",style:'Warm.'},
    {speaker:'aoi_barista',jp:'夕方はドーム型のミニミュージアム、行く?',en:"Evening — go to the dome-shape mini museum?",style:'Idea.'},
    {speaker:'mei_romantic',jp:'いいね、レトロな切手の展示もあるって。',en:"Nice — also a retro-stamp exhibit, I hear.",style:'Cheerful close.'},
  ]},
  {id:'conv_05578',cluster:'D',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:D_T,scenario:'A uni student helps a teen friend pick an outfit for an outing',lines:[
    {speaker:'sakura_teen',jp:'先輩、今度の食事会、紅茶系のレストランで、洋服迷ってます。',en:"Senpai, the upcoming dinner at a tea-style restaurant — torn on outfit.",style:'Eager.'},
    {speaker:'ren_uni',jp:'スカートに薄手のセーター合わせると、清楚で大人っぽくなる。',en:"Skirt with a thin sweater gives a clean, mature vibe.",style:'Helpful.'},
    {speaker:'sakura_teen',jp:'パスタか蕎麦か、まだ決められません。',en:"Pasta or soba — still can't decide.",style:'Confused.'},
    {speaker:'ren_uni',jp:'好きな方で。ハッピーに食べるのが一番。',en:"Pick what you love. Eating happily wins.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'場所は、ドーム型の屋根の店です。',en:"The venue has a dome-shaped roof.",style:'Detail.'},
    {speaker:'ren_uni',jp:'お礼の手紙、切手付きで送れたら丁寧だぞ。',en:"A thank-you letter with a stamp is a polite touch.",style:'Tip close.'},
  ]},
  {id:'conv_05579',cluster:'D',ambient:'living_room_quiet',cast:['ryosuke_dad','yumiko_mom'],targets:D_T,scenario:'A married couple plans a family outing',lines:[
    {speaker:'yumiko_mom',jp:'土曜、家族で紅茶とパスタの店行こうよ。',en:"Saturday, family trip to the tea-and-pasta shop.",style:'Warm.'},
    {speaker:'ryosuke_dad',jp:'いいね。蕎麦も置いてある?',en:"Sure. Do they have soba too?",style:'Easy.'},
    {speaker:'yumiko_mom',jp:'うん。子供たちの洋服、新しいスカート用意したの。',en:"Yes. I prepped new skirts for the kids.",style:'Cheerful.'},
    {speaker:'ryosuke_dad',jp:'ハッピーな一日にしよう。',en:"Let's make it a happy day.",style:'Plan.'},
    {speaker:'yumiko_mom',jp:'帰り、ドームでスポーツイベント観戦してから帰る?',en:"On the way back, watch a sports event at the dome?",style:'Suggestion.'},
    {speaker:'ryosuke_dad',jp:'切手収集のお父さん、誘うか。',en:"Invite stamp-collector dad too?",style:'Warm close.'},
  ]},
  {id:'conv_05580',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A Kansai chef and a barista discuss menu ideas',lines:[
    {speaker:'daichi_kansai',jp:'アオイさん、紅茶と蕎麦のセット、新メニューで試そかなと思てる。',en:"Aoi-san, thinking of trying a tea-and-soba new-menu set.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'いいですね。パスタ系と組み合わせたら、女性客喜びそう。',en:"Sounds nice. Pairing with pasta might delight female customers.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'うちの店、洋服風のエプロン、スカート風デザインに変えるんやて。',en:"Our shop's switching aprons to skirt-style design.",style:'Plan Kansai.'},
    {speaker:'aoi_barista',jp:'ハッピーな雰囲気、店全体に広がりそう。',en:"Happy vibes will spread through the shop.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'ドーム型のお皿、新調するで。',en:"Getting new dome-shape plates.",style:'Detail Kansai.'},
    {speaker:'aoi_barista',jp:'切手柄のコースターも添えると、味出ますよ。',en:"Stamp-pattern coasters add character.",style:'Warm close.'},
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

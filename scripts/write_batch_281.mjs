import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_281 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['ギャップ','育ち','不信','浮気','大騒ぎ','おいしかっ','おいしく','怒る']
const B_T = ['指針','区分','補正','集約','選考','単価','助手','裁量']
const C_T = ['主流','開拓','起源','利害','出生','嫉妬','増強','莫大']
const D_T = ['フォント','バッテリー','スタンド','アマゾン','ライオン','タンク','カスタマイズ','タマ']

const data = [
  {id:'conv_05581',cluster:'A',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:A_T,scenario:'Two cafe friends gossip about relationships',lines:[
    {speaker:'mei_romantic',jp:'昨日のディナー、彼との会話のギャップに驚いた。',en:"Last night's dinner, the gap in our talk surprised me.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'育ちが違うと、価値観も違うよね。',en:"Different upbringings, different values.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'浮気の噂もあるみたいで、ちょっと不信に陥ってる。',en:"Cheating rumors too — I'm a bit in disbelief.",style:'Worried.'},
    {speaker:'aoi_barista',jp:'怒るより、事実確認が先よ。',en:"Don't get angry first — confirm facts.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'昨日のパスタは、おいしかったから救われた気がする。',en:"Yesterday's pasta was delicious, at least.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'今度、私がおいしく淹れたコーヒーで、大騒ぎせず話し合おう。',en:"Next time, with my well-brewed coffee, talk it out without drama.",style:'Warm close.'},
  ]},
  {id:'conv_05582',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens compare classmates',lines:[
    {speaker:'sakura_teen',jp:'クラスの新人、見た目と話し方のギャップ、すごいよね。',en:"The new classmate — huge gap between looks and how they talk.",style:'Animated teen.'},
    {speaker:'riku_teen',jp:'お嬢様育ちらしいよ、噂では。',en:"Apparently raised in a refined household, per rumor.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'昨日、不信感持たれて、ちょっと大騒ぎになってた。',en:"Yesterday, distrust grew and it became a bit of a fuss.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'浮気を疑われた男子もいたんだろ?みんな怒るし。',en:"Some boy was even suspected of cheating, right? People get mad.",style:'Knowing.'},
    {speaker:'sakura_teen',jp:'お弁当が、めちゃくちゃおいしかった。気分転換にはなった。',en:"My bento was super tasty — at least a mood lift.",style:'Bright.'},
    {speaker:'riku_teen',jp:'明日もおいしく食べて、頑張ろう。',en:"Tomorrow too, eat well and push through.",style:'Warm close.'},
  ]},
  {id:'conv_05583',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom helps her young son interpret a school event',lines:[
    {speaker:'sho_child',jp:'ママ、今日クラスで、大騒ぎあったよ。',en:"Mom, there was a big fuss in class today.",style:'Anxious child.'},
    {speaker:'yumiko_mom',jp:'あらら、誰かが怒る場面でも?',en:"Oh dear, was someone angry?",style:'Gentle.'},
    {speaker:'sho_child',jp:'ううん、ナナちゃんの好きな子、浮気疑惑がかかってて、不信なんだって。',en:"No, Nana's crush got accused of cheating, she's in disbelief.",style:'Reporting.'},
    {speaker:'yumiko_mom',jp:'子供同士の浮気騒ぎ、可愛いギャップね。',en:"Kid cheating drama — a cute gap.",style:'Soft.'},
    {speaker:'sho_child',jp:'給食、ハンバーグ、めちゃおいしかった!',en:"School lunch — the burger was super tasty!",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'夜ご飯もおいしく作るから、楽しみにしててね。育ち盛りだもんね。',en:"Dinner will be tasty too — looking forward, growing boy!",style:'Tender close.'},
  ]},
  {id:'conv_05584',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple discusses old friendships',lines:[
    {speaker:'hiroshi_elder',jp:'昔の同窓会、参加するか迷っていてな。世代のギャップが大きすぎて。',en:"I'm wavering on the reunion. The generational gap feels too wide.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'良い子たちよ。育ちは違うけど、心は通じ合えるはず。',en:"They're good kids. Different upbringings, but hearts connect.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'年取ると、人への不信が募るのかな。',en:"As we age, do we accumulate distrust toward people?",style:'Soft.'},
    {speaker:'sachiko_grandma',jp:'若い頃は、お互いの浮気疑惑で大騒ぎだったわね。',en:"In youth, we had fusses over each other's cheating suspicions.",style:'Wry warm.'},
    {speaker:'hiroshi_elder',jp:'今思えば、何もないのに怒る事ばかりだった。',en:"Looking back, getting angry over nothing was the norm.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'今夜のお魚、おいしかった?明日もおいしく仕上げるから。',en:"Tonight's fish — was it good? I'll cook well tomorrow too.",style:'Tender close.'},
  ]},
  {id:'conv_05585',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A uni student helps a teen friend process a friendship issue',lines:[
    {speaker:'sakura_teen',jp:'先輩、最近、友達との心のギャップを感じていて。',en:"Senpai, lately I feel a heart-gap with a friend.",style:'Quiet teen.'},
    {speaker:'ren_uni',jp:'お互い、育ち方が違うから、当然のことだよ。',en:"You grew up differently — only natural.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'共通の知人が浮気して、グループ全体が大騒ぎになって、不信も増えて…。',en:"A common acquaintance cheated, the group erupted, distrust grew.",style:'Vulnerable.'},
    {speaker:'ren_uni',jp:'怒る前に、自分のペースを取り戻そう。',en:"Before getting angry, regain your pace.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'カフェで、ゆっくり甘いものをおいしく食べる時間、いいですね。',en:"Cafe time, slowly enjoying sweets is lovely.",style:'Soft.'},
    {speaker:'ren_uni',jp:'うん。先週のチョコ、おいしかったって言ってたよな。今日も食べるか?',en:"Yes. You said last week's chocolate was delicious. Have some today too?",style:'Warm close.'},
  ]},

  {id:'conv_05586',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews a project shortlist',lines:[
    {speaker:'hiroshi_boss',jp:'今期の指針、集約の方向で確定したか?',en:"This term's guidance — set on consolidation?",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。区分ごとの選考、補正を加えました。',en:"Yes. Per-category screening with adjustments added.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'単価交渉、助手にも任せていいか?',en:"Unit-price negotiation — okay to delegate to the assistant?",style:'Probe.'},
    {speaker:'kenji_office',jp:'裁量権を限定的に持たせます。',en:"With limited discretion granted.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'頼む。',en:"Please.",style:'Close.'},
  ]},
  {id:'conv_05587',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers prep procurement criteria',lines:[
    {speaker:'yuki_office',jp:'仕入指針、集約と分散、両方の選択肢、用意して。',en:"Procurement guidance — prep both consolidation and dispersion options.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。区分ごとに単価補正を入れています。',en:"Yes. Per-category unit-price corrections applied.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'選考の最終判断、裁量で進めてOK。',en:"Final selection — proceed at your discretion, OK.",style:'Direction.'},
    {speaker:'kenji_office',jp:'助手と一緒に、本日中にまとめます。',en:"I'll compile with my assistant today.",style:'Commitment.'},
    {speaker:'yuki_office',jp:'よろしく。',en:"Thanks.",style:'Close.'},
  ]},
  {id:'conv_05588',cluster:'B',ambient:'office_quiet_low',cast:['ren_uni','yuki_office'],targets:B_T,scenario:'A uni intern interviews a manager about category management',lines:[
    {speaker:'ren_uni',jp:'貴社の指針、区分別の管理が中心ですか。',en:"Is your guidance centered on per-category management?",style:'Polite intern.'},
    {speaker:'yuki_office',jp:'はい。単価補正と選考プロセスを集約しています。',en:"Yes. Unit-price corrections and selection processes are consolidated.",style:'Helpful.'},
    {speaker:'ren_uni',jp:'助手の裁量、どこまで認められてるんですか。',en:"Discretion for assistants — how far is it allowed?",style:'Probe.'},
    {speaker:'yuki_office',jp:'部署ごとに違います。基準は明示しています。',en:"Depends on the section. The criteria are clearly stated.",style:'Informative.'},
    {speaker:'ren_uni',jp:'ありがとうございます。',en:"Thank you.",style:'Close.'},
  ]},
  {id:'conv_05589',cluster:'B',ambient:'cafe_quiet_chatter',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors a younger boss on operations',lines:[
    {speaker:'hiroshi_elder',jp:'方針は指針として書き、裁量権を明確に区分しろ。',en:"State policy as guidance; clearly divide discretion.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'承知しております。単価補正、現場主導で進めています。',en:"Understood. Unit-price correction is field-led.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'選考過程の集約、若手育成にもなる。',en:"Consolidating selection also trains the young.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'助手にも、適切に経験を積ませます。',en:"Assistants too will gain appropriate experience.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'よし、続けろ。',en:"Good — keep at it.",style:'Wise close.'},
  ]},
  {id:'conv_05590',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:B_T,scenario:'A police officer briefs a uni reporter about reform',lines:[
    {speaker:'takeda_officer',jp:'本年度の指針、選考プロセスを集約しました。',en:"This year's guidance — selection process consolidated.",style:'Calm.'},
    {speaker:'ren_uni',jp:'区分別の単価補正も、行われているんですか。',en:"Are per-category unit-price corrections done?",style:'Polite probe.'},
    {speaker:'takeda_officer',jp:'はい。担当者の裁量で柔軟に運用しています。',en:"Yes. Operated flexibly by handlers' discretion.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'助手職の方の育成方針も、変わってきましたか。',en:"Has assistant-position training shifted?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい、改善中です。',en:"Yes, improving.",style:'Close.'},
  ]},

  {id:'conv_05591',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher walks a uni student through a history-of-tech paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、主流技術の起源と開拓者の話を扱うんですね。',en:"Your paper covers mainstream-tech origins and pioneers.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。利害関係者の嫉妬、出生地への影響まで含めます。',en:"Yes. Stakeholder jealousy and birth-region impact included.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'軍事増強と莫大な研究費の関係、丁寧に書いて。',en:"Tie military buildup to the huge research budgets carefully.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'補足資料も整えます。',en:"I'll prep supplements too.",style:'Plan.'},
    {speaker:'asuka_teacher',jp:'引用は丁寧に。',en:"Cite carefully.",style:'Suggestion.'},
    {speaker:'ren_uni',jp:'承知しました。',en:"Understood.",style:'Close.'},
  ]},
  {id:'conv_05592',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss and his manager discuss an industry article',lines:[
    {speaker:'hiroshi_boss',jp:'この記事、主流市場の起源を辿る話、面白い。',en:"This piece tracing mainstream-market origins is interesting.",style:'Boss.'},
    {speaker:'kenji_office',jp:'はい。新市場の開拓、莫大な投資が必要との分析です。',en:"Yes. New-market exploration needs huge investment per the analysis.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'利害調整、業界内で嫉妬が芽生えるのは避けたい。',en:"Stakeholder coordination — avoid sparking jealousy in industry.",style:'Analytical.'},
    {speaker:'kenji_office',jp:'出生率の低下も、需要見通しに影響します。',en:"Falling birth rates affect demand projections too.",style:'Insightful.'},
    {speaker:'hiroshi_boss',jp:'設備増強、来年度の議題に。',en:"Capacity buildup — on next-year's agenda.",style:'Decisive.'},
    {speaker:'kenji_office',jp:'承知しました。',en:"Understood.",style:'Brief close.'},
  ]},
  {id:'conv_05593',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a uni reporter about urban issues',lines:[
    {speaker:'takeda_officer',jp:'最近の事案、複数の利害関係者が絡んでいます。',en:"Recent cases involve multiple stakeholders.",style:'Calm.'},
    {speaker:'ren_uni',jp:'主流派と新興勢力、嫉妬の対立があるんですか。',en:"Between mainstream and newcomers, are there jealousy clashes?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。新市場開拓の動きが、火種になっています。',en:"Yes. The push to open new markets is sparking it.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'背景に莫大な利益、地域出生率の低下もあるんですよね。',en:"Behind it lie huge profits and regional birthrate decline, right?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。警備増強も計画しています。',en:"Yes. Security buildup is planned.",style:'Informative.'},
    {speaker:'ren_uni',jp:'ありがとうございます。',en:"Thank you.",style:'Close.'},
  ]},
  {id:'conv_05594',cluster:'C',ambient:'living_room_quiet',cast:['hiroshi_elder','ren_uni'],targets:C_T,scenario:'A uni student interviews a retired industry pioneer',lines:[
    {speaker:'ren_uni',jp:'先生は、業界の起源を切り開いた一人なんですよね。',en:"You're one of the founders of the industry, right?",style:'Polite.'},
    {speaker:'hiroshi_elder',jp:'うん。主流に挑むのは、嫉妬との戦いでもあった。',en:"Yes. Challenging the mainstream was also a fight with jealousy.",style:'Veteran.'},
    {speaker:'ren_uni',jp:'新市場の開拓、莫大な犠牲もあったと聞きます。',en:"Pioneering new markets involved huge sacrifices, I hear.",style:'Probe.'},
    {speaker:'hiroshi_elder',jp:'うん。出生地への愛着も、原動力だった。',en:"Yes. Love of birthplace was a driver too.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'利害がぶつかる場面、どう乗り越えました?',en:"In stakeholder clashes, how did you get through?",style:'Curious.'},
    {speaker:'hiroshi_elder',jp:'信頼関係の増強、地道に続けることだ。',en:"Steadily building trust.",style:'Wise close.'},
  ]},
  {id:'conv_05595',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','sakura_teen'],targets:C_T,scenario:'A doctor explains health policy to a teen',lines:[
    {speaker:'saito_doctor',jp:'桜さん、出生率と健康政策、深く関わっているんですよ。',en:"Sakura, birthrate and health policy are deeply tied.",style:'Friendly.'},
    {speaker:'sakura_teen',jp:'主流の医療制度の起源、教えてもらえますか?',en:"Could you tell me the origin of the mainstream medical system?",style:'Curious teen.'},
    {speaker:'saito_doctor',jp:'戦後の体制増強から始まりました。',en:"It began with post-war system buildup.",style:'Patient.'},
    {speaker:'sakura_teen',jp:'利害関係者の嫉妬とか、なかったんですか。',en:"Were there stakeholder jealousies?",style:'Probe.'},
    {speaker:'saito_doctor',jp:'ありましたよ。莫大な研究費を巡って、争いも。',en:"Yes. Disputes over huge research budgets too.",style:'Informative.'},
    {speaker:'sakura_teen',jp:'新分野の開拓は、今も続いてるんですね。',en:"New-field exploration continues, then.",style:'Engaged.'},
    {speaker:'saito_doctor',jp:'はい。',en:"Yes.",style:'Close.'},
  ]},

  {id:'conv_05596',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens shop for tech and snacks',lines:[
    {speaker:'sakura_teen',jp:'新しいスマホ、フォントいじってカスタマイズしたい!',en:"My new phone — want to customize the fonts!",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'いいね。バッテリーの持ち、どう?',en:"Sure. How's the battery life?",style:'Casual.'},
    {speaker:'sakura_teen',jp:'まあまあ。帰りにスタンドでガソリン入れてから、アマゾンで頼んでた荷物、ピックアップ。',en:"Just OK. On the way, gas at the stand, then pick up an Amazon order.",style:'Plan.'},
    {speaker:'riku_teen',jp:'ライオン柄のケース、まだ売ってるかな。',en:"Is the lion-pattern case still in stock?",style:'Curious.'},
    {speaker:'sakura_teen',jp:'タマ(玉)模様も最近流行ってるよ。',en:"Polka-dot patterns are trending too.",style:'Aside.'},
    {speaker:'riku_teen',jp:'帰り、車のタンクも要チェックな。',en:"On the way back, check the car tank too.",style:'Practical close.'},
  ]},
  {id:'conv_05597',cluster:'D',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:D_T,scenario:'Two cafe friends discuss tech and home setups',lines:[
    {speaker:'aoi_barista',jp:'店の看板、フォントを変えるだけで雰囲気変わるって。',en:"The shop sign — just changing fonts shifts the vibe.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'素敵!カスタマイズしたいわ。',en:"Lovely! I want to customize.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'業務用タブレット、バッテリーが弱くて。',en:"The work tablet's battery is weak.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'近くのスタンドで急速充電できるよ。アマゾンで予備バッテリーも買えるし。',en:"There's a fast charger at a nearby stand. Spare batteries on Amazon.",style:'Helpful.'},
    {speaker:'aoi_barista',jp:'動物園のライオン館、毎月通ってる。タマちゃんって名前の白い動物もいるの。',en:"I visit the zoo's lion house monthly. There's a white animal named Tama too.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'お弁当のタンクボトル、新調しなきゃ。',en:"My lunch tank-bottle — needs replacing.",style:'Warm close.'},
  ]},
  {id:'conv_05598',cluster:'D',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:D_T,scenario:'A uni student helps a teen friend customize a device',lines:[
    {speaker:'sakura_teen',jp:'先輩、スマホのフォント変えたいんですけど、おすすめあります?',en:"Senpai, want to change my phone fonts — recommendations?",style:'Eager.'},
    {speaker:'ren_uni',jp:'アマゾンに有料フォントあるぞ。カスタマイズ自由度高い。',en:"Paid fonts on Amazon. High customization freedom.",style:'Helpful.'},
    {speaker:'sakura_teen',jp:'バッテリー消費、増えないですか?',en:"Will it eat battery?",style:'Probe.'},
    {speaker:'ren_uni',jp:'少しは。スタンドで充電すれば問題ない。',en:"A bit. Charging at a stand handles it.",style:'Practical.'},
    {speaker:'sakura_teen',jp:'壁紙、ライオンか、うちの猫タマの写真にしようか迷ってます。',en:"Wallpaper — torn between lion or my cat Tama's photo.",style:'Animated.'},
    {speaker:'ren_uni',jp:'タンクトップで似合うやつ撮って、それを壁紙にしたら?',en:"Shoot one in a tank top that suits and make it wallpaper?",style:'Warm close.'},
  ]},
  {id:'conv_05599',cluster:'D',ambient:'living_room_quiet',cast:['ryosuke_dad','yumiko_mom'],targets:D_T,scenario:'A married couple plans a tech upgrade',lines:[
    {speaker:'yumiko_mom',jp:'家のプリンター、フォントが古臭くて変えたい。',en:"Our printer's fonts feel dated — want to change them.",style:'Warm.'},
    {speaker:'ryosuke_dad',jp:'アマゾンでカスタマイズパック、買えるよ。',en:"Customization packs are on Amazon.",style:'Easy.'},
    {speaker:'yumiko_mom',jp:'バッテリー駆動のプリンター、最近多いの?',en:"Are battery-powered printers common now?",style:'Curious.'},
    {speaker:'ryosuke_dad',jp:'うん。ガソリンスタンドの隣で配達してた知人が話してたよ。',en:"Yes. An acquaintance who delivers near the gas stand was saying.",style:'Casual.'},
    {speaker:'yumiko_mom',jp:'子供たち、動物園でライオンの前で写真撮ったの覚えてる?',en:"Remember the kids' photo in front of the lion at the zoo?",style:'Tender.'},
    {speaker:'ryosuke_dad',jp:'タマ(熊?)の前のもね。タンクボトルに水入れて、また連れて行こう。',en:"And the one before the panda too. Fill the tank-bottle and take them again.",style:'Warm close.'},
  ]},
  {id:'conv_05600',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A Kansai chef and a barista swap tech tips',lines:[
    {speaker:'daichi_kansai',jp:'アオイさん、店のメニュー、フォント新調したんやて?',en:"Aoi-san, did the shop refresh its menu fonts?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。アマゾンで気に入った書体、見つけました。',en:"Yes. Found a font I love on Amazon.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'うちもタブレットのバッテリー、新調する予定や。',en:"We're also planning to refresh our tablet's battery.",style:'Plan Kansai.'},
    {speaker:'aoi_barista',jp:'近所のスタンドが急速充電器設置したらしいですよ。',en:"The nearby stand reportedly installed a fast charger.",style:'Helpful.'},
    {speaker:'daichi_kansai',jp:'ライオン柄のテーブルクロス、カスタマイズで作るんやて。',en:"Lion-pattern tablecloths, custom-made.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'タマ柄も可愛いですよ。給水タンクの近くに飾る予定。',en:"Tama-pattern is cute too. Plan to display near the water tank.",style:'Warm close.'},
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

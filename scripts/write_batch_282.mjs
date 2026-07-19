import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_282 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['痛感','がんばり','おっさん','まいっ','たまらない','心地よい','思いやり','きみ']
const B_T = ['上回る','補給','含み','順次','終える','レギュラー','当店','常時']
const C_T = ['一斉','黄金','結ん','忠実','直接的','起こさ','包ま','衰退']
const D_T = ['餃子','バッハ','フォーク','試写','制服','中旬','体操','黄金']

// 黄金 was in C. Pick another for D.
D_T[7] = 'カ所'

const data = [
  {id:'conv_05601',cluster:'A',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:A_T,scenario:'Two cafe friends share a heartfelt moment',lines:[
    {speaker:'mei_romantic',jp:'最近、自分のがんばり、痛感する場面が多くて。',en:"Lately I keenly feel my own efforts a lot.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'まいったね。でも、きみは自分にもっと思いやり持っていいよ。',en:"Tough. But you can be kinder to yourself too.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'隣のおっさんが、急に話しかけてくる時もたまらないけどね。',en:"When the old guy next to me suddenly talks, it's unbearable too.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'ふふ、心地よいって思えない時もある。',en:"Hehe, sometimes you can't call it pleasant.",style:'Knowing.'},
    {speaker:'mei_romantic',jp:'うん。でも、今日のラテはまさに心地よい味だった。',en:"Yes. But today's latte was truly pleasant in taste.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'よかった。',en:"Glad to hear.",style:'Warm close.'},
  ]},
  {id:'conv_05602',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat after school',lines:[
    {speaker:'sakura_teen',jp:'部活のがんばり、本当に痛感したよ、今日。',en:"Today I really felt the club effort keenly.",style:'Tired teen.'},
    {speaker:'riku_teen',jp:'まいったよな。声がたまらないほど枯れた。',en:"Brutal. Voice got unbearably hoarse.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'コーチのおっさん、思いやりはあるけど、容赦ないんだよね。',en:"The old coach is caring but merciless.",style:'Animated.'},
    {speaker:'riku_teen',jp:'家のお風呂が心地よい時間で救われる。きみは平気?',en:"Home bath time saves me, the pleasant moment. You okay?",style:'Concerned.'},
    {speaker:'sakura_teen',jp:'うん、なんとか。',en:"Yeah, somehow.",style:'Soft.'},
    {speaker:'riku_teen',jp:'明日も一緒にがんばろう。',en:"Tomorrow let's push together.",style:'Warm close.'},
  ]},
  {id:'conv_05603',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom listens to her young son after a tough day',lines:[
    {speaker:'sho_child',jp:'ママ、今日のがんばり、痛感したよ。',en:"Mom, I really felt my efforts today.",style:'Small voice.'},
    {speaker:'yumiko_mom',jp:'立派ね。きみのお話、いつでも聞いてあげるから。',en:"Splendid. I'll always listen, sweetie.",style:'Warm.'},
    {speaker:'sho_child',jp:'隣のおっさん先生が、急に怒ってたから、たまらない気持ちになった。',en:"The old guy teacher next door suddenly got mad — unbearable.",style:'Worried child.'},
    {speaker:'yumiko_mom',jp:'まいったね。でも、思いやりのある先生もいるから、安心して。',en:"Tough. But there are kind teachers too, so rest easy.",style:'Soothing.'},
    {speaker:'sho_child',jp:'夜のお風呂、心地よい時間だね。',en:"Night bath is a pleasant time.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'うん、ゆっくり浸かろうね。',en:"Yes, let's soak slowly.",style:'Tender close.'},
  ]},
  {id:'conv_05604',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats about days gone by',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃のがんばり、最近痛感するよ。',en:"Lately I really feel my youthful efforts.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'まいっちゃう時もあったわね、いろいろ。',en:"There were tough times too, many.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'同窓会で、昔の同級生のおっさん連中、変わってない。',en:"At reunions, the old-guy crowd hasn't changed.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'きみと過ごす時間、本当に心地よいわ。',en:"Time with you is truly pleasant.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お互いに思いやり持って、年を取れたな。',en:"With mutual care, we've grown old together.",style:'Soft.'},
    {speaker:'sachiko_grandma',jp:'本当に、たまらないほど幸せ。',en:"Truly, unbearably happy.",style:'Warm close.'},
  ]},
  {id:'conv_05605',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A uni student gently checks on a teen friend',lines:[
    {speaker:'sakura_teen',jp:'先輩、最近、自分のがんばり、痛感してます。',en:"Senpai, lately I really feel my own efforts.",style:'Earnest teen.'},
    {speaker:'ren_uni',jp:'まいる時こそ、思いやりを自分に向けてあげな。',en:"When overwhelmed, turn kindness onto yourself.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'バイト先のおっさん客が、急に絡んできて、たまらないんです。',en:"At work, an old-guy customer hassles me, unbearable.",style:'Vulnerable.'},
    {speaker:'ren_uni',jp:'店長に相談しろよ、きみのためにも。',en:"Talk to your manager — for your sake.",style:'Practical.'},
    {speaker:'sakura_teen',jp:'カフェの空気、心地よいから少し落ち着きました。',en:"The cafe air is pleasant; I'm calmer now.",style:'Soft.'},
    {speaker:'ren_uni',jp:'うん、応援してる。',en:"Yes, rooting for you.",style:'Warm close.'},
  ]},

  {id:'conv_05606',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews quarterly results',lines:[
    {speaker:'hiroshi_boss',jp:'今期、目標を上回る成果だな。',en:"This term — results exceeding target.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。在庫補給、順次完了しています。',en:"Yes. Inventory replenishment progressing in order.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'当店ブランドのレギュラー商品、常時欠品させるな。',en:"Our store-brand regulars — never let them go out of stock.",style:'Direction.'},
    {speaker:'kenji_office',jp:'承知しました。新案を含み、年度を終える形で整えます。',en:"Understood. Including new ideas, I'll wrap by year-end.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'頼む。',en:"Please.",style:'Close.'},
  ]},
  {id:'conv_05607',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers prep stock management',lines:[
    {speaker:'yuki_office',jp:'当店の主力商品、レギュラーで売上が予測を上回ってる。',en:"Our flagship — regular sales beating forecast.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。順次補給を入れ、欠品を起こさず終える予定です。',en:"Yes. Replenishing in order, finishing without stock-outs.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'常時の在庫量、見直しも含み、来月議論しよう。',en:"Standing inventory levels — review included, discuss next month.",style:'Strategic.'},
    {speaker:'kenji_office',jp:'資料、明日朝までに。',en:"Materials by tomorrow morning.",style:'Brief.'},
    {speaker:'yuki_office',jp:'よろしく。',en:"Thanks.",style:'Close.'},
  ]},
  {id:'conv_05608',cluster:'B',ambient:'office_quiet_low',cast:['ren_uni','yuki_office'],targets:B_T,scenario:'A uni intern interviews a manager about retail operations',lines:[
    {speaker:'ren_uni',jp:'当店の在庫管理、常時最適化されてるんですか。',en:"Is your store's inventory always optimized?",style:'Polite.'},
    {speaker:'yuki_office',jp:'はい。順次補給で、レギュラー商品の欠品を防いでいます。',en:"Yes. Order-based replenishment prevents regulars from running out.",style:'Helpful.'},
    {speaker:'ren_uni',jp:'予測を上回る場面、よくあるんですか。',en:"Do you often exceed forecast?",style:'Probe.'},
    {speaker:'yuki_office',jp:'季節要因を含み、上回ることもあります。',en:"Including seasonal factors, sometimes we exceed.",style:'Informative.'},
    {speaker:'ren_uni',jp:'四半期を終える際の振り返り、丁寧にされてるんですね。',en:"Quarter-end reviews — carefully done, then.",style:'Curious.'},
    {speaker:'yuki_office',jp:'はい。',en:"Yes.",style:'Close.'},
  ]},
  {id:'conv_05609',cluster:'B',ambient:'cafe_quiet_chatter',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors a younger boss on operations',lines:[
    {speaker:'hiroshi_elder',jp:'当店のレギュラー商品、常時棚に並べておけ。',en:"Always keep your store's regulars on shelves.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'承知しております。順次補給の体制、安定しています。',en:"Understood. Sequential-replenishment is stable.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'予測を上回る時こそ、慎重に。新案も含み、検討しろ。',en:"When you exceed forecast, be careful. Consider new ideas too.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。今期を終えるまでに、棚卸も完了させます。',en:"Yes. Inventory count will be done by term-end.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'よし。',en:"Good.",style:'Wise close.'},
  ]},
  {id:'conv_05610',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:B_T,scenario:'A police officer briefs a uni reporter about logistics',lines:[
    {speaker:'takeda_officer',jp:'災害時の物資補給、レギュラーで訓練しています。',en:"Disaster relief logistics — trained regularly.",style:'Calm.'},
    {speaker:'ren_uni',jp:'当店レベルの店舗にも、順次配給があるんですか。',en:"Is supply distributed in order even to store-level shops?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。常時想定を含み、訓練を終えるよう努めています。',en:"Yes. Including all scenarios, we strive to wrap training.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'訓練回数、年々上回るペースですか。',en:"Is the drill count exceeding past years?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい、増加傾向です。',en:"Yes — trending up.",style:'Close.'},
  ]},

  {id:'conv_05611',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher walks a uni student through a history paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、黄金時代の終わりと衰退を扱うんですね。',en:"Your paper covers a golden age's end and decline.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。条約を結んだ過程、忠実に追います。',en:"Yes. Faithfully tracing the treaty-signing process.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'直接的な軍事衝突を起こさず、外交で包まれた時代でしたね。',en:"An era wrapped in diplomacy, with no direct military clash.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'一斉に集まった首脳陣の意思決定、章を割きます。',en:"Leaders gathering en masse — I'll dedicate a chapter.",style:'Plan.'},
    {speaker:'asuka_teacher',jp:'引用は丁寧に。',en:"Cite carefully.",style:'Suggestion.'},
    {speaker:'ren_uni',jp:'承知しました。',en:"Understood.",style:'Close.'},
  ]},
  {id:'conv_05612',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss and his manager discuss a business-decline article',lines:[
    {speaker:'hiroshi_boss',jp:'この記事、業界全体の衰退と黄金期の対比、興味深い。',en:"This piece — industry-wide decline versus the golden era, interesting.",style:'Boss.'},
    {speaker:'kenji_office',jp:'はい。新たに結んだ提携、直接的な効果はまだ限定的です。',en:"Yes. Recently formed partnerships — direct effects still limited.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'問題を起こさず、進める方法を忠実に守ろう。',en:"Faithfully follow trouble-free methods.",style:'Direction.'},
    {speaker:'kenji_office',jp:'業界に新風が一斉に包まれる時代、また来ると信じます。',en:"An era wrapped in fresh winds across the industry — I believe it returns.",style:'Insightful.'},
    {speaker:'hiroshi_boss',jp:'長期視点で。',en:"Long-term view.",style:'Decisive.'},
    {speaker:'kenji_office',jp:'承知しました。',en:"Understood.",style:'Close.'},
  ]},
  {id:'conv_05613',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a uni reporter about a local case',lines:[
    {speaker:'takeda_officer',jp:'昨年の事案、関係者と協定を結んで解決しました。',en:"Last year's case was resolved by signing an agreement.",style:'Calm.'},
    {speaker:'ren_uni',jp:'直接的な対立を起こさず、平和的でしたね。',en:"No direct confrontation — peaceful, then.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。住民が一斉に協力してくれたのも大きい。',en:"Yes. Residents cooperating en masse helped greatly.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'忠実に手続きを守った警察、評価されてますね。',en:"The police faithfully following procedure — well rated.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'黄金の信頼関係、地域に包まれている感じです。',en:"A golden trust, wrapping the community.",style:'Informative.'},
    {speaker:'ren_uni',jp:'衰退傾向の地域、解決例として示されますね。',en:"Declining areas — a case to point to.",style:'Engaged.'},
    {speaker:'takeda_officer',jp:'おっしゃる通り。',en:"Indeed.",style:'Close.'},
  ]},
  {id:'conv_05614',cluster:'C',ambient:'living_room_quiet',cast:['hiroshi_elder','ren_uni'],targets:C_T,scenario:'A uni student interviews a retired historian',lines:[
    {speaker:'ren_uni',jp:'先生は、戦後の黄金期を直接見てこられたんですよね。',en:"You witnessed the post-war golden era firsthand.",style:'Polite.'},
    {speaker:'hiroshi_elder',jp:'うん。国家間で次々と結ばれた条約、忠実に記録してきた。',en:"Yes. I faithfully recorded the treaties states signed one after another.",style:'Veteran.'},
    {speaker:'ren_uni',jp:'直接的な対立を起こさない外交の妙、勉強になります。',en:"The art of diplomacy avoiding direct clashes is instructive.",style:'Probe.'},
    {speaker:'hiroshi_elder',jp:'一斉に決断が下る時代の空気、世界が包まれていた。',en:"In eras of mass-decision moments, the world was wrapped.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'産業の衰退、その後どう克服されたんですか。',en:"Industrial decline — how was it overcome later?",style:'Curious.'},
    {speaker:'hiroshi_elder',jp:'地道な改革を、世代を超えて続けた成果だ。',en:"Generations of steady reform — that's the outcome.",style:'Wise close.'},
  ]},
  {id:'conv_05615',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','sakura_teen'],targets:C_T,scenario:'A doctor explains social medicine to a teen',lines:[
    {speaker:'saito_doctor',jp:'桜さん、地域医療の衰退、今、社会問題ですよ。',en:"Sakura, the decline of regional medicine is a social issue now.",style:'Friendly.'},
    {speaker:'sakura_teen',jp:'医師不足、起こさないよう、自治体が頑張ってますよね。',en:"To prevent doctor shortages, municipalities are working hard.",style:'Curious teen.'},
    {speaker:'saito_doctor',jp:'はい。直接的な支援と協定を結んで、対応しています。',en:"Yes. Direct support plus agreements address it.",style:'Patient.'},
    {speaker:'sakura_teen',jp:'住民が一斉に協力する地域、強いですよね。',en:"Regions where residents cooperate en masse are strong.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'忠実な保健師さんに、地域は包まれてきました。',en:"Faithful public-health nurses have wrapped these regions.",style:'Informative.'},
    {speaker:'sakura_teen',jp:'医療の黄金期、また来てほしいです。',en:"I hope medicine's golden era returns.",style:'Engaged close.'},
  ]},

  {id:'conv_05616',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens plan a weekend full of plans',lines:[
    {speaker:'sakura_teen',jp:'土曜、餃子食べに行こうよ。バッハの曲かけてくれるお店あるって。',en:"Saturday, gyoza? There's a place that plays Bach.",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'いいね。フォーク食器のセットも借りられるって聞いた。',en:"Sure. Heard you can borrow a fork-cutlery set too.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'夜は試写会。中旬の話題作だって。',en:"At night, a screening — a mid-month buzz movie.",style:'Animated.'},
    {speaker:'riku_teen',jp:'制服のまま行く?',en:"Going in uniform?",style:'Probe.'},
    {speaker:'sakura_teen',jp:'いや、ちゃんと着替えるよ。朝の体操もやってから。',en:"No, I'll change properly. Morning stretches first.",style:'Practical.'},
    {speaker:'riku_teen',jp:'集合場所は駅前のカ所だな。',en:"Meet at the one spot in front of the station.",style:'Close.'},
  ]},
  {id:'conv_05617',cluster:'D',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:D_T,scenario:'Two cafe friends compare weekend plans',lines:[
    {speaker:'aoi_barista',jp:'今度の週末、餃子工場の見学ツアー、参加するの。',en:"This weekend, I'm joining a gyoza-factory tour.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'素敵!バッハの曲が流れる工場って噂?',en:"Lovely! The factory plays Bach, rumor goes?",style:'Excited.'},
    {speaker:'aoi_barista',jp:'うん。試食はフォークで頂くらしい。',en:"Yes. Tastings apparently with forks.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'制服貸してくれるんだ。試写会みたいで楽しそう。',en:"They lend uniforms. Sounds fun, like a screening.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'中旬から、新人体操の指導員も入るとか。',en:"From mid-month, a new gymnastics instructor joins too.",style:'Aside.'},
    {speaker:'mei_romantic',jp:'カ所だけ、特別なフォトスポットあるって聞いたよ。',en:"Heard there's one special photo spot too.",style:'Warm close.'},
  ]},
  {id:'conv_05618',cluster:'D',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:D_T,scenario:'A uni student helps a teen friend plan a cultural day',lines:[
    {speaker:'sakura_teen',jp:'先輩、月末の試写会、行きたいんですけど予約難しいって。',en:"Senpai, want to go to month-end screening, but hard to book.",style:'Eager.'},
    {speaker:'ren_uni',jp:'中旬から先行販売あるぞ。先に押さえよう。',en:"Mid-month presale starts. Lock it early.",style:'Helpful.'},
    {speaker:'sakura_teen',jp:'帰りに、近所の餃子屋で食事しません?',en:"Want gyoza at the neighborhood place after?",style:'Suggestion.'},
    {speaker:'ren_uni',jp:'いいね。バッハのカフェも近くだから、寄ろう。',en:"Sure. Bach-themed cafe nearby — stop by.",style:'Cheerful.'},
    {speaker:'sakura_teen',jp:'フォークで食べるパスタもあるって。制服でも入れるかな。',en:"There's also fork-eaten pasta. Can I go in uniform?",style:'Curious.'},
    {speaker:'ren_uni',jp:'体操後の汗を流してから、駅前のカ所で待ち合わせな。',en:"After post-gym shower, meet at the one spot in front of the station.",style:'Warm close.'},
  ]},
  {id:'conv_05619',cluster:'D',ambient:'living_room_quiet',cast:['ryosuke_dad','yumiko_mom'],targets:D_T,scenario:'A married couple plans a family weekend',lines:[
    {speaker:'yumiko_mom',jp:'土曜、家族で餃子作り体験どう?',en:"Saturday, family gyoza-making experience?",style:'Warm.'},
    {speaker:'ryosuke_dad',jp:'いいね。BGMはバッハで上品にしよう。',en:"Sure. Bach for elegant BGM.",style:'Easy.'},
    {speaker:'yumiko_mom',jp:'フォーク使うレシピも試したい。',en:"Want to try fork-based recipes too.",style:'Cheerful.'},
    {speaker:'ryosuke_dad',jp:'夜は試写会、中旬のチケットあったよな。',en:"Evening, mid-month screening tickets — we had them.",style:'Recall.'},
    {speaker:'yumiko_mom',jp:'子供たち、学校の制服から着替えてから行きましょう。',en:"Kids should change out of school uniform first.",style:'Practical.'},
    {speaker:'ryosuke_dad',jp:'体操の時間も忘れずに。集合は駅のあのカ所な。',en:"Don't forget gym time. Meet at that one station spot.",style:'Warm close.'},
  ]},
  {id:'conv_05620',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A Kansai chef and a barista discuss collabs',lines:[
    {speaker:'daichi_kansai',jp:'アオイさん、餃子フェアやらん?',en:"Aoi-san, doing a gyoza fair?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい!BGMにバッハを流して、上品な雰囲気にしたいです。',en:"Yes! With Bach BGM, an elegant vibe.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'フォーク用カトラリーも、新調するで。',en:"We'll refresh fork cutlery too.",style:'Plan Kansai.'},
    {speaker:'aoi_barista',jp:'試写会形式で、新メニュー先行公開も検討してます。',en:"Considering a screening-style preview of the new menu.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'制服も、今月中旬には新調するで。',en:"Uniforms too — refreshed by mid-month.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'体操教室を併設しているカフェも、一カ所でいいですから紹介してください。',en:"Cafes with gym classes too — just one spot would do for an intro.",style:'Warm close.'},
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

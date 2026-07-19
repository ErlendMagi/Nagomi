import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_284 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['果て','負ける','素朴','相性','パニック','頼ま','車内','同居']
const B_T = ['支障','通行','務める','打ち出し','最善','適度','応える','相次い']
const C_T = ['犯行','孤立','敗北','臓器','発症','投与','危惧','及ぼし']
const D_T = ['広大','画期的','朗読','握手','球場','焼く','ジュニア','ワイヤレス']

const data = [
  // A
  {id:'conv_05641',cluster:'A',ambient:'living_room_quiet',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat after a chess match',lines:[
    {speaker:'sakura_teen',jp:'今日の対局、最後まで諦めなかったけど、結局負けるって悔しい。',en:"Played to the end, but losing is bitter.",style:'Frustrated teen.'},
    {speaker:'riku_teen',jp:'相手との相性、悪かったよね。盤の果てまで攻められて、パニックになった。',en:"Bad matchup. Pressed to the board's edge, panicked.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'帰りの車内で、ずっと反省してた。',en:"Reflected the whole train ride home.",style:'Subdued.'},
    {speaker:'riku_teen',jp:'兄貴に頼まれて、来週も付き合うんだろ?',en:"Your bro asked you, joining again next week, right?",style:'Probe.'},
    {speaker:'sakura_teen',jp:'うん。同居してる祖父も、観に来るって。',en:"Yes. Grandpa I live with is coming to watch.",style:'Soft.'},
    {speaker:'riku_teen',jp:'素朴に楽しめばいいさ、勝ち負けより。',en:"Just enjoy plainly — over win/loss.",style:'Warm close.'},
  ]},
  {id:'conv_05642',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two cafe friends discuss dating',lines:[
    {speaker:'mei_romantic',jp:'お見合い、緊張しすぎて、パニックになっちゃった。',en:"At the omiai, I got too nervous and panicked.",style:'Vulnerable.'},
    {speaker:'aoi_barista',jp:'相性、どうだった?',en:"How was the matchup?",style:'Gentle.'},
    {speaker:'mei_romantic',jp:'素朴で優しい人だった。帰りの車内で、もう少し話したかったって思った。',en:"Plain, kind person. On the train back I wished we'd talked more.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'いいじゃない。両親に頼まれて行ったんでしょ?',en:"Lovely. Your parents asked you to go, right?",style:'Warm.'},
    {speaker:'mei_romantic',jp:'うん。実家を出て同居、まだ早いかなって思いつつ。',en:"Yes. Leaving home to cohabit feels early still.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'焦らずにね。世界の果てまで一緒に行きたい人、ちゃんと見つかる。',en:"Don't rush. You'll find someone you'd go to the world's ends with.",style:'Warm close.'},
    {speaker:'mei_romantic',jp:'競争じゃない。負けることもない。',en:"Not a contest. No losing.",style:'Soft close.'},
  ]},
  {id:'conv_05643',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom comforts her young son after a stressful day',lines:[
    {speaker:'sho_child',jp:'ママ、今日、急なテストでパニックになった。',en:"Mom, panicked at a surprise test today.",style:'Small voice.'},
    {speaker:'yumiko_mom',jp:'大丈夫よ。誰だって、想定外に負けることはある。',en:"It's okay. Anyone loses to surprises sometimes.",style:'Tender.'},
    {speaker:'sho_child',jp:'バスの車内で、ずっと泣きそうだった。',en:"Almost cried the whole bus ride.",style:'Sad child.'},
    {speaker:'yumiko_mom',jp:'おばあちゃんと同居してるから、後で電話してあげて。',en:"You live with grandma — call her later.",style:'Warm.'},
    {speaker:'sho_child',jp:'うん。先生に頼まれた宿題、夜やる。',en:"Yes. I'll do the teacher's homework tonight.",style:'Soft.'},
    {speaker:'yumiko_mom',jp:'素朴な気持ちで、頑張ろうね。空の果てまで、応援してるよ。',en:"With a plain heart, do your best. I root for you to the sky's end.",style:'Tender close.'},
    {speaker:'sho_child',jp:'相性悪い問題も、明日リベンジする。',en:"Bad-matchup problems, I'll revenge tomorrow.",style:'Bright close.'},
  ]},
  {id:'conv_05644',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A uni student supports a teen after a bad day',lines:[
    {speaker:'sakura_teen',jp:'先輩、今日、電車の車内でパニックになって、降りちゃった。',en:"Senpai, panicked on the train and got off.",style:'Worried teen.'},
    {speaker:'ren_uni',jp:'大丈夫?満員電車、相性悪い時があるよな。',en:"You okay? Packed trains — bad fit sometimes.",style:'Concerned.'},
    {speaker:'sakura_teen',jp:'担任に頼まれた発表、緊張しすぎて。',en:"My homeroom asked me to present, too nervous.",style:'Subdued.'},
    {speaker:'ren_uni',jp:'発表の果てに、また成長があるって信じよう。',en:"Beyond the presentation lies more growth. Believe it.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'今、おばあちゃんと同居中で、家でも気を遣う。',en:"Living with grandma now, hard to relax at home too.",style:'Soft.'},
    {speaker:'ren_uni',jp:'負けるな。素朴に、自分のペースでいけ。',en:"Don't lose. Plainly, at your own pace.",style:'Warm close.'},
  ]},
  {id:'conv_05645',cluster:'A',ambient:'park_distant_birds',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple walks at dusk',lines:[
    {speaker:'hiroshi_elder',jp:'公園の果てに、夕陽が綺麗だね。',en:"At the park's edge, the sunset is lovely.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。素朴な景色こそ、心に残るのよね。',en:"Yes. Plain scenery stays with us most.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'若い頃は、負けるのが嫌で必死だった。',en:"In youth, hating to lose, I was desperate.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'今は、あなたとの相性のおかげで、穏やかね。',en:"Now, thanks to our matchup, it's calm.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'隣の山田さんに頼まれた荷物、明日持って行く。',en:"The package Yamada-san asked me to deliver — tomorrow.",style:'Calm.'},
    {speaker:'sachiko_grandma',jp:'同居の孫娘も、一緒に行きたがってたわ。',en:"Our granddaughter living with us wants to come too.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'よし、車内で歌でも歌うか。',en:"Good. Shall we sing in the car?",style:'Warm close.'},
  ]},

  // B
  {id:'conv_05646',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss and his manager discuss city planning issues',lines:[
    {speaker:'hiroshi_boss',jp:'再開発で、通行止めが業務に支障を来している。',en:"Redevelopment closures hamper operations.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。物流担当を務める部署と、対応を相次いで打ち出しています。',en:"Yes. Together with logistics-lead sections, we're rolling out responses one after another.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'適度な迂回路を市に求める。最善策を取らせろ。',en:"Demand reasonable detours from the city. Best measures.",style:'Direction.'},
    {speaker:'kenji_office',jp:'要望書、明朝に応えると役所から連絡が来ました。',en:"The city said they'd respond to our request tomorrow morning.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'よし、迅速に。',en:"Good. Swiftly.",style:'Decisive close.'},
  ]},
  {id:'conv_05647',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers handle a customer-service issue',lines:[
    {speaker:'yuki_office',jp:'クレームが相次いでいる。業務に支障が出ているよ。',en:"Complaints are piling up. Operations affected.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。担当を務める佐藤、適度な人員増を打ち出したいと。',en:"Yes. Sato leading wants to roll out a modest staffing increase.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'最善策を、明日の会議で決めよう。お客様に応える姿勢、ぶれずに。',en:"Best plan tomorrow. Stay firm in answering customers.",style:'Direction.'},
    {speaker:'kenji_office',jp:'通行止めの案内も、再確認しておきます。',en:"I'll recheck the closure notices too.",style:'Methodical close.'},
  ]},
  {id:'conv_05648',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs a manager about traffic enforcement',lines:[
    {speaker:'takeda_officer',jp:'通行規制、御社の物流に支障を来していますね。',en:"Closures are hampering your logistics.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。安全を最優先に務めています。',en:"Yes. Safety first.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'迂回案、相次いで打ち出されていますが、適度な選択を。',en:"Detours roll out one after another — pick reasonably.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'住民の声に応える形で、最善策を選びます。',en:"In a way that answers residents, we'll choose the best.",style:'Commitment.'},
    {speaker:'takeda_officer',jp:'警察も協力します。',en:"Police will cooperate too.",style:'Close.'},
  ]},
  {id:'conv_05649',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss explains urban risk management to a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、都市部の通行規制、企業に大きな支障を生むんだ。',en:"Ren, city traffic restrictions cause major disruptions to firms.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'担当を務める部署、対応策を相次いで出されてるんですね。',en:"The leading department rolls out responses one after another, then.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'適度な余裕を見越して、最善策を打ち出している。',en:"Allowing reasonable buffer, we roll out the best plan.",style:'Informative.'},
    {speaker:'ren_uni',jp:'地域の要望に応える姿勢、勉強になります。',en:"The stance of answering regional requests is instructive.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'実地視察、来週連れて行く。',en:"Site visit — I'll take you next week.",style:'Warm close.'},
  ]},
  {id:'conv_05650',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','aoi_barista'],targets:B_T,scenario:'A retail manager visits a cafe owner about supply issues',lines:[
    {speaker:'yuki_office',jp:'葵さん、業者から納品遅延が相次いでいて、店舗運営に支障は?',en:"Aoi-san, vendor delays are coming one after another — any store impact?",style:'Concerned.'},
    {speaker:'aoi_barista',jp:'はい、若干。仕入れ担当を務めるスタッフ、最善を尽くしてくれてます。',en:"Yes, slightly. Our procurement-lead staff are doing their best.",style:'Soft.'},
    {speaker:'yuki_office',jp:'適度な在庫の打ち出し、本社にも要請しておきます。',en:"I'll request reasonable stock from HQ.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'通行制限が長引いて、ご迷惑をおかけしてます。',en:"Long closures — we're sorry for the trouble.",style:'Apologetic.'},
    {speaker:'yuki_office',jp:'いえ、お客様に応える姿勢、葵さんは素晴らしいです。',en:"No, your stance in answering customers is splendid.",style:'Warm close.'},
  ]},

  // C
  {id:'conv_05651',cluster:'C',ambient:'lecture_hall_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor explains transplant ethics to a uni reporter',lines:[
    {speaker:'saito_doctor',jp:'臓器移植、提供者が孤立しない仕組みが大事です。',en:"In transplants, systems that keep donors from isolation matter.",style:'Calm doctor.'},
    {speaker:'ren_uni',jp:'感染症の発症リスク、投与する免疫抑制剤との関係も気になります。',en:"Infection-onset risk and immunosuppressant administration concern me.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。倫理面の影響を及ぼし、研究現場でも危惧されています。',en:"Yes. Ethical effects ripple, researchers worry too.",style:'Informative.'},
    {speaker:'ren_uni',jp:'過去には、医療データを巡る犯行も報じられました。',en:"In the past, crimes around medical data were reported.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'敗北を語る声もある一方、改善も進んでいます。',en:"While some voice defeat, improvement progresses.",style:'Reflective close.'},
  ]},
  {id:'conv_05652',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a uni reporter about a fraud case',lines:[
    {speaker:'takeda_officer',jp:'被害者の多くは、孤立した高齢者です。',en:"Most victims are isolated elderly.",style:'Calm.'},
    {speaker:'ren_uni',jp:'犯行手口、敗北宣言を取らせるパターンですね。',en:"The MO forces defeat declarations.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。心身に深刻な影響を及ぼし、健康への危惧もあります。',en:"Yes. Severe physical and mental impact ripples; health worries too.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'過去には、薬の不正投与で発症した方も。',en:"In the past, some had adverse drug-administration onset.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'臓器が弱った高齢者、特に守らねば。',en:"Elderly with weakened organs — must protect.",style:'Firm close.'},
  ]},
  {id:'conv_05653',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher and student discuss a documentary on epidemics',lines:[
    {speaker:'asuka_teacher',jp:'昨夜の番組、感染症の発症パターン、地域ごとに差がありましたね。',en:"Last night's show — onset patterns differed by region.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。孤立した集落、医療の敗北とまで言われていました。',en:"Yes. Isolated villages — called a medical defeat.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'治験の投与プロトコル、倫理に影響を及ぼし、議論を呼んでいます。',en:"Trial-administration protocols ethically ripple, sparking debate.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'臓器移植も、別章で危惧する声を集めていました。',en:"Transplants too — a chapter gathered worried voices.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'医療犯行の歴史的検証、誠実な姿勢が感じられました。',en:"Historical scrutiny of medical crimes felt honest.",style:'Reflective close.'},
  ]},
  {id:'conv_05654',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','sakura_teen'],targets:C_T,scenario:'A doctor explains pediatric care to a teen visitor',lines:[
    {speaker:'saito_doctor',jp:'桜さん、感染症の発症前に予防接種、これが基本だ。',en:"Sakura, vaccination before onset is basic.",style:'Friendly.'},
    {speaker:'sakura_teen',jp:'投与する量、子供で違うんですか?',en:"Does the dose differ for children?",style:'Curious teen.'},
    {speaker:'saito_doctor',jp:'はい。臓器の発達も考慮します。誤投与は、命に影響を及ぼし得る。',en:"Yes. Organ development matters. Errors can affect life.",style:'Patient.'},
    {speaker:'sakura_teen',jp:'医療の敗北を避けるため、現場は緊張感ありますね。',en:"Tension at the scene to avoid medical defeat.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'親が孤立しないよう、家族支援も含めます。',en:"Family support included so parents don't isolate.",style:'Informative.'},
    {speaker:'sakura_teen',jp:'犯行ではなく事故も、危惧する観点なんですね。',en:"Not just crimes — accidents are also a concern.",style:'Earnest close.'},
  ]},
  {id:'conv_05655',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss and manager talk about a corporate health crisis',lines:[
    {speaker:'hiroshi_boss',jp:'工場周辺で、健康被害の発症が報じられている。',en:"Around the plant, onset of health effects is reported.",style:'Concerned boss.'},
    {speaker:'kenji_office',jp:'はい。孤立した集落から、医療敗北の声まで。',en:"Yes. From isolated villages — even voices of medical defeat.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'過去の薬剤投与で、社員の臓器に影響を及ぼした例もあった。',en:"Past drug-administration affected staff organs in some cases.",style:'Direction.'},
    {speaker:'kenji_office',jp:'外部の専門家も、長期的影響を危惧しています。',en:"External experts worry about long-term impact.",style:'Reflective.'},
    {speaker:'hiroshi_boss',jp:'公的犯行ではないが、説明責任は果たそう。',en:"Not a state crime, but we'll be accountable.",style:'Firm close.'},
  ]},

  // D
  {id:'conv_05656',cluster:'D',ambient:'stadium_distant_crowd',cast:['riku_teen','sakura_teen'],targets:D_T,scenario:'Two teens at a baseball game',lines:[
    {speaker:'riku_teen',jp:'広大な球場、初めて見た!',en:"First time seeing such a vast stadium!",style:'Excited teen.'},
    {speaker:'sakura_teen',jp:'うん。ジュニアの試合、画期的な戦術らしいよ。',en:"Yes. Junior match has innovative tactics.",style:'Animated.'},
    {speaker:'riku_teen',jp:'始球式で、有名な作家の朗読もあるんだって。',en:"At the opening, a famous author's reading too.",style:'Awe.'},
    {speaker:'sakura_teen',jp:'選手と握手会、列、長そう。',en:"Player handshake queue — looks long.",style:'Probe.'},
    {speaker:'riku_teen',jp:'屋台で、串を焼く煙、いい匂い。',en:"Skewer-grilling smoke at stalls smells great.",style:'Bright.'},
    {speaker:'sakura_teen',jp:'ワイヤレスマイク、選手紹介に使ってるね。',en:"Wireless mic — used for player intros.",style:'Curious close.'},
  ]},
  {id:'conv_05657',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two cafe friends discuss a weekend plan',lines:[
    {speaker:'mei_romantic',jp:'週末、ジュニアオーケストラの公演、画期的な構成だって聞いた。',en:"Weekend, junior-orchestra show with innovative composition, I heard.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'広大な会場で、朗読と音楽の融合があるんでしょ?',en:"In a vast hall, reading-music fusion, right?",style:'Soft.'},
    {speaker:'mei_romantic',jp:'うん。終演後に、出演者と握手もできるって。',en:"Yes. Handshakes with performers after the show.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'近くの球場で、お祭りも同時開催だって。',en:"Festival at nearby stadium concurrently.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'屋台で、お餅を焼く香り、たまらないよね。',en:"Mochi-grilling aroma at stalls is irresistible.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'ワイヤレスのイヤホン、持って行こう。',en:"Bring wireless earbuds.",style:'Practical close.'},
  ]},
  {id:'conv_05658',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher and student discuss community-arts programs',lines:[
    {speaker:'asuka_teacher',jp:'地域文化、広大な草原を会場にした朗読フェス、注目です。',en:"Regional culture — a reading-fest in a vast grassland is notable.",style:'Calm.'},
    {speaker:'ren_uni',jp:'画期的ですね。ジュニア向けのワークショップもあるとか。',en:"Innovative. Junior workshops too?",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'はい。著者と握手できる機会、子供たちには貴重です。',en:"Yes. Author handshakes are precious for kids.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'夜は近くの球場で、屋台や肉を焼くイベントもあるんでしょうね。',en:"Evening at the nearby stadium — stalls and meat-grilling too.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'運営は、ワイヤレス機器で連絡を取り合っています。',en:"Operations communicate via wireless devices.",style:'Informative close.'},
  ]},
  {id:'conv_05659',cluster:'D',ambient:'street_quiet_distant',cast:['ryosuke_dad','sho_child'],targets:D_T,scenario:'A dad takes his son to a sports-and-culture festival',lines:[
    {speaker:'ryosuke_dad',jp:'翔、今日は広大な公園で、お祭りだ。',en:"Sho, today's festival is in a vast park.",style:'Warm.'},
    {speaker:'sho_child',jp:'ジュニア野球の選手と握手できるって、本当?',en:"Can I really shake hands with junior-baseball players?",style:'Excited child.'},
    {speaker:'ryosuke_dad',jp:'本当だ。隣の球場で、画期的な少年大会もある。',en:"Truly. Adjacent stadium hosts an innovative youth tourney.",style:'Bright.'},
    {speaker:'sho_child',jp:'お父さん、屋台でとうもろこし焼く店、寄ろうよ。',en:"Dad, let's hit the corn-grilling stall.",style:'Eager.'},
    {speaker:'ryosuke_dad',jp:'いいよ。中央広場で朗読会もやってる。',en:"Sure. A reading session at the central plaza too.",style:'Easy.'},
    {speaker:'sho_child',jp:'ワイヤレススピーカー、よく聞こえるね。',en:"The wireless speakers come through well.",style:'Curious close.'},
  ]},
  {id:'conv_05660',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A Kansai chef plans a stadium collab event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、広大な球場で、屋台コラボやらんか?',en:"Aoi-san, food-stall collab at the vast stadium?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'素敵です!ジュニア試合の合間に、朗読会も入れたいですね。',en:"Lovely! Add readings between junior matches.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'肉を焼く屋台と、画期的なドリンク、両方やろ。',en:"Meat-grill stalls and innovative drinks, both.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'選手と握手会も同時に開けたら、家族層に響きますね。',en:"If we host handshakes concurrently, families resonate.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'ワイヤレスマイク、運営でしっかり手配しよ。',en:"Wireless mics — secure them well in ops.",style:'Practical close.'},
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

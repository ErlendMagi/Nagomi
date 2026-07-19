import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_294 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['亀','坪','大橋','小山','舟','出掛け','手持ち','不愉快']
const B_T = ['損益','総研','送金','搭乗','事後','カ年','みなし','即し']
const C_T = ['ウォン','創価学会','オウム','カルト','伝道','先住民','繁殖','部位']
const D_T = ['チェロ','トラウマ','ジェンダー','リアリティ','エール','洗礼','ネパール','ライブラリ']

const data = [
  // A
  {id:'conv_05841',cluster:'A',ambient:'park_distant_birds',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son spend a Sunday outdoors',lines:[
    {speaker:'sho_child',jp:'ママ、池に亀がいるよ!',en:"Mom, there's a turtle in the pond!",style:'Excited child.'},
    {speaker:'yumiko_mom',jp:'本当ね。庭の坪庭にも、来てくれるかな。',en:"Truly. Wonder if it'll visit our tsubo-garden too.",style:'Warm.'},
    {speaker:'sho_child',jp:'川の大橋まで歩く?',en:"Walk to the big river bridge?",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'うん。途中、小山の登山道入口にも寄れるね。',en:"Yes. Stop by the trailhead at the little mountain too.",style:'Bright.'},
    {speaker:'sho_child',jp:'貸し舟、乗ってみたいなあ。',en:"Wanna try a rental rowboat.",style:'Wistful.'},
    {speaker:'yumiko_mom',jp:'今日は思いきり出掛けようね。',en:"Today let's really go out.",style:'Tender.'},
    {speaker:'sho_child',jp:'手持ちのお金、おやつにぜんぶ使っちゃう?',en:"Spend all my pocket money on snacks?",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'ふふ、迷惑な人がいて不愉快な気持ちになっても、笑顔でいようね。',en:"Hehe, even if rude folks make us uneasy, keep smiling.",style:'Warm close.'},
  ]},
  {id:'conv_05842',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple plans a day out',lines:[
    {speaker:'hiroshi_elder',jp:'庭の亀、また日向ぼっこしてるな。',en:"Garden turtle's sunning again.",style:'Calm.'},
    {speaker:'sachiko_grandma',jp:'坪庭の苔も、青々として、いいわね。',en:"Tsubo-garden moss is green, lovely.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'今日、大橋を渡って、対岸まで歩こうか。',en:"Today — cross the big bridge to the far bank?",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。途中、小山の展望台で休もうね。',en:"Yes. Rest at the little-mountain lookout midway.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'川の舟下り、若い頃は二人でよく乗ったね。',en:"River rafts — in youth we often rode them.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'今日は気持ちよく出掛けたいね。',en:"Want a pleasant outing today.",style:'Bright.'},
    {speaker:'hiroshi_elder',jp:'手持ちの傘、念のため持っていこう。',en:"Bring the umbrella we have, just in case.",style:'Practical.'},
    {speaker:'sachiko_grandma',jp:'駅で混んでも、不愉快な顔しないでね。',en:"Even if stations are packed, don't pout.",style:'Wry close.'},
  ]},
  {id:'conv_05843',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat about a day trip',lines:[
    {speaker:'mei_romantic',jp:'昨日、亀公園に行ってきた。',en:"Yesterday I went to Turtle Park.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'坪庭風のカフェも、その近くだよね。',en:"The tsubo-garden-style cafe is nearby, right?",style:'Soft.'},
    {speaker:'mei_romantic',jp:'うん。大橋を渡って、向こうの小山まで歩いたの。',en:"Yes. Crossed the big bridge, walked to the little mountain.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'川下りの舟、空いてた?',en:"Were the river boats free?",style:'Curious.'},
    {speaker:'mei_romantic',jp:'うん、ちょうど空いてた。気持ちよく出掛けた一日。',en:"Yes, just right. A pleasant outing day.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'手持ちのお金、足りた?',en:"Cash on hand — enough?",style:'Probe.'},
    {speaker:'mei_romantic',jp:'ぎりぎり。隣の客がうるさくて、ちょっと不愉快だったけど、それ以外は最高。',en:"Just barely. Loud customer was a little annoying, but otherwise great.",style:'Wry close.'},
  ]},
  {id:'conv_05844',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat about plans',lines:[
    {speaker:'sakura_teen',jp:'駅前の亀の像、また写真撮りたい。',en:"Want another photo at the station turtle statue.",style:'Animated teen.'},
    {speaker:'riku_teen',jp:'家の坪庭で、夏祭り写真撮ろうって母さんが。',en:"Mom wants summer-fest photos in our tsubo-garden.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'川の大橋まで自転車で行こう。',en:"Bike to the big bridge.",style:'Eager.'},
    {speaker:'riku_teen',jp:'小山の頂上、近いから、登ろう。',en:"Little-mountain summit's near — let's climb.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'駅前の舟乗り場、新しくできたよ。',en:"A new boat dock opened at the station.",style:'Bright.'},
    {speaker:'riku_teen',jp:'今日は出掛けたい気分だ。',en:"Today I want to go out.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'手持ちが少ないから、コンビニで安いの。',en:"Cash low — convenience-store cheap stuff.",style:'Practical.'},
    {speaker:'riku_teen',jp:'うるさい客いると不愉快だから、静かな店選ぼう。',en:"Loud customers annoy me — quiet shop.",style:'Wry close.'},
  ]},
  {id:'conv_05845',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai walks with a teen friend',lines:[
    {speaker:'ren_uni',jp:'池の亀、毎年同じ場所にいるよな。',en:"Pond turtle's in the same spot every year.",style:'Easy senpai.'},
    {speaker:'sakura_teen',jp:'はい。先輩の家、坪庭があったんですよね。',en:"Yes. Your home has a tsubo-garden, right?",style:'Earnest teen.'},
    {speaker:'ren_uni',jp:'うん、小さいけどな。今日は大橋まで歩くか。',en:"Yes, tiny. Today, walk to the big bridge?",style:'Casual.'},
    {speaker:'sakura_teen',jp:'はい。小山の麓のカフェで、休憩しましょう。',en:"Yes. Rest at the little-mountain-base cafe.",style:'Bright.'},
    {speaker:'ren_uni',jp:'帰りは、川の舟、乗ってもいいな。',en:"On the way back, the river boat would be fun too.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'今日、急に出掛けの誘い、ありがとうございます。',en:"Thanks for the sudden invite to go out.",style:'Polite.'},
    {speaker:'ren_uni',jp:'いいさ。手持ちの予算で十分楽しめる。',en:"All good. Enough fun in the budget at hand.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'帰りの混雑、不愉快にならないルートで戻りましょう。',en:"Return route — let's avoid annoying crowds.",style:'Practical close.'},
  ]},

  // B
  {id:'conv_05846',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews financial planning',lines:[
    {speaker:'hiroshi_boss',jp:'今期の損益、総研の見通しと比べてどうだ。',en:"This term's P&L — vs. the think-tank forecast?",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。送金関連の手数料、見直しが必要です。',en:"Yes. Remittance fees need revisiting.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'役員の搭乗、海外視察、事後報告を徹底させろ。',en:"Exec flights — overseas tours, ex-post reporting strict.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。3カ年計画、みなし会計のルールに即して再構築します。',en:"Yes. 3-year plan rebuilt in line with deemed-accounting rules.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'よし、来週役員会で。',en:"Good — board next week.",style:'Close.'},
  ]},
  {id:'conv_05847',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss a budget',lines:[
    {speaker:'yuki_office',jp:'部門別の損益、総研データを参考に再分析するね。',en:"By-section P&L — reanalyze using think-tank data.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。海外送金、事後の確認プロセスを強化します。',en:"Yes. Overseas remittance — strengthen ex-post checks.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'役員の搭乗予定、5カ年計画と合わせて見直そう。',en:"Exec flight schedule — review with the 5-year plan.",style:'Direction.'},
    {speaker:'kenji_office',jp:'みなし役員規程、新ルールに即して改訂中です。',en:"Deemed-officer code revised per new rules.",style:'Update.'},
    {speaker:'yuki_office',jp:'来週までに、頼む。',en:"By next week, please.",style:'Close.'},
  ]},
  {id:'conv_05848',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern on finance',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、企業の損益、外部総研の意見も参考にすることが多い。',en:"Ren, on P&L, we often consult outside think tanks.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'海外送金のコスト、決算で大きいんですね。',en:"Overseas remittance costs are big in earnings.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'海外搭乗の頻度、事後の精算ルールが鍵だ。',en:"Overseas-flight frequency — ex-post reconciliation is key.",style:'Direction.'},
    {speaker:'ren_uni',jp:'3カ年計画、現場の運用に即して、みなし規程を見直すと聞きました。',en:"3-year plan — heard deemed-rules revised in line with field practice.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'うん。来週の役員勉強会で、傍聴を許可する。',en:"Yes. Next week's board study group — you may attend.",style:'Close.'},
  ]},
  {id:'conv_05849',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs a manager on AML rules',lines:[
    {speaker:'takeda_officer',jp:'金融犯罪、海外送金の経路、警察が厳しく見ています。',en:"Financial crime — police closely watch remittance routes.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。当社、総研の助言で、損益勘定も見直しました。',en:"Yes. Per think-tank advice, we revised P&L too.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'役員の搭乗履歴、事後にも追える体制を。',en:"Exec flight history — make ex-post traceable.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。3カ年計画、警察ガイドラインに即して、みなし運用を導入します。',en:"Yes. 3-year plan — deemed-operations per police guidelines.",style:'Update.'},
    {speaker:'takeda_officer',jp:'お願いします。',en:"Please proceed.",style:'Close.'},
  ]},
  {id:'conv_05850',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors on long-term planning',lines:[
    {speaker:'hiroshi_elder',jp:'損益の見方、若い頃は短期に偏っていた。',en:"P&L reading — in youth I leaned short-term.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。総研の長期予測、最近重視しています。',en:"Yes. Recently we weigh think-tank long-term forecasts.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'送金規則、各国で違う。海外搭乗の頻度も、事後精査が要る。',en:"Remittance rules differ by country. Flight frequency needs ex-post audit.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'5カ年計画、現場の声に即して、みなし規程も入れます。',en:"5-year plan with deemed-rules tied to field voices.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'人を軸に。',en:"People as the axis.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_05851',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher and student discuss a religion-studies seminar',lines:[
    {speaker:'asuka_teacher',jp:'宗教社会学、創価学会の組織研究、丁寧に扱われていますね。',en:"In religious sociology, Soka-Gakkai organizational studies are careful.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。かつてのオウム事件、カルト研究の節目になりました。',en:"Yes. The past Aum incident marked a turning point in cult studies.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'伝道活動と先住民コミュニティの関係、別章でも論じられています。',en:"Missionary work and indigenous-community ties — discussed in another chapter.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'信者の地域繁殖、社会学的部位での分析が新しいです。',en:"Believer-community spread; analysis at the social-segment level is new.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'通貨ウォン圏への布教史、図書館の文献も豊富ですよ。',en:"Won-zone missionary history — library materials are rich.",style:'Reflective close.'},
  ]},
  {id:'conv_05852',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a uni reporter about religious-fraud cases',lines:[
    {speaker:'takeda_officer',jp:'近年の宗教関連詐欺、カルト的団体と紛らわしい事例があります。',en:"Recent religious-related fraud — confusable cult-like cases.",style:'Calm.'},
    {speaker:'ren_uni',jp:'創価学会のような大手宗教団体、被害組織と混同される問題ですね。',en:"Major orgs like Soka-Gakkai are conflated with victim-orgs — a problem.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。過去のオウム事件、捜査ノウハウの源です。',en:"Yes. Past Aum case — source of investigative know-how.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'伝道を装った勧誘、先住民コミュニティでも報告されてますね。',en:"Mission-disguised solicitation also reported in indigenous communities.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。被害ネットワークの繁殖、各部位で追跡しています。',en:"Yes. Damage-network spread tracked at each segment.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'通貨ウォン圏との連携、進めてますか。',en:"Won-zone cooperation in progress?",style:'Curious close.'},
    {speaker:'takeda_officer',jp:'はい、地道に。',en:"Yes, steadily.",style:'Close.'},
  ]},
  {id:'conv_05853',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a society-class assignment',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、社会の課題、新宗教史、難しいテーマね。',en:"Sakura, your social-studies task — new-religion history is hard.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。創価学会の影響と、オウム事件以降のカルト議論、整理が必要です。',en:"Yes. Soka-Gakkai's influence and post-Aum cult debate need sorting.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'伝道の現代的様相、先住民の文化と接する事例もあります。',en:"Modern missionary forms also touch indigenous cultures.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'信者層の繁殖、社会のどの部位に集中するか、興味深いです。',en:"Believer growth — which social segment concentrates is interesting.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'通貨ウォン圏の研究も、近年は日本語訳が増えています。',en:"Won-zone studies — JP translations are increasing too.",style:'Reflective close.'},
  ]},
  {id:'conv_05854',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews a CSR risk note',lines:[
    {speaker:'hiroshi_boss',jp:'社員勧誘の事例、創価学会と関連を疑う問い合わせがあった。',en:"Staff-recruitment cases — inquiries suggesting Soka-Gakkai links.",style:'Concerned.'},
    {speaker:'kenji_office',jp:'はい。慎重に対応します。過去のオウム事件、カルト対策の参考にしています。',en:"Yes. Handled carefully. Past Aum incident informs cult prep.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'地域貢献部門の伝道風活動、先住民コミュニティとの接点、慎重に。',en:"Community-aid 'missionary-style' work touching indigenous — careful.",style:'Direction.'},
    {speaker:'kenji_office',jp:'繁殖管理事業部位とも、共有しています。',en:"Shared with the breeding-management segment too.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'海外決済、ウォン建て案件、リスクを再確認。',en:"Won-denominated overseas — re-check risk.",style:'Decisive close.'},
  ]},
  {id:'conv_05855',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor and reporter discuss public-health and cult issues',lines:[
    {speaker:'saito_doctor',jp:'医療現場でも、カルト的団体との接触、患者の心身に影響が出ます。',en:"In medicine too, contact with cult-like groups affects patients' minds and bodies.",style:'Calm.'},
    {speaker:'ren_uni',jp:'創価学会以外の、新宗教の伝道活動、地域差があるんですね。',en:"Beyond Soka-Gakkai, new-religion mission has regional variation.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。過去のオウム事件、医療界も教訓を引いています。',en:"Yes. Aum case — medicine drew lessons.",style:'Patient.'},
    {speaker:'ren_uni',jp:'先住民の信仰、医療連携で配慮されている部位ありますか。',en:"Indigenous beliefs — areas of accommodation in medical cooperation?",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。地域での感染症繁殖、信仰行事との関連を慎重に見ます。',en:"Yes. Local infection spread; carefully observed vs. faith events.",style:'Informative.'},
    {speaker:'ren_uni',jp:'通貨ウォン圏の事例、参考にされてますか。',en:"Won-zone cases as reference?",style:'Curious close.'},
    {speaker:'saito_doctor',jp:'はい、地道に積み上げます。',en:"Yes — steady accumulation.",style:'Close.'},
  ]},

  // D
  {id:'conv_05856',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends discuss a concert and life',lines:[
    {speaker:'mei_romantic',jp:'昨夜のコンサート、チェロの音色、心に染みた。',en:"Last night's concert — cello tone soaked into me.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'過去のトラウマを忘れて、純粋に音楽を聴けた?',en:"Could you listen purely, forgetting past trauma?",style:'Gentle.'},
    {speaker:'mei_romantic',jp:'うん。ジェンダーをテーマにした演奏もあって、考えさせられた。',en:"Yes. A gender-themed piece — gave me pause.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'映画みたいなリアリティだった?',en:"Film-like reality?",style:'Curious.'},
    {speaker:'mei_romantic',jp:'うん。終演後、舞台にエールを送った。',en:"Yes. After the show, I sent cheers to the stage.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'初の生演奏、洗礼を受けた気分でしょ。',en:"First live performance — felt like baptism, right?",style:'Wry.'},
    {speaker:'mei_romantic',jp:'次は、ネパールの民族音楽を聴きに行きたい。',en:"Next, I want Nepali folk music.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'駅前のライブラリにCDあるよ。',en:"The station library has CDs.",style:'Warm close.'},
  ]},
  {id:'conv_05857',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher and student discuss a culture-studies paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、チェロを介した心理療法、面白い切り口ですね。',en:"Paper — cello-mediated psychotherapy, fresh angle.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。トラウマを抱える患者への効果、いくつか報告されています。',en:"Yes. Effects on trauma patients are reported.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'ジェンダー研究での音楽療法、リアリティ番組でも紹介されていました。',en:"Music therapy in gender studies — featured in reality shows too.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'関係者にエールを送る章、論文の特色になっていますね。',en:"A chapter sending cheers to practitioners distinguishes the paper.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'医療の新規性に対し、洗礼を受ける位置に立つ研究ですね。',en:"Research stands at the baptism-point of medical novelty.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'参考文献に、ネパールの音楽事例も、含めました。',en:"References — included Nepali music cases too.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'デジタルライブラリで、丁寧にアクセスしてください。',en:"Access via the digital library carefully.",style:'Reflective close.'},
  ]},
  {id:'conv_05858',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens talk about music club',lines:[
    {speaker:'sakura_teen',jp:'吹奏楽部の発表会、チェロ協奏曲もやるんだって。',en:"Band concert — featuring a cello concerto too.",style:'Animated teen.'},
    {speaker:'riku_teen',jp:'小学校時代のトラウマ、まだ思い出すよ、本番の緊張。',en:"Still remember the trauma of elementary-school stage fright.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'今回は、ジェンダーをテーマにしたMC、新しい試み。',en:"This time — gender-themed MCing, a new try.",style:'Bright.'},
    {speaker:'riku_teen',jp:'リアリティ番組みたいに、ドキュメント映像も撮るんでしょ?',en:"Filming docs reality-show style too?",style:'Curious.'},
    {speaker:'sakura_teen',jp:'うん。観客にエールを送るパフォーマンス、入れる。',en:"Yes. Includes a cheer-sending performance for the audience.",style:'Animated.'},
    {speaker:'riku_teen',jp:'高校最初の発表、洗礼みたいなものだよな。',en:"First HS performance is baptism-like.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'交換留学のネパール人友達、観に来てくれるって。',en:"Exchange-student friend from Nepal'll watch.",style:'Cheerful.'},
    {speaker:'riku_teen',jp:'放課後、図書室のライブラリで、楽譜借りていこう。',en:"After school, borrow the score from the library.",style:'Practical close.'},
  ]},
  {id:'conv_05859',cluster:'D',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:D_T,scenario:'A uni senpai shares life advice with a teen',lines:[
    {speaker:'ren_uni',jp:'桜、チェロ習いたいって言ってたよな。',en:"Sakura, you wanted to learn cello, right?",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。過去のステージのトラウマ、克服したくて。',en:"Yes. Want to overcome past stage trauma.",style:'Earnest teen.'},
    {speaker:'ren_uni',jp:'ジェンダー観念を変えるのに、芸術って力あるんだ。',en:"Art has power to shift gender views.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'リアリティを描く番組も、たまに観ます。',en:"I sometimes watch reality programs too.",style:'Curious.'},
    {speaker:'ren_uni',jp:'頑張る後輩にエールを送る、僕の役目だ。',en:"Cheering struggling juniors is my role.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'初発表の洗礼、必ず乗り越えます。',en:"First-debut baptism — I'll surely conquer.",style:'Bright.'},
    {speaker:'ren_uni',jp:'夏休み、ネパールの音楽教室、興味あれば紹介できるよ。',en:"Summer — interested in a Nepali music workshop? Can intro.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'うちの大学のライブラリ、いい資料あります?',en:"Our uni library — good materials?",style:'Probe close.'},
  ]},
  {id:'conv_05860',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces about culture',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、チェロ習ってみたかったな。',en:"In youth, wanted to learn cello.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。戦争のトラウマ、長く抱えてたものね。',en:"Yes. War trauma you carried long.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'当時はジェンダー、語る言葉さえ少なかった。',en:"Back then, even gender words were few.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'今のテレビは、リアリティ番組ばっかりよね。',en:"Today's TV is reality shows everywhere.",style:'Wry.'},
    {speaker:'hiroshi_elder',jp:'若者に静かにエールを送りたい。',en:"Want to quietly cheer the young.",style:'Warm.'},
    {speaker:'sachiko_grandma',jp:'我が子の洗礼式、初孫の時も、感動的だったわ。',en:"Our children's baptisms — first grandchild too — moving.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'いつかネパールに、二人で旅したかったね。',en:"Always wanted to travel Nepal with you.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'町のライブラリ、写真集、たくさんあるわよ。',en:"Town library — many photo books.",style:'Warm close.'},
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_292 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['和田','小野','阿部','内田','西村','太田','前田','永田']
const B_T = ['本田','石田','安田','川口','神田','大塚','野口','高木']
const C_T = ['戦犯','爆破','暴動','ナチス','部落','慰安','暴行','売春']
const D_T = ['岡山','マリア','ホームズ','トニー','カメラマン','フォード','マルクス','マドリッド']

const data = [
  // A
  {id:'conv_05801',cluster:'A',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:A_T,scenario:'A boss reviews staff assignments',lines:[
    {speaker:'hiroshi_boss',jp:'新体制、和田部長と小野課長、営業の二枚看板。',en:"New lineup — Director Wada and Section-Chief Ono lead sales.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。阿部さん、内田さんは、サポート役で固めます。',en:"Yes. Abe-san, Uchida-san — solid support roles.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'西村さん、太田さんは、海外拠点へ。',en:"Nishimura-san, Ota-san — overseas posts.",style:'Direction.'},
    {speaker:'kenji_office',jp:'前田さん、永田さんは、研修担当として残します。',en:"Maeda-san, Nagata-san — kept on as trainers.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'よし、各位に通達を。',en:"Good — notify everyone.",style:'Close.'},
  ]},
  {id:'conv_05802',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat about classmates',lines:[
    {speaker:'sakura_teen',jp:'放課後、和田さんと小野さんが図書室で勉強会するって。',en:"After school, Wada and Ono study session in the library.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'阿部、内田、二人とも参加するんでしょ。',en:"Abe and Uchida joining, right?",style:'Casual.'},
    {speaker:'sakura_teen',jp:'西村さん、太田さんは、部活で来られない。',en:"Nishimura, Ota — club, can't come.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'前田が、ノートを共有してくれるって言ってた。',en:"Maeda said he'd share notes.",style:'Easy.'},
    {speaker:'sakura_teen',jp:'永田さんは、英語のリスニング得意。',en:"Nagata's good at English listening.",style:'Animated close.'},
  ]},
  {id:'conv_05803',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends gossip lightly about acquaintances',lines:[
    {speaker:'mei_romantic',jp:'和田さん、結婚したんだって。小野さん経由で聞いた。',en:"Wada got married — heard via Ono.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'阿部さんも、もうすぐ転勤らしいね。内田さん、寂しがってた。',en:"Abe's transferring soon. Uchida-san looked sad.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'西村さんは、フリーランス独立を考えてるって。',en:"Nishimura's thinking of going freelance.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'太田さんと前田さんは、二人で起業するって聞いた。',en:"Heard Ota and Maeda will co-found a startup.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'永田さんは、海外赴任を控えて、忙しいみたい。',en:"Nagata-san's busy ahead of an overseas posting.",style:'Warm close.'},
  ]},
  {id:'conv_05804',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple discusses old friends',lines:[
    {speaker:'hiroshi_elder',jp:'同期会の名簿、和田くん、小野くん、今も連絡取れる。',en:"Class register — Wada, Ono — still reachable.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'阿部さん、内田さん、今年は喪中だったわね。',en:"Abe, Uchida — they're in mourning this year.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'西村くんは、地元の世話役を引き受けてる。',en:"Nishimura — taking on local liaison.",style:'Warm.'},
    {speaker:'sachiko_grandma',jp:'太田さんと前田さんは、温泉旅行誘ってくれたの。',en:"Ota and Maeda invited us to a spa trip.",style:'Bright.'},
    {speaker:'hiroshi_elder',jp:'永田くん、入院したらしい。お見舞いに行こう。',en:"Heard Nagata was hospitalized. Let's visit.",style:'Warm close.'},
  ]},
  {id:'conv_05805',cluster:'A',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:A_T,scenario:'Two managers discuss a project team',lines:[
    {speaker:'yuki_office',jp:'新規プロジェクト、和田さんが主担当、小野さんが技術リードね。',en:"New project — Wada leads overall, Ono tech.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。阿部さんはマーケ、内田さんは法務担当です。',en:"Yes. Abe on marketing, Uchida on legal.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'西村さん、太田さん、海外との橋渡し、よろしく。',en:"Nishimura, Ota — bridge with overseas, please.",style:'Direction.'},
    {speaker:'kenji_office',jp:'前田さんは、製造現場と調整。永田さんが品質管理。',en:"Maeda — production-site liaison. Nagata — QA.",style:'Update.'},
    {speaker:'yuki_office',jp:'進捗、週次で。',en:"Progress — weekly.",style:'Close.'},
  ]},

  // B
  {id:'conv_05806',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews a corporate IT team',lines:[
    {speaker:'hiroshi_boss',jp:'IT統括、本田部長、引き続きお願いする。',en:"IT lead — Director Honda, continued.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。インフラは石田さん、安田さんが担当します。',en:"Yes. Infra — Ishida-san, Yasuda-san handle.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'川口さん、神田さんは、セキュリティ部門に異動。',en:"Kawaguchi-san, Kanda-san — transferred to security.",style:'Direction.'},
    {speaker:'kenji_office',jp:'大塚さん、野口さんは、データ分析に注力します。',en:"Otsuka-san, Noguchi-san — focus on data analysis.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'高木さん、AI推進、引き続き先頭で。',en:"Takagi-san — AI advancement, keep leading.",style:'Close.'},
  ]},
  {id:'conv_05807',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss a launch event',lines:[
    {speaker:'yuki_office',jp:'発表会、本田さんが司会、石田さんが進行管理ね。',en:"Launch — Honda-san MC, Ishida-san on flow.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。安田さんが、受付。川口さんが警備配置を担当します。',en:"Yes. Yasuda on reception. Kawaguchi on security layout.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'神田さん、大塚さんは、プレス対応をお願い。',en:"Kanda, Otsuka — press handling, please.",style:'Direction.'},
    {speaker:'kenji_office',jp:'野口さんが質疑、高木さんが資料の最終チェックです。',en:"Noguchi on Q&A, Takagi on final material checks.",style:'Update.'},
    {speaker:'yuki_office',jp:'準備、抜かりなく。',en:"Prep — flawless.",style:'Close.'},
  ]},
  {id:'conv_05808',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss introduces a uni intern to an engineering team',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、こちらが本田部長、隣が石田課長、後ろが安田主任、川口先輩、神田リーダー。',en:"Ren, this is Director Honda; next, Chief Ishida; behind: Yasuda, Kawaguchi, Lead Kanda.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'初めまして、よろしくお願いします。',en:"Pleased to meet you all.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'大塚さんがデータ分析、野口さんが品質、高木さんがAI担当だ。',en:"Otsuka — data; Noguchi — quality; Takagi — AI.",style:'Direction.'},
    {speaker:'ren_uni',jp:'勉強になります。',en:"Most instructive.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'まずは、各部署を一週間ずつ回ってもらう。',en:"You'll rotate through each section one week each.",style:'Close.'},
  ]},
  {id:'conv_05809',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs a corporate IT team',lines:[
    {speaker:'takeda_officer',jp:'御社IT統括の本田部長、ご挨拶ありがとうございました。',en:"Director Honda — thanks for the greeting.",style:'Calm.'},
    {speaker:'kenji_office',jp:'こちらこそ。石田さん、安田さん、川口さんが、現場担当です。',en:"Likewise. Ishida, Yasuda, Kawaguchi handle the front.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'神田さん、大塚さん、データ管理、密に連絡を。',en:"Kanda, Otsuka — close contact on data management.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'野口さん、高木さんも、合同訓練に参加します。',en:"Noguchi, Takagi join the joint drills too.",style:'Update.'},
    {speaker:'takeda_officer',jp:'お願いします。',en:"Please proceed.",style:'Close.'},
  ]},
  {id:'conv_05810',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec advises on team building',lines:[
    {speaker:'hiroshi_elder',jp:'本田くん、若い頃から器が大きかった。',en:"Honda — broad-minded since youth.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'石田、安田、川口、神田、皆若い才能でして。',en:"Ishida, Yasuda, Kawaguchi, Kanda — all young talent.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'大塚くんも、私が育てた一人だ。野口くんも。',en:"Otsuka — one I raised too. Noguchi too.",style:'Reflective.'},
    {speaker:'hiroshi_boss',jp:'高木さんが新時代のAIを引っ張ってくれてます。',en:"Takagi-san leads the new AI era.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'人を見抜く目、養い続けろ。',en:"Keep training your eye for people.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_05811',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher and student discuss a WWII documentary',lines:[
    {speaker:'asuka_teacher',jp:'昨夜の番組、戦犯裁判の記録、丁寧でしたね。',en:"Last night's show — war-crimes trial records were careful.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。ナチス政権下の暴動と、組織的な暴行の記録、衝撃でした。',en:"Yes. Nazi-era riots and organized violence records were shocking.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'被占領地の部落で行われた慰安所制度、歴史学では大きな論点です。',en:"Comfort facilities in occupied-area villages — a major historiographic topic.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'戦時下の売春問題、研究で多角的にとらえられていますね。',en:"Wartime sex-work issues are multi-faceted in research.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'施設の爆破による証拠隠滅も、当時報じられました。',en:"Facility-bombing for evidence-destruction was reported then too.",style:'Reflective close.'},
  ]},
  {id:'conv_05812',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a uni reporter about hate-crime statistics',lines:[
    {speaker:'takeda_officer',jp:'近年、ヘイト系の暴行事件、統計上、増加傾向です。',en:"Recently, hate-related assault statistics trend upward.",style:'Calm.'},
    {speaker:'ren_uni',jp:'歴史的には、ナチスの台頭時にも、似た現象がありました。',en:"Historically, similar phenomena during the Nazi rise.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。組織的な暴動を扇動した戦犯への裁判、参考資料は多くあります。',en:"Yes. Trials of war criminals who incited riots — many references.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害地の部落で、慰安と称された施設、その後の研究は?',en:"Facilities called \"comfort\" in damaged villages — later research?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'警察と歴史家、共同で取り組んでいます。',en:"Police and historians work jointly.",style:'Informative.'},
    {speaker:'ren_uni',jp:'戦後の売春取り締まり、爆破事件もありましたよね。',en:"Post-war sex-work crackdowns — bombings too, right?",style:'Curious close.'},
    {speaker:'takeda_officer',jp:'はい、複雑な歴史です。',en:"Yes, a complex history.",style:'Close.'},
  ]},
  {id:'conv_05813',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a history-museum visit',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、特別展、戦犯の裁判記録、難しいですが大切な学びです。',en:"Sakura, special show — war-crimes records are hard but vital learning.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。ナチスの暴動、組織的暴行の章、読み応えあります。',en:"Yes. The Nazi-riot, organized-violence chapter is gripping.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'当時の部落と呼ばれた共同体、避難民の慰安所と混同されがちです。',en:"Period \"villages\" are often confused with refugee comfort facilities.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'戦時下の売春問題、まだ研究が続いていますね。',en:"Wartime sex-work issues are still under study.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'爆破跡地の保存、世界遺産との関連でも議論があります。',en:"Bombed-site preservation links to World-Heritage debates too.",style:'Reflective close.'},
  ]},
  {id:'conv_05814',cluster:'C',ambient:'office_quiet_low',cast:['ren_uni','hiroshi_boss'],targets:C_T,scenario:'A uni reporter interviews an exec about CSR / history education',lines:[
    {speaker:'ren_uni',jp:'御社、戦犯時代の企業史も、公開する方針と聞きました。',en:"I heard you'll publicize war-criminal-era corporate history.",style:'Polite reporter.'},
    {speaker:'hiroshi_boss',jp:'はい。当時の労務環境、暴行や強制労働の事例にも触れます。',en:"Yes. Period labor — including assault and forced-labor cases.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'ナチス支配下の協力企業、参考にされてますか。',en:"Reference to Nazi-collaborator firms?",style:'Curious.'},
    {speaker:'hiroshi_boss',jp:'うん。部落単位の労働実態、慰安と称された施設の話も、史料として保存します。',en:"Yes. Village-level labor, so-called \"comfort\" facilities — preserved as records.",style:'Informative.'},
    {speaker:'ren_uni',jp:'戦時下の売春強要、それに伴う爆破事件、公開可能ですか。',en:"Wartime forced sex-work and related bombings — can be disclosed?",style:'Probe.'},
    {speaker:'hiroshi_boss',jp:'歴史家と慎重に進めます。',en:"Carefully, with historians.",style:'Firm close.'},
  ]},
  {id:'conv_05815',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher and a uni student discuss a documentary on transitional justice',lines:[
    {speaker:'asuka_teacher',jp:'移行期正義の特集、戦犯処理から始まる構成でしたね。',en:"Transitional-justice feature opened with war-crimes processing.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。ナチス後のドイツの暴動収束、丁寧に描かれていました。',en:"Yes. Post-Nazi German riot-containment was carefully depicted.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'暴行被害者の救済、部落単位の聞き取り、根気の要る作業ですね。',en:"Assault-victim relief, village-by-village interviews — grueling work.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'慰安をめぐる証言、二次被害を避ける配慮も語られていました。',en:"Testimonies around \"comfort\" — secondary-harm avoidance was also discussed.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'戦後の売春の社会問題、爆破事件と並ぶ報道の難しさ、現代に通じます。',en:"Postwar sex-work as social issue, alongside bombings — reporting hardships persist today.",style:'Reflective close.'},
  ]},

  // D
  {id:'conv_05816',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends plan a culture-themed trip',lines:[
    {speaker:'mei_romantic',jp:'夏休み、岡山経由でマドリッドまで、列車旅。',en:"Summer — Okayama then Madrid by train.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'素敵!マリアさんに会いに行くんでしょ?',en:"Lovely! Visiting Maria-san, right?",style:'Soft.'},
    {speaker:'mei_romantic',jp:'うん。映画好きの友人、ホームズ風の探偵小説を翻訳してる。',en:"Yes. Movie-loving friend, translating Holmes-style detective novels.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'トニーさんの新作、すごい評判だよね。',en:"Tony's new work — high praise.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'撮影現場で、カメラマンの仕事を見学する予定なの。',en:"Plan to observe camerawork on set.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'フォードの自伝、旅のお供にぴったり。',en:"Ford's autobio — perfect travel companion.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'マルクスの経済学の本も、機内で読むの。',en:"Marx's economics book, reading in-flight.",style:'Wistful close.'},
  ]},
  {id:'conv_05817',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher discusses a film studies class',lines:[
    {speaker:'asuka_teacher',jp:'今学期、岡山ロケで撮影された名作、課題に取り上げます。',en:"This term, an Okayama-shot classic — set in the syllabus.",style:'Calm.'},
    {speaker:'ren_uni',jp:'主演のマリア役、評価が高いですね。',en:"The Maria role got high reviews.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'はい。脚本はホームズシリーズの翻訳者でもある人物が手掛けています。',en:"Yes. Script by a Holmes-series translator too.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'監督のトニーさん、カメラマン出身ですよね。',en:"Director Tony came from cinematography.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'フォード財団から、研究助成も入っているそうですよ。',en:"Ford-Foundation research funding too, they say.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'劇中の経済対話、マルクス的視点もあって、勉強になります。',en:"In-film economic dialogue with Marxist angles — instructive.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'国際版は、マドリッド国際映画祭でも上映されました。',en:"International cut screened at Madrid Film Fest.",style:'Reflective close.'},
  ]},
  {id:'conv_05818',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens discuss a mystery novel club',lines:[
    {speaker:'sakura_teen',jp:'ミステリー読書会、今月はホームズ特集。',en:"Mystery book club — this month, Holmes feature.",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'登場人物のマリア、女探偵が頼もしい。',en:"Maria, the female detective, is reliable.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'背景に、岡山ロケのドラマ化、企画進んでるって。',en:"Backstage — an Okayama-shot drama adaptation is moving.",style:'Animated.'},
    {speaker:'riku_teen',jp:'カメラマンのトニーさん、若手の有望株らしい。',en:"DOP Tony — a promising young talent.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'監督候補に、フォードファミリーゆかりの人も浮上中。',en:"Director candidates include a Ford-family-linked figure.",style:'Probe.'},
    {speaker:'riku_teen',jp:'マルクスの哲学を引用した台詞、面白そう。',en:"Lines quoting Marx — intriguing.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'国際展開、マドリッドのスペイン語版も計画中。',en:"Intl rollout — Madrid Spanish version planned too.",style:'Cheerful close.'},
  ]},
  {id:'conv_05819',cluster:'D',ambient:'office_quiet_low',cast:['ren_uni','hiroshi_boss'],targets:D_T,scenario:'A boss mentors a uni intern about journalism',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、地方取材で岡山行くなら、文芸サークルのマリアさん紹介する。',en:"Ren, Okayama trip — I'll intro Maria of the lit club.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。ホームズ風の推理特集、地元紙にも記事を載せたいです。',en:"Yes. Holmes-style mystery feature — want a local-paper piece too.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'同時期、映画祭審査員のトニーさんが来日する。',en:"Around then, fest-juror Tony visits Japan.",style:'Direction.'},
    {speaker:'ren_uni',jp:'カメラマンの取材も、合わせて行えそうですか。',en:"Concurrent camera-crew coverage feasible?",style:'Probe.'},
    {speaker:'hiroshi_boss',jp:'うん。フォード財団からの招聘もあって、滞在は長い。',en:"Yes. Ford-Foundation invite — long stay.",style:'Informative.'},
    {speaker:'ren_uni',jp:'背景に、マルクス経済学の議論もあるそうで、文化欄にも。',en:"Marxist-economics debate in the background — culture-page too.",style:'Curious.'},
    {speaker:'hiroshi_boss',jp:'マドリッドからの中継、編集と調整しろ。',en:"Madrid live link — coordinate with editing.",style:'Close.'},
  ]},
  {id:'conv_05820',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan an international tasting',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、夏フェア、岡山の桃を使うのも、ええんちゃう?',en:"Aoi-san, summer fair — Okayama peaches, good?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'いいですね。仏人のマリアさん、毎年来店してくれるお客様。',en:"Lovely. Maria, our French regular each year.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'コラボで、ホームズ風のミステリー演出、ええなあ。',en:"Collab — Holmes-style mystery vibe — fun.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'写真は、有名カメラマンのトニーさん、依頼してみます。',en:"Photos — try famed DOP Tony.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'本場の料理、フォード家ゆかりのアメリカン風も入れたいな。',en:"Authentic — add Ford-family American notes too.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'マルクス系の経済学カフェ、別店舗で連動できそう。',en:"Marxist-economics cafe — link via sister branch.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'マドリッドの本店から、調味料、輸入してこか。',en:"Import seasonings from the Madrid main shop?",style:'Close.'},
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

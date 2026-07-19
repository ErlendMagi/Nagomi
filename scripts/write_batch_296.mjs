import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_296 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['悲鳴','若き','のぞい','いただか','むろん','彦','晃','泰']
const B_T = ['（株）','小生','亭','竹中','ニッポン放送','世田谷','キャピタル','人組']
const C_T = ['竹島','南京','テポドン','フセイン','正日','日の丸','猪瀬','姉歯']
const D_T = ['オシム','水木','カズ','圓','聡','孝','淳','東ティモール']

const data = [
  // A
  {id:'conv_05881',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat after watching a film',lines:[
    {speaker:'sho_child',jp:'ママ、映画の最後、悲鳴の場面、怖かった!',en:"Mom, the scream scene at the end was scary!",style:'Wide-eyed child.'},
    {speaker:'yumiko_mom',jp:'若き俳優の演技、迫力あったわね。',en:"The young actor's acting had power.",style:'Warm.'},
    {speaker:'sho_child',jp:'廊下からのぞいてた人物、誰だったんだろう。',en:"Who was the figure peeking from the hall?",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'お父さんからは、解説聞いていただかなきゃね。',en:"Should ask Dad for the explanation.",style:'Soft.'},
    {speaker:'sho_child',jp:'怖い演出、むろん技術がいるんでしょ?',en:"Scary direction surely needs skill, right?",style:'Probe.'},
    {speaker:'yumiko_mom',jp:'うん。主人公の彦って役名、印象的だったわね。',en:"Yes. The hero's name Hiko was striking.",style:'Reflective.'},
    {speaker:'sho_child',jp:'監督の晃さん、独特な人らしい。',en:"Director Akira-san seems unique.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'撮影監督は泰さん、彼の作品好きなの。',en:"DOP Yasushi-san — I love his work.",style:'Warm close.'},
  ]},
  {id:'conv_05882',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends discuss a play they saw',lines:[
    {speaker:'mei_romantic',jp:'昨夜の舞台、最後、悲鳴で幕が下りた。',en:"Last night's stage closed on a scream.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'若き役者たち、勢いあったよね。',en:"The young cast had momentum.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'袖からのぞいてたスタッフ、緊張感が伝わってきた。',en:"Staff peeking from the wings — tension felt through.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'パンフレットいただかなかったの?私も後で読みたい。',en:"Didn't grab a pamphlet? I want to read it later.",style:'Curious.'},
    {speaker:'mei_romantic',jp:'むろん貰ったわよ、後で渡すね。',en:"Of course I got one — I'll pass it.",style:'Warm.'},
    {speaker:'aoi_barista',jp:'主演の彦先輩、有名な舞台俳優だよね。',en:"Lead Hiko-senpai is a famous stage actor.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'演出の晃さんも、新進気鋭。',en:"Director Akira-san is up-and-coming too.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'制作の泰プロデューサー、頼もしいよね。',en:"Producer Yasushi is reliable.",style:'Warm close.'},
  ]},
  {id:'conv_05883',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat about a haunted house event',lines:[
    {speaker:'sakura_teen',jp:'文化祭のお化け屋敷、悲鳴がすごかった。',en:"Festival haunted house — screams were intense.",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'若き役者部、皆熱心だよな。',en:"Young theater club is all passionate.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'裏からのぞいた瞬間、しかけが見えた。',en:"From the back I peeked and saw the trick.",style:'Wry.'},
    {speaker:'riku_teen',jp:'参加賞、いただかなかった?',en:"Didn't get a participation prize?",style:'Probe.'},
    {speaker:'sakura_teen',jp:'むろん貰ったよ。担当の彦先輩からね。',en:"Of course I did — from Hiko-senpai in charge.",style:'Bright.'},
    {speaker:'riku_teen',jp:'隣のクラスの晃も、お化け役だった。',en:"Akira from the next class was a ghost.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'準備の泰先輩、徹夜で頑張ってたって。',en:"Yasushi-senpai who prepped pulled an all-nighter.",style:'Reflective close.'},
  ]},
  {id:'conv_05884',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple reminisces about classic films',lines:[
    {speaker:'hiroshi_elder',jp:'昔のホラー映画、最後の悲鳴、頭に残ってるな。',en:"Old horror films — final screams stuck in my head.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'若き俳優たちも、もう大物よね。',en:"Those young actors are now big names.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'撮影所、廊下から関係者がのぞいてた。',en:"At studios, staff peeked from corridors.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'当時のパンフ、まだ残してて、いただかなかったか確認するわ。',en:"Old pamphlets — I'll check whether we kept any.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'むろん、家のどこかにあるはずだ。',en:"Of course, somewhere at home.",style:'Calm.'},
    {speaker:'sachiko_grandma',jp:'お友達の彦さん、撮影所の常連だったわね。',en:"Hiko-san was a studio regular.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'晃監督、その後、海外でも評価された。',en:"Director Akira was later praised abroad.",style:'Warm.'},
    {speaker:'sachiko_grandma',jp:'プロデューサーの泰さんも、お元気かしら。',en:"Wonder if Yasushi-san's still doing well.",style:'Warm close.'},
  ]},
  {id:'conv_05885',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai and a teen chat after a film festival',lines:[
    {speaker:'ren_uni',jp:'桜、映画祭の悲鳴のシーン、覚えてる?',en:"Sakura, remember the festival's scream scene?",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい!若き監督の作品でしたよね。',en:"Yes! From a young director's piece.",style:'Earnest teen.'},
    {speaker:'ren_uni',jp:'裏からのぞいた制作陣、見えたよな。',en:"You could spot the crew peeking from the back.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'記念のチラシ、いただかなかったの、私。',en:"I didn't grab the souvenir flyer.",style:'Wry.'},
    {speaker:'ren_uni',jp:'むろん、二枚もらった。後で渡す。',en:"Of course — got two; pass one later.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'主演の彦さん、年齢の割に味わい深かったです。',en:"Lead Hiko-san had depth for his age.",style:'Probe.'},
    {speaker:'ren_uni',jp:'演出の晃も、構成うまかった。',en:"Director Akira composed well.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'撮影スタッフの泰さんが、解説してくれましたよね。',en:"Crew member Yasushi-san explained, right?",style:'Warm close.'},
  ]},

  // B
  {id:'conv_05886',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews investor relations',lines:[
    {speaker:'hiroshi_boss',jp:'四半期報告、小生の名で送る前に、書類を確認させてくれ。',en:"Quarterly — let me verify docs before sending in my name.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。表紙、サムライ亭での懇親会写真、入れています。',en:"Yes. Cover includes a Samurai-tei reception photo.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'竹中代議士のコメント、ニッポン放送で流れた音源も、参照しろ。',en:"MP Takenaka's comment, Nippon Hoso audio — reference too.",style:'Direction.'},
    {speaker:'kenji_office',jp:'本社（株）の世田谷オフィス、案内文に明記しました。',en:"HQ's Setagaya office — noted in the invitation.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'キャピタル経由の資金、3人組の役員でしっかり管理を。',en:"Capital-routed funds — three-officer team, tight management.",style:'Decisive close.'},
  ]},
  {id:'conv_05887',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss a partnership',lines:[
    {speaker:'yuki_office',jp:'契約書、当社（株）小川商会との提携、最終版を回そう。',en:"Contract — partnership with K.K. Ogawa-Shokai, send final.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。小生、ドラフトを準備しました。',en:"Yes. I prepared the draft.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'記念会食は、九段亭で開く。',en:"Celebratory meal — at Kudan-tei.",style:'Direction.'},
    {speaker:'kenji_office',jp:'広報、竹中担当、ニッポン放送系メディアを当てます。',en:"PR — Takenaka leads, hitting Nippon-Hoso-side media.",style:'Update.'},
    {speaker:'yuki_office',jp:'世田谷支店も、キャピタル提携先として、3人組の幹部で対応。',en:"Setagaya branch — three-officer team handles capital partners.",style:'Close.'},
  ]},
  {id:'conv_05888',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、我が（株）の歴史、語ろうか。',en:"Ren, shall I tell our K.K. history?",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい、是非。小生のような後輩には貴重な機会です。',en:"Yes please. A precious chance for a junior like me.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'創業期、社員みんなで九段亭に集まったよ。',en:"Founding days — all hands at Kudan-tei.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'創業者の竹中さん、ニッポン放送のラジオ番組にも出演されていたとか。',en:"Founder Takenaka also appeared on Nippon-Hoso radio.",style:'Curious.'},
    {speaker:'hiroshi_boss',jp:'うん。世田谷の本社、当時は小さな建物だった。',en:"Yes. Setagaya HQ was a small building then.",style:'Wistful.'},
    {speaker:'ren_uni',jp:'初期キャピタル、3人組の発起人で集めたんですか。',en:"Initial capital — raised by the three-founder team?",style:'Probe.'},
    {speaker:'hiroshi_boss',jp:'そう。粘り強さが、今の礎だ。',en:"Yes. Tenacity is today's foundation.",style:'Warm close.'},
  ]},
  {id:'conv_05889',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on financial-fraud risks',lines:[
    {speaker:'takeda_officer',jp:'御社（株）の金融取引、警察庁ガイドラインに準拠してください。',en:"Your K.K.'s finance dealings — comply with NPA guidelines.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。小生が、対応窓口です。',en:"Yes. I'm the contact.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'過去事例、九段亭での会食を悪用した詐欺、参考にしてください。',en:"Past cases — fraud abusing Kudan-tei dinners — for reference.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'竹中先生にも、ニッポン放送経由で警鐘を頂きました。',en:"From MP Takenaka, via Nippon-Hoso, a warning too.",style:'Update.'},
    {speaker:'takeda_officer',jp:'世田谷オフィスの監視カメラ、キャピタル取引にも対応する2人組体制で。',en:"Setagaya cams — two-staff system for capital-deal coverage.",style:'Procedural close.'},
  ]},
  {id:'conv_05890',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors on succession',lines:[
    {speaker:'hiroshi_elder',jp:'我が（株）も、創業から長いな。',en:"Our K.K. — long since founding.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。小生も、引き継ぎを意識しています。',en:"Yes. I'm conscious of succession.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'創業の九段亭、まだ営業してるか。',en:"Founding-era Kudan-tei — still open?",style:'Reflective.'},
    {speaker:'hiroshi_boss',jp:'はい。竹中先生も、ニッポン放送の番組で当時を語っていました。',en:"Yes. MP Takenaka spoke of old days on Nippon-Hoso.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'世田谷の本社、若手が中心に。キャピタル管理、3人組の重鎮で守れ。',en:"Setagaya HQ — youth-centered. Capital control by a three-veteran core.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'承知しました。',en:"Understood.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_05891',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses an East Asian history class',lines:[
    {speaker:'asuka_teacher',jp:'近現代史、竹島問題、南京事件、両方扱う章、難しいですね。',en:"Modern history — Takeshima and Nanjing — hard chapters.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。北朝鮮のテポドン発射、金正日体制下の出来事として、年表に入っています。',en:"Yes. NK's Taepodong launch under Kim Jong-il appears in the timeline.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'イラクのフセイン政権、当時の国際情勢の中で考察します。',en:"Iraq's Hussein regime — analyzed in the international context.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'国内では、日の丸の議論、教育現場で長く続いてきました。',en:"Domestically, hi-no-maru debates persisted in education.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'当時の都知事猪瀬氏の発言、参考資料に入れています。',en:"Then-Governor Inose's remarks are included as references.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'姉歯事件のような建築偽装の章も、同時期の社会不安として扱われていますね。',en:"Anehae-style building fraud also figures as period social unrest.",style:'Curious close.'},
  ]},
  {id:'conv_05892',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a reporter about national-security topics',lines:[
    {speaker:'takeda_officer',jp:'竹島周辺の警備、海保と連携で対応しています。',en:"Takeshima security — coordinated with the Coast Guard.",style:'Calm.'},
    {speaker:'ren_uni',jp:'歴史的に、南京事件のような事案、国際関係に響きますね。',en:"Historically, Nanjing-incident issues reverberate internationally.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'近年は、テポドンなどミサイル絡みの警戒も強化。',en:"Lately, Taepodong-class missile-related vigilance is strong.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'金正日時代から、続く課題なんですね。',en:"Issues continuing from the Kim Jong-il era.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'国際的には、フセイン政権崩壊後の中東情勢も、警察学校で学びます。',en:"Internationally, post-Hussein Mideast taught at the academy.",style:'Informative.'},
    {speaker:'ren_uni',jp:'国内行事での日の丸、警備対象でしたよね。',en:"At domestic events, the hi-no-maru is a protection target, right?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。過去、猪瀬氏の都政期、姉歯事件への対応も、警察庁が関与しました。',en:"Yes. In Inose's governorship, NPA was involved in the Anehae case too.",style:'Procedural close.'},
  ]},
  {id:'conv_05893',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher and a teen review a project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、地域研究、竹島問題、現代史の重要章ですね。',en:"Sakura, regional studies — Takeshima is a key modern-history chapter.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。隣国との外交、南京事件の研究も、慎重に進めています。',en:"Yes. Foreign relations and Nanjing-incident research — handled carefully.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'軍事面では、テポドン発射の年表、整理できましたか。',en:"Militarily, Taepodong-launch timeline organized?",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。金正日時代を含めて、年代別に並べました。',en:"Yes. Including the Kim Jong-il era, by year.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'国際情勢として、フセイン政権の章も比較対象です。',en:"Internationally, the Hussein-regime chapter is a comparison.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'卒業式の日の丸、議論を呼ぶこともあるんですね。',en:"Graduation hi-no-maru sometimes sparks debate.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'都政では、猪瀬氏の例、姉歯事件への対応、現代を学ぶ視点です。',en:"In Tokyo politics — the Inose case and Anehae-response — modern lenses.",style:'Reflective close.'},
  ]},
  {id:'conv_05894',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews international risk reports',lines:[
    {speaker:'hiroshi_boss',jp:'国際情勢、竹島と南京関連、両方フォローしておけ。',en:"Intl situation — Takeshima and Nanjing — both followed.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。北朝鮮の動向、テポドン発射履歴、データ化しています。',en:"Yes. NK trends — Taepodong-launch history, digitized.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'金正日時代からの連続性、レポートに記載しろ。',en:"Continuity from Kim Jong-il era — record in the report.",style:'Direction.'},
    {speaker:'kenji_office',jp:'中東リスク、フセイン政権崩壊後の混乱も、参照しています。',en:"Mideast risk — post-Hussein turmoil — referenced too.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'国内では、日の丸を含む式典のセキュリティ、再点検しろ。',en:"Domestically, hi-no-maru-included ceremonies — re-check security.",style:'Decisive.'},
    {speaker:'kenji_office',jp:'過去事例、猪瀬都政、姉歯偽装、リスク管理に活用しています。',en:"Past cases — Inose Tokyo politics, Anehae fraud — used for risk mgmt.",style:'Close.'},
  ]},
  {id:'conv_05895',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher and student discuss a documentary about modern East Asia',lines:[
    {speaker:'asuka_teacher',jp:'昨夜の番組、竹島から南京、近現代の難所を扱っていましたね。',en:"Last night's show covered modern hardships from Takeshima to Nanjing.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。テポドン発射の歴史、金正日時代の章、見応えありました。',en:"Yes. Taepodong-launch history, Kim Jong-il chapter — gripping.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'国際比較として、フセイン政権の章、研究者が出演していました。',en:"For intl comparison, scholars on Hussein-regime appeared.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'国内の象徴として、日の丸の章、丁寧でした。',en:"As a domestic symbol, the hi-no-maru chapter was careful.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'都政の事例、猪瀬氏、姉歯事件への都の対応、参考に。',en:"Tokyo cases — Inose, Anehae — Tokyo response, references.",style:'Reflective close.'},
  ]},

  // D
  {id:'conv_05896',cluster:'D',ambient:'stadium_distant_crowd',cast:['riku_teen','ryosuke_dad'],targets:D_T,scenario:'A teen and his dad watch sports highlights',lines:[
    {speaker:'riku_teen',jp:'お父さん、オシム監督の戦術論、伝説だよね。',en:"Dad, Coach Osim's tactical theory is legendary.",style:'Excited teen.'},
    {speaker:'ryosuke_dad',jp:'うん。水木しげるの漫画、世代を越えて読まれてる。',en:"Yes. Mizuki Shigeru's manga reads across generations.",style:'Warm dad.'},
    {speaker:'riku_teen',jp:'カズ選手、まだ現役なんでしょ?',en:"Kazu — still playing, right?",style:'Animated.'},
    {speaker:'ryosuke_dad',jp:'うん。鶴ヶ岡圓蔵の落語、たまに聞くと味があるな。',en:"Yes. Listening to Tsurugaoka Enzo's rakugo has flavor.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'同じクラスの聡くん、サッカー始めたって。',en:"Classmate Satoshi started soccer.",style:'Bright.'},
    {speaker:'ryosuke_dad',jp:'孝くんは、ピアノ続けてるよな。',en:"Takashi keeps playing piano.",style:'Calm.'},
    {speaker:'riku_teen',jp:'淳くんは、書道で全国大会らしい。',en:"Atsushi — calligraphy nationals, I hear.",style:'Probe.'},
    {speaker:'ryosuke_dad',jp:'国際チャリティでは、東ティモールへの支援、続いてるよ。',en:"Intl charity — East Timor support continues.",style:'Reflective close.'},
  ]},
  {id:'conv_05897',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends discuss varied cultural interests',lines:[
    {speaker:'mei_romantic',jp:'オシム氏のドキュメンタリー、感動的だった。',en:"Osim's doc was moving.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'うん。水木プロのアニメ化作品、家でも観てる。',en:"Yes. Watching Mizuki-pro anime adaptations at home.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'カズのインタビュー、新聞でよく出るね。',en:"Kazu's interviews — often in papers.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'寄席で、圓楽師匠の高座も観に行きたい。',en:"At the yose, want to see Master Enraku perform too.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'弟の聡が、最近落語にハマってる。',en:"My brother Satoshi is into rakugo lately.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'隣の孝さんは、書のお弟子さんとして頑張ってる。',en:"Neighbor Takashi works as a calligraphy apprentice.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'写真展で、淳さんの作品、ぜひ見たい。',en:"At the photo show — wanna see Atsushi's work.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'夏は、東ティモールの料理フェア、楽しみだね。',en:"Summer — East Timor food fair, exciting.",style:'Warm close.'},
  ]},
  {id:'conv_05898',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher and student discuss a documentary on legends',lines:[
    {speaker:'asuka_teacher',jp:'昨夜のドキュメンタリー、オシム監督と、文化人の対話、面白かったですね。',en:"Last night's doc — Osim and culture figures' dialogues, fun.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。水木しげるの戦争体験、深いお話でした。',en:"Yes. Mizuki Shigeru's war experience was deep.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'スポーツ界、カズのキャリアの長さ、特筆ですね。',en:"In sports, Kazu's career length is notable.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'伝統芸能では、圓師匠の名跡継承、章として扱われていました。',en:"In traditional arts, Master En's stage-name succession was a chapter.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'若手では、聡氏、孝氏、淳氏の三世代評論、興味深かったですね。',en:"Among the young — Satoshi, Takashi, Atsushi — three-gen critique was intriguing.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'海外支援、東ティモール独立後の章も含まれていました。',en:"Overseas aid — included a post-independence East Timor chapter too.",style:'Curious close.'},
  ]},
  {id:'conv_05899',cluster:'D',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:D_T,scenario:'A senpai introduces sports/culture topics to a teen',lines:[
    {speaker:'ren_uni',jp:'桜、オシムの言葉、サッカー界では金言だ。',en:"Sakura, Osim's words are golden in soccer.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。水木先生の妖怪漫画、私も読んでます。',en:"Yes. Mizuki-sensei's yokai manga — I read too.",style:'Earnest teen.'},
    {speaker:'ren_uni',jp:'カズの長期キャリア、見習いたいな。',en:"Kazu's long career — I want to emulate.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'寄席にも興味あって、圓朝師匠の名前、聞いたことあります。',en:"Curious about yose — heard the name Master Enchō too.",style:'Bright.'},
    {speaker:'ren_uni',jp:'うちの大学に、聡先輩、孝先輩、淳先輩、芸事好きの集まりがある。',en:"At my uni — Satoshi, Takashi, Atsushi-senpai, an arts-lovers group.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'国際協力のサークルも、東ティモールに毎年行ってるそうですね。',en:"The intl-cooperation club goes to East Timor every year.",style:'Curious close.'},
  ]},
  {id:'conv_05900',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces about culture and sports',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃のサッカー観戦、オシム氏の解説、楽しかった。',en:"Watching soccer in youth — Osim's commentary was fun.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'水木先生の漫画、子供たちが熱心に読んでたわね。',en:"Our kids read Mizuki-sensei's manga keenly.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'カズの試合、まだテレビで観られる、ありがたい。',en:"Kazu's matches — still on TV, grateful.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'落語の圓師匠、晩年も精力的だったわね。',en:"Master En in rakugo — vigorous in late years.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'息子の名は聡。甥の孝、弟の淳、世代をつないでくれる。',en:"Our son's name is Satoshi; nephew Takashi, brother Atsushi — bridging generations.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'海外ボランティアで、東ティモールに行った孫もいたわね。',en:"A grandkid went to East Timor as a volunteer too.",style:'Tender close.'},
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

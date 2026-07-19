import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_290 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['ぢ','四つ','十一月','建てる','身内','本名','瀬','山中']
const B_T = ['東証','スミス','代目','号線','密着','遠藤','田村','高田']
const C_T = ['澤','藩','狂っ','秘め','消極','格段','懇親','突っ込み']
const D_T = ['オール','まき','捧げ','未熟','ルイ','聴衆','準決勝','脱線']

const data = [
  // A
  {id:'conv_05761',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple plans home repairs and family visits',lines:[
    {speaker:'hiroshi_elder',jp:'十一月に、息子の家族が来るって。',en:"November — our son's family visits.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。本名で呼ばずに、相変わらず「ヒロちゃん」って呼ばれるのね。',en:"Yes. Still called \"Hiro-chan,\" not by your real name.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'四つ家、増築するか、迷ってる。',en:"Adding rooms to the four-quarter house — torn.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'今のままで建てるなら、業者さんに頼みましょう。',en:"If we build now, ask the contractor.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'山中湖の別荘、夏は身内が泊まりに来るかな。',en:"Lake Yamanaka villa — family staying in summer?",style:'Soft.'},
    {speaker:'sachiko_grandma',jp:'川の瀬の音、孫が喜ぶわよ。',en:"Shallow river sounds — grandkids love them.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お尻のぢ、また気になるんだ、最近。',en:"My hemorrhoid is acting up again recently.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'お医者に診てもらってね。',en:"Get it checked by a doctor.",style:'Warm close.'},
  ]},
  {id:'conv_05762',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son plan a winter family trip',lines:[
    {speaker:'sho_child',jp:'ママ、十一月、おじいちゃんちに泊まるんでしょ?',en:"Mom, in November we stay at Grandpa's, right?",style:'Excited.'},
    {speaker:'yumiko_mom',jp:'うん。山中の別荘、新しく建てる相談もあるみたい。',en:"Yes. They're considering building a new mountain cabin.",style:'Warm.'},
    {speaker:'sho_child',jp:'四つ、いとこが集まるって。本名で覚えなきゃ。',en:"Four cousins gathering. Gotta learn their real names.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'身内ばかりで、にぎやかね。',en:"All family — lively.",style:'Bright.'},
    {speaker:'sho_child',jp:'川の瀬で、石投げ遊びしたい。',en:"Want to skip stones in the river shallows.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お父さんは、ぢが悪化したから、無理しないでって伝えてね。',en:"Tell Dad to take it easy — his hemorrhoids flared.",style:'Soft close.'},
  ]},
  {id:'conv_05763',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends plan a family gathering',lines:[
    {speaker:'mei_romantic',jp:'十一月、本家で身内が集まるの。',en:"November — family gathers at the main house.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'いいね。お父様、新居を建てる予定でしょ。',en:"Lovely. Your dad's building a new home, right?",style:'Warm.'},
    {speaker:'mei_romantic',jp:'うん。四つ部屋増やすって。',en:"Yes. Adding four rooms.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'親戚、皆さん、本名で呼ぶ習慣?',en:"All called by real names there?",style:'Curious.'},
    {speaker:'mei_romantic',jp:'うん。山中湖のほとりにある、川の瀬を見渡せる立地なの。',en:"Yes. By Lake Yamanaka, overlooking the river shallows.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'お母様、また持病のぢ、つらそうって言ってたよね。',en:"Your mom said hemorrhoids were tough again, right?",style:'Concerned.'},
    {speaker:'mei_romantic',jp:'うん、今度、薬持って行く。',en:"Yes — taking medicine over.",style:'Warm close.'},
  ]},
  {id:'conv_05764',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens plan a school trip',lines:[
    {speaker:'sakura_teen',jp:'十一月の修学旅行、山中湖、行くんだって。',en:"November school trip — Lake Yamanaka.",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'いいな。仮設のロッジ、四つ建てるって聞いた。',en:"Nice. Heard they'll build four temp lodges.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'生徒名簿、本名で記入だよね。',en:"Roster — by real name, right?",style:'Probe.'},
    {speaker:'riku_teen',jp:'うん。先生は身内みたいに親しいけど、書類は正式に。',en:"Yeah. Teachers feel like family, but paperwork's formal.",style:'Practical.'},
    {speaker:'sakura_teen',jp:'川の瀬まで歩く時間、楽しみ。',en:"Walking to the shallows is the highlight.",style:'Animated.'},
    {speaker:'riku_teen',jp:'おじいちゃん、最近ぢが悪化して、出てこられないらしい。',en:"My grandpa's hemorrhoids worsened — can't come out.",style:'Subdued.'},
    {speaker:'sakura_teen',jp:'お土産買って帰ろう。',en:"Let's bring back a souvenir.",style:'Warm close.'},
  ]},
  {id:'conv_05765',cluster:'A',ambient:'living_room_quiet',cast:['ryosuke_dad','yumiko_mom'],targets:A_T,scenario:'A couple discusses winter plans',lines:[
    {speaker:'ryosuke_dad',jp:'今年の十一月、実家を建てる工事、始まる予定。',en:"This November, family-home build starts.",style:'Easy dad.'},
    {speaker:'yumiko_mom',jp:'うん。身内総出で、山中の現場を見に行きましょう。',en:"Yes — family-wide, go see the Yamanaka site.",style:'Warm.'},
    {speaker:'ryosuke_dad',jp:'設計図、四つ案あるんだ。',en:"Plans — four options.",style:'Practical.'},
    {speaker:'yumiko_mom',jp:'本名で契約書を出さないとね。',en:"Contract needs real-name signing.",style:'Soft.'},
    {speaker:'ryosuke_dad',jp:'川の瀬まで、歩いて行ける距離だぞ。',en:"Within walking distance to the river shallows.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'お義父さんのぢ、現場行く前に診てもらわなきゃ。',en:"Father-in-law's hemorrhoids — checkup before the site visit.",style:'Concerned close.'},
  ]},

  // B
  {id:'conv_05766',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss and his manager review a listing',lines:[
    {speaker:'hiroshi_boss',jp:'うちの会社、東証上場、三代目で実現か。',en:"Our firm — TSE listing realized under the third generation.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。引受主幹事のスミス証券、密着して支援してくれます。',en:"Yes. Smith Securities, the lead, closely supports us.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'広報、遠藤さんに引き続き任せる。',en:"PR — Endo continues lead.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。田村さんが、IR資料を担当します。',en:"Yes. Tamura handles IR materials.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'本社、移転先は新青梅街道沿い、5号線近くだったな。',en:"HQ move-target — along New Ome Highway, near Route 5.",style:'Brief.'},
    {speaker:'kenji_office',jp:'はい。物流の高田さん、地理に強いので相談を。',en:"Yes. Logistics' Takada is strong on geography — consult.",style:'Methodical close.'},
  ]},
  {id:'conv_05767',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss an IPO plan',lines:[
    {speaker:'yuki_office',jp:'東証グロース、上場予定の発表、来週ね。',en:"TSE Growth — listing announcement next week.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。スミスさん、当社四代目社長との会食を組みました。',en:"Yes. Smith-san — set a dinner with our fourth-gen president.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'メディア対応、密着取材、遠藤さんが指揮を取る。',en:"Media — close coverage, Endo leads.",style:'Direction.'},
    {speaker:'kenji_office',jp:'田村さん、高田さんもサポートに入ります。',en:"Tamura, Takada support too.",style:'Update.'},
    {speaker:'yuki_office',jp:'本社移転、首都高3号線アクセスも訴求しよう。',en:"HQ move — promote Metropolitan Route 3 access.",style:'Close.'},
  ]},
  {id:'conv_05768',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss explains a listing process to a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、東証上場、企業の節目だ。',en:"Ren, TSE listing is a corporate milestone.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'三代目社長のもと、外国人投資家との関係も築かれたんですね。',en:"Under the third-gen, ties with foreign investors were forged.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'うん。引受主幹事のスミス、密着で支援。社内も、遠藤・田村・高田と、横断で動かす。',en:"Yes. Smith as lead, closely supports. Internally, Endo, Tamura, Takada cross-move.",style:'Informative.'},
    {speaker:'ren_uni',jp:'本社移転、何号線沿いを選ばれるんですか。',en:"HQ move — which route side?",style:'Curious.'},
    {speaker:'hiroshi_boss',jp:'立地と顧客、両面で検討中だ。',en:"Location and customers — both under review.",style:'Close.'},
  ]},
  {id:'conv_05769',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on financial-crime regulations',lines:[
    {speaker:'takeda_officer',jp:'東証上場直後、不正取引の警戒対象になります。',en:"Just after TSE listing, fraud-trade watch begins.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。スミス証券、コンプライアンスも密着でサポートしてくれます。',en:"Yes. Smith Securities supports compliance closely too.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'広報、遠藤さんとの連携、田村さんも交えて頂きたい。',en:"PR — coordinate with Endo, include Tamura too.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。高田さん、地域連絡、号線別の警備に強いです。',en:"Yes. Takada is strong on regional liaison and route-by-route security.",style:'Update.'},
    {speaker:'takeda_officer',jp:'うちの三代目署長も、御社の四代目に挨拶を希望しています。',en:"Our 3rd-gen chief wants to greet your 4th-gen.",style:'Procedural close.'},
  ]},
  {id:'conv_05770',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec advises on growth',lines:[
    {speaker:'hiroshi_elder',jp:'東証上場、若い頃の私の夢でもあった。',en:"TSE listing was a young-me dream too.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'三代目で実現、感慨深いです。',en:"Realized under the third gen — deeply moving.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'スミス証券との関係、密着しすぎず、距離を保て。',en:"With Smith Securities, don't get too close; keep distance.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'遠藤、田村、高田、皆若手として鍛えています。',en:"Endo, Tamura, Takada — all trained as young talent.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'本社移転、号線アクセスより、人材の通勤を考えろ。',en:"HQ move — over route access, consider staff commute.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_05771',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher and student discuss a historical paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、澤家に伝わる藩士の資料、丁寧に扱っていますね。',en:"Your paper handles the Sawa-family han-vassal materials carefully.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。狂った時代と評されながらも、人々が秘めた信念を浮き彫りに。',en:"Yes. In an era called mad, surfaces the beliefs people held inside.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'消極的な立場の人物、丁寧に描いている章、格段に説得力ありますね。',en:"Chapters on passive figures are markedly persuasive.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'懇親会で、地元の郷土史家にお話を伺えました。',en:"At a get-together I heard from local-history experts.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'査読の突っ込み、明日対応しましょう。',en:"Reviewer pushes — handle tomorrow.",style:'Reflective close.'},
  ]},
  {id:'conv_05772',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs about a historical case',lines:[
    {speaker:'takeda_officer',jp:'長期未解決の事件、澤家との関わりも噂されていました。',en:"A long-unsolved case had rumored Sawa-family ties.",style:'Calm.'},
    {speaker:'ren_uni',jp:'当時の旧藩社会、秘めた利害が狂った行動を生んだ可能性は?',en:"In old han society, did hidden interests fuel mad acts?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'消極的な証言が多く、捜査は格段に難航しました。',en:"Many passive testimonies — investigation hit major hurdles.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'郷土史家との懇親、突っ込み所が見つかりますか。',en:"At local-history gatherings, were holes found?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。地道に積み上げます。',en:"Yes. Built up plainly.",style:'Firm close.'},
  ]},
  {id:'conv_05773',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a project on local history',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、地元の藩政時代、澤家文書、ご覧になりましたか。',en:"Sakura, did you see the Sawa-family documents from han times?",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。狂気の時代と呼ばれた章、秘めた葛藤が描かれています。',en:"Yes. The chapter named the mad era depicts hidden conflicts.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'発表で、消極的な人物像、格段に印象に残ります。',en:"In your talk, passive characters leave a marked impression.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'懇親会で、地元の方の突っ込みも、勉強になります。',en:"At gatherings, locals' challenges are instructive.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'文献は、慎重にね。',en:"Source carefully.",style:'Reflective close.'},
  ]},
  {id:'conv_05774',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews a press response',lines:[
    {speaker:'hiroshi_boss',jp:'今回の報道、澤社長時代の旧藩発祥のグループ会社にまで及んでいる。',en:"Press extends to group firms with old-han origin under Pres. Sawa.",style:'Concerned boss.'},
    {speaker:'kenji_office',jp:'はい。狂った数字、と書かれた表現、秘めた背景があります。',en:"Yes. \"Mad numbers\" framing — has hidden background.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'消極的な姿勢が、格段に誤解を生んでいる。',en:"Passive stance markedly invites misunderstanding.",style:'Direction.'},
    {speaker:'kenji_office',jp:'記者懇親会で、突っ込みを正面から受けます。',en:"At press gatherings, face their challenges head-on.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'よし、進めよう。',en:"Good, proceed.",style:'Close.'},
  ]},
  {id:'conv_05775',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher and student discuss a museum exhibition',lines:[
    {speaker:'asuka_teacher',jp:'昨日の特別展、澤氏の旧藩収蔵品、見応えがありましたね。',en:"Yesterday's special show — Sawa's old-han collection was striking.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。狂った時代と呼ぶ研究者もいる中、秘めた美意識を再評価。',en:"Yes. While some call it mad-era, hidden aesthetics get reassessed.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'解説は控えめで、消極的に見える章もありましたが、格段の説得力。',en:"Captions modest — even passive-looking chapters had marked force.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'閉館後の懇親、現場の方からの突っ込み、勉強になりました。',en:"Post-close gathering, staff's challenges were instructive.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'良い展示でした。',en:"A fine show.",style:'Reflective close.'},
  ]},

  // D
  {id:'conv_05776',cluster:'D',ambient:'stadium_distant_crowd',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens at a sports tournament',lines:[
    {speaker:'sakura_teen',jp:'準決勝、進めたの、すごい!',en:"Reached the semis — amazing!",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'うん。ボートはオール揃えてないと、息を合わせるのが難しい。',en:"Yeah. Rowing — without oars in sync, hard to match breaths.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'試合の途中、緊張で脱線して笑ったよね。',en:"Mid-match, tense and off-rail-laughed, right?",style:'Animated.'},
    {speaker:'riku_teen',jp:'コーチが、まだ未熟な部分もあるって言ってた。',en:"Coach said still-immature areas remain.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'観客に向けて、勝利を捧げよう。',en:"Let's dedicate the win to the audience.",style:'Bright.'},
    {speaker:'riku_teen',jp:'まきストーブが温かいロビー、聴衆の声も響いてたね。',en:"In the wood-stove-warm lobby, audience voices rang too.",style:'Wistful.'},
    {speaker:'sakura_teen',jp:'交換留学のルイ君も、応援に来てくれた。',en:"Exchange student Louis came to cheer.",style:'Cheerful close.'},
  ]},
  {id:'conv_05777',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher and student discuss a documentary on music',lines:[
    {speaker:'asuka_teacher',jp:'若手指揮者の特集、準決勝のオーディションが描かれていました。',en:"Young conductors feature — semi-final auditions depicted.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。オールスター級のオケが、彼に捧げる演奏、感動的でした。',en:"Yes. All-star orchestra dedicates a performance to him — moving.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'本人、まだ未熟と謙遜していましたね。',en:"He humbly said still immature.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'まきの薪を焚く山小屋で、特訓するシーンも。',en:"In a firewood-burning mountain hut, intense training too.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'聴衆の歓声、ルイ・ホールでの最終演奏、印象的でした。',en:"Audience cheers — finals at Louis Hall — striking.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'コメント、たまに脱線していて、人間味がありましたね。',en:"His comments sometimes derailed — humanizing.",style:'Warm close.'},
  ]},
  {id:'conv_05778',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends discuss a concert event',lines:[
    {speaker:'mei_romantic',jp:'昨夜のコンサート、聴衆の熱量がすごかった。',en:"Last night's concert — crowd intensity wild.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'準決勝に進んだ若手バンドの演奏、よかった?',en:"Was the semi-finalist young band's set good?",style:'Soft.'},
    {speaker:'mei_romantic',jp:'うん。最後の曲、ファンに捧げると言って、しみじみ。',en:"Yes. Closing song dedicated to fans — touching.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'MCで脱線するボーカル、面白かったよね。',en:"Vocalist derailed in MCing — fun.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'まだ未熟、と謙遜してたけど、十分プロ。',en:"They humbly said immature, but plenty pro.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'ボートのオールみたいに、メンバーの息がそろってた。',en:"Like rowing oars — members' breaths in sync.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'前座のフランス人ピアニスト、ルイさんも素敵だった。',en:"Opener — Louis the French pianist — also wonderful.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'まきストーブの店、終演後、寄ろう。',en:"Wood-stove cafe — let's stop in after.",style:'Warm close.'},
  ]},
  {id:'conv_05779',cluster:'D',ambient:'street_quiet_distant',cast:['ren_uni','sakura_teen'],targets:D_T,scenario:'A senpai and a teen discuss a writing club\'s anniversary',lines:[
    {speaker:'ren_uni',jp:'文芸クラブ、創立記念誌、聴衆に向けて朗読会開くんだ。',en:"Lit club's anniversary issue — reading event for the audience.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'準決勝みたいに、緊張感ありますね。',en:"Semi-final-like tension.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'創設者ルイさん、創部時から捧げた情熱、すごい。',en:"Founder Louis — passion dedicated since day one, immense.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'まだ未熟な後輩部員、しっかり育てましょうね。',en:"Still-immature juniors — nurture them well.",style:'Bright.'},
    {speaker:'ren_uni',jp:'打ち合わせ、よく脱線して笑い起きる。',en:"Meetings often derail to laughter.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'まきの絵入り表紙、来年の記念誌で採用したい。',en:"Wanting woodcut-illustrated covers for next year.",style:'Animated.'},
    {speaker:'ren_uni',jp:'いいね。皆でオールを揃えて漕ぐみたいに、進めよう。',en:"Nice. Like rowing in unison, push forward.",style:'Warm close.'},
  ]},
  {id:'conv_05780',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan a tournament-themed cafe day',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、準決勝の応援デー、店でフェアやらん?',en:"Aoi-san, semi-final cheer day — fair at your shop?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'いいですね。観戦の聴衆向けに、特別メニュー、捧げる気持ちで作ります。',en:"Yes. For the watching crowd, a special menu, made dedicated.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'店内BGM、ボートのオール漕ぎ動画と連動させよか。',en:"BGM tied to rowing-oar videos.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'うちのバリスタ、まだ未熟ですけど、一生懸命淹れます。',en:"Our barista is still green, but brews earnestly.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'まきの薪で焼くパン、香りで集客できる。',en:"Firewood-baked bread — aroma draws crowds.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'仏人客のルイ様、毎週いらっしゃるので、特別席用意します。',en:"Louis-sama, the French regular, every week — prep a special seat.",style:'Warm.'},
    {speaker:'daichi_kansai',jp:'打ち合わせ、脱線せんようにせなな。',en:"Don't let the meeting derail.",style:'Wry close.'},
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

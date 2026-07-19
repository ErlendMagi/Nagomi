import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_305 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['合図','当てる','早くから','年配','誉め','会わ','刺し','掛ける']
const B_T = ['毀損','百科','後編','運搬','ネック','選別','結びつける','招か']
const C_T = ['転倒','手当て','灰色','大小','スカイ','ナビ','相手方','袖']
const D_T = ['カプセル','新潮社','リボン','ハガキ','シンガー','スティング','ムシ','喋っ']

const data = [
  // A
  {id:'conv_06061',cluster:'A',ambient:'park_distant_birds',cast:['ryosuke_dad','sho_child'],targets:A_T,scenario:'A dad and son play catch',lines:[
    {speaker:'ryosuke_dad',jp:'翔、合図したらキャッチね。',en:"Sho, catch when I signal.",style:'Easy dad.'},
    {speaker:'sho_child',jp:'うん!ボールを真ん中に当てるよ!',en:"Yes! Hit the center!",style:'Bright child.'},
    {speaker:'ryosuke_dad',jp:'朝早くから来てよかったな。',en:"Glad we came early.",style:'Calm.'},
    {speaker:'sho_child',jp:'隣の年配のおじいちゃんも、見てたね。',en:"The elderly grandpa next door watched too.",style:'Casual.'},
    {speaker:'ryosuke_dad',jp:'頑張りを、誉めてくれた。',en:"He praised your effort.",style:'Warm.'},
    {speaker:'sho_child',jp:'お母さん、まだ会わずに、お弁当作ってる?',en:"Mom hasn't joined yet — making lunch?",style:'Curious.'},
    {speaker:'ryosuke_dad',jp:'お弁当の梅干し、種を刺して串、刺さってる。',en:"Lunch — pickled plum, pit on a skewer.",style:'Wry.'},
    {speaker:'sho_child',jp:'帰りに、近所に声を掛けて、皆呼ぼう!',en:"Heading home — call neighbors over!",style:'Animated close.'},
  ]},
  {id:'conv_06062',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends share an afternoon',lines:[
    {speaker:'mei_romantic',jp:'店員さんの合図で、注文しよう。',en:"Order at the clerk's signal.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん。今日のメニュー、当てるの難しい。',en:"Yeah. Today's menu — hard to guess.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'早くから並んで、いい席取れた。',en:"Queued early — got a good seat.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'年配のお客さんに、最初の席を譲るね。',en:"Yield first seat to elderly guests.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'店長が、私たちの忍耐を誉めてくれた。',en:"Manager praised our patience.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'最近、なかなか会わない友達、ここに来てくれた。',en:"A friend I hadn't seen — came here.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'パンに梅ジャム、刺して食べると美味しいよ。',en:"Plum jam on bread — skewer it; tasty.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'外、声を掛けてくれる人が増えたね。',en:"More people calling out outside.",style:'Warm close.'},
  ]},
  {id:'conv_06063',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'うちの猫、餌の時間、合図でわかる。',en:"Our cat — signals at feeding time.",style:'Calm.'},
    {speaker:'sachiko_grandma',jp:'うん。投げたボール、見事に当てるのよ。',en:"Yes. Hits the thrown ball perfectly.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'若い頃、早くから働き始めた。',en:"In youth — started work early.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'今は、年配で、孫の世話が楽しみ。',en:"Now elderly — caring for grandkids is joy.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'近所の方が、いつも私を誉めてくれる。',en:"Neighbors always praise me.",style:'Soft.'},
    {speaker:'sachiko_grandma',jp:'今週は娘に会わない予定よ、忙しいって。',en:"Not seeing our daughter this week — she's busy.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'庭の花、つぼみを刺してみせる、孫の遊び。',en:"Garden flower — kids skewer buds; their game.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'お風呂の鍵、しっかり掛けるんですよ。',en:"Lock the bath properly.",style:'Warm close.'},
  ]},
  {id:'conv_06064',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'スマホで友達からの合図、待ってる。',en:"Waiting for friend's signal on phone.",style:'Casual teen.'},
    {speaker:'riku_teen',jp:'最近、当てる予測、外れまくり。',en:"Lately my predictions miss like crazy.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'朝早くから、塾、頑張ってる。',en:"Cram school early — pushing hard.",style:'Subdued.'},
    {speaker:'riku_teen',jp:'隣の年配のおじいちゃん、いつも挨拶してくれる。',en:"Elderly grandpa next door always greets.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'担任が、提出物を誉めてくれた。',en:"Homeroom praised my submission.",style:'Bright.'},
    {speaker:'riku_teen',jp:'まだ、転校生に会わずにいる。',en:"Haven't yet met the transfer student.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'屋台でフランクフルト、串に刺して食べた。',en:"At the stall — frankfurter on a skewer.",style:'Cheerful.'},
    {speaker:'riku_teen',jp:'駅に着いたら、電話掛けるよ。',en:"Once at the station, I'll call.",style:'Casual close.'},
  ]},
  {id:'conv_06065',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai chats with a teen',lines:[
    {speaker:'ren_uni',jp:'桜、メンバーの合図、すぐ気づくな。',en:"Sakura, quick to spot member signals.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。クイズの答え、当てるの得意です。',en:"Yes. Quiz answers — I'm good.",style:'Earnest teen.'},
    {speaker:'ren_uni',jp:'お前、早くから準備してたな、今日。',en:"You prepped early today.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'年配のサポートスタッフが、優しく見守ってくれます。',en:"Elderly support staff watch kindly.",style:'Soft.'},
    {speaker:'ren_uni',jp:'リーダーが、桜を誉めてた。',en:"The leader praised you.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'お父さんに、今週、会わなかったので、寂しいです。',en:"Didn't see Dad this week — lonely.",style:'Vulnerable.'},
    {speaker:'ren_uni',jp:'おにぎりに、串を刺して、お弁当箱に入れた?',en:"Skewered rice ball in the lunch box?",style:'Wry.'},
    {speaker:'sakura_teen',jp:'はい。閉店前に、店員さんに声を掛けます。',en:"Yes. Call out to staff before closing.",style:'Warm close.'},
  ]},

  // B
  {id:'conv_06066',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss discusses a publishing project',lines:[
    {speaker:'hiroshi_boss',jp:'ブランド毀損、絶対避けたい。',en:"Brand damage — avoid at all costs.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。百科事典シリーズ、改訂を進めています。',en:"Yes. Encyclopedia series — revising.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'創刊号の後編、出版時期、決めろ。',en:"First-issue later-part — set publication date.",style:'Direction.'},
    {speaker:'kenji_office',jp:'運搬経路、最適化済みです。',en:"Transport routes — optimized.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'倉庫キャパがネック、選別を厳しくしろ。',en:"Warehouse capacity — bottleneck; strict screening.",style:'Direction.'},
    {speaker:'kenji_office',jp:'記者会見、業界の重鎮を結びつける場にします。',en:"Press conference — link industry heavyweights.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'招かれる側として、礼を尽くせ。',en:"As invitee — pay full courtesy.",style:'Decisive close.'},
  ]},
  {id:'conv_06067',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss a product line',lines:[
    {speaker:'yuki_office',jp:'評判毀損の事案、対応スピード、上げよう。',en:"Reputation-damage cases — speed up response.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。商品の百科辞典的なFAQ、整備します。',en:"Yes. Encyclopedia-style FAQ — preparing.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'連載の後編、編集が遅れているね。',en:"Series later-part — editing's late.",style:'Direction.'},
    {speaker:'kenji_office',jp:'運搬コスト、見直し中です。',en:"Transport costs — under review.",style:'Update.'},
    {speaker:'yuki_office',jp:'人手不足がネック、業務選別、厳しく。',en:"Staff shortage — bottleneck; strict task selection.",style:'Direction.'},
    {speaker:'kenji_office',jp:'業界キーマンと結びつける機会、増やします。',en:"Industry-keyman link opportunities — increase.",style:'Commitment.'},
    {speaker:'yuki_office',jp:'招かれた式典、後輩にも参加させたい。',en:"Invited ceremonies — let juniors join too.",style:'Close.'},
  ]},
  {id:'conv_06068',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、企業ブランド、毀損したら回復に時間かかる。',en:"Ren, brand — once damaged, slow to recover.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。社内の百科辞典的ナレッジ、整備中なんですね。',en:"Yes. Internal encyclopedia-style knowledge — being prepared.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'プロジェクトの後編、君にも参加してもらう。',en:"Project later-part — you'll join too.",style:'Direction.'},
    {speaker:'ren_uni',jp:'物流の運搬計画、興味深いです。',en:"Logistics — interesting.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'人材不足はネック。だが、適切な選別で乗り越える。',en:"Talent shortage — bottleneck. Right screening — overcome.",style:'Direction.'},
    {speaker:'ren_uni',jp:'業界の専門家と結びつける機会、勉強になります。',en:"Linking with specialists — instructive.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'今度の懇親会、君も招かれてる。',en:"Coming social — you're invited.",style:'Warm close.'},
  ]},
  {id:'conv_06069',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on a corporate-IP case',lines:[
    {speaker:'takeda_officer',jp:'御社の知的財産、毀損リスク、警察も把握しています。',en:"Your IP damage-risk — police aware.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。百科辞典級の社内資料、流出防止に努めます。',en:"Yes. Encyclopedia-level internals — leak-prevention.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'シリーズの後編、ロゴ盗用、ご注意を。',en:"Series later-part — beware logo theft.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'運搬中の荷物、追跡システム、強化済みです。',en:"Transit goods — tracking strengthened.",style:'Update.'},
    {speaker:'takeda_officer',jp:'発覚遅延がネック、初動の選別、迅速に。',en:"Detection delay — bottleneck; swift initial sorting.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'警察と業界、引き続き結びつける場、設けます。',en:"Police-industry — continued linkage forums.",style:'Commitment.'},
    {speaker:'takeda_officer',jp:'招かれて、来週講演します。',en:"Invited — speaking next week.",style:'Close.'},
  ]},
  {id:'conv_06070',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'信用毀損、企業の命だ。',en:"Trust damage — firm's life.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。社内百科のメンテナンス、継続します。',en:"Yes. Internal-encyclopedia maintenance — continued.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'歴史叙述、続編の後編まで丁寧に。',en:"Historical chronicles — through the later-part, carefully.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'運搬体制、若手に任せています。',en:"Transport structure — entrusted to youth.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'人事のネック、見極めろ。慎重な選別が要る。',en:"HR bottleneck — discern. Careful screening needed.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'業界と結びつける場、引き続き作ります。',en:"Industry-linking forums — continue.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'招かれる側として、感謝の気持ちを忘れるな。',en:"As invitee — never forget gratitude.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06071',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor briefs about geriatric safety',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、高齢者の転倒、近年増加傾向です。',en:"Ren — elderly falls trend up recently.",style:'Calm.'},
    {speaker:'ren_uni',jp:'軽い手当てで済む例もあれば、深刻なものも。',en:"Some minor first-aid; some grave.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。骨折、灰色の長期予後があります。',en:"Yes. Fractures have grey long-term prognoses.",style:'Patient.'},
    {speaker:'ren_uni',jp:'大小の事故、現場で見られるんですね。',en:"Big and small accidents seen on site.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。救急ヘリのスカイ運航、活用しています。',en:"Yes. Sky-routed emergency choppers — used.",style:'Informative.'},
    {speaker:'ren_uni',jp:'救急車のナビ、慎重ですか。',en:"Ambulance navigation — careful?",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。事故の相手方、家族にも丁寧に対応します。',en:"Yes. Other-party families — careful response too.",style:'Patient.'},
    {speaker:'ren_uni',jp:'袖を引っ張る程度の小さなクレームでも、誠実に。',en:"Even a sleeve-pulling minor complaint — sincere.",style:'Reflective close.'},
  ]},
  {id:'conv_06072',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs on road safety',lines:[
    {speaker:'takeda_officer',jp:'歩行者の転倒事故、駅前で多発しています。',en:"Pedestrian falls — frequent at station fronts.",style:'Calm.'},
    {speaker:'ren_uni',jp:'救急の手当て、警察も補助しますか。',en:"First-aid — police assist?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。灰色のグレーゾーン事案、慎重に対応します。',en:"Yes. Grey-zone cases — handled carefully.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害の大小、関係なく、原則対応ですね。',en:"Damage size — regardless, default response.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。スカイマーケットなどの広域施設、警備強化中。',en:"Yes. Sky Market and wide-area sites — strengthening security.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'カーナビ警告のシステム、警察も連携していますか。',en:"Car-nav warning system — police-linked?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。相手方への配慮、口論回避、教育もします。',en:"Yes. Mind opposing-party feelings — avoid conflict, also teach.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警官、袖の隠しポケット、何入れてるんですか。',en:"Officer — what's in your sleeve pocket?",style:'Wry close.'},
  ]},
  {id:'conv_06073',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses urban-safety research',lines:[
    {speaker:'asuka_teacher',jp:'論文、転倒事故と都市設計、関係を論じましたね。',en:"Paper — falls and urban design, linked.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。手当て体制、地域差を整理しました。',en:"Yes. First-aid structure — regional gaps organized.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'予防策、灰色領域、慎重に論じています。',en:"Prevention — grey zones, carefully discussed.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'事故の大小、データで示せました。',en:"Accident scale — shown with data.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'スカイビューの航空写真も、参考になりますね。',en:"Sky-view aerial photos — also useful.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'地図ナビアプリのデータも、論文に組み込みました。',en:"Map-nav app data — integrated too.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'相手方への聞き取り、丁寧でしたね。',en:"Other-party interviews — careful.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'袖触れ合うも他生の縁、と感じる経験でした。',en:"\"Even a sleeve-brush is a destined connection\" — what I felt.",style:'Wistful close.'},
  ]},
  {id:'conv_06074',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews a safety incident',lines:[
    {speaker:'hiroshi_boss',jp:'工場の転倒事故、原因究明、急げ。',en:"Plant falls — root-cause, rush.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。応急手当てから二次救急まで、対応済みです。',en:"Yes. First aid through secondary — covered.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'責任、灰色の表現は避けろ。',en:"Liability — avoid grey wording.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。事案の大小、丁寧に整理します。',en:"Yes. Cases big-small — organized carefully.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'警備カメラ、スカイビュー、相手方確認できる体制を。',en:"Cams, sky-view, other-party confirmation system.",style:'Direction.'},
    {speaker:'kenji_office',jp:'地図ナビでの位置情報、社内システムに統合中です。',en:"Map-nav location data — integrating in internal system.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'制服の袖、目立つ仕様に変更検討。',en:"Uniform sleeve — visible-spec change under review.",style:'Close.'},
  ]},
  {id:'conv_06075',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher reviews a teen project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、地域安全研究、転倒事故、扱いましたね。',en:"Sakura — local safety, falls covered.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。応急手当ての教室、参加した経験、書きました。',en:"Yes. Wrote about attending first-aid classes.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'灰色の判断が必要な場面、複雑ですね。',en:"Grey-judgment moments — complex.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'事故の大小、データで整理しています。',en:"Accident scale — organized by data.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'スカイツリー周辺の調査、感想いかがでしたか。',en:"Sky-Tree-area survey — thoughts?",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'観光客のナビ、迷う方多くて、印象的でした。',en:"Tourist nav — many lost; striking.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'事故の相手方、感情面のケア、論じていますね。',en:"Other-party emotional care — discussed.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'袖の反射シールも、研究範囲に入れました。',en:"Sleeve-reflective seals — also in scope.",style:'Reflective close.'},
  ]},

  // D
  {id:'conv_06076',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about culture',lines:[
    {speaker:'mei_romantic',jp:'最近、コーヒー、カプセル式に変えたの。',en:"Lately — switched to capsule coffee.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'いいね。新潮社の新刊、読んだ?',en:"Lovely. Read Shinchosha's new release?",style:'Bright.'},
    {speaker:'mei_romantic',jp:'うん。表紙のリボン装飾、可愛い。',en:"Yes. Cover-ribbon decoration — cute.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'お礼のハガキ、出す予定。',en:"Sending thank-you postcards.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'昨日のコンサート、シンガーの声、素敵だった。',en:"Last night's concert — singer's voice was lovely.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'スティングの古い曲も、流してたの。',en:"Old Sting songs also played.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'ムシ取り、子供の頃、よくやったね。',en:"Bug-catching — did it lots as a kid.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'夜中まで、よく喋ってたわね、私たち。',en:"Talked till midnight — we did.",style:'Warm close.'},
  ]},
  {id:'conv_06077',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher and student discuss arts',lines:[
    {speaker:'asuka_teacher',jp:'論文、カプセル玩具と現代文化、興味深いですね。',en:"Paper — capsule toys and modern culture, intriguing.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。新潮社の文化批評も、参考にしました。',en:"Yes. Shinchosha's cultural critiques — referenced too.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'リボン文化の章、ヴィクトリア朝との比較、丁寧ですね。',en:"Ribbon-culture chapter — vs. Victorian comparison, careful.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'ハガキ文化、衰退と再評価、扱いました。',en:"Postcard culture — decline and reassessment, covered.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'有名シンガー、複数比較で論じてますね。',en:"Famous singers — comparative discussion.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'スティングのソロ活動史、章として入れました。',en:"Sting's solo history — included as a chapter.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'ムシ採集が芸術に与えた影響、別章で論じていますね。',en:"Bug-collecting's impact on art — separate chapter.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'チームメイトと喋った内容も、研究ヒントになりました。',en:"Teammates' chatter became research hints.",style:'Earnest close.'},
  ]},
  {id:'conv_06078',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat about hobbies',lines:[
    {speaker:'sakura_teen',jp:'駅のガチャ、カプセル玩具、最新作だ。',en:"Station gacha — capsule toys, newest.",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'うん。新潮社の本、本屋でセール中だって。',en:"Yeah. Shinchosha books on sale at the bookstore.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'文化祭、リボンで装飾しよう。',en:"Festival — decorate with ribbons.",style:'Animated.'},
    {speaker:'riku_teen',jp:'招待ハガキ、自分で作るのが楽しい。',en:"Invite postcards — fun to make ourselves.",style:'Bright.'},
    {speaker:'sakura_teen',jp:'軽音部のシンガー、上手いよね。',en:"Light-music vocalist — talented.",style:'Cheerful.'},
    {speaker:'riku_teen',jp:'スティング風の声、目指してるって言ってた。',en:"Aiming for Sting-like voice, they said.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'昆虫展のムシ標本、見に行こう。',en:"Insect-show bug specimens — let's go.",style:'Wistful.'},
    {speaker:'riku_teen',jp:'帰り、ずっと喋ってたから、口、疲れた。',en:"Talked the whole way back — mouth tired.",style:'Wry close.'},
  ]},
  {id:'conv_06079',cluster:'D',ambient:'living_room_quiet',cast:['ryosuke_dad','sho_child'],targets:D_T,scenario:'A dad and son look at toys',lines:[
    {speaker:'ryosuke_dad',jp:'翔、カプセル玩具のコレクション、増えたな。',en:"Sho, capsule-toy collection grown.",style:'Easy.'},
    {speaker:'sho_child',jp:'うん!新潮社の図鑑、面白いよ!',en:"Yes! Shinchosha encyclopedia — fun!",style:'Excited child.'},
    {speaker:'ryosuke_dad',jp:'お母さんが、リボンでプレゼント包んでくれた。',en:"Mom wrapped a gift with a ribbon.",style:'Warm.'},
    {speaker:'sho_child',jp:'ハガキ、おばあちゃんに送ろう。',en:"Postcard to Grandma — let's send.",style:'Bright.'},
    {speaker:'ryosuke_dad',jp:'お父さんは、若い頃、ロックシンガー目指してた。',en:"Dad in youth — aimed to be a rock singer.",style:'Wistful.'},
    {speaker:'sho_child',jp:'スティングって誰?',en:"Who's Sting?",style:'Curious.'},
    {speaker:'ryosuke_dad',jp:'有名な歌手だ。今度、聞かせよう。',en:"Famous singer. I'll play it sometime.",style:'Calm.'},
    {speaker:'sho_child',jp:'クワガタムシ、夏に捕まえるって、お父さん約束した?',en:"Stag-beetles — summer catching, Dad promised?",style:'Eager.'},
    {speaker:'ryosuke_dad',jp:'うん、たくさん喋ったから、疲れたな。',en:"Yes — talked lots, tired.",style:'Warm close.'},
  ]},
  {id:'conv_06080',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan a culture-themed event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、カプセル玩具を景品にした子供向けフェア、ええなあ。',en:"Aoi-san, capsule-toy-prize kids fair — nice.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。新潮社の絵本コーナーも、特集しましょう。',en:"Yes. Shinchosha picture-book corner — feature.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'リボン装飾、店内に施そか。',en:"Ribbon decor — install in-store?",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'特製ハガキ、お土産に配ります。',en:"Special postcards — souvenirs.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'生演奏、地元のシンガー、依頼しよか。',en:"Live performance — local singer, hire?",style:'Practical.'},
    {speaker:'aoi_barista',jp:'スティング風のロックメドレー、夜に流しましょう。',en:"Sting-style rock medley — at night.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'夏向けのムシよけスプレー、店頭で配ろか。',en:"Summer bug-repellent — hand out at storefront?",style:'Practical.'},
    {speaker:'aoi_barista',jp:'スタッフも、お客様と喋ってリラックスできる雰囲気で。',en:"Staff too — chatting with guests, relaxed vibe.",style:'Warm close.'},
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

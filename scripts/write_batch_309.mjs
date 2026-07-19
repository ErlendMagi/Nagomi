import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_309 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['腰痛','謝っ','微笑','寝よ','ほのか','凄かっ','冬場','軽やか']
const B_T = ['創っ','寄贈','自費','元本','学業','委ねる','備品','持ち歩い']
const C_T = ['波紋','強める','独学','民意','隆盛','不規則','収拾','山手線']
const D_T = ['キリン','ハチ','蜂蜜','前菜','スイーツ','ガッツ','菜の花','リーフ']

const data = [
  // A
  {id:'conv_06141',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats at night',lines:[
    {speaker:'hiroshi_elder',jp:'最近、腰痛がひどくてな。',en:"Lately, my back's killing me.",style:'Subdued.'},
    {speaker:'sachiko_grandma',jp:'先日、ぶつかった時、ちゃんと謝っておけばよかったわ。',en:"The other day's bump — should've apologized properly.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お前の微笑、いつ見ても落ち着くな。',en:"Your smile — always calming.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'もう、寝ようかしらね。',en:"Maybe time to sleep.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'庭の花、ほのかな香りが、いいね。',en:"Garden flowers — faint fragrance, lovely.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'今日の夕日、凄かったわね。',en:"Today's sunset — was amazing.",style:'Bright.'},
    {speaker:'hiroshi_elder',jp:'冬場は、布団、二枚使っているよ。',en:"Wintertime — using two futons.",style:'Calm.'},
    {speaker:'sachiko_grandma',jp:'若い頃の、軽やかな足取り、まだ覚えてるわ。',en:"Your young, light steps — still remember.",style:'Warm close.'},
  ]},
  {id:'conv_06142',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends share an evening',lines:[
    {speaker:'mei_romantic',jp:'デスクワーク続きで、腰痛、辛い。',en:"Endless desk work — back pain, tough.",style:'Subdued.'},
    {speaker:'aoi_barista',jp:'昨夜、急に怒った友達に、謝っておいたよ。',en:"Last night — apologized to the upset friend.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'あなたの微笑、見るだけで、楽になる。',en:"Your smile alone makes me feel better.",style:'Warm.'},
    {speaker:'aoi_barista',jp:'今夜は早く寝よう。',en:"Tonight — sleep early.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'コーヒーから、ほのかな花の香りがする。',en:"Coffee — faint floral aroma.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'昨日のドラマ、ラスト、凄かったよね。',en:"Last drama's finale — amazing.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'冬場、お風呂、湯たんぽ、欠かせない。',en:"Wintertime — bath, hot-water bottle, essential.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'明日のあなた、軽やかに過ごせるといいね。',en:"Tomorrow — wish you a light day.",style:'Warm close.'},
  ]},
  {id:'conv_06143',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お父さん、腰痛で、運動会、来られないかも。',en:"Mom — Dad's back pain; may miss sports day.",style:'Worried.'},
    {speaker:'yumiko_mom',jp:'明日、お友達に、ちゃんと謝っておいてね。',en:"Tomorrow — apologize to your friend properly.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママの微笑、温かいんだ。',en:"Mom's smile is warm.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'もう、寝ようかね、いい子だね。',en:"Time to sleep, good child.",style:'Soft.'},
    {speaker:'sho_child',jp:'お風呂、ほのかな桜の香りがしたよ。',en:"Bath had a faint cherry scent.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'昨日の花火、凄かったわね。',en:"Yesterday's fireworks — amazing.",style:'Reflective.'},
    {speaker:'sho_child',jp:'冬場、寒すぎて、雪、苦手。',en:"Wintertime — too cold; not fond of snow.",style:'Wry.'},
    {speaker:'yumiko_mom',jp:'軽やかな足取りで、明日、頑張ろうね。',en:"Light steps tomorrow — push through.",style:'Warm close.'},
  ]},
  {id:'conv_06144',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk',lines:[
    {speaker:'sakura_teen',jp:'部活、座りすぎで、腰痛、出てる。',en:"Club — too much sitting; back pain.",style:'Wry teen.'},
    {speaker:'riku_teen',jp:'今日、後輩に、つい強く言いすぎたから、謝っておいた。',en:"Today — spoke too sharply to junior, apologized.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お前の微笑、いつもみんなを和ませるよ。',en:"Your smile always soothes everyone.",style:'Warm.'},
    {speaker:'riku_teen',jp:'今夜、早く寝ようと思う。',en:"Tonight — gonna sleep early.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'制服に、ほのかな柔軟剤の香り、残ってる。',en:"Uniform — faint fabric-softener scent left.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'昨夜のテレビ、最終回、凄かった。',en:"Last night TV finale — amazing.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'冬場、家にこもりすぎないよう、外、歩こう。',en:"Wintertime — don't over-hibernate; walk out.",style:'Practical.'},
    {speaker:'riku_teen',jp:'明日、軽やかな気持ちで、登校しよう。',en:"Tomorrow — light heart, go to school.",style:'Warm close.'},
  ]},
  {id:'conv_06145',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai chats with a teen',lines:[
    {speaker:'ren_uni',jp:'桜、最近、勉強しすぎで、腰痛、心配だぞ。',en:"Sakura — too much study; back pain concern.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'はい。教室で、つい怒鳴った後、ちゃんと謝っておきました。',en:"Yes. Snapped in class — apologized properly.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'微笑が素敵な後輩、皆好きだぞ。',en:"A smile-graced junior — everyone loves.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'はい。今夜、早めに寝ようと思います。',en:"Yes. Tonight — sleep early.",style:'Soft.'},
    {speaker:'ren_uni',jp:'公園の風、ほのかな花の香り、いいな。',en:"Park breeze — faint floral, nice.",style:'Wistful.'},
    {speaker:'sakura_teen',jp:'昨日の夕焼け、凄かったですね、写真撮りました。',en:"Yesterday's sunset — amazing; I took photos.",style:'Animated.'},
    {speaker:'ren_uni',jp:'冬場、引きこもりすぎないように。',en:"Wintertime — don't over-stay indoors.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'軽やかな気持ちで、来週、過ごします。',en:"Light heart — through next week.",style:'Bright close.'},
  ]},

  // B
  {id:'conv_06146',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews CSR and finances',lines:[
    {speaker:'hiroshi_boss',jp:'創業者が創った理念、若手にも伝えよ。',en:"Founder's principles — convey to youth.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。地元の小学校に、図書、寄贈しました。',en:"Yes. Donated books to a local elementary.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'役員の海外出張、自費部分、明確にしろ。',en:"Exec overseas — out-of-pocket portion clear.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。元本を確保しつつ、運用、進めます。',en:"Yes. Securing principal while operating.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'若手社員の学業支援、奨学制度を拡充しろ。',en:"Junior staff academic support — expand scholarships.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。業務の判断、現場に委ねる方針です。',en:"Yes. Decision-entrust to the field.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'備品の管理、責任部署を明確に。',en:"Equipment mgmt — clarify responsible section.",style:'Direction.'},
    {speaker:'kenji_office',jp:'タブレットを持ち歩いて、現場でデータ管理させます。',en:"Carry tablets — manage data on site.",style:'Close.'},
  ]},
  {id:'conv_06147',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers prep training',lines:[
    {speaker:'yuki_office',jp:'創業以来創ってきた制度、見直すべきところもあるね。',en:"Founding-era systems — some review needed.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。各部署で、図書を寄贈し合う社内文化、進めます。',en:"Yes. Inter-section book donations — internal culture.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'研修費、自費でも、価値ある投資ね。',en:"Training fees — even out-of-pocket is value.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。元本減らさず、投資を進める方針です。',en:"Yes. Without reducing principal — invest.",style:'Update.'},
    {speaker:'yuki_office',jp:'新人の学業背景、配属に活かそう。',en:"New-hire academic backgrounds — leverage in postings.",style:'Direction.'},
    {speaker:'kenji_office',jp:'担当判断は、リーダーに委ねるべきですね。',en:"Decision — entrust to leaders.",style:'Commitment.'},
    {speaker:'yuki_office',jp:'備品、共用ロッカーで管理しよう。',en:"Equipment — shared-locker mgmt.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。マニュアル、社員が持ち歩いて確認します。',en:"Yes. Manual carried by staff for reference.",style:'Close.'},
  ]},
  {id:'conv_06148',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、企業文化、長い時間かけて創ってきた。',en:"Ren — corporate culture, long-built.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。大学にも、企業から本が寄贈されていました。',en:"Yes. University also received donated books from firms.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'研修旅行、自費部分が出ることもある、心しておけ。',en:"Training trips — sometimes out-of-pocket; mind it.",style:'Direction.'},
    {speaker:'ren_uni',jp:'元本保証の金融商品、面白いです。',en:"Principal-guaranteed financial products — interesting.",style:'Curious.'},
    {speaker:'hiroshi_boss',jp:'学業優先で、社業との両立、頑張れ。',en:"Academics-first; balance with company work.",style:'Direction.'},
    {speaker:'ren_uni',jp:'実務判断、若手に委ねる文化、頼もしいです。',en:"Decision-entrust to youth — reliable culture.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'備品の貸し出し、慎重に。',en:"Equipment lending — careful.",style:'Direction.'},
    {speaker:'ren_uni',jp:'資料、持ち歩いてはいけませんよね。',en:"Materials shouldn't be carried out, right?",style:'Polite close.'},
  ]},
  {id:'conv_06149',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on compliance',lines:[
    {speaker:'takeda_officer',jp:'御社が創ってきた防犯体制、業界の手本です。',en:"Your built crime-prevention — industry exemplar.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察図書館に、参考資料、寄贈しました。',en:"Yes. Police library — reference materials donated.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'自費出版の調査本、共有していただきました。',en:"Self-published investigation books — shared.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。元本減らさず、警備予算、確保します。',en:"Yes. Without reducing principal, security budget secured.",style:'Update.'},
    {speaker:'takeda_officer',jp:'学業期から、コンプライアンス教育、大事ですね。',en:"From academia — compliance ed matters.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。判断は、信頼できる者に委ねる体制です。',en:"Yes. Entrust decisions to trusted people.",style:'Commitment.'},
    {speaker:'takeda_officer',jp:'警察備品、共有時の管理、お願いします。',en:"Police equipment — careful on shared mgmt.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。連携カード、社員が持ち歩いています。',en:"Yes. Coordination cards — carried by staff.",style:'Close.'},
  ]},
  {id:'conv_06150',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'企業を創った創業者の言葉、忘れるな。',en:"Founder's words — don't forget.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。地域に貢献するため、施設を寄贈しました。',en:"Yes. To serve the community — donated facilities.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'若い頃は、自費で学会、参加したな。',en:"In youth — paid out-of-pocket for conferences.",style:'Reflective.'},
    {speaker:'hiroshi_boss',jp:'はい。元本を守る経営、引き継いでいます。',en:"Yes. Inherited principal-protecting management.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'学業出身の若手、伸ばす責任、リーダーにある。',en:"Academic-rooted youth — leaders bear nurturing duty.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'実務、信頼する後輩に、委ねていきます。',en:"Operations — entrust to trusted juniors.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'備品の節約も、現場の文化として大切だ。',en:"Equipment thrift — vital field culture too.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。判断材料、いつも持ち歩いています。',en:"Yes. Always carrying decision materials.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06151',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses a research paper on society',lines:[
    {speaker:'asuka_teacher',jp:'論文、波紋を呼んだ報道事案、丁寧に扱いましたね。',en:"Paper — coverage-causing-ripples carefully handled.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。世論を強める要因、データで示しました。',en:"Yes. Opinion-strengthening factors — data-shown.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'独学で研究を続ける市民、興味深い章ですね。',en:"Citizen self-study researchers — intriguing chapter.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'民意の反映、政治の隆盛と衰退、論じました。',en:"Public-will reflection — political rise & decline discussed.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'不規則な現象、収拾、難しい場合もありますね。',en:"Irregular phenomena — settlement sometimes hard.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'山手線沿線の地域研究、別章で扱いました。',en:"Yamanote-line area studies — separate chapter.",style:'Curious close.'},
  ]},
  {id:'conv_06152',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs about a regional incident',lines:[
    {speaker:'takeda_officer',jp:'事件、波紋が広がっています。',en:"Incident — ripples spread.",style:'Calm.'},
    {speaker:'ren_uni',jp:'警察、捜査を強める方針ですか。',en:"Police — strengthening investigation?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。地域の協力者、独学で防犯を勉強しています。',en:"Yes. Local helpers — self-study crime prevention.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'民意の反映、警察の対応にも、影響しますね。',en:"Public-will reflection — affects police response too.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。地域犯罪の隆盛、避けたい。',en:"Yes. Local-crime rise — want to avoid.",style:'Firm.'},
    {speaker:'ren_uni',jp:'不規則な動き、容疑者の挙動、収拾が肝心ですね。',en:"Irregular suspect moves — settlement critical.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'山手線駅構内の監視カメラ、活用しています。',en:"Yamanote-station cams — utilized.",style:'Procedural close.'},
  ]},
  {id:'conv_06153',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a current-events project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、SNSが波紋を広げる現象、研究テーマね。',en:"Sakura — SNS-ripple phenomena, theme.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。情報拡散を強める要因、整理しました。',en:"Yes. Spread-strengthening factors — organized.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'独学で情報リテラシーを学ぶ高校生、増えていますね。',en:"Self-study info-literacy high-schoolers — increasing.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'民意の動き、選挙との関係、章にしました。',en:"Public-will movements vs. elections — chapter.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'デマの隆盛、警鐘を鳴らす必要がありますね。',en:"Misinfo rise — must alarm-sound.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'不規則な拡散パターン、収拾するアルゴリズム、調べました。',en:"Irregular spread patterns — settlement algorithms researched.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'山手線車内のスマホ動向、現地観察、いいですね。',en:"Yamanote-line in-car phone trends — field obs, good.",style:'Reflective close.'},
  ]},
  {id:'conv_06154',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews a corporate crisis',lines:[
    {speaker:'hiroshi_boss',jp:'業界全体に波紋、急いで対応せねば。',en:"Industry-wide ripples — must respond fast.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。広報、メッセージを強める方針です。',en:"Yes. PR — strengthen message.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'若手社員、独学でリスク管理、勉強している。',en:"Junior staff — self-study risk mgmt.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。民意の動き、SNSモニタリングしています。',en:"Yes. Public-will moves — SNS monitoring.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'競合の隆盛、油断するな。',en:"Competitor rise — don't slack.",style:'Direction.'},
    {speaker:'kenji_office',jp:'不規則な情報流出、収拾、急いでいます。',en:"Irregular leaks — settlement rushed.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'本社、山手線沿線への移転、検討しろ。',en:"HQ — consider Yamanote-line area relocation.",style:'Close.'},
  ]},
  {id:'conv_06155',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public-health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、感染症の波紋、地域に広がっています。',en:"Ren — infection ripples spread.",style:'Calm.'},
    {speaker:'ren_uni',jp:'予防接種の啓発を強める時期ですね。',en:"Vaccination-awareness — time to strengthen.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。患者、独学で予防法、学んでいます。',en:"Yes. Patients self-study prevention.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療政策、民意の反映、難しいですね。',en:"Medical policy — public-will reflection, hard.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'近年、ワクチン懐疑論の隆盛、危機感あります。',en:"Recent vaccine-skepticism rise — sense of crisis.",style:'Informative.'},
    {speaker:'ren_uni',jp:'不規則な感染パターン、収拾、データ分析が肝心ですね。',en:"Irregular infection patterns — data analysis for settlement.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。山手線沿線の発生例、集計しています。',en:"Yes. Yamanote-line cases — aggregated.",style:'Reflective close.'},
  ]},

  // D
  {id:'conv_06156',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends discuss a zoo and food',lines:[
    {speaker:'mei_romantic',jp:'動物園、キリンの首、すごく長いよね。',en:"Zoo — giraffe necks, super long.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'うん。庭の花、ハチが集まってる。',en:"Yes. Garden flowers — bees gathering.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'蜂蜜入りの紅茶、私の好物。',en:"Honey-laced tea — my fave.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'コース料理の前菜、ボリュームあって嬉しい。',en:"Course-meal starter — generous portions, glad.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'デザートのスイーツ、今日は控えめにする。',en:"Dessert sweets — light today.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'最後まで、ガッツで完食する派よ。',en:"Eat to the end — gut-out type.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'菜の花の煮物、春らしくて好きなの。',en:"Nanohana stew — spring-like, love it.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'紅茶のリーフ、新茶、入荷した?',en:"Tea leaves — new harvest arrived?",style:'Curious close.'},
  ]},
  {id:'conv_06157',cluster:'D',ambient:'park_distant_birds',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son visit a zoo',lines:[
    {speaker:'sho_child',jp:'ママ、キリン、餌を食べてるよ!',en:"Mom — giraffe's eating!",style:'Excited child.'},
    {speaker:'yumiko_mom',jp:'隣の花壇、ハチが飛んでるから、気をつけてね。',en:"Next flowerbed — bees flying; careful.",style:'Tender.'},
    {speaker:'sho_child',jp:'おうちに帰って、蜂蜜パンケーキ作って!',en:"Back home — make honey pancakes!",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'前菜にサラダ、用意するね。',en:"Salad as starter — prepping.",style:'Warm.'},
    {speaker:'sho_child',jp:'デザートのスイーツ、いっぱい食べたい!',en:"Dessert sweets — wanna eat lots!",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'ガッツポーズ、お父さんに見せてあげてね。',en:"Gut-pose — show Dad too.",style:'Cheerful.'},
    {speaker:'sho_child',jp:'菜の花の天ぷら、作れる?',en:"Nanohana tempura — can you make?",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'うん。紅茶のリーフ、新しいの淹れようね。',en:"Yes. New tea leaves — brew fresh.",style:'Warm close.'},
  ]},
  {id:'conv_06158',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat about food',lines:[
    {speaker:'sakura_teen',jp:'動物園、新しくキリンの赤ちゃん、生まれたって。',en:"Zoo — new baby giraffe born.",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'うん。校庭、ハチが多いから、気を付けて。',en:"Yeah. School-yard — many bees; careful.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'家庭科で、蜂蜜マフィン、作ったよ。',en:"Home-ec — made honey muffins.",style:'Animated.'},
    {speaker:'riku_teen',jp:'前菜、給食でも、増えてきたよね。',en:"Starters — increasing in school lunch too.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'スイーツ部、人気上昇中だよ。',en:"Sweets club — popularity rising.",style:'Bright.'},
    {speaker:'riku_teen',jp:'試合前、ガッツポーズで気合入れる。',en:"Pre-match — gut-pose to pump up.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'菜の花畑、写真撮りに行きたい。',en:"Nanohana fields — wanna shoot photos.",style:'Wistful.'},
    {speaker:'riku_teen',jp:'紅茶のリーフを使った、香り高いお茶、おすすめだよ。',en:"Tea-leaf-based fragrant brew — recommend.",style:'Casual close.'},
  ]},
  {id:'conv_06159',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan a spring menu',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、春メニュー、キリンの絵を看板に入れよか。',en:"Aoi-san — spring menu, giraffe on signboard?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。ハチをモチーフに、ロゴも作りましょう。',en:"Yes. Bee-motif logo — make.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'地元蜂蜜、使ったケーキ、新作、出すで。',en:"Local-honey cake — new release.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'前菜、菜の花のお浸し、定番にしましょう。',en:"Starter — nanohana ohitashi as a staple.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'スイーツの新シリーズ、限定で出そ。',en:"New sweets series — limited release.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'スタッフのガッツ、お客様にも伝わるよう、明るく接客します。',en:"Staff guts — convey to guests with bright service.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'春の風物詩、菜の花アレンジ、いろいろやろう。',en:"Spring icon — nanohana arrangements, varied.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'紅茶リーフ、専門農家から仕入れます。',en:"Tea leaves — sourced from specialty farms.",style:'Warm close.'},
  ]},
  {id:'conv_06160',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces about food',lines:[
    {speaker:'hiroshi_elder',jp:'動物園、子供たちと、キリン見たな、若い頃。',en:"Zoo — saw giraffes with the kids, in youth.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。庭のお花、毎年、ハチが来てくれるわ。',en:"Yes. Garden flowers — bees come every year.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'蜂蜜入りの紅茶、朝の楽しみ。',en:"Honey tea — morning pleasure.",style:'Soft.'},
    {speaker:'sachiko_grandma',jp:'お料理、前菜から、丁寧に味わいたいわ。',en:"Cuisine — savor from starter, carefully.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い時、スイーツより、しょっぱい物が好きだった。',en:"In youth — preferred savory to sweets.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'子育ての日々、ガッツで乗り切ったわね。',en:"Childrearing days — got through with guts.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'菜の花の畑、お前と歩いた春、忘れない。',en:"Nanohana fields walked with you in spring — unforgotten.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'紅茶リーフ、新しいの、明日試しましょう。',en:"New tea leaves — tomorrow try.",style:'Warm close.'},
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_276 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['いくらか','わがまま','たびたび','めざす','ほめ','動揺','ぞう','当たら']
const B_T = ['申込み','選抜','院長','アナリスト','アドバイザー','部数','直行','配備']
const C_T = ['亡命','損傷','神聖','考古学','試練','畜産','粒子','仮名']
const D_T = ['ピアニスト','レコーダー','音源','綿','おばあさん','民家','プロセッサ','早稲田']

const data = [
  {id:'conv_05481',cluster:'A',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:A_T,scenario:'Two cafe friends gossip about a friend\'s child',lines:[
    {speaker:'mei_romantic',jp:'ユイちゃんの息子、たびたびわがまま言うらしいよ。',en:"Yui's son apparently throws tantrums often.",style:'Soft gossipy.'},
    {speaker:'aoi_barista',jp:'えー、でも前にママがほめてた子じゃない?',en:"Wait — wasn't he the one his mom praised before?",style:'Surprised.'},
    {speaker:'mei_romantic',jp:'動揺するよね。多分、当たらない解説を周りがしてるだけかも。',en:"It throws you off, right? People may just be making incorrect read-outs.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'うちのおいっ子、ぞうさんのぬいぐるみを離さないけど、いい子だよ。',en:"My nephew won't let go of his elephant plushie, but he's a good kid.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'いくらか年齢で個性違うしね。',en:"Personality varies a bit with age, after all.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'安心をめざす家庭、応援したい。',en:"Families aiming for stability — I want to support.",style:'Close.'},
  ]},
  {id:'conv_05482',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk home after class',lines:[
    {speaker:'sakura_teen',jp:'今日のテスト、たびたびケアレスミス、減らないよ。',en:"Today's test — careless errors keep recurring.",style:'Frustrated teen.'},
    {speaker:'riku_teen',jp:'うん、気を抜くと当たらない問題ばっかになるよな。',en:"Yeah, lose focus and you get tons of wrong answers.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'親に成績、たまにわがまま言うけど、本気でめざす高校あるんだよ。',en:"I'm sometimes selfish with my parents about grades, but I have a high school I really aim for.",style:'Honest.'},
    {speaker:'riku_teen',jp:'動揺せず勉強続ければ、合格率いくらか上がるはず。',en:"If you keep studying without rattling, the pass rate should rise a bit.",style:'Reassuring.'},
    {speaker:'sakura_teen',jp:'先生にほめられた最後の作文、自信になった。',en:"The essay the teacher praised — built my confidence.",style:'Soft.'},
    {speaker:'riku_teen',jp:'ぞうさんのぬいぐるみみたいに、心の支え必要だよな。',en:"You need something like an elephant plushie for emotional support, huh.",style:'Joking close.'},
  ]},
  {id:'conv_05483',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom calms her young son before bed',lines:[
    {speaker:'sho_child',jp:'ママ、ぞうさんのぬいぐるみ、たびたびベッドの下に落ちる…。',en:"Mom, the elephant plushie keeps falling under the bed.",style:'Whimpering child.'},
    {speaker:'yumiko_mom',jp:'あらら。いくらか位置を変えてあげようね。',en:"Oh dear. Let's move it a bit.",style:'Warm.'},
    {speaker:'sho_child',jp:'ぼく、今日先生にほめられたよ。漢字テスト、当たらない問題なくて。',en:"Mom, the teacher praised me today. No wrong answers on the kanji test.",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'すごいね!動揺しないで挑んだ甲斐があったね。',en:"Amazing! Worth tackling without getting rattled.",style:'Proud.'},
    {speaker:'sho_child',jp:'いつもわがまま言ってごめんね。',en:"Sorry for always being selfish.",style:'Quiet.'},
    {speaker:'yumiko_mom',jp:'いいのよ。一番をめざす翔、お母さん大好き。',en:"It's fine. Sho aiming for the top — Mom loves you.",style:'Tender close.'},
  ]},
  {id:'conv_05484',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple discusses grandkids',lines:[
    {speaker:'hiroshi_elder',jp:'孫のタカシ、たびたびわがまま言うらしいな。',en:"Our grandson Takashi apparently is often a handful.",style:'Soft elder.'},
    {speaker:'sachiko_grandma',jp:'子供だものね。学校でも一番をめざす真っ直ぐな子だわ。',en:"He's a kid. A straight-aimed boy seeking number one at school too.",style:'Fond.'},
    {speaker:'hiroshi_elder',jp:'先日、先生にほめられたって電話あった。動揺するくらい嬉しかったよ。',en:"The other day there was a call he got praised. I was overwhelmed with joy.",style:'Warm.'},
    {speaker:'sachiko_grandma',jp:'ぞうさんの絵を描いて、コンクールで賞も当たったとか。',en:"He drew an elephant and even won a prize in a competition.",style:'Cheerful.'},
    {speaker:'hiroshi_elder',jp:'当たらないだろうと思ってたのに、いくらか自信もついたって。',en:"He hadn't expected to land it, but apparently it gave him some confidence.",style:'Proud.'},
    {speaker:'sachiko_grandma',jp:'今度遊びに来た時、たっぷり褒めましょう。',en:"Next time he visits, let's heap on praise.",style:'Warm close.'},
  ]},
  {id:'conv_05485',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A uni student listens to a teen friend talk about goals',lines:[
    {speaker:'sakura_teen',jp:'先輩、私、わがままかもしれないけど、有名な大学めざしてるんです。',en:"Senpai, I may be selfish, but I aim for a famous university.",style:'Earnest teen.'},
    {speaker:'ren_uni',jp:'いいじゃん。たびたび相談に来ていいぞ。',en:"That's fine. Come consult me often.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'親にほめられたい気持ちと、いくらかプレッシャーで動揺します。',en:"Mixing the wish to be praised by parents with pressure leaves me unsettled.",style:'Vulnerable.'},
    {speaker:'ren_uni',jp:'当たらないことばかり気にせず、できたところを大切に。',en:"Don't fixate on misses; cherish what you got right.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'はい。ぞうさんのお守り持って試験頑張ります。',en:"Yes. I'll go in with an elephant charm.",style:'Resolved.'},
    {speaker:'ren_uni',jp:'うん、応援してる。',en:"Yes, I'm rooting for you.",style:'Warm close.'},
  ]},

  {id:'conv_05486',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews a regional rollout plan',lines:[
    {speaker:'hiroshi_boss',jp:'地方店舗の申込み、選抜は順調か?',en:"Local-store applications — is selection on schedule?",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。本社直行便で各地のアナリストと打合せています。',en:"Yes. I'm flying nonstop from HQ to meet local analysts.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'院長クラスのアドバイザーの起用も、検討してくれ。',en:"Consider appointing director-class advisors too.",style:'Direction.'},
    {speaker:'kenji_office',jp:'承知しました。広報誌の部数も、配備計画に合わせて調整します。',en:"Understood. Magazine print run will be adjusted to the deployment plan.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'頼む。',en:"Please.",style:'Close.'},
  ]},
  {id:'conv_05487',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers prep a recruiting drive',lines:[
    {speaker:'yuki_office',jp:'今回の選抜、申込み数、過去最多だ。',en:"This selection round — applications hit an all-time high.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'アナリスト枠とアドバイザー枠、別管理してます。',en:"Analyst and advisor slots are managed separately.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'院長経験者の枠も足したい。部数の関係上、印刷物は最小限で。',en:"Want to add a slot for ex-directors. Print kept minimal per run constraints.",style:'Strategic.'},
    {speaker:'kenji_office',jp:'直行便で次の地域へ移動する候補者、配備の段取り、確認します。',en:"For candidates flying nonstop to the next region, I'll check deployment logistics.",style:'Update.'},
    {speaker:'yuki_office',jp:'よろしく。',en:"Thanks.",style:'Close.'},
  ]},
  {id:'conv_05488',cluster:'B',ambient:'office_quiet_low',cast:['ren_uni','yuki_office'],targets:B_T,scenario:'A uni intern interviews a manager about hiring',lines:[
    {speaker:'ren_uni',jp:'貴社の申込みプロセス、教えていただけますか。',en:"Could you tell me about your application process?",style:'Polite.'},
    {speaker:'yuki_office',jp:'はい。書類選抜、面接、最後にアドバイザー面談です。',en:"Yes. Document screening, interview, then an advisor session.",style:'Helpful.'},
    {speaker:'ren_uni',jp:'院長経験者も、アナリストとして関わっているんですか。',en:"Ex-directors also work as analysts?",style:'Probe.'},
    {speaker:'yuki_office',jp:'はい。新店舗の直行配備、彼らの助言で決まります。',en:"Yes. Nonstop deployments to new stores are decided on their advice.",style:'Informative.'},
    {speaker:'ren_uni',jp:'ガイドブックの部数、限定ですか。',en:"Is the guidebook print run limited?",style:'Curious.'},
    {speaker:'yuki_office',jp:'はい、毎期見直しています。',en:"Yes, reviewed each term.",style:'Close.'},
  ]},
  {id:'conv_05489',cluster:'B',ambient:'cafe_quiet_chatter',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors a younger boss on talent strategy',lines:[
    {speaker:'hiroshi_elder',jp:'人材は申込みの段階で、見抜けるものだ。',en:"Talent can be spotted at the application stage.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。選抜も真摯に、院長クラスの目利きをお願いしています。',en:"Yes. Selection sincere — we ask director-level eyes.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'外部アナリスト、アドバイザーの活用、惜しまずやれ。',en:"Use external analysts and advisors generously.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'承知しました。部数管理も併せて見直します。',en:"Understood. I'll also review print-run management.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'地方配備は直行で動かせ。時間が金だ。',en:"Local deployment — go nonstop. Time is money.",style:'Stern.'},
    {speaker:'hiroshi_boss',jp:'胸に刻みます。',en:"Engraved in my heart.",style:'Close.'},
  ]},
  {id:'conv_05490',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:B_T,scenario:'A police officer briefs a uni reporter about admin staffing',lines:[
    {speaker:'takeda_officer',jp:'本年度の人員配備、申込みベースで決まりました。',en:"This year's personnel deployment was decided on an application basis.",style:'Calm officer.'},
    {speaker:'ren_uni',jp:'選抜基準、院長クラスのアドバイザーも関わるんですか。',en:"In the selection criteria, do director-class advisors take part?",style:'Polite.'},
    {speaker:'takeda_officer',jp:'はい。外部アナリストの意見も反映しています。',en:"Yes. External-analyst input is also incorporated.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'広報誌の部数、増やす計画はありますか。',en:"Plans to increase the bulletin's print run?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'直行ルートでの地域配信を強化中です。',en:"We're strengthening nonstop-route regional distribution.",style:'Informative.'},
    {speaker:'ren_uni',jp:'ありがとうございます。',en:"Thank you.",style:'Close.'},
  ]},

  {id:'conv_05491',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher walks a uni student through an archaeology paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、考古学と亡命知識人の交流を扱うんですね。',en:"Your paper covers archaeology and exchanges with intellectuals in exile.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。神聖視された遺跡の損傷、試練の歴史として書きます。',en:"Yes. Damage to sites once deemed sacred — recorded as a history of trial.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'畜産遺構の比較、面白そうですね。',en:"Comparing livestock-related ruins sounds interesting.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'粒子レベルの分析手法、最新の論文を引用します。',en:"For particle-level analysis methods, I'll cite the latest papers.",style:'Plan.'},
    {speaker:'asuka_teacher',jp:'文献名の仮名表記、丁寧に整えて。',en:"Phonetic readings of source titles — set them carefully.",style:'Suggestion.'},
    {speaker:'ren_uni',jp:'承知しました。',en:"Understood.",style:'Close.'},
  ]},
  {id:'conv_05492',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss and his manager dissect a long-form documentary article',lines:[
    {speaker:'hiroshi_boss',jp:'この記事、亡命科学者の話、面白いな。',en:"This piece on exiled scientists is interesting.",style:'Boss.'},
    {speaker:'kenji_office',jp:'はい。畜産から考古学まで、研究領域は多岐にわたります。',en:"Yes. Their research spans from livestock to archaeology.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'発掘現場での損傷、神聖な遺物まで及んでいるな。',en:"On-site damage reaches even sacred relics.",style:'Analytical.'},
    {speaker:'kenji_office',jp:'粒子分析で復元を試みているチームもあります。',en:"Some teams attempt restoration via particle analysis.",style:'Insightful.'},
    {speaker:'hiroshi_boss',jp:'記録の仮名表記、最新の規則に従って統一しよう。',en:"Phonetic notation of records — unify under the latest rules.",style:'Direction.'},
    {speaker:'kenji_office',jp:'承知しました。',en:"Understood.",style:'Close.'},
  ]},
  {id:'conv_05493',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a uni reporter about a heritage-site case',lines:[
    {speaker:'takeda_officer',jp:'本件、神聖視された遺跡への損傷事案です。',en:"This case involves damage to a sacred-deemed site.",style:'Calm.'},
    {speaker:'ren_uni',jp:'亡命者が関わったという情報、確認されてるんですか。',en:"Are reports of an exile being involved confirmed?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。畜産従事者の証言と合わせて、考古学チームが解析中です。',en:"Yes. Alongside livestock-handler testimony, an archaeology team is analyzing.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'粒子の付着、決め手になりますか。',en:"Will particle deposits be decisive?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'試練のような検証ですが、丁寧に進めます。',en:"It's a trial-like verification, but we'll proceed carefully.",style:'Informative.'},
    {speaker:'ren_uni',jp:'資料の仮名表記、いただけますか。',en:"Could I get the phonetic-notation materials?",style:'Polite.'},
    {speaker:'takeda_officer',jp:'はい、共有します。',en:"Yes, I'll share.",style:'Close.'},
  ]},
  {id:'conv_05494',cluster:'C',ambient:'living_room_quiet',cast:['hiroshi_elder','ren_uni'],targets:C_T,scenario:'A uni student interviews a retired archaeologist',lines:[
    {speaker:'ren_uni',jp:'考古学の現場、長年携わってこられたんですよね。',en:"You've long worked at archaeology sites.",style:'Polite.'},
    {speaker:'hiroshi_elder',jp:'うん。神聖視された遺跡で、何度も試練に直面したよ。',en:"Yes. At sacred-considered sites, I faced trials many times.",style:'Veteran.'},
    {speaker:'ren_uni',jp:'亡命してきた仲間と共同研究もされたとか。',en:"You also did joint research with exiled colleagues?",style:'Probe.'},
    {speaker:'hiroshi_elder',jp:'うん。畜産文化圏とのつながり、貴重だった。',en:"Yes. Ties with livestock-culture areas were precious.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'粒子分析、当時は難しかったんですか。',en:"Was particle analysis hard back then?",style:'Curious.'},
    {speaker:'hiroshi_elder',jp:'ええ、仮名で書かれた古文書の解読も、何年もかかった。',en:"Yes — deciphering documents in phonetic notation took years.",style:'Wise close.'},
  ]},
  {id:'conv_05495',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','sakura_teen'],targets:C_T,scenario:'A doctor explains forensic science to a teen',lines:[
    {speaker:'saito_doctor',jp:'桜さん、現代の科学捜査、粒子分析が鍵なんですよ。',en:"Sakura, in modern forensics, particle analysis is the key.",style:'Friendly.'},
    {speaker:'sakura_teen',jp:'損傷した遺体や遺物、どう調べるんですか。',en:"How do you examine damaged remains or artifacts?",style:'Curious teen.'},
    {speaker:'saito_doctor',jp:'考古学の手法も応用されます。',en:"Archaeology techniques are also applied.",style:'Patient.'},
    {speaker:'sakura_teen',jp:'神聖視されてるご遺体に向き合う時、試練ですよね。',en:"Facing remains deemed sacred is a trial, isn't it.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。畜産系の汚染物質との関連も、調査することがあります。',en:"Yes. Sometimes we investigate links to livestock-related contaminants.",style:'Informative.'},
    {speaker:'sakura_teen',jp:'亡命してきた研究者の論文、参考になりそうです。',en:"Papers from exiled researchers seem useful.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'仮名表記の論文も含めて、紹介できますよ。',en:"Including phonetically-titled papers — I can introduce them.",style:'Close.'},
  ]},

  {id:'conv_05496',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens plan a tech & music weekend',lines:[
    {speaker:'sakura_teen',jp:'週末、新しいレコーダー買いに行かない?',en:"This weekend, want to buy a new recorder?",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'いいね。音源、Pcのプロセッサで編集できるかな。',en:"Sure. Can the source be edited on my PC processor?",style:'Casual.'},
    {speaker:'sakura_teen',jp:'うちのおばあさん、ピアニストだったんだよ。今は民家を改装して、ピアノ教室やってる。',en:"My grandma was a pianist. Now she runs a piano class out of a renovated house.",style:'Sharing.'},
    {speaker:'riku_teen',jp:'すげー。早稲田の音楽サークルも見学行ってみる?',en:"Cool. Want to scout the Waseda music club too?",style:'Suggestion.'},
    {speaker:'sakura_teen',jp:'うん。綿のセーター着てくね、寒そうだから。',en:"Yes. I'll wear a cotton sweater — sounds cold.",style:'Practical.'},
    {speaker:'riku_teen',jp:'了解。',en:"Got it.",style:'Close.'},
  ]},
  {id:'conv_05497',cluster:'D',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:D_T,scenario:'Two cafe friends compare creative project plans',lines:[
    {speaker:'aoi_barista',jp:'新しい音源、店のBGMに使いたくて。',en:"I want to use a new music source as cafe BGM.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'素敵!ピアニストの友達に頼んだ?',en:"Lovely! Asked your pianist friend?",style:'Excited.'},
    {speaker:'aoi_barista',jp:'うん。録音はレコーダー新調して、編集は最新のプロセッサで。',en:"Yes. New recorder for capture, edited on the latest processor.",style:'Plan.'},
    {speaker:'mei_romantic',jp:'近くの民家を改装したスタジオ、貸してもらえるって。',en:"A nearby house-turned-studio can be rented.",style:'Aside.'},
    {speaker:'aoi_barista',jp:'おばあさん経営のスタジオで、綿の防音材使ってる、いい空間だよ。',en:"It's grandma-run, uses cotton sound-proofing, lovely space.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'早稲田の学生さんもよく使ってるって聞いた。',en:"Heard Waseda students often use it too.",style:'Knowing close.'},
  ]},
  {id:'conv_05498',cluster:'D',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:D_T,scenario:'A uni student helps a teen friend plan a recording project',lines:[
    {speaker:'sakura_teen',jp:'先輩、自宅で音源を録音したいんです。',en:"Senpai, I want to record at home.",style:'Eager.'},
    {speaker:'ren_uni',jp:'いいね。プロセッサ強めのPCあれば編集も楽。',en:"Nice. With a strong processor PC, editing's easy.",style:'Helpful.'},
    {speaker:'sakura_teen',jp:'近所のピアニストのおばあさんに、伴奏お願いするつもりです。',en:"I'll ask the neighborhood pianist grandma to accompany.",style:'Plan.'},
    {speaker:'ren_uni',jp:'録音は静かな民家で。レコーダーは私のを貸す。',en:"Record in a quiet house. I'll lend my recorder.",style:'Generous.'},
    {speaker:'sakura_teen',jp:'綿のクッション、防音用に揃えるね。',en:"I'll prep cotton cushions for soundproofing.",style:'Practical.'},
    {speaker:'ren_uni',jp:'早稲田の音楽研究会も招待しよう。',en:"Let's invite the Waseda music research circle too.",style:'Warm close.'},
  ]},
  {id:'conv_05499',cluster:'D',ambient:'living_room_quiet',cast:['ryosuke_dad','yumiko_mom'],targets:D_T,scenario:'A married couple plans an anniversary recital',lines:[
    {speaker:'yumiko_mom',jp:'結婚記念日に、近所のピアニストを招いた小さなパーティはどう?',en:"For our anniversary, a small party with a neighborhood pianist?",style:'Warm.'},
    {speaker:'ryosuke_dad',jp:'いいね。録音用にレコーダー用意するわ。',en:"Sure. I'll prep a recorder.",style:'Easy.'},
    {speaker:'yumiko_mom',jp:'音源は子供たちの好きな曲も混ぜたいわ。',en:"For sources I want to mix in the kids' favorite songs.",style:'Cheerful.'},
    {speaker:'ryosuke_dad',jp:'PC、プロセッサが最新じゃないかも。新調が必要だな。',en:"My PC's processor may be old. Might need an upgrade.",style:'Practical.'},
    {speaker:'yumiko_mom',jp:'お父さんのおばあさんから譲ってもらった、綿のクロスを敷きましょう。',en:"Let's lay out the cotton cloth your grandma passed down.",style:'Warm.'},
    {speaker:'ryosuke_dad',jp:'記念に古い民家風の写真、撮ろう。早稲田時代の仲間も招いて。',en:"For memory, let's shoot in old-house style. Invite my Waseda-era friends too.",style:'Warm close.'},
  ]},
  {id:'conv_05500',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A Kansai chef and a barista swap event-prep ideas',lines:[
    {speaker:'daichi_kansai',jp:'アオイさん、ライブ予定あるんやて?',en:"Aoi-san, you've a live event coming up?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい、ピアニストの友達と組んで、店で開きます。',en:"Yes, with my pianist friend, I'm hosting at the shop.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'録音もすんの?ええプロセッサのPC持ってる?',en:"Recording too? Got a strong-processor PC?",style:'Probe.'},
    {speaker:'aoi_barista',jp:'はい。古いレコーダーも併用して、二系統で残します。',en:"Yes. Using an old recorder alongside for two-channel capture.",style:'Plan.'},
    {speaker:'daichi_kansai',jp:'うちのおばあさんの民家、綿の毛布貸せるで。',en:"Our grandma's place — I can lend cotton blankets.",style:'Generous.'},
    {speaker:'aoi_barista',jp:'早稲田の友達も来てくれるって。楽しみです。',en:"Waseda friends will come too. I'm excited.",style:'Warm close.'},
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

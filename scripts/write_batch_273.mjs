import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_273 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['何やら','思い込ん','思い込み','やさしく','今さら','間近','一同','礼儀']
const B_T = ['引か','運ば','塗り','桁','タスク','パブリック','フィードバック','会費']
const C_T = ['引き起こし','妨げ','党首','幕府','中傷','ワクチン','肺','上空']
const D_T = ['メガネ','たばこ','色彩','宝石','バター','インク','メロディ','笛']

const data = [
  {id:'conv_05421',cluster:'A',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:A_T,scenario:'Two cafe friends recap an awkward birthday party',lines:[
    {speaker:'mei_romantic',jp:'昨日のパーティ、何やら最初から空気変だったよね。',en:"Yesterday's party — something felt off from the start.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん。皆、お互いに思い込ん感じで、雰囲気がぎこちなかった。',en:"Yeah. Everyone was assuming things, the air was awkward.",style:'Knowing.'},
    {speaker:'mei_romantic',jp:'私の思い込みかもしれないけど、ホスト一同、礼儀正しすぎたよ。',en:"Maybe my mistaken impression, but the hosts were all too polite.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'ふふ、緊張してたのかも。今さらだけど、もっとやさしく声かければよかった。',en:"Hehe, they may have been nervous. Hindsight — I should have been gentler.",style:'Self-deprecating.'},
    {speaker:'mei_romantic',jp:'お別れ間近、ようやく皆、笑い合えてたよね。',en:"Right before goodbye, everyone could finally laugh together.",style:'Warm.'},
    {speaker:'aoi_barista',jp:'うん、終わりよければすべて良し。',en:"Yes — all's well that ends well.",style:'Close.'},
  ]},
  {id:'conv_05422',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk home talking about a misunderstanding',lines:[
    {speaker:'sakura_teen',jp:'ねぇ、ハルカが何やら私に怒ってる気がする。',en:"Hey, I feel like Haruka's somehow mad at me.",style:'Worried teen.'},
    {speaker:'riku_teen',jp:'お前の思い込みじゃない?彼女、いつもクラス一同にやさしくしてるじゃん。',en:"Isn't it your assumption? She's always kind to the whole class.",style:'Reassuring teen.'},
    {speaker:'sakura_teen',jp:'今さらだけど、私、礼儀欠いた態度してたかも。',en:"Hindsight — maybe I was rude.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'試験間近で皆ピリピリしてるし、思い込んでないって言われたら気にすんな。',en:"Tests are near and people are tense — if she says she's not assuming, don't worry.",style:'Practical.'},
    {speaker:'sakura_teen',jp:'明日、私から声かけてみる。',en:"Tomorrow I'll reach out myself.",style:'Resolved.'},
    {speaker:'riku_teen',jp:'いいね。応援する。',en:"Nice. I'm rooting for you.",style:'Warm close.'},
  ]},
  {id:'conv_05423',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom teaches her young son about manners',lines:[
    {speaker:'sho_child',jp:'ママ、今日ケンくんが何やら泣いてたよ。',en:"Mom, Ken was somehow crying today.",style:'Worried child.'},
    {speaker:'yumiko_mom',jp:'あらら、どうしたの?',en:"Oh dear, what happened?",style:'Gentle.'},
    {speaker:'sho_child',jp:'みんなが彼を、悪い子だって思い込んでて。',en:"Everyone assumed he was a bad kid.",style:'Soft.'},
    {speaker:'yumiko_mom',jp:'それは思い込みかもね。やさしく声かけてあげるのが、礼儀の第一歩よ。',en:"That might be a mistaken assumption. Speaking kindly is the first step of manners.",style:'Patient.'},
    {speaker:'sho_child',jp:'今さらかな?明日でも、僕、声かけたい。',en:"Is it too late? Tomorrow even, I want to reach out.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'クラス一同で、もう一度仲良くなるチャンスだよ。',en:"It's a chance to be friends again as a whole class.",style:'Warm close.'},
  ]},
  {id:'conv_05424',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple talks about a past disagreement',lines:[
    {speaker:'hiroshi_elder',jp:'昔の友人と、何やら気まずいまま別れたことがあってな。',en:"With an old friend, we somehow parted on awkward terms.",style:'Reflective elder.'},
    {speaker:'sachiko_grandma',jp:'あら、思い込んだままだったの?',en:"Oh, you held onto that assumption?",style:'Gentle.'},
    {speaker:'hiroshi_elder',jp:'ええ。私の思い込みが大きかったかもしれん。',en:"Yes. My misreading might have been the bigger part.",style:'Honest.'},
    {speaker:'sachiko_grandma',jp:'今さらだけど、やさしく手紙を書いてみたら?',en:"Even now, why not write him a kind letter?",style:'Encouraging.'},
    {speaker:'hiroshi_elder',jp:'引退間近、礼儀として、伝えるべきだろう。',en:"Near retirement, as a matter of courtesy, I should tell him.",style:'Resolved.'},
    {speaker:'sachiko_grandma',jp:'町内一同で出すお礼状と一緒に、入れておきましょう。',en:"Tuck it in with the thank-you note from the whole neighborhood.",style:'Warm close.'},
  ]},
  {id:'conv_05425',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A uni student helps a teen friend untangle a friendship issue',lines:[
    {speaker:'sakura_teen',jp:'先輩、最近、ナナちゃんが何やら距離置いてる気がして。',en:"Senpai, Nana lately seems distant somehow.",style:'Quiet teen.'},
    {speaker:'ren_uni',jp:'お前の思い込みかも。やさしく、真意を確かめてみよう。',en:"Could be your assumption. Gently check her true feelings.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'試験間近で、私の方が余裕なくて、礼儀かいてたかも。',en:"With tests near, I had no slack and might have been rude.",style:'Self-reflective.'},
    {speaker:'ren_uni',jp:'今さらでも、一同が分かり合うチャンスはまだあるよ。',en:"Even now, there's still a chance to mutually understand.",style:'Wise.'},
    {speaker:'sakura_teen',jp:'明日、私から話します。',en:"Tomorrow I'll reach out.",style:'Resolved.'},
    {speaker:'ren_uni',jp:'うん、応援してる。',en:"Yeah, I'm rooting for you.",style:'Warm close.'},
  ]},

  {id:'conv_05426',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews a public-event budget',lines:[
    {speaker:'hiroshi_boss',jp:'パブリックイベントの予算、桁の見直しが必要だな。',en:"For the public event budget, the figures need a digit-level review.",style:'Crisp boss.'},
    {speaker:'kenji_office',jp:'はい。会費収入、想定通りに引かない可能性があります。',en:"Yes. Membership-fee income may not lift to expectations.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'タスク分担、塗り重ねて整理してくれ。',en:"Task split — refine it by layered passes.",style:'Direction.'},
    {speaker:'kenji_office',jp:'承知しました。各部からフィードバックを集めて、運ばせます。',en:"Understood. I'll gather feedback from each section and carry it forward.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'頼む。',en:"Please.",style:'Brief close.'},
  ]},
  {id:'conv_05427',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers split tasks for a corporate event',lines:[
    {speaker:'yuki_office',jp:'タスク一覧、今朝のフィードバックも踏まえて更新してね。',en:"Update the task list reflecting this morning's feedback.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。会費の請求書、桁を間違えないよう二重チェックします。',en:"Yes. Membership invoices — I'll double-check the figures.",style:'Methodical.'},
    {speaker:'yuki_office',jp:'設営の壁、塗り直しが必要だと現場から連絡来てる。',en:"On-site says the venue wall needs repainting.",style:'Update.'},
    {speaker:'kenji_office',jp:'パブリック向けの掲示物も、同時に運ばせます。',en:"I'll have the public-facing signage carried over together.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'注目を引かないと、参加者集まらないからな。',en:"Without drawing attention, attendees won't come.",style:'Strategic.'},
    {speaker:'kenji_office',jp:'了解です。',en:"Got it.",style:'Brief close.'},
  ]},
  {id:'conv_05428',cluster:'B',ambient:'office_quiet_low',cast:['ren_uni','yuki_office'],targets:B_T,scenario:'A uni intern interviews a manager about event ops',lines:[
    {speaker:'ren_uni',jp:'パブリックイベント運営のタスク、どう分けていますか。',en:"For public-event ops, how are tasks divided?",style:'Polite intern.'},
    {speaker:'yuki_office',jp:'各担当にフィードバックの仕組みを置き、桁の大きい予算は本部で管理します。',en:"Each owner has a feedback loop; large-figure budgets are headquarters-managed.",style:'Helpful.'},
    {speaker:'ren_uni',jp:'設営は塗り作業や搬入で運ばれる物量、相当ですよね。',en:"Setup includes painting and tons of items carried in, right?",style:'Curious.'},
    {speaker:'yuki_office',jp:'はい。会費だけでは賄えないので、スポンサーも引かないと厳しいです。',en:"Yes. Member fees alone don't cover it; sponsors must be drawn in too.",style:'Informative.'},
    {speaker:'ren_uni',jp:'記事に反映させていただきます。',en:"I'll reflect it in my article.",style:'Close.'},
  ]},
  {id:'conv_05429',cluster:'B',ambient:'cafe_quiet_chatter',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors a younger boss on event budgeting',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、桁を間違えて大目玉食ったよ。',en:"In my youth I got chewed out for a misplaced digit.",style:'Wry elder.'},
    {speaker:'hiroshi_boss',jp:'肝に銘じます。タスクの優先順位、再点検します。',en:"I'll engrave that. I'll re-check task priorities.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'パブリック向けの広報、注目を引かない案は意味がない。',en:"Public-facing PR — a plan that doesn't draw attention is meaningless.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい、内部フィードバックを多めに集めます。',en:"Yes — I'll collect more internal feedback.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'会費収入だけに頼らず、スポンサーも運ばせろ。塗り絵のように手堅く準備するんだ。',en:"Don't rely on member fees alone; bring sponsors in too. Prep solidly like coloring a paint-by-numbers.",style:'Wise advice.'},
    {speaker:'hiroshi_boss',jp:'承知しました。',en:"Understood.",style:'Close.'},
  ]},
  {id:'conv_05430',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:B_T,scenario:'A police officer briefs a uni reporter about public-event safety',lines:[
    {speaker:'takeda_officer',jp:'パブリック催事の警備、ご質問ですね。',en:"On public-event security, your question.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。会場運営側からのフィードバック、どう吸い上げていますか。',en:"Yes. How do you absorb feedback from event runners?",style:'Polite.'},
    {speaker:'takeda_officer',jp:'毎回タスク管理表で確認します。桁の大きい人出は、特に警戒です。',en:"Each time via a task-management sheet. Large-figure crowds get heightened alert.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'壁の塗り直しなど、設営側からの依頼にも対応しますか。',en:"Do you also respond to setup requests like wall repaints?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'警備の動線が運ばれる経路を確保した上で、対応します。',en:"After securing the route by which guard flows move, we respond.",style:'Informative.'},
    {speaker:'ren_uni',jp:'会費のかかる施設、注目を引かないと運営が苦しいですよね。',en:"Fee-charging venues struggle without attention, right?",style:'Engaged.'},
    {speaker:'takeda_officer',jp:'おっしゃる通りです。',en:"As you say.",style:'Close.'},
  ]},

  {id:'conv_05431',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher walks a uni student through a public-health & politics paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、ワクチン政策と党首発言の関係を扱うんですね。',en:"Your paper covers vaccine policy and party-leader statements.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。誤情報が肺疾患の早期発見を妨げた事例も含めます。',en:"Yes. Cases where misinformation hindered early lung-disease detection too.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'歴史的には、幕府期の流言が同様の混乱を引き起こした例もあります。',en:"Historically, shogunate-era rumors caused similar disruptions.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'中傷の拡散経路、上空からの俯瞰図のように整理します。',en:"I'll lay out smear-spread routes as if from a bird's-eye view.",style:'Plan.'},
    {speaker:'asuka_teacher',jp:'比較対象、丁寧に。',en:"Compare carefully.",style:'Suggestion.'},
    {speaker:'ren_uni',jp:'承知しました。',en:"Understood.",style:'Close.'},
  ]},
  {id:'conv_05432',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss and his manager discuss a policy column',lines:[
    {speaker:'hiroshi_boss',jp:'この記事、ワクチン誤情報が肺の検診を妨げた話だな。',en:"This piece — misinfo hindering lung screening.",style:'Boss.'},
    {speaker:'kenji_office',jp:'はい。党首発言が現場の混乱を引き起こしました。',en:"Yes. A party-leader remark caused field disruption.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'昔の幕府期に似てるな、と書き手は言ってる。',en:"The writer says it resembles shogunate-era patterns.",style:'Analytical.'},
    {speaker:'kenji_office',jp:'中傷の連鎖、上空から構造把握する必要があります。',en:"The smear chain needs bird's-eye structural understanding.",style:'Insightful.'},
    {speaker:'hiroshi_boss',jp:'来月の経営会議で議題に。',en:"On next month's exec agenda.",style:'Decisive.'},
    {speaker:'kenji_office',jp:'承知しました。',en:"Understood.",style:'Brief close.'},
  ]},
  {id:'conv_05433',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a uni reporter about online smear cases',lines:[
    {speaker:'takeda_officer',jp:'中傷事案、ワクチン関連で多発しています。',en:"Smear cases are frequent around vaccines.",style:'Calm.'},
    {speaker:'ren_uni',jp:'肺疾患の患者さんへの誹謗中傷、深刻ですよね。',en:"Slander against lung-disease patients is serious.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。デマの拡散が、患者さんの治療を妨げた例もあります。',en:"Yes. Disinformation has hindered patients' treatment too.",style:'Informative.'},
    {speaker:'ren_uni',jp:'党首発言の引用も、誤って引き起こした事例ですか。',en:"Are mis-citations of a party leader cases too?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。上空のドローン撮影による証拠も活用しています。',en:"Yes. We also use evidence from drone overhead footage.",style:'Detail.'},
    {speaker:'ren_uni',jp:'記事に反映させていただきます。',en:"I'll reflect it in the article.",style:'Close.'},
  ]},
  {id:'conv_05434',cluster:'C',ambient:'living_room_quiet',cast:['hiroshi_elder','ren_uni'],targets:C_T,scenario:'A uni student interviews a retired historian about epidemics',lines:[
    {speaker:'ren_uni',jp:'幕府末期の感染症対応、史料に何かありましたか。',en:"Late-shogunate epidemic responses — anything in the records?",style:'Polite.'},
    {speaker:'hiroshi_elder',jp:'多数の混乱を引き起こした事例があるよ。',en:"There are cases that triggered considerable chaos.",style:'Veteran.'},
    {speaker:'ren_uni',jp:'党首格にあたる藩主の判断が、治療を妨げたんですか。',en:"Did decisions of clan lords — the equivalent of party leaders — hinder treatment?",style:'Probe.'},
    {speaker:'hiroshi_elder',jp:'うん。庶民への中傷も、肺の病で死者を増やした一因だった。',en:"Yes. Slander of commoners also worsened lung-disease deaths.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'ワクチンの概念は、まだ無かった時代ですよね。',en:"Vaccines were still unknown then, right?",style:'Curious.'},
    {speaker:'hiroshi_elder',jp:'空、上空から俯瞰する視点が、今こそ必要なんだ。',en:"A bird's-eye perspective is what we need now.",style:'Wise close.'},
  ]},
  {id:'conv_05435',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','sakura_teen'],targets:C_T,scenario:'A doctor explains immunity & disinformation to a teen',lines:[
    {speaker:'saito_doctor',jp:'桜さん、ワクチンの仕組み、簡単に説明しますね。',en:"Sakura, let me briefly explain how vaccines work.",style:'Friendly doctor.'},
    {speaker:'sakura_teen',jp:'お願いします!最近、肺の話と一緒にネットで色々言われてて。',en:"Please! Lately there's lots of talk on the web together with lung topics.",style:'Curious teen.'},
    {speaker:'saito_doctor',jp:'デマや中傷が治療を妨げる例もあります。情報源を見極めて。',en:"Misinfo and slander hinder treatment too. Vet sources carefully.",style:'Patient.'},
    {speaker:'sakura_teen',jp:'政治家、特に党首発言の影響、大きいですよね。',en:"Politicians' words, especially party leaders, have big impact, right?",style:'Engaged.'},
    {speaker:'saito_doctor',jp:'はい。歴史的に幕府の指示で混乱を引き起こした例も学べます。',en:"Yes. We can also learn from shogunate-era directives that caused chaos.",style:'Educator.'},
    {speaker:'sakura_teen',jp:'上空から俯瞰する目線、大事にします。',en:"I'll value the bird's-eye view.",style:'Resolved.'},
    {speaker:'saito_doctor',jp:'それで十分です。',en:"That's quite enough.",style:'Warm close.'},
  ]},

  {id:'conv_05436',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens shop for accessories and snacks',lines:[
    {speaker:'sakura_teen',jp:'新しいメガネ買いに行こうよ。色彩豊かなフレーム、探したい。',en:"Let's go buy new glasses. Hunt for a frame with rich color.",style:'Excited.'},
    {speaker:'riku_teen',jp:'いいね。途中で宝石店ものぞこうぜ。',en:"Sure. Peek at a jewelry shop on the way.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'カフェではバタートーストとミルクで一息。',en:"At the cafe, buttered toast and milk for a break.",style:'Plan.'},
    {speaker:'riku_teen',jp:'今夜部活で笛の演奏あるから、メロディもう一度練習するわ。',en:"Tonight at club there's flute, so I'll practice the melody again.",style:'Focused.'},
    {speaker:'sakura_teen',jp:'帰りに文房具屋で新しいインクも欲しい。',en:"On the way back I want new ink at the stationery store.",style:'Excited.'},
    {speaker:'riku_teen',jp:'たばこ屋の前は通り抜けるだけな。',en:"We'll just pass the tobacco shop.",style:'Joking close.'},
  ]},
  {id:'conv_05437',cluster:'D',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:D_T,scenario:'Two cafe friends plan a weekend creative session',lines:[
    {speaker:'aoi_barista',jp:'週末、新しいメガネと宝石のアクセを買い替えようかな。',en:"This weekend, maybe swap my glasses and jewelry accents.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'素敵!色彩豊かなコーディネートにしよう。',en:"Lovely! Build a rich-color coordination.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'バターたっぷりのケーキ、お土産にどう?',en:"How about butter-rich cake as a souvenir?",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'万年筆のインク、新しい色も買って、絵を描きたい。',en:"I want a new pen-ink color and to draw.",style:'Dreamy.'},
    {speaker:'aoi_barista',jp:'帰りはたばこの煙のないテラスで。',en:"Coming back, a smoke-free terrace.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'BGMは笛のメロディがいいよね。',en:"BGM should be a flute melody, right?",style:'Warm close.'},
  ]},
  {id:'conv_05438',cluster:'D',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:D_T,scenario:'A uni student helps a teen friend plan a craft project',lines:[
    {speaker:'sakura_teen',jp:'先輩、自由工作で「色彩豊かな笛」作りたいんです。',en:"Senpai, for a free project I want to make a flute rich in color.",style:'Eager.'},
    {speaker:'ren_uni',jp:'いいね。塗料のインク選び、丁寧にやろう。',en:"Nice. Choose the paint-style inks carefully.",style:'Helpful.'},
    {speaker:'sakura_teen',jp:'本体に小さな宝石も付けたいです。',en:"I want to add small jewels to the body.",style:'Plan.'},
    {speaker:'ren_uni',jp:'メガネ越しでも分かるくらい光ると映えるな。',en:"Bright enough to see through glasses would pop.",style:'Knowing.'},
    {speaker:'sakura_teen',jp:'BGMにメロディ流して撮影するつもり。',en:"I'll film with a melody playing.",style:'Excited.'},
    {speaker:'ren_uni',jp:'発表会、たばこ煙の無い場所で。バターサンドの差し入れもしよう。',en:"For the recital, a smoke-free spot. I'll bring butter sandwiches.",style:'Warm close.'},
  ]},
  {id:'conv_05439',cluster:'D',ambient:'living_room_quiet',cast:['ryosuke_dad','yumiko_mom'],targets:D_T,scenario:'A married couple plans a creative weekend',lines:[
    {speaker:'ryosuke_dad',jp:'週末、子供の発表会あるから、メガネ磨いとくか。',en:"Weekend has the kids' recital — should polish my glasses.",style:'Easy.'},
    {speaker:'yumiko_mom',jp:'バターたっぷりのケーキ、用意するね。',en:"I'll prep a butter-rich cake.",style:'Warm.'},
    {speaker:'ryosuke_dad',jp:'笛のメロディ、毎日練習してたな。色彩豊かな衣装も着るんだろ?',en:"They've practiced the flute melody daily. Wearing a color-rich costume too?",style:'Cheerful.'},
    {speaker:'yumiko_mom',jp:'うん。小さな宝石付きの装飾も付ける予定。',en:"Yes. Adding small jewel-studded accents.",style:'Soft.'},
    {speaker:'ryosuke_dad',jp:'受付用に、サインのインクも忘れずに。',en:"For sign-in, don't forget the signature ink.",style:'Practical.'},
    {speaker:'yumiko_mom',jp:'たばこ吸う人いないか、念のため確認するね。',en:"I'll check just in case there are no smokers around.",style:'Caring close.'},
  ]},
  {id:'conv_05440',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A Kansai chef and a barista swap craft & food ideas',lines:[
    {speaker:'daichi_kansai',jp:'アオイさん、新作のバタークッキー、色彩豊かに仕上がっとるな。',en:"Aoi-san, your new butter cookies came out richly colored.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい、宝石のような飾りもトッピングしてみました。',en:"Yes — even put jewel-like decorations on top.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'メガネ越しでもキラキラしとる。たばこ屋の角の写真スタジオで撮りに行こか。',en:"Sparkly even through glasses. Let's shoot at the studio by the tobacco-shop corner.",style:'Plan Kansai.'},
    {speaker:'aoi_barista',jp:'いいですね。お礼にレコードの笛のメロディ流しましょう。',en:"Sounds good. I'll play a flute melody on the record in thanks.",style:'Warm.'},
    {speaker:'daichi_kansai',jp:'看板のインク、すげえ綺麗やったわ。',en:"The signboard's ink was really beautiful.",style:'Knowing Kansai.'},
    {speaker:'aoi_barista',jp:'ありがとうございます。今度ご一緒に。',en:"Thank you. Let's collaborate next time.",style:'Close.'},
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

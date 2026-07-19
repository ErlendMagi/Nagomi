import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_289 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['左側','身長','清潔','憂鬱','潰し','そろっ','空白','オチ']
const B_T = ['久保','浩','茂','竹内','後藤','従い','プロトコル','函']
const C_T = ['女王','外来','航海','南米','無名','無数','メタ','語彙']
const D_T = ['猿','泥棒','架空','はなし','まくる','られれ','生ん','日本一']

const data = [
  // A
  {id:'conv_05741',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat after a school checkup',lines:[
    {speaker:'sho_child',jp:'ママ、健康診断で、左側の視力、また下がってた。',en:"Mom, at the checkup my left vision dropped again.",style:'Subdued child.'},
    {speaker:'yumiko_mom',jp:'メガネ、新調しようね。身長は伸びたって聞いたよ。',en:"Let's get new glasses. They said your height grew.",style:'Warm.'},
    {speaker:'sho_child',jp:'保健室、清潔で居心地よかった。',en:"The nurse's office was clean and comfy.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'憂鬱な気分の時は、すぐ寄っていいって先生も言ってたね。',en:"Teacher said you can drop by anytime you're down.",style:'Soft.'},
    {speaker:'sho_child',jp:'今日のお話、最後のオチが面白くて、みんな笑った。',en:"Today's story — the final twist was so funny, all laughed.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'ジャガイモを潰してコロッケ、夕飯にね。',en:"Mashing potatoes for croquettes for dinner.",style:'Warm.'},
    {speaker:'sho_child',jp:'クラス、全員そろってないと寂しいよね。',en:"Class feels empty when not everyone's together.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'今、放課後の予定、空白の日もあっていいのよ。',en:"Empty afternoon slots are okay too.",style:'Tender close.'},
  ]},
  {id:'conv_05742',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends decompress after work',lines:[
    {speaker:'mei_romantic',jp:'最近、憂鬱な気持ちが続いてる。',en:"Lately I've felt low for a while.",style:'Vulnerable.'},
    {speaker:'aoi_barista',jp:'休みは、ちゃんと取れてる?身長と健康、無理しないでね。',en:"Are you taking breaks? Don't overdo it.",style:'Gentle.'},
    {speaker:'mei_romantic',jp:'部屋は清潔に保ってるんだけど、心は荒れ気味。',en:"Room stays clean, but my heart's restless.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'カレンダーに空白の日、わざと作って。',en:"Carve blank days into the calendar deliberately.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'駅の左側のベーカリー、新メニュー出てた。',en:"Bakery on the left of the station has a new menu.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'いいね。ストレス、お菓子でちょっと潰してね。',en:"Nice. Crush some stress with sweets a bit.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'同僚がそろって応援してくれるの、ありがたい。',en:"All my coworkers cheering me on — grateful.",style:'Tender.'},
    {speaker:'aoi_barista',jp:'最後にオチがある話、また聞かせてね。',en:"Tell me a story with a punchline next time.",style:'Warm close.'},
  ]},
  {id:'conv_05743',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk home from a checkup day',lines:[
    {speaker:'sakura_teen',jp:'今日の身体測定、身長また少し伸びてた。',en:"Today's checkup — height grew a bit more.",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'いいな。俺は左側の握力、弱かったって言われた。',en:"Nice. They said my left grip was weak.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'制服、洗濯して清潔だと、気分も違うよね。',en:"Clean washed uniforms even shift the mood.",style:'Animated.'},
    {speaker:'riku_teen',jp:'今日、何故か憂鬱で、午前中は気力なかった。',en:"Today, somehow low; no energy in the morning.",style:'Subdued.'},
    {speaker:'sakura_teen',jp:'昼食の予定、皆そろって食べた?',en:"Lunch — everyone together?",style:'Probe.'},
    {speaker:'riku_teen',jp:'うん。担任が話のオチで笑わせてくれた。',en:"Yeah. Homeroom's story punchline got us laughing.",style:'Bright.'},
    {speaker:'sakura_teen',jp:'明日は予定が空白。映画でも観に行く?',en:"Tomorrow's empty. Movie?",style:'Cheerful.'},
    {speaker:'riku_teen',jp:'いいね。ポップコーン、思いきり潰して食う。',en:"Sure. I'll crush popcorn to my heart's content.",style:'Wry close.'},
  ]},
  {id:'conv_05744',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple talks about a checkup',lines:[
    {speaker:'hiroshi_elder',jp:'昨日の検診、左側の腎臓が少し気になるって。',en:"Yesterday's checkup — left kidney slightly noted.",style:'Calm.'},
    {speaker:'sachiko_grandma',jp:'え、心配ね。憂鬱にならないでね。',en:"Oh, worrying. Don't get down.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'身長、少し縮んだみたい。',en:"Height seems slightly shrunken.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'お部屋を清潔に、よく休んで。',en:"Keep your room clean, rest well.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'孫が遊びに来ると、子供がそろって賑やかでいい。',en:"When grandkids visit, all gathered, it's lively.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'明日の予定、空白の時間ある?',en:"Tomorrow — any empty time?",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'うん。お話のオチを楽しむ会、二人で開こう。',en:"Yes — story-punchline gathering, just us two.",style:'Warm.'},
    {speaker:'sachiko_grandma',jp:'お餅、つぶし餡にして、おやつね。',en:"Mash mochi into bean-paste, for a snack.",style:'Warm close.'},
  ]},
  {id:'conv_05745',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai gives life advice to a teen friend',lines:[
    {speaker:'ren_uni',jp:'桜、心が憂鬱な時、何してる?',en:"Sakura, what do you do when down?",style:'Easy senpai.'},
    {speaker:'sakura_teen',jp:'清潔な部屋で、好きな音楽を流します。',en:"Music in a clean room.",style:'Earnest teen.'},
    {speaker:'ren_uni',jp:'いいな。スケジュールに空白を作るの、大事だぞ。',en:"Nice. Build blank time into the schedule — key.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'駅の左側のカフェ、勉強で行きます。',en:"Cafe on the left of the station — I go to study.",style:'Bright.'},
    {speaker:'ren_uni',jp:'身長より、心の高さで人を見るんだぞ。',en:"Read people by heart-height, not body-height.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'時々、不安をぐっと潰して頑張ってます。',en:"Sometimes I just crush down anxiety and push.",style:'Soft.'},
    {speaker:'ren_uni',jp:'仲間がそろって支えてくれる、感謝だな。',en:"Friends gathered to support — gratitude.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'最後にオチがある話、もっと聞きたいです。',en:"Stories with punchlines — want more.",style:'Warm close.'},
  ]},

  // B
  {id:'conv_05746',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss runs a team meeting',lines:[
    {speaker:'hiroshi_boss',jp:'今月の体制、久保さんと浩さんが新プロジェクト主担当。',en:"This month, Kubo-san and Hiroshi-san lead the new project.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。技術側は茂さんと竹内さん。後藤さんがサポート。',en:"Yes. Tech-side: Shigeru-san and Takeuchi-san. Goto-san supports.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'手順書に従い、改訂版プロトコルを採用しよう。',en:"Following the SOP, adopt the revised protocol.",style:'Direction.'},
    {speaker:'kenji_office',jp:'函館支店からも、社内会議に出席です。',en:"Hakodate branch will join the internal meeting too.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'よし、進めよう。',en:"Good, proceed.",style:'Close.'},
  ]},
  {id:'conv_05747',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss org changes',lines:[
    {speaker:'yuki_office',jp:'久保部長、引き継ぎ完了したらしい。',en:"Director Kubo finished the handover, it seems.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。浩さんが、後任で正式着任です。',en:"Yes. Hiroshi-san is the formal successor.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'技術勉強会、茂さん、竹内さん、後藤さん、参加でしょ。',en:"Tech study group — Shigeru, Takeuchi, Goto attending, right?",style:'Direction.'},
    {speaker:'kenji_office',jp:'新しい指針に従い、プロトコル統一を進めます。',en:"Following new guidelines, unify protocols.",style:'Methodical.'},
    {speaker:'yuki_office',jp:'函館支店も同期な。',en:"Hakodate branch synced too.",style:'Close.'},
  ]},
  {id:'conv_05748',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss introduces a uni intern to the team',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、こちら久保部長、隣が浩さん。後ろが茂さん、竹内さん、後藤さん。',en:"Ren, this is Director Kubo, next is Hiroshi-san. Behind are Shigeru, Takeuchi, Goto.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'初めまして。よろしくお願いします。',en:"Pleased to meet you.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'各部署の指示に従い、業務プロトコルを学んでくれ。',en:"Following each section's lead, learn our workflow protocols.",style:'Direction.'},
    {speaker:'ren_uni',jp:'函館支店との連携、見学できますか。',en:"Can I observe Hakodate-branch coordination?",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'うん、来週手配する。',en:"Yes, arranged for next week.",style:'Close.'},
  ]},
  {id:'conv_05749',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs a manager on a joint protocol',lines:[
    {speaker:'takeda_officer',jp:'御社久保部長、浩課長、ご紹介ありがとうございました。',en:"Director Kubo, Section-Chief Hiroshi — thanks for the intro.",style:'Calm.'},
    {speaker:'kenji_office',jp:'こちらこそ。茂さん、竹内さん、後藤さんも紹介できて何よりです。',en:"Likewise. Glad to introduce Shigeru, Takeuchi, Goto too.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察と御社の合同プロトコル、新指針に従い、運用を始めます。',en:"Police-firm joint protocol — following new guidelines, we launch.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'函館支店、地域での運用も歩調を合わせます。',en:"Hakodate branch'll align in regional ops.",style:'Update.'},
    {speaker:'takeda_officer',jp:'よろしくお願いします。',en:"Please proceed.",style:'Close.'},
  ]},
  {id:'conv_05750',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec advises on company succession',lines:[
    {speaker:'hiroshi_elder',jp:'久保くん、退任時の心得、若い頃に伝えたな。',en:"Kubo — I shared retirement principles when young.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。次代は浩さん、茂さんが牽引してくれます。',en:"Yes. The next era's led by Hiroshi-san and Shigeru-san.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'竹内くんも、後藤くんも、慎重に育てろ。',en:"Cultivate Takeuchi and Goto carefully too.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。新プロトコルにも、教えに従い対応します。',en:"Yes. Following your teaching, we'll handle the new protocol.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'函館支店、若い頃の私の心の故郷だ。',en:"Hakodate branch — my youthful heart-home.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_05751',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses a historical documentary',lines:[
    {speaker:'asuka_teacher',jp:'論文、女王のもとで進んだ航海、興味深いテーマですね。',en:"Your paper on voyages under a queen is interesting.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。南米沿岸の外来者、無名の航海者も、無数の足跡を残しています。',en:"Yes. Foreign newcomers on the South-American coast, countless unknown voyagers, left many traces.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'メタ的な分析として、当時の語彙、地名にも残っていますね。',en:"As meta-analysis, period vocabulary persists in place names.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。当時の語彙が、現代の理解を助けます。',en:"Yes. Period vocabulary aids modern understanding.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'丁寧な仕事ですね。',en:"Careful work.",style:'Reflective close.'},
  ]},
  {id:'conv_05752',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor explains a tropical disease topic to a reporter',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、外来種の感染症、南米由来のものが注目されています。',en:"Ren, foreign-origin infections — South-American-origin ones get attention.",style:'Calm.'},
    {speaker:'ren_uni',jp:'歴史的には、女王時代の航海で持ち込まれたケースもあるんでしょうね。',en:"Historically, queen-era voyages brought some too, perhaps.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。当時、無名の船員から無数の感染が広がりました。',en:"Yes. From unknown sailors, countless infections spread.",style:'Patient.'},
    {speaker:'ren_uni',jp:'メタ分析で、当時の医学語彙、参照する研究もありますね。',en:"Meta-analyses referencing period medical vocabulary exist too.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい、地道に積み上げます。',en:"Yes, steady accumulation.",style:'Reflective close.'},
  ]},
  {id:'conv_05753',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher and a teen discuss a world history project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、自由研究、女王の時代の南米遠征、難しいテーマね。',en:"Sakura, the South-American expedition during the queen era is hard.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。外来文化との接触、無数の影響を残しました。',en:"Yes. Foreign-culture contact left countless influences.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'当時の航海記録、無名の書記官の手によるものも残っています。',en:"Period voyage records — some by unknown clerks survive.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'メタ的に分類する論文も、図書館にあるそうです。',en:"Meta-classified papers are in the library too.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'当時の語彙、現代と意味が違うところ、丁寧に確認してくださいね。',en:"Period vocabulary — check meaning shifts carefully.",style:'Direction close.'},
  ]},
  {id:'conv_05754',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a reporter about port security',lines:[
    {speaker:'takeda_officer',jp:'港湾警備、外来船舶のチェック、強化中です。',en:"Port security — foreign-vessel checks strengthened.",style:'Calm.'},
    {speaker:'ren_uni',jp:'南米から、無名の小型船で密入国が試みられた事例もありましたね。',en:"From South America, unknown-small-boat smuggling attempts too.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。無数の航海ルート、データ化しています。',en:"Yes. Countless voyage routes are being digitized.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'メタ分析で、傾向を予測する手法、活用されてますか。',en:"Are meta-analytic predictive methods used?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。専門語彙、警察学校でも教えられます。',en:"Yes. Specialized vocab is taught at the academy.",style:'Informative close.'},
  ]},
  {id:'conv_05755',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews international expansion',lines:[
    {speaker:'hiroshi_boss',jp:'南米市場への進出、女王時代の航海ルートに重なる地点も多い。',en:"South-American expansion overlaps queen-era voyage spots.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。外来規制の壁、各国で異なります。',en:"Yes. Foreign-import regulation varies by country.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'無名の小さな港にも、無数のチャンスが眠っている。',en:"Even small unknown ports hold countless opportunities.",style:'Direction.'},
    {speaker:'kenji_office',jp:'メタなマーケティング手法、現地語の語彙も学びます。',en:"Meta-marketing methods; learning local vocabulary too.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'長期視点で。',en:"Long-term view.",style:'Close.'},
  ]},

  // D
  {id:'conv_05756',cluster:'D',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:D_T,scenario:'A senpai discusses a novel with a teen',lines:[
    {speaker:'ren_uni',jp:'桜、新作小説、主人公が猿の集落で育てられた架空のはなしだ。',en:"Sakura, the new novel — a fictional tale of a hero raised by monkeys.",style:'Engaged senpai.'},
    {speaker:'sakura_teen',jp:'面白そう!泥棒に巻き込まれる展開もあるんですか。',en:"Sounds fun! Any thief-involvement plot?",style:'Excited teen.'},
    {speaker:'ren_uni',jp:'うん。日本一の悪党とまで言われる相手だ。',en:"Yes. Called Japan's top villain.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'主人公、戦いまくる場面、力強いですか。',en:"Hero — does he fight like crazy, powerfully?",style:'Probe.'},
    {speaker:'ren_uni',jp:'はい。捕らえられれば、敗北は確定の状況も、何度も乗り越える。',en:"Yes. Situations where being captured would seal defeat, he overcomes repeatedly.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'物語に、母が子を生んだ章もありますか。',en:"Any chapter where a mother gives birth?",style:'Curious.'},
    {speaker:'ren_uni',jp:'うん、感動的な章だ。',en:"Yes — moving chapter.",style:'Warm close.'},
  ]},
  {id:'conv_05757',cluster:'D',ambient:'living_room_quiet',cast:['ryosuke_dad','sho_child'],targets:D_T,scenario:'A dad reads a fantasy tale to his son',lines:[
    {speaker:'ryosuke_dad',jp:'翔、今夜は架空のはなしを読もうか。',en:"Sho, tonight let's read a fictional tale.",style:'Warm dad.'},
    {speaker:'sho_child',jp:'うん!猿の王様、出てくる?',en:"Yes! Does the monkey king appear?",style:'Excited child.'},
    {speaker:'ryosuke_dad',jp:'登場する。泥棒団もいて、ハラハラする。',en:"Yes. A thief band too — thrilling.",style:'Animated.'},
    {speaker:'sho_child',jp:'お父さん、いつもページめくるの早すぎ。読みまくる!',en:"Dad, you flip pages too fast. You read like mad!",style:'Wry.'},
    {speaker:'ryosuke_dad',jp:'ふふ、終盤、主人公が地に堕ちられればおしまいだぞ。',en:"Hehe — finale: if the hero is cast down, it's over.",style:'Playful.'},
    {speaker:'sho_child',jp:'お母さんが弟を生んだ夜にも、お話、読んでくれたよね。',en:"You read to me the night Mom gave birth to my brother too.",style:'Soft.'},
    {speaker:'ryosuke_dad',jp:'そうだったな。日本一の絵本作家になりたいって、お前、言ってた。',en:"Yeah. You said you'd be Japan's top picture-book author.",style:'Warm close.'},
  ]},
  {id:'conv_05758',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher discusses myth and folklore with a student',lines:[
    {speaker:'asuka_teacher',jp:'神話研究、猿が登場する架空のはなし、世界各地にあります。',en:"In myth studies, monkey-featuring fictional tales exist worldwide.",style:'Calm.'},
    {speaker:'ren_uni',jp:'泥棒の役で出るバージョン、面白いです。',en:"The thief-role versions are fun.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'論文では、伝承の比較を、まくる勢いで進めていますね。',en:"Your paper pushes folklore comparisons at full tilt.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。古い神話で女神が子を生んだ章、各地で対応が見られます。',en:"Yes. Old myths where goddesses give birth — correspondences worldwide.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'神に出会えられれば、英雄が誕生する型、まだ多いですね。',en:"The hero-birth-upon-meeting-god type is still common.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'日本一の神話学者と評される先生方の論考も、参考にします。',en:"I consult those revered as Japan's top mythologists.",style:'Earnest close.'},
  ]},
  {id:'conv_05759',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends discuss a movie',lines:[
    {speaker:'mei_romantic',jp:'昨夜の映画、架空の世界が舞台で、猿の村が出てくるの。',en:"Last night's film — set in a fictional world with a monkey village.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'泥棒の親玉と、主人公の対決、見応えあった?',en:"Hero-versus-thief-boss showdown — gripping?",style:'Soft.'},
    {speaker:'mei_romantic',jp:'うん。主人公、戦いまくる中盤、迫力すごかった。',en:"Yes. The hero fights like crazy mid-film — intense.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はなしの軸、母性愛と兄弟愛で結ばれてるよね。',en:"Story core is mother-and-sibling love.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'母が双子を生んだ場面、泣けた。',en:"The mom-twins-birth scene — tear-jerker.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'ラスト、敵に追い詰められれば終わりという緊張感、最高だね。',en:"Final tension — cornered would end it all — top-tier.",style:'Excited.'},
    {speaker:'mei_romantic',jp:'日本一のSF映画、と評論家が言ってた、納得。',en:"Critics called it Japan's top SF film — agreed.",style:'Bright close.'},
  ]},
  {id:'conv_05760',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens discuss a video game story',lines:[
    {speaker:'sakura_teen',jp:'新しいRPG、舞台が架空の国で、猿の傭兵が仲間にできるんだって。',en:"New RPG — fictional nation; monkey mercenaries as allies.",style:'Animated teen.'},
    {speaker:'riku_teen',jp:'最初、泥棒団と戦うはなしか?',en:"Start: a thief-band-fighting story?",style:'Curious.'},
    {speaker:'sakura_teen',jp:'うん。中盤、ボスに突っ込みまくる戦闘がアツい。',en:"Mid-game — bosses; charge-attacks galore. Hot.",style:'Excited.'},
    {speaker:'riku_teen',jp:'防御無視して攻めまくられれば、こっちが先に倒される。',en:"If they ignore defense and storm, we go down first.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'設定上、ヒロインが主人公を生んだ秘密も明かされる。',en:"Story-wise, the heroine's birth-secret of the hero is revealed.",style:'Probe.'},
    {speaker:'riku_teen',jp:'プレイヤー数、日本一のオンラインRPGだって、サーバ混むかも。',en:"Player count — Japan's top online RPG, servers might lag.",style:'Practical close.'},
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

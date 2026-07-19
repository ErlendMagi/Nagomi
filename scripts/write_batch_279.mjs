import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_279 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['好意','迫る','作り上げ','挟ん','覗き','曲がっ','便り','悪意']
const B_T = ['キャンセル','器具','儲かる','スクリプト','ゲート','実例','使い勝手','成り立た']
const C_T = ['襲わ','サミット','襲撃','欠席','尊厳','盗難','扶助','濃厚']
const D_T = ['マザー','ジェイ','ナノ','音質','リスニング','ウクライナ','宮殿','下着']

const data = [
  {id:'conv_05541',cluster:'A',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:A_T,scenario:'Two cafe friends gossip about a love-letter incident',lines:[
    {speaker:'mei_romantic',jp:'昨日、机に挟んでた便り、誰かに覗かれた気がして…。',en:"Yesterday a letter slipped between desks — felt like someone peeked.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'好意で渡された手紙だったでしょ?悪意は無いと思うよ。',en:"It was given to you in good faith, right? No malice, I bet.",style:'Reassuring.'},
    {speaker:'mei_romantic',jp:'うん。でも曲がった解釈、すぐ広まるからさ。',en:"Yes. But twisted readings spread fast.",style:'Worried.'},
    {speaker:'aoi_barista',jp:'噂が真実に迫る前に、本人と直接話そう。',en:"Before the rumor closes in on truth, talk to him directly.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'勇気作り上げて、明日呼び出してみる。',en:"Building up courage, I'll call him out tomorrow.",style:'Resolved.'},
    {speaker:'aoi_barista',jp:'うん、応援する。',en:"Yes, I'm rooting for you.",style:'Warm close.'},
  ]},
  {id:'conv_05542',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens debrief a friendship misunderstanding',lines:[
    {speaker:'sakura_teen',jp:'ヒナちゃんとの仲、最近曲がっちゃってる感じ。',en:"My friendship with Hina feels bent lately.",style:'Worried teen.'},
    {speaker:'riku_teen',jp:'好意でやったことが、悪意に取られた?',en:"Did something done in good faith get read as malice?",style:'Probe.'},
    {speaker:'sakura_teen',jp:'うん。ノートの間に挟んでた便りを、勝手に覗かれて…。',en:"Yes. A note slipped in my notebook was peeked at without permission.",style:'Sad.'},
    {speaker:'riku_teen',jp:'勘違いから関係崩れること、よくあるよな。',en:"Misunderstandings often break relationships.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'関係を作り上げてきたのに、一気に迫られる感じで辛い。',en:"I built up the bond, but it feels like everything closes in at once — painful.",style:'Vulnerable.'},
    {speaker:'riku_teen',jp:'早めに話せ。応援する。',en:"Talk to her early. I'm rooting for you.",style:'Warm close.'},
  ]},
  {id:'conv_05543',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom helps her young son interpret a classmate\'s behavior',lines:[
    {speaker:'sho_child',jp:'ママ、ケンくんが今日、僕のえほん、覗いてた。悪意あった?',en:"Mom, Ken peeked at my picture book today. Was that malicious?",style:'Anxious child.'},
    {speaker:'yumiko_mom',jp:'たぶん好意で、興味から見てたんじゃないかな。',en:"Probably out of good-will curiosity.",style:'Patient.'},
    {speaker:'sho_child',jp:'えほんに挟んでた手紙、読まれたかも…。',en:"The letter tucked in the book — may have been read…",style:'Quiet.'},
    {speaker:'yumiko_mom',jp:'迫る不安、お母さんがそばで聞いてあげるからね。',en:"Closing-in worries — Mom will listen by your side.",style:'Warm.'},
    {speaker:'sho_child',jp:'絆をまた作り上げたいけど、どうしたらいい?',en:"I want to rebuild the bond — what should I do?",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'お便り書いて、優しくお話ししてあげようね。',en:"Write a letter and talk kindly.",style:'Tender close.'},
  ]},
  {id:'conv_05544',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple reflects on old friendships',lines:[
    {speaker:'hiroshi_elder',jp:'昔の友人から、急に便りが来てな。',en:"Out of nowhere, a letter came from an old friend.",style:'Soft elder.'},
    {speaker:'sachiko_grandma',jp:'好意の表れね。曲がった解釈、しないであげましょう。',en:"A sign of good will. Let's not interpret it crookedly.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'封筒に挟んでた写真を覗いて、若い頃を思い出した。',en:"Peeking at the photo in the envelope, youth came back to me.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'再会の日が迫るほど、ドキドキするわね。',en:"As the reunion day closes in, the heart flutters.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'もう悪意なんて、彼の人生にも私の人生にも残っていないさ。',en:"Malice no longer lingers in his life or mine.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'長年作り上げてきた友情、また会える日が楽しみね。',en:"A friendship built over years — looking forward to meeting again.",style:'Warm close.'},
  ]},
  {id:'conv_05545',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A uni student listens to a teen friend about a strange note',lines:[
    {speaker:'sakura_teen',jp:'先輩、知らない人から好意で便り届いたんですけど…悪意がないかちょっと不安で。',en:"Senpai, a stranger kindly sent a letter, but I'm slightly worried about malice.",style:'Wary.'},
    {speaker:'ren_uni',jp:'ノートに挟んで持ち歩いてたら、誰かに覗かれた?',en:"Was it slipped in your notebook and peeked at by someone?",style:'Probe.'},
    {speaker:'sakura_teen',jp:'はい。教室で、急に背後から覗かれた感じで。',en:"Yes. In the classroom, suddenly peeked at from behind.",style:'Soft.'},
    {speaker:'ren_uni',jp:'曲がった噂が広がる前に、相手のことちゃんと確認しよう。',en:"Before twisted rumors spread, verify the other party.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'迫る不安に負けず、心を作り上げて対処します。',en:"Refusing to lose to closing anxiety, I'll build resolve and handle it.",style:'Resolved.'},
    {speaker:'ren_uni',jp:'いつでも相談に来な。',en:"Come consult me anytime.",style:'Warm close.'},
  ]},

  {id:'conv_05546',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews an event-cancellation impact',lines:[
    {speaker:'hiroshi_boss',jp:'今回のキャンセル、収支は儲かる方向に戻せるか?',en:"With this cancellation, can the books be steered back to profit?",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。器具の使い勝手を改善した実例、社内で共有しています。',en:"Yes. Cases of improved equipment-usability are being shared internally.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'ゲートでの動線、スクリプトに従って整理を。',en:"Gate flow lines — organize per script.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。計画が成り立たない部分は、別案も用意します。',en:"Yes. Where the plan can't stand, I'll prep an alternative.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'頼む。',en:"Please.",style:'Close.'},
  ]},
  {id:'conv_05547',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers prep for a vendor demo',lines:[
    {speaker:'yuki_office',jp:'デモの予約、急にキャンセルが入ってきた。',en:"Sudden cancellation on the demo booking.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'器具の使い勝手、ベンダーが自信あるって。スクリプトも整えてます。',en:"The vendor's confident about equipment usability. Script is set too.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'採算的に儲かる見込み、実例ベースで見せたい。',en:"Want to show projected profit based on case examples.",style:'Strategic.'},
    {speaker:'kenji_office',jp:'ゲートを通過する顧客数、新案で成り立たせます。',en:"Customer count through the gate — I'll make it work via the new plan.",style:'Commitment.'},
    {speaker:'yuki_office',jp:'よろしく。',en:"Thanks.",style:'Close.'},
  ]},
  {id:'conv_05548',cluster:'B',ambient:'office_quiet_low',cast:['ren_uni','yuki_office'],targets:B_T,scenario:'A uni intern interviews a manager about product testing',lines:[
    {speaker:'ren_uni',jp:'新製品の器具、使い勝手はどう確かめるんですか。',en:"How do you check usability of new equipment?",style:'Polite.'},
    {speaker:'yuki_office',jp:'実例を集めて、スクリプト化したテストを通します。',en:"Collecting examples and running script-formalized tests.",style:'Helpful.'},
    {speaker:'ren_uni',jp:'コストが成り立たないと、儲かる事業にならないですよね。',en:"If costs don't pan out, the business can't profit, right?",style:'Probe.'},
    {speaker:'yuki_office',jp:'はい。ゲート審査に通過した案件だけ、量産化します。',en:"Yes. Only projects clearing the gate review go to mass production.",style:'Informative.'},
    {speaker:'ren_uni',jp:'キャンセル率の許容範囲、決まってますか。',en:"Is the acceptable cancellation rate set?",style:'Curious.'},
    {speaker:'yuki_office',jp:'各部署で目安があります。',en:"Each section has guidelines.",style:'Close.'},
  ]},
  {id:'conv_05549',cluster:'B',ambient:'cafe_quiet_chatter',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors a younger boss about business basics',lines:[
    {speaker:'hiroshi_elder',jp:'商売は、ゲートをくぐる客の動きを掴むことだ。',en:"Business is about reading customer flow through the gate.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'承知しております。スクリプト整備で、若手でも対応できるようにします。',en:"Understood. Script setup lets juniors handle it too.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'器具の使い勝手、製品価値の半分を占める。',en:"Equipment usability is half the product value.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。儲かる仕組みが成り立たない時こそ、原点に戻ります。',en:"Yes. When a profitable mechanism fails, I return to origins.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'キャンセルの実例も、教訓として残しておけ。',en:"Cancel cases — keep as lessons.",style:'Stern.'},
    {speaker:'hiroshi_boss',jp:'胸に刻みます。',en:"Engraved in my heart.",style:'Close.'},
  ]},
  {id:'conv_05550',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:B_T,scenario:'A police officer briefs a uni reporter about a fraud case',lines:[
    {speaker:'takeda_officer',jp:'実例として、最近の詐欺事件、お知らせします。',en:"As an example, recent fraud cases I'll share.",style:'Calm.'},
    {speaker:'ren_uni',jp:'被害者の方、急にキャンセルされた契約が問題でしたか。',en:"Were victims troubled by suddenly canceled contracts?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。違法な器具の販売、スクリプト化された営業トークが使われました。',en:"Yes. Illegal equipment sales used scripted sales pitches.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'空港のゲートで止められた人もいるんですか。',en:"Some were stopped at airport gates?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。儲かるとそそのかされ、海外へ運ぼうとした例も。',en:"Yes. Some lured by profit promises tried to ship abroad.",style:'Informative.'},
    {speaker:'ren_uni',jp:'制度として、成り立たない隙間を突かれているんですね。',en:"The system's untenable gaps were exploited, then.",style:'Engaged.'},
    {speaker:'takeda_officer',jp:'おっしゃる通り。',en:"Indeed.",style:'Close.'},
  ]},

  {id:'conv_05551',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher walks a uni student through a global affairs paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、サミットでの議論と各国の襲撃事案、対比的に扱うんですね。',en:"Your paper contrasts summit debate with attack incidents across nations.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。襲わない、襲われない国際秩序、人権の尊厳を中心に書きます。',en:"Yes. Centered on a non-attacking, non-attacked international order and human dignity.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'関連の盗難事案、地元の扶助制度との関係も論点ですね。',en:"Related theft cases and the local relief system are points too.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'欠席続きの議員、責任問題として触れる予定です。',en:"Lawmakers chronically absent — I plan to address as accountability.",style:'Plan.'},
    {speaker:'asuka_teacher',jp:'濃厚な内容ですね、丁寧に書きましょう。',en:"Dense content — write it carefully.",style:'Suggestion.'},
    {speaker:'ren_uni',jp:'承知しました。',en:"Understood.",style:'Close.'},
  ]},
  {id:'conv_05552',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss and his manager dissect a global-news column',lines:[
    {speaker:'hiroshi_boss',jp:'この記事、サミットでの襲撃事件報道、衝撃だな。',en:"The summit-attack reporting in this piece is shocking.",style:'Boss.'},
    {speaker:'kenji_office',jp:'はい。市民が襲われない安全網と、扶助の仕組み、両方議論されています。',en:"Yes. Both a citizen-safety net and relief mechanism are debated.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'盗難事案も濃厚に絡む構造。',en:"Theft cases are densely tied in too.",style:'Analytical.'},
    {speaker:'kenji_office',jp:'尊厳を守る視点、欠席率の改善まで含んだ広い議論です。',en:"From dignity protection to absentee-rate improvement — a broad debate.",style:'Insightful.'},
    {speaker:'hiroshi_boss',jp:'来月の経営会議で扱おう。',en:"On next month's exec agenda.",style:'Decisive.'},
    {speaker:'kenji_office',jp:'承知しました。',en:"Understood.",style:'Close.'},
  ]},
  {id:'conv_05553',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a uni reporter about public safety',lines:[
    {speaker:'takeda_officer',jp:'最近、街中で人が襲われる事案、増えています。',en:"Lately, incidents of people being attacked in town have risen.",style:'Calm.'},
    {speaker:'ren_uni',jp:'襲撃の手口、変わってきていますか。',en:"Are attack patterns shifting?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。盗難と組み合わさるケースも濃厚に増えました。',en:"Yes. Cases combined with theft have grown densely.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'相談窓口の欠席率、人手不足が原因ですか。',en:"Help-desk absentee rate — staff shortages?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'扶助制度の見直しも、サミット級の議題です。',en:"Relief-system review is a summit-level topic.",style:'Informative.'},
    {speaker:'ren_uni',jp:'被害者の尊厳、守るために何が必要か、書いていきます。',en:"What's needed to protect victim dignity — I'll write that.",style:'Resolved close.'},
  ]},
  {id:'conv_05554',cluster:'C',ambient:'living_room_quiet',cast:['hiroshi_elder','ren_uni'],targets:C_T,scenario:'A uni student interviews a retired diplomat',lines:[
    {speaker:'ren_uni',jp:'長年、サミットの裏方として活躍されたんですよね。',en:"You long worked behind the scenes at summits.",style:'Polite.'},
    {speaker:'hiroshi_elder',jp:'うん。襲撃のリスクへの対応、毎回大変だった。',en:"Yes. Responding to attack risks was hard each time.",style:'Veteran.'},
    {speaker:'ren_uni',jp:'市民が襲われない安全網、各国どう設計しているんですか。',en:"How do countries design citizen-safety nets?",style:'Probe.'},
    {speaker:'hiroshi_elder',jp:'扶助の仕組みと連動させるのが基本だ。',en:"Tying it to the relief mechanism is the basis.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'欠席続きの議員問題、外交にも影響ありますか。',en:"Chronic-absence lawmakers — affects diplomacy too?",style:'Curious.'},
    {speaker:'hiroshi_elder',jp:'ある。盗難事案の取扱いまで含めて、尊厳の議論は深まる一方だ。',en:"Yes. From theft-case handling onward, dignity debates only deepen.",style:'Wise close.'},
  ]},
  {id:'conv_05555',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','sakura_teen'],targets:C_T,scenario:'A doctor explains crisis-response medicine to a teen',lines:[
    {speaker:'saito_doctor',jp:'桜さん、災害や襲撃時の医療対応、聞いておきますか。',en:"Sakura, want to learn about medical response in disasters or attacks?",style:'Friendly.'},
    {speaker:'sakura_teen',jp:'はい!急に襲われる時、何が大事ですか。',en:"Yes! In sudden attacks, what's important?",style:'Curious teen.'},
    {speaker:'saito_doctor',jp:'まず安全確保。そして被害者の尊厳を守ること。',en:"First, secure safety. Then protect victim dignity.",style:'Patient.'},
    {speaker:'sakura_teen',jp:'扶助制度や、医療の欠席対応も、行政が支えるんですよね。',en:"Relief systems and medical-coverage absences are backed by the government, right?",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。盗難に絡む被害も濃厚な場合、心身ケアも入念に。',en:"Yes. When theft is densely tied in, mind-and-body care goes deeper.",style:'Informative.'},
    {speaker:'sakura_teen',jp:'サミットでの議論が現場に反映される時代ですね。',en:"It's an era where summit debates reach the field.",style:'Engaged.'},
    {speaker:'saito_doctor',jp:'そうです。',en:"That's right.",style:'Close.'},
  ]},

  {id:'conv_05556',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens plan a music & tech weekend',lines:[
    {speaker:'sakura_teen',jp:'今週末、ジェイポップ系のフェスとマザー牧場、両方行きたい!',en:"This weekend I want both a J-pop fest and Mother Farm!",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'いいね。新しいナノサイズのイヤホン、音質テスト兼ねて持ってこう。',en:"Sure. Bring the new nano-size earbuds for a sound-quality test.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'リスニング能力も上がりそう。ウクライナ出身のDJも来るんだって。',en:"My listening might improve too. A DJ from Ukraine is coming.",style:'Animated.'},
    {speaker:'riku_teen',jp:'宮殿風のステージらしいぞ。',en:"It's apparently a palace-style stage.",style:'Knowing.'},
    {speaker:'sakura_teen',jp:'下着の替えとタオル、しっかり準備しないと。',en:"Pack extra underwear and towels properly.",style:'Practical.'},
    {speaker:'riku_teen',jp:'了解、明日朝早く出発な。',en:"Got it — leave early tomorrow.",style:'Close.'},
  ]},
  {id:'conv_05557',cluster:'D',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:D_T,scenario:'Two cafe friends plan a creative weekend',lines:[
    {speaker:'aoi_barista',jp:'今週末、お店のBGMを新調しよう。マザー系の優しい音質で。',en:"This weekend let's refresh the cafe BGM — a gentle Mother-style sound.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'いいね!ジェイズミュージックのアルバム、おすすめあるよ。',en:"Nice! I have recs for J's-music albums.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'ナノ単位の音質チューニングするスピーカー、最近気になってて。',en:"Speakers with nano-level sound tuning are catching my eye.",style:'Plan.'},
    {speaker:'mei_romantic',jp:'リスニング体験、お客さんも喜びそう。',en:"Listening experiences — customers should love it.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'ウクライナの民族音楽特集も、月一でやろうか。',en:"Monthly Ukrainian folk-music features too?",style:'Idea.'},
    {speaker:'mei_romantic',jp:'宮殿風のインテリアと合わせて、最高な空間に。',en:"With a palace-style interior, the best space.",style:'Dreamy close.'},
  ]},
  {id:'conv_05558',cluster:'D',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:D_T,scenario:'A uni student helps a teen friend plan a music study',lines:[
    {speaker:'sakura_teen',jp:'先輩、英語リスニングの勉強に、ジェイポップ以外の曲も取り入れたいです。',en:"Senpai, for listening study I want to include non-J-pop too.",style:'Eager.'},
    {speaker:'ren_uni',jp:'いいね。マザー系のバンドや、ウクライナ民謡もおすすめ。',en:"Nice. Mother-style bands and Ukrainian folk songs are recommended.",style:'Helpful.'},
    {speaker:'sakura_teen',jp:'ナノサイズのイヤホン、音質しっかりしてますか。',en:"Are nano-size earbuds solid in sound quality?",style:'Probe.'},
    {speaker:'ren_uni',jp:'最新のは、宮殿の音響並みって評判だぞ。',en:"The latest are rated palace-acoustics-level.",style:'Knowing.'},
    {speaker:'sakura_teen',jp:'本当?買おうかな。練習着の下着まで揃えて、集中して取り組みます。',en:"Really? Maybe I'll buy. Even practice-undergarments lined up — focus and go.",style:'Plan.'},
    {speaker:'ren_uni',jp:'応援する。',en:"I'll cheer you on.",style:'Warm close.'},
  ]},
  {id:'conv_05559',cluster:'D',ambient:'living_room_quiet',cast:['ryosuke_dad','yumiko_mom'],targets:D_T,scenario:'A married couple plans a family weekend',lines:[
    {speaker:'yumiko_mom',jp:'土曜、子供たちとマザー牧場行こうか。',en:"Saturday, let's go to Mother Farm with the kids.",style:'Warm.'},
    {speaker:'ryosuke_dad',jp:'いいね。帰りにJ-Wave聴きながら、ドライブしよう。',en:"Sure. On the way back, J-Wave on the drive.",style:'Easy dad.'},
    {speaker:'yumiko_mom',jp:'ナノケアドライヤー、新調したいの。',en:"I want a new nano-care dryer.",style:'Practical.'},
    {speaker:'ryosuke_dad',jp:'リスニング機材も同時に見ようか。音質改善したい。',en:"Let's check listening gear too — want better sound.",style:'Plan.'},
    {speaker:'yumiko_mom',jp:'ウクライナ風のディナー、家で作ろうかな。',en:"I'll make Ukrainian-style dinner at home.",style:'Cheerful.'},
    {speaker:'ryosuke_dad',jp:'宮殿風のディナーだな。下着の洗濯、後でやるよ。',en:"A palace-style dinner. I'll do the laundry of undergarments later.",style:'Warm close.'},
  ]},
  {id:'conv_05560',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A Kansai chef and a barista swap event ideas',lines:[
    {speaker:'daichi_kansai',jp:'アオイさん、店でジェイポップ系のイベントやるんやて?',en:"Aoi-san, doing a J-pop event at the shop?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。マザー系のアコースティック、音質にこだわります。',en:"Yes. Mother-style acoustic, sound-quality first.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'うちの店、最新のナノテクスピーカー入れたで。',en:"We brought in the latest nano-tech speakers.",style:'Proud Kansai.'},
    {speaker:'aoi_barista',jp:'凄い!リスニング体験、是非伺いたいです。',en:"Amazing! I want to experience that listening.",style:'Eager.'},
    {speaker:'daichi_kansai',jp:'今度、ウクライナ料理人とコラボするで。宮殿風の装飾も加える予定や。',en:"Soon we'll collab with a Ukrainian chef. Palace-style decor too.",style:'Cheerful Kansai.'},
    {speaker:'aoi_barista',jp:'下着の洗濯みたいに、地道に準備します。',en:"Like washing underwear, I'll prep diligently.",style:'Warm close.'},
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

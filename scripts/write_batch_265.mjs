import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_265 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['如く','無縁','作り出し','奪っ','残酷','幽霊','徒然','題し']
const B_T = ['放出','談合','次長','書房','三菱','東芝','ブロガー','ベイ']
const C_T = ['土木','兵隊','戦線','母子','次男','長女','膜','芯']
const D_T = ['コンポーネント','スパム','クリップ','新潮','女神','アリス','隼','プラグ']

const data = [
  {id:'conv_05261',cluster:'A',ambient:'cafe_quiet_chatter',scenario:'Two cafe friends recap a ghost-themed bookshop event',cast:['aoi_barista','mei_romantic'],targets:A_T,lines:[
    {speaker:'aoi_barista',jp:'昨日の「徒然なる夜話」、めっちゃ面白かったよ。',en:"Last night's 'Idle Night Tales' event was a riot.",style:'Bright barista opener.'},
    {speaker:'mei_romantic',jp:'うん。あの作家さん、「秋の幽霊譚」と題した短編集、もう読んだ?',en:"Yeah. That author's short-story set titled 'Autumn Ghost Tales' — read it yet?",style:'Soft excited recommend.'},
    {speaker:'aoi_barista',jp:'読んだ。残酷な結末ばっかりだけど、空気を作り出した手腕が見事だった。',en:"I did. The endings are all brutal, but her skill at conjuring atmosphere is masterful.",style:'Impressed barista reflection.'},
    {speaker:'mei_romantic',jp:'特に最後の話、村の幽霊が次々と若者の命を奪っていく描写、息が止まったわ。',en:"Especially the last story — village ghosts snatching young lives one by one, I held my breath.",style:'Hushed dreamy recall.'},
    {speaker:'aoi_barista',jp:'前作とは打って変わった文体で、まるで別人の如く成熟したよね。',en:"The prose changed completely from her previous work, matured as if she's a different person.",style:'Considered observation.'},
    {speaker:'mei_romantic',jp:'恐怖って意外と日常と無縁じゃないんだなって、しみじみ感じた。',en:"Fear isn't as cut off from daily life as I thought — really felt that deeply.",style:'Reflective whisper.'},
    {speaker:'aoi_barista',jp:'次回作の発表、月末にあるって告知出てたよ。一緒に行こう。',en:"The next-book announcement is at month-end. Let's go together.",style:'Warm invitation close.'},
  ]},
  {id:'conv_05262',cluster:'A',ambient:'street_quiet_distant',scenario:'Two teens debrief a horror movie they watched',cast:['sakura_teen','riku_teen'],targets:A_T,lines:[
    {speaker:'sakura_teen',jp:'昨日の映画、「呪いの夏」って題した邦画、めっちゃ怖かった。',en:"Yesterday's movie titled 'Cursed Summer' — wow that was scary.",style:'Animated teen recap.'},
    {speaker:'riku_teen',jp:'幽霊が静かに後ろから近づくシーン、心臓奪われたわ。',en:"The scene with the ghost silently approaching from behind, my heart got snatched.",style:'Teen-boy mock-shudder.'},
    {speaker:'sakura_teen',jp:'監督、ホラーとは無縁だった人らしいけど、よくこんな空気作り出したよね。',en:"The director apparently had nothing to do with horror before, but the atmosphere he built was something.",style:'Impressed teen voice.'},
    {speaker:'riku_teen',jp:'徒然に観てたら、まんまと一時間奪われた感じ。',en:"Watching it idly, an hour just got stolen from me before I knew it.",style:'Dry teen humor.'},
    {speaker:'sakura_teen',jp:'結末、残酷すぎてSNSで荒れてるらしいよ。',en:"The ending is apparently so brutal it's blowing up on socials.",style:'Gossipy teen tone.'},
    {speaker:'riku_teen',jp:'マジか。続編、王の如く君臨する悪役で頼むわ。',en:"For real? Sequel had better bring back the villain reigning like a king.",style:'Half-joking teen close.'},
    {speaker:'sakura_teen',jp:'絶対観るに決まってる！',en:"We'll definitely watch it for sure!",style:'Bright teen excitement close.'},
  ]},
  {id:'conv_05263',cluster:'A',ambient:'living_room_quiet',scenario:'A mom calms her young son after a scary picture book',cast:['yumiko_mom','sho_child'],targets:A_T,lines:[
    {speaker:'sho_child',jp:'ママ、さっきの絵本、幽霊が出てきて怖かったよ…。',en:"Mom, the picture book just now had ghosts and it was scary…",style:'Small worried child voice.'},
    {speaker:'yumiko_mom',jp:'大丈夫、「夜のおはなし」と題した本だから、本当のことじゃないよ。',en:"It's okay. The book is titled 'Night Stories,' so it's not real.",style:'Warm motherly reassurance.'},
    {speaker:'sho_child',jp:'でもページの最後、子供が魂を奪われる絵があって、残酷だった。',en:"But the last page had a child getting his soul stolen — it was cruel.",style:'Quiet shaky child voice.'},
    {speaker:'yumiko_mom',jp:'怖かったね。怖い気持ちは無縁にできないけど、ママがそばにいるからね。',en:"You were scared, huh. We can't be free of fear entirely, but Mom's right here.",style:'Tender maternal hug.'},
    {speaker:'sho_child',jp:'うん。先生は「想像力が物語を作り出す」って言ってた。',en:"Mm. My teacher said 'imagination creates stories.'",style:'Brightening small voice.'},
    {speaker:'yumiko_mom',jp:'いい言葉ね。徒然に絵本を眺めるだけで、たくさんのことが学べるのよ。',en:"What a lovely line. Just leafing through picture books idly, you learn many things.",style:'Soft proud mother smile.'},
    {speaker:'sho_child',jp:'明日は王様の如く強い主人公の話を読もう。',en:"Tomorrow let's read a story with a hero strong like a king.",style:'Cheerful child resolve.'},
  ]},
  {id:'conv_05264',cluster:'A',ambient:'living_room_quiet',scenario:'An elderly couple talks about an old wartime book',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,lines:[
    {speaker:'hiroshi_elder',jp:'押し入れの奥から、若い頃に読んだ「戦時徒然抄」と題した本が出てきたよ。',en:"From the back of the closet I dug out a book titled 'Wartime Idle Notes' I read in my youth.",style:'Soft nostalgic elder.'},
    {speaker:'sachiko_grandma',jp:'懐かしい。あの本、当時の暮らしを残酷なまでに描いていたわね。',en:"How nostalgic. That book depicted those days with cruel honesty.",style:'Wistful grandmother.'},
    {speaker:'hiroshi_elder',jp:'平和な時代と無縁だった私たちの世代だが、今は穏やかに過ごせている。',en:"Our generation was no stranger to non-peaceful times, but now we live calmly.",style:'Reflective elder.'},
    {speaker:'sachiko_grandma',jp:'お隣の田中さん、亡くなった奥様の幽霊が見えるなんて冗談言ってたわ。',en:"Mr. Tanaka next door joked he could see his late wife's ghost.",style:'Affectionate aside.'},
    {speaker:'hiroshi_elder',jp:'寂しさが思い出を作り出すんだろう。気持ちは分かる。',en:"Loneliness must conjure those memories. I understand the feeling.",style:'Gentle gravelly voice.'},
    {speaker:'sachiko_grandma',jp:'あなたまでそんな目で語らないで。私の手は奪われたくないわ。',en:"Don't talk like that, dear. I don't want my hand snatched away just yet.",style:'Soft playful protest.'},
    {speaker:'hiroshi_elder',jp:'ふふ、まだまだ若々しい君の如く、私も元気に生きるよ。',en:"Hehe, I'll keep living vigorously, like you who's still so youthful.",style:'Tender chuckle close.'},
  ]},
  {id:'conv_05265',cluster:'A',ambient:'cafe_quiet_chatter',scenario:'A uni student helps a teen friend process a horror story she wrote',cast:['ren_uni','sakura_teen'],targets:A_T,lines:[
    {speaker:'sakura_teen',jp:'先輩、私の短編、「冷たい部屋」と題した話、読んでもらえました？',en:"Senpai, the short I titled 'The Cold Room' — did you read it?",style:'Nervous teen voice.'},
    {speaker:'ren_uni',jp:'読んだよ。冒頭の幽霊の描写、本当にぞくっとした。',en:"I did. The opening ghost description gave me real chills.",style:'Warm mentor tone.'},
    {speaker:'sakura_teen',jp:'人の命を残酷に奪っていく描写、書きすぎかなって不安なんです。',en:"The cruel taking of lives — I'm worried I went too far.",style:'Anxious teen confession.'},
    {speaker:'ren_uni',jp:'いや、緊張感を作り出してて良かったよ。徒然に書いた感じじゃない、ちゃんと構成されてた。',en:"No, it generated real tension. Doesn't feel like idle writing — it's properly built.",style:'Reassuring senior voice.'},
    {speaker:'sakura_teen',jp:'ジャンルとは無縁だった私が、こんな話書けるとは思わなかった。',en:"I never thought I, with no horror background, could write something like this.",style:'Self-impressed teen.'},
    {speaker:'ren_uni',jp:'プロの如く、しっかり感情を引き出す筆致だった。続編もぜひ。',en:"Your prose pulled out emotion like a pro's. Definitely write a sequel.",style:'Encouraging senpai close.'},
    {speaker:'sakura_teen',jp:'ありがとうございます！書きます。',en:"Thank you! I will.",style:'Bright teen resolve.'},
  ]},

  {id:'conv_05266',cluster:'B',ambient:'office_quiet_low',scenario:'A boss briefs his manager on supplier diversification',cast:['hiroshi_boss','kenji_office'],targets:B_T,lines:[
    {speaker:'hiroshi_boss',jp:'ケンジくん、調達の件、三菱と東芝の比較資料、揃った？',en:"Kenji, for procurement — are the comparison materials for Mitsubishi and Toshiba ready?",style:'Crisp boss opener.'},
    {speaker:'kenji_office',jp:'はい。次長の指示で、ベイエリアの新興企業も二社追加しました。',en:"Yes. Per the deputy's instructions, I added two emerging companies from the Bay area.",style:'Methodical manager.'},
    {speaker:'hiroshi_boss',jp:'良し。在庫の放出スケジュール、業界紙のブロガーにリークされないようにな。',en:"Good. Make sure the inventory release schedule doesn't leak to industry-paper bloggers.",style:'Cautionary boss tone.'},
    {speaker:'kenji_office',jp:'承知しています。前回の談合疑惑の件もあり、情報管理は厳重にしています。',en:"Understood. With the prior collusion allegations, info control is extra tight.",style:'Steady reporting voice.'},
    {speaker:'hiroshi_boss',jp:'参考資料、岩波書房の業界年鑑も入れておいてくれ。',en:"For reference, include the Iwanami Bookhouse industry yearbook.",style:'Specific boss instruction.'},
    {speaker:'kenji_office',jp:'追加しておきます。次長会議は明日午後でよろしいでしょうか。',en:"I'll add it. Is tomorrow afternoon fine for the deputy meeting?",style:'Procedural close.'},
    {speaker:'hiroshi_boss',jp:'頼む。',en:"Please.",style:'Brief approval.'},
  ]},
  {id:'conv_05267',cluster:'B',ambient:'office_quiet_low',scenario:'Two managers prep a press handout on a corporate scandal',cast:['yuki_office','kenji_office'],targets:B_T,lines:[
    {speaker:'yuki_office',jp:'記者向けの資料、明日リリースで間に合う?',en:"The press materials — can we release them tomorrow?",style:'Brisk co-manager opener.'},
    {speaker:'kenji_office',jp:'はい。談合疑惑に関する社内見解、次長承認待ちの段階です。',en:"Yes. The internal stance on collusion allegations is pending the deputy's sign-off.",style:'Detail-aware update.'},
    {speaker:'yuki_office',jp:'三菱と東芝の対応比較、ブロガーが先に出さないうちに、こちらから発信したい。',en:"On Mitsubishi vs Toshiba responses, I want to push it out before bloggers do.",style:'Strategic teammate.'},
    {speaker:'kenji_office',jp:'同感です。広報資料は新潮社の論調を意識して、堅めに仕上げました。',en:"Agreed. I tightened the PR draft with Shinchosha's tone in mind.",style:'Methodical detail.'},
    {speaker:'yuki_office',jp:'在庫の放出計画は、別添で出そう。本資料に紛れさせない。',en:"Put the inventory release plan in a separate annex. Don't bury it in the main doc.",style:'Decisive co-manager.'},
    {speaker:'kenji_office',jp:'了解。ベイ地区の関連会社にも事前に共有しますか?',en:"Got it. Share with the Bay-district affiliates beforehand?",style:'Operational follow-up.'},
    {speaker:'yuki_office',jp:'頼む。書房系の刊行物に転載されても問題ないよう、表現は中立で。',en:"Please. Keep wording neutral so it's fine if bookhouse publications reprint it.",style:'Careful close.'},
  ]},
  {id:'conv_05268',cluster:'B',ambient:'office_quiet_low',scenario:'A uni intern interviews a manager about industry watchdog dynamics',cast:['ren_uni','yuki_office'],targets:B_T,lines:[
    {speaker:'ren_uni',jp:'業界の談合事件、最近は内部告発から発覚するケースが増えてますね。',en:"Industry collusion cases — more are surfacing from internal whistleblowers lately.",style:'Polite student-journalist.'},
    {speaker:'yuki_office',jp:'そうですね。三菱系列も東芝系も、ブロガーや業界紙の追及が厳しい。',en:"Indeed. Both Mitsubishi-linked and Toshiba-linked firms face tough scrutiny from bloggers and industry papers.",style:'Manager candid.'},
    {speaker:'ren_uni',jp:'放出する情報の管理は、次長クラスの仕事になるんですか。',en:"Is managing what information gets released a deputy-level job?",style:'Earnest follow-up.'},
    {speaker:'yuki_office',jp:'多くはそうです。岩波書房から出てる業界本にも、その辺り詳しく書いてあります。',en:"Mostly yes. There's also a book from Iwanami Bookhouse that details that area.",style:'Helpful citation.'},
    {speaker:'ren_uni',jp:'ベイエリアの新興企業の事例も比較材料になりそうですね。',en:"Bay-area newcomer cases also seem useful for comparison.",style:'Curious student.'},
    {speaker:'yuki_office',jp:'いい着眼です。掲載前に確認したい箇所、共有してください。',en:"Sharp angle. Share what you want me to verify before publication.",style:'Cooperative close.'},
    {speaker:'ren_uni',jp:'ありがとうございます。後ほどメールで送ります。',en:"Thank you. I'll send by email shortly.",style:'Polite sign-off.'},
  ]},
  {id:'conv_05269',cluster:'B',ambient:'cafe_quiet_chatter',scenario:'A retired exec mentors a younger boss on corporate culture',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,lines:[
    {speaker:'hiroshi_elder',jp:'昔の話だが、三菱と東芝の競争、本物だったよ。',en:"Old story, but the rivalry between Mitsubishi and Toshiba was the real deal.",style:'Reflective elder warmth.'},
    {speaker:'hiroshi_boss',jp:'今は談合疑惑が一度出ると、ブロガーが容赦なく追ってきます。',en:"Now once a collusion suspicion appears, bloggers chase it down ruthlessly.",style:'Younger executive sigh.'},
    {speaker:'hiroshi_elder',jp:'広報資料、岩波書房の業界本に並ぶくらい誠実に書け。',en:"Write your PR materials as honestly as books from Iwanami Bookhouse.",style:'Sage advice.'},
    {speaker:'hiroshi_boss',jp:'はい。次長と連携して、表現を一つずつ詰めています。',en:"Yes. I'm coordinating with the deputy, refining each phrase one at a time.",style:'Earnest reply.'},
    {speaker:'hiroshi_elder',jp:'在庫の放出戦略は、ベイ地区の販路を活用するんだろう?',en:"For inventory release strategy, you'll leverage the Bay-district channel, right?",style:'Knowing probe.'},
    {speaker:'hiroshi_boss',jp:'おっしゃる通りです。地域差を活かして、損切りを最小化します。',en:"Exactly. Using regional differences to minimize losses.",style:'Confident commitment.'},
    {speaker:'hiroshi_elder',jp:'よし、頑張れ。',en:"Good. Push through.",style:'Warm elder close.'},
  ]},
  {id:'conv_05270',cluster:'B',ambient:'cafe_quiet_chatter',scenario:'A barista finalizes a B2B coffee supply for a corporate office',cast:['aoi_barista','yuki_office'],targets:B_T,lines:[
    {speaker:'aoi_barista',jp:'ご提案資料、お持ちしました。御社の三菱系列のオフィス向けプランです。',en:"I've brought our proposal materials — the plan for your Mitsubishi-affiliated offices.",style:'Polished barista pitch.'},
    {speaker:'yuki_office',jp:'ありがとうございます。次長の決裁も近いので、ベイ地区の店舗対応も伺えますか。',en:"Thank you. The deputy's approval is near, so could you outline Bay-district store support too?",style:'Professional follow-up.'},
    {speaker:'aoi_barista',jp:'はい。在庫放出のサイクル、東芝向けと共通化できる予定です。',en:"Yes. The inventory release cycle can be unified with the Toshiba-side plan.",style:'Confident clarification.'},
    {speaker:'yuki_office',jp:'広報誌、岩波書房のグループ会報にも掲載予定ですので、写真を一枚お願いできますか。',en:"It'll appear in our Iwanami Bookhouse-group bulletin too, so could we get a photo?",style:'Polite request.'},
    {speaker:'aoi_barista',jp:'もちろんです。社内ブロガー向けにも素材を共有しておきます。',en:"Of course. I'll share assets for your internal bloggers as well.",style:'Cooperative warmth.'},
    {speaker:'yuki_office',jp:'助かります。業界の談合報道後、信頼回復が課題ですので、ありがたいです。',en:"That helps. After industry collusion reports, restoring trust is the task — appreciated.",style:'Honest manager close.'},
    {speaker:'aoi_barista',jp:'こちらこそ、長いお付き合いになるよう精一杯やらせていただきます。',en:"Likewise — I'll do my utmost for a long partnership.",style:'Warm barista sign-off.'},
  ]},

  {id:'conv_05271',cluster:'C',ambient:'lecture_hall_quiet',scenario:'A teacher walks a uni student through a wartime documentary',cast:['asuka_teacher','ren_uni'],targets:C_T,lines:[
    {speaker:'asuka_teacher',jp:'昨日のドキュメンタリー、見ました?昭和初期の土木工事の話。',en:"Did you see yesterday's documentary on early-Showa civil engineering works?",style:'Calm teacher opener.'},
    {speaker:'ren_uni',jp:'はい。動員された兵隊と労働者が、戦線後方で道路を作っていた映像が印象的でした。',en:"Yes. The footage of mobilized soldiers and workers building roads behind the front lines was striking.",style:'Earnest student.'},
    {speaker:'asuka_teacher',jp:'家族側からの視点も濃かったですね。母子家庭の長女が一家を支えていた話。',en:"The family-side perspective was vivid too — the eldest daughter of a mother-child household supporting her family.",style:'Engaged teacher tone.'},
    {speaker:'ren_uni',jp:'次男の証言が一番心に残りました。「鉛筆の芯が折れる音まで覚えている」と。',en:"The second son's testimony stuck with me most — 'I even remember the sound of a pencil's lead snapping.'",style:'Soft moved student.'},
    {speaker:'asuka_teacher',jp:'記憶の膜が一枚ずつ剥がれていくような語り口でしたね。',en:"It was a narration that felt like the membrane of memory peeling off layer by layer.",style:'Literary aside.'},
    {speaker:'ren_uni',jp:'論文の参考資料に加えたいです。',en:"I want to add it to my paper's references.",style:'Resolved close.'},
    {speaker:'asuka_teacher',jp:'いい題材です。出典の確認、丁寧にしましょう。',en:"Good material. Let's check sources carefully.",style:'Mentor close.'},
  ]},
  {id:'conv_05272',cluster:'C',ambient:'office_quiet_low',scenario:'A boss and his manager discuss a Showa-history article',cast:['hiroshi_boss','kenji_office'],targets:C_T,lines:[
    {speaker:'hiroshi_boss',jp:'この記事、戦線復帰した若い兵隊が、戦後に土木業へ転じた話か。',en:"This piece — young soldiers returning to the front, then shifting into civil engineering postwar.",style:'Boss reading aloud.'},
    {speaker:'kenji_office',jp:'はい。母子家庭の長女と次男が中心に出てきます。',en:"Yes. The eldest daughter and second son of a mother-child household are central.",style:'Manager summary.'},
    {speaker:'hiroshi_boss',jp:'当時の建築技術、骨組みも壁の膜も簡素だったろうな。',en:"Construction tech back then — both frame and wall membrane must have been simple.",style:'Thoughtful boss.'},
    {speaker:'kenji_office',jp:'写真資料には、現場の鉛筆の芯まで写っていて、生々しいです。',en:"In the photos you can even see pencil leads on the worksite — it's vivid.",style:'Detail-rich update.'},
    {speaker:'hiroshi_boss',jp:'社報の連載でも紹介できる?',en:"Could we feature it in the company-newsletter series?",style:'Practical idea.'},
    {speaker:'kenji_office',jp:'著者と出版社に許諾を取ります。',en:"I'll get permission from the author and publisher.",style:'Crisp action.'},
    {speaker:'hiroshi_boss',jp:'頼む。',en:"Please.",style:'Brief close.'},
  ]},
  {id:'conv_05273',cluster:'C',ambient:'office_quiet_low',scenario:'A police archivist guides a uni reporter through old records',cast:['takeda_officer','ren_uni'],targets:C_T,lines:[
    {speaker:'takeda_officer',jp:'これが戦時中の土木関連の資料です。兵隊の動員記録も含まれます。',en:"These are wartime civil-engineering records, including soldier mobilization logs.",style:'Calm archivist voice.'},
    {speaker:'ren_uni',jp:'戦線の後方で動員された人びとの一覧ですね。',en:"A list of people mobilized behind the front lines.",style:'Curious student.'},
    {speaker:'takeda_officer',jp:'はい。家族の続柄も詳細です。母子手帳から長女・次男まで記録されています。',en:"Yes. Family relations are detailed too — from mother-child handbooks through eldest daughter and second son.",style:'Methodical officer.'},
    {speaker:'ren_uni',jp:'紙の膜が薄くなって、めくるのにも気を遣います。',en:"The paper membrane is so thin, even turning pages takes care.",style:'Reverent student.'},
    {speaker:'takeda_officer',jp:'手袋ありますので、どうぞ。鉛筆の芯で書かれた箇所は特に脆いです。',en:"Gloves are here, please use them. Pencil-lead writing is especially fragile.",style:'Helpful guidance.'},
    {speaker:'ren_uni',jp:'撮影は許可されていますか。',en:"Is photography permitted?",style:'Polite question.'},
    {speaker:'takeda_officer',jp:'低照度のフラッシュなしならば構いません。',en:"Low light without flash is fine.",style:'Procedural close.'},
  ]},
  {id:'conv_05274',cluster:'C',ambient:'living_room_quiet',scenario:'A uni student interviews a retired builder at home',cast:['hiroshi_elder','ren_uni'],targets:C_T,lines:[
    {speaker:'ren_uni',jp:'戦後の土木業界に長く携わってこられたんですよね。',en:"You worked long in postwar civil engineering, didn't you?",style:'Earnest opener.'},
    {speaker:'hiroshi_elder',jp:'ああ、私は次男坊でね、長女の姉が家計を支えてくれていた。',en:"Yes. I was the second son — my elder sister carried the family finances.",style:'Soft elder recall.'},
    {speaker:'ren_uni',jp:'お父様は兵隊として戦線に出られたんでしょうか。',en:"Did your father go to the front as a soldier?",style:'Gentle probe.'},
    {speaker:'hiroshi_elder',jp:'うん。戻ってきてから、母子だけの家を建て直すのに必死だった。',en:"Yes. After he returned, he was desperate to rebuild the mother-child household.",style:'Quiet emotional.'},
    {speaker:'ren_uni',jp:'当時の現場、鉛筆の芯一本でも貴重だったと聞きました。',en:"On the worksites back then, even a single pencil lead was precious, I heard.",style:'Considered question.'},
    {speaker:'hiroshi_elder',jp:'そうだ。紙も薄い膜のようで、すぐ破れた。',en:"That's right. Paper was thin as a membrane, tearing instantly.",style:'Vivid memory.'},
    {speaker:'ren_uni',jp:'貴重なお話、ありがとうございます。',en:"Thank you for the precious account.",style:'Grateful close.'},
  ]},
  {id:'conv_05275',cluster:'C',ambient:'clinic_quiet',scenario:'A doctor explains anatomy basics to a curious teen',cast:['saito_doctor','sakura_teen'],targets:C_T,lines:[
    {speaker:'saito_doctor',jp:'桜さん、今日は細胞の膜の役割と、神経の芯の話をしましょうか。',en:"Sakura, today let's talk about cell membranes and nerve cores.",style:'Friendly doctor opener.'},
    {speaker:'sakura_teen',jp:'お願いします！前に保健の授業で土木みたいって例えてたの、面白かった。',en:"Please! Health class compared it to civil engineering once, which was fascinating.",style:'Eager teen voice.'},
    {speaker:'saito_doctor',jp:'いい比喩です。母子手帳の項目にもあるように、神経は早くから育っていきます。',en:"Good metaphor. As in the mother-child handbook, the nervous system develops from very early.",style:'Patient educator.'},
    {speaker:'sakura_teen',jp:'うちの長女の友達、ピアノで指の感覚が早く鋭くなったって言ってました。',en:"My eldest-daughter friend said her finger sensation sharpened early thanks to piano.",style:'Sharing teen anecdote.'},
    {speaker:'saito_doctor',jp:'反復学習で神経の芯が太くなるんです。次男の弟さんもサッカーで似た成長を遂げているかも。',en:"Repetition thickens the nerve core. Her younger brother — a second son — may grow similarly through soccer.",style:'Engaged explanation.'},
    {speaker:'sakura_teen',jp:'戦線とか軍の世界では、兵隊の訓練もそれを使うんですよね。',en:"In military settings like the front lines, soldiers' training uses that too, right?",style:'Cross-domain curiosity.'},
    {speaker:'saito_doctor',jp:'その通り。歴史にも体にもつながりが見えてきますね。',en:"Exactly. You start to see links across history and the body.",style:'Warm pedagogical close.'},
  ]},

  {id:'conv_05276',cluster:'D',ambient:'street_quiet_distant',scenario:'Two teens swap fandom and tech weekend plans',cast:['sakura_teen','riku_teen'],targets:D_T,lines:[
    {speaker:'sakura_teen',jp:'土曜、アリスの実写映画見に行かない？',en:"Saturday, wanna catch the live-action Alice movie?",style:'Excited teen pitch.'},
    {speaker:'riku_teen',jp:'いいね。あの予告のクリップ、Twitterで百万再生いったらしい。',en:"Sure. The trailer clip apparently hit a million views on Twitter.",style:'Casual teen agreement.'},
    {speaker:'sakura_teen',jp:'夜は新潮文庫の新刊サイン会あるんだけど、興味ある？',en:"At night there's a Shinchosha new-book signing — interested?",style:'Sharing extra plan.'},
    {speaker:'riku_teen',jp:'うちのPCのコンポーネントがやばくて、組み直さなきゃならんのよ。',en:"My PC's components are dying — I need to rebuild it.",style:'Mild teen complaint.'},
    {speaker:'sakura_teen',jp:'プラグも新しくする？最近スパムメールの中にウイルス紛れ込んでて怖いよ。',en:"Plugs new too? Lately viruses are hidden in spam emails, it's scary.",style:'Friendly warning.'},
    {speaker:'riku_teen',jp:'マジで。隼が獲物を狙う如く、変なメールが受信箱を埋め尽くしてる。',en:"For real. Like a falcon stalking prey, weird mails are flooding my inbox.",style:'Dramatic teen comparison.'},
    {speaker:'sakura_teen',jp:'勝利の女神があんたに微笑むよう、私が祈っといてあげる。',en:"I'll pray the goddess of victory smiles on you.",style:'Playful teen close.'},
  ]},
  {id:'conv_05277',cluster:'D',ambient:'cafe_quiet_chatter',scenario:'Two cafe friends compare reading and tech weekend ideas',cast:['aoi_barista','mei_romantic'],targets:D_T,lines:[
    {speaker:'aoi_barista',jp:'新潮の今月の特集、読んだ？「現代の女神たち」って題のやつ。',en:"Did you read this month's Shincho feature 'Modern Goddesses'?",style:'Friendly opener.'},
    {speaker:'mei_romantic',jp:'読んだ！アリスっていう若手女優のインタビュー、すごく良かった。',en:"I did! The interview with the young actress Alice was wonderful.",style:'Soft excited recommend.'},
    {speaker:'aoi_barista',jp:'うちの店、Wi-Fiのプラグ抜けてて、お客さんがスパム警告ばっか見てたって。',en:"Our cafe's Wi-Fi plug came loose — customers were getting only spam warnings.",style:'Embarrassed barista.'},
    {speaker:'mei_romantic',jp:'ルーターのコンポーネント、古くなってない?買い替え時かも。',en:"Aren't the router components old? Might be replacement time.",style:'Practical friend.'},
    {speaker:'aoi_barista',jp:'うん。客足が隼の如く速く戻ってくるか不安。',en:"Yeah. I'm not sure customers will come back as fast as a falcon.",style:'Worried barista humor.'},
    {speaker:'mei_romantic',jp:'動画クリップで店内紹介すれば、また人来るって。',en:"Make a clip introducing the cafe — people will come back for sure.",style:'Encouraging suggestion.'},
    {speaker:'aoi_barista',jp:'なるほど。週末撮影、付き合ってくれる？',en:"Good thought. Will you help me film this weekend?",style:'Warm request.'},
  ]},
  {id:'conv_05278',cluster:'D',ambient:'cafe_quiet_chatter',scenario:'A uni student helps a teen friend troubleshoot a tech project',cast:['ren_uni','sakura_teen'],targets:D_T,lines:[
    {speaker:'sakura_teen',jp:'先輩、自作PCのコンポーネント選びで悩んでます。',en:"Senpai, I'm stuck picking components for my custom PC build.",style:'Pleading teen.'},
    {speaker:'ren_uni',jp:'予算と用途を教えて。動画クリップ編集中心？',en:"Tell me budget and use. Mostly clip editing?",style:'Calm mentor.'},
    {speaker:'sakura_teen',jp:'はい。アリスの実写ファンビデオを作りたくて。',en:"Yes. I want to make a fan video for the live-action Alice.",style:'Enthusiastic teen.'},
    {speaker:'ren_uni',jp:'なるほど。プラグの種類によっては電源足りないから注意な。',en:"Got it. Depending on plug types, power can fall short — watch out.",style:'Practical advice.'},
    {speaker:'sakura_teen',jp:'スパムメールに「特売」って件名で安いパーツの広告くるんですが、怖くて開けません。',en:"I keep getting 'sale' subject-line spam ads for cheap parts, scared to open them.",style:'Anxious teen.'},
    {speaker:'ren_uni',jp:'正解。新潮社のレビュー記事と、公式ショップだけ参照しよう。',en:"Smart move. Stick to Shinchosha's review articles and official shops.",style:'Reassuring senior.'},
    {speaker:'sakura_teen',jp:'隼みたいに賢く判断します。勝利の女神、応援お願いします！',en:"I'll judge sharply like a falcon. Goddess of victory, please bless me!",style:'Playful teen close.'},
  ]},
  {id:'conv_05279',cluster:'D',ambient:'living_room_quiet',scenario:'A married couple plans a home-cinema upgrade',cast:['ryosuke_dad','yumiko_mom'],targets:D_T,lines:[
    {speaker:'ryosuke_dad',jp:'リビングのプロジェクター、プラグの調子が悪くてさ。',en:"The living-room projector's plug has been acting up.",style:'Casual husband.'},
    {speaker:'yumiko_mom',jp:'コンポーネントの交換、自分でできるの?',en:"Can you swap the components yourself?",style:'Practical wife.'},
    {speaker:'ryosuke_dad',jp:'動画クリップで手順見たから、たぶん大丈夫。',en:"I watched a how-to clip, should be okay.",style:'Confident dad.'},
    {speaker:'yumiko_mom',jp:'最近、変なスパムが届くから、変な手順サイトには気をつけてね。',en:"Lately we get weird spam — careful of dodgy how-to sites.",style:'Caring reminder.'},
    {speaker:'ryosuke_dad',jp:'了解。直したら「アリス」の実写、家族で観よう。',en:"Got it. Once fixed, let's watch live-action Alice as a family.",style:'Warm plan.'},
    {speaker:'yumiko_mom',jp:'新潮文庫の原作も、子供たちに読ませたいな。',en:"I want the kids to read the Shinchosha original too.",style:'Mother\'s wish.'},
    {speaker:'ryosuke_dad',jp:'隼の如く素早く片付けて、午後には観られるようにする。',en:"I'll handle it swift as a falcon so we can watch in the afternoon.",style:'Cheerful resolve.'},
    {speaker:'yumiko_mom',jp:'勝利の女神、ついてるといいね。',en:"Hope the goddess of victory's with you.",style:'Affectionate tease.'},
  ]},
  {id:'conv_05280',cluster:'D',ambient:'cafe_quiet_chatter',scenario:'A Kansai chef and a barista discuss small-business tech',cast:['daichi_kansai','aoi_barista'],targets:D_T,lines:[
    {speaker:'daichi_kansai',jp:'アオイさん、レジのコンポーネント、最近何使ってんの?',en:"Aoi-san, what register components are you using these days?",style:'Friendly Kansai opener.'},
    {speaker:'aoi_barista',jp:'クラウド型に変えました。プラグ周りもすっきりして助かってます。',en:"I switched to cloud-based. Plug-area is much cleaner now.",style:'Bright barista report.'},
    {speaker:'daichi_kansai',jp:'うちもや。スパム広告から守るために、メール環境も整え直したで。',en:"Same here. Rebuilt the email setup to guard against spam ads.",style:'Casual Kansai detail.'},
    {speaker:'aoi_barista',jp:'動画クリップで使い方を覚えるの、案外早いですよね。',en:"Learning by video clip is surprisingly fast, isn't it.",style:'Helpful agreement.'},
    {speaker:'daichi_kansai',jp:'うん。新潮の月刊誌が特集してたで、最近の小規模店の事例。',en:"Yeah. Shinchosha's monthly featured recent small-shop case studies.",style:'Knowledgeable tip.'},
    {speaker:'aoi_barista',jp:'読みます！アリスっていう独立カフェの記事、面白かったって聞きました。',en:"I'll read it! Heard the article on the indie cafe 'Alice' was great.",style:'Eager barista.'},
    {speaker:'daichi_kansai',jp:'隼みたいに動き早い店主や。勝利の女神もついとるみたい。',en:"Owner moves quick as a falcon. The victory goddess seems on her side.",style:'Approving Kansai close.'},
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
    id: r.id,
    context: r.scenario,
    purpose: 'Teach: ' + r.targets.join('/'),
    ambient: r.ambient,
    sound_effects: [],
    target_vocab: targetVocab,
    cast: r.cast,
    frequency_tier: 4,
    length_tier: lengthLabel(lines.length),
    meta: META,
    lines,
  }
  fs.writeFileSync(path.join(OUT_DIR, `${r.id}.json`), JSON.stringify(conv, null, 2) + '\n')
  written++
}
console.log('wrote', written)
if (stillMissing.length) console.log('STILL_MISSING', JSON.stringify(stillMissing, null, 2))

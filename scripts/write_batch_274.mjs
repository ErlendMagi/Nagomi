import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_274 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['やむを得ない','何もかも','無理やり','うれしかっ','別々','つなぎ','余分','気付き']
const B_T = ['学歴','管轄','債券','互換','受験生','行え','工法','断定']
const C_T = ['永久','打撃','退場','解剖','処罰','不祥事','罰則','税収']
const D_T = ['レモン','キャベツ','ブラウン','ミラー','妖精','神秘','パレード','見舞い']

const data = [
  {id:'conv_05441',cluster:'A',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:A_T,scenario:'Two cafe friends recap a tough decision',lines:[
    {speaker:'mei_romantic',jp:'昨日の引っ越しの件、結局、別々に動くしかなかった?',en:"About yesterday's move — did you end up moving separately after all?",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん、やむを得ない事情で、彼とは別ルートだった。',en:"Yes, unavoidable circumstances put us on separate routes.",style:'Honest.'},
    {speaker:'mei_romantic',jp:'何もかも一人でやるのは大変だったでしょ?',en:"Doing everything alone must have been tough.",style:'Concerned.'},
    {speaker:'aoi_barista',jp:'業者さんが余分な手伝いまでしてくれて、うれしかったよ。',en:"The movers helped extra beyond the basics — I was glad.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'急いで運んでもらうのに無理やりお願いした感じ?',en:"Did you push them to hurry it through?",style:'Probe.'},
    {speaker:'aoi_barista',jp:'ううん、ちゃんとつなぎの時間も取ってくれて、最後の気付きで皆笑顔だった。',en:"No — they kept proper transition time, and at the last touch everyone smiled.",style:'Tender close.'},
  ]},
  {id:'conv_05442',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens debrief a school field trip mishap',lines:[
    {speaker:'sakura_teen',jp:'今日の遠足、結局グループ別々に動いたよね。',en:"Today's trip — we ended up moving in separate groups.",style:'Animated teen.'},
    {speaker:'riku_teen',jp:'うん、雨でやむを得なかった。何もかもバラバラ。',en:"Yeah, rain made it unavoidable. Everything got scattered.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'無理やり一緒に行動するより、つなぎの集合場所決めた方が良かったね。',en:"Better to set a transition meet-up than to force everyone together.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お弁当に余分なおにぎり付けてもらって、お腹空いたみんなに配れてうれしかったよ。',en:"My bento had extra rice balls — I shared with the hungry, and was glad.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'最後の気付き、団体行動の難しさ、改めて感じた。',en:"In the end, group-action difficulty hit home again.",style:'Soft.'},
    {speaker:'riku_teen',jp:'来年は事前準備、しっかりやろうな。',en:"Next year let's prep thoroughly.",style:'Close.'},
  ]},
  {id:'conv_05443',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom hears about her young son\'s sports-day stress',lines:[
    {speaker:'sho_child',jp:'ママ、今日の練習、何もかもうまくいかなかった…。',en:"Mom, today's practice — nothing went right.",style:'Sad child.'},
    {speaker:'yumiko_mom',jp:'あらら。やむを得ない日もあるよ。',en:"Oh dear. Some days can't be helped.",style:'Warm.'},
    {speaker:'sho_child',jp:'リレーで、別々のチームに分かれて、相手の方が強かったの。',en:"In the relay we split into separate teams, the other side was stronger.",style:'Soft.'},
    {speaker:'yumiko_mom',jp:'無理やり頑張りすぎても疲れちゃうから、つなぎの休憩、ちゃんと取った?',en:"Pushing too hard makes you tired — did you take transition breaks?",style:'Patient.'},
    {speaker:'sho_child',jp:'うん。今日は余分な気付きがあったから、明日に活かす。',en:"Yeah. Today I had extra realizations, I'll use them tomorrow.",style:'Resolved.'},
    {speaker:'yumiko_mom',jp:'頑張ってるね、お母さん、うれしかったよ。',en:"You're trying hard — Mom is glad.",style:'Tender close.'},
  ]},
  {id:'conv_05444',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple looks back on raising the kids separately at one point',lines:[
    {speaker:'hiroshi_elder',jp:'昔、転勤で家族別々に暮らした時期があったな。',en:"In the past, due to transfers, our family lived apart for a while.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'やむを得なかったわね。何もかも子供たちに我慢させてしまった。',en:"It was unavoidable. We made the kids endure everything.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'無理やり呼び寄せるわけにもいかなかった。',en:"Couldn't drag them to me forcibly either.",style:'Honest.'},
    {speaker:'sachiko_grandma',jp:'長期休みは、つなぎの時間として、皆で過ごせてうれしかったわね。',en:"Long breaks served as transition times — we were happy together.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'余分なお小遣いを忍ばせて、子供たちは気付きを得てくれた。',en:"I'd slip in extra pocket money, and the kids picked up on it.",style:'Fond.'},
    {speaker:'sachiko_grandma',jp:'今思うと、それも教育だったわね。',en:"Looking back, that was education too.",style:'Tender close.'},
  ]},
  {id:'conv_05445',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A uni student listens to a teen friend after a tough exam',lines:[
    {speaker:'sakura_teen',jp:'先輩、模試の結果、何もかもダメだったんです。',en:"Senpai, mock-exam results — everything was bad.",style:'Defeated teen.'},
    {speaker:'ren_uni',jp:'今日は休もう。やむを得ない日もあるよ。',en:"Rest today. Some days can't be helped.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'親と意見が別々で、無理やり志望校変えそうで怖いです。',en:"My parents and I disagree, and I'm scared they'll force a school change.",style:'Vulnerable.'},
    {speaker:'ren_uni',jp:'つなぎの相談時間、家で取れない?余分な負担を減らせる。',en:"Can you carve transition-talk time at home? It reduces extra strain.",style:'Practical.'},
    {speaker:'sakura_teen',jp:'試してみます。先輩に相談できてうれしかったです。',en:"I'll try. I'm glad I could talk to you.",style:'Grateful.'},
    {speaker:'ren_uni',jp:'いつでも来な。気付きを大事に。',en:"Come anytime. Cherish the realizations.",style:'Warm close.'},
  ]},

  {id:'conv_05446',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews a new-hire onboarding plan',lines:[
    {speaker:'hiroshi_boss',jp:'新人の学歴一覧、確認したか。',en:"Did you check the new-hire credential roster?",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。営業管轄でも対応できる人材、揃っています。',en:"Yes. Even for sales jurisdiction, the team is set.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'システムの互換性、業務として行える状態か?',en:"System compatibility — can we operationally run with it?",style:'Probe.'},
    {speaker:'kenji_office',jp:'はい。受験生時代のスキルを応用できる若手も多いです。',en:"Yes. Many youngsters can apply skills from their test-prep days.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'債券関連の業務、断定的に指示できる中堅も配置しろ。',en:"For bond-related work, deploy mid-career staff who can give clear directives.",style:'Direction.'},
    {speaker:'kenji_office',jp:'工法の標準化も、同時に進めます。',en:"Standardizing methodology in parallel.",style:'Commitment.'},
  ]},
  {id:'conv_05447',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers align on a vendor evaluation',lines:[
    {speaker:'yuki_office',jp:'ベンダー候補、学歴より実績で評価しよう。',en:"Vendor candidates — judge by record over credentials.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。互換性のあるシステム提案、各社からもらっています。',en:"Yes. We've received compatible-system proposals from each.",style:'Update.'},
    {speaker:'yuki_office',jp:'断定はしないが、第一候補は管轄外の地域実績もある会社で。',en:"No final call, but the top pick is a firm with out-of-jurisdiction records too.",style:'Strategic.'},
    {speaker:'kenji_office',jp:'受験生のように、何度も提案を磨いて来てくれてます。',en:"Like test-takers, they polish proposals repeatedly.",style:'Observation.'},
    {speaker:'yuki_office',jp:'債券発行に絡む工法、その会社が一番得意。',en:"On bond-issuance-linked methodology, that firm is strongest.",style:'Decisive.'},
    {speaker:'kenji_office',jp:'では、見積もり再依頼を行えるようにします。',en:"Then I'll enable a re-quote request.",style:'Close.'},
  ]},
  {id:'conv_05448',cluster:'B',ambient:'office_quiet_low',cast:['ren_uni','yuki_office'],targets:B_T,scenario:'A uni intern interviews a manager about HR practices',lines:[
    {speaker:'ren_uni',jp:'採用、学歴重視の度合いはどのくらいですか。',en:"How much do you weigh credentials in hiring?",style:'Polite intern.'},
    {speaker:'yuki_office',jp:'昔より低めです。互換性ある経験を重視します。',en:"Lower than before. We value transferable experience.",style:'Helpful.'},
    {speaker:'ren_uni',jp:'業務管轄、新人にも段階的に渡されますか。',en:"Are operational jurisdictions handed to new hires gradually?",style:'Probe.'},
    {speaker:'yuki_office',jp:'はい。受験生時代の集中力を活かす研修も行えるよう、整備しています。',en:"Yes. We've built training that taps their test-era focus.",style:'Informative.'},
    {speaker:'ren_uni',jp:'断定的な指示を出すのは、いつ頃から?',en:"From when do they give definitive directions?",style:'Curious.'},
    {speaker:'yuki_office',jp:'三年目以降が多いです。債券業務も担当する場合は、工法の理解次第ですね。',en:"Often from the third year on. For bond work, depends on grasp of methods.",style:'Detail close.'},
  ]},
  {id:'conv_05449',cluster:'B',ambient:'cafe_quiet_chatter',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors a younger boss on hiring philosophy',lines:[
    {speaker:'hiroshi_elder',jp:'学歴だけで人を見るな。互換性ある経験を見抜け。',en:"Don't judge by credentials alone. Spot transferable experience.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'承知しております。管轄を越えて、断定的に指示できる人材は宝です。',en:"Understood. Those who can issue clear directions across jurisdictions are treasures.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'受験生時代の根性で泥臭く動ける人、見極めろ。',en:"Spot those who can hustle with test-era grit.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。債券、最新の工法も学ばせています。',en:"Yes. We're teaching them bonds and the latest methods.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'若手が行える領域を着実に広げろ。',en:"Steadily expand the areas the young can operate.",style:'Stern advice.'},
    {speaker:'hiroshi_boss',jp:'胸に刻みます。',en:"Engraved in my heart.",style:'Close.'},
  ]},
  {id:'conv_05450',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:B_T,scenario:'A police officer briefs a uni reporter about department rotations',lines:[
    {speaker:'takeda_officer',jp:'人事配置、学歴のみで決めることはありません。',en:"Personnel placements aren't decided by credentials alone.",style:'Calm officer.'},
    {speaker:'ren_uni',jp:'管轄の引き継ぎ、互換性のある人選を意識されますか。',en:"Jurisdiction handovers — do you pick for transferability?",style:'Polite probe.'},
    {speaker:'takeda_officer',jp:'はい。受験生のように、若手も体系的に学んでいます。',en:"Yes. Young officers study systematically, like test-takers.",style:'Informative.'},
    {speaker:'ren_uni',jp:'断定的な現場判断、その後の自信につながりますね。',en:"Definitive field calls build later confidence, right?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。最先端の捜査工法も、行えるよう研修を続けます。',en:"Yes. We keep training so the latest investigative methods can be used.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'債券詐欺などの専門部署も、その流れですか。',en:"Specialist units like bond-fraud follow that flow too?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'おっしゃる通りです。',en:"Indeed.",style:'Close.'},
  ]},

  {id:'conv_05451',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher walks a uni student through a corporate-ethics paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、企業の不祥事と税収への打撃を扱うんですね。',en:"Your paper handles corporate scandal and the blow to tax revenue.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。処罰や罰則のあり方も、章を割いて書きます。',en:"Yes. I'll dedicate chapters to punishment and penalty design.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'経営者の退場ルール、社会的な解剖が必要ですね。',en:"Rules for executive exits need societal dissection.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'永久追放のような厳しい措置の事例も、含めます。',en:"I'll include cases of severe measures like permanent ban.",style:'Plan.'},
    {speaker:'asuka_teacher',jp:'比較対象、丁寧に選んで。',en:"Choose comparison subjects carefully.",style:'Suggestion.'},
    {speaker:'ren_uni',jp:'承知しました。',en:"Understood.",style:'Close.'},
  ]},
  {id:'conv_05452',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss and his manager dissect a corporate-scandal column',lines:[
    {speaker:'hiroshi_boss',jp:'この記事、業界の不祥事続発に、税収への打撃まで議論してるな。',en:"This piece debates industry scandals continuing and the blow to tax revenue.",style:'Boss.'},
    {speaker:'kenji_office',jp:'はい。処罰の重さ、罰則の運用、両方が問われています。',en:"Yes. Both severity of punishment and operation of penalties are in question.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'経営者の退場制度、永久追放まで踏み込んでる事例もあるな。',en:"Some cases push exec exit rules all the way to permanent bans.",style:'Analytical.'},
    {speaker:'kenji_office',jp:'失敗事例を社会で解剖していくのが、再発防止に効くようです。',en:"Dissecting failure cases socially seems effective at preventing recurrence.",style:'Insightful.'},
    {speaker:'hiroshi_boss',jp:'来月の経営会議で議論しよう。',en:"Discuss at next month's executive meeting.",style:'Decisive.'},
    {speaker:'kenji_office',jp:'承知しました。',en:"Understood.",style:'Brief close.'},
  ]},
  {id:'conv_05453',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a uni reporter about enforcement reform',lines:[
    {speaker:'takeda_officer',jp:'最近の処罰制度、罰則の見直しが進んでいます。',en:"Recent punishment systems — penalty revisions are advancing.",style:'Calm.'},
    {speaker:'ren_uni',jp:'不祥事の被害、税収への打撃も無視できませんよね。',en:"Scandals' damage and the blow to tax revenue can't be ignored.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。事件を解剖して原因を特定する手法、定着しています。',en:"Yes. Dissecting incidents to pinpoint causes has taken root.",style:'Informative.'},
    {speaker:'ren_uni',jp:'退場処分、永久にならないケースもあるんですか。',en:"In dismissals, are there cases that don't go permanent?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'状況によります。再起の機会も制度上、用意します。',en:"Depends. Institutionally, opportunities to recover are also available.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'参考になります。',en:"That's helpful.",style:'Close.'},
  ]},
  {id:'conv_05454',cluster:'C',ambient:'living_room_quiet',cast:['hiroshi_elder','ren_uni'],targets:C_T,scenario:'A uni student interviews a retired regulator',lines:[
    {speaker:'ren_uni',jp:'長年、行政の処分業務に携わってこられたんですよね。',en:"You served long in administrative-discipline work.",style:'Polite.'},
    {speaker:'hiroshi_elder',jp:'うん。不祥事の解剖と、退場処分の判断、何度も経験した。',en:"Yes. Dissecting scandals and judging dismissals — many times.",style:'Veteran.'},
    {speaker:'ren_uni',jp:'罰則を強化することで、税収への打撃を防げるんですか。',en:"Does strengthening penalties prevent the blow to tax revenue?",style:'Probe.'},
    {speaker:'hiroshi_elder',jp:'一定の抑止効果はある。永久処分は慎重に行うべきだが。',en:"There's a deterrent effect to a degree. But permanent measures need caution.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'処罰の運用、現場で工夫されたことは?',en:"Any field-level ingenuities in operating punishments?",style:'Curious.'},
    {speaker:'hiroshi_elder',jp:'当事者の声を残すのが、後の参考になったよ。',en:"Preserving the voice of those involved became a reference later.",style:'Wise close.'},
  ]},
  {id:'conv_05455',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','sakura_teen'],targets:C_T,scenario:'A doctor explains medical-ethics basics to a teen',lines:[
    {speaker:'saito_doctor',jp:'桜さん、医療における処罰制度、知ってる?',en:"Sakura, do you know about punishment systems in medicine?",style:'Friendly.'},
    {speaker:'sakura_teen',jp:'なんとなく。重大な不祥事に対しては、罰則ありますよね。',en:"Vaguely. For serious scandals there are penalties, right?",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。最悪、永久に医師免許失う退場処分もあります。',en:"Yes. At worst, dismissal with permanent license loss.",style:'Patient.'},
    {speaker:'sakura_teen',jp:'問題を解剖する委員会も、ある時代があったとか。',en:"There were eras with committees dissecting issues, I heard.",style:'Engaged.'},
    {speaker:'saito_doctor',jp:'今もありますよ。社会への打撃を最小化する目的です。',en:"Today too. The aim is minimizing societal damage.",style:'Educator.'},
    {speaker:'sakura_teen',jp:'税収にも影響するんですよね、結局。',en:"It affects tax revenue too in the end, right?",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'おっしゃる通り。',en:"As you say.",style:'Warm close.'},
  ]},

  {id:'conv_05456',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens plan a market-and-parade weekend',lines:[
    {speaker:'sakura_teen',jp:'週末、レモン市場のパレードに行こうよ!',en:"Weekend, let's hit the lemon-market parade!",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'いいね。キャベツの新作料理も出てるって。',en:"Sure. New cabbage dishes are out too.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'お父さんへの見舞いも兼ねて、ブラウンのギフトボックスでお土産買おう。',en:"Combining a visit to my dad, let's get a brown gift box as souvenir.",style:'Plan.'},
    {speaker:'riku_teen',jp:'屋台のミラーアートが神秘的だって聞いた。',en:"The booth mirror art is supposedly mystical.",style:'Knowing.'},
    {speaker:'sakura_teen',jp:'夜は妖精コスプレの撮影会あるよ。',en:"At night there's a fairy-cosplay shoot.",style:'Excited.'},
    {speaker:'riku_teen',jp:'楽しみだな!',en:"Looking forward to it!",style:'Warm close.'},
  ]},
  {id:'conv_05457',cluster:'D',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:D_T,scenario:'Two cafe friends plan an event collaboration',lines:[
    {speaker:'aoi_barista',jp:'店で、レモンとキャベツの特別メニュー、夏に出す予定。',en:"At the shop, planning a lemon-and-cabbage special menu for summer.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'素敵!ブラウンの紙袋でテイクアウト用にしよ。',en:"Lovely! Use brown paper bags for takeout.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'店内にミラーボール置いて、夜は神秘的な雰囲気にする。',en:"Place a mirror ball in the shop; mystical at night.",style:'Plan.'},
    {speaker:'mei_romantic',jp:'妖精風の壁画も、近所のアーティストにお願いしよ。',en:"Let's commission a fairy-style mural from a local artist.",style:'Dreamy.'},
    {speaker:'aoi_barista',jp:'パレードの後、お見舞いに来たお客さんも喜びそう。',en:"Customers stopping by post-parade should be delighted.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'準備、手伝うよ!',en:"I'll help with prep!",style:'Cheerful close.'},
  ]},
  {id:'conv_05458',cluster:'D',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:D_T,scenario:'A uni student helps a teen friend plan a school festival booth',lines:[
    {speaker:'sakura_teen',jp:'先輩、文化祭で「妖精カフェ」やりたいんです。',en:"Senpai, I want to run a 'fairy cafe' at the school fest.",style:'Eager.'},
    {speaker:'ren_uni',jp:'いいね。メニューはレモンとキャベツのライトな組み合わせ?',en:"Nice. Menu — a light lemon-and-cabbage combo?",style:'Helpful.'},
    {speaker:'sakura_teen',jp:'はい。テーブルクロスはブラウンで、神秘的な雰囲気に。',en:"Yes. Brown tablecloths, mystical atmosphere.",style:'Plan.'},
    {speaker:'ren_uni',jp:'入口にミラーアート、置こうか。来場者に好評そうだ。',en:"Place mirror art at the entrance — visitors will love it.",style:'Idea.'},
    {speaker:'sakura_teen',jp:'当日、パレードの後にお見舞いみたいに来てくれる先生もいるかな。',en:"On the day, maybe teachers will drop by post-parade like visitors.",style:'Curious.'},
    {speaker:'ren_uni',jp:'絶対来てくれる。応援するよ。',en:"Definitely. I'm rooting for you.",style:'Warm close.'},
  ]},
  {id:'conv_05459',cluster:'D',ambient:'living_room_quiet',cast:['ryosuke_dad','yumiko_mom'],targets:D_T,scenario:'A married couple plans a family festival outing',lines:[
    {speaker:'yumiko_mom',jp:'週末、子供と街のパレード見に行こうよ。',en:"Weekend, let's take the kids to see the town parade.",style:'Warm.'},
    {speaker:'ryosuke_dad',jp:'いいね。屋台でレモンとキャベツのサンド食べる?',en:"Sure. Lemon-and-cabbage sandwiches from the booth?",style:'Easy dad.'},
    {speaker:'yumiko_mom',jp:'うん。終わったらお義母さんのお見舞いも行こう。',en:"Yes. Afterward let's also visit your mother.",style:'Caring.'},
    {speaker:'ryosuke_dad',jp:'ブラウンの花束、用意するわ。',en:"I'll prep a brown bouquet.",style:'Practical.'},
    {speaker:'yumiko_mom',jp:'公園のミラー彫刻、子供たち神秘的だって喜ぶよ。',en:"The park's mirror sculpture — the kids will love its mystery.",style:'Cheerful.'},
    {speaker:'ryosuke_dad',jp:'妖精みたいに走り回りそうだな。',en:"They'll run around like fairies.",style:'Warm close.'},
  ]},
  {id:'conv_05460',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A Kansai chef and a barista swap festival prep tips',lines:[
    {speaker:'daichi_kansai',jp:'アオイさん、夏のパレード、何屋台出すん?',en:"Aoi-san, summer parade — what booth are you running?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'レモネードと、キャベツチップス。テーブルはブラウンで統一。',en:"Lemonade and cabbage chips. Brown table-uniform style.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'ミラー設置して、夜の雰囲気神秘的にしたらどうや?',en:"Set up a mirror and make the evening mystical, eh?",style:'Plan Kansai.'},
    {speaker:'aoi_barista',jp:'いい案ですね。スタッフは妖精コスプレで盛り上げます。',en:"Great idea. Staff will hype it in fairy cosplay.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'病気のお父さんへのお見舞いも兼ねて、屋台寄ってもらおか。',en:"Combining with a visit to your sick father, have him stop by the booth.",style:'Warm Kansai.'},
    {speaker:'aoi_barista',jp:'ありがとうございます、嬉しいです。',en:"Thank you, I'm grateful.",style:'Soft close.'},
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

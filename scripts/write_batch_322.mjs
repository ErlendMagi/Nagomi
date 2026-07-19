import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_322 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['分かれる','目立ち','気がつか','ゆかり','枯れ','残ら','落とさ','贈る']
const B_T = ['市議会','軽量','しくみ','持ち込み','冊子','薬剤師','値下げ','有識者']
const C_T = ['王者','焦り','断る','発散','流用','取り残さ','風情','跡地']
const D_T = ['バス停','クリーニング','手袋','長編','投げる','スプレー','植木','団子']

const data = [
  // A
  {id:'conv_06401',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'駅で、皆と道、分かれる時、寂しい。',en:"Station — paths-part time, lonely.",style:'Soft teen.'},
    {speaker:'riku_teen',jp:'うん。お前、最近、目立ちが減ったな。',en:"Yeah. You — less conspicuous lately.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'忘れ物、気がつかない時、ある。',en:"Forgotten items — sometimes don't notice.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お祖父ちゃん、ゆかりの場所、案内してくれた。',en:"Grandpa — connection-place guided.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'庭の花、枯れてきたね、もう冬。',en:"Garden flowers — withering, winter.",style:'Wistful.'},
    {speaker:'riku_teen',jp:'今日は、宿題、残らないようにしたい。',en:"Today — homework, no-leftover wanted.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'コンビニで、お金、落とさないように、注意。',en:"Conbini — don't drop money, careful.",style:'Practical.'},
    {speaker:'riku_teen',jp:'誕生日、お母さんに花を贈るんだ。',en:"Birthday — flower-gift Mom.",style:'Warm close.'},
  ]},
  {id:'conv_06402',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'最近、考え方、二派に分かれるの。',en:"Lately — viewpoints split-two.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'うん。新作カフェのキャンドル、目立ちすぎず、ちょうどいい。',en:"Yeah. New candle — not-too-conspicuous, just right.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'店員、気がつかないお客様、いらしたから、声かけた。',en:"Clerk — un-noticed guest, called out.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'故郷ゆかりの食材、メニューに加えた。',en:"Hometown-tied ingredients — menu-added.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'店先の植木、枯れちゃった。',en:"Storefront plants — withered.",style:'Subdued.'},
    {speaker:'aoi_barista',jp:'昨日のケーキ、残らない人気だった。',en:"Yesterday's cake — no-leftover popular.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'お会計、レシート、落とさないでね。',en:"Receipt — don't drop.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'お祝いに、ハンドクリーム、贈ろうかな。',en:"For celebration — hand-cream gift?",style:'Warm close.'},
  ]},
  {id:'conv_06403',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、駅で、お友達と道、分かれる時、寂しい。',en:"Mom — station-farewell with friend, lonely.",style:'Soft child.'},
    {speaker:'yumiko_mom',jp:'お父さん、髪型、目立ちすぎないように整えてた。',en:"Dad — hair non-too-conspicuous.",style:'Tender.'},
    {speaker:'sho_child',jp:'うん。ママの誕生日、気がつかなかったらどうしよう、不安。',en:"If I don't notice Mom's birthday — anxious.",style:'Worried.'},
    {speaker:'yumiko_mom',jp:'ご先祖ゆかりの神社、お正月、お参りに行こうね。',en:"Ancestor-tied shrine — visit at New Year.",style:'Warm.'},
    {speaker:'sho_child',jp:'お花、枯れちゃった、悲しい。',en:"Flowers — withered, sad.",style:'Subdued.'},
    {speaker:'yumiko_mom',jp:'食事、残らないように、ちゃんと食べてね。',en:"Meal — no-leftover, eat properly.",style:'Direction.'},
    {speaker:'sho_child',jp:'お小遣い、財布から、落とさないでね。',en:"Allowance — don't drop from wallet.",style:'Careful.'},
    {speaker:'yumiko_mom',jp:'クリスマス、お父さんに、心を込めた贈り物しよう。',en:"Christmas — heartful gift to Dad.",style:'Warm close.'},
  ]},
  {id:'conv_06404',cluster:'A',ambient:'park_distant_birds',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple walks',lines:[
    {speaker:'hiroshi_elder',jp:'人生の道、分かれる時、勇気が要ったな。',en:"Life-path partings — needed courage.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。私の若い頃、目立ちたい時もあったわよ。',en:"Yes. In youth — wanted-to-stand-out times too.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'最近、足元、気がつかないと、危ない。',en:"Lately — non-noticed footing, dangerous.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'お祖母ちゃんゆかりの古本、整理しなきゃ。',en:"Grandma-tied old books — must organize.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'庭の盆栽、枯れさせないよう、毎日水を。',en:"Garden bonsai — water daily to prevent withering.",style:'Direction.'},
    {speaker:'sachiko_grandma',jp:'お料理、残らないように、お互い少しずつね。',en:"Cooking — no-leftover, both small portions.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'若い頃、お前を駅まで送って、落とさず帰したな。',en:"Youth — escorted you to station; didn't drop home.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'息子に、人生の本、贈ろうかしら。',en:"Son — gift a life-book?",style:'Warm close.'},
  ]},
  {id:'conv_06405',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai and a teen chat',lines:[
    {speaker:'ren_uni',jp:'桜、ゼミ、二つに分かれる時、迷うよな。',en:"Sakura — seminar-split times, hesitate.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'はい。発表で、目立ちすぎないように、心がけてます。',en:"Yes. Pres — strive not to over-stand-out.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'夜更かしで、体調変化、気がつかない時、危ない。',en:"All-nighters — non-noticed body changes, dangerous.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'はい。先輩、地域ゆかりの研究、進めてますね。',en:"Yes. Senpai — region-tied research, advancing.",style:'Polite.'},
    {speaker:'ren_uni',jp:'実験の植物、枯れさせないように、注意してる。',en:"Lab plants — prevent withering, mindful.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。プリント、残らないようにしっかり配ります。',en:"Yes. Handouts — no-leftover, distribute well.",style:'Bright.'},
    {speaker:'ren_uni',jp:'実験ノート、落とさないように、紐つけてる。',en:"Lab notes — strapped to prevent dropping.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'卒業祝い、先輩に、心を込めて贈るつもりです。',en:"Grad-gift — heartful to senpai.",style:'Warm close.'},
  ]},

  // B
  {id:'conv_06406',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'地元市議会、訪問、設定しろ。',en:"Local city-council — visit, set.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。新型は軽量化が進んでいます。',en:"Yes. New model — light-weighting progresses.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'業界のしくみ、若手にも教えろ。',en:"Industry mechanism — teach youth.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社外への持ち込み厳禁、徹底中です。',en:"Yes. No external take — strict.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'紹介冊子、最新版に更新。',en:"Intro booklet — latest update.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。薬剤師との連携、進めています。',en:"Yes. Pharmacist-linkage progresses.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'競合の値下げ、注視しろ。',en:"Rival price-cuts — watch.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。有識者会議、来月、開催します。',en:"Yes. Expert meeting — next month.",style:'Close.'},
  ]},
  {id:'conv_06407',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss strategy',lines:[
    {speaker:'yuki_office',jp:'市議会との折衝、定期的にね。',en:"City-council nego — periodic.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。軽量素材、新素材、検討中です。',en:"Yes. Light-weight materials — under review.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'仕事のしくみ、社内で共有しよう。',en:"Work-mechanism — internal share.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。資料、持ち込み制限、徹底します。',en:"Yes. Materials — take-in restricted, strict.",style:'Update.'},
    {speaker:'yuki_office',jp:'PR冊子、デザイン、新しく。',en:"PR booklet — new design.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。地域薬剤師、勉強会、開催します。',en:"Yes. Local pharmacists — study-meet held.",style:'Bright.'},
    {speaker:'yuki_office',jp:'競合の値下げ攻勢、対応、急ぎだ。',en:"Rival price-cut offensive — rush response.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。有識者の意見、参考にします。',en:"Yes. Expert opinions — referenced.",style:'Close.'},
  ]},
  {id:'conv_06408',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、市議会、地元政治、興味、持て。',en:"Ren — city-council, local-politics, get interested.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。製品の軽量化、技術、勉強したいです。',en:"Yes. Light-weighting tech — wanna study.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'流通のしくみ、覚えろ。',en:"Distribution mechanism — learn.",style:'Direction.'},
    {speaker:'ren_uni',jp:'機密の持ち込み禁止、徹底されてますね。',en:"Confidential take-in ban — strict.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'就活冊子、企業情報、丁寧に読め。',en:"Job-hunt booklet — careful read.",style:'Direction.'},
    {speaker:'ren_uni',jp:'薬剤師の従兄、医療業界、興味深い、と言ってました。',en:"Pharmacist cousin — medical-industry intriguing.",style:'Curious.'},
    {speaker:'hiroshi_boss',jp:'流通の値下げ競争、激しいぞ。',en:"Distribution price-cut competition — fierce.",style:'Direction.'},
    {speaker:'ren_uni',jp:'有識者会議の傍聴、可能ですか。',en:"Expert-meeting attendance — possible?",style:'Polite close.'},
  ]},
  {id:'conv_06409',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on coordination',lines:[
    {speaker:'takeda_officer',jp:'市議会で、防犯条例、検討中です。',en:"City-council — crime-prev ordinance under review.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。当社、軽量装備品も、共有しています。',en:"Yes. Our firm — light-equip also shared.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'公共のしくみ、住民にも伝えたい。',en:"Public mechanism — convey to residents.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。資料の持ち込み、警察にも届出しています。',en:"Yes. Material take-in — police-notified.",style:'Update.'},
    {speaker:'takeda_officer',jp:'防犯冊子、全戸配布、進めています。',en:"Crime-prev booklet — all-home distribution.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。薬剤師、警察連絡網にも入ってます。',en:"Yes. Pharmacists — in police-network too.",style:'Update.'},
    {speaker:'takeda_officer',jp:'業界の値下げ、安全性に響く時、警戒します。',en:"Industry price-cuts — when impacting safety, vigilant.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。有識者の声、警察にも届けています。',en:"Yes. Expert voices — police-delivered too.",style:'Close.'},
  ]},
  {id:'conv_06410',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'市議会、若い頃、よく傍聴したな。',en:"City-council — often watched in youth.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。製品の軽量化、当時、夢の技術でした。',en:"Yes. Light-weighting — dream-tech back then.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'企業のしくみ、変わったが、人を中心に。',en:"Corp mechanism — changed, but people-centered.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。情報の持ち込み、コンプライアンス、徹底中です。',en:"Yes. Info take-in — compliance strict.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'社史冊子、後輩に贈れ。',en:"History booklet — give juniors.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。地域薬剤師との関係、長く築いています。',en:"Yes. Local pharmacists — long-built relations.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'値下げ、安易にするな。',en:"Don't price-cut easily.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。有識者として、君も、声を上げてほしい。',en:"Yes. As expert — wish you'd voice up too.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06411',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses a paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、業界の王者、独占の構造、論じましたね。',en:"Paper — industry king, monopoly structure, discussed.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。焦りで失敗した経営判断、章にしました。',en:"Yes. Panic-induced mgmt fails — chapter.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'招待を断る勇気、研究者にも必要ですね。',en:"Invite-refusing courage — also needed for researchers.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。情報を発散する場、メディア、検討しました。',en:"Yes. Info-venting venues — media, considered.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'予算流用、業界の闇、扱いましたか。',en:"Budget-diversion — industry-dark, covered?",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。被災者が取り残されない社会、目指す、と書きました。',en:"Yes. No-leftover-disaster-victim society — aim, written.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'風情ある研究テーマ、章末で言及しましたね。',en:"Atmospheric research themes — mentioned at end.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'廃工場の跡地、再開発、最終章で論じました。',en:"Defunct-factory ruins — redevelopment, final chapter.",style:'Earnest close.'},
  ]},
  {id:'conv_06412',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs about a case',lines:[
    {speaker:'takeda_officer',jp:'業界の王者と呼ばれる企業、関与、調査中です。',en:"Industry-king firm — involvement, investigating.",style:'Calm.'},
    {speaker:'ren_uni',jp:'容疑者、焦りで、ミス、犯したようですね。',en:"Suspect — panic-induced mistake, seems.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。協力依頼、断る人もいます。',en:"Yes. Cooperation-asks — some refuse.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害者の怒り、発散する場、必要ですね。',en:"Victim-anger venting — needed.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。公費流用の疑い、別件で調査中です。',en:"Yes. Public-funds-diversion — separately investigating.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害者、取り残されない対応、警察、頑張ってますね。',en:"Victim — no-leftover response, police-effort.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。事件現場、風情の残る地域です。',en:"Yes. Crime site — atmospheric region.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'空き家の跡地、犯罪リスク、上がりますね。',en:"Abandoned-house ruins — crime risk up.",style:'Curious close.'},
  ]},
  {id:'conv_06413',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical issues',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、業界の王者と呼ばれる病院、最新医療、進んでいます。',en:"Ren — industry-king hospital, latest medicine advanced.",style:'Calm.'},
    {speaker:'ren_uni',jp:'患者、焦りで誤判断、しがちですね。',en:"Patients — panic-misjudge prone.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。治療を断る権利、患者にもあります。',en:"Yes. Refusal-right — patients have.",style:'Patient.'},
    {speaker:'ren_uni',jp:'ストレス、発散する手段、医師として推奨しますか。',en:"Stress-venting means — doctors recommend?",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。研究費の流用、業界で問題視されてます。',en:"Yes. Research-fund diversion — industry problem.",style:'Informative.'},
    {speaker:'ren_uni',jp:'地方医療、取り残されない仕組み、必要ですね。',en:"Regional medicine — no-leftover system needed.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。療養所、風情ある場所で、患者、癒される。',en:"Yes. Sanatorium — atmospheric, patients heal.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'閉院した跡地、再活用の動き、ありますか。',en:"Closed-hospital ruins — re-use moves?",style:'Curious close.'},
  ]},
  {id:'conv_06414',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews ops',lines:[
    {speaker:'hiroshi_boss',jp:'業界の王者として、品質、譲るな。',en:"As industry king — quality, don't yield.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。焦りで、判断ミス、避けます。',en:"Yes. Panic-mistakes — avoid.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'不当な要求、断る勇気、持て。',en:"Unfair demands — refuse-courage.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員のストレス、発散する場、設けています。',en:"Yes. Staff-stress venting — venues set.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'予算流用、絶対に避けろ。',en:"Budget-diversion — strictly avoid.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。地方支店、取り残されない経営、目指します。',en:"Yes. Regional branches — no-leftover mgmt.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'歴史ある社屋、風情、保てよ。',en:"Historical HQ — atmosphere, keep.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。廃工場の跡地、再開発計画、検討中です。',en:"Yes. Defunct-plant ruins — redevelopment plans, reviewing.",style:'Close.'},
  ]},
  {id:'conv_06415',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、スポーツの王者の伝記、研究テーマね。',en:"Sakura — sports-king bio, research theme.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。試合中、焦りで判断ミスする選手、章にしました。',en:"Yes. Mid-match panic-mistakes — chapter.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'スポンサーを断る勇気、興味深いですね。',en:"Sponsor-refusing courage — intriguing.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'ストレス、発散するルーティン、論じました。',en:"Stress-venting routines — discussed.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'過去の流用問題、扱いましたか。',en:"Past-diversion issues — covered?",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。引退選手が、取り残されない社会、論じました。',en:"Yes. Retired athletes — no-leftover society discussed.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'伝統スポーツの風情、現代との対比、面白いですね。',en:"Traditional-sports atmosphere — modern-contrast, fun.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'閉鎖された球場の跡地、地域に与えた影響、書きました。',en:"Closed-stadium ruins — regional impact, written.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06416',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens walk',lines:[
    {speaker:'sakura_teen',jp:'バス停、新しくできた、近所に。',en:"Bus stop — newly added nearby.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。冬服、クリーニング、出した。',en:"Yeah. Winter clothes — dry-cleaned.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'冷えるね、手袋、忘れた。',en:"Cold — gloves forgotten.",style:'Wry.'},
    {speaker:'riku_teen',jp:'長編映画、3時間あるから、覚悟して観るんだ。',en:"Long film — 3 hours; brace and watch.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'川に石を、投げるの、子供っぽい遊びかな。',en:"Stone-throwing into river — childish?",style:'Wry.'},
    {speaker:'riku_teen',jp:'うん。除菌スプレー、ポケットにいつも入れてる。',en:"Yeah. Disinfectant spray — always in pocket.",style:'Practical.'},
    {speaker:'sakura_teen',jp:'お祖母ちゃんち、植木が見事だよ。',en:"Granny's — plants splendid.",style:'Animated.'},
    {speaker:'riku_teen',jp:'お祭りで、団子、買って食べよう。',en:"Festival — dango buy.",style:'Eager close.'},
  ]},
  {id:'conv_06417',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、バス停の屋根、新しくなったよ。',en:"Mom — bus-stop roof renewed.",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'うん。コートのクリーニング、頼んでおいたね。',en:"Yes. Coat dry-clean — booked.",style:'Tender.'},
    {speaker:'sho_child',jp:'手袋、洗濯してくれた、ありがとう!',en:"Gloves — washed for me, thanks!",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'夜、長編アニメ、家族で観ようね。',en:"Night — family long-anime.",style:'Warm.'},
    {speaker:'sho_child',jp:'運動会、ボール、強く投げるよ!',en:"Sports day — ball, throw hard!",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'消毒スプレー、玄関に置いておくね。',en:"Disinfectant spray — at entrance.",style:'Practical.'},
    {speaker:'sho_child',jp:'庭の植木、お父さんが、手入れしてくれてる。',en:"Garden plants — Dad caring.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'お月見、団子、作ろうね。',en:"Moon-viewing — make dango.",style:'Warm close.'},
  ]},
  {id:'conv_06418',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'駅前のバス停、深夜便、増えた。',en:"Station bus-stop — late-night, more.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'うん。冬コート、クリーニング、終わった。',en:"Yeah. Winter coat — dry-clean done.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'お気に入りの手袋、買い替えたい。',en:"Fave gloves — wanna replace.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'長編ドラマ、毎週欠かさず観てるの。',en:"Long drama — weekly no-skip.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'ゴミ、ゴミ箱に投げる時、外したら、ショック。',en:"Trash — when throwing missed, shock.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'店、消毒スプレー、各テーブルに置いてる。',en:"Shop — spray on each table.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'実家の植木、お父さん、自慢にしてる。',en:"Parents' plants — Dad proud.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'お土産で、団子セット、買って帰った。',en:"Souvenir — dango set, brought home.",style:'Warm close.'},
  ]},
  {id:'conv_06419',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、バス停で、お前を待ったな。',en:"In youth — waited for you at bus-stop.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。父の背広、クリーニングが、難しかった。',en:"Yes. Dad's suit — dry-clean was hard.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'冬は、手袋、手作りの方が温かい。',en:"Winter — handmade gloves, warmer.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'長編小説、お互い、最近、読み進めにくいわね。',en:"Long novels — mutually hard to push lately.",style:'Wry.'},
    {speaker:'hiroshi_elder',jp:'孫が、紙飛行機、投げて遊んでる、可愛いね。',en:"Grandkid — paper-plane throwing, cute.",style:'Warm.'},
    {speaker:'sachiko_grandma',jp:'消臭スプレー、最近、いろんな種類あるわよ。',en:"Deodorant spray — many kinds lately.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'庭の植木、年々、立派になってきた。',en:"Garden plants — yearly more splendid.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お彼岸、お団子、お供えしましょう。',en:"Higan — offer dango.",style:'Warm close.'},
  ]},
  {id:'conv_06420',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan an event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、バス停近くにフライヤー、置こか。',en:"Aoi-san — flyers near bus-stop?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。テーブルクロス、クリーニング、業者と契約済みです。',en:"Yes. Tablecloths — dry-clean contracted.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'冬、店員に手袋、配ろか。',en:"Winter — distribute staff gloves?",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'長編動画、店内BGV用に編集中です。',en:"Long video — BGV-edit in-store.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'ゴミ箱の位置、投げるのを習慣にできるよう、見直そ。',en:"Trash-bin position — habit-throwable, review.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'除菌スプレー、入口に新型、設置しました。',en:"Disinfect spray — new-model at entrance.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'植木、季節ごとに、入れ替えよか。',en:"Plants — seasonal swap.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'秋メニュー、団子の創作品、出します。',en:"Autumn menu — dango creations release.",style:'Warm close.'},
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

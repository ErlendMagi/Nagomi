import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_267 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['欲しかっ','この頃','どうにか','イライラ','踊る','輝き','隣接','隙間']
const B_T = ['主任','取り付け','採択','円滑','送付','法務省','官庁','査定']
const C_T = ['分裂','火災','津波','飛躍','流動','機動','抑圧','繁栄']
const D_T = ['ハリウッド','トレンド','タレント','エアコン','チャット','ビタミン','ギフト','バトル']

const S = (jp,en,style)=>(speaker)=>({speaker,jp,en,style})

const data = [
  {id:'conv_05301',cluster:'A',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:A_T,scenario:'Two cafe friends compare moods and tiny irritations',lines:[
    {speaker:'aoi_barista',jp:'最近この頃、なんかイライラしっぱなしで、ゆっくり過ごす時間が欲しかったの。',en:"Lately I'm just constantly irritable, and I wanted some slow time.",style:'Tired barista venting.'},
    {speaker:'mei_romantic',jp:'わかる。隣接するビルの工事音、隙間時間も奪っていくよね。',en:"I get it. The adjacent building's construction noise eats even our spare moments.",style:'Soft sympathetic.'},
    {speaker:'aoi_barista',jp:'夜、ライブで踊る友達の動画見て、ようやく心の輝き戻ってきた。',en:"At night I watched a friend's clip dancing live and the spark in my heart finally came back.",style:'Brightening barista.'},
    {speaker:'mei_romantic',jp:'いいね。週末はどうにか時間作って、お気に入りのカフェ巡りしよ。',en:"Nice. This weekend let's somehow carve out time and do a cafe tour.",style:'Warm suggestion.'},
    {speaker:'aoi_barista',jp:'賛成。歩道の隙間に咲いてる花、最近撮るのがマイブームなんだ。',en:"Agreed. Photographing flowers blooming in sidewalk gaps is my recent thing.",style:'Soft hobby share.'},
    {speaker:'mei_romantic',jp:'素敵。今度プリントして店に飾ろうよ。',en:"Lovely. Let's print some and display them at the shop.",style:'Warm close.'},
  ]},
  {id:'conv_05302',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens vent about school stress',lines:[
    {speaker:'sakura_teen',jp:'この頃、テストばっかでイライラしすぎ。',en:"These days it's tests on tests, I'm so on edge.",style:'Frustrated teen.'},
    {speaker:'riku_teen',jp:'わかる。空き時間の隙間に、好きな曲流して踊る時間が欲しかったよ。',en:"Same. I wanted dance-to-my-favorites time in the gaps between classes.",style:'Casual teen.'},
    {speaker:'sakura_teen',jp:'校舎に隣接する公園で、放課後ストレッチしてる子いるよね。',en:"There's a kid stretching after school at the park next to the school building.",style:'Observation.'},
    {speaker:'riku_teen',jp:'あれ、いいよな。汗の輝きが青春って感じ。',en:"That's nice. The shine of sweat just feels like youth.",style:'Half-joking teen.'},
    {speaker:'sakura_teen',jp:'明日からどうにかして、放課後に一時間でも体動かそ。',en:"Starting tomorrow, somehow I'll move my body for at least an hour after school.",style:'Resolute teen.'},
    {speaker:'riku_teen',jp:'俺も付き合うわ。じゃ駅前で待ち合わせな。',en:"I'll join. Meet at the station then.",style:'Easy close.'},
  ]},
  {id:'conv_05303',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom helps her young son handle a frustrating day',lines:[
    {speaker:'sho_child',jp:'ママ、今日学校で、隣の席の子に消しゴム取られて、イライラした。',en:"Mom, today the kid next to me took my eraser and I got mad.",style:'Whiny child.'},
    {speaker:'yumiko_mom',jp:'そっか、嫌だったね。新しいの欲しかったのかな。',en:"I see, that was unpleasant. Maybe he wanted a new one.",style:'Gentle motherly.'},
    {speaker:'sho_child',jp:'隣接の机との隙間に落ちて、見つけるのに大変だったよ。',en:"It fell into the gap between adjacent desks and was a pain to find.",style:'Reporting detail.'},
    {speaker:'yumiko_mom',jp:'最近この頃、お友達同士で物の取り合い、よくあるみたい。',en:"Lately, kids tussling over things seems pretty common.",style:'Patient observation.'},
    {speaker:'sho_child',jp:'夜、お風呂で歌って踊ると、心が輝き取り戻すよ！',en:"At night singing and dancing in the bath brings back the shine in my heart!",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'ふふ、どうにかなるね。今夜もお歌タイムにしよ。',en:"Hehe, you'll manage. Tonight too, let's have song time.",style:'Warm close.'},
  ]},
  {id:'conv_05304',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple talks about small annoyances and joys',lines:[
    {speaker:'hiroshi_elder',jp:'この頃、隣接する家の庭木が伸びすぎてな。',en:"Lately the neighbor's garden tree has gotten too long.",style:'Soft elder grumble.'},
    {speaker:'sachiko_grandma',jp:'うちのカーテンの隙間から、葉っぱが見えるくらいよ。',en:"You can see leaves through the curtain gap at our place.",style:'Mildly amused.'},
    {speaker:'hiroshi_elder',jp:'うん、イライラするほどじゃないが、剪定くらい欲しかったね。',en:"Not enough to be irritating, but a trim would've been welcome.",style:'Measured.'},
    {speaker:'sachiko_grandma',jp:'昔、私たちもよく公園で踊って、夕日の輝き眺めたわね。',en:"Long ago we often danced in the park and watched the sunset shine.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'今もどうにかそういう時間、作れたらいいんだが。',en:"I wish we could somehow still make that kind of time.",style:'Tender elder.'},
    {speaker:'sachiko_grandma',jp:'来週、近所の公園で散歩しましょう。',en:"Next week, let's stroll in the local park.",style:'Soft happy close.'},
  ]},
  {id:'conv_05305',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A uni student listens to a teen friend\'s stress',lines:[
    {speaker:'sakura_teen',jp:'先輩、最近この頃、本当に色々重なってイライラが止まらないんです。',en:"Senpai, lately so much is piling up and the irritation won't stop.",style:'Tense teen.'},
    {speaker:'ren_uni',jp:'休みが欲しかったタイミングだろ。今ここで少し休も。',en:"Sounds like you needed a break. Rest a bit right here.",style:'Calm mentor.'},
    {speaker:'sakura_teen',jp:'休み時間の隙間も、誰かが話しかけてきて落ち着かなくて。',en:"Even break gaps, someone talks to me and I can't settle.",style:'Soft confession.'},
    {speaker:'ren_uni',jp:'喧騒に隣接した場所、嫌だよな。どうにか避難場所、作っとこ。',en:"Spaces next to noise are rough. Let's somehow build a refuge spot.",style:'Supportive senpai.'},
    {speaker:'sakura_teen',jp:'家で音楽聴いて踊ると、ほんとに目に輝き戻る気がします。',en:"At home, listening and dancing, the shine returns to my eyes for real.",style:'Brightening teen.'},
    {speaker:'ren_uni',jp:'いい習慣だ。続けていけ。',en:"Good habit. Keep at it.",style:'Warm close.'},
  ]},

  {id:'conv_05306',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews a contract submission',lines:[
    {speaker:'hiroshi_boss',jp:'ケンジ主任、契約書、もう送付済みか?',en:"Manager Kenji, contract — already sent?",style:'Crisp boss.'},
    {speaker:'kenji_office',jp:'はい。法務省ガイドラインに準拠した版を、官庁経由で先方に送付しました。',en:"Yes. The version compliant with Justice Ministry guidelines was sent via the gov channel.",style:'Methodical update.'},
    {speaker:'hiroshi_boss',jp:'査定の数値、円滑に決裁されるか?',en:"The valuation figures — will they pass approval smoothly?",style:'Probing.'},
    {speaker:'kenji_office',jp:'監査側の取り付け状況も問題ないとの見込みです。',en:"On the auditor side, the buy-in looks fine.",style:'Confident detail.'},
    {speaker:'hiroshi_boss',jp:'良し。今期の社内提案、採択されるよう動いてくれ。',en:"Good. Get this term's internal proposal adopted.",style:'Decisive.'},
    {speaker:'kenji_office',jp:'承知しました。',en:"Understood.",style:'Brief close.'},
  ]},
  {id:'conv_05307',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers prep a procurement memo',lines:[
    {speaker:'yuki_office',jp:'明日の朝会、新主任への報告、円滑に進めたい。',en:"For tomorrow's morning meeting, I want the new-manager update to run smoothly.",style:'Brisk co-manager.'},
    {speaker:'kenji_office',jp:'はい。査定基準、官庁の最新通達と照合済みです。',en:"Yes. Evaluation criteria are reconciled with the latest gov directive.",style:'Detail-aware.'},
    {speaker:'yuki_office',jp:'資料の送付先、法務省の担当者も入っているか?',en:"Recipients of the materials — is the Justice Ministry contact included?",style:'Check.'},
    {speaker:'kenji_office',jp:'昨日、メールで送付済みです。取り付けは午前中に確認します。',en:"Yes, sent yesterday by email. I'll confirm sign-off in the morning.",style:'Crisp.'},
    {speaker:'yuki_office',jp:'採択前提で、別案の準備も同時に進めよう。',en:"Assuming adoption, let's also prep the backup plan in parallel.",style:'Strategic.'},
    {speaker:'kenji_office',jp:'了解です。',en:"Got it.",style:'Brief close.'},
  ]},
  {id:'conv_05308',cluster:'B',ambient:'office_quiet_low',cast:['ren_uni','yuki_office'],targets:B_T,scenario:'A uni intern interviews a manager about compliance',lines:[
    {speaker:'ren_uni',jp:'業務の流れ、官庁との連携部分を教えていただけますか。',en:"Could you walk me through the workflow's gov-coordination part?",style:'Polite intern.'},
    {speaker:'yuki_office',jp:'主任が窓口になり、法務省への送付前に社内査定を通します。',en:"The manager is the contact; we run internal evaluation before sending to the Justice Ministry.",style:'Helpful explanation.'},
    {speaker:'ren_uni',jp:'採択率、企業によって差がありますよね。',en:"Adoption rates vary by company, right?",style:'Curious.'},
    {speaker:'yuki_office',jp:'うちは円滑な調整に力を入れているので、比較的高いです。',en:"We focus on smooth coordination, so ours is relatively high.",style:'Confident.'},
    {speaker:'ren_uni',jp:'システムの取り付けも、官庁監修なんですか。',en:"Is the system installation also supervised by the ministry?",style:'Specific probe.'},
    {speaker:'yuki_office',jp:'はい。安全基準の確認まで含めて、徹底されています。',en:"Yes. Including safety-standard checks, it's thorough.",style:'Procedural close.'},
  ]},
  {id:'conv_05309',cluster:'B',ambient:'cafe_quiet_chatter',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors a younger boss on dealings with ministries',lines:[
    {speaker:'hiroshi_elder',jp:'昔は法務省に直接書類を送付しに行ったもんだ。',en:"In the old days, we'd carry papers to the Justice Ministry in person.",style:'Nostalgic elder.'},
    {speaker:'hiroshi_boss',jp:'今でも、主任が一度は顔を出して、円滑な関係作りに努めています。',en:"Even now, the manager makes an appearance to build smooth ties.",style:'Earnest younger.'},
    {speaker:'hiroshi_elder',jp:'査定はうやむやにせず、官庁側の見方も尊重しろ。',en:"Don't fudge the evaluation; respect how the ministry sees it.",style:'Sage advice.'},
    {speaker:'hiroshi_boss',jp:'はい。今期は採択を確実にしたく、慎重に動いています。',en:"Yes. This term I want adoption confirmed, so we're moving carefully.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'装備の取り付け工事も、現場任せにせず確認しろ。',en:"Don't leave equipment-installation work to the field alone — check it.",style:'Stern guidance.'},
    {speaker:'hiroshi_boss',jp:'ご指摘の通りに。',en:"As you point out.",style:'Respectful close.'},
  ]},
  {id:'conv_05310',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:B_T,scenario:'A police officer briefs a uni reporter about an investigation procedure',lines:[
    {speaker:'takeda_officer',jp:'本件の経過、まず関係資料を法務省に送付した段階です。',en:"Status on this case — we've just sent the relevant materials to the Justice Ministry.",style:'Calm officer.'},
    {speaker:'ren_uni',jp:'査定の結果は、いつ頃出るんでしょうか。',en:"When will the evaluation result come out?",style:'Polite reporter.'},
    {speaker:'takeda_officer',jp:'官庁の事務がいま立て込んでいて、採択まで一ヶ月程度かかりそうです。',en:"The ministry office is backed up; adoption may take about a month.",style:'Factual.'},
    {speaker:'ren_uni',jp:'担当主任の方からは、追加情報はありそうですか。',en:"Is there likely more info from the chief manager in charge?",style:'Follow-up.'},
    {speaker:'takeda_officer',jp:'明日の打合せで、円滑な情報共有を取り付けます。',en:"At tomorrow's meeting we'll secure smooth info-sharing.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'ありがとうございます。記事用にメモさせていただきます。',en:"Thank you. I'll take notes for the article.",style:'Grateful close.'},
  ]},

  {id:'conv_05311',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher walks a uni student through a disaster-policy paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、津波対策と都市の繁栄の関係を扱うんですね。',en:"Your paper covers tsunami countermeasures and urban prosperity.",style:'Calm teacher.'},
    {speaker:'ren_uni',jp:'はい。沿岸地域の流動的な人口にも触れたいです。',en:"Yes. I want to touch on the fluid populations of coastal areas too.",style:'Earnest student.'},
    {speaker:'asuka_teacher',jp:'災害時の機動的な対応、火災と津波で異なる構造ですね。',en:"Emergency mobilization differs between fires and tsunami.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'政策が分裂気味だった時期も、論じる予定です。',en:"I plan to discuss periods when policy was somewhat fractured too.",style:'Confident.'},
    {speaker:'asuka_teacher',jp:'技術の飛躍が、抑圧的な行政運用を変えた事例もあります。',en:"There are cases where tech leaps shifted repressive admin practices.",style:'Suggestion.'},
    {speaker:'ren_uni',jp:'参考にします。来週、構成案をお持ちします。',en:"I'll reference it. Next week I'll bring the outline.",style:'Close.'},
  ]},
  {id:'conv_05312',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss and his manager dissect a long-form disaster-resilience piece',lines:[
    {speaker:'hiroshi_boss',jp:'この記事、火災と津波の二重災害に強い都市の話だな。',en:"This article's on cities resilient to dual fire-and-tsunami disasters.",style:'Boss reading.'},
    {speaker:'kenji_office',jp:'はい。流動人口を抱えた地域での、機動的な避難計画が要です。',en:"Yes. Mobile evacuation plans in areas with fluid populations are the key.",style:'Manager briefing.'},
    {speaker:'hiroshi_boss',jp:'政策が分裂しないよう、調整役が必要だな。',en:"You need a coordinator so policy doesn't fragment.",style:'Analytical.'},
    {speaker:'kenji_office',jp:'長期的な飛躍を狙うなら、抑圧的にならない誘導が大事です。',en:"For long-term leaps, non-repressive guidance matters.",style:'Insightful.'},
    {speaker:'hiroshi_boss',jp:'地域経済の繁栄にも直結する話だ。',en:"It ties directly to local economic prosperity.",style:'Decisive.'},
    {speaker:'kenji_office',jp:'はい、来週の朝会で取り上げます。',en:"Yes, I'll bring it up next week.",style:'Close.'},
  ]},
  {id:'conv_05313',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a uni reporter about emergency drills',lines:[
    {speaker:'takeda_officer',jp:'昨年の防災訓練、津波と火災の同時想定で行いました。',en:"Last year's drill simulated tsunami and fire simultaneously.",style:'Calm officer.'},
    {speaker:'ren_uni',jp:'機動隊の派遣、流動的な対応が求められますね。',en:"Riot-police dispatch requires fluid response, right?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。情報の分裂を防ぐため、指揮系統は単一化しています。',en:"Yes. To prevent info fragmentation, command lines are unified.",style:'Informative.'},
    {speaker:'ren_uni',jp:'抑圧的にならない伝達方法、工夫があるんですか。',en:"Are there ways to communicate that aren't repressive?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'住民の繁栄を守るのが本義ですから、説明を尽くします。',en:"Protecting residents' prosperity is the principle, so we explain thoroughly.",style:'Principled.'},
    {speaker:'ren_uni',jp:'技術的にも飛躍したシステム、導入されてるんですね。',en:"Tech has leapt too, with systems being introduced.",style:'Acknowledging.'},
    {speaker:'takeda_officer',jp:'ええ。記事用に資料、後ほどお送りします。',en:"Yes. I'll send materials for your article later.",style:'Close.'},
  ]},
  {id:'conv_05314',cluster:'C',ambient:'living_room_quiet',cast:['hiroshi_elder','ren_uni'],targets:C_T,scenario:'A uni student interviews a retired emergency manager',lines:[
    {speaker:'ren_uni',jp:'先生、現役時代、津波対策の現場、どうでしたか。',en:"Sensei, when active, what was the tsunami-response field like?",style:'Polite student.'},
    {speaker:'hiroshi_elder',jp:'地域によっては政策が分裂していて、調整が大変だった。',en:"Some regions had fragmented policy; coordination was tough.",style:'Veteran recall.'},
    {speaker:'ren_uni',jp:'火災の連動も、想定外でしたか。',en:"Was the linked-fire scenario unexpected too?",style:'Probe.'},
    {speaker:'hiroshi_elder',jp:'機動的な対応がうまくいった地域は、住民への抑圧的指示を避けていたよ。',en:"Areas where mobile response worked avoided repressive directives to residents.",style:'Wise.'},
    {speaker:'ren_uni',jp:'技術の飛躍で、変わったところはありますか。',en:"Has tech leaps changed parts of it?",style:'Curious.'},
    {speaker:'hiroshi_elder',jp:'流動的な人口データの可視化、革命的だったね。地域の繁栄にも貢献している。',en:"Visualizing fluid population data was revolutionary. It contributes to local prosperity too.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'貴重なお話、ありがとうございます。',en:"Precious testimony — thank you.",style:'Close.'},
  ]},
  {id:'conv_05315',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','sakura_teen'],targets:C_T,scenario:'A doctor explains disaster-medicine basics to a teen',lines:[
    {speaker:'saito_doctor',jp:'桜さん、災害医療の基礎、お話ししましょう。',en:"Sakura, let's go over disaster-medicine basics.",style:'Friendly doctor.'},
    {speaker:'sakura_teen',jp:'お願いします!津波後の救護とか、機動的に動かないとなんですよね。',en:"Please! Post-tsunami aid has to be mobile, right?",style:'Eager teen.'},
    {speaker:'saito_doctor',jp:'その通り。情報が分裂しないよう、トリアージが要になります。',en:"Right. So info doesn't fragment, triage is the key.",style:'Patient educator.'},
    {speaker:'sakura_teen',jp:'火災時の救護とは、優先順位が違うんですか。',en:"Does aid differ between fire scenarios?",style:'Probe.'},
    {speaker:'saito_doctor',jp:'ええ、流動的に判断します。技術の飛躍で、現場通信も改善しました。',en:"Yes, we judge fluidly. Tech leaps have improved field comms too.",style:'Engaging.'},
    {speaker:'sakura_teen',jp:'被災者の心の抑圧、ケア体制もあるんですよね。',en:"Mental suppression among victims also has care systems, right?",style:'Sensitive teen.'},
    {speaker:'saito_doctor',jp:'はい。地域の繁栄を取り戻すための長期支援、含まれます。',en:"Yes. Long-term support to restore community prosperity is included.",style:'Warm close.'},
  ]},

  {id:'conv_05316',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens swap entertainment and gift-shopping ideas',lines:[
    {speaker:'sakura_teen',jp:'今週末、新しいハリウッド映画見に行かない?',en:"This weekend, wanna catch the new Hollywood movie?",style:'Excited teen.'},
    {speaker:'riku_teen',jp:'いいね。あのタレント主演のやつ、SNSでもトレンド入りしてる。',en:"Sure. The one starring that celeb's trending on social.",style:'Casual teen.'},
    {speaker:'sakura_teen',jp:'帰りに、彼氏へのギフト選び付き合ってくれない?',en:"On the way back, mind helping me pick a gift for my boyfriend?",style:'Friendly request.'},
    {speaker:'riku_teen',jp:'了解。あとビタミン剤、最近俺も飲んでて、おすすめあるよ。',en:"Got it. Also vitamins — I've been taking some lately, got recs.",style:'Practical teen.'},
    {speaker:'sakura_teen',jp:'家のエアコン、つけっぱで電気代やばい。チャットで親に怒られた。',en:"Left the AC on at home — power bill is brutal. Got chewed out by parents on chat.",style:'Self-deprecating.'},
    {speaker:'riku_teen',jp:'笑える。明日は授業バトルだから、今日のうちに息抜きしとこ。',en:"Lol. Tomorrow's class is a battle, let's chill today.",style:'Close.'},
  ]},
  {id:'conv_05317',cluster:'D',ambient:'cafe_quiet_chatter',cast:['aoi_barista','mei_romantic'],targets:D_T,scenario:'Two cafe friends compare wellness and entertainment trends',lines:[
    {speaker:'aoi_barista',jp:'最近のトレンド、サプリよりビタミンを食事で取るっていう流れ、いいね。',en:"Lately's trend — getting vitamins from food over supplements — nice direction.",style:'Soft barista.'},
    {speaker:'mei_romantic',jp:'分かる。ハリウッドのタレントもライフスタイル系の発信、増えてる。',en:"Right. Hollywood celebs are doing more lifestyle content too.",style:'Engaged.'},
    {speaker:'aoi_barista',jp:'うちの店、エアコン入れ替えたら客足ぐっと戻ってきたよ。',en:"After we swapped the AC, customers came back in force.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'素晴らしい。グループチャットで来店報告、みんなしてた。',en:"Wonderful. People were posting visit reports in the group chat.",style:'Warm.'},
    {speaker:'aoi_barista',jp:'今月、ギフトカードのキャンペーンやろうかな。',en:"Maybe I'll run a gift-card campaign this month.",style:'Idea.'},
    {speaker:'mei_romantic',jp:'いいね、SNSでバトルみたいに広告合戦すれば話題になるよ。',en:"Nice — if you do an ad battle on socials it'll catch on.",style:'Close.'},
  ]},
  {id:'conv_05318',cluster:'D',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:D_T,scenario:'A uni student helps a teen friend plan a birthday surprise',lines:[
    {speaker:'sakura_teen',jp:'先輩、来週の親友の誕生日、ギフト何にしよう。',en:"Senpai, my bestie's birthday next week — what gift?",style:'Indecisive teen.'},
    {speaker:'ren_uni',jp:'最近のトレンドだと、体験ギフトもいいぞ。',en:"Trend-wise, experience gifts are nice.",style:'Helpful senpai.'},
    {speaker:'sakura_teen',jp:'ハリウッドの最新映画チケットとか?',en:"Like tickets to the newest Hollywood movie?",style:'Brightening.'},
    {speaker:'ren_uni',jp:'ありかも。あとビタミン入りの限定スイーツとか、芸能のタレントも紹介してたぞ。',en:"Could work. Or vitamin-infused limited sweets — even celebs were promoting them.",style:'Detailed.'},
    {speaker:'sakura_teen',jp:'当日はカフェ予約して、エアコン効いた静かな席で渡したい。',en:"On the day I'll book a cafe and hand it over in a quiet AC seat.",style:'Plan.'},
    {speaker:'ren_uni',jp:'グループチャットで他の友達ともすり合わせとけよ。バトル避けるために。',en:"Coordinate with other friends in the group chat to avoid clashes.",style:'Practical close.'},
  ]},
  {id:'conv_05319',cluster:'D',ambient:'living_room_quiet',cast:['ryosuke_dad','yumiko_mom'],targets:D_T,scenario:'A married couple plans a movie-and-gift weekend',lines:[
    {speaker:'ryosuke_dad',jp:'週末、子供たちにハリウッド映画見せに連れてくか。',en:"This weekend, want to take the kids to a Hollywood movie?",style:'Easy husband.'},
    {speaker:'yumiko_mom',jp:'いいね。あとパパに父の日のギフトもそろそろ選ばないと。',en:"Nice. We should also pick a Father's Day gift for your dad soon.",style:'Warm.'},
    {speaker:'ryosuke_dad',jp:'タレントが推してたビタミン補給グミとか、流行ってるらしい。',en:"Vitamin gummies celebs endorse are apparently trending.",style:'Casual.'},
    {speaker:'yumiko_mom',jp:'家のエアコン、夏前に点検も入れておこう。',en:"Let's have the home AC serviced before summer too.",style:'Practical.'},
    {speaker:'ryosuke_dad',jp:'子供たちの友達ともグループチャットで連絡入れてやろう。',en:"I'll message the kids' friends through the group chat too.",style:'Cheerful.'},
    {speaker:'yumiko_mom',jp:'うん。日常のあれこれ、バトル感あるけど楽しいね。',en:"Yeah. Day-to-day stuff feels like a battle, but it's fun.",style:'Warm close.'},
  ]},
  {id:'conv_05320',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A Kansai chef and a barista swap pop-culture impressions',lines:[
    {speaker:'daichi_kansai',jp:'アオイさん、最近のハリウッドのトレンド、よう知ってるな。',en:"Aoi-san, you know Hollywood trends well lately, eh.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'お客さんから情報入るんです。タレントのインタビューとか、面白くて。',en:"Customers bring info. Celeb interviews are interesting.",style:'Soft answer.'},
    {speaker:'daichi_kansai',jp:'うちの店、エアコンの調子最近イマイチでなあ。',en:"Our shop's AC's been off lately.",style:'Mild Kansai grumble.'},
    {speaker:'aoi_barista',jp:'業者紹介しますよ。チャットで連絡先送りますね。',en:"I can intro a contractor. I'll send the contact by chat.",style:'Helpful.'},
    {speaker:'daichi_kansai',jp:'助かるわ。ありがと。お礼にビタミン入りの限定スムージーの試作品、後でギフトで渡すわ。',en:"Big help. Thanks. As thanks I'll gift you a prototype vitamin-infused smoothie later.",style:'Generous Kansai.'},
    {speaker:'aoi_barista',jp:'楽しみ!夏のメニューバトル、これで勝てそうです。',en:"Looking forward! Should help in the summer menu battle.",style:'Bright close.'},
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

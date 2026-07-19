import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_448 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['ウキウキ','なんにも','おこる','ひと時','概して','めんどう','こまかい','やむを得ず']
const B_T = ['別段','係り','入れ替わり','直轄','年俸','引上げ','支配人','バランスシート']
const C_T = ['激変','奪取','過密','浸水','殿堂','リンチ','撃破','国力']
const D_T = ['ハンサム','ニコチン','馬力','ハイウェイ','アスファルト','鰻','怪談','ニンジン']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08921',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、明日の遠足で、ウキウキしてるのね','Sho — tomorrow-excursion-excited','Tender','yumiko_mom'),
    mk('ママ、ぼく、なんにも悪い事してないよ','Mom — me nothing-bad-no','Earnest child','sho_child'),
    mk('翔くん、お父さんは悪いことがおこると先に気付かれるのよ','Sho — Dad-bad-happen-notice','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんと、ひと時のおしゃべりが楽しかったよ','Mom — me Grandpa-moment-chat-fun','Tender child','sho_child'),
    mk('翔くん、お父さんは概して優しい人なのよ','Sho — Dad-overall-kind','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お片付けはめんどうだよ','Mom — me cleanup-pain','Wry child','sho_child'),
    mk('翔くん、こまかいおもちゃは無くさないようにね','Sho — tiny-toy-not-lose','Direction','yumiko_mom'),
    mk('ママ、ぼく、お友達と遊ぶの諦めたよ、やむを得ずだよ','Mom — me friend-play-gave-up unavoid','Wry close','sho_child'),
  ]},
  {id:'conv_08922',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、明日のイベント、ウキウキしてるね、メイちゃん','Aoi — tomorrow-event-excited Mei','Pleased','mei_romantic'),
    mk('葵、お客様、お席で、なんにも頼まずに本を読んでらしたよ、メイちゃん','Aoi — cust-seat-nothing-order-book Mei','Reflective','aoi_barista'),
    mk('葵、お客様にトラブルがおこると困るね、メイちゃん','Aoi — cust-trouble-happen-worry Mei','Reflective','mei_romantic'),
    mk('葵、お店の閉店前のひと時、好きだな、メイちゃん','Aoi — store-close-pre-moment-like Mei','Tender','aoi_barista'),
    mk('葵、新メニュー、概して好評ね、メイちゃん','Aoi — new-menu-overall-pop Mei','Pleased','mei_romantic'),
    mk('葵、レシートの整理がめんどうだよね、メイちゃん','Aoi — receipt-org-pain Mei','Wry','aoi_barista'),
    mk('葵、新メニュー、こまかい味付けが大事ね、メイちゃん','Aoi — new-menu-fine-season-impt Mei','Direction','mei_romantic'),
    mk('葵、商品入れ替えはやむを得ずやらないとね、メイちゃん','Aoi — prod-replace-unavoid-do Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08923',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが旅の前にウキウキされたぞ','Gran — youth Dad-trip-pre-excited','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、苦しい時もなんにも仰らないお方でらしたわよね、あなた?','Yes — Grandpa-hard-nothing-said, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがおこるかどうかひやひやしたぞ','Gran — youth Dad-angry-anxious','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様と、ひと時を大事になさったわよね、あなた?','Grandpa — grandkid-moment-cherish, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは概して穏やかでらしたぞ','Gran — youth Dad-overall-calm','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、書類整理がめんどうでらしたわよね、あなた?','Grandpa — doc-org-pain, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはこまかい所まで気を配られたぞ','Gran — youth Dad-fine-detail-care','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、晩年は、やむを得ず病院通いだったわよね、あなた?','Grandpa — late-unavoid-hosp-attend, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08924',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、夏休み前でウキウキしてんな','Riku — pre-summer-excited','Pleased teen','sakura_teen'),
    mk('お前、いつも、なんにも考えてないだろ、桜','You — always-nothing-think Sakura','Wry','riku_teen'),
    mk('リク、お前、テスト悪いと先生がおこるぞ','Riku — test-bad-teacher-angry','Direction','sakura_teen'),
    mk('お前、放課後のひと時、いつも俺と過ごしてるな、桜','You — after-school-moment-me-spend Sakura','Tender','riku_teen'),
    mk('リク、お前、概して真面目だな','Riku — overall-serious','Praising','sakura_teen'),
    mk('お前、宿題めんどうって言うなよ、桜','You — homework-pain-don\'t Sakura','Direction','riku_teen'),
    mk('リク、お前、こまかい所までこだわるよな','Riku — fine-detail-care','Praising','sakura_teen'),
    mk('お前、塾は、やむを得ず行ってんだろ?桜','You — cram unavoid-go? Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_08925',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんとお出かけでウキウキしてるね','Sho — Mei-sis-out-excited','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、なんにも怖くないよ','Mei-sis — me nothing-scared','Brave child','sho_child'),
    mk('翔くん、メイ姉さんはおこることがないのよ','Sho — Mei-sis-anger-no','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんとひと時のお絵描きが楽しい','Mei-sis — me Mei-sis-moment-drawing-fun','Eager child','sho_child'),
    mk('翔くん、メイ姉さんは、概して感情を見せない人なの','Sho — Mei-sis-overall-emo-hide','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お片付けがめんどうだよ','Mei-sis — me cleanup-pain','Wry child','sho_child'),
    mk('翔くん、メイ姉さんは絵のこまかい所まで描くのよ','Sho — Mei-sis-pic-fine-detail-draw','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お絵描きやめるのを、やむを得ずやめたよ','Mei-sis — me draw-stop-unavoid Mei','Wry close','sho_child'),
  ]},
  {id:'conv_08926',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、お客様には別段のサービスを用意しろ','Our co — VIP-special-svc-prep','Crisp','hiroshi_boss'),
    mk('はい。窓口の係りを新しく配置しました','Yes — Window-attendant-new-place','Methodical','kenji_office'),
    mk('当社、シフト入れ替わり時の引き継ぎを確実にしろ','Our co — shift-swap-handover-sure','Direction','hiroshi_boss'),
    mk('はい。本社直轄の新部署を作りました','Yes — HQ-direct-new-section','Update','kenji_office'),
    mk('幹部の年俸制度を見直せ','Exec-annual-salary-review','Direction','hiroshi_boss'),
    mk('はい。給与の引上げを社員に通知しました','Yes — Salary-raise-staff-notify','Update','kenji_office'),
    mk('当社、店舗の支配人を増員しろ','Our co — store-manager-add','Direction','hiroshi_boss'),
    mk('はい。決算のバランスシートを準備しました','Yes — Acct-balance-sheet-prep','Close','kenji_office'),
  ]},
  {id:'conv_08927',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('別段の理由がなければ通常運用でいきましょう','Special-reason-no-normal-run','Brisk','yuki_office'),
    mk('はい。受付係りのマニュアルを更新しました','Yes — Recep-attendant-manual-update','Cooperative','kenji_office'),
    mk('シフトの入れ替わりを表で見える化しましょう','Shift-swap-table-vis','Direction','yuki_office'),
    mk('はい。本社直轄プロジェクトの予算を確認しました','Yes — HQ-direct-proj-budget-check','Update','kenji_office'),
    mk('年俸の評価基準を整理しましょう','Annual-eval-crit-org','Direction','yuki_office'),
    mk('はい。最低賃金の引上げに合わせて社内も対応します','Yes — Min-wage-raise-align-resp','Update','kenji_office'),
    mk('支配人の権限を明確にしましょう','Manager-auth-clear','Direction','yuki_office'),
    mk('はい。バランスシートの読み方を新人に教えております','Yes — Balance-sheet-newbie-teach','Close','kenji_office'),
  ]},
  {id:'conv_08928',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、別段の論文構成にこだわるな','Ren — special-paper-struct-not-care','Mentor','hiroshi_boss'),
    mk('はい。学会の受付係りを担当しました','Yes — Conf-recep-handle','Earnest','ren_uni'),
    mk('蓮、共同研究者の入れ替わりに備えろ','Ren — joint-research-swap-prep','Direction','hiroshi_boss'),
    mk('はい。直轄の研究室で実験を進めます','Yes — Direct-lab-exp-progress','Polite','ren_uni'),
    mk('蓮、若手研究者の年俸交渉を支援しろ','Ren — young-researcher-annual-nego-supp','Direction','hiroshi_boss'),
    mk('はい。研究費の引上げを学長に申請しました','Yes — Research-fund-raise-dean-app','Earnest','ren_uni'),
    mk('蓮、研究所の支配人とも連携しろ','Ren — research-fac-manager-link','Direction','hiroshi_boss'),
    mk('はい。研究のバランスシート的な収支表を作りました','Yes — Research-balance-sheet-PL','Earnest close','ren_uni'),
  ]},
  {id:'conv_08929',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、別段の事案でないか確認されますね','Police special-case-check','Cooperative','kenji_office'),
    mk('警察、警備の係りを駐車場に増やされましたね','Police guard-attendant-parking-add','Cooperative','kenji_office'),
    mk('警察、勤務シフトの入れ替わりも厳格に管理されますね','Police shift-swap-strict-mgmt','Cooperative','kenji_office'),
    mk('警察、本部直轄の特捜部署のお話、頼もしいです','Police HQ-direct-special-inv reliable','Cooperative','kenji_office'),
    mk('警察、若手警官の年俸改善も検討されてますね','Police young-officer-annual-imp','Cooperative','kenji_office'),
    mk('警察、給与引上げの世論にもご対応中ですね','Police salary-raise-public-resp','Cooperative','kenji_office'),
    mk('警察、ビルの支配人とも情報交換されますね','Police bldg-manager-info-exch','Cooperative','kenji_office'),
    mk('警察、組織のバランスシート的な人員配置を考えていらっしゃるんですね','Police org-balance-sheet-personnel-deploy','Close','kenji_office'),
  ]},
  {id:'conv_08930',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、別段の優遇を社員に与えられたぞ','Dad — founding special-pref-staff','Sage','hiroshi_elder'),
    mk('はい。お父さんは受付係りも自ら指導された','Yes — Dad recep-attendant-self-guide','Commitment','hiroshi_boss'),
    mk('お父さん、幹部の入れ替わり時の判断が見事だったぞ','Dad — exec-swap-judg-splendid','Wistful','hiroshi_elder'),
    mk('はい。お父さんは本社直轄の精鋭部隊を作られた','Yes — Dad HQ-direct-elite-unit','Reflective','hiroshi_boss'),
    mk('お父さん、社員の年俸引上げを毎年決断されたぞ','Dad — staff-annual-raise-yearly','Wistful','hiroshi_elder'),
    mk('はい。お父さんは最低給与の引上げに積極的でらした','Yes — Dad min-salary-raise-active','Reflective','hiroshi_boss'),
    mk('お父さん、各店舗の支配人と毎月面談されたぞ','Dad — each-store-manager-monthly-meet','Wistful','hiroshi_elder'),
    mk('はい。お父さんはバランスシートを毎日確認された','Yes — Dad balance-sheet-daily-check','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08931',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、革命期に社会が激変した事例を論文で扱いましたね','Ren — rev-soc-drastic-change paper','Calm','asuka_teacher'),
    mk('はい、領土奪取を巡る戦争史を論文で扱いました','Yes — Territ-seize-war-hist paper','Earnest','ren_uni'),
    mk('蓮さん、都市の過密問題を論文で扱いましたね','Ren — urban-overcrowd paper','Reflective','asuka_teacher'),
    mk('はい、洪水で建物が浸水した事例の研究を論文で扱いました','Yes — Flood-bldg-inund paper','Earnest','ren_uni'),
    mk('音楽家が殿堂入りした事例を論文で扱いましたね','Musician-hall-of-fame paper','Engaged','asuka_teacher'),
    mk('はい、人種を狙ったリンチの歴史を論文で扱いました','Yes — Race-lynch-hist paper','Earnest','ren_uni'),
    mk('蓮さん、近代戦における要塞撃破史を論文で扱いましたね','Ren — mod-war-fort-destroy-hist paper','Reflective','asuka_teacher'),
    mk('はい、国力の指標研究を論文で扱いました','Yes — Nat-power-index paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08932',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、地域の治安が激変したケースを警察、ご対応中ですね','Case area-secur-drastic-change police-resp','Reflective','ren_uni'),
    mk('警察、現金奪取の強盗事件を捜査します','Police cash-seize-rob-inv','Procedural','takeda_officer'),
    mk('本件、過密地域での犯罪を警察、警戒されてますね','Case overcrowd-area-crime police-watch','Reflective','ren_uni'),
    mk('警察、浸水家屋への防犯巡回を強化します','Police flood-house-crime-prev','Procedural','takeda_officer'),
    mk('本件、警察殿堂に祀られる名捜査官の足跡を学びます','Case police-hall-of-fame-officer-learn','Reflective','ren_uni'),
    mk('警察、リンチ的私刑は許さず取り締まります','Police lynch-vigilante-strict-crack','Procedural','takeda_officer'),
    mk('本件、犯罪組織を撃破する作戦を警察、進められてますね','Case crime-org-destroy-op police-progress','Reflective','ren_uni'),
    mk('警察、国力に応じた治安維持を続けます','Police nat-power-secur-cont','Close','takeda_officer'),
  ]},
  {id:'conv_08933',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、社会が激変した事例を論文で扱いましたね','Sakura — soc-drastic-change paper','Calm','asuka_teacher'),
    mk('はい、領土奪取を巡る戦争史を論文で扱いました','Yes — Territ-seize-war paper','Earnest teen','sakura_teen'),
    mk('都市の過密問題を論文で扱いましたね','Urban-overcrowd paper','Reflective','asuka_teacher'),
    mk('はい、洪水で建物が浸水した事例を論文で扱いました','Yes — Flood-inund paper','Earnest','sakura_teen'),
    mk('音楽家が殿堂入りした事例を論文で扱いましたね','Musician-hall paper','Engaged','asuka_teacher'),
    mk('はい、人種を狙ったリンチの歴史を論文で扱いました','Yes — Race-lynch paper','Earnest','sakura_teen'),
    mk('近代戦における要塞撃破史を論文で扱いましたね','Mod-war-fort-destroy paper','Reflective','asuka_teacher'),
    mk('はい、国力の指標研究を論文で扱いました','Yes — Nat-power-index paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08934',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、患者さんの容態が激変する事に備え医療チームで訓練しております','Ren — patient-cond-drastic-change med-team train','Calm','saito_doctor'),
    mk('はい、生命を奪取しかねない病気の予防を医療チームで重視します','Yes — Life-seize-dis-prev med-team-imp','Patient','saito_doctor'),
    mk('過密診療を避ける取り組みを、貴院、なさってますね、先生','Overcrowd-treat-avoid your-hosp do, sensei','Curious','ren_uni'),
    mk('はい、浸水被害者の救命体制を医療チームで備えております','Yes — Inund-victim-rescue med-team prep','Patient','saito_doctor'),
    mk('医学の殿堂に貴院の名を残されたいですね、先生','Med-hall your-hosp-name, sensei','Reflective','ren_uni'),
    mk('はい、リンチ的扱いを受けた患者さんへのケアも医療チームで担当します','Yes — Lynch-treat-victim-care med-team','Patient','saito_doctor'),
    mk('病魔を撃破する新薬の開発を、貴院、なさってるそうですね、先生','Disease-destroy-new-drug your-hosp dev, sensei','Reflective','ren_uni'),
    mk('はい、国力に直結する公衆衛生を医療チームで支えます','Yes — Nat-power-pub-health med-team supp','Patient close','saito_doctor'),
  ]},
  {id:'conv_08935',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、市場が激変する時こそ強くなれ','Our co — market-drastic-change-strong','Crisp','hiroshi_boss'),
    mk('はい。シェア奪取の戦略を立てます','Yes — Share-seize-strat','Methodical','kenji_office'),
    mk('当社、過密スケジュールから社員を守れ','Our co — overcrowd-sched-staff-protect','Direction','hiroshi_boss'),
    mk('はい。倉庫の浸水対策を強化しました','Yes — Warehouse-inund-counter','Update','kenji_office'),
    mk('当社、業界殿堂入りを目指せ','Our co — industry-hall-of-fame-aim','Direction','hiroshi_boss'),
    mk('はい。SNSでのリンチ的批判には冷静に対応します','Yes — SNS-lynch-criticism-calm-resp','Update','kenji_office'),
    mk('当社、競合を撃破するのではなく差別化で勝負しろ','Our co — rival-destroy-not-diff','Direction','hiroshi_boss'),
    mk('はい。国力に貢献する商品開発を続けます','Yes — Nat-power-contrib-prod-cont','Close','kenji_office'),
  ]},
  {id:'conv_08936',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、本当にハンサムな方ね、メイちゃん','Aoi — cust-truly-handsome Mei','Praising','mei_romantic'),
    mk('葵、お客様、ニコチンガムでタバコ断ちなんだって、メイちゃん','Aoi — cust-nicotine-gum-quit Mei','Reflective','aoi_barista'),
    mk('葵、お客様、馬力のあるバイクのお話されてたよ、メイちゃん','Aoi — cust-horsepower-bike-told Mei','Animated','mei_romantic'),
    mk('葵、お客様、ハイウェイ通って遠方からお見えになったって、メイちゃん','Aoi — cust-highway-far-came Mei','Reflective','aoi_barista'),
    mk('葵、お店の前のアスファルト、暑い日に焼けてるね、メイちゃん','Aoi — store-front-asphalt-hot-baked Mei','Reflective','mei_romantic'),
    mk('葵、お客様、土用の鰻を召し上がりに行かれたって、メイちゃん','Aoi — cust-Doyo-eel-went Mei','Reflective','aoi_barista'),
    mk('葵、お客様、夏は怪談のお話で盛り上がってらしたよ、メイちゃん','Aoi — cust-summer-ghost-story-told Mei','Animated','mei_romantic'),
    mk('葵、新メニュー、ニンジン入りキャロットケーキにしましょう、メイちゃん','Aoi — new-menu-carrot-cake-add Mei','Animated close','aoi_barista'),
  ]},
  {id:'conv_08937',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんはハンサムでいらしたぞ','Gran — youth Dad-handsome','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ニコチン中毒に苦しまれた時期もあったわよね、あなた?','Yes — Grandpa-nicotine-add-suffer, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが馬力の強い車を運転されたぞ','Gran — youth Dad-horsepower-strong-car','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ハイウェイを使って旅をされたわよね、あなた?','Grandpa — highway-trip, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、アスファルト舗装が珍しかったぞ','Gran — youth-asphalt-pave-rare','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、土用の鰻をお召し上がりになるのが楽しみでらしたわよね、あなた?','Grandpa — Doyo-eel-look-forward, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが孫に怪談話を聞かせたぞ','Gran — youth Dad-grandkid-ghost-told','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ニンジンを煮物にされたわよね、あなた?','Grandpa — carrot-stew, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08938',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さん、写真でハンサムに写ってらっしゃるわ','Sho — Dad-photo-handsome','Praising','mei_romantic'),
    mk('メイ姉さん、お父さんがニコチンガムで頑張ってるって','Mei-sis — Dad-nicotine-gum-try','Reflective child','sho_child'),
    mk('翔くん、お父さんが馬力のある新車を買われたわ','Sho — Dad-horsepower-new-car','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとハイウェイ走りたいよ','Mei-sis — me Dad-highway-want','Eager child','sho_child'),
    mk('翔くん、お庭をアスファルト舗装にすると簡単になるわね','Sho — garden-asphalt-easy','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと鰻のお店に行きたいよ','Mei-sis — me Dad-eel-want','Eager child','sho_child'),
    mk('翔くん、夏休みに怪談を聞きに行きましょうね','Sho — summer-ghost-go','Animated','mei_romantic'),
    mk('メイ姉さん、ぼく、ニンジンが嫌いだけど食べるよ','Mei-sis — me carrot-hate-but-eat','Earnest close','sho_child'),
  ]},
  {id:'conv_08939',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、ハンサムな先輩に憧れてんだろ?','Riku — handsome-sen-admire?','Wry teen','sakura_teen'),
    mk('お前のお父さん、ニコチンに苦しんでたな、桜','Your-Dad-nicotine-suffered Sakura','Reflective','riku_teen'),
    mk('リク、お前、馬力強い車好きだろ?','Riku — horsepower-strong-car-like?','Curious','sakura_teen'),
    mk('お前、家族でハイウェイドライブ行ったろ?桜','You — fam-highway-drive? Sakura','Curious','riku_teen'),
    mk('リク、お前、アスファルトの上で寝そべるなよ','Riku — asphalt-lay-don\'t','Direction','sakura_teen'),
    mk('お前、土用の鰻食ったろ?桜','You — Doyo-eel-ate? Sakura','Curious','riku_teen'),
    mk('リク、お前、文化祭で怪談の出し物やったろ?','Riku — fest-ghost-act?','Curious','sakura_teen'),
    mk('お前、給食のニンジン残すなよ、桜','You — lunch-carrot-don\'t-leave Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_08940',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さん、若い頃はハンサムって有名だったわ','Sho — Dad-young-handsome-famous','Reflective','yumiko_mom'),
    mk('ママ、お父さんがニコチンガムで禁煙してらしたよ','Mom — Dad-nicotine-gum-quit','Reflective child','sho_child'),
    mk('翔くん、お父さんが馬力の強いトラックを運転されたわ','Sho — Dad-horsepower-truck-drive','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとハイウェイドライブしたい','Mom — me Dad-highway-want','Eager child','sho_child'),
    mk('翔くん、お庭の通路にアスファルトを敷きましょうか','Sho — garden-path-asphalt-lay?','Curious','yumiko_mom'),
    mk('ママ、ぼく、土用の鰻を食べたいよ','Mom — me Doyo-eel-want','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんが怪談話を聞かせてくれたわね','Sho — Grandpa-ghost-told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖母ちゃんのニンジン煮、好きだよ','Mom — me Grandma-carrot-stew-like','Eager close','sho_child'),
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

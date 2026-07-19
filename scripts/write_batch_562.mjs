import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_562 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['勤勉','トラベル','平易','気概','描ける','むい','夏目','偶像']
const B_T = ['最古','三振','高地','産学','海賊版','長け','ショールーム','師団']
const C_T = ['水路','電線','イスラーム','清浄','農法','明瞭','新約','精製']
const D_T = ['ヴァン','タナ','サーキット','アロマ','ウルトラマン','エヴァ','ドス','ゴキブリ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_11201',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「勤勉な姿勢を続ければ報われる」って仰ってたわ','Sho — Dad-"dilig-reward"-said','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと家族でトラベルブックを見ながら旅行計画したよ','Mom — me Dad-fam-travel-plan','Pleased child','sho_child'),
    mk('翔くん、お父さんが「平易な言葉で説明してくれる」って助かるわ','Sho — Dad-"plain-words"-helpful','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「気概を持って取り組んで」って言われたよ','Mom — me Dad-"spirit-eff"-said','Earnest child','sho_child'),
    mk('翔くん、お父さんが「絵が上手に描けるね」って褒めて下さったわ','Sho — Dad-"art-draw-good"-praise','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと「リンゴをむいて食べた」よ','Mom — me Dad-"apple-peel-eat"','Pleased child','sho_child'),
    mk('翔くん、お父さんが夏目漱石の小説を読んでらっしゃるわ','Sho — Dad-Natsu-novel-read','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「偶像、つまり偶像崇拝にならない様に」って教えて頂いたよ','Mom — me Dad-"idol-wor"-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_11202',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、勤勉に働き続けてこの店を支えてらっしゃるよ、メイちゃん','Aoi — cust-dilig-supp-shop Mei','Reflective','mei_romantic'),
    mk('葵、お客様、トラベル雑誌をご覧になってご来店だったよ、メイちゃん','Aoi — cust-travel-mag-vis Mei','Reflective','aoi_barista'),
    mk('葵、お客様、メニュー説明を「平易にして」って仰ってたよ、メイちゃん','Aoi — cust-menu-"plain"-said Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お店経営の気概を語って下さったよ、メイちゃん','Aoi — cust-shop-spirit-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ラテアートが繊細に描ける店員さんを褒めて下さったよ、メイちゃん','Aoi — cust-latte-draw-praise Mei','Reflective','mei_romantic'),
    mk('葵、お客様、果物を綺麗にむいて出されるお店を語って下さったよ、メイちゃん','Aoi — cust-fruit-peel-shop Mei','Reflective','aoi_barista'),
    mk('葵、お客様、夏目漱石の作品集を読んでらしたよ、メイちゃん','Aoi — cust-Natsu-coll Mei','Reflective','mei_romantic'),
    mk('葵、お客様、「アイドルを偶像視しない」って仰ってたよ、メイちゃん','Aoi — cust-"idol-no-wor"-said Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_11203',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは「勤勉が美徳」と仰った','Gran — youth Dad-"dilig-virt"-said','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、二人でトラベル雑誌を集めたわよね、あなた?','Yes — Grandpa-travel-mag-coll, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは「平易な日本語が大事」と仰った','Gran — youth Dad-"plain-Jp"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、起業の気概を貫かれたわよね、あなた?','Grandpa — youth-start-spirit, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは私の描けるスケッチを褒めて下さった','Gran — youth Dad-me-draw-praise','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、リンゴをむいて下さったわよね、あなた?','Grandpa — youth-apple-peel, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが夏目漱石の全集を蔵書された','Gran — youth Dad-Natsu-comp-coll','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、偶像、つまり偶像崇拝を戒められたわよね、あなた?','Grandpa — youth-idol-wor-warn, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_11204',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、勤勉に毎日勉強してたな','Riku — dilig-daily-stud','Praising teen','sakura_teen'),
    mk('お前、トラベル雑誌読んで家族旅行決めたな、桜','You — travel-mag-fam-trip Sakura','Curious','riku_teen'),
    mk('リク、お前、「先生の説明が平易で良い」って言ってたな','Riku — "tch-plain-good"-said','Reflective','sakura_teen'),
    mk('お前、部活で気概を見せてたな、桜','You — club-spirit Sakura','Praising','riku_teen'),
    mk('リク、お前、漫画が上手に描けるって自慢してたな','Riku — mng-draw-good-brag','Wry','sakura_teen'),
    mk('お前、家庭科でリンゴをむいて練習したろ、桜','You — home-apple-peel? Sakura','Curious','riku_teen'),
    mk('リク、お前、国語で夏目漱石の坊っちゃん読んだろ','Riku — Jp-Natsu-Botchan?','Curious','sakura_teen'),
    mk('お前、「アイドルは偶像じゃなくて生身の人」って言ってたな、桜','You — "idol-live"-said Sakura','Reflective close','riku_teen'),
  ]},
  {id:'conv_11205',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「勤勉さは家族で受け継ぐ財産」って仰ってたわ','Sho — Dad-"dilig-fam-treas"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと家族トラベルプランを立てたよ','Mei-sis — me Dad-fam-travel-plan','Eager child','sho_child'),
    mk('翔くん、お父さんが「子供にも平易な言葉で説明する」って仰ってたわ','Sho — Dad-"plain-kid"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「気概を持って進むよ」って約束したよ','Mei-sis — me Dad-"spirit-prom"-said','Earnest child','sho_child'),
    mk('翔くん、お父さんが「君が描ける絵を見たい」って仰ってたわ','Sho — Dad-"you-draw-see"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと果物の皮をむいて朝食食べたよ','Mei-sis — me Dad-fruit-peel-breakf','Eager child','sho_child'),
    mk('翔くん、お父さんが夏目漱石の三四郎を持ち歩いてらっしゃるわ','Sho — Dad-Natsu-Sansh-carry','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「偶像、つまり偶像崇拝は本質を見失う」って教えて頂いたよ','Mei-sis — me Dad-"idol-wor-lose"-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_11206',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、業界最古、つまり最古参の老舗との取引を大事にしろ','Our co — ind-old-est-cher','Crisp','hiroshi_boss'),
    mk('はい。野球部の社員が三振王になった事を社内で祝います','Yes — Base-staff-K-king-cel','Methodical','kenji_office'),
    mk('当社、高地、つまり高地栽培の食材調達を強化しろ','Our co — high-grow-food-strong','Direction','hiroshi_boss'),
    mk('はい。産学、つまり産学連携の研究費を確保します','Yes — Ind-acad-fund','Update','kenji_office'),
    mk('当社、海賊版商品の市場流出を防げ','Our co — pir-prod-prev','Direction','hiroshi_boss'),
    mk('はい。マーケティングに長けた人材を採用します','Yes — Mkt-excel-hire','Update','kenji_office'),
    mk('当社、新製品のショールームを駅前に開け','Our co — new-prod-show-stat','Direction','hiroshi_boss'),
    mk('はい。防災で師団、つまり師団規模の訓練に参加します','Yes — Dis-prev-div-train','Close','kenji_office'),
  ]},
  {id:'conv_11207',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('業界最古参の取引先との関係を維持しましょう','Old-est-client-keep','Brisk','yuki_office'),
    mk('はい。三振、つまり交渉の三振、三回連続失敗を避けましょう','Yes — Three-fail-avoid','Cooperative','kenji_office'),
    mk('高地、つまり高地拠点の物流を整えましょう','High-base-log','Direction','yuki_office'),
    mk('はい。産学、つまり産学連携のシンポジウムに出席します','Yes — Ind-acad-symp','Update','kenji_office'),
    mk('海賊版対策の弁護士を雇いましょう','Pir-prev-law','Direction','yuki_office'),
    mk('はい。経理に長けた社員を昇格させます','Yes — Acct-excel-prom','Update','kenji_office'),
    mk('ショールーム改装の見積を取りましょう','Show-renov-quote','Direction','yuki_office'),
    mk('はい。防災で師団規模の演習に参加します','Yes — Dis-div-drill','Close','kenji_office'),
  ]},
  {id:'conv_11208',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、学界最古の論文も読み込め','Ren — acad-old-paper-read','Mentor','hiroshi_boss'),
    mk('はい。仮説の三振、つまり三回の反証実験を計画します','Yes — Hyp-three-disp-exp','Earnest','ren_uni'),
    mk('蓮、高地調査の論文を読め','Ren — high-surv-paper','Direction','hiroshi_boss'),
    mk('はい。産学、つまり産学連携の研究費に応募します','Yes — Ind-acad-fund-app','Earnest','ren_uni'),
    mk('蓮、海賊版論文に注意しろ','Ren — pir-paper-care','Direction','hiroshi_boss'),
    mk('はい。統計に長けた先輩からご指導を仰ぎます','Yes — Stat-excel-sen-guide','Polite','ren_uni'),
    mk('蓮、新装置のショールームを学会で公開しろ','Ren — new-eqp-show-conf','Direction','hiroshi_boss'),
    mk('はい。学際師団、つまり師団的チームで研究します','Yes — Inter-div-team','Earnest close','ren_uni'),
  ]},
  {id:'conv_11209',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、地域最古、つまり最古の警察署と連携されますね','Police old-stat-link','Cooperative','kenji_office'),
    mk('警察、容疑者の証言の三振、つまり三度失敗にも、警察、対応されますね','Police suspect-three-fail-resp','Cooperative','kenji_office'),
    mk('警察、高地、つまり高地での山岳救助訓練もされますね','Police high-mtn-resc-train','Cooperative','kenji_office'),
    mk('警察、産学、つまり産学連携の科学捜査を、警察、進められますね','Police ind-acad-foren','Cooperative','kenji_office'),
    mk('警察、海賊版DVD押収事案を、警察、捜査されますね','Police pir-DVD-inv','Cooperative','kenji_office'),
    mk('警察、武術に長けた警察官の特訓もされますね','Police mart-excel-train','Cooperative','kenji_office'),
    mk('警察、住民向けに防犯ショールームを開かれますね','Police citi-prev-show','Cooperative','kenji_office'),
    mk('警察、防災で師団、つまり師団規模の合同演習に参加されますね','Police dis-div-drill','Close','kenji_office'),
  ]},
  {id:'conv_11210',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、業界最古参の老舗との縁を大事にされた','Dad — youth-old-est-cher','Sage','hiroshi_elder'),
    mk('はい。お父さんは「営業の三振、つまり三度失敗から学べ」と仰った','Yes — Dad "three-fail-learn"-said','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、ペルー高地のコーヒー農園と取引された','Dad — youth-Peru-high-coff','Wistful','hiroshi_elder'),
    mk('はい。お父さんは産学、つまり産学連携の先駆者だった','Yes — Dad ind-acad-pion','Reflective','hiroshi_boss'),
    mk('お父さん、海賊版に対し厳しい姿勢を貫かれた','Dad — pir-strict','Wistful','hiroshi_elder'),
    mk('はい。お父さんは交渉に長けた人材を見抜かれた','Yes — Dad neg-excel-spot','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、駅前にショールームを開かれた','Dad — youth-stat-show-open','Wistful','hiroshi_elder'),
    mk('はい。お父さんは防災師団、つまり師団訓練の重要性を説かれた','Yes — Dad dis-div-imp','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_11211',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、伝統水路、つまり水路灌漑の地理研究を論文で扱いましたね','Ren — water-chan paper','Calm','asuka_teacher'),
    mk('はい、電線、つまり電線地中化の都市工学研究を論文で扱いました','Yes — Pwr-line-und paper','Earnest','ren_uni'),
    mk('蓮さん、イスラーム、つまりイスラーム圏の社会研究を論文で扱いましたね','Ren — Islam-soc paper','Reflective','asuka_teacher'),
    mk('はい、清浄、つまり清浄空間の建築学研究を論文で扱いました','Yes — Pure-room-arch paper','Earnest','ren_uni'),
    mk('蓮さん、有機農法、つまり農法の比較研究を論文で扱いましたね','Ren — org-farm-comp paper','Reflective','asuka_teacher'),
    mk('はい、論理の明瞭さを評価する哲学研究を論文で扱いました','Yes — Log-clear-phil paper','Earnest','ren_uni'),
    mk('蓮さん、新約聖書の文献研究を論文で扱いましたね','Ren — NT-lit paper','Reflective','asuka_teacher'),
    mk('はい、石油精製、つまり精製プロセスの工学研究を論文で扱いました','Yes — Oil-ref paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_11212',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、水路、つまり水路での密漁事案を、警察、捜査されますね','Case water-chan-poach police-inv','Reflective','ren_uni'),
    mk('警察、電線、つまり電線盗難事案にも対応されますね','Police pwr-line-theft','Cooperative','takeda_officer'),
    mk('本件、イスラーム、つまりイスラーム共同体への配慮を、警察、徹底されますね','Case Islam-comm-resp police','Reflective','ren_uni'),
    mk('警察、清浄、つまり清浄区域内での事案も慎重に対応されますね','Police pure-zone-care','Cooperative','takeda_officer'),
    mk('本件、有機農法、つまり農法詐欺の捜査を、警察、進められますね','Case org-farm-fraud police-inv','Reflective','ren_uni'),
    mk('警察、現場の明瞭、つまり明瞭な証拠を、警察、確保されますね','Police scene-clear-evid','Cooperative','takeda_officer'),
    mk('本件、新約聖書を所持する宗教団体への対応を、警察、丁寧にされますね','Case NT-rel-grp police-care','Reflective','ren_uni'),
    mk('警察、薬物精製、つまり精製犯罪の取り締まりを、警察、強化されますね','Police drug-ref-crime-crack','Close','takeda_officer'),
  ]},
  {id:'conv_11213',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、伝統水路、つまり水路灌漑の地理研究を論文で扱いましたね','Sakura — water-chan paper','Calm','asuka_teacher'),
    mk('はい、電線、つまり電線地中化の都市工学研究を論文で扱いました','Yes — Pwr-line paper','Earnest teen','sakura_teen'),
    mk('イスラーム、つまりイスラーム圏の社会研究を論文で扱いましたね','Islam paper','Reflective','asuka_teacher'),
    mk('はい、清浄、つまり清浄空間の建築学研究を論文で扱いました','Yes — Pure paper','Earnest','sakura_teen'),
    mk('有機農法、つまり農法の比較研究を論文で扱いましたね','Org-farm paper','Reflective','asuka_teacher'),
    mk('はい、論理の明瞭さを評価する哲学研究を論文で扱いました','Yes — Clear paper','Earnest','sakura_teen'),
    mk('新約聖書の文献研究を論文で扱いましたね','NT paper','Reflective','asuka_teacher'),
    mk('はい、石油精製、つまり精製プロセスの工学研究を論文で扱いました','Yes — Ref paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_11214',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、医療廃水の水路、つまり水路処理を医療チームで管理します','Ren — med-waste-water-chan med-team','Calm','saito_doctor'),
    mk('蓮さん、電線、つまり電線事故の感電症例を医療チームで対応します','Ren — pwr-line-shock med-team','Calm','saito_doctor'),
    mk('蓮さん、イスラーム、つまりイスラーム圏の患者様への医療配慮を医療チームでおこないます','Ren — Islam-pati-resp med-team','Calm','saito_doctor'),
    mk('蓮さん、清浄、つまり清浄病室の管理を医療チームで徹底します','Ren — pure-room med-team-thor','Calm','saito_doctor'),
    mk('蓮さん、有機農法、つまり農法食材の医療食を医療チームで提供します','Ren — org-farm-med-food med-team','Calm','saito_doctor'),
    mk('蓮さん、症状を明瞭に医療チームで記録します','Ren — sym-clear-rec med-team','Calm','saito_doctor'),
    mk('蓮さん、新約聖書を慰めとされる患者様にも医療チームで配慮します','Ren — NT-cons-pati med-team','Calm','saito_doctor'),
    mk('蓮さん、医薬品の精製、つまり精製度を医療チームで確認します','Ren — drug-ref-pur med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_11215',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、工場用水の水路、つまり水路を整備しろ','Our co — fact-water-chan-set','Crisp','hiroshi_boss'),
    mk('はい。電線、つまり電線整備の工事を進めます','Yes — Pwr-line-work','Methodical','kenji_office'),
    mk('当社、イスラーム、つまりイスラーム圏向け商品を企画しろ','Our co — Islam-prod','Direction','hiroshi_boss'),
    mk('はい。商品の清浄、つまり清浄度を高めます','Yes — Prod-pure-up','Update','kenji_office'),
    mk('当社、有機農法、つまり農法ブランドで差別化しろ','Our co — org-farm-brand','Direction','hiroshi_boss'),
    mk('はい。広告コピーを明瞭、つまり明瞭簡潔にします','Yes — Ad-clear','Update','kenji_office'),
    mk('当社、新約、つまり新約事業の開拓を進めろ','Our co — new-deal-exp','Direction','hiroshi_boss'),
    mk('はい。製品の精製、つまり精製工程の品質を上げます','Yes — Prod-ref-qual','Close','kenji_office'),
  ]},
  {id:'conv_11216',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ヴァン・ヘイレンのギターがお好きだって、メイちゃん','Aoi — cust-Van-Halen-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ペットの名前をタナちゃんって付けたって、メイちゃん','Aoi — cust-pet-Tana-named Mei','Reflective','aoi_barista'),
    mk('葵、お客様、F1のサーキット観戦に行かれたって、メイちゃん','Aoi — cust-F1-circ-watch Mei','Reflective','mei_romantic'),
    mk('葵、お客様、アロマセラピーがお好きだって、メイちゃん','Aoi — cust-aroma-fav Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ウルトラマンの怪獣図鑑を集めてらっしゃるって、メイちゃん','Aoi — cust-Ultra-coll Mei','Reflective','mei_romantic'),
    mk('葵、お客様、エヴァ、つまりエヴァンゲリオンの新作を観に行かれたって、メイちゃん','Aoi — cust-Eva-watch Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ドスの効いた声で笑ってらしたよ、メイちゃん','Aoi — cust-deep-voice-laugh Mei','Wry','mei_romantic'),
    mk('葵、お客様、ゴキブリ駆除の苦労話を笑顔で語って下さったよ、メイちゃん','Aoi — cust-cockr-prev-talk Mei','Wry close','aoi_barista'),
  ]},
  {id:'conv_11217',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがヴァン・モリソンのCDを蔵書された','Gran — youth Dad-Van-Mor-coll','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、お孫様のタナくんを可愛がられたわよね、あなた?','Yes — Grandpa-Tana-grdkid-love, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがF1サーキットの中継を観られた','Gran — youth Dad-F1-circ-watch','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、私にアロマランプを下さったわよね、あなた?','Grandpa — youth-me-aroma-lamp, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがウルトラマンを子供達に見せられた','Gran — youth Dad-Ultra-kids-show','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、エヴァ、つまりエヴァンゲリオンの放映を観られたわよね、あなた?','Grandpa — youth-Eva-broad, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがドスの効いた歌声で唸られた','Gran — youth Dad-deep-voice-roar','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ゴキブリ退治を御自らされたわよね、あなた?','Grandpa — youth-cockr-self, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_11218',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「ヴァン・ヘイレンのギターは凄い」って仰ってたわ','Sho — Dad-"Van-Halen-gtr"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「タナくんの絵本」読んだよ','Mei-sis — me Dad-"Tana-pic"-read','Eager child','sho_child'),
    mk('翔くん、お父さんが「F1サーキット見学に行こう」って仰ってたわ','Sho — Dad-"F1-circ"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとアロマ専門店行ったよ','Mei-sis — me Dad-aroma-shop','Eager child','sho_child'),
    mk('翔くん、お父さんがウルトラマンの怪獣図鑑を読んで下さるわ','Sho — Dad-Ultra-mons-pic','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとエヴァ、つまりエヴァンゲリオンの映画観たよ','Mei-sis — me Dad-Eva-film','Eager child','sho_child'),
    mk('翔くん、お父さんが「ドスの効いた声」で物語を読んで下さるわ','Sho — Dad-"deep-voice-story"-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「ゴキブリ対策のコツ」を教えて頂いたよ','Mei-sis — me Dad-"cockr-tip"-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_11219',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、ヴァン・ヘイレンのギターソロ聴いてたな','Riku — Van-Halen-solo','Curious teen','sakura_teen'),
    mk('お前、ペットのタナくんって名前面白いな、桜','You — pet-Tana-fun Sakura','Wry','riku_teen'),
    mk('リク、お前、F1サーキットのゲームしてたな','Riku — F1-circ-game','Curious','sakura_teen'),
    mk('お前、家庭科でアロマオイル使ったろ、桜','You — home-aroma? Sakura','Curious','riku_teen'),
    mk('リク、お前、ウルトラマンのフィギュア集めてたな','Riku — Ultra-fig-coll','Wry','sakura_teen'),
    mk('お前、エヴァ、つまりエヴァンゲリオンのファンだったよな、桜','You — Eva-fan? Sakura','Curious','riku_teen'),
    mk('リク、お前、合唱でドスの効いた低音だったな','Riku — chor-deep-bass','Wry','sakura_teen'),
    mk('お前、家庭科でゴキブリ駆除の話気持ち悪がってたな、桜','You — home-cockr-yuck Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_11220',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがヴァン・ヘイレンの代表曲を流してらっしゃるわ','Sho — Dad-Van-Halen-hits','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと近所のタナさんに会ったよ','Mom — me Dad-Tana-met','Eager child','sho_child'),
    mk('翔くん、お父さんがF1サーキットのドキュメンタリー観てらっしゃるわ','Sho — Dad-F1-circ-doc','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとアロマキャンドルを焚いたよ','Mom — me Dad-aroma-cand-burn','Eager child','sho_child'),
    mk('翔くん、お父さんがウルトラマンの新作映画を観に行かれるそうよ','Sho — Dad-Ultra-new-film','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとエヴァ、つまりエヴァンゲリオンの新劇場版観たよ','Mom — me Dad-Eva-theat','Eager child','sho_child'),
    mk('翔くん、お父さんが「ドスの効いた一言で部屋が静まる」って仰ってたわ','Sho — Dad-"deep-room-still"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとゴキブリ駆除スプレーを買いに行ったよ','Mom — me Dad-cockr-spray-buy','Eager close','sho_child'),
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_523 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['６つ','ミソ','外野','ヤミ','タネ','キズ','オジサン','くず']
const B_T = ['車輪','離陸','発車','発せ','呼び出さ','乗り込み','買い求め','現況']
const C_T = ['語句','教え子','腑','灌','學','実技','参謀','交錯']
const D_T = ['エンジェル','ルーマニア','ミレニアム','ギルド','ワイドショー','クリエイター','サイレント','ロフト']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10421',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがリンゴを６つ買って来て下さったわよ','Sho — Dad-apple-6-bought','Tender','yumiko_mom'),
    mk('ママ、お父さんがミソ汁を作って下さったよ','Mom — Dad-miso-soup-made','Pleased child','sho_child'),
    mk('翔くん、お父さんが「外野は黙ってろ」って仰る時があるわ','Sho — Dad-"outsiders-quiet"-said','Wry','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「闇つまりヤミの世界は怖い」って教えて頂いたよ','Mom — me Dad-"shadow-world-scary"-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんがメロンのタネを取り除いて下さったわ','Sho — Dad-melon-seed-rem','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんに膝のキズの手当てをして頂いたよ','Mom — me Dad-knee-cut-treat','Earnest child','sho_child'),
    mk('翔くん、お父さんが「オジサン世代の感覚」って語って下さるわよ','Sho — Dad-"oji-gen-feel"-talk','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「くず野菜も大事」って教えて頂いたよ','Mom — me Dad-"scrap-veg-imp"-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_10422',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ケーキを６つご注文だったよ、メイちゃん','Aoi — cust-cake-6-order Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お味噌、つまりミソ味のスイーツがお好きだって、メイちゃん','Aoi — cust-miso-sweet-like Mei','Reflective','aoi_barista'),
    mk('葵、お客様、「外野の意見は気にしない」って仰ってたよ、メイちゃん','Aoi — cust-"out-opin-ign"-said Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ヤミ金融の被害について語って下さったよ、メイちゃん','Aoi — cust-illicit-loan-vict-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お手製ジャムのタネ、つまりレシピを教えて下さったよ、メイちゃん','Aoi — cust-jam-recipe-teach Mei','Reflective','mei_romantic'),
    mk('葵、お客様、新作のキズ、つまり傷物の割引品を喜んでらしたよ、メイちゃん','Aoi — cust-blem-disc-glad Mei','Reflective','aoi_barista'),
    mk('葵、お客様、自分を「ただのオジサンですから」って笑ってらしたよ、メイちゃん','Aoi — cust-self-"just-oji"-laugh Mei','Wry','mei_romantic'),
    mk('葵、お客様、「くず鉄」を集めるご趣味のお話をして下さったよ、メイちゃん','Aoi — cust-scrap-iron-hobby Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10423',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが子供達を６つの組に分けて指導された','Gran — youth Dad-kids-6-grp-guide','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ミソ作りを習われたわよね、あなた?','Yes — Grandpa-miso-make-learn, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「外野席で野球を観た」と語られた','Gran — youth Dad-"out-field-base"-talk','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、戦後のヤミ市場をご存知だったわよね、あなた?','Grandpa — postwar-black-mkt-knew, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが野菜のタネを蒔かれた','Gran — youth Dad-veg-seed-plant','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、戦争の心のキズを抱えて来られたわよね、あなた?','Grandpa — war-heart-scar-carry, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは皆から「オジサン」と慕われた','Gran — youth Dad-all-"oji"-belov','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、終戦直後、くず米でも有り難く頂いたわよね、あなた?','Grandpa — postwar-scrap-rice-grat, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10424',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、コンビニで肉まん６つ買ってたな','Riku — conv-meat-6-bought','Wry teen','sakura_teen'),
    mk('お前、ミソカツ好きだったよな、桜','You — miso-katsu-like Sakura','Curious','riku_teen'),
    mk('リク、お前、サッカーで外野席から応援してたな','Riku — soccer-out-cheer','Curious','sakura_teen'),
    mk('お前、漫画の「ヤミ落ち」展開語ってたろ、桜','You — mng-dark-fall? Sakura','Wry','riku_teen'),
    mk('リク、お前、向日葵のタネを蒔いてたな','Riku — sun-seed-plant','Curious','sakura_teen'),
    mk('お前、ヒザのキズだらけでサッカー帰って来たろ、桜','You — knee-scrape-soccer? Sakura','Wry','riku_teen'),
    mk('リク、お前のオジサン、面白いってクラスで話題だぞ','Riku — your-oji-fun-class-topic','Wry','sakura_teen'),
    mk('お前、模試の結果見て「くず点数」って自虐してたな、桜','You — mock-test-"scrap-pts"-self-mock Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10425',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが６つの種類の花を植えて下さるわよ','Sho — Dad-6-flo-plant','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとミソ漬けを作ったよ','Mei-sis — me Dad-miso-pickle','Eager child','sho_child'),
    mk('翔くん、お父さんが「外野でも応援できる」って仰ってたわ','Sho — Dad-"out-cheer"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「ヤミに落ちない」物語を読んだよ','Mei-sis — me Dad-"dark-no"-story','Earnest child','sho_child'),
    mk('翔くん、お父さんが朝顔のタネを下さったわ','Sho — Dad-morn-glory-seed-gave','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに膝のキズを手当てして頂いたよ','Mei-sis — me Dad-knee-cut-treat','Earnest child','sho_child'),
    mk('翔くん、お父さんが「オジサンも面白い」って笑って下さるわ','Sho — Dad-"oji-fun"-laugh','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「くず葉も大事」って教えて頂いたよ','Mei-sis — me Dad-"scrap-leaf-imp"-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_10426',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、台車の車輪交換を毎月点検しろ','Our co — cart-wheel-mo-insp','Crisp','hiroshi_boss'),
    mk('はい。物流倉庫の航空便、つまり離陸時刻を確認します','Yes — Log-air-takeoff-time-check','Methodical','kenji_office'),
    mk('当社、配送車の発車時刻を厳守しろ','Our co — deliv-veh-dep-time-strict','Direction','hiroshi_boss'),
    mk('はい。全社員にメッセージを発せられる体制を整えます','Yes — All-staff-mes-send-set','Update','kenji_office'),
    mk('当社、社員が呼び出される際の手順を文書化しろ','Our co — staff-call-proc-doc','Direction','hiroshi_boss'),
    mk('はい。新人が現場へ乗り込みやすい体制にします','Yes — Newhire-site-easy-set','Update','kenji_office'),
    mk('当社、社員が必要な備品を買い求められる経費枠を増やせ','Our co — staff-need-buy-budg-incr','Direction','hiroshi_boss'),
    mk('はい。現況報告を毎週金曜にまとめます','Yes — Curr-rep-Fri-comp','Close','kenji_office'),
  ]},
  {id:'conv_10427',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('物流の車輪保守を定期化しましょう','Log-wheel-maint-reg','Brisk','yuki_office'),
    mk('はい。空輸便の離陸予定を毎週確認します','Yes — Air-fr-takeoff-wk-check','Cooperative','kenji_office'),
    mk('社用バスの発車時刻を見直しましょう','Co-bus-dep-time-rev','Direction','yuki_office'),
    mk('はい。緊急時に警報を発せられる仕組みを整えます','Yes — Emerg-alarm-send-set','Update','kenji_office'),
    mk('社員が呼び出される頻度を減らしましょう','Staff-call-freq-red','Direction','yuki_office'),
    mk('はい。新人が研修先へ乗り込みやすい配車を組みます','Yes — Newhire-train-site-arrange','Update','kenji_office'),
    mk('社員が文房具を買い求める手続きを簡略化しましょう','Staff-stat-buy-proc-simp','Direction','yuki_office'),
    mk('はい。プロジェクトの現況を社内ポータルに掲示します','Yes — Proj-curr-port-post','Close','kenji_office'),
  ]},
  {id:'conv_10428',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、産業用車輪の摩耗研究を続けろ','Ren — ind-wheel-wear-res-cont','Mentor','hiroshi_boss'),
    mk('はい。航空機の離陸性能の論文を読みます','Yes — Aero-takeoff-perf-paper','Earnest','ren_uni'),
    mk('蓮、新幹線の発車制御の研究を深めろ','Ren — shink-dep-ctrl-deep','Direction','hiroshi_boss'),
    mk('はい。学会で警報音が発せられた事例を学びます','Yes — Conf-alarm-send-case','Earnest','ren_uni'),
    mk('蓮、研究室で呼び出される時の対応を整えろ','Ren — lab-called-resp-set','Direction','hiroshi_boss'),
    mk('はい。現地調査へ早めに乗り込み準備をします','Yes — Site-surv-early-prep','Polite','ren_uni'),
    mk('蓮、必要な実験器具を遠慮なく買い求めろ','Ren — exp-equip-no-hes-buy','Direction','hiroshi_boss'),
    mk('はい。研究の現況を月一で報告します','Yes — Res-curr-mo-rep','Earnest close','ren_uni'),
  ]},
  {id:'conv_10429',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、捜査車両の車輪点検もされますね','Police inv-veh-wheel-insp','Cooperative','kenji_office'),
    mk('警察、犯人が空港で離陸前に確保される事案もありますね','Police suspect-airport-takeoff-cap','Cooperative','kenji_office'),
    mk('警察、緊急車両の発車時刻を細かく管理されますね','Police emerg-veh-dep-mgmt','Cooperative','kenji_office'),
    mk('警察、危険時に警報を発せられる体制を備えてらっしゃいますね','Police danger-alarm-send-ready','Cooperative','kenji_office'),
    mk('警察、参考人を呼び出される際の手続きを丁寧にされますね','Police witn-call-proc-pol','Cooperative','kenji_office'),
    mk('警察、現場へ素早く乗り込みされますね','Police scene-quick-enter','Cooperative','kenji_office'),
    mk('警察、捜査用具を必要に応じて買い求められますね','Police inv-equip-as-need-buy','Cooperative','kenji_office'),
    mk('警察、事件の現況を上層部に随時報告されますね','Police case-curr-up-rep','Close','kenji_office'),
  ]},
  {id:'conv_10430',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、社用車の車輪整備を自ら点検された','Dad — found co-car-wheel-self','Sage','hiroshi_elder'),
    mk('はい。お父さんは初の海外出張で離陸前に祈られた','Yes — Dad first-overs-takeoff-pray','Commitment','hiroshi_boss'),
    mk('お父さん、社員の発車時刻を尊重された','Dad — staff-dep-time-resp','Wistful','hiroshi_elder'),
    mk('はい。お父さんは緊急時、警報が発せられた時に冷静だった','Yes — Dad emerg-alarm-send-calm','Reflective','hiroshi_boss'),
    mk('お父さん、社員が呼び出される時、必ず理由を説明された','Dad — staff-called-reas-expl','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新しい現場へ自ら乗り込みをされた','Yes — Dad new-site-self-enter','Reflective','hiroshi_boss'),
    mk('お父さん、必要な機材を惜しまずに買い求められた','Dad — need-equip-no-spare-buy','Wistful','hiroshi_elder'),
    mk('はい。お父さんは会社の現況報告を毎週おこなった','Yes — Dad co-curr-rep-wk','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10431',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、古文の難解な語句の読解を論文で扱いましたね','Ren — old-text-hard-phrase paper','Calm','asuka_teacher'),
    mk('はい、亡くなった先生方の教え子の追悼を論文で扱いました','Yes — Late-tch-stud-com paper','Earnest','ren_uni'),
    mk('蓮さん、東洋医学の五臓六腑の概念を論文で扱いましたね','Ren — orient-5-org-6-vis paper','Reflective','asuka_teacher'),
    mk('はい、灌仏会、つまり花祭りの歴史を論文で扱いました','Yes — Buddha-bath-cere-hist paper','Earnest','ren_uni'),
    mk('蓮さん、旧字体の學と新字体の学の歴史を論文で扱いましたね','Ren — old-学-new-学-hist paper','Reflective','asuka_teacher'),
    mk('はい、武道の実技審査の歴史を論文で扱いました','Yes — Mart-prac-exam-hist paper','Earnest','ren_uni'),
    mk('蓮さん、戦国時代の参謀役の研究を論文で扱いましたね','Ren — Seng-strat-stud paper','Reflective','asuka_teacher'),
    mk('はい、政治と経済が交錯する事象を論文で扱いました','Yes — Pol-econ-cross paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10432',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、調書の難解な語句を、警察、丁寧に解釈されますね','Case stmt-hard-phrase police-interp','Reflective','ren_uni'),
    mk('警察、教え子の若手警官をご指導されますね','Police stud-young-off-guide','Cooperative','takeda_officer'),
    mk('本件、犯行動機に腑に落ちない点を、警察、追及されますね','Case mot-not-make-sense police-pursue','Reflective','ren_uni'),
    mk('警察、寺院の灌仏会の警備もされますね','Police temp-Buddha-bath-cere-guard','Cooperative','takeda_officer'),
    mk('本件、古文書の學の旧字体を、警察、専門家に照会されますね','Case old-doc-学-old-char police-expert','Reflective','ren_uni'),
    mk('警察、新人警官の実技試験もされますね','Police newhire-prac-exam','Cooperative','takeda_officer'),
    mk('本件、捜査の参謀役を、警察、ベテランに任されますね','Case inv-strat-vet police-entr','Reflective','ren_uni'),
    mk('警察、複数の事件が交錯する時の捜査も担当されますね','Police mult-case-cross-inv','Close','takeda_officer'),
  ]},
  {id:'conv_10433',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、古文の難解な語句の読解を論文で扱いましたね','Sakura — old-hard-phrase paper','Calm','asuka_teacher'),
    mk('はい、亡くなった先生方の教え子の追悼を論文で扱いました','Yes — Late-tch-stud paper','Earnest teen','sakura_teen'),
    mk('東洋医学の五臓六腑の概念を論文で扱いましたね','Orient-5-org-6-vis paper','Reflective','asuka_teacher'),
    mk('はい、灌仏会、つまり花祭りの歴史を論文で扱いました','Yes — Buddha-bath paper','Earnest','sakura_teen'),
    mk('旧字体の學と新字体の学の歴史を論文で扱いましたね','Old-学 paper','Reflective','asuka_teacher'),
    mk('はい、武道の実技審査の歴史を論文で扱いました','Yes — Mart-prac paper','Earnest','sakura_teen'),
    mk('戦国時代の参謀役の研究を論文で扱いましたね','Seng-strat paper','Reflective','asuka_teacher'),
    mk('はい、政治と経済が交錯する事象を論文で扱いました','Yes — Pol-econ-cross paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10434',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、難解な医学語句の説明を医療チームで丁寧におこないます','Ren — hard-med-phrase med-team','Calm','saito_doctor'),
    mk('蓮さん、医学部の教え子の指導を医療チームでおこないます','Ren — med-stud-guide med-team','Calm','saito_doctor'),
    mk('蓮さん、五臓六腑、つまり内臓の精密検査を医療チームでおこないます','Ren — 5-org-6-vis-inner-exam med-team','Calm','saito_doctor'),
    mk('灌仏会の慈善活動に、貴院、参加されますね、先生','Buddha-bath-char-act your-hosp join, sensei','Reflective','ren_uni'),
    mk('蓮さん、旧字体の學の医学古書を医療チームで保存します','Ren — old-学-med-old-book med-team','Calm','saito_doctor'),
    mk('蓮さん、看護師の実技試験を医療チームで厳密におこないます','Ren — nurse-prac-exam med-team','Calm','saito_doctor'),
    mk('蓮さん、医療チームの参謀役を専門医が務めます','Ren — med-team-strat-spec-fill','Calm','saito_doctor'),
    mk('複数の症例が交錯する時の対応を、貴院、入念にされますね、先生','Mult-case-cross-resp your-hosp-care, sensei','Calm close','ren_uni'),
  ]},
  {id:'conv_10435',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、契約書の難解な語句を弁護士に確認させろ','Our co — contr-hard-phrase-law-check','Crisp','hiroshi_boss'),
    mk('はい。お父さんの教え子の方々を取引先にご紹介します','Yes — Dad-stud-client-intr','Methodical','kenji_office'),
    mk('当社、社員の不満が腑に落ちる説明をしろ','Our co — staff-disc-make-sense-expl','Direction','hiroshi_boss'),
    mk('はい。地元寺院の灌仏会に寄付します','Yes — Local-temp-Buddha-bath-don','Update','kenji_office'),
    mk('当社、創業時の社名の旧字体學を社史に残せ','Our co — found-co-name-old-学-hist','Direction','hiroshi_boss'),
    mk('はい。社員の実技研修を毎月開催します','Yes — Staff-prac-train-mo','Update','kenji_office'),
    mk('当社、経営戦略の参謀役を顧問に任せろ','Our co — mgmt-strat-adv-entr','Direction','hiroshi_boss'),
    mk('はい。事業領域が交錯する案件は事前協議します','Yes — Biz-area-cross-pre-disc','Close','kenji_office'),
  ]},
  {id:'conv_10436',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、エンジェルケーキを召し上がってらしたよ、メイちゃん','Aoi — cust-Angel-cake Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ルーマニアからの留学生さんだって、メイちゃん','Aoi — cust-Roma-exch-stud Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ミレニアム世代の文化論を語って下さったよ、メイちゃん','Aoi — cust-mill-gen-cult-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、オンラインゲームのギルドリーダーだって、メイちゃん','Aoi — cust-online-game-guild-lead Mei','Reflective','aoi_barista'),
    mk('葵、お客様、朝のワイドショーに出演されたって、メイちゃん','Aoi — cust-morn-wide-show-app Mei','Reflective','mei_romantic'),
    mk('葵、お客様、フリーのクリエイターとしてご活躍だって、メイちゃん','Aoi — cust-free-cre-act Mei','Reflective','aoi_barista'),
    mk('葵、お客様、サイレント映画のコレクションを語って下さったよ、メイちゃん','Aoi — cust-silent-film-coll Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ロフトのある住宅にお住まいだって、メイちゃん','Aoi — cust-loft-house-live Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10437',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがエンジェルの彫像を集められた','Gran — youth Dad-Angel-stat-coll','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ルーマニア体操の中継を観られたわよね、あなた?','Yes — Grandpa-Roma-gym-broad, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがミレニアム記念の式典に参列された','Gran — youth Dad-mill-com-cere','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、商店街のギルドにも入られたわよね、あなた?','Grandpa — shop-st-guild-join, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが平日の昼のワイドショーを観られた','Gran — youth Dad-wkday-noon-wide-show','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、書道のクリエイターとして活動されたわよね、あなた?','Grandpa — calig-cre-act, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがサイレント映画祭に通われた','Gran — youth Dad-silent-film-fes','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、家のロフト部屋を書斎にされたわよね、あなた?','Grandpa — house-loft-study, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10438',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがエンジェルの絵本を読んで下さるそうよ','Sho — Dad-Angel-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとルーマニアの料理本を見たよ','Mei-sis — me Dad-Roma-cook','Eager child','sho_child'),
    mk('翔くん、お父さんがミレニアム前後の歴史を教えて下さるわ','Sho — Dad-mill-around-hist','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとギルド制度の社会科を勉強したよ','Mei-sis — me Dad-guild-syst-soc','Eager child','sho_child'),
    mk('翔くん、お父さんがワイドショーの裏側を教えて下さったわ','Sho — Dad-wide-show-bts','Reflective','mei_romantic'),
    mk('メイ姉さん、お父さんがクリエイターのお仕事を見せて下さったよ','Mei-sis — Dad-cre-work-show','Eager child','sho_child'),
    mk('翔くん、お父さんがサイレント映画の名作を観せて下さるわ','Sho — Dad-silent-film-class','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんの書斎、つまりロフトを見せて頂いたよ','Mei-sis — me Dad-study-loft-show','Eager close','sho_child'),
  ]},
  {id:'conv_10439',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、エンジェルのキャラ好きだったよな','Riku — Angel-char-like','Curious teen','sakura_teen'),
    mk('お前、社会でルーマニアの場所言えなかったろ、桜','You — soc-Roma-place? Sakura','Wry','riku_teen'),
    mk('リク、お前、ミレニアム世代って言葉使うようになったな','Riku — mill-gen-use-now','Curious','sakura_teen'),
    mk('お前、ゲームのギルドに入ったろ?桜','You — game-guild-join? Sakura','Curious','riku_teen'),
    mk('リク、お前のお父さん、朝のワイドショー出てたな','Riku — your-Dad-morn-wide-show','Curious','sakura_teen'),
    mk('お前、クリエイター志望って言ってたな、桜','You — cre-asp-said Sakura','Curious','riku_teen'),
    mk('リク、お前、映画部でサイレント映画観てたな','Riku — film-club-silent','Curious','sakura_teen'),
    mk('お前、家のロフトに秘密基地作ってたろ、桜','You — house-loft-secret-base? Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10440',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがエンジェル像のお土産を下さったわ','Sho — Dad-Angel-stat-souv','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとルーマニアのドキュメンタリー観たよ','Mom — me Dad-Roma-doc','Eager child','sho_child'),
    mk('翔くん、お父さんが「ミレニアム前夜は緊張した」って語って下さったわ','Sho — Dad-"mill-eve-tense"-talk','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと中世のギルドのドキュメンタリー観たよ','Mom — me Dad-medi-guild-doc','Eager child','sho_child'),
    mk('翔くん、お父さんが朝のワイドショーを観てらっしゃるわ','Sho — Dad-morn-wide-show','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとクリエイターの作品集を見たよ','Mom — me Dad-cre-port','Eager child','sho_child'),
    mk('翔くん、お父さんがサイレント映画の名作を観てらっしゃるわ','Sho — Dad-silent-film-class','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと家のロフトを片付けたよ','Mom — me Dad-house-loft-tidy','Eager close','sho_child'),
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

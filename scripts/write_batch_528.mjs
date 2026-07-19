import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_528 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['辻','ぃ','にゃ','かぁ','るる','之','燭','頁']
const B_T = ['譴','發','ココログ','茲','兇','廚','李','眞']
const C_T = ['Ｗ杯','ワタ','笋','鬚','鵑','颪','蕕','紊']
const D_T = ['コム','ヲタ','お稽古','絢爛','斬る','食い物','大海','面子']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10521',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「辻角の和菓子屋さんが美味しい」って教えて下さったわ','Sho — Dad-"corner-sweets-shop"-teach','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「なんだぃ?」って声を掛けられたよ','Mom — me Dad-"what-dialect"-asked','Wry child','sho_child'),
    mk('翔くん、お父さんが猫さんに「にゃあ」って真似されてたわ','Sho — Dad-cat-"nya"-mimic','Wry','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「そっかぁ、頑張ったね」って褒めて頂いたよ','Mom — me Dad-"sokkaa-praise"-recv','Eager child','sho_child'),
    mk('翔くん、お父さんが寝かしつけに「ねるるねるる」って優しく仰ってたわ','Sho — Dad-sleep-"nerurunerurus"-soft','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんに古い書道で「之」の書き方を教えて頂いたよ','Mom — me Dad-old-calig-"no"-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが法事の燭台、つまり燭を新しくされたわ','Sho — Dad-cere-cand-renew','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんに本の十頁から読みなさいって教えて頂いたよ','Mom — me Dad-page10-read-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_10522',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、辻角のお店との比較を語って下さったよ、メイちゃん','Aoi — cust-corner-shop-comp Mei','Reflective','mei_romantic'),
    mk('葵、お客様、「ねぇ、これ美味しぃ」って小さく仰ってたよ、メイちゃん','Aoi — cust-"oishii"-quietly Mei','Wry','aoi_barista'),
    mk('葵、お客様、ペットの猫が「にゃ」って鳴く動画を見せて下さったよ、メイちゃん','Aoi — cust-cat-"nya"-vid Mei','Wry','mei_romantic'),
    mk('葵、お客様、「そっかぁ、それはいい」って優しく頷いて下さったよ、メイちゃん','Aoi — cust-"sokkaa-good"-nod Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お子様が「るるる」って歌を口ずさんでらしたよ、メイちゃん','Aoi — cust-kid-"ruru"-hum Mei','Reflective','mei_romantic'),
    mk('葵、お客様、書道家、つまり「之を書く」専門家でいらしたよ、メイちゃん','Aoi — cust-calig-"no-write"-spec Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お盆の燭、つまり蝋燭を手に入れた事を話して下さったよ、メイちゃん','Aoi — cust-bon-cand-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、メニューの最後の頁を読まれてたよ、メイちゃん','Aoi — cust-menu-last-page Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10523',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが街の辻に立つ地蔵にお参りされた','Gran — youth Dad-corner-Jizo-pray','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、子供達に「いいのかぃ?」って関西弁で聞かれたわよね、あなた?','Yes — Grandpa-"ii-no-dai"-Kansai, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが猫を「にゃあ」と優しく呼ばれた','Gran — youth Dad-cat-"nyaa"-soft','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、「そっかぁ、それでええ」って関西弁で仰ってたわよね、あなた?','Grandpa — "sokkaa-ee"-Kansai, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「るるる」って小川の音を真似された','Gran — youth Dad-"ruru"-stream-mimic','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、「之」を含む古典をよく読まれたわよね、あなた?','Grandpa — youth-"no"-class-read, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは仏間の燭を毎晩灯された','Gran — youth Dad-bud-cand-nig','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、本を読まれる時、頁を丁寧にめくられたわよね、あなた?','Grandpa — book-page-care, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10524',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、辻のお地蔵さんに手合わせてたな','Riku — corner-Jizo-pray','Wry teen','sakura_teen'),
    mk('お前、「うれしぃ」って語尾の小さぃ「ぃ」気にしてたな、桜','You — "ureshii"-small-i Sakura','Wry','riku_teen'),
    mk('リク、お前、ノラ猫に「にゃ」って話しかけてたな','Riku — stray-cat-"nya"-talk','Wry','sakura_teen'),
    mk('お前、テスト返却で「そっかぁ」ってつぶやいたな、桜','You — test-back-"sokkaa"-mut Sakura','Wry','riku_teen'),
    mk('リク、お前、音楽の授業で「らるるれろ」じゃなくて「るるる」って歌ってたな','Riku — mus-class-"ruru"-sing','Wry','sakura_teen'),
    mk('お前、書道で「之」をきれいに書けてたな、桜','You — calig-"no"-good Sakura','Praising','riku_teen'),
    mk('リク、お前、林間学校でキャンプの燭、つまりキャンドル持ってたな','Riku — for-camp-cand-carry','Curious','sakura_teen'),
    mk('お前、教科書の二十頁、つまり20ページの問題解いてたな、桜','You — textb-20-page-solve Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10525',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「辻のお地蔵さんに挨拶を」って仰ってたわ','Sho — Dad-"corner-Jizo-greet"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「これ、楽しぃ」って言ったよ','Mei-sis — me Dad-"tanoshii"-said','Eager child','sho_child'),
    mk('翔くん、お父さんがおうちの猫に「にゃ」って呼ばれてたわ','Sho — Dad-cat-"nya"-call','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「そっかぁ」って受け止めて頂いたよ','Mei-sis — me Dad-"sokkaa"-accept','Earnest child','sho_child'),
    mk('翔くん、お父さんが古い童謡で「るるる」と歌って下さったわ','Sho — Dad-old-song-"ruru"-sing','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「之」の意味を教えて頂いたよ','Mei-sis — me Dad-"no"-mean-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが法要で燭を点して下さるそうよ','Sho — Dad-cere-cand-light','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに絵本の最初の頁を読んで頂いたよ','Mei-sis — me Dad-pic-first-page-read','Eager close','sho_child'),
  ]},
  {id:'conv_10526',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews HR',lines:[
    mk('当社、不正があった場合は譴責処分を厳格におこなえ','Our co — wrong-rep-strict','Crisp','hiroshi_boss'),
    mk('はい。旧字體の「發」の登記書類を保存します','Yes — Old-發-reg-doc-save','Methodical','kenji_office'),
    mk('当社、社員ブログ、つまりココログ等のSNS規則を整えろ','Our co — staff-blog-Cocolog-rule','Direction','hiroshi_boss'),
    mk('はい。「茲に決定する」と形式に従って通知致します','Yes — "Koko-ni"-form-notify','Update','kenji_office'),
    mk('当社、工場での兇器持ち込み禁止を再徹底しろ','Our co — fact-weap-no-thor','Direction','hiroshi_boss'),
    mk('はい。社員食堂の廚房、つまり厨房の衛生検査を強化します','Yes — Staff-cant-kit-hyg-strong','Update','kenji_office'),
    mk('当社、新任の李部長を歓迎しろ','Our co — new-Li-dept-head-wel','Direction','hiroshi_boss'),
    mk('はい。創業者の眞太郎様の社訓を社員に共有します','Yes — Found-Shintaro-motto-share','Close','kenji_office'),
  ]},
  {id:'conv_10527',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('懲戒として譴責は形式的でも記録しましょう','Discip-rep-form-rec','Brisk','yuki_office'),
    mk('はい。旧書類の「發」の記載を電子化します','Yes — Old-發-rec-dig','Cooperative','kenji_office'),
    mk('社員のココログ運用ガイドを整えましょう','Staff-Cocolog-guide','Direction','yuki_office'),
    mk('はい。「茲に契約の旨を確認する」と書面に致します','Yes — "Koko-ni"-contr-form','Update','kenji_office'),
    mk('社内防犯で兇器対策の研修を実施しましょう','Off-prev-weap-train','Direction','yuki_office'),
    mk('はい。社食の廚房、つまり厨房スタッフの研修を強化します','Yes — Cant-kit-staff-train','Update','kenji_office'),
    mk('新規取引先の李社長との会食を設定しましょう','New-Li-pres-meal-set','Direction','yuki_office'),
    mk('はい。創業者ご令孫の眞さんを社内会議にお招きします','Yes — Found-Shin-meet-inv','Close','kenji_office'),
  ]},
  {id:'conv_10528',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究室の倫理違反は譴責対象だと心得ろ','Ren — lab-eth-rep','Mentor','hiroshi_boss'),
    mk('はい。旧字体「發」が登場する古文献の解読を続けます','Yes — Old-發-old-doc-decod','Earnest','ren_uni'),
    mk('蓮、研究者がココログで情報発信する事例を読め','Ren — res-Cocolog-info-case','Direction','hiroshi_boss'),
    mk('はい。学会発表で「茲に発表致します」と冒頭をしっかり','Yes — Conf-"koko-ni"-open','Earnest','ren_uni'),
    mk('蓮、戦時下の兇器規制の文献を読め','Ren — war-weap-lit','Direction','hiroshi_boss'),
    mk('はい。古い料亭の廚房、つまり厨房文化の論文を読みます','Yes — Old-rest-kit-cult-paper','Polite','ren_uni'),
    mk('蓮、共同研究の李教授に丁寧に挨拶しろ','Ren — joint-Li-prof-greet','Direction','hiroshi_boss'),
    mk('はい。旧仮名遣いの眞、つまり真の文字を研究します','Yes — Old-kana-Shin-Shin-stud','Earnest close','ren_uni'),
  ]},
  {id:'conv_10529',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、内部規律違反には譴責処分もされますね','Police int-rule-rep','Cooperative','kenji_office'),
    mk('警察、戦前の「發砲」記録を、警察、参照されますね','Police prewar-發-fire-rec-ref','Cooperative','kenji_office'),
    mk('警察、容疑者のブログ、ココログ投稿も解析されますね','Police suspect-Cocolog-post-anal','Cooperative','kenji_office'),
    mk('警察、「茲に告示する」と正式文書を発行されますね','Police "koko-ni"-form-issue','Cooperative','kenji_office'),
    mk('警察、現場の兇器、つまり凶器を厳重に押収されますね','Police scene-weap-seize','Cooperative','kenji_office'),
    mk('警察、犯行現場の廚房、つまり厨房も鑑識されますね','Police scene-kit-foren','Cooperative','kenji_office'),
    mk('警察、目撃者の李さんから事情を、警察、丁寧に聴かれますね','Police witn-Li-careful','Cooperative','kenji_office'),
    mk('警察、被害者の眞さん、つまり真田さんの調書を、警察、整えられますね','Police vict-Shin-Sanada-stmt','Close','kenji_office'),
  ]},
  {id:'conv_10530',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、譴責で済んだ社員も後に大成された','Dad — found rep-emp-grow','Sage','hiroshi_elder'),
    mk('はい。お父さんは旧字「發」の登記簿を大事に保管された','Yes — Dad old-發-reg-keep','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、ココログで社員と交流された','Dad — youth Cocolog-staff','Wistful','hiroshi_elder'),
    mk('はい。お父さんは式典で「茲に」と仰る方だった','Yes — Dad cere-"koko-ni"-said','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、兇器持つ事は許されなかった','Dad — youth weap-no-tol','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員食堂の廚房、つまり厨房を毎日見回られた','Yes — Dad cant-kit-daily','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、李社長との合弁を成功された','Dad — youth-Li-pres-JV-succ','Wistful','hiroshi_elder'),
    mk('はい。お父さんは創業者眞太郎様の遺志を継がれた','Yes — Dad found-Shintaro-leg-inherit','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10531',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、Ｗ杯開催に伴う社会変動の研究を論文で扱いましたね','Ren — Wcup-soc-chg paper','Calm','asuka_teacher'),
    mk('はい、棉、つまりワタの繊維長の品種研究を論文で扱いました','Yes — Cot-fib-cul paper','Earnest','ren_uni'),
    mk('蓮さん、笋、つまりタケノコの成長速度の研究を論文で扱いましたね','Ren — bam-shoot-grow paper','Reflective','asuka_teacher'),
    mk('はい、軟体動物の鬚、つまり触手の進化を論文で扱いました','Yes — Mol-tent-evol paper','Earnest','ren_uni'),
    mk('蓮さん、和歌の鵑、つまり杜鵑の象徴の研究を論文で扱いましたね','Ren — wak-cuc-symb paper','Reflective','asuka_teacher'),
    mk('はい、六甲颪、つまり地域風の研究を論文で扱いました','Yes — Rok-mtn-wind paper','Earnest','ren_uni'),
    mk('蓮さん、薬草の蕕、つまり灌木の薬効研究を論文で扱いましたね','Ren — herb-cary-effi paper','Reflective','asuka_teacher'),
    mk('はい、戦後の社会風紀の紊乱、つまり紊れの研究を論文で扱いました','Yes — Postwar-soc-dis-mor paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10532',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('Ｗ杯開催時の警備計画を、警察、入念にされますね','Wcup-guard-plan police-care','Reflective','ren_uni'),
    mk('警察、繊維、つまりワタの鑑識資料も保管されますね','Police fib-cot-foren-keep','Cooperative','takeda_officer'),
    mk('警察、現場の竹林、笋、つまりタケノコの痕跡も検証されますね','Police scene-bam-shoot-trace','Cooperative','takeda_officer'),
    mk('警察、犯人の鬚、つまり髭の特徴を、警察、目撃者から確認されますね','Police suspect-beard-witn','Cooperative','takeda_officer'),
    mk('警察、密漁の鵑、つまり野鳥の捕獲を取り締まりされますね','Police poach-cuc-bird-crack','Cooperative','takeda_officer'),
    mk('警察、強風、つまり颪の影響で山岳救助もされますね','Police str-wind-mtn-resc','Cooperative','takeda_officer'),
    mk('警察、薬草、つまり蕕の違法栽培の捜査もされますね','Police herb-cary-illeg-inv','Cooperative','takeda_officer'),
    mk('警察、社会規範の紊乱、つまり紊れに対し啓発活動もされますね','Police soc-norm-dis-aware','Close','takeda_officer'),
  ]},
  {id:'conv_10533',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、Ｗ杯開催に伴う社会変動の研究を論文で扱いましたね','Sakura — Wcup paper','Calm','asuka_teacher'),
    mk('はい、棉、つまりワタの繊維長の品種研究を論文で扱いました','Yes — Cot-fib paper','Earnest teen','sakura_teen'),
    mk('笋、つまりタケノコの成長速度の研究を論文で扱いましたね','Bam-shoot paper','Reflective','asuka_teacher'),
    mk('はい、軟体動物の鬚、つまり触手の進化を論文で扱いました','Yes — Mol-tent paper','Earnest','sakura_teen'),
    mk('和歌の鵑、つまり杜鵑の象徴の研究を論文で扱いましたね','Wak-cuc paper','Reflective','asuka_teacher'),
    mk('はい、六甲颪、つまり地域風の研究を論文で扱いました','Yes — Mtn-wind paper','Earnest','sakura_teen'),
    mk('薬草の蕕、つまり灌木の薬効研究を論文で扱いましたね','Herb-cary paper','Reflective','asuka_teacher'),
    mk('はい、戦後の社会風紀の紊乱、つまり紊れの研究を論文で扱いました','Yes — Postwar-mor paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10534',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、Ｗ杯開催期間中の医療体制を医療チームで強化します','Ren — Wcup-med-strong med-team','Calm','saito_doctor'),
    mk('蓮さん、衛生のため、繊維、つまりワタの管理を医療チームで徹底します','Ren — hyg-cot-mgmt med-team','Calm','saito_doctor'),
    mk('蓮さん、生薬の笋、つまりタケノコの薬効を医療チームで検討します','Ren — herb-shoot-effi med-team','Calm','saito_doctor'),
    mk('蓮さん、鼻腔内の鬚、つまり鼻毛の感染防御機能を医療チームで解説します','Ren — nas-hair-prot-expl med-team','Calm','saito_doctor'),
    mk('蓮さん、鳥インフル研究で杜鵑、つまり鵑類の感染リスクを医療チームで確認します','Ren — avi-cuc-inf-risk med-team','Calm','saito_doctor'),
    mk('蓮さん、強い颪、つまり山風時の救急体制を医療チームで整えます','Ren — str-mtn-wind-emerg med-team','Calm','saito_doctor'),
    mk('蓮さん、漢方の蕕、つまり灌木性生薬の効能を医療チームで研究します','Ren — kanp-cary-herb-effi med-team','Calm','saito_doctor'),
    mk('蓮さん、感染拡大の紊乱、つまり紊れた状況下で医療チームで連携します','Ren — pand-dis-team-coord med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_10535',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、Ｗ杯協賛の事業企画を進めろ','Our co — Wcup-spon-biz-plan','Crisp','hiroshi_boss'),
    mk('はい。繊維事業、つまりワタの原料調達を強化します','Yes — Fib-biz-cot-source-strong','Methodical','kenji_office'),
    mk('当社、食品事業で笋、つまりタケノコの加工品を増やせ','Our co — food-shoot-proc-incr','Direction','hiroshi_boss'),
    mk('はい。化粧品事業で「鬚、つまり髭ケア」商品を展開します','Yes — Cosm-beard-care-prod','Update','kenji_office'),
    mk('当社、観光事業で「杜鵑、つまり鵑の名所」を売り出せ','Our co — tour-cuc-spot-prom','Direction','hiroshi_boss'),
    mk('はい。気象、つまり颪のデータを物流計画に反映します','Yes — Wth-mtn-wind-log-plan','Update','kenji_office'),
    mk('当社、漢方事業で蕕、つまり生薬の供給を強化しろ','Our co — kanp-cary-herb-strong','Direction','hiroshi_boss'),
    mk('はい。市場の紊乱、つまり紊れた状況に備えます','Yes — Mkt-dis-prep','Close','kenji_office'),
  ]},
  {id:'conv_10536',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、社名にコム、つまり「.com」を付けて起業されたって、メイちゃん','Aoi — cust-co-com-start Mei','Reflective','mei_romantic'),
    mk('葵、お客様、自分はヲタだって笑ってらしたよ、メイちゃん','Aoi — cust-self-otaku-laugh Mei','Wry','aoi_barista'),
    mk('葵、お客様、茶道のお稽古に通ってらっしゃるって、メイちゃん','Aoi — cust-tea-cere-prac Mei','Reflective','mei_romantic'),
    mk('葵、お客様、絢爛な歌舞伎の衣装に魅了されたって、メイちゃん','Aoi — cust-gorg-kab-cost Mei','Reflective','aoi_barista'),
    mk('葵、お客様、時代劇で悪を斬る場面が好きだって、メイちゃん','Aoi — cust-period-cut-evil Mei','Reflective','mei_romantic'),
    mk('葵、お客様、夜食の食い物のお話を楽しそうに語って下さったよ、メイちゃん','Aoi — cust-night-food-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、人生は大海原のような物だって、メイちゃん','Aoi — cust-life-sea-said Mei','Reflective','mei_romantic'),
    mk('葵、お客様、麻雀の面子が揃わなくて困ってるって、メイちゃん','Aoi — cust-maj-mem-short Mei','Wry close','aoi_barista'),
  ]},
  {id:'conv_10537',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがドットコム、つまりコムの登録を早くされた','Gran — youth Dad-dotcom-reg-early','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ご自身を「カメラのヲタ」って笑ってらしたわよね、あなた?','Yes — Grandpa-cam-otaku-laugh, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが書道のお稽古に通われた','Gran — youth Dad-calig-prac','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、絢爛豪華なお祭りに見入られたわよね、あなた?','Grandpa — gorg-fes-amaze, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが時代劇の悪を斬る場面に惹かれた','Gran — youth Dad-period-cut-evil-attr','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、夜食の食い物を作って下さったわよね、あなた?','Grandpa — youth-night-food-made, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは「大海を知らずに帰るな」と言われた','Gran — youth Dad-"sea-no-return"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、麻雀の面子を揃えるのが上手だったわよね、あなた?','Grandpa — maj-mem-gath, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10538',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがコム、つまり「.com」のお仕事のお話をして下さるそうよ','Sho — Dad-dotcom-work-talk','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「ヲタ」って言葉の由来を教えて頂いたよ','Mei-sis — me Dad-"otaku"-orig-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが書道のお稽古に通わせて下さるわ','Sho — Dad-calig-prac','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと絢爛豪華なお祭りを観たよ','Mei-sis — me Dad-gorg-fes','Eager child','sho_child'),
    mk('翔くん、お父さんが「悪を斬る」時代劇を一緒に観て下さるわ','Sho — Dad-"cut-evil"-period-watch','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとおいしい食い物の食べ歩きをしたよ','Mei-sis — me Dad-food-walk','Eager child','sho_child'),
    mk('翔くん、お父さんが「人生は大海」って語って下さったわ','Sho — Dad-"life-sea"-talk','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと麻雀の面子の意味を学んだよ','Mei-sis — me Dad-maj-mem-mean','Eager close','sho_child'),
  ]},
  {id:'conv_10539',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、コム、つまり「.com」ドメインに詳しいな','Riku — dotcom-dom-knowl','Curious teen','sakura_teen'),
    mk('お前、自分の事「アニメヲタ」って言ってたな、桜','You — self-anime-otaku-said Sakura','Wry','riku_teen'),
    mk('リク、お前、茶道のお稽古に通ってたな','Riku — tea-prac','Curious','sakura_teen'),
    mk('お前、京都の絢爛なお祭りの写真撮ってたな、桜','You — Kyoto-gorg-fes-photo Sakura','Curious','riku_teen'),
    mk('リク、お前、剣道で「斬るふり」上手だな','Riku — ken-cut-mime-good','Praising','sakura_teen'),
    mk('お前、コンビニで食い物の品評してたろ、桜','You — conv-food-rev? Sakura','Wry','riku_teen'),
    mk('リク、お前、文集で「大海を渡れ」って書いてたな','Riku — book-"sea-cross"-wrote','Curious','sakura_teen'),
    mk('お前、麻雀部の面子で大会出てたろ、桜','You — maj-club-mem-comp? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10540',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがITコム、つまり「.com」の歴史を解説して下さるわ','Sho — Dad-dotcom-hist-narr','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「ヲタも個性」って教えて頂いたよ','Mom — me Dad-"otaku-pers"-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが私のお稽古事を応援して下さるわ','Sho — Dad-my-prac-supp','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと絢爛豪華なお祭りを観たよ','Mom — me Dad-gorg-fes','Eager child','sho_child'),
    mk('翔くん、お父さんが時代劇で悪人を斬る場面を解説して下さるわ','Sho — Dad-period-cut-evil-narr','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとおいしい食い物を食べ比べしたよ','Mom — me Dad-food-comp-eat','Eager child','sho_child'),
    mk('翔くん、お父さんが「大海の様な心を持て」って仰ってたわ','Sho — Dad-"sea-mind"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに麻雀の面子の集め方を教えて頂いたよ','Mom — me Dad-maj-mem-gath-teach','Eager close','sho_child'),
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

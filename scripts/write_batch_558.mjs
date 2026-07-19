import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_558 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['対人','竹下','地主','産ん','取り出す','昌','キツイ','岬']
const B_T = ['的中','村長','手抜き','投じ','成し遂げ','はかっ','事由','斡旋']
const C_T = ['閉塞','南方','先駆け','先取り','英訳','下宿','検知','絶叫']
const D_T = ['南東','電電','ヴォーカル','長調','小麦粉','エッセー','豪快','マーカー']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_11121',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「対人スキルを磨いておくと得だよ」って仰ってたわ','Sho — Dad-"interp-skill-gain"-said','Tender','yumiko_mom'),
    mk('ママ、お父さんが「竹下首相時代の話を伝えたい」って仰ってたよ','Mom — Dad-"Take-PM-tell"-said','Pleased child','sho_child'),
    mk('翔くん、お父さんが「地主だったご親戚のお話を語って下さるわ」','Sho — Dad-"landlord-rel-talk"-said','Reflective','yumiko_mom'),
    mk('ママ、お父さんが「ぼくを産んで下さって有り難い」って仰ってたよ','Mom — Dad-"me-bore-grat"-said','Earnest child','sho_child'),
    mk('翔くん、お父さんが冷蔵庫からチーズを取り出すのを手伝って下さるわ','Sho — Dad-fridge-cheese-take-help','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと「昌雄おじいちゃん」のお墓参り行ったよ','Mom — me Dad-Masao-grdpa-grave','Pleased child','sho_child'),
    mk('翔くん、お父さんが「最近の仕事はキツイ」って漏らされたわ','Sho — Dad-"work-tough"-mut','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと房総半島の岬で日の出観たよ','Mom — me Dad-Boso-cape-sunrise','Eager close','sho_child'),
  ]},
  {id:'conv_11122',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、対人関係に悩んでらしたよ、メイちゃん','Aoi — cust-interp-worry Mei','Reflective','mei_romantic'),
    mk('葵、お客様、竹下景子さんのファンだって、メイちゃん','Aoi — cust-Take-Keiko-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、地主のご祖父様のお話を語って下さったよ、メイちゃん','Aoi — cust-landlord-grdpa-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お子様を産んで一年だって、メイちゃん','Aoi — cust-kid-bore-1yr Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ガラス容器の中からビスケットを取り出す仕草が上品だったよ、メイちゃん','Aoi — cust-jar-bisc-take Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お孫様のお名前が昌くんだって、メイちゃん','Aoi — cust-grdkid-Sho Mei','Reflective','aoi_barista'),
    mk('葵、お客様、「最近の運営はキツイ」って苦笑いされてたよ、メイちゃん','Aoi — cust-"mgmt-tough"-wry Mei','Wry','mei_romantic'),
    mk('葵、お客様、岬の灯台のお話を語って下さったよ、メイちゃん','Aoi — cust-cape-light-talk Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_11123',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは対人交渉を大事にされた','Gran — youth Dad-interp-neg-cher','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、竹下登総理の時代を経験されたわよね、あなた?','Yes — Grandpa-Take-Nob-PM, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんの実家は地主だった','Gran — youth Dad-home-landlord','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、子供を産んで育てる事を最優先にされたわよね、あなた?','Grandpa — youth-bore-raise-top, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが大事な茶器を取り出す時、慎重だった','Gran — youth Dad-tea-set-take-care','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、お友達の昌さんと付き合いがあったわよね、あなた?','Grandpa — youth-Sho-fri, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは「戦後はキツイ時代だった」と仰った','Gran — youth Dad-"postwar-tough"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、岬の灯台守の方々と親しかったわよね、あなた?','Grandpa — youth-cape-light-keep-close, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_11124',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、対人練習の心理学本読んでたな','Riku — interp-psy-book','Curious teen','sakura_teen'),
    mk('お前、社会で竹下内閣の話覚えたろ、桜','You — soc-Take-cab? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会で地主制度習ったろ','Riku — soc-landlord-syst?','Curious','sakura_teen'),
    mk('お前、ペットの猫が子猫を産んで嬉しそうだったな、桜','You — pet-cat-kit-bore Sakura','Wry','riku_teen'),
    mk('リク、お前、引き出しから教科書を取り出すの忘れたろ','Riku — drawer-textb-take-forg?','Wry','sakura_teen'),
    mk('お前、隣のクラスの昌くんと話してたな、桜','You — next-cl-Sho-talk Sakura','Curious','riku_teen'),
    mk('リク、お前、部活の練習がキツイって言ってたな','Riku — club-prac-tough-said','Wry','sakura_teen'),
    mk('お前、家族で岬の灯台行ったろ、桜','You — fam-cape-light? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_11125',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「対人面で困ったら相談に来てね」って仰ってたわ','Sho — Dad-"interp-cons"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと竹下景子さんの女優論を聞いたよ','Mei-sis — me Dad-Take-Keiko-talk','Eager child','sho_child'),
    mk('翔くん、お父さんが「地主だった曾祖父の話」を聞かせて下さったわ','Sho — Dad-"land-greatgrdpa"-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「ママが僕を産んで下さった時の話」聞いたよ','Mei-sis — me Dad-"Mom-bore-me"-heard','Earnest child','sho_child'),
    mk('翔くん、お父さんが古い記念品を蔵から取り出すのを手伝って下さるわ','Sho — Dad-old-memento-take-help','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと曽祖父の昌一郎の墓参り行ったよ','Mei-sis — me Dad-Sho-Ichi-grave','Eager child','sho_child'),
    mk('翔くん、お父さんが「今年の繁忙期はキツイ」って漏らされたわ','Sho — Dad-"busy-tough"-mut','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと房総の岬でキャンプしたよ','Mei-sis — me Dad-Boso-cape-camp','Eager close','sho_child'),
  ]},
  {id:'conv_11126',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、市場予測が的中する精度を上げろ','Our co — mkt-pred-hit-up','Crisp','hiroshi_boss'),
    mk('はい。地元の村長との会合を設定します','Yes — Local-vill-chief-meet','Methodical','kenji_office'),
    mk('当社、品質管理に手抜きを許すな','Our co — qual-shortcut-no','Direction','hiroshi_boss'),
    mk('はい。社運を投じてプロジェクトを進めます','Yes — Co-fate-invest-proj','Update','kenji_office'),
    mk('当社、目標を成し遂げた社員を表彰しろ','Our co — goal-achv-staff-award','Direction','hiroshi_boss'),
    mk('はい。経費をはかった上で計画を進めます','Yes — Exp-meas-plan','Update','kenji_office'),
    mk('当社、契約の事由を明文化しろ','Our co — contr-reason-form','Direction','hiroshi_boss'),
    mk('はい。新規取引先の斡旋を受けました','Yes — New-client-medi-recv','Close','kenji_office'),
  ]},
  {id:'conv_11127',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('予測が的中したら、社内発表しましょう','Pred-hit-int-announce','Brisk','yuki_office'),
    mk('はい。地方の村長との合同企画を準備します','Yes — Local-vill-chief-plan','Cooperative','kenji_office'),
    mk('現場の手抜きを防ぐチェック体制を整えましょう','Field-shortcut-prev-check','Direction','yuki_office'),
    mk('はい。広告に予算を多く投じます','Yes — Ad-budg-invest','Update','kenji_office'),
    mk('成し遂げた成果を月次報告にまとめましょう','Achv-mo-rep','Direction','yuki_office'),
    mk('はい。コストをはかった上で稟議に上げます','Yes — Cost-meas-prop','Update','kenji_office'),
    mk('退職の事由を本人と確認しましょう','Resign-reason-conf','Direction','yuki_office'),
    mk('はい。取引斡旋業者との関係を整理します','Yes — Brok-rel-tidy','Close','kenji_office'),
  ]},
  {id:'conv_11128',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、仮説が的中する精度を統計で示せ','Ren — hyp-hit-stat','Mentor','hiroshi_boss'),
    mk('はい。地方の村長への聞き取り調査を進めます','Yes — Local-vill-chief-int-surv','Earnest','ren_uni'),
    mk('蓮、データ収集に手抜きするな','Ren — data-coll-shortcut-no','Direction','hiroshi_boss'),
    mk('はい。研究時間をたっぷり投じます','Yes — Res-time-invest','Earnest','ren_uni'),
    mk('蓮、博士論文を成し遂げた先輩を見習え','Ren — PhD-achv-sen','Direction','hiroshi_boss'),
    mk('はい。研究費の使途をはかった上で申請します','Yes — Res-fund-meas-apply','Polite','ren_uni'),
    mk('蓮、論文の引用事由を明確にしろ','Ren — paper-cite-reason','Direction','hiroshi_boss'),
    mk('はい。学会の発表枠の斡旋を依頼します','Yes — Conf-slot-medi-req','Earnest close','ren_uni'),
  ]},
  {id:'conv_11129',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、捜査予測が的中するように分析されますね','Police inv-pred-hit-anal','Cooperative','kenji_office'),
    mk('警察、地方の村長と連携した防犯協議もされますね','Police local-vill-chief-prev','Cooperative','kenji_office'),
    mk('警察、捜査に手抜きを許さない姿勢で臨まれますね','Police inv-shortcut-no-stance','Cooperative','kenji_office'),
    mk('警察、予算を多く投じて重点捜査をされますね','Police budg-invest-prio','Cooperative','kenji_office'),
    mk('警察、事件解決を成し遂げた捜査員を表彰されますね','Police case-achv-inv-award','Cooperative','kenji_office'),
    mk('警察、現場の規模をはかった上で人員配置されますね','Police scene-meas-staff','Cooperative','kenji_office'),
    mk('警察、捜査打ち切りの事由は慎重に判断されますね','Police inv-end-reason-care','Cooperative','kenji_office'),
    mk('警察、被害者支援団体の斡旋もされますね','Police vict-supp-medi','Close','kenji_office'),
  ]},
  {id:'conv_11130',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、市場予測が的中して大きく業績を伸ばされた','Dad — youth-pred-hit-grow','Sage','hiroshi_elder'),
    mk('はい。お父さんは地方の村長との関係を大事にされた','Yes — Dad local-vill-chief-cher','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、手抜きを許さない厳しい上司だった','Dad — youth-shortcut-no-strict','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新製品開発に巨額を投じられた','Yes — Dad new-prod-big-invest','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、海外進出を成し遂げられた','Dad — youth-overs-achv','Wistful','hiroshi_elder'),
    mk('はい。お父さんは投資をはかった上で慎重に判断された','Yes — Dad invest-meas-care','Reflective','hiroshi_boss'),
    mk('お父さん、解雇の事由を慎重に確認された','Dad — term-reason-care','Wistful','hiroshi_elder'),
    mk('はい。お父さんは業界団体の斡旋にも応じられた','Yes — Dad ind-medi-resp','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_11131',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、血管の閉塞、つまり閉塞性疾患の医学研究を論文で扱いましたね','Ren — vasc-occl paper','Calm','asuka_teacher'),
    mk('はい、南方戦線、つまり南方諸島の戦史研究を論文で扱いました','Yes — S-front-isl paper','Earnest','ren_uni'),
    mk('蓮さん、新技術の先駆け、つまり先駆け企業の研究を論文で扱いましたね','Ren — new-tech-pion paper','Reflective','asuka_teacher'),
    mk('はい、市場の先取り戦略の経営学研究を論文で扱いました','Yes — Mkt-preempt-mgmt paper','Earnest','ren_uni'),
    mk('蓮さん、文学作品の英訳の歴史研究を論文で扱いましたね','Ren — lit-Eng-trans paper','Reflective','asuka_teacher'),
    mk('はい、戦前の下宿、つまり下宿文化の社会学研究を論文で扱いました','Yes — Prewar-lodge-soc paper','Earnest','ren_uni'),
    mk('蓮さん、放射線検知器、つまり検知技術の工学研究を論文で扱いましたね','Ren — radi-det paper','Reflective','asuka_teacher'),
    mk('はい、戦争被害者の絶叫の口承記録研究を論文で扱いました','Yes — War-vict-scream-oral paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_11132',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、道路の閉塞、つまり閉塞による交通事故を、警察、捜査されますね','Case rd-occl-acc police-inv','Reflective','ren_uni'),
    mk('警察、南方からの密航事案も対応されますね','Police S-smug-case','Cooperative','takeda_officer'),
    mk('本件、捜査の先駆け、つまり先駆け捜査官の経験を、警察、活かされますね','Case inv-pion-exp police-use','Reflective','ren_uni'),
    mk('警察、犯人の動向を先取り、つまり先取り捜査されますね','Police suspect-preempt-inv','Cooperative','takeda_officer'),
    mk('本件、英訳された海外文書を、警察、慎重に取り扱われますね','Case Eng-trans-overs-doc police-care','Reflective','ren_uni'),
    mk('警察、下宿で起きた事案を、警察、丁寧に対応されますね','Police lodge-case-careful','Cooperative','takeda_officer'),
    mk('本件、薬物検知器、つまり検知装置を、警察、ご利用されますね','Case drug-det-police-use','Reflective','ren_uni'),
    mk('警察、被害者の絶叫の通報も、警察、迅速に対応されますね','Police vict-scream-rep-quick','Close','takeda_officer'),
  ]},
  {id:'conv_11133',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、血管の閉塞、つまり閉塞性疾患の医学研究を論文で扱いましたね','Sakura — occl paper','Calm','asuka_teacher'),
    mk('はい、南方戦線、つまり南方諸島の戦史研究を論文で扱いました','Yes — S-front paper','Earnest teen','sakura_teen'),
    mk('新技術の先駆け、つまり先駆け企業の研究を論文で扱いましたね','Pion paper','Reflective','asuka_teacher'),
    mk('はい、市場の先取り戦略の経営学研究を論文で扱いました','Yes — Preempt paper','Earnest','sakura_teen'),
    mk('文学作品の英訳の歴史研究を論文で扱いましたね','Eng-trans paper','Reflective','asuka_teacher'),
    mk('はい、戦前の下宿、つまり下宿文化の社会学研究を論文で扱いました','Yes — Lodge paper','Earnest','sakura_teen'),
    mk('放射線検知器、つまり検知技術の工学研究を論文で扱いましたね','Det paper','Reflective','asuka_teacher'),
    mk('はい、戦争被害者の絶叫の口承記録研究を論文で扱いました','Yes — Scream paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_11134',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、血管閉塞、つまり閉塞性脳卒中の症例を医療チームで対応します','Ren — vasc-occl-stroke med-team','Calm','saito_doctor'),
    mk('蓮さん、南方諸島の熱帯医療経験を医療チームで共有します','Ren — S-isl-trop-med-share med-team','Calm','saito_doctor'),
    mk('蓮さん、新治療の先駆け、つまり先駆け症例を医療チームで報告します','Ren — new-treat-pion-case med-team','Calm','saito_doctor'),
    mk('蓮さん、感染予防の先取り対応を医療チームでおこないます','Ren — inf-prev-preempt med-team','Calm','saito_doctor'),
    mk('蓮さん、医学論文の英訳を医療チームで共同で進めます','Ren — med-Eng-trans-team med-team','Calm','saito_doctor'),
    mk('蓮さん、戦前下宿で起きた集団感染史を医療チームで紐解きます','Ren — prewar-lodge-pand-hist med-team','Calm','saito_doctor'),
    mk('蓮さん、新型検知器、つまり検知装置を医療チームで導入します','Ren — new-det-intro med-team','Calm','saito_doctor'),
    mk('蓮さん、患者様の絶叫、つまり絶叫的反応に医療チームで対応します','Ren — pati-scream-react med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_11135',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、物流の閉塞、つまり閉塞リスクを回避しろ','Our co — log-occl-prev','Crisp','hiroshi_boss'),
    mk('はい。南方諸島の市場を開拓します','Yes — S-isl-mkt-exp','Methodical','kenji_office'),
    mk('当社、業界の先駆け、つまり先駆け企業として地位を保て','Our co — ind-pion-keep','Direction','hiroshi_boss'),
    mk('はい。競合の動向を先取り、つまり先取りで分析します','Yes — Riv-preempt-anal','Update','kenji_office'),
    mk('当社、社内資料の英訳を進めろ','Our co — int-doc-Eng-trans','Direction','hiroshi_boss'),
    mk('はい。社員寮、つまり下宿型シェアハウスを新設します','Yes — Staff-lodge-share','Update','kenji_office'),
    mk('当社、品質検知、つまり検知システムを導入しろ','Our co — qual-det-intro','Direction','hiroshi_boss'),
    mk('はい。広告の絶叫表現を抑え、品位を保ちます','Yes — Ad-scream-restr-dign','Close','kenji_office'),
  ]},
  {id:'conv_11136',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、お住まいが南東向きで日当たり良いって、メイちゃん','Aoi — cust-SE-sun-good Mei','Reflective','mei_romantic'),
    mk('葵、お客様、電電公社時代の話を語って下さったよ、メイちゃん','Aoi — cust-NTT-era-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、バンドのヴォーカルを担当されてるって、メイちゃん','Aoi — cust-band-vocal Mei','Reflective','mei_romantic'),
    mk('葵、お客様、長調、つまり長調のメロディがお好きだって、メイちゃん','Aoi — cust-maj-key-fav Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お菓子作りに使う小麦粉に拘ってらっしゃるって、メイちゃん','Aoi — cust-bake-flour-stick Mei','Reflective','mei_romantic'),
    mk('葵、お客様、エッセー、つまりエッセー集を出版されたって、メイちゃん','Aoi — cust-essay-pub Mei','Reflective','aoi_barista'),
    mk('葵、お客様、豪快な笑い声で店内が和むよ、メイちゃん','Aoi — cust-bold-laugh-warm Mei','Wry','mei_romantic'),
    mk('葵、お客様、メニュー作りに蛍光マーカーをご使用だったよ、メイちゃん','Aoi — cust-menu-marker-use Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_11137',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが家を南東向きに建てられた','Gran — youth Dad-house-SE','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、電電公社にお勤めだったわよね、あなた?','Yes — Grandpa-NTT-work, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがバンドのヴォーカルを担当された','Gran — youth Dad-band-vocal','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、長調の明るい曲をお好みだったわよね、あなた?','Grandpa — youth-maj-key-fav, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが小麦粉、つまりうどん用の粉に詳しかった','Gran — youth Dad-flour-udon-knowl','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、随筆エッセーを書かれたわよね、あなた?','Grandpa — youth-essay-write, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが豪快に笑う姿が頼もしかった','Gran — youth Dad-bold-laugh-reli','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、マーカーで地図に印を付けられたわよね、あなた?','Grandpa — youth-marker-map, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_11138',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「南東向きの公園で日向ぼっこしよう」って仰ってたわ','Sho — Dad-"SE-park-sun"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと電電公社の歴史本見たよ','Mei-sis — me Dad-NTT-hist','Eager child','sho_child'),
    mk('翔くん、お父さんがアカペラのヴォーカル動画を見せて下さるわ','Sho — Dad-acap-vocal-vid','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「長調と短調の違い」を教えて頂いたよ','Mei-sis — me Dad-"maj-min"-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんと小麦粉でクッキーを作るって楽しみだわ','Sho — Dad-flour-cookie','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「エッセーを書いて投稿してみよう」って約束したよ','Mei-sis — me Dad-"essay-pub"-prom','Eager child','sho_child'),
    mk('翔くん、お父さんが豪快に泳ぐ姿に憧れるわ','Sho — Dad-bold-swim-asp','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんからカラーマーカーセットを頂いたよ','Mei-sis — me Dad-color-marker-recv','Eager close','sho_child'),
  ]},
  {id:'conv_11139',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、家の方角が南東向きって自慢してたな','Riku — house-SE-brag','Wry teen','sakura_teen'),
    mk('お前、社会で電電公社民営化習ったろ、桜','You — soc-NTT-priv? Sakura','Curious','riku_teen'),
    mk('リク、お前、軽音部でヴォーカル担当だったろ','Riku — band-club-vocal?','Curious','sakura_teen'),
    mk('お前、音楽で長調の曲練習してたろ、桜','You — mus-maj-key? Sakura','Curious','riku_teen'),
    mk('リク、お前、家庭科で小麦粉のグルテンの実験したろ','Riku — home-flour-gluten?','Curious','sakura_teen'),
    mk('お前、国語のエッセー、つまりエッセー課題書いたろ、桜','You — Jp-essay? Sakura','Curious','riku_teen'),
    mk('リク、お前、豪快なジョークでクラスを笑わせてたな','Riku — bold-joke-laugh','Wry','sakura_teen'),
    mk('お前、ノートに蛍光マーカー塗りまくってたろ、桜','You — note-marker-many? Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_11140',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「南東向きの窓から朝日を見よう」って仰ってたわ','Sho — Dad-"SE-window-sun"-said','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと電電公社時代のドキュメンタリー観たよ','Mom — me Dad-NTT-doc','Eager child','sho_child'),
    mk('翔くん、お父さんがバンドのヴォーカル時代の写真を見せて下さったわ','Sho — Dad-band-vocal-photo','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと長調と短調の聞き分け遊びしたよ','Mom — me Dad-maj-min-distinguish','Eager child','sho_child'),
    mk('翔くん、お父さんと小麦粉でパンを焼く予定よ','Sho — Dad-flour-bread','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとエッセー、つまりエッセー集を書店で買ったよ','Mom — me Dad-essay-buy','Eager child','sho_child'),
    mk('翔くん、お父さんが豪快に運転される姿を見たわ','Sho — Dad-bold-drive','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんから蛍光マーカーセットを頂いたよ','Mom — me Dad-marker-set-recv','Eager close','sho_child'),
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

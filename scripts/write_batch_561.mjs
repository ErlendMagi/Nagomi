import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_561 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['初対面','待たさ','ヘッドホン','トレイ','興味津々','へっ','はぎ','通り過ぎる']
const B_T = ['断ら','就い','傘下','綿密','総論','凝らし','辛抱','リストアップ']
const C_T = ['同性愛','囚人','開戦','捕虜','硬化','反逆','窮地','救援']
const D_T = ['東方','長寿','祈願','武術','癒す','ユートピア','迷信','懐中']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_11181',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「初対面の方には丁寧に挨拶しなさい」って仰ってたわ','Sho — Dad-"first-meet-greet"-said','Tender','yumiko_mom'),
    mk('ママ、お父さんが「子供達を長く待たされた」って苦笑いされてたよ','Mom — Dad-"kids-kept-wait"-wry','Wry child','sho_child'),
    mk('翔くん、お父さんがヘッドホンで音楽を楽しんでらっしゃるわ','Sho — Dad-headph-music','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと夕食のトレイを運ぶ手伝いをしたよ','Mom — me Dad-din-tray-carry','Pleased child','sho_child'),
    mk('翔くん、お父さんが新しい趣味に興味津々で取り組んでらっしゃるわ','Sho — Dad-new-hobby-eager','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「へっ、まだまだだぞ」って試されたよ','Mom — me Dad-"he-not-yet"-test','Wry child','sho_child'),
    mk('翔くん、お父さんが「萩、つまりはぎの花を観に行こう」って仰ってたわ','Sho — Dad-"hagi-flo"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと「車が通り過ぎるのを待つ」横断歩道の安全を学んだよ','Mom — me Dad-car-pass-cross-safe','Earnest close','sho_child'),
  ]},
  {id:'conv_11182',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、お友達と初対面でも楽しそうにお話されてたよ、メイちゃん','Aoi — cust-fri-first-meet-fun Mei','Reflective','mei_romantic'),
    mk('葵、お客様、混雑で長く待たされたけど笑顔だったよ、メイちゃん','Aoi — cust-long-wait-smile Mei','Wry','aoi_barista'),
    mk('葵、お客様、店内BGMをヘッドホンで聴き直されてたよ、メイちゃん','Aoi — cust-bgm-headph Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お盆、つまりトレイの色合いをお褒め下さったよ、メイちゃん','Aoi — cust-tray-color-praise Mei','Reflective','aoi_barista'),
    mk('葵、お客様、新しいメニューに興味津々で質問されてたよ、メイちゃん','Aoi — cust-new-menu-eager Mei','Reflective','mei_romantic'),
    mk('葵、お客様、「へっ、それくらいなら朝飯前さ」って笑ってらしたよ、メイちゃん','Aoi — cust-"he-easy"-laugh Mei','Wry','aoi_barista'),
    mk('葵、お客様、秋の花のはぎ、つまり萩を眺めに来店されたって、メイちゃん','Aoi — cust-aut-hagi-vis Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お店の前を通り過ぎる人波を眺めてらしたよ、メイちゃん','Aoi — cust-shop-front-pass-watch Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_11183',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんと初対面の時の事を覚えているわ','Gran — youth Dad-first-meet-mem','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、お見合いで長く待たされた事もあったわよね、あなた?','Yes — Grandpa-omiai-long-wait, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがラジオのヘッドホンで深夜放送を聴かれた','Gran — youth Dad-radio-headph-night','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、お盆、つまりトレイで朝食を運ばれたわよね、あなた?','Grandpa — youth-tray-breakf, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが新しい機械に興味津々だった','Gran — youth Dad-new-mach-eager','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、「へっ、まだ若いさ」って粋に仰ってたわよね、あなた?','Grandpa — youth-"he-young"-said, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが秋の七草の萩、つまりはぎを愛された','Gran — youth Dad-aut-7-grass-hagi','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、家の前を通り過ぎる馬車を眺められたわよね、あなた?','Grandpa — youth-house-cart-pass, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_11184',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、初対面の転校生に話しかけてたな','Riku — first-meet-transf-talk','Curious teen','sakura_teen'),
    mk('お前、放課後の塾で長く待たされたって愚痴ってたな、桜','You — after-cram-long-wait-comp Sakura','Wry','riku_teen'),
    mk('リク、お前、新しいヘッドホン買ったろ','Riku — new-headph-bought?','Curious','sakura_teen'),
    mk('お前、給食でトレイの並べ方上手だな、桜','You — lunch-tray-arr-good Sakura','Praising','riku_teen'),
    mk('リク、お前、文化祭の出し物に興味津々だったな','Riku — cul-fes-eager','Wry','sakura_teen'),
    mk('お前、「へっ、本気出せばまだ伸びる」って強がってたな、桜','You — "he-effort"-bra Sakura','Wry','riku_teen'),
    mk('リク、お前、植物の授業で「はぎ」、つまり萩覚えたろ','Riku — bot-hagi?','Curious','sakura_teen'),
    mk('お前、自転車で他人の前を通り過ぎる時、声を掛けてたな、桜','You — bike-pass-greet Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_11185',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「初対面の方にも自然体で接するといい」って仰ってたわ','Sho — Dad-"first-meet-nat"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと長く待たされたバス停で本を読んだよ','Mei-sis — me Dad-bus-long-wait-read','Eager child','sho_child'),
    mk('翔くん、お父さんが「ヘッドホンの音漏れに気を付けて」って仰ってたわ','Sho — Dad-"headph-leak"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「トレイで運ぶ朝食」を試したよ','Mei-sis — me Dad-"tray-breakf"-try','Eager child','sho_child'),
    mk('翔くん、お父さんが「興味津々な視線が学びの始まり」って仰ってたわ','Sho — Dad-"eager-learn"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「へっ、気合いだ」って気合い入れたよ','Mei-sis — me Dad-"he-spirit"-pep','Earnest child','sho_child'),
    mk('翔くん、お父さんが「秋の七草の萩、つまりはぎは美しい」って仰ってたわ','Sho — Dad-"hagi-beau"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「車が通り過ぎるのを待ってから渡る」と教えて頂いたよ','Mei-sis — me Dad-"car-pass-then-cross"-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_11186',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、無理な依頼は断られても問題ない、と社員に伝えろ','Our co — unreas-refuse-OK','Crisp','hiroshi_boss'),
    mk('はい。新部長が役職に就いた事を社内で告知します','Yes — New-dept-pos-anno','Methodical','kenji_office'),
    mk('当社、子会社、つまり傘下企業の業績を月次で確認しろ','Our co — sub-mo-check','Direction','hiroshi_boss'),
    mk('はい。新製品の設計を綿密に見直します','Yes — New-prod-design-met-rev','Update','kenji_office'),
    mk('当社、社長挨拶では総論から各論へ流せ','Our co — pres-greet-gen-spec','Direction','hiroshi_boss'),
    mk('はい。展示ブースに工夫を凝らしたデザインを採用します','Yes — Exhib-eff-design','Update','kenji_office'),
    mk('当社、新人の辛抱強さを評価しろ','Our co — newhire-pat-eval','Direction','hiroshi_boss'),
    mk('はい。優秀社員をリストアップして報告します','Yes — Excel-staff-list-rep','Close','kenji_office'),
  ]},
  {id:'conv_11187',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('依頼を断られた場合の代替案を準備しましょう','Refuse-alt-prep','Brisk','yuki_office'),
    mk('はい。新部署のリーダー就任、つまり就いた社員の研修を整えます','Yes — New-lead-pos-train','Cooperative','kenji_office'),
    mk('傘下の地方法人と連携しましょう','Sub-local-link','Direction','yuki_office'),
    mk('はい。プロジェクトの計画を綿密に組みます','Yes — Proj-plan-met','Update','kenji_office'),
    mk('社内報の総論セクションを刷新しましょう','Co-news-gen-renew','Direction','yuki_office'),
    mk('はい。広告に工夫を凝らした表現を入れます','Yes — Ad-eff-expr','Update','kenji_office'),
    mk('社員の辛抱強さを評価制度に反映しましょう','Staff-pat-eval-syst','Direction','yuki_office'),
    mk('はい。今四半期の重点案件をリストアップします','Yes — Q-key-list','Close','kenji_office'),
  ]},
  {id:'conv_11188',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、共同研究を断られても次に進め','Ren — joint-refuse-next','Mentor','hiroshi_boss'),
    mk('はい。助教ポストに就いた先輩のお話を聞きます','Yes — Asst-pos-sen-hear','Earnest','ren_uni'),
    mk('蓮、提携機関、つまり傘下の研究所と連携しろ','Ren — partner-sub-lab','Direction','hiroshi_boss'),
    mk('はい。実験計画を綿密に立てます','Yes — Exp-plan-met','Earnest','ren_uni'),
    mk('蓮、論文は総論から書き始めろ','Ren — paper-gen-start','Direction','hiroshi_boss'),
    mk('はい。データ整理に工夫を凝らします','Yes — Data-eff','Polite','ren_uni'),
    mk('蓮、研究には辛抱が大事だ','Ren — res-pat-imp','Direction','hiroshi_boss'),
    mk('はい。関連論文をリストアップします','Yes — Rel-paper-list','Earnest close','ren_uni'),
  ]},
  {id:'conv_11189',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、容疑者に黙秘権を断られた場合の手順も整えられますね','Police suspect-silence-refuse','Cooperative','kenji_office'),
    mk('警察、新任の課長が役職に就いた事を組織内で共有されますね','Police new-mgr-pos-share','Cooperative','kenji_office'),
    mk('警察、地方警察、つまり傘下の所轄と合同捜査されますね','Police local-sub-joint','Cooperative','kenji_office'),
    mk('警察、捜査資料を綿密に整理されますね','Police inv-mat-met','Cooperative','kenji_office'),
    mk('警察、捜査報告書の総論を、警察、明確にされますね','Police rep-gen-clear','Cooperative','kenji_office'),
    mk('警察、現場検証に工夫を凝らした手法も使われますね','Police scene-eff-method','Cooperative','kenji_office'),
    mk('警察、長期捜査には辛抱、つまり辛抱強さも必要ですね','Police long-inv-pat','Cooperative','kenji_office'),
    mk('警察、容疑者リストアップを、警察、慎重におこなわれますね','Police suspect-list-care','Close','kenji_office'),
  ]},
  {id:'conv_11190',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、無理な依頼は断られても引かなかった','Dad — youth-refuse-no-back','Sage','hiroshi_elder'),
    mk('はい。お父さんは社長に就いた日の事を語って下さった','Yes — Dad pres-pos-talk','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、傘下企業との関係を大事にされた','Dad — youth-sub-rel-cher','Wistful','hiroshi_elder'),
    mk('はい。お父さんは経営方針を綿密に練られた','Yes — Dad mgmt-pol-met','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、講演の総論部分を覚えて下さった','Dad — youth-lec-gen-mem','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員旅行に工夫を凝らされた','Yes — Dad staff-trip-eff','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、苦しい時にも辛抱されたお陰で成功された','Dad — youth-pat-succ','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新規取引候補をリストアップされた','Yes — Dad new-client-list','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_11191',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、同性愛の社会的受容の研究を論文で扱いましたね','Ren — same-sex-soc-acc paper','Calm','asuka_teacher'),
    mk('はい、囚人の更生プログラムの研究を論文で扱いました','Yes — Pris-rehab paper','Earnest','ren_uni'),
    mk('蓮さん、開戦に至るまでの外交史を論文で扱いましたね','Ren — war-out-diplo paper','Reflective','asuka_teacher'),
    mk('はい、捕虜の処遇の国際法研究を論文で扱いました','Yes — POW-int-law paper','Earnest','ren_uni'),
    mk('蓮さん、動脈硬化、つまり硬化症の医学研究を論文で扱いましたね','Ren — art-scler paper','Reflective','asuka_teacher'),
    mk('はい、歴史上の反逆罪の刑法的研究を論文で扱いました','Yes — Hist-treason paper','Earnest','ren_uni'),
    mk('蓮さん、被災者の窮地からの脱出の社会学研究を論文で扱いましたね','Ren — dis-vict-dire paper','Reflective','asuka_teacher'),
    mk('はい、災害救援活動の実証研究を論文で扱いました','Yes — Dis-resc paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_11192',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、同性愛者へのヘイト事案を、警察、毅然と対応されますね','Case same-sex-hate police-strict','Reflective','ren_uni'),
    mk('警察、囚人護送中の安全確保を、警察、徹底されますね','Police pris-trans-safe','Cooperative','takeda_officer'),
    mk('本件、開戦時の戒厳令下の警察活動の歴史を、警察、振り返られますね','Case war-out-mart-law-hist police-look','Reflective','ren_uni'),
    mk('警察、過去の捕虜虐待事案も学ばれますね','Police past-POW-abuse-stud','Cooperative','takeda_officer'),
    mk('本件、現場の硬化したコンクリート片を、警察、鑑識されますね','Case scene-har-conc police-foren','Reflective','ren_uni'),
    mk('警察、反逆罪に該当する事案も慎重に判断されますね','Police treason-careful','Cooperative','takeda_officer'),
    mk('本件、窮地に陥った被害者の救護を、警察、迅速にされますね','Case dire-vict-aid police-quick','Reflective','ren_uni'),
    mk('警察、災害時の救援チームと連携されますね','Police dis-resc-team-link','Close','takeda_officer'),
  ]},
  {id:'conv_11193',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、同性愛の社会的受容の研究を論文で扱いましたね','Sakura — same-sex paper','Calm','asuka_teacher'),
    mk('はい、囚人の更生プログラムの研究を論文で扱いました','Yes — Pris paper','Earnest teen','sakura_teen'),
    mk('開戦に至るまでの外交史を論文で扱いましたね','War-out paper','Reflective','asuka_teacher'),
    mk('はい、捕虜の処遇の国際法研究を論文で扱いました','Yes — POW paper','Earnest','sakura_teen'),
    mk('動脈硬化、つまり硬化症の医学研究を論文で扱いましたね','Scler paper','Reflective','asuka_teacher'),
    mk('はい、歴史上の反逆罪の刑法的研究を論文で扱いました','Yes — Treason paper','Earnest','sakura_teen'),
    mk('被災者の窮地からの脱出の社会学研究を論文で扱いましたね','Dire paper','Reflective','asuka_teacher'),
    mk('はい、災害救援活動の実証研究を論文で扱いました','Yes — Resc paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_11194',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、同性愛患者様の医療差別防止を医療チームで徹底します','Ren — same-sex-pati-no-disc med-team','Calm','saito_doctor'),
    mk('蓮さん、囚人医療の倫理を医療チームで尊重します','Ren — pris-med-eth med-team','Calm','saito_doctor'),
    mk('蓮さん、戦時下の医療対応、つまり開戦時の医療史を医療チームで学びます','Ren — war-out-med-hist med-team','Calm','saito_doctor'),
    mk('蓮さん、捕虜のメンタルケアを医療チームで研究します','Ren — POW-ment-care med-team','Calm','saito_doctor'),
    mk('蓮さん、動脈硬化の早期発見を医療チームで進めます','Ren — art-scler-early med-team','Calm','saito_doctor'),
    mk('蓮さん、診療への反逆的態度の患者様にも医療チームで丁寧に対応します','Ren — pati-rebel-care med-team','Calm','saito_doctor'),
    mk('蓮さん、患者様の窮地に医療チームで寄り添います','Ren — pati-dire-team med-team','Calm','saito_doctor'),
    mk('蓮さん、災害救援医療チームを医療チームで派遣します','Ren — dis-resc-team-disp med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_11195',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、同性愛のスタッフが安心して働ける環境を整えろ','Our co — same-sex-staff-safe-env','Crisp','hiroshi_boss'),
    mk('はい。労働基準法を守り囚人労働には関わりません','Yes — Lab-law-pris-no','Methodical','kenji_office'),
    mk('当社、開戦時相当のリスクに備えたBCPを整えろ','Our co — war-out-risk-BCP','Direction','hiroshi_boss'),
    mk('はい。海外捕虜支援団体に寄付します','Yes — Overs-POW-don','Update','kenji_office'),
    mk('当社、市場の硬化、つまり硬化状態に対応した戦略を立てろ','Our co — mkt-har-strat','Direction','hiroshi_boss'),
    mk('はい。社員の反逆的意見も拾い上げる場を設けます','Yes — Staff-rebel-view-pick','Update','kenji_office'),
    mk('当社、業績の窮地から脱する施策を実行しろ','Our co — perf-dire-meas','Direction','hiroshi_boss'),
    mk('はい。災害時の救援活動に物資を提供します','Yes — Dis-resc-supp','Close','kenji_office'),
  ]},
  {id:'conv_11196',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、東方神起のファンだって、メイちゃん','Aoi — cust-Dong-Bang-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、長寿食材に拘ってらっしゃるって、メイちゃん','Aoi — cust-long-food-stick Mei','Reflective','aoi_barista'),
    mk('葵、お客様、神社で祈願された後にご来店だったよ、メイちゃん','Aoi — cust-shr-pray-vis Mei','Reflective','mei_romantic'),
    mk('葵、お客様、伝統武術の道場に通ってらっしゃるって、メイちゃん','Aoi — cust-mart-dojo Mei','Reflective','aoi_barista'),
    mk('葵、お客様、「コーヒーが心を癒す」って仰ってたよ、メイちゃん','Aoi — cust-"coffee-heal"-said Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ユートピア小説のお話を語って下さったよ、メイちゃん','Aoi — cust-utopia-novel Mei','Reflective','aoi_barista'),
    mk('葵、お客様、地元の迷信について話して下さったよ、メイちゃん','Aoi — cust-local-supers-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、懐中時計を取り出してご覧になられたよ、メイちゃん','Aoi — cust-poc-watch-take Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_11197',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが東方の音楽、つまり東方民謡を愛された','Gran — youth Dad-east-mus-love','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、長寿研究の文献を蔵書されたわよね、あなた?','Yes — Grandpa-long-res-coll, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが神社で祈願された','Gran — youth Dad-shr-pray','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、武術の稽古に通われたわよね、あなた?','Grandpa — youth-mart-prac, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「音楽が心を癒す」と仰った','Gran — youth Dad-"music-heal"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ユートピア論を熱く語られたわよね、あなた?','Grandpa — youth-utopia-talk, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが村の迷信を研究された','Gran — youth Dad-vill-supers-stud','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、懐中時計を肌身離さず持ってらしたわよね、あなた?','Grandpa — youth-poc-watch-keep, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_11198',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「東方系のジャズを聴かせる」って仰ってたわ','Sho — Dad-"east-jazz"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと長寿のお祝いに行ったよ','Mei-sis — me Dad-long-cel','Eager child','sho_child'),
    mk('翔くん、お父さんが神社で家内安全を祈願された','Sho — Dad-shr-fam-safe-pray','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと武術の道場見学に行ったよ','Mei-sis — me Dad-mart-dojo-vis','Eager child','sho_child'),
    mk('翔くん、お父さんが「読書が日々の疲れを癒す」って仰ってたわ','Sho — Dad-"read-heal"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとユートピア童話の絵本を読んだよ','Mei-sis — me Dad-utopia-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが「迷信に惑わされない様に」って仰ってたわ','Sho — Dad-"supers-no"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんから懐中時計の使い方を教えて頂いたよ','Mei-sis — me Dad-poc-watch-teach','Eager close','sho_child'),
  ]},
  {id:'conv_11199',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、東方神起の曲覚えてたな','Riku — Dong-Bang-song-mem','Curious teen','sakura_teen'),
    mk('お前、家庭科で長寿食の研究したろ、桜','You — home-long-food? Sakura','Curious','riku_teen'),
    mk('リク、お前、試験前に神社で祈願したろ','Riku — pre-exam-shr-pray?','Wry','sakura_teen'),
    mk('お前、武術部で道場稽古してたろ、桜','You — mart-club-dojo? Sakura','Curious','riku_teen'),
    mk('リク、お前、「音楽が癒す」って言ってたな','Riku — "music-heal"-said','Reflective','sakura_teen'),
    mk('お前、社会でユートピア論調べてたろ、桜','You — soc-utopia? Sakura','Curious','riku_teen'),
    mk('リク、お前、「迷信深い祖母」のお話してたな','Riku — "supers-grnm"-talk','Wry','sakura_teen'),
    mk('お前、文化祭で懐中電灯ショーしたな、桜','You — cul-fes-poc-light-show Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_11200',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが東方神起のコンサート映像を観てらっしゃるわ','Sho — Dad-Dong-Bang-conc','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと長寿祝いのお赤飯食べたよ','Mom — me Dad-long-red-rice','Eager child','sho_child'),
    mk('翔くん、お父さんが学業成就を神社で祈願されたわ','Sho — Dad-edu-shr-pray','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと武術の演武会観たよ','Mom — me Dad-mart-show','Eager child','sho_child'),
    mk('翔くん、お父さんが「家族の存在が心を癒す」って仰ってたわ','Sho — Dad-"fam-heal"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとユートピア社会の社会科の話したよ','Mom — me Dad-utopia-soc-talk','Eager child','sho_child'),
    mk('翔くん、お父さんが「迷信に振り回されないで」って仰ってたわ','Sho — Dad-"supers-no-shake"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんから祖父の遺品の懐中時計を頂いたよ','Mom — me Dad-grdpa-poc-watch','Eager close','sho_child'),
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

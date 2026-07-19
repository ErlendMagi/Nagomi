import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_524 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['スナップ','ソックス','メッシュ','１番','合コン','酔っ払っ','愛嬌','おしっこ']
const B_T = ['キロメートル','秒間','車掌','電柱','ノース','サウス','サッシ','リール']
const C_T = ['於け','探訪','無実','乞う','絶た','幾多','慶応','変調']
const D_T = ['マウンテン','ロハス','ベア','アルト','デュオ','ゴースト','オーソドックス','スピリット']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10441',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが運動会のスナップ写真を撮って下さったわよ','Sho — Dad-sports-snap-took','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんに新しいソックスを買って頂いたよ','Mom — me Dad-new-socks-bought','Pleased child','sho_child'),
    mk('翔くん、お父さんがメッシュのキャップを買って下さったわ','Sho — Dad-mesh-cap-bought','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「１番大事なのは家族」って教えて頂いたよ','Mom — me Dad-"1st-imp-fam"-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが「合コンには行かない」って若い頃から仰ってたわ','Sho — Dad-"goukon-no"-said','Wry','yumiko_mom'),
    mk('ママ、ぼく、お父さんが「酔っ払っちゃダメ」って仰ったよ','Mom — me Dad-"drunk-no"-said','Earnest child','sho_child'),
    mk('翔くん、お父さんが「愛嬌は何よりの武器」って仰ってたわ','Sho — Dad-"charm-weapon"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「おしっこは我慢しちゃダメ」って教えて頂いたよ','Mom — me Dad-"pee-no-hold"-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_10442',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ご家族のスナップ写真を見せて下さったよ、メイちゃん','Aoi — cust-fam-snap-show Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ウールソックスを編んでらしたよ、メイちゃん','Aoi — cust-wool-socks-knit Mei','Reflective','aoi_barista'),
    mk('葵、お客様、メッシュ素材のお洋服を着てらしたよ、メイちゃん','Aoi — cust-mesh-clothes-wear Mei','Reflective','mei_romantic'),
    mk('葵、お客様、「お店の１番人気を下さい」って仰ったよ、メイちゃん','Aoi — cust-"1st-pop"-said Mei','Reflective','aoi_barista'),
    mk('葵、お客様、若い頃、合コン幹事をされてたって笑ってらしたよ、メイちゃん','Aoi — cust-youth-goukon-host Mei','Wry','mei_romantic'),
    mk('葵、お客様、昨日酔っ払っちゃったって笑ってらしたよ、メイちゃん','Aoi — cust-yest-drunk-laugh Mei','Wry','aoi_barista'),
    mk('葵、お客様、店員の愛嬌のある接客を褒めて下さったよ、メイちゃん','Aoi — cust-staff-charm-praise Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お子様の「おしっこ」のお話を笑顔で語って下さったよ、メイちゃん','Aoi — cust-kid-pee-smile Mei','Wry close','aoi_barista'),
  ]},
  {id:'conv_10443',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがスナップ写真を毎日撮られた','Gran — youth Dad-snap-daily','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ウールソックスを毎冬編まれたわよね、あなた?','Yes — Grandpa-wool-socks-knit, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがメッシュの帽子を愛用された','Gran — youth Dad-mesh-cap-fav','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、職場で１番の働き者と呼ばれたわよね、あなた?','Grandpa — work-1st-hard-call, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは合コンに興味を持たれなかった','Gran — youth Dad-goukon-no-int','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お酒で酔っ払った事は一度も無かったわよね、あなた?','Grandpa — drunk-never, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは愛嬌のあるお客様を大事にされた','Gran — youth Dad-charm-cust-cher','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫のおしっこの世話まで下さったわよね、あなた?','Grandpa — grandkid-pee-care, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10444',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、文化祭でスナップ写真撮りまくってたな','Riku — cul-fes-snap-many','Wry teen','sakura_teen'),
    mk('お前、ハイソックスばっか履いてたな、桜','You — high-socks-only Sakura','Wry','riku_teen'),
    mk('リク、お前のジャージ、メッシュ素材で涼しそうだな','Riku — your-jersey-mesh-cool','Curious','sakura_teen'),
    mk('お前、クラスで成績１番だったろ、桜','You — class-1st-grade? Sakura','Wry','riku_teen'),
    mk('リク、お前、大学生の従兄から合コン話聞いたろ','Riku — uni-cous-goukon-story?','Curious','sakura_teen'),
    mk('お前、修学旅行先で誰か酔っ払ってたって?桜','You — sch-trip-someone-drunk? Sakura','Wry','riku_teen'),
    mk('リク、お前、新入生に愛嬌振りまいてたな','Riku — new-stud-charm-spread','Wry','sakura_teen'),
    mk('お前、小学生の時、おしっこ漏らしたって話してたろ、桜','You — elem-pee-leak? Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10445',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがスナップ写真を上手に撮って下さるわよ','Sho — Dad-snap-good-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんからソックスを頂いたよ','Mei-sis — me Dad-socks-recv','Eager child','sho_child'),
    mk('翔くん、お父さんがメッシュのバッグを下さったわ','Sho — Dad-mesh-bag-gave','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「１番は健康」って教えて頂いたよ','Mei-sis — me Dad-"1st-health"-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが「合コンより家族の時間」って仰ってたわ','Sho — Dad-"fam-time"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「酔っ払った人には近付かない」って教えて頂いたよ','Mei-sis — me Dad-"drunk-avoid"-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが「愛嬌のある人になれ」って仰ってたわ','Sho — Dad-"charm-pers-be"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「おしっこは早めに」って教えて頂いたよ','Mei-sis — me Dad-"pee-early"-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_10446',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、配送センターから半径五キロメートルを商圏とせよ','Our co — deliv-5km-area','Crisp','hiroshi_boss'),
    mk('はい。受発注の処理時間を秒間単位で計測します','Yes — Order-proc-sec-meas','Methodical','kenji_office'),
    mk('当社、社員旅行の電車に車掌経験者を同乗させろ','Our co — staff-trip-cond-exp','Direction','hiroshi_boss'),
    mk('はい。営業所近くの電柱の広告を更新します','Yes — Branch-pole-ad-renew','Update','kenji_office'),
    mk('当社、北米支社、つまりノース支社の展開を進めろ','Our co — N-Am-North-branch-exp','Direction','hiroshi_boss'),
    mk('はい。南米支社、つまりサウス拠点の調査を始めます','Yes — S-Am-South-base-surv','Update','kenji_office'),
    mk('当社、本社ビルのサッシ交換を計画しろ','Our co — HQ-sash-rep-plan','Direction','hiroshi_boss'),
    mk('はい。広告撮影のリール素材を制作します','Yes — Ad-reel-mat-prod','Close','kenji_office'),
  ]},
  {id:'conv_10447',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('物流ルートの総距離をキロメートル単位で集計しましょう','Log-rt-km-aggreg','Brisk','yuki_office'),
    mk('はい。サーバの応答を秒間単位で監視します','Yes — Serv-resp-sec-mon','Cooperative','kenji_office'),
    mk('社員旅行で車掌アナウンスを録音させてもらいましょう','Staff-trip-cond-ann-rec','Direction','yuki_office'),
    mk('はい。倒れた電柱の地域に支援物資を送ります','Yes — Fall-pole-area-aid','Update','kenji_office'),
    mk('北米のノースカロライナ支社と連携しましょう','N-Am-North-Car-link','Direction','yuki_office'),
    mk('はい。南東部、つまりサウスイースト地域に営業所を開きます','Yes — SE-South-East-branch','Update','kenji_office'),
    mk('社内サッシの結露対策を急ぎましょう','Off-sash-cond-urg','Direction','yuki_office'),
    mk('はい。広告動画のリール編集を進めます','Yes — Ad-vid-reel-ed','Close','kenji_office'),
  ]},
  {id:'conv_10448',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究対象地までの距離をキロメートルで記せ','Ren — res-site-km-rec','Mentor','hiroshi_boss'),
    mk('はい。実験の秒間サンプリングを徹底します','Yes — Exp-sec-samp-thor','Earnest','ren_uni'),
    mk('蓮、鉄道輸送の車掌役割の研究を読め','Ren — rail-tran-cond-role-read','Direction','hiroshi_boss'),
    mk('はい。送電網の電柱配置の論文を読みます','Yes — Power-grid-pole-paper','Earnest','ren_uni'),
    mk('蓮、北極研究のノース極隊と連絡を取れ','Ren — N-pole-North-team-contact','Direction','hiroshi_boss'),
    mk('はい。南極研究のサウス極隊の論文を読みます','Yes — S-pole-South-team-paper','Polite','ren_uni'),
    mk('蓮、研究室のサッシ気密性を確認しろ','Ren — lab-sash-airt-check','Direction','hiroshi_boss'),
    mk('はい。撮影機材のリール調整を整えます','Yes — Cam-reel-adj-set','Earnest close','ren_uni'),
  ]},
  {id:'conv_10449',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、現場までキロメートル単位で進路を確認されますね','Police scene-km-route-check','Cooperative','kenji_office'),
    mk('警察、防犯カメラの秒間記録を分析されますね','Police prev-cam-sec-rec-anal','Cooperative','kenji_office'),
    mk('警察、駅構内で車掌と連携されますね','Police stat-cond-link','Cooperative','kenji_office'),
    mk('警察、倒れた電柱の現場の安全確保もされますね','Police fall-pole-safe-secure','Cooperative','kenji_office'),
    mk('警察、ノース署、つまり北署と合同捜査されますね','Police North-stat-N-stat-joint','Cooperative','kenji_office'),
    mk('警察、サウス署、つまり南署とも情報共有されますね','Police South-stat-S-stat-share','Cooperative','kenji_office'),
    mk('警察、建物のサッシの破損現場も検証されますね','Police bldg-sash-dmg-verify','Cooperative','kenji_office'),
    mk('警察、現場記録のリール、つまりロールフィルムも保存されますね','Police scene-reel-roll-film-save','Close','kenji_office'),
  ]},
  {id:'conv_10450',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、店舗まで毎日五キロメートル歩かれた','Dad — found-store-5km-walk','Sage','hiroshi_elder'),
    mk('はい。お父さんは事業の判断を秒間単位で下された','Yes — Dad biz-dec-sec','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、鉄道の車掌の方々と親しかった','Dad — youth rail-cond-close','Wistful','hiroshi_elder'),
    mk('はい。お父さんは台風で倒れた電柱の復旧を支援された','Yes — Dad typh-fall-pole-aid','Reflective','hiroshi_boss'),
    mk('お父さん、北米のノース支社を一から開かれた','Dad — N-Am-North-branch-scratch','Wistful','hiroshi_elder'),
    mk('はい。お父さんは南米のサウス拠点でも信頼を築かれた','Yes — Dad S-Am-South-base-trust','Reflective','hiroshi_boss'),
    mk('お父さん、本社のサッシ職人と長年お付き合いされた','Dad — HQ-sash-art-long','Wistful','hiroshi_elder'),
    mk('はい。お父さんは8ミリリールの広告映像を残された','Yes — Dad 8mm-reel-ad-vid-leave','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10451',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、戦時下に於ける学術の状況を論文で扱いましたね','Ren — war-acad-cond paper','Calm','asuka_teacher'),
    mk('はい、伝統工芸の里の探訪記事を論文で扱いました','Yes — Trad-craft-vill-vis paper','Earnest','ren_uni'),
    mk('蓮さん、冤罪、つまり無実の罪の事例を論文で扱いましたね','Ren — false-acc-innoc paper','Reflective','asuka_teacher'),
    mk('はい、被害者ご家族が支援を乞う声明を論文で扱いました','Yes — Vict-fam-aid-req-state paper','Earnest','ren_uni'),
    mk('蓮さん、戦時下で連絡が絶たれた記録を論文で扱いましたね','Ren — war-conn-cut-rec paper','Reflective','asuka_teacher'),
    mk('はい、明治期の幾多の苦難の記録を論文で扱いました','Yes — Meiji-many-hard-rec paper','Earnest','ren_uni'),
    mk('蓮さん、慶応年間の社会変動の研究を論文で扱いましたね','Ren — Keio-era-soc-chg paper','Reflective','asuka_teacher'),
    mk('はい、患者の体調変調の医療記録を論文で扱いました','Yes — Pati-cond-chg-med-rec paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10452',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、現場に於ける証拠の保全を、警察、徹底されますね','Case scene-evid-pres police-thor','Reflective','ren_uni'),
    mk('警察、現場周辺の探訪、つまり聞き込みもされますね','Police scene-vis-canv','Cooperative','takeda_officer'),
    mk('本件、被疑者が無実を主張する局面を、警察、慎重に判断されますね','Case suspect-innoc-claim police-careful','Reflective','ren_uni'),
    mk('警察、ご遺族の協力を乞う声明も発表されますね','Police bereav-coop-req-state','Cooperative','takeda_officer'),
    mk('本件、連絡が絶たれた被害者の追跡を、警察、続けられますね','Case cont-cut-vict-track police-cont','Reflective','ren_uni'),
    mk('警察、幾多の困難な事件を解決して来られましたね','Police many-hard-case-solv','Cooperative','takeda_officer'),
    mk('本件、慶応大学の専門家にも、警察、ご意見を仰がれますね','Case Keio-univ-expert police-ask','Reflective','ren_uni'),
    mk('警察、被害者の体調変調を、医療と連携して確認されますね','Police vict-cond-chg-med-link','Close','takeda_officer'),
  ]},
  {id:'conv_10453',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、戦時下に於ける学術の状況を論文で扱いましたね','Sakura — war-acad-cond paper','Calm','asuka_teacher'),
    mk('はい、伝統工芸の里の探訪記事を論文で扱いました','Yes — Trad-craft-vill paper','Earnest teen','sakura_teen'),
    mk('冤罪、つまり無実の罪の事例を論文で扱いましたね','False-acc-innoc paper','Reflective','asuka_teacher'),
    mk('はい、被害者ご家族が支援を乞う声明を論文で扱いました','Yes — Vict-fam-aid-req paper','Earnest','sakura_teen'),
    mk('戦時下で連絡が絶たれた記録を論文で扱いましたね','War-conn-cut paper','Reflective','asuka_teacher'),
    mk('はい、明治期の幾多の苦難の記録を論文で扱いました','Yes — Meiji-many-hard paper','Earnest','sakura_teen'),
    mk('慶応年間の社会変動の研究を論文で扱いましたね','Keio-era paper','Reflective','asuka_teacher'),
    mk('はい、患者の体調変調の医療記録を論文で扱いました','Yes — Pati-cond-chg paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10454',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、感染症蔓延下に於ける診療体制を医療チームで整えます','Ren — pand-care-set med-team','Calm','saito_doctor'),
    mk('蓮さん、地域医療の現場探訪を医療チームでおこないます','Ren — local-med-site-vis med-team','Calm','saito_doctor'),
    mk('蓮さん、医療過誤の疑いを否定する、つまり無実を証明する記録を医療チームで残します','Ren — med-err-deny-innoc-prove med-team','Calm','saito_doctor'),
    mk('蓮さん、ご家族が早期面会を乞う場合、医療チームで配慮します','Ren — fam-early-visit-req med-team','Calm','saito_doctor'),
    mk('蓮さん、患者の呼吸が絶たれない様、医療チームで管理します','Ren — pati-breath-cut-no med-team','Calm','saito_doctor'),
    mk('幾多の難症例を、貴院、扱って来られましたね、先生','Many-diff-case your-hosp, sensei','Reflective','ren_uni'),
    mk('蓮さん、慶応の医学校との連携を医療チームで深めます','Ren — Keio-med-sch-link med-team','Calm','saito_doctor'),
    mk('蓮さん、患者の体調変調を医療チームで即時に把握します','Ren — pati-cond-chg-imm-detect med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_10455',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、契約条項に於ける責任範囲を弁護士に確認させろ','Our co — contr-resp-law-check','Crisp','hiroshi_boss'),
    mk('はい。工場現場の探訪記事を社内報に載せます','Yes — Fact-vis-art-news','Methodical','kenji_office'),
    mk('当社、品質クレームに対し無実なら、誠実に説明しろ','Our co — qual-claim-innoc-honest-expl','Direction','hiroshi_boss'),
    mk('はい。取引先からの早期納品を乞う声に応えます','Yes — Client-early-deliv-req-resp','Update','kenji_office'),
    mk('当社、サプライチェーンが絶たれない様、リスク管理を強化しろ','Our co — supply-cut-no-risk-strong','Direction','hiroshi_boss'),
    mk('はい。幾多の経済危機を乗り越えた経験を活かします','Yes — Many-econ-crisis-exp-use','Update','kenji_office'),
    mk('当社、慶応大学の経済学者を顧問に招け','Our co — Keio-econ-adv-inv','Direction','hiroshi_boss'),
    mk('はい。市場の急な変調にも素早く対応します','Yes — Mkt-sud-chg-quick-resp','Close','kenji_office'),
  ]},
  {id:'conv_10456',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、マウンテンバイクで通勤されてるって、メイちゃん','Aoi — cust-mtn-bike-comm Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ロハスな生活を実践されてるって、メイちゃん','Aoi — cust-LOHAS-life-prac Mei','Reflective','aoi_barista'),
    mk('葵、お客様、テディベアのコレクターだって、メイちゃん','Aoi — cust-Teddy-bear-coll Mei','Reflective','mei_romantic'),
    mk('葵、お客様、合唱でアルトのパートを担当されてるって、メイちゃん','Aoi — cust-chor-alto-part Mei','Reflective','aoi_barista'),
    mk('葵、お客様、デュオで音楽活動をされてるって、メイちゃん','Aoi — cust-duo-music-act Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ゴーストライターのお仕事をされてるって、メイちゃん','Aoi — cust-ghost-writ-work Mei','Reflective','aoi_barista'),
    mk('葵、お客様、オーソドックスな喫茶店がお好きだって、メイちゃん','Aoi — cust-orth-cafe-like Mei','Reflective','mei_romantic'),
    mk('葵、お客様、チームのスピリットを大事にされてるって、メイちゃん','Aoi — cust-team-spir-cher Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10457',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがマウンテンの登山を楽しまれた','Gran — youth Dad-mtn-climb','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ロハスな農作業を続けて来られたわよね、あなた?','Yes — Grandpa-LOHAS-farm-cont, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが私にテディベアを下さった','Gran — youth Dad-me-Teddy-bear','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、合唱団でアルトの方々と歌われたわよね、あなた?','Grandpa — chor-alto-sang, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが私と歌のデュオを組まれた','Gran — youth Dad-me-song-duo','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、映画でゴースト役を演じる夢を語られたわよね、あなた?','Grandpa — film-ghost-role-dream, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはオーソドックスな仕事の進め方を貫かれた','Gran — youth Dad-orth-way-stick','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、家族のスピリットを何より大事にされたわよね、あなた?','Grandpa — fam-spir-cher, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10458',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがマウンテンの写真集を見せて下さるそうよ','Sho — Dad-mtn-photo-show','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとロハスな菜園を作ったよ','Mei-sis — me Dad-LOHAS-veg-gard','Eager child','sho_child'),
    mk('翔くん、お父さんがテディベアを下さったわ','Sho — Dad-Teddy-bear-gave','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんからアルトリコーダーを頂いたよ','Mei-sis — me Dad-alto-rec-recv','Eager child','sho_child'),
    mk('翔くん、お父さんとお母様が音楽のデュオを組まれたわ','Sho — Dad-Mom-music-duo','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと不思議なゴーストの絵本を読んだよ','Mei-sis — me Dad-myst-ghost-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがオーソドックスな囲碁を教えて下さってるわ','Sho — Dad-orth-go-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、お父さんが「家族のスピリット」って仰ってたよ','Mei-sis — Dad-"fam-spir"-said','Eager close','sho_child'),
  ]},
  {id:'conv_10459',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、マウンテンバイク部入ったろ','Riku — mtn-bike-club-join?','Curious teen','sakura_teen'),
    mk('お前、ロハスとか言い出したな、桜','You — LOHAS-say-now Sakura','Wry','riku_teen'),
    mk('リク、お前、ベア似のぬいぐるみ持ってるよな','Riku — bear-plush-have','Wry','sakura_teen'),
    mk('お前、合唱でアルトパートだったろ、桜','You — chor-alto-part? Sakura','Curious','riku_teen'),
    mk('リク、お前、文化祭でデュオで歌ってたな','Riku — cul-fes-duo-sing','Curious','sakura_teen'),
    mk('お前、ゴーストもの映画ばっか観てたな、桜','You — ghost-film-only Sakura','Wry','riku_teen'),
    mk('リク、お前、オーソドックスな受験勉強してるな','Riku — orth-exam-study','Curious','sakura_teen'),
    mk('お前、部のチームスピリット語ってたな、桜','You — club-team-spir-talk Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10460',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがマウンテンの絵本を読んで下さるわよ','Sho — Dad-mtn-pic-read','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとロハスな野菜炒めを作ったよ','Mom — me Dad-LOHAS-veg-stir','Eager child','sho_child'),
    mk('翔くん、お父さんがクマのベア型ケーキを焼いて下さったわ','Sho — Dad-bear-cake-baked','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとアルトサックスを聴いたよ','Mom — me Dad-alto-sax','Eager child','sho_child'),
    mk('翔くん、お父さんと従姉妹さんがピアノのデュオをされるわ','Sho — Dad-cous-piano-duo','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと優しいゴーストの絵本読んだよ','Mom — me Dad-kind-ghost-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがオーソドックスな日本食を作って下さるわ','Sho — Dad-orth-Jp-food','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「家族のスピリットが宝物」って教えて頂いたよ','Mom — me Dad-"fam-spir-treas"-teach','Eager close','sho_child'),
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

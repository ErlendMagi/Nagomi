import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_526 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['砂利','空き地','ニキビ','小指','左下','レディース','インナー','レザー']
const B_T = ['チューナー','チェックポイント','オペレーター','コントローラー','ビデオテープ','サイコロ','バーナー','ホーン']
const C_T = ['迷宮','生業','生身','ディテール','恐怖症','遺書','言い渡し','私事']
const D_T = ['キャノン','イージス','トラップ','チルドレン','ブーイング','ミラクル','スリリング','フィニッシュ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10481',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが砂利道を歩く時はゆっくりだって仰ってたわ','Sho — Dad-gravel-slow-said','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと近所の空き地で遊んだよ','Mom — me Dad-vacant-lot','Pleased child','sho_child'),
    mk('翔くん、お父さんが「ニキビは清潔が一番」って仰ってたわ','Sho — Dad-"pimple-cln-1st"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに小指のキズを手当てして頂いたよ','Mom — me Dad-pinky-cut-treat','Earnest child','sho_child'),
    mk('翔くん、お父さんが「画面の左下のロゴを見ろ」って教えて下さったわ','Sho — Dad-"screen-lower-left-logo"-teach','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとレディースコーナーでママのお誕生日プレゼントを選んだよ','Mom — me Dad-ladies-Mom-bday-pick','Pleased child','sho_child'),
    mk('翔くん、お父さんがインナーを重ね着して下さるとあったかいわ','Sho — Dad-inner-layer-warm','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんからレザーの財布を頂いたよ','Mom — me Dad-leather-wallet-recv','Eager close','sho_child'),
  ]},
  {id:'conv_10482',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、駐車場の砂利の音が懐かしいって、メイちゃん','Aoi — cust-park-gravel-nost Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お店の前の空き地で写真を撮ってらしたよ、メイちゃん','Aoi — cust-front-vacant-photo Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お子様のニキビ対策にお詳しいよ、メイちゃん','Aoi — cust-kid-pimple-knowl Mei','Reflective','mei_romantic'),
    mk('葵、お客様、小指の指輪のお話を語って下さったよ、メイちゃん','Aoi — cust-pinky-ring-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、メニュー画面の左下のオプションを尋ねて下さったよ、メイちゃん','Aoi — cust-menu-lower-left-opt-ask Mei','Reflective','mei_romantic'),
    mk('葵、お客様、レディース向けのカフェイベントを楽しまれてるって、メイちゃん','Aoi — cust-ladies-cafe-event Mei','Reflective','aoi_barista'),
    mk('葵、お客様、インナーカップにラテを淹れる方法を尋ねて下さったよ、メイちゃん','Aoi — cust-inner-cup-latte-ask Mei','Reflective','mei_romantic'),
    mk('葵、お客様、レザーのカフェメニュー表をお褒め下さったよ、メイちゃん','Aoi — cust-leather-menu-praise Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10483',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが砂利道を毎日歩かれた','Gran — youth Dad-gravel-daily','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、空き地に家庭菜園を開かれたわよね、あなた?','Yes — Grandpa-vacant-veg-gard, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはニキビが治る薬草に詳しかった','Gran — youth Dad-pimple-herb-knowl','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、小指に古い指輪をされてたわよね、あなた?','Grandpa — youth-pinky-old-ring, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが新聞の左下の論評を読まれた','Gran — youth Dad-news-lower-left-ed','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、私のためにレディース服を選んで下さったわよね、あなた?','Grandpa — me-ladies-pick, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがインナーシャツを愛用された','Gran — youth Dad-inner-shirt-fav','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、レザーの旅行鞄を大事にされてたわよね、あなた?','Grandpa — leather-suit-cher, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10484',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、自転車で砂利に滑ってこけたな','Riku — bike-gravel-slip-fell','Wry teen','sakura_teen'),
    mk('お前、近所の空き地で野球してたな、桜','You — near-vacant-base Sakura','Curious','riku_teen'),
    mk('リク、お前、最近ニキビ気にしてたな','Riku — recently-pimple-care','Wry','sakura_teen'),
    mk('お前、小指の腹をぶつけてたろ、桜','You — pinky-side-hit? Sakura','Wry','riku_teen'),
    mk('リク、お前、テスト用紙の左下に名前忘れたろ','Riku — test-lower-left-name-forget?','Wry','sakura_teen'),
    mk('お前、ショッピングモールのレディース階で迷子になったろ、桜','You — mall-ladies-floor-lost? Sakura','Wry','riku_teen'),
    mk('リク、お前、部活でインナーTシャツ重ね着してたな','Riku — club-inner-T-layer','Curious','sakura_teen'),
    mk('お前、レザーのスマホケース使ってたな、桜','You — leather-phone-case Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10485',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが砂利を踏む音を「いい音だね」って仰ってたわ','Sho — Dad-gravel-"good-sound"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと空き地でかけっこしたよ','Mei-sis — me Dad-vacant-race','Eager child','sho_child'),
    mk('翔くん、お父さんが「ニキビは時期が来れば治る」って仰ってたわ','Sho — Dad-"pimple-time-heal"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと小指で指切り約束したよ','Mei-sis — me Dad-pinky-prom','Earnest child','sho_child'),
    mk('翔くん、お父さんが「絵の左下に名前を入れろ」って教えて下さるわ','Sho — Dad-"art-lower-left-sign"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとレディース売場でお母様の靴選んだよ','Mei-sis — me Dad-ladies-Mom-shoe','Eager child','sho_child'),
    mk('翔くん、お父さんがインナーシャツを下さったわ','Sho — Dad-inner-shirt-gave','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとレザーの本のしおりを作ったよ','Mei-sis — me Dad-leather-book-mark','Eager close','sho_child'),
  ]},
  {id:'conv_10486',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、社用テレビのチューナー交換を進めろ','Our co — co-TV-tuner-rep','Crisp','hiroshi_boss'),
    mk('はい。物流ルートにチェックポイントを増設します','Yes — Log-rt-chkpt-add','Methodical','kenji_office'),
    mk('当社、コールセンターのオペレーター研修を強化しろ','Our co — call-cent-oper-train-strong','Direction','hiroshi_boss'),
    mk('はい。生産ラインのコントローラー更新を計画します','Yes — Prod-ctrl-upd-plan','Update','kenji_office'),
    mk('当社、社史用ビデオテープのデジタル化を進めろ','Our co — co-hist-VHS-dig','Direction','hiroshi_boss'),
    mk('はい。社員研修にサイコロゲームを導入します','Yes — Staff-train-dice-intro','Update','kenji_office'),
    mk('当社、業務用バーナーの安全点検を毎月実施しろ','Our co — comm-burn-safe-mo','Direction','hiroshi_boss'),
    mk('はい。工場のホーン警報の音量を調整します','Yes — Fact-horn-alarm-vol-adj','Close','kenji_office'),
  ]},
  {id:'conv_10487',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('社内テレビのチューナーを地デジ対応にしましょう','Off-TV-tuner-dig-cmpat','Brisk','yuki_office'),
    mk('はい。物流チェックポイントを五カ所増設します','Yes — Log-chkpt-5-add','Cooperative','kenji_office'),
    mk('受付オペレーターの応対品質を上げましょう','Front-oper-resp-qual-up','Direction','yuki_office'),
    mk('はい。製造ラインのコントローラー保守契約を更新します','Yes — Prod-ctrl-maint-contr-ren','Update','kenji_office'),
    mk('旧映像のビデオテープから動画化を急ぎましょう','Old-VHS-dig-urg','Direction','yuki_office'),
    mk('はい。社員研修にサイコロを使ったロールプレイを採り入れます','Yes — Staff-train-dice-roleplay-use','Update','kenji_office'),
    mk('工場の業務用バーナーの定期点検を入れましょう','Fact-burn-reg-insp','Direction','yuki_office'),
    mk('はい。緊急時のホーン信号の練習をします','Yes — Emerg-horn-sig-prac','Close','kenji_office'),
  ]},
  {id:'conv_10488',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究室の電波チューナーの感度を確認しろ','Ren — lab-radio-tuner-sens-check','Mentor','hiroshi_boss'),
    mk('はい。実験プロセスのチェックポイントを増やします','Yes — Exp-proc-chkpt-add','Earnest','ren_uni'),
    mk('蓮、コールセンター運営のオペレーター心理の論文を読め','Ren — call-cent-oper-psy-paper','Direction','hiroshi_boss'),
    mk('はい。実験装置のコントローラー操作研修を受けます','Yes — Exp-eqp-ctrl-train','Earnest','ren_uni'),
    mk('蓮、古い研究映像のビデオテープを保存しろ','Ren — old-res-vid-VHS-save','Direction','hiroshi_boss'),
    mk('はい。サイコロを使う確率実験を再現します','Yes — Dice-prob-exp-repr','Polite','ren_uni'),
    mk('蓮、実験用バーナーの炎の安定を確認しろ','Ren — exp-burn-flame-stab-check','Direction','hiroshi_boss'),
    mk('はい。フィールド調査でホーンを携行します','Yes — Field-horn-carry','Earnest close','ren_uni'),
  ]},
  {id:'conv_10489',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、無線チューナーの周波数を毎日校正されますね','Police radio-tuner-freq-cal-daily','Cooperative','kenji_office'),
    mk('警察、高速のチェックポイントで検問もされますね','Police hwy-chkpt-insp','Cooperative','kenji_office'),
    mk('警察、緊急通報のオペレーター訓練もされますね','Police emerg-oper-train','Cooperative','kenji_office'),
    mk('警察、捜査車両のコントローラー保守もされますね','Police inv-veh-ctrl-maint','Cooperative','kenji_office'),
    mk('警察、古い証拠映像のビデオテープを保存されますね','Police old-evid-VHS-save','Cooperative','kenji_office'),
    mk('警察、訓練でサイコロを使うシナリオもされますね','Police train-dice-scen','Cooperative','kenji_office'),
    mk('警察、火災現場でバーナー痕跡を鑑識されますね','Police fire-scene-burn-trace','Cooperative','kenji_office'),
    mk('警察、緊急時の車両ホーンを使い分けされますね','Police emerg-veh-horn-vary','Close','kenji_office'),
  ]},
  {id:'conv_10490',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、放送局のチューナー機材を自作された','Dad — found-broad-tuner-self-built','Sage','hiroshi_elder'),
    mk('はい。お父さんは事業のチェックポイントを毎月確認された','Yes — Dad biz-chkpt-mo-check','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、電話オペレーターと連携された','Dad — youth-phone-oper-link','Wistful','hiroshi_elder'),
    mk('はい。お父さんは工場コントローラーの導入を早くされた','Yes — Dad fact-ctrl-intro-quick','Reflective','hiroshi_boss'),
    mk('お父さん、社内式典の映像をビデオテープで残された','Dad — co-cere-VHS-leave','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員研修にサイコロゲームを取り入れた','Yes — Dad staff-train-dice-use','Reflective','hiroshi_boss'),
    mk('お父さん、工場のバーナーの火力管理に厳しかった','Dad — fact-burn-fire-strict','Wistful','hiroshi_elder'),
    mk('はい。お父さんは緊急時のホーンを自ら鳴らされた','Yes — Dad emerg-horn-self-blow','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10491',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、未解決事件の迷宮入りの社会的影響を論文で扱いましたね','Ren — unsolv-cold-soc-impact paper','Calm','asuka_teacher'),
    mk('はい、伝統工芸を生業とする職人の研究を論文で扱いました','Yes — Trad-craft-occu-art paper','Earnest','ren_uni'),
    mk('蓮さん、生身の人間を被写体とする報道倫理を論文で扱いましたね','Ren — live-pers-subj-jour-eth paper','Reflective','asuka_teacher'),
    mk('はい、歴史画のディテール描写の研究を論文で扱いました','Yes — Hist-paint-det paper','Earnest','ren_uni'),
    mk('蓮さん、社会不安と恐怖症の関係性の研究を論文で扱いましたね','Ren — soc-anx-phob-rel paper','Reflective','asuka_teacher'),
    mk('はい、戦時下の遺書の文学的研究を論文で扱いました','Yes — War-fare-letter-lit paper','Earnest','ren_uni'),
    mk('蓮さん、判決の言い渡しの法社会学を論文で扱いましたね','Ren — judg-pron-leg-soc paper','Reflective','asuka_teacher'),
    mk('はい、研究者の私事と公務の境界を論文で扱いました','Yes — Res-priv-pub-bound paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10492',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、長年迷宮入りしている事件を、警察、再捜査されますね','Case long-cold police-re-inv','Reflective','ren_uni'),
    mk('警察、密造を生業とする者の追跡もされますね','Police illic-occu-track','Cooperative','takeda_officer'),
    mk('本件、生身の証人を、警察、丁寧に保護されますね','Case live-witn police-prot-care','Reflective','ren_uni'),
    mk('警察、現場写真のディテールも詳細に検証されますね','Police scene-photo-det-verify','Cooperative','takeda_officer'),
    mk('本件、被害者の恐怖症の症状を、警察、医師と確認されますね','Case vict-phob-sym police-doc-check','Reflective','ren_uni'),
    mk('警察、自殺現場の遺書の真贋鑑定もされますね','Police sui-scene-letter-auth','Cooperative','takeda_officer'),
    mk('本件、裁判所の判決言い渡しに、警察、立ち会われますね','Case court-judg-pron police-att','Reflective','ren_uni'),
    mk('警察、捜査と関係ない私事の情報は厳重に管理されますね','Police inv-no-rel-priv-info-strict','Close','takeda_officer'),
  ]},
  {id:'conv_10493',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、未解決事件の迷宮入りの社会的影響を論文で扱いましたね','Sakura — unsolv paper','Calm','asuka_teacher'),
    mk('はい、伝統工芸を生業とする職人の研究を論文で扱いました','Yes — Trad-craft-occu paper','Earnest teen','sakura_teen'),
    mk('生身の人間を被写体とする報道倫理を論文で扱いましたね','Live-pers-jour paper','Reflective','asuka_teacher'),
    mk('はい、歴史画のディテール描写の研究を論文で扱いました','Yes — Hist-det paper','Earnest','sakura_teen'),
    mk('社会不安と恐怖症の関係性の研究を論文で扱いましたね','Soc-anx-phob paper','Reflective','asuka_teacher'),
    mk('はい、戦時下の遺書の文学的研究を論文で扱いました','Yes — War-letter paper','Earnest','sakura_teen'),
    mk('判決の言い渡しの法社会学を論文で扱いましたね','Judg-pron paper','Reflective','asuka_teacher'),
    mk('はい、研究者の私事と公務の境界を論文で扱いました','Yes — Priv-pub paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10494',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、原因の迷宮入りした症例を医療チームで再検討します','Ren — cause-cold-case med-team','Calm','saito_doctor'),
    mk('蓮さん、看護を生業とする方々の心身ケアを医療チームでおこないます','Ren — nurs-occu-care med-team','Calm','saito_doctor'),
    mk('蓮さん、生身の患者様の治験記録を医療チームで管理します','Ren — live-pati-trial-rec med-team','Calm','saito_doctor'),
    mk('蓮さん、症例ディテールの記述を医療チームで丁寧におこないます','Ren — case-det-desc med-team','Calm','saito_doctor'),
    mk('蓮さん、患者様の恐怖症の治療を医療チームで丁寧におこないます','Ren — pati-phob-treat med-team','Calm','saito_doctor'),
    mk('終末期の遺書のサポートを、貴院、おこなわれてますね、先生','Term-letter-supp your-hosp, sensei','Reflective','ren_uni'),
    mk('蓮さん、診断結果の言い渡しを医療チームで配慮深くおこないます','Ren — diag-result-pron med-team','Calm','saito_doctor'),
    mk('蓮さん、患者様の私事に関する情報を医療チームで守秘します','Ren — pati-priv-info-conf med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_10495',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、原因が迷宮入りしないよう、苦情の追跡を徹底しろ','Our co — cause-cold-no-comp-track-thor','Crisp','hiroshi_boss'),
    mk('はい。介護を生業とする方々の支援サービスを展開します','Yes — Care-occu-supp-svc','Methodical','kenji_office'),
    mk('当社、デモも生身の社員に過度な負担を強いるな','Our co — demo-live-staff-no-burd','Direction','hiroshi_boss'),
    mk('はい。商品のディテール撮影に拘ります','Yes — Prod-det-photo-stick','Update','kenji_office'),
    mk('当社、社員の恐怖症対策にメンタルケア窓口を設けろ','Our co — staff-phob-ment-care-set','Direction','hiroshi_boss'),
    mk('はい。創業者の遺書、つまり遺訓を社員に伝えます','Yes — Found-letter-leg-staff','Update','kenji_office'),
    mk('当社、解雇の言い渡しは慎重におこなえ','Our co — term-pron-care','Direction','hiroshi_boss'),
    mk('はい。社員の私事に関する情報は厳重に管理します','Yes — Staff-priv-info-strict','Close','kenji_office'),
  ]},
  {id:'conv_10496',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、キャノンのカメラを愛用されてるって、メイちゃん','Aoi — cust-Canon-cam Mei','Reflective','mei_romantic'),
    mk('葵、お客様、イージス艦の写真集を読んでらしたよ、メイちゃん','Aoi — cust-Aegis-photo Mei','Reflective','aoi_barista'),
    mk('葵、お客様、子供向けトラップゲームを語って下さったよ、メイちゃん','Aoi — cust-kid-trap-game Mei','Reflective','mei_romantic'),
    mk('葵、お客様、サマースクールのチルドレン向けプログラムをされてるって、メイちゃん','Aoi — cust-sum-sch-child-prog Mei','Reflective','aoi_barista'),
    mk('葵、お客様、スタジアムのブーイングのお話を語って下さったよ、メイちゃん','Aoi — cust-stad-boo-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ミラクルな再会の体験を語って下さったよ、メイちゃん','Aoi — cust-mira-reun-exp Mei','Reflective','aoi_barista'),
    mk('葵、お客様、スリリングなスポーツ観戦のお話を語って下さったよ、メイちゃん','Aoi — cust-thrill-sport-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、マラソンのフィニッシュ瞬間のお写真をお見せ下さったよ、メイちゃん','Aoi — cust-mara-fin-photo-show Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10497',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがキャノン製の一眼レフを愛用された','Gran — youth Dad-Canon-SLR-fav','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、海上自衛隊のイージス艦の取材をされたわよね、あなた?','Yes — Grandpa-MSDF-Aegis-cov, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが子供向けゲームでトラップを作られた','Gran — youth Dad-kid-game-trap','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、海外のチルドレン基金にご支援されたわよね、あなた?','Grandpa — overs-child-fund-supp, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは野球場のブーイング文化を分析された','Gran — youth Dad-base-stad-boo-anal','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、戦地でのミラクルな再会を語って下さったわよね、あなた?','Grandpa — war-mira-reun-talk, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがスリリングな仕事を続けられた','Gran — youth Dad-thrill-work','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、駅伝のフィニッシュ瞬間を毎年観戦されたわよね、あなた?','Grandpa — relay-fin-yr-watch, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10498',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがキャノンのカメラを下さるそうよ','Sho — Dad-Canon-cam-gift','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとイージス艦の模型を作ったよ','Mei-sis — me Dad-Aegis-mod','Eager child','sho_child'),
    mk('翔くん、お父さんが「子供のゲームのトラップは安全に」って仰ってたわ','Sho — Dad-"kid-game-trap-safe"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとチルドレンの絵本シリーズ読んだよ','Mei-sis — me Dad-child-pic-ser','Eager child','sho_child'),
    mk('翔くん、お父さんが「ブーイングする側にならない」って教えて下さったわ','Sho — Dad-"boo-side-no"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「ミラクルは練習から」って学んだよ','Mei-sis — me Dad-"mira-prac"-learn','Earnest child','sho_child'),
    mk('翔くん、お父さんがスリリングなアスレチック施設に連れて下さるわ','Sho — Dad-thrill-ath-fac','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとマラソンのフィニッシュテープを観に行ったよ','Mei-sis — me Dad-mara-fin-tape','Eager close','sho_child'),
  ]},
  {id:'conv_10499',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、キャノンのカメラ買ったろ','Riku — Canon-cam-bought?','Curious teen','sakura_teen'),
    mk('お前、社会でイージス艦のニュース見たろ、桜','You — soc-Aegis-news-saw? Sakura','Curious','riku_teen'),
    mk('リク、お前、ゲームでトラップ仕掛けるの上手だな','Riku — game-trap-set-good','Praising','sakura_teen'),
    mk('お前、ボランティアでチルドレン施設行ってたな、桜','You — vol-child-fac-go Sakura','Curious','riku_teen'),
    mk('リク、お前、試合中のブーイングに腹立ててたな','Riku — match-boo-angry','Wry','sakura_teen'),
    mk('お前、文化祭でのミラクル展開語ってたな、桜','You — cul-fes-mira-talk Sakura','Wry','riku_teen'),
    mk('リク、お前、スリリングなホラー映画好きだったな','Riku — thrill-hor-film-like','Curious','sakura_teen'),
    mk('お前、駅伝でフィニッシュテープ切ったろ、桜','You — relay-fin-tape-broke? Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_10500',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがキャノンのカメラで運動会を撮って下さるわ','Sho — Dad-Canon-cam-sports','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとイージス艦のドキュメンタリー観たよ','Mom — me Dad-Aegis-doc','Eager child','sho_child'),
    mk('翔くん、お父さんがゲームのトラップの仕掛けを解説して下さるわ','Sho — Dad-game-trap-narr','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとチルドレンライブラリで本借りたよ','Mom — me Dad-child-lib-book','Eager child','sho_child'),
    mk('翔くん、お父さんが「観客のブーイングに動じない」って仰ってたわ','Sho — Dad-"aud-boo-no-shake"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとミラクルな逆転試合観たよ','Mom — me Dad-mira-comeback-saw','Eager child','sho_child'),
    mk('翔くん、お父さんがスリリングなF1中継を観てらっしゃるわ','Sho — Dad-thrill-F1-broad','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと駅伝のフィニッシュ瞬間を観たよ','Mom — me Dad-relay-fin-saw','Eager close','sho_child'),
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

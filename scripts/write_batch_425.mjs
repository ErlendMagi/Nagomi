import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_425 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['隣り','変っ','ぶらぶら','思い立っ','すかさず','たどり着く','不意','あからさま']
const B_T = ['モットー','貸与','累計','問屋','立ち寄り','小売り','衣料','言明']
const C_T = ['殴ら','混沌','露骨','濫用','在留','誘発','解任','権益']
const D_T = ['陶器','アミノ酸','音符','管弦楽','画素','サンダル','ギタリスト','リアクション']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08461',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お隣りの叔母さんがお見えになるわよ','Sho — next-door-aunt-visit','Caring','yumiko_mom'),
    mk('ママ、お祖父ちゃんのご様子、変ってないよね?','Mom — Grandpa-state unchanged?','Reflective child','sho_child'),
    mk('翔くん、お父さんと公園をぶらぶらしてらしたわね','Sho — Dad-park ambling','Reflective','yumiko_mom'),
    mk('ママ、ぼく、急に思い立って、絵を描きたくなったよ','Mom — me sudden-think drawing-want','Eager child','sho_child'),
    mk('翔くん、ママはすかさずおやつを用意したわよ','Sho — Mom promptly-snack-prep','Caring','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんのお家にたどり着くのに時間かかったよ','Mom — me Grandpa-home arrive time-took','Reflective child','sho_child'),
    mk('翔くん、不意の雨でお父さん、慌てたわね','Sho — sudden-rain Dad-flustered','Wry','yumiko_mom'),
    mk('ママ、お父さんのお気持ち、あからさまに顔に出てたよ','Mom — Dad-feeling blatant-face-out','Wry child','sho_child'),
  ]},
  {id:'conv_08462',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お隣りに新しいお店、出来たわよ、メイちゃん','Aoi — next-door-new-store opened Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご様子が少し変ってらしたわね、メイちゃん','Aoi — cust-state-slight-changed Mei','Reflective','aoi_barista'),
    mk('葵、お休みの日、商店街をぶらぶらしましょうね、メイちゃん','Aoi — break shop-arcade ambling Mei','Pleased','mei_romantic'),
    mk('葵、お客様、急に思い立ってお見えになったみたい、メイちゃん','Aoi — cust sudden-think-came Mei','Reflective','aoi_barista'),
    mk('葵、すかさずお水をお出しした方が良いわね、メイちゃん','Aoi — promptly-water serve better Mei','Direction','mei_romantic'),
    mk('葵、お客様、ようやくお店にたどり着くまで大変だったって、メイちゃん','Aoi — cust finally store-arrive-hard Mei','Reflective','aoi_barista'),
    mk('葵、不意のお祝いに皆さん喜ばれたわね、メイちゃん','Aoi — sudden-celeb-everyone-pleased Mei','Pleased','mei_romantic'),
    mk('葵、お客様、お喜びがあからさまにお顔に出てらしたよ、メイちゃん','Aoi — cust-joy blatant-face Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_08463',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お隣りのご家族にお世話になったぞ','Gran — youth next-door-fam-helped','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お顔の表情が変ってないわよね、あなた?','Yes — Grandpa face-expr-unchanged, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと田んぼをぶらぶら散歩したぞ','Gran — youth Dad-rice-field-amble','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、急に思い立って釣りに行かれたわよね、あなた?','Grandpa — sudden-think-fishing-went, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがすかさず助けて下さったぞ','Gran — youth Dad promptly-helped','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、長い道のりをたどり着く強さがおありだったわよね、あなた?','Grandpa — long-path-arrive strength, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、不意のご来客にも、お父さんは落ち着いてらしたぞ','Gran — sudden-cust-Dad-calm','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お喜びをあからさまにお出しになるのが可愛かったわよね、あなた?','Grandpa — joy-blatant-cute, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08464',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前ん家、お隣りに引っ越したろ?','Riku — your-home next-door-moved?','Curious teen','sakura_teen'),
    mk('お前、髪型変ってないか?桜','You — hair-style-unchanged? Sakura','Curious','riku_teen'),
    mk('リク、お前、商店街をぶらぶらしてたろ?','Riku — shop-arcade-amble?','Curious','sakura_teen'),
    mk('お前、急に思い立って部活変えたな、桜','You — sudden-think-club-changed Sakura','Wry','riku_teen'),
    mk('リク、お前、テストですかさず答え書けたな','Riku — test promptly-answer-wrote','Praising','sakura_teen'),
    mk('お前、塾にたどり着くの遅かったな、桜','You — cram-arrive-late Sakura','Wry','riku_teen'),
    mk('リク、お前、不意のテストに弱いよな','Riku — sudden-test-weak','Wry','sakura_teen'),
    mk('お前のヤル気、あからさまに無いだろ、桜','Your-motivation blatant-none Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_08465',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんはお隣り町に住んでるのよ','Sho — Mei-sis next-door-town-live','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、季節が変ってきたのを感じるよ','Mei-sis — me season-changing-feel','Reflective child','sho_child'),
    mk('翔くん、メイ姉さんと公園をぶらぶら散歩しましょうね','Sho — Mei-sis park-amble','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、急に思い立ってお祖父ちゃんに電話したよ','Mei-sis — me sudden-think-Grandpa-called','Proud child','sho_child'),
    mk('翔くん、すかさずママに見せに行きましょう','Sho — promptly-Mom-show-go','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんのお家にたどり着くまで歩いたよ','Mei-sis — me Grandpa-home-arrive-walked','Proud child','sho_child'),
    mk('翔くん、不意のプレゼントは嬉しいわね','Sho — sudden-present-glad','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんの喜びがあからさまに分かったよ','Mei-sis — me Grandpa-joy-blatant-saw','Eager close','sho_child'),
  ]},
  {id:'conv_08466',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社のモットーを新人に伝えろ','Our co-motto newbie-convey','Crisp','hiroshi_boss'),
    mk('はい。社用パソコンの貸与手続を済ませました','Yes — Co-PC-loan-proc done','Methodical','kenji_office'),
    mk('累計売上の推移をまとめろ','Cum-sales-trend summarize','Direction','hiroshi_boss'),
    mk('はい。問屋との取引条件を更新中です','Yes — Wholesaler-deal-cond updating','Update','kenji_office'),
    mk('お得意様のお店に立ち寄りで挨拶しろ','VIP-store stop-by greeting','Direction','hiroshi_boss'),
    mk('はい。小売り部門の売上が伸びております','Yes — Retail-section-sales-grow','Update','kenji_office'),
    mk('当社、衣料品の新ラインを開発しろ','Our co — clothing-new-line develop','Direction','hiroshi_boss'),
    mk('はい。新方針を社内に言明いたします','Yes — New-policy co-internal-state-clear','Close','kenji_office'),
  ]},
  {id:'conv_08467',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('社員研修で当社のモットーを再確認しましょう','Staff-train co-motto-re-confirm','Brisk','yuki_office'),
    mk('はい。社用車の貸与申請が増えました','Yes — Co-car-loan-app increased','Cooperative','kenji_office'),
    mk('累計の来客数を集計しましょう','Cum-cust-num count','Direction','yuki_office'),
    mk('はい。問屋への発注頻度を見直しました','Yes — Wholesaler-order-freq reviewed','Update','kenji_office'),
    mk('お取引先に立ち寄りで顔を出しましょう','Partner stop-by face-show','Direction','yuki_office'),
    mk('はい。小売り価格の改定をお願いしました','Yes — Retail-price-revision-asked','Update','kenji_office'),
    mk('衣料部門の在庫管理を強化しましょう','Clothing-section-stock-mgmt strengthen','Direction','yuki_office'),
    mk('はい。社の方針を正式に言明する文書を準備中です','Yes — Co-policy formal-state-clear-doc prep','Close','kenji_office'),
  ]},
  {id:'conv_08468',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究室のモットーを覚えろ','Ren — lab-motto remember','Mentor','hiroshi_boss'),
    mk('はい。機材の貸与制度を活用しております','Yes — Equip-loan-system util','Earnest','ren_uni'),
    mk('蓮、論文の累計引用数を確認しろ','Ren — paper-cum-citation check','Direction','hiroshi_boss'),
    mk('はい。問屋経由で部品を調達しております','Yes — Wholesaler-route-part-procure','Polite','ren_uni'),
    mk('蓮、学会で他大学に立ち寄りで挨拶しろ','Ren — conf other-univ stop-by-greeting','Direction','hiroshi_boss'),
    mk('はい。小売り市場のデータを論文で扱いました','Yes — Retail-market-data paper','Earnest','ren_uni'),
    mk('蓮、繊維素材の衣料品研究も視野に入れろ','Ren — fiber-material-clothing-research view','Direction','hiroshi_boss'),
    mk('はい。研究目的を学会で明確に言明します','Yes — Research-purpose-conf clear-state','Earnest close','ren_uni'),
  ]},
  {id:'conv_08469',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、市民安全のモットーを掲げております','Police citizen-safety-motto-uphold','Calm','takeda_officer'),
    mk('はい。警察、機材を市民に貸与なさるんですね','Yes — Police equip-citizen-loan','Cooperative','kenji_office'),
    mk('警察、累計検挙数の統計を作成しました','Police cum-arrest-stat-made','Procedural','takeda_officer'),
    mk('はい。警察、問屋からの不正流通を捜査されてますね','Yes — Police wholesaler-illegal-distrib inv','Cooperative','kenji_office'),
    mk('警察、防犯のため店舗に立ち寄りで巡回します','Police crime-prev-store-stop-by-patrol','Procedural','takeda_officer'),
    mk('はい。警察、小売り店の防犯指導もなさいますね','Yes — Police retail-crime-prev-guide','Cooperative','kenji_office'),
    mk('警察、衣料品の偽造事件を捜査しております','Police clothing-fake-case inv','Procedural','takeda_officer'),
    mk('はい。警察、市民への安全を改めて言明されましたね','Yes — Police citizen-safety re-state-clear','Close','kenji_office'),
  ]},
  {id:'conv_08470',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時のモットーを大事にされた','Dad — founding-motto cherished','Sage','hiroshi_elder'),
    mk('はい。お父さんは社員に機材を貸与する制度を作られた','Yes — Dad staff-equip-loan-system-made','Commitment','hiroshi_boss'),
    mk('お父さん、累計実績を社員に共有された','Dad — cum-track-record-shared','Wistful','hiroshi_elder'),
    mk('はい。お父さんは問屋との信頼を築かれました','Yes — Dad wholesaler-trust-built','Reflective','hiroshi_boss'),
    mk('お父さん、お取引先に立ち寄りで顔を出される習慣だったぞ','Dad — partner-stop-by-face-show habit','Wistful','hiroshi_elder'),
    mk('はい。お父さんは小売りの現場を大事にされました','Yes — Dad retail-on-site-cherished','Reflective','hiroshi_boss'),
    mk('お父さん、衣料事業から始められたぞ','Dad — clothing-biz-started','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社是を明確に言明されました','Yes — Dad co-creed-clear-stated','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08471',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、戦時下に殴られた人々の証言を論文で扱いましたね','Ren — war-time hit-people-testimony paper','Calm','asuka_teacher'),
    mk('はい、革命期の混沌とした社会を論文で扱いました','Yes — Revolution-chaos-society paper','Earnest','ren_uni'),
    mk('蓮さん、露骨な人種差別の事例を論文で扱いましたね','Ren — blatant-racism-case paper','Reflective','asuka_teacher'),
    mk('はい、権力の濫用の事例を論文で扱いました','Yes — Power-abuse-case paper','Earnest','ren_uni'),
    mk('在留外国人の権利問題を論文で扱いましたね','Resident-foreigner-rights paper','Engaged','asuka_teacher'),
    mk('はい、災害が誘発する社会問題を論文で扱いました','Yes — Disaster-induced-social-prob paper','Earnest','ren_uni'),
    mk('蓮さん、大臣解任の歴史的経緯を論文で扱いましたね','Ren — minister-dismiss-hist paper','Reflective','asuka_teacher'),
    mk('はい、海洋権益の国際紛争を論文で扱いました','Yes — Sea-interest-int-dispute paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08472',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、被害者が殴られた経緯を警察、調査されてますね','Case victim-hit-circ police-inv','Reflective','ren_uni'),
    mk('警察、混沌とした現場を整理しました','Police chaotic-scene organized','Procedural','takeda_officer'),
    mk('本件、露骨な脅迫行為を警察、立件されたんですね','Case blatant-threat-act police-charge','Reflective','ren_uni'),
    mk('警察、職権濫用を絶対に防止します','Police authority-abuse strict-prev','Procedural','takeda_officer'),
    mk('本件、在留資格詐欺の事案を警察、捜査されてますね','Case resident-status-fraud police-inv','Reflective','ren_uni'),
    mk('警察、暴動を誘発する発言を厳重に警戒します','Police riot-induce-speech strict-watch','Procedural','takeda_officer'),
    mk('本件、署長解任の手続きを警察、明らかにされましたね','Case chief-dismiss-proc police-clear','Reflective','ren_uni'),
    mk('警察、漁業権益の紛争にも対応します','Police fishery-interest-dispute resp','Close','takeda_officer'),
  ]},
  {id:'conv_08473',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、戦時下に殴られた人々の証言を論文で扱いましたね','Sakura — war-time hit-people-testimony paper','Calm','asuka_teacher'),
    mk('はい、革命期の混沌とした社会を論文で扱いました','Yes — Revolution-chaos paper','Earnest teen','sakura_teen'),
    mk('露骨な人種差別の事例を論文で扱いましたね','Blatant-racism-case paper','Reflective','asuka_teacher'),
    mk('はい、権力の濫用の事例を論文で扱いました','Yes — Power-abuse paper','Earnest','sakura_teen'),
    mk('在留外国人の権利問題を論文で扱いましたね','Resident-foreigner-rights paper','Engaged','asuka_teacher'),
    mk('はい、災害が誘発する社会問題を論文で扱いました','Yes — Disaster-induced-soc-prob paper','Earnest','sakura_teen'),
    mk('大臣解任の歴史的経緯を論文で扱いましたね','Minister-dismiss-hist paper','Reflective','asuka_teacher'),
    mk('はい、海洋権益の国際紛争を論文で扱いました','Yes — Sea-interest-int-dispute paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08474',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、暴力で殴られた患者の治療を医療チームで担当しました','Ren — violence-hit-patient med-team-treat','Calm','saito_doctor'),
    mk('はい、災害時の混沌とした現場を医療チームで経験しました','Yes — Disaster chaos-scene med-team exp','Patient','saito_doctor'),
    mk('露骨な差別を受けた患者さんへの対応を貴院、なさったそうですね、先生','Blatant-discrim-patient-resp your-hosp do, sensei','Curious','ren_uni'),
    mk('はい、薬の濫用問題を医療チームで対策しております','Yes — Drug-abuse-prob med-team counter','Patient','saito_doctor'),
    mk('在留外国人の医療支援を貴院、なさったんですね、先生','Resident-foreigner-med-supp your-hosp do, sensei','Curious','ren_uni'),
    mk('はい、ストレスが誘発する症状を医療チームで研究中です','Yes — Stress-induce-symptom med-team research','Patient','saito_doctor'),
    mk('院長解任の事件を貴院、ご経験されたそうですね、先生','Director-dismiss-case your-hosp exp, sensei','Reflective','ren_uni'),
    mk('はい、患者の医療権益を医療チームで守ります','Yes — Patient-med-interest med-team protect','Patient close','saito_doctor'),
  ]},
  {id:'conv_08475',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('社員が殴られた事案は絶対に許さん','Staff-hit-case strict-not-tolerate','Stern','hiroshi_boss'),
    mk('はい。市場の混沌とした状況に対応します','Yes — Market-chaos-resp','Methodical','kenji_office'),
    mk('露骨な競合の妨害行為に注意しろ','Blatant-rival-obstruction-care','Direction','hiroshi_boss'),
    mk('はい。社内規程の濫用を防止しております','Yes — Co-rule-abuse-prev','Update','kenji_office'),
    mk('在留資格のある社員を支援しろ','Resident-status-staff supp','Direction','hiroshi_boss'),
    mk('はい。新製品が市場を誘発する効果を狙います','Yes — New-prod market-induce-effect aim','Update','kenji_office'),
    mk('当社、不正役員は解任しろ','Our co — fraud-exec dismiss','Direction','hiroshi_boss'),
    mk('はい。海外の権益保護に注力しております','Yes — Overseas-interest-protect-focus','Close','kenji_office'),
  ]},
  {id:'conv_08476',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様が陶器のカップを褒めて下さったよ、メイちゃん','Aoi — cust ceramic-cup-praise Mei','Pleased','mei_romantic'),
    mk('葵、お客様、アミノ酸の研究のお仕事だって、メイちゃん','Aoi — cust amino-acid-research-work Mei','Reflective','aoi_barista'),
    mk('葵、お店のBGMの音符が一拍ずれてるわね、メイちゃん','Aoi — store-BGM-note one-beat-off Mei','Reflective','mei_romantic'),
    mk('葵、お客様、管弦楽団の方なんだって、メイちゃん','Aoi — cust orch-member Mei','Reflective','aoi_barista'),
    mk('葵、お店のカメラ、画素を上げたい所ね、メイちゃん','Aoi — store-cam pixel-raise-want Mei','Reflective','mei_romantic'),
    mk('葵、夏の制服にサンダルOKかしら、メイちゃん','Aoi — summer-uniform sandal-OK Mei','Curious','aoi_barista'),
    mk('葵、お客様、ギタリストなんだって、メイちゃん','Aoi — cust guitarist Mei','Reflective','mei_romantic'),
    mk('葵、新メニューにお客様のリアクション良かったよ、メイちゃん','Aoi — new-menu cust-react-good Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_08477',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが陶器作りに通われたぞ','Gran — youth Dad ceramic-making-attended','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、アミノ酸の研究をしてらしたわよね、あなた?','Yes — Grandpa amino-acid-research, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが楽譜の音符を読まれたぞ','Gran — youth Dad sheet-note-read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、管弦楽の演奏会を欠かさず行かれたわよね、あなた?','Grandpa — orch-concert-never-miss-went, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがカメラの画素を気にされたぞ','Gran — youth Dad cam-pixel-cared','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、夏はいつもサンダルを履いてらしたわよね、あなた?','Grandpa — summer always-sandal-wore, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがギタリストの友人をご招待されたぞ','Gran — youth Dad guitarist-friend-invited','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、面白いお話に大きなリアクションをされたわよね、あなた?','Grandpa — funny-story big-react, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08478',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんの陶器のカップ、可愛いね','Sho — Mei-sis-ceramic-cup-cute','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、給食でアミノ酸入りの飲み物飲んだよ','Mei-sis — me lunch amino-acid-drink-drank','Eager child','sho_child'),
    mk('翔くん、お歌の音符を読めるようになったわね','Sho — song-note-read-able','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、学校で管弦楽の演奏聴いたよ','Mei-sis — me school-orch-listen','Eager child','sho_child'),
    mk('翔くん、メイ姉さんのスマホ、画素が高いのよ','Sho — Mei-sis-phone-pixel-high','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、夏のお祭りでサンダル履いたよ','Mei-sis — me summer-fest-sandal-wore','Eager child','sho_child'),
    mk('翔くん、お父さんはギタリストみたいに弾けるのよ','Sho — Dad guitarist-like-play','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、面白い話で大きなリアクションしちゃったよ','Mei-sis — me funny-story-big-react-did','Eager close','sho_child'),
  ]},
  {id:'conv_08479',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前ん家、陶器のお皿あるな','Riku — your-home-ceramic-plate-yes','Curious teen','sakura_teen'),
    mk('お前、生物のテストでアミノ酸出たろ?桜','You — bio-test-amino-acid-came? Sakura','Curious','riku_teen'),
    mk('リク、お前、音符読めないんだろ?','Riku — note-can\'t-read?','Wry','sakura_teen'),
    mk('お前、管弦楽部に憧れてるんだろ?桜','You — orch-club-admire? Sakura','Curious','riku_teen'),
    mk('リク、お前のスマホ、画素低くね?','Riku — your-phone-pixel-low?','Curious','sakura_teen'),
    mk('お前、サンダルで学校来んなよ、桜','You — sandal-school don\'t-come Sakura','Wry','riku_teen'),
    mk('リク、お前、ギタリストになりたいんだろ?','Riku — guitarist-want?','Curious','sakura_teen'),
    mk('お前のリアクション、いっつもオーバーだぞ、桜','Your-react always-over Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_08480',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖母ちゃんの陶器のお皿、大事にしてね','Sho — Grandma-ceramic-plate-cherish','Caring','yumiko_mom'),
    mk('ママ、ぼく、お肉のアミノ酸が栄養って習ったよ','Mom — me meat-amino-acid-nutri-learned','Proud child','sho_child'),
    mk('翔くん、ピアノの音符をママと一緒に覚えましょうね','Sho — piano-note-Mom-together-learn','Caring','yumiko_mom'),
    mk('ママ、ぼく、お父さんと管弦楽の演奏会に行きたい','Mom — me Dad-orch-concert-want-go','Eager child','sho_child'),
    mk('翔くん、お父さんのカメラは画素が高いのよ','Sho — Dad-cam-pixel-high','Reflective','yumiko_mom'),
    mk('ママ、ぼく、夏休みのサンダル買って欲しい','Mom — me summer-sandal-buy-want','Eager child','sho_child'),
    mk('翔くん、お父さんのお友達のギタリスト、お見えになるわ','Sho — Dad-friend-guitarist-visit','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんのジョークに大きなリアクションしたよ','Mom — me Dad-joke-big-react-did','Proud close','sho_child'),
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

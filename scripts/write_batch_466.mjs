import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_466 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['遠ざかっ','云え','たたく','ナニ','余る','ごちゃごちゃ','たてる','足る']
const B_T = ['夕刻','論外','切り出し','有償','ジョイント','レパートリー','字体','期生']
const C_T = ['不謹慎','憤慨','貫通','弱体','降下','命中','至難','浴びせ']
const D_T = ['ユリ','蟻','死神','邦楽','半径','オゾン','ダシ','漢文']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09281',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖父ちゃんの車が遠ざかっていったわね','Sho — Grandpa-car-fade-away','Reflective','yumiko_mom'),
    mk('ママ、お祖父ちゃんに「ありがとう」って云えてよかった','Mom — Grandpa-"thanks"-say-glad','Earnest child','sho_child'),
    mk('翔くん、お庭でドアをたたく音がしたわよ','Sho — garden-door-knock-sound','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんに「ナニ食べたい?」って訊いたよ','Mom — me Grandpa-"what-eat"-asked','Eager child','sho_child'),
    mk('翔くん、ご飯が余るほど作ってしまったわね','Sho — rice-leftover-much-made','Wry','yumiko_mom'),
    mk('ママ、お父さんのお部屋、ごちゃごちゃしてるよ','Mom — Dad-room-cluttered','Reflective child','sho_child'),
    mk('翔くん、お絵描きの棚をたてる場所を決めましょうね','Sho — art-shelf-set-place-decide','Direction','yumiko_mom'),
    mk('ママ、お祖父ちゃんに会えて、本当に足るほど嬉しかったよ','Mom — Grandpa-met-truly-enough-glad','Eager close','sho_child'),
  ]},
  {id:'conv_09282',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様が遠ざかっていく姿を見送るのは寂しいね、メイちゃん','Aoi — cust-fade-see-off-lonely Mei','Reflective','mei_romantic'),
    mk('葵、お客様に「またね」と云えるのも幸せね、メイちゃん','Aoi — cust-"see-you"-say-happy Mei','Tender','aoi_barista'),
    mk('葵、お客様、テーブルをたたいて呼ばれたよ、メイちゃん','Aoi — cust-table-knock-call Mei','Wry','mei_romantic'),
    mk('葵、新メニュー、「ナニこれ?」ってお客様に注目されたよ、メイちゃん','Aoi — new-menu-"what-is"-cust-att Mei','Animated','aoi_barista'),
    mk('葵、本日の在庫が余るほどあるね、メイちゃん','Aoi — today-stock-leftover-much Mei','Reflective','mei_romantic'),
    mk('葵、お店のカウンターをごちゃごちゃさせないようにしましょうね、メイちゃん','Aoi — store-counter-clutter-not Mei','Direction','aoi_barista'),
    mk('葵、レジカウンターをたてる位置を考えましょう、メイちゃん','Aoi — register-set-pos-think Mei','Direction','mei_romantic'),
    mk('葵、お客様の笑顔があれば、足るほど幸せだね、メイちゃん','Aoi — cust-smile-enough-happy Mei','Tender close','aoi_barista'),
  ]},
  {id:'conv_09283',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが汽車で遠ざかっていったぞ','Gran — youth Dad-train-fade','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、最後に「ありがとう」と云えていらしたわよね、あなた?','Yes — Grandpa-last-"thanks"-said, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが太鼓をたたく姿がかっこよかった','Gran — youth Dad-drum-knock-cool','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様に「ナニしてるんだ?」って優しく訊かれたわよね、あなた?','Grandpa — grandkid-"what-doing"-kind-ask, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、収穫が余るほど豊作だった年もあった','Gran — youth harvest-leftover-bumper','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、書斎が、ごちゃごちゃしないよう整えてらしたわよね、あなた?','Grandpa — study-clutter-not-arrange, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが大事な看板をたてる手伝いをされた','Gran — youth Dad-impt-sign-set-help','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご家族と一緒なら足るほど幸せでらしたわよね、あなた?','Grandpa — fam-together-enough-happy, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09284',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前の影が遠ざかっていくのが見えた','Riku — your-shadow-fade-saw','Reflective teen','sakura_teen'),
    mk('お前、ちゃんと「サンキュー」って云えよ、桜','You — "thanks"-say Sakura','Direction','riku_teen'),
    mk('リク、お前、机をたたくな','Riku — desk-knock-don\'t','Direction','sakura_teen'),
    mk('お前、ナニそれ?新しいゲーム?桜','You — what-that-new-game? Sakura','Curious','riku_teen'),
    mk('リク、お前の発想は余るほど豊かだな','Riku — your-idea-leftover-rich','Praising','sakura_teen'),
    mk('お前、机の上、ごちゃごちゃで勉強できんのか、桜','You — desk-cluttered-study? Sakura','Wry','riku_teen'),
    mk('リク、お前、文化祭でテントをたてる手伝いしろよ','Riku — fest-tent-set-help','Direction','sakura_teen'),
    mk('お前のテスト点、これだけあれば足るだろ、桜','You — test-score-enough Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_09285',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、夕日が遠ざかっていく景色、綺麗ね','Sho — sunset-fade-view-pretty','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんに「大好き」って云えるよ','Mei-sis — me Mei-sis-"love"-say-can','Eager child','sho_child'),
    mk('翔くん、絵筆で軽くキャンバスをたたく技法もあるのよ','Sho — brush-light-canvas-knock-tech','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ナニ色から塗ろうかな?','Mei-sis — me what-color-start?','Curious child','sho_child'),
    mk('翔くん、お絵描きの紙が余るほどあるわね','Sho — drawing-paper-leftover-much','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、お絵描き道具がごちゃごちゃしちゃったよ','Mei-sis — me art-tool-cluttered','Wry child','sho_child'),
    mk('翔くん、お絵描き棚をたてる場所、メイ姉さんが考えるわね','Sho — art-shelf-set-place-Mei-sis-think','Tender','mei_romantic'),
    mk('メイ姉さん、メイ姉さんと一緒なら足るほど幸せだよ','Mei-sis — Mei-sis-together-enough-happy','Tender close','sho_child'),
  ]},
  {id:'conv_09286',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、夕刻の会議で本日のまとめをしろ','Our co — eve-meet-today-sum','Crisp','hiroshi_boss'),
    mk('はい。価格交渉での要求は論外です','Yes — Price-nego-req-out-of-question','Methodical','kenji_office'),
    mk('当社、新事業の話を切り出して反応を見ろ','Our co — new-biz-open-resp-see','Direction','hiroshi_boss'),
    mk('はい。有償サポートのプランを準備しました','Yes — Paid-supp-plan-prep','Update','kenji_office'),
    mk('当社、他社とのジョイントベンチャーを検討しろ','Our co — other-JV-consider','Direction','hiroshi_boss'),
    mk('はい。新人のレパートリーが広がってきました','Yes — Newbie-rep-widen','Update','kenji_office'),
    mk('当社、ロゴの字体を新しくしろ','Our co — logo-font-new','Direction','hiroshi_boss'),
    mk('はい。新人期生の歓迎会を計画しております','Yes — Newbie-class-wel-plan','Close','kenji_office'),
  ]},
  {id:'conv_09287',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('夕刻に客足が増えるので体制を整えましょう','Eve-cust-up-system-prep','Brisk','yuki_office'),
    mk('はい。お客様の要求が論外な場合は丁寧にお断りします','Yes — Cust-req-out-of-q-polite-refuse','Cooperative','kenji_office'),
    mk('値下げの話を切り出すタイミングが大事ですね','Discount-open-time-impt','Direction','yuki_office'),
    mk('はい。有償オプションの利用率が上がっています','Yes — Paid-opt-use-up','Update','kenji_office'),
    mk('新事業のジョイント計画を進めましょう','New-biz-joint-plan','Direction','yuki_office'),
    mk('はい。お客様向け企画のレパートリーを増やします','Yes — Cust-event-rep-up','Update','kenji_office'),
    mk('メニューの字体を統一しましょう','Menu-font-unify','Direction','yuki_office'),
    mk('はい。同期生の集まりを社内で開きます','Yes — Same-class-meet-co','Close','kenji_office'),
  ]},
  {id:'conv_09288',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、夕刻の実験は注意散漫になりがちだ','Ren — eve-exp-att-loose','Mentor','hiroshi_boss'),
    mk('はい。データ捏造は論外と承知しております','Yes — Data-fab-out-of-q','Earnest','ren_uni'),
    mk('蓮、論文の本題を切り出して指導教授に相談しろ','Ren — paper-main-open-adv-cons','Direction','hiroshi_boss'),
    mk('はい。学術データベースの有償購読を申請します','Yes — Acad-DB-paid-app','Polite','ren_uni'),
    mk('蓮、他大学とのジョイント研究を進めろ','Ren — other-univ-joint-research-progress','Direction','hiroshi_boss'),
    mk('はい。発表のレパートリーを広げる練習をしております','Yes — Pres-rep-widen-prac','Earnest','ren_uni'),
    mk('蓮、論文の字体は学会の規定に従え','Ren — paper-font-conf-rule-follow','Direction','hiroshi_boss'),
    mk('はい。同期生の研究者と協力します','Yes — Same-class-researcher-coop','Earnest close','ren_uni'),
  ]},
  {id:'conv_09289',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、夕刻の防犯パトロールを強化されますね','Police eve-crime-prev-patrol-strength','Cooperative','kenji_office'),
    mk('警察、市民への暴力的言動は論外として扱われますね','Police citizen-violence-out-of-q','Cooperative','kenji_office'),
    mk('警察、新たな捜査方針を切り出されますね','Police new-inv-pol-open','Cooperative','kenji_office'),
    mk('警察、有償の防犯機器も推奨されますね','Police paid-crime-prev-eq-rec','Cooperative','kenji_office'),
    mk('警察、自治体とのジョイントで防犯活動されますね','Police local-joint-crime-prev','Cooperative','kenji_office'),
    mk('警察、犯罪パターンのレパートリーを把握されてますね','Police crime-pattern-rep-grasp','Cooperative','kenji_office'),
    mk('警察、手配書の字体を統一されましたね','Police wanted-font-unify','Cooperative','kenji_office'),
    mk('警察、警察学校の同じ期生で連携されてますね','Police acad-same-class-link','Close','kenji_office'),
  ]},
  {id:'conv_09290',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、夕刻まで店頭に立たれたぞ','Dad — founding eve-store-front','Sage','hiroshi_elder'),
    mk('はい。お父さんは社員への暴言を論外とされた','Yes — Dad staff-verbal-abuse-out-of-q','Commitment','hiroshi_boss'),
    mk('お父さん、新事業の話を切り出すタイミングが上手かった','Dad — new-biz-open-time-skill','Wistful','hiroshi_elder'),
    mk('はい。お父さんは有償サービスの先駆者だった','Yes — Dad paid-svc-pioneer','Reflective','hiroshi_boss'),
    mk('お父さん、海外企業とのジョイントも実現された','Dad — overseas-co-joint-real','Wistful','hiroshi_elder'),
    mk('はい。お父さんは経営者としてレパートリーが広かった','Yes — Dad mgmt-rep-wide','Reflective','hiroshi_boss'),
    mk('お父さん、ロゴの字体にもこだわられたぞ','Dad — logo-font-care','Wistful','hiroshi_elder'),
    mk('はい。お父さんは創業期生の社員を大切にされた','Yes — Dad found-class-staff-cherish','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09291',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、被災地での不謹慎な発言を批判した文献を論文で扱いましたね','Ren — disaster-improp-crit paper','Calm','asuka_teacher'),
    mk('はい、世論が憤慨した政治家の事件を論文で扱いました','Yes — Pub-furious-pol-case paper','Earnest','ren_uni'),
    mk('蓮さん、弾丸が壁を貫通する物理を論文で扱いましたね','Ren — bullet-wall-pierce-phys paper','Reflective','asuka_teacher'),
    mk('はい、独裁体制が弱体化する過程を論文で扱いました','Yes — Dictator-weaken paper','Earnest','ren_uni'),
    mk('傘下に降下する空挺部隊を論文で扱いましたね','Para-drop-unit paper','Engaged','asuka_teacher'),
    mk('はい、砲弾が命中する精度の研究を論文で扱いました','Yes — Shell-hit-acc paper','Earnest','ren_uni'),
    mk('蓮さん、地形が至難の山岳戦を論文で扱いましたね','Ren — terrain-difficult-mtn-battle paper','Reflective','asuka_teacher'),
    mk('はい、罵声を浴びせる暴動の歴史を論文で扱いました','Yes — Curse-rain-riot-hist paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09292',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、被害者ご家族の前で不謹慎な発言は警察、絶対に避けますね','Case victim-fam-improp police-avoid','Reflective','ren_uni'),
    mk('警察、市民の憤慨に丁寧に応えます','Police citizen-furious-careful-resp','Procedural','takeda_officer'),
    mk('本件、弾丸が壁を貫通した跡を警察、確認されましたね','Case bullet-wall-pierce police-confirm','Reflective','ren_uni'),
    mk('警察、組織が弱体化した時こそ警戒します','Police org-weaken-watch','Procedural','takeda_officer'),
    mk('本件、ヘリで降下する応援要員も警察、用意されてますね','Case heli-drop-backup police-prep','Reflective','ren_uni'),
    mk('警察、犯人特定の精度が命中するまで捜査します','Police suspect-id-hit-inv','Procedural','takeda_officer'),
    mk('本件、犯人逮捕は至難の状況でしたね、警察','Case suspect-arrest-difficult police','Reflective','ren_uni'),
    mk('警察、市民への罵声を浴びせる行為を厳しく取り締まります','Police citizen-curse-rain-crack','Close','takeda_officer'),
  ]},
  {id:'conv_09293',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、被災地での不謹慎な発言を批判した文献を論文で扱いましたね','Sakura — disaster-improp paper','Calm','asuka_teacher'),
    mk('はい、世論が憤慨した政治家の事件を論文で扱いました','Yes — Pub-furious-pol paper','Earnest teen','sakura_teen'),
    mk('弾丸が壁を貫通する物理を論文で扱いましたね','Bullet-pierce paper','Reflective','asuka_teacher'),
    mk('はい、独裁体制が弱体化する過程を論文で扱いました','Yes — Dictator-weaken paper','Earnest','sakura_teen'),
    mk('傘下に降下する空挺部隊を論文で扱いましたね','Para-drop paper','Engaged','asuka_teacher'),
    mk('はい、砲弾が命中する精度を論文で扱いました','Yes — Shell-hit paper','Earnest','sakura_teen'),
    mk('地形が至難の山岳戦を論文で扱いましたね','Terrain-difficult-mtn paper','Reflective','asuka_teacher'),
    mk('はい、罵声を浴びせる暴動の歴史を論文で扱いました','Yes — Curse-rain paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09294',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、患者さん前で不謹慎な雑談は医療チームで厳禁としております','Ren — patient-improp-chat med-team strict-no','Calm','saito_doctor'),
    mk('はい、医療事故への憤慨を医療チームで真摯に受け止めます','Yes — Med-acc-furious med-team sincere','Patient','saito_doctor'),
    mk('血管を貫通する外傷ケアを、貴院、ご担当ですね、先生','Vessel-pierce-trauma your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、免疫が弱体化した患者さんの対応を医療チームで強化します','Yes — Imm-weaken-patient med-team strength','Patient','saito_doctor'),
    mk('救急救命でヘリ降下を、貴院、毎月想定されてますね、先生','Emerg-rescue-heli-drop your-hosp monthly, sensei','Curious','ren_uni'),
    mk('はい、治療部位に正確に命中する放射線治療を医療チームで導入します','Yes — Treat-site-hit-rad med-team intro','Patient','saito_doctor'),
    mk('至難の手術を、貴院、ご成功されたんですね、先生','Difficult-surg your-hosp success, sensei','Praising','ren_uni'),
    mk('はい、医療従事者へ罵声を浴びせる事案に医療チームで対策します','Yes — Med-staff-curse-rain med-team counter','Patient close','saito_doctor'),
  ]},
  {id:'conv_09295',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、社員の不謹慎な発言には注意しろ','Our co — staff-improp-care','Crisp','hiroshi_boss'),
    mk('はい。お客様の憤慨には誠実に対応します','Yes — Cust-furious-sincere-resp','Methodical','kenji_office'),
    mk('当社、市場を貫通する大ヒット商品を作れ','Our co — market-pierce-hit-prod','Direction','hiroshi_boss'),
    mk('はい。組織が弱体化しないよう若手を育成します','Yes — Org-weaken-not-young-train','Update','kenji_office'),
    mk('当社、価格を降下させない戦略を立てろ','Our co — price-drop-not-strat','Direction','hiroshi_boss'),
    mk('はい。お客様のニーズに命中する商品を出します','Yes — Cust-need-hit-prod','Update','kenji_office'),
    mk('当社、至難の市場開拓に挑め','Our co — difficult-market-pioneer','Direction','hiroshi_boss'),
    mk('はい。社員に罵声を浴びせる管理職は厳罰で対応します','Yes — Staff-curse-rain-mgr-strict','Close','kenji_office'),
  ]},
  {id:'conv_09296',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お店の前にユリの花を植えたいわね、メイちゃん','Aoi — store-lily-plant-want Mei','Reflective','mei_romantic'),
    mk('葵、お店に蟻が侵入しないよう注意しましょう、メイちゃん','Aoi — store-ant-enter-prev Mei','Direction','aoi_barista'),
    mk('葵、お子様、絵本の死神のキャラに怖がってたよ、メイちゃん','Aoi — child-book-shinigami-scared Mei','Reflective','mei_romantic'),
    mk('葵、お店でも邦楽のBGM流したいわね、メイちゃん','Aoi — store-Jp-music-BGM Mei','Direction','aoi_barista'),
    mk('葵、お店から徒歩半径200メートルにビラを配りましょう、メイちゃん','Aoi — store-walk-radius-flyer Mei','Direction','mei_romantic'),
    mk('葵、空気清浄器でオゾンを発生させすぎないよう注意ね、メイちゃん','Aoi — air-purif-ozone-care Mei','Direction','aoi_barista'),
    mk('葵、新メニュー、ダシの効いたおうどん作りましょう、メイちゃん','Aoi — new-menu-dashi-udon Mei','Animated','mei_romantic'),
    mk('葵、お客様、漢文の研究のお仕事だって、メイちゃん','Aoi — cust-Chinese-clas-work Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09297',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがユリの花を持ってこられた','Gran — youth Dad-lily-bring','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お庭の蟻を観察されてたわよね、あなた?','Yes — Grandpa-garden-ant-obs, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが孫に死神の昔話をされた','Gran — youth Dad-grandkid-shinigami-told','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、邦楽のレコードを大事にされたわよね、あなた?','Grandpa — Jp-music-record-cherish, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと家の半径を測ったぞ','Gran — youth Dad-home-radius-meas','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、夏はオゾン層のお話されたわよね、あなた?','Grandpa — summer-ozone-told, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが昆布でダシを取って下さった','Gran — youth Dad-kombu-dashi-take','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、漢文を読まれたわよね、あなた?','Grandpa — youth-Chinese-clas-read, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09298',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんがユリの絵を描いてあげる','Sho — Mei-sis-lily-art-draw','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お庭で蟻の行列を見たよ','Mei-sis — me garden-ant-line-saw','Eager child','sho_child'),
    mk('翔くん、絵本で死神のキャラを描く時は気を付けてね','Sho — book-shinigami-art-care','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、邦楽のCDを聴いてみたいよ','Mei-sis — me Jp-music-CD-listen-want','Eager child','sho_child'),
    mk('翔くん、円の半径を求める算数の問題できたわね','Sho — circle-radius-math-solve','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、理科でオゾン層のお話聞いたよ','Mei-sis — me sci-ozone-heard','Earnest child','sho_child'),
    mk('翔くん、お祖母ちゃんがダシを取って下さるおうどん大好きね','Sho — Grandma-dashi-udon-love','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんから漢文の本もらったよ','Mei-sis — me Dad-Chinese-clas-book-got','Proud close','sho_child'),
  ]},
  {id:'conv_09299',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前ん家の庭にユリ咲いてんな','Riku — your-garden-lily-bloom','Praising teen','sakura_teen'),
    mk('お前、お弁当に蟻が入ってたな、桜','You — bento-ant Sakura','Wry','riku_teen'),
    mk('リク、お前、死神のキャラ好きだろ?','Riku — shinigami-chara-like?','Curious','sakura_teen'),
    mk('お前、音楽の授業で邦楽やったろ?桜','You — music-Jp-music? Sakura','Curious','riku_teen'),
    mk('リク、お前、数学で半径の計算苦手だろ?','Riku — math-radius-bad?','Wry','sakura_teen'),
    mk('お前、理科でオゾン層の単元やったろ?桜','You — sci-ozone? Sakura','Curious','riku_teen'),
    mk('リク、お前、給食のダシ巻き卵好きだろ?','Riku — lunch-dashi-egg-like?','Curious','sakura_teen'),
    mk('お前、国語で漢文の単元やったろ?桜','You — Jp-Chinese-clas? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09300',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お庭にユリの花を植えたわよ','Sho — garden-lily-plant','Tender','yumiko_mom'),
    mk('ママ、ぼく、お部屋に蟻が入ったらどうしよう','Mom — me room-ant-how','Curious child','sho_child'),
    mk('翔くん、絵本のキャラに死神が出てきたわね','Sho — book-chara-shinigami','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんが邦楽を聴いてらしたよ','Mom — me Dad-Jp-music-listen','Eager child','sho_child'),
    mk('翔くん、お庭の植栽の半径を考えて並べましょうね','Sho — garden-plant-radius-arrange','Direction','yumiko_mom'),
    mk('ママ、ぼく、理科でオゾン層の研究したよ','Mom — me sci-ozone-research','Proud child','sho_child'),
    mk('翔くん、お祖母ちゃんがダシをひいて下さるわね','Sho — Grandma-dashi-take','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんが漢文の本くれたよ','Mom — me Dad-Chinese-clas-book-got','Eager close','sho_child'),
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

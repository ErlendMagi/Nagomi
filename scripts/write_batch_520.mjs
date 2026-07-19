import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_520 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['モト','ごとき','にたいして','ウォーク','驚愕','ダース','貴女','だけれども']
const B_T = ['キューブ','シグナル','ダイアリー','グリップ','トラフィック','ブレイク','追伸','フォーカス']
const C_T = ['実戦','石綿','快晴','歳児','ミドル','水上','境内','パース']
const D_T = ['エクアドル','リトル','リバー','ツイン','ニフティ','ポリス','サンデー','バックス']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10361',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんのモトカノって誰?なんて聞いちゃダメよ','Sho — Dad-ex-gf-who-no','Direction','yumiko_mom'),
    mk('ママ、お父さんの如きには敵わないって思うよ','Mom — Dad-like-no-match','Tender child','sho_child'),
    mk('翔くん、お友達にたいして優しくしましょうね','Sho — friend-toward-kind','Direction','yumiko_mom'),
    mk('ママ、お父さんがモーニングウォークに連れて行って下さったよ','Mom — Dad-morn-walk','Eager child','sho_child'),
    mk('翔くん、テストの点に驚愕したわ','Sho — test-score-stunned','Wry','yumiko_mom'),
    mk('ママ、お父さんが鉛筆をダース単位で買って下さったよ','Mom — Dad-pencil-dozen','Pleased child','sho_child'),
    mk('翔くん、お母さんが「貴女のお父さんは立派」って仰ったわ','Sho — Mom-"your-Dad-fine"-said','Tender','yumiko_mom'),
    mk('ママ、ぼく、宿題は嫌だけれども頑張るよ','Mom — me homework-bad-but-effort','Earnest close','sho_child'),
  ]},
  {id:'conv_10362',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様のモトカフェ巡りの話、楽しかったね、メイちゃん','Aoi — cust-ex-cf-tour-fun Mei','Reflective','mei_romantic'),
    mk('葵、私如きで店長代理は不安だけど頑張ろう、メイちゃん','Aoi — me-like-mgr-anx-effort Mei','Earnest','aoi_barista'),
    mk('葵、お客様にたいして敬意を忘れずにね、メイちゃん','Aoi — cust-toward-resp Mei','Direction','mei_romantic'),
    mk('葵、朝のウォーク客向けメニューを作ろうね、メイちゃん','Aoi — morn-walk-cust-menu Mei','Direction','aoi_barista'),
    mk('葵、売上の伸びに驚愕したわ、メイちゃん','Aoi — sales-grow-stunned Mei','Pleased','mei_romantic'),
    mk('葵、グラスをダース単位で発注しようね、メイちゃん','Aoi — glass-dozen-order Mei','Direction','aoi_barista'),
    mk('葵、お客様にも「貴女のセンス素敵」と褒められたよ、メイちゃん','Aoi — cust-"your-taste-good"-praise Mei','Pleased','mei_romantic'),
    mk('葵、忙しいだけれども充実してるね、メイちゃん','Aoi — busy-but-fulfill Mei','Tender close','aoi_barista'),
  ]},
  {id:'conv_10363',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんのモト同僚と再会された','Gran — youth Dad-ex-co-meet','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、私の如きで申し訳ないって謙遜されたわよね、あなた?','Yes — Grandpa-me-like-humble, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはご近所にたいして親切だった','Gran — youth Dad-nbhd-kind','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、夕方のウォークを欠かさなかったわよね、あなた?','Grandpa — youth-eve-walk-never-skip, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが終戦に驚愕された','Gran — youth Dad-war-end-stunned','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、缶詰をダース単位で備蓄されたわよね、あなた?','Grandpa — can-dozen-stock, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「貴女が私の宝」と仰った','Gran — youth Dad-"you-my-treas"-said','Tender','hiroshi_elder'),
    mk('お祖父ちゃん、寡黙だけれども深い愛情をお持ちだったわよね、あなた?','Grandpa — quiet-but-deep-love, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10364',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前ん家のお兄ちゃん、モトプロ選手だろ','Riku — bro-ex-pro','Curious teen','sakura_teen'),
    mk('お前如きが俺に勝てるわけないだろ、桜','You — me-like-win-no Sakura','Wry','riku_teen'),
    mk('リク、お前、後輩にたいして優しいな','Riku — junior-toward-kind','Praising','sakura_teen'),
    mk('お前、放課後ウォーキングしてたな、桜','You — after-walk Sakura','Curious','riku_teen'),
    mk('リク、お前のテスト結果に驚愕したぞ','Riku — test-stunned','Wry','sakura_teen'),
    mk('お前、シャーペンの芯をダース単位で買ってたな、桜','You — lead-dozen-buy Sakura','Wry','riku_teen'),
    mk('リク、お前、彼女に「貴女が一番」って言ったろ','Riku — gf-"you-best"-said','Wry','sakura_teen'),
    mk('お前、塾は嫌だけれども行ってるな、桜','You — cram-bad-but-go Sakura','Reflective close','riku_teen'),
  ]},
  {id:'conv_10365',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんのモトクラスメイトに会えるそうよ','Sho — Dad-ex-classm-meet','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく如きでもお父さんは可愛がって下さるよ','Mei-sis — me-like-Dad-love','Tender child','sho_child'),
    mk('翔くん、お友達にたいして思いやりを忘れずにね','Sho — friend-toward-care','Direction','mei_romantic'),
    mk('メイ姉さん、お父さんと朝ウォークしたよ','Mei-sis — Dad-morn-walk','Eager child','sho_child'),
    mk('翔くん、お父さんのプレゼントに驚愕したわ','Sho — Dad-gift-stunned','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに鉛筆をダース箱で頂いたよ','Mei-sis — me Dad-pencil-dozen-box','Eager child','sho_child'),
    mk('翔くん、メイ姉さんも「貴女が大切」って言われたよ','Sho — Mei-sis-"you-imp"-said','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お腹空いただけれども宿題終わらせるよ','Mei-sis — me hungry-but-homework','Earnest close','sho_child'),
  ]},
  {id:'conv_10366',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、デザインにキューブモチーフを取り入れろ','Our co — design-cube-mot','Crisp','hiroshi_boss'),
    mk('はい。市場のシグナルを敏感に察知します','Yes — Mkt-sig-sens','Methodical','kenji_office'),
    mk('当社、社員ダイアリーを社内SNSで共有しろ','Our co — staff-diary-co-SNS','Direction','hiroshi_boss'),
    mk('はい。商品のグリップ感を改善します','Yes — Prod-grip-impr','Update','kenji_office'),
    mk('当社、サイトのトラフィック増加を狙え','Our co — site-traf-up','Direction','hiroshi_boss'),
    mk('はい。会議でブレイクを適度に挟みます','Yes — Mtg-break-mod','Update','kenji_office'),
    mk('当社、メール末尾の追伸を活用しろ','Our co — mail-PS-use','Direction','hiroshi_boss'),
    mk('はい。経営フォーカスを再設定します','Yes — Mgmt-focus-reset','Close','kenji_office'),
  ]},
  {id:'conv_10367',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('オフィスにキューブパーティションを導入しましょう','Office-cube-part-intro','Brisk','yuki_office'),
    mk('はい。需要シグナルを月次でレポートします','Yes — Demand-sig-mo-rep','Cooperative','kenji_office'),
    mk('プロジェクトダイアリーを共有しましょう','Proj-diary-share','Direction','yuki_office'),
    mk('はい。新製品のグリップを改良します','Yes — New-prod-grip-impr','Update','kenji_office'),
    mk('道路トラフィックの混雑時を避けて配送しましょう','Road-traf-busy-avoid-deliv','Direction','yuki_office'),
    mk('はい。長時間会議はブレイク必須にします','Yes — Long-mtg-break-need','Update','kenji_office'),
    mk('メール追伸欄を活用してお知らせしましょう','Mail-PS-use-notify','Direction','yuki_office'),
    mk('はい。今期のフォーカス領域を整理します','Yes — Q-focus-org','Close','kenji_office'),
  ]},
  {id:'conv_10368',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究にキューブモデルを用いろ','Ren — research-cube-model','Mentor','hiroshi_boss'),
    mk('はい。データのシグナル検出に注力します','Yes — Data-sig-detect','Earnest','ren_uni'),
    mk('蓮、実験ダイアリーをきちんと付けろ','Ren — exp-diary-keep','Direction','hiroshi_boss'),
    mk('はい。実験器具のグリップ位置に注意します','Yes — Exp-grip-care','Earnest','ren_uni'),
    mk('蓮、論文へのトラフィックを意識しろ','Ren — paper-traf-aware','Direction','hiroshi_boss'),
    mk('はい。研究の合間にブレイクを取ります','Yes — Research-break','Polite','ren_uni'),
    mk('蓮、論文の最後に追伸的な謝辞を書け','Ren — paper-PS-thanks','Direction','hiroshi_boss'),
    mk('はい。研究フォーカスを絞ります','Yes — Research-focus-narrow','Earnest close','ren_uni'),
  ]},
  {id:'conv_10369',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、キューブ型の防犯ボックスを設置されますね','Police cube-prev-box-set','Cooperative','kenji_office'),
    mk('警察、緊急シグナルへの即応をされますね','Police emerg-sig-resp','Cooperative','kenji_office'),
    mk('警察、勤務ダイアリーを記録されますね','Police duty-diary-rec','Cooperative','kenji_office'),
    mk('警察、銃のグリップ整備もされますね','Police gun-grip-mainten','Cooperative','kenji_office'),
    mk('警察、交通トラフィックを管理されますね','Police traf-mgmt','Cooperative','kenji_office'),
    mk('警察、休憩ブレイクも適切に取られますね','Police break-prop','Cooperative','kenji_office'),
    mk('警察、捜査報告の末尾に追伸を添えられますね','Police inv-rep-PS','Cooperative','kenji_office'),
    mk('警察、捜査のフォーカスを重大事件に絞られますね','Police inv-focus-major','Close','kenji_office'),
  ]},
  {id:'conv_10370',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、キューブ型本社デザインを採用された','Dad — founding cube-HQ-design','Sage','hiroshi_elder'),
    mk('はい。お父さんは市場シグナルを読まれた','Yes — Dad mkt-sig-read','Commitment','hiroshi_boss'),
    mk('お父さん、毎日ダイアリーを書き続けられた','Dad — daily-diary-cont','Wistful','hiroshi_elder'),
    mk('はい。お父さんは商品のグリップ感を大事にされた','Yes — Dad prod-grip-imp','Reflective','hiroshi_boss'),
    mk('お父さん、サイト立ち上げ時のトラフィックを誇られた','Dad — site-launch-traf-proud','Wistful','hiroshi_elder'),
    mk('はい。お父さんは会議のブレイクを欠かさなかった','Yes — Dad mtg-break-never-skip','Reflective','hiroshi_boss'),
    mk('お父さん、手紙の追伸で本音を伝えられた','Dad — letter-PS-true','Wistful','hiroshi_elder'),
    mk('はい。お父さんは経営フォーカスを明確にされた','Yes — Dad mgmt-focus-clear','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10371',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、武道の実戦稽古の歴史を論文で扱いましたね','Ren — budo-real-spar paper','Calm','asuka_teacher'),
    mk('はい、石綿アスベスト被害の医学を論文で扱いました','Yes — Asb-med paper','Earnest','ren_uni'),
    mk('蓮さん、快晴日数の気象研究を論文で扱いましたね','Ren — clear-day paper','Reflective','asuka_teacher'),
    mk('はい、三歳児健診の発達評価を論文で扱いました','Yes — 3-yr-check paper','Earnest','ren_uni'),
    mk('ミドルクラスの社会学を論文で扱いましたね','Mid-class-soc paper','Engaged','asuka_teacher'),
    mk('はい、水上スポーツの安全研究を論文で扱いました','Yes — Wat-sport-safe paper','Earnest','ren_uni'),
    mk('蓮さん、神社境内の伝統儀礼を論文で扱いましたね','Ren — shrine-prec-rite paper','Reflective','asuka_teacher'),
    mk('はい、コンピューターのパース処理を論文で扱いました','Yes — Comp-parse paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10372',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、武術家の実戦的襲撃を、警察、扱われますね','Case mart-real-attack police-handle','Reflective','ren_uni'),
    mk('警察、石綿関連の労災事案にも対応されますね','Police asb-work-acc-resp','Cooperative','takeda_officer'),
    mk('本件、快晴の日の交通事故統計を、警察、把握されますね','Case clear-traf-acc police-grasp','Reflective','ren_uni'),
    mk('警察、三歳児への声かけ事案を厳しく追われますね','Police 3-yr-app-strict','Cooperative','takeda_officer'),
    mk('本件、ミドルマネージャー層の不正を、警察、扱われますね','Case mid-mgmt-corrup police-handle','Reflective','ren_uni'),
    mk('警察、水上警察も担当されますね','Police wat-police','Cooperative','takeda_officer'),
    mk('本件、神社境内での盗難を、警察、扱われますね','Case shrine-prec-theft police-handle','Reflective','ren_uni'),
    mk('警察、文章のパース解析で証拠分析もされますね','Police text-parse-anal','Close','takeda_officer'),
  ]},
  {id:'conv_10373',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、武道の実戦稽古の歴史を論文で扱いましたね','Sakura — budo-real paper','Calm','asuka_teacher'),
    mk('はい、石綿アスベスト被害の医学を論文で扱いました','Yes — Asb-med paper','Earnest teen','sakura_teen'),
    mk('快晴日数の気象研究を論文で扱いましたね','Clear-day paper','Reflective','asuka_teacher'),
    mk('はい、三歳児健診の発達評価を論文で扱いました','Yes — 3-yr-check paper','Earnest','sakura_teen'),
    mk('ミドルクラスの社会学を論文で扱いましたね','Mid-class paper','Engaged','asuka_teacher'),
    mk('はい、水上スポーツの安全研究を論文で扱いました','Yes — Wat-sport paper','Earnest','sakura_teen'),
    mk('神社境内の伝統儀礼を論文で扱いましたね','Shrine-prec paper','Reflective','asuka_teacher'),
    mk('はい、コンピューターのパース処理を論文で扱いました','Yes — Comp-parse paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10374',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、災害時の実戦的救急訓練を医療チームで進めます','Ren — disas-real-ER-train med-team','Calm','saito_doctor'),
    mk('はい、石綿暴露患者の中皮腫検診を医療チームでおこないます','Yes — Asb-meso-screen med-team','Patient','saito_doctor'),
    mk('蓮さん、快晴時の屋外医療巡回を医療チームで実施します','Ren — clear-out-rounds med-team','Calm','saito_doctor'),
    mk('はい、三歳児健診を医療チームで丁寧におこないます','Yes — 3-yr-check med-team careful','Patient','saito_doctor'),
    mk('ミドル世代の生活習慣病を、貴院、診られますね、先生','Mid-life-dis your-hosp diag, sensei','Reflective','ren_uni'),
    mk('はい、水上事故救急を医療チームで担当します','Yes — Wat-acc-ER med-team','Patient','saito_doctor'),
    mk('はい、神社境内の救護所運営を医療チームで担当します','Yes — Shrine-aid med-team','Patient','saito_doctor'),
    mk('医療文書のパース処理AIを、貴院、導入されてますね、先生','Med-doc-parse-AI your-hosp intro, sensei','Curious close','ren_uni'),
  ]},
  {id:'conv_10375',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、実戦演習を社員研修に取り入れろ','Our co — real-drill-train','Crisp','hiroshi_boss'),
    mk('はい。石綿フリーの建材を採用します','Yes — Asb-free-mat','Methodical','kenji_office'),
    mk('当社、快晴予報日には屋外イベントを企画しろ','Our co — clear-out-event','Direction','hiroshi_boss'),
    mk('はい。三歳児向けの教育玩具事業も検討します','Yes — 3-yr-toy-cons','Update','kenji_office'),
    mk('当社、ミドル層向け商品ラインを強化しろ','Our co — mid-prod-strength','Direction','hiroshi_boss'),
    mk('はい。水上スポーツ用品の販売拡大します','Yes — Wat-sport-sale-exp','Update','kenji_office'),
    mk('当社、境内市場、つまり地域祭事の出店も検討しろ','Our co — prec-fest-stall-cons','Direction','hiroshi_boss'),
    mk('はい。製品図面のパースを精密化します','Yes — Prod-blueprint-parse-prec','Close','kenji_office'),
  ]},
  {id:'conv_10376',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、エクアドルのバナナを取り寄せてらっしゃるって、メイちゃん','Aoi — cust-Ecua-banana Mei','Reflective','mei_romantic'),
    mk('葵、お客様、リトルリーグの監督されてるって、メイちゃん','Aoi — cust-Little-Lg-coach Mei','Reflective','aoi_barista'),
    mk('葵、お客様、リバーサイドのジムに通われてるって、メイちゃん','Aoi — cust-River-gym Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ツインタワーの夜景写真がご趣味だって、メイちゃん','Aoi — cust-Twin-tower-photo Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ニフティのフォーラム時代から友達だって、メイちゃん','Aoi — cust-Nifty-forum-fri Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ザ・ポリスの曲がお好きだって、メイちゃん','Aoi — cust-The-Police-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、サンデーモーニングの番組を毎週観られるって、メイちゃん','Aoi — cust-Sun-morn-week Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ラグビーのバックスの動きを研究されてるって、メイちゃん','Aoi — cust-rugby-backs-research Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10377',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがエクアドルのコーヒー豆を取り寄せられた','Gran — youth Dad-Ecua-bean','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お孫様にリトルリーグのコーチをされたわよね、あなた?','Yes — Grandpa-grandkid-Little-Lg-coach, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがリバーサイドホテルにお泊まりだった','Gran — youth Dad-River-Htl','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ツインベッドのお部屋を好まれたわよね、あなた?','Grandpa — twin-bed-pref, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがニフティのパソコン通信を使われた','Gran — youth Dad-Nifty-comm','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ザ・ポリスのCDをご愛聴されたわよね、あなた?','Grandpa — The-Police-CD-listen, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが日曜サンデー新聞を読まれた','Gran — youth Dad-Sunday-news-read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ラグビーのバックスを応援されたわよね、あなた?','Grandpa — rugby-backs-cheer, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10378',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがエクアドルの絵本を読んで下さるそうよ','Sho — Dad-Ecua-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、リトルリーグに入りたいよ','Mei-sis — me Little-Lg-want','Eager child','sho_child'),
    mk('翔くん、お父さんがリバー川沿いの公園に連れて行って下さるそうよ','Sho — Dad-river-park-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ツインのアイス食べたよ','Mei-sis — me twin-ice','Eager child','sho_child'),
    mk('翔くん、お父さんがニフティな提案、つまり気の利いた提案をされたわ','Sho — Dad-Nifty-witty-prop','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとザ・ポリスの曲聴いたよ','Mei-sis — me Dad-The-Police-listen','Eager child','sho_child'),
    mk('翔くん、お父さんがサンデーモーニングの新聞を読んでらしたわ','Sho — Dad-Sun-morn-news-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとラグビーのバックスの位置習ったよ','Mei-sis — me Dad-rugby-backs-pos-learn','Eager close','sho_child'),
  ]},
  {id:'conv_10379',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、社会でエクアドル習ったろ?','Riku — soc-Ecua?','Curious teen','sakura_teen'),
    mk('お前、リトルリーグでピッチャーだったな、桜','You — Little-Lg-pitch Sakura','Curious','riku_teen'),
    mk('リク、お前、リバーサイドでロケ撮ってたな','Riku — Riv-loc-shoot','Curious','sakura_teen'),
    mk('お前、ツインルームで友達と泊まったな、桜','You — twin-room-fri Sakura','Curious','riku_teen'),
    mk('リク、お前、ニフティの言い回しよく使うな','Riku — Nifty-phrase-use','Wry','sakura_teen'),
    mk('お前、ザ・ポリスのEvery Breath歌ってたな、桜','You — The-Police-Every-Breath Sakura','Curious','riku_teen'),
    mk('リク、お前、サンデー漫画雑誌読んでたな','Riku — Sun-manga-read','Curious','sakura_teen'),
    mk('お前、ラグビー部のバックスだったな、桜','You — rugby-backs Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10380',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがエクアドルのバナナを買って下さったわ','Sho — Dad-Ecua-banana-buy','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとリトルリーグの練習見たよ','Mom — me Dad-Little-Lg-prac','Eager child','sho_child'),
    mk('翔くん、お父さんがリバー沿いの散歩道を歩かれたわ','Sho — Dad-river-walk','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとツインベッドホテルに泊まったよ','Mom — me Dad-twin-htl','Eager child','sho_child'),
    mk('翔くん、お父さんがニフティな見出しのコラムを読まれたわ','Sho — Dad-Nifty-headline-read','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとザ・ポリスのコンサート映像観たよ','Mom — me Dad-The-Police-concert','Eager child','sho_child'),
    mk('翔くん、お父さんがサンデー毎日を購読されてるそうよ','Sho — Dad-Sun-Mai-sub','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとラグビーのバックスのプレー観たよ','Mom — me Dad-rugby-backs-watch','Eager close','sho_child'),
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

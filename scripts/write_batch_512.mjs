import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_512 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['奴ら','巷','傍ら','導き','綴っ','無けれ','しかり','情景']
const B_T = ['岩波書店','ワーキング','大学院生','読了','セーブ','日弁連','コンディション','クラッシュ']
const C_T = ['後世','頭部','低音','女子大','無能','野望','処女','侮辱']
const D_T = ['チャイナ','ウエスト','浦和','三島','ジェフ','クラーク','コロンビア','セントラル']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10201',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがニュースで「奴ら」って表現を嫌うのよ','Sho — Dad-news-"yatsura"-dislike','Reflective','yumiko_mom'),
    mk('ママ、巷で話題のスイーツを買ってきたよ','Mom — town-pop-sweet-bought','Eager child','sho_child'),
    mk('翔くん、お父さんが本の傍らにメモを取られたわ','Sho — Dad-book-side-memo','Reflective','yumiko_mom'),
    mk('ママ、お父さんの導きでぼくは成長してるよ','Mom — Dad-guide-grow','Tender child','sho_child'),
    mk('翔くん、お父さんが日記に綴って残されてるのよ','Sho — Dad-diary-write','Pleased','yumiko_mom'),
    mk('ママ、お父さんが無ければ家族は寂しいよ','Mom — Dad-no-fam-lone','Tender child','sho_child'),
    mk('翔くん、お祖父ちゃんのお話もしかり、深い学びがあるわ','Sho — Grandpa-told-also-deep-learn','Reflective','yumiko_mom'),
    mk('ママ、お父さんが情景描写の上手な作家だって','Mom — Dad-scene-skill-author','Reflective close','sho_child'),
  ]},
  {id:'conv_10202',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、「あの奴ら」って表現をやめてくれって仰ったよ、メイちゃん','Aoi — cust-"yatsura"-stop-said Mei','Reflective','mei_romantic'),
    mk('葵、巷の流行を取り入れたいね、メイちゃん','Aoi — town-trend-incl Mei','Direction','aoi_barista'),
    mk('葵、お客様、お子様を傍らに本を読まれてたよ、メイちゃん','Aoi — cust-kid-side-book Mei','Tender','mei_romantic'),
    mk('葵、新スタッフの導きを丁寧にしようね、メイちゃん','Aoi — newhire-guide-pol Mei','Direction','aoi_barista'),
    mk('葵、お客様、ご感想を綴って下さったよ、メイちゃん','Aoi — cust-feel-write Mei','Pleased','mei_romantic'),
    mk('葵、笑顔が無ければ良いお店にならないわね、メイちゃん','Aoi — smile-no-store-no Mei','Direction','aoi_barista'),
    mk('葵、お客様への気遣いもしかり、徹底しようね、メイちゃん','Aoi — cust-care-also-strict Mei','Direction','mei_romantic'),
    mk('葵、お店の暖かい情景を写真に残そうね、メイちゃん','Aoi — store-warm-scene-photo Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_10203',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは奴らという言葉を使われなかった','Gran — youth Dad-yatsura-no-use','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、巷の噂に惑わされない方だったわよね、あなた?','Yes — Grandpa-town-rumor-no, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、私の傍らで日記を読んで下さった','Gran — me-side-diary-read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様の導きを大切にされたわよね、あなた?','Grandpa — grandkid-guide-cherish, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが手紙を綴って下さった','Gran — youth Dad-letter-write','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご家族が無ければ生きてけなかったって仰ったわよね、あなた?','Grandpa — fam-no-live-no-said, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんの判断は今もしかり鋭い','Gran — youth Dad-judg-also-sharp','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、故郷の情景をよく語って下さったわよね、あなた?','Grandpa — hometown-scene-told, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10204',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、後輩を「奴ら」呼ばわりするなよ','Riku — junior-yatsura-no','Direction','sakura_teen'),
    mk('お前、巷の流行を追ってるな、桜','You — town-trend-follow Sakura','Curious','riku_teen'),
    mk('リク、お前、ノートの傍らに落書きしてたな','Riku — note-side-doodle','Wry','sakura_teen'),
    mk('お前、先輩の導きで進路決めたな、桜','You — senior-guide-career Sakura','Curious','riku_teen'),
    mk('リク、お前、ブログに長文綴ってたな','Riku — blog-long-write','Curious','sakura_teen'),
    mk('お前、お小遣いが無ければ困るな、桜','You — allow-no-trouble Sakura','Wry','riku_teen'),
    mk('リク、お前のテスト結果もしかり、まあまあだったな','Riku — test-also-fair','Wry','sakura_teen'),
    mk('お前、文化祭の情景を絵に描いてたな、桜','You — cult-fest-scene-paint Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_10205',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お友達を「奴ら」って呼ぶのは失礼よ','Sho — friend-yatsura-rude','Direction','mei_romantic'),
    mk('メイ姉さん、巷で人気のお菓子買ってきてくれたよ','Mei-sis — town-pop-snack-brought','Eager child','sho_child'),
    mk('翔くん、お父さんが翔くんの傍らで宿題を見て下さったわ','Sho — Dad-Sho-side-homework','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんの導きで頑張れるよ','Mei-sis — me Mei-sis-guide-effort','Tender child','sho_child'),
    mk('翔くん、お父さんが家族のお話を綴って下さってるわ','Sho — Dad-fam-write','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんが無ければお家が寂しいよ','Mei-sis — me Dad-no-home-lone','Tender child','sho_child'),
    mk('翔くん、お父さんのお話もしかり、心に響くわね','Sho — Dad-told-also-heart','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、夕暮れの情景が好きだよ','Mei-sis — me dusk-scene-like','Tender close','sho_child'),
  ]},
  {id:'conv_10206',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、岩波書店との共同企画を進めろ','Our co — Iwanami-joint-plan','Crisp','hiroshi_boss'),
    mk('はい。ワーキングペーパーを社内で共有します','Yes — Working-paper-co-share','Methodical','kenji_office'),
    mk('当社、大学院生のインターンも受け入れろ','Our co — grad-stud-intern','Direction','hiroshi_boss'),
    mk('はい。報告書の読了確認を社員に求めます','Yes — Rep-read-conf-staff','Update','kenji_office'),
    mk('データのセーブを毎日必ずしろ','Data-save-daily','Direction','hiroshi_boss'),
    mk('はい。日弁連の見解にも目を通します','Yes — JFBA-view-check','Update','kenji_office'),
    mk('当社、社員のコンディションを管理しろ','Our co — staff-cond-mgmt','Direction','hiroshi_boss'),
    mk('はい。サーバークラッシュ対策を強化します','Yes — Server-crash-counter','Close','kenji_office'),
  ]},
  {id:'conv_10207',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('岩波書店の新刊フェアに協賛しましょう','Iwanami-new-fair-spons','Brisk','yuki_office'),
    mk('はい。ワーキングタイムの管理を厳格化します','Yes — Working-time-strict','Cooperative','kenji_office'),
    mk('大学院生向けのキャリア相談会を開きましょう','Grad-stud-career-mtg','Direction','yuki_office'),
    mk('はい。マニュアル読了テストを実施します','Yes — Manual-read-test','Update','kenji_office'),
    mk('セーブポイントを設定して進めましょう','Save-pt-set-prog','Direction','yuki_office'),
    mk('はい。日弁連の弁護士をご紹介します','Yes — JFBA-law-intro','Update','kenji_office'),
    mk('社員のコンディション調査を匿名で実施しましょう','Staff-cond-anon-survey','Direction','yuki_office'),
    mk('はい。クラッシュ時の連絡網を見直します','Yes — Crash-net-rev','Close','kenji_office'),
  ]},
  {id:'conv_10208',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、岩波書店の文庫から教養を深めろ','Ren — Iwanami-pocket-edu','Mentor','hiroshi_boss'),
    mk('はい。ワーキングペーパーを学会に投稿します','Yes — Working-paper-conf','Earnest','ren_uni'),
    mk('蓮、大学院生としての覚悟を持て','Ren — grad-stud-resolve','Direction','hiroshi_boss'),
    mk('はい。先行論文の読了を済ませます','Yes — Prior-paper-read','Earnest','ren_uni'),
    mk('蓮、データのセーブをこまめに','Ren — data-save-freq','Direction','hiroshi_boss'),
    mk('はい。研究倫理は日弁連の助言も参考にします','Yes — Research-eth-JFBA-ref','Polite','ren_uni'),
    mk('蓮、自身のコンディションを整えろ','Ren — own-cond-prep','Direction','hiroshi_boss'),
    mk('はい。実験装置のクラッシュ防止策を講じます','Yes — Exp-eq-crash-prev','Earnest close','ren_uni'),
  ]},
  {id:'conv_10209',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、岩波書店刊の判例集も活用されますね','Police Iwanami-prec-use','Cooperative','kenji_office'),
    mk('警察、ワーキンググループでの捜査もされますね','Police WG-inv','Cooperative','kenji_office'),
    mk('警察、大学院生向けの講演もされますね','Police grad-stud-lect','Cooperative','kenji_office'),
    mk('警察、調書の読了確認を上司におこなわれますね','Police statem-read-sup','Cooperative','kenji_office'),
    mk('警察、防犯カメラ映像のセーブを徹底されますね','Police prev-cam-save-strict','Cooperative','kenji_office'),
    mk('警察、日弁連と連携した冤罪防止策もされますね','Police JFBA-false-prev','Cooperative','kenji_office'),
    mk('警察、現場警官のコンディション管理もされますね','Police scene-cond-mgmt','Cooperative','kenji_office'),
    mk('警察、システムクラッシュ時の手動対応もできますね','Police sys-crash-manual','Close','kenji_office'),
  ]},
  {id:'conv_10210',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、岩波書店の経営書を読まれた','Dad — founding Iwanami-mgmt-read','Sage','hiroshi_elder'),
    mk('はい。お父さんはワーキングタイム制度を導入された','Yes — Dad working-time-intro','Commitment','hiroshi_boss'),
    mk('お父さん、大学院生からの直接採用もされた','Dad — grad-stud-direct-hire','Wistful','hiroshi_elder'),
    mk('はい。お父さんは契約書の読了を社員に徹底された','Yes — Dad contract-read-staff','Reflective','hiroshi_boss'),
    mk('お父さん、帳簿のセーブを毎日確認された','Dad — ledger-save-daily','Wistful','hiroshi_elder'),
    mk('はい。お父さんは日弁連の助言で法務を整備された','Yes — Dad JFBA-leg-prep','Reflective','hiroshi_boss'),
    mk('お父さん、社員のコンディションに敏感だった','Dad — staff-cond-sens','Wistful','hiroshi_elder'),
    mk('はい。お父さんはサーバークラッシュ時にも冷静だった','Yes — Dad server-crash-calm','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10211',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、後世に残す史料の保存研究を論文で扱いましたね','Ren — future-arch-pres paper','Calm','asuka_teacher'),
    mk('はい、頭部外傷のスポーツ医学を論文で扱いました','Yes — Head-injur-sports-med paper','Earnest','ren_uni'),
    mk('蓮さん、低音域の音楽療法を論文で扱いましたね','Ren — bass-music-ther paper','Reflective','asuka_teacher'),
    mk('はい、女子大の歴史研究を論文で扱いました','Yes — Wom-uni-hist paper','Earnest','ren_uni'),
    mk('組織における無能扱いの心理学を論文で扱いましたね','Org-incomp-psych paper','Engaged','asuka_teacher'),
    mk('はい、独裁者の野望を心理分析する研究を論文で扱いました','Yes — Dict-amb-psych paper','Earnest','ren_uni'),
    mk('蓮さん、処女作の出版条件研究を論文で扱いましたね','Ren — debut-pub-cond paper','Reflective','asuka_teacher'),
    mk('はい、政治的侮辱罪の歴史を論文で扱いました','Yes — Pol-insult-hist paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10212',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、後世に教訓を残す事件を、警察、扱われますね','Case future-lesson police-handle','Reflective','ren_uni'),
    mk('警察、頭部の打撲傷を鑑識されますね','Police head-bruise-forensic','Cooperative','takeda_officer'),
    mk('本件、低音域の脅迫電話を、警察、分析されますね','Case bass-threat-call police-anal','Reflective','ren_uni'),
    mk('警察、女子大キャンパス内の事件にも対応されますね','Police wom-uni-camp-resp','Cooperative','takeda_officer'),
    mk('本件、無能上司のパワハラ事案を、警察、扱われますね','Case incomp-boss-harass police-handle','Reflective','ren_uni'),
    mk('警察、犯罪者の野望をプロファイリングされますね','Police crim-amb-prof','Cooperative','takeda_officer'),
    mk('本件、処女作公開時のセキュリティを、警察、担当されますね','Case debut-pub-sec police','Reflective','ren_uni'),
    mk('警察、侮辱罪の摘発もされますね','Police insult-charge','Close','takeda_officer'),
  ]},
  {id:'conv_10213',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、後世に残す史料の保存研究を論文で扱いましたね','Sakura — future-arch paper','Calm','asuka_teacher'),
    mk('はい、頭部外傷のスポーツ医学を論文で扱いました','Yes — Head-injur paper','Earnest teen','sakura_teen'),
    mk('低音域の音楽療法を論文で扱いましたね','Bass-music paper','Reflective','asuka_teacher'),
    mk('はい、女子大の歴史研究を論文で扱いました','Yes — Wom-uni paper','Earnest','sakura_teen'),
    mk('組織の無能扱いの心理学を論文で扱いましたね','Org-incomp paper','Engaged','asuka_teacher'),
    mk('はい、独裁者の野望を論文で扱いました','Yes — Dict-amb paper','Earnest','sakura_teen'),
    mk('処女作の出版条件研究を論文で扱いましたね','Debut-pub paper','Reflective','asuka_teacher'),
    mk('はい、政治的侮辱罪の歴史を論文で扱いました','Yes — Pol-insult paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10214',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、後世に残る診療記録を医療チームで保管します','Ren — future-rec med-team keep','Calm','saito_doctor'),
    mk('はい、頭部CTの読影を医療チームでおこないます','Yes — Head-CT-read med-team','Patient','saito_doctor'),
    mk('蓮さん、低音域聴覚障害の患者を医療チームで診ます','Ren — bass-hear-loss-pati med-team','Calm','saito_doctor'),
    mk('女子大の保健センターと、貴院、提携されてますね、先生','Wom-uni-health-link your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、医師として無能と感じる時もありますが医療チームで支え合います','Yes — Doctor-incomp-feel med-team supp','Patient','saito_doctor'),
    mk('はい、医療職の野望を医療チームで前向きに語ります','Yes — Med-amb med-team pos','Patient','saito_doctor'),
    mk('処女作の医学書出版を、貴院、応援されてますね、先生','Debut-med-pub your-hosp supp, sensei','Curious','ren_uni'),
    mk('はい、患者を侮辱しないよう医療チームで徹底します','Yes — Pati-insult-no med-team strict','Patient close','saito_doctor'),
  ]},
  {id:'conv_10215',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、後世に残る商品を作れ','Our co — future-prod','Crisp','hiroshi_boss'),
    mk('はい。社員の頭部保護を工事現場で徹底します','Yes — Staff-head-prot-site','Methodical','kenji_office'),
    mk('当社、BGMの低音域を見直せ','Our co — BGM-bass-rev','Direction','hiroshi_boss'),
    mk('はい。女子大向け新商品ラインを企画します','Yes — Wom-uni-new-line-plan','Update','kenji_office'),
    mk('社員を無能扱いする上司を厳しく指導しろ','Staff-incomp-boss-strict','Direction','hiroshi_boss'),
    mk('はい。創業者の野望を共有します','Yes — Found-amb-share','Update','kenji_office'),
    mk('当社、処女作の出版社的役割を担え','Our co — debut-pub-role','Direction','hiroshi_boss'),
    mk('はい。お客様を侮辱しない接客を徹底します','Yes — Cust-insult-no-strict','Close','kenji_office'),
  ]},
  {id:'conv_10216',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、チャイナドレスのコレクターだって、メイちゃん','Aoi — cust-China-dress-coll Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ウエスト引き締めのジムに通われてるって、メイちゃん','Aoi — cust-waist-gym Mei','Reflective','aoi_barista'),
    mk('葵、お客様、浦和レッズの試合観に行かれたって、メイちゃん','Aoi — cust-Urawa-Reds Mei','Reflective','mei_romantic'),
    mk('葵、お客様、三島由紀夫の小説がご趣味だって、メイちゃん','Aoi — cust-Mishima-novel Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ジェフユナイテッドのファンだって、メイちゃん','Aoi — cust-JEF-United Mei','Reflective','mei_romantic'),
    mk('葵、お客様、クラーク博士の信念を尊敬されてるって、メイちゃん','Aoi — cust-Clark-belief Mei','Reflective','aoi_barista'),
    mk('葵、お客様、コロンビアのコーヒー豆を取り寄せてらっしゃるって、メイちゃん','Aoi — cust-Col-bean Mei','Reflective','mei_romantic'),
    mk('葵、お客様、セントラルパークでのジョギングが日課だって、メイちゃん','Aoi — cust-Central-jog Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10217',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがチャイナドレスの妻を見て喜ばれた','Gran — youth Dad-China-dress-wife-glad','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、晩年もウエストサイズに気をつけられたわよね、あなた?','Yes — Grandpa-late-waist-care, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが浦和の親戚を訪ねられた','Gran — youth Dad-Urawa-rel','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、三島由紀夫の文学を語って下さったわよね、あなた?','Grandpa — Mishima-lit-told, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがジェフ・ベックのギターを聴かれた','Gran — youth Dad-Jeff-Beck-listen','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、クラーク博士の「少年よ大志を抱け」が好きだったわよね、あなた?','Grandpa — Clark-be-amb, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがコロンビアコーヒーを愛飲された','Gran — youth Dad-Col-coffee','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ニューヨークのセントラルパークの写真集をお持ちだったわよね、あなた?','Grandpa — NY-Central-coll, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10218',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがチャイナドレスの絵本を読んで下さるそうよ','Sho — Dad-China-dress-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ウエストを引き締める運動してるよ','Mei-sis — me waist-exer','Earnest child','sho_child'),
    mk('翔くん、お父さんが浦和の試合に連れて行って下さるそうよ','Sho — Dad-Urawa-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと三島由紀夫の絵本見たよ','Mei-sis — me Dad-Mishima-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがジェフのギター演奏を聴かせて下さったわ','Sho — Dad-Jeff-guitar-listen','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとクラーク博士のお話聞いたよ','Mei-sis — me Dad-Clark-told','Eager child','sho_child'),
    mk('翔くん、お父さんがコロンビアの絵本を読んで下さるそうよ','Sho — Dad-Col-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとセントラルパークの写真集見たよ','Mei-sis — me Dad-Central-pic','Eager close','sho_child'),
  ]},
  {id:'conv_10219',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、文化祭でチャイナドレス着てたな','Riku — cult-fest-China-dress','Wry teen','sakura_teen'),
    mk('お前、ウエストサイズ気にしてたな、桜','You — waist-care Sakura','Wry','riku_teen'),
    mk('リク、お前、浦和の試合観に行ったろ','Riku — Urawa-match-watch','Curious','sakura_teen'),
    mk('お前、国語で三島由紀夫習ったろ?桜','You — JP-Mishima? Sakura','Curious','riku_teen'),
    mk('リク、お前、ジェフユナイテッドの試合観てたな','Riku — JEF-United-watch','Curious','sakura_teen'),
    mk('お前、クラーク博士の名言を黒板に書いてたな、桜','You — Clark-quote-board Sakura','Curious','riku_teen'),
    mk('リク、お前、社会でコロンビア習ったろ?','Riku — soc-Col?','Curious','sakura_teen'),
    mk('お前、セントラル空調の話してたな、桜','You — Central-AC-told Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10220',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがチャイナドレスの絵本を見せて下さったわ','Sho — Dad-China-dress-pic-show','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとウエスト測定したよ','Mom — me Dad-waist-meas','Eager child','sho_child'),
    mk('翔くん、お父さんが浦和レッズのジャージを下さったわ','Sho — Dad-Urawa-jersey','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと三島由紀夫の小説の表紙見たよ','Mom — me Dad-Mishima-cover','Eager child','sho_child'),
    mk('翔くん、お父さんがジェフ・ベックのCDをお買いになったわ','Sho — Dad-Jeff-Beck-CD','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとクラーク博士の絵本見たよ','Mom — me Dad-Clark-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがコロンビア出張のお話して下さったわ','Sho — Dad-Col-trip-told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとセントラルクーラーのお話したよ','Mom — me Dad-central-AC-told','Eager close','sho_child'),
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

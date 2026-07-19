import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_518 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['あめ','サヨナラ','ミーハー','ひとみ','られよ','スキップ','バツ','下敷き']
const B_T = ['行お','コンパイラ','スタック','アクセシビリティ','ラーニング','ウィークリー','インスピレーション','もうける']
const C_T = ['和訳','恩給','エクササイズ','クオリア','メディカル','性器','転化','近親']
const D_T = ['キャサリン','永田町','シェリー','ビクター','ディーン','クラッチ','ハンス','マルタ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10321',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがあめ細工を作って下さったわよ','Sho — Dad-candy-craft','Pleased','yumiko_mom'),
    mk('ママ、お父さんが「サヨナラはまた会う約束」って仰ったよ','Mom — Dad-"farewell-meet"-said','Tender child','sho_child'),
    mk('翔くん、ミーハーな話題ばかりじゃダメよ','Sho — light-only-no','Direction','yumiko_mom'),
    mk('ママ、お父さんのひとみが優しいよ','Mom — Dad-eye-soft','Tender child','sho_child'),
    mk('翔くん、お父さんに「がんばられよ」と言われたわ','Sho — Dad-"effort-rare"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、スキップしながら歩いたよ','Mom — me skip-walk','Eager child','sho_child'),
    mk('翔くん、宿題でバツが付かないようにね','Sho — homework-X-mark-no','Direction','yumiko_mom'),
    mk('ママ、ぼく、本に下敷きを敷いて書いたよ','Mom — me book-pad-write','Eager close','sho_child'),
  ]},
  {id:'conv_10322',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、夏のあめ玉商品お好きだって、メイちゃん','Aoi — cust-summer-candy Mei','Pleased','mei_romantic'),
    mk('葵、お客様にサヨナラを丁寧に言おうね、メイちゃん','Aoi — cust-farewell-pol Mei','Direction','aoi_barista'),
    mk('葵、ミーハーな流行に振り回されないお店にしようね、メイちゃん','Aoi — light-trend-no-shake Mei','Direction','mei_romantic'),
    mk('葵、お客様のひとみが嬉しそうで何より、メイちゃん','Aoi — cust-eye-glad-most Mei','Pleased','aoi_barista'),
    mk('葵、新人にも「やられよ」と励ましの言葉をかけようね、メイちゃん','Aoi — newhire-"do-rare"-encour Mei','Direction','mei_romantic'),
    mk('葵、お子様が店内をスキップして可愛いね、メイちゃん','Aoi — kid-store-skip-cute Mei','Pleased','aoi_barista'),
    mk('葵、お客様のお名前リストにバツマーク付けないでね、メイちゃん','Aoi — cust-name-X-no Mei','Direction','mei_romantic'),
    mk('葵、テーブルに下敷きを敷いてメニュー書こうね、メイちゃん','Aoi — tbl-pad-menu-write Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_10323',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがあめ玉を孫に下さった','Gran — youth Dad-candy-grandkid','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、別れ際にサヨナラを丁寧に仰ったわよね、あなた?','Yes — Grandpa-parting-farewell-pol, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはミーハーじゃない方だった','Gran — youth Dad-light-no','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、優しいひとみで私を見て下さったわよね、あなた?','Grandpa — soft-eye-me-look, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「健康でいられよ」と仰った','Gran — youth Dad-"health-rare"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃にスキップする孫を可愛がられたわよね、あなた?','Grandpa — youth-skip-grandkid-love, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがバツの悪い時もあった','Gran — youth Dad-X-bad-times','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、孫の下敷きを大事にしまわれてたわよね、あなた?','Grandpa — grandkid-pad-keep, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10324',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、あめ玉ばっか舐めてたな','Riku — candy-only','Wry teen','sakura_teen'),
    mk('お前、彼女にサヨナラ言えなかったろ、桜','You — gf-farewell-no? Sakura','Wry','riku_teen'),
    mk('リク、お前、ミーハーすぎだぞ','Riku — light-too','Wry','sakura_teen'),
    mk('お前のひとみがキラキラしてたな、桜','You — eye-spark Sakura','Praising','riku_teen'),
    mk('リク、お前、先輩から「気を付けられよ」と注意されたな','Riku — senior-"care-rare"-warn','Reflective','sakura_teen'),
    mk('お前、放課後スキップしてたな、桜','You — after-sch-skip Sakura','Wry','riku_teen'),
    mk('リク、お前、テストでバツが多かったな','Riku — test-X-many','Wry','sakura_teen'),
    mk('お前、ノートに下敷きしてないから字が薄いな、桜','You — note-pad-no-faint Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10325',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがあめ細工の職人さんとお話されたわ','Sho — Dad-candy-craft-talk','Reflective','mei_romantic'),
    mk('メイ姉さん、お父さんにサヨナラと言うのは寂しいよ','Mei-sis — Dad-farewell-lone','Tender child','sho_child'),
    mk('翔くん、ミーハーな憧れだけじゃダメよ','Sho — light-admire-only-no','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんのひとみが優しいって思うよ','Mei-sis — me Mei-sis-eye-soft','Tender child','sho_child'),
    mk('翔くん、お父さんが「健やかにあられよ」と仰ったわ','Sho — Dad-"healthy-rare"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、楽しくてスキップしちゃったよ','Mei-sis — me happy-skip','Eager child','sho_child'),
    mk('翔くん、宿題にバツが付かないように頑張ろうね','Sho — homework-X-no-effort','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんの下敷きをお借りしたよ','Mei-sis — me Mei-sis-pad-borrow','Eager close','sho_child'),
  ]},
  {id:'conv_10326',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、改革を実行に移し行おう','Our co — ref-impl-okonau','Crisp','hiroshi_boss'),
    mk('はい。社内コンパイラ環境を整備します','Yes — Co-compiler-prep','Methodical','kenji_office'),
    mk('当社、社員食堂で皿のスタックを管理しろ','Our co — staff-cant-stack-mgmt','Direction','hiroshi_boss'),
    mk('はい。ウェブのアクセシビリティを向上します','Yes — Web-accs-up','Update','kenji_office'),
    mk('社員のEラーニング環境を整えろ','Staff-e-learn-prep','Direction','hiroshi_boss'),
    mk('はい。ウィークリーレポートを共有します','Yes — Weekly-rep-share','Update','kenji_office'),
    mk('当社、新製品にインスピレーションを与える展示会を開け','Our co — new-prod-insp-expo','Direction','hiroshi_boss'),
    mk('はい。短期で大きくもうけることに走らない方針です','Yes — Short-big-profit-no','Close','kenji_office'),
  ]},
  {id:'conv_10327',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('提案を実行に移し行おうとしてる段階ね','Prop-impl-okonau-stage','Brisk','yuki_office'),
    mk('はい。コンパイラの更新を進めます','Yes — Compiler-up','Cooperative','kenji_office'),
    mk('倉庫のスタック構造を見直しましょう','Warehouse-stack-rev','Direction','yuki_office'),
    mk('はい。サイトのアクセシビリティ評価を依頼します','Yes — Site-accs-eval-req','Update','kenji_office'),
    mk('Eラーニングコンテンツを充実させましょう','E-learn-rich','Direction','yuki_office'),
    mk('はい。ウィークリーミーティングを定例化します','Yes — Weekly-mtg-reg','Update','kenji_office'),
    mk('お客様にインスピレーションを与える展示にしましょう','Cust-insp-disp','Direction','yuki_office'),
    mk('はい。地道にもうける経営を続けます','Yes — Steady-profit-cont','Close','kenji_office'),
  ]},
  {id:'conv_10328',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文の検証を実際に行おう','Ren — paper-verify-okonau','Mentor','hiroshi_boss'),
    mk('はい。古いコンパイラの解析もおこないます','Yes — Old-compiler-anal','Earnest','ren_uni'),
    mk('蓮、データ構造のスタックを学べ','Ren — data-struct-stack-learn','Direction','hiroshi_boss'),
    mk('はい。研究室のアクセシビリティを改善します','Yes — Lab-accs-impr','Earnest','ren_uni'),
    mk('蓮、Eラーニングでも英語論文を学べ','Ren — e-learn-Eng-paper','Direction','hiroshi_boss'),
    mk('はい。ウィークリー研究ノートを書きます','Yes — Weekly-research-note','Polite','ren_uni'),
    mk('蓮、自然から研究のインスピレーションを得ろ','Ren — nature-research-insp','Direction','hiroshi_boss'),
    mk('はい。研究で短期にもうける事は致しません','Yes — Research-short-profit-no','Earnest close','ren_uni'),
  ]},
  {id:'conv_10329',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、捜査を実際に行おうとされてますね','Police inv-okonau-prog','Cooperative','kenji_office'),
    mk('警察、容疑者使用のコンパイラ解析もされますね','Police suspect-compiler-anal','Cooperative','kenji_office'),
    mk('警察、押収品のスタック管理もされますね','Police seiz-stack-mgmt','Cooperative','kenji_office'),
    mk('警察、署のアクセシビリティ改善もされますね','Police stat-accs-impr','Cooperative','kenji_office'),
    mk('警察、防犯Eラーニングを市民に提供されますね','Police prev-e-learn-citi','Cooperative','kenji_office'),
    mk('警察、ウィークリーで犯罪情報を集約されますね','Police weekly-crime-agg','Cooperative','kenji_office'),
    mk('警察、犯人が映画からインスピレーションを得る事例も把握されますね','Police crim-movie-insp-grasp','Cooperative','kenji_office'),
    mk('警察、犯罪でもうける組織を解体されますね','Police crime-profit-org-dis','Close','kenji_office'),
  ]},
  {id:'conv_10330',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、改革を実行に移し行おうとされた','Dad — founding ref-impl-okonau','Sage','hiroshi_elder'),
    mk('はい。お父さんは初期からコンパイラを社内に導入された','Yes — Dad early-compiler-intro','Commitment','hiroshi_boss'),
    mk('お父さん、倉庫のスタック設計を自ら考えられた','Dad — warehouse-stack-self','Wistful','hiroshi_elder'),
    mk('はい。お父さんは商品のアクセシビリティを大事にされた','Yes — Dad prod-accs-imp','Reflective','hiroshi_boss'),
    mk('お父さん、Eラーニングの可能性を早期に見抜かれた','Dad — e-learn-early-see','Wistful','hiroshi_elder'),
    mk('はい。お父さんはウィークリーで現場を訪ねられた','Yes — Dad weekly-scene-visit','Reflective','hiroshi_boss'),
    mk('お父さん、商品にインスピレーションを与える展示にこだわった','Dad — prod-insp-disp-care','Wistful','hiroshi_elder'),
    mk('はい。お父さんは短期でもうける誘惑を退けられた','Yes — Dad short-profit-temp-reject','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10331',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、英文学の和訳比較研究を論文で扱いましたね','Ren — Eng-lit-trans-cmp paper','Calm','asuka_teacher'),
    mk('はい、戦後の恩給制度史を論文で扱いました','Yes — Postwar-pens paper','Earnest','ren_uni'),
    mk('蓮さん、高齢者向けエクササイズの効果を論文で扱いましたね','Ren — sen-exer-eff paper','Reflective','asuka_teacher'),
    mk('はい、哲学のクオリア概念を論文で扱いました','Yes — Phil-qualia paper','Earnest','ren_uni'),
    mk('メディカルツーリズムの研究を論文で扱いましたね','Med-tour paper','Engaged','asuka_teacher'),
    mk('はい、性器疾患の予防医学を論文で扱いました','Yes — Genit-dis-prev paper','Earnest','ren_uni'),
    mk('蓮さん、化学反応における転化率研究を論文で扱いましたね','Ren — chem-conv-rate paper','Reflective','asuka_teacher'),
    mk('はい、近親婚と遺伝病の関連研究を論文で扱いました','Yes — Cons-mar-genet paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10332',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、外国語証拠の和訳を、警察、依頼されますね','Case for-lang-evid-trans police-req','Reflective','ren_uni'),
    mk('警察、恩給詐欺事案にも対応されますね','Police pens-fraud-resp','Cooperative','takeda_officer'),
    mk('本件、フィットネスエクササイズ施設での事故を、警察、扱われますね','Case fit-exer-fac-acc police-handle','Reflective','ren_uni'),
    mk('警察、被害者のクオリア証言を分析されますね','Police vict-qualia-anal','Cooperative','takeda_officer'),
    mk('本件、メディカル詐欺事件を、警察、捜査されますね','Case med-fraud police-inv','Reflective','ren_uni'),
    mk('警察、性器露出事案にも厳しく対応されますね','Police genit-exposure-strict','Cooperative','takeda_officer'),
    mk('本件、薬物転化の鑑定を、警察、依頼されますね','Case drug-conv-forensic police-req','Reflective','ren_uni'),
    mk('警察、近親者間の事案を、警察、慎重に扱われますね','Case kin-case police-careful','Close','takeda_officer'),
  ]},
  {id:'conv_10333',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、英文学の和訳比較研究を論文で扱いましたね','Sakura — Eng-lit-trans paper','Calm','asuka_teacher'),
    mk('はい、戦後の恩給制度史を論文で扱いました','Yes — Postwar-pens paper','Earnest teen','sakura_teen'),
    mk('高齢者向けエクササイズの効果を論文で扱いましたね','Sen-exer paper','Reflective','asuka_teacher'),
    mk('はい、哲学のクオリア概念を論文で扱いました','Yes — Phil-qualia paper','Earnest','sakura_teen'),
    mk('メディカルツーリズムの研究を論文で扱いましたね','Med-tour paper','Engaged','asuka_teacher'),
    mk('はい、性器疾患の予防医学を論文で扱いました','Yes — Genit-prev paper','Earnest','sakura_teen'),
    mk('化学反応における転化率研究を論文で扱いましたね','Chem-conv paper','Reflective','asuka_teacher'),
    mk('はい、近親婚と遺伝病の関連研究を論文で扱いました','Yes — Cons-mar-genet paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10334',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、英文医療論文の和訳を医療チームで進めます','Ren — Eng-med-trans med-team','Calm','saito_doctor'),
    mk('はい、戦傷恩給患者の医療を医療チームで担当します','Yes — War-pens-pati med-team','Patient','saito_doctor'),
    mk('蓮さん、リハビリエクササイズを医療チームで指導します','Ren — rehab-exer med-team','Calm','saito_doctor'),
    mk('はい、患者のクオリア体験を医療チームで尊重します','Yes — Pati-qualia med-team resp','Patient','saito_doctor'),
    mk('メディカルチェック体制を、貴院、強化されてますね、先生','Med-check your-hosp strength, sensei','Reflective','ren_uni'),
    mk('はい、性器疾患の検診を医療チームで定期的に行います','Yes — Genit-check med-team reg','Patient','saito_doctor'),
    mk('はい、糖尿病のエネルギー転化を医療チームで研究します','Yes — Diab-energy-conv med-team','Patient','saito_doctor'),
    mk('近親結婚カップルの遺伝相談を、貴院、おこなわれますね、先生','Cons-mar-genet-cons your-hosp, sensei','Curious close','ren_uni'),
  ]},
  {id:'conv_10335',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、英文資料の和訳を社内で進めろ','Our co — Eng-doc-trans-co','Crisp','hiroshi_boss'),
    mk('はい。退職者の恩給制度を整備します','Yes — Retir-pens-prep','Methodical','kenji_office'),
    mk('当社、社員のエクササイズ習慣を支援しろ','Our co — staff-exer-supp','Direction','hiroshi_boss'),
    mk('はい。お客様のクオリアを考えた商品設計をします','Yes — Cust-qualia-design','Update','kenji_office'),
    mk('当社、メディカル機器事業も視野に入れろ','Our co — med-eq-view','Direction','hiroshi_boss'),
    mk('はい。性器関連商品の取り扱いには細心の注意を払います','Yes — Genit-prod-care','Update','kenji_office'),
    mk('当社、廃材を資源に転化させる事業を進めろ','Our co — waste-conv-biz','Direction','hiroshi_boss'),
    mk('はい。近親者間取引のリスク管理を徹底します','Yes — Kin-deal-risk-strict','Close','kenji_office'),
  ]},
  {id:'conv_10336',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、キャサリン妃の伝記を読んでらしたよ、メイちゃん','Aoi — cust-Catherine-bio Mei','Reflective','mei_romantic'),
    mk('葵、お客様、永田町で議員秘書をされてたって、メイちゃん','Aoi — cust-Nagatacho-aide Mei','Reflective','aoi_barista'),
    mk('葵、お客様、シェリー酒のソムリエ資格をお持ちだって、メイちゃん','Aoi — cust-sherry-som Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ビクターレコードのコレクターだって、メイちゃん','Aoi — cust-Victor-coll Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ジェームス・ディーンの映画ファンだって、メイちゃん','Aoi — cust-James-Dean-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、車のクラッチ修理ご自身でされるって、メイちゃん','Aoi — cust-car-clutch-self Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ハンス・ベイサーの絵がご趣味だって、メイちゃん','Aoi — cust-Hans-paint-hobby Mei','Reflective','mei_romantic'),
    mk('葵、お客様、マルタ騎士団の歴史を研究されてるって、メイちゃん','Aoi — cust-Malta-knight Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10337',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがキャサリン女王の特集番組を観られた','Gran — youth Dad-Catherine-Queen-prog','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、永田町に通うお仕事だったわよね、あなた?','Yes — Grandpa-Nagatacho-work, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがスペインのシェリー酒を取り寄せた','Gran — youth Dad-Spain-sherry-order','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ビクターのレコードプレーヤーをお持ちだったわよね、あなた?','Grandpa — Victor-record-have, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがジェームス・ディーンに憧れたんだって','Gran — youth Dad-James-Dean-admire','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、車のクラッチ操作が上手だったわよね、あなた?','Grandpa — car-clutch-good, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがハンス・クリスチャン・アンデルセンの童話を読まれた','Gran — youth Dad-Hans-C-A-fairy-read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、マルタ島へ新婚旅行に行ったわよね、あなた?','Grandpa — Malta-honey, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10338',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがキャサリン妃の絵本を読んで下さるそうよ','Sho — Dad-Catherine-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと永田町の絵本見たよ','Mei-sis — me Dad-Nagatacho-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがシェリー酒の歴史本を見せて下さったわ','Sho — Dad-sherry-hist-show','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとビクター犬のロゴ見たよ','Mei-sis — me Dad-Victor-dog-logo','Eager child','sho_child'),
    mk('翔くん、お父さんがジェームス・ディーンの映画を観せて下さるそうよ','Sho — Dad-James-Dean-show','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと自転車のクラッチもどき遊んだよ','Mei-sis — me Dad-bike-clutch-like-play','Eager child','sho_child'),
    mk('翔くん、お父さんがハンスの童話を読んで下さるそうよ','Sho — Dad-Hans-fairy-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとマルタ騎士団の絵本見たよ','Mei-sis — me Dad-Malta-pic','Eager close','sho_child'),
  ]},
  {id:'conv_10339',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、英王室キャサリン妃の特集観てたな','Riku — Catherine-prog','Curious teen','sakura_teen'),
    mk('お前、社会で永田町習ったろ?桜','You — soc-Nagatacho? Sakura','Curious','riku_teen'),
    mk('リク、お前、シェリー酒の名前覚えてたな','Riku — sherry-name','Curious','sakura_teen'),
    mk('お前、ビクターのレコード見てたな、桜','You — Victor-rec-see Sakura','Curious','riku_teen'),
    mk('リク、お前、ジェームス・ディーン主演の映画観てたな','Riku — James-Dean-movie','Wry','sakura_teen'),
    mk('お前、車のクラッチ操作練習してたな、桜','You — car-clutch-prac Sakura','Curious','riku_teen'),
    mk('リク、お前、ハンス・クリスチャン・アンデルセンの童話読んでたな','Riku — Hans-C-A-read','Curious','sakura_teen'),
    mk('お前、社会でマルタ騎士団習ったろ?桜','You — soc-Malta? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10340',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがキャサリン妃の伝記をお買いになったわ','Sho — Dad-Catherine-bio-buy','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと永田町のお話聞いたよ','Mom — me Dad-Nagatacho-told','Eager child','sho_child'),
    mk('翔くん、お父さんがシェリー酒を友人にプレゼントされたわ','Sho — Dad-sherry-fri-gift','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとビクターのレコード聴いたよ','Mom — me Dad-Victor-rec','Eager child','sho_child'),
    mk('翔くん、お父さんがジェームス・ディーンの映画祭に行かれたわ','Sho — Dad-James-Dean-fest','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと車のクラッチ操作見たよ','Mom — me Dad-car-clutch-see','Eager child','sho_child'),
    mk('翔くん、お父さんがハンス童話の本を貸して下さったわ','Sho — Dad-Hans-book-lend','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとマルタ島旅行のお話したよ','Mom — me Dad-Malta-told','Eager close','sho_child'),
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

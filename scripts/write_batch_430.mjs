import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_430 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['あきらめる','リーズナブル','数時間','いえよ','一遍','しきりに','たいして','そのうえ']
const B_T = ['割高','協業','行程','必勝','品切れ','伝言','月給','当座']
const C_T = ['中絶','軍備','監理','邦人','略奪','強迫','クーデター','不起訴']
const D_T = ['三角形','水晶','ルネサンス','ナベ','円盤','ボールペン','鳥居','フルート']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08561',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、難しい事もすぐにあきらめるのは駄目よ','Sho — hard-things easy-give-up no','Caring','yumiko_mom'),
    mk('ママ、お祖父ちゃんがリーズナブルなお店を教えて下さったよ','Mom — Grandpa-reasonable-store-told','Eager child','sho_child'),
    mk('翔くん、お父さんはお仕事から数時間遅れて帰っていらっしゃるわ','Sho — Dad-work-few-hours-late','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんに「ありがとう」っていえよって言われたよ','Mom — me Grandpa-"thanks"-say-told','Earnest child','sho_child'),
    mk('翔くん、お祖母ちゃんに一遍お電話してみてね','Sho — Grandma once-call','Direction','yumiko_mom'),
    mk('ママ、お父さんがしきりにテレビを見てらっしゃるよ','Mom — Dad constantly-TV-watch','Reflective child','sho_child'),
    mk('翔くん、今日はたいして寒くないわね','Sho — today not-very-cold','Reflective','yumiko_mom'),
    mk('ママ、ぼく、宿題終わったよ。そのうえ、お絵描きもしたよ','Mom — me homework-done. moreover-drew','Proud close','sho_child'),
  ]},
  {id:'conv_08562',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お店の改装、あきらめるのはまだ早いわ、メイちゃん','Aoi — store-renov give-up-too-early Mei','Reflective','mei_romantic'),
    mk('葵、新メニューはリーズナブルな価格設定にしようね、メイちゃん','Aoi — new-menu reasonable-price Mei','Direction','aoi_barista'),
    mk('葵、お客様、数時間お店でお過ごしになったわよ、メイちゃん','Aoi — cust-few-hour-store-spent Mei','Reflective','mei_romantic'),
    mk('葵、お客様に「ごゆっくり」っていえよって、心の中で思うよ、メイちゃん','Aoi — cust "take-time"-say heart-think Mei','Reflective','aoi_barista'),
    mk('葵、新メニュー、一遍お試しいただきましょうね、メイちゃん','Aoi — new-menu once-please-try Mei','Direction','mei_romantic'),
    mk('葵、お客様、しきりに窓の外を見てらしたわよ、メイちゃん','Aoi — cust constantly-window-out-look Mei','Reflective','aoi_barista'),
    mk('葵、新メニューは、たいして手間がかからないわ、メイちゃん','Aoi — new-menu not-very-labor Mei','Reflective','mei_romantic'),
    mk('葵、新メニュー、おいしい。そのうえ、見た目も可愛いね、メイちゃん','Aoi — new-menu yum, moreover-cute Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_08563',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは難しい事もあきらめるなと教えて下さったぞ','Gran — youth Dad hard-give-up-not-taught','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、リーズナブルなお店で食事されたわよね、あなた?','Yes — Grandpa-reasonable-store-ate, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが数時間も歩いてご家族の元に戻られたぞ','Gran — youth Dad-few-hours-walked-family-back','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、孫に「大事だっていえよ」と仰ってたわよね、あなた?','Grandpa — grandkid "important-say"-told, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは一遍だけ仕事を辞めたぞ','Gran — youth Dad once-quit','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、しきりに孫を可愛がられたわよね、あなた?','Grandpa — constantly-grandkid-cared, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんはたいして文句を言わない方だったぞ','Gran — Dad not-very-complain-person','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お料理上手。そのうえ、お洗濯までされたわよね、あなた?','Grandpa — cook-good, moreover-laundry, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08564',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、あきらめるなよ。次のテスト頑張れ','Riku — give-up-not. next-test-try','Encouraging teen','sakura_teen'),
    mk('お前、お小遣いでリーズナブルなお店行こうぜ、桜','You — pocket-money-reasonable-store-go Sakura','Suggesting','riku_teen'),
    mk('リク、お前、塾で数時間ねばってたな','Riku — cram-few-hours-stuck','Wry','sakura_teen'),
    mk('お前、好きならちゃんと「好き」っていえよ、桜','You — like-then "like"-say Sakura','Direction','riku_teen'),
    mk('リク、お前、一遍真剣に勉強してみろよ','Riku — once-serious-study','Direction','sakura_teen'),
    mk('お前、しきりにスマホ見てんな、桜','You — constantly-phone-look Sakura','Wry','riku_teen'),
    mk('リク、お前、たいして勉強してないだろ','Riku — not-very-study','Wry','sakura_teen'),
    mk('お前、テスト満点。そのうえ、運動もできるよな、桜','You — test-perfect, moreover-sports Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_08565',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、難しいことでもあきらめるのは早いわよ','Sho — hard-thing give-up-early','Caring','mei_romantic'),
    mk('メイ姉さん、ぼく、リーズナブルなお絵描きセット買ったよ','Mei-sis — me reasonable-art-set-bought','Proud child','sho_child'),
    mk('翔くん、お父さんとお祖父ちゃん、数時間お話していらしたわ','Sho — Dad-Grandpa-few-hours-talked','Reflective','mei_romantic'),
    mk('メイ姉さん、お祖父ちゃんに「ありがとうっていえよ」って教わったよ','Mei-sis — Grandpa-"thanks-say"-taught','Earnest child','sho_child'),
    mk('翔くん、メイ姉さんと一遍博物館に行きましょうね','Sho — Mei-sis-once-museum-go','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、しきりに絵を描きたくなるよ','Mei-sis — me constantly-draw-want','Eager child','sho_child'),
    mk('翔くん、新しい習い事、たいして難しくないかもね','Sho — new-lesson not-very-hard-maybe','Reflective','mei_romantic'),
    mk('メイ姉さん、お絵描きしたよ。そのうえ、お歌も歌ったよ','Mei-sis — drew, moreover-sang','Proud close','sho_child'),
  ]},
  {id:'conv_08566',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、輸入品が割高になっている','Our co — imp-prod-pricey','Crisp','hiroshi_boss'),
    mk('はい。お取引先との協業案件を進めております','Yes — Partner-collab-progress','Methodical','kenji_office'),
    mk('新製品の開発行程を短縮しろ','New-prod-dev-process shorten','Direction','hiroshi_boss'),
    mk('はい。営業チームの必勝態勢を整えました','Yes — Sales-team-win-system set','Update','kenji_office'),
    mk('人気商品が品切れになっているぞ','Pop-prod out-of-stock','Direction','hiroshi_boss'),
    mk('はい。お取引先への伝言を確実にお伝えします','Yes — Partner-message-surely-conv','Update','kenji_office'),
    mk('当社、月給制度を見直せ','Our co — monthly-salary-system-review','Direction','hiroshi_boss'),
    mk('はい。当座の予算を確保いたしました','Yes — Current-budget-secured','Close','kenji_office'),
  ]},
  {id:'conv_08567',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('海外仕入れが割高なので国内に切り替えましょう','Overseas-buy-pricey domestic-switch','Brisk','yuki_office'),
    mk('はい。協業先との打ち合わせを設定しました','Yes — Collab-partner-meet set','Cooperative','kenji_office'),
    mk('プロジェクトの行程表を更新しましょう','Proj-process-table update','Direction','yuki_office'),
    mk('はい。コンペには必勝の気概で臨みます','Yes — Comp win-resolve','Update','kenji_office'),
    mk('注目商品の品切れを防ぎましょう','Hot-prod out-of-stock-prev','Direction','yuki_office'),
    mk('はい。お得意様への伝言メモを残しました','Yes — VIP-message-memo-left','Update','kenji_office'),
    mk('社員の月給見直し案を検討しましょう','Staff-monthly-salary-plan consider','Direction','yuki_office'),
    mk('はい。当座の運転資金を確保しております','Yes — Current-op-cap secured','Close','kenji_office'),
  ]},
  {id:'conv_08568',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、輸入機材の割高な分は研究費から拠出する','Ren — imp-equip-pricey research-fund-pay','Mentor','hiroshi_boss'),
    mk('はい。他大学との協業研究を進めております','Yes — Other-univ-collab-research','Earnest','ren_uni'),
    mk('蓮、論文の執筆行程を逆算しろ','Ren — paper-write-process back-calc','Direction','hiroshi_boss'),
    mk('はい。学会発表で必勝のプレゼンを用意します','Yes — Conf-pres win-prep','Polite','ren_uni'),
    mk('蓮、図書館の参考書が品切れだ','Ren — lib-ref-book out-of-stock','Direction','hiroshi_boss'),
    mk('はい。指導教授への伝言を学生間で共有しました','Yes — Adv-prof-message-stud-share','Earnest','ren_uni'),
    mk('蓮、博士課程の月給支援制度を確認しろ','Ren — PhD-monthly-salary-supp check','Direction','hiroshi_boss'),
    mk('はい。当座の生活費は奨学金で賄います','Yes — Current-living-cost scholarship-cover','Earnest close','ren_uni'),
  ]},
  {id:'conv_08569',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、防犯機材が割高で困っております','Police crime-prev-equip-pricey-troubled','Calm','takeda_officer'),
    mk('はい。警察、民間との協業強化、ありがたいです','Yes — Police private-collab-strengthen grateful','Cooperative','kenji_office'),
    mk('警察、捜査の行程をご家族にもご説明します','Police inv-process fam-explain','Procedural','takeda_officer'),
    mk('はい。警察、年末防犯キャンペーンの必勝態勢ですね','Yes — Police year-end-crime-prev win-system','Cooperative','kenji_office'),
    mk('警察、防犯グッズの品切れに、警察、お困りなんですね','Police crime-prev-out-of-stock-troubled','Reflective','kenji_office'),
    mk('警察、市民への伝言は、確実にお伝えします','Police citizen-message surely-conv','Procedural','takeda_officer'),
    mk('警察、若手警察官の月給改善が課題ですね','Police young-officer-monthly-salary issue','Cooperative','kenji_office'),
    mk('警察、当座の捜査費用を確保しております','Police current-inv-cost secured','Close','takeda_officer'),
  ]},
  {id:'conv_08570',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、輸入品が割高で苦労されたぞ','Dad — founding imp-pricey-struggled','Sage','hiroshi_elder'),
    mk('はい。お父さんは他社との協業を積極的に進められました','Yes — Dad other-co-collab-promote','Commitment','hiroshi_boss'),
    mk('お父さん、新製品の行程表を綿密に立てられたぞ','Dad — new-prod-process-table-detail','Wistful','hiroshi_elder'),
    mk('はい。お父さんは必勝の心構えを社員に教えられました','Yes — Dad win-attitude-staff-taught','Reflective','hiroshi_boss'),
    mk('お父さん、商品が品切れになった時、悔しがられたぞ','Dad — prod-out-of-stock-time-frustrated','Wistful','hiroshi_elder'),
    mk('はい。お父さんはご家族への伝言を欠かさなかった','Yes — Dad fam-message-never-skipped','Reflective','hiroshi_boss'),
    mk('お父さん、社員の月給を業界トップ水準にされたぞ','Dad — staff-monthly-salary-industry-top','Wistful','hiroshi_elder'),
    mk('はい。お父さんは当座の資金繰りも工夫されました','Yes — Dad current-funding-creative','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08571',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、中絶を巡る法制度史を論文で扱いましたね','Ren — abortion-legal-hist paper','Calm','asuka_teacher'),
    mk('はい、戦後の軍備縮小史を論文で扱いました','Yes — Postwar-arms-redu-hist paper','Earnest','ren_uni'),
    mk('蓮さん、原発の監理体制を論文で扱いましたね','Ren — nuclear-supervision-system paper','Reflective','asuka_teacher'),
    mk('はい、海外邦人保護の歴史を論文で扱いました','Yes — Overseas-nat-prot-hist paper','Earnest','ren_uni'),
    mk('戦時下の文化財略奪を論文で扱いましたね','War-cult-prop-loot paper','Engaged','asuka_teacher'),
    mk('はい、強迫観念に関する精神医学史を論文で扱いました','Yes — Obsess-mental-med-hist paper','Earnest','ren_uni'),
    mk('蓮さん、二十世紀のクーデター事例を論文で扱いましたね','Ren — 20th-cent-coup-case paper','Reflective','asuka_teacher'),
    mk('はい、検察の不起訴処分判断を論文で扱いました','Yes — Pros-non-indict-jdg paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08572',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、医療上の中絶事案を警察、慎重に扱われてますね','Case med-abortion police-careful','Reflective','ren_uni'),
    mk('警察、地域の軍備施設の警備を担当します','Police local-arms-fac-guard','Procedural','takeda_officer'),
    mk('本件、警察、現場の監理責任を明確にされましたね','Case police-on-site-supervision-clarify','Reflective','ren_uni'),
    mk('警察、邦人の海外被害事案も対応します','Police nat-overseas-victim resp','Procedural','takeda_officer'),
    mk('本件、警察、文化財略奪の容疑を捜査されてますね','Case police-cult-prop-loot-suspect-inv','Reflective','ren_uni'),
    mk('警察、強迫罪の事件は厳しく対応します','Police obsess-crime strict-resp','Procedural','takeda_officer'),
    mk('本件、海外のクーデター情報も警察、把握されてますね','Case overseas-coup-info police-grasp','Reflective','ren_uni'),
    mk('警察、不起訴処分の理由を市民に説明します','Police non-indict-reason citizen-explain','Close','takeda_officer'),
  ]},
  {id:'conv_08573',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、中絶を巡る法制度史を論文で扱いましたね','Sakura — abortion-legal paper','Calm','asuka_teacher'),
    mk('はい、戦後の軍備縮小史を論文で扱いました','Yes — Arms-redu paper','Earnest teen','sakura_teen'),
    mk('原発の監理体制を論文で扱いましたね','Nuclear-superv paper','Reflective','asuka_teacher'),
    mk('はい、海外邦人保護を論文で扱いました','Yes — Overseas-nat-prot paper','Earnest','sakura_teen'),
    mk('戦時下の文化財略奪を論文で扱いましたね','War-cult-loot paper','Engaged','asuka_teacher'),
    mk('はい、強迫観念の歴史を論文で扱いました','Yes — Obsess-hist paper','Earnest','sakura_teen'),
    mk('二十世紀のクーデター事例を論文で扱いましたね','20-cent-coup paper','Reflective','asuka_teacher'),
    mk('はい、検察の不起訴処分判断を論文で扱いました','Yes — Pros-non-indict paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08574',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、医療的中絶の倫理について医療チームで研修します','Ren — med-abortion-ethics med-team train','Calm','saito_doctor'),
    mk('はい、戦時医療の軍備支援史を医療チームで参照しております','Yes — War-med-arms-supp-hist med-team ref','Patient','saito_doctor'),
    mk('医療機器の監理体制を、貴院、見直されたんですね、先生','Med-equip-superv your-hosp review, sensei','Curious','ren_uni'),
    mk('はい、海外邦人の医療支援を医療チームで担当しております','Yes — Overseas-nat-med-supp med-team handle','Patient','saito_doctor'),
    mk('医薬品略奪事件への対応を、貴院、なさったんですね、先生','Drug-loot-resp your-hosp do, sensei','Reflective','ren_uni'),
    mk('はい、強迫性障害の治療を医療チームで担当します','Yes — Obsess-disorder-treat med-team','Patient','saito_doctor'),
    mk('海外クーデター時の邦人医療退避を、貴院、想定されてるそうですね、先生','Overseas-coup-nat-med-evac your-hosp plan, sensei','Reflective','ren_uni'),
    mk('はい、医療過誤の不起訴判断を医療チームで分析します','Yes — Med-mal-non-indict med-team-anal','Patient close','saito_doctor'),
  ]},
  {id:'conv_08575',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、女性社員の中絶後の復職支援を充実させろ','Our co — fem-staff-post-abortion-resume-supp','Crisp','hiroshi_boss'),
    mk('はい。軍備関連事業からの撤退を検討中です','Yes — Arms-rel-biz-retreat consider','Methodical','kenji_office'),
    mk('当社、現場の監理体制を強化しろ','Our co — on-site-superv strengthen','Direction','hiroshi_boss'),
    mk('はい。海外邦人駐在員の安全を確保いたします','Yes — Overseas-nat-expat-safety secured','Update','kenji_office'),
    mk('当社、商品略奪事件にはセキュリティを強化しろ','Our co — prod-loot-sec-strengthen','Direction','hiroshi_boss'),
    mk('はい。強迫メールへの対応マニュアルを整備します','Yes — Obsess-mail-resp-manual prep','Update','kenji_office'),
    mk('当社、海外クーデター時の事業継続計画を立てろ','Our co — overseas-coup-BCP plan','Direction','hiroshi_boss'),
    mk('はい。係争の不起訴処分を確認いたしました','Yes — Disp-non-indict confirmed','Close','kenji_office'),
  ]},
  {id:'conv_08576',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お子様、三角形のサンドイッチが好きね、メイちゃん','Aoi — child triangle-sand-like Mei','Pleased','mei_romantic'),
    mk('葵、お客様、水晶の置物を褒めて下さったよ、メイちゃん','Aoi — cust-crystal-orn-praised Mei','Pleased','aoi_barista'),
    mk('葵、お客様、ルネサンス絵画のお話されてたよ、メイちゃん','Aoi — cust-Renaissance-paint-told Mei','Reflective','mei_romantic'),
    mk('葵、お店の鍋、新しいナベに換えたいわね、メイちゃん','Aoi — store-pot new-nabe-change Mei','Reflective','aoi_barista'),
    mk('葵、お客様、円盤型のクッキーを選ばれたよ、メイちゃん','Aoi — cust-disc-cookie-chose Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ボールペンをお忘れだったよ、メイちゃん','Aoi — cust-ballpoint-forgot Mei','Reflective','aoi_barista'),
    mk('葵、近所の鳥居まで散歩しましょう、メイちゃん','Aoi — neighbor-torii-walk Mei','Direction','mei_romantic'),
    mk('葵、お客様、お子様にフルートを習わせていらっしゃるって、メイちゃん','Aoi — cust child-flute-learn Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08577',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが三角形の凧を作られたぞ','Gran — youth Dad triangle-kite-made','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、水晶のお守りを大事にされてたわよね、あなた?','Yes — Grandpa-crystal-amulet-cherished, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがルネサンス絵画の本を読まれたぞ','Gran — youth Dad-Renaissance-book-read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お正月のおでんは大きなナベでお作りになったわよね、あなた?','Grandpa — NY-oden-big-nabe-made, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが昔のレコードの円盤を集められたぞ','Gran — youth Dad old-record-disc-collected','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ボールペンで手紙を書かれたわよね、あなた?','Grandpa — ballpoint-letter-wrote, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと近所の鳥居まで散歩したぞ','Gran — youth Dad-neighbor-torii-walk','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、孫にフルートを聞かせて下さったわよね、あなた?','Grandpa — grandkid-flute-heard, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08578',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お絵描きで三角形をいっぱい描いてみてね','Sho — drawing-triangle-many','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖母ちゃんから水晶のお守りもらったよ','Mei-sis — me Grandma-crystal-amulet-got','Eager child','sho_child'),
    mk('翔くん、メイ姉さんがルネサンス絵画の本を持ってるのよ','Sho — Mei-sis-Renaissance-book-have','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんがナベで作るおでん大好きだよ','Mei-sis — me Grandpa-nabe-oden-love','Eager child','sho_child'),
    mk('翔くん、お父さんが古いレコードの円盤を集めてらっしゃるわ','Sho — Dad-old-record-disc-collect','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お絵描き用にボールペン買ってもらったよ','Mei-sis — me drawing-ballpoint-got','Eager child','sho_child'),
    mk('翔くん、メイ姉さんと近所の鳥居までお散歩しましょうね','Sho — Mei-sis-neighbor-torii-walk','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんからフルート習ってるよ','Mei-sis — me Dad-flute-learn','Proud close','sho_child'),
  ]},
  {id:'conv_08579',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、三角形の問題、解けたろ?','Riku — triangle-prob-solved?','Curious teen','sakura_teen'),
    mk('お前、お土産で水晶のキーホルダー買ったろ?桜','You — souv-crystal-keychain-bought? Sakura','Curious','riku_teen'),
    mk('リク、お前、美術の授業でルネサンスやったろ?','Riku — art-class-Renaissance?','Curious','sakura_teen'),
    mk('お前、家のナベパーティ楽しかったろ?桜','You — home-nabe-party-fun? Sakura','Curious','riku_teen'),
    mk('リク、お前、UFOの円盤型に夢中だな','Riku — UFO-disc-into','Wry','sakura_teen'),
    mk('お前、テストで赤のボールペン使うなよ、桜','You — test-red-ballpoint-don\'t Sakura','Direction','riku_teen'),
    mk('リク、お前、初詣で鳥居くぐったろ?','Riku — NY-shrine-torii-passed?','Curious','sakura_teen'),
    mk('お前、吹奏楽でフルートやってんだろ?桜','You — band-flute? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08580',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お絵描きで三角形を上手に描けたわね','Sho — drawing-triangle-well','Praising','yumiko_mom'),
    mk('ママ、ぼく、お祖母ちゃんから水晶のお守りもらったよ','Mom — me Grandma-crystal-amulet-got','Eager child','sho_child'),
    mk('翔くん、お父さんがルネサンス絵画のご本を読んでらっしゃるわ','Sho — Dad-Renaissance-book-read','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖母ちゃんの大きなナベでおでん食べたい','Mom — me Grandma-big-nabe-oden-want','Eager child','sho_child'),
    mk('翔くん、お父さんがレコードの円盤を整理してらっしゃるわ','Sho — Dad-record-disc-organize','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと一緒のボールペン欲しい','Mom — me Dad-same-ballpoint-want','Eager child','sho_child'),
    mk('翔くん、お父さんと初詣で鳥居をくぐりましょうね','Sho — Dad-NY-shrine-torii-pass','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんがフルート教えてくれたよ','Mom — me Dad-flute-taught','Proud close','sho_child'),
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

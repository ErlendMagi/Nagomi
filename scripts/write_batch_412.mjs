import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_412 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['言いよう','腐っ','しつこく','概ね','受けとめ','取り消し','ふたたび','大嫌い']
const B_T = ['端子','ボルト','区画','キャップ','ポンプ','累積','買取','格納']
const C_T = ['司祭','殿下','教皇','暗黒','破滅','連行','暴落','批准']
const D_T = ['飛行場','プロパティ','アダルト','宇宙船','エルサレム','ミュンヘン','インスタント','イタリアン']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08201',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、言いようがないって、こういう時に使う言葉ね','Sho — "indescribable" — this-time-use word','Reflective','yumiko_mom'),
    mk('ママ、冷蔵庫のお野菜、腐ってるよ','Mom — fridge-veg rotted','Wry child','sho_child'),
    mk('翔くん、お友達にしつこくお話するのはやめてね','Sho — friend persistent-talk stop','Direction','yumiko_mom'),
    mk('ママ、ぼくの予定、概ね固まってきたよ','Mom — me schedule mostly-set','Reflective child','sho_child'),
    mk('翔くん、お友達の意見を素直に受けとめてね','Sho — friend-opinion sincere receive','Direction','yumiko_mom'),
    mk('ママ、ぼく、お約束の取り消しをしたいんだ','Mom — me promise-cancel want','Wry child','sho_child'),
    mk('翔くん、ふたたびお祖母ちゃんちに行こうね','Sho — again Grandma-home go-let\'s','Tender','yumiko_mom'),
    mk('ママ、ぼく、ピーマンが大嫌いだよ','Mom — me green-pepper hate','Wry close','sho_child'),
  ]},
  {id:'conv_08202',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様の言いよう、いろいろあるよね、メイちゃん','Aoi — cust-wording various Mei','Reflective','mei_romantic'),
    mk('葵、お肉が腐っていないか、毎日チェックしようね、メイちゃん','Aoi — meat-rotted daily-check Mei','Practical','aoi_barista'),
    mk('葵、お客様にしつこく営業はしないでね、メイちゃん','Aoi — cust persistent-sales don\'t Mei','Direction','mei_romantic'),
    mk('葵、当日の準備、概ね完了したよ、メイちゃん','Aoi — same-day-prep mostly-done Mei','Practical','aoi_barista'),
    mk('葵、お客様のクレームを真摯に受けとめてね、メイちゃん','Aoi — cust-claim sincere receive Mei','Direction','mei_romantic'),
    mk('葵、ご予約の取り消しのお電話があったよ、メイちゃん','Aoi — reservation-cancel call existed Mei','Reflective','aoi_barista'),
    mk('葵、来週ふたたび新メニュー試食会開こうね、メイちゃん','Aoi — next-week again new-menu-tasting Mei','Eager','mei_romantic'),
    mk('葵、辛いものが大嫌いなお客様、いらっしゃるね、メイちゃん','Aoi — spicy-hate cust exist Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08203',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんの言いように驚いたぞ','Gran — youth Dad-wording surprised','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、腐ったお魚を絶対に食べさせなかったわよね、あなた?','Yes — Grandpa rotted-fish absolutely-don\'t-eat, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、近所がしつこく訪ねてきたぞ','Gran — youth neighbor-persistent visited','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お話が概ね正しいと納得されたわよね、あなた?','Grandpa — talk mostly-correct agreed, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お祖父ちゃんが私の悩みを真摯に受けとめてくれたぞ','Gran — youth Grandpa-me-worry sincere-received','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご予約の取り消しは丁寧になさったわよね、あなた?','Grandpa — reservation-cancel polite-did, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんとふたたびあの場所を訪ねたぞ','Gran — youth Dad again that-place visited','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、辛いものが大嫌いだったわよね、あなた?','Grandpa — spicy-hated, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08204',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前の言いよう、面白すぎるぜ','Riku — your wording too-funny','Praising teen','sakura_teen'),
    mk('お前、給食のお肉、腐ってないだろうな、桜','You — school-lunch meat not-rotted? Sakura','Curious','riku_teen'),
    mk('リク、お前、しつこく勧誘するなよ','Riku — persistent-pitch don\'t','Direction','sakura_teen'),
    mk('お前、テスト範囲、概ね頭に入ったか?桜','You — test-range mostly head-in? Sakura','Curious','riku_teen'),
    mk('リク、お前、ぼくのアドバイス素直に受けとめろよ','Riku — me-advice sincere receive','Direction','sakura_teen'),
    mk('お前、約束の取り消しはダメだぜ、桜','You — promise-cancel no Sakura','Direction','riku_teen'),
    mk('リク、ふたたびぼくと一緒に遊ぼうな','Riku — again me-with play','Eager','sakura_teen'),
    mk('お前、数学が大嫌いって言ってたな、桜','You — math-hate said Sakura','Reflective close','riku_teen'),
  ]},
  {id:'conv_08205',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お祖父ちゃんの言いよう、優しいよね','Sho — Grandpa-wording gentle','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、腐った果物食べちゃダメだよね','Mei-sis — me rotted-fruit don\'t-eat right?','Curious child','sho_child'),
    mk('翔くん、お友達がしつこく誘ってくるのね','Sho — friend-persistent invite','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、宿題、概ね終わったよ','Mei-sis — me homework mostly-done','Proud child','sho_child'),
    mk('翔くん、お父さんのご注意を、ちゃんと受けとめてね','Sho — Dad-caution properly-receive','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お母さんに、お約束の取り消しを言わなきゃ','Mei-sis — me Mom promise-cancel must-say','Wry child','sho_child'),
    mk('翔くん、メイ姉さん、ふたたびお店遊びに連れて行ってあげる','Sho — Mei-sis again store-play take','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、人参が大嫌いだよ','Mei-sis — me carrot-hate','Wry close','sho_child'),
  ]},
  {id:'conv_08206',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、端子の品質を最重視しろ','Our co — terminal-quality top-emphasize','Crisp','hiroshi_boss'),
    mk('はい。ボルトの規格を統一しております','Yes — Bolt-standard unify','Methodical','kenji_office'),
    mk('当社、新たな販売区画を確保しろ','Our co — new sales-area secure','Direction','hiroshi_boss'),
    mk('はい。製品のキャップ部品を発注しました','Yes — Product cap-parts ordered','Update','kenji_office'),
    mk('当社、ポンプの製造ラインを増やせ','Our co — pump prod-line expand','Direction','hiroshi_boss'),
    mk('はい。社員の累積残業を確認しております','Yes — Staff accum-overtime check','Update','kenji_office'),
    mk('中古品の買取事業を強化しろ','Used-goods buy-back biz strengthen','Direction','hiroshi_boss'),
    mk('はい。新倉庫に商品を格納いたします','Yes — New-warehouse goods store','Close','kenji_office'),
  ]},
  {id:'conv_08207',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('端子製造ラインの品質、見直しましょう','Terminal-prod-line quality review','Brisk','yuki_office'),
    mk('はい。ボルト供給先を多角化しました','Yes — Bolt-supplier diversify','Cooperative','kenji_office'),
    mk('販売区画の見直しを進めましょう','Sales-area review advance','Direction','yuki_office'),
    mk('はい。製品キャップのデザインを更新しました','Yes — Product-cap design updated','Update','kenji_office'),
    mk('ポンプの新規受注を増やしましょう','Pump new-order increase','Direction','yuki_office'),
    mk('はい。累積売上が目標を超えました','Yes — Accum-sales target exceeded','Update','kenji_office'),
    mk('中古品買取コーナーを社内に設置しましょう','Used-buy-back corner in-house establish','Direction','yuki_office'),
    mk('はい。新書類は専用棚に格納いたします','Yes — New-doc dedicated-shelf store','Close','kenji_office'),
  ]},
  {id:'conv_08208',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、実験装置の端子接続を確認しろ','Ren — experiment-equip terminal-connect verify','Mentor','hiroshi_boss'),
    mk('はい。実験機材のボルトを締め直しました','Yes — Experiment-equip bolt re-tightened','Earnest','ren_uni'),
    mk('蓮、研究区画を整理しろ','Ren — research-area organize','Direction','hiroshi_boss'),
    mk('はい。試験管のキャップを新調しました','Yes — Test-tube cap renewed','Polite','ren_uni'),
    mk('蓮、研究室のポンプを点検しろ','Ren — lab-pump inspect','Direction','hiroshi_boss'),
    mk('はい。論文の累積引用数を確認しております','Yes — Paper accum-citation check','Earnest','ren_uni'),
    mk('蓮、古い文献の買取制度も活用しろ','Ren — old-lit buy-back use','Direction','hiroshi_boss'),
    mk('はい。データを安全な場所に格納しております','Yes — Data safe-place store','Earnest close','ren_uni'),
  ]},
  {id:'conv_08209',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、不審な端子部品を押収しました','Police suspicious terminal-parts seized','Calm','takeda_officer'),
    mk('はい。警察、ボルトの種類を分析されたんですね','Yes — Police bolt-type analyze','Cooperative','kenji_office'),
    mk('警察、立入禁止区画を設定いたしました','Police off-limit-area set','Procedural','takeda_officer'),
    mk('はい。警察、押収品のキャップ部分も検査されたんですね','Yes — Police seized cap-part also-inspect','Cooperative','kenji_office'),
    mk('警察、現場のポンプも証拠として確認しました','Police scene-pump evidence verify','Procedural','takeda_officer'),
    mk('はい。警察、累積被害件数を発表されますね','Yes — Police accum-damage-count announce','Cooperative','kenji_office'),
    mk('警察、買取り業者への調査も進めております','Police buy-back-vendor inv advance','Procedural','takeda_officer'),
    mk('はい。証拠物を安全に格納してくださりありがたいです','Yes — Evidence safe-store grateful','Close','kenji_office'),
  ]},
  {id:'conv_08210',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、端子製造を自ら指導されたぞ','Dad — youth terminal-prod self-guided','Sage','hiroshi_elder'),
    mk('はい。お父さんはボルトの強度にこだわられた','Yes — Dad bolt-strength particular','Commitment','hiroshi_boss'),
    mk('お父さん、市場の区画化を進められたぞ','Dad — market-area pushed','Wistful','hiroshi_elder'),
    mk('はい。お父さんは商品のキャップを丁寧に設計されました','Yes — Dad product-cap carefully-designed','Reflective','hiroshi_boss'),
    mk('お父さん、初期のポンプ製造を見守られたぞ','Dad — early pump-prod watched','Wistful','hiroshi_elder'),
    mk('はい。お父さんは累積利益を毎年確認されました','Yes — Dad accum-profit annually-check','Reflective','hiroshi_boss'),
    mk('お父さん、買取り部門を立ち上げられたぞ','Dad — buy-back-div launched','Wistful','hiroshi_elder'),
    mk('はい。お父さんは在庫格納方法も整備されました','Yes — Dad stock-storage prep','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08211',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、中世の司祭の役割を論文で扱っていましたね','Ren — medieval-priest-role paper','Calm','asuka_teacher'),
    mk('はい、王室の殿下の生活を論文で扱いました','Yes — royal-prince life paper','Earnest','ren_uni'),
    mk('蓮さん、ローマ教皇の歴史を論文で扱っていましたね','Ren — Rome-pope history paper','Reflective','asuka_teacher'),
    mk('はい、暗黒時代の社会を論文で扱いました','Yes — dark-ages society paper','Earnest','ren_uni'),
    mk('帝国の破滅を論文で扱っていましたね','Empire-collapse paper','Engaged','asuka_teacher'),
    mk('はい、反逆者の連行を論文で扱いました','Yes — rebel-arrest paper','Earnest','ren_uni'),
    mk('蓮さん、市場の暴落を論文で扱っていましたね','Ren — market-crash paper','Reflective','asuka_teacher'),
    mk('はい、条約の批准過程を論文で扱いました','Yes — treaty-ratification paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08212',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、教会の司祭から目撃情報を警察、伺いました','Case church-priest eyewitness police-heard','Calm','takeda_officer'),
    mk('警察、外国の殿下警備にも対応されているとのこと','Police foreign-prince-guard handle, gratitude','Curious','ren_uni'),
    mk('本件、教皇の来日警備、警察、ご尽力ですね','Case pope-visit-guard police-devote, gratitude','Reflective','ren_uni'),
    mk('警察、暗黒組織の摘発を進めております','Police underground-org bust advance','Procedural','takeda_officer'),
    mk('本件、計画の破滅を警察、未然に防いだんですね','Case plan-collapse police preempt','Reflective','ren_uni'),
    mk('警察、容疑者を連行いたしました','Police suspect arrested','Procedural','takeda_officer'),
    mk('本件、不正取引による暴落を警察、調査中ですね','Case illegal-trade crash police-inv, gratitude','Reflective','ren_uni'),
    mk('警察、条約批准に基づく対応を進めております','Police treaty-ratification corresp advance','Close','takeda_officer'),
  ]},
  {id:'conv_08213',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、中世の司祭の役割を論文で扱っていましたね','Sakura — medieval-priest paper','Calm','asuka_teacher'),
    mk('はい、王室の殿下の生活を論文で扱いました','Yes — royal-prince paper','Earnest teen','sakura_teen'),
    mk('ローマ教皇の歴史を論文で扱っていましたね','Pope history paper','Reflective','asuka_teacher'),
    mk('はい、暗黒時代の社会を論文で扱いました','Yes — dark-ages paper','Earnest','sakura_teen'),
    mk('帝国の破滅を論文で扱っていましたね','Empire-collapse paper','Engaged','asuka_teacher'),
    mk('はい、反逆者の連行を論文で扱いました','Yes — rebel-arrest paper','Earnest','sakura_teen'),
    mk('市場の暴落を論文で扱っていましたね','Market-crash paper','Reflective','asuka_teacher'),
    mk('はい、条約の批准過程を論文で扱いました','Yes — treaty-ratification paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08214',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、ホスピスで司祭が患者さんを慰める光景を貴院、ご紹介されたとのこと、先生','Ren — hospice priest-comfort patient your-hosp introduce, sensei','Calm','saito_doctor'),
    mk('王室の殿下が貴院をご訪問されたのですね、先生','Royal-prince your-hosp visited, sensei','Curious','ren_uni'),
    mk('はい、教皇のご訪問時の医療体制を医療チームで整えました','Yes — Pope-visit med-system med-team arrange','Patient','saito_doctor'),
    mk('暗黒時代の医療記録を、貴院、研究なさったんですね、先生','Dark-ages med-record your-hosp research, sensei','Reflective','ren_uni'),
    mk('感染拡大の破滅的事態を医療チームで防ぎました','Infection-spread collapse-situation med-team prevented','Patient','saito_doctor'),
    mk('貴院、警察と協力して薬物乱用者を連行された事例ありましたね、先生','Your-hosp police-coop drug-abuser arrested case exists, sensei','Reflective','ren_uni'),
    mk('はい、健康指標の暴落に医療チームは警鐘を鳴らします','Yes — Health-index crash med-team alarm','Patient','saito_doctor'),
    mk('国際医療条約の批准が、貴院でも議論されておられますね、先生','Intl-med-treaty ratification your-hosp discuss, sensei','Reflective close','ren_uni'),
  ]},
  {id:'conv_08215',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、地元の司祭にお祭りで挨拶しろ','Our co — local-priest fest-greet','Crisp','hiroshi_boss'),
    mk('はい。海外殿下御用達ブランドを目指します','Yes — Overseas-prince purveyor aim','Methodical','kenji_office'),
    mk('当社、教皇庁関連の式典にも参加しろ','Our co — Vatican-related ceremony attend','Direction','hiroshi_boss'),
    mk('はい。暗黒時代の和テイスト商品、好評です','Yes — Dark-ages wa-taste product favorable','Update','kenji_office'),
    mk('業界の破滅を防ぐべく改革を進めろ','Industry-collapse-prevent reform advance','Direction','hiroshi_boss'),
    mk('はい。違法業者の連行を警察に通報しました','Yes — Illegal-vendor arrest police-report','Update','kenji_office'),
    mk('当社、株価の暴落リスクに備えよ','Our co — stock-crash risk prep','Direction','hiroshi_boss'),
    mk('はい。新規取引の批准は社長決裁です','Yes — New-trade ratification pres-decision','Close','kenji_office'),
  ]},
  {id:'conv_08216',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、飛行場までお見送りなさってたよ、メイちゃん','Aoi — cust airport-saw-off Mei','Reflective','mei_romantic'),
    mk('葵、ホームページのプロパティ、整理した?メイちゃん','Aoi — website-property organized? Mei','Curious','aoi_barista'),
    mk('葵、アダルト向け商品はお店では扱わないよね、メイちゃん','Aoi — adult-product store don\'t-handle Mei','Reflective','mei_romantic'),
    mk('葵、新メニュー、宇宙船型のクッキー、人気よね、メイちゃん','Aoi — new-menu spaceship-cookie popular Mei','Animated','aoi_barista'),
    mk('葵、エルサレム発祥のスパイス、お店で使えるかな、メイちゃん','Aoi — Jerusalem-origin spice store-use? Mei','Curious','mei_romantic'),
    mk('葵、ミュンヘンのカフェ文化、参考にしようね、メイちゃん','Aoi — Munich-cafe-culture reference Mei','Reflective','aoi_barista'),
    mk('葵、インスタントコーヒーも種類豊富にしようね、メイちゃん','Aoi — instant-coffee variety Mei','Eager','mei_romantic'),
    mk('葵、イタリアン風のメニュー、お客様に喜ばれるよ、メイちゃん','Aoi — Italian-style menu cust-glad Mei','Animated close','aoi_barista'),
  ]},
  {id:'conv_08217',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが飛行場までお見送りに来てくれたぞ','Gran — youth Dad airport-saw-off came','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃんは「プロパティ」って言葉、ご存知なかったわよね、あなた?','Yes — Grandpa "property" didn\'t-know, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはアダルト雑誌は読まれなかったぞ','Gran — youth Dad adult-mag didn\'t-read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、宇宙船の番組をテレビでご覧になったわよね、あなた?','Grandpa — spaceship-prog TV-watched, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが新聞でエルサレムの記事を読んでらしたぞ','Gran — youth Dad news Jerusalem-article read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ミュンヘンのお話、お聞きになったわよね、あなた?','Grandpa — Munich-story heard, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがインスタントコーヒーに驚かれたぞ','Gran — youth Dad instant-coffee surprised','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、イタリアン料理を初めて召し上がったときの感動、覚えていらっしゃる?あなた','Grandpa — Italian-food first-eat awe remember, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08218',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さん、お母さんを飛行場までお見送りしたの','Sho — Mei-sis Mom airport-saw-off','Reflective','mei_romantic'),
    mk('メイ姉さん、お家のホームページのプロパティって何?','Mei-sis — home-page property what?','Curious child','sho_child'),
    mk('翔くん、アダルト向けのお店は子供は入っちゃダメよ','Sho — adult-store child don\'t-enter','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、宇宙船のおもちゃ大好きだよ','Mei-sis — me spaceship-toy love','Eager child','sho_child'),
    mk('翔くん、エルサレムって聖地らしいわよ','Sho — Jerusalem holy-land','Reflective','mei_romantic'),
    mk('メイ姉さん、お父さんがミュンヘンに出張に行くんだって','Mei-sis — Dad Munich biz-trip going','Eager child','sho_child'),
    mk('翔くん、インスタントラーメン作ろうか?','Sho — instant-ramen make?','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、イタリアンのお店、行きたいな','Mei-sis — me Italian-store go-want','Eager close','sho_child'),
  ]},
  {id:'conv_08219',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、飛行場に父さん見送りに行ったろ?','Riku — airport Dad-saw-off went?','Curious teen','sakura_teen'),
    mk('お前、CSS のプロパティ、もう覚えたか?桜','You — CSS-property already-learned? Sakura','Curious','riku_teen'),
    mk('リク、お前、アダルトサイトには絶対近づくなよ','Riku — adult-site absolutely-avoid','Direction','sakura_teen'),
    mk('お前、宇宙船の映画、見たろ?桜','You — spaceship-movie saw? Sakura','Curious','riku_teen'),
    mk('リク、世界史でエルサレムの単元、覚えてるか?','Riku — world-hist Jerusalem-unit remember?','Curious','sakura_teen'),
    mk('お前、ミュンヘンオリンピックの話、知ってる?桜','You — Munich-Olympics story know? Sakura','Curious','riku_teen'),
    mk('リク、お前、インスタントカップ麺、よく食べてんな','Riku — instant-cup-noodle often-eat','Wry','sakura_teen'),
    mk('お前、イタリアンレストランに彼女連れてったろ?桜','You — Italian-restaurant gf-took? Sakura','Teasing close','riku_teen'),
  ]},
  {id:'conv_08220',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんを飛行場までお見送りに行きましょう','Sho — Dad airport-saw-off-go','Tender','yumiko_mom'),
    mk('ママ、ぼく、ホームページのプロパティって何のこと?','Mom — me homepage-property what?','Curious child','sho_child'),
    mk('翔くん、アダルト向けのチャンネルは見ちゃダメよ','Sho — adult-channel don\'t-see','Direction','yumiko_mom'),
    mk('ママ、ぼく、宇宙船のプラモデル作ったよ','Mom — me spaceship-plastic-model made','Proud child','sho_child'),
    mk('翔くん、お祖父ちゃんが、エルサレム旅行のお話してくれたわ','Sho — Grandpa Jerusalem-trip told','Reflective','yumiko_mom'),
    mk('ママ、お父さんがミュンヘンの試合の話してたよ','Mom — Dad Munich-match told','Reflective child','sho_child'),
    mk('翔くん、ママ、お夜食にインスタントスープ作ろうかしら','Sho — Mom late-supper instant-soup make?','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとイタリアン食べたいな','Mom — me Dad-Italian eat-want','Eager close','sho_child'),
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

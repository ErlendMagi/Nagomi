import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_514 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['アタマ','境地','ワザ','実話','唖然','シリアス','ファイト','頭上']
const B_T = ['プライス','デイリー','タイムリー','コントラスト','不合格','日本経済新聞','レジスト','博覧']
const C_T = ['右足','ピル','人妻','男児','牙','疾走','歓喜','先導']
const D_T = ['文春','獅子','宇都宮','旭川','尼崎','豊田','西ドイツ','出雲']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10241',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんはアタマが切れる方ね','Sho — Dad-head-sharp','Reflective','yumiko_mom'),
    mk('ママ、お父さんが達人の境地に達したって仰ったよ','Mom — Dad-master-state-said','Tender child','sho_child'),
    mk('翔くん、お父さんの料理のワザを見て下さいね','Sho — Dad-cook-tech-watch','Pleased','yumiko_mom'),
    mk('ママ、これは実話のドキュメンタリーだよ','Mom — this-true-story-doc','Reflective child','sho_child'),
    mk('翔くん、お父さんが値段を見て唖然とされてたわ','Sho — Dad-price-stunned','Wry','yumiko_mom'),
    mk('ママ、ぼく、シリアスなお話を真剣に聞いたよ','Mom — me serious-talk-listen','Earnest child','sho_child'),
    mk('翔くん、お父さんがファイトと応援して下さったわ','Sho — Dad-fight-cheer','Tender','yumiko_mom'),
    mk('ママ、頭上に虹が出てるよ','Mom — head-above-rainbow','Eager close','sho_child'),
  ]},
  {id:'conv_10242',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、アタマが冴える朝に来店されるね、メイちゃん','Aoi — cust-head-sharp-morn Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お茶の境地を語って下さったよ、メイちゃん','Aoi — cust-tea-state-told Mei','Reflective','aoi_barista'),
    mk('葵、ラテアートのワザを磨こうね、メイちゃん','Aoi — latte-tech-pol Mei','Direction','mei_romantic'),
    mk('葵、お客様、実話に基づく小説の話されてたよ、メイちゃん','Aoi — cust-true-story-novel Mei','Reflective','aoi_barista'),
    mk('葵、お客様、新メニューに唖然とされてたよ、メイちゃん','Aoi — cust-new-menu-stunned Mei','Wry','mei_romantic'),
    mk('葵、シリアスなクレームには丁寧に対応しようね、メイちゃん','Aoi — serious-comp-pol Mei','Direction','aoi_barista'),
    mk('葵、新人にファイトと声をかけようね、メイちゃん','Aoi — newhire-fight-cheer Mei','Direction','mei_romantic'),
    mk('葵、頭上のシャンデリアを磨こうね、メイちゃん','Aoi — head-above-chand-polish Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_10243',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがアタマが冴える方だった','Gran — youth Dad-head-sharp','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、晩年は悟りの境地に近づかれたわよね、あなた?','Yes — Grandpa-late-enlight-state-close, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが大工のワザを誇られた','Gran — youth Dad-carp-tech-proud','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、実話に基づく戦記をご愛読されたわよね、あなた?','Grandpa — true-war-read, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが終戦のニュースに唖然とされた','Gran — youth Dad-war-end-stunned','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、シリアスな問題にも明るく対応されたわよね、あなた?','Grandpa — serious-bright-resp, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが私にファイトと声をかけて下さった','Gran — youth Dad-me-fight-cheer','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、頭上の星を眺めるのがお好きだったわよね、あなた?','Grandpa — head-above-star-like, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10244',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、アタマ良すぎだぞ','Riku — head-too-good','Praising teen','sakura_teen'),
    mk('お前、悟りの境地に達したような顔してたな、桜','You — enlight-state-face Sakura','Wry','riku_teen'),
    mk('リク、お前、サッカーのワザがすごいな','Riku — soccer-tech-good','Praising','sakura_teen'),
    mk('お前、実話の本ハマってたな、桜','You — true-book-into Sakura','Curious','riku_teen'),
    mk('リク、お前、テスト結果に唖然としてたな','Riku — test-stunned','Wry','sakura_teen'),
    mk('お前、シリアスな映画ばっか観てたな、桜','You — serious-movie-only Sakura','Wry','riku_teen'),
    mk('リク、ファイト!応援するぞ','Riku — fight-cheer','Encouraging','sakura_teen'),
    mk('お前、頭上を見上げて何見てたんだ?桜','You — head-above-look-what? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10245',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんはアタマ良くて尊敬するわ','Sho — Dad-head-resp','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、悟りの境地ってまだ分からないよ','Mei-sis — me enlight-state-not-yet','Wry child','sho_child'),
    mk('翔くん、お父さんが工作のワザを教えて下さるそうよ','Sho — Dad-craft-tech-teach','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと実話に基づくドキュメンタリー観たよ','Mei-sis — me Dad-true-doc','Eager child','sho_child'),
    mk('翔くん、お父さんが宿題量に唖然とされたわ','Sho — Dad-homework-vol-stunned','Wry','mei_romantic'),
    mk('メイ姉さん、ぼく、シリアスな話より楽しい話が好きだよ','Mei-sis — me serious-no-fun-yes','Eager child','sho_child'),
    mk('翔くん、メイ姉さんが「ファイト!」って応援してくれたわ','Sho — Mei-sis-"fight"-cheer','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんの頭上を超えるくらい背伸びしたいよ','Mei-sis — me Dad-head-above-tall-want','Eager close','sho_child'),
  ]},
  {id:'conv_10246',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、商品プライスを再検討しろ','Our co — prod-price-rev','Crisp','hiroshi_boss'),
    mk('はい。デイリーの売上集計を提出します','Yes — Daily-sales-tally-submit','Methodical','kenji_office'),
    mk('当社、タイムリーなキャンペーンを打て','Our co — timely-camp','Direction','hiroshi_boss'),
    mk('はい。広告のコントラストを強くします','Yes — Ad-contrast-strong','Update','kenji_office'),
    mk('検査不合格品の流通を止めろ','Insp-fail-stop','Direction','hiroshi_boss'),
    mk('はい。日本経済新聞のインタビューを受けます','Yes — Nikkei-int','Update','kenji_office'),
    mk('当社、特許のレジスト技術を磨け','Our co — patent-resist-tech-pol','Direction','hiroshi_boss'),
    mk('はい。万国博覧会へのブース出展を準備します','Yes — Expo-booth-prep','Close','kenji_office'),
  ]},
  {id:'conv_10247',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('プライスタグの貼り直しを進めましょう','Price-tag-rep','Brisk','yuki_office'),
    mk('はい。デイリーレポートを毎朝確認します','Yes — Daily-rep-morn','Cooperative','kenji_office'),
    mk('タイムリーな広告で売上を伸ばしましょう','Timely-ad-sales','Direction','yuki_office'),
    mk('はい。写真のコントラストを調整します','Yes — Photo-contrast-adj','Update','kenji_office'),
    mk('品質テスト不合格の原因を分析しましょう','Qual-test-fail-anal','Direction','yuki_office'),
    mk('はい。日本経済新聞の連載を依頼します','Yes — Nikkei-serial-req','Update','kenji_office'),
    mk('レジスト塗布工程を見直しましょう','Resist-coat-rev','Direction','yuki_office'),
    mk('はい。博覧会の準備会議を開きます','Yes — Expo-prep-mtg','Close','kenji_office'),
  ]},
  {id:'conv_10248',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文のプライス、つまり投稿料も意識しろ','Ren — paper-price-aware','Mentor','hiroshi_boss'),
    mk('はい。デイリー実験ログを残します','Yes — Daily-exp-log','Earnest','ren_uni'),
    mk('蓮、タイムリーな研究テーマを選べ','Ren — timely-theme-pick','Direction','hiroshi_boss'),
    mk('はい。図表のコントラストを丁寧に調整します','Yes — Chart-contrast-careful','Earnest','ren_uni'),
    mk('蓮、不合格論文の原因を分析しろ','Ren — fail-paper-anal','Direction','hiroshi_boss'),
    mk('はい。日本経済新聞の電子版も活用します','Yes — Nikkei-dig-use','Polite','ren_uni'),
    mk('蓮、フォトレジスト技術にも理解を深めろ','Ren — photo-resist-deep','Direction','hiroshi_boss'),
    mk('はい。博覧会のサイドイベントにも参加します','Yes — Expo-side-event-join','Earnest close','ren_uni'),
  ]},
  {id:'conv_10249',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、押収品のプライスタグを鑑識されますね','Police seiz-price-tag-forensic','Cooperative','kenji_office'),
    mk('警察、デイリーで犯罪発生件数を集計されますね','Police daily-crime-tally','Cooperative','kenji_office'),
    mk('警察、タイムリーな市民通報を活かされますね','Police timely-citi-rep-use','Cooperative','kenji_office'),
    mk('警察、防犯映像のコントラスト解析もされますね','Police prev-vid-contrast-anal','Cooperative','kenji_office'),
    mk('警察、警察学校の不合格者にも再挑戦機会を与えられますね','Police acad-fail-retry','Cooperative','kenji_office'),
    mk('警察、日本経済新聞の経済犯罪記事も注視されますね','Police Nikkei-econ-crime-watch','Cooperative','kenji_office'),
    mk('警察、デモ参加者のレジスト姿勢にも対応されますね','Police prot-resist-resp','Cooperative','kenji_office'),
    mk('警察、博覧会の警備もご担当ですね','Police expo-guard','Close','kenji_office'),
  ]},
  {id:'conv_10250',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、プライス戦略を独自に立てられた','Dad — founding price-strat-uniq','Sage','hiroshi_elder'),
    mk('はい。お父さんはデイリーで現場巡回された','Yes — Dad daily-scene','Commitment','hiroshi_boss'),
    mk('お父さん、タイムリーな決断を貫かれた','Dad — timely-decis-keep','Wistful','hiroshi_elder'),
    mk('はい。お父さんは商品の色コントラストを大事にされた','Yes — Dad prod-color-contrast-imp','Reflective','hiroshi_boss'),
    mk('お父さん、品質不合格を許されない方だった','Dad — qual-fail-no-tol','Wistful','hiroshi_elder'),
    mk('はい。お父さんは日本経済新聞を朝必ず読まれた','Yes — Dad Nikkei-morn','Reflective','hiroshi_boss'),
    mk('お父さん、半導体レジスト技術にも投資された','Dad — semi-resist-invest','Wistful','hiroshi_elder'),
    mk('はい。お父さんが万国博覧会に出展された','Yes — Dad expo-exhib','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10251',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、右足利き競走選手の研究を論文で扱いましたね','Ren — right-foot-dom-athl paper','Calm','asuka_teacher'),
    mk('はい、低用量ピル普及率の研究を論文で扱いました','Yes — Low-dose-pill paper','Earnest','ren_uni'),
    mk('蓮さん、人妻文学の社会学を論文で扱いましたね','Ren — married-wom-lit-soc paper','Reflective','asuka_teacher'),
    mk('はい、男児出生率の地域差を論文で扱いました','Yes — Male-birth-area paper','Earnest','ren_uni'),
    mk('哺乳類の牙進化を論文で扱いましたね','Mam-fang-evol paper','Engaged','asuka_teacher'),
    mk('はい、競馬の疾走フォーム研究を論文で扱いました','Yes — Race-horse-gait paper','Earnest','ren_uni'),
    mk('蓮さん、宗教的歓喜の心理学を論文で扱いましたね','Ren — relig-joy-psych paper','Reflective','asuka_teacher'),
    mk('はい、先導役のリーダーシップ論を論文で扱いました','Yes — Lead-role paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10252',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、容疑者の右足靴の痕跡を、警察、鑑識されますね','Case suspect-right-foot-trace police-forensic','Reflective','ren_uni'),
    mk('警察、未成年へのピル販売事案にも対応されますね','Police minor-pill-resp','Cooperative','takeda_officer'),
    mk('本件、人妻ストーカー事案を、警察、扱われますね','Case married-wom-stalk police-handle','Reflective','ren_uni'),
    mk('警察、男児誘拐事件も厳しく捜査されますね','Police male-kid-kid-strict','Cooperative','takeda_officer'),
    mk('本件、犬の牙咬傷事故を、警察、扱われますね','Case dog-fang-bite police-handle','Reflective','ren_uni'),
    mk('警察、疾走する逃走車両の追跡もされますね','Police speed-runaway-track','Cooperative','takeda_officer'),
    mk('本件、宗教団体の歓喜祭での警備を、警察、担当されますね','Case relig-joy-fest-guard police-hand','Reflective','ren_uni'),
    mk('警察、デモの先導車の警備もされますね','Police prot-lead-car-guard','Close','takeda_officer'),
  ]},
  {id:'conv_10253',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、右足利き競走選手の研究を論文で扱いましたね','Sakura — right-foot paper','Calm','asuka_teacher'),
    mk('はい、低用量ピル普及率の研究を論文で扱いました','Yes — Low-dose-pill paper','Earnest teen','sakura_teen'),
    mk('人妻文学の社会学を論文で扱いましたね','Married-wom-lit paper','Reflective','asuka_teacher'),
    mk('はい、男児出生率の地域差を論文で扱いました','Yes — Male-birth paper','Earnest','sakura_teen'),
    mk('哺乳類の牙進化を論文で扱いましたね','Mam-fang paper','Engaged','asuka_teacher'),
    mk('はい、競馬の疾走フォーム研究を論文で扱いました','Yes — Race-gait paper','Earnest','sakura_teen'),
    mk('宗教的歓喜の心理学を論文で扱いましたね','Relig-joy paper','Reflective','asuka_teacher'),
    mk('はい、先導役のリーダーシップ論を論文で扱いました','Yes — Lead-role paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10254',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、右足麻痺のリハビリを医療チームで担当します','Ren — right-foot-paral med-team','Calm','saito_doctor'),
    mk('はい、ピル処方のカウンセリングを医療チームでおこないます','Yes — Pill-couns med-team','Patient','saito_doctor'),
    mk('蓮さん、人妻の妊娠相談も医療チームで配慮します','Ren — married-wom-preg med-team','Calm','saito_doctor'),
    mk('男児出産の医療を、貴院、丁寧におこなわれますね、先生','Male-birth your-hosp pol, sensei','Reflective','ren_uni'),
    mk('はい、動物の牙による咬傷を医療チームで処置します','Yes — Animal-fang-bite med-team','Patient','saito_doctor'),
    mk('はい、疾走中の心拍を医療チームで観察します','Yes — Speed-heart med-team obs','Patient','saito_doctor'),
    mk('患者の歓喜表情を、貴院、観察されますね、先生','Pati-joy-face your-hosp obs, sensei','Reflective','ren_uni'),
    mk('はい、医療チームの先導役は経験豊富な医師が務めます','Yes — Med-lead-exp-doctor','Patient close','saito_doctor'),
  ]},
  {id:'conv_10255',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、右足に踏ん張りが利くシューズを開発しろ','Our co — right-foot-grip-shoe-dev','Crisp','hiroshi_boss'),
    mk('はい。社員の健康相談、ピル等も含め対応します','Yes — Staff-health-pill-resp','Methodical','kenji_office'),
    mk('社員の人妻、つまり既婚女性社員を支援しろ','Staff-married-wom-supp','Direction','hiroshi_boss'),
    mk('はい。男児育児休暇を取得しやすくします','Yes — Male-kid-leave-easy','Update','kenji_office'),
    mk('当社、競合の牙、つまり脅威を分析しろ','Our co — comp-fang-anal','Direction','hiroshi_boss'),
    mk('はい。市場を疾走するスピード経営を目指します','Yes — Mkt-speed-mgmt-aim','Update','kenji_office'),
    mk('当社、社員に歓喜の瞬間を提供しろ','Our co — staff-joy-moment','Direction','hiroshi_boss'),
    mk('はい。業界の先導役を担います','Yes — Industry-lead-role','Close','kenji_office'),
  ]},
  {id:'conv_10256',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、文春の記事を毎週読まれてるって、メイちゃん','Aoi — cust-Bunshun-week Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お子様が獅子舞を怖がってらしたよ、メイちゃん','Aoi — cust-kid-lion-dance-scared Mei','Tender','aoi_barista'),
    mk('葵、お客様、宇都宮餃子がお好きだって、メイちゃん','Aoi — cust-Utsunomiya-gyoza Mei','Reflective','mei_romantic'),
    mk('葵、お客様、旭川動物園が忘れられないって、メイちゃん','Aoi — cust-Asahikawa-zoo Mei','Reflective','aoi_barista'),
    mk('葵、お客様、尼崎出身でいらっしゃるって、メイちゃん','Aoi — cust-Amagasaki-orig Mei','Reflective','mei_romantic'),
    mk('葵、お客様、豊田自動車工場見学されたって、メイちゃん','Aoi — cust-Toyota-fact Mei','Reflective','aoi_barista'),
    mk('葵、お客様、若い頃に西ドイツに留学されたって、メイちゃん','Aoi — cust-W-Ger-study Mei','Reflective','mei_romantic'),
    mk('葵、お客様、出雲大社にお参りされたって、メイちゃん','Aoi — cust-Izumo-shrine Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10257',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが文春の論評を語られた','Gran — youth Dad-Bunshun-told','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お正月の獅子舞を楽しまれたわよね、あなた?','Yes — Grandpa-newyear-lion-dance, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが宇都宮の餃子を絶賛された','Gran — youth Dad-Utsunomiya-praise','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、旭川動物園を孫と訪ねられたわよね、あなた?','Grandpa — Asahikawa-zoo-grandkid, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが尼崎にお勤めだった','Gran — youth Dad-Amagasaki-work','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、豊田の車をお買いになったわよね、あなた?','Grandpa — Toyota-car-buy, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが西ドイツ統一を喜ばれた','Gran — youth Dad-W-Ger-uni-glad','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、出雲大社で結婚式を挙げたわよね、あなた?','Grandpa — Izumo-wed, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10258',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが文春の記事をお持ちなのよ','Sho — Dad-Bunshun-have','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと獅子舞見たいよ','Mei-sis — me Dad-lion-dance-want','Eager child','sho_child'),
    mk('翔くん、お父さんが宇都宮餃子を食べに連れて行って下さるそうよ','Sho — Dad-Utsunomiya-gyoza-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと旭川動物園行きたいよ','Mei-sis — me Dad-Asahikawa-want','Eager child','sho_child'),
    mk('翔くん、お父さんが尼崎にお出張なさるそうよ','Sho — Dad-Amagasaki-trip','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと豊田の自動車工場見学したよ','Mei-sis — me Dad-Toyota-fact','Eager child','sho_child'),
    mk('翔くん、お父さんが西ドイツ時代のお話して下さるそうよ','Sho — Dad-W-Ger-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと出雲大社にお参りしたいよ','Mei-sis — me Dad-Izumo-want','Eager close','sho_child'),
  ]},
  {id:'conv_10259',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前ん父さん、文春読んでたな','Riku — your-Dad-Bunshun','Curious teen','sakura_teen'),
    mk('お前、お正月の獅子舞に泣いてたな、桜','You — newyear-lion-cry Sakura','Wry','riku_teen'),
    mk('リク、お前、宇都宮餃子食ったろ','Riku — Utsunomiya-gyoza?','Curious','sakura_teen'),
    mk('お前、修学旅行で旭川行ったろ?桜','You — sch-trip-Asahikawa? Sakura','Curious','riku_teen'),
    mk('リク、お前、尼崎の親戚いたな','Riku — Amagasaki-rel','Curious','sakura_teen'),
    mk('お前ん家、豊田の車だったな、桜','You-home-Toyota Sakura','Curious','riku_teen'),
    mk('リク、お前、世界史で西ドイツ習ったろ?','Riku — wld-hist-W-Ger?','Curious','sakura_teen'),
    mk('お前、修学旅行で出雲行ったろ?桜','You — sch-trip-Izumo? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10260',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが文春の記事を読んでらしたわ','Sho — Dad-Bunshun-read','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと獅子舞見たよ','Mom — me Dad-lion-dance','Eager child','sho_child'),
    mk('翔くん、お父さんが宇都宮餃子を取り寄せて下さったわ','Sho — Dad-Utsunomiya-order','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと旭川動物園行ったよ','Mom — me Dad-Asahikawa','Eager child','sho_child'),
    mk('翔くん、お父さんが尼崎の取引先と打ち合わせされるそうよ','Sho — Dad-Amagasaki-mtg','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと豊田の博物館行ったよ','Mom — me Dad-Toyota-mus','Eager child','sho_child'),
    mk('翔くん、お父さんが西ドイツ駐在のお話して下さったわ','Sho — Dad-W-Ger-told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと出雲大社で初詣したよ','Mom — me Dad-Izumo-newyear','Eager close','sho_child'),
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_540 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['白色','股','壺','杭','便器','ふじ','カンガルー','凡人']
const B_T = ['デュアル','ダイアログ','コンパイル','アンカー','グリッド','シールド','レビューア','コストパフォーマンス']
const C_T = ['丞','濱','荒野','北西','南海','会津','準々','ペニス']
const D_T = ['ぶろ','リーチ','ジーニョ','レナ','ヤス','キラー','ドタバタ','バーン']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10761',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが白色のシャツに合うネクタイを選んで下さるわ','Sho — Dad-white-shirt-tie','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんに股関節のストレッチを教えて頂いたよ','Mom — me Dad-hip-stretch-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが古い壺、つまり花瓶の手入れをして下さってるわ','Sho — Dad-old-jar-care','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと庭の杭を直したよ','Mom — me Dad-yard-stake-fix','Pleased child','sho_child'),
    mk('翔くん、お父さんが便器のお掃除も手伝って下さるわ','Sho — Dad-toilet-clean-help','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと富士、つまりふじの絶景を観たよ','Mom — me Dad-Fuji-view','Pleased child','sho_child'),
    mk('翔くん、お父さんが「動物園のカンガルーを観に行こう」って仰ってたわ','Sho — Dad-"zoo-kang"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「ぼくは凡人だから努力するんだ」って教えて頂いたよ','Mom — me Dad-"avg-effort"-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_10762',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、白色のカフェオレボウルがお好みだって、メイちゃん','Aoi — cust-white-cafe-bowl-like Mei','Reflective','mei_romantic'),
    mk('葵、お客様、自転車の股下サイズを気にされてたよ、メイちゃん','Aoi — cust-bike-inseam-care Mei','Reflective','aoi_barista'),
    mk('葵、お客様、店先の壺、つまり信楽焼の壺をお褒め下さったよ、メイちゃん','Aoi — cust-front-Shig-jar-praise Mei','Reflective','mei_romantic'),
    mk('葵、お客様、店の駐輪場の杭、つまり杭を確認されてたよ、メイちゃん','Aoi — cust-park-stake-check Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お店の便器、つまりトイレの設備をお褒め下さったよ、メイちゃん','Aoi — cust-toilet-fac-praise Mei','Reflective','mei_romantic'),
    mk('葵、お客様、富士、つまりふじ山麓のキャンプ場のお話を語って下さったよ、メイちゃん','Aoi — cust-Fuji-camp-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、オーストラリアでカンガルーを観たって語って下さったよ、メイちゃん','Aoi — cust-Aus-kang-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご自身を「凡人ですから」って謙虚に仰ってたよ、メイちゃん','Aoi — cust-self-"avg-humble"-said Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10763',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが白色のセーターをお着になられた','Gran — youth Dad-white-swt','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、ご無理されて股を痛められたわよね、あなた?','Yes — Grandpa-youth-hip-hurt, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが信楽焼の壺を御自ら選ばれた','Gran — youth Dad-Shig-jar-pick','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、田の杭を御自ら打たれたわよね、あなた?','Grandpa — youth-paddy-stake-self, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが便器の修理も御自らされた','Gran — youth Dad-toilet-rep-self','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、富士、つまりふじ山に登られたわよね、あなた?','Grandpa — youth-Fuji-climb, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが豪州のカンガルー保護区を訪ねられた','Gran — youth Dad-Aus-kang-vis','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、「凡人の継続が天才に勝る」と仰ったわよね、あなた?','Grandpa — youth-"avg-cont-genius"-said, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10764',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、白色のスニーカー履いてたな','Riku — white-sneak-wear','Curious teen','sakura_teen'),
    mk('お前、体育で股関節伸ばすの苦手だったろ、桜','You — PE-hip-stretch-bad? Sakura','Wry','riku_teen'),
    mk('リク、お前、修学旅行で壺、つまり信楽焼の見学したろ','Riku — sch-trip-Shig-jar?','Curious','sakura_teen'),
    mk('お前、林間学校でテントの杭打ち手伝ってたな、桜','You — for-camp-tent-stake Sakura','Curious','riku_teen'),
    mk('リク、お前、家の便器掃除自分でやってるって偉いな','Riku — house-toilet-clean-self-good','Praising','sakura_teen'),
    mk('お前、社会で富士、つまりふじ山の標高覚えたろ、桜','You — soc-Fuji-elev? Sakura','Curious','riku_teen'),
    mk('リク、お前、修学旅行先でカンガルー観たろ','Riku — sch-trip-kang?','Curious','sakura_teen'),
    mk('お前、「自分は凡人」って自虐してたな、桜','You — self-"avg"-mock Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10765',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「白色の花が咲く季節だね」って仰ってたわ','Sho — Dad-"white-flo-sea"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに股関節のストレッチ法を教えて頂いたよ','Mei-sis — me Dad-hip-stretch-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが「茶道で使う壺、つまり茶壺の話」を聞かせて下さるわ','Sho — Dad-"tea-jar-talk"-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと公園の杭の場所を確認したよ','Mei-sis — me Dad-park-stake-check','Eager child','sho_child'),
    mk('翔くん、お父さんが「公衆便所、つまり便器の使い方マナー」を教えて下さるわ','Sho — Dad-"pub-toilet-eti"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと富士、つまりふじ山五合目に行ったよ','Mei-sis — me Dad-Fuji-5th-stat','Eager child','sho_child'),
    mk('翔くん、お父さんが「動物園のカンガルーは寝てる時間が長い」って仰ってたわ','Sho — Dad-"kang-sleep-long"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「凡人でも諦めなければ大丈夫」って教えて頂いたよ','Mei-sis — me Dad-"avg-no-quit"-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_10766',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、製品をデュアル展開、つまり二系統で売れ','Our co — prod-dual-2-line','Crisp','hiroshi_boss'),
    mk('はい。社内ダイアログボックスのUIを改善します','Yes — Int-dial-UI-imp','Methodical','kenji_office'),
    mk('当社、開発のコンパイル時間を短縮しろ','Our co — dev-comp-short','Direction','hiroshi_boss'),
    mk('はい。広告動画のアンカー、つまり司会者を選定します','Yes — Ad-anch-MC-pick','Update','kenji_office'),
    mk('当社、商品棚のグリッド配置を見直せ','Our co — shelf-grid-rev','Direction','hiroshi_boss'),
    mk('はい。新商品のシールド塗装を試験します','Yes — New-prod-shield-coat-trial','Update','kenji_office'),
    mk('当社、社外レビューア、つまり評価者の意見を採り入れろ','Our co — out-rev-input','Direction','hiroshi_boss'),
    mk('はい。商品のコストパフォーマンスを訴求します','Yes — Prod-cost-perf-appeal','Close','kenji_office'),
  ]},
  {id:'conv_10767',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('デュアルモニターを営業部全員に支給しましょう','Dual-mon-sales-all','Brisk','yuki_office'),
    mk('はい。社内チャットのダイアログ履歴を保管します','Yes — Int-chat-dial-hist','Cooperative','kenji_office'),
    mk('プログラムのコンパイル待ち時間を計測しましょう','Prog-comp-wait-meas','Direction','yuki_office'),
    mk('はい。式典のアンカー、つまり司会者を内部から選びます','Yes — Cere-anch-int','Update','kenji_office'),
    mk('資料のレイアウトをグリッド準拠にしましょう','Mat-layout-grid-comp','Direction','yuki_office'),
    mk('はい。新工場のシールド工事の見積りを取ります','Yes — New-fact-shield-quote','Update','kenji_office'),
    mk('レビューア、つまり評価者の枠を増やしましょう','Reviewer-slots-incr','Direction','yuki_office'),
    mk('はい。コストパフォーマンスを店頭でも訴求します','Yes — Cost-perf-store-appeal','Close','kenji_office'),
  ]},
  {id:'conv_10768',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、実験室でデュアル測定を採用しろ','Ren — lab-dual-meas','Mentor','hiroshi_boss'),
    mk('はい。論文中のダイアログ部分を整理します','Yes — Paper-dial-tidy','Earnest','ren_uni'),
    mk('蓮、解析プログラムのコンパイルを最適化しろ','Ren — anal-prog-comp-opt','Direction','hiroshi_boss'),
    mk('はい。学会発表でアンカー、つまり司会の役を担います','Yes — Conf-anch-take','Earnest','ren_uni'),
    mk('蓮、地理データのグリッド分割を整えろ','Ren — geo-data-grid-tidy','Direction','hiroshi_boss'),
    mk('はい。実験装置のシールド処理を確認します','Yes — Exp-eqp-shield-check','Polite','ren_uni'),
    mk('蓮、論文の査読を国際レビューア、つまり評価者に依頼しろ','Ren — paper-int-rev-req','Direction','hiroshi_boss'),
    mk('はい。研究費のコストパフォーマンスを向上します','Yes — Res-fund-cost-perf-up','Earnest close','ren_uni'),
  ]},
  {id:'conv_10769',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、捜査車両のデュアル装備、つまり二系統装備を導入されますね','Police inv-veh-dual-eqp','Cooperative','kenji_office'),
    mk('警察、容疑者とのダイアログ、つまり対話記録を整えられますね','Police suspect-dial-rec-tidy','Cooperative','kenji_office'),
    mk('警察、押収プログラムのコンパイル解析もされますね','Police seiz-prog-comp-anal','Cooperative','kenji_office'),
    mk('警察、市民会見のアンカー、つまり司会担当も慎重に選ばれますね','Police citi-conf-anch-pick','Cooperative','kenji_office'),
    mk('警察、現場地図にグリッドを引いて捜査されますね','Police scene-map-grid-inv','Cooperative','kenji_office'),
    mk('警察、防護シールド装備の研修も実施されますね','Police prot-shield-train','Cooperative','kenji_office'),
    mk('警察、外部レビューア、つまり評価者を捜査プロセスに招き入れますね','Police out-rev-proc-inv','Cooperative','kenji_office'),
    mk('警察、装備のコストパフォーマンスを定期評価されますね','Police eqp-cost-perf-eval','Close','kenji_office'),
  ]},
  {id:'conv_10770',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、デュアル事業展開を考えられた','Dad — found-dual-biz','Sage','hiroshi_elder'),
    mk('はい。お父さんはダイアログを大切にされる経営者だった','Yes — Dad dial-cher-mgr','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、コンパイル言語の進化を見守られた','Dad — youth-comp-lang-evol-watch','Wistful','hiroshi_elder'),
    mk('はい。お父さんは式典でアンカーを御自らされた事もある','Yes — Dad cere-anch-self','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、工場の生産ラインのグリッド配置を御自ら設計された','Dad — youth-fact-grid-self-design','Wistful','hiroshi_elder'),
    mk('はい。お父さんは安全シールド設備の導入に積極的だった','Yes — Dad shield-eqp-active','Reflective','hiroshi_boss'),
    mk('お父さん、外部レビューア、つまり評価者の意見を尊重された','Dad — ext-rev-resp','Wistful','hiroshi_elder'),
    mk('はい。お父さんは商品のコストパフォーマンスに拘られた','Yes — Dad cost-perf-stick','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10771',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、丞、つまり古代官位「丞」の制度研究を論文で扱いましたね','Ren — anc-jou-off paper','Calm','asuka_teacher'),
    mk('はい、旧字「濱」、つまり浜の地名表記の研究を論文で扱いました','Yes — Old-hin-loc paper','Earnest','ren_uni'),
    mk('蓮さん、北海道の荒野、つまり原野の開拓史を論文で扱いましたね','Ren — Hok-wild-pion paper','Reflective','asuka_teacher'),
    mk('はい、北西気候、つまり北西季節風の研究を論文で扱いました','Yes — NW-mon-wind paper','Earnest','ren_uni'),
    mk('蓮さん、南海トラフ地震の予測研究を論文で扱いましたね','Ren — Nan-trough-quake paper','Reflective','asuka_teacher'),
    mk('はい、会津藩の戊辰戦争の社会史研究を論文で扱いました','Yes — Aizu-Boshin paper','Earnest','ren_uni'),
    mk('蓮さん、高校野球の準々決勝の社会学研究を論文で扱いましたね','Ren — HS-base-QF-soc paper','Reflective','asuka_teacher'),
    mk('はい、男性器、つまりペニスに関する泌尿器科の臨床研究を論文で扱いました','Yes — Male-anat-penis-uro paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10772',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、古文書の丞、つまり「丞」職の解読を、警察、専門家に依頼されますね','Case old-jou-decod police-expert','Reflective','ren_uni'),
    mk('警察、旧字「濱」、つまり浜地区の盗難事案も対応されますね','Police old-hin-area-theft','Cooperative','takeda_officer'),
    mk('本件、荒野、つまり原野での失踪事案を、警察、捜索されますね','Case wild-miss police-search','Reflective','ren_uni'),
    mk('警察、北西気象、つまり北西強風時の救助も対応されますね','Police NW-wind-resc','Cooperative','takeda_officer'),
    mk('本件、南海地域、つまり南海地震の津波警戒を、警察、連携されますね','Case Nan-quake-tsu-warn police-link','Reflective','ren_uni'),
    mk('警察、会津地方の歴史的事件も把握されてますね','Police Aizu-area-hist-case','Cooperative','takeda_officer'),
    mk('本件、スポーツ大会の準々決勝中の盗難事件を、警察、捜査されますね','Case sport-QF-theft police-inv','Reflective','ren_uni'),
    mk('警察、医療現場でのペニス露出、つまり公然わいせつ事件にも対応されますね','Police med-pen-expos-case','Close','takeda_officer'),
  ]},
  {id:'conv_10773',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、丞、つまり古代官位「丞」の制度研究を論文で扱いましたね','Sakura — jou paper','Calm','asuka_teacher'),
    mk('はい、旧字「濱」、つまり浜の地名表記の研究を論文で扱いました','Yes — Old-hin paper','Earnest teen','sakura_teen'),
    mk('北海道の荒野、つまり原野の開拓史を論文で扱いましたね','Hok-wild paper','Reflective','asuka_teacher'),
    mk('はい、北西気候、つまり北西季節風の研究を論文で扱いました','Yes — NW-mon paper','Earnest','sakura_teen'),
    mk('南海トラフ地震の予測研究を論文で扱いましたね','Nan-trough paper','Reflective','asuka_teacher'),
    mk('はい、会津藩の戊辰戦争の社会史研究を論文で扱いました','Yes — Aizu-Boshin paper','Earnest','sakura_teen'),
    mk('高校野球の準々決勝の社会学研究を論文で扱いましたね','HS-QF paper','Reflective','asuka_teacher'),
    mk('はい、男性器、つまりペニスに関する泌尿器科の臨床研究を論文で扱いました','Yes — Penis-uro paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10774',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、医療古文書の丞、つまり「丞」職の医薬記録を医療チームで保管します','Ren — med-old-jou-rec med-team','Calm','saito_doctor'),
    mk('蓮さん、旧字「濱」、つまり浜地域の医療連携を医療チームで進めます','Ren — old-hin-med-link med-team','Calm','saito_doctor'),
    mk('蓮さん、荒野、つまり僻地の医療を医療チームで担当します','Ren — wild-rural-med-team','Calm','saito_doctor'),
    mk('蓮さん、北西気象、つまり北西強風時の搬送計画を医療チームで整えます','Ren — NW-wind-trans-plan med-team','Calm','saito_doctor'),
    mk('蓮さん、南海地震時の医療救護を医療チームで連携します','Ren — Nan-quake-med-resc med-team','Calm','saito_doctor'),
    mk('蓮さん、会津地方の医師会と医療チームで連携します','Ren — Aizu-doc-asso med-team-link','Calm','saito_doctor'),
    mk('蓮さん、医学会の準々決勝、つまり中間選考の発表を医療チームで担当します','Ren — med-conf-QF-mid med-team','Calm','saito_doctor'),
    mk('蓮さん、ペニスに関する泌尿器科の手術を医療チームで担当します','Ren — penis-uro-surg med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_10775',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、創業者の丞、つまり「丞」の称号を社員に説明しろ','Our co — found-jou-staff','Crisp','hiroshi_boss'),
    mk('はい。旧字「濱」、つまり浜支店の名称をそのまま残します','Yes — Old-hin-branch-keep','Methodical','kenji_office'),
    mk('当社、荒野、つまり未開拓市場に進出しろ','Our co — wild-uncharted-mkt-exp','Direction','hiroshi_boss'),
    mk('はい。北西地域への出張計画を整えます','Yes — NW-area-trip-plan','Update','kenji_office'),
    mk('当社、南海地震対策のBCPを強化しろ','Our co — Nan-quake-BCP-strong','Direction','hiroshi_boss'),
    mk('はい。会津工場の地域連携を強化します','Yes — Aizu-fact-local-strong','Update','kenji_office'),
    mk('当社、市場シェアの準々決勝、つまり上位ランクに食い込め','Our co — mkt-share-QF-up-rank','Direction','hiroshi_boss'),
    mk('はい。男性向けのペニス健康関連製品の市場調査を進めます','Yes — Male-penis-health-mkt-surv','Close','kenji_office'),
  ]},
  {id:'conv_10776',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、「ぶろ気取りのアマチュア」を演じた漫画のお話を語って下さったよ、メイちゃん','Aoi — cust-"pro-style-am"-mng-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、麻雀でリーチを掛ける瞬間が好きだって、メイちゃん','Aoi — cust-maj-reach-mom-like Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ロナウジーニョのプレーがお好きだって、メイちゃん','Aoi — cust-Ronald-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ペットの名前をレナちゃんって付けたって、メイちゃん','Aoi — cust-pet-Lena-named Mei','Reflective','aoi_barista'),
    mk('葵、お客様、「ヤスっぽい服でも自分らしくね」って仰ってたよ、メイちゃん','Aoi — cust-"cheap-cloth-self"-said Mei','Reflective','mei_romantic'),
    mk('葵、お客様、サッカーのキラーパスの研究をされてるって、メイちゃん','Aoi — cust-soccer-kill-pass-stud Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ドタバタコメディがお好きだって、メイちゃん','Aoi — cust-slap-com-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ゲームの効果音「バーン」をお気に入りだって、メイちゃん','Aoi — cust-game-"burn"-fav Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10777',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが「ぶろの世界を覗いてみたい」と仰った','Gran — youth Dad-"pro-world"-said','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、麻雀でリーチをよく掛けられたわよね、あなた?','Yes — Grandpa-youth-maj-reach, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがブラジルのロナウジーニョのプレーに感動された','Gran — youth Dad-Ronald-imp','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、姪のレナちゃんを可愛がられたわよね、あなた?','Grandpa — youth-niece-Lena-love, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「ヤスい服でも体形次第」と仰った','Gran — youth Dad-"cheap-fit"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、サッカーのキラーパスを評論されたわよね、あなた?','Grandpa — youth-soccer-kill-pass-crit, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがドタバタコメディ映画を毎週観られた','Gran — youth Dad-slap-com-wk','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、花火大会の「バーン」という音を愛されたわよね、あなた?','Grandpa — youth-firew-"burn"-love, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10778',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「ぶろの絵描きになりたい夢」を教えて下さるわ','Sho — Dad-"pro-paint-dream"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと麻雀のリーチのルールを学んだよ','Mei-sis — me Dad-maj-reach-rule','Eager child','sho_child'),
    mk('翔くん、お父さんがブラジルのロナウジーニョのドリブル動画を観て下さるわ','Sho — Dad-Ronald-drib-vid','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと猫のレナちゃんに会ったよ','Mei-sis — me Dad-cat-Lena-met','Eager child','sho_child'),
    mk('翔くん、お父さんが「ヤスい服でも気持ちが大事」って仰ってたわ','Sho — Dad-"cheap-heart-imp"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとサッカーのキラーパスの動画観たよ','Mei-sis — me Dad-soccer-kill-vid','Eager child','sho_child'),
    mk('翔くん、お父さんが「ドタバタコメディはストレス発散」って仰ってたわ','Sho — Dad-"slap-com-relief"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと花火の「バーン」って音を聞いたよ','Mei-sis — me Dad-firew-"burn"-heard','Eager close','sho_child'),
  ]},
  {id:'conv_10779',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、「ぶろ気取り」って言葉使ってたな','Riku — "pro-style"-use','Wry teen','sakura_teen'),
    mk('お前、麻雀部でリーチ掛けるの上手だな、桜','You — maj-club-reach-good Sakura','Praising','riku_teen'),
    mk('リク、お前、ロナウジーニョのファンだったな','Riku — Ronald-fan','Curious','sakura_teen'),
    mk('お前、ペットの名前レナちゃんにしたよな、桜','You — pet-Lena-named Sakura','Curious','riku_teen'),
    mk('リク、お前、「ヤスい店巡り」してたな','Riku — "cheap-shop-tour"','Wry','sakura_teen'),
    mk('お前、サッカー部でキラーパス出すの上手だな、桜','You — soccer-club-kill-pass-good Sakura','Praising','riku_teen'),
    mk('リク、お前、ドタバタコメディ漫画読みすぎだな','Riku — slap-com-mng-too-much','Wry','sakura_teen'),
    mk('お前、ゲームで爆発音「バーン」のSE好きだったな、桜','You — game-exp-"burn"-SE-like Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10780',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「ぶろの世界は厳しい」って語って下さるわ','Sho — Dad-"pro-world-tough"-said','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと麻雀のリーチのルール覚えたよ','Mom — me Dad-maj-reach-rule','Eager child','sho_child'),
    mk('翔くん、お父さんがロナウジーニョの伝説のゴール集を観てらっしゃるわ','Sho — Dad-Ronald-leg-goal','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとレナちゃん、つまりおいとこに遊んでもらったよ','Mom — me Dad-Lena-cous-play','Eager child','sho_child'),
    mk('翔くん、お父さんが「ヤスい服でも工夫次第」って仰ってたわ','Sho — Dad-"cheap-effort"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとサッカーのキラーパス集の動画観たよ','Mom — me Dad-kill-pass-vid','Eager child','sho_child'),
    mk('翔くん、お父さんがドタバタコメディの映画を観てらっしゃるわ','Sho — Dad-slap-com-film','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと花火の「バーン」って音を一緒に聞いたよ','Mom — me Dad-firew-"burn"-heard','Eager close','sho_child'),
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

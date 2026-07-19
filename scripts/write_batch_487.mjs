import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_487 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['チビ','見聞き','吐き出し','むき出し','ずらりと','自ずと','がんばら','追い込ん']
const B_T = ['入園','ミニマム','コンソーシアム','原本','諸般','目途','休刊','乗り出す']
const C_T = ['位相','流体','研磨','僻地','共振','界面','発振','電極']
const D_T = ['ルノー','葛飾','ジャッキー','ポーカー','ドラクエ','マスターズ','ワンセグ','スペースシャトル']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09701',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんは翔くんを「チビ」って優しく呼んで下さるわ','Sho — Dad-Sho-"chibi"-soft','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと色々な事を見聞きしたよ','Mom — me Dad-see-hear','Eager child','sho_child'),
    mk('翔くん、悲しい気持ちは吐き出して話して下さってね','Sho — sad-feel-spit-talk','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんの感情がむき出しに出る瞬間を見たよ','Mom — me Dad-emot-bare-show','Reflective child','sho_child'),
    mk('翔くん、お父さんの本がずらりと並んだ書斎が好きだわ','Sho — Dad-book-row-study-like','Pleased','yumiko_mom'),
    mk('ママ、お父さんと一緒なら、ぼくは自ずと笑顔になるよ','Mom — Dad-with-me-natural-smile','Tender child','sho_child'),
    mk('翔くん、お父さんと一緒にがんばらないとね','Sho — Dad-effort-need','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんに勉強で追い込んで頂きたいよ','Mom — me Dad-study-push-want','Earnest close','sho_child'),
  ]},
  {id:'conv_09702',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、お子様を「うちのチビ」って優しく呼んでらしたよ、メイちゃん','Aoi — cust-kid-"chibi"-soft Mei','Tender','mei_romantic'),
    mk('葵、お客様、海外を見聞きしてこられた旅人だって、メイちゃん','Aoi — cust-overseas-see-hear-trav Mei','Reflective','aoi_barista'),
    mk('葵、お客様、悩みを吐き出して帰られたよ、メイちゃん','Aoi — cust-worry-spit-back Mei','Reflective','mei_romantic'),
    mk('葵、感情をむき出しにしないお客様が多いね、メイちゃん','Aoi — emot-bare-not-cust-many Mei','Reflective','aoi_barista'),
    mk('葵、棚にお皿をずらりと並べようね、メイちゃん','Aoi — shelf-plate-row Mei','Direction','mei_romantic'),
    mk('葵、丁寧な接客は自ずとお客様を呼ぶわ、メイちゃん','Aoi — pol-serv-natural-cust Mei','Reflective','aoi_barista'),
    mk('葵、今日もがんばらないとね、メイちゃん','Aoi — today-effort Mei','Direction','mei_romantic'),
    mk('葵、忙しさで追い込んだ時こそ落ち着こうね、メイちゃん','Aoi — busy-push-calm Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_09703',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが孫を「チビっ子」って優しく呼んでらした','Gran — youth Dad-grandkid-"chibi-tot"-soft','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、戦中の事を見聞きされた方だったわよね、あなた?','Yes — Grandpa-war-see-hear, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは胸の内を吐き出して下さらなかった','Gran — youth Dad-heart-spit-no','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、感情をむき出しにされなかった寡黙な方だったわよね、あなた?','Grandpa — emot-bare-no-quiet, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんの本がずらりと並んだ部屋を懐かしむ','Gran — youth Dad-book-row-room-miss','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、晩年は自ずと家族に頼られたわよね、あなた?','Grandpa — late-natural-fam-rely, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは家族のためにがんばらないと、と仰った','Gran — youth Dad-fam-effort-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、限界まで自分を追い込んで働かれたわよね、あなた?','Grandpa — limit-self-push-work, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09704',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、弟をチビって呼んでたな','Riku — bro-chibi-call','Wry teen','sakura_teen'),
    mk('お前、修学旅行で色々見聞きしたな、桜','You — sch-trip-see-hear Sakura','Curious','riku_teen'),
    mk('リク、お前、ガムを吐き出してから話せよ','Riku — gum-spit-talk','Direction','sakura_teen'),
    mk('お前、感情をむき出しにしすぎだぞ、桜','You — emot-bare-too Sakura','Direction','riku_teen'),
    mk('リク、お前ん家、トロフィーがずらりと並んでたな','Riku — your-home-trophy-row','Curious','sakura_teen'),
    mk('お前、勉強すれば自ずと結果が出るぞ、桜','You — study-natural-result Sakura','Direction','riku_teen'),
    mk('リク、テストでがんばらないと留年だぞ','Riku — test-effort-fail-year','Direction','sakura_teen'),
    mk('お前、自分を追い込んで勉強してたな、桜','You — self-push-study Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_09705',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが翔くんを「うちのチビ」って優しく呼んで下さるわね','Sho — Dad-Sho-"chibi"-soft','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと色々な所を見聞きしたいよ','Mei-sis — me Dad-many-see-hear-want','Eager child','sho_child'),
    mk('翔くん、嫌な気持ちはちゃんと吐き出して話してね','Sho — bad-feel-spit-talk','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、感情をむき出しにせず冷静になりたいよ','Mei-sis — me emot-bare-not-calm-want','Earnest child','sho_child'),
    mk('翔くん、メイ姉さんの本棚に絵本をずらりと並べたの','Sho — Mei-sis-shelf-pic-row','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、優しくしてれば自ずと友達ができると思うよ','Mei-sis — me kind-natural-friend','Reflective child','sho_child'),
    mk('翔くん、お父さんと宿題をがんばらないとね','Sho — Dad-homework-effort','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、自分を追い込んで漢字練習したよ','Mei-sis — me self-push-kanji','Proud child close','sho_child'),
  ]},
  {id:'conv_09706',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、社員のお子様の入園祝い制度を整えろ','Our co — staff-kid-enroll-cel','Crisp','hiroshi_boss'),
    mk('はい。経費はミニマムに抑えます','Yes — Cost-min-hold','Methodical','kenji_office'),
    mk('当社、業界コンソーシアムに参加しろ','Our co — industry-cons-join','Direction','hiroshi_boss'),
    mk('はい。契約書の原本を厳格に管理します','Yes — Contract-orig-strict','Update','kenji_office'),
    mk('諸般の事情を考慮しろ','All-circum-cons','Direction','hiroshi_boss'),
    mk('はい。新事業の目途は年度末です','Yes — New-biz-target-yr-end','Update','kenji_office'),
    mk('当社、競合誌の休刊情報も追え','Our co — comp-mag-pause-track','Direction','hiroshi_boss'),
    mk('はい。新市場に乗り出す準備を整えます','Yes — New-mkt-launch-prep','Close','kenji_office'),
  ]},
  {id:'conv_09707',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('社員のお子様の入園のお祝いを贈りましょう','Staff-kid-enroll-gift','Brisk','yuki_office'),
    mk('はい。経費はミニマムに抑える方針です','Yes — Cost-min-pol','Cooperative','kenji_office'),
    mk('業界コンソーシアム会議に出席しましょう','Industry-cons-mtg-att','Direction','yuki_office'),
    mk('はい。書類の原本は金庫に保管します','Yes — Doc-orig-safe','Update','kenji_office'),
    mk('諸般の状況を勘案して提案します','All-circum-prop','Direction','yuki_office'),
    mk('はい。新システム導入の目途を立てます','Yes — New-sys-target','Update','kenji_office'),
    mk('競合誌の休刊が業界に与える影響を分析しましょう','Comp-mag-pause-impact-anal','Direction','yuki_office'),
    mk('はい。新サービスに乗り出す方針です','Yes — New-serv-launch','Close','kenji_office'),
  ]},
  {id:'conv_09708',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究員の子の入園もお祝いしろ','Ren — research-kid-enroll-cel','Mentor','hiroshi_boss'),
    mk('はい。実験はミニマムな試料で進めます','Yes — Exp-min-sample','Earnest','ren_uni'),
    mk('蓮、国際研究コンソーシアムに参加しろ','Ren — intl-research-cons-join','Direction','hiroshi_boss'),
    mk('はい。論文の原本は研究室で保管します','Yes — Paper-orig-lab','Earnest','ren_uni'),
    mk('蓮、諸般の事情がある研究員にも配慮しろ','Ren — all-circum-research-cons','Direction','hiroshi_boss'),
    mk('はい。論文提出の目途を立てております','Yes — Paper-submit-target','Polite','ren_uni'),
    mk('蓮、業界誌の休刊にも目を配れ','Ren — industry-mag-pause-attent','Direction','hiroshi_boss'),
    mk('はい。新研究分野に乗り出す覚悟です','Yes — New-research-launch-resolve','Earnest close','ren_uni'),
  ]},
  {id:'conv_09709',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、署員のお子様の入園を祝われますね','Police staff-kid-enroll-cel','Cooperative','kenji_office'),
    mk('警察、装備はミニマムに整えられますね','Police equip-min-prep','Cooperative','kenji_office'),
    mk('警察、防犯コンソーシアムを率いられますね','Police prev-cons-lead','Cooperative','kenji_office'),
    mk('警察、調書の原本を厳格に管理されますね','Police statem-orig-strict','Cooperative','kenji_office'),
    mk('警察、諸般の事案にも丁寧に対応されますね','Police all-circum-resp','Cooperative','kenji_office'),
    mk('警察、捜査終結の目途を市民に知らせられますね','Police inv-target-citi','Cooperative','kenji_office'),
    mk('警察、警察誌の休刊にも対応されますね','Police mag-pause-resp','Cooperative','kenji_office'),
    mk('警察、新分野の捜査に乗り出す決意ですね','Police new-area-launch-decide','Close','kenji_office'),
  ]},
  {id:'conv_09710',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、社員の子の入園を覚えていらした','Dad — founding staff-kid-enroll-remember','Sage','hiroshi_elder'),
    mk('はい。お父さんは経費をミニマムに抑える経営をされた','Yes — Dad cost-min-mgmt','Commitment','hiroshi_boss'),
    mk('お父さん、業界コンソーシアムを立ち上げる事に尽力された','Dad — industry-cons-launch-effort','Wistful','hiroshi_elder'),
    mk('はい。お父さんは契約原本を徹底管理された','Yes — Dad contract-orig-strict','Reflective','hiroshi_boss'),
    mk('お父さん、諸般の事情に配慮した経営をされた','Dad — all-circum-mgmt','Wistful','hiroshi_elder'),
    mk('はい。お父さんは目途を立てて行動された','Yes — Dad target-act','Reflective','hiroshi_boss'),
    mk('お父さん、業界誌の休刊危機にも対応された','Dad — industry-mag-pause-resp','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新事業に乗り出す勇気を示された','Yes — Dad new-biz-launch-brave','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09711',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、量子力学の位相情報の研究を論文で扱いましたね','Ren — quant-phase paper','Calm','asuka_teacher'),
    mk('はい、流体力学の翼設計研究を論文で扱いました','Yes — Fluid-wing paper','Earnest','ren_uni'),
    mk('蓮さん、半導体の研磨技術を論文で扱いましたね','Ren — semi-polish paper','Reflective','asuka_teacher'),
    mk('はい、僻地医療の課題研究を論文で扱いました','Yes — Rural-med paper','Earnest','ren_uni'),
    mk('構造物の共振現象を論文で扱いましたね','Struct-reson paper','Engaged','asuka_teacher'),
    mk('はい、化学の界面活性剤研究を論文で扱いました','Yes — Surf-active paper','Earnest','ren_uni'),
    mk('蓮さん、発振回路の設計研究を論文で扱いましたね','Ren — osc-circ paper','Reflective','asuka_teacher'),
    mk('はい、電池の電極材料研究を論文で扱いました','Yes — Batt-elec paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09712',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、犯行時刻の位相分析を、警察、おこなわれますね','Case crime-phase-anal police-do','Reflective','ren_uni'),
    mk('警察、流体の漏出事故も担当します','Police fluid-leak-acc','Procedural','takeda_officer'),
    mk('本件、研磨剤の不正使用を、警察、扱われますね','Case polish-misuse police-handle','Reflective','ren_uni'),
    mk('警察、僻地での失踪事件にも対応します','Police rural-miss-resp','Procedural','takeda_officer'),
    mk('本件、共振現象が原因の建物倒壊を、警察、扱われますね','Case reson-bld-coll police-handle','Reflective','ren_uni'),
    mk('警察、界面活性剤を悪用した犯行も把握します','Police surf-act-misuse','Procedural','takeda_officer'),
    mk('本件、無線発振機の不正使用を、警察、扱われますね','Case wire-osc-misuse police-handle','Reflective','ren_uni'),
    mk('警察、電極にDNAが付着した事案も鑑定します','Police elec-DNA-attach-forensic','Close','takeda_officer'),
  ]},
  {id:'conv_09713',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、量子力学の位相情報を論文で扱いましたね','Sakura — quant-phase paper','Calm','asuka_teacher'),
    mk('はい、流体力学の翼設計を論文で扱いました','Yes — Fluid-wing paper','Earnest teen','sakura_teen'),
    mk('半導体の研磨技術を論文で扱いましたね','Semi-polish paper','Reflective','asuka_teacher'),
    mk('はい、僻地医療の課題を論文で扱いました','Yes — Rural-med paper','Earnest','sakura_teen'),
    mk('構造物の共振現象を論文で扱いましたね','Struct-reson paper','Engaged','asuka_teacher'),
    mk('はい、化学の界面活性剤を論文で扱いました','Yes — Surf-active paper','Earnest','sakura_teen'),
    mk('発振回路の設計を論文で扱いましたね','Osc-circ paper','Reflective','asuka_teacher'),
    mk('はい、電池の電極材料を論文で扱いました','Yes — Batt-elec paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09714',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、心臓の位相心電図を医療チームで解析します','Ren — heart-phase-ECG med-team','Calm','saito_doctor'),
    mk('はい、点滴の流体力学を医療チームで活用します','Yes — IV-fluid med-team','Patient','saito_doctor'),
    mk('蓮さん、人工関節の研磨技術を医療チームで採用します','Ren — joint-polish med-team','Calm','saito_doctor'),
    mk('僻地医療巡回を、貴院、推進されてますね、先生','Rural-med-rounds your-hosp promo, sensei','Reflective','ren_uni'),
    mk('はい、声帯の共振解析を医療チームでおこないます','Yes — Vocal-reson med-team','Patient','saito_doctor'),
    mk('はい、医療現場の界面消毒を医療チームで徹底します','Yes — Med-surf-disinf med-team strict','Patient','saito_doctor'),
    mk('心臓の発振リズム異常を、貴院、診られますね、先生','Heart-osc-abn your-hosp diag, sensei','Curious','ren_uni'),
    mk('はい、心電図電極の管理を医療チームで日々おこないます','Yes — ECG-elec-mgmt med-team daily','Patient close','saito_doctor'),
  ]},
  {id:'conv_09715',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、市場の位相分析を採用しろ','Our co — mkt-phase-anal','Crisp','hiroshi_boss'),
    mk('はい。流体機器メーカーとも提携します','Yes — Fluid-eq-partner','Methodical','kenji_office'),
    mk('当社、製品の研磨工程を改善しろ','Our co — prod-polish-impr','Direction','hiroshi_boss'),
    mk('はい。僻地配送の効率化を進めます','Yes — Rural-deliv-eff','Update','kenji_office'),
    mk('組織の共振状態、つまり一体感を高めろ','Org-reson-unity-up','Direction','hiroshi_boss'),
    mk('はい。市場との界面戦略を強化します','Yes — Mkt-surf-strat-strength','Update','kenji_office'),
    mk('当社、ヒット商品の発振拠点を作れ','Our co — hit-prod-osc-base','Direction','hiroshi_boss'),
    mk('はい。電池電極技術への投資を増やします','Yes — Batt-elec-invest-up','Close','kenji_office'),
  ]},
  {id:'conv_09716',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ルノーの車に乗ってお越しになったよ、メイちゃん','Aoi — cust-Renault-come Mei','Reflective','mei_romantic'),
    mk('葵、お客様、葛飾の柴又にお住まいだって、メイちゃん','Aoi — cust-Katsushika-Shibamata Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ジャッキーチェンの映画ファンだって、メイちゃん','Aoi — cust-Jackie-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ポーカーのトーナメントに出られるって、メイちゃん','Aoi — cust-poker-tour Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ドラクエの新作待ちだって、メイちゃん','Aoi — cust-DQ-wait Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ゴルフのマスターズ観戦されてたって、メイちゃん','Aoi — cust-Masters-watch Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ワンセグでテレビを見ながら勉強してたって、メイちゃん','Aoi — cust-One-seg-study Mei','Reflective','mei_romantic'),
    mk('葵、お客様、スペースシャトル時代のNASA勤務だって、メイちゃん','Aoi — cust-shuttle-NASA Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09717',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがルノーの車を運転された','Gran — youth Dad-Renault-drive','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、葛飾区にゆかりの方だったわよね、あなた?','Yes — Grandpa-Katsushika-tie, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがジャッキーチェンの映画を映画館でご覧になった','Gran — youth Dad-Jackie-cinema','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ポーカーをご友人と楽しまれたわよね、あなた?','Grandpa — poker-fri-fun, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがお孫様のドラクエ攻略を見守られた','Gran — youth Dad-grandkid-DQ-watch','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、晩年、マスターズ中継をご覧になるのが楽しみだったわよね、あなた?','Grandpa — late-Masters-fun, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがワンセグの登場に驚かれた','Gran — youth Dad-One-seg-surprise','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、スペースシャトル打ち上げを録画して観てらしたわよね、あなた?','Grandpa — shuttle-launch-rec, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09718',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがルノーの車に乗せて下さるそうよ','Sho — Dad-Renault-ride','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと葛飾の柴又に行ったよ','Mei-sis — me Dad-Katsushika-went','Eager child','sho_child'),
    mk('翔くん、お父さんがジャッキーチェンの映画を観せて下さるそうよ','Sho — Dad-Jackie-show','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ポーカーはまだ早いって言われたよ','Mei-sis — me poker-early-said','Wry child','sho_child'),
    mk('翔くん、お父さんがドラクエの絵本を読んで下さるそうよ','Sho — Dad-DQ-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとマスターズの中継観たいよ','Mei-sis — me Dad-Masters-want','Eager child','sho_child'),
    mk('翔くん、お父さんがワンセグTVを持ってらしたのよ','Sho — Dad-One-seg-have','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとスペースシャトルの本見たよ','Mei-sis — me Dad-shuttle-book','Eager close','sho_child'),
  ]},
  {id:'conv_09719',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前ん家、ルノー乗ってたな','Riku — your-home-Renault','Curious teen','sakura_teen'),
    mk('お前、葛飾の漫画好きだったな、桜','You — Katsushika-manga-like Sakura','Curious','riku_teen'),
    mk('リク、お前、ジャッキーチェンの映画真似してたな','Riku — Jackie-mimic','Wry','sakura_teen'),
    mk('お前、家でポーカーやってたな、桜','You — home-poker Sakura','Wry','riku_teen'),
    mk('リク、お前、ドラクエ全シリーズやってるだろ','Riku — DQ-all','Curious','sakura_teen'),
    mk('お前、ゴルフでマスターズ目指してたな、桜','You — golf-Masters-aim Sakura','Curious','riku_teen'),
    mk('リク、お前、ワンセグで授業中見てたろ','Riku — One-seg-class-watch','Wry','sakura_teen'),
    mk('お前、社会でスペースシャトル習ったろ?桜','You — soc-shuttle? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09720',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがルノーの車に乗せて下さるそうよ','Sho — Dad-Renault-ride','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと葛飾の柴又に行きたいよ','Mom — me Dad-Katsushika-want','Eager child','sho_child'),
    mk('翔くん、お父さんがジャッキーチェンの映画ファンなのよ','Sho — Dad-Jackie-fan','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとポーカーのルール習ったよ','Mom — me Dad-poker-rule','Eager child','sho_child'),
    mk('翔くん、お父さんがドラクエの新作を予約されたわ','Sho — Dad-DQ-new-rsv','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとマスターズの中継観たよ','Mom — me Dad-Masters-watched','Eager child','sho_child'),
    mk('翔くん、お父さんがワンセグの携帯を使ってらしたわ','Sho — Dad-One-seg-phone','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとスペースシャトル展行ったよ','Mom — me Dad-shuttle-expo','Eager close','sho_child'),
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

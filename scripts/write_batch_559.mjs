import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_559 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['吹か','絵柄','被る','亡き','女将','桶','安物','小豆']
const B_T = ['試乗','躍進','ビデオカメラ','刻印','副題','休職','借用','発令']
const C_T = ['乳児','遺骨','銃弾','勾留','留置','採血','病的','課さ']
const D_T = ['イースト','アーチ','大リーグ','サーモン','マイレージ','聖歌','ダイアナ','カッパ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_11141',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「春風を吹かれた窓辺で本を読みたい」って仰ってたわ','Sho — Dad-"spring-wind-blow-book"-said','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと「絵柄が綺麗な着物」を選んだよ','Mom — me Dad-"pattern-kim"-pick','Pleased child','sho_child'),
    mk('翔くん、お父さんが「雨に被るから、傘を持って」って仰ったわ','Sho — Dad-"rain-get-umb"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと「亡き祖父のお話」を聞いたよ','Mom — me Dad-"late-grdpa-talk"-heard','Earnest child','sho_child'),
    mk('翔くん、お父さんが「旅館の女将さんが優しい」って仰ってたわ','Sho — Dad-"ryokan-prop-kind"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと「お風呂の桶でひっくり返した」失敗したよ','Mom — me Dad-"bath-buck-spill"-fail','Wry child','sho_child'),
    mk('翔くん、お父さんが「安物のおもちゃでも工夫すれば長く遊べる」って仰ってたわ','Sho — Dad-"cheap-toy-eff"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと小豆を入れたあんぱんを食べたよ','Mom — me Dad-azuki-anpan','Eager close','sho_child'),
  ]},
  {id:'conv_11142',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、「窓から風を吹かれて気持ちいい」って仰ってたよ、メイちゃん','Aoi — cust-"wind-blow-pleasant"-said Mei','Reflective','mei_romantic'),
    mk('葵、お客様、和菓子の絵柄、つまり繊細な絵柄をお褒め下さったよ、メイちゃん','Aoi — cust-sweets-pattern-praise Mei','Reflective','aoi_barista'),
    mk('葵、お客様、「災難を被る前に予防策を」って仰ってたよ、メイちゃん','Aoi — cust-"dis-suffer-prev"-said Mei','Reflective','mei_romantic'),
    mk('葵、お客様、亡き先代のオーナーの写真を見て涙されてたよ、メイちゃん','Aoi — cust-late-owner-photo-tear Mei','Tender','aoi_barista'),
    mk('葵、お客様、ご友人の女将さんとよく来店されるよ、メイちゃん','Aoi — cust-fri-prop-reg Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お風呂の桶のお話を笑顔で語って下さったよ、メイちゃん','Aoi — cust-bath-buck-smile Mei','Wry','aoi_barista'),
    mk('葵、お客様、「安物でも丁寧に使えば長持ち」って仰ってたよ、メイちゃん','Aoi — cust-"cheap-care-last"-said Mei','Reflective','mei_romantic'),
    mk('葵、お客様、小豆のおはぎがお気に入りだって、メイちゃん','Aoi — cust-azuki-ohagi-fav Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_11143',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが秋風を吹かれた庭で読書された','Gran — youth Dad-aut-wind-yard-read','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、絵柄、つまり古い絵柄の着物を私に下さったわよね、あなた?','Yes — Grandpa-pattern-kim-gift, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「不運を被る事は誰にもある」と仰った','Gran — youth Dad-"misfort-suffer"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、亡き友人を偲んで俳句を詠まれたわよね、あなた?','Grandpa — youth-late-fri-haik, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが旅館の女将さんと懇意にされた','Gran — youth Dad-ryokan-prop-close','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、井戸の桶で水を汲まれたわよね、あなた?','Grandpa — youth-well-buck-water, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは「安物買いの銭失い」と諭された','Gran — youth Dad-"cheap-loss"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、小豆ご飯で祝い事をされたわよね、あなた?','Grandpa — youth-azuki-rice-cel, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_11144',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、夏の風を吹かれて気持ち良さそうだったな','Riku — sum-wind-blow-pleas','Wry teen','sakura_teen'),
    mk('お前、Tシャツの絵柄、つまり絵柄が派手だったな、桜','You — T-pattern-fancy Sakura','Wry','riku_teen'),
    mk('リク、お前、突然の雨を被ってずぶ濡れだったな','Riku — sud-rain-suffer-wet','Wry','sakura_teen'),
    mk('お前、社会で亡きおじいちゃんのお話してたな、桜','You — soc-late-grdpa-talk Sakura','Curious','riku_teen'),
    mk('リク、お前のおばさん、女将さんって呼ばれてたな','Riku — your-aunt-prop-call','Curious','sakura_teen'),
    mk('お前、お風呂の桶で水遊びしてたろ、桜','You — bath-buck-play? Sakura','Wry','riku_teen'),
    mk('リク、お前、「安物のスニーカーでも気に入った」って言ってたな','Riku — "cheap-sneak-like"-said','Wry','sakura_teen'),
    mk('お前、家庭科で小豆煮たな、桜','You — home-azuki-boil Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_11145',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「秋風を吹かれた公園で散歩しよう」って仰ってたわ','Sho — Dad-"aut-wind-park"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと絵柄の凝った絵本見たよ','Mei-sis — me Dad-pattern-rich-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが「災難を被る前に気付ける目を持って」って仰ってたわ','Sho — Dad-"dis-suffer-notice"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと亡き伯父の墓参り行ったよ','Mei-sis — me Dad-late-uncle-grave','Earnest child','sho_child'),
    mk('翔くん、お父さんが「老舗の女将さんは粋」って仰ってたわ','Sho — Dad-"old-rest-prop-cool"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと桶ですいかを冷やしたよ','Mei-sis — me Dad-buck-water-cool','Eager child','sho_child'),
    mk('翔くん、お父さんが「安物にも工夫の余地がある」って仰ってたわ','Sho — Dad-"cheap-eff"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと小豆あんを作ったよ','Mei-sis — me Dad-azuki-paste','Eager close','sho_child'),
  ]},
  {id:'conv_11146',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新車の試乗イベントを企画しろ','Our co — new-car-test-event','Crisp','hiroshi_boss'),
    mk('はい。海外市場での躍進を狙います','Yes — Overs-mkt-leap-aim','Methodical','kenji_office'),
    mk('当社、社内に防犯ビデオカメラを増設しろ','Our co — int-vid-cam-add','Direction','hiroshi_boss'),
    mk('はい。新製品にロゴを刻印します','Yes — New-prod-logo-engrave','Update','kenji_office'),
    mk('当社、社報の副題を「成長と挑戦」にしろ','Our co — co-news-sub-grow-chal','Direction','hiroshi_boss'),
    mk('はい。長期病気休職の社員を支援します','Yes — Long-sick-leave-supp','Update','kenji_office'),
    mk('当社、外部資料の借用申請を整えろ','Our co — ext-mat-borrow-form','Direction','hiroshi_boss'),
    mk('はい。社長名で新規定を発令します','Yes — Pres-new-reg-issue','Close','kenji_office'),
  ]},
  {id:'conv_11147',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('新型モデルの試乗会を全国展開しましょう','New-mod-test-nat','Brisk','yuki_office'),
    mk('はい。海外シェア躍進のキャンペーンを準備します','Yes — Overs-share-leap-camp','Cooperative','kenji_office'),
    mk('社内ビデオカメラの稼働確認を毎月しましょう','Int-vid-cam-check-mo','Direction','yuki_office'),
    mk('はい。新製品の刻印工程を確認します','Yes — New-prod-engrave-proc','Update','kenji_office'),
    mk('社内報の副題を社員から募集しましょう','Co-news-sub-staff-recr','Direction','yuki_office'),
    mk('はい。休職中の社員との連絡体制を整えます','Yes — Leave-staff-comm-set','Update','kenji_office'),
    mk('社外文献の借用ルールを統一しましょう','Ext-lit-borrow-rule-uni','Direction','yuki_office'),
    mk('はい。緊急時の発令フローを再確認します','Yes — Emerg-issue-flow-check','Close','kenji_office'),
  ]},
  {id:'conv_11148',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、実験機の試乗、つまり試運転を担当しろ','Ren — exp-mach-test-take','Mentor','hiroshi_boss'),
    mk('はい。研究の躍進を目指し、論文を投稿します','Yes — Res-leap-paper-submit','Earnest','ren_uni'),
    mk('蓮、フィールド調査でビデオカメラを使え','Ren — field-vid-cam-use','Direction','hiroshi_boss'),
    mk('はい。試料に識別番号を刻印します','Yes — Sample-ID-engrave','Earnest','ren_uni'),
    mk('蓮、論文の副題を魅力的にしろ','Ren — paper-sub-attr','Direction','hiroshi_boss'),
    mk('はい。研究室の先輩の休職期間を考慮します','Yes — Lab-sen-leave-cons','Polite','ren_uni'),
    mk('蓮、図書館から論文を借用するな、複写しろ','Ren — lib-paper-borrow-no-copy','Direction','hiroshi_boss'),
    mk('はい。研究費追加の発令を待ちます','Yes — Res-fund-add-issue-wait','Earnest close','ren_uni'),
  ]},
  {id:'conv_11149',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、新型パトカーの試乗を、警察、実施されますね','Police new-pat-car-test','Cooperative','kenji_office'),
    mk('警察、検挙率の躍進を、警察、目指されますね','Police arr-rate-leap-aim','Cooperative','kenji_office'),
    mk('警察、現場のビデオカメラ証拠を、警察、解析されますね','Police scene-vid-cam-evid-anal','Cooperative','kenji_office'),
    mk('警察、警察手帳に番号を刻印されますね','Police badge-num-engrave','Cooperative','kenji_office'),
    mk('警察、調書の副題、つまり項目見出しも整えられますね','Police stmt-sub-head','Cooperative','kenji_office'),
    mk('警察、長期療養の捜査員の休職対応もされますね','Police long-rec-leave','Cooperative','kenji_office'),
    mk('警察、外部資料の借用記録を、警察、厳格に管理されますね','Police ext-mat-borrow-strict','Cooperative','kenji_office'),
    mk('警察、緊急配備の発令を、警察、迅速にされますね','Police emerg-issue-quick','Close','kenji_office'),
  ]},
  {id:'conv_11150',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、新型車の試乗、つまり試乗会を毎月開催された','Dad — youth-test-event-mo','Sage','hiroshi_elder'),
    mk('はい。お父さんは事業の躍進を社員と祝われた','Yes — Dad biz-leap-cel','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、社内にビデオカメラを早く導入された','Dad — youth-vid-cam-early','Wistful','hiroshi_elder'),
    mk('はい。お父さんは記念品にロゴを刻印するのを大事にされた','Yes — Dad com-logo-engrave-cher','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、社内報の副題、つまり副題に毎号工夫された','Dad — youth-co-news-sub-eff','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員の休職を温かく支援された','Yes — Dad staff-leave-warm-supp','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、社外資料の借用にも厳格だった','Dad — youth-ext-mat-borrow-strict','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新規定の発令前に社員と対話された','Yes — Dad new-reg-issue-pre-dial','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_11151',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、乳児の発達心理学研究を論文で扱いましたね','Ren — infant-dev-psy paper','Calm','asuka_teacher'),
    mk('はい、戦死者の遺骨収集の歴史研究を論文で扱いました','Yes — War-dead-rem paper','Earnest','ren_uni'),
    mk('蓮さん、銃弾の弾道学の研究を論文で扱いましたね','Ren — bull-ballist paper','Reflective','asuka_teacher'),
    mk('はい、勾留期間の刑事訴訟法研究を論文で扱いました','Yes — Pre-trial-detn-crim paper','Earnest','ren_uni'),
    mk('蓮さん、留置施設の処遇研究を論文で扱いましたね','Ren — detn-fac-treat paper','Reflective','asuka_teacher'),
    mk('はい、採血、つまり血液採取の医学的標準研究を論文で扱いました','Yes — Blood-draw-stand paper','Earnest','ren_uni'),
    mk('蓮さん、病的肥満の医学社会学研究を論文で扱いましたね','Ren — path-obes-soc paper','Reflective','asuka_teacher'),
    mk('はい、法律で課された規制の経済影響研究を論文で扱いました','Yes — Law-impose-econ paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_11152',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、乳児への虐待事案を、警察、慎重に対応されますね','Case infant-abuse police-care','Reflective','ren_uni'),
    mk('警察、戦災者の遺骨収集にもご協力されますね','Police war-dead-rem-coop','Cooperative','takeda_officer'),
    mk('本件、現場から銃弾を、警察、回収されますね','Case scene-bull police-retr','Reflective','ren_uni'),
    mk('警察、容疑者の勾留期間を、警察、適正に管理されますね','Police suspect-detn-pl-mgmt','Cooperative','takeda_officer'),
    mk('本件、留置場の管理を、警察、徹底されますね','Case detn-fac-mgmt police-thor','Reflective','ren_uni'),
    mk('警察、現場の被害者に採血、つまり採血検査を、警察、依頼されますね','Police vict-blood-draw','Cooperative','takeda_officer'),
    mk('本件、容疑者の病的虚言癖を、警察、慎重に判断されますね','Case suspect-path-lie police-care','Reflective','ren_uni'),
    mk('警察、課された規制内で捜査を、警察、進められますね','Police impose-reg-inv','Close','takeda_officer'),
  ]},
  {id:'conv_11153',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、乳児の発達心理学研究を論文で扱いましたね','Sakura — infant paper','Calm','asuka_teacher'),
    mk('はい、戦死者の遺骨収集の歴史研究を論文で扱いました','Yes — Rem paper','Earnest teen','sakura_teen'),
    mk('銃弾の弾道学の研究を論文で扱いましたね','Bull paper','Reflective','asuka_teacher'),
    mk('はい、勾留期間の刑事訴訟法研究を論文で扱いました','Yes — Pre-detn paper','Earnest','sakura_teen'),
    mk('留置施設の処遇研究を論文で扱いましたね','Detn paper','Reflective','asuka_teacher'),
    mk('はい、採血、つまり血液採取の医学的標準研究を論文で扱いました','Yes — Blood-draw paper','Earnest','sakura_teen'),
    mk('病的肥満の医学社会学研究を論文で扱いましたね','Path-obes paper','Reflective','asuka_teacher'),
    mk('はい、法律で課された規制の経済影響研究を論文で扱いました','Yes — Impose paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_11154',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、乳児健診を医療チームで丁寧におこないます','Ren — infant-checkup med-team','Calm','saito_doctor'),
    mk('蓮さん、ご遺族と遺骨返還の手続きを医療チームで支援します','Ren — bereav-rem-ret med-team','Calm','saito_doctor'),
    mk('蓮さん、銃弾摘出の手術を医療チームで担当します','Ren — bull-rem-surg med-team','Calm','saito_doctor'),
    mk('蓮さん、勾留中の被疑者の健康診断を医療チームで担当します','Ren — detn-suspect-checkup med-team','Calm','saito_doctor'),
    mk('蓮さん、留置場での医療提供を医療チームでおこないます','Ren — detn-fac-med med-team','Calm','saito_doctor'),
    mk('蓮さん、定期採血、つまり採血検査を医療チームで丁寧におこないます','Ren — reg-blood-draw med-team','Calm','saito_doctor'),
    mk('蓮さん、患者様の病的不安を医療チームで丁寧に対応します','Ren — pati-path-anx med-team','Calm','saito_doctor'),
    mk('蓮さん、保険で課された自己負担を医療チームで丁寧に説明します','Ren — ins-impose-out-of-pocket med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_11155',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、乳児向け商品の品質を最優先しろ','Our co — infant-prod-qual-top','Crisp','hiroshi_boss'),
    mk('はい。戦災遺骨収集事業に寄付します','Yes — War-rem-don','Methodical','kenji_office'),
    mk('当社、社員の銃弾事故、つまり銃弾保険にも対応しろ','Our co — staff-bull-ins','Direction','hiroshi_boss'),
    mk('はい。社員の勾留事案には法務部が対応します','Yes — Staff-detn-leg-resp','Update','kenji_office'),
    mk('当社、社内留置スペース、つまり保管室を整えろ','Our co — int-detn-storage','Direction','hiroshi_boss'),
    mk('はい。社員定期検診で採血を含めます','Yes — Staff-checkup-blood','Update','kenji_office'),
    mk('当社、病的なクレーマー対策を強化しろ','Our co — path-comp-prev','Direction','hiroshi_boss'),
    mk('はい。法令で課された開示義務に従います','Yes — Law-impose-disc','Close','kenji_office'),
  ]},
  {id:'conv_11156',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、パン作りのイースト菌に拘ってらっしゃるって、メイちゃん','Aoi — cust-bread-yeast-stick Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ヨーロッパ旅行で石造りのアーチを撮影されたって、メイちゃん','Aoi — cust-Eu-stone-arch-photo Mei','Reflective','aoi_barista'),
    mk('葵、お客様、大リーグの試合を毎晩観てらっしゃるって、メイちゃん','Aoi — cust-MLB-nigh-watch Mei','Reflective','mei_romantic'),
    mk('葵、お客様、サーモンのお寿司がお好きだって、メイちゃん','Aoi — cust-salmon-sushi-fav Mei','Reflective','aoi_barista'),
    mk('葵、お客様、航空マイレージを貯めるのがお得意だって、メイちゃん','Aoi — cust-mileage-coll Mei','Reflective','mei_romantic'),
    mk('葵、お客様、教会で聖歌を歌うご趣味だって、メイちゃん','Aoi — cust-church-hymn-sing Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ダイアナ妃の伝記を読んでらしたよ、メイちゃん','Aoi — cust-Diana-biog-read Mei','Reflective','mei_romantic'),
    mk('葵、お客様、河童、つまりカッパの民話を語って下さったよ、メイちゃん','Aoi — cust-kappa-folk-talk Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_11157',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがパン作りでイースト菌を試された','Gran — youth Dad-bread-yeast-try','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、ヨーロッパでアーチ橋を撮影されたわよね、あなた?','Yes — Grandpa-Eu-arch-photo, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが大リーグのワールドシリーズを観られた','Gran — youth Dad-MLB-WS','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、北海道のサーモンを取り寄せされたわよね、あなた?','Grandpa — youth-Hok-salmon-order, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが航空マイレージを毎年使い切られた','Gran — youth Dad-mileage-yr-use','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、教会の聖歌隊に参加されたわよね、あなた?','Grandpa — youth-church-choir-join, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがダイアナ妃のニュースに心痛められた','Gran — youth Dad-Diana-news-pain','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、カッパ伝説の研究をされたわよね、あなた?','Grandpa — youth-kappa-leg-stud, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_11158',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「イースト菌を使ったパンを焼こう」って仰ってたわ','Sho — Dad-"yeast-bread"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと公園のアーチ橋を渡ったよ','Mei-sis — me Dad-park-arch-bridge','Eager child','sho_child'),
    mk('翔くん、お父さんが「大リーグ中継を一緒に観よう」って仰ってたわ','Sho — Dad-"MLB-broad"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとサーモンの寿司食べたよ','Mei-sis — me Dad-salmon-sushi','Eager child','sho_child'),
    mk('翔くん、お父さんがマイレージを貯めて家族旅行に行かれるそうよ','Sho — Dad-mileage-fam-trip','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと教会の聖歌を聴いたよ','Mei-sis — me Dad-church-hymn','Eager child','sho_child'),
    mk('翔くん、お父さんがダイアナ妃のドキュメンタリーを観られたわ','Sho — Dad-Diana-doc','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとカッパ、つまり河童の絵本を読んだよ','Mei-sis — me Dad-kappa-pic','Eager close','sho_child'),
  ]},
  {id:'conv_11159',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、家庭科でイースト菌のパン作ったろ','Riku — home-yeast-bread?','Curious teen','sakura_teen'),
    mk('お前、修学旅行でアーチ型の門撮影したろ、桜','You — sch-trip-arch-gate? Sakura','Curious','riku_teen'),
    mk('リク、お前、大リーグの大谷選手のファンだったな','Riku — MLB-Otani-fan','Curious','sakura_teen'),
    mk('お前、給食でサーモンマリネ出てたな、桜','You — lunch-salmon-mar Sakura','Wry','riku_teen'),
    mk('リク、お前、お父さんのマイレージで沖縄行ったろ','Riku — Dad-mileage-Oki?','Curious','sakura_teen'),
    mk('お前、合唱部で聖歌歌ったろ、桜','You — chor-club-hymn? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会で英王室のダイアナ妃調べてたな','Riku — soc-Diana-stud','Curious','sakura_teen'),
    mk('お前、林間学校でカッパ伝説の話聞いたろ、桜','You — for-camp-kappa-tale? Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_11160',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがイースト菌の働きを実験で見せて下さるわ','Sho — Dad-yeast-exp','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと公園のアーチ橋の写真撮ったよ','Mom — me Dad-park-arch-photo','Eager child','sho_child'),
    mk('翔くん、お父さんが大リーグの試合中継を観てらっしゃるわ','Sho — Dad-MLB-broad','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとサーモンのムニエル食べたよ','Mom — me Dad-salmon-menur','Eager child','sho_child'),
    mk('翔くん、お父さんが航空マイレージを上手に使ってらっしゃるわ','Sho — Dad-mileage-good','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとクリスマスの聖歌をカラオケで歌ったよ','Mom — me Dad-Xmas-hymn-kara','Eager child','sho_child'),
    mk('翔くん、お父さんがダイアナ妃の伝記映画を観てらっしゃるわ','Sho — Dad-Diana-biog-film','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとカッパ、つまり河童巻きを食べたよ','Mom — me Dad-kappa-roll','Eager close','sho_child'),
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

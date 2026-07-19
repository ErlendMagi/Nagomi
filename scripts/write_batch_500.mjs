import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_500 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['やっこ','一足','脅かす','隔て','嫌気','愉し','溜め','好転']
const B_T = ['非課税','管区','掌握','発現','短調','寛大','トップクラス','発効']
const C_T = ['気功','狂牛病','磁場','下水道','社会保険庁','地表','脱臼','精油']
const D_T = ['寅次郎','ハーバード','義経','薩摩','アムステルダム','カタルーニャ','諏訪','福山']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09961',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが冷ややっこを召し上がってらっしゃるわ','Sho — Dad-yakko-tofu-eat','Pleased','yumiko_mom'),
    mk('ママ、ぼく、お父さんに一足早く目覚めの挨拶したよ','Mom — me Dad-step-earlier-greet','Eager child','sho_child'),
    mk('翔くん、人を脅かすようなふざけ方はやめましょうね','Sho — people-startle-prank-stop','Direction','yumiko_mom'),
    mk('ママ、お父さんがぼくとの距離を隔てて見守って下さってるのかな','Mom — Dad-me-dist-watch','Reflective child','sho_child'),
    mk('翔くん、お父さんは仕事に嫌気が差すことなく頑張ってらっしゃるわ','Sho — Dad-work-tire-no-effort','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとの時間を愉しいって感じるよ','Mom — me Dad-time-fun-feel','Tender child','sho_child'),
    mk('翔くん、貯金を少しずつ溜める習慣も大事よ','Sho — savings-grad-build-hab','Direction','yumiko_mom'),
    mk('ママ、お父さんのご機嫌が好転して嬉しいよ','Mom — Dad-mood-improve-glad','Eager close','sho_child'),
  ]},
  {id:'conv_09962',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、夏メニューに冷ややっこも加えようね、メイちゃん','Aoi — summer-yakko-add Mei','Direction','mei_romantic'),
    mk('葵、開店の一足先に準備を済ませようね、メイちゃん','Aoi — open-step-ahead-prep Mei','Direction','aoi_barista'),
    mk('葵、お客様を脅かすような演出は避けようね、メイちゃん','Aoi — cust-startle-avoid Mei','Direction','mei_romantic'),
    mk('葵、お客様の席を隔てて静かに過ごせる空間を作ろう、メイちゃん','Aoi — cust-seat-sep-quiet Mei','Direction','aoi_barista'),
    mk('葵、忙しさに嫌気が差さないよう気を付けようね、メイちゃん','Aoi — busy-tire-not Mei','Direction','mei_romantic'),
    mk('葵、お客様の愉しい時間を支えようね、メイちゃん','Aoi — cust-fun-supp Mei','Direction','aoi_barista'),
    mk('葵、ポイントを溜める制度を作ろうね、メイちゃん','Aoi — points-build-sys Mei','Direction','mei_romantic'),
    mk('葵、売上が好転してきたね、メイちゃん','Aoi — sales-improve Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_09963',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、夏の冷ややっこをお父さんが好まれた','Gran — youth-summer-yakko-Dad-pref','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、人より一足早く起きてらしたわよね、あなた?','Yes — Grandpa-step-earlier-rise, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは子供を脅かす遊びを嫌がられた','Gran — youth Dad-kid-startle-dislike','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、戦中、家族と距離を隔てて暮らされた時期があったわよね、あなた?','Grandpa — war-fam-dist-live, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは仕事に嫌気を見せず勤勉だった','Gran — youth Dad-work-tire-no','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、孫との会話を愉しいと仰ってたわよね、あなた?','Grandpa — grandkid-talk-fun, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがコツコツと貯金を溜められた','Gran — youth Dad-bit-build','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、戦後、暮らしが好転した日々を喜ばれたわよね、あなた?','Grandpa — postwar-life-improve-glad, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09964',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、冷ややっこ嫌いだったな','Riku — yakko-dislike','Wry teen','sakura_teen'),
    mk('お前、一足違いで電車に乗り遅れたな、桜','You — step-train-miss Sakura','Wry','riku_teen'),
    mk('リク、お前、後輩を脅かすのやめろよ','Riku — junior-startle-stop','Direction','sakura_teen'),
    mk('お前、机を隔てて勉強してたな、桜','You — desk-sep-study Sakura','Curious','riku_teen'),
    mk('リク、お前、勉強に嫌気が差してたな','Riku — study-tire','Reflective','sakura_teen'),
    mk('お前、文化祭を愉しいって言ってたな、桜','You — cult-fest-fun-said Sakura','Pleased','riku_teen'),
    mk('リク、お前、お小遣いを溜めて何買うの?','Riku — allow-build-buy?','Curious','sakura_teen'),
    mk('お前、成績が好転してよかったな、桜','You — grade-improve-good Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_09965',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが冷ややっこを召し上がるのが夏の楽しみよ','Sho — Dad-yakko-summer-fun','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんより一足早く宿題終わったよ','Mei-sis — me Dad-step-earlier-homework','Eager child','sho_child'),
    mk('翔くん、お友達を脅かすような事は避けようね','Sho — friend-startle-avoid','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと距離を隔てる事なく接したいよ','Mei-sis — me Dad-dist-no-close','Tender child','sho_child'),
    mk('翔くん、勉強に嫌気が差したら教えてね','Sho — study-tire-tell','Direction','mei_romantic'),
    mk('メイ姉さん、お父さんとのお話が愉しいよ','Mei-sis — Dad-talk-fun','Tender child','sho_child'),
    mk('翔くん、お小遣いを少しずつ溜める癖を付けましょうね','Sho — allow-grad-build-hab','Direction','mei_romantic'),
    mk('メイ姉さん、お父さんの体調が好転して安心したよ','Mei-sis — Dad-health-improve-easy','Tender close','sho_child'),
  ]},
  {id:'conv_09966',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、非課税口座制度を社員に周知しろ','Our co — tax-free-staff-notify','Crisp','hiroshi_boss'),
    mk('はい。営業管区の見直しを進めます','Yes — Sales-area-rev','Methodical','kenji_office'),
    mk('当社、市場の掌握を急げ','Our co — mkt-grasp-fast','Direction','hiroshi_boss'),
    mk('はい。新商品の効果が発現するまで時間がかかります','Yes — New-prod-eff-appear-time','Update','kenji_office'),
    mk('当社のBGMを短調から長調に変えろ','Our co — BGM-min-maj-change','Direction','hiroshi_boss'),
    mk('はい。顧客には寛大な対応を致します','Yes — Cust-gen-resp','Update','kenji_office'),
    mk('当社、業界トップクラスの品質を目指せ','Our co — industry-top-aim','Direction','hiroshi_boss'),
    mk('はい。新法の発効日を確認します','Yes — New-law-eff-date','Close','kenji_office'),
  ]},
  {id:'conv_09967',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('非課税枠を活用しましょう','Tax-free-use','Brisk','yuki_office'),
    mk('はい。営業管区別の業績を比較します','Yes — Sales-area-cmp','Cooperative','kenji_office'),
    mk('シェアの掌握には時間がかかりますね','Share-grasp-time','Direction','yuki_office'),
    mk('はい。新ブランドの認知が発現するまで広告を続けます','Yes — New-brand-aware-appear-ad-cont','Update','kenji_office'),
    mk('社内BGMを短調系で落ち着かせましょう','Co-BGM-min-calm','Direction','yuki_office'),
    mk('はい。寛大な姿勢でクレーム対応します','Yes — Gen-comp-resp','Update','kenji_office'),
    mk('業界トップクラスを目指しましょう','Industry-top-aim','Direction','yuki_office'),
    mk('はい。改正法の発効に備えます','Yes — Amend-law-eff-prep','Close','kenji_office'),
  ]},
  {id:'conv_09968',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、奨学金の非課税扱いも理解しろ','Ren — grant-tax-free-und','Mentor','hiroshi_boss'),
    mk('はい。研究管区の制度を学びます','Yes — Research-area-learn','Earnest','ren_uni'),
    mk('蓮、研究分野の掌握をしっかりせよ','Ren — research-field-grasp','Direction','hiroshi_boss'),
    mk('はい。仮説の発現を実験で確かめます','Yes — Hyp-appear-exp-conf','Earnest','ren_uni'),
    mk('蓮、論文構成も時に短調的に整えろ','Ren — paper-min-arr','Direction','hiroshi_boss'),
    mk('はい。査読者の寛大な指摘に感謝します','Yes — Rev-gen-thanks','Polite','ren_uni'),
    mk('蓮、トップクラスの学術誌を目指せ','Ren — top-acad-aim','Direction','hiroshi_boss'),
    mk('はい。新ガイドラインの発効日に対応します','Yes — New-guide-eff-resp','Earnest close','ren_uni'),
  ]},
  {id:'conv_09969',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、非課税口座を悪用した詐欺もあるのですね','Police tax-free-fraud','Cooperative','kenji_office'),
    mk('警察、警察管区制度を運営されてますね','Police area-sys','Cooperative','kenji_office'),
    mk('警察、犯罪組織の掌握も進められますね','Police crime-grasp-prog','Cooperative','kenji_office'),
    mk('警察、薬物の発現症状にも対応されますね','Police drug-symp-appear-resp','Cooperative','kenji_office'),
    mk('警察、被害者の声を短調に抑えてサポートされますね','Police vict-min-supp','Cooperative','kenji_office'),
    mk('警察、初犯には寛大な対応もされますね','Police 1st-time-gen','Cooperative','kenji_office'),
    mk('警察、トップクラスの捜査技術をお持ちですね','Police top-inv-tech','Cooperative','kenji_office'),
    mk('警察、改正法の発効日に合わせ運用されますね','Police amend-law-eff-op','Close','kenji_office'),
  ]},
  {id:'conv_09970',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、非課税枠を活用して投資された','Dad — founding tax-free-invest','Sage','hiroshi_elder'),
    mk('はい。お父さんは販売管区を整備された','Yes — Dad sales-area-prep','Commitment','hiroshi_boss'),
    mk('お父さん、市場掌握の手腕がお見事だった','Dad — mkt-grasp-skill-magn','Wistful','hiroshi_elder'),
    mk('はい。お父さんは商品効果の発現を辛抱強く待たれた','Yes — Dad prod-eff-appear-wait','Reflective','hiroshi_boss'),
    mk('お父さん、社員に短調の悲観論を許されなかった','Dad — staff-min-pess-no','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員に寛大だった','Yes — Dad staff-gen','Reflective','hiroshi_boss'),
    mk('お父さん、トップクラスの経営者と評価されてた','Dad — top-mgmt-eval','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新法の発効を見据えて準備された','Yes — Dad new-law-eff-prep','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09971',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、中国伝統の気功療法を論文で扱いましたね','Ren — Chinese-qigong-ther paper','Calm','asuka_teacher'),
    mk('はい、狂牛病パンデミックの歴史を論文で扱いました','Yes — Mad-cow-pand paper','Earnest','ren_uni'),
    mk('蓮さん、地球磁場の変動研究を論文で扱いましたね','Ren — Earth-mag-var paper','Reflective','asuka_teacher'),
    mk('はい、戦後の下水道整備史を論文で扱いました','Yes — Postwar-sewer paper','Earnest','ren_uni'),
    mk('社会保険庁の不祥事史を論文で扱いましたね','SIA-scandal paper','Engaged','asuka_teacher'),
    mk('はい、地表温度の長期変動を論文で扱いました','Yes — Surf-temp-long paper','Earnest','ren_uni'),
    mk('蓮さん、肩関節脱臼のリハビリ研究を論文で扱いましたね','Ren — shoulder-disloc-rehab paper','Reflective','asuka_teacher'),
    mk('はい、ラベンダー精油の鎮静効果研究を論文で扱いました','Yes — Lav-ess-oil-calm paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09972',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、気功と称した詐欺事件を、警察、扱われますね','Case qigong-fraud police-handle','Reflective','ren_uni'),
    mk('警察、狂牛病感染牛の不正流通も捜査します','Police mad-cow-illeg-dist-inv','Procedural','takeda_officer'),
    mk('本件、磁場を悪用した盗難を、警察、扱われますね','Case mag-misuse-theft police-handle','Reflective','ren_uni'),
    mk('警察、下水道での失踪事件も担当します','Police sewer-miss-handle','Procedural','takeda_officer'),
    mk('本件、社会保険庁関連の不正を、警察、扱われますね','Case SIA-corrup police-handle','Reflective','ren_uni'),
    mk('警察、地表の痕跡を鑑識しますね','Police surf-trace-forensic','Procedural','takeda_officer'),
    mk('本件、被害者の脱臼を、警察、医療連携で対応されますね','Case vict-disloc-med-link','Reflective','ren_uni'),
    mk('警察、精油成分鑑定を依頼される事もありますね','Police ess-oil-forensic-req','Close','takeda_officer'),
  ]},
  {id:'conv_09973',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、中国伝統の気功療法を論文で扱いましたね','Sakura — qigong-ther paper','Calm','asuka_teacher'),
    mk('はい、狂牛病パンデミックの歴史を論文で扱いました','Yes — Mad-cow paper','Earnest teen','sakura_teen'),
    mk('地球磁場の変動研究を論文で扱いましたね','Earth-mag paper','Reflective','asuka_teacher'),
    mk('はい、戦後の下水道整備史を論文で扱いました','Yes — Postwar-sewer paper','Earnest','sakura_teen'),
    mk('社会保険庁の不祥事史を論文で扱いましたね','SIA-scandal paper','Engaged','asuka_teacher'),
    mk('はい、地表温度の長期変動を論文で扱いました','Yes — Surf-temp paper','Earnest','sakura_teen'),
    mk('肩関節脱臼のリハビリを論文で扱いましたね','Shoulder-disloc paper','Reflective','asuka_teacher'),
    mk('はい、ラベンダー精油の鎮静効果を論文で扱いました','Yes — Lav-ess-oil paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09974',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、患者の希望に気功も医療チームで尊重します','Ren — pati-qigong med-team resp','Calm','saito_doctor'),
    mk('はい、狂牛病類縁疾患の鑑別を医療チームで進めます','Yes — Mad-cow-rel med-team diff','Patient','saito_doctor'),
    mk('蓮さん、MRIの磁場安全管理を医療チームで徹底します','Ren — MRI-mag-safe med-team strict','Calm','saito_doctor'),
    mk('はい、病院の下水道感染対策を医療チームで強化します','Yes — Hosp-sewer-infect med-team strength','Patient','saito_doctor'),
    mk('社会保険庁の制度変更を、貴院、対応されてますね、先生','SIA-change your-hosp resp, sensei','Reflective','ren_uni'),
    mk('はい、地表の紫外線対策を医療チームで指導します','Yes — Surf-UV med-team guide','Patient','saito_doctor'),
    mk('はい、関節脱臼の整復を医療チームで丁寧におこないます','Yes — Joint-disloc-reset med-team careful','Patient','saito_doctor'),
    mk('精油アロマテラピーを、貴院、補助療法とされてますね、先生','Ess-aroma your-hosp adj, sensei','Curious close','ren_uni'),
  ]},
  {id:'conv_09975',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、社員ヨガに気功も取り入れろ','Our co — staff-yoga-qigong-add','Crisp','hiroshi_boss'),
    mk('はい。狂牛病リスク管理を食品事業で強化します','Yes — Mad-cow-risk-food-strength','Methodical','kenji_office'),
    mk('当社、磁場関連機器の研究開発を進めろ','Our co — mag-eq-R-and-D','Direction','hiroshi_boss'),
    mk('はい。工場の下水道排水基準を厳守します','Yes — Fact-sewer-disch-std','Update','kenji_office'),
    mk('社会保険庁手続きを社内で支援しろ','SIA-proc-co-supp','Direction','hiroshi_boss'),
    mk('はい。地表温度測定機器の販売も検討します','Yes — Surf-temp-eq-sale-cons','Update','kenji_office'),
    mk('社員のスポーツ脱臼対策にも保険を整えろ','Staff-sport-disloc-ins-prep','Direction','hiroshi_boss'),
    mk('はい。精油商品の品質を向上します','Yes — Ess-oil-qual-up','Close','kenji_office'),
  ]},
  {id:'conv_09976',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、寅次郎の映画ファンだって、メイちゃん','Aoi — cust-Torajiro-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ハーバード大学の卒業生だって、メイちゃん','Aoi — cust-Harvard-grad Mei','Reflective','aoi_barista'),
    mk('葵、お客様、源義経の歴史小説がご趣味だって、メイちゃん','Aoi — cust-Yoshitsune-novel Mei','Reflective','mei_romantic'),
    mk('葵、お客様、薩摩芋焼酎がお好きだって、メイちゃん','Aoi — cust-Satsuma-shochu Mei','Reflective','aoi_barista'),
    mk('葵、お客様、アムステルダムへ留学経験がおありだって、メイちゃん','Aoi — cust-Amst-study Mei','Reflective','mei_romantic'),
    mk('葵、お客様、カタルーニャ料理屋を開きたいって、メイちゃん','Aoi — cust-Catal-rest-want Mei','Reflective','aoi_barista'),
    mk('葵、お客様、長野の諏訪湖がお気に入りだって、メイちゃん','Aoi — cust-Suwa-lake-fav Mei','Reflective','mei_romantic'),
    mk('葵、お客様、福山雅治の音楽がお好きだって、メイちゃん','Aoi — cust-Fukuyama-music Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09977',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが寅次郎の映画を映画館で観られた','Gran — youth Dad-Torajiro-cinema','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ハーバード大学への留学が夢だったわよね、あなた?','Yes — Grandpa-Harvard-dream, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが源義経の伝記をご愛読された','Gran — youth Dad-Yoshitsune-read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、薩摩出身の方々と交流されたわよね、あなた?','Grandpa — Satsuma-orig-exch, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがアムステルダムに駐在された','Gran — youth Dad-Amst-station','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、カタルーニャ独立運動のニュースをご覧になってたわよね、あなた?','Grandpa — Catal-indep-news, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと諏訪湖の御柱祭を見に行った','Gran — youth Dad-Suwa-Onbashira','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、福山雅治のドラマをご覧になってたわよね、あなた?','Grandpa — Fukuyama-drama, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09978',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが寅次郎の映画を観せて下さるそうよ','Sho — Dad-Torajiro-show','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんがハーバード大学のお話して下さったよ','Mei-sis — me Dad-Harvard-told','Eager child','sho_child'),
    mk('翔くん、お父さんが源義経の絵本を読んで下さるそうよ','Sho — Dad-Yoshitsune-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと薩摩揚げ食べたよ','Mei-sis — me Dad-Satsuma-age','Eager child','sho_child'),
    mk('翔くん、お父さんがアムステルダムのお土産を下さったわ','Sho — Dad-Amst-souv','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとカタルーニャの絵本見たよ','Mei-sis — me Dad-Catal-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが諏訪湖に連れて行って下さるそうよ','Sho — Dad-Suwa-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと福山雅治のコンサート観たいよ','Mei-sis — me Dad-Fukuyama-want','Eager close','sho_child'),
  ]},
  {id:'conv_09979',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前ん父さん、寅次郎ファンだったな','Riku — your-Dad-Torajiro','Curious teen','sakura_teen'),
    mk('お前、ハーバード大学志望だな、桜','You — Harvard-aim Sakura','Curious','riku_teen'),
    mk('リク、お前、社会で源義経習ったろ','Riku — soc-Yoshitsune?','Curious','sakura_teen'),
    mk('お前、家族で薩摩旅行行ったろ?桜','You — fam-Satsuma? Sakura','Curious','riku_teen'),
    mk('リク、お前、アムステルダム留学夢だったな','Riku — Amst-dream','Curious','sakura_teen'),
    mk('お前、社会でカタルーニャ習ったろ?桜','You — soc-Catal? Sakura','Curious','riku_teen'),
    mk('リク、お前、家族で諏訪湖行ったろ','Riku — fam-Suwa?','Curious','sakura_teen'),
    mk('お前、福山雅治のドラマ全部観てたな、桜','You — Fukuyama-all Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09980',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが寅次郎の映画祭に連れて行って下さるそうよ','Sho — Dad-Torajiro-fest-take','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとハーバード大学の動画見たよ','Mom — me Dad-Harvard-vid','Eager child','sho_child'),
    mk('翔くん、お父さんが源義経の伝記をお買いになったわ','Sho — Dad-Yoshitsune-bio','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと薩摩芋を焼いたよ','Mom — me Dad-Satsuma-pot-bake','Eager child','sho_child'),
    mk('翔くん、お父さんがアムステルダム出張のお話して下さったわ','Sho — Dad-Amst-trip-told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとカタルーニャ料理食べたよ','Mom — me Dad-Catal-food','Eager child','sho_child'),
    mk('翔くん、お父さんが諏訪湖の絵葉書を見せて下さったわ','Sho — Dad-Suwa-postcard','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと福山雅治の曲聴いたよ','Mom — me Dad-Fukuyama-listen','Eager close','sho_child'),
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

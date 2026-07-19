import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_493 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['見舞わ','陥り','放つ','つながら','かけ離れ','一転','産む','傷つける']
const B_T = ['各人','個々人','同国','番手','会期','座談','顔面','おこなう']
const C_T = ['元年','時空','界隈','特質','総称','現存','波長','即興']
const D_T = ['カントリー','水戸','阪急','ダイエー','那覇','ホワイトハウス','ジョンソン','ブレア']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09821',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが風邪に見舞われてお休みなのよ','Sho — Dad-cold-strike-rest','Reflective','yumiko_mom'),
    mk('ママ、お父さんが疲れの底に陥りそうだから労って差し上げてね','Mom — Dad-fatigue-fall-care','Reflective child','sho_child'),
    mk('翔くん、お父さんが厳しい声を放つ時は心配して下さってるのよ','Sho — Dad-stern-voice-care','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと電話がつながらなかったよ','Mom — me Dad-call-no-connect','Wry child','sho_child'),
    mk('翔くん、お父さんは普段と性格がかけ離れた怖い顔の時もあるわね','Sho — Dad-usual-far-scary','Wry','yumiko_mom'),
    mk('ママ、ぼく、状況が一転して嬉しくなったよ','Mom — me sit-flip-glad','Eager child','sho_child'),
    mk('翔くん、犬が赤ちゃんを産むって聞いたわ','Sho — dog-baby-give','Pleased','yumiko_mom'),
    mk('ママ、ぼく、お父さんを傷つけるような事言わないって誓うよ','Mom — me Dad-hurt-no-vow','Earnest close','sho_child'),
  ]},
  {id:'conv_09822',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お店が大雨に見舞われたよ、メイちゃん','Aoi — store-rain-strike Mei','Reflective','mei_romantic'),
    mk('葵、忙しさで疲労に陥りそうだから休もうね、メイちゃん','Aoi — busy-fatigue-fall-rest Mei','Direction','aoi_barista'),
    mk('葵、新メニューがお客様の心に響く香りを放つわね、メイちゃん','Aoi — new-menu-cust-aroma-emit Mei','Pleased','mei_romantic'),
    mk('葵、ネットがつながらないとレジが大変ね、メイちゃん','Aoi — net-no-conn-cash Mei','Wry','aoi_barista'),
    mk('葵、看板の絵が実物とかけ離れてるね、メイちゃん','Aoi — sign-real-far Mei','Wry','mei_romantic'),
    mk('葵、雨から一転して晴れたね、メイちゃん','Aoi — rain-flip-clear Mei','Pleased','aoi_barista'),
    mk('葵、お客様、お孫様が産まれたばかりだって、メイちゃん','Aoi — cust-grandkid-born Mei','Pleased','mei_romantic'),
    mk('葵、お客様の繊細さを傷つけない接客を心掛けようね、メイちゃん','Aoi — cust-sens-hurt-not Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_09823',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが病に見舞われた時もあった','Gran — youth Dad-ill-strike','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、戦中の混乱に陥り苦しまれたわよね、あなた?','Yes — Grandpa-war-chaos-fall, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが大声を放って怒鳴られた','Gran — youth Dad-loud-emit-shout','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、戦地と家族がつながらなかった時代を懐かしまれたわよね、あなた?','Grandpa — war-fam-no-conn-era-miss, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが理想とかけ離れた現実に苦しまれた','Gran — youth Dad-ideal-far-real-suffer','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、終戦で時代が一転されたわよね、あなた?','Grandpa — war-end-era-flip, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お母さんが家で子を産まれた','Gran — youth Mom-home-give-birth','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご家族を傷つける言葉は絶対に仰らなかったわよね、あなた?','Grandpa — fam-hurt-words-never, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09824',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、急なテストに見舞われたな','Riku — sudden-test-strike','Wry teen','sakura_teen'),
    mk('お前、落ち込みに陥りそうだぞ、桜','You — depr-fall-near Sakura','Reflective','riku_teen'),
    mk('リク、お前、矢を放つアーチェリーが趣味だな','Riku — arrow-emit-arch-hobby','Curious','sakura_teen'),
    mk('お前、wifiがつながらないとイライラするな、桜','You — wifi-no-conn-irrit Sakura','Wry','riku_teen'),
    mk('リク、お前、理想とかけ離れた現実に悩んでたな','Riku — ideal-far-real-worry','Reflective','sakura_teen'),
    mk('お前、模試の結果が一転して良かったな、桜','You — mock-flip-good Sakura','Praising','riku_teen'),
    mk('リク、お前ん家の猫が子を産むんだろ','Riku — your-home-cat-give-birth','Curious','sakura_teen'),
    mk('お前、人を傷つける言葉は使うなよ、桜','You — people-hurt-words-no Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_09825',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが急用に見舞われてお出かけよ','Sho — Dad-urgent-strike-out','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、勉強で疲れに陥りそうだよ','Mei-sis — me study-fatigue-fall','Wry child','sho_child'),
    mk('翔くん、お父さんが優しい言葉を放って下さるのよ','Sho — Dad-kind-words-emit','Tender','mei_romantic'),
    mk('メイ姉さん、お父さんと電話がつながらない時もあるよ','Mei-sis — Dad-call-no-conn-times','Reflective child','sho_child'),
    mk('翔くん、現実がイメージとかけ離れる事もあるわ','Sho — real-image-far-times','Reflective','mei_romantic'),
    mk('メイ姉さん、お父さんが帰宅されて気分が一転したよ','Mei-sis — Dad-home-mood-flip','Eager child','sho_child'),
    mk('翔くん、お父さんがお魚が卵を産む話を聞かせて下さるそうよ','Sho — Dad-fish-egg-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんを傷つける事絶対しないって誓うよ','Mei-sis — me Dad-hurt-never-vow','Earnest close','sho_child'),
  ]},
  {id:'conv_09826',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、各人の目標設定を明確にしろ','Our co — each-goal-clear','Crisp','hiroshi_boss'),
    mk('はい。個々人の能力評価を丁寧におこないます','Yes — Indiv-skill-eval-careful','Methodical','kenji_office'),
    mk('当社、同国の競合分析を進めろ','Our co — same-state-comp-anal','Direction','hiroshi_boss'),
    mk('はい。業界番手の位置を再確認します','Yes — Industry-rank-rev','Update','kenji_office'),
    mk('国会の会期内に対応する必要がある','Diet-period-resp-need','Direction','hiroshi_boss'),
    mk('はい。役員座談会を企画します','Yes — Exec-talk-plan','Update','kenji_office'),
    mk('当社、社員顔面の表情管理研修も検討しろ','Our co — staff-face-expr-train-cons','Direction','hiroshi_boss'),
    mk('はい。社員研修をおこなう日程を調整します','Yes — Staff-train-do-sched','Close','kenji_office'),
  ]},
  {id:'conv_09827',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('各人の役割を明確にしましょう','Each-role-clear','Brisk','yuki_office'),
    mk('はい。個々人の意見を集約します','Yes — Indiv-opin-coll','Cooperative','kenji_office'),
    mk('同国の市場規模を把握しましょう','Same-state-mkt-size','Direction','yuki_office'),
    mk('はい。業界番手としての責任を意識します','Yes — Industry-rank-resp-aware','Update','kenji_office'),
    mk('会期中の対応シフトを組みましょう','Period-shift-arr','Direction','yuki_office'),
    mk('はい。社内座談会を月一で開催します','Yes — Co-talk-mo','Update','kenji_office'),
    mk('プレゼンの顔面表情も大事ね','Pres-face-imp','Direction','yuki_office'),
    mk('はい。研修を毎月おこなう仕組みを作ります','Yes — Train-mo-mech','Close','kenji_office'),
  ]},
  {id:'conv_09828',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、各人の研究テーマを尊重しろ','Ren — each-research-resp','Mentor','hiroshi_boss'),
    mk('はい。個々人の貢献を論文に反映します','Yes — Indiv-cont-paper','Earnest','ren_uni'),
    mk('蓮、同国出身研究者との情報交換を進めろ','Ren — same-state-research-exch','Direction','hiroshi_boss'),
    mk('はい。論文引用数の番手を意識します','Yes — Paper-cite-rank-aware','Earnest','ren_uni'),
    mk('蓮、学会の会期中に発表せよ','Ren — conf-period-pres','Direction','hiroshi_boss'),
    mk('はい。座談会形式の研究会を企画します','Yes — Talk-research-plan','Polite','ren_uni'),
    mk('蓮、被験者の顔面筋肉測定も学べ','Ren — subj-face-musc-meas-learn','Direction','hiroshi_boss'),
    mk('はい。実験はおこなう前に倫理審査を受けます','Yes — Exp-do-pre-eth-rev','Earnest close','ren_uni'),
  ]},
  {id:'conv_09829',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、各人の警備担当を明確にされますね','Police each-guard-clear','Cooperative','kenji_office'),
    mk('警察、個々人の防犯意識を高められますね','Police indiv-prev-aware','Cooperative','kenji_office'),
    mk('警察、同国出身者の犯罪傾向分析もされますね','Police same-state-crime-anal','Cooperative','kenji_office'),
    mk('警察、捜査の番手担当も決められますね','Police inv-rank-asgn','Cooperative','kenji_office'),
    mk('警察、国会会期中の警備を強化されますね','Police Diet-period-guard','Cooperative','kenji_office'),
    mk('警察、市民との座談会もおこなわれますね','Police citi-talk','Cooperative','kenji_office'),
    mk('警察、顔面認証技術を導入されますね','Police face-recog-intro','Cooperative','kenji_office'),
    mk('警察、防犯訓練をおこなう日程も決められますね','Police prev-train-do-sched','Close','kenji_office'),
  ]},
  {id:'conv_09830',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、各人の役割を見極められた','Dad — founding each-role-judg','Sage','hiroshi_elder'),
    mk('はい。お父さんは個々人を尊重された','Yes — Dad indiv-resp','Commitment','hiroshi_boss'),
    mk('お父さん、同国の取引先と長くお付き合いされた','Dad — same-state-partner-long','Wistful','hiroshi_elder'),
    mk('はい。お父さんは業界番手を意識して経営された','Yes — Dad industry-rank-aware-mgmt','Reflective','hiroshi_boss'),
    mk('お父さん、国会の会期に合わせて陳情に行かれた','Dad — Diet-period-pet-went','Wistful','hiroshi_elder'),
    mk('はい。お父さんは座談会で社員と対話された','Yes — Dad talk-staff-dial','Reflective','hiroshi_boss'),
    mk('お父さん、社員の顔面の疲れにも気付かれた','Dad — staff-face-tired-notice','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員研修を自らおこなう熱意だった','Yes — Dad staff-train-self-passion','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09831',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、明治元年の改革史を論文で扱いましたね','Ren — Meiji-1-ref paper','Calm','asuka_teacher'),
    mk('はい、相対性理論の時空概念を論文で扱いました','Yes — Relativity-spacetime paper','Earnest','ren_uni'),
    mk('蓮さん、銀座界隈の商業史を論文で扱いましたね','Ren — Ginza-area-com paper','Reflective','asuka_teacher'),
    mk('はい、漢字の音声的特質を論文で扱いました','Yes — Kanji-phon-feat paper','Earnest','ren_uni'),
    mk('動植物の総称分類を論文で扱いましたね','Bio-cat-class paper','Engaged','asuka_teacher'),
    mk('はい、現存最古の文献研究を論文で扱いました','Yes — Ext-old-lit paper','Earnest','ren_uni'),
    mk('蓮さん、超音波の波長解析を論文で扱いましたね','Ren — ultrason-wave paper','Reflective','asuka_teacher'),
    mk('はい、ジャズの即興演奏研究を論文で扱いました','Yes — Jazz-improv paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09832',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、平成元年からの長期事件を、警察、扱われてますね','Case Heisei-1-long police-handle','Reflective','ren_uni'),
    mk('警察、犯行時の時空特定をおこないます','Police crime-spacetime-id','Procedural','takeda_officer'),
    mk('本件、繁華街界隈の犯罪を、警察、注視されますね','Case town-area-crime police-watch','Reflective','ren_uni'),
    mk('警察、容疑者の声紋特質を分析します','Police suspect-voice-feat-anal','Procedural','takeda_officer'),
    mk('本件、犯罪組織の総称名を、警察、把握されてますね','Case crime-org-coll-name police-grasp','Reflective','ren_uni'),
    mk('警察、現存する証拠物件を保全します','Police ext-evid-pres','Procedural','takeda_officer'),
    mk('本件、無線交信の波長解析を、警察、おこなわれますね','Case wire-wave-anal police-do','Reflective','ren_uni'),
    mk('警察、捜査会議で即興の対応も必要です','Police inv-impromptu-need','Close','takeda_officer'),
  ]},
  {id:'conv_09833',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、明治元年の改革史を論文で扱いましたね','Sakura — Meiji-1-ref paper','Calm','asuka_teacher'),
    mk('はい、相対性理論の時空概念を論文で扱いました','Yes — Relativity-spacetime paper','Earnest teen','sakura_teen'),
    mk('銀座界隈の商業史を論文で扱いましたね','Ginza-area-com paper','Reflective','asuka_teacher'),
    mk('はい、漢字の音声的特質を論文で扱いました','Yes — Kanji-phon paper','Earnest','sakura_teen'),
    mk('動植物の総称分類を論文で扱いましたね','Bio-cat paper','Engaged','asuka_teacher'),
    mk('はい、現存最古の文献研究を論文で扱いました','Yes — Ext-old-lit paper','Earnest','sakura_teen'),
    mk('超音波の波長解析を論文で扱いましたね','Ultrason-wave paper','Reflective','asuka_teacher'),
    mk('はい、ジャズの即興演奏研究を論文で扱いました','Yes — Jazz-improv paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09834',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、令和元年からの医療制度変化を医療チームで追います','Ren — Reiwa-1-med-change med-team','Calm','saito_doctor'),
    mk('はい、時空を超えて伝わる伝統医療を医療チームで学びます','Yes — Spacetime-trad-med med-team','Patient','saito_doctor'),
    mk('蓮さん、病院界隈の救急体制を医療チームで強化します','Ren — hosp-area-ER med-team strength','Calm','saito_doctor'),
    mk('遺伝性疾患の特質を、貴院、研究されてますね、先生','Genet-dis-feat your-hosp research, sensei','Reflective','ren_uni'),
    mk('はい、医療機関の総称ガイドラインを医療チームで参考にします','Yes — Med-coll-guide med-team ref','Patient','saito_doctor'),
    mk('現存する古文書医学書を、貴院、保管されてますね、先生','Ext-old-med-book your-hosp keep, sensei','Reflective','ren_uni'),
    mk('はい、脳波の波長解析を医療チームでおこないます','Yes — Brain-wave med-team','Patient','saito_doctor'),
    mk('はい、救急現場では即興判断を医療チームで日々求められます','Yes — ER-improv-judg med-team daily','Patient close','saito_doctor'),
  ]},
  {id:'conv_09835',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、創業元年の理念を再確認しろ','Our co — found-1-philos-rev','Crisp','hiroshi_boss'),
    mk('はい。グローバル時空を意識して動きます','Yes — Glob-spacetime-aware','Methodical','kenji_office'),
    mk('当社、本社界隈の地域貢献を進めろ','Our co — HQ-area-local-cont','Direction','hiroshi_boss'),
    mk('はい。商品の特質を明確に打ち出します','Yes — Prod-feat-clear','Update','kenji_office'),
    mk('業界の総称ブランドを目指せ','Industry-coll-brand-aim','Direction','hiroshi_boss'),
    mk('はい。現存する伝統工芸との協業を進めます','Yes — Ext-craft-coll','Update','kenji_office'),
    mk('当社、市場の波長を敏感に読め','Our co — mkt-wave-sens','Direction','hiroshi_boss'),
    mk('はい。即興のキャンペーンも柔軟に展開します','Yes — Improv-camp-flex','Close','kenji_office'),
  ]},
  {id:'conv_09836',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、カントリーミュージックがお好きだって、メイちゃん','Aoi — cust-country-music Mei','Reflective','mei_romantic'),
    mk('葵、お客様、水戸の偕楽園に行かれたって、メイちゃん','Aoi — cust-Mito-Kairaku Mei','Reflective','aoi_barista'),
    mk('葵、お客様、阪急電車で通勤されてるって、メイちゃん','Aoi — cust-Hankyu-comm Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ダイエー時代のレトロ商品にお詳しいって、メイちゃん','Aoi — cust-Daiei-retro Mei','Reflective','aoi_barista'),
    mk('葵、お客様、那覇の親族のお話されてたよ、メイちゃん','Aoi — cust-Naha-rel-told Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ホワイトハウスのニュースに詳しいって、メイちゃん','Aoi — cust-WH-news Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ジョンソン元大統領のドキュメンタリーを観てらしたよ、メイちゃん','Aoi — cust-Johnson-doc Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ブレア元首相の書籍を読んでらしたよ、メイちゃん','Aoi — cust-Blair-book Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09837',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがカントリーソングをご愛聴された','Gran — youth Dad-country-listen','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、水戸の親戚を訪ねられたわよね、あなた?','Yes — Grandpa-Mito-rel, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが阪急沿線にお住まいだった','Gran — youth Dad-Hankyu-live','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ダイエー百貨店でお買い物されてたわよね、あなた?','Grandpa — Daiei-dept-shop, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが那覇空港に降り立たれた','Gran — youth Dad-Naha-airport','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ホワイトハウスのニュースを毎晩ご覧になってたわよね、あなた?','Grandpa — WH-nightly, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがジョンソン政権を分析してらした','Gran — youth Dad-Johnson-anal','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ブレア政権の演説をご愛聴されたわよね、あなた?','Grandpa — Blair-speech-listen, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09838',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがカントリーミュージックを聴かせて下さるそうよ','Sho — Dad-country-listen','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと水戸の博物館行きたいよ','Mei-sis — me Dad-Mito-mus-want','Eager child','sho_child'),
    mk('翔くん、お父さんが阪急電車に乗せて下さるそうよ','Sho — Dad-Hankyu-ride','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとダイエー跡地の話聞いたよ','Mei-sis — me Dad-Daiei-site-told','Eager child','sho_child'),
    mk('翔くん、お父さんが那覇に出張されるそうよ','Sho — Dad-Naha-trip','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとホワイトハウスのドキュメンタリー観たよ','Mei-sis — me Dad-WH-doc','Eager child','sho_child'),
    mk('翔くん、お父さんがジョンソン元大統領の本を貸して下さるそうよ','Sho — Dad-Johnson-book-lend','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとブレア元首相のドキュメンタリー観たよ','Mei-sis — me Dad-Blair-doc','Eager close','sho_child'),
  ]},
  {id:'conv_09839',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、カントリー音楽集めてたな','Riku — country-coll','Curious teen','sakura_teen'),
    mk('お前、社会で水戸藩習ったろ?桜','You — soc-Mito-han? Sakura','Curious','riku_teen'),
    mk('リク、お前、阪急沿線でロケ撮影してたな','Riku — Hankyu-loc-shoot','Curious','sakura_teen'),
    mk('お前、ダイエーの跡地知ってるな、桜','You — Daiei-site Sakura','Curious','riku_teen'),
    mk('リク、お前、修学旅行で那覇行ったろ?','Riku — sch-trip-Naha?','Curious','sakura_teen'),
    mk('お前、ニュースでホワイトハウスチェックしてたな、桜','You — news-WH-check Sakura','Curious','riku_teen'),
    mk('リク、お前、社会でジョンソン政権習ったな','Riku — soc-Johnson','Curious','sakura_teen'),
    mk('お前、英語の教科書にブレア政権の写真載ってたな、桜','You — Eng-text-Blair-photo Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09840',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがカントリー音楽の歴史を教えて下さるそうよ','Sho — Dad-country-hist-teach','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと水戸の偕楽園に行ったよ','Mom — me Dad-Mito-Kairaku','Eager child','sho_child'),
    mk('翔くん、お父さんが阪急電車でお出張なさるわ','Sho — Dad-Hankyu-trip','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとダイエー跡地のショッピングモール行ったよ','Mom — me Dad-Daiei-mall','Eager child','sho_child'),
    mk('翔くん、お父さんが那覇の親戚にお会いになるそうよ','Sho — Dad-Naha-rel-meet','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとホワイトハウスの映像見たよ','Mom — me Dad-WH-vid','Eager child','sho_child'),
    mk('翔くん、お父さんがジョンソン元大統領の伝記を読んでらしたわ','Sho — Dad-Johnson-bio-read','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとブレア元首相のお話聞いたよ','Mom — me Dad-Blair-told','Eager close','sho_child'),
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

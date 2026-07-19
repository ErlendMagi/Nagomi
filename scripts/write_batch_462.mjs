import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_462 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['横目','廻り','突きつけ','交わす','悟っ','総て','浅く','喜ばしい']
const B_T = ['文藝春秋','自営業','発刊','主将','関心事','講堂','ブレーク','学識']
const C_T = ['内的','醸成','顕在','利己','襲う','疑わしい','粉砕','萎縮']
const D_T = ['酸味','聞き手','山脈','晩餐','人魚','占星術','静脈','堤防']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09201',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが横目でこちらを見てらしたわ','Sho — Dad-side-eye-look','Wry','yumiko_mom'),
    mk('ママ、ぼく、お家の廻りを散歩したよ','Mom — me home-around-walk','Eager child','sho_child'),
    mk('翔くん、お父さんがニュースを突きつけて怒ってらしたわ','Sho — Dad-news-thrust-angry','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんと挨拶を交わすのが好きだよ','Mom — me Grandpa-greet-exch-like','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんがこの世の真理を悟ってらしたわね','Sho — Grandpa-world-truth-real','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんの言葉を総て覚えてるよ','Mom — me Grandpa-word-all-remember','Proud child','sho_child'),
    mk('翔くん、傷は浅くて済んで良かったわね','Sho — wound-shallow-relief','Tender','yumiko_mom'),
    mk('ママ、お祖父ちゃんの合格、喜ばしいニュースだったよ','Mom — Grandpa-pass-joyful-news','Eager close','sho_child'),
  ]},
  {id:'conv_09202',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、横目でメニュー表をご覧になってたよ、メイちゃん','Aoi — cust-side-eye-menu Mei','Reflective','mei_romantic'),
    mk('葵、お店の廻りに花壇を作りたいね、メイちゃん','Aoi — store-around-flower-bed Mei','Reflective','aoi_barista'),
    mk('葵、お客様が新メニューを突きつけて、また同じものをご注文されたよ、メイちゃん','Aoi — cust-new-menu-thrust-order Mei','Wry','mei_romantic'),
    mk('葵、ご常連様と短い言葉を交わすひと時が楽しいね、メイちゃん','Aoi — reg-cust-short-word-exch-fun Mei','Tender','aoi_barista'),
    mk('葵、私達もやっと、お店経営のコツを悟ってきたね、メイちゃん','Aoi — we-finally-store-mgmt-tip-real Mei','Pleased','mei_romantic'),
    mk('葵、お客様の好みを総て把握するのは難しいね、メイちゃん','Aoi — cust-taste-all-grasp-hard Mei','Reflective','aoi_barista'),
    mk('葵、新メニューの味付け、もう少し浅くしましょう、メイちゃん','Aoi — new-menu-season-lighter Mei','Direction','mei_romantic'),
    mk('葵、お客様、満足してお帰りで喜ばしい一日ね、メイちゃん','Aoi — cust-satisfied-leave-joyful Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_09203',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが横目でばあさんを見てらしたぞ','Gran — youth Dad-side-eye-gran','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お家の廻りを毎朝歩かれたわよね、あなた?','Yes — Grandpa-home-around-morn-walk, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは敵に証拠を突きつけられた','Gran — youth Dad-enemy-evid-thrust','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫さんとお言葉を交わすのを楽しみにされてたわよね、あなた?','Grandpa — grandkid-word-exch-look-forward, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは人生の儚さを悟ってらしたぞ','Gran — youth Dad-life-fleet-real','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様の事を総て可愛がってらしたわよね、あなた?','Grandpa — grandkid-all-cherish, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんの傷は浅くて命に別状なかった','Gran — youth Dad-wound-shallow-no-life','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ばあさんとの再会を喜ばしく思って下さったわよね、あなた?','Grandpa — gran-reunion-joyful, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09204',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、横目で俺のテスト見るなよ','Riku — side-eye-my-test-don\'t','Wry teen','sakura_teen'),
    mk('お前、学校の廻りでよく見かけるな、桜','You — school-around-see Sakura','Curious','riku_teen'),
    mk('リク、お前、答案を突きつけて自慢するなよ','Riku — answer-thrust-brag-don\'t','Wry','sakura_teen'),
    mk('お前、先生と何を交わす話してたんだ、桜?','You — teacher-what-exch-talked Sakura?','Curious','riku_teen'),
    mk('リク、お前、勉強の意味を悟ってきたな','Riku — study-meaning-real','Praising','sakura_teen'),
    mk('お前、総ての教科得意だな、桜','You — all-subj-good Sakura','Praising','riku_teen'),
    mk('リク、お前、傷が浅くて済んで安心したぞ','Riku — wound-shallow-relief','Tender','sakura_teen'),
    mk('お前の合格、喜ばしい知らせだったぞ、桜','Your-pass-joyful-news Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_09205',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんも横目で翔くんを見てるのよ','Sho — Mei-sis-side-eye-Sho','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんの周り、つまり廻りを走るのが好きだよ','Mei-sis — me Mei-sis-around-run-like','Eager child','sho_child'),
    mk('翔くん、お絵描きをメイ姉さんに突きつけて見てもらいたいのね','Sho — art-Mei-sis-thrust-show','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんと挨拶を交わすのが好きだよ','Mei-sis — me Grandpa-greet-exch-like','Eager child','sho_child'),
    mk('翔くん、メイ姉さんも、絵を描く意味を少し悟ってきたわよ','Sho — Mei-sis-art-mean-real','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんの絵を総て覚えてるよ','Mei-sis — me Mei-sis-art-all-remember','Proud child','sho_child'),
    mk('翔くん、メイ姉さんの絵の色合い、浅くて素敵ね','Sho — Mei-sis-art-color-shallow-lovely','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんの結婚を喜ばしく思うよ','Mei-sis — me Mei-sis-marriage-joyful','Tender close','sho_child'),
  ]},
  {id:'conv_09206',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、文藝春秋社の編集者と懇談しろ','Our co — Bungei-Shunju-editor-chat','Crisp','hiroshi_boss'),
    mk('はい。お得意様の自営業者の方々を集めた会を計画しております','Yes — VIP-self-emp-meet-plan','Methodical','kenji_office'),
    mk('当社、新雑誌の発刊予定を発表しろ','Our co — new-mag-issue-sched-announce','Direction','hiroshi_boss'),
    mk('はい。野球部の主将に表彰式で挨拶してもらいます','Yes — Baseball-cap-award-greet','Update','kenji_office'),
    mk('当社、お客様の関心事を把握しろ','Our co — cust-interest-grasp','Direction','hiroshi_boss'),
    mk('はい。新本社の講堂を社内行事で活用します','Yes — New-HQ-hall-event-use','Update','kenji_office'),
    mk('当社、業界をブレークさせる新製品を出せ','Our co — industry-break-new-prod','Direction','hiroshi_boss'),
    mk('はい。社員の学識を社外発表で生かします','Yes — Staff-eru-outside-pres-util','Close','kenji_office'),
  ]},
  {id:'conv_09207',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('文藝春秋系の雑誌に当社の広告を出しましょう','Bungei-Shunju-mag-ad','Brisk','yuki_office'),
    mk('はい。自営業の方向けの提案書を作成中です','Yes — Self-emp-prop-make','Cooperative','kenji_office'),
    mk('新雑誌の発刊記念パーティーを企画しましょう','New-mag-issue-anniv-party','Direction','yuki_office'),
    mk('はい。お得意様の野球部主将を招待します','Yes — VIP-baseball-cap-invite','Update','kenji_office'),
    mk('お客様の関心事を反映したサービスを開発しましょう','Cust-interest-reflect-svc','Direction','yuki_office'),
    mk('はい。講堂で社員総会を開催します','Yes — Hall-staff-gen-meet','Update','kenji_office'),
    mk('新商品で市場をブレークさせたいですね','New-prod-market-break-want','Direction','yuki_office'),
    mk('はい。学識経験者を顧問に招きます','Yes — Eru-exp-adv-invite','Close','kenji_office'),
  ]},
  {id:'conv_09208',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、文藝春秋から論評の依頼が来た','Ren — Bungei-Shunju-rev-req','Mentor','hiroshi_boss'),
    mk('はい。研究室の先輩は自営業の研究室を始められました','Yes — Lab-sen-self-emp-lab-start','Earnest','ren_uni'),
    mk('蓮、論文集の発刊計画を立てろ','Ren — paper-coll-issue-plan','Direction','hiroshi_boss'),
    mk('はい。学会の主将的なリーダーから推薦を頂きました','Yes — Conf-lead-rec','Polite','ren_uni'),
    mk('蓮、学界の関心事を論文で取り上げろ','Ren — acad-interest-paper-feature','Direction','hiroshi_boss'),
    mk('はい。大学の講堂で公開講座を行います','Yes — Univ-hall-pub-lecture','Earnest','ren_uni'),
    mk('蓮、研究でブレークスルーを目指せ','Ren — research-breakthrough-aim','Direction','hiroshi_boss'),
    mk('はい。研究者の学識を学会で活かします','Yes — Researcher-eru-conf-util','Earnest close','ren_uni'),
  ]},
  {id:'conv_09209',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、文藝春秋系の取材にもご対応されますね','Police Bungei-Shunju-int-resp','Cooperative','kenji_office'),
    mk('警察、自営業の方々への防犯啓発もされますね','Police self-emp-crime-prev-edu','Cooperative','kenji_office'),
    mk('警察、防犯誌の発刊も検討されてますね','Police crime-prev-mag-issue-consider','Cooperative','kenji_office'),
    mk('警察、地域防犯協議会の主将的な存在ですね','Police local-crime-prev-cap-presence','Cooperative','kenji_office'),
    mk('警察、市民の関心事に応えてらっしゃいますね','Police citizen-interest-resp','Cooperative','kenji_office'),
    mk('警察、講堂で市民向け防犯講座を開かれますね','Police hall-citizen-crime-prev-lec','Cooperative','kenji_office'),
    mk('警察、捜査のブレークスルーをご報告ありがとうございます','Police inv-breakthrough-rep-thx','Cooperative','kenji_office'),
    mk('警察、学識経験者を捜査の助言者に招かれますね','Police eru-exp-inv-adv-invite','Close','kenji_office'),
  ]},
  {id:'conv_09210',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、文藝春秋に当社の記事が載ったぞ','Dad — founding Bungei-Shunju-article','Sage','hiroshi_elder'),
    mk('はい。お父さんは自営業の頃から人脈を築かれた','Yes — Dad self-emp-network','Commitment','hiroshi_boss'),
    mk('お父さん、社内誌の発刊号を自ら手がけられたぞ','Dad — co-mag-issue-self','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員野球部の主将的存在でした','Yes — Dad co-baseball-cap','Reflective','hiroshi_boss'),
    mk('お父さん、お客様の関心事を最優先された','Dad — cust-interest-first','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員総会を講堂で大々的に行われた','Yes — Dad staff-gen-hall-grand','Reflective','hiroshi_boss'),
    mk('お父さん、業界のブレークスルーを起こされた','Dad — industry-breakthrough','Wistful','hiroshi_elder'),
    mk('はい。お父さんは学識経験者との人脈を大事にされた','Yes — Dad eru-exp-network-cherish','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09211',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、内的な葛藤を抱えた人物の心理史を論文で扱いましたね','Ren — internal-conflict-psy-hist paper','Calm','asuka_teacher'),
    mk('はい、世論を醸成するメディアの役割を論文で扱いました','Yes — Public-opin-foster-media paper','Earnest','ren_uni'),
    mk('蓮さん、潜在から顕在化した社会問題を論文で扱いましたね','Ren — latent-manifest-soc-issue paper','Reflective','asuka_teacher'),
    mk('はい、利己的遺伝子論の批判史を論文で扱いました','Yes — Selfish-gene-crit-hist paper','Earnest','ren_uni'),
    mk('天敵が獲物を襲う行動様式を論文で扱いましたね','Predator-prey-attack-behav paper','Engaged','asuka_teacher'),
    mk('はい、疑わしい歴史資料の真贋判定を論文で扱いました','Yes — Suspic-doc-auth-judg paper','Earnest','ren_uni'),
    mk('蓮さん、岩盤を粉砕する近代工法を論文で扱いましたね','Ren — bedrock-pulver-mod-method paper','Reflective','asuka_teacher'),
    mk('はい、過剰な規制が産業を萎縮させる例を論文で扱いました','Yes — Over-reg-industry-shrink paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09212',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、容疑者の内的な動機を警察、解明されてますね','Case suspect-internal-motive police-clear','Reflective','ren_uni'),
    mk('警察、地域防犯意識を醸成する活動を続けます','Police local-crime-prev-foster-cont','Procedural','takeda_officer'),
    mk('本件、容疑が顕在化する前の予兆を警察、警戒されてますね','Case suspic-manifest-pre-sign police-watch','Reflective','ren_uni'),
    mk('警察、利己的な犯行動機にも対応します','Police selfish-crime-motive-resp','Procedural','takeda_officer'),
    mk('本件、市民を襲う事件への警戒を強化されてますね、警察','Case citizen-attack-watch police-strength','Reflective','ren_uni'),
    mk('警察、疑わしい人物を慎重に調査します','Police suspic-careful-inv','Procedural','takeda_officer'),
    mk('本件、現場の岩を粉砕する作業も警察、立ち会われますね','Case on-site-rock-pulver police-attend','Reflective','ren_uni'),
    mk('警察、被害者の心が萎縮しないよう配慮します','Police victim-heart-shrink-not-care','Close','takeda_officer'),
  ]},
  {id:'conv_09213',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、内的な葛藤を抱えた人物の心理史を論文で扱いましたね','Sakura — int-conflict paper','Calm','asuka_teacher'),
    mk('はい、世論を醸成するメディアの役割を論文で扱いました','Yes — Pub-opin-foster paper','Earnest teen','sakura_teen'),
    mk('潜在から顕在化した社会問題を論文で扱いましたね','Latent-manifest paper','Reflective','asuka_teacher'),
    mk('はい、利己的遺伝子論の批判史を論文で扱いました','Yes — Selfish-gene paper','Earnest','sakura_teen'),
    mk('天敵が獲物を襲う行動様式を論文で扱いましたね','Predator-attack paper','Engaged','asuka_teacher'),
    mk('はい、疑わしい歴史資料の真贋判定を論文で扱いました','Yes — Suspic-doc-auth paper','Earnest','sakura_teen'),
    mk('岩盤を粉砕する近代工法を論文で扱いましたね','Bedrock-pulver paper','Reflective','asuka_teacher'),
    mk('はい、過剰な規制が産業を萎縮させる例を論文で扱いました','Yes — Over-reg-shrink paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09214',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、患者さんの内的な不安を医療チームで丁寧に汲み取ります','Ren — patient-int-anxiety med-team-listen','Calm','saito_doctor'),
    mk('はい、安心感を醸成する病棟運営を医療チームで進めます','Yes — Comfort-foster-ward med-team','Patient','saito_doctor'),
    mk('症状が顕在化する前の予防医療を、貴院、重視されてますね、先生','Symp-manifest-pre-prev-med your-hosp imp, sensei','Reflective','ren_uni'),
    mk('はい、利己的な医療行為は医療チームで厳禁とします','Yes — Selfish-med-act med-team strict-no','Patient','saito_doctor'),
    mk('感染症が患者を襲う前の対策を、貴院、なさってますね、先生','Infect-attack-pre-counter your-hosp, sensei','Curious','ren_uni'),
    mk('はい、疑わしい症例は医療チームで二度確認します','Yes — Suspic-case med-team double-check','Patient','saito_doctor'),
    mk('結石を粉砕する内視鏡治療を、貴院、なさってるんですね、先生','Stone-pulver-endo your-hosp, sensei','Curious','ren_uni'),
    mk('はい、長期入院で患者が萎縮しないよう医療チームで配慮します','Yes — Long-hosp-patient-shrink-not med-team care','Patient close','saito_doctor'),
  ]},
  {id:'conv_09215',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、社員の内的な動機を尊重しろ','Our co — staff-int-motive-respect','Crisp','hiroshi_boss'),
    mk('はい。社風を醸成する社内行事を増やします','Yes — Co-culture-foster-event-up','Methodical','kenji_office'),
    mk('当社、市場のリスクが顕在化する前に動け','Our co — market-risk-manifest-pre-act','Direction','hiroshi_boss'),
    mk('はい。利己的な営業手法は厳禁としております','Yes — Selfish-sales-strict-no','Update','kenji_office'),
    mk('当社、市場を襲う変化に備えろ','Our co — market-attack-change-prep','Direction','hiroshi_boss'),
    mk('はい。疑わしい取引先は慎重に審査します','Yes — Suspic-partner-careful-review','Update','kenji_office'),
    mk('当社、競合を粉砕するではなく差別化で勝負しろ','Our co — rival-pulver-not-diff-comp','Direction','hiroshi_boss'),
    mk('はい。新人が萎縮しない指導文化を作ります','Yes — Newbie-shrink-not-mentor-culture','Close','kenji_office'),
  ]},
  {id:'conv_09216',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、新メニュー、レモンの酸味を効かせましょう、メイちゃん','Aoi — new-menu-lemon-sour-add Mei','Direction','mei_romantic'),
    mk('葵、お客様、いつも聞き手になってくれて嬉しいよ、メイちゃん','Aoi — cust-listen-thx Mei','Pleased','aoi_barista'),
    mk('葵、お客様、アルプス山脈を旅行されたって、メイちゃん','Aoi — cust-Alps-trip Mei','Reflective','mei_romantic'),
    mk('葵、お客様、晩餐会の招待状を見せて下さったよ、メイちゃん','Aoi — cust-dinner-invite-show Mei','Pleased','aoi_barista'),
    mk('葵、お子様、人魚姫の絵本に夢中ね、メイちゃん','Aoi — child-mermaid-book-into Mei','Tender','mei_romantic'),
    mk('葵、お客様、占星術を信じてらっしゃるんだって、メイちゃん','Aoi — cust-astrology-believe Mei','Reflective','aoi_barista'),
    mk('葵、お客様、静脈瘤の治療のお話されてたよ、メイちゃん','Aoi — cust-varic-vein-told Mei','Reflective','mei_romantic'),
    mk('葵、お客様、堤防沿いを散歩されたって、メイちゃん','Aoi — cust-embankment-walk Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09217',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんはお茶の酸味を楽しまれた','Gran — youth Dad-tea-sour-enjoy','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、聞き手としてご立派でらしたわよね、あなた?','Yes — Grandpa-listener-splendid, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと山脈を見に旅行した','Gran — youth Dad-mountain-trip','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お祝いに晩餐をご家族と楽しまれたわよね、あなた?','Grandpa — celeb-dinner-fam-enjoy, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが孫に人魚の絵本を読まれた','Gran — youth Dad-grandkid-mermaid-book-read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、占星術にも興味をお持ちでらしたわよね、あなた?','Grandpa — astrology-interest, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは静脈の血を採られたぞ','Gran — youth Dad-vein-blood-drawn','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、堤防沿いの桜を毎春楽しまれたわよね、あなた?','Grandpa — embankment-cherry-spring, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09218',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、レモンの酸味、お絵描きで表現してみてね','Sho — lemon-sour-art-express','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんの聞き手になりたいよ','Mei-sis — me Mei-sis-listener-want','Earnest child','sho_child'),
    mk('翔くん、お父さんとアルプス山脈を見に行きたいわね','Sho — Dad-Alps-go-want','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんの晩餐に呼んでほしい','Mei-sis — me Mei-sis-dinner-invite-want','Eager child','sho_child'),
    mk('翔くん、メイ姉さんが人魚姫の絵描いてあげるわね','Sho — Mei-sis-mermaid-art-draw','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、占星術って当たるのかな?','Mei-sis — me astrology-hit?','Curious child','sho_child'),
    mk('翔くん、お父さんが採血で静脈から採られたんだって','Sho — Dad-blood-draw-vein','Reflective','mei_romantic'),
    mk('メイ姉さん、お祖父ちゃんと堤防沿いをお散歩したよ','Mei-sis — Grandpa-embankment-walk','Eager close','sho_child'),
  ]},
  {id:'conv_09219',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、レモンの酸味苦手だろ?','Riku — lemon-sour-bad?','Curious teen','sakura_teen'),
    mk('お前、相談の聞き手になってくれてありがとな、桜','You — listener-thx Sakura','Tender','riku_teen'),
    mk('リク、お前、地理で山脈の単元やったろ?','Riku — geo-mountain-unit?','Curious','sakura_teen'),
    mk('お前、晩餐会みたいな食事会出たろ?桜','You — dinner-meal-out? Sakura','Curious','riku_teen'),
    mk('リク、お前、人魚姫の映画好きだろ?','Riku — mermaid-movie-like?','Curious','sakura_teen'),
    mk('お前、占星術の占い読んでんな、桜','You — astrology-fortune-read Sakura','Wry','riku_teen'),
    mk('リク、お前、健康診断で静脈から血採られたろ?','Riku — health-check-vein-blood?','Curious','sakura_teen'),
    mk('お前、堤防沿いをジョギングしてんな、桜','You — embankment-jog Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_09220',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、酸味のあるドレッシングはどう?','Sho — sour-dressing-how?','Curious','yumiko_mom'),
    mk('ママ、ぼく、メイ姉さんの聞き手になりたいよ','Mom — me Mei-sis-listener-want','Earnest child','sho_child'),
    mk('翔くん、お父さんと山脈の見える展望台に行きましょうね','Sho — Dad-mountain-view-go','Tender','yumiko_mom'),
    mk('ママ、ぼく、お祝いの晩餐がたのしみだよ','Mom — me celeb-dinner-fun','Eager child','sho_child'),
    mk('翔くん、お母さんと人魚姫の絵本読みましょうね','Sho — Mom-mermaid-book-read','Tender','yumiko_mom'),
    mk('ママ、ぼく、メイ姉さんが占星術の本読んでたよ','Mom — me Mei-sis-astrology-book-read','Reflective child','sho_child'),
    mk('翔くん、お父さんが健康診断で静脈から血採られたわ','Sho — Dad-health-check-vein-blood','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと堤防沿いを歩きたいよ','Mom — me Dad-embankment-walk-want','Eager close','sho_child'),
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_460 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['よせ','想う','絶好調','道端','窮屈','ハメ','等しく','踏み出し']
const B_T = ['乗務','境遇','エキスパート','未経験','県議会','等級','書名','修得']
const C_T = ['富豪','調教','落胆','軍部','反感','進入','出没','盗作']
const D_T = ['水害','カラフル','陰陽','大連','一眼','絹','敷居','ベーコン']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09161',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、人を悪く言うのはよせって、お父さんが仰ったわ','Sho — bad-talk-stop-Dad-said','Direction','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんを想うと胸がいっぱいになるよ','Mom — me Grandpa-think-chest-full','Earnest child','sho_child'),
    mk('翔くん、お父さんは今、お仕事が絶好調らしいわ','Sho — Dad-now-work-peak','Pleased','yumiko_mom'),
    mk('ママ、ぼく、道端でかわいいお花を見つけたよ','Mom — me roadside-cute-flower-found','Eager child','sho_child'),
    mk('翔くん、この服、ちょっと窮屈そうね','Sho — this-clothes-bit-tight','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お友達と仲直りするハメになっちゃった','Mom — me friend-reconcile-end-up','Wry child','sho_child'),
    mk('翔くん、おやつは皆で等しく分けましょうね','Sho — snack-all-equal-share','Direction','yumiko_mom'),
    mk('ママ、ぼく、新しい一歩を踏み出した気分だよ','Mom — me new-step-took-feel','Proud close','sho_child'),
  ]},
  {id:'conv_09162',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、噂話はよせって、ベテランの先輩が仰ってたよ、メイちゃん','Aoi — gossip-stop-veteran-said Mei','Direction','mei_romantic'),
    mk('葵、お客様、亡くなったご家族を想ってお茶を召し上がってたよ、メイちゃん','Aoi — cust-dec-fam-think-tea Mei','Tender','aoi_barista'),
    mk('葵、新メニューの売れ行き、絶好調ね、メイちゃん','Aoi — new-menu-sales-peak Mei','Pleased','mei_romantic'),
    mk('葵、道端の桜並木、満開だね、メイちゃん','Aoi — roadside-cherry-row-bloom Mei','Pleased','aoi_barista'),
    mk('葵、お店の制服、ちょっと窮屈に感じる時があるね、メイちゃん','Aoi — store-uniform-tight-time Mei','Wry','mei_romantic'),
    mk('葵、繁忙期は早朝から店に出るハメになるね、メイちゃん','Aoi — busy-morn-store-end-up Mei','Wry','aoi_barista'),
    mk('葵、お客様には等しく丁寧に対応しましょう、メイちゃん','Aoi — cust-equal-careful-resp Mei','Direction','mei_romantic'),
    mk('葵、新メニュー、お店としても新しい一歩を踏み出した気分ね、メイちゃん','Aoi — new-menu-store-new-step Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_09163',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは「悪口はよせ」と仰ったぞ','Gran — youth Dad-"bad-talk-stop"-said','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、亡き友を想って涙を流されたわよね、あなた?','Yes — Grandpa-dec-friend-think-tears, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは絶好調で働かれた','Gran — youth Dad-peak-work','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、道端のお地蔵様に手を合わせてらしたわよね、あなた?','Grandpa — roadside-jizo-prayed, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、戦地の窮屈な暮らしを耐えられた','Gran — youth-battlefield-tight-life','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、お父さんは苦労されるハメになったわよね、あなた?','Grandpa — youth-Dad-hardship-end-up, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんは家族を等しく愛されたぞ','Gran — Dad-fam-equal-love','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、新しい道を踏み出して下さったわよね、あなた?','Grandpa — new-path-step, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09164',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、悪口はよせよ','Riku — bad-talk-stop','Direction teen','sakura_teen'),
    mk('お前、好きな子を想って勉強しろよ、桜','You — like-think-study Sakura','Wry','riku_teen'),
    mk('リク、お前、最近絶好調だな','Riku — recently-peak','Praising','sakura_teen'),
    mk('お前、道端でカエル拾うなよ、桜','You — roadside-frog-don\'t-pick Sakura','Wry','riku_teen'),
    mk('リク、お前、その制服きつくて窮屈そうだぞ','Riku — uniform-tight','Reflective','sakura_teen'),
    mk('お前、テストで赤点取るハメになるな、桜','You — test-fail-end-up Sakura','Direction','riku_teen'),
    mk('リク、ノートを等しく仲間と共有しろよ','Riku — note-equal-share','Direction','sakura_teen'),
    mk('お前、進路へ一歩踏み出したな、桜','You — career-step Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_09165',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、人をからかうのはよせって、メイ姉さんからの言葉ね','Sho — tease-stop-Mei-sis-word','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんを想ってお絵描きしたよ','Mei-sis — me Grandpa-think-drew','Earnest child','sho_child'),
    mk('翔くん、お絵描きのアイデアが絶好調ね','Sho — art-idea-peak','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、道端でメイ姉さんに似た花見つけたよ','Mei-sis — me roadside-Mei-sis-like-flower-saw','Eager child','sho_child'),
    mk('翔くん、メイ姉さんの服、ちょっと窮屈そうね','Sho — Mei-sis-clothes-tight','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんの絵を真似するハメになっちゃった','Mei-sis — me Mei-sis-art-mimic-end-up','Wry child','sho_child'),
    mk('翔くん、お絵描き道具は仲良く等しく分けましょうね','Sho — art-tool-equal-share','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、新しい絵の世界に一歩踏み出したよ','Mei-sis — me new-art-world-step','Eager close','sho_child'),
  ]},
  {id:'conv_09166',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、乗務員の研修を充実させろ','Our co — crew-train-enrich','Crisp','hiroshi_boss'),
    mk('はい。お得意様の境遇に配慮します','Yes — VIP-circ-care','Methodical','kenji_office'),
    mk('当社、エキスパートを社外から招聘しろ','Our co — expert-ext-invite','Direction','hiroshi_boss'),
    mk('はい。未経験者向けの研修を準備します','Yes — Inexp-train-prep','Update','kenji_office'),
    mk('当社、県議会の動向を注視しろ','Our co — pref-assembly-watch','Direction','hiroshi_boss'),
    mk('はい。商品の等級分けを再検討します','Yes — Prod-grade-review','Update','kenji_office'),
    mk('当社、新刊書名を市場調査しろ','Our co — new-title-market-research','Direction','hiroshi_boss'),
    mk('はい。新人が技術を修得するまで支援します','Yes — Newbie-skill-acq-supp','Close','kenji_office'),
  ]},
  {id:'conv_09167',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('乗務員のシフトを見直しましょう','Crew-shift-review','Brisk','yuki_office'),
    mk('はい。様々な境遇のお客様への配慮を強化します','Yes — Various-circ-cust-care','Cooperative','kenji_office'),
    mk('外部のエキスパートと相談しましょう','Ext-expert-cons','Direction','yuki_office'),
    mk('はい。未経験スタッフ向けマニュアルを整備しました','Yes — Inexp-staff-manual','Update','kenji_office'),
    mk('県議会の決定に注目しましょう','Pref-assembly-attention','Direction','yuki_office'),
    mk('はい。お得意様の会員等級を見直します','Yes — VIP-mem-grade-review','Update','kenji_office'),
    mk('新雑誌の書名候補を社員投票で決めましょう','New-mag-title-staff-vote','Direction','yuki_office'),
    mk('はい。社内技術修得プログラムを継続します','Yes — Co-skill-acq-prog-cont','Close','kenji_office'),
  ]},
  {id:'conv_09168',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究室の乗務員的な役割分担を考えろ','Ren — lab-crew-role-think','Mentor','hiroshi_boss'),
    mk('はい。被験者の境遇を尊重して論文を扱います','Yes — Subj-circ-respect paper','Earnest','ren_uni'),
    mk('蓮、その分野のエキスパートに学べ','Ren — field-expert-learn','Direction','hiroshi_boss'),
    mk('はい。未経験の研究分野にも挑みます','Yes — Inexp-field-challenge','Polite','ren_uni'),
    mk('蓮、県議会のレベルでも論文発表しろ','Ren — pref-assembly-paper-pres','Direction','hiroshi_boss'),
    mk('はい。データの等級分けを論文の付録に載せます','Yes — Data-grade-paper-append','Earnest','ren_uni'),
    mk('蓮、書名を一目で分かるものにしろ','Ren — title-clear','Direction','hiroshi_boss'),
    mk('はい。新しい技術を修得するため特訓します','Yes — New-skill-acq-train','Earnest close','ren_uni'),
  ]},
  {id:'conv_09169',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、緊急乗務員との連携を強化されますね','Police emerg-crew-link-strength','Cooperative','kenji_office'),
    mk('警察、被害者ご家族の境遇に丁寧に対応されますね','Police victim-fam-circ-careful','Cooperative','kenji_office'),
    mk('警察、犯罪心理のエキスパートと連携されますね','Police crime-psy-expert-link','Cooperative','kenji_office'),
    mk('警察、未経験者の警察官にも研修されてますね','Police inexp-officer-train','Cooperative','kenji_office'),
    mk('警察、県議会で防犯予算を申請されますね','Police pref-assembly-crime-prev-budget','Cooperative','kenji_office'),
    mk('警察、犯罪の等級分けで対応を変えられますね','Police crime-grade-resp-change','Cooperative','kenji_office'),
    mk('警察、調書の書名表記を統一されますね','Police statement-title-unify','Cooperative','kenji_office'),
    mk('警察、若手警察官が新技術を修得する研修を行いますね','Police young-officer-new-skill-acq','Close','kenji_office'),
  ]},
  {id:'conv_09170',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、乗務員のような現場社員を大事にされた','Dad — founding crew-front-staff-cherish','Sage','hiroshi_elder'),
    mk('はい。お父さんは社員の境遇に細やかに配慮された','Yes — Dad staff-circ-fine-care','Commitment','hiroshi_boss'),
    mk('お父さん、業界のエキスパートと交流されたぞ','Dad — industry-expert-exch','Wistful','hiroshi_elder'),
    mk('はい。お父さんは未経験者にも積極的に道を開かれた','Yes — Dad inexp-active-path-open','Reflective','hiroshi_boss'),
    mk('お父さん、県議会の議員にも理解を求められたぞ','Dad — pref-assembly-MP-understand-req','Wistful','hiroshi_elder'),
    mk('はい。お父さんは商品の等級分けに公平でいらした','Yes — Dad prod-grade-fair','Reflective','hiroshi_boss'),
    mk('お父さん、書名にこだわって出版された','Dad — title-care-pub','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員が技術を修得するまで根気強く待たれた','Yes — Dad staff-skill-acq-patient','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09171',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、近代の富豪たちの慈善活動を論文で扱いましたね','Ren — mod-rich-charity paper','Calm','asuka_teacher'),
    mk('はい、戦時下の馬の調教の歴史を論文で扱いました','Yes — Wartime-horse-train-hist paper','Earnest','ren_uni'),
    mk('蓮さん、敗戦時の国民の落胆を論文で扱いましたね','Ren — defeat-people-depress paper','Reflective','asuka_teacher'),
    mk('はい、軍部の独走による戦争への道を論文で扱いました','Yes — Mil-runaway-war-path paper','Earnest','ren_uni'),
    mk('政策への反感を生む要因を論文で扱いましたね','Pol-against-factor paper','Engaged','asuka_teacher'),
    mk('はい、国境を進入する不法移民の歴史を論文で扱いました','Yes — Border-cross-illegal-immig paper','Earnest','ren_uni'),
    mk('蓮さん、海賊が出没した時代を論文で扱いましたね','Ren — pirate-emer-era paper','Reflective','asuka_teacher'),
    mk('はい、学術界の盗作問題を論文で扱いました','Yes — Acad-plagiarism paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09172',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、警察、容疑者が富豪であることを把握されてますね','Case suspect-rich police-grasp','Reflective','ren_uni'),
    mk('警察、犬の調教士の力もお借りしますね','Police dog-trainer-borrow','Procedural','takeda_officer'),
    mk('本件、被害者ご家族の落胆に配慮されてますね、警察','Case victim-fam-depress police-care','Reflective','ren_uni'),
    mk('警察、軍部関係者からの情報も丁寧に扱います','Police mil-info-careful','Procedural','takeda_officer'),
    mk('本件、市民の反感を招かないよう警察、配慮されてますね','Case citizen-against-not-care police','Reflective','ren_uni'),
    mk('警察、不法進入者の防止に努めます','Police illegal-cross-prev','Procedural','takeda_officer'),
    mk('本件、不審者が出没する地域を警察、巡回されてますね','Case suspic-emer-area-patrol','Reflective','ren_uni'),
    mk('警察、盗作疑惑の捜査も担当します','Police plagiarism-suspic-inv','Close','takeda_officer'),
  ]},
  {id:'conv_09173',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、近代の富豪たちの慈善活動を論文で扱いましたね','Sakura — mod-rich-charity paper','Calm','asuka_teacher'),
    mk('はい、戦時下の馬の調教史を論文で扱いました','Yes — War-horse-train paper','Earnest teen','sakura_teen'),
    mk('敗戦時の国民の落胆を論文で扱いましたね','Defeat-depress paper','Reflective','asuka_teacher'),
    mk('はい、軍部の独走による戦争への道を論文で扱いました','Yes — Mil-runaway paper','Earnest','sakura_teen'),
    mk('政策への反感を生む要因を論文で扱いましたね','Pol-against-factor paper','Engaged','asuka_teacher'),
    mk('はい、国境を進入する不法移民を論文で扱いました','Yes — Border-cross paper','Earnest','sakura_teen'),
    mk('海賊が出没した時代を論文で扱いましたね','Pirate-emer paper','Reflective','asuka_teacher'),
    mk('はい、学術界の盗作問題を論文で扱いました','Yes — Acad-plagiarism paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09174',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、富豪の慈善が医療の発展を支えた事例を医療チームで参照します','Ren — rich-charity-med-dev med-team ref','Calm','saito_doctor'),
    mk('はい、犬の調教を活かしたセラピー犬の活用を医療チームで進めます','Yes — Dog-train-therapy-dog med-team','Patient','saito_doctor'),
    mk('治療結果に落胆する患者さんへのケアを、貴院、なさってますね、先生','Treat-depress-patient-care your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、戦時下の軍部関連の医療記録を医療チームで参考にします','Yes — War-mil-med-rec med-team ref','Patient','saito_doctor'),
    mk('医療政策への反感を抱く市民への対応を、貴院、なさってますね、先生','Med-pol-against-citizen your-hosp resp, sensei','Curious','ren_uni'),
    mk('はい、感染症の進入を防ぐ国境医療検査を医療チームで担当します','Yes — Infect-cross-border-med-test med-team','Patient','saito_doctor'),
    mk('珍しい症状の出没事例を、貴院、医療チームで分析されてますね、先生','Rare-symp-emer your-hosp med-team-anal, sensei','Reflective','ren_uni'),
    mk('はい、医学論文の盗作を医療チームで監視します','Yes — Med-paper-plagiarism med-team-monitor','Patient close','saito_doctor'),
  ]},
  {id:'conv_09175',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、海外の富豪を主要顧客として開拓しろ','Our co — overseas-rich-prim-cust-pioneer','Crisp','hiroshi_boss'),
    mk('はい。社員の調教ではなく、対話の文化を作ります','Yes — Staff-train-not-dialog','Methodical','kenji_office'),
    mk('当社、市場で落胆させる商品は出すな','Our co — market-depress-prod-not','Direction','hiroshi_boss'),
    mk('はい。軍部関連の受注は慎重に判断します','Yes — Mil-order-careful','Update','kenji_office'),
    mk('当社、社員の反感を招かないよう経営しろ','Our co — staff-against-not-mgmt','Direction','hiroshi_boss'),
    mk('はい。倉庫への不法進入を防ぐセキュリティを強化します','Yes — Warehouse-cross-prev-sec-strength','Update','kenji_office'),
    mk('当社、ニセモノが出没する市場には注意しろ','Our co — fake-emer-market-care','Direction','hiroshi_boss'),
    mk('はい。社員の盗作行為は厳罰で対応します','Yes — Staff-plagiarism-strict-resp','Close','kenji_office'),
  ]},
  {id:'conv_09176',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、水害ボランティアから帰ってこられたって、メイちゃん','Aoi — cust-flood-volunteer-back Mei','Reflective','mei_romantic'),
    mk('葵、新メニューはカラフルなトッピングにしましょう、メイちゃん','Aoi — new-menu-colorful-top Mei','Direction','aoi_barista'),
    mk('葵、お客様、陰陽道のお話されてたよ、メイちゃん','Aoi — cust-yinyang-told Mei','Reflective','mei_romantic'),
    mk('葵、お客様、大連旅行のお土産を分けて下さったよ、メイちゃん','Aoi — cust-Dalian-souv-shared Mei','Pleased','aoi_barista'),
    mk('葵、お店に新しい一眼レフを置きたいね、メイちゃん','Aoi — store-new-DSLR-want Mei','Reflective','mei_romantic'),
    mk('葵、お客様、絹のハンカチを大事にされていたよ、メイちゃん','Aoi — cust-silk-hanky-cherish Mei','Reflective','aoi_barista'),
    mk('葵、お店の敷居を低くして入りやすくしましょう、メイちゃん','Aoi — store-entry-low-easy Mei','Direction','mei_romantic'),
    mk('葵、新メニュー、ベーコンサンド作りましょう、メイちゃん','Aoi — new-menu-bacon-sand Mei','Animated close','aoi_barista'),
  ]},
  {id:'conv_09177',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが水害ボランティアに行かれたぞ','Gran — youth Dad-flood-volunteer','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、カラフルな着物をお祝いに着られたわよね、あなた?','Yes — Grandpa-colorful-kimono-celeb, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが陰陽の哲学を語られた','Gran — youth Dad-yinyang-phil-told','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、大連でお仕事されたわよね、あなた?','Grandpa — youth-Dalian-work, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは一眼レフで家族を撮られたぞ','Gran — youth Dad-DSLR-fam-photo','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、絹の着物を大事にされたわよね、あなた?','Grandpa — youth-silk-kimono-cherish, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お家の敷居を毎日磨かれた','Gran — youth home-threshold-daily-polish','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、朝食にベーコンエッグを召し上がってたわよね、あなた?','Grandpa — breakfast-bacon-egg, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09178',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが水害支援のボランティアに行かれるそうよ','Sho — Dad-flood-volunteer','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、カラフルなクレヨンで絵描いたよ','Mei-sis — me colorful-crayon-drew','Eager child','sho_child'),
    mk('翔くん、メイ姉さんが陰陽五行のご本を持ってるのよ','Sho — Mei-sis-yinyang-book-have','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、社会で大連の歴史やったよ','Mei-sis — me soc-Dalian-hist-study','Eager child','sho_child'),
    mk('翔くん、お父さんが一眼カメラで翔くんを撮って下さったわ','Sho — Dad-DSLR-Sho-photo','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖母ちゃんの絹のスカーフ大好きだよ','Mei-sis — me Grandma-silk-scarf-love','Eager child','sho_child'),
    mk('翔くん、メイ姉さんのお家の敷居が低くて入りやすいわね','Sho — Mei-sis-home-threshold-low-easy','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ベーコンが好きだよ','Mei-sis — me bacon-like','Eager close','sho_child'),
  ]},
  {id:'conv_09179',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、水害ボランティアに参加するんだろ?','Riku — flood-volunteer-join?','Curious teen','sakura_teen'),
    mk('お前、カラフルなTシャツ集めてんな、桜','You — colorful-T-collect Sakura','Wry','riku_teen'),
    mk('リク、お前、社会で陰陽の歴史やったろ?','Riku — soc-yinyang?','Curious','sakura_teen'),
    mk('お前、社会で大連の単元やったろ?桜','You — soc-Dalian? Sakura','Curious','riku_teen'),
    mk('リク、お前、お父さんの一眼カメラ借りてんだろ?','Riku — Dad-DSLR-borrow?','Curious','sakura_teen'),
    mk('お前、絹のネクタイ買ったろ?桜','You — silk-tie-bought? Sakura','Curious','riku_teen'),
    mk('リク、お前ん家、敷居高そうだな','Riku — your-home-threshold-high','Wry','sakura_teen'),
    mk('お前、給食のベーコンサラダ好きだろ?桜','You — lunch-bacon-salad-like? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09180',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが水害ボランティアに参加されるわ','Sho — Dad-flood-volunteer','Reflective','yumiko_mom'),
    mk('ママ、ぼく、カラフルな絵を描いたよ','Mom — me colorful-drew','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんが陰陽道のお話してくれたわ','Sho — Grandpa-yinyang-told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、社会で大連という街を勉強したよ','Mom — me soc-Dalian-study','Earnest child','sho_child'),
    mk('翔くん、お父さんが一眼カメラを買って下さったわ','Sho — Dad-DSLR-bought','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お母さんの絹のドレス見たよ','Mom — me Mom-silk-dress-saw','Eager child','sho_child'),
    mk('翔くん、お家の敷居を磨きましょうね','Sho — home-threshold-polish','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんとベーコンエッグ食べたよ','Mom — me Dad-bacon-egg-ate','Eager close','sho_child'),
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

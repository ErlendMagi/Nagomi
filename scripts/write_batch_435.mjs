import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_435 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['取りあえず','なかには','ちらほら','うかがっ','食え','何れ','ほったらかし','大概']
const B_T = ['文中','合弁','集大成','係長','特設','別冊','交替','年率']
const C_T = ['防護','寄生虫','万引き','罵倒','国策','保釈','喚問','殺傷']
const D_T = ['ゴージャス','重荷','土星','母乳','モザイク','軍艦','パジャマ','タマネギ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08661',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、取りあえず手を洗ってきてね','Sho — for-now-hand-wash','Direction','yumiko_mom'),
    mk('ママ、ぼく、お友達のなかには漫画家になりたい子もいるよ','Mom — me friend-among-manga-want-kid','Reflective child','sho_child'),
    mk('翔くん、お花がちらほら咲いてきたわね','Sho — flower-chirahora-bloom','Pleased','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんのお話、うかがって楽しかったよ','Mom — me Grandpa-story-heard-fun','Eager child','sho_child'),
    mk('翔くん、食え食えって、お祖父ちゃんがたくさんよそって下さったわね','Sho — "eat-eat"-Grandpa-served','Reflective','yumiko_mom'),
    mk('ママ、ぼく、何れ大きくなったら、お父さんみたいになりたい','Mom — me eventually-Dad-like-want','Earnest child','sho_child'),
    mk('翔くん、おもちゃをほったらかしにしないでね','Sho — toy-leave-out-don\'t','Direction','yumiko_mom'),
    mk('ママ、ぼく、大概、宿題は夕食前に終えるよ','Mom — me usually-homework-pre-dinner','Proud close','sho_child'),
  ]},
  {id:'conv_08662',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、取りあえず新メニューを試作してみましょう、メイちゃん','Aoi — for-now-new-menu-trial Mei','Brisk','mei_romantic'),
    mk('葵、お客様のなかには、毎日お見えになる方もいらっしゃるね、メイちゃん','Aoi — cust-among-daily-visit Mei','Pleased','aoi_barista'),
    mk('葵、新メニューの注文、ちらほら入ってきたわよ、メイちゃん','Aoi — new-menu-order-chirahora Mei','Pleased','mei_romantic'),
    mk('葵、お客様、お友達のお話をうかがってらしたわよ、メイちゃん','Aoi — cust-friend-story-heard Mei','Reflective','aoi_barista'),
    mk('葵、お客様、食えるだけ食べていらっしゃったわ、メイちゃん','Aoi — cust-eat-all-ate Mei','Wry','mei_romantic'),
    mk('葵、何れまた、お店の改装も考えましょうね、メイちゃん','Aoi — eventually-store-renov-think Mei','Reflective','aoi_barista'),
    mk('葵、棚の整理をほったらかしにしてしまったわね、メイちゃん','Aoi — shelf-org-left-out Mei','Wry','mei_romantic'),
    mk('葵、お客様、大概、午後にお見えになるよね、メイちゃん','Aoi — cust-usually-afternoon Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08663',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは取りあえず茶を出されたぞ','Gran — youth Dad for-now-tea-served','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ご友人のなかには商人もいらしたわよね、あなた?','Yes — Grandpa-friend-among-merchant, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、桜がちらほら咲いた朝を覚えてるぞ','Gran — youth cherry-chirahora-bloom-morn-remember','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫さんのお話を熱心にうかがってらしたわよね、あなた?','Grandpa — grandkid-zealously-heard, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「腹がへったら食えよ」と仰ったぞ','Gran — youth Dad "hungry-eat"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、何れ天国でまた会いましょうね、あなた','Grandpa — eventually-heaven-meet, dear','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんは仕事をほったらかしになさらなかったぞ','Gran — Dad work-never-leave-out','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、大概、夕食前に新聞をお読みになったわよね、あなた?','Grandpa — usually-pre-dinner-paper, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08664',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、取りあえずノート貸せよ','Riku — for-now-notebook-lend','Wry teen','sakura_teen'),
    mk('お前、クラスのなかには勉強嫌いな奴もいるよな、桜','You — class-among-study-hate Sakura','Reflective','riku_teen'),
    mk('リク、お前の答案、ちらほら正解だな','Riku — your-answer-chirahora-correct','Wry','sakura_teen'),
    mk('お前、先生のお話、うかがってたか、桜','You — teacher-story-heard? Sakura','Curious','riku_teen'),
    mk('リク、お前、食え食えって、給食食わせすぎだろ','Riku — "eat-eat"-lunch-too-much','Wry','sakura_teen'),
    mk('お前、何れ俺らも卒業だな、桜','You — eventually-grad Sakura','Reflective','riku_teen'),
    mk('リク、お前、部活をほったらかしにすんなよ','Riku — club-leave-out-don\'t','Direction','sakura_teen'),
    mk('お前、大概、テスト前に焦るな、桜','You — usually-pre-test-panic Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_08665',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さん、取りあえずお散歩しましょうね','Sho — Mei-sis for-now-walk','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お友達のなかには漫画好きな子もいるよ','Mei-sis — me friend-among-manga-kid','Eager child','sho_child'),
    mk('翔くん、公園のお花、ちらほら咲いてきたわね','Sho — park-flower-chirahora-bloom','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんのお話、うかがってきたよ','Mei-sis — me Grandpa-story-heard','Eager child','sho_child'),
    mk('翔くん、お祖母ちゃんが「食え食え」って沢山下さるのよ','Sho — Grandma "eat-eat"-many-give','Animated','mei_romantic'),
    mk('メイ姉さん、ぼく、何れピアノ発表会に出るんだ','Mei-sis — me eventually-piano-recital','Eager child','sho_child'),
    mk('翔くん、おもちゃをほったらかしにするのは駄目よ','Sho — toy-leave-out-no','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、大概、夕方ピアノの練習するよ','Mei-sis — me usually-eve-piano-prac','Proud close','sho_child'),
  ]},
  {id:'conv_08666',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、契約書の文中の表現を見直せ','Our co — contract-text-expr-review','Crisp','hiroshi_boss'),
    mk('はい。海外の合弁会社の設立準備を進めております','Yes — Overseas-JV-setup prep','Methodical','kenji_office'),
    mk('当社、創立記念事業を集大成として実施しろ','Our co — anniv-biz-culm-impl','Direction','hiroshi_boss'),
    mk('はい。営業の係長会議の議事録を準備しました','Yes — Sales-section-meeting-min prep','Update','kenji_office'),
    mk('展示会の特設ブースを華やかにしろ','Expo-special-booth-flashy','Direction','hiroshi_boss'),
    mk('はい。社内報の別冊で新商品を紹介します','Yes — Co-news-supp new-prod-intro','Update','kenji_office'),
    mk('当社、シフト交替の体制を見直せ','Our co — shift-swap-system-review','Direction','hiroshi_boss'),
    mk('はい。借入金の年率を低く抑えました','Yes — Loan-annual-rate-low-kept','Close','kenji_office'),
  ]},
  {id:'conv_08667',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('契約書の文中、誤解を招く表現を直しましょう','Contract-text mis-expr-fix','Brisk','yuki_office'),
    mk('はい。合弁先との打ち合わせを設定しました','Yes — JV-partner-meet-set','Cooperative','kenji_office'),
    mk('創業二十年の集大成イベントを企画しましょう','Found-20-culm-event-plan','Direction','yuki_office'),
    mk('はい。係長クラスの研修を実施します','Yes — Section-lvl-train-do','Update','kenji_office'),
    mk('展示会の特設会場の手配を急ぎましょう','Expo-special-venue-hasten','Direction','yuki_office'),
    mk('はい。お得意様向けの別冊カタログを準備しました','Yes — VIP-supp-cat prep','Update','kenji_office'),
    mk('シフト交替時の引き継ぎを丁寧にしましょう','Shift-swap-handover-care','Direction','yuki_office'),
    mk('はい。融資の年率比較表を作成しました','Yes — Loan-annual-comp-table made','Close','kenji_office'),
  ]},
  {id:'conv_08668',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文の文中、引用ミスがないか確認しろ','Ren — paper-text-cite-mis check','Mentor','hiroshi_boss'),
    mk('はい。他大学との合弁研究の合意書を準備しました','Yes — Other-univ-JV-research-MOU prep','Earnest','ren_uni'),
    mk('蓮、博士論文を研究の集大成として書け','Ren — PhD-paper culm-write','Direction','hiroshi_boss'),
    mk('はい。研究室の係長相当の先輩に相談しました','Yes — Lab-section-lvl-senior-cons','Polite','ren_uni'),
    mk('蓮、学会会場の特設ポスター展に出せ','Ren — conf-venue-special-poster-out','Direction','hiroshi_boss'),
    mk('はい。論文集の別冊で要約版を出します','Yes — Paper-coll-supp-summary-issue','Earnest','ren_uni'),
    mk('蓮、夜間研究の交替体制を確認しろ','Ren — night-research-swap-system-check','Direction','hiroshi_boss'),
    mk('はい。研究費の年率比較を論文で扱いました','Yes — Research-fund-annual-comp paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08669',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、調書の文中表現に厳密です','Police statement-text-expr-strict','Calm','takeda_officer'),
    mk('はい。警察、合弁警備会社との連携、安心です','Yes — Police JV-sec-co-link safe','Cooperative','kenji_office'),
    mk('警察、地域防犯活動の集大成として大規模演習を実施します','Police local-crime-culm-large-drill','Procedural','takeda_officer'),
    mk('はい。警察、係長級の事件担当者がご対応ですね','Yes — Police section-lvl-case-handler resp','Cooperative','kenji_office'),
    mk('警察、防犯特設窓口を商店街に設けます','Police crime-special-window-arcade-set','Procedural','takeda_officer'),
    mk('はい。警察、別冊報告書も発行されますね','Yes — Police supp-report-issue','Cooperative','kenji_office'),
    mk('警察、夜勤の交替制を厳格に運用します','Police night-swap-strict-run','Procedural','takeda_officer'),
    mk('はい。警察、不正融資の年率について捜査ですね','Yes — Police illegal-loan-annual-rate-inv','Close','kenji_office'),
  ]},
  {id:'conv_08670',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、契約書の文中表現に厳しかったぞ','Dad — founding contract-text-strict','Sage','hiroshi_elder'),
    mk('はい。お父さんは海外合弁の道を切り開かれた','Yes — Dad overseas-JV-pioneer','Commitment','hiroshi_boss'),
    mk('お父さん、二十周年式典を集大成として行われたぞ','Dad — 20-anniv-culm-held','Wistful','hiroshi_elder'),
    mk('はい。お父さんは係長時代から現場感覚を磨かれた','Yes — Dad section-era-on-site-sense','Reflective','hiroshi_boss'),
    mk('お父さん、新商品発表で特設会場を借りられたぞ','Dad — new-prod-launch-special-venue-rent','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社内報の別冊で社員の声を伝えられた','Yes — Dad co-news-supp-staff-voice','Reflective','hiroshi_boss'),
    mk('お父さん、社員の交替制シフトを工夫されたぞ','Dad — staff-swap-shift-creative','Wistful','hiroshi_elder'),
    mk('はい。お父さんは融資の年率交渉に強かった','Yes — Dad loan-annual-nego-strong','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08671',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、災害時の防護服の歴史を論文で扱いましたね','Ren — disaster-prot-suit-hist paper','Calm','asuka_teacher'),
    mk('はい、寄生虫感染症の医学史を論文で扱いました','Yes — Para-infect-med-hist paper','Earnest','ren_uni'),
    mk('蓮さん、都市部の万引き犯罪統計を論文で扱いましたね','Ren — urban-shoplift-stat paper','Reflective','asuka_teacher'),
    mk('はい、ネット上の罵倒の社会学を論文で扱いました','Yes — Net-rant-soc-sci paper','Earnest','ren_uni'),
    mk('国策事業の歴史的影響を論文で扱いましたね','Nat-pol-biz-impact-hist paper','Engaged','asuka_teacher'),
    mk('はい、戦後の保釈制度の研究を論文で扱いました','Yes — Postwar-bail-system paper','Earnest','ren_uni'),
    mk('蓮さん、国会喚問の歴史的事例を論文で扱いましたね','Ren — Diet-summon-hist-case paper','Reflective','asuka_teacher'),
    mk('はい、戦時下の殺傷統計を論文で扱いました','Yes — Wartime-killing-stat paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08672',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、警察、現場で防護服を着用されてますね','Case police-on-site-prot-suit-wear','Reflective','ren_uni'),
    mk('警察、寄生虫を媒介とした事案にも対応します','Police para-vector-case-resp','Procedural','takeda_officer'),
    mk('本件、万引き常習者を警察、特定されてますね','Case shoplift-habit police-id','Reflective','ren_uni'),
    mk('警察、被害者への罵倒行為を厳しく取り締まります','Police victim-rant strict-crack-down','Procedural','takeda_officer'),
    mk('本件、国策事業に関連する不正を警察、捜査されてますね','Case nat-pol-biz-illegal police-inv','Reflective','ren_uni'),
    mk('警察、容疑者の保釈条件を厳格に管理します','Police suspect-bail-cond-strict-mgmt','Procedural','takeda_officer'),
    mk('本件、国会喚問への対応を警察、ご支援されてますね','Case Diet-summon-resp police-supp','Reflective','ren_uni'),
    mk('警察、無差別殺傷事件に総力で対応します','Police indis-killing-full-resp','Close','takeda_officer'),
  ]},
  {id:'conv_08673',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、災害時の防護服の歴史を論文で扱いましたね','Sakura — prot-suit-hist paper','Calm','asuka_teacher'),
    mk('はい、寄生虫感染症の医学史を論文で扱いました','Yes — Para-infect paper','Earnest teen','sakura_teen'),
    mk('都市部の万引き犯罪統計を論文で扱いましたね','Urban-shoplift paper','Reflective','asuka_teacher'),
    mk('はい、ネット罵倒の社会学を論文で扱いました','Yes — Net-rant paper','Earnest','sakura_teen'),
    mk('国策事業の歴史的影響を論文で扱いましたね','Nat-pol-biz paper','Engaged','asuka_teacher'),
    mk('はい、戦後の保釈制度を論文で扱いました','Yes — Postwar-bail paper','Earnest','sakura_teen'),
    mk('国会喚問の事例史を論文で扱いましたね','Diet-summon paper','Reflective','asuka_teacher'),
    mk('はい、戦時下の殺傷統計を論文で扱いました','Yes — War-killing paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08674',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、感染症対応で防護服を医療チームで着用しております','Ren — infect-resp prot-suit med-team wear','Calm','saito_doctor'),
    mk('はい、輸入食品の寄生虫検査を医療チームで強化しました','Yes — Imp-food-para-test med-team strengthen','Patient','saito_doctor'),
    mk('万引きで隠した薬物の事案を、貴院、ご相談されたんですね、先生','Shoplift-drug-case your-hosp consult, sensei','Curious','ren_uni'),
    mk('はい、医療スタッフへの罵倒対策を医療チームで強化しております','Yes — Med-staff-rant-counter med-team strength','Patient','saito_doctor'),
    mk('国策医療の参加を、貴院、ご検討されてるそうですね、先生','Nat-pol-med-join your-hosp consider, sensei','Reflective','ren_uni'),
    mk('はい、保釈中の患者の医療管理も医療チームで担当します','Yes — Bail-patient-med-mgmt med-team','Patient','saito_doctor'),
    mk('国会喚問への医療意見書提出を、貴院、ご準備されてますね、先生','Diet-summon-med-opinion your-hosp prep, sensei','Reflective','ren_uni'),
    mk('はい、殺傷事件被害者の救護を医療チームで担当します','Yes — Killing-victim-rescue med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_08675',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、現場の防護用品を充実させろ','Our co — on-site-prot-eq-enrich','Crisp','hiroshi_boss'),
    mk('はい。海外食品の寄生虫対策を強化します','Yes — Overseas-food-para-counter','Methodical','kenji_office'),
    mk('店舗の万引き対策を強化しろ','Store-shoplift-counter','Direction','hiroshi_boss'),
    mk('はい。SNS罵倒への対応窓口を設置しました','Yes — SNS-rant-resp-window-set','Update','kenji_office'),
    mk('当社、国策プロジェクトへの参画を検討しろ','Our co — nat-pol-proj-join-consider','Direction','hiroshi_boss'),
    mk('はい。容疑社員の保釈中の処遇を慎重に判断します','Yes — Suspect-staff-bail-treat-careful','Update','kenji_office'),
    mk('当社、国会喚問への対応を準備しろ','Our co — Diet-summon-resp-prep','Direction','hiroshi_boss'),
    mk('はい。社員の殺傷事件防止のセキュリティを徹底します','Yes — Staff-killing-prev-sec strict','Close','kenji_office'),
  ]},
  {id:'conv_08676',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ゴージャスなドレスでお見えになったよ、メイちゃん','Aoi — cust-gorgeous-dress-came Mei','Pleased','mei_romantic'),
    mk('葵、お客様、お子様の世話が重荷だって愚痴られてたよ、メイちゃん','Aoi — cust-child-care-burden Mei','Reflective','aoi_barista'),
    mk('葵、お客様、土星のお話されてたよ、メイちゃん','Aoi — cust-Saturn-told Mei','Reflective','mei_romantic'),
    mk('葵、お客様、母乳育児のお話されてたよ、メイちゃん','Aoi — cust-breastfeed-told Mei','Reflective','aoi_barista'),
    mk('葵、お客様、モザイクアートを習ってらっしゃるんだって、メイちゃん','Aoi — cust-mosaic-learn Mei','Reflective','mei_romantic'),
    mk('葵、お客様、軍艦のプラモデル作りがご趣味だって、メイちゃん','Aoi — cust-battleship-model-hobby Mei','Reflective','aoi_barista'),
    mk('葵、お子様、パジャマ姿でうたた寝してらしたよ、メイちゃん','Aoi — child-pj-doze Mei','Pleased','mei_romantic'),
    mk('葵、新メニュー、タマネギスープ加えましょう、メイちゃん','Aoi — new-menu-onion-soup-add Mei','Animated close','aoi_barista'),
  ]},
  {id:'conv_08677',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがゴージャスな宴会を開かれたぞ','Gran — youth Dad gorgeous-banquet-held','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、長男誕生を重荷ではなく喜びとされたわよね、あなた?','Yes — Grandpa first-son-burden-not-joy, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが土星の輪のお話をされたぞ','Gran — youth Dad-Saturn-ring-told','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、私の母乳育児を応援して下さったわよね、あなた?','Grandpa — my-breastfeed-supp, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがモザイク模様の工芸品を集められたぞ','Gran — youth Dad-mosaic-craft-collect','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、軍艦島の歴史をご説明されたわよね、あなた?','Grandpa — battleship-island-hist-explained, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが孫にパジャマを買ってこられたぞ','Gran — youth Dad-grandkid-pj-bought','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お庭でタマネギも育てられたわよね、あなた?','Grandpa — garden-onion-grew, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08678',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんがゴージャスな帽子を持っているのよ','Sho — Mei-sis-gorgeous-hat-have','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、宿題が重荷に感じることもあるよ','Mei-sis — me homework-burden-sometimes','Earnest child','sho_child'),
    mk('翔くん、お父さんと土星の絵本を読みましょうね','Sho — Dad-Saturn-book-read','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、赤ちゃんは母乳を飲むって習ったよ','Mei-sis — me baby-breastfeed-learned','Earnest child','sho_child'),
    mk('翔くん、図工でモザイクアートを作ってみたいわね','Sho — craft-mosaic-make-want','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、博物館で大きな軍艦の模型見たよ','Mei-sis — me museum-big-battleship-model-saw','Eager child','sho_child'),
    mk('翔くん、新しいパジャマ、お似合いね','Sho — new-pj-suit','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、ママとタマネギ切る練習したよ','Mei-sis — me Mom-onion-cut-prac','Proud close','sho_child'),
  ]},
  {id:'conv_08679',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前ん家、ゴージャスなクリスマス飾るな','Riku — your-home-gorgeous-Xmas-decorate','Wry teen','sakura_teen'),
    mk('お前、塾の宿題、重荷に感じてんだろ?桜','You — cram-homework-burden? Sakura','Curious','riku_teen'),
    mk('リク、お前、理科で土星の単元やったろ?','Riku — sci-Saturn-unit?','Curious','sakura_teen'),
    mk('お前、家庭科で母乳の授業やったろ?桜','You — home-eco breastfeed-class? Sakura','Curious','riku_teen'),
    mk('リク、お前、ゲームのモザイク表現嫌いだろ?','Riku — game-mosaic-hate?','Curious','sakura_teen'),
    mk('お前、社会で軍艦島やったろ?桜','You — soc-battleship-island? Sakura','Curious','riku_teen'),
    mk('リク、お前、お洒落なパジャマ買ったろ?','Riku — fancy-pj-bought?','Curious','sakura_teen'),
    mk('お前、家庭科でタマネギ切れたろ?桜','You — home-eco-onion-cut? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08680',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖母ちゃんがゴージャスなお茶会を開かれたわ','Sho — Grandma-gorgeous-tea-held','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お友達の悩みが重荷にならないか心配だよ','Mom — me friend-worry-burden-worry','Earnest child','sho_child'),
    mk('翔くん、お父さんが土星の写真を見せて下さったわ','Sho — Dad-Saturn-photo-showed','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お母さんの母乳でぼくは育ったって聞いたよ','Mom — me Mom-breastfeed-raised','Eager child','sho_child'),
    mk('翔くん、お父さんがモザイクタイルを買ってらしたわ','Sho — Dad-mosaic-tile-bought','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと軍艦の模型作りたい','Mom — me Dad-battleship-model-want','Eager child','sho_child'),
    mk('翔くん、お父さんが新しいパジャマ買って来てくれたわよ','Sho — Dad-new-pj-bought','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖母ちゃんとタマネギを収穫したよ','Mom — me Grandma-onion-harvested','Eager close','sho_child'),
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

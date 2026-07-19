import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_509 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['風貌','可憐','阿呆','ガマン','物々交換','生まれ変わっ','とやかく','おのれ']
const B_T = ['仰せ','平家','国際線','保養','切り離さ','造語','部外','三越']
const C_T = ['ミート','ヘブライ','ボリシェヴィキ','ストリーミング','非対称','自滅','習熟','人力']
const D_T = ['キャッチボール','プーチン','チャングム','ビクトリア','ヨコ','東海道','ゴア','ナビゲーション']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10141',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが穏やかな風貌で迎えて下さるわ','Sho — Dad-calm-look-welc','Tender','yumiko_mom'),
    mk('ママ、ぼく、可憐なお花を見つけたよ','Mom — me dainty-flower-found','Eager child','sho_child'),
    mk('翔くん、お友達を阿呆呼ばわりしないようにね','Sho — friend-fool-call-no','Direction','yumiko_mom'),
    mk('ママ、おやつのガマンができるようになったよ','Mom — snack-endure-can','Proud child','sho_child'),
    mk('翔くん、お祖父ちゃんが昔は物々交換が普通だったって','Sho — Grandpa-barter-norm','Reflective','yumiko_mom'),
    mk('ママ、ぼく、生まれ変わっても今のお父さんが良いよ','Mom — me reborn-current-Dad-good','Tender child','sho_child'),
    mk('翔くん、ご近所の事をとやかく言うのはやめましょうね','Sho — nbhd-gossip-stop','Direction','yumiko_mom'),
    mk('ママ、お父さんが「おのれを律する事が大事」って仰ったよ','Mom — Dad-"self-disc-imp"-said','Earnest close','sho_child'),
  ]},
  {id:'conv_10142',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、上品な風貌でいらしたよ、メイちゃん','Aoi — cust-dign-look Mei','Pleased','mei_romantic'),
    mk('葵、テーブルの可憐なお花を飾り直そうね、メイちゃん','Aoi — tbl-dainty-flower-redec Mei','Direction','aoi_barista'),
    mk('葵、お客様を阿呆扱いするスタッフはいないわね、メイちゃん','Aoi — cust-fool-treat-staff-no Mei','Direction','mei_romantic'),
    mk('葵、忙しさをガマンしすぎないようにね、メイちゃん','Aoi — busy-endure-no-too Mei','Direction','aoi_barista'),
    mk('葵、お客様、コーヒー豆と地元野菜の物々交換会されてたよ、メイちゃん','Aoi — cust-bean-veg-barter Mei','Reflective','mei_romantic'),
    mk('葵、お店が生まれ変わったみたいね、改装後、メイちゃん','Aoi — store-reborn-renov Mei','Pleased','aoi_barista'),
    mk('葵、お客様の事をとやかく評しないのが基本ね、メイちゃん','Aoi — cust-gossip-no-basic Mei','Direction','mei_romantic'),
    mk('葵、おのれの店として誇りを持とう、メイちゃん','Aoi — our-store-proud Mei','Tender close','aoi_barista'),
  ]},
  {id:'conv_10143',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは凛とした風貌でいらした','Gran — youth Dad-dign-look','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃の私が可憐だったって言って下さったわよね、あなた?','Yes — Grandpa-me-dainty-said, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが阿呆な真似をされる事はなかった','Gran — youth Dad-fool-act-no','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、戦中はガマンの連続だったわよね、あなた?','Grandpa — war-endure-cont, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、村で物々交換が当たり前だった','Gran — youth vil-barter-norm','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、生まれ変わってもまた家族になりたいわよね、あなた?','Grandpa — reborn-fam-want, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは人をとやかく言わない方だった','Gran — youth Dad-gossip-no','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、おのれの道を貫かれたわよね、あなた?','Grandpa — self-path-keep, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10144',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、最近大人びた風貌になったな','Riku — recently-adult-look','Praising teen','sakura_teen'),
    mk('お前、可憐な妹さんのこと自慢してたな、桜','You — dainty-sis-brag Sakura','Pleased','riku_teen'),
    mk('リク、お前、阿呆な失敗繰り返すなよ','Riku — fool-fail-no-rep','Direction','sakura_teen'),
    mk('お前、ガマンしすぎて体壊すなよ、桜','You — endure-too-health-no Sakura','Direction','riku_teen'),
    mk('リク、お前、漫画の物々交換しよう','Riku — manga-barter','Pleased','sakura_teen'),
    mk('お前、髪型変えて生まれ変わったな、桜','You — hair-change-reborn Sakura','Pleased','riku_teen'),
    mk('リク、他人をとやかく言うなよ','Riku — others-gossip-no','Direction','sakura_teen'),
    mk('お前、おのれを信じろ、桜','You — self-trust Sakura','Encouraging close','riku_teen'),
  ]},
  {id:'conv_10145',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんは穏やかな風貌で安心するわね','Sho — Dad-calm-look-easy','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、可憐な蝶々見たよ','Mei-sis — me dainty-butterfly','Eager child','sho_child'),
    mk('翔くん、阿呆呼ばわりはお父さんに失礼よ','Sho — fool-call-Dad-rude','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、おやつのガマンができるようになったよ','Mei-sis — me snack-endure','Proud child','sho_child'),
    mk('翔くん、メイ姉さんと小物の物々交換しましょうね','Sho — Mei-sis-small-barter','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、心が生まれ変わった気分だよ','Mei-sis — me heart-reborn-feel','Eager child','sho_child'),
    mk('翔くん、人の事をとやかく言うのはやめましょうね','Sho — others-gossip-stop','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、おのれを律することを学んだよ','Mei-sis — me self-disc-learn','Earnest close','sho_child'),
  ]},
  {id:'conv_10146',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、社長の仰せの通り進めろ','Our co — pres-said-prog','Crisp','hiroshi_boss'),
    mk('はい。平家物語的な栄枯盛衰を経営の戒めとします','Yes — Heike-rise-fall-warn','Methodical','kenji_office'),
    mk('当社、国際線出張の規定を整えろ','Our co — intl-flight-rule','Direction','hiroshi_boss'),
    mk('はい。役員の保養施設利用も検討します','Yes — Exec-resort-cons','Update','kenji_office'),
    mk('当社、不採算部門を切り離さない判断もある','Our co — unprof-detach-not-judg','Reflective','hiroshi_boss'),
    mk('はい。新商品の造語ネーミングを公募します','Yes — New-prod-coin-recru','Update','kenji_office'),
    mk('部外秘の情報管理を徹底しろ','Outside-conf-strict','Direction','hiroshi_boss'),
    mk('はい。三越と提携した催事を計画します','Yes — Mitsukoshi-event-plan','Close','kenji_office'),
  ]},
  {id:'conv_10147',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('社長の仰せの方針に沿って動きましょう','Pres-said-pol-move','Brisk','yuki_office'),
    mk('はい。平家滅亡の教訓を経営に活かします','Yes — Heike-fall-lesson','Cooperative','kenji_office'),
    mk('国際線運賃の値上げに対応しましょう','Intl-flight-fare-up-resp','Direction','yuki_office'),
    mk('はい。社員保養所の予約状況を共有します','Yes — Staff-resort-rsv-share','Update','kenji_office'),
    mk('お得意様を切り離さないようにしましょう','Reg-cust-detach-not','Direction','yuki_office'),
    mk('はい。社内造語が外部に通じないこともあります','Yes — Co-coin-outside-no','Update','kenji_office'),
    mk('部外者立ち入りを制限しましょう','Outside-restrict','Direction','yuki_office'),
    mk('はい。三越本店で催事を開きます','Yes — Mitsukoshi-flag-event','Close','kenji_office'),
  ]},
  {id:'conv_10148',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、指導教員の仰せに従え','Ren — supv-said-follow','Mentor','hiroshi_boss'),
    mk('はい。平家物語の栄枯研究も興味あります','Yes — Heike-tale-int','Earnest','ren_uni'),
    mk('蓮、国際線で海外学会に行け','Ren — intl-flight-conf','Direction','hiroshi_boss'),
    mk('はい。教員の保養休暇も理解します','Yes — Fac-resort-und','Earnest','ren_uni'),
    mk('蓮、無関係なデータを切り離さない姿勢も時に必要だ','Ren — irr-detach-not-times','Direction','hiroshi_boss'),
    mk('はい。学術造語の使い方に気を付けます','Yes — Acad-coin-care','Polite','ren_uni'),
    mk('蓮、部外者には研究機密を見せるな','Ren — outside-research-conf-no','Direction','hiroshi_boss'),
    mk('はい。三越本店の文化講座にも参加します','Yes — Mitsukoshi-cult-join','Earnest close','ren_uni'),
  ]},
  {id:'conv_10149',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、上司の仰せに従われますね','Police boss-said-follow','Cooperative','kenji_office'),
    mk('警察、平家ゆかりの史跡警備もされますね','Police Heike-relic-guard','Cooperative','kenji_office'),
    mk('警察、国際線到着時の入管連携もされますね','Police intl-arr-imm-link','Cooperative','kenji_office'),
    mk('警察、保養施設での盗難事案も対応されますね','Police resort-theft-resp','Cooperative','kenji_office'),
    mk('警察、本件を別の事件と切り離さない捜査もされますね','Police case-other-detach-not-inv','Cooperative','kenji_office'),
    mk('警察、隠語、造語の解読技術もお持ちですね','Police slang-coin-decode-tech','Cooperative','kenji_office'),
    mk('警察、部外秘の捜査情報を厳格に管理されますね','Police outside-conf-strict','Cooperative','kenji_office'),
    mk('警察、三越前の万引き多発も対応されますね','Police Mitsukoshi-pre-theft-resp','Close','kenji_office'),
  ]},
  {id:'conv_10150',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、創業者の仰せに耳を傾けられた','Dad — founding found-said-listen','Sage','hiroshi_elder'),
    mk('はい。お父さんは平家物語を経営の教科書とされた','Yes — Dad Heike-mgmt-text','Commitment','hiroshi_boss'),
    mk('お父さん、国際線で海外を駆け回られた','Dad — intl-flight-overseas','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員の保養を経営目標とされた','Yes — Dad staff-resort-goal','Reflective','hiroshi_boss'),
    mk('お父さん、不採算事業を切り離さない判断もされた','Dad — unprof-detach-not-times','Wistful','hiroshi_elder'),
    mk('はい。お父さんが造語ネーミングの天才でいらした','Yes — Dad coin-genius','Reflective','hiroshi_boss'),
    mk('お父さん、部外秘の情報管理を徹底された','Dad — outside-conf-strict','Wistful','hiroshi_elder'),
    mk('はい。お父さんは三越とも長くお付き合いされた','Yes — Dad Mitsukoshi-long','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10151',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、加工肉ミートの保存料研究を論文で扱いましたね','Ren — proc-meat-pres paper','Calm','asuka_teacher'),
    mk('はい、古代ヘブライ語文献の研究を論文で扱いました','Yes — Anc-Heb-lit paper','Earnest','ren_uni'),
    mk('蓮さん、ボリシェヴィキ革命の社会経済史を論文で扱いましたね','Ren — Bolsh-rev paper','Reflective','asuka_teacher'),
    mk('はい、音楽ストリーミング市場の研究を論文で扱いました','Yes — Music-stream paper','Earnest','ren_uni'),
    mk('細胞の非対称分裂を論文で扱いましたね','Cell-asym-div paper','Engaged','asuka_teacher'),
    mk('はい、政党の自滅的選挙戦略を論文で扱いました','Yes — Party-self-dest paper','Earnest','ren_uni'),
    mk('蓮さん、技能習熟の脳科学を論文で扱いましたね','Ren — skill-mastery-brain paper','Reflective','asuka_teacher'),
    mk('はい、災害時の人力輸送研究を論文で扱いました','Yes — Disas-manual-transp paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10152',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、ミート加工工場での労災を、警察、扱われますね','Case meat-fact-work-acc police-handle','Reflective','ren_uni'),
    mk('警察、ヘブライ語の暗号解読もされますね','Police Heb-decode','Cooperative','takeda_officer'),
    mk('本件、ボリシェヴィキ風の急進派団体を、警察、警戒されますね','Case Bolsh-rad-watch police','Reflective','ren_uni'),
    mk('警察、違法ストリーミング配信を取り締まりますね','Police illeg-stream-strict','Procedural','takeda_officer'),
    mk('本件、犯行現場の非対称な痕跡を、警察、鑑識されますね','Case scene-asym-trace police-forensic','Reflective','ren_uni'),
    mk('警察、容疑者の自滅的行動も把握されますね','Police suspect-self-dest-grasp','Cooperative','takeda_officer'),
    mk('本件、習熟した手口の犯人を、警察、追われますね','Case mastery-mod-pursue police','Reflective','ren_uni'),
    mk('警察、災害時は人力での救助もおこなわれますね','Police disas-manual-rescue','Close','takeda_officer'),
  ]},
  {id:'conv_10153',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、加工肉ミートの保存料研究を論文で扱いましたね','Sakura — proc-meat paper','Calm','asuka_teacher'),
    mk('はい、古代ヘブライ語文献の研究を論文で扱いました','Yes — Anc-Heb paper','Earnest teen','sakura_teen'),
    mk('ボリシェヴィキ革命の社会経済史を論文で扱いましたね','Bolsh-rev paper','Reflective','asuka_teacher'),
    mk('はい、音楽ストリーミング市場の研究を論文で扱いました','Yes — Music-stream paper','Earnest','sakura_teen'),
    mk('細胞の非対称分裂を論文で扱いましたね','Cell-asym paper','Engaged','asuka_teacher'),
    mk('はい、政党の自滅的選挙戦略を論文で扱いました','Yes — Party-self-dest paper','Earnest','sakura_teen'),
    mk('技能習熟の脳科学を論文で扱いましたね','Skill-mastery paper','Reflective','asuka_teacher'),
    mk('はい、災害時の人力輸送研究を論文で扱いました','Yes — Disas-manual paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10154',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、加工ミートの過剰摂取と健康影響を医療チームで研究します','Ren — proc-meat-excess-health med-team','Calm','saito_doctor'),
    mk('はい、ヘブライ語圏の患者にも医療チームで配慮します','Yes — Heb-pati med-team','Patient','saito_doctor'),
    mk('ボリシェヴィキ時代の医療制度を、貴院、参考にされてますね、先生','Bolsh-med-sys your-hosp ref, sensei','Reflective','ren_uni'),
    mk('はい、医療動画のストリーミング配信を医療チームで活用します','Yes — Med-vid-stream med-team','Patient','saito_doctor'),
    mk('蓮さん、患者の非対称な麻痺を医療チームで観察します','Ren — pati-asym-paral med-team','Calm','saito_doctor'),
    mk('はい、自滅的習慣の患者を医療チームでカウンセリングします','Yes — Self-dest-pati-couns med-team','Patient','saito_doctor'),
    mk('外科技術の習熟を、貴院、研修で進められてますね、先生','Surg-mastery-train your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、災害時の人力搬送も医療チームで訓練します','Yes — Disas-manual-transp med-team train','Patient close','saito_doctor'),
  ]},
  {id:'conv_10155',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、加工ミート事業を強化しろ','Our co — proc-meat-biz-strength','Crisp','hiroshi_boss'),
    mk('はい。ヘブライ語圏への翻訳事業も検討します','Yes — Heb-trans-cons','Methodical','kenji_office'),
    mk('当社、ボリシェヴィキ的な急進改革は避けろ','Our co — Bolsh-rad-avoid','Direction','hiroshi_boss'),
    mk('はい。社内動画のストリーミング配信を活用します','Yes — Co-vid-stream-use','Update','kenji_office'),
    mk('当社、非対称な戦略で大手に対抗しろ','Our co — asym-strat-major','Direction','hiroshi_boss'),
    mk('はい。自滅的な値下げ競争は致しません','Yes — Self-dest-price-no','Update','kenji_office'),
    mk('当社、社員の習熟を支援する研修を増やせ','Our co — staff-mastery-train-up','Direction','hiroshi_boss'),
    mk('はい。災害時には人力サポート体制も整えます','Yes — Disas-manual-supp-prep','Close','kenji_office'),
  ]},
  {id:'conv_10156',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、息子さんとキャッチボールが日課だって、メイちゃん','Aoi — cust-son-catch Mei','Tender','mei_romantic'),
    mk('葵、お客様、プーチン政権の本を読んでらしたよ、メイちゃん','Aoi — cust-Putin-book Mei','Reflective','aoi_barista'),
    mk('葵、お客様、チャングムというドラマがお好きだって、メイちゃん','Aoi — cust-Jangum-drama Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ビクトリア朝建築がお好きだって、メイちゃん','Aoi — cust-Vict-arch Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ヨコ並びのお席が好きだって、メイちゃん','Aoi — cust-side-seat Mei','Reflective','mei_romantic'),
    mk('葵、お客様、東海道五十三次を辿る旅されたって、メイちゃん','Aoi — cust-Tokaido-trip Mei','Reflective','aoi_barista'),
    mk('葵、お客様、米国ゴア元副大統領の本を読んでらしたよ、メイちゃん','Aoi — cust-Gore-book Mei','Reflective','mei_romantic'),
    mk('葵、お客様、カーナビゲーションを買い替えたって、メイちゃん','Aoi — cust-car-nav-replace Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10157',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんと息子がキャッチボールを楽しんだ','Gran — youth Dad-son-catch','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、プーチン政権の動向をご覧になってたわよね、あなた?','Yes — Grandpa-Putin-watch, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがチャングムの韓ドラを観てらした','Gran — youth Dad-Jangum-K-drama','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ビクトリア女王の伝記を愛読されたわよね、あなた?','Grandpa — Vict-bio-read, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがヨコの繋がりを大事にされた','Gran — youth Dad-side-conn-cherish','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、東海道新幹線開業を喜ばれたわよね、あなた?','Grandpa — Tokaido-Shink-open-glad, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがゴア元副大統領の演説を聴かれた','Gran — youth Dad-Gore-speech','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ナビゲーションを使いこなしてらしたわよね、あなた?','Grandpa — nav-master, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10158',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんとキャッチボールするのが楽しみよね','Sho — Dad-catch-fun','Tender','mei_romantic'),
    mk('メイ姉さん、お父さんがプーチン政権のニュースをご覧になってたよ','Mei-sis — Dad-Putin-news','Reflective child','sho_child'),
    mk('翔くん、お父さんがチャングムのDVDを貸して下さるそうよ','Sho — Dad-Jangum-DVD-lend','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとビクトリア朝の絵本見たよ','Mei-sis — me Dad-Vict-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがヨコ書きの絵本を読んで下さるそうよ','Sho — Dad-side-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと東海道線で旅したいよ','Mei-sis — me Dad-Tokaido-trip-want','Eager child','sho_child'),
    mk('翔くん、お父さんがゴア元副大統領の環境本を貸して下さったわ','Sho — Dad-Gore-env-book-lend','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとナビゲーションのアプリ使ったよ','Mei-sis — me Dad-nav-app','Eager close','sho_child'),
  ]},
  {id:'conv_10159',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、お父さんとキャッチボールしてたな','Riku — Dad-catch','Curious teen','sakura_teen'),
    mk('お前、社会でプーチン政権習ったろ?桜','You — soc-Putin? Sakura','Curious','riku_teen'),
    mk('リク、お前、家族でチャングム観てたな','Riku — fam-Jangum-watch','Curious','sakura_teen'),
    mk('お前、世界史でビクトリア女王習ったろ?桜','You — wld-hist-Vict? Sakura','Curious','riku_teen'),
    mk('リク、お前、教室のヨコ列に座ってたな','Riku — class-side-row-sit','Curious','sakura_teen'),
    mk('お前、修学旅行で東海道線使ったろ?桜','You — sch-trip-Tokaido? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会でゴア元副大統領習ったろ?','Riku — soc-Gore?','Curious','sakura_teen'),
    mk('お前、自転車にナビゲーション付けてたな、桜','You — bike-nav-attach Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10160',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんとキャッチボールに行ってらっしゃい','Sho — Dad-catch-go','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとプーチン政権のニュース見たよ','Mom — me Dad-Putin-news','Eager child','sho_child'),
    mk('翔くん、お父さんがチャングムのDVDを観られたわ','Sho — Dad-Jangum-DVD','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとビクトリア女王の絵本見たよ','Mom — me Dad-Vict-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがヨコ書きの英語本も読んで下さるわ','Sho — Dad-side-Eng-read','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと東海道線の旅したよ','Mom — me Dad-Tokaido-trip','Eager child','sho_child'),
    mk('翔くん、お父さんがゴア元副大統領の環境本をご覧になったわ','Sho — Dad-Gore-env-book','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとナビゲーションのアプリ使ったよ','Mom — me Dad-nav-app','Eager close','sho_child'),
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

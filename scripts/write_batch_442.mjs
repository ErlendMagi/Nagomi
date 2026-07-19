import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_442 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['一寸','やむなく','専ら','例える','かねてから','しなやか','でたらめ','おとなしい']
const B_T = ['縮減','教示','貸し付け','取り付ける','通帳','差し止め','持ち株','引き下げる']
const C_T = ['吸着','触発','技量','施術','力説','肝炎','訪米','致死']
const D_T = ['戦隊','唐辛子','車いす','垣根','熱海','ウェディング','アロハ','ミント']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08801',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、一寸お母さんを手伝ってくれない?','Sho — little-help?','Caring','yumiko_mom'),
    mk('ママ、ぼく、雨でやむなくお家にいたよ','Mom — me rain-reluct-home','Earnest child','sho_child'),
    mk('翔くん、お父さんは専ら新聞を読まれるのよ','Sho — Dad-only-news-read','Reflective','yumiko_mom'),
    mk('ママ、お祖父ちゃんが「人生を花に例えると」って仰ってたよ','Mom — Grandpa-"life-flower-compare"-said','Reflective child','sho_child'),
    mk('翔くん、お父さんはかねてから旅行を計画されてたわ','Sho — Dad-long-time-trip-plan','Reflective','yumiko_mom'),
    mk('ママ、ぼく、しなやかな猫みたいに動きたいよ','Mom — me supple-cat-move-want','Eager child','sho_child'),
    mk('翔くん、でたらめなお話は信じないようにね','Sho — random-story-not-believe','Direction','yumiko_mom'),
    mk('ママ、ぼく、おとなしい子だってお祖父ちゃんが仰ったよ','Mom — me quiet-kid-Grandpa-said','Proud close','sho_child'),
  ]},
  {id:'conv_08802',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、一寸お時間いいかしら、メイちゃん','Aoi — little-time-OK Mei','Brisk','mei_romantic'),
    mk('葵、雨でやむなく外を出歩けないお客様、お気の毒ね、メイちゃん','Aoi — rain-reluct-out-cust-sad Mei','Reflective','aoi_barista'),
    mk('葵、お客様、専らご友人とお見えになるよね、メイちゃん','Aoi — cust-only-friend-visit Mei','Reflective','mei_romantic'),
    mk('葵、お店の雰囲気を森に例えるって、お客様おっしゃってたよ、メイちゃん','Aoi — store-feel-forest-compare-cust-said Mei','Pleased','aoi_barista'),
    mk('葵、新メニューはかねてから準備してたよね、メイちゃん','Aoi — new-menu-long-time-prep Mei','Reflective','mei_romantic'),
    mk('葵、しなやかな所作で接客しましょう、メイちゃん','Aoi — supple-svc Mei','Direction','aoi_barista'),
    mk('葵、ネット上のでたらめな書き込みは無視しましょう、メイちゃん','Aoi — net-random-post-ignore Mei','Direction','mei_romantic'),
    mk('葵、お客様、おとなしいけど熱心なファンよ、メイちゃん','Aoi — cust-quiet-zeal-fan Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08803',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは一寸照れ屋でいらしたぞ','Gran — youth Dad-little-shy','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、やむなくお仕事を辞められたわよね、あなた?','Yes — Grandpa-reluct-quit, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんは専ら書物の収集にお金を使われたぞ','Gran — Dad-only-book-collect-money','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、人生を旅に例えていらしたわよね、あなた?','Grandpa — life-trip-compare, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはかねてから故郷を想っていらしたぞ','Gran — youth Dad-long-time-hometown','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、晩年もしなやかなお心をお持ちでらしたわよね、あなた?','Grandpa — late-yrs-supple-heart, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんはでたらめなお話には乗らない方だったぞ','Gran — Dad-random-not-join','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様は皆おとなしい子でしたわよね、あなた?','Grandpa — grandkid-all-quiet, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08804',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、一寸ノート貸してくれ','Riku — little-notebook-lend','Brisk teen','sakura_teen'),
    mk('お前、テスト中、やむなく答え書けなかったろ、桜','You — test-reluct-no-answer Sakura','Wry','riku_teen'),
    mk('リク、お前、専らゲームに使ってんなお小遣い','Riku — only-game-allowance','Wry','sakura_teen'),
    mk('お前、勉強を山登りに例えて言ってたな、桜','You — study-mountain-compare-said Sakura','Reflective','riku_teen'),
    mk('リク、お前、かねてから美術部入りたいって言ってたな','Riku — long-time-art-club-said','Reflective','sakura_teen'),
    mk('お前、しなやかに走るな、桜','You — supple-run Sakura','Praising','riku_teen'),
    mk('リク、お前、でたらめな答え書くなよ','Riku — random-answer-don\'t','Direction','sakura_teen'),
    mk('お前、教室ではおとなしいよな、桜','You — class-quiet Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_08805',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さん、一寸絵を描いていい?','Sho — Mei-sis-little-draw-OK?','Curious','mei_romantic'),
    mk('メイ姉さん、ぼく、雨でやむなくお家でお絵描きしたよ','Mei-sis — me rain-reluct-home-drew','Earnest child','sho_child'),
    mk('翔くん、メイ姉さんは専らお絵描きが趣味なのよ','Sho — Mei-sis-only-draw-hobby','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ぼくの夢をスーパーマンに例えたよ','Mei-sis — me dream-Superman-compare','Eager child','sho_child'),
    mk('翔くん、メイ姉さんはかねてから翔くんに絵を教えたかったのよ','Sho — Mei-sis-long-time-Sho-teach-want','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、しなやかな線で絵を描きたいよ','Mei-sis — me supple-line-draw-want','Eager child','sho_child'),
    mk('翔くん、でたらめなお話を作らないでね','Sho — random-story-not-make','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、おとなしい妹欲しいよ','Mei-sis — me quiet-sister-want','Eager close','sho_child'),
  ]},
  {id:'conv_08806',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、経費を縮減しろ','Our co — cost-reduce','Crisp','hiroshi_boss'),
    mk('はい。お得意様にも丁寧にご教示いたします','Yes — VIP-careful-teach','Methodical','kenji_office'),
    mk('当社、お得意様への貸し付け限度額を見直せ','Our co — VIP-loan-limit-review','Direction','hiroshi_boss'),
    mk('はい。電光看板を取り付ける手配を進めました','Yes — LED-sign-install-progress','Update','kenji_office'),
    mk('当社、社員の通帳管理に厳しく対応しろ','Our co — staff-passbook-mgmt-strict','Direction','hiroshi_boss'),
    mk('はい。違法販売の差し止め申請を準備しております','Yes — Illegal-sale-stop-app-prep','Update','kenji_office'),
    mk('当社、持ち株比率を見直せ','Our co — shareholding-review','Direction','hiroshi_boss'),
    mk('はい。仕入れ価格を引き下げる交渉を進めます','Yes — Buy-price-lower-nego','Close','kenji_office'),
  ]},
  {id:'conv_08807',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('社内研修で経費縮減のヒントを共有しましょう','Co-train-cost-reduce-tip-share','Brisk','yuki_office'),
    mk('はい。新人にも基本操作をご教示します','Yes — Newbie-basic-op-teach','Cooperative','kenji_office'),
    mk('お取引先への貸し付け状況を確認しましょう','Partner-loan-status-check','Direction','yuki_office'),
    mk('はい。受付に防犯ブザーを取り付ける手配中です','Yes — Recep-alarm-install-progress','Update','kenji_office'),
    mk('社員の通帳記帳代行は禁止しましょう','Staff-passbook-proxy-ban','Direction','yuki_office'),
    mk('はい。コピー商品の差し止め申請を検討中です','Yes — Copy-prod-stop-app-consider','Update','kenji_office'),
    mk('役員の持ち株割合を確認しましょう','Exec-shareholding-check','Direction','yuki_office'),
    mk('はい。手数料を引き下げる方針です','Yes — Fee-lower-policy','Close','kenji_office'),
  ]},
  {id:'conv_08808',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究費の縮減方策を考えろ','Ren — research-fund-reduce-plan','Mentor','hiroshi_boss'),
    mk('はい。新人にデータ整理をご教示しております','Yes — Newbie-data-org-teach','Earnest','ren_uni'),
    mk('蓮、研究機材の貸し付け制度を活用しろ','Ren — research-equip-loan-system','Direction','hiroshi_boss'),
    mk('はい。実験装置を新たに取り付ける手配をしました','Yes — Exp-device-new-install-arr','Polite','ren_uni'),
    mk('蓮、研究費の通帳管理を厳格にしろ','Ren — research-fund-passbook-strict','Direction','hiroshi_boss'),
    mk('はい。論文の差し止め命令にも対応します','Yes — Paper-stop-order-resp','Earnest','ren_uni'),
    mk('蓮、共同研究の持ち株的な役割分担を確認しろ','Ren — joint-research-share-role-check','Direction','hiroshi_boss'),
    mk('はい。試薬の単価を引き下げる交渉に努力します','Yes — Reagent-price-lower-effort','Earnest close','ren_uni'),
  ]},
  {id:'conv_08809',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、地域の犯罪を縮減する活動を継続します','Police local-crime-reduce-cont','Calm','takeda_officer'),
    mk('はい。警察、市民にも対策をご教示頂きありがたいです','Yes — Police citizen-counter-teach grateful','Cooperative','kenji_office'),
    mk('警察、不正貸し付け業者を摘発します','Police illegal-loan-vendor-bust','Procedural','takeda_officer'),
    mk('はい。警察、防犯カメラを取り付ける助成事業ですね','Yes — Police crime-cam-install-subsidy','Cooperative','kenji_office'),
    mk('警察、犯罪収益の通帳を捜査します','Police crime-profit-passbook-inv','Procedural','takeda_officer'),
    mk('はい。警察、違法薬物の差し止めを行いますね','Yes — Police illegal-drug-stop','Cooperative','kenji_office'),
    mk('警察、企業の持ち株偽装の捜査も進めます','Police corp-share-fake-inv','Procedural','takeda_officer'),
    mk('はい。警察、賄賂を引き下げる啓発活動、ありがたいです','Yes — Police bribe-lower-edu-act grateful','Close','kenji_office'),
  ]},
  {id:'conv_08810',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、無駄を縮減する精神を貫かれたぞ','Dad — founding waste-reduce-spirit','Sage','hiroshi_elder'),
    mk('はい。お父さんは社員に経営の心得を教示された','Yes — Dad staff-mgmt-creed-taught','Commitment','hiroshi_boss'),
    mk('お父さん、お取引先に貸し付けで支援されたぞ','Dad — partner-loan-supp','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社屋に手すりを取り付ける配慮もされた','Yes — Dad bldg-handrail-install-care','Reflective','hiroshi_boss'),
    mk('お父さん、通帳を自ら管理されたぞ','Dad — passbook-self-mgmt','Wistful','hiroshi_elder'),
    mk('はい。お父さんはコピー商品の差し止め訴訟を起こされた','Yes — Dad copy-prod-stop-suit','Reflective','hiroshi_boss'),
    mk('お父さん、持ち株戦略を巧みに組まれたぞ','Dad — share-strat-skill','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員給与を絶対に引き下げる事はなかった','Yes — Dad staff-salary never-lower','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08811',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、汚染物質の吸着技術を論文で扱いましたね','Ren — pollut-ads-tech paper','Calm','asuka_teacher'),
    mk('はい、芸術運動の触発要因を論文で扱いました','Yes — Art-mov-inspir-factor paper','Earnest','ren_uni'),
    mk('蓮さん、伝統工芸の技量継承を論文で扱いましたね','Ren — trad-craft-skill-inh paper','Reflective','asuka_teacher'),
    mk('はい、古代の医療施術記録を論文で扱いました','Yes — Anc-med-proc-rec paper','Earnest','ren_uni'),
    mk('蓮さん、論文で人権の重要性を力説しましたね','Ren — paper-human-rights-emph','Engaged','asuka_teacher'),
    mk('はい、肝炎ウイルスの流行史を論文で扱いました','Yes — Hep-virus-epi-hist paper','Earnest','ren_uni'),
    mk('蓮さん、首脳の訪米史を論文で扱いましたね','Ren — PM-US-visit-hist paper','Reflective','asuka_teacher'),
    mk('はい、毒物の致死量研究を論文で扱いました','Yes — Toxin-lethal-dose paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08812',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、現場の物質吸着サンプルを警察、採取されてますね','Case on-site-ads-sample police-collect','Reflective','ren_uni'),
    mk('警察、容疑者を触発する報道を警戒します','Police suspect-inspir-report-watch','Procedural','takeda_officer'),
    mk('本件、警察の技量に頼っております','Case police-skill-rely','Reflective','ren_uni'),
    mk('警察、不法施術医療業者を摘発します','Police illegal-proc-med-vendor-bust','Procedural','takeda_officer'),
    mk('本件、警察、市民安全の重要性を力説されてますね','Case police-citizen-safety-emph','Reflective','ren_uni'),
    mk('警察、肝炎キャリア被害者の支援にも対応します','Police hep-carrier-victim-supp','Procedural','takeda_officer'),
    mk('本件、訪米中の要人の警備を警察、ご担当ですね','Case US-visit-VIP-guard police-handle','Reflective','ren_uni'),
    mk('警察、致死性毒物の流通を厳格に取り締まります','Police lethal-toxin-dist-strict-crack','Close','takeda_officer'),
  ]},
  {id:'conv_08813',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、汚染物質の吸着技術を論文で扱いましたね','Sakura — pollut-ads paper','Calm','asuka_teacher'),
    mk('はい、芸術運動の触発要因を論文で扱いました','Yes — Art-inspir paper','Earnest teen','sakura_teen'),
    mk('伝統工芸の技量継承を論文で扱いましたね','Trad-craft-skill paper','Reflective','asuka_teacher'),
    mk('はい、古代の医療施術記録を論文で扱いました','Yes — Anc-med-proc paper','Earnest','sakura_teen'),
    mk('論文で人権の重要性を力説しましたね','Paper-rights-emph','Engaged','asuka_teacher'),
    mk('はい、肝炎ウイルスの流行史を論文で扱いました','Yes — Hep-virus paper','Earnest','sakura_teen'),
    mk('首脳の訪米史を論文で扱いましたね','PM-US-visit paper','Reflective','asuka_teacher'),
    mk('はい、毒物の致死量研究を論文で扱いました','Yes — Toxin-lethal paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08814',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、薬の吸着特性を医療チームで研究しております','Ren — drug-ads-prop med-team research','Calm','saito_doctor'),
    mk('はい、患者さんを触発するメンタルケアを医療チームで担当します','Yes — Patient-inspir-mental med-team','Patient','saito_doctor'),
    mk('医師の技量向上のための研修を、貴院、なさってるそうですね、先生','Doctor-skill-imp-train your-hosp do, sensei','Curious','ren_uni'),
    mk('はい、内視鏡施術の練度向上を医療チームで継続します','Yes — Endo-proc-skill-cont','Patient','saito_doctor'),
    mk('医療チームから検診の重要性を力説されてますね、先生','Med-team-checkup-emph, sensei','Reflective','ren_uni'),
    mk('はい、肝炎患者の治療を医療チームで担当します','Yes — Hep-patient-treat med-team','Patient','saito_doctor'),
    mk('国際医療会議で訪米される予定なんですね、先生','Int-med-conf-US-visit, sensei','Curious','ren_uni'),
    mk('はい、致死量に達しない範囲での投薬を医療チームで徹底します','Yes — Sub-lethal-dose med-team strict','Patient close','saito_doctor'),
  ]},
  {id:'conv_08815',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、フィルターの吸着性能を改良しろ','Our co — filter-ads-perf-improve','Crisp','hiroshi_boss'),
    mk('はい。社員を触発するイベントを企画します','Yes — Staff-inspir-event-plan','Methodical','kenji_office'),
    mk('当社、社員の技量を可視化しろ','Our co — staff-skill-visualize','Direction','hiroshi_boss'),
    mk('はい。施術機器メーカーとの提携を検討中です','Yes — Proc-equip-maker-partner-consider','Update','kenji_office'),
    mk('当社、新製品の優位性を市場に力説しろ','Our co — new-prod-adv-market-emph','Direction','hiroshi_boss'),
    mk('はい。肝炎関連の医療事業にも参入を検討します','Yes — Hep-rel-med-biz-enter-consider','Update','kenji_office'),
    mk('当社、社長の訪米日程を調整しろ','Our co — pres-US-visit-sched-coord','Direction','hiroshi_boss'),
    mk('はい。製品の致死的リスクをゼロにする目標で進めます','Yes — Prod-lethal-risk-zero-aim','Close','kenji_office'),
  ]},
  {id:'conv_08816',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、お子様が戦隊ヒーローに夢中なんだって、メイちゃん','Aoi — cust-child-sentai-into Mei','Pleased','mei_romantic'),
    mk('葵、新メニュー、唐辛子入りオリーブオイル使いましょう、メイちゃん','Aoi — new-menu-chili-olive Mei','Animated','aoi_barista'),
    mk('葵、お客様、車いすでお見えになるから、お席を準備しましょう、メイちゃん','Aoi — cust-wheelchair-seat-prep Mei','Direction','mei_romantic'),
    mk('葵、お店の前の垣根、整えたいわね、メイちゃん','Aoi — store-hedge-trim Mei','Reflective','aoi_barista'),
    mk('葵、お客様、熱海の温泉旅行から帰ってこられたって、メイちゃん','Aoi — cust-Atami-onsen-back Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ウェディングプランナーのお仕事だって、メイちゃん','Aoi — cust-wedding-planner Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ハワイのお土産でアロハシャツくれたよ、メイちゃん','Aoi — cust-Hawaii-souv-aloha-gave Mei','Pleased','mei_romantic'),
    mk('葵、新メニュー、ミントレモネード作りましょう、メイちゃん','Aoi — new-menu-mint-lemonade Mei','Animated close','aoi_barista'),
  ]},
  {id:'conv_08817',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが戦隊ものをお孫様と観てらしたぞ','Gran — youth Dad-sentai-grandkid-watch','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、唐辛子のお料理がお好きでらしたわよね、あなた?','Yes — Grandpa-chili-cuisine-loved, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お母様が車いすで生活されたぞ','Gran — youth Mom-wheelchair-life','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お庭の垣根を刈り込まれたわよね、あなた?','Grandpa — garden-hedge-trim, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと熱海に旅行したぞ','Gran — youth Dad-Atami-trip','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様のウェディングを楽しみにしてらしたわよね、あなた?','Grandpa — grandkid-wedding-look-forward, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがアロハシャツでハワイに行かれたぞ','Gran — youth Dad-aloha-Hawaii-went','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、夏はミントティーを召し上がってらしたわよね、あなた?','Grandpa — summer-mint-tea-drank, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08818',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが戦隊もののDVD買ってくれたんだって?','Sho — Dad-sentai-DVD-bought?','Curious','mei_romantic'),
    mk('メイ姉さん、ぼく、唐辛子のお菓子は辛くて食べられないよ','Mei-sis — me chili-snack-spicy','Wry child','sho_child'),
    mk('翔くん、おじいちゃんが車いすで散歩に行かれるのよ','Sho — Grandpa-wheelchair-walk','Reflective','mei_romantic'),
    mk('メイ姉さん、お庭の垣根に小鳥が止まっていたよ','Mei-sis — garden-hedge-bird','Eager child','sho_child'),
    mk('翔くん、お父さんと熱海の温泉行きたいわね','Sho — Dad-Atami-onsen-want','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんのウェディング楽しみだよ','Mei-sis — me Mei-sis-wedding-look-forward','Eager child','sho_child'),
    mk('翔くん、メイ姉さんがハワイ土産でアロハシャツくれたわよね','Sho — Mei-sis-Hawaii-aloha-gave','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、ミントアイス大好きだよ','Mei-sis — me mint-ice-love','Eager close','sho_child'),
  ]},
  {id:'conv_08819',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、戦隊もの卒業したろ?','Riku — sentai-grad?','Wry teen','sakura_teen'),
    mk('お前、唐辛子の辛さに弱いよな、桜','You — chili-spicy-weak Sakura','Wry','riku_teen'),
    mk('リク、お前、車いすバスケのボランティアやってんだろ?','Riku — wheelchair-bball-volunteer?','Curious','sakura_teen'),
    mk('お前、社会で垣根のあるご近所の単元やったろ?桜','You — soc-hedge-neighbor-unit? Sakura','Curious','riku_teen'),
    mk('リク、お前、家族で熱海に行ったろ?','Riku — fam-Atami?','Curious','sakura_teen'),
    mk('お前、ウェディング雑誌、見てたろ?桜','You — wedding-mag-saw? Sakura','Wry','riku_teen'),
    mk('リク、お前、夏祭りでアロハ着てたな','Riku — summer-fest-aloha-wore','Reflective','sakura_teen'),
    mk('お前、ミントガム噛んでばっかだな、桜','You — mint-gum-only Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_08820',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが戦隊ヒーローのおもちゃ買ってきて下さったわ','Sho — Dad-sentai-toy-bought','Reflective','yumiko_mom'),
    mk('ママ、ぼく、唐辛子無しで食べたい','Mom — me chili-no-eat-want','Wry child','sho_child'),
    mk('翔くん、お祖父ちゃんが車いすでもお元気に散歩してらっしゃるわ','Sho — Grandpa-wheelchair-walk','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんがお家の垣根を直してくれたよ','Mom — me Grandpa-home-hedge-fixed','Eager child','sho_child'),
    mk('翔くん、お父さんと熱海の温泉に行きましょうね','Sho — Dad-Atami-onsen-go','Tender','yumiko_mom'),
    mk('ママ、ぼく、いつかメイ姉さんのウェディング、見たいよ','Mom — me someday-Mei-sis-wedding-see','Eager child','sho_child'),
    mk('翔くん、お父さんがアロハシャツでお出かけなさったわ','Sho — Dad-aloha-out','Reflective','yumiko_mom'),
    mk('ママ、ぼく、ミント味のチョコ食べたい','Mom — me mint-choc-want','Eager close','sho_child'),
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

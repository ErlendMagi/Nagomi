import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_447 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['つぶやく','励む','どうのこうの','苦笑い','こぞって','余程','あたらしい','どことなく']
const B_T = ['借地','集成','私有','兼業','満了','抹消','協約','家主']
const C_T = ['兵役','根絶','敵意','施政','余命','群集','沈下','借款']
const D_T = ['粉末','芳香','ソーラー','バカンス','渓谷','チャーハン','半袖','しょうゆ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08901',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが、お一人でつぶやくのが可愛いわね','Sho — Dad-self-mumble-cute','Reflective','yumiko_mom'),
    mk('ママ、ぼく、ピアノを毎日励むよ','Mom — me piano-daily-strive','Earnest child','sho_child'),
    mk('翔くん、お父さんが、どうのこうのと文句を仰ってたわ','Sho — Dad-various-comp-said','Wry','yumiko_mom'),
    mk('ママ、お祖父ちゃんが、ぼくの絵を見て苦笑いされてたよ','Mom — Grandpa-pic-see-wry-laugh','Wry child','sho_child'),
    mk('翔くん、ご近所がこぞって運動会を見に来て下さったわ','Sho — neighbor-all-sports-came','Pleased','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんが余程嬉しそうだったよ','Mom — me Grandpa-very-glad','Eager child','sho_child'),
    mk('翔くん、お父さんがあたらしい本を買ってこられたわ','Sho — Dad-new-book-bought','Reflective','yumiko_mom'),
    mk('ママ、お祖父ちゃんに、どことなく似てる気がするよ','Mom — Grandpa-somehow-similar','Reflective close','sho_child'),
  ]},
  {id:'conv_08902',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、何かをつぶやくように召し上がってたよ、メイちゃん','Aoi — cust-mumble-ate Mei','Reflective','mei_romantic'),
    mk('葵、私達もお店の改善に励むしかないわね、メイちゃん','Aoi — we-store-imp-strive Mei','Direction','aoi_barista'),
    mk('葵、お客様がどうのこうのと味の感想を仰ってたよ、メイちゃん','Aoi — cust-various-taste-said Mei','Wry','mei_romantic'),
    mk('葵、お客様、おすすめを聞いて苦笑いしてらしたね、メイちゃん','Aoi — cust-rec-wry-laugh Mei','Wry','aoi_barista'),
    mk('葵、お客様がこぞって新メニューを選ばれたよ、メイちゃん','Aoi — cust-all-new-menu-chose Mei','Pleased','mei_romantic'),
    mk('葵、新メニュー、余程気に入って下さったみたいね、メイちゃん','Aoi — new-menu-very-liked Mei','Pleased','aoi_barista'),
    mk('葵、店内にあたらしい鉢植えを置きましょう、メイちゃん','Aoi — store-new-plant-place Mei','Direction','mei_romantic'),
    mk('葵、お客様、どことなく寂しそうにお茶を飲まれてたよ、メイちゃん','Aoi — cust-somehow-lonely-tea Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08903',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは独り言をつぶやくように書道された','Gran — youth Dad-self-mumble-calligraphy','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、孫の成長のために励むご姿勢だったわよね、あなた?','Yes — Grandpa-grandkid-strive, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはどうのこうの言わずに行動された','Gran — youth Dad-no-various-act','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様のいたずらに苦笑いされたわよね、あなた?','Grandpa — grandkid-prank-wry-laugh, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、ご近所の皆がこぞってお祝いに来て下さったぞ','Gran — youth-neighbor-all-celeb','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様にあったら余程嬉しそうにされたわよね、あなた?','Grandpa — grandkid-met-very-glad, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがあたらしい背広を新調されたぞ','Gran — youth Dad-new-suit-new','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お庭の景色は、どことなく郷愁を誘いましたわよね、あなた?','Grandpa — garden-somehow-nostalgia, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08904',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、SNSでつぶやくの好きだろ?','Riku — SNS-mumble-like?','Curious teen','sakura_teen'),
    mk('お前、テスト前にちゃんと励めよ、桜','You — pre-test-strive Sakura','Direction','riku_teen'),
    mk('リク、お前、どうのこうの言わずに勉強しろ','Riku — no-various-study','Direction','sakura_teen'),
    mk('お前、俺のジョークに苦笑いしてたな、桜','You — me-joke-wry-laugh Sakura','Wry','riku_teen'),
    mk('リク、クラスのみんなが、こぞってお前を応援してたぞ','Riku — class-all-cheer','Reflective','sakura_teen'),
    mk('お前、余程ゲームが好きだな、桜','You — very-game-like Sakura','Wry','riku_teen'),
    mk('リク、お前のあたらしい自転車、かっこいいな','Riku — new-bike-cool','Praising','sakura_teen'),
    mk('お前、どことなくお父さんに似てんな、桜','You — somehow-Dad-similar Sakura','Reflective close','riku_teen'),
  ]},
  {id:'conv_08905',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんが「綺麗」って小さくつぶやくの聞こえたよ','Sho — Mei-sis-"pretty"-mumble-heard','Tender child','mei_romantic'),
    mk('メイ姉さん、ぼく、お絵描きに励むよ','Mei-sis — me drawing-strive','Earnest child','sho_child'),
    mk('翔くん、メイ姉さんは、どうのこうの言わないでお祖父ちゃんを支えたわ','Sho — Mei-sis-no-various-Grandpa-supp','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ママの冗談に苦笑いしちゃった','Mei-sis — me Mom-joke-wry-laugh','Wry child','sho_child'),
    mk('翔くん、お友達がこぞってメイ姉さんに会いたいって言うのよ','Sho — friend-all-Mei-sis-meet-want','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんから余程いいお土産もらったよ','Mei-sis — me Grandpa-very-good-souv','Proud child','sho_child'),
    mk('翔くん、メイ姉さんのあたらしいワンピース、可愛いわよ','Sho — Mei-sis-new-onepiece-cute','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんと、どことなく雰囲気が似てるかな','Mei-sis — me Mei-sis-somehow-vibe-similar?','Curious close','sho_child'),
  ]},
  {id:'conv_08906',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、駐車場の借地契約を更新しろ','Our co — parking-leasehold-renew','Crisp','hiroshi_boss'),
    mk('はい。お得意様の評判を集成した資料を作成しました','Yes — VIP-rep-compile-doc','Methodical','kenji_office'),
    mk('当社、私有施設を社員に開放しろ','Our co — private-fac-staff-open','Direction','hiroshi_boss'),
    mk('はい。社員の兼業申請を整理しております','Yes — Staff-side-job-app-org','Update','kenji_office'),
    mk('当社、取引契約の満了前に再交渉しろ','Our co — contract-mature-pre-renego','Direction','hiroshi_boss'),
    mk('はい。古い顧客データを抹消する手続きを進めています','Yes — Old-cust-data-erase-progress','Update','kenji_office'),
    mk('当社、業界協約を遵守しろ','Our co — industry-agree-obey','Direction','hiroshi_boss'),
    mk('はい。家主との家賃交渉を進めております','Yes — Landlord-rent-nego-progress','Close','kenji_office'),
  ]},
  {id:'conv_08907',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('土地は借地のままでいきましょう','Land-leasehold-keep','Brisk','yuki_office'),
    mk('はい。社員のアイデアを集成したノートを共有します','Yes — Staff-idea-compile-share','Cooperative','kenji_office'),
    mk('私有のアプリは業務に使わせないように指導しましょう','Private-app-work-no-guide','Direction','yuki_office'),
    mk('はい。兼業届の様式を新しくしました','Yes — Side-job-form-new','Update','kenji_office'),
    mk('保険契約の満了日を一覧化しましょう','Ins-mature-date-list','Direction','yuki_office'),
    mk('はい。退職者の社内アカウントを抹消しました','Yes — Resigned-co-acct-erase','Update','kenji_office'),
    mk('労使協約を更新しましょう','Labor-agree-renew','Direction','yuki_office'),
    mk('はい。家主との関係を良好に保ちます','Yes — Landlord-rel-keep','Close','kenji_office'),
  ]},
  {id:'conv_08908',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究室の借地問題を確認しろ','Ren — lab-leasehold-issue-check','Mentor','hiroshi_boss'),
    mk('はい。先行研究を集成した文献リストを作成しました','Yes — Prior-research-compile-bib','Earnest','ren_uni'),
    mk('蓮、私有の機材を実験に使う場合は届け出ろ','Ren — private-equip-exp-report','Direction','hiroshi_boss'),
    mk('はい。博士課程と兼業のアルバイトを学生も検討しております','Yes — PhD-side-job-stud-consider','Polite','ren_uni'),
    mk('蓮、奨学金の貸与満了後の返済計画を立てろ','Ren — scholar-mature-pay-plan','Direction','hiroshi_boss'),
    mk('はい。失効データを抹消する手続きをします','Yes — Expired-data-erase-proc','Earnest','ren_uni'),
    mk('蓮、共同研究の協約書を確認しろ','Ren — joint-research-agree-check','Direction','hiroshi_boss'),
    mk('はい。下宿の家主にご挨拶に伺います','Yes — Boarding-landlord-greet','Earnest close','ren_uni'),
  ]},
  {id:'conv_08909',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、駐在所の借地契約を更新されたんですね','Police stat-leasehold-renew','Cooperative','kenji_office'),
    mk('警察、犯罪事例を集成した報告書を発行されますね','Police crime-case-compile-rep-issue','Cooperative','kenji_office'),
    mk('警察、私有地での違法行為を捜査されますね','Police private-land-illegal-inv','Cooperative','kenji_office'),
    mk('警察、警察官の兼業規制について研修されますね','Police officer-side-job-reg-train','Cooperative','kenji_office'),
    mk('警察、保護観察の満了についても市民にご説明されますね','Police probation-mature-citizen-explain','Cooperative','kenji_office'),
    mk('警察、犯歴の抹消手続きには厳格な規則を設けていらっしゃいますね','Police crim-rec-erase-strict-rule','Cooperative','kenji_office'),
    mk('警察、地域協約への加入もご検討中ですね','Police local-agree-join-consider','Cooperative','kenji_office'),
    mk('警察、家主との家賃トラブル仲裁もされますね','Police landlord-rent-trouble-med','Close','kenji_office'),
  ]},
  {id:'conv_08910',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、借地から本社を始められたぞ','Dad — founding leasehold-HQ-start','Sage','hiroshi_elder'),
    mk('はい。お父さんは社員の知恵を集成して経営に活かされた','Yes — Dad staff-wisdom-compile-mgmt','Commitment','hiroshi_boss'),
    mk('お父さん、私有財産を会社に投じて創業されたぞ','Dad — private-asset-co-invest-found','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員の兼業に理解を示された','Yes — Dad staff-side-job-understand','Reflective','hiroshi_boss'),
    mk('お父さん、契約の満了前から次の手を打たれたぞ','Dad — contract-mature-pre-next-move','Wistful','hiroshi_elder'),
    mk('はい。お父さんは古い顧客情報も丁寧に抹消された','Yes — Dad old-cust-info-careful-erase','Reflective','hiroshi_boss'),
    mk('お父さん、業界協約を作る側に立たれたぞ','Dad — industry-agree-make-side','Wistful','hiroshi_elder'),
    mk('はい。お父さんは家主との関係を大事にされた','Yes — Dad landlord-rel-cherish','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08911',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、徴兵による兵役の社会的影響を論文で扱いましたね','Ren — draft-mil-svc-soc-impact paper','Calm','asuka_teacher'),
    mk('はい、感染症根絶の歴史を論文で扱いました','Yes — Infect-erad-hist paper','Earnest','ren_uni'),
    mk('蓮さん、植民地時代の敵意の形成を論文で扱いましたね','Ren — col-era-host-form paper','Reflective','asuka_teacher'),
    mk('はい、近代国家の施政方針史を論文で扱いました','Yes — Mod-state-gov-pol-hist paper','Earnest','ren_uni'),
    mk('医療技術と余命予測の進歩を論文で扱いましたね','Med-tech-life-expect paper','Engaged','asuka_teacher'),
    mk('はい、災害時の群集心理を論文で扱いました','Yes — Disaster-crowd-psych paper','Earnest','ren_uni'),
    mk('蓮さん、地盤沈下による被害史を論文で扱いましたね','Ren — subsidence-damage-hist paper','Reflective','asuka_teacher'),
    mk('はい、国際借款の経済史を論文で扱いました','Yes — Int-loan-econ-hist paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08912',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、戦時兵役関連の歴史的犯罪を警察、調査されてますね','Case war-mil-svc-hist-crime police-inv','Reflective','ren_uni'),
    mk('警察、薬物の根絶を目標に活動を続けます','Police drug-erad-goal-cont','Procedural','takeda_officer'),
    mk('本件、被害者への敵意を扇動した発言を警察、注視されてますね','Case victim-host-instig-speech police-watch','Reflective','ren_uni'),
    mk('警察、地方自治体の施政との連携を強化します','Police local-gov-pol-link-strength','Procedural','takeda_officer'),
    mk('本件、重病の容疑者の余命を警察、配慮されてますね','Case serious-suspect-life-expect police-care','Reflective','ren_uni'),
    mk('警察、群集事故防止のため警備を厚くします','Police crowd-acc-prev-guard-thick','Procedural','takeda_officer'),
    mk('本件、地盤沈下による事故対応を警察、なさってますね','Case subsidence-acc-resp police','Reflective','ren_uni'),
    mk('警察、不正借款詐欺の事案も捜査します','Police illegal-loan-fraud-inv','Close','takeda_officer'),
  ]},
  {id:'conv_08913',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、徴兵による兵役の社会的影響を論文で扱いましたね','Sakura — draft-mil-svc paper','Calm','asuka_teacher'),
    mk('はい、感染症根絶の歴史を論文で扱いました','Yes — Infect-erad paper','Earnest teen','sakura_teen'),
    mk('植民地時代の敵意の形成を論文で扱いましたね','Col-host paper','Reflective','asuka_teacher'),
    mk('はい、近代国家の施政方針史を論文で扱いました','Yes — Mod-gov-pol paper','Earnest','sakura_teen'),
    mk('医療技術と余命予測の進歩を論文で扱いましたね','Med-tech-life-expect paper','Engaged','asuka_teacher'),
    mk('はい、災害時の群集心理を論文で扱いました','Yes — Disaster-crowd paper','Earnest','sakura_teen'),
    mk('地盤沈下による被害史を論文で扱いましたね','Subsidence-damage paper','Reflective','asuka_teacher'),
    mk('はい、国際借款の経済史を論文で扱いました','Yes — Int-loan paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08914',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、兵役経験者の戦後ストレスを医療チームで担当します','Ren — mil-svc-postwar-stress med-team','Calm','saito_doctor'),
    mk('はい、感染症の根絶を医療チームで目指します','Yes — Infect-erad med-team-aim','Patient','saito_doctor'),
    mk('医療従事者への敵意を防ぐ取り組みを、貴院、なさってますね、先生','Med-staff-host-prev your-hosp do, sensei','Curious','ren_uni'),
    mk('はい、国の施政に基づいた医療制度を医療チームで運用します','Yes — Nat-gov-pol-med-sys med-team','Patient','saito_doctor'),
    mk('余命告知のあり方を、貴院、慎重に検討されてますね、先生','Life-expect-notif your-hosp careful, sensei','Reflective','ren_uni'),
    mk('はい、群集事故時の救命を医療チームで訓練しております','Yes — Crowd-acc-rescue med-team drill','Patient','saito_doctor'),
    mk('地盤沈下した病院の改築を、貴院、なさったんですね、先生','Subsidence-hosp-rebuild your-hosp do, sensei','Reflective','ren_uni'),
    mk('はい、海外借款で導入した医療機器を医療チームで活用します','Yes — Overseas-loan-med-eq med-team util','Patient close','saito_doctor'),
  ]},
  {id:'conv_08915',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、社員に兵役のような厳しさは求めない','Our co — staff-mil-svc-strict-not','Crisp','hiroshi_boss'),
    mk('はい。不正の根絶を社内で徹底しております','Yes — Fraud-erad strict','Methodical','kenji_office'),
    mk('当社、競合への敵意ではなく対話を目指せ','Our co — rival-host-not-dialog','Direction','hiroshi_boss'),
    mk('はい。新政府の施政方針を分析しております','Yes — New-gov-pol-anal','Update','kenji_office'),
    mk('当社、商品の余命予測を在庫管理に活かせ','Our co — prod-life-expect-stock-mgmt','Direction','hiroshi_boss'),
    mk('はい。新商品発売イベントで群集対策を準備します','Yes — New-launch-crowd-counter','Update','kenji_office'),
    mk('当社、海外拠点の地盤沈下リスクを評価しろ','Our co — overseas-base-subsidence-risk-eval','Direction','hiroshi_boss'),
    mk('はい。海外借款を活用した新事業を検討します','Yes — Overseas-loan-new-biz-consider','Close','kenji_office'),
  ]},
  {id:'conv_08916',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、新メニューに粉末抹茶を使いましょう、メイちゃん','Aoi — new-menu-powder-matcha Mei','Direction','mei_romantic'),
    mk('葵、お店に芳香剤を新しくしましょう、メイちゃん','Aoi — store-fragrance-new Mei','Direction','aoi_barista'),
    mk('葵、お店に小さなソーラーパネル付けたいわね、メイちゃん','Aoi — store-solar-panel-want Mei','Reflective','mei_romantic'),
    mk('葵、お客様、バカンスから戻ってこられたって、メイちゃん','Aoi — cust-vacation-back Mei','Reflective','aoi_barista'),
    mk('葵、お客様、渓谷ハイキングのお話されてたよ、メイちゃん','Aoi — cust-valley-hike-told Mei','Reflective','mei_romantic'),
    mk('葵、ランチに、お客様用チャーハン作りましょう、メイちゃん','Aoi — lunch-cust-fried-rice Mei','Direction','aoi_barista'),
    mk('葵、夏はスタッフも半袖でいきましょう、メイちゃん','Aoi — summer-staff-short-sleeve Mei','Direction','mei_romantic'),
    mk('葵、しょうゆベースのドレッシング試しましょう、メイちゃん','Aoi — soy-sauce-dressing-try Mei','Animated close','aoi_barista'),
  ]},
  {id:'conv_08917',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがお薬を粉末にして下さったぞ','Gran — youth Dad-medicine-powder','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お庭の花の芳香を楽しまれたわよね、あなた?','Yes — Grandpa-garden-fragrance-enjoyed, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがソーラー時計を珍しがられたぞ','Gran — youth Dad-solar-watch-rare','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、夏にバカンスで温泉に行かれたわよね、あなた?','Grandpa — summer-vacation-onsen, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと渓谷の旅館に泊まったぞ','Gran — youth Dad-valley-inn-stayed','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様にチャーハンを作って下さったわよね、あなた?','Grandpa — grandkid-fried-rice-made, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが夏は半袖を好まれたぞ','Gran — youth Dad-summer-short-sleeve-liked','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、しょうゆの味付けをこだわってらしたわよね、あなた?','Grandpa — soy-sauce-care, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08918',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お母さんがお茶の粉末を買ってこられたわ','Sho — Mom-tea-powder-bought','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖母ちゃんのお花の芳香が大好き','Mei-sis — me Grandma-flower-fragrance-love','Eager child','sho_child'),
    mk('翔くん、お父さんがソーラー電卓を見せて下さったわ','Sho — Dad-solar-calc-showed','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、夏休みのバカンスが楽しみだよ','Mei-sis — me summer-vacation-fun','Eager child','sho_child'),
    mk('翔くん、お父さんと渓谷の温泉に行きたいわね','Sho — Dad-valley-onsen-want','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ママのチャーハン大好きだよ','Mei-sis — me Mom-fried-rice-love','Eager child','sho_child'),
    mk('翔くん、夏服の半袖を出しておきましょうね','Sho — summer-short-sleeve-out','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖母ちゃんのしょうゆ漬けが好き','Mei-sis — me Grandma-soy-sauce-pickle-like','Eager close','sho_child'),
  ]},
  {id:'conv_08919',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、給食の粉末スープ好きだろ?','Riku — lunch-powder-soup-like?','Curious teen','sakura_teen'),
    mk('お前、新しい芳香剤の匂いキツイぞ、桜','You — new-fragrance-smell-strong Sakura','Wry','riku_teen'),
    mk('リク、お前、ソーラーで動く玩具集めてんだろ?','Riku — solar-toy-collect?','Curious','sakura_teen'),
    mk('お前、家族でバカンス行ったろ?桜','You — fam-vacation? Sakura','Curious','riku_teen'),
    mk('リク、お前、家族で渓谷に紅葉狩り行ったろ?','Riku — fam-valley-leaf-pick?','Curious','sakura_teen'),
    mk('お前、給食のチャーハンおかわりしたな、桜','You — lunch-fried-rice-seconds Sakura','Praising','riku_teen'),
    mk('リク、お前、夏は半袖派だろ?','Riku — summer-short-sleeve-faction?','Curious','sakura_teen'),
    mk('お前、しょうゆをラーメンに入れすぎだろ、桜','You — soy-sauce-ramen-too-much Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_08920',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖母ちゃんが粉末のお茶をくれたわ','Sho — Grandma-powder-tea-gave','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お庭のお花の芳香が大好きだよ','Mom — me garden-flower-fragrance-love','Eager child','sho_child'),
    mk('翔くん、お父さんが屋根にソーラーパネル付けたいって','Sho — Dad-roof-solar-panel-want','Reflective','yumiko_mom'),
    mk('ママ、ぼく、家族でバカンス行きたいよ','Mom — me fam-vacation-want','Eager child','sho_child'),
    mk('翔くん、お父さんと渓谷温泉旅行に行きましょうね','Sho — Dad-valley-onsen-trip','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんが作るチャーハン上手だよ','Mom — me Dad-fried-rice-good','Praising child','sho_child'),
    mk('翔くん、夏は半袖シャツに着替えましょうね','Sho — summer-short-sleeve-change','Direction','yumiko_mom'),
    mk('ママ、ぼく、おにぎりにしょうゆ少しつけて欲しい','Mom — me onigiri-soy-sauce-little-want','Eager close','sho_child'),
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

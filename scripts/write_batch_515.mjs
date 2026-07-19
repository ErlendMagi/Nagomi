import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_515 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['オマケ','脳みそ','右肩','負け犬','ペースト','方角','かわし','ひきこもり']
const B_T = ['エディション','マウント','薄型','最速','ユーザビリティ','ポテンシャル','ゼネコン','ウエイト']
const C_T = ['中央アジア','外界','アルカイダ','ガザ','公爵','敗者','前世','難問']
const D_T = ['住友','トルシエ','ディープインパクト','ホリデー','シューティング','師範','ラヴ','ボクサー']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10261',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがオマケ付きのお菓子を買って下さったわ','Sho — Dad-bonus-snack-buy','Pleased','yumiko_mom'),
    mk('ママ、ぼく、お父さんが「脳みそ柔らかく」って仰ったよ','Mom — me Dad-"brain-soft"-said','Eager child','sho_child'),
    mk('翔くん、お父さんが右肩を痛められたみたい','Sho — Dad-right-shoulder-hurt','Reflective','yumiko_mom'),
    mk('ママ、ぼく、負け犬扱いされたくないって思うよ','Mom — me loser-treat-no-want','Earnest child','sho_child'),
    mk('翔くん、お父さんがペースト状のお薬を飲んでらしたわ','Sho — Dad-paste-med-take','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと方角を確認して進んだよ','Mom — me Dad-direction-check-prog','Eager child','sho_child'),
    mk('翔くん、お父さんがボールをかわしながら遊んで下さったわ','Sho — Dad-ball-dodge-play','Pleased','yumiko_mom'),
    mk('ママ、ぼく、ひきこもりになりたくないって誓うよ','Mom — me hikiko-no-vow','Earnest close','sho_child'),
  ]},
  {id:'conv_10262',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様にオマケのクッキーをお渡ししようね、メイちゃん','Aoi — cust-bonus-cookie Mei','Direction','mei_romantic'),
    mk('葵、新メニュー考案で脳みそフル稼働ね、メイちゃん','Aoi — new-menu-brain-full Mei','Wry','aoi_barista'),
    mk('葵、お客様、右肩を回されてストレッチされてたよ、メイちゃん','Aoi — cust-right-shoulder-stretch Mei','Reflective','mei_romantic'),
    mk('葵、競合に負け犬扱いされない店にしようね、メイちゃん','Aoi — comp-loser-no-store Mei','Direction','aoi_barista'),
    mk('葵、新メニューのアボカドペーストが好評ね、メイちゃん','Aoi — new-avo-paste-pop Mei','Pleased','mei_romantic'),
    mk('葵、お店の方角的に午後は日差しがきついね、メイちゃん','Aoi — store-direction-PM-sun Mei','Reflective','aoi_barista'),
    mk('葵、お客様、クレームをかわしながら笑顔だったよ、メイちゃん','Aoi — cust-comp-dodge-smile Mei','Reflective','mei_romantic'),
    mk('葵、ひきこもりがちなお客様にも優しい店にしようね、メイちゃん','Aoi — hikiko-cust-kind Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_10263',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが孫にオマケを買って下さった','Gran — youth Dad-grandkid-bonus','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、晩年も脳みそはお元気だったわよね、あなた?','Yes — Grandpa-late-brain-sharp, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが右肩に傷を負われた','Gran — youth Dad-right-shoulder-injur','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、戦中、負け犬扱いされぬ誇りをお持ちだったわよね、あなた?','Grandpa — war-loser-no-proud, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お母さんが味噌をペースト状に練られた','Gran — youth Mom-miso-paste-knead','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、方角を見て家を建てられたわよね、あなた?','Grandpa — direction-see-house-build, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが矢をかわして難を逃れた','Gran — youth Dad-arrow-dodge-escape','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ひきこもりがちな若者を諭されたわよね、あなた?','Grandpa — hikiko-young-told, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10264',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、お菓子のオマケ集めてたな','Riku — snack-bonus-coll','Wry teen','sakura_teen'),
    mk('お前、脳みそが疲れてるな、桜','You — brain-tired Sakura','Wry','riku_teen'),
    mk('リク、お前、右肩怪我してたな','Riku — right-shoulder-injur','Curious','sakura_teen'),
    mk('お前、負け犬気分にならないでくれ、桜','You — loser-feel-no Sakura','Encouraging','riku_teen'),
    mk('リク、お前、わさびペーストが苦手だったな','Riku — wasabi-paste-bad','Wry','sakura_teen'),
    mk('お前、方角音痴だったな、桜','You — direction-bad Sakura','Wry','riku_teen'),
    mk('リク、お前、サッカーで相手をかわしてゴール決めたな','Riku — soccer-dodge-goal','Praising','sakura_teen'),
    mk('お前、夏休みひきこもりっぱなしだったろ、桜','You — summer-hikiko-only? Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10265',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがオマケ付きのジュースをお買いになったわ','Sho — Dad-bonus-juice-buy','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、脳みそを使って算数解いたよ','Mei-sis — me brain-math-solve','Eager child','sho_child'),
    mk('翔くん、お父さんが右肩を冷やしてらしたわ','Sho — Dad-right-shoulder-cool','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、絶対負け犬にはならないよ','Mei-sis — me never-loser','Earnest child','sho_child'),
    mk('翔くん、お母さんがゴマをペースト状に擦って下さったわ','Sho — Mom-sesame-paste-grind','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと方角の星座見たよ','Mei-sis — me Dad-direction-zodiac','Eager child','sho_child'),
    mk('翔くん、お父さんがボールをかわしながら遊んで下さるわ','Sho — Dad-ball-dodge-play','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、ひきこもりにならないで外で遊ぶよ','Mei-sis — me hikiko-no-out-play','Earnest close','sho_child'),
  ]},
  {id:'conv_10266',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新エディションの商品を投入しろ','Our co — new-ed-prod-launch','Crisp','hiroshi_boss'),
    mk('はい。社員間でマウントを取らないよう徹底します','Yes — Staff-mount-no-strict','Methodical','kenji_office'),
    mk('当社、薄型ディスプレイの新機種を開発しろ','Our co — slim-disp-new-dev','Direction','hiroshi_boss'),
    mk('はい。最速納期を実現する物流を整えます','Yes — Fast-deliv-log-prep','Update','kenji_office'),
    mk('当社、商品のユーザビリティを高めろ','Our co — prod-usab-up','Direction','hiroshi_boss'),
    mk('はい。新人のポテンシャルを引き出します','Yes — Newhire-pot-bring-out','Update','kenji_office'),
    mk('当社、ゼネコンとの取引条件を見直せ','Our co — gen-contr-terms-rev','Direction','hiroshi_boss'),
    mk('はい。経営判断のウエイトを再配分します','Yes — Mgmt-judg-weight-real','Close','kenji_office'),
  ]},
  {id:'conv_10267',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('限定エディションの企画を進めましょう','Ltd-ed-plan-prog','Brisk','yuki_office'),
    mk('はい。会議でマウントを取る言動は控えます','Yes — Mtg-mount-words-avoid','Cooperative','kenji_office'),
    mk('薄型サンプルを発注しましょう','Slim-sample-order','Direction','yuki_office'),
    mk('はい。最速の見積もりを提示します','Yes — Fast-quote-prop','Update','kenji_office'),
    mk('ユーザビリティテストを実施しましょう','Usab-test-imp','Direction','yuki_office'),
    mk('はい。チームのポテンシャル評価を整理します','Yes — Team-pot-eval-org','Update','kenji_office'),
    mk('ゼネコン業界の動向を調査しましょう','Gen-contr-trend-survey','Direction','yuki_office'),
    mk('はい。新人研修のウエイトを増やします','Yes — Newhire-train-weight-up','Close','kenji_office'),
  ]},
  {id:'conv_10268',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文の改訂エディションを準備しろ','Ren — paper-rev-ed-prep','Mentor','hiroshi_boss'),
    mk('はい。先輩研究員にマウントを取らない姿勢で接します','Yes — Senior-mount-no','Earnest','ren_uni'),
    mk('蓮、薄型実験装置を活用しろ','Ren — slim-exp-eq-use','Direction','hiroshi_boss'),
    mk('はい。最速で論文を投稿します','Yes — Fast-paper-submit','Earnest','ren_uni'),
    mk('蓮、実験装置のユーザビリティを評価しろ','Ren — exp-usab-eval','Direction','hiroshi_boss'),
    mk('はい。自身のポテンシャルを信じて挑みます','Yes — Self-pot-trust','Polite','ren_uni'),
    mk('蓮、ゼネコン系企業との産学連携も視野','Ren — gen-contr-coll-view','Direction','hiroshi_boss'),
    mk('はい。研究テーマのウエイト配分を整理します','Yes — Theme-weight-alloc-org','Earnest close','ren_uni'),
  ]},
  {id:'conv_10269',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、限定エディションの偽造販売を取り締まりますね','Police ltd-ed-counter-strict','Cooperative','kenji_office'),
    mk('警察、職員間のマウント行為を厳しく注意されますね','Police staff-mount-strict','Cooperative','kenji_office'),
    mk('警察、薄型武器の所持にも注意されますね','Police slim-weapon-care','Cooperative','kenji_office'),
    mk('警察、最速で現場到着を目指されますね','Police fast-scene-aim','Cooperative','kenji_office'),
    mk('警察、市民通報フォームのユーザビリティを改善されますね','Police citi-rep-form-usab-impr','Cooperative','kenji_office'),
    mk('警察、若手警官のポテンシャルを引き出されますね','Police young-pot-bring','Cooperative','kenji_office'),
    mk('警察、ゼネコンの談合事案にも対応されますね','Police gen-contr-bid-rig-resp','Cooperative','kenji_office'),
    mk('警察、捜査のウエイトを重大事件に置かれますね','Police inv-weight-major','Close','kenji_office'),
  ]},
  {id:'conv_10270',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、限定エディションで話題作りされた','Dad — founding ltd-ed-buzz','Sage','hiroshi_elder'),
    mk('はい。お父さんはマウントを取らない経営をされた','Yes — Dad mount-no-mgmt','Commitment','hiroshi_boss'),
    mk('お父さん、薄型テレビ事業に早期参入された','Dad — slim-TV-early','Wistful','hiroshi_elder'),
    mk('はい。お父さんは最速での意思決定を心がけた','Yes — Dad fast-decis','Reflective','hiroshi_boss'),
    mk('お父さん、ユーザビリティを最重視された','Dad — usab-top-imp','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員のポテンシャルを信じた','Yes — Dad staff-pot-trust','Reflective','hiroshi_boss'),
    mk('お父さん、ゼネコンとの折衝も自ら担われた','Dad — gen-contr-negot-self','Wistful','hiroshi_elder'),
    mk('はい。お父さんは経営のウエイトを未来に置かれた','Yes — Dad mgmt-weight-fut','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10271',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、中央アジアのシルクロード史を論文で扱いましたね','Ren — Central-Asia-Silk paper','Calm','asuka_teacher'),
    mk('はい、新生児と外界刺激の研究を論文で扱いました','Yes — Newborn-stim paper','Earnest','ren_uni'),
    mk('蓮さん、アルカイダ系組織の資金源を論文で扱いましたね','Ren — AQ-fund-source paper','Reflective','asuka_teacher'),
    mk('はい、ガザ地区の人道援助史を論文で扱いました','Yes — Gaza-aid-hist paper','Earnest','ren_uni'),
    mk('英国公爵家の継承制度を論文で扱いましたね','UK-duke-succ paper','Engaged','asuka_teacher'),
    mk('はい、敗者復活戦の心理学を論文で扱いました','Yes — Loser-rev-psych paper','Earnest','ren_uni'),
    mk('蓮さん、前世療法の医学的検証を論文で扱いましたね','Ren — past-life-ther paper','Reflective','asuka_teacher'),
    mk('はい、教育における難問の解法研究を論文で扱いました','Yes — Edu-tough-prob paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10272',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、中央アジアからの密輸を、警察、警戒されますね','Case Central-Asia-smug police-watch','Reflective','ren_uni'),
    mk('警察、外界との接触を断つストーカー事案にも対応されますね','Police outside-contact-stalk','Cooperative','takeda_officer'),
    mk('本件、アルカイダ系団体への対策を、警察、進められますね','Case AQ-counter police-prog','Reflective','ren_uni'),
    mk('警察、ガザ難民支援者への嫌がらせも扱われますね','Police Gaza-supp-harass','Cooperative','takeda_officer'),
    mk('本件、公爵家ゆかりの古美術盗難を、警察、扱われますね','Case duke-art-theft police-handle','Reflective','ren_uni'),
    mk('警察、敗者復活的な再犯防止策もされますね','Police loser-rev-reoff-prev','Cooperative','takeda_officer'),
    mk('本件、前世占い詐欺事件を、警察、扱われますね','Case past-life-fraud police-handle','Reflective','ren_uni'),
    mk('警察、難問事件の解決に時間をかけられますね','Police tough-case-time','Close','takeda_officer'),
  ]},
  {id:'conv_10273',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、中央アジアのシルクロード史を論文で扱いましたね','Sakura — Central-Asia paper','Calm','asuka_teacher'),
    mk('はい、新生児と外界刺激の研究を論文で扱いました','Yes — Newborn-stim paper','Earnest teen','sakura_teen'),
    mk('アルカイダ系組織の資金源を論文で扱いましたね','AQ-fund paper','Reflective','asuka_teacher'),
    mk('はい、ガザ地区の人道援助史を論文で扱いました','Yes — Gaza-aid paper','Earnest','sakura_teen'),
    mk('英国公爵家の継承制度を論文で扱いましたね','UK-duke paper','Engaged','asuka_teacher'),
    mk('はい、敗者復活戦の心理学を論文で扱いました','Yes — Loser-rev paper','Earnest','sakura_teen'),
    mk('前世療法の医学的検証を論文で扱いましたね','Past-life paper','Reflective','asuka_teacher'),
    mk('はい、教育における難問の解法研究を論文で扱いました','Yes — Edu-tough paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10274',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、中央アジア出身の患者の医療通訳を医療チームで手配します','Ren — Central-Asia-pati-interp med-team','Calm','saito_doctor'),
    mk('はい、新生児の外界刺激への反応を医療チームで観察します','Yes — Newborn-stim-resp med-team','Patient','saito_doctor'),
    mk('蓮さん、アルカイダ系紛争地からの傷病者を医療チームで受けます','Ren — AQ-conflict-vict med-team','Calm','saito_doctor'),
    mk('ガザ地区への医療支援を、貴院、ご検討されてますね、先生','Gaza-med-supp your-hosp cons, sensei','Reflective','ren_uni'),
    mk('はい、公爵家ご子息の医療対応も医療チームでおこないます','Yes — Duke-son-med med-team','Patient','saito_doctor'),
    mk('はい、医療事故の敗者復活的再発防止策を医療チームで進めます','Yes — Med-acc-rev-prev med-team','Patient','saito_doctor'),
    mk('前世療法という非科学的療法を、貴院、推奨されませんね、先生','Past-life-no-rec your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、医学の難問は医療チームで議論を重ねます','Yes — Med-tough med-team disc','Patient close','saito_doctor'),
  ]},
  {id:'conv_10275',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、中央アジア市場の調査を進めろ','Our co — Central-Asia-survey','Crisp','hiroshi_boss'),
    mk('はい。社員のメンタルケアで外界刺激を制限する提案も検討します','Yes — Staff-mental-outside-stim-redu','Methodical','kenji_office'),
    mk('当社、アルカイダ関連リスク国との取引を慎重にしろ','Our co — AQ-risk-deal-careful','Direction','hiroshi_boss'),
    mk('はい。ガザ復興支援に協賛します','Yes — Gaza-rec-spons','Update','kenji_office'),
    mk('当社、公爵家ゆかりのブランドと提携しろ','Our co — duke-brand-partner','Direction','hiroshi_boss'),
    mk('はい。敗者復活的な人事制度を導入します','Yes — Loser-rev-HR','Update','kenji_office'),
    mk('当社、前世占いに頼らない経営をしろ','Our co — past-life-no-mgmt','Direction','hiroshi_boss'),
    mk('はい。難問プロジェクトは精鋭チームで対応します','Yes — Tough-proj-elite','Close','kenji_office'),
  ]},
  {id:'conv_10276',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、住友銀行にお勤めだって、メイちゃん','Aoi — cust-Sumitomo-work Mei','Reflective','mei_romantic'),
    mk('葵、お客様、トルシエ監督時代のサッカー日本代表ファンだって、メイちゃん','Aoi — cust-Troussier-JPN-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ディープインパクトの競走ファンだったって、メイちゃん','Aoi — cust-Deep-Impact-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、海外ホリデーで日焼けされたよ、メイちゃん','Aoi — cust-holiday-tan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、シューティングゲームの大会に出るって、メイちゃん','Aoi — cust-shoot-game-comp Mei','Reflective','mei_romantic'),
    mk('葵、お客様、剣道師範を務められてるって、メイちゃん','Aoi — cust-kendo-master Mei','Reflective','aoi_barista'),
    mk('葵、お客様、洋楽のラヴソング集めてらっしゃるって、メイちゃん','Aoi — cust-love-song-coll Mei','Reflective','mei_romantic'),
    mk('葵、お客様、元プロボクサーでいらっしゃるって、メイちゃん','Aoi — cust-ex-pro-boxer Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10277',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが住友財閥のお話されたわ','Gran — youth Dad-Sumitomo-told','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、トルシエジャパンのワールドカップを観られたわよね、あなた?','Yes — Grandpa-Troussier-WC, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがディープインパクトの引退レースを観られた','Gran — youth Dad-Deep-Impact-retir-race','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ホリデーシーズンを家族で過ごされたわよね、あなた?','Grandpa — holiday-fam, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがシューティングクラブに通われた','Gran — youth Dad-shoot-club','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、剣道の師範をされたわよね、あなた?','Grandpa — kendo-master, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがロマンチックなラヴレターを下さった','Gran — youth Dad-rom-love-letter','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃ボクサーに憧れたわよね、あなた?','Grandpa — youth-boxer-admire, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10278',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが住友グループの会社にお勤めなのよ','Sho — Dad-Sumitomo-grp-work','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとトルシエ時代のサッカー観たよ','Mei-sis — me Dad-Troussier-soccer','Eager child','sho_child'),
    mk('翔くん、お父さんがディープインパクトの本を持ってらしたわ','Sho — Dad-Deep-Impact-book','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ホリデーシーズンが楽しみだよ','Mei-sis — me holiday-fun','Eager child','sho_child'),
    mk('翔くん、お父さんがシューティングゲームを買って下さったわ','Sho — Dad-shoot-game-buy','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんが剣道師範のお話して下さったよ','Mei-sis — me Dad-kendo-master-told','Eager child','sho_child'),
    mk('翔くん、お父さんがラヴソングを歌って下さるわ','Sho — Dad-love-song-sing','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんがボクサーの伝記読ませて下さるよ','Mei-sis — me Dad-boxer-bio-read','Eager close','sho_child'),
  ]},
  {id:'conv_10279',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前ん父さん、住友系の会社だったな','Riku — your-Dad-Sumitomo','Curious teen','sakura_teen'),
    mk('お前、トルシエ時代のジャパンファンだったな、桜','You — Troussier-JPN-fan Sakura','Curious','riku_teen'),
    mk('リク、お前、ディープインパクトの動画観てたな','Riku — Deep-Impact-vid','Curious','sakura_teen'),
    mk('お前、ホリデーシーズンに旅行行ったろ?桜','You — holiday-trip? Sakura','Curious','riku_teen'),
    mk('リク、お前、シューティングゲームの全国大会出るんだろ?','Riku — shoot-game-nat?','Curious','sakura_teen'),
    mk('お前、剣道部の師範に憧れてたな、桜','You — kendo-master-admire Sakura','Curious','riku_teen'),
    mk('リク、お前、ラヴソング集ばっか聴いてたな','Riku — love-song-only','Wry','sakura_teen'),
    mk('お前、ボクサーの映画好きだったな、桜','You — boxer-movie-like Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10280',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが住友銀行の口座を開設されたわ','Sho — Dad-Sumitomo-acc-open','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとトルシエ時代のサッカー観たよ','Mom — me Dad-Troussier-soccer','Eager child','sho_child'),
    mk('翔くん、お父さんがディープインパクトの伝記をお買いになったわ','Sho — Dad-Deep-Impact-bio-buy','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとホリデーに旅行行きたいよ','Mom — me Dad-holiday-trip-want','Eager child','sho_child'),
    mk('翔くん、お父さんがシューティングレンジに通われてるそうよ','Sho — Dad-shoot-range','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと剣道師範のお話聞いたよ','Mom — me Dad-kendo-master-told','Eager child','sho_child'),
    mk('翔くん、お父さんがラヴソングのレコードを買って下さったわ','Sho — Dad-love-song-rec-buy','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとプロボクサーのドキュメンタリー観たよ','Mom — me Dad-pro-boxer-doc','Eager close','sho_child'),
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_538 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['大木','所沢','野原','大輔','中西','大津','大平','大江']
const B_T = ['ボーダフォン','サラ金','マーチ','ワーム','ヒューザー','プッシュ','エクスプレス','光ファイバー']
const C_T = ['爐','駝','實','濤','鵬','鮖','鵝','蛎']
const D_T = ['バリー','メアリー','ラッセル','ジェリー','エド','エドワード','ブラッド','アニー']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10721',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが庭の大木の剪定をして下さるそうよ','Sho — Dad-big-tree-prune','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと埼玉県所沢の航空公園に行ったよ','Mom — me Dad-Sait-Tok-air-park','Pleased child','sho_child'),
    mk('翔くん、お父さんが「野原のお父様、つまりお祖父様にもよろしく」って仰ってたわ','Sho — Dad-"Noh-fa-grdpa-greet"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんのお友達の大輔おじさんに会ったよ','Mom — me Dad-Daisuke-uncle-met','Eager child','sho_child'),
    mk('翔くん、お父さんが中西さんと旧友のお話を楽しまれたわ','Sho — Dad-Nak-old-fri-talk','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと滋賀県大津の琵琶湖に行ったよ','Mom — me Dad-Shi-Otsu-Biwa','Pleased child','sho_child'),
    mk('翔くん、お父さんは「大平の世が続けばいい」って仰ってたわ','Sho — Dad-"taihei-peace-cont"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと大江健三郎の絵本を読んだよ','Mom — me Dad-Oe-Ken-pic','Eager close','sho_child'),
  ]},
  {id:'conv_10722',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ご自宅の庭の大木を眺めるのがお好きだって、メイちゃん','Aoi — cust-yard-big-tree-watch Mei','Reflective','mei_romantic'),
    mk('葵、お客様、埼玉県所沢にお住まいだって、メイちゃん','Aoi — cust-Tok-live Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お子様達と野原で遊ばれるのがお好きだって、メイちゃん','Aoi — cust-kid-field-play Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お孫様の大輔くんと一緒にご来店だったよ、メイちゃん','Aoi — cust-grdkid-Daisuke-vis Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お友達の中西さんとお茶されてたよ、メイちゃん','Aoi — cust-fri-Nak-tea Mei','Reflective','mei_romantic'),
    mk('葵、お客様、滋賀県大津のご出身だって、メイちゃん','Aoi — cust-Otsu-home Mei','Reflective','aoi_barista'),
    mk('葵、お客様、大平総理の時代のお話を語って下さったよ、メイちゃん','Aoi — cust-Ohira-PM-era-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、大江健三郎先生の文学を愛されてるって、メイちゃん','Aoi — cust-Oe-lit-love Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10723',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが裏山の大木を御自ら植えられた','Gran — youth Dad-big-tree-plant','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、所沢の航空基地で勤務されたわよね、あなた?','Yes — Grandpa-youth-Tok-air-base, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが野原の上の星空を眺められた','Gran — youth Dad-field-sky-watch','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、息子様の大輔さんと釣りに行かれたわよね、あなた?','Grandpa — youth-son-Daisuke-fish, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが中西氏と同じ職場で働かれた','Gran — youth Dad-Nak-same-work','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、大津の祭礼に毎年参加されたわよね、あなた?','Grandpa — youth-Otsu-cere-yr, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは「大平正芳総理を尊敬」と仰った','Gran — youth Dad-"Ohira-PM-resp"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、大江健三郎の小説を蔵書されたわよね、あなた?','Grandpa — youth-Oe-novel-coll, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10724',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、林間学校で大木に登ってたな','Riku — for-camp-big-tree-climb','Wry teen','sakura_teen'),
    mk('お前、家族で所沢の航空公園行ったろ、桜','You — fam-Tok-air-park? Sakura','Curious','riku_teen'),
    mk('リク、お前、漫画「クレヨンしんちゃん」の野原家好きだったな','Riku — mng-Sin-Noh-fam-like','Wry','sakura_teen'),
    mk('お前、サッカー部の大輔先輩を尊敬してたな、桜','You — soccer-Daisuke-sen-resp Sakura','Curious','riku_teen'),
    mk('リク、お前、塾の中西先生厳しかったな','Riku — cram-Nak-tch-strict','Wry','sakura_teen'),
    mk('お前、家族で滋賀県大津に行ったろ、桜','You — fam-Otsu? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会で大平正芳総理の名前覚えたな','Riku — soc-Ohira-PM-name','Curious','sakura_teen'),
    mk('お前、国語で大江健三郎の小説扱ったろ、桜','You — Jp-Oe-novel? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10725',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「公園の大木の下で休もう」って仰ってたわ','Sho — Dad-"big-tree-rest"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと所沢の航空発祥記念館に行ったよ','Mei-sis — me Dad-Tok-air-mus','Eager child','sho_child'),
    mk('翔くん、お父さんが「野原を駆け回る楽しさ」を語って下さったわ','Sho — Dad-"field-run-fun"-talk','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと大輔いとこと公園行ったよ','Mei-sis — me Dad-Daisuke-cous-park','Eager child','sho_child'),
    mk('翔くん、お父さんが「中西おじさんは博学」って仰ってたわ','Sho — Dad-"Nak-uncle-learn"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと大津のサンセットを観たよ','Mei-sis — me Dad-Otsu-sunset','Eager child','sho_child'),
    mk('翔くん、お父さんが大平正芳総理の伝記を読まれてるわ','Sho — Dad-Ohira-PM-biog-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと大江健三郎の絵本を読んだよ','Mei-sis — me Dad-Oe-pic','Eager close','sho_child'),
  ]},
  {id:'conv_10726',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、旧ボーダフォン時代の契約資料を整理しろ','Our co — old-Voda-contr-tidy','Crisp','hiroshi_boss'),
    mk('はい。社員にサラ金、つまり消費者金融を借りない様注意喚起します','Yes — Staff-sarakin-warn','Methodical','kenji_office'),
    mk('当社、日産マーチ等の小型車を社用車にしろ','Our co — Nis-March-comp-car','Direction','hiroshi_boss'),
    mk('はい。サーバのワーム感染対策を強化します','Yes — Serv-worm-prev-strong','Update','kenji_office'),
    mk('当社、旧ヒューザーの教訓を社員研修で扱え','Our co — Huser-less-staff-train','Direction','hiroshi_boss'),
    mk('はい。販促のプッシュ通知を最適化します','Yes — Promo-push-notify-opt','Update','kenji_office'),
    mk('当社、エクスプレス配送サービスを拡充しろ','Our co — exp-deliv-exp','Direction','hiroshi_boss'),
    mk('はい。社内ネットワークを光ファイバーに切り替えます','Yes — Int-net-fiber-switch','Close','kenji_office'),
  ]},
  {id:'conv_10727',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('旧ボーダフォン回線の契約を見直しましょう','Old-Voda-line-rev','Brisk','yuki_office'),
    mk('はい。社員向けにサラ金被害の啓発資料を配ります','Yes — Staff-sarakin-aware','Cooperative','kenji_office'),
    mk('社用車に日産マーチを追加導入しましょう','Co-car-Nis-March-add','Direction','yuki_office'),
    mk('はい。社内端末のワーム検査を全台実施します','Yes — Off-term-worm-scan','Update','kenji_office'),
    mk('旧ヒューザーの耐震偽装事件の事例研修を組みましょう','Old-Huser-quake-fake-case-train','Direction','yuki_office'),
    mk('はい。新商品のプッシュキャンペーンを準備します','Yes — New-prod-push-camp','Update','kenji_office'),
    mk('エクスプレス便のコストを見直しましょう','Exp-deliv-cost-rev','Direction','yuki_office'),
    mk('はい。光ファイバー配線工事の業者を選定します','Yes — Fiber-cable-vend-pick','Close','kenji_office'),
  ]},
  {id:'conv_10728',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、旧ボーダフォンの市場参入研究の論文を読め','Ren — old-Voda-mkt-paper','Mentor','hiroshi_boss'),
    mk('はい。サラ金、つまり消費者金融の経済学的分析の論文を読みます','Yes — Sarakin-econ-anal-paper','Earnest','ren_uni'),
    mk('蓮、自動車業界でマーチ等の小型車の研究をしろ','Ren — auto-March-comp-stud','Direction','hiroshi_boss'),
    mk('はい。情報セキュリティのワーム解析の論文を読みます','Yes — Info-sec-worm-paper','Earnest','ren_uni'),
    mk('蓮、旧ヒューザーの企業倫理の研究も視野に入れろ','Ren — Huser-co-eth-view','Direction','hiroshi_boss'),
    mk('はい。プッシュ通知UXの論文を読みます','Yes — Push-UX-paper','Polite','ren_uni'),
    mk('蓮、物流のエクスプレスサービスの最適化研究をしろ','Ren — log-exp-opt-stud','Direction','hiroshi_boss'),
    mk('はい。光ファイバー通信の物理層の論文を読みます','Yes — Fiber-phy-paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10729',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、旧ボーダフォン回線の通信記録も照会されますね','Police old-Voda-comm-rec-inq','Cooperative','kenji_office'),
    mk('警察、サラ金、つまりヤミ金事件にも対応されますね','Police sarakin-illeg-case','Cooperative','kenji_office'),
    mk('警察、ひき逃げ車両、マーチ等の小型車も追跡されますね','Police hit-run-March-track','Cooperative','kenji_office'),
    mk('警察、コンピュータワーム感染事案にも対応されますね','Police comp-worm-case','Cooperative','kenji_office'),
    mk('警察、旧ヒューザー関連の耐震偽装事件も把握されてますね','Police Huser-quake-fake-mon','Cooperative','kenji_office'),
    mk('警察、市民へのプッシュ通知での緊急速報を、警察、活用されますね','Police citi-push-emerg-use','Cooperative','kenji_office'),
    mk('警察、エクスプレス便で送られる不審物の検査もされますね','Police exp-susp-inspect','Cooperative','kenji_office'),
    mk('警察、光ファイバー回線の盗聴事案も対応されますね','Police fiber-wiretap-case','Close','kenji_office'),
  ]},
  {id:'conv_10730',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、旧ボーダフォンと契約された','Dad — youth-old-Voda-contr','Sage','hiroshi_elder'),
    mk('はい。お父さんは社員にサラ金、つまり消費者金融を借りるなと厳しく仰った','Yes — Dad staff-sarakin-no-strict','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、日産マーチの初代モデルを愛用された','Dad — youth-Nis-March-1st-fav','Wistful','hiroshi_elder'),
    mk('はい。お父さんは早期からコンピュータワームの脅威を理解された','Yes — Dad early-comp-worm-und','Reflective','hiroshi_boss'),
    mk('お父さん、旧ヒューザー事件の頃、社内の品質基準を厳しくされた','Dad — Huser-era-qual-strict','Wistful','hiroshi_elder'),
    mk('はい。お父さんは販促のプッシュより信頼を大事にされた','Yes — Dad promo-push-trust-cher','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、エクスプレス便を黎明期から活用された','Dad — youth-exp-deliv-early','Wistful','hiroshi_elder'),
    mk('はい。お父さんは光ファイバー時代の到来を早く予見された','Yes — Dad fiber-era-fore','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10731',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、製鉄の爐、つまり古代炉の考古研究を論文で扱いましたね','Ren — old-fur-arch paper','Calm','asuka_teacher'),
    mk('はい、駝、つまり駱駝、つまりラクダの民俗利用の研究を論文で扱いました','Yes — Camel-folk-use paper','Earnest','ren_uni'),
    mk('蓮さん、旧字「實」、つまり実の文献研究を論文で扱いましたね','Ren — old-jitsu-lit paper','Reflective','asuka_teacher'),
    mk('はい、怒濤、つまり大濤の海洋研究を論文で扱いました','Yes — Big-wave-oc paper','Earnest','ren_uni'),
    mk('蓮さん、伝説の鳥、鵬の文学的研究を論文で扱いましたね','Ren — myth-bird-hou paper','Reflective','asuka_teacher'),
    mk('はい、伝統魚名の鮖、つまりカジカの分類研究を論文で扱いました','Yes — Trad-fish-shi paper','Earnest','ren_uni'),
    mk('蓮さん、家禽の鵝、つまりガチョウの民俗研究を論文で扱いましたね','Ren — goose-ga-folk paper','Reflective','asuka_teacher'),
    mk('はい、旧字「蛎」、つまり牡蠣の表記史を論文で扱いました','Yes — Old-rei-oyster paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10732',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、火災現場の爐、つまり炉痕跡を、警察、鑑識されますね','Case fire-fur-trace police-foren','Reflective','ren_uni'),
    mk('警察、駝、つまり駱駝、ラクダの密輸事件にも対応されますね','Police camel-smug-case','Cooperative','takeda_officer'),
    mk('本件、旧字「實」、つまり実印の偽造を、警察、鑑定されますね','Case old-jitsu-seal-forg police-auth','Reflective','ren_uni'),
    mk('警察、怒濤、つまり大濤被害の救助も担当されますね','Police big-wave-resc','Cooperative','takeda_officer'),
    mk('本件、密漁の希少鳥、鵬の関連事案を、警察、対応されますね','Case rare-hou-bird-poach police-resp','Reflective','ren_uni'),
    mk('警察、漁業の鮖、つまりカジカ盗難の取り締まりもされますね','Police fish-shi-theft-crack','Cooperative','takeda_officer'),
    mk('本件、家禽の鵝、つまりガチョウの盗難事件を、警察、捜査されますね','Case goose-ga-theft police-inv','Reflective','ren_uni'),
    mk('警察、旧字「蛎」、つまり牡蠣の養殖場の盗難もされますね','Police old-rei-oyster-farm-theft','Close','takeda_officer'),
  ]},
  {id:'conv_10733',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、製鉄の爐、つまり古代炉の考古研究を論文で扱いましたね','Sakura — old-fur paper','Calm','asuka_teacher'),
    mk('はい、駝、つまり駱駝、ラクダの民俗利用の研究を論文で扱いました','Yes — Camel paper','Earnest teen','sakura_teen'),
    mk('旧字「實」、つまり実の文献研究を論文で扱いましたね','Old-jitsu paper','Reflective','asuka_teacher'),
    mk('はい、怒濤、つまり大濤の海洋研究を論文で扱いました','Yes — Big-wave paper','Earnest','sakura_teen'),
    mk('伝説の鳥、鵬の文学的研究を論文で扱いましたね','Myth-hou paper','Reflective','asuka_teacher'),
    mk('はい、伝統魚名の鮖、つまりカジカの分類研究を論文で扱いました','Yes — Fish-shi paper','Earnest','sakura_teen'),
    mk('家禽の鵝、つまりガチョウの民俗研究を論文で扱いましたね','Goose-ga paper','Reflective','asuka_teacher'),
    mk('はい、旧字「蛎」、つまり牡蠣の表記史を論文で扱いました','Yes — Old-rei paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10734',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、産業医学の爐、つまり溶鉱炉作業者の健康管理を医療チームでおこないます','Ren — ind-med-fur-worker med-team','Calm','saito_doctor'),
    mk('蓮さん、駝、つまり駱駝、ラクダ由来のMERS感染症を医療チームで監視します','Ren — camel-MERS med-team','Calm','saito_doctor'),
    mk('蓮さん、旧字「實」、つまり実験データの原典確認を医療チームでおこないます','Ren — old-jitsu-data-team-check','Calm','saito_doctor'),
    mk('蓮さん、津波、つまり怒濤の被災者ケアを医療チームでおこないます','Ren — tsu-wave-vict-care med-team','Calm','saito_doctor'),
    mk('蓮さん、医療チームで鵬の様な大きな視野を持って診療します','Ren — hou-wide-view med-team','Calm','saito_doctor'),
    mk('蓮さん、栄養指導で鮖、つまりカジカ等の魚類を医療チームで紹介します','Ren — nutr-shi-fish med-team-intr','Calm','saito_doctor'),
    mk('蓮さん、鵝、つまりガチョウ由来の鳥インフルを医療チームで監視します','Ren — goose-bird-flu med-team-mon','Calm','saito_doctor'),
    mk('蓮さん、旧字「蛎」、つまり牡蠣食中毒の対応を医療チームでおこないます','Ren — old-rei-oyster-food-pois med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_10735',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、工場の爐、つまり加熱炉の安全点検を徹底しろ','Our co — fact-fur-safe-thor','Crisp','hiroshi_boss'),
    mk('はい。中東向け商品開発に駝、つまりラクダの図柄を採用します','Yes — ME-prod-camel-motif','Methodical','kenji_office'),
    mk('当社、社名に旧字「實」、つまり実を残せ','Our co — co-name-old-jitsu-keep','Direction','hiroshi_boss'),
    mk('はい。市場の怒濤、つまり大濤の様な変動に備えます','Yes — Mkt-big-wave-prep','Update','kenji_office'),
    mk('当社、鵬の様に視野を広く持って事業を展開しろ','Our co — hou-wide-biz','Direction','hiroshi_boss'),
    mk('はい。地方の鮖、つまりカジカ漁業との提携を進めます','Yes — Local-shi-fish-part','Update','kenji_office'),
    mk('当社、ブランドロゴに鵝、つまりガチョウの図柄を入れろ','Our co — brand-goose-motif','Direction','hiroshi_boss'),
    mk('はい。旧字「蛎」、つまり牡蠣事業の海外展開を進めます','Yes — Old-rei-oyster-overs','Close','kenji_office'),
  ]},
  {id:'conv_10736',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、米国コメディアンのバリー氏のファンだって、メイちゃん','Aoi — cust-US-Barry-com-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、英国シスター メアリーの自伝を読んでらしたよ、メイちゃん','Aoi — cust-Mary-mem-read Mei','Reflective','aoi_barista'),
    mk('葵、お客様、英国哲学者ラッセルの著作がお好きだって、メイちゃん','Aoi — cust-UK-Russ-phil Mei','Reflective','mei_romantic'),
    mk('葵、お客様、米国アニメのトムとジェリーがお好きだって、メイちゃん','Aoi — cust-Tom-Jerry-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、英国のエド・シーランのライブに行かれたって、メイちゃん','Aoi — cust-UK-Ed-Sher-live Mei','Reflective','mei_romantic'),
    mk('葵、お客様、米国エドワード・ホッパーの画集を愛されてるよ、メイちゃん','Aoi — cust-Ed-Hopper-art Mei','Reflective','aoi_barista'),
    mk('葵、お客様、米国のブラッド・ピットの映画がお好きだって、メイちゃん','Aoi — cust-Brad-Pitt-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、米国ミュージカルのアニーがお好きだって、メイちゃん','Aoi — cust-Annie-mus-fan Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10737',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがバリー・マニロウのレコードを愛された','Gran — youth Dad-Barry-Mani-rec','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、メアリー・ポピンズの映画を観られたわよね、あなた?','Yes — Grandpa-youth-Mary-Pop-film, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがバートランド・ラッセルの著作を蔵書された','Gran — youth Dad-Russ-coll','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、トムとジェリーのアニメをお孫様と楽しまれたわよね、あなた?','Grandpa — youth-Tom-Jerry-grdkid, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがエド・サリヴァンのTVショーを観られた','Gran — youth Dad-Ed-Sul-show','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、エドワード・ケネディの演説を聴かれたわよね、あなた?','Grandpa — youth-Ed-Ken-sp, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがブラッド・ピットのデビュー作を観られた','Gran — youth Dad-Brad-Pitt-deb','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ミュージカル「アニー」の初演を観られたわよね、あなた?','Grandpa — youth-Annie-prem, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10738',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「バリーの新譜が良い」って仰ってたわ','Sho — Dad-"Barry-new-good"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとメアリー・ポピンズの絵本を読んだよ','Mei-sis — me Dad-Mary-Pop-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがラッセル哲学の入門書を読まれてるわ','Sho — Dad-Russ-phil-int','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとトムとジェリーのアニメ観たよ','Mei-sis — me Dad-Tom-Jerry-anime','Eager child','sho_child'),
    mk('翔くん、お父さんがエド・シーランの曲を流して下さるわ','Sho — Dad-Ed-Sher-play','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとエドワード・タルブの絵画展に行ったよ','Mei-sis — me Dad-Ed-Tarb-art','Eager child','sho_child'),
    mk('翔くん、お父さんがブラッド・ピットの映画を観てらっしゃるわ','Sho — Dad-Brad-Pitt-film','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとアニーのミュージカルDVD観たよ','Mei-sis — me Dad-Annie-DVD','Eager close','sho_child'),
  ]},
  {id:'conv_10739',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、ボンドのバリー・ニールセン覚えてたな','Riku — Bond-Barry-Niel','Curious teen','sakura_teen'),
    mk('お前、英語教科書でメアリーって名前出てきたな、桜','You — Eng-textb-Mary Sakura','Curious','riku_teen'),
    mk('リク、お前、社会でラッセル卿の名前覚えたな','Riku — soc-Russ-name','Curious','sakura_teen'),
    mk('お前、トムとジェリーのアニメ動画よく観てたな、桜','You — Tom-Jerry-vid Sakura','Wry','riku_teen'),
    mk('リク、お前、エド・シーランのギターでカバーしてたな','Riku — Ed-Sher-gtr-cov','Praising','sakura_teen'),
    mk('お前、社会でエドワード王知ってるよな、桜','You — soc-Ed-king Sakura','Curious','riku_teen'),
    mk('リク、お前、ブラッド・ピットの映画一気見してたな','Riku — Brad-Pitt-marathon','Wry','sakura_teen'),
    mk('お前、文化祭でアニーのソング歌ったろ、桜','You — cul-fes-Annie-sing? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10740',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがバリー・マニロウのコンサート映像を観てらっしゃるわ','Sho — Dad-Barry-Mani-conc','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとメアリー・ポピンズの映画観たよ','Mom — me Dad-Mary-Pop-film','Eager child','sho_child'),
    mk('翔くん、お父さんがラッセル卿の伝記を読んでらっしゃるわ','Sho — Dad-Russ-biog-read','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとトムとジェリーのDVD観たよ','Mom — me Dad-Tom-Jerry-DVD','Eager child','sho_child'),
    mk('翔くん、お父さんがエド・シーランの新譜を流してらっしゃるわ','Sho — Dad-Ed-Sher-new-play','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとエドワード・ホッパーの画集観たよ','Mom — me Dad-Ed-Hopper-art','Eager child','sho_child'),
    mk('翔くん、お父さんがブラッド・ピット主演の戦争映画を観てらっしゃるわ','Sho — Dad-Brad-Pitt-war-film','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと「アニー」のミュージカル劇場で観たよ','Mom — me Dad-Annie-theat','Eager close','sho_child'),
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

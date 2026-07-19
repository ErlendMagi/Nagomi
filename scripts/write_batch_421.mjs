import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_421 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['ときには','何一つ','御飯','もうけ','たずね','そうこう','おみやげ','壊れる']
const B_T = ['配付','減額','必需','構文','造る','充足','取消','買物']
const C_T = ['放浪','分断','改憲','直撃','哀れ','中高年','棄却','斬り']
const D_T = ['顎','灸','セラピー','ブタ','歌劇','抱きしめ','アクセル','卓球']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08381',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、ときには休むことも大切よ','Sho — sometimes rest important','Caring','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんに何一つ恩返しできてないよ','Mom — me Grandpa anything-give-back-can\'t','Wry child','sho_child'),
    mk('翔くん、御飯は残さず食べてね','Sho — meal don\'t-leave eat','Direction','yumiko_mom'),
    mk('ママ、お父さんがお祭りでもうけたっていうの?','Mom — Dad fest-profited?','Curious child','sho_child'),
    mk('翔くん、おばあちゃんがお家にいるか、たずねてきてね','Sho — Granny home-exist visit-ask','Direction','yumiko_mom'),
    mk('ママ、そうこうしてるうちに、お父さんが帰ってきたよ','Mom — while-doing-so Dad-returned','Reflective child','sho_child'),
    mk('翔くん、お祖父ちゃんにおみやげ買って帰ろうね','Sho — Grandpa-souvenir buy-back','Tender','yumiko_mom'),
    mk('ママ、ぼくのおもちゃが壊れるかと心配','Mom — me toy break worried','Wry close','sho_child'),
  ]},
  {id:'conv_08382',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、ときには売上が落ち込む日もあるよね、メイちゃん','Aoi — sometimes sales-drop day Mei','Reflective','mei_romantic'),
    mk('葵、お客様に何一つ不満を与えないお店にしたいね、メイちゃん','Aoi — cust anything dissatisfaction-don\'t-give store Mei','Eager','aoi_barista'),
    mk('葵、御飯セットも始めようね、メイちゃん','Aoi — rice-set start Mei','Practical','mei_romantic'),
    mk('葵、薄利だけど、お店もうけが出てきたよ、メイちゃん','Aoi — thin-margin store-profit emerge Mei','Animated','aoi_barista'),
    mk('葵、お客様、たずねてくる方が増えてきたね、メイちゃん','Aoi — cust visit-ask-people increase Mei','Reflective','mei_romantic'),
    mk('葵、そうこうしているうちに閉店時間になっちゃったよ、メイちゃん','Aoi — while-doing-so closing-time-became Mei','Wry','aoi_barista'),
    mk('葵、お客様への小さなおみやげ、用意しようね、メイちゃん','Aoi — cust small-souvenir prep Mei','Tender','mei_romantic'),
    mk('葵、お皿が壊れるのが心配で慎重に運ぶよ、メイちゃん','Aoi — plate-break worry careful-carry Mei','Practical close','aoi_barista'),
  ]},
  {id:'conv_08383',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんはときには厳しいことも教えてくださったぞ','Gran — youth Dad sometimes strict-taught','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、何一つ不平を言われなかったわよね、あなた?','Yes — Grandpa anything complaint-didn\'t-say, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、御飯を子供たちに分けてあげたぞ','Gran — youth rice kids-divided','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、商売のもうけ口をご存知だったわよね、あなた?','Grandpa — youth biz-profit-route knew, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、村人がお家をたずねてきたぞ','Gran — youth villager home-visited','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、そうこうしてるうちに歳をとったとお笑いだったわよね、あなた?','Grandpa — while-doing-so age-took laughed, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんからおみやげを頂いて嬉しかったぞ','Gran — youth Dad-souvenir glad','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、形あるものは壊れると、おっしゃってたわよね、あなた?','Grandpa — form-thing breaks said, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08384',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、ときには真面目になれよ','Riku — sometimes serious-be','Direction teen','sakura_teen'),
    mk('お前、宿題何一つやってないだろ?桜','You — homework anything-didn\'t? Sakura','Teasing','riku_teen'),
    mk('リク、お前、御飯食べてから部活来いよ','Riku — meal-after club-come','Direction','sakura_teen'),
    mk('お前、テストで点もうけたんだろ?桜','You — test-point-profited? Sakura','Curious','riku_teen'),
    mk('リク、お前、ぼくの家、たずねて来てくれたな','Riku — my-home visit-ask came','Tender','sakura_teen'),
    mk('お前、そうこうしてる間に試合始まるぞ、桜','You — while-doing-so match-starts Sakura','Direction','riku_teen'),
    mk('リク、修学旅行のおみやげ、買ってきてくれたな','Riku — school-trip-souvenir bought','Tender','sakura_teen'),
    mk('お前のスマホ、画面が壊れるかと思ったぜ、桜','You — phone screen-break-thought Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_08385',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、ときには甘えてもいいのよ','Sho — sometimes depend OK','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、何一つ忘れずに持ってきたよ','Mei-sis — me anything-forgot-not brought','Proud child','sho_child'),
    mk('翔くん、お祖母ちゃんが御飯を作ってくださってるわ','Sho — Grandma rice-make','Reflective','mei_romantic'),
    mk('メイ姉さん、お父さんが、お祭りでもうけたって','Mei-sis — Dad fest-profited','Eager child','sho_child'),
    mk('翔くん、ご近所さんがたずねていらしたのよ','Sho — neighbor visit-ask-came','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、そうこうしてるうちに夕方になっちゃった','Mei-sis — me while-doing-so evening-became','Wry child','sho_child'),
    mk('翔くん、お祖父ちゃんにおみやげ、何にするか考えようね','Sho — Grandpa-souvenir what-think','Direction','mei_romantic'),
    mk('メイ姉さん、ぼくの大事なおもちゃ、壊れるのは嫌だよ','Mei-sis — me precious-toy break-dislike','Caring close','sho_child'),
  ]},
  {id:'conv_08386',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、お得意様への資料配付を進めろ','Our co — VIP-material-distribute advance','Crisp','hiroshi_boss'),
    mk('はい。経費の減額策を検討しております','Yes — Expense-cut-policy consider','Methodical','kenji_office'),
    mk('当社、必需品の在庫切れに注意しろ','Our co — essentials-stockout careful','Direction','hiroshi_boss'),
    mk('はい。マニュアルの構文を整理しました','Yes — Manual-syntax organize','Update','kenji_office'),
    mk('当社、信頼を造る経営を心がけろ','Our co — trust-build mgmt mindful','Direction','hiroshi_boss'),
    mk('はい。社員の充足感を高める制度を導入します','Yes — Staff-satisfaction-raise system introduce','Update','kenji_office'),
    mk('注文取消の対応マニュアルを整えろ','Order-cancel resp-manual prep','Direction','hiroshi_boss'),
    mk('はい。当社、社員向け買物割引を始めました','Yes — Our staff-shopping-discount started','Close','kenji_office'),
  ]},
  {id:'conv_08387',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('社員への福利冊子を配付しましょう','Staff-welfare-pamphlet distribute','Brisk','yuki_office'),
    mk('はい。固定費の減額計画を進めます','Yes — Fixed-cost-cut plan advance','Cooperative','kenji_office'),
    mk('日用必需品コーナーを新設しましょう','Daily-essentials corner new-set','Direction','yuki_office'),
    mk('はい。プログラム構文の見直しを進めております','Yes — Prog-syntax review advance','Update','kenji_office'),
    mk('新店舗を造るための予算を整えましょう','New-store-build budget prep','Direction','yuki_office'),
    mk('はい。社員の充足度調査の結果が出ました','Yes — Staff-satisfaction-survey result emerged','Update','kenji_office'),
    mk('注文の取消手続きを簡略化しましょう','Order-cancel-procedure simplify','Direction','yuki_office'),
    mk('はい。社内の買物クーポンを発行しました','Yes — In-house-shopping-coupon issued','Close','kenji_office'),
  ]},
  {id:'conv_08388',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文を学会で配付しろ','Ren — paper conf-distribute','Mentor','hiroshi_boss'),
    mk('はい。研究費の減額が議題になっております','Yes — Research-fund-cut topic','Earnest','ren_uni'),
    mk('蓮、必需試薬の発注を忘れるな','Ren — essential-reagent-order don\'t-forget','Direction','hiroshi_boss'),
    mk('はい。論文の文章構文を見直しました','Yes — Paper-syntax review','Polite','ren_uni'),
    mk('蓮、世に名を造る研究を目指せ','Ren — name-build research aim','Direction','hiroshi_boss'),
    mk('はい。研究で充足感を得ております','Yes — Research-satisfaction got','Earnest','ren_uni'),
    mk('蓮、論文投稿の取消はしないこと','Ren — paper-submit-cancel don\'t','Direction','hiroshi_boss'),
    mk('はい。研究用物品の買物リストを整えました','Yes — Research-goods-shopping-list prep','Earnest close','ren_uni'),
  ]},
  {id:'conv_08389',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、防犯資料を配付しております','Police crime-prev-doc distribute','Calm','takeda_officer'),
    mk('はい。警察、罰金の減額措置をされたんですね','Yes — Police fine-cut-measure done','Curious','kenji_office'),
    mk('警察、必需品の救援を実施しております','Police essentials-relief conduct','Procedural','takeda_officer'),
    mk('はい。警察、調書の構文を厳密に確認されておられますね','Yes — Police statement-syntax strict-verify','Cooperative','kenji_office'),
    mk('警察、安全な街を造る取り組みを進めております','Police safe-town-build initiative advance','Procedural','takeda_officer'),
    mk('はい。警察の活動が地域に充足感を与えますね','Yes — Police-activity region-satisfaction-give','Cooperative','kenji_office'),
    mk('警察、不正取消を発表しました','Police fraud-cancel announce','Procedural','takeda_officer'),
    mk('はい。警察、買物中の防犯活動もありがたいです','Yes — Police shopping crime-prev grateful','Close','kenji_office'),
  ]},
  {id:'conv_08390',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業期、自ら社員に資料を配付された','Dad — founding self-staff-material-distribute','Sage','hiroshi_elder'),
    mk('はい。お父さんは無理な減額を社員に強いられなかった','Yes — Dad unreasonable-cut staff-don\'t-force','Commitment','hiroshi_boss'),
    mk('お父さん、必需品を社員に提供されたぞ','Dad — essentials staff-provided','Wistful','hiroshi_elder'),
    mk('はい。お父さんは商品名の構文にもこだわられた','Yes — Dad product-name-syntax particular','Reflective','hiroshi_boss'),
    mk('お父さん、人を信用で造る経営をされた','Dad — people-trust-build mgmt','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員の充足を最優先された','Yes — Dad staff-satisfaction top-prio','Reflective','hiroshi_boss'),
    mk('お父さん、契約の取消にも誠実に対応された','Dad — contract-cancel sincere-resp','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員の買物にも理解があった','Yes — Dad staff-shopping understanding','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08391',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、海外を放浪する若者の心理を論文で扱っていましたね','Ren — overseas-wander youth-psyche paper','Calm','asuka_teacher'),
    mk('はい、社会の分断の構造を論文で扱いました','Yes — social-division-structure paper','Earnest','ren_uni'),
    mk('蓮さん、改憲論議の歴史を論文で扱っていましたね','Ren — const-amend-debate history paper','Reflective','asuka_teacher'),
    mk('はい、台風が直撃する地域の防災を論文で扱いました','Yes — typhoon-direct-hit disaster-prev paper','Earnest','ren_uni'),
    mk('哀れな主人公の物語を論文で扱っていましたね','Pathetic-protagonist story paper','Engaged','asuka_teacher'),
    mk('はい、中高年の労働問題を論文で扱いました','Yes — middle-aged labor-issue paper','Earnest','ren_uni'),
    mk('蓮さん、訴訟の棄却理由を論文で扱っていましたね','Ren — lawsuit-dismiss reason paper','Reflective','asuka_teacher'),
    mk('はい、武士の斬り合い文化を論文で扱いました','Yes — samurai sword-fight culture paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08392',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、容疑者は放浪生活をしていたと、警察、把握ですね','Case suspect-wander-life police-grasp','Calm','takeda_officer'),
    mk('警察、地域の分断を防ぐ活動も行います','Police region-division-prevent activity do','Procedural','takeda_officer'),
    mk('本件、改憲論議とは関係ないと、警察、明示されたんですね','Case const-amend-not-related police-specify','Curious','ren_uni'),
    mk('警察、台風直撃の被害現場で捜査しております','Police typhoon-direct-hit damage-scene inv','Procedural','takeda_officer'),
    mk('本件、警察、哀れな被害者を救援されたんですね','Case police pathetic-victim relief','Reflective','ren_uni'),
    mk('警察、中高年の被害者支援に努めております','Police middle-aged-victim-support try','Procedural','takeda_officer'),
    mk('本件、裁判所の棄却判決を警察、受け止めましたね','Case court-dismiss-ruling police-received','Reflective','ren_uni'),
    mk('警察、刀での斬り合い事件を捜査いたしました','Police sword-fight-case inv-did','Close','takeda_officer'),
  ]},
  {id:'conv_08393',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、海外を放浪する若者の心理を論文で扱っていましたね','Sakura — wander youth paper','Calm','asuka_teacher'),
    mk('はい、社会の分断の構造を論文で扱いました','Yes — social-division paper','Earnest teen','sakura_teen'),
    mk('改憲論議の歴史を論文で扱っていましたね','Const-amend paper','Reflective','asuka_teacher'),
    mk('はい、台風が直撃する地域の防災を論文で扱いました','Yes — typhoon-direct paper','Earnest','sakura_teen'),
    mk('哀れな主人公の物語を論文で扱っていましたね','Pathetic-protagonist paper','Engaged','asuka_teacher'),
    mk('はい、中高年の労働問題を論文で扱いました','Yes — middle-aged paper','Earnest','sakura_teen'),
    mk('訴訟の棄却理由を論文で扱っていましたね','Lawsuit-dismiss paper','Reflective','asuka_teacher'),
    mk('はい、武士の斬り合い文化を論文で扱いました','Yes — samurai-sword paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08394',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、放浪型の患者さんを医療チームでサポートしております','Ren — wander-type patient med-team support','Calm','saito_doctor'),
    mk('はい、家族の分断による心の傷を医療チームで丁寧に診ます','Yes — Family-division mental-wound med-team careful','Patient','saito_doctor'),
    mk('医療政策の改憲には貴院、関心を持っていらっしゃるんですね、先生','Med-policy const-amend your-hosp interested, sensei','Curious','ren_uni'),
    mk('はい、台風直撃時の救急対応を医療チームで訓練しております','Yes — Typhoon-hit ER med-team train','Patient','saito_doctor'),
    mk('哀れな状況の患者さんへ、貴院、丁寧に向き合われますね、先生','Pathetic-patient your-hosp polite-face, sensei','Reflective','ren_uni'),
    mk('はい、中高年の生活習慣病を医療チームで指導しております','Yes — Middle-aged-lifestyle-disease med-team guide','Patient','saito_doctor'),
    mk('医療裁判の棄却事例を、貴院、参考になさったんですね、先生','Med-court-dismiss-case your-hosp reference, sensei','Reflective','ren_uni'),
    mk('はい、武術の斬り合い式の稽古を医療チームで負傷時にサポートしました','Yes — Martial-sword-cut-training injury med-team support','Patient close','saito_doctor'),
  ]},
  {id:'conv_08395',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、若手の放浪を防ぐキャリア相談を強化しろ','Our co — youth-wander-prevent career-consult strengthen','Crisp','hiroshi_boss'),
    mk('はい。社内の分断を解消する社員交流会を行います','Yes — In-house-division-resolve staff-exchange do','Methodical','kenji_office'),
    mk('当社、改憲に関する社外発信は控えろ','Our co — const-amend-out-of-co-comment restrain','Direction','hiroshi_boss'),
    mk('はい。台風直撃時の業務継続計画を整えました','Yes — Typhoon-hit BCP prep','Update','kenji_office'),
    mk('哀れな広告で同情を引くな','Pathetic-ad sympathy-draw don\'t','Direction','hiroshi_boss'),
    mk('はい。中高年向け商品の開発を進めております','Yes — Middle-aged-target product develop','Update','kenji_office'),
    mk('当社、提案棄却の判断は社長決裁とする','Our co — proposal-dismiss-decision pres-decide','Direction','hiroshi_boss'),
    mk('はい。職場での斬り合いのような対立を避けます','Yes — Workplace sword-fight-like conflict avoid','Close','kenji_office'),
  ]},
  {id:'conv_08396',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様の顎、上向きでお洒落でいらしたよ、メイちゃん','Aoi — cust-jaw-up stylish Mei','Praising','mei_romantic'),
    mk('葵、お客様が灸の話で盛り上がってたよ、メイちゃん','Aoi — cust moxibustion-talk lively Mei','Animated','aoi_barista'),
    mk('葵、リラクゼーションセラピーのメニューも検討しようね、メイちゃん','Aoi — relaxation-therapy-menu consider Mei','Eager','mei_romantic'),
    mk('葵、ブタの貯金箱、お土産売り場に並べたよ、メイちゃん','Aoi — pig-piggy-bank souvenir-shelf displayed Mei','Animated','aoi_barista'),
    mk('葵、お客様、歌劇を見に行かれるそうよ、メイちゃん','Aoi — cust opera-go-see Mei','Reflective','mei_romantic'),
    mk('葵、お祭りで子どもを抱きしめたお父さん、いらしたね、メイちゃん','Aoi — fest child-hugged Dad-existed Mei','Tender','aoi_barista'),
    mk('葵、お客様の車のアクセル音がすごかったね、メイちゃん','Aoi — cust-car-accel-sound amazing Mei','Wry','mei_romantic'),
    mk('葵、卓球の大会、お客様優勝されたそうよ、メイちゃん','Aoi — table-tennis-tourn cust-won Mei','Animated close','aoi_barista'),
  ]},
  {id:'conv_08397',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんの顎が立派でらしたぞ','Gran — youth Dad-jaw splendid','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お腰の痛みを灸で治されたわよね、あなた?','Yes — Grandpa back-pain moxibustion-treated, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、村の長老がセラピーをしてくださったぞ','Gran — youth village-elder-therapy-did','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ブタ年生まれだったわよね、あなた?','Grandpa — pig-year-born, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと歌劇を見に行ったぞ','Gran — youth Dad-opera-saw','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫さんを優しく抱きしめてらしたわよね、あなた?','Grandpa — grandkid gentle-hug, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、車のアクセルを踏み間違えるお父さんはいらしたぞ','Gran — youth car-accel-mistake Dad-existed','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、卓球の選手だったわよね、あなた?','Grandpa — youth table-tennis-player, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08398',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんの顎、立派でしょ','Sho — Dad-jaw splendid?','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、灸って聞いたことあるよ','Mei-sis — me moxibustion-heard','Curious child','sho_child'),
    mk('翔くん、お母さんがセラピーに通っているそうよ','Sho — Mom-therapy-attend','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ブタのおもちゃ集めてるよ','Mei-sis — me pig-toy-collect','Eager child','sho_child'),
    mk('翔くん、メイ姉さんが歌劇のチケット買ったの','Sho — Mei-sis opera-ticket-bought','Animated','mei_romantic'),
    mk('メイ姉さん、ぼく、お母さんに抱きしめてもらいたいな','Mei-sis — me Mom-hug-want','Tender child','sho_child'),
    mk('翔くん、お父さんがアクセル軽く踏んで運転されてたわ','Sho — Dad accel-soft drove','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、卓球の練習頑張ってるよ','Mei-sis — me table-tennis-practice try','Proud close','sho_child'),
  ]},
  {id:'conv_08399',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、顎が割れててカッコいいな','Riku — jaw-split cool','Praising teen','sakura_teen'),
    mk('お前、おばあちゃんに灸据えられたろ?桜','You — Grandma moxibustion-applied? Sakura','Teasing','riku_teen'),
    mk('リク、お前のお母さん、セラピーに通ってるんだろ?','Riku — your-Mom therapy-attend?','Curious','sakura_teen'),
    mk('お前、ブタ年生まれだろ?桜','You — pig-year-born? Sakura','Curious','riku_teen'),
    mk('リク、お前、お祖母ちゃんと歌劇行ったろ?','Riku — Grandma-opera-went?','Curious','sakura_teen'),
    mk('お前、彼女を抱きしめたのか?桜','You — gf-hugged? Sakura','Teasing','riku_teen'),
    mk('リク、お前、お父さんの車のアクセル踏みたがるな','Riku — Dad-car-accel-want-step','Wry','sakura_teen'),
    mk('お前、卓球部入ったろ?桜','You — table-tennis-club joined? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08400',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんの顎ヒゲ、お洒落ね','Sho — Dad-jaw-beard stylish','Reflective','yumiko_mom'),
    mk('ママ、ぼく、おばあちゃんに灸してもらいたい','Mom — me Grandma-moxibustion-want','Eager child','sho_child'),
    mk('翔くん、ママはアロマセラピーに通ってるのよ','Sho — Mom aroma-therapy-attend','Reflective','yumiko_mom'),
    mk('ママ、ぼく、ブタの絵本好きだよ','Mom — me pig-picture-book like','Eager child','sho_child'),
    mk('翔くん、お父さんが宝塚歌劇のチケットを買ってきたわ','Sho — Dad Takarazuka-opera-ticket bought','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに抱きしめてもらったよ','Mom — me Dad-hug-got','Tender child','sho_child'),
    mk('翔くん、お父さんが、アクセル軽く踏むよう気をつけてるって','Sho — Dad accel-soft careful','Reflective','yumiko_mom'),
    mk('ママ、ぼく、卓球の試合、勝ったよ','Mom — me table-tennis match-won','Proud close','sho_child'),
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

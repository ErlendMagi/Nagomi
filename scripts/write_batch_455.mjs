import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_455 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['言い換えれ','気がつき','いっさい','ズバリ','いつしか','まいる','解る','はなはだ']
const B_T = ['趣向','営み','勤める','試聴','範疇','本位','比重','集英社']
const C_T = ['志願','裏切り','改悪','増幅','治癒','固執','埋葬','ファシズム']
const D_T = ['渦','大雪','鮨','呪文','電灯','コンセント','キノコ','ハンバーガー']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09061',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、難しい言葉を言い換えれば翔くんも分かるわね','Sho — hard-word-paraphrase-Sho-can','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんの優しさに気がついたよ','Mom — me Grandpa-kind-noticed','Earnest child','sho_child'),
    mk('翔くん、お父さんは、いっさい愚痴を仰らない方ね','Sho — Dad-not-at-all-comp-say','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんに「ズバリ言うぞ」って言われたよ','Mom — me Grandpa-"frank-say"-told','Eager child','sho_child'),
    mk('翔くん、いつしかお父さんに似て大きくなったわね','Sho — sometime-Dad-similar-big','Tender','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんのご機嫌を伺いに、まいるよ','Mom — me Grandpa-mood-going','Earnest child','sho_child'),
    mk('翔くん、お父さんは難しい本も解る方ね','Sho — Dad-hard-book-understand','Reflective','yumiko_mom'),
    mk('ママ、ぼく、はなはだ恐縮ですって、お祖父ちゃんが仰ってたよ','Mom — me "very-sorry"-Grandpa-said','Reflective close','sho_child'),
  ]},
  {id:'conv_09062',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様向けに専門用語を言い換えれば伝わるわね、メイちゃん','Aoi — cust-tech-paraphrase-conv Mei','Direction','mei_romantic'),
    mk('葵、お客様の好みに気がついて先回り対応しましょう、メイちゃん','Aoi — cust-taste-notice-pre Mei','Direction','aoi_barista'),
    mk('葵、いっさいの値引きは無しでいきましょう、メイちゃん','Aoi — none-discount-go Mei','Direction','mei_romantic'),
    mk('葵、お客様、ズバリ核心を突くご意見をされたよ、メイちゃん','Aoi — cust-frank-core-view Mei','Reflective','aoi_barista'),
    mk('葵、いつしか常連様が増えてきたね、メイちゃん','Aoi — sometime-reg-up Mei','Pleased','mei_romantic'),
    mk('葵、お客様のお宅にもまいる機会を作りたいね、メイちゃん','Aoi — cust-home-visit-want Mei','Tender','aoi_barista'),
    mk('葵、お客様のご要望が解るようになってきたよ、メイちゃん','Aoi — cust-req-understand Mei','Pleased','mei_romantic'),
    mk('葵、はなはだ申し訳ないけど、本日早じまいします、メイちゃん','Aoi — very-sorry-today-close-early Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_09063',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、お父さんは難しい話を言い換えれば孫にも伝えられた','Gran — Dad-hard-paraphrase-grandkid','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ばあさんの体調に気がついて下さったわよね、あなた?','Yes — Grandpa-gran-health-noticed, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは、いっさい愚痴を言わなかった','Gran — youth Dad-none-comp','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ズバリ「お前は強い人だ」と仰ったわよね、あなた?','Grandpa — frank-"you-strong"-said, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんといつしか結婚生活も長くなったぞ','Gran — youth Dad-sometime-marriage-long','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お年寄りのお宅にお見舞いにまいる事もあったわよね、あなた?','Grandpa — elder-home-visit, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは古典文学が解る方だった','Gran — youth Dad-classic-lit-understand','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、はなはだ慎ましやかなお人柄でらしたわよね、あなた?','Grandpa — very-humble-person, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09064',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、難しい問題は言い換えれば分かるぞ','Riku — hard-prob-paraphrase-can','Direction teen','sakura_teen'),
    mk('お前、テストで間違いに気がついて修正できたな、桜','You — test-mistake-notice-fix Sakura','Praising','riku_teen'),
    mk('リク、お前、いっさい説明しないで答えだけ書くなよ','Riku — none-explain-only-answer-not','Direction','sakura_teen'),
    mk('お前、ズバリ俺の弱点ついてくるな、桜','You — frank-my-weak-point Sakura','Wry','riku_teen'),
    mk('リク、いつしか俺ら高三だな','Riku — sometime-3rd-yr','Reflective','sakura_teen'),
    mk('お前のところにまいるけど、いいか?桜','You-place-going-OK? Sakura','Curious','riku_teen'),
    mk('リク、お前のテスト点、なんで解るんだ?','Riku — your-test-why-understand?','Curious','sakura_teen'),
    mk('お前、はなはだ自信過剰だぞ、桜','You — very-overconf Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_09065',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんが難しい言葉を言い換えればわかりやすくなるわよ','Sho — Mei-sis-hard-paraphrase-clear','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんの優しさに気がつかなかった事もあった','Mei-sis — me Mei-sis-kind-not-notice','Reflective child','sho_child'),
    mk('翔くん、メイ姉さんは、いっさいの嘘をつかない人なのよ','Sho — Mei-sis-none-lie','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ズバリ正直に言うと、勉強嫌いだよ','Mei-sis — me frank-study-hate','Earnest child','sho_child'),
    mk('翔くん、いつしか翔くんが、メイ姉さんを越える絵描きになるかもね','Sho — sometime-Sho-Mei-sis-pass-artist','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんのお家にまいるよ','Mei-sis — me Mei-sis-home-going','Eager child','sho_child'),
    mk('翔くん、メイ姉さんの絵は解る人にはたまらないのよ','Sho — Mei-sis-art-understand-irresist','Reflective','mei_romantic'),
    mk('メイ姉さん、はなはだ恐縮ですが、もう一枚絵いただけませんか','Mei-sis — very-sorry-one-more-pic-please','Polite close','sho_child'),
  ]},
  {id:'conv_09066',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新商品に趣向を凝らせ','Our co — new-prod-design-craft','Crisp','hiroshi_boss'),
    mk('はい。社員の日々の営みを大切にいたします','Yes — Staff-daily-life-cherish','Methodical','kenji_office'),
    mk('当社、勤める社員に誇りを持たせろ','Our co — work-staff-pride','Direction','hiroshi_boss'),
    mk('はい。新CD試聴会を計画しております','Yes — New-CD-listen-plan','Update','kenji_office'),
    mk('当社、本件は通常範疇外として扱え','Our co — case-out-of-scope-handle','Direction','hiroshi_boss'),
    mk('はい。顧客本位の経営に徹します','Yes — Cust-focus-mgmt-strict','Update','kenji_office'),
    mk('当社、本業の比重を見直せ','Our co — main-biz-prop-review','Direction','hiroshi_boss'),
    mk('はい。集英社系の出版社と提携を進めます','Yes — Shueisha-pub-partner','Close','kenji_office'),
  ]},
  {id:'conv_09067',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('店内の演出に趣向を凝らしましょう','Store-decor-design-craft','Brisk','yuki_office'),
    mk('はい。毎日の営みを大事にしたお店作りをします','Yes — Daily-life-cherish-store','Cooperative','kenji_office'),
    mk('社員に長く勤めるキャリアパスを示しましょう','Staff-long-work-career-show','Direction','yuki_office'),
    mk('はい。新製品の試聴会を関係者向けに開きます','Yes — New-prod-listen-rel-open','Update','kenji_office'),
    mk('範疇外の依頼は丁寧にお断りしましょう','Out-of-scope-polite-refuse','Direction','yuki_office'),
    mk('はい。お客様本位のサービスを徹底します','Yes — Cust-focus-svc-strict','Update','kenji_office'),
    mk('海外事業の比重を上げていきましょう','Overseas-prop-up','Direction','yuki_office'),
    mk('はい。集英社の漫画展示も検討します','Yes — Shueisha-manga-show-consider','Close','kenji_office'),
  ]},
  {id:'conv_09068',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文発表に趣向を凝らしろ','Ren — paper-pres-design-craft','Mentor','hiroshi_boss'),
    mk('はい。研究者の日々の営みを論文で扱いました','Yes — Researcher-daily-life paper','Earnest','ren_uni'),
    mk('蓮、研究室に長く勤める覚悟を持て','Ren — lab-long-work-resolve','Direction','hiroshi_boss'),
    mk('はい。学会発表前に試聴会で予行練習しました','Yes — Conf-pre-listen-rehearsal','Polite','ren_uni'),
    mk('蓮、自分の研究範疇を明確にしろ','Ren — own-research-scope-clear','Direction','hiroshi_boss'),
    mk('はい。研究者本位の研究室運営を心がけます','Yes — Researcher-focus-lab-run','Earnest','ren_uni'),
    mk('蓮、論文の中で実証データの比重を上げろ','Ren — paper-empirical-data-prop-up','Direction','hiroshi_boss'),
    mk('はい。集英社の雑誌に研究紹介の寄稿予定です','Yes — Shueisha-mag-research-contrib','Earnest close','ren_uni'),
  ]},
  {id:'conv_09069',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、防犯ポスターに趣向を凝らされてますね','Police crime-prev-poster-design-craft','Cooperative','kenji_office'),
    mk('警察、地域の営みを尊重した防犯活動、ありがたいです','Police local-life-respect-crime-prev grateful','Cooperative','kenji_office'),
    mk('警察、地域の駐在所に長く勤める警察官、頼もしいです','Police local-stat-long-work-officer reliable','Cooperative','kenji_office'),
    mk('警察、捜査資料の試聴会的な公開もされてますね','Police inv-doc-listen-pub','Cooperative','kenji_office'),
    mk('警察、本件は管轄範疇内でご対応ですね','Police case-jurisdic-scope-resp','Cooperative','kenji_office'),
    mk('警察、市民本位の捜査姿勢、頼もしいです','Police citizen-focus-inv reliable','Cooperative','kenji_office'),
    mk('警察、暴力犯罪の比重を下げる活動を続けますね','Police violence-prop-down-cont','Cooperative','kenji_office'),
    mk('警察、集英社の犯罪マンガに関する取材にもご対応ですね','Police Shueisha-crime-manga-interview-resp','Close','kenji_office'),
  ]},
  {id:'conv_09070',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、新商品に趣向を凝らされたぞ','Dad — founding new-prod-design-craft','Sage','hiroshi_elder'),
    mk('はい。お父さんは社員の営みを大切にされた','Yes — Dad staff-life-cherish','Commitment','hiroshi_boss'),
    mk('お父さん、長く勤める社員を表彰されたぞ','Dad — long-work-staff-award','Wistful','hiroshi_elder'),
    mk('はい。お父さんは試聴会のような場を社員に与えられた','Yes — Dad listen-meet-staff','Reflective','hiroshi_boss'),
    mk('お父さん、自分の範疇を弁えて経営されたぞ','Dad — own-scope-mind-mgmt','Wistful','hiroshi_elder'),
    mk('はい。お父さんはお客様本位を貫かれた','Yes — Dad cust-focus-keep','Reflective','hiroshi_boss'),
    mk('お父さん、主力事業の比重を時代に応じて変えられたぞ','Dad — main-biz-prop-era-change','Wistful','hiroshi_elder'),
    mk('はい。お父さんは集英社的な大手出版社とも提携された','Yes — Dad Shueisha-major-pub-partner','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09071',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、戦時志願兵の心理研究を論文で扱いましたね','Ren — war-vol-soldier-psy paper','Calm','asuka_teacher'),
    mk('はい、政治家の裏切りの事例史を論文で扱いました','Yes — Pol-betray-case paper','Earnest','ren_uni'),
    mk('蓮さん、改悪と批判された制度改革を論文で扱いましたね','Ren — chg-worse-crit-reform paper','Reflective','asuka_teacher'),
    mk('はい、メディアによる情報増幅の論点を論文で扱いました','Yes — Media-amp-info paper','Earnest','ren_uni'),
    mk('伝統医療における自然治癒の研究を論文で扱いましたね','Trad-med-nat-heal paper','Engaged','asuka_teacher'),
    mk('はい、政策に固執して失敗した例を論文で扱いました','Yes — Pol-stick-fail paper','Earnest','ren_uni'),
    mk('蓮さん、戦死者の埋葬慣習史を論文で扱いましたね','Ren — war-dead-burial-hist paper','Reflective','asuka_teacher'),
    mk('はい、ファシズム台頭の歴史を論文で扱いました','Yes — Fascism-rise-hist paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09072',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、容疑者が自ら志願して出頭された事を警察、確認されましたね','Case suspect-self-vol-turn-in police-confirm','Reflective','ren_uni'),
    mk('警察、被害者を裏切りに似た形で扱った加害者を追います','Police victim-betray-suspect-pursue','Procedural','takeda_officer'),
    mk('本件、制度の改悪に乗じた犯罪を警察、警戒されてますね','Case sys-worse-exploit-crime police-watch','Reflective','ren_uni'),
    mk('警察、SNSでの情報増幅にも注意します','Police SNS-amp-info-care','Procedural','takeda_officer'),
    mk('本件、被害者の治癒を願って警察、慎重に対応されますね','Case victim-heal-wish-careful','Reflective','ren_uni'),
    mk('警察、容疑者が証言に固執する場合の対処も訓練しております','Police suspect-test-stick-handle-drill','Procedural','takeda_officer'),
    mk('本件、不法埋葬の捜査を警察、なさってますね','Case illegal-burial-inv','Reflective','ren_uni'),
    mk('警察、ファシズム的団体への警戒を継続します','Police fascism-group-watch-cont','Close','takeda_officer'),
  ]},
  {id:'conv_09073',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、戦時志願兵の心理研究を論文で扱いましたね','Sakura — war-vol-psy paper','Calm','asuka_teacher'),
    mk('はい、政治家の裏切りの事例史を論文で扱いました','Yes — Pol-betray paper','Earnest teen','sakura_teen'),
    mk('改悪と批判された制度改革を論文で扱いましたね','Chg-worse-reform paper','Reflective','asuka_teacher'),
    mk('はい、メディアによる情報増幅を論文で扱いました','Yes — Media-amp paper','Earnest','sakura_teen'),
    mk('伝統医療における自然治癒を論文で扱いましたね','Trad-nat-heal paper','Engaged','asuka_teacher'),
    mk('はい、政策に固執して失敗した例を論文で扱いました','Yes — Pol-stick-fail paper','Earnest','sakura_teen'),
    mk('戦死者の埋葬慣習史を論文で扱いましたね','War-burial paper','Reflective','asuka_teacher'),
    mk('はい、ファシズム台頭の歴史を論文で扱いました','Yes — Fascism paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09074',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、臨床試験への志願者を医療チームで丁寧に対応します','Ren — clin-trial-vol med-team-careful','Calm','saito_doctor'),
    mk('はい、医療従事者が患者を裏切りに似た態度で扱う事のないよう医療チームで戒めます','Yes — Med-staff-betray-att-prev med-team-admon','Patient','saito_doctor'),
    mk('医療制度の改悪を、貴院、慎重に評価されてますね、先生','Med-sys-worse your-hosp eval, sensei','Reflective','ren_uni'),
    mk('はい、症状増幅の予兆を医療チームで早期発見します','Yes — Symp-amp-sign med-team early-det','Patient','saito_doctor'),
    mk('自然治癒力を高める指導を、貴院、なさってるんですね、先生','Nat-heal-guide your-hosp, sensei','Curious','ren_uni'),
    mk('はい、特定治療への固執を防ぐため医療チームで複数案を提示します','Yes — Specific-stick-prev med-team multi-plan','Patient','saito_doctor'),
    mk('医療廃棄物の埋葬基準を、貴院、厳格に守られてますね、先生','Med-waste-burial-strict your-hosp keep, sensei','Reflective','ren_uni'),
    mk('はい、ファシズム的医療体制を医療チームで否定しております','Yes — Fascism-med-sys med-team-deny','Patient close','saito_doctor'),
  ]},
  {id:'conv_09075',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、社員に過度な志願精神を強いるな','Our co — staff-excess-vol-not-strict','Crisp','hiroshi_boss'),
    mk('はい。社員の裏切りに対しても対話を試みます','Yes — Staff-betray-dialog-try','Methodical','kenji_office'),
    mk('当社、制度改悪と取られぬ改革を進めろ','Our co — sys-worse-not-reform','Direction','hiroshi_boss'),
    mk('はい。SNS増幅効果を活用したマーケティングをします','Yes — SNS-amp-mktg','Update','kenji_office'),
    mk('当社、社員のメンタル治癒を支援しろ','Our co — staff-mental-heal-supp','Direction','hiroshi_boss'),
    mk('はい。過去の成功に固執しない方針です','Yes — Past-success-stick-not','Update','kenji_office'),
    mk('当社、廃棄物の埋葬を法令に従って処理しろ','Our co — waste-burial-law-comply','Direction','hiroshi_boss'),
    mk('はい。社内文化がファシズム的にならぬよう注意します','Yes — Co-culture-fascism-not-care','Close','kenji_office'),
  ]},
  {id:'conv_09076',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、海の渦のお話されてたよ、メイちゃん','Aoi — cust-sea-whirlpool-told Mei','Reflective','mei_romantic'),
    mk('葵、明日は大雪の予報ね、メイちゃん','Aoi — tomorrow-heavy-snow-forecast Mei','Reflective','aoi_barista'),
    mk('葵、お客様、近所の鮨屋に行かれたって、メイちゃん','Aoi — cust-neighbor-sushi-went Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お子様に呪文を唱える絵本読まれたって、メイちゃん','Aoi — cust-child-spell-book Mei','Reflective','aoi_barista'),
    mk('葵、お店の電灯、新しいLEDに換えましょう、メイちゃん','Aoi — store-light-LED-change Mei','Direction','mei_romantic'),
    mk('葵、コンセントを増やす工事を頼みたいね、メイちゃん','Aoi — outlet-add-work-want Mei','Reflective','aoi_barista'),
    mk('葵、新メニュー、キノコのスープ加えましょう、メイちゃん','Aoi — new-menu-mushroom-soup-add Mei','Animated','mei_romantic'),
    mk('葵、お子様、ハンバーガーを選ばれたよ、メイちゃん','Aoi — child-hamburger-chose Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09077',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが海の渦に巻き込まれそうになった','Gran — youth Dad-sea-whirlpool-near','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、大雪の日に外出されたわよね、あなた?','Yes — Grandpa-heavy-snow-out, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと初めて鮨を食べに行ったぞ','Gran — youth Dad-sushi-first','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、孫に呪文のような暗号を教えてらしたわよね、あなた?','Grandpa — grandkid-spell-code-taught, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは古い電灯を直されたぞ','Gran — youth Dad-old-light-fixed','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、コンセントの位置をご自分で考えられたわよね、あなた?','Grandpa — outlet-pos-self-think, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、山でキノコ狩りをしたぞ','Gran — youth-mountain-mushroom-pick','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様にハンバーガーをご馳走されたわよね、あなた?','Grandpa — grandkid-hamburger-treated, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09078',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが海の渦のお話してくれたわ','Sho — Dad-sea-whirlpool-told','Reflective','mei_romantic'),
    mk('メイ姉さん、明日大雪になるから家にいた方がいいよね','Mei-sis — tomorrow-heavy-snow-home-safe','Reflective child','sho_child'),
    mk('翔くん、お父さんとお祖父ちゃんと鮨を食べに行きましょう','Sho — Dad-Grandpa-sushi-go','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、絵本で呪文を唱えるシーンが好きだよ','Mei-sis — me book-spell-scene-like','Eager child','sho_child'),
    mk('翔くん、お家の電灯がチカチカしてるわ','Sho — home-light-flicker','Wry','mei_romantic'),
    mk('メイ姉さん、ぼく、コンセントの差し込みお手伝いしたよ','Mei-sis — me outlet-plug-helped','Proud child','sho_child'),
    mk('翔くん、お祖父ちゃんとキノコ狩りに行きましょうね','Sho — Grandpa-mushroom-pick','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとハンバーガー食べたいよ','Mei-sis — me Dad-hamburger-want','Eager close','sho_child'),
  ]},
  {id:'conv_09079',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、海で渦に巻き込まれそうになっただろ?','Riku — sea-whirlpool-near?','Curious teen','sakura_teen'),
    mk('お前、大雪で学校休みになって喜んでただろ、桜','You — heavy-snow-school-off-glad Sakura','Wry','riku_teen'),
    mk('リク、お前、家族で鮨屋行ったろ?','Riku — fam-sushi?','Curious','sakura_teen'),
    mk('お前、ファンタジー小説で呪文唱えてんな、桜','You — fantasy-spell-read Sakura','Wry','riku_teen'),
    mk('リク、お前ん家、古い電灯まだ使ってんの?','Riku — your-home-old-light-still?','Curious','sakura_teen'),
    mk('お前、コンセント抜くの忘れんなよ、桜','You — outlet-unplug-don\'t-forget Sakura','Direction','riku_teen'),
    mk('リク、お前、山でキノコ狩り好きだろ?','Riku — mountain-mushroom-like?','Curious','sakura_teen'),
    mk('お前、放課後にハンバーガー食ってんな、桜','You — after-school-hamburger Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_09080',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが海の渦のお話してくれたわ','Sho — Dad-sea-whirlpool-told','Reflective','yumiko_mom'),
    mk('ママ、明日大雪だってニュースで言ってたよ','Mom — tomorrow-heavy-snow-news','Reflective child','sho_child'),
    mk('翔くん、お父さんと鮨屋に行きましょう','Sho — Dad-sushi-go','Tender','yumiko_mom'),
    mk('ママ、ぼく、絵本で「呪文を唱える」シーン読んだよ','Mom — me book-"spell"-scene-read','Eager child','sho_child'),
    mk('翔くん、お家の電灯を全部LEDに換えるそうよ','Sho — home-light-all-LED-change','Reflective','yumiko_mom'),
    mk('ママ、ぼく、コンセントには指入れちゃダメだよね','Mom — me outlet-finger-no','Earnest child','sho_child'),
    mk('翔くん、お祖父ちゃんとキノコ狩りに行きましょうね','Sho — Grandpa-mushroom-pick','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとハンバーガー食べたいよ','Mom — me Dad-hamburger-want','Eager close','sho_child'),
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

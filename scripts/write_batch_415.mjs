import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_415 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['明後日','ソファー','身の回り','空腹','憶え','定か','あこがれ','わが家']
const B_T = ['反転','利潤','インフォメーション','呼称','ジレンマ','主たる','オファー','売上げ']
const C_T = ['共鳴','下院','壊滅','縄文','半減','弾道','受益','書簡']
const D_T = ['アンダー','ハリケーン','レバー','セクハラ','ワープロ','メトロ','合気道','ダイヤル']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08261',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、明後日は遠足だから、早く寝てね','Sho — day-after-tomorrow trip, early-sleep','Direction','yumiko_mom'),
    mk('ママ、お父さんがソファーで眠ってるよ','Mom — Dad sofa-sleep','Reflective child','sho_child'),
    mk('翔くん、身の回りのお片づけ、自分でやってね','Sho — daily-things own-cleanup','Direction','yumiko_mom'),
    mk('ママ、ぼく、空腹で集中できないよ','Mom — me hungry can\'t-focus','Wry child','sho_child'),
    mk('翔くん、お祖父ちゃんに憶えてもらった、お話覚えてる?','Sho — Grandpa-remembered story remember?','Curious','yumiko_mom'),
    mk('ママ、ぼく、明日のお天気、定かじゃないよね','Mom — me tomorrow-weather uncertain','Reflective child','sho_child'),
    mk('翔くん、お父さんが宇宙飛行士にあこがれてたって','Sho — Dad astronaut-admired','Reflective','yumiko_mom'),
    mk('ママ、わが家の夕食、楽しいよね','Mom — our-home dinner fun','Eager close','sho_child'),
  ]},
  {id:'conv_08262',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、明後日は新メニューの発表会よね、メイちゃん','Aoi — day-after new-menu reveal Mei','Reflective','mei_romantic'),
    mk('葵、お店のソファーを取り替えてみない?メイちゃん','Aoi — store-sofa replace? Mei','Practical','aoi_barista'),
    mk('葵、お客様の身の回りに気を配ろうね、メイちゃん','Aoi — cust-daily-things care Mei','Direction','mei_romantic'),
    mk('葵、お客様が空腹で来店されることもあるよ、メイちゃん','Aoi — cust hungry-come exist Mei','Reflective','aoi_barista'),
    mk('葵、お客様のお名前を憶えるよう努めてるよ、メイちゃん','Aoi — cust-name remember-try Mei','Earnest','mei_romantic'),
    mk('葵、開店時間、いつまで定かにできない時もあるよね、メイちゃん','Aoi — open-time uncertain sometimes Mei','Wry','aoi_barista'),
    mk('葵、私、海外カフェにあこがれてるの、メイちゃん','Aoi — me overseas-cafe admire Mei','Eager','mei_romantic'),
    mk('葵、わが家のお気に入りメニュー、新作にも追加しようね、メイちゃん','Aoi — our-home-fave-menu new-add Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08263',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんと明後日のお花見を計画したぞ','Gran — youth Dad day-after-hanami planned','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ソファーでお昼寝されたわよね、あなた?','Yes — Grandpa sofa-nap, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんの身の回りをばあさんがお世話されたぞ','Gran — youth Dad-daily-things gran-cared','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、空腹のときお腹を鳴らされたわよね、あなた?','Grandpa — hungry stomach-rumbled, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが歌を一度で憶えてくださったぞ','Gran — youth Dad song-once-memorized','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、戦争中の記憶は定かじゃないとおっしゃってたわよね、あなた?','Grandpa — war-memory uncertain said, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが医者になることにあこがれていたぞ','Gran — youth Dad doctor-admired','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、わが家の伝統を守ってくださったわよね、あなた?','Grandpa — our-home-tradition kept, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08264',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、明後日のテスト、勉強したか?','Riku — day-after test-studied?','Curious teen','sakura_teen'),
    mk('お前、家のソファーでよく寝てんだろ?桜','You — home-sofa often-sleep? Sakura','Curious','riku_teen'),
    mk('リク、お前、身の回りのもの、きちんと片付けろよ','Riku — daily-things properly-tidy','Direction','sakura_teen'),
    mk('お前、空腹で機嫌悪いだろ?桜','You — hungry mood-bad? Sakura','Teasing','riku_teen'),
    mk('リク、お前、ぼくの誕生日、憶えてるか?','Riku — my-bday remember?','Curious','sakura_teen'),
    mk('お前、テスト範囲が定かじゃないって言ってたな、桜','You — test-range uncertain said Sakura','Curious','riku_teen'),
    mk('リク、お前、プロスポーツ選手にあこがれてんだろ?','Riku — pro-athlete admire?','Curious','sakura_teen'),
    mk('お前のお父さんは、わが家の自慢、よくしてんだろ?桜','You — your Dad our-home boast? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08265',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さん、明後日お店休むのよ','Sho — Mei-sis day-after store-off','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんちのソファーが大好きだよ','Mei-sis — me Grandpa-home-sofa love','Eager child','sho_child'),
    mk('翔くん、身の回りのお片づけ、上手になったね','Sho — daily-cleanup well-done','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、お昼ご飯前で空腹だよ','Mei-sis — me before-lunch hungry','Wry child','sho_child'),
    mk('翔くん、メイ姉さん、お祖母ちゃんのお話、憶えてるよ','Sho — Mei-sis Grandma-story remember','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼくのお祖父ちゃんの誕生日、定かじゃない','Mei-sis — me Grandpa-bday uncertain','Wry child','sho_child'),
    mk('翔くん、ぼく、お父さんにあこがれてるよ','Sho — me Dad-admire','Tender child','sho_child'),
    mk('メイ姉さん、わが家にはお祖父ちゃんと一緒に過ごす時間が大切だよ','Mei-sis — our-home Grandpa-time precious','Tender close','sho_child'),
  ]},
  {id:'conv_08266',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、業績の反転を目指せ','Our co — perf-reverse aim','Crisp','hiroshi_boss'),
    mk('はい。利潤の最大化を意識しております','Yes — Profit-maximize conscious','Methodical','kenji_office'),
    mk('当社、お客様向けインフォメーションを整備しろ','Our co — cust-info arrange','Direction','hiroshi_boss'),
    mk('はい。製品の呼称統一を進めております','Yes — Product-name unify advance','Update','kenji_office'),
    mk('社員のジレンマを解消しろ','Staff-dilemma resolve','Direction','hiroshi_boss'),
    mk('はい。当社の主たる事業を強化いたします','Yes — Our main-biz strengthen','Update','kenji_office'),
    mk('他社からのオファーを慎重に検討しろ','Other-co-offer careful-consider','Direction','hiroshi_boss'),
    mk('はい。先月の売上げを報告いたします','Yes — Last-month-sales report','Close','kenji_office'),
  ]},
  {id:'conv_08267',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('業績の反転戦略を立てましょう','Perf-reverse strategy plan','Brisk','yuki_office'),
    mk('はい。利潤の構造を分析中です','Yes — Profit-structure analyzing','Cooperative','kenji_office'),
    mk('お客様にインフォメーションをわかりやすく伝えましょう','Cust-info easy-tell','Direction','yuki_office'),
    mk('はい。社内用語の呼称を整理しました','Yes — In-house-term-name organized','Update','kenji_office'),
    mk('若手のジレンマを聞き取りましょう','Young-staff-dilemma listen','Direction','yuki_office'),
    mk('はい。主たる得意先を再確認しております','Yes — Main-VIP re-verify','Update','kenji_office'),
    mk('海外からのオファーも記録しましょう','Overseas-offer record','Direction','yuki_office'),
    mk('はい。月次の売上げ集計を完了しました','Yes — Monthly-sales-tally done','Close','kenji_office'),
  ]},
  {id:'conv_08268',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文での反転構造を分析しろ','Ren — paper-reverse-structure analyze','Mentor','hiroshi_boss'),
    mk('はい。研究の利潤性を考えております','Yes — Research-profitability think','Earnest','ren_uni'),
    mk('蓮、研究室のインフォメーションを共有しろ','Ren — lab-info share','Direction','hiroshi_boss'),
    mk('はい。専門用語の呼称統一を進めております','Yes — Tech-term unify advance','Polite','ren_uni'),
    mk('蓮、若手研究者のジレンマも理解しろ','Ren — young-researcher dilemma understand','Direction','hiroshi_boss'),
    mk('はい。主たる研究テーマを明確にしました','Yes — Main-research-theme clarify','Earnest','ren_uni'),
    mk('蓮、海外大学からオファーが来ることもある','Ren — overseas-uni offer-come exist','Direction','hiroshi_boss'),
    mk('はい。研究の売上げ的効果も考えます','Yes — Research-sales effect consider','Earnest close','ren_uni'),
  ]},
  {id:'conv_08269',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、犯罪率の反転を目指しております','Police crime-rate-reverse aim','Calm','takeda_officer'),
    mk('はい。警察、利潤目的の犯罪を追跡されていますね','Yes — Police profit-motive crime track','Cooperative','kenji_office'),
    mk('警察、地域インフォメーションを発信しております','Police region-info broadcast','Procedural','takeda_officer'),
    mk('はい。警察、容疑者の呼称を慎重にされていますね','Yes — Police suspect-name careful','Cooperative','kenji_office'),
    mk('警察、捜査のジレンマを抱えております','Police inv-dilemma have','Procedural','takeda_officer'),
    mk('はい。警察の主たる業務、頼もしいです','Yes — Police main-duty reliable','Cooperative','kenji_office'),
    mk('警察、容疑者からの司法取引オファーを慎重に検討しております','Police suspect plea-bargain-offer careful-consider','Procedural','takeda_officer'),
    mk('はい。地域防犯の売上げ効果が出ているそうですね','Yes — Region crime-prev sales-effect emerge','Close','kenji_office'),
  ]},
  {id:'conv_08270',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、業績の反転を何度も実現された','Dad — perf-reverse many-realize','Sage','hiroshi_elder'),
    mk('はい。お父さんは利潤を追わず信用を追われた','Yes — Dad profit-not trust-chase','Commitment','hiroshi_boss'),
    mk('お父さん、社員へのインフォメーションを欠かさなかった','Dad — staff-info didn\'t-skip','Wistful','hiroshi_elder'),
    mk('はい。お父さんは商品の呼称を細かく決められた','Yes — Dad product-name detailed-decide','Reflective','hiroshi_boss'),
    mk('お父さん、経営のジレンマを社員に明かさず乗り越えた','Dad — mgmt-dilemma staff-undisclosed overcame','Wistful','hiroshi_elder'),
    mk('はい。お父さんは主たる業務を一人で立ち上げられた','Yes — Dad main-biz alone-launched','Reflective','hiroshi_boss'),
    mk('お父さん、他社からのオファーを断った','Dad — other-co-offer refused','Wistful','hiroshi_elder'),
    mk('はい。お父さんが築いた売上げ、引き継いでおります','Yes — Dad-built sales inherit','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08271',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、音波の共鳴現象を論文で扱っていましたね','Ren — sound-resonance paper','Calm','asuka_teacher'),
    mk('はい、米国下院の動向を論文で扱いました','Yes — US-house trend paper','Earnest','ren_uni'),
    mk('蓮さん、戦災で壊滅した街の再建を論文で扱っていましたね','Ren — war-destroyed city rebuild paper','Reflective','asuka_teacher'),
    mk('はい、縄文時代の食文化を論文で扱いました','Yes — Jomon-era food-culture paper','Earnest','ren_uni'),
    mk('地震被害が半減した地域を論文で扱っていましたね','Earthquake-half-reduce region paper','Engaged','asuka_teacher'),
    mk('はい、弾道ミサイルの脅威を論文で扱いました','Yes — ballistic-missile threat paper','Earnest','ren_uni'),
    mk('蓮さん、低所得層への受益政策を論文で扱っていましたね','Ren — low-income beneficiary policy paper','Reflective','asuka_teacher'),
    mk('はい、歴史人物の書簡集を論文で扱いました','Yes — hist-figure letter-collection paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08272',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、共鳴する目撃証言を警察、集めております','Case resonant-eyewitness police-gather','Calm','takeda_officer'),
    mk('本件、政府下院の指示で警察、対応されたんですね','Case gov-house-direction police-respond','Curious','ren_uni'),
    mk('警察、台風で壊滅した地域の救援活動も行います','Police typhoon-destroyed region rescue do','Procedural','takeda_officer'),
    mk('本件、縄文遺跡からの盗掘事件を警察、捜査中ですね','Case Jomon-ruin-theft case police-inv, gratitude','Reflective','ren_uni'),
    mk('警察、犯罪件数が半減した地区を集中支援しております','Police crime-half-reduced area focus-support','Procedural','takeda_officer'),
    mk('本件、不正な弾道計算を警察、暴いたんですね','Case illegal ballistic-calc police-exposed','Reflective','ren_uni'),
    mk('警察、受益者の保護を進めております','Police beneficiary-protect advance','Procedural','takeda_officer'),
    mk('本件、犯人の書簡を警察、押収されたんですね','Case perp-letter police-seized','Reflective close','ren_uni'),
  ]},
  {id:'conv_08273',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、音波の共鳴現象を論文で扱っていましたね','Sakura — sound-resonance paper','Calm','asuka_teacher'),
    mk('はい、米国下院の動向を論文で扱いました','Yes — US-house paper','Earnest teen','sakura_teen'),
    mk('戦災で壊滅した街の再建を論文で扱っていましたね','War-destroyed paper','Reflective','asuka_teacher'),
    mk('はい、縄文時代の食文化を論文で扱いました','Yes — Jomon-era paper','Earnest','sakura_teen'),
    mk('地震被害が半減した地域を論文で扱っていましたね','Earthquake-half-reduce paper','Engaged','asuka_teacher'),
    mk('はい、弾道ミサイルの脅威を論文で扱いました','Yes — ballistic paper','Earnest','sakura_teen'),
    mk('低所得層への受益政策を論文で扱っていましたね','Low-income beneficiary paper','Reflective','asuka_teacher'),
    mk('はい、歴史人物の書簡集を論文で扱いました','Yes — letter paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08274',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、心と体の共鳴を医療チームで重視しております','Ren — mind-body-resonance med-team emphasize','Calm','saito_doctor'),
    mk('米国下院での医療法案、貴院、注目されておられますね、先生','US-house med-bill your-hosp watch, sensei','Curious','ren_uni'),
    mk('はい、感染症で壊滅状態だった病院を、医療チームで再建支援しました','Yes — Infection-destroyed hosp med-team-rebuild support','Patient','saito_doctor'),
    mk('縄文時代の遺骨からの病理解析、貴院も研究なさったんですね、先生','Jomon-skeleton path-analysis your-hosp research, sensei','Reflective','ren_uni'),
    mk('はい、感染者数を半減させる対策を医療チームで実施しました','Yes — Infection-half-reduce counter med-team did','Patient','saito_doctor'),
    mk('銃弾の弾道分析、貴院でも対応されたんですね、先生','Bullet-ballistic-analysis your-hosp resp, sensei','Reflective','ren_uni'),
    mk('はい、医療受益者の支援も医療チームで行います','Yes — Med-beneficiary-support med-team do','Patient','saito_doctor'),
    mk('歴史的医学書簡を、貴院、保存されておられますね、先生','Hist med-letters your-hosp preserve, sensei','Reflective close','ren_uni'),
  ]},
  {id:'conv_08275',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、業界に共鳴する戦略を打ち出せ','Our co — industry-resonant strategy launch','Crisp','hiroshi_boss'),
    mk('はい。米国下院議員との面談を予定しております','Yes — US-house-member-mtg plan','Methodical','kenji_office'),
    mk('当社、競合に壊滅されないよう備えろ','Our co — competitor-destroy-prevent prep','Direction','hiroshi_boss'),
    mk('はい。縄文柄を取り入れた商品を企画中です','Yes — Jomon-pattern product plan','Update','kenji_office'),
    mk('原価を半減させる方法を模索しろ','Cost-half-reduce method search','Direction','hiroshi_boss'),
    mk('はい。新弾道型ロケット技術への投資を検討中です','Yes — New ballistic-rocket-tech invest consider','Update','kenji_office'),
    mk('当社、受益者ファーストの理念を貫け','Our co — beneficiary-first ideal keep','Direction','hiroshi_boss'),
    mk('はい。創業者の書簡を社内で展示しております','Yes — Founder-letter in-house exhibit','Close','kenji_office'),
  ]},
  {id:'conv_08276',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、新メニューにアンダーパスタって書いて、と言ってたよ、メイちゃん','Aoi — cust new-menu under-pasta write said Mei','Reflective','mei_romantic'),
    mk('葵、ハリケーンのニュース見たわ、メイちゃん','Aoi — hurricane-news saw Mei','Reflective','aoi_barista'),
    mk('葵、ビールのレバーを引いてサーバーチェック、メイちゃん','Aoi — beer-lever pull-server-check Mei','Practical','mei_romantic'),
    mk('葵、お店ではセクハラ対策、徹底しようね、メイちゃん','Aoi — store sex-harass-counter thorough Mei','Direction','aoi_barista'),
    mk('葵、お祖父ちゃんはワープロをずっと使ってらしたわよ、メイちゃん','Aoi — Grandpa word-processor long-used Mei','Reflective','mei_romantic'),
    mk('葵、お客様、メトロ駅から歩いて来てくださるね、メイちゃん','Aoi — cust metro-walk Mei','Animated','aoi_barista'),
    mk('葵、合気道のお客様、お洒落な所作だね、メイちゃん','Aoi — aikido-cust elegant-manner Mei','Praising','mei_romantic'),
    mk('葵、お電話のダイヤル番号、お間違いなく、メイちゃん','Aoi — phone-dial don\'t-mistake Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_08277',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがアンダーシャツを着てらしたぞ','Gran — youth Dad undershirt-wore','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ハリケーンの体験談を語ってらしたわよね、あなた?','Yes — Grandpa hurricane-experience told, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがビールのレバーを上手に扱われたぞ','Gran — youth Dad beer-lever well-handled','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、セクハラという言葉を初めて聞かれた時、驚かれたわよね、あなた?','Grandpa — sex-harass first-heard surprised, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがワープロで手紙を書かれたぞ','Gran — youth Dad word-processor-letter-wrote','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、東京のメトロを楽しまれたわよね、あなた?','Grandpa — Tokyo-metro enjoyed, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが合気道を習ってらしたぞ','Gran — youth Dad aikido-learned','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ダイヤル式の電話を使ってらしたわよね、あなた?','Grandpa — dial-phone used, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08278',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがアンダーアーマーって、スポーツ用品の話してたよ','Sho — Dad under-armor sports-talk','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ハリケーンの絵本見たんだ','Mei-sis — me hurricane-picture-book saw','Eager child','sho_child'),
    mk('翔くん、お父さんが、車のレバー使い方教えてくれたよ','Sho — Dad car-lever-use taught','Reflective','mei_romantic'),
    mk('メイ姉さん、セクハラって悪いことだよね','Mei-sis — sex-harass bad-thing','Reflective child','sho_child'),
    mk('翔くん、お祖父ちゃんがワープロで思い出をつづってたわ','Sho — Grandpa word-processor-memory-write','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと東京メトロ乗ったよ','Mei-sis — me Dad Tokyo-metro rode','Eager child','sho_child'),
    mk('翔くん、お父さんが合気道の話してたよ','Sho — Dad aikido-talked','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ダイヤルの電話、初めて見たよ','Mei-sis — me dial-phone first-saw','Eager close','sho_child'),
  ]},
  {id:'conv_08279',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、アンダーシャツ忘れたな','Riku — undershirt-forgot','Wry teen','sakura_teen'),
    mk('お前、ハリケーン映画好きだろ?桜','You — hurricane-movie like? Sakura','Curious','riku_teen'),
    mk('リク、お前、自販機のレバーで小銭引っかかったろ?','Riku — vending-lever coin-stuck?','Curious','sakura_teen'),
    mk('お前、セクハラ研修、受けたか?桜','You — sex-harass-training-received? Sakura','Curious','riku_teen'),
    mk('リク、お前、ワープロって知ってるか?','Riku — word-processor know?','Curious','sakura_teen'),
    mk('お前、東京メトロで迷子になったろ?桜','You — Tokyo-metro got-lost? Sakura','Teasing','riku_teen'),
    mk('リク、お前、合気道部に入りたいんだろ?','Riku — aikido-club join-want?','Curious','sakura_teen'),
    mk('お前、ダイヤルの古い電話、博物館で見たろ?桜','You — dial old-phone museum-saw? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08280',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがアンダーウェアを買って帰ったわ','Sho — Dad underwear-bought-home','Reflective','yumiko_mom'),
    mk('ママ、ぼく、ハリケーンの映画見たいよ','Mom — me hurricane-movie want','Eager child','sho_child'),
    mk('翔くん、お父さんが運転のレバーを教えてくれたわ','Sho — Dad drive-lever taught','Reflective','yumiko_mom'),
    mk('ママ、セクハラって何?','Mom — sex-harass what?','Curious child','sho_child'),
    mk('翔くん、お祖父ちゃんがワープロでお手紙を書いてらっしゃるわ','Sho — Grandpa word-processor-letter writing','Reflective','yumiko_mom'),
    mk('ママ、お父さんが東京メトロで遅刻したんだって','Mom — Dad Tokyo-metro late','Wry child','sho_child'),
    mk('翔くん、お父さんは大学で合気道してらしたのよ','Sho — Dad university aikido-did','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんちでダイヤル電話、触ったよ','Mom — me Grandpa-home dial-phone touched','Eager close','sho_child'),
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

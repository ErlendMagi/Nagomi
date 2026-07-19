import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_444 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['いらいら','ぬれ','よかろ','しょせん','近ごろ','ぎみ','おもむろに','あやしい']
const B_T = ['プロット','譜面','増刊','アセスメント','書き下ろし','個人向け','抵当','約定']
const C_T = ['抹殺','卑劣','撃退','狙撃','弛緩','摂理','拘置','朝方']
const D_T = ['洗面','殺菌','バレンタインデー','ベーグル','教習所','ナポリ','競輪','大文字']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08841',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、待たされていらいらしてた?','Sho — kept-waiting-irritated?','Caring','yumiko_mom'),
    mk('ママ、ぼく、雨でぬれちゃったよ','Mom — me rain-wet','Wry child','sho_child'),
    mk('翔くん、お祖父ちゃんに任せておけばよかろうって','Sho — Grandpa-leave-OK','Reflective','yumiko_mom'),
    mk('ママ、ぼく、しょせん子供だからって思っちゃう','Mom — me after-all-kid-think','Earnest child','sho_child'),
    mk('翔くん、近ごろお父さんが元気そうね','Sho — recently-Dad-well','Reflective','yumiko_mom'),
    mk('ママ、ぼく、ちょっと疲れぎみだよ','Mom — me bit-tired-ish','Earnest child','sho_child'),
    mk('翔くん、お父さんがおもむろに手紙を取り出されたわ','Sho — Dad-slowly-letter-took','Reflective','yumiko_mom'),
    mk('ママ、お庭にあやしい物音がしたよ','Mom — garden-suspicious-sound','Reflective close','sho_child'),
  ]},
  {id:'conv_08842',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、混雑時にいらいらされてたよ、メイちゃん','Aoi — cust-crowd-irritated Mei','Reflective','mei_romantic'),
    mk('葵、お客様、雨で傘がぬれてらしたわ、メイちゃん','Aoi — cust-rain-umbrella-wet Mei','Reflective','aoi_barista'),
    mk('葵、新メニューは今のままでよかろうかと、お客様も仰ってたね、メイちゃん','Aoi — new-menu-stay-OK-said Mei','Reflective','mei_romantic'),
    mk('葵、しょせん私達も二人だから、無理しないね、メイちゃん','Aoi — after-all-two-not-strain Mei','Reflective','aoi_barista'),
    mk('葵、近ごろ新規のお客様が増えてきたわね、メイちゃん','Aoi — recently-new-cust-up Mei','Pleased','mei_romantic'),
    mk('葵、お客様、お疲れぎみでお見えになるね、メイちゃん','Aoi — cust-tired-ish-visit Mei','Reflective','aoi_barista'),
    mk('葵、お客様、おもむろに本を読み始められたよ、メイちゃん','Aoi — cust-slowly-book-start Mei','Reflective','mei_romantic'),
    mk('葵、お店の前にあやしい人影があったね、メイちゃん','Aoi — store-front-suspicious-figure Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08843',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんはいらいらせずに、待っていらしたぞ','Gran — youth Dad-not-irritated-wait','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、雨の日に上着がぬれてもへっちゃらでらしたわよね、あなた?','Yes — Grandpa-rain-jacket-wet-fine, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは「家族が元気ならよかろう」と仰ったぞ','Gran — youth Dad "fam-well-OK"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様も「しょせん人生は一度」と仰ってたわよね、あなた?','Grandpa — grandkid "life-once"-said, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、近ごろ、お孫様の顔を見られて嬉しかったぞ','Gran — recently-grandkid-saw-glad','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、いつも元気でも疲れぎみでらしたわよね、あなた?','Grandpa — always-well-tired-ish, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがおもむろに刀を磨かれたぞ','Gran — youth Dad-slowly-sword-polish','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、夜中にあやしい影を見たって仰ってたわよね、あなた?','Grandpa — night-suspicious-shadow-said, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08844',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、テスト前いらいらしてんな','Riku — pre-test-irritated','Wry teen','sakura_teen'),
    mk('お前、雨に降られて服がぬれちゃったろ、桜','You — rain-clothes-wet Sakura','Wry','riku_teen'),
    mk('リク、お前、勉強そこそこでよかろうって思ってんだろ?','Riku — study-OK-think?','Wry','sakura_teen'),
    mk('お前、しょせん俺たち高校生だしな、桜','You — after-all-HS Sakura','Reflective','riku_teen'),
    mk('リク、お前、近ごろ目つきが鋭いな','Riku — recently-eye-sharp','Curious','sakura_teen'),
    mk('お前、風邪ぎみだろ、桜','You — cold-ish Sakura','Caring','riku_teen'),
    mk('リク、お前、おもむろに参考書取り出すなよ','Riku — slowly-ref-book-take','Wry','sakura_teen'),
    mk('お前、あやしい裏路地、行くなよ、桜','You — suspicious-alley-don\'t Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_08845',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、待たされていらいらしないでね','Sho — kept-not-irritated','Caring','mei_romantic'),
    mk('メイ姉さん、ぼく、お絵描きの紙がぬれちゃった','Mei-sis — me drawing-paper-wet','Wry child','sho_child'),
    mk('翔くん、メイ姉さんも「翔くんが元気ならよかろう」って思うのよ','Sho — Mei-sis "Sho-well-OK"-think','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、しょせんお絵描き下手だよ','Mei-sis — me after-all-drawing-bad','Wry child','sho_child'),
    mk('翔くん、メイ姉さんも近ごろ忙しいわね','Sho — Mei-sis-recently-busy','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、夏バテぎみだよ','Mei-sis — me summer-fatigue-ish','Wry child','sho_child'),
    mk('翔くん、メイ姉さんがおもむろに絵筆を取られるのよ','Sho — Mei-sis-slowly-brush-take','Reflective','mei_romantic'),
    mk('メイ姉さん、公園にあやしい男の人いたよ','Mei-sis — park-suspicious-man','Earnest close','sho_child'),
  ]},
  {id:'conv_08846',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新企画のプロットを至急まとめろ','Our co — new-plan-plot-urg-sum','Crisp','hiroshi_boss'),
    mk('はい。社歌の譜面を新調いたしました','Yes — Co-song-score-new','Methodical','kenji_office'),
    mk('当社、社内報の増刊号を企画しろ','Our co — co-news-supp-issue-plan','Direction','hiroshi_boss'),
    mk('はい。新プロジェクトの環境アセスメントを進めています','Yes — New-proj-eco-assess-progress','Update','kenji_office'),
    mk('当社、来年の書き下ろし販促を計画しろ','Our co — next-orig-write-promo-plan','Direction','hiroshi_boss'),
    mk('はい。個人向け新サービスを開発中です','Yes — Individual-new-svc-dev','Update','kenji_office'),
    mk('当社、不動産の抵当案件を確認しろ','Our co — realty-mortgage-check','Direction','hiroshi_boss'),
    mk('はい。お取引先との約定書を準備しました','Yes — Partner-agree-doc-prep','Close','kenji_office'),
  ]},
  {id:'conv_08847',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('新ストーリーのプロットを練りましょう','New-story-plot-refine','Brisk','yuki_office'),
    mk('はい。お客様向けに譜面を配付する案件を進めます','Yes — Cust-score-distrib-progress','Cooperative','kenji_office'),
    mk('社内報の特別増刊号を出しましょう','Co-news-spec-supp-issue','Direction','yuki_office'),
    mk('はい。プロジェクトの事前アセスメントを実施しております','Yes — Proj-pre-assess-do','Update','kenji_office'),
    mk('お得意様のために書き下ろしの記事を依頼しましょう','VIP-orig-write-article-req','Direction','yuki_office'),
    mk('はい。個人向けの会員プランを企画しました','Yes — Individual-member-plan-plan','Update','kenji_office'),
    mk('オフィスの土地の抵当解除を進めましょう','Office-land-mortgage-release-progress','Direction','yuki_office'),
    mk('はい。お得意様と新約定書を交換しました','Yes — VIP-new-agree-exchange','Close','kenji_office'),
  ]},
  {id:'conv_08848',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文のプロット構成を見直せ','Ren — paper-plot-struct-review','Mentor','hiroshi_boss'),
    mk('はい。新作の譜面を学会で発表します','Yes — New-score-conf-pres','Earnest','ren_uni'),
    mk('蓮、学術誌の増刊号にも投稿しろ','Ren — journal-supp-submit','Direction','hiroshi_boss'),
    mk('はい。実験のリスクアセスメントを徹底します','Yes — Exp-risk-assess-strict','Polite','ren_uni'),
    mk('蓮、書き下ろし論文の機会を逃すな','Ren — orig-write-paper-opp-not-miss','Direction','hiroshi_boss'),
    mk('はい。個人向けの研究紹介サイトも準備中です','Yes — Individual-research-intro-site-prep','Earnest','ren_uni'),
    mk('蓮、留学費用の抵当に困らないよう奨学金を活用しろ','Ren — study-cost-mortgage-trouble-prev-scholar','Direction','hiroshi_boss'),
    mk('はい。共同研究の約定書を学会で扱いました','Yes — Joint-research-agree conf','Earnest close','ren_uni'),
  ]},
  {id:'conv_08849',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、犯罪のプロットを早期に解明されますね','Police crime-plot-early-clarify','Cooperative','kenji_office'),
    mk('警察、防犯啓発ソングの譜面を作られたんですね','Police crime-prev-song-score-made','Cooperative','kenji_office'),
    mk('警察、地域防犯誌の増刊号を発行されますね','Police local-crime-prev-mag-supp-issue','Cooperative','kenji_office'),
    mk('警察、危機アセスメントを丁寧になさいますね','Police risk-assess-careful','Cooperative','kenji_office'),
    mk('警察、書き下ろしの防犯エッセーをご寄稿されたんですね','Police orig-write-crime-prev-essay-contrib','Cooperative','kenji_office'),
    mk('警察、個人向け防犯指導も充実してますね','Police individual-crime-prev-guide-enriched','Cooperative','kenji_office'),
    mk('警察、抵当詐欺の事案を捜査されますね','Police mortgage-fraud-inv','Cooperative','kenji_office'),
    mk('警察、不正約定の事件もご捜査ですね','Police illegal-agree-case-inv','Close','kenji_office'),
  ]},
  {id:'conv_08850',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、事業プロットを自ら描かれたぞ','Dad — founding biz-plot-self-draw','Sage','hiroshi_elder'),
    mk('はい。お父さんは社歌の譜面を大事にされた','Yes — Dad co-song-score-cherish','Commitment','hiroshi_boss'),
    mk('お父さん、社内報の増刊号を毎年出されたぞ','Dad — co-news-supp-yearly','Wistful','hiroshi_elder'),
    mk('はい。お父さんは事業アセスメントに丁寧でらした','Yes — Dad biz-assess-careful','Reflective','hiroshi_boss'),
    mk('お父さん、自ら書き下ろしの社訓を書かれたぞ','Dad — self-orig-write-creed','Wistful','hiroshi_elder'),
    mk('はい。お父さんは個人向けの新サービスを生み出された','Yes — Dad individual-new-svc-create','Reflective','hiroshi_boss'),
    mk('お父さん、抵当に頼らない経営をされたぞ','Dad — mortgage-not-rely-mgmt','Wistful','hiroshi_elder'),
    mk('はい。お父さんはお取引先との約定を生涯守られた','Yes — Dad partner-agree-life-keep','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08851',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、政治家の抹殺事件史を論文で扱いましたね','Ren — pol-assass-hist paper','Calm','asuka_teacher'),
    mk('はい、卑劣な手段で勝利した戦例を論文で扱いました','Yes — Despicable-win-case paper','Earnest','ren_uni'),
    mk('蓮さん、侵略軍の撃退史を論文で扱いましたね','Ren — invader-repel-hist paper','Reflective','asuka_teacher'),
    mk('はい、要人狙撃事件の社会的影響を論文で扱いました','Yes — VIP-shoot-soc-impact paper','Earnest','ren_uni'),
    mk('神経の弛緩反応を論文で扱いましたね','Nerve-relax-resp paper','Engaged','asuka_teacher'),
    mk('はい、神の摂理を巡る宗教思想を論文で扱いました','Yes — God-providence-relig paper','Earnest','ren_uni'),
    mk('蓮さん、戦時下の拘置所制度を論文で扱いましたね','Ren — wartime-detention-sys paper','Reflective','asuka_teacher'),
    mk('はい、朝方の交通事故統計を論文で扱いました','Yes — Morn-traffic-stat paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08852',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、政敵を抹殺しようとした計画を警察、未然に阻止されましたね','Case rival-assass-plan police-prev','Reflective','ren_uni'),
    mk('警察、卑劣な脅迫事件を厳しく取り締まります','Police despicable-threat-crack','Procedural','takeda_officer'),
    mk('本件、警察が侵入者を撃退されたんですね','Case police-intruder-repel','Reflective','ren_uni'),
    mk('警察、要人の狙撃を未然に防ぎます','Police VIP-shoot-prev','Procedural','takeda_officer'),
    mk('本件、被害者の筋肉弛緩を警察、検視で確認されましたね','Case victim-muscle-relax police-autopsy-confirm','Reflective','ren_uni'),
    mk('警察、自然の摂理に反する事件には毅然と対応します','Police nat-providence-against firm-resp','Procedural','takeda_officer'),
    mk('本件、容疑者の拘置を警察、ご決定されたんですね','Case suspect-detention police-decide','Reflective','ren_uni'),
    mk('警察、朝方の通報にも素早く対応します','Police morn-call-fast-resp','Close','takeda_officer'),
  ]},
  {id:'conv_08853',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、政治家の抹殺事件史を論文で扱いましたね','Sakura — pol-assass paper','Calm','asuka_teacher'),
    mk('はい、卑劣な手段で勝利した戦例を論文で扱いました','Yes — Despicable paper','Earnest teen','sakura_teen'),
    mk('侵略軍の撃退史を論文で扱いましたね','Invader-repel paper','Reflective','asuka_teacher'),
    mk('はい、要人狙撃事件を論文で扱いました','Yes — VIP-shoot paper','Earnest','sakura_teen'),
    mk('神経の弛緩反応を論文で扱いましたね','Nerve-relax paper','Engaged','asuka_teacher'),
    mk('はい、神の摂理を巡る宗教思想を論文で扱いました','Yes — God-providence paper','Earnest','sakura_teen'),
    mk('戦時下の拘置所制度を論文で扱いましたね','War-detention paper','Reflective','asuka_teacher'),
    mk('はい、朝方の交通事故統計を論文で扱いました','Yes — Morn-traffic paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08854',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、ウイルスを抹殺する治療法を医療チームで研究します','Ren — virus-elim-treat med-team','Calm','saito_doctor'),
    mk('はい、卑劣な医療詐欺被害者の救済を医療チームで担当します','Yes — Despicable-med-fraud-rescue med-team','Patient','saito_doctor'),
    mk('感染症を撃退する院内対策を、貴院、なさってますね、先生','Infect-repel-in-hosp your-hosp do, sensei','Reflective','ren_uni'),
    mk('はい、敵性ウイルスを狙撃するように的を絞った治療を医療チームで進めます','Yes — Targeted-treat med-team progress','Patient','saito_doctor'),
    mk('筋肉弛緩剤の使用は、貴院、慎重ですね、先生','Muscle-relax-drug your-hosp careful, sensei','Curious','ren_uni'),
    mk('はい、自然の摂理に従った緩和ケアを医療チームで担当します','Yes — Nat-providence-palliative med-team','Patient','saito_doctor'),
    mk('警察の拘置所内の医療支援を、貴院、されてますね、先生','Police-detention-med-supp your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、朝方の救急救命を医療チームで担当します','Yes — Morn-emerg-rescue med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_08855',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、競合を抹殺するのではなく共存を狙え','Our co — rival-elim-not-coexist','Crisp','hiroshi_boss'),
    mk('はい。卑劣な業界慣行は社内で禁止しております','Yes — Despicable-industry-co-ban','Methodical','kenji_office'),
    mk('当社、サイバー攻撃を撃退するシステムを強化しろ','Our co — cyber-attack-repel-sys-strength','Direction','hiroshi_boss'),
    mk('はい。お得意様への狙撃的なクレーム対応も準備します','Yes — VIP-targeted-comp-resp-prep','Update','kenji_office'),
    mk('当社、社員の弛緩した態度を引き締めろ','Our co — staff-relax-attitude-tight','Direction','hiroshi_boss'),
    mk('はい。市場の摂理に従いつつ独自路線も追求します','Yes — Market-providence-uni-route','Update','kenji_office'),
    mk('当社、容疑のかかった役員を拘置当局に協力させろ','Our co — suspect-exec-detention-coop','Direction','hiroshi_boss'),
    mk('はい。朝方の業務開始時間を見直しております','Yes — Morn-work-start-review','Close','kenji_office'),
  ]},
  {id:'conv_08856',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、洗面台で手を洗ってこられたよ、メイちゃん','Aoi — cust-sink-hand-wash Mei','Reflective','mei_romantic'),
    mk('葵、お店のスプレー、殺菌タイプに変えましょう、メイちゃん','Aoi — store-spray-disinfect-change Mei','Direction','aoi_barista'),
    mk('葵、バレンタインデーの限定メニュー、決めましょう、メイちゃん','Aoi — Valentine-ltd-menu-decide Mei','Animated','mei_romantic'),
    mk('葵、新メニュー、ベーグルサンド加えましょう、メイちゃん','Aoi — new-menu-bagel-sand-add Mei','Direction','aoi_barista'),
    mk('葵、お客様、自動車教習所のお仕事だって、メイちゃん','Aoi — cust-driving-school-work Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ナポリ旅行から戻ってこられたって、メイちゃん','Aoi — cust-Naples-trip-back Mei','Reflective','aoi_barista'),
    mk('葵、お客様、競輪場のお話されてたよ、メイちゃん','Aoi — cust-keirin-track-told Mei','Reflective','mei_romantic'),
    mk('葵、京都の大文字焼きのお話、お客様されてたよ、メイちゃん','Aoi — Kyoto-Daimonji-cust-told Mei','Animated close','aoi_barista'),
  ]},
  {id:'conv_08857',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが洗面台で毎朝身支度されたぞ','Gran — youth Dad-sink-morn-prep','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お台所を殺菌するのに気を遣われたわよね、あなた?','Yes — Grandpa-kitchen-disinfect-care, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがバレンタインデーにチョコをくれたぞ','Gran — youth Dad-Valentine-choc-gave','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ベーグルがお好きでらしたわよね、あなた?','Grandpa — bagel-liked, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと教習所で免許を取ったぞ','Gran — youth Dad-driving-school-license','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ナポリのお土産を持って帰られたわよね、あなた?','Grandpa — Naples-souv-bring, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが競輪のお話をされたぞ','Gran — youth Dad-keirin-told','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、京都の大文字焼きを見に行かれたわよね、あなた?','Grandpa — Kyoto-Daimonji-see, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08858',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんのお家の洗面台はおしゃれなのよ','Sho — Mei-sis-home-sink-stylish','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お母さんが殺菌スプレーを毎日使ってるよ','Mei-sis — me Mom-disinfect-spray-daily','Reflective child','sho_child'),
    mk('翔くん、バレンタインデーにメイ姉さんからお菓子もらえるかな?','Sho — Valentine-Mei-sis-snack-get?','Curious child','mei_romantic'),
    mk('メイ姉さん、ぼく、ママとベーグル買いに行ったよ','Mei-sis — me Mom-bagel-bought','Eager child','sho_child'),
    mk('翔くん、お父さんが教習所で免許取られたのよ','Sho — Dad-driving-school-license','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとナポリ行きたい','Mei-sis — me Dad-Naples-want','Eager child','sho_child'),
    mk('翔くん、お父さんが昔、競輪場に行かれたんですって','Sho — Dad-old-keirin-went','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、京都で大文字焼きを見たいよ','Mei-sis — me Kyoto-Daimonji-want','Eager close','sho_child'),
  ]},
  {id:'conv_08859',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前ん家、洗面台広いんだろ?','Riku — your-home-sink-wide?','Curious teen','sakura_teen'),
    mk('お前、給食前にちゃんと殺菌してから手洗えよ、桜','You — pre-lunch-disinfect-hand Sakura','Direction','riku_teen'),
    mk('リク、お前、バレンタインデーに友チョコ配ってんだろ?','Riku — Valentine-friend-choc-distrib?','Curious','sakura_teen'),
    mk('お前、ベーグル屋でバイトしてんだろ?桜','You — bagel-part-time? Sakura','Curious','riku_teen'),
    mk('リク、お前のお兄ちゃん、教習所通ってんだろ?','Riku — your-bro-driving-school?','Curious','sakura_teen'),
    mk('お前、修学旅行でナポリ行きたいって言ってたな、桜','You — school-trip-Naples-said Sakura','Reflective','riku_teen'),
    mk('リク、お前、お父さんが競輪行くって心配してたな','Riku — Dad-keirin-worry','Reflective','sakura_teen'),
    mk('お前、夏の大文字焼き見に行ったろ?桜','You — summer-Daimonji-saw? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08860',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、洗面台の鏡を綺麗に拭きましょうね','Sho — sink-mirror-clean','Direction','yumiko_mom'),
    mk('ママ、ぼく、給食前に殺菌ジェルで手を洗うよ','Mom — me pre-lunch-disinfect-gel-hand','Eager child','sho_child'),
    mk('翔くん、バレンタインデーにお父さんへチョコ用意しましょう','Sho — Valentine-Dad-choc-prep','Tender','yumiko_mom'),
    mk('ママ、ぼく、ベーグルにバター塗ってください','Mom — me bagel-butter-please','Eager child','sho_child'),
    mk('翔くん、お父さんが新しい教習所に通われるそうよ','Sho — Dad-new-driving-school-attend','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとナポリのピザ屋に行きたい','Mom — me Dad-Naples-pizza-want','Eager child','sho_child'),
    mk('翔くん、お父さんは絶対競輪には行かないと約束されてるわ','Sho — Dad-never-keirin-promise','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと京都で大文字焼きを見たい','Mom — me Dad-Kyoto-Daimonji-want','Eager close','sho_child'),
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

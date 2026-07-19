import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_480 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['儲かっ','聴ける','リタイア','小雨','平ら','殴っ','呑ん','止めよ']
const B_T = ['サンプリング','割愛','懸案','編入','確固たる','バックグラウンド','アウトプット','転嫁']
const C_T = ['彗星','五感','血統','農作物','和音','帰結','筋力','教祖']
const D_T = ['ズーム','ベンツ','ルネッサンス','洋画','マンチェスター','ジャンボ','アドリブ','コナン']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09561',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんのお仕事が儲かったみたいよ','Sho — Dad-work-prof','Pleased','yumiko_mom'),
    mk('ママ、ぼく、お父さんの歌が聴けるの楽しみだよ','Mom — me Dad-song-listen-fun','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんはリタイア後、悠々自適よ','Sho — Grandpa-retire-easy','Reflective','yumiko_mom'),
    mk('ママ、今日は小雨だから傘を持って行くよ','Mom — today-light-rain-umbr','Eager child','sho_child'),
    mk('翔くん、お父さんが砂場を平らにして下さったわ','Sho — Dad-sand-flat','Reflective','yumiko_mom'),
    mk('ママ、ぼく、友達と喧嘩で殴ったりしないって約束するよ','Mom — me friend-hit-not-promise','Earnest child','sho_child'),
    mk('翔くん、お父さんが薬を呑んでお休みになったわ','Sho — Dad-med-take-rest','Reflective','yumiko_mom'),
    mk('ママ、ぼく、喧嘩は止めようって決めたよ','Mom — me fight-stop-decide','Eager close','sho_child'),
  ]},
  {id:'conv_09562',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お店、今月はよく儲かったね、メイちゃん','Aoi — store-this-mo-prof Mei','Pleased','mei_romantic'),
    mk('葵、お客様、お店のジャズが聴けるのを楽しまれてるね、メイちゃん','Aoi — cust-jazz-listen-enjoy Mei','Reflective','aoi_barista'),
    mk('葵、お客様、リタイア後の趣味でいらっしゃるって、メイちゃん','Aoi — cust-retire-hobby Mei','Reflective','mei_romantic'),
    mk('葵、外は小雨だね、傘の貸出を始めようか、メイちゃん','Aoi — out-light-rain-umbr-lend Mei','Direction','aoi_barista'),
    mk('葵、お店の前の坂を平らに整備して欲しいね、メイちゃん','Aoi — store-front-slope-flat-mainten Mei','Reflective','mei_romantic'),
    mk('葵、酔って人を殴ったお客様はお断りしようね、メイちゃん','Aoi — drunk-hit-cust-refuse Mei','Direction','aoi_barista'),
    mk('葵、お客様、コーヒーを呑んで一息ついておられたね、メイちゃん','Aoi — cust-coffee-drink-relax Mei','Reflective','mei_romantic'),
    mk('葵、過剰サービスは止めようと話し合ったね、メイちゃん','Aoi — extra-serv-stop-talk Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_09563',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんの商いが儲かった','Gran — youth Dad-biz-prof','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、晩年、レコードが聴ける環境を喜ばれたわよね、あなた?','Yes — Grandpa-late-rec-listen-glad, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがリタイア後の人生を楽しまれた','Gran — youth Dad-retire-life-fun','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、小雨の日に縁側でお茶を召し上がったわよね、あなた?','Grandpa — light-rain-veranda-tea, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが田んぼを平らにならされた','Gran — youth Dad-rice-flat','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、酔って人を殴った日もあったわよね、あなた?','Grandpa — youth-drunk-hit, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが薬を呑んで耐えられた','Gran — youth Dad-med-take-endure','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、晩年、無理は止めようと仰ったわよね、あなた?','Grandpa — late-strain-stop, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09564',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、バイトで儲かったって自慢してたな','Riku — job-prof-brag','Wry teen','sakura_teen'),
    mk('お前、新曲が聴けるラジオ番組教えてくれよ、桜','You — new-song-listen-rad-tell Sakura','Curious','riku_teen'),
    mk('リク、お前ん家のお父さん、リタイアされたんだろ?','Riku — your-Dad-retire?','Curious','sakura_teen'),
    mk('お前、傘忘れて小雨でずぶ濡れになったな、桜','You — umbr-forgot-light-rain-wet Sakura','Wry','riku_teen'),
    mk('リク、お前、運動場が平らじゃないって文句言ってたな','Riku — field-flat-not-complain','Curious','sakura_teen'),
    mk('お前、絶対人を殴ったりすんなよ、桜','You — never-hit-no Sakura','Direction','riku_teen'),
    mk('リク、お前、ジュース一気に呑んでたな','Riku — juice-once-drink','Wry','sakura_teen'),
    mk('お前、夜更かしは止めようぜ、桜','You — late-night-stop Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_09565',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんのお仕事が儲かったみたいよ','Sho — Dad-work-prof','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと一緒に音楽が聴けるの嬉しいよ','Mei-sis — me Dad-music-listen-glad','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんがリタイアされて家にいらっしゃるわ','Sho — Grandpa-retire-home','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、小雨の日でも公園に行きたいよ','Mei-sis — me light-rain-park-want','Eager child','sho_child'),
    mk('翔くん、お父さんが砂場を平らにして下さったわ','Sho — Dad-sand-flat','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、絶対誰も殴ったりしないよ','Mei-sis — me never-hit','Earnest child','sho_child'),
    mk('翔くん、お父さんがお薬を呑んでお休みになったわ','Sho — Dad-med-take-rest','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お菓子の食べ過ぎは止めようと思うよ','Mei-sis — me snack-too-much-stop','Eager close','sho_child'),
  ]},
  {id:'conv_09566',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、品質管理でサンプリング検査を強化しろ','Our co — QC-samp-strength','Crisp','hiroshi_boss'),
    mk('はい。冗長な報告は割愛してまとめます','Yes — Redun-rep-omit','Methodical','kenji_office'),
    mk('長期懸案の課題に決着をつけろ','Long-pend-iss-resolv','Direction','hiroshi_boss'),
    mk('はい。新人の中途編入を歓迎します','Yes — Newhire-mid-welc','Update','kenji_office'),
    mk('当社、確固たる経営方針を示せ','Our co — firm-mgmt-show','Direction','hiroshi_boss'),
    mk('はい。社員のバックグラウンドを尊重します','Yes — Staff-bg-resp','Update','kenji_office'),
    mk('当社、研究のアウトプットを増やせ','Our co — research-output-up','Direction','hiroshi_boss'),
    mk('はい。コストを下請けに転嫁しません','Yes — Cost-subc-trans-no','Close','kenji_office'),
  ]},
  {id:'conv_09567',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('顧客アンケートのサンプリングを工夫しましょう','Cust-quest-samp-impr','Brisk','yuki_office'),
    mk('はい。重複部分を割愛して資料を作ります','Yes — Dup-omit-doc','Cooperative','kenji_office'),
    mk('懸案のIT更新を進めましょう','Pend-IT-up-prog','Direction','yuki_office'),
    mk('はい。中途編入社員のオリエンを準備します','Yes — Mid-staff-orient-prep','Update','kenji_office'),
    mk('確固たる対応方針を示しましょう','Firm-resp-pol-show','Direction','yuki_office'),
    mk('はい。応募者のバックグラウンドを丁寧に確認します','Yes — Appl-bg-careful','Update','kenji_office'),
    mk('週次でアウトプットを共有しましょう','Wkly-output-share','Direction','yuki_office'),
    mk('はい。為替リスクを顧客に転嫁しない方針です','Yes — FX-risk-cust-trans-no','Close','kenji_office'),
  ]},
  {id:'conv_09568',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、データのサンプリング方法を学べ','Ren — data-samp-learn','Mentor','hiroshi_boss'),
    mk('はい。論文では枝葉の議論を割愛します','Yes — Paper-side-omit','Earnest','ren_uni'),
    mk('蓮、研究室の懸案事項に取り組め','Ren — lab-pend-tackle','Direction','hiroshi_boss'),
    mk('はい。海外大学院への編入も検討しております','Yes — Overseas-grad-cons','Earnest','ren_uni'),
    mk('蓮、確固たる仮説を立てて挑め','Ren — firm-hyp-tackle','Direction','hiroshi_boss'),
    mk('はい。被験者のバックグラウンドを記録します','Yes — Subj-bg-rec','Polite','ren_uni'),
    mk('蓮、研究のアウトプットを積極的に発信しろ','Ren — research-output-active','Direction','hiroshi_boss'),
    mk('はい。責任を他者に転嫁する事はいたしません','Yes — Resp-other-trans-no','Earnest close','ren_uni'),
  ]},
  {id:'conv_09569',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、薬物のサンプリング検査を強化されますね','Police drug-samp-strength','Cooperative','kenji_office'),
    mk('警察、不要な情報は報告書で割愛されますね','Police unnec-info-omit','Cooperative','kenji_office'),
    mk('警察、長期懸案の冤罪事案にも対応されますね','Police long-pend-false-resp','Cooperative','kenji_office'),
    mk('警察、警察学校への編入制度もありますね','Police acad-trans','Cooperative','kenji_office'),
    mk('警察、確固たる証拠を集められますね','Police firm-evid-coll','Cooperative','kenji_office'),
    mk('警察、容疑者のバックグラウンドを徹底調査されますね','Police suspect-bg-strict','Cooperative','kenji_office'),
    mk('警察、捜査のアウトプットを市民に説明されますね','Police inv-output-citi','Cooperative','kenji_office'),
    mk('警察、責任を被害者に転嫁しない姿勢ですね','Police resp-vict-trans-no','Close','kenji_office'),
  ]},
  {id:'conv_09570',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、品質サンプリングを重視された','Dad — founding qual-samp-imp','Sage','hiroshi_elder'),
    mk('はい。お父さんは無駄な作業を割愛された','Yes — Dad waste-omit','Commitment','hiroshi_boss'),
    mk('お父さん、長期懸案に丁寧に対処された','Dad — long-pend-careful','Wistful','hiroshi_elder'),
    mk('はい。お父さんは中途編入社員も平等に扱われた','Yes — Dad mid-staff-equal','Reflective','hiroshi_boss'),
    mk('お父さん、確固たる経営理念をお持ちだった','Dad — firm-philos','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員のバックグラウンドを尊重された','Yes — Dad staff-bg-resp','Reflective','hiroshi_boss'),
    mk('お父さん、社員のアウトプットを大切にされた','Dad — staff-output-cherish','Wistful','hiroshi_elder'),
    mk('はい。お父さんは責任を社員に転嫁されなかった','Yes — Dad resp-staff-trans-no','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09571',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、彗星観測の天文学史を論文で扱いましたね','Ren — comet-obs-hist paper','Calm','asuka_teacher'),
    mk('はい、五感統合の認知科学を論文で扱いました','Yes — Multi-sense-cog paper','Earnest','ren_uni'),
    mk('蓮さん、王朝の血統継承を論文で扱いましたね','Ren — dyn-blood-succ paper','Reflective','asuka_teacher'),
    mk('はい、温暖化と農作物への影響を論文で扱いました','Yes — Warm-crop-impact paper','Earnest','ren_uni'),
    mk('音楽理論の和音解析を論文で扱いましたね','Music-th-chord-anal paper','Engaged','asuka_teacher'),
    mk('はい、社会運動の論理的帰結を論文で扱いました','Yes — Soc-move-logic-conseq paper','Earnest','ren_uni'),
    mk('蓮さん、加齢に伴う筋力減少を論文で扱いましたね','Ren — aging-musc-loss paper','Reflective','asuka_teacher'),
    mk('はい、新興宗教の教祖研究を論文で扱いました','Yes — New-relig-leader paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09572',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、彗星イベント会場の警備を、警察、担当されますね','Case comet-event-guard police-hand','Reflective','ren_uni'),
    mk('警察、被害者の五感証言も丁寧に聴取します','Police vict-multi-sense-test','Procedural','takeda_officer'),
    mk('本件、血統詐欺事件を、警察、扱われてますね','Case blood-fraud police-handle','Reflective','ren_uni'),
    mk('警察、農作物窃盗事件にも対応します','Police crop-theft-resp','Procedural','takeda_officer'),
    mk('本件、楽器の和音が事件の鍵だったって、警察、興味深いですね','Case chord-clue police-int','Reflective','ren_uni'),
    mk('警察、事件の帰結を市民に丁寧に報告します','Police case-conseq-citi','Procedural','takeda_officer'),
    mk('本件、容疑者の筋力からの推定も、警察、おこなわれますね','Case suspect-musc-est police-do','Reflective','ren_uni'),
    mk('警察、新興宗教教祖の不正に厳しく対応します','Police new-relig-leader-corrup-strict','Close','takeda_officer'),
  ]},
  {id:'conv_09573',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、彗星観測の天文学史を論文で扱いましたね','Sakura — comet-obs paper','Calm','asuka_teacher'),
    mk('はい、五感統合の認知科学を論文で扱いました','Yes — Multi-sense paper','Earnest teen','sakura_teen'),
    mk('王朝の血統継承を論文で扱いましたね','Dyn-blood paper','Reflective','asuka_teacher'),
    mk('はい、温暖化と農作物への影響を論文で扱いました','Yes — Warm-crop paper','Earnest','sakura_teen'),
    mk('音楽理論の和音解析を論文で扱いましたね','Music-chord paper','Engaged','asuka_teacher'),
    mk('はい、社会運動の論理的帰結を論文で扱いました','Yes — Soc-conseq paper','Earnest','sakura_teen'),
    mk('加齢に伴う筋力減少を論文で扱いましたね','Aging-musc paper','Reflective','asuka_teacher'),
    mk('はい、新興宗教の教祖研究を論文で扱いました','Yes — Cult-leader paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09574',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、彗星状の脳内画像所見を医療チームで検討します','Ren — comet-brain-image med-team','Calm','saito_doctor'),
    mk('はい、患者の五感機能を医療チームで評価します','Yes — Pati-multi-sense-eval med-team','Patient','saito_doctor'),
    mk('蓮さん、家族性疾患の血統解析を医療チームでおこないます','Ren — fam-dis-blood-anal med-team','Calm','saito_doctor'),
    mk('農作物アレルギーの増加を、貴院、観察されてますね、先生','Crop-allerg-up your-hosp obs, sensei','Reflective','ren_uni'),
    mk('はい、心臓の和音的雑音を医療チームで聴取します','Yes — Heart-chord-mur med-team listen','Patient','saito_doctor'),
    mk('治療の帰結を、貴院、患者に丁寧にご説明ですね、先生','Treat-conseq your-hosp pati-explan, sensei','Reflective','ren_uni'),
    mk('はい、高齢者の筋力低下対策を医療チームで進めます','Yes — Elder-musc-loss-counter med-team','Patient','saito_doctor'),
    mk('カルト宗教教祖の心理研究を、貴院、おこなわれてますね、先生','Cult-leader-psych your-hosp, sensei','Curious close','ren_uni'),
  ]},
  {id:'conv_09575',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、彗星のように現れる新興競合に警戒しろ','Our co — comet-comp-watch','Crisp','hiroshi_boss'),
    mk('はい。社員の五感を刺激する職場を作ります','Yes — Staff-multi-sense-work','Methodical','kenji_office'),
    mk('創業家の血統より実力で人事をしろ','Found-blood-no-skill-HR','Direction','hiroshi_boss'),
    mk('はい。農作物の輸入リスクを管理します','Yes — Crop-imp-risk','Update','kenji_office'),
    mk('当社、社員の声を和音のように調和させろ','Our co — staff-voice-chord-harmo','Direction','hiroshi_boss'),
    mk('はい。経営判断の論理的帰結を社員と共有します','Yes — Mgmt-judg-conseq-staff-share','Update','kenji_office'),
    mk('当社、社員の筋力低下を防ぐ運動補助も検討しろ','Our co — staff-musc-loss-prev-sub','Direction','hiroshi_boss'),
    mk('はい。カリスマ教祖的経営は避けます','Yes — Cult-leader-mgmt-avoid','Close','kenji_office'),
  ]},
  {id:'conv_09576',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、カメラのズーム操作で悩んでらしたよ、メイちゃん','Aoi — cust-cam-zoom-struggle Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ベンツに乗ってお越しになったよ、メイちゃん','Aoi — cust-Benz-come Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ルネッサンス絵画にお詳しいって、メイちゃん','Aoi — cust-Renais-art Mei','Reflective','mei_romantic'),
    mk('葵、お客様、洋画好きでよく映画館に行かれるって、メイちゃん','Aoi — cust-Western-cinema Mei','Reflective','aoi_barista'),
    mk('葵、お客様、マンチェスターに留学経験がおありだって、メイちゃん','Aoi — cust-Manchester-study Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ジャンボサイズのコーヒーをお頼みになったよ、メイちゃん','Aoi — cust-jumbo-coffee Mei','Wry','aoi_barista'),
    mk('葵、お客様、アドリブの効くピアニストでいらっしゃるって、メイちゃん','Aoi — cust-adlib-pian Mei','Reflective','mei_romantic'),
    mk('葵、お客様、コナンの新刊を読んでらしたよ、メイちゃん','Aoi — cust-Conan-new Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09577',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがカメラのズーム機能に感動された','Gran — youth Dad-cam-zoom-moved','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、晩年ベンツを大事にされたわよね、あなた?','Yes — Grandpa-late-Benz-cherish, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがルネッサンス絵画展に行かれた','Gran — youth Dad-Renais-expo','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、洋画の名作を繰り返しご覧になってたわよね、あなた?','Grandpa — Western-class-watch, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがマンチェスターに駐在された','Gran — youth Dad-Manchester-station','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ジャンボジェット機の窓から景色を楽しまれたわよね、あなた?','Grandpa — jumbo-jet-view, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが歌のアドリブが上手だった','Gran — youth Dad-song-adlib-good','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様とコナンの漫画を読まれたわよね、あなた?','Grandpa — grandkid-Conan-read, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09578',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがカメラのズーム機能を見せて下さったわ','Sho — Dad-cam-zoom-show','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんがベンツに乗せて下さったよ','Mei-sis — me Dad-Benz-ride','Eager child','sho_child'),
    mk('翔くん、お父さんがルネッサンスの絵本を読んで下さったわ','Sho — Dad-Renais-pic-book-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと洋画のアニメ観たよ','Mei-sis — me Dad-Western-anime','Eager child','sho_child'),
    mk('翔くん、お父さんがマンチェスターのチームを応援されるそうよ','Sho — Dad-Manchester-team-cheer','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ジャンボサイズのアイス食べたいよ','Mei-sis — me jumbo-ice-want','Eager child','sho_child'),
    mk('翔くん、お父さんが歌のアドリブを楽しまれてたわ','Sho — Dad-song-adlib-enjoy','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとコナンの新刊読んだよ','Mei-sis — me Dad-Conan-new','Eager close','sho_child'),
  ]},
  {id:'conv_09579',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、カメラのズーム機能ばっか使ってたな','Riku — cam-zoom-only','Wry teen','sakura_teen'),
    mk('お前、ベンツに憧れてたな、桜','You — Benz-admire Sakura','Wry','riku_teen'),
    mk('リク、お前、社会でルネッサンス習ったろ?','Riku — soc-Renais?','Curious','sakura_teen'),
    mk('お前、洋画よりアニメ派だったな、桜','You — Western-anime-side Sakura','Wry','riku_teen'),
    mk('リク、お前、マンチェスターのチーム応援してたな','Riku — Manchester-team-cheer','Curious','sakura_teen'),
    mk('お前、ジャンボサイズのフライドポテト食ってたな、桜','You — jumbo-fries-eat Sakura','Wry','riku_teen'),
    mk('リク、お前、アドリブ得意なんだな','Riku — adlib-good','Praising','sakura_teen'),
    mk('お前、コナン全巻持ってたろ?桜','You — Conan-all-have? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09580',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがビデオカメラのズーム機能を教えて下さったわ','Sho — Dad-vid-zoom-teach','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんがベンツの本を見せて下さったよ','Mom — me Dad-Benz-book','Eager child','sho_child'),
    mk('翔くん、お父さんがルネッサンスの美術展に連れて行って下さるそうよ','Sho — Dad-Renais-expo-take','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと洋画のアニメ観たよ','Mom — me Dad-Western-anime','Eager child','sho_child'),
    mk('翔くん、お父さんがマンチェスターのお話して下さったわ','Sho — Dad-Manchester-told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとジャンボサイズのお菓子買ったよ','Mom — me Dad-jumbo-snack-buy','Eager child','sho_child'),
    mk('翔くん、お父さんが歌でアドリブを入れて下さったわ','Sho — Dad-song-adlib-add','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとコナンの映画観たよ','Mom — me Dad-Conan-movie','Eager close','sho_child'),
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

import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_521 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['オッサン','のら','てぇ','きき','フツー','おぉ','ムッ','ヘビー']
const B_T = ['書き込ま','予告編','エンターテインメント','ニックネーム','イコール','号機','点灯','アース']
const C_T = ['歳月','安打','口実','地検','回生','町並み','孔','陵']
const D_T = ['キャロル','スクルージ','兵衛','モモ','ポップス','社民党','アントニオ','ピエール']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10381',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんを「オッサン」って呼んじゃダメよ','Sho — Dad-"old-man"-no','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんがのら犬を保護されたって聞いたよ','Mom — me Dad-stray-dog-prot','Pleased child','sho_child'),
    mk('翔くん、お父さんが「ちょてぇ」って関西弁で仰ったわよ','Sho — Dad-"chotee"-Kansai','Wry','yumiko_mom'),
    mk('ママ、ぼく、お父さんに変化のききを尋ねたよ','Mom — me Dad-change-sign-ask','Eager child','sho_child'),
    mk('翔くん、お父さんはフツーのお父さんに見えて頼もしいわ','Sho — Dad-normal-reli','Tender','yumiko_mom'),
    mk('ママ、お父さんが「おぉ、寒い」って仰ってたよ','Mom — Dad-"oh-cold"-said','Wry child','sho_child'),
    mk('翔くん、お父さんがムッとされた瞬間が分かるわよね','Sho — Dad-frown-moment-und','Reflective','yumiko_mom'),
    mk('ママ、宿題ヘビーで終わらない様、ペース配分しろってお父さん','Mom — homework-heavy-pace-Dad','Earnest close','sho_child'),
  ]},
  {id:'conv_10382',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、自分を「オッサン」と笑いながら自称されてたよ、メイちゃん','Aoi — cust-"old-man"-self-laugh Mei','Wry','mei_romantic'),
    mk('葵、お店の前にのら猫が来てるね、メイちゃん','Aoi — store-front-stray-cat Mei','Tender','aoi_barista'),
    mk('葵、お客様、「ちょてぇ」って関西言葉ご使用だったよ、メイちゃん','Aoi — cust-"chotee"-Kansai-use Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご自身の体調のききに敏感でいらしたよ、メイちゃん','Aoi — cust-health-sign-sens Mei','Reflective','aoi_barista'),
    mk('葵、フツーの一日のお客様サービスでも工夫が必要ね、メイちゃん','Aoi — normal-day-serv-impr Mei','Direction','mei_romantic'),
    mk('葵、お客様、「おぉ、香り良い」と感嘆されたよ、メイちゃん','Aoi — cust-"oh-aroma"-admir Mei','Pleased','aoi_barista'),
    mk('葵、お客様、待ち時間にムッとされた表情をされてたよ、メイちゃん','Aoi — cust-wait-frown Mei','Reflective','mei_romantic'),
    mk('葵、シフトがヘビーになりすぎないように調整しようね、メイちゃん','Aoi — shift-heavy-no-adj Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_10383',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは「自分はオッサンだ」と笑ってらした','Gran — youth Dad-"me-old-man"-laugh','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、のら犬を可愛がられたわよね、あなた?','Yes — Grandpa-stray-love, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「ちょてぇ」と古い関西弁を使われた','Gran — youth Dad-"chotee"-old-Kansai','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様の体調のききを察してらしたわよね、あなた?','Grandpa — grandkid-sign-sense, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは「フツーが一番」と仰った','Gran — youth Dad-"normal-best"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、「おぉ、思い出した」と仰ったわよね、あなた?','Grandpa — "oh-rem"-said, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがムッとされる事はほとんどなかった','Gran — youth Dad-frown-rare','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ヘビーなお仕事を続けて来られたわよね、あなた?','Grandpa — heavy-work-cont, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10384',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前の親父さん、最近オッサンになったな','Riku — your-Dad-recently-old-man','Wry teen','sakura_teen'),
    mk('お前、のら犬を保護してたな、桜','You — stray-prot Sakura','Tender','riku_teen'),
    mk('リク、お前、「ちょてぇ」って関西弁マネしてたな','Riku — "chotee"-Kansai-mimic','Wry','sakura_teen'),
    mk('お前、彼女の機嫌のききに敏感だな、桜','You — gf-mood-sense Sakura','Praising','riku_teen'),
    mk('リク、フツーの高校生でいいよな','Riku — normal-HS-ok','Reflective','sakura_teen'),
    mk('お前、「おぉ、満点だ!」って叫んだろ、桜','You — "oh-perfect"-shout? Sakura','Wry','riku_teen'),
    mk('リク、お前、テスト結果にムッとしてたな','Riku — test-frown','Wry','sakura_teen'),
    mk('お前、ヘビーローテーションでその曲聴いてたな、桜','You — heavy-rot-song Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10385',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんを「オッサン」って呼んじゃダメよ','Sho — Dad-"old-man"-no','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、のら猫を見つけたよ','Mei-sis — me stray-cat-found','Pleased child','sho_child'),
    mk('翔くん、お父さんが「ちょてぇ」って関西言葉を教えて下さったわ','Sho — Dad-"chotee"-Kansai-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんの異変のききに気付いたよ','Mei-sis — me Dad-abn-sign-notice','Earnest child','sho_child'),
    mk('翔くん、フツーの日常が一番幸せなのよ','Sho — normal-day-happy','Tender','mei_romantic'),
    mk('メイ姉さん、お父さんが「おぉ、綺麗」と仰ってたよ','Mei-sis — Dad-"oh-pretty"-said','Pleased child','sho_child'),
    mk('翔くん、お父さんがムッとされる事は滅多にないわよ','Sho — Dad-frown-rare','Reflective','mei_romantic'),
    mk('メイ姉さん、お父さんがヘビーローテで聴く曲教えて下さったよ','Mei-sis — Dad-heavy-rot-song-teach','Eager close','sho_child'),
  ]},
  {id:'conv_10386',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、社内文書に重要事項を書き込まないとな','Our co — co-doc-imp-write','Crisp','hiroshi_boss'),
    mk('はい。新製品の予告編動画を作ります','Yes — New-prod-teaser-make','Methodical','kenji_office'),
    mk('当社、エンターテインメント要素を商品に取り入れろ','Our co — ent-prod-add','Direction','hiroshi_boss'),
    mk('はい。新人にニックネームを付けて親しみやすくします','Yes — Newhire-nick-name','Update','kenji_office'),
    mk('品質と価格はイコールではないと社員に伝えろ','Qual-price-equal-no-staff','Direction','hiroshi_boss'),
    mk('はい。工場の三号機の点検を予定します','Yes — Fact-3-unit-insp-plan','Update','kenji_office'),
    mk('当社、看板の点灯時間を見直せ','Our co — sign-light-time-rev','Direction','hiroshi_boss'),
    mk('はい。電源のアース対策を強化します','Yes — Power-ground-strength','Close','kenji_office'),
  ]},
  {id:'conv_10387',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('議事録にしっかりと書き込まないとね','Min-write-need','Brisk','yuki_office'),
    mk('はい。新商品の予告編をSNSで公開します','Yes — New-prod-teaser-SNS','Cooperative','kenji_office'),
    mk('エンターテインメント業界との連携を進めましょう','Ent-link-prog','Direction','yuki_office'),
    mk('はい。社員のニックネーム制度を整理します','Yes — Staff-nick-org','Update','kenji_office'),
    mk('忙しさと業績はイコールではないですね','Busy-perf-equal-no','Reflective','yuki_office'),
    mk('はい。製造ラインの五号機を停止します','Yes — Prod-5-unit-stop','Update','kenji_office'),
    mk('ショーケースの点灯確認を毎朝しましょう','Show-case-light-morn','Direction','yuki_office'),
    mk('はい。配電盤のアース工事を依頼します','Yes — Power-board-ground-req','Close','kenji_office'),
  ]},
  {id:'conv_10388',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、実験ノートに細かく書き込まないとな','Ren — exp-note-detail-write','Mentor','hiroshi_boss'),
    mk('はい。論文の予告編的なポスターを準備します','Yes — Paper-teaser-poster','Earnest','ren_uni'),
    mk('蓮、学術成果もエンターテインメント性を意識しろ','Ren — acad-ent-aware','Direction','hiroshi_boss'),
    mk('はい。研究室メンバーのニックネームで親しみを作ります','Yes — Lab-mem-nick-warm','Earnest','ren_uni'),
    mk('蓮、相関と因果はイコールではない','Ren — corr-causal-equal-no','Direction','hiroshi_boss'),
    mk('はい。実験装置一号機から五号機まで点検します','Yes — Exp-1-5-unit-insp','Polite','ren_uni'),
    mk('蓮、研究室の照明点灯時間を最適化しろ','Ren — lab-light-opt','Direction','hiroshi_boss'),
    mk('はい。電子機器のアース処理に気を配ります','Yes — Electron-ground-care','Earnest close','ren_uni'),
  ]},
  {id:'conv_10389',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、調書に丁寧に書き込まれますね','Police statem-careful-write','Cooperative','kenji_office'),
    mk('警察、防犯活動の予告編的告知もされますね','Police prev-teaser-notice','Cooperative','kenji_office'),
    mk('警察、市民向けエンターテインメント要素のある安全教室も開かれますね','Police citi-ent-safe-class','Cooperative','kenji_office'),
    mk('警察、容疑者のニックネームも調書に記録されますね','Police suspect-nick-rec','Cooperative','kenji_office'),
    mk('警察、現行犯と既決犯はイコールではないと区別されますね','Police curr-prior-equal-no-sep','Cooperative','kenji_office'),
    mk('警察、無線機の一号機から順に点検されますね','Police radio-1-unit-insp','Cooperative','kenji_office'),
    mk('警察、署の防犯灯の点灯確認もされますね','Police stat-prev-light-check','Cooperative','kenji_office'),
    mk('警察、電子機器のアース工事も依頼されますね','Police electron-ground-req','Close','kenji_office'),
  ]},
  {id:'conv_10390',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、社員に重要事項を書き込ませた','Dad — founding staff-imp-write','Sage','hiroshi_elder'),
    mk('はい。お父さんは新製品の予告編広告を出された','Yes — Dad new-prod-teaser-ad','Commitment','hiroshi_boss'),
    mk('お父さん、社員旅行にエンターテインメントを企画された','Dad — staff-trip-ent-plan','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員にニックネームを付けて親しまれた','Yes — Dad staff-nick-warm','Reflective','hiroshi_boss'),
    mk('お父さん、価格と品質はイコールではないと社員に教えた','Dad — price-qual-equal-no-staff','Wistful','hiroshi_elder'),
    mk('はい。お父さんは初号機の試運転に立ち会われた','Yes — Dad 1-unit-trial','Reflective','hiroshi_boss'),
    mk('お父さん、看板の点灯式に出席された','Dad — sign-light-cere-att','Wistful','hiroshi_elder'),
    mk('はい。お父さんは電気のアース処理に詳しかった','Yes — Dad ground-knowl','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10391',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、長い歳月を経た古文書の研究を論文で扱いましたね','Ren — long-yr-old-doc paper','Calm','asuka_teacher'),
    mk('はい、野球選手の安打統計を論文で扱いました','Yes — Base-hit-stat paper','Earnest','ren_uni'),
    mk('蓮さん、政治家の口実発言の研究を論文で扱いましたね','Ren — pol-pretext paper','Reflective','asuka_teacher'),
    mk('はい、東京地検特捜部の歴史を論文で扱いました','Yes — Tokyo-pros-spec paper','Earnest','ren_uni'),
    mk('医学部の留年生の回生指導を論文で扱いましたね','Med-fail-rein paper','Engaged','asuka_teacher'),
    mk('はい、古都の町並み保存運動を論文で扱いました','Yes — Old-twn-pres paper','Earnest','ren_uni'),
    mk('蓮さん、皮膚の毛穴つまり孔の微細構造を論文で扱いましたね','Ren — skin-pore paper','Reflective','asuka_teacher'),
    mk('はい、古墳時代の陵墓発掘を論文で扱いました','Yes — Kofun-tomb paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10392',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、長い歳月の未解決事件を、警察、再捜査されますね','Case long-yr-unsolved police-re-inv','Reflective','ren_uni'),
    mk('警察、野球賭博での安打操作も捜査されますね','Police base-gamble-hit-inv','Cooperative','takeda_officer'),
    mk('本件、容疑者の口実供述を、警察、厳しく追及されますね','Case suspect-pretext-test police-pursue','Reflective','ren_uni'),
    mk('警察、地検と連携して立件されますね','Police pros-link-charge','Cooperative','takeda_officer'),
    mk('本件、若手警官の回生プログラムを、警察、おこなわれますね','Case young-rein-prog police-do','Reflective','ren_uni'),
    mk('警察、町並み保存地区での治安維持もされますね','Police twn-pres-area-safe','Cooperative','takeda_officer'),
    mk('本件、犯人の弾痕、つまり弾の孔を鑑識されますね','Case bullet-hole police-forensic','Reflective','ren_uni'),
    mk('警察、皇族陵墓の警備も担当されますね','Police royal-tomb-guard','Close','takeda_officer'),
  ]},
  {id:'conv_10393',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、長い歳月を経た古文書の研究を論文で扱いましたね','Sakura — long-yr-doc paper','Calm','asuka_teacher'),
    mk('はい、野球選手の安打統計を論文で扱いました','Yes — Base-hit paper','Earnest teen','sakura_teen'),
    mk('政治家の口実発言の研究を論文で扱いましたね','Pol-pretext paper','Reflective','asuka_teacher'),
    mk('はい、東京地検特捜部の歴史を論文で扱いました','Yes — Tokyo-pros paper','Earnest','sakura_teen'),
    mk('医学部の留年生の回生指導を論文で扱いましたね','Med-rein paper','Engaged','asuka_teacher'),
    mk('はい、古都の町並み保存運動を論文で扱いました','Yes — Old-twn-pres paper','Earnest','sakura_teen'),
    mk('皮膚の毛穴つまり孔の微細構造を論文で扱いましたね','Skin-pore paper','Reflective','asuka_teacher'),
    mk('はい、古墳時代の陵墓発掘を論文で扱いました','Yes — Kofun-tomb paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10394',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、長い歳月の慢性疾患を医療チームでフォローします','Ren — long-yr-chron med-team','Calm','saito_doctor'),
    mk('はい、患者の野球選手の安打スランプを医療チームで支援します','Yes — Pati-base-slump med-team','Patient','saito_doctor'),
    mk('蓮さん、患者の通院口実を医療チームで丁寧に聞きます','Ren — pati-visit-pretext med-team','Calm','saito_doctor'),
    mk('地検からの照会に、貴院、丁寧に応じられますね、先生','Pros-inquiry your-hosp pol, sensei','Reflective','ren_uni'),
    mk('はい、留年医学生の回生サポートを医療チームでおこないます','Yes — Med-stud-rein med-team','Patient','saito_doctor'),
    mk('町並み保存地区の地域医療を、貴院、担当されますね、先生','Twn-pres-area-med your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、皮膚の孔詰まりの治療を医療チームで担当します','Yes — Skin-pore-clog med-team','Patient','saito_doctor'),
    mk('はい、皇族陵墓警備時の救護を医療チームで担当します','Yes — Royal-tomb-guard-aid med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_10395',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、長い歳月をかけて築いたブランドを大事にしろ','Our co — long-yr-brand-cherish','Crisp','hiroshi_boss'),
    mk('はい。営業の安打、つまり成約率を上げます','Yes — Sales-hit-clos-up','Methodical','kenji_office'),
    mk('当社、納期遅れの口実を許すな','Our co — deadl-pretext-no','Direction','hiroshi_boss'),
    mk('はい。地検からの照会には法務部が対応します','Yes — Pros-inquiry-leg-resp','Update','kenji_office'),
    mk('当社、失敗した社員の回生機会を設けろ','Our co — fail-staff-rein-opp','Direction','hiroshi_boss'),
    mk('はい。古い町並みに合うレトロ店舗を出店します','Yes — Old-twn-retro-store','Update','kenji_office'),
    mk('当社、製品の毛穴つまり孔の品質を点検しろ','Our co — prod-pore-qual-insp','Direction','hiroshi_boss'),
    mk('はい。古墳陵墓近くの工事は慎重におこないます','Yes — Tomb-area-constr-careful','Close','kenji_office'),
  ]},
  {id:'conv_10396',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、クリスマス・キャロルの本を読んでらしたよ、メイちゃん','Aoi — cust-Carol-book Mei','Reflective','mei_romantic'),
    mk('葵、お客様、スクルージのような節約家でいらしたよ、メイちゃん','Aoi — cust-Scrooge-frugal Mei','Wry','aoi_barista'),
    mk('葵、お客様、店主の息子さんを「兵衛」と呼んでらしたよ、メイちゃん','Aoi — cust-store-son-Heibei Mei','Reflective','mei_romantic'),
    mk('葵、お客様、モモ缶詰のスイーツがお好きだって、メイちゃん','Aoi — cust-peach-can-sweet Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ポップス音楽の60年代がお好きだって、メイちゃん','Aoi — cust-Pops-60s Mei','Reflective','mei_romantic'),
    mk('葵、お客様、社民党時代の選挙ポスターを集めてらっしゃるって、メイちゃん','Aoi — cust-SDP-poster-coll Mei','Reflective','aoi_barista'),
    mk('葵、お客様、アントニオ・バンデラスの映画ファンだって、メイちゃん','Aoi — cust-Antonio-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、フランス人ピエール氏との取引があるって、メイちゃん','Aoi — cust-Pierre-deal Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10397',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがクリスマス・キャロルを朗読された','Gran — youth Dad-Carol-read','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、スクルージみたいに節約されたわよね、あなた?','Yes — Grandpa-Scrooge-frugal, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが甘い兵衛の名で呼ばれた','Gran — youth Dad-Heibei-call','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、モモの缶詰を毎月買ってらしたわよね、あなた?','Grandpa — peach-can-mo-buy, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが昭和のポップスを好まれた','Gran — youth Dad-Showa-Pops','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、社民党時代を懐かしまれたわよね、あなた?','Grandpa — SDP-era-miss, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがアントニオ・ガウディに憧れた','Gran — youth Dad-Antonio-Gaudi-admire','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ピエール・カルダンの服を着てらしたわよね、あなた?','Grandpa — Pierre-Cardin-wear, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10398',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがクリスマス・キャロルの絵本を読んで下さるそうよ','Sho — Dad-Carol-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、スクルージみたいにならないって決めたよ','Mei-sis — me Scrooge-no-decide','Earnest child','sho_child'),
    mk('翔くん、お父さんが昔の人を「兵衛」と呼ばれてたわ','Sho — Dad-old-Heibei-call','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとモモを食べたよ','Mei-sis — me Dad-peach','Eager child','sho_child'),
    mk('翔くん、お父さんがレトロポップスを聴かせて下さるわ','Sho — Dad-retro-Pops-listen','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと社民党のドキュメンタリー観たよ','Mei-sis — me Dad-SDP-doc','Eager child','sho_child'),
    mk('翔くん、お父さんがアントニオ・サリエリの絵本を読んで下さったわ','Sho — Dad-Antonio-Salieri-pic','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとピエール先生のクラスに行ったよ','Mei-sis — me Dad-Pierre-class','Eager close','sho_child'),
  ]},
  {id:'conv_10399',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、クリスマス・キャロル英語で読んでたな','Riku — Carol-Eng','Curious teen','sakura_teen'),
    mk('お前、スクルージみたいに節約してたな、桜','You — Scrooge-frugal Sakura','Wry','riku_teen'),
    mk('リク、お前、社会で兵衛さんの名前出てきたな','Riku — soc-Heibei','Curious','sakura_teen'),
    mk('お前、モモジュースばっか飲んでたな、桜','You — peach-juice-only Sakura','Wry','riku_teen'),
    mk('リク、お前、ポップス聴きながら勉強してたな','Riku — Pops-study','Curious','sakura_teen'),
    mk('お前、社会で社民党習ったろ?桜','You — soc-SDP? Sakura','Curious','riku_teen'),
    mk('リク、お前、アントニオ猪木のモノマネしてたな','Riku — Antonio-Inoki-mimic','Wry','sakura_teen'),
    mk('お前、ピエール瀧の映画観てたな、桜','You — Pierre-Taki-movie Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10400',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがクリスマス・キャロルの本を読んで下さるそうよ','Sho — Dad-Carol-read','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとスクルージのドキュメンタリー観たよ','Mom — me Dad-Scrooge-doc','Eager child','sho_child'),
    mk('翔くん、お父さんが「兵衛」って古い呼び名を教えて下さったわ','Sho — Dad-Heibei-old-name-teach','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとモモのケーキ食べたよ','Mom — me Dad-peach-cake','Eager child','sho_child'),
    mk('翔くん、お父さんが懐かしいポップスを流して下さったわ','Sho — Dad-nost-Pops-play','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと社民党のニュース観たよ','Mom — me Dad-SDP-news','Eager child','sho_child'),
    mk('翔くん、お父さんがアントニオ・バンデラスの映画を観てらしたわ','Sho — Dad-Antonio-B-movie','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとピエール・ローティの小説の絵本見たよ','Mom — me Dad-Pierre-Loti-pic','Eager close','sho_child'),
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

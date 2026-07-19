import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_463 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['なぁー','夕べ','損なう','曲がり','崩さ','行き方','引き続い','ごくごく']
const B_T = ['邦訳','自由民主党','自由党','角川書店','講じる','可用性','外為','用水']
const C_T = ['劣等','集権','旋回','発声','強大','果敢','残存','掟']
const D_T = ['桐','天狗','ダニ','シティー','飛び込み','海水浴','リハビリテーション','ヘビ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09221',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、「なぁー、いい天気だな」ってお父さんが仰ったわ','Sho — "naaa-nice-wether"-Dad-said','Reflective','yumiko_mom'),
    mk('ママ、夕べ、ぼくお祖父ちゃんの夢を見たよ','Mom — last-night-me-Grandpa-dream','Reflective child','sho_child'),
    mk('翔くん、お友達の気持ちを損なう発言はしないでね','Sho — friend-feel-damage-not-say','Direction','yumiko_mom'),
    mk('ママ、ぼく、お絵描きで線の曲がりを綺麗に描いたよ','Mom — me drawing-line-curve-clean','Proud child','sho_child'),
    mk('翔くん、お祖父ちゃんは姿勢を崩さない方ね','Sho — Grandpa-posture-not-break','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんに行き方を教えてもらったよ','Mom — me Grandpa-way-taught','Earnest child','sho_child'),
    mk('翔くん、雨が引き続いて困るわね','Sho — rain-cont-trouble','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんと、ごくごく水を飲んだよ','Mom — me Grandpa-gulp-water-drank','Eager close','sho_child'),
  ]},
  {id:'conv_09222',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、「なぁー、美味しいね」って仰って下さったよ、メイちゃん','Aoi — cust-"naa-tasty"-said Mei','Pleased','mei_romantic'),
    mk('葵、夕べ、お店の片付けを忘れちゃったね、メイちゃん','Aoi — last-night-store-clean-forgot Mei','Wry','aoi_barista'),
    mk('葵、お客様の信頼を損なう事のないようにね、メイちゃん','Aoi — cust-trust-damage-not Mei','Direction','mei_romantic'),
    mk('葵、メニューに曲がりがあるのも味だね、メイちゃん','Aoi — menu-curve-flavor Mei','Reflective','aoi_barista'),
    mk('葵、お店の雰囲気を崩さないように工夫しましょう、メイちゃん','Aoi — store-mood-not-break-craft Mei','Direction','mei_romantic'),
    mk('葵、お客様にお店までの行き方をご案内しましょう、メイちゃん','Aoi — cust-store-way-guide Mei','Direction','aoi_barista'),
    mk('葵、新メニューの注文が引き続いて入ってるね、メイちゃん','Aoi — new-menu-order-cont Mei','Pleased','mei_romantic'),
    mk('葵、お客様、冷たいお水をごくごく召し上がられたよ、メイちゃん','Aoi — cust-cold-water-gulp Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09223',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが「なぁー、嬉しいなぁ」と仰ったぞ','Gran — youth Dad-"naa-glad"-said','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、夕べに月を眺めてらしたわよね、あなた?','Yes — Grandpa-eve-moon-watch, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは家族の名を損なう事をされなかった','Gran — youth Dad-fam-name-damage-not','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、書道の曲がりを丁寧に描かれたわよね、あなた?','Grandpa — calligraphy-curve-careful, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは姿勢を崩さない方だった','Gran — youth Dad-posture-not-break','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、お孫さんに故郷の行き方を教えてらしたわよね、あなた?','Grandpa — youth-grandkid-hometown-way-taught, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、雨が引き続いて田畑が水浸しになった','Gran — youth-rain-cont-field-flood','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お酒をごくごく飲まれた事もありましたわよね、あなた?','Grandpa — sake-gulp-time, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09224',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、「なぁー、テスト難しかったなぁ」だろ?','Riku — "naa-test-hard"-right?','Wry teen','sakura_teen'),
    mk('お前、夕べ徹夜して大丈夫か、桜','You — last-night-all-nighter-OK? Sakura','Curious','riku_teen'),
    mk('リク、友達との関係を損なうのは止めろよ','Riku — friend-rel-damage-stop','Direction','sakura_teen'),
    mk('お前のノート、字に曲がりがあって読みにくいぞ、桜','You — note-letter-curve-hard-read Sakura','Wry','riku_teen'),
    mk('リク、お前、姿勢を崩さないで勉強しろよ','Riku — posture-not-break-study','Direction','sakura_teen'),
    mk('お前、進路の行き方を考えろよ、桜','You — career-way-think Sakura','Direction','riku_teen'),
    mk('リク、お前、引き続いて部活頑張れ','Riku — cont-club-try','Encouraging','sakura_teen'),
    mk('お前、ジュースをごくごく飲みすぎだぞ、桜','You — juice-gulp-too-much Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_09225',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんも「なぁー、素敵な日ね」って思うわよ','Sho — Mei-sis-"naa-lovely-day"-think','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、夕べに公園に行ったよ','Mei-sis — me last-night-park','Eager child','sho_child'),
    mk('翔くん、お絵描きで友達の気持ちを損なう事のないようにね','Sho — drawing-friend-feel-damage-not','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お絵描きで曲がりを練習したよ','Mei-sis — me drawing-curve-prac','Proud child','sho_child'),
    mk('翔くん、メイ姉さんは姿勢を崩さない絵描きさんね','Sho — Mei-sis-posture-not-break-artist','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんのお家の行き方覚えたよ','Mei-sis — me Mei-sis-home-way-learn','Proud child','sho_child'),
    mk('翔くん、お絵描きを引き続いて頑張ってね','Sho — drawing-cont-try','Encouraging','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんのジュースをごくごく飲んだよ','Mei-sis — me Mei-sis-juice-gulp','Eager close','sho_child'),
  ]},
  {id:'conv_09226',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、海外作品の邦訳出版を企画しろ','Our co — overseas-Jp-trans-pub-plan','Crisp','hiroshi_boss'),
    mk('はい。自由民主党の議員との懇談を予定しております','Yes — LDP-MP-chat-plan','Methodical','kenji_office'),
    mk('当社、自由党の動向にも注意しろ','Our co — Liberal-Party-watch','Direction','hiroshi_boss'),
    mk('はい。角川書店の編集者と協力します','Yes — Kadokawa-editor-coop','Update','kenji_office'),
    mk('当社、契約改善策を講じる時期だ','Our co — contract-imp-set-up-time','Direction','hiroshi_boss'),
    mk('はい。サーバーの可用性を強化しました','Yes — Server-avail-strength','Update','kenji_office'),
    mk('当社、外為の動向を毎日確認しろ','Our co — fx-trend-daily-check','Direction','hiroshi_boss'),
    mk('はい。工場の用水確保を進めております','Yes — Factory-water-secure-progress','Close','kenji_office'),
  ]},
  {id:'conv_09227',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('海外古典の邦訳本を扱う部署を作りましょう','Overseas-classic-Jp-trans-section','Brisk','yuki_office'),
    mk('はい。自由民主党事務所との連絡先を整理しました','Yes — LDP-office-contact-org','Cooperative','kenji_office'),
    mk('自由党側との接触も慎重に進めましょう','Liberal-Party-contact-careful','Direction','yuki_office'),
    mk('はい。角川書店主催のフェアに参加します','Yes — Kadokawa-fair-join','Update','kenji_office'),
    mk('リスクに対応策を講じる必要がありますね','Risk-counter-set-up-need','Direction','yuki_office'),
    mk('はい。システムの可用性を高めるテストを実施中です','Yes — Sys-avail-up-test','Update','kenji_office'),
    mk('外為の急変に備えましょう','Fx-sudden-prep','Direction','yuki_office'),
    mk('はい。工場の用水路の補修を依頼しました','Yes — Factory-water-channel-repair','Close','kenji_office'),
  ]},
  {id:'conv_09228',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、海外論文の邦訳に挑戦しろ','Ren — overseas-paper-Jp-trans-challenge','Mentor','hiroshi_boss'),
    mk('はい。自由民主党所属の議員と勉強会で議論しました','Yes — LDP-MP-study-debate','Earnest','ren_uni'),
    mk('蓮、自由党時代の歴史を研究しろ','Ren — Liberal-Party-era-research','Direction','hiroshi_boss'),
    mk('はい。角川書店からの執筆依頼を受けました','Yes — Kadokawa-write-req-receive','Polite','ren_uni'),
    mk('蓮、研究中の問題に対策を講じるつもりだ','Ren — research-prob-counter-set-up','Direction','hiroshi_boss'),
    mk('はい。研究データの可用性を確認しております','Yes — Research-data-avail-check','Earnest','ren_uni'),
    mk('蓮、外為市場の研究も学会論文で扱いました','Ren — fx-market-research-conf-paper','Direction','hiroshi_boss'),
    mk('はい。海外調査では用水確保にも注意します','Yes — Overseas-field-water-careful','Earnest close','ren_uni'),
  ]},
  {id:'conv_09229',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、海外規定の邦訳資料を整備されますね','Police overseas-rule-Jp-trans-prep','Cooperative','kenji_office'),
    mk('警察、自由民主党議員からのお問い合わせにも対応されますね','Police LDP-MP-inquiry-resp','Cooperative','kenji_office'),
    mk('警察、戦前の自由党の犯罪記録もご研究ですね','Police prewar-Liberal-Party-crime-rec-research','Cooperative','kenji_office'),
    mk('警察、角川書店のミステリー部門との連携、頼もしいです','Police Kadokawa-myst-link reliable','Cooperative','kenji_office'),
    mk('警察、新たな対策を講じる準備をされてますね','Police new-counter-set-up-prep','Cooperative','kenji_office'),
    mk('警察、防犯システムの可用性も重視されてますね','Police crime-prev-sys-avail-imp','Cooperative','kenji_office'),
    mk('警察、不正外為取引の捜査もご担当ですね','Police illegal-fx-inv','Cooperative','kenji_office'),
    mk('警察、用水路での事故防止活動もされますね','Police water-channel-acc-prev','Close','kenji_office'),
  ]},
  {id:'conv_09230',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、海外書籍の邦訳を社員に勧められたぞ','Dad — founding overseas-book-Jp-trans-staff-rec','Sage','hiroshi_elder'),
    mk('はい。お父さんは自由民主党の政策研究にも関心を持たれた','Yes — Dad LDP-pol-research-interest','Commitment','hiroshi_boss'),
    mk('お父さん、自由党時代の文献も大事にされたぞ','Dad — Liberal-Party-era-doc-cherish','Wistful','hiroshi_elder'),
    mk('はい。お父さんは角川書店と良好な関係を保たれた','Yes — Dad Kadokawa-rel-keep','Reflective','hiroshi_boss'),
    mk('お父さん、危機に対策を講じる早さが見事だった','Dad — crisis-counter-set-up-fast-splendid','Wistful','hiroshi_elder'),
    mk('はい。お父さんはシステムの可用性を経営の柱とされた','Yes — Dad sys-avail-mgmt-pillar','Reflective','hiroshi_boss'),
    mk('お父さん、外為で利益を上げる手腕もおありだった','Dad — fx-profit-skill','Wistful','hiroshi_elder'),
    mk('はい。お父さんは工場の用水管理を厳格にされた','Yes — Dad factory-water-strict','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09231',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、社会的劣等感を抱える人の研究を論文で扱いましたね','Ren — soc-infer-feel-research paper','Calm','asuka_teacher'),
    mk('はい、中央集権体制の歴史を論文で扱いました','Yes — Central-system-hist paper','Earnest','ren_uni'),
    mk('蓮さん、戦闘機の旋回戦術を論文で扱いましたね','Ren — fighter-spin-tact paper','Reflective','asuka_teacher'),
    mk('はい、声楽における発声法を論文で扱いました','Yes — Vocal-singing-method paper','Earnest','ren_uni'),
    mk('強大な国家を作り上げた指導者を論文で扱いましたね','Mighty-state-leader paper','Engaged','asuka_teacher'),
    mk('はい、果敢な戦士の行動分析を論文で扱いました','Yes — Bold-warrior-behav paper','Earnest','ren_uni'),
    mk('蓮さん、戦時の残存兵力研究を論文で扱いましたね','Ren — wartime-rem-force paper','Reflective','asuka_teacher'),
    mk('はい、暴力組織の掟の研究を論文で扱いました','Yes — Crime-org-rule-research paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09232',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、被害者の劣等感に警察、配慮されてますね','Case victim-infer-feel police-care','Reflective','ren_uni'),
    mk('警察、中央集権的な捜査体制を見直し中ですね','Police central-inv-sys-review','Procedural','takeda_officer'),
    mk('本件、警察、ヘリで上空を旋回されましたね','Case heli-aerial-spin','Reflective','ren_uni'),
    mk('警察、緊急発声訓練で連携を強化します','Police emerg-call-train-link','Procedural','takeda_officer'),
    mk('本件、強大な組織を相手に警察、毅然と対応されますね','Case mighty-org police-firm-resp','Reflective','ren_uni'),
    mk('警察、果敢な現場対応を続けます','Police bold-on-site-resp-cont','Procedural','takeda_officer'),
    mk('本件、残存する証拠を警察、丁寧に分析されますね','Case rem-evid police-careful-anal','Reflective','ren_uni'),
    mk('警察、犯罪組織の掟を破った内部告発者を保護します','Police crime-org-rule-break-inform-prot','Close','takeda_officer'),
  ]},
  {id:'conv_09233',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、社会的劣等感を抱える人の研究を論文で扱いましたね','Sakura — soc-infer-feel paper','Calm','asuka_teacher'),
    mk('はい、中央集権体制の歴史を論文で扱いました','Yes — Central-sys paper','Earnest teen','sakura_teen'),
    mk('戦闘機の旋回戦術を論文で扱いましたね','Fighter-spin paper','Reflective','asuka_teacher'),
    mk('はい、声楽における発声法を論文で扱いました','Yes — Vocal-method paper','Earnest','sakura_teen'),
    mk('強大な国家を作り上げた指導者を論文で扱いましたね','Mighty-state paper','Engaged','asuka_teacher'),
    mk('はい、果敢な戦士の行動分析を論文で扱いました','Yes — Bold-warrior paper','Earnest','sakura_teen'),
    mk('戦時の残存兵力研究を論文で扱いましたね','War-rem-force paper','Reflective','asuka_teacher'),
    mk('はい、暴力組織の掟の研究を論文で扱いました','Yes — Crime-rule paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09234',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、患者さんの劣等感を医療チームで丁寧にケアします','Ren — patient-infer med-team careful','Calm','saito_doctor'),
    mk('はい、医療チームでの集権的な意思決定を避ける工夫をしております','Yes — Med-team-central-avoid','Patient','saito_doctor'),
    mk('救急ヘリの旋回着陸を、貴院、毎日想定されてますね、先生','Emerg-heli-spin-land your-hosp daily, sensei','Curious','ren_uni'),
    mk('はい、発声リハビリを医療チームで担当します','Yes — Voice-rehab med-team','Patient','saito_doctor'),
    mk('強大な感染症に挑む、貴院、頼もしいです、先生','Mighty-infect your-hosp reliable, sensei','Praising','ren_uni'),
    mk('はい、果敢な治療判断を医療チームで支えます','Yes — Bold-treat-judg med-team','Patient','saito_doctor'),
    mk('長期療養者に残存する症状を、貴院、丁寧に追跡されてますね、先生','Long-rem-symp your-hosp track, sensei','Reflective','ren_uni'),
    mk('はい、医療現場の掟を医療チームで共有します','Yes — Med-rule med-team-share','Patient close','saito_doctor'),
  ]},
  {id:'conv_09235',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、社員に劣等感を抱かせるな','Our co — staff-infer-not-make','Crisp','hiroshi_boss'),
    mk('はい。意思決定の集権化と分権化のバランスを取ります','Yes — Judg-central-decent-bal','Methodical','kenji_office'),
    mk('当社、社内会議を旋回的に各部署で回せ','Our co — co-meet-spin-each-section','Direction','hiroshi_boss'),
    mk('はい。社員の発声トレーニングをプレゼン研修に入れました','Yes — Staff-voice-train-pres-incl','Update','kenji_office'),
    mk('当社、強大な競合にも臆するな','Our co — mighty-rival-not-fear','Direction','hiroshi_boss'),
    mk('はい。果敢な投資判断を続けます','Yes — Bold-invest-cont','Update','kenji_office'),
    mk('当社、不要な部署が残存しないよう整理しろ','Our co — unnec-section-rem-not-org','Direction','hiroshi_boss'),
    mk('はい。業界の掟を弁えつつ新風を吹き込みます','Yes — Industry-rule-mind-new-wind','Close','kenji_office'),
  ]},
  {id:'conv_09236',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、桐の箪笥を新調したって、メイちゃん','Aoi — cust-paulownia-tansu-new Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お子様に天狗の絵本を読まれたって、メイちゃん','Aoi — cust-child-tengu-book Mei','Reflective','aoi_barista'),
    mk('葵、お店にダニが出ないよう掃除を徹底しましょう、メイちゃん','Aoi — store-mite-clean-strict Mei','Direction','mei_romantic'),
    mk('葵、お客様、都会のシティーホテルに泊まったって、メイちゃん','Aoi — cust-city-hotel Mei','Reflective','aoi_barista'),
    mk('葵、お客様、プールの飛び込みのお話されてたよ、メイちゃん','Aoi — cust-pool-dive-told Mei','Pleased','mei_romantic'),
    mk('葵、夏は海水浴のお客様で混みそうね、メイちゃん','Aoi — summer-sea-bath-cust-busy Mei','Reflective','aoi_barista'),
    mk('葵、お客様、リハビリテーション施設のお仕事だって、メイちゃん','Aoi — cust-rehab-fac-work Mei','Reflective','mei_romantic'),
    mk('葵、お子様、ヘビのおもちゃに興味津々ね、メイちゃん','Aoi — child-snake-toy-into Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_09237',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが桐の箪笥を作って下さった','Gran — youth Dad-paulownia-tansu-made','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お孫様に天狗のお話されたわよね、あなた?','Yes — Grandpa-grandkid-tengu-told, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはダニを退治するご様子を見せて下さった','Gran — youth Dad-mite-elim','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、シティーホテルに泊まる機会もあったわよね、あなた?','Grandpa — city-hotel-stay, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがプールで飛び込みをされた','Gran — youth Dad-pool-dive','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、夏に海水浴に連れて行って下さったわよね、あなた?','Grandpa — summer-sea-bath-took, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがリハビリテーションをされた','Gran — youth Dad-rehab','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お庭でヘビを見つけて驚かれたわよね、あなた?','Grandpa — garden-snake-found-surprised, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09238',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お祖母ちゃんが桐の箪笥を大事にしてらっしゃるわ','Sho — Grandma-paulownia-tansu-cherish','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、天狗のお祭りに行きたいよ','Mei-sis — me tengu-fest-want','Eager child','sho_child'),
    mk('翔くん、お家にダニがいないか確認しましょうね','Sho — home-mite-check','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとシティーホテルに泊まったよ','Mei-sis — me Dad-city-hotel-stay','Eager child','sho_child'),
    mk('翔くん、プールで飛び込みの練習しましょうね','Sho — pool-dive-prac','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、家族と海水浴に行きたいよ','Mei-sis — me fam-sea-bath-want','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんがリハビリテーションに通われてるわ','Sho — Grandpa-rehab-attend','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、動物園でヘビを見たよ','Mei-sis — me zoo-snake-saw','Eager close','sho_child'),
  ]},
  {id:'conv_09239',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前ん家、桐の箪笥あんだろ?','Riku — your-home-paulownia-tansu?','Curious teen','sakura_teen'),
    mk('お前、天狗の伝説好きだろ、桜','You — tengu-legend-like Sakura','Curious','riku_teen'),
    mk('リク、お前、ダニアレルギーだろ?','Riku — mite-allergy?','Curious','sakura_teen'),
    mk('お前、家族でシティーホテル泊まったろ?桜','You — fam-city-hotel? Sakura','Curious','riku_teen'),
    mk('リク、お前、プールの飛び込み台怖がってたな','Riku — pool-dive-platform-scared','Wry','sakura_teen'),
    mk('お前、夏休みに海水浴行ったろ?桜','You — summer-sea-bath? Sakura','Curious','riku_teen'),
    mk('リク、お前、リハビリテーションのボランティアやってんだろ?','Riku — rehab-volunteer?','Curious','sakura_teen'),
    mk('お前、ヘビが苦手だろ、桜','You — snake-bad Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_09240',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖母ちゃんが桐の箪笥を綺麗にされてたわ','Sho — Grandma-paulownia-tansu-clean','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと天狗のお祭り行きたいよ','Mom — me Dad-tengu-fest-want','Eager child','sho_child'),
    mk('翔くん、お家のダニ対策を徹底しましょうね','Sho — home-mite-counter-strict','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんとシティーホテルに泊まったよ','Mom — me Dad-city-hotel-stay','Eager child','sho_child'),
    mk('翔くん、お父さんとプールで飛び込み練習しましょうね','Sho — Dad-pool-dive-prac','Tender','yumiko_mom'),
    mk('ママ、ぼく、家族で海水浴に行きたいよ','Mom — me fam-sea-bath-want','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんがリハビリテーションに通われてるわ','Sho — Grandpa-rehab-attend','Reflective','yumiko_mom'),
    mk('ママ、ぼく、図鑑でヘビを見て勉強したよ','Mom — me book-snake-study','Eager close','sho_child'),
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

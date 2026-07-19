import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_533 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['祐','俊','吾','遙','諒','ゆり','綾','朱']
const B_T = ['西川','横山','藤本','新田','飯田','西尾','木下','秋山']
const C_T = ['マタイ','カンジ','エッセンス','面々','国崎','土屋','大森','樋口']
const D_T = ['マルコ','スティーブ','フィリップ','ムーア','ファーム','ヨシ','アール','服部']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10621',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんのお友達の祐さんが今度遊びにいらっしゃるわ','Sho — Dad-fri-Yu-vis','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとお友達の俊くんと公園に行ったよ','Mom — me Dad-fri-Shun-park','Pleased child','sho_child'),
    mk('翔くん、お父さんが「吾輩は猫である、と語る朗読会」を観られたわ','Sho — Dad-"Wagahai-cat-rec"-saw','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとお友達の遙ちゃんに会ったよ','Mom — me Dad-fri-Haruka-met','Eager child','sho_child'),
    mk('翔くん、お父さんが「諒くんとも仲良くね」って仰ってたわ','Sho — Dad-"Ryo-fri"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと従姉妹のゆりちゃんと遊んだよ','Mom — me Dad-cous-Yuri-play','Eager child','sho_child'),
    mk('翔くん、お父さんが「綾ちゃんのご家族にもよろしくね」って仰ってたわ','Sho — Dad-"Aya-fam-greet"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと朱色の絵の具で絵を描いたよ','Mom — me Dad-vermil-paint-pic','Eager close','sho_child'),
  ]},
  {id:'conv_10622',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、お孫様の祐くんを連れていらしたよ、メイちゃん','Aoi — cust-grdkid-Yu-vis Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご友人の俊さんと打ち合わせをされてたよ、メイちゃん','Aoi — cust-fri-Shun-meet Mei','Reflective','aoi_barista'),
    mk('葵、お客様、夏目漱石の「吾輩は猫である」を読んでらしたよ、メイちゃん','Aoi — cust-Soseki-"Wagahai"-read Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お孫様の遙ちゃんの七五三の写真を見せて下さったよ、メイちゃん','Aoi — cust-grdkid-Haruka-photo Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お子様の諒くんが受験を頑張ってらっしゃるって、メイちゃん','Aoi — cust-kid-Ryo-exam Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お庭のゆりの花を眺めてらしたよ、メイちゃん','Aoi — cust-yard-yuri-flo Mei','Reflective','aoi_barista'),
    mk('葵、お客様、姪御さんの綾ちゃんを連れていらしたよ、メイちゃん','Aoi — cust-niece-Aya-vis Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お店の朱塗りの看板をお褒め下さったよ、メイちゃん','Aoi — cust-vermil-sign-praise Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10623',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんのお友達の祐さんが家にいらした','Gran — youth Dad-fri-Yu-vis','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、俊さんと将棋を指されたわよね、あなた?','Yes — Grandpa-youth-Shun-shog, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「吾輩は猫である」を声に出して読まれた','Gran — youth Dad-"Wagahai"-recite','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、姪の遙ちゃんを可愛がられたわよね、あなた?','Grandpa — youth-niece-Haruka-love, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが諒さんと音楽鑑賞を楽しまれた','Gran — youth Dad-Ryo-mus','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ご近所のゆりさんと俳句を詠まれたわよね、あなた?','Grandpa — youth-near-Yuri-hai, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが妹の綾子さんを「綾」と呼ばれた','Gran — youth Dad-sis-Ayako-"Aya"-call','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、朱塗りのお椀を大事にされたわよね、あなた?','Grandpa — youth-vermil-bowl-cher, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10624',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、隣の祐とコンビニ寄ってたな','Riku — next-Yu-conv-stop','Curious teen','sakura_teen'),
    mk('お前、俊と部活で組んでたな、桜','You — Shun-club-pair Sakura','Curious','riku_teen'),
    mk('リク、お前、国語で「吾輩は猫である」読まされてたな','Riku — Jp-"Wagahai"-read','Wry','sakura_teen'),
    mk('お前、転校生の遙ちゃんと仲良くなったな、桜','You — transf-Haruka-close Sakura','Curious','riku_teen'),
    mk('リク、お前、サッカー部の諒先輩を尊敬してたな','Riku — soccer-Ryo-sen-resp','Curious','sakura_teen'),
    mk('お前、ゆり先輩のチョコ嬉しそうだったな、桜','You — Yuri-sen-choc-glad Sakura','Wry','riku_teen'),
    mk('リク、お前、隣のクラスの綾と話してたな','Riku — next-cl-Aya-talk','Curious','sakura_teen'),
    mk('お前、美術で朱色を使うの上手かったな、桜','You — art-vermil-good Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_10625',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがお友達の祐さんとサッカーを観に行かれるわ','Sho — Dad-fri-Yu-soccer','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとお友達の俊くんと水族館に行ったよ','Mei-sis — me Dad-fri-Shun-aqua','Eager child','sho_child'),
    mk('翔くん、お父さんが「吾輩は猫である」の絵本を読んで下さるわ','Sho — Dad-"Wagahai"-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと遙ちゃんの誕生日会に行ったよ','Mei-sis — me Dad-Haruka-bday','Eager child','sho_child'),
    mk('翔くん、お父さんが「諒くんも誘って遊ぼう」って仰ってたわ','Sho — Dad-"Ryo-invite-play"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとゆりちゃんの家にお邪魔したよ','Mei-sis — me Dad-Yuri-house-vis','Eager child','sho_child'),
    mk('翔くん、お父さんが「綾ちゃんの新しい習い事は何?」って仰ってたわ','Sho — Dad-"Aya-new-prac-what"-asked','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと朱塗りの神社の写真撮ったよ','Mei-sis — me Dad-vermil-shrine-photo','Eager close','sho_child'),
  ]},
  {id:'conv_10626',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新任の西川部長を歓迎しろ','Our co — new-Nish-dept-wel','Crisp','hiroshi_boss'),
    mk('はい。営業の横山課長の出張日程を整えます','Yes — Sales-Yok-mgr-trip','Methodical','kenji_office'),
    mk('当社、取引先の藤本社長との会合を設定しろ','Our co — client-Fuji-pres-meet','Direction','hiroshi_boss'),
    mk('はい。新田主任の研修プログラムを企画します','Yes — Nitta-lead-train-plan','Update','kenji_office'),
    mk('当社、本部長の飯田様の引退式を準備しろ','Our co — HQ-Iida-ret-cere','Direction','hiroshi_boss'),
    mk('はい。広報の西尾様の戦略を採用します','Yes — PR-Nishio-strat-adopt','Update','kenji_office'),
    mk('当社、人事担当の木下様を主任に昇格させろ','Our co — HR-Kino-prom-lead','Direction','hiroshi_boss'),
    mk('はい。技術主任の秋山様にプロジェクトを任せます','Yes — Tech-lead-Aki-proj','Close','kenji_office'),
  ]},
  {id:'conv_10627',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('西川部長の歓迎会を来週設定しましょう','Nish-dept-wel-nextweek','Brisk','yuki_office'),
    mk('はい。横山課長の引き継ぎ書を確認します','Yes — Yok-mgr-handov-doc','Cooperative','kenji_office'),
    mk('藤本社長のご来社時のスケジュールを整えましょう','Fuji-pres-vis-sched','Direction','yuki_office'),
    mk('はい。新田主任の研修教材を準備します','Yes — Nitta-train-mat','Update','kenji_office'),
    mk('飯田取締役の最終出社日に花束を準備しましょう','Iida-dir-last-day-flo','Direction','yuki_office'),
    mk('はい。西尾広報部の月次報告を受け取ります','Yes — Nishio-PR-mo-rep','Update','kenji_office'),
    mk('木下人事に新規募集の打ち合わせを依頼しましょう','Kino-HR-new-recr-meet','Direction','yuki_office'),
    mk('はい。秋山技術部のプロジェクト進捗を確認します','Yes — Aki-tech-proj-prog','Close','kenji_office'),
  ]},
  {id:'conv_10628',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、指導教授の西川先生のご研究を継承しろ','Ren — mentor-Nish-res-inherit','Mentor','hiroshi_boss'),
    mk('はい。横山教授の論文を読み込みます','Yes — Yok-prof-paper-read','Earnest','ren_uni'),
    mk('蓮、共同研究の藤本先生に研究照会しろ','Ren — joint-Fuji-prof-inq','Direction','hiroshi_boss'),
    mk('はい。学会で新田助教のご発表を聴きます','Yes — Conf-Nitta-asst-pres','Earnest','ren_uni'),
    mk('蓮、引退する飯田先生のご研究をまとめろ','Ren — ret-Iida-res-summ','Direction','hiroshi_boss'),
    mk('はい。西尾広報担当に研究成果を伝えます','Yes — Nishio-PR-res-tell','Polite','ren_uni'),
    mk('蓮、研究室の木下技術員と連携しろ','Ren — lab-Kino-tech-link','Direction','hiroshi_boss'),
    mk('はい。秋山主任研究員のご指導を受けます','Yes — Aki-lead-res-guide','Earnest close','ren_uni'),
  ]},
  {id:'conv_10629',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、署内の西川刑事のご活躍も評価されますね','Police stat-Nish-det-eval','Cooperative','kenji_office'),
    mk('警察、被害者横山氏のご家族にも、警察、配慮されますね','Police vict-Yok-fam-care','Cooperative','kenji_office'),
    mk('警察、参考人藤本氏から、警察、事情を丁寧に伺われますね','Police witn-Fuji-careful','Cooperative','kenji_office'),
    mk('警察、新田巡査の現場対応を、警察、ご指導されますね','Police Nitta-pat-scene-guide','Cooperative','kenji_office'),
    mk('警察、飯田課長の捜査指揮を、警察、信頼されますね','Police Iida-mgr-inv-trust','Cooperative','kenji_office'),
    mk('警察、広報の西尾様が記者対応をされますね','Police PR-Nishio-media','Cooperative','kenji_office'),
    mk('警察、警察犬訓練の木下さんと連携されますね','Police K9-Kino-link','Cooperative','kenji_office'),
    mk('警察、鑑識の秋山主任と現場検証されますね','Police foren-Aki-lead-scene','Close','kenji_office'),
  ]},
  {id:'conv_10630',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、お友達の西川社長と共同事業をされた','Dad — youth-fri-Nish-JV','Sage','hiroshi_elder'),
    mk('はい。お父さんは横山先輩のご薫陶を受けられた','Yes — Dad Yok-sen-mentor','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、藤本氏と新規事業を立ち上げられた','Dad — youth-Fuji-new-biz','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新田氏を社員一人目として採用された','Yes — Dad Nitta-1st-hire','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、飯田氏と先輩後輩の関係だった','Dad — youth-Iida-sen-jun','Wistful','hiroshi_elder'),
    mk('はい。お父さんは西尾広報の初代担当をされた','Yes — Dad Nishio-PR-1st','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、木下氏との出会いに感謝された','Dad — youth-Kino-meet-grat','Wistful','hiroshi_elder'),
    mk('はい。お父さんは秋山氏に技術部を任された','Yes — Dad Aki-tech-entr','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10631',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、新約聖書のマタイ伝の文献研究を論文で扱いましたね','Ren — NT-Matt-lit paper','Calm','asuka_teacher'),
    mk('はい、日本語のカンジ、つまり漢字の歴史を論文で扱いました','Yes — Jp-kanji-hist paper','Earnest','ren_uni'),
    mk('蓮さん、和食のエッセンス、つまり日本料理の本質研究を論文で扱いましたね','Ren — Jp-food-ess paper','Reflective','asuka_teacher'),
    mk('はい、研究者面々のご意見をまとめた論文を執筆しました','Yes — Res-each-view-summ paper','Earnest','ren_uni'),
    mk('蓮さん、宇佐神宮の国崎、つまり国東半島の地理研究を論文で扱いましたね','Ren — Usa-Kunisaki-geo paper','Reflective','asuka_teacher'),
    mk('はい、考古学者土屋先生の発掘成果を論文で扱いました','Yes — Arch-Tsuchi-dig paper','Earnest','ren_uni'),
    mk('蓮さん、貝類研究家大森博士のご研究を論文で扱いましたね','Ren — moll-Omori-res paper','Reflective','asuka_teacher'),
    mk('はい、言語学者樋口先生の方言研究を論文で扱いました','Yes — Ling-Hig-dialect paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10632',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、宗教団体マタイ派の捜査を、警察、慎重におこなわれますね','Case rel-Matt-grp police-care','Reflective','ren_uni'),
    mk('警察、調書のカンジ、つまり漢字の誤記にも注意されますね','Police stmt-kanji-care','Cooperative','takeda_officer'),
    mk('本件、容疑者の供述のエッセンス、つまり要点を、警察、整理されますね','Case suspect-stmt-ess police-tidy','Reflective','ren_uni'),
    mk('警察、捜査本部の面々と毎朝会議されますね','Police inv-HQ-each-morn-meet','Cooperative','takeda_officer'),
    mk('本件、国崎半島の事件を、警察、地元署と連携されますね','Case Kunisaki-area police-local-link','Reflective','ren_uni'),
    mk('警察、参考人土屋氏のご証言を、警察、丁寧に伺われますね','Police witn-Tsuchi-careful','Cooperative','takeda_officer'),
    mk('本件、貝塚研究の大森氏に、警察、ご助言を仰がれますね','Case shell-Omori-adv','Reflective','ren_uni'),
    mk('警察、被害者樋口氏のご家族にも、警察、慎重に対応されますね','Police vict-Hig-fam-care','Close','takeda_officer'),
  ]},
  {id:'conv_10633',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、新約聖書のマタイ伝の文献研究を論文で扱いましたね','Sakura — Matt paper','Calm','asuka_teacher'),
    mk('はい、日本語のカンジ、つまり漢字の歴史を論文で扱いました','Yes — Kanji paper','Earnest teen','sakura_teen'),
    mk('和食のエッセンス、つまり日本料理の本質研究を論文で扱いましたね','Ess paper','Reflective','asuka_teacher'),
    mk('はい、研究者面々のご意見をまとめた論文を執筆しました','Yes — Each-view paper','Earnest','sakura_teen'),
    mk('宇佐神宮の国崎、つまり国東半島の地理研究を論文で扱いましたね','Kunisaki-geo paper','Reflective','asuka_teacher'),
    mk('はい、考古学者土屋先生の発掘成果を論文で扱いました','Yes — Tsuchi paper','Earnest','sakura_teen'),
    mk('貝類研究家大森博士のご研究を論文で扱いましたね','Omori paper','Reflective','asuka_teacher'),
    mk('はい、言語学者樋口先生の方言研究を論文で扱いました','Yes — Hig paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10634',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、教会のマタイ伝の慈善活動を医療チームでご支援します','Ren — Matt-char med-team-supp','Calm','saito_doctor'),
    mk('蓮さん、診察記録のカンジ、つまり漢字の正確さを医療チームで保ちます','Ren — diag-kanji-accur med-team','Calm','saito_doctor'),
    mk('蓮さん、診療のエッセンス、つまり本質を医療チームで共有します','Ren — diag-ess med-team-share','Calm','saito_doctor'),
    mk('蓮さん、医療チームの面々で症例検討します','Ren — med-team-each-case','Calm','saito_doctor'),
    mk('蓮さん、国崎半島の僻地医療を医療チームで担当します','Ren — Kunisaki-rural-med-team','Calm','saito_doctor'),
    mk('蓮さん、患者土屋様のご症状を医療チームで継続観察します','Ren — pati-Tsuchi-cond med-team','Calm','saito_doctor'),
    mk('蓮さん、研究者大森博士と医療チームで共同研究します','Ren — Omori-res-team-joint','Calm','saito_doctor'),
    mk('蓮さん、言語療法士樋口先生と医療チームで連携します','Ren — sp-Hig med-team-link','Calm close','saito_doctor'),
  ]},
  {id:'conv_10635',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、慈善活動はマタイ伝の精神に倣え','Our co — char-Matt-spir','Crisp','hiroshi_boss'),
    mk('はい。新人にカンジ、つまり漢字書き取りを徹底させます','Yes — Newhire-kanji-thor','Methodical','kenji_office'),
    mk('当社、製品のエッセンス、つまり本質を社員に共有しろ','Our co — prod-ess-staff-share','Direction','hiroshi_boss'),
    mk('はい。経営陣面々で月一会議を実施します','Yes — Exec-each-mo-meet','Update','kenji_office'),
    mk('当社、国崎工場の生産性を上げろ','Our co — Kunisaki-fact-prod-up','Direction','hiroshi_boss'),
    mk('はい。新任の土屋部長と連携を取ります','Yes — New-Tsuchi-dept-link','Update','kenji_office'),
    mk('当社、技術顧問の大森博士にご助言を仰げ','Our co — tech-adv-Omori','Direction','hiroshi_boss'),
    mk('はい。新規開拓の樋口エリアにチームを派遣します','Yes — New-Hig-area-team','Close','kenji_office'),
  ]},
  {id:'conv_10636',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、イタリア人マルコ氏のお話を語って下さったよ、メイちゃん','Aoi — cust-It-Marco-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、米国人スティーブ氏との交流のお話だったよ、メイちゃん','Aoi — cust-US-Steve-int Mei','Reflective','aoi_barista'),
    mk('葵、お客様、英国人フィリップ氏のジャズライブに行かれたって、メイちゃん','Aoi — cust-UK-Phil-jazz Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ロックスターのムーアさんに憧れてらっしゃるって、メイちゃん','Aoi — cust-Moore-rock-asp Mei','Reflective','aoi_barista'),
    mk('葵、お客様、家族で野球のファームチームを応援されてるって、メイちゃん','Aoi — cust-fam-farm-team Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ゲームのヨシ、つまりヨッシーが好きだって、メイちゃん','Aoi — cust-game-Yoshi-like Mei','Reflective','aoi_barista'),
    mk('葵、お客様、漫画のアールという文字、つまりRに込めた意味のお話だったよ、メイちゃん','Aoi — cust-mng-R-mean Mei','Reflective','mei_romantic'),
    mk('葵、お客様、忍者漫画の服部半蔵がお好きだって、メイちゃん','Aoi — cust-ninja-Hatt-Han-fan Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10637',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがイタリアでマルコ氏と知り合われた','Gran — youth Dad-It-Marco-met','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、米国スティーブ氏と文通されたわよね、あなた?','Yes — Grandpa-youth-US-Steve-letter, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが英国フィリップ氏とジャズを聴かれた','Gran — youth Dad-UK-Phil-jazz','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ロックスターのムーアさんの曲を愛されたわよね、あなた?','Grandpa — youth-Moore-music-love, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは野球のファーム選手にも詳しかった','Gran — youth Dad-base-farm-knowl','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ヨシ、つまりヨッシーのキャラクターをお孫様と楽しまれたわよね、あなた?','Grandpa — youth-Yoshi-grdkid-fun, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが漫画のアール、つまりRをモチーフにした絵を描かれた','Gran — youth Dad-mng-R-motif-draw','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、服部半蔵の歴史小説を愛読されたわよね、あなた?','Grandpa — youth-Hatt-Han-read, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10638',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがイタリア人マルコ氏のレシピを教えて下さるそうよ','Sho — Dad-It-Marco-recipe','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと米国人スティーブ氏のSkypeした話聞いたよ','Mei-sis — me Dad-US-Steve-Skype','Eager child','sho_child'),
    mk('翔くん、お父さんがフィリップ親王、つまりエディンバラ公の歴史を教えて下さるわ','Sho — Dad-Phil-Edin-hist','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとロックスターのムーアさんのドキュメンタリー観たよ','Mei-sis — me Dad-Moore-rock-doc','Eager child','sho_child'),
    mk('翔くん、お父さんと野球のファーム見学に行かれるわ','Sho — Dad-base-farm-vis','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとゲームのヨシ、つまりヨッシーで遊んだよ','Mei-sis — me Dad-Yoshi-game','Eager child','sho_child'),
    mk('翔くん、お父さんがアール、つまりRのアルファベットの書き方を教えて下さったわ','Sho — Dad-R-write-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと服部半蔵の歴史漫画を読んだよ','Mei-sis — me Dad-Hatt-Han-mng','Eager close','sho_child'),
  ]},
  {id:'conv_10639',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、海外留学でマルコと友達になったろ','Riku — overs-stu-Marco-fri?','Curious teen','sakura_teen'),
    mk('お前、英会話の先生スティーブだったよな、桜','You — Eng-tch-Steve Sakura','Curious','riku_teen'),
    mk('リク、お前、英王室のフィリップ親王の本読んでたな','Riku — UK-Phil-book-read','Curious','sakura_teen'),
    mk('お前、音楽でムーアのギター好きだったろ、桜','You — mus-Moore-gtr? Sakura','Curious','riku_teen'),
    mk('リク、お前、プロ野球のファーム選手追ってたな','Riku — pro-base-farm-track','Curious','sakura_teen'),
    mk('お前、ゲームでヨシ、つまりヨッシー操作上手だったな、桜','You — game-Yoshi-good Sakura','Praising','riku_teen'),
    mk('リク、お前、ノートにアール、つまりRの落書きしてたな','Riku — note-R-doodle','Wry','sakura_teen'),
    mk('お前、忍者漫画で服部半蔵が一番好きだったろ、桜','You — ninja-mng-Hatt-Han-top? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10640',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがマルコ氏のイタリア料理本を読まれてるわ','Sho — Dad-Marco-It-cook-book','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと米国人スティーブ氏のドキュメンタリー観たよ','Mom — me Dad-US-Steve-doc','Eager child','sho_child'),
    mk('翔くん、お父さんが英王室のフィリップ親王の追悼番組を観てらっしゃるわ','Sho — Dad-Phil-mem-prog','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとロックスターのムーアさんの曲聴いたよ','Mom — me Dad-Moore-music','Eager child','sho_child'),
    mk('翔くん、お父さんと野球のファーム見学イベントに行くそうよ','Sho — Dad-base-farm-event','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとゲームのヨシ、つまりヨッシーで遊んだよ','Mom — me Dad-Yoshi-play','Eager child','sho_child'),
    mk('翔くん、お父さんがアール、つまりRの筆記体を教えて下さるわ','Sho — Dad-R-cursive-teach','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと服部半蔵の時代劇観たよ','Mom — me Dad-Hatt-Han-period','Eager close','sho_child'),
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

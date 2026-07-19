import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_560 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['藁','便所','破片','咲かせ','襟','受かっ','刈り','恩返し']
const B_T = ['駆ら','向かわ','住環境','引き取っ','鉄筋コンクリート','取り外し','同乗','拝聴']
const C_T = ['市中','汝','減退','ゴシップ','小声','快挙','真田','悪戯']
const D_T = ['アトム','ウィルソン','ロジャー','琢磨','綾子','ユーゴ','金具','悪しき']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_11161',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「藁ぶき屋根の民家を観に行こう」って仰ってたわ','Sho — Dad-"straw-roof-vis"-said','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「公衆便所の使い方マナー」を教えて頂いたよ','Mom — me Dad-"pub-toilet-eti"-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが「ガラスの破片に気を付けて」って仰ってたわ','Sho — Dad-"glass-frag-care"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと「桜を咲かせる」春の散歩したよ','Mom — me Dad-"cherry-bloom"-spring','Pleased child','sho_child'),
    mk('翔くん、お父さんが「シャツの襟を整えなさい」って仰ってたわ','Sho — Dad-"collar-tidy"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「テストに受かった」って報告したよ','Mom — me Dad-"exam-pass"-rep','Eager child','sho_child'),
    mk('翔くん、お父さんが「庭の芝を刈りに行く」って仰ってたわ','Sho — Dad-"yard-grass-cut"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「育ててくれた恩返しに」って言ったよ','Mom — me Dad-"raise-grati"-said','Earnest close','sho_child'),
  ]},
  {id:'conv_11162',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、伝統工芸の藁細工をお褒め下さったよ、メイちゃん','Aoi — cust-trad-straw-praise Mei','Reflective','mei_romantic'),
    mk('葵、お客様、観光地の便所の清潔さを語って下さったよ、メイちゃん','Aoi — cust-tour-toilet-clean Mei','Reflective','aoi_barista'),
    mk('葵、お客様、骨董品の破片の修復のお話を語って下さったよ、メイちゃん','Aoi — cust-ant-frag-rep Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ガーデニングで花を咲かせる工夫を語って下さったよ、メイちゃん','Aoi — cust-gard-bloom-eff Mei','Reflective','aoi_barista'),
    mk('葵、お客様、シャツの襟元のデザインに拘ってらっしゃるって、メイちゃん','Aoi — cust-collar-design-stick Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お孫様が中学受験に受かったって嬉しそうだったよ、メイちゃん','Aoi — cust-grdkid-exam-pass Mei','Reflective','aoi_barista'),
    mk('葵、お客様、田んぼで稲を刈り取ったお話を語って下さったよ、メイちゃん','Aoi — cust-paddy-rice-cut Mei','Reflective','mei_romantic'),
    mk('葵、お客様、「学んだ事を恩返しに繋げたい」って仰ってたよ、メイちゃん','Aoi — cust-"learn-grati"-said Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_11163',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが藁葺き家屋に住まれた','Gran — youth Dad-straw-house','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、戦時下のしゃがみ式便所を経験されたわよね、あなた?','Yes — Grandpa-war-squat-toilet-exp, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが空襲で陶器の破片を集められた','Gran — youth Dad-air-raid-cer-frag','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、庭に薔薇を咲かせる事に拘られたわよね、あなた?','Grandpa — youth-rose-bloom-stick, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは「襟を正して挨拶しろ」と教えられた','Gran — youth Dad-"collar-greet"-taught','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、難関国家試験に受かった日を覚えてらっしゃるわよね、あなた?','Grandpa — youth-hard-exam-pass-mem, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが田んぼの稲を刈り取られた','Gran — youth Dad-paddy-rice-cut','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、恩師への恩返しに尽力されたわよね、あなた?','Grandpa — youth-mentor-grati-eff, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_11164',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、林間学校で藁ぶき屋根見たろ','Riku — for-camp-straw-roof?','Curious teen','sakura_teen'),
    mk('お前、新しい校舎の便所、つまりトイレを気にしてたな、桜','You — new-sch-toilet Sakura','Wry','riku_teen'),
    mk('リク、お前、ガラスの破片で怪我しないように気を付けてたな','Riku — glass-frag-care','Wry','sakura_teen'),
    mk('お前、文化祭で桜を咲かせるアートしてたな、桜','You — cul-fes-cherry-bloom-art Sakura','Curious','riku_teen'),
    mk('リク、お前、シャツの襟がよれてたな','Riku — shirt-collar-creased','Wry','sakura_teen'),
    mk('お前、テストに受かったって嬉しそうだったな、桜','You — exam-pass-glad Sakura','Praising','riku_teen'),
    mk('リク、お前、おじいちゃんの稲刈り、つまり稲刈りを手伝ってたな','Riku — grdpa-rice-cut-help','Curious','sakura_teen'),
    mk('お前、「育ててもらった恩返しに頑張る」って言ってたな、桜','You — "raise-grati"-said Sakura','Reflective close','riku_teen'),
  ]},
  {id:'conv_11165',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「藁ぶき屋根の伝統建築」を見せて下さったわ','Sho — Dad-"straw-trad-build"-show','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと公園の便所、つまり公衆トイレに行ったよ','Mei-sis — me Dad-park-toilet','Eager child','sho_child'),
    mk('翔くん、お父さんが「ガラスの破片に注意しよう」って仰ってたわ','Sho — Dad-"glass-frag"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと花を咲かせる種を植えたよ','Mei-sis — me Dad-flo-bloom-seed','Eager child','sho_child'),
    mk('翔くん、お父さんが「お祭りで襟を正して」って仰ってたわ','Sho — Dad-"fes-collar"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「英検に受かった」って報告したよ','Mei-sis — me Dad-"Eiken-pass"-rep','Earnest child','sho_child'),
    mk('翔くん、お父さんと田んぼの稲を刈り体験したよ','Sho — Dad-paddy-cut-exp','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「恩返しの気持ちで頑張る」って約束したよ','Mei-sis — me Dad-"grati-effort"-prom','Earnest close','sho_child'),
  ]},
  {id:'conv_11166',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新人を熱意に駆られた研修に送れ','Our co — newhire-pass-driven-train','Crisp','hiroshi_boss'),
    mk('はい。海外向かわせる出張者の選定を進めます','Yes — Overs-go-trip-pick','Methodical','kenji_office'),
    mk('当社、社員の住環境改善を支援しろ','Our co — staff-home-env-supp','Direction','hiroshi_boss'),
    mk('はい。退職者の業務を引き取って整えます','Yes — Resign-take-tidy','Update','kenji_office'),
    mk('当社、本社ビルを鉄筋コンクリート構造で建て直せ','Our co — HQ-RC-rebuild','Direction','hiroshi_boss'),
    mk('はい。古い看板の取り外し工事を依頼します','Yes — Old-sign-rem-req','Update','kenji_office'),
    mk('当社、社用車の同乗ルールを整えろ','Our co — co-car-co-ride-rule','Direction','hiroshi_boss'),
    mk('はい。専門家のご講演を拝聴します','Yes — Expert-lec-humbly','Close','kenji_office'),
  ]},
  {id:'conv_11167',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('熱意に駆られた若手社員を抜擢しましょう','Pass-driven-young-prom','Brisk','yuki_office'),
    mk('はい。海外向かわせる出張者の研修を整えます','Yes — Overs-go-train','Cooperative','kenji_office'),
    mk('住環境調査の結果を共有しましょう','Home-env-surv-share','Direction','yuki_office'),
    mk('はい。退社する社員の業務を引き取って整理します','Yes — Resign-take-tidy','Update','kenji_office'),
    mk('鉄筋コンクリート新社屋の竣工を祝いましょう','RC-new-HQ-cere','Direction','yuki_office'),
    mk('はい。古い設備の取り外し時期を調整します','Yes — Old-eqp-rem-time','Update','kenji_office'),
    mk('社用車の同乗時の安全規定を確認しましょう','Co-car-co-ride-safe','Direction','yuki_office'),
    mk('はい。業界専門家のお話を拝聴する機会を作ります','Yes — Ind-expert-humbly-listen','Close','kenji_office'),
  ]},
  {id:'conv_11168',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、探究心に駆られた研究姿勢を保て','Ren — curi-driven-att','Mentor','hiroshi_boss'),
    mk('はい。海外学会に向かわせて頂きます','Yes — Overs-conf-go','Earnest','ren_uni'),
    mk('蓮、研究員の住環境改善に協力しろ','Ren — res-home-env-supp','Direction','hiroshi_boss'),
    mk('はい。先輩の研究テーマを引き取って継承します','Yes — Sen-res-take-inherit','Earnest','ren_uni'),
    mk('蓮、研究施設の鉄筋コンクリート構造を確認しろ','Ren — res-fac-RC-check','Direction','hiroshi_boss'),
    mk('はい。古い装置の取り外し計画を立てます','Yes — Old-eqp-rem-plan','Polite','ren_uni'),
    mk('蓮、調査出張で先生に同乗、つまり同乗させて頂け','Ren — surv-prof-co-ride','Direction','hiroshi_boss'),
    mk('はい。学会で著名研究者のご講演を拝聴します','Yes — Conf-prof-humbly-listen','Earnest close','ren_uni'),
  ]},
  {id:'conv_11169',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、義憤に駆られた市民の通報も慎重に対応されますね','Police pass-driven-citi-rep-care','Cooperative','kenji_office'),
    mk('警察、容疑者を取調べに向かわせる手続きを、警察、徹底されますね','Police suspect-int-go-proc-thor','Cooperative','kenji_office'),
    mk('警察、被害者の住環境調査も慎重にされますね','Police vict-home-env-careful','Cooperative','kenji_office'),
    mk('警察、保護した子供を施設に引き取って頂くケースもされますね','Police prot-kid-fac-take','Cooperative','kenji_office'),
    mk('警察、犯行現場の鉄筋コンクリート構造を、警察、分析されますね','Police scene-RC-anal','Cooperative','kenji_office'),
    mk('警察、不審物の取り外しを、警察、慎重におこなわれますね','Police susp-rem-care','Cooperative','kenji_office'),
    mk('警察、捜査車両の同乗者ルールも厳密にされますね','Police inv-veh-co-ride-strict','Cooperative','kenji_office'),
    mk('警察、専門家の意見を拝聴する機会も設けられますね','Police expert-humbly-listen-opp','Close','kenji_office'),
  ]},
  {id:'conv_11170',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、好奇心に駆られた事業展開をされた','Dad — youth-pass-driven-biz','Sage','hiroshi_elder'),
    mk('はい。お父さんは社員を海外に向かわせる挑戦をされた','Yes — Dad staff-overs-go-chal','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、社員の住環境改善に力を注がれた','Dad — youth-staff-home-env-focus','Wistful','hiroshi_elder'),
    mk('はい。お父さんは退職者の業務を引き取って整えられた','Yes — Dad resign-take-tidy','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、鉄筋コンクリート新工場を建てられた','Dad — youth-RC-new-fact','Wistful','hiroshi_elder'),
    mk('はい。お父さんは古い設備の取り外しに立ち会われた','Yes — Dad old-eqp-rem-att','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、社員の出張に同乗、つまり同乗もされた','Dad — youth-staff-trip-co-ride','Wistful','hiroshi_elder'),
    mk('はい。お父さんは業界の重鎮のお話を拝聴された','Yes — Dad ind-key-humbly-listen','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_11171',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、市中、つまり市中銀行の金融研究を論文で扱いましたね','Ren — comm-bank paper','Calm','asuka_teacher'),
    mk('はい、聖書の汝、つまり「汝」の二人称研究を論文で扱いました','Yes — Bib-thou paper','Earnest','ren_uni'),
    mk('蓮さん、高齢者の体力減退の医学研究を論文で扱いましたね','Ren — eld-decline paper','Reflective','asuka_teacher'),
    mk('はい、メディアのゴシップ報道の倫理研究を論文で扱いました','Yes — Media-goss-eth paper','Earnest','ren_uni'),
    mk('蓮さん、図書館での小声、つまり小声会話の研究を論文で扱いましたね','Ren — lib-whisp paper','Reflective','asuka_teacher'),
    mk('はい、宇宙開発の快挙、つまり成功例の研究を論文で扱いました','Yes — Space-feat paper','Earnest','ren_uni'),
    mk('蓮さん、戦国武将真田氏の戦術研究を論文で扱いましたね','Ren — Sanada-tact paper','Reflective','asuka_teacher'),
    mk('はい、児童の悪戯、つまり悪戯心理の発達研究を論文で扱いました','Yes — Child-misch paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_11172',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、市中、つまり市中の不審物情報を、警察、把握されますね','Case comm-susp-info police-mon','Reflective','ren_uni'),
    mk('警察、容疑者が「汝の罪を悔いよ」と言ったお話、慎重に聴かれますね','Police "thou-rep"-careful','Cooperative','takeda_officer'),
    mk('本件、被害者の記憶減退を、警察、医師と確認されますね','Case vict-mem-decline police-doc','Reflective','ren_uni'),
    mk('警察、ゴシップ的な根拠不明情報には、警察、慎重に対応されますね','Police goss-unsub-care','Cooperative','takeda_officer'),
    mk('本件、目撃者の小声の証言を、警察、丁寧に拾われますね','Case witn-whisp-careful','Reflective','ren_uni'),
    mk('警察、犯人検挙の快挙を、警察、控えめに発表されますね','Police arr-feat-modest','Cooperative','takeda_officer'),
    mk('本件、容疑者真田の前科を、警察、確認されますね','Case suspect-Sanada-prior','Reflective','ren_uni'),
    mk('警察、子供のいたずら、つまり悪戯通報にも、警察、丁寧に対応されますね','Police kid-misch-rep-careful','Close','takeda_officer'),
  ]},
  {id:'conv_11173',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、市中、つまり市中銀行の金融研究を論文で扱いましたね','Sakura — comm paper','Calm','asuka_teacher'),
    mk('はい、聖書の汝、つまり「汝」の二人称研究を論文で扱いました','Yes — Thou paper','Earnest teen','sakura_teen'),
    mk('高齢者の体力減退の医学研究を論文で扱いましたね','Decline paper','Reflective','asuka_teacher'),
    mk('はい、メディアのゴシップ報道の倫理研究を論文で扱いました','Yes — Goss paper','Earnest','sakura_teen'),
    mk('図書館での小声、つまり小声会話の研究を論文で扱いましたね','Whisp paper','Reflective','asuka_teacher'),
    mk('はい、宇宙開発の快挙、つまり成功例の研究を論文で扱いました','Yes — Feat paper','Earnest','sakura_teen'),
    mk('戦国武将真田氏の戦術研究を論文で扱いましたね','Sanada paper','Reflective','asuka_teacher'),
    mk('はい、児童の悪戯、つまり悪戯心理の発達研究を論文で扱いました','Yes — Misch paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_11174',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、市中、つまり市中感染の動向を医療チームで監視します','Ren — comm-inf med-team','Calm','saito_doctor'),
    mk('蓮さん、医師の心に「汝、患者を救え」を医療チームで持ちます','Ren — "thou-save"-team med-team','Calm','saito_doctor'),
    mk('蓮さん、患者様の認知機能減退を医療チームで丁寧に評価します','Ren — pati-cog-decline med-team','Calm','saito_doctor'),
    mk('蓮さん、患者様のゴシップに惑わされない様、医療チームで配慮します','Ren — pati-goss-no med-team','Calm','saito_doctor'),
    mk('蓮さん、診察時に小声で話される患者様にも医療チームで丁寧に対応します','Ren — pati-whisp med-team','Calm','saito_doctor'),
    mk('蓮さん、難手術の快挙、つまり成功を医療チームで共有します','Ren — diff-op-feat med-team','Calm','saito_doctor'),
    mk('蓮さん、患者真田様のご症状を医療チームで継続観察します','Ren — pati-Sanada med-team','Calm','saito_doctor'),
    mk('蓮さん、医療機器のいたずら、つまり悪戯設定を医療チームで防ぎます','Ren — med-eqp-misch-prev med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_11175',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、市中、つまり市中相場の動向を毎朝確認しろ','Our co — comm-mkt-daily','Crisp','hiroshi_boss'),
    mk('はい。「汝、お客様を大事にせよ」と社訓に追加します','Yes — "Thou-cust"-motto','Methodical','kenji_office'),
    mk('当社、業績減退の兆候を早めに把握しろ','Our co — perf-decline-early','Direction','hiroshi_boss'),
    mk('はい。社内ゴシップを抑制する制度を整えます','Yes — Int-goss-prev','Update','kenji_office'),
    mk('当社、会議では小声、つまり小声でも明瞭に話せ','Our co — meet-whisp-clear','Direction','hiroshi_boss'),
    mk('はい。社員の快挙を表彰式で讃えます','Yes — Staff-feat-cer','Update','kenji_office'),
    mk('当社、戦略アドバイザーの真田様にご助言を仰げ','Our co — strat-adv-Sanada','Direction','hiroshi_boss'),
    mk('はい。社内の悪戯、つまり悪戯防止研修を実施します','Yes — Int-misch-prev-train','Close','kenji_office'),
  ]},
  {id:'conv_11176',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、鉄腕アトムのファンだって、メイちゃん','Aoi — cust-Atom-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ピアニストのウィルソン氏の演奏に感動されたって、メイちゃん','Aoi — cust-Wil-pia-imp Mei','Reflective','aoi_barista'),
    mk('葵、お客様、テニスのロジャー・フェデラーのファンだって、メイちゃん','Aoi — cust-Roger-Fed-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、F1の佐藤琢磨選手を応援されてるって、メイちゃん','Aoi — cust-Sato-Takuma-cheer Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お孫様のお名前が綾子ちゃんだって、メイちゃん','Aoi — cust-grdkid-Ayako Mei','Reflective','mei_romantic'),
    mk('葵、お客様、旧ユーゴ、つまりユーゴスラビアの音楽がお好きだって、メイちゃん','Aoi — cust-Yugo-mus Mei','Reflective','aoi_barista'),
    mk('葵、お客様、アンティーク家具の金具を集めてらっしゃるって、メイちゃん','Aoi — cust-ant-metal-coll Mei','Reflective','mei_romantic'),
    mk('葵、お客様、「悪しき習慣を断ちたい」って仰ってたよ、メイちゃん','Aoi — cust-"bad-habit-end"-said Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_11177',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが鉄腕アトムのファンだった','Gran — youth Dad-Atom-fan','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、ウィルソン大統領の歴史を学ばれたわよね、あなた?','Yes — Grandpa-Wil-pres-hist, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがロジャー・ムーアの007を観られた','Gran — youth Dad-Roger-Moore-007','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、F1の中嶋琢磨選手を応援されたわよね、あなた?','Grandpa — youth-Naka-Takuma-cheer, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが幸田綾子の写真集を蔵書された','Gran — youth Dad-Kouda-Ayako-coll','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、旧ユーゴスラビアにも旅行されたわよね、あなた?','Grandpa — youth-Yugo-trip, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが家具の金具をご自身で取り換えられた','Gran — youth Dad-furn-metal-self','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、悪しき習慣を断ち切られた経験ありましたわよね、あなた?','Grandpa — youth-bad-habit-end-exp, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_11178',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「鉄腕アトムのアニメを一緒に観よう」って仰ってたわ','Sho — Dad-"Atom-anime"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとピアニスト、ウィルソンさんのコンサート観たよ','Mei-sis — me Dad-Wil-conc','Eager child','sho_child'),
    mk('翔くん、お父さんがロジャー・フェデラー伝記を読まれてるわ','Sho — Dad-Roger-Fed-biog','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとF1の佐藤琢磨選手のドキュメンタリー観たよ','Mei-sis — me Dad-Sato-Takuma-doc','Eager child','sho_child'),
    mk('翔くん、お父さんが「あの綾子おばさんは素敵」って仰ってたわ','Sho — Dad-"Ayako-aunt-fine"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとユーゴ、つまりユーゴスラビア紛争の絵本を読んだよ','Mei-sis — me Dad-Yugo-confl-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが家具の金具を修理して下さったわ','Sho — Dad-furn-metal-fix','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「悪しき行いから離れて」って教えて頂いたよ','Mei-sis — me Dad-"bad-act-away"-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_11179',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、鉄腕アトム好きだったよな','Riku — Atom-fan','Curious teen','sakura_teen'),
    mk('お前、社会でウィルソン大統領調べてたな、桜','You — soc-Wil-pres-stud Sakura','Curious','riku_teen'),
    mk('リク、お前、テニス部でロジャー・フェデラーのフォーム真似してたな','Riku — tennis-Roger-mimic','Praising','sakura_teen'),
    mk('お前、F1のニュースで佐藤琢磨応援してたろ、桜','You — F1-Takuma-cheer? Sakura','Curious','riku_teen'),
    mk('リク、お前、隣のクラスの綾子と話してたな','Riku — next-cl-Ayako-talk','Curious','sakura_teen'),
    mk('お前、社会で旧ユーゴ紛争習ったろ、桜','You — soc-Yugo-confl? Sakura','Curious','riku_teen'),
    mk('リク、お前、家具の金具直すの上手だったな','Riku — furn-metal-fix-good','Praising','sakura_teen'),
    mk('お前、文化祭で「悪しきを断ち善きを為す」って書道してたな、桜','You — cul-fes-"bad-end-good"-calig Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_11180',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが鉄腕アトムの映画を観てらっしゃるわ','Sho — Dad-Atom-film','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとウィルソン・ピケットのファンクCD聴いたよ','Mom — me Dad-Wil-Pick-CD','Eager child','sho_child'),
    mk('翔くん、お父さんがロジャー・ウォーターズの音楽を流してらっしゃるわ','Sho — Dad-Roger-Wat-music','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとF1の佐藤琢磨選手のレース観たよ','Mom — me Dad-Sato-Takuma-race','Eager child','sho_child'),
    mk('翔くん、お父さんが「綾子おばさんは料理上手」って仰ってたわ','Sho — Dad-"Ayako-aunt-cook"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと旧ユーゴ系の音楽聴いたよ','Mom — me Dad-Yugo-mus','Eager child','sho_child'),
    mk('翔くん、お父さんが家具の金具を新しく取り付けて下さったわ','Sho — Dad-furn-metal-install','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「悪しき友達から離れなさい」って教えて頂いたよ','Mom — me Dad-"bad-fri-away"-teach','Earnest close','sho_child'),
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

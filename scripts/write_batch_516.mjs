import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_516 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['ナンバーワン','しかるに','彷徨','踏み入れ','かなう','変人','親分','両足']
const B_T = ['州立','施主','廻っ','下層','席上','呼応','デマンド','無休']
const C_T = ['エコロジー','ダーウィン','コンドーム','左脳','王宮','地球人','父兄','中尉']
const D_T = ['快速','鶴岡','マシーン','ドミノ','フロンティア','アジアン','ロッキー','マーラー']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10281',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんはぼくのナンバーワンだよ','Sho — Dad-me-number-one','Tender','yumiko_mom'),
    mk('ママ、お父さんが「しかるに」と古風な表現を使われたよ','Mom — Dad-"shikaru-ni"-classical','Reflective child','sho_child'),
    mk('翔くん、お父さんが森を彷徨ったお話して下さるそうよ','Sho — Dad-forest-wander-told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんの書斎に踏み入れる時はノックするよ','Mom — me Dad-study-step-knock','Earnest child','sho_child'),
    mk('翔くん、お父さんの願いがかなうように祈ってるわ','Sho — Dad-wish-grant-pray','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんはちょっと変人だけど大好きだよ','Mom — me Dad-eccentric-love','Tender child','sho_child'),
    mk('翔くん、お父さんはご家族の親分のような存在ね','Sho — Dad-fam-boss','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに両足の長靴を履いてもらったよ','Mom — me Dad-both-boots-wear','Eager close','sho_child'),
  ]},
  {id:'conv_10282',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、地区のカフェナンバーワンを目指そうね、メイちゃん','Aoi — area-cf-num1-aim Mei','Direction','mei_romantic'),
    mk('葵、お客様のレビューはしかるに大切だね、メイちゃん','Aoi — cust-rev-shikaru-imp Mei','Reflective','aoi_barista'),
    mk('葵、お客様、街を彷徨ってお店を見つけて下さったって、メイちゃん','Aoi — cust-town-wander-found Mei','Pleased','mei_romantic'),
    mk('葵、新規開拓に踏み入れる時期ね、メイちゃん','Aoi — new-step-time Mei','Direction','aoi_barista'),
    mk('葵、お客様の願いがかなうメニューを増やそうね、メイちゃん','Aoi — cust-wish-grant-up Mei','Direction','mei_romantic'),
    mk('葵、変人扱いされても独自路線で行こうね、メイちゃん','Aoi — eccentric-uniq-go Mei','Direction','aoi_barista'),
    mk('葵、お客様、ご友人を親分のように慕われてたよ、メイちゃん','Aoi — cust-fri-boss-admire Mei','Reflective','mei_romantic'),
    mk('葵、両足の靴を新しくしてサービスに臨もうね、メイちゃん','Aoi — both-shoe-new-serv Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_10283',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが村のナンバーワンの大工だった','Gran — youth Dad-vil-num1-carp','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、しかるにと古語をよく仰ったわよね、あなた?','Yes — Grandpa-shikaru-class-said, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが戦地を彷徨った話をされた','Gran — youth Dad-war-wander-told','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、寺に踏み入れる時は脱帽されたわよね、あなた?','Grandpa — temple-step-hat-off, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「夢がかなう日」と仰った','Gran — youth Dad-"dream-grant"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、村で変人と呼ばれた事もあったわよね、あなた?','Grandpa — vil-eccentric-called, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが家族の親分でいらした','Gran — youth Dad-fam-boss','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、両足で大地を踏み締めて生きてこられたわよね、あなた?','Grandpa — both-earth-step-life, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10284',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、部活のナンバーワン目指してたな','Riku — club-num1-aim','Praising teen','sakura_teen'),
    mk('お前、しかるにって古い言い回し使うな、桜','You — shikaru-class-use Sakura','Wry','riku_teen'),
    mk('リク、お前、放課後街を彷徨ってたな','Riku — after-sch-town-wander','Wry','sakura_teen'),
    mk('お前、教室に踏み入れる時挨拶しろ、桜','You — class-step-greet Sakura','Direction','riku_teen'),
    mk('リク、お前の夢がかなうといいな','Riku — dream-grant-good','Encouraging','sakura_teen'),
    mk('お前、ちょっと変人だけど面白いな、桜','You — eccentric-fun Sakura','Wry','riku_teen'),
    mk('リク、お前、不良グループの親分やってたな','Riku — gang-boss','Wry','sakura_teen'),
    mk('お前、両足ともサッカーで動けるな、桜','You — both-feet-soccer Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_10285',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんは家族のナンバーワンよ','Sho — Dad-fam-num1','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、しかるにって難しい言葉まだ分からないよ','Mei-sis — me shikaru-hard-not-yet','Curious child','sho_child'),
    mk('翔くん、お父さんが森の中を彷徨ったお話して下さるそうよ','Sho — Dad-forest-wander-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、芝生に踏み入れる前に確認するよ','Mei-sis — me grass-step-check','Earnest child','sho_child'),
    mk('翔くん、お父さんの夢がかなう日が来ますように','Sho — Dad-dream-grant-day-come','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんを変人扱いしないよ','Mei-sis — me Dad-eccentric-no','Earnest child','sho_child'),
    mk('翔くん、お父さんが家族の親分ね','Sho — Dad-fam-boss','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、両足の靴を綺麗にしたよ','Mei-sis — me both-shoe-clean','Eager close','sho_child'),
  ]},
  {id:'conv_10286',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、州立大学の研究室と提携しろ','Our co — state-uni-lab-partner','Crisp','hiroshi_boss'),
    mk('はい。施主との打ち合わせを設定します','Yes — Cli-mtg-set','Methodical','kenji_office'),
    mk('当社、工場を廻って点検しろ','Our co — fact-go-around-insp','Direction','hiroshi_boss'),
    mk('はい。社員の下層意識を改善します','Yes — Staff-low-sense-impr','Update','kenji_office'),
    mk('役員会の席上で新方針を発表しろ','Exec-mtg-seat-new-pol-pub','Direction','hiroshi_boss'),
    mk('はい。需要に呼応した供給体制を整えます','Yes — Demand-resp-supply-prep','Update','kenji_office'),
    mk('当社、デマンド予測の精度を上げろ','Our co — demand-est-prec-up','Direction','hiroshi_boss'),
    mk('はい。年中無休のサービスを検討します','Yes — Yr-no-day-off-cons','Close','kenji_office'),
  ]},
  {id:'conv_10287',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('州立大学の就職フェアに参加しましょう','State-uni-job-fair-join','Brisk','yuki_office'),
    mk('はい。建築の施主向け資料を準備します','Yes — Constr-cli-doc-prep','Cooperative','kenji_office'),
    mk('支店を廻って様子を確認しましょう','Branch-around-check','Direction','yuki_office'),
    mk('はい。組織の下層からの提案も募集します','Yes — Org-low-prop-recru','Update','kenji_office'),
    mk('総会の席上で謝辞を述べましょう','Gen-mtg-seat-thanks','Direction','yuki_office'),
    mk('はい。市場ニーズに呼応する商品を出します','Yes — Mkt-need-resp-prod','Update','kenji_office'),
    mk('デマンド分析チームを編成しましょう','Demand-anal-team-form','Direction','yuki_office'),
    mk('はい。コールセンターを無休運営します','Yes — Call-cent-no-day-off','Close','kenji_office'),
  ]},
  {id:'conv_10288',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、州立研究機関への留学も視野','Ren — state-research-study-view','Mentor','hiroshi_boss'),
    mk('はい。建築研究の施主の声を聴きます','Yes — Constr-cli-voice-listen','Earnest','ren_uni'),
    mk('蓮、研究室を廻って見識を深めろ','Ren — lab-around-insight','Direction','hiroshi_boss'),
    mk('はい。下層研究員の声も汲み取ります','Yes — Low-research-voice-take','Earnest','ren_uni'),
    mk('蓮、学会の席上での発表は緊張するか','Ren — conf-seat-pres-tense?','Mentor','hiroshi_boss'),
    mk('はい。先行研究に呼応する論文を書きます','Yes — Prior-resp-paper','Polite','ren_uni'),
    mk('蓮、市場のデマンドも研究テーマに','Ren — mkt-demand-theme','Direction','hiroshi_boss'),
    mk('はい。実験室を無休で稼働させます','Yes — Lab-no-day-off','Earnest close','ren_uni'),
  ]},
  {id:'conv_10289',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、州立大学での防犯講演もされますね','Police state-uni-prev-lect','Cooperative','kenji_office'),
    mk('警察、建築現場の施主との連絡もされますね','Police constr-cli-comm','Cooperative','kenji_office'),
    mk('警察、管轄区域を廻って巡回されますね','Police area-around-patrol','Cooperative','kenji_office'),
    mk('警察、社会下層の防犯支援もされますね','Police soc-low-prev-supp','Cooperative','kenji_office'),
    mk('警察、捜査会議の席上で報告されますね','Police inv-mtg-seat-rep','Cooperative','kenji_office'),
    mk('警察、市民通報に呼応した出動もされますね','Police citi-rep-resp-disp','Cooperative','kenji_office'),
    mk('警察、防犯デマンドを分析されますね','Police prev-demand-anal','Cooperative','kenji_office'),
    mk('警察、警察署は実質無休で対応されますね','Police stat-no-day-off-resp','Close','kenji_office'),
  ]},
  {id:'conv_10290',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、州立大学との連携を進められた','Dad — founding state-uni-link','Sage','hiroshi_elder'),
    mk('はい。お父さんは建築の施主との信頼を大事にされた','Yes — Dad constr-cli-trust','Commitment','hiroshi_boss'),
    mk('お父さん、自ら工場を廻って見られた','Dad — fact-around-see','Wistful','hiroshi_elder'),
    mk('はい。お父さんは下層工員の声を聞かれた','Yes — Dad low-worker-listen','Reflective','hiroshi_boss'),
    mk('お父さん、株主総会の席上で堂々と語られた','Dad — share-mtg-seat-bold','Wistful','hiroshi_elder'),
    mk('はい。お父さんは時代に呼応した経営をされた','Yes — Dad era-resp-mgmt','Reflective','hiroshi_boss'),
    mk('お父さん、デマンド予測を独自に立てられた','Dad — demand-est-uniq','Wistful','hiroshi_elder'),
    mk('はい。お父さんは創業期、無休で働かれた','Yes — Dad found-no-day-off','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10291',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、エコロジー運動の戦後史を論文で扱いましたね','Ren — eco-postwar paper','Calm','asuka_teacher'),
    mk('はい、ダーウィン進化論の現代解釈を論文で扱いました','Yes — Darwin-mod paper','Earnest','ren_uni'),
    mk('蓮さん、コンドーム普及率の保健研究を論文で扱いましたね','Ren — condom-spread paper','Reflective','asuka_teacher'),
    mk('はい、左脳機能の言語処理を論文で扱いました','Yes — Left-brain-lang paper','Earnest','ren_uni'),
    mk('英国王宮の伝統儀礼を論文で扱いましたね','UK-palace-trad paper','Engaged','asuka_teacher'),
    mk('はい、地球人と宇宙人の交流SF研究を論文で扱いました','Yes — Earth-alien-SF paper','Earnest','ren_uni'),
    mk('蓮さん、父兄会の教育参加を論文で扱いましたね','Ren — par-mtg-edu paper','Reflective','asuka_teacher'),
    mk('はい、戦前の海軍中尉の階級制度を論文で扱いました','Yes — Prewar-navy-lt paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10292',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、エコロジー団体への嫌がらせを、警察、扱われますね','Case eco-grp-harass police-handle','Reflective','ren_uni'),
    mk('警察、ダーウィン批判で過激化した団体を追われますね','Police Darwin-rad-grp-track','Cooperative','takeda_officer'),
    mk('本件、コンドーム不正流通を、警察、扱われますね','Case condom-illeg police-handle','Reflective','ren_uni'),
    mk('警察、左脳の発達障害者の支援にも対応されますね','Police left-brain-disab-supp','Cooperative','takeda_officer'),
    mk('本件、王宮警備の対応を、警察、されますね','Case palace-guard police-resp','Reflective','ren_uni'),
    mk('警察、地球人類への脅威といったカルト犯罪も扱われますね','Police earth-cult-crime-handle','Cooperative','takeda_officer'),
    mk('本件、父兄を装った詐欺事案を、警察、扱われますね','Case par-pretend-fraud police-handle','Reflective','ren_uni'),
    mk('警察、元中尉の方を防犯講師に招かれますね','Police ex-lt-prev-lect-invite','Close','takeda_officer'),
  ]},
  {id:'conv_10293',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、エコロジー運動の戦後史を論文で扱いましたね','Sakura — eco-postwar paper','Calm','asuka_teacher'),
    mk('はい、ダーウィン進化論の現代解釈を論文で扱いました','Yes — Darwin-mod paper','Earnest teen','sakura_teen'),
    mk('コンドーム普及率の保健研究を論文で扱いましたね','Condom-spread paper','Reflective','asuka_teacher'),
    mk('はい、左脳機能の言語処理を論文で扱いました','Yes — Left-brain paper','Earnest','sakura_teen'),
    mk('英国王宮の伝統儀礼を論文で扱いましたね','UK-palace paper','Engaged','asuka_teacher'),
    mk('はい、地球人と宇宙人の交流SF研究を論文で扱いました','Yes — Earth-alien paper','Earnest','sakura_teen'),
    mk('父兄会の教育参加を論文で扱いましたね','Par-mtg-edu paper','Reflective','asuka_teacher'),
    mk('はい、戦前の海軍中尉の階級制度を論文で扱いました','Yes — Prewar-navy-lt paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10294',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、エコロジーに配慮した医療廃棄物処理を医療チームでおこないます','Ren — eco-med-waste med-team','Calm','saito_doctor'),
    mk('はい、ダーウィン理論の医学的応用を医療チームで議論します','Yes — Darwin-med-disc med-team','Patient','saito_doctor'),
    mk('蓮さん、コンドーム配布によるSTD予防を医療チームで進めます','Ren — condom-STD-prev med-team','Calm','saito_doctor'),
    mk('左脳血流量を、貴院、画像で評価されますね、先生','Left-brain-blood your-hosp image, sensei','Reflective','ren_uni'),
    mk('はい、王宮医の伝統を医療チームで学びます','Yes — Royal-doctor-trad med-team','Patient','saito_doctor'),
    mk('はい、地球人の長寿の秘訣を医療チームで研究します','Yes — Earth-long-secret med-team','Patient','saito_doctor'),
    mk('はい、父兄向け医療相談会を医療チームで企画します','Yes — Par-med-cons med-team','Patient','saito_doctor'),
    mk('元中尉の方を、貴院、健診で受けられますね、先生','Ex-lt-check your-hosp, sensei','Curious close','ren_uni'),
  ]},
  {id:'conv_10295',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、エコロジー視点の商品開発を進めろ','Our co — eco-prod-dev','Crisp','hiroshi_boss'),
    mk('はい。ダーウィン的競争原理を取り入れます','Yes — Darwin-cmp-intro','Methodical','kenji_office'),
    mk('当社、コンドームメーカーとの共同企画も視野に入れろ','Our co — condom-mfr-joint-view','Direction','hiroshi_boss'),
    mk('はい。社員の左脳トレーニングを支援します','Yes — Staff-left-train-supp','Update','kenji_office'),
    mk('当社、王宮御用達ブランドを目指せ','Our co — palace-brand-aim','Direction','hiroshi_boss'),
    mk('はい。地球人向けという広告は避けます','Yes — Earth-ad-avoid','Update','kenji_office'),
    mk('当社、父兄会との連携を強化しろ','Our co — par-mtg-link-strength','Direction','hiroshi_boss'),
    mk('はい。元中尉経験者の社員も尊重します','Yes — Ex-lt-staff-resp','Close','kenji_office'),
  ]},
  {id:'conv_10296',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、快速電車で通勤されるって、メイちゃん','Aoi — cust-rapid-comm Mei','Reflective','mei_romantic'),
    mk('葵、お客様、鶴岡八幡宮に参拝されたって、メイちゃん','Aoi — cust-Tsurugaoka-shrine Mei','Reflective','aoi_barista'),
    mk('葵、お客様、コーヒーマシーンの最新型を購入されたって、メイちゃん','Aoi — cust-cf-machine-new Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ドミノ・ピザがお気に入りだって、メイちゃん','Aoi — cust-Domino-fav Mei','Reflective','aoi_barista'),
    mk('葵、お客様、アメリカのフロンティア精神を語ってらしたよ、メイちゃん','Aoi — cust-Frontier-told Mei','Reflective','mei_romantic'),
    mk('葵、お客様、アジアン料理が大好きだって、メイちゃん','Aoi — cust-Asian-cook Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ロッキー山脈に登山されたって、メイちゃん','Aoi — cust-Rocky-climb Mei','Reflective','mei_romantic'),
    mk('葵、お客様、マーラーの交響曲を聴いてらしたよ、メイちゃん','Aoi — cust-Mahler-sym Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10297',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが快速電車で会社へ通われた','Gran — youth Dad-rapid-comm','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、鶴岡八幡宮に初詣されたわよね、あなた?','Yes — Grandpa-Tsurugaoka-newyear, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがミシンマシーンの修理が上手だった','Gran — youth Dad-sew-machine-rep','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ドミノ倒し遊びを孫としたわよね、あなた?','Grandpa — Domino-fall-grandkid, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがフロンティア精神を語られた','Gran — youth Dad-Frontier-told','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、アジアン料理を初体験された日もあったわよね、あなた?','Grandpa — Asian-cook-first, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがロッキー山脈の写真集を集められた','Gran — youth Dad-Rocky-photo-coll','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、マーラー交響曲がお好きだったわよね、あなた?','Grandpa — Mahler-sym-like, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10298',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが快速電車に乗せて下さるそうよ','Sho — Dad-rapid-ride','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと鶴岡八幡宮行ったよ','Mei-sis — me Dad-Tsurugaoka','Eager child','sho_child'),
    mk('翔くん、お父さんがコーヒーマシーンを新しく買って下さったわ','Sho — Dad-cf-machine-new','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとドミノ倒し遊んだよ','Mei-sis — me Dad-Domino-fall','Eager child','sho_child'),
    mk('翔くん、お父さんがフロンティア精神について教えて下さったわ','Sho — Dad-Frontier-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとアジアン料理屋さん行ったよ','Mei-sis — me Dad-Asian-rest','Eager child','sho_child'),
    mk('翔くん、お父さんがロッキー山脈の絵本を読んで下さるそうよ','Sho — Dad-Rocky-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとマーラーの曲聴いたよ','Mei-sis — me Dad-Mahler-listen','Eager close','sho_child'),
  ]},
  {id:'conv_10299',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、快速電車で通学してたな','Riku — rapid-comm','Curious teen','sakura_teen'),
    mk('お前、修学旅行で鶴岡八幡宮行ったろ?桜','You — sch-trip-Tsurugaoka? Sakura','Curious','riku_teen'),
    mk('リク、お前ん家のコーヒーマシーン、新しかったな','Riku — your-home-cf-machine-new','Curious','sakura_teen'),
    mk('お前、ドミノ・ピザばっか頼んでたな、桜','You — Domino-pizza-only Sakura','Wry','riku_teen'),
    mk('リク、お前、社会でフロンティア精神習ったな','Riku — soc-Frontier','Curious','sakura_teen'),
    mk('お前、アジアン料理ばっか食ってたな、桜','You — Asian-cook-only Sakura','Wry','riku_teen'),
    mk('リク、お前、ロッキー山脈に憧れてたな','Riku — Rocky-admire','Curious','sakura_teen'),
    mk('お前、音楽でマーラー習ったろ?桜','You — music-Mahler? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10300',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが快速電車でお出張なさるわ','Sho — Dad-rapid-trip','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと鶴岡八幡宮に初詣したよ','Mom — me Dad-Tsurugaoka-newyear','Eager child','sho_child'),
    mk('翔くん、お父さんが洗濯マシーンを修理して下さったわ','Sho — Dad-laundry-machine-fix','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとドミノ倒し遊んだよ','Mom — me Dad-Domino','Eager child','sho_child'),
    mk('翔くん、お父さんがフロンティア精神の本を貸して下さったわ','Sho — Dad-Frontier-book-lend','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとアジアン料理屋さん行きたいよ','Mom — me Dad-Asian-rest-want','Eager child','sho_child'),
    mk('翔くん、お父さんがロッキー山脈出張のお話して下さったわ','Sho — Dad-Rocky-trip-told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとマーラーのコンサート観たいよ','Mom — me Dad-Mahler-want','Eager close','sho_child'),
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

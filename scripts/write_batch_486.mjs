import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_486 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['エスカレート','傷つき','溺れ','出来上がる','先立っ','かぶせ','さかのぼっ','しゃべら']
const B_T = ['栄誉','誤字','身辺','原資','無形','物欲','申し込む','差し出す']
const C_T = ['色素','躍動','網膜','植林','海中','調剤','産卵','堆積']
const D_T = ['アドベンチャー','ヒルトン','ハーレム','エイリアン','ゴルファー','トークショー','東映','バイエルン']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09681',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、口喧嘩がエスカレートしないように気を付けようね','Sho — argue-escal-not-care','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんに傷つき言葉は言わないって決めたよ','Mom — me Dad-hurt-words-no','Earnest child','sho_child'),
    mk('翔くん、お父さんとお風呂で溺れないようにね','Sho — Dad-bath-drown-no','Direction','yumiko_mom'),
    mk('ママ、お父さんが工作を出来上がるまで根気よく作って下さったよ','Mom — Dad-craft-finish-pers','Eager child','sho_child'),
    mk('翔くん、本日の予定に先立って準備しましょうね','Sho — today-plan-pre-prep','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんがお絵描きにかぶせて色を付けて下さったよ','Mom — me Dad-art-overlay-color','Eager child','sho_child'),
    mk('翔くん、家系をさかのぼってお話をしましょうね','Sho — fam-tree-back-talk','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに早口でしゃべらないよう注意されたよ','Mom — me Dad-fast-talk-warn','Eager close','sho_child'),
  ]},
  {id:'conv_09682',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、クレームがエスカレートしないように丁寧に対応しようね、メイちゃん','Aoi — comp-escal-not-pol Mei','Direction','mei_romantic'),
    mk('葵、お客様、お言葉に傷つき気味でいらしたよ、メイちゃん','Aoi — cust-words-hurt Mei','Reflective','aoi_barista'),
    mk('葵、お客様、忙しさで溺れそうって仰ってたよ、メイちゃん','Aoi — cust-busy-drown Mei','Reflective','mei_romantic'),
    mk('葵、新メニューが出来上がるのが楽しみね、メイちゃん','Aoi — new-menu-finish-fun Mei','Pleased','aoi_barista'),
    mk('葵、オープン時間に先立って準備を整えようね、メイちゃん','Aoi — open-pre-prep Mei','Direction','mei_romantic'),
    mk('葵、看板に新しい紙をかぶせて告知しようね、メイちゃん','Aoi — sign-paper-overlay-notice Mei','Direction','aoi_barista'),
    mk('葵、創業の頃にさかのぼってお話するのは大事ね、メイちゃん','Aoi — found-time-back-talk-imp Mei','Reflective','mei_romantic'),
    mk('葵、お客様、声を抑えてしゃべらず大きな声で笑われてたね、メイちゃん','Aoi — cust-voice-soft-laugh-loud Mei','Wry close','aoi_barista'),
  ]},
  {id:'conv_09683',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、ご近所の喧嘩がエスカレートする事もあった','Gran — youth nbhd-fight-escal','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、人の心が傷つき易さを察してらしたわよね、あなた?','Yes — Grandpa-people-heart-hurt-easy-sense, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが川で溺れる子を助けられた','Gran — youth Dad-river-drown-kid-save','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様の工作が出来上がるまで見守られたわよね、あなた?','Grandpa — grandkid-craft-finish-watch, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが正月に先立って門松を出された','Gran — youth Dad-newyear-pre-kado','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、孫に布団をかぶせて寝かせて下さったわよね、あなた?','Grandpa — grandkid-blanket-overlay-sleep, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは家系をさかのぼって調べてらした','Gran — youth Dad-fam-tree-back-research','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご家族に静かにしゃべらず怒鳴る事もあったわよね、あなた?','Grandpa — fam-soft-no-shout, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09684',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、口論がエスカレートしすぎだぞ','Riku — argue-escal-too','Direction','sakura_teen'),
    mk('お前、後輩を傷つき言葉で言うなよ、桜','You — junior-hurt-words-no Sakura','Direction','riku_teen'),
    mk('リク、お前、プールで溺れそうになったな','Riku — pool-drown-near','Wry','sakura_teen'),
    mk('お前、工作が出来上がるまで頑張ったな、桜','You — craft-finish-effort Sakura','Praising','riku_teen'),
    mk('リク、テストに先立って予習しろよ','Riku — test-pre-prep','Direction','sakura_teen'),
    mk('お前、宿題に答えをかぶせて隠してたな、桜','You — homework-ans-overlay-hide Sakura','Wry','riku_teen'),
    mk('リク、お前、歴史をさかのぼって調べる宿題やったろ','Riku — hist-back-homework','Curious','sakura_teen'),
    mk('お前、授業中にしゃべらないでくれよ、桜','You — class-talk-not Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_09685',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、ふざけ合いがエスカレートしないようにね','Sho — play-escal-not','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、誰も傷つき言葉で傷つけないって誓うよ','Mei-sis — me hurt-words-no-vow','Earnest child','sho_child'),
    mk('翔くん、プールで溺れない練習をしっかりしましょうね','Sho — pool-drown-not-prac','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんが工作が出来上がるまで一緒にいて下さったよ','Mei-sis — me Dad-craft-finish-stay','Eager child','sho_child'),
    mk('翔くん、お祭りに先立ってお父さんと準備しましょうね','Sho — fest-pre-Dad-prep','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、絵に色をかぶせて重ね塗りしたよ','Mei-sis — me art-color-overlay-paint','Eager child','sho_child'),
    mk('翔くん、家系をさかのぼってお祖父様のお話聞きましょうね','Sho — fam-tree-back-Grandpa-listen','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに早口でしゃべらないように気を付けたよ','Mei-sis — me Dad-fast-talk-not-care','Eager close','sho_child'),
  ]},
  {id:'conv_09686',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、社員に栄誉を与える表彰制度を整えろ','Our co — staff-honor-award-prep','Crisp','hiroshi_boss'),
    mk('はい。誤字脱字の校正を徹底します','Yes — Typo-proofread-strict','Methodical','kenji_office'),
    mk('当社、役員の身辺セキュリティを強化しろ','Our co — exec-personal-sec','Direction','hiroshi_boss'),
    mk('はい。投資の原資を再点検します','Yes — Invest-cap-recheck','Update','kenji_office'),
    mk('無形資産の評価方法を見直せ','Intang-asset-eval-rev','Direction','hiroshi_boss'),
    mk('はい。社員の物欲に頼らない動機付けを検討します','Yes — Staff-mater-no-motiv','Update','kenji_office'),
    mk('当社、新業務を申し込む顧客への対応を磨け','Our co — new-biz-app-cust-pol','Direction','hiroshi_boss'),
    mk('はい。お客様に手を差し出す姿勢を徹底します','Yes — Cust-hand-out-attitude','Close','kenji_office'),
  ]},
  {id:'conv_09687',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('優秀社員には栄誉を讃えるべきね','Excel-staff-honor-praise','Brisk','yuki_office'),
    mk('はい。資料の誤字を再点検します','Yes — Doc-typo-recheck','Cooperative','kenji_office'),
    mk('役員の身辺警備を強化しましょう','Exec-personal-guard-strength','Direction','yuki_office'),
    mk('はい。新規プロジェクトの原資を確認します','Yes — New-proj-cap-confirm','Update','kenji_office'),
    mk('当社、無形ブランドの強化に取り組みましょう','Our co-intang-brand-strength','Direction','yuki_office'),
    mk('はい。社員研修で物欲ではない価値観を伝えます','Yes — Staff-train-mater-no-val','Update','kenji_office'),
    mk('新サービス申し込む手続きを簡素化しましょう','New-serv-app-simpl','Direction','yuki_office'),
    mk('はい。お客様に資料を差し出す手順を整理します','Yes — Cust-doc-out-order','Close','kenji_office'),
  ]},
  {id:'conv_09688',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文発表は研究者の栄誉だ','Ren — paper-pub-research-honor','Mentor','hiroshi_boss'),
    mk('はい。論文の誤字脱字を再点検します','Yes — Paper-typo-recheck','Earnest','ren_uni'),
    mk('蓮、研究で身辺整理を欠かすな','Ren — research-personal-clean','Direction','hiroshi_boss'),
    mk('はい。研究費の原資を理解しております','Yes — Research-cap-und','Earnest','ren_uni'),
    mk('蓮、無形の研究成果も評価される','Ren — intang-research-eval','Reflective','hiroshi_boss'),
    mk('はい。物欲ではなく真理を求めて研究します','Yes — Mater-no-truth-research','Polite','ren_uni'),
    mk('蓮、研究助成を申し込む際は慎重に','Ren — research-grant-app-careful','Direction','hiroshi_boss'),
    mk('はい。学会で論文を差し出す勇気を持ちます','Yes — Conf-paper-out-brave','Earnest close','ren_uni'),
  ]},
  {id:'conv_09689',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、勇敢な警官に栄誉を授与されますね','Police brave-honor-bestow','Cooperative','kenji_office'),
    mk('警察、調書の誤字を厳しくチェックされますね','Police statem-typo-strict','Cooperative','kenji_office'),
    mk('警察、要人の身辺警備を担当されますね','Police VIP-personal-guard','Cooperative','kenji_office'),
    mk('警察、犯罪資金の原資追跡もされますね','Police crime-fund-cap-track','Cooperative','kenji_office'),
    mk('警察、無形文化財の窃盗にも対応されますね','Police intang-cult-theft-resp','Cooperative','kenji_office'),
    mk('警察、物欲に駆られた犯罪も多いですね','Police mater-drive-crime-many','Cooperative','kenji_office'),
    mk('警察、被害届を申し込む方への配慮をされますね','Police vict-rep-app-cons','Cooperative','kenji_office'),
    mk('警察、証拠を差し出す勇気のある市民を支援されますね','Police evid-out-brave-citi-supp','Close','kenji_office'),
  ]},
  {id:'conv_09690',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、社員に栄誉を与える経営をされた','Dad — founding staff-honor-mgmt','Sage','hiroshi_elder'),
    mk('はい。お父さんは契約書の誤字を徹底排除された','Yes — Dad contract-typo-rid','Commitment','hiroshi_boss'),
    mk('お父さん、身辺整理を晩年大事にされた','Dad — personal-clean-late-imp','Wistful','hiroshi_elder'),
    mk('はい。お父さんは創業原資を自ら捻出された','Yes — Dad found-cap-self','Reflective','hiroshi_boss'),
    mk('お父さん、無形の信用を最重視された','Dad — intang-trust-top-imp','Wistful','hiroshi_elder'),
    mk('はい。お父さんは物欲よりも社員愛だった','Yes — Dad mater-no-staff-love','Reflective','hiroshi_boss'),
    mk('お父さん、新規取引を申し込む際は丁寧だった','Dad — new-deal-app-pol','Wistful','hiroshi_elder'),
    mk('はい。お父さんは手を差し出す経営をされた','Yes — Dad hand-out-mgmt','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09691',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、肌の色素細胞研究を論文で扱いましたね','Ren — skin-melan-cell paper','Calm','asuka_teacher'),
    mk('はい、舞踊家の躍動分析を論文で扱いました','Yes — Dancer-dyn paper','Earnest','ren_uni'),
    mk('蓮さん、糖尿病性網膜症の研究を論文で扱いましたね','Ren — diab-ret-pathy paper','Reflective','asuka_teacher'),
    mk('はい、山林の植林計画史を論文で扱いました','Yes — Forest-plant-hist paper','Earnest','ren_uni'),
    mk('海中ロボット技術を論文で扱いましたね','Sub-rob paper','Engaged','asuka_teacher'),
    mk('はい、薬局の調剤過誤防止研究を論文で扱いました','Yes — Pharm-disp-err-prev paper','Earnest','ren_uni'),
    mk('蓮さん、ウミガメの産卵保護を論文で扱いましたね','Ren — sea-turt-nest paper','Reflective','asuka_teacher'),
    mk('はい、地層の堆積過程を論文で扱いました','Yes — Strat-depos paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09692',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、色素鑑定を、警察、依頼されますね','Case melan-forensic police-req','Reflective','ren_uni'),
    mk('警察、防犯ドラマの躍動シーンを参考にされる事は無いでしょう','Police prev-drama-dyn-ref-no','Wry','takeda_officer'),
    mk('本件、網膜認証突破事案を、警察、捜査されますね','Case ret-auth-breach police-inv','Reflective','ren_uni'),
    mk('警察、植林計画地での違法投棄を取り締まります','Police plant-illegal-dump-strict','Procedural','takeda_officer'),
    mk('本件、海中での失踪事件を、警察、扱われますね','Case sub-miss police-handle','Reflective','ren_uni'),
    mk('警察、調剤薬局窃盗事件にも対応します','Police pharm-theft-resp','Procedural','takeda_officer'),
    mk('本件、ウミガメの産卵地保護違反を、警察、扱われますね','Case sea-turt-nest-viol police-handle','Reflective','ren_uni'),
    mk('警察、地層の堆積物分析が捜査の決め手になります','Police strat-depos-anal-key','Close','takeda_officer'),
  ]},
  {id:'conv_09693',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、肌の色素細胞研究を論文で扱いましたね','Sakura — skin-melan paper','Calm','asuka_teacher'),
    mk('はい、舞踊家の躍動分析を論文で扱いました','Yes — Dancer-dyn paper','Earnest teen','sakura_teen'),
    mk('糖尿病性網膜症を論文で扱いましたね','Diab-ret paper','Reflective','asuka_teacher'),
    mk('はい、山林の植林計画史を論文で扱いました','Yes — Forest-plant-hist paper','Earnest','sakura_teen'),
    mk('海中ロボット技術を論文で扱いましたね','Sub-rob paper','Engaged','asuka_teacher'),
    mk('はい、薬局の調剤過誤防止を論文で扱いました','Yes — Pharm-disp paper','Earnest','sakura_teen'),
    mk('ウミガメの産卵保護を論文で扱いましたね','Sea-turt-nest paper','Reflective','asuka_teacher'),
    mk('はい、地層の堆積過程を論文で扱いました','Yes — Strat-depos paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09694',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、皮膚の色素異常を医療チームで診ます','Ren — skin-melan-abn med-team','Calm','saito_doctor'),
    mk('はい、患者のリハビリでは躍動的な動きを医療チームで促します','Yes — Pati-rehab-dyn med-team prom','Patient','saito_doctor'),
    mk('蓮さん、糖尿病性網膜症のスクリーニングを医療チームでおこないます','Ren — diab-ret-screen med-team','Calm','saito_doctor'),
    mk('はい、病院敷地の植林計画を医療チームと環境部署で進めます','Yes — Hosp-plant med-env-prog','Patient','saito_doctor'),
    mk('海中療法、つまり海水療法を、貴院、研究されてますね、先生','Sub-ther-sea-ther your-hosp research, sensei','Curious','ren_uni'),
    mk('はい、調剤ミス防止のダブルチェックを医療チームで徹底します','Yes — Disp-err-prev-double med-team strict','Patient','saito_doctor'),
    mk('はい、不妊治療で産卵周期、つまり排卵周期を医療チームで管理します','Yes — IVF-ovul med-team','Patient','saito_doctor'),
    mk('はい、肺の堆積病変を医療チームで画像診断します','Yes — Lung-depos med-team image','Patient close','saito_doctor'),
  ]},
  {id:'conv_09695',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、化粧品の色素安全性を確保しろ','Our co — cosm-melan-safe','Crisp','hiroshi_boss'),
    mk('はい。社員の躍動的な働き方を支援します','Yes — Staff-dyn-work-supp','Methodical','kenji_office'),
    mk('当社、画面凝視で社員の網膜疲労に注意しろ','Our co — screen-staff-ret-fatigue','Direction','hiroshi_boss'),
    mk('はい。CSR活動として植林計画を進めます','Yes — CSR-plant-prog','Update','kenji_office'),
    mk('海中ケーブル事業を強化しろ','Sub-cable-strength','Direction','hiroshi_boss'),
    mk('はい。社員食堂の調剤的栄養管理を進めます','Yes — Staff-cant-disp-nutr','Update','kenji_office'),
    mk('当社、海洋資源の産卵保護にも協力しろ','Our co — sea-res-nest-coop','Direction','hiroshi_boss'),
    mk('はい。資金の堆積管理を徹底します','Yes — Cap-depos-strict','Close','kenji_office'),
  ]},
  {id:'conv_09696',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、アドベンチャーゲームがお好きだって、メイちゃん','Aoi — cust-adv-game Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ヒルトンホテルにご家族とお泊まりだって、メイちゃん','Aoi — cust-Hilton-fam Mei','Reflective','aoi_barista'),
    mk('葵、お客様、漫画のハーレム作品にお詳しいって、メイちゃん','Aoi — cust-harem-manga Mei','Wry','mei_romantic'),
    mk('葵、お客様、エイリアンの映画を観てこられたって、メイちゃん','Aoi — cust-Alien-watch Mei','Reflective','aoi_barista'),
    mk('葵、お客様、プロのゴルファーでいらっしゃるって、メイちゃん','Aoi — cust-pro-golf Mei','Reflective','mei_romantic'),
    mk('葵、お客様、テレビのトークショーに出演されたって、メイちゃん','Aoi — cust-talk-show Mei','Reflective','aoi_barista'),
    mk('葵、お客様、東映の時代劇がお好きだって、メイちゃん','Aoi — cust-Toei-jidai Mei','Reflective','mei_romantic'),
    mk('葵、お客様、サッカーのバイエルンファンだって、メイちゃん','Aoi — cust-Bayern-fan Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09697',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがアドベンチャー小説をご愛読された','Gran — youth Dad-adv-novel-read','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ヒルトンホテルでお祝いされたわよね、あなた?','Yes — Grandpa-Hilton-cel, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがハーレムジャズに関心を持たれた','Gran — youth Dad-Harlem-jazz-int','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、エイリアン映画にハマってらしたわよね、あなた?','Grandpa — Alien-into, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがアマチュアのゴルファーだった','Gran — youth Dad-amateur-golf','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、晩年トークショーをご覧になるのが日課だったわよね、あなた?','Grandpa — late-talk-show-routine, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが東映の時代劇を映画館でご覧になった','Gran — youth Dad-Toei-jidai-cinema','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ドイツバイエルンのビールがお好きだったわよね、あなた?','Grandpa — Bayern-beer, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09698',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがアドベンチャー絵本を読んで下さるそうよ','Sho — Dad-adv-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとヒルトンホテルに泊まったよ','Mei-sis — me Dad-Hilton-stay','Eager child','sho_child'),
    mk('翔くん、ハーレム作品は子供向けじゃないからね','Sho — harem-kid-no','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとエイリアンのアニメ観たいよ','Mei-sis — me Dad-Alien-anime-want','Eager child','sho_child'),
    mk('翔くん、お父さんがゴルファーの先生にお会いになるそうよ','Sho — Dad-golf-tch-meet','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとトークショー観たよ','Mei-sis — me Dad-talk-show-watched','Eager child','sho_child'),
    mk('翔くん、お父さんが東映の時代劇に連れて行って下さるそうよ','Sho — Dad-Toei-jidai-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとバイエルンの試合観たいよ','Mei-sis — me Dad-Bayern-want','Eager close','sho_child'),
  ]},
  {id:'conv_09699',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、アドベンチャーゲームばっかやってたな','Riku — adv-game-only','Wry teen','sakura_teen'),
    mk('お前、ヒルトンホテルでお祝いされたな、桜','You — Hilton-cel Sakura','Wry','riku_teen'),
    mk('リク、お前、ハーレム漫画読んでただろ','Riku — harem-manga','Wry','sakura_teen'),
    mk('お前、エイリアンの映画怖がってたな、桜','You — Alien-scared Sakura','Wry','riku_teen'),
    mk('リク、お前、プロゴルファー目指してたな','Riku — pro-golf-aim','Curious','sakura_teen'),
    mk('お前、トークショーの真似してたな、桜','You — talk-show-mimic Sakura','Wry','riku_teen'),
    mk('リク、お前、東映特撮シリーズハマってたな','Riku — Toei-FX-into','Wry','sakura_teen'),
    mk('お前、バイエルンのユニフォーム着てたな、桜','You — Bayern-uni Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09700',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがアドベンチャー映画に連れて行って下さるそうよ','Sho — Dad-adv-movie-take','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとヒルトンホテルに泊まったよ','Mom — me Dad-Hilton-stay','Eager child','sho_child'),
    mk('翔くん、お父さんがハーレム漫画は子供は読まないって仰ってたわ','Sho — Dad-harem-kid-no','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんとエイリアンのアニメ観たよ','Mom — me Dad-Alien-anime','Eager child','sho_child'),
    mk('翔くん、お父さんがゴルファーになるための練習を見せて下さったわ','Sho — Dad-golf-prac-show','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとトークショーの収録見たよ','Mom — me Dad-talk-show-rec-saw','Eager child','sho_child'),
    mk('翔くん、お父さんが東映の映画祭に連れて行って下さるそうよ','Sho — Dad-Toei-fest-take','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんがバイエルンの試合中継を観てらしたよ','Mom — me Dad-Bayern-broad-watch','Eager close','sho_child'),
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

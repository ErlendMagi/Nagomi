import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_497 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['カタチ','戯言','叫ば','覆う','迫り','やっかい','滑稽','有り難う']
const B_T = ['ディスカウント','映し出さ','敬遠','すみやか','追随','係員','きめる','くらべ']
const C_T = ['カルシウム','材質','耕作','司教','旧約','起立','見識','人身']
const D_T = ['フジモリ','立川','杜','ニュートン','ブルガリア','プーケット','ラオス','ユネスコ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09901',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが家族のカタチを大切にされてるのよ','Sho — Dad-fam-shape-cherish','Tender','yumiko_mom'),
    mk('ママ、ぼく、お友達の戯言を真に受けない様にするね','Mom — me friend-non-no-real-take','Earnest child','sho_child'),
    mk('翔くん、お父さんが喜びを叫ばれた瞬間が懐かしいわ','Sho — Dad-joy-shout-miss','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんを毛布で覆うお手伝いしたよ','Mom — me Dad-blanket-cover-help','Eager child','sho_child'),
    mk('翔くん、夕食の時間が迫り来てるから片付けようね','Sho — dinner-near-clean','Direction','yumiko_mom'),
    mk('ママ、宿題はやっかいだけど頑張るよ','Mom — homework-troub-effort','Earnest child','sho_child'),
    mk('翔くん、滑稽なお話でお父さんを笑わせたいね','Sho — funny-Dad-laugh-want','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「有り難うございました」って言えたよ','Mom — me Dad-"arigatou"-said','Proud close','sho_child'),
  ]},
  {id:'conv_09902',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お店のカタチを大事にしようね、メイちゃん','Aoi — store-shape-cherish Mei','Tender','mei_romantic'),
    mk('葵、お客様の戯言にも丁寧に対応しようね、メイちゃん','Aoi — cust-non-pol-resp Mei','Direction','aoi_barista'),
    mk('葵、お客様、注文を叫ばれた時もあるね、メイちゃん','Aoi — cust-order-shout-times Mei','Wry','mei_romantic'),
    mk('葵、ケーキを蓋で覆うのを忘れないでね、メイちゃん','Aoi — cake-lid-cover-rem Mei','Direction','aoi_barista'),
    mk('葵、閉店時間が迫り来てるね、メイちゃん','Aoi — close-near Mei','Direction','mei_romantic'),
    mk('葵、やっかいなクレームが入ったね、メイちゃん','Aoi — troub-comp Mei','Wry','aoi_barista'),
    mk('葵、滑稽なエピソードでお客様を和ませよう、メイちゃん','Aoi — funny-cust-soft Mei','Direction','mei_romantic'),
    mk('葵、お客様に「有り難うございました」を丁寧に言おうね、メイちゃん','Aoi — cust-"arigatou"-pol Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_09903',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、家族のカタチがあって幸せだった','Gran — youth-fam-shape-happy','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い人の戯言を笑って受け止めて下さったわよね、あなた?','Yes — Grandpa-young-non-laugh, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが空襲時に皆を叫ばれて呼ばれた','Gran — youth Dad-raid-shout-call','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、晩年は布団を覆うのも手伝って差し上げたわよね、あなた?','Grandpa — late-blanket-cover-help, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、戦地への出兵が迫り来た日々があった','Gran — youth war-mob-near-days','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、やっかいな手続きも丁寧にされたわよね、あなた?','Grandpa — troub-proc-pol, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんの滑稽なお話で皆笑った','Gran — youth Dad-funny-all-laugh','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、いつも「有り難う」を欠かさず仰ったわよね、あなた?','Grandpa — "arigatou"-never-fail, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09904',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、髪のカタチ変えたな','Riku — hair-shape-change','Curious teen','sakura_teen'),
    mk('お前、戯言ばっか言うなよ、桜','You — non-only-no Sakura','Wry','riku_teen'),
    mk('リク、お前、教室で叫ばれてた事あったろ','Riku — class-shout','Wry','sakura_teen'),
    mk('お前、布団で頭を覆うクセあるな、桜','You — blanket-head-cover-hab Sakura','Wry','riku_teen'),
    mk('リク、提出期限が迫り来てるぞ','Riku — submit-near','Direction','sakura_teen'),
    mk('お前、宿題のやっかいさで嘆いてたな、桜','You — homework-troub-lament Sakura','Wry','riku_teen'),
    mk('リク、お前、滑稽な顔マネで笑わせるな','Riku — funny-face-mimic-laugh','Wry','sakura_teen'),
    mk('お前、先生に「有り難うございました」って丁寧だな、桜','You — tch-"arigatou"-pol Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_09905',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、家族のカタチって本当に大切ね','Sho — fam-shape-truly-imp','Tender','mei_romantic'),
    mk('メイ姉さん、お友達の戯言を相手にしないことにしたよ','Mei-sis — friend-non-ignore-decide','Earnest child','sho_child'),
    mk('翔くん、お父さんが翔くんの名前を叫ばれて呼ばれたわ','Sho — Dad-Sho-name-shout','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんを毛布で覆うのお手伝いしたよ','Mei-sis — me Dad-blanket-cover-help','Eager child','sho_child'),
    mk('翔くん、テストが迫り来るから準備しようね','Sho — test-near-prep','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、やっかいな宿題も諦めずやるよ','Mei-sis — me troub-homework-no-give-up','Earnest child','sho_child'),
    mk('翔くん、お父さんが滑稽なお話して下さって笑ったわ','Sho — Dad-funny-told-laugh','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんに「有り難う」って心から言うよ','Mei-sis — me Mei-sis-"arigatou"-heart','Tender close','sho_child'),
  ]},
  {id:'conv_09906',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、ディスカウントセールを慎重に実施しろ','Our co — disc-sale-careful','Crisp','hiroshi_boss'),
    mk('はい。社内モニターに業績が映し出される仕組みを整えます','Yes — Co-monit-perf-show-mech','Methodical','kenji_office'),
    mk('当社、競合との直接対決を敬遠しろ','Our co — comp-direct-avoid','Direction','hiroshi_boss'),
    mk('はい。すみやかに対応致します','Yes — Imm-resp','Update','kenji_office'),
    mk('業界の追随ではなく独自路線で行け','Industry-follow-no-uniq','Direction','hiroshi_boss'),
    mk('はい。展示会の係員を増員します','Yes — Expo-staff-add','Update','kenji_office'),
    mk('当社、方針をきめる時は社員にも説明しろ','Our co — pol-decide-staff-explan','Direction','hiroshi_boss'),
    mk('はい。他社とくらべての強みを示します','Yes — Comp-strength-show','Close','kenji_office'),
  ]},
  {id:'conv_09907',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('ディスカウントの頻度を下げましょう','Disc-freq-redu','Brisk','yuki_office'),
    mk('はい。会議室で資料が映し出される設備を更新します','Yes — Mtg-doc-show-eq-up','Cooperative','kenji_office'),
    mk('敬遠されがちな新ブランドを再構築しましょう','Avoid-new-brand-restruct','Direction','yuki_office'),
    mk('はい。すみやかに対応窓口を設置します','Yes — Imm-cont-pt-set','Update','kenji_office'),
    mk('業界他社の追随を分析しましょう','Industry-follow-anal','Direction','yuki_office'),
    mk('はい。コールセンター係員の研修を強化します','Yes — Call-staff-train-strength','Update','kenji_office'),
    mk('新製品の価格をきめる会議を開きましょう','New-prod-price-decide-mtg','Direction','yuki_office'),
    mk('はい。同業他社とくらべての強みを明確にします','Yes — Other-comp-strength-clear','Close','kenji_office'),
  ]},
  {id:'conv_09908',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、学費ディスカウント制度も検討してやろう','Ren — tuit-disc-cons','Mentor','hiroshi_boss'),
    mk('はい。研究成果がスクリーンに映し出される機会も活かします','Yes — Research-show-opp','Earnest','ren_uni'),
    mk('蓮、難解な分野を敬遠するな','Ren — hard-field-avoid-no','Direction','hiroshi_boss'),
    mk('はい。すみやかに対応致します','Yes — Imm-resp','Earnest','ren_uni'),
    mk('蓮、先行研究をただ追随するな','Ren — prior-follow-only-no','Direction','hiroshi_boss'),
    mk('はい。学会会場の係員もお手伝いします','Yes — Conf-staff-help','Polite','ren_uni'),
    mk('蓮、研究方向をきめる前に相談しろ','Ren — research-dir-decide-pre-cons','Direction','hiroshi_boss'),
    mk('はい。先行研究とくらべての独自性を示します','Yes — Prior-uniq-show','Earnest close','ren_uni'),
  ]},
  {id:'conv_09909',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、ディスカウントセール時の万引き対策もされますね','Police disc-sale-shoplift-counter','Cooperative','kenji_office'),
    mk('警察、防犯カメラに映し出される映像を解析されますね','Police prev-cam-show-anal','Cooperative','kenji_office'),
    mk('警察、危険地帯を敬遠せずパトロールされますね','Police dang-avoid-no-patrol','Cooperative','kenji_office'),
    mk('警察、すみやかに現場到着されますね','Police imm-scene-arrive','Cooperative','kenji_office'),
    mk('警察、犯罪組織の追随者も追跡されますね','Police crime-org-follow-track','Cooperative','kenji_office'),
    mk('警察、警察署の係員研修も大事ですね','Police stat-staff-train-imp','Cooperative','kenji_office'),
    mk('警察、捜査方針をきめる会議もされますね','Police inv-pol-decide-mtg','Cooperative','kenji_office'),
    mk('警察、他署とくらべての検挙率もご公表ですね','Police other-stat-arr-rate-pub','Close','kenji_office'),
  ]},
  {id:'conv_09910',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、ディスカウント戦略を慎重に使われた','Dad — founding disc-strat-careful','Sage','hiroshi_elder'),
    mk('はい。お父さんは商品が市場に映し出される様を見据えてらした','Yes — Dad prod-mkt-show-see','Commitment','hiroshi_boss'),
    mk('お父さん、難局を敬遠されない方だった','Dad — crisis-avoid-no','Wistful','hiroshi_elder'),
    mk('はい。お父さんはすみやかな意思決定をされた','Yes — Dad imm-decide','Reflective','hiroshi_boss'),
    mk('お父さん、他社追随ではなく独自路線で経営された','Dad — follow-no-uniq-mgmt','Wistful','hiroshi_elder'),
    mk('はい。お父さんは現場の係員にも自ら声をかけられた','Yes — Dad scene-staff-self-greet','Reflective','hiroshi_boss'),
    mk('お父さん、人事をきめる時は慎重だった','Dad — HR-decide-careful','Wistful','hiroshi_elder'),
    mk('はい。お父さんは他業界とくらべての強みを意識された','Yes — Dad other-industry-strength-aware','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09911',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、骨粗鬆症のカルシウム代謝研究を論文で扱いましたね','Ren — osteopo-Ca-met paper','Calm','asuka_teacher'),
    mk('はい、人工歯の材質研究を論文で扱いました','Yes — Art-tooth-mat paper','Earnest','ren_uni'),
    mk('蓮さん、近世の耕作地分布研究を論文で扱いましたね','Ren — early-mod-cult-dist paper','Reflective','asuka_teacher'),
    mk('はい、カトリック教会の司教職研究を論文で扱いました','Yes — Cath-bishop paper','Earnest','ren_uni'),
    mk('旧約聖書の文献研究を論文で扱いましたね','OT-lit paper','Engaged','asuka_teacher'),
    mk('はい、児童の起立性調節障害を論文で扱いました','Yes — Child-orth-dys paper','Earnest','ren_uni'),
    mk('蓮さん、専門家の見識形成の研究を論文で扱いましたね','Ren — expert-insight-form paper','Reflective','asuka_teacher'),
    mk('はい、人身売買防止策の研究を論文で扱いました','Yes — Traf-prev paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09912',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、薬剤のカルシウム成分鑑定を、警察、依頼されますね','Case drug-Ca-forensic police-req','Reflective','ren_uni'),
    mk('警察、犯行に使われた材質を鑑識します','Police crime-mat-forensic','Procedural','takeda_officer'),
    mk('本件、耕作地での盗難事件を、警察、扱われますね','Case cult-theft police-handle','Reflective','ren_uni'),
    mk('警察、司教詐欺事件にも対応します','Police bishop-fraud-resp','Procedural','takeda_officer'),
    mk('本件、旧約聖書を悪用したカルト事件を、警察、扱われますね','Case OT-cult police-handle','Reflective','ren_uni'),
    mk('警察、容疑者の起立姿勢も観察します','Police suspect-stand-pos-obs','Procedural','takeda_officer'),
    mk('本件、見識の高い専門家を、警察、参考人にされますね','Case expert-insight police-ref','Reflective','ren_uni'),
    mk('警察、人身売買事案を国際協力で捜査されますね','Police traf-intl-coop-inv','Close','kenji_office'),
  ]},
  {id:'conv_09913',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、骨粗鬆症のカルシウム代謝研究を論文で扱いましたね','Sakura — osteopo-Ca paper','Calm','asuka_teacher'),
    mk('はい、人工歯の材質研究を論文で扱いました','Yes — Art-tooth-mat paper','Earnest teen','sakura_teen'),
    mk('近世の耕作地分布を論文で扱いましたね','Early-mod-cult paper','Reflective','asuka_teacher'),
    mk('はい、カトリック教会の司教職を論文で扱いました','Yes — Cath-bishop paper','Earnest','sakura_teen'),
    mk('旧約聖書の文献研究を論文で扱いましたね','OT-lit paper','Engaged','asuka_teacher'),
    mk('はい、児童の起立性調節障害を論文で扱いました','Yes — Child-orth paper','Earnest','sakura_teen'),
    mk('専門家の見識形成を論文で扱いましたね','Expert-insight paper','Reflective','asuka_teacher'),
    mk('はい、人身売買防止策を論文で扱いました','Yes — Traf-prev paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09914',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、患者のカルシウム値を医療チームで日々管理します','Ren — pati-Ca med-team daily','Calm','saito_doctor'),
    mk('はい、手術器具の材質を医療チームで再点検します','Yes — Surg-eq-mat med-team recheck','Patient','saito_doctor'),
    mk('蓮さん、農作業従事者の耕作中怪我を医療チームで扱います','Ren — farmer-cult-injury med-team','Calm','saito_doctor'),
    mk('司教様の終末期医療を、貴院、担当されますね、先生','Bishop-end-life your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、患者の希望に旧約聖書朗読を医療チームで対応します','Yes — Pati-OT-read med-team','Patient','saito_doctor'),
    mk('はい、患者の起立性低血圧を医療チームで日常的に診ます','Yes — Pati-orth-BP med-team','Patient','saito_doctor'),
    mk('医療者の見識を、貴院、研鑽されてますね、先生','Med-insight your-hosp dev, sensei','Reflective','ren_uni'),
    mk('はい、人身事故被害者の救命を医療チームで担当します','Yes — Traf-vict-life med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_09915',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、社員食堂のカルシウムメニューを充実させろ','Our co — staff-cant-Ca-rich','Crisp','hiroshi_boss'),
    mk('はい。商品材質の見直しを進めます','Yes — Prod-mat-rev','Methodical','kenji_office'),
    mk('当社、耕作放棄地の再活用事業も検討しろ','Our co — aband-cult-reuse','Direction','hiroshi_boss'),
    mk('はい。地域の司教様との対話も視野に入れます','Yes — Local-bishop-dial','Update','kenji_office'),
    mk('当社、旧約のような厳格すぎる規律ではなく現代的経営をしろ','Our co — OT-strict-no-mod-mgmt','Direction','hiroshi_boss'),
    mk('はい。朝礼での起立姿勢にこだわりません','Yes — Morning-stand-no-bind','Update','kenji_office'),
    mk('当社、社員の見識を高める研修を行え','Our co — staff-insight-train','Direction','hiroshi_boss'),
    mk('はい。社用車の人身事故ゼロを目標にします','Yes — Co-car-traf-zero','Close','kenji_office'),
  ]},
  {id:'conv_09916',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ペルーのフジモリ政権時代を研究されてるって、メイちゃん','Aoi — cust-Fujimori-era Mei','Reflective','mei_romantic'),
    mk('葵、お客様、立川にお住まいだって、メイちゃん','Aoi — cust-Tachikawa-live Mei','Reflective','aoi_barista'),
    mk('葵、お客様、明治神宮の杜を散策されたって、メイちゃん','Aoi — cust-Meiji-forest-walk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ニュートンの伝記がご趣味だって、メイちゃん','Aoi — cust-Newton-bio Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ブルガリアのヨーグルトファンだって、メイちゃん','Aoi — cust-Bulg-yog-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、新婚旅行でプーケットに行かれたって、メイちゃん','Aoi — cust-Phuket-honey Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ラオスのコーヒー豆を取り寄せてらっしゃるって、メイちゃん','Aoi — cust-Laos-bean Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ユネスコ世界遺産を巡られたよ、メイちゃん','Aoi — cust-UNESCO-her Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09917',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、ニュースでフジモリ政権をご覧になってた','Gran — youth-news-Fujimori-watch','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、立川駐屯地時代を懐かしまれたわよね、あなた?','Yes — Grandpa-Tachikawa-mil-miss, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが鎮守の杜を歩かれた','Gran — youth Dad-shrine-forest-walk','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ニュートンの法則を孫に教えられたわよね、あなた?','Grandpa — Newton-law-grandkid-teach, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがブルガリアのワインを取り寄せられた','Gran — youth Dad-Bulg-wine-order','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、プーケットの津波被害に心を痛められたわよね、あなた?','Grandpa — Phuket-tsunami-pain, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがラオスへの援助に関わられた','Gran — youth Dad-Laos-aid','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ユネスコ世界遺産を孫と巡られたわよね、あなた?','Grandpa — UNESCO-grandkid-tour, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09918',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがフジモリ大統領のお話して下さるそうよ','Sho — Dad-Fujimori-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと立川の公園行ったよ','Mei-sis — me Dad-Tachikawa-park','Eager child','sho_child'),
    mk('翔くん、お父さんが鎮守の杜のお散歩に連れて行って下さるそうよ','Sho — Dad-shrine-forest-walk-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとニュートンの絵本見たよ','Mei-sis — me Dad-Newton-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがブルガリアのヨーグルトを買って下さったわ','Sho — Dad-Bulg-yog-buy','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとプーケットの絵本見たよ','Mei-sis — me Dad-Phuket-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがラオスのお話して下さるそうよ','Sho — Dad-Laos-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ユネスコ世界遺産行きたいよ','Mei-sis — me UNESCO-want','Eager close','sho_child'),
  ]},
  {id:'conv_09919',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、社会でフジモリ政権習ったろ?','Riku — soc-Fujimori?','Curious teen','sakura_teen'),
    mk('お前、修学旅行で立川行ったろ?桜','You — sch-trip-Tachikawa? Sakura','Curious','riku_teen'),
    mk('リク、お前、神社の杜を散策してたな','Riku — shrine-forest-walk','Curious','sakura_teen'),
    mk('お前、理科でニュートンの法則習ったろ?桜','You — sci-Newton? Sakura','Curious','riku_teen'),
    mk('リク、お前、ブルガリアのバラ油買ってたな','Riku — Bulg-rose-oil-buy','Curious','sakura_teen'),
    mk('お前、家族でプーケット行ったろ?桜','You — fam-Phuket? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会でラオス習ったろ?','Riku — soc-Laos?','Curious','sakura_teen'),
    mk('お前、ユネスコ世界遺産巡り好きだったな、桜','You — UNESCO-tour-like Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09920',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがフジモリ大統領のドキュメンタリーを観てらしたわ','Sho — Dad-Fujimori-doc-watch','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと立川の昭和記念公園行ったよ','Mom — me Dad-Tachikawa-park','Eager child','sho_child'),
    mk('翔くん、お父さんが鎮守の杜の絵本を読んで下さるそうよ','Sho — Dad-shrine-forest-pic-read','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとニュートンの伝記読んだよ','Mom — me Dad-Newton-bio','Eager child','sho_child'),
    mk('翔くん、お父さんがブルガリア出張のお話して下さったわ','Sho — Dad-Bulg-trip-told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとプーケットの絵本見たよ','Mom — me Dad-Phuket-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがラオスの絵本を読んで下さるそうよ','Sho — Dad-Laos-pic-read','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとユネスコ世界遺産のドキュメンタリー観たよ','Mom — me Dad-UNESCO-doc','Eager close','sho_child'),
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

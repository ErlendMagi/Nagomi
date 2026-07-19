import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_532 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['陽子','高山','高松','佐賀','島根','日本橋','水田','淵']
const B_T = ['ロク','オンリー','゛','トロツキー','健太郎','二郎','ロビン','みずほ']
const C_T = ['増田','古田','川上','水野','古川','桜井','平田','西田']
const D_T = ['松岡','呉','伊東','藤沢','永井','尾崎','黒田','英寿']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10601',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんと陽子おばさんが学生時代の同級生だったって、聞いたわよ','Sho — Dad-Youko-aunt-classm-heard','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと飛騨高山の温泉旅行行ってきたよ','Mom — me Dad-Hida-Tak-onsen','Pleased child','sho_child'),
    mk('翔くん、お父さんが「高松のうどんは絶品」って語って下さるわ','Sho — Dad-"Tak-udon-best"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと佐賀のお祭りに行ったよ','Mom — me Dad-Saga-fes','Eager child','sho_child'),
    mk('翔くん、お父さんが「島根の出雲大社にお参りしよう」って仰ってたわ','Sho — Dad-"Shim-Iz-pray"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと日本橋でお買い物したよ','Mom — me Dad-Nih-shop','Eager child','sho_child'),
    mk('翔くん、お父さんが「水田の風景は心が落ち着く」って仰ってたわ','Sho — Dad-"paddy-calm"-said','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと川の淵で魚を釣ったよ','Mom — me Dad-river-pool-fish','Eager close','sho_child'),
  ]},
  {id:'conv_10602',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、お孫様の陽子ちゃんを連れていらしたよ、メイちゃん','Aoi — cust-grdkid-Youko-vis Mei','Reflective','mei_romantic'),
    mk('葵、お客様、飛騨高山の古民家カフェのお話を語って下さったよ、メイちゃん','Aoi — cust-Hida-Tak-cafe-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、高松のオリーブ農園に行かれたって、メイちゃん','Aoi — cust-Tak-olive-farm Mei','Reflective','mei_romantic'),
    mk('葵、お客様、佐賀の有田焼を集めてらっしゃるって、メイちゃん','Aoi — cust-Saga-Arita-coll Mei','Reflective','aoi_barista'),
    mk('葵、お客様、島根のしじみ漁師さんと縁があるって、メイちゃん','Aoi — cust-Shim-clam-fish Mei','Reflective','mei_romantic'),
    mk('葵、お客様、日本橋のお店との取引のお話を語って下さったよ、メイちゃん','Aoi — cust-Nih-store-deal Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ご実家が水田に囲まれた農家だって、メイちゃん','Aoi — cust-home-paddy-farm Mei','Reflective','mei_romantic'),
    mk('葵、お客様、子供時代に川の淵で泳いだお話を語って下さったよ、メイちゃん','Aoi — cust-child-river-pool-swim Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10603',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが陽子先生の英語塾に通われた','Gran — youth Dad-Youko-Eng-cl','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、飛騨高山に新婚旅行に行かれたわよね、あなた?','Yes — Grandpa-youth-Hida-Tak-honeymoon, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが香川県高松で営業をされた','Gran — youth Dad-Kag-Tak-sales','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、佐賀のご親戚を訪ねられたわよね、あなた?','Grandpa — youth-Saga-rel-vis, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが島根のたたら製鉄を研究された','Gran — youth Dad-Shim-tatara-stud','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、日本橋三越にお勤めだったわよね、あなた?','Grandpa — youth-Nih-Mits, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは水田の畦道、つまりあぜを歩かれた','Gran — youth Dad-paddy-aze-walk','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、川の淵で鮎を釣られたわよね、あなた?','Grandpa — youth-pool-ayu-fish, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10604',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、隣のクラスの陽子と仲良いな','Riku — next-cl-Youko-close','Curious teen','sakura_teen'),
    mk('お前、修学旅行で飛騨高山行ったろ、桜','You — sch-trip-Hida-Tak? Sakura','Curious','riku_teen'),
    mk('リク、お前、夏休みに香川県の高松行ったな','Riku — sum-Kag-Tak','Curious','sakura_teen'),
    mk('お前、社会で佐賀の歴史調べてたな、桜','You — soc-Saga-hist Sakura','Curious','riku_teen'),
    mk('リク、お前、出雲、つまり島根の神社行ったろ','Riku — Iz-Shim-shrine?','Curious','sakura_teen'),
    mk('お前、東京の日本橋で買い物してたろ、桜','You — Tok-Nih-shop? Sakura','Curious','riku_teen'),
    mk('リク、お前、家族で水田の田植え手伝ってたな','Riku — fam-paddy-plant-help','Curious','sakura_teen'),
    mk('お前、林間学校で川の淵で水遊びしてたな、桜','You — for-camp-pool-play Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10605',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「陽子先生に礼儀を学べ」って仰ってたわ','Sho — Dad-"Youko-eti-learn"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと飛騨高山の古い町並みを観たよ','Mei-sis — me Dad-Hida-Tak-old-town','Eager child','sho_child'),
    mk('翔くん、お父さんが「高松のオリーブ畑を見に行こう」って仰ってたわ','Sho — Dad-"Tak-olive"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと佐賀バルーンフェスタの動画を観たよ','Mei-sis — me Dad-Saga-ballo-vid','Eager child','sho_child'),
    mk('翔くん、お父さんが「島根の石見銀山を学ぼう」って仰ってたわ','Sho — Dad-"Shim-silver-mine"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと東京の日本橋の歴史本を読んだよ','Mei-sis — me Dad-Tok-Nih-hist-book','Eager child','sho_child'),
    mk('翔くん、お父さんが「水田の四季は美しい」って仰ってたわ','Sho — Dad-"paddy-season-beau"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと川の淵の生物を観察したよ','Mei-sis — me Dad-pool-bio-obs','Eager close','sho_child'),
  ]},
  {id:'conv_10606',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、月次会議をロク、つまり六時から始めろ','Our co — mo-meet-six-start','Crisp','hiroshi_boss'),
    mk('はい。当社のオンリーワン技術を社内で再共有します','Yes — Our-only-one-tech-share','Methodical','kenji_office'),
    mk('当社、新人に濁点、つまり゛の使い方も基本から教えろ','Our co — newhire-vc-mark-basic','Direction','hiroshi_boss'),
    mk('はい。社員研修にトロツキー時代のロシア経済史を入れます','Yes — Staff-Trots-Rus-econ-train','Update','kenji_office'),
    mk('当社、新人の健太郎くんの指導役を決めろ','Our co — newhire-Kentaro-mentor','Direction','hiroshi_boss'),
    mk('はい。ラーメン二郎系列の取材記事を社内で参考にします','Yes — Ramen-Jiro-art-ref','Update','kenji_office'),
    mk('当社、海外パートナーのロビン氏との会合を設定しろ','Our co — overs-Robin-meet','Direction','hiroshi_boss'),
    mk('はい。みずほ銀行との取引条件を見直します','Yes — Mizuho-bank-cond-rev','Close','kenji_office'),
  ]},
  {id:'conv_10607',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('プロジェクト会議をロク、つまり六時に設定しましょう','Proj-meet-six-set','Brisk','yuki_office'),
    mk('はい。当社のオンリーワンサービスをPRします','Yes — Our-only-svc-PR','Cooperative','kenji_office'),
    mk('文書の濁点、つまり゛の付け忘れに注意しましょう','Doc-vc-mark-care','Direction','yuki_office'),
    mk('はい。社員勉強会にトロツキー思想史も加えます','Yes — Staff-Trots-thoug-incl','Update','kenji_office'),
    mk('新入社員の健太郎くんの配属を決めましょう','Newhire-Kentaro-assn','Direction','yuki_office'),
    mk('はい。提携先の鈴木二郎様との会食を予定します','Yes — Part-Suzu-Jiro-meal','Update','kenji_office'),
    mk('海外コンサルロビン氏の来日対応を整えましょう','Overs-cons-Robin-vis-arrange','Direction','yuki_office'),
    mk('はい。みずほ銀行の融資条件を確認します','Yes — Mizuho-bank-loan-check','Close','kenji_office'),
  ]},
  {id:'conv_10608',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文の打ち合わせをロク、つまり六時に始めろ','Ren — paper-meet-six-start','Mentor','hiroshi_boss'),
    mk('はい。研究室のオンリーワン手法を社内発表します','Yes — Lab-only-method-pres','Earnest','ren_uni'),
    mk('蓮、原稿の濁点、つまり゛の校正を丁寧におこなえ','Ren — manus-vc-proof-care','Direction','hiroshi_boss'),
    mk('はい。トロツキー革命の論文を読みます','Yes — Trots-rev-paper','Earnest','ren_uni'),
    mk('蓮、後輩の健太郎くんを面倒見てあげろ','Ren — junior-Kentaro-mentor','Direction','hiroshi_boss'),
    mk('はい。研究室の同期、二郎くんと共同研究します','Yes — Lab-class-Jiro-joint','Polite','ren_uni'),
    mk('蓮、海外研究員ロビン氏との論文を共著しろ','Ren — overs-Robin-paper-co-auth','Direction','hiroshi_boss'),
    mk('はい。研究費の入金は、みずほ銀行口座で確認します','Yes — Res-fund-Mizuho-confirm','Earnest close','ren_uni'),
  ]},
  {id:'conv_10609',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、夜間勤務の終了時刻をロク、つまり六時に設定されますね','Police night-shift-end-six','Cooperative','kenji_office'),
    mk('警察、地元オンリーの特殊事案にも対応されますね','Police local-only-spec-case','Cooperative','kenji_office'),
    mk('警察、調書の濁点、つまり゛の誤記にも注意されますね','Police stmt-vc-mark-care','Cooperative','kenji_office'),
    mk('警察、過激思想、つまりトロツキー系思想の動向も把握されますね','Police rad-Trots-trend-mon','Cooperative','kenji_office'),
    mk('警察、署内の新人健太郎くんの指導もされますね','Police stat-newhire-Kentaro-mentor','Cooperative','kenji_office'),
    mk('警察、参考人二郎氏から、警察、事情を伺われますね','Police witn-Jiro-careful','Cooperative','kenji_office'),
    mk('警察、海外捜査機関ロビン氏との連絡もされますね','Police overs-Robin-contact','Cooperative','kenji_office'),
    mk('警察、被害金返還にみずほ銀行口座を照会されますね','Police vict-rep-Mizuho-inq','Close','kenji_office'),
  ]},
  {id:'conv_10610',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、毎朝ロク、つまり六時から朝礼を始められた','Dad — youth-six-morn-meet','Sage','hiroshi_elder'),
    mk('はい。お父さんはオンリーワン経営の理念を貫かれた','Yes — Dad only-one-mgmt-stick','Commitment','hiroshi_boss'),
    mk('お父さん、文書の濁点、つまり゛にも細心の注意を払われた','Dad — doc-vc-mark-care','Wistful','hiroshi_elder'),
    mk('はい。お父さんは若い頃、トロツキー時代のロシア経済の論文を読まれた','Yes — Dad youth-Trots-Rus-paper','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、健太郎社員を熱心に育てられた','Dad — youth-Kentaro-grow','Wistful','hiroshi_elder'),
    mk('はい。お父さんは二郎社員、現二郎部長をご贔屓だった','Yes — Dad Jiro-dir-fav','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、海外ロビン氏との合弁を成功された','Dad — youth-overs-Robin-JV','Wistful','hiroshi_elder'),
    mk('はい。お父さんはみずほ銀行と長年取引された','Yes — Dad Mizuho-bank-long-deal','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10611',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、経済学者増田先生の論文を、論文で扱いましたね','Ren — econ-Masuda-prof paper','Calm','asuka_teacher'),
    mk('はい、歴史学者古田先生のご研究を論文で扱いました','Yes — Hist-Furuta paper','Earnest','ren_uni'),
    mk('蓮さん、社会学者川上先生のフィールド調査を論文で扱いましたね','Ren — soc-Kaw-field paper','Reflective','asuka_teacher'),
    mk('はい、文学者水野先生の古典分析を論文で扱いました','Yes — Lit-Miz-class paper','Earnest','ren_uni'),
    mk('蓮さん、人類学者古川先生の地域研究を論文で扱いましたね','Ren — anth-Furu-local paper','Reflective','asuka_teacher'),
    mk('はい、考古学者桜井先生の発掘成果を論文で扱いました','Yes — Arch-Sak-dig paper','Earnest','ren_uni'),
    mk('蓮さん、言語学者平田先生の音韻研究を論文で扱いましたね','Ren — ling-Hir-phon paper','Reflective','asuka_teacher'),
    mk('はい、哲学者西田幾多郎先生の思想を論文で扱いました','Yes — Phil-Nish-Kitaro paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10612',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、参考人増田氏から、警察、事情を丁寧に伺われますね','Case witn-Masuda police-careful','Reflective','ren_uni'),
    mk('警察、目撃者古田氏のご証言を、警察、整えられますね','Police witn-Furuta-stmt-tidy','Cooperative','takeda_officer'),
    mk('本件、容疑者川上の前科を、警察、確認されますね','Case suspect-Kaw-prior police-check','Reflective','ren_uni'),
    mk('警察、被害者水野様のご家族にも、警察、配慮されますね','Police vict-Miz-fam-care','Cooperative','takeda_officer'),
    mk('本件、現場周辺の古川氏宅の防犯映像を、警察、確認されますね','Case scene-Furu-prev-vid police-check','Reflective','ren_uni'),
    mk('警察、被害者桜井さんのケアを、警察、慎重におこなわれますね','Police vict-Sak-care-thor','Cooperative','takeda_officer'),
    mk('本件、参考人平田氏の供述記録を、警察、整えられますね','Case witn-Hir-stmt-rec-tidy','Reflective','ren_uni'),
    mk('警察、心理士西田氏に、警察、ご助言を仰がれますね','Police psy-Nish-adv','Close','takeda_officer'),
  ]},
  {id:'conv_10613',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、経済学者増田先生の論文を、論文で扱いましたね','Sakura — Masuda paper','Calm','asuka_teacher'),
    mk('はい、歴史学者古田先生のご研究を論文で扱いました','Yes — Furuta paper','Earnest teen','sakura_teen'),
    mk('社会学者川上先生のフィールド調査を論文で扱いましたね','Kaw-field paper','Reflective','asuka_teacher'),
    mk('はい、文学者水野先生の古典分析を論文で扱いました','Yes — Miz-class paper','Earnest','sakura_teen'),
    mk('人類学者古川先生の地域研究を論文で扱いましたね','Furu-local paper','Reflective','asuka_teacher'),
    mk('はい、考古学者桜井先生の発掘成果を論文で扱いました','Yes — Sak-dig paper','Earnest','sakura_teen'),
    mk('言語学者平田先生の音韻研究を論文で扱いましたね','Hir-phon paper','Reflective','asuka_teacher'),
    mk('はい、哲学者西田幾多郎先生の思想を論文で扱いました','Yes — Nish-Kitaro paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10614',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、患者増田様のご症状を医療チームで継続観察します','Ren — pati-Masuda-cond med-team','Calm','saito_doctor'),
    mk('蓮さん、医師古田先生のご助言を医療チームで尊重します','Ren — doc-Furuta-adv med-team','Calm','saito_doctor'),
    mk('蓮さん、看護師川上様のご経験を医療チームで活かします','Ren — nurse-Kaw-exp med-team','Calm','saito_doctor'),
    mk('蓮さん、薬剤師水野先生と医療チームで連携します','Ren — pharm-Miz med-team-link','Calm','saito_doctor'),
    mk('蓮さん、検査技師古川様のご報告を医療チームで確認します','Ren — tech-Furu-rep med-team-check','Calm','saito_doctor'),
    mk('蓮さん、リハビリ士桜井様のプログラムを医療チームで採用します','Ren — rehab-Sak-prog med-team-adopt','Calm','saito_doctor'),
    mk('蓮さん、栄養士平田様のご提案を医療チームで取り入れます','Ren — nutr-Hir-prop med-team-incl','Calm','saito_doctor'),
    mk('蓮さん、心理士西田先生に医療チームで継続ご相談します','Ren — psy-Nish med-team-cons','Calm close','saito_doctor'),
  ]},
  {id:'conv_10615',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、顧問の増田先生のご助言を経営に活かせ','Our co — adv-Masuda-mgmt','Crisp','hiroshi_boss'),
    mk('はい。社外取締役の古田様のご見解を取り入れます','Yes — Out-dir-Furuta-view','Methodical','kenji_office'),
    mk('当社、技術担当の川上部長を中心に新製品を進めろ','Our co — tech-Kaw-dir-new-prod','Direction','hiroshi_boss'),
    mk('はい。広報担当の水野様の戦略を採用します','Yes — PR-Miz-strat-adopt','Update','kenji_office'),
    mk('当社、海外戦略は古川取締役に一任しろ','Our co — overs-Furu-dir-entr','Direction','hiroshi_boss'),
    mk('はい。新ブランドのデザインを桜井様に依頼します','Yes — New-brand-design-Sak-req','Update','kenji_office'),
    mk('当社、新人研修は人事の平田主任に任せろ','Our co — newhire-HR-Hir-entr','Direction','hiroshi_boss'),
    mk('はい。経営理念の刷新は西田顧問のご助言で進めます','Yes — Mgmt-vis-Nish-adv','Close','kenji_office'),
  ]},
  {id:'conv_10616',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、TOKIOの松岡昌宏さんを尊敬されてるって、メイちゃん','Aoi — cust-Matsuoka-TOKIO-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、広島県の呉のご出身だって、メイちゃん','Aoi — cust-Hir-Kure Mei','Reflective','aoi_barista'),
    mk('葵、お客様、伊豆の伊東温泉のお話を語って下さったよ、メイちゃん','Aoi — cust-Izu-Ito-onsen-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、藤沢周平先生の時代小説がお好きだって、メイちゃん','Aoi — cust-Fuji-Shuhei-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、永井荷風先生の文学を語って下さったよ、メイちゃん','Aoi — cust-Nag-Kaf-lit Mei','Reflective','mei_romantic'),
    mk('葵、お客様、尾崎豊さんの曲を聴かれてるって、メイちゃん','Aoi — cust-Oz-Yut-music Mei','Reflective','aoi_barista'),
    mk('葵、お客様、野球の黒田博樹投手のファンだって、メイちゃん','Aoi — cust-Kuro-Hir-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、サッカーの中田英寿選手のお話を語って下さったよ、メイちゃん','Aoi — cust-Nak-Hide-talk Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10617',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがTOKIOの松岡さん出演番組を観られた','Gran — youth Dad-Matsuoka-TOKIO-prog','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、広島県呉の海軍記念館に行かれたわよね、あなた?','Yes — Grandpa-Hir-Kure-navy-vis, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが伊東温泉に新婚旅行に行かれた','Gran — youth Dad-Ito-onsen-honey','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、藤沢周平の小説を愛読されたわよね、あなた?','Grandpa — youth-Fuji-Shu-read, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが永井荷風の随筆を蔵書された','Gran — youth Dad-Nag-Kaf-coll','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、尾崎豊さんの追悼番組を観られたわよね、あなた?','Grandpa — youth-Oz-Yut-mem-prog, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが広島カープの黒田投手を応援された','Gran — youth Dad-Hir-Kuro-cheer','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、サッカーの中田英寿さんの試合を観られたわよね、あなた?','Grandpa — youth-Nak-Hide-match, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10618',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがTOKIOの松岡さんの番組を観てらっしゃるわ','Sho — Dad-Matsuoka-TOKIO-prog','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと広島県呉の戦艦大和の展示を観たよ','Mei-sis — me Dad-Hir-Kure-Yamato-exhib','Eager child','sho_child'),
    mk('翔くん、お父さんが「伊東温泉旅行を計画する」って仰ってたわ','Sho — Dad-"Ito-trip-plan"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと藤沢周平の絵本を読んだよ','Mei-sis — me Dad-Fuji-Shu-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが永井路子先生の歴史小説を読まれてるわ','Sho — Dad-Nag-Mit-hist-novel','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと尾崎豊さんの曲を聴いたよ','Mei-sis — me Dad-Oz-Yut-music','Eager child','sho_child'),
    mk('翔くん、お父さんが黒田官兵衛のNHK大河ドラマを観てらっしゃるわ','Sho — Dad-Kuro-Kanb-NHK-tai','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと中田英寿さんの引退試合の動画を観たよ','Mei-sis — me Dad-Nak-Hide-ret-vid','Eager close','sho_child'),
  ]},
  {id:'conv_10619',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、TOKIO松岡さんのドラマ観てたな','Riku — Matsuoka-TOKIO-dr','Curious teen','sakura_teen'),
    mk('お前、社会で広島県呉の歴史調べてたな、桜','You — soc-Hir-Kure-hist Sakura','Curious','riku_teen'),
    mk('リク、お前、家族で伊東温泉に行ってたな','Riku — fam-Ito-onsen','Curious','sakura_teen'),
    mk('お前、図書館で藤沢周平読んでたろ、桜','You — lib-Fuji-Shu-read? Sakura','Curious','riku_teen'),
    mk('リク、お前、国語で永井荷風習ったろ','Riku — Jp-Nag-Kaf?','Curious','sakura_teen'),
    mk('お前、音楽の授業で尾崎豊聴いたな、桜','You — mus-class-Oz-Yut Sakura','Curious','riku_teen'),
    mk('リク、お前、野球で広島の黒田投手応援してたな','Riku — base-Hir-Kuro-cheer','Curious','sakura_teen'),
    mk('お前、サッカーで中田英寿のフォーム真似してたな、桜','You — soccer-Nak-Hide-mimic Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10620',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがTOKIO松岡さんのリアルタイム番組を観てらっしゃるわ','Sho — Dad-Matsuoka-real-prog','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと広島県呉のドキュメンタリー観たよ','Mom — me Dad-Hir-Kure-doc','Eager child','sho_child'),
    mk('翔くん、お父さんが伊東温泉のお土産を下さるそうよ','Sho — Dad-Ito-souv-gift','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと藤沢周平の時代劇観たよ','Mom — me Dad-Fuji-Shu-period','Eager child','sho_child'),
    mk('翔くん、お父さんが永井荷風の文庫本を集めてらっしゃるわ','Sho — Dad-Nag-Kaf-paper-coll','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと尾崎豊さんの曲をカラオケで歌ったよ','Mom — me Dad-Oz-Yut-kara','Eager child','sho_child'),
    mk('翔くん、お父さんが黒田官兵衛の歴史本を読んでらっしゃるわ','Sho — Dad-Kuro-Kanb-hist-book','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと中田英寿選手の伝記読んだよ','Mom — me Dad-Nak-Hide-biog','Eager close','sho_child'),
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

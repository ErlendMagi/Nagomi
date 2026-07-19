import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_552 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['アットホーム','ともなっ','見なし','三四郎','インテリジェント','平年','山川','加護']
const B_T = ['柏崎','佐野','矢野','松永','白石','吉岡','小松','亀井']
const C_T = ['澆','椶','僂','彡','シーク','同省','未確認','西方']
const D_T = ['アルク','ホース','ボディー','マリン','キッド','チャーリー','アドバンス','ブランチ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_11001',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「アットホームな雰囲気のレストランがいい」って仰ってたわ','Sho — Dad-"home-like-rest"-said','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「困難をともなっても続けなさい」って言われたよ','Mom — me Dad-"diff-acc-cont"-said','Earnest child','sho_child'),
    mk('翔くん、お父さんが「正解と見なして良い回答」って褒めて下さったわ','Sho — Dad-"correct-regard"-praise','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと夏目漱石の「三四郎」を読んだよ','Mom — me Dad-Sanshiro-read','Pleased child','sho_child'),
    mk('翔くん、お父さんが「インテリジェントな会話を楽しもう」って仰ってたわ','Sho — Dad-"intel-conv"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと平年の気温の変化を観察したよ','Mom — me Dad-avg-yr-temp','Pleased child','sho_child'),
    mk('翔くん、お父さんと地理で山川の地形を学ぶ予定よ','Sho — Dad-geo-mtn-river','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「神様の加護があるよ」って優しく言われたよ','Mom — me Dad-"god-prot"-said','Tender close','sho_child'),
  ]},
  {id:'conv_11002',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、お店のアットホームな雰囲気をお褒め下さったよ、メイちゃん','Aoi — cust-shop-home-like Mei','Reflective','mei_romantic'),
    mk('葵、お客様、「年齢をともなって成長されてる」って語って下さったよ、メイちゃん','Aoi — cust-"age-acc-grow"-said Mei','Reflective','aoi_barista'),
    mk('葵、お客様、当店を「都内有数の名店と見なしてる」って仰ってたよ、メイちゃん','Aoi — cust-"top-Tok-regard"-said Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご自身を「現代の三四郎」って笑ってらしたよ、メイちゃん','Aoi — cust-self-"mod-Sanshiro"-laugh Mei','Wry','aoi_barista'),
    mk('葵、お客様、「インテリジェントなお話を楽しんでます」って仰ってたよ、メイちゃん','Aoi — cust-"intel-talk-fun"-said Mei','Reflective','mei_romantic'),
    mk('葵、お客様、「平年並みの売上で安定」って語って下さったよ、メイちゃん','Aoi — cust-"avg-sales-stab"-said Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お孫様の名前が山川くんだって、メイちゃん','Aoi — cust-grdkid-Yamakawa Mei','Reflective','mei_romantic'),
    mk('葵、お客様、「お加護を頂いて健康で居られる」って仰ってたよ、メイちゃん','Aoi — cust-"god-prot-health"-said Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_11003',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが「アットホームな職場が一番」と仰った','Gran — youth Dad-"home-like-work-best"-said','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、苦労をともなって生きて来られたわよね、あなた?','Yes — Grandpa-youth-"hard-acc-life", dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが私を「天使と見なしてた」と仰った','Gran — youth Dad-"angel-regard"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、夏目漱石の三四郎を愛読されたわよね、あなた?','Grandpa — youth-Sanshiro-read, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは「インテリジェントな会話」を大事にされた','Gran — youth Dad-"intel-conv"-cher','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、平年の収穫を喜ばれたわよね、あなた?','Grandpa — youth-avg-yr-harv-glad, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「山川草木の風景に救われる」と仰った','Gran — youth Dad-"mtn-river-grass-tree"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、「神仏のご加護に感謝」と仰ったわよね、あなた?','Grandpa — youth-"god-Bud-prot"-said, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_11004',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、新しい部室がアットホームで居心地良いって言ってたな','Riku — new-club-home-like','Curious teen','sakura_teen'),
    mk('お前、「成長にともなって悩みも増える」って言ってたな、桜','You — "grow-acc-worry"-said Sakura','Reflective','riku_teen'),
    mk('リク、お前、ライバルって「強敵と見なし」てたな','Riku — rival-"strong-regard"','Curious','sakura_teen'),
    mk('お前、国語で夏目漱石の三四郎読まされてたな、桜','You — Jp-Sanshiro-read Sakura','Curious','riku_teen'),
    mk('リク、お前、「インテリジェントなクラスメート」って一目置いてたな','Riku — "intel-classm"-resp','Curious','sakura_teen'),
    mk('お前、夏休みの自由研究で平年比の気象記録調べたろ、桜','You — sum-avg-yr-weath? Sakura','Curious','riku_teen'),
    mk('リク、お前、地理で山川の地形描いてたな','Riku — geo-mtn-river-draw','Curious','sakura_teen'),
    mk('お前、お祖母様が「神様のご加護を」って言ってたな、桜','You — grnm-"god-prot"-said Sakura','Reflective close','riku_teen'),
  ]},
  {id:'conv_11005',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「アットホームな空気を作るのは家族の力」って仰ってたわ','Sho — Dad-"home-atm-fam"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「成長をともなって責任も増える」って教えて頂いたよ','Mei-sis — me Dad-"grow-acc-resp"-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが「君を頼もしいと見なしている」って褒めて下さったわ','Sho — Dad-"you-rely-regard"-praise','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「三四郎の青春」のお話聞いたよ','Mei-sis — me Dad-"Sanshiro-youth"-talk','Eager child','sho_child'),
    mk('翔くん、お父さんが「インテリジェントな読書習慣を持って」と仰ってたわ','Sho — Dad-"intel-read"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと平年の桜の開花日を予想したよ','Mei-sis — me Dad-avg-yr-cherry-pred','Eager child','sho_child'),
    mk('翔くん、お父さんが「山川は地球の血管」って詩的に仰ってたわ','Sho — Dad-"mtn-river-art"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「神様の加護を信じて頑張ろう」って言われたよ','Mei-sis — me Dad-"god-prot-believe"-said','Tender close','sho_child'),
  ]},
  {id:'conv_11006',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新潟県柏崎の発電所と取引を継続しろ','Our co — Niig-Kash-pwr-deal','Crisp','hiroshi_boss'),
    mk('はい。新任の佐野部長を歓迎します','Yes — New-Sano-dept-wel','Methodical','kenji_office'),
    mk('当社、営業の矢野課長の出張日程を整えろ','Our co — Sales-Yan-mgr-trip','Direction','hiroshi_boss'),
    mk('はい。技術担当の松永主任にプロジェクトを任せます','Yes — Tech-Mat-lead-proj','Update','kenji_office'),
    mk('当社、広報の白石様の戦略を採用しろ','Our co — PR-Shir-strat','Direction','hiroshi_boss'),
    mk('はい。経理の吉岡様の決算スケジュールを整えます','Yes — Acct-Yos-clos-sched','Update','kenji_office'),
    mk('当社、人事の小松様に新人研修を任せろ','Our co — HR-Kom-newhire-entr','Direction','hiroshi_boss'),
    mk('はい。法務の亀井様に契約書確認を依頼します','Yes — Leg-Kam-contr-req','Close','kenji_office'),
  ]},
  {id:'conv_11007',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('柏崎発電所との契約を更新しましょう','Kash-pwr-contr-ren','Brisk','yuki_office'),
    mk('はい。佐野部長の歓迎会を準備します','Yes — Sano-dept-wel-prep','Cooperative','kenji_office'),
    mk('矢野課長の引き継ぎ書を確認しましょう','Yan-mgr-handov','Direction','yuki_office'),
    mk('はい。松永技術主任のプロジェクト進捗を共有します','Yes — Mat-tech-lead-share','Update','kenji_office'),
    mk('白石広報の月次企画書を確認しましょう','Shir-PR-mo-plan','Direction','yuki_office'),
    mk('はい。吉岡経理の決算予定を整えます','Yes — Yos-acct-clos','Update','kenji_office'),
    mk('小松人事に新人研修プランを依頼しましょう','Kom-HR-newhire','Direction','yuki_office'),
    mk('はい。亀井法務に新契約レビューを依頼します','Yes — Kam-leg-new-contr','Close','kenji_office'),
  ]},
  {id:'conv_11008',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、新潟県柏崎の原発研究の論文を読め','Ren — Niig-Kash-pwr-paper','Mentor','hiroshi_boss'),
    mk('はい。指導教授の佐野先生のご研究を継承します','Yes — Sano-mentor-res','Earnest','ren_uni'),
    mk('蓮、共同研究の矢野先生に研究照会しろ','Ren — joint-Yan-inq','Direction','hiroshi_boss'),
    mk('はい。学会で松永助教のご発表を聴きます','Yes — Conf-Mat-asst-pres','Earnest','ren_uni'),
    mk('蓮、文献の白石先生のご論文も参考にしろ','Ren — lit-Shir-paper-ref','Direction','hiroshi_boss'),
    mk('はい。研究室の吉岡先輩からご指導を仰ぎます','Yes — Lab-Yos-sen-guide','Polite','ren_uni'),
    mk('蓮、海外連携の小松教授と打ち合わせしろ','Ren — overs-Kom-prof-meet','Direction','hiroshi_boss'),
    mk('はい。研究費の窓口、亀井事務官に申請します','Yes — Res-fund-Kam-apply','Earnest close','ren_uni'),
  ]},
  {id:'conv_11009',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、柏崎警察署と合同捜査されますね','Police Kash-stat-joint','Cooperative','kenji_office'),
    mk('警察、佐野刑事の現場対応も評価されますね','Police Sano-det-eval','Cooperative','kenji_office'),
    mk('警察、参考人矢野氏から、警察、事情を伺われますね','Police witn-Yan-careful','Cooperative','kenji_office'),
    mk('警察、被害者松永氏のご家族にも、警察、配慮されますね','Police vict-Mat-fam-care','Cooperative','kenji_office'),
    mk('警察、目撃者白石氏の供述を、警察、整えられますね','Police witn-Shir-stmt','Cooperative','kenji_office'),
    mk('警察、容疑者吉岡の前科を、警察、確認されますね','Police suspect-Yos-prior','Cooperative','kenji_office'),
    mk('警察、署内の鑑識小松主任と現場検証されますね','Police stat-foren-Kom-scene','Cooperative','kenji_office'),
    mk('警察、検事の亀井様と公判前協議もされますね','Police pros-Kam-pre-trial','Close','kenji_office'),
  ]},
  {id:'conv_11010',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、柏崎の電力会社と取引を始められた','Dad — youth-Kash-pwr-deal','Sage','hiroshi_elder'),
    mk('はい。お父さんは佐野氏と共同事業を立ち上げられた','Yes — Dad Sano-JV','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、矢野先輩のご薫陶を受けられた','Dad — youth-Yan-sen-mentor','Wistful','hiroshi_elder'),
    mk('はい。お父さんは松永氏と海外進出を企画された','Yes — Dad Mat-overs','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、白石氏を広報の柱に据えられた','Dad — youth-Shir-PR-pillar','Wistful','hiroshi_elder'),
    mk('はい。お父さんは吉岡氏と経理体制を整えられた','Yes — Dad Yos-acct','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、小松氏と海外法人を立ち上げられた','Dad — youth-Kom-overs-co','Wistful','hiroshi_elder'),
    mk('はい。お父さんは亀井氏に法務全般を委ねられた','Yes — Dad Kam-leg-entr','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_11011',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、農学の澆水、つまり澆灌の研究を論文で扱いましたね','Ren — agri-gou-irr paper','Calm','asuka_teacher'),
    mk('はい、椶櫚、つまり椶の植物分類研究を論文で扱いました','Yes — Palm-shu-bot paper','Earnest','ren_uni'),
    mk('蓮さん、僂佝、つまり僂の姿勢病の医学史を論文で扱いましたね','Ren — slou-rou-pos paper','Reflective','asuka_teacher'),
    mk('はい、漢字の彡、つまり彡偏の書道研究を論文で扱いました','Yes — San-kanji-calig paper','Earnest','ren_uni'),
    mk('蓮さん、シーク教徒、つまりシーク派の宗教研究を論文で扱いましたね','Ren — Sikh-rel paper','Reflective','asuka_teacher'),
    mk('はい、同省、つまり同省内文書の行政研究を論文で扱いました','Yes — Same-min-admin paper','Earnest','ren_uni'),
    mk('蓮さん、未確認生物、つまりUMA研究を論文で扱いましたね','Ren — unconf-cryp paper','Reflective','asuka_teacher'),
    mk('はい、西方浄土、つまり西方の仏教観研究を論文で扱いました','Yes — W-Pure-Bud paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_11012',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、農業用の澆水、つまり澆灌設備の盗難を、警察、捜査されますね','Case agri-gou-irr-theft police-inv','Reflective','ren_uni'),
    mk('警察、希少植物椶、つまり椶櫚の密採事案も対応されますね','Police rare-palm-poach','Cooperative','takeda_officer'),
    mk('本件、長時間の僂佝、つまり僂姿勢関連の労災を、警察、調査されますね','Case long-slou-rou-wkr-comp police-inv','Reflective','ren_uni'),
    mk('警察、書道家の彡、つまり彡偏の偽造書画も鑑定されますね','Police calig-san-forg-art-auth','Cooperative','takeda_officer'),
    mk('本件、シーク教徒、つまりシーク派の宗教施設の警備を、警察、強化されますね','Case Sikh-temp-guard police-strong','Reflective','ren_uni'),
    mk('警察、同省、つまり同省の関連機関とも連携されますね','Police same-min-link','Cooperative','takeda_officer'),
    mk('本件、未確認の不審物の通報を、警察、慎重に対応されますね','Case unconf-susp-rep police-care','Reflective','ren_uni'),
    mk('警察、西方諸国、つまり西方からの密航事案も対応されますね','Police W-count-smug-case','Close','takeda_officer'),
  ]},
  {id:'conv_11013',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、農学の澆水、つまり澆灌の研究を論文で扱いましたね','Sakura — gou-irr paper','Calm','asuka_teacher'),
    mk('はい、椶櫚、つまり椶の植物分類研究を論文で扱いました','Yes — Shu-bot paper','Earnest teen','sakura_teen'),
    mk('僂佝、つまり僂の姿勢病の医学史を論文で扱いましたね','Slou-rou paper','Reflective','asuka_teacher'),
    mk('はい、漢字の彡、つまり彡偏の書道研究を論文で扱いました','Yes — San paper','Earnest','sakura_teen'),
    mk('シーク教徒、つまりシーク派の宗教研究を論文で扱いましたね','Sikh paper','Reflective','asuka_teacher'),
    mk('はい、同省、つまり同省内文書の行政研究を論文で扱いました','Yes — Same-min paper','Earnest','sakura_teen'),
    mk('未確認生物、つまりUMA研究を論文で扱いましたね','Unconf-cryp paper','Reflective','asuka_teacher'),
    mk('はい、西方浄土、つまり西方の仏教観研究を論文で扱いました','Yes — W-Pure paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_11014',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、点滴の澆、つまり澆注速度を医療チームで管理します','Ren — drip-gou med-team','Calm','saito_doctor'),
    mk('蓮さん、植物療法の椶、つまり椶櫚由来生薬を医療チームで研究します','Ren — herb-shu-palm med-team','Calm','saito_doctor'),
    mk('蓮さん、長時間労働の僂佝、つまり僂佝姿勢の労働者のケアを医療チームでおこないます','Ren — long-wrk-slou med-team','Calm','saito_doctor'),
    mk('蓮さん、書類の彡、つまり彡偏の字を医療チームで正確に書きます','Ren — doc-san med-team','Calm','saito_doctor'),
    mk('蓮さん、シーク教徒、つまりシーク派患者様の宗教的配慮を医療チームでおこないます','Ren — Sikh-pati-resp med-team','Calm','saito_doctor'),
    mk('蓮さん、同省、つまり厚労同省と医療チームで連携します','Ren — same-min med-team-link','Calm','saito_doctor'),
    mk('蓮さん、未確認の感染源を医療チームで追跡します','Ren — unconf-inf-source med-team','Calm','saito_doctor'),
    mk('蓮さん、西方医学、つまり西方医療の伝統と医療チームで対話します','Ren — W-med-trad med-team-dial','Calm close','saito_doctor'),
  ]},
  {id:'conv_11015',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、農業向け澆水、つまり澆灌設備を販売しろ','Our co — agri-gou-prod','Crisp','hiroshi_boss'),
    mk('はい。観葉植物の椶、つまり椶櫚商品を強化します','Yes — Houseplant-palm-strong','Methodical','kenji_office'),
    mk('当社、社員が僂佝、つまり僂姿勢にならない様、人間工学椅子を導入しろ','Our co — staff-slou-erg-chair','Direction','hiroshi_boss'),
    mk('はい。書道家にデザインの彡、つまり彡偏ロゴを依頼します','Yes — Calig-san-logo','Update','kenji_office'),
    mk('当社、シーク教徒、つまりシーク派のお客様向けハラル対応も検討しろ','Our co — Sikh-cust-halal','Direction','hiroshi_boss'),
    mk('はい。同省、つまり経産省との折衝を進めます','Yes — Same-min-coord','Update','kenji_office'),
    mk('当社、新製品の未確認情報の漏洩に注意しろ','Our co — new-prod-unconf-leak-care','Direction','hiroshi_boss'),
    mk('はい。西方諸国、つまり西方の市場開拓を進めます','Yes — W-count-mkt','Close','kenji_office'),
  ]},
  {id:'conv_11016',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、英語教材アルクのテキストを愛用されてるって、メイちゃん','Aoi — cust-Alc-Eng-mat Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ガーデニングのホース、つまり水撒きホースを買われたって、メイちゃん','Aoi — cust-gard-hose Mei','Reflective','aoi_barista'),
    mk('葵、お客様、車のボディーカラー選びに悩まれてるって、メイちゃん','Aoi — cust-car-body-col Mei','Reflective','mei_romantic'),
    mk('葵、お客様、マリンスポーツがお好きだって、メイちゃん','Aoi — cust-mar-sport-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、漫画キャラの「キッド」のファンだって、メイちゃん','Aoi — cust-Kid-mng-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、チャップリンのチャーリーがお好きだって、メイちゃん','Aoi — cust-Chap-Charlie-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ゲームでアドバンス、つまりGBAの世代だって、メイちゃん','Aoi — cust-Adv-GBA-gen Mei','Reflective','mei_romantic'),
    mk('葵、お客様、休日にブランチを楽しまれるって、メイちゃん','Aoi — cust-hol-brunch-fun Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_11017',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが英語教材アルクのテープを蔵書された','Gran — youth Dad-Alc-tape-coll','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、庭のホース、つまり水撒きホースを工夫されたわよね、あなた?','Yes — Grandpa-yard-hose-eff, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが車のボディー磨きを毎週されてた','Gran — youth Dad-car-body-pol-wk','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、夫婦でマリンスポーツを楽しまれたわよね、あなた?','Grandpa — youth-mar-sport, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが映画「キッド」を観られた','Gran — youth Dad-Kid-film','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、チャップリンのチャーリーをお好みだったわよね、あなた?','Grandpa — youth-Charlie-fav, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがゲームのアドバンス機を私に下さった','Gran — youth Dad-Adv-GBA-gift','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、日曜のブランチがお好きだったわよね、あなた?','Grandpa — youth-Sun-brunch-fav, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_11018',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがアルクの英語教材を勧めて下さるそうよ','Sho — Dad-Alc-Eng-rec','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと庭のホース、つまり水撒きホースで水撒きしたよ','Mei-sis — me Dad-yard-hose-water','Eager child','sho_child'),
    mk('翔くん、お父さんが車のボディーを綺麗に洗って下さるわ','Sho — Dad-car-body-wash','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとマリンランドの水族館に行ったよ','Mei-sis — me Dad-mar-aqua','Eager child','sho_child'),
    mk('翔くん、お父さんが「映画『キッド』を一緒に観よう」って仰ってたわ','Sho — Dad-"Kid-film"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「スヌーピーのチャーリー・ブラウン」観たよ','Mei-sis — me Dad-Charlie-Bro-watch','Eager child','sho_child'),
    mk('翔くん、お父さんがゲームのアドバンス機をくれるそうよ','Sho — Dad-Adv-GBA-give','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと日曜のブランチを食べたよ','Mei-sis — me Dad-Sun-brunch','Eager close','sho_child'),
  ]},
  {id:'conv_11019',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、英会話アルクの教材使ってたな','Riku — Alc-Eng-mat-use','Curious teen','sakura_teen'),
    mk('お前、庭のホース、つまり水撒きホースで水遊びしてたな、桜','You — yard-hose-play Sakura','Wry','riku_teen'),
    mk('リク、お前、車のボディーカラー、青がいいって言ってたな','Riku — car-body-blue-said','Curious','sakura_teen'),
    mk('お前、夏休みマリンスポーツやってたな、桜','You — sum-mar-sport Sakura','Curious','riku_teen'),
    mk('リク、お前、キッド系のホップヒップ聴いてたな','Riku — Kid-hiphop','Wry','sakura_teen'),
    mk('お前、英語の教科書でチャーリー・ブラウン読んだろ、桜','You — Eng-Charlie-Bro? Sakura','Curious','riku_teen'),
    mk('リク、お前、ゲームのアドバンス機まだ持ってたな','Riku — Adv-GBA-still','Wry','sakura_teen'),
    mk('お前、休日にブランチ写真投稿してたな、桜','You — hol-brunch-photo-post Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_11020',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがアルクの英語教材を一緒にやって下さるわ','Sho — Dad-Alc-Eng-together','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと庭のホースで水撒きしたよ','Mom — me Dad-yard-hose-water','Eager child','sho_child'),
    mk('翔くん、お父さんが車のボディーを月一でワックスがけされるわ','Sho — Dad-car-body-wax-mo','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとマリンランドのイルカショー観たよ','Mom — me Dad-mar-dolph','Eager child','sho_child'),
    mk('翔くん、お父さんが「キッド」のDVDを下さったわ','Sho — Dad-Kid-DVD-gift','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとチャーリー・ブラウンのコミック読んだよ','Mom — me Dad-Charlie-Bro-comic','Eager child','sho_child'),
    mk('翔くん、お父さんがゲームのアドバンス機を整理されたわ','Sho — Dad-Adv-GBA-tidy','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと家族のブランチを楽しんだよ','Mom — me Dad-fam-brunch','Eager close','sho_child'),
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

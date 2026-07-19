import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_407 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['貰い','こんど','赤ん坊','終り','ゴメン','歌わ','ここら','行進']
const B_T = ['公庫','汎用','中級','勘案','解禁','焼却','税法','公述']
const C_T = ['列島','知覚','垂直','特異','不利益','中枢','著しい','ノード']
const D_T = ['セクシー','グッド','軍団','不気味','嗜好','バリバリ','アイスランド','死な']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08101',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖母ちゃんから貰いものをいただいたよ','Sho — Grandma-gift received','Reflective','yumiko_mom'),
    mk('ママ、こんど、お祖母ちゃんちに行こうね','Mom — next-time Grandma-home go','Eager child','sho_child'),
    mk('翔くん、隣のお家に赤ん坊が生まれたわよ','Sho — next-home baby-born','Reflective','yumiko_mom'),
    mk('ママ、絵本の終りのページ、感動したよ','Mom — picture-book end-page moved','Reflective child','sho_child'),
    mk('翔くん、お父さんに、ゴメンってちゃんと言ってね','Sho — Dad "gomen" properly say','Direction','yumiko_mom'),
    mk('ママ、お風呂でぼく、歌わせてもらっていい?','Mom — bath me sing-allow?','Eager child','sho_child'),
    mk('翔くん、ここらへんで、お休みしようね','Sho — around-here break-let\'s','Direction','yumiko_mom'),
    mk('ママ、運動会の行進、緊張するよ','Mom — sports-day march tense','Wry close','sho_child'),
  ]},
  {id:'conv_08102',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様からお花の貰いものがあったよ、メイちゃん','Aoi — cust flower-gift received Mei','Animated','mei_romantic'),
    mk('葵、こんど、新メニューを試食してみない?メイちゃん','Aoi — next-time new-menu tasting? Mei','Eager','aoi_barista'),
    mk('葵、お客様、赤ん坊を連れて来てくれたよ、メイちゃん','Aoi — cust baby-brought Mei','Animated','mei_romantic'),
    mk('葵、お店の閉店時間、もうすぐ終りね、メイちゃん','Aoi — store closing soon end Mei','Reflective','aoi_barista'),
    mk('葵、配膳ミスのお客様に、ゴメンって謝ったわ、メイちゃん','Aoi — serve-mistake cust "gomen" apologized Mei','Reflective','mei_romantic'),
    mk('葵、お店のBGMでお客様も歌わせてくれたよ、メイちゃん','Aoi — store-BGM cust sing-allowed Mei','Animated','aoi_barista'),
    mk('葵、ここらでお茶しましょう、メイちゃん','Aoi — around-here tea-let\'s Mei','Practical','mei_romantic'),
    mk('葵、お祭りの行進、お店の前を通ったわよ、メイちゃん','Aoi — fest march store-front passed Mei','Animated close','aoi_barista'),
  ]},
  {id:'conv_08103',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが貰い物のお酒、お喜びだったぞ','Gran — youth Dad sake-gift glad','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、こんど旅行に行こうとおっしゃってたわよね、あなた?','Yes — Grandpa next-time travel said, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが赤ん坊だったお祖父ちゃんを抱いていたぞ','Gran — youth Dad baby-Grandpa holding','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、夏の終りに浴衣を着られたわよね、あなた?','Grandpa — summer-end yukata wore, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「ゴメン」と心からおっしゃったぞ','Gran — youth Dad "gomen" heartfelt said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お正月によく童謡を歌わせてくださったわよね、あなた?','Grandpa — NY children\'s-song sing-let, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、ここらの田んぼで遊んだぞ','Gran — youth around-here ricefield played','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、街の行進をご覧になったわよね、あなた?','Grandpa — city-march watched, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08104',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、誕生日に貰い物いっぱい?','Riku — birthday gift-many?','Curious teen','sakura_teen'),
    mk('お前、こんど一緒にカラオケ行こうぜ、桜','You — next-time karaoke-go Sakura','Eager','riku_teen'),
    mk('リク、お前の妹、まだ赤ん坊なんだろ?','Riku — your sister still baby?','Curious','sakura_teen'),
    mk('お前のテスト勉強、もう終りか?桜','You — test-prep already-end? Sakura','Curious','riku_teen'),
    mk('リク、お前、誰にもゴメン言わずに帰っちゃダメだぜ','Riku — anyone "gomen" without-going-home no','Direction','sakura_teen'),
    mk('お前、合唱コンクールで歌わなかったろ?桜','You — choir-comp didn\'t-sing? Sakura','Curious','riku_teen'),
    mk('リク、ここらに新しいラーメン屋できたぜ','Riku — around-here new ramen-shop','Animated','sakura_teen'),
    mk('お前、卒業式の行進、ちゃんとできるか?桜','You — graduation-march properly-can? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08105',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さん、お祖母ちゃんから貰い物のお菓子いただいたわ','Sho — Mei-sis Grandma sweet-gift received','Animated','mei_romantic'),
    mk('メイ姉さん、こんど、お店遊びに行ってもいい?','Mei-sis — next-time store-play OK?','Eager child','sho_child'),
    mk('翔くん、お父さんとお母さんが、赤ん坊の妹を迎えるのよ','Sho — Dad-Mom baby-sister welcome','Reflective','mei_romantic'),
    mk('メイ姉さん、絵本の終りのお話、教えてよ','Mei-sis — picture-book end-story tell','Curious child','sho_child'),
    mk('翔くん、お母さんに、ちゃんとゴメンって謝ってね','Sho — Mom properly "gomen" apologize','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お風呂で歌わせてもらってる','Mei-sis — me bath sing-allowed','Eager child','sho_child'),
    mk('翔くん、ここらの公園は安心して遊べるわ','Sho — around-here park safe-play','Reflective','mei_romantic'),
    mk('メイ姉さん、運動会の行進、ぼく頑張ったよ','Mei-sis — sports-day march tried','Proud close','sho_child'),
  ]},
  {id:'conv_08106',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、政策金融公庫の融資を活用しろ','Our co — policy-fin-corp loan utilize','Crisp','hiroshi_boss'),
    mk('はい。当社の汎用部品の需要が伸びております','Yes — Our general-parts demand grow','Methodical','kenji_office'),
    mk('社員研修は中級コースから始めよ','Staff-training intermediate-course start','Direction','hiroshi_boss'),
    mk('はい。当社、市場動向を勘案して戦略を立てます','Yes — Our market-trend consider strategy','Update','kenji_office'),
    mk('新製品の解禁、来月に予定しろ','New-product launch next-month plan','Direction','hiroshi_boss'),
    mk('はい。古い書類は焼却処分いたします','Yes — Old-doc burn-dispose','Update','kenji_office'),
    mk('税法改正に対応した経理体制を整えろ','Tax-law revision corresp accounting prep','Direction','hiroshi_boss'),
    mk('はい。公述人として国会で証言される件、対応いたします','Yes — Public-witness Diet-testimony handle','Close','kenji_office'),
  ]},
  {id:'conv_08107',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('政策金融公庫の窓口に相談しましょう','Policy-fin-corp counter consult','Brisk','yuki_office'),
    mk('はい。汎用部品で利益率を上げます','Yes — General-parts profit-rate raise','Cooperative','kenji_office'),
    mk('当社、中級層向け商品も拡充しましょう','Our co — intermediate-tier product expand','Direction','yuki_office'),
    mk('はい。顧客の声を勘案した試作品です','Yes — Cust-voice consider prototype','Update','kenji_office'),
    mk('解禁日のメディア対応、準備しましょう','Launch-day media prep','Direction','yuki_office'),
    mk('はい。機密書類の焼却スケジュールを組みました','Yes — Confid-doc burn schedule made','Update','kenji_office'),
    mk('税法のセミナーに社員を派遣しましょう','Tax-law seminar staff dispatch','Direction','yuki_office'),
    mk('はい。当社の公述案、まとめます','Yes — Our public-stmt compile','Close','kenji_office'),
  ]},
  {id:'conv_08108',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究費は政策公庫からも借りられる','Ren — research-fund policy-fin-corp loan','Mentor','hiroshi_boss'),
    mk('はい。汎用ソフトでデータ解析を進めております','Yes — General-soft data-analysis advance','Earnest','ren_uni'),
    mk('蓮、中級レベルの教材から始めろ','Ren — intermediate-textbook start','Direction','hiroshi_boss'),
    mk('はい。先行研究を勘案して論文を書きます','Yes — Prior-research consider paper','Polite','ren_uni'),
    mk('蓮、論文の解禁時期、教授と相談しろ','Ren — paper-release time prof-consult','Direction','hiroshi_boss'),
    mk('はい。不要なメモは焼却処分しました','Yes — Unneeded-memo burn-dispose','Earnest','ren_uni'),
    mk('蓮、税法の研究にも興味を持て','Ren — tax-law research interest','Direction','hiroshi_boss'),
    mk('はい。学会で公述を求められた場合に備えます','Yes — Conf public-stmt requested case prep','Earnest close','ren_uni'),
  ]},
  {id:'conv_08109',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、政策金融公庫絡みの詐欺に注意しております','Police policy-fin-corp fraud careful','Calm','takeda_officer'),
    mk('はい。汎用システムへの不正アクセスを警察、検知されたんですね','Yes — General-sys unauth-access police-detect','Cooperative','kenji_office'),
    mk('警察、中級捜査員の研修を実施しております','Police intermediate-officer training conduct','Procedural','takeda_officer'),
    mk('はい。警察、ご意見を勘案した方針、ありがたいです','Yes — Police opinion-consider policy grateful','Cooperative','kenji_office'),
    mk('警察、押収品の解禁時期を慎重に決めております','Police seized-release timing careful decide','Procedural','takeda_officer'),
    mk('はい。証拠保管庫の焼却防止、警察、強化されているそうですね','Yes — Evid-storage burn-prevent police-strengthen','Cooperative','kenji_office'),
    mk('警察、税法違反の捜査も担当しております','Police tax-law-violation inv handle','Procedural','takeda_officer'),
    mk('はい。被害者の公述を警察、適切に支援されますね','Yes — Victim public-stmt police appropriate support','Close','kenji_office'),
  ]},
  {id:'conv_08110',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、政策金融公庫から借入をされたぞ','Dad — founding policy-fin-corp borrow','Sage','hiroshi_elder'),
    mk('はい。お父さんは汎用品から始められました','Yes — Dad general-product started','Commitment','hiroshi_boss'),
    mk('お父さん、社員に中級資格を取らせる支援をなさった','Dad — staff intermediate-cert acquire-support','Wistful','hiroshi_elder'),
    mk('はい。お父さんは複数の要因を勘案して経営なさいました','Yes — Dad multi-factors consider mgmt','Reflective','hiroshi_boss'),
    mk('お父さん、新商品の解禁時にお祝いを開いたぞ','Dad — new-product launch celebrated','Wistful','hiroshi_elder'),
    mk('はい。古書類の焼却もお父さんが指示されました','Yes — Old-doc burn Dad-instructed','Reflective','hiroshi_boss'),
    mk('お父さん、税法改正をふまえて社員に説明された','Dad — tax-law revision-based staff-explained','Wistful','hiroshi_elder'),
    mk('はい。お父さんは業界団体で公述もなさいました','Yes — Dad industry-group public-stmt did','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08111',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、日本列島の地殻構造を論文で扱っていましたね','Ren — Japan-archipelago crust paper','Calm','asuka_teacher'),
    mk('はい、感覚と知覚の違いを論文で扱いました','Yes — sense-perception difference paper','Earnest','ren_uni'),
    mk('蓮さん、垂直農法を論文で扱っていましたね','Ren — vertical-farming paper','Reflective','asuka_teacher'),
    mk('はい、特異点の数学を論文で扱いました','Yes — singularity-math paper','Earnest','ren_uni'),
    mk('蓮さん、規制が消費者に与える不利益を論文で扱っていましたね','Ren — reg-cust-disadvantage paper','Engaged','asuka_teacher'),
    mk('はい、神経中枢の機能を論文で扱いました','Yes — nervous-center function paper','Earnest','ren_uni'),
    mk('技術進歩の著しい分野を論文で扱っていましたね','Tech-progress notable field paper','Reflective','asuka_teacher'),
    mk('はい、グラフ理論のノード構造を論文で扱いました','Yes — graph-theory node-structure paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08112',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、警察、列島規模の捜査網を敷いております','Case police archipelago-scale-net deploy','Calm','takeda_officer'),
    mk('警察、容疑者の知覚異常も慎重に評価されたんですね','Police suspect perceptual-abnormality careful eval','Curious','ren_uni'),
    mk('警察、垂直方向の建物落下事故を捜査中です','Police vertical-direction building-fall inv','Procedural','takeda_officer'),
    mk('本件、特異な手口を警察、解明されたんですね','Case unique-modus police-solve','Reflective','ren_uni'),
    mk('警察、犯罪被害者の不利益を補償する制度を支援しております','Police victim-disadvantage compensate-system support','Procedural','takeda_officer'),
    mk('本件、組織の中枢に警察、迫っておられるそうですね','Case org-core police-close','Reflective','ren_uni'),
    mk('警察、犯罪率の著しい地区を集中警備しております','Police crime-rate-notable area intense-guard','Procedural','takeda_officer'),
    mk('本件、通信ノードを警察、特定されたんですね','Case comm-node police-identify','Reflective close','ren_uni'),
  ]},
  {id:'conv_08113',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、日本列島の地殻構造を論文で扱っていましたね','Sakura — archipelago crust paper','Calm','asuka_teacher'),
    mk('はい、感覚と知覚の違いを論文で扱いました','Yes — sense-perception paper','Earnest teen','sakura_teen'),
    mk('垂直農法を論文で扱っていましたね','Vertical-farming paper','Reflective','asuka_teacher'),
    mk('はい、特異点の数学を論文で扱いました','Yes — singularity-math paper','Earnest','sakura_teen'),
    mk('規制が消費者に与える不利益を論文で扱っていましたね','Reg-cust-disadvantage paper','Engaged','asuka_teacher'),
    mk('はい、神経中枢の機能を論文で扱いました','Yes — nervous-center paper','Earnest','sakura_teen'),
    mk('技術進歩の著しい分野を論文で扱っていましたね','Tech-progress-notable paper','Reflective','asuka_teacher'),
    mk('はい、グラフ理論のノード構造を論文で扱いました','Yes — graph-node paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08114',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、列島各地の救急医療体制を医療チームで研究しております','Ren — archipelago each-area ER-system med-team research','Calm','saito_doctor'),
    mk('知覚障害の患者さんを医療チームは慎重に診ます','Perceptual-disorder patient med-team careful-diag','Patient','saito_doctor'),
    mk('貴院、垂直型の救急棟を建設されるそうですね、先生','Your-hosp vertical-ER bldg, sensei','Curious','ren_uni'),
    mk('はい、特異な症状の患者さんを医療チームは丁寧に診ます','Yes — unique-symptom patient med-team polite-diag','Patient','saito_doctor'),
    mk('医療費の不利益を被る患者さんに、貴院、配慮されますね、先生','Med-cost-disadvantage patient your-hosp consider, sensei','Reflective','ren_uni'),
    mk('はい、脳中枢の機能を医療チームは丁寧に評価します','Yes — brain-center med-team careful-eval','Patient','saito_doctor'),
    mk('医療の進歩が著しいと貴院も実感されますね、先生','Med-progress-notable your-hosp feel, sensei','Reflective','ren_uni'),
    mk('はい、地域医療のノード機能を貴院は担っておられます','Yes — region-med-node your-hosp serve, sensei','Reflective close','ren_uni'),
  ]},
  {id:'conv_08115',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、列島全土の販売網を強化しろ','Our co — archipelago-wide sales-net strengthen','Crisp','hiroshi_boss'),
    mk('はい。顧客の知覚に訴えるブランド作りをしております','Yes — Cust-perception appeal brand-build','Methodical','kenji_office'),
    mk('当社、垂直統合戦略を進めろ','Our co — vertical-integration advance','Direction','hiroshi_boss'),
    mk('はい。当社、特異な強みを明確化しております','Yes — Our unique-strength clarify','Update','kenji_office'),
    mk('お得意様の不利益となる施策は避けろ','VIP-disadvantage measure avoid','Direction','hiroshi_boss'),
    mk('はい。意思決定の中枢を東京に置きます','Yes — Decision-center Tokyo place','Update','kenji_office'),
    mk('当社、著しい成長を遂げるべし','Our co — notable-growth achieve must','Direction','hiroshi_boss'),
    mk('はい。物流ノードを再配置いたします','Yes — Logistics-node reposition','Close','kenji_office'),
  ]},
  {id:'conv_08116',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、新しい店員さん、セクシーな雰囲気ね、メイちゃん','Aoi — new-staff sexy-vibe Mei','Reflective','mei_romantic'),
    mk('葵、今日のお客様、お気に入りの「グッド」ボタン押してくれたよ、メイちゃん','Aoi — today-cust fave-good-button pushed Mei','Animated','aoi_barista'),
    mk('葵、ファンの軍団がアイドルを追いかけてるね、メイちゃん','Aoi — fan-army idol-chasing Mei','Reflective','mei_romantic'),
    mk('葵、深夜のお店、不気味な静けさあったよ、メイちゃん','Aoi — late-night store eerie-silence existed Mei','Wry','aoi_barista'),
    mk('葵、お客様の嗜好に合わせたメニュー、考えるね、メイちゃん','Aoi — cust-pref-match menu think Mei','Practical','mei_romantic'),
    mk('葵、新メニュー、バリバリ売れているよ、メイちゃん','Aoi — new-menu strong-selling Mei','Animated','aoi_barista'),
    mk('葵、アイスランド旅行、いつか行きたいね、メイちゃん','Aoi — Iceland-travel someday Mei','Eager','mei_romantic'),
    mk('葵、お客様、絶対に死なずに頑張りたい、と言ってたよ、メイちゃん','Aoi — cust absolutely don\'t-die try said Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08117',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、流行歌手はセクシーな衣装だったぞ','Gran — youth singer sexy-costume','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃんは「グッド」と英語で言われたわよね、あなた?','Yes — Grandpa "good" English-said, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが地元の軍団に入ろうとされたぞ','Gran — youth Dad local-army-join attempted','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、夜道で不気味な気配を感じられたわよね、あなた?','Grandpa — night-road eerie-presence felt, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お祖父ちゃんは食の嗜好が変わっていた','Gran — youth Grandpa food-pref changed','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お仕事をバリバリこなされたわよね、あなた?','Grandpa — work strong-handled, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがアイスランドの本を読んでいたぞ','Gran — youth Dad Iceland-book read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、誰も死なずに帰宅できることを願ってらしたわね、あなた?','Grandpa — no-one don\'t-die return-home wished, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08118',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お母さんのドレス、セクシーな雰囲気ね','Sho — Mom-dress sexy-vibe','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、テストで「グッド」って先生に言われたよ','Mei-sis — me test "good" teacher-said','Proud child','sho_child'),
    mk('翔くん、ヒーロー軍団のアニメ、好きでしょ?','Sho — hero-army anime like?','Reflective','mei_romantic'),
    mk('メイ姉さん、お化け屋敷の不気味な部屋、入ったよ','Mei-sis — haunted-house eerie-room entered','Animated child','sho_child'),
    mk('翔くん、お父さんの嗜好に合わせて晩ごはん作ろう','Sho — Dad-pref match dinner-make','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、勉強バリバリしてるよ','Mei-sis — me study strong-doing','Proud child','sho_child'),
    mk('翔くん、アイスランドって、すごく寒い国らしいわ','Sho — Iceland super-cold country','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんに、死なないで欲しいって言ったよ','Mei-sis — me Grandpa don\'t-die said','Tender close','sho_child'),
  ]},
  {id:'conv_08119',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前の彼女、セクシーだぜ','Riku — your gf sexy','Teasing teen','sakura_teen'),
    mk('お前、テストで「グッド」評価もらったろ?桜','You — test "good" rating got? Sakura','Curious','riku_teen'),
    mk('リク、お前、ヒーロー軍団のフィギュア集めてるな','Riku — hero-army figure-collect','Reflective','sakura_teen'),
    mk('お前、深夜の通学路、不気味じゃね?桜','You — late-night school-route eerie? Sakura','Curious','riku_teen'),
    mk('リク、お前の音楽嗜好、お洒落だぜ','Riku — your music-pref stylish','Praising','sakura_teen'),
    mk('お前、最近バリバリ勉強してんな、桜','You — recently strong-studying Sakura','Praising','riku_teen'),
    mk('リク、お前、アイスランドの自然見たいよな','Riku — Iceland-nature see-want?','Eager','sakura_teen'),
    mk('お前、ゾンビ映画、絶対死なずに最後まで生き残るキャラ好きだろ、桜','You — zombie-movie don\'t-die survive-char like Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08120',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、雑誌のモデル、セクシーな雰囲気ね','Sho — mag-model sexy-vibe','Reflective','yumiko_mom'),
    mk('ママ、ぼく、図画工作で「グッド」評価もらったよ','Mom — me art "good" rating got','Proud child','sho_child'),
    mk('翔くん、お父さんのお気に入りアニメ、ヒーロー軍団なのよ','Sho — Dad-fave anime hero-army','Reflective','yumiko_mom'),
    mk('ママ、お風呂場で不気味な音、聞こえたよ','Mom — bathroom eerie-sound heard','Wry child','sho_child'),
    mk('翔くん、お祖母ちゃんの食の嗜好、覚えてね','Sho — Grandma food-pref remember','Direction','yumiko_mom'),
    mk('ママ、ぼく、ピアノ、バリバリ練習してるよ','Mom — me piano strong-practice','Proud','sho_child'),
    mk('翔くん、アイスランドはオーロラが見える国らしいわ','Sho — Iceland aurora-visible country','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんに「死なないで」って手紙書いたの','Mom — me Grandpa "don\'t-die" letter wrote','Tender close','sho_child'),
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

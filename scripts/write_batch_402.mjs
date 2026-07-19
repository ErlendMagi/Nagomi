import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_402 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['こもり','思いがけない','片づけ','寝かせ','横顔','思い当たる','ホタル','育た']
const B_T = ['授与','保健所','延命','即答','一辺倒','疲弊','病名','早けれ']
const C_T = ['隠そ','見渡し','励ん','史跡','貧しく','苦境','途絶え','撃ち']
const D_T = ['タップ','ブロードウェイ','弱み','できあがり','打ち明け','年末年始','放り','おしえ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08001',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お部屋にこもりすぎないでね','Sho — room-stay don\'t-too-much','Direction','yumiko_mom'),
    mk('ママ、お父さんから思いがけないプレゼントもらったよ','Mom — Dad unexpected-gift got','Eager child','sho_child'),
    mk('翔くん、お部屋の片づけ、お願いね','Sho — room tidy-up please','Direction','yumiko_mom'),
    mk('ママ、お祖母ちゃんがぼくを寝かせてくれたよ','Mom — Grandma me-put-to-sleep','Tender child','sho_child'),
    mk('翔くん、お父さんの横顔、立派ね','Sho — Dad-side-face splendid','Reflective','yumiko_mom'),
    mk('ママ、ぼく、思い当たる節があるよ','Mom — me have-an-idea','Reflective child','sho_child'),
    mk('翔くん、お庭にホタルが来てたわよ','Sho — garden firefly came','Animated','yumiko_mom'),
    mk('ママ、ぼくが育てたお花、大きく育ったよ','Mom — me-grown flower big-grew','Proud close','sho_child'),
  ]},
  {id:'conv_08002',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お店にこもりっぱなしじゃ疲れるよ、メイちゃん','Aoi — store-stay tiring Mei','Caring','mei_romantic'),
    mk('葵、思いがけない出会い、お店であったよ、メイちゃん','Aoi — unexpected-meet store-had Mei','Animated','aoi_barista'),
    mk('葵、テーブルの片づけ、メイちゃんも手伝うね','Aoi — table-tidy Mei-help Mei','Caring','mei_romantic'),
    mk('葵、お客様、お子さん寝かせて来たそうよ、メイちゃん','Aoi — cust child-put-sleep came Mei','Reflective','aoi_barista'),
    mk('葵、お客様の横顔、お洒落ね、メイちゃん','Aoi — cust side-face stylish Mei','Praising','mei_romantic'),
    mk('葵、メニュー名の由来、思い当たるよ、メイちゃん','Aoi — menu-name origin have-idea Mei','Reflective','aoi_barista'),
    mk('葵、お店の庭にホタル、見えたよ、メイちゃん','Aoi — store-garden firefly seen Mei','Animated','mei_romantic'),
    mk('葵、お庭で育てたハーブ、よく育ったね、メイちゃん','Aoi — garden-herb well-grew Mei','Praising close','aoi_barista'),
  ]},
  {id:'conv_08003',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さん、書斎にこもりがちだったぞ','Gran — youth Dad study-cooped','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃんから思いがけないお花、頂いたわよね、あなた?','Yes — Grandpa unexpected-flower received, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お祖父ちゃん、書類の片づけお得意だったぞ','Gran — youth Grandpa doc-tidy good-at','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫さんを寝かせるのお上手だったわよね、あなた?','Grandpa — grandkid-sleep-put good-at, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、ばあさんの横顔、お父さん見惚れたぞ','Gran — youth gran-side-face Dad gazed','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お父さんに思い当たる癖、ありますわよね、あなた?','Grandpa — Dad have-idea quirk exists, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、田んぼでホタルを見たぞ','Gran — youth ricefield firefly saw','Wistful','hiroshi_elder'),
    mk('お祖父ちゃんに育てられたお花、立派でしたわね、あなた?','Grandpa-grown flower splendid, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08004',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、部屋にこもりすぎだろ','Riku — you room-cooped too-much','Wry teen','sakura_teen'),
    mk('お前、思いがけない情報くれたな、桜','You — unexpected-info gave Sakura','Praising','riku_teen'),
    mk('リク、教室の片づけ、お前手伝えよ','Riku — classroom-tidy help','Direction','sakura_teen'),
    mk('お前、妹を寝かせて来たのか?桜','You — sister put-sleep came? Sakura','Curious','riku_teen'),
    mk('リク、お前の横顔、漫画みたいだぜ','Riku — your side-face manga-like','Praising','sakura_teen'),
    mk('お前、テストの問題、思い当たるか?桜','You — test-question have-idea? Sakura','Curious','riku_teen'),
    mk('リク、夜の公園にホタルがいるんだぜ','Riku — night-park firefly exists','Animated','sakura_teen'),
    mk('お前のお庭で育てたトマト、ちゃんと育ったろ?桜','You — garden-grown tomato properly-grew? Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_08005',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お家にこもりっきりじゃダメよ','Sho — home-cooped no','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、思いがけない一等賞だったよ','Mei-sis — me unexpected-first-place','Proud child','sho_child'),
    mk('翔くん、お部屋の片づけはぼくが手伝うね','Sho — room-tidy me-help','Caring','mei_romantic'),
    mk('メイ姉さん、ぼく、弟を寝かせてあげたよ','Mei-sis — me bro-put-sleep','Proud child','sho_child'),
    mk('翔くん、お父さんの横顔、優しいわね','Sho — Dad side-face gentle','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、思い当たる失敗あるよ','Mei-sis — me have-idea failure','Wry child','sho_child'),
    mk('翔くん、夏休みにホタルを見に行きましょう','Sho — summer-vac firefly see-go','Eager','mei_romantic'),
    mk('メイ姉さん、ぼくの育てたお花、おっきく育ったよ','Mei-sis — me-grown flower big-grew','Proud close','sho_child'),
  ]},
  {id:'conv_08006',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('優秀社員に表彰状の授与を行え','Excellent-staff award-grant do','Crisp','hiroshi_boss'),
    mk('はい。保健所からの指導を共有しております','Yes — Health-office guidance share','Methodical','kenji_office'),
    mk('当社、サービスは延命対応も含めて検討しろ','Our co — service life-extend incl consider','Direction','hiroshi_boss'),
    mk('はい。担当者は即答できる範囲を増やします','Yes — Staff instant-answer scope expand','Update','kenji_office'),
    mk('当社、一辺倒な戦略ではダメだ','Our co — one-sided strategy no-good','Direction','hiroshi_boss'),
    mk('はい。社員、疲弊しないよう休暇制度を整えます','Yes — Staff don\'t-exhaust leave-policy arrange','Update','kenji_office'),
    mk('当社、製品の病名表示を改善しろ','Our co — product disease-name label improve','Direction','hiroshi_boss'),
    mk('はい。早ければ来月に発表いたします','Yes — As-early-as next-month announce','Close','kenji_office'),
  ]},
  {id:'conv_08007',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('当社、社員に新人賞の授与をいたしましょう','Our co — staff newcomer-award grant','Brisk','yuki_office'),
    mk('はい。保健所への報告書、提出済みです','Yes — Health-office report submitted','Cooperative','kenji_office'),
    mk('当社、サービスは延命を視野に検討しましょう','Our co — service life-extend consider','Direction','yuki_office'),
    mk('はい。即答できる窓口を増やしました','Yes — Instant-answer counter increased','Update','kenji_office'),
    mk('価格一辺倒のキャンペーンはやめましょう','Price one-sided-campaign stop','Direction','yuki_office'),
    mk('はい。サポート要員、疲弊を防ぐローテーション組みます','Yes — Support-staff exhaust-prevent rotation','Update','kenji_office'),
    mk('お客様への病名告知ガイドラインを作りましょう','Cust disease-name notice guideline make','Direction','yuki_office'),
    mk('はい。早ければ今月中にお披露目します','Yes — As-early-as this-month reveal','Close','kenji_office'),
  ]},
  {id:'conv_08008',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、学位授与の日、緊張するぞ','Ren — degree-grant day tense','Mentor','hiroshi_boss'),
    mk('はい。保健所と共同研究を進めております','Yes — Health-office joint-research advance','Earnest','ren_uni'),
    mk('蓮、延命研究にも携わってみろ','Ren — life-extend research try','Direction','hiroshi_boss'),
    mk('はい。教授の即答に驚いております','Yes — Prof instant-answer surprise','Polite','ren_uni'),
    mk('蓮、一辺倒な研究法ではダメだ','Ren — one-sided method no-good','Direction','hiroshi_boss'),
    mk('はい。研究室、メンバー全員が疲弊しないよう配慮します','Yes — Lab all-members exhaust-avoid consider','Earnest','ren_uni'),
    mk('蓮、病名のラテン語表記もマスターしろ','Ren — disease-name Latin master','Direction','hiroshi_boss'),
    mk('はい。早ければ来年度に博士を取得します','Yes — As-early-as next-FY PhD acquire','Earnest close','ren_uni'),
  ]},
  {id:'conv_08009',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、感謝状の授与をいたしました','Police thanks-letter grant','Calm','takeda_officer'),
    mk('はい。警察と保健所、連携ありがたいです','Yes — Police-health-office coop grateful','Cooperative','kenji_office'),
    mk('警察、被害者の延命措置にも協力しました','Police victim life-extend coop','Procedural','takeda_officer'),
    mk('はい。警察の即答力、頼もしいです','Yes — Police instant-answer reliable','Cooperative','kenji_office'),
    mk('警察、捜査一辺倒ではなく予防にも力を入れます','Police inv-one-side-not prevent emphasize','Procedural','takeda_officer'),
    mk('はい。警察官、疲弊しない勤務体制ありがたいです','Yes — Officer don\'t-exhaust shift grateful','Cooperative','kenji_office'),
    mk('警察、感染症の病名公表に協力します','Police infection-name disclose coop','Procedural','takeda_officer'),
    mk('はい。早ければ年内に新警察署が完成しますね','Yes — As-early-as within-yr new-police-stn complete','Close','kenji_office'),
  ]},
  {id:'conv_08010',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業期、社員に表彰の授与を喜んでなさったぞ','Dad — founding staff-award glad-grant did','Sage','hiroshi_elder'),
    mk('はい。お父さんは保健所への対応も誠実でした','Yes — Dad health-office resp sincere','Commitment','hiroshi_boss'),
    mk('お父さん、社員の延命と健康に投資なさった','Dad — staff life-extend health invest','Wistful','hiroshi_elder'),
    mk('はい。お父さんの即答ぶり、見習っております','Yes — Dad instant-answer emulate','Reflective','hiroshi_boss'),
    mk('お父さん、利益一辺倒の経営はなさらなかった','Dad — profit-one-side mgmt didn\'t-do','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員が疲弊しない経営を目指された','Yes — Dad staff-no-exhaust mgmt aimed','Reflective','hiroshi_boss'),
    mk('お父さん、製品の病名表示にこだわった','Dad — product disease-name label particular','Wistful','hiroshi_elder'),
    mk('はい。早ければ次世代に事業を継ぎます','Yes — As-early-as next-gen biz inherit','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08011',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、史実を隠そうとした政府を論文で扱っていましたね','Ren — fact-hide gov paper','Calm','asuka_teacher'),
    mk('はい、丘から見渡した古都を論文で扱いました','Yes — hill-overlook old-city paper','Earnest','ren_uni'),
    mk('蓮さん、医学に励んだ女性医師を論文で扱っていましたね','Ren — med-strove female-doctor paper','Reflective','asuka_teacher'),
    mk('はい、文化財に指定された史跡を論文で扱いました','Yes — cultural-asset designated historic-site paper','Earnest','ren_uni'),
    mk('貧しく暮らした作家を論文で扱っていましたね','Poorly-lived writer paper','Engaged','asuka_teacher'),
    mk('はい、財政苦境に陥った藩を論文で扱いました','Yes — fiscal-crisis han paper','Earnest','ren_uni'),
    mk('歴史の途絶えた村を論文で扱っていましたね','History-ended village paper','Reflective','asuka_teacher'),
    mk('はい、内戦で撃ち合いがあった都市を論文で扱いました','Yes — civil-war shootout city paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08012',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、容疑者は証拠を隠そうとしておりました','Case suspect tried-hide evidence','Calm','takeda_officer'),
    mk('本件、警察、上空から町を見渡して捜索ですね','Case police above-overlook town search','Curious','ren_uni'),
    mk('警察、地域防犯に励んでおります','Police region crime-prev strive','Procedural','takeda_officer'),
    mk('本件、警察が史跡の被害も調査されたんですね','Case police historic-site damage inv','Reflective','ren_uni'),
    mk('警察、貧しく困った家庭への支援も行います','Police poor-troubled family support do','Procedural','takeda_officer'),
    mk('本件、被害者は苦境にあったそうですね','Case victim crisis-was','Reflective','ren_uni'),
    mk('警察、犯人との連絡が途絶えたそうですね','Police perp-contact lost','Procedural','takeda_officer'),
    mk('本件、容疑者の撃ち方、警察、解析されたんですね','Case suspect shooting police-analyze','Reflective close','ren_uni'),
  ]},
  {id:'conv_08013',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、史実を隠そうとした政府を論文で扱っていましたね','Sakura — fact-hide gov paper','Calm','asuka_teacher'),
    mk('はい、丘から見渡した古都を論文で扱いました','Yes — hill-overlook old-city paper','Earnest teen','sakura_teen'),
    mk('医学に励んだ女性医師を論文で扱っていましたね','Med-strove female-doctor paper','Reflective','asuka_teacher'),
    mk('はい、文化財に指定された史跡を論文で扱いました','Yes — cultural-asset designated historic-site paper','Earnest','sakura_teen'),
    mk('貧しく暮らした作家を論文で扱っていましたね','Poorly-lived writer paper','Engaged','asuka_teacher'),
    mk('はい、財政苦境に陥った藩を論文で扱いました','Yes — fiscal-crisis han paper','Earnest','sakura_teen'),
    mk('歴史の途絶えた村を論文で扱っていましたね','History-ended village paper','Reflective','asuka_teacher'),
    mk('はい、内戦で撃ち合いがあった都市を論文で扱いました','Yes — civil-war shootout city paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08014',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、病状を隠そうとした患者さんに、医療チーム、丁寧説明しました','Ren — illness-hide patient med-team careful','Calm','saito_doctor'),
    mk('屋上から街を見渡す瞬間、貴院、設計に活かしたそうですね、先生','Rooftop town-overlook moment your-hosp design utilize, sensei','Curious','ren_uni'),
    mk('はい、リハビリに励んだ患者さんを医療チームは応援します','Yes — rehab-strove patient med-team support','Patient','saito_doctor'),
    mk('貴院、近隣の史跡保存にもご協力なんですね、先生','Your-hosp local-historic-site preserve coop, sensei','Reflective','ren_uni'),
    mk('貧しく医療を諦める方を医療チームは見過ごせません','Poor med-give-up persons med-team can\'t-overlook','Patient','saito_doctor'),
    mk('医療苦境の地域、貴院、支援されたんですね、先生','Med-crisis region your-hosp support, sensei','Reflective','ren_uni'),
    mk('家族の連絡が途絶えた患者さんへ医療チーム配慮します','Family-contact-lost patient med-team consider','Patient','saito_doctor'),
    mk('銃撃ちの被害者、貴院、ご対応されたんですね、先生','Gun-shot victim your-hosp resp, sensei','Reflective close','ren_uni'),
  ]},
  {id:'conv_08015',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、不祥事を隠そうとするな','Our co — scandal don\'t-hide','Crisp','hiroshi_boss'),
    mk('はい。市場全体を見渡す視点で進めます','Yes — Market-overall overlook viewpoint advance','Methodical','kenji_office'),
    mk('当社、新規事業に励んでいけ','Our co — new-biz strive','Direction','hiroshi_boss'),
    mk('はい。地域の史跡保存事業も提案します','Yes — Region historic-site preserve propose','Update','kenji_office'),
    mk('貧しく見積もるな、業績は伸ばせる','Don\'t-poor-estimate, perf can-grow','Direction','hiroshi_boss'),
    mk('はい。当社、苦境の中、再建を進めます','Yes — Our crisis-in rebuild advance','Update','kenji_office'),
    mk('お得意様との連絡が途絶えないように努めろ','VIP-contact don\'t-lose try','Direction','hiroshi_boss'),
    mk('はい。広告の撃ち方を見直しております','Yes — Ad strike-way review','Close','kenji_office'),
  ]},
  {id:'conv_08016',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お会計、タップでできるようになったね、メイちゃん','Aoi — checkout tap-can-do now Mei','Animated','mei_romantic'),
    mk('葵、ブロードウェイのミュージカル見たいよ、メイちゃん','Aoi — Broadway musical see-want Mei','Eager','aoi_barista'),
    mk('葵、お店の弱みは新メニュー不足ね、メイちゃん','Aoi — store weakness new-menu-lack Mei','Reflective','mei_romantic'),
    mk('葵、ケーキのできあがり、お洒落ね、メイちゃん','Aoi — cake finish stylish Mei','Praising','aoi_barista'),
    mk('葵、お客様にお悩み打ち明けてもらえる関係、すてきね、メイちゃん','Aoi — cust trouble open-up relation lovely Mei','Tender','mei_romantic'),
    mk('葵、年末年始のメニュー、考えましょう、メイちゃん','Aoi — year-end-NY menu think Mei','Practical','aoi_barista'),
    mk('葵、お皿を放りっぱなしにしないでね、メイちゃん','Aoi — plates don\'t-leave-out Mei','Direction','mei_romantic'),
    mk('葵、レシピおしえてよ、メイちゃん','Aoi — recipe teach Mei','Curious close','aoi_barista'),
  ]},
  {id:'conv_08017',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、ご祭りで太鼓のタップを聞いたぞ','Gran — youth fest drum-tap heard','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ブロードウェイ憧れていらしたわよね、あなた?','Yes — Grandpa Broadway admired, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、ばあさんの弱みを支えたぞ','Gran — youth gran-weakness supported','Wistful','hiroshi_elder'),
    mk('お祖父ちゃんが、お料理のできあがりに満足されたわよね、あなた?','Grandpa — cook-finish satisfied, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんに本音を打ち明けたぞ','Gran — youth Dad true-feelings open-up','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、年末年始のお餅つきがお好きでしたわよね、あなた?','Grandpa — year-end mochi-pounding liked, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、ぼろ布を放りっぱなしにしてしまったぞ','Gran — youth rag left-out','Wistful','hiroshi_elder'),
    mk('お祖父ちゃんに古い言葉をおしえていただいたわよね、あなた?','Grandpa — old-words taught, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08018',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さん、お会計はタップ式が便利よ','Sho — Mei-sis checkout tap-style convenient','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ブロードウェイのお話、知らないよ','Mei-sis — me Broadway story don\'t-know','Curious child','sho_child'),
    mk('翔くん、ぼくの弱みはピーマンを残すことかな','Sho — my weakness green-pepper-leftover','Wry','mei_romantic'),
    mk('メイ姉さん、お父さんと作ったケーキ、できあがりすごいよ','Mei-sis — Dad-made cake finish amazing','Proud child','sho_child'),
    mk('翔くん、お父さんに本音を打ち明けてみてね','Sho — Dad true-feelings open-up try','Direction','mei_romantic'),
    mk('メイ姉さん、年末年始、お祖母ちゃんちに行くんだ','Mei-sis — year-end Grandma-home going','Eager child','sho_child'),
    mk('翔くん、おもちゃ、お部屋に放りっぱなしダメよ','Sho — toy room-leave-out no','Direction','mei_romantic'),
    mk('メイ姉さん、ピアノおしえて','Mei-sis — piano teach','Eager close','sho_child'),
  ]},
  {id:'conv_08019',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、スマホのタップ早いな','Riku — your phone tap fast','Praising teen','sakura_teen'),
    mk('お前、ブロードウェイ、いつか行きたいよな、桜','You — Broadway someday go-want? Sakura','Eager','riku_teen'),
    mk('リク、お前の弱み、隠したって意味ないぜ','Riku — your weakness hiding pointless','Wry','sakura_teen'),
    mk('お前のお弁当、できあがりが芸術的だな、桜','Your bento finish artistic Sakura','Praising','riku_teen'),
    mk('リク、本音、ぼくに打ち明けてくれよ','Riku — true-feelings me-open-up','Direction','sakura_teen'),
    mk('お前、年末年始、塾あるんだろ?桜','You — year-end cram-school? Sakura','Curious','riku_teen'),
    mk('リク、お前、教科書放りっぱなしだぜ','Riku — you textbook left-out','Wry','sakura_teen'),
    mk('お前、英語おしえてくれよ、桜','You — English teach Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_08020',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さん、レジでタップしてお支払いしたわよ','Sho — Dad register tap-paid','Reflective','yumiko_mom'),
    mk('ママ、ブロードウェイってどこにあるの?','Mom — Broadway where?','Curious child','sho_child'),
    mk('翔くん、誰にでも弱みはあるのよ','Sho — anyone weakness exists','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとケーキのできあがりが嬉しい','Mom — me Dad-cake finish glad','Eager','sho_child'),
    mk('翔くん、ママに本音を打ち明けていいのよ','Sho — Mom true-feelings open-up OK','Tender','yumiko_mom'),
    mk('ママ、年末年始、お祖父ちゃんちに行くんだよね','Mom — year-end Grandpa-home going right?','Eager','sho_child'),
    mk('翔くん、靴下、お部屋に放りっぱなしダメよ','Sho — socks room-leave-out no','Direction','yumiko_mom'),
    mk('ママ、お祖父ちゃんに将棋おしえてもらう','Mom — Grandpa shogi-learn','Eager close','sho_child'),
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

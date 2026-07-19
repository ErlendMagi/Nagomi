import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_422 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['なんせ','わき','黒く','ひとりひとり','チョット','微笑み','初夏','自在']
const B_T = ['添削','並列','倍率','増資','商取引','仮称','用具','インプット']
const C_T = ['生殖','極度','入植','従属','太平洋戦争','払拭','多重','憎悪']
const D_T = ['ボウル','信州','舞踏','南極','ドリブル','遊園','ラスベガス','ポルノ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08401',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、なんせ初めての遠足だから、緊張するわよね','Sho — anyway-first-trip nervous','Caring','yumiko_mom'),
    mk('ママ、わきに荷物置いてもいい?','Mom — side-luggage place-OK?','Curious child','sho_child'),
    mk('翔くん、外が黒くなってきたから、お家に帰りましょう','Sho — outside-blackening home-return','Direction','yumiko_mom'),
    mk('ママ、お友達ひとりひとりにご挨拶したよ','Mom — friend-one-by-one greeted','Proud child','sho_child'),
    mk('翔くん、チョット待ってね、お父さんに電話するわ','Sho — wait-bit Dad-call','Practical','yumiko_mom'),
    mk('ママ、お父さんの微笑み、優しいね','Mom — Dad-smile gentle','Tender child','sho_child'),
    mk('翔くん、初夏のお祭りが待ち遠しいね','Sho — early-summer-fest look-forward','Reflective','yumiko_mom'),
    mk('ママ、お父さんが自在に絵を描かれるんだよ','Mom — Dad freely-draw','Eager close','sho_child'),
  ]},
  {id:'conv_08402',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、なんせ新メニュー初日だから、緊張するね、メイちゃん','Aoi — anyway-new-menu-day1 nervous Mei','Reflective','mei_romantic'),
    mk('葵、お客様、わきに荷物置く場所、欲しがってらしたよ、メイちゃん','Aoi — cust-side-luggage-place want Mei','Practical','aoi_barista'),
    mk('葵、コーヒー豆が黒く焼けたね、メイちゃん','Aoi — bean blackly-roasted Mei','Reflective','mei_romantic'),
    mk('葵、お客様ひとりひとりに丁寧な対応しようね、メイちゃん','Aoi — cust one-by-one polite-resp Mei','Direction','aoi_barista'),
    mk('葵、チョット休憩しない?メイちゃん','Aoi — bit-break? Mei','Caring','mei_romantic'),
    mk('葵、新人さんの微笑みが素敵ね、メイちゃん','Aoi — newcomer-smile lovely Mei','Praising','aoi_barista'),
    mk('葵、初夏のメニュー、考えようね、メイちゃん','Aoi — early-summer-menu think Mei','Eager','mei_romantic'),
    mk('葵、ハンドドリップを自在にできるようになったね、メイちゃん','Aoi — hand-drip freely-can Mei','Praising close','aoi_barista'),
  ]},
  {id:'conv_08403',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、なんせお父さんはお忙しかったぞ','Gran — youth anyway-Dad-busy','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、わきに本を積んでらしたわよね、あなた?','Yes — Grandpa side-book-piled, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんの髪が真っ黒く見えたぞ','Gran — youth Dad-hair real-black','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、家族ひとりひとりを大切にされたわよね、あなた?','Grandpa — family one-by-one cherished, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、チョットしたミスでお父さんが叱ったぞ','Gran — youth slight-mistake Dad-scolded','Wistful','hiroshi_elder'),
    mk('お祖父ちゃんのお顔の微笑み、忘れないわよね、あなた?','Grandpa — face-smile unforget, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、初夏のお祭り、楽しかったぞ','Gran — youth early-summer-fest fun','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、書もご自在にお書きになられたわよね、あなた?','Grandpa — calligraphy freely-wrote, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08404',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、なんせ初試合だから、緊張するよな','Riku — anyway-first-match nervous','Caring teen','sakura_teen'),
    mk('お前、わきに荷物いっぱい置いてるな、桜','You — side-luggage many Sakura','Curious','riku_teen'),
    mk('リク、お前のシューズ、黒くなってきたな','Riku — your-shoes blackening','Reflective','sakura_teen'),
    mk('お前、教室のひとりひとりに人気だぜ、桜','You — classroom one-by-one popular Sakura','Praising','riku_teen'),
    mk('リク、チョット待ってよ','Riku — wait-bit','Direction','sakura_teen'),
    mk('お前の微笑み、可愛いって言われてたぞ、桜','You — smile cute-said Sakura','Teasing','riku_teen'),
    mk('リク、初夏の合宿、楽しみだな','Riku — early-summer-camp look-forward','Eager','sakura_teen'),
    mk('お前、自在にスマホ操れるんだろ?桜','You — freely-phone-handle? Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_08405',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、なんせ夏休みだから、楽しもうね','Sho — anyway-summer-vac enjoy','Eager','mei_romantic'),
    mk('メイ姉さん、ぼく、おもちゃをわきに置いたよ','Mei-sis — me toy-side-placed','Practical child','sho_child'),
    mk('翔くん、外が黒くなってきたから、早く帰ろうね','Sho — outside-blackening early-return','Caring','mei_romantic'),
    mk('メイ姉さん、ぼくのクラスのひとりひとり、優しいよ','Mei-sis — me class one-by-one gentle','Reflective child','sho_child'),
    mk('翔くん、チョットおやつ食べる?','Sho — bit-snack eat?','Caring','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんの微笑みが好きだよ','Mei-sis — me Dad-smile like','Tender child','sho_child'),
    mk('翔くん、初夏のお花、お庭に咲いたわね','Sho — early-summer-flower garden-bloomed','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お絵かきが自在にできるよ','Mei-sis — me drawing-freely-can','Proud close','sho_child'),
  ]},
  {id:'conv_08406',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、原稿の添削を進めろ','Our co — manuscript-edit advance','Crisp','hiroshi_boss'),
    mk('はい。データを並列に処理しております','Yes — Data-parallel-process','Methodical','kenji_office'),
    mk('当社、応募倍率を上げる施策を検討しろ','Our co — entry-multiplier-raise consider','Direction','hiroshi_boss'),
    mk('はい。新規増資の準備を進めております','Yes — New-issuance prep advance','Update','kenji_office'),
    mk('当社、商取引の透明性を保て','Our co — commerce-transparency keep','Direction','hiroshi_boss'),
    mk('はい。新プロジェクトの仮称を決めました','Yes — New-project tentative-name decided','Update','kenji_office'),
    mk('社員用具の補充を確認しろ','Staff-equip-replenish verify','Direction','hiroshi_boss'),
    mk('はい。市場のインプットを社員と共有しております','Yes — Market-input staff-share','Close','kenji_office'),
  ]},
  {id:'conv_08407',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('社内文書の添削をシステム化しましょう','In-house-doc edit-system','Brisk','yuki_office'),
    mk('はい。複数案を並列に検討しております','Yes — Multi-plan parallel-consider','Cooperative','kenji_office'),
    mk('応募倍率を業界平均と比べましょう','Entry-multiplier industry-avg-compare','Direction','yuki_office'),
    mk('はい。増資のお知らせは投資家にも届けます','Yes — Issuance-notice investor-deliver','Update','kenji_office'),
    mk('国際商取引のルールを再確認しましょう','Intl-commerce-rule re-verify','Direction','yuki_office'),
    mk('はい。新店舗の仮称を社内、共有しました','Yes — New-store tentative-name in-house share','Update','kenji_office'),
    mk('社内の用具棚を整理しましょう','In-house equip-shelf organize','Direction','yuki_office'),
    mk('はい。お客様の声をインプットとして活かします','Yes — Cust-voice-input utilize','Close','kenji_office'),
  ]},
  {id:'conv_08408',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、教授の添削を真摯に受け止めろ','Ren — prof-edit sincere receive','Mentor','hiroshi_boss'),
    mk('はい。計算を並列で進めております','Yes — Calc-parallel-advance','Earnest','ren_uni'),
    mk('蓮、学会の倍率は年々上がっているぞ','Ren — conf-multiplier yearly-rise','Direction','hiroshi_boss'),
    mk('はい。研究費の増資申請を準備しております','Yes — Research-fund-issuance-apply prep','Polite','ren_uni'),
    mk('蓮、商取引契約も学んでおけ','Ren — commerce-contract learn','Direction','hiroshi_boss'),
    mk('はい。論文の仮称を考えております','Yes — Paper-tentative-name think','Earnest','ren_uni'),
    mk('蓮、実験用具を清潔に保て','Ren — experiment-equip clean-keep','Direction','hiroshi_boss'),
    mk('はい。多角的なインプットを取り入れます','Yes — Multi-angle-input incorporate','Earnest close','ren_uni'),
  ]},
  {id:'conv_08409',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、調書の添削を慎重に行います','Police statement-edit careful','Calm','takeda_officer'),
    mk('はい。警察、複数チーム並列捜査されたんですね','Yes — Police multi-team-parallel-inv','Curious','kenji_office'),
    mk('警察学校の応募倍率が上昇しております','Police-academy-entry-multiplier rises','Procedural','takeda_officer'),
    mk('はい。警察も信用組合の増資に注目ですね','Yes — Police credit-union-issuance attention','Cooperative','kenji_office'),
    mk('警察、商取引絡みの詐欺を捜査しております','Police commerce-related-fraud inv','Procedural','takeda_officer'),
    mk('はい。警察、容疑者の仮称をマスコミに伝えられましたね','Yes — Police suspect-tentative-name media-told','Cooperative','kenji_office'),
    mk('警察、押収用具を慎重に保管しております','Police seized-tool careful-preserve','Procedural','takeda_officer'),
    mk('はい。市民のインプットを警察、ご活用ですね','Yes — Citizen-input police-utilize','Close','kenji_office'),
  ]},
  {id:'conv_08410',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、自ら社員の文章を添削された','Dad — youth self-staff-text-edit','Sage','hiroshi_elder'),
    mk('はい。お父さんは複数事業を並列で進められた','Yes — Dad multi-biz-parallel-advance','Commitment','hiroshi_boss'),
    mk('お父さん、入社倍率の高い時代を生き抜かれた','Dad — entry-multiplier-high era survived','Wistful','hiroshi_elder'),
    mk('はい。お父さんは増資の判断を慎重に行われた','Yes — Dad issuance-decision careful','Reflective','hiroshi_boss'),
    mk('お父さん、商取引でお得意様の信頼を得られた','Dad — commerce VIP-trust-gained','Wistful','hiroshi_elder'),
    mk('はい。お父さんが新製品の仮称を考えられた話、伝説です','Yes — Dad new-product-tentative-name story legend','Reflective','hiroshi_boss'),
    mk('お父さん、社員の用具を自ら準備された','Dad — staff-equip self-prep','Wistful','hiroshi_elder'),
    mk('はい。お父さんが市場のインプットを大切にされた姿勢、引き継いでおります','Yes — Dad market-input cherish-stance inherit','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08411',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、動物の生殖行動を論文で扱っていましたね','Ren — animal-reproduction paper','Calm','asuka_teacher'),
    mk('はい、極度の貧困地域を論文で扱いました','Yes — extreme-poverty-region paper','Earnest','ren_uni'),
    mk('蓮さん、入植地の歴史を論文で扱っていましたね','Ren — settlement-history paper','Reflective','asuka_teacher'),
    mk('はい、従属国家の経済関係を論文で扱いました','Yes — subordinate-state econ-relation paper','Earnest','ren_uni'),
    mk('太平洋戦争の影響を論文で扱っていましたね','Pacific-War-impact paper','Engaged','asuka_teacher'),
    mk('はい、迷信の払拭運動を論文で扱いました','Yes — superstition-eliminate paper','Earnest','ren_uni'),
    mk('蓮さん、多重の人格障害を論文で扱っていましたね','Ren — multi-personality-disorder paper','Reflective','asuka_teacher'),
    mk('はい、戦時の憎悪の連鎖を論文で扱いました','Yes — wartime-hatred-chain paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08412',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、生殖関連の科学犯罪を警察、捜査中ですね','Case reproduction-sci-crime police-inv, gratitude','Curious','ren_uni'),
    mk('警察、極度の貧困層への詐欺を取り締まっております','Police extreme-poverty-class-fraud crack-down','Procedural','takeda_officer'),
    mk('本件、不法な入植地で起きた事件を警察、調査されたんですね','Case illegal-settlement event police-inv','Reflective','ren_uni'),
    mk('警察、組織犯罪の従属関係を解明しております','Police crime-org subord-relation solve','Procedural','takeda_officer'),
    mk('本件、太平洋戦争時代の遺品関連事件を警察、確認されましたね','Case Pacific-War-era heirloom-case police-verify','Reflective','ren_uni'),
    mk('警察、不安を払拭する広報を行っております','Police anxiety-eliminate PR do','Procedural','takeda_officer'),
    mk('本件、多重債務絡みの事件を警察、捜査中ですね','Case multi-debt-related-case police-inv','Reflective','ren_uni'),
    mk('警察、憎悪犯罪への対策を強化しております','Police hate-crime-counter strengthen','Close','takeda_officer'),
  ]},
  {id:'conv_08413',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、動物の生殖行動を論文で扱っていましたね','Sakura — animal-reproduction paper','Calm','asuka_teacher'),
    mk('はい、極度の貧困地域を論文で扱いました','Yes — extreme-poverty paper','Earnest teen','sakura_teen'),
    mk('入植地の歴史を論文で扱っていましたね','Settlement-history paper','Reflective','asuka_teacher'),
    mk('はい、従属国家の経済関係を論文で扱いました','Yes — subord-state paper','Earnest','sakura_teen'),
    mk('太平洋戦争の影響を論文で扱っていましたね','Pacific-War paper','Engaged','asuka_teacher'),
    mk('はい、迷信の払拭運動を論文で扱いました','Yes — superstition-elim paper','Earnest','sakura_teen'),
    mk('多重の人格障害を論文で扱っていましたね','Multi-personality paper','Reflective','asuka_teacher'),
    mk('はい、戦時の憎悪の連鎖を論文で扱いました','Yes — wartime-hatred paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08414',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、生殖医療を医療チームで丁寧に対応しております','Ren — reprod-med med-team polite-resp','Calm','saito_doctor'),
    mk('極度のストレスを抱える患者さんに、貴院、ケアを提供されますね、先生','Extreme-stress-patient your-hosp care, sensei','Curious','ren_uni'),
    mk('はい、戦後の入植者の心の傷を、医療チームで扱った経験があります','Yes — Post-war-settler heart-wound med-team-handled exp','Patient','saito_doctor'),
    mk('医療の従属関係を、貴院、解消されておられますね、先生','Med-subord-relation your-hosp-resolve, sensei','Reflective','ren_uni'),
    mk('はい、太平洋戦争の負傷者の医療記録を医療チームで保存しております','Yes — Pacific-War-injury med-record med-team preserve','Patient','saito_doctor'),
    mk('誤情報を払拭する啓発活動を、貴院、進めておられますね、先生','Misinfo-eliminate awareness your-hosp-advance, sensei','Reflective','ren_uni'),
    mk('はい、多重感染症の対応を医療チームで備えております','Yes — Multi-infection-resp med-team prep','Patient','saito_doctor'),
    mk('医療への憎悪を抱える患者さんに、貴院、寄り添われますね、先生','Med-hatred-patient your-hosp stay-close, sensei','Reflective close','ren_uni'),
  ]},
  {id:'conv_08415',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、生殖関連の健康商品を検討しろ','Our co — reprod-health-product consider','Crisp','hiroshi_boss'),
    mk('はい。極度に冷え込む地域向け商品を準備します','Yes — Extreme-cold-region product prep','Methodical','kenji_office'),
    mk('海外への入植形式の支店を検討しろ','Overseas-settlement-style-branch consider','Direction','hiroshi_boss'),
    mk('はい。下請けの従属関係を見直しております','Yes — Subcontract-subord-relation review','Update','kenji_office'),
    mk('当社、太平洋戦争記念事業に協賛しろ','Our co — Pacific-War-memorial-event sponsor','Direction','hiroshi_boss'),
    mk('はい。誤解を払拭する広報を強化しました','Yes — Misunderstand-eliminate PR strengthen','Update','kenji_office'),
    mk('多重に契約を結ぶ取引先には注意しろ','Multi-contract-vendor careful','Direction','hiroshi_boss'),
    mk('はい。憎悪表現の広告は社内で禁止しております','Yes — Hate-expression-ad in-house-banned','Close','kenji_office'),
  ]},
  {id:'conv_08416',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、新しいサラダボウル、お洒落だね、メイちゃん','Aoi — new salad-bowl stylish Mei','Praising','mei_romantic'),
    mk('葵、信州そばを新メニューに入れようね、メイちゃん','Aoi — Shinshu-soba new-menu Mei','Eager','aoi_barista'),
    mk('葵、お客様、社交舞踏のお話してたよ、メイちゃん','Aoi — cust social-dance-told Mei','Reflective','mei_romantic'),
    mk('葵、お客様の南極観測隊員、いらしたわね、メイちゃん','Aoi — cust Antarctic-team-member visited Mei','Animated','aoi_barista'),
    mk('葵、お客様、バスケのドリブル練習されてるんだって、メイちゃん','Aoi — cust basketball-dribble-practice Mei','Reflective','mei_romantic'),
    mk('葵、近所の遊園地、家族連れに人気よね、メイちゃん','Aoi — neighbor-amusement family-pop Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ラスベガス旅行のお話、楽しそう、メイちゃん','Aoi — cust Vegas-trip-fun Mei','Animated','mei_romantic'),
    mk('葵、お店では成人向けポルノ雑誌は扱わないよね、メイちゃん','Aoi — store adult-porn-mag don\'t-handle Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_08417',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが大きなボウルでお米を研いでらしたぞ','Gran — youth Dad big-bowl rice-washed','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、信州の温泉宿をお気に入りだったわよね、あなた?','Yes — Grandpa Shinshu-onsen fave, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、ばあさんが社交舞踏を習われたぞ','Gran — youth gran social-dance-learned','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、南極の番組をテレビでご覧になったわよね、あなた?','Grandpa — Antarctic-prog TV-watched, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがバスケのドリブル指導されたぞ','Gran — youth Dad basketball-dribble-guided','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫さんを遊園地に連れて行かれたわよね、あなた?','Grandpa — grandkid-amusement-took, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、ラスベガスのお話を新聞で読んだぞ','Gran — youth Vegas-news-read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ポルノに関するお話は決してなさらなかったわよね、あなた?','Grandpa — porn-talk never-did, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08418',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さん、サラダボウルが大きいの買ったの','Sho — Mei-sis salad-bowl-big bought','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、信州にお祖母ちゃんと行ったよ','Mei-sis — me Shinshu Grandma-went','Eager child','sho_child'),
    mk('翔くん、お父さんと社交舞踏のお話したわ','Sho — Dad social-dance-talked','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、南極のペンギン大好きだよ','Mei-sis — me Antarctic-penguin love','Eager child','sho_child'),
    mk('翔くん、ぼく、お父さんとドリブル練習したよ','Sho — me Dad-dribble-practice','Proud child','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと遊園地行きたいな','Mei-sis — me Dad-amusement go-want','Eager child','sho_child'),
    mk('翔くん、お父さんがラスベガスのお仕事に行ったわよ','Sho — Dad Vegas-work-went','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ポルノって聞いたけど、何のこと?','Mei-sis — me porn-heard what?','Curious close','sho_child'),
  ]},
  {id:'conv_08419',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、家でカフェオレをボウルで飲んでんのか?','Riku — home-cafe-au-lait bowl-drink?','Curious teen','sakura_teen'),
    mk('お前、修学旅行で信州行ったろ?桜','You — school-trip Shinshu-went? Sakura','Curious','riku_teen'),
    mk('リク、お前、社交舞踏部に入りたいんだろ?','Riku — social-dance-club join-want?','Curious','sakura_teen'),
    mk('お前、南極観測隊員に憧れてんだろ?桜','You — Antarctic-team-admire? Sakura','Curious','riku_teen'),
    mk('リク、お前のドリブル、上手いな','Riku — your-dribble skilled','Praising','sakura_teen'),
    mk('お前、ディズニーランドの遊園地行ったろ?桜','You — Disney-amusement-went? Sakura','Curious','riku_teen'),
    mk('リク、ラスベガス映画見たろ?','Riku — Vegas-movie-saw?','Curious','sakura_teen'),
    mk('お前、ポルノサイトには絶対近づくなよ、桜','You — porn-site absolute-avoid Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_08420',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖母ちゃんが大きなボウルでお漬物作ってらしたわ','Sho — Grandma big-bowl pickles-made','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんと信州の温泉に行きたいな','Mom — me Grandpa Shinshu-onsen go-want','Eager child','sho_child'),
    mk('翔くん、お父さんが社交舞踏を習ってらっしゃるのよ','Sho — Dad social-dance-learning','Reflective','yumiko_mom'),
    mk('ママ、ぼく、南極のドキュメンタリー見たよ','Mom — me Antarctic-doc-saw','Eager child','sho_child'),
    mk('翔くん、お父さんとドリブルの練習しましょう','Sho — Dad-dribble-practice','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと遊園地、行きたいな','Mom — me Dad-amusement go-want','Eager child','sho_child'),
    mk('翔くん、お父さんがラスベガス出張から帰ってこられるそうよ','Sho — Dad Vegas-biz-trip return','Reflective','yumiko_mom'),
    mk('ママ、ポルノのことは大人になってからの話よね','Mom — porn-talk adult-after right?','Reflective close','sho_child'),
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

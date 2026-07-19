import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_452 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['甚だ','へた','恐る恐る','とてつもない','なにかと','めずらしく','ほんのり','つき合い']
const B_T = ['国費','楽勝','解法','在職','使い物','引換','節減','棄権']
const C_T = ['釈迦','マイノリティ','駐屯','寒冷','怠惰','連呼','取り締まる','量子力学']
const D_T = ['惣菜','祇園','ビリヤード','ツバメ','炭水化物','クールビズ','高島屋','芸者']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09001',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖父ちゃんの体調は甚だ心配ね','Sho — Grandpa-health-very-worry','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お絵描きへたで悲しい','Mom — me drawing-bad-sad','Wry child','sho_child'),
    mk('翔くん、お父さんは恐る恐る初挑戦の料理をされたわ','Sho — Dad-tim-first-cook','Wry','yumiko_mom'),
    mk('ママ、お祖父ちゃんから、とてつもない大きなおもちゃもらったよ','Mom — Grandpa-incredible-big-toy-got','Eager child','sho_child'),
    mk('翔くん、お父さんは、なにかと心配して下さるのよ','Sho — Dad-various-worry-care','Reflective','yumiko_mom'),
    mk('ママ、ぼく、今日はめずらしく早起きしたよ','Mom — me today-unusual-early-up','Proud child','sho_child'),
    mk('翔くん、お祖母ちゃんがほんのり微笑まれてたわ','Sho — Grandma-faint-smile','Tender','yumiko_mom'),
    mk('ママ、ぼく、お友達とのつき合いも大事にするよ','Mom — me friend-association-cherish','Earnest close','sho_child'),
  ]},
  {id:'conv_09002',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、繁忙期は甚だ疲れるね、メイちゃん','Aoi — busy-very-tired Mei','Wry','mei_romantic'),
    mk('葵、ラテアートまだへたなお客様もいらっしゃるね、メイちゃん','Aoi — latte-art-bad-cust Mei','Reflective','aoi_barista'),
    mk('葵、お客様、恐る恐る新メニューをご注文されたよ、メイちゃん','Aoi — cust-tim-new-menu-order Mei','Pleased','mei_romantic'),
    mk('葵、新メニューの反応、とてつもない好評ね、メイちゃん','Aoi — new-menu-incredible-pop Mei','Pleased','aoi_barista'),
    mk('葵、お客様、なにかと話しかけて下さるよ、メイちゃん','Aoi — cust-various-chat Mei','Pleased','mei_romantic'),
    mk('葵、今日は、めずらしく雨が早朝に止んだね、メイちゃん','Aoi — today-unusual-rain-early-stop Mei','Reflective','aoi_barista'),
    mk('葵、お客様の前のコーヒー、ほんのり湯気が立ってたよ、メイちゃん','Aoi — cust-coffee-faint-steam Mei','Reflective','mei_romantic'),
    mk('葵、お客様とのつき合いを大切にしましょう、メイちゃん','Aoi — cust-association-cherish Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_09003',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが甚だ無口でらした','Gran — youth Dad-very-quiet','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、書道がお若い頃はへたでらしたわよね、あなた?','Yes — Grandpa-young-calligraphy-bad, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと恐る恐る船旅に出たぞ','Gran — youth Dad-tim-ship-trip','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、とてつもない大きな魚を釣られたわよね、あなた?','Grandpa — incredible-big-fish-caught, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんはなにかと家族を心配されたぞ','Gran — Dad-various-fam-worry','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、めずらしく早起きされた朝もありましたわよね、あなた?','Grandpa — unusual-early-morn, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが、ほんのり頬を赤らめられたぞ','Gran — youth Dad-faint-blush','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご近所とのつき合いを大事にされたわよね、あなた?','Grandpa — neighbor-association-cherish, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09004',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、甚だ寝不足だな','Riku — very-sleep-deprived','Wry teen','sakura_teen'),
    mk('お前、字がへただな、桜','You — writing-bad Sakura','Wry','riku_teen'),
    mk('リク、お前、恐る恐る告白しただろ?','Riku — tim-confess?','Wry','sakura_teen'),
    mk('お前、とてつもない大盛り頼んだろ、桜','You — incredible-mega-portion Sakura','Wry','riku_teen'),
    mk('リク、お前、なにかと俺の事気にかけてくれるな','Riku — various-me-care','Tender','sakura_teen'),
    mk('お前、めずらしく真面目に勉強してんな、桜','You — unusual-serious Sakura','Praising','riku_teen'),
    mk('リク、お前、ほんのり日焼けしてんな','Riku — faint-tan','Reflective','sakura_teen'),
    mk('お前、後輩とのつき合いも上手いな、桜','You — junior-association-good Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_09005',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さん、甚だ嬉しい気持ちよ','Sho — Mei-sis-very-glad','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お絵描きまだへたなんだ','Mei-sis — me drawing-still-bad','Wry child','sho_child'),
    mk('翔くん、メイ姉さんが、恐る恐る新しい技法を試したのよ','Sho — Mei-sis-tim-new-tech-try','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、とてつもない長い絵を描いたよ','Mei-sis — me incredible-long-pic-drew','Proud child','sho_child'),
    mk('翔くん、メイ姉さんは、なにかと翔くんを応援してるのよ','Sho — Mei-sis-various-Sho-cheer','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、今朝、めずらしく早起きしたよ','Mei-sis — me morn-unusual-early','Proud child','sho_child'),
    mk('翔くん、ほんのり甘いお菓子作りましょうね','Sho — faint-sweet-snack-make','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんとのつき合い、ずっと続けたいよ','Mei-sis — me Mei-sis-association-keep-want','Earnest close','sho_child'),
  ]},
  {id:'conv_09006',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、国費プロジェクトに応募しろ','Our co — nat-fund-proj-app','Crisp','hiroshi_boss'),
    mk('はい。今回の入札は楽勝でした','Yes — Bid-easy-win','Methodical','kenji_office'),
    mk('当社、問題の解法を社内勉強会で共有しろ','Our co — prob-sol-co-meet-share','Direction','hiroshi_boss'),
    mk('はい。長年在職した社員を表彰します','Yes — Long-tenure-staff-award','Update','kenji_office'),
    mk('当社、不良品は使い物にならんと回収しろ','Our co — defect-not-usable-recall','Direction','hiroshi_boss'),
    mk('はい。引換券を新しく印刷しました','Yes — Voucher-new-print','Update','kenji_office'),
    mk('当社、無駄を節減して投資に回せ','Our co — waste-reduce-invest','Direction','hiroshi_boss'),
    mk('はい。投票棄権率を改善する社員啓発を進めます','Yes — Vote-abst-imp-staff-edu','Close','kenji_office'),
  ]},
  {id:'conv_09007',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('国費補助の申請書を整えましょう','Nat-fund-app-prep','Brisk','yuki_office'),
    mk('はい。新入社員の研修は今回楽勝でしたね','Yes — New-staff-train-easy','Cooperative','kenji_office'),
    mk('業務効率化の解法を考案しましょう','Biz-eff-sol-devise','Direction','yuki_office'),
    mk('はい。長期在職社員のキャリア面談を設定します','Yes — Long-tenure-career-meet','Update','kenji_office'),
    mk('古い備品で使い物にならない物は処分しましょう','Old-equip-not-usable-dispose','Direction','yuki_office'),
    mk('はい。記念品の引換期限を再確認しました','Yes — Memento-voucher-deadline-check','Update','kenji_office'),
    mk('経費の節減目標を設定しましょう','Cost-reduce-goal-set','Direction','yuki_office'),
    mk('はい。総会の議決を棄権しないよう周知します','Yes — Meet-vote-abst-not-info','Close','kenji_office'),
  ]},
  {id:'conv_09008',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、国費で行く海外学会に挑め','Ren — nat-fund-overseas-conf-try','Mentor','hiroshi_boss'),
    mk('はい。今回の発表は楽勝でした','Yes — Pres-easy','Earnest','ren_uni'),
    mk('蓮、論文の解法を分かりやすく書け','Ren — paper-sol-clear-write','Direction','hiroshi_boss'),
    mk('はい。在職中の教授に推薦を頼みました','Yes — Tenure-prof-rec-ask','Polite','ren_uni'),
    mk('蓮、データが使い物にならないなら採集し直せ','Ren — data-not-usable-recollect','Direction','hiroshi_boss'),
    mk('はい。図書券の引換にも気を付けます','Yes — Book-voucher-careful','Earnest','ren_uni'),
    mk('蓮、研究費の節減を意識しろ','Ren — research-fund-reduce-aware','Direction','hiroshi_boss'),
    mk('はい。学会の投票では棄権せず意思表示します','Yes — Conf-vote-not-abst-show','Earnest close','ren_uni'),
  ]},
  {id:'conv_09009',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、国費で防犯機材を更新されてるんですね','Police nat-fund-crime-prev-update','Cooperative','kenji_office'),
    mk('警察、簡単な事件は楽勝で解決されますね','Police easy-case-solve','Cooperative','kenji_office'),
    mk('警察、事件の解法を市民にも公開されますね','Police case-sol-citizen-pub','Cooperative','kenji_office'),
    mk('警察、長く在職した警察官の経験は宝ですね','Police long-tenure-officer-exp-treasure','Cooperative','kenji_office'),
    mk('警察、古い装備で使い物にならない物は処分されますね','Police old-equip-not-usable-dispose','Cooperative','kenji_office'),
    mk('警察、防犯ポイントの引換も導入されますね','Police crime-prev-pt-voucher-intro','Cooperative','kenji_office'),
    mk('警察、不要な支出を節減されてるんですね','Police unnec-spend-reduce','Cooperative','kenji_office'),
    mk('警察、職員に棄権しない選挙を呼びかけられますね','Police staff-vote-not-abst-call','Close','kenji_office'),
  ]},
  {id:'conv_09010',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、国費補助に頼らず自力で歩まれた','Dad — founding nat-fund-not-rely-self','Sage','hiroshi_elder'),
    mk('はい。お父さんは契約交渉を楽勝でこなされた','Yes — Dad contract-nego-easy','Commitment','hiroshi_boss'),
    mk('お父さん、問題の解法を社員に教えるのが上手かったぞ','Dad — prob-sol-staff-teach-good','Wistful','hiroshi_elder'),
    mk('はい。お父さんは在職中の社員を大切にされた','Yes — Dad tenure-staff-cherish','Reflective','hiroshi_boss'),
    mk('お父さん、不良品を使い物にならないと厳しく扱われたぞ','Dad — defect-not-usable-strict','Wistful','hiroshi_elder'),
    mk('はい。お父さんは記念品の引換にも丁寧にご対応された','Yes — Dad memento-voucher-careful','Reflective','hiroshi_boss'),
    mk('お父さん、経費節減に熱心でいらしたぞ','Dad — cost-reduce-zeal','Wistful','hiroshi_elder'),
    mk('はい。お父さんは株主総会で棄権する社員を諫められた','Yes — Dad shareholders-vote-abst-staff-admon','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09011',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、釈迦の教えと近代社会を論文で扱いましたね','Ren — Shaka-teach-mod-soc paper','Calm','asuka_teacher'),
    mk('はい、社会的マイノリティの権利史を論文で扱いました','Yes — Soc-min-rights paper','Earnest','ren_uni'),
    mk('蓮さん、戦時下の駐屯地の実態を論文で扱いましたね','Ren — wartime-garr-fact paper','Reflective','asuka_teacher'),
    mk('はい、寒冷地での生活適応研究を論文で扱いました','Yes — Cold-area-life-adapt paper','Earnest','ren_uni'),
    mk('政治家の怠惰を批判した文献を論文で扱いましたね','Pol-laziness-critique paper','Engaged','asuka_teacher'),
    mk('はい、選挙キャンペーンでの連呼戦略を論文で扱いました','Yes — Election-camp-chant-strat paper','Earnest','ren_uni'),
    mk('蓮さん、犯罪を取り締まる近代警察制度を論文で扱いましたね','Ren — crime-crack-mod-police-sys paper','Reflective','asuka_teacher'),
    mk('はい、量子力学の発展史を論文で扱いました','Yes — Quantum-mech-dev paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09012',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、容疑者が釈迦の信仰を持っていた事を警察、確認されましたね','Case suspect-Shaka-belief police-confirm','Reflective','ren_uni'),
    mk('警察、マイノリティの方々への配慮を徹底します','Police min-group-care-strict','Procedural','takeda_officer'),
    mk('本件、駐屯地周辺の事件を警察、ご担当ですね','Case garr-area-case police-handle','Reflective','ren_uni'),
    mk('警察、寒冷地での捜査も継続します','Police cold-area-inv-cont','Procedural','takeda_officer'),
    mk('本件、容疑者の怠惰な生活実態を警察、把握されてますね','Case suspect-lazy-life police-grasp','Reflective','ren_uni'),
    mk('警察、選挙連呼の騒音対策もご対応します','Police election-chant-noise-resp','Procedural','takeda_officer'),
    mk('本件、悪質商法を取り締まる活動も継続されますね','Case mal-biz-crack-cont','Reflective','ren_uni'),
    mk('警察、量子力学を活かしたセキュリティにも備えます','Police quantum-mech-sec-prep','Close','takeda_officer'),
  ]},
  {id:'conv_09013',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、釈迦の教えと近代社会を論文で扱いましたね','Sakura — Shaka paper','Calm','asuka_teacher'),
    mk('はい、社会的マイノリティの権利史を論文で扱いました','Yes — Soc-min paper','Earnest teen','sakura_teen'),
    mk('戦時下の駐屯地の実態を論文で扱いましたね','War-garr paper','Reflective','asuka_teacher'),
    mk('はい、寒冷地での生活適応を論文で扱いました','Yes — Cold-adapt paper','Earnest','sakura_teen'),
    mk('政治家の怠惰を批判した文献を論文で扱いましたね','Pol-laziness paper','Engaged','asuka_teacher'),
    mk('はい、選挙キャンペーンでの連呼戦略を論文で扱いました','Yes — Election-chant paper','Earnest','sakura_teen'),
    mk('犯罪を取り締まる近代警察制度を論文で扱いましたね','Mod-police-crack paper','Reflective','asuka_teacher'),
    mk('はい、量子力学の発展史を論文で扱いました','Yes — Quantum-mech paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09014',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、終末期に釈迦の教えに救われる患者さんの心を医療チームで尊重します','Ren — end-Shaka-teach-rescue-patient med-team-respect','Calm','saito_doctor'),
    mk('はい、医療マイノリティの方々の声を医療チームで反映します','Yes — Med-min-voice med-team-reflect','Patient','saito_doctor'),
    mk('駐屯地内の医療支援を、貴院、なさってるんですね、先生','Garr-med-supp your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、寒冷地での凍傷治療を医療チームで担当します','Yes — Cold-frostbite-treat med-team','Patient','saito_doctor'),
    mk('生活習慣の怠惰が引き起こす疾患を、貴院、ご研究中なんですね、先生','Life-lazy-dis your-hosp research, sensei','Curious','ren_uni'),
    mk('はい、連呼するように予防の重要性を医療チームで伝えます','Yes — Chant-prev-imp med-team-conv','Patient','saito_doctor'),
    mk('違法医薬品を取り締まる活動に、貴院、協力されてますね、先生','Illegal-drug-crack your-hosp coop, sensei','Reflective','ren_uni'),
    mk('はい、量子力学を応用した画像診断を医療チームで導入します','Yes — Quantum-mech-imaging med-team intro','Patient close','saito_doctor'),
  ]},
  {id:'conv_09015',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、釈迦の教えのような哲学を経営に活かせ','Our co — Shaka-phil-mgmt-util','Crisp','hiroshi_boss'),
    mk('はい。マイノリティ社員への配慮を徹底します','Yes — Min-staff-care-strict','Methodical','kenji_office'),
    mk('当社、海外駐屯先の社員の安全を確保しろ','Our co — overseas-garr-staff-safety-secure','Direction','hiroshi_boss'),
    mk('はい。寒冷地での製品テストを進めます','Yes — Cold-area-prod-test-progress','Update','kenji_office'),
    mk('当社、社員の怠惰を許さず、活力ある職場にしろ','Our co — staff-lazy-not-active-workplace','Direction','hiroshi_boss'),
    mk('はい。広告で連呼するブランド名を統一します','Yes — Ad-chant-brand-unify','Update','kenji_office'),
    mk('当社、不正を取り締まる内部監査を強化しろ','Our co — fraud-crack-int-aud-strength','Direction','hiroshi_boss'),
    mk('はい。量子力学関連の新事業も検討中です','Yes — Quantum-mech-new-biz-consider','Close','kenji_office'),
  ]},
  {id:'conv_09016',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、新メニューに惣菜のお弁当も加えましょう、メイちゃん','Aoi — new-menu-side-bento-add Mei','Direction','mei_romantic'),
    mk('葵、お客様、京都の祇園に旅行されたんだって、メイちゃん','Aoi — cust-Kyoto-Gion-trip Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ビリヤード大会で優勝されたって、メイちゃん','Aoi — cust-billiards-comp-won Mei','Pleased','mei_romantic'),
    mk('葵、お客様、ツバメの巣を見守ってるって、メイちゃん','Aoi — cust-swallow-nest-watch Mei','Tender','aoi_barista'),
    mk('葵、新メニュー、低炭水化物のサラダを加えましょう、メイちゃん','Aoi — new-menu-low-carb-salad-add Mei','Direction','mei_romantic'),
    mk('葵、夏はクールビズで爽やかなスタッフ姿にしましょう、メイちゃん','Aoi — summer-cool-biz-staff Mei','Direction','aoi_barista'),
    mk('葵、お客様、高島屋で買い物されたって、メイちゃん','Aoi — cust-Takashimaya-shopped Mei','Reflective','mei_romantic'),
    mk('葵、お客様、京都で芸者さんを見られたって、メイちゃん','Aoi — cust-Kyoto-geisha-saw Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09017',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お母様は惣菜屋を営まれたぞ','Gran — youth Mom-side-store-ran','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、祇園で芸妓のお話を聞かれたわよね、あなた?','Yes — Grandpa-Gion-geiko-heard, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんとビリヤード場で遊んだぞ','Gran — youth Dad-billiards-played','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お庭にツバメの巣ができて喜ばれたわよね、あなた?','Grandpa — garden-swallow-nest-glad, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは炭水化物中心の食生活でらしたぞ','Gran — youth Dad-carb-cent','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、晩年はクールビズの服装でリラックスしてらしたわよね、あなた?','Grandpa — late-cool-biz-relax, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと高島屋で買い物をしたぞ','Gran — youth Dad-Takashimaya-shopped','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、京都で芸者さんを見て驚かれたわよね、あなた?','Grandpa — Kyoto-geisha-surprised, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09018',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お母さんが惣菜を買って下さったわ','Sho — Mom-side-bought','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと祇園に行きたいよ','Mei-sis — me Dad-Gion-want','Eager child','sho_child'),
    mk('翔くん、お父さんが家族でビリヤードしましょうって','Sho — Dad-fam-billiards','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、ツバメの赤ちゃん見たよ','Mei-sis — me swallow-baby-saw','Eager child','sho_child'),
    mk('翔くん、お父さんが炭水化物を減らす食事を始められたわ','Sho — Dad-carb-reduce-start','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんがクールビズの夏服を着てらしたよ','Mei-sis — me Dad-cool-biz-summer-wore','Eager child','sho_child'),
    mk('翔くん、メイ姉さんと高島屋でお買い物しましょうね','Sho — Mei-sis-Takashimaya-shop','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、京都で芸者さんを見たいよ','Mei-sis — me Kyoto-geisha-want','Eager close','sho_child'),
  ]},
  {id:'conv_09019',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、お母さんが作る惣菜好きだろ?','Riku — your-Mom-side-like?','Curious teen','sakura_teen'),
    mk('お前、京都修学旅行で祇園行ったろ?桜','You — Kyoto-school-Gion? Sakura','Curious','riku_teen'),
    mk('リク、お前、ビリヤード得意だろ?','Riku — billiards-good?','Curious','sakura_teen'),
    mk('お前、学校でツバメの観察したろ?桜','You — school-swallow-obs? Sakura','Curious','riku_teen'),
    mk('リク、お前、炭水化物制限ダイエットしてんだろ?','Riku — carb-restrict-diet?','Curious','sakura_teen'),
    mk('お前のお父さん、夏はクールビズだろ?桜','Your-Dad-summer-cool-biz? Sakura','Curious','riku_teen'),
    mk('リク、お前、家族で高島屋行ったろ?','Riku — fam-Takashimaya?','Curious','sakura_teen'),
    mk('お前、祇園で芸者さん見たろ?桜','You — Gion-geisha-saw? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09020',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、夕飯はお祖母ちゃんの惣菜でゆっくり頂きましょう','Sho — dinner-Grandma-side','Tender','yumiko_mom'),
    mk('ママ、お父さんが昔、祇園で食事された写真見たよ','Mom — Dad-old-Gion-photo-saw','Eager child','sho_child'),
    mk('翔くん、お父さんがビリヤード台のあるホテルを予約して下さったわ','Sho — Dad-billiards-hotel-book','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お庭のツバメに名前付けたよ','Mom — me garden-swallow-name','Eager child','sho_child'),
    mk('翔くん、ご飯と炭水化物のバランスを考えましょう','Sho — rice-carb-balance','Direction','yumiko_mom'),
    mk('ママ、お父さんがクールビズで会社に行かれたわ','Mom — Dad-cool-biz-co','Eager child','sho_child'),
    mk('翔くん、お祖母ちゃんと高島屋へ行きましょうね','Sho — Grandma-Takashimaya-go','Tender','yumiko_mom'),
    mk('ママ、ぼく、京都で芸者さんに会いたいよ','Mom — me Kyoto-geisha-meet','Eager close','sho_child'),
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

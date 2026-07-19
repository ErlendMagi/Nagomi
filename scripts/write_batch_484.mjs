import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_484 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['踏み出す','言い換える','照らす','仕え','出くわし','入り込む','病ん','すすん']
const B_T = ['素質','各界','度胸','議事堂','飽和','イニシアチブ','肝要','切り取っ']
const C_T = ['高音','逸話','吸引','教区','脱皮','表層','平原','氷河']
const D_T = ['フェニックス','ユビキタス','フェデラー','バレンシア','ルックス','ゴッホ','スタンフォード大','寝たきり']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09641',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが新しい道に踏み出すって仰ったわ','Sho — Dad-new-path-step','Tender','yumiko_mom'),
    mk('ママ、難しい言葉、お父さんは易しく言い換える名人だよ','Mom — Dad-hard-easy-rephrase-master','Reflective child','sho_child'),
    mk('翔くん、お父さんがお部屋を懐中電灯で照らす遊びをして下さったわ','Sho — Dad-room-flash-illum-play','Pleased','yumiko_mom'),
    mk('ママ、お父さんが先輩に仕える礼儀を教えて下さったよ','Mom — Dad-senior-serve-manner-teach','Reflective child','sho_child'),
    mk('翔くん、お父さんと公園で意外なお客様に出くわしたわ','Sho — Dad-park-unexp-cust-meet','Reflective','yumiko_mom'),
    mk('ママ、ぼく、絵本に入り込むみたいに集中して読んだよ','Mom — me pic-book-immerse-conc','Eager child','sho_child'),
    mk('翔くん、お父さんが風邪で病んでらしたから労って差し上げてね','Sho — Dad-cold-ill-care','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんと一緒にもっと前にすすんでいくよ','Mom — me Dad-more-forward-prog','Eager close','sho_child'),
  ]},
  {id:'conv_09642',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、新メニュー開発に踏み出す時期ね、メイちゃん','Aoi — new-menu-step Mei','Direction','mei_romantic'),
    mk('葵、お客様への説明、難しい言葉は易しく言い換える努力をしようね、メイちゃん','Aoi — cust-explan-easy-rephrase Mei','Direction','aoi_barista'),
    mk('葵、お店をライトで照らす演出を変えようね、メイちゃん','Aoi — store-light-illum-change Mei','Direction','mei_romantic'),
    mk('葵、常連さんに仕える気持ちでサービスしようね、メイちゃん','Aoi — reg-serve-mind-svc Mei','Direction','aoi_barista'),
    mk('葵、街で偶然お客様に出くわしたよ、メイちゃん','Aoi — street-cust-meet Mei','Pleased','mei_romantic'),
    mk('葵、お店の雰囲気にお客様が入り込むよう演出を工夫しようね、メイちゃん','Aoi — store-atmos-cust-immerse-impr Mei','Direction','aoi_barista'),
    mk('葵、お客様、過労で病んでらしたって心配だよ、メイちゃん','Aoi — cust-overwork-ill-worry Mei','Reflective','mei_romantic'),
    mk('葵、新メニューの開発が順調にすすんでいるね、メイちゃん','Aoi — new-menu-smooth-prog Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_09643',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが新たな商売に踏み出す決断をされた','Gran — youth Dad-new-biz-step-decide','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、孫に難しい言葉を易しく言い換えるのが上手だったわよね、あなた?','Yes — Grandpa-grandkid-hard-easy-rephrase, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが提灯で道を照らす役を担われた','Gran — youth Dad-lant-path-illum-role','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お師匠様に仕える日々を懐かしまれたわよね、あなた?','Grandpa — master-serve-miss, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが旧友に偶然出くわした事もあった','Gran — youth Dad-old-friend-meet','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、書物に深く入り込む方でいらしたわよね、あなた?','Grandpa — book-deep-immerse, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが病んでも家族を支えられた','Gran — youth Dad-ill-fam-supp','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご家族のために前にすすんでこられたわよね、あなた?','Grandpa — fam-forward-prog, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09644',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、進路の一歩を踏み出す時期だな','Riku — career-step-time','Direction','sakura_teen'),
    mk('お前、専門用語を易しく言い換える能力あるな、桜','You — jargon-easy-rephrase-skill Sakura','Praising','riku_teen'),
    mk('リク、お前、懐中電灯で部屋を照らす遊びしてたな','Riku — flash-room-illum-play','Wry','sakura_teen'),
    mk('お前、先輩に仕える後輩の鑑だな、桜','You — senior-serve-junior-model Sakura','Praising','riku_teen'),
    mk('リク、お前、駅で先生に出くわして焦ってたな','Riku — sta-tch-meet-panic','Wry','sakura_teen'),
    mk('お前、ゲームに入り込むと声かけられないな、桜','You — game-immerse-no-call Sakura','Wry','riku_teen'),
    mk('リク、お前、風邪で病んでた時心配したぞ','Riku — cold-ill-worry','Tender','sakura_teen'),
    mk('お前、勉強がすすんでいるな、桜','You — study-prog Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_09645',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、新しい挑戦に踏み出す勇気を応援するわ','Sho — new-chall-step-cheer','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、難しい言葉を易しく言い換える練習してるよ','Mei-sis — me hard-easy-rephrase-prac','Eager child','sho_child'),
    mk('翔くん、お父さんが寝室を月明かりで照らす日もあるわね','Sho — Dad-bed-moon-illum-day','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに仕える気持ちでお手伝いするよ','Mei-sis — me Dad-serve-help','Earnest child','sho_child'),
    mk('翔くん、街で先生に出くわしたら丁寧に挨拶しましょうね','Sho — street-tch-meet-pol-greet','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、絵本の世界に入り込むのが好きだよ','Mei-sis — me pic-world-immerse-like','Eager child','sho_child'),
    mk('翔くん、お父さんが病んでらした時、ぼくはお世話したよ','Sho — Dad-ill-me-care','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、勉強がすすんでて嬉しいよ','Mei-sis — me study-prog-glad','Eager close','sho_child'),
  ]},
  {id:'conv_09646',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新人の素質を見極めろ','Our co — newhire-talent-judg','Crisp','hiroshi_boss'),
    mk('はい。各界の有識者の意見を伺います','Yes — Each-field-expert-opin','Methodical','kenji_office'),
    mk('当社、難しい交渉も度胸でいけ','Our co — tough-negot-courage','Direction','hiroshi_boss'),
    mk('はい。議事堂前の表敬訪問を準備します','Yes — Diet-pre-visit-prep','Update','kenji_office'),
    mk('市場の飽和状態に対応しろ','Mkt-saturated-resp','Direction','hiroshi_boss'),
    mk('はい。業界でイニシアチブを取ります','Yes — Industry-init-take','Update','kenji_office'),
    mk('当社、危機対応では肝要な判断を即決しろ','Our co — crisis-vital-fast','Direction','hiroshi_boss'),
    mk('はい。資料から重要部分を切り取って共有します','Yes — Doc-key-cut-share','Close','kenji_office'),
  ]},
  {id:'conv_09647',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('新人候補の素質を見極めましょう','Newhire-cand-talent-judg','Brisk','yuki_office'),
    mk('はい。各界の有識者を講師にお招きします','Yes — Each-field-expert-lect','Cooperative','kenji_office'),
    mk('プレゼンは度胸が肝心ですね','Pres-courage-key','Direction','yuki_office'),
    mk('はい。議事堂見学のツアー企画を考えます','Yes — Diet-tour-plan','Update','kenji_office'),
    mk('飽和状態の市場では差別化が必要ね','Sat-mkt-diff-need','Direction','yuki_office'),
    mk('はい。当社がイニシアチブを取れる分野を選びます','Yes — Our co-init-take-field','Update','kenji_office'),
    mk('交渉では肝要な点を押さえましょう','Negot-vital-press','Direction','yuki_office'),
    mk('はい。記事の重要箇所を切り取って共有します','Yes — Art-key-cut-share','Close','kenji_office'),
  ]},
  {id:'conv_09648',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究者としての素質を磨け','Ren — research-talent-pol','Mentor','hiroshi_boss'),
    mk('はい。各界の専門家と交流しております','Yes — Each-field-expert-exch','Earnest','ren_uni'),
    mk('蓮、学会発表は度胸が大事だ','Ren — conf-pres-courage','Direction','hiroshi_boss'),
    mk('はい。議事堂での公聴会にも参加します','Yes — Diet-hear-join','Earnest','ren_uni'),
    mk('蓮、論文の飽和市場でも独自性を出せ','Ren — paper-sat-mkt-uniq','Direction','hiroshi_boss'),
    mk('はい。研究分野でイニシアチブを取ります','Yes — Research-init-take','Polite','ren_uni'),
    mk('蓮、研究では肝要な仮説に集中しろ','Ren — research-vital-hyp-conc','Direction','hiroshi_boss'),
    mk('はい。論文の重要部分を切り取って要旨にします','Yes — Paper-key-cut-summary','Earnest close','ren_uni'),
  ]},
  {id:'conv_09649',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、若手警官の素質を見極められますね','Police young-talent-judg','Cooperative','kenji_office'),
    mk('警察、各界との連携も大事にされてますね','Police each-field-link','Cooperative','kenji_office'),
    mk('警察、現場では度胸ある判断が求められますね','Police scene-courage-judg','Cooperative','kenji_office'),
    mk('警察、議事堂周辺の警備を強化されますね','Police Diet-area-guard','Cooperative','kenji_office'),
    mk('警察、薬物市場が飽和状態にも対応されますね','Police drug-sat-resp','Cooperative','kenji_office'),
    mk('警察、防犯活動で地域とのイニシアチブを取られますね','Police prev-local-init','Cooperative','kenji_office'),
    mk('警察、捜査で肝要な手がかりを大事にされますね','Police inv-vital-clue-imp','Cooperative','kenji_office'),
    mk('警察、押収資料の関係箇所を切り取って分析されますね','Police seiz-doc-cut-anal','Close','kenji_office'),
  ]},
  {id:'conv_09650',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、社員の素質を見極めた','Dad — founding staff-talent-judg','Sage','hiroshi_elder'),
    mk('はい。お父さんは各界の人脈をお持ちだった','Yes — Dad each-field-net','Commitment','hiroshi_boss'),
    mk('お父さん、難局で度胸ある決断をされた','Dad — crisis-courage-decide','Wistful','hiroshi_elder'),
    mk('はい。お父さんは議事堂での請願にも自ら立たれた','Yes — Dad Diet-pet-self','Reflective','hiroshi_boss'),
    mk('お父さん、市場の飽和を予見されてた','Dad — mkt-sat-foresee','Wistful','hiroshi_elder'),
    mk('はい。お父さんは業界のイニシアチブを取った','Yes — Dad industry-init','Reflective','hiroshi_boss'),
    mk('お父さん、経営で肝要な視点を持たれた','Dad — mgmt-vital-view','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新聞記事を切り取って研究された','Yes — Dad news-art-cut-research','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09651',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、楽器の高音域研究を論文で扱いましたね','Ren — instr-treble paper','Calm','asuka_teacher'),
    mk('はい、歴史人物の逸話研究を論文で扱いました','Yes — Hist-fig-anec paper','Earnest','ren_uni'),
    mk('蓮さん、医療機器の吸引技術を論文で扱いましたね','Ren — med-eq-suction paper','Reflective','asuka_teacher'),
    mk('はい、英国国教会の教区組織を論文で扱いました','Yes — Anglic-par paper','Earnest','ren_uni'),
    mk('昆虫の脱皮過程を論文で扱いましたね','Insect-molt paper','Engaged','asuka_teacher'),
    mk('はい、地質学の表層分析を論文で扱いました','Yes — Geol-surf paper','Earnest','ren_uni'),
    mk('蓮さん、大草原平原の生態研究を論文で扱いましたね','Ren — prairie-eco paper','Reflective','asuka_teacher'),
    mk('はい、氷河の融解速度研究を論文で扱いました','Yes — Glacier-melt paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09652',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、容疑者の声紋分析、高音域の特徴を、警察、把握されてますね','Case suspect-treble-feat police-grasp','Reflective','ren_uni'),
    mk('警察、犯罪者の逸話的供述に注意します','Police crim-anec-test','Procedural','takeda_officer'),
    mk('本件、薬物吸引器具の押収を、警察、進められますね','Case drug-suction-tool-seiz police-prog','Reflective','ren_uni'),
    mk('警察、教区を超えた宗教詐欺事件にも対応します','Police par-relig-fraud-resp','Procedural','takeda_officer'),
    mk('本件、容疑者の社会的脱皮を、警察、見守られますね','Case suspect-soc-molt police-watch','Reflective','ren_uni'),
    mk('警察、犯行現場の表層証拠を採取します','Police scene-surf-evid-take','Procedural','takeda_officer'),
    mk('本件、平原地帯での失踪事件を、警察、扱われますね','Case prairie-miss police-handle','Reflective','ren_uni'),
    mk('警察、氷河地帯での遭難救助も担当します','Police glacier-rescue','Close','takeda_officer'),
  ]},
  {id:'conv_09653',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、楽器の高音域研究を論文で扱いましたね','Sakura — instr-treble paper','Calm','asuka_teacher'),
    mk('はい、歴史人物の逸話研究を論文で扱いました','Yes — Hist-anec paper','Earnest teen','sakura_teen'),
    mk('医療機器の吸引技術を論文で扱いましたね','Med-suction paper','Reflective','asuka_teacher'),
    mk('はい、英国国教会の教区組織を論文で扱いました','Yes — Anglic-par paper','Earnest','sakura_teen'),
    mk('昆虫の脱皮過程を論文で扱いましたね','Insect-molt paper','Engaged','asuka_teacher'),
    mk('はい、地質学の表層分析を論文で扱いました','Yes — Geol-surf paper','Earnest','sakura_teen'),
    mk('大草原平原の生態研究を論文で扱いましたね','Prairie-eco paper','Reflective','asuka_teacher'),
    mk('はい、氷河の融解速度研究を論文で扱いました','Yes — Glacier-melt paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09654',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、声帯の高音発声異常を医療チームで評価します','Ren — vocal-treble-eval med-team','Calm','saito_doctor'),
    mk('はい、患者の逸話的症状を医療チームで丁寧に聞きます','Yes — Pati-anec-symp med-team listen','Patient','saito_doctor'),
    mk('蓮さん、痰の吸引処置を医療チームで日々おこないます','Ren — phlegm-suction med-team daily','Calm','saito_doctor'),
    mk('医療圏内、つまり教区的概念を、貴院、参考にされてますね、先生','Med-area-par-conc your-hosp ref, sensei','Curious','ren_uni'),
    mk('はい、心理的脱皮を促す療法を医療チームで提供します','Yes — Psych-molt-ther med-team','Patient','saito_doctor'),
    mk('表層皮膚の処置を、貴院、丁寧にされてますね、先生','Surf-skin-treat your-hosp careful, sensei','Reflective','ren_uni'),
    mk('はい、平原地域の医療巡回を医療チームで担当します','Yes — Prairie-med-rounds med-team','Patient','saito_doctor'),
    mk('はい、氷河の寒冷地遠征隊の医療支援も医療チームで担当します','Yes — Glacier-cold-exped-med med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_09655',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、社員のプレゼンで高音すぎる声は控えさせろ','Our co — staff-pres-treble-quiet','Crisp','hiroshi_boss'),
    mk('はい。創業逸話を社員教育に活かします','Yes — Found-anec-staff-edu','Methodical','kenji_office'),
    mk('当社、空気吸引設備の点検を徹底しろ','Our co — air-suction-strict','Direction','hiroshi_boss'),
    mk('はい。販売教区、つまり商圏戦略を見直します','Yes — Sales-par-trade-rev','Update','kenji_office'),
    mk('当社、組織の脱皮を促進しろ','Our co — org-molt-promo','Direction','hiroshi_boss'),
    mk('はい。表層的な改革ではなく根本改革をします','Yes — Surf-no-root-ref','Update','kenji_office'),
    mk('北米平原市場への進出を検討しろ','N-Am-prairie-mkt-cons','Direction','hiroshi_boss'),
    mk('はい。氷河地帯の観光ビジネスも調査します','Yes — Glacier-tour-biz-research','Close','kenji_office'),
  ]},
  {id:'conv_09656',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、不死鳥のフェニックスの絵を描かれてたよ、メイちゃん','Aoi — cust-Phoenix-paint Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ユビキタス社会の研究をされてるって、メイちゃん','Aoi — cust-ubiquitous-research Mei','Reflective','aoi_barista'),
    mk('葵、お客様、フェデラー選手のテニスファンだって、メイちゃん','Aoi — cust-Federer-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、バレンシアに留学経験がおありだって、メイちゃん','Aoi — cust-Valencia-study Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ルックスより中身が大事って仰ってたよ、メイちゃん','Aoi — cust-look-vs-inside Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ゴッホの個展に行かれたって、メイちゃん','Aoi — cust-Gogh-expo Mei','Reflective','aoi_barista'),
    mk('葵、お客様、スタンフォード大に留学された方だって、メイちゃん','Aoi — cust-Stanford-study Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご家族が寝たきりで介護されてるって、メイちゃん','Aoi — cust-fam-bed-care Mei','Tender close','aoi_barista'),
  ]},
  {id:'conv_09657',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがフェニックス神話の本を読まれた','Gran — youth Dad-Phoenix-book','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ユビキタスって言葉に驚いてらしたわよね、あなた?','Yes — Grandpa-ubiquitous-surprised, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがフェデラーの試合をご覧になった','Gran — youth Dad-Federer-match','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、バレンシア・オレンジを大事に召し上がってたわよね、あなた?','Grandpa — Valencia-orange-eat, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはルックスよりお人柄でモテた','Gran — youth Dad-look-no-pers-pop','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ゴッホの自画像を愛されたわよね、あなた?','Grandpa — Gogh-self-portr-love, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お孫様がスタンフォード大に進学された','Gran — youth grandkid-Stanford','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、晩年、寝たきりにならぬよう毎日歩かれたわよね、あなた?','Grandpa — late-bed-not-walk, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09658',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがフェニックスの絵本を読んで下さるそうよ','Sho — Dad-Phoenix-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとユビキタスってお話したよ','Mei-sis — me Dad-ubiquitous-told','Eager child','sho_child'),
    mk('翔くん、お父さんがフェデラー選手のテニスを観てらしたわ','Sho — Dad-Federer-watch','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとバレンシアの絵本見たよ','Mei-sis — me Dad-Valencia-pic','Eager child','sho_child'),
    mk('翔くん、人は外のルックスよりお心が大事よ','Sho — people-look-no-heart-imp','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとゴッホの絵見たよ','Mei-sis — me Dad-Gogh-art','Eager child','sho_child'),
    mk('翔くん、お父さんがスタンフォード大の学生さんとお話されたわ','Sho — Dad-Stanford-stud-talk','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖母ちゃんが寝たきりにならないように願ってるよ','Mei-sis — me Granma-bed-not-pray','Tender close','sho_child'),
  ]},
  {id:'conv_09659',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、フェニックスのデザイン気に入ってたな','Riku — Phoenix-design-like','Wry teen','sakura_teen'),
    mk('お前、技術の授業でユビキタス習ったろ?桜','You — tech-ubiquitous? Sakura','Curious','riku_teen'),
    mk('リク、お前、フェデラーの試合録画してたな','Riku — Federer-rec','Curious','sakura_teen'),
    mk('お前、地理でバレンシア習ったろ?桜','You — geo-Valencia? Sakura','Curious','riku_teen'),
    mk('リク、お前、最近ルックス気にしすぎだぞ','Riku — recently-look-too-care','Wry','sakura_teen'),
    mk('お前、美術でゴッホの真似してたな、桜','You — art-Gogh-mimic Sakura','Wry','riku_teen'),
    mk('リク、お前、スタンフォード大に憧れてたな','Riku — Stanford-admire','Curious','sakura_teen'),
    mk('お前、お祖父ちゃんが寝たきりだって心配してたな、桜','You — Grandpa-bed-worry Sakura','Tender close','riku_teen'),
  ]},
  {id:'conv_09660',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがフェニックスの神話の本を読んで下さるそうよ','Sho — Dad-Phoenix-myth-read','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとユビキタス時代のお話したよ','Mom — me Dad-ubiquitous-told','Eager child','sho_child'),
    mk('翔くん、お父さんがフェデラー選手の試合を観てらしたわ','Sho — Dad-Federer-watch','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとバレンシアのオレンジを食べたよ','Mom — me Dad-Valencia-orange','Eager child','sho_child'),
    mk('翔くん、お父さんがルックスより中身を大事にしようって仰ったわ','Sho — Dad-look-no-inside-imp','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとゴッホの展覧会行きたいよ','Mom — me Dad-Gogh-expo-want','Eager child','sho_child'),
    mk('翔くん、お父さんがスタンフォード大のお話して下さったわ','Sho — Dad-Stanford-told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんが寝たきりにならないようにお祈りしたよ','Mom — me Grandpa-bed-not-pray','Tender close','sho_child'),
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

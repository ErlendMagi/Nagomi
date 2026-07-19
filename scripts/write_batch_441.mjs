import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_441 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['親しま','似通っ','嗚呼','取り敢えず','ながめ','きびしい','ようするに','よーく']
const B_T = ['同名','気配り','調査官','貸借','割当','局員','上半期','釈明']
const C_T = ['亀裂','覚せい','熱烈','サリン','加速度','臨界','培養','入管']
const D_T = ['栄養素','詰将棋','偶像','太陽系','オアシス','ボーイング','火薬','油田']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08781',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖父ちゃんは、ご近所の方に親しまれてらしたわね','Sho — Grandpa-neighbor-beloved','Tender','yumiko_mom'),
    mk('ママ、お祖父ちゃんとお父さんの笑い方が、似通ってるね','Mom — Grandpa-Dad-laugh-similar','Reflective child','sho_child'),
    mk('翔くん、嗚呼、夕焼けがきれいね','Sho — ahh-sunset-pretty','Wistful','yumiko_mom'),
    mk('ママ、ぼく、取り敢えず宿題から終わらせるよ','Mom — me first-homework-end','Earnest child','sho_child'),
    mk('翔くん、お庭の景色をながめるのも素敵な時間ね','Sho — garden-view-look-lovely','Tender','yumiko_mom'),
    mk('ママ、お祖父ちゃんはきびしいけど優しい人だったよ','Mom — Grandpa-strict-but-kind','Reflective child','sho_child'),
    mk('翔くん、ようするに、お父さんは翔くんが大事なのよ','Sho — in-short-Dad-Sho-cherish','Tender','yumiko_mom'),
    mk('ママ、ぼく、よーく耳をすませて聞いてるよ','Mom — me well-ear-listen','Eager close','sho_child'),
  ]},
  {id:'conv_08782',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お店は地域に親しまれているわね、メイちゃん','Aoi — store-region-beloved Mei','Pleased','mei_romantic'),
    mk('葵、お客様、皆さんの好みが、案外似通ってるね、メイちゃん','Aoi — cust-all-taste-surprisingly-similar Mei','Reflective','aoi_barista'),
    mk('葵、嗚呼、もう閉店時間ね、メイちゃん','Aoi — ahh-closing-time Mei','Wistful','mei_romantic'),
    mk('葵、取り敢えず仕込みを始めようね、メイちゃん','Aoi — first-prep-start Mei','Direction','aoi_barista'),
    mk('葵、お店から景色をながめるのも、いいわね、メイちゃん','Aoi — store-view-look-good Mei','Reflective','mei_romantic'),
    mk('葵、繁忙期は、きびしいけど一緒に乗り切ろうね、メイちゃん','Aoi — busy-strict-together Mei','Encouraging','aoi_barista'),
    mk('葵、ようするに、お客様第一でいきましょうね、メイちゃん','Aoi — in-short-cust-first Mei','Direction','mei_romantic'),
    mk('葵、よーくお豆を選別したから、今日のコーヒー楽しみね、メイちゃん','Aoi — well-bean-select-coffee-fun Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_08783',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんはご近所に親しまれてらしたぞ','Gran — youth Dad-neighbor-beloved','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、孫とご性格が似通ってらしたわよね、あなた?','Yes — Grandpa-grandkid-pers-similar, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、嗚呼、長い人生だったぞ','Gran — ahh-long-life','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、取り敢えずお茶でも頂きましょうね、あなた','Grandpa — first-tea-please, dear','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんとお庭をながめた夕暮れを覚えてるぞ','Gran — youth Dad-garden-look-twilight','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、きびしい時代を乗り越えていらしたわよね、あなた?','Grandpa — strict-era-overcome, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、ようするに、お父さんはご家族第一だったぞ','Gran — in-short-Dad-fam-first','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、よーく考えた末に決断されたわよね、あなた?','Grandpa — well-think-decide, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08784',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、クラスでみんなに親しまれてんな','Riku — class-beloved','Praising teen','sakura_teen'),
    mk('お前と俺、好み似通ってるよな、桜','You-me-taste-similar Sakura','Reflective','riku_teen'),
    mk('リク、嗚呼、テスト返却怖いな','Riku — ahh-test-return-scary','Wry','sakura_teen'),
    mk('お前、取り敢えず宿題やれよ、桜','You — first-homework Sakura','Direction','riku_teen'),
    mk('リク、お前、雲ながめてばっかいんなよ','Riku — cloud-look-only-don\'t','Wry','sakura_teen'),
    mk('お前、塾の先生きびしいよな、桜','You — cram-teacher-strict Sakura','Reflective','riku_teen'),
    mk('リク、ようするに、お前は勉強しろってこと','Riku — in-short-study-thing','Direction','sakura_teen'),
    mk('お前、よーく問題読めよ、桜','You — well-prob-read Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_08785',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんはご友人に親しまれてるのよ','Sho — Mei-sis-friend-beloved','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼくとメイ姉さんの絵、似通ってるね','Mei-sis — me-Mei-sis-pic-similar','Eager child','sho_child'),
    mk('翔くん、嗚呼、いい風が吹いてるわね','Sho — ahh-good-wind','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、取り敢えずお絵描き道具を出すね','Mei-sis — me first-art-tool','Earnest child','sho_child'),
    mk('翔くん、空をながめながらお絵描きしましょうね','Sho — sky-look-draw','Tender','mei_romantic'),
    mk('メイ姉さん、お父さんはきびしいけど優しいんだ','Mei-sis — Dad-strict-but-kind','Reflective child','sho_child'),
    mk('翔くん、ようするに、メイ姉さんは翔くんが大好きなのよ','Sho — in-short-Mei-sis-Sho-love','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、よーくメイ姉さんを見て絵描いたよ','Mei-sis — me well-Mei-sis-look-drew','Proud close','sho_child'),
  ]},
  {id:'conv_08786',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、同名の競合がいないか確認しろ','Our co — same-name-rival-check','Crisp','hiroshi_boss'),
    mk('はい。お得意様には気配りを忘れるな','Yes — VIP-thought-not-forget','Methodical','kenji_office'),
    mk('当社、外部調査官の指摘事項に対応しろ','Our co — ext-investigator-issue-resp','Direction','hiroshi_boss'),
    mk('はい。施設の貸借契約を更新しております','Yes — Fac-rent-contract-renew','Update','kenji_office'),
    mk('社員の業務割当を見直せ','Staff-task-allot-review','Direction','hiroshi_boss'),
    mk('はい。郵便局員さんに集荷をお願いしました','Yes — Post-staff-pickup-req','Update','kenji_office'),
    mk('当社、上半期の決算を急げ','Our co — H1-acct-hasten','Direction','hiroshi_boss'),
    mk('はい。お得意様への釈明文書を準備しました','Yes — VIP-apology-doc prep','Close','kenji_office'),
  ]},
  {id:'conv_08787',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('同名の社員がいるから、フルネーム表記にしましょう','Same-name-staff full-name-display','Brisk','yuki_office'),
    mk('はい。お得意様には細かい気配りを徹底します','Yes — VIP-detail-thought-strict','Cooperative','kenji_office'),
    mk('税務調査官の対応はチームで行いましょう','Tax-investigator-resp-team','Direction','yuki_office'),
    mk('はい。施設の貸借料金を交渉中です','Yes — Fac-rent-fee-nego','Update','kenji_office'),
    mk('週末勤務の割当を公平にしましょう','Weekend-work-allot-fair','Direction','yuki_office'),
    mk('はい。郵便局員さんとの連絡を密にします','Yes — Post-staff-contact-close','Update','kenji_office'),
    mk('上半期報告書を早めに仕上げましょう','H1-report-early-finish','Direction','yuki_office'),
    mk('はい。お得意様への釈明会議を設定しました','Yes — VIP-apology-meet-set','Close','kenji_office'),
  ]},
  {id:'conv_08788',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文に同名のテーマがある場合は副題で区別しろ','Ren — paper-same-name-subtitle-dist','Mentor','hiroshi_boss'),
    mk('はい。お得意様に当たる学会の偉い先生方への気配りを学習中です','Yes — Conf-prof-thought-learn','Earnest','ren_uni'),
    mk('蓮、研究倫理調査官の指導には誠実に従え','Ren — research-eth-investigator-sincere-follow','Direction','hiroshi_boss'),
    mk('はい。実験機材の貸借契約を確認しました','Yes — Exp-equip-rent-confirm','Polite','ren_uni'),
    mk('蓮、研究室の役割割当を整理しろ','Ren — lab-role-allot-org','Direction','hiroshi_boss'),
    mk('はい。学会事務局員の方々と連絡を密にします','Yes — Conf-secret-staff-contact-close','Earnest','ren_uni'),
    mk('蓮、上半期の研究成果をまとめろ','Ren — H1-research-result-summarize','Direction','hiroshi_boss'),
    mk('はい。データミスがあれば釈明資料を準備します','Yes — Data-mis-apology-doc-prep','Earnest close','ren_uni'),
  ]},
  {id:'conv_08789',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、容疑者と同名の市民への誤認を避けます','Police suspect-same-name-citizen-mis-avoid','Calm','takeda_officer'),
    mk('はい。警察、市民への気配りを大事にされてますね','Yes — Police citizen-thought-cherish','Cooperative','kenji_office'),
    mk('警察、本件は調査官の専門領域です','Police case-investigator-domain','Procedural','takeda_officer'),
    mk('はい。警察、不正貸借契約の捜査もされますね','Yes — Police illegal-rent-inv','Cooperative','kenji_office'),
    mk('警察、応援要員の割当を調整しました','Police backup-allot-coord','Procedural','takeda_officer'),
    mk('はい。警察、郵便局員さんの安全も守って下さいね','Yes — Police post-staff-safety-protect','Cooperative','kenji_office'),
    mk('警察、上半期の犯罪統計を発表します','Police H1-crime-stat-announce','Procedural','takeda_officer'),
    mk('はい。警察、捜査結果の釈明会見も行われますね','Yes — Police inv-result-apology-conf','Close','kenji_office'),
  ]},
  {id:'conv_08790',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、同名の競合との競争を勝ち抜かれたぞ','Dad — founding same-name-rival-overcame','Sage','hiroshi_elder'),
    mk('はい。お父さんは社員一人一人への気配りを欠かさなかった','Yes — Dad each-staff-thought-never-skip','Commitment','hiroshi_boss'),
    mk('お父さん、税務調査官の指摘にも誠実に応じられたぞ','Dad — tax-investigator-sincere-resp','Wistful','hiroshi_elder'),
    mk('はい。お父さんは工場の貸借契約を慎重に結ばれた','Yes — Dad factory-rent-careful-tied','Reflective','hiroshi_boss'),
    mk('お父さん、業務の割当を公平に決められたぞ','Dad — task-allot-fair-decide','Wistful','hiroshi_elder'),
    mk('はい。お父さんは郵便局員さんにもお礼を欠かされなかった','Yes — Dad post-staff-thx-never-skip','Reflective','hiroshi_boss'),
    mk('お父さん、上半期決算で社員に感謝の言葉を述べられたぞ','Dad — H1-acct-staff-thx-spoken','Wistful','hiroshi_elder'),
    mk('はい。お父さんは不祥事の釈明会見で誠実に対応された','Yes — Dad scandal-apology-conf-sincere','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08791',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、社会的亀裂を深めた事件史を論文で扱いましたね','Ren — soc-rift-deep-case-hist paper','Calm','asuka_teacher'),
    mk('はい、覚せい剤事件の社会学を論文で扱いました','Yes — Stim-case-soc-sci paper','Earnest','ren_uni'),
    mk('蓮さん、熱烈なファン文化の研究を論文で扱いましたね','Ren — fervent-fan-culture paper','Reflective','asuka_teacher'),
    mk('はい、サリン事件後の社会対応を論文で扱いました','Yes — Sarin-case-soc-resp paper','Earnest','ren_uni'),
    mk('物体運動の加速度解析を論文で扱いましたね','Obj-mot-accel-anal paper','Engaged','asuka_teacher'),
    mk('はい、原子炉の臨界事故史を論文で扱いました','Yes — Reactor-critical-acc-hist paper','Earnest','ren_uni'),
    mk('蓮さん、細胞培養技術史を論文で扱いましたね','Ren — cell-cult-tech-hist paper','Reflective','asuka_teacher'),
    mk('はい、入管法改正の論点を論文で扱いました','Yes — Imm-law-rev-pts paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08792',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、組織内に亀裂が生じている兆候を警察、察知されてますね','Case org-rift-sign police-detect','Reflective','ren_uni'),
    mk('警察、覚せい剤事案を厳しく取り締まります','Police stim-case-strict-crackdown','Procedural','takeda_officer'),
    mk('本件、熱烈なファンによる迷惑行為を警察、警戒されてますね','Case fervent-fan-nuisance police-watch','Reflective','ren_uni'),
    mk('警察、過去のサリン事件の教訓を引き継ぎます','Police past-Sarin-lesson-inherit','Procedural','takeda_officer'),
    mk('本件、加速度的に増えている事案を警察、注視されてますね','Case accel-increasing-case police-watch','Reflective','ren_uni'),
    mk('警察、危険物の臨界量を厳重に管理します','Police hazard-critical-amt-strict-mgmt','Procedural','takeda_officer'),
    mk('本件、不正培養菌の流通を警察、捜査されてますね','Case illegal-cult-bact-dist police-inv','Reflective','ren_uni'),
    mk('警察、入管との連携を強化しております','Police imm-link-strengthen','Close','takeda_officer'),
  ]},
  {id:'conv_08793',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、社会的亀裂を深めた事件史を論文で扱いましたね','Sakura — soc-rift paper','Calm','asuka_teacher'),
    mk('はい、覚せい剤事件の社会学を論文で扱いました','Yes — Stim-soc paper','Earnest teen','sakura_teen'),
    mk('熱烈なファン文化の研究を論文で扱いましたね','Fervent-fan paper','Reflective','asuka_teacher'),
    mk('はい、サリン事件後の社会対応を論文で扱いました','Yes — Sarin-case paper','Earnest','sakura_teen'),
    mk('物体運動の加速度解析を論文で扱いましたね','Obj-accel paper','Engaged','asuka_teacher'),
    mk('はい、原子炉の臨界事故史を論文で扱いました','Yes — Reactor-critical paper','Earnest','sakura_teen'),
    mk('細胞培養技術史を論文で扱いましたね','Cell-cult paper','Reflective','asuka_teacher'),
    mk('はい、入管法改正の論点を論文で扱いました','Yes — Imm-law paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08794',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、医療チーム内の亀裂を起こさないよう、医療チームで対話を重ねます','Ren — med-team-rift-prev-dialog','Calm','saito_doctor'),
    mk('はい、覚せい剤中毒の治療を医療チームで担当します','Yes — Stim-add-treat med-team','Patient','saito_doctor'),
    mk('熱烈な希望者への治験を、貴院、ご対応されてるそうですね、先生','Fervent-vol-trial your-hosp resp, sensei','Reflective','ren_uni'),
    mk('はい、サリン中毒の救護研究を医療チームで参照します','Yes — Sarin-rescue-research med-team ref','Patient','saito_doctor'),
    mk('加速度の急変による怪我対応を、貴院、なさってますね、先生','Accel-sudden-injury-resp your-hosp do, sensei','Curious','ren_uni'),
    mk('はい、臨界量を超えた被ばく対応の準備を医療チームで進めます','Yes — Critical-rad-resp med-team prep','Patient','saito_doctor'),
    mk('培養技術を用いた再生医療を、貴院、ご研究中なんですね、先生','Cult-tech-regen-med your-hosp research, sensei','Reflective','ren_uni'),
    mk('はい、入管経由の海外患者対応も医療チームで行います','Yes — Imm-foreign-patient med-team do','Patient close','saito_doctor'),
  ]},
  {id:'conv_08795',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、社内に亀裂を生まぬよう対話を重ねろ','Our co — rift-prev-dialog','Crisp','hiroshi_boss'),
    mk('はい。社員の覚せい剤検査を契約で明示しました','Yes — Staff-stim-test-contract','Methodical','kenji_office'),
    mk('当社、お得意様への熱烈な接客を継続しろ','Our co — VIP-fervent-svc-cont','Direction','hiroshi_boss'),
    mk('はい。サリン級の有害物質には触れさせません','Yes — Sarin-class-haz-touch-no','Update','kenji_office'),
    mk('当社、新商品で市場の動きを加速度的に作れ','Our co — new-prod market-accel-create','Direction','hiroshi_boss'),
    mk('はい。生産能力の臨界点を見極めます','Yes — Prod-cap-critical-disc','Update','kenji_office'),
    mk('当社、培養技術を強化し再生医療に参入しろ','Our co — cult-tech-strengthen-regen-enter','Direction','hiroshi_boss'),
    mk('はい。入管とのやり取りを丁寧に進めます','Yes — Imm-comm-careful','Close','kenji_office'),
  ]},
  {id:'conv_08796',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、栄養素のお話されてたよ、メイちゃん','Aoi — cust-nutrient-told Mei','Reflective','mei_romantic'),
    mk('葵、お客様、詰将棋の本読んでらしたわよ、メイちゃん','Aoi — cust-tsume-shogi-book Mei','Reflective','aoi_barista'),
    mk('葵、お客様、推しの偶像を持ち歩いてらっしゃるって、メイちゃん','Aoi — cust-idol-fig-carry Mei','Reflective','mei_romantic'),
    mk('葵、お客様、太陽系のお話で盛り上がってらしたよ、メイちゃん','Aoi — cust-solar-system Mei','Animated','aoi_barista'),
    mk('葵、お店、お客様にとってオアシスのような場所ね、メイちゃん','Aoi — store-cust-oasis Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ボーイングの機内サービスのお話されてたよ、メイちゃん','Aoi — cust-Boeing-in-flight Mei','Reflective','aoi_barista'),
    mk('葵、お客様、火薬の歴史の本買われたって、メイちゃん','Aoi — cust-gunpowder-book-bought Mei','Reflective','mei_romantic'),
    mk('葵、お客様、油田開発のお仕事だって、メイちゃん','Aoi — cust-oil-field-work Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08797',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは栄養素の本を熱心に読まれたぞ','Gran — youth Dad nutrient-book-zealous','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、詰将棋がご趣味だったわよね、あなた?','Yes — Grandpa tsume-shogi-hobby, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは古い偶像を集めていらしたぞ','Gran — youth Dad-old-fig-collect','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、太陽系の図鑑をお持ちでらしたわよね、あなた?','Grandpa — solar-system-book-have, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと砂漠のオアシスのお話をしたぞ','Gran — youth Dad-desert-oasis-told','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ボーイング社の飛行機に乗られたわよね、あなた?','Grandpa — Boeing-plane-rode, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは戦時下の火薬のお話を聞かせて下さったぞ','Gran — youth Dad-wartime-gunpowder-told','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、中東の油田のお仕事をされたわよね、あなた?','Grandpa — ME-oil-field-work, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08798',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お母さんがバランスよく栄養素を取りなさいって','Sho — Mom-bal-nutrient-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんと詰将棋やったよ','Mei-sis — me Grandpa-tsume-shogi','Eager child','sho_child'),
    mk('翔くん、メイ姉さんは古い偶像の本を持ってるのよ','Sho — Mei-sis-old-fig-book-have','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、太陽系の絵本大好きだよ','Mei-sis — me solar-system-book-love','Eager child','sho_child'),
    mk('翔くん、メイ姉さんの庭はオアシスみたいね','Sho — Mei-sis-garden-oasis-like','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとボーイング社の飛行機に乗ったよ','Mei-sis — me Dad-Boeing-plane-rode','Eager child','sho_child'),
    mk('翔くん、お父さんが火薬の話には気を付けてって','Sho — Dad-gunpowder-careful','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、社会で油田の単元やったよ','Mei-sis — me soc-oil-field-unit','Eager close','sho_child'),
  ]},
  {id:'conv_08799',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat (recap)',lines:[
    mk('リク、お前のクラス、みんなに親しまれてんな','Riku — class-beloved','Praising teen','sakura_teen'),
    mk('お前、俺と趣味似通ってんな、桜','You-me-hobby-similar Sakura','Reflective','riku_teen'),
    mk('リク、嗚呼、また宿題忘れたな','Riku — ahh-homework-forgot','Wry','sakura_teen'),
    mk('お前、取り敢えず先生に謝れよ、桜','You — first-teacher-apologize Sakura','Direction','riku_teen'),
    mk('リク、お前、空ばっか、ながめてんなよ','Riku — sky-only-look','Wry','sakura_teen'),
    mk('お前のお父さん、きびしいよな、桜','Your-Dad-strict Sakura','Reflective','riku_teen'),
    mk('リク、ようするに、お前は勉強したいんだろ?','Riku — in-short-study-want?','Curious','sakura_teen'),
    mk('お前、よーくやってみろよ、桜','You — well-try Sakura','Encouraging close','riku_teen'),
  ]},
  {id:'conv_08800',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが栄養素のバランスを大事にしてらっしゃるわ','Sho — Dad-nutrient-bal-cherish','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんと詰将棋やってみたい','Mom — me Grandpa-tsume-shogi-want','Eager child','sho_child'),
    mk('翔くん、お祖母ちゃんがお寺の偶像をご覧になったのよ','Sho — Grandma-temple-fig-saw','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと太陽系の本読みたい','Mom — me Dad-solar-system-book-want','Eager child','sho_child'),
    mk('翔くん、ママのお庭はぼくらのオアシスね','Sho — Mom-garden-our-oasis','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとボーイング社の旅客機を見に行きたい','Mom — me Dad-Boeing-plane-see-want','Eager child','sho_child'),
    mk('翔くん、お父さんから「火薬には絶対触らないように」って','Sho — Dad "gunpowder-never-touch"','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんが油田で働く海外駐在員のお話してくれたよ','Mom — me Dad-oil-field-overseas-told','Eager close','sho_child'),
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

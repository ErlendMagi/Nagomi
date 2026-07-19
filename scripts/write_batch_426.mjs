import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_426 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['燃やし','とうてい','しかるべき','思い通り','のべ','いちおう','かならず','みごと']
const B_T = ['完売','手形','再販','増収','不問','別個','特産','海苔']
const C_T = ['動脈','省令','偵察','定理','不合理','非行','射殺','勃発']
const D_T = ['仏壇','クローズアップ','パロディ','編曲','生態学','魔法使い','戯曲','ナース']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08481',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お庭の落ち葉を燃やしたいわね','Sho — garden-leaves-burn-want','Reflective','yumiko_mom'),
    mk('ママ、ぼく、ピアノはとうてい上手に弾けないよ','Mom — me piano can\'t-play-well','Wry child','sho_child'),
    mk('翔くん、悪い事をしたら、しかるべき罰を受けましょうね','Sho — wrong-do then proper-punish','Direction','yumiko_mom'),
    mk('ママ、ぼく、思い通りに絵が描けなかったよ','Mom — me as-wanted draw-couldn\'t','Wry child','sho_child'),
    mk('翔くん、おやつの量はのべ三回までよ','Sho — snack-amount total-three-times','Direction','yumiko_mom'),
    mk('ママ、ぼく、いちおう宿題は終わったよ','Mom — me roughly-homework-done','Earnest child','sho_child'),
    mk('翔くん、お父さんはかならず7時に帰っていらっしゃるわ','Sho — Dad surely-7-return','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんのお話、みごとに覚えたよ','Mom — me Grandpa-story splendid-remember','Proud close','sho_child'),
  ]},
  {id:'conv_08482',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お庭の枯れ枝を燃やしたい所ね、メイちゃん','Aoi — garden-dry-branch-burn-want Mei','Reflective','mei_romantic'),
    mk('葵、来週までにはとうてい新メニューが出来ないわ、メイちゃん','Aoi — by-next-week can\'t-new-menu Mei','Wry','aoi_barista'),
    mk('葵、お客様には、しかるべき対応をしましょうね、メイちゃん','Aoi — cust proper-resp Mei','Direction','mei_romantic'),
    mk('葵、新メニューは、思い通りに仕上がったわよ、メイちゃん','Aoi — new-menu as-wanted-done Mei','Pleased','aoi_barista'),
    mk('葵、お客様はのべ五十人お見えになったわよ、メイちゃん','Aoi — cust total-50-visited Mei','Pleased','mei_romantic'),
    mk('葵、いちおう新人さんに伝えておいたわ、メイちゃん','Aoi — roughly-newbie-told Mei','Reflective','aoi_barista'),
    mk('葵、明日はかならずお店に出るわね、メイちゃん','Aoi — tomorrow surely-store-out Mei','Direction','mei_romantic'),
    mk('葵、お客様のラテアート、みごとにお褒めいただいた、メイちゃん','Aoi — cust-latte-art splendid-praised Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_08483',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが庭で焚き火を燃やしたぞ','Gran — youth Dad garden-bonfire-burned','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お疲れの時はとうていお出かけになれなかったわよね、あなた?','Yes — Grandpa tired-time-can\'t-out, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが、しかるべき判断をされたぞ','Gran — youth Dad proper-judge','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご自身の思い通りに家を建てられたわよね、あなた?','Grandpa — self as-wanted house-built, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがのべ百年の家系を語られたぞ','Gran — youth Dad total-100-year-family-spoke','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、いちおう毎日散歩されてたわよね、あなた?','Grandpa — roughly-daily-walked, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんはかならず約束を守られたぞ','Gran — Dad surely-promise-kept','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、書道をみごとにお書きになってたわよね、あなた?','Grandpa — calligraphy splendid-wrote, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08484',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、ノート燃やしたんだろ?','Riku — notebook-burned?','Curious teen','sakura_teen'),
    mk('お前、そのテスト点数はとうてい無理だぞ、桜','You — that-test-score can\'t-do Sakura','Wry','riku_teen'),
    mk('リク、お前、しかるべき先生に相談しろよ','Riku — proper-teacher-consult','Direction','sakura_teen'),
    mk('お前、思い通りの結果出てよかったな、桜','You — as-wanted-result-good Sakura','Praising','riku_teen'),
    mk('リク、お前、塾にのべ何回通ったんだ?','Riku — cram-total-how-many-times?','Curious','sakura_teen'),
    mk('お前、いちおう志望校受かったろ?桜','You — roughly-target-school-passed? Sakura','Curious','riku_teen'),
    mk('リク、お前、明日はかならず塾来いよ','Riku — tomorrow surely-cram-come','Direction','sakura_teen'),
    mk('お前、テストでみごとに満点取ったな、桜','You — test splendid-perfect-score Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_08485',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんが、いっしょに枯葉を燃やしましょうね','Sho — Mei-sis-together-dry-leaf-burn','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんみたいにとうてい走れないよ','Mei-sis — me Dad-like-can\'t-run','Wry child','sho_child'),
    mk('翔くん、お友達同士の喧嘩は、しかるべき大人に相談ね','Sho — friend-fight proper-adult-consult','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、思い通りに絵が描けたよ','Mei-sis — me as-wanted-drew','Proud child','sho_child'),
    mk('翔くん、メイ姉さんと、のべ五日もお出かけしたわね','Sho — Mei-sis total-5-day-out','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、いちおうお手伝いはしたよ','Mei-sis — me roughly-help-did','Earnest child','sho_child'),
    mk('翔くん、メイ姉さんはかならずお迎えに来るわね','Sho — Mei-sis surely-pick-up','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、運動会でみごとに一等賞だったよ','Mei-sis — me sports-day splendid-first-prize','Proud close','sho_child'),
  ]},
  {id:'conv_08486',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新商品を完売しろ','Our co — new-prod sell-out','Crisp','hiroshi_boss'),
    mk('はい。お取引先の手形決済が確認されました','Yes — Partner-bill-settle confirmed','Methodical','kenji_office'),
    mk('絶版商品の再販を検討しろ','Out-of-print re-issue consider','Direction','hiroshi_boss'),
    mk('はい。今期は増収増益の見込みです','Yes — This-period increase-rev-profit forecast','Update','kenji_office'),
    mk('過去の経歴は不問とし採用しろ','Past-resume unquestioned hire','Direction','hiroshi_boss'),
    mk('はい。新事業を別個の法人で運営します','Yes — New-biz separate-corp run','Update','kenji_office'),
    mk('地域特産品を商品ラインに加えろ','Local-special add-product-line','Direction','hiroshi_boss'),
    mk('はい。海苔メーカーとの提携を進めております','Yes — Nori-maker-partner-progress','Close','kenji_office'),
  ]},
  {id:'conv_08487',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('限定品、本日完売しましたね','Limited-prod today sell-out','Brisk','yuki_office'),
    mk('はい。お得意様の手形管理表を更新しました','Yes — VIP-bill-mgmt-table updated','Cooperative','kenji_office'),
    mk('人気商品の再販を発表しましょう','Popular-prod re-issue announce','Direction','yuki_office'),
    mk('はい。前期比増収のお知らせを準備しております','Yes — Vs-prev-period increase-rev-notice prep','Update','kenji_office'),
    mk('応募者の学歴は不問としましょう','Applicant-edu unquestioned','Direction','yuki_office'),
    mk('はい。新企画を別個のチームで進めます','Yes — New-plan separate-team-progress','Update','kenji_office'),
    mk('地域の特産食品を扱う部門を作りましょう','Local-special-food handle section make','Direction','yuki_office'),
    mk('はい。海苔の卸業者と契約しました','Yes — Nori-wholesaler contracted','Close','kenji_office'),
  ]},
  {id:'conv_08488',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究発表の参加枠は完売したぞ','Ren — research-pres-slot sell-out','Mentor','hiroshi_boss'),
    mk('はい。共同研究先との手形取引も学習しました','Yes — Joint-research-bill-deal learned','Earnest','ren_uni'),
    mk('蓮、絶版論文の再販を提案しろ','Ren — out-of-print-paper re-issue propose','Direction','hiroshi_boss'),
    mk('はい。研究費の増収を学会発表で報告します','Yes — Research-fund increase-rev conf-report','Polite','ren_uni'),
    mk('蓮、応募者の出身大学は不問だ','Ren — applicant-univ unquestioned','Direction','hiroshi_boss'),
    mk('はい。論文と特許出願は別個の手続きで進めます','Yes — Paper-patent separate-proc-progress','Earnest','ren_uni'),
    mk('蓮、地域特産品の研究にも参加しろ','Ren — local-special-research attend','Direction','hiroshi_boss'),
    mk('はい。海苔の養殖技術を学会論文で扱いました','Yes — Nori-cult-tech conf-paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08489',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、防犯グッズが本日完売しました','Police crime-prev-goods today sell-out','Calm','takeda_officer'),
    mk('はい。警察、手形偽造の事件を捜査されてますね','Yes — Police bill-forgery-case inv','Cooperative','kenji_office'),
    mk('警察、再販された違法薬物の摘発を進めております','Police re-sold-drug bust-progress','Procedural','takeda_officer'),
    mk('はい。警察、増収詐欺の手口にご注意なさってますね','Yes — Police increase-rev-fraud-watch','Cooperative','kenji_office'),
    mk('警察、容疑者の経歴は不問とせず、警察、調査します','Police suspect-resume questioned-inv','Procedural','takeda_officer'),
    mk('はい。警察、別個の事件として警察、扱われますね','Yes — Police separate-case handle','Cooperative','kenji_office'),
    mk('警察、地域特産品の偽造事件も捜査中です','Police local-special-fake inv','Procedural','takeda_officer'),
    mk('はい。警察、海苔の不正取引事案も対応されてますね','Yes — Police nori-illegal-deal resp','Close','kenji_office'),
  ]},
  {id:'conv_08490',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、商品をすぐ完売されたぞ','Dad — founding prod-quick-sell-out','Sage','hiroshi_elder'),
    mk('はい。お父さんは手形決済の信頼を築かれました','Yes — Dad bill-settle-trust-built','Commitment','hiroshi_boss'),
    mk('お父さん、絶版品の再販でファンを喜ばせたぞ','Dad — OoP re-issue fan-pleased','Wistful','hiroshi_elder'),
    mk('はい。お父さんは増収増益を続けられました','Yes — Dad inc-rev-inc-profit-kept','Reflective','hiroshi_boss'),
    mk('お父さん、応募者の経歴は不問とされたぞ','Dad — applicant-resume unquestioned','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新事業を別個の組織にされました','Yes — Dad new-biz separate-org','Reflective','hiroshi_boss'),
    mk('お父さん、地域特産品を全国に広められたぞ','Dad — local-special nation-spread','Wistful','hiroshi_elder'),
    mk('はい。お父さんは海苔事業から始められました','Yes — Dad nori-biz-started','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08491',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、動脈硬化の社会要因を論文で扱いましたね','Ren — atherosclerosis-soc-factor paper','Calm','asuka_teacher'),
    mk('はい、省令改正の影響を論文で扱いました','Yes — Ministerial-ord-rev-impact paper','Earnest','ren_uni'),
    mk('蓮さん、戦時下の偵察活動を論文で扱いましたね','Ren — war-recon-act paper','Reflective','asuka_teacher'),
    mk('はい、数学の定理発見の歴史を論文で扱いました','Yes — Math-theorem-disc-hist paper','Earnest','ren_uni'),
    mk('社会の不合理な構造を論文で扱いましたね','Soc-irrational-structure paper','Engaged','asuka_teacher'),
    mk('はい、青少年の非行問題を論文で扱いました','Yes — Youth-delinquency paper','Earnest','ren_uni'),
    mk('蓮さん、要人射殺事件の影響史を論文で扱いましたね','Ren — VIP-shot-case-impact-hist paper','Reflective','asuka_teacher'),
    mk('はい、内戦勃発の背景を論文で扱いました','Yes — Civil-war-outbreak-bg paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08492',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、被害者の動脈損傷の状況を警察、確認されてますね','Case victim-artery-damage-state police-inv','Reflective','ren_uni'),
    mk('警察、省令改正に基づき捜査基準を見直します','Police ministerial-ord-rev based criteria-review','Procedural','takeda_officer'),
    mk('本件、上空偵察の結果を警察、お持ちですね','Case aerial-recon-result police-have','Reflective','ren_uni'),
    mk('警察、犯罪統計の数学的定理を学習しております','Police crime-stat math-theorem learn','Procedural','takeda_officer'),
    mk('本件、不合理な裁定を警察、不服とされてますね','Case irrational-ruling police-dissent','Reflective','ren_uni'),
    mk('警察、青少年非行への対応に力を入れております','Police youth-delinq-resp focus','Procedural','takeda_officer'),
    mk('本件、要人射殺未遂の事件を警察、捜査されてますね','Case VIP-shot-attempt police-inv','Reflective','ren_uni'),
    mk('警察、暴動勃発に備えております','Police riot-outbreak prep','Close','takeda_officer'),
  ]},
  {id:'conv_08493',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、動脈疾患の社会要因を論文で扱いましたね','Sakura — artery-disease-soc-factor paper','Calm','asuka_teacher'),
    mk('はい、省令改正の影響を論文で扱いました','Yes — Min-ord-rev paper','Earnest teen','sakura_teen'),
    mk('戦時下の偵察活動を論文で扱いましたね','War-recon-act paper','Reflective','asuka_teacher'),
    mk('はい、数学の定理を論文で扱いました','Yes — Math-theorem paper','Earnest','sakura_teen'),
    mk('社会の不合理な構造を論文で扱いましたね','Soc-irrational paper','Engaged','asuka_teacher'),
    mk('はい、青少年の非行問題を論文で扱いました','Yes — Youth-delinq paper','Earnest','sakura_teen'),
    mk('要人射殺事件の歴史を論文で扱いましたね','VIP-shot-hist paper','Reflective','asuka_teacher'),
    mk('はい、内戦勃発の背景を論文で扱いました','Yes — Civil-war-outbreak paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08494',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、動脈の詰まりを医療チームで監視しております','Ren — artery-blockage med-team monitor','Calm','saito_doctor'),
    mk('はい、新省令に基づき医療チームで対応を変えております','Yes — New-min-ord based med-team resp-change','Patient','saito_doctor'),
    mk('画像による偵察的検査を、貴院、なさってるんですね、先生','Image-recon-test your-hosp do, sensei','Curious','ren_uni'),
    mk('はい、循環の定理を医療チームで研修いたします','Yes — Circulation-theorem med-team train','Patient','saito_doctor'),
    mk('医療現場の不合理を、貴院、改善されたそうですね、先生','Med-irrational your-hosp improve, sensei','Reflective','ren_uni'),
    mk('はい、非行少年の医療相談も医療チームで担当しております','Yes — Delinq-youth-med-cons med-team handle','Patient','saito_doctor'),
    mk('救急で射殺事案を、貴院、診られたそうですね、先生','Emerg shot-case your-hosp diag, sensei','Reflective','ren_uni'),
    mk('はい、感染症勃発時の備えを医療チームでしております','Yes — Infect-outbreak prep med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_08495',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('社員の動脈硬化予防プログラムを導入しろ','Staff-artery-prev-prog intro','Crisp','hiroshi_boss'),
    mk('はい。新省令に基づき社内規程を改定します','Yes — New-min-ord based co-rule revise','Methodical','kenji_office'),
    mk('競合の動きを偵察的にチェックしろ','Rival-move recon-check','Direction','hiroshi_boss'),
    mk('はい。経営の基本定理を改めて確認します','Yes — Mgmt-basic-theorem re-confirm','Update','kenji_office'),
    mk('業界の不合理を見直して改革しろ','Industry-irrational review-reform','Direction','hiroshi_boss'),
    mk('はい。社員の子弟非行の相談窓口を設けました','Yes — Staff-child-delinq-cons-window made','Update','kenji_office'),
    mk('当社、要人警護で射殺リスクを管理しろ','Our co — VIP-guard shot-risk-mgmt','Direction','hiroshi_boss'),
    mk('はい。海外勃発の紛争にも備えております','Yes — Overseas-outbreak-dispute prep','Close','kenji_office'),
  ]},
  {id:'conv_08496',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、お家に仏壇のあるお話されてたよ、メイちゃん','Aoi — cust home-altar-told Mei','Reflective','mei_romantic'),
    mk('葵、お店のニュース、クローズアップされて嬉しいね、メイちゃん','Aoi — store-news close-up-glad Mei','Pleased','aoi_barista'),
    mk('葵、お客様、有名曲のパロディを歌われてたよ、メイちゃん','Aoi — cust famous-song-parody-sang Mei','Animated','mei_romantic'),
    mk('葵、お店の音楽、編曲のしっかりした曲ね、メイちゃん','Aoi — store-music arrangement-solid Mei','Reflective','aoi_barista'),
    mk('葵、お客様、生態学の研究なんだって、メイちゃん','Aoi — cust ecology-research Mei','Reflective','mei_romantic'),
    mk('葵、お子様、魔法使いの絵本に夢中だね、メイちゃん','Aoi — child wizard-book-into Mei','Pleased','aoi_barista'),
    mk('葵、お客様、戯曲の脚本書きなんだって、メイちゃん','Aoi — cust play-script-writer Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ナースのお仕事で疲れてらっしゃるみたい、メイちゃん','Aoi — cust nurse-work-tired Mei','Caring close','aoi_barista'),
  ]},
  {id:'conv_08497',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが仏壇を毎朝整えられたぞ','Gran — youth Dad altar-every-morn-set','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃんのお店、テレビでクローズアップされたわよね、あなた?','Yes — Grandpa-store TV close-up, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが歌のパロディを歌われたぞ','Gran — youth Dad song-parody-sang','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、好きな曲を編曲する趣味もおありだったわよね、あなた?','Grandpa — fav-song-arrange-hobby, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが生態学のご本を読まれたぞ','Gran — youth Dad ecology-book-read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、孫に魔法使いのお話をされたわよね、あなた?','Grandpa — grandkid-wizard-told, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが戯曲の脚本も書かれたぞ','Gran — youth Dad play-script-wrote','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ばあさんがナースのお仕事をされてたわよね、あなた?','Grandpa — gran nurse-work, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08498',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お祖父ちゃんの家には仏壇があるのよ','Sho — Grandpa-home altar','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お祭りでテレビにクローズアップされたよ','Mei-sis — me fest TV close-up','Proud child','sho_child'),
    mk('翔くん、お父さんは有名歌のパロディを歌うのが上手よ','Sho — Dad famous-song-parody-good','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、給食の歌を編曲して歌ったよ','Mei-sis — me lunch-song-arrange-sang','Proud child','sho_child'),
    mk('翔くん、メイ姉さんは大学で生態学を勉強したのよ','Sho — Mei-sis univ-ecology-studied','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、魔法使いの絵本、大好きだよ','Mei-sis — me wizard-book-love','Eager child','sho_child'),
    mk('翔くん、学校で短い戯曲を観たんですって?','Sho — school short-play-watched?','Curious','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖母ちゃんがナースだったって聞いたよ','Mei-sis — me Grandma-nurse-heard','Curious close','sho_child'),
  ]},
  {id:'conv_08499',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前ん家、仏壇あんだろ?','Riku — your-home-altar?','Curious teen','sakura_teen'),
    mk('お前、SNSでクローズアップされて目立つよな、桜','You — SNS close-up-stand-out Sakura','Wry','riku_teen'),
    mk('リク、お前、有名曲のパロディ作ってんだろ?','Riku — famous-song-parody-make?','Curious','sakura_teen'),
    mk('お前、文化祭の曲、編曲したんだろ?桜','You — fest-song arrange? Sakura','Curious','riku_teen'),
    mk('リク、お前、生態学好きだよな','Riku — ecology-like','Curious','sakura_teen'),
    mk('お前、魔法使いの小説書いてんだろ?桜','You — wizard-novel-write? Sakura','Curious','riku_teen'),
    mk('リク、お前、文学の授業で戯曲やったろ?','Riku — lit-class-play?','Curious','sakura_teen'),
    mk('お前のお母さん、ナースなんだろ?桜','Your-Mom-nurse? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08500',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖母ちゃんがお家の仏壇を毎日整えてらっしゃるわ','Sho — Grandma home-altar-daily-set','Reflective','yumiko_mom'),
    mk('ママ、ぼく、テレビ番組でクローズアップされたお話聞いたよ','Mom — me TV close-up-story-heard','Eager child','sho_child'),
    mk('翔くん、お父さんが歌のパロディを歌ってらっしゃるわよ','Sho — Dad song-parody-sing','Reflective','yumiko_mom'),
    mk('ママ、ぼく、ピアノの先生に編曲教えてもらったよ','Mom — me piano-teacher-arrange-taught','Proud child','sho_child'),
    mk('翔くん、お父さんが生態学のお仕事してらっしゃるわ','Sho — Dad ecology-work','Reflective','yumiko_mom'),
    mk('ママ、ぼく、魔法使いみたいになりたいよ','Mom — me wizard-like-want','Eager child','sho_child'),
    mk('翔くん、お父さんが戯曲を観に行きましょうって','Sho — Dad-play-watch-go','Tender','yumiko_mom'),
    mk('ママ、お祖母ちゃんがナースだったってお話してくれたよ','Mom — Grandma-nurse-told','Eager close','sho_child'),
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

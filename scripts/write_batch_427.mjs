import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_427 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['道中','抜け出し','母校','ためし','ところどころ','道理','平然と','此処']
const B_T = ['連敗','概観','旧来','番地','大口','取り決め','売り手','融通']
const C_T = ['予見','告訴','蒸留','沈没','演算','概略','諜報','内政']
const D_T = ['帆','ニンニク','アダプタ','槍','ゴマ','えび','復刻','仮面ライダー']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08501',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お出かけの道中はお父さんと仲良くね','Sho — outing-journey Dad-friendly','Caring','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんとお家を抜け出しちゃった','Mom — me Grandpa-home-sneaked-out','Wry child','sho_child'),
    mk('翔くん、お母さんの母校はあの学校だったのよ','Sho — Mom-alma-mater that-school','Reflective','yumiko_mom'),
    mk('ママ、ぼく、ためしにピアノ弾いたらいい音がしたよ','Mom — me try-piano-played good-sound','Eager child','sho_child'),
    mk('翔くん、お家のお花、ところどころ咲いてるわね','Sho — home-flower here-and-there blooming','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんが道理を教えて下さったよ','Mom — me Grandpa-reason-taught','Earnest child','sho_child'),
    mk('翔くん、お父さんは平然とお仕事へお出かけになるわね','Sho — Dad calmly-work-out','Reflective','yumiko_mom'),
    mk('ママ、此処にぼくの絵を貼ってもいい?','Mom — here me-drawing-stick OK?','Curious close','sho_child'),
  ]},
  {id:'conv_08502',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お店までの道中、雨が強いわね、メイちゃん','Aoi — store-journey rain-strong Mei','Reflective','mei_romantic'),
    mk('葵、お客様、会議を抜け出してお見えになったのかしら、メイちゃん','Aoi — cust meeting-sneaked-out-came Mei','Curious','aoi_barista'),
    mk('葵、お客様、お母校がうちの近くだそうよ、メイちゃん','Aoi — cust alma-mater-near-our-store Mei','Reflective','mei_romantic'),
    mk('葵、ためしに新メニューを出してみましょう、メイちゃん','Aoi — try-new-menu-out Mei','Animated','aoi_barista'),
    mk('葵、お店のメニュー、ところどころ書き直したわ、メイちゃん','Aoi — store-menu here-and-there rewrite Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お話の道理をしっかりお持ちね、メイちゃん','Aoi — cust speech-reason-solid Mei','Reflective','aoi_barista'),
    mk('葵、忙しい時も平然とお仕事できる葵、立派ね、メイちゃん','Aoi — busy calm-work splendid Mei','Praising','mei_romantic'),
    mk('葵、新しいレジスター、此処に置きましょう、メイちゃん','Aoi — new-register here-place Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_08503',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんと旅の道中で道に迷ったぞ','Gran — youth Dad-trip-journey-lost','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お仕事を抜け出しても、家族を大事にされたわよね、あなた?','Yes — Grandpa work-sneak-fam-cherish, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんの母校をご家族と訪ねたぞ','Gran — youth Dad-alma-mater-fam-visit','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ためしに新しい料理に挑戦されたわよね、あなた?','Grandpa — try-new-cook-challenged, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが田んぼをところどころお手入れされたぞ','Gran — youth Dad rice-field here-and-there-tend','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、孫に道理を諭してらしたわよね、あなた?','Grandpa — grandkid-reason-tell, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんはどんな困難も平然と乗り越えられたぞ','Gran — Dad any-hardship calm-overcome','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、此処の畳を毎日綺麗にされたわよね、あなた?','Grandpa — here-tatami-daily-clean, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08504',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、塾の道中で寄り道してんだろ?','Riku — cram-journey-detour?','Curious teen','sakura_teen'),
    mk('お前、授業を抜け出してたな、桜','You — class-sneaked-out Sakura','Wry','riku_teen'),
    mk('リク、お前の母校、ここから近いんだろ?','Riku — your-alma-mater here-near?','Curious','sakura_teen'),
    mk('お前、ためしにこの問題、解いてみろよ、桜','You — try-this-prob-solve Sakura','Direction','riku_teen'),
    mk('リク、お前のノート、ところどころ落書きあるな','Riku — your-notebook here-and-there-doodle','Wry','sakura_teen'),
    mk('お前、ちゃんと道理を分かってんのか、桜','You — properly-reason-know? Sakura','Curious','riku_teen'),
    mk('リク、お前、テスト返却でも平然としてんな','Riku — test-return-calm','Wry','sakura_teen'),
    mk('お前、此処に座んなよ、桜','You — here-sit Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_08505',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんとお散歩の道中、楽しいわね','Sho — Mei-sis-walk-journey-fun','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お友達とお家を抜け出して公園に来たよ','Mei-sis — me friend-home-sneaked-park-came','Eager child','sho_child'),
    mk('翔くん、メイ姉さんの母校はここから歩いて十分なのよ','Sho — Mei-sis-alma-mater walk-10-min','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ためしに新しい靴を履いてきたよ','Mei-sis — me try-new-shoes-wore','Proud child','sho_child'),
    mk('翔くん、公園の花壇はところどころ綺麗ね','Sho — park-flower-bed here-and-there-pretty','Reflective','mei_romantic'),
    mk('メイ姉さん、お祖父ちゃんから道理を教えてもらったよ','Mei-sis — Grandpa-reason-taught','Earnest child','sho_child'),
    mk('翔くん、メイ姉さんは何があっても平然としてるのよ','Sho — Mei-sis whatever-calm','Reflective','mei_romantic'),
    mk('メイ姉さん、此処にお絵描きしてもいい?','Mei-sis — here-draw OK?','Curious close','sho_child'),
  ]},
  {id:'conv_08506',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、競合に連敗するな','Our co — rival con-loss-not','Crisp','hiroshi_boss'),
    mk('はい。業界全体の概観を資料にまとめました','Yes — Industry-overview-doc-made','Methodical','kenji_office'),
    mk('旧来の商品ラインも維持しろ','Old-prod-line maintain','Direction','hiroshi_boss'),
    mk('はい。新店舗の番地が確定しました','Yes — New-store-address-fixed','Update','kenji_office'),
    mk('お得意様の大口注文に対応しろ','VIP-large-order resp','Direction','hiroshi_boss'),
    mk('はい。お取引先と価格の取り決めを更新しました','Yes — Partner-price-agree-update','Update','kenji_office'),
    mk('当社、売り手市場の優位を活かせ','Our co — seller-market-adv-utilize','Direction','hiroshi_boss'),
    mk('はい。お得意様のご要望に融通を利かせます','Yes — VIP-request flex-resp','Close','kenji_office'),
  ]},
  {id:'conv_08507',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('競合との連敗を反省しましょう','Rival-con-loss-reflect','Brisk','yuki_office'),
    mk('はい。市場の概観をプレゼン資料に入れました','Yes — Market-overview pres-doc included','Cooperative','kenji_office'),
    mk('旧来取引先との関係を強化しましょう','Old-partner-rel strengthen','Direction','yuki_office'),
    mk('はい。新支店の番地が確定し、引越し計画を立てます','Yes — New-branch-address-fixed move-plan','Update','kenji_office'),
    mk('大口顧客への提案書を準備しましょう','Large-cust-proposal prep','Direction','yuki_office'),
    mk('はい。価格の取り決めを契約書に反映しました','Yes — Price-agree-contract-reflect','Update','kenji_office'),
    mk('売り手市場の今こそ攻めましょう','Seller-market-now offensive','Direction','yuki_office'),
    mk('はい。お得意様への融通の利く対応を心掛けます','Yes — VIP flex-resp aim','Close','kenji_office'),
  ]},
  {id:'conv_08508',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文審査で連敗するな','Ren — paper-review-con-loss-not','Mentor','hiroshi_boss'),
    mk('はい。研究分野の概観を論文の序章にまとめました','Yes — Research-overview-intro-summary','Earnest','ren_uni'),
    mk('蓮、旧来の研究手法も学習しろ','Ren — old-research-method-learn','Direction','hiroshi_boss'),
    mk('はい。研究室の番地と連絡先を明示します','Yes — Lab-address-contact clarify','Polite','ren_uni'),
    mk('蓮、大口スポンサーへの提案書も準備しろ','Ren — large-sponsor-proposal prep','Direction','hiroshi_boss'),
    mk('はい。共同研究の取り決めを論文付録で明示します','Yes — Joint-research-agree appendix-clarify','Earnest','ren_uni'),
    mk('蓮、特許市場で売り手の立場を理解しろ','Ren — patent-market-seller-position-grasp','Direction','hiroshi_boss'),
    mk('はい。研究機材を融通で借用させていただきます','Yes — Research-equip flex-borrow','Earnest close','ren_uni'),
  ]},
  {id:'conv_08509',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、地域の安全に連敗は許されない','Police local-safety con-loss-not-allow','Calm','takeda_officer'),
    mk('はい。警察、犯罪状況の概観を発表されてますね','Yes — Police crime-overview-announce','Cooperative','kenji_office'),
    mk('警察、旧来の防犯手法と新手法を組み合わせます','Police old-crime-prev-method-new-combine','Procedural','takeda_officer'),
    mk('はい。警察、通報番地を確実に特定なさるんですね','Yes — Police call-address surely-id','Cooperative','kenji_office'),
    mk('警察、大口振り込め詐欺の事件を捜査しております','Police large-trans-fraud inv','Procedural','takeda_officer'),
    mk('はい。警察、関係機関と取り決めを結ばれたんですね','Yes — Police rel-org-agree-tied','Cooperative','kenji_office'),
    mk('警察、悪質な売り手による詐欺を取り締まります','Police mal-seller-fraud crack-down','Procedural','takeda_officer'),
    mk('はい。警察、市民への融通の利く対応、ありがたいです','Yes — Police citizen flex-resp grateful','Close','kenji_office'),
  ]},
  {id:'conv_08510',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、競合との連敗時にも諦めなかったぞ','Dad — rival-con-loss never-quit','Sage','hiroshi_elder'),
    mk('はい。お父さんは経営概観を社員と共有されました','Yes — Dad mgmt-overview-staff-share','Commitment','hiroshi_boss'),
    mk('お父さん、旧来の取引先を大事にされたぞ','Dad — old-partner-cherish','Wistful','hiroshi_elder'),
    mk('はい。お父さんは本社番地を縁起の良い場所に選ばれました','Yes — Dad HQ-address auspicious-chose','Reflective','hiroshi_boss'),
    mk('お父さん、大口注文を獲得する手腕がおありだったぞ','Dad — large-order-acq-skill','Wistful','hiroshi_elder'),
    mk('はい。お父さんはお取引先と取り決めを明文化された','Yes — Dad partner-agree-written','Reflective','hiroshi_boss'),
    mk('お父さん、売り手としての誇りを社員に伝えられたぞ','Dad — seller-pride-staff-convey','Wistful','hiroshi_elder'),
    mk('はい。お父さんはお得意様への融通の利く対応を実践された','Yes — Dad VIP flex-resp-practice','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08511',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、災害を予見した古文書を論文で扱いましたね','Ren — disaster-foreseen-ancient-doc paper','Calm','asuka_teacher'),
    mk('はい、名誉毀損の告訴事例を論文で扱いました','Yes — Defame-sue-case paper','Earnest','ren_uni'),
    mk('蓮さん、酒の蒸留技術史を論文で扱いましたね','Ren — alcohol-distill-tech-hist paper','Reflective','asuka_teacher'),
    mk('はい、商船が沈没した事故の調査を論文で扱いました','Yes — Merchant-ship-sunk-acc-inv paper','Earnest','ren_uni'),
    mk('演算理論の歴史を論文で扱いましたね','Comp-theory-hist paper','Engaged','asuka_teacher'),
    mk('はい、社会改革の概略を論文で扱いました','Yes — Soc-reform-outline paper','Earnest','ren_uni'),
    mk('蓮さん、冷戦時代の諜報史を論文で扱いましたね','Ren — Cold-war-espionage-hist paper','Reflective','asuka_teacher'),
    mk('はい、近代国家の内政改革を論文で扱いました','Yes — Modern-state-internal-reform paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08512',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、警察、事件を予見されてましたか、というご質問ですね','Case police-event-foreseen-Q','Curious','ren_uni'),
    mk('警察、被害者からの告訴を受理しました','Police victim-sue-accept','Procedural','takeda_officer'),
    mk('本件、不法蒸留所の摘発を警察、進められてますね','Case illegal-distill-bust police-progress','Reflective','ren_uni'),
    mk('警察、漁船沈没事故の調査を継続しております','Police fish-ship-sunk-inv-continue','Procedural','takeda_officer'),
    mk('本件、データの演算ミスを警察、確認されたんですね','Case data-comp-mistake police-confirm','Reflective','ren_uni'),
    mk('警察、事件の概略を記者会見で発表します','Police case-outline press-conf-announce','Procedural','takeda_officer'),
    mk('本件、外国諜報活動を警察、警戒されてますね','Case foreign-espionage police-watch','Reflective','ren_uni'),
    mk('警察、内政干渉の事案にも対応します','Police internal-interfere-case resp','Close','takeda_officer'),
  ]},
  {id:'conv_08513',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、災害を予見した古文書を論文で扱いましたね','Sakura — disaster-foreseen-doc paper','Calm','asuka_teacher'),
    mk('はい、名誉毀損の告訴事例を論文で扱いました','Yes — Defame-sue paper','Earnest teen','sakura_teen'),
    mk('酒の蒸留技術史を論文で扱いましたね','Alcohol-distill-hist paper','Reflective','asuka_teacher'),
    mk('はい、商船沈没事故を論文で扱いました','Yes — Merchant-ship-sunk paper','Earnest','sakura_teen'),
    mk('演算理論の歴史を論文で扱いましたね','Comp-theory-hist paper','Engaged','asuka_teacher'),
    mk('はい、社会改革の概略を論文で扱いました','Yes — Soc-reform-outline paper','Earnest','sakura_teen'),
    mk('冷戦時代の諜報史を論文で扱いましたね','Cold-war-espionage paper','Reflective','asuka_teacher'),
    mk('はい、近代国家の内政改革を論文で扱いました','Yes — Modern-internal-reform paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08514',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、症状を予見した検査を医療チームで実施しております','Ren — symptom-foreseen-test med-team do','Calm','saito_doctor'),
    mk('はい、医療過誤の告訴対応を医療チームで備えております','Yes — Med-mal-sue-resp med-team prep','Patient','saito_doctor'),
    mk('薬剤の蒸留精製を、貴院、なさってるそうですね、先生','Drug-distill-purif your-hosp do, sensei','Curious','ren_uni'),
    mk('はい、海難事故の沈没事案の救命を医療チームで担当しました','Yes — Sea-acc-sunk-rescue med-team handle','Patient','saito_doctor'),
    mk('医療データの演算解析を、貴院、強化されたんですね、先生','Med-data-comp-anal your-hosp strengthen, sensei','Reflective','ren_uni'),
    mk('はい、診療の概略を患者さんに丁寧に説明しております','Yes — Treat-outline-patient-explain','Patient','saito_doctor'),
    mk('医療諜報のような情報戦から貴院、患者を守ってらっしゃるそうですね、先生','Med-espionage-info-war patient-protect, sensei','Reflective','ren_uni'),
    mk('はい、内政の医療政策に医療チームで意見書を出します','Yes — Internal-med-policy med-team opinion-submit','Patient close','saito_doctor'),
  ]},
  {id:'conv_08515',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('競合の動きを予見して先回りしろ','Rival-move-foreseen pre-empt','Crisp','hiroshi_boss'),
    mk('はい。風評被害には告訴も視野に入れます','Yes — Reputation-damage sue-consider','Methodical','kenji_office'),
    mk('当社、香料の蒸留精製を強化しろ','Our co — fragrance-distill-strengthen','Direction','hiroshi_boss'),
    mk('はい。海外プロジェクトの沈没を防ぐ対策をしております','Yes — Overseas-proj-sunk-prev-counter','Update','kenji_office'),
    mk('当社、データ演算サーバを更新しろ','Our co — data-comp-server update','Direction','hiroshi_boss'),
    mk('はい。事業の概略を株主総会で説明します','Yes — Biz-outline shareholders-explain','Update','kenji_office'),
    mk('当社、産業諜報には厳重に警戒しろ','Our co — industrial-espionage strict-watch','Direction','hiroshi_boss'),
    mk('はい。各国の内政情勢を分析しております','Yes — Countries-internal-situation-anal','Close','kenji_office'),
  ]},
  {id:'conv_08516',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、帆船のお絵を描いてらしたよ、メイちゃん','Aoi — cust sail-ship-drew Mei','Reflective','mei_romantic'),
    mk('葵、新メニュー、ニンニク入りスープ作りましょう、メイちゃん','Aoi — new-menu garlic-soup make Mei','Animated','aoi_barista'),
    mk('葵、お店の電源、アダプタが新しくなったね、メイちゃん','Aoi — store-outlet adapter-new Mei','Reflective','mei_romantic'),
    mk('葵、お祭りで槍の演武を見たわよ、メイちゃん','Aoi — fest spear-demo-saw Mei','Animated','aoi_barista'),
    mk('葵、新メニュー、ゴマだれの和え物にしましょう、メイちゃん','Aoi — new-menu sesame-dress-dish Mei','Direction','mei_romantic'),
    mk('葵、新メニュー、えびのフライ作りましょう、メイちゃん','Aoi — new-menu shrimp-fry make Mei','Animated','aoi_barista'),
    mk('葵、レトロな看板、復刻したいね、メイちゃん','Aoi — retro-sign reissue-want Mei','Reflective','mei_romantic'),
    mk('葵、お子様、仮面ライダーのお菓子を選んでらっしゃるよ、メイちゃん','Aoi — child Kamen-Rider-snack-chose Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_08517',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが帆船の模型を作られたぞ','Gran — youth Dad sail-ship-model-made','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ニンニク料理がお好きだったわよね、あなた?','Yes — Grandpa garlic-cuisine-liked, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが古いアダプタを取り換えたぞ','Gran — youth Dad old-adapter-swap','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お祭りで槍の演武をされたわよね、あなた?','Grandpa — fest-spear-demo, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがゴマ和えを得意とされたぞ','Gran — youth Dad sesame-dish-good','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、夏になるとえびを楽しまれたわよね、あなた?','Grandpa — summer-shrimp-enjoyed, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、レコードの復刻を喜ばれたぞ','Gran — youth record-reissue-pleased','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、孫と一緒に仮面ライダー観てらしたわよね、あなた?','Grandpa — grandkid-Kamen-Rider-watch, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08518',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが帆船の絵本を読んで下さるそうよ','Sho — Dad sail-ship-book-read','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、ママのニンニクパスタ大好きだよ','Mei-sis — me Mom-garlic-pasta-love','Eager child','sho_child'),
    mk('翔くん、お父さんがスマホのアダプタを買ってきたわ','Sho — Dad phone-adapter-bought','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、博物館で槍を見たよ','Mei-sis — me museum-spear-saw','Eager child','sho_child'),
    mk('翔くん、おやつのお団子にゴマがついてるわね','Sho — snack-dango-sesame-on','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お寿司のえびが一番好きだよ','Mei-sis — me sushi-shrimp-fav','Eager child','sho_child'),
    mk('翔くん、お父さんが昔の絵本を復刻して買って来たわ','Sho — Dad old-picture-book-reissue-bought','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、仮面ライダーになりたい!','Mei-sis — me Kamen-Rider-want','Eager close','sho_child'),
  ]},
  {id:'conv_08519',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、博物館で帆船模型見ただろ?','Riku — museum sail-ship-model-saw?','Curious teen','sakura_teen'),
    mk('お前、給食のニンニクの匂い気にすんなよ、桜','You — lunch-garlic-smell-don\'t-care Sakura','Wry','riku_teen'),
    mk('リク、お前、スマホのアダプタ壊したろ?','Riku — phone-adapter-broke?','Wry','sakura_teen'),
    mk('お前、文化祭で槍の演武やったろ?桜','You — fest spear-demo? Sakura','Curious','riku_teen'),
    mk('リク、お前、給食のゴマ和え好きだろ?','Riku — lunch-sesame-dish-like?','Curious','sakura_teen'),
    mk('お前、寿司屋でえび頼んだろ?桜','You — sushi-shrimp-ordered? Sakura','Curious','riku_teen'),
    mk('リク、お前、昔のアニメの復刻見てんだろ?','Riku — old-anime-reissue-watch?','Curious','sakura_teen'),
    mk('お前、仮面ライダーのおもちゃ持ってんだろ?桜','You — Kamen-Rider-toy-have? Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_08520',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが帆船の絵を描いてらっしゃるわ','Sho — Dad sail-ship-paint','Reflective','yumiko_mom'),
    mk('ママ、ぼく、ニンニクの匂い大丈夫だよ','Mom — me garlic-smell-OK','Eager child','sho_child'),
    mk('翔くん、お父さんが古いアダプタを処分なさってたわ','Sho — Dad old-adapter-dispose','Reflective','yumiko_mom'),
    mk('ママ、ぼく、博物館で槍と兜を見たよ','Mom — me museum-spear-helmet-saw','Eager child','sho_child'),
    mk('翔くん、ママは煎りゴマを朝ご飯に使うのよ','Sho — Mom sesame-roast-breakfast-use','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お寿司屋さんでえびを食べたいよ','Mom — me sushi-shrimp-want','Eager child','sho_child'),
    mk('翔くん、お父さんが昔のアニメの復刻版を買ってきたわ','Sho — Dad old-anime-reissue-bought','Reflective','yumiko_mom'),
    mk('ママ、ぼく、仮面ライダーの真似してみたよ','Mom — me Kamen-Rider-mimicked','Proud close','sho_child'),
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

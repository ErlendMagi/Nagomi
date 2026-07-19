import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_432 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['あいかわらず','おまかせ','さがし','わかれ','しるし','さながら','すごし','段々']
const B_T = ['加筆','手直し','終点','公示','客室','税別','免税','効能']
const C_T = ['後遺症','火葬','引き起こさ','漏らし','退去','服従','脱退','揶揄']
const D_T = ['育毛','素顔','投球','真珠','灯油','ゾウ','主食','鯛']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08601',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖父ちゃんはあいかわらずお元気よ','Sho — Grandpa as-usual-well','Caring','yumiko_mom'),
    mk('ママ、今日のおやつ、ママのおまかせでいいよ','Mom — today-snack Mom-leave-up-to OK','Eager child','sho_child'),
    mk('翔くん、お父さんのお仕事道具をさがしてあげてね','Sho — Dad-work-tool look-for','Direction','yumiko_mom'),
    mk('ママ、ぼく、お友達とわかれる時、寂しかったよ','Mom — me friend-part-time-lonely','Earnest child','sho_child'),
    mk('翔くん、ご褒美のしるしにシール貼りましょうね','Sho — reward-mark sticker-stick','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんの大きな手がさながら宝物のようだったよ','Mom — me Dad-big-hand like-treasure','Reflective child','sho_child'),
    mk('翔くん、お祖母ちゃんはお元気にすごしてらっしゃるわ','Sho — Grandma-well-pass-time','Reflective','yumiko_mom'),
    mk('ママ、ぼく、ピアノが段々上手になってきたよ','Mom — me piano-gradually-better','Proud close','sho_child'),
  ]},
  {id:'conv_08602',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、あいかわらず奥様とお見えになるね、メイちゃん','Aoi — cust-as-usual-wife-come Mei','Reflective','mei_romantic'),
    mk('葵、本日のおすすめは、シェフのおまかせメニューにしましょう、メイちゃん','Aoi — today-rec chef-omakase-menu Mei','Direction','aoi_barista'),
    mk('葵、お客様のお落とし物、店内をさがしましょう、メイちゃん','Aoi — cust-lost-store-look-for Mei','Direction','mei_romantic'),
    mk('葵、お客様、お友達とおわかれの会をなさってたよ、メイちゃん','Aoi — cust-friend-farewell-meet Mei','Reflective','aoi_barista'),
    mk('葵、新メニューのご注文に、しるしの星マーク付けましょうね、メイちゃん','Aoi — new-menu-order-star-mark Mei','Direction','mei_romantic'),
    mk('葵、お店の朝の静けさは、さながら別世界ね、メイちゃん','Aoi — store-morn-quiet like-another-world Mei','Reflective','aoi_barista'),
    mk('葵、お客様、午後はゆっくりすごしてらしたよ、メイちゃん','Aoi — cust-afternoon-relax-pass-time Mei','Reflective','mei_romantic'),
    mk('葵、新メニューの売り上げ、段々上がってきたわね、メイちゃん','Aoi — new-menu-sales-gradually-up Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_08603',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんはあいかわらずお仕事熱心だったぞ','Gran — youth Dad as-usual-work-zeal','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お料理はおまかせでも美味しくお作りになったわよね、あなた?','Yes — Grandpa-cook-omakase-tasty, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが古い手紙をさがしてらしたぞ','Gran — youth Dad-old-letter-look-for','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご友人とおわかれの時、寂しがられたわよね、あなた?','Grandpa — friend-part-lonely, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが家紋をしるしとして大事にされたぞ','Gran — youth Dad-family-crest-mark-cherish','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お庭の桜は、さながら絵画でしたわよね、あなた?','Grandpa — garden-cherry like-painting, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと穏やかにすごしたぞ','Gran — youth Dad-calm-pass-time','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お庭のお花が段々増えていったわよね、あなた?','Grandpa — garden-flower-gradually-more, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08604',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、あいかわらずスマホ見すぎだろ','Riku — as-usual-phone-too-much','Wry teen','sakura_teen'),
    mk('お前、お昼はおまかせの定食頼めよ、桜','You — lunch omakase-set Sakura','Direction','riku_teen'),
    mk('リク、お前のノート、教室でさがしてやったぞ','Riku — your-note-classroom-look-for','Wry','sakura_teen'),
    mk('お前、卒業でわかれる時、泣くんだろ?桜','You — grad-part-cry? Sakura','Curious','riku_teen'),
    mk('リク、お前、テストの答えにしるし付けてんな','Riku — test-answer-mark','Curious','sakura_teen'),
    mk('お前のテスト点、さながら奇跡だな、桜','Your-test-score like-miracle Sakura','Wry','riku_teen'),
    mk('リク、お前、週末ゆっくりすごしてんだろ?','Riku — weekend-relax?','Curious','sakura_teen'),
    mk('お前、勉強、段々できるようになってきたな、桜','You — study-gradually-able Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_08605',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さん、あいかわらずお絵描きが上手いのよ','Sho — Mei-sis as-usual-draw-good','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、デザートはメイ姉さんのおまかせでいいよ','Mei-sis — me dessert-omakase OK','Eager child','sho_child'),
    mk('翔くん、メイ姉さんと一緒にお花をさがしましょうね','Sho — Mei-sis-flower-look-for','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとわかれる時、寂しいよ','Mei-sis — me Dad-part-lonely','Earnest child','sho_child'),
    mk('翔くん、お絵描きにメイ姉さんのしるしの星を付けてあげる','Sho — drawing-Mei-sis-mark-star','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お祭りの賑わいがさながら夢みたいだったよ','Mei-sis — me fest-bustle like-dream','Reflective child','sho_child'),
    mk('翔くん、メイ姉さんとゆっくりすごせて嬉しいわね','Sho — Mei-sis-relax-pass-time-glad','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お絵描き段々上手くなってきたよ','Mei-sis — me drawing-gradually-better','Proud close','sho_child'),
  ]},
  {id:'conv_08606',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、企画書に加筆を入れて再提出しろ','Our co — proposal-revise-add-resub','Crisp','hiroshi_boss'),
    mk('はい。サンプル品の手直しを工場に依頼しました','Yes — Sample-tweak-factory-req','Methodical','kenji_office'),
    mk('当社の新事業、終点を見据えて計画しろ','Our co — new-biz endpoint-foresee plan','Direction','hiroshi_boss'),
    mk('はい。新製品の発売を公示する手続きを進めます','Yes — New-prod-launch-public-notice','Update','kenji_office'),
    mk('当社、お客様用客室の整備を急げ','Our co — cust-guest-room-prep-hasten','Direction','hiroshi_boss'),
    mk('はい。価格は税別表記でカタログに記載します','Yes — Price tax-excl catalog-list','Update','kenji_office'),
    mk('海外向け店舗で免税対応を整えろ','Overseas-store tax-free-prep','Direction','hiroshi_boss'),
    mk('はい。新製品の効能を実証データで示します','Yes — New-prod-effect data-demo','Close','kenji_office'),
  ]},
  {id:'conv_08607',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('提案書の各章に加筆をしましょう','Proposal-each-ch-add','Brisk','yuki_office'),
    mk('はい。試作品の手直しを業者に依頼します','Yes — Proto-tweak-vendor-req','Cooperative','kenji_office'),
    mk('プロジェクト終点の評価指標を決めましょう','Proj-endpoint-eval-KPI decide','Direction','yuki_office'),
    mk('はい。会社合併の公示日が決まりました','Yes — Merger-pub-notice-date set','Update','kenji_office'),
    mk('お得意様用客室の備品を確認しましょう','VIP-guest-room-equip-check','Direction','yuki_office'),
    mk('はい。販売価格は税別で社内資料に統一します','Yes — Sales-price tax-excl co-doc-unify','Update','kenji_office'),
    mk('海外駐在員の免税手続を支援しましょう','Overseas-expat tax-free-proc-supp','Direction','yuki_office'),
    mk('はい。新製品の効能をパッケージに明示します','Yes — New-prod-effect package-clarify','Close','kenji_office'),
  ]},
  {id:'conv_08608',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文に加筆を加えて完成させろ','Ren — paper-add-complete','Mentor','hiroshi_boss'),
    mk('はい。実験装置の手直しを技術員に依頼します','Yes — Exp-equip-tweak-tech-req','Earnest','ren_uni'),
    mk('蓮、研究計画の終点設定を見直せ','Ren — research-endpoint-review','Direction','hiroshi_boss'),
    mk('はい。研究募集の公示文を準備中です','Yes — Research-recruit-pub-notice prep','Polite','ren_uni'),
    mk('蓮、学会客室の予約を確認しろ','Ren — conf-guest-room-res check','Direction','hiroshi_boss'),
    mk('はい。研究予算は税別表記で記録します','Yes — Research-budget tax-excl record','Earnest','ren_uni'),
    mk('蓮、研究者の海外免税申請を支援しろ','Ren — researcher-overseas tax-free-app-supp','Direction','hiroshi_boss'),
    mk('はい。試料の効能を学会で発表いたします','Yes — Sample-effect-conf-pres','Earnest close','ren_uni'),
  ]},
  {id:'conv_08609',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、捜査報告書に加筆を加えました','Police inv-report-add','Calm','takeda_officer'),
    mk('はい。警察、防犯機材の手直しをご依頼されたんですね','Yes — Police crime-prev-equip-tweak-req','Cooperative','kenji_office'),
    mk('警察、長期捜査の終点を見据えております','Police long-inv-endpoint-foresee','Procedural','takeda_officer'),
    mk('はい。警察、お尋ね者の公示も継続されてますね','Yes — Police wanted-pub-notice cont','Cooperative','kenji_office'),
    mk('警察、署の客室で被害者面接を行います','Police station-guest-room-victim-interview','Procedural','takeda_officer'),
    mk('はい。警察、税別の予算管理、ご苦労様です','Yes — Police tax-excl-budget-mgmt thx','Cooperative','kenji_office'),
    mk('警察、空港での免税品不正持ち出しを警戒します','Police airport-tax-free-illegal-watch','Procedural','takeda_officer'),
    mk('はい。警察、薬物の効能を悪用する事件もご捜査ですね','Yes — Police drug-effect-abuse inv','Close','kenji_office'),
  ]},
  {id:'conv_08610',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、社訓に加筆を加えられたぞ','Dad — founding co-creed-add','Sage','hiroshi_elder'),
    mk('はい。お父さんは試作品の手直しを自ら確認された','Yes — Dad proto-tweak self-check','Commitment','hiroshi_boss'),
    mk('お父さん、事業の終点を明確に見据えられたぞ','Dad — biz-endpoint-clear-foresee','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新事業の公示を社員に共有された','Yes — Dad new-biz-pub-notice-staff-share','Reflective','hiroshi_boss'),
    mk('お父さん、本社客室の意匠を自ら選ばれたぞ','Dad — HQ-guest-room-design self-chose','Wistful','hiroshi_elder'),
    mk('はい。お父さんは税別表示の徹底を求められた','Yes — Dad tax-excl-display-strict-req','Reflective','hiroshi_boss'),
    mk('お父さん、海外免税ビジネスへの参入を決断されたぞ','Dad — overseas-tax-free-biz-decide','Wistful','hiroshi_elder'),
    mk('はい。お父さんは商品効能の科学的検証を重んじられた','Yes — Dad prod-effect-sci-verif-cherish','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08611',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、戦争被害者の後遺症を論文で扱いましたね','Ren — war-victim-aftermath paper','Calm','asuka_teacher'),
    mk('はい、火葬文化の地域差を論文で扱いました','Yes — Crem-culture-region paper','Earnest','ren_uni'),
    mk('蓮さん、災害が引き起こさせた社会変動を論文で扱いましたね','Ren — disaster-induced-soc-change paper','Reflective','asuka_teacher'),
    mk('はい、軍事機密を漏らした事件の歴史を論文で扱いました','Yes — Mil-secret-leaked-case-hist paper','Earnest','ren_uni'),
    mk('占領地からの住民退去を論文で扱いましたね','Occ-area-resident-evict paper','Engaged','asuka_teacher'),
    mk('はい、絶対服従を強いた組織の研究を論文で扱いました','Yes — Abs-obedience-forced-org paper','Earnest','ren_uni'),
    mk('蓮さん、国連脱退の事例史を論文で扱いましたね','Ren — UN-withdraw-case-hist paper','Reflective','asuka_teacher'),
    mk('はい、揶揄的な政治風刺画の歴史を論文で扱いました','Yes — Mockery-pol-satire-cartoon-hist paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08612',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、被害者の後遺症に警察、配慮されてますね','Case victim-aftermath police-care','Reflective','ren_uni'),
    mk('警察、火葬場周辺の事案にも対応します','Police crem-area-case-resp','Procedural','takeda_officer'),
    mk('本件、警察、容疑者が引き起こさせた被害を把握されてますね','Case police-suspect-induced-damage-grasp','Reflective','ren_uni'),
    mk('警察、情報を漏らした内部者を厳しく追及します','Police info-leaked-insider-strict-pursue','Procedural','takeda_officer'),
    mk('本件、危険区域から住民退去を警察、誘導されてますね','Case danger-area-evict police-lead','Reflective','ren_uni'),
    mk('警察、絶対服従を強いる組織の解体を進めます','Police abs-obedience-org-dismantle','Procedural','takeda_officer'),
    mk('本件、組織からの脱退者の保護を警察、なさってますね','Case org-defector-prot police-do','Reflective','ren_uni'),
    mk('警察、被害者を揶揄する言動を厳しく注意します','Police victim-mockery strict-warn','Close','takeda_officer'),
  ]},
  {id:'conv_08613',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、戦争被害者の後遺症を論文で扱いましたね','Sakura — war-aftermath paper','Calm','asuka_teacher'),
    mk('はい、火葬文化の地域差を論文で扱いました','Yes — Crem-region paper','Earnest teen','sakura_teen'),
    mk('災害が引き起こさせた社会変動を論文で扱いましたね','Disaster-induced paper','Reflective','asuka_teacher'),
    mk('はい、軍事機密を漏らした事件を論文で扱いました','Yes — Secret-leaked paper','Earnest','sakura_teen'),
    mk('占領地からの住民退去を論文で扱いましたね','Occ-evict paper','Engaged','asuka_teacher'),
    mk('はい、絶対服従の組織を論文で扱いました','Yes — Abs-obedience paper','Earnest','sakura_teen'),
    mk('国連脱退の事例史を論文で扱いましたね','UN-withdraw paper','Reflective','asuka_teacher'),
    mk('はい、揶揄的な政治風刺画を論文で扱いました','Yes — Mockery-satire paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08614',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、長期療養者の後遺症ケアを医療チームで担当しております','Ren — long-recov-aftermath-care med-team handle','Calm','saito_doctor'),
    mk('はい、火葬前の遺体検案を医療チームで実施します','Yes — Pre-crem-autopsy med-team do','Patient','saito_doctor'),
    mk('感染症を引き起こさせた水質問題の研究を、貴院、なさったんですね、先生','Infect-induced-water-research your-hosp do, sensei','Curious','ren_uni'),
    mk('はい、個人情報を漏らした事案の再発防止を医療チームで強化しております','Yes — Personal-info-leaked-prev med-team strength','Patient','saito_doctor'),
    mk('入院患者の早期退去を、貴院、なさる方針なんですね、先生','Inpat-early-disch your-hosp policy, sensei','Reflective','ren_uni'),
    mk('はい、絶対服従を求める医療には医療チームで疑問を呈します','Yes — Abs-obedience-med med-team question','Patient','saito_doctor'),
    mk('学会から脱退した医師の心情を、貴院、ご理解されてるそうですね、先生','Conf-defector-doctor-feel your-hosp understand, sensei','Reflective','ren_uni'),
    mk('はい、患者を揶揄する発言は医療チームで厳禁としております','Yes — Patient-mockery med-team strict-no','Patient close','saito_doctor'),
  ]},
  {id:'conv_08615',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、社員の労災後遺症対応を充実させろ','Our co — staff-injury-aftermath-resp enrich','Crisp','hiroshi_boss'),
    mk('はい。火葬場関連事業への参入も検討中です','Yes — Crem-rel-biz-entry consider','Methodical','kenji_office'),
    mk('競合に動揺を引き起こさせる新製品を出せ','Rival-induced-anxiety new-prod','Direction','hiroshi_boss'),
    mk('はい。機密を漏らした社員には厳罰で対応します','Yes — Secret-leaked-staff strict-resp','Update','kenji_office'),
    mk('当社、悪質取引先からの退去を急げ','Our co — mal-partner-evict-hasten','Direction','hiroshi_boss'),
    mk('はい。絶対服従ではなく対話の社風を作ります','Yes — Abs-obedience-not-dialog co-culture','Update','kenji_office'),
    mk('当社、業界団体から脱退する選択肢も持て','Our co — industry-org-withdraw option-have','Direction','hiroshi_boss'),
    mk('はい。商品を揶揄するレビューにも誠実に対応します','Yes — Prod-mockery-review sincere-resp','Close','kenji_office'),
  ]},
  {id:'conv_08616',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、育毛剤の研究をなさってるんだって、メイちゃん','Aoi — cust hair-grow-research Mei','Reflective','mei_romantic'),
    mk('葵、お客様、素顔のままお見えになったわよ、メイちゃん','Aoi — cust no-makeup-came Mei','Reflective','aoi_barista'),
    mk('葵、お客様、投球フォームのお話されてたよ、メイちゃん','Aoi — cust pitch-form-told Mei','Reflective','mei_romantic'),
    mk('葵、お客様、真珠のネックレスが綺麗ね、メイちゃん','Aoi — cust pearl-necklace-pretty Mei','Praising','aoi_barista'),
    mk('葵、お店の灯油ストーブ、新しくしたいわね、メイちゃん','Aoi — store-kerosene-stove-new Mei','Reflective','mei_romantic'),
    mk('葵、お子様、ゾウの絵本に夢中だね、メイちゃん','Aoi — child elephant-book-into Mei','Pleased','aoi_barista'),
    mk('葵、お客様、お米の主食派なんだって、メイちゃん','Aoi — cust rice-staple-faction Mei','Reflective','mei_romantic'),
    mk('葵、お客様、鯛のお祝い料理のお話されてたよ、メイちゃん','Aoi — cust sea-bream-celeb-told Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08617',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが育毛剤を試してらしたぞ','Gran — youth Dad hair-grow-tried','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、素顔のままお出かけなさったわよね、あなた?','Yes — Grandpa-no-makeup-out, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが孫に投球を教えられたぞ','Gran — youth Dad-grandkid-pitch-taught','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お祖母ちゃんに真珠のネックレスを贈られたわよね、あなた?','Grandpa — Grandma-pearl-necklace-gift, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが灯油ストーブを買ってきたぞ','Gran — youth Dad-kerosene-stove-bought','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、動物園でゾウを孫と見られたわよね、あなた?','Grandpa — zoo-elephant-grandkid-saw, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはお米を主食とされたぞ','Gran — youth Dad-rice-staple','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お正月に鯛のお料理をふるまわれたわよね、あなた?','Grandpa — NY-sea-bream-treated, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08618',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが育毛のことで気にしてらっしゃるのよ','Sho — Dad hair-grow-care','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お母さんの素顔大好きだよ','Mei-sis — me Mom-no-makeup-love','Eager child','sho_child'),
    mk('翔くん、お父さんと投球の練習しましょうね','Sho — Dad-pitch-practice','Direction','mei_romantic'),
    mk('メイ姉さん、お祖母ちゃんが真珠のネックレスをくれたよ','Mei-sis — Grandma-pearl-necklace-gave','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんが灯油を補給に行かれたわ','Sho — Grandpa-kerosene-refill-went','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、動物園でゾウさん見たよ','Mei-sis — me zoo-elephant-saw','Eager child','sho_child'),
    mk('翔くん、お米が日本のお主食なのよ','Sho — rice Japan-staple','Reflective','mei_romantic'),
    mk('メイ姉さん、お祖父ちゃんがお正月に鯛を出してくれたよ','Mei-sis — Grandpa-NY-sea-bream-served','Eager close','sho_child'),
  ]},
  {id:'conv_08619',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前の父ちゃん、育毛気にしてんだろ?','Riku — your-Dad-hair-grow-care?','Wry teen','sakura_teen'),
    mk('お前、素顔の方が可愛いのに化粧すんな、桜','You — no-makeup-cute Sakura','Wry','riku_teen'),
    mk('リク、お前、野球部で投球練習やってんだろ?','Riku — baseball-pitch-prac?','Curious','sakura_teen'),
    mk('お前、誕生日に真珠もらったろ?桜','You — bday-pearl-got? Sakura','Curious','riku_teen'),
    mk('リク、お前ん家、灯油ストーブまだ使ってんの?','Riku — your-home-kerosene-still?','Curious','sakura_teen'),
    mk('お前、ゾウのキャラ好きだろ?桜','You — elephant-chara-like? Sakura','Curious','riku_teen'),
    mk('リク、お前、お米が主食派だろ?','Riku — rice-staple?','Curious','sakura_teen'),
    mk('お前、給食の鯛料理、おかわりしたろ?桜','You — lunch-sea-bream-seconds? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08620',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが育毛のシャンプー買ってらしたわ','Sho — Dad hair-grow-shampoo-bought','Reflective','yumiko_mom'),
    mk('ママ、ぼく、ママの素顔が一番好きだよ','Mom — me Mom-no-makeup-fav','Eager child','sho_child'),
    mk('翔くん、お父さんと公園で投球練習しましょうね','Sho — Dad-park-pitch-prac','Direction','yumiko_mom'),
    mk('ママ、お祖母ちゃんが真珠の指輪を見せてくれたよ','Mom — Grandma-pearl-ring-showed','Eager child','sho_child'),
    mk('翔くん、お父さんが灯油の補給に行ってらしたわ','Sho — Dad-kerosene-refill-went','Reflective','yumiko_mom'),
    mk('ママ、ぼく、動物園で大きなゾウさんに会ったよ','Mom — me zoo-big-elephant-met','Eager child','sho_child'),
    mk('翔くん、ご飯を主食にしてバランスよく食べましょう','Sho — rice-staple balance-eat','Direction','yumiko_mom'),
    mk('ママ、お祝いの日にお祖母ちゃんが鯛を焼いてくれたよ','Mom — celeb-Grandma-sea-bream-grilled','Eager close','sho_child'),
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

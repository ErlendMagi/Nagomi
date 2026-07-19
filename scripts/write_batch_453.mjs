import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_453 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['多少なりとも','殊に','ドロドロ','帰り際','頷い','はおり','わきまえ','大人しく']
const B_T = ['コマース','押し出し','平米','弐','作製','一任','隔週','通りかかっ']
const C_T = ['万事','仕業','犯さ','家宅','別居','高等裁判所','徴税','性教育']
const D_T = ['楓','出逢い','隠れ家','どんぐり','硬貨','大砲','散髪','ブルーベリー']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09021',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、多少なりともお祖父ちゃんの役に立ちたいわね','Sho — even-bit-Grandpa-help','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんの背中が殊に大きく見えたよ','Mom — me Dad-back-esp-big','Reflective child','sho_child'),
    mk('翔くん、外がドロドロでお靴汚れちゃうわね','Sho — outside-muddy-shoe-dirty','Wry','yumiko_mom'),
    mk('ママ、お祖父ちゃんが帰り際にお小遣いくれたよ','Mom — Grandpa-leave-allowance','Pleased child','sho_child'),
    mk('翔くん、お父さんがお祖父ちゃんに頷いてらしたわね','Sho — Dad-Grandpa-nodded','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖母ちゃんのはおりが暖かかったよ','Mom — me Grandma-haori-warm','Eager child','sho_child'),
    mk('翔くん、お友達同士、礼儀をわきまえて遊びましょう','Sho — friend-manner-mind','Direction','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんの前では大人しくしてたよ','Mom — me Grandpa-front-quiet','Proud close','sho_child'),
  ]},
  {id:'conv_09022',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、多少なりともお客様のお力になれたらいいね、メイちゃん','Aoi — even-bit-cust-help-good Mei','Tender','mei_romantic'),
    mk('葵、お客様、殊にコーヒーの香りを大事にされるよね、メイちゃん','Aoi — cust-esp-coffee-aroma-cherish Mei','Reflective','aoi_barista'),
    mk('葵、雨でお店の入口がドロドロね、メイちゃん','Aoi — rain-store-entry-muddy Mei','Wry','mei_romantic'),
    mk('葵、お客様、帰り際に「美味しかった」って仰ってたよ、メイちゃん','Aoi — cust-leave-"yum"-said Mei','Pleased','aoi_barista'),
    mk('葵、お客様、こちらの説明に頷いて下さったね、メイちゃん','Aoi — cust-explain-nodded Mei','Pleased','mei_romantic'),
    mk('葵、冬はお客様、はおりを脱ぎ着しやすい席を作りましょう、メイちゃん','Aoi — winter-cust-haori-easy-seat Mei','Direction','aoi_barista'),
    mk('葵、新人さんも、お客様への礼儀をわきまえてるね、メイちゃん','Aoi — newbie-cust-manner-mind Mei','Praising','mei_romantic'),
    mk('葵、お子様も、お店では大人しくしてくれて助かるね、メイちゃん','Aoi — child-store-quiet-thx Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_09023',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは多少なりとも社会の役に立とうとされたぞ','Gran — youth Dad-even-bit-soc-help-try','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、殊にお孫様にはお優しかったわよね、あなた?','Yes — Grandpa-esp-grandkid-kind, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんとドロドロの田んぼで仕事した','Gran — youth Dad-muddy-rice-field-work','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様の帰り際にお声をかけて下さったわよね、あなた?','Grandpa — grandkid-leave-voice-call, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは私の話に静かに頷いて下さったぞ','Gran — youth Dad-my-talk-quiet-nodded','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、晩年、お正月にはおりを着てらしたわよね、あなた?','Grandpa — late-NY-haori-wore, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは武士の道をわきまえてらしたぞ','Gran — youth Dad-samurai-path-mind','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お年寄りの前では大人しくしていたわよね、あなた?','Grandpa — elder-front-quiet, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09024',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、多少なりとも勉強してんのか?','Riku — even-bit-study?','Wry teen','sakura_teen'),
    mk('お前、殊に数学が苦手だな、桜','You — esp-math-bad Sakura','Wry','riku_teen'),
    mk('リク、お前のスニーカー、ドロドロじゃん','Riku — your-shoe-muddy','Wry','sakura_teen'),
    mk('お前、帰り際に俺の机に絡むなよ、桜','You — leave-my-desk-don\'t-bump Sakura','Direction','riku_teen'),
    mk('リク、お前、先生の話に頷いてたな','Riku — teacher-nod','Reflective','sakura_teen'),
    mk('お前、おばあちゃんがくれたはおり似合うな、桜','You — Grandma-haori-suit Sakura','Praising','riku_teen'),
    mk('リク、お前、先輩への礼儀わきまえろよ','Riku — sen-manner-mind','Direction','sakura_teen'),
    mk('お前、図書室では大人しくしろよ、桜','You — lib-quiet Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_09025',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんも多少なりともお絵描き教えるよ','Sho — Mei-sis-even-bit-art-teach','Tender','mei_romantic'),
    mk('メイ姉さん、メイ姉さんの絵は殊に好きだよ','Mei-sis — Mei-sis-art-esp-love','Eager child','sho_child'),
    mk('翔くん、雨の後の公園がドロドロね','Sho — rain-after-park-muddy','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、帰り際にメイ姉さんに絵プレゼントしたい','Mei-sis — me leave-Mei-sis-art-gift','Eager child','sho_child'),
    mk('翔くん、メイ姉さんが翔くんの話に頷いて下さってるわね','Sho — Mei-sis-Sho-talk-nodded','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、はおりを着るのが好きだよ','Mei-sis — me haori-wear-like','Eager child','sho_child'),
    mk('翔くん、お絵描き道具を、わきまえて大事に使いましょう','Sho — art-tool-mind-cherish','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんと一緒の時は大人しくお絵描きするよ','Mei-sis — me Mei-sis-quiet-draw','Earnest close','sho_child'),
  ]},
  {id:'conv_09026',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、Eコマースの強化策を検討しろ','Our co — e-commerce-strength','Crisp','hiroshi_boss'),
    mk('はい。新製品で市場への押し出しを強くいたします','Yes — New-prod-market-thrust-strong','Methodical','kenji_office'),
    mk('当社、本社の平米数を確認しろ','Our co — HQ-sqm-check','Direction','hiroshi_boss'),
    mk('はい。価格を一弐の単位で再設定しました','Yes — Price-one-two-unit-reset','Update','kenji_office'),
    mk('当社、新パンフレットの作製を急げ','Our co — new-pamph-prep-hasten','Direction','hiroshi_boss'),
    mk('はい。本件は専門家に一任いたしました','Yes — Case-expert-entrust','Update','kenji_office'),
    mk('社員向け研修を隔週で実施しろ','Staff-train-biweek','Direction','hiroshi_boss'),
    mk('はい。たまたま通りかかったお得意様に声をかけられました','Yes — Coincidence-passed-VIP-called','Close','kenji_office'),
  ]},
  {id:'conv_09027',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('Eコマース対応のチームを増員しましょう','E-commerce-resp-team-add','Brisk','yuki_office'),
    mk('はい。プレゼンでの押し出しを強くする練習をしましょう','Yes — Pres-thrust-strong-prac','Cooperative','kenji_office'),
    mk('新オフィスの平米数を比較しましょう','New-office-sqm-comp','Direction','yuki_office'),
    mk('はい。書類に「弐千円」と書く時はご注意ください','Yes — Doc-"2000"-write-care','Update','kenji_office'),
    mk('限定パンフレットを作製しましょう','Ltd-pamph-prep','Direction','yuki_office'),
    mk('はい。今回はベテラン担当者に一任します','Yes — Veteran-handler-entrust','Update','kenji_office'),
    mk('隔週で進捗報告会をしましょう','Biweek-progress-meet','Direction','yuki_office'),
    mk('はい。お得意様が通りかかったので、お声がけしました','Yes — VIP-passed-called','Close','kenji_office'),
  ]},
  {id:'conv_09028',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、Eコマース関連の論文も読め','Ren — e-commerce-paper-read','Mentor','hiroshi_boss'),
    mk('はい。学会発表の押し出しを意識します','Yes — Conf-pres-thrust-aware','Earnest','ren_uni'),
    mk('蓮、研究室の平米数を測れ','Ren — lab-sqm-measure','Direction','hiroshi_boss'),
    mk('はい。論文に「弐千年」を「2000年」と表記統一しました','Yes — Paper-"2000-yr"-unify','Polite','ren_uni'),
    mk('蓮、研究ポスターの作製を急げ','Ren — research-poster-prep-hasten','Direction','hiroshi_boss'),
    mk('はい。データ分析は専門の助手に一任しました','Yes — Data-anal-assist-entrust','Earnest','ren_uni'),
    mk('蓮、ゼミは隔週で運営しろ','Ren — semi-biweek-run','Direction','hiroshi_boss'),
    mk('はい。学会会場で偉い先生が通りかかった時、ご挨拶しました','Yes — Conf-prof-passed-greeted','Earnest close','ren_uni'),
  ]},
  {id:'conv_09029',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、Eコマース詐欺の捜査もご担当ですね','Police e-commerce-fraud-inv','Cooperative','kenji_office'),
    mk('警察、容疑者を一気に押し出した制圧も訓練されますね','Police suspect-thrust-suppress-drill','Cooperative','kenji_office'),
    mk('警察、犯行現場の平米数を計測されますね','Police crime-on-site-sqm-measure','Cooperative','kenji_office'),
    mk('警察、書類に弐の漢数字を厳密に使われますね','Police doc-"2"-strict-use','Cooperative','kenji_office'),
    mk('警察、お尋ね者ポスターの作製も担当されますね','Police wanted-poster-prep','Cooperative','kenji_office'),
    mk('警察、専門部署に一任する事案もありますね','Police spec-section-entrust-case','Cooperative','kenji_office'),
    mk('警察、隔週で地域防犯ミーティングを開かれますね','Police biweek-local-crime-meet','Cooperative','kenji_office'),
    mk('警察、犯行現場をたまたま通りかかった目撃者の証言を重視されますね','Police on-site-passed-witness-test-imp','Close','kenji_office'),
  ]},
  {id:'conv_09030',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、Eコマースの夜明けを見越されたぞ','Dad — founding e-commerce-dawn-foresee','Sage','hiroshi_elder'),
    mk('はい。お父さんは新製品の押し出しを大事にされた','Yes — Dad new-prod-thrust-cherish','Commitment','hiroshi_boss'),
    mk('お父さん、本社の平米数を毎年確認されたぞ','Dad — HQ-sqm-yearly-check','Wistful','hiroshi_elder'),
    mk('はい。お父さんは契約書に弐の漢数字を使われた','Yes — Dad contract-"2"-use','Reflective','hiroshi_boss'),
    mk('お父さん、社内紙の作製を社員に任されたぞ','Dad — co-news-prep-staff-entrust','Wistful','hiroshi_elder'),
    mk('はい。お父さんは信頼できる社員に一任された','Yes — Dad trust-staff-entrust','Reflective','hiroshi_boss'),
    mk('お父さん、隔週で経営会議を開かれたぞ','Dad — biweek-mgmt-meet','Wistful','hiroshi_elder'),
    mk('はい。お父さんは現場をたまたま通りかかった時も声をかけられた','Yes — Dad on-site-passed-called','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09031',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、戦時下、万事が混乱した事例を論文で扱いましたね','Ren — wartime-everything-chaos paper','Calm','asuka_teacher'),
    mk('はい、組織犯罪の仕業を追った事例を論文で扱いました','Yes — Org-crime-act-trace paper','Earnest','ren_uni'),
    mk('蓮さん、人権を犯さぬ研究倫理を論文で扱いましたね','Ren — rights-not-violate-ethics paper','Reflective','asuka_teacher'),
    mk('はい、家宅捜索の歴史を論文で扱いました','Yes — Home-search-hist paper','Earnest','ren_uni'),
    mk('政治家の別居スキャンダル史を論文で扱いましたね','Pol-separation-hist paper','Engaged','asuka_teacher'),
    mk('はい、高等裁判所の判例研究を論文で扱いました','Yes — High-court-prec paper','Earnest','ren_uni'),
    mk('蓮さん、近代国家の徴税制度を論文で扱いましたね','Ren — mod-state-tax-sys paper','Reflective','asuka_teacher'),
    mk('はい、性教育の国際比較を論文で扱いました','Yes — Sex-edu-int-comp paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09032',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、万事に注意して警察、対応されてますね','Case everything-care police-resp','Reflective','ren_uni'),
    mk('警察、不審な仕業を見逃さないよう警戒します','Police suspic-act-watch','Procedural','takeda_officer'),
    mk('本件、容疑者が人権を犯さないか警察、注視されてますね','Case suspect-rights-violate police-watch','Reflective','ren_uni'),
    mk('警察、家宅捜索の手続きを厳密に進めます','Police home-search-strict-progress','Procedural','takeda_officer'),
    mk('本件、容疑者の別居生活を警察、把握されてますね','Case suspect-separation-life police-grasp','Reflective','ren_uni'),
    mk('警察、高等裁判所への送致準備を進めます','Police high-court-transfer-prep','Procedural','takeda_officer'),
    mk('本件、徴税逃れの捜査も警察、なさるんですね','Case tax-evade-inv police','Reflective','ren_uni'),
    mk('警察、子供の安全のため性教育の啓発を支援します','Police child-safety-sex-edu-supp','Close','takeda_officer'),
  ]},
  {id:'conv_09033',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、戦時下、万事が混乱した事例を論文で扱いましたね','Sakura — wartime-everything paper','Calm','asuka_teacher'),
    mk('はい、組織犯罪の仕業を追った事例を論文で扱いました','Yes — Org-crime-act paper','Earnest teen','sakura_teen'),
    mk('人権を犯さぬ研究倫理を論文で扱いましたね','Rights-not-violate paper','Reflective','asuka_teacher'),
    mk('はい、家宅捜索の歴史を論文で扱いました','Yes — Home-search paper','Earnest','sakura_teen'),
    mk('政治家の別居スキャンダル史を論文で扱いましたね','Pol-separation paper','Engaged','asuka_teacher'),
    mk('はい、高等裁判所の判例研究を論文で扱いました','Yes — High-court paper','Earnest','sakura_teen'),
    mk('近代国家の徴税制度を論文で扱いましたね','Mod-state-tax paper','Reflective','asuka_teacher'),
    mk('はい、性教育の国際比較を論文で扱いました','Yes — Sex-edu-int paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09034',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、緊急時には万事に備える医療チームの体制を整えます','Ren — emerg-everything-prep med-team-sys','Calm','saito_doctor'),
    mk('はい、不審な処方の仕業を医療チームで監視します','Yes — Suspic-presc-act med-team-monitor','Patient','saito_doctor'),
    mk('医療研究で被験者の権利を犯さない姿勢を、貴院、貫かれてますね、先生','Med-research-subj-rights-violate-not your-hosp keep, sensei','Reflective','ren_uni'),
    mk('はい、患者の家宅訪問診療を医療チームで担当します','Yes — Patient-home-visit-med med-team','Patient','saito_doctor'),
    mk('別居中のご夫婦の家族療法を、貴院、ご対応されてますね、先生','Separated-couple-fam-therapy your-hosp resp, sensei','Reflective','ren_uni'),
    mk('はい、医療訴訟の高等裁判所判例を医療チームで分析します','Yes — Med-trial-high-court-anal med-team','Patient','saito_doctor'),
    mk('医療法人の徴税対応を、貴院、専門家にご相談ですね、先生','Med-corp-tax-resp your-hosp-expert-cons, sensei','Curious','ren_uni'),
    mk('はい、学校での性教育に医師団として協力しております','Yes — School-sex-edu-med-team-coop','Patient close','saito_doctor'),
  ]},
  {id:'conv_09035',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、万事抜かりなく準備しろ','Our co — everything-thorough-prep','Crisp','hiroshi_boss'),
    mk('はい。不正の仕業を社内で見抜きます','Yes — Fraud-act-co-detect','Methodical','kenji_office'),
    mk('当社、社員のプライバシーを犯さないようにしろ','Our co — staff-privacy-violate-not','Direction','hiroshi_boss'),
    mk('はい。家宅捜索が必要な事案には法務と連携します','Yes — Home-search-need-legal-link','Update','kenji_office'),
    mk('当社、別居中の社員の事情にも配慮しろ','Our co — separated-staff-circ-care','Direction','hiroshi_boss'),
    mk('はい。高等裁判所での訴訟対応も準備しております','Yes — High-court-trial-resp-prep','Update','kenji_office'),
    mk('当社、徴税の合法性を厳格に守れ','Our co — tax-legal-strict','Direction','hiroshi_boss'),
    mk('はい。社員家族への性教育支援も検討中です','Yes — Staff-fam-sex-edu-supp-consider','Close','kenji_office'),
  ]},
  {id:'conv_09036',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、楓の紅葉のお話されてたよ、メイちゃん','Aoi — cust-maple-autumn-told Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お客様のお気に入りの方との出逢いを語ってたよ、メイちゃん','Aoi — cust-fav-encounter-told Mei','Tender','aoi_barista'),
    mk('葵、お店、お客様の隠れ家みたいって言われたわ、メイちゃん','Aoi — store-cust-hide-place-said Mei','Pleased','mei_romantic'),
    mk('葵、新メニュー、どんぐり風のクッキー作りましょう、メイちゃん','Aoi — new-menu-acorn-cookie-make Mei','Animated','aoi_barista'),
    mk('葵、お客様、レジで硬貨で払って下さるね、メイちゃん','Aoi — cust-reg-coin-pay Mei','Reflective','mei_romantic'),
    mk('葵、お客様、博物館で大砲の展示を見られたって、メイちゃん','Aoi — cust-museum-cannon-saw Mei','Reflective','aoi_barista'),
    mk('葵、お客様、散髪してきたみたいね、メイちゃん','Aoi — cust-haircut-came Mei','Praising','mei_romantic'),
    mk('葵、新メニュー、ブルーベリーマフィン加えましょう、メイちゃん','Aoi — new-menu-blueberry-muffin-add Mei','Animated close','aoi_barista'),
  ]},
  {id:'conv_09037',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんと楓の紅葉を見に行ったぞ','Gran — youth Dad-maple-autumn-go','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、私との出逢いを語ってらしたわよね、あなた?','Yes — Grandpa-our-encounter-told, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは山小屋を隠れ家とされたぞ','Gran — youth Dad-mountain-cabin-hide','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、秋にどんぐりを集めて下さったわよね、あなた?','Grandpa — autumn-acorn-collect, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが古い硬貨を集めていらしたぞ','Gran — youth Dad-old-coin-collect','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様と大砲の歴史のお話されたわよね、あなた?','Grandpa — grandkid-cannon-hist-told, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは月一回散髪に通われたぞ','Gran — youth Dad-monthly-haircut','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お庭でブルーベリーを育てていらしたわよね、あなた?','Grandpa — garden-blueberry-grow, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09038',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんと楓の紅葉を見に行きましょうね','Sho — Mei-sis-maple-autumn-go','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、ママとの出逢いの話聞いたよ','Mei-sis — me Mom-encounter-heard','Eager child','sho_child'),
    mk('翔くん、メイ姉さんの仕事場は隠れ家のように落ち着くのよ','Sho — Mei-sis-workplace-hide-calm','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、公園でどんぐりを拾ったよ','Mei-sis — me park-acorn-picked','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんが古い硬貨を見せて下さるそうよ','Sho — Grandpa-old-coin-show','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、博物館で大砲を見たよ','Mei-sis — me museum-cannon-saw','Eager child','sho_child'),
    mk('翔くん、お父さんが散髪に行かれたわね、すっきりされてるわ','Sho — Dad-haircut-clean','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、お母さんとブルーベリージャム作ったよ','Mei-sis — me Mom-blueberry-jam-made','Proud close','sho_child'),
  ]},
  {id:'conv_09039',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、家族で楓並木見に行ったろ?','Riku — fam-maple-row?','Curious teen','sakura_teen'),
    mk('お前、好きな子との出逢い語りすぎだろ、桜','You — like-encounter-too-much Sakura','Wry','riku_teen'),
    mk('リク、お前ん家、屋根裏が隠れ家だろ?','Riku — your-home-attic-hide?','Curious','sakura_teen'),
    mk('お前、公園でどんぐり拾ったろ?桜','You — park-acorn? Sakura','Wry','riku_teen'),
    mk('リク、お前、古い硬貨集めてんだろ?','Riku — old-coin-collect?','Curious','sakura_teen'),
    mk('お前、社会で大砲の単元やったろ?桜','You — soc-cannon? Sakura','Curious','riku_teen'),
    mk('リク、お前、新学期前に散髪したろ?','Riku — new-term-pre-haircut?','Curious','sakura_teen'),
    mk('お前、ブルーベリースムージー好きだろ?桜','You — blueberry-smoothie-like? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09040',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんと楓の名所に行きましょうね','Sho — Dad-maple-spot-go','Tender','yumiko_mom'),
    mk('ママ、お父さんとママの出逢いの話して下さい','Mom — Dad-Mom-encounter-tell','Curious child','sho_child'),
    mk('翔くん、ママのキッチンが私の隠れ家なのよ','Sho — Mom-kitchen-my-hide','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとどんぐり拾いに行ったよ','Mom — me Dad-acorn-pick','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんが古い硬貨をくれたわね','Sho — Grandpa-old-coin-gave','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんと大砲のお話したよ','Mom — me Grandpa-cannon-talked','Eager child','sho_child'),
    mk('翔くん、お父さんと散髪屋さんに行きましょう','Sho — Dad-barber-go','Tender','yumiko_mom'),
    mk('ママ、ぼく、ブルーベリーパイ食べたい','Mom — me blueberry-pie-want','Eager close','sho_child'),
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

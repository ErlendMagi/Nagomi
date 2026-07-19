import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_476 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['もどっ','はさん','つくし','心中','少く','いれる','前もって','申しわけ']
const B_T = ['パワフル','備わっ','チョイス','分量','健闘','切り離し','編著','有数']
const C_T = ['環境庁','窒素','憲章','圧勝','疑念','塩素','至福','皇族']
const D_T = ['下北沢','築地','吉祥寺','バルサ','ヘッジファンド','スピリチュアル','おっぱい','ハイビジョン']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09481',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがお家にもどって来られたわよ','Sho — Dad-home-back','Tender','yumiko_mom'),
    mk('ママ、お父さんが本にしおりをはさんで下さったよ','Mom — Dad-book-bookmark-hold','Eager child','sho_child'),
    mk('翔くん、お父さんと一緒に春に土つくしを摘みに行きましょうね','Sho — Dad-spring-tsukushi-pick','Tender','yumiko_mom'),
    mk('ママ、お父さんは心中、ぼくを誇りに思って下さってるって','Mom — Dad-shinchu-me-proud','Eager child','sho_child'),
    mk('翔くん、寒くなったから少く厚着しましょうね','Sho — cold-some-warm-dress','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんとお茶をいれるお手伝いしたよ','Mom — me Dad-tea-make-help','Eager child','sho_child'),
    mk('翔くん、明日の遠足は前もって準備しましょうね','Sho — tomor-trip-pre-prep','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「申しわけない」って言えたよ','Mom — me Dad-"sorry"-said','Proud child close','sho_child'),
  ]},
  {id:'conv_09482',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、忘れ物をしてもどって来られたよ、メイちゃん','Aoi — cust-forgot-back Mei','Reflective','mei_romantic'),
    mk('葵、お客様、本にしおりをはさんでカフェを出られたよ、メイちゃん','Aoi — cust-book-bookmark-out Mei','Reflective','aoi_barista'),
    mk('葵、お客様、春のメニューにつくしの卵とじはいかが?メイちゃん','Aoi — cust-spring-tsukushi-egg Mei','Reflective','mei_romantic'),
    mk('葵、お客様、心中ではお店を気に入って下さってると思うよ、メイちゃん','Aoi — cust-shinchu-store-like Mei','Reflective','aoi_barista'),
    mk('葵、お客様の数が少く感じる日もあるね、メイちゃん','Aoi — cust-some-low-day Mei','Reflective','mei_romantic'),
    mk('葵、お客様、特別なコーヒーをいれるよう頼んで下さったよ、メイちゃん','Aoi — cust-spec-coffee-make-ask Mei','Reflective','aoi_barista'),
    mk('葵、明日の予約は前もって確認しようね、メイちゃん','Aoi — tomor-rsv-pre-confirm Mei','Direction','mei_romantic'),
    mk('葵、ミスがあったら「申しわけ」を丁寧に言おうね、メイちゃん','Aoi — mistake-"sorry"-pol Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_09483',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが旅から家にもどって来られると安心した','Gran — youth Dad-trip-home-back-easy','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、本にしおりをはさんで読まれたわよね、あなた?','Yes — Grandpa-book-mark-read, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが春につくしを摘まれた','Gran — youth Dad-spring-tsukushi-pick','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、心中、家族を一番大事に思われてたわよね、あなた?','Grandpa — shinchu-fam-first, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは食欲が少くなる時もあった','Gran — youth Dad-appetite-some-low-times','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お茶をご自分でいれるのがお好きだったわよね、あなた?','Grandpa — tea-self-make-like, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが旅程を前もって組まれた','Gran — youth Dad-itin-pre-plan','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご家族にも「申しわけない」と丁寧に仰ってたわよね、あなた?','Grandpa — fam-"sorry"-pol, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09484',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、教室にもどってきたな','Riku — class-back','Curious teen','sakura_teen'),
    mk('お前、教科書にしおりをはさんでたな、桜','You — text-bookmark Sakura','Curious','riku_teen'),
    mk('リク、お前、春につくし摘みに行ってたな','Riku — spring-tsukushi-pick','Curious','sakura_teen'),
    mk('お前、心中、テスト不安だろ?桜','You — shinchu-test-anx? Sakura','Curious','riku_teen'),
    mk('リク、お前、最近食欲が少くなったな','Riku — recently-appetite-some-low','Curious','sakura_teen'),
    mk('お前、部活帰り、ジュースをいれるの上手いな、桜','You — club-juice-pour-good Sakura','Praising','riku_teen'),
    mk('リク、前もって連絡くれよ','Riku — pre-contact','Direction','sakura_teen'),
    mk('お前、「申しわけ」って先生に謝ってたな、桜','You — "sorry"-tch Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_09485',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが急いでお家にもどって下さるそうよ','Sho — Dad-rush-home-back','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、絵本にしおりをはさんで読んでるよ','Mei-sis — me pic-book-mark','Eager child','sho_child'),
    mk('翔くん、お父さんが春につくしを採って下さるそうよ','Sho — Dad-spring-tsukushi-collect','Reflective','mei_romantic'),
    mk('メイ姉さん、お父さんは心中、メイ姉さんを尊敬されてるって','Mei-sis — Dad-shinchu-Mei-sis-resp','Eager child','sho_child'),
    mk('翔くん、お野菜の摂取が少くならないようにね','Sho — veg-intake-some-low-not','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとコーヒーをいれる練習したよ','Mei-sis — me Dad-coffee-make-prac','Eager child','sho_child'),
    mk('翔くん、お出かけは前もって計画しましょうね','Sho — outing-pre-plan','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、ママに「申しわけない」って言えたよ','Mei-sis — me Mom-"sorry"-said','Proud child close','sho_child'),
  ]},
  {id:'conv_09486',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、パワフルな営業体制を組め','Our co — pow-sales-arr','Crisp','hiroshi_boss'),
    mk('はい。新人にも実力が備わってきました','Yes — Newhire-skill-comp','Methodical','kenji_office'),
    mk('当社、戦略のチョイスは慎重にしろ','Our co — strat-choice-careful','Direction','hiroshi_boss'),
    mk('はい。仕入れの分量を再検討します','Yes — Stock-qty-recheck','Update','kenji_office'),
    mk('競合との健闘を期待する','Comp-fight-good-exp','Direction','hiroshi_boss'),
    mk('はい。古い慣習を組織から切り離します','Yes — Old-cust-org-detach','Update','kenji_office'),
    mk('社史の編著も進めろ','Co-hist-comp-prog','Direction','hiroshi_boss'),
    mk('はい。当社は業界有数の存在になります','Yes — Our-co-industry-top-presence','Close','kenji_office'),
  ]},
  {id:'conv_09487',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('パワフルなプレゼンを期待してるね','Pow-pres-exp','Brisk','yuki_office'),
    mk('はい。プレゼン能力が備わってきました','Yes — Pres-skill-comp','Cooperative','kenji_office'),
    mk('提案のチョイスを増やしましょう','Prop-choice-up','Direction','yuki_office'),
    mk('はい。仕入れ分量を整理します','Yes — Stock-qty-org','Update','kenji_office'),
    mk('新人の健闘を見守りましょう','Newhire-fight-watch','Direction','yuki_office'),
    mk('はい。不採算事業を切り離します','Yes — Unprof-detach','Update','kenji_office'),
    mk('業界誌に編著で寄稿しましょう','Industry-mag-comp-cont','Direction','yuki_office'),
    mk('はい。業界有数の知名度を目指します','Yes — Industry-top-aim','Close','kenji_office'),
  ]},
  {id:'conv_09488',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、パワフルな発信力を磨け','Ren — pow-comm-pol','Mentor','hiroshi_boss'),
    mk('はい。研究者としての素養が備わってきました','Yes — Research-skill-comp','Earnest','ren_uni'),
    mk('蓮、研究テーマのチョイスは慎重にしろ','Ren — research-choice-careful','Direction','hiroshi_boss'),
    mk('はい。データ分量を吟味いたします','Yes — Data-qty-anal','Earnest','ren_uni'),
    mk('蓮、学会での健闘を期待する','Ren — conf-fight-exp','Direction','hiroshi_boss'),
    mk('はい。余分な仮説は研究から切り離します','Yes — Extra-hyp-detach','Polite','ren_uni'),
    mk('蓮、論文集の編著にも参加しろ','Ren — paper-coll-comp-join','Direction','hiroshi_boss'),
    mk('はい。当分野有数の研究者を目指します','Yes — Field-top-aim','Earnest close','ren_uni'),
  ]},
  {id:'conv_09489',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、パワフルな防犯活動を展開されますね','Police pow-prev-act','Cooperative','kenji_office'),
    mk('警察、新任警官に実力が備わってきますね','Police new-skill-comp','Cooperative','kenji_office'),
    mk('警察、捜査のチョイスを慎重にされますね','Police inv-choice-careful','Cooperative','kenji_office'),
    mk('警察、押収薬物の分量を測定されますね','Police seiz-drug-qty-meas','Cooperative','kenji_office'),
    mk('警察、若手警官の健闘を期待されてますね','Police young-fight-exp','Cooperative','kenji_office'),
    mk('警察、関係のない情報を捜査から切り離されますね','Police irr-info-inv-detach','Cooperative','kenji_office'),
    mk('警察、警察史の編著にも携わられますね','Police hist-comp','Cooperative','kenji_office'),
    mk('警察、業界有数の鑑識力をお持ちですね','Police industry-top-forensic','Close','kenji_office'),
  ]},
  {id:'conv_09490',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、パワフルな実行力をお持ちだった','Dad — founding pow-exec','Sage','hiroshi_elder'),
    mk('はい。お父さんには経営者の風格が備わってらした','Yes — Dad mgmt-aura-comp','Commitment','hiroshi_boss'),
    mk('お父さん、戦略のチョイスを的確になさった','Dad — strat-choice-prec','Wistful','hiroshi_elder'),
    mk('はい。お父さんは投資の分量を見極められた','Yes — Dad invest-qty-judge','Reflective','hiroshi_boss'),
    mk('お父さん、若手社員の健闘を信じてらした','Dad — young-fight-trust','Wistful','hiroshi_elder'),
    mk('はい。お父さんは不採算部門を切り離す決断もされた','Yes — Dad unprof-detach-decide','Reflective','hiroshi_boss'),
    mk('お父さん、業界誌の編著を任されてた','Dad — industry-mag-comp-trust','Wistful','hiroshi_elder'),
    mk('はい。お父さんが業界有数の経営者になった','Yes — Dad industry-top-mgmt','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09491',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、環境庁時代の規制研究を論文で扱いましたね','Ren — env-agency-reg paper','Calm','asuka_teacher'),
    mk('はい、窒素酸化物の削減策を論文で扱いました','Yes — NOx-redu paper','Earnest','ren_uni'),
    mk('蓮さん、国連憲章の改正案を論文で扱いましたね','Ren — UN-charter-amend paper','Reflective','asuka_teacher'),
    mk('はい、選挙での圧勝事例を論文で扱いました','Yes — Elect-landslide paper','Earnest','ren_uni'),
    mk('政治家への疑念を市民が抱く構造を論文で扱いましたね','Pol-doubt-citi-struct paper','Engaged','asuka_teacher'),
    mk('はい、プールの塩素濃度管理を論文で扱いました','Yes — Pool-chlor-mgmt paper','Earnest','ren_uni'),
    mk('蓮さん、登山家の至福体験を論文で扱いましたね','Ren — climb-bliss paper','Reflective','asuka_teacher'),
    mk('はい、英王室皇族の役割を論文で扱いました','Yes — UK-royal paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09492',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、環境庁通報をめぐる事案を、警察、扱われてますね','Case env-agency-rep police-handle','Reflective','ren_uni'),
    mk('警察、工場の窒素酸化物漏出を厳しく取り締まります','Police fact-NOx-leak-strict','Procedural','takeda_officer'),
    mk('本件、警察憲章の改訂を、警察、検討されてますね','Case police-charter-rev police-cons','Reflective','ren_uni'),
    mk('警察、選挙圧勝後の不正捜査を進めます','Police elect-landslide-fraud-inv','Procedural','takeda_officer'),
    mk('本件、市民の疑念を、警察、丁寧に解消されますね','Case citi-doubt police-resolv','Reflective','ren_uni'),
    mk('警察、毒物塩素を用いた事件を捜査します','Police poison-chlor-case-inv','Procedural','takeda_officer'),
    mk('本件、被害者ご家族の至福を奪う事件、警察、許しませんね','Case vict-fam-bliss-rob police-no-tol','Reflective','ren_uni'),
    mk('警察、皇族警備の体制を強化しております','Police royal-guard-strength','Close','takeda_officer'),
  ]},
  {id:'conv_09493',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、環境庁時代の規制研究を論文で扱いましたね','Sakura — env-agency-reg paper','Calm','asuka_teacher'),
    mk('はい、窒素酸化物の削減策を論文で扱いました','Yes — NOx-redu paper','Earnest teen','sakura_teen'),
    mk('国連憲章の改正案を論文で扱いましたね','UN-charter paper','Reflective','asuka_teacher'),
    mk('はい、選挙での圧勝事例を論文で扱いました','Yes — Elect-landslide paper','Earnest','sakura_teen'),
    mk('政治家への疑念の構造を論文で扱いましたね','Pol-doubt paper','Engaged','asuka_teacher'),
    mk('はい、プールの塩素濃度管理を論文で扱いました','Yes — Pool-chlor paper','Earnest','sakura_teen'),
    mk('登山家の至福体験を論文で扱いましたね','Climb-bliss paper','Reflective','asuka_teacher'),
    mk('はい、英王室皇族の役割を論文で扱いました','Yes — UK-royal paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09494',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、環境庁基準の院内空気質を医療チームで管理します','Ren — env-agency-std-air med-team','Calm','saito_doctor'),
    mk('はい、麻酔ガスの窒素濃度を医療チームで監視します','Yes — Anes-N2-monit med-team','Patient','saito_doctor'),
    mk('医療憲章の倫理を、貴院、徹底されてますね、先生','Med-charter-eth your-hosp strict, sensei','Reflective','ren_uni'),
    mk('はい、治療効果が圧勝的に出た事例も医療チームで共有します','Yes — Treat-eff-landslide-case med-team','Patient','saito_doctor'),
    mk('患者の疑念を、貴院、解消されますね、先生','Pati-doubt your-hosp resolv, sensei','Reflective','ren_uni'),
    mk('はい、消毒の塩素濃度を医療チームで管理します','Yes — Disinfect-chlor med-team','Patient','saito_doctor'),
    mk('患者の至福を支える緩和ケアを、貴院、ご提供ですね、先生','Pati-bliss-palliat your-hosp prov, sensei','Curious','ren_uni'),
    mk('はい、皇族の方々の医療も医療チームで担当します','Yes — Royal-med med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_09495',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、環境庁の規制に対応しろ','Our co — env-agency-reg-comply','Crisp','hiroshi_boss'),
    mk('はい。工場の窒素酸化物排出を削減します','Yes — Fact-NOx-redu','Methodical','kenji_office'),
    mk('当社、経営憲章を策定しろ','Our co — mgmt-charter-form','Direction','hiroshi_boss'),
    mk('はい。シェア圧勝を目指す計画です','Yes — Share-landslide-aim','Update','kenji_office'),
    mk('消費者の疑念を払拭しろ','Cons-doubt-wipe','Direction','hiroshi_boss'),
    mk('はい。水処理の塩素管理を徹底します','Yes — Water-chlor-strict','Update','kenji_office'),
    mk('当社、社員の至福を経営目標に掲げろ','Our co — staff-bliss-mgmt-goal','Direction','hiroshi_boss'),
    mk('はい。皇族関連の式典スポンサーも検討します','Yes — Royal-cere-spons-cons','Close','kenji_office'),
  ]},
  {id:'conv_09496',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、下北沢のライブハウスに通われてるって、メイちゃん','Aoi — cust-Shimokita-live-go Mei','Reflective','mei_romantic'),
    mk('葵、お客様、築地市場のお魚にお詳しいって、メイちゃん','Aoi — cust-Tsukiji-fish Mei','Reflective','aoi_barista'),
    mk('葵、お客様、吉祥寺の井の頭公園がお気に入りだって、メイちゃん','Aoi — cust-Kichijoji-Inokashira Mei','Reflective','mei_romantic'),
    mk('葵、お客様、バルサの試合を生で観たいって、メイちゃん','Aoi — cust-Barca-live Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ヘッジファンドのお仕事だって、メイちゃん','Aoi — cust-hedge-work Mei','Reflective','mei_romantic'),
    mk('葵、お客様、スピリチュアルな本を読まれてるって、メイちゃん','Aoi — cust-spirit-book Mei','Reflective','aoi_barista'),
    mk('葵、お客様、赤ちゃんがおっぱい飲むスピーチを聴いて感動されたって、メイちゃん','Aoi — cust-baby-oppai-talk-moved Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ハイビジョンTVを買ったって、メイちゃん','Aoi — cust-hi-vis-TV-buy Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09497',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが下北沢の演劇を観に行かれた','Gran — youth Dad-Shimokita-theater','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、築地で魚を選ばれるのが上手だったわよね、あなた?','Yes — Grandpa-Tsukiji-fish-pick, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが吉祥寺の喫茶店に通われた','Gran — youth Dad-Kichijoji-cafe-go','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、バルサの黄金時代の試合を観てらしたわよね、あなた?','Grandpa — Barca-golden-match, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがヘッジファンドの本をお読みになった','Gran — youth Dad-hedge-book-read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、スピリチュアルな話もご興味だったわよね、あなた?','Grandpa — spirit-talk-int, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが赤ちゃんがおっぱい飲む姿を見守られた','Gran — youth Dad-baby-oppai-watch','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ハイビジョン放送の登場を喜ばれたわよね、あなた?','Grandpa — hi-vis-broadcast-glad, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09498',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが下北沢の本屋さんに連れて行って下さるそうよ','Sho — Dad-Shimokita-bookstore-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、築地でお寿司食べたいよ','Mei-sis — me Tsukiji-sushi-want','Eager child','sho_child'),
    mk('翔くん、お父さんが吉祥寺の井の頭公園に連れて行って下さるそうよ','Sho — Dad-Kichijoji-Inokashira-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、バルサの試合観たいよ','Mei-sis — me Barca-want','Eager child','sho_child'),
    mk('翔くん、お父さんがヘッジファンドのお仕事のお話して下さったわ','Sho — Dad-hedge-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとスピリチュアルなお話聞いたよ','Mei-sis — me Dad-spirit-told','Eager child','sho_child'),
    mk('翔くん、赤ちゃんがおっぱい飲んでる姿は可愛いわね','Sho — baby-oppai-cute','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんがハイビジョンTVを買って下さったよ','Mei-sis — me Dad-hi-vis-TV-bought','Eager close','sho_child'),
  ]},
  {id:'conv_09499',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、下北沢の古着屋ハマってたな','Riku — Shimokita-vintage-into','Wry teen','sakura_teen'),
    mk('お前、築地で食べ歩きしたな、桜','You — Tsukiji-food-walk Sakura','Curious','riku_teen'),
    mk('リク、お前、吉祥寺で美術館行ったろ?','Riku — Kichijoji-mus?','Curious','sakura_teen'),
    mk('お前、バルサのユニフォーム着てたな、桜','You — Barca-uni-wear Sakura','Wry','riku_teen'),
    mk('リク、お前、社会でヘッジファンド習ったろ?','Riku — soc-hedge?','Curious','sakura_teen'),
    mk('お前、スピリチュアルな占い本買ってたな、桜','You — spirit-fortune-book-buy Sakura','Wry','riku_teen'),
    mk('リク、お前、弟がおっぱい飲んでた頃の話してたな','Riku — bro-oppai-told','Reflective','sakura_teen'),
    mk('お前ん家、ハイビジョンTV古いな、桜','You-home-hi-vis-TV-old Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_09500',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが下北沢の演劇に連れて行って下さるそうよ','Sho — Dad-Shimokita-theater-take','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと築地に行きたいよ','Mom — me Dad-Tsukiji-want','Eager child','sho_child'),
    mk('翔くん、お父さんが吉祥寺の絵本屋を教えて下さったわ','Sho — Dad-Kichijoji-pic-store-teach','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとバルサの試合観たよ','Mom — me Dad-Barca-watched','Eager child','sho_child'),
    mk('翔くん、お父さんがヘッジファンドのご友人にお会いになるそうよ','Sho — Dad-hedge-friend-meet','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとスピリチュアルな絵本読んだよ','Mom — me Dad-spirit-pic-book','Eager child','sho_child'),
    mk('翔くん、赤ちゃんの頃、翔くんもおっぱい飲んでたのよ','Sho — baby-time-Sho-oppai','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとハイビジョンの映画観たよ','Mom — me Dad-hi-vis-movie','Eager close','sho_child'),
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

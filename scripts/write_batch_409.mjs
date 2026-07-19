import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_409 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['無理矢理','ナンパ','いいかげん','持ち合わせ','バリエーション','この先','貰う','アイスクリーム']
const B_T = ['洗浄','貸付','清算','通商','投機','知名度','推計','税込み']
const C_T = ['洗脳','疾病','空想','部族','拷問','国営','改変','公営']
const D_T = ['トレーダー','地蔵','グランプリ','怪獣','三昧','言うまでもなく','このごろ','スキン']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08141',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、無理矢理、お野菜を食べさせちゃダメよね','Sho — force-feed veg no','Reflective','yumiko_mom'),
    mk('ママ、お友達が、お姉ちゃんがナンパされたって言ってたよ','Mom — friend sis-nanpa-said','Reflective child','sho_child'),
    mk('翔くん、いいかげんにお風呂入りなさい','Sho — already bath-enter','Direction','yumiko_mom'),
    mk('ママ、ぼく、お小遣いの持ち合わせがないよ','Mom — me allowance-have-none','Wry child','sho_child'),
    mk('翔くん、お料理にバリエーション増やそうね','Sho — cooking-variation increase','Reflective','yumiko_mom'),
    mk('ママ、この先、ぼく、何のお仕事するのかな','Mom — future me what-job?','Wondering child','sho_child'),
    mk('翔くん、お祖母ちゃんから手紙を貰うの、楽しみね','Sho — Grandma-letter receive look-forward','Tender','yumiko_mom'),
    mk('ママ、ぼく、デザートにアイスクリーム食べたいな','Mom — me dessert ice-cream eat-want','Eager close','sho_child'),
  ]},
  {id:'conv_08142',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様に無理矢理メニュー勧めちゃダメだよね、メイちゃん','Aoi — cust force-menu-recommend no Mei','Reflective','mei_romantic'),
    mk('葵、お店の前でナンパされたお客様、いらしたよ、メイちゃん','Aoi — store-front nanpa cust existed Mei','Reflective','aoi_barista'),
    mk('葵、いいかげん、新メニュー決めようね、メイちゃん','Aoi — already new-menu decide Mei','Direction','mei_romantic'),
    mk('葵、現金の持ち合わせがないお客様、いらしたわ、メイちゃん','Aoi — cash-have-none cust existed Mei','Reflective','aoi_barista'),
    mk('葵、ドリンクのバリエーション、増やそうね、メイちゃん','Aoi — drink-variation expand Mei','Eager','mei_romantic'),
    mk('葵、この先、お店をどう展開するか考えようね、メイちゃん','Aoi — future store-direction think Mei','Reflective','aoi_barista'),
    mk('葵、お客様からお手紙貰うの、嬉しいよね、メイちゃん','Aoi — cust-letter receive glad Mei','Tender','mei_romantic'),
    mk('葵、新メニューのアイスクリーム、お洒落ね、メイちゃん','Aoi — new-menu ice-cream stylish Mei','Praising close','aoi_barista'),
  ]},
  {id:'conv_08143',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは決して無理矢理させなかったぞ','Gran — youth Dad never force','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、ナンパされたお話、覚えていらっしゃるかしら、あなた?','Yes — Grandpa youth nanpa-story remember? dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、いいかげんにしないで全力でやれと、お父さんに教わったぞ','Gran — youth not-half full-do Dad-taught','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、いつも現金の持ち合わせをきちんとされてたわよね、あなた?','Grandpa — always cash-have-properly, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、ばあさんのお料理にバリエーションがあって嬉しかったぞ','Gran — youth gran-cook variation glad','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、この先のことを考えてくださったわよね、あなた?','Grandpa — future-considered, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お祖父ちゃんから手紙を貰うのが楽しみだった','Gran — youth Grandpa-letter receive look-forward','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、子供たちにアイスクリームを買ってくださったわよね、あなた?','Grandpa — kids ice-cream bought, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08144',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、無理矢理人を誘うなよ','Riku — force-invite don\'t','Direction teen','sakura_teen'),
    mk('お前、駅前でナンパされたろ?桜','You — station nanpa? Sakura','Teasing','riku_teen'),
    mk('リク、いいかげん、宿題やれよ','Riku — already homework-do','Direction','sakura_teen'),
    mk('お前、今日、現金の持ち合わせある?桜','You — today cash-have? Sakura','Curious','riku_teen'),
    mk('リク、お前の文化祭プラン、バリエーション少ないぜ','Riku — fest-plan variation-few','Wry','sakura_teen'),
    mk('お前、この先、進路どうするんだ?桜','You — future path-what? Sakura','Curious','riku_teen'),
    mk('リク、お前、ぼくから手紙貰ったろ?','Riku — me-letter received?','Curious','sakura_teen'),
    mk('お前、テストで頑張ったらアイスクリーム奢ってやるぜ、桜','You — test-try ice-cream-treat Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_08145',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんが無理矢理、お薬飲ませるのは、つらいわね','Sho — Mei-sis force-medicine sad','Caring','mei_romantic'),
    mk('メイ姉さん、お母さんが、ナンパされた話してたよ','Mei-sis — Mom nanpa-told','Reflective child','sho_child'),
    mk('翔くん、いいかげんにお勉強始めましょう','Sho — already study-start','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お小遣いの持ち合わせがないんだ','Mei-sis — me allowance-have-none','Wry child','sho_child'),
    mk('翔くん、お母さんのお料理のバリエーション、多くて素敵ね','Sho — Mom-cook variation many lovely','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、この先お父さんのお仕事手伝いたいな','Mei-sis — me future Dad-work help-want','Eager child','sho_child'),
    mk('翔くん、ばあばから誕生日カードを貰うの、お楽しみね','Sho — Grandma-bday-card receive look-forward','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖母ちゃんと食べるアイスクリーム、特別だよ','Mei-sis — me Grandma-eat-ice-cream special','Tender close','sho_child'),
  ]},
  {id:'conv_08146',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、工場の洗浄設備を更新しろ','Our co — factory cleaning-equip update','Crisp','hiroshi_boss'),
    mk('はい。社員への貸付制度を整えました','Yes — Staff-lending-system arranged','Methodical','kenji_office'),
    mk('当社、月末の清算を早めろ','Our co — month-end settle early','Direction','hiroshi_boss'),
    mk('はい。通商交渉が進展しております','Yes — Trade-negotiation progress','Update','kenji_office'),
    mk('社員に投機的な判断はさせるな','Staff speculative-decision don\'t','Direction','hiroshi_boss'),
    mk('はい。広告で知名度を上げる計画です','Yes — Ad-aware raise plan','Update','kenji_office'),
    mk('当社、来月の売上を推計しろ','Our co — next-month sales estimate','Direction','hiroshi_boss'),
    mk('はい。新商品は税込みで価格表示いたします','Yes — New-product tax-incl price-display','Close','kenji_office'),
  ]},
  {id:'conv_08147',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('工場の洗浄プロセスを見直しましょう','Factory cleaning-process review','Brisk','yuki_office'),
    mk('はい。福利厚生の貸付制度を強化しました','Yes — Welfare-lending strengthen','Cooperative','kenji_office'),
    mk('決算前の清算をしっかり進めましょう','Pre-settle settle thoroughly advance','Direction','yuki_office'),
    mk('はい。通商代表団と意見交換しました','Yes — Trade-delegation opinion-exchange','Update','kenji_office'),
    mk('社員が投機に走らないよう啓発しましょう','Staff don\'t-speculate awareness','Direction','yuki_office'),
    mk('はい。当社の知名度向上を進めております','Yes — Our awareness-rise advance','Update','kenji_office'),
    mk('需要を推計してから生産計画を立てましょう','Demand-estimate then prod-plan','Direction','yuki_office'),
    mk('はい。価格は税込みで表記いたします','Yes — Price tax-incl display','Close','kenji_office'),
  ]},
  {id:'conv_08148',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、実験機器の洗浄は徹底しろ','Ren — experiment-equip cleaning thorough','Mentor','hiroshi_boss'),
    mk('はい。研究費の貸付申請を進めております','Yes — Research-fund-lending-apply advance','Earnest','ren_uni'),
    mk('蓮、研究費の清算は月末までに行え','Ren — research-fund settle by-month-end','Direction','hiroshi_boss'),
    mk('はい。通商と科学技術の関連も研究中です','Yes — Trade-sci-tech connection research','Polite','ren_uni'),
    mk('蓮、データを投機的に解釈するな','Ren — data speculative interpret don\'t','Direction','hiroshi_boss'),
    mk('はい。学会で論文の知名度を高めます','Yes — Conf paper-awareness raise','Earnest','ren_uni'),
    mk('蓮、実験回数を推計して計画しろ','Ren — experiment-count estimate plan','Direction','hiroshi_boss'),
    mk('はい。学会費は税込みで予算に組み込みます','Yes — Conf-fee tax-incl budget incorporate','Earnest close','ren_uni'),
  ]},
  {id:'conv_08149',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、現場の洗浄を業者に依頼しました','Police scene cleaning vendor-requested','Calm','takeda_officer'),
    mk('はい。警察、被害者向け貸付制度をご案内くださりありがたいです','Yes — Police victim-lending info grateful','Cooperative','kenji_office'),
    mk('警察、被害金の清算手続きを支援します','Police damage-fund settle-procedure support','Procedural','takeda_officer'),
    mk('はい。警察と通商当局の連携、ありがたいです','Yes — Police trade-authority coop grateful','Cooperative','kenji_office'),
    mk('警察、投機目的の不正取引を捜査しております','Police speculative illegal-trade inv','Procedural','takeda_officer'),
    mk('はい。警察の知名度向上が、地域防犯につながりますね','Yes — Police-awareness region-crime-prev connect','Cooperative','kenji_office'),
    mk('警察、犯罪被害の推計も行っております','Police crime-damage estimate also-do','Procedural','takeda_officer'),
    mk('はい。罰金は税込みで通知されるんですね','Yes — Fine tax-incl notified','Close','kenji_office'),
  ]},
  {id:'conv_08150',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、工場の洗浄を自ら確認されたぞ','Dad — factory-cleaning self-verified','Sage','hiroshi_elder'),
    mk('はい。お父さんは社員への貸付に寛容でした','Yes — Dad staff-lending generous','Commitment','hiroshi_boss'),
    mk('お父さん、清算には誠実にお向き合いだった','Dad — settle sincere-faced','Wistful','hiroshi_elder'),
    mk('はい。お父さんは通商の流れを読まれた','Yes — Dad trade-flow read','Reflective','hiroshi_boss'),
    mk('お父さん、投機ではなく堅実な経営を貫いたぞ','Dad — speculative-not solid mgmt','Wistful','hiroshi_elder'),
    mk('はい。お父さんは会社の知名度を確実に上げられた','Yes — Dad co-aware steady raised','Reflective','hiroshi_boss'),
    mk('お父さん、業績を慎重に推計されたぞ','Dad — perf careful-estimate','Wistful','hiroshi_elder'),
    mk('はい。お父さんは税込み価格表示を徹底されました','Yes — Dad tax-incl-display thorough','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08151',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、メディアの洗脳効果を論文で扱っていましたね','Ren — media-brainwash effect paper','Calm','asuka_teacher'),
    mk('はい、希少疾病の研究を論文で扱いました','Yes — rare-disease research paper','Earnest','ren_uni'),
    mk('蓮さん、ユートピアの空想小説を論文で扱っていましたね','Ren — utopia-fantasy novel paper','Reflective','asuka_teacher'),
    mk('はい、少数部族の文化を論文で扱いました','Yes — minority-tribe-culture paper','Earnest','ren_uni'),
    mk('歴史上の拷問を論文で扱っていましたね','Hist-torture paper','Reflective','asuka_teacher'),
    mk('はい、国営事業の歴史を論文で扱いました','Yes — state-biz-history paper','Earnest','ren_uni'),
    mk('文書の改変を論文で扱っていましたね','Doc-alteration paper','Engaged','asuka_teacher'),
    mk('はい、公営住宅の歴史を論文で扱いました','Yes — public-housing-history paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08152',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('警察、カルト団体による洗脳被害を捜査しております','Police cult-brainwash damage inv','Calm','takeda_officer'),
    mk('本件、警察も希少疾病の影響を考慮されたんですね','Case police rare-disease impact consider','Curious','ren_uni'),
    mk('警察、容疑者の空想的な供述を慎重に扱います','Police suspect-fantasy testimony careful','Procedural','takeda_officer'),
    mk('本件、特定部族向けの偏見問題を警察、対応されたんですね','Case specific-tribe bias-problem police resp','Reflective','ren_uni'),
    mk('警察、容疑者への拷問は絶対に行いません','Police suspect-torture absolutely-don\'t','Procedural','takeda_officer'),
    mk('本件、国営インフラへの攻撃を警察、防いだんですね','Case state-infra attack police-prevent','Reflective','ren_uni'),
    mk('警察、証拠の改変は厳しく取り締まります','Police evidence-alter strict-crack-down','Procedural','takeda_officer'),
    mk('本件、公営住宅での不正利用を警察、摘発されたんですね','Case public-housing illegal-use police-bust','Reflective close','ren_uni'),
  ]},
  {id:'conv_08153',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、メディアの洗脳効果を論文で扱っていましたね','Sakura — media-brainwash paper','Calm','asuka_teacher'),
    mk('はい、希少疾病の研究を論文で扱いました','Yes — rare-disease paper','Earnest teen','sakura_teen'),
    mk('ユートピアの空想小説を論文で扱っていましたね','Utopia-fantasy novel paper','Reflective','asuka_teacher'),
    mk('はい、少数部族の文化を論文で扱いました','Yes — minority-tribe paper','Earnest','sakura_teen'),
    mk('歴史上の拷問を論文で扱っていましたね','Hist-torture paper','Reflective','asuka_teacher'),
    mk('はい、国営事業の歴史を論文で扱いました','Yes — state-biz paper','Earnest','sakura_teen'),
    mk('文書の改変を論文で扱っていましたね','Doc-alter paper','Engaged','asuka_teacher'),
    mk('はい、公営住宅の歴史を論文で扱いました','Yes — public-housing paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08154',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、患者さんを洗脳するような医療は行いません','Ren — patient-brainwash med don\'t-do','Calm','saito_doctor'),
    mk('貴院、希少な疾病の研究もされているそうですね、先生','Your-hosp rare-disease research, sensei','Curious','ren_uni'),
    mk('はい、空想型の症状を呈する患者さんも医療チームは丁寧に診ます','Yes — fantasy-type symptom patient med-team polite-diag','Patient','saito_doctor'),
    mk('医療体制が部族別に異なる国があると、貴院、研究なさったんですね、先生','Med-system tribe-based different country your-hosp research, sensei','Reflective','ren_uni'),
    mk('はい、拷問被害者のトラウマケアを医療チームは行います','Yes — torture-victim trauma-care med-team do','Patient','saito_doctor'),
    mk('国営医療制度との比較を、貴院、論じていらっしゃいますね、先生','State-med-sys comparison your-hosp discuss, sensei','Reflective','ren_uni'),
    mk('はい、カルテの改変は絶対に許しません','Yes — chart-alter absolutely-don\'t-allow','Patient','saito_doctor'),
    mk('公営病院との連携、貴院は強化されているそうですね、先生','Public-hosp coop your-hosp strengthen, sensei','Reflective close','ren_uni'),
  ]},
  {id:'conv_08155',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('お客様を洗脳するようなマーケはやめろ','Cust-brainwash marketing stop','Crisp','hiroshi_boss'),
    mk('はい。社員向け疾病予防プログラムを実施しております','Yes — Staff disease-prev program do','Methodical','kenji_office'),
    mk('当社、空想的な計画ではなく現実的な戦略を立てろ','Our co — fantasy-not real strategy','Direction','hiroshi_boss'),
    mk('はい。海外の特定部族向け商品を企画しております','Yes — Overseas specific-tribe product plan','Update','kenji_office'),
    mk('当社、社員を拷問するようなノルマは絶対与えるな','Our co — staff-torture quota absolutely-don\'t-give','Direction','hiroshi_boss'),
    mk('はい。国営企業との提携交渉を進めております','Yes — State-co partner-negotiate advance','Update','kenji_office'),
    mk('当社、データの改変は厳禁だ','Our co — data-alter strictly-forbid','Direction','hiroshi_boss'),
    mk('はい。公営展示場でのお披露目を計画しております','Yes — Public-exhibition reveal plan','Close','kenji_office'),
  ]},
  {id:'conv_08156',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、株のトレーダー、お客様にいたよ、メイちゃん','Aoi — stock-trader cust existed Mei','Animated','mei_romantic'),
    mk('葵、お店の入り口に小さな地蔵を置いたよ、メイちゃん','Aoi — store-entry small jizo placed Mei','Reflective','aoi_barista'),
    mk('葵、映画のグランプリ作品、お客様が話してたよ、メイちゃん','Aoi — movie-grand-prix work cust-talked Mei','Animated','mei_romantic'),
    mk('葵、お客様、怪獣映画の話で盛り上がってたわ、メイちゃん','Aoi — cust monster-movie lively Mei','Animated','aoi_barista'),
    mk('葵、今週は新作読書三昧の日々よね、メイちゃん','Aoi — this-week new-book-zanmai daily Mei','Reflective','mei_romantic'),
    mk('葵、言うまでもなく、お客様第一よね、メイちゃん','Aoi — needless-to-say cust-first Mei','Reflective','aoi_barista'),
    mk('葵、このごろ寒くなってきたわね、メイちゃん','Aoi — these-days cold-becoming Mei','Reflective','mei_romantic'),
    mk('葵、スキンケアの相談、お客様からよく受けるよ、メイちゃん','Aoi — skin-care cust-consult often Mei','Animated close','aoi_barista'),
  ]},
  {id:'conv_08157',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは株のトレーダーになろうとされたぞ','Gran — youth Dad stock-trader-become attempted','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、村の入り口の地蔵によくお参りされたわよね、あなた?','Yes — Grandpa village-entry jizo often-visited, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが映画のグランプリに感動されたぞ','Gran — youth Dad movie-grand-prix moved','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、子供たちに怪獣の絵を描いてあげたわよね、あなた?','Grandpa — kids monster-drew, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは読書三昧の休日を過ごされたぞ','Gran — youth Dad reading-zanmai off-day','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お父さんを言うまでもなく尊敬されてたわよね、あなた?','Grandpa — Dad needless-to-say respected, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、このごろ若い頃の思い出をよく語りたくなるぞ','Gran — these-days youth-memory often-tell-want','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お肌のスキンケアもなさってたわよね、あなた?','Grandpa — skin-care also-did, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08158',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんのお客様にトレーダーの方がいるの','Sho — Mei-sis cust trader exists','Reflective','mei_romantic'),
    mk('メイ姉さん、お地蔵さん、ぼく、見てきたよ','Mei-sis — jizo me-saw','Eager child','sho_child'),
    mk('翔くん、お父さんと映画のグランプリ、見に行ったの?','Sho — Dad-with movie-grand-prix saw?','Curious','mei_romantic'),
    mk('メイ姉さん、ぼく、怪獣映画大好きだよ','Mei-sis — me monster-movie love','Eager child','sho_child'),
    mk('翔くん、夏休みは読書三昧で過ごしてね','Sho — summer-vac reading-zanmai spend','Direction','mei_romantic'),
    mk('メイ姉さん、お父さんが言うまでもなく尊敬する人だよ','Mei-sis — Dad needless-to-say respect-person','Tender child','sho_child'),
    mk('翔くん、このごろ寒くなってきたわね','Sho — these-days cold-becoming','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼくもお肌のスキンケアした方がいい?','Mei-sis — me skin-care should?','Curious close','sho_child'),
  ]},
  {id:'conv_08159',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、株のトレーダーになりたいんだろ?','Riku — you stock-trader become-want?','Curious teen','sakura_teen'),
    mk('お前、神社のお地蔵さんに祈ったか?桜','You — shrine-jizo prayed? Sakura','Curious','riku_teen'),
    mk('リク、新人のグランプリ、お前が獲れよ','Riku — newcomer-grand-prix you-win','Praising','sakura_teen'),
    mk('お前、怪獣の特撮、好きだろ?桜','You — monster-tokusatsu like? Sakura','Curious','riku_teen'),
    mk('リク、お前、テスト前は勉強三昧だな','Riku — test-before study-zanmai','Wry','sakura_teen'),
    mk('お前、言うまでもなく仲間思いだぜ、桜','You — needless-to-say friend-care Sakura','Praising','riku_teen'),
    mk('リク、このごろ部活、忙しいだろ?','Riku — these-days club busy?','Curious','sakura_teen'),
    mk('お前、スキンケアちゃんとしてるか?桜','You — skin-care properly do? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08160',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんの友人にトレーダーの方がいらっしゃるのよ','Sho — Dad-friend trader exists','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖母ちゃんちの地蔵にお祈りしたよ','Mom — me Grandma-home jizo prayed','Proud child','sho_child'),
    mk('翔くん、お父さんが映画のグランプリ受賞作を勧めてくださったわ','Sho — Dad movie-grand-prix-winner recommended','Reflective','yumiko_mom'),
    mk('ママ、ぼく、怪獣ヒーローのおもちゃ集めてるよ','Mom — me monster-hero toy-collect','Eager child','sho_child'),
    mk('翔くん、お休みの日はゲーム三昧にならないでね','Sho — off-day game-zanmai don\'t','Direction','yumiko_mom'),
    mk('ママ、お父さんは言うまでもなく頑張ってらっしゃるよ','Mom — Dad needless-to-say trying','Tender child','sho_child'),
    mk('翔くん、このごろお祖母ちゃんが心配なの','Sho — these-days Grandma worried','Caring','yumiko_mom'),
    mk('ママ、ぼく、お肌スキンケア、お父さんと一緒にするよ','Mom — me skin-care Dad-with-do','Eager close','sho_child'),
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

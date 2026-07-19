import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_420 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['単体','序盤','ワイルド','くわえ','不都合','幾度','当り','きまっ']
const B_T = ['インストラクター','障壁','離職','測量','バリアフリー','粉飾','生計','ステータス']
const C_T = ['変態','下痢','淘汰','封鎖','犯す','駆除','悟り','生ずる']
const D_T = ['マトリックス','パンダ','ウェールズ','マイホーム','ビーム','スピン','うなぎ','デイトレ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08361',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、このおもちゃは単体では遊べないわよ','Sho — this-toy alone can\'t-play','Reflective','yumiko_mom'),
    mk('ママ、お話の序盤からドキドキしたよ','Mom — story-beginning thrilled','Eager child','sho_child'),
    mk('翔くん、お父さん、ワイルドな性格よね','Sho — Dad wild-personality','Reflective','yumiko_mom'),
    mk('ママ、お祖父ちゃんがパイプをくわえてたよ','Mom — Grandpa pipe-held-in-mouth','Reflective child','sho_child'),
    mk('翔くん、不都合なことがあれば、ママに言ってね','Sho — inconvenience-if Mom-tell','Caring','yumiko_mom'),
    mk('ママ、ぼく、幾度もお父さんに教えてもらったよ','Mom — me many-times Dad-taught','Reflective child','sho_child'),
    mk('翔くん、明日の予報、晴れの当りそうね','Sho — tomorrow-forecast clear-likely','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんの来訪日がきまったよ','Mom — me Grandpa-visit-date decided','Eager close','sho_child'),
  ]},
  {id:'conv_08362',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、新メニューは単体でも人気よ、メイちゃん','Aoi — new-menu alone popular Mei','Praising','mei_romantic'),
    mk('葵、開店序盤はお客様少なめね、メイちゃん','Aoi — open-beginning cust-few Mei','Reflective','aoi_barista'),
    mk('葵、新作のワイルドな盛り付け、いいわね、メイちゃん','Aoi — new wild-plating nice Mei','Praising','mei_romantic'),
    mk('葵、お客様がストローをくわえて飲んでらしたよ、メイちゃん','Aoi — cust straw-held drank Mei','Reflective','aoi_barista'),
    mk('葵、不都合のないシフトを組もうね、メイちゃん','Aoi — no-inconvenience shift Mei','Practical','mei_romantic'),
    mk('葵、幾度も試作した甲斐があったね、メイちゃん','Aoi — many-times prototype paid-off Mei','Praising','aoi_barista'),
    mk('葵、お客様の予想が当りそうね、メイちゃん','Aoi — cust-prediction hit-likely Mei','Reflective','mei_romantic'),
    mk('葵、新メニューの発表日もきまったよ、メイちゃん','Aoi — new-menu-launch-date decided Mei','Eager close','aoi_barista'),
  ]},
  {id:'conv_08363',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが単体で旅をされたぞ','Gran — youth Dad alone-traveled','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、戦争の序盤を覚えていらしたわよね、あなた?','Yes — Grandpa war-beginning-remembered, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはワイルドなお方だったぞ','Gran — youth Dad wild-person','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、刀をくわえる写真があったわよね、あなた?','Grandpa — youth sword-held photo, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、不都合なお話を聞かされたぞ','Gran — youth inconvenient-talk-heard','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、幾度も村に貢献されたわよね、あなた?','Grandpa — many-times village-contrib, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんの直感がよく当ったぞ','Gran — youth Dad-intuition often-hit','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、結婚の日付をきまったとお喜びだったわよね、あなた?','Grandpa — wedding-date decided glad, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08364',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、このアプリ、単体で動くか?','Riku — this-app alone-work?','Curious teen','sakura_teen'),
    mk('お前、試合の序盤、ヤバかったな、桜','You — match-beginning crazy Sakura','Reflective','riku_teen'),
    mk('リク、お前のプレー、ワイルドだぜ','Riku — your-play wild','Praising','sakura_teen'),
    mk('お前、ストローくわえて笑うなよ、桜','You — straw-held don\'t-laugh Sakura','Wry','riku_teen'),
    mk('リク、不都合があったら言えよ','Riku — inconvenience-if-tell','Direction','sakura_teen'),
    mk('お前、幾度も同じミスしてんな、桜','You — many-times same-mistake Sakura','Teasing','riku_teen'),
    mk('リク、お前の予想が見事に当った','Riku — your-prediction-beautifully-hit','Praising','sakura_teen'),
    mk('お前、修学旅行の班、きまったか?桜','You — school-trip-group decided? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08365',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、おもちゃは単体でも楽しめるよね','Sho — toy alone-fun','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お話の序盤がお気に入りだよ','Mei-sis — me story-beginning fave','Eager child','sho_child'),
    mk('翔くん、お父さんのワイルドな笑い方が好きよ','Sho — Dad-wild-laugh like','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、ピアスをくわえる真似したよ','Mei-sis — me earring-held-mimicked','Eager child','sho_child'),
    mk('翔くん、不都合があったら、メイ姉さんに教えてね','Sho — inconvenience-if Mei-sis tell','Caring','mei_romantic'),
    mk('メイ姉さん、ぼく、幾度もお祖父ちゃんに会いに行ったよ','Mei-sis — me many-times Grandpa-visit','Proud child','sho_child'),
    mk('翔くん、メイ姉さんの予想が当ったわね','Sho — Mei-sis-prediction-hit','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祭りの日がきまったから楽しみ','Mei-sis — me fest-date decided look-forward','Eager close','sho_child'),
  ]},
  {id:'conv_08366',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、社員向けインストラクターを招いて研修しろ','Our co — staff-instructor-invite train','Crisp','hiroshi_boss'),
    mk('はい。市場参入の障壁を分析しております','Yes — Market-entry-barrier analyze','Methodical','kenji_office'),
    mk('当社、離職率を低減する対策を進めろ','Our co — turnover-rate-reduce counter advance','Direction','hiroshi_boss'),
    mk('はい。新工場の測量を完了いたしました','Yes — New-factory survey done','Update','kenji_office'),
    mk('社屋のバリアフリー化を進めろ','HQ-barrier-free advance','Direction','hiroshi_boss'),
    mk('はい。決算の粉飾は絶対に許さない方針です','Yes — Accounting-window-dress absolute-don\'t-allow policy','Update','kenji_office'),
    mk('当社、社員の生計を支える経営しろ','Our co — staff-livelihood-support mgmt','Direction','hiroshi_boss'),
    mk('はい。新ブランドのステータスを高めます','Yes — New-brand-status raise','Close','kenji_office'),
  ]},
  {id:'conv_08367',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('当社、IT インストラクターを内製化しましょう','Our IT-instructor in-house','Brisk','yuki_office'),
    mk('はい。海外進出の障壁を整理しました','Yes — Overseas-entry-barrier organize','Cooperative','kenji_office'),
    mk('離職を防ぐ社内アンケートを取りましょう','Turnover-prevent in-house-survey conduct','Direction','yuki_office'),
    mk('はい。新店舗の測量結果を共有します','Yes — New-store-survey-result share','Update','kenji_office'),
    mk('社内をバリアフリー化する計画を進めましょう','In-house-barrier-free plan advance','Direction','yuki_office'),
    mk('はい。粉飾の疑いがないか内部監査を行います','Yes — Window-dress-doubt-not internal-audit','Update','kenji_office'),
    mk('社員の生計向上を支援する制度を整えましょう','Staff-livelihood-improve-support system prep','Direction','yuki_office'),
    mk('はい。当社のブランドステータスを伸ばします','Yes — Our brand-status grow','Close','kenji_office'),
  ]},
  {id:'conv_08368',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、英語のインストラクターを利用しろ','Ren — Eng-instructor utilize','Mentor','hiroshi_boss'),
    mk('はい。研究分野の障壁を理解しております','Yes — Research-field-barrier understand','Earnest','ren_uni'),
    mk('蓮、離職リスクのある共同研究者には連絡しろ','Ren — turnover-risk co-researcher-contact','Direction','hiroshi_boss'),
    mk('はい。実験設備の測量を進めております','Yes — Experiment-equip survey advance','Polite','ren_uni'),
    mk('蓮、研究室のバリアフリー対応を提案しろ','Ren — lab-barrier-free propose','Direction','hiroshi_boss'),
    mk('はい。データ粉飾は学術界の信用を失います','Yes — Data-window-dress academic-trust-lose','Earnest','ren_uni'),
    mk('蓮、研究者として生計を立てる力を身につけろ','Ren — researcher livelihood-build skill','Direction','hiroshi_boss'),
    mk('はい。論文発表で研究者ステータスが上がります','Yes — Paper-pub researcher-status rises','Earnest close','ren_uni'),
  ]},
  {id:'conv_08369',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、防犯インストラクターを学校に派遣しております','Police crime-prev-instructor school-dispatch','Calm','takeda_officer'),
    mk('はい。警察、入国障壁の引き上げに関与されておられますね','Yes — Police entry-barrier-raise involve','Cooperative','kenji_office'),
    mk('警察官の離職を減らすため待遇改善を進めております','Police-officer-turnover reduce treatment-improve','Procedural','takeda_officer'),
    mk('はい。現場の測量を警察、迅速に完了されたんですね','Yes — Scene-survey police-quick done','Cooperative','kenji_office'),
    mk('警察、バリアフリー対応のパトロールを進めております','Police barrier-free patrol advance','Procedural','takeda_officer'),
    mk('はい。粉飾決算事件を警察、捜査中ですね','Yes — Window-dress accounting-case police-inv','Cooperative','kenji_office'),
    mk('警察、被害者の生計復旧支援も行います','Police victim-livelihood-restore-support do','Procedural','takeda_officer'),
    mk('はい。警察のステータスは地域の安心の要ですね','Yes — Police-status region-security-key','Close','kenji_office'),
  ]},
  {id:'conv_08370',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、自らインストラクターを務められた','Dad — self-instructor-served','Sage','hiroshi_elder'),
    mk('はい。お父さんは業界の障壁を打ち破られた','Yes — Dad industry-barrier-broke','Commitment','hiroshi_boss'),
    mk('お父さん、社員の離職を一番嫌った','Dad — staff-turnover most-hated','Wistful','hiroshi_elder'),
    mk('はい。お父さんの代から、現場の測量は社長自ら行うのが伝統','Yes — Since Dad scene-survey pres-self-tradition','Reflective','hiroshi_boss'),
    mk('お父さん、社屋のバリアフリー化を早期に決断された','Dad — HQ-barrier-free early-decided','Wistful','hiroshi_elder'),
    mk('はい。お父さんは粉飾を絶対許さなかった','Yes — Dad window-dress absolute-don\'t-allow','Reflective','hiroshi_boss'),
    mk('お父さん、社員の生計を守るのが使命だとおっしゃった','Dad — staff-livelihood-protect mission-said','Wistful','hiroshi_elder'),
    mk('はい。お父さんはブランドのステータス向上に尽力された','Yes — Dad brand-status-improve devoted','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08371',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、昆虫の変態現象を論文で扱っていましたね','Ren — insect-metamorphosis paper','Calm','asuka_teacher'),
    mk('はい、感染症由来の下痢の研究を論文で扱いました','Yes — infection-induced diarrhea paper','Earnest','ren_uni'),
    mk('蓮さん、市場による淘汰現象を論文で扱っていましたね','Ren — market-elimination paper','Reflective','asuka_teacher'),
    mk('はい、道路封鎖時の経済影響を論文で扱いました','Yes — road-closure econ-impact paper','Earnest','ren_uni'),
    mk('歴史上、罪を犯す者の心理を論文で扱っていましたね','Hist criminal-psyche paper','Engaged','asuka_teacher'),
    mk('はい、害虫駆除の科学を論文で扱いました','Yes — pest-extermination-sci paper','Earnest','ren_uni'),
    mk('蓮さん、修行による悟りの過程を論文で扱っていましたね','Ren — training-enlightenment-process paper','Reflective','asuka_teacher'),
    mk('はい、気候変動から生ずる紛争を論文で扱いました','Yes — climate-change-arising conflict paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08372',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、容疑者の変態行為を警察、捜査中ですね','Case suspect-perv-act police-inv, gratitude','Curious','ren_uni'),
    mk('警察、食中毒による下痢被害を確認しております','Police food-poison diarrhea-damage verify','Procedural','takeda_officer'),
    mk('本件、過去の犯罪組織の淘汰を警察、進められたんですね','Case past crime-org-eliminate police-advance','Reflective','ren_uni'),
    mk('警察、道路封鎖を実施しております','Police road-closure conduct','Procedural','takeda_officer'),
    mk('本件、被害を犯す加害者を警察、特定中ですね','Case damage-perpetrator police-identify','Reflective','ren_uni'),
    mk('警察、害虫駆除業者の協力も得ております','Police pest-exterm-vendor coop get','Procedural','takeda_officer'),
    mk('本件、被害者の悟りに警察、感動されたんですね','Case victim-enlightenment police-moved','Reflective','ren_uni'),
    mk('警察、現場から生ずる悲しみに寄り添います','Police scene-arising sadness stay-close','Close','takeda_officer'),
  ]},
  {id:'conv_08373',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、昆虫の変態現象を論文で扱っていましたね','Sakura — insect-metamorph paper','Calm','asuka_teacher'),
    mk('はい、感染症由来の下痢の研究を論文で扱いました','Yes — infection-diarrhea paper','Earnest teen','sakura_teen'),
    mk('市場による淘汰現象を論文で扱っていましたね','Market-elim paper','Reflective','asuka_teacher'),
    mk('はい、道路封鎖時の経済影響を論文で扱いました','Yes — road-closure paper','Earnest','sakura_teen'),
    mk('歴史上、罪を犯す者の心理を論文で扱っていましたね','Criminal-psyche paper','Engaged','asuka_teacher'),
    mk('はい、害虫駆除の科学を論文で扱いました','Yes — pest-exterm paper','Earnest','sakura_teen'),
    mk('修行による悟りの過程を論文で扱っていましたね','Enlightenment paper','Reflective','asuka_teacher'),
    mk('はい、気候変動から生ずる紛争を論文で扱いました','Yes — climate-arising conflict paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08374',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、変態反応を示す患者さんを医療チームで丁寧に診ます','Ren — metamorph-rxn patient med-team polite-diag','Calm','saito_doctor'),
    mk('はい、下痢の患者さんに脱水対策を医療チームで行います','Yes — Diarrhea-patient dehydration-counter med-team do','Patient','saito_doctor'),
    mk('医療資源の淘汰を、貴院、見ておられますね、先生','Med-resource-elim your-hosp watch, sensei','Curious','ren_uni'),
    mk('はい、感染拡大時の病棟封鎖を医療チームで備えております','Yes — Infection-spread ward-closure med-team prep','Patient','saito_doctor'),
    mk('医療ミスを犯す医師の処分を、貴院、厳しく対応されておられますね、先生','Med-error-doctor-discipline your-hosp strict, sensei','Reflective','ren_uni'),
    mk('はい、院内のゴキブリ駆除を業者と連携して進めます','Yes — In-hosp cockroach-exterm vendor-coop advance','Patient','saito_doctor'),
    mk('終末期医療の悟りに、貴院、医療チームで寄り添われますね、先生','End-life-med enlightenment your-hosp med-team stay-close, sensei','Reflective','ren_uni'),
    mk('はい、薬の副作用から生ずる症状を医療チームで丁寧に診ます','Yes — Drug-side-effect-arising symptom med-team polite-diag','Patient close','saito_doctor'),
  ]},
  {id:'conv_08375',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、市場の変態的な動きに対応しろ','Our co — market-anomalous-move respond','Crisp','hiroshi_boss'),
    mk('はい。社員の食中毒下痢には十分注意しております','Yes — Staff food-poison diarrhea care','Methodical','kenji_office'),
    mk('競合の淘汰が進んでいる、当社にもチャンスだ','Competitor-elim-advance, our-chance','Direction','hiroshi_boss'),
    mk('はい。工場の一時封鎖の影響を最小化しております','Yes — Factory tem-closure impact minimize','Update','kenji_office'),
    mk('社員が法を犯すような行為は絶対許さない','Staff law-perpetrate absolute-don\'t-allow','Direction','hiroshi_boss'),
    mk('はい。社内害虫の駆除を業者に依頼しました','Yes — In-house-pest extermination vendor-requested','Update','kenji_office'),
    mk('当社、商売の悟りを社員に伝えろ','Our co — biz-enlightenment staff-tell','Direction','hiroshi_boss'),
    mk('はい。クレームから生ずる学びも大切にしております','Yes — Claim-arising learning cherish','Close','kenji_office'),
  ]},
  {id:'conv_08376',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、新しい在庫管理マトリックス、お洒落ね、メイちゃん','Aoi — new-stock-matrix stylish Mei','Praising','mei_romantic'),
    mk('葵、お客様、パンダのキャラ商品をお買いになったよ、メイちゃん','Aoi — cust panda-char-goods bought Mei','Animated','aoi_barista'),
    mk('葵、お客様がウェールズ出身でいらしたよ、メイちゃん','Aoi — cust Wales-origin Mei','Reflective','mei_romantic'),
    mk('葵、お客様、マイホーム購入のお話されてたよ、メイちゃん','Aoi — cust own-home-purchase told Mei','Reflective','aoi_barista'),
    mk('葵、ライトのビームを下向きにしようね、メイちゃん','Aoi — light-beam-down Mei','Practical','mei_romantic'),
    mk('葵、お客様、スピン技のアイススケート選手なのよ、メイちゃん','Aoi — cust spin-skater Mei','Animated','aoi_barista'),
    mk('葵、新メニューにうなぎのお重を加えようね、メイちゃん','Aoi — new-menu eel-bento add Mei','Eager','mei_romantic'),
    mk('葵、お客様、デイトレで生計立ててらっしゃるんですって、メイちゃん','Aoi — cust day-trade-livelihood Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08377',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが組織のマトリックス図を描かれたぞ','Gran — youth Dad org-matrix-drew','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お孫さんとパンダを動物園で見に行かれたわよね、あなた?','Yes — Grandpa grandkid-panda-zoo went, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、ウェールズのお話を新聞で読んだぞ','Gran — youth Wales-news read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、マイホームを建てる夢を語ってらしたわよね、あなた?','Grandpa — own-home-build dream-told, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがビーム式のライトを買われたぞ','Gran — youth Dad beam-light bought','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、フィギュアスケートのスピンに感動されたわよね、あなた?','Grandpa — figure-skating spin moved, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、うなぎ屋にお父さんと行ったぞ','Gran — youth eel-restaurant Dad-went','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、デイトレって、なんですか?と笑ってらしたわよね、あなた?','Grandpa — "day-trade what?" laughed, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08378',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんの好きな映画、マトリックスっていうの','Sho — Mei-sis fave-movie Matrix called','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、パンダの絵本見たよ','Mei-sis — me panda-picture-book saw','Eager child','sho_child'),
    mk('翔くん、お父さんがウェールズ語の話してくれたわよ','Sho — Dad Welsh-language told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとお母さんのマイホーム、大好き','Mei-sis — me Dad-Mom-own-home love','Tender child','sho_child'),
    mk('翔くん、お父さんがビームを使ったゲームしてたわよ','Sho — Dad beam-game played','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、コマがスピンするおもちゃ好きだよ','Mei-sis — me top-spin-toy like','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんがうなぎ屋に連れて行ってくださるの','Sho — Grandpa eel-restaurant-take','Animated','mei_romantic'),
    mk('メイ姉さん、ぼく、デイトレってお父さんが言ってたよ','Mei-sis — me day-trade Dad-said','Curious close','sho_child'),
  ]},
  {id:'conv_08379',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、マトリックスの映画見たろ?','Riku — Matrix-movie saw?','Curious teen','sakura_teen'),
    mk('お前、動物園でパンダの前ではしゃいだろ?桜','You — zoo panda-front excited? Sakura','Teasing','riku_teen'),
    mk('リク、お前、社会科でウェールズの単元覚えてるか?','Riku — soc-class Wales-unit remember?','Curious','sakura_teen'),
    mk('お前のお父さん、マイホーム建てたばかりだろ?桜','You — your Dad own-home just-built? Sakura','Curious','riku_teen'),
    mk('リク、お前のレーザーポインターのビーム、強いな','Riku — your laser-pointer-beam strong','Praising','sakura_teen'),
    mk('お前、スピン技得意だろ?桜','You — spin-trick good? Sakura','Praising','riku_teen'),
    mk('リク、お前、うなぎが嫌いなんだろ?','Riku — eel-dislike?','Curious','sakura_teen'),
    mk('お前、デイトレって興味ある?桜','You — day-trade interested? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08380',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがマトリックス映画好きでいらっしゃるわ','Sho — Dad Matrix-movie like','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと動物園でパンダ見たよ','Mom — me Dad-zoo-panda saw','Eager child','sho_child'),
    mk('翔くん、お父さん、ウェールズ留学のお話してたわ','Sho — Dad Wales-study-abroad told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、マイホームに住める日、楽しみだよ','Mom — me own-home-live-day look-forward','Eager child','sho_child'),
    mk('翔くん、お父さんがレーザービームのおもちゃ持ってるわよ','Sho — Dad laser-beam-toy have','Reflective','yumiko_mom'),
    mk('ママ、ぼく、コマのスピンを練習してるよ','Mom — me top-spin-practice','Proud child','sho_child'),
    mk('翔くん、お祖父ちゃんがうなぎを召し上がるのよ','Sho — Grandpa eel-eat','Reflective','yumiko_mom'),
    mk('ママ、お父さんがデイトレのお話してたよ','Mom — Dad day-trade told','Reflective close','sho_child'),
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

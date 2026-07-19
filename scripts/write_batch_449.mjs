import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_449 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['何気ない','あかね','たぐい','一回り','こじんまり','さかん','にこにこ','ひとえに']
const B_T = ['安売り','値動き','外装','試用','贈呈','発案','損得','取り立て']
const C_T = ['見え隠れ','王位','財投','先立ち','国務省','血縁','検疫','受難']
const D_T = ['歯ブラシ','酪農','石器','ニワトリ','和紙','魚介類','アヒル','下駄']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08941',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、何気ない一言が、お祖父ちゃんを元気にしたわね','Sho — casual-word-Grandpa-cheered','Tender','yumiko_mom'),
    mk('ママ、お父さんが、あかね色の夕焼けを見てらしたよ','Mom — Dad-crimson-sunset-saw','Reflective child','sho_child'),
    mk('翔くん、お父さんは、たぐいまれな優しさをお持ちよ','Sho — Dad-rare-kind','Reflective','yumiko_mom'),
    mk('ママ、ぼく、一回り大きくなったって、お祖父ちゃんに言われたよ','Mom — me one-size-up-Grandpa-said','Proud child','sho_child'),
    mk('翔くん、お家はこじんまりして、落ち着くわね','Sho — home-small-calm','Tender','yumiko_mom'),
    mk('ママ、ぼく、お祭りがさかんな町に住みたいよ','Mom — me fest-active-town-want','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんが、にこにこしてらっしゃるわ','Sho — Grandpa-smile','Pleased','yumiko_mom'),
    mk('ママ、ぼく、ひとえにメイ姉さんのおかげで絵を始めたよ','Mom — me solely-Mei-sis-thanks-start','Earnest close','sho_child'),
  ]},
  {id:'conv_08942',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様の何気ない一言が嬉しいよね、メイちゃん','Aoi — cust-casual-word-glad Mei','Pleased','mei_romantic'),
    mk('葵、お店のあかね色のランプを灯しましょう、メイちゃん','Aoi — store-crimson-lamp-light Mei','Direction','aoi_barista'),
    mk('葵、新メニューはたぐいまれな美味しさよ、メイちゃん','Aoi — new-menu-rare-tasty Mei','Praising','mei_romantic'),
    mk('葵、お店も一回りお洒落になったわね、メイちゃん','Aoi — store-one-up-stylish Mei','Pleased','aoi_barista'),
    mk('葵、こじんまりしたお店が長く愛されるよね、メイちゃん','Aoi — small-store-loved Mei','Tender','mei_romantic'),
    mk('葵、お客様、商売がさかんで嬉しい時期ね、メイちゃん','Aoi — cust-biz-active-glad Mei','Pleased','aoi_barista'),
    mk('葵、お客様、にこにこしてお見えになったよ、メイちゃん','Aoi — cust-smile-visit Mei','Pleased','mei_romantic'),
    mk('葵、お店の成功は、ひとえにお客様のおかげね、メイちゃん','Aoi — store-success-solely-cust Mei','Tender close','aoi_barista'),
  ]},
  {id:'conv_08943',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんの何気ない優しさが嬉しかったぞ','Gran — youth Dad-casual-kind-glad','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、あかね色の空をご覧になるのがお好きでらしたわよね、あなた?','Yes — Grandpa-crimson-sky-loved, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは、たぐいの無い人格者でらしたぞ','Gran — youth Dad-unmatched-person','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様が一回りずつ大きくなるのを喜ばれたわよね、あなた?','Grandpa — grandkid-each-time-bigger-glad, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと、こじんまりしたお家に住んだぞ','Gran — youth Dad-small-home-lived','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、村祭りがさかんな時代でらしたわよね、あなた?','Grandpa — village-fest-active-era, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはにこにこ笑う方だったぞ','Gran — youth Dad-smile-laugh','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご長寿は、ひとえにご努力のおかげでらしたわよね、あなた?','Grandpa — long-life solely-effort, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08944',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前の何気ない一言が、俺、結構嬉しかったぞ','Riku — your-casual-word-me-glad','Tender teen','sakura_teen'),
    mk('お前、あかね色の夕焼けを撮ってたな、桜','You — crimson-sunset-photo Sakura','Reflective','riku_teen'),
    mk('リク、お前、たぐいまれな絵の才能あるよ','Riku — rare-art-talent','Praising','sakura_teen'),
    mk('お前、一回り大きくなったな、桜','You — one-bigger Sakura','Praising','riku_teen'),
    mk('リク、お前ん家、こじんまりして、いい雰囲気だな','Riku — your-home-small-vibe-good','Praising','sakura_teen'),
    mk('お前、運動部もさかんに参加してんな、桜','You — sports-club-active-join Sakura','Praising','riku_teen'),
    mk('リク、お前、にこにこ笑顔が癒しだぞ','Riku — smile-heal','Praising','sakura_teen'),
    mk('お前の合格は、ひとえに努力の賜物だな、桜','You — pass-solely-effort Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_08945',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんの何気ない優しさに励まされるのよ','Sho — Mei-sis-casual-kind-encourage','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、あかね色のクレヨンで夕焼け描いたよ','Mei-sis — me crimson-crayon-sunset-drew','Proud child','sho_child'),
    mk('翔くん、メイ姉さんの絵は、たぐいまれな雰囲気を持ってるのよ','Sho — Mei-sis-pic-rare-vibe','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、もう一回り背伸びしてみるよ','Mei-sis — me one-stretch-try','Earnest child','sho_child'),
    mk('翔くん、メイ姉さんはこじんまりしたカフェが好きなのよ','Sho — Mei-sis-small-cafe-like','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祭りがさかんな町に行きたいよ','Mei-sis — me fest-active-town-want','Eager child','sho_child'),
    mk('翔くん、メイ姉さんはにこにこ笑うのが素敵ね','Sho — Mei-sis-smile-lovely','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、ひとえにメイ姉さんのおかげで絵が好きになったよ','Mei-sis — me solely-Mei-sis-thanks-art-like','Earnest close','sho_child'),
  ]},
  {id:'conv_08946',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、安売り戦略には頼るな','Our co — discount-strat-not-rely','Crisp','hiroshi_boss'),
    mk('はい。株式の値動きを毎日確認しております','Yes — Stock-mvt-daily-check','Methodical','kenji_office'),
    mk('当社、新製品の外装デザインを改良しろ','Our co — new-prod-exterior-improve','Direction','hiroshi_boss'),
    mk('はい。お得意様向けに試用品を発送します','Yes — VIP-trial-prod-ship','Update','kenji_office'),
    mk('お得意様への贈呈品を選定しろ','VIP-gift-select','Direction','hiroshi_boss'),
    mk('はい。社員発案の改善提案を集約しています','Yes — Staff-prop-imp-prop-compile','Update','kenji_office'),
    mk('当社、損得を社員に教えるな、誠実さを教えろ','Our co — gain-loss-not-teach sincere-teach','Direction','hiroshi_boss'),
    mk('はい。売掛金の取り立てを丁寧にしております','Yes — AR-collect-careful','Close','kenji_office'),
  ]},
  {id:'conv_08947',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('安売りキャンペーンは限定的に行いましょう','Discount-camp-ltd','Brisk','yuki_office'),
    mk('はい。仮想通貨の値動きを参考にしません','Yes — Crypto-mvt-not-ref','Update','kenji_office'),
    mk('新店舗の外装色を社員投票で決めましょう','New-store-exterior-staff-vote','Direction','yuki_office'),
    mk('はい。新製品の試用結果を集計中です','Yes — New-prod-trial-compile','Update','kenji_office'),
    mk('創立記念に社員へ贈呈品を用意しましょう','Found-anniv-staff-gift-prep','Direction','yuki_office'),
    mk('はい。社員発案の新事業を支援します','Yes — Staff-prop-new-biz-supp','Update','kenji_office'),
    mk('お客様の損得を考えた提案をしましょう','Cust-gain-loss-prop','Direction','yuki_office'),
    mk('はい。督促の取り立て時には敬意を持ちます','Yes — Collect-respect','Close','kenji_office'),
  ]},
  {id:'conv_08948',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究費を安売りで節約するな','Ren — research-fund-discount-not','Mentor','hiroshi_boss'),
    mk('はい。論文の引用数の値動きを記録しております','Yes — Paper-cite-mvt-rec','Earnest','ren_uni'),
    mk('蓮、論文の外装、つまり表紙にもこだわれ','Ren — paper-exterior-cover-care','Direction','hiroshi_boss'),
    mk('はい。試薬の試用結果を学会で扱いました','Yes — Reagent-trial conf','Polite','ren_uni'),
    mk('蓮、共同研究者への贈呈品を準備しろ','Ren — joint-researcher-gift-prep','Direction','hiroshi_boss'),
    mk('はい。研究テーマは指導教授の発案でした','Yes — Research-topic-adv-prop','Earnest','ren_uni'),
    mk('蓮、研究では損得抜きで真実を追求しろ','Ren — research-gain-loss-truth-pursue','Direction','hiroshi_boss'),
    mk('はい。研究費の取り立てではなく支援を申請します','Yes — Research-fund-collect-not-supp-app','Earnest close','ren_uni'),
  ]},
  {id:'conv_08949',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、安売り商品の中の偽造品を捜査されますね','Police discount-fake-inv','Cooperative','kenji_office'),
    mk('警察、株式の値動きで詐欺が増える事案にも対応されますね','Police stock-mvt-fraud-resp','Cooperative','kenji_office'),
    mk('警察、街灯の外装を防犯仕様にして下さってますね','Police streetlight-exterior-crime-prev','Cooperative','kenji_office'),
    mk('警察、新防犯機材の試用、ありがたいです','Police new-crime-prev-trial grateful','Cooperative','kenji_office'),
    mk('警察、感謝状の贈呈もされますね','Police thanks-gift','Cooperative','kenji_office'),
    mk('警察、市民発案の防犯活動を支援されますね','Police citizen-prop-crime-prev-supp','Cooperative','kenji_office'),
    mk('警察、損得勘定で動かれないご姿勢、頼もしいです','Police gain-loss-not-act reliable','Cooperative','kenji_office'),
    mk('警察、悪質な取り立てを捜査されますね','Police mal-collect-inv','Close','kenji_office'),
  ]},
  {id:'conv_08950',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、安売りに頼らずブランドを築かれたぞ','Dad — founding discount-not-brand-built','Sage','hiroshi_elder'),
    mk('はい。お父さんは株式の値動きを毎日見られた','Yes — Dad stock-mvt-daily','Commitment','hiroshi_boss'),
    mk('お父さん、商品の外装にこだわられたぞ','Dad — prod-exterior-care','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新商品の試用販売を始められた','Yes — Dad new-prod-trial-sale','Reflective','hiroshi_boss'),
    mk('お父さん、お得意様への贈呈品を自ら選ばれたぞ','Dad — VIP-gift-self-chose','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員発案の新事業を採用された','Yes — Dad staff-prop-new-biz-adopt','Reflective','hiroshi_boss'),
    mk('お父さん、損得抜きの判断もされたぞ','Dad — gain-loss-judg','Wistful','hiroshi_elder'),
    mk('はい。お父さんは厳しい取り立てを社員に強いられなかった','Yes — Dad strict-collect-staff-not','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08951',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、組織内の派閥が見え隠れする時期史を論文で扱いましたね','Ren — org-faction-glimpse-era paper','Calm','asuka_teacher'),
    mk('はい、王位継承を巡る戦争史を論文で扱いました','Yes — Throne-succession-war paper','Earnest','ren_uni'),
    mk('蓮さん、財投を使った戦後復興を論文で扱いましたね','Ren — fiscal-invest-postwar-recov paper','Reflective','asuka_teacher'),
    mk('はい、近代化に先立ち行われた制度改革を論文で扱いました','Yes — Mod-pre-reform paper','Earnest','ren_uni'),
    mk('米国国務省の対日政策史を論文で扱いましたね','US-State-Dept-Japan-pol-hist paper','Engaged','asuka_teacher'),
    mk('はい、血縁関係を巡る相続問題を論文で扱いました','Yes — Blood-rel-inh paper','Earnest','ren_uni'),
    mk('蓮さん、検疫制度の歴史を論文で扱いましたね','Ren — quar-sys-hist paper','Reflective','asuka_teacher'),
    mk('はい、宗教者の受難史を論文で扱いました','Yes — Relig-suffer-hist paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08952',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、警察、容疑者の見え隠れする動きを警戒されてますね','Case suspect-glimpse-move police-watch','Reflective','ren_uni'),
    mk('警察、王位継承の混乱に乗じた犯罪を警戒します','Police throne-conf-crime-watch','Procedural','takeda_officer'),
    mk('本件、財投を悪用した詐欺を警察、捜査されてますね','Case fiscal-invest-abuse-fraud police-inv','Reflective','ren_uni'),
    mk('警察、本件は事件発生に先立ち兆候がありました','Police case-pre-sign','Procedural','takeda_officer'),
    mk('本件、米国国務省との情報共有を警察、進められてますね','Case US-State-Dept-info-share police-progress','Reflective','ren_uni'),
    mk('警察、血縁関係の確認も丁寧に行います','Police blood-rel-confirm-careful','Procedural','takeda_officer'),
    mk('本件、国際検疫を擦り抜けた事案を警察、ご対応中ですね','Case int-quar-evade police-resp','Reflective','ren_uni'),
    mk('警察、受難の歴史を持つ被害者ご家族に寄り添います','Police suffer-hist-victim-fam-by','Close','takeda_officer'),
  ]},
  {id:'conv_08953',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、組織内の派閥が見え隠れする時期史を論文で扱いましたね','Sakura — org-faction-glimpse paper','Calm','asuka_teacher'),
    mk('はい、王位継承を巡る戦争史を論文で扱いました','Yes — Throne-succession paper','Earnest teen','sakura_teen'),
    mk('財投を使った戦後復興を論文で扱いましたね','Fiscal-invest paper','Reflective','asuka_teacher'),
    mk('はい、近代化に先立ち行われた制度改革を論文で扱いました','Yes — Mod-pre-reform paper','Earnest','sakura_teen'),
    mk('米国国務省の対日政策史を論文で扱いましたね','US-State-Dept paper','Engaged','asuka_teacher'),
    mk('はい、血縁関係を巡る相続問題を論文で扱いました','Yes — Blood-rel-inh paper','Earnest','sakura_teen'),
    mk('検疫制度の歴史を論文で扱いましたね','Quar-sys-hist paper','Reflective','asuka_teacher'),
    mk('はい、宗教者の受難史を論文で扱いました','Yes — Relig-suffer paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08954',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、患者さんの体調変化の兆候を見え隠れする段階で察知します','Ren — patient-cond-glimpse-stage-det','Calm','saito_doctor'),
    mk('はい、王位を継承するような重圧の研究を医療チームで参照しております','Yes — Throne-pressure-research med-team ref','Patient','saito_doctor'),
    mk('医療財投に関する貴院のお考え、聞かせて下さい、先生','Med-fiscal-invest-view, sensei','Curious','ren_uni'),
    mk('はい、診察に先立ち問診を医療チームで丁寧に行います','Yes — Pre-diag-interview med-team careful','Patient','saito_doctor'),
    mk('米国国務省主催の医療会議に貴院、招かれたんですね、先生','US-State-Dept-med-conf your-hosp-invited, sensei','Curious','ren_uni'),
    mk('はい、血縁ドナーによる移植を医療チームで扱います','Yes — Blood-rel-donor-transplant med-team','Patient','saito_doctor'),
    mk('感染症の検疫体制を貴院、ご強化されてますね、先生','Infect-quar-sys your-hosp strength, sensei','Reflective','ren_uni'),
    mk('はい、受難中の患者さんに寄り添う医療を医療チームで提供します','Yes — Suffer-patient-acc-med med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_08955',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、競合の戦略が見え隠れする時こそ警戒しろ','Our co — rival-strat-glimpse-watch','Crisp','hiroshi_boss'),
    mk('はい。社長交代を王位継承のように描く報道に注意します','Yes — Pres-change-throne-report-care','Methodical','kenji_office'),
    mk('当社、財投の動向を投資判断に活かせ','Our co — fiscal-invest-trend-invest-judg','Direction','hiroshi_boss'),
    mk('はい。新事業に先立ち市場調査を進めます','Yes — New-biz-pre-market-research','Update','kenji_office'),
    mk('当社、米国国務省の動きにも注意しろ','Our co — US-State-Dept-care','Direction','hiroshi_boss'),
    mk('はい。血縁採用は厳格に禁止します','Yes — Blood-rel-hire strict-no','Update','kenji_office'),
    mk('海外出張時の検疫対応を整えろ','Overseas-biz-quar-resp-prep','Direction','hiroshi_boss'),
    mk('はい。経営陣の受難期にも社員を支えます','Yes — Mgmt-suffer-staff-supp','Close','kenji_office'),
  ]},
  {id:'conv_08956',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お店に新しい歯ブラシスタンドを置きましょう、メイちゃん','Aoi — store-new-toothbrush-stand-place Mei','Direction','mei_romantic'),
    mk('葵、お客様、酪農のお仕事だって、メイちゃん','Aoi — cust-dairy-farm-work Mei','Reflective','aoi_barista'),
    mk('葵、お客様、博物館で石器時代の展示を見られたって、メイちゃん','Aoi — cust-museum-stone-age-saw Mei','Reflective','mei_romantic'),
    mk('葵、お祭りでニワトリ模様の屋台を見たね、メイちゃん','Aoi — fest-chicken-pattern-stall Mei','Pleased','aoi_barista'),
    mk('葵、お店のメニュー、和紙にしましょう、メイちゃん','Aoi — store-menu-washi-paper Mei','Direction','mei_romantic'),
    mk('葵、新メニュー、魚介類のパスタ加えましょう、メイちゃん','Aoi — new-menu-seafood-pasta-add Mei','Animated','aoi_barista'),
    mk('葵、お子様、アヒルのおもちゃに夢中ね、メイちゃん','Aoi — child-duck-toy-into Mei','Pleased','mei_romantic'),
    mk('葵、お客様、夏祭りに下駄でお見えになったよ、メイちゃん','Aoi — cust-summer-fest-geta-visit Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_08957',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは毎朝歯ブラシを新しく替えられたぞ','Gran — youth Dad-morn-toothbrush-replace','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃酪農のお手伝いをされたわよね、あなた?','Yes — Grandpa-youth-dairy-farm-help, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは石器の歴史を勉強されたぞ','Gran — youth Dad-stone-age-study','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お庭でニワトリを飼っておられたわよね、あなた?','Grandpa — garden-chicken-keep, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがお手紙を和紙でお書きになったぞ','Gran — youth Dad-letter-washi','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お祝いに魚介類のお料理を作って下さったわよね、あなた?','Grandpa — celeb-seafood-cook, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが池でアヒルを見せて下さったぞ','Gran — youth Dad-pond-duck-show','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お祭りで下駄を履いてらしたわよね、あなた?','Grandpa — fest-geta-wear, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08958',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、新しい歯ブラシを買ってあげるわね','Sho — new-toothbrush-buy','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、ママと酪農体験に行ったよ','Mei-sis — me Mom-dairy-exp','Eager child','sho_child'),
    mk('翔くん、お父さんが石器のレプリカを買ってこられたわ','Sho — Dad-stone-replica-bought','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、田舎でニワトリ見たよ','Mei-sis — me country-chicken-saw','Eager child','sho_child'),
    mk('翔くん、メイ姉さんが和紙のしおりをくれたわ','Sho — Mei-sis-washi-bookmark-gave','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと魚介類のお店に行きたいよ','Mei-sis — me Dad-seafood-want','Eager child','sho_child'),
    mk('翔くん、池にアヒルが浮かんでるわね','Sho — pond-duck-float','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祭りで下駄を履いてみたい','Mei-sis — me fest-geta-want','Eager close','sho_child'),
  ]},
  {id:'conv_08959',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、歯ブラシ毎月替えてんだろ?','Riku — toothbrush-monthly-replace?','Curious teen','sakura_teen'),
    mk('お前、社会で酪農の単元やったろ?桜','You — soc-dairy-farm-unit? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会で石器時代やったろ?','Riku — soc-stone-age?','Curious','sakura_teen'),
    mk('お前、田舎でニワトリ追いかけたろ?桜','You — country-chicken-chased? Sakura','Wry','riku_teen'),
    mk('リク、お前、書道で和紙使ったろ?','Riku — calligraphy-washi?','Curious','sakura_teen'),
    mk('お前、給食の魚介類好きだろ?桜','You — lunch-seafood-like? Sakura','Curious','riku_teen'),
    mk('リク、お前、池でアヒル見てたな','Riku — pond-duck-watched','Wry','sakura_teen'),
    mk('お前、夏祭りで下駄履いてたろ?桜','You — summer-fest-geta? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08960',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、歯ブラシをちゃんと使いましょうね','Sho — toothbrush-properly-use','Direction','yumiko_mom'),
    mk('ママ、ぼく、酪農のお話を授業で聞いたよ','Mom — me dairy-farm-class-heard','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんが石器のレプリカ見せて下さったわ','Sho — Grandpa-stone-replica-showed','Reflective','yumiko_mom'),
    mk('ママ、ぼく、田舎の家でニワトリ追いかけたよ','Mom — me country-home-chicken-chased','Eager child','sho_child'),
    mk('翔くん、お父さんが和紙のうちわを買ってこられたわ','Sho — Dad-washi-fan-bought','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖母ちゃんの魚介類のお料理大好き','Mom — me Grandma-seafood-cook-love','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんと池でアヒルを見ましょうね','Sho — Grandpa-pond-duck-see','Tender','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんの下駄借りたいよ','Mom — me Grandpa-geta-borrow-want','Eager close','sho_child'),
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

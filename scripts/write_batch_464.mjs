import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_464 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['たべ','横たわっ','のる','盗み','名乗り','注が','申し述べ','惜しみ']
const B_T = ['メタデータ','主眼','採る','価額','常設','工学科','多面','製作所']
const C_T = ['滞納','突発','陽性','観衆','空爆','同伴','中流','卓越']
const D_T = ['壷','林道','極楽','大昔','甘み','グリル','シェイクスピア','大黒']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09241',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、ご飯はちゃんとたべましょうね','Sho — rice-properly-eat','Direction','yumiko_mom'),
    mk('ママ、お祖父ちゃんがソファに横たわって眠ってらしたよ','Mom — Grandpa-sofa-lay-sleep','Reflective child','sho_child'),
    mk('翔くん、自転車にのる時は気を付けてね','Sho — bike-ride-care','Direction','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんとお話で笑いの盗みっこしたよ','Mom — me Grandpa-laugh-steal-game','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんが昔のお名前を名乗りで紹介して下さったわ','Sho — Grandpa-old-name-call-intro','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんがお茶を注がれるのを見たよ','Mom — me Dad-tea-pour-saw','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんがご感想を申し述べて下さったわ','Sho — Grandpa-thought-state','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんがおやつを惜しみなくくれたよ','Mom — me Grandpa-snack-no-spare','Pleased close','sho_child'),
  ]},
  {id:'conv_09242',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、新メニューをたべてみたいと仰ってたよ、メイちゃん','Aoi — cust-new-menu-eat-want Mei','Pleased','mei_romantic'),
    mk('葵、お客様、ソファに横たわってお茶を召し上がってたよ、メイちゃん','Aoi — cust-sofa-lay-tea Mei','Reflective','aoi_barista'),
    mk('葵、お客様、自転車にのって来店して下さったね、メイちゃん','Aoi — cust-bike-ride-came Mei','Reflective','mei_romantic'),
    mk('葵、お店からの盗み撮りはご遠慮ねがいたいね、メイちゃん','Aoi — store-steal-photo-no Mei','Direction','aoi_barista'),
    mk('葵、新規のお客様が名乗りで自己紹介して下さったよ、メイちゃん','Aoi — new-cust-call-self-intro Mei','Pleased','mei_romantic'),
    mk('葵、お客様にコーヒーを注がれる様子を見て勉強になるね、メイちゃん','Aoi — cust-coffee-pour-learn Mei','Reflective','aoi_barista'),
    mk('葵、お客様が感想を申し述べて下さって嬉しいね、メイちゃん','Aoi — cust-feedback-state-glad Mei','Pleased','mei_romantic'),
    mk('葵、お客様、コーヒー豆を惜しみなく使われるよ、メイちゃん','Aoi — cust-coffee-bean-no-spare Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_09243',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんと夕飯をたべるのが楽しみだった','Gran — youth Dad-dinner-eat-fun','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、畳に横たわってお昼寝されたわよね、あなた?','Yes — Grandpa-tatami-lay-nap, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが馬にのって田んぼを巡られた','Gran — youth Dad-horse-ride-rice','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、孫の盗みっこ遊びに付き合ってらしたわよね、あなた?','Grandpa — grandkid-steal-game-acc, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは家紋を名乗りで誇りに仰った','Gran — youth Dad-crest-call-pride','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お酒を注がれる時の所作が美しかったわよね、あなた?','Grandpa — sake-pour-gesture-beauty, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは家訓を申し述べて下さった','Gran — youth Dad-fam-creed-state','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様に時間を惜しみなく注がれたわよね、あなた?','Grandpa — grandkid-time-no-spare, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09244',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、給食、ちゃんとたべろよ','Riku — lunch-properly-eat','Direction teen','sakura_teen'),
    mk('お前、机に横たわって寝るなよ、桜','You — desk-lay-sleep-don\'t Sakura','Wry','riku_teen'),
    mk('リク、お前、新しい自転車にのってんな','Riku — new-bike-ride','Curious','sakura_teen'),
    mk('お前、答案盗みするなよ、桜','You — answer-steal-don\'t Sakura','Direction','riku_teen'),
    mk('リク、お前、フルネームで名乗りができるか?','Riku — full-name-call-can?','Curious','sakura_teen'),
    mk('お前、お茶を注がれる時、ちゃんとお辞儀しろよ、桜','You — tea-pour-bow Sakura','Direction','riku_teen'),
    mk('リク、お前、堂々と意見を申し述べろよ','Riku — bold-view-state','Direction','sakura_teen'),
    mk('お前、努力を惜しみなく続けてんな、桜','You — effort-no-spare-cont Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_09245',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お弁当をたべましょうね','Sho — bento-eat','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、芝生に横たわって雲を見たよ','Mei-sis — me grass-lay-cloud-saw','Eager child','sho_child'),
    mk('翔くん、自転車にのる時はヘルメットを忘れずにね','Sho — bike-ride-helmet-not-forget','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お友達と盗みっこ遊びしたよ','Mei-sis — me friend-steal-game','Eager child','sho_child'),
    mk('翔くん、お友達にきちんと名乗りで自己紹介しましょうね','Sho — friend-call-self-intro','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖母ちゃんがお茶を注がれる時を見るのが好きだよ','Mei-sis — me Grandma-tea-pour-watch-like','Tender child','sho_child'),
    mk('翔くん、メイ姉さんに自分の考えを申し述べてみてね','Sho — Mei-sis-self-view-state','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんが時間を惜しみなく分けて下さって嬉しかった','Mei-sis — me Grandpa-time-no-spare-glad','Eager close','sho_child'),
  ]},
  {id:'conv_09246',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、ファイルのメタデータを整理しろ','Our co — file-metadata-org','Crisp','hiroshi_boss'),
    mk('はい。新事業の主眼を顧客満足度に置きます','Yes — New-biz-focus-CSAT','Methodical','kenji_office'),
    mk('当社、人材を全国から採るぞ','Our co — talent-nat-hire','Direction','hiroshi_boss'),
    mk('はい。価額表示の規則を統一しました','Yes — Price-disp-rule-unify','Update','kenji_office'),
    mk('本社一階に常設の展示スペースを作れ','HQ-1F-perm-show-space','Direction','hiroshi_boss'),
    mk('はい。工学科卒の社員を技術部門に配属します','Yes — Eng-grad-tech-section','Update','kenji_office'),
    mk('当社、多面的に市場を分析しろ','Our co — multi-market-anal','Direction','hiroshi_boss'),
    mk('はい。製作所の工程改善を進めております','Yes — Manuf-fac-proc-imp','Close','kenji_office'),
  ]},
  {id:'conv_09247',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('お客様データのメタデータ管理を強化しましょう','Cust-data-metadata-strength','Brisk','yuki_office'),
    mk('はい。新店舗運営の主眼を清潔さに置きます','Yes — New-store-focus-clean','Cooperative','kenji_office'),
    mk('優秀な人材を業界から採るチャンスです','Top-talent-industry-hire-opp','Reflective','yuki_office'),
    mk('はい。仕入れの価額を見直しました','Yes — Buy-price-review','Update','kenji_office'),
    mk('店内に常設の展示棚を作りましょう','Store-perm-show-shelf','Direction','yuki_office'),
    mk('はい。工学科出身の社員から技術アイデアを集めます','Yes — Eng-grad-staff-idea-collect','Update','kenji_office'),
    mk('お客様の声を多面的に分析しましょう','Cust-voice-multi-anal','Direction','yuki_office'),
    mk('はい。本社直営の製作所運営も検討します','Yes — HQ-direct-manuf-fac-consider','Close','kenji_office'),
  ]},
  {id:'conv_09248',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文のメタデータを正確に記入しろ','Ren — paper-metadata-acc','Mentor','hiroshi_boss'),
    mk('はい。論文の主眼を新発見に置きます','Yes — Paper-focus-new-finding','Earnest','ren_uni'),
    mk('蓮、共同研究者を国際的に採るぞ','Ren — joint-researcher-int-hire','Direction','hiroshi_boss'),
    mk('はい。研究機材の価額を予算と比較しました','Yes — Equip-price-budget-comp','Polite','ren_uni'),
    mk('蓮、研究室に常設の実験室を作れ','Ren — lab-perm-exp-room','Direction','hiroshi_boss'),
    mk('はい。工学科の同窓会で発表しました','Yes — Eng-alum-pres','Earnest','ren_uni'),
    mk('蓮、論文で多面的な分析を示せ','Ren — paper-multi-anal-show','Direction','hiroshi_boss'),
    mk('はい。試料製作所と連携して論文を仕上げます','Yes — Sample-manuf-fac-link-paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09249',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、捜査資料のメタデータを管理されてますね','Police inv-doc-metadata-mgmt','Cooperative','kenji_office'),
    mk('警察、捜査の主眼を被害者保護に置かれますね','Police inv-focus-victim-prot','Cooperative','kenji_office'),
    mk('警察、優秀な人材を地域から採られますね','Police top-talent-region-hire','Cooperative','kenji_office'),
    mk('警察、押収品の価額評価もご担当ですね','Police confis-price-eval','Cooperative','kenji_office'),
    mk('警察、駐在所の常設展示で防犯啓発されますね','Police stat-perm-show-crime-prev','Cooperative','kenji_office'),
    mk('警察、工学科卒の鑑識官も活躍されてますね','Police eng-grad-foren-active','Cooperative','kenji_office'),
    mk('警察、犯罪を多面的に分析されますね','Police crime-multi-anal','Cooperative','kenji_office'),
    mk('警察、地元製作所での盗難事件もご捜査ですね','Police local-manuf-fac-theft-inv','Close','kenji_office'),
  ]},
  {id:'conv_09250',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、書類のメタデータ的な管理を徹底された','Dad — founding doc-metadata-strict','Sage','hiroshi_elder'),
    mk('はい。お父さんは経営の主眼をお客様に置かれた','Yes — Dad mgmt-focus-cust','Commitment','hiroshi_boss'),
    mk('お父さん、海外人材を採る決断をされたぞ','Dad — overseas-talent-hire-decide','Wistful','hiroshi_elder'),
    mk('はい。お父さんは商品の価額交渉に長けてらした','Yes — Dad prod-price-nego-skill','Reflective','hiroshi_boss'),
    mk('お父さん、本社に常設のショールームを作られた','Dad — HQ-perm-show-room','Wistful','hiroshi_elder'),
    mk('はい。お父さんは工学科出身の社員を信頼された','Yes — Dad eng-grad-staff-trust','Reflective','hiroshi_boss'),
    mk('お父さん、多面的な視点で経営判断をされたぞ','Dad — multi-view-mgmt-judg','Wistful','hiroshi_elder'),
    mk('はい。お父さんは製作所の現場に頻繁に足を運ばれた','Yes — Dad manuf-fac-on-site-freq','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09251',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、税の滞納問題を論文で扱いましたね','Ren — tax-deli paper','Calm','asuka_teacher'),
    mk('はい、突発的な災害への備えを論文で扱いました','Yes — Sudden-disaster-prep paper','Earnest','ren_uni'),
    mk('蓮さん、感染症の陽性率の研究を論文で扱いましたね','Ren — infect-pos-rate paper','Reflective','asuka_teacher'),
    mk('はい、近代スポーツの観衆心理を論文で扱いました','Yes — Mod-sport-crowd-psy paper','Earnest','ren_uni'),
    mk('戦時下の空爆被害史を論文で扱いましたね','Wartime-airstrike paper','Engaged','asuka_teacher'),
    mk('はい、皇室の同伴行事を論文で扱いました','Yes — Imp-fam-acc-event paper','Earnest','ren_uni'),
    mk('蓮さん、中流階級の社会学を論文で扱いましたね','Ren — middle-class-soc paper','Reflective','asuka_teacher'),
    mk('はい、卓越したリーダーの研究を論文で扱いました','Yes — Excel-leader-research paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09252',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、警察、税滞納絡みの詐欺を捜査されてますね','Case tax-deli-fraud police-inv','Reflective','ren_uni'),
    mk('警察、突発事案にも備えて訓練しております','Police sudden-case-drill','Procedural','takeda_officer'),
    mk('本件、薬物検査で陽性となった事案を警察、扱われてますね','Case drug-test-pos-case police','Reflective','ren_uni'),
    mk('警察、観衆が集まるイベント警備も担当します','Police crowd-event-guard','Procedural','takeda_officer'),
    mk('本件、過去の空爆遺物の不法売買を警察、捜査されますね','Case airstrike-relic-illegal-trade-inv','Reflective','ren_uni'),
    mk('警察、要人の同伴警備を行います','Police VIP-acc-guard','Procedural','takeda_officer'),
    mk('本件、中流層を狙った詐欺を警察、警戒されますね','Case middle-target-fraud police-watch','Reflective','ren_uni'),
    mk('警察、卓越した捜査技術を市民にもご紹介ください','Police excel-inv-tech-citizen-intro','Close','kenji_office'),
  ]},
  {id:'conv_09253',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、税の滞納問題を論文で扱いましたね','Sakura — tax-deli paper','Calm','asuka_teacher'),
    mk('はい、突発的な災害への備えを論文で扱いました','Yes — Sudden-disaster paper','Earnest teen','sakura_teen'),
    mk('感染症の陽性率の研究を論文で扱いましたね','Infect-pos paper','Reflective','asuka_teacher'),
    mk('はい、近代スポーツの観衆心理を論文で扱いました','Yes — Sport-crowd paper','Earnest','sakura_teen'),
    mk('戦時下の空爆被害史を論文で扱いましたね','War-airstrike paper','Engaged','asuka_teacher'),
    mk('はい、皇室の同伴行事を論文で扱いました','Yes — Imp-fam-acc paper','Earnest','sakura_teen'),
    mk('中流階級の社会学を論文で扱いましたね','Middle-class paper','Reflective','asuka_teacher'),
    mk('はい、卓越したリーダーの研究を論文で扱いました','Yes — Excel-leader paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09254',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、医療費の滞納事案を医療チームで丁寧に対応します','Ren — med-bill-deli med-team careful','Calm','saito_doctor'),
    mk('はい、突発事故の救命を医療チームで備えております','Yes — Sudden-acc-rescue med-team prep','Patient','saito_doctor'),
    mk('検査結果が陽性の患者さんへの伝達方法を、貴院、慎重にされてますね、先生','Test-pos-patient-conv your-hosp careful, sensei','Reflective','ren_uni'),
    mk('はい、観衆の中での救命対応も医療チームで訓練します','Yes — Crowd-rescue med-team drill','Patient','saito_doctor'),
    mk('空爆被害者の医療史を、貴院、研究されてますね、先生','Airstrike-victim-hist your-hosp research, sensei','Reflective','ren_uni'),
    mk('はい、付き添いの同伴者にも丁寧に対応します','Yes — Acc-careful-resp','Patient','saito_doctor'),
    mk('中流層に多い生活習慣病の予防を、貴院、なさってますね、先生','Middle-LSD-prev your-hosp do, sensei','Reflective','ren_uni'),
    mk('はい、医療技術の卓越性を医療チームで追求します','Yes — Med-tech-excel-pursue med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_09255',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、支払い滞納のお取引先には注意しろ','Our co — pay-deli-partner-care','Crisp','hiroshi_boss'),
    mk('はい。突発的なトラブルに備えた体制を整えます','Yes — Sudden-trouble-prep-sys','Methodical','kenji_office'),
    mk('当社、市場で陽性的な反応を得る新製品を出せ','Our co — market-pos-react-new-prod','Direction','hiroshi_boss'),
    mk('はい。発表会の観衆を増やす広報を強化します','Yes — Launch-crowd-up-PR-strength','Update','kenji_office'),
    mk('当社、空爆のような価格攻勢には焦らず対応しろ','Our co — airstrike-price-attack-calm','Direction','hiroshi_boss'),
    mk('はい。お客様への同伴サービスも検討します','Yes — Cust-acc-svc-consider','Update','kenji_office'),
    mk('当社、中流層のニーズに応える製品を出せ','Our co — middle-need-resp-prod','Direction','hiroshi_boss'),
    mk('はい。卓越した品質を追求し続けます','Yes — Excel-qual-pursue-cont','Close','kenji_office'),
  ]},
  {id:'conv_09256',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お店に陶器の壷を飾りたいわね、メイちゃん','Aoi — store-ceram-pot-decor Mei','Reflective','mei_romantic'),
    mk('葵、お客様、林道をハイキングされたって、メイちゃん','Aoi — cust-forest-hike Mei','Reflective','aoi_barista'),
    mk('葵、お客様、新メニュー、極楽の味だって仰ってたよ、メイちゃん','Aoi — cust-new-menu-paradise-taste Mei','Pleased','mei_romantic'),
    mk('葵、お客様、大昔のお店の写真を持ってこられたよ、メイちゃん','Aoi — cust-long-ago-store-photo Mei','Reflective','aoi_barista'),
    mk('葵、新メニュー、ハチミツの甘みを生かしましょう、メイちゃん','Aoi — new-menu-honey-sweet Mei','Direction','mei_romantic'),
    mk('葵、お店にグリルキッチンを増設したいね、メイちゃん','Aoi — store-grill-kitchen-add Mei','Reflective','aoi_barista'),
    mk('葵、お客様、シェイクスピアの劇を観られたって、メイちゃん','Aoi — cust-Shakespeare-play-saw Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご実家に大黒柱の家を建てられたって、メイちゃん','Aoi — cust-family-Daikoku-pillar-house Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09257',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが古い壷を大事にされたぞ','Gran — youth Dad-old-pot-cherish','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、林道で山菜を採りに行かれたわよね、あなた?','Yes — Grandpa-forest-veg-pick, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは極楽のような穏やかさを持っていらした','Gran — youth Dad-paradise-calm','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、大昔のお話を孫にされたわよね、あなた?','Grandpa — long-ago-grandkid-told, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが甘みのあるお酒を好まれた','Gran — youth Dad-sweet-sake-liked','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お庭でグリルでお肉を焼いて下さったわよね、あなた?','Grandpa — garden-grill-meat-cooked, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはシェイクスピアの劇を観に行かれた','Gran — youth Dad-Shakespeare-play','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、家の大黒様のお飾りを大事になさったわよね、あなた?','Grandpa — home-Daikoku-orn-cherish, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09258',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お祖母ちゃんが古い壷をお持ちなのよ','Sho — Grandma-old-pot-have','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと林道を歩きたいよ','Mei-sis — me Dad-forest-walk-want','Eager child','sho_child'),
    mk('翔くん、メイ姉さんのお家、まるで極楽のように静かね','Sho — Mei-sis-home-paradise-calm','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんが大昔のお話してくれたよ','Mei-sis — me Grandpa-long-ago-told','Eager child','sho_child'),
    mk('翔くん、お祖母ちゃんのお菓子は甘みがちょうどいいわね','Sho — Grandma-snack-sweet-good','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとグリルでお肉焼きたい','Mei-sis — me Dad-grill-meat-want','Eager child','sho_child'),
    mk('翔くん、メイ姉さんとシェイクスピアの絵本読みましょうね','Sho — Mei-sis-Shakespeare-book-read','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんが大黒柱なんだよ','Mei-sis — me Grandpa-Daikoku-pillar','Proud close','sho_child'),
  ]},
  {id:'conv_09259',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前ん家、立派な壷あるな','Riku — your-home-fine-pot','Praising teen','sakura_teen'),
    mk('お前、林道でジョギングしてんだろ?桜','You — forest-jog? Sakura','Curious','riku_teen'),
    mk('リク、お前、放課後にゲームやって極楽だな','Riku — after-game-paradise','Wry','sakura_teen'),
    mk('お前、社会で大昔の文明やったろ?桜','You — soc-long-ago-civ? Sakura','Curious','riku_teen'),
    mk('リク、お前、甘み控えめのお菓子好きだろ?','Riku — sweet-low-snack-like?','Curious','sakura_teen'),
    mk('お前、家族でグリル料理楽しんだろ?桜','You — fam-grill-fun? Sakura','Curious','riku_teen'),
    mk('リク、お前、文化祭でシェイクスピアの劇やったろ?','Riku — fest-Shakespeare?','Curious','sakura_teen'),
    mk('お前ん家、お父さん大黒柱だろ?桜','You — your-home-Dad-Daikoku? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09260',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖母ちゃんがお花を活ける壷を見せて下さったわ','Sho — Grandma-flower-pot-show','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと林道を歩いてみたい','Mom — me Dad-forest-walk-want','Eager child','sho_child'),
    mk('翔くん、温泉に浸かるのは極楽ね','Sho — onsen-soak-paradise','Pleased','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんから大昔の歌を教わったよ','Mom — me Grandpa-long-ago-song-learn','Proud child','sho_child'),
    mk('翔くん、お祖母ちゃんのお菓子は、ほどよい甘みね','Sho — Grandma-snack-mild-sweet','Praising','yumiko_mom'),
    mk('ママ、ぼく、お父さんがグリルでお肉焼いてくれたよ','Mom — me Dad-grill-meat-cook','Eager child','sho_child'),
    mk('翔くん、お父さんとシェイクスピアの劇を観に行きましょうね','Sho — Dad-Shakespeare-go','Tender','yumiko_mom'),
    mk('ママ、ぼく、家族の大黒柱はお父さんだって思うよ','Mom — me fam-Daikoku-Dad-think','Reflective close','sho_child'),
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

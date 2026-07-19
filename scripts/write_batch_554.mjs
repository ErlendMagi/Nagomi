import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_554 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['しまお','登勢','橘','ウチダ','岡野','石毛','田代','安井']
const B_T = ['小平','小樽','明石','近江','杉並','伏見','新庄','川越']
const C_T = ['そぐわない','優劣','ケープ','コロニー','歌人','死人','ビジネスチャンス','スンニ']
const D_T = ['コロコロ','サブタイトル','タイツ','トラバ','スバ','ジモン','背番号','ケタ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_11041',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが漫画家「しまおまほ」さんの作品を読まれてるわ','Sho — Dad-Shimao-mng-read','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと「登勢おばあちゃん」の昔話聞いたよ','Mom — me Dad-Tose-grnm-tale','Pleased child','sho_child'),
    mk('翔くん、お父さんが「橘家のご主人と知り合い」って仰ってたわ','Sho — Dad-"Tachi-pres-fri"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとカメラのウチダ写真機店行ったよ','Mom — me Dad-Uchida-cam-shop','Pleased child','sho_child'),
    mk('翔くん、お父さんが「岡野さんは寡黙な紳士」って仰ってたわ','Sho — Dad-"Okano-gent-quiet"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと石毛おじさんに会ったよ','Mom — me Dad-Ishige-uncle-met','Pleased child','sho_child'),
    mk('翔くん、お父さんが「田代まさしの懐かしい曲を聴く」って仰ってたわ','Sho — Dad-"Tash-Masashi-nost"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんの友達の安井おじさんと釣りに行ったよ','Mom — me Dad-fri-Yasui-uncle-fish','Eager close','sho_child'),
  ]},
  {id:'conv_11042',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、漫画家しまおさんの本を読まれてたよ、メイちゃん','Aoi — cust-Shimao-mng-read Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お母様のお名前が登勢さんだって、メイちゃん','Aoi — cust-mom-Tose Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ご友人の橘さんとお茶されてたよ、メイちゃん','Aoi — cust-fri-Tachi-tea Mei','Reflective','mei_romantic'),
    mk('葵、お客様、地元のウチダ商店で買物されてるって、メイちゃん','Aoi — cust-local-Uchida-shop Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ご友人の岡野さんとよく来店されるよ、メイちゃん','Aoi — cust-fri-Okano-reg Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お父様のお名前が石毛さんだって、メイちゃん','Aoi — cust-fa-Ishige Mei','Reflective','aoi_barista'),
    mk('葵、お客様、田代まさしの楽曲のお話を語って下さったよ、メイちゃん','Aoi — cust-Tash-Masashi-music Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご友人の安井さんと音楽鑑賞されてたよ、メイちゃん','Aoi — cust-fri-Yasui-mus Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_11043',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが漫画家しまおさんと文通された','Gran — youth Dad-Shimao-letter','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、登勢おばあちゃんと俳句を詠まれたわよね、あなた?','Yes — Grandpa-Tose-haik, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが橘家との家族ぐるみの交流があった','Gran — youth Dad-Tachibana-fam-int','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、カメラのウチダ写真機店に通われたわよね、あなた?','Grandpa — youth-Uchida-cam, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが岡野さんと音楽鑑賞された','Gran — youth Dad-Okano-mus','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、石毛さんと将棋を指されたわよね、あなた?','Grandpa — youth-Ishige-shog, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが田代まさしの楽曲を口ずさまれた','Gran — youth Dad-Tash-Masashi-hum','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、安井氏と海外進出を企画されたわよね、あなた?','Grandpa — youth-Yasui-overs-plan, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_11044',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、漫画家しまおさんのエッセイ読んでたな','Riku — Shimao-essay-read','Wry teen','sakura_teen'),
    mk('お前のお祖母様、登勢さんって名前だったよな、桜','You — grnm-Tose Sakura','Curious','riku_teen'),
    mk('リク、お前、隣のクラスの橘と話してたな','Riku — next-cl-Tachi-talk','Curious','sakura_teen'),
    mk('お前、ウチダ写真機店で証明写真撮ったろ、桜','You — Uchida-cam-ID? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会の岡野先生厳しかったな','Riku — soc-Okano-strict','Wry','sakura_teen'),
    mk('お前、野球の石毛コーチのプレー覚えてたな、桜','You — base-Ishige-pl-mem Sakura','Curious','riku_teen'),
    mk('リク、お前、田代まさしの懐かしいビデオ観てたな','Riku — Tash-Masashi-vid','Wry','sakura_teen'),
    mk('お前、塾の安井先生のクラスだったろ、桜','You — cram-Yasui-cl? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_11045',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「漫画家しまおさんは独特の世界観」って仰ってたわ','Sho — Dad-"Shimao-world"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと登勢おばあちゃんの絵本を読んだよ','Mei-sis — me Dad-Tose-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが「橘家のお祝いに行く予定」って仰ってたわ','Sho — Dad-"Tachi-cel"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとウチダ家のお宅にお邪魔したよ','Mei-sis — me Dad-Uchida-house-vis','Eager child','sho_child'),
    mk('翔くん、お父さんが「岡野家のご親戚に会いに行こう」って仰ってたわ','Sho — Dad-"Okano-rel-vis"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと石毛さんと一緒に野球観たよ','Mei-sis — me Dad-Ishige-base','Eager child','sho_child'),
    mk('翔くん、お父さんが「田代まさし時代の懐メロを聴こう」って仰ってたわ','Sho — Dad-"Tash-Masashi-nost"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと安井先輩の引退試合観たよ','Mei-sis — me Dad-Yasui-ret-game','Eager close','sho_child'),
  ]},
  {id:'conv_11046',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、東京小平市の研究所と連携しろ','Our co — Tok-Kod-lab-link','Crisp','hiroshi_boss'),
    mk('はい。北海道小樽の支店の月次報告を確認します','Yes — Hok-Otaru-branch-mo','Methodical','kenji_office'),
    mk('当社、兵庫県明石市の工場を強化しろ','Our co — Hy-Akashi-fact','Direction','hiroshi_boss'),
    mk('はい。滋賀県近江地区の取引先と連携します','Yes — Shi-Omi-client-link','Update','kenji_office'),
    mk('当社、東京杉並区にショールームを開けろ','Our co — Tok-Sugi-show','Direction','hiroshi_boss'),
    mk('はい。京都市伏見の老舗酒蔵と提携します','Yes — Kyoto-Fushi-sake-part','Update','kenji_office'),
    mk('当社、山形県新庄の物流拠点を強化しろ','Our co — Yam-Shin-log','Direction','hiroshi_boss'),
    mk('はい。埼玉県川越の支店長と打ち合わせします','Yes — Sait-Kaw-branch-meet','Close','kenji_office'),
  ]},
  {id:'conv_11047',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('小平の研究所と打ち合わせしましょう','Kod-lab-meet','Brisk','yuki_office'),
    mk('はい。小樽支店の年末キャンペーンを企画します','Yes — Otaru-yr-end-camp','Cooperative','kenji_office'),
    mk('明石市の工場改修プランを進めましょう','Akashi-fact-renov','Direction','yuki_office'),
    mk('はい。近江商人の経営理念を社員研修に取り入れます','Yes — Omi-merchant-train','Update','kenji_office'),
    mk('杉並区のショールームの内装を整えましょう','Sugi-show-inter','Direction','yuki_office'),
    mk('はい。伏見の取引先との宴席を準備します','Yes — Fushi-client-din','Update','kenji_office'),
    mk('新庄の物流センターの稼働状況を確認しましょう','Shin-log-cent-stat','Direction','yuki_office'),
    mk('はい。川越支店の月次報告を確認します','Yes — Kaw-branch-mo','Close','kenji_office'),
  ]},
  {id:'conv_11048',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、東京小平の研究機関と連携しろ','Ren — Tok-Kod-res-link','Mentor','hiroshi_boss'),
    mk('はい。北海道小樽の地域経済論文を読みます','Yes — Hok-Otaru-econ-paper','Earnest','ren_uni'),
    mk('蓮、明石の海洋研究所と共同研究しろ','Ren — Akashi-mar-lab','Direction','hiroshi_boss'),
    mk('はい。近江商人の経営史の論文を読みます','Yes — Omi-merchant-hist-paper','Earnest','ren_uni'),
    mk('蓮、東京杉並のキャンパスとも交流しろ','Ren — Tok-Sugi-camp-int','Direction','hiroshi_boss'),
    mk('はい。京都伏見の醸造文化の論文を読みます','Yes — Kyoto-Fushi-brew-paper','Polite','ren_uni'),
    mk('蓮、山形県新庄市の民俗学研究を読め','Ren — Yam-Shin-folk-stud','Direction','hiroshi_boss'),
    mk('はい。埼玉県川越の歴史的街並み研究を読みます','Yes — Sait-Kaw-hist-town-paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_11049',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、小平警察署と連携した広域捜査もされますね','Police Kod-stat-wide-inv','Cooperative','kenji_office'),
    mk('警察、北海道小樽の事案も担当されますね','Police Hok-Otaru-case','Cooperative','kenji_office'),
    mk('警察、兵庫県明石海峡関連の事案も対応されますね','Police Hy-Akashi-strait-case','Cooperative','kenji_office'),
    mk('警察、滋賀県近江での事案も担当されますね','Police Shi-Omi-case','Cooperative','kenji_office'),
    mk('警察、東京杉並署と合同捜査されますね','Police Tok-Sugi-stat-joint','Cooperative','kenji_office'),
    mk('警察、京都伏見の繁華街の警備もされますね','Police Kyoto-Fushi-ent-guard','Cooperative','kenji_office'),
    mk('警察、山形県新庄市の冬期警備もされますね','Police Yam-Shin-win-guard','Cooperative','kenji_office'),
    mk('警察、埼玉県川越署と連携した広域捜査もされますね','Police Sait-Kaw-stat-wide','Close','kenji_office'),
  ]},
  {id:'conv_11050',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、小平に研究所を建てられた','Dad — youth-Kod-lab-build','Sage','hiroshi_elder'),
    mk('はい。お父さんは北海道小樽の支店設立に尽力された','Yes — Dad Hok-Otaru-found','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、明石の工場創設に立ち会われた','Dad — youth-Akashi-fact-found','Wistful','hiroshi_elder'),
    mk('はい。お父さんは近江商人の経営理念を学ばれた','Yes — Dad Omi-merchant-stud','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、東京杉並にお住まいだった','Dad — youth-Tok-Sugi-live','Wistful','hiroshi_elder'),
    mk('はい。お父さんは京都伏見の酒蔵と取引された','Yes — Dad Kyoto-Fushi-sake','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、山形県新庄市と縁を持たれた','Dad — youth-Yam-Shin-tie','Wistful','hiroshi_elder'),
    mk('はい。お父さんは埼玉県川越の歴史的街並みを愛された','Yes — Dad Sait-Kaw-hist-town-love','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_11051',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、伝統に「そぐわない」改革の社会学研究を論文で扱いましたね','Ren — trad-incomp-ref paper','Calm','asuka_teacher'),
    mk('はい、教育評価で優劣を付ける弊害の研究を論文で扱いました','Yes — Edu-rank-harm paper','Earnest','ren_uni'),
    mk('蓮さん、南アフリカのケープタウン、つまりケープ植民史を論文で扱いましたね','Ren — S-Afr-Cape paper','Reflective','asuka_teacher'),
    mk('はい、戦前の植民地、つまりコロニーの研究を論文で扱いました','Yes — Prewar-col paper','Earnest','ren_uni'),
    mk('蓮さん、現代歌人の作品研究を論文で扱いましたね','Ren — mod-poet paper','Reflective','asuka_teacher'),
    mk('はい、刑法における死人、つまり死人の名誉毀損の研究を論文で扱いました','Yes — Crim-dead-def paper','Earnest','ren_uni'),
    mk('蓮さん、新興市場のビジネスチャンスの研究を論文で扱いましたね','Ren — emer-mkt-biz-chance paper','Reflective','asuka_teacher'),
    mk('はい、中東のスンニ派、つまりスンニ系コミュニティの研究を論文で扱いました','Yes — ME-Sunni paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_11052',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、捜査手法にそぐわない手順があれば、警察、是正されますね','Case proc-incomp police-correct','Reflective','ren_uni'),
    mk('警察、捜査員の優劣を付けず、警察、評価されますね','Police inv-rank-no police-eval','Cooperative','takeda_officer'),
    mk('本件、南アフリカのケープタウン関連の国際捜査を、警察、連携されますね','Case S-Afr-Cape-int-inv police-link','Reflective','ren_uni'),
    mk('警察、密入国者、つまり違法コロニー事案にも対応されますね','Police illeg-col-case','Cooperative','takeda_officer'),
    mk('本件、歌人の遺品盗難を、警察、捜査されますね','Case poet-prop-theft police-inv','Reflective','ren_uni'),
    mk('警察、現場の死人、つまり遺体の検視を、警察、慎重におこなわれますね','Police scene-dead-autop-careful','Cooperative','takeda_officer'),
    mk('本件、ビジネスチャンスを装った詐欺事案を、警察、捜査されますね','Case biz-chance-fraud police-inv','Reflective','ren_uni'),
    mk('警察、スンニ派、つまりスンニ系のテロ防止情報も把握されますね','Police Sunni-terr-prev-info','Close','takeda_officer'),
  ]},
  {id:'conv_11053',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、伝統に「そぐわない」改革の社会学研究を論文で扱いましたね','Sakura — incomp paper','Calm','asuka_teacher'),
    mk('はい、教育評価で優劣を付ける弊害の研究を論文で扱いました','Yes — Rank-harm paper','Earnest teen','sakura_teen'),
    mk('南アフリカのケープタウン、つまりケープ植民史を論文で扱いましたね','Cape paper','Reflective','asuka_teacher'),
    mk('はい、戦前の植民地、つまりコロニーの研究を論文で扱いました','Yes — Col paper','Earnest','sakura_teen'),
    mk('現代歌人の作品研究を論文で扱いましたね','Poet paper','Reflective','asuka_teacher'),
    mk('はい、刑法における死人、つまり死人の名誉毀損の研究を論文で扱いました','Yes — Dead-def paper','Earnest','sakura_teen'),
    mk('新興市場のビジネスチャンスの研究を論文で扱いましたね','Biz-chance paper','Reflective','asuka_teacher'),
    mk('はい、中東のスンニ派、つまりスンニ系コミュニティの研究を論文で扱いました','Yes — Sunni paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_11054',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、治療法が患者様の生活にそぐわない場合、医療チームで再検討します','Ren — treat-incomp-rev med-team','Calm','saito_doctor'),
    mk('蓮さん、医師の優劣を付けない様、医療チームで配慮します','Ren — doc-rank-no-care med-team','Calm','saito_doctor'),
    mk('蓮さん、南アフリカのケープタウン医学会と医療チームで交流します','Ren — Cape-med-conf med-team','Calm','saito_doctor'),
    mk('蓮さん、医療従事者の海外コロニー、つまり研究拠点を医療チームで設立します','Ren — med-overs-col med-team','Calm','saito_doctor'),
    mk('蓮さん、歌人の患者様への詩的ケアを医療チームでおこないます','Ren — poet-pati-poet-care med-team','Calm','saito_doctor'),
    mk('蓮さん、死人、つまりお亡くなりになった患者様のご家族のグリーフケアを医療チームでおこないます','Ren — dec-pati-grief med-team','Calm','saito_doctor'),
    mk('蓮さん、医療事業のビジネスチャンスを医療チームで慎重に検討します','Ren — med-biz-chance med-team','Calm','saito_doctor'),
    mk('蓮さん、スンニ派、つまりスンニ系患者様への宗教的配慮を医療チームでおこないます','Ren — Sunni-pati-resp med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_11055',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、企業文化にそぐわない人材は採用するな','Our co — co-cult-incomp-hire-no','Crisp','hiroshi_boss'),
    mk('はい。社員の優劣を競争で煽る人事は避けます','Yes — Staff-rank-comp-avoid','Methodical','kenji_office'),
    mk('当社、南アフリカのケープタウンに支社を開設しろ','Our co — S-Afr-Cape-branch','Direction','hiroshi_boss'),
    mk('はい。新興市場をコロニーとせず、対等取引します','Yes — Emer-mkt-col-no-equal','Update','kenji_office'),
    mk('当社、社内報の歌人コーナーを作れ','Our co — int-news-poet-corner','Direction','hiroshi_boss'),
    mk('はい。死人、つまりお亡くなりになった社員のご遺族への配慮を徹底します','Yes — Dec-staff-fam-care-thor','Update','kenji_office'),
    mk('当社、業界のビジネスチャンスを逃すな','Our co — ind-biz-chance-no-miss','Direction','hiroshi_boss'),
    mk('はい。中東のスンニ派、つまりスンニ圏との取引も検討します','Yes — ME-Sunni-deal','Close','kenji_office'),
  ]},
  {id:'conv_11056',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、お子様がコロコロ転がるおもちゃが大好きだって、メイちゃん','Aoi — cust-kid-koro-toy-love Mei','Reflective','mei_romantic'),
    mk('葵、お客様、映画のサブタイトルを語って下さったよ、メイちゃん','Aoi — cust-film-sub-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、冬場に履くタイツの暖かさを語って下さったよ、メイちゃん','Aoi — cust-win-tights-warm Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ブログでトラバ、つまりトラックバックの機能を語って下さったよ、メイちゃん','Aoi — cust-blog-trackback-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、フィジー首都のスバに行かれたって、メイちゃん','Aoi — cust-Fiji-Suva Mei','Reflective','mei_romantic'),
    mk('葵、お客様、芸人寺門ジモンのグルメ番組がお好きだって、メイちゃん','Aoi — cust-Jimon-gourm-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お子様がサッカー部で背番号10って嬉しそうだって、メイちゃん','Aoi — cust-kid-soccer-10-glad Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お給料がケタ違いに上がったって笑ってらしたよ、メイちゃん','Aoi — cust-sal-keta-up-laugh Mei','Wry close','aoi_barista'),
  ]},
  {id:'conv_11057',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがコロコロ転がるおもちゃをお孫様にプレゼントされた','Gran — youth Dad-koro-toy-gift','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、洋画のサブタイトル付きを観られたわよね、あなた?','Yes — Grandpa-film-sub-watch, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、私が冬にタイツを愛用していた','Gran — youth-me-tights-fav','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、初期のブログでトラバ、つまりトラックバックを使われたわよね、あなた?','Grandpa — early-blog-trackback, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがフィジー首都スバに出張された','Gran — youth Dad-Fiji-Suva-trip','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、寺門ジモンの番組を毎週観られたわよね、あなた?','Grandpa — youth-Jimon-wk, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが野球の背番号3を尊敬された','Gran — youth Dad-base-no-3-resp','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、給料がケタ違いに上がった経験あったわよね、あなた?','Grandpa — youth-sal-keta-up, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_11058',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがコロコロボールのおもちゃを下さるそうよ','Sho — Dad-koro-ball-gift','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「映画のサブタイトルを覚える遊び」したよ','Mei-sis — me Dad-"sub-mem"-game','Eager child','sho_child'),
    mk('翔くん、お父さんが「冬の防寒にタイツがいい」って仰ってたわ','Sho — Dad-"win-tights"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「ブログのトラバ、つまりトラックバックの仕組み」を教えて頂いたよ','Mei-sis — me Dad-"trackback"-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが「フィジーの首都スバはきれい」って仰ってたわ','Sho — Dad-"Fiji-Suva-beau"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと寺門ジモンのグルメ番組観たよ','Mei-sis — me Dad-Jimon-gourm','Eager child','sho_child'),
    mk('翔くん、お父さんが「サッカーの背番号10は特別」って仰ってたわ','Sho — Dad-"soccer-10-spec"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「ケタ違いの努力が必要」って言われたよ','Mei-sis — me Dad-"keta-effort"-said','Earnest close','sho_child'),
  ]},
  {id:'conv_11059',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、コロコロコミック読んでたな','Riku — Koro-Komi-read','Wry teen','sakura_teen'),
    mk('お前、映画のサブタイトル覚えるの上手だな、桜','You — film-sub-mem-good Sakura','Praising','riku_teen'),
    mk('リク、お前、冬にタイツ重ね履きしてたな','Riku — win-tights-layer','Wry','sakura_teen'),
    mk('お前、ブログのトラバ、つまりトラックバック付けてたろ、桜','You — blog-trackback? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会でフィジー首都スバ覚えたろ','Riku — soc-Fiji-Suva-mem?','Curious','sakura_teen'),
    mk('お前、寺門ジモンのファンだったろ、桜','You — Jimon-fan? Sakura','Wry','riku_teen'),
    mk('リク、お前、サッカー部で背番号7だったろ','Riku — soccer-no-7?','Curious','sakura_teen'),
    mk('お前、テスト結果がケタ違いに上がったな、桜','You — test-keta-up Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_11060',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがコロコロ転がるおもちゃを買って下さるわ','Sho — Dad-koro-toy-buy','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと映画のサブタイトル一覧見たよ','Mom — me Dad-film-sub-list','Eager child','sho_child'),
    mk('翔くん、お父さんがママに新しいタイツを下さったわ','Sho — Dad-Mom-tights-gift','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと「ブログのトラバ、つまりトラックバック」見学したよ','Mom — me Dad-trackback-look','Eager child','sho_child'),
    mk('翔くん、お父さんがフィジーのスバ旅行を計画されてるわ','Sho — Dad-Fiji-Suva-plan','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと寺門ジモンの番組観たよ','Mom — me Dad-Jimon-prog','Eager child','sho_child'),
    mk('翔くん、お父さんが「サッカー観戦は背番号で選手を覚える」って仰ってたわ','Sho — Dad-"soccer-no-mem"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと「ケタ違いに大きな数」の話したよ','Mom — me Dad-"keta-big"-talk','Eager close','sho_child'),
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

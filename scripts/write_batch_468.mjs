import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_468 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['むちゃくちゃ','聴こえ','だまし','気が付か','呟き','めげ','つかまえ','おさえ']
const B_T = ['デイトレード','圏内','屈指','約款','朗報','物的','司書','仕掛ける']
const C_T = ['激戦','欠損','直観','天災','幻覚','無期','呪縛','避妊']
const D_T = ['新聞紙','ナルニア','極上','旅立ち','母音','アイデンティティー','灯台','ピンク色']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09321',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お部屋がむちゃくちゃね、お片付けしましょう','Sho — room-messy-clean','Direction','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんの声が聴こえないと寂しいよ','Mom — me Grandpa-voice-hear-no-lonely','Earnest child','sho_child'),
    mk('翔くん、お友達をだまして遊ぶのはやめましょうね','Sho — friend-trick-play-stop','Direction','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんの優しさに気が付かなかった事もあったよ','Mom — me Grandpa-kind-notice-not','Reflective child','sho_child'),
    mk('翔くん、お父さんが小さく呟きでお返事されたわ','Sho — Dad-small-mumble-reply','Reflective','yumiko_mom'),
    mk('ママ、ぼく、ちょっとやそっとじゃめげないよ','Mom — me little-not-discour','Brave child','sho_child'),
    mk('翔くん、お庭で蝶々をつかまえる名人ね','Sho — garden-butterfly-catch-expert','Praising','yumiko_mom'),
    mk('ママ、ぼく、お父さんの涙をおさえる仕草を見たよ','Mom — me Dad-tears-hold-saw','Tender close','sho_child'),
  ]},
  {id:'conv_09322',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、繁忙期の朝はむちゃくちゃ忙しいわね、メイちゃん','Aoi — busy-morn-crazy-busy Mei','Wry','mei_romantic'),
    mk('葵、お客様の小声が聴こえにくいよね、メイちゃん','Aoi — cust-quiet-hear-hard Mei','Reflective','aoi_barista'),
    mk('葵、お客様をだましてしまうような表記は避けようね、メイちゃん','Aoi — cust-trick-disp-avoid Mei','Direction','mei_romantic'),
    mk('葵、お客様の小さなご要望に気が付かないと駄目だね、メイちゃん','Aoi — cust-small-req-notice-need Mei','Reflective','aoi_barista'),
    mk('葵、お客様の小さな呟きを聞き逃さないようにね、メイちゃん','Aoi — cust-mumble-not-miss Mei','Direction','mei_romantic'),
    mk('葵、失敗してもめげない強さが大事ね、メイちゃん','Aoi — fail-not-discour-impt Mei','Encouraging','aoi_barista'),
    mk('葵、お子様、お店の前のセミをつかまえてらしたよ、メイちゃん','Aoi — child-store-front-cicada-catch Mei','Pleased','mei_romantic'),
    mk('葵、繁忙期、感情をおさえて笑顔でいこうね、メイちゃん','Aoi — busy-emo-hold-smile Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_09323',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんの家がむちゃくちゃに散らかってたぞ','Gran — youth Dad-home-crazy-cluttered','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お孫様の声が聴こえると喜ばれたわよね、あなた?','Yes — Grandpa-grandkid-voice-hear-glad, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはだまして相手を喜ばすイタズラされた','Gran — youth Dad-trick-pleas','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ばあさんの気持ちに気が付かない時もありましたわよね、あなた?','Grandpa — gran-feel-notice-not-time, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんの呟きで真意を察した','Gran — youth Dad-mumble-true-sense','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、戦時下にもめげない強さでらしたわよね、あなた?','Grandpa — war-not-discour, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが川で魚をつかまえる名手だった','Gran — youth Dad-river-fish-catch-expert','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、感情をおさえる優しさを持ってらしたわよね、あなた?','Grandpa — emo-hold-kind, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09324',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前のノート、むちゃくちゃだぞ','Riku — your-note-messy','Wry teen','sakura_teen'),
    mk('お前、先生の話が聴こえないって、寝てたろ、桜','You — teacher-hear-no-sleeping Sakura','Wry','riku_teen'),
    mk('リク、お前、俺をだましてプリント忘れさせたな','Riku — me-trick-print-forget','Wry','sakura_teen'),
    mk('お前、俺の頑張りに気が付かないなんてひどいぞ、桜','You — my-effort-notice-not-mean Sakura','Reflective','riku_teen'),
    mk('リク、お前、テスト中に呟きで答え言うなよ','Riku — test-mumble-answer-don\'t','Direction','sakura_teen'),
    mk('お前、進路にめげずに頑張れよ、桜','You — career-not-discour-try Sakura','Encouraging','riku_teen'),
    mk('リク、お前、迷子の犬をつかまえてくれて偉いぞ','Riku — stray-dog-catch-great','Praising','sakura_teen'),
    mk('お前、テスト前に焦りをおさえろよ、桜','You — pre-test-rush-hold Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_09325',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お絵描き道具がむちゃくちゃに散らばってるわよ','Sho — art-tool-crazy-scatter','Wry','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんの声がはっきり聴こえるよ','Mei-sis — me Mei-sis-voice-clear-hear','Eager child','sho_child'),
    mk('翔くん、お絵描きでだましみたいに似せて描くのは凄いわよ','Sho — art-trick-resem-amazing','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんの優しさに気が付かない時があってごめんね','Mei-sis — me Mei-sis-kind-notice-not-sorry','Earnest child','sho_child'),
    mk('翔くん、メイ姉さんが「綺麗ね」って呟きで褒めて下さったわ','Sho — Mei-sis-"pretty"-mumble-praise','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、お絵描きで失敗してもめげずに続けるよ','Mei-sis — me art-fail-not-discour-cont','Brave child','sho_child'),
    mk('翔くん、メイ姉さんと公園でトンボをつかまえに行きましょう','Sho — Mei-sis-park-drag-catch-go','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、嬉しい気持ちをおさえる事ができないよ','Mei-sis — me joy-hold-can\'t','Eager close','sho_child'),
  ]},
  {id:'conv_09326',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、社員のデイトレードは禁止だ','Our co — staff-daytrade-ban','Crisp','hiroshi_boss'),
    mk('はい。新店舗を商圏内に出店する計画です','Yes — New-store-market-zone-open','Methodical','kenji_office'),
    mk('当社、業界屈指の品質を目指せ','Our co — industry-top-qual-aim','Direction','hiroshi_boss'),
    mk('はい。契約約款を最新化しました','Yes — Contract-terms-update','Update','kenji_office'),
    mk('当社、お得意様への朗報を準備しろ','Our co — VIP-good-news-prep','Direction','hiroshi_boss'),
    mk('はい。物的証拠を整理しております','Yes — Phys-evid-org','Update','kenji_office'),
    mk('当社、社内図書室に司書を配置しろ','Our co — co-lib-librarian-place','Direction','hiroshi_boss'),
    mk('はい。新商品の販促企画を仕掛けるタイミングです','Yes — New-prod-promo-trigger-time','Close','kenji_office'),
  ]},
  {id:'conv_09327',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('社員のデイトレード禁止規程を周知しましょう','Staff-daytrade-ban-rule-info','Brisk','yuki_office'),
    mk('はい。営業圏内のお客様を可視化しました','Yes — Sales-zone-cust-vis','Cooperative','kenji_office'),
    mk('業界屈指のお取引先を大事にしましょう','Industry-top-partner-cherish','Direction','yuki_office'),
    mk('はい。お客様契約の約款を更新しました','Yes — Cust-contract-terms-update','Update','kenji_office'),
    mk('お得意様への朗報を発信しましょう','VIP-good-news-iss','Direction','yuki_office'),
    mk('はい。物的な裏付け資料を準備します','Yes — Phys-back-doc-prep','Update','kenji_office'),
    mk('社内図書室の司書配置を検討しましょう','Co-lib-librarian-consider','Direction','yuki_office'),
    mk('はい。新商品キャンペーンを仕掛けるご相談ですね','Yes — New-prod-camp-trigger-cons','Close','kenji_office'),
  ]},
  {id:'conv_09328',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究者のデイトレード傾向を論文で扱いました','Ren — researcher-daytrade-paper','Mentor','hiroshi_boss'),
    mk('はい。学会の発表圏内にいる研究者と連携します','Yes — Conf-zone-researcher-link','Earnest','ren_uni'),
    mk('蓮、業界屈指の論文を目標にしろ','Ren — industry-top-paper-goal','Direction','hiroshi_boss'),
    mk('はい。研究契約の約款を確認しました','Yes — Research-contract-terms-check','Polite','ren_uni'),
    mk('蓮、学会から朗報があれば真っ先に報告しろ','Ren — conf-good-news-report-first','Direction','hiroshi_boss'),
    mk('はい。物的サンプルを増やします','Yes — Phys-sample-up','Earnest','ren_uni'),
    mk('蓮、図書館の司書に資料収集を頼め','Ren — lib-librarian-doc-collect-ask','Direction','hiroshi_boss'),
    mk('はい。共同研究を仕掛ける提案を持って行きます','Yes — Joint-research-trigger-prop','Earnest close','ren_uni'),
  ]},
  {id:'conv_09329',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、不正デイトレードの捜査もご対応ですね','Police illegal-daytrade-inv','Cooperative','kenji_office'),
    mk('警察、管轄圏内の犯罪に対応されますね','Police jurisdic-zone-crime','Cooperative','kenji_office'),
    mk('警察、当地区屈指の防犯協会と連携されますね','Police area-top-crime-prev-link','Cooperative','kenji_office'),
    mk('警察、保険約款の不正もご捜査ですね','Police ins-terms-fraud-inv','Cooperative','kenji_office'),
    mk('警察、解決事件の朗報を市民にもご共有ですね','Police case-solve-good-news-citizen','Cooperative','kenji_office'),
    mk('警察、物的証拠を厳格に保管されますね','Police phys-evid-strict-store','Cooperative','kenji_office'),
    mk('警察、図書館の司書とも連携して市民教育されますね','Police lib-librarian-link-edu','Cooperative','kenji_office'),
    mk('警察、おとり捜査を仕掛ける場合もあるんですね','Police sting-inv-trigger','Close','kenji_office'),
  ]},
  {id:'conv_09330',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、デイトレード文化に流されなかった','Dad — founding daytrade-culture-not-sway','Sage','hiroshi_elder'),
    mk('はい。お父さんは商圏内のお客様を一人一人覚えてらした','Yes — Dad market-zone-cust-each-remember','Commitment','hiroshi_boss'),
    mk('お父さん、業界屈指の経営者として尊敬された','Dad — industry-top-mgmt-respect','Wistful','hiroshi_elder'),
    mk('はい。お父さんは契約約款を細部まで読まれた','Yes — Dad contract-terms-detail-read','Reflective','hiroshi_boss'),
    mk('お父さん、社員に朗報を伝える時は嬉しそうだった','Dad — staff-good-news-glad','Wistful','hiroshi_elder'),
    mk('はい。お父さんは物的証拠を重んじた判断をされた','Yes — Dad phys-evid-imp-judg','Reflective','hiroshi_boss'),
    mk('お父さん、社内図書室と司書を大事にされたぞ','Dad — co-lib-librarian-cherish','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新規事業を仕掛ける勘所をお持ちでした','Yes — Dad new-biz-trigger-instinct','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09331',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、近代の激戦地の研究を論文で扱いましたね','Ren — mod-fierce-battlefield paper','Calm','asuka_teacher'),
    mk('はい、人口減少による地域の欠損を論文で扱いました','Yes — Pop-decline-area-loss paper','Earnest','ren_uni'),
    mk('蓮さん、直観に頼った判断の研究を論文で扱いましたね','Ren — intuit-judg-research paper','Reflective','asuka_teacher'),
    mk('はい、天災に備える社会システムを論文で扱いました','Yes — Disaster-prep-soc-sys paper','Earnest','ren_uni'),
    mk('幻覚症状を伴う精神疾患を論文で扱いましたね','Halluc-symp-psych paper','Engaged','asuka_teacher'),
    mk('はい、無期懲役と仮釈放の判例研究を論文で扱いました','Yes — Life-impr-parole paper','Earnest','ren_uni'),
    mk('蓮さん、社会の呪縛から解放される運動を論文で扱いましたね','Ren — soc-bind-release-mov paper','Reflective','asuka_teacher'),
    mk('はい、避妊普及の社会史を論文で扱いました','Yes — Contracep-spread-hist paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09332',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、激戦地の遺物の盗難を警察、捜査されてますね','Case fierce-battlefield-relic-theft police-inv','Reflective','ren_uni'),
    mk('警察、捜査資料に欠損がないか確認します','Police inv-doc-loss-check','Procedural','takeda_officer'),
    mk('本件、直観だけに頼らず物的証拠を重視されますね、警察','Case intuit-not-rely-phys-evid police','Reflective','ren_uni'),
    mk('警察、天災時の防犯対応も整備しております','Police disaster-crime-prev','Procedural','takeda_officer'),
    mk('本件、容疑者の幻覚症状を警察、医療と連携して確認されますね','Case suspect-halluc police-med-link','Reflective','ren_uni'),
    mk('警察、無期懲役判決事案も丁寧に対応します','Police life-impr-careful','Procedural','takeda_officer'),
    mk('本件、被害者の呪縛から解放するご支援を警察、なさってますね','Case victim-bind-release-supp police','Reflective','ren_uni'),
    mk('警察、避妊用品の不正流通も捜査します','Police contracep-illegal-dist-inv','Close','takeda_officer'),
  ]},
  {id:'conv_09333',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、近代の激戦地の研究を論文で扱いましたね','Sakura — fierce-battlefield paper','Calm','asuka_teacher'),
    mk('はい、人口減少による地域の欠損を論文で扱いました','Yes — Pop-decline-loss paper','Earnest teen','sakura_teen'),
    mk('直観に頼った判断の研究を論文で扱いましたね','Intuit-judg paper','Reflective','asuka_teacher'),
    mk('はい、天災に備える社会システムを論文で扱いました','Yes — Disaster-sys paper','Earnest','sakura_teen'),
    mk('幻覚症状を伴う精神疾患を論文で扱いましたね','Halluc-psych paper','Engaged','asuka_teacher'),
    mk('はい、無期懲役と仮釈放の判例を論文で扱いました','Yes — Life-impr paper','Earnest','sakura_teen'),
    mk('社会の呪縛から解放される運動を論文で扱いましたね','Soc-bind-release paper','Reflective','asuka_teacher'),
    mk('はい、避妊普及の社会史を論文で扱いました','Yes — Contracep paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09334',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、激戦地での野戦医療を医療チームで参照します','Ren — fierce-field-med med-team ref','Calm','saito_doctor'),
    mk('はい、欠損患部の再建外科を医療チームで担当します','Yes — Loss-recon-surg med-team','Patient','saito_doctor'),
    mk('臨床の直観を、貴院、データで裏付けされますね、先生','Clin-intuit-data-back your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、天災時の救急医療を医療チームで備えております','Yes — Disaster-emerg med-team prep','Patient','saito_doctor'),
    mk('幻覚を訴える患者さんへの治療を、貴院、慎重にされてますね、先生','Halluc-claim-patient-treat your-hosp careful, sensei','Curious','ren_uni'),
    mk('はい、無期療養の患者さんへの長期ケアを医療チームで担当します','Yes — Indef-recov-patient-care med-team','Patient','saito_doctor'),
    mk('心の呪縛から解放するセラピーを、貴院、なさってますね、先生','Heart-bind-release-therapy your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、避妊指導を医療チームで丁寧に行います','Yes — Contracep-guide med-team careful','Patient close','saito_doctor'),
  ]},
  {id:'conv_09335',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、競合との激戦区に新店舗を出すな','Our co — rival-fierce-zone-not-open','Crisp','hiroshi_boss'),
    mk('はい。在庫の欠損を防ぐ管理を強化します','Yes — Stock-loss-prev-strict','Methodical','kenji_office'),
    mk('当社、直観と分析の両方で判断しろ','Our co — intuit-anal-both-judg','Direction','hiroshi_boss'),
    mk('はい。天災時の事業継続計画を見直します','Yes — Disaster-BCP-review','Update','kenji_office'),
    mk('当社、社員に幻覚を見せるような誇大広告は出すな','Our co — staff-halluc-over-ad-not','Direction','hiroshi_boss'),
    mk('はい。無期限の契約は避けるようにします','Yes — Indef-contract-avoid','Update','kenji_office'),
    mk('当社、過去の失敗の呪縛から解放されるべきだ','Our co — past-fail-bind-release','Direction','hiroshi_boss'),
    mk('はい。社員の家族計画、避妊知識の福利も整備します','Yes — Staff-fam-plan-contracep-benefit','Close','kenji_office'),
  ]},
  {id:'conv_09336',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、新聞紙でお弁当を包んでお持ち帰りされたよ、メイちゃん','Aoi — cust-newspaper-bento-wrap Mei','Reflective','mei_romantic'),
    mk('葵、お子様、ナルニア物語の絵本を読んでらしたよ、メイちゃん','Aoi — child-Narnia-book-read Mei','Tender','aoi_barista'),
    mk('葵、お客様、新メニュー、極上の味だって褒めて下さったよ、メイちゃん','Aoi — cust-new-menu-premium-praised Mei','Pleased','mei_romantic'),
    mk('葵、お客様、お子様の旅立ちを祝う集まりされてたよ、メイちゃん','Aoi — cust-child-depart-celeb-meet Mei','Tender','aoi_barista'),
    mk('葵、お客様、お子様に母音の発音を教えてらしたよ、メイちゃん','Aoi — cust-child-vowel-pron-taught Mei','Reflective','mei_romantic'),
    mk('葵、お店の独自性、つまりアイデンティティーを大事にしたいね、メイちゃん','Aoi — store-uniq-ident-cherish Mei','Reflective','aoi_barista'),
    mk('葵、お客様、海辺の灯台のお話されてたよ、メイちゃん','Aoi — cust-sea-lighthouse-told Mei','Reflective','mei_romantic'),
    mk('葵、お店のロゴをピンク色にしたら可愛いね、メイちゃん','Aoi — store-logo-pink-cute Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_09337',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが新聞紙を畳んでお皿の代わりにされた','Gran — youth Dad-newspaper-fold-plate','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お孫様にナルニア国物語を読まれたわよね、あなた?','Yes — Grandpa-grandkid-Narnia-read, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが極上のお酒を振る舞われたぞ','Gran — youth Dad-premium-sake-treat','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様の旅立ちを涙で見送られたわよね、あなた?','Grandpa — grandkid-depart-tears-saw-off, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが孫に母音の発音を教えてらした','Gran — youth Dad-grandkid-vowel-taught','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご自身のアイデンティティーをしっかりお持ちでらしたわよね、あなた?','Grandpa — own-ident-solid, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと灯台のある町に旅をしたぞ','Gran — youth Dad-lighthouse-town-trip','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ピンク色のシャツを着てらした時もあったわよね、あなた?','Grandpa — youth-pink-shirt-wore, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09338',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、新聞紙でクラフト工作しましょうね','Sho — newspaper-craft-make','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、ナルニア国物語の絵本欲しい','Mei-sis — me Narnia-book-want','Eager child','sho_child'),
    mk('翔くん、メイ姉さんが極上のお茶を入れてくれたわ','Sho — Mei-sis-premium-tea-made','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんの旅立ちが寂しいよ','Mei-sis — me Dad-depart-lonely','Earnest child','sho_child'),
    mk('翔くん、母音の発音、ちゃんと言えるようになったわね','Sho — vowel-pron-able','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、ぼく自身のアイデンティティーを考えてるよ','Mei-sis — me self-ident-think','Reflective child','sho_child'),
    mk('翔くん、海の灯台を見に行きましょうね','Sho — sea-lighthouse-go','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、ピンク色のクレヨンが好きだよ','Mei-sis — me pink-crayon-like','Eager close','sho_child'),
  ]},
  {id:'conv_09339',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、新聞紙でゴミ箱作ったろ?','Riku — newspaper-trash-made?','Curious teen','sakura_teen'),
    mk('お前、ナルニア国物語の映画好きだろ?桜','You — Narnia-movie-like? Sakura','Curious','riku_teen'),
    mk('リク、お前ん家、極上のお米食べてんだろ?','Riku — your-home-premium-rice?','Curious','sakura_teen'),
    mk('お前、卒業の旅立ち緊張するな、桜','You — grad-depart-nervous Sakura','Reflective','riku_teen'),
    mk('リク、お前、英語で母音の発音苦手だろ?','Riku — Eng-vowel-bad?','Curious','sakura_teen'),
    mk('お前、自分のアイデンティティー悩んでんだろ?桜','You — self-ident-worry? Sakura','Curious','riku_teen'),
    mk('リク、お前、家族で灯台のある岬行ったろ?','Riku — fam-lighthouse-cape?','Curious','sakura_teen'),
    mk('お前、ピンク色のシャツ買ったろ?桜','You — pink-shirt-bought? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09340',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、新聞紙の山を整理してリサイクルに出しましょう','Sho — newspaper-pile-recycle','Direction','yumiko_mom'),
    mk('ママ、ぼく、ナルニア物語の続きが読みたいよ','Mom — me Narnia-cont-read-want','Eager child','sho_child'),
    mk('翔くん、お父さんが極上のステーキを焼いて下さったわ','Sho — Dad-premium-steak-cook','Pleased','yumiko_mom'),
    mk('ママ、ぼく、メイ姉さんの旅立ちが嬉しいやら寂しいやら','Mom — me Mei-sis-depart-glad-lonely','Reflective child','sho_child'),
    mk('翔くん、お父さんが英語の母音発音を教えて下さったわ','Sho — Dad-Eng-vowel-taught','Reflective','yumiko_mom'),
    mk('ママ、ぼく、家族のアイデンティティーを大事にしたい','Mom — me fam-ident-cherish-want','Earnest child','sho_child'),
    mk('翔くん、お父さんと灯台のある半島へ行きましょうね','Sho — Dad-lighthouse-cape-go','Tender','yumiko_mom'),
    mk('ママ、ぼく、お祖母ちゃんがピンク色のお花を植えて下さったよ','Mom — me Grandma-pink-flower-planted','Eager close','sho_child'),
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

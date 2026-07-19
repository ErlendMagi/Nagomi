import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_295 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['溝','艇','享受','突如','離脱','叩く','カラス','カッコイイ']
const B_T = ['地盤','町長','奨学','実名','前編','メーター','パッチ','ならびに']
const C_T = ['宮城','大島','荒川','金子','今井','市川','片山','熊谷']
const D_T = ['岡崎','星野','ウィリアム','デイヴィッド','ゲイツ','蘭','是非とも','アタック']

const data = [
  // A
  {id:'conv_05861',cluster:'A',ambient:'park_distant_birds',cast:['sho_child','riku_teen'],targets:A_T,scenario:'A child and his teen cousin chat at the park',lines:[
    {speaker:'sho_child',jp:'ねえ、池の溝に、艇が浮かんでるよ。',en:"Hey, a little boat's floating in the pond gutter.",style:'Curious child.'},
    {speaker:'riku_teen',jp:'お、誰かが置き忘れたかな。自然を享受してるね。',en:"Oh, someone left it behind? Enjoying nature.",style:'Casual.'},
    {speaker:'sho_child',jp:'突如、カラスが飛んできてびっくり!',en:"Suddenly a crow flew over — startled me!",style:'Excited.'},
    {speaker:'riku_teen',jp:'落ち着け。突然の音、心拍数が離脱しそうになるよな。',en:"Calm down. Sudden sounds — heart rate almost detaches.",style:'Wry.'},
    {speaker:'sho_child',jp:'手を叩くと、また逃げちゃう?',en:"Clap and they fly off again?",style:'Curious.'},
    {speaker:'riku_teen',jp:'うん。新しい靴、カッコイイね。',en:"Yes. Cool new shoes, by the way.",style:'Warm close.'},
  ]},
  {id:'conv_05862',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat on a walk home',lines:[
    {speaker:'sakura_teen',jp:'道の溝、また泥で詰まってる。',en:"Roadside drain — clogged with mud again.",style:'Casual.'},
    {speaker:'riku_teen',jp:'うん。橋の下に、競技用の艇が置いてあったよ。',en:"Yeah. Race-style scull stowed under the bridge.",style:'Probe.'},
    {speaker:'sakura_teen',jp:'夕焼け、いい景色。秋を享受してる感じ。',en:"Sunset, lovely scene. Savoring autumn.",style:'Soft.'},
    {speaker:'riku_teen',jp:'昨夜、突如雨降って、傘なくて困った。',en:"Last night, sudden rain — no umbrella, troubled.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'最寄り駅、急行が離脱したから、遅れたの。',en:"Express decoupled at the local station — delay.",style:'Subdued.'},
    {speaker:'riku_teen',jp:'肩を叩くと、まだ筋肉痛?',en:"Tap your shoulder — still sore?",style:'Wry.'},
    {speaker:'sakura_teen',jp:'カラスが鳴いてる。今日のジャケット、カッコイイね。',en:"Crow's cawing. Today's jacket — cool.",style:'Cheerful close.'},
  ]},
  {id:'conv_05863',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat after a long day',lines:[
    {speaker:'sho_child',jp:'ママ、お風呂の溝、髪の毛、つまるよね。',en:"Mom, the bath drain gets clogged with hair.",style:'Casual child.'},
    {speaker:'yumiko_mom',jp:'うん、こまめに掃除しようね。古い艇のおもちゃ、片付けようか。',en:"Yes, clean regularly. Tidy the old boat toys?",style:'Warm.'},
    {speaker:'sho_child',jp:'夜の音、楽しく享受する派なんだ、僕。',en:"Night sounds — I enjoy them.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'外で突如カラスが鳴くと、私はびっくりするわ。',en:"Sudden crow caw outside startles me.",style:'Soft.'},
    {speaker:'sho_child',jp:'お風呂で背中叩いてくれる?',en:"Pat my back in the bath?",style:'Sweet.'},
    {speaker:'yumiko_mom',jp:'もちろん。明日着る服、新しくてカッコイイね。',en:"Of course. Your new clothes for tomorrow — cool.",style:'Warm close.'},
  ]},
  {id:'conv_05864',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat over evening coffee',lines:[
    {speaker:'mei_romantic',jp:'カフェの裏の溝、雨水たまってた。',en:"Behind the cafe — rainwater pooled in the drain.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'公園の手こぎ艇、初めて乗ってみたいんだ。',en:"Park rowboats — wanna try someday.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'休日を享受するの、最近、苦手で。',en:"Lately I struggle to enjoy days off.",style:'Vulnerable.'},
    {speaker:'aoi_barista',jp:'仕事が突如忙しいと、休めないよね。',en:"Sudden busy work makes resting hard.",style:'Gentle.'},
    {speaker:'mei_romantic',jp:'昨日は、SNSを離脱して、本読んでた。',en:"Yesterday I logged off SNS, read a book.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'肩、叩いてあげようか。',en:"Tap your shoulders?",style:'Warm.'},
    {speaker:'mei_romantic',jp:'うん。カラスが店先に来る時間ね、もう。',en:"Yes. Almost crow-at-doorstep hour.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'髪型、新しくしたの?カッコイイ。',en:"New hair? Cool!",style:'Bright close.'},
  ]},
  {id:'conv_05865',cluster:'A',ambient:'street_quiet_distant',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple walks on a quiet street',lines:[
    {speaker:'hiroshi_elder',jp:'道路の溝、最近、整備されたな。',en:"Road drain — recently maintained.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'橋の下、競艇用の艇が並んでたわよ。',en:"Under the bridge, race boats lined up.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'静かな夕暮れ、よく享受するな、二人で。',en:"Quiet evenings — we enjoy them together.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'隣の犬、突如吠えてびっくりしたわ。',en:"Neighbor's dog suddenly barked — startled.",style:'Wry.'},
    {speaker:'hiroshi_elder',jp:'孫が、ゲームから離脱して、外で遊ぶようになった。',en:"Grandkid logged off games, plays outside.",style:'Warm.'},
    {speaker:'sachiko_grandma',jp:'肩、叩いてくれる?こってる。',en:"Tap my shoulder? Stiff.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'カラスが集まってる、夕方の合図かな。',en:"Crows gathering — sign of dusk?",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'あなたの帽子、いつまでもカッコイイわよ。',en:"Your hat — always cool.",style:'Warm close.'},
  ]},

  // B
  {id:'conv_05866',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews a CSR / regional report',lines:[
    {speaker:'hiroshi_boss',jp:'地盤の強化、地元町長との会合、設定しろ。',en:"Strengthen base — set the meeting with the local mayor.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。奨学金事業、報告書の前編と後編に分けます。',en:"Yes. Scholarship project — split report into earlier and later parts.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'記者懇談、実名公表が前提だ。',en:"Press chat — real names assumed.",style:'Direction.'},
    {speaker:'kenji_office',jp:'計測機器のメーター、ならびに最新パッチ、現場に展開済みです。',en:"Measurement meters and latest patches — deployed on site.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'よし、進めよう。',en:"Good — proceed.",style:'Close.'},
  ]},
  {id:'conv_05867',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers prep a public-relations brief',lines:[
    {speaker:'yuki_office',jp:'広報文の地盤固め、町長コメントは取れた?',en:"PR foundation — got the mayor's comment?",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。奨学金制度、実名で受給者紹介、了承済みです。',en:"Yes. Scholarship — beneficiaries named with consent.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'動画の前編、編集に出した?',en:"Earlier-part video — sent to editors?",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。流量メーター、ならびに新パッチ、現場確認済み。',en:"Yes. Flow-meter and new patch — field-verified.",style:'Update.'},
    {speaker:'yuki_office',jp:'準備、抜かりなく。',en:"Prep — flawless.",style:'Close.'},
  ]},
  {id:'conv_05868',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern on community relations',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、地盤を持つ企業、地域町長との関係が肝だ。',en:"Ren, firms with roots — mayor-relations are key.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'奨学金や、地元雇用、実名で評価される取り組みですね。',en:"Scholarships and local hiring — efforts judged by named beneficiaries.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'年次報告の前編、君に任せてみるか。',en:"Annual-report earlier part — I might assign you.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい!電気メーター、ならびに環境関連のパッチ運用も、勉強します。',en:"Yes! Electric meters and environmental patches — I'll study.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'視察、来週。',en:"Site visit — next week.",style:'Close.'},
  ]},
  {id:'conv_05869',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs an exec about local cooperation',lines:[
    {speaker:'takeda_officer',jp:'御社の地盤強化、町長からも、感謝の声が届いています。',en:"Your base-strengthening — mayor's gratitude has reached us.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。地元の奨学金、実名で報じられて、評判です。',en:"Yes. Local scholarship — named press coverage, well received.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'今後の防犯講習、前編と後編、二回に分けます。',en:"Future safety lessons — split into earlier and later, two sessions.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。メーター監視、ならびにパッチ更新、警察と歩調を合わせます。',en:"Yes. Meter monitoring and patch updates — paced with police.",style:'Update.'},
    {speaker:'takeda_officer',jp:'お願いします。',en:"Please proceed.",style:'Close.'},
  ]},
  {id:'conv_05870',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec advises on community relations',lines:[
    {speaker:'hiroshi_elder',jp:'地盤、人柄で築くものだ。',en:"A base is built on character.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。町長との関係、信頼で支えています。',en:"Yes. Mayor-relations — sustained by trust.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'奨学金、続けろ。実名で語る卒業生、企業の宝だ。',en:"Continue scholarships. Named alumni are a corporate treasure.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。報告の前編、編集中です。',en:"Yes. Earlier-part report being edited.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'計測メーターの精度、ならびにシステムパッチの管理、油断するな。',en:"Meter accuracy and system-patch control — don't slack.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_05871',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs a reporter on a regional case',lines:[
    {speaker:'takeda_officer',jp:'宮城県内の事件、捜査が大島町まで広がっています。',en:"Miyagi-prefecture case — search reaches Oshima town.",style:'Calm.'},
    {speaker:'ren_uni',jp:'荒川沿いに、有力な目撃情報があったんですよね。',en:"Eyewitnesses surfaced along Arakawa, right?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。被害者の金子さん、保護を続けています。',en:"Yes. Victim Kaneko-san — under continued protection.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'今井被疑者、市川市内に居住していたんですね。',en:"Suspect Imai resided in Ichikawa, then.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。共犯と疑われる片山も、熊谷で身柄確保しました。',en:"Yes. Suspected accomplice Katayama — apprehended in Kumagaya.",style:'Informative close.'},
  ]},
  {id:'conv_05872',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses a regional study with a student',lines:[
    {speaker:'asuka_teacher',jp:'論文、宮城の海岸線と大島の人口動態、対比が興味深いですね。',en:"Paper — Miyagi coastline vs. Oshima demographics, intriguing contrast.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。荒川流域の都市と、金子先生の地方論、参考にしました。',en:"Yes. Arakawa basin cities and Prof. Kaneko's regional theory referenced.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'今井氏のフィールドワーク、市川での住民調査、丁寧ですね。',en:"Imai-sensei's fieldwork — Ichikawa resident surveys are careful.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'片山先生の比較研究、熊谷の事例まで及んでいます。',en:"Katayama-sensei's comparison reaches Kumagaya cases.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'地域別の解釈、丁寧に。',en:"Region-by-region interpretation, carefully.",style:'Reflective close.'},
  ]},
  {id:'conv_05873',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews regional sales',lines:[
    {speaker:'hiroshi_boss',jp:'宮城拠点、大島支店、業績ともに堅調か。',en:"Miyagi base, Oshima branch — both solid?",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。荒川営業所、金子さんが新所長で実績を出しています。',en:"Yes. Arakawa office — Kaneko-san as new head delivers results.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'今井さんの市川支店、市場開拓が進んでる。',en:"Imai-san's Ichikawa branch — market development progressing.",style:'Direction.'},
    {speaker:'kenji_office',jp:'片山さんも、熊谷支店で粘り強い営業を展開しています。',en:"Katayama-san too — tenacious sales out of Kumagaya.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'よし、頑張れ。',en:"Good — keep at it.",style:'Close.'},
  ]},
  {id:'conv_05874',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher and a teen review a current-events project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、地方再生のテーマ、宮城の事例から始まる構成、いいですね。',en:"Sakura, the regional-revival theme starting from Miyagi cases is good.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。大島の漁業協同組合、丁寧に取材しました。',en:"Yes. Carefully covered Oshima's fishing co-op.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'荒川流域の中小企業、金子さんが代表的なお話を聞かせてくれましたね。',en:"Arakawa-basin SMEs — Kaneko-san shared exemplary tales.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'今井家具店、市川での経営、家族の物語も入れました。',en:"Imai Furniture in Ichikawa — included a family story.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'片山地区、熊谷の若手起業家、最終章で取り上げます。',en:"Katayama district, young Kumagaya entrepreneurs — final chapter.",style:'Reflective close.'},
  ]},
  {id:'conv_05875',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses regional medicine with a reporter',lines:[
    {speaker:'saito_doctor',jp:'地域医療、宮城と大島で、人員配置に差があります。',en:"Regional medicine — staffing differs between Miyagi and Oshima.",style:'Calm.'},
    {speaker:'ren_uni',jp:'荒川沿いの病院、金子先生が中核を担っているそうですね。',en:"Arakawa hospital — Prof. Kaneko reportedly central.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。今井先生は、市川の小児科で評判です。',en:"Yes. Imai-sensei is well regarded in Ichikawa pediatrics.",style:'Patient.'},
    {speaker:'ren_uni',jp:'片山先生も、熊谷の高齢者医療で長年活躍。',en:"Katayama-sensei — long active in Kumagaya elderly care.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'地域連携、丁寧に続けます。',en:"Regional cooperation — carefully sustained.",style:'Reflective close.'},
  ]},

  // D
  {id:'conv_05876',cluster:'D',ambient:'stadium_distant_crowd',cast:['riku_teen','sakura_teen'],targets:D_T,scenario:'Two teens watch a sports event',lines:[
    {speaker:'riku_teen',jp:'岡崎選手、今日も先発だ。',en:"Okazaki — starting today too.",style:'Excited teen.'},
    {speaker:'sakura_teen',jp:'星野コーチの戦術、相手チームを翻弄してる。',en:"Coach Hoshino's tactics confuse the opposing team.",style:'Animated.'},
    {speaker:'riku_teen',jp:'相手のキャプテン、ウィリアム選手、強いよな。',en:"The opposing captain, William, is strong.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'デイヴィッド選手、ベンチから指示を送ってる。',en:"David giving bench instructions.",style:'Probe.'},
    {speaker:'riku_teen',jp:'本場の解説、ゲイツ氏が務めてるって、ラジオで。',en:"Authentic commentary — by Mr. Gates on the radio.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'休憩で、蘭の花が飾られたVIP席、見える?',en:"During break — VIP seats with orchids, can you see?",style:'Curious.'},
    {speaker:'riku_teen',jp:'是非とも、後半は逆転してほしい。',en:"Definitely want a second-half comeback.",style:'Earnest.'},
    {speaker:'sakura_teen',jp:'ラスト10分、アタックを集中させようよ。',en:"Last 10 minutes — concentrate the attack.",style:'Animated close.'},
  ]},
  {id:'conv_05877',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends discuss a film about a chef',lines:[
    {speaker:'mei_romantic',jp:'昨夜の映画、岡崎シェフの伝記、感動的だった。',en:"Last night's film — Chef Okazaki's biopic, moving.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'共演の星野女優、目力すごいよね。',en:"Co-star Hoshino — eyes are intense.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'監督はイギリス人のウィリアムさん、味のある演出。',en:"Director — Brit William, flavorful direction.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'撮影助手のデイヴィッドさん、海外で評価されてる。',en:"Camera-assist David — internationally praised.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'プロデューサーのゲイツ氏、独立系の名門。',en:"Producer Gates — indie-prestige.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'劇中、和食店に飾られた蘭、印象的だった。',en:"In-film orchids at the washoku spot — striking.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'続編、是非とも観たい。',en:"Definitely want the sequel.",style:'Excited.'},
    {speaker:'aoi_barista',jp:'予告で、フィナーレのアタック演出、エモかったよね。',en:"Trailer's finale attack-direction was so emotional.",style:'Bright close.'},
  ]},
  {id:'conv_05878',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher and student discuss a documentary on innovation',lines:[
    {speaker:'asuka_teacher',jp:'昨夜のドキュメンタリー、岡崎研究所の発展史、見応えありましたね。',en:"Last night's doc on Okazaki Institute history was striking.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。創設者の星野氏、若い頃の苦労、丁寧に描かれていました。',en:"Yes. Founder Hoshino's youthful struggle was carefully depicted.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'共同研究者のウィリアム博士、デイヴィッド博士、国際チームの象徴ですね。',en:"Co-researchers Dr. William and Dr. David symbolize the international team.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'スポンサーにゲイツ財団が入っているのも、説得力あります。',en:"The Gates Foundation as sponsor adds weight.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'ラボに飾られた蘭、研究室文化の象徴でもありました。',en:"Lab orchids — symbol of research culture too.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'是非とも、続編の特集を期待します。',en:"Definitely hoping for a follow-up feature.",style:'Eager.'},
    {speaker:'asuka_teacher',jp:'公開講座のアタックも、楽しみですね。',en:"Public-lecture push — also exciting.",style:'Warm close.'},
  ]},
  {id:'conv_05879',cluster:'D',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:D_T,scenario:'A boss briefs an intern on an international meeting',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、海外プロジェクト、岡崎工場の視察から始める。',en:"Ren, intl project — start with Okazaki plant tour.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。星野部長、現場で待っているそうですね。',en:"Yes. Director Hoshino awaits on site.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'夜は、ウィリアム氏、デイヴィッド氏と会食。',en:"Evening — dinner with William and David.",style:'Direction.'},
    {speaker:'ren_uni',jp:'ゲイツ氏の財団からも、視察団が来ますか。',en:"Will the Gates Foundation send an inspection team too?",style:'Curious.'},
    {speaker:'hiroshi_boss',jp:'うん。受付フラワーアレンジ、蘭が映える季節だ。',en:"Yes. Reception florals — orchid season suits.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'是非とも、議事録取らせていただきます。',en:"By all means, let me minute the meeting.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'頼む。最終アタックのプレゼン、君も準備しろ。',en:"Please. Final-push presentation — prep too.",style:'Close.'},
  ]},
  {id:'conv_05880',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan a high-end collab',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、岡崎ホテルとのコラボ、進めようか。',en:"Aoi-san, push the Okazaki Hotel collab?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。星野リゾートとも、企画話、進んでます。',en:"Yes. Hoshino Resort plans also moving.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'ウィリアム氏、デイヴィッド氏、ふたりとも世界的バリスタ。',en:"William, David — both world-class baristas.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'ゲイツ財団系のカフェ運営とも、提携検討中ですか。',en:"Considering tie-ups with Gates-Foundation-affiliated cafes?",style:'Probe.'},
    {speaker:'daichi_kansai',jp:'蘭をテーマにした器、限定で出さへんか。',en:"Orchid-themed dishware, limited release?",style:'Bright.'},
    {speaker:'aoi_barista',jp:'是非とも、季節フェアに合わせたいですね。',en:"Definitely want it timed with the seasonal fair.",style:'Animated.'},
    {speaker:'daichi_kansai',jp:'最終フェーズのアタック、準備、よろしくな。',en:"Final-phase push prep — over to you.",style:'Warm close.'},
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

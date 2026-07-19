import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_317 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['ふざけ','こだわら','街角','傾ける','間に合っ','ちらっと','町中','見回し']
const B_T = ['商談','延び','挑ん','ショートカット','変われ','つなげる','折り紙','乗り継ぎ']
const C_T = ['破り','亡くし','狙わ','荒らし','号泣','繋がら','縫っ','映り']
const D_T = ['ウィスキー','俵','ツル','夏期','サクサク','消しゴム','森本','くるみ']

const data = [
  // A
  {id:'conv_06301',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'昨日、休み時間、皆でふざけて笑った。',en:"Yesterday — breaks, fooled around laughing.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。細かい点に、こだわらない方が、楽だよ。',en:"Yeah. Not fixating on minor points — easier.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'駅前の街角、新しいカフェ、できた。',en:"Station corner — new cafe opened.",style:'Animated.'},
    {speaker:'riku_teen',jp:'頭、横に傾けるくせ、つい出る。',en:"Tilting head sideways — habit slips out.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'今日、ぎりぎり間に合った、電車。',en:"Today — barely caught the train.",style:'Subdued.'},
    {speaker:'riku_teen',jp:'隣の教室、ちらっと覗いたら、騒がしかった。',en:"Next class — peeked, noisy.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'町中、お祭りの準備、賑やか。',en:"Town center — fest prep, lively.",style:'Bright.'},
    {speaker:'riku_teen',jp:'迷子の犬を見回しながら、探した。',en:"Lost dog — looked around while searching.",style:'Warm close.'},
  ]},
  {id:'conv_06302',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'昨夜のパーティー、皆でふざけて、楽しかった。',en:"Last night's party — fooled around, fun.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。細かいルール、こだわらなくていい場、最高。',en:"Yeah. No-rule-fixation place — best.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'駅の街角で、偶然、友達に会えた。',en:"Station corner — happened to meet a friend.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'頭、お辞儀の時、深く傾けるよう、心がけてる。',en:"Bowing — tilt deep, mindful.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'予約に、ぎりぎり間に合った、ホッ。',en:"Booking — barely caught, phew.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'カフェの窓から、ちらっと、お客さんの様子、見える。',en:"Cafe window — slightly glimpse customers.",style:'Curious.'},
    {speaker:'mei_romantic',jp:'町中の道、馴染んできた。',en:"Town center streets — familiar.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'店内、見回しながら、不審者、警戒している。',en:"Inside store — looking around, suspicious-alert.",style:'Practical close.'},
  ]},
  {id:'conv_06303',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お父さん、ふざけて、踊ってた。',en:"Mom — Dad fooled around, dancing.",style:'Animated child.'},
    {speaker:'yumiko_mom',jp:'ふふ。細かい指示にこだわらないお父さん、頼もしいね。',en:"Hehe. Non-fixating Dad — reliable.",style:'Warm.'},
    {speaker:'sho_child',jp:'街角のたこ焼き屋、寄って帰ろう。',en:"Corner takoyaki — stop on way back.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お顔、ライトの方に傾けるよう、ね、写真。',en:"Tilt face toward light — photo.",style:'Tender.'},
    {speaker:'sho_child',jp:'今日、運動会、ぎりぎり間に合った。',en:"Today — sports day, barely made it.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'お父さんの帰りを、玄関でちらっと、確認してね。',en:"Dad's return — slight check at entrance.",style:'Soft.'},
    {speaker:'sho_child',jp:'町中で、迷子、お父さん、助けてあげたんだ。',en:"In town — Dad helped a lost kid.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'家中見回しながら、忘れ物、ない?',en:"Looking around the house — any forgots?",style:'Practical close.'},
  ]},
  {id:'conv_06304',cluster:'A',ambient:'park_distant_birds',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple walks',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、ふざけて、お前の写真、たくさん撮ったな。',en:"In youth — fooled around, took many photos of you.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。細かいことにこだわらない人だったわよ、若い頃のあなた。',en:"Yes. Non-fixating you in youth.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'近所の街角、変わったな。',en:"Local corners — changed.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'写真、首を傾けるポーズ、お気に入りだったね。',en:"Photos — tilted-head pose, favorite.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'結婚式、何とか間に合った、覚えてる?',en:"Wedding — barely made; remember?",style:'Soft.'},
    {speaker:'sachiko_grandma',jp:'玄関、ちらっと、覗くだけで、雰囲気変わるね。',en:"Entrance — slight peek changes vibe.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'町中の景色、若い頃と全然違うな。',en:"Town-center scene — totally different from youth.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お庭、見回しながら、二人で歩きましょう。',en:"Garden — looking around, walk together.",style:'Warm close.'},
  ]},
  {id:'conv_06305',cluster:'A',ambient:'cafe_quiet_chatter',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai and a teen chat',lines:[
    {speaker:'ren_uni',jp:'桜、ゼミで、たまにはふざける時間、必要だ。',en:"Sakura — seminars, fooling-around time needed sometimes.",style:'Easy senpai.'},
    {speaker:'sakura_teen',jp:'はい。形式にこだわらないで、楽しみたいです。',en:"Yes. Without form-fixation — want fun.",style:'Earnest teen.'},
    {speaker:'ren_uni',jp:'校門の街角、待ち合わせ場所、覚えてるよな。',en:"Gate corner — meeting spot, remember?",style:'Casual.'},
    {speaker:'sakura_teen',jp:'はい。話を聞く時、頭を傾ける癖、あります。',en:"Yes. Listening — head-tilt habit.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'発表、なんとか間に合ったな、お互い。',en:"Pres — both barely made.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'先輩、ちらっと、原稿、確認してください。',en:"Senpai — slight script-check please.",style:'Polite.'},
    {speaker:'ren_uni',jp:'町中、夏祭り、賑やかになるな。',en:"Town center — summer fest gets lively.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'発表会場、見回しながら、緊張しています。',en:"Pres-venue — looking around, nervous.",style:'Vulnerable close.'},
  ]},

  // B
  {id:'conv_06306',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'商談、来週、設定だ。',en:"Negotiation — set next week.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。納期、少し延びました。',en:"Yes. Deadline — slightly extended.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'若手、難題に挑んだ姿勢、評価したい。',en:"Youth — hard-task-tackling stance, praise.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。業務、ショートカットで効率化中です。',en:"Yes. Ops — shortcut-efficiency.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'時代が変われば、慣行も変える。',en:"Era changes — customs too.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。海外拠点、つなげる体制、整えました。',en:"Yes. Overseas-base linkage prepared.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'お客様へのお土産、折り紙の鶴、好評だった。',en:"Customer souvenir — origami crane, well-received.",style:'Warm.'},
    {speaker:'kenji_office',jp:'海外出張、乗り継ぎ便、急がせます。',en:"Overseas travel — transfer flights, rush.",style:'Close.'},
  ]},
  {id:'conv_06307',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss strategy',lines:[
    {speaker:'yuki_office',jp:'今期の商談、件数、伸びているね。',en:"This term's negotiations — count rising.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。期限、少し延びましたが、対応可能です。',en:"Yes. Deadline slightly extended, handleable.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'部下、難プロジェクトに挑んでくれた。',en:"Junior tackled hard project.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。ITで、ショートカット可能な箇所、見直しました。',en:"Yes. IT — shortcut-possible spots, reviewed.",style:'Bright.'},
    {speaker:'yuki_office',jp:'業界が変われば、戦略も変えよう。',en:"Industry shifts — change strategy too.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。複数部署をつなげる役割、若手に任せます。',en:"Yes. Cross-section bridging — leave to youth.",style:'Update.'},
    {speaker:'yuki_office',jp:'記念品、折り紙の作品、社内で展示しよう。',en:"Souvenirs — origami works, in-house display.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。海外社員、乗り継ぎの予定、調整します。',en:"Yes. Overseas-staff transfer schedule — adjust.",style:'Close.'},
  ]},
  {id:'conv_06308',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、商談、若いうちに、見学経験、しろ。',en:"Ren — observe negotiations young.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。期限が延びた案件、勉強になります。',en:"Yes. Extended-deadline cases — instructive.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'難題に挑んだ経験、自信に繋げろ。',en:"Hard-task-tackling — connect to confidence.",style:'Direction.'},
    {speaker:'ren_uni',jp:'ITのショートカット、若手から学ぶことも多いです。',en:"IT shortcuts — youth-learn too.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'環境が変われば、自分も変わる。',en:"Env shifts — self too.",style:'Direction.'},
    {speaker:'ren_uni',jp:'業界人をつなげる橋渡し、目指したいです。',en:"Industry-bridge — aim.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'お客様への折り紙、企業の温かさ、伝わるな。',en:"Origami for customers — firm-warmth conveys.",style:'Warm.'},
    {speaker:'ren_uni',jp:'海外出張時、乗り継ぎ、注意します。',en:"Overseas — transfer, careful.",style:'Polite close.'},
  ]},
  {id:'conv_06309',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on coordination',lines:[
    {speaker:'takeda_officer',jp:'警察の商談的な会合、近年、増えています。',en:"Police-side negotiation-style meetings — rising.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。御社との連携、延びた期間、活用したいです。',en:"Yes. Linkage with your firm — extended-period leveraged.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'難題に挑む姿勢、若手警官、頼もしいです。',en:"Hard-task-tackling stance — young officers, reliable.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。情報共有のショートカット、整えます。',en:"Yes. Info-sharing shortcut — prepare.",style:'Update.'},
    {speaker:'takeda_officer',jp:'社会が変われば、警察も変わります。',en:"Society shifts — police too.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。地域とつなげる活動、引き続き協力します。',en:"Yes. Community-bridging activities — continue cooperation.",style:'Commitment.'},
    {speaker:'takeda_officer',jp:'記念に、折り紙の警察キャラ、配ったこと、あります。',en:"For commemoration — origami police mascots, distributed.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。出張時、乗り継ぎ、警察情報も共有します。',en:"Yes. Travel — transfer info shared with police.",style:'Close.'},
  ]},
  {id:'conv_06310',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'商談、若い頃、何百件と経験した。',en:"Negotiations — hundreds in youth.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。納期が延びる案件、後輩に経験させたいです。',en:"Yes. Extended-deadline — let juniors experience.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'難題に挑んだ者、組織の柱になる。',en:"Hard-task-takers — org pillars.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'ショートカットで、若手の創意工夫、引き出します。',en:"Shortcuts — draw out youth creativity.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'時代が変われば、決断も変わる。',en:"Era shifts — decisions too.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'国際社会とつなげる人材、育てます。',en:"Internationally-bridging talent — raise.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お客様への折り紙、心遣い、忘れるな。',en:"Origami for customers — care, don't forget.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。乗り継ぎの長旅、若手に背負わせます。',en:"Yes. Long transfer trips — let youth carry.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06311',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs about cases',lines:[
    {speaker:'takeda_officer',jp:'容疑者、ルールを破り、駅を出ようとしたようです。',en:"Suspect — broke rules, tried to leave station.",style:'Calm.'},
    {speaker:'ren_uni',jp:'被害者の家族、亡くした方、ケア、必要ですね。',en:"Victim families — bereaved, care needed.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。被害者が狙われた経緯、検証中です。',en:"Yes. Targeted-victim background — verifying.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'家を荒らされた被害、ショックですよね。',en:"Burglarized-home damage — shocking.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。号泣する被害者、専門カウンセラーに繋ぎました。',en:"Yes. Crying-aloud victims — linked to specialist.",style:'Informative.'},
    {speaker:'ren_uni',jp:'警察、市民と繋がらない時、対応、難しいですね。',en:"When citizens unconnected — police response, hard.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。証拠を縫って集める作業、地道です。',en:"Yes. Stitching-evidence work — plodding.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'防犯カメラに映り込んだ証拠、決め手ですね。',en:"Camera-captured evidence — decisive.",style:'Curious close.'},
  ]},
  {id:'conv_06312',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses a paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、伝統を破り、新理論を提唱した部分、評価できます。',en:"Paper — tradition-breaking new theory, praised.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。家族を亡くした調査対象者、丁寧に扱いました。',en:"Yes. Bereaved subjects — carefully handled.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'弱者が狙われる構造、別章で論じましたね。',en:"Weak-targeted structure — separate chapter.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'過去の研究を荒らした不正、批判的に取り上げました。',en:"Past-research-destroying misconduct — critically covered.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'号泣するシーン、被災者の声、印象的でした。',en:"Crying-aloud scenes — victim voices, striking.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。地域と繋がらない世代、増えていますね。',en:"Yes. Community-disconnected generation — rising.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'伝統を縫って残す保護活動、章末で論じました。',en:"Stitch-preserving traditions — chapter end.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'メディアに映り込む形で、社会の関心、集めていきたいです。',en:"Via media exposure — gather social attention.",style:'Earnest close.'},
  ]},
  {id:'conv_06313',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical issues',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、治療規定を破り、独自に動いた医師、批判受けました。',en:"Ren — protocol-breaking solo-acting doctor — criticized.",style:'Calm.'},
    {speaker:'ren_uni',jp:'家族を亡くした患者、心理ケア、ありますか。',en:"Bereaved patients — psych care?",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。慢性病で狙われる治験対象、増えています。',en:"Yes. Chronic-disease-targeted trials — rising.",style:'Patient.'},
    {speaker:'ren_uni',jp:'病院荒らしの被害、近年、報じられました。',en:"Hospital-burglarized harm — recently reported.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。家族の号泣、現場で支える看護師、頼もしいです。',en:"Yes. Crying-aloud families — supporting nurses, reliable.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医療と地域、繋がらない地域、課題ですね。',en:"Medicine-community-disconnected areas — challenge.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'手術跡を縫って閉じる作業、丁寧に。',en:"Stitching surgical sites — careful.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'カメラに映り込んだ手元、教材になりますね。',en:"Camera-captured hands — educational.",style:'Curious close.'},
  ]},
  {id:'conv_06314',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews a case',lines:[
    {speaker:'hiroshi_boss',jp:'業界の慣行を破り、新規参入、果たすぞ。',en:"Industry-custom-breaking entry — achieve.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。創業者を亡くした企業、再建中です。',en:"Yes. Founder-bereaved firms — rebuilding.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'競合に狙われる商品、特許で守れ。',en:"Targeted products — patent-protect.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。倉庫を荒らされた事案、警察と連携します。',en:"Yes. Burglarized-warehouse cases — police-link.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'号泣する社員、心理面のケア、忘れるな。',en:"Crying-aloud staff — psych care, don't forget.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。海外と繋がらない部署、IT支援、入れます。',en:"Yes. Overseas-unconnected sections — IT support added.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'プロジェクトを縫って組み立てる手腕、評価する。',en:"Stitching-assembling project skill — praise.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。メディアに映り込む形で、ブランド、強化します。',en:"Yes. Media-exposed form — strengthen brand.",style:'Close.'},
  ]},
  {id:'conv_06315',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、規定を破った例、慎重に扱いましたね。',en:"Sakura — rule-breaking cases, careful.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。家族を亡くした取材対象者、敬意持って書きました。',en:"Yes. Bereaved subjects — respectfully written.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'弱者が狙われる構造、章として独立させましたね。',en:"Weak-targeted structure — independent chapter.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。被害地域を荒らした行為、批判しました。',en:"Yes. Damage-region-destroying acts — criticized.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'号泣する場面、感情に流されない記述、心がけましたか。',en:"Crying-aloud scenes — emotion-not-swept writing?",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。地域と繋がらない人々の声、章末で扱いました。',en:"Yes. Community-disconnected voices — chapter end.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'歴史的事実を縫って繋ぐ構成、興味深いですね。',en:"Stitching-historical-fact composition — intriguing.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'カメラに映り込む形で、伝えていきます。',en:"Camera-exposed form — convey.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06316',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'ウィスキー、年代物、頂きました。',en:"Whiskey — aged, received.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。米俵、地元の蔵元から、貰った。',en:"Yeah. Rice bales — from local brewery.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'庭に来た野鳥、ツル、見たかも?',en:"Garden bird — crane, maybe seen?",style:'Curious.'},
    {speaker:'aoi_barista',jp:'夏期、忙しくなる時期だね、お店も。',en:"Summer term — busy time for shops.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'クッキー、サクサクで、美味しい。',en:"Cookies — crispy, tasty.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'子供の頃、消しゴム集めるの、好きだった。',en:"Kid-time — loved collecting erasers.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'同級生の森本さん、最近、会ってない。',en:"Classmate Morimoto — haven't seen lately.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'夏は、くるみ入りのケーキ、お気に入り。',en:"Summer — walnut cake, favorite.",style:'Warm close.'},
  ]},
  {id:'conv_06317',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、上司のお家で、ウィスキー、頂いた。',en:"In youth — at boss's, received whiskey.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。当時、お米、米俵で計算してたわね。',en:"Yes. Then — rice counted in bales.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'裏山に、昔、ツルが来てたな。',en:"Behind the hills — cranes once came.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'夏期休暇、家族で旅行、毎年行ったわね。',en:"Summer breaks — family trips yearly.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'お前の作るクッキー、サクサクして美味しい。',en:"Your cookies — crispy, tasty.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'子供たち、消しゴムを大事にしていたわね。',en:"Kids — treasured erasers.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'昔の同僚、森本さん、お元気かな。',en:"Old colleague Morimoto — well?",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'秋になったら、くるみを使った和菓子、作りましょう。',en:"Come autumn — walnut wagashi, make.",style:'Warm close.'},
  ]},
  {id:'conv_06318',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'お父さんが、ウィスキーのコレクター、なんだ。',en:"Dad's a whiskey collector.",style:'Animated teen.'},
    {speaker:'riku_teen',jp:'うん。秋祭り、米俵を担ぐ競技、楽しそう。',en:"Yeah. Autumn fest — bale-carrying contest, fun.",style:'Bright.'},
    {speaker:'sakura_teen',jp:'動物園、ツル舎、新しくなったって。',en:"Zoo — crane house, renewed.",style:'Curious.'},
    {speaker:'riku_teen',jp:'夏期講習、皆で行く?',en:"Summer cram — all going?",style:'Casual.'},
    {speaker:'sakura_teen',jp:'お弁当、サクサクのコロッケ、入ってた。',en:"Bento — crispy croquette in.",style:'Eager.'},
    {speaker:'riku_teen',jp:'文房具屋、消しゴム、新しいの、買った。',en:"Stationery — new eraser, bought.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'森本先生、優しいよね、いつも。',en:"Morimoto-sensei — always kind.",style:'Warm.'},
    {speaker:'riku_teen',jp:'おやつ、くるみ入りのチョコ、食べる?',en:"Snack — walnut chocolate, eat?",style:'Cheerful close.'},
  ]},
  {id:'conv_06319',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher discusses culture',lines:[
    {speaker:'asuka_teacher',jp:'論文、ウィスキー産業の歴史、丁寧でしたね。',en:"Paper — whiskey-industry history, careful.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。米俵を介した経済の章、過去資料、引用しました。',en:"Yes. Bale-mediated economy chapter — past sources cited.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'ツル類の保護活動、章末で扱いましたね。',en:"Crane-protection — chapter end.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'夏期の文化研修、海外の例、参考にしました。',en:"Summer-term cultural training — overseas, referenced.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'伝統菓子のサクサク食感、製法、興味深いですね。',en:"Traditional sweets' crispy texture — methods intriguing.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。消しゴム文化、書道との対比、章に入れました。',en:"Yes. Eraser culture vs. shodo — chapter.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'森本先生の論考、引用、適切ですね。',en:"Sensei Morimoto's essay — citation, apt.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'くるみ栽培の歴史、最終章で論じます。',en:"Walnut-cultivation history — final chapter.",style:'Earnest close.'},
  ]},
  {id:'conv_06320',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan an event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、夏フェア、ウィスキーカクテル、出そか。',en:"Aoi-san — summer fair, whiskey cocktails?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。地元の米俵から造った、お酒も併せて。',en:"Yes. Local-bale-made sake too.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'店内に、ツルのモチーフ、和の雰囲気で。',en:"In-store — crane motif, wa-vibe.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'夏期、テラス席、強化します。',en:"Summer-term — terrace seats, strengthen.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'前菜にサクサク食感のもの、入れよか。',en:"Starter — crispy items.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'子供向けに、消しゴムスタンプの工作コーナーも、楽しいです。',en:"For kids — eraser-stamp craft corner, fun.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'地元の森本農園と、コラボしよか。',en:"Local Morimoto farm — collab?",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'デザートに、くるみとはちみつ、組み合わせます。',en:"Dessert — walnut+honey, combine.",style:'Warm close.'},
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

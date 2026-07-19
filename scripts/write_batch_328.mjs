import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_328 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['下っ','膨らま','別物','呼べる','挙動','利き','積もっ','引き込ま']
const B_T = ['外注','両社','差し支え','損ね','歯科医','部内','組立','伝票']
const C_T = ['悪役','手記','品格','ドラフト','政教','采配','踏襲','俯瞰']
const D_T = ['薪','館内','本館','防音','農作業','手洗い','補習','弾ける']

const data = [
  // A
  {id:'conv_06521',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お祖父ちゃんの会社、ぼくの父は下っ端だって言ってた。',en:"Mom — Grandpa's firm, Dad said he was junior.",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'うん。お餅、レンジで膨らませて、おやつに。',en:"Yes. Mochi — microwave-puff, snack.",style:'Tender.'},
    {speaker:'sho_child',jp:'同じ犬の絵本でも、内容、別物だよ。',en:"Same-dog books — content, different.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お友達、呼べる時、呼んでね、家に。',en:"Friend — when can be called, call to home.",style:'Soft.'},
    {speaker:'sho_child',jp:'子犬、急に挙動、不審だよ。',en:"Puppy — sudden suspicious behavior.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'お父さん、右利き、左手で書くと、不思議な字、書く。',en:"Dad right-handed — left-hand writing, odd letters.",style:'Wry.'},
    {speaker:'sho_child',jp:'雪、たくさん積もったね、庭に。',en:"Snow — lots accumulated, garden.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'おはなしに、つい引き込まれちゃう、可愛い我が子。',en:"Story — got drawn in, sweet child.",style:'Warm close.'},
  ]},
  {id:'conv_06522',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'入社時、下っ端で、お茶汲み、よくやったよ。',en:"On entry — junior, tea-pour often.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'うん。新作パン、生地が膨らまない時、焦るよね。',en:"Yeah. New bread — dough non-puffing, panic.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'似てるけど、別物のメーカーね、これ。',en:"Similar, but different maker.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'仲間、呼べる時、いつでも声かけて。',en:"Friends — anytime callable, call.",style:'Warm.'},
    {speaker:'mei_romantic',jp:'最近、夫の挙動、ちょっと気になるの。',en:"Lately — husband's actions, slightly bother.",style:'Vulnerable.'},
    {speaker:'aoi_barista',jp:'左利きの友達、ちょっと特別感、ある。',en:"Left-handed friends — slight special feel.",style:'Curious.'},
    {speaker:'mei_romantic',jp:'庭、夜のうちに、雪、積もってたよ。',en:"Garden — overnight snow accumulated.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'昨日の映画、ストーリーに引き込まれて、号泣しちゃった。',en:"Yesterday's film — story-drawn-in, cried hard.",style:'Bright close.'},
  ]},
  {id:'conv_06523',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk',lines:[
    {speaker:'sakura_teen',jp:'部活、下っ端の頃、雑用ばかりだった。',en:"Club — junior, only odd tasks.",style:'Wry teen.'},
    {speaker:'riku_teen',jp:'うん。お餅、レンジで膨らませると、面白いよな。',en:"Yeah. Mochi — microwave-puff, fun.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'同じテーマでも、レポート、別物に書けた。',en:"Same theme — reports, differently written.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'親友、呼べる仲間、大事にしようぜ。',en:"Friends — callable, treasure.",style:'Warm.'},
    {speaker:'sakura_teen',jp:'昨日、変な挙動の子、廊下にいた。',en:"Yesterday — odd-acting kid in hall.",style:'Curious.'},
    {speaker:'riku_teen',jp:'お前、右利きだっけ?',en:"You — right-handed?",style:'Probe.'},
    {speaker:'sakura_teen',jp:'雪、屋根に積もった、写真撮りたい。',en:"Snow — roof-accumulated, want photo.",style:'Bright.'},
    {speaker:'riku_teen',jp:'最近の漫画、つい引き込まれちゃう。',en:"Recent manga — got drawn in.",style:'Animated close.'},
  ]},
  {id:'conv_06524',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、私も会社では下っ端だった。',en:"In youth — also junior at firm.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。お焼き餅、お祖母ちゃんが、ふっくら膨らませてくれたわね。',en:"Yes. Grilled mochi — Granny puffed well.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昔の電車と、今の電車、別物だな。',en:"Old vs new trains — different things.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'孫を呼べる時間、何よりの楽しみ。',en:"Grandkid-callable time — chief joy.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'最近、ねこの挙動、ちょっと変だな。',en:"Lately — cat actions slightly odd.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'昔の写真、お父さん、左利きだったわね。',en:"Old photo — Dad, left-handed.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'庭、二人で見た雪、忘れずに積もってる。',en:"Garden — snow seen together, unforgotten-accumulated.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'昔の物語、お互い、引き込まれて読んだわね。',en:"Old stories — mutually drawn-in.",style:'Warm close.'},
  ]},
  {id:'conv_06525',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai and a teen chat',lines:[
    {speaker:'ren_uni',jp:'桜、ゼミでは下っ端、まだ、君もな。',en:"Sakura — seminar junior, still you.",style:'Casual senpai.'},
    {speaker:'sakura_teen',jp:'はい。先輩、自信を膨らませる手伝い、ありがとうございます。',en:"Yes. Senpai — confidence-puff help, thanks.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'学部論文と修論、別物だぞ。',en:"Undergrad vs master — different.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'先輩、いつでも呼べる存在で、ありがたいです。',en:"Senpai — always callable, grateful.",style:'Polite.'},
    {speaker:'ren_uni',jp:'最近、お前の挙動、自信ついてきたな。',en:"Lately — your actions, gained confidence.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。先輩、利き手、右ですよね。',en:"Yes. Senpai — dominant hand, right.",style:'Curious.'},
    {speaker:'ren_uni',jp:'論文の参考文献、たくさん積もったな。',en:"Paper refs — many accumulated.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。先輩の論考に、引き込まれます、いつも。',en:"Yes. Senpai's essays — drawn-in always.",style:'Polite close.'},
  ]},

  // B
  {id:'conv_06526',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'業務、外注を増やすか、検討中だ。',en:"Operations — increase outsource, under review.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。両社の協定、明日、調印します。',en:"Yes. Both firms' agreement — sign tomorrow.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'業務に差し支えがあるか、確認しろ。',en:"Operations-hindrance — verify.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。気を損ねないよう、丁寧に対応します。',en:"Yes. Without offending — careful.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'社員の歯科医、紹介制度、続けよう。',en:"Staff dentist — referral, continue.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。部内会議、明日、設定済みです。',en:"Yes. Section meeting tomorrow — set.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'組立工程、効率化、目標だ。',en:"Assembly process — efficiency goal.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。経理、伝票、再確認しています。',en:"Yes. Finance vouchers — reverify.",style:'Close.'},
  ]},
  {id:'conv_06527',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss',lines:[
    {speaker:'yuki_office',jp:'デザイン、外注、信頼できる会社、選ぼう。',en:"Design outsource — choose trustworthy firm.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。両社、対等な関係で進めます。',en:"Yes. Both firms — equal-relation advance.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'差し支えなければ、明日打ち合わせ、お願い。',en:"If no hindrance — tomorrow meeting, please.",style:'Polite.'},
    {speaker:'kenji_office',jp:'はい。先方の気分を損ねないよう、対応します。',en:"Yes. Without offending other — handle.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'社内、歯科医検診、来月実施だね。',en:"In-house dentist screening — next month.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。部内コミュニケーション、活発化しています。',en:"Yes. Section comms — energizing.",style:'Update.'},
    {speaker:'yuki_office',jp:'組立ラインの稼働率、上がってるね。',en:"Assembly-line utilization — rising.",style:'Bright.'},
    {speaker:'kenji_office',jp:'はい。伝票処理、自動化、進めています。',en:"Yes. Voucher-processing automation — advancing.",style:'Close.'},
  ]},
  {id:'conv_06528',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、業務、外注を活用する判断、大事だ。',en:"Ren — outsource-utilization decision, vital.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。両社のWin-Win関係、目指したいです。',en:"Yes. Both firms' win-win — aim.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'業務に差し支えのない範囲で、若手にチャンスを与える。',en:"Within non-hindrance — give youth chances.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。先輩を損ねないよう、配慮します。',en:"Yes. Without offending senpai — mindful.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'若いうちに、歯科医、定期的に通え。',en:"In youth — dentist regularly.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。部内のミーティング、参加できますか。',en:"Yes. Section meeting — joinable?",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'うん。組立現場の見学、来週、連れて行く。',en:"Yes. Assembly-floor tour — next week, take.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。伝票管理の流れ、勉強します。',en:"Yes. Voucher-mgmt flow — study.",style:'Earnest close.'},
  ]},
  {id:'conv_06529',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on coordination',lines:[
    {speaker:'takeda_officer',jp:'警察、特殊業務、外注、慎重に判断しています。',en:"Police — special ops outsource, careful.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。両社、警察との連携、構築しています。',en:"Yes. Both firms — police-link building.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'御社業務に差し支え、ないことを願います。',en:"Hope no hindrance to your operations.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。市民の感情を損ねないよう、慎重に対応します。',en:"Yes. Without offending citizens — careful.",style:'Update.'},
    {speaker:'takeda_officer',jp:'被害者、歯科医での治療、保険、適用されました。',en:"Victim — dentist treatment, insurance applied.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。部内の警察出身者、相談相手として頼っています。',en:"Yes. Section ex-police — consult-reliance.",style:'Update.'},
    {speaker:'takeda_officer',jp:'組立工場、警備、強化中です。',en:"Assembly plant — security strengthening.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。伝票、警察開示要請、対応可能です。',en:"Yes. Vouchers — police-disclosure handleable.",style:'Close.'},
  ]},
  {id:'conv_06530',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'外注、若い頃、批判的に見ていた。',en:"Outsourcing — youth critical view.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。両社の信頼関係、長期で築いてきました。',en:"Yes. Both-firm trust — long-built.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'差し支えのない範囲で、新しい挑戦、進めろ。',en:"Within non-hindrance — new challenges advance.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。先輩を損ねないよう、配慮、続けます。',en:"Yes. Without offending elders — mindful continued.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'創業時から、社員の歯科医費、補助していた。',en:"Founding-era — staff dentist subsidized.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。部内の絆、強化しています。',en:"Yes. Section bonds — strengthening.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'組立精神、伝統として残せ。',en:"Assembly spirit — keep tradition.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。伝票も、紙文化、最後まで守ります。',en:"Yes. Vouchers — paper culture, kept to end.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06531',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses a paper on media',lines:[
    {speaker:'asuka_teacher',jp:'論文、ドラマの悪役の心理、興味深いですね。',en:"Paper — drama villain psych, intriguing.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。当時の手記、参考にしました。',en:"Yes. Period memoirs — referenced.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'品格ある語り手、印象的でしたね。',en:"Dignified narrator — striking.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。論文のドラフト、見直し中です。',en:"Yes. Paper draft — revising.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'政教関係の歴史、別章で扱いましたか。',en:"Politico-religious history — separate chapter?",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。指揮者の采配、見事でした。',en:"Yes. Conductor's command — splendid.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'伝統を踏襲する姿勢、章末でも触れていますね。',en:"Tradition-following stance — also end-mentioned.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'最終章、全体を俯瞰する視点で総括します。',en:"Final-chapter — overall aerial view summarize.",style:'Earnest close.'},
  ]},
  {id:'conv_06532',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs about a case',lines:[
    {speaker:'takeda_officer',jp:'本件、メディアでは悪役扱いされた人物、再調査します。',en:"Case — media-villainized figure, re-investigate.",style:'Calm.'},
    {speaker:'ren_uni',jp:'容疑者の手記、発見されましたよね。',en:"Suspect's memoir — discovered.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。被害者は品格ある実業家でした。',en:"Yes. Victim — dignified industrialist.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'記者会見のドラフト、発表前、確認しますか。',en:"Press-draft — pre-release verify?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。政教関係の集団、警察も注視しています。',en:"Yes. Politico-religious groups — police-watch.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察の采配、絶妙でしたね、今回。',en:"Police command — exquisite this time.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。捜査の鉄則、伝統を踏襲しつつ、新手法も取り入れています。',en:"Yes. Investigation rules — tradition-followed, new methods added.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'事件、俯瞰する視点で、再構成しますね。',en:"Case — aerial view, reconstruct.",style:'Curious close.'},
  ]},
  {id:'conv_06533',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、患者の中に、悪役扱いされる人物、いますね。',en:"Ren — among patients, villainized figures exist.",style:'Calm.'},
    {speaker:'ren_uni',jp:'過去の手記、医療現場の貴重な記録です。',en:"Past memoirs — medical-field treasures.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。医師として、品格ある対応、心がけます。',en:"Yes. As doctor — dignified response, mindful.",style:'Patient.'},
    {speaker:'ren_uni',jp:'治療方針のドラフト、患者と共有してますか。',en:"Treatment-draft — patient-shared?",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。政教絡みの倫理問題、医療界でも議論されます。',en:"Yes. Politico-religious ethics — medical-discussed too.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医療チームの采配、重要ですね。',en:"Medical-team command — vital.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。先人の知恵を踏襲して、進化を続けます。',en:"Yes. Following ancestors — continued evolution.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'医療を俯瞰すると、課題、見えてきますね。',en:"Aerial view of medicine — issues visible.",style:'Reflective close.'},
  ]},
  {id:'conv_06534',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corporate strategy',lines:[
    {speaker:'hiroshi_boss',jp:'業界で悪役にされないよう、CSR、強化しろ。',en:"Avoid industry-villainization — CSR strengthen.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。創業者の手記、社内、共有しました。',en:"Yes. Founder's memoir — internally shared.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'品格ある経営、若手にも示せ。',en:"Dignified mgmt — show to youth.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新企画のドラフト、明日提出します。',en:"Yes. New-plan draft — submit tomorrow.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'政教分離、CSR方針として、明確に。',en:"Politico-religious separation — clear CSR policy.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。経営者の采配、社員からも信頼されています。',en:"Yes. Exec command — staff-trusted.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'伝統を踏襲しつつ、革新も忘れるな。',en:"While following tradition — don't forget innovation.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。市場全体を俯瞰して、戦略を立てます。',en:"Yes. Aerial market view — strategy crafted.",style:'Close.'},
  ]},
  {id:'conv_06535',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through a project',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、研究、歴史の悪役、再評価する視点ですね。',en:"Sakura — research, history-villain reassessment.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。当時の手記、複数引用しました。',en:"Yes. Period memoirs — multi-cited.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'品格ある執筆姿勢、伝わりますね。',en:"Dignified writing stance — conveys.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。最初のドラフト、書き直しました。',en:"Yes. First draft — rewrote.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'政教関係、慎重に扱いましたね。',en:"Politico-religious — careful handling.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。リーダーの采配、伝記の中で印象的でした。',en:"Yes. Leader's command — biog-striking.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'過去の慣例を踏襲することの是非、論じましたね。',en:"Following past customs — pros/cons discussed.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。時代を俯瞰して、章末で総括します。',en:"Yes. Aerial era-view — end-summarize.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06536',cluster:'D',ambient:'park_distant_birds',cast:['hiroshi_elder','sho_child'],targets:D_T,scenario:'A grandpa and grandkid spend a day in the country',lines:[
    {speaker:'sho_child',jp:'おじいちゃん、薪、たくさんあるね。',en:"Grandpa — lots of firewood.",style:'Awe child.'},
    {speaker:'hiroshi_elder',jp:'うん。資料館の館内、見学しよう。',en:"Yes. Museum interior — tour.",style:'Calm.'},
    {speaker:'sho_child',jp:'本館、大きいね!',en:"Main building — big!",style:'Excited.'},
    {speaker:'hiroshi_elder',jp:'昔の家、防音、なかったから、すべて筒抜けだった。',en:"Old houses — no soundproof, all leaked.",style:'Reflective.'},
    {speaker:'sho_child',jp:'田植え、農作業、楽しい。',en:"Rice-planting, farm-work — fun.",style:'Bright.'},
    {speaker:'hiroshi_elder',jp:'手洗いは、外の井戸でしてたな、昔。',en:"Hand-wash — outdoor well, old days.",style:'Wistful.'},
    {speaker:'sho_child',jp:'夏休み、補習、なくて、嬉しい!',en:"Summer break — no remedial, happy!",style:'Eager.'},
    {speaker:'hiroshi_elder',jp:'お祭りの花火、夜空で弾けると、感動するよ。',en:"Fest fireworks — burst in sky, moves you.",style:'Warm close.'},
  ]},
  {id:'conv_06537',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about an outing',lines:[
    {speaker:'mei_romantic',jp:'お土産屋で、薪のミニチュア、買った。',en:"Souvenir — mini firewood bought.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。美術館の館内、写真撮影、禁止だった。',en:"Yeah. Museum interior — photo-banned.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'本館の入り口、装飾、豪華だったね。',en:"Main bldg entrance — gorgeous decor.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'カフェ、防音壁、設置したの、よかった。',en:"Cafe — soundproof wall installed, glad.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'実家、夏は、農作業の手伝い、頼まれる。',en:"Hometown — summer farm-help asked.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'手洗い、しっかりしてね、コロナ対策。',en:"Hand-wash — properly, COVID-prep.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'子供たち、夏休み、補習続いてるみたい。',en:"Kids — summer break, remedial continues.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'シャンパン、コルクが弾ける音、気持ちいいよね。',en:"Champagne — cork-pop, gratifying.",style:'Warm close.'},
  ]},
  {id:'conv_06538',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、ストーブの薪、お父さん、運んでくれた。',en:"Mom — stove firewood, Dad carried.",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'うん。図書館の館内、しっかり静かにね。',en:"Yes. Library interior — properly quiet.",style:'Direction.'},
    {speaker:'sho_child',jp:'本館に、図書、たくさんあるんだよね。',en:"Main bldg — many books.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'ピアノの練習、防音マット、買ったのよ。',en:"Piano practice — soundproof mat bought.",style:'Soft.'},
    {speaker:'sho_child',jp:'おじいちゃんち、農作業、手伝うのが楽しみ。',en:"Grandpa's — farm-help, fun.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お外から帰ったら、手洗いね、必ず。',en:"Returning from outside — hand-wash always.",style:'Direction.'},
    {speaker:'sho_child',jp:'夏休みの補習、皆と一緒だから、楽しい。',en:"Summer remedial — with friends, fun.",style:'Cheerful.'},
    {speaker:'yumiko_mom',jp:'お祭りで、風船、たくさん弾けて、笑ったね。',en:"Fest — balloons popping, laughed.",style:'Warm close.'},
  ]},
  {id:'conv_06539',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'修学旅行、宿の前に、薪、積んであった。',en:"School trip — at inn-front, firewood stacked.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。博物館、館内ガイド、丁寧だった。',en:"Yeah. Museum — interior guide, careful.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'本館の階段、登るのに疲れた。',en:"Main bldg stairs — climb tired.",style:'Wry.'},
    {speaker:'riku_teen',jp:'家、防音、ちゃんとしてないから、隣の音、丸聞こえ。',en:"Home — no proper soundproof, neighbor-audible.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'実家の農作業、手伝うって、長期休みに、約束した。',en:"Home farm-help — promised on long break.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'手洗いの徹底、まだ続いてるよね、コロナ以来。',en:"Hand-wash strict — since COVID, continues.",style:'Practical.'},
    {speaker:'sakura_teen',jp:'夏休み補習、私もある。',en:"Summer remedial — mine too.",style:'Subdued.'},
    {speaker:'riku_teen',jp:'文化祭、シャボン玉、たくさん弾けて、楽しかった。',en:"Festival — bubbles burst many, fun.",style:'Cheerful close.'},
  ]},
  {id:'conv_06540',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan an event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、薪窯のピザ、新店舗で、出そか。',en:"Aoi-san — wood-oven pizza, new store?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。館内、家族連れも、ゆっくり過ごせる空間に。',en:"Yes. Interior — family-friendly space.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'本館は、フランチャイズの基準にするで。',en:"Main bldg — franchise standard.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'防音性能、二階の演奏スペース、必要ですね。',en:"Soundproof — 2F music space needed.",style:'Reflective.'},
    {speaker:'daichi_kansai',jp:'地元農作業、農家コラボで、新鮮野菜、入荷しよ。',en:"Local farm-work — farmer collab, fresh veg.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'入口の手洗いコーナー、目立つように設置します。',en:"Entrance hand-wash corner — conspicuously installed.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'学生向けに、定期テスト後の補習割引、できへんか。',en:"Students — post-test remedial discount?",style:'Animated.'},
    {speaker:'aoi_barista',jp:'閉店前、レジが弾ける勢いで売れたら、最高ですね。',en:"Pre-close — register-bursting sales would be best.",style:'Warm close.'},
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

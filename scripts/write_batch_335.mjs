import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_335 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['爽快','ババ','チカ','取り込み','近かっ','つらく','こぎ','じゃう']
const B_T = ['学内','人名','右上','左上','つけれ','筐','院内','バッティング']
const C_T = ['悩まさ','東側','闘病','口論','丹','いとう','づらく','粗']
const D_T = ['うみ','はく','キモ','フッ','遊ば','握ら','イーグル','窯']

const data = [
  // A
  {id:'conv_06661',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お風呂上がり、爽快な気分だよ!',en:"Mom — post-bath, refreshing mood!",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'うん。お祖母ちゃんと、ババ抜き、しようね、夜。',en:"Yes. Granny — Old Maid, do, night.",style:'Warm.'},
    {speaker:'sho_child',jp:'目が、チカチカするよ、ゲームのし過ぎ。',en:"Eyes — flashing, gaming-too-much.",style:'Wry.'},
    {speaker:'yumiko_mom',jp:'お父さん、いま取り込み中だから、後でね。',en:"Dad — now busy, later.",style:'Soft direction.'},
    {speaker:'sho_child',jp:'昔住んでた家、駅から近かったよね、ママ。',en:"Old house — station-close, Mom.",style:'Wistful child.'},
    {speaker:'yumiko_mom',jp:'うん。風邪、つらくない、翔くん、大丈夫?',en:"Yeah. Cold — not painful, Sho, okay?",style:'Concerned.'},
    {speaker:'sho_child',jp:'公園で、ボート、こぎたいな、お父さんと。',en:"Park — boat, want-row, with Dad.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お菓子、全部、食べちゃうのは、ダメよ、翔くん。',en:"Sweets — eating-all, no, Sho.",style:'Direction close.'},
  ]},
  {id:'conv_06662',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、温泉行ってきたの、爽快な気分、まだ続いてる。',en:"Aoi — went hot-spring, refresh-mood still continues.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。実家で、ババ抜き、家族と、やったよ、お正月。',en:"Yeah. Home — Old Maid, family-played, NY.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'店の電飾、ピカピカと、チカチカしてるよね、夜。',en:"Store lights — sparkling-flashing, night.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'すまない、メイちゃん、ちょっと取り込み中なの、店、繁忙期で。',en:"Sorry Mei — busy, store-busy-season.",style:'Apologetic.'},
    {speaker:'mei_romantic',jp:'昔の彼、家、確かに近かったわね、私の。',en:"Old bf — house, close to mine.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'仕事、つらくなったら、いつでも話してね、メイちゃん。',en:"Work — if-painful, anytime tell.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'昔、二人で、ボートをこぎに行ったね、湖。',en:"Old days — two, boat-rowed, lake.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'コーヒー、つい、もう一杯、飲んじゃうよね、ここで。',en:"Coffee — accidentally another drank, here.",style:'Cheerful close.'},
  ]},
  {id:'conv_06663',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat after school',lines:[
    {speaker:'sakura_teen',jp:'リク、運動後の爽快感、最高だね、テニスやってよかった。',en:"Riku — post-exercise refresh, best, tennis-glad.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。じいちゃんと、ババ抜き、よくやったよ、お盆。',en:"Yeah. Grandpa — Old Maid, often-did, Obon.",style:'Wistful.'},
    {speaker:'sakura_teen',jp:'教室の蛍光灯、チカチカして、気になるよね。',en:"Classroom fluor — flashing, bothers.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'部活、いま、取り込み中だから、また話そうな。',en:"Club — now busy, talk-later.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'昔の小学校、家から近かったよね、お前と私。',en:"Old elem — close to home, you and me.",style:'Wistful.'},
    {speaker:'riku_teen',jp:'テスト、つらくなる時期だな、もうすぐ。',en:"Test — painful-period soon.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'夏休み、ボートこぎ、皆でやりたいね、湖で。',en:"Summer — boat-row, all-do, lake.",style:'Eager.'},
    {speaker:'riku_teen',jp:'宿題、放っといて、寝ちゃうよな、結局、俺たち。',en:"Homework — let-go, sleeping, eventually, us.",style:'Wry close.'},
  ]},
  {id:'conv_06664',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'お風呂、長湯したら、爽快な気分、味わえたな、私。',en:"Bath — long-soak, refresh felt, me.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。孫と、ババ抜き、楽しい時間だったわね、昨日。',en:"Yes. Grandkid — Old Maid, fun-time, yesterday.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'目、最近、チカチカするんだよ、ばあさん、心配だ。',en:"Eyes — lately flashing, worry, gran.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'お電話、取り込み中で、出られなかったわ、息子から。',en:"Phone — busy, couldn't answer, from son.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'昔の借家、駅から近かったな、新婚時代の。',en:"Old rental — station-close, newlywed.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'最近、夜が、つらくなってきたわ、寒さで、私。',en:"Lately — nights painful, cold, me.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'若い頃、池で、ボートこぎ、よくやったな、二人で。',en:"Youth — pond, boat-row often, two.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'お菓子、まだ食べたいって、孫が、おねだりしちゃうのよね。',en:"Sweets — still want, grandkid pleads.",style:'Warm close.'},
  ]},
  {id:'conv_06665',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、運動後の爽快感、知ってる?気持ちいいよ。',en:"Sho — post-exercise refresh, know?, gratifying.",style:'Warm.'},
    {speaker:'sho_child',jp:'うん。お姉さんと、ババ抜き、また、しよう、メイ姉さん。',en:"Yeah. Sis — Old Maid, again, do, Mei-sis.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'空のお星さま、チカチカ、光ってるね、綺麗。',en:"Sky-stars — flashing-light, pretty.",style:'Soft.'},
    {speaker:'sho_child',jp:'メイ姉さん、いま、取り込み中?後でいい、忙しい?',en:"Mei-sis — now busy?, later OK, busy?",style:'Considerate.'},
    {speaker:'mei_romantic',jp:'翔くんが小さい時、お家、もっと近かったよね、駅から。',en:"Small-Sho — house, closer, from station.",style:'Wistful.'},
    {speaker:'sho_child',jp:'公園で泣いてたら、お友達と、ケンカ、つらくなったの。',en:"Park-crying — friend-fight, became painful.",style:'Vulnerable child.'},
    {speaker:'mei_romantic',jp:'ボート、ペダル、こぎ続けてみようね、頑張れ。',en:"Boat pedal — keep-row, do best.",style:'Encouraging.'},
    {speaker:'sho_child',jp:'お祭りのかき氷、全部、食べちゃうかな、ぼく。',en:"Fest shaved-ice — all eat-up?, me.",style:'Eager close.'},
  ]},

  // B
  {id:'conv_06666',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews planning',lines:[
    {speaker:'hiroshi_boss',jp:'大学との学内連携プロジェクト、進捗、どうだ。',en:"Univ — internal collab project, progress?",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。資料の人名一覧、最新版に更新しました。',en:"Yes. Doc personal-name list — latest updated.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'グラフ、右上に注釈、入れろ。',en:"Graph — top-right annotate.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。表の左上、社名ロゴ、配置しました。',en:"Yes. Table top-left — co-logo, placed.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'予算、もう少しつければ、新事業、加速する。',en:"Budget — if-more-attached, new-biz accel.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。サーバ筐体の更新、計画的に、進めます。',en:"Yes. Server-enclosure refresh — planned, advance.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'院内研修、医療法人との合同、検討しろ。',en:"In-hosp training — joint with med-corp, study.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員のバッティング大会、福利厚生で、開催します。',en:"Yes. Staff batting-tournament — benefits, hold.",style:'Close.'},
  ]},
  {id:'conv_06667',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'人事、学内推薦、続けるべきか、検討しましょう。',en:"HR — campus recommendations, continue?, study.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。広報資料、人名表記、徹底チェックします。',en:"Yes. PR-mat personal-name notation — thorough-check.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'プレゼン、図、右上にKPIを、置きましょう。',en:"Pres — chart top-right KPI, place.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。スライド左上に、ロゴ、固定します。',en:"Yes. Slide top-left — logo fix.",style:'Update.'},
    {speaker:'yuki_office',jp:'スマホ、防水ケースをつければ、安心ね、外回り。',en:"Phone — if-waterproof-case attached, secure, field.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新筐体、デザイン、来週、共有します。',en:"Yes. New enclosure — design, next week share.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'病院との連携、院内会議、来週ね。',en:"Hospital-link — in-hosp meeting, next week.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社内バッティングセンター、来期、検討予定です。',en:"Yes. In-corp batting-center — next-term, plan study.",style:'Close.'},
  ]},
  {id:'conv_06668',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、学内のネットワーク、社会人になっても、大事だぞ。',en:"Ren — campus-network, also as-adult vital.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。研究資料の人名、正確に、書きます。',en:"Yes. Research personal-names — accurately write.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'論文、グラフの右上に、出典、必ず入れろ。',en:"Paper — graph top-right, source always.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。スライドの左上、必ず日付、入れています。',en:"Yes. Slide top-left — always date.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'仮説、論理をつければ、論文、より強くなる。',en:"Hypothesis — if-logic-attached, paper stronger.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。実験装置の筐体、丁寧に、扱います。',en:"Yes. Lab-equip enclosure — carefully handle.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'医療系学生は、院内実習、もっと経験しろ。',en:"Med students — in-hosp practicum, more.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。バッティングセンター、研究の合間に、気分転換にしています。',en:"Yes. Batting cage — research-break, refresh.",style:'Earnest close.'},
  ]},
  {id:'conv_06669',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'本件、大学の学内事件として、捜査を進めております。',en:"Case — as univ-internal, inv-advance.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。捜査資料の人名、慎重に、扱われていますね。',en:"Yes. Inv-mat personal-names — carefully handled.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'監視カメラ、右上から、撮影、捉えていました。',en:"Cam — top-right shot, captured.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。社屋の左上に、防犯カメラ、設置済みです。',en:"Yes. Corp-bldg top-left — sec-cam installed.",style:'Update.'},
    {speaker:'takeda_officer',jp:'防犯ベル、つければ、住民、安心されます。',en:"Crime-bell — if-attached, residents reassured.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。証拠品の筐体、警察に提出済みです。',en:"Yes. Evidence enclosure — police-submitted.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'本件被害者、院内で、聴取させていただきました。',en:"Victim — in-hosp, interviewed.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。地域のバッティングセンター、子供たちの居場所、提供しています。',en:"Yes. Local batting-cage — kids' space, provide.",style:'Close.'},
  ]},
  {id:'conv_06670',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期から、学内採用、大事にしてきた。',en:"Founding — campus-hires valued.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。社員一人一人の人名、覚えるよう、心がけております。',en:"Yes. Each-staff personal-name — remember, mindful.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'資料、図表の右上に、要点をまとめろ。',en:"Doc — chart top-right, summarize key.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。会議資料、左上に、議題、明記します。',en:"Yes. Meet-doc top-left — agenda clear.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'業績、もう一段、つければ、来期、目標達成だ。',en:"Performance — one-more-step attached, next term goal.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。新製品の筐体デザイン、創業者の遺志、反映します。',en:"Yes. New product enclosure — founder-will reflect.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'関連病院、院内に、社員、配置するのも考えろ。',en:"Affiliated hosp — in-hosp staff place, consider.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。社員のバッティング大会、創業祭で、復活させます。',en:"Yes. Staff batting tourney — corp-fest revive.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06671',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses social research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、論文、戦中の人々が悩まされた問題、丁寧に扱っていますね。',en:"Ren — paper, wartime tormented-issues, careful handled.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。冷戦期、東側陣営の社会、研究しました。',en:"Yes. Cold War — eastern bloc, researched.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'闘病しながら、執筆を続けた作家、印象的でしたね。',en:"While illness-fighting, writing-continued — striking.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。学者の間で、口論、激しかった時代でした。',en:"Yes. Among scholars — disputes intense era.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'丹念な資料調査、論文に重みを加えていますね。',en:"Diligent source-survey — paper-weight.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。労をいとうことなく、続けてきた研究です。',en:"Yes. Without-shunning-toil, continued research.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'読み手にとって、入りづらく感じる節、修正されましたね。',en:"For-reader — hard-to-enter parts, revised.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。粗削りだった初稿から、随分、整いました。',en:"Yes. Rough first draft — much-organized.",style:'Earnest close.'},
  ]},
  {id:'conv_06672',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、地域住民が悩まされた騒音問題、深刻でした。',en:"Case — residents-tormented noise issue, serious.",style:'Calm.'},
    {speaker:'ren_uni',jp:'容疑者宅、町の東側に、ありましたよね。',en:"Suspect home — town-east, was.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。容疑者は、長期闘病の経験者でした。',en:"Yes. Suspect — long-illness-fight experiencer.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害者と容疑者、過去に、口論があったんですね。',en:"V&S — past dispute existed.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。丹念な聞き込み調査で、糸口が見えました。',en:"Yes. Diligent door-to-door — lead-seen.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察、市民の安全のため、労をいとうことなく、活動されていますね。',en:"Police — for citizen safety, without-shunning-toil, active.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。被害者、当初、話しづらく感じておられたようです。',en:"Yes. Victim — initially, hard-to-talk felt.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'初期の証拠、粗く扱われがちな現場、改善されていますね。',en:"Early evidence — coarsely-handled scenes, improving.",style:'Curious close.'},
  ]},
  {id:'conv_06673',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses chronic patients',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、患者さんが慢性疾患に悩まされる現状、深刻です。',en:"Ren — patients-chronic-tormented state, serious.",style:'Calm.'},
    {speaker:'ren_uni',jp:'病院の東側病棟、最近、改装されたんですね。',en:"Hosp east-wing — recently renovated.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。闘病中の方々、心の支え、必要です。',en:"Yes. Illness-fighting people — soul-support needed.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医師同士で、治療方針について、口論になることも、ありますか。',en:"Among doctors — tx-policy disputes, exist?",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。丹念な問診、最初の鍵、開けてくれます。',en:"Yes. Diligent intake — first key, opens.",style:'Informative.'},
    {speaker:'ren_uni',jp:'看護師の方々、労をいとうことなく、患者を支えていらっしゃいますね。',en:"Nurses — without-shunning-toil, patient-support.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。診察、最初は、患者さん、話しづらく感じていらっしゃいます。',en:"Yes. Exam — first, patients hard-to-talk feel.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療制度の粗削りな部分、改善が、必要ですね。',en:"Med-system rough parts — improvement needed.",style:'Reflective close.'},
  ]},
  {id:'conv_06674',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp ethics',lines:[
    {speaker:'hiroshi_boss',jp:'業界、規制に悩まされている、各社、苦戦中だ。',en:"Industry — reg-tormented, each-co struggle.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。市場、東側のシェアが、伸びてきました。',en:"Yes. Market — east-share grew.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'前社長、長期闘病の末、引退された経緯がある。',en:"Prev pres — long-illness-fight, retired backdrop.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。社内、来期方針で、口論、起きないよう、調整します。',en:"Yes. Internal — next-term policy, dispute-prev, coord.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'丹念な現場視察、新人にも、経験させろ。',en:"Diligent on-site — newbies experience.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、社業に労をいとうことなく、努めてくれています。',en:"Yes. Staff — biz, without-shunning-toil, striving.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'クレーム、扱いづらく感じる客には、私が、直接応対する。',en:"Comp — hard-to-handle cust, I directly handle.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。初期の試作品、粗削りでしたが、改善、進んでおります。',en:"Yes. Early proto — rough, but improving.",style:'Close.'},
  ]},
  {id:'conv_06675',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through historical research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、論文、戦争に悩まされた一般市民の声、丁寧に拾っていますね。',en:"Sakura — paper, war-tormented civilian voices, careful-picked.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。戦後、東側からの引揚者の証言、貴重でした。',en:"Yes. Post-war east-returnees testimonies — precious.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'戦傷者が、闘病しながら、社会復帰した過程、描かれていますね。',en:"War-wounded, while-illness-fighting, re-integrating depicted.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。政府と市民の間で、口論、絶えなかった時期です。',en:"Yes. Gov-citizen — disputes ceaseless era.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'丹念な聞き取り、論文に深みを与えていますね。',en:"Diligent listening — paper-depth.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。証言者の方々、労をいとうことなく、語ってくださいました。',en:"Yes. Witnesses — without-shunning-toil, spoke.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'語りづらくお感じになった話題、抑制された筆致、適切でしたね。',en:"Hard-to-talk topics — restrained writing, fitting.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。表現が粗くならないよう、何度も書き直しました。',en:"Yes. Expression-not-rough, many-rewritten.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06676',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies and food',lines:[
    {speaker:'mei_romantic',jp:'葵、新作のうみねこ柄のスカーフ、見てきたよ、可愛い。',en:"Aoi — new seagull-pattern scarf, saw, cute.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。深呼吸、息をはくと、気持ちいいよね、朝。',en:"Yeah. Deep breath — breath-out, gratifying, morning.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'モツ鍋の店、キモが入ってて、美味しいの、知ってた?',en:"Motsu-pot — liver in, tasty, knew?",style:'Animated.'},
    {speaker:'aoi_barista',jp:'歯磨き粉、フッ素入り、子供にも使えるのが、増えたね。',en:"Toothpaste — fluoride-in, kid-usable, increased.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'休日、ゲーム機で、つい、長く遊ばないようにしているの、私。',en:"Holiday — console, lest-long-played, conscious, me.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'手相、運命線、強く握らないで見せて、メイちゃん。',en:"Palm — fate-line, don't-grip-strong, show, Mei.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'ゴルフ、彼がイーグル、出したって、自慢してた、昨日。',en:"Golf — he scored eagle, boasted yesterday.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'薪窯のピザ屋、新しくオープンしたよ、行こうよ。',en:"Wood-kiln pizza — newly opened, go!",style:'Cheerful close.'},
  ]},
  {id:'conv_06677',cluster:'D',ambient:'park_distant_birds',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat about outdoor play',lines:[
    {speaker:'sho_child',jp:'ママ、絵本の主人公、うみのねこちゃんなんだよ。',en:"Mom — picture-book hero, sea-cat.",style:'Animated child.'},
    {speaker:'yumiko_mom',jp:'うん。風船、息をはいて、膨らませてみようね。',en:"Yes. Balloon — breath-out, inflate try.",style:'Soft.'},
    {speaker:'sho_child',jp:'魚屋さん、キモが、お皿に入ってたよ、ちょっと、怖い。',en:"Fish-monger — liver-plate, slightly scary.",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'お父さんは、フッ素のうがい薬、毎日、使ってるのよ。',en:"Dad — fluoride mouthwash, daily uses.",style:'Reflective.'},
    {speaker:'sho_child',jp:'公園で、お友達と、たくさん遊ばせてもらったよ、楽しい。',en:"Park — friends, lots-played, fun.",style:'Cheerful.'},
    {speaker:'yumiko_mom',jp:'手、ぎゅっと握らないで、優しく、繋いでね、翔くん。',en:"Hand — don't-grip-tight, gently-link, Sho.",style:'Soft.'},
    {speaker:'sho_child',jp:'動物園で、イーグル、すごく大きかったよ、ママ!',en:"Zoo — eagle, super-big, Mom!",style:'Awe.'},
    {speaker:'yumiko_mom',jp:'おじいちゃんち、薪窯で、ピザ焼いてくれたわね、夏に。',en:"Grandpa's — wood-kiln, pizza-baked, summer.",style:'Warm close.'},
  ]},
  {id:'conv_06678',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、ねえ、うみねこ、漁港にたくさんいるよね、夏。',en:"Riku — hey, seagull, fish-harbor many, summer.",style:'Bright.'},
    {speaker:'riku_teen',jp:'うん。スポーツの後、深く息をはいて、落ち着くんだよ。',en:"Yeah. Post-sport — deep-breath, calm.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お前、たまに、キモい顔するよな、リク。',en:"You — sometimes, gross-face, Riku.",style:'Wry tease.'},
    {speaker:'riku_teen',jp:'歯磨き粉、フッ素配合のやつ、最近、変えたんだ。',en:"Toothpaste — fluoride-mix, recently changed.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'部活で、遊ばせない練習、続いてるんだよね。',en:"Club — no-play practice, continues.",style:'Wry.'},
    {speaker:'riku_teen',jp:'拳、固く握らないで、リラックスして、と、コーチが言ってた。',en:"Fist — don't-grip-firm, relax, coach said.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お前、ゴルフで、イーグル、出したことあるって、本当?',en:"You — golf, eagle scored, true?",style:'Curious.'},
    {speaker:'riku_teen',jp:'文化祭で、窯焼きピザ、出店するクラスもあるって、聞いたぜ。',en:"Cult-fest — kiln-pizza, store-class too, heard.",style:'Animated close.'},
  ]},
  {id:'conv_06679',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'海辺、うみねこの声、よく聞こえたな、昔の夏。',en:"Seaside — seagull-voice often-heard, old summer.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。ゆっくり息をはいて、毎朝、ヨガ、続けてるのよ。',en:"Yes. Slow-breath-out, every morning, yoga.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'昔は、新鮮なキモ、よく食べたな、田舎では。',en:"Old days — fresh liver often, countryside.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'歯科で、フッ素塗布、勧められたわよ、私も、最近。',en:"Dentist — fluoride-coat recommended, also me, lately.",style:'Practical.'},
    {speaker:'hiroshi_elder',jp:'孫を、もっと遊ばせてあげたいな、休みの時。',en:"Grandkid — more-let-play, holidays.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'手、ぎゅっと握らないで、優しく、頂戴ね、あなた。',en:"Hand — don't-grip-tight, gently, please, dear.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ゴルフで、イーグル、夢で終わったな、私。',en:"Youth — golf eagle, dream-ended, me.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'陶芸の窯、教室でも、見学できるそうよ、面白そう。',en:"Ceramics kiln — class-visitable, sounds fun.",style:'Bright close.'},
  ]},
  {id:'conv_06680',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan an event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、海辺フェスで、うみねこの形のクッキー、出さへんか。',en:"Aoi — seaside-fest, seagull-cookie, out?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。新作お菓子、息をはくように、軽く溶けますよ、口の中で。',en:"Yes. New sweet — breath-out-like, lightly-melts, mouth.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'内臓料理、キモを使ったコース、玄人向けに、出そかな。',en:"Offal — liver-course, expert-aimed, out?",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。子供向けに、フッ素入りお茶も、安心ですね。',en:"Yes. Kid-aimed — fluoride-tea, safe.",style:'Practical.'},
    {speaker:'daichi_kansai',jp:'子供を遊ばせるスペース、店の奥、確保したで。',en:"Kid-play space — store-back secured.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。包丁、強く握らないで、優しく扱う、と、教えてます、新人に。',en:"Yes. Knife — don't-grip-firm, gently, told newbie.",style:'Practical.'},
    {speaker:'daichi_kansai',jp:'ゴルフ仲間、最近、イーグル、出したらしいで、すごいわ。',en:"Golf-pal — lately eagle, scored, amazing.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。地元の窯元と提携、地産地消、進めましょう。',en:"Yes. Local kiln-tied, local-produce-consume, advance.",style:'Warm close.'},
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

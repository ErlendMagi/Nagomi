import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_340 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['お誘い','腕時計','立ち寄っ','ふく','うわさ','閉じる','スリム','じゅう']
const B_T = ['レター','高性能','撮ら','商用','出所','明細','否め','バージョンアップ']
const C_T = ['過失','匹敵','八木','出血','究明','受診','遮断','一刻']
const D_T = ['うり','錦','メロディー','ギリシア','壁紙','禅','春樹','マニアック']

const data = [
  // A
  {id:'conv_06761',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、お誘い、ありがとうね、来てよかった。',en:"Aoi — invite, thanks, glad-came.",style:'Warm.'},
    {speaker:'aoi_barista',jp:'うん。新作の腕時計、メイちゃん、似合うね、お洒落だよ。',en:"Yeah. New watch — Mei, suits, stylish.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'帰りに、お祖母ちゃんち、立ち寄ってきたんだ、私。',en:"On way — Granny's, stopped-by, me.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'テーブル、私、ナプキンで、ふくよ、ちょっと汚れた。',en:"Table — me, napkin-wipe, slightly dirty.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'彼の浮気、うわさ、本当じゃないって、信じたい、私。',en:"His cheating rumor — not true, believe-want, me.",style:'Vulnerable.'},
    {speaker:'aoi_barista',jp:'もう閉店時間ね、お店、閉じる準備、しないと。',en:"Closing-time — store, closing-prep, must.",style:'Direction.'},
    {speaker:'mei_romantic',jp:'葵、ジム通いで、本当にスリムになったわね、最近。',en:"Aoi — gym-going, really slim, lately.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'今日は、一日じゅう、忙しかったわよ、私、もう、ヘトヘト。',en:"Today — all-day busy, me, exhausted.",style:'Wry close.'},
  ]},
  {id:'conv_06762',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お友達のお誘い、断っちゃダメかな、行きたくないの。',en:"Mom — friend's invite, refuse-no?, no-want.",style:'Hesitant child.'},
    {speaker:'yumiko_mom',jp:'うん。お父さんの腕時計、新しいの、買ったのよ、お誕生日に。',en:"Yes. Dad's watch — new, bought, b-day.",style:'Warm.'},
    {speaker:'sho_child',jp:'帰り道、お祖父ちゃんち、立ち寄ってきたよ、ぼく、お話、いっぱいした。',en:"Way back — Grandpa's, stopped-by, me, talked lots.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お顔、汗、ハンカチで、ふいてね、翔くん。',en:"Face — sweat, hankie-wipe, Sho.",style:'Soft direction.'},
    {speaker:'sho_child',jp:'学校で、ぼくの、変なうわさ、流れてるんだよ、嫌だな。',en:"School — my weird rumor circulating, dislike.",style:'Pouty.'},
    {speaker:'yumiko_mom',jp:'もう寝る時間ね、本、閉じる前に、お話しようね、翔くん。',en:"Sleep-time — book, before-closing, talk, Sho.",style:'Tender.'},
    {speaker:'sho_child',jp:'ぼく、運動会、スリムに走れるようになりたいな、お父さんみたいに。',en:"Me — sports-day, slim-run-able want, Dad-like.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'今日は、一日じゅう、お祭りの準備、頑張ったわね、翔くん。',en:"Today — all-day, fest-prep hardworking, Sho.",style:'Praising close.'},
  ]},
  {id:'conv_06763',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お誘い、嬉しかったよ、文化祭の打ち上げ、楽しみだね。',en:"Riku — invite, glad, cult-fest after-party, fun.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。お前の腕時計、可愛いな、新しい?',en:"Yeah. Your watch — cute, new?",style:'Wry.'},
    {speaker:'sakura_teen',jp:'帰り、駅前のカフェ、立ち寄ったよ、ちょっと、待った?',en:"Way back — station-cafe stopped-by, slightly waited?",style:'Curious.'},
    {speaker:'riku_teen',jp:'おでこの汗、ふいて、桜、暑いだろ、今日。',en:"Forehead sweat — wipe, Sakura, hot today.",style:'Soft direction.'},
    {speaker:'sakura_teen',jp:'部活の引退、うわさで、私、聞いちゃったよ、本当?',en:"Club-retire — rumor-heard, me, true?",style:'Probe.'},
    {speaker:'riku_teen',jp:'もう、漫画、閉じる時間だ、宿題、するか。',en:"Already — manga, closing-time, homework do?",style:'Wry.'},
    {speaker:'sakura_teen',jp:'最近、私、スリムになりたくて、ジム通い、はじめたんだ。',en:"Lately — slim-want, gym started.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'今日、一日じゅう、テスト勉強だった、もう、しんどい。',en:"Today — all-day test-study, exhausted.",style:'Wry close.'},
  ]},
  {id:'conv_06764',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'お祭りのお誘い、もらったな、町内会から、出ようか、ばあさん。',en:"Fest invite received — local-assoc, attend?, gran.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。あなたの腕時計、もう、五十年来、使っているわよね、すごいわ。',en:"Yes. Your watch — 50-yrs-used, amazing.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'帰り、孫の家、立ち寄ったよ、可愛かったな、孫。',en:"Way back — grandkid-house stopped-by, cute.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'眼鏡、優しく、ふくようにして、傷がつくのよ、強く、こすると。',en:"Glasses — gently-wipe, lest-scratch, strong-rub if.",style:'Direction.'},
    {speaker:'hiroshi_elder',jp:'近所のうわさ、最近、気になることが、多くてな、ばあさん。',en:"Neighbor rumors — lately bother-things many, gran.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'雨戸、夜は、閉じるようにしましょうね、防犯のために、あなた。',en:"Shutters — night, close, for crime-prev, dear.",style:'Practical.'},
    {speaker:'hiroshi_elder',jp:'若い頃のばあさん、スリムだったよな、写真で見ると。',en:"Youth-gran — slim, photo-see.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'最近、一日じゅう、横になってばかりよ、私、運動不足ね。',en:"Lately — all-day lying-only, me, exercise-lack.",style:'Wry close.'},
  ]},
  {id:'conv_06765',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','mei_romantic'],targets:A_T,scenario:'A uni student and friend chat',lines:[
    {speaker:'mei_romantic',jp:'蓮さん、研究会のお誘い、嬉しかったです、参加させてもらえて。',en:"Ren — research-club invite, glad, attend-permit.",style:'Polite.'},
    {speaker:'ren_uni',jp:'うん。父にもらった腕時計、卒業祝いに、もらったんだ、メイちゃん。',en:"Yes. Dad-gave watch — grad-gift, received, Mei.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'帰り道、本屋に立ち寄ったんですよ、論文資料を、探しに。',en:"Way back — bookstore stopped-by, paper-mat search.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'雨で、メガネ、すぐ濡れちゃう、ふく時、急がないとな。',en:"Rain — glasses wet-quick, wipe-time, hurry.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'蓮さんの研究、学界で、うわさになってるって、聞きましたよ。',en:"Ren-research — acad-rumor, heard.",style:'Animated.'},
    {speaker:'ren_uni',jp:'論文、章を閉じる前に、もう一度、見直すよ、メイちゃん。',en:"Paper — chapter-close-before, again-review, Mei.",style:'Commitment.'},
    {speaker:'mei_romantic',jp:'蓮さん、研究で忙しいのに、スリムを保っていますよね、感心です。',en:"Ren — busy-research, slim-kept, admire.",style:'Soft.'},
    {speaker:'ren_uni',jp:'今日は、一日じゅう、論文書きで終わるかもな、メイちゃん。',en:"Today — all-day paper-write end maybe, Mei.",style:'Wry close.'},
  ]},

  // B
  {id:'conv_06766',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews business',lines:[
    {speaker:'hiroshi_boss',jp:'お得意様への新年レター、丁寧に、仕上げろ。',en:"VIP-customer NY-letter — carefully finalize.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。高性能の新製品、来月、発表予定です。',en:"Yes. Hi-perf new product — next month, announce plan.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'広告で、社員、勝手に撮らないよう、徹底しろ。',en:"Ad — staff, no-take-permit, thorough.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。商用ライセンス、契約手続き、進めております。',en:"Yes. Comm license — contract procedure advancing.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'情報の出所、必ず、確認してから、決裁しろ。',en:"Info source — definitely verified-then, approve.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。請求書の明細、お得意様にも、ご提示しております。',en:"Yes. Invoice detail — VIP-cust also, presented.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'競争激化、否めない事実だ、対策、考えろ。',en:"Rivalry intensifying — undeniable fact, measures think.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社内システム、バージョンアップ、来週、実施します。',en:"Yes. Internal system — version-up, next-week conduct.",style:'Close.'},
  ]},
  {id:'conv_06767',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'お得意様向けのレター、文面、私も確認しますね。',en:"VIP-cust letter — text, also verify.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。高性能の新サービス、市場の反応、ご好評です。',en:"Yes. Hi-perf new service — market-reaction, favorable.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'ポスターに、社員写真、撮らずに、イラスト、使いましょう。',en:"Poster — no-staff-photo, illust-use.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。商用利用の許諾、社内、徹底中です。',en:"Yes. Comm-use permit — internal, thorough.",style:'Update.'},
    {speaker:'yuki_office',jp:'情報の出所、新人にも、確認の癖、つけさせてね。',en:"Info source — newbie also, verify-habit, instill.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。明細書のフォーマット、改善案、提出します。',en:"Yes. Detail-statement format — improve-plan submit.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'業界の縮小、否めないところがあるわね、最近。',en:"Industry shrinking — undeniable parts, lately.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。アプリのバージョンアップ、社員向けに、案内します。',en:"Yes. App version-up — staff-aimed, guide.",style:'Close.'},
  ]},
  {id:'conv_06768',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究者への、感謝のレター、ちゃんと書いておけ。',en:"Ren — researcher-thanks letter, properly write.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。高性能の実験装置、研究室、新しく、入りました。',en:"Yes. Hi-perf lab-equip — newly entered.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'論文用の写真、許可なく、撮らないようにな。',en:"Paper-photo — without-permit, no-take.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。商用利用の研究、申請、慎重にいたします。',en:"Yes. Comm-use research — apply careful.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'参考文献の出所、論文に、必ず、明記しろ。',en:"Ref source — paper, definitely state.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。経費明細、研究室、しっかり、保管しています。',en:"Yes. Expense detail — lab, properly stored.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究の競争、激しさ、否めない時代だな、若い君も。',en:"Research rivalry — intense, undeniable era, young you.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究ソフト、バージョンアップ、定期的に、行います。',en:"Yes. Research soft — version-up, periodic.",style:'Earnest close.'},
  ]},
  {id:'conv_06769',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察、住民からのお礼レター、励みになります。',en:"Police — resident-thanks letter, encouraging.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。高性能の防犯カメラ、社屋に、設置済みです。',en:"Yes. Hi-perf cam — corp-bldg installed.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察活動、撮らないように、お願いする場面、ございます。',en:"Police-activity — please-don't-shoot, scenes exist.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。商用施設の防犯、警察と連携、強化しております。',en:"Yes. Comm-facility crime-prev — police-coord strengthening.",style:'Update.'},
    {speaker:'takeda_officer',jp:'容疑者、出所先、引き続き、追跡しております。',en:"Suspect — source-place, continued-tracking.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。被害明細、警察様に、ご提出済みです。',en:"Yes. Damage detail — police-submitted.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'防犯活動の重要性、否めないことを、再認識いたしました。',en:"Crime-prev importance — undeniable, re-recognized.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。社内のセキュリティ、定期、バージョンアップしております。',en:"Yes. Internal security — periodic version-up.",style:'Close.'},
  ]},
  {id:'conv_06770',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業時、手書きのレター、お得意様に、送っていたな、私。',en:"Founding — hand-write letter, VIP-cust sent, me.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。高性能の新製品、創業者の発想が、活きています。',en:"Yes. Hi-perf new prod — founder-idea utilized.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'若い頃、私の写真、勝手に撮らないでくれって、頼んでたな。',en:"Youth — my photo, please-no-take, requested.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。商用拡大、創業者の悲願、達成しております。',en:"Yes. Comm-expansion — founder-wish, accomplished.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'情報の出所、創業期から、私、こだわってきた。',en:"Info source — since founding, insistent.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。創業時の経費明細、社史館に、保管中です。',en:"Yes. Founding-era expense detail — corp-museum stored.",style:'Update.'},
    {speaker:'hiroshi_elder',jp:'時代の変化、否めないことだ、柔軟に、対応しろ。',en:"Era-change — undeniable, flexibly handle.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。社是のバージョンアップ、慎重に、進めます、変わらぬ精神で。',en:"Yes. Motto version-up — careful advance, unchanged spirit.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06771',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、運転者の過失、明らかになりました。',en:"Case — driver-negligence clarified.",style:'Calm.'},
    {speaker:'ren_uni',jp:'被害規模、過去の大事件に、匹敵しますね。',en:"Damage-scale — past big-incident-equal.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。八木さん、被害者のご家族の代表者です。',en:"Yes. Yagi-san — victim-family rep.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'現場、出血の跡、確認されたんですね。',en:"Site — bleeding-trace, verified.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。事件の究明、警察、総力を挙げております。',en:"Yes. Case-investigate — police all-out.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'目撃者、すぐ受診されて、無事だったそうですね。',en:"Witness — promptly-saw-doc, safe heard.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。現場周辺、交通遮断、迅速に、行いました。',en:"Yes. Site-vicinity — traffic-block, swift done.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'一刻も早く、事件の解明、進むといいですね。',en:"As soon as possible — case-resolve advance, hopeful.",style:'Curious close.'},
  ]},
  {id:'conv_06772',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses a complex case',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、患者さん、過失による事故で、運ばれてこられました。',en:"Ren — patient, negligence-accident, brought.",style:'Calm.'},
    {speaker:'ren_uni',jp:'症例、過去の大事故に、匹敵するレベルですね。',en:"Case — past big-accident-equal level.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。八木先生、麻酔のスペシャリストとして、対応しております。',en:"Yes. Yagi-sensei — as anesth specialist, handling.",style:'Patient.'},
    {speaker:'ren_uni',jp:'術中、出血コントロール、難しいケースだったんですね。',en:"Mid-surg — bleeding-control, hard case.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。原因究明のため、検査、複数回、実施しました。',en:"Yes. Cause-investigate — exam, multi-times conducted.",style:'Informative.'},
    {speaker:'ren_uni',jp:'初期段階で、受診されていれば、もっと、軽症だったかもしれませんね。',en:"Early-stage — if-saw-doc, lighter case maybe.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。出血を、薬で、遮断する技術、進歩していますね。',en:"Yes. Bleeding — drug-block tech, progressing.",style:'Informative.'},
    {speaker:'ren_uni',jp:'一刻を争う場面、医療現場、緊張感、すごいですよね。',en:"Sec-disputing scenes — med-site, tension intense.",style:'Reflective close.'},
  ]},
  {id:'conv_06773',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses media studies',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、論文、メディアの過失報道、深く、論じていますね。',en:"Ren — paper, media negligence-reporting, deep argued.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。当時の社会的影響、現代の事件に匹敵するものでした。',en:"Yes. Era social-impact — modern-equal.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'八木義一郎の記事、当時、大きな反響、ありましたね。',en:"Yagi Giichiro's article — era, big reaction.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。被害者の出血シーン、無防備に、報道されていました。',en:"Yes. Victim bleeding-scene — defenselessly, reported.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'真相究明、ジャーナリストの責任、扱っていますね、卒論。',en:"Truth-investigate — journalist-resp, handle, thesis.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。証言者が、心療内科を受診した、というケースもありました。',en:"Yes. Witnesses — psych-saw-doc cases existed.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'情報の遮断、検閲、戦時下、特に、厳しかったですね。',en:"Info-block — censor, wartime, esp-strict.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。一刻も早く、報道倫理を、確立する必要、論じました。',en:"Yes. ASAP — reporting ethics establish, argued.",style:'Earnest close.'},
  ]},
  {id:'conv_06774',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp risk',lines:[
    {speaker:'hiroshi_boss',jp:'社員の過失で、トラブル、絶対に、防げ。',en:"Staff-neg — trouble, absolutely-prevent.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。海外進出、過去の成功に匹敵する成果、目指します。',en:"Yes. Overseas-expan — past-success-equal results aim.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'八木コンサルティング、提携、検討中だ。',en:"Yagi-consulting — partnership studying.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。製品不具合、出血量の管理に、関わる重大事項です。',en:"Yes. Product defect — bleeding-vol mgmt, major issue.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'コンプラ違反、究明体制、整備しろ。',en:"Compl violation — investigate-system, prep.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、定期受診、強化中です。',en:"Yes. Staff — periodic-checkup strengthening.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'情報漏洩、ネットワーク、遮断する仕組み、構築しろ。',en:"Info-leak — net-block mechanism, build.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。一刻も早く、対策、実施いたします。',en:"Yes. ASAP, measure-implement.",style:'Close.'},
  ]},
  {id:'conv_06775',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through social research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、論文、社会的過失、地域社会の影響、論じましたね。',en:"Sakura — paper, soc-negligence, local-impact argued.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。被害規模、過去の災害に匹敵するものでした。',en:"Yes. Damage scale — past-disaster-equal.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'八木さんの証言、フィールドワークで、頂きましたね。',en:"Yagi-san testimony — fieldwork-received.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。当時、出血治療の医療制度、まだ、十分ではありませんでした。',en:"Yes. Era — bleeding-tx med-system, still insufficient.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'真相究明への市民活動、論文の柱でしたね。',en:"Truth-investigate civic-activity — paper pillar.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。被害者の方々、長期にわたり、受診を続けています。',en:"Yes. Victims — long-period saw-doc continuing.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'当時、情報遮断が、社会、混乱に、拍車をかけました。',en:"Era — info-block, soc-chaos accelerated.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。一刻も早い、社会的支援、必要、訴えました、論文で。',en:"Yes. ASAP — soc-support needed, argued, paper.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06776',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、夏の果物、うり系のメロン、お店で出すの、検討中?',en:"Aoi — summer fruit, melon-type, store-out studying?",style:'Curious.'},
    {speaker:'aoi_barista',jp:'うん。京都旅行、錦市場、行ってみたいの、私、最近。',en:"Yeah. Kyoto trip — Nishiki market, want-go, lately.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'最近、新しいメロディー、ピアノで作曲してるの、私。',en:"Lately — new melody, piano-compose, me.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'夏休み、ギリシアの島々、行ってみたいよね、葵と一緒に。',en:"Summer — Greek islands, want-go, with Aoi.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'お家の壁紙、新しく、張り替えたんだ、葵、見に来てね。',en:"Home wallpaper — newly re-papered, come-see, Aoi.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'最近、禅マインドフルネス、はまってるの、私、結構いい感じ。',en:"Lately — Zen mindfulness, hooked, quite-good.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'村上春樹の新刊、読んだ?彼の小説、深いよね、いつも。',en:"Murakami Haruki new book — read?, novels deep always.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'お客さん、マニアックな質問、結構、するのよね、コーヒー談義。',en:"Cust — maniac questions quite-do, coffee-talk.",style:'Wry close.'},
  ]},
  {id:'conv_06777',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat about hobbies',lines:[
    {speaker:'sho_child',jp:'ママ、夏のうり、お祖父ちゃんちで、もらったよ、甘いね。',en:"Mom — summer melon, Grandpa-given, sweet.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'うん。京都の錦市場、お祖母ちゃんと、行ったことあるのよ、楽しかったわ。',en:"Yes. Kyoto Nishiki — with Granny gone, fun.",style:'Warm.'},
    {speaker:'sho_child',jp:'ピアノの先生、新しいメロディー、教えてくれたよ、ぼく、嬉しい!',en:"Piano teacher — new melody taught, me, glad!",style:'Excited.'},
    {speaker:'yumiko_mom',jp:'お父さんの子供の頃、ギリシアの神話、読んでたんだって、覚えてる?',en:"Dad's childhood — Greek myth read, remember?",style:'Reflective.'},
    {speaker:'sho_child',jp:'ぼくの部屋、壁紙、虹色のやつ、好きだよ、ママが選んでくれた。',en:"My room wallpaper — rainbow, like, Mom-chose.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃんは、若い頃、禅寺に、通っていたのよ、知ってた?',en:"Grandpa — youth, Zen-temple attended, knew?",style:'Soft.'},
    {speaker:'sho_child',jp:'いとこの春樹お兄ちゃん、来週、遊びに来るんだよね、ママ?',en:"Cousin Haruki — next week visit, Mom?",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お父さん、マニアックな趣味、いっぱい、持ってるのよ、可愛いわよ。',en:"Dad — maniac hobbies many, cute.",style:'Warm close.'},
  ]},
  {id:'conv_06778',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、夏のうり、お祖父ちゃんち、ふんだんに、出てくるんだよね、毎年。',en:"Riku — summer melon, Grandpa-abundant, every year.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。修学旅行、京都の錦市場、自由時間に、行きたいよな。',en:"Yeah. School trip — Kyoto Nishiki, free-time go-want.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'軽音部、新曲のメロディー、皆で、決めようよ、文化祭、もうすぐ。',en:"Music-club — new-song melody, all-decide, cult-fest soon.",style:'Animated.'},
    {speaker:'riku_teen',jp:'世界史で、古代ギリシアの単元、結構、面白いと思う、俺。',en:"World hist — ancient Greek unit, quite-fun, me.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'自分の部屋の壁紙、お洒落なのに、変えたいんだ、最近、私。',en:"Self room wallpaper — stylish change-want, lately, me.",style:'Soft.'},
    {speaker:'riku_teen',jp:'禅の本、図書室で、借りたんだ、心、落ち着けたくて、最近。',en:"Zen book — library-borrowed, heart-calm, lately.",style:'Earnest.'},
    {speaker:'sakura_teen',jp:'お前、村上春樹、読んだことある?難しいって、聞いた、結構。',en:"You — Murakami Haruki read?, hard, heard.",style:'Curious.'},
    {speaker:'riku_teen',jp:'お前のSNSの投稿、マニアックだよね、たまに、ついていけないぜ、桜。',en:"Your SNS posts — maniac, sometimes can't-follow, Sakura.",style:'Wry close.'},
  ]},
  {id:'conv_06779',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'夏のうり、若い頃、田舎で、よく食べたな、私たち、覚えてる?',en:"Summer melon — youth, country often, us, remember?",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。新婚旅行、京都の錦市場、二人で、歩いたわね、楽しかった。',en:"Yes. Honeymoon — Kyoto Nishiki, two-walked, fun.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、君がピアノで弾いたメロディー、今でも、覚えているよ。',en:"Youth — your piano-melody, still remember.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'ギリシア神話の本、子供たちに、読み聞かせたわね、夜。',en:"Greek myth book — to kids read-aloud, night.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'新婚の家、壁紙、二人で、選んだよな、覚えてる、ばあさん?',en:"Newlywed home — wallpaper, two-chose, remember, gran?",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'禅寺、毎年、お盆に、お参り、行ってきたわね、二人で。',en:"Zen temple — yearly Obon, prayer-gone, two.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'息子の春樹、最近、孫を、連れて、よく訪ねてくれるな。',en:"Son Haruki — lately, grandkid-take, often visit.",style:'Warm.'},
    {speaker:'sachiko_grandma',jp:'あなた、若い頃、マニアックな趣味、いっぱい、持っていたわよね。',en:"You — youth, maniac hobbies many, had.",style:'Wry close.'},
  ]},
  {id:'conv_06780',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan menus',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、夏のうり料理、季節限定で、出さへんか、店で。',en:"Aoi — summer melon dish, seasonal, out?, store.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。京都の錦市場の食材、仕入れ先として、お願いしましょうか。',en:"Yes. Kyoto Nishiki ingredients — supplier-request?",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'店内のBGM、新しいメロディー、季節ごとに、変えよか、葵さん。',en:"Interior BGM — new melody, seasonal-change?",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。地中海料理フェア、ギリシア風、企画しませんか。',en:"Yes. Med fair — Greek-style, plan?",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'店の壁紙、改装で、温かみのあるデザイン、選んだで、葵さん。',en:"Wallpaper — refresh, warm-design chose, Aoi.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'はい。禅をテーマにした、静かな空間、二階に、作りませんか。',en:"Yes. Zen-themed quiet space — 2F build?",style:'Reflective.'},
    {speaker:'daichi_kansai',jp:'スタッフの春樹くん、料理の腕、上達してきたな、嬉しい。',en:"Staff Haruki — cooking, improving, glad.",style:'Warm.'},
    {speaker:'aoi_barista',jp:'はい。コーヒーマニアックなお客様、ご満足いただける、メニュー、開発します。',en:"Yes. Coffee-maniac cust — satisfaction-able menu, develop.",style:'Warm close.'},
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

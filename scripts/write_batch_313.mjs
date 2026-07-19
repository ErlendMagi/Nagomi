import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_313 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['ケチ','熱気','喋る','注ぐ','末尾','相棒','やわらかい','おやすみなさい']
const B_T = ['校正','無条件','専属','協賛','巻頭','研修生','組み込む','見越し']
const C_T = ['通りすがり','引っかかっ','見逃す','警部','一目瞭然','閉ざさ','見抜く','難題']
const D_T = ['源氏','馬鹿げ','ジャクソン','ニコン','シャレ','一直線','勇者','苔']

const data = [
  // A
  {id:'conv_06221',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'お祖父ちゃん、ケチな人じゃないけど、貯蓄家ね。',en:"Grandpa — not stingy, but a saver.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん。スタジアム、熱気がすごかったよね、昨日。',en:"Yeah. Stadium — heat was intense yesterday.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'お客さんと喋るの、楽しい仕事だよね。',en:"Chatting with guests — fun work.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'お茶、丁寧に注ぐの、心がけてる。',en:"Tea — pour carefully, mindful.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'手紙の末尾、心のこもった言葉を添えたい。',en:"Letter's end — heartfelt words to add.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'相棒、信頼してる人、いる?',en:"Partner — someone you trust?",style:'Curious.'},
    {speaker:'mei_romantic',jp:'夜のお風呂、やわらかいお湯が、心地よい。',en:"Night bath — soft water, soothing.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'今夜、早く休んで。おやすみなさい。',en:"Tonight — rest early. Good night.",style:'Warm close.'},
  ]},
  {id:'conv_06222',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat before bed',lines:[
    {speaker:'sho_child',jp:'ママ、お小遣い、ケチるのって悪いこと?',en:"Mom — being stingy with allowance, bad?",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'貯めるのは、いいことよ。試合の熱気、お父さんから聞いた?',en:"Saving's good. Game's intensity — heard from Dad?",style:'Tender.'},
    {speaker:'sho_child',jp:'うん!友達と、いっぱい喋る時間、楽しい。',en:"Yes! Lots-chatting with friends, fun.",style:'Bright.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃんに、お茶、上手に注ぐようになったね。',en:"Grandpa — pouring tea well now.",style:'Warm.'},
    {speaker:'sho_child',jp:'絵本の末尾、いつもハッピーエンドだといいな。',en:"Picture-book end — always happy please.",style:'Wistful.'},
    {speaker:'yumiko_mom',jp:'お友達、相棒みたいに大事にね。',en:"Friend — treasure like a partner.",style:'Soft.'},
    {speaker:'sho_child',jp:'お布団、やわらかい?',en:"Futon — soft?",style:'Sweet.'},
    {speaker:'yumiko_mom',jp:'うん。明日、また元気でね。おやすみなさい。',en:"Yes. Tomorrow, healthy. Good night.",style:'Warm close.'},
  ]},
  {id:'conv_06223',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens walk',lines:[
    {speaker:'sakura_teen',jp:'クラスのみんな、自販機ケチる派、いるよね。',en:"Some classmates — stingy with vending.",style:'Wry teen.'},
    {speaker:'riku_teen',jp:'うん。スタジアムの熱気、忘れられないな。',en:"Yeah. Stadium intensity — unforgettable.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'昨夜、長電話で、喋るのが止まらなかった。',en:"Last night — long call, kept chatting.",style:'Bright.'},
    {speaker:'riku_teen',jp:'コップに水を注ぐ、結構難しいよ。',en:"Pouring water into a cup — kinda hard.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'宿題の末尾、自分の意見、書きました。',en:"Homework end — my opinion written.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'クラスメイト、相棒っていう感じ、最近、特に。',en:"Classmates — partner-feel, lately more so.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'寝具がやわらかい、よく眠れた。',en:"Bedding — soft, slept well.",style:'Soft.'},
    {speaker:'riku_teen',jp:'じゃあ、また明日。おやすみなさい。',en:"See ya tomorrow. Good night.",style:'Warm close.'},
  ]},
  {id:'conv_06224',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、ケチに見られないようにしてた。',en:"In youth — strove not to look stingy.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。試合の熱気、二人で行ったのよね。',en:"Yes. Game's intensity — we went together.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'孫と喋る時間、何より大事だ。',en:"Grandkid-chat — most precious.",style:'Soft.'},
    {speaker:'sachiko_grandma',jp:'お茶、上手に注ぐのは、まだあなたが上ね。',en:"Tea pouring — you're still better.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'手紙の末尾、お前への愛、いつも書いていた。',en:"Letter's end — always love to you.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'人生の相棒、あなたで本当によかった。',en:"Life's partner — truly glad it's you.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'今日のお布団、やわらかいね。',en:"Today's futon — soft.",style:'Calm.'},
    {speaker:'sachiko_grandma',jp:'はい、おやすみなさい。',en:"Yes — good night.",style:'Warm close.'},
  ]},
  {id:'conv_06225',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai and a teen chat',lines:[
    {speaker:'ren_uni',jp:'桜、お金は、ケチるところと、使うところ、分けるんだ。',en:"Sakura — money: stingy where to be, spend where to.",style:'Mentor.'},
    {speaker:'sakura_teen',jp:'はい。スタジアムの熱気、初めて感じました。',en:"Yes. Stadium intensity — first time felt.",style:'Earnest teen.'},
    {speaker:'ren_uni',jp:'長く喋る癖、ゼミでは控えるんだぞ。',en:"Long-chat habit — restrain in seminars.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'紅茶、丁寧に注ぐ、サークルで学びました。',en:"Tea-pouring — learned in club.",style:'Bright.'},
    {speaker:'ren_uni',jp:'レポートの末尾、結論部、強く書け。',en:"Report end — conclusion, write strongly.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'はい。先輩、サークル内の相棒、信頼してます。',en:"Yes. Senpai — trusted club partners.",style:'Earnest.'},
    {speaker:'ren_uni',jp:'休む時は、やわらかい音楽で、リラックスしろ。',en:"When resting — soft music, relax.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'はい。先輩、今日はありがとうございました。おやすみなさい。',en:"Yes. Senpai — thanks. Good night.",style:'Polite close.'},
  ]},

  // B
  {id:'conv_06226',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews a publication project',lines:[
    {speaker:'hiroshi_boss',jp:'原稿の校正、丁寧に進めろ。',en:"Manuscript proofing — careful progress.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。広告主、無条件に契約継続を希望しています。',en:"Yes. Advertisers — wish unconditional renewal.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'専属の編集者、引き継ぎ、しっかり。',en:"In-house editor — handover, firm.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。協賛企業、リスト、整理しました。',en:"Yes. Sponsor list — organized.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'巻頭ページ、目玉企画にしろ。',en:"Lead page — make centerpiece.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。研修生も執筆に組み込むことに、しました。',en:"Yes. Trainees included in writing too.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'読者数の伸び、見越して、増刷。',en:"Reader-count growth — foreseeing, reprint.",style:'Direction.'},
    {speaker:'kenji_office',jp:'承知しました。',en:"Understood.",style:'Close.'},
  ]},
  {id:'conv_06227',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers discuss a magazine',lines:[
    {speaker:'yuki_office',jp:'校正期間、短縮できる?',en:"Proofing — shortenable?",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。無条件で進めるには、人手が必要です。',en:"Yes. Unconditional advance needs more hands.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'専属作家、原稿のアップ、急がせよう。',en:"In-house authors — rush submissions.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。協賛枠、今期増やせます。',en:"Yes. Sponsor slots — this term, expandable.",style:'Update.'},
    {speaker:'yuki_office',jp:'巻頭インタビュー、有名人で決まり?',en:"Lead interview — celeb decided?",style:'Curious.'},
    {speaker:'kenji_office',jp:'はい。研修生のリポートも、組み込む予定です。',en:"Yes. Trainee reports — included too.",style:'Update.'},
    {speaker:'yuki_office',jp:'読者層拡大、見越した戦略、頼む。',en:"Reader-base expansion — foresighted strategy, please.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。',en:"Yes.",style:'Close.'},
  ]},
  {id:'conv_06228',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、校正は、執筆者と編集者、両方の責任だ。',en:"Ren — proofing's joint author-editor duty.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。無条件に信頼する文化、御社に感じます。',en:"Yes. Unconditional-trust culture — felt at your firm.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'専属の若手、君も憧れの存在になれ。',en:"In-house youth — be an aspiration too.",style:'Direction.'},
    {speaker:'ren_uni',jp:'協賛企業との関係、信頼関係、大事ですね。',en:"Sponsor relations — trust matters.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'巻頭の見開き、デザインも参考になる。',en:"Lead spread — design instructive.",style:'Direction.'},
    {speaker:'ren_uni',jp:'研修生として、編集の流れに、組み込んでもらえますか。',en:"As trainee — included in editing flow?",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'うん。将来を見越して、業務、覚えていけ。',en:"Yes. Foreseeing future — learn the work.",style:'Direction close.'},
  ]},
  {id:'conv_06229',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on a publication-safety topic',lines:[
    {speaker:'takeda_officer',jp:'記事の校正、警察関連の表現、慎重に。',en:"Article proofing — police-related expressions, careful.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。無条件公開する記事、避けています。',en:"Yes. Unconditional-publication articles — avoided.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'専属の警察記者、社内で養成中ですか。',en:"In-house police-reporter — being trained internally?",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。協賛キャンペーン、防犯啓発、進めます。',en:"Yes. Sponsor campaign — crime-prev awareness, advancing.",style:'Update.'},
    {speaker:'takeda_officer',jp:'巻頭、警察関連のメッセージ、入れていただけますか。',en:"Lead — please include police message.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。研修生にも、警察取材を組み込みます。',en:"Yes. Trainees — also include police reporting.",style:'Commitment.'},
    {speaker:'takeda_officer',jp:'地域の治安、見越した運用、共有させてください。',en:"Foreseeing community safety — share ops.",style:'Procedural close.'},
  ]},
  {id:'conv_06230',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'校正の質、若い頃、徹底的に鍛えられた。',en:"Proofing quality — rigorously trained in youth.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。無条件の信頼、社員に伝えています。',en:"Yes. Unconditional trust — conveyed to staff.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'専属の人材、大事に育てろ。',en:"In-house talent — raise carefully.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'協賛企業との絆、長期で築いています。',en:"Sponsor bonds — long-term built.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'巻頭、創業精神を、いつも忘れるな。',en:"Lead — don't forget founding spirit.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。研修生にも、現場の哲学、組み込みます。',en:"Yes. Trainees — include field philosophy.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'十年先を見越した経営、続けろ。',en:"Decade-foreseeing management — continue.",style:'Wise close.'},
  ]},

  // C
  {id:'conv_06231',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs about a case',lines:[
    {speaker:'takeda_officer',jp:'本件、通りすがりの目撃者、貴重な証言、得ました。',en:"Case — passing-witness valuable testimony.",style:'Calm.'},
    {speaker:'ren_uni',jp:'容疑者、過去にも別件で引っかかったことが、あるんですね。',en:"Suspect — previously caught in another case.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。証拠を見逃すミス、許されません。',en:"Yes. Missing evidence — unacceptable.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警部、捜査指揮、丁寧ですね。',en:"Inspector — careful command.",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。動機、一目瞭然の事案です。',en:"Yes. Motive — patently obvious.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害者宅、長く閉ざされた窓、ありましたよね。',en:"Victim's home — long-shut windows.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。狡猾な手口、見抜く力が、警察の使命です。',en:"Yes. Cunning MO — discernment, police mission.",style:'Firm.'},
    {speaker:'ren_uni',jp:'未解決の難題、まだ残っていますか。',en:"Unsolved hard problems — remain?",style:'Reflective close.'},
  ]},
  {id:'conv_06232',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses a paper',lines:[
    {speaker:'asuka_teacher',jp:'論文、通りすがりの研究者の意見、引用していますね。',en:"Paper — passing-researcher opinions cited.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。論理の穴に、引っかかった部分、修正しました。',en:"Yes. Logic-gaps — caught and corrected.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'重要な視点、見逃すことなく、書きましたね。',en:"Without missing crucial views — written.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'警部経験者へのインタビュー、章末で扱いました。',en:"Ex-inspector interview — chapter end.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'結論、一目瞭然の構成、評価できますね。',en:"Conclusion — patently-clear structure, praised.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'対立する文献も、閉ざさない姿勢、心がけました。',en:"Conflicting sources — un-closed stance, kept.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'要点を見抜く力、よく出ていますね。',en:"Key-discernment ability — well shown.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'残された難題、次の研究に引き継ぎます。',en:"Remaining hard problems — pass to next study.",style:'Earnest close.'},
  ]},
  {id:'conv_06233',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses a complex case',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、通りすがりの患者、急病で運ばれた事例、増えています。',en:"Ren — passer-by patients in emergencies increasing.",style:'Calm.'},
    {speaker:'ren_uni',jp:'症状の細かな変化、引っかかった、と感じる時、ありますか。',en:"Subtle symptom changes — caught feeling, ever?",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。徴候を見逃すと、命取りになります。',en:"Yes. Missing signs — fatal.",style:'Patient.'},
    {speaker:'ren_uni',jp:'警部の指揮みたいに、現場での判断、迅速に。',en:"Like inspector command — field decisions swift.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。画像で病変、一目瞭然の症例も、あります。',en:"Yes. Imaging — patently-clear lesion cases too.",style:'Informative.'},
    {speaker:'ren_uni',jp:'家族との対話、閉ざさないようにしてますね。',en:"Family talk — keeping un-closed.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。重症の兆候、見抜く目、研修医にも教えてます。',en:"Yes. Severity signs — teaching residents discernment.",style:'Informative.'},
    {speaker:'ren_uni',jp:'未診の難題、医療界、共有していくべきですね。',en:"Undiagnosed hard cases — should be shared in medicine.",style:'Reflective close.'},
  ]},
  {id:'conv_06234',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews a case',lines:[
    {speaker:'hiroshi_boss',jp:'通りすがりの来客、応対、丁寧にしろ。',en:"Passing visitors — respond carefully.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。問題、契約書に引っかかった箇所、整理しました。',en:"Yes. Issues — contract-caught spots organized.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'危険を見逃すな、警備、徹底しろ。',en:"Don't miss risks — security strict.",style:'Direction.'},
    {speaker:'kenji_office',jp:'警部級の専門家と、連携を深めています。',en:"Inspector-level experts — linkage deepening.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'目的、一目瞭然のプレゼン、用意しろ。',en:"Goal — patently-clear pres, prepared.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。閉ざされたデータ、開放への動き、進めます。',en:"Yes. Closed data — toward openness, advancing.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'本質を見抜く判断、信頼の核だ。',en:"Essence-discernment — trust core.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。残された難題、若手と共に取り組みます。',en:"Yes. Remaining hard problems — with youth tackle.",style:'Close.'},
  ]},
  {id:'conv_06235',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through current events',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、通りすがりの一言から始まる物語、構成、丁寧ですね。',en:"Sakura — story-from-passerby-word, careful structure.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。伏線に引っかかった箇所、書き直しました。',en:"Yes. Foreshadowing-caught spots — rewrote.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'重要な手がかり、見逃すことなく、入れましたね。',en:"Without missing key clues — included.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'警部役の人物、語り口、印象深いです。',en:"Inspector character — telling style, memorable.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'真相、一目瞭然の終わり方、いいですね。',en:"Truth — patently-clear ending, good.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'過去への扉、閉ざさずに描きました。',en:"Past's door — depicted without closing.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'人物の心情を見抜く描写、優れていますね。',en:"Character-emotion-discerning depiction — excellent.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'残された難題、続編で書き続けます。',en:"Remaining hard problems — keep writing in sequel.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06236',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher discusses literature and pop',lines:[
    {speaker:'asuka_teacher',jp:'論文、源氏物語と現代漫画、対比、独創的ですね。',en:"Paper — Genji vs. modern manga, original.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。馬鹿げた誤解、章末で論じました。',en:"Yes. Silly misunderstandings — chapter end.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'ジャクソン家の音楽史、研究テーマとして注目ですね。',en:"Jackson-family music history — notable theme.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。ニコンのカメラを使った写真記録、章にしました。',en:"Yes. Nikon-camera photo records — chapter.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'シャレを取り入れた表現、現代性ありますね。',en:"Pun-using expression — modernity.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'一直線の物語構造、新たな試みでした。',en:"Straight-line narrative — fresh attempt.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'勇者譚と現代ファンタジー、別章で比較してくれましたね。',en:"Hero-saga vs. modern fantasy — compared in another chapter.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'庭の苔を比喩に使う場面、独特な美意識でした。',en:"Garden-moss-as-metaphor — unique aesthetic.",style:'Curious close.'},
  ]},
  {id:'conv_06237',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'今、源氏物語の現代訳、読んでるの。',en:"Now — reading Genji modern translation.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん。彼の馬鹿げたジョーク、聞き飽きないね。',en:"Yeah. His silly jokes — never get tired.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'映画でジャクソン主演のアクション、楽しみ。',en:"Jackson-led action film — looking forward.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'カメラ、ニコンを使ってる人、多いよね。',en:"Cameras — many Nikon users.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'駅前のシャレた店、新しくオープン。',en:"Stylish station-front shop — newly opened.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'仕事帰り、家まで一直線、急いで帰る。',en:"Post-work — straight home, rushing.",style:'Casual.'},
    {speaker:'mei_romantic',jp:'子供向けの絵本、勇者が主人公の、人気だね。',en:"Kids' book — hero protag popular.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'お庭の苔、雨上がりが、特に綺麗。',en:"Garden moss — after rain, especially lovely.",style:'Warm close.'},
  ]},
  {id:'conv_06238',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens walk and chat',lines:[
    {speaker:'sakura_teen',jp:'授業で、源氏物語、現代語訳、読んでる。',en:"In class — Genji modern translation read.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。先生の馬鹿げた言い回し、面白いよな。',en:"Yeah. Teacher's silly phrasing — fun.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'映画館で、ジャクソン主演の新作、観た?',en:"At cinemas — Jackson new release watched?",style:'Animated.'},
    {speaker:'riku_teen',jp:'うん。お父さんの古いニコンのカメラ、借りて撮ったよ。',en:"Yeah. Borrowed Dad's old Nikon for shots.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'制服にシャレた小物、つけたい。',en:"Uniform — wanna add stylish accessory.",style:'Bright.'},
    {speaker:'riku_teen',jp:'駅から学校まで、一直線の道、覚えた。',en:"Station to school — straight path memorized.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'勇者になりきった文化祭演劇、笑えた。',en:"Hero-act festival play — laughed.",style:'Cheerful.'},
    {speaker:'riku_teen',jp:'庭の苔、観察日記に、書いた。',en:"Garden moss — wrote in observation journal.",style:'Wistful close.'},
  ]},
  {id:'conv_06239',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces about culture',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、源氏物語の原文、読んだな。',en:"In youth — read Genji original.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。馬鹿げた喧嘩、二人で笑った後、よく仲直りしたわね。',en:"Yes. Silly fights — after laughing, made up.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'マイケル・ジャクソン、若い頃のアイドルだった。',en:"Michael Jackson — youthful idol.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'カメラはニコン派、ずっと使ってきたわね。',en:"Camera — Nikon-faithful, long-used.",style:'Warm.'},
    {speaker:'hiroshi_elder',jp:'結婚式の写真、シャレた構図で撮ってもらった。',en:"Wedding photos — stylishly composed.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'帰宅、いつも一直線、寄り道少ない人だったわね。',en:"Going home — always straight, few detours.",style:'Wry.'},
    {speaker:'hiroshi_elder',jp:'子供たち、勇者ごっこ、よくやってた。',en:"Kids — often played hero.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'庭の苔、若い頃から、丁寧に手入れしてきたわ。',en:"Garden moss — carefully tended since youth.",style:'Warm close.'},
  ]},
  {id:'conv_06240',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan a culture event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、源氏物語フェア、店でやらんか。',en:"Aoi-san — Genji fair, store-host?",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。馬鹿げた失敗もネタにしながら、楽しく計画しましょう。',en:"Yes. Treating silly fails as material, plan happily.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'BGMにジャクソンのオールタイムベスト、入れよか。',en:"BGM — Jackson all-time best, include.",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'店内の撮影、ニコンで、プロ仕様で行きましょう。',en:"In-store shoots — Nikon, pro-spec.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'シャレたユニフォーム、スタッフに用意するで。',en:"Stylish uniforms — prep for staff.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'導線、一直線にして、客動線、スムーズに。',en:"Flow — straight, customer-route smooth.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'マスコットに、勇者キャラ、ええなあ。',en:"Mascot — hero character, nice.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'庭に苔のミニ盆栽、置きましょう。',en:"Mini moss-bonsai for the garden — place.",style:'Warm close.'},
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

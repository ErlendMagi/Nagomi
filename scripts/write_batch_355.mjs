import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_355 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['うたっ','短所','ふえる','ぼけ','なつ','やれやれ','人当たり','留まっ']
const B_T = ['給油','特許庁','細分','折り返し','見込ん','配合','多角','個展']
const C_T = ['希少','翻弄','養殖','押し寄せ','異変','地質','学説','真偽']
const D_T = ['レクチャー','手放し','首位','バスケット','お宝','石垣','掘っ','オーロラ']

const data = [
  {id:'conv_07061',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、学校で、皆と、お歌、うたったよ、本当に、楽しかったよ。',en:"Mom — school, all, song-sang, fun really.",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'うん。翔くんの短所、気にしすぎないでね、ママは、長所を、いっぱい、知ってるからね。',en:"Yes. Sho weak-point — don't-mind, Mom knows-strong-points.",style:'Tender.'},
    {speaker:'sho_child',jp:'お友達、最近、教室に、ふえることが、ほぼ、毎週、あるよ、ママ、新しい子、ね。',en:"Friends — lately class-increase nearly-weekly, Mom new kids.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃん、最近、ちょっと、ぼけてきたかな、家族で、心配してるわよね、翔くん、優しくしてね。',en:"Grandpa — lately bit forgetful, family-worry, Sho gentle.",style:'Concerned.'},
    {speaker:'sho_child',jp:'なつ、ぼくの新しいお友達、本当に、優しい子なんだよ、ママ、紹介したいよ、絶対。',en:"Natsu — new friend, kind, intro-want absolute.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'やれやれ、お父さん、今日も、忙しそうね、本当に、心配だわ、お母さんとして、絶対。',en:"Oh dear — Dad today-busy-look, worry, as Mom absolute.",style:'Wry.'},
    {speaker:'sho_child',jp:'お祖母ちゃん、人当たりが、いい人だよね、ママ、いつも、皆に、優しいよ、本当に。',en:"Granny — person-warm, Mom always-kind-all really.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'昨日、お父さんから、メール、留まったから、本当に、安心したわよ、翔くん、お父さん、無事ね、絶対。',en:"Yesterday — Dad-mail arrived, relieved, Sho Dad-safe absolute.",style:'Warm close.'},
  ]},
  {id:'conv_07062',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、新作のお祝いに、皆で、うたったの、本当に、楽しい夜だったよ、葵、感謝してる。',en:"Aoi — new-cele all sang, fun night, Aoi gratitude.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵の店、短所、まだ、いっぱい、あるのよね、メイちゃん、本当に、改善、続けないと、ね。',en:"Yeah. Aoi-store weak-pts still many, Mei improve-continue.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'最近、葵の常連、ふえることが、続いているわよね、葵、人気の、お店、なってきたね、絶対。',en:"Lately Aoi regulars-increase-continues, popular-store absolute.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'お父さん、最近、ぼけが、進んでて、ちょっと、心配なのよ、葵で、メイちゃん、相談、乗ってくれる?',en:"Dad — lately forgetful progressing, worry, Aoi Mei-consult?",style:'Vulnerable.'},
    {speaker:'mei_romantic',jp:'葵のスタッフ、なつさん、本当に、優しい人ね、メイちゃん、いつも、感心してるのよ、絶対。',en:"Aoi staff Natsu — kind, Mei always-admire absolute.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'やれやれ、最近、本当に、忙しすぎたわよね、葵、メイちゃん、お互いに、休もうね、絶対、本当に。',en:"Oh dear — lately too-busy, Aoi Mei mutually-rest absolute really.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'葵の人当たり、本当に、いいよね、お客様、皆、好きみたい、メイちゃんも、見習いたいのよ。',en:"Aoi person-warm — cust all-like, Mei emulate-want.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'お客様からのメッセージ、何件か、留まってるんだけど、葵、後で、確認するわね、絶対、ね。',en:"Cust-msg several arrived, Aoi later-check absolute.",style:'Cheerful close.'},
  ]},
  {id:'conv_07063',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、カラオケで、お前と、うたった夜、本当に、楽しかったよね、また、行こうよ、絶対。',en:"Riku — karaoke with-you sang night, fun, again-go absolute.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。お前、短所を、自分で、わかってるって、すごいよ、桜、リーダーシップ、本気で、感じるよ。',en:"Yeah. You weak-pt self-know, amazing, Sakura leadership serious-feel.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'最近、クラスのメンバー、ふえることが、結構、あるよね、リク、お前、ご存知?転校生、続いてる。',en:"Lately class-member-increase, Riku knew?, transfers continue.",style:'Curious.'},
    {speaker:'riku_teen',jp:'お祖父ちゃん、最近、ぼけてきたんだ、桜、お前にも、お話、したかったんだ、本当に、心配。',en:"Grandpa — lately forgetful, Sakura you-talk wanted, worry really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'なつ、転校生の子、本当に、明るい子で、皆、すぐ、仲良くなったよ、リク、紹介してあげる、絶対。',en:"Natsu — transfer kid bright, all-friend-soon, Riku intro absolute.",style:'Animated.'},
    {speaker:'riku_teen',jp:'やれやれ、テスト、本当に、難しかったよな、桜、お互いに、頑張ったけど、結果、心配だな、本気で。',en:"Oh dear — test hard, Sakura mutual-tried, result-worry serious.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'お前の人当たり、本当に、いいよね、リク、誰とでも、すぐ、仲良くなれるよね、本気で、すごい、絶対。',en:"Your person-warm — Riku anyone-friend-soon, serious amazing absolute.",style:'Praising.'},
    {speaker:'riku_teen',jp:'昨日のお前のメッセージ、ちょっと、留まったんだ、桜、心配かけて、ごめん、すぐ、返事、しないとな、本気で。',en:"Yesterday your-msg slight-arrived, Sakura worry-sorry, reply-must serious.",style:'Apologetic close.'},
  ]},
  {id:'conv_07064',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、お祭りで、お祖母ちゃん、うたったのよ、覚えてる、ばあさん?本当に、ロマンチックだったわよね。',en:"Youth — fest, Granny-sang, gran remember?, romantic really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。お祖父ちゃんの短所、私、知り尽くしているわよ、結婚生活、長いから、本当に、笑えるわよね。',en:"Yes. Grandpa-weak-pts — know-all, marriage long, laughs really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'孫が、最近、ふえることに、本気で、嬉しい気持ち、湧いてくるよな、ばあさん、本当に、絶対、感謝。',en:"Grandkids — lately increase, serious-glad rising, gran gratitude absolute really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'私、最近、ぼけが、ちょっと、心配なのよ、あなた、もし、何か、おかしくなったら、教えてね、約束ね。',en:"Me — lately forgetful slight-worry, dear if-odd-becomes tell, promise.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'孫のなつちゃん、本当に、可愛い子だよな、ばあさん、覚えてる、初めて、抱っこした日のこと?',en:"Grandkid Natsu — cute, gran remember first-held day?",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'やれやれ、また、お祭り、忙しい時期に、なるわよね、お父さん、町内会、本気で、頑張ってくれてるわね、感謝。',en:"Oh dear — again fest busy-period, Dad assoc serious-tries, gratitude.",style:'Wry.'},
    {speaker:'hiroshi_elder',jp:'若い頃のばあさん、人当たり、本当に、いい人だったよな、覚えてる、若い頃の、お祖母ちゃんの輝き、本気。',en:"Youth gran — person-warm, remember youth-Granny shine serious.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'息子からの手紙、ようやく、留まったわよ、あなた、嬉しいわよね、本当に、安心、するわよね、絶対。',en:"Son-letter — finally arrived, dear glad, relieved absolute really.",style:'Tender close.'},
  ]},
  {id:'conv_07065',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、公園で、うたった、お歌、本当に、上手だったよ、メイ姉さん、感動しちゃった、本気で。',en:"Sho — park, sang song, well-done, Mei-sis moved serious.",style:'Praising.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼくの短所、教えてくれる?ぼく、本気で、直したいんだよ、本当に、頑張りたい。',en:"Mei-sis — my weak-pt tell?, fix-want serious, try-want really.",style:'Earnest child.'},
    {speaker:'mei_romantic',jp:'家族、お祝いの席、ふえることが、最近、多いわよね、翔くん、嬉しいわよね、本当に、家族の絆、ね。',en:"Family-cele — lately increase-many, Sho glad, family-bond really.",style:'Tender.'},
    {speaker:'sho_child',jp:'お祖父ちゃんが、たまに、ぼけたこと、言うようになってきたんだ、メイ姉さん、心配なんだよ、本当に。',en:"Grandpa — occasionally forgetful-says, Mei-sis worry really.",style:'Concerned child.'},
    {speaker:'mei_romantic',jp:'なつちゃんと、翔くん、お友達、なったって聞いたよ、メイ姉さん、嬉しい、本当に、絶対、可愛いわよね、ね。',en:"Natsu — Sho friend-became heard, Mei-sis glad, cute absolute really.",style:'Bright.'},
    {speaker:'sho_child',jp:'やれやれ、宿題、本気で、多いんだよ、ぼく、メイ姉さん、手伝ってくれる?お願い、本当に、絶対。',en:"Oh dear — homework many serious, Mei-sis help?, please absolute really.",style:'Pleading.'},
    {speaker:'mei_romantic',jp:'翔くん、人当たり、本当に、いい子だね、お友達、たくさん、できるわよ、絶対、メイ姉さん、信じてる。',en:"Sho — person-warm, friends-many become absolute, Mei-sis believe.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さんから、お土産、ぼくの机に、ちゃんと、留まってたよ、本当に、嬉しい、ありがとう、絶対、メイ姉さん。',en:"Mei-sis souv — my desk arrived, glad really, thanks absolute Mei-sis.",style:'Earnest close.'},
  ]},
  {id:'conv_07066',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'社用車の給油、月々の経費、本気で、見直していけ、絶対、効率化、急務だ。',en:"Co-car gas — monthly-exp serious-review, eff urgent absolute.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。特許庁、新規申請、本気で、進めてまいります、絶対、お得意様の信頼、感謝。',en:"Yes. Patent-office — new-app serious-advance absolute, VIP-trust gratitude.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'業務、細分化して、効率、本気で、上げていけ、絶対、若手、活躍させろ、本気で、頼んだ。',en:"Biz — sub-divide, eff serious-raise absolute, youth-active, ask serious.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お得意様、折り返しのお電話、本気で、絶対、すぐに、対応するよう、徹底中です、絶対。',en:"Yes. VIP — callback serious absolute promptly resp, thorough absolute.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'若手、本気で、見込んで、配属、進めろ、絶対、人材育成、急務だ、本気で、頼んだぞ。',en:"Youth — serious-foresee assign, advance absolute, talent-raise urgent serious ask.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新製品の配合、研究室、本気で、改良中です、絶対、お客様、ご満足、いただけるはず。',en:"Yes. New product blend — lab serious-improve, cust-satisfy absolute.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界、多角的に、見る視点、社員、本気で、養え、絶対、視野、広い人材、目指せ、絶対。',en:"Industry — multi-angle view, staff serious-foster absolute, view-wide-talent aim absolute.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。創業者の個展、来月、開催予定です、社員、皆、本気で、楽しみにしております、本当に。',en:"Yes. Founder-solo-exhibit — next-month plan, all-staff serious-fun-await really.",style:'Cheerful close.'},
  ]},
  {id:'conv_07067',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'社員、給油代、本気で、節約するよう、皆様、ご協力、お願いいたします、絶対、本当に、感謝。',en:"Staff — gas-cost serious-save, all-coop please absolute gratitude.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。新製品、特許庁、本気で、登録、進めてまいります、絶対、保護、必要ですね、本当に。',en:"Yes. New product — patent-office serious-register, protect needed absolute really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'タスク、細分化して、社員、本気で、把握しやすくしましょうね、絶対、効率化、急務よ、本当に。',en:"Tasks — sub-divide, staff serious-grasp-easy, eff urgent absolute really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お問い合わせ、折り返しの体制、本気で、強化、進めてまいります、絶対、お客様、本当に、満足。',en:"Yes. Inquiry callback — serious-strengthen absolute, cust-satisfy really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'若手の可能性、本気で、見込んでいきましょうね、絶対、人材、本当に、当社の財産よ、皆、頑張って欲しい。',en:"Youth-poss serious-foresee, talent our-asset absolute really, all-try want.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。新製品の調味料の配合、本気で、研究、続けてまいります、絶対、お客様、好評、続けたいです。',en:"Yes. New season-blend — serious-research continue, cust-favor-continue absolute want.",style:'Update.'},
    {speaker:'yuki_office',jp:'当社、多角化、戦略的に、進めましょうね、本気で、新規事業、本当に、楽しみよ、皆、頑張ろうね。',en:"Our co — multi-strat advance serious, new-biz fun absolute, all-try.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、芸術好きの方の個展、社内、本気で、応援していきたいですね、絶対、本当に、嬉しいです、本気。',en:"Yes. Staff art-fan solo-exhibit — internal serious-cheer want absolute glad really serious.",style:'Cheerful close.'},
  ]},
  {id:'conv_07068',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究費、本気で、無駄な、給油代、絶対、節約しろ、絶対、頼んだぞ、本気で、本当に。',en:"Ren — research-fund serious waste-gas absolute save, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。研究成果、特許庁、本気で、登録、検討しております、絶対、社会の役に、立ちたいです、本気。',en:"Yes. Research results — patent-office serious-register study, soc-useful want serious absolute.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究テーマ、細分化して、明確化、本気で、進めろ、絶対、論文の質、上がるからな、本気で、絶対。',en:"Research theme — sub-divide clarify serious-advance, paper-quality up absolute serious.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。先生からの折り返しのメール、本気で、待っております、絶対、楽しみに、しております、本気で。',en:"Yes. Prof callback-mail serious-await, fun-await absolute serious.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'蓮、君を、本気で、見込んでいるぞ、絶対、君の研究、社会、変えていける、絶対、本気で、頼んだぞ。',en:"Ren — you serious-foresee, your research soc-change absolute serious ask.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。実験の配合比率、本気で、最適化、進めてまいります、絶対、本当に、頑張ります、本気で、絶対。',en:"Yes. Exp ratio — serious-optimize advance absolute really try serious absolute.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究、多角的に、視野を、本気で、広げろ、絶対、君の論文、奥深くなる、絶対、本気で、頼んだぞ。',en:"Research — multi-view widen serious absolute, paper-deep absolute serious ask.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。先輩の個展、研究室、皆で、本気で、応援に、行きたいです、絶対、本気で、楽しみです、本当に。',en:"Yes. Senpai solo-exhibit — lab all serious-cheer-go absolute fun serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07069',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察車両の給油、最新の効率化、本気で、進めております、絶対、本当に、市民の税金、大事に、しております。',en:"Police-veh gas — latest-eff serious-advance absolute, citizen-tax-treasure really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。当社、特許庁との、本気で、申請関係、警察様にも、ご報告できる範囲で、共有しております、本当に。',en:"Yes. Our co — patent-office serious-app relation, police-shared-range, really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'捜査、本気で、細分化、本部、進めております、絶対、効率化、市民の安全、第一に、本当に、徹底。',en:"Inv — serious-sub-divide HQ-advance absolute, eff citizen-safety first thorough really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察様からの折り返しのお電話、本気で、お待ちしております、絶対、いつも、感謝、しております、本当に。',en:"Yes. Police-callback serious-await absolute, always-gratitude really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'若手警察官、本気で、見込んでおります、絶対、地域の未来、本当に、明るくなる、絶対、頑張ってもらいたい。',en:"Young officers — serious-foresee, region-future bright absolute, try-want.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。当社製品の配合、警察関連、開示できる範囲で、本気で、対応してまいります、絶対、感謝、本当に。',en:"Yes. Our product-blend — police-related, disclose-range serious-resp absolute gratitude really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'捜査、多角的に、本気で、進めております、絶対、本当に、真相、明らかにしてまいります、絶対、本気で、頑張ります。',en:"Inv — multi-angle serious-advance absolute, truth-clarify absolute serious try really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察関係の方の、個展、社員、本気で、興味、持っております、絶対、応援、続けてまいります、本当に、感謝。',en:"Yes. Police-related solo-exhibit — staff serious-interest, cheer-continue absolute really gratitude.",style:'Close.'},
  ]},
  {id:'conv_07070',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業時、給油代、本気で、節約したぞ、覚えてる、お父さんの代の苦労、お前にも、伝えたい、絶対、本当に。',en:"Founding — gas serious-saved, remember Dad-era hardship, you-convey want absolute really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、特許庁、本気で、関係、築いてきましたよね、絶対、本気で、感謝、しております、本当に。',en:"Yes. Since Dad-era — patent-office serious-rel built, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'創業時、業務、本気で、細分化、苦労したぞ、ばあさんの代から、絶対、お前にも、頑張って欲しい、本気で、絶対。',en:"Founding — biz serious-sub-divide hardship, since Mom-era you-try want absolute serious.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。お得意様への折り返し、お父さんの教え、本気で、絶対、守ってまいります、絶対、感謝、しております、本当に。',en:"Yes. VIP-callback — Dad-teach serious absolute keep absolute gratitude really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お前を、本気で、見込んで、社長を、任せたぞ、絶対、お父さんからの、本気の信頼、覚えておけ、本当に、本気。',en:"You — serious-foresee, pres-entrusted absolute, Dad-trust remember serious really.",style:'Tender.'},
    {speaker:'hiroshi_boss',jp:'はい。創業時の配合レシピ、本気で、絶対、引き継いでまいります、お父さんの遺志、本気で、本当に、絶対です。',en:"Yes. Founding blend-recipe — serious absolute inherit, Dad-will serious really absolute.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'創業から、多角化、私たち、本気で、進めてきたな、覚えてる、お父さん、当時の挑戦、思い出すよ、本気、絶対。',en:"Since founding — multi serious-advanced, remember, era-challenge recall serious absolute.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。創業者として、お父さんの個展、本気で、社内、開催したいです、絶対、お父さんの作品、社員にも、見せたい。',en:"Yes. As founder Dad solo-exhibit — internal serious-hold absolute, Dad-work staff-show want.",style:'Wise close.'},
  ]},
  {id:'conv_07071',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses environmental research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、希少種の保護、論文、本当に、丁寧に、扱っていましたね、本気で、立派、絶対、印象的でした。',en:"Ren — endangered-protect, paper carefully handled, splendid absolute serious striking.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。気候変動に翻弄される、生物たちの姿、論文で、扱いました、本気で、深い、研究、できました、絶対。',en:"Yes. Climate-tossed creatures — paper-handled, deep research absolute serious.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'養殖技術の発展、本気で、人類の未来に、繋がるテーマですよね、論文で、扱っていました、桜さん、本気で、立派。',en:"Aquaculture dev — humanity-future-link theme, paper-handled, Sakura splendid serious.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。観光客が、押し寄せた、観光地、本気で、環境負荷、深刻ですね、論文で、扱いました、絶対、本気で。',en:"Yes. Tourist-flooded sites — env-burden severe, paper-handled absolute serious.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'気候の異変、本気で、地球規模で、進んでいますね、論文で、本気で、警鐘を、鳴らしていました、絶対、立派。',en:"Climate-anomaly — global serious-advance, paper warning-bell absolute splendid serious.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。地質調査、本気で、貴重な、データ、得られました、論文で、扱いました、本当に、深い、研究、絶対。',en:"Yes. Geo-survey — precious data obtained serious, paper-handled, deep research absolute.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'新しい学説、本気で、提示していますね、桜さん、本当に、独創的、絶対、評価できます、本気で、立派でした。',en:"New theory — serious-present, Sakura original, eval-able absolute splendid serious.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。情報の真偽、本気で、見極める姿勢、論文の核心でした、絶対、現代に、繋がる、テーマ、本気で、深い。',en:"Yes. Info truth-falsity — discern stance, paper-core, modern-link theme serious deep absolute.",style:'Earnest close.'},
  ]},
  {id:'conv_07072',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、希少な文化財、本気で、関わる事案、警察、絶対、慎重に、対応してまいります、本気で、本当に。',en:"Case — rare cult-prop involved, police absolute-careful resp serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'被害者、犯罪に翻弄された方、本当に、心が、痛みますね、警察、心のケア、本気で、提供してますね、絶対。',en:"Victim — crime-tossed, heart-pain, police soul-care serious-provide absolute.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、養殖業界に、関わっていた疑い、捜査、本気で、進めております、絶対、深い、調べ、本気。',en:"Yes. Suspect — aquaculture-industry-involve susp, inv serious-advance absolute, deep serious.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害現場、報道陣、押し寄せた状況、警察、対応、本気で、大変でしたよね、本当に、絶対、感謝、しないと。',en:"Damage site — media flooded, police-resp serious-hard, gratitude must absolute.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。最近、地域、本気で、犯罪傾向の異変、感じております、絶対、対策、急務、本気で、本当に、頑張ってまいります。',en:"Yes. Lately region — crime-anomaly serious-feel, measures urgent serious absolute try.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'地質学的な、証拠も、警察、本気で、活用、進めているんですね、絶対、最新の、捜査技術、頭が下がる、本気で、本当に。',en:"Geo-evidence — police serious-utilize advancing, latest inv-tech, humbled absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。警察、本気で、最新の学説、犯罪心理学にも、活用しております、絶対、本当に、進歩、感じます、本気で。',en:"Yes. Police serious-latest theory — crim-psych utilize, progress feel absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'情報の真偽、警察、本気で、見極める姿勢、本当に、立派ですね、絶対、市民の安全、第一、本当に、感謝、絶対。',en:"Info truth-falsity — police discern stance splendid absolute, citizen-safety-first really gratitude.",style:'Reflective close.'},
  ]},
  {id:'conv_07073',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、希少疾患の患者さん、本気で、研究、本当に、進めてまいります、絶対、患者さんの未来のため、本気で。',en:"Ren — rare-disease patients, research serious-advance absolute, patient-future serious.",style:'Calm.'},
    {speaker:'ren_uni',jp:'病に翻弄される患者さん、本当に、医師として、心が、痛む、思いですよね、先生、本気で、感謝、しております、絶対。',en:"Disease-tossed patients — as doctor heart-pain feel, sensei serious-gratitude absolute.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。養殖魚の感染症研究、医療にも、本気で、応用、できる可能性、ありますね、絶対、本気で、面白い、時代です。',en:"Yes. Aquaculture-infect research — med-app serious-possible, intriguing era absolute serious.",style:'Informative.'},
    {speaker:'ren_uni',jp:'パンデミック時、患者、本気で、押し寄せた状況、先生、本気で、大変でしたよね、絶対、本当に、感謝、しないと、本気。',en:"Pandemic — patient serious-flooded, sensei serious-hard, gratitude must absolute serious.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。患者さんの症状、本気で、異変、見逃さないよう、心がけております、絶対、本当に、責任、感じております、本気で。',en:"Yes. Patient-symptoms — anomaly don't-miss mindful serious, resp-feel absolute really serious.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医学と地質学、本気で、繋がる時代、なってきましたね、先生、絶対、面白い、研究、進んでますよね、本当に、本気で。',en:"Med-geol — link era serious-become, sensei intriguing research-advancing absolute really serious.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。最新の学説、本気で、医療現場、絶対、活用してまいります、本気で、患者さんの、未来のため、本当に、頑張ります、絶対。',en:"Yes. Latest theory — med-site serious absolute-utilize, patient-future try serious really absolute.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医療情報の真偽、本気で、見極める力、市民にも、本気で、求められる時代、ですね、先生、本気で、絶対、深刻な、課題。',en:"Med-info truth-falsity — discern-power citizen serious-demanded era, sensei serious absolute issue.",style:'Reflective close.'},
  ]},
  {id:'conv_07074',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp strategy',lines:[
    {speaker:'hiroshi_boss',jp:'希少な人材、本気で、当社に、絶対、引き止めろ、絶対、頼んだぞ、本気で、本当に、頼んだぞ、絶対。',en:"Rare talent — our co absolute-retain, ask absolute serious really ask.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。市場の波に翻弄されない経営、本気で、目指してまいります、絶対、お父さんの代から、変わらず、本当に。',en:"Yes. Market-wave-untossed mgmt — serious-aim absolute, since Dad-era unchanged really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'新規事業、養殖関連、本気で、検討中だ、絶対、若手、頑張ってもらいたい、本気で、頼んだぞ、絶対、絶対。',en:"New biz — aquaculture-related serious-study absolute, youth try-want, ask serious absolute.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。注文、本気で、押し寄せてきております、絶対、生産、間に合わせます、社員、本気で、頑張ります、本当に。',en:"Yes. Orders serious-flooding absolute, prod-on-time, staff serious-try really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界の異変、本気で、敏感に、察知しろ、絶対、当社、対応、急がせろ、本気で、頼んだぞ、絶対、これは、絶対だ。',en:"Industry-anomaly — sensitive-detect, our co-resp hurry absolute serious ask.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新地質調査結果、本気で、参考に、新事業、本当に、進めてまいります、絶対、本気で、頑張ります、絶対、本当に。',en:"Yes. New geo-survey-results — serious-ref new-biz advance absolute serious try absolute really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'新しい経営学説、本気で、勉強しろ、社員、皆、絶対、視野、広げろ、本気で、頼んだぞ、絶対、これは、本当に、本気。',en:"New mgmt-theory — serious-study, staff view-widen absolute, ask serious absolute really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。情報の真偽、社員、本気で、見極める力、育てていきます、絶対、本気で、教育、続けてまいります、絶対、頼みます。',en:"Yes. Info truth-falsity — staff discern-power foster, edu-continue absolute serious ask.",style:'Close.'},
  ]},
  {id:'conv_07075',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、希少な、地方文化、本気で、論文で、扱っていましたね、絶対、立派、本気で、評価、できますよ、本当に。',en:"Sakura — rare local-cult serious-paper-handled, splendid eval-able absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。戦争に翻弄された人々の、本気で、生き様、論文で、扱いました、絶対、本気で、深い、研究、できました、本当に、感謝。',en:"Yes. War-tossed people life-way — paper-handled, deep research absolute serious gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'地域の養殖業、本気で、社会的、重要な役割、論文で、扱っていましたね、本気で、視野、本当に、広いです、絶対。',en:"Local aquaculture — serious-soc-vital role, paper-handled, view broad absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。歴史の変化、本気で、人々に、押し寄せた、と、論文で、論じました、絶対、本気で、深い、研究、できました、本当に、絶対。',en:"Yes. Hist-change — people-flooded, paper-argued, deep research absolute serious really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、社会の異変、本気で、論文で、扱っていましたね、絶対、立派、桜さん、本気で、感心、しました、本当に、絶対、本気。',en:"Wartime soc-anomaly — paper-handled, splendid Sakura admire absolute serious really absolute.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。地質と歴史、本気で、深く、関わる事例、論文で、扱いました、絶対、本気で、独創的な、研究、できました、本当に、感謝。',en:"Yes. Geol-hist — deep-link cases, paper-handled, original research absolute serious gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'最新の歴史学説、本気で、桜さん、取り入れていましたね、論文で、絶対、本気で、立派、評価、できます、本当に、絶対、感心。',en:"Latest hist-theory — Sakura serious-incorp, paper splendid eval-able absolute serious really admire.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。史料の真偽、本気で、見極めることの、大事さ、論文で、扱いました、絶対、研究者として、本気で、心がけたいです、絶対。',en:"Yes. Archive truth-falsity — discern-importance, paper-handled, as researcher mindful want absolute.",style:'Earnest close.'},
  ]},
  {id:'conv_07076',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、彼に、車のレクチャー、本気で、受けてきたよ、メイちゃん、本当に、勉強になったわ、絶対、感謝してる。',en:"Aoi — bf car-lecture serious-received, learning, gratitude absolute really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵の店、本当に、手放しで、お客様、褒めてくださってるのよ、メイちゃん、本気で、嬉しいわよ、絶対。',en:"Yeah. Aoi-store — hand-release cust-praise, Mei serious-glad absolute.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'葵で、最近、業界の首位、本気で、目指したいって、葵の決意、本当に、応援してるよ、絶対、メイちゃん、本気で。',en:"Aoi — lately industry-top serious-aim, Aoi resolve cheer absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'お子様、バスケットボール、本気で、頑張ってるって、葵で、お客様、本当に、よく、話されるのよ、絶対、本気で、可愛い。',en:"Kids — basketball serious-try, Aoi cust often-talk absolute serious cute.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'葵の店、本気で、お宝みたいな、雑貨、置いてあるよね、メイちゃん、毎回、本当に、楽しみなのよ、絶対、本気で。',en:"Aoi-store — treasure-like goods placed, Mei every-time fun absolute serious.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'地方の城、本気で、石垣の保存、本当に、見事よね、葵で、いつか、メイちゃんと、行ってみたいわよ、絶対、本気。',en:"Local castle — stone-wall serious-preserve splendid, Aoi sometime with-Mei go-want absolute serious.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'庭で、彼、本気で、池、掘ったって、葵で、聞いた?本当に、すごいよね、本気で、感心しちゃったよ、絶対、メイちゃん。',en:"Garden — bf serious-pond dug, Aoi heard?, amazing serious admire absolute, Mei.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'夜のオーロラ、本気で、見に行きたいよね、メイちゃん、葵で、いつか、一緒に、行きましょうね、絶対、本気で、夢、ね、絶対。',en:"Night aurora — serious-see-go-want, Mei, Aoi sometime together-go absolute serious dream absolute.",style:'Wistful close.'},
  ]},
  {id:'conv_07077',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お父さん、ぼくに、宿題のレクチャー、本気で、してくれたんだよ、本当に、ありがたいよ、絶対。',en:"Mom — Dad me homework-lecture serious-given, grateful absolute really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'うん。お父さん、手放しで、翔くんのこと、褒めてたわよ、本気で、誇りに、思ってるのよ、絶対、本当に、嬉しい。',en:"Yes. Dad — hand-release Sho-praise, serious-proud absolute really glad.",style:'Tender.'},
    {speaker:'sho_child',jp:'クラスで、ぼく、テストの結果、本気で、首位、取ったんだよ、ママ、本当に、嬉しいんだ、絶対、誇り、頑張った。',en:"Class — me test-result serious-top, Mom glad really absolute proud-tried.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'バスケットボール、本気で、続けていきたいって、翔くん、お父さんに、伝えてたわね、本当に、応援してるよ、絶対、本気。',en:"Basketball — serious-continue want, Sho Dad-told, cheer absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'お祖父ちゃんの倉庫、お宝、本気で、たくさん、ありそうだよ、ママ、ぼく、見たいよ、絶対、本気で、楽しみ。',en:"Grandpa-storage — treasure serious-many-likely, Mom see-want absolute serious fun.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'昔の城跡、本気で、石垣、家族で、見に行きたいわね、翔くん、お父さんに、相談してみようね、絶対、本気で、楽しみ。',en:"Old castle — stone-wall serious-family-see-go want, Sho Dad-consult, fun absolute serious.",style:'Reflective.'},
    {speaker:'sho_child',jp:'庭で、お父さん、本気で、穴、掘ったんだよ、ママ、見て、すごいよね、本気で、感心しちゃう、絶対、本当に。',en:"Garden — Dad serious-hole dug, Mom see, amazing admire absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お祖父ちゃん、若い頃、オーロラ、見に行ったって、本気で、お話してくれたよね、翔くん、本当に、ロマンチック、絶対。',en:"Grandpa — youth aurora-see-went serious told, Sho romantic absolute really.",style:'Wistful close.'},
  ]},
  {id:'conv_07078',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お父さんから、進路のレクチャー、本気で、受けてきたよ、桜、本当に、勉強になったよ、絶対、感謝、本気で。',en:"Riku — Dad career-lecture serious-received, learning really absolute gratitude.",style:'Reflective teen.'},
    {speaker:'riku_teen',jp:'うん。手放しで、お前のこと、褒めてた、コーチが、本気で、桜、お前、すごい選手、本当に、絶対、誇り、思え。',en:"Yeah. Hand-release praised — coach serious, Sakura you-amazing absolute proud.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'文化祭、私たちのクラス、本気で、首位、目指してるよ、リク、お互いに、頑張ろうね、絶対、本気で、勝とう、ね。',en:"Cult-fest — our class serious-top-aim, Riku mutual-try, win absolute serious.",style:'Earnest.'},
    {speaker:'riku_teen',jp:'バスケット部、本気で、強くなってきてさ、桜、お前、応援に、来てくれる?お願い、絶対、本気で、頼む、絶対。',en:"Basketball-club — serious-strong, Sakura cheer-come?, please absolute serious.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'お祖母ちゃんち、お宝、本気で、たくさん、隠れてるんだよ、リク、本当に、見せてあげたいよ、絶対、面白い、本気で。',en:"Granny's — treasure serious-many hidden, Riku show-want, fun absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'歴史の授業で、石垣の話、本気で、面白かったぞ、桜、お前、興味、ある?今度、城、見に行こうな、絶対、本気で。',en:"Hist-class — stone-wall talk serious-fun, Sakura interest?, next castle-go absolute serious.",style:'Curious.'},
    {speaker:'sakura_teen',jp:'家族で、温泉旅行、地面、本気で、掘ったお湯、入ってきたんだ、リク、本気で、最高だったよ、絶対、また、行きたい。',en:"Family — onsen-trip, ground serious-dug-hot-spring entered, Riku serious-best, again-go-want absolute.",style:'Wistful.'},
    {speaker:'riku_teen',jp:'いつか、オーロラ、本気で、見に行きたいよな、桜、お互いに、夢、語り合おうな、絶対、本気で、楽しみだよ、絶対、本気。',en:"Sometime — aurora serious-see-go-want, Sakura mutual-dream-talk, fun absolute serious.",style:'Wistful close.'},
  ]},
  {id:'conv_07079',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、私、ばあさんに、家事のレクチャー、本気で、受けたわよな、覚えてる、本当に、感謝してる、絶対、本気で。',en:"Youth — me gran housework-lecture serious-received, remember, gratitude absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。お祖父ちゃん、若い頃、手放しで、私のこと、褒めてくれたわよね、覚えてる?本当に、嬉しかったわよ、絶対、本気。',en:"Yes. Grandpa — youth hand-release me-praised, remember?, glad absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'創業時、業界の首位、本気で、目指して、頑張ったよな、ばあさん、覚えてる?本当に、絶対、誇り、本気で、感じる。',en:"Founding — industry-top serious-aimed tried, gran remember?, proud absolute serious feel.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、息子、バスケットボール、本気で、頑張っていたわよね、覚えてる、あなた?本当に、可愛かった、絶対、本気で。',en:"Youth — son basketball serious-tried, remember, dear?, cute absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昔のおじいちゃんの倉、本気で、お宝、たくさん、ありそうだったよな、ばあさん、覚えてる?本気で、本当に、絶対、不思議。',en:"Old Grandpa-storage — treasure serious-many-likely, gran remember?, mysterious absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、二人で、お城の石垣、本気で、見に行ったわよね、覚えてる、あなた?本当に、ロマンチック、絶対、本気で、思い出。',en:"Youth — two castle stone-wall serious-saw, remember, dear?, romantic absolute serious memory.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昔、田んぼで、お父さん、本気で、穴、掘ってたよな、ばあさん、覚えてる?本気で、農作業、頑張ってたわよね、絶対。',en:"Old — rice-paddy Dad serious-hole-dug, gran remember?, farm-work serious-tried absolute.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'いつか、二人で、オーロラ、本気で、見に行きたいわよね、あなた、覚悟、ある?本気で、絶対、約束しようね、本当に、絶対。',en:"Sometime — two aurora serious-see-go want, resolve?, serious promise absolute really.",style:'Tender close.'},
  ]},
  {id:'conv_07080',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、ぼく、料理のレクチャー、本気で、お客様に、提供しよか、絶対、料理教室、人気、出るで、本気で、絶対。',en:"Aoi — me cook-lecture serious-cust-provide?, cook-class popular absolute serious.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。お客様、葵で、手放しで、お褒め、いただいております、本当に、嬉しい、絶対、本気で、感謝、しております。',en:"Yes. Cust — Aoi hand-release praise-received, glad absolute serious gratitude.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'葵さん、葵で、地域の飲食店、本気で、首位、絶対、狙うで、本気で、頑張ろうな、葵さん、絶対、本気で、絶対。',en:"Aoi — Aoi local-resto serious-top absolute aim, serious-try Aoi absolute serious.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。バスケットボール応援イベント、葵で、本気で、本気で、開催しませんか、絶対、お客様、絶対、喜んでくださいそう。',en:"Yes. Basketball-cheer event — Aoi serious-hold?, cust-glad absolute serious.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'地元の、お宝、本気で、葵で、紹介する企画、面白いんちゃうか、葵さん、絶対、本気で、お客さん、興味、持つで、絶対。',en:"Local treasure — Aoi-intro plan fun?, Aoi cust serious-interest absolute.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。地方の石垣、本気で、特集する、地域メニュー、葵で、出してみませんか、絶対、本気で、面白い、本当に、絶対。',en:"Yes. Local stone-wall feature — local-menu Aoi-out?, fun absolute serious really.",style:'Reflective.'},
    {speaker:'daichi_kansai',jp:'お祭りで、地面、本気で、掘った、伝統料理、本気で、再現しよか、葵さん、絶対、本気で、面白い、企画、なるで、絶対、本当に。',en:"Fest — ground serious-dug trad-cuisine serious-recreate?, Aoi fun plan absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。オーロラの色を、再現した、カクテル、葵で、本気で、提供したいですね、絶対、お客様、本気で、感激してくださいそう、本気。',en:"Yes. Aurora-color recreated cocktail — Aoi serious-provide want, cust-moved absolute serious.",style:'Warm close.'},
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

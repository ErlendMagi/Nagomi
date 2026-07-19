import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_358 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['暑かっ','お便り','大通り','用心','台無し','音読','円形','探究']
const B_T = ['下る','改める','件名','にせよ','借家','召集','所蔵','年頃']
const C_T = ['生き残る','内陸','空襲','徹し','元素','王室','画一','誇張']
const D_T = ['短歌','防水','漁船','対岸','華人','バード','初演','見渡す']

const data = [
  {id:'conv_07121',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、夏、本当に、暑かったね、今年、外、遊ぶの、大変だったよ、本気で、ぼく、覚えてる。',en:"Mom — summer hot really, this year outside-play hard serious, me remember.",style:'Reflective child.'},
    {speaker:'yumiko_mom',jp:'うん。お祖母ちゃんから、お便り、来ていたわよ、翔くん、お礼の返事、書きなさいね、約束、絶対。',en:"Yes. Granny letter arrived, Sho thanks-reply write, promise absolute.",style:'Direction.'},
    {speaker:'sho_child',jp:'大通り、車、本気で、たくさん、通ってるね、ママ、お祭り、近いから、絶対、混雑するわよね。',en:"Big street — cars many serious, Mom, fest near absolute-crowded.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'夜道、本気で、用心してね、翔くん、お母さん、心配だから、絶対、明るい道、選んでね。',en:"Night-road serious-careful, Sho Mom-worry, absolute bright-road choose.",style:'Concerned.'},
    {speaker:'sho_child',jp:'お弁当、本気で、こぼして、ぼく、台無しにしちゃったよ、ママ、ごめんね、本当に、絶対、気をつけるね。',en:"Lunch serious-spilled, ruined, Mom-sorry really absolute-careful.",style:'Apologetic.'},
    {speaker:'yumiko_mom',jp:'国語の宿題、音読、ちゃんと、できたかな、翔くん?本気で、頑張ったわよね、ママ、聞いていたわよ。',en:"Japanese homework — read-aloud done?, Sho serious-tried, Mom heard.",style:'Praising.'},
    {speaker:'sho_child',jp:'公園で、円形の遊具、本気で、楽しいんだよ、ママ、ぼく、お友達と、ぐるぐる、回って、本気で、絶対。',en:"Park — circular play serious-fun, friends-around, serious absolute.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'翔くん、好奇心、本気で、強いわね、ママ、感心するわよ、いろんなこと、探究する姿、本当に、誇り、絶対。',en:"Sho — curiosity strong, Mom admire, various-explore stance, proud absolute really.",style:'Tender close.'},
  ]},
  {id:'conv_07122',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、昨日、本気で、暑かったよね、葵で、メイちゃん、絶対、汗、いっぱい、かいちゃった、本当に、絶対、本気。',en:"Aoi — yesterday hot really serious, Aoi sweat-lot, really absolute.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'うん。常連さんから、お便り、いただいたのよ、葵で、本気で、嬉しい、メイちゃん、感謝、本当に、絶対、ありがたい。',en:"Yeah. Regular letter received serious, Aoi glad really gratitude absolute.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'葵の店、本気で、大通りに、面しているから、絶対、人通り、多いよね、メイちゃん、葵、繁盛、嬉しい。',en:"Aoi-store — big-street facing, foot-traffic many, Aoi popular glad.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'夜、お客様、本気で、帰宅、用心してくださいね、メイちゃん、葵で、心配、しちゃう、絶対、本気で、本当に、絶対。',en:"Night cust serious-return careful, Mei Aoi worry absolute serious really.",style:'Concerned.'},
    {speaker:'mei_romantic',jp:'雨で、彼との、デート、本気で、台無し、絶対、なっちゃった、葵、本気で、悲しい、ね、本当に、絶対、本気、絶対。',en:"Rain — bf-date ruined serious absolute, Aoi sad really absolute serious.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'お客様の中で、本気で、音読、楽しまれる方、メイちゃん、いらっしゃるのよ、葵で、本気で、面白い、絶対、本気で、本当に。',en:"Cust — read-aloud serious-enjoying, Mei exists, Aoi fun absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵で、本気で、円形のテーブル、絶対、新しく、入ったわよね、メイちゃん、お洒落で、感心、本当に、絶対、本気、本当に。',en:"Aoi — circular tables newly arrived, Mei stylish admire really absolute serious.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'メイちゃん、本気で、コーヒーの世界、探究、続けてるわよね、葵で、感心しちゃうわよ、絶対、本気で、本当に、感謝、絶対。',en:"Mei — coffee-world explore-continuing, Aoi admire, gratitude absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07123',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、昨日のテスト、本気で、暑かった部屋、エアコン、利いてなくて、絶対、つらかったよ、本気で、本当に、絶対。',en:"Riku — yesterday test hot-room AC-not-working, hard serious really absolute.",style:'Wry teen.'},
    {speaker:'riku_teen',jp:'うん。お祖母ちゃんから、お便り、本気で、いっぱい、絶対、もらってるよ、桜、本気で、嬉しい、本当に、感謝、絶対。',en:"Yeah. Granny letters serious-many absolute-received, Sakura glad really gratitude absolute.",style:'Tender.'},
    {speaker:'sakura_teen',jp:'大通り、本気で、車、結構、走ってるから、リク、絶対、注意して、渡ろうね、本気で、お互いに、約束、絶対。',en:"Big street cars many serious, Riku absolute-cautious cross, mutual-promise absolute serious.",style:'Direction.'},
    {speaker:'riku_teen',jp:'夜遅く、本気で、用心しろよ、桜、お父さんも、心配してたぞ、絶対、本気で、家まで、送るからな、絶対、約束。',en:"Late night — serious careful, Sakura Dad-worried, absolute home-send promise.",style:'Soft.'},
    {speaker:'sakura_teen',jp:'お弁当、雨で、本気で、台無しになっちゃったよ、リク、悲しい、絶対、本当に、本気で、明日、また、頼むね。',en:"Lunch — rain serious-ruined, Riku sad absolute really, tomorrow again-ask.",style:'Wistful.'},
    {speaker:'riku_teen',jp:'国語の授業、本気で、音読、苦手なんだぜ、桜、お前、得意だよな、本気で、絶対、すごい、本気で、感心してる、本当に。',en:"Japanese class — read-aloud serious-bad, you good, amazing absolute serious admire really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'校庭の、本気で、円形の花壇、新しく、絶対、できたよね、リク、お前、見た?きれいだよ、本気で、本当に、絶対。',en:"Schoolyard — circular flower-bed newly absolute-built, Riku saw?, pretty serious really absolute.",style:'Animated.'},
    {speaker:'riku_teen',jp:'お前、本気で、宇宙の探究、興味、絶対、あるよな、桜、本気で、すごい、夢、本当に、絶対、応援してるぜ、本気で、絶対。',en:"You — space-explore interest absolute exist, Sakura amazing dream really absolute cheer serious.",style:'Praising close.'},
  ]},
  {id:'conv_07124',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃の夏、本気で、暑かったよな、ばあさん、覚えてる?エアコン、なかった時代、絶対、大変だった、本気で、本当に。',en:"Youth summer hot serious, gran remember?, no-AC era hard absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。息子から、お便り、本気で、本当に、嬉しいわよね、覚えてる?あなた、本気で、絶対、毎月、楽しみにしていたわね。',en:"Yes. Son-letter glad really, remember?, dear monthly-fun-await serious absolute.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、大通り、本気で、人通り、多かったわよな、ばあさん、覚えてる?本気で、本当に、にぎやかな、時代、絶対。',en:"Youth big-street foot-traffic many serious, gran remember?, lively era absolute really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お祖父ちゃん、最近、本気で、ご用心、しないとね、足元、絶対、危ないわよ、本気で、お互いに、年だしね、絶対、本気。',en:"Grandpa lately — careful-must, feet absolute dangerous, mutual aged absolute serious.",style:'Concerned.'},
    {speaker:'hiroshi_elder',jp:'お祖母ちゃんの、お料理、本気で、台無しに、絶対、しないように、ばあさん、ありがたく、いただこうな、絶対、本気で。',en:"Granny cooking — ruin absolute-avoid, gran gratefully receive absolute serious.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'若い頃、二人で、本気で、絶対、音読、よく、したわよね、覚えてる?百人一首、本気で、楽しかったわよ、絶対、本気で。',en:"Youth two — read-aloud often, remember?, hyakunin-isshu serious-fun absolute really serious.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'家のテーブル、本気で、円形に、絶対、変えたいって、若い頃、夢、見たわよな、ばあさん、覚えてる?絶対、本気で、本当に。',en:"Home-table — circular absolute-change-want, youth dream remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'お祖父ちゃん、本気で、生涯の探究心、本当に、立派、ばあさん、誇りに、絶対、思っているわよ、本気で、感謝、本当に、絶対、本気。',en:"Grandpa — life-explore-heart splendid really, gran proud absolute, gratitude really absolute serious.",style:'Tender close.'},
  ]},
  {id:'conv_07125',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、昨日、本気で、暑かったわね、メイ姉さん、絶対、汗、いっぱい、かいちゃった、本当に、絶対、本気で、本気。',en:"Sho — yesterday hot serious, Mei-sis sweat-lot, really absolute serious.",style:'Wry.'},
    {speaker:'sho_child',jp:'メイ姉さん、お祖母ちゃんから、お便り、本気で、絶対、もらえたよ、嬉しい、ね、本当に、絶対、感謝、本気で、絶対。',en:"Mei-sis — Granny letter serious absolute-received, glad really gratitude absolute serious.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'公園に行く時、大通り、本気で、絶対、用心して、渡るのよ、翔くん、約束ね、絶対、本気で、本当に、ね、約束、絶対、本気。',en:"Park-going — big-street absolute-careful cross, Sho promise absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'お母さんに、絶対、用心、本気で、するように、メイ姉さん、いつも、本気で、言われてるよ、約束、絶対、本気で、ね。',en:"Mom-absolute careful serious-told, Mei-sis always promise absolute serious.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'メイ姉さんの服、雨で、本気で、台無しに、絶対、なっちゃった、翔くん、悲しい、ね、本当に、絶対、本気で、本当に。',en:"Mei-sis clothes — rain ruined absolute, Sho sad really absolute serious.",style:'Wistful.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、絵本、本気で、音読、絶対、上手に、なりたいよ、お願い、本当に、絶対、応援してね、本気で、絶対。',en:"Mei-sis — me picture-book read-aloud good-want, please really absolute cheer serious.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'公園の、円形の、本気で、お洒落な、ベンチ、メイ姉さん、好きなのよ、翔くん、本気で、座ろうね、絶対、本気で、本当に、絶対。',en:"Park — circular stylish bench, Mei-sis love, Sho sit absolute serious really.",style:'Soft.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、本気で、いろんなこと、探究したいよ、絶対、大きくなったら、絶対、いっぱい、勉強する、本気で、約束、絶対。',en:"Mei-sis — me various-explore want, big-grown absolute lots-study serious promise absolute.",style:'Earnest close.'},
  ]},
  {id:'conv_07126',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'今期の決算、本気で、絶対、悪く、下る方向、避けろ、本気で、頼んだぞ、絶対、社員、皆、本当に、絶対、本気、絶対だ。',en:"This-term settle — bad-down direction absolute-avoid, ask absolute, all-staff really serious absolute.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。社内方針、本気で、改めるべきところ、絶対、見直してまいります、本気で、感謝、しております、本当に、絶対、本気。',en:"Yes. Internal policy — improve-shoulds absolute-review, gratitude really absolute serious.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'メール、本気で、件名、絶対、わかりやすく、書け、本気で、社員、徹底させろ、本気で、絶対、頼んだぞ、絶対、本気で。',en:"Mail — subject absolute-clear write, staff thorough, ask serious absolute.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。来期の業績、悪化するにせよ、本気で、社員、絶対、守ってまいります、本気で、本当に、感謝、絶対、本気、本気、絶対。',en:"Yes. Next-term perf — even-worsen, staff absolute-guard serious gratitude really serious absolute.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'創業時の借家、本気で、社史に、絶対、残しておけ、本気で、頼んだぞ、絶対、これは、本気で、本当に、絶対、頼む、絶対。',en:"Founding rental — corp-hist absolute-keep, ask serious absolute really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、緊急召集、絶対、できる体制、整えております、本気で、危機管理、本当に、感謝、絶対、本気、絶対。',en:"Yes. Staff emergency-summon absolute-able system prep, crisis-mgmt gratitude really absolute serious.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'創業時の資料、本気で、絶対、社内、所蔵、貴重な財産だ、絶対、本気で、社員、皆、誇りに、思え、絶対、本気で、本当に。',en:"Founding archive — internal-own precious-asset absolute serious, all-staff proud absolute really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新人、本気で、結婚適齢期の年頃、絶対、いますね、社員、ライフ、本気で、応援してまいります、本気で、本当に、絶対。',en:"Yes. Newbie — marriage-age year-period absolute-exists, staff-life serious-cheer really absolute.",style:'Close.'},
  ]},
  {id:'conv_07127',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'株価、本気で、下る、絶対、流れに、なってきていますね、社員、皆、本気で、頑張ろうね、絶対、本当に、絶対、本気で。',en:"Stock — down-flow becoming, all-staff try absolute really absolute.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。お客様への対応、本気で、絶対、改めるべき部分、絶対、見直してまいります、本気で、感謝、しております、本当に、絶対。',en:"Yes. Cust-resp — improve-shoulds absolute-review, gratitude really absolute serious.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'メールの件名、本気で、絶対、明確化していきましょうね、社内、効率化、本気で、進めましょう、絶対、本当に、本気、絶対。',en:"Mail subject — clarify, internal-eff advance, absolute really absolute serious.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。雨にせよ、本気で、お客様、絶対、ご来店、いただきます、本気で、店舗、頑張ります、本気で、本当に、絶対、感謝。',en:"Yes. Even-rain — cust absolute-visit, store serious-try really absolute gratitude.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'新人さん、借家暮らし、本気で、応援していきましょう、社員、皆、本気で、人生、絶対、応援、本当に、絶対、本気、本気で。',en:"Newbie — rental-life cheer, all-staff life-cheer absolute really absolute serious.",style:'Tender.'},
    {speaker:'kenji_office',jp:'はい。緊急召集、本気で、対応できる体制、絶対、整えてまいります、本気で、感謝、しております、本当に、絶対、本気、絶対、本気。',en:"Yes. Emergency-summon resp absolute-prep, gratitude really absolute serious.",style:'Update.'},
    {speaker:'yuki_office',jp:'会社の所蔵品、本気で、整理しないとね、絶対、貴重な、ものが、多いから、本気で、感謝、しないと、絶対、本気、本気で、本当に。',en:"Co-owned items — organize, precious-many, gratitude must absolute serious really.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。社員、年頃で、お祝い、続いておりますよ、本気で、社内、絶対、温かい雰囲気、感じます、本気で、本当に、絶対、感謝、絶対。',en:"Yes. Staff — year-period-celes continuing, internal-warm-air serious-feel really absolute gratitude.",style:'Cheerful close.'},
  ]},
  {id:'conv_07128',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究、本気で、結果が、下る、絶対、可能性、考えておけ、本気で、頼んだぞ、絶対、覚悟、持っておけ、本気で、絶対。',en:"Ren — research result-down possibility consider, ask absolute resolve-have serious.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。仮説、本気で、絶対、改めるべきところ、見直してまいります、本気で、感謝、しております、本当に、絶対、本気、絶対。',en:"Yes. Hypothesis — improve-shoulds absolute-review, gratitude really absolute serious.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'論文の件名、本気で、絶対、わかりやすくしろ、本気で、査読者、絶対、好印象、本気で、頼んだぞ、絶対、本気で、絶対。',en:"Paper subject — clarify, reviewer favorable-impression ask absolute serious.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。結果、悪いにせよ、本気で、絶対、誠実に、報告してまいります、本気で、感謝、しております、本当に、絶対、本気、絶対。',en:"Yes. Result — even-bad, honest-report absolute, gratitude really absolute serious.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究室、本気で、借家のような状態、絶対、改善していけ、本気で、頼んだぞ、絶対、これは、絶対、本気で、頼む、絶対、本当に。',en:"Lab — rental-like state absolute-improve, ask absolute serious really absolute.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。学会の召集、本気で、絶対、参加させていただきます、本気で、感謝、しております、本当に、絶対、本気、絶対、本気、絶対。',en:"Yes. Conf-summon — absolute-attend permit, gratitude really absolute serious.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'大学の所蔵資料、本気で、絶対、活用しろ、貴重なもの、絶対、君の研究に、本気で、活かせるからな、絶対、頼んだぞ、本気で。',en:"Uni-owned mat — absolute-utilize, precious, your research-utilize absolute ask serious.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。研究室の同期、本気で、結婚適齢期の年頃、絶対、ですよね、本気で、絶対、応援、しております、本気で、本当に、絶対、本気で、絶対。',en:"Yes. Lab-cohort — marriage-age year-period absolute, cheer absolute serious really absolute.",style:'Earnest close.'},
  ]},
  {id:'conv_07129',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'犯罪率、本気で、絶対、下る、傾向、続いております、本気で、市民の皆様、感謝、絶対、本当に、本気で、本気、絶対、本気で。',en:"Crime-rate — down-trend continuing, citizens-gratitude absolute really serious.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。当社、警察対応、本気で、絶対、改めるべきところ、絶対、見直してまいります、本気で、感謝、本当に、絶対、本気で、絶対。',en:"Yes. Our police-resp — improve-shoulds absolute-review, gratitude really absolute serious.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察への通報、本気で、件名、絶対、明確に、お伝えください、本気で、迅速対応、絶対、可能になります、本気で、本当に、絶対、本気で、絶対。',en:"Police-report — subject clear-convey, swift-resp absolute-possible serious really absolute.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。当社、緊急事態にせよ、本気で、絶対、警察様、ご協力、お願いいたします、本気で、本当に、絶対、感謝、本気で、絶対、本気。',en:"Yes. Our co — even-emergency, police-coop ask, gratitude really absolute serious.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'容疑者、借家を、本気で、本拠地、絶対、にしておりました、本気で、捜査、進めております、本気で、本当に、絶対、感謝、本気、絶対。',en:"Suspect — rental base absolute-was, inv-advance serious really absolute gratitude.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察の召集に、本気で、絶対、応じてまいります、当社、本気で、頑張ります、本気で、本当に、感謝、絶対、本気で、絶対。',en:"Yes. Police-summon respond absolute, our co try serious really absolute gratitude.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'証拠品の所蔵、本気で、警察、絶対、厳重に、しております、本気で、本当に、感謝、しております、絶対、本気で、本気、絶対、本気。',en:"Evidence storage — police strict absolute, gratitude really absolute serious.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。社員、結婚適齢期の年頃、本気で、絶対、警察関連、結婚式も、活発化、本気で、本当に、感謝、絶対、本気、絶対、本気で、本当に。',en:"Yes. Staff — marriage-age, police-related wedding also-active serious gratitude really absolute.",style:'Close.'},
  ]},
  {id:'conv_07130',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業時、業績が、下る時、本気で、絶対、苦労したぞ、お父さん、覚えてる?お前にも、伝えたい、本気で、絶対、本当に、絶対、本気。',en:"Founding — perf-down time hardship, Dad remember?, you-convey want absolute really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、社是、改めるところがあれば、絶対、見直してまいります、本気で、感謝、本当に、絶対、本気。',en:"Yes. Since Dad-era — motto improve-shoulds absolute-review, gratitude really absolute serious.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'創業時のメールの件名、本気で、私たち、絶対、こだわって、お得意様、本気で、絶対、ご好印象を、与えてきたぞ、絶対、本気、絶対。',en:"Founding mail-subject — us insistent absolute, VIP favorable-impression-given absolute serious.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。本気で、困難な、時代にせよ、絶対、当社、生き残れる、力、本気で、お父さんの代から、絶対、継承してきました、本気で、本当に、絶対。',en:"Yes. Even-hard era, our co survive-power, since Dad-era absolute-inherit, really absolute serious.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'創業時の借家、本気で、お父さん、絶対、よく、覚えているぞ、お前にも、見せてやりたい、本気で、絶対、本当に、絶対、本気、絶対。',en:"Founding rental — Dad well-remember absolute, you-show-want serious absolute really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんからの召集、本気で、絶対、いつでも、応じます、本気で、感謝、しております、本気で、本当に、絶対、本気、絶対、本当に。',en:"Yes. Dad-summon — anytime respond absolute, gratitude really absolute serious.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'創業者の遺品、本気で、社内、絶対、所蔵、本当に、貴重な財産だ、お前にも、本気で、絶対、守って欲しい、本気で、絶対、頼んだぞ。',en:"Founder-relics — internal absolute-own precious-asset, you guard-want absolute serious ask.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さん、創業時、本気で、年頃の若さ、絶対、頑張ってきたんですよね、お母さんから、本気で、絶対、聞いております、本当に、感謝、絶対。',en:"Yes. Dad — founding-time year-period youth tried, Mom-heard absolute serious, gratitude really.",style:'Wise close.'},
  ]},
  {id:'conv_07131',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、容疑者、本気で、絶対、生き残るために、本気で、犯行を、絶対、続けた、本気で、本当に、悲しい背景、絶対、本気で、絶対。',en:"Case — suspect serious-survive serious-crime continued, sad bg absolute serious.",style:'Calm.'},
    {speaker:'ren_uni',jp:'内陸の村、本気で、被害、絶対、深刻でしたね、警察、本気で、絶対、対応、感謝、しております、本気で、本当に、絶対、感謝。',en:"Inland village — damage severe, police-resp gratitude really absolute serious.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。戦時の空襲経験者、本気で、絶対、本件にも、関わっていた、ご縁、ありました、本気で、本当に、絶対、感謝、本気で、絶対。',en:"Yes. Wartime air-raid-survivor — this case absolute-involved tie, gratitude really absolute serious.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'警察、本気で、誠実に、絶対、徹した、対応、本当に、感心、しております、絶対、市民、皆、感謝、本気で、絶対、本気で、絶対。',en:"Police — honest-persisted resp, admire absolute serious, citizens-gratitude absolute.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。証拠品、本気で、絶対、元素分析、最新の技術で、進めております、本気で、感謝、絶対、本気で、本当に、絶対、本気、絶対。',en:"Yes. Evidence — element-analysis latest-tech advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'最近、王室関係者、本気で、絶対、警察、警備、強化してますよね、本気で、本当に、本気で、絶対、お疲れ様、感謝、絶対、本気。',en:"Lately royal-family — police-guard strengthening, tired-thanks gratitude absolute serious.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。報道、本気で、絶対、画一的に、ならないよう、警察、本気で、配慮、続けております、本気で、感謝、本当に、絶対、本気、絶対。',en:"Yes. Reporting — uniform-avoid, police-consider continue, gratitude really absolute serious.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'メディアの誇張表現、本気で、絶対、控えるべきですね、警察、本気で、絶対、慎重に、対応、感謝、本気で、本当に、絶対、本気、絶対。',en:"Media exaggeration — refrain should, police careful-resp, gratitude really absolute serious.",style:'Reflective close.'},
  ]},
  {id:'conv_07132',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses historical research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、戦時、本気で、生き残るために、人々、絶対、苦労した歴史、論文で、扱っていましたね、本気で、立派、絶対、本当に。',en:"Ren — wartime — survive people-hardship hist, paper-handled, splendid absolute really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。内陸の地域、本気で、空襲、絶対、被害、深刻でしたね、論文で、扱いました、本気で、深い、研究、できました、本当に、絶対。',en:"Yes. Inland-region — air-raid damage severe, paper-handled, deep research absolute serious really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'空襲下、本気で、絶対、人々が、生き残った歴史、論文で、扱っていましたね、本気で、本当に、感動的な、内容、絶対、立派、本気で、絶対。',en:"Under air-raid — survived hist paper-handled, moving content absolute splendid serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。当時、信念を、本気で、絶対、徹した知識人、論文で、扱いました、本気で、本当に、印象的な、人物、絶対、本気で、感心、絶対。',en:"Yes. Era — belief persisted intellectuals, paper-handled, striking figures absolute serious admire.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、元素研究、本気で、軍事利用、絶対、された歴史、論文で、扱っていましたね、本気で、本当に、深い、研究、絶対、立派、絶対、本気。',en:"Wartime — element-research military-used hist, paper-handled, deep research absolute splendid.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。当時、王室の動向、本気で、世論に、絶対、影響、与えていましたね、論文で、扱いました、本気で、本当に、感謝、絶対、本気で、絶対。',en:"Yes. Era — royal-trend influenced public-opinion, paper-handled, gratitude really absolute serious.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦中、画一的な、本気で、報道、絶対、続いた、論文で、論じていましたね、本気で、本当に、立派、絶対、視野、広い、本気で、感心、絶対。',en:"Wartime — uniform reporting continued, paper-argued, splendid view broad absolute admire.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。当時、誇張された、本気で、宣伝、絶対、社会、影響、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、絶対、本気、絶対。',en:"Yes. Era — exaggerated propaganda soc-impact, paper-handled, deep research absolute gratitude.",style:'Earnest close.'},
  ]},
  {id:'conv_07133',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、重い病から、本気で、絶対、生き残る患者さん、本当に、勇気、ある方々ですね、絶対、感謝、しております、本気で、本当に、絶対、本気。',en:"Ren — heavy-disease survive patients, courage, gratitude really absolute serious.",style:'Calm.'},
    {speaker:'ren_uni',jp:'内陸の地方、本気で、医療アクセス、絶対、課題ですね、先生、本気で、本当に、感謝、しております、医療、続けて、絶対、本気で、絶対。',en:"Inland local — med-access issue, sensei serious gratitude really absolute med-continue absolute.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。戦時、空襲下の医療、本気で、絶対、医師、貢献、本当に、立派でした、本気で、本当に、感謝、しております、絶対、本気、絶対、本気。',en:"Yes. Wartime — air-raid med, doctor-contrib splendid, gratitude really absolute serious.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療研究、本気で、絶対、徹した先生方、本当に、立派ですね、絶対、感謝、しております、本気で、本当に、頭が下がります、絶対、本気で、本当。',en:"Med-research — persisted senseis splendid, gratitude absolute serious really humbled.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。新薬の元素分析、本気で、絶対、進歩、しております、本気で、医療界、本当に、活気、感じます、絶対、本気で、本当に、感謝、絶対。',en:"Yes. New-drug element-analysis advancing, med-world energy-feel really absolute serious gratitude.",style:'Informative.'},
    {speaker:'ren_uni',jp:'王室、本気で、絶対、医療研究、絶対、支援している話、ニュースで、見ました、本気で、本当に、嬉しい、絶対、感謝、本気で、絶対、本気。',en:"Royal — med-research support, news-saw, glad really absolute gratitude serious.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。医療、本気で、画一化、絶対、避けるべきですね、患者さん、本気で、お一人、絶対、お一人、違いますからね、本気で、本当に、絶対、感謝。',en:"Yes. Med — uniform-avoid should, each-patient different, gratitude really absolute serious.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療情報の誇張、本気で、絶対、社会的に、絶対、問題ですよね、先生、本気で、正しい情報、必要、本気で、本当に、感謝、絶対、本気で、絶対。',en:"Med-info exaggeration — soc-issue, sensei correct-info needed, gratitude really absolute serious.",style:'Reflective close.'},
  ]},
  {id:'conv_07134',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp strategy',lines:[
    {speaker:'hiroshi_boss',jp:'当社、業界で、本気で、絶対、生き残る、力、絶対、磨いていけ、本気で、頼んだぞ、絶対、社員、皆、本気で、頑張れ、絶対、本気、絶対。',en:"Our co — industry-survive power polish, ask absolute serious all-staff try.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。内陸の市場、本気で、絶対、開拓してまいります、本気で、新規事業、絶対、進めます、本気で、本当に、感謝、絶対、本気、本気で。',en:"Yes. Inland-market — pioneer, new-biz advance, gratitude really absolute serious.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'創業者、戦時、本気で、空襲を、絶対、生き延びた、強い人物、本気で、お母さんから、絶対、聞いている、本気で、本当に、絶対、誇り。',en:"Founder — wartime air-raid survived strong figure, Mom-heard absolute serious really proud.",style:'Reflective.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、信念を、絶対、徹した働き方、絶対、当社の伝統です、本気で、本当に、感謝、しております、絶対、本気、絶対、本気。',en:"Yes. Staff — belief-persisted work-way our trad, gratitude really absolute serious.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'新製品、本気で、絶対、最新の元素、技術、絶対、活用しろ、本気で、頼んだぞ、絶対、業界、絶対、リードしていけ、本気で、絶対、本気。',en:"New product — latest element-tech absolute-utilize, industry-lead absolute, ask serious.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。王室御用達、本気で、絶対、目指したいですね、本気で、当社、ブランド、絶対、上がりますね、本気で、本当に、感謝、本気、絶対。',en:"Yes. Royal-warrant — aim-want, our brand rise absolute, gratitude really absolute serious.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'画一的な、本気で、絶対、サービス、避けろ、本気で、お客様、本気で、絶対、個別対応、徹底だ、本気で、頼んだぞ、絶対、本当に、絶対。',en:"Uniform service — avoid, cust individual-resp thorough absolute, ask serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。広告、本気で、絶対、誇張、避けるよう、社員、徹底させております、本気で、感謝、本当に、絶対、本気で、頑張ります、絶対、本気、絶対。',en:"Yes. Ad — exaggeration-avoid, staff-thorough, gratitude really absolute serious.",style:'Close.'},
  ]},
  {id:'conv_07135',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、戦時、本気で、絶対、生き残る、女性たち、論文で、丁寧に、扱っていましたね、本気で、立派、絶対、本当に、感心、本気で、絶対。',en:"Sakura — wartime survive women, paper carefully-handled, splendid absolute really admire.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。内陸の村、本気で、絶対、空襲、被害、論文で、扱いました、本気で、本当に、辛い、歴史、絶対、深い、研究、本気で、感謝、絶対、本気。',en:"Yes. Inland village — air-raid damage paper-handled, hard hist absolute deep research gratitude.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'空襲時の医療、本気で、論文で、絶対、扱っていましたね、桜さん、本気で、本当に、視野、広い、絶対、立派、本気で、感心、絶対、本気。',en:"Air-raid med — paper-handled, view broad splendid absolute serious admire.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。当時、信念を、本気で、絶対、徹した、市井の人々、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気で、絶対、本気。',en:"Yes. Era — persisted-commoners paper-handled, deep research absolute serious gratitude.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時、元素研究、本気で、絶対、軍事に、論文で、扱っていましたね、本気で、本当に、深い、研究、絶対、感心、本気で、本当に、立派、絶対。',en:"Wartime element-research — military paper-handled, deep research admire absolute splendid.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。各国の王室、本気で、絶対、戦時、影響力、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気で、本気、絶対、本気。',en:"Yes. Each-country royal — wartime influence paper-handled, deep research absolute gratitude.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦中、本気で、画一的な、絶対、思想統制、論文で、扱っていましたね、本気で、視野、本当に、広い、立派、絶対、感心、本気、絶対、本気で、本当に。',en:"Wartime uniform-thought-control — paper-handled, view broad splendid absolute admire.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦時、本気で、誇張、絶対、宣伝、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気で、本当に、立派、絶対、本気、絶対。',en:"Yes. Wartime — exaggeration-propaganda paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07136',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、彼、本気で、絶対、短歌、習い始めたんだって、葵で、本気で、嬉しい、絶対、本当に、感謝、本気、本当に、絶対、本気で。',en:"Aoi — bf serious-tanka learning-start, Aoi glad absolute really gratitude serious.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。新しい、本気で、防水のエプロン、絶対、買ったわよ、葵で、メイちゃん、本気で、感心しちゃう、絶対、本当に、本気、本気で。',en:"Yeah. New waterproof apron — bought, Aoi Mei admire absolute serious really.",style:'Cheerful.'},
    {speaker:'mei_romantic',jp:'港の漁船、本気で、絶対、たくさん、見えるよね、葵、メイちゃん、本気で、ロマンチック、絶対、感じる、本気、本気で、本当に、絶対。',en:"Port — boats many-see, Aoi Mei romantic-feel absolute serious really.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'対岸の景色、本気で、葵で、絶対、見えるんだよ、メイちゃん、本気で、本当に、お洒落、絶対、感じる、本気、本気で、本当に、絶対、本気。',en:"Other-shore view — Aoi-see, Mei stylish-feel absolute serious really.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、華人のお客様、増えてきたわよね、メイちゃん、本気で、嬉しい、絶対、感謝、本気、本気で、本当に、絶対。',en:"Aoi — Chinese cust increased, Mei glad absolute gratitude serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'バードウォッチング、本気で、絶対、最近、メイちゃん、はまってるって、葵、本気で、本当に、応援、絶対、本気、本気で、絶対、本気で。',en:"Bird-watching — lately Mei hooked, Aoi cheer absolute serious really.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'劇団の初演、本気で、絶対、楽しみだよね、葵、メイちゃん、葵で、お祝い、本気で、絶対、しようね、本気、本気で、本当に、絶対。',en:"Troupe-premiere — fun, Aoi Mei Aoi-cele absolute serious really.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'葵の店、本気で、絶対、街、見渡せる、場所、なのよ、メイちゃん、本気で、自慢、絶対、本気、本気で、本当に、絶対、本気、絶対。',en:"Aoi-store — town-overlook place, Mei boast absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07137',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お父さん、本気で、短歌、絶対、好きなんだよね、ぼく、本気で、教えてもらいたい、絶対、本気、本気で、本当に、絶対、本気。',en:"Mom — Dad tanka love absolute, me serious-teach-want absolute really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'うん。お父さんの傘、本気で、防水で、絶対、雨でも、平気だってよ、翔くん、本気で、すごいわね、絶対、本当に、本気で、絶対。',en:"Yes. Dad-umbrella waterproof, rain-fine, Sho amazing absolute really.",style:'Soft.'},
    {speaker:'sho_child',jp:'夏休み、ぼく、本気で、漁船、絶対、見たいよ、ママ、お祖父ちゃんち、本気で、行きたい、絶対、本気、本気で、お願い、絶対。',en:"Summer — me boats see-want, Mom Grandpa's go-want absolute serious please.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'川の対岸、本気で、絶対、橋を渡って、行けるのよ、翔くん、家族で、行きましょうね、本気で、絶対、本気、本気で、本当に、絶対。',en:"River other-shore — bridge-cross go-able, Sho family-go, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'お父さん、本気で、絶対、華人のお友達、いるんだって、ぼく、本気で、会ってみたいよ、絶対、本気、本気で、お願い、本当に、絶対。',en:"Dad — Chinese friend exists, me meet-want absolute serious please really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'夏休み、本気で、絶対、バードウォッチング、家族で、絶対、行きたいわね、翔くん、本気で、楽しみ、本気、本気で、本当に、絶対。',en:"Summer — bird-watching family-go-want, Sho fun absolute serious really.",style:'Cheerful.'},
    {speaker:'sho_child',jp:'文化祭の初演、本気で、絶対、お父さんと、ママに、来てもらいたいよ、本気で、約束、絶対、本気、本気で、本当に、絶対、本気で。',en:"Cult-fest premiere — Dad-Mom come-want, promise absolute serious really.",style:'Earnest.'},
    {speaker:'yumiko_mom',jp:'山の頂上、本気で、絶対、街、見渡すこと、できるわよ、翔くん、家族で、絶対、登りたいわね、本気で、本気、本気で、本当に、絶対。',en:"Mt-summit — town-overlook able, Sho family-climb-want absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07138',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、国語で、本気で、短歌、書く授業、絶対、あったよね、お前、覚えてる?本気で、難しかったよ、絶対、本気、本気で、本当に。',en:"Riku — Japanese-class tanka-write class, you remember?, hard serious really absolute.",style:'Reflective teen.'},
    {speaker:'riku_teen',jp:'うん。新しいスマホ、本気で、防水で、絶対、雨でも、平気だぜ、桜、お前、買い替え、考えてる?',en:"Yeah. New phone waterproof, rain-fine, Sakura you-replace consider?",style:'Casual.'},
    {speaker:'sakura_teen',jp:'港、本気で、絶対、漁船、いっぱい、見えるよね、リク、修学旅行、行ってみたいよね、本気で、絶対、楽しみ、本気、本当に、絶対。',en:"Port — boats many-see, Riku school-trip go-want, fun absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'川の対岸、本気で、絶対、桜並木、綺麗だよな、桜、お前と、本気で、絶対、お花見、行きたいぜ、本気、本気で、本当に、絶対。',en:"River other-shore — cherry-row pretty, Sakura with-you hanami-go-want absolute serious really.",style:'Wistful.'},
    {speaker:'sakura_teen',jp:'地理の授業で、本気で、絶対、華人の歴史、勉強したよ、リク、お前、興味、出てきた?本気で、絶対、深い、本気、本気で、本当に、絶対。',en:"Geo-class — Chinese-hist studied, Riku interest?, deep absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'生物部で、本気で、絶対、バードウォッチング、行ったぜ、桜、お前も、興味、ある?本気で、絶対、楽しい、本気、本気で、本当に、絶対。',en:"Bio-club — bird-watching went, Sakura interest?, fun absolute serious really.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'演劇部、本気で、絶対、文化祭で、初演するんだ、リク、お前、応援、来てね、本気で、絶対、約束、本気、本気で、本当に、絶対。',en:"Drama-club — cult-fest premiere, Riku cheer-come, promise absolute serious really.",style:'Eager.'},
    {speaker:'riku_teen',jp:'屋上から、本気で、絶対、街、見渡すと、本当に、気持ちいいんだぜ、桜、お前、一緒に、行こうな、本気で、絶対、約束、本気で、絶対。',en:"From-roof — town-overlook gratifying really, Sakura together-go promise absolute serious.",style:'Eager close.'},
  ]},
  {id:'conv_07139',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、短歌、二人で、よく、詠んだわよな、ばあさん、覚えてる?本気で、本当に、絶対、思い出深い、本気、絶対。',en:"Youth — tanka two often-composed, gran remember?, deep-memory absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。お祖父ちゃん、本気で、防水の腕時計、絶対、長年、使っていたわよね、覚えてる、あなた?本気で、絶対、思い出、本当に、絶対、本気。',en:"Yes. Grandpa — waterproof-watch long-used, remember dear?, memory absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昔、本気で、漁船、絶対、二人で、よく、見たわよな、ばあさん、覚えてる?本気で、本当に、ロマンチック、絶対、本気、絶対、本気で。',en:"Old — boats two often-saw, gran remember?, romantic absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、川の対岸、本気で、絶対、二人で、デート、したわよね、覚えてる、あなた?本気で、本当に、ロマンチック、絶対、本気、本気、絶対。',en:"Youth — river other-shore two-dated, remember dear?, romantic absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、お祖父ちゃん、本気で、華人の友達、絶対、たくさん、いたんだよな、ばあさん、覚えてる?本気で、絶対、本気で、本当に、絶対、本気。',en:"Youth Grandpa — Chinese friends many, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、バードウォッチング、二人で、よく、行ったわよね、覚えてる、あなた?本気で、絶対、楽しかった、絶対、本気、本気で。',en:"Youth — bird-watching two often-went, remember dear?, fun absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'息子の劇、本気で、絶対、初演、家族で、行ったよな、ばあさん、覚えてる?本気で、本当に、感動した、絶対、本気、絶対、本気で、絶対。',en:"Son's play — premiere family-went, gran remember?, moved absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、屋上から、本気で、絶対、街、見渡したわよね、覚えてる、あなた?本気で、本当に、ロマンチック、絶対、本気、本気で、本当に、絶対。',en:"Youth — roof-from town-overlooked, remember dear?, romantic absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07140',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、店内に、本気で、絶対、短歌、お客さんから、絶対、募集する企画、面白そうやで、葵さん、本気で、本気、絶対、本当に、本気。',en:"Aoi — interior tanka cust-recruit plan fun, Aoi serious absolute really.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。屋外席用、本気で、防水のテーブルカバー、絶対、買いましょう、葵で、絶対、お客様、本気で、喜んでくださいそう、本気、本当に、絶対。',en:"Yes. Outdoor — waterproof cover absolute-buy, Aoi cust-glad serious really absolute.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'港の漁船、本気で、絶対、新鮮な魚、仕入れる方向で、葵さん、本気で、進めよか、本気、本気で、本当に、絶対、本気で、絶対、本気。',en:"Port boats — fresh fish source-direction, Aoi serious-advance, really absolute serious.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。対岸の町とも、本気で、絶対、コラボイベント、絶対、葵で、企画したいですね、本気で、本気、本気で、本当に、絶対、本気で、絶対。',en:"Yes. Other-shore-town — collab-event Aoi-plan-want, serious really absolute.",style:'Reflective.'},
    {speaker:'daichi_kansai',jp:'華人観光客、本気で、絶対、増えてきとるな、葵さん、メニュー、絶対、中国語表記も、本気で、加えよか、本気、本気で、本当に、絶対、本気で。',en:"Chinese tourists increasing, Aoi menu Chinese-also add?, serious really absolute.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。バードウォッチング愛好家、本気で、葵で、絶対、お招きする、特別な、コーナー、絶対、設けたいです、本気で、本気、本気で、本当に、絶対。',en:"Yes. Bird-watch fans — Aoi-invite special-corner set-want absolute serious really.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'新メニュー、本気で、絶対、葵で、初演、絶対、お客さん、感動、本気で、するで、葵さん、本気で、本気、本気で、本当に、絶対、本気で。',en:"New menu — Aoi premiere, cust moved serious, Aoi serious really absolute.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。屋上テラス、本気で、絶対、街、見渡せる、お洒落な、本気で、空間、絶対、目指したいですね、葵で、本気で、本気、本気で、本当に、絶対。',en:"Yes. Roof-terrace — town-overlook stylish space aim-want, Aoi serious really absolute.",style:'Warm close.'},
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

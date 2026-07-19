import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_353 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['閉まっ','殴り','貰え','好ましく','金魚','嘆い','見上げる','なおす']
const B_T = ['宅地','本数','常々','急行','チャージ','有給','待ち時間','少額']
const C_T = ['断固','刻ま','在学','将校','忠誠','一変','苦難','体格']
const D_T = ['見捨て','テック','送り出し','王家','シリアル','樽','鍛える','野心']

const data = [
  {id:'conv_07021',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、近所のお店、もう、閉まってたよ、買い物、明日にしようね。',en:"Mom — neighbor-store already-closed, shopping, tomorrow.",style:'Wry child.'},
    {speaker:'yumiko_mom',jp:'うん。お友達と、殴り合いの喧嘩、しないでね、約束よ、翔くん。',en:"Yes. Friend — punching-fight, don't, promise, Sho.",style:'Direction.'},
    {speaker:'sho_child',jp:'お小遣い、もう少し、貰えれば、お年玉、貯金できるんだけどな、ママ。',en:"Allowance — bit-more gettable, save-able, Mom.",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'最近、ニュース、好ましくない事件、増えてるわね、心配だわ、本当に。',en:"Lately news — bad-incidents increase, worry really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'金魚、ぼく、お祭りで、もらったよ、ママ、お水替え、お願いね。',en:"Goldfish — fest received, Mom, water-change please.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お母さん、雨で、洗濯物、ダメになっちゃって、嘆いたわよ、本当に、悲しいわ。',en:"Mom — rain laundry-ruined, lamented, sad really.",style:'Wry.'},
    {speaker:'sho_child',jp:'空を見上げると、夜、お星さま、たくさん、見えるんだね、綺麗だよ、本当に。',en:"Sky look-up — night, stars many-visible, pretty really.",style:'Awe.'},
    {speaker:'yumiko_mom',jp:'お父さんの腕時計、なおしてもらうから、心配しないでね、翔くん、安心して。',en:"Dad's watch — get-fixed, don't worry, Sho, relax.",style:'Tender close.'},
  ]},
  {id:'conv_07022',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、葵で、店、早く閉まってたよね、昨日、何かあったの?',en:"Aoi — Aoi-store closed-early yesterday, something?",style:'Curious.'},
    {speaker:'aoi_barista',jp:'うん。酔ったお客様、殴り合いの寸前、本当に、危険な状況だったの。',en:"Yeah. Drunk cust — punching-fight near, dangerous really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵、明日、早めに、抜けさせて、貰えれば、嬉しいんだけど、デートなの。',en:"Aoi — tomorrow early-leave gettable glad, date.",style:'Bashful.'},
    {speaker:'aoi_barista',jp:'最近、お客様、好ましくない態度、たまに、いらっしゃるのよ、葵で。',en:"Lately cust — bad-attitude occasional come, in Aoi.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'金魚すくい、彼と、夏祭りで、はしゃいでたの、本当に、可愛い思い出。',en:"Goldfish-scoop — with bf fest excited, cute memory really.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'お客様、長く来てくれてた方、引っ越されたの、葵で、嘆いてるよ、私。',en:"Cust — long-keeping, moved, Aoi, lamenting me.",style:'Wistful.'},
    {speaker:'mei_romantic',jp:'葵を見上げると、いつも、頼りになる存在だよね、本当に、感謝してる。',en:"Aoi look-up — always reliable, gratitude really.",style:'Tender.'},
    {speaker:'aoi_barista',jp:'壊れたコーヒーマシン、業者に、なおしてもらった、葵で、また使えるよ、嬉しい。',en:"Broken machine — vendor-fixed, Aoi usable again, glad.",style:'Cheerful close.'},
  ]},
  {id:'conv_07023',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、図書室、もう閉まってたよ、宿題、家でやるしかないね、お互いに。',en:"Riku — library already-closed, homework home-only, mutual.",style:'Wry teen.'},
    {speaker:'riku_teen',jp:'うん。校内で、殴り合い、絶対、ダメだぞ、桜、お互いに、気をつけような、本当に。',en:"Yeah. In-school punching absolute no, Sakura mutual-careful really.",style:'Direction.'},
    {speaker:'sakura_teen',jp:'放課後、お母さんから、お小遣い、貰えれば、リクと、カフェ、行きたいよね。',en:"Post-school — Mom allowance gettable, with Riku cafe-go.",style:'Eager.'},
    {speaker:'riku_teen',jp:'お前の彼氏、好ましくない人だったら、絶対、止めるからな、桜、本当に、約束。',en:"Your bf — bad-person if absolute stop, Sakura promise really.",style:'Soft.'},
    {speaker:'sakura_teen',jp:'夏祭り、金魚すくいで、私、上手だったんだよ、リク、見てた、お前、覚えてる?',en:"Fest goldfish — me-good, Riku saw?, remember?",style:'Bright.'},
    {speaker:'riku_teen',jp:'試験前、不安で、嘆いてた友達、声、かけてあげたんだ、桜、お前にも、優しくね。',en:"Pre-test — anxiety-lamenting friend, voice-gave, also you-gentle.",style:'Tender.'},
    {speaker:'sakura_teen',jp:'夜、星を、見上げると、すごく、心、落ち着くよね、リク、お前も、感じる?',en:"Night — stars look-up, heart-calm, Riku also-feel?",style:'Reflective.'},
    {speaker:'riku_teen',jp:'自転車のタイヤ、なおしてもらったぜ、桜、お父さんに、お礼、言わないとな。',en:"Bike tire — got-fixed, Sakura, Dad-thank must.",style:'Earnest close.'},
  ]},
  {id:'conv_07024',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'駅前の商店、もう、閉まってたな、ばあさん、寂しい時代になったわよな、本当に。',en:"Stn-front shops — already-closed, gran, lonely-era really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、殴り合いの喧嘩、見たこと、何度かあったわよね、覚えてる?',en:"Yes. Youth — punching-fight saw, several-times, remember?",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'息子から、孫の写真、貰えれば、嬉しいんだよ、最近、本当に、待ち遠しい。',en:"Son — grandkid-photo gettable glad, lately wait-long really.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'最近、世間、好ましくない流れ、続いているわよね、私たち、心配だわ。',en:"Lately society — bad-flow continues, worry.",style:'Concerned.'},
    {speaker:'hiroshi_elder',jp:'お祖父ちゃんち、金魚、たくさん、飼ってたよな、ばあさん、覚えてる、池に。',en:"Grandpa's — goldfish lots-kept, gran remember?, pond.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'息子が、独立した時、嘆いたわよね、私たち、巣立ち、本当に、寂しかったわ。',en:"Son — independent lamented, leaving-nest lonely really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'庭の木、見上げると、長く、生きてきた木、本当に、立派だな、自然って、すごい。',en:"Garden tree look-up — long-lived, splendid, nature amazing.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'古い時計、なおしてもらえた、あなた、嬉しいわよね、ご先祖の、形見だものね。',en:"Old clock — got-fixable, dear glad, ancestor-keepsake.",style:'Tender close.'},
  ]},
  {id:'conv_07025',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さんち、もう、戸が閉まってたら、メイ姉さん、寝てるかも、ね。',en:"Sho — Mei-sis door-closed-if, sleeping maybe.",style:'Soft.'},
    {speaker:'sho_child',jp:'お友達と、殴り合い、絶対、しないって、メイ姉さん、約束するよ、本当に、絶対。',en:"Friend — punching absolute don't, Mei-sis promise really.",style:'Earnest child.'},
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さんから、お土産、貰えれば、嬉しいよね、楽しみにしてて、ね。',en:"Sho — Mei-sis souv gettable glad, fun-await.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さんに、好ましくない態度、ぼく、絶対、しないからね、約束、ね、絶対。',en:"To Mei-sis — bad-att absolute don't, promise absolute.",style:'Earnest.'},
    {speaker:'mei_romantic',jp:'お祭りの金魚、メイ姉さんも、ほしいなって、思ってたのよ、本当に、可愛いよね。',en:"Fest goldfish — Mei-sis-want-thought, cute really.",style:'Soft.'},
    {speaker:'sho_child',jp:'お母さん、嘆いて、いたよ、ぼくのこと、心配で、メイ姉さん、ぼく、もっと、頑張るね。',en:"Mom — lamented, me-worry, Mei-sis, more-try.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'公園の桜、見上げると、本当に、綺麗ね、翔くん、メイ姉さんと、写真、撮ろう。',en:"Park sakura look-up — pretty really, Sho, photo-take.",style:'Bright.'},
    {speaker:'sho_child',jp:'ぼくの自転車、お父さん、なおしてくれたんだ、メイ姉さん、嬉しいよ、見て、ね。',en:"My bike — Dad fixed, Mei-sis glad, see.",style:'Proud close.'},
  ]},
  {id:'conv_07026',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'新規宅地開発、住宅事業部、慎重に、進めろ、当社の評判、大事だ。',en:"New residential dev — housing-dept, careful advance, rep vital.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。生産ライン、本数、見直してまいります、効率化、必要ですね、本当に。',en:"Yes. Prod-line counts — review, eff needed really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'常々、社員に、お礼、伝えるよう、心がけている、感謝の気持ち、絶対、忘れるな。',en:"Always — staff thanks-convey mindful, gratitude don't-forget absolute.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。打ち合わせ、急行で、来週、向かいます、お得意様の地方、ですね。',en:"Yes. Meet — express next-week head, VIP-locale.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'交通系ICカード、チャージ、社用、必ず、別会計に、しろ。',en:"IC-card charge — co-use separate-acc must.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員の有給休暇、取得、促進中です、健康、第一に。',en:"Yes. Staff paid-leave — promote, health-first.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'お客様の待ち時間、最小限に、抑えろ、現場、徹底させろ。',en:"Cust wait-time — minimum, on-site thorough.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。少額の経費、自動化、進めてまいります、本当に、急務ですね。',en:"Yes. Small expenses — automate, urgent really.",style:'Close.'},
  ]},
  {id:'conv_07027',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'宅地造成の工事、近隣の方々への、説明会、設けましょうね、丁寧に。',en:"Residential constr — neighbor explainer-meet set, careful.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。商品の本数、生産計画、来期、見直す予定です、慎重に。',en:"Yes. Product counts — next-term review plan, careful.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'常々、お客様の声、社員に、共有していきましょうね、本当に、大事よ。',en:"Always — cust-voice staff-share, vital really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。今日は、急行電車で、お得意様、お見送り、いたします。',en:"Yes. Today — express train, VIP-see-off.",style:'Update.'},
    {speaker:'yuki_office',jp:'業務用カード、チャージの上限、見直しましょうね、コスト意識、大事よ。',en:"Biz card charge limit review, cost-aware vital.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、有給、取得率、年々、上がっております、本当に、嬉しいですね。',en:"Yes. Staff paid-leave rate yearly-rise, glad really.",style:'Cheerful.'},
    {speaker:'yuki_office',jp:'お客様の待ち時間、お電話、すぐに、出るよう、徹底してね、本当に、急務よ。',en:"Cust wait — phone, soon-answer, thorough, urgent really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。少額決済、最近、増えております、自動化、進めてまいります、絶対。',en:"Yes. Small-pay — lately increase, auto advance absolute.",style:'Close.'},
  ]},
  {id:'conv_07028',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、不動産業界、宅地動向、君も、関心を持て、社会人として、当然だぞ。',en:"Ren — RE industry, resid-trend, also interest, as adult obvious.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。研究論文の本数、年々、増やしていけるよう、頑張ってまいります、絶対。',en:"Yes. Paper counts — yearly increase, try absolute.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'常々、君のことを、評価しているぞ、研究、続けていけ、本気で、絶対だ、絶対。',en:"Always — you-evaluate, research continue, serious absolute.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。学会、急行で、向かいます、本気で、発表、絶対、成功させたいです、絶対に。',en:"Yes. Conf — express-head, serious-pres, def-success want absolute.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'研究費、無駄な、チャージ、絶対、しないように、慎重に、扱え、絶対だぞ、絶対。',en:"Research fund — wasteful charge absolute don't, careful, absolute.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。有給休暇、研究の合間、しっかり、取らせていただきます、感謝しております、絶対。',en:"Yes. Paid-leave — research-between properly take, gratitude absolute.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'実験の待ち時間、効率化できる方法、君も、考えてみろ、若い視点、大事だぞ。',en:"Exp wait — eff-method, also think, youth-view vital.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。少額の研究助成、申請、検討しております、本当に、ありがたいです、本気で、絶対。',en:"Yes. Small grant — apply study, grateful really serious absolute.",style:'Earnest close.'},
  ]},
  {id:'conv_07029',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'住宅地、宅地内の見回り、警察、強化中です、市民の安全、本当に、第一です、絶対。',en:"Residential — patrol strengthening, citizen-safety first absolute really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。当社、社員、本数、地域防犯活動に、参加させてまいります、絶対に、本気で。',en:"Yes. Our staff count — local crime-prev attend, absolute serious.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察、常々、市民の皆様の、ご協力に、感謝、申し上げております、本当に、絶対、感謝。',en:"Police — always citizen-coop gratitude, absolute really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。お得意様、急行で、お見送りに、本社、参ります、警察様の、お見守りに、感謝。',en:"Yes. VIP — express see-off, HQ-head, police-watch gratitude.",style:'Update.'},
    {speaker:'takeda_officer',jp:'通信費の警察支給、無駄なチャージ、絶対、避けるよう、徹底中です、絶対、本気で、本当に。',en:"Comm-fee police-provide — waste-charge avoid absolute, thorough serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。当社、警察協力で、有給扱い、社員、皆、ご協力、感謝、申し上げております、本当に、絶対。',en:"Yes. Police-coop paid-treatment, all-staff coop, gratitude really absolute.",style:'Update.'},
    {speaker:'takeda_officer',jp:'被害届の待ち時間、最小限に、抑えるよう、警察、改善、進めております、本気で、絶対、絶対。',en:"Damage-claim wait — minimum, police-improve advance, serious absolute.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。少額の被害でも、警察、丁寧に、対応されているのを、感謝しております、本当に、絶対、感謝。',en:"Yes. Small damage also — police careful resp, gratitude really absolute.",style:'Close.'},
  ]},
  {id:'conv_07030',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業時、私の自宅、当時、宅地の一部に、社屋、建てたんだぞ、覚えてる、お前?',en:"Founding — my-home, era, residential-part corp-bldg built, remember?",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。創業期、社員、本数、片手で、数えられたって、お母さんから、聞いてます、本当に、絶対、すごい歴史です。',en:"Yes. Founding — staff count one-hand-countable, Mom-heard, amazing hist absolute.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'常々、お父さんから、お前に、伝えたかったこと、たくさん、あるぞ、いつか、ゆっくり、話したいな、絶対。',en:"Always — from-Dad you-convey want, many, sometime slow-talk want absolute.",style:'Tender.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さん、急行で、創業祭の会場、お見送りに、参ります、絶対、お楽しみに、ね、本当に、絶対。',en:"Yes. Dad — express-corp-fest see-off, fun-await absolute really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'創業期、銀行から、チャージ、お金を、借りる時、本当に、苦労したんだぞ、若い君に、伝えたい、絶対。',en:"Founding — bank charge money-borrow really hardship, young you convey absolute.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんも、有給、しっかり、取って、ゆっくり、過ごしてくださいね、本当に、お願い、絶対、健康、第一に。',en:"Yes. Dad also paid-leave properly take, slow-spend, please absolute health-first.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お客様の待ち時間、創業時、私たち、必死で、減らしたぞ、お父さんから、お前にも、伝統、引き継いで欲しい、絶対。',en:"Cust wait — founding desperate-reduced, from Dad you inherit-trad absolute.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。少額の経費から、丁寧に、扱うこと、創業者として、お父さんの、教え、絶対、守ってまいります、本当に。',en:"Yes. From small expenses — careful handle, as founder Dad-teach absolute keep really.",style:'Wise close.'},
  ]},
  {id:'conv_07031',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses a case',lines:[
    {speaker:'takeda_officer',jp:'本件、警察、断固として、対応してまいります、絶対、市民の安全、守り抜きます、本気で、絶対。',en:"Case — police firm-resp, citizen-safety guard, serious absolute.",style:'Calm.'},
    {speaker:'ren_uni',jp:'被害者のお名前、慰霊碑に、刻まれることに、なったんですね、本当に、悲しい、出来事でした。',en:"Victim-name — memorial carved, sad event really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、在学中の学生でした、本当に、若い人材、失われた、悲しい、事件です、本当に、絶対。',en:"Yes. Suspect — in-school student, young-talent lost, sad case absolute.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'過去の将校が、犯した事件、ニュースで、目に、しましたね、本当に、深刻な、社会問題、ですね。',en:"Past officer-crime — news-saw, severe soc-issue.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。警察官、忠誠心、本当に、強い職業、ですよね、私たち、誇りに、思って、活動しております、絶対。',en:"Yes. Officers — loyalty strong-prof, proud-active absolute.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'本件で、地域、雰囲気、一変、しましたよね、警察、心のケア、提供されているの、立派ですね、本当に。',en:"This case — region-air changed, police soul-care provide, splendid really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。苦難を、乗り越えて、地域、本気で、再生してまいります、警察、全力で、応援、絶対、本当に、本気で。',en:"Yes. Hardship-overcome, region serious-revive, police full-cheer absolute serious.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'容疑者の体格、目撃者の証言と、一致したんですね、本当に、捜査、進んでいるんですね、ありがたいです、本当に。',en:"Suspect physique — witness-match, inv-advancing, grateful really.",style:'Curious close.'},
  ]},
  {id:'conv_07032',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses historical research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、論文、戦時の政府、断固たる姿勢、丁寧に、論じていますね、本当に、印象的でした、本気で。',en:"Ren — paper, wartime gov firm-stance carefully argued, striking serious.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。慰霊碑に刻まれた名前、本当に、現代に、語りかけるような、力、感じました、本気で、感動的でした。',en:"Yes. Memorial-carved names — modern-speak power felt, moving serious.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'当時、大学に在学中の若者、本当に、戦地に、送られた歴史、論文で、扱っていますね、辛い、内容でしたよね。',en:"Era — in-school youth, war-sent hist, paper-handled, hard content.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。将校たちの記録、論文の重要な、史料、本気で、貴重な、研究、できました、本当に、深い、研究でした、絶対。',en:"Yes. Officers' records — paper-key archive, precious research absolute deep really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'忠誠心という、概念、戦中、本当に、強かったんですよね、論文の中で、丁寧に、扱われていました、本気で、印象的。',en:"Loyalty-concept — wartime strong, paper carefully handled, striking serious.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。戦中、戦後で、社会が、一変、しましたね、論文の核心、テーマでした、本気で、深い、研究、できました、絶対。',en:"Yes. War-during/after soc-changed, paper-core theme, deep research absolute serious.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦後の苦難、人々が、どう乗り越えたか、論文で、本当に、丁寧に、扱っていましたね、桜さん、本気で、立派。',en:"Post-war hardship — how-overcame, paper carefully handled, Sakura serious splendid.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。戦中、人々の体格、栄養不足で、変化したという、史料、論文に、引用しました、本気で、貴重な、視点でした、絶対。',en:"Yes. Wartime — physique nutr-changed archive, paper-cited, precious view absolute serious.",style:'Earnest close.'},
  ]},
  {id:'conv_07033',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses medical research',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、医療現場、断固として、患者さん、守ってまいります、本気で、絶対、医師の使命、感じております、本当に。',en:"Ren — med-site, firm patient-guard, serious absolute med-mission feel really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'故人の名前、ご家族に、心に、刻まれた状態で、残り続けるんですね、本当に、深い、感情、感じます、本気で。',en:"Deceased names — family heart-carved, remain, deep emotion feel serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。在学中の医学生、現場、実習に、来てくれております、本当に、若い力、頼もしいですね、本気で、絶対。',en:"Yes. In-school med-students — site-practicum come, young-power reassuring serious absolute.",style:'Patient.'},
    {speaker:'ren_uni',jp:'過去の軍の将校、医療経験、持っていた方々、本当に、戦後、医療界、支えてくださいましたね、本気で、感謝。',en:"Past mil-officers — med-exp had, post-war med-world supported, gratitude serious.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。医療現場の忠誠心、本当に、求められる職業、感じております、本気で、絶対、責任、重い、覚悟してます、絶対。',en:"Yes. Med-loyalty — demanded prof feel, serious absolute resp heavy resolved.",style:'Informative.'},
    {speaker:'ren_uni',jp:'パンデミックで、医療現場、一変、しましたよね、先生、本気で、大変な、時期だったと、想像、つきます、本当に、絶対。',en:"Pandemic — med-site changed, sensei serious-hard era imagine, really absolute.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。患者さん、苦難を、乗り越えて、回復される姿、本当に、医師、励みに、なります、本気で、絶対、感動的、本当に。',en:"Yes. Patient — hardship-overcome recovery, doctor-encourage serious absolute moving really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'体格、診察の参考に、なる重要な、情報ですよね、先生、本気で、医療、奥深い、世界、本当に、勉強、続けたいです、絶対。',en:"Physique — exam-ref key info, sensei serious med-deep, study continue absolute.",style:'Reflective close.'},
  ]},
  {id:'conv_07034',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews corp strategy',lines:[
    {speaker:'hiroshi_boss',jp:'業界の不正、当社、断固として、許さない方針、社員、徹底させろ、絶対、本気で、頼んだぞ、絶対。',en:"Industry-fraud — our co firm don't-allow, staff thorough absolute serious ask.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。創業者の言葉、社員の心に、刻まれております、本当に、感謝、しております、絶対、引き継ぎます、本気で。',en:"Yes. Founder-words — staff-heart carved, gratitude absolute inherit serious.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'インターン、まだ、在学中の学生、若い才能、本気で、採用していけ、当社の未来、絶対だ、本気で、頼む、絶対。',en:"Intern — in-school students, young-talent serious-hire, our future absolute serious ask.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。元自衛隊将校の社員、本当に、頼もしい存在、なっております、社内、本気で、活躍、目立っております、絶対。',en:"Yes. Ex-JSDF officer staff — reassuring become, internal serious-active notable absolute.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'社員の忠誠心、本気で、感謝、しております、私からも、絶対、応えてまいります、本当に、頼んだぞ、絶対、本気。',en:"Staff loyalty — serious gratitude, from-me respond absolute really ask absolute serious.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社の経営方針、市場の変化で、一変、する可能性、ありますが、芯は、絶対、守ってまいります、本気で、絶対。',en:"Yes. Our mgmt-policy — market-change-possible-shift, core absolute keep serious absolute.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'創業時の苦難、社員、本気で、知って欲しい、絶対、若手にも、伝えていけ、本当に、頼んだぞ、絶対、これは。',en:"Founding-hardship — staff serious-know want absolute, youth-convey, ask really absolute.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、体格、お祝いの席で、お祖父ちゃんから、見るたびに、立派になったと、本気で、おっしゃってます、絶対、本当に。',en:"Yes. Staff physique — cele Grandpa each-see splendid serious-says absolute really.",style:'Close.'},
  ]},
  {id:'conv_07035',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through social research',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、論文、断固たる、平和への姿勢、本当に、印象的でしたね、桜さん、本気で、立派な、研究、できましたね、絶対。',en:"Sakura — paper, firm peace-stance, striking, splendid research absolute serious.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。歴史に刻まれた事件、論文で、丁寧に、扱いました、本当に、深い、研究、できました、本気で、感謝、しております。',en:"Yes. Hist-carved events — paper carefully handled, deep research serious gratitude.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'戦中、在学中の学生、徴兵された歴史、論文で、扱っていましたね、桜さん、本当に、辛い、内容、でしたよね、本気で。',en:"Wartime — in-school students drafted hist, paper-handled, hard content serious.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。将校の記録、丁寧に、論文に、引用しました、本気で、貴重な、史料、本当に、深い、研究、できました、絶対、本気で。',en:"Yes. Officer-records carefully cited, precious archive deep research absolute serious.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'忠誠という概念、戦時、市民にも、求められた歴史、本気で、扱っていましたね、桜さん、視野、本当に、広いです、本気で、絶対。',en:"Loyalty-concept — wartime citizens-also demanded hist, serious-handled, view broad absolute.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。戦後、文化が、本気で、一変、しましたよね、論文の重要な、テーマでした、絶対、深い、研究、できました、本当に、感謝。',en:"Yes. Post-war culture serious-changed, paper-key theme, deep research absolute gratitude.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦中、戦後の苦難、人々の、生き様、論文で、丁寧に、論じていましたね、本当に、感動的、桜さん、本気で、立派、絶対、本当に。',en:"War hardship — life-way, paper carefully argued, moving Sakura serious splendid absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。戦中の体格、栄養不足の、影響、論文で、扱いました、本気で、深い、研究、できました、本当に、感謝、しております、絶対、絶対。',en:"Yes. Wartime physique — nutr-effect, paper-handled, deep research serious gratitude absolute.",style:'Earnest close.'},
  ]},
  {id:'conv_07036',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat about hobbies',lines:[
    {speaker:'mei_romantic',jp:'葵、お客様、絶対、見捨てない姿勢、本当に、葵らしいよね、メイちゃん、誇りに、思うわよ、本当に、絶対、本気で。',en:"Aoi — cust absolute don't-abandon stance, Aoi-like, proud, absolute serious.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'うん。最近、テック関係の、お客様、葵で、増えてきたわよ、メイちゃん、面白い人たち、多いのよ、本気で、絶対。',en:"Yeah. Lately tech-cust Aoi-increase, fun people many, serious absolute.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵で、店から、お客様、送り出しの瞬間、本当に、温かい、雰囲気、出てるよね、メイちゃん、感心しちゃう、絶対。',en:"Aoi — store-cust see-off moment, warm air, Mei admire absolute.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'最近、王家の物語、ドラマ、結構、ハマってるのよ、私、葵で、メイちゃん、興味、ある?',en:"Lately royal-tale drama quite-hooked, Aoi Mei interest?",style:'Curious.'},
    {speaker:'mei_romantic',jp:'朝食、シリアルに、変えたのよ、葵で、結構、便利よ、メイちゃんも、試してみて、本当に、おすすめ、絶対、本気。',en:"Breakfast — cereal-changed, Aoi convenient, Mei try, rec absolute serious.",style:'Cheerful.'},
    {speaker:'aoi_barista',jp:'地下のワイン樽、雰囲気、本当に、お洒落で、お客様、好評、続いておりますよ、葵で、本気で、嬉しいわよ、絶対、本当に。',en:"Underground wine-barrels — stylish air, cust favorable, Aoi serious glad absolute.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'葵、最近、彼、ジムで、本気で、体、鍛えるのに、ハマってるのよ、本当に、変わってきたわよ、葵、見てびっくり、絶対。',en:"Aoi — lately bf gym serious-body-train hooked, changed, Aoi surprise absolute.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵で、二号店、本気で、出す野心、まだ、持ってるのよ、私、メイちゃんも、応援してね、本当に、絶対、頼みますよ、本気。',en:"Aoi — 2nd store serious-out ambition, still hold, Mei cheer, ask absolute serious.",style:'Earnest close.'},
  ]},
  {id:'conv_07037',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、ぼく、お友達を、絶対、見捨てないからね、約束、本当に、ね、ママに、伝えておきたいんだ、本気で。',en:"Mom — me friend absolute don't-abandon, promise, convey want serious.",style:'Earnest child.'},
    {speaker:'yumiko_mom',jp:'うん。お父さんの会社、テック関係の、新事業、始めたって、聞いたわよ、翔くん、楽しみね、本当に、家族で、応援しようね。',en:"Yes. Dad-co — tech new-biz heard, Sho fun, family-cheer.",style:'Reflective.'},
    {speaker:'sho_child',jp:'今朝、玄関で、ぼく、ママの、送り出し、ちゃんと、できたよね、お母さん、覚えてる?ぼく、頑張ったの、本当に。',en:"Morn — entrance Mom see-off properly done, Mom remember?, tried really.",style:'Proud.'},
    {speaker:'yumiko_mom',jp:'絵本、王家のお話、翔くん、好きだよね、お母さん、もう一冊、買ってあげるね、約束、ね、楽しみにしててね、絶対。',en:"Picture-book — royal-tale Sho love, Mom another-buy, promise, fun-await absolute.",style:'Tender.'},
    {speaker:'sho_child',jp:'今朝、シリアル、ぼく、自分で、用意したよ、ママ、お母さん、忙しそうだったから、お手伝いしたんだ、本当に、嬉しい。',en:"Morn — cereal self-prep, Mom busy-look, helped, glad really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お父さん、ワイン樽の、コルク、集めてるって、知ってた?翔くん、お父さん、本当に、面白い趣味、持ってるわよね。',en:"Dad — wine-barrel corks collecting knew?, Sho, Dad fun-hobby really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'お父さん、ジムで、体を、鍛えるのに、最近、はまってるんだよね、ママ、ぼくも、お父さんみたいに、なりたいよ、絶対。',en:"Dad — gym body-train lately hooked, Mom, me Dad-like-want absolute.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'翔くんの、野心、ぼく、大きく、なって、何になりたい?お母さん、聞いてみたいよ、本気で、楽しみよ、本当に、絶対。',en:"Sho ambition — big-grown, what want-become?, Mom-ask want serious fun absolute.",style:'Warm close.'},
  ]},
  {id:'conv_07038',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前を、絶対、見捨てないからね、桜、約束、本当に、これは、絶対だよ、リク、信じてね、本気で。',en:"Riku — you absolute don't-abandon, Sakura promise, absolute really, believe serious.",style:'Soft teen.'},
    {speaker:'riku_teen',jp:'うん。お父さん、テック企業で、本気で、頑張ってるって、お母さんから、聞いたよ、桜、お前のお父さんも、すごいよな、本気で、絶対。',en:"Yeah. Dad — tech-co serious-try, Mom-heard, Sakura your Dad-also amazing serious absolute.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'学校、卒業生の送り出しの式、本気で、感動するよね、リク、お前、覚えてる?私、本気で、泣いちゃったよ、本当に、感動した、絶対。',en:"School grad see-off cere — moving, Riku remember?, cried, moved absolute really.",style:'Wistful.'},
    {speaker:'riku_teen',jp:'王家のドラマ、最近、面白いの、出てきてさ、桜、お前も、見てみたら?お父さん、お母さんと、一緒に、楽しめるよ、絶対。',en:"Royal drama — lately fun out, Sakura see?, with parents fun absolute.",style:'Curious.'},
    {speaker:'sakura_teen',jp:'朝食、私、シリアル、最近、ハマってるのよ、リク、お前は、何、食べてる?気になるよ、本当に、教えてくれる?',en:"Breakfast — cereal lately hooked, Riku what-eat?, curious, tell?",style:'Animated.'},
    {speaker:'riku_teen',jp:'家庭科で、ワイン樽の歴史、扱ったぞ、桜、お前、興味、出てきた?結構、深いんだぜ、本気で、絶対、勉強したくなるよ、本気で。',en:"Home-ec — wine-barrel hist handled, Sakura interest?, deep serious absolute study-want serious.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'リク、お前、最近、本気で、体を、鍛えるのに、頑張ってるよね、本当に、すごいよ、私、誇りに、思ってるよ、絶対、本気で。',en:"Riku — lately serious-body-train, amazing, proud absolute serious.",style:'Praising.'},
    {speaker:'riku_teen',jp:'お前の野心、本気で、応援するからな、桜、絶対に、お前なら、できるよ、信じてる、本気で、これは、絶対だぞ、絶対。',en:"Your ambition — serious-cheer, Sakura absolute, can-do, believe serious absolute.",style:'Encouraging close.'},
  ]},
  {id:'conv_07039',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、お互いを、絶対、見捨てないって、若い頃、誓ったよな、覚えてる?本気で、これは、絶対の、約束だ、絶対。',en:"Gran — mutually don't-abandon, youth pledged, remember?, serious absolute promise.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'うん。最近のテック、本当に、便利よね、私、年寄りには、ちょっと、難しいけれども、新しいこと、覚えるの、楽しいわよ、本当に。',en:"Yes. Recent tech convenient, me elder bit-hard, but learn-fun really.",style:'Bright.'},
    {speaker:'hiroshi_elder',jp:'若い頃、孫の送り出し、保育園の前、何度か、立ち会ったよな、ばあさん、覚えてる?懐かしい思い出だ、本当に、本気で、絶対。',en:"Youth — grandkid see-off, daycare-front several-times attended, gran remember?, nostalgic serious absolute.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、王家の歴史、本、二人で、よく、読んだわよね、覚えてる、あなた?本気で、感動した話、たくさん、あったわよね、本当に、絶対。',en:"Youth — royal-hist book two often-read, remember, dear?, moving stories many, absolute really.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'朝食、私たち、シリアル、最近、食べる時、増えてきたわよな、ばあさん、簡単で、便利よね、本当に、年取って、楽な、選択肢、ね、絶対。',en:"Breakfast — cereal lately eat-increase, gran easy convenient, aged easy-choice absolute.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'昔の田舎、ワイン樽じゃないけれど、味噌樽、いっぱい、あったわよね、あなた、覚えてる?日本の伝統、本当に、深いわよね、本気で、絶対。',en:"Old country — miso-barrels many, dear remember?, Japan-trad deep serious absolute.",style:'Wistful.'},
    {speaker:'hiroshi_elder',jp:'若い頃、体を、本気で、鍛えていた時代、覚えてる?ばあさん、私、本当に、頑張ったよな、お前にも、応援、してもらった、感謝、ね。',en:"Youth — body serious-train era, remember gran?, hard-tried, you-cheered, gratitude.",style:'Tender.'},
    {speaker:'sachiko_grandma',jp:'若い頃のあなたの、野心、本気で、輝いていたわよね、覚えてる?私、本当に、惚れ直したくらいよ、本気で、本当に、絶対、ロマンチックね、本気。',en:"Youth-your ambition — shone, remember?, fell-in-love-again, serious romantic absolute.",style:'Tender close.'},
  ]},
  {id:'conv_07040',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、お客さん、絶対、見捨てない姿勢、店の信条として、本気で、続けていこか、葵で、絶対、貫いていきたいで、本当に、本気で。',en:"Aoi — cust absolute don't-abandon stance, as creed serious-continue, Aoi pierce-want absolute really.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。テック企業のお客様、葵で、最近、増えております、新しい、お話、本気で、楽しみですね、葵で、お客様、皆、楽しんでくださっています、絶対。',en:"Yes. Tech-co cust — Aoi-lately increase, new talk fun serious, all-cust-fun absolute.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'お客さんの送り出し、葵で、最後まで、心を、込めて、行いたいで、本気で、絶対、おもてなしの心、貫いてまいろうな、葵さん、本当に、本気。',en:"Cust see-off — Aoi until-end heart-include, serious omotenashi pierce absolute Aoi really serious.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。王家の食卓のような、特別なコース、葵で、新メニューに、加えませんか、本気で、面白い、企画に、なりそうですね、絶対、本当に、お客様、喜ぶ。',en:"Yes. Royal-table-like special-course — Aoi new-menu add?, fun plan serious absolute, cust-glad.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'朝食メニュー、シリアル、お洒落なもの、葵で、提供したいんや、本気で、健康志向のお客さん、本気で、喜んでくれるはずや、絶対、本当に。',en:"Breakfast — cereal stylish Aoi-provide want, serious health-cust serious-glad-likely absolute really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'はい。ワイン樽の、デコレーション、店内に、本気で、増やしましょう、葵で、雰囲気、本当に、お洒落になりますよ、絶対、本気で、本当に、お客様、好評、続きそう。',en:"Yes. Wine-barrel decor — Aoi serious-increase, air stylish absolute serious cust-favor-continue.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'料理人として、技を、本気で、鍛える日々、続けていくで、葵さん、絶対、葵に、相応しい料理人、目指しまーす、本気で、本当に、絶対、頑張ろうな、葵さん。',en:"As chef — skill serious-train days continue, Aoi absolute, Aoi-fitting chef aim serious really absolute try Aoi.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'はい。葵を、業界の、一流店に、する野心、本気で、持っております、絶対、葵さんと、一緒に、頑張ってまいりましょう、本当に、本気で、絶対、夢、叶えたい、絶対。',en:"Yes. Aoi — industry top-store ambition serious-hold, absolute with-Aoi try, serious absolute dream-realize absolute.",style:'Warm close.'},
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

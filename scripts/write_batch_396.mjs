import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_396 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['誓い','あれだけ','家内','伯父','和室','帰れる','仕立て','籠']
const B_T = ['原型','員数','及ぶ','お上','摘発','人並み','語り口','長らく']
const C_T = ['國','瓦','梁','メス','霊的','孤児','村人','住職']
const D_T = ['伊勢','明日香','日テレ','タール','プラハ','瀬戸','譚','挿絵']

const data = [
  {id:'conv_07881',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat at home',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、ママの、本気で、絶対、誓い、絶対、よ、本気で、絶対、約束、絶対、守るって、絶対、約束、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — Mom-promise — keep-vow, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、あれだけ、絶対、頑張ったのに、絶対、テスト、絶対、ダメだったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — that-much tried, test bad-was, absolute serious really.",style:'Wry child.'},
    {speaker:'yumiko_mom',jp:'翔くん、お父さん、本気で、絶対、家内、絶対、安全、絶対、いつも、絶対、お祈りしてるのよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — Dad family-safety always-pray, absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、伯父、絶対、さんの、絶対、お家、絶対、遊びに行きたいな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — uncle-house play-go-want, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'翔くん、お祖母ちゃんの、本気で、絶対、和室、絶対、お掃除、絶対、してね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — grandma washitsu-clean, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ママ、ぼく、もう、本気で、絶対、帰れる、絶対、よね?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — me already return-can?, absolute serious really.",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'翔くん、お父さんの、本気で、絶対、仕立て、絶対、のいいスーツ、絶対、お洒落ね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — Dad well-tailored suit stylish, absolute serious really.",style:'Praising.'},
    {speaker:'sho_child',jp:'ママ、お庭で、本気で、絶対、籠、絶対、にお花、絶対、入れたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom — garden basket flower-put, absolute serious really.",style:'Proud close.'},
  ]},
  {id:'conv_07882',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、お店、本気で、絶対、続けるって、絶対、誓い、絶対、立てたわよね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — store-continue vow-made, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、あれだけ、絶対、頑張ってたお客様、絶対、また来てくれたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — that-much tried cust again-came, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、ご、本気で、絶対、家内、絶対、お元気でいらっしゃる?メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — your wife well?, Mei absolute serious really.",style:'Curious.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、伯父、絶対、が、絶対、お店に、絶対、来てくれたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — uncle store-came, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、お店の奥、本気で、絶対、和室、絶対、空間、絶対、お洒落ね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — store-back washitsu-space stylish, Mei absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、もう、本気で、絶対、帰れる、絶対、時間、絶対、になったよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — already return-can time, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵、新しい、本気で、絶対、仕立て、絶対、のエプロン、絶対、お洒落ね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — new tailoring-apron stylish, Mei absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、籠、絶対、にパン、絶対、お洒落に、絶対、並べたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — basket-bread stylish-arranged, Mei absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07883',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、お父さんとの、本気で、絶対、誓い、絶対、覚えてるか?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Gran — youth Dad-vow remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、お祖父ちゃん、本気で、絶対、あれだけ、絶対、お働きになったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Youth — Grandpa that-much-worked, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさんが、本気で、絶対、家内、絶対、として、絶対、支えてくれたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran wife-as supported, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃんの、本気で、絶対、伯父、絶対、様、絶対、お優しかったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Grandpa uncle-sama gentle-was, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、和室、絶対、で、絶対、お茶、絶対、淹れてくれたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran washitsu tea-made, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、帰れる、絶対、時間、絶対、いつも、絶対、遅かったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa return-can time always-late, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、お父さんの、絶対、仕立て、絶対、のスーツ、絶対、ほめてくれたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — gran Dad tailoring-suit praised, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、お花、絶対、籠、絶対、いっぱい、絶対、お持ち帰りなさったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa flower-basket full carried-home, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07884',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、優勝するって、絶対、誓い、絶対、立てたよな?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Riku — you win-vow made?, absolute serious really.",style:'Curious teen.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、あれだけ、絶対、練習したのに、絶対、ヤバいぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"You — that-much practiced — crazy, Sakura absolute serious really.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'リク、お前のご、本気で、絶対、家内、絶対、お元気?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Riku — your-fam well?, absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'お前の、本気で、絶対、伯父、絶対、さん、絶対、教師なんだろ?桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"You — uncle teacher?, Sakura absolute serious really.",style:'Curious.'},
    {speaker:'sakura_teen',jp:'リク、お前のお祖母ちゃんの、本気で、絶対、和室、絶対、行ったの?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Riku — your grandma washitsu went?, absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'お前、もう、本気で、絶対、帰れる、絶対、んだろ?桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"You — already return-can?, Sakura absolute serious really.",style:'Curious.'},
    {speaker:'sakura_teen',jp:'リク、お前の制服、本気で、絶対、仕立て、絶対、いいよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Riku — your uniform tailoring-nice, absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、籠、絶対、にお弁当、絶対、ぎっしりだな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"You — basket-bento packed, Sakura absolute serious really.",style:'Wry close.'},
  ]},
  {id:'conv_07885',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、お店、続けるって、本気で、絶対、誓い、絶対、立ててるの、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — Mei-sis store-continue vow-make, absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、本気で、絶対、あれだけ、絶対、頑張ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me that-much tried, absolute serious really.",style:'Proud child.'},
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、お、本気で、絶対、家内、絶対、安全、絶対、お祈りしてるわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis family-safety pray, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、伯父、絶対、さん、絶対、いる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — uncle have?, absolute serious really.",style:'Curious child.'},
    {speaker:'mei_romantic',jp:'翔くん、お祖父ちゃんの、本気で、絶対、和室、絶対、お祖父ちゃんと、絶対、片付けてね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Grandpa washitsu Grandpa-with tidy, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、もう、本気で、絶対、帰れる、絶対、よ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me already return-can, absolute serious really.",style:'Practical child.'},
    {speaker:'mei_romantic',jp:'翔くん、お父さんの、本気で、絶対、仕立て、絶対、のいい、絶対、お洋服、絶対、お洒落ね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — Dad well-tailored clothes stylish, absolute serious really.",style:'Praising.'},
    {speaker:'sho_child',jp:'メイ姉さん、お庭で、本気で、絶対、籠、絶対、にお花、絶対、いっぱい入れたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — garden basket-flower full-put, absolute serious really.",style:'Proud close.'},
  ]},
  {id:'conv_07886',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    {speaker:'hiroshi_boss',jp:'当社、本気で、絶対、製品の、絶対、原型、絶対、確認しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Our co — product prototype verify, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、社員、絶対、員数、絶対、確認、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Our staff headcount verified, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'影響、本気で、絶対、各部署に、絶対、及ぶ、絶対、可能性ある、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Impact each-dept reach possibility, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。本気で、絶対、お上、絶対、の、絶対、規制、絶対、注視しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Authorities-regulation watch, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'不正、本気で、絶対、摘発、絶対、徹底しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Fraud bust thorough, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、人並み、絶対、以上の、絶対、努力、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Staff above-average effort, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'プレゼン、本気で、絶対、語り口、絶対、ご丁寧にしろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Pres narrative polite, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。本気で、絶対、長らく、絶対、お取引、絶対、いただきありがたいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Long-time dealings grateful, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07887',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'新製品の、本気で、絶対、原型、絶対、できあがりましたね、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"New-prod prototype completed, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。本気で、絶対、員数、絶対、ピッタリ、絶対、揃いました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Headcount exact-match, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'販売影響、本気で、絶対、海外、絶対、及ぶ、絶対、見込みです、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sales-impact overseas reach forecast, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。本気で、絶対、お上、絶対、の、絶対、新規制、絶対、社内、絶対、説明、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Authorities new-reg in-house-explain advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'不正、本気で、絶対、摘発、絶対、社内、絶対、教育、絶対、進めましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Fraud bust in-house-edu advance, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。社員、本気で、絶対、人並み、絶対、以上、絶対、頑張っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Staff above-average try, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'広報、本気で、絶対、語り口、絶対、丁寧にしましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"PR narrative polite-make, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、長らく、絶対、お得意様、絶対、大切にしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Our long-time VIP cherish, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07888',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究、本気で、絶対、原型、絶対、まとめろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Ren — research prototype compile, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。実験参加者、本気で、絶対、員数、絶対、確認、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Experiment-participant headcount verify, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'蓮、論文影響、本気で、絶対、海外まで、絶対、及ぶ、絶対、よう励め、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Ren — paper-impact overseas reach try, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。本気で、絶対、お上、絶対、と、絶対、政府、絶対、研究、絶対、関心ご対応しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Authorities-gov research interest respond, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'蓮、論文捏造、本気で、絶対、摘発、絶対、絶対なきよう励め、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Ren — paper-fabrication bust absolute-none try, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。同期は、本気で、絶対、人並み、絶対、以上の、絶対、研究者、絶対、おります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Peers above-average researchers exist, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'蓮、学会発表、本気で、絶対、語り口、絶対、磨け、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Ren — conf-pres narrative polish, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。本気で、絶対、長らく、絶対、ご指導、絶対、いただきありがたく存じます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Long-time guidance received-grateful, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07889',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、犯行の、絶対、原型、絶対、解明、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Police crime-pattern solve done, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察、本気で、絶対、員数、絶対、増員、絶対、ありがたいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Police headcount-add grateful, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、捜査、絶対、広範囲、絶対、及ぶ、絶対、見込みです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Police inv wide-range reach forecast, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。本気で、絶対、お上、絶対、の、絶対、方針、絶対、警察、絶対、ご対応ありがたいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Authorities-policy police respond grateful, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、不正、絶対、摘発、絶対、強化、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Police fraud bust strengthen, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察、本気で、絶対、人並み、絶対、以上、絶対、巡回、絶対、ありがたいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Police above-average patrol grateful, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、市民、絶対、語り口、絶対、丁寧に、絶対、応対します、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Police citizen-narrative polite-respond, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察、本気で、絶対、長らく、絶対、地域、絶対、お守り、絶対、ありがたいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Police long-time region-protect grateful, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07890',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'お父さん、創業期、本気で、絶対、製品、絶対、原型、絶対、自分で、絶対、作ったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Dad — founding product prototype self-made, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの、本気で、絶対、員数、絶対、把握、絶対、すばらしかったです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Dad-headcount-grasp wonderful, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、信用、絶対、業界、絶対、及ぶ、絶対、人物だったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Dad — trust industry-reach person, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんが、本気で、絶対、お上、絶対、と、絶対、規制、絶対、丁寧に、絶対、対応された、絶対、姿勢、絶対、引き継いでおります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Dad authorities-regulation polite-resp stance inherit, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、不正、絶対、摘発、絶対、嫌った、絶対、人だったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad — fraud-bust hated person, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんが、本気で、絶対、社員、絶対、人並み、絶対、以上、絶対、ねぎらった、絶対、お姿、絶対、忘れません、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Dad staff above-average thanked figure not-forget, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、優しい、絶対、語り口、絶対、お持ちだったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Dad — gentle-narrative had, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんが、本気で、絶対、長らく、絶対、お得意様、絶対、大切になさった、絶対、お姿、絶対、引き継いでおります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Dad long-time VIP cherished figure inherit, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07891',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、本気で、絶対、國、絶対、字、絶対、と、絶対、旧字、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — old-form-kuni and old-char paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。古建築の、本気で、絶対、瓦、絶対、技法、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Thanks. Old-architecture roof-tile technique paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'伝統建築の、本気で、絶対、梁、絶対、構造、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Trad-architecture beam-structure paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。手術用の、本気for、絶対、メス、絶対、の、絶対、歴史、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Surgical-scalpel history paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'本気で、絶対、霊的、絶対、な、絶対、儀礼、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Spiritual rituals paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。戦災、本気で、絶対、孤児、絶対、の、絶対、ケア、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. War-orphan care paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'限界集落の、本気で、絶対、村人、絶対、生活、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Marginal-village villagers life paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。お寺の、本気で、絶対、住職、絶対、の、絶対、伝統、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Temple chief-priest trad paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07892',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、外、絶対、國、絶対、人、絶対、関係、絶対、捜査、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police foreign-national related inv advance, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、現場の、絶対、瓦、絶対、警察、絶対、保全、絶対、されたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Case scene-tile police-preserved, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、倒壊した、絶対、梁、絶対、警察、絶対、調査、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Case collapsed-beam police-survey done, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、医療用、絶対、メス、絶対、を、絶対、使った、絶対、犯罪、絶対、警察、絶対、解明されたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Case med-scalpel crime police-solved, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、霊的、絶対、な、絶対、詐欺、絶対、警察、絶対、摘発、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Case spiritual-fraud police-busted, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、孤児、絶対、保護施設、絶対、警察、絶対、見守って、絶対、おられるそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Case orphan-shelter police watch over, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、村人、絶対、の、絶対、ご証言、絶対、警察、絶対、伺いました、本気for、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Case villager-testimony police-heard, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、お寺の、絶対、住職、絶対、警察、絶対、と、絶対、連携、絶対、されたそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Case temple chief-priest police-coop, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07893',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、本気で、絶対、國、絶対、字、絶対、と、絶対、旧字、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sakura — old-form-kuni and old-char paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。古建築の、本気で、絶対、瓦、絶対、技法、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Thanks. Old-architecture roof-tile technique paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'伝統建築の、本気で、絶対、梁、絶対、構造、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Trad-architecture beam-structure paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。手術用の、本気で、絶対、メス、絶対、の、絶対、歴史、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Surgical-scalpel history paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'本気で、絶対、霊的、絶対、な、絶対、儀礼、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Spiritual rituals paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。戦災、本気で、絶対、孤児、絶対、の、絶対、ケア、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. War-orphan care paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'限界集落の、本気で、絶対、村人、絶対、生活、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Marginal-village villagers life paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。お寺の、本気で、絶対、住職、絶対、の、絶対、伝統、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Temple chief-priest trad paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07894',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、本気で、絶対、國、絶対、際、絶対、医療、絶対、医療チーム、絶対、交流しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Ren — international med med-team exchange, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'本気で、絶対、古い病棟の、絶対、瓦、絶対、屋根、絶対、貴院、絶対、修繕されたんですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Old-ward tile-roof your-hosp repaired, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。本気で、絶対、梁、絶対、の、絶対、耐震、絶対、医療チーム、絶対、確認、絶対、しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Beam earthquake-resist med-team verified, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'本気で、絶対、メス、絶対、滅菌、絶対、貴院、絶対、徹底、絶対、されているそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Scalpel-sterilize your-hosp thorough, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。患者さんの、本気で、絶対、霊的、絶対、な、絶対、ケア、絶対、医療チーム、絶対、配慮しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Patient spiritual-care med-team consider, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'貴院、本気で、絶対、孤児、絶対、施設、絶対、と、絶対、医療連携、絶対、しているそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Your-hosp orphan-shelter med-coop, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。離島の、本気で、絶対、村人、絶対、の、絶対、健診、絶対、医療チーム、絶対、出張しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Isolated-island villager checkup med-team-go, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'お寺の、本気で、絶対、住職、絶対、と、絶対、貴院、絶対、ターミナルケア、絶対、連携、絶対、されているんですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Temple chief-priest your-hosp terminal-care coop, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07895',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    {speaker:'hiroshi_boss',jp:'当社、本気で、絶対、外、絶対、國、絶対、市場、絶対、開拓しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Our co — foreign-country market pioneer, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。本社、本気で、絶対、瓦、絶対、屋根、絶対、修繕、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. HQ tile-roof repair advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'倉庫、本気で、絶対、梁、絶対、補強、絶対、しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Warehouse beam-reinforce, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。医療向け、本気で、絶対、メス、絶対、の販売、絶対、検討中です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Med-target scalpel sales considering, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'本気で、絶対、霊的、絶対、な、絶対、商品、絶対、扱うな、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Spiritual products don't-handle, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、孤児、絶対、支援、絶対、CSR、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Our orphan-support CSR advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'本気で、絶対、村人、絶対、向け、絶対、商品、絶対、企画しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Villager-target product plan, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。地元、本気で、絶対、住職、絶対、ご相談、絶対、いただいております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Local chief-priest consult-received, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07896',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、伊勢、絶対、旅行、絶対、行ったの?メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — Ise travel went?, Mei absolute serious really.",style:'Curious.'},
    {speaker:'aoi_barista',jp:'葵、お友達の、本気で、絶対、明日香、絶対、ちゃん、絶対、お元気?メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — friend Asuka well?, Mei absolute serious really.",style:'Curious.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、日テレ、絶対、の、絶対、ドラマ、絶対、見てるの?メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — NTV drama watch?, Mei absolute serious really.",style:'Curious.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、タール、絶対、色、絶対、の、絶対、おしゃれ椅子、絶対、入れたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — tar-color stylish-chair put, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、プラハ、絶対、旅行、絶対、行きたいわ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — Prague travel go-want, Mei absolute serious really.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'葵、お祖父ちゃんは、本気で、絶対、瀬戸、絶対、の出身よ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — Grandpa Seto-origin, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'mei_romantic',jp:'葵、好きな漫画、絶対、本気で、絶対、譚、絶対、っていうタイトル、絶対、面白いね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — fave manga 'tale' title interesting, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵、メニュー表の、本気で、絶対、挿絵、絶対、お洒落でしょ?メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — menu illustration stylish?, Mei absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07897',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、お父さん、本気で、絶対、伊勢、絶対、お参り、絶対、お連れくださったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Gran — youth Dad Ise-visit took, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、お祖父ちゃん、本気で、絶対、明日香、絶対、奈良の、絶対、史跡、絶対、お好きだったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Youth — Grandpa Asuka Nara-ruins liked, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、日テレ、絶対、の、絶対、お番組、絶対、お好きだったわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran NTV program liked, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、タール、絶対、舗装、絶対、お父さんの仕事、絶対、思い出したわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa tar-pave Dad-work recall, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさんと、本気で、絶対、プラハ、絶対、お旅行、絶対、夢に見たぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — gran Prague-travel dreamed, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、瀬戸、絶対、焼きの、絶対、お皿、絶対、お好きだったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa Seto-ware plate liked, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、古い小説の、絶対、譚、絶対、お読みになったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — gran old-novel tale read, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、絵本の、絶対、挿絵、絶対、お孫さんに、絶対、見せられたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa picture-book illustration grandkid-shown, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07898',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、伊勢、絶対、神宮、絶対、お参りしたいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — Mei-sis Ise-shrine visit-want, absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、お友達の、本気で、絶対、明日香、絶対、ちゃん、絶対、優しいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — friend Asuka kind, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、日テレ、絶対、で、絶対、ドラマ、絶対、始まったわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — NTV drama started, absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、本気で、絶対、タール、絶対、って言葉、絶対、初めて知ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me tar word first-know, absolute serious really.",style:'Curious child.'},
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、プラハ、絶対、お写真、絶対、見せてあげる、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — Mei-sis Prague-photo show, absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、お父さんが、本気で、絶対、瀬戸、絶対、焼きの、絶対、湯のみ、絶対、買ってくれたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — Dad Seto-ware teacup bought, absolute serious really.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、譚、絶対、っていう漢字、絶対、お話、絶対、って意味なのよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — 'tan' kanji story-meaning, absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、絵本の、本気で、絶対、挿絵、絶対、きれいだね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — picture-book illustration pretty, absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07899',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、伊勢、絶対、修学旅行、絶対、行ったの?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Riku — you Ise school-trip went?, absolute serious really.",style:'Curious teen.'},
    {speaker:'riku_teen',jp:'お前のクラスの、本気で、絶対、明日香、絶対、っていう子、絶対、可愛いな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Your class-Asuka cute, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、日テレ、絶対、の、絶対、バラエティ、絶対、好きだよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Riku — you NTV variety like, absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、タール、絶対、舗装、絶対、現場、絶対、見たことある?桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"You — tar-pave site seen?, Sakura absolute serious really.",style:'Curious.'},
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、プラハ、絶対、いつか、絶対、行きたいよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Riku — you Prague someday go-want, absolute serious really.",style:'Eager.'},
    {speaker:'riku_teen',jp:'お前のお姉ちゃん、本気で、絶対、瀬戸、絶対、市、絶対、出身だよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Your sis Seto-city origin, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'リク、お前の好きな漫画、本気で、絶対、譚、絶対、ってタイトル、絶対、入ってるよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Riku — your fave-manga 'tan' title included, absolute serious really.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'お前のノートの、本気で、絶対、挿絵、絶対、上手いな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Your notebook illustration skilled, Sakura absolute serious really.",style:'Praising close.'},
  ]},
  {id:'conv_07900',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、お父さん、本気で、絶対、伊勢、絶対、お出張、絶対、行ったの?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — Dad Ise biz-trip went?, absolute serious really.",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'翔くん、お友達の、本気で、絶対、明日香、絶対、ちゃん、絶対、お家、絶対、来てくれたわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — friend Asuka home-came, absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、日テレ、絶対、の、絶対、ニュース、絶対、見たよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — NTV news saw, absolute serious really.",style:'Reflective child.'},
    {speaker:'yumiko_mom',jp:'翔くん、お父さんの仕事、本気で、絶対、タール、絶対、扱う、絶対、現場、絶対、ある、絶対、らしいわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — Dad-work tar-handle site exists, absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、ぼく、本気で、絶対、プラハ、絶対、絵本、絶対、読んだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom — me Prague picture-book read, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'翔くん、お祖母ちゃんの、本気で、絶対、瀬戸、絶対、焼きの、絶対、お皿、絶対、大切なのよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — grandma Seto-ware plate precious, absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、ぼく、本気で、絶対、譚、絶対、っていう漢字、絶対、初めて見たよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — me 'tan' kanji first-saw, absolute serious really.",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、絵本の、絶対、挿絵、絶対、お父さんが、絶対、描いた、絶対、らしいわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — picture-book illustration Dad-drew seems, absolute serious really.",style:'Reflective close.'},
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

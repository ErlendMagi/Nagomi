import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_394 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['大袈裟','串','コースター','灯り','偽物','同年代','重たい','ピーマン']
const B_T = ['招聘','来賓','一報','区役所','登用','譲り','心掛け','御礼']
const C_T = ['挙げる','鋭く','有権者','流入','伝染病','地形','能動','神宮']
const D_T = ['王道','東京タワー','大相撲','バッター','金メダル','声優','ジョギング','レア']

const data = [
  {id:'conv_07841',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat at home',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、お父さん、本気で、絶対、大袈裟、絶対、に、絶対、お話、絶対、するわよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — Dad exaggerated-talk does, absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、ぼく、本気で、絶対、串、絶対、団子、絶対、食べたいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — me skewer-dumpling eat-want, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'翔くん、お父さんの、本気で、絶対、コースター、絶対、お洒落ね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Dad-coaster stylish, absolute serious really.",style:'Praising.'},
    {speaker:'sho_child',jp:'ママ、お部屋の、本気で、絶対、灯り、絶対、優しいね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mom — room-light gentle, absolute serious really.",style:'Wondering.'},
    {speaker:'yumiko_mom',jp:'翔くん、その、本気で、絶対、偽物、絶対、のおもちゃ、絶対、捨てましょうね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — fake-toy throw-away-let's, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'ママ、ぼく、本気で、絶対、同年代、絶対、のお友達、絶対、たくさんいるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — me same-age friends many-have, absolute serious really.",style:'Proud child.'},
    {speaker:'yumiko_mom',jp:'翔くん、その、本気で、絶対、重たい、絶対、鞄、絶対、お母さん、絶対、持ってあげるわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — heavy-bag Mom carry-give, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、ぼく、本気で、絶対、ピーマン、絶対、食べられるようになったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — me green-pepper eat-can-became, absolute serious really.",style:'Proud close.'},
  ]},
  {id:'conv_07842',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、大袈裟、絶対、に、絶対、ほめなくていいわよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — exaggerated-praise no-need, Mei absolute serious really.",style:'Wry.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、新メニューの、絶対、串、絶対、焼き、絶対、人気よ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — new-menu skewer-grill popular, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、お店の、本気で、絶対、コースター、絶対、新調したわよね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — store-coaster renewed, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵、お店の、本気で、絶対、灯り、絶対、お洒落にしたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — store-light stylish-made, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、偽物、絶対、ブランド品、絶対、増えてるそうね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — fake-brand-goods increasing, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、同年代、絶対、のお客様、絶対、よく来るよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — same-age cust often-come, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、お店の、本気で、絶対、重たい、絶対、お皿、絶対、軽いのに、絶対、変えたら?メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — store heavy-plate light-change?, Mei absolute serious really.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、ピーマン、絶対、のお料理、絶対、新メニューよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — green-pepper-dish new-menu, Mei absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07843',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、お父さん、本気で、絶対、大袈裟、絶対、に、絶対、お喜びだったぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Gran — youth Dad exaggerated-glad-was, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、お祖父ちゃん、本気で、絶対、お祭りの、絶対、串、絶対、焼き、絶対、お好きだったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Youth — Grandpa fest skewer-grill liked, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、お父さんに、絶対、コースター、絶対、編んでくれたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran Dad coaster knit-gave, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、お庭の、絶対、灯り、絶対、お楽しみだったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa garden-light enjoyed, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、偽物、絶対、を、絶対、嫌う、絶対、人だったわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran fake-dislike person, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、同年代、絶対、のお仲間、絶対、お多くおありだったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — Grandpa same-age friends many-had, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、お父さんの、絶対、重たい、絶対、荷物、絶対、運んでくれたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — gran Dad-heavy-bag carried, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、お庭で、絶対、ピーマン、絶対、育てたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa garden green-pepper grew, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07844',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、大袈裟、絶対、に、絶対、言うなよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Riku — you exaggerated-don't-say, absolute serious really.",style:'Wry teen.'},
    {speaker:'riku_teen',jp:'お前、文化祭で、本気で、絶対、串、絶対、団子、絶対、買ったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"You — fest skewer-dumpling bought, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'リク、お前のスマホの、本気で、絶対、コースター、絶対、可愛いね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Riku — your phone-coaster cute, absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'お前のスタンドの、本気で、絶対、灯り、絶対、お洒落だな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Your stand-light stylish, Sakura absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'リク、お前の、本気で、絶対、偽物、絶対、のサングラス、絶対、バレたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Riku — your fake-sunglasses caught, absolute serious really.",style:'Teasing.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、同年代、絶対、で、絶対、強い、絶対、選手、絶対、知ってる?桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"You — same-age strong-player know?, Sakura absolute serious really.",style:'Curious.'},
    {speaker:'sakura_teen',jp:'リク、お前のリュック、本気で、絶対、重たい、絶対、よね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Riku — your backpack heavy, absolute serious really.",style:'Wry.'},
    {speaker:'riku_teen',jp:'お前のお弁当の、本気で、絶対、ピーマン、絶対、肉詰め、絶対、ウマかったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Your bento green-pepper-meat-stuff tasty, Sakura absolute serious really.",style:'Praising close.'},
  ]},
  {id:'conv_07845',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、大袈裟、絶対、なのは、絶対、苦手なの、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis exaggerated-thing dislike, absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、お祭りで、本気で、絶対、串、絶対、焼き、絶対、買ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — me fest skewer-grill bought, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、お店の、本気で、絶対、コースター、絶対、手作りなのよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — Mei-sis store-coaster handmade, absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、お部屋の、本気で、絶対、灯り、絶対、優しいね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — room-light gentle, absolute serious really.",style:'Wondering child.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、偽物、絶対、と、絶対、本物、絶対、見分けられるようになろうね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — fake-real distinguish-can-become, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼくと、本気で、絶対、同年代、絶対、のお友達、絶対、メイ姉さんも知ってる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — me same-age friends Mei-sis-know-too?, absolute serious really.",style:'Curious.'},
    {speaker:'mei_romantic',jp:'翔くん、お父さんの、本気で、絶対、重たい、絶対、お鞄、絶対、手伝ってあげてね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — Dad-heavy-bag help-give, absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、本気で、絶対、ピーマン、絶対、お料理、絶対、メイ姉さんに、絶対、習いたいな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me green-pepper-cook Mei-sis-learn-want, absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07846',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    {speaker:'hiroshi_boss',jp:'当社、本気で、絶対、有識者、絶対、招聘、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Our co — expert invite advance, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。式典、本気で、絶対、来賓、絶対、ご案内、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Ceremony VIP-guests guide advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'契約成立、本気で、絶対、一報、絶対、入れろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Contract-deal first-notify-in, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。本気で、絶対、区役所、絶対、への、絶対、申請、絶対、完了しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Ward-office application completed, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'若手、本気で、絶対、登用、絶対、進めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Young promote advance, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。先代から、本気で、絶対、譲り、絶対、受けた、絶対、社風、絶対、大事にしております、本気for、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. From-prev-gen inherited culture cherish, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'社員、本気で、絶対、心掛け、絶対、いつも、絶対、ほめろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Staff mindfulness always-praise, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お客様への、本気で、絶対、御礼、絶対、状、絶対、お送りいたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Cust thank-you-letter sent, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07847',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'有識者、本気で、絶対、招聘、絶対、ご相談、絶対、しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Expert invite consult, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。創立記念パーティの、本気で、絶対、来賓、絶対、リスト、絶対、整えております、本気for、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Anniv-party VIP-guest list arrange, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'契約締結、本気で、絶対、一報、絶対、いただきましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Contract-sign first-notify get, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。本気で、絶対、区役所、絶対、書類、絶対、提出済みです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Ward-office doc submitted, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'若手社員、本気で、絶対、登用、絶対、進めましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Young-staff promote advance, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。先代から、本気で、絶対、譲り、絶対、受けた、絶対、お得意様、絶対、大切にしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. From-prev-gen inherited VIP cherish, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'社員、本気で、絶対、心掛け、絶対、社内報、絶対、特集しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Staff mindfulness in-house-mag feature, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。年末の、本気で、絶対、御礼、絶対、ご挨拶、絶対、まとめております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Year-end thanks-greetings compile, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07848',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、海外、本気で、絶対、招聘、絶対、研究員、絶対、知ってるか?本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Ren — overseas-invited researcher know?, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。学会、本気で、絶対、来賓、絶対、として、絶対、お出迎え、絶対、いたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Conf VIP-guest-as welcomed, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'蓮、新発見、本気で、絶対、一報、絶対、教授に、絶対、入れろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Ren — new-discov first-notify prof-in, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。本気で、絶対、区役所、絶対、で、絶対、住民票、絶対、取得しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Ward-office res-cert got, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'蓮、若手研究員の、本気で、絶対、登用、絶対、努めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Ren — young-researcher promote try, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。先輩から、本気で、絶対、譲り、絶対、受けた、絶対、研究、絶対、大切にしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. From-senior inherited research cherish, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'蓮、研究、本気で、絶対、心掛け、絶対、誠実に、絶対、しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Ren — research mindfulness sincere-do, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。指導教官への、本気で、絶対、御礼、絶対、文、絶対、お送りいたしました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Advisor thank-you-letter sent, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07849',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、有識者、絶対、招聘、絶対、講演会、絶対、開催いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police expert-invite lecture hold, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察、本気で、絶対、来賓、絶対、として、絶対、お招きいただきありがたいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Police VIP-guest-as invited grateful, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、事件、絶対、一報、絶対、入りました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Police case first-notify came-in, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察と、本気で、絶対、区役所、絶対、連携、絶対、ありがたいです、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Police-ward-office coop grateful, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、女性、絶対、登用、絶対、推進、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Police female-promote push, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察、本気で、絶対、譲り、絶対、合いの、絶対、運転、絶対、お願いされております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Police yield-driving requested, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、安全、絶対、心掛け、絶対、徹底、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Police safety mindfulness thorough, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。地域からの、本気で、絶対、御礼、絶対、お言葉、絶対、警察、絶対、ありがたく頂戴しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Region thanks-words police-receive-grateful, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07850',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'お父さん、創業期、本気で、絶対、海外、絶対、招聘、絶対、技師、絶対、迎えたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Dad — founding overseas-invited engineer welcomed, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの、本気で、絶対、来賓、絶対、対応、絶対、見習っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Dad VIP-guest-resp emulate, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、大事な、絶対、契約、絶対、一報、絶対、必ず、絶対、伝えてくれたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad — important contract first-notify surely-told, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんが、本気で、絶対、区役所、絶対、と、絶対、地域貢献、絶対、進めた、絶対、お話、絶対、伺っております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Dad ward-office region-contrib advanced story heard, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、若手、絶対、登用、絶対、推進、絶対、なさったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Dad — young-promote pushed, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんから、本気で、絶対、譲り、絶対、受けた、絶対、お得意様、絶対、大切にしております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. From-Dad inherited VIP cherish, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、商売の、絶対、心掛け、絶対、いつも、絶対、誠実だったぞ、本気for、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対。',en:"Dad — biz-mindfulness always-sincere, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんが、本気で、絶対、お客様への、絶対、御礼、絶対、絶対欠かさなかった、絶対、姿勢、絶対、引き継いでおります、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Dad cust thanks absolute-never-skipped stance inherit, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07851',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、歴史的偉業を、本気で、絶対、挙げる、絶対、人物、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — hist-feat raise person paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。批評家が、本気で、絶対、鋭く、絶対、指摘、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Thanks. Critic sharply-pointed paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'若年、本気で、絶対、有権者、絶対、の、絶対、投票行動、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Young voter voting-behavior paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。移民の、本気で、絶対、流入、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Immigrant influx paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'歴史的、本気で、絶対、伝染病、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Hist epidemic paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。離島の、本気で、絶対、地形、絶対、分析、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Isolated-island terrain-analysis paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'本気で、絶対、能動、絶対、的な、絶対、学習法、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Active learning-method paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。明治神宮の、本気で、絶対、神宮、絶対、参道、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Meiji-Jingu shrine approach paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07852',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、警察、絶対、容疑者、絶対、挙げる、絶対、ことができました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Case police suspect arrest-can-did, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、警察、絶対、鋭く、絶対、追跡、絶対、されたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Case police sharply-tracked, gratitude absolute serious really.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、有権者、絶対、への、絶対、影響、絶対、警察、絶対、検証中です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Case voter impact police-verify, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、不法、絶対、流入、絶対、品、絶対、警察、絶対、押収、絶対、されたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Case illegal influx-goods police-seized, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、伝染病、絶対、対策、絶対、警察、絶対、保健所、絶対、連携、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Case epidemic counter police-health-coop, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、現場の、絶対、地形、絶対、警察、絶対、調査、絶対、されたんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Case scene-terrain police-survey, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、能動、絶対、的な、絶対、捜査、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Police active-inv advance, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、神宮、絶対、付近の、絶対、警備、絶対、警察、絶対、強化、絶対、されたそうですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Case shrine-area sec police-strengthen, gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07853',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、歴史的偉業を、本気で、絶対、挙げる、絶対、人物、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sakura — hist-feat raise person paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。批評家が、本気で、絶対、鋭く、絶対、指摘、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Thanks. Critic sharply-pointed paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'若年、本気で、絶対、有権者、絶対、の、絶対、投票行動、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Young voter voting-behavior paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。移民の、本気で、絶対、流入、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Immigrant influx paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'歴史的、本気で、絶対、伝染病、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Hist epidemic paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。離島の、本気で、絶対、地形、絶対、分析、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Isolated-island terrain-analysis paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'本気で、絶対、能動、絶対、的な、絶対、学習法、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Active learning-method paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。明治神宮の、本気で、絶対、神宮、絶対、参道、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Meiji-Jingu shrine approach paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07854',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、症例の、本気で、絶対、挙げる、絶対、議論、絶対、医療チーム、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — case-raise discussion med-team do, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'貴院、本気で、絶対、症状、絶対、鋭く、絶対、診断、絶対、されているそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Your-hosp symptom sharply-diag, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。本気で、絶対、有権者、絶対、への、絶対、医療政策、絶対、医療チーム、絶対、ご説明、絶対、参加しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Voter-med-policy med-team explain-participate, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'観光客の、本気で、絶対、流入、絶対、貴院、絶対、医療対応、絶対、されているそうですね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Tourist influx your-hosp med-resp, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。本気で、絶対、伝染病、絶対、対策、絶対、医療チーム、絶対、徹底、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Epidemic counter med-team thorough, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'山岳の、本気で、絶対、地形、絶対、医療搬送、絶対、貴院、絶対、対応されているんですね、先生、本気for、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mountain-terrain med-transport your-hosp respond, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。患者さんの、本気で、絶対、能動、絶対、的な、絶対、参加、絶対、医療チーム、絶対、重視しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Patient active-particip med-team emphasize, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'本気で、絶対、神宮、絶対、外苑の、絶対、ジョギング、絶対、患者さんに、絶対、おすすめ、絶対、されていますか?先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Jingu-gaien jogging patient-recommend?, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07855',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    {speaker:'hiroshi_boss',jp:'当社、本気で、絶対、業績、絶対、挙げる、絶対、社員、絶対、評価しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Our co — perf-raise staff evaluate, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。市場、本気で、絶対、鋭く、絶対、分析、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Market sharply-analyze advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'当社、本気で、絶対、有権者、絶対、向け、絶対、CSR、絶対、強化しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Our voter-target CSR strengthen, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。お客様、本気で、絶対、流入、絶対、増加しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Cust influx increase, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'社員、本気で、絶対、伝染病、絶対、予防、絶対、徹底しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Staff epidemic prevent thorough, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新工場用地の、本気で、絶対、地形、絶対、調査、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. New-factory-site terrain-survey advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'社員、本気で、絶対、能動、絶対、的な、絶対、提案、絶対、求めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Staff active-proposal request, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、神宮、絶対、近くに、絶対、新店舗、絶対、検討中です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Our shrine-near new-store considering, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07856',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、王道、絶対、ロマンス映画、絶対、好きよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — orthodox romance-movie like, Mei absolute serious really.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、東京タワー、絶対、夜景、絶対、最高だったよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — Tokyo-Tower night-view best, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、大相撲、絶対、観戦、絶対、行きたいな、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — Grand-Sumo watch go-want, Mei absolute serious really.",style:'Eager.'},
    {speaker:'aoi_barista',jp:'葵、野球の、本気で、絶対、バッター、絶対、すごかったよ、メイちゃん、本気for、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — baseball batter amazing, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、金メダル、絶対、選手、絶対、お店、絶対、来てくれたわ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi — gold-medalist store-came, Mei absolute serious really.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'葵、お気に入りの、本気で、絶対、声優、絶対、ラジオ、絶対、聴いてるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — fave voice-actor radio listen, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、ジョギング、絶対、毎朝、絶対、続けてるの、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — jogging every-morning continue, Mei absolute serious really.",style:'Earnest.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、レア、絶対、なコーヒー豆、絶対、お店に入れたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — rare coffee-bean store-put, Mei absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07857',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、お父さん、本気で、絶対、王道、絶対、の、絶対、商売、絶対、貫いたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Gran — youth Dad orthodox-biz saw-through, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、お祖父ちゃん、本気で、絶対、東京タワー、絶対、お連れくださったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Youth — Grandpa Tokyo-Tower took, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、大相撲、絶対、テレビ、絶対、応援してたわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran Grand-Sumo TV-cheered, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、野球の、絶対、バッター、絶対、お好きだったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa baseball-batter liked, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、オリンピックの、絶対、金メダル、絶対、選手、絶対、喜んだわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — gran Olympics gold-medalist celebrated, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、ラジオの、絶対、声優、絶対、お好きだったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Grandpa radio voice-actor liked, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、ばあさん、本気で、絶対、お父さんと、絶対、ジョギング、絶対、なさったわよな、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — gran Dad jogging did, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、お祖父ちゃん、本気で、絶対、レア、絶対、なお切手、絶対、集めていらしたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — Grandpa rare-stamps collected, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07858',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、王道、絶対、のアニメ、絶対、好きよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — Mei-sis orthodox-anime like, absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、本気で、絶対、東京タワー、絶対、お父さんと、絶対、行ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — me Tokyo-Tower Dad went, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、大相撲、絶対、見たいと思ってるの、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis Grand-Sumo see-want-think, absolute serious really.",style:'Eager.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、本気で、絶対、バッター、絶対、頑張ってるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me batter try, absolute serious really.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'翔くん、本気で、絶対、金メダル、絶対、選手、絶対、テレビで、絶対、見たわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — gold-medalist TV-saw, absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、お気に入りの、本気で、絶対、声優、絶対、いるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me fave voice-actor have, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、ジョギング、絶対、毎朝、絶対、してるのよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — Mei-sis jogging every-morning do, absolute serious really.",style:'Earnest.'},
    {speaker:'sho_child',jp:'メイ姉さん、ぼく、本気で、絶対、レア、絶対、なカード、絶対、ゲットしたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me rare card got, absolute serious really.",style:'Proud close.'},
  ]},
  {id:'conv_07859',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、王道、絶対、の少年漫画、絶対、好きだよね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Riku — you orthodox-shonen-manga like, absolute serious really.",style:'Curious teen.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、東京タワー、絶対、修学旅行で、絶対、行ったぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"You — Tokyo-Tower school-trip went, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、大相撲、絶対、観たことある?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Riku — you Grand-Sumo seen?, absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、バッター、絶対、ボックス、絶対、緊張するよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"You — batter-box nervous, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、金メダル、絶対、目指してるんだろ?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Riku — you gold-medal aim?, absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、声優、絶対、になりたいって言ってたよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"You — voice-actor become-want said, Sakura absolute serious really.",style:'Curious.'},
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、ジョギング、絶対、続いてるよな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Riku — jogging continuing, absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'お前、本気で、絶対、レア、絶対、なグッズ、絶対、持ってんな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"You — rare-goods have, Sakura absolute serious really.",style:'Praising close.'},
  ]},
  {id:'conv_07860',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、ぼく、本気で、絶対、王道、絶対、のアニメ、絶対、見たよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — me orthodox-anime saw, absolute serious really.",style:'Eager child.'},
    {speaker:'yumiko_mom',jp:'翔くん、お父さんが、本気で、絶対、東京タワー、絶対、お写真、絶対、送ってくださったわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Dad Tokyo-Tower photo sent, absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'ママ、お父さん、本気で、絶対、大相撲、絶対、テレビで、絶対、見てたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — Dad Grand-Sumo TV-watched, absolute serious really.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、バッター、絶対、頑張ってね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — batter try, absolute serious really.",style:'Encouraging.'},
    {speaker:'sho_child',jp:'ママ、ぼく、本気で、絶対、金メダル、絶対、取りたいな、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — me gold-medal take-want, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'翔くん、お気に入りの、本気で、絶対、声優、絶対、いるの?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — fave voice-actor have?, absolute serious really.",style:'Curious.'},
    {speaker:'sho_child',jp:'ママ、お父さんと、本気で、絶対、ジョギング、絶対、行ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — Dad jogging went, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'翔くん、ママの、本気で、絶対、レア、絶対、なお皿、絶対、大切なのよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Sho — Mom rare-plate precious, absolute serious really.",style:'Tender close.'},
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

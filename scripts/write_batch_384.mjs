import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_384 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['臨時','外側','民生','自前','和風','出会える','全般','丁度']
const B_T = ['図る','プライバシー','改造','浸透','中野','対照','許諾','質的']
const C_T = ['東大','明治維新','封建','前例','欠落','気の毒','暴走','衝動']
const D_T = ['曲目','新曲','雑音','緻密','ロッカー','似顔絵','起こる','ちがい']

const data = [
  {id:'conv_07641',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at home',lines:[
    {speaker:'yumiko_mom',jp:'翔くん、本気で、絶対、お父さん、絶対、臨時、絶対、ボーナス、絶対、もらったらしいわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho — Dad temp-bonus got-seems, absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お家の、絶対、外側、絶対、ペンキ、絶対、塗り直すんでしょ?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mom — home outer-side paint repaint?, absolute serious really.",style:'Curious child.'},
    {speaker:'yumiko_mom',jp:'お父さんの会社、本気で、絶対、民生、絶対、用品、絶対、扱ってるのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Dad-co — consumer-goods handle, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ぼく、本気で、絶対、お祖父ちゃんの、絶対、自前、絶対、の野菜、絶対、好きだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Me — Grandpa self-veg like, absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お祖母ちゃんの、本気で、絶対、和風、絶対、お料理、絶対、ママも、絶対、習いたいわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Granny Japanese-cuisine — Mom-also learn-want, absolute serious really.",style:'Eager.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼく、絶対、新しい、絶対、お友達、絶対、出会える、絶対、よね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — me new friend meet-can?, absolute serious really.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'家のお掃除、本気で、絶対、全般、絶対、ちゃんとしましょうね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Home-clean general — proper-do, Sho absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'お風呂の温度、本気で、絶対、丁度、絶対、いいよ、ママ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Bath-temp just-right, Mom absolute serious really.",style:'Animated close.'},
  ]},
  {id:'conv_07642',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、臨時、絶対、店休日、絶対、メイちゃん、絶対、知ってたわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Aoi — temp-closed-day Mei-knew, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、お店の、絶対、外側、絶対、看板、絶対、塗り替えたよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yeah. Aoi — store outer-sign repainted, Mei absolute serious really.",style:'Practical.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、民生、絶対、向け、絶対、お弁当、絶対、メイちゃん、絶対、応援してるわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — consumer-bento Mei-support, absolute serious really.",style:'Encouraging.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、自前、絶対、の野菜、絶対、お店で、絶対、提供してるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — self-veg store-offer, Mei absolute serious really.",style:'Praising.'},
    {speaker:'mei_romantic',jp:'葵の、本気で、絶対、和風、絶対、メニュー、絶対、メイちゃん、絶対、お気に入りよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Aoi Japanese-menu — Mei-fave, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵のお店で、本気で、絶対、素敵な、絶対、お客様、絶対、出会える、絶対、わよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-store — wonderful cust meet-can, Mei absolute serious really.",style:'Tender.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お店の、絶対、全般、絶対、改革、絶対、メイちゃん、絶対、感心してるわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — store general-reform Mei-admire, absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、丁度、絶対、いい、絶対、温度の、絶対、コーヒー、絶対、提供してるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — just-right temp coffee offer, Mei absolute serious really.",style:'Practical close.'},
  ]},
  {id:'conv_07643',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、お父さん、絶対、臨時、絶対、雇い、絶対、よく、絶対、引き受けたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Gran — youth Dad temp-hire often-took, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、家の、絶対、外側、絶対、お祖父ちゃん、絶対、自分で、絶対、塗ったわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Youth — home outer-side Grandpa-self-painted, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、お父さん、絶対、民生、絶対、品、絶対、扱う、絶対、商売を、絶対、していたぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Dad consumer-goods handle biz-doing, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、自前、絶対、で、絶対、家具、絶対、作っていたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa self-made furniture, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、和風、絶対、家屋、絶対、お父さん、絶対、誇りに、絶対、思ったぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — Japanese-house Dad-proud, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、町で、絶対、素敵な、絶対、人と、絶対、出会える、絶対、ご縁が、絶対、ありましたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — town wonderful-people meet-can fate-existed, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、家業、絶対、全般、絶対、お父さん、絶対、見渡したぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Youth — family-biz general Dad-oversaw, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、丁度、絶対、時計、絶対、お祖父ちゃん、絶対、贈ってくれたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Youth — just-right watch Grandpa-gave, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07644',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、お前、本気で、絶対、臨時、絶対、バイト、絶対、始めたんだって?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Riku — you temp-part-time started?, absolute serious really.",style:'Curious teen.'},
    {speaker:'riku_teen',jp:'うん。校舎の、本気で、絶対、外側、絶対、塗装、絶対、業者が、絶対、来てたぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yeah. School outer-side paint-contractor came, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'お父さんの会社、本気で、絶対、民生、絶対、製品、絶対、扱ってるんだよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Dad-co — consumer-prod handle, Riku absolute serious really.",style:'Curious.'},
    {speaker:'riku_teen',jp:'文化祭、本気で、絶対、俺たち、絶対、自前、絶対、の衣装、絶対、作るぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Fest — us self-made costume, Sakura absolute serious really.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'お祖母ちゃんの、本気で、絶対、和風、絶対、お料理、絶対、お土産に、絶対、もらったよ、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Granny Japanese-cuisine — souv-got, Riku absolute serious really.",style:'Animated.'},
    {speaker:'riku_teen',jp:'修学旅行で、本気で、絶対、新しい、絶対、ともだち、絶対、出会える、絶対、よな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"School-trip — new friends meet-can, Sakura absolute serious really.",style:'Eager.'},
    {speaker:'sakura_teen',jp:'部活、本気で、絶対、全般、絶対、お前、絶対、頑張ってるよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Club general — you-try, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'お前と、本気で、絶対、丁度、絶対、家、絶対、近いから、絶対、一緒に帰ろうぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"You-with just-right home-close — go-together, Sakura absolute serious really.",style:'Warm close.'},
  ]},
  {id:'conv_07645',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、臨時、絶対、お休み、絶対、もらえたわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho — Mei-sis temp-off got, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、お庭の、絶対、外側、絶対、塀、絶対、ぼく、絶対、塗ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — garden outer-fence me-painted, absolute serious really.",style:'Proud child.'},
    {speaker:'mei_romantic',jp:'メイ姉さんの、本気で、絶対、お店、絶対、民生、絶対、向け、絶対、お弁当、絶対、出しているのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis-store consumer-bento offer, Sho absolute serious really.",style:'Animated.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、自前、絶対、の絵、絶対、お父さんに、絶対、見せたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — me self-painting Dad-showed, absolute serious really.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、和風、絶対、お庭、絶対、ご近所で、絶対、見たわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — Japanese-garden neighbor-saw, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、メイ姉さんに、絶対、毎日、絶対、出会える、絶対、と、絶対、嬉しいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me Mei-sis every-day meet-can — glad, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お家の、絶対、全般、絶対、お掃除、絶対、終わらせたわ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — home general-clean finish, Sho absolute serious really.",style:'Practical.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、丁度、絶対、今、絶対、ぼく、絶対、ピアノ、絶対、終わったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — just-now me piano-ended, absolute serious really.",style:'Eager close.'},
  ]},
  {id:'conv_07646',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews operations',lines:[
    {speaker:'hiroshi_boss',jp:'新規市場への、本気で、絶対、進出を、絶対、図る、絶対、よう、絶対、戦略を、絶対、立てろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"New-market entry attempt strat-set, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。お客様の、本気で、絶対、プライバシー、絶対、保護、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Cust-privacy protect thorough, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'古い設備の、本気で、絶対、改造、絶対、計画、絶対、見直せ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Old-equip remodel plan review, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新製品、本気で、絶対、市場に、絶対、浸透、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. New-prod market-penetrate advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'中野、本気で、絶対、支店、絶対、業績、絶対、確認しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Nakano branch perf — verify, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。前期と今期の、本気で、絶対、対照、絶対、表、絶対、作成しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Last-term vs this-term compar-table — create, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'お客様の、本気で、絶対、許諾、絶対、取得、絶対、徹底しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Cust-consent obtain thorough, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社製品の、本気で、絶対、質的、絶対、向上、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Our prod quality-improve advance, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07647',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    {speaker:'yuki_office',jp:'業界での地位向上を、本気で、絶対、図る、絶対、ため、絶対、戦略、絶対、見直しましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Industry-pos-up attempt — strat-review, absolute serious really.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。社員の、本気で、絶対、プライバシー、絶対、配慮、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Staff-privacy care thorough, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'本社の、本気で、絶対、改造、絶対、計画、絶対、進めましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"HQ remodel plan advance, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。新サービス、本気で、絶対、浸透、絶対、率、絶対、上昇中です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. New-service penetrate-rate rising, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'中野、本気で、絶対、地区、絶対、開拓、絶対、進めましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Nakano area-develop advance, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。競合との、本気で、絶対、対照、絶対、分析、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Rival comparison-analyze advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'yuki_office',jp:'契約の、本気で、絶対、許諾、絶対、書、絶対、整えましょう、本気で、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Contract consent-doc prep, absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。改善、本気で、絶対、質的、絶対、にも、絶対、量的にも、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Improve quality-and-quantity advance, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07648',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors an intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、研究の発展を、本気で、絶対、図る、絶対、よう、絶対、頼むぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — research-dev attempt ask, ask absolute serious really.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。研究対象者の、本気で、絶対、プライバシー、絶対、保護、絶対、徹底しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Research-subject privacy protect thorough, gratitude absolute serious really.",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'実験装置の、本気で、絶対、改造、絶対、必要、絶対、見極めろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Exp-device remodel-need discern, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。新理論、本気で、絶対、学界に、絶対、浸透、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. New theory acad-penetrate advance, gratitude absolute serious really.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'中野、本気で、絶対、教授、絶対、研究、絶対、参考にしろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Nakano prof research ref, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。過去論文との、本気で、絶対、対照、絶対、分析、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Past-paper comparison-analyze advance, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'被験者の、本気で、絶対、許諾、絶対、書、絶対、整えろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Subject consent-doc prep, ask absolute serious really.",style:'Direction.'},
    {speaker:'ren_uni',jp:'はい。論文の、本気で、絶対、質的、絶対、向上、絶対、目指しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Paper quality-improve aim, gratitude absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07649',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs',lines:[
    {speaker:'takeda_officer',jp:'地域安全の向上を、本気で、絶対、図る、絶対、よう、絶対、警察、絶対、ご対応、絶対、いたします、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Local-safety up attempt — police-handle, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。警察様、本気で、絶対、プライバシー、絶対、への配慮、絶対、ありがとうございます、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Police-privacy care gratitude, gratitude absolute serious really.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'警察車両の、本気で、絶対、改造、絶対、必要、絶対、検討、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Police-vehicle remodel-need consider, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。防犯意識の、本気で、絶対、浸透、絶対、当社、絶対、進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Crime-prev-aware penetrate — our co advance, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'警察、本気で、絶対、中野、絶対、署、絶対、と、絶対、連携、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Police Nakano-station coop, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。過去事例との、本気で、絶対、対照、絶対、警察様、絶対、ご提供、絶対、いただきました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Past-case comparison — police-provided, gratitude absolute serious really.",style:'Update.'},
    {speaker:'takeda_officer',jp:'情報提供の、本気で、絶対、許諾、絶対、を、絶対、市民、絶対、よりいただいております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Info-provide consent — citizen-given, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。警察、本気で、絶対、捜査の、絶対、質的、絶対、向上、絶対、目指していらっしゃいますね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Police inv quality-improve aim, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07650',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'創業期、本気で、絶対、お父さん、絶対、商売の発展を、絶対、図る、絶対、ため、絶対、走り回ったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対。',en:"Founding — Dad biz-dev attempt ran-around, ask absolute serious really.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、お客様の、絶対、プライバシー、絶対、守ってまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — cust-privacy kept, gratitude absolute serious really.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、工場の、絶対、改造、絶対、自分で、絶対、設計したぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Dad — factory remodel self-designed, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの精神、本気で、絶対、社内、絶対、浸透、絶対、しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Dad-spirit — internal-penetrate, gratitude absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、中野、絶対、地区、絶対、開拓、絶対、最初、絶対、頑張ったぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気。',en:"Dad — Nakano area-develop first-tried, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代と今の、本気で、絶対、対照、絶対、表、絶対、ばあさんと作りました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Dad-era vs now comparison — gran-made, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'hiroshi_elder',jp:'お父さん、本気で、絶対、お取引先の、絶対、許諾、絶対、丁寧に、絶対、取ってきたぞ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Dad — partner consent polite-took, ask absolute serious really.",style:'Wistful.'},
    {speaker:'hiroshi_boss',jp:'はい。お父さんの代から、本気で、絶対、商売の、絶対、質的、絶対、向上、絶対、目指してまいりました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Since Dad-era — biz quality-improve aim, gratitude absolute serious really.",style:'Wise close.'},
  ]},
  {id:'conv_07651',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses history',lines:[
    {speaker:'asuka_teacher',jp:'蓮さん、本気で、絶対、東大、絶対、史、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Ren — Tokyo-U hist paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'ありがとうございます。本気で、絶対、明治維新、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Thanks. Meiji-Restoration paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'江戸時代の、本気で、絶対、封建、絶対、制、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Edo-era feudal-system paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。歴史上の、本気で、絶対、前例、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Hist precedent paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'記録の、本気で、絶対、欠落、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Record-loss paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'はい。戦争被害者への、本気で、絶対、気の毒、絶対、な、絶対、立場、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. War-victim pitiful-stance paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時の、本気で、絶対、暴走、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Wartime runaway-act paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。歴史上の、本気で、絶対、衝動、絶対、的決断、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Hist impulsive-decision paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07652',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer discusses cases',lines:[
    {speaker:'takeda_officer',jp:'本件、本気で、絶対、容疑者の、絶対、東大、絶対、出身者、絶対、警察、絶対、慎重に対応しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Case — suspect Tokyo-U-alum police careful handle, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'歴史展で、本気for、絶対、明治維新、絶対、特集、絶対、警察、絶対、警備、絶対、対応ですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Hist-expo Meiji-Restoration-feature police-sec — handle, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。歴史的、本気で、絶対、封建、絶対、制度、絶対、関連の、絶対、講演会、絶対、警備しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Hist feudal-related lecture-sec done, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'本件、本気で、絶対、前例、絶対、ない、絶対、事件、絶対、警察、絶対、ご対応大変ですよね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Case precedent-none — police-handle tough, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。証拠の、本気で、絶対、欠落、絶対、警察、絶対、捜査、絶対、難航しております、本気for、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Evidence-loss — police-inv hard, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被害者ご家族、本気で、絶対、気の毒、絶対、で、絶対、本当に、絶対、心が痛みますね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Victim-family pitiful — truly heart-pain, gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'takeda_officer',jp:'はい。容疑者、本気で、絶対、暴走、絶対、車、絶対、警察、絶対、追跡しました、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Suspect runaway-car — police-pursued, gratitude absolute serious really.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。容疑者の、本気で、絶対、衝動、絶対、的犯行、絶対、警察、絶対、解明、絶対、進めていらっしゃるんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Suspect impulsive-crime — police-clarify advance, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07653',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher mentors a teen',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、本気で、絶対、東大、絶対、史、絶対、論文で、扱っていましたね、本気で、感心、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sakura — Tokyo-U hist paper-handled, admire absolute serious really.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'ありがとうございます。本気で、絶対、明治維新、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Thanks. Meiji-Restoration paper-handled, deep research absolute gratitude really.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'江戸時代の、本気で、絶対、封建、絶対、制、絶対、論文で、扱っていましたね、本気で、本当に、視野、広い、絶対、立派、絶対、本気で、感心、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Edo-era feudal-system paper-handled, view broad splendid admire absolute really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。歴史上の、本気で、絶対、前例、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Hist precedent paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'記録の、本気で、絶対、欠落、絶対、論文で、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Record-loss paper-handled, admire absolute serious really.",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。戦争被害者への、本気で、絶対、気の毒、絶対、な、絶対、立場、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. War-victim pitiful-stance paper-handled, deep research absolute gratitude really.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'戦時の、本気で、絶対、暴走、絶対、論文で、絶対、扱っていましたね、本気で、本当に、感心、絶対、本気で、絶対、本気、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対。',en:"Wartime runaway-act paper-handled, admire absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'はい。歴史上の、本気で、絶対、衝動、絶対、的決断、絶対、論文で、扱いました、本気で、本当に、深い、研究、絶対、感謝、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Yes. Hist impulsive-decision paper-handled, deep research absolute gratitude really.",style:'Earnest close.'},
  ]},
  {id:'conv_07654',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public health',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、本気で、絶対、東大、絶対、医学部、絶対、ご縁の方、絶対、当院に、絶対、いらっしゃいますよ、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Ren — Tokyo-U med-faculty connected — our hosp visit, gratitude absolute serious really.",style:'Calm.'},
    {speaker:'ren_uni',jp:'明治維新、本気で、絶対、医学史、絶対、貴院、絶対、研究、絶対、続けて、絶対、いらっしゃるんですね、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Meiji-Restoration med-hist — your hosp research continue, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。江戸期の、本気で、絶対、封建、絶対、医療体制、絶対、貴重な研究対象、絶対、です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Edo feudal-med-system — precious research-target, gratitude absolute serious really.",style:'Informative.'},
    {speaker:'ren_uni',jp:'症例の、本気で、絶対、前例、絶対、ない、絶対、対応、絶対、医療チーム、絶対、難しいですよね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Case precedent-none — med-team hard, sensei gratitude absolute serious really.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。データの、本気で、絶対、欠落、絶対、医療現場、絶対、注意しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Data-loss med-scene — alert, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'難病の患者さん、本気で、絶対、気の毒、絶対、と、絶対、思いますね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Rare-disease patient — pitiful, sensei gratitude absolute serious really.",style:'Reflective.'},
    {speaker:'saito_doctor',jp:'はい。患者さんの病状の、本気で、絶対、暴走、絶対、医療チーム、絶対、抑える、絶対、対応しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Patient-condition runaway — med-team suppress-handle, gratitude absolute serious really.",style:'Patient.'},
    {speaker:'ren_uni',jp:'救急の、本気で、絶対、衝動、絶対、的判断、絶対、医療チーム、絶対、毎日のように、絶対、迫られますね、先生、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"ER impulsive-judge — med-team every-day-forced, sensei gratitude absolute serious really.",style:'Reflective close.'},
  ]},
  {id:'conv_07655',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews strategy',lines:[
    {speaker:'hiroshi_boss',jp:'当社、本気で、絶対、東大、絶対、研究室と、絶対、共同研究、絶対、検討しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Our co — Tokyo-U-lab joint-research consider, ask absolute serious really.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。本気で、絶対、明治維新、絶対、特集の協賛、絶対、検討中です、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Meiji-Restoration-feature sponsor consider, gratitude absolute serious really.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'当社の経営、本気で、絶対、封建、絶対、的にならぬよう、絶対、近代化しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Our co mgmt — feudal-don't modernize, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。業界、本気で、絶対、前例、絶対、ない、絶対、新サービス、絶対、開発しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Industry precedent-none new-service dev, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'データの、本気で、絶対、欠落、絶対、絶対、ない、絶対、よう、絶対、徹底しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Data-loss absolute-none thorough, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。業界、本気で、絶対、気の毒、絶対、な、絶対、企業、絶対、当社、絶対、支援、絶対、検討しております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yes. Industry pitiful-co — our co support consider, gratitude absolute serious really.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'競合の、本気で、絶対、暴走、絶対、当社、絶対、慎重に、絶対、対応しろ、本気で、頼んだぞ、絶対、本気、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Rival runaway — our co careful handle, ask absolute serious really.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。当社、本気で、絶対、衝動、絶対、的決断、絶対、避け、絶対、慎重に進めております、本気で、感謝、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yes. Our co — impulsive-decision avoid careful advance, gratitude absolute serious really.",style:'Close.'},
  ]},
  {id:'conv_07656',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'葵、コンサートの、本気で、絶対、曲目、絶対、メイちゃん、絶対、楽しみだったわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — concert song-list Mei-fun was, absolute serious really.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'うん。葵、本気で、絶対、好きな歌手の、絶対、新曲、絶対、毎日、絶対、聴いてるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Yeah. Aoi — fave-singer new-song every-day listen, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵のお店、本気で、絶対、夜の、絶対、雑音、絶対、少なくて、絶対、落ち着くわよね、メイちゃん、本気で、絶対、感心、絶対、本気、本気で、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi-store night noise-few — calm, Mei admire absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、緻密、絶対、な計画、絶対、立てて、絶対、お店、絶対、運営してるよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — meticulous plan-set store-run, Mei absolute serious really.",style:'Praising.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お店の、絶対、ロッカー、絶対、お客様、絶対、便利よ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi-store locker — cust convenient, Mei absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'葵、本気で、絶対、お客様の、絶対、似顔絵、絶対、描いて、絶対、プレゼント、絶対、しているよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Aoi — cust portrait draw-present do, Mei absolute serious really.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'葵、本気で、絶対、お店の、絶対、トラブル、絶対、起こる、絶対、と、絶対、すぐに、絶対、対応するよね、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Aoi — store-trouble arise — swift handle, Mei absolute serious really.",style:'Praising.'},
    {speaker:'aoi_barista',jp:'お客様の好みの、本気で、絶対、ちがい、絶対、葵、絶対、見抜くようにしているよ、メイちゃん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Cust-taste diff — Aoi see-through, Mei absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07657',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'An elderly couple reminisces',lines:[
    {speaker:'hiroshi_elder',jp:'ばあさん、若い頃、本気で、絶対、お正月の、絶対、曲目、絶対、お父さん、絶対、よく、絶対、聞いたぞ、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Gran — youth New-Year song-list Dad-often-heard, remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'うん。若い頃、本気で、絶対、お祖父ちゃん、絶対、新曲、絶対、ラジオで、絶対、すぐ、絶対、覚えたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Yes. Youth — Grandpa new-song radio quick-memorized, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、町、絶対、雑音、絶対、少なくて、絶対、静かだったぞ、ばあさん、覚えてる?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — town noise-few quiet was, gran remember?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、緻密、絶対、な、絶対、商売の計画、絶対、立てていたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — Grandpa meticulous biz-plan set, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、駅に、絶対、ロッカー、絶対、初めて、絶対、できた時、絶対、便利だったぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — station locker first-made convenient, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃん、絶対、お孫さんの、絶対、似顔絵、絶対、描いてくれたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — Grandpa grandkid portrait-drew, remember dear?, absolute serious really.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'若い頃、本気で、絶対、雨が、絶対、起こる、絶対、と、絶対、お父さん、絶対、傘を、絶対、持ってきてくれたぞ、覚えてる、ばあさん?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Youth — rain occur Dad-umbrella-brought, remember gran?, absolute serious really.",style:'Wistful.'},
    {speaker:'sachiko_grandma',jp:'若い頃、本気で、絶対、お祖父ちゃんと、絶対、ばあさん、絶対、ちがい、絶対、たくさんありましたわよね、覚えてる、あなた?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Youth — Grandpa-gran differences many-existed, remember dear?, absolute serious really.",style:'Tender close.'},
  ]},
  {id:'conv_07658',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'An aunt and nephew chat',lines:[
    {speaker:'mei_romantic',jp:'翔くん、メイ姉さん、本気で、絶対、コンサートの、絶対、曲目、絶対、楽しみよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Sho — Mei-sis concert song-list fun, absolute serious really.",style:'Warm.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、新曲、絶対、聴きたいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mei-sis — me new-song listen-want, absolute serious really.",style:'Eager child.'},
    {speaker:'mei_romantic',jp:'メイ姉さんの、本気で、絶対、お部屋、絶対、雑音、絶対、なくて、絶対、勉強に良いのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis-room noise-none — study-good, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、緻密、絶対、な絵、絶対、描いたよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Mei-sis — me meticulous-picture drew, absolute serious really.",style:'Proud.'},
    {speaker:'mei_romantic',jp:'メイ姉さん、本気で、絶対、お家の、絶対、ロッカー、絶対、ぼくの、絶対、お洋服、絶対、入れてあるわよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mei-sis — home locker my clothes-in, Sho absolute serious really.",style:'Practical.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、お母さんの、絶対、似顔絵、絶対、描きたいよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mei-sis — me Mom-portrait draw-want, absolute serious really.",style:'Eager.'},
    {speaker:'mei_romantic',jp:'地震が、本気で、絶対、起こる、絶対、と、絶対、ちゃんと、絶対、机の下に隠れてね、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Earthquake occur — proper desk-under hide, Sho absolute serious really.",style:'Direction.'},
    {speaker:'sho_child',jp:'メイ姉さん、本気で、絶対、ぼく、絶対、お友達と、絶対、性格の、絶対、ちがい、絶対、わかるよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Mei-sis — me friend-personality diff understand, absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07659',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'リク、合唱コンの、本気で、絶対、曲目、絶対、決まったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Riku — chorus-comp song-list decided, absolute serious really.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。お気に入りの、本気で、絶対、新曲、絶対、毎日、絶対、聴いてるぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対。',en:"Yeah. Fave new-song every-day listen, Sakura absolute serious really.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'お前の家、本気で、絶対、雑音、絶対、なくて、絶対、勉強しやすいよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Your-home noise-none — study-easy, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'お前の、本気for、絶対、緻密、絶対、なノート、絶対、いつも、絶対、見せてくれよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Your meticulous-notebook — always-show, Sakura absolute serious really.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'部活の、本気で、絶対、ロッカー、絶対、お前、絶対、整理整頓してるよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対。',en:"Club-locker — you tidy-do, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'美術部の、本気で、絶対、似顔絵、絶対、お前、絶対、上手だよな、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Art-club portrait — you good, Sakura absolute serious really.",style:'Praising.'},
    {speaker:'sakura_teen',jp:'試合中に、本気で、絶対、ハプニング、絶対、起こる、絶対、と、絶対、お前、絶対、対応早いよね、リク、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Match — happenings arise you swift-respond, Riku absolute serious really.",style:'Praising.'},
    {speaker:'riku_teen',jp:'俺たち、本気で、絶対、考え方の、絶対、ちがい、絶対、ありますけど、絶対、仲良しだぜ、桜、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Us — thinking-diff exist but close-friend, Sakura absolute serious really.",style:'Earnest close.'},
  ]},
  {id:'conv_07660',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'A mom and son chat',lines:[
    {speaker:'sho_child',jp:'ママ、本気で、絶対、ぼくの好きな歌の、絶対、曲目、絶対、これだよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対。',en:"Mom — my fave-song song-list — this, absolute serious really.",style:'Animated child.'},
    {speaker:'yumiko_mom',jp:'お父さん、本気で、絶対、若い頃の歌手の、絶対、新曲、絶対、好きなのよ、翔くん、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Dad — youth-singer new-song like, Sho absolute serious really.",style:'Reflective.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、お家の、絶対、雑音、絶対、テレビかな?本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — home-noise TV maybe?, absolute serious really.",style:'Curious.'},
    {speaker:'yumiko_mom',jp:'翔くんの、本気で、絶対、緻密、絶対、な絵、絶対、ママ、絶対、感心するわ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho meticulous-picture — Mom admire, absolute serious really.",style:'Praising.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、駅の、絶対、ロッカー、絶対、お父さんと、絶対、使ったよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、絶対、本気。',en:"Mom — station-locker Dad-used, absolute serious really.",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'翔くんの、本気で、絶対、似顔絵、絶対、ママの机に、絶対、飾ってあるわよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対。',en:"Sho-portrait — Mom-desk displayed, absolute serious really.",style:'Tender.'},
    {speaker:'sho_child',jp:'ママ、本気で、絶対、雷が、絶対、起こる、絶対、と、絶対、ぼく、絶対、ちょっと、絶対、恐いよ、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対。',en:"Mom — thunder occur me slight scary, absolute serious really.",style:'Wry.'},
    {speaker:'yumiko_mom',jp:'翔くんと、本気で、絶対、ママの、絶対、考えの、絶対、ちがい、絶対、いつでも、絶対、話し合いましょうね、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気。',en:"Sho-Mom thinking-diff — anytime discuss, absolute serious really.",style:'Tender close.'},
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

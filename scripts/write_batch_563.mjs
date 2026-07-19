import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_563 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['凛','尽くさ','詰将棋']
const B_T = ['レフ','栄養素','ボーイング']
const C_T = ['ドナー','太陽系','火薬','油田']
const D_T = ['オアシス','戦没','豪雪']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_11221',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「凛とした立ち姿の人を尊敬する」って仰ってたわ','Sho — Dad-"dignified-resp"-said','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「家族の為に尽くされた」事を感謝してるよ','Mom — me Dad-"fam-dedi"-grat','Earnest child','sho_child'),
    mk('翔くん、お父さんが詰将棋の本を読まれてるわ','Sho — Dad-tsumeshogi-book','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと詰将棋を解く特訓したよ','Mom — me Dad-tsumeshogi-solve-prac','Pleased child','sho_child'),
    mk('翔くん、お父さんが「凛、つまり凛太郎おじいちゃんに敬意を持って」って仰ってたわ','Sho — Dad-"Rin-grdpa-resp"-said','Reflective close','yumiko_mom'),
  ]},
  {id:'conv_11222',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、凛とした佇まいで店内が落ち着くよ、メイちゃん','Aoi — cust-dignified-calm Mei','Reflective','mei_romantic'),
    mk('葵、お客様、「お店に尽くされた歴史」を語って下さったよ、メイちゃん','Aoi — cust-"shop-dedi"-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、詰将棋雑誌を片手にご来店だったよ、メイちゃん','Aoi — cust-tsumeshogi-mag-vis Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご友人の凛さんとお茶されてたよ、メイちゃん','Aoi — cust-fri-Rin-tea Mei','Reflective','aoi_barista'),
    mk('葵、お客様、詰将棋でお客様同士交流されてるよ、メイちゃん','Aoi — cust-tsumeshogi-int Mei','Reflective close','mei_romantic'),
  ]},
  {id:'conv_11223',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが凛とした姿勢で会社を支えられた','Gran — youth Dad-dignified-supp','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、家族の為に尽くされた事を覚えてるわよ、あなた?','Yes — Grandpa-fam-dedi-mem, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが詰将棋を毎晩解かれた','Gran — youth Dad-tsumeshogi-nig','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、姪の凛子さんを可愛がられたわよね、あなた?','Grandpa — youth-niece-Rinko-love, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが詰将棋月刊誌を毎号購読された','Gran — youth Dad-tsumeshogi-mo-sub','Wistful close','hiroshi_elder'),
  ]},
  {id:'conv_11224',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、凛とした姿勢で先生に挨拶してたな','Riku — dignified-greet','Praising teen','sakura_teen'),
    mk('お前、部活に尽くされた先輩を尊敬してたな、桜','You — club-dedi-sen-resp Sakura','Reflective','riku_teen'),
    mk('リク、お前、将棋部で詰将棋の選手権目指してたな','Riku — shog-club-tsumeshogi','Curious','sakura_teen'),
    mk('お前、隣のクラスの凛と話してたな、桜','You — next-cl-Rin-talk Sakura','Curious','riku_teen'),
    mk('リク、お前、休み時間に詰将棋解いてたな','Riku — break-tsumeshogi','Wry close','sakura_teen'),
  ]},
  {id:'conv_11225',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「凛として振る舞う事の大切さ」を教えて下さるわ','Sho — Dad-"dignified-imp"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「家族の為に尽くされた事」を聞いたよ','Mei-sis — me Dad-"fam-dedi"-heard','Earnest child','sho_child'),
    mk('翔くん、お父さんが詰将棋の問題を出して下さるわ','Sho — Dad-tsumeshogi-prob','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと凛として歩く練習したよ','Mei-sis — me Dad-dignified-walk-prac','Eager child','sho_child'),
    mk('翔くん、お父さんと詰将棋の本を本屋で買ったわ','Sho — Dad-tsumeshogi-book-buy','Eager close','mei_romantic'),
  ]},
  {id:'conv_11226',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、撮影スタジオのレフ板、つまりレフ反射板を新調しろ','Our co — studio-ref-new','Crisp','hiroshi_boss'),
    mk('はい。社員食堂の栄養素バランスを管理します','Yes — Cant-nutr-bal','Methodical','kenji_office'),
    mk('当社、海外出張はボーイング機を選択しろ','Our co — overs-Boeing-pick','Direction','hiroshi_boss'),
    mk('はい。広報用ボーイング社製機材の撮影日程を調整します','Yes — PR-Boeing-eqp-photo','Update','kenji_office'),
    mk('当社、社員食堂の栄養素表を全店舗で標準化しろ','Our co — cant-nutr-tab-stand','Close','hiroshi_boss'),
  ]},
  {id:'conv_11227',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('撮影のレフ板配置を最適化しましょう','Photo-ref-opt','Brisk','yuki_office'),
    mk('はい。社員の栄養素摂取をアプリで管理します','Yes — Staff-nutr-app','Cooperative','kenji_office'),
    mk('海外子会社の出張で米国便はボーイング機が便利ですね','Overs-sub-US-Boeing-conv','Direction','yuki_office'),
    mk('はい。栄養素表示を全製品に追加します','Yes — Nutr-disp-all-prod','Update','kenji_office'),
    mk('スタジオのレフ機材リストを社内で共有しましょう','Studio-ref-list-share','Close','yuki_office'),
  ]},
  {id:'conv_11228',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究室でレフ、つまりレフ板を撮影に使え','Ren — lab-ref-photo','Mentor','hiroshi_boss'),
    mk('はい。被験者の栄養素摂取記録を取ります','Yes — Sub-nutr-rec','Earnest','ren_uni'),
    mk('蓮、ボーイング社の航空力学論文を読め','Ren — Boeing-aero-paper','Direction','hiroshi_boss'),
    mk('はい。栄養素の代謝研究の論文を読みます','Yes — Nutr-metab-paper','Earnest','ren_uni'),
    mk('蓮、レフ板を使った撮影技法も学べ','Ren — ref-photo-tech-learn','Close','hiroshi_boss'),
  ]},
  {id:'conv_11229',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、現場撮影でレフ、つまりレフ板を、警察、ご使用ですね','Police scene-ref-use','Cooperative','kenji_office'),
    mk('警察、被害者の栄養素摂取状況も、警察、医師と確認されますね','Police vict-nutr-doc-check','Cooperative','kenji_office'),
    mk('警察、ボーイング社製の機体事故捜査もされますね','Police Boeing-acc-inv','Cooperative','kenji_office'),
    mk('警察、署内食堂の栄養素管理もされますね','Police stat-cant-nutr','Cooperative','kenji_office'),
    mk('警察、現場撮影のレフ機材を、警察、点検されますね','Police scene-ref-eqp-check','Close','kenji_office'),
  ]},
  {id:'conv_11230',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、レフ、つまりレフ板を駆使した広告撮影をされた','Dad — youth-ref-ad-photo','Sage','hiroshi_elder'),
    mk('はい。お父さんは社員の栄養素管理に厳しかった','Yes — Dad staff-nutr-strict','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、ボーイング機で初めて海外出張された','Dad — youth-Boeing-1st-overs','Wistful','hiroshi_elder'),
    mk('はい。お父さんはボーイング社視察に行かれた','Yes — Dad Boeing-vis','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、社員の栄養素バランスを大事にされた','Dad — youth-staff-nutr-cher','Wise close','hiroshi_elder'),
  ]},
  {id:'conv_11231',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、臓器ドナーの倫理研究を論文で扱いましたね','Ren — org-don-eth paper','Calm','asuka_teacher'),
    mk('はい、太陽系外惑星の天文学研究を論文で扱いました','Yes — Exo-pl paper','Earnest','ren_uni'),
    mk('蓮さん、古代の火薬製造の歴史研究を論文で扱いましたね','Ren — anc-gunpw-hist paper','Reflective','asuka_teacher'),
    mk('はい、中東の油田開発の経済史研究を論文で扱いました','Yes — ME-oil-field paper','Earnest','ren_uni'),
    mk('蓮さん、ドナー登録制度の社会学研究を論文で扱いましたね','Ren — don-reg-soc paper','Reflective','asuka_teacher'),
    mk('はい、太陽系の起源説の物理学研究を論文で扱いました','Yes — Solar-orig-phys paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_11232',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、臓器ドナー詐欺の捜査を、警察、進められますね','Case org-don-fraud police-inv','Reflective','ren_uni'),
    mk('警察、天文台への侵入事案、つまり太陽系研究施設の捜査もされますね','Police obs-solar-fac-inv','Cooperative','takeda_officer'),
    mk('本件、火薬類の不法所持の捜査を、警察、徹底されますね','Case gunpw-illeg-inv police-thor','Reflective','ren_uni'),
    mk('警察、油田、つまり海外油田での日本人事案にも対応されますね','Police overs-oil-field-Jp','Cooperative','takeda_officer'),
    mk('本件、ドナー、つまりドナーカード偽造を、警察、捜査されますね','Case don-card-forg police-inv','Reflective','ren_uni'),
    mk('警察、火薬の押収量も、警察、慎重に管理されますね','Police gunpw-seiz-mgmt','Close','takeda_officer'),
  ]},
  {id:'conv_11233',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、臓器ドナーの倫理研究を論文で扱いましたね','Sakura — don paper','Calm','asuka_teacher'),
    mk('はい、太陽系外惑星の天文学研究を論文で扱いました','Yes — Solar paper','Earnest teen','sakura_teen'),
    mk('古代の火薬製造の歴史研究を論文で扱いましたね','Gunpw paper','Reflective','asuka_teacher'),
    mk('はい、中東の油田開発の経済史研究を論文で扱いました','Yes — Oil-field paper','Earnest','sakura_teen'),
    mk('ドナー登録制度の社会学研究を論文で扱いましたね','Don-reg paper','Reflective','asuka_teacher'),
    mk('はい、太陽系の起源説の物理学研究を論文で扱いました','Yes — Solar-orig paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_11234',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、臓器ドナーとレシピエントの相性を医療チームで慎重に確認します','Ren — don-rec-match med-team','Calm','saito_doctor'),
    mk('蓮さん、太陽系医学、つまり宇宙医療の研究を医療チームでおこないます','Ren — solar-space-med med-team','Calm','saito_doctor'),
    mk('蓮さん、火薬類事故の被害者治療を医療チームで担当します','Ren — gunpw-acc-vict med-team','Calm','saito_doctor'),
    mk('蓮さん、油田、つまり油田爆発の救急対応を医療チームでおこないます','Ren — oil-field-exp med-team','Calm','saito_doctor'),
    mk('蓮さん、ドナーご家族のグリーフケアを医療チームでおこないます','Ren — don-fam-grief med-team','Calm','saito_doctor'),
    mk('蓮さん、宇宙、つまり太陽系航行時の医療体制も医療チームで検討します','Ren — space-solar-med med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_11235',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、ドナー登録啓発のCSR活動を進めろ','Our co — don-reg-CSR','Crisp','hiroshi_boss'),
    mk('はい。太陽系研究機関への寄付を継続します','Yes — Solar-res-don','Methodical','kenji_office'),
    mk('当社、産業用火薬の安全管理を徹底しろ','Our co — ind-gunpw-safe-thor','Direction','hiroshi_boss'),
    mk('はい。海外油田事業への投資を慎重に判断します','Yes — Overs-oil-field-invest','Update','kenji_office'),
    mk('当社、ドナー登録の社員啓発活動も支援しろ','Our co — don-reg-staff-aware','Direction','hiroshi_boss'),
    mk('はい。火薬類取扱社員の安全研修を徹底します','Yes — Gunpw-staff-safe-train','Close','kenji_office'),
  ]},
  {id:'conv_11236',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、砂漠の中のオアシス写真集を見せて下さったよ、メイちゃん','Aoi — cust-oasis-photo Mei','Reflective','mei_romantic'),
    mk('葵、お客様、戦没者追悼式に参加されたって、メイちゃん','Aoi — cust-war-dead-mem-att Mei','Reflective','aoi_barista'),
    mk('葵、お客様、北海道の豪雪地帯のお話を語って下さったよ、メイちゃん','Aoi — cust-Hok-heavy-snow-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、オアシスのバンドの曲がお好きだって、メイちゃん','Aoi — cust-Oasis-band-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、戦没者の慰霊碑を巡る旅をされてるって、メイちゃん','Aoi — cust-war-dead-mem-tour Mei','Reflective close','mei_romantic'),
  ]},
  {id:'conv_11237',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが砂漠のオアシスに行く夢を語られた','Gran — youth Dad-oasis-dream','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、戦没者追悼式に毎年参加されたわよね、あなた?','Yes — Grandpa-war-dead-mem-yr, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが北海道の豪雪に立ち往生された','Gran — youth Dad-Hok-heavy-snow-stuck','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、戦没者ご遺族の方々と交流されたわよね、あなた?','Grandpa — youth-war-dead-fam-int, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがオアシスの様な憩いの場をご自宅に作られた','Gran — youth Dad-oasis-home-rest','Wistful close','hiroshi_elder'),
  ]},
  {id:'conv_11238',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「砂漠のオアシスは命を支える」って教えて下さったわ','Sho — Dad-"oasis-life"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと戦没者追悼の祈りを捧げたよ','Mei-sis — me Dad-war-dead-pray','Earnest child','sho_child'),
    mk('翔くん、お父さんが「豪雪地帯の人々の暮らし」を教えて下さるわ','Sho — Dad-"heavy-snow-life"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「砂漠オアシス」の絵本を読んだよ','Mei-sis — me Dad-oasis-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが「戦没者を忘れない事の大切さ」を教えて下さるわ','Sho — Dad-"war-dead-rem"-teach','Reflective close','mei_romantic'),
  ]},
  {id:'conv_11239',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、社会で砂漠のオアシスについて調べてたな','Riku — soc-oasis-stud','Curious teen','sakura_teen'),
    mk('お前、社会で戦没者追悼の歴史習ったろ、桜','You — soc-war-dead-hist? Sakura','Curious','riku_teen'),
    mk('リク、お前、家族で豪雪地帯の旅行行ったろ','Riku — fam-heavy-snow-trip?','Curious','sakura_teen'),
    mk('お前、修学旅行で広島の戦没者慰霊碑訪ねたろ、桜','You — sch-trip-Hir-war-dead? Sakura','Curious','riku_teen'),
    mk('リク、お前、英語の歌でオアシスの曲覚えたな','Riku — Eng-Oasis-song-mem','Wry close','sakura_teen'),
  ]},
  {id:'conv_11240',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがオアシスのバンドの新曲を聴いてらっしゃるわ','Sho — Dad-Oasis-new-song','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと戦没者追悼の特番観たよ','Mom — me Dad-war-dead-spec','Eager child','sho_child'),
    mk('翔くん、お父さんが豪雪地域への支援募金をされたわ','Sho — Dad-heavy-snow-don','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとオアシスのMVをYouTubeで観たよ','Mom — me Dad-Oasis-MV','Eager child','sho_child'),
    mk('翔くん、お父さんが「豪雪と戦没者追悼の冬の哀しみ」を語って下さったわ','Sho — Dad-"heavy-snow-war-dead-grief"-talk','Reflective close','yumiko_mom'),
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

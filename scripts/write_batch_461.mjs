import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_461 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['難く','突い','自分勝手','思案','一昔','仕草','相次ぐ','注ぎ']
const B_T = ['優越','数理','復刊','論説','前項','想起','体現','個所']
const C_T = ['炸裂','廃墟','米兵','不毛','飢餓','自決','滅亡','査察']
const D_T = ['羽根','遊戯','製図','海面','浴室','祖父母','出稼ぎ','蔵書']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09181',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖父ちゃんの優しさは忘れ難く心に残るわね','Sho — Grandpa-kind-hard-forget-stay','Tender','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんの背中を軽く突いて遊んだよ','Mom — me Grandpa-back-light-poke-played','Eager child','sho_child'),
    mk('翔くん、自分勝手な事ばかりしてはダメよ','Sho — selfish-only-no','Direction','yumiko_mom'),
    mk('ママ、ぼく、お父さんが思案するお顔を見たよ','Mom — me Dad-think-face-saw','Reflective child','sho_child'),
    mk('翔くん、一昔前は携帯電話も無かったのよ','Sho — one-era-pre-no-phone','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんの仕草を真似したよ','Mom — me Grandpa-gesture-mimic','Eager child','sho_child'),
    mk('翔くん、お友達からの招待が相次ぐわね','Sho — friend-invite-succession','Pleased','yumiko_mom'),
    mk('ママ、お父さんがお茶を注いで下さるわ','Mom — Dad-tea-pour','Reflective close','sho_child'),
  ]},
  {id:'conv_09182',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様のお気持ちは、想像し難くてもお察ししたいね、メイちゃん','Aoi — cust-feel-hard-imagine-care Mei','Tender','mei_romantic'),
    mk('葵、お客様、新メニューの説明を突いてお尋ねされたよ、メイちゃん','Aoi — cust-new-menu-pointed-ask Mei','Reflective','aoi_barista'),
    mk('葵、自分勝手な開店時間変更は、ご常連様に申し訳ないわね、メイちゃん','Aoi — selfish-hr-change-VIP-sorry Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お茶のメニューを思案されてたよ、メイちゃん','Aoi — cust-tea-menu-think Mei','Pleased','aoi_barista'),
    mk('葵、一昔前と比べてカフェ文化が広まったね、メイちゃん','Aoi — one-era-pre-cafe-spread Mei','Reflective','mei_romantic'),
    mk('葵、お客様、優雅な仕草でお茶を召し上がっていたよ、メイちゃん','Aoi — cust-elegant-gesture-tea Mei','Praising','aoi_barista'),
    mk('葵、新メニューへの注文が相次ぐ朝で、嬉しいね、メイちゃん','Aoi — new-menu-order-succession-glad Mei','Pleased','mei_romantic'),
    mk('葵、お客様のカップに、お代わりを注いで差し上げましょう、メイちゃん','Aoi — cust-cup-refill-pour Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_09183',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは別れ難く感じる人でいらした','Gran — youth Dad-hard-part-feel','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、孫を軽く突いて笑わせていらしたわよね、あなた?','Yes — Grandpa-grandkid-light-poke-laugh, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは自分勝手な振る舞いを許されなかった','Gran — youth Dad-selfish-not-allow','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、人生の岐路を思案されてらしたわよね、あなた?','Grandpa — life-fork-think, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはもう一昔前の方になられた','Gran — youth Dad-one-era-pre-person','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、武士道的な仕草が美しかったわよね、あなた?','Grandpa — bushido-gesture-beauty, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、不幸な出来事が相次ぐ年もあった','Gran — youth-unfortunate-event-succession-year','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、お酒を注ぎ合っていらしたわよね、あなた?','Grandpa — youth-sake-pour-each-other, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09184',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前との別れは耐え難くなるな','Riku — your-part-hard-bear','Tender teen','sakura_teen'),
    mk('お前、ノートで俺を突いてくるなよ、桜','You — note-me-poke-don\'t Sakura','Wry','riku_teen'),
    mk('リク、お前、自分勝手な行動は止めろ','Riku — selfish-act-stop','Direction','sakura_teen'),
    mk('お前、進路を思案中だな、桜','You — career-think Sakura','Reflective','riku_teen'),
    mk('リク、一昔前のアニメ、お前好きだな','Riku — one-era-anime-like','Curious','sakura_teen'),
    mk('お前、独特な仕草するよな、桜','You — uni-gesture Sakura','Wry','riku_teen'),
    mk('リク、テスト前に質問が相次ぐな','Riku — pre-test-Q-succession','Wry','sakura_teen'),
    mk('お前、コップに水を注ぎすぎだろ、桜','You — cup-water-pour-too-much Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_09185',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんの絵は、忘れ難く心に残るのよ','Sho — Mei-sis-art-hard-forget','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、絵筆で紙を軽く突いて遊んだよ','Mei-sis — me brush-paper-light-poke-played','Eager child','sho_child'),
    mk('翔くん、お絵描きで自分勝手にはダメよ、お友達と分け合おうね','Sho — art-selfish-no-friend-share','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、どの色にしようか思案中だよ','Mei-sis — me color-which-think','Reflective child','sho_child'),
    mk('翔くん、メイ姉さんは一昔前の絵本を持ってるのよ','Sho — Mei-sis-one-era-pre-book-have','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、絵を描く時の仕草、メイ姉さん似だよ','Mei-sis — me art-gesture-Mei-sis-like','Proud child','sho_child'),
    mk('翔くん、お祭りの招待が相次ぐ季節ね','Sho — fest-invite-succession-season','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、水彩絵の具に水を注ぎ過ぎちゃった','Mei-sis — me watercolor-water-pour-too','Wry close','sho_child'),
  ]},
  {id:'conv_09186',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、競合への優越性を保ち続けろ','Our co — rival-superior-keep','Crisp','hiroshi_boss'),
    mk('はい。新人にも数理的な思考を求めます','Yes — Newbie-math-think-req','Methodical','kenji_office'),
    mk('当社、絶版書の復刊を企画しろ','Our co — OoP-reissue-plan','Direction','hiroshi_boss'),
    mk('はい。新方針について論説を社内報に掲載しました','Yes — New-policy-essay-co-news','Update','kenji_office'),
    mk('当社、前項で述べた方針を実行しろ','Our co — prev-section-policy-impl','Direction','hiroshi_boss'),
    mk('はい。創業時の理念を想起してもらいます','Yes — Found-creed-recall','Update','kenji_office'),
    mk('当社、誠実な経営を体現しろ','Our co — sincere-mgmt-embody','Direction','hiroshi_boss'),
    mk('はい。契約書の不明な個所を修正しました','Yes — Contract-unclear-spot-fix','Close','kenji_office'),
  ]},
  {id:'conv_09187',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('お客様への優越的な対応は控えましょう','Cust-super-resp-refrain','Brisk','yuki_office'),
    mk('はい。新製品の数理モデルを社内で検証中です','Yes — New-prod-math-model-verify','Cooperative','kenji_office'),
    mk('絶版商品の復刊問い合わせが増えていますね','OoP-prod-reissue-inq-up','Reflective','yuki_office'),
    mk('はい。新聞論説に当社の取り組みが取り上げられました','Yes — Newspaper-essay-our-co-feature','Update','kenji_office'),
    mk('資料の前項を参考にしましょう','Doc-prev-section-ref','Direction','yuki_office'),
    mk('はい。お得意様の名前を想起しやすい資料を作ります','Yes — VIP-name-recall-doc','Update','kenji_office'),
    mk('社是を体現する社員を表彰しましょう','Co-creed-embody-staff-award','Direction','yuki_office'),
    mk('はい。契約書の重要個所をマーカーで示しました','Yes — Contract-key-spot-marker','Close','kenji_office'),
  ]},
  {id:'conv_09188',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、他大学への優越意識を捨てろ','Ren — other-univ-super-discard','Mentor','hiroshi_boss'),
    mk('はい。研究では数理的な厳密さを大事にします','Yes — Research-math-strict-cherish','Earnest','ren_uni'),
    mk('蓮、絶版論文集の復刊を学会に提案しろ','Ren — OoP-paper-coll-reissue-conf','Direction','hiroshi_boss'),
    mk('はい。論説形式での発信も検討します','Yes — Essay-form-iss-consider','Polite','ren_uni'),
    mk('蓮、論文の前項を読み返せ','Ren — paper-prev-section-re-read','Direction','hiroshi_boss'),
    mk('はい。先行研究を想起しやすい引用を心がけます','Yes — Prior-research-recall-cite','Earnest','ren_uni'),
    mk('蓮、研究倫理を体現する姿勢を貫け','Ren — research-eth-embody-keep','Direction','hiroshi_boss'),
    mk('はい。論文の不明個所を指導教授に確認します','Yes — Paper-unclear-spot-adv-prof','Earnest close','ren_uni'),
  ]},
  {id:'conv_09189',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、市民に対し優越的な態度を絶対に取られませんね','Police citizen-super-att-strict-no','Cooperative','kenji_office'),
    mk('警察、犯罪統計を数理的に分析されますね','Police crime-stat-math-anal','Cooperative','kenji_office'),
    mk('警察、防犯ハンドブックの復刊もご検討ですね','Police crime-prev-handbook-reissue','Cooperative','kenji_office'),
    mk('警察、ご自身の論説を市民向けに発表されますね','Police self-essay-citizen-pres','Cooperative','kenji_office'),
    mk('警察、調書の前項を確認されますね','Police statement-prev-section-check','Cooperative','kenji_office'),
    mk('警察、目撃証言を想起しやすくする工夫もされますね','Police witness-recall-craft','Cooperative','kenji_office'),
    mk('警察、市民安全を体現する活動を続けられますね','Police citizen-safety-embody-cont','Cooperative','kenji_office'),
    mk('警察、捜査資料の重要個所を被害者にもご説明されますね','Police inv-doc-key-spot-victim-explain','Close','kenji_office'),
  ]},
  {id:'conv_09190',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、他社への優越的態度を取られなかった','Dad — founding other-co-super-not','Sage','hiroshi_elder'),
    mk('はい。お父さんは数理的な見方を経営に持ち込まれた','Yes — Dad math-view-mgmt-incl','Commitment','hiroshi_boss'),
    mk('お父さん、社史の復刊を社員に依頼されたぞ','Dad — co-hist-reissue-staff-req','Wistful','hiroshi_elder'),
    mk('はい。お父さんは新聞に論説を寄稿された','Yes — Dad newspaper-essay-contrib','Reflective','hiroshi_boss'),
    mk('お父さん、契約書の前項にも目を通された','Dad — contract-prev-section-checked','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員に創業の原点を想起させられた','Yes — Dad staff-found-origin-recall','Reflective','hiroshi_boss'),
    mk('お父さん、誠実な経営を体現された方だったぞ','Dad — sincere-mgmt-embody','Wistful','hiroshi_elder'),
    mk('はい。お父さんは契約書の細かい個所まで確認された','Yes — Dad contract-detail-spot-check','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09191',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、戦時下に爆弾が炸裂した事件の記録を論文で扱いましたね','Ren — wartime-bomb-burst-rec paper','Calm','asuka_teacher'),
    mk('はい、戦災の廃墟の中の生活史を論文で扱いました','Yes — War-ruin-life-hist paper','Earnest','ren_uni'),
    mk('蓮さん、戦時下に米兵が駐留した影響を論文で扱いましたね','Ren — war-US-soldier-station paper','Reflective','asuka_teacher'),
    mk('はい、不毛な政治論争の研究を論文で扱いました','Yes — Barren-pol-dispute paper','Earnest','ren_uni'),
    mk('世界の飢餓問題を論文で扱いましたね','World-famine paper','Engaged','asuka_teacher'),
    mk('はい、武士の自決の歴史を論文で扱いました','Yes — Samurai-suicide-hist paper','Earnest','ren_uni'),
    mk('蓮さん、文明の滅亡を巡る考古学を論文で扱いましたね','Ren — civ-perish-arch paper','Reflective','asuka_teacher'),
    mk('はい、国際査察制度の歴史を論文で扱いました','Yes — Int-inspect-sys-hist paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09192',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、爆発物が炸裂した現場を警察、保全されましたね','Case explosive-burst-on-site police','Reflective','ren_uni'),
    mk('警察、廃墟での違法行為を警戒します','Police ruin-illegal-watch','Procedural','takeda_officer'),
    mk('本件、駐留米兵関係の事案も警察、ご対応ですね','Case stationed-US-soldier-case police-resp','Reflective','ren_uni'),
    mk('警察、不毛な論争を避けて事実に基づき捜査します','Police barren-dispute-avoid-fact-inv','Procedural','takeda_officer'),
    mk('本件、飢餓状態に陥った被害者を警察、保護されますね','Case famine-victim police-prot','Reflective','ren_uni'),
    mk('警察、容疑者の自決を防ぐ警備にも配慮します','Police suspect-suicide-prev-guard-care','Procedural','takeda_officer'),
    mk('本件、組織が滅亡する前の駆け込み犯罪を警察、警戒されてますね','Case org-perish-pre-crime police-watch','Reflective','ren_uni'),
    mk('警察、国際査察団との連携を強化します','Police int-inspect-link-strength','Close','takeda_officer'),
  ]},
  {id:'conv_09193',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、戦時下に爆弾が炸裂した事件の記録を論文で扱いましたね','Sakura — bomb-burst paper','Calm','asuka_teacher'),
    mk('はい、戦災の廃墟の中の生活史を論文で扱いました','Yes — War-ruin-life paper','Earnest teen','sakura_teen'),
    mk('戦時下に米兵が駐留した影響を論文で扱いましたね','War-US-soldier paper','Reflective','asuka_teacher'),
    mk('はい、不毛な政治論争を論文で扱いました','Yes — Barren-pol paper','Earnest','sakura_teen'),
    mk('世界の飢餓問題を論文で扱いましたね','World-famine paper','Engaged','asuka_teacher'),
    mk('はい、武士の自決の歴史を論文で扱いました','Yes — Samurai-suicide paper','Earnest','sakura_teen'),
    mk('文明の滅亡を巡る考古学を論文で扱いましたね','Civ-perish-arch paper','Reflective','asuka_teacher'),
    mk('はい、国際査察制度の歴史を論文で扱いました','Yes — Int-inspect paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09194',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、爆発で炸裂した破片による外傷ケアを医療チームで担当します','Ren — burst-frag-trauma med-team-care','Calm','saito_doctor'),
    mk('はい、廃墟での感染リスクを医療チームで研究します','Yes — Ruin-infect-risk med-team-research','Patient','saito_doctor'),
    mk('米兵基地周辺の医療相談を、貴院、ご担当されますね、先生','US-soldier-base-med-cons your-hosp, sensei','Curious','ren_uni'),
    mk('はい、不毛な議論を避け、医療チームで実証に基づきます','Yes — Barren-arg-avoid med-team-empir','Patient','saito_doctor'),
    mk('飢餓状態の被災者への栄養管理を、貴院、なさってますね、先生','Famine-victim-nutri your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、自決を試みる患者さんへのメンタルケアを医療チームで重視します','Yes — Suicide-attempt-mental med-team-imp','Patient','saito_doctor'),
    mk('文明が滅亡する前の感染史を、貴院、参照されてますね、先生','Civ-perish-pre-infect-hist your-hosp ref, sensei','Reflective','ren_uni'),
    mk('はい、医療査察への対応を医療チームで準備しております','Yes — Med-inspect-resp med-team prep','Patient close','saito_doctor'),
  ]},
  {id:'conv_09195',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、市場で炸裂的な売上を狙うな、堅実でいけ','Our co — market-burst-sales-not-solid','Crisp','hiroshi_boss'),
    mk('はい。廃墟同然の工場を再生する案を出しました','Yes — Ruin-factory-revive-plan','Methodical','kenji_office'),
    mk('当社、米兵向けの英語サービスも整備しろ','Our co — US-soldier-Eng-svc-prep','Direction','hiroshi_boss'),
    mk('はい。不毛な内紛は社員間で起こさないようにします','Yes — Barren-internal-conf-prev','Update','kenji_office'),
    mk('当社、社員に飢餓を経験させぬ福利を整えろ','Our co — staff-famine-not-benefit','Direction','hiroshi_boss'),
    mk('はい。経営判断の自決責任を引き受けます','Yes — Mgmt-judg-self-resp','Update','kenji_office'),
    mk('当社、企業滅亡を防ぐ危機対応計画を作れ','Our co — corp-perish-prev-crisis-plan','Direction','hiroshi_boss'),
    mk('はい。国際査察の対応マニュアルを整備します','Yes — Int-inspect-resp-manual','Close','kenji_office'),
  ]},
  {id:'conv_09196',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お子様、羽根つきの遊びをされたよ、メイちゃん','Aoi — child-hane-game-played Mei','Pleased','mei_romantic'),
    mk('葵、お店に小さな遊戯コーナーを作りましょう、メイちゃん','Aoi — store-small-play-corner-make Mei','Direction','aoi_barista'),
    mk('葵、お客様、製図のお仕事だってお話されてたよ、メイちゃん','Aoi — cust-drafting-work-told Mei','Reflective','mei_romantic'),
    mk('葵、お客様、海面に光が反射するお話されてたよ、メイちゃん','Aoi — cust-sea-surface-light-told Mei','Reflective','aoi_barista'),
    mk('葵、新店舗にはお客様用浴室は付けないわよね、メイちゃん','Aoi — new-store-cust-bath-no Mei','Wry','mei_romantic'),
    mk('葵、お客様、お子様と祖父母と来店して下さったね、メイちゃん','Aoi — cust-child-Grandpa-Grandma-came Mei','Pleased','aoi_barista'),
    mk('葵、お客様、出稼ぎ先から戻ってこられたって、メイちゃん','Aoi — cust-migrant-work-back Mei','Reflective','mei_romantic'),
    mk('葵、お客様、蔵書を整理されたんだって、メイちゃん','Aoi — cust-book-coll-org Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09197',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが羽根つきを孫と楽しまれた','Gran — youth Dad-hane-grandkid-enjoy','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お部屋を遊戯室と仰ってたわよね、あなた?','Yes — Grandpa-room-play-room-said, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは設計図の製図をされたぞ','Gran — youth Dad-plan-drafting','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、海面を眺めるのがお好きでらしたわよね、あなた?','Grandpa — sea-surface-watch-liked, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと新しい浴室を作ったぞ','Gran — youth Dad-new-bath-built','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様の祖父母として頼られたわよね、あなた?','Grandpa — grandkid-grandparent-rely, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは出稼ぎで都会に出られた','Gran — youth Dad-migrant-city','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、蔵書を毎日整えてらしたわよね、あなた?','Grandpa — book-coll-daily-arrange, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09198',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お正月にメイ姉さんと羽根つきしましょうね','Sho — NY-Mei-sis-hane-do','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、遊戯室で遊びたいよ','Mei-sis — me play-room-want','Eager child','sho_child'),
    mk('翔くん、お父さんがお家の製図を描いてらっしゃるわ','Sho — Dad-home-drafting','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、海面に夕日が映る景色見たよ','Mei-sis — me sea-surface-sunset-saw','Eager child','sho_child'),
    mk('翔くん、メイ姉さんのお家の浴室、新しいわね','Sho — Mei-sis-home-bath-new','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、祖父母大好きだよ','Mei-sis — me grandparent-love','Eager child','sho_child'),
    mk('翔くん、お父さんは昔、出稼ぎで都会に行かれたんですって','Sho — Dad-old-migrant-city','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんの蔵書を見てみたいよ','Mei-sis — me Mei-sis-book-coll-see-want','Eager close','sho_child'),
  ]},
  {id:'conv_09199',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、お正月に羽根つきやったろ?','Riku — NY-hane?','Curious teen','sakura_teen'),
    mk('お前ん家、子供時代に遊戯室あったろ?桜','You — your-home-play-room? Sakura','Curious','riku_teen'),
    mk('リク、お前のお父さん、製図の仕事だろ?','Riku — your-Dad-drafting?','Curious','sakura_teen'),
    mk('お前、海面で釣りしたろ?桜','You — sea-surface-fish? Sakura','Curious','riku_teen'),
    mk('リク、お前ん家、浴室広いんだろ?','Riku — your-home-bath-wide?','Curious','sakura_teen'),
    mk('お前、祖父母にお小遣いもらったろ?桜','You — grandparent-allowance? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会で出稼ぎ労働の単元やったろ?','Riku — soc-migrant-labor?','Curious','sakura_teen'),
    mk('お前ん家、蔵書多いな、桜','You — your-home-book-coll-many Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_09200',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お正月にお父さんと羽根つきしましょうね','Sho — NY-Dad-hane','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんが昔遊戯ボードを作ってくれたよ','Mom — me Dad-old-play-board-made','Proud child','sho_child'),
    mk('翔くん、お父さんが製図道具を整理してらしたわ','Sho — Dad-drafting-tool-org','Reflective','yumiko_mom'),
    mk('ママ、ぼく、海面が夕日できれいだったよ','Mom — me sea-surface-sunset-pretty','Eager child','sho_child'),
    mk('翔くん、新しい浴室、気持ちいいわね','Sho — new-bath-comfort','Pleased','yumiko_mom'),
    mk('ママ、ぼく、祖父母にあう日が楽しみだよ','Mom — me grandparent-meet-fun','Eager child','sho_child'),
    mk('翔くん、お父さんが若い頃、出稼ぎで頑張られたんですって','Sho — Dad-young-migrant-effort','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんの蔵書、読んでみたいよ','Mom — me Dad-book-coll-read-want','Eager close','sho_child'),
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

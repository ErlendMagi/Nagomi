import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_434 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['まなざし','哀しい','長続き','パラパラ','ふい','呆然と','生れ','ただ今']
const B_T = ['公用','専売','敬称','埋め立て','買い取り','廉価','覚書','即日']
const C_T = ['微分','散らし','弁明','欺瞞','排泄','捕鯨','抗争','殺戮']
const D_T = ['ライム','アパレル','ハト','アンティーク','鮎','鮭','トンボ','占い師']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08641',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖父ちゃんの優しいまなざしを覚えていてね','Sho — Grandpa-kind-gaze remember','Tender','yumiko_mom'),
    mk('ママ、ぼく、お別れの時、哀しい気持ちになるよ','Mom — me farewell-sad-feel','Earnest child','sho_child'),
    mk('翔くん、お友達との関係を長続きさせるのは大事ね','Sho — friend-rel-long-last-impt','Reflective','yumiko_mom'),
    mk('ママ、ぼく、雪がパラパラ降ってきたの見たよ','Mom — me snow-paraparapara-fell-saw','Eager child','sho_child'),
    mk('翔くん、お父さんがふいに帰っていらしてびっくりしたわ','Sho — Dad-sudden-return-surprised','Animated','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんのお写真の前で呆然と立っていたよ','Mom — me Grandpa-photo-front-stunned-stood','Reflective child','sho_child'),
    mk('翔くん、ママが生れたのは雪の日だったのよ','Sho — Mom-born-snow-day','Reflective','yumiko_mom'),
    mk('ママ、ぼく、ただ今戻りましたって、お父さんの真似したよ','Mom — me "just-back" Dad-mimicked','Proud close','sho_child'),
  ]},
  {id:'conv_08642',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様のまなざしから、嬉しさが伝わるね、メイちゃん','Aoi — cust-gaze joy-conveyed Mei','Reflective','mei_romantic'),
    mk('葵、お客様、哀しい曲をリクエストされたよ、メイちゃん','Aoi — cust-sad-song-req Mei','Reflective','aoi_barista'),
    mk('葵、お店の常連様、長続きしていただいてありがたいわね、メイちゃん','Aoi — store-reg-long-last-grateful Mei','Pleased','mei_romantic'),
    mk('葵、外でパラパラ雨が降ってきたね、メイちゃん','Aoi — outside-paraparapara-rain-fell Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ふいにお店に立ち寄って下さったよ、メイちゃん','Aoi — cust-sudden-stop-by Mei','Pleased','mei_romantic'),
    mk('葵、メニュー変更を聞いたお客様、呆然となさってたわ、メイちゃん','Aoi — menu-change-cust-stunned Mei','Wry','aoi_barista'),
    mk('葵、お店が生れた日のことを思い出すわね、メイちゃん','Aoi — store-born-day remember Mei','Reflective','mei_romantic'),
    mk('葵、ただ今、お客様のお席へお越しいたしますって、お声がけしようね、メイちゃん','Aoi — "just-now"-cust-seat-come-call Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_08643',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは家族を温かいまなざしで見ておられたぞ','Gran — youth Dad fam-warm-gaze-watch','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、戦の話になると哀しい顔をされたわよね、あなた?','Yes — Grandpa-war-talk-sad-face, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんとの友情は長続きされたぞ','Gran — youth Dad-friend-long-last','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、雪がパラパラ降る日、お庭を眺められたわよね、あなた?','Grandpa — snow-paraparapara-day-garden-watched, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがふいに帰宅されて驚いたぞ','Gran — youth Dad-sudden-home-surprised','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、戦争のニュースに呆然と佇まれたわよね、あなた?','Grandpa — war-news-stunned-stood, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんが生れた村は、もう無くなったぞ','Gran — Dad-born-village-gone','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ただ今戻りましたと毎日仰ってたわよね、あなた?','Grandpa — "just-back"-daily, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08644',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前のまなざし、本気っぽいぞ','Riku — your-gaze-serious','Reflective teen','sakura_teen'),
    mk('お前、映画で哀しいシーンになると泣くよな、桜','You — movie-sad-cry Sakura','Wry','riku_teen'),
    mk('リク、お前と部活、長続きしてんな','Riku — your-club-long-last','Praising','sakura_teen'),
    mk('お前、テストでパラパラ間違えたな、桜','You — test-paraparapara-mistook Sakura','Wry','riku_teen'),
    mk('リク、お前、ふいに俺の家来んなよ','Riku — sudden-my-house-not','Wry','sakura_teen'),
    mk('お前、成績見て呆然と固まってたな、桜','You — grade-see-stunned-frozen Sakura','Wry','riku_teen'),
    mk('リク、お前ん家、お前が生れた家だろ?','Riku — your-home you-born-home?','Curious','sakura_teen'),
    mk('お前、ただ今帰った、って一応言えよ、桜','You — "just-back"-say Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_08645',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんのまなざしは、いつも優しいのよ','Sho — Mei-sis-gaze always-kind','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、哀しい絵本読んで泣いちゃったよ','Mei-sis — me sad-book-cried','Earnest child','sho_child'),
    mk('翔くん、メイ姉さんとお絵描き、長続きしてるね','Sho — Mei-sis-draw-long-last','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お絵描き帳のページをパラパラめくったよ','Mei-sis — me drawing-pad-paraparapara-flipped','Eager child','sho_child'),
    mk('翔くん、お父さんがふいにお迎えにいらしたわね','Sho — Dad-sudden-pick-up','Animated','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんのお話を聞いて呆然と座っていたよ','Mei-sis — me Grandpa-story-stunned-sat','Reflective child','sho_child'),
    mk('翔くん、メイ姉さんが生れた頃のお写真、見せてあげる','Sho — Mei-sis-born-photo-show','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、ただ今帰ってきました!','Mei-sis — me "just-back"!','Eager close','sho_child'),
  ]},
  {id:'conv_08646',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、公用車の購入計画を見直せ','Our co — official-car-buy-plan-review','Crisp','hiroshi_boss'),
    mk('はい。地域専売の権利を取得しました','Yes — Region-exclusive-right-acq','Methodical','kenji_office'),
    mk('当社、社外文書でも敬称を統一しろ','Our co — outside-doc-honorific-unify','Direction','hiroshi_boss'),
    mk('はい。海岸の埋め立て事業に関心がございます','Yes — Coast-reclamation-biz-interest','Update','kenji_office'),
    mk('お得意様の店舗買い取り提案を検討しろ','VIP-store-buyout-prop consider','Direction','hiroshi_boss'),
    mk('はい。廉価モデルの商品を企画中です','Yes — Low-price-model-plan','Update','kenji_office'),
    mk('お取引先との覚書を交わせ','Partner-MOU exchange','Direction','hiroshi_boss'),
    mk('はい。お客様のご要望に即日でご対応します','Yes — Cust-req same-day-resp','Close','kenji_office'),
  ]},
  {id:'conv_08647',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('公用文書のテンプレートを整備しましょう','Official-doc-template-prep','Brisk','yuki_office'),
    mk('はい。専売契約の更新案を準備しました','Yes — Excl-contract-renew-plan prep','Cooperative','kenji_office'),
    mk('社外文書の敬称表記をマニュアル化しましょう','Outside-doc-honorific-manual','Direction','yuki_office'),
    mk('はい。埋め立て地域への新店舗計画を検討中です','Yes — Reclaim-area-new-store plan','Update','kenji_office'),
    mk('競合店の買い取り提案を作成しましょう','Rival-store-buyout-prop make','Direction','yuki_office'),
    mk('はい。廉価ラインの試作品を発注しました','Yes — Low-price-line-proto ordered','Update','kenji_office'),
    mk('長期契約の覚書を整理しましょう','Long-contract-MOU-org','Direction','yuki_office'),
    mk('はい。即日対応のオプションを案内します','Yes — Same-day-resp-option announce','Close','kenji_office'),
  ]},
  {id:'conv_08648',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、公用論文と私用論文を分けて管理しろ','Ren — official-paper-private-paper-separate','Mentor','hiroshi_boss'),
    mk('はい。特許の専売的権利を確認しました','Yes — Patent-excl-right-check','Earnest','ren_uni'),
    mk('蓮、引用論文の著者敬称に注意しろ','Ren — cite-paper-author-honorific-care','Direction','hiroshi_boss'),
    mk('はい。埋め立て地の生態研究を論文で扱いました','Yes — Reclaim-area-eco-research paper','Polite','ren_uni'),
    mk('蓮、機材の買い取りリストを更新しろ','Ren — equip-buyout-list-update','Direction','hiroshi_boss'),
    mk('はい。廉価試薬の代替案を検討しました','Yes — Low-price-reagent-alt-consider','Earnest','ren_uni'),
    mk('蓮、共同研究の覚書を作成しろ','Ren — joint-research-MOU-make','Direction','hiroshi_boss'),
    mk('はい。査読の即日対応は難しい場合がございます','Yes — Review same-day-resp hard-case','Earnest close','ren_uni'),
  ]},
  {id:'conv_08649',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、公用車の運用ルールを徹底します','Police official-car-rules-strict','Calm','takeda_officer'),
    mk('はい。警察、専売的捜査権限の運用にご配慮、ありがたいです','Yes — Police excl-inv-auth-care grateful','Cooperative','kenji_office'),
    mk('警察、被害者ご家族には敬称をつけて応対します','Police victim-fam-honorific-resp','Procedural','takeda_officer'),
    mk('はい。警察、埋め立て地での違法投棄を捜査されてますね','Yes — Police reclaim-area-illegal-dump-inv','Cooperative','kenji_office'),
    mk('警察、不正買い取り業者を摘発します','Police illegal-buyout-vendor-bust','Procedural','takeda_officer'),
    mk('はい。警察、廉価詐欺商品の摘発にもご対応ですね','Yes — Police low-price-fraud-prod-bust','Cooperative','kenji_office'),
    mk('警察、関係機関と覚書を交わしました','Police rel-org-MOU-exchanged','Procedural','takeda_officer'),
    mk('はい。警察、緊急時の即日対応、頼もしいです','Yes — Police emerg same-day-resp reliable','Close','kenji_office'),
  ]},
  {id:'conv_08650',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、公用書類を自ら整えられたぞ','Dad — founding official-doc-self-prep','Sage','hiroshi_elder'),
    mk('はい。お父さんは専売契約を結ぶ目利きをお持ちでした','Yes — Dad excl-contract-insight','Commitment','hiroshi_boss'),
    mk('お父さん、社員にも敬称を欠かさなかったぞ','Dad — staff-honorific-never-skip','Wistful','hiroshi_elder'),
    mk('はい。お父さんは埋め立て事業への参入も決断されました','Yes — Dad reclaim-biz-entry-decide','Reflective','hiroshi_boss'),
    mk('お父さん、競合の買い取り交渉を成功させたぞ','Dad — rival-buyout-nego-success','Wistful','hiroshi_elder'),
    mk('はい。お父さんは廉価ラインも品質を保たれた','Yes — Dad low-price-line-quality-kept','Reflective','hiroshi_boss'),
    mk('お父さん、お取引先との覚書を大切にされたぞ','Dad — partner-MOU-cherish','Wistful','hiroshi_elder'),
    mk('はい。お父さんは即日対応の文化を社内に作られた','Yes — Dad same-day-resp-culture-made','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08651',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、微分方程式の社会応用を論文で扱いましたね','Ren — diff-eq-soc-app paper','Calm','asuka_teacher'),
    mk('はい、チラシを散らした選挙運動の歴史を論文で扱いました','Yes — Flyer-scatter-elect-camp-hist paper','Earnest','ren_uni'),
    mk('蓮さん、政治家の弁明の修辞を論文で扱いましたね','Ren — pol-defense-rhet paper','Reflective','asuka_teacher'),
    mk('はい、宣伝の中の欺瞞表現を論文で扱いました','Yes — Ad-deceit-expr paper','Earnest','ren_uni'),
    mk('排泄物処理の都市史を論文で扱いましたね','Sewage-city-hist paper','Engaged','asuka_teacher'),
    mk('はい、国際捕鯨規制の論争を論文で扱いました','Yes — Int-whaling-reg-dispute paper','Earnest','ren_uni'),
    mk('蓮さん、二十世紀の暴力団抗争史を論文で扱いましたね','Ren — 20-cent-yakuza-conflict-hist paper','Reflective','asuka_teacher'),
    mk('はい、戦時下の殺戮事件を論文で扱いました','Yes — Wartime-slaughter-case paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08652',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、犯罪統計の微分分析を警察、なさってますね','Case crime-stat-diff-anal police-do','Reflective','ren_uni'),
    mk('警察、現場に散らした証拠物を慎重に回収します','Police on-site-scatter-evidence careful-retrieve','Procedural','takeda_officer'),
    mk('本件、容疑者の弁明を警察、検証されてますね','Case suspect-defense police-verify','Reflective','ren_uni'),
    mk('警察、組織内の欺瞞行為を厳しく追及します','Police internal-deceit strict-pursue','Procedural','takeda_officer'),
    mk('本件、不法排泄事案を警察、摘発されてますね','Case illegal-dump-case police-bust','Reflective','ren_uni'),
    mk('警察、不法捕鯨に関する情報も収集します','Police illegal-whaling-info-collect','Procedural','takeda_officer'),
    mk('本件、組織間の抗争を警察、抑止されてますね','Case org-conflict police-prev','Reflective','ren_uni'),
    mk('警察、無差別殺戮事件に厳重対応します','Police indis-slaughter strict-resp','Close','takeda_officer'),
  ]},
  {id:'conv_08653',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、微分方程式の社会応用を論文で扱いましたね','Sakura — diff-eq paper','Calm','asuka_teacher'),
    mk('はい、チラシを散らした運動の歴史を論文で扱いました','Yes — Flyer-scatter paper','Earnest teen','sakura_teen'),
    mk('政治家の弁明の修辞を論文で扱いましたね','Pol-defense paper','Reflective','asuka_teacher'),
    mk('はい、宣伝の欺瞞表現を論文で扱いました','Yes — Ad-deceit paper','Earnest','sakura_teen'),
    mk('排泄物処理の都市史を論文で扱いましたね','Sewage paper','Engaged','asuka_teacher'),
    mk('はい、国際捕鯨規制の論争を論文で扱いました','Yes — Int-whaling paper','Earnest','sakura_teen'),
    mk('二十世紀の暴力団抗争史を論文で扱いましたね','Yakuza-conflict paper','Reflective','asuka_teacher'),
    mk('はい、戦時下の殺戮事件を論文で扱いました','Yes — Slaughter paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08654',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、薬物動態の微分解析を医療チームで学習しております','Ren — pharm-kin-diff-anal med-team learn','Calm','saito_doctor'),
    mk('はい、注意喚起のチラシを散らした地域活動を医療チームで支援しました','Yes — Warn-flyer-scatter-area med-team supp','Patient','saito_doctor'),
    mk('医療過誤の弁明よりも改善を、貴院、優先されてるそうですね、先生','Med-mal-defense-improve your-hosp priority, sensei','Reflective','ren_uni'),
    mk('はい、医療広告の欺瞞表現を医療チームで批判しております','Yes — Med-ad-deceit med-team-critique','Patient','saito_doctor'),
    mk('排泄機能障害の患者ケアを、貴院、なさってますね、先生','Excretory-disorder-patient-care your-hosp do, sensei','Curious','ren_uni'),
    mk('はい、捕鯨地域の食文化と病気の関連も医療チームで研究します','Yes — Whaling-area-food-disease med-team research','Patient','saito_doctor'),
    mk('組織抗争の被害者救命を、貴院、ご経験されたんですね、先生','Org-conflict-victim-rescue your-hosp exp, sensei','Reflective','ren_uni'),
    mk('はい、大量殺戮現場での救護も医療チームで備えております','Yes — Mass-slaughter-rescue med-team prep','Patient close','saito_doctor'),
  ]},
  {id:'conv_08655',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、データの微分解析を強化しろ','Our co — data-diff-anal strengthen','Crisp','hiroshi_boss'),
    mk('はい。販促チラシを散らした効果を検証します','Yes — Sales-flyer-scatter-eval','Methodical','kenji_office'),
    mk('当社、不祥事の弁明より誠実な対応をしろ','Our co — scandal-defense-sincere-resp','Direction','hiroshi_boss'),
    mk('はい。広告の欺瞞表現を厳禁とします','Yes — Ad-deceit strict-no','Update','kenji_office'),
    mk('工場の排泄物処理を厳格に管理しろ','Factory-sewage strict-mgmt','Direction','hiroshi_boss'),
    mk('はい。捕鯨関連の食品事業の動向を注視します','Yes — Whaling-rel-food-biz-watch','Update','kenji_office'),
    mk('当社、競合との抗争を避けて連携の道を探れ','Our co — rival-conflict-avoid-coop','Direction','hiroshi_boss'),
    mk('はい。社会的殺戮事件への支援活動も検討しております','Yes — Soc-slaughter-supp-act-consider','Close','kenji_office'),
  ]},
  {id:'conv_08656',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、新メニューにライムのソーダ加えましょう、メイちゃん','Aoi — new-menu lime-soda-add Mei','Animated','mei_romantic'),
    mk('葵、お客様、アパレルのお仕事なんだって、メイちゃん','Aoi — cust-apparel-work Mei','Reflective','aoi_barista'),
    mk('葵、お店の前にハトがいっぱい来てたよ、メイちゃん','Aoi — store-front-pigeon-many Mei','Reflective','mei_romantic'),
    mk('葵、お店にアンティーク家具を入れたいわね、メイちゃん','Aoi — store-antique-furn-want Mei','Reflective','aoi_barista'),
    mk('葵、お客様、川で鮎を釣ったってお話されてたよ、メイちゃん','Aoi — cust-river-ayu-caught Mei','Reflective','mei_romantic'),
    mk('葵、新メニュー、鮭のおにぎり入れましょう、メイちゃん','Aoi — new-menu salmon-onigiri-add Mei','Direction','aoi_barista'),
    mk('葵、お子様、トンボを追いかけてらしたよ、メイちゃん','Aoi — child-dragonfly-chased Mei','Pleased','mei_romantic'),
    mk('葵、お客様、有名な占い師に診てもらったって、メイちゃん','Aoi — cust-fortune-teller-saw Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08657',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがライムジュースを試されたぞ','Gran — youth Dad lime-juice-tried','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、アパレル商店を始められたわよね、あなた?','Yes — Grandpa-apparel-store-started, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがお庭でハトを眺めていらしたぞ','Gran — youth Dad-garden-pigeon-watched','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、アンティークの時計を集めてらしたわよね、あなた?','Grandpa — antique-clock-collected, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと川で鮎を釣ったぞ','Gran — youth Dad-river-ayu-fished','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お土産に鮭を持って帰られたわよね、あなた?','Grandpa — souv-salmon-bring, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが孫にトンボの捕り方を教えられたぞ','Gran — youth Dad-grandkid-dragonfly-catch-taught','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、占い師に運勢を見てもらったわよね、あなた?','Grandpa — youth-fortune-teller-fortune-saw, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08658',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんとライムのジュース作りましょうね','Sho — Mei-sis-lime-juice-make','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、ママがアパレルでお買物してたよ','Mei-sis — me Mom-apparel-shop','Eager child','sho_child'),
    mk('翔くん、公園にハトがたくさん来てるわね','Sho — park-pigeon-many','Reflective','mei_romantic'),
    mk('メイ姉さん、お祖母ちゃんがアンティークの時計を見せてくれたよ','Mei-sis — Grandma-antique-clock-showed','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんと川で鮎を釣りに行きたいわね','Sho — Grandpa-river-ayu-fish-want','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんの鮭おにぎり大好きだよ','Mei-sis — me Grandpa-salmon-onigiri-love','Eager child','sho_child'),
    mk('翔くん、公園でトンボを見つけられるかな','Sho — park-dragonfly-find?','Curious','mei_romantic'),
    mk('メイ姉さん、お祭りで占い師さんに見てもらったよ','Mei-sis — fest-fortune-teller-saw','Eager close','sho_child'),
  ]},
  {id:'conv_08659',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、ライム味の炭酸好きだろ?','Riku — lime-fizzy-like?','Curious teen','sakura_teen'),
    mk('お前、家族でアパレル屋行ったろ?桜','You — fam-apparel-went? Sakura','Curious','riku_teen'),
    mk('リク、お前、公園のハトに餌やってたな','Riku — park-pigeon-fed','Wry','sakura_teen'),
    mk('お前、アンティークショップ好きだろ?桜','You — antique-shop-like? Sakura','Curious','riku_teen'),
    mk('リク、お前、川釣りで鮎獲ったろ?','Riku — river-ayu-caught?','Curious','sakura_teen'),
    mk('お前、給食の鮭フライ好きだろ?桜','You — lunch-salmon-fry-like? Sakura','Curious','riku_teen'),
    mk('リク、お前、夏休みにトンボ捕ったろ?','Riku — summer-dragonfly-caught?','Curious','sakura_teen'),
    mk('お前、文化祭で占い師ごっこやってたな、桜','You — fest-fortune-teller-played Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_08660',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがライムを買ってきて下さったわ','Sho — Dad-lime-bought','Reflective','yumiko_mom'),
    mk('ママ、ぼく、ママとアパレルショップでお買物したよ','Mom — me Mom-apparel-shop-shopped','Eager child','sho_child'),
    mk('翔くん、お庭に来るハトたちに餌をあげましょうね','Sho — garden-pigeon-feed','Direction','yumiko_mom'),
    mk('ママ、お祖母ちゃんのアンティーク家具、素敵だね','Mom — Grandma-antique-furn-lovely','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんと鮎の塩焼きを食べに行きましょうね','Sho — Grandpa-ayu-salt-grill-go','Tender','yumiko_mom'),
    mk('ママ、ぼく、お祖母ちゃんの鮭おにぎりが一番好きだよ','Mom — me Grandma-salmon-onigiri-fav','Eager child','sho_child'),
    mk('翔くん、お庭にトンボが来ているわよ','Sho — garden-dragonfly-came','Reflective','yumiko_mom'),
    mk('ママ、ぼく、占い師さんになりたいって思ったことあるよ','Mom — me fortune-teller-want-thought','Eager close','sho_child'),
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

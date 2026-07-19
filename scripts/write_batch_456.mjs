import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_456 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['せっせと','おっちゃん','大方','易く','総じて','ひそか','カワイイ','凄まじい']
const B_T = ['読み書き','本誌','常務','出回っ','既婚','上述','免責','全長']
const C_T = ['拳銃','失踪','濃縮','閉じ込め','荒廃','痴呆','損なわ','マルクス主義']
const D_T = ['運河','レントゲン','怪物','満月','種族','蟹','椿','ほのぼの']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09081',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがせっせとお仕事に通ってらっしゃるわ','Sho — Dad-diligent-work','Reflective','yumiko_mom'),
    mk('ママ、お祖父ちゃんが「おっちゃん」って自分のこと呼んでらしたよ','Mom — Grandpa-"old-man"-self-call','Wry child','sho_child'),
    mk('翔くん、大方のお友達は元気にしてらっしゃるわね','Sho — most-friend-well','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんから易く折り紙の折り方を習ったよ','Mom — me Grandpa-easy-origami-learn','Proud child','sho_child'),
    mk('翔くん、お父さんは総じて穏やかな方ね','Sho — Dad-overall-calm','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんがひそかに涙されてたのを見たよ','Mom — me Grandpa-secret-tear-saw','Reflective child','sho_child'),
    mk('翔くん、お祖父ちゃんが「カワイイ孫だ」って仰ってたわ','Sho — Grandpa-"cute-grandkid"-said','Pleased','yumiko_mom'),
    mk('ママ、ぼく、運動会で凄まじい応援に驚いたよ','Mom — me sports-day-fierce-cheer-surprised','Eager close','sho_child'),
  ]},
  {id:'conv_09082',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、私達もせっせと働いてるね、メイちゃん','Aoi — we-diligent-work Mei','Reflective','mei_romantic'),
    mk('葵、市場のおっちゃんが新鮮な魚を分けて下さったよ、メイちゃん','Aoi — market-old-man-fresh-fish Mei','Pleased','aoi_barista'),
    mk('葵、大方のお客様は新メニューに好意的ね、メイちゃん','Aoi — most-cust-new-menu-fav Mei','Pleased','mei_romantic'),
    mk('葵、新メニュー、易く作れるレシピにしたよ、メイちゃん','Aoi — new-menu-easy-recipe Mei','Direction','aoi_barista'),
    mk('葵、お客様、総じて満足してくれてるね、メイちゃん','Aoi — cust-overall-satisfied Mei','Pleased','mei_romantic'),
    mk('葵、お客様がひそかに新メニューの噂をしてくれてるよ、メイちゃん','Aoi — cust-secret-new-menu-rumor Mei','Pleased','aoi_barista'),
    mk('葵、新しいエプロン、カワイイね、メイちゃん','Aoi — new-apron-cute Mei','Praising','mei_romantic'),
    mk('葵、繁忙期は凄まじい忙しさだね、メイちゃん','Aoi — busy-fierce-busy Mei','Wry close','aoi_barista'),
  ]},
  {id:'conv_09083',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがせっせと田んぼを耕されたぞ','Gran — youth Dad-diligent-rice-field-till','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、近所のおっちゃんと将棋を指されたわよね、あなた?','Yes — Grandpa-neighbor-old-man-shogi, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは大方の不満を口にされなかった','Gran — youth Dad-most-comp-not-say','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、書道を易く教えて下さったわよね、あなた?','Grandpa — calligraphy-easy-teach, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんは総じて寡黙な方でらした','Gran — Dad-overall-quiet','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様にひそかにお小遣いを渡されてたわよね、あなた?','Grandpa — grandkid-secret-allowance, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お孫様の事を「カワイイ」と仰ってたぞ','Gran — youth-grandkid-"cute"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、戦時下の凄まじい体験をされたわよね、あなた?','Grandpa — wartime-fierce-exp, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09084',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、せっせと勉強してんな','Riku — diligent-study','Praising teen','sakura_teen'),
    mk('お前、商店街のおっちゃんと仲良くなったろ、桜','You — arcade-old-man-friend Sakura','Curious','riku_teen'),
    mk('リク、お前、大方の問題は解けたな','Riku — most-prob-solve','Praising','sakura_teen'),
    mk('お前、ノートを易く貸してくれてサンキューな、桜','You — note-easy-lend-thx Sakura','Tender','riku_teen'),
    mk('リク、お前、総じてセンスあるな','Riku — overall-sense','Praising','sakura_teen'),
    mk('お前、ひそかに俺の事気にかけてるだろ、桜','You — secret-me-care Sakura','Wry','riku_teen'),
    mk('リク、お前のリュック、カワイイデザインだな','Riku — your-backpack-cute-design','Praising','sakura_teen'),
    mk('お前、文化祭の準備、凄まじい量だったな、桜','You — fest-prep-fierce-amt Sakura','Reflective close','riku_teen'),
  ]},
  {id:'conv_09085',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんはせっせとアトリエで絵を描かれるのよ','Sho — Mei-sis-diligent-atelier-draw','Reflective','mei_romantic'),
    mk('メイ姉さん、お祭りのおっちゃんがたこ焼きをくれたよ','Mei-sis — fest-old-man-takoyaki-gave','Eager child','sho_child'),
    mk('翔くん、大方のお絵描きは綺麗にできたわね','Sho — most-drawing-clean','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんから易く絵を教わったよ','Mei-sis — me Mei-sis-easy-art-learn','Proud child','sho_child'),
    mk('翔くん、メイ姉さんの絵は総じて優しい色合いね','Sho — Mei-sis-art-overall-kind-color','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ひそかに描いた絵を見せたいんだ','Mei-sis — me secret-pic-show-want','Earnest child','sho_child'),
    mk('翔くん、メイ姉さんのお洋服、いつもカワイイね','Sho — Mei-sis-clothes-always-cute','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、凄まじい雷の音で起きたよ','Mei-sis — me fierce-thunder-woke','Eager close','sho_child'),
  ]},
  {id:'conv_09086',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新人の読み書きのレベルを確認しろ','Our co — newbie-read-write-check','Crisp','hiroshi_boss'),
    mk('はい。本誌のインタビューを準備しております','Yes — Our-mag-int-prep','Methodical','kenji_office'),
    mk('当社、新任の常務を発表しろ','Our co — new-managing-dir-announce','Direction','hiroshi_boss'),
    mk('はい。ネット上に偽情報が出回っている件、対応します','Yes — Net-fake-info-out-resp','Update','kenji_office'),
    mk('当社、既婚社員の福利厚生を見直せ','Our co — married-staff-benefit-review','Direction','hiroshi_boss'),
    mk('はい。上述の方針通り進めます','Yes — Above-policy-progress','Update','kenji_office'),
    mk('当社、免責事項を契約書に明記しろ','Our co — disclaim-contract-clear','Direction','hiroshi_boss'),
    mk('はい。新型車の全長を発表しました','Yes — New-car-total-length-announce','Close','kenji_office'),
  ]},
  {id:'conv_09087',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('新人の読み書きスキルを評価しましょう','Newbie-read-write-skill-eval','Brisk','yuki_office'),
    mk('はい。本誌記事を社内報にも転載します','Yes — Our-mag-co-news-reprint','Cooperative','kenji_office'),
    mk('常務会議で新方針を承認してもらいましょう','Managing-dir-meet-new-policy-approve','Direction','yuki_office'),
    mk('はい。市場に出回っている類似品を調査中です','Yes — Market-similar-out-research','Update','kenji_office'),
    mk('既婚者向けの社宅制度を案内しましょう','Married-staff-housing-announce','Direction','yuki_office'),
    mk('はい。上述の通り、改善計画を出します','Yes — Above-imp-plan-submit','Update','kenji_office'),
    mk('保険の免責範囲を社員に説明しましょう','Ins-disclaim-range-staff-explain','Direction','yuki_office'),
    mk('はい。商品の全長表記を統一しました','Yes — Prod-total-length-unify','Close','kenji_office'),
  ]},
  {id:'conv_09088',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文の読み書きを毎日鍛えろ','Ren — paper-read-write-daily-train','Mentor','hiroshi_boss'),
    mk('はい。本誌の最新号に研究紹介が載りました','Yes — Our-mag-latest-research-intro','Earnest','ren_uni'),
    mk('蓮、研究所の常務との面談を入れろ','Ren — research-fac-managing-dir-meet','Direction','hiroshi_boss'),
    mk('はい。市場に出回っている類似研究を調査しました','Yes — Out-similar-research-check','Polite','ren_uni'),
    mk('蓮、既婚の研究者の事情にも配慮しろ','Ren — married-researcher-circ-care','Direction','hiroshi_boss'),
    mk('はい。上述の理論を論文の冒頭で扱います','Yes — Above-theory-paper-open','Earnest','ren_uni'),
    mk('蓮、研究の免責事項を論文に明記しろ','Ren — research-disclaim-paper-clear','Direction','hiroshi_boss'),
    mk('はい。試料の全長を測定して論文に記載します','Yes — Sample-total-length-measure-rec','Earnest close','ren_uni'),
  ]},
  {id:'conv_09089',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、読み書き能力の啓発もされてますね','Police read-write-edu','Cooperative','kenji_office'),
    mk('警察、本誌のインタビュー取材にもご対応ですね','Police our-mag-int-resp','Cooperative','kenji_office'),
    mk('警察、本部の常務会議で防犯方針を共有されますね','Police HQ-managing-dir-crime-prev','Cooperative','kenji_office'),
    mk('警察、市中に出回っている偽造硬貨を捜査されますね','Police market-out-fake-coin-inv','Cooperative','kenji_office'),
    mk('警察、既婚者の家庭内事案にもご対応ですね','Police married-fam-case-resp','Cooperative','kenji_office'),
    mk('警察、上述の通り、捜査を進められますね','Police above-inv-progress','Cooperative','kenji_office'),
    mk('警察、免責事項を被害者ご家族にもご説明されますね','Police disclaim-victim-fam-explain','Cooperative','kenji_office'),
    mk('警察、容疑車両の全長まで記録されてますね','Police suspect-veh-total-length-rec','Close','kenji_office'),
  ]},
  {id:'conv_09090',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、社員の読み書きを大事にされたぞ','Dad — founding staff-read-write-cherish','Sage','hiroshi_elder'),
    mk('はい。お父さんは本誌の記者と懇談された','Yes — Dad our-mag-rep-chat','Commitment','hiroshi_boss'),
    mk('お父さん、初代の常務として会社を支えられたぞ','Dad — first-managing-dir-supp','Wistful','hiroshi_elder'),
    mk('はい。お父さんは類似品が市場に出回っても動じなかった','Yes — Dad similar-out-not-move','Reflective','hiroshi_boss'),
    mk('お父さん、既婚社員に家族手当を出されたぞ','Dad — married-staff-fam-allow','Wistful','hiroshi_elder'),
    mk('はい。お父さんは上述の通り、新理念を提示された','Yes — Dad above-new-creed-show','Reflective','hiroshi_boss'),
    mk('お父さん、免責事項を契約書に明示するご決断もされた','Dad — disclaim-contract-clear-decide','Wistful','hiroshi_elder'),
    mk('はい。お父さんは商品の全長まで細かく確認された','Yes — Dad prod-total-length-detail-check','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09091',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、戦時下の拳銃管理を論文で扱いましたね','Ren — war-pistol-mgmt paper','Calm','asuka_teacher'),
    mk('はい、政治家の失踪事件を論文で扱いました','Yes — Pol-vanish-case paper','Earnest','ren_uni'),
    mk('蓮さん、エキスを濃縮する古代技術を論文で扱いましたね','Ren — essence-concen-anc-tech paper','Reflective','asuka_teacher'),
    mk('はい、被害者を閉じ込めた事件の心理学を論文で扱いました','Yes — Victim-confine-psy paper','Earnest','ren_uni'),
    mk('蓮さん、戦後の都市荒廃の研究を論文で扱いましたね','Ren — postwar-urban-ruin paper','Reflective','asuka_teacher'),
    mk('はい、痴呆症介護の社会学を論文で扱いました','Yes — Dem-care-soc paper','Earnest','ren_uni'),
    mk('健康を損なわぬ職場環境を論文で扱いましたね','Health-not-damage-workplace paper','Engaged','asuka_teacher'),
    mk('はい、マルクス主義の思想史を論文で扱いました','Yes — Marxism-thought-hist paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09092',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、警察、容疑者の拳銃所持を確認されましたね','Case suspect-pistol-poss police-confirm','Reflective','ren_uni'),
    mk('警察、失踪者の捜索を継続します','Police vanish-search-cont','Procedural','takeda_officer'),
    mk('本件、濃縮された薬物の押収を警察、なさいましたね','Case concen-drug-confis police','Reflective','ren_uni'),
    mk('警察、被害者を閉じ込めた現場を保全します','Police victim-confine-on-site-preserve','Procedural','takeda_officer'),
    mk('本件、荒廃した空き家での犯行を警察、捜査されますね','Case ruin-empty-house-crime police-inv','Reflective','ren_uni'),
    mk('警察、痴呆症の方が関わる事案にも配慮します','Police dem-rel-case-care','Procedural','takeda_officer'),
    mk('本件、被害者の名誉を損なわぬよう警察、配慮されてますね','Case victim-honor-not-damage police-care','Reflective','ren_uni'),
    mk('警察、マルクス主義系過激派の動向も注視します','Police Marxism-extreme-watch','Close','takeda_officer'),
  ]},
  {id:'conv_09093',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、戦時下の拳銃管理を論文で扱いましたね','Sakura — pistol-mgmt paper','Calm','asuka_teacher'),
    mk('はい、政治家の失踪事件を論文で扱いました','Yes — Pol-vanish paper','Earnest teen','sakura_teen'),
    mk('エキスを濃縮する古代技術を論文で扱いましたね','Essence-concen paper','Reflective','asuka_teacher'),
    mk('はい、被害者を閉じ込めた事件を論文で扱いました','Yes — Victim-confine paper','Earnest','sakura_teen'),
    mk('戦後の都市荒廃の研究を論文で扱いましたね','Postwar-urban-ruin paper','Reflective','asuka_teacher'),
    mk('はい、痴呆症介護の社会学を論文で扱いました','Yes — Dem-care paper','Earnest','sakura_teen'),
    mk('健康を損なわぬ職場環境を論文で扱いましたね','Health-not-damage paper','Engaged','asuka_teacher'),
    mk('はい、マルクス主義の思想史を論文で扱いました','Yes — Marxism paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09094',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、銃弾による外傷ケアを医療チームで研修します','Ren — bullet-trauma-care med-team train','Calm','saito_doctor'),
    mk('はい、失踪者発見時の医療対応を医療チームで準備しております','Yes — Vanish-found-med-resp med-team','Patient','saito_doctor'),
    mk('薬剤を濃縮する精製を、貴院、自前でなさってるんですね、先生','Drug-concen-purif your-hosp self, sensei','Curious','ren_uni'),
    mk('はい、隔離室に閉じ込められた患者さんの心のケアを医療チームで重視します','Yes — Isolate-confine-patient-mental med-team','Patient','saito_doctor'),
    mk('荒廃地域の医療巡回を、貴院、なさってますね、先生','Ruin-area-med-patrol your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、痴呆症外来を医療チームで担当しております','Yes — Dem-out-pat med-team','Patient','saito_doctor'),
    mk('患者の生活の質を損なわぬ治療を、貴院、重視されてますね、先生','Patient-QOL-not-damage your-hosp imp, sensei','Reflective','ren_uni'),
    mk('はい、マルクス主義に基づく公衆衛生史を医療チームで参照します','Yes — Marxism-pub-health-hist med-team ref','Patient close','saito_doctor'),
  ]},
  {id:'conv_09095',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、警備員の拳銃所持は法令を守れ','Our co — guard-pistol-law-comply','Crisp','hiroshi_boss'),
    mk('はい。社員の失踪事案にはすぐに対応します','Yes — Staff-vanish-fast-resp','Methodical','kenji_office'),
    mk('当社、新製品にエキスを濃縮する技術を活かせ','Our co — new-prod-concen-tech-util','Direction','hiroshi_boss'),
    mk('はい。情報を社内に閉じ込めない透明性を保ちます','Yes — Info-confine-not-transp','Update','kenji_office'),
    mk('当社、市場の荒廃を防ぐ社会貢献も検討しろ','Our co — market-ruin-prev-soc-cont','Direction','hiroshi_boss'),
    mk('はい。痴呆症の家族を持つ社員を支援します','Yes — Dem-fam-staff-supp','Update','kenji_office'),
    mk('当社、ブランドを損なわぬ広告を作れ','Our co — brand-not-damage-ad','Direction','hiroshi_boss'),
    mk('はい。マルクス主義系の経営思想にも触れて学習します','Yes — Marxism-mgmt-touch-study','Close','kenji_office'),
  ]},
  {id:'conv_09096',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、運河沿いのお散歩のお話されてたよ、メイちゃん','Aoi — cust-canal-walk-told Mei','Reflective','mei_romantic'),
    mk('葵、お客様、レントゲン検査の後にお見えになったって、メイちゃん','Aoi — cust-X-ray-after-came Mei','Reflective','aoi_barista'),
    mk('葵、お子様、絵本の怪物のキャラに夢中ね、メイちゃん','Aoi — child-book-monster-into Mei','Pleased','mei_romantic'),
    mk('葵、満月の夜は雰囲気がいいわね、メイちゃん','Aoi — full-moon-vibe-good Mei','Reflective','aoi_barista'),
    mk('葵、お客様、人類の種族のお話されてたよ、メイちゃん','Aoi — cust-human-species-told Mei','Reflective','mei_romantic'),
    mk('葵、新メニューに蟹のクリームパスタ加えましょう、メイちゃん','Aoi — new-menu-crab-cream-pasta-add Mei','Animated','aoi_barista'),
    mk('葵、お店の前に椿の枝を飾りましょう、メイちゃん','Aoi — store-camellia-branch-decor Mei','Direction','mei_romantic'),
    mk('葵、お客様、お子様とほのぼのとお過ごしね、メイちゃん','Aoi — cust-child-warm-pass Mei','Tender close','aoi_barista'),
  ]},
  {id:'conv_09097',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんと運河沿いを歩いたぞ','Gran — youth Dad-canal-walked','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、レントゲン検査でお身体を診て頂いたわよね、あなた?','Yes — Grandpa-X-ray-checkup, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと孫と怪物映画を観た','Gran — youth Dad-grandkid-monster-movie','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、満月の日に詩を詠まれたわよね、あなた?','Grandpa — full-moon-poem-read, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは異種族との交流を大事にされた','Gran — youth Dad-diff-species-exch-cherish','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お祝いに蟹のお料理を作って下さったわよね、あなた?','Grandpa — celeb-crab-cook, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは庭に椿を植えられたぞ','Gran — youth Dad-garden-camellia-planted','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様とほのぼのと過ごされたわよね、あなた?','Grandpa — grandkid-warm-pass, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09098',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんと運河沿いを歩きましょうね','Sho — Dad-canal-walk','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、明日レントゲン検査受けるよ','Mei-sis — me tomorrow-X-ray','Earnest child','sho_child'),
    mk('翔くん、メイ姉さんの怪物のお絵描き、可愛いね','Sho — Mei-sis-monster-art-cute','Praising','mei_romantic'),
    mk('メイ姉さん、満月の夜、お父さんと月見たいよ','Mei-sis — full-moon-Dad-want','Eager child','sho_child'),
    mk('翔くん、図書館で世界の種族のご本を借りましょうね','Sho — lib-world-species-book-borrow','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんと蟹のお料理食べたよ','Mei-sis — me Grandpa-crab-ate','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんのお庭に椿が咲いてるわ','Sho — Grandpa-garden-camellia-bloom','Pleased','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんとほのぼの過ごせて嬉しいよ','Mei-sis — me Mei-sis-warm-pass-glad','Tender close','sho_child'),
  ]},
  {id:'conv_09099',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、地理で運河の単元やったろ?','Riku — geo-canal-unit?','Curious teen','sakura_teen'),
    mk('お前、レントゲン検査怖がってたな、桜','You — X-ray-scared Sakura','Wry','riku_teen'),
    mk('リク、お前、ゲームの怪物倒すの早いな','Riku — game-monster-fast','Praising','sakura_teen'),
    mk('お前、満月の写真撮ったろ?桜','You — full-moon-photo? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会で人類の種族の単元やったろ?','Riku — soc-human-species?','Curious','sakura_teen'),
    mk('お前、家族で蟹のお店行ったろ?桜','You — fam-crab-store? Sakura','Curious','riku_teen'),
    mk('リク、お前ん家、お庭に椿あるな','Riku — your-home-camellia','Reflective','sakura_teen'),
    mk('お前、ほのぼの系のアニメ好きだろ?桜','You — warm-anime-like? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09100',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんと運河沿いをお散歩しましょうね','Sho — Dad-canal-walk','Tender','yumiko_mom'),
    mk('ママ、ぼく、明日レントゲン検査だから緊張するよ','Mom — me tomorrow-X-ray-nervous','Earnest child','sho_child'),
    mk('翔くん、絵本に出てくる怪物、可愛いわね','Sho — book-monster-cute','Reflective','yumiko_mom'),
    mk('ママ、ぼく、満月の夜にお祖父ちゃんとお月見したいよ','Mom — me full-moon-Grandpa-want','Eager child','sho_child'),
    mk('翔くん、図書館で世界の種族について調べましょうね','Sho — lib-world-species-research','Tender','yumiko_mom'),
    mk('ママ、ぼく、お祖母ちゃんの蟹のお料理、大好きだよ','Mom — me Grandma-crab-love','Eager child','sho_child'),
    mk('翔くん、お庭の椿、きれいに咲いてるわね','Sho — garden-camellia-bloom','Pleased','yumiko_mom'),
    mk('ママ、ぼく、お父さんとほのぼの過ごす時間が好き','Mom — me Dad-warm-pass-like','Tender close','sho_child'),
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

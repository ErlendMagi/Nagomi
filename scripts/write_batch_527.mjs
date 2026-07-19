import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_527 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['椎','蕾','唾','皺','両端','左折','８つ','スギ']
const B_T = ['キックオフ','型式','買い取っ','アダプター','コネクタ','ブランク','送り出す','圏外']
const C_T = ['如何なる','原著','生い立ち','懇願','物言い','卵子','破局','公道']
const D_T = ['フレッツ','エンタテイメント','ラストシーン','ポッドキャスティング','ヤンキース','ソフトボール','ホステス','タッグ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10501',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが椎茸の収穫を手伝って下さるそうよ','Sho — Dad-shiitake-harv-help','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと桜の蕾を観に行ったよ','Mom — me Dad-cherry-bud','Pleased child','sho_child'),
    mk('翔くん、お父さんが「唾を飛ばさない様に話せ」って仰ってたわ','Sho — Dad-"saliva-careful-talk"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「服の皺を伸ばしてね」って教えて頂いたよ','Mom — me Dad-"cloth-wrink-iron"-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが本棚の両端を補強して下さったわ','Sho — Dad-bookcase-both-end-reinf','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「次の交差点を左折」って教えて頂いたよ','Mom — me Dad-"next-cross-left-turn"-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんがお団子を８つ買って来て下さったわ','Sho — Dad-dango-8-bought','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんがスギ花粉に苦しんでらっしゃるよ','Mom — Dad-cedar-pol-suff','Earnest close','sho_child'),
  ]},
  {id:'conv_10502',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、椎茸スープを召し上がってらしたよ、メイちゃん','Aoi — cust-shiitake-soup Mei','Reflective','mei_romantic'),
    mk('葵、お客様、店先の桜の蕾を眺めてらしたよ、メイちゃん','Aoi — cust-front-cherry-bud Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ふと唾を飲んで、ケーキを我慢されてたよ、メイちゃん','Aoi — cust-saliva-cake-rest Mei','Wry','mei_romantic'),
    mk('葵、お客様、シャツの皺を気にされてたよ、メイちゃん','Aoi — cust-shirt-wrink-care Mei','Reflective','aoi_barista'),
    mk('葵、お客様、カウンターの両端のスツールがお好きだって、メイちゃん','Aoi — cust-counter-both-end-stool Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お店から左折された所のお花屋さんを尋ねてらしたよ、メイちゃん','Aoi — cust-left-turn-flo-shop-ask Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お菓子の詰め合わせを８つご注文だったよ、メイちゃん','Aoi — cust-sweets-8-order Mei','Reflective','mei_romantic'),
    mk('葵、お客様、スギ花粉症のお話を語って下さったよ、メイちゃん','Aoi — cust-cedar-aller-talk Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10503',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが椎の木を裏山に植えられた','Gran — youth Dad-shii-tree-mtn','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、毎年桜の蕾を観に行かれたわよね、あなた?','Yes — Grandpa-cherry-bud-yr, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは唾棄すべき行為を許さなかった','Gran — youth Dad-saliva-discard-no-tol','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、私の和服の皺を伸ばして下さったわよね、あなた?','Grandpa — my-yuk-wrink-iron, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが古い家の両端の柱を補強された','Gran — youth Dad-old-house-both-pil-reinf','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、市役所で左折される道を教えて下さったわよね、あなた?','Grandpa — city-hall-left-turn-teach, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが正月に子供達に８つの教えを伝えられた','Gran — youth Dad-NY-kids-8-teach','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、スギ林の手入れをされてたわよね、あなた?','Grandpa — youth-cedar-for-care, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10504',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、林間学校で椎茸狩りしてたな','Riku — for-camp-shii-pick','Curious teen','sakura_teen'),
    mk('お前、桜の蕾の写真撮ってたな、桜','You — cherry-bud-photo Sakura','Curious','riku_teen'),
    mk('リク、お前、話す時に唾飛ばすって言われたろ','Riku — talk-saliva-spread-said?','Wry','sakura_teen'),
    mk('お前、制服のスカートの皺気にしてたな、桜','You — uni-skirt-wrink-care Sakura','Wry','riku_teen'),
    mk('リク、お前、答案用紙の両端に落書きしてたろ','Riku — test-both-end-doodle?','Wry','sakura_teen'),
    mk('お前、自転車で左折ウインカー忘れたろ、桜','You — bike-left-sig-forget? Sakura','Wry','riku_teen'),
    mk('リク、お前、家族で旅館の朝食８つの小鉢食べたな','Riku — fam-ryokan-8-dish','Curious','sakura_teen'),
    mk('お前、スギ花粉の季節辛そうだったな、桜','You — cedar-season-bad Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10505',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが椎茸の食べ方を教えて下さるわ','Sho — Dad-shii-eat-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと桜の蕾を毎日観察してるよ','Mei-sis — me Dad-cherry-bud-obs','Eager child','sho_child'),
    mk('翔くん、お父さんが「歌う時に唾を飛ばさない様にね」って仰ってたわ','Sho — Dad-"sing-saliva-no"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに服の皺を伸ばす道具を教えて頂いたよ','Mei-sis — me Dad-wrink-iron-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが本棚の両端の本を整えて下さったわ','Sho — Dad-bookcase-both-end-tidy','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに公園の入り口で左折って教えて頂いたよ','Mei-sis — me Dad-park-ent-left-turn','Earnest child','sho_child'),
    mk('翔くん、お父さんがお弁当のおかずを８つ用意して下さったわ','Sho — Dad-lunch-side-8-prep','Tender','mei_romantic'),
    mk('メイ姉さん、お父さんがスギの香りのお風呂、つまり檜湯を準備して下さったよ','Mei-sis — Dad-cedar-bath-prep','Eager close','sho_child'),
  ]},
  {id:'conv_10506',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、年度のキックオフミーティングを大切にしろ','Our co — FY-kickoff-meet-cher','Crisp','hiroshi_boss'),
    mk('はい。製品の型式登録を更新します','Yes — Prod-mod-reg-upd','Methodical','kenji_office'),
    mk('当社、旧設備は買い取って頂ける業者を探せ','Our co — old-eqp-buy-find','Direction','hiroshi_boss'),
    mk('はい。社内機器のアダプター在庫を整えます','Yes — Off-eqp-adp-stock','Update','kenji_office'),
    mk('当社、通信ケーブルのコネクタ品質を統一しろ','Our co — comm-cable-conn-uni','Direction','hiroshi_boss'),
    mk('はい。新人研修にブランク時間を入れます','Yes — Newhire-train-blank-incl','Update','kenji_office'),
    mk('当社、新製品を世に送り出す前にテストを徹底しろ','Our co — new-prod-launch-test-thor','Direction','hiroshi_boss'),
    mk('はい。社用携帯の圏外対策を検討します','Yes — Co-phone-out-area-cons','Close','kenji_office'),
  ]},
  {id:'conv_10507',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('プロジェクトのキックオフを来週設定しましょう','Proj-kickoff-nextweek','Brisk','yuki_office'),
    mk('はい。新型式の機械の試験運転を予定します','Yes — New-mod-mach-trial','Cooperative','kenji_office'),
    mk('中古品を買い取って下さる取引先を探しましょう','Used-buy-back-vendor-find','Direction','yuki_office'),
    mk('はい。アダプター互換性の一覧を整えます','Yes — Adp-compat-list-prep','Update','kenji_office'),
    mk('社内のコネクタ規格を統一しましょう','Off-conn-stand-uni','Direction','yuki_office'),
    mk('はい。研修日程にブランクを入れて休憩を確保します','Yes — Train-sch-blank-rest','Update','kenji_office'),
    mk('新サービスを送り出す日程を確認しましょう','New-svc-launch-date-check','Direction','yuki_office'),
    mk('はい。外勤先での圏外対応を整えます','Yes — Out-site-out-area-resp','Close','kenji_office'),
  ]},
  {id:'conv_10508',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究プロジェクトのキックオフを準備しろ','Ren — res-proj-kickoff-prep','Mentor','hiroshi_boss'),
    mk('はい。実験装置の型式仕様書を確認します','Yes — Exp-eqp-mod-spec-check','Earnest','ren_uni'),
    mk('蓮、廃棄予定の装置を業者に買い取って頂け','Ren — disp-eqp-buy-back','Direction','hiroshi_boss'),
    mk('はい。海外論文のアダプター回路の論文を読みます','Yes — Overs-adp-circ-paper','Earnest','ren_uni'),
    mk('蓮、研究室のコネクタ規格を統一しろ','Ren — lab-conn-uni','Direction','hiroshi_boss'),
    mk('はい。学会日程のブランクを利用してフィールドに出ます','Yes — Conf-sch-blank-field','Polite','ren_uni'),
    mk('蓮、研究成果を社会に送り出す道筋を考えろ','Ren — res-launch-path-cons','Direction','hiroshi_boss'),
    mk('はい。山岳調査時の圏外対応プランを整えます','Yes — Mtn-surv-out-area-plan','Earnest close','ren_uni'),
  ]},
  {id:'conv_10509',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、新年度のキックオフ会議もされますね','Police FY-kickoff-meet','Cooperative','kenji_office'),
    mk('警察、捜査車両の型式変更時に届出されますね','Police inv-veh-mod-chg-notify','Cooperative','kenji_office'),
    mk('警察、押収品を国が買い取って差押える事もありますね','Police seiz-buy-gov-imp','Cooperative','kenji_office'),
    mk('警察、無線機のアダプターを多種ご用意ですね','Police radio-adp-multi-ready','Cooperative','kenji_office'),
    mk('警察、防犯カメラのコネクタ点検もされますね','Police prev-cam-conn-insp','Cooperative','kenji_office'),
    mk('警察、配備のブランク期間を作らない様シフトされますね','Police deploy-blank-no-shift','Cooperative','kenji_office'),
    mk('警察、新型機を現場に送り出す前に訓練されますね','Police new-mod-field-train','Cooperative','kenji_office'),
    mk('警察、山中での圏外対策の無線中継もされますね','Police mtn-out-area-radio-relay','Close','kenji_office'),
  ]},
  {id:'conv_10510',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、社員総会のキックオフを大事にされた','Dad — found gen-meet-kickoff-cher','Sage','hiroshi_elder'),
    mk('はい。お父さんは機械の型式選定に時間をかけられた','Yes — Dad mach-mod-pick-time','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、古い在庫を自ら買い取って整理された','Dad — youth old-stock-self-buy-tidy','Wistful','hiroshi_elder'),
    mk('はい。お父さんは海外製アダプターも自ら検品された','Yes — Dad overs-adp-self-insp','Reflective','hiroshi_boss'),
    mk('お父さん、工場のコネクタ規格を統一する案を出された','Dad — fact-conn-uni-prop','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員の休暇のブランクも尊重された','Yes — Dad staff-leave-blank-resp','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、自社製品を世界に送り出す夢を語られた','Dad — youth-co-prod-world-launch-dream','Wistful','hiroshi_elder'),
    mk('はい。お父さんは海外出張時の圏外時の対策に詳しかった','Yes — Dad overs-out-area-knowl','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10511',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、如何なる困難も学術で克服した事例を論文で扱いましたね','Ren — any-hard-acad-over paper','Calm','asuka_teacher'),
    mk('はい、海外哲学書の原著翻訳の研究を論文で扱いました','Yes — Overs-phil-orig-trans paper','Earnest','ren_uni'),
    mk('蓮さん、文豪の生い立ちの伝記研究を論文で扱いましたね','Ren — auth-upb-biog paper','Reflective','asuka_teacher'),
    mk('はい、災害支援を懇願する自治体の声明を論文で扱いました','Yes — Dis-aid-req-muni-state paper','Earnest','ren_uni'),
    mk('蓮さん、伝統的相撲の物言いの研究を論文で扱いましたね','Ren — sumo-obj-stud paper','Reflective','asuka_teacher'),
    mk('はい、不妊治療と卵子凍結の倫理研究を論文で扱いました','Yes — Inf-egg-fr-eth paper','Earnest','ren_uni'),
    mk('蓮さん、終戦時の社会の破局的状況の研究を論文で扱いましたね','Ren — postwar-soc-coll paper','Reflective','asuka_teacher'),
    mk('はい、公道での自動運転実験の倫理を論文で扱いました','Yes — Pub-rd-auto-drv-eth paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10512',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、如何なる困難な事案でも、警察、解決を諦められませんね','Case any-hard police-give-up-no','Reflective','ren_uni'),
    mk('警察、参考図書の原著を、捜査官、読まれますね','Police ref-orig-off-read','Cooperative','takeda_officer'),
    mk('本件、容疑者の生い立ちを、警察、丁寧に調べられますね','Case suspect-upb police-careful','Reflective','ren_uni'),
    mk('警察、ご家族の早期解決を懇願する声に応えられますね','Police fam-early-solv-req-resp','Cooperative','takeda_officer'),
    mk('本件、目撃者の物言いを、警察、慎重に聞かれますね','Case witn-obj police-careful-hear','Reflective','ren_uni'),
    mk('警察、不妊治療で扱う卵子の盗難事件も対応されますね','Police inf-egg-theft-resp','Cooperative','takeda_officer'),
    mk('本件、関係破局後の保護対応を、警察、慎重におこなわれますね','Case rel-coll-prot-resp police-careful','Reflective','ren_uni'),
    mk('警察、公道での違法走行も取り締まりされますね','Police pub-rd-illeg-crackdown','Close','takeda_officer'),
  ]},
  {id:'conv_10513',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、如何なる困難も学術で克服した事例を論文で扱いましたね','Sakura — any-hard paper','Calm','asuka_teacher'),
    mk('はい、海外哲学書の原著翻訳の研究を論文で扱いました','Yes — Phil-orig paper','Earnest teen','sakura_teen'),
    mk('文豪の生い立ちの伝記研究を論文で扱いましたね','Auth-upb paper','Reflective','asuka_teacher'),
    mk('はい、災害支援を懇願する自治体の声明を論文で扱いました','Yes — Dis-aid-req paper','Earnest','sakura_teen'),
    mk('伝統的相撲の物言いの研究を論文で扱いましたね','Sumo-obj paper','Reflective','asuka_teacher'),
    mk('はい、不妊治療と卵子凍結の倫理研究を論文で扱いました','Yes — Egg-fr paper','Earnest','sakura_teen'),
    mk('終戦時の社会の破局的状況の研究を論文で扱いましたね','Postwar-coll paper','Reflective','asuka_teacher'),
    mk('はい、公道での自動運転実験の倫理を論文で扱いました','Yes — Pub-auto paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10514',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、如何なる症状でも、医療チームで真摯に対応します','Ren — any-sym-med-team-sin','Calm','saito_doctor'),
    mk('蓮さん、医学書の原著を医療チームで原文で読み合わせします','Ren — med-orig-team-read','Calm','saito_doctor'),
    mk('蓮さん、患者様の生い立ちを医療チームで丁寧に伺います','Ren — pati-upb med-team-careful','Calm','saito_doctor'),
    mk('蓮さん、ご家族からの治療懇願に応える事を医療チームで考えます','Ren — fam-treat-req-resp med-team','Calm','saito_doctor'),
    mk('蓮さん、診断への物言い、つまりセカンドオピニオンを医療チームで尊重します','Ren — diag-obj-2nd-op med-team-resp','Calm','saito_doctor'),
    mk('不妊治療の卵子採取を、貴院、安全におこなわれますね、先生','Inf-egg-retr-safe your-hosp, sensei','Reflective','ren_uni'),
    mk('蓮さん、感染拡大の破局的シナリオを医療チームで想定します','Ren — pand-cat-scen med-team','Calm','saito_doctor'),
    mk('蓮さん、公道での救急搬送を医療チームで支援します','Ren — pub-rd-emerg-trans med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_10515',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、如何なる市場変動にも対応できる体制を整えろ','Our co — any-mkt-chg-resp-set','Crisp','hiroshi_boss'),
    mk('はい。経営書の原著を役員に推薦します','Yes — Mgmt-orig-exec-rec','Methodical','kenji_office'),
    mk('当社、創業者の生い立ちを社員研修で語れ','Our co — found-upb-staff-train','Direction','hiroshi_boss'),
    mk('はい。取引先からの納期短縮の懇願に応えます','Yes — Client-deadl-short-req-resp','Update','kenji_office'),
    mk('当社、品質への物言いに迅速に対応しろ','Our co — qual-obj-quick-resp','Direction','hiroshi_boss'),
    mk('はい。バイオ事業の卵子関連製品を慎重に扱います','Yes — Bio-egg-rel-prod-careful','Update','kenji_office'),
    mk('当社、業界の破局シナリオに備えろ','Our co — ind-cat-scen-prep','Direction','hiroshi_boss'),
    mk('はい。社用車の公道走行ルールを遵守します','Yes — Co-veh-pub-rd-rule-obey','Close','kenji_office'),
  ]},
  {id:'conv_10516',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ご自宅でフレッツ光のお話を語って下さったよ、メイちゃん','Aoi — cust-Flets-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、エンタテイメント業界のお仕事だって、メイちゃん','Aoi — cust-ent-ind-work Mei','Reflective','aoi_barista'),
    mk('葵、お客様、映画のラストシーンを語って下さったよ、メイちゃん','Aoi — cust-film-last-scene Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ポッドキャスティング配信をされてるって、メイちゃん','Aoi — cust-podcast-deliv Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ヤンキースの試合を観に行かれたって、メイちゃん','Aoi — cust-Yankees-game Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お子様がソフトボールチームに入られたって、メイちゃん','Aoi — cust-kid-softball Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ホステス文学の本を読んでらしたよ、メイちゃん','Aoi — cust-hostess-lit-book Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お友達とタッグを組んで起業されたって、メイちゃん','Aoi — cust-fri-tag-start Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10517',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがフレッツ光の初期契約をされた','Gran — youth Dad-Flets-init-contr','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、エンタテイメント番組をお楽しみだったわよね、あなた?','Yes — Grandpa-ent-prog-fun, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがある映画のラストシーンに涙された','Gran — youth Dad-film-last-scene-tear','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、最近ポッドキャスティングを聴かれてたわよね、あなた?','Grandpa — recent-podcast-listen, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがヤンキースの中継を観られた','Gran — youth Dad-Yankees-broad','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、地域のソフトボール大会に出られたわよね、あなた?','Grandpa — local-softball-comp, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがホステス物の文学を分析された','Gran — youth Dad-hostess-lit-anal','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お友達とタッグを組んで仕事をされたわよね、あなた?','Grandpa — fri-tag-work, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10518',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが我が家のフレッツ光の契約を見直して下さるそうよ','Sho — Dad-house-Flets-contr-rev','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとエンタテイメント施設に行ったよ','Mei-sis — me Dad-ent-fac','Eager child','sho_child'),
    mk('翔くん、お父さんが映画のラストシーンを優しく解説して下さるわ','Sho — Dad-film-last-scene-kind','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとポッドキャスティング番組を聴いたよ','Mei-sis — me Dad-podcast','Eager child','sho_child'),
    mk('翔くん、お父さんがヤンキースの応援グッズを下さったわ','Sho — Dad-Yankees-merch-gave','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとソフトボールでキャッチボールしたよ','Mei-sis — me Dad-softball-catch','Eager child','sho_child'),
    mk('翔くん、お父さんが「ホステス文学にも社会描写がある」って教えて下さったわ','Sho — Dad-"hostess-lit-soc-depic"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと友達とタッグを組んだ事を話したよ','Mei-sis — me Dad-fri-tag-talk','Eager close','sho_child'),
  ]},
  {id:'conv_10519',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前の家、フレッツ光だったよな','Riku — your-house-Flets-yeah','Curious teen','sakura_teen'),
    mk('お前、エンタテイメント部の文化祭の準備手伝ってたな、桜','You — ent-club-cul-fes-prep Sakura','Curious','riku_teen'),
    mk('リク、お前、映画部でラストシーン論評書いてたな','Riku — film-club-last-scene-rev','Curious','sakura_teen'),
    mk('お前、ポッドキャスティングの番組始めたろ、桜','You — podcast-start? Sakura','Curious','riku_teen'),
    mk('リク、お前のお父さん、ヤンキースの帽子被ってたな','Riku — your-Dad-Yankees-cap','Wry','sakura_teen'),
    mk('お前、ソフトボール部入ったろ、桜','You — softball-club? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会の授業でホステス職の歴史調べてたな','Riku — soc-class-hostess-occ-hist','Curious','sakura_teen'),
    mk('お前、ペアダンスで先輩とタッグ組んでたな、桜','You — pair-dance-sen-tag Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10520',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが我が家のフレッツ光をアップグレードして下さるわ','Sho — Dad-house-Flets-upgr','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとエンタテイメント番組を観たよ','Mom — me Dad-ent-prog-saw','Eager child','sho_child'),
    mk('翔くん、お父さんがアニメ映画のラストシーンに感激されてたわ','Sho — Dad-anime-last-scene-moved','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとポッドキャスティング配信を一緒に聴いたよ','Mom — me Dad-podcast-together','Eager child','sho_child'),
    mk('翔くん、お父さんが昔のヤンキースの試合動画を観てらっしゃるわ','Sho — Dad-old-Yankees-vid','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと公園でソフトボールやったよ','Mom — me Dad-park-softball','Eager child','sho_child'),
    mk('翔くん、お父さんが「ホステス文学にも価値がある」って語って下さったわ','Sho — Dad-"hostess-lit-value"-talk','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと家族でタッグ組む大切さを学んだよ','Mom — me Dad-fam-tag-imp-learn','Eager close','sho_child'),
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

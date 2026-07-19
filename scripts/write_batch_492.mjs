import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_492 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['つたの','見込ま','名づけ','転がっ','くっつい','とどまる','はじまる','かかえ']
const B_T = ['末端','因子','ますれ','買い上げ','係数','番外','不振','とりあげ']
const C_T = ['公司','至上','共和党','政務次官','古来','有事','必至','参院']
const D_T = ['フロリダ','クリントン','信長','ヘンリー','ハンター','つくば','赤坂','ミクロ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09801',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お庭につたのからまる垣根が綺麗ね','Sho — garden-ivy-hedge-pretty','Pleased','yumiko_mom'),
    mk('ママ、お父さんが宿題を見込まれてると思うと頑張れるよ','Mom — Dad-exp-felt-effort','Earnest child','sho_child'),
    mk('翔くん、お父さんがぬいぐるみに名づけて下さったわ','Sho — Dad-stuff-name','Tender','yumiko_mom'),
    mk('ママ、お部屋にボールが転がってるから片付けるね','Mom — room-ball-rolled-clean','Eager child','sho_child'),
    mk('翔くん、お父さんとくっついてお話するの好きね','Sho — Dad-stick-talk-like','Tender','yumiko_mom'),
    mk('ママ、ぼく、玄関にとどまる時は静かにするね','Mom — me entrance-stay-quiet','Earnest child','sho_child'),
    mk('翔くん、お父さんとの会話がはじまるとお家が明るくなるわ','Sho — Dad-talk-start-bright','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんが重い荷物をかかえてらしたから手伝ったよ','Mom — me Dad-heavy-luggage-help','Eager close','sho_child'),
  ]},
  {id:'conv_09802',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お店の外壁につたのからまる演出いいね、メイちゃん','Aoi — store-wall-ivy Mei','Pleased','mei_romantic'),
    mk('葵、リピーターが見込まれるね、メイちゃん','Aoi — repeat-exp Mei','Reflective','aoi_barista'),
    mk('葵、新メニューに名づけるアイデアを募集しようね、メイちゃん','Aoi — new-menu-name-recru Mei','Direction','mei_romantic'),
    mk('葵、お皿の上のミニトマトが転がっちゃったよ、メイちゃん','Aoi — plate-tomato-rolled Mei','Wry','aoi_barista'),
    mk('葵、お客様、お子様にくっついてお話されてたよ、メイちゃん','Aoi — cust-kid-stick-talk Mei','Tender','mei_romantic'),
    mk('葵、長くとどまるお客様には水のお代わりをね、メイちゃん','Aoi — long-stay-cust-water Mei','Direction','aoi_barista'),
    mk('葵、ランチタイムがはじまるよ、メイちゃん','Aoi — lunch-start Mei','Brisk','mei_romantic'),
    mk('葵、お客様、重い荷物をかかえてお越しになったよ、メイちゃん','Aoi — cust-heavy-luggage-came Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09803',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、垣根にはつたのからまる家が多かった','Gran — youth hedge-ivy-many','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お孫様の出世を見込まれてたわよね、あなた?','Yes — Grandpa-grandkid-succ-exp, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが孫を「ちびすけ」と名づけられた','Gran — youth Dad-grandkid-"chibisuke"-name','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、いつもお手玉が転がってたわよね、あなた?','Grandpa — beanbag-rolled, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんに孫がくっついて離れなかった','Gran — youth Dad-grandkid-stick','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、晩年は縁側にとどまる時間が長かったわよね、あなた?','Grandpa — late-veranda-stay, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お祭りがはじまると村中が湧いた','Gran — youth fest-start-vil','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、米俵をかかえて運ばれたわよね、あなた?','Grandpa — rice-bag-carry, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09804',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前の家、壁につたのからまってかっこいいな','Riku — your-home-ivy-cool','Pleased teen','sakura_teen'),
    mk('お前、成績伸びが見込まれてるな、桜','You — grade-imp-exp Sakura','Praising','riku_teen'),
    mk('リク、お前、自転車に名づけてただろ','Riku — bike-name','Wry','sakura_teen'),
    mk('お前、消しゴムが机から転がってきたな、桜','You — eraser-desk-rolled Sakura','Curious','riku_teen'),
    mk('リク、お前、いつも友達にくっついてるな','Riku — always-friend-stick','Wry','sakura_teen'),
    mk('お前、教室にとどまる時は宿題やれよ、桜','You — class-stay-homework Sakura','Direction','riku_teen'),
    mk('リク、テスト期間がはじまるから集中しろよ','Riku — test-start-conc','Direction','sakura_teen'),
    mk('お前、重い辞書をかかえて帰ったな、桜','You — heavy-dict-carry Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_09805',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、フェンスにつたのからまる公園、素敵ね','Sho — fence-ivy-park-nice','Pleased','mei_romantic'),
    mk('メイ姉さん、お父さんがぼくの将来を見込まれてるって嬉しいよ','Mei-sis — Dad-fut-exp-glad','Eager child','sho_child'),
    mk('翔くん、お父さんが新しい鉢植えに名づけて下さるそうよ','Sho — Dad-pot-name','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとボール転がして遊んだよ','Mei-sis — me Dad-ball-roll-play','Eager child','sho_child'),
    mk('翔くん、お父さんに翔くんがくっついてらしたわね','Sho — Dad-Sho-stick','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、公園にとどまる時間が長くなったよ','Mei-sis — me park-stay-long','Eager child','sho_child'),
    mk('翔くん、お父さんとお話がはじまると時間を忘れるわ','Sho — Dad-talk-start-time-forget','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんが重いお米をかかえてお家に持ち帰られたよ','Mei-sis — me Dad-heavy-rice-carry-home','Eager close','sho_child'),
  ]},
  {id:'conv_09806',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、末端の販売店にも気を配れ','Our co — end-retail-care','Crisp','hiroshi_boss'),
    mk('はい。成功要因の因子分析を進めます','Yes — Succ-factor-anal','Methodical','kenji_office'),
    mk('当社、提案ますれば、丁寧に検討する','Our co — prop-ifany-careful','Direction','hiroshi_boss'),
    mk('はい。お客様の買い上げ単価を分析します','Yes — Cust-buy-unit-anal','Update','kenji_office'),
    mk('利益の係数を改善しろ','Profit-coef-impr','Direction','hiroshi_boss'),
    mk('はい。番外の案件にも対応します','Yes — Extra-case-resp','Update','kenji_office'),
    mk('当社、不振店舗の支援策を打て','Our co — slump-store-supp','Direction','hiroshi_boss'),
    mk('はい。メディアにとりあげられる工夫を考えます','Yes — Media-feature-impr','Close','kenji_office'),
  ]},
  {id:'conv_09807',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('末端の声を経営に届けましょう','End-voice-mgmt-deliv','Brisk','yuki_office'),
    mk('はい。成功因子の整理表を作ります','Yes — Succ-factor-tbl','Cooperative','kenji_office'),
    mk('ご質問ますれば、お受け致します','Q-ifany-take','Direction','yuki_office'),
    mk('はい。法人買い上げのプランを設計します','Yes — Corp-buy-plan-design','Update','kenji_office'),
    mk('成長係数を上方修正しましょう','Grow-coef-up','Direction','yuki_office'),
    mk('はい。番外編のキャンペーンも企画します','Yes — Extra-camp-plan','Update','kenji_office'),
    mk('不振エリアに集中対策をしましょう','Slump-area-conc-counter','Direction','yuki_office'),
    mk('はい。雑誌にとりあげていただけるよう発信します','Yes — Mag-feature-comm','Close','kenji_office'),
  ]},
  {id:'conv_09808',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究は末端の事象も大事だ','Ren — research-end-imp','Mentor','hiroshi_boss'),
    mk('はい。原因因子の整理を進めます','Yes — Cause-factor-org','Earnest','ren_uni'),
    mk('蓮、相談したい事ますれば、いつでも来い','Ren — cons-ifany-anytime','Mentor','hiroshi_boss'),
    mk('はい。文献の買い上げリストを作成します','Yes — Lit-buy-list','Earnest','ren_uni'),
    mk('蓮、相関係数を慎重に解釈しろ','Ren — corr-coef-careful','Direction','hiroshi_boss'),
    mk('はい。番外論文も学びの素材にします','Yes — Extra-paper-learn','Polite','ren_uni'),
    mk('蓮、不振研究室の事例も学べ','Ren — slump-lab-case-learn','Direction','hiroshi_boss'),
    mk('はい。学会誌にとりあげられる論文を目指します','Yes — Conf-mag-feature-aim','Earnest close','ren_uni'),
  ]},
  {id:'conv_09809',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、末端の犯罪組織にも目を配られますね','Police end-crime-attent','Cooperative','kenji_office'),
    mk('警察、犯罪因子の分析もされますね','Police crime-factor-anal','Cooperative','kenji_office'),
    mk('警察、ご相談ますれば、丁寧に対応されますね','Police cons-ifany-pol','Cooperative','kenji_office'),
    mk('警察、押収品の買い上げ価値も算定されますね','Police seiz-buy-val-est','Cooperative','kenji_office'),
    mk('警察、犯罪発生係数を地域別に出されますね','Police crime-coef-area','Cooperative','kenji_office'),
    mk('警察、番外の特別捜査もされますね','Police extra-spec-inv','Cooperative','kenji_office'),
    mk('警察、地域防犯不振対策を進められますね','Police local-prev-slump-counter','Cooperative','kenji_office'),
    mk('警察、報道にとりあげられた事例も振り返られますね','Police media-feature-review','Close','kenji_office'),
  ]},
  {id:'conv_09810',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、末端の販売員にも声をかけられた','Dad — founding end-staff-greet','Sage','hiroshi_elder'),
    mk('はい。お父さんは成功因子を見極められた','Yes — Dad succ-factor-judg','Commitment','hiroshi_boss'),
    mk('お父さん、社員に「相談ますれば」と仰った','Dad — staff-"cons-ifany"-said','Wistful','hiroshi_elder'),
    mk('はい。お父さんは大量買い上げの契約をまとめられた','Yes — Dad bulk-buy-deal','Reflective','hiroshi_boss'),
    mk('お父さん、収益係数を毎期確認された','Dad — rev-coef-per-period','Wistful','hiroshi_elder'),
    mk('はい。お父さんは番外の慈善活動もされた','Yes — Dad extra-char-act','Reflective','hiroshi_boss'),
    mk('お父さん、不振店舗の建て直しに尽力された','Dad — slump-store-rebuild-effort','Wistful','hiroshi_elder'),
    mk('はい。お父さんは度々経済誌にとりあげられた','Yes — Dad econ-mag-feature-many','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09811',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、中国系企業の公司形態研究を論文で扱いましたね','Ren — Chinese-corp-form paper','Calm','asuka_teacher'),
    mk('はい、近代国家の至上命令研究を論文で扱いました','Yes — Mod-state-imp paper','Earnest','ren_uni'),
    mk('蓮さん、米国共和党の地域政策を論文で扱いましたね','Ren — US-Repub-local paper','Reflective','asuka_teacher'),
    mk('はい、戦後の政務次官制度の研究を論文で扱いました','Yes — Postwar-vice-min paper','Earnest','ren_uni'),
    mk('古来の伝統行事の研究を論文で扱いましたね','Anc-trad paper','Engaged','asuka_teacher'),
    mk('はい、有事法制の議論史を論文で扱いました','Yes — Emerg-law-disc paper','Earnest','ren_uni'),
    mk('蓮さん、選挙制度改革の必至性を論文で扱いましたね','Ren — elect-ref-inev paper','Reflective','asuka_teacher'),
    mk('はい、参院選の地域別動向を論文で扱いました','Yes — Upper-elect-local paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09812',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、中国公司との取引絡みの詐欺事件を、警察、扱われますね','Case Chinese-corp-fraud police-handle','Reflective','ren_uni'),
    mk('警察、市民の安全を至上の任務とされますね','Police citi-safe-imp-task','Cooperative','takeda_officer'),
    mk('本件、米国共和党系団体への威力業務妨害を、警察、扱われますね','Case US-Repub-grp-obstr police-handle','Reflective','ren_uni'),
    mk('警察、元政務次官の不正捜査もされますね','Police ex-vice-min-corrup','Procedural','takeda_officer'),
    mk('本件、古来の文化財盗難を、警察、扱われますね','Case anc-cult-theft police-handle','Reflective','ren_uni'),
    mk('警察、有事の備え訓練も継続されますね','Police emerg-prep-cont','Procedural','takeda_officer'),
    mk('本件、対応が必至の重大事案ですね','Case-resp-inev','Reflective','ren_uni'),
    mk('警察、参院議員警備も担当されますね','Police upper-Diet-guard','Close','takeda_officer'),
  ]},
  {id:'conv_09813',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、中国系企業の公司形態を論文で扱いましたね','Sakura — Chinese-corp paper','Calm','asuka_teacher'),
    mk('はい、近代国家の至上命令を論文で扱いました','Yes — Mod-state-imp paper','Earnest teen','sakura_teen'),
    mk('米国共和党の地域政策を論文で扱いましたね','US-Repub-local paper','Reflective','asuka_teacher'),
    mk('はい、戦後の政務次官制度を論文で扱いました','Yes — Postwar-vice-min paper','Earnest','sakura_teen'),
    mk('古来の伝統行事を論文で扱いましたね','Anc-trad paper','Engaged','asuka_teacher'),
    mk('はい、有事法制の議論史を論文で扱いました','Yes — Emerg-law paper','Earnest','sakura_teen'),
    mk('選挙制度改革の必至性を論文で扱いましたね','Elect-inev paper','Reflective','asuka_teacher'),
    mk('はい、参院選の地域別動向を論文で扱いました','Yes — Upper-elect paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09814',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、中国公司との医薬品取引を医療チームで慎重に扱います','Ren — Chinese-corp-pharm med-team careful','Calm','saito_doctor'),
    mk('はい、患者の命を至上の使命と医療チームが心得ます','Yes — Pati-life-imp-miss med-team','Patient','saito_doctor'),
    mk('米国共和党の医療政策を、貴院、研究されてますね、先生','US-Repub-health your-hosp research, sensei','Reflective','ren_uni'),
    mk('はい、元政務次官の方の医療相談も医療チームで受けます','Yes — Ex-vice-min-cons med-team','Patient','saito_doctor'),
    mk('古来の薬草療法を、貴院、参考にされてますね、先生','Anc-herb-ther your-hosp ref, sensei','Reflective','ren_uni'),
    mk('はい、有事の医療体制を医療チームで訓練します','Yes — Emerg-med med-team train','Patient','saito_doctor'),
    mk('治療開始は必至の状況ですね、先生','Treat-start-inev, sensei','Reflective','ren_uni'),
    mk('はい、参院議員の方の人間ドックも医療チームで対応します','Yes — Upper-Diet-checkup med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_09815',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、中国公司との合弁を検討しろ','Our co — Chinese-corp-JV-cons','Crisp','hiroshi_boss'),
    mk('はい。お客様第一を至上の理念とします','Yes — Cust-first-imp-philos','Methodical','kenji_office'),
    mk('当社、米国共和党系の業界団体とも交流しろ','Our co — US-Repub-industry-exch','Direction','hiroshi_boss'),
    mk('はい。元政務次官をアドバイザーに招きます','Yes — Ex-vice-min-advisor','Update','kenji_office'),
    mk('当社、古来の日本文化を商品に取り入れろ','Our co — anc-JP-cult-prod','Direction','hiroshi_boss'),
    mk('はい。有事の事業継続計画を整備します','Yes — Emerg-BCP-prep','Update','kenji_office'),
    mk('当社、デジタル化は必至だ','Our co — dig-inev','Direction','hiroshi_boss'),
    mk('はい。参院選挙に向けた対外発信も準備します','Yes — Upper-elect-PR-prep','Close','kenji_office'),
  ]},
  {id:'conv_09816',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、フロリダにご親族がいらっしゃるって、メイちゃん','Aoi — cust-Florida-rel Mei','Reflective','mei_romantic'),
    mk('葵、お客様、クリントン元大統領の本を読んでらしたよ、メイちゃん','Aoi — cust-Clinton-book Mei','Reflective','aoi_barista'),
    mk('葵、お客様、織田信長の伝記がご趣味だって、メイちゃん','Aoi — cust-Nobunaga-bio Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ヘンリー王子のドキュメンタリーを観てらしたよ、メイちゃん','Aoi — cust-Henry-doc Mei','Reflective','aoi_barista'),
    mk('葵、お客様、狩猟をされるハンターでいらっしゃるって、メイちゃん','Aoi — cust-hunter Mei','Reflective','mei_romantic'),
    mk('葵、お客様、つくばで研究員をされてるって、メイちゃん','Aoi — cust-Tsukuba-research Mei','Reflective','aoi_barista'),
    mk('葵、お客様、赤坂の料亭で会食されたって、メイちゃん','Aoi — cust-Akasaka-rest Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ミクロの世界の研究をされてるって、メイちゃん','Aoi — cust-micro-world Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09817',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがフロリダに駐在された','Gran — youth Dad-Florida-station','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、クリントン政権時代を懐かしまれたわよね、あなた?','Yes — Grandpa-Clinton-era-miss, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが織田信長の本をご愛読された','Gran — youth Dad-Nobunaga-read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ヘンリー王子のニュースをご覧になってたわよね、あなた?','Grandpa — Henry-news-watch, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがハンター仲間と山に入られた','Gran — youth Dad-hunter-mt','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、つくば万博に行かれたわよね、あなた?','Grandpa — Tsukuba-expo, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが赤坂のクラブで商談された','Gran — youth Dad-Akasaka-club-biz','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ミクロの世界の本がお好きだったわよね、あなた?','Grandpa — micro-book-fav, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09818',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがフロリダの絵本を読んで下さるそうよ','Sho — Dad-Florida-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとクリントン元大統領の本見たよ','Mei-sis — me Dad-Clinton-book','Eager child','sho_child'),
    mk('翔くん、お父さんが織田信長の絵本を読んで下さるそうよ','Sho — Dad-Nobunaga-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとヘンリー王子のお話聞いたよ','Mei-sis — me Dad-Henry-told','Eager child','sho_child'),
    mk('翔くん、お父さんがハンターのドキュメンタリー観てらしたわ','Sho — Dad-hunter-doc-watch','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとつくば博物館行ったよ','Mei-sis — me Dad-Tsukuba-mus','Eager child','sho_child'),
    mk('翔くん、お父さんが赤坂の料亭で会食されるそうよ','Sho — Dad-Akasaka-rest','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとミクロの絵本見たよ','Mei-sis — me Dad-micro-pic','Eager close','sho_child'),
  ]},
  {id:'conv_09819',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、フロリダのテーマパーク憧れてたな','Riku — Florida-park-admire','Curious teen','sakura_teen'),
    mk('お前、社会でクリントン政権習ったろ?桜','You — soc-Clinton? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会で織田信長習ったろ','Riku — soc-Nobunaga?','Curious','sakura_teen'),
    mk('お前、ヘンリー王子のニュースチェックしてたな、桜','You — Henry-news-check Sakura','Curious','riku_teen'),
    mk('リク、お前、ハンター×ハンター読んでたな','Riku — Hunter-Hunter-read','Wry','sakura_teen'),
    mk('お前、つくばの研究機関見学行ったろ?桜','You — Tsukuba-research-tour? Sakura','Curious','riku_teen'),
    mk('リク、お前、赤坂のスタジオライブ行ったろ','Riku — Akasaka-studio?','Curious','sakura_teen'),
    mk('お前、理科でミクロの世界習ったろ?桜','You — sci-micro? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_09820',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがフロリダの旅行記を読んで下さるそうよ','Sho — Dad-Florida-trip-read','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとクリントン元大統領のドキュメンタリー観たよ','Mom — me Dad-Clinton-doc','Eager child','sho_child'),
    mk('翔くん、お父さんが織田信長の大河ドラマ観てらしたわ','Sho — Dad-Nobunaga-drama-watch','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとヘンリー王子の絵本見たよ','Mom — me Dad-Henry-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがハンターの友達と山に行かれたわ','Sho — Dad-hunter-fri-mt','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとつくば学園都市行ったよ','Mom — me Dad-Tsukuba-edu','Eager child','sho_child'),
    mk('翔くん、お父さんが赤坂で重要な打ち合わせをされるそうよ','Sho — Dad-Akasaka-imp-mtg','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとミクロの世界の図鑑見たよ','Mom — me Dad-micro-pic-book','Eager close','sho_child'),
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

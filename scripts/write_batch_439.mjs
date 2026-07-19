import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_439 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['キッカケ','曇っ','わるい','じつに','ていねい','いまどき','ことさら','べつに']
const B_T = ['序文','ステートメント','コーティング','受領','取締り','移管','とりまとめ','仲間入り']
const C_T = ['高圧','無秩序','慈悲','漂流','召喚','同化','戒め','惨事']
const D_T = ['産婦人科','寝台','かばん','軍用','牡丹','キャラメル','弾丸','アクリル']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08741',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖父ちゃんとの思い出が、お絵描きを始めるキッカケになったわね','Sho — Grandpa-mem drawing-start-kikkake','Reflective','yumiko_mom'),
    mk('ママ、今日は空が曇ってるからお出かけは難しいかな','Mom — today-sky-cloudy-out-hard','Reflective child','sho_child'),
    mk('翔くん、人にわるい事を言ってしまったら謝りましょうね','Sho — bad-say-apologize','Direction','yumiko_mom'),
    mk('ママ、お祖父ちゃんのお話、じつに面白かったよ','Mom — Grandpa-story-really-fun','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんはていねいに字を書いてらっしゃるわ','Sho — Grandpa-careful-write','Reflective','yumiko_mom'),
    mk('ママ、ぼく、いまどきの遊びより、外で遊ぶのが好きだよ','Mom — me modern-play-vs-outside-like','Reflective child','sho_child'),
    mk('翔くん、お父さんはことさら静かにお仕事に集中なさるのよ','Sho — Dad-especially-quiet-work-focus','Reflective','yumiko_mom'),
    mk('ママ、ぼく、べつに泣いてないよ','Mom — me not-particularly-cry','Wry close','sho_child'),
  ]},
  {id:'conv_08742',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お店を始めたキッカケって、お友達の一言だったよね、メイちゃん','Aoi — store-start-kikkake-friend-word Mei','Reflective','mei_romantic'),
    mk('葵、空が曇ってきたわね、雨対策しましょう、メイちゃん','Aoi — sky-cloudy-rain-prep Mei','Direction','aoi_barista'),
    mk('葵、お客様にわるい印象を与えないようにね、メイちゃん','Aoi — cust-bad-imp-not-give Mei','Direction','mei_romantic'),
    mk('葵、新メニュー、じつに好評だったね、メイちゃん','Aoi — new-menu-really-pop Mei','Pleased','aoi_barista'),
    mk('葵、お客様への対応はていねいにしましょうね、メイちゃん','Aoi — cust-resp-careful Mei','Direction','mei_romantic'),
    mk('葵、いまどきはキャッシュレス決済が増えてるね、メイちゃん','Aoi — modern-cashless-up Mei','Reflective','aoi_barista'),
    mk('葵、ことさら丁寧にお見送りしてるお客様、覚えてる?メイちゃん','Aoi — especially-careful-saw-off-cust-remember? Mei','Curious','mei_romantic'),
    mk('葵、新メニューが売れなくても、べつに気にしないで、メイちゃん','Aoi — new-menu-not-sold not-care Mei','Caring close','aoi_barista'),
  ]},
  {id:'conv_08743',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんとの出会いがキッカケで仕事を始めたぞ','Gran — youth Dad-meet-kikkake-work-start','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、空が曇った日には書道をなさったわよね、あなた?','Yes — Grandpa-cloudy-day-calligraphy, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはわるい話には乗らない方だったぞ','Gran — youth Dad-bad-talk-not-join','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、じつに勤勉でいらしたわよね、あなた?','Grandpa — youth-really-diligent, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんはていねいに毎日の日記を付けていらしたぞ','Gran — Dad-careful-daily-diary','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、いまどきのお話にも興味をお持ちだったわよね、あなた?','Grandpa — modern-talk-interest, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんはお孫様にことさら優しかったぞ','Gran — youth Dad-grandkid-especially-kind','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、不平はべつに仰らない方だったわよね、あなた?','Grandpa — comp-not-particularly-say, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08744',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、勉強始めたキッカケって何だ?','Riku — study-kikkake-what?','Curious teen','sakura_teen'),
    mk('お前、空が曇ってきたぞ、傘持ってるか、桜','You — sky-cloudy-umbrella? Sakura','Direction','riku_teen'),
    mk('リク、お前、わるい奴と関わるなよ','Riku — bad-friend-not-mix','Direction','sakura_teen'),
    mk('お前、じつに賢くなったな、桜','You — really-smart Sakura','Praising','riku_teen'),
    mk('リク、お前、ていねいに答案書けよ','Riku — careful-answer-write','Direction','sakura_teen'),
    mk('お前、いまどきの曲ばっか聞いてんな、桜','You — modern-song-only Sakura','Wry','riku_teen'),
    mk('リク、お前、ことさら大声出すなよ','Riku — especially-loud-don\'t','Direction','sakura_teen'),
    mk('お前、テストの点、べつに気にすんなよ、桜','You — test-score not-particularly-care Sakura','Caring close','riku_teen'),
  ]},
  {id:'conv_08745',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんがお絵描きを始めたキッカケ、お祖父ちゃんなのよ','Sho — Mei-sis-drawing-kikkake-Grandpa','Reflective','mei_romantic'),
    mk('メイ姉さん、空が曇ってきたから帰ろう?','Mei-sis — sky-cloudy-back?','Reflective child','sho_child'),
    mk('翔くん、わるい言葉は使わないでね','Sho — bad-word-don\'t','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、お絵描き、じつに楽しいよ','Mei-sis — me drawing-really-fun','Eager child','sho_child'),
    mk('翔くん、メイ姉さんはていねいに絵を描くのよ','Sho — Mei-sis-careful-draw','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、いまどきはタブレットでも絵描けるって','Mei-sis — me modern-tablet-draw','Reflective child','sho_child'),
    mk('翔くん、メイ姉さんがことさら大切にしてる絵を見せてあげる','Sho — Mei-sis-especially-cherished-show','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、べつに泣いてないよ','Mei-sis — me not-particularly-cry','Wry close','sho_child'),
  ]},
  {id:'conv_08746',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、年次報告書の序文は私が書く','Our co — annual-report-pref-self-write','Crisp','hiroshi_boss'),
    mk('はい。公式ステートメントの草案を準備しました','Yes — Official-statement-draft prep','Methodical','kenji_office'),
    mk('当社の新製品、コーティング技術を改良しろ','Our co — new-prod-coating-tech-improve','Direction','hiroshi_boss'),
    mk('はい。お得意様からの受領書を整理しました','Yes — VIP-receipt-org','Update','kenji_office'),
    mk('当社、コンプライアンス取締りを強化しろ','Our co — compliance-crackdown-strengthen','Direction','hiroshi_boss'),
    mk('はい。プロジェクトを子会社に移管する案を検討中です','Yes — Proj-sub-trans-consider','Update','kenji_office'),
    mk('部門意見のとりまとめを早急にしろ','Section-view-coord-urgent','Direction','hiroshi_boss'),
    mk('はい。業界団体への仲間入りを実現します','Yes — Industry-org-join real','Close','kenji_office'),
  ]},
  {id:'conv_08747',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('パンフレットの序文を分かりやすく書きましょう','Pamphlet-pref-clear-write','Brisk','yuki_office'),
    mk('はい。お取引先へのステートメントを発信しました','Yes — Partner-statement-issue','Cooperative','kenji_office'),
    mk('新製品の保護コーティングを試験しましょう','New-prod-prot-coating-test','Direction','yuki_office'),
    mk('はい。注文書の受領確認をいただきました','Yes — Order-receipt-confirm received','Update','kenji_office'),
    mk('社内コンプライアンス取締りを継続しましょう','Co-compliance-crackdown-cont','Direction','yuki_office'),
    mk('はい。本社機能の一部移管を検討中です','Yes — HQ-func-trans-consider','Update','kenji_office'),
    mk('社員アンケートのとりまとめを早めましょう','Staff-survey-coord-hasten','Direction','yuki_office'),
    mk('はい。新業界協会への仲間入りを果たしました','Yes — New-industry-assoc-join done','Close','kenji_office'),
  ]},
  {id:'conv_08748',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文の序文に研究背景を明示しろ','Ren — paper-pref-research-bg-clarify','Mentor','hiroshi_boss'),
    mk('はい。指導教授の公式ステートメントを参考にします','Yes — Adv-prof-official-statement-ref','Earnest','ren_uni'),
    mk('蓮、実験試料のコーティング条件を確認しろ','Ren — exp-sample-coating-cond-check','Direction','hiroshi_boss'),
    mk('はい。研究費の受領証を提出いたしました','Yes — Research-fund-receipt-submitted','Polite','ren_uni'),
    mk('蓮、研究室の不正取締りを厳格にしろ','Ren — lab-fraud-crackdown-strict','Direction','hiroshi_boss'),
    mk('はい。プロジェクトの新担当者への移管を進めます','Yes — Proj-new-handler-trans-progress','Earnest','ren_uni'),
    mk('蓮、研究データのとりまとめを急げ','Ren — research-data-coord-hasten','Direction','hiroshi_boss'),
    mk('はい。学会への仲間入りを果たすべく頑張ります','Yes — Conf-join-try','Earnest close','ren_uni'),
  ]},
  {id:'conv_08749',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、新しい規則手帳の序文を読まれましたか','Police new-rule-book-pref-read?','Calm','takeda_officer'),
    mk('はい。警察、公式ステートメントを発信されたんですね','Yes — Police official-statement-issued','Cooperative','kenji_office'),
    mk('警察、武器のコーティング技術を研究します','Police weapon-coating-tech-research','Procedural','takeda_officer'),
    mk('はい。警察、被害届の受領を確認いただきました','Yes — Police damage-rep-receipt-confirm','Cooperative','kenji_office'),
    mk('警察、年末年始の犯罪取締りを強化します','Police year-end-crime-crackdown-strengthen','Procedural','takeda_officer'),
    mk('はい。警察、捜査資料の移管手続が必要ですね','Yes — Police inv-doc-trans-proc-need','Cooperative','kenji_office'),
    mk('警察、市民意見のとりまとめを地域会議でなさいますね','Police citizen-view-coord-local-meet','Procedural','takeda_officer'),
    mk('はい。警察、国際警察組織への仲間入りを果たされましたね','Yes — Police int-police-org-join','Close','kenji_office'),
  ]},
  {id:'conv_08750',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、社史の序文をご自身で書かれたぞ','Dad — co-hist-pref-self-write','Sage','hiroshi_elder'),
    mk('はい。お父さんは公式ステートメントを大事にされた','Yes — Dad official-statement-cherish','Commitment','hiroshi_boss'),
    mk('お父さん、当社の独自コーティング技術を確立されたぞ','Dad — our-co-coating-tech-est','Wistful','hiroshi_elder'),
    mk('はい。お父さんはお得意様の受領印を一つ一つ確認された','Yes — Dad VIP-receipt-stamp-each-check','Reflective','hiroshi_boss'),
    mk('お父さん、社内不正の取締りを厳格にされたぞ','Dad — co-fraud-crackdown-strict','Wistful','hiroshi_elder'),
    mk('はい。お父さんは事業移管を巧みに行われた','Yes — Dad biz-trans-skillful','Reflective','hiroshi_boss'),
    mk('お父さん、社員意見のとりまとめを大事にされたぞ','Dad — staff-view-coord-cherish','Wistful','hiroshi_elder'),
    mk('はい。お父さんは業界トップへの仲間入りを果たされた','Yes — Dad industry-top-join-done','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08751',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、高圧政策下の市民生活を論文で扱いましたね','Ren — high-press-pol-citizen-life paper','Calm','asuka_teacher'),
    mk('はい、無秩序状態下の社会復興を論文で扱いました','Yes — Chaos-soc-recov paper','Earnest','ren_uni'),
    mk('蓮さん、近代の慈悲を巡る宗教思想を論文で扱いましたね','Ren — mod-mercy-relig-thought paper','Reflective','asuka_teacher'),
    mk('はい、難民船の漂流事案を論文で扱いました','Yes — Ref-ship-drift-case paper','Earnest','ren_uni'),
    mk('国会の証人召喚史を論文で扱いましたね','Diet-witness-summon-hist paper','Engaged','asuka_teacher'),
    mk('はい、少数民族の同化政策を論文で扱いました','Yes — Minority-assim-pol paper','Earnest','ren_uni'),
    mk('蓮さん、戦時下の戒めの言説を論文で扱いましたね','Ren — wartime-admon-disc paper','Reflective','asuka_teacher'),
    mk('はい、近代の海上惨事の研究を論文で扱いました','Yes — Mod-sea-disaster paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08752',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、被疑者への高圧的な取り調べを警察、避けてらっしゃいますね','Case suspect-high-press-int-avoid','Reflective','ren_uni'),
    mk('警察、混乱で無秩序になりがちな現場を整理します','Police chaos-no-order-on-site-org','Procedural','takeda_officer'),
    mk('本件、警察、慈悲の余地を残してご対応ですね','Case police-mercy-room-resp','Reflective','ren_uni'),
    mk('警察、海上漂流者の救助を担当します','Police sea-drift-rescue','Procedural','takeda_officer'),
    mk('本件、容疑者の召喚状を警察、発行されましたね','Case suspect-summons police-issued','Reflective','ren_uni'),
    mk('警察、地域社会との同化が進む外国人にも対応します','Police local-assim-foreigner-resp','Procedural','takeda_officer'),
    mk('本件、警察、若い世代への戒めの言葉を発信されてますね','Case police-young-gen-admon-issue','Reflective','ren_uni'),
    mk('警察、大惨事に備えた訓練を継続しております','Police mass-disaster-drill-cont','Close','takeda_officer'),
  ]},
  {id:'conv_08753',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、高圧政策下の市民生活を論文で扱いましたね','Sakura — high-press-pol paper','Calm','asuka_teacher'),
    mk('はい、無秩序状態下の社会復興を論文で扱いました','Yes — Chaos-recov paper','Earnest teen','sakura_teen'),
    mk('近代の慈悲を巡る宗教思想を論文で扱いましたね','Mod-mercy paper','Reflective','asuka_teacher'),
    mk('はい、難民船の漂流事案を論文で扱いました','Yes — Ref-drift paper','Earnest','sakura_teen'),
    mk('国会の証人召喚史を論文で扱いましたね','Diet-summon paper','Engaged','asuka_teacher'),
    mk('はい、少数民族の同化政策を論文で扱いました','Yes — Min-assim paper','Earnest','sakura_teen'),
    mk('戦時下の戒めの言説を論文で扱いましたね','War-admon paper','Reflective','asuka_teacher'),
    mk('はい、近代の海上惨事を論文で扱いました','Yes — Sea-disaster paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08754',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、高血圧症は高圧的な口調で説明しないよう医療チームで気を付けます','Ren — hyperten-high-press-tone-avoid med-team','Calm','saito_doctor'),
    mk('はい、無秩序な医療体制を医療チームで整備しました','Yes — Chaotic-med-system med-team prep','Patient','saito_doctor'),
    mk('医療の慈悲の精神を、貴院、大事にされてますね、先生','Med-mercy-spirit your-hosp cherish, sensei','Reflective','ren_uni'),
    mk('はい、漂流者救助時の医療体制を医療チームで整えます','Yes — Drift-rescue-med-sys med-team prep','Patient','saito_doctor'),
    mk('患者さんの召喚状対応を、貴院、なさったそうですね、先生','Patient-summons-resp your-hosp do, sensei','Curious','ren_uni'),
    mk('はい、外来文化との同化過程の影響を医療チームで研究します','Yes — Foreign-culture-assim med-team research','Patient','saito_doctor'),
    mk('医療事故後の戒めの言葉を、貴院、発信されてますね、先生','Med-acc-admon your-hosp issue, sensei','Reflective','ren_uni'),
    mk('はい、大惨事時の医療対応を医療チームで備えております','Yes — Mass-disaster-med-resp med-team prep','Patient close','saito_doctor'),
  ]},
  {id:'conv_08755',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、社員に高圧的な指導は絶対にするな','Our co — staff-high-press-strict-no','Crisp','hiroshi_boss'),
    mk('はい。市場の無秩序状況にも備えております','Yes — Market-no-order-prep','Methodical','kenji_office'),
    mk('当社、お得意様への慈悲の心を忘れるな','Our co — VIP-mercy-not-forget','Direction','hiroshi_boss'),
    mk('はい。海外プロジェクトの漂流を防ぎます','Yes — Overseas-proj-drift-prev','Update','kenji_office'),
    mk('当社、関係者を緊急で召喚しろ','Our co — rel-person-emerg-summon','Direction','hiroshi_boss'),
    mk('はい。買収先との同化過程を慎重に進めます','Yes — Acq-assim-careful','Update','kenji_office'),
    mk('当社、過去の失敗を戒めとして次に活かせ','Our co — past-fail-admon-next','Direction','hiroshi_boss'),
    mk('はい。大惨事に備えた事業継続計画を整備しております','Yes — Mass-disaster-BCP prep','Close','kenji_office'),
  ]},
  {id:'conv_08756',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、産婦人科のお仕事なんだって、メイちゃん','Aoi — cust ob-gyn-work Mei','Reflective','mei_romantic'),
    mk('葵、お客様、寝台特急で旅行されたって、メイちゃん','Aoi — cust sleeper-express-trip Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お洒落なかばんを持ってらしたよ、メイちゃん','Aoi — cust-fancy-bag Mei','Praising','mei_romantic'),
    mk('葵、お客様、退役軍人で軍用品の話されてたよ、メイちゃん','Aoi — cust-veteran-mil-goods-told Mei','Reflective','aoi_barista'),
    mk('葵、季節限定で牡丹の花を飾りましょう、メイちゃん','Aoi — season-peony-decorate Mei','Direction','mei_romantic'),
    mk('葵、新メニュー、キャラメル味のラテにしましょう、メイちゃん','Aoi — new-menu-caramel-latte Mei','Animated','aoi_barista'),
    mk('葵、お客様、弾丸ツアーで日本中を回ってらっしゃるって、メイちゃん','Aoi — cust-bullet-tour-Japan-tour Mei','Reflective','mei_romantic'),
    mk('葵、お店の看板、アクリル板で作り直しましょう、メイちゃん','Aoi — store-sign-acrylic-redo Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_08757',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが産婦人科に立ち会ってくれたぞ','Gran — youth Dad ob-gyn-with','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、寝台列車で旅をされたわよね、あなた?','Yes — Grandpa-sleeper-train-trip, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが大事なかばんを下さったぞ','Gran — youth Dad-precious-bag-gave','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、戦後しばらく軍用品を引き取ってらしたわよね、あなた?','Grandpa — postwar-mil-goods-took, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがお庭に牡丹を植えられたぞ','Gran — youth Dad-garden-peony-planted','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お土産にキャラメルを買ってきて下さったわよね、あなた?','Grandpa — souv-caramel-bought, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが旅で弾丸トラベルをされたぞ','Gran — youth Dad-trip-bullet-travel','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お部屋の窓をアクリル板で補強されてたわよね、あなた?','Grandpa — room-window-acrylic-reinforce, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08758',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんのご友人が、産婦人科でお仕事してるそうよ','Sho — Mei-sis-friend-ob-gyn-work','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと寝台列車に乗りたい','Mei-sis — me Dad-sleeper-train-want','Eager child','sho_child'),
    mk('翔くん、お祖母ちゃんがかわいいかばんをくれたわね','Sho — Grandma-cute-bag-gave','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、博物館で軍用ヘルメット見たよ','Mei-sis — me museum-mil-helmet-saw','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんのお庭に牡丹がきれいに咲いてるわ','Sho — Grandpa-garden-peony-bloom','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんからキャラメルもらったよ','Mei-sis — me Grandpa-caramel-got','Eager child','sho_child'),
    mk('翔くん、お父さんが弾丸列車のお話してくれたわよ','Sho — Dad-bullet-train-told','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、アクリル絵の具でお絵描きしたよ','Mei-sis — me acrylic-paint-drew','Proud close','sho_child'),
  ]},
  {id:'conv_08759',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前のお母さん、産婦人科の看護師なんだろ?','Riku — your-Mom ob-gyn-nurse?','Curious teen','sakura_teen'),
    mk('お前、修学旅行で寝台列車乗ったろ?桜','You — school-trip-sleeper? Sakura','Curious','riku_teen'),
    mk('リク、お前、新しいかばん買ったな','Riku — new-bag-bought','Praising','sakura_teen'),
    mk('お前、ミリタリーショップで軍用ジャケット見てたろ?桜','You — mil-shop-mil-jacket-saw? Sakura','Curious','riku_teen'),
    mk('リク、お前、社会で牡丹の花の俳句やったろ?','Riku — soc-peony-haiku?','Curious','sakura_teen'),
    mk('お前、キャラメルポップコーン好きだろ?桜','You — caramel-popcorn-like? Sakura','Curious','riku_teen'),
    mk('リク、お前、家族で弾丸ツアー行ったろ?','Riku — fam-bullet-tour?','Curious','sakura_teen'),
    mk('お前、図工でアクリル絵の具使ったろ?桜','You — craft-acrylic-paint? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08760',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、ママは翔くんを産婦人科で産んだのよ','Sho — Mom-Sho-ob-gyn-born','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと寝台列車に乗ってみたい','Mom — me Dad-sleeper-want','Eager child','sho_child'),
    mk('翔くん、お祖母ちゃんがかわいいかばんをプレゼントしてくれたわね','Sho — Grandma-cute-bag-gift','Reflective','yumiko_mom'),
    mk('ママ、お祖父ちゃんが古い軍用ヘルメットを持っていらしたよ','Mom — Grandpa-old-mil-helmet-have','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんのお庭の牡丹、満開ね','Sho — Grandpa-garden-peony-bloom','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんからキャラメルもらって嬉しかった','Mom — me Grandpa-caramel-glad','Eager child','sho_child'),
    mk('翔くん、お父さんが弾丸トラベルで出張なさるのよ','Sho — Dad-bullet-trip-biz','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとアクリル絵の具買いに行きたい','Mom — me Dad-acrylic-paint-buy-want','Eager close','sho_child'),
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

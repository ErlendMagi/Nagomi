import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_503 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['感傷','従順','習性','一服','四角い','極まりない','輝か','育む']
const B_T = ['開運','バレル','得票','ウエート','態様','勝率','内務省','文教']
const C_T = ['高貴','光源','放電','腹部','劣悪','乳房','置換','有人']
const D_T = ['芥川','ビルマ','ベネズエラ','茅ヶ崎','ナイロビ','鈴鹿','ホノルル','テレビ東京']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10021',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが古い写真を見て感傷に浸ってらしたわ','Sho — Dad-old-photo-sent','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに従順な子になりたいよ','Mom — me Dad-obed-kid-want','Earnest child','sho_child'),
    mk('翔くん、お父さんは夜更かしする習性がおありね','Sho — Dad-late-hab','Wry','yumiko_mom'),
    mk('ママ、お父さんが煙草を一服されてたよ','Mom — Dad-cig-puff','Reflective child','sho_child'),
    mk('翔くん、お父さんが四角い顔の人形を作って下さったわ','Sho — Dad-square-doll-make','Pleased','yumiko_mom'),
    mk('ママ、ぼく、極まりない感謝をお父さんに伝えたよ','Mom — me extreme-thanks-Dad','Earnest child','sho_child'),
    mk('翔くん、お父さんの瞳が輝かれてるのを見ると嬉しいわね','Sho — Dad-eye-shine-glad','Tender','yumiko_mom'),
    mk('ママ、お父さんが家族の絆を育む方なのよね','Mom — Dad-fam-bond-nurture','Tender close','sho_child'),
  ]},
  {id:'conv_10022',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、お店の昔写真に感傷的になってらしたよ、メイちゃん','Aoi — cust-old-photo-sent Mei','Reflective','mei_romantic'),
    mk('葵、新人スタッフが従順だから安心ね、メイちゃん','Aoi — newhire-obed-easy Mei','Pleased','aoi_barista'),
    mk('葵、お客様、決まった席を選ばれる習性ね、メイちゃん','Aoi — cust-fixed-seat-hab Mei','Reflective','mei_romantic'),
    mk('葵、忙しさで一服する時間も取れないね、メイちゃん','Aoi — busy-puff-no-time Mei','Wry','aoi_barista'),
    mk('葵、四角いトレイが使いやすいね、メイちゃん','Aoi — square-tray-easy Mei','Pleased','mei_romantic'),
    mk('葵、お客様、感激極まりないって仰ってたよ、メイちゃん','Aoi — cust-moved-extreme-said Mei','Pleased','aoi_barista'),
    mk('葵、お客様、お子様の瞳が輝かれていたよ、メイちゃん','Aoi — cust-kid-eye-shine Mei','Tender','mei_romantic'),
    mk('葵、お客様、お子様を育むご家族でいらしたよ、メイちゃん','Aoi — cust-kid-nurture-fam Mei','Tender close','aoi_barista'),
  ]},
  {id:'conv_10023',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは感傷を表に出されない方だった','Gran — youth Dad-sent-show-no','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、孫に従順を求められなかったわよね、あなた?','Yes — Grandpa-grandkid-obed-no-demand, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが朝早起きする習性をお持ちだった','Gran — youth Dad-early-rise-hab','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、晩年は縁側で一服されてたわよね、あなた?','Grandpa — late-veranda-puff, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが四角い升で米を量られた','Gran — youth Dad-square-masu-rice','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ご家族への愛情は極まりないものでしたわよね、あなた?','Grandpa — fam-love-extreme, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんの瞳がいつも輝かれてた','Gran — youth Dad-eye-shine-always','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様を育む祖父でいらしたわよね、あなた?','Grandpa — grandkid-nurture, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10024',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、卒業アルバム見て感傷的になってたな','Riku — yearbook-sent','Reflective teen','sakura_teen'),
    mk('お前、彼女に従順すぎないか?桜','You — gf-obed-too? Sakura','Wry','riku_teen'),
    mk('リク、お前、朝練サボる習性あるな','Riku — morning-skip-hab','Wry','sakura_teen'),
    mk('お前、ジュース一服しようぜ、桜','You — juice-puff Sakura','Pleased','riku_teen'),
    mk('リク、お前ん家、四角い窓だらけだな','Riku — your-home-square-window','Curious','sakura_teen'),
    mk('お前、試験の前は緊張極まりないな、桜','You — pre-test-tense-extreme Sakura','Wry','riku_teen'),
    mk('リク、お前、合格して目が輝かれてたな','Riku — pass-eye-shine','Pleased','sakura_teen'),
    mk('お前、後輩を育む先輩だな、桜','You — junior-nurture-senior Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_10025',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが古い写真で感傷に浸ってらしたわ','Sho — Dad-old-photo-sent','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに従順にお手伝いしたよ','Mei-sis — me Dad-obed-help','Earnest child','sho_child'),
    mk('翔くん、お父さんは早起きの習性がおありなのよ','Sho — Dad-early-rise-hab','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと一服のお茶飲んだよ','Mei-sis — me Dad-puff-tea','Eager child','sho_child'),
    mk('翔くん、お父さんが四角い箱でおもちゃを作って下さったわ','Sho — Dad-square-box-toy','Pleased','mei_romantic'),
    mk('メイ姉さん、お父さんへの愛情が極まりないよ','Mei-sis — Dad-love-extreme','Tender child','sho_child'),
    mk('翔くん、お父さんの瞳が誇らしげに輝かれてたわ','Sho — Dad-eye-proud-shine','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんがぼくを育んで下さってるよ','Mei-sis — me Dad-nurture','Tender close','sho_child'),
  ]},
  {id:'conv_10026',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新年の開運祈祷も社風に取り入れろ','Our co — newyear-fortune-add','Crisp','hiroshi_boss'),
    mk('はい。原油バレル価格の動向を分析します','Yes — Oil-barrel-anal','Methodical','kenji_office'),
    mk('当社、株主総会での得票数を確保しろ','Our co — share-mtg-vote-sec','Direction','hiroshi_boss'),
    mk('はい。役員評価のウエートを見直します','Yes — Exec-eval-weight-rev','Update','kenji_office'),
    mk('組織の態様を再点検しろ','Org-form-recheck','Direction','hiroshi_boss'),
    mk('はい。営業の勝率を上げる戦略を立てます','Yes — Sales-win-rate-strat','Update','kenji_office'),
    mk('当社、旧内務省OBの方とも交流しろ','Our co — old-Home-OB-exch','Direction','hiroshi_boss'),
    mk('はい。文教関連の助成にも応募します','Yes — Edu-grant-apply','Close','kenji_office'),
  ]},
  {id:'conv_10027',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('開運グッズの取り扱いも検討しましょう','Fortune-good-cons','Brisk','yuki_office'),
    mk('はい。原油バレル価格を毎日確認します','Yes — Oil-barrel-daily','Cooperative','kenji_office'),
    mk('社内選挙の得票結果を共有しましょう','Co-elect-vote-share','Direction','yuki_office'),
    mk('はい。評価ウエートを部門別に決めます','Yes — Eval-weight-dept-set','Update','kenji_office'),
    mk('クレームの態様を分析しましょう','Comp-form-anal','Direction','yuki_office'),
    mk('はい。地域別の勝率を集計します','Yes — Local-win-rate-tally','Update','kenji_office'),
    mk('旧内務省関連の博物館にも協賛しましょう','Old-Home-mus-spons','Direction','yuki_office'),
    mk('はい。文教施設への寄付を予算化します','Yes — Edu-fac-don-budget','Close','kenji_office'),
  ]},
  {id:'conv_10028',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究の開運には朝の挨拶も大事だ','Ren — research-fortune-greet','Mentor','hiroshi_boss'),
    mk('はい。原油バレル換算の実験コストを計算します','Yes — Oil-barrel-exp-cost','Earnest','ren_uni'),
    mk('蓮、学会の得票結果も論文評価の参考だ','Ren — conf-vote-paper-ref','Direction','hiroshi_boss'),
    mk('はい。実験データのウエート設定を慎重にします','Yes — Exp-data-weight-careful','Earnest','ren_uni'),
    mk('蓮、データの態様を多角的に分析しろ','Ren — data-form-multi-anal','Direction','hiroshi_boss'),
    mk('はい。仮説検証の勝率を上げます','Yes — Hyp-test-win-rate-up','Polite','ren_uni'),
    mk('蓮、旧内務省関連の歴史資料も参照しろ','Ren — old-Home-doc-ref','Direction','hiroshi_boss'),
    mk('はい。文教政策研究にも興味があります','Yes — Edu-pol-int','Earnest close','ren_uni'),
  ]},
  {id:'conv_10029',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、初詣警備で市民の開運を支えられますね','Police newyear-guard-fortune','Cooperative','kenji_office'),
    mk('警察、原油バレル価格高騰時の盗難にも対応されますね','Police oil-barrel-theft-resp','Cooperative','kenji_office'),
    mk('警察、選挙の得票集計の警備もされますね','Police elect-vote-guard','Cooperative','kenji_office'),
    mk('警察、捜査の重点ウエートを決められますね','Police inv-weight-set','Cooperative','kenji_office'),
    mk('警察、犯罪の態様別に班を作られますね','Police crime-form-team','Cooperative','kenji_office'),
    mk('警察、犯人検挙の勝率を上げる工夫もされますね','Police suspect-arr-win-rate-impr','Cooperative','kenji_office'),
    mk('警察、旧内務省時代の歴史的事案も整理されますね','Police old-Home-hist-org','Cooperative','kenji_office'),
    mk('警察、文教施設での防犯活動も担当されますね','Police edu-fac-prev','Close','kenji_office'),
  ]},
  {id:'conv_10030',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、毎年開運祈願をされた','Dad — founding fortune-pray-yr','Sage','hiroshi_elder'),
    mk('はい。お父さんは原油バレル価格を常に把握された','Yes — Dad oil-barrel-grasp','Commitment','hiroshi_boss'),
    mk('お父さん、株主総会で大量の得票を得られた','Dad — share-mtg-vote-big','Wistful','hiroshi_elder'),
    mk('はい。お父さんは評価ウエートを公平にされた','Yes — Dad eval-weight-fair','Reflective','hiroshi_boss'),
    mk('お父さん、お客様の態様を細かく分析された','Dad — cust-form-fine-anal','Wistful','hiroshi_elder'),
    mk('はい。お父さんは交渉の勝率が高かった','Yes — Dad negot-win-rate-high','Reflective','hiroshi_boss'),
    mk('お父さん、旧内務省人脈もお持ちだった','Dad — old-Home-net','Wistful','hiroshi_elder'),
    mk('はい。お父さんは文教振興にも貢献された','Yes — Dad edu-prom-cont','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10031',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、貴族文化の高貴な所作研究を論文で扱いましたね','Ren — noble-cult-elegant paper','Calm','asuka_teacher'),
    mk('はい、舞台照明の光源選定研究を論文で扱いました','Yes — Stage-light-src paper','Earnest','ren_uni'),
    mk('蓮さん、雷の放電現象を論文で扱いましたね','Ren — light-disc paper','Reflective','asuka_teacher'),
    mk('はい、腹部超音波の精度研究を論文で扱いました','Yes — Abdom-US paper','Earnest','ren_uni'),
    mk('発展途上国の劣悪な労働環境研究を論文で扱いましたね','Dev-cn-poor-work paper','Engaged','asuka_teacher'),
    mk('はい、乳房自己検診の啓発研究を論文で扱いました','Yes — Breast-self-exam paper','Earnest','ren_uni'),
    mk('蓮さん、遺伝子置換技術を論文で扱いましたね','Ren — gene-edit paper','Reflective','asuka_teacher'),
    mk('はい、有人宇宙飛行の歴史を論文で扱いました','Yes — Manned-space paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10032',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、高貴な美術品の窃盗を、警察、扱われますね','Case noble-art-theft police-handle','Reflective','ren_uni'),
    mk('警察、街灯の光源異常も把握されますね','Police streetlight-src-anom','Cooperative','takeda_officer'),
    mk('本件、放電事故での被害者を、警察、医療連携で対応されますね','Case disc-acc-vict-med','Reflective','ren_uni'),
    mk('警察、腹部殴打事件の鑑識も担当します','Police abdom-blow-forensic','Procedural','takeda_officer'),
    mk('本件、劣悪な労働環境での違反を、警察、扱われますね','Case poor-work-viol police-handle','Reflective','ren_uni'),
    mk('警察、乳房関連の医療事故も担当します','Police breast-med-acc-handle','Procedural','takeda_officer'),
    mk('本件、置換型DNA改ざんを、警察、捜査されますね','Case edit-DNA-falsif police-inv','Reflective','ren_uni'),
    mk('警察、有人潜水艇の事故も対応されますね','Police manned-sub-acc-resp','Close','takeda_officer'),
  ]},
  {id:'conv_10033',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、貴族文化の高貴な所作を論文で扱いましたね','Sakura — noble-elegant paper','Calm','asuka_teacher'),
    mk('はい、舞台照明の光源選定を論文で扱いました','Yes — Stage-light paper','Earnest teen','sakura_teen'),
    mk('雷の放電現象を論文で扱いましたね','Light-disc paper','Reflective','asuka_teacher'),
    mk('はい、腹部超音波の精度を論文で扱いました','Yes — Abdom-US paper','Earnest','sakura_teen'),
    mk('発展途上国の劣悪な労働環境を論文で扱いましたね','Dev-poor-work paper','Engaged','asuka_teacher'),
    mk('はい、乳房自己検診の啓発を論文で扱いました','Yes — Breast-self paper','Earnest','sakura_teen'),
    mk('遺伝子置換技術を論文で扱いましたね','Gene-edit paper','Reflective','asuka_teacher'),
    mk('はい、有人宇宙飛行の歴史を論文で扱いました','Yes — Manned-space paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10034',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、高貴なご家族の医療対応を医療チームで配慮します','Ren — noble-fam-med med-team','Calm','saito_doctor'),
    mk('はい、医療現場の光源管理を医療チームで徹底します','Yes — Med-light-src med-team','Patient','saito_doctor'),
    mk('蓮さん、心臓除細動の放電を医療チームで正確におこないます','Ren — defib-disc med-team','Calm','saito_doctor'),
    mk('腹部疾患の鑑別を、貴院、丁寧にされますね、先生','Abdom-dis-diff your-hosp careful, sensei','Reflective','ren_uni'),
    mk('はい、劣悪な居住環境の患者を医療チームで支援します','Yes — Poor-home-pati med-team supp','Patient','saito_doctor'),
    mk('はい、乳房検診を医療チームで推進します','Yes — Breast-exam med-team push','Patient','saito_doctor'),
    mk('遺伝子置換療法を、貴院、研究されてますね、先生','Gene-edit-ther your-hosp research, sensei','Curious','ren_uni'),
    mk('はい、有人ISSミッションの医療支援も医療チームで関わります','Yes — Manned-ISS-med med-team-rel','Patient close','saito_doctor'),
  ]},
  {id:'conv_10035',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、高貴なブランドイメージを保て','Our co — noble-brand-keep','Crisp','hiroshi_boss'),
    mk('はい。展示会の光源を演出に活かします','Yes — Expo-light-prod-use','Methodical','kenji_office'),
    mk('当社、静電放電対策を工場で徹底しろ','Our co — ESD-fact-strict','Direction','hiroshi_boss'),
    mk('はい。健康診断で社員の腹部測定も追加します','Yes — Checkup-abdom-add','Update','kenji_office'),
    mk('当社、劣悪な下請け労働を許すな','Our co — poor-subc-no-tol','Direction','hiroshi_boss'),
    mk('はい。乳房検診の補助制度を社員に提供します','Yes — Breast-exam-sub-staff','Update','kenji_office'),
    mk('社内システムを段階的に置換しろ','Co-sys-grad-edit','Direction','hiroshi_boss'),
    mk('はい。有人ドローンの開発も検討します','Yes — Manned-drone-dev-cons','Close','kenji_office'),
  ]},
  {id:'conv_10036',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、芥川賞作家のサイン会に行かれたって、メイちゃん','Aoi — cust-Aku-prize-sign Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ビルマ時代の祖父のお話されたよ、メイちゃん','Aoi — cust-Burma-grandpa-told Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ベネズエラの民族音楽がお好きだって、メイちゃん','Aoi — cust-Venez-ethnic Mei','Reflective','mei_romantic'),
    mk('葵、お客様、茅ヶ崎のサーフスポットに通われてるって、メイちゃん','Aoi — cust-Chigasaki-surf Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ナイロビへの取材経験がおありだって、メイちゃん','Aoi — cust-Nairobi-rep Mei','Reflective','mei_romantic'),
    mk('葵、お客様、鈴鹿サーキットのF1観戦が趣味だって、メイちゃん','Aoi — cust-Suzuka-F1 Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ホノルル旅行のお土産下さったよ、メイちゃん','Aoi — cust-Honol-souv Mei','Pleased','mei_romantic'),
    mk('葵、お客様、テレビ東京のドキュメンタリーが好きだって、メイちゃん','Aoi — cust-TX-doc Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10037',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが芥川龍之介の短編を愛読された','Gran — youth Dad-Aku-short-read','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ビルマ戦線の体験を語って下さったわよね、あなた?','Yes — Grandpa-Burma-told, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがベネズエラのサルサに興味を持たれた','Gran — youth Dad-Venez-salsa-int','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、茅ヶ崎にお別荘をお持ちだったわよね、あなた?','Grandpa — Chigasaki-vill, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがナイロビ駐在のお話をされた','Gran — youth Dad-Nairobi-told','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、鈴鹿のF1日本グランプリをご覧になったわよね、あなた?','Grandpa — Suzuka-F1-JP-GP, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと新婚旅行でホノルルへ行った','Gran — youth Dad-honey-Honol','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、テレビ東京の番組をご覧になってたわよね、あなた?','Grandpa — TX-watch, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10038',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが芥川龍之介の童話を読んで下さるそうよ','Sho — Dad-Aku-fairy-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとビルマの絵本見たよ','Mei-sis — me Dad-Burma-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがベネズエラの絵本を読んで下さるそうよ','Sho — Dad-Venez-pic-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと茅ヶ崎の海に行ったよ','Mei-sis — me Dad-Chigasaki-sea','Eager child','sho_child'),
    mk('翔くん、お父さんがナイロビ出張のお土産下さったわ','Sho — Dad-Nairobi-souv','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと鈴鹿のF1観たよ','Mei-sis — me Dad-Suzuka-F1','Eager child','sho_child'),
    mk('翔くん、お父さんがホノルル旅行に連れて行って下さるそうよ','Sho — Dad-Honol-take','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとテレビ東京のドキュメンタリー観たよ','Mei-sis — me Dad-TX-doc','Eager close','sho_child'),
  ]},
  {id:'conv_10039',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、国語で芥川龍之介習ったろ?','Riku — JP-Aku?','Curious teen','sakura_teen'),
    mk('お前、社会でビルマ習ったろ?桜','You — soc-Burma? Sakura','Curious','riku_teen'),
    mk('リク、お前、ベネズエラの社会問題勉強したな','Riku — Venez-soc?','Curious','sakura_teen'),
    mk('お前、茅ヶ崎の海でサーフィンしたな、桜','You — Chigasaki-surf Sakura','Curious','riku_teen'),
    mk('リク、お前、修学旅行でナイロビ行ったろ?','Riku — sch-trip-Nairobi?','Curious','sakura_teen'),
    mk('お前、鈴鹿サーキット行きたがってたな、桜','You — Suzuka-want Sakura','Curious','riku_teen'),
    mk('リク、お前、ホノルルマラソン憧れてたな','Riku — Honol-mar-admire','Curious','sakura_teen'),
    mk('お前、テレビ東京のアニメ観てたな、桜','You — TX-anime Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10040',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが芥川龍之介の本を貸して下さったわ','Sho — Dad-Aku-book-lend','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとビルマの絵本見たよ','Mom — me Dad-Burma-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがベネズエラのニュースをご覧になってたわ','Sho — Dad-Venez-news-watch','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと茅ヶ崎の海行ったよ','Mom — me Dad-Chigasaki','Eager child','sho_child'),
    mk('翔くん、お父さんがナイロビ駐在のお話して下さったわ','Sho — Dad-Nairobi-told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと鈴鹿サーキットのF1中継観たよ','Mom — me Dad-Suzuka-F1-broad','Eager child','sho_child'),
    mk('翔くん、お父さんがホノルル旅行の写真を見せて下さったわ','Sho — Dad-Honol-photo-show','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとテレビ東京の経済番組観たよ','Mom — me Dad-TX-econ','Eager close','sho_child'),
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

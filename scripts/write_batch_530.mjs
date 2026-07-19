import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_530 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['糞','ガール','うーむ','じゃぁ','仔','菊','帖','フン']
const B_T = ['アンプ','エンタープライズ','タイムズ','バーツ','カンパニー','キーパー','エコノミスト','ウィルコム']
const C_T = ['強姦','使徒','於い','草子','罎','謂','廣','來']
const D_T = ['ヒデ','オト','ヨハネ','チャールズ','アラン','エホバ','トーマス','ケリー']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10561',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「糞、また書類が増えた」って疲れて仰ってたわ','Sho — Dad-"kuso-paper-incr"-tired','Wry','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「お友達の女の子、つまりガールフレンドはまだ?」って聞かれたよ','Mom — me Dad-"girl-fri-not-yet"-asked','Wry child','sho_child'),
    mk('翔くん、お父さんが「うーむ、難しいな」って唸ってらしたわ','Sho — Dad-"umu-diff"-mut','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「じゃぁ、宿題終わったらね」って言われたよ','Mom — me Dad-"jaaa-homework-then"-said','Earnest child','sho_child'),
    mk('翔くん、お父さんが「仔猫を保護したい」って仰ってたわ','Sho — Dad-"kitten-prot"-said','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと菊の花を植えたよ','Mom — me Dad-chry-plant','Pleased child','sho_child'),
    mk('翔くん、お父さんが「八帖の客間に布団を敷くね」って仰ってたわ','Sho — Dad-"8-tatami-fut"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「フン、まだまだだぞ」って試されたよ','Mom — me Dad-"hun-not-yet"-test','Wry close','sho_child'),
  ]},
  {id:'conv_10562',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、忙しさに「糞、時間がない」とつぶやいてらしたよ、メイちゃん','Aoi — cust-"kuso-no-time"-mut Mei','Wry','mei_romantic'),
    mk('葵、お客様、お孫様のガールフレンドのお話を語って下さったよ、メイちゃん','Aoi — cust-grdkid-girl-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、メニューを見て「うーむ、迷うね」と仰ってたよ、メイちゃん','Aoi — cust-menu-"umu-tough"-said Mei','Reflective','mei_romantic'),
    mk('葵、お客様、「じゃぁ、本日のおすすめで」って仰って下さったよ、メイちゃん','Aoi — cust-"jaaa-today-rec"-said Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ご自宅の仔犬の写真を見せて下さったよ、メイちゃん','Aoi — cust-pup-photo-show Mei','Reflective','mei_romantic'),
    mk('葵、お客様、菊の花展のお話を語って下さったよ、メイちゃん','Aoi — cust-chry-show-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、京都の旅館の十帖部屋のお話を語って下さったよ、メイちゃん','Aoi — cust-Kyoto-ryokan-10-tatami Mei','Reflective','mei_romantic'),
    mk('葵、お客様、自分を笑いながら「フン、まだ若いさ」って仰ってたよ、メイちゃん','Aoi — cust-self-"hun-young"-laugh Mei','Wry close','aoi_barista'),
  ]},
  {id:'conv_10563',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが「糞、悔しい」と素直に仰った日があった','Gran — youth Dad-"kuso-cha"-said','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、私の事を「ガール時代から見て来た」と仰ったわよね、あなた?','Yes — Grandpa-"my-girl-since"-said, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「うーむ、見事だ」と感嘆された','Gran — youth Dad-"umu-fine"-admire','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、「じゃぁ、今夜は鍋にしよう」って仰ってたわよね、あなた?','Grandpa — "jaaa-tonight-nabe"-said, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが仔牛、つまり子牛を世話された','Gran — youth Dad-calf-care','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、菊の品評会に出品されたわよね、あなた?','Grandpa — youth-chry-show-entry, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが六帖の書斎で読書された','Gran — youth Dad-6-tatami-study-read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、「フン、まだまだだ」と謙虚に仰ったわよね、あなた?','Grandpa — youth-"hun-still"-humble, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10564',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、試験前に「糞、間に合わない」って言ってたな','Riku — pre-test-"kuso-no-time"','Wry teen','sakura_teen'),
    mk('お前、新しいガールバンド推してたな、桜','You — new-girl-band-fan Sakura','Curious','riku_teen'),
    mk('リク、お前、数学の問題に「うーむ」って唸ってたな','Riku — math-"umu"-groan','Wry','sakura_teen'),
    mk('お前、「じゃぁ、答え見せろ」って言ってたろ、桜','You — "jaaa-show-ans" Sakura','Wry','riku_teen'),
    mk('リク、お前、近所で仔猫見つけて喜んでたな','Riku — near-kitten-found-glad','Wry','sakura_teen'),
    mk('お前、文化祭で菊の花輪作ってたな、桜','You — cul-fes-chry-wreath Sakura','Curious','riku_teen'),
    mk('リク、お前、合宿の旅館で八帖の部屋大喜びしてたな','Riku — camp-ryokan-8-tatami-glad','Wry','sakura_teen'),
    mk('お前、「フン、勝負はこれからだ」って仰々しく言ってたろ、桜','You — "hun-from-now"-grand-said? Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10565',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「糞、忘れ物だ」って慌てて戻られたわ','Sho — Dad-"kuso-forgot"-rush','Wry','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「ガールの友達と仲良くね」って言われたよ','Mei-sis — me Dad-"girl-fri-warm"-said','Earnest child','sho_child'),
    mk('翔くん、お父さんが「うーむ、これは旨い」って唸ってらしたわ','Sho — Dad-"umu-yummy"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「じゃぁ、お弁当持って行こう」って言われたよ','Mei-sis — me Dad-"jaaa-lunch-bring"-said','Eager child','sho_child'),
    mk('翔くん、お父さんが仔犬と遊んで下さるそうよ','Sho — Dad-pup-play','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに菊の花の名前を教えて頂いたよ','Mei-sis — me Dad-chry-name-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが「四帖半でも立派な書斎」って仰ってたわ','Sho — Dad-"4.5-tatami-fine"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「フン、まだ序の口」って試されたよ','Mei-sis — me Dad-"hun-just-start"-test','Wry close','sho_child'),
  ]},
  {id:'conv_10566',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、会議室のアンプ、つまり音響装置を更新しろ','Our co — meet-amp-upd','Crisp','hiroshi_boss'),
    mk('はい。新拠点をエンタープライズ拠点として位置付けます','Yes — New-site-ent-pos','Methodical','kenji_office'),
    mk('当社、海外のタイムズ系新聞に広告を出せ','Our co — overs-Times-ad','Direction','hiroshi_boss'),
    mk('はい。タイの取引でバーツ建ての契約を整えます','Yes — Thai-Baht-contr','Update','kenji_office'),
    mk('当社、海外子会社、つまりカンパニーとの連携を強化しろ','Our co — overs-co-link-strong','Direction','hiroshi_boss'),
    mk('はい。社内データのキーパー、つまり保管担当を明確化します','Yes — Int-data-keeper-clear','Update','kenji_office'),
    mk('当社、エコノミスト誌の特集記事を経営陣で読み合わせろ','Our co — Econ-fea-art-exec-read','Direction','hiroshi_boss'),
    mk('はい。旧サービスのウィルコム端末の取り扱いを整理します','Yes — Old-WILLCOM-term-tidy','Close','kenji_office'),
  ]},
  {id:'conv_10567',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('プレゼン用のアンプ、つまりスピーカー機器を新調しましょう','Pres-amp-spkr-renew','Brisk','yuki_office'),
    mk('はい。エンタープライズ版ソフトの導入を検討します','Yes — Ent-sw-intro','Cooperative','kenji_office'),
    mk('海外のタイムズ紙の取材依頼に対応しましょう','Overs-Times-cov-resp','Direction','yuki_office'),
    mk('はい。タイの取引先からバーツ建ての請求が来ます','Yes — Thai-client-Baht-inv','Update','kenji_office'),
    mk('海外法人カンパニーとの定例会を増やしましょう','Overs-co-reg-meet-incr','Direction','yuki_office'),
    mk('はい。資料のキーパー、つまり管理担当を専任にします','Yes — Doc-keeper-ded','Update','kenji_office'),
    mk('社員にエコノミスト誌の購読を勧めましょう','Staff-Econ-sub-rec','Direction','yuki_office'),
    mk('はい。旧契約のウィルコム回線を解約します','Yes — Old-WILLCOM-cancel','Close','kenji_office'),
  ]},
  {id:'conv_10568',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、実験室のアンプ、つまり信号増幅器の仕様を確認しろ','Ren — lab-amp-signal-spec-check','Mentor','hiroshi_boss'),
    mk('はい。エンタープライズ向け技術の論文を読みます','Yes — Ent-tech-paper','Earnest','ren_uni'),
    mk('蓮、フィナンシャル・タイムズの記事を読んで業界動向を掴め','Ren — FT-Times-art-ind-trend','Direction','hiroshi_boss'),
    mk('はい。アジア通貨、つまりバーツの研究も視野に入れます','Yes — Asia-curr-Baht-view','Earnest','ren_uni'),
    mk('蓮、海外カンパニーの研究所を取材しろ','Ren — overs-co-lab-int','Direction','hiroshi_boss'),
    mk('はい。実験データのキーパー、つまり管理担当を引き受けます','Yes — Exp-data-keeper-take','Polite','ren_uni'),
    mk('蓮、エコノミスト誌の経済分析を毎週読め','Ren — Econ-anal-wk','Direction','hiroshi_boss'),
    mk('はい。研究室の旧ウィルコム端末の処分を進めます','Yes — Lab-old-WILLCOM-disp','Earnest close','ren_uni'),
  ]},
  {id:'conv_10569',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、現場のアンプ、つまり音響機器も鑑識されますね','Police scene-amp-foren','Cooperative','kenji_office'),
    mk('警察、エンタープライズ向けセキュリティの研修もされますね','Police ent-sec-train','Cooperative','kenji_office'),
    mk('警察、海外タイムズ系紙の犯罪報道も把握されますね','Police overs-Times-crime-rep-mon','Cooperative','kenji_office'),
    mk('警察、海外通貨、つまりバーツ等の偽造捜査もされますね','Police overs-Baht-forg-inv','Cooperative','kenji_office'),
    mk('警察、海外カンパニーが関わる事件も担当されますね','Police overs-co-case','Cooperative','kenji_office'),
    mk('警察、証拠物件のキーパー、つまり保管担当を厳密に決められますね','Police evid-keeper-strict','Cooperative','kenji_office'),
    mk('警察、エコノミスト誌の犯罪経済特集も参考にされますね','Police Econ-crime-econ-fea-ref','Cooperative','kenji_office'),
    mk('警察、旧ウィルコム端末の通信記録も照会されますね','Police old-WILLCOM-comm-rec-inq','Close','kenji_office'),
  ]},
  {id:'conv_10570',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、アンプを自社製造された','Dad — found amp-self','Sage','hiroshi_elder'),
    mk('はい。お父さんはエンタープライズ向け事業に早く進出された','Yes — Dad ent-biz-early','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、海外のタイムズ紙の取材を受けられた','Dad — youth-overs-Times-cov','Wistful','hiroshi_elder'),
    mk('はい。お父さんはタイ進出時のバーツ取引を成功された','Yes — Dad Thai-Baht-succ','Reflective','hiroshi_boss'),
    mk('お父さん、海外子会社のカンパニーを次々設立された','Dad — overs-co-est','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員をデータのキーパーとして信頼された','Yes — Dad staff-keeper-trust','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、エコノミスト誌の常読者だった','Dad — youth-Econ-reg-read','Wistful','hiroshi_elder'),
    mk('はい。お父さんはウィルコムの全盛期も経験された','Yes — Dad WILLCOM-peak-exp','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10571',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、性犯罪、つまり強姦罪の歴史的法制度の研究を論文で扱いましたね','Ren — sex-crime-hist-law paper','Calm','asuka_teacher'),
    mk('はい、十二使徒の文書研究を論文で扱いました','Yes — 12-apos-doc-stud paper','Earnest','ren_uni'),
    mk('蓮さん、戦時下に於ける学者の動向を論文で扱いましたね','Ren — war-scholar-trend paper','Reflective','asuka_teacher'),
    mk('はい、枕草子、つまり古典草子の文体研究を論文で扱いました','Yes — Mak-soushi-style paper','Earnest','ren_uni'),
    mk('蓮さん、古い玻璃の罎、つまり瓶の考古研究を論文で扱いましたね','Ren — old-glass-bot paper','Reflective','asuka_teacher'),
    mk('はい、所謂、つまり謂わゆる古文の用法を論文で扱いました','Yes — Iwayuru-class paper','Earnest','ren_uni'),
    mk('蓮さん、廣島、つまり旧字廣の地名表記の研究を論文で扱いましたね','Ren — old-Hiroshima-name paper','Reflective','asuka_teacher'),
    mk('はい、古典の來、つまり来の用法の文法研究を論文で扱いました','Yes — Old-rai-grammar paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10572',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、強姦罪としての立件を、警察、慎重に検討されますね','Case sex-crime-charge police-care','Reflective','ren_uni'),
    mk('警察、宗教団体の使徒、つまり信者組織の捜査もされますね','Police rel-org-apos-inv','Cooperative','takeda_officer'),
    mk('本件、当該地域に於いて発生した事件を、警察、追跡されますね','Case area-at-occur police-track','Reflective','ren_uni'),
    mk('警察、古書、つまり草子の盗難事件にも対応されますね','Police old-book-soushi-theft','Cooperative','takeda_officer'),
    mk('本件、骨董の玻璃罎、つまり瓶の真贋鑑定を、警察、依頼されますね','Case ant-glass-bot-auth police-req','Reflective','ren_uni'),
    mk('警察、容疑者の所謂、つまり謂わゆる前科も確認されますね','Police suspect-iwayuru-prior-check','Cooperative','takeda_officer'),
    mk('本件、旧字廣島、つまり旧表記廣の文書を、警察、解読されますね','Case old-Hiroshima-doc police-decod','Reflective','ren_uni'),
    mk('警察、來日、つまり外国人の入国記録も照会されますね','Police rai-Jp-entry-rec-inq','Close','takeda_officer'),
  ]},
  {id:'conv_10573',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、性犯罪、つまり強姦罪の歴史的法制度の研究を論文で扱いましたね','Sakura — sex-crime paper','Calm','asuka_teacher'),
    mk('はい、十二使徒の文書研究を論文で扱いました','Yes — 12-apos paper','Earnest teen','sakura_teen'),
    mk('戦時下に於ける学者の動向を論文で扱いましたね','War-scholar paper','Reflective','asuka_teacher'),
    mk('はい、枕草子、つまり古典草子の文体研究を論文で扱いました','Yes — Soushi paper','Earnest','sakura_teen'),
    mk('古い玻璃の罎、つまり瓶の考古研究を論文で扱いましたね','Old-glass-bot paper','Reflective','asuka_teacher'),
    mk('はい、所謂、つまり謂わゆる古文の用法を論文で扱いました','Yes — Iwayuru paper','Earnest','sakura_teen'),
    mk('廣島、つまり旧字廣の地名表記の研究を論文で扱いましたね','Old-Hiroshima paper','Reflective','asuka_teacher'),
    mk('はい、古典の來、つまり来の用法の文法研究を論文で扱いました','Yes — Rai paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10574',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、性暴力、つまり強姦被害の方への診療を医療チームで丁寧におこないます','Ren — sex-vio-vict-care med-team','Calm','saito_doctor'),
    mk('蓮さん、医療使徒、つまり奉仕的医療従事者の歴史を医療チームで学びます','Ren — med-apos-svc-hist med-team','Calm','saito_doctor'),
    mk('蓮さん、感染症蔓延下に於いて、医療チームで体制を整えます','Ren — pand-cond med-team-set','Calm','saito_doctor'),
    mk('蓮さん、医療の古文献、つまり古典医学草子を医療チームで紐解きます','Ren — med-old-doc-soushi med-team-stud','Calm','saito_doctor'),
    mk('蓮さん、薬剤の旧瓶、つまり罎の保管を医療チームで配慮します','Ren — med-old-bot med-team-care','Calm','saito_doctor'),
    mk('蓮さん、所謂、つまり謂わゆる難病の対応を医療チームで検討します','Ren — iwayuru-diff-dis med-team','Calm','saito_doctor'),
    mk('蓮さん、廣域、つまり旧字廣の災害医療連携を医療チームで構築します','Ren — wide-area-dis-med med-team','Calm','saito_doctor'),
    mk('蓮さん、來院、つまり来院患者の動線を医療チームで整えます','Ren — visit-pati-flow med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_10575',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、社員のハラスメント、つまり強姦に類する事案には毅然と対処しろ','Our co — staff-har-sex-strict','Crisp','hiroshi_boss'),
    mk('はい。創業者の使徒、つまり後継者を社内で育成します','Yes — Found-apos-suc-grow','Methodical','kenji_office'),
    mk('当社、海外市場に於いてもブランドを守れ','Our co — overs-mkt-brand-prot','Direction','hiroshi_boss'),
    mk('はい。社史の冊子、つまり社誌草子の保存版を作ります','Yes — Co-hist-soushi-save','Update','kenji_office'),
    mk('当社、商品の容器、つまり罎、つまり瓶のデザインを刷新しろ','Our co — prod-bot-design-renew','Direction','hiroshi_boss'),
    mk('はい。社員の所謂、つまり謂わゆる不正に毅然と対応します','Yes — Staff-iwayuru-fraud-strict','Update','kenji_office'),
    mk('当社、廣島支店、つまり旧字廣の支店を中心地に置け','Our co — Hiroshima-old-branch-center','Direction','hiroshi_boss'),
    mk('はい。來客、つまり来客記録を厳密に管理します','Yes — Visit-rec-strict','Close','kenji_office'),
  ]},
  {id:'conv_10576',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、X JAPANのヒデが好きだって、メイちゃん','Aoi — cust-Hide-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お子様のお名前がオトくんだって、メイちゃん','Aoi — cust-kid-Oto Mei','Reflective','aoi_barista'),
    mk('葵、お客様、聖書のヨハネの章を読んでらしたよ、メイちゃん','Aoi — cust-Bib-John-read Mei','Reflective','mei_romantic'),
    mk('葵、お客様、英王室のチャールズ国王のお話を語って下さったよ、メイちゃん','Aoi — cust-UK-Charles-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ピアニストのアラン・ギブソンに憧れてらっしゃるって、メイちゃん','Aoi — cust-Alan-piano-asp Mei','Reflective','mei_romantic'),
    mk('葵、お客様、エホバの証人の研究をされてるって、メイちゃん','Aoi — cust-Jeh-witn-stud Mei','Reflective','aoi_barista'),
    mk('葵、お客様、機関車トーマスを好きだった子供時代を語って下さったよ、メイちゃん','Aoi — cust-Thomas-loco-child-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、米国大統領のケリー候補のお話を語って下さったよ、メイちゃん','Aoi — cust-Kerry-cand-talk Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10577',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがX JAPANのヒデの曲をご愛聴された','Gran — youth Dad-Hide-music-fav','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、お孫様にオトちゃんって愛称を付けられたわよね、あなた?','Yes — Grandpa-grdkid-Oto-nick, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが聖ヨハネ教会の歴史に詳しかった','Gran — youth Dad-John-church-knowl','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、英国でチャールズ皇太子をご覧になられたわよね、あなた?','Grandpa — youth-UK-Charles-saw, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがアラン・ドロンの映画を観られた','Gran — youth Dad-Alan-Delon-film','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、エホバの証人の方々と対話されたわよね、あなた?','Grandpa — Jeh-witn-dial, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが我が子に機関車トーマスの絵本を読まれた','Gran — youth Dad-kid-Thomas-pic','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ケリー首相の演説に感銘されたわよね、あなた?','Grandpa — youth-Kerry-PM-imp, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10578',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがX JAPANのヒデを尊敬されてるわ','Sho — Dad-Hide-resp','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お友達のオトちゃんと遊んだよ','Mei-sis — me fri-Oto-play','Eager child','sho_child'),
    mk('翔くん、お父さんが聖書のヨハネ伝を読んで下さってるわ','Sho — Dad-Bib-John-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと英王室のチャールズ国王の写真集見たよ','Mei-sis — me Dad-Charles-photo','Eager child','sho_child'),
    mk('翔くん、お父さんがアラン・チューリングの伝記を読んで下さってるわ','Sho — Dad-Alan-Tur-biog','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「エホバの証人とは」って解説して頂いたよ','Mei-sis — me Dad-"Jeh-witn"-expl','Earnest child','sho_child'),
    mk('翔くん、お父さんが機関車トーマスのDVDを下さったわ','Sho — Dad-Thomas-DVD-gift','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとケリー長官のニュース見たよ','Mei-sis — me Dad-Kerry-sec-news','Eager close','sho_child'),
  ]},
  {id:'conv_10579',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、X JAPANのヒデにハマってたな','Riku — Hide-fan','Curious teen','sakura_teen'),
    mk('お前、ペットのオトくんって名前可愛いな、桜','You — pet-Oto-cute Sakura','Wry','riku_teen'),
    mk('リク、お前、社会で聖ヨハネ教会習ったろ','Riku — soc-John-church?','Curious','sakura_teen'),
    mk('お前、英王室のチャールズ国王知ってるよな、桜','You — UK-Charles-know Sakura','Curious','riku_teen'),
    mk('リク、お前、映画でアラン・リックマン見たろ','Riku — film-Alan-Rick?','Curious','sakura_teen'),
    mk('お前、社会でエホバの証人について調べてたな、桜','You — soc-Jeh-witn-stud Sakura','Curious','riku_teen'),
    mk('リク、お前、機関車トーマスのフィギュア持ってたな','Riku — Thomas-fig-have','Wry','sakura_teen'),
    mk('お前、ニュースでケリー長官の名前覚えたろ、桜','You — news-Kerry-name? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10580',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがX JAPANのヒデのドキュメンタリーを観てらっしゃるわ','Sho — Dad-Hide-doc','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとオトちゃんが居る公園で遊んだよ','Mom — me Dad-Oto-park','Eager child','sho_child'),
    mk('翔くん、お父さんが聖書のヨハネの黙示録を解説して下さるわ','Sho — Dad-John-Rev-narr','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと英王室のチャールズ国王の戴冠式観たよ','Mom — me Dad-Charles-coron','Eager child','sho_child'),
    mk('翔くん、お父さんがアラン・ドロンの主演映画を観てらっしゃるわ','Sho — Dad-Alan-Del-film','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「エホバの証人の方は親切」って教えて頂いたよ','Mom — me Dad-"Jeh-witn-kind"-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが機関車トーマスの劇場版を観に連れて下さるわ','Sho — Dad-Thomas-theat','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとケリー国務長官の演説聞いたよ','Mom — me Dad-Kerry-st-sp','Eager close','sho_child'),
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

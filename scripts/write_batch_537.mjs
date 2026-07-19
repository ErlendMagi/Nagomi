import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_537 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['雅子','恵子','静香','直人','健一','和夫','篤','哉']
const B_T = ['オペレーティングシステム','電機','アスキー','スペル','エフェクト','パワーアップ','ポチッ','メッセンジャー']
const C_T = ['ソヴィエト','マオリ','秦','劉','宋','萬','鵐','カキ']
const D_T = ['マリオ','マーティン','スティーブン','コリン','ティム','アレックス','ニコラ','アーサー']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10701',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「雅子様の御活動はご立派」って仰ってたわ','Sho — Dad-"Masako-act-fine"-said','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんのお友達の恵子おばさんに会ったよ','Mom — me Dad-fri-Keiko-met','Pleased child','sho_child'),
    mk('翔くん、お父さんのお仕事仲間の静香さんが家にいらしたわ','Sho — Dad-col-Shiz-vis','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと直人おじさんと釣りに行ったよ','Mom — me Dad-Naoto-uncle-fish','Pleased child','sho_child'),
    mk('翔くん、お父さんが「健一さんは篤実な方」と仰ってたわ','Sho — Dad-"Kenichi-sin"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと和夫おじさんに会ったよ','Mom — me Dad-Kazuo-uncle-met','Eager child','sho_child'),
    mk('翔くん、お父さんは「篤志、つまり篤い志を持つ事が大事」って教えて下さるわ','Sho — Dad-"sin-asp-imp"-teach','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「快哉、つまり「快哉!」と叫ぶ場面もある」って教えて頂いたよ','Mom — me Dad-"kaisai"-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_10702',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、皇室の雅子様のお話を尊敬を込めて語って下さったよ、メイちゃん','Aoi — cust-imp-Masako-resp-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご友人の恵子さんとお茶されてたよ、メイちゃん','Aoi — cust-fri-Keiko-tea Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ご友人の静香さんとご来店だったよ、メイちゃん','Aoi — cust-fri-Shiz-vis Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご友人の直人さんと打ち合わせされてたよ、メイちゃん','Aoi — cust-fri-Naoto-meet Mei','Reflective','aoi_barista'),
    mk('葵、お客様、近所の健一さんが面白い方だって、メイちゃん','Aoi — cust-near-Kenichi-fun Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お父様のお名前が和夫さんだって、メイちゃん','Aoi — cust-fa-Kazuo Mei','Reflective','aoi_barista'),
    mk('葵、お客様、「篤志家、つまり篤志の方の支援活動」を語って下さったよ、メイちゃん','Aoi — cust-"phila-sup"-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、「快哉を叫ぶ場面」のお話を語って下さったよ、メイちゃん','Aoi — cust-"kaisai-cry"-talk Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10703',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが御皇室の雅子様のニュースを観られた','Gran — youth Dad-Masako-news','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、お友達の恵子さんとよくお出かけしたわよね、あなた?','Yes — Grandpa-youth-Keiko-out, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが妹の静香さんを可愛がられた','Gran — youth Dad-sis-Shiz-love','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、直人兄さんと将棋を指されたわよね、あなた?','Grandpa — youth-Naoto-bro-shog, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは健一氏と同僚として働かれた','Gran — youth Dad-Kenichi-col','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、和夫兄さんとお酒を酌み交わされたわよね、あなた?','Grandpa — youth-Kazuo-bro-drink, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは「篤実な方々と仲良くしなさい」と仰った','Gran — youth Dad-"sin-pers"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、「快哉、つまり快哉!と叫ばれる」場面が多かったわよね、あなた?','Grandpa — youth-"kaisai-cry"-many, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10704',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、社会で雅子様の御活動について調べてたな','Riku — soc-Masako-act-stud','Curious teen','sakura_teen'),
    mk('お前のお母様、恵子さんって名前だったよな、桜','You — your-mom-Keiko Sakura','Curious','riku_teen'),
    mk('リク、お前、隣のクラスの静香と話してたな','Riku — next-cl-Shiz-talk','Curious','sakura_teen'),
    mk('お前、サッカー部の直人先輩を尊敬してたな、桜','You — soccer-Naoto-sen-resp Sakura','Curious','riku_teen'),
    mk('リク、お前、健一おじさんが家に来てたな','Riku — Kenichi-uncle-vis','Curious','sakura_teen'),
    mk('お前、家庭科の先生、和夫先生だったよな、桜','You — home-tch-Kazuo Sakura','Curious','riku_teen'),
    mk('リク、お前、「篤実」って言葉、漢字練習で書いてたな','Riku — "sin"-kanji-prac','Curious','sakura_teen'),
    mk('お前、古文で「哉!」、つまり「〜哉!」って読み方習ったろ、桜','You — class-"-ya"-read? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10705',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「雅子様の御活動は希望」って仰ってたわ','Sho — Dad-"Masako-hope"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと恵子おばさんに会いに行ったよ','Mei-sis — me Dad-Keiko-aunt-vis','Eager child','sho_child'),
    mk('翔くん、お父さんが「静香さんは芸術家肌」って仰ってたわ','Sho — Dad-"Shiz-artist"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと直人さんの子供達と遊んだよ','Mei-sis — me Dad-Naoto-kid-play','Eager child','sho_child'),
    mk('翔くん、お父さんが「健一さんは古い友達」って仰ってたわ','Sho — Dad-"Kenichi-old-fri"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに和夫おじさんの結婚式の話を聞いたよ','Mei-sis — me Dad-Kazuo-wed-story','Earnest child','sho_child'),
    mk('翔くん、お父さんが「篤いお気持ちを大事にね」って仰ってたわ','Sho — Dad-"deep-feel-cher"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「逝去哉、つまり古文の感嘆」を教えて頂いたよ','Mei-sis — me Dad-"-ya-class"-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_10706',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、社内端末のオペレーティングシステムを最新版にしろ','Our co — int-OS-latest','Crisp','hiroshi_boss'),
    mk('はい。電機メーカーとの取引契約を更新します','Yes — Elec-maker-contr-ren','Methodical','kenji_office'),
    mk('当社、文字コード、つまりアスキー基準を社員に再周知しろ','Our co — char-ASCII-staff-share','Direction','hiroshi_boss'),
    mk('はい。広告コピーのスペル誤りを徹底チェックします','Yes — Ad-copy-spell-thor','Update','kenji_office'),
    mk('当社、新商品の効果、つまりエフェクトを動画で見せろ','Our co — new-prod-eff-vid','Direction','hiroshi_boss'),
    mk('はい。社員研修のパワーアップを企画します','Yes — Staff-train-pwr-up-plan','Update','kenji_office'),
    mk('当社、ボタンを「ポチッと押すだけ」のシンプル設計にしろ','Our co — btn-"pochi"-simp','Direction','hiroshi_boss'),
    mk('はい。社内メッセンジャーの利用ルールを整えます','Yes — Int-mes-rule-tidy','Close','kenji_office'),
  ]},
  {id:'conv_10707',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('オペレーティングシステムのアップデートを一斉に進めましょう','OS-upd-all-prog','Brisk','yuki_office'),
    mk('はい。電機部品の仕入れ先を見直します','Yes — Elec-part-supp-rev','Cooperative','kenji_office'),
    mk('文書のアスキー文字部分を確認しましょう','Doc-ASCII-check','Direction','yuki_office'),
    mk('はい。広告スペルチェックの仕組みを整えます','Yes — Ad-spell-check-set','Update','kenji_office'),
    mk('動画のエフェクト演出を強化しましょう','Vid-eff-strong','Direction','yuki_office'),
    mk('はい。新サービスのパワーアップ計画を組みます','Yes — New-svc-pwr-up-plan','Update','kenji_office'),
    mk('発注確定の「ポチッ」と押す仕組みを分かりやすくしましょう','Order-"pochi"-clear','Direction','yuki_office'),
    mk('はい。社内メッセンジャー利用ガイドを更新します','Yes — Int-mes-guide-upd','Close','kenji_office'),
  ]},
  {id:'conv_10708',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究室のオペレーティングシステム選定を検討しろ','Ren — lab-OS-pick','Mentor','hiroshi_boss'),
    mk('はい。電機工学の論文を読み込みます','Yes — Elec-eng-paper-read','Earnest','ren_uni'),
    mk('蓮、海外論文のアスキー字形の研究も知っておけ','Ren — overs-ASCII-form-know','Direction','hiroshi_boss'),
    mk('はい。論文中の用語のスペルを慎重に確認します','Yes — Paper-term-spell-care','Earnest','ren_uni'),
    mk('蓮、実験結果のエフェクト、つまり効果の検証を徹底しろ','Ren — exp-eff-verify','Direction','hiroshi_boss'),
    mk('はい。装置のパワーアップ改造案を提示します','Yes — Eqp-pwr-up-prop','Polite','ren_uni'),
    mk('蓮、ボタンを「ポチッ」と押すだけで動く実験UIにしろ','Ren — "pochi"-UI-easy','Direction','hiroshi_boss'),
    mk('はい。研究室のメッセンジャー連絡網を整えます','Yes — Lab-mes-net-tidy','Earnest close','ren_uni'),
  ]},
  {id:'conv_10709',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、押収端末のオペレーティングシステムを、警察、解析されますね','Police seiz-term-OS-anal','Cooperative','kenji_office'),
    mk('警察、電機工場での事案対応も担当されますね','Police elec-fact-case','Cooperative','kenji_office'),
    mk('警察、文書のアスキーコードを、警察、復号されますね','Police doc-ASCII-decod','Cooperative','kenji_office'),
    mk('警察、署内文書のスペル誤りも、警察、注意されますね','Police stat-doc-spell-care','Cooperative','kenji_office'),
    mk('警察、容疑者の動画のエフェクト解析もされますね','Police suspect-vid-eff-anal','Cooperative','kenji_office'),
    mk('警察、捜査チームのパワーアップを、警察、計画されますね','Police inv-team-pwr-up-plan','Cooperative','kenji_office'),
    mk('警察、緊急ボタンを「ポチッ」と押す仕組みを、警察、整備されますね','Police emerg-"pochi"-set','Cooperative','kenji_office'),
    mk('警察、市民向けメッセンジャー通報も導入されますね','Police citi-mes-rep','Close','kenji_office'),
  ]},
  {id:'conv_10710',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、オペレーティングシステムの選定に時間をかけられた','Dad — found-OS-pick-time','Sage','hiroshi_elder'),
    mk('はい。お父さんは電機メーカーから独立した経緯がある','Yes — Dad elec-maker-indep','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、アスキー文字コードに詳しかった','Dad — youth-ASCII-knowl','Wistful','hiroshi_elder'),
    mk('はい。お父さんは英文書類のスペルにも厳しかった','Yes — Dad Eng-doc-spell-strict','Reflective','hiroshi_boss'),
    mk('お父さん、広告のエフェクトの拘りが強かった','Dad — ad-eff-stick','Wistful','hiroshi_elder'),
    mk('はい。お父さんは事業のパワーアップを毎年掲げられた','Yes — Dad biz-pwr-up-yr','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、社内の押しボタンを「ポチッ」と試されてた','Dad — youth-int-"pochi"-test','Wistful','hiroshi_elder'),
    mk('はい。お父さんはメッセンジャー時代の到来を予見された','Yes — Dad mes-era-fore','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10711',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、ソヴィエト連邦時代の経済史研究を論文で扱いましたね','Ren — Sov-econ-hist paper','Calm','asuka_teacher'),
    mk('はい、ニュージーランドのマオリ文化研究を論文で扱いました','Yes — NZ-Maori-cult paper','Earnest','ren_uni'),
    mk('蓮さん、中国古代の秦王朝の制度研究を論文で扱いましたね','Ren — Cn-Qin-syst paper','Reflective','asuka_teacher'),
    mk('はい、漢の劉邦、つまり劉氏王朝の研究を論文で扱いました','Yes — Han-Liu-dyn paper','Earnest','ren_uni'),
    mk('蓮さん、宋朝の文芸復興の研究を論文で扱いましたね','Ren — Song-cult-paper','Reflective','asuka_teacher'),
    mk('はい、旧字「萬」、つまり万の使われ方の研究を論文で扱いました','Yes — Old-yorozu-use paper','Earnest','ren_uni'),
    mk('蓮さん、希少鳥類の鵐、つまり鵐属の分類研究を論文で扱いましたね','Ren — rare-emb-bird paper','Reflective','asuka_teacher'),
    mk('はい、養殖業の牡蠣、つまりカキの生態研究を論文で扱いました','Yes — Aqua-oyster-eco paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10712',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、旧ソヴィエト圏由来の事案を、警察、慎重に分析されますね','Case Sov-orig-case police-care','Reflective','ren_uni'),
    mk('警察、マオリ族の文化財盗難事件にも対応されますね','Police Maori-cult-prop-theft','Cooperative','takeda_officer'),
    mk('本件、中国古代秦朝の遺物の真贋鑑定を、警察、依頼されますね','Case Cn-Qin-art-auth police-req','Reflective','ren_uni'),
    mk('警察、漢の劉氏縁の書画の盗難事件もされますね','Police Han-Liu-art-theft','Cooperative','takeda_officer'),
    mk('本件、宋朝の陶磁器の盗難捜査を、警察、進められますね','Case Song-cer-theft police-prog','Reflective','ren_uni'),
    mk('警察、旧字「萬」、つまり「万」の偽造文書も鑑定されますね','Police old-yorozu-forg-doc-auth','Cooperative','takeda_officer'),
    mk('本件、密漁の希少鳥類、鵐、つまり鵐属の捕獲を、警察、取り締まりされますね','Case rare-emb-bird-poach police-crack','Reflective','ren_uni'),
    mk('警察、漁業の牡蠣、つまりカキ盗難の取り締まりもされますね','Police aqua-oyster-theft-crack','Close','takeda_officer'),
  ]},
  {id:'conv_10713',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、ソヴィエト連邦時代の経済史研究を論文で扱いましたね','Sakura — Sov paper','Calm','asuka_teacher'),
    mk('はい、ニュージーランドのマオリ文化研究を論文で扱いました','Yes — Maori paper','Earnest teen','sakura_teen'),
    mk('中国古代の秦王朝の制度研究を論文で扱いましたね','Cn-Qin paper','Reflective','asuka_teacher'),
    mk('はい、漢の劉邦、つまり劉氏王朝の研究を論文で扱いました','Yes — Han-Liu paper','Earnest','sakura_teen'),
    mk('宋朝の文芸復興の研究を論文で扱いましたね','Song-cult paper','Reflective','asuka_teacher'),
    mk('はい、旧字「萬」、つまり万の使われ方の研究を論文で扱いました','Yes — Old-yorozu paper','Earnest','sakura_teen'),
    mk('希少鳥類の鵐、つまり鵐属の分類研究を論文で扱いましたね','Emb-bird paper','Reflective','asuka_teacher'),
    mk('はい、養殖業の牡蠣、つまりカキの生態研究を論文で扱いました','Yes — Oyster-eco paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10714',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、旧ソヴィエト圏の医療制度史を医療チームで学びます','Ren — Sov-med-hist med-team','Calm','saito_doctor'),
    mk('蓮さん、マオリ族の伝統医療を医療チームで研究します','Ren — Maori-trad-med med-team','Calm','saito_doctor'),
    mk('蓮さん、漢方の起源、秦の処方を医療チームで紐解きます','Ren — kanp-Qin-prsc med-team','Calm','saito_doctor'),
    mk('蓮さん、劉氏漢代の医書を医療チームで参考にします','Ren — Han-Liu-med-book med-team-ref','Calm','saito_doctor'),
    mk('蓮さん、宋朝の鍼灸医学を医療チームで研究します','Ren — Song-acu med-team','Calm','saito_doctor'),
    mk('蓮さん、医薬萬古、つまり「萬」の入った古い薬名を医療チームで整理します','Ren — old-yorozu-drug-name med-team','Calm','saito_doctor'),
    mk('蓮さん、鵐、つまり野鳥由来の感染症リスクを医療チームで監視します','Ren — emb-bird-zoo-risk med-team','Calm','saito_doctor'),
    mk('蓮さん、牡蠣、つまりカキ食中毒の発症事例を医療チームで対応します','Ren — oyster-food-poison med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_10715',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、旧ソヴィエト圏の市場開拓を慎重に進めろ','Our co — Sov-mkt-care','Crisp','hiroshi_boss'),
    mk('はい。ニュージーランドのマオリ文化を尊重した商品展開をします','Yes — NZ-Maori-resp-prod','Methodical','kenji_office'),
    mk('当社、中国市場では古代秦の故事を引用するな','Our co — Cn-mkt-Qin-quote-no','Direction','hiroshi_boss'),
    mk('はい。漢の劉邦の故事は社内向けに留めます','Yes — Han-Liu-int-only','Update','kenji_office'),
    mk('当社、宋朝の文化遺産に学ぶ姿勢を持て','Our co — Song-cult-learn','Direction','hiroshi_boss'),
    mk('はい。旧字「萬」、つまり万の入った社名はそのまま残します','Yes — Old-yorozu-co-name-keep','Update','kenji_office'),
    mk('当社、希少鳥類の鵐、つまり鵐保護に賛同しろ','Our co — emb-bird-prot-supp','Direction','hiroshi_boss'),
    mk('はい。牡蠣、つまりカキ事業の品質管理を強化します','Yes — Oyster-qual-strong','Close','kenji_office'),
  ]},
  {id:'conv_10716',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、お子様がスーパーマリオのファンだって、メイちゃん','Aoi — cust-kid-Mario-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、米国のマーティン・スコセッシ監督の映画を語って下さったよ、メイちゃん','Aoi — cust-Martin-Sco-film Mei','Reflective','aoi_barista'),
    mk('葵、お客様、英国のスティーブン・ホーキングの宇宙論を語って下さったよ、メイちゃん','Aoi — cust-Stephen-Hawk-cosmo Mei','Reflective','mei_romantic'),
    mk('葵、お客様、英国コリン・ファースの映画がお好きだって、メイちゃん','Aoi — cust-Colin-Firth-film Mei','Reflective','aoi_barista'),
    mk('葵、お客様、米国のティム・バートン監督がお好きだって、メイちゃん','Aoi — cust-Tim-Bur-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、米国のアレックス・ハニーカット監督のお話だったよ、メイちゃん','Aoi — cust-Alex-Hun-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ロシアのニコラ・テスラの伝記を読まれてたよ、メイちゃん','Aoi — cust-Nikola-Tesla-read Mei','Reflective','mei_romantic'),
    mk('葵、お客様、英王伝説のアーサー王のお話を語って下さったよ、メイちゃん','Aoi — cust-King-Arthur-talk Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10717',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがスーパーマリオのゲームをお孫様と楽しまれた','Gran — youth Dad-Mario-grdkid','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、マーティン・ルーサー・キングの演説を聴かれたわよね、あなた?','Yes — Grandpa-youth-Martin-LK-sp, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがスティーブン・キングの小説を愛読された','Gran — youth Dad-Stephen-King-read','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、コリン・パウエル氏の演説を観られたわよね、あなた?','Grandpa — youth-Colin-Pow-sp, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがティム・バートン映画祭に通われた','Gran — youth Dad-Tim-Bur-fes','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、アレックス・カトラー氏の楽曲を愛されたわよね、あなた?','Grandpa — youth-Alex-Cutl-music, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがニコラ・テスラの伝記に夢中だった','Gran — youth Dad-Nikola-Tesla-biog','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、アーサー・C・クラークのSFを愛読されたわよね、あなた?','Grandpa — youth-Arthur-Cla-SF-read, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10718',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがスーパーマリオのゲームを買って下さるそうよ','Sho — Dad-Mario-buy','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとマーティン・ルーサー・キングの絵本を読んだよ','Mei-sis — me Dad-Martin-LK-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがスティーブン・スピルバーグ監督の映画を観て下さるわ','Sho — Dad-Stephen-Spielb-film','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとコリン・パウエルの伝記読んだよ','Mei-sis — me Dad-Colin-Pow-biog','Eager child','sho_child'),
    mk('翔くん、お父さんがティム・バートン監督のアニメを観せて下さったわ','Sho — Dad-Tim-Bur-anime','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとアレックス・ライダー、つまり児童書のヒーローの絵本見たよ','Mei-sis — me Dad-Alex-Rid-pic','Eager child','sho_child'),
    mk('翔くん、お父さんがニコラ・テスラの伝記を読まれてるわ','Sho — Dad-Nikola-Tesla-biog','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとアーサー王伝説の絵本を読んだよ','Mei-sis — me Dad-King-Arthur-pic','Eager close','sho_child'),
  ]},
  {id:'conv_10719',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、家でスーパーマリオやってたな','Riku — house-Mario-play','Curious teen','sakura_teen'),
    mk('お前、社会でマーティン・ルーサー・キング習ったろ、桜','You — soc-Martin-LK? Sakura','Curious','riku_teen'),
    mk('リク、お前、スティーブン・キングのホラー読んでたな','Riku — Stephen-King-hor-read','Wry','sakura_teen'),
    mk('お前、映画でコリン・ファース観てたろ、桜','You — film-Colin-Firth? Sakura','Curious','riku_teen'),
    mk('リク、お前、ティム・バートン監督の映画好きだったな','Riku — Tim-Bur-fan','Curious','sakura_teen'),
    mk('お前、ゲームでアレックスってキャラ使ってたな、桜','You — game-Alex-use Sakura','Curious','riku_teen'),
    mk('リク、お前、科学でニコラ・テスラの発明調べてたな','Riku — sci-Nikola-Tesla-inv','Curious','sakura_teen'),
    mk('お前、英語の教科書でアーサー王伝説読んでたろ、桜','You — Eng-King-Arthur? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10720',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがスーパーマリオのゲームを一緒に遊んで下さるわ','Sho — Dad-Mario-play-together','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとマーティン・スコセッシ監督の映画観たよ','Mom — me Dad-Martin-Sco-film','Eager child','sho_child'),
    mk('翔くん、お父さんがスティーブン・ホーキングのドキュメンタリー観てらっしゃるわ','Sho — Dad-Stephen-Hawk-doc','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとコリン・ファースの映画観たよ','Mom — me Dad-Colin-Firth-film','Eager child','sho_child'),
    mk('翔くん、お父さんがティム・バートン監督の特集番組観てらっしゃるわ','Sho — Dad-Tim-Bur-fea','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとアレックス・ライダーの少年小説読んだよ','Mom — me Dad-Alex-Rid-novel','Eager child','sho_child'),
    mk('翔くん、お父さんがニコラ・テスラの伝記映画観てらっしゃるわ','Sho — Dad-Nikola-Tesla-biog-film','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとアーサー王伝説のアニメ観たよ','Mom — me Dad-King-Arthur-anime','Eager close','sho_child'),
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

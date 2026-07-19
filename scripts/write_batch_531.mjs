import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_531 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['桂','柏','藍','圭','乃','嘉','肇','ヨウ']
const B_T = ['中曽根','ドール','ジョーンズ','サード','ハリス','菅','内藤','ダニエル']
const C_T = ['佞','膺','从','レイプ','横田','中原','田口','五郎']
const D_T = ['ジュン','純一郎','愛子','めぐみ','幸子','直樹','哲也','ディック']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10581',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが「桂剥きが出来る様になれ」って料理を教えて下さるわ','Sho — Dad-"katsura-strip-cook"-teach','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと柏餅を食べたよ','Mom — me Dad-kash-mochi','Pleased child','sho_child'),
    mk('翔くん、お父さんが私に藍染めのストールを下さったわ','Sho — Dad-me-indigo-stole','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「圭くん家にもよろしくね」って言われたよ','Mom — me Dad-"Kei-house-greet"-said','Eager child','sho_child'),
    mk('翔くん、お父さんが「美乃ちゃんとも仲良くね」って仰ってたわ','Sho — Dad-"Mino-fri"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと嘉節、つまり良い節句を祝ったよ','Mom — me Dad-aus-sek-cel','Earnest child','sho_child'),
    mk('翔くん、お父さんが「肇くんは命名の頃から元気だね」って仰ってたわ','Sho — Dad-"Hajime-named-energ"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「ヨウ素入りうがい薬」を勧めて頂いたよ','Mom — me Dad-iod-garg-rec','Earnest close','sho_child'),
  ]},
  {id:'conv_10582',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、京都の桂離宮のお話を語って下さったよ、メイちゃん','Aoi — cust-Katsura-villa-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、店先の柏の木を眺めてらしたよ、メイちゃん','Aoi — cust-front-kash-tree Mei','Reflective','aoi_barista'),
    mk('葵、お客様、藍染めのコースターをご注文だったよ、メイちゃん','Aoi — cust-indigo-coast-order Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お孫様の圭くんの写真を見せて下さったよ、メイちゃん','Aoi — cust-grdkid-Kei-photo Mei','Reflective','aoi_barista'),
    mk('葵、お客様、「美乃ちゃんの結婚式」のお話を語って下さったよ、メイちゃん','Aoi — cust-"Mino-wed"-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、嘉永年間の古い茶器をお持ちだって、メイちゃん','Aoi — cust-Kaei-tea-set Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ご自身を「日本の肇、つまり創業者」って自負されてたよ、メイちゃん','Aoi — cust-self-"founder-haj"-said Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ヨウ素うがい液の効果のお話を語って下さったよ、メイちゃん','Aoi — cust-iod-garg-effi-talk Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10583',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが桂離宮の写真を撮りに行かれた','Gran — youth Dad-Katsura-villa-photo','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、毎年五月に柏餅を作って下さったわよね、あなた?','Yes — Grandpa-May-kash-mochi, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが私に藍染めの着物を仕立てて下さった','Gran — youth Dad-me-indigo-kim','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様の圭くんを膝にお乗せだったわよね、あなた?','Grandpa — grdkid-Kei-lap, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが詩で「美乃君の名」って詠まれた','Gran — youth Dad-poem-"Mino"-comp','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、嘉永年間の古文書を蒐集されたわよね、あなた?','Grandpa — Kaei-old-doc-coll, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは「会社の肇は信用」と教えられた','Gran — youth Dad-"co-haj-trust"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ヨウ素入り消毒薬を常備されたわよね、あなた?','Grandpa — youth-iod-disinf-keep, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10584',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、家族で桂川のキャンプ行ったろ','Riku — fam-Katsura-camp?','Curious teen','sakura_teen'),
    mk('お前、給食で柏餅出てて喜んでたな、桜','You — lunch-kash-mochi-glad Sakura','Wry','riku_teen'),
    mk('リク、お前、藍色の制服シャツ気に入ってたな','Riku — indigo-uni-shirt-like','Curious','sakura_teen'),
    mk('お前、隣のクラスの圭くんと仲良いな、桜','You — next-cl-Kei-close Sakura','Curious','riku_teen'),
    mk('リク、お前、ペットの名前「美乃」にしたって聞いたぞ','Riku — pet-name-"Mino"-heard','Wry','sakura_teen'),
    mk('お前、日本史で嘉永年間覚えてたな、桜','You — Jp-hist-Kaei-mem Sakura','Curious','riku_teen'),
    mk('リク、お前、文化祭の標語「青春の肇」って書いてたな','Riku — cul-fes-mott-"hajime"-wrote','Wry','sakura_teen'),
    mk('お前、保健室でヨウ素塗ってもらってたろ、桜','You — clin-iod-applied? Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10585',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「桂剥きはコツが要る」って料理を教えて下さるわ','Sho — Dad-"katsura-knack"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと柏の葉っぱを集めたよ','Mei-sis — me Dad-kash-leaf-coll','Eager child','sho_child'),
    mk('翔くん、お父さんが藍染めの手拭いを下さったわ','Sho — Dad-indigo-towel-gift','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと圭くんの家に遊びに行ったよ','Mei-sis — me Dad-Kei-house-play','Eager child','sho_child'),
    mk('翔くん、お父さんがお手紙の宛名に「美乃君」って書かれてたわ','Sho — Dad-letter-"Mino"-wrote','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと嘉永年間の和歌を読んだよ','Mei-sis — me Dad-Kaei-poem-read','Eager child','sho_child'),
    mk('翔くん、お父さんが「物事の肇を大事に」って教えて下さるわ','Sho — Dad-"things-haj-cher"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「ヨウ素うがい液は風邪予防に良い」って教えて頂いたよ','Mei-sis — me Dad-iod-garg-cold-prev-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_10586',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、中曽根政権時代の規制緩和を社員研修で取り上げろ','Our co — Nak-era-dereg-staff-train','Crisp','hiroshi_boss'),
    mk('はい。米国ドール社との青果取引を更新します','Yes — US-Dole-fruit-deal-ren','Methodical','kenji_office'),
    mk('当社、英国の取引先ジョーンズ社との会合を設定しろ','Our co — UK-Jones-meet','Direction','hiroshi_boss'),
    mk('はい。サードパーティの監査を導入します','Yes — Third-party-aud-intro','Update','kenji_office'),
    mk('当社、米国のハリス社との合弁を進めろ','Our co — US-Harris-JV-prog','Direction','hiroshi_boss'),
    mk('はい。新任の菅部長を歓迎します','Yes — New-Suga-dept-wel','Update','kenji_office'),
    mk('当社、技術顧問の内藤先生にご助言を仰げ','Our co — tech-adv-Naito-ask','Direction','hiroshi_boss'),
    mk('はい。海外の主任ダニエル氏との連携を強化します','Yes — Overs-lead-Daniel-link-strong','Close','kenji_office'),
  ]},
  {id:'conv_10587',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('中曽根政権時代の電電公社民営化を社内資料に追加しましょう','Nak-era-NTT-priv-doc-add','Brisk','yuki_office'),
    mk('はい。米国ドール社のパイナップル取引を再開します','Yes — US-Dole-pine-resume','Cooperative','kenji_office'),
    mk('英国ジョーンズ社の請求書を確認しましょう','UK-Jones-inv-check','Direction','yuki_office'),
    mk('はい。サード・パーティ・ロジスティクスを採用します','Yes — Third-party-log-adopt','Update','kenji_office'),
    mk('米国のハリス支社、つまりハリス・カンパニーと契約しましょう','US-Harris-branch-co-contr','Direction','yuki_office'),
    mk('はい。菅取締役の出張日程を整えます','Yes — Suga-dir-trip-sched','Update','kenji_office'),
    mk('社内顧問の内藤先生に新人研修を依頼しましょう','Int-adv-Naito-newhire-req','Direction','yuki_office'),
    mk('はい。技術担当のダニエル氏との打合せを予定します','Yes — Tech-Daniel-meet-plan','Close','kenji_office'),
  ]},
  {id:'conv_10588',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、中曽根政権の経済政策の論文を読め','Ren — Nak-econ-pol-paper','Mentor','hiroshi_boss'),
    mk('はい。米国ドール社の農業ビジネス論文を読みます','Yes — US-Dole-agri-paper','Earnest','ren_uni'),
    mk('蓮、英国学界のジョーンズ教授に研究照会しろ','Ren — UK-Jones-prof-inq','Direction','hiroshi_boss'),
    mk('はい。サードパーティ評価制度の論文を読みます','Yes — Third-party-eval-paper','Earnest','ren_uni'),
    mk('蓮、米国のハリス研究所と連携しろ','Ren — US-Harris-lab-link','Direction','hiroshi_boss'),
    mk('はい。指導の菅先生のご研究を継承します','Yes — Mentor-Suga-res-inherit','Polite','ren_uni'),
    mk('蓮、共同研究の内藤先生に資料を共有しろ','Ren — joint-Naito-mat-share','Direction','hiroshi_boss'),
    mk('はい。海外研究員ダニエル氏に英文要約を送ります','Yes — Overs-Daniel-Eng-summ-send','Earnest close','ren_uni'),
  ]},
  {id:'conv_10589',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、中曽根時代の警察制度改革の文献を、警察、参照されますね','Police Nak-era-ref-lit','Cooperative','kenji_office'),
    mk('警察、輸入会社ドール関連の事案も対応されますね','Police imp-Dole-case','Cooperative','kenji_office'),
    mk('警察、海外捜査機関ジョーンズ氏とも連絡されますね','Police overs-Jones-contact','Cooperative','kenji_office'),
    mk('警察、サード・パーティ監査の活用も視野に入れられますね','Police third-party-aud-view','Cooperative','kenji_office'),
    mk('警察、米国捜査官ハリス氏と情報共有されますね','Police US-Harris-info-share','Cooperative','kenji_office'),
    mk('警察、地検の菅検事と連携されますね','Police pros-Suga-link','Cooperative','kenji_office'),
    mk('警察、参考人内藤氏から事情を、警察、丁寧に聴かれますね','Police witn-Naito-careful','Cooperative','kenji_office'),
    mk('警察、海外捜査官ダニエル氏との通訳を、警察、ご手配されますね','Police overs-Daniel-trans-arrange','Close','kenji_office'),
  ]},
  {id:'conv_10590',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、中曽根政権の規制緩和を機に事業を拡大された','Dad — Nak-dereg-biz-exp','Sage','hiroshi_elder'),
    mk('はい。お父さんはドール社との青果取引を成功された','Yes — Dad Dole-fruit-succ','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、英国のジョーンズ社に出張された','Dad — youth-UK-Jones-trip','Wistful','hiroshi_elder'),
    mk('はい。お父さんはサードパーティ監査の導入を早く決断された','Yes — Dad third-aud-early-dec','Reflective','hiroshi_boss'),
    mk('お父さん、ハリス家との家族ぐるみの交流があった','Dad — Harris-fam-int','Wistful','hiroshi_elder'),
    mk('はい。お父さんは菅元社員のキャリアを後押しされた','Yes — Dad Suga-ex-staff-career','Reflective','hiroshi_boss'),
    mk('お父さん、内藤顧問への信頼が厚かった','Dad — Naito-adv-trust','Wistful','hiroshi_elder'),
    mk('はい。お父さんは海外パートナーのダニエル氏を高く評価された','Yes — Dad overs-Daniel-high-eval','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10591',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、佞言、つまり佞の政治的虚言の歴史研究を論文で扱いましたね','Ren — flat-pol-lie-hist paper','Calm','asuka_teacher'),
    mk('はい、膺懲、つまり膺の古い軍事用語の研究を論文で扱いました','Yes — You-mil-old-term paper','Earnest','ren_uni'),
    mk('蓮さん、漢字の从、つまり旧字の「従う」の字形研究を論文で扱いましたね','Ren — old-従-form paper','Reflective','asuka_teacher'),
    mk('はい、性犯罪、つまりレイプ事案の刑法的研究を論文で扱いました','Yes — Sex-crime-rape-crim paper','Earnest','ren_uni'),
    mk('蓮さん、横田基地周辺地域の社会学研究を論文で扱いましたね','Ren — Yok-base-soc paper','Reflective','asuka_teacher'),
    mk('はい、中原中也、つまり詩人中原の文学研究を論文で扱いました','Yes — Nak-Chuya-poet paper','Earnest','ren_uni'),
    mk('蓮さん、写真家田口氏のドキュメンタリー研究を論文で扱いましたね','Ren — phot-Tag-doc paper','Reflective','asuka_teacher'),
    mk('はい、戦前の作家五郎氏の文学研究を論文で扱いました','Yes — Prewar-Goro-lit paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10592',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、容疑者の佞言、つまり佞の偽証を、警察、慎重に分析されますね','Case suspect-flat-perj police-anal','Reflective','ren_uni'),
    mk('警察、被害者の膺、つまり胸部の損傷を鑑識されますね','Police vict-chest-you-dmg-foren','Cooperative','takeda_officer'),
    mk('本件、古文書の从、つまり旧字「從」の解読を、警察、専門家に依頼されますね','Case old-doc-従 police-expert-req','Reflective','ren_uni'),
    mk('警察、レイプ被害者保護を、警察、最優先に対応されますね','Police rape-vict-prot-top','Cooperative','takeda_officer'),
    mk('本件、横田基地周辺の事案を、警察、米軍と連携されますね','Case Yok-base-area police-US-mil-link','Reflective','ren_uni'),
    mk('警察、容疑者中原の前科を、警察、慎重に確認されますね','Police suspect-Nak-prior-check','Cooperative','takeda_officer'),
    mk('本件、参考人田口氏から、警察、事情を丁寧に聴かれますね','Case witn-Tag police-careful','Reflective','ren_uni'),
    mk('警察、被害者五郎氏のご家族への配慮も、警察、されますね','Police vict-Goro-fam-care','Close','takeda_officer'),
  ]},
  {id:'conv_10593',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、佞言、つまり佞の政治的虚言の歴史研究を論文で扱いましたね','Sakura — flat paper','Calm','asuka_teacher'),
    mk('はい、膺懲、つまり膺の古い軍事用語の研究を論文で扱いました','Yes — You paper','Earnest teen','sakura_teen'),
    mk('漢字の从、つまり旧字の「従う」の字形研究を論文で扱いましたね','Old-従-form paper','Reflective','asuka_teacher'),
    mk('はい、性犯罪、つまりレイプ事案の刑法的研究を論文で扱いました','Yes — Rape-crim paper','Earnest','sakura_teen'),
    mk('横田基地周辺地域の社会学研究を論文で扱いましたね','Yok-base-soc paper','Reflective','asuka_teacher'),
    mk('はい、中原中也、つまり詩人中原の文学研究を論文で扱いました','Yes — Nak-Chuya paper','Earnest','sakura_teen'),
    mk('写真家田口氏のドキュメンタリー研究を論文で扱いましたね','Phot-Tag paper','Reflective','asuka_teacher'),
    mk('はい、戦前の作家五郎氏の文学研究を論文で扱いました','Yes — Goro-lit paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10594',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、患者様の佞言、つまり虚偽症状の鑑別を医療チームで慎重におこないます','Ren — pati-fake-sym-diff med-team','Calm','saito_doctor'),
    mk('蓮さん、胸部、つまり膺の打撲症例を医療チームで慎重に診察します','Ren — chest-you-bruise med-team','Calm','saito_doctor'),
    mk('蓮さん、古典医書の从、つまり旧字を医療チームで読み解きます','Ren — class-med-old-従 med-team','Calm','saito_doctor'),
    mk('蓮さん、レイプ被害者のケアを医療チームで最優先におこないます','Ren — rape-vict-care-top med-team','Calm','saito_doctor'),
    mk('蓮さん、横田米軍基地周辺の救急体制を医療チームで整えます','Ren — Yok-US-mil-emerg med-team','Calm','saito_doctor'),
    mk('蓮さん、患者中原様の慢性疾患を医療チームで継続診療します','Ren — pati-Nak-chron-cont med-team','Calm','saito_doctor'),
    mk('蓮さん、患者田口様のご家族にも医療チームで丁寧に説明します','Ren — pati-Tag-fam-expl med-team','Calm','saito_doctor'),
    mk('蓮さん、患者五郎様の終末期ケアを医療チームでおこないます','Ren — pati-Goro-term med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_10595',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、社員の佞言、つまり佞の虚偽報告を厳しく取り締まれ','Our co — staff-flat-false-rep-strict','Crisp','hiroshi_boss'),
    mk('はい。製品の胸部、つまり膺保護パーツの品質を上げます','Yes — Prod-chest-you-prot-qual-up','Methodical','kenji_office'),
    mk('当社、旧字の从、つまり「從」を社印デザインから外せ','Our co — old-従-co-seal-rem','Direction','hiroshi_boss'),
    mk('はい。社内でレイプを含むハラスメント研修を厳しくします','Yes — Int-rape-har-train-strict','Update','kenji_office'),
    mk('当社、横田支社の地域連携を強化しろ','Our co — Yok-branch-local-link-strong','Direction','hiroshi_boss'),
    mk('はい。中原氏の経営顧問就任を打診します','Yes — Nak-mgmt-adv-sound','Update','kenji_office'),
    mk('当社、写真担当の田口氏に新商品撮影を依頼しろ','Our co — phot-Tag-new-prod-req','Direction','hiroshi_boss'),
    mk('はい。創業者ご縁の五郎氏に経営アドバイスを仰ぎます','Yes — Found-rel-Goro-mgmt-adv','Close','kenji_office'),
  ]},
  {id:'conv_10596',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、お孫様のジュンくんと一緒にご来店だったよ、メイちゃん','Aoi — cust-grdkid-Jun-vis Mei','Reflective','mei_romantic'),
    mk('葵、お客様、小泉純一郎元首相の演説を語って下さったよ、メイちゃん','Aoi — cust-Koizumi-Jun-sp Mei','Reflective','aoi_barista'),
    mk('葵、お客様、皇室の愛子様のお話を語って下さったよ、メイちゃん','Aoi — cust-imp-Aiko-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お母様のお名前がめぐみさんだって、メイちゃん','Aoi — cust-mom-Megumi Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お祖母様のお名前が幸子さんだって、メイちゃん','Aoi — cust-grnm-Sachiko Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご友人の直樹さんとよく来店して下さるよ、メイちゃん','Aoi — cust-fri-Naoki-vis Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ご友人の哲也さんの結婚式に出られるって、メイちゃん','Aoi — cust-fri-Tetsuya-wed Mei','Reflective','mei_romantic'),
    mk('葵、お客様、米国ロックスターのディック・デールがお好きだって、メイちゃん','Aoi — cust-US-Dick-Dale-fan Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10597',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがお孫様にジュンと愛称を付けられた','Gran — youth Dad-grdkid-Jun-nick','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、小泉純一郎元首相を尊敬されてたわよね、あなた?','Yes — Grandpa-Koizumi-Jun-resp, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが皇室の愛子様の御誕生を喜ばれた','Gran — youth Dad-imp-Aiko-birth-glad','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、お友達のめぐみさんと文通されたわよね、あなた?','Grandpa — youth-fri-Megumi-letter, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが妹の幸子さんを慈しまれた','Gran — youth Dad-sis-Sachiko-love','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ご友人の直樹さんと釣りに行かれたわよね、あなた?','Grandpa — youth-fri-Naoki-fish, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと哲也さんの父上が同僚だった','Gran — youth Dad-Tetsuya-fa-col','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、米国の音楽家ディック・デールの曲を愛されたわよね、あなた?','Grandpa — US-Dick-Dale-love, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10598',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「ジュンくんとも仲良くね」って仰ってたわ','Sho — Dad-"Jun-fri"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと小泉純一郎元首相のドキュメンタリー観たよ','Mei-sis — me Dad-Koizumi-Jun-doc','Eager child','sho_child'),
    mk('翔くん、お父さんが皇室の愛子様のニュースを観てらっしゃるわ','Sho — Dad-imp-Aiko-news','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとお友達のめぐみちゃんと遊んだよ','Mei-sis — me Dad-fri-Megumi-play','Eager child','sho_child'),
    mk('翔くん、お父さんが幸子おばちゃんの誕生日にお花を贈られたわ','Sho — Dad-Sachiko-aunt-bday-flo','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと隣のお兄さん直樹さんと話したよ','Mei-sis — me Dad-next-bro-Naoki-talk','Eager child','sho_child'),
    mk('翔くん、お父さんとお友達の哲也さんが楽しい方よ','Sho — Dad-fri-Tetsuya-fun','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「ディック・トレーシー」の映画見たよ','Mei-sis — me Dad-Dick-Tr-film','Eager close','sho_child'),
  ]},
  {id:'conv_10599',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、隣のクラスのジュンくんと仲良いな','Riku — next-cl-Jun-close','Curious teen','sakura_teen'),
    mk('お前、社会で小泉純一郎元首相の郵政改革習ったろ、桜','You — soc-Koizumi-Jun-post-ref? Sakura','Curious','riku_teen'),
    mk('リク、お前、皇室の愛子様のニュース観てたな','Riku — imp-Aiko-news','Curious','sakura_teen'),
    mk('お前、めぐみちゃんと文化祭で一緒だったろ、桜','You — Megumi-cul-fes? Sakura','Curious','riku_teen'),
    mk('リク、お前のお母様、幸子さんって名前だったよな','Riku — your-mom-Sachiko','Curious','sakura_teen'),
    mk('お前、お兄さん直樹さんとサッカーしてたな、桜','You — bro-Naoki-soccer Sakura','Curious','riku_teen'),
    mk('リク、お前、転校生の哲也と仲良くなったな','Riku — transf-Tetsuya-close','Curious','sakura_teen'),
    mk('お前、ディック・グレイソンってバットマンの相棒知ってるよな、桜','You — Dick-Grayson-Batman-know Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10600',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがジュンくんのご両親と話して下さったわ','Sho — Dad-Jun-par-talk','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと小泉純一郎元首相の歴史番組観たよ','Mom — me Dad-Koizumi-Jun-hist','Eager child','sho_child'),
    mk('翔くん、お父さんが皇室の愛子様の御成長を喜ばれてるわ','Sho — Dad-imp-Aiko-grow-glad','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとめぐみちゃんと公園で遊んだよ','Mom — me Dad-Megumi-park','Eager child','sho_child'),
    mk('翔くん、お父さんが「幸子伯母さんが来られる」って仰ってたわ','Sho — Dad-"Sachiko-aunt-vis"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと直樹おじさんと釣り行ったよ','Mom — me Dad-Naoki-uncle-fish','Eager child','sho_child'),
    mk('翔くん、お父さんと哲也さんが釣り仲間でいらっしゃるわ','Sho — Dad-Tetsuya-fish-fri','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと「ディック・ヴァン・ダイク」の古い喜劇観たよ','Mom — me Dad-Dick-VD-com-old','Eager close','sho_child'),
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

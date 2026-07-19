import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_548 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['智子','秀夫','美香','花園','小人','夫君','姐','追い出し']
const B_T = ['長田','井口','小西','宮澤','田辺','塩川','児玉','本間']
const C_T = ['小早川','クルド','佐渡','サハリン','対馬','府警','カーネル','オナニー']
const D_T = ['天神','芦屋','藤岡','萩原','フィジカル','エキサイトブログ','ハンナ','ケインズ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10921',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがご友人の智子さんとお茶されてたわ','Sho — Dad-fri-Tomoko-tea','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんのお友達の秀夫おじさんに会ったよ','Mom — me Dad-fri-Hideo-uncle-met','Pleased child','sho_child'),
    mk('翔くん、お父さんが「美香ちゃんが結婚されたわ」って語って下さったわ','Sho — Dad-"Mika-marr"-talk','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと近所の花園に散歩に行ったよ','Mom — me Dad-flo-gard-walk','Pleased child','sho_child'),
    mk('翔くん、お父さんが「白雪姫の小人たちの絵本を読んで下さる」って仰ってたわ','Sho — Dad-"Snow-dwarf-pic"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんが智子さんを「夫君として支える」って仰ってたよ','Mom — Dad-"Tomoko-husband-supp"-said','Earnest child','sho_child'),
    mk('翔くん、お父さんが「姐さん、つまりお姉さんは頼れる人」と仰ってたわ','Sho — Dad-"older-sis-rely"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと友達の追い出しコンパを企画したよ','Mom — me Dad-fri-fwl-party-plan','Eager close','sho_child'),
  ]},
  {id:'conv_10922',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ご友人の智子さんとお茶されてたよ、メイちゃん','Aoi — cust-fri-Tomoko-tea Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お父様のお名前が秀夫さんだって、メイちゃん','Aoi — cust-fa-Hideo Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ご友人の美香さんと打ち合わせされてたよ、メイちゃん','Aoi — cust-fri-Mika-meet Mei','Reflective','mei_romantic'),
    mk('葵、お客様、花園を散策してから来店されたって、メイちゃん','Aoi — cust-flo-gard-walk-vis Mei','Reflective','aoi_barista'),
    mk('葵、お客様、漫画の小人キャラに詳しいって、メイちゃん','Aoi — cust-mng-dwarf-char-knowl Mei','Reflective','mei_romantic'),
    mk('葵、お客様、「夫君と一緒に支え合って生きる」って仰ってたよ、メイちゃん','Aoi — cust-"husb-supp"-said Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お姉様、つまり姐さんを頼ってらっしゃるって、メイちゃん','Aoi — cust-older-sis-rely Mei','Reflective','mei_romantic'),
    mk('葵、お客様、退職者の追い出し記念会を企画されてるって、メイちゃん','Aoi — cust-retir-fwl-plan Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10923',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが友人の智子さんと文通された','Gran — youth Dad-fri-Tomoko-letter','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、秀夫兄さんと将棋を指されたわよね、あなた?','Yes — Grandpa-youth-Hideo-bro-shog, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが姪の美香さんを可愛がられた','Gran — youth Dad-niece-Mika-love','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、皇居の花園に散歩されたわよね、あなた?','Grandpa — youth-imp-flo-gard, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが芸能の小人プロレスを観られた','Gran — youth Dad-dwarf-wres','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ご友人の智子さんの夫君と仲良くされたわよね、あなた?','Grandpa — youth-Tomoko-husb-close, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが「町内の姐さんは情に厚い」と仰った','Gran — youth Dad-"older-sis-warm"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、定年退職の追い出し会を御自ら企画されたわよね、あなた?','Grandpa — youth-ret-fwl-self, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10924',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、隣のクラスの智子と話してたな','Riku — next-cl-Tomoko-talk','Curious teen','sakura_teen'),
    mk('お前のお父様、秀夫さんって名前だったよな、桜','You — your-fa-Hideo Sakura','Curious','riku_teen'),
    mk('リク、お前、隣のクラスの美香と仲良いな','Riku — next-cl-Mika-close','Curious','sakura_teen'),
    mk('お前、社会で京都御所の花園習ったろ、桜','You — soc-imp-flo-gard? Sakura','Curious','riku_teen'),
    mk('リク、お前、白雪姫の七人の小人の名前覚えてたな','Riku — Snow-7-dwarf-mem','Wry','sakura_teen'),
    mk('お前、英語で「ご主人」つまり夫君って単語覚えたな、桜','You — Eng-husb-learn Sakura','Curious','riku_teen'),
    mk('リク、お前、漫画で「姐さん」のキャラ好きだったろ','Riku — mng-older-sis-fan?','Curious','sakura_teen'),
    mk('お前、卒業生の追い出しコンパに行ったろ、桜','You — grad-fwl-party? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10925',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「智子おばさんはお花が上手」って仰ってたわ','Sho — Dad-"Tomoko-aunt-flo"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと秀夫おじさんに会ったよ','Mei-sis — me Dad-Hideo-uncle-met','Eager child','sho_child'),
    mk('翔くん、お父さんが「美香いとこを誘って一緒に遊ぼう」って仰ってたわ','Sho — Dad-"Mika-cous-inv"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと公園の花園を散策したよ','Mei-sis — me Dad-park-flo-gard','Eager child','sho_child'),
    mk('翔くん、お父さんが「子供向け絵本の小人達のお話を読もう」って仰ってたわ','Sho — Dad-"kid-dwarf-tale"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「ママの夫君を支える」って言葉を教えて頂いたよ','Mei-sis — me Dad-"Mom-husb-supp"-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが「姐さんって呼び方は時代劇によく出る」って教えて下さるわ','Sho — Dad-"older-sis-period"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと先輩の追い出し会を一緒に手伝ったよ','Mei-sis — me Dad-sen-fwl-help','Eager close','sho_child'),
  ]},
  {id:'conv_10926',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新任の長田部長を歓迎しろ','Our co — new-Nag-dept-wel','Crisp','hiroshi_boss'),
    mk('はい。営業の井口課長の出張日程を整えます','Yes — Sales-Igu-mgr-trip','Methodical','kenji_office'),
    mk('当社、技術担当の小西主任にプロジェクトを任せろ','Our co — tech-Kon-lead-proj','Direction','hiroshi_boss'),
    mk('はい。広報の宮澤様の戦略を採用します','Yes — PR-Miya-strat-adopt','Update','kenji_office'),
    mk('当社、顧問の田辺様にご助言を仰げ','Our co — adv-Tan-cons','Direction','hiroshi_boss'),
    mk('はい。経理の塩川様の決算スケジュールを整えます','Yes — Acct-Shio-clos-sched','Update','kenji_office'),
    mk('当社、人事の児玉様に新人研修を任せろ','Our co — HR-Koda-newhire-entr','Direction','hiroshi_boss'),
    mk('はい。法務の本間様に契約書確認を依頼します','Yes — Leg-Hon-contr-req','Close','kenji_office'),
  ]},
  {id:'conv_10927',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('長田部長の歓迎会を準備しましょう','Nag-dept-wel-prep','Brisk','yuki_office'),
    mk('はい。井口課長の引き継ぎ書を確認します','Yes — Igu-mgr-handov','Cooperative','kenji_office'),
    mk('小西技術主任のプロジェクト進捗を共有しましょう','Kon-tech-lead-share','Direction','yuki_office'),
    mk('はい。宮澤広報の月次企画書を確認します','Yes — Miya-PR-mo-plan','Update','kenji_office'),
    mk('田辺顧問との面談を予定しましょう','Tan-adv-meet-plan','Direction','yuki_office'),
    mk('はい。塩川経理の決算予定を整えます','Yes — Shio-acct-clos','Update','kenji_office'),
    mk('児玉人事に新人研修プランを依頼しましょう','Koda-HR-newhire','Direction','yuki_office'),
    mk('はい。本間法務に新契約レビューを依頼します','Yes — Hon-leg-new-contr','Close','kenji_office'),
  ]},
  {id:'conv_10928',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、指導教授の長田先生のご研究を継承しろ','Ren — mentor-Nag-res','Mentor','hiroshi_boss'),
    mk('はい。井口教授の論文を読み込みます','Yes — Igu-prof-paper','Earnest','ren_uni'),
    mk('蓮、共同研究の小西先生に研究照会しろ','Ren — joint-Kon-inq','Direction','hiroshi_boss'),
    mk('はい。学会で宮澤助教のご発表を聴きます','Yes — Conf-Miya-asst-pres','Earnest','ren_uni'),
    mk('蓮、文献の田辺先生のご論文も参考にしろ','Ren — lit-Tan-paper-ref','Direction','hiroshi_boss'),
    mk('はい。研究室の塩川先輩からご指導を仰ぎます','Yes — Lab-Shio-sen-guide','Polite','ren_uni'),
    mk('蓮、海外連携の児玉教授と打ち合わせしろ','Ren — overs-Koda-prof-meet','Direction','hiroshi_boss'),
    mk('はい。研究費の窓口、本間事務官に申請します','Yes — Res-fund-Hon-apply','Earnest close','ren_uni'),
  ]},
  {id:'conv_10929',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、長田刑事の現場対応も評価されますね','Police Nag-det-eval','Cooperative','kenji_office'),
    mk('警察、参考人井口氏から、警察、事情を伺われますね','Police witn-Igu-careful','Cooperative','kenji_office'),
    mk('警察、被害者小西氏のご家族にも、警察、配慮されますね','Police vict-Kon-fam-care','Cooperative','kenji_office'),
    mk('警察、目撃者宮澤氏の供述を、警察、整えられますね','Police witn-Miya-stmt','Cooperative','kenji_office'),
    mk('警察、容疑者田辺の前科を、警察、確認されますね','Police suspect-Tan-prior','Cooperative','kenji_office'),
    mk('警察、署内の鑑識塩川主任と現場検証されますね','Police stat-foren-Shio-scene','Cooperative','kenji_office'),
    mk('警察、心理士児玉様にご助言を仰がれますね','Police psy-Koda-adv','Cooperative','kenji_office'),
    mk('警察、検事の本間様と公判前協議もされますね','Police pros-Hon-pre-trial','Close','kenji_office'),
  ]},
  {id:'conv_10930',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、長田氏と共同事業を立ち上げられた','Dad — youth-Nag-JV','Sage','hiroshi_elder'),
    mk('はい。お父さんは井口先輩のご薫陶を受けられた','Yes — Dad Igu-sen-mentor','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、小西氏と海外進出を企画された','Dad — youth-Kon-overs','Wistful','hiroshi_elder'),
    mk('はい。お父さんは宮澤氏を広報の柱に据えられた','Yes — Dad Miya-PR-pillar','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、田辺氏と経理体制を整えられた','Dad — youth-Tan-acct','Wistful','hiroshi_elder'),
    mk('はい。お父さんは塩川氏を主任として育てられた','Yes — Dad Shio-lead-grow','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、児玉氏と海外法人を立ち上げられた','Dad — youth-Koda-overs-co','Wistful','hiroshi_elder'),
    mk('はい。お父さんは本間氏に法務全般を委ねられた','Yes — Dad Hon-leg-entr','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10931',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、戦国武将小早川秀秋の歴史研究を論文で扱いましたね','Ren — Seng-Koba-Hide paper','Calm','asuka_teacher'),
    mk('はい、クルド民族、つまりクルド人の言語社会学を論文で扱いました','Yes — Kurd-soc-ling paper','Earnest','ren_uni'),
    mk('蓮さん、佐渡金山の鉱山史研究を論文で扱いましたね','Ren — Sado-gold-mine paper','Reflective','asuka_teacher'),
    mk('はい、サハリン、つまり樺太の歴史的境界研究を論文で扱いました','Yes — Sak-Kara-border paper','Earnest','ren_uni'),
    mk('蓮さん、対馬海峡の海洋史研究を論文で扱いましたね','Ren — Tsu-strait paper','Reflective','asuka_teacher'),
    mk('はい、府警の組織再編の研究を論文で扱いました','Yes — Pref-police-reorg paper','Earnest','ren_uni'),
    mk('蓮さん、OSのカーネル、つまりカーネル設計の研究を論文で扱いましたね','Ren — OS-kernel paper','Reflective','asuka_teacher'),
    mk('はい、思春期のオナニーを巡る発達心理学研究を論文で扱いました','Yes — Adol-mast-dev-psy paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10932',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、戦国武将小早川氏ゆかりの遺物盗難を、警察、捜査されますね','Case Koba-relic-theft police-inv','Reflective','ren_uni'),
    mk('警察、在日クルド人コミュニティと、警察、連携されますね','Police Kurd-comm-link','Cooperative','takeda_officer'),
    mk('本件、佐渡金山の文化財盗難を、警察、捜査されますね','Case Sado-art-theft police-inv','Reflective','ren_uni'),
    mk('警察、サハリン海域での日露交流事案にも対応されますね','Police Sak-J-R-case','Cooperative','takeda_officer'),
    mk('本件、対馬の密漁事案を、警察、海上保安庁と連携されますね','Case Tsu-poach police-coast','Reflective','ren_uni'),
    mk('警察、府警の機動隊と合同訓練もされますね','Police pref-police-mob-train','Cooperative','takeda_officer'),
    mk('本件、押収端末のカーネル解析を、警察、専門家に依頼されますね','Case seiz-kernel-anal police-expert','Reflective','ren_uni'),
    mk('警察、思春期のオナニーに絡む盗撮事案も慎重に対応されますね','Police adol-mast-spy-cam','Close','takeda_officer'),
  ]},
  {id:'conv_10933',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、戦国武将小早川秀秋の歴史研究を論文で扱いましたね','Sakura — Koba paper','Calm','asuka_teacher'),
    mk('はい、クルド民族、つまりクルド人の言語社会学を論文で扱いました','Yes — Kurd paper','Earnest teen','sakura_teen'),
    mk('佐渡金山の鉱山史研究を論文で扱いましたね','Sado paper','Reflective','asuka_teacher'),
    mk('はい、サハリン、つまり樺太の歴史的境界研究を論文で扱いました','Yes — Sak paper','Earnest','sakura_teen'),
    mk('対馬海峡の海洋史研究を論文で扱いましたね','Tsu paper','Reflective','asuka_teacher'),
    mk('はい、府警の組織再編の研究を論文で扱いました','Yes — Pref-police paper','Earnest','sakura_teen'),
    mk('OSのカーネル、つまりカーネル設計の研究を論文で扱いましたね','Kernel paper','Reflective','asuka_teacher'),
    mk('はい、思春期のオナニーを巡る発達心理学研究を論文で扱いました','Yes — Adol-mast paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10934',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、戦国武将小早川氏ゆかりの医療史を医療チームで研究します','Ren — Koba-med-hist med-team','Calm','saito_doctor'),
    mk('蓮さん、在日クルド人医療支援を医療チームで継続します','Ren — Kurd-med-supp med-team','Calm','saito_doctor'),
    mk('蓮さん、佐渡島の僻地医療を医療チームで担当します','Ren — Sado-rural-med med-team','Calm','saito_doctor'),
    mk('蓮さん、サハリンとの医療技術交流を医療チームで継続します','Ren — Sak-med-tech med-team','Calm','saito_doctor'),
    mk('蓮さん、対馬の救急医療搬送体制を医療チームで整えます','Ren — Tsu-emerg med-team','Calm','saito_doctor'),
    mk('蓮さん、府警捜査一課と医療チームで連携します','Ren — pref-police-link med-team','Calm','saito_doctor'),
    mk('蓮さん、電子カルテのカーネル更新を医療チームで管理します','Ren — EMR-kernel med-team','Calm','saito_doctor'),
    mk('蓮さん、思春期のオナニーに関する性教育を医療チームで提供します','Ren — adol-mast-sex-ed med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_10935',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、戦国武将小早川氏ゆかりの観光商品を企画しろ','Our co — Koba-tour-prod','Crisp','hiroshi_boss'),
    mk('はい。クルド人労働者の雇用支援を整えます','Yes — Kurd-emp-supp','Methodical','kenji_office'),
    mk('当社、佐渡金山ブランドの土産品を出せ','Our co — Sado-souv-prod','Direction','hiroshi_boss'),
    mk('はい。サハリンとの貿易ルートを再検討します','Yes — Sak-trade-rev','Update','kenji_office'),
    mk('当社、対馬経由の物流ルートを強化しろ','Our co — Tsu-log-strong','Direction','hiroshi_boss'),
    mk('はい。府警と連携した防犯協議を進めます','Yes — Pref-police-prev-coop','Update','kenji_office'),
    mk('当社、製品のカーネル部分の最適化を進めろ','Our co — prod-kernel-opt','Direction','hiroshi_boss'),
    mk('はい。社員向け性教育、つまりオナニーを含む啓発も配慮します','Yes — Staff-sex-ed-mast-aware','Close','kenji_office'),
  ]},
  {id:'conv_10936',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、福岡の天神でショッピングされてきたって、メイちゃん','Aoi — cust-Fuk-Ten-shop Mei','Reflective','mei_romantic'),
    mk('葵、お客様、芦屋のご出身だって、メイちゃん','Aoi — cust-Ash-home Mei','Reflective','aoi_barista'),
    mk('葵、お客様、映画監督の藤岡弘、を尊敬されてるって、メイちゃん','Aoi — cust-Fuji-Hir-resp Mei','Reflective','mei_romantic'),
    mk('葵、お客様、漫画家萩原一至先生のファンだって、メイちゃん','Aoi — cust-Hagi-Kaz-fan Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ジムでフィジカル鍛えてるって、メイちゃん','Aoi — cust-gym-phys-train Mei','Reflective','mei_romantic'),
    mk('葵、お客様、エキサイトブログをご自身で更新されてるって、メイちゃん','Aoi — cust-Excite-blog-self Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ピアニストのハンナのリサイタルに行かれたって、メイちゃん','Aoi — cust-Hanna-rec Mei','Reflective','mei_romantic'),
    mk('葵、お客様、経済学者ケインズの著作を読んでらしたよ、メイちゃん','Aoi — cust-Keynes-book Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10937',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが福岡の天神に出張に行かれた','Gran — youth Dad-Fuk-Ten-trip','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、芦屋の高級住宅街を散策されたわよね、あなた?','Yes — Grandpa-Ash-high-area, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが藤岡弘、の主演ドラマを観られた','Gran — youth Dad-Fuji-Hir-dr','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、漫画家萩原一至の作品を蔵書されたわよね、あなた?','Grandpa — youth-Hagi-Kaz-coll, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがフィジカル、つまり体力鍛錬を続けられた','Gran — youth Dad-phys-train-cont','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、エキサイトブログのご自身のページを書かれたわよね、あなた?','Grandpa — youth-Excite-blog-self, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが米国ピアニストのハンナを愛された','Gran — youth Dad-Hanna-pia-love','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ケインズ経済学を学ばれたわよね、あなた?','Grandpa — youth-Keynes-econ-stud, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10938',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「福岡天神に旅行に行こう」って仰ってたわ','Sho — Dad-"Fuk-Ten-trip"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと芦屋の有名なケーキ屋さん行ったよ','Mei-sis — me Dad-Ash-cake-shop','Eager child','sho_child'),
    mk('翔くん、お父さんが「藤岡弘、の特撮を一緒に観よう」って仰ってたわ','Sho — Dad-"Fuji-Hir-sentai"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと萩原朔太郎の詩集を読んだよ','Mei-sis — me Dad-Hagi-Saku-poem','Eager child','sho_child'),
    mk('翔くん、お父さんが「フィジカル、つまり身体作りは生活の基本」って仰ってたわ','Sho — Dad-"phys-life-basic"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとエキサイトブログの古い記事読んだよ','Mei-sis — me Dad-Excite-blog-old','Eager child','sho_child'),
    mk('翔くん、お父さんが「ハンナのピアノは表現が豊か」って仰ってたわ','Sho — Dad-"Hanna-pia-expr"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「ケインズ経済学入門」の絵本見たよ','Mei-sis — me Dad-Keynes-intro-pic','Eager close','sho_child'),
  ]},
  {id:'conv_10939',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、家族旅行で福岡天神行ったろ','Riku — fam-Fuk-Ten?','Curious teen','sakura_teen'),
    mk('お前、芦屋のお祖父ちゃんち泊まったろ、桜','You — Ash-grdpa-stay? Sakura','Curious','riku_teen'),
    mk('リク、お前、藤岡弘、の特撮ドラマ観てたな','Riku — Fuji-Hir-sentai-watch','Wry','sakura_teen'),
    mk('お前、国語で萩原朔太郎の詩読んでたろ、桜','You — Jp-Hagi-Saku-poem? Sakura','Curious','riku_teen'),
    mk('リク、お前、サッカー部でフィジカル強化してたな','Riku — soccer-phys-train','Curious','sakura_teen'),
    mk('お前、エキサイトブログでファンサイト作ってたな、桜','You — Excite-blog-fan-site Sakura','Wry','riku_teen'),
    mk('リク、お前、海外ピアニストのハンナを応援してたな','Riku — Hanna-pia-cheer','Curious','sakura_teen'),
    mk('お前、経済の授業でケインズ経済学習ったろ、桜','You — econ-class-Keynes? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10940',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが福岡天神のお土産を下さるそうよ','Sho — Dad-Fuk-Ten-souv-gift','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと芦屋の高級住宅街の写真集観たよ','Mom — me Dad-Ash-mans-photo','Eager child','sho_child'),
    mk('翔くん、お父さんが藤岡弘、の伝記を読まれてるわ','Sho — Dad-Fuji-Hir-biog-read','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと萩原朔太郎の詩集観たよ','Mom — me Dad-Hagi-Saku-poem','Eager child','sho_child'),
    mk('翔くん、お父さんがジムでフィジカル鍛錬を続けてらっしゃるわ','Sho — Dad-gym-phys-cont','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとエキサイトブログの料理ブログ見たよ','Mom — me Dad-Excite-blog-cook','Eager child','sho_child'),
    mk('翔くん、お父さんが米国ピアニスト、ハンナのCDを流してらっしゃるわ','Sho — Dad-Hanna-CD-play','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと経済学者ケインズのドキュメンタリー観たよ','Mom — me Dad-Keynes-doc','Eager close','sho_child'),
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

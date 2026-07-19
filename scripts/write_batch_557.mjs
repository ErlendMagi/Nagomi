import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_557 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['加地','今春','新選','正門','Ａ子','坂井','当地','親方']
const B_T = ['コンビネーション','クズ','適格','供与','にあたり','勲章','公聴','意匠']
const C_T = ['組曲','のぞき','刺客','転居','つぐ','導か','病理','全土']
const D_T = ['宝塚','グローブ','ジャンク','アリア','運勢','グレイ','悪人','グレン']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_11101',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんと加地家のお祝いに行かれるそうよ','Sho — Dad-Kachi-cel','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと「今春卒業の従兄」のお祝いをしたよ','Mom — me Dad-"sp-grad-cous"-cel','Pleased child','sho_child'),
    mk('翔くん、お父さんが「新選組のドラマを観よう」って仰ってたわ','Sho — Dad-"Shinsen-dr"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと学校の正門で待ち合わせしたよ','Mom — me Dad-sch-main-gate','Pleased child','sho_child'),
    mk('翔くん、お父さんが「小説でＡ子と書かれた登場人物」のお話をして下さったわ','Sho — Dad-"novel-A-ko"-talk','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとお友達の坂井おじさんに会ったよ','Mom — me Dad-Sak-uncle-met','Pleased child','sho_child'),
    mk('翔くん、お父さんが「当地の特産品を紹介してもらおう」って仰ってたわ','Sho — Dad-"local-spec-intr"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと相撲の親方インタビュー観たよ','Mom — me Dad-sumo-master-int','Eager close','sho_child'),
  ]},
  {id:'conv_11102',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ご友人の加地さんとお茶されてたよ、メイちゃん','Aoi — cust-fri-Kachi-tea Mei','Reflective','mei_romantic'),
    mk('葵、お客様、「今春から本格的にお店を始める」って仰ってたよ、メイちゃん','Aoi — cust-"sp-start"-said Mei','Reflective','aoi_barista'),
    mk('葵、お客様、新選組ファンクラブの会員だって、メイちゃん','Aoi — cust-Shinsen-fan-club Mei','Reflective','mei_romantic'),
    mk('葵、お客様、学校の正門前で待ち合わせされてたよ、メイちゃん','Aoi — cust-sch-main-gate-meet Mei','Reflective','aoi_barista'),
    mk('葵、お客様、小説でＡ子と書かれた登場人物に共感されてたよ、メイちゃん','Aoi — cust-novel-A-ko-emp Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご友人の坂井さんと音楽鑑賞されてたよ、メイちゃん','Aoi — cust-fri-Sak-mus Mei','Reflective','aoi_barista'),
    mk('葵、お客様、「当地の郷土料理を作ってきた」って仰ってたよ、メイちゃん','Aoi — cust-"local-food-bring"-said Mei','Reflective','mei_romantic'),
    mk('葵、お客様、相撲の親方のお話を熱心に語って下さったよ、メイちゃん','Aoi — cust-sumo-master-talk Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_11103',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがご友人の加地さんと文通された','Gran — youth Dad-fri-Kachi-letter','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、「今春の桜は格別」と仰ってたわよね、あなた?','Yes — Grandpa-"sp-cherry-spec"-said, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが新選組の歴史を研究された','Gran — youth Dad-Shinsen-hist','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、学校の正門の桜並木を愛されたわよね、あなた?','Grandpa — youth-sch-main-gate-cherry, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが小説のＡ子の心情を語られた','Gran — youth Dad-novel-A-ko-feel','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ご友人の坂井さんと囲碁を打たれたわよね、あなた?','Grandpa — youth-Sak-go, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは「当地の文化を守ろう」と仰った','Gran — youth Dad-"local-cult"-said','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、相撲の親方になる事を夢見られたわよね、あなた?','Grandpa — youth-sumo-master-dream, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_11104',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、隣のクラスの加地と話してたな','Riku — next-cl-Kachi-talk','Curious teen','sakura_teen'),
    mk('お前、卒業文集で「今春卒業」って書いてたな、桜','You — grad-"sp-grad"-wrote Sakura','Curious','riku_teen'),
    mk('リク、お前、新選組グッズ集めてたな','Riku — Shinsen-merch-coll','Wry','sakura_teen'),
    mk('お前、学校の正門で待ち合わせしてたろ、桜','You — sch-main-gate-meet? Sakura','Curious','riku_teen'),
    mk('リク、お前、新聞の「Ａ子(仮名)」の記事読んでたな','Riku — news-"A-ko-anon"-read','Curious','sakura_teen'),
    mk('お前、隣のクラスの坂井と話してたな、桜','You — next-cl-Sak-talk Sakura','Curious','riku_teen'),
    mk('リク、お前、「当地のラーメンが一番」って自慢してたな','Riku — "local-ramen-best"-brag','Wry','sakura_teen'),
    mk('お前、相撲の親方になりたいって言ってたろ、桜','You — sumo-master-asp? Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_11105',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「加地おじさんに会いに行こう」って仰ってたわ','Sho — Dad-"Kachi-uncle-vis"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「今春の桜祭り」に行ったよ','Mei-sis — me Dad-"sp-cherry-fes"-go','Eager child','sho_child'),
    mk('翔くん、お父さんが「新選組の物語を解説する」って仰ってたわ','Sho — Dad-"Shinsen-tale-expl"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと小学校の正門で写真撮ったよ','Mei-sis — me Dad-elem-main-gate-photo','Eager child','sho_child'),
    mk('翔くん、お父さんが「報道のＡ子(仮名)は配慮の表記」って教えて下さったわ','Sho — Dad-"news-A-ko-care"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと坂井おじさんの家に遊びに行ったよ','Mei-sis — me Dad-Sak-uncle-vis','Eager child','sho_child'),
    mk('翔くん、お父さんが「当地の祭りに参加しよう」って仰ってたわ','Sho — Dad-"local-fes-join"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと相撲部屋の親方に会えたよ','Mei-sis — me Dad-sumo-master-met','Eager close','sho_child'),
  ]},
  {id:'conv_11106',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、製品の色のコンビネーションを工夫しろ','Our co — prod-color-comb','Crisp','hiroshi_boss'),
    mk('はい。クズ材、つまりクズ素材も再利用します','Yes — Scrap-mat-reuse','Methodical','kenji_office'),
    mk('当社、適格な人材の採用を強化しろ','Our co — qual-hire-strong','Direction','hiroshi_boss'),
    mk('はい。新製品のサンプル供与を取引先に進めます','Yes — Sample-supp-client','Update','kenji_office'),
    mk('当社、契約締結にあたり、慎重に進めろ','Our co — contr-on-occ-care','Direction','hiroshi_boss'),
    mk('はい。功労社員に勲章授与の社内式典を準備します','Yes — Hon-cere-prep','Update','kenji_office'),
    mk('当社、新条例の公聴会に参加しろ','Our co — new-ord-pub-hear','Direction','hiroshi_boss'),
    mk('はい。意匠、つまり意匠登録の手続きを進めます','Yes — Design-reg','Close','kenji_office'),
  ]},
  {id:'conv_11107',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('色のコンビネーションを社内デザインで統一しましょう','Color-comb-design-uni','Brisk','yuki_office'),
    mk('はい。クズ鉄、つまりクズ材の処理業者を選定します','Yes — Scrap-iron-vend','Cooperative','kenji_office'),
    mk('適格者リストを作成しましょう','Qual-list-make','Direction','yuki_office'),
    mk('はい。取引先への試供品の供与計画を立てます','Yes — Client-supp-plan','Update','kenji_office'),
    mk('案件着手にあたり、関係者と顔合わせしましょう','Proj-on-occ-meet','Direction','yuki_office'),
    mk('はい。社員勲章授与式の名簿を整えます','Yes — Hon-cere-list','Update','kenji_office'),
    mk('地方議会の公聴会に弊社の意見を伝えましょう','Local-pub-hear-views','Direction','yuki_office'),
    mk('はい。新製品の意匠登録を急ぎます','Yes — New-prod-design-reg','Close','kenji_office'),
  ]},
  {id:'conv_11108',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、研究領域のコンビネーションを工夫しろ','Ren — res-area-comb','Mentor','hiroshi_boss'),
    mk('はい。実験のクズ材、つまりクズデータも保管します','Yes — Exp-scrap-data','Earnest','ren_uni'),
    mk('蓮、共同研究適格者リストを整えろ','Ren — joint-qual-list','Direction','hiroshi_boss'),
    mk('はい。学会への試料供与を進めます','Yes — Conf-sample-supp','Earnest','ren_uni'),
    mk('蓮、論文投稿にあたり、引用を整えろ','Ren — paper-on-occ-cite','Direction','hiroshi_boss'),
    mk('はい。受賞、つまり勲章獲得を励みに研究します','Yes — Award-hon-mot','Polite','ren_uni'),
    mk('蓮、学会の公聴会に出席しろ','Ren — conf-pub-hear-att','Direction','hiroshi_boss'),
    mk('はい。研究の意匠、つまり意匠的アイディアも特許申請します','Yes — Res-design-pat','Earnest close','ren_uni'),
  ]},
  {id:'conv_11109',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、捜査チームの編成、つまりコンビネーションを慎重に考慮されますね','Police inv-team-comb-care','Cooperative','kenji_office'),
    mk('警察、クズ、つまりクズ鉄の盗難事案にも対応されますね','Police scrap-theft','Cooperative','kenji_office'),
    mk('警察、捜査の適格者を慎重に配置されますね','Police inv-qual-place-care','Cooperative','kenji_office'),
    mk('警察、市民への情報供与には、警察、慎重に対応されますね','Police citi-info-supp-care','Cooperative','kenji_office'),
    mk('警察、捜査開始にあたり、ご家族に説明されますね','Police inv-start-on-occ-fam','Cooperative','kenji_office'),
    mk('警察、警察功労者勲章の授与式もされますね','Police hon-cere','Cooperative','kenji_office'),
    mk('警察、議会の公聴会にも出席されますね','Police parl-pub-hear-att','Cooperative','kenji_office'),
    mk('警察、現場の意匠、つまり意匠の独自性も鑑識されますね','Police scene-design-orig','Close','kenji_office'),
  ]},
  {id:'conv_11110',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、製品のコンビネーション戦略を成功させた','Dad — youth-prod-comb-succ','Sage','hiroshi_elder'),
    mk('はい。お父さんはクズ材、つまりクズ素材リサイクル事業を始められた','Yes — Dad scrap-recyc-start','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、適格な人材登用に拘られた','Dad — youth-qual-hire-stick','Wistful','hiroshi_elder'),
    mk('はい。お父さんは取引先への供与を惜しまれなかった','Yes — Dad supp-gen','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、契約締結にあたり、慎重を期された','Dad — youth-contr-on-occ-care','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員勲章授与制度を整えられた','Yes — Dad hon-syst','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、公聴会への出席を厭われなかった','Dad — youth-pub-hear-att-yes','Wistful','hiroshi_elder'),
    mk('はい。お父さんは意匠、つまり意匠登録の重要性を説かれた','Yes — Dad design-reg-imp','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_11111',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、バッハの組曲、つまり管弦楽組曲の音楽研究を論文で扱いましたね','Ren — Bach-suite paper','Calm','asuka_teacher'),
    mk('はい、犯罪心理学ののぞき、つまりのぞき行為の研究を論文で扱いました','Yes — Crim-psy-peep paper','Earnest','ren_uni'),
    mk('蓮さん、歴史上の刺客の社会学研究を論文で扱いましたね','Ren — hist-assas paper','Reflective','asuka_teacher'),
    mk('はい、住民の転居傾向の社会学研究を論文で扱いました','Yes — Reloc-trend paper','Earnest','ren_uni'),
    mk('蓮さん、相続でつぐ、つまり継ぐ家業の研究を論文で扱いましたね','Ren — succ-fam-biz paper','Reflective','asuka_teacher'),
    mk('はい、結論に導かれる証明手法の論理学研究を論文で扱いました','Yes — Conclus-proof paper','Earnest','ren_uni'),
    mk('蓮さん、病理、つまり病理組織学研究を論文で扱いましたね','Ren — path-tissue paper','Reflective','asuka_teacher'),
    mk('はい、全土を網羅する国勢調査の研究を論文で扱いました','Yes — Nat-cens paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_11112',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、組曲、つまり連続演奏会場周辺の事案を、警察、捜査されますね','Case suite-conc-area police-inv','Reflective','ren_uni'),
    mk('警察、のぞき行為の取り締まりを、警察、強化されますね','Police peep-act-crack-strong','Cooperative','takeda_officer'),
    mk('本件、政治家を狙った刺客の警戒を、警察、強められますね','Case pol-assas-guard police-strong','Reflective','ren_uni'),
    mk('警察、容疑者の転居先を、警察、突き止められますね','Police suspect-reloc-track','Cooperative','takeda_officer'),
    mk('本件、加害者が後をつぐ、つまり継ぐ事の防止を、警察、徹底されますね','Case perp-succ-prev police-thor','Reflective','ren_uni'),
    mk('警察、結論に導かれる証拠を、警察、慎重に集められますね','Police conclus-evid-careful','Cooperative','takeda_officer'),
    mk('本件、被害者の病理解剖を、警察、医師と連携されますね','Case vict-path-autop police-doc','Reflective','ren_uni'),
    mk('警察、全土の警察組織で連携した広域捜査もされますね','Police nat-wide-inv','Close','takeda_officer'),
  ]},
  {id:'conv_11113',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、バッハの組曲、つまり管弦楽組曲の音楽研究を論文で扱いましたね','Sakura — Bach-suite paper','Calm','asuka_teacher'),
    mk('はい、犯罪心理学ののぞき、つまりのぞき行為の研究を論文で扱いました','Yes — Peep paper','Earnest teen','sakura_teen'),
    mk('歴史上の刺客の社会学研究を論文で扱いましたね','Assas paper','Reflective','asuka_teacher'),
    mk('はい、住民の転居傾向の社会学研究を論文で扱いました','Yes — Reloc paper','Earnest','sakura_teen'),
    mk('相続でつぐ、つまり継ぐ家業の研究を論文で扱いましたね','Succ paper','Reflective','asuka_teacher'),
    mk('はい、結論に導かれる証明手法の論理学研究を論文で扱いました','Yes — Conclus paper','Earnest','sakura_teen'),
    mk('病理、つまり病理組織学研究を論文で扱いましたね','Path paper','Reflective','asuka_teacher'),
    mk('はい、全土を網羅する国勢調査の研究を論文で扱いました','Yes — Nat paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_11114',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、慢性疾患の組曲、つまり一連の症状を医療チームで分析します','Ren — chron-suite med-team','Calm','saito_doctor'),
    mk('蓮さん、医療現場でののぞき、つまりプライバシー侵害を医療チームで防ぎます','Ren — med-peep-prev med-team','Calm','saito_doctor'),
    mk('蓮さん、感染症の刺客的株、つまり毒性株の研究を医療チームでおこないます','Ren — inf-virul-str med-team','Calm','saito_doctor'),
    mk('蓮さん、患者様の転居先の医療情報を医療チームで引き継ぎします','Ren — pati-reloc-info med-team','Calm','saito_doctor'),
    mk('蓮さん、家系で病をつぐ、つまり継ぐ遺伝病を医療チームで検査します','Ren — fam-inh-dis med-team','Calm','saito_doctor'),
    mk('蓮さん、患者様を治療に導かれる対話を医療チームで丁寧におこないます','Ren — pati-treat-lead-dial med-team','Calm','saito_doctor'),
    mk('蓮さん、病理組織検査を医療チームで慎重におこないます','Ren — path-tissue med-team','Calm','saito_doctor'),
    mk('蓮さん、全土の感染症動向を医療チームで監視します','Ren — nat-pand-mon med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_11115',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、製品ラインアップを組曲、つまり連作の様に整えろ','Our co — prod-suite-arr','Crisp','hiroshi_boss'),
    mk('はい。社内ののぞき行為、つまり情報のぞき見対策を強化します','Yes — Int-peep-info-prev','Methodical','kenji_office'),
    mk('当社、競合他社の刺客的人材引き抜きに警戒しろ','Our co — rival-assas-poach-mon','Direction','hiroshi_boss'),
    mk('はい。お客様の転居時の情報更新を徹底します','Yes — Cust-reloc-upd','Update','kenji_office'),
    mk('当社、社長業を息子につぐ、つまり継ぐ準備を進めろ','Our co — succ-son-prep','Direction','hiroshi_boss'),
    mk('はい。お客様を購入に導かれる導線を整えます','Yes — Cust-purch-lead','Update','kenji_office'),
    mk('当社、品質の病理、つまり病理解析的アプローチを採り入れろ','Our co — qual-path-anal','Direction','hiroshi_boss'),
    mk('はい。全土への配送網を整えます','Yes — Nat-deliv','Close','kenji_office'),
  ]},
  {id:'conv_11116',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、宝塚歌劇のファンだって、メイちゃん','Aoi — cust-Takarazuka-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、野球のグローブを新調されたって、メイちゃん','Aoi — cust-base-glove-renew Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お子様のジャンクフード好きで悩んでらっしゃるって、メイちゃん','Aoi — cust-kid-junk-worry Mei','Wry','mei_romantic'),
    mk('葵、お客様、ジャズのアリアがお好きだって、メイちゃん','Aoi — cust-jazz-aria-fav Mei','Reflective','aoi_barista'),
    mk('葵、お客様、毎朝運勢チェックされてるって、メイちゃん','Aoi — cust-morn-fort-check Mei','Wry','mei_romantic'),
    mk('葵、お客様、グレイのジャケットをお気に入りだって、メイちゃん','Aoi — cust-gray-jack-fav Mei','Reflective','aoi_barista'),
    mk('葵、お客様、映画の悪人キャラがお好きだって、メイちゃん','Aoi — cust-vill-char-fan Mei','Reflective','mei_romantic'),
    mk('葵、お客様、トランペッターのグレン・ミラーがお好きだって、メイちゃん','Aoi — cust-Glenn-Mill-fan Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_11117',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが宝塚歌劇に通われた','Gran — youth Dad-Takarazuka-go','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、野球のグローブを革で手入れされたわよね、あなた?','Yes — Grandpa-base-glove-leather, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがコレクションのジャンクパーツを愛された','Gran — youth Dad-junk-parts-coll','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、オペラのアリアを口ずさまれたわよね、あなた?','Grandpa — youth-opera-aria-hum, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが新聞の運勢欄を毎朝読まれた','Gran — youth Dad-news-fort-col','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、グレイの三つ揃いスーツがお気に入りだったわよね、あなた?','Grandpa — youth-gray-3pc-suit, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが時代劇の悪人キャラ論評をされた','Gran — youth Dad-period-vill-crit','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、グレン・ミラーのスイングを愛されたわよね、あなた?','Grandpa — youth-Glenn-Mill-swing, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_11118',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「宝塚歌劇の公演を観に行こう」って仰ってたわ','Sho — Dad-"Takarazuka-go"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんから野球のグローブを頂いたよ','Mei-sis — me Dad-base-glove-recv','Eager child','sho_child'),
    mk('翔くん、お父さんが「ジャンクフードはたまににね」って仰ってたわ','Sho — Dad-"junk-occ"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「アリアを歌う動画」観たよ','Mei-sis — me Dad-aria-vid','Eager child','sho_child'),
    mk('翔くん、お父さんが「今日の運勢は大吉」って嬉しそうだったわ','Sho — Dad-"today-fort-best"-glad','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんからグレイの帽子を頂いたよ','Mei-sis — me Dad-gray-cap-recv','Eager child','sho_child'),
    mk('翔くん、お父さんが「悪人にならない正義感を持って」って教えて下さったわ','Sho — Dad-"no-vill-just"-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと「グレン・ミラー楽団の動画」聴いたよ','Mei-sis — me Dad-Glenn-Mill-band','Eager close','sho_child'),
  ]},
  {id:'conv_11119',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、家族で宝塚観に行ったろ','Riku — fam-Takarazuka?','Curious teen','sakura_teen'),
    mk('お前、野球部で新しいグローブ買ったろ、桜','You — base-club-new-glove? Sakura','Curious','riku_teen'),
    mk('リク、お前、コンビニのジャンクフード食べ過ぎだろ','Riku — conv-junk-too','Wry','sakura_teen'),
    mk('お前、音楽部でアリアの練習してたろ、桜','You — mus-club-aria? Sakura','Curious','riku_teen'),
    mk('リク、お前、朝の運勢チェック欠かさないな','Riku — morn-fort-no-skip','Wry','sakura_teen'),
    mk('お前、グレイのスニーカー履いてたな、桜','You — gray-sneak-wear Sakura','Curious','riku_teen'),
    mk('リク、お前、漫画で悪人キャラ好きだったろ','Riku — mng-vill-char-fan?','Wry','sakura_teen'),
    mk('お前、音楽でグレン・グールドのピアノ聴いてたな、桜','You — mus-Glenn-Gould-piano Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_11120',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんが宝塚歌劇のチケットを下さるそうよ','Sho — Dad-Takarazuka-ticket','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと野球のグローブの手入れ方法習ったよ','Mom — me Dad-base-glove-care','Eager child','sho_child'),
    mk('翔くん、お父さんが「ジャンクフードは月一にね」って仰ってたわ','Sho — Dad-"junk-mo-once"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとアリアのコンサート観たよ','Mom — me Dad-aria-conc','Eager child','sho_child'),
    mk('翔くん、お父さんが「今日の運勢は良い」って笑ってらしたわ','Sho — Dad-"today-fort-good"-laugh','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとグレイのコートを買いに行ったよ','Mom — me Dad-gray-coat-buy','Eager child','sho_child'),
    mk('翔くん、お父さんが「漫画の悪人キャラも魅力がある」って仰ってたわ','Sho — Dad-"mng-vill-appeal"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとグレン・ミラー楽団のCD聴いたよ','Mom — me Dad-Glenn-Mill-CD','Eager close','sho_child'),
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

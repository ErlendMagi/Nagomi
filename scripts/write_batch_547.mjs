import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_547 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['山上','川本','和泉','玉田','三枝','寺田','岩井','しのぎ']
const B_T = ['神浦','杉村','野坂','荒井','北野','日高','牛尾','広瀬']
const C_T = ['激突','宝庫','博し','中澤','中尾','江原','大原','大川']
const D_T = ['ウイング','システムズ','サイボウズ','光文社','ウンコ','丸出し','細木','小田急']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_10901',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんのお友達の山上おじさんと会われたわ','Sho — Dad-fri-Yamagami-met','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんと川本おじさんに会ったよ','Mom — me Dad-Kawa-uncle-met','Pleased child','sho_child'),
    mk('翔くん、お父さんが「和泉さんは穏やかな方」って仰ってたわ','Sho — Dad-"Izumi-calm"-said','Reflective','yumiko_mom'),
    mk('ママ、お父さんがご友人の玉田さんとお茶されてたよ','Mom — Dad-fri-Tamada-tea','Eager child','sho_child'),
    mk('翔くん、お父さんが三枝おじさんとお酒を酌み交わされたわ','Sho — Dad-Saegusa-uncle-drink','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと寺田おじさんに会いに行ったよ','Mom — me Dad-Terada-uncle-vis','Pleased child','sho_child'),
    mk('翔くん、お父さんが岩井おじさんと釣りに行かれるわ','Sho — Dad-Iwai-uncle-fish','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんが「家計のしのぎ、つまりやりくりが大事」って仰ってたよ','Mom — Dad-"budget-shinogi"-said','Earnest close','sho_child'),
  ]},
  {id:'conv_10902',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、ご友人の山上さんとお茶されてたよ、メイちゃん','Aoi — cust-fri-Yamagami-tea Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご友人の川本さんと打ち合わせされてたよ、メイちゃん','Aoi — cust-fri-Kawa-meet Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お母様のお名前が和泉さんだって、メイちゃん','Aoi — cust-mom-Izumi Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お父様のお名前が玉田さんだって、メイちゃん','Aoi — cust-fa-Tamada Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ご友人の三枝さんとご来店だったよ、メイちゃん','Aoi — cust-fri-Saegusa-vis Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ご友人の寺田さんと音楽鑑賞されてたよ、メイちゃん','Aoi — cust-fri-Terada-mus Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ご友人の岩井さんと写真展に行かれたって、メイちゃん','Aoi — cust-fri-Iwai-photo Mei','Reflective','mei_romantic'),
    mk('葵、お客様、「年末はしのぎを削る忙しさ」って仰ってたよ、メイちゃん','Aoi — cust-"yr-end-shinogi"-said Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10903',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがご友人の山上さんと釣りに行かれた','Gran — youth Dad-fri-Yamagami-fish','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、川本兄さんとお酒を酌み交わされたわよね、あなた?','Yes — Grandpa-Kawa-bro-drink, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが和泉さんと文通された','Gran — youth Dad-Izumi-letter','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ご友人の玉田さんと将棋を指されたわよね、あなた?','Grandpa — youth-Tamada-shog, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがお兄様の三枝さんと旅行された','Gran — youth Dad-bro-Saegusa-trip','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ご縁あった寺田さんと俳句を詠まれたわよね、あなた?','Grandpa — youth-Terada-haik, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが岩井さんと囲碁を打たれた','Gran — youth Dad-Iwai-go','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、ご商売のしのぎを削られた時代があったわよね、あなた?','Grandpa — youth-biz-shinogi-era, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10904',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、社会で山上の演説覚えたな','Riku — soc-Yamagami-sp','Curious teen','sakura_teen'),
    mk('お前、隣のクラスの川本と話してたな、桜','You — next-cl-Kaw-talk Sakura','Curious','riku_teen'),
    mk('リク、お前、和泉先輩を尊敬してたな','Riku — Izumi-sen-resp','Curious','sakura_teen'),
    mk('お前、玉田おじさんと挨拶してたな、桜','You — Tamada-uncle-greet Sakura','Curious','riku_teen'),
    mk('リク、お前、隣のクラスの三枝と仲良いな','Riku — next-cl-Saegusa-close','Curious','sakura_teen'),
    mk('お前、塾の寺田先生厳しかったな、桜','You — cram-Terada-strict Sakura','Wry','riku_teen'),
    mk('リク、お前、隣のクラスの岩井と話してたな','Riku — next-cl-Iwai-talk','Curious','sakura_teen'),
    mk('お前、お小遣いのしのぎ、つまりやりくり大変だったな、桜','You — alowance-shinogi-tough Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_10905',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんが「山上おじさんと一緒に登山したい」って仰ってたわ','Sho — Dad-"Yamagami-climb"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと川本おじさんの家に遊びに行ったよ','Mei-sis — me Dad-Kaw-uncle-vis','Eager child','sho_child'),
    mk('翔くん、お父さんが「和泉さんとは古い友人」って仰ってたわ','Sho — Dad-"Izumi-old-fri"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと玉田おじさんに会いに行ったよ','Mei-sis — me Dad-Tamada-uncle-vis','Eager child','sho_child'),
    mk('翔くん、お父さんが「三枝おばさんはお料理上手」って仰ってたわ','Sho — Dad-"Saegusa-aunt-cook"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと寺田家のお祝いに行ったよ','Mei-sis — me Dad-Terada-cel','Eager child','sho_child'),
    mk('翔くん、お父さんが「岩井さんとは長い付き合い」って仰ってたわ','Sho — Dad-"Iwai-long-rel"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「毎月のしのぎ、つまり生活費の工夫が大事」って教えて頂いたよ','Mei-sis — me Dad-"mo-shinogi-eff"-teach','Earnest close','sho_child'),
  ]},
  {id:'conv_10906',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、新任の神浦部長を歓迎しろ','Our co — new-Kam-dept-wel','Crisp','hiroshi_boss'),
    mk('はい。営業の杉村課長の出張日程を整えます','Yes — Sales-Sug-mgr-trip','Methodical','kenji_office'),
    mk('当社、技術担当の野坂主任にプロジェクトを任せろ','Our co — tech-Noza-lead-proj','Direction','hiroshi_boss'),
    mk('はい。広報の荒井様の戦略を採用します','Yes — PR-Arai-strat-adopt','Update','kenji_office'),
    mk('当社、顧問の北野様にご助言を仰げ','Our co — adv-Kit-cons','Direction','hiroshi_boss'),
    mk('はい。経理の日高様の決算スケジュールを整えます','Yes — Acct-Hida-clos-sched','Update','kenji_office'),
    mk('当社、人事の牛尾様に新人研修を任せろ','Our co — HR-Ushi-newhire-entr','Direction','hiroshi_boss'),
    mk('はい。法務の広瀬様に契約書確認を依頼します','Yes — Leg-Hir-contr-req','Close','kenji_office'),
  ]},
  {id:'conv_10907',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('神浦部長の歓迎会を準備しましょう','Kam-dept-wel-prep','Brisk','yuki_office'),
    mk('はい。杉村課長の引き継ぎ書を確認します','Yes — Sug-mgr-handov','Cooperative','kenji_office'),
    mk('野坂技術主任のプロジェクト進捗を共有しましょう','Noza-tech-lead-share','Direction','yuki_office'),
    mk('はい。荒井広報の月次企画書を確認します','Yes — Arai-PR-mo-plan','Update','kenji_office'),
    mk('北野顧問との面談を予定しましょう','Kit-adv-meet-plan','Direction','yuki_office'),
    mk('はい。日高経理の決算予定を整えます','Yes — Hida-acct-clos','Update','kenji_office'),
    mk('牛尾人事に新人研修プランを依頼しましょう','Ushi-HR-newhire','Direction','yuki_office'),
    mk('はい。広瀬法務に新契約レビューを依頼します','Yes — Hir-leg-new-contr','Close','kenji_office'),
  ]},
  {id:'conv_10908',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、指導教授の神浦先生のご研究を継承しろ','Ren — mentor-Kam-res','Mentor','hiroshi_boss'),
    mk('はい。杉村教授の論文を読み込みます','Yes — Sug-prof-paper','Earnest','ren_uni'),
    mk('蓮、共同研究の野坂先生に研究照会しろ','Ren — joint-Noza-inq','Direction','hiroshi_boss'),
    mk('はい。学会で荒井助教のご発表を聴きます','Yes — Conf-Arai-asst-pres','Earnest','ren_uni'),
    mk('蓮、文献の北野先生のご論文も参考にしろ','Ren — lit-Kit-paper-ref','Direction','hiroshi_boss'),
    mk('はい。研究室の日高先輩からご指導を仰ぎます','Yes — Lab-Hida-sen-guide','Polite','ren_uni'),
    mk('蓮、海外連携の牛尾教授と打ち合わせしろ','Ren — overs-Ushi-prof-meet','Direction','hiroshi_boss'),
    mk('はい。研究費の窓口、広瀬事務官に申請します','Yes — Res-fund-Hir-apply','Earnest close','ren_uni'),
  ]},
  {id:'conv_10909',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、神浦刑事の現場対応も評価されますね','Police Kam-det-eval','Cooperative','kenji_office'),
    mk('警察、参考人杉村氏から、警察、事情を伺われますね','Police witn-Sug-careful','Cooperative','kenji_office'),
    mk('警察、被害者野坂氏のご家族にも、警察、配慮されますね','Police vict-Noza-fam-care','Cooperative','kenji_office'),
    mk('警察、目撃者荒井氏の供述を、警察、整えられますね','Police witn-Arai-stmt','Cooperative','kenji_office'),
    mk('警察、容疑者北野の前科を、警察、確認されますね','Police suspect-Kit-prior','Cooperative','kenji_office'),
    mk('警察、署内の鑑識日高主任と現場検証されますね','Police stat-foren-Hida-scene','Cooperative','kenji_office'),
    mk('警察、心理士牛尾様にご助言を仰がれますね','Police psy-Ushi-adv','Cooperative','kenji_office'),
    mk('警察、検事の広瀬様と公判前協議もされますね','Police pros-Hir-pre-trial','Close','kenji_office'),
  ]},
  {id:'conv_10910',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、若い頃、神浦氏と共同事業を立ち上げられた','Dad — youth-Kam-JV','Sage','hiroshi_elder'),
    mk('はい。お父さんは杉村先輩のご薫陶を受けられた','Yes — Dad Sug-sen-mentor','Commitment','hiroshi_boss'),
    mk('お父さん、若い頃、野坂氏と海外進出を企画された','Dad — youth-Noza-overs','Wistful','hiroshi_elder'),
    mk('はい。お父さんは荒井氏を広報の柱に据えられた','Yes — Dad Arai-PR-pillar','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、北野氏と経理体制を整えられた','Dad — youth-Kit-acct','Wistful','hiroshi_elder'),
    mk('はい。お父さんは日高氏を主任として育てられた','Yes — Dad Hida-lead-grow','Reflective','hiroshi_boss'),
    mk('お父さん、若い頃、牛尾氏と海外法人を立ち上げられた','Dad — youth-Ushi-overs-co','Wistful','hiroshi_elder'),
    mk('はい。お父さんは広瀬氏に法務全般を委ねられた','Yes — Dad Hir-leg-entr','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_10911',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、車両激突事故の交通工学研究を論文で扱いましたね','Ren — coll-traf paper','Calm','asuka_teacher'),
    mk('はい、京都の文化財の宝庫、つまり史料庫の研究を論文で扱いました','Yes — Kyoto-trove paper','Earnest','ren_uni'),
    mk('蓮さん、芸能界で人気を博した役者の社会学研究を論文で扱いましたね','Ren — ent-pop-act paper','Reflective','asuka_teacher'),
    mk('はい、報道写真家中澤氏のドキュメンタリー研究を論文で扱いました','Yes — Phot-Naka-doc paper','Earnest','ren_uni'),
    mk('蓮さん、政治学者中尾先生のご研究を論文で扱いましたね','Ren — pol-Naka-res paper','Reflective','asuka_teacher'),
    mk('はい、霊能者江原氏の社会受容の研究を論文で扱いました','Yes — Spir-Eh-recep paper','Earnest','ren_uni'),
    mk('蓮さん、考古学者大原先生のご研究を論文で扱いましたね','Ren — arch-Oh-res paper','Reflective','asuka_teacher'),
    mk('はい、報道写真家大川氏の社会写真の研究を論文で扱いました','Yes — Phot-Oka-soc paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_10912',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、車両激突の現場検証を、警察、慎重におこなわれますね','Case veh-coll police-care','Reflective','ren_uni'),
    mk('警察、押収物の宝庫、つまり保管庫の管理も徹底されますね','Police seiz-trove-mgmt-thor','Cooperative','takeda_officer'),
    mk('本件、容疑者が人気を博した過去を、警察、慎重に扱われますね','Case suspect-pop-past police-care','Reflective','ren_uni'),
    mk('警察、参考人中澤氏から、警察、事情を伺われますね','Police witn-Naka-careful','Cooperative','takeda_officer'),
    mk('本件、目撃者中尾氏の供述を、警察、整えられますね','Case witn-Naka-stmt-tidy','Reflective','ren_uni'),
    mk('警察、被害者江原氏のご家族にも、警察、配慮されますね','Police vict-Eh-fam-care','Cooperative','takeda_officer'),
    mk('本件、心理士大原様にご助言を仰がれますね','Case psy-Oh-adv','Reflective','ren_uni'),
    mk('警察、検事の大川様と公判前協議もされますね','Police pros-Oka-pre-trial','Close','takeda_officer'),
  ]},
  {id:'conv_10913',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、車両激突事故の交通工学研究を論文で扱いましたね','Sakura — coll paper','Calm','asuka_teacher'),
    mk('はい、京都の文化財の宝庫、つまり史料庫の研究を論文で扱いました','Yes — Trove paper','Earnest teen','sakura_teen'),
    mk('芸能界で人気を博した役者の社会学研究を論文で扱いましたね','Pop-act paper','Reflective','asuka_teacher'),
    mk('はい、報道写真家中澤氏のドキュメンタリー研究を論文で扱いました','Yes — Naka paper','Earnest','sakura_teen'),
    mk('政治学者中尾先生のご研究を論文で扱いましたね','Naka-pol paper','Reflective','asuka_teacher'),
    mk('はい、霊能者江原氏の社会受容の研究を論文で扱いました','Yes — Eh paper','Earnest','sakura_teen'),
    mk('考古学者大原先生のご研究を論文で扱いましたね','Oh-arch paper','Reflective','asuka_teacher'),
    mk('はい、報道写真家大川氏の社会写真の研究を論文で扱いました','Yes — Oka paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_10914',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses cases',lines:[
    mk('蓮さん、車両激突事故の重症患者対応を医療チームでおこないます','Ren — coll-sev-pati med-team','Calm','saito_doctor'),
    mk('蓮さん、医療資料の宝庫、つまり病院アーカイブを医療チームで保管します','Ren — med-trove-arch med-team','Calm','saito_doctor'),
    mk('蓮さん、地域で人気を博した診療所のモデル研究を医療チームでおこないます','Ren — local-pop-clin-mod med-team','Calm','saito_doctor'),
    mk('蓮さん、患者中澤様のご症状を医療チームで継続観察します','Ren — pati-Naka med-team','Calm','saito_doctor'),
    mk('蓮さん、患者中尾様のリハビリを医療チームで支援します','Ren — pati-Naka-rehab med-team','Calm','saito_doctor'),
    mk('蓮さん、患者江原様の精神科ケアを医療チームでおこないます','Ren — pati-Eh-psy med-team','Calm','saito_doctor'),
    mk('蓮さん、患者大原様の終末期ケアを医療チームでおこないます','Ren — pati-Oh-term med-team','Calm','saito_doctor'),
    mk('蓮さん、医師大川先生のご助言を医療チームで尊重します','Ren — doc-Oka-adv med-team','Calm close','saito_doctor'),
  ]},
  {id:'conv_10915',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、激突競争市場に勝てる商品を出せ','Our co — coll-compet-mkt-prod','Crisp','hiroshi_boss'),
    mk('はい。京都営業所を技術の宝庫として位置付けます','Yes — Kyoto-branch-tech-trove','Methodical','kenji_office'),
    mk('当社、人気を博した旧商品の復刻版を企画しろ','Our co — pop-old-prod-reissue','Direction','hiroshi_boss'),
    mk('はい。広報の中澤様に新製品PRを任せます','Yes — PR-Naka-new-prod','Update','kenji_office'),
    mk('当社、新任の中尾常務を経営に迎えろ','Our co — new-Naka-MD-wel','Direction','hiroshi_boss'),
    mk('はい。財務の江原様に予算策定を依頼します','Yes — Fin-Eh-budg-req','Update','kenji_office'),
    mk('当社、人事の大原様に新人研修を任せろ','Our co — HR-Oh-newhire-entr','Direction','hiroshi_boss'),
    mk('はい。法務の大川様に契約書確認を依頼します','Yes — Leg-Oka-contr-req','Close','kenji_office'),
  ]},
  {id:'conv_10916',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、サッカーのウイング、つまりウインガーのお話を語って下さったよ、メイちゃん','Aoi — cust-soccer-wing-talk Mei','Reflective','mei_romantic'),
    mk('葵、お客様、IT企業の「○○システムズ」で働かれてるって、メイちゃん','Aoi — cust-IT-Systems-work Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ご自宅でサイボウズの社内チャットを使われてるって、メイちゃん','Aoi — cust-Cybozu-int-chat Mei','Reflective','mei_romantic'),
    mk('葵、お客様、光文社の文庫本がお好みだって、メイちゃん','Aoi — cust-Kobun-paper-fav Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お子様が「ウンコ」期に笑顔だって、メイちゃん','Aoi — cust-kid-"unko"-smile Mei','Wry','mei_romantic'),
    mk('葵、お客様、漫画キャラの「○○丸出し」のセリフを語って下さったよ、メイちゃん','Aoi — cust-mng-"marudashi"-talk Mei','Reflective','aoi_barista'),
    mk('葵、お客様、細木数子氏の占い本がお好きだって、メイちゃん','Aoi — cust-Hosoki-fortune Mei','Reflective','mei_romantic'),
    mk('葵、お客様、小田急線で通勤されてるって、メイちゃん','Aoi — cust-Oda-line-comm Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_10917',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんがサッカーのウイング選手をご贔屓だった','Gran — youth Dad-soccer-wing-fan','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、若い頃、IT企業のシステムズ系で働かれたわよね、あなた?','Yes — Grandpa-youth-Systems-work, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがサイボウズの初期株主だった','Gran — youth Dad-Cybozu-early','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、光文社の小説を蔵書されたわよね、あなた?','Grandpa — youth-Kobun-novel-coll, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがお孫様の「ウンコ」期を可愛がられた','Gran — youth Dad-grdkid-"unko"-love','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、夏に「腹丸出しで寝る癖」があったわよね、あなた?','Grandpa — youth-sum-"bara-marudashi", dear?','Tender wry','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが細木数子氏の占い番組を観られた','Gran — youth Dad-Hosoki-fortune','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、小田急ロマンスカーで箱根に行かれたわよね、あなた?','Grandpa — youth-Oda-Roman-Hak, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_10918',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんがサッカーのウイング、つまりウインガーの動きを教えて下さるわ','Sho — Dad-soccer-wing-teach','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとIT企業のシステムズの展示会に行ったよ','Mei-sis — me Dad-IT-Systems-expo','Eager child','sho_child'),
    mk('翔くん、お父さんがサイボウズの社内SNSを利用されてるわ','Sho — Dad-Cybozu-int-SNS','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと光文社の絵本を読んだよ','Mei-sis — me Dad-Kobun-pic','Eager child','sho_child'),
    mk('翔くん、お父さんが「『ウンコ』って言葉でも面白さに気付くね」って仰ってたわ','Sho — Dad-"unko-fun"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんに「肌着の腹を丸出しにしちゃダメ」って教えて頂いたよ','Mei-sis — me Dad-"under-marudashi-no"-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが「細木数子の占い本は時代を映す」って仰ってたわ','Sho — Dad-"Hosoki-era"-said','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと小田急線で江ノ島に行ったよ','Mei-sis — me Dad-Oda-Eno','Eager close','sho_child'),
  ]},
  {id:'conv_10919',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、サッカー部でウイング、つまりウインガーだったろ','Riku — soccer-wing?','Curious teen','sakura_teen'),
    mk('お前、将来IT企業のシステムズ系に就職するって言ってたな、桜','You — future-Systems-employ Sakura','Curious','riku_teen'),
    mk('リク、お前、サイボウズのインターン応募してたな','Riku — Cybozu-intern-app','Curious','sakura_teen'),
    mk('お前、光文社の文庫本好きだったよな、桜','You — Kobun-paper-fan Sakura','Curious','riku_teen'),
    mk('リク、お前、低学年の頃「ウンコ」連発してたよな','Riku — youn-grade-"unko"','Wry','sakura_teen'),
    mk('お前、海でお腹丸出しで日焼けしたろ、桜','You — beach-bara-marudashi? Sakura','Wry','riku_teen'),
    mk('リク、お前、お祖母様が細木数子の占い好きだって言ってたな','Riku — grnm-Hosoki-fan','Curious','sakura_teen'),
    mk('お前、家族で小田急ロマンスカーに乗ったろ、桜','You — fam-Oda-Roman? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_10920',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんがサッカーのウイング、つまりウインガーのプレー集を観てらっしゃるわ','Sho — Dad-soccer-wing-watch','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとIT企業のシステムズ系のオフィス見学行ったよ','Mom — me Dad-IT-Systems-vis','Eager child','sho_child'),
    mk('翔くん、お父さんがサイボウズの紹介動画を観てらっしゃるわ','Sho — Dad-Cybozu-vid','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと光文社の児童書読んだよ','Mom — me Dad-Kobun-child-book','Eager child','sho_child'),
    mk('翔くん、お父さんが「『ウンコ漢字ドリル』は子供に大人気」って仰ってたわ','Sho — Dad-"Unko-kanji-pop"-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんに「お腹を丸出しに寝ない様」教えて頂いたよ','Mom — me Dad-"bara-marudashi-no"-teach','Earnest child','sho_child'),
    mk('翔くん、お父さんが細木数子の占い特集を観てらっしゃるわ','Sho — Dad-Hosoki-fortune-fea','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんと小田急ロマンスカーで箱根行ったよ','Mom — me Dad-Oda-Roman-Hak','Eager close','sho_child'),
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

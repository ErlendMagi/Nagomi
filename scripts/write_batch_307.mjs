import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_307 manual hand-authored)', generated_at: '2026-06-02T00:00:00.000Z', source_plan_row: '' }

const A_T = ['興味深く','物足りない','好物','お返し','ぶつかり','でっかい','屋内','仕込み']
const B_T = ['独創','船舶','専務','チェックイン','資する','格別','見返り','退任']
const C_T = ['未遂','遭難','警鐘','脱税','伝染','装っ','書記官','触媒']
const D_T = ['エクセル','シャンパン','猛暑','バスケ','棚田','日の出','レプリカ','特訓']

const data = [
  // A
  {id:'conv_06101',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'A mom and son chat at dinner',lines:[
    {speaker:'sho_child',jp:'ママ、今日の宿題、興味深く読んだよ。',en:"Mom, read today's homework with curiosity.",style:'Bright child.'},
    {speaker:'yumiko_mom',jp:'よかった。夕飯、ちょっと物足りないかな?',en:"Glad. Dinner — a bit lacking?",style:'Tender.'},
    {speaker:'sho_child',jp:'ううん。好物のカレー、ありがとう!',en:"No. My favorite curry — thanks!",style:'Animated.'},
    {speaker:'yumiko_mom',jp:'お友達からの誕生日プレゼント、お返ししなきゃね。',en:"Birthday gift from friend — return one.",style:'Warm.'},
    {speaker:'sho_child',jp:'昼休み、ボールがぶつかりそうになった。',en:"At lunch — almost got hit by a ball.",style:'Reflective.'},
    {speaker:'yumiko_mom',jp:'園庭のでっかい木の下で、遊んでね。',en:"Play under the playground's big tree.",style:'Soft.'},
    {speaker:'sho_child',jp:'雨だから、屋内遊技場行こうよ。',en:"Rainy — let's go indoor play area.",style:'Eager.'},
    {speaker:'yumiko_mom',jp:'お父さんが、晩ご飯の仕込みしてくれてる。',en:"Dad's prepping dinner.",style:'Warm close.'},
  ]},
  {id:'conv_06102',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    {speaker:'mei_romantic',jp:'昨夜のドラマ、興味深く観てた。',en:"Last night's drama — watched curiously.",style:'Soft.'},
    {speaker:'aoi_barista',jp:'うん。脚本、ちょっと物足りない場面もあったね。',en:"Yes. Script — some lacking scenes too.",style:'Wry.'},
    {speaker:'mei_romantic',jp:'主役の好物が、私と同じだった。',en:"Lead's fave food — same as mine.",style:'Animated.'},
    {speaker:'aoi_barista',jp:'お祝いに、お返しのケーキ、作ろうか。',en:"Celebration — return cake?",style:'Bright.'},
    {speaker:'mei_romantic',jp:'今日、駅で人とぶつかりそうになって、ドキッとした。',en:"Almost bumped into someone at the station — startled.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'駅前のでっかい看板、新しくなったよね。',en:"Big station sign — new.",style:'Casual.'},
    {speaker:'mei_romantic',jp:'今夜、屋内のホテルバー、行ってみる?',en:"Tonight — try the indoor hotel bar?",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'うん。明日のディナー、仕込みは私がしておくね。',en:"Yes. Tomorrow's dinner — I'll do the prep.",style:'Warm close.'},
  ]},
  {id:'conv_06103',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Two teens chat',lines:[
    {speaker:'sakura_teen',jp:'今日の歴史の授業、興味深く聞いた。',en:"Today's history class — listened curiously.",style:'Bright teen.'},
    {speaker:'riku_teen',jp:'うん。教科書、ちょっと物足りない説明もあったな。',en:"Yeah. Textbook — some lacking explanations.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'昼の唐揚げ、好物だから、嬉しかった。',en:"Lunch karaage — fave, made me happy.",style:'Animated.'},
    {speaker:'riku_teen',jp:'バレンタインのお返し、何にする?',en:"Valentine return — what?",style:'Probe.'},
    {speaker:'sakura_teen',jp:'廊下で、後輩とぶつかりそうになって、謝った。',en:"In the hall — almost bumped a junior, apologized.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'校門の前のでっかい銀杏、紅葉してる。',en:"Big ginkgo at the gate — turning yellow.",style:'Wistful.'},
    {speaker:'sakura_teen',jp:'体育、屋内コートに変更だって。',en:"PE — moved to indoor court.",style:'Casual.'},
    {speaker:'riku_teen',jp:'夕飯の仕込み、母さん手伝うんだ。',en:"Dinner prep — helping Mom.",style:'Warm close.'},
  ]},
  {id:'conv_06104',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'An elderly couple chats',lines:[
    {speaker:'hiroshi_elder',jp:'昔の写真、興味深く眺めてる。',en:"Old photos — looking with curiosity.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'うん。最近、テレビ番組、物足りない時があるわ。',en:"Yes. TV shows — sometimes lacking lately.",style:'Soft.'},
    {speaker:'hiroshi_elder',jp:'孫の好物、お餅、たくさん用意したよ。',en:"Grandkid's fave — mochi, lots ready.",style:'Warm.'},
    {speaker:'sachiko_grandma',jp:'お返しに、孫が手紙くれたわよ。',en:"In return, grandkid wrote a letter.",style:'Tender.'},
    {speaker:'hiroshi_elder',jp:'昨日、階段でぶつかりそうになった、注意しないと。',en:"Yesterday — almost bumped on stairs; careful.",style:'Wry.'},
    {speaker:'sachiko_grandma',jp:'裏庭のでっかい柿の木、また実をつけた。',en:"Backyard big persimmon — fruited again.",style:'Bright.'},
    {speaker:'hiroshi_elder',jp:'寒くなったから、屋内で過ごす時間、長くなる。',en:"Cold now — longer indoor time.",style:'Reflective.'},
    {speaker:'sachiko_grandma',jp:'冬の漬物、仕込み始めないとね。',en:"Winter pickles — gotta start prep.",style:'Warm close.'},
  ]},
  {id:'conv_06105',cluster:'A',ambient:'park_distant_birds',cast:['ren_uni','sakura_teen'],targets:A_T,scenario:'A senpai and a teen chat',lines:[
    {speaker:'ren_uni',jp:'桜、今日のゼミ、興味深く聞けた?',en:"Sakura — today's seminar, listened with interest?",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。でも一部、説明が物足りない場面もありました。',en:"Yes. But some lacking explanations.",style:'Earnest teen.'},
    {speaker:'ren_uni',jp:'打ち上げで、好物の天ぷら、出る予定。',en:"After-party — fave tempura planned.",style:'Bright.'},
    {speaker:'sakura_teen',jp:'お礼のお返しに、お菓子持って行きます。',en:"For thanks — bringing sweets in return.",style:'Warm.'},
    {speaker:'ren_uni',jp:'公園で犬とぶつかりそうになって、笑った。',en:"At the park — almost bumped a dog, laughed.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'入口のでっかい樹齢の木、見ましたか。',en:"Big-old tree at the entrance — saw it?",style:'Curious.'},
    {speaker:'ren_uni',jp:'うん。雨の時、屋内のカフェに移動しよう。',en:"Yes. If rain — move to indoor cafe.",style:'Casual.'},
    {speaker:'sakura_teen',jp:'打ち上げの仕込み、私もお手伝いします。',en:"After-party prep — I'll help too.",style:'Bright close.'},
  ]},

  // B
  {id:'conv_06106',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'A boss reviews business operations',lines:[
    {speaker:'hiroshi_boss',jp:'独創的な提案、若手から募れ。',en:"Original proposals — solicit from youth.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。船舶部門、専務の指導下で進めています。',en:"Yes. Shipping — under Senior VP's guidance.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'出張先のホテル、チェックイン、早めに。',en:"Travel hotel — check in early.",style:'Direction.'},
    {speaker:'kenji_office',jp:'業界発展に資する提案、社内で集めています。',en:"Industry-development-helping proposals — gathering internally.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'格別な顧客対応、見返りを求めず、進めろ。',en:"Special VIP care — without seeking returns.",style:'Direction.'},
    {speaker:'kenji_office',jp:'社長の退任に向けて、後継体制も整えます。',en:"Toward CEO retirement — successor structure too.",style:'Commitment.'},
    {speaker:'hiroshi_boss',jp:'長期視点で。',en:"Long-term view.",style:'Close.'},
  ]},
  {id:'conv_06107',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers prep a project',lines:[
    {speaker:'yuki_office',jp:'独創性ある企画、来期の柱に。',en:"Original plans — next term's pillar.",style:'Brisk.'},
    {speaker:'kenji_office',jp:'はい。船舶輸送、専務の決裁、待ちです。',en:"Yes. Shipping — awaiting Senior VP's sign-off.",style:'Cooperative.'},
    {speaker:'yuki_office',jp:'海外チェックインカウンターの設計、進んでる?',en:"Overseas check-in counter design — progressing?",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。利益に資する設計、目指します。',en:"Yes. Profit-helping design — aim.",style:'Update.'},
    {speaker:'yuki_office',jp:'格別な来賓を、見返りなくもてなす運用に。',en:"Special guests — treat without expecting returns.",style:'Direction.'},
    {speaker:'kenji_office',jp:'役員退任、新体制構築、急ぎます。',en:"Officer retirement — rush new structure.",style:'Commitment.'},
    {speaker:'yuki_office',jp:'よし、進めよう。',en:"Good — proceed.",style:'Close.'},
  ]},
  {id:'conv_06108',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'A boss mentors a uni intern',lines:[
    {speaker:'hiroshi_boss',jp:'蓮、企業に独創性、命だ。',en:"Ren, originality — firm's life.",style:'Mentor.'},
    {speaker:'ren_uni',jp:'はい。船舶業界、規模感、勉強になります。',en:"Yes. Shipping scale — instructive.",style:'Eager.'},
    {speaker:'hiroshi_boss',jp:'専務との面会、勉強の機会だ。',en:"Senior-VP meeting — learning chance.",style:'Direction.'},
    {speaker:'ren_uni',jp:'海外チェックインの慣習、現場で学びます。',en:"Overseas check-in norms — learn on site.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'CSR活動、社会に資する形で。',en:"CSR — society-helping form.",style:'Direction.'},
    {speaker:'ren_uni',jp:'格別なご縁、見返りなく、続けたいです。',en:"Special ties — without return, want to keep.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'退任後の人生設計も、若いうちから考えろ。',en:"Post-retirement life — plan from young.",style:'Close.'},
  ]},
  {id:'conv_06109',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'A police officer briefs on transit security',lines:[
    {speaker:'takeda_officer',jp:'独創的な防犯策、警察も注目しています。',en:"Original crime-prevention — police watch.",style:'Calm.'},
    {speaker:'kenji_office',jp:'はい。船舶警備、警察と連動を強化します。',en:"Yes. Shipping security — strengthen police linkage.",style:'Cooperative.'},
    {speaker:'takeda_officer',jp:'専務クラスの来訪、警備手配を共有します。',en:"Senior-VP visits — share security plans.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'はい。チェックインカウンターでの記録、追跡対応も。',en:"Yes. Check-in records — tracking too.",style:'Update.'},
    {speaker:'takeda_officer',jp:'安全に資する取り組み、引き続き。',en:"Safety-helping efforts — continue.",style:'Procedural.'},
    {speaker:'kenji_office',jp:'格別な対応、見返りなく、現場でも徹底。',en:"Special response — without return, strict on site.",style:'Commitment.'},
    {speaker:'takeda_officer',jp:'当方の課長、退任予定、後任にも周知を。',en:"Our chief is retiring; inform the successor too.",style:'Close.'},
  ]},
  {id:'conv_06110',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'A retired exec mentors',lines:[
    {speaker:'hiroshi_elder',jp:'独創性、若い頃から磨いてきた。',en:"Originality — honed since youth.",style:'Sage.'},
    {speaker:'hiroshi_boss',jp:'はい。船舶事業、専務に任せ、軌道に乗せます。',en:"Yes. Shipping biz — entrust Senior VP, get on track.",style:'Earnest.'},
    {speaker:'hiroshi_elder',jp:'国際的チェックイン、グローバル人材を活用しろ。',en:"Intl check-in — use global talent.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'社会に資する取り組み、CSRで強化しています。',en:"Society-helping efforts — CSR-strengthened.",style:'Commitment.'},
    {speaker:'hiroshi_elder',jp:'格別な顧客、見返りに頼るな。',en:"Special customers — don't depend on returns.",style:'Direction.'},
    {speaker:'hiroshi_boss',jp:'はい。私の退任後も、信頼の絆、続きますように。',en:"Yes. Post-retirement too — may trust endure.",style:'Reflective close.'},
  ]},

  // C
  {id:'conv_06111',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'A police officer briefs about a crime case',lines:[
    {speaker:'takeda_officer',jp:'本件、未遂で済んだ事案です。',en:"This case — ended at attempt.",style:'Calm.'},
    {speaker:'ren_uni',jp:'遭難事故の現場、捜索、続いていますか。',en:"Distress site — search ongoing?",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。社会全体に警鐘を鳴らす事案でした。',en:"Yes. A case sounding an alarm to society.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'脱税疑惑の関係者、別捜査と聞きましたが。',en:"Tax-evasion-suspected related party — separate inquiry?",style:'Probe.'},
    {speaker:'takeda_officer',jp:'はい。感染症の伝染リスクも、医療班と確認しました。',en:"Yes. Confirmed infection-transmission risk with medical team.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'被疑者、職員を装っていたんですね。',en:"Suspect — posed as staff.",style:'Curious.'},
    {speaker:'takeda_officer',jp:'はい。書記官の証言、決定的でした。',en:"Yes. Clerk's testimony — decisive.",style:'Firm.'},
    {speaker:'ren_uni',jp:'触媒のように事件展開を加速させた要因、別途分析しますね。',en:"Catalyst-like accelerating factor — separately analyzed.",style:'Reflective close.'},
  ]},
  {id:'conv_06112',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'A teacher discusses a paper on social issues',lines:[
    {speaker:'asuka_teacher',jp:'論文、未遂事件の社会的影響、丁寧でしたね。',en:"Paper — attempted-incident social impact, careful.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。遭難事案も、過去事例と比較しました。',en:"Yes. Distress cases — compared with past.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'メディアが警鐘を鳴らす役割、ご担当ですね。',en:"Media's alarm-sounding role — you cover.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'脱税問題、社会の信頼を損ねる仕組み、章にしました。',en:"Tax-evasion damages-trust structures — chapter.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'感染症伝染の章、医学とも接続していますね。',en:"Infection-transmission chapter — links to medicine.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'真実を装って広まる偽情報、別章で論じました。',en:"Truth-disguised misinfo spreading — separate chapter.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'書記官の役割、歴史的視点で扱う、独創的です。',en:"Clerk's role — historic angle, original.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'伝染拡大の触媒となる要素、最終章で整理します。',en:"Spread-catalyst factors — final chapter organize.",style:'Earnest close.'},
  ]},
  {id:'conv_06113',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'A doctor discusses public-health with a reporter',lines:[
    {speaker:'saito_doctor',jp:'蓮さん、未遂感染、初期対応で防げた事例、報告されています。',en:"Ren — attempted-infection prevented at initial response.",style:'Calm.'},
    {speaker:'ren_uni',jp:'遠隔地で遭難した患者、搬送、急務でしたね。',en:"Remote distress patients — urgent transport.",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。WHOが警鐘を鳴らす事案として、注目を集めました。',en:"Yes. WHO-alarm-sounding case, attention drawn.",style:'Patient.'},
    {speaker:'ren_uni',jp:'医療機関の脱税疑惑、別件で報じられましたよね。',en:"Medical-org tax-evasion separately reported.",style:'Probe.'},
    {speaker:'saito_doctor',jp:'はい。感染の伝染、密室で起こりやすい現実があります。',en:"Yes. Transmission — easily in closed rooms.",style:'Informative.'},
    {speaker:'ren_uni',jp:'医療従事者を装った詐欺、警察と連携対応ですか。',en:"Med-staff-posed fraud — police-cooperation?",style:'Curious.'},
    {speaker:'saito_doctor',jp:'はい。記録は書記官的に厳密、データ管理しています。',en:"Yes. Records are clerk-grade strict; data managed.",style:'Procedural.'},
    {speaker:'ren_uni',jp:'触媒的に医療連携を進めた研究者、いますか。',en:"Catalyst-like medical-cooperation drivers — exist?",style:'Curious close.'},
  ]},
  {id:'conv_06114',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'A boss reviews compliance risk',lines:[
    {speaker:'hiroshi_boss',jp:'未遂のセキュリティ事案、再発防止、進めろ。',en:"Attempted-security cases — prevent recurrence.",style:'Crisp.'},
    {speaker:'kenji_office',jp:'はい。海外遭難リスク、出張者に周知しています。',en:"Yes. Overseas distress risk — informed travelers.",style:'Methodical.'},
    {speaker:'hiroshi_boss',jp:'監査、警鐘を鳴らす可能性、避けたい。',en:"Audits — avoid potential warnings.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。脱税疑惑、内部監査で確認済みです。',en:"Yes. Tax-evasion doubts — internally audited.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'業界内の伝染的な不祥事連鎖、当社で食い止めたい。',en:"Industry-wide scandal-spread — want to halt here.",style:'Direction.'},
    {speaker:'kenji_office',jp:'政治家を装った詐欺電話、社員に注意喚起しました。',en:"Politician-posed scam calls — alerted staff.",style:'Update.'},
    {speaker:'hiroshi_boss',jp:'書記官的な記録管理、徹底しろ。',en:"Clerk-grade record mgmt — strict.",style:'Direction.'},
    {speaker:'kenji_office',jp:'はい。組織改革の触媒となるよう、努めます。',en:"Yes. Strive to be catalysts for reform.",style:'Close.'},
  ]},
  {id:'conv_06115',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'A teacher walks a teen through current events',lines:[
    {speaker:'asuka_teacher',jp:'桜さん、ニュース、未遂事件の報じ方、比較していますね。',en:"Sakura — comparing how attempts are reported.",style:'Calm.'},
    {speaker:'sakura_teen',jp:'はい。山岳遭難の事例、過去の報道、まとめました。',en:"Yes. Mountain-distress cases — past coverage summarized.",style:'Earnest teen.'},
    {speaker:'asuka_teacher',jp:'メディアが警鐘を鳴らす役割、章として扱いました?',en:"Media alarm-role — covered as a chapter?",style:'Engaged.'},
    {speaker:'sakura_teen',jp:'はい。脱税報道、政治家の事案、丁寧に。',en:"Yes. Tax-evasion politicians — careful.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'感染症伝染、デマの拡散も、別章ですね。',en:"Infection-transmission and rumor spread — separate chapter.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'公務員を装った詐欺、社会問題化していますね。',en:"Civil-servant-posed scams — social issue.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'書記官的な公式記録の意義、最終章で論じます。',en:"Clerk-grade official records' import — final chapter.",style:'Reflective.'},
    {speaker:'sakura_teen',jp:'触媒的な変革者、地域でも探してみます。',en:"Catalyst-like reformers — also look locally.",style:'Earnest close.'},
  ]},

  // D
  {id:'conv_06116',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends plan a summer',lines:[
    {speaker:'mei_romantic',jp:'家計簿、エクセルで管理始めたの。',en:"Started budget mgmt via Excel.",style:'Bright.'},
    {speaker:'aoi_barista',jp:'いいね。誕生日に、シャンパンで乾杯しよう。',en:"Nice. Toast with champagne on your birthday.",style:'Soft.'},
    {speaker:'mei_romantic',jp:'今年の夏、猛暑になりそう。',en:"This summer — looks intense.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'うちの弟、バスケに夢中。',en:"My bro's into basketball.",style:'Animated.'},
    {speaker:'mei_romantic',jp:'今度、棚田の景色、見に行きたい。',en:"Wanna see rice-terraces.",style:'Wistful.'},
    {speaker:'aoi_barista',jp:'山の上で、日の出、見られたら、感動するね。',en:"Mountain sunrise — would move.",style:'Bright.'},
    {speaker:'mei_romantic',jp:'博物館で、武将の鎧、レプリカ、触れるんだって。',en:"Museum — samurai-armor replica, touchable.",style:'Curious.'},
    {speaker:'aoi_barista',jp:'夏前に、ダイエット特訓、始めましょう。',en:"Pre-summer — diet boot camp starts.",style:'Cheerful close.'},
  ]},
  {id:'conv_06117',cluster:'D',ambient:'office_quiet_low',cast:['ren_uni','hiroshi_boss'],targets:D_T,scenario:'An intern profiles a corporate event',lines:[
    {speaker:'ren_uni',jp:'蓮です。発表会、エクセル資料、確認できますか。',en:"Ren here. Launch — verify Excel materials?",style:'Polite.'},
    {speaker:'hiroshi_boss',jp:'うん。乾杯はシャンパンで、社員にもふるまう。',en:"Yes. Toast with champagne; treat staff too.",style:'Easy.'},
    {speaker:'ren_uni',jp:'今年の猛暑対策、会場での対応もありますか。',en:"This year's heatwave — venue measures?",style:'Curious.'},
    {speaker:'hiroshi_boss',jp:'うん。バスケットコート併設の会場で、休憩エリア、設計済み。',en:"Yes. Basketball-court venue — break area designed.",style:'Direction.'},
    {speaker:'ren_uni',jp:'プロモ動画、棚田や日の出のロケ、入っていますね。',en:"Promo video — rice-terraces and sunrise shots.",style:'Earnest.'},
    {speaker:'hiroshi_boss',jp:'うん。陶磁器のレプリカ、展示する。',en:"Yes. Pottery replicas — displayed.",style:'Bright.'},
    {speaker:'ren_uni',jp:'プレゼン特訓、何度も繰り返したいです。',en:"Presentation drills — repeat many times.",style:'Eager close.'},
  ]},
  {id:'conv_06118',cluster:'D',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:D_T,scenario:'A teacher and student discuss a culture event',lines:[
    {speaker:'asuka_teacher',jp:'論文、エクセル表計算と歴史データ、統合、興味深いですね。',en:"Paper — Excel and historical data integration, interesting.",style:'Calm.'},
    {speaker:'ren_uni',jp:'はい。発表会の打ち上げ、シャンパンで皆乾杯しました。',en:"Yes. Launch after-party — toasted with champagne.",style:'Earnest.'},
    {speaker:'asuka_teacher',jp:'猛暑時の屋外行事、安全配慮、丁寧でしたね。',en:"Heatwave outdoor events — safety care careful.",style:'Engaged.'},
    {speaker:'ren_uni',jp:'若手バスケチームの取り組み、章に入れました。',en:"Young basketball-team efforts — chapter.",style:'Probe.'},
    {speaker:'asuka_teacher',jp:'地方の棚田保存、研究的価値が高いですね。',en:"Rural rice-terrace preservation — high research value.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'はい。日の出ロケでの撮影、感動的でした。',en:"Yes. Sunrise-shoot was moving.",style:'Curious.'},
    {speaker:'asuka_teacher',jp:'歴史的遺物、レプリカ展示、教育効果が大きいですね。',en:"Historical artifacts as replicas — large educational effect.",style:'Reflective.'},
    {speaker:'ren_uni',jp:'最終章、選手の特訓密度、データで示しました。',en:"Final chapter — athlete-training density shown by data.",style:'Earnest close.'},
  ]},
  {id:'conv_06119',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Two teens chat about plans',lines:[
    {speaker:'sakura_teen',jp:'宿題、エクセルでまとめてる。',en:"Homework — summarizing in Excel.",style:'Casual teen.'},
    {speaker:'riku_teen',jp:'家のお祝い、シャンパンの代わりにジュースだけど。',en:"Home celebration — juice instead of champagne.",style:'Wry.'},
    {speaker:'sakura_teen',jp:'今夏、猛暑予想、エアコン、念入りに掃除しなきゃ。',en:"Heatwave summer — clean AC thoroughly.",style:'Reflective.'},
    {speaker:'riku_teen',jp:'バスケ部、夏合宿で特訓するんだ。',en:"Basketball club — boot camp in summer.",style:'Animated.'},
    {speaker:'sakura_teen',jp:'修学旅行で、棚田の景色、見られるって。',en:"School trip — rice-terraces visible.",style:'Bright.'},
    {speaker:'riku_teen',jp:'山頂で日の出、見られるかな。',en:"Sunrise from summit — possible?",style:'Wistful.'},
    {speaker:'sakura_teen',jp:'博物館の刀のレプリカ、触ってみたい。',en:"Museum-sword replica — want to touch.",style:'Curious.'},
    {speaker:'riku_teen',jp:'特訓、サボらないようにね。',en:"Don't skip the drills.",style:'Wry close.'},
  ]},
  {id:'conv_06120',cluster:'D',ambient:'cafe_quiet_chatter',cast:['daichi_kansai','aoi_barista'],targets:D_T,scenario:'A chef and barista plan a summer event',lines:[
    {speaker:'daichi_kansai',jp:'葵さん、夏フェア、予約管理、エクセルで一元化しよか。',en:"Aoi-san, summer fair — book mgmt via single Excel.",style:'Friendly Kansai.'},
    {speaker:'aoi_barista',jp:'はい。シャンパン、限定ボトル、用意します。',en:"Yes. Champagne — limited bottles prepared.",style:'Soft.'},
    {speaker:'daichi_kansai',jp:'猛暑期は、屋外席に日よけ、追加しよか。',en:"In heatwaves — add shade to outdoor seats.",style:'Practical.'},
    {speaker:'aoi_barista',jp:'バスケ部のお客様用、特別席組みます。',en:"Basketball-club guests — special seats.",style:'Bright.'},
    {speaker:'daichi_kansai',jp:'棚田の写真展、店壁を貸そか。',en:"Rice-terrace photo show — lend wall space?",style:'Knowing.'},
    {speaker:'aoi_barista',jp:'日の出を見ながら朝活、メニューも限定で。',en:"Sunrise-watching morning sessions — limited menu.",style:'Cheerful.'},
    {speaker:'daichi_kansai',jp:'地元名物のレプリカ、置物に使うで。',en:"Local-specialty replicas — decor.",style:'Reflective.'},
    {speaker:'aoi_barista',jp:'スタッフ向けの接客特訓、来週から始めましょう。',en:"Staff hospitality drills — start next week.",style:'Warm close.'},
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
